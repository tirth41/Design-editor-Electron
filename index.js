const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    // Create a new BrowserWindow instance
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load the HTML file into the window
    mainWindow.loadFile('./src/index.html');  // Replace with your HTML file path

    globalShortcut.register('Escape', () => {
        console.log('Escape key pressed, closing the app...');
        app.quit();  // Quit the app
    });

    // Handle window closed
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.whenReady().then(() => {
    createWindow();

    // Mac-specific behavior: quitting the app when all windows are closed
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
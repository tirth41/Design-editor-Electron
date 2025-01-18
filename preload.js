const { contextBridge, ipcRenderer } = require('electron');

// Expose only necessary APIs to the renderer
contextBridge.exposeInMainWorld('electron', {
    sendScreenId: (screenId) => ipcRenderer.send('screen-id', screenId),
    onScreenIdReceived: (callback) => ipcRenderer.on('screen-id-received', callback),
});

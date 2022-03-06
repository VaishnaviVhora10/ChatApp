// console.log('hello world');
// Main Process
const {app, BrowserWindow, ipcMain, Notification} = require('electron');
const isDev = !app.isPackaged;
const path = require('path')
function createWindow(){
    // Renderer Process
  const window =  new BrowserWindow({
        width:800,
        height:600,
        backgroundColor: 'white',
        
        webPreferences:{
            nodeIntegration: false,
            contextIsolation: true,
            worldSafeExecuteJavaScript: true,
            preload:path.join(__dirname, 'preload.js')
        },
    })
     
    window.loadFile('index.html');
    isDev && window.webContents.openDevTools();
}

if(isDev){
    require('electron-reload')(__dirname,{
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}

app.whenReady().then(createWindow);
ipcMain.on('notify',(_, message)=>{
new Notification({title:'Notification', body:message}).show();
})

ipcMain.on('app-quit',()=>{
    app.quit();
})
app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on('activate',()=>{
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
})
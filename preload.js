const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld('electron',{
    notificationApi:{
    sendNotification(message, jsExpression){
        eval(jsExpression)
        // ipcRenderer.send('notify',message);
    }},
batteryApi:{

},
fieldApi:{

}

})


// window.sendNotification = (message)=>{
//     ipcRenderer.send('notify',message);


// }

const electron = require('electron')
const { app, BrowserWindow } = electron
const path = require('path')
const url = require('url')

const connect = require('connect')
var serverStatic = require('serve-static')

let win;

function createWindow() {
    const {Width, Height} = electron.screen.getPrimaryDisplay().workAreaSize

    win = new BrowserWindow({ Width, Height,
        webPreferences: {
            nodeIntegration: false
        },
        fullscreen: true,
        frame: false,
        toolbar: false,
        'auto-hide-menu-bar': true
     });

     win.setMenuBarVisibility(false);
     win.setAutoHideMenuBar(true);
    
    /*win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));*/
    win.loadURL('http://localhost:8000');

    win.webContents.session.clearCache(function() {
        
    });
}

connect().use(serverStatic(__dirname))
.listen(8000, function() {
    app.on('ready', createWindow);
});

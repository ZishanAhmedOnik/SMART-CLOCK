const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

const connect = require('connect')
var serverStatic = require('serve-static')

let win;

function createWindow() {
    win = new BrowserWindow({ 
        width: 320, 
        height: 240,
        webPreferences: {
            nodeIntegration: false
        }
     });
    
    /*win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));*/
    win.loadURL('http://localhost:8000');
}

connect().use(serverStatic(__dirname))
.listen(8000, function() {
    app.on('ready', createWindow);
});
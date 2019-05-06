const { app, BrowserWindow } = require( 'electron' );
const path = require( 'path' );
let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({ width: 1400, height: 600 });
    mainWindow.setMenuBarVisibility(false);
    // 讀取主要的html
    mainWindow.loadURL( path.join('file://', __dirname, 'index.html'));
    // 開啟debug tool
    mainWindow.webContents.openDevTools({
	detach: true,
    });
    
    mainWindow.on('closed', function () {
        mainWindow = null;
        process.exit(0);
    });
    
});

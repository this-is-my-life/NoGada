const electron = require('electron')
const app = electron.app
let mainWindow

function createMainWindow () {
  mainWindow = new electron.BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    width: 800,
    height: 600
  })
  mainWindow.setMenu(null)
  mainWindow.loadFile('./src/main.html')
  mainWindow.toggleDevTools()
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', () => {
  createMainWindow()
})

app.on('activate', () => {
  if (mainWindow) {
    createMainWindow()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

const electron = require('electron')
const app = electron.app
let mainWindow

function createMainWindow () {
  mainWindow = new electron.BrowserWindow({
    minWidth: 1500,
    minHeight: 700,
    width: 1500,
    height: 700
  })
  mainWindow.setMenu(null)
  mainWindow.loadFile('./src/main.html')
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

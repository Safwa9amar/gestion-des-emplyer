const { app, BrowserWindow } = require("electron");
// const startExpressServer = require("./server/server");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL("http://localhost:3000");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();
  // startExpressServer();

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  app.on("before-quit", () => {
    // Perform cleanup or handle events before quitting
  });
});
// check any changes in the file and restart the server
// npm install -D nodemon
// npm install -D electron-reload
// npm install -D electron
// npm install -D electron-builder
// npm install -D concurrently
// npm install -D wait-on

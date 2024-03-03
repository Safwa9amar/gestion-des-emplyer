const { app, BrowserWindow } = require("electron");
// const startExpressServer = require("../server/server");
const path = require("path");
const url = require("url");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    // hide the default menu
    // autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load the React app
  mainWindow.loadURL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : url.format({
          pathname: path.join(__dirname, "index.html"),
          protocol: "file",
          slashes: true,
        })
  );

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

const electron = require('electron')
    // Moduł do kontrolowania działania aplikacji.
const app = electron.app
    // Moduł do tworzenia natywnego okna przeglądarki.
const BrowserWindow = electron.BrowserWindow


const path = require('path')
const url = require('url')

// Zachowaj globalne odniesienie do obiektu window, jeśli nie, to okno zostanie 
// automatycznie zamknięte, kiedy obiekt JavaScript posiada śmieci zebrane.
let mainWindow

function createWindow() {
    // Tworzenie okna przeglądarki.
    mainWindow = new BrowserWindow({ width: 800, height: 600, transparent: true, frame: false })

    // i załadowanie strony index.html do aplikacji.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Automatyczne otwarcie narzedzi DevTools. lub recznie [Ctrl]+[Shift]+[I]
    // mainWindow.webContents.openDevTools()

    // Emitowane, gdy okno jest zamknięte.
    // mainWindow.on('closed', function() {
    // Wyłuskiwania obiektu window, zazwyczaj będzie można przechowywać okna w tablicy, 
    // jeśli aplikacja obsługuje wiele okien, jest to czas, kiedy należy usunąć odpowiedni element.
    // mainWindow = null
    // })
}

// Ta metoda będzie wywoływana kiedy Electron zakończy inicjalizacjie i jest gotowy 
// do tworzenia okna przeglądarki. Niektóre funkcje API mogą być wykorzystane dopiero 
// po wystąpieniu tego zdarzenia.
app.on('ready', createWindow)

// Zakończ, gdy wszystkie okna są zamknięte.
app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})

// W tym pliku można dołączyć resztę specyficznego procesu głównego kodu Twojej aplikacji. 
// Można również umieścić je w oddzielnych plikach i wymagają ich tutaj.
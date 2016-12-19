# cisgen-main
# ![](docs/cisgen.logo.jpg)

**Dokumentacja**
> [**cisgen-main.wiki**](https://github.com/Cisowscy/cisgen-main/wiki) - Po słowie o wszystkim..

# Jak użyć?
**uruchom konsole i przejdź do odpowiedniej ścieżki, a następnie wprowadź**

```bash
# Klonuje Repozytorium
git clone https://github.com/Cisowscy/cisgen-main.git
# Przechodź do Repozytorium
cd cisgen-main
# Instaluj zależności z pliku package.json
npm install
# uruchom tę aplikację
npm start
```
> aby wykonać powyższe procedury wymagane są: [Git](https://git-scm.com) i  [Node.js](https://nodejs.org/en/download/) (wraz z [npm](http://npmjs.com)) 



# Struktura Repozytorium

- **`LICENSE.md`** // *plik licencji mojej aplikacji*
- **`README.md`** // *plik info który właśnie czytasz*
- **`.gitignore`** // *plik cofig. git - wskazuje co git ma ignorować*
- **`.gitmodules`** // *plik cofig. git - wskazuje moduły zależne*
- **`package.json`** // *plik cofig. git - wskazuje pakiety skrypty i zależności naszego programu*
- **`gitsubmodules`** // *folder z modułami zależnymi*
- **`docs`** // *folder z elementami README, WIKI, DOCS i PAGES*
- **`main.js`** // *Uruchamia aplikację i tworzy okno przeglądarki* **ELECTRON** *do renderowania HTML. Jest to główny proces aplikacji.*
- **`index.html`** // *Strona internetowa do renderowania. Jest to proces renderujący aplikacji.*
- **`renderer.js`**  //**ELECTRON** *This file is required by the index.html file and will be executed in the renderer process for that window. All of the Node.js APIs are available in this process.*
-  (brak na tym etapie) **`tsconfig.json`** // *plik cofig. angular2 TypeScript - wskazuje parametry kompilacji* 



## `package.json`
1. ### biblioteki zależne ` "devDependencies"`
>- [**electron** ^1.4.12](https://www.npmjs.com/package/electron)
>- [**jscs** ^3.0.7](https://www.npmjs.com/package/jscs)
> `npm outdated` // *komenda ta sprawdza i pokazuje czy są dostępne aktyualizacje bibliotek*

2. ### skrypty

- **`npm start`** urchamia naszą aplikacje w oknie przyużyciu biblioteki Electron.Atom.io


# ciąg dalszy nastąpi

..
.. niebawem

# używane programy

>- [**node.JS**  v7.2.1 (wraz z npm 3.10.10)](https://nodejs.org/en/download/current/)
>- GIT: [**git** 2.11.0](https://git-scm.com/downloads); [**GitHub** Desktop](https://desktop.github.com/); [**Cycligent** git Tool](https://www.cycligent.com/git-tool); [**Git**Kraken](https://www.gitkraken.com/); [**SourceTree**](https://www.sourcetreeapp.com/); 
>- KONSOLA: [**CMD**er](http://cmder.net/)
>- EDYTOR `.MD`:  [**Marp**](https://yhatt.github.io/marp/); lub [**Haroopad**](http://pad.haroopress.com/); lub  [**abricotine**](http://abricotine.brrd.fr/); 
> - EDYTORY:  [JetBrains**WebStorm**](https://www.jetbrains.com/webstorm/);  [**Visual Studio** 2017 Release Candidate](https://www.visualstudio.com/pl/vs/visual-studio-2017-rc/);  [**Visual Studio** Code](https://code.visualstudio.com/insiders);  [**Atom**](https://atom.io/beta); 

#### License [Apache 2.0](LICENSE.md)
[**Jan Roman Cisowski** from Krakow](https://www.facebook.com/JanRomanCisowski)

# test-angular-youtube

:ledger: Testowa aplikacja oparta na Angular symulująca portal z filmami.

## Demo 🎉

* production: <https://piecioshka.github.io/test-angular-youtube/>
* staging: <https://test-angular-youtube.herokuapp.com/>
* development: <http://localhost:4200/>

## Features

* :white_check_mark: Stworzenie komponentu z breadcrumbem (menu horyzontalne)
* :white_check_mark: Stworzenie komponentu z listą miniaturek (carousel)
* :no_entry: Zasilanie komponentu danymi od komponentu-rodzica — `@Input`
* :no_entry: Pobieranie informacji z komponentu-dziecka — `@Output`
* :white_check_mark: Zaprezentować listę miniaturek filmów wraz z tytułami i skróconym opisem
    + [x] TJ: Spr. czy gdy tablica jest pusta, to lista filmów jest pusta
    + [x] TJ: Spr. czy gdy tablica jest pusta, to lista filmów wyświetla fallback tekst
    + [x] TJ: Spr. czy gdy tablica jest równa 3 to liczba wyrenderowanych filmów równa jest 3
    + [ ] TE: Spr. czy po kliknięciu w film, użytkownik zostanie przeniesiony na profil filmu
* :white_check_mark: Pobierać listę filmów z serwera (`HttpClientModule`)
    + [ ] TJ: Spr. czy jest realizowany request po wyrenderowaniu komponentu
* :white_check_mark: Zaprezentować profil filmu: tytuł, poster oraz opis
    + [ ] TJ: Spr. czy są renderowane dane, które przekazujemy do komponentu
* :white_check_mark: Dodać zabezpieczenie przed wyświetleniem filmu, którego nie ma w bazie
    + [ ] TE: Spr. czy kiedy podamy nieznany ID filmu, to czy zostaniemy przekierowani na stronę 404
* :white_check_mark: Wyszukać film po tytule
    + [ ] TE: Spr. czy kiedy podamy nieznaną nazwę filmu, to czy wyświetli się komunikat z brakiem znalezionych filmów
    + [ ] TE: Spr. czy po wpisaniu nazwy istniejącgo filmu, to czy zostanie on wyświetlony na liście z filmami
* :white_check_mark: Ustawić autofocus na polu wyszukiwania
    + [ ] TE: Spr. czy po wejściu do aplikacji jest od razu ustawiony focus
* :white_check_mark: Udostępnić możliwość sortowania listy filmów
    + [ ] TE: Spr. czy istnieją przyciski do sortowania
    + [ ] TJ: Spr. czy po kliknięciu w przyciski kolejność wyświetlanych elementów się zmienia
* :white_check_mark: Mechanizm paginacji (`ngx-pagination`)
    + [ ] TE: Spr. czy po wejściu na drugą stronę zmienia się lista filmów
* :white_check_mark: Zdefiniować 3 konfiguracje z innymi URLami do backendu:
    + development
    + production
    + staging
* :white_check_mark: Narysować diagram z architekturą
* :white_check_mark: Zmienić strategię URLi na `HashLocationStrategy`
* :white_check_mark: Routing Lazy Loading (strona z autorami)
* :white_check_mark: Server-side rendering

![](./docs/scheme.png)

## Krok po kroku 👣

### 1. Setup z Angular CLI

<details>

* `npm install -g @angular/cli`
* `ng new NAZWA_PROJEKTU`
* Ustawić tytuł strony: `YouTube`
* Ustawić opis strony: `Portal z filmami`
* `npm start`

</details>

### 2. Strona z listą filmów

<details>

</details>

### 3. Pobieranie dane z serwera (`HttpClientModule`)

<details>

</details>

### 4. Strona z profilem filmu (routing)

<details>

</details>

### 5. [Bonus] Zabezpieczenie przed nieznanym identyfikatorem filmu

<details>

</details>

### 6. Wyszukiwarka (panel oraz strona)

<details>

</details>

### 7. Sortowanie listy filmów

<details>

</details>

### 8. Paginacja (`ngx-pagination`)

<details>

* Dodać paczkę [ngx-pagination](https://github.com/michaelbromley/ngx-pagination)
* Zaimportować do komponentu z logiką moduł `NgxPaginationModule`
* Osadzić komponent `pagination-controls` w komponencie listy
    + dodać binding input `(pageChange)="page = $event"`
    + przefiltrować kolekcję prezentowanych elementów
        `| paginate: { itemsPerPage: 10, currentPage: page }`

</details>

### 9. [Bonus] Lazy loading

<details>

* Stworzyć nowy moduł: `ng g module static --routing`
* Stworzyć nowy komponent: `ng g component static/author-list --module static`
* `app.component.html`: Dodać link do `/authors` w stopce
* `app-routing.module.ts`: Stworzyć nowy route:
    ```js
    {
        path: 'authors',
        loadChildren: './static/static.module#StaticModule'
    }
    ```
* `static/static-routing.module.ts`: Stworzyć nowy route:
    ```js
    {
        path: '',
        component: AuthorListComponent
    }
    ```

</details>

### 10. [Bonus] Serwer zwracający fake-owe dane

<details>

* Wykorzystaj źródła, aby zapoznać się z tworzeniem fake-owych danych
    + http://json-schema-faker.js.org/ - narzędzie, które buduje losowe dane w JSON
    + http://json-schema.org - specyfikacja budowania
    + https://chancejs.com/ - biblioteka zwraca losowe dane w odpowiednim formacie
    + https://github.com/marak/Faker.js/ - budowanie wielu losowych danych
* Stworzyć dwa polecenia:
    + `npm run build:mock` — polecenie powinno generować plik na podst. JSON Schema
    + `npm run start:mock` — polecenie powinno uruchomić `json-server`

</details>

### 11. [Bonus] Server-side rendering ([Angular Universal](https://angular.io/guide/universal))

<details>

* `app-routing.module.ts`: Wyłączyć strategię URLi (zakomentować `useHash`)
* Zainstaluj `npm install --save @angular/platform-server @nguniversal/module-map-ngfactory-loader ts-loader`
* `app.module.ts`: Użyj funkcji `BrowserModule.withServerTransition({ appId: 'test-angular-youtube' }),`
* `ng g module AppServer`
* `app.server.module.ts`:
    + Dodaj do tablicy `imports`:
        - `AppModule`
        - `ServerModule`
        - `ModuleMapLoaderModule`
    + Dodaj do tablicy `bootstrap`:
        - `AppComponent`
* `main.module.ts`: Weksportuj `AppServerModule`
* Skopiuj `tsconfig.app.json` do `tsconfig.server.json`
* `tsconfig.server.json`
    + `compilerOptions`
        `"module": "commonjs"`
    + `angularCompilerOptions`
        `"entryModule": "app/app.server.module#AppServerModule"`
* `angular.json`: dodać w sekcji `architect`
    ```json
    "server": {
        "builder": "@angular-devkit/build-angular:server",
        "options": {
            "outputPath": "dist/server",
            "main": "src/main.server.ts",
            "tsConfig": "src/tsconfig.server.json"
        }
    }
    ```
* Stwórz `server.ts` w katalogu głównym o treści takiej jak ost. listing
    w punkcie 4. https://angular.io/guide/universal#step-4-set-up-a-server-to-run-universal-bundles
* Stwórz `webpack.server.config.js` w katalogu głównym o treści jak w punkcie 5.
    https://angular.io/guide/universal#step-5-pack-and-run-the-app-on-the-server
* Dodać zadanie do `package.json` takie, które są zdefiniowane w:
    https://angular.io/guide/universal#creating-scripts
* `angular.json`: Zamienić:
    + `projects/test-angular-youtube/architect/build/options/outputPath` na `dist/browser`
    + `projects/test-angular-youtube/architect/server/options/outputPath` na `dist/server`
* `server.ts`: Zmienić `main.bundle` na `main` w okolicach 25 linijki
* Uruchom `npm run build:ssr && npm run serve:ssr`

</details>

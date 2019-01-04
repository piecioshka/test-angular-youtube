# test-angular-youtube

:ledger: Testowa aplikacja oparta na Angular symulująca portal z filmami.

## Demo 🎉

* production: <https://piecioshka.github.io/test-angular-youtube/>
* staging: <https://test-angular-youtube.herokuapp.com/>
* development: <http://localhost:4200/>

## Features

* :white_check_mark: Zaprezentować listę miniaturek filmów wraz z tytułami i skróconym opisem
* :white_check_mark: Zaprezentować profil filmu: tytuł, poster oraz opis
* :white_check_mark: Dodać zabezpieczenie przed wyświetleniem filmu, którego nie ma w bazie
* :white_check_mark: Wyszukać film po tytule
* :white_check_mark: Ustawić autofocus na polu wyszukiwania
* :white_check_mark: Udostępnić możliwość sortowania listy filmów
* :white_check_mark: Zdefiniować 3 konfiguracje z innymi URLami do backendu:
    + development
    + production
    + staging
* :white_check_mark: Narysować diagram z architekturą
* :white_check_mark: Mechanizm paginacji (`ngx-pagination`)
* :no_entry: Routing Lazy Loading
* :no_entry: Poprawić testy jednostkowe
* :no_entry: Dopisać testy end-to-end
* :no_entry: Server-side rendering

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

### 3. Strona z profilem filmu

<details>

</details>

### 4. Zabezpieczenie przed nieznanym identyfikatorem filmu

<details>

</details>

### 5. Wyszukiwarka (panel oraz strona)

<details>

</details>

### 6. Sortowanie listy filmów

<details>

</details>

### 7. Refactoring detalu filmu

<details>

</details>

### 8. Refactoring listy filmów

<details>

</details>

### 9. Paginacja

<details>

* Dodać paczkę [ngx-pagination](https://github.com/michaelbromley/ngx-pagination)
* Zaimportować do komponentu z logiką moduł `NgxPaginationModule`
* Osadzić komponent `pagination-controls` w komponencie listy
    + dodać binding input `(pageChange)="page = $event"`
    + przefiltrować kolekcję prezentowanych elementów
        `| paginate: { itemsPerPage: 10, currentPage: page }`

</details>

### (Opcjonalnie) 10. Serwer zwracający fake-owe dane

<details>

* Stworzyć dwa polecenia:
    + `npm run build:mock` — polecenie powinno generować plik na podst. JSON Schema
    + `npm run start:mock` — polecenie powinno uruchomić `json-server`

</details>

## Mockowanie danych

* http://json-schema-faker.js.org/ - narzędzie, które buduje losowe dane w JSON
* http://json-schema.org - specyfikacja budowania
* https://chancejs.com/ - biblioteka zwraca losowe dane w odpowiednim formacie
* https://github.com/marak/Faker.js/ - budowanie wielu losowych danych

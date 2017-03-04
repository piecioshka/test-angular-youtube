# warsawjs-workshop-4-portal-vod

> Aplikacja stworzona na potrzeby WarsawJS Workshop #4

![](http://warsawjs.com/assets/images/logo/logo-transparent-240x240.png)

## Zakres funkcjonalności projektu

* [ ] Wyświetlanie listy filmów.
* [ ] Możliwość sortowania i filtrowania listy filmów.
* [ ] Mechanizm paginacji.
* [ ] Rejestracja i logowanie użytkownika.
* [ ] Wyszukiwanie filmów po tytule.
* [ ] Prezentacja profilu filmu.
* [ ] Odtwarzanie niezaszyfrowanego wideo.

## O czym powiedzieć

- Angular 2 jako narzędzie do tworzenia Progressive Web Apps, czyli 
    nowoczesnego rozwiązania tworzenia aplikacji webowych z użyciem trybu 
    offline.
- Możliwość renderowania treści po stronie (Server-side rendering), dzięki 
    temu użytkownik posiada treść od razu po załadowaniu głównego dokumentu HTML
- Nowa składnia budowania szablonów
- Angular CLI: możliwość szybszego tworzenia szkieletu aplikacji
- Wsparcie w edytorach: WebStorm, Visual Studio Code
- Dekoratory - funkcje, które dodają zachowanie klasom, funkcjom, 
    właściwościom albo argumentom funkcji
    - Napisać własny dekorator, np. do timeout-u
    - `@Component` jest podtypem `@Injectable`
- Framework posiada zdefiniowaną listę dostępnych dekoratorów.
- TypeScript jako natywny język tworzenia aplikacji z użyciem frameworka 
    Angular 2. Możliwa jest transformacja do ES6 albo nawet do ES5. Więcej 
    informacji tutaj: https://angular.io/docs/ts/latest/cookbook/ts-to-js.html
- Konwencja tworzenie "commit message":
    https://gist.github.com/stephenparish/9941e89d80e2bc58a153
- Rozszerzenie do Google Chrome: https://augury.angular.io/
- Proces interpolacji
- Proces Two-way data binding
- Dyrektywy konstrukcyjne {`*`} (`structural directives`) [Tylko jedna per element]
- Atrybuty [Wiele per element]
- Serwisy jako singletony

## Krok po kroku (bez `angular-cli`)

1. Stworzyć podstawową strukturę (`main, app.component, app.module`).
2. Stworzyć konfigurację dla Webpack:
    * Zainstaluj zależności: `ts-loader, typescript`
    * Dodaj rozszerzenie `.ts`
3. Wykorzystać narzędzie`./node_modules/.bin/tsc --init` do zbudowania
    pliku `tsconfig.json`.
4. Dodać skrypt wynikowy (`dist/bundle.js`) do `index.html` razem z dwoma 
    zależnościami: `zone.js, reflect-metadata`.
5. Dodać kontener z nowym tagiem `my-app`.
6. Dodać czekanie za załadowanie DOMa przed uruchomieniem procesu 
    bootstrapowanie głównego modułu.

## Krok po kroku (z `angular-cli`)

1. `npm install -g angular-cli`
2. `ng new NAZWA_PROJEKTU` # warsawjs-workshop-portal-vod
5. `npm start`
4. `ng generate component video-list`

## Linki

* https://angular.io/ - strona domowa
* https://twitter.com/angular - oficjalne konto na Twitterze
* https://angular.io/docs/ts/latest/ - dokumentacja

### Do zweryfikowania

* http://blog.mgechev.com/2017/01/17/angular-in-production/
* https://blog.thoughtram.io/angular/2017/02/02/making-your-angular-app-fast.html
* https://blog.nrwl.io/managing-state-in-angular-applications-22b75ef5625f
* http://developer.telerik.com/topics/web-development/what-is-angular/

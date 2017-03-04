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
3. `npm start`
4. `ng generate component video-list`
5. app.component.html -> (HTML) `<app-video-list></app-video-list>`
6. `ng generate service video`
7. Przenieść "service" do katalog "video-list"
8. video-list.component.html -> (providers) `VideoService`
9. `VideoService` -> `getVideos`
  * Wygenerować dane testowe
10. Wyświetlić listę filmów
11. Stworzyć plik z mockiem do filmów
12. Przerobić pobieranie na `Promise.resolve(VIDEOS)`
13. Dodać style
14. Pokazać kontrolkę aby móc odtworzyć film
15. `ng generate component video`
16. Przenieść markup filmu do `video.component.html`
17. W `video-list.component.html` dodać `<app-video>`
18. Wstrzyknąć dane
  - `<app-video [video]="video"></app-video>`
  - W `video.component.ts` zdefiniować `@Input()`
19. Przenieść definicję wyglądu `<video>` do `video.component.css`
20. ...

### Opcjonalnie

1. Stworzyć serwer zwracający dane fake-owe:
  - `npm run build:mock`
  - `npm run start:mock-server`


## Linki

* https://angular.io/ - strona domowa
* https://twitter.com/angular - oficjalne konto na Twitterze
* https://angular.io/docs/ts/latest/ - dokumentacja frameworka `Angular`
* https://github.com/angular/angular-cli/wiki - dokumentacja narzędzia `CLI`

## Mockowanie danych

* http://json-schema-faker.js.org/ - narzędzie, które buduje losowe dane w JSON
* http://json-schema.org - specyfikacja budowania 
* http://chancejs.com/ - biblioteka zwraca losowe dane w odpowiednim formacie
* https://github.com/marak/Faker.js/ - budowanie wielu losowych danych

## List filmów w sieci

- http://techslides.com/demos/sample-videos/small.mp4
- http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4
- https://www.w3schools.com/html/mov_bbb.mp4
- http://bbb3d.renderfarming.net/download.html (Standard 2D)
- http://trailers.divx.com/divx_prod/profiles/WiegelesHeliSki_DivXPlus_19Mbps.mkv
- http://trailers.divx.com/divx_prod/divx_plus_hd_showcase/Sintel_DivXPlus_6500kbps.mkv

### Do zweryfikowania

* http://blog.mgechev.com/2017/01/17/angular-in-production/
* https://blog.thoughtram.io/angular/2017/02/02/making-your-angular-app-fast.html
* https://blog.nrwl.io/managing-state-in-angular-applications-22b75ef5625f
* http://developer.telerik.com/topics/web-development/what-is-angular/

# warsawjs-workshop-4-portal-vod

Aplikacja stworzona na potrzeby `WarsawJS Workshop #4`

<img
    src="https://warsawjs.com/static/images/logos/logo-warsawjs.svg"
    width="300"
/>

## Zakres funkcjonalności projektu

* [x] Prezentacja listy miniaturek filmów wraz z tytułami i skróconym opisem.
* [x] Prezentacja profilu filmu: tytuł, player (wraz z posterem) oraz opisem.
* [x] Odtwarzanie niezaszyfrowanego wideo.
* [x] Dodać zabezpieczenie przed wyświetleniem filmu, którego nie ma w bazie.
* [x] Wyszukiwanie filmów po tytule (autofocus na polu input).
* [x] Możliwość sortowania listy filmów.
* [x] Mechanizm paginacji.
* [ ] Server-side rendering.

## O czym powiedzieć

* **Angular** jako narzędzie do tworzenia Progressive Web Apps, czyli
    nowoczesnego rozwiązania tworzenia aplikacji webowych z użyciem trybu
    offline.
* Możliwość renderowania treści po stronie (Server-side rendering), dzięki
    temu użytkownik posiada treść od razu po załadowaniu głównego dokumentu HTML
* Nowa składnia budowania szablonów
* Angular CLI: możliwość szybszego tworzenia szkieletu aplikacji
* Wsparcie w edytorach: `WebStorm`, `Visual Studio Code`
* Dekoratory - funkcje, które dodają zachowanie klasom, funkcjom,
    właściwościom albo argumentom funkcji
    + Napisać własny dekorator, np. do timeout-u
    + `@Component` jest podtypem `@Injectable`
* Framework posiada zdefiniowaną listę dostępnych dekoratorów.
* TypeScript jako natywny język tworzenia aplikacji z użyciem frameworka
    **Angular**. Możliwa jest transformacja do ES6 albo nawet do ES5. Więcej
    informacji tutaj: https://angular.io/docs/ts/latest/cookbook/ts-to-js.html
* Konwencja tworzenie "commit message":
    https://gist.github.com/stephenparish/9941e89d80e2bc58a153
* Rozszerzenie do Google Chrome: https://augury.angular.io/
* Interpolacja
* Proces "Two-way data binding"
* Dyrektywy konstrukcyjne {`*`} (`structural directives`) [Jedna per element]
* Atrybuty [Wiele per element]
* Serwisy to Singletony :rocket:
* Routing
    + Lazy loading

![](./docs/portal-vod.png)

## Krok po kroku z Angular CLI

* `npm install -g @angular/cli`
* `ng new NAZWA_PROJEKTU` # warsawjs-workshop-portal-vod
* Podmienić `warsawjs-workshop-portal-vod` -> `warsawjs-workshop-4-portal-vod`
* Ustawić tytuł strony: `WarsawJS Workshop 4: Portal VOD`
* `npm start`

### Lista filmów (z playerami)

* `ng generate component video-list`
* app.component.html -> (HTML) `<app-video-list></app-video-list>`
* `ng generate service latest-video`
* Przenieść `latest-video.service` do katalogu `src/app/video-list`
* `video-list.component.html` -> (providers) `LatestVideoService`
* `LatestVideoService` -> `getVideos`
    + Wygenerować dane testowe
* Wyświetlić listę filmów
* Stworzyć plik z mockiem do filmów
* Przerobić pobieranie na `Promise.resolve(VIDEOS)`
* Dodać style
* Pokazać kontrolkę playera, aby móc odtworzyć film

### Profil filmu z playerem

* `ng generate component video`
* Przenieść markup filmu do `video.component.html`
* W `video-list.component.html` dodać `<app-video>`
* Wstrzyknąć dane
    + `<app-video [video]="video"></app-video>`
    + W `video.component.ts` zdefiniować `@Input()`
* Przenieść definicję wyglądu `<video>` do `video.component.css`
* Stworzyć `video.model` i użyć w:
    + `video.component.ts`
    + `video-list.component.ts`
    + `latest-video.service.ts`
* `ng generate module app-routing`
* W `app.module.ts` dodać `AppRoutingModule`
* W `app-routing.module.ts` zmienić `CommonModule` na `RouterModule`
* W `app-routing.module.ts` stworzyć `routes: Routes` (path, component)
    + `` - VideoListComponent
    + `video/:id` - VideoComponent
* W `app.component` dodać `<router-outlet>`
* W `video-list.component.html` przerobić na listę miniaturek z linkami
    + `<a routerLink="videos/{{ video.id }}">`
* Zaktualizować style
* W `video.component.ts`:
    + usunąć dekorator `@Input()` z pola `video`
    + pobierać parametr `id` z `ActivatedRoute` (rxjs)
    + pobierać obiekt video `LatestVideoService`

### Zabezpieczenie przed niepoprawnym identyfikatorem filmu

* W `video.component.html` dodać zabezpieczenie przed brakiem obiektu `video`
* `ng generate component video-not-found`
* W `app-routing.module.ts` dodać nową ścieżkę: `video-not-found`
    (VideoNotFoundComponent).
* W `video.component.ts` dodać sprawdzenie, czy LatestVideoService zwrócił
    "falsy value", wtedy przekierować na stronę z komponentem
    `VideoNotFoundComponent` za pomocą `Router`a

### Wyszukiwarka

* `ng generate component video-search`
* W `app-routing.module.ts` dodać nową ścieżkę: `search`
    (VideoSearchComponent)
* W `app.component.html` stworzyć menu z linkiem do wyszukiwarki
* W `latest-video.service.ts` stworzyć funkcję, która będzie filtrowała filmy
    (wykorzystać już istniejącą funkcją `getVideos`)
* Dodać style dla wyszukiwarki wykorzystując dwa już istniejące:
    + `video.component.css`
    + `video-list.component.css`
* W `video-search.component.html` stworzyć pole (input), gdzie użytkownik
    będzie wpisywał tytuł filmu.
* W `video-search.component.ts` stworzyć funkcję `search`, która będzie
    uruchamiana po naciśnięciu "ENTER" przez użytkownika.

### Sortowanie

* `ng generate service sorting`
* Przenieść `sorting.service` do katalogu `src/app/video-list`
* Dodać linki, do sortowanie ASC i DESC w plikach
    + `video-search.component.html`
    + `video-list.component.html`
* Dodać funkcje sortujące: `sortAscending`, `sortDescending` w plikach:
    + `video-search.component.ts`
    + `video-list.component.ts`
* W `sorting.service.ts` stworzyć funkcje: `ascending`, `descending`
* W funkcjach `sortAscending`, `sortDescending` wykorzystać ww funkcje.

### Paginacja

* Wykorzystać paczkę `ng2-pagination` (http://michaelbromley.github.io/ng2-pagination/)
* W `app.module.ts` zaimportować nowy moduł
* Wykorzystać pipe `pagination` oraz komponent `<pagination-controls>`
    w plikach:
    + `video-list.component.html`
    + `video-search.component.html`

### Refactoring detalu filmu

* `ng generate component video-detail`
* Wycięcie detali filmu na rzecz `<app-video-detail>` z plików:
    + `video-search.component.html`
    + `video-list.component.html`

### Refactoring listy filmów

* `ng generate component latest-video-list`
* Zastąpienie obecnego użycia komponentu `video-list.component` nowo
    stworzonym.
* Wykorzystanie komponentu `video-list.component` w plikach
    + `video-search.component.html`
    + `latest-video-list.component.html`

### Opcjonalnie :zap:

* Stworzyć serwer zwracający dane fake-owe:
    + `npm run build:mock`
    + `npm run start:mock-server`

---

## Linki

* https://angular.io/ - strona domowa
* https://twitter.com/angular - oficjalne konto na Twitterze
* https://angular.io/docs - dokumentacja frameworka `Angular`
* https://github.com/angular/angular-cli/wiki - dokumentacja narzędzia `CLI`

## Mockowanie danych

* http://json-schema-faker.js.org/ - narzędzie, które buduje losowe dane w JSON
* http://json-schema.org - specyfikacja budowania
* http://chancejs.com/ - biblioteka zwraca losowe dane w odpowiednim formacie
* https://github.com/marak/Faker.js/ - budowanie wielu losowych danych

## Lista darmowych video w sieci (do wykorzystania w mockach)

* http://techslides.com/demos/sample-videos/small.mp4
* http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4
* https://www.w3schools.com/html/mov_bbb.mp4
* http://trailers.divx.com/divx_prod/profiles/WiegelesHeliSki_DivXPlus_19Mbps.mkv
* http://trailers.divx.com/divx_prod/divx_plus_hd_showcase/Sintel_DivXPlus_6500kbps.mkv
* http://bbb3d.renderfarming.net/download.html (Standard 2D)

# warsawjs-workshop-4-portal-vod

> Aplikacja stworzona na potrzeby WarsawJS Workshop #4

![](http://warsawjs.com/assets/images/logo/logo-transparent-240x240.png)

## Zakres funkcjonalności projektu

* [x] Prezentacja listy miniaturek filmów wraz z tytułami i skróconym opisem
* [x] Prezentacja profilu filmu: tytuł, player (wraz z posterem) oraz opisem
* [x] Odtwarzanie niezaszyfrowanego wideo.
* [ ] Dodać zabezpieczenie przed wyświetleniem filmu, którego nie ma w bazie 
* [ ] Wyszukiwanie filmów po tytule.
* [ ] Możliwość sortowania i filtrowania listy filmów.
* [ ] Mechanizm paginacji.

## O czym powiedzieć

* Angular 2 jako narzędzie do tworzenia Progressive Web Apps, czyli 
    nowoczesnego rozwiązania tworzenia aplikacji webowych z użyciem trybu 
    offline.
* Możliwość renderowania treści po stronie (Server-side rendering), dzięki 
    temu użytkownik posiada treść od razu po załadowaniu głównego dokumentu HTML
* Nowa składnia budowania szablonów
* Angular CLI: możliwość szybszego tworzenia szkieletu aplikacji
* Wsparcie w edytorach: `WebStorm`, `Visual Studio Code`
* Dekoratory - funkcje, które dodają zachowanie klasom, funkcjom, 
    właściwościom albo argumentom funkcji
    - Napisać własny dekorator, np. do timeout-u
    - `@Component` jest podtypem `@Injectable`
* Framework posiada zdefiniowaną listę dostępnych dekoratorów.
* TypeScript jako natywny język tworzenia aplikacji z użyciem frameworka 
    Angular 2. Możliwa jest transformacja do ES6 albo nawet do ES5. Więcej 
    informacji tutaj: https://angular.io/docs/ts/latest/cookbook/ts-to-js.html
* Konwencja tworzenie "commit message":
    https://gist.github.com/stephenparish/9941e89d80e2bc58a153
* Rozszerzenie do Google Chrome: https://augury.angular.io/
* Proces interpolacji
* Proces Two-way data binding
* Dyrektywy konstrukcyjne {`*`} (`structural directives`) [Jedna per element]
* Atrybuty [Wiele per element]
* Serwisy to singletony
* Routing

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
    
![](./docs/portal-vod.png)

## Krok po kroku (z `angular-cli`)

1. `npm install -g angular-cli`
2. `ng new NAZWA_PROJEKTU` # warsawjs-workshop-portal-vod
3. Podmienić `warsawjs-workshop-portal-vod` -> `warsawjs-workshop-4-portal-vod`
4. Ustawić tytuł strony: `WarsawJS Workshop 4: Portal VOD`
5. `npm start`
6. `ng generate component video-list`
7. app.component.html -> (HTML) `<app-video-list></app-video-list>`
8. `ng generate service video`
9. Przenieść "service" do katalog "video-list"
10. video-list.component.html -> (providers) `VideoService`
11. `VideoService` -> `getVideos`
  - Wygenerować dane testowe
12. Wyświetlić listę filmów
13. Stworzyć plik z mockiem do filmów
14. Przerobić pobieranie na `Promise.resolve(VIDEOS)`
15. Dodać style
16. Pokazać kontrolkę aby móc odtworzyć film
17. `ng generate component video`
18. Przenieść markup filmu do `video.component.html`
19. W `video-list.component.html` dodać `<app-video>`
20. Wstrzyknąć dane
  - `<app-video [video]="video"></app-video>`
  - W `video.component.ts` zdefiniować `@Input()`
21. Przenieść definicję wyglądu `<video>` do `video.component.css`
22. Stworzyć model `Video` i użyć w:
  - `video.component.ts`
  - `video-list.component.ts`
  - `video.service.ts`
23. `ng generate module app-routing`
24. W `app.module.ts` dodać `AppRoutingModule`
25. W `app-routing.module.ts` zmienić `CommonModule` na `RouterModule`
26. W `app-routing.module.ts` stworzyć `routes: Routes` (path, component)
  - `` - VideoListComponent
  - `video/:id` - VideoComponent
27. W `app.component` dodać `<router-outlet>`
28. W `video-list.component.html` przerobić na listę miniaturek z linkami
  - `<a routerLink="videos/{{ video.id }}">`
29. Zaktualizować style
30. W `video.component.ts`:
  - usunąć dekorator `@Input()` z pola `video`
  - pobierać parametr `id` z `ActivatedRoute` (rxjs)
  - pobierać obiekt video `VideoService`
31. W `video.component.html` dodać zabezpieczenie przed brakiem obiektu `video`

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
- http://trailers.divx.com/divx_prod/profiles/WiegelesHeliSki_DivXPlus_19Mbps.mkv
- http://trailers.divx.com/divx_prod/divx_plus_hd_showcase/Sintel_DivXPlus_6500kbps.mkv
- http://bbb3d.renderfarming.net/download.html (Standard 2D)

### Do zweryfikowania

* http://blog.mgechev.com/2017/01/17/angular-in-production/
* https://blog.thoughtram.io/angular/2017/02/02/making-your-angular-app-fast.html
* https://blog.nrwl.io/managing-state-in-angular-applications-22b75ef5625f
* http://developer.telerik.com/topics/web-development/what-is-angular/

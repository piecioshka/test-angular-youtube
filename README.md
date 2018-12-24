# youtube

:ledger: Aplikacja symulująca portal z filmami a'la YouTube.

## Zakres funkcjonalności projektu

* [x] Zaprezentować listę miniaturek filmów wraz z tytułami i skróconym opisem
* [x] Zaprezentować profil filmu: tytuł, player (wraz z posterem) oraz opisem
* [x] Dodać zabezpieczenie przed wyświetleniem filmu, którego nie ma w bazie
* [x] Wyszukać film po tytule
* [x] Ustawić autofocus na polu wyszukiwania
* [x] Udostępnić możliwość sortowania listy filmów
* [ ] Poprawić testy jednostkowe
* [ ] Dopisać testy end-to-end
* [ ] Mechanizm paginacji
* [ ] Server-side rendering
* [ ] Routing Lazy Loading

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
* Routing (Lazy Loading)

![](./docs/portal-vod.png)

## Krok po kroku z Angular CLI

* `npm install -g @angular/cli`
* `ng new NAZWA_PROJEKTU` # youtube
* Ustawić tytuł strony: `YouTube`
* Ustawić opis strony: `Portal z filmami`
* `npm start`

### Lista filmów (z playerami)

<details>

* `ng generate component video-list`
* app.component.html -> (HTML) `<app-video-list></app-video-list>`
* `ng generate service videos`
* Przenieść `videos.service` do katalogu `src/app/logic`
* `VideosService` -> `fetchVideos`
    + Wygenerować dane testowe
* Wyświetlić listę filmów
* Stworzyć plik z mockiem do filmów
* Dodać style

</details>

### Profil filmu z playerem

<details>

* `ng generate component video-profile`
* Przenieść markup filmu do `video-profile.component.html`
* W `video-list.component.html` dodać `<app-video-item>`
* Wstrzyknąć dane
    + `<app-video-list-item [video]="video"></app-video-list-item>`
    + W `video-list-item.component.ts` zdefiniować `@Input()`
* Przenieść definicję wyglądu `<video>` do `video.component.css`
* Stworzyć `video.model` i użyć w:
    + `video.component.ts`
    + `video-list.component.ts`
    + `videos.service.ts`
* `ng generate module app-routing`
* W `app.module.ts` dodać `AppRoutingModule`
* W `app-routing.module.ts` zmienić `CommonModule` na `RouterModule`
* W `app-routing.module.ts` stworzyć `routes: Routes` (path, component)
    + `` - VideoListComponent
    + `video/:id` - VideoProfileComponent
* W `app.component` dodać `<router-outlet>`
* W `video-list.component.html` przerobić na listę miniaturek z linkami
    + `<a routerLink="videos/{{ video.id }}">`
* Zaktualizować style
* W `video.component.ts`:
    + usunąć dekorator `@Input()` z pola `video`
    + pobierać parametr `id` z `ActivatedRoute` (rxjs)
    + pobierać obiekt video `VideosService`

</details>

### Zabezpieczenie przed niepoprawnym identyfikatorem filmu

<details>

* W `video.component.html` dodać zabezpieczenie przed brakiem obiektu `video`
* `ng generate component video-not-found`
* W `app-routing.module.ts` dodać nową ścieżkę: `video-not-found`
    (PageVideoNotFoundComponent).
* W `video.component.ts` dodać sprawdzenie, czy VideosService zwrócił
    "falsy value", wtedy przekierować na stronę z komponentem
    `PageVideoNotFoundComponent` za pomocą `Router`a

</details>

### Wyszukiwarka

<details>

* `ng generate component video-search`
* W `app-routing.module.ts` dodać nową ścieżkę: `search`
    (PageVideoSearchComponent)
* W `app.component.html` stworzyć menu z linkiem do wyszukiwarki
* W `videos.service.ts` stworzyć funkcję, która będzie filtrowała filmy
    (wykorzystać już istniejącą funkcją `getVideos`)
* Dodać style dla wyszukiwarki wykorzystując dwa już istniejące:
    + `video.component.css`
    + `video-list.component.css`
* W `video-search.component.html` stworzyć pole (input), gdzie użytkownik
    będzie wpisywał tytuł filmu.
* W `video-search.component.ts` stworzyć funkcję `search`, która będzie
    uruchamiana po naciśnięciu "ENTER" przez użytkownika.

</details>

### Sortowanie

<details>

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

</details>

### Paginacja

<details>

* Wykorzystać paczkę `ng2-pagination` (http://michaelbromley.github.io/ng2-pagination/)
* W `app.module.ts` zaimportować nowy moduł
* Wykorzystać pipe `pagination` oraz komponent `<pagination-controls>`
    w plikach:
    + `video-list.component.html`
    + `video-search.component.html`

</details>

### Refactoring detalu filmu

<details>

* `ng generate component video-detail`
* Wycięcie detali filmu na rzecz `<app-video-detail>` z plików:
    + `video-search.component.html`
    + `video-list.component.html`

</details>

### Refactoring listy filmów

<details>

* `ng generate component videos-list`
* Zastąpienie obecnego użycia komponentu `video-list.component` nowo
    stworzonym.
* Wykorzystanie komponentu `video-list.component` w plikach
    + `video-search.component.html`
    + `videos-list.component.html`

</details>

### Opcjonalnie :zap:

* Stworzyć serwer zwracający dane fake-owe:
    + `npm run build:mock`
    + `npm run start:mock`

## Mockowanie danych

* http://json-schema-faker.js.org/ - narzędzie, które buduje losowe dane w JSON
* http://json-schema.org - specyfikacja budowania
* https://chancejs.com/ - biblioteka zwraca losowe dane w odpowiednim formacie
* https://github.com/marak/Faker.js/ - budowanie wielu losowych danych

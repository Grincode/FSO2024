# Ejercicios 0.1.-0.6.

- **0.1:** HTML (online content) :heavy_check_mark:	
- **0.2:** CSS (online content) :heavy_check_mark:	
- **0.3:** HTML forms (online content) :heavy_check_mark:	

- **0.4:** New note diagram / Nuevo diagrama de nota
```mermaid
    sequenceDiagram
    participant browser
    participant server

        browser->>server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
        note over browser: Submit in the network a new note: 1x1
        note over server: Server response with HTTP Status: 302 Found
        server-->>browser: redirect to /exampleapp/notes
        browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
        note over server: Server responds with HTTP Status 200 OK
        server-->>browser: HTML Code
        browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
        note over server: Server responds with HTTP Status 200 OK
        server-->>browser: main.css
        browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
        note over server: Server responds with HTTP Status 200 OK
        server-->>browser: main.js
        note over browser: Browser executing JS-Code and request JSON data from server
        browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
        note over server: Server responds with HTTP Status 200 OK
        server-->>browser: {content: '1x1', date: '2024-02-24T20:15:45.304Z'}
        note over browser: Browser execute the event handler and render notes to display
```
- **0.5**: Single page app diagram / Diagrama de aplicación de una sola página
  
```mermaid
sequenceDiagram
    participant browser
    participant server

        browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
        note over server: Server responds with HTTP Status 200 OK
        server-->browser: HTML-Code
        browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
        note over server: Server responds with HTTP Status 200 OK
        server-->browser: main.css
        browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
        note over server: Server responds with HTTP Status 200 OK
        server-->browser: spa.js
        note over browser: Browser star execute JS-Code
        browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
        note over server: Server responds with HTTP Status 200 OK
        server-->browser: JSON File [{"content": "fsdfasdf", "date": "2024-02-24T14:10:42.713Z"},...]
        note over browser: Browser execute the event handler and render notes to display

```
 - **0.6**: New note in Single page app diagram / Nueva nota en diagrama aplicación de una sola página
```mermaid
sequenceDiagram
    participant browser
    participant server

        browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
        note over server: Server responds with HTTP Status 201 Created
        note over server: Server add new note
        server-->browser: {"message":"note created"}
        note over browser: Browser execute the event handler and render notes to display

```



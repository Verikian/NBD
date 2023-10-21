# Zadania z Nierelacyjnych Baz Danych

Zadania wykonano w ramach przedmiotu Nierelacyjne Bazy Danych (NBD) na uczelni PJATK w Warszawie.

## PL Opis zadań

### Ćwiczenia 1 - MongoDB

Zadania z podstawowych zapytań do bazy w MongoDB. Dane zostały zaimportowane z pliku `.json` poleceniem `mongoimport --file ./nazwapliku.json --db nbd --jsonArray -c people`.
Pliki `.js` zawierają zapytania do bazy, natomiast pliki `.json` zawierają wyniki tych zapytań, zgodnie ze schematem: `zapytanie_X.js` `wyniki_X.json`, gdzie X oznacza numer zadania.

### Ćwiczenia 2 - MongoDB (Map-Reduce, agregacje)

Zadania z wyszukiwania informacji w bazie przy wykorzystaniu operacji **map-reduce** oraz frameworku do **agregacji** w MongoDB.
Pliki `.js` zawierają zapytania do bazy w dwóch wersjach: map-reduce (MR) i agregacja (A), natomiast pliki `.json` zawierają wyniki odpowiednich zapytań (osobno dla każdej z wersji).
Schemat plików: `zapytanie_X_MR.js` `zapytanie_X_A.js` `wyniki_X_MR.json` `wyniki_X_A.json`, gdzie X oznacza numer zadania.

### Ćwiczenia 3 - Neo4J

Zadania z podstawowych zapytań do bazy w Neo4J. W zadaniach wykorzystywana jest przykładowa baza danych filmów i ludzi (aktorów, reżyserów, prodeucentów itd.), która uruchamiana jest poleceniem `:play movie-graph`.
Zapytania do bazy znajdują się w plikach tekstowych `.txt`, natomiast wyniki tych zapytań zapisane są w plikach tekstowych `.json` oraz graficznych `.svg`.
Schemat plików: `zapytanieX.js` `wynikiX.json` `wynikiX.svg`, gdzie X oznacza numer zadania.

### Ćwiczenia 4 - Neo4J c.d.

Zadania z bardziej rozbudowanych zapytań do bazy w Neo4J.
Zapytania do baz znajdują się w pliku tekstowym `zapytania.txt` zawierającym ponumerowane zapytania.  Wyniki tych zapytań zapisane są w plikach tekstowych `.json` oraz graficznych `.svg`.
Schemat plików: `wynikiX.json` `wynikiX.svg`, gdzie X oznacza numer zadania.

### Ćwiczenia 5 - Riak

Zadania z podstawowych zapytań w Riak. Polecenia znajdują się w pliku tekstowym `zapytania.txt` zawierającym ponumerowane polecenia curl. 
Wyniki zawierające odpowiedzi z serwera zapisano w plikach `.txt` zgodnie ze schematem `wynik_X.txt`, gdzie X oznacza numer zadania.

### Ćwiczenia 6 - Riak c.d.

Zadanie polegające na zapisaniu programu, który wrzuca do bazy dokument, pobiera go i wypisuje, modyfikuje go, następnie pobiera go i wypisuje, a na końcu usuwa go i próbuje pobrać z bazy.
Kod źródłowy programu napisano w języku **Python** i zapisano w pliku `program.py`, natomiast w pliku `komunikaty.txt` umieszczono wyniki działania programu.

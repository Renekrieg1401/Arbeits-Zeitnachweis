# Handoff — Arbeits-Zeitnachweis, 2026-11-18

## Nachtrag 2026-11-18 (1) — Genesis-Registrierung + PDF-Export-Bug behoben
- **[ERLEDIGT]:** Repo `Renekrieg1401/Arbeits-Zeitnachweis` war unregistriert —
  geklont nach `Projekte/Arbeits-Zeitnachweis/`, `CLAUDE.md`+`handoff.md` neu
  angelegt, in Root-`CLAUDE.md` registriert (bewusst außerhalb der
  AERIS/IRIS-Digital-Produkthierarchie, Renés privates Arbeitszeit-Tool).
- **[ERLEDIGT] Bug behoben:** René-Fund per Screenshot — mehrzeilige
  Bemerkungen (z. B. Tag 08 "Doppel Anfahrt Bach & Bamberger E. ... wieso
  weshalb waru[m]") werden beim PDF-Export abgeschnitten. Root-Cause
  verifiziert (nicht geraten): `html2canvas` 1.4.1 rendert Textarea-Werte beim
  Screenshot einzeilig, Zeilenumbrüche werden ignoriert, langer Text läuft über
  die Zellbreite hinaus und wird abgeschnitten — reiner Darstellungsfehler,
  gespeicherte Werte (`localStorage`) sind nie betroffen.
- **[ERLEDIGT] Fix:** `speichernAlsPDF()` ersetzt Textareas für die Dauer der
  Erfassung durch exakt gestylte `<div>`s mit `white-space:pre-wrap`, danach
  rückstandslos wiederhergestellt (`ersetzeTextareasFuerExport`/
  `stelleTextareasWieder`). Verifiziert per Playwright: (a) isolierter Repro-
  Test (3 Zeilen via `\n`), (b) echter End-to-End-Lauf über die reale
  `speichernAlsPDF()`-Funktion mit anschließender PDF-Byte-Prüfung, (c) exakte
  Nachstellung von Renés gemeldetem Fall (langer, weich umbrechender Text ohne
  `\n`) — alle drei Fälle vorher/nachher per PDF-Screenshot-Vergleich
  dokumentiert und René vor dem Push gezeigt.
- **[ERLEDIGT] Freigabe eingeholt + live deployed:** René hat den Vorher/
  Nachher-Beleg bestätigt ("Ja, pushen"). Commit `3d135db`, gepusht nach
  `origin/main`. GitHub-Pages-Build (`status: built`) verifiziert, live
  erreichbar unter `https://renekrieg1401.github.io/Arbeits-Zeitnachweis/`
  mit dem neuen Code (`ersetzeTextareasFuerExport` im Live-HTML bestätigt).
- **[OFFEN]:** Kein `testing-qa`-Agentenlauf (Komplexitäts-Gate, Score ~3/10,
  unter der Agent-Schwelle — direkt von Claude selbst per Playwright
  verifiziert). Keine Prüfung der Tagesbemerkungs-Box (`#tagesBemerkung`,
  liegt außerhalb von `#pdfArea`/dem Export-Bereich, war nie Teil des Bugs).
  Kein Audit des restlichen Codes (Schichtplanung, Gesamtzeit-Berechnung,
  Unterschrift-Canvas) — nicht Teil dieses Auftrags.
- René-Direktive (explizit, gilt dauerhaft für dieses Repo): Bei jedem Commit
  sicherstellen, dass bereits eingegebene Daten auf den Geräten beim Update
  niemals verschwinden/gelöscht werden — Service-Worker-Analyse bestätigt:
  Network-First-Cache betrifft nur die App-Shell-Datei, nie `localStorage`.

# Arbeits-Zeitnachweis — Silo-Governance

**Nachtrag-Registrierung 2026-11-18** (unregistriertes Repo gefunden/importiert,
analog PflegeBox/Arcus-Präzedenzfall).

## Was ist das
Rein clientseitige PWA (ein einziges `index.html`, kein Backend) zur monatlichen
Arbeitszeiterfassung für die **Diakoniestation Gladenbach** — Renés privates
Arbeitszeit-Tool für seinen Arbeitgeber, **kein IRIS-Digital-Produkt**, bewusst
außerhalb der AERIS-Produkthierarchie.

## Architektur
- Statisches Single-File-HTML + `sw.js` (Service Worker, Network-First,
  `CACHE_NAME = 'arbeitszeitnachweis-v2'`).
- Daten liegen ausschließlich in `localStorage` des Geräts — nie serverseitig.
- PDF-Export: `html2canvas` (CDN, v1.4.1) screenshottet `#pdfArea` → `jsPDF`
  bettet das Bild ein. Kein Text-Parsing, kein Mailversand (nur
  `navigator.share`/Download mit vorausgefülltem Hinweistext).
- Live-Deployment: GitHub Pages, **automatisch bei jedem Push auf `main`**
  (`https://renekrieg1401.github.io/Arbeits-Zeitnachweis/`) — kein separater
  Deploy-Schritt nötig/möglich.

## Bekannte Baustelle (behoben 2026-11-18)
html2canvas 1.4.1 rendert `<textarea>`-Werte beim Screenshot einzeilig
(Zeilenumbrüche werden ignoriert, langer Text läuft über die Zellbreite hinaus
und wird abgeschnitten) — bestätigt per Playwright-Reproduktion und gegen ein
echtes Nutzer-PDF. Fix: Textareas werden für die Dauer der Erfassung durch
exakt gestylte `<div>`s mit `white-space:pre-wrap` ersetzt, danach
rückstandslos wiederhergestellt. Betrifft nur den Export-Pfad in
`speichernAlsPDF()`, nie `localStorage`/Service-Worker.

## Wichtig bei jeder künftigen Änderung
Dieses Repo deployt automatisch live bei Push — **vor jedem Push Vorschau
zeigen und Renés Freigabe einholen** (Standard-Regel, hier besonders wichtig
da kein Staging/Preview-Branch existiert). Nie Änderungen an `localStorage`-
Schema oder Service-Worker-Cache-Logik vornehmen, die bestehende, bereits
eingegebene Nutzerdaten auf den Geräten löschen könnten (explizite
René-Direktive 2026-11-18).

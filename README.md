<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Arbeitszeitnachweis - Diakoniestation Gladenbach</title>
    
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><circle cx='256' cy='256' r='240' fill='%23004b7c'/><circle cx='256' cy='256' r='200' fill='none' stroke='%23ffffff' stroke-width='16' stroke-dasharray='12 12' opacity='0.4'/><g fill='%23ffffff'><path d='M236 110h40v292h-40z'/><path d='M130 210h252v40H130z'/><path d='M130 210c0-40 40-40 40-40s40 0 40 40' fill='none' stroke='%23ffffff' stroke-width='40' stroke-linecap='square'/><path d='M302 210c0-40 40-40 40-40s40 0 40 40' fill='none' stroke='%23ffffff' stroke-width='40' stroke-linecap='square'/></g><path d='M256 256 l70 40' stroke='%23ffffff' stroke-width='12' stroke-linecap='round'/></svg>">
    <link rel="apple-touch-icon" sizes="180x180" href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><circle cx='256' cy='256' r='240' fill='%23004b7c'/><circle cx='256' cy='256' r='200' fill='none' stroke='%23ffffff' stroke-width='16' stroke-dasharray='12 12' opacity='0.4'/><g fill='%23ffffff'><path d='M236 110h40v292h-40z'/><path d='M130 210h252v40H130z'/><path d='M130 210c0-40 40-40 40-40s40 0 40 40' fill='none' stroke='%23ffffff' stroke-width='40' stroke-linecap='square'/><path d='M302 210c0-40 40-40 40-40s40 0 40 40' fill='none' stroke='%23ffffff' stroke-width='40' stroke-linecap='square'/></g><path d='M256 256 l70 40' stroke='%23ffffff' stroke-width='12' stroke-linecap='round'/></svg>">

    <meta name="theme-color" content="#004b7c">
    <meta name="msapplication-TileColor" content="#004b7c">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <style>
        :root {
            --header-bg-color: #f5f5f5;
            --accent-color: #004b7c;
            --weekend-color: #f0f0f0; 
        }
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            color: #333;
        }
        .page {
            width: 210mm;
            min-height: 297mm;
            padding: 10mm;
            box-sizing: border-box;
            background: white;
        }
        .header {
            background-color: var(--header-bg-color) !important;
            padding: 15px;
            border: 1px solid #ccc;
            margin-bottom: 20px;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
        }
        h1 { font-size: 20px; margin: 0 0 5px 0; text-transform: uppercase; letter-spacing: 1px; }
        h2 { font-size: 16px; margin: 0 0 15px 0; color: var(--accent-color); }
        
        .meta-inputs { display: flex; gap: 20px; margin-bottom: 10px; }
        .meta-field { display: flex; align-items: center; gap: 5px; }
        .meta-field label { font-weight: bold; font-size: 14px; }
        
        input[type="text"], input[type="month"], input[type="date"] {
            border: none;
            border-bottom: 1px solid #333; background: transparent;
            font-size: 14px; padding: 2px; font-family: Arial, sans-serif;
        }
        .name-field { font-size: 16px; font-weight: bold; width: 250px; text-align: left; }
        
        table { width: 100%; border-collapse: collapse; font-size: 12px; }
        th, td { border: 1px solid #666; padding: 4px; text-align: center; }
        th { background-color: #f9f9f9; font-weight: bold; }
        
        .col-day { width: 5%; font-weight: bold; }
        .col-time { width: 12%; }
        .col-notes { width: 59%; text-align: left; }
        
        .notes-header {
            font-size: 10px;
            text-align: left; font-weight: normal;
            background-color: var(--header-bg-color) !important;
            print-color-adjust: exact; -webkit-print-color-adjust: exact;
        }
        input.cell-input {
            width: 100%;
            border: none; background: transparent;
            text-align: center; font-size: 12px; box-sizing: border-box;
        }
        input.cell-input-left { text-align: left; }
        
        .pause-info-text {
            font-size: 11px;
            color: #555; text-align: left;
            margin-top: 10px; font-style: italic; line-height: 1.4;
        }
        
        .footer-info {
            margin-top: 15px;
            display: flex; justify-content: space-between; font-size: 10px; color: #666;
        }
        .page-break { page-break-before: always; margin-top: 40px; border-top: 2px dashed #ccc; padding-top: 20px; }
        
        .signature-container { margin-top: 40px; display: flex; gap: 50px; align-items: flex-end; }
        .sig-block { display: flex; flex-direction: column; gap: 10px; }
        .canvas-wrapper { position: relative; border-bottom: 1px solid #333; width: 300px; height: 80px; background-color: #fafafa; }
        canvas { width: 300px; height: 80px; cursor: crosshair; display: block; }
        
        .btn-clear-sig {
            position: absolute;
            right: 0; top: -25px; background: #e0e0e0;
            border: 1px solid #999; font-size: 10px; padding: 2px 5px; cursor: pointer; border-radius: 3px;
        }
        
        .holiday-row td { text-decoration: underline !important; font-weight: bold; }
        .weekend-row {
            background-color: var(--weekend-color) !important;
            print-color-adjust: exact; -webkit-print-color-adjust: exact;
        }
        .total-row {
            background-color: #eaeff5 !important;
            font-weight: bold; font-size: 13px;
            print-color-adjust: exact; -webkit-print-color-adjust: exact;
        }
        
        .controls-bottom { margin-top: 40px; display: flex; gap: 15px; justify-content: flex-start; align-items: center; }
        .btn-action {
            color: white;
            border: none; padding: 12px 24px; border-radius: 4px;
            cursor: pointer; font-weight: bold; font-size: 14px; font-family: Arial, sans-serif;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .btn-save { background-color: #004b7c; }
        .btn-save:hover { background-color: #003353; }

        @media print {
            body { margin: 0; }
            .page { width: 100%; min-height: auto; padding: 0; }
            .page-break { border-top: none; }
            input[type="text"], input[type="month"], input[type="date"], input.cell-input { border: none !important; }
            .btn-clear-sig, .controls-bottom { display: none !important; }
            .canvas-wrapper { border-bottom: none !important; background: transparent; }
        }
    </style>
</head>
<body>

<div class="page" id="pdfArea">
    <div class="header" id="mainHeader1">
        <h1>Arbeitszeitnachweis</h1>
        <h2>Diakoniestation Gladenbach</h2>
        <div class="meta-inputs">
            <div class="meta-field">
                <label>Monat/Jahr:</label>
                <input type="month" id="monthInput" onchange="handleMonthChangeTrigger()">
            </div>
            <div class="meta-field" style="margin-left: auto;">
                <label>Name:</label>
                <input type="text" id="nameInput" class="name-field" placeholder="Vorname Nachname">
            </div>
        </div>
    </div>

    <table>
        <thead>
            <tr>
                <th rowspan="2" class="col-day">Tag</th>
                <th colspan="2">Frühdienst</th>
                <th colspan="2">Spätdienst</th>
                <th class="col-notes notes-header" id="tableNotesHeader">
                    <strong>Bemerkungen / Pause</strong><br>
                    (Pause nur eintragen, wenn nicht ins MDA eingegeben, überlange Übergaben und Rückfahrt/Nachbereitung begründen, Arztbesuche Klienten bezogen angeben)
                </th>
            </tr>
            <tr>
                <th class="col-time">von</th>
                <th class="col-time">bis</th>
                <th class="col-time">von</th>
                <th class="col-time">bis</th>
                <th></th>
            </tr>
        </thead>
        <tbody id="tableBody"></tbody>
        <tfoot>
            <tr class="total-row">
                <td colspan="5" style="text-align: right; padding: 8px;">Gesamtarbeitszeit (Industriestunden, Netto):</td>
                <td id="totalHoursCell" style="text-align: left; padding-left: 15px; color: var(--accent-color);">0,00 Std.</td>
            </tr>
        </tfoot>
    </table>

    <div class="pause-info-text">
        <strong>⚠️ Gesetzlicher Pausenabzug (ArbZG § 4):</strong> Das System zieht gesetzliche Pausenzeiten automatisch von der Gesamtsumme ab: Ab 6 Std. reine Arbeitszeit = 30 Min. Abzug | Ab 9 Std. reine Arbeitszeit = 45 Min. Abzug.
    </div>

    <div class="footer-info">
        <div>Logo / Diakoniestation Gladenbach QMH Kap. 5.1.1</div>
        <div>F4 Vers.4 Nov.13</div>
        <div>Seite 1 von 2</div>
    </div>

    <div class="page-break"></div>
    
    <div class="header" id="mainHeader2">
        <h1>Arbeitszeitnachweis</h1>
        <h2>Diakoniestation Gladenbach</h2>
    </div>

    <p style="font-size: 14px; line-height: 1.6; margin-top: 40px;">
        Die Dienstbesprechungsprotokolle der folgenden Termine habe ich erhalten, gelesen und verstanden:
    </p>
    
    <div class="meta-field" style="margin-top: 20px; font-size: 14px;">
        <label><strong>KW:</strong></label>
        <input type="text" id="kwInput" style="width: 250px; font-weight: bold; border: none;">
    </div>

    <div class="signature-container">
        <div class="sig-block" style="width: 180px;">
            <input type="date" id="sigDate" style="width: 100%; text-align: center; font-size: 14px;">
            <div class="sig-label">Datum</div>
        </div>
        <div class="sig-block">
            <div class="canvas-wrapper">
                <button class="btn-clear-sig" onclick="clearSignature()">Löschen</button>
                <canvas id="sigCanvas" width="300" height="80"></canvas>
            </div>
            <div class="sig-label" style="width: 300px;">Unterschrift des Mitarbeiters</div>
        </div>
    </div>

    <div class="controls-bottom">
        <button class="btn-action btn-save" onclick="saveAsPDFNativeDownload()">💾 PDF generieren und herunterladen</button>
    </div>

    <div class="footer-info" style="margin-top: 110px;">
        <div>Logo / Diakoniestation Gladenbach QMH Kap. 5.1.1</div>
        <div>F4 Vers.4 Nov.13</div>
        <div>Seite 2 von 2</div>
    </div>
</div>

<script>
    const storagePrefix = "diakonie_local_";
    const monthColors = {
        1:  '#cce6ff', 2:  '#ffccd5', 3:  '#e8f5e9', 4:  '#fdfd96',
        5:  '#f5f5f5', 6:  '#b3f0c2', 7:  '#ffb7ce', 8:  '#f4e7d3',
        9:  '#ffd1a4', 10: '#d7ccc8', 11: '#dec4f4', 12: '#ffb3b3'
    };
    const canvas = document.getElementById('sigCanvas');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;

    // FEHLERSICHERER SPEICHER-WRAPPER (Verhindert Abstürze in geschlossenen App-Schnittstellen)
    function safeStorageGet(key) {
        try { return localStorage.getItem(key); } catch(e) { return null; }
    }
    function safeStorageSet(key, value) {
        try { localStorage.setItem(key, value); return true; } catch(e) { return false; }
    }

    function initCanvas() {
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
    }

    function formatTimeInput(input) {
        let val = input.value.replace(/\D/g, '');
        if (val.length > 2) {
            input.value = val.substring(0, 2) + ':' + val.substring(2, 4);
        } else {
            input.value = val;
        }
    }

    function handleTimeBlur(input) {
        let val = input.value.replace(/\D/g, '');
        if (val.length === 4) {
            let h = parseInt(val.substring(0, 2), 10);
            let m = parseInt(val.substring(2, 4), 10);
            if (h > 23) h = 23;
            if (m > 59) m = 59;
            input.value = String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
        } else if (val.length > 0) {
            let h = parseInt(val, 10);
            if (h > 23) h = 23;
            input.value = String(h).padStart(2, '0') + ':00';
        }
        calculateTotalHours();
        saveAllToStorage();
    }

    function autoExpandNote(input) {
        const text = input.value.trim().toLowerCase();
        if (text === 'k') { input.value = 'Krank'; }
        else if (text === 'u') { input.value = 'Urlaub'; }
        else if (text === 'f') { input.value = 'Fortbildung'; }
        else if (text === 'db') { input.value = 'Dienstbesprechung'; }
        else if (text === 'p') { input.value = 'Pause'; }
        saveAllToStorage();
    }

    function timeToMinutes(timeStr) {
        if (!timeStr || !timeStr.includes(':')) return 0;
        const parts = timeStr.split(':');
        const h = parseInt(parts[0], 10);
        const m = parseInt(parts[1], 10);
        if (isNaN(h) || isNaN(m)) return 0;
        return h * 60 + m;
    }

    function calculateTotalHours() {
        let totalNetMinutes = 0;
        const rows = document.querySelectorAll('#tableBody tr');
        
        rows.forEach(row => {
            const fVonNode = row.querySelector('[id$="-frueh-von"]');
            const fBisNode = row.querySelector('[id$="-frueh-bis"]');
            const sVonNode = row.querySelector('[id$="-spaet-von"]');
            const sBisNode = row.querySelector('[id$="-spaet-bis"]');

            if (!fVonNode || !fBisNode || !sVonNode || !sBisNode) return;

            const fVon = timeToMinutes(fVonNode.value);
            const fBis = timeToMinutes(fBisNode.value);
            const sVon = timeToMinutes(sVonNode.value);
            const sBis = timeToMinutes(sBisNode.value);

            let dailyMinutes = 0;
            if (fBis > fVon) dailyMinutes += (fBis - fVon);
            if (sBis > sVon) dailyMinutes += (sBis - sVon);

            if (dailyMinutes > 540) { dailyMinutes -= 45; } 
            else if (dailyMinutes > 360) { dailyMinutes -= 30; }

            if (dailyMinutes > 0) totalNetMinutes += dailyMinutes;
        });
        const industrialHours = totalNetMinutes / 60;
        document.getElementById('totalHoursCell').innerText = industrialHours.toFixed(2).replace('.', ',') + ' Std.';
    }

    function isCanvasEmpty(cv) {
        const blank = document.createElement('canvas');
        blank.width = cv.width; blank.height = cv.height;
        return cv.toDataURL() === blank.toDataURL();
    }

    function saveAsPDFNativeDownload() {
        const name = document.getElementById('nameInput').value.trim();
        const monatJahr = document.getElementById('monthInput').value;
        const sigDateField = document.getElementById('sigDate');
        
        if (!name) { alert('❌ Bitte tragen Sie Ihren Namen ein.'); return; }
        if (!sigDateField.value) { alert('❌ Bitte wählen Sie ein Datum für die Unterschrift aus.'); return; }
        if (isCanvasEmpty(canvas)) { alert('❌ Bitte unterschreiben Sie das Dokument auf Seite 2 vor dem Export.'); return; }

        const targetFilename = `Arbeitszeitnachweis_${name}_${monatJahr}.pdf`;
        const buttonBox = document.querySelector('.controls-bottom');
        buttonBox.style.visibility = 'hidden';
        const element = document.getElementById('pdfArea');

        if (window.html2canvas && window.jspdf) {
            html2canvas(element, { scale: 2, useCORS: true }).then(canvasObj => {
                const imgData = canvasObj.toDataURL('image/jpeg', 0.98);
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF('p', 'mm', 'a4');
         
                const imgWidth = 210; const pageHeight = 295;
                const imgHeight = (canvasObj.height * imgWidth) / canvasObj.width;
                let heightLeft = imgHeight; let position = 0;

                pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;

                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }
                pdf.save(targetFilename);
                buttonBox.style.visibility = 'visible';
            }).catch(() => { buttonBox.style.visibility = 'visible'; window.print(); });
        } else { buttonBox.style.visibility = 'visible'; window.print(); }
    }

    function getHolidays(year) {
        const holidays = [];
        const add = (d, m) => holidays.push(`${year}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}`);
        add(1, 1); add(1, 5); add(3, 10); add(25, 12); add(26, 12);
        const a = year % 19, b = year % 4, c = year % 7;
        const k = Math.floor(year / 100);
        const p = Math.floor((13 + 8 * k) / 25);
        const q = Math.floor(k / 4);
        const M = (15 - p + k - q) % 30;
        const N = (4 + k - q) % 7;
        const d = (19 * a + M) % 30;
        const e = (2 * b + 4 * c + 6 * d + N) % 7;
        const os = 22 + d + e;
        
        let osterMonat = 3, osterTag = os;
        if (os > 31) { osterMonat = 4; osterTag = os - 31; }
        
        const osterSonntag = new Date(year, osterMonat - 1, osterTag);
        const addRelative = (days) => {
            const dt = new Date(osterSonntag);
            dt.setDate(dt.getDate() + days);
            holidays.push(`${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`);
        };
        addRelative(-2); addRelative(1); addRelative(39); addRelative(50); addRelative(60);
        return holidays;
    }

    function getISOWeek(date) {
        const target = new Date(date.valueOf());
        const dayNr = (date.getUTCDay() + 6) % 7;
        target.setUTCDate(target.getUTCDate() - dayNr + 3);
        const firstThursday = target.valueOf();
        target.setUTCMonth(0, 1);
        if (target.getUTCDay() !== 4) { target.setUTCMonth(0, 1 + ((4 - target.getUTCDay()) + 7) % 7); }
        return 1 + Math.ceil((firstThursday - target) / 604800000);
    }

    function handleMonthChangeTrigger() { handleMonthUpdate(true); }

    function handleMonthUpdate(isManualChange = false) {
        const monthValue = document.getElementById('monthInput').value;
        if (!monthValue) return;

        const dateTokens = monthValue.split('-');
        const year = parseInt(dateTokens[0], 10);
        const monthNumber = parseInt(dateTokens[1], 10);
        const monthIndex = monthNumber - 1;

        const newColor = monthColors[monthNumber] || '#f5f5f5';
        document.documentElement.style.setProperty('--header-bg-color', newColor);
        document.getElementById('mainHeader1').style.backgroundColor = newColor;
        document.getElementById('mainHeader2').style.backgroundColor = newColor;
        document.getElementById('tableNotesHeader').style.backgroundColor = newColor;

        const firstDay = new Date(Date.UTC(year, monthIndex, 1));
        const lastDay = new Date(Date.UTC(year, monthNumber, 0));
        const daysInMonth = lastDay.getUTCDate();

        const startKW = getISOWeek(firstDay);
        const endKW = getISOWeek(lastDay);
        
        const tbody = document.getElementById('tableBody');
        const holidays = getHolidays(year);
        tbody.innerHTML = '';

        // Vorab-Check der existierenden Speicherdaten für diesen spezifischen Monat
        const dataKey = storagePrefix + "data_" + monthValue;
        const raw = safeStorageGet(dataKey);
        const parsed = raw ? JSON.parse(raw) : null;
        const savedCells = (parsed && parsed.cells) ? parsed.cells : {};

        for (let i = 1; i <= daysInMonth; i++) {
            const dayStr = String(i).padStart(2, '0');
            const monthStr = String(monthNumber).padStart(2, '0');
            const dateStr = `${year}-${monthStr}-${dayStr}`;
            const dateObj = new Date(year, monthIndex, i);
            const dayOfWeek = dateObj.getDay();
            let classes = [];
            if (dayOfWeek === 0 || dayOfWeek === 6) classes.push('weekend-row');
            if (holidays.includes(dateStr)) classes.push('holiday-row');

            const tr = document.createElement('tr');
            if (classes.length > 0) tr.className = classes.join(' ');

            // IDs der Zellen
            const idFVon = `cell-${i}-frueh-von`;
            const idFBis = `cell-${i}-frueh-bis`;
            const idSVon = `cell-${i}-spaet-von`;
            const idSBis = `cell-${i}-spaet-bis`;
            const idBem  = `cell-${i}-bemerkung`;

            // Daten direkt beim Erzeugen injizieren, um temporär leere Zustände abzufangen
            tr.innerHTML = `
                <td class="col-day" style="${(dayOfWeek===0||dayOfWeek===6) ? 'background-color: var(--weekend-color);' : 'background-color: transparent;'}">${dayStr}</td>
                <td><input type="text" class="cell-input" id="${idFVon}" value="${savedCells[idFVon] || ''}" oninput="formatTimeInput(this)" onblur="handleTimeBlur(this)" placeholder="--:--"></td>
                <td><input type="text" class="cell-input" id="${idFBis}" value="${savedCells[idFBis] || ''}" oninput="formatTimeInput(this)" onblur="handleTimeBlur(this)" placeholder="--:--"></td>
                <td><input type="text" class="cell-input" id="${idSVon}" value="${savedCells[idSVon] || ''}" oninput="formatTimeInput(this)" onblur="handleTimeBlur(this)" placeholder="--:--"></td>
                <td><input type="text" class="cell-input" id="${idSBis}" value="${savedCells[idSBis] || ''}" oninput="formatTimeInput(this)" onblur="handleTimeBlur(this)" placeholder="--:--"></td>
                <td><input type="text" class="cell-input cell-input-left" id="${idBem}" value="${savedCells[idBem] || ''}" onblur="autoExpandNote(this)"></td>
            `;
            tbody.appendChild(tr);
        }

        if (!isManualChange) { 
            loadStoredRowData();
        } else { 
            document.getElementById('kwInput').value = `KW ${startKW}-${endKW} / ${year}`;
            saveAllToStorage(); 
        }
        calculateTotalHours();
    }

    function saveAllToStorage() {
        const monthValue = document.getElementById('monthInput').value;
        if (!monthValue) return;

        const dataKey = storagePrefix + "data_" + monthValue;
        const payload = {
            username: document.getElementById('nameInput').value,
            kwInput: document.getElementById('kwInput').value,
            sigDate: document.getElementById('sigDate').value,
            signatureImg: canvas.toDataURL(),
            cells: {}
        };
        const inputs = document.querySelectorAll('#tableBody input');
        inputs.forEach(input => { if(input.value) payload.cells[input.id] = input.value; });

        safeStorageSet(dataKey, JSON.stringify(payload));
        safeStorageSet(storagePrefix + "last_active_month", monthValue);
        safeStorageSet(storagePrefix + "global_username", document.getElementById('nameInput').value);
    }

    function loadMonthDataset() {
        const lastMonth = safeStorageGet(storagePrefix + "last_active_month");
        if (lastMonth) {
            document.getElementById('monthInput').value = lastMonth;
        } else { 
            const now = new Date();
            const currentYear = now.getFullYear();
            const currentMonth = String(now.getMonth() + 1).padStart(2, '0');
            document.getElementById('monthInput').value = `${currentYear}-${currentMonth}`;
        }
        
        const globalName = safeStorageGet(storagePrefix + "global_username");
        if (globalName) {
            document.getElementById('nameInput').value = globalName;
        }
        
        handleMonthUpdate(false);
    }

    function loadStoredRowData() {
        const monthValue = document.getElementById('monthInput').value;
        const dataKey = storagePrefix + "data_" + monthValue;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById('sigDate').value = "";
        
        const dateTokens = monthValue.split('-');
        const year = parseInt(dateTokens[0], 10);
        const monthNumber = parseInt(dateTokens[1], 10);
        const firstDay = new Date(Date.UTC(year, monthNumber - 1, 1));
        const lastDay = new Date(Date.UTC(year, monthNumber, 0));
        const startKW = getISOWeek(firstDay);
        const endKW = getISOWeek(lastDay);
        document.getElementById('kwInput').value = `KW ${startKW}-${endKW} / ${year}`;

        const raw = safeStorageGet(dataKey);
        if(!raw) {
            calculateTotalHours();
            return;
        }
        const parsed = JSON.parse(raw);

        if(parsed.username !== undefined) document.getElementById('nameInput').value = parsed.username;
        if(parsed.kwInput !== undefined) document.getElementById('kwInput').value = parsed.kwInput;
        if(parsed.sigDate) document.getElementById('sigDate').value = parsed.sigDate;
        if(parsed.signatureImg && parsed.signatureImg.length > 100) {
            const img = new Image();
            img.onload = function() { ctx.drawImage(img, 0, 0); };
            img.src = parsed.signatureImg;
        }

        if(parsed.cells) {
            Object.keys(parsed.cells).forEach(id => {
                const inputElement = document.getElementById(id);
                if(inputElement) inputElement.value = parsed.cells[id];
            });
        }
    }

    function getPos(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return { x: clientX - rect.left, y: clientY - rect.top };
    }
    
    function startDraw(e) {
        isDrawing = true;
        const pos = getPos(e); 
        ctx.beginPath(); 
        ctx.moveTo(pos.x, pos.y);
        if(e.touches) e.preventDefault();
    }
    
    function draw(e) {
        if (!isDrawing) return;
        const pos = getPos(e); 
        ctx.lineTo(pos.x, pos.y); 
        ctx.stroke();
        if(e.touches) e.preventDefault();
    }
    
    function stopDraw() { 
        if(isDrawing) { 
            isDrawing = false;
            saveAllToStorage(); 
        } 
    }

    canvas.addEventListener('mousedown', startDraw); 
    canvas.addEventListener('mousemove', draw); 
    window.addEventListener('mouseup', stopDraw);
    canvas.addEventListener('touchstart', startDraw, { passive: false }); 
    canvas.addEventListener('touchmove', draw, { passive: false }); 
    window.addEventListener('touchend', stopDraw);
    function clearSignature() { ctx.clearRect(0, 0, canvas.width, canvas.height); saveAllToStorage(); }

    document.addEventListener("DOMContentLoaded", () => {
        initCanvas();
        loadMonthDataset();
        
        // REAGIERT NUN AUF 'change' STATT 'input' – Verhindert fehlerhafte Leer-Überschreibungen
        document.addEventListener('change', (e) => {
            if (e.target && (e.target.classList.contains('cell-input') || e.target.id === 'nameInput' || e.target.id === 'kwInput')) {
                saveAllToStorage();
            }
        });

        document.getElementById('sigDate').addEventListener('change', () => {
            saveAllToStorage();
        });
    });
</script>

</body>
</html>

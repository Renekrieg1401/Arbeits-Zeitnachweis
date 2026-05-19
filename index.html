<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Arbeitszeitnachweis - Diakoniestation Gladenbach</title>
    
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
            margin: 0;
            padding: 10px 10px 85px 10px;
            color: #333;
            background-color: #525659; 
            -webkit-text-size-adjust: 100%;
        }
        
        /* UNIVERSELLE MOBILE BUTTONLEISTE */
        .steuerungs-leiste-mobil {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: #f8f9fa !important;
            border-top: 3px solid var(--accent-color) !important;
            padding: 12px 10px;
            display: flex !important;
            justify-content: space-around !important;
            gap: 8px !important;
            z-index: 9999 !important;
            box-shadow: 0 -3px 10px rgba(0,0,0,0.2);
        }
        
        .knopf-design {
            font-size: 14px !important;
            font-family: Arial, sans-serif !important;
            font-weight: bold !important;
            padding: 12px 6px !important;
            cursor: pointer !important;
            color: white !important;
            border: 1px solid #222 !important;
            border-radius: 8px !important;
            flex: 1 !important;
            text-align: center !important;
            box-sizing: border-box !important;
            -webkit-appearance: none;
            appearance: none;
        }

        .mobil-scroll-wrapper {
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            background: white;
        }
        
        .page {
            width: 210mm;
            min-height: 297mm;
            padding: 15mm 10mm 10mm 10mm;
            box-sizing: border-box;
            background: white;
            margin: 0 auto;
            text-align: left;
        }
        
        .header {
            background-color: var(--header-bg-color) !important;
            padding: 15px;
            border: 1px solid #ccc;
            margin-bottom: 20px;
        }
        h1 { font-size: 20px; margin: 0 0 5px 0; text-transform: uppercase; letter-spacing: 1px; }
        h2 { font-size: 16px; margin: 0 0 15px 0; color: var(--accent-color); }
        
        .meta-inputs { display: flex; gap: 20px; margin-bottom: 10px; }
        .meta-field { display: flex; align-items: center; gap: 5px; }
        .meta-field label { font-weight: bold; font-size: 14px; }
        
        input[type="text"], input[type="month"], input[type="date"] {
            border: none;
            border-bottom: 1px solid #333; background: transparent;
            font-size: 16px; 
            padding: 2px; font-family: Arial, sans-serif;
        }
        .name-field { font-size: 16px; font-weight: bold; width: 220px; text-align: left; }
        
        table { width: 100%; border-collapse: collapse; font-size: 11px; min-width: 780px; }
        th, td { border: 1px solid #666; padding: 5px 3px; text-align: center; }
        th { background-color: #f9f9f9; font-weight: bold; }
        
        .col-day { width: 4%; font-weight: bold; }
        .col-time { width: 10%; }
        .col-notes { width: 56%; text-align: left; }
        
        .notes-header {
            font-size: 10px;
            text-align: left; 
            font-weight: normal;
            line-height: 1.3;
            background-color: var(--header-bg-color) !important;
            padding: 6px !important;
        }
        input.cell-input {
            width: 100%;
            border: none; background: transparent;
            text-align: center; font-size: 13px; box-sizing: border-box;
            -webkit-appearance: none;
            border-radius: 0;
            padding: 4px 0;
        }
        input.cell-input-left { text-align: left; padding-left: 4px; }
        
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
        
        .signature-container { margin-top: 40px; display: flex; gap: 30px; align-items: flex-end; flex-wrap: wrap; }
        .sig-block { display: flex; flex-direction: column; gap: 10px; }
        .canvas-wrapper { position: relative; border-bottom: 1px solid #333; width: 300px; height: 100px; background-color: #fafafa; }
        canvas { width: 300px; height: 100px; cursor: crosshair; display: block; touch-action: none; }
        
        .btn-clear-sig {
            position: absolute;
            right: 0; top: -25px; background: #e0e0e0;
            border: 1px solid #999; font-size: 11px; padding: 4px 8px; cursor: pointer; border-radius: 4px;
        }
        
        .holiday-row td { text-decoration: underline !important; font-weight: bold; }
        .weekend-row { background-color: var(--weekend-color) !important; }
        .total-row { background-color: #eaeff5 !important; font-weight: bold; font-size: 13px; }

        @media (min-width: 215mm) {
            body { padding: 20px; background-color: #525659; }
            .steuerungs-leiste-mobil {
                position: static;
                width: 210mm;
                margin: 0 auto 20px auto;
                border: 2px solid var(--accent-color) !important;
                border-radius: 6px;
            }
            .mobil-scroll-wrapper {
                width: 210mm;
                margin: 0 auto;
                overflow: visible;
                border: none;
            }
            .page { box-shadow: 0 0 10px rgba(0,0,0,0.3); }
        }

        @media print {
            body { margin: 0; padding: 0; background-color: white; }
            .page { width: 100%; min-height: auto; padding: 0; box-shadow: none; margin: 0; }
            .page-break { border-top: none; }
            input[type="text"], input[type="month"], input[type="date"], input.cell-input { border: none !important; }
            .btn-clear-sig, .steuerungs-leiste-mobil { display: none !important; }
            .canvas-wrapper { border-bottom: none !important; background: transparent; }
        }
    </style>
</head>
<body>

<div class="steuerungs-leiste-mobil" id="kontrollZentrum">
    <button type="button" class="knopf-design" style="background-color: #2e7d32;" onclick="triggerManualSave()">💾 Sichern</button>
    <button type="button" class="knopf-design" style="background-color: #ef6c00;" onclick="triggerManualLoad()">🔄 Laden</button>
    <button type="button" class="knopf-design" style="background-color: #004b7c;" onclick="saveAsPDFNativeDownload()">📄 PDF Export</button>
</div>

<div class="mobil-scroll-wrapper">
    <div class="page" id="pdfArea">
        
        <div class="header" id="mainHeader1">
            <h1>Arbeitszeitnachweis</h1>
            <h2>Diakoniestation Gladenbach</h2>
            <div class="meta-inputs">
                <div class="meta-field">
                    <label>Monat:</label>
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
                    <td colspan="5" style="text-align: right; padding: 8px;">Gesamtarbeitszeit (Netto):</td>
                    <td id="totalHoursCell" style="text-align: left; padding-left: 15px; color: var(--accent-color);">0,00 Std.</td>
                </tr>
            </tfoot>
        </table>

        <div class="pause-info-text">
            <strong>⚠️ Gesetzlicher Pausenabzug (ArbZG § 4):</strong> Das System zieht Pausenzeiten automatisch ab: Ab 6 Std. = 30 Min. | Ab 9 Std. = 45 Min. Abzug.
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
                    <button type="button" class="btn-clear-sig" onclick="clearSignature()">Löschen</button>
                    <canvas id="sigCanvas" width="300" height="100"></canvas>
                </div>
                <div class="sig-label" style="width: 300px;">Unterschrift des Mitarbeiters</div>
            </div>
        </div>

        <div class="footer-info" style="margin-top: 100px;">
            <div>Logo / Diakoniestation Gladenbach QMH Kap. 5.1.1</div>
            <div>F4 Vers.4 Nov.13</div>
            <div>Seite 2 von 2</div>
        </div>
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

    function initCanvas() {
        if (!canvas) return;
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2.5;
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
    }

    function autoExpandNote(input) {
        const text = input.value.trim().toLowerCase();
        if (text === 'k') { input.value = 'Krank'; }
        else if (text === 'u') { input.value = 'Urlaub'; }
        else if (text === 'f') { input.value = 'Fortbildung'; }
        else if (text === 'db') { input.value = 'Dienstbesprechung'; }
        else if (text === 'p') { input.value = 'Pause'; }
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
        const cell = document.getElementById('totalHoursCell');
        if (cell) cell.innerText = industrialHours.toFixed(2).replace('.', ',') + ' Std.';
    }

    function isCanvasEmpty(cv) {
        const blank = document.createElement('canvas');
        blank.width = cv.width; blank.height = cv.height;
        return cv.toDataURL() === blank.toDataURL();
    }

    function triggerManualSave() {
        saveAllToStorage();
        alert("💾 Daten erfolgreich gesichert!");
    }

    function triggerManualLoad() {
        loadStoredRowData();
        calculateTotalHours();
        alert("🔄 Letzte gespeicherte Daten geladen.");
    }

    function saveAsPDFNativeDownload() {
        const name = document.getElementById('nameInput').value.trim();
        const monatJahr = document.getElementById('monthInput').value;
        const sigDateField = document.getElementById('sigDate');
        
        if (!name) { alert('❌ Bitte Namen eintragen.'); return; }
        if (!sigDateField.value) { alert('❌ Bitte Datum für Unterschrift wählen.'); return; }
        if (isCanvasEmpty(canvas)) { alert('❌ Bitte vor dem Export unterschreiben.'); return; }

        const targetFilename = `Arbeitszeitnachweis_${name}_${monatJahr}.pdf`;
        const leiste = document.getElementById('kontrollZentrum');
        if(leiste) leiste.style.setProperty('display', 'none', 'important');
        
        const element = document.getElementById('pdfArea');

        if (window.html2canvas && window.jspdf) {
            html2canvas(element, { scale: 2, useCORS: true }).then(canvasObj => {
                const imgData = canvasObj.toDataURL('image/jpeg', 0.98);
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF('p', 'mm', 'a4');
                pdf.addImage(imgData, 'JPEG', 0, 0, 210, (canvasObj.height * 210) / canvasObj.width);
                pdf.save(targetFilename);
                if(leiste) leiste.style.setProperty('display', 'flex', 'important');
            }).catch(() => { 
                if(leiste) leiste.style.setProperty('display', 'flex', 'important');
                window.print(); 
            });
        } else { 
            if(leiste) leiste.style.setProperty('display', 'flex', 'important');
            window.print(); 
        }
    }

    // Robuste, universelle KW-Berechnung für Textastic Vorschau
    function getISOWeek(date) {
        const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        const dayNum = d.getUTCDay() || 7;
        d.setUTCDate(d.getUTCDate() + 4 - dayNum);
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
        return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    }

    function handleMonthChangeTrigger() { handleMonthUpdate(true); }

    function handleMonthUpdate(isManualChange = false) {
        const monthInput = document.getElementById('monthInput');
        if (!monthInput) return;
        const monthValue = monthInput.value;
        if (!monthValue) return;

        const dateTokens = monthValue.split('-');
        const year = parseInt(dateTokens[0], 10);
        const monthNumber = parseInt(dateTokens[1], 10);
        const monthIndex = monthNumber - 1;

        const newColor = monthColors[monthNumber] || '#f5f5f5';
        document.documentElement.style.setProperty('--header-bg-color', newColor);
        
        if(document.getElementById('mainHeader1')) document.getElementById('mainHeader1').style.backgroundColor = newColor;
        if(document.getElementById('mainHeader2')) document.getElementById('mainHeader2').style.backgroundColor = newColor;
        if(document.getElementById('tableNotesHeader')) document.getElementById('tableNotesHeader').style.backgroundColor = newColor;

        const firstDay = new Date(year, monthIndex, 1);
        const lastDay = new Date(year, monthnumber = monthIndex + 1, 0);
        const daysInMonth = lastDay.getDate();
        
        const startKW = getISOWeek(firstDay);
        const endKW = getISOWeek(lastDay);
        
        const tbody = document.getElementById('tableBody');
        if (!tbody) return;
        tbody.innerHTML = '';

        for (let i = 1; i <= daysInMonth; i++) {
            const dayStr = String(i).padStart(2, '0');
            const dateObj = new Date(year, monthIndex, i);
            const dayOfWeek = dateObj.getDay();
            let classes = [];
            if (dayOfWeek === 0 || dayOfWeek === 6) classes.push('weekend-row');

            const tr = document.createElement('tr');
            if (classes.length > 0) tr.className = classes.join(' ');

            tr.innerHTML = `
                <td class="col-day">${dayStr}</td>
                <td><input type="text" pattern="[0-9]*" inputmode="numeric" class="cell-input" id="cell-${i}-frueh-von" oninput="formatTimeInput(this)" onblur="handleTimeBlur(this)" placeholder="--:--"></td>
                <td><input type="text" pattern="[0-9]*" inputmode="numeric" class="cell-input" id="cell-${i}-frueh-bis" oninput="formatTimeInput(this)" onblur="handleTimeBlur(this)" placeholder="--:--"></td>
                <td><input type="text" pattern="[0-9]*" inputmode="numeric" class="cell-input" id="cell-${i}-spaet-von" oninput="formatTimeInput(this)" onblur="handleTimeBlur(this)" placeholder="--:--"></td>
                <td><input type="text" pattern="[0-9]*" inputmode="numeric" class="cell-input" id="cell-${i}-spaet-bis" oninput="formatTimeInput(this)" onblur="handleTimeBlur(this)" placeholder="--:--"></td>
                <td><input type="text" class="cell-input cell-input-left" id="cell-${i}-bemerkung" onblur="autoExpandNote(this)"></td>
            `;
            tbody.appendChild(tr);
        }

        if(document.getElementById('kwInput')) {
            document.getElementById('kwInput').value = `KW ${startKW}-${endKW} / ${year}`;
        }

        if (!isManualChange) { loadStoredRowData(); }
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
        document.querySelectorAll('#tableBody input').forEach(input => { if(input.value) payload.cells[input.id] = input.value; });
        localStorage.setItem(dataKey, JSON.stringify(payload));
        localStorage.setItem(storagePrefix + "last_active_month", monthValue);
        localStorage.setItem(storagePrefix + "global_username", document.getElementById('nameInput').value);
    }

    function loadMonthDataset() {
        const lastMonth = localStorage.getItem(storagePrefix + "last_active_month");
        if (lastMonth) {
            document.getElementById('monthInput').value = lastMonth;
        } else {
            const now = new Date();
            document.getElementById('monthInput').value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
        }
        
        const globalName = localStorage.getItem(storagePrefix + "global_username");
        if (globalName) {
            document.getElementById('nameInput').value = globalName;
        }
        handleMonthUpdate(false);
    }

    function loadStoredRowData() {
        const monthValue = document.getElementById('monthInput').value;
        const dataKey = storagePrefix + "data_" + monthValue;
        const raw = localStorage.getItem(dataKey);
        if(!raw) return;
        const parsed = JSON.parse(raw);
        if(parsed.username) document.getElementById('nameInput').value = parsed.username;
        if(parsed.sigDate) document.getElementById('sigDate').value = parsed.sigDate;
        if(parsed.signatureImg && parsed.signatureImg.length > 100) {
            const img = new Image();
            img.onload = function() { ctx.drawImage(img, 0, 0); };
            img.src = parsed.signatureImg;
        }
        if(parsed.cells) {
            Object.keys(parsed.cells).forEach(id => {
                const el = document.getElementById(id);
                if(el) el.value = parsed.cells[id];
            });
        }
    }

    function getPos(e) {
        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;
        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        return { x: clientX - rect.left, y: clientY - rect.top };
    }
    
    function startDraw(e) { isDrawing = true; const pos = getPos(e); ctx.beginPath(); ctx.moveTo(pos.x, pos.y); if(e.touches) e.preventDefault(); }
    function draw(e) { if (!isDrawing) return; const pos = getPos(e); ctx.lineTo(pos.x, pos.y); ctx.stroke(); if(e.touches) e.preventDefault(); }
    function stopDraw() { isDrawing = false; }

    if (canvas) {
        canvas.addEventListener('mousedown', startDraw); canvas.addEventListener('mousemove', draw); window.addEventListener('mouseup', stopDraw);
        canvas.addEventListener('touchstart', startDraw, { passive: false }); canvas.addEventListener('touchmove', draw, { passive: false }); window.addEventListener('touchend', stopDraw);
    }
    function clearSignature() { ctx.clearRect(0, 0, canvas.width, canvas.height); }

    document.addEventListener("DOMContentLoaded", () => { initCanvas(); loadMonthDataset(); });
</script>

</body>
</html>

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
            -[span_2](start_span)-accent-color: #004b7c;[span_2](end_span)
            --weekend-color: #f0f0f0; 
        }
        body {
            font-family: Arial, sans-serif;
            [span_3](start_span)margin: 20px;[span_3](end_span)
            color: #333;
        }
        .page {
            width: 210mm;
            [span_4](start_span)min-height: 297mm;[span_4](end_span)
            padding: 10mm;
            box-sizing: border-box;
            background: white;
        }
        .header {
            background-color: var(--header-bg-color) !important;
            [span_5](start_span)padding: 15px;[span_5](end_span)
            border: 1px solid #ccc;
            margin-bottom: 20px;
            print-color-adjust: exact;
            -[span_6](start_span)webkit-print-color-adjust: exact;[span_6](end_span)
        }
        [span_7](start_span)h1 { font-size: 20px; margin: 0 0 5px 0; text-transform: uppercase; letter-spacing: 1px;[span_7](end_span) }
        [span_8](start_span)h2 { font-size: 16px; margin: 0 0 15px 0; color: var(--accent-color);[span_8](end_span) }
        
        [span_9](start_span).meta-inputs { display: flex; gap: 20px; margin-bottom: 10px;[span_9](end_span) }
        [span_10](start_span).meta-field { display: flex; align-items: center; gap: 5px;[span_10](end_span) }
        [span_11](start_span).meta-field label { font-weight: bold; font-size: 14px;[span_11](end_span) }
        
        input[type="text"], input[type="month"], input[type="date"] {
            border: none;
            [span_12](start_span)border-bottom: 1px solid #333; background: transparent;[span_12](end_span)
            [span_13](start_span)font-size: 14px; padding: 2px; font-family: Arial, sans-serif;[span_13](end_span)
        }
        [span_14](start_span).name-field { font-size: 16px; font-weight: bold; width: 250px; text-align: left;[span_14](end_span) }
        
        [span_15](start_span)table { width: 100%; border-collapse: collapse; font-size: 12px;[span_15](end_span) }
        [span_16](start_span)th, td { border: 1px solid #666; padding: 4px; text-align: center;[span_16](end_span) }
        [span_17](start_span)th { background-color: #f9f9f9; font-weight: bold;[span_17](end_span) }
        
        [span_18](start_span).col-day { width: 5%; font-weight: bold;[span_18](end_span) }
        [span_19](start_span).col-time { width: 12%;[span_19](end_span) }
        [span_20](start_span).col-notes { width: 59%; text-align: left;[span_20](end_span) }
        
        .notes-header {
            font-size: 10px;
            [span_21](start_span)text-align: left; font-weight: normal;[span_21](end_span)
            background-color: var(--header-bg-color) !important;
            print-color-adjust: exact; -[span_22](start_span)webkit-print-color-adjust: exact;[span_22](end_span)
        }
        input.cell-input {
            width: 100%;
            [span_23](start_span)border: none; background: transparent;[span_23](end_span)
            [span_24](start_span)text-align: center; font-size: 12px; box-sizing: border-box;[span_24](end_span)
        }
        [span_25](start_span)input.cell-input-left { text-align: left;[span_25](end_span) }
        
        .pause-info-text {
            font-size: 11px;
            [span_26](start_span)color: #555; text-align: left;[span_26](end_span)
            [span_27](start_span)margin-top: 10px; font-style: italic; line-height: 1.4;[span_27](end_span)
        }
        
        .footer-info {
            margin-top: 15px;
            [span_28](start_span)display: flex; justify-content: space-between; font-size: 10px; color: #666;[span_28](end_span)
        }
        [span_29](start_span).page-break { page-break-before: always; margin-top: 40px; border-top: 2px dashed #ccc; padding-top: 20px;[span_29](end_span) }
        
        [span_30](start_span).signature-container { margin-top: 40px; display: flex; gap: 50px; align-items: flex-end;[span_30](end_span) }
        [span_31](start_span).sig-block { display: flex; flex-direction: column; gap: 10px;[span_31](end_span) }
        [span_32](start_span).canvas-wrapper { position: relative; border-bottom: 1px solid #333; width: 300px; height: 80px; background-color: #fafafa;[span_32](end_span) }
        [span_33](start_span)canvas { width: 300px; height: 80px; cursor: crosshair; display: block;[span_33](end_span) }
        
        .btn-clear-sig {
            position: absolute;
            [span_34](start_span)right: 0; top: -25px; background: #e0e0e0;[span_34](end_span)
            [span_35](start_span)border: 1px solid #999; font-size: 10px; padding: 2px 5px; cursor: pointer; border-radius: 3px;[span_35](end_span)
        }
        
        [span_36](start_span).holiday-row td { text-decoration: underline !important; font-weight: bold;[span_36](end_span) }
        .weekend-row {
            background-color: var(--weekend-color) !important;
            print-color-adjust: exact; -[span_37](start_span)webkit-print-color-adjust: exact;[span_37](end_span)
        }
        .total-row {
            background-color: #eaeff5 !important;
            [span_38](start_span)font-weight: bold; font-size: 13px;[span_38](end_span)
            print-color-adjust: exact; -webkit-print-color-adjust: exact;
        }
        
        [span_39](start_span).controls-bottom { margin-top: 40px; display: flex; gap: 15px; justify-content: flex-start; align-items: center;[span_39](end_span) }
        .btn-action {
            color: white;
            [span_40](start_span)border: none; padding: 12px 24px; border-radius: 4px;[span_40](end_span)
            [span_41](start_span)cursor: pointer; font-weight: bold; font-size: 14px; font-family: Arial, sans-serif;[span_41](end_span)
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        [span_42](start_span).btn-save { background-color: #004b7c;[span_42](end_span) }
        [span_43](start_span).btn-save:hover { background-color: #003353;[span_43](end_span) }

        @media print {
            [span_44](start_span)body { margin: 0;[span_44](end_span) }
            [span_45](start_span).page { width: 100%; min-height: auto; padding: 0;[span_45](end_span) }
            [span_46](start_span).page-break { border-top: none;[span_46](end_span) }
            [span_47](start_span)input[type="text"], input[type="month"], input[type="date"], input.cell-input { border: none !important;[span_47](end_span) }
            [span_48](start_span).btn-clear-sig, .controls-bottom { display: none !important;[span_48](end_span) }
            [span_49](start_span).canvas-wrapper { border-bottom: none !important; background: transparent;[span_49](end_span) }
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
                [span_50](start_span)<input type="month" id="monthInput" onchange="handleMonthChangeTrigger()">[span_50](end_span)
            </div>
            <div class="meta-field" style="margin-left: auto;">
                <label>Name:</label>
                <input type="text" id="nameInput" class="name-field" placeholder="Vorname Nachname">
            </div>
        </div>
    </div>

    <table>
        [span_51](start_span)<thead>[span_51](end_span)
            <tr>
                <th rowspan="2" class="col-day">Tag</th>
                <th colspan="2">Frühdienst</th>
                <th colspan="2">Spätdienst</th>
                <th class="col-notes notes-header" id="tableNotesHeader">
                    [span_52](start_span)<strong>Bemerkungen / Pause</strong><br>[span_52](end_span)
                    (Pause nur eintragen, wenn nicht ins MDA eingegeben, überlange Übergaben und Rückfahrt/Nachbereitung begründen, Arztbesuche Klienten bezogen angeben)
                </th>
            </tr>
            <tr>
                <th class="col-time">von</th>
                [span_53](start_span)<th class="col-time">bis</th>[span_53](end_span)
                <th class="col-time">von</th>
                <th class="col-time">bis</th>
                <th></th>
            </tr>
        </thead>
        <tbody id="tableBody"></tbody>
        [span_54](start_span)<tfoot>[span_54](end_span)
            <tr class="total-row">
                [span_55](start_span)<td colspan="5" style="text-align: right; padding: 8px;">Gesamtarbeitszeit (Industriestunden, Netto):</td>[span_55](end_span)
                [span_56](start_span)<td id="totalHoursCell" style="text-align: left; padding-left: 15px; color: var(--accent-color);">0,00 Std.</td>[span_56](end_span)
            </tr>
        </tfoot>
    </table>

    <div class="pause-info-text">
        <strong>⚠️ Gesetzlicher Pausenabzug (ArbZG § 4):</strong> Das System zieht gesetzliche Pausenzeiten automatisch von der Gesamtsumme ab: Ab 6 Std. reine Arbeitszeit = 30 Min. Abzug | Ab 9 Std. reine Arbeitszeit = 45 Min. Abzug.
    </div>

    <div class="footer-info">
        <div>Logo / Diakoniestation Gladenbach QMH Kap. 5.1.1</div>
        [span_57](start_span)<div>F4 Vers.4 Nov.13</div>[span_57](end_span)
        <div>Seite 1 von 2</div>
    </div>

    <div class="page-break"></div>
    
    <div class="header" id="mainHeader2">
        <h1>Arbeitszeitnachweis</h1>
        <h2>Diakoniestation Gladenbach</h2>
    </div>

    [span_58](start_span)<p style="font-size: 14px; line-height: 1.6; margin-top: 40px;">[span_58](end_span)
        Die Dienstbesprechungsprotokolle der folgenden Termine habe ich erhalten, gelesen und verstanden:
    </p>
    
    [span_59](start_span)<div class="meta-field" style="margin-top: 20px; font-size: 14px;">[span_59](end_span)
        <label><strong>KW:</strong></label>
        [span_60](start_span)<input type="text" id="kwInput" style="width: 250px; font-weight: bold; border: none;">[span_60](end_span)
    </div>

    <div class="signature-container">
        <div class="sig-block" style="width: 180px;">
            [span_61](start_span)<input type="date" id="sigDate" style="width: 100%; text-align: center; font-size: 14px;">[span_61](end_span)
            <div class="sig-label">Datum</div>
        </div>
        <div class="sig-block">
            <div class="canvas-wrapper">
                <button class="btn-clear-sig" onclick="clearSignature()">Löschen</button>
                <canvas id="sigCanvas" width="300" height="80"></canvas>
            </div>
            [span_62](start_span)<div class="sig-label" style="width: 300px;">Unterschrift des Mitarbeiters</div>[span_62](end_span)
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
    [span_63](start_span)const storagePrefix = "diakonie_local_";[span_63](end_span)
    const monthColors = {
        1:  '#cce6ff', 2:  '#ffccd5', 3:  '#e8f5e9', 4:  '#fdfd96',
        5:  '#f5f5f5', 6:  '#b3f0c2', 7:  '#ffb7ce', 8:  '#f4e7d3',
        9:  '#ffd1a4', 10: '#d7ccc8', 11: '#dec4f4', 12: '#ffb3b3'
    };
    [span_64](start_span)const canvas = document.getElementById('sigCanvas');[span_64](end_span)
    const ctx = canvas.getContext('2d');
    let isDrawing = false;

    // FEHLERSICHERER SPEICHER-CHECK (Verhindert Abstürze in Apps & lokalen Datei-Umgebungen)
    function safeStorageGet(key) {
        try { return localStorage.getItem(key); } catch(e) { return null; }
    }
    function safeStorageSet(key, value) {
        try { localStorage.setItem(key, value); return true; } catch(e) { return false; }
    }

    [span_65](start_span)function initCanvas() {[span_65](end_span)
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        [span_66](start_span)ctx.lineJoin = 'round';[span_66](end_span)
    }

    function formatTimeInput(input) {
        let val = input.value.replace(/\D/g, '');
        [span_67](start_span)if (val.length > 2) {[span_67](end_span)
            input.value = val.substring(0, 2) + ':' + val.substring(2, 4);
        [span_68](start_span)} else {[span_68](end_span)
            input.value = val;
        [span_69](start_span)}
    }

    function handleTimeBlur(input) {
        let val = input.value.replace(/\D/g, '');
        if (val.length === 4) {[span_69](end_span)
            let h = parseInt(val.substring(0, 2), 10);
            [span_70](start_span)let m = parseInt(val.substring(2, 4), 10);[span_70](end_span)
            if (h > 23) h = 23;
            if (m > 59) m = 59;
            [span_71](start_span)input.value = String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');[span_71](end_span)
        } else if (val.length > 0) {
            let h = parseInt(val, 10);
            [span_72](start_span)if (h > 23) h = 23;[span_72](end_span)
            input.value = String(h).padStart(2, '0') + ':00';
        [span_73](start_span)}
        calculateTotalHours();
        saveAllToStorage();
    }[span_73](end_span)

    function autoExpandNote(input) {
        const text = input.value.trim().toLowerCase();
        if (text === 'k') { input.value = 'Krank'; [span_74](start_span)}
        else if (text === 'u') { input.value = 'Urlaub'; }[span_74](end_span)
        else if (text === 'f') { input.value = 'Fortbildung'; [span_75](start_span)}
        else if (text === 'db') { input.value = 'Dienstbesprechung'; }[span_75](end_span)
        else if (text === 'p') { input.value = 'Pause'; [span_76](start_span)}
        saveAllToStorage();
    }

    function timeToMinutes(timeStr) {
        if (!timeStr || !timeStr.includes(':')) return 0;
        const parts = timeStr.split(':');[span_76](end_span)
        const h = parseInt(parts[0], 10);
        const m = parseInt(parts[1], 10);
        if (isNaN(h) || isNaN(m)) return 0;
        [span_77](start_span)return h * 60 + m;[span_77](end_span)
    }

    function calculateTotalHours() {
        let totalNetMinutes = 0;
        [span_78](start_span)const rows = document.querySelectorAll('#tableBody tr');[span_78](end_span)
        
        rows.forEach(row => {
            const fVonNode = row.querySelector('[id$="-frueh-von"]');
            const fBisNode = row.querySelector('[id$="-frueh-bis"]');
            const sVonNode = row.querySelector('[id$="-spaet-von"]');
            const sBisNode = row.querySelector('[id$="-spaet-bis"]');

            if (!fVonNode || !fBisNode || !sVonNode || !sBisNode) return;

            [span_79](start_span)const fVon = timeToMinutes(fVonNode.value);[span_79](end_span)
            const fBis = timeToMinutes(fBisNode.value);
            const sVon = timeToMinutes(sVonNode.value);
            const sBis = timeToMinutes(sBisNode.value);

            let dailyMinutes = 0;
            if (fBis > fVon) dailyMinutes += (fBis - fVon);
            [span_80](start_span)if (sBis > sVon) dailyMinutes += (sBis - sVon);[span_80](end_span)

            if (dailyMinutes > 540) { dailyMinutes -= 45; } 
            else if (dailyMinutes > 360) { dailyMinutes -= 30; }

            if (dailyMinutes > 0) totalNetMinutes += dailyMinutes;
        });
        [span_81](start_span)const industrialHours = totalNetMinutes / 60;[span_81](end_span)
        document.getElementById('totalHoursCell').innerText = industrialHours.toFixed(2).replace('.', ',') + ' Std.';
    [span_82](start_span)}

    function isCanvasEmpty(cv) {
        const blank = document.createElement('canvas');
        blank.width = cv.width; blank.height = cv.height;[span_82](end_span)
        return cv.toDataURL() === blank.toDataURL();
    [span_83](start_span)}

    function saveAsPDFNativeDownload() {
        const name = document.getElementById('nameInput').value.trim();
        const monatJahr = document.getElementById('monthInput').value;[span_83](end_span)
        const sigDateField = document.getElementById('sigDate');
        
        if (!name) { alert('❌ Bitte tragen Sie Ihren Namen ein.'); return; [span_84](start_span)}
        if (!sigDateField.value) { alert('❌ Bitte wählen Sie ein Datum für die Unterschrift aus.'); return; }[span_84](end_span)
        if (isCanvasEmpty(canvas)) { alert('❌ Bitte unterschreiben Sie das Dokument auf Seite 2 vor dem Export.'); return; [span_85](start_span)}

        const targetFilename = `Arbeitszeitnachweis_${name}_${monatJahr}.pdf`;
        const buttonBox = document.querySelector('.controls-bottom');
        buttonBox.style.visibility = 'hidden';
        const element = document.getElementById('pdfArea');[span_85](end_span)

        if (window.html2canvas && window.jspdf) {
            html2canvas(element, { scale: 2, useCORS: true }).then(canvasObj => {
                const imgData = canvasObj.toDataURL('image/jpeg', 0.98);
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF('p', 'mm', 'a4');
         
                [span_86](start_span)const imgWidth = 210; const pageHeight = 295;[span_86](end_span)
                const imgHeight = (canvasObj.height * imgWidth) / canvasObj.width;
                let heightLeft = imgHeight; let position = 0;

                pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;

                [span_87](start_span)while (heightLeft >= 0) {[span_87](end_span)
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                    [span_88](start_span)heightLeft -= pageHeight;[span_88](end_span)
                }
                pdf.save(targetFilename);
                buttonBox.style.visibility = 'visible';
            [span_89](start_span)}).catch(() => { buttonBox.style.visibility = 'visible'; window.print(); });[span_89](end_span)
        } else { buttonBox.style.visibility = 'visible'; window.print(); [span_90](start_span)}
    }

    function getHolidays(year) {
        const holidays = [];
        const add = (d, m) => holidays.push(`${year}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}`);[span_90](end_span)
        add(1, 1); add(1, 5); add(3, 10); add(25, 12); add(26, 12);
        [span_91](start_span)const a = year % 19, b = year % 4, c = year % 7;[span_91](end_span)
        [span_92](start_span)const k = Math.floor(year / 100);[span_92](end_span)
        const p = Math.floor((13 + 8 * k) / 25);
        [span_93](start_span)const q = Math.floor(k / 4);[span_93](end_span)
        const M = (15 - p + k - q) % 30;
        [span_94](start_span)const N = (4 + k - q) % 7;[span_94](end_span)
        const d = (19 * a + M) % 30;
        [span_95](start_span)const e = (2 * b + 4 * c + 6 * d + N) % 7;[span_95](end_span)
        [span_96](start_span)const os = 22 + d + e;[span_96](end_span)
        
        let osterMonat = 3, osterTag = os;
        if (os > 31) { osterMonat = 4; osterTag = os - 31; [span_97](start_span)}
        
        const osterSonntag = new Date(year, osterMonat - 1, osterTag);[span_97](end_span)
        const addRelative = (days) => {
            [span_98](start_span)const dt = new Date(osterSonntag);[span_98](end_span)
            dt.setDate(dt.getDate() + days);
            holidays.push(`${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`);
        };
        addRelative(-2); addRelative(1); addRelative(39); addRelative(50); addRelative(60);
        return holidays;
    [span_99](start_span)}

    function getISOWeek(date) {
        const target = new Date(date.valueOf());
        const dayNr = (date.getUTCDay() + 6) % 7;[span_99](end_span)
        target.setUTCDate(target.getUTCDate() - dayNr + 3);
        const firstThursday = target.valueOf();
        target.setUTCMonth(0, 1);
        if (target.getUTCDay() !== 4) { target.setUTCMonth(0, 1 + ((4 - target.getUTCDay()) + 7) % 7); [span_100](start_span)}
        return 1 + Math.ceil((firstThursday - target) / 604800000);
    }[span_100](end_span)

    function handleMonthChangeTrigger() { handleMonthUpdate(true); }

    function handleMonthUpdate(isManualChange = false) {
        const monthValue = document.getElementById('monthInput').value;
        [span_101](start_span)if (!monthValue) return;[span_101](end_span)

        const dateTokens = monthValue.split('-');
        const year = parseInt(dateTokens[0], 10);
        const monthNumber = parseInt(dateTokens[1], 10);
        [span_102](start_span)const monthIndex = monthNumber - 1;[span_102](end_span)

        const newColor = monthColors[monthNumber] || '#f5f5f5';
        document.documentElement.style.setProperty('--header-bg-color', newColor);
        document.getElementById('mainHeader1').style.backgroundColor = newColor;
        document.getElementById('mainHeader2').style.backgroundColor = newColor;
        [span_103](start_span)document.getElementById('tableNotesHeader').style.backgroundColor = newColor;[span_103](end_span)

        const firstDay = new Date(Date.UTC(year, monthIndex, 1));
        const lastDay = new Date(Date.UTC(year, monthNumber, 0));
        [span_104](start_span)const daysInMonth = lastDay.getUTCDate();[span_104](end_span)

        const startKW = getISOWeek(firstDay);
        const endKW = getISOWeek(lastDay);
        
        const tbody = document.getElementById('tableBody');
        const holidays = getHolidays(year);
        [span_105](start_span)tbody.innerHTML = '';[span_105](end_span)

        for (let i = 1; i <= daysInMonth; i++) {
            const dayStr = String(i).padStart(2, '0');
            [span_106](start_span)const monthStr = String(monthNumber).padStart(2, '0');[span_106](end_span)
            const dateStr = `${year}-${monthStr}-${dayStr}`;
            const dateObj = new Date(year, monthIndex, i);
            const dayOfWeek = dateObj.getDay();
            [span_107](start_span)let classes = [];[span_107](end_span)
            if (dayOfWeek === 0 || dayOfWeek === 6) classes.push('weekend-row');
            if (holidays.includes(dateStr)) classes.push('holiday-row');

            const tr = document.createElement('tr');
            [span_108](start_span)if (classes.length > 0) tr.className = classes.join(' ');[span_108](end_span)

            [span_109](start_span)// Platzhalter placeholder="--:--" hinzugefügt, um leere Zustände bei Monatswechseln abzusichern[span_109](end_span)
            tr.innerHTML = `
                <td class="col-day" style="${(dayOfWeek===0||dayOfWeek===6) ? 'background-color: var(--weekend-color);' : 'background-color: transparent;'}">${dayStr}</td>
                <td><input type="text" class="cell-input" id="cell-${i}-frueh-von" oninput="formatTimeInput(this)" onblur="handleTimeBlur(this)" placeholder="--:--"></td>
                <td><input type="text" class="cell-input" id="cell-${i}-frueh-bis" oninput="formatTimeInput(this)" onblur="handleTimeBlur(this)" placeholder="--:--"></td>
                <td><input type="text" class="cell-input" id="cell-${i}-spaet-von" oninput="formatTimeInput(this)" onblur="handleTimeBlur(this)" placeholder="--:--"></td>
                <td><input type="text" class="cell-input" id="cell-${i}-spaet-bis" oninput="formatTimeInput(this)" onblur="handleTimeBlur(this)" placeholder="--:--"></td>
                <td><input type="text" class="cell-input cell-input-left" id="cell-${i}-bemerkung" onblur="autoExpandNote(this)"></td>
            `;
            [span_110](start_span)tbody.appendChild(tr);[span_110](end_span)
        }

        if (!isManualChange) { 
            loadStoredRowData();
        [span_111](start_span)} else {[span_111](end_span)
            document.getElementById('kwInput').value = `KW ${startKW}-${endKW} / ${year}`;
            [span_112](start_span)saveAllToStorage();[span_112](end_span)
        }
        calculateTotalHours();
    [span_113](start_span)}

    function saveAllToStorage() {
        const monthValue = document.getElementById('monthInput').value;
        if (!monthValue) return;[span_113](end_span)

        const dataKey = storagePrefix + "data_" + monthValue;
        [span_114](start_span)const payload = {[span_114](end_span)
            username: document.getElementById('nameInput').value,
            kwInput: document.getElementById('kwInput').value,
            sigDate: document.getElementById('sigDate').value,
            signatureImg: canvas.toDataURL(),
            cells: {}
        };
        [span_115](start_span)const inputs = document.querySelectorAll('#tableBody input');[span_115](end_span)
        inputs.forEach(input => { if(input.value) payload.cells[input.id] = input.value; });

        // Nutzt den fehlersicheren Wrapper statt direktem localStorage.setItem
        safeStorageSet(dataKey, JSON.stringify(payload));
        safeStorageSet(storagePrefix + "last_active_month", monthValue);
        [span_116](start_span)safeStorageSet(storagePrefix + "global_username", document.getElementById('nameInput').value);[span_116](end_span)
    }

    function loadMonthDataset() {
        // Nutzt den fehlersicheren Wrapper statt direktem localStorage.getItem
        const lastMonth = safeStorageGet(storagePrefix + "last_active_month");
        [span_117](start_span)if (lastMonth) {[span_117](end_span)
            document.getElementById('monthInput').value = lastMonth;
        [span_118](start_span)} else {[span_118](end_span)
            const now = new Date();
            [span_119](start_span)const currentYear = now.getFullYear();[span_119](end_span)
            const currentMonth = String(now.getMonth() + 1).padStart(2, '0');
            document.getElementById('monthInput').value = `${currentYear}-${currentMonth}`;
        [span_120](start_span)}
        
        const globalName = safeStorageGet(storagePrefix + "global_username");
        if (globalName) {[span_120](end_span)
            document.getElementById('nameInput').value = globalName;
        [span_121](start_span)}
        
        handleMonthUpdate(false);
    }[span_121](end_span)

    function loadStoredRowData() {
        const monthValue = document.getElementById('monthInput').value;
        [span_122](start_span)const dataKey = storagePrefix + "data_" + monthValue;[span_122](end_span)
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById('sigDate').value = "";
        
        const dateTokens = monthValue.split('-');
        [span_123](start_span)const year = parseInt(dateTokens[0], 10);[span_123](end_span)
        const monthNumber = parseInt(dateTokens[1], 10);
        const firstDay = new Date(Date.UTC(year, monthNumber - 1, 1));
        [span_124](start_span)const lastDay = new Date(Date.UTC(year, monthNumber, 0));[span_124](end_span)
        const startKW = getISOWeek(firstDay);
        const endKW = getISOWeek(lastDay);
        [span_125](start_span)document.getElementById('kwInput').value = `KW ${startKW}-${endKW} / ${year}`;[span_125](end_span)

        const raw = safeStorageGet(dataKey);
        [span_126](start_span)if(!raw) {[span_126](end_span)
            calculateTotalHours();
            return;
        [span_127](start_span)}
        const parsed = JSON.parse(raw);

        if(parsed.username !== undefined) document.getElementById('nameInput').value = parsed.username;
        if(parsed.kwInput !== undefined) document.getElementById('kwInput').value = parsed.kwInput;[span_127](end_span)
        if(parsed.sigDate) document.getElementById('sigDate').value = parsed.sigDate;
        [span_128](start_span)if(parsed.signatureImg && parsed.signatureImg.length > 100) {[span_128](end_span)
            const img = new Image();
            img.onload = function() { ctx.drawImage(img, 0, 0); [span_129](start_span)};[span_129](end_span)
            img.src = parsed.signatureImg;
        [span_130](start_span)}

        if(parsed.cells) {
            Object.keys(parsed.cells).forEach(id => {
                const inputElement = document.getElementById(id);
                if(inputElement) inputElement.value = parsed.cells[id];
            });
        }[span_130](end_span)
    }

    function getPos(e) {
        const rect = canvas.getBoundingClientRect();
        [span_131](start_span)const clientX = e.touches ? e.touches[0].clientX : e.clientX;[span_131](end_span)
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        [span_132](start_span)return { x: clientX - rect.left, y: clientY - rect.top };[span_132](end_span)
    }
    
    function startDraw(e) {
        isDrawing = true;
        [span_133](start_span)const pos = getPos(e);[span_133](end_span)
        ctx.beginPath(); 
        ctx.moveTo(pos.x, pos.y);
        if(e.touches) e.preventDefault();
    }
    
    function draw(e) {
        if (!isDrawing) return;
        [span_134](start_span)const pos = getPos(e);[span_134](end_span)
        ctx.lineTo(pos.x, pos.y); 
        ctx.stroke();
        if(e.touches) e.preventDefault();
    }
    
    function stopDraw() { 
        if(isDrawing) { 
            isDrawing = false;
            [span_135](start_span)saveAllToStorage();[span_135](end_span)
        } 
    }

    canvas.addEventListener('mousedown', startDraw); 
    canvas.addEventListener('mousemove', draw); 
    window.addEventListener('mouseup', stopDraw);
    [span_136](start_span)canvas.addEventListener('touchstart', startDraw, { passive: false });[span_136](end_span)
    canvas.addEventListener('touchmove', draw, { passive: false }); 
    window.addEventListener('touchend', stopDraw);
    function clearSignature() { ctx.clearRect(0, 0, canvas.width, canvas.height); saveAllToStorage(); [span_137](start_span)}

    document.addEventListener("DOMContentLoaded", () => {
        initCanvas();
        loadMonthDataset();
        
        document.addEventListener('input', (e) => {
            if (e.target && (e.target.classList.contains('cell-input') || e.target.id === 'nameInput' || e.target.id === 'kwInput')) {
                saveAllToStorage();
            }[span_137](end_span)
        });

        document.getElementById('sigDate').addEventListener('change', () => {
            saveAllToStorage();
        });
    });
[span_138](start_span)</script>[span_138](end_span)

</body>
</html>

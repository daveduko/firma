# Ernst Barbian GmbH – Website (Prototyp)

Statische HTML/CSS/JS-Website, bereit für GitHub Pages. Keine Build-Tools, keine Abhängigkeiten – einfach hochladen und fertig.

## Struktur

```
index.html                     Startseite
industriebau.html               Industriebau
hochbau.html                    Hochbau & Betonbau
unternehmen.html                Das Unternehmen
kontakt.html                    Kontakt (Formular, Ansprechpartner)
vinothek.html                   Vinothek Barbian
impressum-datenschutz.html      Impressum & Datenschutz
css/style.css                   Gesamtes Styling
js/main.js                      Mobiles Menü + Kontaktformular-Demo
img/                            Logo (SVG) und Baustellenfotos
favicon.ico, img/apple-touch-icon.png
```

## Mit GitHub Pages veröffentlichen

1. Neues Repository auf GitHub anlegen (z. B. `barbian-website`).
2. Den Inhalt dieses Ordners in das Repository pushen, z. B.:
   ```bash
   cd barbian-site
   git init
   git add .
   git commit -m "Barbian Website"
   git branch -M main
   git remote add origin https://github.com/<dein-github-name>/barbian-website.git
   git push -u origin main
   ```
3. Im Repository: **Settings → Pages**.
4. Unter „Build and deployment" → Source: **Deploy from a branch** auswählen.
5. Branch: **main**, Ordner: **/ (root)** auswählen, dann **Save**.
6. Nach ca. 1 Minute ist die Seite unter `https://<dein-github-name>.github.io/barbian-website/` erreichbar.

Die Datei `.nojekyll` sorgt dafür, dass GitHub Pages die Dateien unverändert ausliefert.

### Eigene Domain (optional)

Falls später eine eigene Domain (z. B. `barbian-bau.de`) verwendet werden soll: unter Settings → Pages → „Custom domain" eintragen und beim Domain-Anbieter die passenden DNS-Einträge setzen (A-Records auf die GitHub-Pages-IPs oder CNAME auf `<dein-github-name>.github.io`).

## Offene Punkte vor einer echten Veröffentlichung

- **Fotos**: Aktuell sind 5 lizenzfreie Unsplash-Baustellenfotos eingebunden (Platzhalter). Vor dem Livegang sollten eigene Fotos von Barbian-Baustellen eingesetzt werden (siehe Projektdokument "Corporate Design").
- **Kontaktformular**: Das Formular zeigt aktuell nur eine clientseitige Bestätigung an (`js/main.js`), es wird nichts verschickt. Für eine echte Zustellung braucht es ein Backend oder einen Formular-Dienst (z. B. Formspree, Netlify Forms o. ä. – dafür wäre dann ggf. ein anderer Hoster als GitHub Pages nötig, da GitHub Pages rein statisch ist).
- **Impressum/Datenschutz**: Platzhaltertexte, müssen durch echte, rechtlich geprüfte Inhalte ersetzt werden.
- **Kartenausschnitt** (Kontaktseite) und **Öffnungszeiten/Sortiment** (Vinothek-Seite) sind noch nicht final befüllt.
- **Google Fonts**: Die Seite lädt „Inter" von `fonts.googleapis.com`. Für DSGVO-konformes Hosting ohne externe Anfrage kann die Schrift alternativ lokal eingebunden werden.

## Design

Corporate Design der Ernst Barbian GmbH: Baugelb `#F5C400`, Anthrazit `#34383A`, Inter-Schrift, „klare Kanten". Details dazu stehen im Projektdokument „Corporate Design – Barbian Bauunternehmung".

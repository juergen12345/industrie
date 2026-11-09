window.POOL_DATEN_klrgh = () => [
/* ---------- Modul 1 · Abgrenzungsrechnung (Großhandel) ---------- */
{
  id:'AT0a', modul:'K1', typ:'berechnung', stufe:0, titel:'Aufwand und Kosten im Großhandel',
  tags:['Abgrenzungsrechnung','Theorie'],
  text:'Die Finanzbuchhaltung eines Großhändlers erfasst Aufwendungen, die Kosten- und Leistungsrechnung Kosten.',
  frage:'Welche Aussage beschreibt den Unterschied richtig?',
  optionen:[
    {text:'Kosten sind der betriebsbedingte, ordentliche und periodenrichtige Werteverzehr für Einkauf, Lagerung und Verkauf der Waren – Aufwand ist jeder Werteverzehr des Unternehmens.', richtig:true,
     weg:'Aufwand umfasst alles, was das Unternehmen in der Periode an Werten verbraucht. Kosten sind nur der Teil, der dem Handelsgeschäft dient, regelmäßig anfällt und in die Periode gehört.'},
    {text:'Kosten und Aufwand sind dasselbe – nur die Kontonummern sind verschieden.',
     fehler:'Gerade nicht: Eine Spende an den Sportverein oder ein nicht versicherter Wasserschaden ist Aufwand, aber keine Kosten.'},
    {text:'Kosten sind immer höher als der Aufwand, weil kalkulatorische Kosten hinzukommen.',
     fehler:'Die kalkulatorische Abschreibung kann höher oder niedriger sein als die bilanzielle – und neutraler Aufwand fällt ganz weg.'},
    {text:'Aufwand ist nur, was bar bezahlt wird; Kosten sind auch unbare Vorgänge.',
     fehler:'Zahlung und Aufwand sind verschiedene Ebenen. Auch eine Abschreibung ist Aufwand, obwohl kein Geld fließt.'}
  ],
  hinweise:['Denke an eine Spende an den Sportverein: Ist das Aufwand? Sind das Kosten?', 'Kosten müssen drei Bedingungen erfüllen: betriebsbedingt, ordentlich, periodenrichtig.', 'Der Werteverzehr für das Handelsgeschäft ist die Schnittmenge.'],
  merke:'Aufwand = gesamter Werteverzehr der Periode (Finanzbuchhaltung). Kosten = betriebsbedingter, ordentlicher, periodenrichtiger Werteverzehr (KLR).'
},
{
  id:'AT0b', modul:'K1', typ:'berechnung', stufe:0, titel:'Neutraler Aufwand',
  tags:['Abgrenzungsrechnung','Theorie'],
  text:'Ein Elektrogroßhändler hat im Geschäftsjahr unter anderem folgende Aufwendungen gebucht.',
  frage:'Welcher Aufwand ist neutral (unternehmensbezogene Abgrenzung)?',
  optionen:[
    {text:'696 Verluste aus dem Verkauf eines alten Lieferwagens unter Buchwert', richtig:true,
     weg:'Der Verlust aus einem Anlagenabgang entsteht nicht beim Einkauf, Lagern oder Verkaufen der Waren – er ist neutral (außerordentlich).'},
    {text:'600 Aufwendungen Warengruppe I', fehler:'Der Einsatz der Waren ist der Kern des Handelsgeschäfts – Kosten in voller Höhe (Grundkosten).'},
    {text:'62 Löhne der Lagerarbeiter', fehler:'Ohne Lagerarbeiter kein Warenumschlag – die Löhne sind Kosten.'},
    {text:'670 Miete für die Lagerhalle', fehler:'Die Halle wird für das Handelsgeschäft gebraucht – die Miete gehört zu den Kosten.'}
  ],
  hinweise:['Neutral ist, was betriebsfremd, periodenfremd oder außerordentlich ist.', 'Welcher Posten hat mit Einkauf, Lagerung und Verkauf der Waren nichts zu tun?', 'Der Verkauf eines Fahrzeugs ist kein Teil des laufenden Warengeschäfts.'],
  merke:'Neutrale Aufwendungen: betriebsfremd (z. B. Spenden), periodenfremd (z. B. Nachzahlungen für Vorjahre), außerordentlich (z. B. Verluste aus Schadensfällen oder Anlagenabgängen).'
},
abgrenzung({
  id:'AT1', stufe:1, kk:false, titel:'Ergebnistabelle · neutrale Posten abgrenzen',
  text:'Die Lebensmittelgroßhandlung Hofmann KG beliefert Gaststätten und Kantinen. Aus der Finanzbuchhaltung liegen die folgenden Aufwendungen und Erträge vor; die Warenbestände haben sich im Jahr nicht verändert. Übertrage sie in die Ergebnistabelle: Was ist neutral, was sind Kosten und Leistungen? Ermittle die Summen und die Ergebnisse.<br>Angaben: Die Mieterträge stammen aus einer Garage, die das Unternehmen nicht mehr braucht und an einen Nachbarn vermietet hat. Die Verluste aus Schadensfällen entstanden durch einen nicht versicherten Ausfall der Kühlung. Die Zinsaufwendungen werden in voller Höhe als Kosten übernommen.',
  posten:[
    {k:'500', t:'Umsatzerlöse Warengruppe I', e:1480000, wo:'kl'},
    {k:'501', t:'Umsatzerlöse Warengruppe II', e:620000, wo:'kl'},
    {k:'540', t:'Erträge aus Vermietung und Verpachtung', e:18000, wo:'ua', kurz:'die Mieterträge aus der Garage'},
    {k:'571', t:'Zinserträge', e:4500, wo:'ua', kurz:'die Zinserträge'},
    {k:'600', t:'Aufwendungen Warengruppe I', a:1020000, wo:'kl'},
    {k:'601', t:'Aufwendungen Warengruppe II', a:410000, wo:'kl'},
    {k:'62', t:'Löhne', a:165000, wo:'kl'},
    {k:'63', t:'Gehälter', a:210000, wo:'kl'},
    {k:'670', t:'Mieten, Pachten', a:72000, wo:'kl'},
    {k:'688', t:'Spenden', a:3000, wo:'ua', kurz:'die Spende'},
    {k:'690', t:'Versicherungsbeiträge', a:14000, wo:'kl'},
    {k:'693', t:'Verluste aus Schadensfällen', a:9500, wo:'ua', kurz:'der Kühlschaden'},
    {k:'751', t:'Zinsaufwendungen', a:11000, wo:'kl'}
  ],
  hinweise:[
    'Gehe Zeile für Zeile vor: Dient der Posten dem Einkauf, der Lagerung oder dem Verkauf der Waren? Dann gehört er in den KLR-Bereich, sonst in die unternehmensbezogene Abgrenzung.',
    'Neutral sind hier die betriebsfremden Erträge (Vermietung der leeren Garage, Zinserträge) die betriebsfremde Spende und der außerordentliche Kühlschaden.',
    'Das neutrale Ergebnis ist die Differenz: Gesamtergebnis − Betriebsergebnis. Hier ist es positiv, weil die neutralen Erträge größer sind als die neutralen Aufwendungen.'
  ],
  merke:'Betriebsfremde (Spenden, Vermietung nicht betrieblich genutzter Räume, Zinserträge) und außerordentliche Posten (Schadensfälle) gehören nicht in die KLR.'
}),
abgrenzung({
  id:'AT2', stufe:2, titel:'Ergebnistabelle · kalkulatorische Abschreibung und Unternehmerlohn',
  text:'Die Elektro Vogt OHG ist ein Großhändler für Elektroinstallation. Die beiden Gesellschafter arbeiten voll im Unternehmen mit und beziehen kein Gehalt. Erstelle die Ergebnistabelle und ermittle die Ergebnisse.<br>Angaben zur KLR: Die kalkulatorischen Abschreibungen betragen 52.000,00 €, der kalkulatorische Unternehmerlohn 84.000,00 €. Die Erträge aus dem Abgang von Sachanlagen stammen aus dem Verkauf eines alten Lieferwagens. Die periodenfremden Aufwendungen sind eine Nachzahlung für eine Reparatur aus dem Vorjahr. Die Zinsaufwendungen werden als Kosten übernommen.',
  posten:[
    {k:'500', t:'Umsatzerlöse Warengruppe I', e:2350000, wo:'kl'},
    {k:'501', t:'Umsatzerlöse Warengruppe II', e:980000, wo:'kl'},
    {k:'546', t:'Erträge aus dem Abgang von Gegenständen des Sachanlagevermögens', e:12000, wo:'ua', kurz:'der Ertrag aus dem Verkauf des Lieferwagens'},
    {k:'571', t:'Zinserträge', e:3000, wo:'ua', kurz:'die Zinserträge'},
    {k:'600', t:'Aufwendungen Warengruppe I', a:1640000, wo:'kl'},
    {k:'601', t:'Aufwendungen Warengruppe II', a:690000, wo:'kl'},
    {k:'62', t:'Löhne', a:240000, wo:'kl'},
    {k:'63', t:'Gehälter', a:310000, wo:'kl'},
    {k:'650', t:'Abschreibungen auf Sachanlagen', a:64000, wo:'kk', kalk:52000, kurz:'die kalkulatorischen Abschreibungen'},
    {k:'670', t:'Mieten, Pachten', a:96000, wo:'kl'},
    {k:'687', t:'Werbung', a:28000, wo:'kl'},
    {k:'690', t:'Versicherungsbeiträge', a:18000, wo:'kl'},
    {k:'699', t:'Periodenfremde Aufwendungen', a:6500, wo:'ua', kurz:'die Nachzahlung für das Vorjahr'},
    {k:'751', t:'Zinsaufwendungen', a:21000, wo:'kl'},
    {t:'Kalkulatorischer Unternehmerlohn', wo:'kk', kalk:84000, kurz:'der kalkulatorische Unternehmerlohn'}
  ],
  hinweise:[
    'Bei den Abschreibungen rechnet die KLR mit einem eigenen Wert: Links (Aufwendungen lt. FB) steht der gebuchte Betrag, rechts (verrechnete Kosten) der kalkulatorische – und dieser geht in die Kosten.',
    'Der Unternehmerlohn hat keinen Aufwand in der Finanzbuchhaltung (die Gesellschafter beziehen kein Gehalt). Er steht deshalb nur bei den verrechneten Kosten und in den Kosten – das sind Zusatzkosten.',
    'Neutrales Ergebnis = Gesamtergebnis − Betriebsergebnis. Der Unternehmerlohn senkt das Betriebsergebnis, aber nicht das Gesamtergebnis.'
  ],
  merke:'In Personengesellschaften und Einzelunternehmen wird die Arbeit der Inhaber als kalkulatorischer Unternehmerlohn verrechnet – sonst wären die Preise zu niedrig kalkuliert.'
}),
abgrenzung({
  id:'AT3', stufe:2, titel:'Ergebnistabelle · kalkulatorische Abschreibung höher als bilanziell',
  text:'Die Getränkegroßhandlung Lindner GmbH beliefert Gaststätten und Getränkemärkte. Der Geschäftsführer bezieht ein Gehalt, das unter den Gehältern gebucht ist. Erstelle die Ergebnistabelle und ermittle die Ergebnisse.<br>Angaben zur KLR: Weil die Lieferfahrzeuge zu deutlich höheren Preisen wiederbeschafft werden müssen, setzt die KLR kalkulatorische Abschreibungen von 46.000,00 € an. Die Mieterträge stammen aus einer vermieteten Büroetage, die das Unternehmen nicht nutzt. Die Erträge aus der Auflösung von Rückstellungen betreffen einen Prozess aus dem Vorjahr. Die Gewerbesteuer wird als Kosten übernommen.',
  posten:[
    {k:'500', t:'Umsatzerlöse Warengruppe I', e:1760000, wo:'kl'},
    {k:'540', t:'Erträge aus Vermietung und Verpachtung', e:24000, wo:'ua', kurz:'die Mieterträge aus der Büroetage'},
    {k:'548', t:'Erträge aus der Auflösung oder Herabsetzung von Rückstellungen', e:5000, wo:'ua', kurz:'der Ertrag aus der Rückstellungsauflösung'},
    {k:'600', t:'Aufwendungen Warengruppe I', a:1190000, wo:'kl'},
    {k:'62', t:'Löhne', a:180000, wo:'kl'},
    {k:'63', t:'Gehälter', a:150000, wo:'kl'},
    {k:'650', t:'Abschreibungen auf Sachanlagen', a:38000, wo:'kk', kalk:46000, kurz:'die kalkulatorischen Abschreibungen'},
    {k:'670', t:'Mieten, Pachten', a:54000, wo:'kl'},
    {k:'680', t:'Büromaterial', a:7500, wo:'kl'},
    {k:'682', t:'Gebühren', a:4200, wo:'kl'},
    {k:'687', t:'Werbung', a:22000, wo:'kl'},
    {k:'696', t:'Verluste aus dem Abgang von Gegenständen des Sachanlagevermögens', a:3500, wo:'ua', kurz:'der Verlust aus dem Anlagenabgang'},
    {k:'770', t:'Gewerbesteuer', a:15000, wo:'kl'}
  ],
  hinweise:[
    'Ein kalkulatorischer Unternehmerlohn entfällt: Die Arbeit des Geschäftsführers ist schon über sein Gehalt als Aufwand und Kosten erfasst.',
    'Bei den Abschreibungen stehen links die bilanziellen 38.000,00 € und rechts die kalkulatorischen 46.000,00 €. In die Kosten gehen die 46.000,00 €.',
    'Weil die Kosten höher sind als der Aufwand, ist das Betriebsergebnis um diesen Unterschied schlechter als ohne Korrektur.'
  ],
  merke:'Die kalkulatorische Abschreibung rechnet vom Wiederbeschaffungswert: Steigen die Preise, liegt sie über der bilanziellen Abschreibung von den Anschaffungskosten.'
}),
abgrenzung({
  id:'AT4', stufe:3, titel:'Ergebnistabelle · Betriebsverlust durch den Unternehmerlohn deuten',
  text:'Die Bürowelt Wagner e. K. führt Büromöbel (Warengruppe I) und Bürobedarf (Warengruppe II). Der Inhaber arbeitet voll im Unternehmen und entnimmt kein Gehalt. Erstelle die Ergebnistabelle und ermittle die Ergebnisse.<br>Angaben zur KLR: Kalkulatorische Abschreibungen 70.000,00 €, kalkulatorischer Unternehmerlohn 96.000,00 €. Die Verluste aus Schadensfällen entstanden durch einen nicht versicherten Wasserschaden im Lager. Die periodenfremden Aufwendungen sind eine Gewerbesteuer-Nachzahlung für das Vorjahr. Die Zinsaufwendungen werden als Kosten übernommen.',
  posten:[
    {k:'500', t:'Umsatzerlöse Warengruppe I', e:2900000, wo:'kl'},
    {k:'501', t:'Umsatzerlöse Warengruppe II', e:1150000, wo:'kl'},
    {k:'571', t:'Zinserträge', e:2000, wo:'ua', kurz:'die Zinserträge'},
    {k:'600', t:'Aufwendungen Warengruppe I', a:1980000, wo:'kl'},
    {k:'601', t:'Aufwendungen Warengruppe II', a:820000, wo:'kl'},
    {k:'62', t:'Löhne', a:310000, wo:'kl'},
    {k:'63', t:'Gehälter', a:420000, wo:'kl'},
    {k:'640', t:'Arbeitgeberanteil zur Sozialversicherung', a:132000, wo:'kl'},
    {k:'650', t:'Abschreibungen auf Sachanlagen', a:92000, wo:'kk', kalk:70000, kurz:'die kalkulatorischen Abschreibungen'},
    {k:'670', t:'Mieten, Pachten', a:144000, wo:'kl'},
    {k:'685', t:'Reisekosten', a:26000, wo:'kl'},
    {k:'687', t:'Werbung', a:48000, wo:'kl'},
    {k:'690', t:'Versicherungsbeiträge', a:21000, wo:'kl'},
    {k:'693', t:'Verluste aus Schadensfällen', a:38000, wo:'ua', kurz:'der Wasserschaden'},
    {k:'699', t:'Periodenfremde Aufwendungen', a:7000, wo:'ua', kurz:'die Gewerbesteuer-Nachzahlung'},
    {k:'751', t:'Zinsaufwendungen', a:34000, wo:'kl'},
    {t:'Kalkulatorischer Unternehmerlohn', wo:'kk', kalk:96000, kurz:'der kalkulatorische Unternehmerlohn'}
  ],
  hinweise:[
    'Drei Arten von Korrekturen: neutrale Posten (Zinserträge, Wasserschaden, Nachzahlung), andere Höhe (Abschreibungen) und Kosten ohne Aufwand (Unternehmerlohn).',
    'Rechne die Summen jeder Spalte, dann: Gesamtergebnis = Erträge − Aufwendungen; Betriebsergebnis = Leistungen − Kosten.',
    'Beide Ergebnisse sind negativ. Das neutrale Ergebnis ist trotzdem positiv: Vor allem der Unternehmerlohn drückt nur das Betriebsergebnis.'
  ],
  merke:'Ein Betriebsverlust heißt: Mit den Verkaufspreisen werden nicht alle Kosten gedeckt – einschließlich einer angemessenen Vergütung für die Arbeit des Inhabers.'
}),
kalkK({
  id:'KK1', stufe:1, art:'afa', titel:'Kalkulatorische Abschreibungen ermitteln', firma:'Büromöbelgroßhandlung Seidel GmbH',
  anlagen:[{n:'Lieferwagen', ak:48000, nd:6, wbw:57000, ndt:6}, {n:'Regalanlage', ak:36000, nd:10, wbw:40000, ndt:12}, {n:'Gabelstapler', ak:28000, nd:8, wbw:31200, ndt:8}]
}),
kalkK({
  id:'KK2', stufe:2, art:'ul', titel:'Kalkulatorischen Unternehmerlohn ermitteln', firma:'Sanitärgroßhandlung Brandt KG',
  gehalt:5000, anzahl:13, ag:20, personen:1,
  merke:'Der kalkulatorische Unternehmerlohn orientiert sich am Gehalt eines angestellten Geschäftsführers – einschließlich Sonderzahlungen und Arbeitgeberanteil. Er steht nur in der KLR (Zusatzkosten).'
}),
kalkK({
  id:'KK3', stufe:3, art:'afa', titel:'Kalkulatorische Abschreibungen niedriger als bilanzielle', firma:'Getränkegroßhandlung Lindner GmbH',
  anlagen:[{n:'Lkw', ak:120000, nd:9, wbw:110000, ndt:10}, {n:'Kühlzelle', ak:45000, nd:10, wbw:42000, ndt:12}, {n:'Leergutsortieranlage', ak:64000, nd:8, wbw:60000, ndt:10}],
  merke:'Sinken die Wiederbeschaffungspreise oder halten die Anlagen länger als in der AfA-Tabelle angenommen, liegen die kalkulatorischen Abschreibungen unter den bilanziellen.'
}),
/* ---------- Modul 13 · Gewinnschwelle (Handel) ---------- */
gsH({
  id:'GS1', stufe:1, titel:'Gewinnschwelle eines Artikels', firma:'Werkzeuggroßhandlung Brenner KG', produkt:'Akku-Bohrschrauber',
  kf:18000, kv:72, p:112, fragen:['dbs', 'bep', 'beu']
}),
gsH({
  id:'GS2', stufe:2, titel:'Gewinnschwelle und Zielgewinn', firma:'Getränkegroßhandlung Brausewind GmbH', produkt:'Kisten Mineralwasser',
  kf:12600, kv:4.20, p:6.00, g:3600, m:9500, fragen:['dbs', 'bep', 'mg', 'gm']
}),
gsH({
  id:'GS3', stufe:2, titel:'Auslastung der Lagerkapazität', firma:'Sanitärgroßhandlung Keller GmbH', produkt:'Duschwannen',
  kf:42000, kv:180, p:285, kap:600, a:80, fragen:['dbs', 'bep', 'bepA', 'gm', 'sk']
}),
gsH({
  id:'GS4', stufe:3, titel:'Kosten aus zwei Monaten', firma:'Büromöbelgroßhandlung Seidel GmbH', produkt:'Bürodrehstühle',
  kf:28800, kv:226, p:388, k2:{m1:150, m2:220}, m:240, fragen:['kv', 'kf', 'dbs', 'bep', 'gm', 'sg']
}),
blGSGrafik({id:'GS5', modul:'K10', stufe:2, tags:['Gewinnschwelle', 'Grafik', 'Handel'],
  text:'Die Grafik zeigt für einen Artikel der Büromöbelgroßhandlung Seidel GmbH die Erlöse und die Gesamtkosten (Fixkosten und variable Kosten) bis zur Lagerkapazität von {xm} im Monat.%%GRAFIK%%Lies die nötigen Werte ab und berechne die übrigen.',
  werte:[{kf:30000, kv:45, p:75, xm:2000, xs:250, ys:15000, ym:150000}],
  sets:[[{kf:24000, kv:30, p:54, xm:2000, xs:250, ys:12000, ym:120000}], [{kf:18000, kv:8, p:14, xm:6000, xs:1000, ys:6000, ym:84000}], [{kf:40000, kv:120, p:200, xm:1000, xs:100, ys:20000, ym:200000}]]}),
/* ---------- Theorie Teilkostenrechnung Großhandel (extra) · Modul-ID K10T ----------
   Deckungsbeitragsrechnung nach Warengruppen deuten: Sortiment, Preisuntergrenze, Zusatzauftrag, Gewinnschwelle –
   durchgehend Büromöbelgroßhandel Seidel GmbH (WG I Schreibtische, WG II Bürostühle, WG III Zubehör). */
{
  id:'TD1', modul:'K10T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Deckungsbeitragsrechnung nach Warengruppen',
  tags:['Teilkostenrechnung','Theorie','Deckungsbeitrag'],
  text:'Die Seidel GmbH legt die Deckungsbeitragsrechnung des Jahres vor (alle Beträge in €):'
    + '<table class="lager"><tr><th></th><th class="z">Schreibtische</th><th class="z">Bürostühle</th><th class="z">Zubehör</th></tr>'
    + '<tr><td>Umsatzerlöse</td><td class="z">900.000</td><td class="z">600.000</td><td class="z">250.000</td></tr>'
    + '<tr><td>− Wareneinsatz</td><td class="z">540.000</td><td class="z">390.000</td><td class="z">175.000</td></tr>'
    + '<tr><td>− variable Handlungskosten</td><td class="z">36.000</td><td class="z">30.000</td><td class="z">15.000</td></tr>'
    + '<tr><td>= DB I</td><td class="z">324.000</td><td class="z">180.000</td><td class="z">60.000</td></tr>'
    + '<tr><td>− warengruppenfixe Kosten</td><td class="z">180.000</td><td class="z">120.000</td><td class="z">85.000</td></tr>'
    + '<tr class="rahmen"><td>= DB II</td><td class="z">144.000</td><td class="z">60.000</td><td class="z">−25.000</td></tr></table>'
    + 'Die unternehmensfixen Kosten betragen 150.000.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Das Betriebsergebnis beträgt 29.000.', richtig:true, weg:'Summe DB II: 144.000 + 60.000 − 25.000 = 179.000; 179.000 − 150.000 = 29.000.'},
    {text:'Das Zubehör deckt seine variablen Kosten, aber nicht seine warengruppenfixen Kosten.', richtig:true, weg:'DB I positiv (60.000), DB II negativ (−25.000).'},
    {text:'Der Wareneinsatz zählt zu den variablen Kosten, weil er mit der verkauften Menge steigt und fällt.', richtig:true,
     weg:'Jeder verkaufte Schreibtisch verursacht seinen Bezugspreis – kein Verkauf, kein Wareneinsatz.'},
    {text:'Die Bürostühle tragen am meisten zur Deckung der unternehmensfixen Kosten bei.',
     fehler:'Dafür zählt der DB II: Schreibtische 144.000, Bürostühle nur 60.000.'},
    {text:'Das Betriebsergebnis ergibt sich aus der Summe der DB I abzüglich der unternehmensfixen Kosten.', fehler:'Dann fehlen die warengruppenfixen Kosten. Richtig: Summe DB II − unternehmensfixe Kosten.'}
  ],
  hinweise:['DB I = Umsatz − Wareneinsatz − variable Handlungskosten.', 'DB II = DB I − warengruppenfixe Kosten.', 'Betriebsergebnis = Summe DB II − unternehmensfixe Kosten.'],
  merke:'Die mehrstufige Deckungsbeitragsrechnung zeigt, wie viel jede Warengruppe zuerst zu ihren eigenen Fixkosten (DB II) und dann zu den unternehmensfixen Kosten beiträgt.'
},
{
  id:'TD2', modul:'K10T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Zubehör aus dem Sortiment nehmen?',
  tags:['Teilkostenrechnung','Theorie','Sortiment'],
  text:'Die Geschäftsführung der Seidel GmbH will die WG III Zubehör streichen, weil ihr DB II negativ ist.'
    + ghTab(null, [['DB I der WG III', '60.000 €'], ['warengruppenfixe Kosten der WG III', '85.000 €'], ['davon abbaubar (Aushilfen, gemietete Regalfläche)', '50.000 €'], ['davon nicht abbaubar (langfristig gemietete Halle, Abschreibung Regalsystem)', '35.000 €'], ['DB II der WG III', '−25.000 €'], ['Betriebsergebnis bisher', '29.000 €']]),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Ohne WG III sinkt das Betriebsergebnis um 10.000 € auf 19.000 €.', richtig:true,
     weg:'Es fallen 60.000 € DB I weg, gespart werden nur 50.000 €: 29.000 € − 60.000 € + 50.000 € = 19.000 €.'},
    {text:'Entscheidend ist der Vergleich von DB I und abbaubaren Fixkosten: 60.000 € > 50.000 € – die Warengruppe sollte zunächst bleiben.', richtig:true,
     weg:'Solange der DB I höher ist als die Kosten, die tatsächlich wegfallen, verbessert die Warengruppe das Betriebsergebnis.'},
    {text:'Wären alle 85.000 € abbaubar, stiege das Betriebsergebnis durch die Streichung um 25.000 €.', richtig:true,
     weg:'−60.000 € + 85.000 € = +25.000 € – dann entspräche die Verbesserung genau dem negativen DB II.'},
    {text:'Das Betriebsergebnis steigt in jedem Fall um 25.000 €, weil der DB II von WG III negativ ist.',
     fehler:'Das stimmt nur, wenn alle warengruppenfixen Kosten wegfallen. Nicht abbaubare Kosten (35.000 €) bleiben und müssen von den anderen Warengruppen getragen werden.'},
    {text:'Mit der Warengruppe entfallen auch Miete und Abschreibung der Halle.',
     fehler:'Langfristige Mietverträge und vorhandene Anlagen bleiben bestehen – diese Kosten sind kurzfristig nicht abbaubar.'}
  ],
  hinweise:['Was fällt weg, wenn WG III gestrichen wird – Erlöse und welche Kosten?', 'Vergleiche wegfallenden DB I mit den abbaubaren Fixkosten.', 'Nicht abbaubare Fixkosten bleiben dem Unternehmen erhalten.'],
  merke:'Sortimentsbereinigung: Eine Warengruppe mit negativem DB II zu streichen lohnt sich nur, wenn die abbaubaren Fixkosten größer sind als ihr DB I. Nicht abbaubare Fixkosten bleiben.'
},
{
  id:'TD3', modul:'K10T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Zubehör im Sortimentsverbund',
  tags:['Teilkostenrechnung','Theorie','Sortiment'],
  text:'Der Vertriebsleiter der Seidel GmbH warnt: Viele Büroeinrichter kaufen Schreibtische nur, weil sie Kabelkanäle, Monitorarme und Leuchten gleich mitbestellen können. Ohne Zubehör, schätzt er, sinkt der DB I der Schreibtische um 10 %.'
    + ghTab(null, [['DB I der WG I Schreibtische', '324.000 €'], ['DB I der WG III Zubehör', '60.000 €'], ['abbaubare Fixkosten der WG III', '50.000 €']]),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Das Zubehör ist ein Ergänzungsartikel – sein Wegfall kann den Absatz der Schreibtische mindern.', richtig:true,
     weg:'Kunden wollen eine Komplettlösung aus einer Hand. Fehlt ein Teil, wandern sie mit dem ganzen Auftrag ab.'},
    {text:'Unter Berücksichtigung des Verbunds sinkt das Betriebsergebnis bei einer Streichung um 42.400 €.', richtig:true,
     weg:'−60.000 € (DB I WG III) + 50.000 € (abbaubare Fixkosten) − 32.400 € (10 % von 324.000 €) = −42.400 €.'},
    {text:'Ergänzungsartikel können sinnvoll sein, auch wenn ihr eigener DB II negativ ist, weil sie Käufe in anderen Warengruppen auslösen.', richtig:true,
     weg:'Der Beitrag zeigt sich dann nicht im eigenen DB, sondern in den DB anderer Warengruppen.'},
    {text:'Sortimentsentscheidungen trifft man allein nach dem DB II der einzelnen Warengruppe.',
     fehler:'Der DB II zeigt den Verbund nicht. Wer nur auf ihn schaut, streicht womöglich Artikel, die den Umsatz anderer Warengruppen tragen.'},
    {text:'Verbundeffekte sind unwichtig, weil die Schreibtische einen positiven DB II haben.',
     fehler:'Gerade weil WG I einen hohen DB erwirtschaftet, ist ein Rückgang dort teuer – 32.400 € weniger DB I.'}
  ],
  hinweise:['Welche Artikel werden zusammen gekauft?', 'Rechne den DB-Verlust in WG I mit ein.', 'Ein Artikel kann sich lohnen, ohne selbst viel zu verdienen.'],
  merke:'Im Großhandel hängen Warengruppen oft zusammen (Sortimentsverbund). Vor einer Streichung sind auch die DB-Verluste anderer Warengruppen einzurechnen. Lockvogel- und Ergänzungsartikel können trotz schwachem eigenem DB das Gesamtergebnis stützen.'
},
{
  id:'TD4', modul:'K10T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Wie tief darf der Preis sinken?',
  tags:['Teilkostenrechnung','Theorie','Preisuntergrenze'],
  text:'Ein Mitbewerber unterbietet die Preise der Seidel GmbH für Bürostühle deutlich.'
    + ghTab(null, [['Bezugspreis je Stuhl', '120 €'], ['variable Handlungskosten je Stuhl (Verpackung, Umsatzprovision)', '6 €'], ['Handlungskostenzuschlag in der Vollkostenkalkulation', '30 %']]),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die kurzfristige Preisuntergrenze liegt bei 126 € (Barverkaufspreis).', richtig:true,
     weg:'Kurzfristig müssen nur die variablen Kosten gedeckt sein: 120 € + 6 € = 126 €.'},
    {text:'Bei einem Barverkaufspreis von 140 € erwirtschaftet jeder Stuhl noch 14 € Deckungsbeitrag.', richtig:true,
     weg:'140 € − 126 € = 14 € – ein Beitrag zu den Fixkosten.'},
    {text:'Langfristig muss der Preis die Selbstkosten von 156 € decken.', richtig:true,
     weg:'120 € × 1,30 = 156 €. Auf Dauer müssen auch die fixen Handlungskosten hereinkommen.'},
    {text:'Die kurzfristige Preisuntergrenze liegt bei 156 €, weil auch die anteiligen Handlungskosten gedeckt werden müssen.',
     fehler:'Das ist die langfristige Preisuntergrenze. Die fixen Handlungskosten fallen kurzfristig ohnehin an – sie entscheiden nicht über den kurzfristigen Mindestpreis.'},
    {text:'Unter 156 € sollte die Seidel GmbH keinen Stuhl mehr verkaufen, weil jeder Verkauf Verlust bringt.',
     fehler:'Zwischen 126 € und 156 € bringt jeder Stuhl einen positiven DB. Ohne Verkauf fehlte dieser Beitrag, die Fixkosten blieben – der Verlust wäre größer.'}
  ],
  hinweise:['Welche Kosten fallen nur an, wenn ein Stuhl verkauft wird?', 'Kurzfristig: variable Kosten. Langfristig: Selbstkosten.', 'Selbstkosten = Bezugspreis × (1 + Handlungskostenzuschlag).'],
  merke:'Kurzfristige Preisuntergrenze im Großhandel = Bezugspreis + variable Handlungskosten. Langfristige Preisuntergrenze = Selbstkosten. Dazwischen trägt jeder Verkauf noch zur Deckung der Fixkosten bei.'
},
{
  id:'TD5', modul:'K10T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Großauftrag einer Behörde',
  tags:['Teilkostenrechnung','Theorie','Zusatzauftrag'],
  text:'Eine Landesbehörde will bei der Seidel GmbH einmalig Schreibtische kaufen. Lager und Auslieferung haben freie Kapazität.'
    + ghTab(null, [['Menge', '200 Stück'], ['angebotener Preis (Barverkaufspreis) je Stück', '310 €'], ['Bezugspreis je Stück', '240 €'], ['variable Handlungskosten je Stück (Auslieferung, Verpackung)', '12 €'], ['Handlungskostenzuschlag (normal)', '40 %'], ['Selbstkosten je Stück', '336 €']]),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der Auftrag bringt einen Deckungsbeitrag von 58 € je Schreibtisch, insgesamt 11.600 € – das Betriebsergebnis steigt um diesen Betrag.', richtig:true,
     weg:'310 € − 240 € − 12 € = 58 €; 200 × 58 € = 11.600 €. Fixkosten fallen ohnehin an.'},
    {text:'Der Preis liegt zwar unter den Selbstkosten von 336 €, der Auftrag lohnt sich kurzfristig trotzdem.', richtig:true,
     weg:'240 € × 1,40 = 336 €. Maßgeblich ist aber, dass der Preis die variablen Kosten (252 €) übersteigt.'},
    {text:'Annehmen sollte die Seidel GmbH nur, wenn keine regulären Aufträge verdrängt werden und Stammkunden nicht dieselben Preise verlangen.', richtig:true,
     weg:'Sonst gingen reguläre Deckungsbeiträge verloren oder das Preisniveau geriete unter Druck.'},
    {text:'Der Auftrag bringt 26 € Verlust je Schreibtisch und ist abzulehnen.',
     fehler:'310 € − 336 € = −26 € ist eine Vollkostenbetrachtung. Die anteiligen Fixkosten fallen auch ohne den Auftrag an – das ist die typische Vollkostenfalle.'},
    {text:'Der Auftrag lohnt sich nur, wenn der Preis mindestens die Selbstkosten erreicht.',
     fehler:'Kurzfristig reicht ein Preis über den variablen Kosten (252 €) – die Fixkosten fallen ohnehin an.'}
  ],
  hinweise:['Welche Kosten verursacht der Auftrag zusätzlich?', 'DB je Stück = Preis − Bezugspreis − variable Handlungskosten.', 'Welche Nebenwirkungen kann ein Sonderpreis haben?'],
  merke:'Zusatzauftrag bei freier Kapazität: annehmen, wenn der Preis über Bezugspreis + variablen Handlungskosten liegt. Dabei Verdrängung regulärer Aufträge und Wirkung auf Stammkunden prüfen.'
},
{
  id:'TD6', modul:'K10T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Gewinnschwelle der Bürostühle',
  tags:['Teilkostenrechnung','Theorie','Gewinnschwelle'],
  text:'Die Seidel GmbH betrachtet ihre Warengruppe II Bürostühle.'
    + ghTab(null, [['durchschnittlicher Verkaufspreis je Stuhl (netto)', '200 €'], ['Bezugspreis je Stuhl', '130 €'], ['variable Handlungskosten je Stuhl', '10 €'], ['warengruppenfixe Kosten der WG II', '120.000 €'], ['verkaufte Stühle im letzten Jahr', '3.000']]),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die Gewinnschwelle der Warengruppe (DB II = 0) liegt bei 2.000 Stühlen.', richtig:true,
     weg:'DB je Stuhl = 200 € − 130 € − 10 € = 60 €; 120.000 € ÷ 60 € = 2.000 Stühle.'},
    {text:'Jeder Stuhl über der Gewinnschwelle erhöht den DB II um 60 €.', richtig:true,
     weg:'Die warengruppenfixen Kosten sind ab 2.000 Stühlen gedeckt – jeder weitere DB ist Überschuss.'},
    {text:'Bei den 3.000 Stühlen des letzten Jahres betrug der DB II 60.000 €.', richtig:true,
     weg:'3.000 × 60 € − 120.000 € = 180.000 € − 120.000 € = 60.000 €.'},
    {text:'Die Gewinnschwelle liegt bei 600 Stühlen (120.000 € ÷ 200 €).',
     fehler:'Durch den Preis zu teilen übersieht, dass jeder Stuhl auch 140 € variable Kosten verursacht. Nur der DB von 60 € deckt Fixkosten.'},
    {text:'Unterhalb der Gewinnschwelle trägt ein verkaufter Stuhl nichts zur Deckung der Fixkosten bei.',
     fehler:'Auch unterhalb der Gewinnschwelle deckt jeder Stuhl 60 € Fixkosten – die Deckungsbeiträge reichen nur noch nicht für alle Fixkosten.'}
  ],
  hinweise:['Deckungsbeitrag je Stück = Preis − variable Kosten je Stück.', 'Gewinnschwelle = Fixkosten ÷ DB je Stück.', 'Ab wann ist jeder weitere DB Überschuss?'],
  merke:'Gewinnschwellenmenge = (warengruppen-)fixe Kosten ÷ Deckungsbeitrag je Stück. Darunter entsteht ein negativer, darüber ein positiver DB II.'
},
{
  id:'TD7', modul:'K10T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Variabel oder fix?',
  tags:['Teilkostenrechnung','Theorie','Kostenauflösung'],
  text:'Die Seidel GmbH stellt ihre Kosten auf die Deckungsbeitragsrechnung um und muss sie in variable und fixe Kosten aufteilen.',
  frage:'Welche Kosten sind variabel, verändern sich also mit der verkauften Menge?',
  optionen:[
    {text:'Wareneinsatz (Aufwendungen für Waren 600/601, bewertet zum Bezugspreis der verkauften Stühle und Tische)', richtig:true,
     weg:'Jedes verkaufte Möbelstück verursacht seinen Bezugspreis.'},
    {text:'Umsatzprovision der Handelsvertreter (5 % vom Umsatz)', richtig:true,
     weg:'Die Provision wächst mit jedem Verkauf.'},
    {text:'Verpackungsmaterial für jeden ausgelieferten Schreibtisch', richtig:true,
     weg:'Fällt je verkauftem Stück an – variabel.'},
    {text:'Miete für die Lagerhalle (670)',
     fehler:'Die Miete ist fest vereinbart – sie fällt unabhängig von der verkauften Menge an.'},
    {text:'Ausgangsfrachten, die je Lieferung an den Kunden berechnet werden', richtig:true,
     weg:'Mehr Lieferungen, mehr Frachtkosten – variabel.'}
  ],
  hinweise:['Frage: Fallen die Kosten weg, wenn ein Stuhl weniger verkauft wird?', 'Im Großhandel ist der Wareneinsatz der größte variable Posten.', 'Miete läuft weiter, ob verkauft wird oder nicht.'],
  merke:'Variable Kosten im Großhandel: Wareneinsatz und mengenabhängige Handlungskosten (Provisionen, Verpackung, Ausgangsfrachten). Fixe Kosten: Miete, Gehälter, Abschreibungen.'
},
{
  id:'TD8', modul:'K10T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Warengruppenfix oder unternehmensfix?',
  tags:['Teilkostenrechnung','Theorie','Kostenauflösung'],
  text:'Für die mehrstufige Deckungsbeitragsrechnung ordnet die Seidel GmbH ihre Fixkosten zu.',
  frage:'Welche Fixkosten sind warengruppenfix?',
  optionen:[
    {text:'Gehalt des Ergonomieberaters, der nur Bürostühle verkauft', richtig:true,
     weg:'Es fällt nur für WG II an – ohne Bürostühle bräuchte man ihn nicht.'},
    {text:'Abschreibung auf den Schreibtisch-Showroom', richtig:true,
     weg:'Der Showroom dient nur WG I – warengruppenfix.'},
    {text:'Miete einer Zusatzhalle, die nur für Zubehör genutzt wird', richtig:true,
     weg:'Eindeutig WG III zuzuordnen.'},
    {text:'Gehalt der Geschäftsführerin',
     fehler:'Sie leitet das ganze Unternehmen – unternehmensfixe Kosten.'},
    {text:'Kosten der Buchhaltungssoftware',
     fehler:'Die Buchhaltung arbeitet für alle Warengruppen – unternehmensfix.'}
  ],
  hinweise:['Fällt der Posten nur für eine Warengruppe an?', 'Was würde wegfallen, wenn es die Warengruppe nicht gäbe?', 'Leitung und Verwaltung betreffen das ganze Unternehmen.'],
  merke:'Warengruppenfixe Kosten lassen sich einer Warengruppe eindeutig zurechnen und werden vom DB I abgezogen (DB II). Unternehmensfixe Kosten betreffen das ganze Unternehmen und werden erst von der Summe der DB II abgezogen.'
},
/* ---------- Theorie Abgrenzungsrechnung Großhandel (extra) · Modul-ID K1T ----------
   Fälle deuten statt Begriffe abfragen – durchgehend Sanitärgroßhandel Brandt KG (Komplementär Uwe Brandt).
   mehrfach:true = alle zutreffenden ankreuzen. */
{
  id:'TA1', modul:'K1T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Kalkulatorische Abschreibung höher als bilanzielle',
  tags:['Abgrenzungsrechnung','Theorie','Kalkulatorische Kosten'],
  text:'Die Sanitärgroßhandel Brandt KG bucht für Lkw, Gabelstapler und Hochregallager bilanzielle Abschreibungen (650) von 42.000 €. In der Kosten- und Leistungsrechnung setzt sie für dieselben Anlagen 56.000 € kalkulatorische Abschreibungen an.',
  frage:'Welche Gründe können dafür verantwortlich sein?',
  optionen:[
    {text:'Neue Lkw und Stapler sind deutlich teurer geworden – der Wiederbeschaffungswert liegt über den Anschaffungskosten.', richtig:true,
     weg:'Die KLR schreibt vom Wiederbeschaffungswert ab. Über die Verkaufspreise soll das Geld für die nächste Anschaffung hereinkommen (Substanzerhaltung).'},
    {text:'Zwei Gabelstapler sind bilanziell bereits voll abgeschrieben, fahren aber weiter im Lager.', richtig:true,
     weg:'Bilanziell fällt für sie nichts mehr an. Solange sie genutzt werden, entsteht aber Werteverzehr – die KLR rechnet ihn weiter.'},
    {text:'Die Auslieferungs-Lkw fahren mehr Kilometer als üblich und halten tatsächlich kürzer, als die AfA-Tabelle annimmt.', richtig:true,
     weg:'Kürzere tatsächliche Nutzungsdauer → derselbe Wert auf weniger Jahre verteilt → höherer Jahresbetrag.'},
    {text:'Die Lkw wurden mit einem Bankkredit finanziert, die Zinsen (751) sind gestiegen.',
     fehler:'Die Finanzierung beeinflusst die Zinsaufwendungen, nicht die Abschreibung. Kalkulatorische Zinsen setzt der Großhandel hier gar nicht an.'},
    {text:'Ein nicht mehr benötigtes Lagergebäude ist vermietet (540) und wird bilanziell weiter abgeschrieben.',
     fehler:'Das erhöht die bilanziellen Abschreibungen (neutraler Aufwand) – es erklärt nicht, warum die kalkulatorischen höher sind.'}
  ],
  hinweise:['Von welchem Wert und über wie viele Jahre rechnet die KLR ab?', 'Ein größerer kalkulatorischer Betrag entsteht durch einen höheren Ausgangswert, weniger Nutzungsjahre oder Anlagen, die „abgeschrieben, aber noch da“ sind.', 'Finanzierung und vermietete Gebäude gehören nicht zur kalkulatorischen Abschreibung der betrieblichen Anlagen.'],
  merke:'Kalkulatorische Abschreibung = Wiederbeschaffungswert ÷ tatsächliche Nutzungsdauer, linear. Sie ist höher als die bilanzielle, wenn die Preise gestiegen sind, die Anlagen kürzer halten oder voll abgeschriebene Anlagen weiter genutzt werden.'
},
{
  id:'TA2', modul:'K1T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Kalkulatorische Abschreibung niedriger als bilanzielle',
  tags:['Abgrenzungsrechnung','Theorie','Kalkulatorische Kosten'],
  text:'Für ein neues Kommissioniersystem im Zentrallager bucht die Brandt KG im ersten Jahr 38.000 € bilanzielle Abschreibungen. Die KLR verrechnet dafür nur 30.000 € kalkulatorische Abschreibungen.',
  frage:'Welche Gründe können dafür verantwortlich sein?',
  optionen:[
    {text:'Bilanziell wird degressiv abgeschrieben, kalkulatorisch linear – in den ersten Jahren ist die degressive Abschreibung höher.', richtig:true,
     weg:'Degressiv: hohe Beträge am Anfang, niedrige am Ende. Die KLR verteilt den Werteverzehr gleichmäßig auf die Nutzungsjahre.'},
    {text:'Die KLR rechnet mit einer längeren Nutzungsdauer, weil solche Anlagen erfahrungsgemäß länger halten als in der AfA-Tabelle angenommen.', richtig:true,
     weg:'Mehr Nutzungsjahre → der Wert wird auf mehr Jahre verteilt → kleinerer Jahresbetrag.'},
    {text:'Vergleichbare Systeme sind inzwischen billiger zu haben – der Wiederbeschaffungswert liegt unter den Anschaffungskosten.', richtig:true,
     weg:'Ein niedrigerer Ausgangswert ergibt eine niedrigere kalkulatorische Abschreibung.'},
    {text:'Die KLR rechnet mit einer kürzeren Nutzungsdauer als die AfA-Tabelle.',
     fehler:'Eine kürzere Nutzungsdauer verteilt den Wert auf weniger Jahre – die kalkulatorische Abschreibung wäre dann höher, nicht niedriger.'},
    {text:'Die Brandt KG hat im selben Jahr einen alten Lkw unter Buchwert verkauft (696).',
     fehler:'Der Verlust aus dem Anlagenabgang ist neutraler Aufwand. Mit der Abschreibung des Kommissioniersystems hat er nichts zu tun.'}
  ],
  hinweise:['Welche drei Stellschrauben hat eine Abschreibung? Ausgangswert, Nutzungsdauer, Methode.', 'Ein kleinerer kalkulatorischer Betrag entsteht durch einen kleineren Ausgangswert, mehr Jahre oder eine gleichmäßigere Verteilung.', 'Verkäufe anderer Anlagen gehören in die unternehmensbezogene Abgrenzung.'],
  merke:'Die bilanzielle Abschreibung folgt Handels- und Steuerrecht, die kalkulatorische dem tatsächlichen Werteverzehr. Unterschiede entstehen durch Ausgangswert, Nutzungsdauer und Methode – sie machen die kalkulatorische Abschreibung zu Anderskosten.'
},
{
  id:'TA3', modul:'K1T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Unternehmerlohn – KG oder GmbH?',
  tags:['Abgrenzungsrechnung','Theorie','Kalkulatorische Kosten'],
  text:'Uwe Brandt ist Komplementär der Sanitärgroßhandel Brandt KG und leitet den Betrieb voll. Ein Gehalt bezieht er nicht, er lebt von Privatentnahmen. Sein Bekannter Jens Kühn ist Geschäftsführer der Kühn Heizungsgroßhandel GmbH und erhält dort ein Geschäftsführergehalt von 96.000 € im Jahr, das auf Konto 63 Gehälter gebucht wird.',
  frage:'Welche Aussagen zum kalkulatorischen Unternehmerlohn treffen zu?',
  optionen:[
    {text:'Die Brandt KG sollte einen kalkulatorischen Unternehmerlohn ansetzen, weil die Arbeit von Uwe Brandt sonst in keiner Kostenart erscheint.', richtig:true,
     weg:'Bei Einzelunternehmen, OHG und KG ist die Arbeit des Inhabers kein Aufwand. Ohne Unternehmerlohn wären die Kosten zu niedrig und die Preise zu knapp kalkuliert.'},
    {text:'Die Kühn GmbH darf keinen zusätzlichen Unternehmerlohn ansetzen, weil das Geschäftsführergehalt bereits als Gehalt in den Kosten steckt.', richtig:true,
     weg:'Das Gehalt ist Zweckaufwand und Grundkosten. Ein zusätzlicher Unternehmerlohn würde dieselbe Arbeit doppelt verrechnen.'},
    {text:'Als Höhe bietet sich an, was ein angestellter Geschäftsführer in einem vergleichbaren Großhandel verdienen würde.', richtig:true,
     weg:'Der Unternehmerlohn ersetzt das Gehalt, auf das der Inhaber verzichtet (Opportunitätskosten). Maßstab ist ein vergleichbares Geschäftsführergehalt.'},
    {text:'Bei der Brandt KG ist der Unternehmerlohn Anderskosten, weil ihm die Privatentnahmen von Uwe Brandt gegenüberstehen.',
     fehler:'Privatentnahmen sind kein Aufwand, sondern mindern das Eigenkapital. Dem Unternehmerlohn steht gar kein Aufwand gegenüber – er ist Zusatzkosten.'},
    {text:'Der kalkulatorische Unternehmerlohn wird in der Finanzbuchhaltung gebucht und mindert so den Gewinn der KG.',
     fehler:'Er erscheint nur in der KLR. Gesamtergebnis und Steuern der KG bleiben davon unberührt – gemindert wird nur das Betriebsergebnis.'}
  ],
  hinweise:['Bekommt der Chef ein Gehalt, das als Aufwand gebucht wird?', 'Privatentnahmen sind kein Aufwand.', 'Kein Aufwand, aber Kosten – wie heißen solche Kosten?'],
  merke:'Kalkulatorischer Unternehmerlohn nur bei Einzelunternehmen und Personengesellschaften (OHG, KG), deren Inhaber ohne Gehalt mitarbeiten. Er ist Zusatzkosten. Bei der GmbH ist das Geschäftsführergehalt bereits Aufwand und Kosten.'
},
{
  id:'TA4', modul:'K1T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Grund-, Anders- und Zusatzkosten',
  tags:['Abgrenzungsrechnung','Theorie','Begriffe'],
  text:'In der Ergebnistabelle der Brandt KG stehen im Jahr unter anderem:'
    + ghTab(null, [['Gehälter (63)', '125.000 €'], ['Miete für das Verkaufslager (670)', '48.000 €'], ['Abschreibungen (650) bilanziell', '42.000 €'], ['Abschreibungen kalkulatorisch', '56.000 €'], ['kalkulatorischer Unternehmerlohn', '72.000 €']]),
  frage:'Welche Einordnungen treffen zu?',
  optionen:[
    {text:'Die Gehälter von 125.000 € sind Grundkosten.', richtig:true,
     weg:'Dem Gehaltsaufwand stehen Kosten in gleicher Höhe gegenüber – Zweckaufwand = Grundkosten.'},
    {text:'Die kalkulatorischen Abschreibungen von 56.000 € sind Anderskosten; die KLR verrechnet 14.000 € mehr, als bilanziell gebucht ist.', richtig:true,
     weg:'Es gibt einen Aufwand (42.000 €), aber in anderer Höhe: 56.000 € − 42.000 € = 14.000 €.'},
    {text:'Der Unternehmerlohn von 72.000 € ist Zusatzkosten.', richtig:true,
     weg:'In der Finanzbuchhaltung steht dem nichts gegenüber – Kosten ohne Aufwand.'},
    {text:'Die Miete für das Verkaufslager ist neutraler Aufwand, weil das Lager nicht der Brandt KG gehört.',
     fehler:'Entscheidend ist nicht das Eigentum, sondern der Betriebszweck. Ohne Lager kein Großhandel – die Miete ist Zweckaufwand und Grundkosten.'},
    {text:'Die bilanziellen Abschreibungen von 42.000 € sind neutraler Aufwand, weil die KLR mit einem anderen Wert rechnet.',
     fehler:'Sie sind betrieblich, also nicht neutral. In der kostenrechnerischen Korrektur werden sie durch die kalkulatorischen Abschreibungen ersetzt – das ist etwas anderes als „neutral“.'}
  ],
  hinweise:['Grundkosten: gleicher Betrag in beiden Rechnungskreisen.', 'Anderskosten: Aufwand vorhanden, aber in anderer Höhe. Zusatzkosten: gar kein Aufwand.', 'Neutral ist nur, was betriebsfremd, periodenfremd oder außerordentlich ist.'],
  merke:'Grundkosten = Zweckaufwand in gleicher Höhe. Anderskosten = Aufwand in anderer Höhe (im Großhandel: kalkulatorische Abschreibungen). Zusatzkosten = kein Aufwand (kalkulatorischer Unternehmerlohn).'
},
{
  id:'TA5', modul:'K1T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Was gehört nicht in die KLR?',
  tags:['Abgrenzungsrechnung','Theorie','Begriffe'],
  text:'In der Gewinn- und Verlustrechnung der Brandt KG stehen im Quartal unter anderem:'
    + ghTab(null, [['540 Mieterträge (Halle, an einen Fliesenleger vermietet)', '9.000 €'], ['571 Zinserträge aus Festgeld', '1.200 €'], ['696 Verlust aus dem Verkauf eines Lieferwagens unter Buchwert', '3.500 €'], ['600 Aufwendungen Warengruppe I (Badkeramik)', '410.000 €'], ['500 Umsatzerlöse Warengruppe I', '590.000 €']]),
  frage:'Welche Posten werden in der unternehmensbezogenen Abgrenzung als neutral herausgenommen?',
  optionen:[
    {text:'Die Mieterträge von 9.000 €', richtig:true,
     weg:'Vermieten ist nicht der Betriebszweck eines Sanitärgroßhandels – betriebsfremder Ertrag.'},
    {text:'Die Zinserträge von 1.200 €', richtig:true,
     weg:'Geldanlage ist nicht der Betriebszweck – betriebsfremder Ertrag.'},
    {text:'Der Verlust aus dem Abgang des Lieferwagens von 3.500 €', richtig:true,
     weg:'Er entsteht nicht beim Handel mit Waren, sondern beim Abgang von Anlagevermögen – neutraler Aufwand.'},
    {text:'Die Aufwendungen für Waren von 410.000 €',
     fehler:'Der Wareneinsatz ist der wichtigste betriebliche Aufwand im Großhandel – Zweckaufwand und Grundkosten.'},
    {text:'Die Umsatzerlöse von 590.000 €',
     fehler:'Umsatzerlöse aus dem Warenverkauf sind genau die betriebliche Leistung.'}
  ],
  hinweise:['Betriebszweck der Brandt KG: Sanitärwaren einkaufen, lagern, verkaufen.', 'Prüfe jeden Posten: Hat er mit dem Warenhandel zu tun?', 'Konten 54, 57, 546/696 sind im Großhandel typische Kandidaten für die Abgrenzung.'],
  merke:'Neutral sind Aufwendungen und Erträge, die betriebsfremd (Vermietung, Zinsen), periodenfremd oder außerordentlich (Anlagenabgang, Schäden) sind. Wareneinsatz und Umsatzerlöse sind der Kern der KLR im Großhandel.'
},
{
  id:'TA6', modul:'K1T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Positives neutrales Ergebnis',
  tags:['Abgrenzungsrechnung','Theorie','Ergebnis'],
  text:'Die Ergebnistabelle der Brandt KG zeigt für das Jahr:'
    + ghTab(null, [['Gesamtergebnis', '210.000 €'], ['Betriebsergebnis', '165.000 €'], ['neutrales Ergebnis (Abgrenzungen und kostenrechnerische Korrekturen)', '+45.000 €']]),
  frage:'Wie lässt sich das positive neutrale Ergebnis erklären?',
  optionen:[
    {text:'Die neutralen Erträge sind höher als die neutralen Aufwendungen, z. B. durch Mieterträge für die vermietete Halle oder einen Gewinn aus einem Grundstücksverkauf.', richtig:true,
     weg:'Neutrale Erträge erhöhen nur das Gesamtergebnis, nicht das Betriebsergebnis.'},
    {text:'In der KLR werden Kosten verrechnet, denen kein oder ein niedrigerer Aufwand gegenübersteht – etwa der kalkulatorische Unternehmerlohn von Uwe Brandt.', richtig:true,
     weg:'Zusatzkosten und höhere Anderskosten mindern nur das Betriebsergebnis. Die kostenrechnerischen Korrekturen tragen dann positiv zum neutralen Ergebnis bei.'},
    {text:'Die Brandt KG verdient mit dem Warenhandel weniger, als das Gesamtergebnis vermuten lässt.', richtig:true,
     weg:'Betriebsergebnis 165.000 € < Gesamtergebnis 210.000 €: 45.000 € des Gesamtergebnisses stammen nicht aus dem eigentlichen Handel bzw. aus Korrekturen.'},
    {text:'Die Umsatzerlöse der Warengruppe Badkeramik sind gestiegen.',
     fehler:'Umsatzerlöse stehen im Gesamt- und im Betriebsergebnis in gleicher Höhe – sie verändern das neutrale Ergebnis nicht.'},
    {text:'Ein Lkw wurde unter Buchwert verkauft.',
     fehler:'Ein Verlust aus Anlagenabgang ist neutraler Aufwand und würde das neutrale Ergebnis verschlechtern.'}
  ],
  hinweise:['Gesamtergebnis = Betriebsergebnis + neutrales Ergebnis: 165.000 € + 45.000 € = 210.000 €.', 'Positiv wird der Abgrenzungsbereich durch neutrale Erträge oder dadurch, dass die KLR mehr Kosten verrechnet, als Aufwand gebucht ist.', 'Was in beiden Rechnungskreisen gleich hoch ist, wirkt sich nicht aus.'],
  merke:'Gesamtergebnis = Betriebsergebnis + neutrales Ergebnis. Ein positives neutrales Ergebnis heißt: Das Unternehmen steht insgesamt besser da, als es der Warenhandel allein erwirtschaftet.'
},
{
  id:'TA7', modul:'K1T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Gewinn trotz negativem Betriebsergebnis',
  tags:['Abgrenzungsrechnung','Theorie','Ergebnis'],
  text:'Im Folgejahr meldet die Brandt KG die folgenden Ergebnisse. Uwe Brandt meint: „Wir haben Gewinn gemacht, also läuft alles gut.“'
    + ghTab(null, [['Gesamtergebnis', '+18.000 €'], ['Betriebsergebnis', '−22.000 €'], ['neutrales Ergebnis', '+40.000 €']]),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der eigentliche Warenhandel arbeitet mit Verlust: Die Erlöse decken die Kosten (einschließlich Unternehmerlohn) nicht.', richtig:true,
     weg:'Das Betriebsergebnis von −22.000 € zeigt den Erfolg des Kerngeschäfts – er ist negativ.'},
    {text:'Der Gewinn von 18.000 € kommt nur durch das neutrale Ergebnis zustande, z. B. durch Mieterträge, Zinserträge oder kostenrechnerische Korrekturen.', richtig:true,
     weg:'−22.000 € + 40.000 € = 18.000 €. Ohne den Abgrenzungsbereich stünde ein Verlust.'},
    {text:'Uwe Brandt sollte die Ursachen im Handel suchen, z. B. Warengruppen, Preise und Handlungskosten prüfen.', richtig:true,
     weg:'Neutrale Erträge wie ein Grundstücksverkauf wiederholen sich nicht dauerhaft – das Kerngeschäft muss sich selbst tragen.'},
    {text:'Weil das Gesamtergebnis positiv ist, besteht kein Handlungsbedarf.',
     fehler:'Das Gesamtergebnis verdeckt, dass der Handel Verlust macht. Genau dafür trennt die Abgrenzungsrechnung die Ergebnisse.'},
    {text:'Das Betriebsergebnis ist negativ, weil die Zinserträge zu niedrig waren.',
     fehler:'Zinserträge sind neutral und gehen gar nicht ins Betriebsergebnis ein.'}
  ],
  hinweise:['Gesamtergebnis = Betriebsergebnis + neutrales Ergebnis.', 'Welches Ergebnis zeigt den Erfolg des Warenhandels?', 'Wiederholen sich neutrale Erträge verlässlich?'],
  merke:'Das Betriebsergebnis zeigt, ob der Warenhandel wirtschaftlich arbeitet. Ein positives Gesamtergebnis kann einen Verlust im Kerngeschäft verdecken.'
},
{
  id:'TA8', modul:'K1T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Abgrenzung und Preiskalkulation',
  tags:['Abgrenzungsrechnung','Theorie','Kalkulatorische Kosten','Kalkulation'],
  text:'Die Brandt KG ermittelt aus ihren Handlungskosten einen Handlungskostenzuschlag für die Verkaufskalkulation.'
    + ghTab(null, [['Handlungskosten ohne kalkulatorischen Unternehmerlohn', '480.000 €'], ['kalkulatorischer Unternehmerlohn', '72.000 €'], ['Wareneinsatz', '1.600.000 €']]),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Ohne Unternehmerlohn ergibt sich ein Handlungskostenzuschlag von 30 %, mit Unternehmerlohn von 34,5 %.', richtig:true,
     weg:'480.000 € ÷ 1.600.000 € × 100 = 30 %; (480.000 € + 72.000 €) ÷ 1.600.000 € × 100 = 552.000 € ÷ 1.600.000 € × 100 = 34,5 %.'},
    {text:'Fehlt der Unternehmerlohn, kalkuliert die Brandt KG ihre Preise zu niedrig – die Arbeit des Inhabers wird über die Preise nicht bezahlt.', richtig:true,
     weg:'Die Preise sollen alle Kosten decken, auch den Wert der Arbeitskraft des Inhabers.'},
    {text:'Kalkulatorische Abschreibungen vom Wiederbeschaffungswert sorgen dafür, dass über die Preise das Geld für neue Lkw und Stapler hereinkommt.', richtig:true,
     weg:'Substanzerhaltung: Die Kalkulation orientiert sich an dem, was die Ersatzanlage kosten wird.'},
    {text:'Die Mieterträge der vermieteten Halle sollten von den Handlungskosten abgezogen werden, damit die Preise günstiger werden.',
     fehler:'Mieterträge sind betriebsfremd und nicht dauerhaft gesichert. Sie gehören nicht in die Kalkulation – sonst wären die Preise zu niedrig, sobald die Miete wegfällt.'},
    {text:'Neutrale Aufwendungen wie eine Spende oder der Verlust aus einem Anlagenabgang gehören in die Handlungskosten, damit wirklich alle Aufwendungen gedeckt sind.',
     fehler:'Neutrale Aufwendungen sind zufällig oder betriebsfremd. In der Kalkulation würden sie die Preise verzerren – deshalb werden sie vorher abgegrenzt.'}
  ],
  hinweise:['Handlungskostenzuschlag = Handlungskosten ÷ Wareneinsatz × 100.', 'Welche Kosten müssen die Preise dauerhaft decken?', 'Neutrale Posten bleiben aus der Kalkulation draußen – in beide Richtungen.'],
  merke:'Die Abgrenzungsrechnung liefert die Kosten, mit denen kalkuliert wird: ohne neutrale Aufwendungen und Erträge, aber mit kalkulatorischen Kosten. Nur so spiegeln die Preise den tatsächlichen Werteverzehr des Handels.'
},
/* ---------- Modul 3 · BAB im Großhandel (Kostenstellen = Warengruppen) ---------- */
{
  id:'BA0', modul:'K2', typ:'berechnung', stufe:0, titel:'Zuschlagsgrundlage im Großhandel',
  tags:['BAB','Theorie'],
  text:'Ein Großhändler verkauft die Waren so weiter, wie er sie eingekauft hat. Seine Kosten bestehen aus dem Wareneinsatz und den Handlungskosten (Personal, Miete, Fuhrpark, Energie, Abschreibungen …).',
  frage:'Worauf werden die Handlungskosten einer Warengruppe im BAB bezogen?',
  optionen:[
    {text:'Auf den Wareneinsatz der Warengruppe – also den Bezugspreis der verkauften Waren.', richtig:true,
     weg:'Der Wareneinsatz ist die Einzelkostengröße im Handel. Der Handlungskostenzuschlag sagt: Auf 100 € Wareneinsatz kommen x € Handlungskosten.'},
    {text:'Auf die Umsatzerlöse der Warengruppe.', fehler:'Die Umsatzerlöse enthalten schon Gewinn und Handlungskosten. Kalkuliert wird vom Bezugspreis aus – deshalb ist der Wareneinsatz die Grundlage.'},
    {text:'Auf die Einkäufe des Jahres, auch wenn die Ware noch im Lager liegt.', fehler:'Was noch im Lager liegt, ist nicht eingesetzt worden. Bestandsveränderungen müssen berücksichtigt werden.'},
    {text:'Auf die Zahl der Mitarbeiter je Warengruppe.', fehler:'Die Mitarbeiterzahl kann ein Verteilungsschlüssel für einzelne Kosten sein, aber nicht die Zuschlagsgrundlage.'}
  ],
  hinweise:['Im Handel ist die Ware selbst die Einzelkostengröße.', 'Wovon geht die Kalkulation eines Verkaufspreises aus?', 'Wareneinsatz = Anfangsbestand + Einkäufe − Schlussbestand.'],
  merke:'Handlungskostenzuschlagssatz = Handlungskosten ÷ Wareneinsatz × 100.'
},
babWG({
  id:'BA1', stufe:1, titel:'BAB · zwei Warengruppen', firma:'Sanitärgroßhandlung Keller GmbH', zeitraum:'den Monat März',
  wg:['Sanitärkeramik', 'Armaturen'],
  posten:[
    {t:'Gehälter', ges:48000, v:[28000, 20000]},
    {t:'Miete', ges:12000, schluessel:[700, 500], art:'m2'},
    {t:'Energie', ges:3600, schluessel:[2, 1]},
    {t:'Kalkulatorische Abschreibungen', ges:6400, v:[3600, 2800]},
    {t:'Sonstige Handlungskosten', ges:5000, schluessel:[3, 2]}
  ],
  we:[220000, 124000]
}),
babWG({
  id:'BA2', stufe:2, titel:'BAB · drei Warengruppen mit Jahresbeträgen', firma:'Elektrogroßhandlung Kalmbach GmbH', zeitraum:'das erste Quartal',
  wg:['Installationsmaterial', 'Leuchten', 'Hausgeräte'],
  posten:[
    {t:'Gehälter', ges:126000, v:[42000, 48000, 36000]},
    {t:'Miete', ges:144000, jahr:4, schluessel:[600, 400, 800], art:'m2'},
    {t:'Energie', ges:9000, schluessel:[2, 3, 4]},
    {t:'Kalkulatorische Abschreibungen', ges:48000, jahr:4, schluessel:[1, 1, 2]},
    {t:'Werbung', ges:15000, v:[3000, 7500, 4500]}
  ],
  we:[310000, 200000, 380000], gesamt:true, frage:true,
  merke:'Ein Durchschnittszuschlag für das ganze Unternehmen verdeckt, dass die Warengruppen unterschiedlich viele Handlungskosten verursachen.'
}),
babWG({
  id:'BA3', stufe:2, titel:'BAB · Schlüssel nach Mitarbeitern und Fläche', firma:'Getränkegroßhandlung Brausewind GmbH', zeitraum:'den Monat Mai',
  wg:['Wasser und Säfte', 'Bier', 'Wein und Spirituosen'],
  posten:[
    {t:'Löhne', ges:54000, schluessel:[4, 3, 2], art:'ma'},
    {t:'Gehälter', ges:30000, v:[9000, 9000, 12000]},
    {t:'Miete', ges:21000, schluessel:[1200, 900, 400], art:'m2'},
    {t:'Fuhrpark', ges:16000, schluessel:[5, 4, 1]},
    {t:'Sonstige Handlungskosten', ges:6300, v:[2100, 2100, 2100]}
  ],
  we:[212000, 168000, 149000]
}),
babWG({
  id:'BA4', stufe:3, titel:'BAB · Wareneinsatz aus den Lagerbeständen', firma:'Büromöbelgroßhandlung Seidel GmbH', zeitraum:'das zweite Quartal',
  wg:['Büromöbel', 'Bürobedarf'],
  posten:[
    {t:'Gehälter', ges:96000, v:[54000, 42000]},
    {t:'Miete', ges:108000, jahr:4, schluessel:[1100, 400], art:'m2'},
    {t:'Kalkulatorische Abschreibungen', ges:36000, jahr:4, schluessel:[2, 1]},
    {t:'Fuhrpark', ges:14400, schluessel:[5, 1]},
    {t:'Sonstige Handlungskosten', ges:8200, v:[5200, 3000]}
  ],
  lager:{ab:[86000, 24000], ek:[412000, 131000], sb:[98000, 19000]}, gesamt:true, frage:true,
  merke:'Kleinteiliger Bürobedarf verursacht im Verhältnis zum Warenwert viel Arbeit (Kommissionieren, Verpacken) – deshalb ist sein Zuschlag höher.'
}),
babWG({
  id:'BA5', stufe:3, titel:'BAB · drei Warengruppen, Lagerbestände und Jahresbeträge', firma:'Werkzeuggroßhandlung Brenner KG', zeitraum:'das dritte Quartal',
  wg:['Handwerkzeuge', 'Elektrowerkzeuge', 'Befestigungstechnik'],
  posten:[
    {t:'Löhne', ges:72000, schluessel:[3, 2, 3], art:'ma'},
    {t:'Gehälter', ges:45000, v:[13500, 18000, 13500]},
    {t:'Miete', ges:96000, jahr:4, schluessel:[500, 300, 700], art:'m2'},
    {t:'Kalkulatorische Abschreibungen', ges:28800, jahr:4, schluessel:[1, 2, 1]},
    {t:'Energie und Sonstiges', ges:9600, schluessel:[1, 1, 2]}
  ],
  lager:{ab:[64000, 92000, 38000], ek:[248000, 335000, 151000], sb:[72000, 87000, 41000]}, frage:true
}),
/* ---------- Theorie Kostenstellenrechnung Großhandel (extra) · Modul-ID K4T ----------
   BAB im Großhandel deuten: Warengruppen als Kostenstellen, Schlüssel, Handlungskostenzuschläge –
   durchgehend Elektrogroßhandel Kalmbach GmbH (WG I Installationsmaterial, WG II Leuchten, WG III Hausgeräte). */
{
  id:'TB1', modul:'K4T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Wareneinsatz und Handlungskosten im BAB',
  tags:['Kostenstellenrechnung','Theorie','Einzel- und Gemeinkosten'],
  text:'Die Elektrogroßhandel Kalmbach GmbH erstellt einen BAB mit den Kostenstellen WG I Installationsmaterial, WG II Leuchten und WG III Hausgeräte. Die Auszubildende Lea fragt, warum der Wareneinsatz nicht wie Miete und Gehälter im BAB verteilt wird.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der Wareneinsatz ist Einzelkosten: Aus der Warenwirtschaft ist genau bekannt, welche Waren welcher Warengruppe verkauft wurden.', richtig:true,
     weg:'Einzelkosten lassen sich direkt zurechnen – dafür braucht man keinen Schlüssel.'},
    {text:'Miete, Gehälter, Abschreibungen und Energie sind Handlungskosten (Gemeinkosten) und werden im BAB auf die Warengruppen verteilt.', richtig:true,
     weg:'Sie fallen für mehrere Warengruppen gemeinsam an und werden über Belege oder Schlüssel zugeordnet.'},
    {text:'Der Wareneinsatz der Warengruppe dient als Zuschlagsgrundlage für den Handlungskostenzuschlag.', richtig:true,
     weg:'Handlungskostenzuschlag = Handlungskosten der Warengruppe ÷ Wareneinsatz der Warengruppe × 100.'},
    {text:'Wareneinsatz sind alle in der Periode eingekauften Waren, auch die noch im Lager liegenden.',
     fehler:'Wareneinsatz ist der Bezugspreis der verkauften Waren. Eingekaufte, aber noch nicht verkaufte Waren erhöhen den Bestand, nicht den Wareneinsatz.'},
    {text:'Der Wareneinsatz wird im BAB nach der Lagerfläche auf die Warengruppen verteilt.',
     fehler:'Einzelkosten werden nicht geschlüsselt – sie sind den Warengruppen direkt zurechenbar und stehen gar nicht im Verteilungsteil des BAB.'}
  ],
  hinweise:['Einzelkosten: direkt zurechenbar. Gemeinkosten: nur über Schlüssel oder Belege.', 'Wareneinsatz = Bezugspreis der verkauften Waren.', 'Worauf bezieht sich der Handlungskostenzuschlag?'],
  merke:'Im Großhandel ist der Wareneinsatz Einzelkosten und Zuschlagsgrundlage. Die Handlungskosten sind Gemeinkosten, werden im BAB auf die Warengruppen verteilt und ergeben je Warengruppe einen Handlungskostenzuschlag.'
},
{
  id:'TB2', modul:'K4T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Den passenden Schlüssel wählen',
  tags:['Kostenstellenrechnung','Theorie','Verteilungsschlüssel'],
  text:'Die Kalmbach GmbH legt die Verteilungsschlüssel für ihren BAB neu fest. Zur Auswahl stehen: Fläche in m², Umsatz, Zahl der Mitarbeiter, Zahl der Lagerbewegungen (Ein- und Auslagerungen).',
  frage:'Welche Zuordnungen sind sachgerecht?',
  optionen:[
    {text:'Miete (670) und Heizung des Lagers und der Ausstellung nach der genutzten Fläche', richtig:true,
     weg:'Wer mehr Fläche belegt, verursacht mehr Miete und Heizkosten.'},
    {text:'Kosten der Gabelstapler und Hilfslöhne im Lager nach der Zahl der Lagerbewegungen', richtig:true,
     weg:'Jede Ein- und Auslagerung beansprucht Stapler und Lagerpersonal – Kleinteile mit vielen Bewegungen verursachen mehr als wenige große Geräte.'},
    {text:'Gehälter (63) nach der Zahl der Mitarbeiter je Warengruppe – oder direkt laut Gehaltsliste', richtig:true,
     weg:'Die Gehälter hängen von den Beschäftigten ab. Wenn bekannt ist, wer in welcher Warengruppe arbeitet, ist die direkte Zuordnung noch genauer.'},
    {text:'Miete nach dem Umsatz, weil umsatzstarke Warengruppen die Miete besser tragen können',
     fehler:'Das ist Tragfähigkeit, nicht Verursachung. Die Miete hängt an der Fläche – eine umsatzstarke Warengruppe mit wenig Fläche würde zu stark belastet.'},
    {text:'Abschreibungen auf die Auslieferungs-Lkw (650) nach der Zahl der Mitarbeiter',
     fehler:'Die Lkw werden durch Auslieferungen beansprucht, nicht durch Mitarbeiterzahlen. Sachgerechter wären z. B. Lieferungen, gefahrene Kilometer oder Ladungsgewicht.'}
  ],
  hinweise:['Leitfrage: Welche Größe verursacht die Kosten?', 'Fläche, Bewegungen, Köpfe – was passt zu Miete, Staplern, Gehältern?', '„Kann es sich leisten“ ist kein Verursachungsprinzip.'],
  merke:'Verteilungsschlüssel sollen die Verursachung abbilden: Raumkosten nach Fläche, Personalkosten nach Mitarbeitern oder Gehaltsliste, Lagerkosten nach Lagerbewegungen. Umsatz ist nur ein Notbehelf, z. B. für Werbung.'
},
{
  id:'TB3', modul:'K4T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Drei Warengruppen, drei Zuschläge',
  tags:['Kostenstellenrechnung','Theorie','Zuschlagssätze'],
  text:'Der BAB der Kalmbach GmbH ergibt:'
    + ghTab(['', 'Handlungskosten', 'Wareneinsatz'], [['WG I Installationsmaterial', '90.000 €', '450.000 €'], ['WG II Leuchten', '105.000 €', '300.000 €'], ['WG III Hausgeräte', '75.000 €', '500.000 €']]),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die Handlungskostenzuschläge betragen 20 % (WG I), 35 % (WG II) und 15 % (WG III).', richtig:true,
     weg:'90.000 € ÷ 450.000 € × 100 = 20 %; 105.000 € ÷ 300.000 € × 100 = 35 %; 75.000 € ÷ 500.000 € × 100 = 15 %.'},
    {text:'Ein Zuschlag von 35 % bedeutet: Auf je 100 € Wareneinsatz entfallen in WG II 35 € Handlungskosten.', richtig:true,
     weg:'Der Zuschlag ist das Verhältnis von Handlungskosten zu Wareneinsatz.'},
    {text:'Leuchten brauchen viel Ausstellungsfläche und Beratung bei vergleichsweise niedrigem Warenwert – das erklärt den hohen Zuschlag.', richtig:true,
     weg:'Viel Fläche und Personal (Zähler hoch) bei relativ kleinem Wareneinsatz (Nenner klein) ergibt einen hohen Prozentsatz.'},
    {text:'WG II ist die unwirtschaftlichste Warengruppe und sollte aufgegeben werden.',
     fehler:'Der Zuschlag sagt nur, wie viel Handlungskosten auf den Wareneinsatz kommen. Ob WG II Gewinn bringt, hängt von den erzielten Verkaufspreisen ab – die stehen nicht im BAB.'},
    {text:'Der Zuschlag von WG III ist niedrig, weil dort der Wareneinsatz am niedrigsten ist.',
     fehler:'Umgekehrt: WG III hat mit 500.000 € den höchsten Wareneinsatz. Ein großer Nenner bei geringen Handlungskosten macht den Zuschlag klein.'}
  ],
  hinweise:['Handlungskostenzuschlag = Handlungskosten ÷ Wareneinsatz × 100.', 'Was verursacht bei Leuchten bzw. bei Hausgeräten Handlungskosten – und wie teuer ist die Ware?', 'Ein Zuschlag ist ein Kostenmaß, kein Gewinnmaß.'],
  merke:'Warengruppen beanspruchen Fläche, Personal und Lager unterschiedlich stark. Deshalb ermittelt der Großhandel je Warengruppe einen eigenen Handlungskostenzuschlag.'
},
{
  id:'TB4', modul:'K4T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Zuschlag der Leuchten steigt',
  tags:['Kostenstellenrechnung','Theorie','Zuschlagssätze'],
  text:'Der Handlungskostenzuschlag der WG II Leuchten ist gestiegen:'
    + ghTab(['', 'Vorjahr', 'dieses Jahr'], [['Handlungskosten', '98.000 €', '105.000 €'], ['Wareneinsatz', '350.000 €', '300.000 €'], ['Handlungskostenzuschlag', '28 %', '35 %']]),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der Anstieg kommt vor allem vom gesunkenen Wareneinsatz: Schon mit den Handlungskosten des Vorjahres läge der Zuschlag jetzt deutlich über 28 %.', richtig:true,
     weg:'98.000 € auf nur noch 300.000 € Wareneinsatz statt 350.000 € – der Nenner ist kleiner, der Zuschlag also höher (rund 32,7 %). Es wurden weniger Leuchten verkauft, die Kosten für Ausstellung und Personal sind aber kaum gesunken.'},
    {text:'Zusätzlich sind die Handlungskosten um 7.000 € gestiegen, z. B. durch höhere Gehälter oder Energiekosten.', richtig:true,
     weg:'105.000 € − 98.000 € = 7.000 €. Höhere Kosten im Zähler erhöhen den Zuschlag zusätzlich.'},
    {text:'Kalkuliert die Kalmbach GmbH weiter mit 28 %, verrechnet sie zu wenig Handlungskosten – sie muss Preise, Kosten oder Absatz der Leuchten überprüfen.', richtig:true,
     weg:'Wer weiter mit 28 % kalkuliert, verrechnet zu wenig Handlungskosten. Höhere Preise sind aber nur möglich, wenn der Markt sie hergibt.'},
    {text:'Der steigende Zuschlag zeigt, dass die Einkaufspreise für Leuchten gestiegen sind.',
     fehler:'Teurere Ware erhöht den Wareneinsatz (Nenner) – der Zuschlag würde bei gleichen Handlungskosten sinken.'},
    {text:'Ein höherer Zuschlag bedeutet automatisch mehr Gewinn, weil mehr auf die Ware aufgeschlagen wird.',
     fehler:'Der Zuschlag deckt nur Kosten. Er steigt, weil Kosten je Euro Wareneinsatz steigen – das verschlechtert eher die Lage.'}
  ],
  hinweise:['Zuschlag = Handlungskosten ÷ Wareneinsatz × 100 – Zähler und Nenner getrennt betrachten.', 'Was passiert mit einem Bruch, wenn der Nenner kleiner wird?', 'Steigende Einkaufspreise wirken auf den Nenner.'],
  merke:'Ein Handlungskostenzuschlag steigt, wenn die Handlungskosten der Warengruppe steigen oder ihr Wareneinsatz sinkt. Höhere Einkaufspreise senken den Satz bei gleichen Kosten.'
},
{
  id:'TB5', modul:'K4T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Miete nach Umsatz verteilt',
  tags:['Kostenstellenrechnung','Theorie','Verteilungsschlüssel'],
  text:'Die Kalmbach GmbH hat die Miete von 60.000 € bisher nach dem Umsatz verteilt.'
    + ghTab(['', 'Umsatz', 'genutzte Fläche'], [['WG I Installationsmaterial', '600.000 €', '1.000 m²'], ['WG II Leuchten (großer Showroom)', '450.000 €', '2.000 m²'], ['WG III Hausgeräte', '750.000 €', '1.000 m²']])
    + 'Wareneinsatz der WG II: 300.000 €.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Nach Umsatz erhält WG II 15.000 € Miete, nach Fläche wären es 30.000 € – ihr Zuschlag ist um 5 Prozentpunkte zu niedrig.', richtig:true,
     weg:'Umsatz: 60.000 € × 450.000 ÷ 1.800.000 = 15.000 €. Fläche: 60.000 € × 2.000 ÷ 4.000 = 30.000 €. Differenz 15.000 € ÷ 300.000 € × 100 = 5 Prozentpunkte.'},
    {text:'Die Leuchten werden zu billig kalkuliert – ihr tatsächlicher Kostenanteil wird von den anderen Warengruppen mitgetragen.', richtig:true,
     weg:'Ein zu niedriger Zuschlag führt zu zu niedrigen Angebotspreisen.'},
    {text:'WG III wird mit 10.000 € zu viel Miete belastet; Hausgeräte werden zu teuer angeboten und verlieren womöglich Kunden an Mitbewerber.', richtig:true,
     weg:'Umsatz: 60.000 € × 750.000 ÷ 1.800.000 = 25.000 €; Fläche: 60.000 € × 1.000 ÷ 4.000 = 15.000 €; Differenz 10.000 €.'},
    {text:'WG I wird nach dem Umsatzschlüssel zu niedrig belastet.',
     fehler:'Umsatz: 60.000 € × 600.000 ÷ 1.800.000 = 20.000 €; Fläche: 15.000 €. WG I trägt also 5.000 € zu viel, nicht zu wenig.'},
    {text:'Durch den falschen Schlüssel steigen die gesamten Handlungskosten der Kalmbach GmbH.',
     fehler:'Ein Schlüssel verteilt nur – die Summe bleibt 60.000 €. Falsch ist allein die Zuordnung zu den Warengruppen.'}
  ],
  hinweise:['Rechne die Miete je Warengruppe einmal nach Umsatz und einmal nach Fläche.', 'Gesamtumsatz 1.800.000 €, Gesamtfläche 4.000 m².', 'Ein zu niedriger Zuschlag führt zu welchen Preisen?'],
  merke:'Ein falscher Schlüssel ändert nicht die Summe der Handlungskosten, aber ihre Verteilung. Die Folge sind falsche Zuschläge: Manche Warengruppen werden zu billig, andere zu teuer kalkuliert.'
},
{
  id:'TB6', modul:'K4T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Ein Zuschlag für alle?',
  tags:['Kostenstellenrechnung','Theorie','Zuschlagssätze'],
  text:'Der Vertriebsleiter der Kalmbach GmbH schlägt vor, statt der drei Zuschläge nur noch einen Durchschnittszuschlag zu verwenden.'
    + ghTab(null, [['Zuschlag WG I Installationsmaterial', '20 %'], ['Zuschlag WG II Leuchten', '35 %'], ['Zuschlag WG III Hausgeräte', '15 %'], ['Handlungskosten gesamt', '270.000 €'], ['Wareneinsatz gesamt', '1.250.000 €']]),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der Durchschnittszuschlag beträgt 21,6 %.', richtig:true,
     weg:'270.000 € ÷ 1.250.000 € × 100 = 21,6 %.'},
    {text:'Eine Waschmaschine mit 400 € Bezugspreis würde mit 86,40 € statt 60,00 € Handlungskosten belastet – sie würde um 26,40 € zu teuer kalkuliert.', richtig:true,
     weg:'400 € × 21,6 % = 86,40 €; 400 € × 15 % = 60,00 €; Differenz 26,40 €.'},
    {text:'Leuchten würden mit dem Durchschnittssatz zu billig angeboten, weil ihr tatsächlicher Zuschlag 35 % beträgt.', richtig:true,
     weg:'21,6 % < 35 % – ein Teil der Handlungskosten der Leuchten würde den anderen Warengruppen angelastet.'},
    {text:'Mit dem Durchschnittszuschlag werden insgesamt weniger Handlungskosten verrechnet.',
     fehler:'Bei gleichem Wareneinsatz werden genau 21,6 % × 1.250.000 € = 270.000 € verrechnet. Insgesamt stimmt die Summe – nur die Verteilung auf die Waren ist falsch.'},
    {text:'Der Durchschnittszuschlag ist genauer, weil er auf mehr Zahlen beruht.',
     fehler:'Mehr Zahlen machen ihn nicht genauer – er verwischt gerade die Unterschiede zwischen den Warengruppen.'}
  ],
  hinweise:['Durchschnittszuschlag = gesamte Handlungskosten ÷ gesamter Wareneinsatz × 100.', 'Vergleiche je Warengruppe: Wo liegt der Durchschnitt darüber, wo darunter?', 'Ändert sich die Summe der verrechneten Handlungskosten?'],
  merke:'Ein Durchschnittszuschlag verteilt die Handlungskosten pauschal. Warengruppen mit niedrigen Kosten werden zu teuer, solche mit hohen Kosten zu billig kalkuliert. Differenzierte Zuschläge je Warengruppe sind verursachungsgerechter.'
},
{
  id:'TB7', modul:'K4T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Direkt zuordnen oder schlüsseln?',
  tags:['Kostenstellenrechnung','Theorie','Verteilungsschlüssel'],
  text:'Bei der Erstellung des BAB prüft die Kalmbach GmbH, welche Handlungskosten sie direkt einer Warengruppe zuordnen kann und welche sie schlüsseln muss.',
  frage:'Welche Handlungskosten lassen sich direkt einer Warengruppe zuordnen?',
  optionen:[
    {text:'Gehalt der Lichtplanerin, die ausschließlich Leuchtenkunden berät', richtig:true,
     weg:'Laut Gehaltsliste fällt das Gehalt nur für WG II an – direkte Zuordnung per Beleg.'},
    {text:'Abschreibung auf ein Schwerlastregal, das nur für Hausgeräte genutzt wird', richtig:true,
     weg:'Das Regal dient nur WG III – die Abschreibung lässt sich ohne Schlüssel zuordnen.'},
    {text:'Miete für das gemeinsame Zentrallager',
     fehler:'Das Lager wird von allen Warengruppen genutzt – die Miete muss geschlüsselt werden, z. B. nach Fläche.'},
    {text:'Stromkosten des Gesamtgebäudes ohne eigene Zähler je Warengruppe',
     fehler:'Ohne Zähler weiß man nicht, wer wie viel verbraucht – also Schlüssel, z. B. nach Fläche.'}
  ],
  hinweise:['Gibt es einen Beleg, der eindeutig eine Warengruppe nennt?', 'Kosten, die mehrere Warengruppen gemeinsam verursachen, brauchen einen Schlüssel.', 'Auch direkt zugeordnete Handlungskosten bleiben Gemeinkosten der Ware – nur die Stelle ist klar.'],
  merke:'Handlungskosten, die nachweislich nur eine Warengruppe betreffen, werden direkt per Beleg zugeordnet. Nur gemeinsam verursachte Handlungskosten werden geschlüsselt – das macht den BAB genauer.'
},
{
  id:'TB8', modul:'K4T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Mit dem Zuschlag kalkulieren',
  tags:['Kostenstellenrechnung','Theorie','Zuschlagssätze','Kalkulation'],
  text:'Ein Großkunde möchte bei der Kalmbach GmbH eine Stehleuchte der WG II kaufen.'
    + ghTab(null, [['Bezugspreis', '180 €'], ['Handlungskostenzuschlag WG II', '35 %'], ['vom Kunden gebotener Barverkaufspreis', '230 €']]),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die Handlungskosten betragen 63 €, die Selbstkosten 243 €.', richtig:true,
     weg:'180 € × 35 % = 63 €; 180 € + 63 € = 243 €.'},
    {text:'Beim Barverkaufspreis von 230 € deckt die Leuchte ihre vollen Kosten nicht – es fehlen 13 €.', richtig:true,
     weg:'230 € − 243 € = −13 €.'},
    {text:'Grundlage des Zuschlags ist der Bezugspreis, nicht der Listeneinkaufspreis.', richtig:true,
     weg:'Der Wareneinsatz im BAB wird zu Bezugspreisen erfasst – deshalb rechnet man den Zuschlag auch in der Kalkulation vom Bezugspreis.'},
    {text:'Die 63 € fallen für genau diese Leuchte tatsächlich in dieser Höhe an.',
     fehler:'Der Zuschlag ist ein Durchschnittswert der Warengruppe. Die tatsächlichen Handlungskosten einer einzelnen Leuchte lassen sich nicht exakt messen.'},
    {text:'Die Handlungskosten von 63 € bleiben gleich, wenn der Lieferer den Bezugspreis senkt.',
     fehler:'Der Zuschlag wird vom Bezugspreis berechnet: Sinkt der Bezugspreis, sinken auch die zugeschlagenen Handlungskosten – obwohl die tatsächlichen Kosten gleich bleiben können.'}
  ],
  hinweise:['Bezugspreis + Handlungskosten = Selbstkosten.', 'Vergleiche Barverkaufspreis und Selbstkosten.', 'Woher stammt der Zuschlagssatz – und wie genau ist er?'],
  merke:'Der Handlungskostenzuschlag aus dem BAB wird in der Kalkulation auf den Bezugspreis aufgeschlagen. Er verteilt die Handlungskosten im Durchschnitt – das Ergebnis ist so gut wie der BAB, aus dem er stammt.'
},
/* ---------- Modul 6 · Vorwärtskalkulation (Handel) ---------- */
hkalk({
  id:'VK1', stufe:1, art:'vor', titel:'Vom Bezugspreis zum Listenverkaufspreis', firma:'Elektrogroßhandlung Kalmbach GmbH',
  artikel:'eine Pendelleuchte', wg:'Warengruppe Leuchten', bzp:84, hk:34.8, gewinn:12, skonto:2, rabatt:15
}),
hkalk({
  id:'VK2', stufe:1, art:'vor', titel:'Kiste Apfelschorle', firma:'Getränkegroßhandlung Brausewind GmbH',
  artikel:'eine Kiste Apfelschorle', wg:'Warengruppe Wasser und Säfte', bzp:11.40, hk:25.1, gewinn:8, skonto:3, rabatt:10
}),
hkalk({
  id:'VK3', stufe:2, art:'vor', start:'lep', titel:'Mit Bezugskalkulation', firma:'Sanitärgroßhandlung Keller GmbH',
  artikel:'ein Wand-WC', wg:'Warengruppe Sanitärkeramik', angaben:'Der Listeneinkaufspreis beträgt 420,00 €, der Lieferer gewährt 20 % Rabatt und 3 % Skonto, die Bezugskosten betragen 6,50 € je Stück.', lep:420, lrab:20, lsko:3, bzk:6.50, hk:20, gewinn:10, skonto:2, rabatt:20
}),
hkalk({
  id:'VK4', stufe:2, art:'vor', start:'lep', titel:'Mit Vertreterprovision', firma:'Büromöbelgroßhandlung Seidel GmbH',
  artikel:'einen Schreibtisch', wg:'Warengruppe Büromöbel', angaben:'Der Listeneinkaufspreis beträgt 680,00 €, der Lieferer gewährt 25 % Rabatt und 2 % Skonto, die Bezugskosten betragen 18,00 €.', lep:680, lrab:25, lsko:2, bzk:18, hk:24.3, gewinn:15, skonto:2, prov:5, rabatt:10
}),
/* Wirtschaftsgymnasium (05.11.2026): ohne Vertreterprovision und ohne verkürzte Verfahren */
hkalk({
  id:'VK6', stufe:2, art:'vor', start:'lep', titel:'Bezugs- und Verkaufskalkulation · Fahrradhelm', firma:'Sportgroßhandlung Kraft GmbH',
  artikel:'einen Fahrradhelm', wg:'Warengruppe Radsport', angaben:'Der Listeneinkaufspreis beträgt 60,00 €, der Lieferer gewährt 15 % Rabatt und 2 % Skonto, die Bezugskosten betragen 1,80 € je Stück.', lep:60, lrab:15, lsko:2, bzk:1.80, hk:28, gewinn:10, skonto:2, rabatt:15
}),
hkalk({
  id:'VK7', stufe:3, art:'vor', start:'lep', titel:'Bezugs- und Verkaufskalkulation · Kaffeevollautomat', firma:'Elektrogroßhandlung Kalmbach GmbH',
  artikel:'einen Kaffeevollautomaten', wg:'Warengruppe Haushaltsgeräte', angaben:'Der Listeneinkaufspreis beträgt 480,00 €, der Lieferer gewährt 20 % Rabatt und 3 % Skonto, die Bezugskosten betragen 9,60 € je Stück.', lep:480, lrab:20, lsko:3, bzk:9.60, hk:31.5, gewinn:12, skonto:3, rabatt:20
}),
hkalk({
  id:'VK5', stufe:3, art:'vor', start:'lep', kennzahlen:true, titel:'Kalkulation und Kennzahlen', firma:'Büromöbelgroßhandlung Seidel GmbH',
  artikel:'einen Aktenvernichter', wg:'Warengruppe Bürobedarf', angaben:'Der Listeneinkaufspreis beträgt 54,00 €, der Lieferer gewährt 10 % Rabatt und 2 % Skonto, die Bezugskosten betragen 1,20 €.', lep:54, lrab:10, lsko:2, bzk:1.20, hk:42.4, gewinn:8, skonto:3, rabatt:15
}),
/* ---------- Modul 8 · Differenzkalkulation (Handel) ---------- */
hkalk({
  id:'DK1', stufe:1, art:'diff', titel:'Gewinn bei vorgegebenem Preis', firma:'Elektrogroßhandlung Kalmbach GmbH',
  artikel:'eine Deckenleuchte', wg:'Warengruppe Leuchten', angaben:'Der Bezugspreis beträgt 62,00 €.', bzp:62, hk:34.8, skonto:2, rabatt:15, lvp:119
}),
hkalk({
  id:'DK2', stufe:2, art:'diff', titel:'Reicht der Marktpreis?', firma:'Getränkegroßhandlung Brausewind GmbH',
  artikel:'eine Kiste Pils', wg:'Warengruppe Bier', angaben:'Der Bezugspreis beträgt 13,90 €.', bzp:13.90, hk:25.6, skonto:3, rabatt:10, lvp:19.50,
  merke:'Ein negatives Ergebnis in der Differenzkalkulation heißt: Zum Marktpreis werden nicht alle Kosten gedeckt. Kurzfristig kann der Artikel trotzdem sinnvoll sein, wenn der Barverkaufspreis über den variablen Kosten (Bezugspreis + variable Handlungskosten) liegt.'
}),
hkalk({
  id:'DK3', stufe:2, art:'diff', start:'lep', titel:'Mit Bezugskalkulation', firma:'Sanitärgroßhandlung Keller GmbH',
  artikel:'einen Waschtisch', wg:'Warengruppe Sanitärkeramik', angaben:'Der Listeneinkaufspreis beträgt 260,00 €, der Lieferer gewährt 30 % Rabatt und 2 % Skonto, die Bezugskosten betragen 5,00 €.', lep:260, lrab:30, lsko:2, bzk:5, hk:20, skonto:2, rabatt:15, lvp:310
}),
hkalk({
  id:'DK4', stufe:3, art:'diff', start:'lep', titel:'Preiserhöhung des Lieferers', firma:'Büromöbelgroßhandlung Seidel GmbH',
  artikel:'einen Rollcontainer', wg:'Warengruppe Büromöbel', angaben:'Der Lieferer hat den Listeneinkaufspreis auf 185,00 € erhöht; er gewährt 20 % Rabatt und 2 % Skonto, die Bezugskosten betragen 6,00 €.', lep:185, lrab:20, lsko:2, bzk:6, hk:24.3, skonto:2, prov:5, rabatt:10, lvp:229
}),
/* ---------- Modul 7 · Rückwärtskalkulation (Handel) ---------- */
hkalk({
  id:'RK1', stufe:1, art:'rueck', ziel:'bzp', titel:'Höchster Bezugspreis', firma:'Werkzeuggroßhandlung Brenner KG',
  artikel:'einen Akku-Bohrschrauber', wg:'Warengruppe Elektrowerkzeuge', lvp:129, hk:13.8, gewinn:10, skonto:2, rabatt:15
}),
hkalk({
  id:'RK2', stufe:2, art:'rueck', ziel:'bzp', titel:'Höchster Bezugspreis mit Provision', firma:'Büromöbelgroßhandlung Seidel GmbH',
  artikel:'einen Bürodrehstuhl', wg:'Warengruppe Büromöbel', lvp:398, hk:24.3, gewinn:12, skonto:3, prov:4, rabatt:20
}),
hkalk({
  id:'RK3', stufe:3, art:'rueck', ziel:'lep', titel:'Höchster Listeneinkaufspreis', firma:'Sanitärgroßhandlung Keller GmbH',
  artikel:'eine Thermostatarmatur', wg:'Warengruppe Armaturen', angaben:'Der Lieferer gewährt 25 % Rabatt und 2 % Skonto, die Bezugskosten betragen 4,50 € je Stück.', lvp:249, rabatt:20, skonto:3, gewinn:8, hk:25, bzk:4.50, lsko:2, lrab:25
}),
hkalk({
  id:'RK4', stufe:3, art:'rueck', ziel:'lep', titel:'Einkaufsverhandlung vorbereiten', firma:'Getränkegroßhandlung Brausewind GmbH',
  artikel:'einen Karton Rotwein', wg:'Warengruppe Wein und Spirituosen', angaben:'Der Lieferer gewährt 10 % Rabatt und 3 % Skonto, die Bezugskosten betragen 1,80 € je Karton.', lvp:72, rabatt:10, skonto:2, gewinn:12, hk:20, bzk:1.80, lsko:3, lrab:10,
  merke:'Die Rückwärtskalkulation zeigt, welchen Listeneinkaufspreis der Einkauf höchstens akzeptieren darf, damit der Marktpreis den geplanten Gewinn bringt.'
}),
/* ---------- Theorie Handelskalkulation (extra) · Modul-ID K8RT ----------
   Bezugs- und Verkaufskalkulation, Rückwärts- und Differenzkalkulation, Kalkulationszuschlag, -faktor, Handelsspanne,
   Fremdwährung und Zoll, Mischkalkulation deuten – durchgehend Getränkegroßhandel Brausewind GmbH. */
{
  id:'TC1', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Vom, im und auf Hundert',
  tags:['Handelskalkulation','Theorie','Prozentrechnung'],
  text:'In der Verkaufskalkulation der Brausewind GmbH werden Handlungskosten und Gewinn vom Hundert berechnet, Kundenskonto und Kundenrabatt dagegen im Hundert. Für einen Karton Sekt gilt:'
    + ghTab(null, [['Gewinnzuschlag', '10 %'], ['Barverkaufspreis', '49,00 €'], ['Kundenskonto', '2 %']]),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der Gewinn bezieht sich auf die Selbstkosten – sie sind der Grundwert (100 %), deshalb vom Hundert.', richtig:true,
     weg:'10 % Gewinn heißt: 10 % der Selbstkosten kommen obendrauf.'},
    {text:'Der Kunde zieht den Skonto vom Rechnungsbetrag (Zielverkaufspreis) ab. Dieser ist 100 %, der Barverkaufspreis nur 98 % – der Zielverkaufspreis beträgt 50,00 €.', richtig:true,
     weg:'49,00 € ÷ 98 × 100 = 50,00 €. Probe: 50,00 € − 2 % (1,00 €) = 49,00 €.'},
    {text:'Rechnet man rückwärts vom Barverkaufspreis auf die Selbstkosten, wird der Gewinn auf Hundert herausgerechnet: Der Barverkaufspreis entspricht 110 % der Selbstkosten.', richtig:true,
     weg:'Bei 10 % Gewinn ist der Barverkaufspreis der vermehrte Grundwert (110 %) – Selbstkosten = Barverkaufspreis ÷ 110 × 100.'},
    {text:'Der Zielverkaufspreis beträgt 49,00 € + 2 % = 49,98 €.',
     fehler:'Dann würde der Skonto vom Barverkaufspreis berechnet. Zieht der Kunde 2 % von 49,98 € ab, bleiben nur 48,98 € – der geplante Barverkaufspreis wird verfehlt.'},
    {text:'Skonto und Rabatt werden im Hundert gerechnet, weil sie freiwillig gewährt werden.',
     fehler:'Freiwillig oder nicht – entscheidend ist, von welchem Betrag der Kunde den Nachlass abzieht.'}
  ],
  hinweise:['Frag bei jedem Prozentsatz: Welcher Betrag ist 100 %?', 'Vom Hundert: Grundwert bekannt. Im Hundert: verminderter Grundwert bekannt. Auf Hundert: vermehrter Grundwert bekannt.', 'Den Skonto zieht der Kunde vom höheren Betrag ab.'],
  merke:'Vom Hundert: Handlungskosten und Gewinn (der untere Betrag ist 100 %). Im Hundert: Kundenskonto und Kundenrabatt (der obere Betrag, den der Kunde sieht, ist 100 %). Auf Hundert: Rückrechnung vom vermehrten Grundwert, z. B. Selbstkosten aus dem Barverkaufspreis.'
},
{
  id:'TC2', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Lieferer- und Kundenkonditionen',
  tags:['Handelskalkulation','Theorie','Rabatt und Skonto'],
  text:'Die Brausewind GmbH kauft bei einer Brauerei ein und verkauft an Gastronomiekunden.'
    + ghTab(['', 'Rabatt', 'Skonto'], [['Brauerei gewährt der Brausewind GmbH', '15 %', '2 %'], ['Brausewind GmbH gewährt ihren Gastronomiekunden', '10 %', '3 %']]),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Liefererrabatt und Liefererskonto werden in der Bezugskalkulation abgezogen und senken den Bezugspreis.', richtig:true,
     weg:'Listeneinkaufspreis − Liefererrabatt = Zieleinkaufspreis − Liefererskonto = Bareinkaufspreis.'},
    {text:'Kundenrabatt und Kundenskonto werden in der Verkaufskalkulation aufgeschlagen, damit nach den Abzügen des Kunden der Barverkaufspreis übrig bleibt.', richtig:true,
     weg:'Der Kunde zieht sie vom Angebotspreis ab – deshalb müssen sie vorher einkalkuliert werden.'},
    {text:'Den Liefererskonto darf die Brausewind GmbH nur ansetzen, wenn sie die Rechnungen tatsächlich innerhalb der Skontofrist bezahlt.', richtig:true,
     weg:'Wer die Frist verstreichen lässt, zahlt den Zieleinkaufspreis – der Bareinkaufspreis wäre dann zu niedrig angesetzt.'},
    {text:'Der Kundenskonto senkt den Bezugspreis der Waren.',
     fehler:'Der Bezugspreis entsteht beim Einkauf. Kundenskonto ist eine Kondition auf der Verkaufsseite.'},
    {text:'Weil die Brausewind GmbH selbst 15 % Rabatt bekommt, kann sie ihren Kunden 15 % Rabatt geben, ohne dass sich ihr Gewinn ändert.',
     fehler:'Einkaufs- und Verkaufsrabatt beziehen sich auf verschiedene Preise und Stufen der Kalkulation. Mehr Kundenrabatt bei gleichem Listenverkaufspreis senkt den Barverkaufspreis und damit den Gewinn.'}
  ],
  hinweise:['Bezugskalkulation: Was bekommt die Brausewind GmbH? Verkaufskalkulation: Was gibt sie?', 'Abziehen beim Einkauf, einkalkulieren beim Verkauf.', 'Skonto setzt pünktliche Zahlung voraus.'],
  merke:'Liefererkonditionen mindern den Bezugspreis (vom Hundert abziehen). Kundenkonditionen werden auf den Barverkaufspreis aufgeschlagen (im Hundert), damit sie dem Kunden gewährt werden können, ohne den Gewinn zu schmälern.'
},
{
  id:'TC3', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Was sind Bezugskosten?',
  tags:['Handelskalkulation','Theorie','Bezugskalkulation'],
  text:'Die Brausewind GmbH kauft Mineralwasser zu einem Bareinkaufspreis von 9,80 € je Kasten. Für die Anlieferung vom Brunnen ins eigene Lager berechnet eine Spedition 0,45 € je Kasten.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Fracht und Rollgeld vom Lieferer bis ins eigene Lager sind Bezugskosten.', richtig:true,
     weg:'Sie entstehen, um die Ware zu beschaffen – sie gehören zum Einstandspreis.'},
    {text:'Auch eine Transportversicherung für die Anlieferung gehört zu den Bezugskosten.', richtig:true,
     weg:'Sie fällt beim Einkauf an und erhöht die Kosten der beschafften Ware.'},
    {text:'Der Bezugspreis beträgt 10,25 € je Kasten.', richtig:true,
     weg:'9,80 € + 0,45 € = 10,25 €.'},
    {text:'Die Kosten für die Auslieferung der Kästen an Gastronomiekunden sind Bezugskosten.',
     fehler:'Auslieferung an Kunden ist Vertrieb – diese Kosten gehören zu den Handlungskosten, nicht zum Bezugspreis.'},
    {text:'Bei Importen aus Nicht-EU-Ländern gehört auch der Zoll zu den Bezugskosten.', richtig:true,
     weg:'Zoll fällt beim Einkauf an und ist – anders als die Einfuhrumsatzsteuer – nicht als Vorsteuer abziehbar.'}
  ],
  hinweise:['Bezugskosten fallen auf dem Weg vom Lieferer ins eigene Lager an.', 'Bareinkaufspreis + Bezugskosten = Bezugspreis.', 'Kosten auf dem Weg zum Kunden gehören woandershin.'],
  merke:'Bezugskosten (Fracht, Rollgeld, Transportversicherung, Zoll) entstehen beim Einkauf und werden zum Bareinkaufspreis addiert. Vertriebskosten zum Kunden sind Handlungskosten.'
},
{
  id:'TC4', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Höchster Listeneinkaufspreis',
  tags:['Handelskalkulation','Theorie','Rückwärtskalkulation'],
  text:'Für einen Rotwein lässt der Markt nur einen Listenverkaufspreis von 20,00 € je Flasche zu. Ein Weingut bietet die Flasche zu 13,20 € (Listeneinkaufspreis) an. Der Einkäufer der Brausewind GmbH hat mit den üblichen Kalkulationssätzen zurückgerechnet:'
    + '<table class="lager"><tr><td>Listenverkaufspreis</td><td></td><td class="z">20,00 €</td></tr>'
    + '<tr><td>− Kundenrabatt</td><td class="z">25 %</td><td class="z">5,00 €</td></tr><tr><td>= Zielverkaufspreis</td><td></td><td class="z">15,00 €</td></tr>'
    + '<tr><td>− Kundenskonto</td><td class="z">2 %</td><td class="z">0,30 €</td></tr><tr><td>= Barverkaufspreis</td><td></td><td class="z">14,70 €</td></tr>'
    + '<tr><td>− Gewinn</td><td class="z">5 %</td><td class="z">0,70 €</td></tr><tr><td>= Selbstkosten</td><td></td><td class="z">14,00 €</td></tr>'
    + '<tr><td>− Handlungskosten</td><td class="z">25 %</td><td class="z">2,80 €</td></tr><tr><td>= Bezugspreis</td><td></td><td class="z">11,20 €</td></tr>'
    + '<tr><td>− Bezugskosten</td><td></td><td class="z">0,42 €</td></tr><tr><td>= Bareinkaufspreis</td><td></td><td class="z">10,78 €</td></tr>'
    + '<tr><td>+ Liefererskonto</td><td class="z">2 %</td><td class="z">0,22 €</td></tr><tr><td>= Zieleinkaufspreis</td><td></td><td class="z">11,00 €</td></tr>'
    + '<tr><td>+ Liefererrabatt</td><td class="z">12 %</td><td class="z">1,50 €</td></tr><tr class="rahmen"><td><b>= Listeneinkaufspreis (höchstens)</b></td><td></td><td class="z"><b>12,50 €</b></td></tr></table>',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Das Angebot von 13,20 € ist zu teuer – bei unveränderten Kalkulationssätzen würde der geplante Gewinn verfehlt.', richtig:true,
     weg:'13,20 € liegen über dem höchsten Listeneinkaufspreis von 12,50 €. Die Brausewind GmbH muss nachverhandeln, einen anderen Lieferer suchen oder mit weniger Gewinn leben.'},
    {text:'Geht das Weingut auf 12,50 € herunter, erzielt die Brausewind GmbH genau ihren geplanten Gewinn von 5 %.', richtig:true,
     weg:'12,50 € ist genau der Preis, bei dem die Rechnung mit allen Kalkulationssätzen aufgeht.'},
    {text:'Gewinn und Handlungskosten werden hier auf Hundert herausgerechnet (14,70 € ÷ 1,05; 14,00 € ÷ 1,25), Liefererskonto und Liefererrabatt im Hundert (10,78 € ÷ 0,98; 11,00 € ÷ 0,88).', richtig:true,
     weg:'Barverkaufspreis = 105 % der Selbstkosten, Selbstkosten = 125 % des Bezugspreises (vermehrter Grundwert). Bareinkaufspreis = 98 % des Zieleinkaufspreises, dieser = 88 % des Listeneinkaufspreises (verminderter Grundwert).'},
    {text:'Die Handlungskosten von 2,80 € sind 25 % der Selbstkosten.',
     fehler:'Handlungskosten werden vom Bezugspreis berechnet: 25 % von 11,20 € = 2,80 €. Von den Selbstkosten (14,00 €) wären 25 % ja 3,50 €.'},
    {text:'Die Bezugskosten von 0,42 € werden wie Rabatt und Skonto prozentual herausgerechnet.',
     fehler:'Bezugskosten sind ein fester Betrag je Flasche – sie werden einfach abgezogen.'}
  ],
  hinweise:['Lies das Schema von oben nach unten: Jeder Schritt macht einen Schritt der Vorwärtskalkulation rückgängig.', 'Vergleiche das Angebot mit dem Ergebnis der letzten Zeile.', 'Prüfe, worauf sich jeder Prozentsatz bezieht: auf den Wert darüber oder darunter?'],
  merke:'Die Rückwärtskalkulation startet beim Marktpreis und ermittelt, was die Ware im Einkauf höchstens kosten darf. Liegt das Angebot darüber, muss nachverhandelt oder auf Gewinn verzichtet werden.'
},
{
  id:'TC5', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Einkauf teurer, Verkaufspreis fest',
  tags:['Handelskalkulation','Theorie','Differenzkalkulation'],
  text:'Beim Rotwein steigt der Bezugspreis. Den Listenverkaufspreis kann die Brausewind GmbH wegen der Konkurrenz nicht erhöhen.'
    + ghTab(null, [['Listenverkaufspreis', '20,00 €'], ['Barverkaufspreis (nach 25 % Rabatt und 2 % Skonto)', '14,70 €'], ['Bezugspreis bisher', '11,20 €'], ['Bezugspreis neu', '12,00 €'], ['Handlungskostenzuschlag', '25 %']]),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die Selbstkosten steigen auf 15,00 € – je Flasche entsteht ein Verlust von 0,30 €.', richtig:true,
     weg:'12,00 € + 25 % (3,00 €) = 15,00 €; 14,70 € − 15,00 € = −0,30 €.'},
    {text:'Der Verlust beträgt 2 % der Selbstkosten.', richtig:true,
     weg:'0,30 € ÷ 15,00 € × 100 = 2 %. Der Gewinn wird wie in der Vorwärtskalkulation auf die Selbstkosten bezogen.'},
    {text:'Der Barverkaufspreis liegt noch 2,70 € über dem Bezugspreis – die Flasche trägt also weiter zur Deckung der Handlungskosten bei; dauerhaft muss die Lage aber verbessert werden.', richtig:true,
     weg:'14,70 € − 12,00 € = 2,70 €. Das reicht nicht für die kalkulierten 3,00 € Handlungskosten, ist aber besser als nichts. Ziel: Einkauf nachverhandeln oder Kosten senken.'},
    {text:'Die Handlungskosten bleiben 2,80 € je Flasche, die Selbstkosten also 14,80 €.',
     fehler:'In der Zuschlagskalkulation werden die Handlungskosten vom Bezugspreis berechnet: 25 % von 12,00 € = 3,00 €.'},
    {text:'Weil der Listenverkaufspreis gleich bleibt, bleibt auch der Gewinn von 5 % erhalten.',
     fehler:'Der Gewinn ist die Differenz aus Barverkaufspreis und Selbstkosten. Steigen die Selbstkosten bei festem Preis, schrumpft er – hier bis in den Verlust.'}
  ],
  hinweise:['Differenzkalkulation: vorwärts bis zu den Selbstkosten, rückwärts bis zum Barverkaufspreis, Gewinn = Differenz.', 'Handlungskosten = 25 % vom neuen Bezugspreis.', 'Den Gewinn in % auf die Selbstkosten beziehen.'],
  merke:'Sind Einkaufs- und Verkaufspreis vorgegeben, ermittelt die Differenzkalkulation den Gewinn als Unterschied zwischen Barverkaufspreis und Selbstkosten. Ein negativer Wert zeigt: Mit diesen Konditionen wird die Ware nicht kostendeckend verkauft.'
},
{
  id:'TC6', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Kalkulationszuschlag, -faktor und Handelsspanne',
  tags:['Handelskalkulation','Theorie','Kalkulationszuschlag'],
  text:'Ein Kasten Mineralwasser hat bei der Brausewind GmbH einen Bezugspreis von 8,00 € und einen Listenverkaufspreis von 12,00 €.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der Kalkulationszuschlag beträgt 50 %.', richtig:true,
     weg:'(12,00 € − 8,00 €) ÷ 8,00 € × 100 = 50 %.'},
    {text:'Der Kalkulationsfaktor beträgt 1,5 – der Listenverkaufspreis ergibt sich als Bezugspreis × 1,5.', richtig:true,
     weg:'12,00 € ÷ 8,00 € = 1,5.'},
    {text:'Die Handelsspanne beträgt 33⅓ % – das entspricht 50 ÷ (100 + 50) × 100.', richtig:true,
     weg:'(12,00 € − 8,00 €) ÷ 12,00 € × 100 = 33,33 %. Über die Formel: 50 ÷ 150 × 100 = 33,33 %.'},
    {text:'Kalkulationszuschlag und Handelsspanne sind gleich groß, weil beide auf demselben Unterschiedsbetrag von 4,00 € (Listenverkaufspreis − Bezugspreis) beruhen.',
     fehler:'Der Unterschiedsbetrag ist gleich, aber die Bezugsgröße nicht: Der Kalkulationszuschlag bezieht sich auf den Bezugspreis (8,00 €), die Handelsspanne auf den Listenverkaufspreis (12,00 €).'},
    {text:'Der Kalkulationsfaktor beträgt 0,5.',
     fehler:'0,5 ist der Kalkulationszuschlag als Dezimalzahl. Der Faktor ist 1 + 0,5 = 1,5.'}
  ],
  hinweise:['Kalkulationszuschlag: Unterschied zwischen Listenverkaufspreis und Bezugspreis, bezogen auf den Bezugspreis.', 'Handelsspanne: derselbe Unterschied, bezogen auf den Listenverkaufspreis.', 'Kalkulationsfaktor = Listenverkaufspreis ÷ Bezugspreis = 1 + Kalkulationszuschlag ÷ 100.'],
  merke:'Kalkulationszuschlag (vom Bezugspreis) und Handelsspanne (vom Listenverkaufspreis) beschreiben denselben Unterschiedsbetrag aus zwei Blickwinkeln. Handelsspanne = KZ ÷ (100 + KZ) × 100; Kalkulationsfaktor = 1 + KZ ÷ 100.'
},
{
  id:'TC7', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Von der Handelsspanne zum Bezugspreis',
  tags:['Handelskalkulation','Theorie','Handelsspanne'],
  text:'Für einen Kasten Craft-Bier rechnet die Brausewind GmbH mit einer Handelsspanne von 20 %. Der Listenverkaufspreis am Markt liegt bei 30,00 €.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der Bezugspreis darf höchstens 24,00 € betragen.', richtig:true,
     weg:'Die Handelsspanne ist vom Listenverkaufspreis: 30,00 € − 20 % (6,00 €) = 24,00 €.'},
    {text:'Der zugehörige Kalkulationszuschlag beträgt 25 %.', richtig:true,
     weg:'KZ = Handelsspanne ÷ (100 − Handelsspanne) × 100 = 20 ÷ 80 × 100 = 25 %. Probe: 6,00 € ÷ 24,00 € × 100 = 25 %.'},
    {text:'Der Kalkulationsfaktor beträgt 1,25.', richtig:true,
     weg:'30,00 € ÷ 24,00 € = 1,25.'},
    {text:'Der Kalkulationszuschlag beträgt ebenfalls 20 %.',
     fehler:'Derselbe Unterschiedsbetrag von 6,00 € ist bezogen auf den kleineren Bezugspreis (24,00 €) ein größerer Prozentsatz – 25 %.'},
    {text:'Der Bezugspreis beträgt 30,00 € ÷ 1,20 = 25,00 €.',
     fehler:'So würde man rechnen, wenn 20 % der Kalkulationszuschlag wären (vom Bezugspreis). Die Handelsspanne bezieht sich aber auf den Listenverkaufspreis.'}
  ],
  hinweise:['Handelsspanne = (Listenverkaufspreis − Bezugspreis) ÷ Listenverkaufspreis × 100.', 'Vom Listenverkaufspreis die Spanne abziehen ergibt den Bezugspreis.', 'Umrechnung: KZ = HS ÷ (100 − HS) × 100.'],
  merke:'Mit der Handelsspanne rechnet man vom Listenverkaufspreis zurück zum Bezugspreis (Rückwärtskalkulation), mit dem Kalkulationszuschlag vom Bezugspreis vorwärts. Liegt der Listenverkaufspreis über dem Bezugspreis, ist die Handelsspanne immer kleiner als der Kalkulationszuschlag.'
},
{
  id:'TC8', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Import aus den USA',
  tags:['Handelskalkulation','Theorie','Bezugskalkulation','Fremdwährung'],
  text:'Die Brausewind GmbH importiert 600 Flaschen einer Spirituose aus den USA. Kurs: 1 EUR = 1,08 USD; angenommener Zollsatz: 8 % vom Zollwert. Die Einkaufsabteilung hat so gerechnet:'
    + '<table class="lager"><tr><td>Listeneinkaufspreis (600 × 15,00 USD)</td><td></td><td class="z">9.000 USD</td></tr>'
    + '<tr><td>− Liefererrabatt</td><td class="z">10 %</td><td class="z">900 USD</td></tr><tr><td>= Zieleinkaufspreis</td><td></td><td class="z">8.100 USD</td></tr>'
    + '<tr><td>− Liefererskonto</td><td class="z">2 %</td><td class="z">162 USD</td></tr><tr><td>= Bareinkaufspreis</td><td></td><td class="z">7.938 USD</td></tr>'
    + '<tr><td>= Bareinkaufspreis in Euro (7.938 ÷ 1,08)</td><td></td><td class="z">7.350 EUR</td></tr><tr><td>+ Fracht bis zur EU-Grenze</td><td></td><td class="z">450 EUR</td></tr>'
    + '<tr><td>= Zollwert</td><td></td><td class="z">7.800 EUR</td></tr><tr><td>+ Zoll</td><td class="z">8 %</td><td class="z">624 EUR</td></tr>'
    + '<tr><td>+ Fracht von der EU-Grenze bis ins Lager</td><td></td><td class="z">276 EUR</td></tr><tr class="rahmen"><td><b>= Bezugspreis</b></td><td></td><td class="z"><b>8.700 EUR</b></td></tr></table>',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Rabatt und Skonto werden zuerst in Dollar abgezogen; erst der Bareinkaufspreis wird in Euro umgerechnet.', richtig:true,
     weg:'Der Lieferer rechnet in USD – also gelten auch seine Rabatt- und Skontobeträge in USD.'},
    {text:'Weil der Kurs angibt, wie viele Dollar es für 1 Euro gibt, wird von Dollar in Euro dividiert.', richtig:true,
     weg:'1 EUR = 1,08 USD → 7.938 USD ÷ 1,08 = 7.350 EUR.'},
    {text:'Die Fracht ab der EU-Grenze gehört nicht zum Zollwert, wohl aber zum Bezugspreis.', richtig:true,
     weg:'Zollwert = Bareinkaufspreis + Beförderungskosten bis zur EU-Grenze. Was danach anfällt, erhöht nur den Bezugspreis.'},
    {text:'Der Bezugspreis je Flasche beträgt 15,00 € – also genau so viel wie der Listeneinkaufspreis in Dollar.',
     fehler:'8.700 EUR ÷ 600 = 14,50 € je Flasche. Dollar- und Eurobeträge darf man nicht gleichsetzen.'},
    {text:'Die Einfuhrumsatzsteuer gehört ebenfalls zu den Bezugskosten.',
     fehler:'Die Einfuhrumsatzsteuer ist für die Brausewind GmbH als Vorsteuer abziehbar – sie belastet den Bezugspreis nicht.'}
  ],
  hinweise:['Lies das Schema Zeile für Zeile: In welcher Währung wird jeweils gerechnet?', 'Was gehört in den Zollwert, was kommt erst danach?', 'Steuern, die als Vorsteuer zurückkommen, sind keine Kosten.'],
  merke:'Bei Importen aus Drittländern: Rabatt und Skonto in Fremdwährung abziehen, mit dem Kurs in Euro umrechnen (÷ Kurs), Zoll vom Zollwert berechnen und alle Bezugskosten addieren. Die Einfuhrumsatzsteuer ist Vorsteuer, keine Bezugskosten.'
},
{
  id:'TC9', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Markenbier billig, Spirituosen teuer',
  tags:['Handelskalkulation','Theorie','Mischkalkulation'],
  text:'Die Brausewind GmbH kalkuliert normalerweise mit 30 % Kalkulationszuschlag. Bei Markenbier vergleichen die Gastronomen die Preise genau.'
    + ghTab(['', 'Kalkulationszuschlag', 'Wareneinsatz'], [['Markenbier', '10 %', '200.000 €'], ['Spirituosen', '70 %', '100.000 €']]),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Markenbier ist Ausgleichsnehmer, Spirituosen sind Ausgleichsträger.', richtig:true,
     weg:'Der niedrig kalkulierte Artikel nimmt den Ausgleich in Anspruch, der höher kalkulierte trägt ihn.'},
    {text:'Zusammen erreichen beide Gruppen genau den normalen Kalkulationszuschlag von 30 %.', richtig:true,
     weg:'200.000 € × 10 % = 20.000 €; 100.000 € × 70 % = 70.000 €; 90.000 € ÷ 300.000 € × 100 = 30 %.'},
    {text:'Der niedrige Bierpreis soll Kunden gewinnen, die dann auch weitere Artikel bei der Brausewind GmbH bestellen.', richtig:true,
     weg:'Mischkalkulation nutzt den Sortimentsverbund: preissensible Artikel locken, weniger vergleichbare Artikel bringen den Ausgleich.'},
    {text:'Ausgleichsträger sind die Artikel, die unter dem normalen Zuschlag kalkuliert werden.',
     fehler:'Umgekehrt: Ausgleichsträger sind die über dem Normalzuschlag kalkulierten Artikel – sie tragen den Ausgleich.'},
    {text:'Die Mischkalkulation funktioniert auch dann, wenn die Kunden nur das günstige Bier kaufen.',
     fehler:'Dann fehlt der Ausgleich durch die Spirituosen – der Aufschlag reicht nicht, um die Handlungskosten zu decken.'}
  ],
  hinweise:['Wer gibt, wer nimmt beim Ausgleich?', 'Aufschlag in € je Gruppe = Wareneinsatz × Kalkulationszuschlag.', 'Mischkalkulation setzt voraus, dass Kunden mehr als den Lockartikel kaufen.'],
  merke:'Mischkalkulation (Ausgleichskalkulation): Einige Artikel werden aus Wettbewerbsgründen niedrig kalkuliert (Ausgleichsnehmer), andere höher (Ausgleichsträger). Über das Sortiment muss der Aufschlag die Handlungskosten, den Gewinn und die Kundenkonditionen decken.'
},
/* ---------- Modul 12 · Preisuntergrenze und Zusatzauftrag (Handel) ---------- */
pugH({
  id:'PU1', stufe:1, titel:'Preisuntergrenzen eines Artikels', firma:'Elektrogroßhandlung Kalmbach GmbH',
  artikel:'Stehleuchten „Arco“', menge:800, preis:149, bzp:88, kf:31200
}),
pugH({
  id:'PU2', stufe:2, titel:'Zusatzauftrag eines Hotels', firma:'Sanitärgroßhandlung Keller GmbH',
  artikel:'Wand-WCs „Compact“', menge:1200, preis:239, bzp:154, vhk:6, kf:69600,
  zusatz:{menge:150, preis:182, kunde:'Eine Hotelkette'}
}),
pugH({
  id:'PU3', stufe:3, titel:'Sonderpreis unter den variablen Kosten', firma:'Getränkegroßhandlung Brausewind GmbH',
  artikel:'Kisten Pils', einheit:['Kiste', 'Kisten'], menge:24000, preis:18.90, bzp:13.20, vhk:0.80, kf:96000,
  zusatz:{menge:2000, preis:13.60, kunde:'Ein Festveranstalter'},
  merke:'Liegt der Preis unter den variablen Kosten je Kiste, verschlechtert jede zusätzlich verkaufte Kiste das Ergebnis – auch wenn der Umsatz steigt.'
}),
pugH({
  id:'PU4', stufe:3, titel:'Großauftrag einer Behörde', firma:'Büromöbelgroßhandlung Seidel GmbH',
  artikel:'Bürodrehstühle „Ergo“', menge:900, preis:398, bzp:212, vhk:14, kf:118800,
  zusatz:{menge:240, preis:262, kunde:'Das Landratsamt'}
}),
/* ---------- Modul 1 · Kostenarten unterscheiden ---------- */
{
  id:'KA0a', modul:'KA', typ:'berechnung', stufe:0, titel:'Einzel- oder Gemeinkosten?',
  tags:['Kostenarten','Theorie'],
  text:'Die Sanitärgroßhandlung Keller GmbH führt die Warengruppen Sanitärkeramik und Armaturen.',
  frage:'Welche Kosten sind Einzelkosten?',
  optionen:[
    {text:'Der Wareneinsatz der Armaturen', richtig:true,
     weg:'Der Bezugspreis der verkauften Armaturen lässt sich der Warengruppe (sogar jedem einzelnen Artikel) direkt zurechnen – Einzelkosten.'},
    {text:'Die Miete für die Lagerhalle, in der beide Warengruppen lagern', fehler:'Die Halle nutzen beide Warengruppen gemeinsam. Die Miete muss über einen Schlüssel (z. B. Fläche) verteilt werden – Gemeinkosten.'},
    {text:'Das Gehalt der Buchhalterin', fehler:'Die Buchhaltung arbeitet für das ganze Unternehmen – Gemeinkosten.'},
    {text:'Die Abschreibung des Gabelstaplers, der für beide Warengruppen fährt', fehler:'Der Stapler wird gemeinsam genutzt – Gemeinkosten.'}
  ],
  hinweise:['Lässt sich der Betrag ohne Schlüssel einer Warengruppe zuordnen?', 'Im Großhandel ist die Ware selbst die wichtigste Einzelkostenart.', 'Gemeinkosten heißen im Handel Handlungskosten.'],
  merke:'Einzelkosten sind einer Warengruppe bzw. einem Artikel direkt zurechenbar (vor allem der Wareneinsatz). Gemeinkosten (Handlungskosten) entstehen für mehrere Warengruppen gemeinsam und werden im BAB verteilt.'
},
{
  id:'KA0b', modul:'KA', typ:'berechnung', stufe:0, titel:'Fixe Kosten bei steigender Menge',
  tags:['Kostenarten','Theorie','Kostenverlauf'],
  text:'Eine Getränkegroßhandlung verkauft im Juli 20 % mehr Kisten als im Juni. Miete, Gehälter und Abschreibungen bleiben gleich.',
  frage:'Was gilt für die fixen Kosten?',
  optionen:[
    {text:'Insgesamt bleiben sie gleich, je Kiste sinken sie.', richtig:true,
     weg:'Derselbe Fixkostenblock verteilt sich auf mehr Kisten – der Anteil je Kiste wird kleiner (Fixkostendegression).'},
    {text:'Insgesamt steigen sie um 20 %, je Kiste bleiben sie gleich.', fehler:'Das beschreibt variable Kosten. Miete, Gehälter und Abschreibungen ändern sich mit der Menge nicht.'},
    {text:'Insgesamt und je Kiste bleiben sie gleich.', fehler:'Insgesamt ja – aber je Kiste nicht: Der gleiche Betrag wird durch mehr Kisten geteilt.'},
    {text:'Insgesamt sinken sie, je Kiste bleiben sie gleich.', fehler:'Fixe Kosten insgesamt hängen nicht von der Menge ab – sie sinken nicht, weil mehr verkauft wird.'}
  ],
  hinweise:['Fixe Kosten insgesamt: hängen sie von der Menge ab?', 'Fixe Kosten je Kiste = fixe Kosten ÷ Zahl der Kisten.', 'Bei variablen Kosten ist es umgekehrt: insgesamt steigend, je Stück gleich.'],
  merke:'Fixe Kosten: insgesamt konstant, je Stück sinkend. Variable Kosten: insgesamt mit der Menge steigend, je Stück konstant.'
},
kostenarten({
  id:'KA1', stufe:1, art:'eg', titel:'Einzel- und Gemeinkosten zuordnen', firma:'Sanitärgroßhandlung Keller GmbH', zeitraum:'den Monat März',
  posten:[{t:'Wareneinsatz Sanitärkeramik', b:220000, ez:'e', fv:'v'}, {t:'Wareneinsatz Armaturen', b:124000, ez:'e', fv:'v'}, {t:'Gehälter', b:48000, ez:'g', fv:'f'},
          {t:'Miete Lager und Büro', b:12000, ez:'g', fv:'f'}, {t:'Energie', b:3600, ez:'g', fv:'f'}, {t:'Kalkulatorische Abschreibungen', b:6400, ez:'g', fv:'f'},
          {t:'Versandverpackung', b:2900, ez:'g', fv:'v'}]
}),
kostenarten({
  id:'KA2', stufe:2, art:'fv', anteil:true, titel:'Fixe und variable Kosten zuordnen', firma:'Elektrogroßhandlung Kalmbach GmbH', zeitraum:'das erste Quartal',
  posten:[{t:'Wareneinsatz', b:890000, ez:'e', fv:'v'}, {t:'Gehälter', b:126000, ez:'g', fv:'f'}, {t:'Miete', b:36000, ez:'g', fv:'f'},
          {t:'Provision der Handelsvertreter (3 % vom Umsatz)', b:33400, ez:'e', fv:'v'}, {t:'Kalkulatorische Abschreibungen', b:12000, ez:'g', fv:'f'},
          {t:'Versicherungen', b:4800, ez:'g', fv:'f'}, {t:'Verpackungs- und Versandmaterial', b:7200, ez:'g', fv:'v'}, {t:'Treibstoff der Lieferfahrzeuge', b:5600, ez:'g', fv:'v'}],
  merke:'Im Großhandel ist der Wareneinsatz der mit Abstand größte variable Kostenblock. Die Handlungskosten sind überwiegend fix.'
}),
kostenarten({
  id:'KA3', stufe:3, titel:'Zuordnen nach beiden Merkmalen', firma:'Getränkegroßhandlung Brausewind GmbH', zeitraum:'den Monat Mai',
  posten:[{t:'Wareneinsatz Wasser und Säfte', b:212000, ez:'e', fv:'v'}, {t:'Wareneinsatz Bier', b:168000, ez:'e', fv:'v'},
          {t:'Löhne der fest angestellten Lagerarbeiter', b:54000, ez:'g', fv:'f'}, {t:'Miete', b:21000, ez:'g', fv:'f'},
          {t:'Leergutreinigung durch einen Dienstleister (je Kiste abgerechnet)', b:3800, ez:'g', fv:'v'}, {t:'Treibstoff der Lieferfahrzeuge', b:9200, ez:'g', fv:'v'},
          {t:'Kalkulatorische Abschreibungen der Fahrzeuge', b:6800, ez:'g', fv:'f'}, {t:'Plakataktion „Sommerbier“', b:4000, ez:'e', fv:'f'}],
  zusatz:'Die Plakataktion warb ausschließlich für die Warengruppe Bier und war vorab zum Festpreis gebucht.',
  merke:'Die beiden Merkmale sind unabhängig voneinander: Kosten können zum Beispiel Einzelkosten und trotzdem fix sein (Werbung für genau eine Warengruppe zum Festpreis).'
}),
kverlauf({
  id:'KV1', stufe:1, titel:'Kostenverlauf · Kisten Mineralwasser', firma:'Getränkegroßhandlung Brausewind GmbH', artikel:'Mineralwasser in Kisten',
  kf:12600, kvs:4.20, mengen:[3000, 6000, 9000]
}),
kverlauf({
  id:'KV2', stufe:2, titel:'Kostenverlauf und Fixkostendegression', firma:'Werkzeuggroßhandlung Brenner KG', artikel:'Akku-Bohrschrauber', mitVhk:true,
  kf:18000, kvs:72, mengen:[200, 400, 600, 900], frage:true,
  merke:'Je mehr verkauft wird, desto kleiner ist der Anteil der fixen Kosten je Stück – die Stückkosten sinken (Fixkostendegression).'
}),
/* ---------- Modul 5 · Bezugskalkulation ---------- */
bezug({
  id:'BZ1', stufe:1, titel:'Bezugspreis einer Lieferung', firma:'Elektrogroßhandlung Kalmbach GmbH',
  ware:'eine Lieferung Installationskabel', lieferer:'der Kabelwerk Sommer GmbH', lep:8400, rabatt:15, skonto:2, bzk:120
}),
bezug({
  id:'BZ2', stufe:2, titel:'Bezugspreis je Stück · mehrere Bezugskosten', firma:'Sanitärgroßhandlung Keller GmbH',
  ware:'Einhebelmischer', lieferer:'der Armaturenfabrik Leitner AG', menge:250, preis:36.80, rabatt:20, skonto:3,
  bzkTeile:[{t:'Fracht', b:180}, {t:'Rollgeld', b:45}, {t:'Transportversicherung', b:22.50}]
}),
bezug({
  id:'BZ3', stufe:2, titel:'Bezugspreis je Kiste', firma:'Getränkegroßhandlung Brausewind GmbH',
  ware:'Kisten Mineralwasser', lieferer:'der Talquelle Mineralbrunnen GmbH', einheit:['Kiste', 'Kisten'], menge:600, preis:4.20, rabatt:10, skonto:2, bzk:210
}),
bezug({
  id:'BZ4', stufe:3, titel:'Import aus den USA · Kurs und Zoll', firma:'Elektrogroßhandlung Kalmbach GmbH',
  ware:'500 LED-Panels', lieferer:'der Brightway Lighting Inc., Chicago', lep:18500, rabatt:10, skonto:2,
  waehrung:{code:'USD', kurs:1.10}, fr1:640, zoll:4, fr2:380
}),
bezug({
  id:'BZ5', stufe:3, titel:'Import aus China · Kurs und Zoll', firma:'Büromöbelgroßhandlung Seidel GmbH',
  ware:'120 Bürodrehstühle', lieferer:'einem Hersteller in Shenzhen', lep:187200, rabatt:8, skonto:2,
  waehrung:{code:'CNY', kurs:7.80}, fr1:2150, zoll:6, fr2:560,
  merke:'Erst in der Fremdwährung bis zum Bareinkaufspreis rechnen, dann umrechnen. Der Zoll bemisst sich am Zollwert – also einschließlich der Beförderung bis zur EU-Grenze.'
}),
/* ---------- Theorie Controlling (extra) · Modul-ID KC ----------
   Berichtswesen, Budgetierung, Soll-Ist-Vergleich, Ursachen und Maßnahmen deuten –
   durchgehend Gastronomiebedarf-Großhandel Kochwerk GmbH (WG I Kücheneinrichtung, WG II Geschirr und Besteck). */
{
  id:'TE1', modul:'KC', typ:'berechnung', mehrfach:true, stufe:0, titel:'40 Seiten Excel für alle',
  tags:['Controlling','Theorie','Berichtswesen'],
  text:'Der Controller der Kochwerk GmbH, eines Großhandels für Gastronomiebedarf, verschickt jeden Monat eine 40-seitige Excel-Liste mit allen Kosten- und Umsatzdaten an die Geschäftsführung und alle Warengruppenleiter. Die Rückmeldung: „Liest keiner, findet keiner was.“',
  frage:'Wie sollte das Berichtswesen verbessert werden?',
  optionen:[
    {text:'Berichte empfängerorientiert gestalten: Die Geschäftsführung erhält verdichtete Kennzahlen, die Warengruppenleiter die Details ihrer Warengruppe.', richtig:true,
     weg:'Jeder Empfänger braucht die Informationen, für die er verantwortlich ist – in passender Verdichtung.'},
    {text:'Wesentliche Abweichungen hervorheben, z. B. mit Ampelfarben oder Schwellenwerten.', richtig:true,
     weg:'So erkennt der Leser sofort, wo er handeln muss (Management by Exception).'},
    {text:'Neben dem regelmäßigen Standardbericht einen Abweichungsbericht auslösen, sobald eine Toleranzgrenze überschritten wird.', richtig:true,
     weg:'Kritische Entwicklungen werden dann zeitnah gemeldet und nicht erst im nächsten Monatsbericht.'},
    {text:'Allen Empfängern möglichst alle Daten schicken, damit niemand etwas fehlt.',
     fehler:'Genau das ist das Problem: Informationsflut verhindert, dass Wichtiges erkannt wird.'}
  ],
  hinweise:['Wer braucht welche Information – und wie verdichtet?', 'Wie findet der Leser schnell das Wichtige?', 'Rechtzeitig ist wichtiger als vollständig.'],
  merke:'Ein gutes Berichtswesen liefert die richtigen Informationen an die richtigen Empfänger zur richtigen Zeit: empfängerorientiert, verdichtet, zeitnah und mit hervorgehobenen Abweichungen.'
},
{
  id:'TE2', modul:'KC', typ:'berechnung', mehrfach:true, stufe:0, titel:'Wer plant das Budget?',
  tags:['Controlling','Theorie','Budgetierung'],
  text:'Die Kochwerk GmbH plant die Budgets für das nächste Jahr. Die Geschäftsführung erwägt drei Wege: Sie gibt die Budgets selbst vor (top-down), die Warengruppenleiter melden ihren Bedarf (bottom-up), oder beides wird kombiniert (Gegenstromverfahren).',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Top-down setzt die Unternehmensziele schnell und einheitlich um, die Budgets können aber an der Wirklichkeit der Warengruppen vorbeigehen und werden schlechter akzeptiert.', richtig:true,
     weg:'Die Geschäftsführung kennt die Ziele, die Warengruppenleiter die Details – ohne deren Beteiligung fehlt oft die Motivation.'},
    {text:'Bottom-up nutzt das Fachwissen der Warengruppenleiter, birgt aber die Gefahr, dass sie Reserven („Polster“) einplanen.', richtig:true,
     weg:'Wer sein eigenes Budget plant, rechnet gern großzügig – die Summe passt dann oft nicht zu den Unternehmenszielen.'},
    {text:'Beim Gegenstromverfahren gibt die Geschäftsführung einen Rahmen vor, die Warengruppenleiter planen im Detail, danach wird abgestimmt – das ist aufwendig, führt aber zu realistischen und akzeptierten Budgets.', richtig:true,
     weg:'Es verbindet die Stärken beider Verfahren.'},
    {text:'Beim Gegenstromverfahren entscheiden allein die Warengruppenleiter über ihre Budgets.',
     fehler:'Das wäre reines Bottom-up. Beim Gegenstromverfahren werden Vorgaben von oben und Pläne von unten abgestimmt.'},
    {text:'Bottom-up verhindert zuverlässig, dass Abteilungen Reserven einplanen.',
     fehler:'Im Gegenteil – die Gefahr von Budgetpolstern ist bei Bottom-up besonders groß.'}
  ],
  hinweise:['Top-down: von der Geschäftsführung nach unten. Bottom-up: von den Bereichen nach oben.', 'Wer kennt die Ziele, wer die Details?', 'Gegenstrom: Rahmen von oben, Detail von unten, dann Abstimmung.'],
  merke:'Top-down: zielorientiert und schnell, aber wenig Akzeptanz. Bottom-up: realitätsnah und motivierend, aber Gefahr von Polstern. Gegenstromverfahren: verbindet beides, ist aber zeitaufwendig.'
},
{
  id:'TE3', modul:'KC', typ:'berechnung', mehrfach:true, stufe:0, titel:'Soll-Ist-Vergleich der Kosten',
  tags:['Controlling','Theorie','Soll-Ist-Vergleich'],
  text:'Im Soll-Ist-Vergleich der Kochwerk GmbH für das erste Halbjahr stehen:'
    + ghTab(['', 'Soll', 'Ist'], [['Personalkosten', '84.000 €', '92.400 €'], ['Energiekosten', '12.000 €', '10.800 €']]),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die Personalkosten liegen um 8.400 € bzw. 10 % über dem Soll – eine ungünstige Abweichung.', richtig:true,
     weg:'92.400 € − 84.000 € = 8.400 €; 8.400 € ÷ 84.000 € × 100 = 10 %. Bei Kosten ist ein Ist über dem Soll ungünstig.'},
    {text:'Die Energiekosten liegen um 1.200 € bzw. 10 % unter dem Soll – eine günstige Abweichung.', richtig:true,
     weg:'10.800 € − 12.000 € = −1.200 €; 1.200 € ÷ 12.000 € × 100 = 10 %.'},
    {text:'Die prozentuale Abweichung wird auf das Soll bezogen, weil das Soll der Maßstab ist.', richtig:true,
     weg:'Abweichung in % = (Ist − Soll) ÷ Soll × 100.'},
    {text:'Die Abweichung der Personalkosten beträgt 9,09 %, weil man sie auf das Ist bezieht.',
     fehler:'8.400 € ÷ 92.400 € × 100 ≈ 9,09 % – das ist der falsche Grundwert. Maßstab ist das Soll.'},
    {text:'Die Unterschreitung der Energiekosten ist ungünstig, weil das Budget nicht ausgeschöpft wurde.',
     fehler:'Weniger Kosten als geplant ist günstig. Ein Budget muss nicht ausgeschöpft werden – allerdings sollte man prüfen, ob die Planung realistisch war.'}
  ],
  hinweise:['Abweichung = Ist − Soll; in % = Abweichung ÷ Soll × 100.', 'Bei Kosten: Was ist günstig – mehr oder weniger als geplant?', 'Grundwert ist immer das Soll.'],
  merke:'Kostenabweichungen: Ist über Soll ist ungünstig, Ist unter Soll günstig. Die prozentuale Abweichung bezieht sich auf das Soll.'
},
{
  id:'TE4', modul:'KC', typ:'berechnung', mehrfach:true, stufe:0, titel:'Soll-Ist-Vergleich der Umsätze',
  tags:['Controlling','Theorie','Soll-Ist-Vergleich'],
  text:'Umsätze der Kochwerk GmbH im ersten Halbjahr:'
    + ghTab(['', 'Soll', 'Ist'], [['WG I Kücheneinrichtung', '450.000 €', '405.000 €'], ['WG II Geschirr und Besteck', '200.000 €', '216.000 €']]),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'WG I verfehlt das Soll um 45.000 € bzw. 10 % – eine ungünstige Abweichung.', richtig:true,
     weg:'405.000 € − 450.000 € = −45.000 €; 45.000 € ÷ 450.000 € × 100 = 10 %. Bei Umsätzen ist ein Ist unter dem Soll ungünstig.'},
    {text:'WG II übertrifft das Soll um 16.000 € bzw. 8 % – eine günstige Abweichung.', richtig:true,
     weg:'216.000 € − 200.000 € = 16.000 €; 16.000 € ÷ 200.000 € × 100 = 8 %.'},
    {text:'Insgesamt liegt der Umsatz nur um 29.000 € (rund 4,5 %) unter dem Soll – diese Gesamtzahl verdeckt die deutliche Lücke in WG I.', richtig:true,
     weg:'621.000 € − 650.000 € = −29.000 €; 29.000 € ÷ 650.000 € × 100 ≈ 4,46 %. Erst die Aufteilung nach Warengruppen zeigt, wo das Problem liegt.'},
    {text:'Eine Umsatzüberschreitung ist wie eine Kostenüberschreitung ungünstig.',
     fehler:'Bei Erlösen ist es umgekehrt: Mehr Umsatz als geplant ist günstig.'},
    {text:'Weil WG II das Soll übertrifft, muss in WG I nichts unternommen werden.',
     fehler:'Der Ausgleich durch WG II ist kein Grund, die Ursachen in WG I nicht zu untersuchen – das Gesamtziel wird trotzdem verfehlt.'}
  ],
  hinweise:['Bei Umsätzen: Was ist günstig – mehr oder weniger als geplant?', 'Abweichung in % immer vom Soll.', 'Was zeigt die Summe, was die Warengruppe?'],
  merke:'Erlösabweichungen: Ist unter Soll ist ungünstig, Ist über Soll günstig. Gesamtzahlen können Probleme einzelner Warengruppen verdecken – deshalb vergleicht man auch je Warengruppe.'
},
{
  id:'TE5', modul:'KC', typ:'berechnung', mehrfach:true, stufe:0, titel:'Ursachen suchen, Maßnahmen ableiten',
  tags:['Controlling','Theorie','Abweichungsanalyse'],
  text:'Die Kochwerk GmbH hat zwei ungünstige Abweichungen festgestellt: Personalkosten 10 % über Soll, Umsatz WG I Kücheneinrichtung 10 % unter Soll. Die Geschäftsführung will reagieren.',
  frage:'Welche Vorgehensweisen sind sinnvoll?',
  optionen:[
    {text:'Zuerst die Ursachen klären, z. B. Tariferhöhung, Überstunden wegen Krankheit oder zusätzliche Aushilfen bei den Personalkosten.', richtig:true,
     weg:'Ohne Ursachenanalyse bleibt der Soll-Ist-Vergleich eine Zahlenspielerei – Maßnahmen hängen von der Ursache ab.'},
    {text:'Zwischen beeinflussbaren und nicht beeinflussbaren Ursachen unterscheiden: Eine Tariferhöhung ist hinzunehmen und künftig im Budget zu planen, Überstunden lassen sich über die Personaleinsatzplanung steuern.', richtig:true,
     weg:'Nicht beeinflussbare Ursachen führen zu einer Anpassung der Planung, beeinflussbare zu Gegenmaßnahmen.'},
    {text:'Beim Umsatzrückgang in WG I Ursachen wie neue Mitbewerber, Lieferengpässe oder eine schwache Gastronomiekonjunktur prüfen und z. B. Sortiment, Preise oder Verkaufsförderung anpassen.', richtig:true,
     weg:'Je nach Ursache passen andere Maßnahmen – Preise senken hilft nicht bei Lieferengpässen.'},
    {text:'Bei jeder ungünstigen Abweichung sofort das Budget der betroffenen Abteilung kürzen.',
     fehler:'Pauschale Kürzungen ohne Ursachenanalyse können schaden, z. B. wenn die Mehrkosten durch eine nicht beeinflussbare Tariferhöhung entstanden sind.'},
    {text:'Für jede Abweichung ist immer der Leiter der Warengruppe persönlich verantwortlich.',
     fehler:'Viele Ursachen liegen außerhalb seines Einflusses (Tarife, Marktentwicklung). Controlling sucht Ursachen, keine Schuldigen.'}
  ],
  hinweise:['Abweichung erkennen → Ursache klären → Maßnahme ableiten.', 'Kann das Unternehmen die Ursache beeinflussen?', 'Unterschiedliche Ursachen erfordern unterschiedliche Maßnahmen.'],
  merke:'Controlling-Regelkreis: Planen, Ist erfassen, Soll-Ist-Vergleich, Ursachenanalyse, Maßnahmen. Beeinflussbare Ursachen führen zu Gegenmaßnahmen, nicht beeinflussbare zu einer Anpassung der Planung.'
},
/* ---------- Modul 15 · Controlling: Soll-Ist-Vergleich und Budget ---------- */
sollIst({
  id:'SI1', stufe:1, titel:'Soll-Ist-Vergleich der Handlungskosten', firma:'Elektrogroßhandlung Kalmbach GmbH', zeitraum:'das erste Quartal',
  posten:[{t:'Löhne', soll:84000, ist:86100}, {t:'Gehälter', soll:126000, ist:126000}, {t:'Miete', soll:36000, ist:36000},
          {t:'Energie', soll:9000, ist:10350}, {t:'Fuhrpark', soll:18000, ist:16740}, {t:'Werbung', soll:15000, ist:17400}],
  frage:true
}),
sollIst({
  id:'SI2', stufe:2, titel:'Umsätze nach Warengruppen', firma:'Getränkegroßhandlung Brausewind GmbH', zeitraum:'den Monat Juli',
  summe:false,
  posten:[{t:'Umsatz Wasser und Säfte', soll:96000, ist:91200, art:'umsatz'}, {t:'Umsatz Bier', soll:142000, ist:129220, art:'umsatz'},
          {t:'Umsatz Wein und Spirituosen', soll:48000, ist:46080, art:'umsatz'}],
  frage:true,
  fragen:[{t:'Welche Ursache kommt für die Abweichung beim Bier am ehesten in Betracht, wenn der Juli ungewöhnlich verregnet war?', optionen:[
    {text:'Wetterbedingt weniger Absatz an Gaststätten mit Biergarten – eine Mengenabweichung, die das Unternehmen kaum beeinflussen kann.', richtig:true},
    {text:'Ein Rechenfehler im Budget – wetterabhängige Umsätze lassen sich nicht planen.', richtig:false},
    {text:'Zu hohe Handlungskosten in der Warengruppe Bier.', richtig:false},
    {text:'Der Lieferer hat die Einkaufspreise gesenkt.', richtig:false}]}]
}),
sollIst({
  id:'SI3', stufe:3, titel:'Budget aus dem Vorjahr aufstellen und vergleichen', firma:'Büromöbelgroßhandlung Seidel GmbH', zeitraum:'das Geschäftsjahr',
  budget:{vj:[420000, 108000, 56000, 48000, 21000], aend:[4, 0, 10, -5, 3]},
  posten:[{t:'Gehälter', ist:441000}, {t:'Miete', ist:108000}, {t:'Energie', ist:64400}, {t:'Werbung', ist:39600}, {t:'Versicherungen', ist:21630}],
  frage:true,
  zusatz:'Geplant waren: Tariferhöhung 4 %, gleiche Miete, Energiepreise +10 %, Werbebudget −5 %, Versicherungen +3 %.'
}),
sollIst({
  id:'SI4', stufe:3, titel:'Abweichungen beurteilen und Maßnahmen ableiten', firma:'Sanitärgroßhandlung Keller GmbH', zeitraum:'das zweite Halbjahr',
  posten:[{t:'Löhne Lager', soll:96000, ist:108480}, {t:'Fuhrpark', soll:42000, ist:46620}, {t:'Verpackungsmaterial', soll:12000, ist:11160},
          {t:'Büromaterial', soll:4800, ist:4800}],
  frage:true,
  fragen:[{t:'Die Mehrkosten bei den Löhnen im Lager entstanden durch viele Überstunden wegen eines Personalausfalls. Welche Maßnahme ist am besten geeignet?', optionen:[
    {text:'Ursache bestätigen, Vertretung für Ausfälle planen (z. B. Springer oder Zeitarbeit) und das Budget für das nächste Halbjahr überprüfen.', richtig:true},
    {text:'Die Lagerlöhne im nächsten Halbjahr um den Mehrbetrag kürzen, damit das Jahresbudget eingehalten wird.', richtig:false},
    {text:'Den Fuhrpark verkleinern, weil dort ebenfalls eine ungünstige Abweichung besteht.', richtig:false},
    {text:'Das Soll nachträglich an das Ist anpassen, damit keine Abweichung mehr entsteht.', richtig:false}]}]
}),
/* ---------- Modul · Diagramme lesen und deuten (Diagramme werden beim Laden als SVG erzeugt) ---------- */
{
  id:'DG1', modul:'KD', typ:'berechnung', mehrfach:true, stufe:1, titel:'Soll-Ist-Vergleich im Säulendiagramm',
  tags:['Controlling','Diagramm','Soll-Ist-Vergleich'],
  text:'Das Controlling der Elektrogroßhandlung Kalmbach GmbH stellt die Handlungskosten des ersten Quartals grafisch dar.'
    + ghDiagramm('saeulen', {titel:'Handlungskosten 1. Quartal – Soll und Ist', einheit:'T€', schritt:50, werte:true, legende:['Soll (Budget)', 'Ist'],
        gruppen:[{t:'Personal', w:[210, 214]}, {t:'Miete', w:[36, 36]}, {t:'Fuhrpark', w:[18, 16]}, {t:'Energie', w:[10, 11]}, {t:'Werbung', w:[15, 18]}]}),
  frage:'Welche Aussagen lassen sich aus dem Diagramm ablesen?',
  optionen:[
    {text:'Die Werbung liegt um 3 T€ über dem Soll – das sind 20 % und damit relativ die stärkste ungünstige Abweichung.', richtig:true,
     weg:'(18 − 15) ÷ 15 × 100 = 20 %. Beim Personal sind es nur 4 ÷ 210 × 100 ≈ 1,9 %.'},
    {text:'Beim Fuhrpark liegt das Ist unter dem Soll – eine günstige Abweichung.', richtig:true, weg:'16 T€ statt 18 T€: Bei Kosten ist ein Ist unter dem Soll günstig.'},
    {text:'Die Miete weicht nicht vom Soll ab.', richtig:true, weg:'Beide Säulen sind gleich hoch (36 T€) – typisch für vertraglich feste Kosten.'},
    {text:'Die Personalkosten haben die stärkste ungünstige Abweichung, weil ihre Säulen am höchsten sind.',
     fehler:'Die Höhe der Säulen zeigt den Betrag, nicht die Abweichung. Personal liegt nur 4 T€ (≈ 1,9 %) über dem Soll.'},
    {text:'Insgesamt liegen die Handlungskosten unter dem Soll.', fehler:'Soll: 210 + 36 + 18 + 10 + 15 = 289 T€, Ist: 214 + 36 + 16 + 11 + 18 = 295 T€ – also 6 T€ darüber.'}
  ],
  hinweise:['Vergleiche je Kostenart die beiden Säulen: Welche ist höher?', 'Absolute Abweichung = Ist − Soll; relative Abweichung = Abweichung ÷ Soll × 100.', 'Bei Kosten ist Ist über Soll ungünstig, Ist unter Soll günstig.'],
  merke:'Säulendiagramme zeigen Beträge. Für die Beurteilung zählt die Abweichung – am besten auch in Prozent des Solls, sonst wirken große Kostenblöcke wichtiger, als sie sind.'
},
{
  id:'DG2', modul:'KD', typ:'berechnung', mehrfach:true, stufe:2, titel:'Break-even-Diagramm lesen',
  tags:['Teilkostenrechnung','Diagramm','Gewinnschwelle'],
  text:'Die Werkzeuggroßhandlung Brenner KG verkauft Akku-Bohrschrauber. Das Diagramm zeigt Erlöse und Kosten eines Monats in Abhängigkeit von der Absatzmenge.'
    + ghDiagramm('linien', {titel:'Akku-Bohrschrauber: Erlöse und Kosten je Monat', einheit:'T€', schritt:20, min:0, xTitel:'Absatzmenge (Stück)',
        x:['0', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
        reihen:[{t:'Erlöse', w:[0, 11.2, 22.4, 33.6, 44.8, 56, 67.2, 78.4, 89.6, 100.8]}, {t:'Gesamtkosten', w:[18, 25.2, 32.4, 39.6, 46.8, 54, 61.2, 68.4, 75.6, 82.8]}, {t:'Fixkosten', w:[18, 18, 18, 18, 18, 18, 18, 18, 18, 18]}]}),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die Gewinnschwelle liegt bei 450 Stück – dort schneiden sich Erlös- und Gesamtkostenlinie.', richtig:true,
     weg:'Zwischen 400 und 500 Stück kreuzen sich die Linien. Rechnerisch: 18.000 € ÷ (112 € − 72 €) = 450 Stück.'},
    {text:'Die Fixkosten betragen 18 T€ im Monat – die Linie verläuft waagerecht, unabhängig von der Menge.', richtig:true, weg:'Fixkosten ändern sich nicht mit der Absatzmenge.'},
    {text:'Bei 700 Stück entsteht ein Gewinn von 10 T€ (Erlöse 78,4 T€ − Gesamtkosten 68,4 T€).', richtig:true, weg:'Der senkrechte Abstand zwischen Erlös- und Kostenlinie ist der Gewinn.'},
    {text:'Unterhalb von 450 Stück deckt ein verkaufter Bohrschrauber nicht einmal seine variablen Kosten.',
     fehler:'Jeder Bohrschrauber bringt 40 € Deckungsbeitrag. Unterhalb der Gewinnschwelle reichen die Deckungsbeiträge nur noch nicht für alle Fixkosten.'},
    {text:'Die Gesamtkostenlinie beginnt im Nullpunkt, weil ohne Verkauf keine Kosten entstehen.', fehler:'Sie beginnt bei 18 T€: Die Fixkosten fallen auch ohne Verkauf an.'}
  ],
  hinweise:['Wo schneiden sich die Erlös- und die Gesamtkostenlinie?', 'Links vom Schnittpunkt liegt die Verlustzone, rechts die Gewinnzone.', 'Gewinn = Erlöse − Gesamtkosten bei der jeweiligen Menge.'],
  merke:'Im Break-even-Diagramm beginnt die Gesamtkostenlinie bei den Fixkosten und steigt mit den variablen Kosten. Der Schnittpunkt mit der Erlöslinie ist die Gewinnschwelle.'
},
{
  id:'DG3', modul:'KD', typ:'berechnung', mehrfach:true, stufe:2, titel:'Deckungsbeiträge je Warengruppe',
  tags:['Teilkostenrechnung','Diagramm','Sortiment'],
  text:'Die Getränkegroßhandlung Lindner GmbH vergleicht ihre Warengruppen.'
    + ghDiagramm('balken', {titel:'Deckungsbeiträge je Warengruppe (Geschäftsjahr)', einheit:'T€', schritt:50, werte:true, legende:['DB I', 'DB II'],
        gruppen:[{t:'Bier', w:[220, 70]}, {t:'Wein', w:[310, 120]}, {t:'Säfte', w:[85, -30]}]}),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die Säfte decken ihre variablen Kosten, nicht aber ihre warengruppenfixen Kosten.', richtig:true, weg:'DB I positiv (85 T€), DB II negativ (−30 T€).'},
    {text:'Der Wein trägt mit 120 T€ am meisten zur Deckung der unternehmensfixen Kosten bei.', richtig:true, weg:'Zur Deckung der unternehmensfixen Kosten zählt der DB II.'},
    {text:'Die Deckungsbeiträge II betragen zusammen 160 T€.', richtig:true, weg:'70 + 120 − 30 = 160 T€.'},
    {text:'Die Säfte sollten sofort aufgegeben werden, weil ihr Balken ins Negative reicht.',
     fehler:'Das hängt davon ab, ob ihre warengruppenfixen Kosten abbaubar sind und ob Kunden die Säfte zusammen mit Bier und Wein kaufen (Sortimentsverbund).'},
    {text:'Das Bier hat den höchsten Deckungsbeitrag I.', fehler:'Der höchste DB I gehört zum Wein (310 T€).'}
  ],
  hinweise:['Je Warengruppe zwei Balken: links DB I, rechts DB II.', 'Was wird zwischen DB I und DB II abgezogen?', 'Ein negativer DB II ist ein Warnsignal – aber noch keine Entscheidung.'],
  merke:'DB I zeigt, ob eine Warengruppe ihre variablen Kosten deckt, DB II, ob sie auch ihre eigenen fixen Kosten trägt.'
},
{
  id:'DG4', modul:'KD', typ:'berechnung', mehrfach:true, stufe:2, titel:'Umsatzentwicklung im Liniendiagramm',
  tags:['Controlling','Diagramm','Umsatz'],
  text:'Die Getränkegroßhandlung Brausewind GmbH vergleicht die Monatsumsätze mit dem Vorjahr.'
    + ghDiagramm('linien', {titel:'Monatsumsätze im Vergleich', einheit:'T€', schritt:100, min:0,
        x:['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        reihen:[{t:'laufendes Jahr', w:[185, 180, 210, 245, 300, 330, 320, 360, 300, 235, 195, 250], punkte:true}, {t:'Vorjahr', w:[180, 175, 200, 230, 280, 340, 390, 370, 290, 230, 190, 240]}]}),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die Umsätze schwanken mit der Jahreszeit: Im Sommer sind sie am höchsten.', richtig:true, weg:'Beide Linien steigen bis zum Hochsommer und fallen danach – typisch für Getränke.'},
    {text:'Den größten Rückgang gegenüber dem Vorjahr gab es im Juli (rund 70 T€).', richtig:true, weg:'320 T€ statt 390 T€ – die Linien liegen hier am weitesten auseinander.'},
    {text:'In den meisten Monaten liegt der Umsatz über dem Vorjahr.', richtig:true, weg:'Nur im Juni, Juli und August liegt die durchgezogene Linie unter der gestrichelten.'},
    {text:'Im Dezember liegt der Umsatz unter dem Vorjahr.', fehler:'250 T€ gegenüber 240 T€ – also darüber.'},
    {text:'Das Diagramm zeigt, dass im Juli auch der Gewinn gesunken ist.', fehler:'Das Diagramm zeigt Umsätze. Ob der Gewinn gesunken ist, hängt auch von den Kosten ab.'}
  ],
  hinweise:['Durchgezogene Linie mit Punkten: laufendes Jahr; gestrichelt: Vorjahr.', 'Wo liegen die Linien am weitesten auseinander?', 'Umsatz ist nicht gleich Gewinn.'],
  merke:'Liniendiagramme eignen sich für Entwicklungen über die Zeit. Beim Vergleich zweier Linien zählen der Abstand und die Richtung.'
},
{
  id:'DG5', modul:'KD', typ:'berechnung', mehrfach:true, stufe:3, titel:'Kostenstruktur im Kreisdiagramm',
  tags:['Controlling','Diagramm','Kostenstruktur'],
  text:'Die Büromöbelgroßhandlung Seidel GmbH zeigt ihre Kostenstruktur des Geschäftsjahres (Anteile an den Gesamtkosten).'
    + ghDiagramm('kreis', {titel:'Kostenstruktur des Geschäftsjahres',
        teile:[{t:'Wareneinsatz', w:70}, {t:'Personal', w:17}, {t:'Miete', w:6}, {t:'Fuhrpark', w:3}, {t:'Abschreibungen', w:2}, {t:'Sonstiges', w:2}]}),
  frage:'Welche Schlussfolgerungen sind richtig?',
  optionen:[
    {text:'Der Wareneinsatz ist der größte Kostenblock – bessere Einkaufskonditionen wirken am stärksten auf die Kosten.', richtig:true,
     weg:'70 % aller Kosten entfallen auf die Ware. Schon kleine Verbesserungen beim Einkauf haben große Wirkung.'},
    {text:'Sinkt der Wareneinsatz um 2 %, sinken die Gesamtkosten um 1,4 %.', richtig:true, weg:'2 % von 70 % = 1,4 % der Gesamtkosten.'},
    {text:'Die Personalkosten sind der zweitgrößte Kostenblock.', richtig:true, weg:'17 % – deutlich vor Miete (6 %) und Fuhrpark (3 %).'},
    {text:'Eine Halbierung der Miete senkt die Gesamtkosten um 6 %.', fehler:'Die Miete macht 6 % aus – halbiert sind es 3 % der Gesamtkosten.'},
    {text:'Die fixen Kosten machen 70 % der Gesamtkosten aus.', fehler:'Die 70 % sind der Wareneinsatz – und der ist variabel.'}
  ],
  hinweise:['Ein Kreisdiagramm zeigt Anteile am Ganzen (100 %).', 'Wirkung einer Senkung auf das Ganze = Anteil × Senkung.', 'Welche Kostenart ist im Großhandel variabel?'],
  merke:'Kreisdiagramme zeigen die Struktur – also Anteile an einem Ganzen. Sie zeigen keine Entwicklung über die Zeit.'
},
/* ---------- Modul 9 · Kalkulationszuschlag, Kalkulationsfaktor, Handelsspanne ---------- */
kennz({
  id:'KF1', stufe:1, art:'drei', titel:'Drei Kennzahlen je Artikel', firma:'Getränkegroßhandlung Brausewind GmbH',
  artikel:[{n:'Kiste Mineralwasser', bzp:4.00, lvp:6.00}, {n:'Kiste Pils', bzp:12.50, lvp:20.00}, {n:'Flasche Gin', bzp:16.00, lvp:28.00}]
}),
kennz({
  id:'KF2', stufe:2, art:'faktor', kf:1.8, titel:'Mit dem Kalkulationsfaktor kalkulieren', firma:'Elektrogroßhandlung Kalmbach GmbH', wg:'die Warengruppe Leuchten',
  artikel:[{n:'Wandleuchte „Linea“', bzp:38.50}, {n:'LED-Panel 60 × 60', bzp:52.00}, {n:'Außenleuchte „Terra“', bzp:71.25}, {n:'Strahler „Spot 3“', bzp:24.80}]
}),
kennz({
  id:'KF3', stufe:2, art:'spanne', hs:30, titel:'Mit der Handelsspanne zurückrechnen', firma:'Sanitärgroßhandlung Keller GmbH', wg:'der Warengruppe Armaturen',
  artikel:[{n:'Einhebelmischer „Basic“', lvp:89.00}, {n:'Thermostatarmatur', lvp:245.00}, {n:'Brausegarnitur', lvp:64.90}],
  merke:'Die Handelsspanne ist der Anteil am Verkaufspreis, der für Handlungskosten und Gewinn bleibt. Der Rest ist der höchstmögliche Bezugspreis.'
}),
hkalk({
  id:'KF4', modul:'KF', stufe:3, art:'vor', kennzahlen:true, titel:'Kalkulationsfaktor aus den Zuschlägen', firma:'Werkzeuggroßhandlung Brenner KG',
  artikel:'die Warengruppe Handwerkzeuge', angaben:'Rechne mit einem Bezugspreis von 100,00 €.', bzp:100, hk:22, gewinn:10, skonto:2, rabatt:20,
  tags:['Kalkulationsfaktor', 'Handelsspanne'],
  hinweise:['Kalkuliere mit einem Bezugspreis von 100,00 € wie gewohnt bis zum Listenverkaufspreis.',
    'Kalkulationsfaktor = Listenverkaufspreis ÷ 100 – er gilt für jeden Artikel der Warengruppe, solange die Zuschläge gleich bleiben.',
    'Kalkulationszuschlag = (Listenverkaufspreis − 100) ÷ 100 × 100; Handelsspanne = (Listenverkaufspreis − 100) ÷ Listenverkaufspreis × 100.'],
  merke:'Mit einem Bezugspreis von 100 € lässt sich der Kalkulationsfaktor einer Warengruppe direkt aus den Zuschlägen ablesen.'
}),
kennz({
  id:'KF5', stufe:3, art:'drei', titel:'Kennzahlen vergleichen', firma:'Büromöbelgroßhandlung Seidel GmbH',
  artikel:[{n:'Schreibtisch „Flex“', bzp:395.00, lvp:640.00}, {n:'Bürodrehstuhl „Ergo“', bzp:212.00, lvp:398.00}, {n:'Aktenvernichter', bzp:49.80, lvp:89.00}, {n:'Ordner (Karton)', bzp:18.40, lvp:39.90}],
  merke:'Ein höherer Kalkulationszuschlag heißt nicht automatisch mehr Gewinn – Warengruppen mit hohen Handlungskosten brauchen einen höheren Zuschlag.'
}),
/* Labor-Aufgaben: eingebettete Werkstätten aus quellen/labor (Stufe „Labor“) */
{
  id:'K6LAB', modul:'K6', typ:'labor', stufe:9, labor:'kalkulation', titel:'Labor: Kalkulationsschema zum Durchspielen',
  tags:['Handelskalkulation','Labor'],
  text:'Verändere Rabatte, Skonti und Zuschläge und verfolge, wie sich jede Änderung durch das Kalkulationsschema fortpflanzt – vorwärts und rückwärts. Die Werkstatt reagiert sofort auf jede Änderung. Erfülle die Aufträge – sie haken sich automatisch ab. Das Labor zählt nicht für die Medaillen.'
},
{
  id:'K10LAB', modul:'K10', typ:'labor', stufe:9, labor:'breakeven', titel:'Labor: Break-even-Labor',
  tags:['Gewinnschwelle','Labor'],
  text:'Verändere Preis, variable Kosten und Fixkosten und beobachte die Gewinnschwelle im Schaubild. Die Werkstatt reagiert sofort auf jede Änderung. Erfülle die Aufträge – sie haken sich automatisch ab. Das Labor zählt nicht für die Medaillen.'
},
/* ---------- Modul 11 · Deckungsbeitrag je Warengruppe ---------- */
dbWG({
  id:'DW1', stufe:1, titel:'DB I und DB II · zwei Warengruppen', firma:'Sanitärgroßhandlung Keller GmbH',
  wg:['Sanitärkeramik', 'Armaturen'], erl:[960000, 540000], we:[640000, 330000], fwg:[118000, 96000], ufix:142000
}),
dbWG({
  id:'DW2', stufe:2, titel:'Drei Warengruppen mit variablen Handlungskosten', firma:'Elektrogroßhandlung Kalmbach GmbH',
  wg:['Installationsmaterial', 'Leuchten', 'Hausgeräte'], erl:[1240000, 610000, 1480000], we:[860000, 350000, 1210000],
  vhk:[24000, 18000, 52000], fwg:[142000, 118000, 164000], ufix:236000
}),
dbWG({
  id:'DW3', stufe:3, titel:'Warengruppe aufgeben? · Fixkosten abbaubar', firma:'Getränkegroßhandlung Lindner GmbH',
  wg:['Bier', 'Wein', 'Säfte'], erl:[820000, 1150000, 390000], we:[560000, 780000, 286000],
  vhk:[41000, 57500, 19500], fwg:[148000, 196000, 112000], ufix:124000, streichen:{k:2, abbaubar:true},
  merke:'Ist der DB II einer Warengruppe negativ und lassen sich ihre fixen Kosten abbauen, verbessert die Aufgabe das Betriebsergebnis – vorausgesetzt, sie zieht keine Kunden für die übrigen Warengruppen an.'
}),
dbWG({
  id:'DW4', stufe:3, titel:'Warengruppe aufgeben? · Fixkosten bleiben', firma:'Büromöbelgroßhandlung Seidel GmbH',
  wg:['Büromöbel', 'Bürotechnik', 'Bürobedarf'], erl:[1650000, 720000, 410000], we:[1120000, 470000, 268000],
  fwg:[214000, 96000, 158000], ufix:186000, streichen:{k:2, abbaubar:false},
  merke:'Ein negativer DB II allein ist kein Grund zum Aufgeben: Bleiben die warengruppenfixen Kosten, fehlt nach der Aufgabe der positive DB I – das Ergebnis wird schlechter.'
}),
/* ---------- Modul · Fallaufgabe: Erfolgssituation verbessern ---------- */
dbWG({
  id:'FA1', modul:'KZ', stufe:3, titel:'Fall 1 · Warum wurde das Planergebnis verfehlt?', firma:'Sanitärgroßhandlung Keller GmbH',
  tags:['Controlling', 'Deckungsbeitrag', 'Fallaufgabe'],
  wg:['Sanitärkeramik', 'Armaturen', 'Badmöbel'], erl:[960000, 540000, 380000], we:[640000, 380000, 228000], fwg:[118000, 96000, 74000], ufix:142000,
  zusatz:'Geplant war ein Betriebsergebnis von 250.000,00 €. Für die Armaturen war eine Wareneinsatzquote (Wareneinsatz in % der Umsatzerlöse) von 61 % geplant. Der Hauptlieferer der Armaturen hat im Frühjahr seine Preise erhöht; die Verkaufspreise der Keller GmbH blieben unverändert.',
  extra:[{id:'ab', t:'Abweichung des Betriebsergebnisses vom Plan (€)', f:'=be.w1 - E(250000)', vorzeichen:true},
         {id:'wq', t:'Wareneinsatzquote der Armaturen (%, zwei Nachkommastellen)', f:'=runde(we.w2 / erl.w2 * 100)', einheit:'%'},
         {id:'bp', t:'Betriebsergebnis, wenn die Armaturen die geplante Wareneinsatzquote von 61 % erreicht hätten (€)', f:'=runde(be.w1 + we.w2 - erl.w2 * 61 / 100)'}],
  fragen:[
    {t:'Welche Warengruppe erklärt die Abweichung vom Plan vor allem?', optionen:[{text:'Armaturen', richtig:true}, {text:'Sanitärkeramik', richtig:false}, {text:'Badmöbel', richtig:false}]},
    {t:'Welche Maßnahme setzt an der Ursache an?', optionen:[
      {text:'Mit dem Lieferer verhandeln oder einen anderen Lieferer suchen und die Verkaufspreise der Armaturen überprüfen.', richtig:true},
      {text:'Die Armaturen aus dem Sortiment nehmen.', richtig:false},
      {text:'Die Handlungskosten im Lager senken.', richtig:false},
      {text:'Das Werbebudget für die Badmöbel erhöhen.', richtig:false}]}],
  hinweise:['Erst die Deckungsbeiträge und das Betriebsergebnis ermitteln, dann mit dem Plan vergleichen.',
    'Wareneinsatzquote = Wareneinsatz ÷ Umsatzerlöse × 100. Vergleiche sie mit dem geplanten Wert.',
    'Mit der geplanten Quote wäre der Wareneinsatz der Armaturen 61 % der Umsatzerlöse gewesen – der Unterschied zum tatsächlichen Wareneinsatz ist der entgangene Deckungsbeitrag.'],
  merke:'Eine Planabweichung erst eingrenzen (welche Warengruppe?), dann die Ursache finden (Einkaufspreis, Verkaufspreis, Menge, Kosten) und erst dann die Maßnahme wählen. Die Armaturen haben einen positiven DB II – sie aufzugeben, würde das Ergebnis verschlechtern.'
}),
dbWG({
  id:'FA2', modul:'KZ', stufe:3, titel:'Fall 2 · Verlust statt Gewinn', firma:'Getränkegroßhandlung Brausewind GmbH',
  tags:['Controlling', 'Deckungsbeitrag', 'Fallaufgabe'],
  wg:['Wasser und Säfte', 'Bier', 'Wein und Spirituosen'], erl:[1040000, 1380000, 560000], we:[750000, 960000, 330000], vhk:[52000, 69000, 28000],
  fwg:[176000, 228000, 248000], ufix:160000,
  zusatz:'Geplant war ein Betriebsergebnis von 60.000,00 €. Für Wein und Spirituosen wurde im Frühjahr ein zusätzliches klimatisiertes Lager angemietet (72.000,00 € im Jahr, monatlich kündbar), das nur zu einem Drittel genutzt wird; die Miete steckt in den warengruppenfixen Kosten. Viele Gastronomiekunden beziehen Wein und Bier gemeinsam.',
  extra:[{id:'ab', t:'Abweichung des Betriebsergebnisses vom Plan (€)', f:'=be.w1 - E(60000)', vorzeichen:true},
         {id:'bl', t:'Betriebsergebnis, wenn das Zusatzlager gekündigt wird (€)', f:'=be.w1 + E(72000)', vorzeichen:true}],
  fragen:[
    {t:'Wie sollte die Brausewind GmbH mit der Warengruppe Wein und Spirituosen verfahren?', optionen:[
      {text:'Beibehalten, aber das kaum genutzte Zusatzlager kündigen – der DB II wird dann positiv, und die Gastronomiekunden kaufen Wein und Bier weiter gemeinsam.', richtig:true},
      {text:'Aufgeben – ihr DB II ist negativ.', richtig:false},
      {text:'Die Verkaufspreise für Wein um 10 % senken, um den Umsatz zu steigern.', richtig:false},
      {text:'Nichts ändern – ihr DB I ist positiv.', richtig:false}]}],
  hinweise:['DB I = Umsatzerlöse − Wareneinsatz − variable Handlungskosten; DB II = DB I − warengruppenfixe Kosten.',
    'Fällt die Lagermiete weg, sinken die warengruppenfixen Kosten von Wein und Spirituosen um 72.000,00 € – das Betriebsergebnis steigt um denselben Betrag.',
    'Vor einer Sortimentsentscheidung immer prüfen: Welche Fixkosten lassen sich abbauen, und hängen andere Warengruppen an dieser (Sortimentsverbund)?'],
  merke:'Nicht die Warengruppe ist das Problem, sondern ein Kostenblock in ihr. Abbaubare Fixkosten zu senken verbessert das Ergebnis, ohne Kunden für andere Warengruppen zu verlieren.'
}),

];

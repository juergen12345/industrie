window.POOL_DATEN_klr = () => [
/* ---------- Modul 1 · Abgrenzungsrechnung ---------- */
{
  id:'AT0a', modul:'K1', typ:'berechnung', stufe:0, titel:'Aufwand und Kosten',
  tags:['Abgrenzungsrechnung','Theorie'],
  text:'Die Finanzbuchhaltung erfasst Aufwendungen, die Kosten- und Leistungsrechnung Kosten.',
  frage:'Welche Aussage beschreibt den Unterschied richtig?',
  optionen:[
    {text:'Kosten sind der betriebsbedingte, ordentliche und periodenrichtige Werteverzehr zur Erstellung der Leistung – Aufwand ist jeder Werteverzehr des Unternehmens.', richtig:true,
     weg:'Aufwand umfasst alles, was das Unternehmen in der Periode an Werten verbraucht. Kosten sind nur der Teil, der dem Betriebszweck dient, regelmäßig anfällt und in die Periode gehört.'},
    {text:'Kosten und Aufwand sind dasselbe – nur die Kontonummern sind verschieden.',
     fehler:'Gerade nicht: Spenden oder ein Hochwasserschaden sind Aufwand, aber keine Kosten.'},
    {text:'Kosten sind immer höher als der Aufwand, weil kalkulatorische Kosten hinzukommen.',
     fehler:'Kalkulatorische Kosten können höher oder niedriger sein als der Aufwand – und neutraler Aufwand fällt ganz weg.'},
    {text:'Aufwand ist nur, was bar bezahlt wird; Kosten sind auch unbare Vorgänge.',
     fehler:'Zahlung und Aufwand sind verschiedene Ebenen. Auch eine Abschreibung ist Aufwand, obwohl kein Geld fließt.'}
  ],
  hinweise:['Denke an eine Spende an den Sportverein: Ist das Aufwand? Sind das Kosten?', 'Kosten müssen drei Bedingungen erfüllen: betriebsbedingt, ordentlich, periodenrichtig.', 'Der Werteverzehr für die betriebliche Leistung ist die Schnittmenge.'],
  merke:'Aufwand = gesamter Werteverzehr der Periode (Finanzbuchhaltung). Kosten = betriebsbedingter, ordentlicher, periodenrichtiger Werteverzehr (KLR).'
},
{
  id:'AT0b', modul:'K1', typ:'berechnung', stufe:0, titel:'Neutraler Aufwand',
  tags:['Abgrenzungsrechnung','Theorie'],
  text:'Ein Industriebetrieb hat im Geschäftsjahr folgende Aufwendungen gebucht.',
  frage:'Welcher Aufwand ist neutral (unternehmensbezogene Abgrenzung)?',
  optionen:[
    {text:'Ein Verlust aus dem Verkauf einer Maschine unter Buchwert', richtig:true,
     weg:'Der Verlust aus einem Anlagenabgang entsteht nicht bei der Herstellung der Erzeugnisse – er ist neutral (außerordentlich bzw. betriebsfremd).'},
    {text:'Löhne der Fertigung', fehler:'Fertigungslöhne dienen unmittelbar der Leistungserstellung – Kosten in voller Höhe (Grundkosten).'},
    {text:'Aufwendungen für Rohstoffe', fehler:'Rohstoffe gehen in die Erzeugnisse ein – klassische Kosten.'},
    {text:'Miete für die Fertigungshalle', fehler:'Die Halle wird für die Produktion gebraucht – die Miete sind Kosten.'}
  ],
  hinweise:['Neutral ist, was betriebsfremd, periodenfremd oder außerordentlich ist.', 'Welcher Posten hat mit der Herstellung der Erzeugnisse nichts zu tun?', 'Der Verkauf einer Maschine ist kein Teil der laufenden Produktion.'],
  merke:'Neutrale Aufwendungen: betriebsfremd (z. B. Spenden), periodenfremd (z. B. Nachzahlungen für Vorjahre), außerordentlich (z. B. Verluste aus Schadensfällen oder Anlagenabgängen).'
},
{
  id:'AT0c', modul:'K1', typ:'berechnung', stufe:0, titel:'Kalkulatorischer Unternehmerlohn',
  tags:['Abgrenzungsrechnung','Theorie','Kalkulatorische Kosten'],
  text:'Der Inhaber eines Einzelunternehmens arbeitet voll im Betrieb mit, bezieht aber kein Gehalt.',
  frage:'Wie wird seine Arbeitsleistung in der Ergebnistabelle berücksichtigt?',
  optionen:[
    {text:'Als kalkulatorischer Unternehmerlohn: nur verrechnete Kosten, kein Aufwand laut Finanzbuchhaltung.', richtig:true,
     weg:'Es gibt keinen Aufwand, weil kein Gehalt gebucht wird. Die Arbeit ist aber ein echter Werteverzehr für die Produktion – deshalb werden Zusatzkosten verrechnet.'},
    {text:'Gar nicht, weil kein Gehalt gebucht wurde.', fehler:'Dann wären die Kosten zu niedrig – die Arbeitsleistung des Inhabers würde in der Kalkulation fehlen.'},
    {text:'Als neutraler Aufwand.', fehler:'Neutral wäre Aufwand ohne Kosten – hier ist es genau umgekehrt: Kosten ohne Aufwand.'},
    {text:'Als Aufwand und Kosten in gleicher Höhe.', fehler:'In der Finanzbuchhaltung wird nichts gebucht – also gibt es keinen Aufwand.'}
  ],
  hinweise:['Gibt es für die Arbeit des Inhabers eine Buchung in der Finanzbuchhaltung?', 'Kosten, denen kein Aufwand gegenübersteht, heißen Zusatzkosten.', 'Zusatzkosten stehen nur bei den verrechneten Kosten und im KLR-Bereich.'],
  merke:'Zusatzkosten (kalk. Unternehmerlohn, kalk. Miete für eigene Räume, kalk. Eigenkapitalzinsen) haben keinen Aufwand in der Finanzbuchhaltung. Anderskosten (kalk. Abschreibungen, kalk. Zinsen) ersetzen einen Aufwand durch einen anderen Wert.'
},
{
  id:'AT0d', modul:'K1', typ:'berechnung', stufe:0, titel:'Gesamtergebnis und Betriebsergebnis',
  tags:['Abgrenzungsrechnung','Theorie'],
  text:'In einer Ergebnistabelle beträgt das Gesamtergebnis 120.000,00 €, das neutrale Ergebnis −15.000,00 €.',
  frage:'Wie hoch ist das Betriebsergebnis?',
  optionen:[
    {wert:135000, richtig:true, weg:'Betriebsergebnis = Gesamtergebnis − neutrales Ergebnis = 120.000,00 € − (−15.000,00 €) = 135.000,00 €.'},
    {wert:105000, fehler:'Das neutrale Ergebnis ist negativ – abgezogen wird also ein Minus, das Betriebsergebnis ist höher.'},
    {wert:120000, fehler:'Das wäre nur so, wenn es keine neutralen Posten gäbe.'},
    {wert:15000, fehler:'Das ist nur der Betrag des neutralen Ergebnisses.'}
  ],
  hinweise:['Gesamtergebnis = Betriebsergebnis + neutrales Ergebnis.', 'Stelle die Gleichung nach dem Betriebsergebnis um.', 'Minus mal Minus …'],
  merke:'Gesamtergebnis = Betriebsergebnis + neutrales Ergebnis, also neutrales Ergebnis = Gesamtergebnis − Betriebsergebnis.'
},
abgrenzung({
  id:'AT1', stufe:1, kk:false, titel:'Ergebnistabelle · neutrale Posten abgrenzen',
  text:'Die Holzwerk Berger GmbH stellt Möbel her. Aus der Finanzbuchhaltung liegen die folgenden Aufwendungen und Erträge vor. Übertrage sie in die Ergebnistabelle: Was ist neutral, was sind Kosten und Leistungen? Ermittle die Summen und die Ergebnisse.<br>Angaben: Die Mieterträge stammen aus einer Lagerhalle, die der Betrieb nicht mehr braucht und an eine Spedition vermietet hat. Die Verluste aus Schadensfällen sind durch ein Hochwasser entstanden. Die Zinsaufwendungen werden in voller Höhe als Kosten übernommen.',
  posten:[
    {k:'5000', t:'Umsatzerlöse für eigene Erzeugnisse', e:1250000, wo:'kl'},
    {k:'5400', t:'Erträge aus Vermietung und Verpachtung', e:24000, wo:'ua', kurz:'die Mieterträge aus der Lagerhalle'},
    {k:'5710', t:'Zinserträge', e:6000, wo:'ua', kurz:'die Zinserträge'},
    {k:'6000', t:'Aufwendungen für Rohstoffe', a:420000, wo:'kl'},
    {k:'6200', t:'Löhne', a:310000, wo:'kl'},
    {k:'6300', t:'Gehälter', a:180000, wo:'kl'},
    {k:'6700', t:'Mieten, Pachten', a:36000, wo:'kl'},
    {k:'6880', t:'Spenden', a:5000, wo:'ua', kurz:'die Spenden'},
    {k:'6930', t:'Verluste aus Schadensfällen', a:12000, wo:'ua', kurz:'der Hochwasserschaden'},
    {k:'7510', t:'Zinsaufwendungen', a:15000, wo:'kl'}
  ],
  hinweise:[
    'Gehe Zeile für Zeile vor: Dient der Posten der Herstellung und dem Verkauf der Möbel? Dann gehört er in den KLR-Bereich, sonst in die unternehmensbezogene Abgrenzung.',
    'Neutral sind hier die betriebsfremden Erträge (Vermietung der leeren Halle, Zinserträge) und die Aufwendungen, die nichts mit der Produktion zu tun haben (Spende, Hochwasserschaden).',
    'Das neutrale Ergebnis ist die Differenz: Gesamtergebnis − Betriebsergebnis. Hier ist es positiv, weil die neutralen Erträge größer sind als die neutralen Aufwendungen.'
  ],
  merke:'Betriebsfremde (Spenden, Vermietung nicht betrieblich genutzter Gebäude, Zinserträge) und außerordentliche Posten (Schadensfälle) gehören nicht in die KLR.'
}),
abgrenzung({
  id:'AT2', stufe:2, titel:'Ergebnistabelle · kalkulatorische Abschreibungen und Zinsen',
  text:'Die Metallwerke Haas KG fertigt Gehäuse für Schaltschränke. Erstelle die Ergebnistabelle und ermittle die Ergebnisse.<br>Angaben zur KLR: Die kalkulatorischen Abschreibungen betragen 90.000,00 €, die kalkulatorischen Zinsen 45.000,00 €. Die Erträge aus dem Abgang von Sachanlagen stammen aus dem Verkauf eines alten Lkw. Die periodenfremden Aufwendungen sind eine Nachzahlung für eine Reparatur aus dem Vorjahr.',
  posten:[
    {k:'5000', t:'Umsatzerlöse für eigene Erzeugnisse', e:1680000, wo:'kl'},
    {k:'5460', t:'Erträge aus dem Abgang von Sachanlagen', e:8000, wo:'ua', kurz:'der Ertrag aus dem Lkw-Verkauf'},
    {k:'5710', t:'Zinserträge', e:4000, wo:'ua', kurz:'die Zinserträge'},
    {k:'6000', t:'Aufwendungen für Rohstoffe', a:560000, wo:'kl'},
    {k:'6020', t:'Aufwendungen für Hilfsstoffe', a:48000, wo:'kl'},
    {k:'6200', t:'Löhne', a:390000, wo:'kl'},
    {k:'6300', t:'Gehälter', a:240000, wo:'kl'},
    {k:'6500', t:'Abschreibungen auf Sachanlagen', a:96000, wo:'kk', kalk:90000, kurz:'die kalkulatorischen Abschreibungen'},
    {k:'6700', t:'Mieten, Pachten', a:30000, wo:'kl'},
    {k:'6900', t:'Versicherungsbeiträge', a:18000, wo:'kl'},
    {k:'6990', t:'Periodenfremde Aufwendungen', a:7000, wo:'ua', kurz:'die Nachzahlung für das Vorjahr'},
    {k:'7510', t:'Zinsaufwendungen', a:22000, wo:'kk', kalk:45000, kurz:'die kalkulatorischen Zinsen'}
  ],
  hinweise:[
    'Bei den Abschreibungen und Zinsen rechnet die KLR mit eigenen Werten: Links (Aufwendungen lt. FB) steht der gebuchte Betrag, rechts (verrechnete Kosten) der kalkulatorische – und dieser geht in die Kosten.',
    'Abschreibungen: 96.000,00 € lt. FB, 90.000,00 € verrechnet. Zinsen: 22.000,00 € lt. FB, 45.000,00 € verrechnet. Neutral sind die Erträge aus dem Lkw-Verkauf, die Zinserträge und die Nachzahlung für das Vorjahr.',
    'Neutrales Ergebnis = Gesamtergebnis − Betriebsergebnis. Achte auf das Vorzeichen: Ist das Betriebsergebnis größer als das Gesamtergebnis, ist das neutrale Ergebnis negativ.'
  ],
  merke:'Anderskosten: Die KLR ersetzt die bilanziellen Abschreibungen und die gezahlten Zinsen durch kalkulatorische Werte. Der Unterschied steckt im neutralen Ergebnis.'
}),
abgrenzung({
  id:'AT3', stufe:2, titel:'Ergebnistabelle · Unternehmerlohn und kalkulatorische Miete',
  text:'Die Metallbau Kern e. K. ist ein Einzelunternehmen. Erstelle die Ergebnistabelle und ermittle die Ergebnisse.<br>Angaben zur KLR: kalkulatorische Abschreibungen 61.000,00 €, kalkulatorische Zinsen 14.000,00 €. Der Inhaber arbeitet ohne Gehalt im Betrieb mit; dafür werden 72.000,00 € kalkulatorischer Unternehmerlohn angesetzt. Das Büro liegt im Privathaus des Inhabers, es wird keine Miete gezahlt; angemessen wären 12.000,00 € kalkulatorische Miete. Die Mieterträge stammen aus der Vermietung einer Wohnung über der Werkstatt.',
  posten:[
    {k:'5000', t:'Umsatzerlöse für eigene Erzeugnisse', e:920000, wo:'kl'},
    {k:'5400', t:'Erträge aus Vermietung und Verpachtung', e:18000, wo:'ua', kurz:'die Mieterträge aus der Wohnung'},
    {k:'6000', t:'Aufwendungen für Rohstoffe', a:310000, wo:'kl'},
    {k:'6200', t:'Löhne', a:205000, wo:'kl'},
    {k:'6300', t:'Gehälter', a:96000, wo:'kl'},
    {k:'6400', t:'Arbeitgeberanteil zur Sozialversicherung', a:60000, wo:'kl'},
    {k:'6500', t:'Abschreibungen auf Sachanlagen', a:52000, wo:'kk', kalk:61000, kurz:'die kalkulatorischen Abschreibungen'},
    {k:'6880', t:'Spenden', a:3000, wo:'ua', kurz:'die Spenden'},
    {k:'7510', t:'Zinsaufwendungen', a:9000, wo:'kk', kalk:14000, kurz:'die kalkulatorischen Zinsen'},
    {t:'kalkulatorischer Unternehmerlohn', wo:'kk', kalk:72000, kurz:'der kalkulatorische Unternehmerlohn'},
    {t:'kalkulatorische Miete', wo:'kk', kalk:12000, kurz:'die kalkulatorische Miete'}
  ],
  hinweise:[
    'Unternehmerlohn und Miete für das Büro im Privathaus sind Zusatzkosten: Es gibt keinen Aufwand in der Finanzbuchhaltung, aber verrechnete Kosten.',
    'In den Zeilen „kalkulatorischer Unternehmerlohn“ und „kalkulatorische Miete“ bleibt die Spalte „Aufwendungen lt. FB“ leer; 72.000,00 € und 12.000,00 € stehen bei den verrechneten Kosten und bei den Kosten.',
    'Durch die Zusatzkosten ist das Betriebsergebnis deutlich kleiner als das Gesamtergebnis – das neutrale Ergebnis ist positiv.'
  ],
  merke:'Zusatzkosten haben keinen Aufwand: Sie erhöhen die Kosten und senken das Betriebsergebnis, das Gesamtergebnis bleibt unverändert.'
}),
abgrenzung({
  id:'AT4', stufe:3, titel:'Ergebnistabelle · gemischte Abgrenzungen',
  text:'Die Kunststofftechnik Brandt GmbH legt die Zahlen des Geschäftsjahres vor. Erstelle die Ergebnistabelle und ermittle alle Ergebnisse.<br>Angaben zur KLR: kalkulatorische Abschreibungen 110.000,00 €, kalkulatorische Zinsen 42.000,00 €. Die Bestandsveränderungen sind ein Mehrbestand an fertigen Erzeugnissen. Die Erträge aus der Auflösung von Rückstellungen betreffen einen Prozess aus dem Vorjahr. Die Verluste aus dem Abgang von Sachanlagen stammen aus dem Verkauf einer alten Spritzgussmaschine.',
  posten:[
    {k:'5000', t:'Umsatzerlöse für eigene Erzeugnisse', e:2140000, wo:'kl'},
    {k:'5220', t:'Bestandsveränderungen an fertigen Erzeugnissen', e:35000, wo:'kl'},
    {k:'5480', t:'Erträge aus der Auflösung von Rückstellungen', e:6000, wo:'ua', kurz:'die Auflösung der Rückstellung'},
    {k:'5710', t:'Zinserträge', e:3000, wo:'ua', kurz:'die Zinserträge'},
    {k:'6000', t:'Aufwendungen für Rohstoffe', a:720000, wo:'kl'},
    {k:'6020', t:'Aufwendungen für Hilfsstoffe', a:64000, wo:'kl'},
    {k:'6030', t:'Aufwendungen für Betriebsstoffe', a:27000, wo:'kl'},
    {k:'6200', t:'Löhne', a:510000, wo:'kl'},
    {k:'6300', t:'Gehälter', a:290000, wo:'kl'},
    {k:'6400', t:'Arbeitgeberanteil zur Sozialversicherung', a:140000, wo:'kl'},
    {k:'6500', t:'Abschreibungen auf Sachanlagen', a:125000, wo:'kk', kalk:110000, kurz:'die kalkulatorischen Abschreibungen'},
    {k:'6960', t:'Verluste aus dem Abgang von Sachanlagen', a:11000, wo:'ua', kurz:'der Verlust aus dem Maschinenverkauf'},
    {k:'7510', t:'Zinsaufwendungen', a:31000, wo:'kk', kalk:42000, kurz:'die kalkulatorischen Zinsen'}
  ],
  hinweise:[
    'Der Mehrbestand an fertigen Erzeugnissen ist eine Leistung der Periode – er gehört in den KLR-Bereich.',
    'Neutral sind die Auflösung der Rückstellung (periodenfremd), die Zinserträge und der Verlust aus dem Maschinenverkauf. Abschreibungen: 125.000,00 € lt. FB, 110.000,00 € verrechnet; Zinsen: 31.000,00 € lt. FB, 42.000,00 € verrechnet.',
    'Das Betriebsergebnis ist hier größer als das Gesamtergebnis – das neutrale Ergebnis ist negativ (Minus eintragen).'
  ],
  merke:'Ein Mehrbestand an fertigen Erzeugnissen ist Leistung (hergestellt, aber noch nicht verkauft). Ein Minderbestand würde die Leistungen der Periode mindern.'
}),
/* ---------- Modul 15 · Gewinnschwelle ---------- */
{
  id:'GT1', modul:'K10', typ:'berechnung', stufe:0, titel:'Fixkosten steigen',
  tags:['Gewinnschwelle','Theorie'],
  text:'Ein Betrieb mietet eine zusätzliche Lagerhalle. Die Fixkosten steigen, Preis und variable Stückkosten bleiben gleich.',
  frage:'Was passiert mit der Gewinnschwelle?',
  optionen:[
    {text:'Sie steigt – es müssen mehr Stück verkauft werden, bis die Fixkosten gedeckt sind.', richtig:true, weg:'Gewinnschwelle = Fixkosten ÷ Deckungsbeitrag je Stück. Steigt der Zähler, steigt die Menge.'},
    {text:'Sie sinkt.', fehler:'Höhere Fixkosten brauchen mehr Deckungsbeiträge, also mehr Stück.'},
    {text:'Sie bleibt gleich, weil der Deckungsbeitrag je Stück gleich bleibt.', fehler:'Der Stück-DB bleibt gleich, aber es muss mehr gedeckt werden.'},
    {text:'Sie steigt, weil die variablen Kosten steigen.', fehler:'Die variablen Stückkosten ändern sich hier nicht.'}
  ],
  hinweise:['Wie berechnet man die Gewinnschwelle?', 'Fixkosten ÷ DB je Stück.', 'Was ändert sich?'],
  merke:'Gewinnschwelle = Fixkosten ÷ Deckungsbeitrag je Stück. Höhere Fixkosten oder ein kleinerer Stück-DB schieben sie nach oben.'
},
{
  id:'GT2', modul:'K10', typ:'berechnung', stufe:0, titel:'Fixkostendegression',
  tags:['Gewinnschwelle','Theorie'],
  text:'Bei 4.000 Stück betragen die Stückkosten 55,00 €, bei 8.000 Stück nur noch 42,50 €. Die variablen Stückkosten sind gleich geblieben.',
  frage:'Warum sinken die Stückkosten?',
  optionen:[
    {text:'Die Fixkosten verteilen sich auf mehr Stück – je Stück entfallen weniger Fixkosten (Fixkostendegression).', richtig:true, weg:'Fixkosten je Stück = Fixkosten ÷ Menge. Bei doppelter Menge halbieren sie sich: hier von 25,00 € auf 12,50 €.'},
    {text:'Die variablen Kosten je Stück sinken mit der Menge.', fehler:'Laut Aufgabe sind die variablen Stückkosten gleich geblieben.'},
    {text:'Die Fixkosten insgesamt sinken.', fehler:'Die Fixkosten insgesamt bleiben gleich – nur ihr Anteil je Stück sinkt.'},
    {text:'Der Verkaufspreis steigt.', fehler:'Der Preis hat mit den Kosten je Stück nichts zu tun.'}
  ],
  hinweise:['Welche Kosten hängen nicht von der Menge ab?', 'Fixkosten je Stück = Fixkosten ÷ Menge.', 'Was passiert bei doppelter Menge?'],
  merke:'Stückkosten = variable Stückkosten + Fixkosten ÷ Menge. Mit steigender Menge sinken die fixen Kosten je Stück.'
},
/* Stufe 1 */
gs({id:'GS1', stufe:1, titel:'Gewinnschwelle in Stück und Euro', firma:'Leuchtenbau Sommer GmbH', produkt:'Schreibtischleuchten',
  p:120, kv:75, kf:270000, fragen:['dbs', 'bep', 'beu'],
  merke:'Gewinnschwelle = Fixkosten ÷ Deckungsbeitrag je Stück; Break-even-Umsatz = Gewinnschwelle × Preis.'}),
gs({id:'GS2', stufe:1, titel:'Ergebnis und Stückkosten bei geplanter Menge', firma:'Kunststoffwerk Lenz GmbH', produkt:'Aufbewahrungsboxen',
  p:48, kv:30, kf:108000, m:8000, fragen:['dbs', 'gm', 'sk'],
  merke:'Betriebsergebnis = Menge × DB je Stück − Fixkosten.'}),
/* Stufe 2 */
gs({id:'GS3', stufe:2, titel:'Menge für einen Zielgewinn', firma:'Gartengeräte Wolf KG', produkt:'Akku-Heckenscheren',
  p:85, kv:52, kf:198000, g:66000, fragen:['dbs', 'bep', 'mg'],
  merke:'Für einen Zielgewinn müssen Fixkosten und Gewinn über Deckungsbeiträge hereinkommen: (Fixkosten + Gewinn) ÷ DB je Stück.'}),
gs({id:'GS4', stufe:2, titel:'Stückgewinn bei Auslastung', firma:'Möbelwerk Kraus GmbH', produkt:'Beistelltische',
  p:36, kv:22, kf:147000, kap:20000, a:75, fragen:['ma', 'gm', 'sg', 'bepA'],
  merke:'Erst die Menge aus der Auslastung, dann Ergebnis und Stückgewinn; die Auslastung an der Gewinnschwelle zeigt den Sicherheitsabstand.'}),
/* Stufe 3 */
gs({id:'GS5', stufe:3, titel:'Fixe und variable Kosten aus zwei Monaten', firma:'Metallwaren Hoffmann KG', produkt:'Wandhalterungen',
  p:43, kv:27, kf:192000, k2:{m1:12000, m2:15000}, fragen:['kv', 'kf', 'dbs', 'bep'],
  merke:'Kostenunterschied ÷ Mengenunterschied = variable Stückkosten (die Fixkosten fallen bei der Differenz heraus).'}),
gs({id:'GS6', stufe:3, titel:'Gewinnschwelle, Auslastung und Mindestpreis', firma:'Fahrradwerk Lorenz GmbH', produkt:'Kinderräder',
  p:95, kv:58, kf:222000, kap:10000, a:80, fragen:['bep', 'bepA', 'ma', 'sg', 'pmin'],
  merke:'Mindestpreis ohne Verlust = Stückkosten = variable Stückkosten + Fixkosten ÷ Menge.'}),
blGSGrafik({id:'GS7', modul:'K10', stufe:2,
  text:'Die Grafik zeigt für ein Erzeugnis der Bürotechnik Kraft GmbH die Erlöse und die Gesamtkosten bis zur Kapazitätsgrenze von {xm} im Monat.%%GRAFIK%%Lies die nötigen Werte ab und berechne die übrigen.',
  werte:[{kf:60000, kv:15, p:35, xm:6000, xs:1000, ys:30000, ym:240000}],
  sets:[[{kf:80000, kv:20, p:40, xm:8000, xs:1000, ys:40000, ym:320000}], [{kf:40000, kv:10, p:30, xm:4000, xs:500, ys:20000, ym:120000}], [{kf:90000, kv:24, p:54, xm:5000, xs:500, ys:30000, ym:300000}]]}),
/* ---------- Theorie Teilkostenrechnung (extra) · Modul-ID K10T ----------
   Entscheidungen mit Deckungsbeiträgen deuten – durchgehend Fahrradwerk Lorenz GmbH. */
{
  id:'TE1', modul:'K10T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Verlust nach Vollkosten, aber positiver Deckungsbeitrag',
  tags:['Teilkostenrechnung','Theorie','Sortiment'],
  text:'Das Fahrradwerk Lorenz GmbH stellt City-, Trekking- und Kinderräder her. Laut Vollkostenrechnung kostet ein Kinderrad 260 € (Selbstkosten), verkauft wird es für 240 €. Die variablen Kosten betragen 175 € je Rad. Die Geschäftsführung will das Kinderrad deshalb aus dem Sortiment nehmen.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Das Kinderrad bringt einen Deckungsbeitrag von 65 € je Stück und trägt damit zur Deckung der Fixkosten bei.', richtig:true,
     weg:'240 € − 175 € = 65 €. Jedes verkaufte Kinderrad deckt 65 € Fixkosten.'},
    {text:'Wird das Kinderrad gestrichen, bleiben die Fixkosten bestehen – das Betriebsergebnis sinkt kurzfristig um die wegfallenden Deckungsbeiträge.', richtig:true,
     weg:'Hallen, Maschinen, Verwaltung kosten weiter dasselbe. Es fehlen nur die Deckungsbeiträge des Kinderrads.'},
    {text:'Langfristig muss der Preis die Selbstkosten decken – man sollte prüfen, ob sich die Kosten senken oder der Preis erhöhen lässt.', richtig:true,
     weg:'Kurzfristig hilft der positive DB, auf Dauer muss jedes Produkt auch seinen Anteil an den Fixkosten tragen.'},
    {text:'Das Kinderrad sollte sofort gestrichen werden, weil es mit jedem Stück 20 € Verlust bringt.',
     fehler:'Die 20 € „Verlust“ entstehen nur, weil Fixkosten auf das Rad verteilt werden. Diese Fixkosten verschwinden beim Streichen nicht.'},
    {text:'Durch das Streichen sinken die Fixkosten um den Fixkostenanteil des Kinderrads.',
     fehler:'Fixkosten sind kurzfristig nicht abbaubar – sie müssen dann von den anderen Rädern getragen werden.'}
  ],
  hinweise:['Rechne den Deckungsbeitrag je Kinderrad aus.', 'Was passiert mit den Fixkosten, wenn ein Produkt wegfällt?', 'Kurzfristig zählt der DB, langfristig die Selbstkosten.'],
  merke:'Ein Produkt mit positivem Deckungsbeitrag verbessert kurzfristig das Betriebsergebnis – auch wenn es nach Vollkosten Verlust zeigt. Streichen kostet genau diesen Deckungsbeitrag.'
},
{
  id:'TE2', modul:'K10T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Zusatzauftrag unter den Selbstkosten',
  tags:['Teilkostenrechnung','Theorie','Zusatzauftrag'],
  text:'Das Fahrradwerk Lorenz GmbH ist zu 80 % ausgelastet. Ein Händler aus Österreich bietet an, einmalig 400 Trekkingräder zu je 410 € abzunehmen. Die Räder lassen sich ohne zusätzliche Fixkosten in der freien Kapazität fertigen. Normaler Verkaufspreis: 560 €, Selbstkosten: 480 €, variable Stückkosten: 350 €.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der Auftrag bringt 60 € Deckungsbeitrag je Rad, insgesamt 24.000 € – das Betriebsergebnis steigt um 24.000 €.', richtig:true,
     weg:'410 € − 350 € = 60 € je Rad; 400 × 60 € = 24.000 €. Die Fixkosten fallen ohnehin an.'},
    {text:'Die Fixkosten fallen ohnehin an – der Zusatzauftrag muss nur die zusätzlichen (variablen) Kosten decken.', richtig:true,
     weg:'Bei freier Kapazität entstehen durch den Auftrag nur variable Kosten.'},
    {text:'Der Auftrag ist abzulehnen, weil der Preis unter den Selbstkosten liegt – jedes Rad bringt 70 € Verlust.',
     fehler:'Die 70 € „Verlust“ enthalten Fixkosten, die ohne den Auftrag genauso anfallen würden. Das ist die typische Vollkostenfalle.'},
    {text:'Der Auftrag ist abzulehnen, weil der Preis unter dem normalen Verkaufspreis liegt.',
     fehler:'Entscheidend ist nicht der Normalpreis, sondern ob der Preis die variablen Kosten übersteigt – hier um 60 € je Rad.'}
  ],
  hinweise:['Welche Kosten entstehen durch den Auftrag zusätzlich?', 'Deckungsbeitrag je Rad = Preis − variable Stückkosten.', 'Die Fixkosten fallen mit und ohne Auftrag gleich an.'],
  merke:'Zusatzauftrag bei freier Kapazität: annehmen, wenn der Preis über den variablen Stückkosten liegt (positiver DB). Die Selbstkosten sind dafür nicht maßgeblich.'
},
{
  id:'TE3', modul:'K10T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Zusatzauftrag – unter welchen Bedingungen?',
  tags:['Teilkostenrechnung','Theorie','Zusatzauftrag'],
  text:'Das Fahrradwerk Lorenz GmbH überlegt, den Zusatzauftrag aus Österreich (Preis unter den Selbstkosten, aber über den variablen Kosten) anzunehmen.',
  frage:'Welche Bedingungen sollten erfüllt sein?',
  optionen:[
    {text:'Es sind freie Kapazitäten vorhanden – kein regulärer Auftrag wird verdrängt.', richtig:true,
     weg:'Müsste dafür reguläre Produktion entfallen, gingen deren Deckungsbeiträge verloren.'},
    {text:'Die Stammkunden erfahren nichts vom niedrigeren Preis, z. B. weil der Auftrag aus einem anderen Land kommt oder unter anderer Marke läuft.', richtig:true,
     weg:'Sonst verlangen alle Kunden den Sonderpreis – dann fehlen die Deckungsbeiträge im Hauptgeschäft.'},
    {text:'Es entstehen keine zusätzlichen Fixkosten (z. B. eine neue Maschine) – oder sie werden durch den Deckungsbeitrag des Auftrags gedeckt.', richtig:true,
     weg:'Zusätzliche Fixkosten, die nur wegen des Auftrags entstehen, gehören in die Rechnung.'},
    {text:'Der Preis muss mindestens die Selbstkosten decken.',
     fehler:'Für einen Zusatzauftrag bei freier Kapazität reicht ein Preis über den variablen Stückkosten.'},
    {text:'Der Händler muss bar bezahlen.',
     fehler:'Die Zahlungsart hat mit der Kostenentscheidung nichts zu tun.'}
  ],
  hinweise:['Was darf durch den Auftrag nicht verloren gehen?', 'Was passiert, wenn andere Kunden vom Sonderpreis hören?', 'Welche Kosten entstehen eventuell zusätzlich?'],
  merke:'Zusatzauftrag unter Selbstkosten: nur bei freier Kapazität, ohne Folgen für die Preise im Stammgeschäft und unter Berücksichtigung zusätzlicher Fixkosten.'
},
{
  id:'TE4', modul:'K10T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Kurz- und langfristige Preisuntergrenze',
  tags:['Teilkostenrechnung','Theorie','Preisuntergrenze'],
  text:'Für das Citybike des Fahrradwerks Lorenz gilt: variable Stückkosten 210 €, Selbstkosten 290 €. Wegen schwacher Nachfrage will der Vertrieb das Rad für einige Monate für 250 € anbieten.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die kurzfristige Preisuntergrenze liegt bei 210 € – darunter verschlechtert jedes verkaufte Rad das Ergebnis.', richtig:true,
     weg:'Unter den variablen Kosten ist der Deckungsbeitrag negativ.'},
    {text:'Die langfristige Preisuntergrenze liegt bei 290 € – auf Dauer müssen auch die Fixkosten gedeckt sein.', richtig:true,
     weg:'Langfristig muss der Preis die Selbstkosten erreichen, sonst entsteht Verlust.'},
    {text:'Der Preis von 250 € ist vorübergehend vertretbar, weil er noch 40 € Deckungsbeitrag je Rad bringt.', richtig:true,
     weg:'250 € − 210 € = 40 €. Ohne diese Verkäufe fehlten die 40 € je Rad zur Deckung der Fixkosten.'},
    {text:'Bei 250 € macht jedes Rad 40 € Verlust – die Produktion sollte eingestellt werden.',
     fehler:'Bei Einstellung blieben die Fixkosten vollständig ungedeckt – der Verlust wäre größer.'},
    {text:'Die kurzfristige Preisuntergrenze sind die Selbstkosten.',
     fehler:'Kurzfristig reichen die variablen Kosten, die Selbstkosten sind die langfristige Grenze.'}
  ],
  hinweise:['Was ist die kurzfristige, was die langfristige Grenze?', 'Rechne den DB bei 250 € aus.', 'Was passiert mit den Fixkosten, wenn nicht mehr produziert wird?'],
  merke:'Kurzfristige (absolute) Preisuntergrenze = variable Stückkosten. Langfristige Preisuntergrenze = Selbstkosten je Stück. Dazwischen ist ein Preis vorübergehend vertretbar.'
},
{
  id:'TE5', modul:'K10T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Höchster Deckungsbeitrag ist nicht automatisch der beste',
  tags:['Teilkostenrechnung','Theorie','Relativer DB'],
  text:'Die Lackieranlage des Fahrradwerks Lorenz ist der Engpass. Ein Citybike bringt 90 € Deckungsbeitrag und braucht 30 Minuten in der Lackierung, ein Trekkingrad bringt 120 € und braucht 60 Minuten.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Je Lackierstunde bringt das Citybike 180 € Deckungsbeitrag, das Trekkingrad nur 120 € – das Citybike ist vorzuziehen.', richtig:true,
     weg:'90 € ÷ 0,5 h = 180 €/h; 120 € ÷ 1 h = 120 €/h.'},
    {text:'Bei einem Engpass entscheidet der Deckungsbeitrag je Engpasseinheit (relativer DB), nicht der Deckungsbeitrag je Stück.', richtig:true,
     weg:'Die knappe Größe sind die Lackierstunden – die sollen so viel DB wie möglich bringen.'},
    {text:'Gäbe es keinen Engpass, würde man beide Räder herstellen, soweit sie sich absetzen lassen.', richtig:true,
     weg:'Ohne Engpass verbessert jedes Produkt mit positivem DB das Ergebnis.'},
    {text:'Das Trekkingrad hat den höheren Deckungsbeitrag je Stück und wird deshalb zuerst gefertigt.',
     fehler:'Das gilt nur ohne Engpass. Mit Engpass kostet ein Trekkingrad so viel Lackierzeit wie zwei Citybikes, die zusammen 180 € DB bringen.'},
    {text:'Der relative Deckungsbeitrag ist der Deckungsbeitrag geteilt durch den Verkaufspreis.',
     fehler:'Geteilt wird durch die Engpasszeit (bzw. Engpassmenge) je Stück.'}
  ],
  hinweise:['Wie viel DB bringt eine Stunde Lackierung bei jedem Rad?', 'Was ist knapp – Räder oder Lackierstunden?', 'Relativer DB = DB je Stück ÷ Engpasszeit je Stück.'],
  merke:'Bei einem Engpass entscheidet der relative Deckungsbeitrag (DB je Engpasseinheit) über die Rangfolge – nicht der höchste DB je Stück.'
},
{
  id:'TE6', modul:'K10T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Make or buy: Kosten vergleichen',
  tags:['Teilkostenrechnung','Theorie','Make or Buy'],
  text:'Das Fahrradwerk Lorenz fertigt Gepäckträger selbst: variable Kosten 18 € je Stück, Selbstkosten einschließlich Fixkostenanteil 27 €. Ein Zulieferer bietet sie für einen Einstandspreis von 23 € an. Die Fertigung ist nicht ausgelastet.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Kurzfristig ist die Eigenfertigung günstiger: Es zählen nur die variablen Kosten von 18 € gegen den Einstandspreis von 23 €.', richtig:true,
     weg:'Jeder fremd bezogene Gepäckträger kostet 5 € mehr, als die eigene Fertigung zusätzlich kostet.'},
    {text:'Die Fixkosten der eigenen Fertigung fallen auch bei Fremdbezug weiter an und bleiben im Vergleich außen vor.', richtig:true,
     weg:'Hallen und Maschinen sind vorhanden – sie kosten bei Fremdbezug genauso viel.'},
    {text:'Müsste für die Eigenfertigung eine neue Maschine angeschafft werden, gehören deren Fixkosten in den Vergleich.', richtig:true,
     weg:'Zusätzliche Fixkosten entstehen nur bei Eigenfertigung – dann wird über die kritische Menge entschieden.'},
    {text:'Der Fremdbezug ist günstiger, weil 23 € weniger sind als die Selbstkosten von 27 €.',
     fehler:'Die 27 € enthalten Fixkosten, die bei Fremdbezug nicht wegfallen. Verglichen werden 18 € mit 23 €.'},
    {text:'Als Preis des Zulieferers zählt der Listeneinkaufspreis.',
     fehler:'Verglichen wird der Einstandspreis: Listeneinkaufspreis − Rabatt − Skonto + Bezugskosten.'}
  ],
  hinweise:['Welche Kosten fallen bei Fremdbezug weg, welche bleiben?', 'Vergleiche die wegfallenden Kosten mit dem Einstandspreis.', 'Was ändert sich, wenn für die Eigenfertigung eine Maschine gekauft werden muss?'],
  merke:'Make or buy bei freier Kapazität: variable Stückkosten der Eigenfertigung gegen Einstandspreis. Vorhandene Fixkosten bleiben außen vor, zusätzliche Fixkosten gehören in den Vergleich.'
},
{
  id:'TE7', modul:'K10T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Make or buy: Gründe für die Eigenfertigung',
  tags:['Teilkostenrechnung','Theorie','Make or Buy'],
  text:'Das Fahrradwerk Lorenz überlegt, die Rahmen künftig von einem Zulieferer zu beziehen statt sie selbst zu schweißen.',
  frage:'Welche Argumente sprechen – neben den Kosten – für die Eigenfertigung?',
  optionen:[
    {text:'Das Know-how für Rahmenbau bleibt im Unternehmen.', richtig:true,
     weg:'Wer den Kern seines Produkts abgibt, verliert Wissen und Erfahrung – und baut es später nur schwer wieder auf.'},
    {text:'Man ist unabhängig von Lieferausfällen und Preiserhöhungen des Zulieferers.', richtig:true,
     weg:'Eigenfertigung vermeidet Abhängigkeit von einem einzelnen Lieferanten.'},
    {text:'Die Qualität kann direkt im eigenen Haus überwacht werden.', richtig:true,
     weg:'Bei Eigenfertigung hat man Material, Schweißnähte und Prüfungen selbst in der Hand.'},
    {text:'Der Zulieferer kann Nachfrageschwankungen auffangen – man braucht keine eigenen Kapazitäten vorzuhalten.',
     fehler:'Das ist ein Argument für den Fremdbezug.'},
    {text:'Der Zulieferer ist spezialisiert und arbeitet mit neuester Technik.',
     fehler:'Auch das spricht für den Fremdbezug.'}
  ],
  hinweise:['Was verliert man, wenn ein anderer den Rahmen baut?', 'Was passiert, wenn der Zulieferer nicht liefert?', 'Zwei Antworten sprechen für die andere Seite.'],
  merke:'Für Eigenfertigung: Know-how, Unabhängigkeit, Qualitätskontrolle, Auslastung eigener Kapazitäten. Für Fremdbezug: Spezialisierung des Lieferanten, Flexibilität, keine eigenen Investitionen.'
},
{
  id:'TE8', modul:'K10T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Wohin wandert die Gewinnschwelle?',
  tags:['Teilkostenrechnung','Theorie','Gewinnschwelle'],
  text:'Beim Fahrradwerk Lorenz liegt die Gewinnschwelle für das Trekkingrad bei 3.000 Stück (Fixkosten 360.000 €, Deckungsbeitrag 120 € je Rad).',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Steigen die Fixkosten, steigt die Gewinnschwelle.', richtig:true,
     weg:'Gewinnschwelle = Fixkosten ÷ DB je Stück – größerer Zähler, größeres Ergebnis.'},
    {text:'Sinkt der Verkaufspreis bei gleichen variablen Kosten, steigt die Gewinnschwelle.', richtig:true,
     weg:'Der DB je Stück wird kleiner – man braucht mehr Räder, um die Fixkosten zu decken.'},
    {text:'Sinken die variablen Stückkosten, sinkt die Gewinnschwelle.', richtig:true,
     weg:'Der DB je Stück steigt – weniger Räder reichen zur Deckung der Fixkosten.'},
    {text:'Steigt die Absatzmenge, sinkt die Gewinnschwelle.',
     fehler:'Die Absatzmenge ändert die Gewinnschwelle nicht – nur den Abstand zu ihr und damit den Gewinn.'},
    {text:'Steigen die variablen Stückkosten, sinkt die Gewinnschwelle.',
     fehler:'Höhere variable Kosten verkleinern den DB je Stück – die Gewinnschwelle steigt.'}
  ],
  hinweise:['Gewinnschwelle = Fixkosten ÷ Deckungsbeitrag je Stück.', 'Was verändert den Zähler, was den Nenner?', 'Kommt die Absatzmenge in der Formel vor?'],
  merke:'Gewinnschwelle = Fixkosten ÷ DB je Stück. Sie steigt mit den Fixkosten und mit sinkendem DB (niedrigerer Preis, höhere variable Kosten).'
},
{
  id:'TE9', modul:'K10T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Abstand zur Gewinnschwelle deuten',
  tags:['Teilkostenrechnung','Theorie','Gewinnschwelle'],
  text:'Das Fahrradwerk Lorenz verkauft im Jahr 3.600 Trekkingräder. Die Gewinnschwelle liegt bei 3.000 Stück, der Deckungsbeitrag bei 120 € je Rad.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der Absatz darf um 600 Räder (rund 16,7 %) sinken, bevor Verlust entsteht.', richtig:true,
     weg:'3.600 − 3.000 = 600 Räder Sicherheitsabstand; 600 ÷ 3.600 ≈ 16,7 %.'},
    {text:'Der Gewinn beträgt 600 × 120 € = 72.000 €.', richtig:true,
     weg:'Bis zur Gewinnschwelle decken die DB die Fixkosten; jedes weitere Rad bringt seinen vollen DB als Gewinn.'},
    {text:'Bei 3.600 Rädern sind die Fixkosten erst zu 83 % gedeckt.',
     fehler:'Die Fixkosten sind schon bei 3.000 Rädern vollständig gedeckt – darüber entsteht Gewinn.'},
    {text:'Unterhalb der Gewinnschwelle ist der Deckungsbeitrag je Rad negativ.',
     fehler:'Der DB je Rad bleibt 120 € – unterhalb der Gewinnschwelle reicht nur die Summe nicht für die Fixkosten.'}
  ],
  hinweise:['Wie viele Räder liegen über der Gewinnschwelle?', 'Was bringt jedes Rad über der Gewinnschwelle?', 'Ändert sich der DB je Rad mit der Menge?'],
  merke:'Über der Gewinnschwelle bringt jedes Stück seinen vollen Deckungsbeitrag als Gewinn. Sicherheitsabstand = Ist-Absatz − Gewinnschwelle.'
},
{
  id:'TE10', modul:'K10T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Zusatzauftrag bei voller Auslastung',
  tags:['Teilkostenrechnung','Theorie','Zusatzauftrag'],
  text:'Das Fahrradwerk Lorenz ist voll ausgelastet. Ein Großkunde will 500 Citybikes zu je 300 € (variable Kosten 210 €). Dafür müssten 500 Trekkingräder mit je 120 € Deckungsbeitrag entfallen – beide Räder brauchen gleich viel Fertigungszeit.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der Auftrag verdrängt Räder mit höherem Deckungsbeitrag – das Betriebsergebnis sinkt um 500 × 30 € = 15.000 €.', richtig:true,
     weg:'Gewonnen: 500 × 90 € = 45.000 € DB. Verloren: 500 × 120 € = 60.000 € DB. Saldo −15.000 €.'},
    {text:'Bei voller Auslastung muss ein Zusatzauftrag mehr Deckungsbeitrag bringen als die Produktion, die er verdrängt.', richtig:true,
     weg:'Die entgangenen Deckungsbeiträge sind die eigentlichen „Kosten“ des Auftrags.'},
    {text:'Der Auftrag sollte angenommen werden, weil der Preis über den variablen Kosten liegt.',
     fehler:'Das reicht nur bei freier Kapazität. Hier geht dafür ein höherer Deckungsbeitrag verloren.'},
    {text:'Bei voller Auslastung spielt der Deckungsbeitrag keine Rolle mehr.',
     fehler:'Gerade dann entscheidet der Vergleich der Deckungsbeiträge – bei unterschiedlichen Fertigungszeiten der relative DB.'}
  ],
  hinweise:['Was wird gewonnen, was geht verloren?', 'Vergleiche die Deckungsbeiträge beider Räder.', 'Freie Kapazität oder voll ausgelastet – was ändert das?'],
  merke:'Freie Kapazität: Zusatzauftrag lohnt bei positivem DB. Volle Auslastung: Er lohnt nur, wenn er mehr DB bringt als die verdrängte Produktion (oder die Kosten einer Kapazitätserweiterung deckt).'
},
/* ---------- Kostenanalyse: kritische Kostenpunkte · Modul-ID K11 ----------
   Lineare Gesamtkosten (Bildungsplan BKFH LPE 5): Nutzenschwelle, Betriebsoptimum, Gewinnmaximum
   in der Gesamt- und Stückbetrachtung, tabellarisch und grafisch. */
{
  id:'KA1', modul:'K11', typ:'berechnung', mehrfach:true, stufe:1, titel:'Kritische Kostenpunkte bei linearen Gesamtkosten',
  tags:['Kostenanalyse','Theorie','Betriebsoptimum','Gewinnmaximum'],
  text:'Ein Industriebetrieb rechnet mit linearen Gesamtkosten: K = Fixkosten + variable Stückkosten × Menge. Der Preis ist fest, die Kapazität begrenzt.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die Nutzenschwelle liegt dort, wo Erlöse und Gesamtkosten gleich hoch sind – in der Stückbetrachtung, wo die Stückkosten den Preis erreichen.', richtig:true, weg:'Ab hier entsteht Gewinn.'},
    {text:'Weil die Fixkosten je Stück mit jeder weiteren Einheit sinken, liegt das Betriebsoptimum (niedrigste Stückkosten) an der Kapazitätsgrenze.', richtig:true, weg:'Die Stückkosten im Betriebsoptimum sind die langfristige Preisuntergrenze.'},
    {text:'Das Gewinnmaximum liegt ebenfalls an der Kapazitätsgrenze, solange der Preis über den variablen Stückkosten liegt.', richtig:true, weg:'Jede weitere Einheit bringt einen positiven Deckungsbeitrag.'},
    {text:'Das Betriebsoptimum liegt dort, wo Bestellkosten und Lagerkosten gleich hoch sind.', fehler:'Das beschreibt die optimale Bestellmenge (Beschaffung). Das Betriebsoptimum ist die Menge mit den niedrigsten Stückkosten.'},
    {text:'Die kurzfristige Preisuntergrenze sind die Stückkosten im Betriebsoptimum.', fehler:'Kurzfristig genügt es, die variablen Stückkosten zu decken. Die Stückkosten im Betriebsoptimum sind die langfristige Preisuntergrenze.'}
  ],
  hinweise:['Wie verändern sich die Fixkosten je Stück, wenn die Menge steigt?', 'Was bringt jede weitere Einheit, wenn der Preis über den variablen Stückkosten liegt?'],
  merke:'Lineare Gesamtkosten: Nutzenschwelle bei Erlöse = Kosten (Preis = Stückkosten) · Betriebsoptimum und Gewinnmaximum an der Kapazitätsgrenze · kurzfristige Preisuntergrenze = variable Stückkosten, langfristige = Stückkosten im Betriebsoptimum.'
},
blBau('rechnung', {id:'KA5', modul:'K11', stufe:1, titel:'Rechnerische Kostenauflösung', tags:['Kostenanalyse', 'Kostenauflösung', 'fixe Kosten', 'variable Kosten', 'Fixkostendegression'], kopf:'Kostenauflösung',
  text:'Die Metallbau Schröder GmbH kennt aus zwei Monaten nur die Gesamtkosten. Sie geht von einem linearen Kostenverlauf aus.' + blGeg([['Monat 1: Menge', '{x1} Stück'], ['Monat 1: Gesamtkosten', '{K1} €'], ['Monat 2: Menge', '{x2} Stück'], ['Monat 2: Gesamtkosten', '{K2} €']]) + '<b>Auftrag:</b> Löse die Gesamtkosten rechnerisch in fixe und variable Kosten auf und berechne die Stückkosten in beiden Monaten.',
  spalten:['Betrag'],
  zeilen:[{id:'x1', aus:true, e:'Stück'}, {id:'K1', aus:true, e:'€'}, {id:'x2', aus:true, e:'Stück'}, {id:'K2', aus:true, e:'€'},
    {id:'k1', t:'Kostenauflösung (Differenzen-Quotienten-Verfahren)', art:'kopf'},
    {id:'dK', t:'Kostendifferenz = Gesamtkosten Monat 2 − Gesamtkosten Monat 1', kurz:'Kostendifferenz', e:'€', f:'K2 - K1'},
    {id:'dx', t:'Mengendifferenz = Menge Monat 2 − Menge Monat 1', kurz:'Mengendifferenz', e:'Stück', f:'x2 - x1'},
    {id:'kv', t:'Variable Kosten je Stück = Kostendifferenz ÷ Mengendifferenz', kurz:'Variable Stückkosten', e:'€', f:'dK / dx', art:'zwischen'},
    {id:'Kf', t:'Fixkosten = Gesamtkosten Monat 1 − Menge Monat 1 × variable Stückkosten', kurz:'Fixkosten', e:'€', f:'K1 - x1 * kv', art:'summe'},
    {id:'k2', t:'Stückkosten', art:'kopf'},
    {id:'k1s', t:'Stückkosten Monat 1 = Gesamtkosten ÷ Menge', kurz:'Stückkosten Monat 1', e:'€', f:'K1 / x1'},
    {id:'k2s', t:'Stückkosten Monat 2 = Gesamtkosten ÷ Menge', kurz:'Stückkosten Monat 2', e:'€', f:'K2 / x2'}],
  wahl:[{id:'w1', t:'Warum sind die Stückkosten im Monat 2 niedriger?', opts:['Die Fixkosten verteilen sich auf mehr Stück (Fixkostendegression).', 'Die variablen Kosten je Stück sinken mit der Menge.', 'Die Gesamtkosten sind im Monat 2 niedriger.'], r:'0'}],
  werte:[{x1:4000, K1:164000, x2:6000, K2:212000}],
  sets:[[{x1:2500, K1:117500, x2:4000, K2:161000}], [{x1:8000, K1:236000, x2:10000, K2:270000}], [{x1:1200, K1:58800, x2:2000, K2:81200}]],
  hinweise:['Bei linearen Kosten erklärt nur der variable Teil die Kostenänderung zwischen den Monaten.', 'Setze die variablen Stückkosten in einen der beiden Monate ein, um die Fixkosten zu erhalten.'],
  merke:'Kostenauflösung: variable Stückkosten = ΔK ÷ Δx; Fixkosten = K − x × kv. Steigt die Menge, sinken die Stückkosten, weil sich die Fixkosten auf mehr Stück verteilen (Fixkostendegression).'}),
blBau('rechnung', {id:'KA2', modul:'K11', stufe:1, titel:'Gesamt- und Stückbetrachtung in der Tabelle', tags:['Kostenanalyse', 'Nutzenschwelle', 'Betriebsoptimum', 'Gewinnmaximum'], kopf:'Beschäftigung (Beträge in €)',
  text:'Die Kunststoffwerk Lenz GmbH fertigt Aufbewahrungsboxen.' + blGeg([['Fixkosten je Monat', '{kf} €'], ['Variable Kosten je Stück', '{kv} €'], ['Verkaufspreis je Stück', '{p} €'], ['Kapazitätsgrenze', '{x@4}']]) + '<b>Auftrag:</b> Fülle die Tabelle aus und bestimme die kritischen Kostenpunkte.',
  spalten:['Stufe 1', 'Stufe 2', 'Stufe 3', 'Stufe 4', 'Kapazitätsgrenze'],
  zeilen:[{id:'kf', aus:true, e:'ma'}, {id:'kv', aus:true, e:'ma'}, {id:'p', aus:true, e:'ma'},
    {id:'x', t:'Menge', e:'Stück'},
    {id:'k1', t:'Gesamtbetrachtung', art:'kopf'},
    {id:'Kf', t:'Fixkosten', e:'ma', f:'kf'},
    {id:'Kv', t:'Variable Kosten', e:'ma', f:'x * kv'},
    {id:'K', t:'Gesamtkosten', e:'ma', f:'Kf + Kv', art:'zwischen'},
    {id:'E', t:'Erlöse', e:'ma', f:'x * p'},
    {id:'G', t:'Gewinn (+) / Verlust (−)', kurz:'Gewinn/Verlust', e:'ma', f:'E - K', art:'summe'},
    {id:'k2', t:'Stückbetrachtung', art:'kopf'},
    {id:'kfs', t:'Fixe Kosten je Stück', e:'ma', f:'kf / x'},
    {id:'kvs', t:'Variable Kosten je Stück', e:'ma', f:'kv'},
    {id:'k', t:'Stückkosten', e:'ma', f:'kfs + kvs', art:'zwischen'},
    {id:'g', t:'Stückgewinn (+) / Stückverlust (−)', kurz:'Stückgewinn', e:'ma', f:'p - k', art:'summe'}],
  felder:[{id:'bep', t:'Nutzenschwelle (Stück) = Fixkosten ÷ (Preis − variable Stückkosten)', kurz:'Nutzenschwelle', e:'Stück', f:'kf / (p - kv)'},
    {id:'bo', t:'Betriebsoptimum (Stück)', e:'Stück', f:'x@4', weg:(V, F) => `niedrigste Stückkosten an der Kapazitätsgrenze → ${blB(blN(F.bo))} Stück`},
    {id:'gm', t:'Gewinnmaximum (Stück)', e:'Stück', f:'x@4', weg:(V, F) => `höchster Gewinn an der Kapazitätsgrenze → ${blB(blN(F.gm))} Stück`}],
  wahl:[{id:'w1', t:'Warum liegen Betriebsoptimum und Gewinnmaximum hier an der Kapazitätsgrenze?', opts:['Bei linearen Gesamtkosten sinken die Stückkosten mit jeder weiteren Einheit, und jede Einheit bringt einen positiven Deckungsbeitrag.', 'Weil dort Erlöse und Gesamtkosten gleich hoch sind.', 'Weil dort die variablen Stückkosten am niedrigsten sind.'], r:'0'}],
  werte:[2000, 4000, 6000, 8000, 10000].map(x => ({x, kf:120000, kv:30, p:50})),
  sets:[[1500, 3000, 4500, 6000, 7500].map(x => ({x, kf:90000, kv:25, p:40})), [2000, 4000, 6000, 8000, 10000].map(x => ({x, kf:144000, kv:36, p:60}))],
  hinweise:['Fixkosten bleiben in jeder Spalte gleich; die variablen Kosten wachsen mit der Menge.', 'Stückkosten = Fixkosten je Stück + variable Stückkosten.', 'Nutzenschwelle: Wo wird der Verlust zu null?'],
  merke:'Mit steigender Menge sinken die Stückkosten (Fixkostendegression). Bei linearen Kosten liegen Betriebsoptimum und Gewinnmaximum an der Kapazitätsgrenze; die Nutzenschwelle liegt bei Fixkosten ÷ Deckungsbeitrag je Stück.'}),
blBau('rechnung', {id:'KA3', modul:'K11', stufe:2, titel:'Kritische Punkte und Preisuntergrenzen berechnen', tags:['Kostenanalyse', 'Nutzenschwelle', 'Betriebsoptimum', 'Preisuntergrenze'], kopf:'Kostenanalyse',
  text:'Die Möbelwerk Kraus GmbH fertigt Beistelltische.' + blGeg([['Fixkosten je Monat', '{kf}'], ['Variable Kosten je Stück', '{kv}'], ['Verkaufspreis je Stück', '{p}'], ['Kapazitätsgrenze', '{kap}']]) + '<b>Auftrag:</b> Ermittle die kritischen Kostenpunkte und die Preisuntergrenzen.',
  spalten:['Betrag'],
  zeilen:[{id:'kf', aus:true, e:'€'}, {id:'kv', aus:true, e:'€'}, {id:'p', aus:true, e:'€'}, {id:'kap', aus:true, e:'Stück'},
    {id:'k1', t:'Nutzenschwelle', art:'kopf'},
    {id:'db', t:'Deckungsbeitrag je Stück = Preis − variable Stückkosten', kurz:'Deckungsbeitrag je Stück', e:'€', f:'p - kv'},
    {id:'bep', t:'Nutzenschwelle = Fixkosten ÷ Deckungsbeitrag je Stück', kurz:'Nutzenschwelle', e:'Stück', f:'kf / db'},
    {id:'bepA', t:'Auslastung an der Nutzenschwelle = Nutzenschwelle ÷ Kapazität × 100', kurz:'Auslastung an der Nutzenschwelle', e:'%', f:'bep / kap * 100'},
    {id:'k2', t:'Betriebsoptimum und Gewinnmaximum (Kapazitätsgrenze)', art:'kopf'},
    {id:'kbo', t:'Stückkosten im Betriebsoptimum = variable Stückkosten + Fixkosten ÷ Kapazität', kurz:'Stückkosten im Betriebsoptimum', e:'€', f:'kv + kf / kap'},
    {id:'gmax', t:'Gewinn im Gewinnmaximum = Kapazität × Deckungsbeitrag je Stück − Fixkosten', kurz:'Maximaler Gewinn', e:'€', f:'kap * db - kf'},
    {id:'k3', t:'Preisuntergrenzen', art:'kopf'},
    {id:'kpu', t:'Kurzfristige Preisuntergrenze (variable Stückkosten)', kurz:'Kurzfristige Preisuntergrenze', e:'€', f:'kv'},
    {id:'lpu', t:'Langfristige Preisuntergrenze (Stückkosten im Betriebsoptimum)', kurz:'Langfristige Preisuntergrenze', e:'€', f:'kbo'}],
  werte:[{kf:360000, kv:50, p:80, kap:20000}],
  sets:[[{kf:162000, kv:27, p:45, kap:15000}], [{kf:288000, kv:84, p:120, kap:12000}], [{kf:210000, kv:35, p:50, kap:20000}]],
  hinweise:['Bei linearen Kosten liegen Betriebsoptimum und Gewinnmaximum an der Kapazitätsgrenze.', 'Kurzfristig müssen nur die variablen Kosten gedeckt sein, langfristig alle Kosten.'],
  merke:'Kurzfristige Preisuntergrenze = variable Stückkosten · langfristige Preisuntergrenze = Stückkosten im Betriebsoptimum. Die Auslastung an der Nutzenschwelle zeigt den Sicherheitsabstand.'}),
blBau('rechnung', {id:'KA4', modul:'K11', stufe:2, titel:'Stückkostenverlauf aus der Grafik', tags:['Kostenanalyse', 'Grafik', 'Betriebsoptimum', 'Nutzenschwelle'], kopf:'Werte aus der Grafik',
  text:'Die Grafik zeigt für ein Erzeugnis der Bürotechnik Kraft GmbH den Preis, die variablen Stückkosten und die Stückkosten bis zur Kapazitätsgrenze.%%GRAFIK%%Lies die nötigen Werte ab und berechne die übrigen.',
  grafik:W => blStueckGrafik(W[0]),
  spalten:['Wert'],
  zeilen:[{id:'kf', aus:true, e:'€'}, {id:'kv', aus:true, e:'€'}, {id:'p', aus:true, e:'€'}, {id:'x0', aus:true, e:''}, {id:'xm', aus:true, e:''}, {id:'xs', aus:true, e:''}, {id:'ym', aus:true, e:''}, {id:'ys', aus:true, e:''},
    {id:'k1', t:'Ablesen', art:'kopf'},
    {id:'pa', t:'Preis je Stück', e:'€', f:'p', weg:w => 'abgelesen (waagerechte grüne Linie): [pa]'},
    {id:'kva', t:'Variable Stückkosten', e:'€', f:'kv', weg:w => 'abgelesen (gestrichelte Linie): [kva]'},
    {id:'kk', t:'Stückkosten an der Kapazitätsgrenze', e:'€', f:'kv + kf / xm', weg:w => 'abgelesen am rechten Ende der roten Kurve: [kk]'},
    {id:'k2', t:'Berechnen', art:'kopf'},
    {id:'kfr', t:'Fixkosten = (Stückkosten − variable Stückkosten) × Kapazität', kurz:'Fixkosten', e:'€', f:'(kk - kva) * xm'},
    {id:'bep', t:'Nutzenschwelle = Fixkosten ÷ (Preis − variable Stückkosten)', kurz:'Nutzenschwelle', e:'Stück', f:'kfr / (pa - kva)'},
    {id:'gk', t:'Gewinn an der Kapazitätsgrenze = (Preis − Stückkosten) × Kapazität', kurz:'Gewinn an der Kapazitätsgrenze', e:'€', f:'(pa - kk) * xm'}],
  wahl:[{id:'w1', t:'Wo liegt das Betriebsoptimum?', opts:['an der Kapazitätsgrenze – dort sind die Stückkosten am niedrigsten', 'an der Nutzenschwelle', 'dort, wo die Stückkosten die variablen Stückkosten berühren'], r:'0'}],
  werte:[{kf:100000, kv:30, p:50, x0:1000, xm:10000, xs:1000, ym:100, ys:10}],
  sets:[[{kf:60000, kv:20, p:35, x0:800, xm:6000, xs:1000, ym:70, ys:5}], [{kf:160000, kv:40, p:60, x0:1600, xm:16000, xs:2000, ym:120, ys:10}]],
  hinweise:['Die Nutzenschwelle siehst du dort, wo die Stückkostenkurve die Preislinie schneidet – rechne zur Kontrolle nach.', 'Fixkosten je Stück = Abstand zwischen Stückkosten und variablen Stückkosten.'],
  merke:'Die Stückkostenkurve nähert sich den variablen Stückkosten, erreicht sie aber nie. Schnittpunkt mit dem Preis = Nutzenschwelle, tiefster Punkt (Kapazitätsgrenze) = Betriebsoptimum.'}),
/* ---------- Anpassung an Beschäftigungsschwankungen · Modul-ID K12 ---------- */
{
  id:'AN1', modul:'K12', typ:'berechnung', mehrfach:true, stufe:1, titel:'Anpassungsformen und Kostenremanenz',
  tags:['Kostenanalyse','Theorie','Anpassung','Kostenremanenz'],
  text:'Die Nachfrage nach den Produkten eines Industriebetriebs schwankt stark.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Zeitliche Anpassung: Die Arbeitszeit wird verändert, z. B. durch Überstunden, Kurzarbeit oder Arbeitszeitkonten.', richtig:true, weg:'Die Anlagen bleiben gleich, nur die Einsatzzeit ändert sich.'},
    {text:'Überstunden mit Zuschlägen erhöhen die variablen Stückkosten der Mehrmenge; Arbeitszeitkonten ohne Zuschläge nicht.', richtig:true, weg:'Deshalb sind flexible Arbeitszeitmodelle oft günstiger als Überstunden.'},
    {text:'Quantitative Anpassung: Die Zahl der eingesetzten Anlagen oder Arbeitskräfte wird verändert – bei einer Erweiterungsinvestition steigen die Fixkosten sprunghaft (sprungfixe Kosten).', richtig:true, weg:'Die Nutzenschwelle verschiebt sich nach rechts.'},
    {text:'Kostenremanenz: Sinkt die Beschäftigung, gehen die Kosten nicht im gleichen Maß zurück, wie sie vorher gestiegen sind (z. B. wegen Kündigungsfristen und laufender Verträge).', richtig:true, weg:'Die Kosten „hinken hinterher“.'},
    {text:'Bei Kostenremanenz sinken die Kosten schneller als die Beschäftigung.', fehler:'Genau umgekehrt: Die Kosten bleiben zunächst hoch, obwohl weniger produziert wird.'}
  ],
  hinweise:['Zeitlich = Arbeitszeit, quantitativ = Zahl der Anlagen/Arbeitskräfte.', 'Remanenz kommt von „zurückbleiben“.'],
  merke:'Zeitliche Anpassung: Überstunden, Kurzarbeit, Arbeitszeitkonten · quantitative Anpassung: Anlagen zu-/abschalten, Erweiterungs- oder Rationalisierungsinvestition (sprungfixe Kosten) · Kostenremanenz: Kosten sinken bei Beschäftigungsrückgang verzögert.'
},
blBau('rechnung', {id:'AN2', modul:'K12', stufe:2, titel:'Zeitliche Anpassung mit Überstunden', tags:['Kostenanalyse', 'Anpassung', 'Überstunden', 'Betriebsoptimum'], kopf:'Beschäftigung (Beträge in €)',
  text:'Die Kunststoffwerk Lenz GmbH kann in der normalen Arbeitszeit {nk} herstellen. Mit Überstunden ist mehr möglich; wegen der Überstundenzuschläge steigen dann die variablen Kosten der <b>Mehrmenge</b>.'
    + blGeg([['Fixkosten je Monat', '{kf} €'], ['Variable Kosten je Stück (normale Arbeitszeit)', '{kv} €'], ['Variable Kosten je Stück der Mehrmenge (Überstunden)', '{kvu} €'], ['Normalkapazität', '{nk}'], ['Höchstkapazität mit Überstunden', '{x@3}'], ['Verkaufspreis je Stück', '{p} €']])
    + '<b>Auftrag:</b> Fülle die Tabelle aus und bestimme Betriebsoptimum und Gewinnmaximum.',
  spalten:['Stufe 1', 'Normalkapazität', 'Stufe 3', 'Höchstkapazität'],
  zeilen:[{id:'kf', aus:true, e:'ma'}, {id:'kv', aus:true, e:'ma'}, {id:'kvu', aus:true, e:'ma'}, {id:'nk', aus:true, e:'Stück'}, {id:'p', aus:true, e:'ma'},
    {id:'x', t:'Menge', e:'Stück'},
    {id:'Kv', t:'Variable Kosten', e:'ma', f:'min(x, nk) * kv + max(0, x - nk) * kvu', weg:w => w.x > w.nk ? '{nk} × {kv} + ({x} − {nk}) × {kvu} = [Kv]' : '{x} × {kv} = [Kv]'},
    {id:'K', t:'Gesamtkosten = Fixkosten + variable Kosten', kurz:'Gesamtkosten', e:'ma', f:'kf + Kv', art:'zwischen'},
    {id:'E', t:'Erlöse', e:'ma', f:'x * p'},
    {id:'G', t:'Gewinn (+) / Verlust (−)', kurz:'Gewinn/Verlust', e:'ma', f:'E - K', art:'summe'},
    {id:'k', t:'Stückkosten', e:'ma', f:'K / x'}],
  felder:[{id:'bo', t:'Betriebsoptimum (Stück)', e:'Stück', f:'nk', weg:(V, F) => `niedrigste Stückkosten bei der Normalkapazität → ${blB(blN(F.bo))} Stück`},
    {id:'gm', t:'Gewinnmaximum (Stück)', e:'Stück', f:'x@3', weg:(V, F) => `höchster Gewinn an der Höchstkapazität → ${blB(blN(F.gm))} Stück`}],
  wahl:[{id:'w1', t:'Warum fallen Betriebsoptimum und Gewinnmaximum auseinander?', opts:['Die Mehrmenge kostet mehr als die bisherigen Stückkosten – die Stückkosten steigen wieder; sie bringt aber noch einen positiven Deckungsbeitrag, weil der Preis über ihren variablen Kosten liegt.', 'Weil mit Überstunden die Fixkosten steigen.', 'Weil der Preis bei höherer Menge sinkt.'], r:'0'}],
  werte:[6000, 8000, 9000, 10000].map(x => ({x, kf:120000, kv:30, kvu:48, nk:8000, p:50})),
  sets:[[4000, 6000, 7000, 8000].map(x => ({x, kf:90000, kv:20, kvu:38, nk:6000, p:40})), [8000, 10000, 11000, 12000].map(x => ({x, kf:200000, kv:60, kvu:90, nk:10000, p:95}))],
  hinweise:['Bis zur Normalkapazität gelten die normalen variablen Kosten, für jedes weitere Stück die höheren.', 'Vergleiche die Stückkosten: Wo sind sie am niedrigsten?', 'Vergleiche die Gewinne: Wo ist er am höchsten?'],
  merke:'Mit Überstunden steigen die variablen Kosten der Mehrmenge. Liegen sie über den Stückkosten bei Normalkapazität, liegt das Betriebsoptimum an der Normalkapazität. Solange der Preis über ihnen liegt, wächst der Gewinn trotzdem bis zur Höchstkapazität.'}),
blBau('rechnung', {id:'AN3', modul:'K12', stufe:2, titel:'Quantitative Anpassung: sprungfixe Kosten', tags:['Kostenanalyse', 'Anpassung', 'Erweiterungsinvestition', 'sprungfixe Kosten'], kopf:'Beschäftigung (Beträge in €)',
  text:'Die Metallwaren Hoffmann KG stößt mit einer Anlage an die Kapazitätsgrenze von {nk}. Mit einer zweiten Anlage (Erweiterungsinvestition) verdoppelt sich die Kapazität; die Fixkosten steigen dadurch sprunghaft.'
    + blGeg([['Variable Kosten je Stück', '{kv} €'], ['Verkaufspreis je Stück', '{p} €'], ['Fixkosten mit einer Anlage', '{Kf@0} €'], ['Fixkosten mit zwei Anlagen', '{Kf@4} €']])
    + '<b>Auftrag:</b> Fülle die Tabelle aus und beurteile die Erweiterung.',
  spalten:['Stufe 1', 'Kapazität alt', 'Stufe 3', 'Stufe 4', 'Kapazität neu'],
  zeilen:[{id:'kv', aus:true, e:'ma'}, {id:'p', aus:true, e:'ma'}, {id:'nk', aus:true, e:'Stück'},
    {id:'x', t:'Menge', e:'Stück'},
    {id:'Kf', t:'Fixkosten', e:'ma'},
    {id:'Kv', t:'Variable Kosten', e:'ma', f:'x * kv'},
    {id:'K', t:'Gesamtkosten', e:'ma', f:'Kf + Kv', art:'zwischen'},
    {id:'E', t:'Erlöse', e:'ma', f:'x * p'},
    {id:'G', t:'Gewinn (+) / Verlust (−)', kurz:'Gewinn/Verlust', e:'ma', f:'E - K', art:'summe'},
    {id:'k', t:'Stückkosten', e:'ma', f:'K / x'}],
  felder:[{id:'b1', t:'Nutzenschwelle mit einer Anlage (Stück)', kurz:'Nutzenschwelle alt', e:'Stück', f:'Kf@0 / (p - kv)'},
    {id:'b2', t:'Nutzenschwelle mit zwei Anlagen (Stück)', kurz:'Nutzenschwelle neu', e:'Stück', f:'Kf@4 / (p - kv)'},
    {id:'ab', t:'Ab dieser Menge bringt die Erweiterung mehr Gewinn als die volle Auslastung der alten Anlage = alte Kapazität + zusätzliche Fixkosten ÷ (Preis − variable Stückkosten)', kurz:'Erweiterung lohnt ab', e:'Stück', f:'nk + (Kf@4 - Kf@0) / (p - kv)'}],
  wahl:[{id:'w1', t:'Wie nennt man Fixkosten, die bei einer Kapazitätserweiterung sprunghaft steigen?', opts:['sprungfixe (intervallfixe) Kosten', 'variable Kosten', 'remanente Kosten'], r:'0'}],
  werte:[[6000, 120000], [8000, 120000], [10000, 180000], [12000, 180000], [16000, 180000]].map(([x, Kf]) => ({x, Kf, kv:30, p:50, nk:8000})),
  sets:[[[4000, 75000], [6000, 75000], [8000, 120000], [9000, 120000], [12000, 120000]].map(([x, Kf]) => ({x, Kf, kv:20, p:35, nk:6000})), [[8000, 240000], [10000, 240000], [12000, 330000], [15000, 330000], [20000, 330000]].map(([x, Kf]) => ({x, Kf, kv:50, p:80, nk:10000}))],
  hinweise:['Ab der zweiten Anlage gelten die höheren Fixkosten.', 'Die zusätzlichen Fixkosten müssen erst durch zusätzliche Deckungsbeiträge hereinkommen.'],
  merke:'Eine Erweiterungsinvestition erhöht die Fixkosten sprunghaft: Gewinn und Stückkosten verschlechtern sich zunächst. Sie lohnt sich erst, wenn die Mehrmenge die zusätzlichen Fixkosten deckt.'}),
blBau('rechnung', {id:'AN4', modul:'K12', stufe:3, titel:'Rationalisierungsinvestition: kritische Menge', tags:['Kostenanalyse', 'Anpassung', 'Rationalisierungsinvestition', 'kritische Menge'], kopf:'Anlagenvergleich (Beträge in €)',
  text:'Die Fahrradwerk Lorenz GmbH überlegt, eine alte Fertigungsanlage durch eine automatisierte Anlage zu ersetzen. Die neue Anlage hat höhere Fixkosten, aber niedrigere variable Stückkosten.'
    + blGeg([['Verkaufspreis je Stück', '{p} €'], ['Erwarteter Absatz je Monat', '{xa}']])
    + '<b>Auftrag:</b> Vergleiche beide Anlagen und entscheide.',
  spalten:['Alte Anlage', 'Neue Anlage'],
  zeilen:[{id:'p', aus:true, e:'ma'}, {id:'xa', aus:true, e:'Stück'},
    {id:'kf', t:'Fixkosten je Monat', e:'ma'}, {id:'kv', t:'Variable Kosten je Stück', e:'ma'},
    {id:'db', t:'Deckungsbeitrag je Stück', e:'ma', f:'p - kv'},
    {id:'bep', t:'Nutzenschwelle', e:'Stück', f:'kf / db'},
    {id:'G', t:'Gewinn beim erwarteten Absatz', e:'ma', f:'xa * db - kf'},
    {id:'k', t:'Stückkosten beim erwarteten Absatz', e:'ma', f:'kv + kf / xa'}],
  felder:[{id:'km', t:'Kritische Menge (gleiche Gesamtkosten) = Unterschied der Fixkosten ÷ Unterschied der variablen Stückkosten', kurz:'Kritische Menge', e:'Stück', f:'(kf@1 - kf@0) / (kv@0 - kv@1)'}],
  wahl:[{id:'w1', t:'Welche Anlage ist beim erwarteten Absatz günstiger?', opts:['die alte Anlage', 'die neue Anlage'], r:'xa@0 > (kf@1 - kf@0) / (kv@0 - kv@1) ? 1 : 0',
    weg:['Der erwartete Absatz liegt unter der kritischen Menge – die alte Anlage mit den niedrigeren Fixkosten ist günstiger.', 'Der erwartete Absatz liegt über der kritischen Menge – die neue Anlage mit den niedrigeren variablen Kosten ist günstiger.']}],
  werte:[{kf:120000, kv:30, p:50, xa:9000}, {kf:195000, kv:20, p:50, xa:9000}],
  sets:[[{kf:120000, kv:30, p:50, xa:7000}, {kf:195000, kv:20, p:50, xa:7000}], [{kf:80000, kv:25, p:40, xa:8000}, {kf:140000, kv:15, p:40, xa:8000}]],
  hinweise:['Kritische Menge: Bei welcher Menge sind die Gesamtkosten beider Anlagen gleich?', 'Über der kritischen Menge ist die Anlage mit den niedrigeren variablen Kosten günstiger.'],
  merke:'Rationalisierung tauscht variable gegen fixe Kosten. Sie lohnt sich nur oberhalb der kritischen Menge – bei sinkendem Absatz wird die hohe Fixkostenbelastung zum Risiko.'}),
blBau('zuordnung', {id:'AN5', modul:'K12', stufe:2, titel:'Anpassung oder Remanenz?', tags:['Kostenanalyse', 'Anpassung', 'Kostenremanenz'],
  text:'Ordne jede Situation zu.', kategorien:['zeitliche Anpassung', 'quantitative Anpassung', 'Kostenremanenz'], anzahl:6,
  faelle:[
    {t:'In der Hochsaison werden Überstunden mit Zuschlag gefahren.', k:0},
    {t:'Über ein Arbeitszeitkonto arbeiten die Beschäftigten im Herbst länger und im Frühjahr kürzer – ohne Zuschläge.', k:0},
    {t:'Bei schwacher Nachfrage wird Kurzarbeit angemeldet.', k:0},
    {t:'Eine zweite Fertigungsanlage wird angeschafft; die Fixkosten steigen sprunghaft.', k:1},
    {t:'Eine von drei Maschinen wird stillgelegt.', k:1},
    {t:'Die Nachfrage sinkt, die Personalkosten sinken wegen der Kündigungsfristen aber erst Monate später.', k:2},
    {t:'Nach einem Auftragsrückgang laufen Miet- und Leasingverträge für die Halle unverändert weiter.', k:2},
    {t:'Die Kosten sinken bei fallender Beschäftigung weniger stark, als sie vorher gestiegen sind.', k:2}
  ],
  hinweise:['Wird die Arbeitszeit, die Zahl der Anlagen verändert – oder bleiben Kosten einfach hängen?'],
  merke:'Zeitlich: Arbeitszeit · quantitativ: Anlagen/Arbeitskräfte · Kostenremanenz: Kosten passen sich einem Rückgang nur verzögert an.'}),
/* Wirtschaftsgymnasium (05.11.2026, BPE 7.1): sprungfixe Kosten und Gesetz der Massenproduktion */
blBau('rechnung', {id:'AN6', modul:'K12', stufe:2, titel:'Sprungfixe Kosten bei steigender Menge', tags:['Kostenanalyse', 'sprungfixe Kosten', 'Stückkosten'], kopf:'Menge',
  text:'Eine Maschine kann höchstens {kap} Stück im Monat fertigen und verursacht fixe Kosten von {kf} im Monat. Für jede weitere angefangene Kapazitätsstufe wird eine zusätzliche Maschine angemietet. Die variablen Stückkosten betragen {kv}.',
  spalten:['Menge 1', 'Menge 2', 'Menge 3', 'Menge 4'],
  zeilen:[
    {id:'kap', t:'Kapazität', aus:true}, {id:'kf', t:'Fixkosten je Maschine', e:'€', aus:true}, {id:'kv', t:'variable Stückkosten', e:'€', aus:true},
    {id:'x', t:'Menge (Stück)'},
    {id:'n', t:'Anzahl Maschinen', f:'aufrunden(x / kap)'},
    {id:'fk', t:'Fixkosten', e:'€', f:'aufrunden(x / kap) * kf'},
    {id:'gk', t:'Gesamtkosten', e:'€', f:'aufrunden(x / kap) * kf + kv * x'},
    {id:'sk', t:'Stückkosten', e:'€', f:'(aufrunden(x / kap) * kf + kv * x) / x'}
  ],
  werte:[{kap:1000, kf:20000, kv:15, x:800}, {kap:1000, kf:20000, kv:15, x:1000}, {kap:1000, kf:20000, kv:15, x:1200}, {kap:1000, kf:20000, kv:15, x:2000}],
  sets:[[{kap:500, kf:12000, kv:8, x:400}, {kap:500, kf:12000, kv:8, x:500}, {kap:500, kf:12000, kv:8, x:600}, {kap:500, kf:12000, kv:8, x:1000}]],
  wahl:[{id:'w', t:'Warum steigen die Stückkosten zwischen Menge 2 und Menge 3?', opts:['Weil die variablen Stückkosten steigen.', 'Weil eine zweite Maschine nötig wird: Die Fixkosten springen, verteilen sich aber erst auf wenige zusätzliche Stück.', 'Weil weniger verkauft wird.'], r:'1'}],
  hinweise:['Anzahl Maschinen = Menge ÷ Kapazität, aufgerundet.', 'Stückkosten = Gesamtkosten ÷ Menge.'],
  merke:'Sprungfixe Kosten: bleiben innerhalb einer Kapazitätsstufe gleich und springen bei Erweiterung · Stückkosten sinken innerhalb der Stufe und steigen beim Sprung kurz an.'}),
{
  id:'AN7', modul:'K12', typ:'berechnung', mehrfach:true, stufe:1, titel:'Das Gesetz der Massenproduktion',
  tags:['Kostenanalyse', 'Fixkostendegression', 'Gesetz der Massenproduktion'],
  text:'Ein Hersteller fertigt mit einer Anlage, deren Fixkosten 60.000 € im Monat betragen. Die variablen Stückkosten liegen bei 20 €.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Mit steigender Menge sinken die fixen Kosten je Stück (Fixkostendegression).', richtig:true, weg:'60.000 € verteilen sich auf mehr Stück – der Fixkostenanteil je Stück fällt.'},
    {text:'Die Stückkosten nähern sich mit wachsender Menge den variablen Stückkosten von 20 € an.', richtig:true, weg:'Der Fixkostenanteil geht gegen null, übrig bleiben die variablen 20 €.'},
    {text:'Bei 3.000 Stück betragen die Stückkosten 40 €, bei 6.000 Stück 30 €.', richtig:true, weg:'60.000 ÷ 3.000 + 20 = 40 · 60.000 ÷ 6.000 + 20 = 30'},
    {text:'Die gesamten Fixkosten sinken, wenn mehr produziert wird.', fehler:'Die gesamten Fixkosten bleiben gleich – nur der Anteil je Stück sinkt.'},
    {text:'Großserienfertigung lohnt sich deshalb besonders bei hohen Fixkosten.', richtig:true, weg:'Je höher die Fixkosten, desto stärker wirkt die Degression bei großen Mengen.'}
  ],
  hinweise:['Stückkosten = Fixkosten ÷ Menge + variable Stückkosten.'],
  merke:'Gesetz der Massenproduktion: Je größer die Menge, desto geringer der Fixkostenanteil je Stück · Stückkosten nähern sich den variablen Stückkosten · gesamte Fixkosten bleiben konstant.'
},
{
  id:'AN8', modul:'K12', typ:'berechnung', mehrfach:true, stufe:2, titel:'Fixe, sprungfixe und variable Kosten',
  tags:['Kostenanalyse', 'sprungfixe Kosten', 'Kostenremanenz'],
  text:'Ein Möbelhersteller analysiert seine Kosten.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die Miete der Fabrikhalle ist bis zur Kapazitätsgrenze fixe Kosten.', richtig:true, weg:'Die Miete fällt unabhängig von der produzierten Menge an.'},
    {text:'Das Gehalt eines zusätzlichen Schichtmeisters, der erst ab einer zweiten Schicht nötig ist, sind sprungfixe Kosten.', richtig:true, weg:'Die Kosten springen erst, wenn die zusätzliche Schicht nötig wird.'},
    {text:'Holz für die Möbel verursacht variable Kosten.', richtig:true, weg:'Der Holzverbrauch steigt mit jedem zusätzlichen Möbelstück.'},
    {text:'Sprungfixe Kosten ändern sich bei jedem zusätzlichen Stück.', fehler:'Sie bleiben innerhalb einer Kapazitätsstufe gleich und springen erst, wenn eine neue Stufe nötig wird.'},
    {text:'Kostenremanenz bedeutet: Bei sinkender Menge bauen sich Kosten nur verzögert ab, z. B. wegen Kündigungsfristen.', richtig:true, weg:'Verträge und Personal lassen sich nicht sofort abbauen – die Kosten „bleiben hängen“.'}
  ],
  hinweise:['Ändern sich die Kosten mit jedem Stück, gar nicht oder stufenweise?'],
  merke:'Fixe Kosten: unabhängig von der Menge · variable: je Stück · sprungfixe: stufenweise bei Kapazitätserweiterung · Kostenremanenz: verzögerter Abbau bei Rückgang.'
},

/* ---------- Theorie Abgrenzungsrechnung (extra) · Modul-ID K1T ----------
   Fälle deuten statt Begriffe abfragen. mehrfach:true = alle zutreffenden ankreuzen (2–5 Antworten). */
{
  id:'TA1', modul:'K1T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Bilanzielle Abschreibung höher als kalkulatorische',
  tags:['Abgrenzungsrechnung','Theorie','Kalkulatorische Kosten'],
  text:'Die Fahrzeugbau Neumann KG schreibt eine CNC-Fräsmaschine in der Finanzbuchhaltung mit 48.000 € ab. In der Kosten- und Leistungsrechnung setzt sie für dieselbe Maschine nur 36.000 € kalkulatorische Abschreibungen an.',
  frage:'Welche Gründe können dafür verantwortlich sein?',
  optionen:[
    {text:'Bilanziell wird degressiv abgeschrieben, kalkulatorisch linear – in den ersten Nutzungsjahren ist die degressive Abschreibung höher.', richtig:true,
     weg:'Degressiv heißt: hohe Beträge am Anfang, niedrige am Ende. Die KLR verteilt den Werteverzehr gleichmäßig (linear).'},
    {text:'Kalkulatorisch wird mit einer längeren Nutzungsdauer gerechnet, weil die Maschine erfahrungsgemäß länger hält als in der AfA-Tabelle angenommen.', richtig:true,
     weg:'Längere Nutzungsdauer → der Wert wird auf mehr Jahre verteilt → kleinerer Jahresbetrag.'},
    {text:'Der Wiederbeschaffungswert ist gesunken und liegt unter den Anschaffungskosten, z. B. weil vergleichbare Maschinen billiger geworden sind.', richtig:true,
     weg:'Die KLR schreibt vom Wiederbeschaffungswert ab. Ist er niedriger als die Anschaffungskosten, ist auch die kalkulatorische Abschreibung niedriger.'},
    {text:'Der Wiederbeschaffungswert liegt über den Anschaffungskosten.',
     fehler:'Dann wäre die kalkulatorische Abschreibung höher als die bilanzielle – hier ist es umgekehrt.'},
    {text:'Die Maschine wurde auf Ziel gekauft und ist noch nicht vollständig bezahlt.',
     fehler:'Ob und wann bezahlt wird, spielt für die Abschreibung keine Rolle – abgeschrieben wird der Werteverzehr durch die Nutzung.'}
  ],
  hinweise:['Von welchem Wert, über wie viele Jahre und mit welcher Methode rechnet die KLR?', 'Ein kleinerer kalkulatorischer Betrag entsteht durch einen kleineren Ausgangswert, mehr Jahre oder eine gleichmäßigere Verteilung.', 'Zahlungen haben mit Abschreibungen nichts zu tun.'],
  merke:'Kalkulatorische Abschreibung = Wiederbeschaffungswert ÷ tatsächliche Nutzungsdauer (mit Restbuchwert: (Wiederbeschaffungswert − Restbuchwert) ÷ Nutzungsdauer), in der Regel linear. Abweichungen zur bilanziellen AfA entstehen durch anderen Ausgangswert, andere Nutzungsdauer oder andere Methode.'
},
{
  id:'TA2', modul:'K1T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Kalkulatorische Abschreibung höher als bilanzielle',
  tags:['Abgrenzungsrechnung','Theorie','Kalkulatorische Kosten'],
  text:'Für ihren gesamten Maschinenpark bucht die Fahrzeugbau Neumann KG bilanzielle Abschreibungen von 120.000 €. In der Kosten- und Leistungsrechnung verrechnet sie 165.000 € kalkulatorische Abschreibungen.',
  frage:'Welche Gründe können dafür verantwortlich sein?',
  optionen:[
    {text:'Die Preise für neue Maschinen sind gestiegen – der Wiederbeschaffungswert liegt über den Anschaffungskosten.', richtig:true,
     weg:'Die KLR soll erwirtschaften, was eine neue Maschine kosten wird (Substanzerhaltung). Bei steigenden Preisen ist die kalkulatorische Abschreibung höher.'},
    {text:'Einige Maschinen sind bilanziell bereits voll abgeschrieben, werden aber weiter genutzt.', richtig:true,
     weg:'Bilanziell fällt für sie keine Abschreibung mehr an. Solange sie in der Produktion laufen, entsteht aber weiter Werteverzehr – die KLR rechnet ihn kalkulatorisch weiter.'},
    {text:'Die Maschinen laufen im Dreischichtbetrieb und verschleißen schneller, als es die AfA-Tabelle annimmt.', richtig:true,
     weg:'Kürzere tatsächliche Nutzungsdauer → derselbe Wert auf weniger Jahre verteilt → höherer Jahresbetrag.'},
    {text:'Ein Teil der Maschinen wurde mit einem Bankkredit finanziert.',
     fehler:'Die Finanzierung beeinflusst die Zinsen, nicht die Abschreibung.'},
    {text:'Eine nicht mehr betrieblich genutzte, vermietete Lagerhalle wird bilanziell weiter abgeschrieben.',
     fehler:'Das erhöht die bilanziellen Abschreibungen (neutraler Aufwand) – es erklärt nicht, warum die kalkulatorischen höher sind. Außerdem gehört die Halle nicht zum Maschinenpark.'}
  ],
  hinweise:['Denke an Preisentwicklung, Nutzungsdauer und Maschinen, die „abgeschrieben, aber noch da“ sind.', 'Die KLR fragt: Was kostet uns die Nutzung wirklich – und was kostet die nächste Maschine?', 'Finanzierung und vermietete Gebäude gehören nicht zur kalkulatorischen Abschreibung des Maschinenparks.'],
  merke:'Die kalkulatorische Abschreibung ist höher, wenn der Wiederbeschaffungswert über den Anschaffungskosten liegt, die tatsächliche Nutzungsdauer kürzer ist oder bilanziell voll abgeschriebene Anlagen weiter genutzt werden.'
},
{
  id:'TA3', modul:'K1T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Positives Abgrenzungsergebnis',
  tags:['Abgrenzungsrechnung','Theorie','Ergebnis'],
  text:'Die Ergebnistabelle der Fahrzeugbau Neumann KG zeigt für das Quartal: Gesamtergebnis 180.000 €, Betriebsergebnis 140.000 €, Abgrenzungsergebnis (neutrales Ergebnis) +40.000 €.',
  frage:'Wie lässt sich das positive Abgrenzungsergebnis erklären?',
  optionen:[
    {text:'Die neutralen Erträge sind höher als die neutralen Aufwendungen, z. B. durch Mieterträge aus einer vermieteten Halle oder einen Gewinn aus dem Verkauf einer Maschine.', richtig:true,
     weg:'Neutrale Erträge erhöhen nur das Gesamtergebnis, nicht das Betriebsergebnis – das Abgrenzungsergebnis wird positiv.'},
    {text:'In der KLR werden Kosten verrechnet, denen kein oder ein niedrigerer Aufwand gegenübersteht, z. B. ein kalkulatorischer Unternehmerlohn für den Komplementär.', richtig:true,
     weg:'Zusatz- und höhere Anderskosten mindern das Betriebsergebnis, nicht aber das Gesamtergebnis. Die kostenrechnerischen Korrekturen tragen dann positiv zum Abgrenzungsergebnis bei.'},
    {text:'Das Kerngeschäft ist erfolgreicher als das Unternehmen insgesamt.',
     fehler:'Umgekehrt: Das Betriebsergebnis (140.000 €) ist kleiner als das Gesamtergebnis (180.000 €). Das Gesamtergebnis wird durch den Abgrenzungsbereich verbessert.'},
    {text:'Die Fahrzeugbau Neumann KG hatte einen hohen Hochwasserschaden.',
     fehler:'Ein Schadensfall ist neutraler Aufwand und würde das Abgrenzungsergebnis verschlechtern.'},
    {text:'Die Umsatzerlöse sind gegenüber dem Vorquartal gestiegen.',
     fehler:'Umsatzerlöse sind Leistungen. Sie stehen im Gesamtergebnis und im Betriebsergebnis in gleicher Höhe und verändern das Abgrenzungsergebnis nicht.'}
  ],
  hinweise:['Gesamtergebnis = Betriebsergebnis + Abgrenzungsergebnis.', 'Positiv wird der Abgrenzungsbereich, wenn dort mehr Erträge als Aufwendungen stehen – oder wenn die KLR mehr Kosten verrechnet, als Aufwand gebucht ist.', 'Was in beiden Rechnungskreisen gleich hoch ist, wirkt sich auf das Abgrenzungsergebnis nicht aus.'],
  merke:'Gesamtergebnis = Betriebsergebnis + Abgrenzungsergebnis. Ein positives Abgrenzungsergebnis heißt: Das Gesamtergebnis ist besser als das, was der eigentliche Betrieb erwirtschaftet.'
},
{
  id:'TA4', modul:'K1T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Negatives Abgrenzungsergebnis',
  tags:['Abgrenzungsrechnung','Theorie','Ergebnis'],
  text:'Im Folgequartal meldet die Fahrzeugbau Neumann KG: Gesamtergebnis 95.000 €, Betriebsergebnis 130.000 €, Abgrenzungsergebnis (neutrales Ergebnis) −35.000 €.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Es sind hohe neutrale Aufwendungen angefallen, z. B. ein Verlust aus dem Verkauf einer Maschine unter Buchwert oder eine Spende.', richtig:true,
     weg:'Neutrale Aufwendungen mindern das Gesamtergebnis, aber nicht das Betriebsergebnis – das Abgrenzungsergebnis wird negativ.'},
    {text:'In der Finanzbuchhaltung ist mehr Aufwand gebucht, als die KLR an Kosten verrechnet, z. B. weil die bilanziellen Abschreibungen höher sind als die kalkulatorischen.', richtig:true,
     weg:'Der Mehraufwand belastet nur das Gesamtergebnis. Die kostenrechnerischen Korrekturen tragen dann negativ zum Abgrenzungsergebnis bei.'},
    {text:'Das Kerngeschäft läuft besser, als das Gesamtergebnis vermuten lässt.', richtig:true,
     weg:'Das Betriebsergebnis (130.000 €) ist höher als das Gesamtergebnis (95.000 €). Die Belastung kommt aus dem Abgrenzungsbereich, nicht aus der Produktion.'},
    {text:'Die KLR hat einen kalkulatorischen Unternehmerlohn verrechnet.',
     fehler:'Zusatzkosten wie der Unternehmerlohn mindern nur das Betriebsergebnis – das würde das Abgrenzungsergebnis positiv beeinflussen.'},
    {text:'Die Neumann KG hat hohe Mieterträge aus einer vermieteten Lagerhalle erzielt.',
     fehler:'Neutrale Erträge verbessern das Abgrenzungsergebnis.'}
  ],
  hinweise:['Gesamtergebnis = Betriebsergebnis + Abgrenzungsergebnis – hier ist das Gesamtergebnis kleiner.', 'Negativ wird der Abgrenzungsbereich durch neutrale Aufwendungen oder durch Aufwand, der höher ist als die verrechneten Kosten.', 'Vergleiche Betriebsergebnis und Gesamtergebnis: Welches ist besser?'],
  merke:'Ein negatives Abgrenzungsergebnis heißt: Der Betrieb selbst arbeitet besser, als das Gesamtergebnis zeigt. Ursache sind neutrale Aufwendungen oder Aufwand, der höher ist als die in der KLR verrechneten Kosten.'
},
{
  id:'TA5', modul:'K1T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Zweckaufwand erkennen',
  tags:['Abgrenzungsrechnung','Theorie','Begriffe'],
  text:'In der Finanzbuchhaltung der Fahrzeugbau Neumann KG sind im März unter anderem folgende Aufwendungen gebucht.',
  frage:'Welche Aufwendungen sind Zweckaufwand, gehen also in gleicher Höhe als Kosten in die KLR ein?',
  optionen:[
    {text:'Fertigungslöhne für die Montage der Anhänger: 86.000 €', richtig:true,
     weg:'Betriebsbedingt, regelmäßig, in der richtigen Periode – Zweckaufwand und zugleich Grundkosten.'},
    {text:'Aufwendungen für Rohstoffe (Stahlprofile, Bleche): 142.000 €', richtig:true,
     weg:'Der Rohstoffverbrauch dient unmittelbar der Herstellung – Zweckaufwand.'},
    {text:'Miete für die Fertigungshalle: 12.000 €', richtig:true,
     weg:'Ohne Halle keine Produktion – betriebsbedingt und regelmäßig, also Zweckaufwand.'},
    {text:'Spende an den örtlichen Sportverein: 2.500 €',
     fehler:'Eine Spende hat mit dem Betriebszweck nichts zu tun – betriebsfremder, also neutraler Aufwand.'},
    {text:'Gewerbesteuernachzahlung für das Vorjahr: 7.400 €',
     fehler:'Die Nachzahlung betrifft eine frühere Periode – periodenfremder, also neutraler Aufwand.'}
  ],
  hinweise:['Zweckaufwand = Aufwand, der dem Betriebszweck dient und in dieser Periode regelmäßig anfällt.', 'Prüfe jeden Posten: betriebsbedingt? regelmäßig? richtige Periode?', 'Spenden und Nachzahlungen für Vorjahre fallen durch.'],
  merke:'Zweckaufwand (Finanzbuchhaltung) = Grundkosten (KLR): derselbe Betrag aus zwei Blickwinkeln. Neutraler Aufwand ist betriebsfremd, periodenfremd oder außerordentlich.'
},
{
  id:'TA6', modul:'K1T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Neutrale Erträge erkennen',
  tags:['Abgrenzungsrechnung','Theorie','Begriffe'],
  text:'Die Fahrzeugbau Neumann KG hat im Quartal folgende Erträge gebucht.',
  frage:'Welche Erträge sind neutral, gehören also nicht als Leistung in die KLR?',
  optionen:[
    {text:'Mieterträge aus einer vermieteten Werkswohnung', richtig:true,
     weg:'Vermieten ist nicht der Betriebszweck eines Fahrzeugbauers – betriebsfremder Ertrag.'},
    {text:'Ertrag aus dem Verkauf einer gebrauchten Maschine über dem Buchwert', richtig:true,
     weg:'Der Verkauf von Anlagen gehört nicht zur laufenden Leistungserstellung – neutraler (außerordentlicher) Ertrag.'},
    {text:'Zinserträge aus Wertpapieren', richtig:true,
     weg:'Geldanlage ist nicht der Betriebszweck – betriebsfremder Ertrag.'},
    {text:'Umsatzerlöse aus dem Verkauf von Anhängern',
     fehler:'Das ist genau die betriebliche Leistung – sie gehört in voller Höhe in die KLR.'},
    {text:'Mehrbestand an fertigen Anhängern',
     fehler:'Die Bestandsmehrung ist Leistung des Betriebs: Es wurde produziert, nur noch nicht verkauft.'}
  ],
  hinweise:['Leistung ist, was der Betrieb mit seinem eigentlichen Zweck erstellt.', 'Fahrzeugbau: Anhänger herstellen und verkaufen – alles andere ist zu prüfen.', 'Auch Produziertes, das noch auf Lager liegt, ist Leistung.'],
  merke:'Leistungen = Umsatzerlöse + Bestandsmehrungen (− Bestandsminderungen) + aktivierte Eigenleistungen. Mieten, Zinsen, Erträge aus Anlagenverkäufen sind neutrale Erträge.'
},
{
  id:'TA7', modul:'K1T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Grundkosten erkennen',
  tags:['Abgrenzungsrechnung','Theorie','Begriffe'],
  text:'In der Kostenartenrechnung der Fahrzeugbau Neumann KG stehen folgende Kosten.',
  frage:'Welche davon sind Grundkosten?',
  optionen:[
    {text:'Gehälter der Vertriebsabteilung', richtig:true,
     weg:'Dem Gehaltsaufwand der Finanzbuchhaltung stehen Kosten in gleicher Höhe gegenüber – Grundkosten.'},
    {text:'Stromkosten der Fertigung', richtig:true,
     weg:'Wird in gleicher Höhe übernommen – Grundkosten.'},
    {text:'Versicherung für den Fuhrpark', richtig:true,
     weg:'Betrieblich, regelmäßig, gleiche Höhe – Grundkosten.'},
    {text:'Kalkulatorischer Unternehmerlohn für den Komplementär',
     fehler:'Dem steht in der Finanzbuchhaltung gar kein Aufwand gegenüber – Zusatzkosten.'},
    {text:'Kalkulatorische Abschreibungen auf die Maschinen',
     fehler:'Ihnen steht Aufwand in anderer Höhe gegenüber (bilanzielle Abschreibung) – Anderskosten.'}
  ],
  hinweise:['Grundkosten = Kosten, denen Aufwand in gleicher Höhe gegenübersteht.', 'Alles mit „kalkulatorisch“ ist entweder Anders- oder Zusatzkosten.', 'Frag dich: Steht genau dieser Betrag auch in der Finanzbuchhaltung?'],
  merke:'Grundkosten = Zweckaufwand in gleicher Höhe. Anderskosten = Aufwand in anderer Höhe (kalk. Abschreibungen, Zinsen, Wagnisse). Zusatzkosten = kein Aufwand (kalk. Unternehmerlohn, kalk. Miete für eigene Räume).'
},
{
  id:'TA8', modul:'K1T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Anderskosten erkennen',
  tags:['Abgrenzungsrechnung','Theorie','Begriffe','Kalkulatorische Kosten'],
  text:'Die Fahrzeugbau Neumann KG nimmt in der Ergebnistabelle kostenrechnerische Korrekturen vor.',
  frage:'Welche Kosten sind Anderskosten?',
  optionen:[
    {text:'Kalkulatorische Abschreibungen', richtig:true,
     weg:'Ihnen steht die bilanzielle Abschreibung gegenüber – in anderer Höhe.'},
    {text:'Kalkulatorische Zinsen', richtig:true,
     weg:'Ihnen steht der gebuchte Zinsaufwand gegenüber – die KLR verzinst aber das gesamte betriebsnotwendige Kapital.'},
    {text:'Kalkulatorische Wagnisse', richtig:true,
     weg:'Statt der tatsächlichen, zufällig schwankenden Schäden (Aufwand) rechnet die KLR mit einem gleichmäßigen Durchschnittswert.'},
    {text:'Kalkulatorischer Unternehmerlohn',
     fehler:'Dem steht überhaupt kein Aufwand gegenüber – das sind Zusatzkosten, keine Anderskosten.'},
    {text:'Fertigungslöhne',
     fehler:'Werden in gleicher Höhe übernommen – Grundkosten.'}
  ],
  hinweise:['Anders heißt: Es gibt einen Aufwand, aber in anderer Höhe.', 'Welchem kalkulatorischen Posten steht in der Finanzbuchhaltung gar nichts gegenüber?', 'Löhne werden 1 : 1 übernommen.'],
  merke:'Anderskosten: Aufwand in anderer Höhe (kalk. Abschreibungen, Zinsen, Wagnisse). Zusatzkosten: kein Aufwand (kalk. Unternehmerlohn, kalk. Miete).'
},
{
  id:'TA9', modul:'K1T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Neutrale Aufwendungen erkennen',
  tags:['Abgrenzungsrechnung','Theorie','Begriffe'],
  text:'Bei der Abgrenzung prüft die Fahrzeugbau Neumann KG folgende Aufwendungen.',
  frage:'Welche Aufwendungen sind neutral und werden in der unternehmensbezogenen Abgrenzung herausgenommen?',
  optionen:[
    {text:'Spende an eine gemeinnützige Stiftung', richtig:true,
     weg:'Hat mit dem Betriebszweck nichts zu tun – neutral.'},
    {text:'Verlust aus dem Verkauf eines Lkw unter Buchwert', richtig:true,
     weg:'Entsteht nicht bei der Herstellung der Anhänger, sondern beim Abgang von Anlagevermögen – neutral.'},
    {text:'Abschreibung auf eine vermietete Lagerhalle', richtig:true,
     weg:'Die Halle dient nicht dem Betrieb, sondern wird vermietet – ihre Abschreibung ist betriebsfremd.'},
    {text:'Aufwendungen für Rohstoffe',
     fehler:'Rohstoffe gehen in die Anhänger ein – Zweckaufwand und Grundkosten.'},
    {text:'Bilanzielle Abschreibung auf eine Produktionsmaschine',
     fehler:'Betrieblicher Aufwand – er wird nicht als neutral herausgenommen, sondern bei den kostenrechnerischen Korrekturen durch die kalkulatorische Abschreibung ersetzt.'}
  ],
  hinweise:['Neutral = betriebsfremd, periodenfremd oder außergewöhnlich – welche Art genau, ist hier nicht wichtig.', 'Gehört die Sache zum Betrieb? Dann ist sie nicht neutral – auch wenn die KLR den Betrag ändert.', 'Vermietete Gebäude gehören nicht zum Betrieb.'],
  merke:'Unternehmensbezogene Abgrenzung: neutrale Aufwendungen und Erträge raus. Kostenrechnerische Korrektur: betrieblicher Aufwand bleibt drin, wird aber durch kalkulatorische Kosten in anderer Höhe ersetzt.'
},
{
  id:'TA10', modul:'K1T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Kalkulatorische Zinsen höher als Zinsaufwand',
  tags:['Abgrenzungsrechnung','Theorie','Kalkulatorische Kosten'],
  text:'Die Fahrzeugbau Neumann KG hat im Jahr 18.000 € Zinsaufwand für Bankkredite gebucht. Die KLR verrechnet 54.000 € kalkulatorische Zinsen.',
  frage:'Welche Gründe erklären den Unterschied?',
  optionen:[
    {text:'Die KLR verzinst auch das Eigenkapital, das im Betrieb gebunden ist.', richtig:true,
     weg:'Das Eigenkapital könnte anderswo Zinsen bringen (Opportunitätskosten). In der Finanzbuchhaltung gibt es dafür keinen Zinsaufwand.'},
    {text:'Die KLR rechnet mit einem kalkulatorischen Zinssatz, der über dem Kreditzins der Bank liegt.', richtig:true,
     weg:'Der kalkulatorische Zinssatz ist ein Durchschnittssatz, den das Unternehmen festlegt – er kann höher sein als der tatsächliche Kreditzins.'},
    {text:'Ein Kredit finanziert eine vermietete Lagerhalle.',
     fehler:'Das erhöht den gebuchten Zinsaufwand (der Teil ist neutral) – es erklärt nicht, warum die kalkulatorischen Zinsen höher sind.'},
    {text:'Die bilanziellen Abschreibungen sind höher als die kalkulatorischen.',
     fehler:'Abschreibungen und Zinsen sind getrennte Posten – das eine erklärt das andere nicht.'}
  ],
  hinweise:['Welches Kapital verzinst die Bank – welches die KLR?', 'Die KLR verzinst das betriebsnotwendige Kapital, egal woher es stammt.', 'Auch der Zinssatz kann sich unterscheiden.'],
  merke:'Kalkulatorische Zinsen = betriebsnotwendiges Kapital × kalkulatorischer Zinssatz. Sie umfassen auch die Verzinsung des Eigenkapitals – deshalb liegen sie meist über dem Zinsaufwand.'
},
/* ---------- Modul 2 · BAB I einfach ---------- */
{
  id:'BT1', modul:'K2', typ:'berechnung', stufe:0, titel:'Zuschlagsgrundlage der Verwaltung',
  tags:['BAB','Theorie'],
  text:'Im BAB werden die Zuschlagssätze der vier Hauptkostenstellen ermittelt.',
  frage:'Worauf wird der Verwaltungsgemeinkostenzuschlag bezogen (ohne Bestandsveränderungen)?',
  optionen:[
    {text:'Auf die Herstellkosten: Fertigungsmaterial + Materialgemeinkosten + Fertigungslöhne + Fertigungsgemeinkosten.', richtig:true,
     weg:'Verwaltung und Vertrieb lassen sich keinem einzelnen Kostenträger direkt zurechnen; sie werden auf die gesamten Herstellkosten bezogen.'},
    {text:'Auf die Fertigungslöhne.', fehler:'Das ist die Zuschlagsgrundlage der Fertigungsstelle.'},
    {text:'Auf das Fertigungsmaterial.', fehler:'Das ist die Zuschlagsgrundlage der Materialstelle.'},
    {text:'Auf die Summe aller Gemeinkosten.', fehler:'Gemeinkosten werden nie auf Gemeinkosten bezogen – Grundlage sind Einzelkosten bzw. Herstellkosten.'}
  ],
  hinweise:['Welche Kosten sind schon „im Produkt“, bevor Verwaltung und Vertrieb dazukommen?', 'Die Herstellkosten umfassen Material- und Fertigungskosten.', 'Herstellkosten = FM + MGK + FL + FGK.'],
  merke:'Zuschlagsgrundlagen: Material → Fertigungsmaterial, Fertigung → Fertigungslöhne, Verwaltung → Herstellkosten der Erzeugung, Vertrieb → Herstellkosten des Umsatzes. Ohne Bestandsveränderungen sind beide gleich.'
},
{
  id:'BT2', modul:'K2', typ:'berechnung', stufe:0, titel:'Mehrbestand und Herstellkosten des Umsatzes',
  tags:['BAB','Theorie','Bestandsveränderungen'],
  text:'Ein Industriebetrieb hat mehr Erzeugnisse hergestellt als verkauft.',
  frage:'Wie werden die Herstellkosten des Umsatzes aus den Herstellkosten der Erzeugung ermittelt?',
  optionen:[
    {text:'Herstellkosten der Erzeugung − Mehrbestand', richtig:true,
     weg:'Der Mehrbestand liegt noch auf Lager und ist nicht verkauft. Die Vertriebsgemeinkosten werden aber nur auf die verkauften Erzeugnisse verteilt – deshalb wird er abgezogen.'},
    {text:'Herstellkosten der Erzeugung + Mehrbestand', fehler:'Hinzugerechnet wird ein Minderbestand – dann wurde mehr verkauft als hergestellt.'},
    {text:'Herstellkosten der Erzeugung, der Mehrbestand spielt keine Rolle', fehler:'Der Mehrbestand ist nicht verkauft und gehört deshalb nicht in die Herstellkosten des Umsatzes.'},
    {text:'Fertigungsmaterial + Fertigungslöhne − Mehrbestand', fehler:'Die Herstellkosten enthalten auch die Material- und Fertigungsgemeinkosten.'}
  ],
  hinweise:['Wurde alles, was hergestellt wurde, auch verkauft?', 'Der Vertrieb bezieht sich auf den Umsatz.', 'Mehrbestand = auf Lager, also nicht im Umsatz.'],
  merke:'Herstellkosten des Umsatzes = Herstellkosten der Erzeugung − Mehrbestand + Minderbestand. Sie sind die Zuschlagsgrundlage des Vertriebs; die Verwaltung bezieht sich auf die Herstellkosten der Erzeugung.'
},
bab({id:'BA1', stufe:1, titel:'BAB · Umlage nach Schlüssel', firma:'Möbelwerk Kraus GmbH', zeitraum:'den Monat Januar',
  fm:282500, fl:235000,
  posten:[
    {t:'Hilfsstoffe', ges:98500, v:[6000, 89000, 1500, 2000]},
    {t:'Energie', ges:6750, schluessel:[1, 5, 2, 1]},
    {t:'Hilfslöhne', ges:72300, v:[11000, 41300, 15000, 5000]},
    {t:'Gehälter', ges:42500, v:[2500, 4000, 32000, 4000]},
    {t:'Reparaturen', ges:21000, schluessel:[5, 12, 3, 1]},
    {t:'Abschreibungen', ges:135000, v:[4000, 111000, 16000, 4000]},
    {t:'Betriebliche Steuern', ges:24000, v:[6000, 9000, 7000, 2000]},
    {t:'Betriebliche Versicherungen', ges:5500, schluessel:[5, 5, 1, 0]}
  ],
  merke:'Die Herstellkosten (FM + MGK + FL + FGK) sind die gemeinsame Zuschlagsgrundlage für Verwaltung und Vertrieb.'}),
bab({id:'BA2', stufe:2, titel:'BAB · Schlüssel nach kWh und Fläche', firma:'Kunststoffwerk Lenz GmbH', zeitraum:'den Monat März',
  fm:205000, fl:140000,
  posten:[
    {t:'Hilfsstoffe', ges:64000, v:[4000, 52000, 3000, 5000]},
    {t:'Energie', ges:9600, schluessel:[2000, 12000, 1000, 1000], art:'kwh'},
    {t:'Hilfslöhne', ges:48000, v:[6000, 36000, 2000, 4000]},
    {t:'Gehälter', ges:56000, v:[4000, 8000, 32000, 12000]},
    {t:'Mieten', ges:18000, schluessel:[400, 1600, 600, 400], art:'m2'},
    {t:'Abschreibungen', ges:72000, v:[6000, 54000, 8000, 4000]},
    {t:'Bürokosten', ges:12000, schluessel:[1, 1, 7, 3]}
  ],
  merke:'Bei Verbrauchs- oder Flächenschlüsseln zuerst den Betrag je kWh bzw. je m² ermitteln.'}),
bab({id:'BA3', stufe:2, titel:'BAB · Jahresbetrag auf den Monat umrechnen', firma:'Metallbau Vogt GmbH', zeitraum:'den Monat April',
  fm:160000, fl:96000,
  posten:[
    {t:'Hilfsstoffe', ges:38000, v:[2000, 33000, 1000, 2000]},
    {t:'Energie', ges:86400, jahr:12, schluessel:[1500, 9000, 1000, 500], art:'kwh'},
    {t:'Hilfslöhne', ges:31500, v:[4500, 22000, 3000, 2000]},
    {t:'Gehälter', ges:44000, v:[3000, 6000, 27000, 8000]},
    {t:'Instandhaltung', ges:14000, schluessel:[2, 9, 2, 1]},
    {t:'Abschreibungen', ges:52000, v:[3000, 43000, 4000, 2000]},
    {t:'Versicherungen', ges:4200, schluessel:[1, 4, 1, 1]}
  ],
  merke:'Ist ein Jahresbetrag gegeben, der BAB aber für einen Monat aufgestellt, wird zuerst durch 12 geteilt (Quartal: durch 4).'}),
bab({id:'BA4', stufe:3, titel:'BAB · Quartal mit Jahresbeträgen', firma:'Elektrotechnik Sauer KG', zeitraum:'das 2. Quartal',
  fm:415000, fl:320000,
  posten:[
    {t:'Hilfsstoffe', ges:96000, v:[6000, 82000, 3000, 5000]},
    {t:'Energie', ges:172800, jahr:4, schluessel:[6000, 40000, 4000, 4000], art:'kwh'},
    {t:'Hilfslöhne', ges:105000, v:[15000, 72000, 9000, 9000]},
    {t:'Gehälter', ges:150000, v:[9000, 18000, 96000, 27000]},
    {t:'Mieten', ges:36000, schluessel:[500, 2500, 1200, 800], art:'m2'},
    {t:'Abschreibungen', ges:189000, v:[9000, 160000, 12000, 8000]},
    {t:'Versicherungen', ges:48000, jahr:4, schluessel:[2, 5, 2, 1]}
  ],
  merke:'Quartals-BAB: Jahresbeträge durch 4 teilen, bevor sie nach dem Schlüssel verteilt werden.'}),
bab({id:'BA5', stufe:2, titel:'BAB · mit Bestandsveränderungen', firma:'Polstermöbel Krämer GmbH', zeitraum:'den Monat Mai',
  fm:182000, fl:116000, bv:{mehrFE:15000, minderUFE:3000},
  posten:[
    {t:'Hilfsstoffe', ges:42000, v:[3000, 35000, 1500, 2500]},
    {t:'Energie', ges:8400, schluessel:[1, 4, 1, 1]},
    {t:'Hilfslöhne', ges:36000, v:[5000, 26000, 3000, 2000]},
    {t:'Gehälter', ges:48000, v:[4000, 7000, 28000, 9000]},
    {t:'Abschreibungen', ges:60000, v:[4000, 48000, 5000, 3000]},
    {t:'Bürokosten', ges:9000, schluessel:[1, 1, 5, 2]}
  ],
  merke:'Verwaltungsgemeinkosten beziehen sich auf die Herstellkosten der Erzeugung, Vertriebsgemeinkosten auf die Herstellkosten des Umsatzes (Mehrbestände abziehen, Minderbestände hinzurechnen).'}),
bab({id:'BA6', stufe:3, titel:'BAB · Quartal mit Bestandsveränderungen', firma:'Präzisionsteile Ott GmbH', zeitraum:'das 3. Quartal',
  fm:386000, fl:190000, bv:{minderFE:24000, mehrUFE:9000},
  posten:[
    {t:'Hilfsstoffe', ges:54000, v:[4000, 44000, 2000, 4000]},
    {t:'Energie', ges:96000, jahr:4, schluessel:[3000, 20000, 1000, 1000], art:'kwh'},
    {t:'Hilfslöhne', ges:63000, v:[9000, 45000, 6000, 3000]},
    {t:'Gehälter', ges:90000, v:[6000, 12000, 54000, 18000]},
    {t:'Abschreibungen', ges:126000, v:[6000, 108000, 8000, 4000]},
    {t:'Mieten', ges:21000, schluessel:[300, 1500, 150, 150], art:'m2'}
  ],
  merke:'Ein Minderbestand an fertigen Erzeugnissen erhöht die Herstellkosten des Umsatzes, ein Mehrbestand an unfertigen Erzeugnissen senkt sie. Das betrifft nur den Vertriebszuschlag – der Verwaltungszuschlag bleibt auf den Herstellkosten der Erzeugung.'}),
/* ---------- Modul 3 · BAB erweitert (zwei Fertigungshauptstellen) ---------- */
{
  id:'BET1', modul:'K3', typ:'berechnung', stufe:0, titel:'Warum zwei Fertigungsstellen?',
  tags:['BAB','Theorie'],
  text:'Ein Betrieb teilt seine Fertigung im BAB in Fertigung I (Maschinenbearbeitung) und Fertigung II (Montage) auf.',
  frage:'Was ist der Grund für diese Aufteilung?',
  optionen:[
    {text:'Die beiden Bereiche verursachen sehr unterschiedliche Gemeinkosten im Verhältnis zu ihren Löhnen – getrennte Zuschlagssätze verteilen die Kosten verursachungsgerechter.', richtig:true,
     weg:'Eine maschinenintensive Fertigung hat hohe Gemeinkosten bei wenig Lohn, eine Montage eher umgekehrt. Ein gemeinsamer Zuschlag würde Erzeugnisse, die viel Montage brauchen, zu teuer und maschinenintensive zu billig rechnen.'},
    {text:'Damit die Summe der Gemeinkosten kleiner wird.', fehler:'Die Gesamtkosten ändern sich durch die Aufteilung nicht – nur ihre Verteilung auf die Erzeugnisse.'},
    {text:'Weil das HGB zwei Fertigungsstellen vorschreibt.', fehler:'Die Kostenstellenrechnung ist interne Rechnung; das HGB schreibt hier nichts vor.'},
    {text:'Damit die Herstellkosten nicht mehr gebraucht werden.', fehler:'Verwaltung und Vertrieb beziehen sich weiterhin auf die Herstellkosten – jetzt mit beiden Fertigungsstellen.'}
  ],
  hinweise:['Denke an eine Maschinenhalle und eine Handmontage: Haben beide gleich viele Gemeinkosten je Euro Lohn?', 'Ein Zuschlagssatz ist ein Durchschnitt.', 'Je genauer die Zuschläge, desto verursachungsgerechter die Kalkulation.'],
  merke:'Mehrere Fertigungsstellen, wenn sich die Gemeinkosten je Euro Fertigungslohn stark unterscheiden – jede Stelle bekommt ihren eigenen Zuschlagssatz auf ihre eigenen Fertigungslöhne.'
},
{
  id:'BET2', modul:'K3', typ:'berechnung', stufe:0, titel:'Herstellkosten im erweiterten BAB',
  tags:['BAB','Theorie'],
  text:'Ein BAB hat die Hauptkostenstellen Material, Fertigung I, Fertigung II, Verwaltung und Vertrieb.',
  frage:'Wie setzen sich die Herstellkosten zusammen?',
  optionen:[
    {text:'FM + MGK + FL I + FGK I + FL II + FGK II', richtig:true, weg:'Zu den Herstellkosten gehören die Materialkosten und die Fertigungskosten beider Fertigungsstellen.'},
    {text:'FM + MGK + FL I + FGK I', fehler:'Die Fertigung II fehlt – auch ihre Löhne und Gemeinkosten gehören zu den Herstellkosten.'},
    {text:'FM + FL I + FL II', fehler:'Das sind nur die Einzelkosten; die Gemeinkosten der Material- und Fertigungsstellen fehlen.'},
    {text:'FM + MGK + FL I + FGK I + FL II + FGK II + VwGK', fehler:'Die Verwaltungsgemeinkosten kommen erst auf die Herstellkosten drauf – sie gehören nicht hinein.'}
  ],
  hinweise:['Herstellkosten = Materialkosten + Fertigungskosten.', 'Fertigungskosten = Fertigungslöhne + Fertigungsgemeinkosten – je Stelle.', 'Verwaltung und Vertrieb kommen erst danach.'],
  merke:'Herstellkosten = FM + MGK + FL I + FGK I + FL II + FGK II.'
},
bab({id:'BE1', modul:'K3', stufe:2, titel:'Erweiterter BAB · zwei Fertigungsstellen', firma:'Holzbau Wagner GmbH', zeitraum:'den Monat Februar',
  fm:240000, fl:[96000, 64000],
  posten:[
    {t:'Hilfsstoffe', ges:52000, v:[3000, 26000, 17000, 2000, 4000]},
    {t:'Energie', ges:10800, schluessel:[1, 4, 3, 1, 1]},
    {t:'Hilfslöhne', ges:40000, v:[4000, 18000, 12000, 3000, 3000]},
    {t:'Gehälter', ges:62000, v:[4000, 6000, 5000, 36000, 11000]},
    {t:'Instandhaltung', ges:16000, schluessel:[2, 7, 5, 1, 1]},
    {t:'Abschreibungen', ges:88000, v:[5000, 42000, 31000, 6000, 4000]},
    {t:'Versicherungen', ges:6000, schluessel:[2, 3, 3, 1, 1]}
  ],
  merke:'Jede Fertigungsstelle hat ihre eigene Zuschlagsgrundlage: die Fertigungslöhne genau dieser Stelle.'}),
bab({id:'BE2', modul:'K3', stufe:2, titel:'Erweiterter BAB · mit Bestandsveränderungen', firma:'Fensterbau Schuster GmbH', zeitraum:'den Monat März',
  fm:310000, fl:[120000, 90000], bv:{mehrFE:18000},
  posten:[
    {t:'Hilfsstoffe', ges:61000, v:[4000, 30000, 21000, 2000, 4000]},
    {t:'Energie', ges:158400, jahr:12, schluessel:[1000, 5000, 4000, 500, 500], art:'kwh'},
    {t:'Hilfslöhne', ges:48000, v:[6000, 20000, 16000, 3000, 3000]},
    {t:'Gehälter', ges:75000, v:[5000, 8000, 7000, 42000, 13000]},
    {t:'Abschreibungen', ges:112000, v:[6000, 54000, 40000, 7000, 5000]},
    {t:'Mieten', ges:24000, schluessel:[300, 1000, 700, 250, 150], art:'m2'}
  ],
  merke:'Herstellkosten der Erzeugung (Grundlage Verwaltung) enthalten beide Fertigungsstellen; der Mehrbestand wird nur für die Herstellkosten des Umsatzes (Grundlage Vertrieb) abgezogen.'}),
bab({id:'BE3', modul:'K3', stufe:3, titel:'Erweiterter BAB · Quartal mit Bestandsveränderungen', firma:'Maschinenbau Keller AG', zeitraum:'das 1. Quartal',
  fm:640000, fl:[260000, 180000], bv:{minderFE:30000, mehrUFE:12000},
  posten:[
    {t:'Hilfsstoffe', ges:128000, v:[8000, 62000, 44000, 5000, 9000]},
    {t:'Energie', ges:302400, jahr:4, schluessel:[6000, 30000, 22000, 3000, 2000], art:'kwh'},
    {t:'Hilfslöhne', ges:96000, v:[12000, 40000, 30000, 8000, 6000]},
    {t:'Gehälter', ges:186000, v:[12000, 18000, 15000, 108000, 33000]},
    {t:'Abschreibungen', ges:264000, v:[14000, 126000, 96000, 16000, 12000]},
    {t:'Versicherungen', ges:72000, jahr:4, schluessel:[2, 6, 5, 3, 2]},
    {t:'Mieten', ges:45000, schluessel:[500, 1800, 1400, 600, 200], art:'m2'}
  ],
  merke:'Minderbestand an fertigen Erzeugnissen hinzurechnen, Mehrbestand an unfertigen abziehen – beides nur für die Herstellkosten des Umsatzes.'}),
bab({id:'BE4', modul:'K3', stufe:3, titel:'Erweiterter BAB · Monat mit Jahresbetrag und Bestandsveränderungen', firma:'Textilwerk Brenner GmbH', zeitraum:'den Monat Oktober',
  fm:205000, fl:[78000, 52000], bv:{mehrFE:9000, minderUFE:4000},
  posten:[
    {t:'Hilfsstoffe', ges:41000, v:[2500, 21000, 13500, 1500, 2500]},
    {t:'Energie', ges:8640, schluessel:[800, 3200, 2400, 400, 400], art:'kwh'},
    {t:'Hilfslöhne', ges:33000, v:[3500, 15000, 10500, 2000, 2000]},
    {t:'Gehälter', ges:51000, v:[3000, 5000, 4000, 30000, 9000]},
    {t:'Instandhaltung', ges:84000, jahr:12, schluessel:[1, 3, 2, 0, 1]},
    {t:'Abschreibungen', ges:70000, v:[3000, 34000, 26000, 4000, 3000]}
  ],
  merke:'Mehrbestand an fertigen Erzeugnissen abziehen, Minderbestand an unfertigen hinzurechnen.'}),
/* ---------- Modul 4 · BAB mehrstufig (Hilfskostenstellen) ---------- */
{
  id:'BMT1', modul:'K3M', typ:'berechnung', stufe:0, titel:'Allgemeine Hilfskostenstelle',
  tags:['BAB','Theorie','Hilfskostenstellen'],
  text:'Eine Werkstatt repariert Maschinen in allen Bereichen des Betriebs. Sie ist eine allgemeine Hilfskostenstelle.',
  frage:'Auf welche Kostenstellen werden ihre Kosten umgelegt?',
  optionen:[
    {text:'Auf alle Kostenstellen, die ihre Leistungen in Anspruch nehmen – Hauptkostenstellen und die Fertigungshilfsstelle.', richtig:true,
     weg:'Allgemeine Hilfskostenstellen arbeiten für den ganzen Betrieb. Ihre Kosten gehen nach einem Schlüssel an alle Stellen, die sie nutzen – auch an die Fertigungshilfsstelle, die danach selbst umgelegt wird.'},
    {text:'Nur auf Fertigung I und II.', fehler:'Das gilt für eine Fertigungshilfsstelle (z. B. Arbeitsvorbereitung), nicht für eine allgemeine Hilfskostenstelle.'},
    {text:'Gar nicht – sie bekommt einen eigenen Zuschlagssatz.', fehler:'Hilfskostenstellen haben keinen Zuschlagssatz; es gibt keine Bezugsgröße bei den Kostenträgern.'},
    {text:'Nur auf Verwaltung und Vertrieb.', fehler:'Eine Werkstatt arbeitet vor allem für die Fertigung – sie wird auf alle nutzenden Stellen umgelegt.'}
  ],
  hinweise:['Für wen arbeitet die Werkstatt?', 'Allgemein = für den ganzen Betrieb.', 'Auch die Fertigungshilfsstelle kann Leistungen der Werkstatt nutzen.'],
  merke:'Allgemeine Hilfskostenstellen (z. B. Werkstatt, Fuhrpark, Kantine) werden auf alle folgenden Stellen umgelegt, Fertigungshilfsstellen (z. B. Arbeitsvorbereitung, Konstruktion) nur auf die Fertigungshauptstellen.'
},
{
  id:'BMT2', modul:'K3M', typ:'berechnung', stufe:0, titel:'Reihenfolge der Umlage',
  tags:['BAB','Theorie','Hilfskostenstellen'],
  text:'Ein BAB hat die allgemeine Hilfskostenstelle Werkstatt und die Fertigungshilfsstelle Arbeitsvorbereitung.',
  frage:'In welcher Reihenfolge wird umgelegt?',
  optionen:[
    {text:'Zuerst die Werkstatt (auch auf die Arbeitsvorbereitung), danach die Arbeitsvorbereitung auf Fertigung I und II.', richtig:true,
     weg:'Die Arbeitsvorbereitung muss zuerst ihren Anteil an der Werkstatt erhalten – erst dann ist ihr Betrag vollständig und kann weiterverteilt werden.'},
    {text:'Zuerst die Arbeitsvorbereitung, danach die Werkstatt.', fehler:'Dann fehlte der Arbeitsvorbereitung ihr Werkstattanteil – er bliebe unverteilt.'},
    {text:'Beide gleichzeitig nach demselben Schlüssel.', fehler:'Die Stellen arbeiten für unterschiedliche Bereiche und haben eigene Schlüssel.'},
    {text:'Die Reihenfolge spielt keine Rolle.', fehler:'Bei Leistungen der Werkstatt für die Arbeitsvorbereitung kommt es auf die Reihenfolge an.'}
  ],
  hinweise:['Welche Stelle nimmt Leistungen der anderen in Anspruch?', 'Eine Stelle kann erst umgelegt werden, wenn sie alle Kosten enthält.', 'Treppenverfahren: von links nach rechts.'],
  merke:'Treppenverfahren: zuerst die allgemeinen Hilfskostenstellen, dann die Fertigungshilfsstelle – jede Stelle wird erst umgelegt, wenn sie ihre Anteile der vorherigen erhalten hat.'
},
babMehrstufig({id:'BM1', stufe:2, titel:'Mehrstufiger BAB · Werkstatt und Arbeitsvorbereitung', firma:'Feinmechanik Ludwig GmbH', zeitraum:'das 1. Halbjahr',
  allg:[{t:'Werkstatt', prim:16450, schluessel:[10, 10, 160, 150, 0, 20]}],
  fh:{t:'Arbeitsvorbereitung', prim:15200, schluessel:[2, 4]},
  prim:{mat:23700, f1:211550, f2:118100, verw:35750, vert:26275},
  fm:189404, fl:[100726, 113756], bestand:{fe:[138025, 4400]},
  merke:'Bestandsminderung (Anfangsbestand größer als Endbestand) erhöht die Herstellkosten des Umsatzes.'}),
babMehrstufig({id:'BM2', stufe:2, titel:'Mehrstufiger BAB · Fuhrpark und Konstruktion', firma:'Gießerei Albrecht GmbH', zeitraum:'den Monat Juni',
  allg:[{t:'Fuhrpark', prim:12000, schluessel:[3, 1, 2, 2, 1, 3]}],
  fh:{t:'Konstruktion', prim:9000, schluessel:[3, 2]},
  prim:{mat:18600, f1:96400, f2:64200, verw:31500, vert:22300},
  fm:180000, fl:[87000, 60000],
  merke:'Ohne Bestandsveränderungen sind die Herstellkosten die gemeinsame Zuschlagsgrundlage für Verwaltung und Vertrieb.'}),
babMehrstufig({id:'BM3', stufe:3, titel:'Mehrstufiger BAB · zwei allgemeine Hilfskostenstellen', firma:'Antriebstechnik Seidel GmbH', zeitraum:'das 2. Quartal',
  allg:[{t:'Gebäude', prim:24000, schluessel:[1, 2, 1, 3, 3, 1, 1], art:'nach Fläche'}, {t:'Werkstatt', prim:18000, schluessel:[1, 1, 4, 3, 0, 1]}],
  fh:{t:'Arbeitsvorbereitung', prim:26000, schluessel:[1, 2]},
  prim:{mat:38000, f1:210000, f2:150000, verw:64000, vert:41000},
  fm:400000, fl:[180000, 130000], bestand:{fe:[60000, 85000], ufe:[30000, 20000]},
  merke:'Treppenverfahren: Die Werkstatt erhält zuerst ihren Anteil an den Gebäudekosten und wird dann mit dem höheren Betrag umgelegt.'}),
babMehrstufig({id:'BM4', stufe:3, titel:'Mehrstufiger BAB · Kantine und Konstruktion', firma:'Kunststoffwerk Reuter KG', zeitraum:'den Monat August',
  allg:[{t:'Kantine', prim:9600, schluessel:[4, 2, 20, 12, 6, 4], art:'nach Zahl der Mitarbeiter'}],
  fh:{t:'Konstruktion', prim:12800, schluessel:[7, 4]},
  prim:{mat:22400, f1:118000, f2:72600, verw:38400, vert:26200},
  fm:232000, fl:[92000, 57000], bv:{minderFE:14000},
  merke:'Ein Minderbestand an fertigen Erzeugnissen wird zu den Herstellkosten der Erzeugung addiert – das ergibt die Herstellkosten des Umsatzes.'}),
/* ---------- Modul 5 · BAB II: Normal- und Istkosten ---------- */
{
  id:'BNT1', modul:'K4', typ:'berechnung', stufe:0, titel:'Kostenüberdeckung',
  tags:['BAB II','Theorie'],
  text:'In der Fertigungsstelle betragen die Normalgemeinkosten 70.200,00 €, die Istgemeinkosten 78.300,00 €.',
  frage:'Was liegt vor?',
  optionen:[
    {text:'Eine Kostenunterdeckung von 8.100,00 € – es sind mehr Kosten angefallen, als in der Kalkulation verrechnet wurden.', richtig:true,
     weg:'Istkosten größer als Normalkosten: Die Kalkulation hat zu wenig Gemeinkosten verrechnet – Unterdeckung.'},
    {text:'Eine Kostenüberdeckung von 8.100,00 €.', fehler:'Überdeckung heißt: Es wurde mehr verrechnet (Normal), als tatsächlich angefallen ist (Ist). Hier ist es umgekehrt.'},
    {text:'Eine Kostenunterdeckung von 70.200,00 €.', fehler:'Über- und Unterdeckung sind immer die Differenz zwischen Normal- und Istgemeinkosten.'},
    {text:'Weder noch – entscheidend sind nur die Istkosten.', fehler:'Gerade der Vergleich von Normal- und Istkosten zeigt, ob die Kalkulation gestimmt hat.'}
  ],
  hinweise:['Welche Kosten wurden kalkuliert, welche sind tatsächlich angefallen?', 'Normal > Ist → Überdeckung, Normal < Ist → Unterdeckung.', '78.300 − 70.200 = …'],
  merke:'Normalgemeinkosten > Istgemeinkosten: Kostenüberdeckung. Normalgemeinkosten < Istgemeinkosten: Kostenunterdeckung.'
},
{
  id:'BNT2', modul:'K4', typ:'berechnung', stufe:0, titel:'Normalgemeinkosten der Verwaltung',
  tags:['BAB II','Theorie'],
  text:'Im BAB II sollen die Normalgemeinkosten der Verwaltung berechnet werden.',
  frage:'Auf welche Herstellkosten wird der Normal-Zuschlagssatz der Verwaltung angewendet?',
  optionen:[
    {text:'Auf die Herstellkosten, die mit den Normalgemeinkosten von Material und Fertigung gerechnet sind.', richtig:true,
     weg:'In der Normalkostenrechnung wird durchgehend mit Normalwerten kalkuliert – auch die Herstellkosten als Grundlage für Verwaltung und Vertrieb enthalten die Normalgemeinkosten.'},
    {text:'Auf die Herstellkosten mit den Istgemeinkosten.', fehler:'Das ist die Grundlage für den Ist-Zuschlagssatz, nicht für die Normalgemeinkosten.'},
    {text:'Nur auf das Fertigungsmaterial.', fehler:'Das ist die Grundlage der Materialstelle.'},
    {text:'Auf die Summe der Istgemeinkosten aller Stellen.', fehler:'Zuschlagsgrundlagen sind Einzelkosten bzw. Herstellkosten, keine Summen von Gemeinkosten.'}
  ],
  hinweise:['Mit welchen Werten rechnet die Normalkostenrechnung?', 'Die Herstellkosten setzen sich aus FM, MGK, FL und FGK zusammen – welche MGK und FGK?', 'Normal bleibt normal.'],
  merke:'Herstellkosten auf Normalkostenbasis = FM + Normal-MGK + FL + Normal-FGK; darauf werden die Normalzuschläge für Verwaltung (und – nach Bestandsveränderungen – Vertrieb) angewendet.'
},
bab2({id:'BN1', stufe:2, titel:'BAB II · Über- und Unterdeckung mit zwei Fertigungsstellen', firma:'Gerätebau Lindner GmbH', zeitraum:'das 1. Quartal',
  gk:{mat:10400, f1:78300, f2:166600, verw:35700, vert:29800}, fm:80000, fl:[90000, 170000],
  normal:{mat:16, f1:78, f2:108, verw:5, vert:6}, bestand:{ufe:[105000, 145000], fe:[75000, 75000]},
  merke:'Die Normalgemeinkosten von Verwaltung und Vertrieb beruhen auf den Herstellkosten auf Normalkostenbasis – nicht auf den Ist-Herstellkosten.'}),
bab2({id:'BN2', stufe:2, titel:'BAB II · Normal- und Istkosten ohne Bestandsveränderungen', firma:'Schreinerei Hofmann GmbH', zeitraum:'den Monat März',
  gk:{mat:14200, fert:96000, verw:31500, vert:18900}, fm:120000, fl:80000,
  normal:{mat:12, fert:115, verw:9, vert:6},
  merke:'Ohne Bestandsveränderungen haben Verwaltung und Vertrieb dieselbe Grundlage – einmal mit Ist-, einmal mit Normalgemeinkosten gerechnet.'}),
bab2({id:'BN3', stufe:2, titel:'BAB II · mit Bestandsmehrung', firma:'Metallwaren Busch KG', zeitraum:'das 2. Quartal',
  gk:{mat:27600, fert:182000, verw:58300, vert:41200}, fm:240000, fl:140000,
  normal:{mat:11, fert:135, verw:9, vert:7}, bestand:{fe:[30000, 50000]},
  merke:'Bestandsmehrung (Endbestand größer als Anfangsbestand) wird von den Herstellkosten der Erzeugung abgezogen – bei Ist- und bei Normalkosten.'}),
bab2({id:'BN4', stufe:3, titel:'BAB II · zwei Fertigungsstellen, gemischte Bestandsveränderungen', firma:'Präzisionstechnik Wolf GmbH', zeitraum:'das 3. Quartal',
  gk:{mat:31500, f1:142000, f2:96800, verw:64200, vert:38700}, fm:300000, fl:[120000, 88000],
  normal:{mat:10, f1:120, f2:105, verw:8.5, vert:5}, bestand:{fe:[90000, 64000], ufe:[40000, 52000]},
  merke:'Bestandsminderung bei fertigen Erzeugnissen hinzurechnen, Bestandsmehrung bei unfertigen abziehen – das ergibt die Herstellkosten des Umsatzes.'}),
/* Wirtschaftsgymnasium (05.11.2026, BPE 7.4): Gründe für Kostenabweichungen */
{
  id:'BNT3', modul:'K4', typ:'berechnung', mehrfach:true, stufe:2, titel:'Gründe für Kostenabweichungen',
  tags:['BAB II','Normalkosten','Kostenkontrolle'],
  text:'In der Fertigungsstelle der Möbelwerk Kraus GmbH ergibt sich eine Kostenunterdeckung: Die Istgemeinkosten liegen über den verrechneten Normalgemeinkosten.',
  frage:'Welche Ursachen kommen in Frage?',
  optionen:[
    {text:'Die Energiepreise sind stärker gestiegen als bei der Festlegung der Normalzuschlagssätze erwartet.', richtig:true, weg:'Preisabweichung: Die Istkosten steigen über den Planansatz.'},
    {text:'Es sind ungeplante Reparaturen an Maschinen angefallen.', richtig:true, weg:'Verbrauchsabweichung: zusätzliche Kosten, die nicht eingeplant waren.'},
    {text:'Die Beschäftigung war niedriger als geplant – die fixen Gemeinkosten verteilen sich auf eine kleinere Zuschlagsgrundlage.', richtig:true, weg:'Beschäftigungsabweichung: Bei kleinerer Grundlage wird über den Normalzuschlag zu wenig verrechnet.'},
    {text:'Die Normalzuschlagssätze wurden aus Durchschnittswerten früherer Perioden zu niedrig angesetzt.', richtig:true, weg:'Sind die Normalsätze zu niedrig, wird regelmäßig zu wenig verrechnet.'},
    {text:'Die Fertigung hat besonders sparsam gearbeitet.', fehler:'Sparsames Arbeiten senkt die Istkosten – das führt eher zu einer Überdeckung.'}
  ],
  hinweise:['Preis-, Verbrauchs- und Beschäftigungsabweichungen unterscheiden.'],
  merke:'Ursachen von Kostenabweichungen: Preisänderungen, Mehr- oder Minderverbrauch, Beschäftigungsschwankungen, ungenaue Normalzuschlagssätze · Unterdeckung mindert das Ergebnis gegenüber der Kalkulation.'
},
/* ---------- Theorie Kostenstellenrechnung (extra) · Modul-ID K4T ----------
   BAB-Ergebnisse deuten: Zuschlagssätze, Über- und Unterdeckungen, Bestandsveränderungen, Schlüssel, Hilfsstellen. */
{
  id:'TB1', modul:'K4T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Materialgemeinkostenzuschlag steigt',
  tags:['Kostenstellenrechnung','Theorie','Zuschlagssätze'],
  text:'Bei der Fahrzeugbau Neumann KG lag der Materialgemeinkostenzuschlag im Vorjahr bei 10 %. Der BAB des laufenden Jahres ergibt 14 %.',
  frage:'Welche Ursachen kommen in Frage?',
  optionen:[
    {text:'Im Materiallager sind die Hilfslöhne gestiegen, z. B. durch zusätzliche Lagerarbeiter oder Tariferhöhungen.', richtig:true,
     weg:'Hilfslöhne des Lagers sind Materialgemeinkosten. Steigen sie bei gleichem Fertigungsmaterial, steigt der Zuschlag.'},
    {text:'Die Energiekosten für Beleuchtung, Heizung und Stapler im Lager sind gestiegen.', richtig:true,
     weg:'Auch das sind Materialgemeinkosten – mehr Gemeinkosten auf dieselbe Grundlage ergibt einen höheren Satz.'},
    {text:'Es wurde weniger Fertigungsmaterial verbraucht, die Kosten des Lagers sind aber gleich geblieben.', richtig:true,
     weg:'Der Zuschlag ist ein Verhältnis: MGK ÷ Fertigungsmaterial. Sinkt die Grundlage bei gleichen Gemeinkosten, steigt der Satz.'},
    {text:'Die Rohstoffpreise sind stark gestiegen.',
     fehler:'Teureres Fertigungsmaterial vergrößert die Zuschlagsgrundlage – der Satz würde bei gleichen Gemeinkosten sinken, nicht steigen.'},
    {text:'Die Fertigungslöhne sind gestiegen.',
     fehler:'Fertigungslöhne sind die Grundlage der Fertigungsgemeinkosten – mit dem Materialbereich haben sie nichts zu tun.'}
  ],
  hinweise:['MGK-Zuschlag = Materialgemeinkosten ÷ Fertigungsmaterial × 100.', 'Ein Bruch wird größer, wenn der Zähler steigt – oder wenn der Nenner sinkt.', 'Was steht im Zähler, was im Nenner? Rohstoffpreise betreffen den Nenner.'],
  merke:'Ein Zuschlagssatz steigt, wenn die Gemeinkosten der Stelle steigen oder die Zuschlagsgrundlage (Einzelkosten) sinkt. Steigende Einzelkosten senken den Satz.'
},
{
  id:'TB2', modul:'K4T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Fertigung I 120 %, Fertigung II 500 %',
  tags:['Kostenstellenrechnung','Theorie','Zuschlagssätze'],
  text:'Im erweiterten BAB der Fahrzeugbau Neumann KG ergibt sich für die Fertigung I (Montage) ein Fertigungsgemeinkostenzuschlag von 120 %, für die Fertigung II (Laserschneiden und Schweißroboter) von 500 %.',
  frage:'Was sind mögliche Ursachen für den hohen Zuschlag in der Fertigung II?',
  optionen:[
    {text:'Die Fertigung II ist stark automatisiert.', richtig:true,
     weg:'Automatisierte Anlagen verursachen hohe Abschreibungen, Zinsen, Energie- und Wartungskosten – alles Fertigungsgemeinkosten.'},
    {text:'In der Fertigung II wird nur wenig Personal eingesetzt, die Fertigungslöhne sind niedrig.', richtig:true,
     weg:'Die Fertigungslöhne sind die Zuschlagsgrundlage. Wenige Löhne und hohe Maschinenkosten ergeben einen sehr hohen Prozentsatz.'},
    {text:'Die Maschinen der Fertigung II verbrauchen viel Energie und müssen regelmäßig gewartet werden.', richtig:true,
     weg:'Energie und Instandhaltung der Anlagen sind Fertigungsgemeinkosten der Stelle.'},
    {text:'In der Fertigung II wird mehr Fertigungsmaterial verarbeitet.',
     fehler:'Das Fertigungsmaterial ist Grundlage der Materialgemeinkosten, nicht der Fertigungsgemeinkosten.'},
    {text:'In der Fertigung I werden besonders niedrige Löhne gezahlt.',
     fehler:'Niedrige Löhne in der Fertigung I würden deren Zuschlag erhöhen – den Satz der Fertigung II erklären sie nicht.'}
  ],
  hinweise:['FGK-Zuschlag = Fertigungsgemeinkosten ÷ Fertigungslöhne × 100.', 'Laser und Schweißroboter: Was kostet viel – und wer bedient sie?', 'Viele Maschinenkosten, wenig Lohn – was passiert mit dem Verhältnis?'],
  merke:'Sehr hohe Fertigungsgemeinkostenzuschläge entstehen bei hoher Automatisierung: viele maschinenabhängige Gemeinkosten, wenig Fertigungslohn. Kleine Lohnschwankungen verändern dann die Kalkulation stark – besser rechnet man mit Maschinenstundensätzen.'
},
{
  id:'TB3', modul:'K4T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Unterdeckung in der Fertigung',
  tags:['Kostenstellenrechnung','Theorie','Normalkosten'],
  text:'Im BAB II der Fahrzeugbau Neumann KG liegen die Ist-Fertigungsgemeinkosten im März um 6.200 € über den Normal-Fertigungsgemeinkosten.',
  frage:'Welche Ursachen kommen für die Kostenunterdeckung in der Fertigung in Frage?',
  optionen:[
    {text:'An den Maschinen waren mehr Reparaturen nötig als geplant.', richtig:true,
     weg:'Reparaturen sind Fertigungsgemeinkosten. Fallen mehr an als in den Normalzuschlägen einkalkuliert, entsteht eine Unterdeckung.'},
    {text:'Die Energiekosten der Fertigung waren höher als geplant.', richtig:true,
     weg:'Höherer Stromverbrauch oder höhere Strompreise erhöhen die Ist-Gemeinkosten der Fertigung.'},
    {text:'Wegen Personalausfällen mussten Hilfslöhne für Springer und Überstunden gezahlt werden.', richtig:true,
     weg:'Hilfslöhne sind Gemeinkosten der Stelle – mehr als geplant führt zur Unterdeckung.'},
    {text:'Die Miete für die Fertigungshalle ist angefallen.',
     fehler:'Die Miete ist fest vereinbart und in den Normalzuschlägen schon enthalten – sie taugt nicht als Erklärung für eine Abweichung.'},
    {text:'Die Abschreibungen auf die Maschinen sind angefallen.',
     fehler:'Abschreibungen sind planbar und gleichbleibend – sie erklären keine Abweichung zwischen Normal- und Istkosten.'}
  ],
  hinweise:['Unterdeckung heißt: Ist-Gemeinkosten > Normal-Gemeinkosten.', 'Gesucht sind Gemeinkosten, die schwanken und mehr als geplant angefallen sein können.', 'Feste, planbare Posten (Miete, Abschreibungen, Versicherung) erklären keine Abweichung.'],
  merke:'Über- und Unterdeckungen erklärt man über Gemeinkosten, die vom Plan abweichen können (Reparaturen, Energie, Hilfslöhne, Hilfs- und Betriebsstoffe) – nicht über Einzelkosten (sie wirken nur über die Zuschlagsgrundlage) und nicht über feste Posten wie Miete, Abschreibungen oder Versicherungen.'
},
{
  id:'TB4', modul:'K4T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Überdeckung im Material',
  tags:['Kostenstellenrechnung','Theorie','Normalkosten'],
  text:'Im Materialbereich der Fahrzeugbau Neumann KG betragen die Normalgemeinkosten im März 18.400 €, die Istgemeinkosten 16.900 €.',
  frage:'Welche Ursachen kommen für die Kostenüberdeckung im Materialbereich in Frage?',
  optionen:[
    {text:'Im Lager fielen weniger Hilfslöhne an als geplant, weil keine Überstunden nötig waren.', richtig:true,
     weg:'Weniger Hilfslöhne → niedrigere Ist-Gemeinkosten → Überdeckung.'},
    {text:'Die Energiekosten des Lagers waren niedriger als geplant.', richtig:true,
     weg:'Auch das senkt die Ist-Materialgemeinkosten unter den Normalwert.'},
    {text:'Es gab weniger Schwund und Verderb im Lager als in den Vorjahren.', richtig:true,
     weg:'Schwund im Lager ist ein Gemeinkostenposten des Materialbereichs – weniger als geplant ergibt eine Überdeckung.'},
    {text:'Das Fertigungsmaterial wurde günstiger eingekauft.',
     fehler:'Fertigungsmaterial ist Einzelkosten. Günstigeres Material senkt sogar die Zuschlagsgrundlage und damit die verrechneten Normal-MGK – das würde eher eine Unterdeckung bewirken, keine Überdeckung.'},
    {text:'Die Miete für die Lagerhalle wurde pünktlich bezahlt.',
     fehler:'Ob und wann gezahlt wird, ändert die Kosten nicht – und die feste Miete ist in den Normalkosten schon enthalten.'}
  ],
  hinweise:['Überdeckung heißt: Normal-Gemeinkosten > Ist-Gemeinkosten.', 'Welche Gemeinkosten des Lagers können niedriger ausfallen als geplant?', 'Einzelkosten und Zahlungszeitpunkte spielen keine Rolle.'],
  merke:'Kostenüberdeckung: Es wurden mehr Gemeinkosten verrechnet (Normal), als tatsächlich angefallen sind (Ist). Die Begründung läuft immer über die Gemeinkosten der Stelle.'
},
{
  id:'TB5', modul:'K4T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Normalkosten höher als Istkosten',
  tags:['Kostenstellenrechnung','Theorie','Normalkosten'],
  text:'Für das Quartal hat die Fahrzeugbau Neumann KG Normalgemeinkosten von insgesamt 248.000 € verrechnet. Tatsächlich angefallen sind 241.500 € Gemeinkosten.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Es liegt eine Kostenüberdeckung von 6.500 € vor.', richtig:true,
     weg:'Normal 248.000 € − Ist 241.500 € = 6.500 € mehr verrechnet als angefallen.'},
    {text:'In der Kalkulation wurde mit höheren Gemeinkosten gerechnet, als tatsächlich angefallen sind.', richtig:true,
     weg:'Die Normalzuschläge waren für dieses Quartal zu hoch – die Kalkulation war vorsichtig.'},
    {text:'Der Istgewinn ist um 6.500 € höher als der Normalgewinn.', richtig:true,
     weg:'Istgewinn − Normalgewinn = Summe der Über- und Unterdeckungen. Es sind weniger Gemeinkosten angefallen als verrechnet – das bleibt als zusätzlicher Gewinn.'},
    {text:'Es liegt eine Kostenunterdeckung vor.',
     fehler:'Unterdeckung hieße Ist > Normal – hier ist es umgekehrt.'},
    {text:'Der Normalgewinn ist höher als der Istgewinn.',
     fehler:'Umgekehrt: Bei einer Überdeckung ist der Istgewinn um 6.500 € höher als der Normalgewinn.'}
  ],
  hinweise:['Vergleiche: verrechnet (Normal) gegen tatsächlich angefallen (Ist).', 'Mehr verrechnet als angefallen – über oder unter?', 'Istgewinn − Normalgewinn = Überdeckung (bzw. − Unterdeckung).'],
  merke:'Normal > Ist: Kostenüberdeckung – der Istgewinn ist höher als der Normalgewinn. Ist > Normal: Kostenunterdeckung – der Istgewinn ist niedriger.'
},
{
  id:'TB6', modul:'K4T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Istkosten höher als Normalkosten',
  tags:['Kostenstellenrechnung','Theorie','Normalkosten'],
  text:'Im Folgequartal verrechnet die Fahrzeugbau Neumann KG Normalgemeinkosten von 252.000 €. Angefallen sind 259.300 € Gemeinkosten.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Es liegt eine Kostenunterdeckung von 7.300 € vor.', richtig:true,
     weg:'Ist 259.300 € − Normal 252.000 € = 7.300 € mehr angefallen als verrechnet.'},
    {text:'Die Preise wurden mit zu niedrigen Gemeinkosten kalkuliert – der tatsächliche Gewinn ist kleiner als geplant.', richtig:true,
     weg:'Die Normalzuschläge haben nicht alle angefallenen Gemeinkosten erfasst; die Differenz geht zulasten des Ergebnisses.'},
    {text:'Der Istgewinn ist um 7.300 € niedriger als der Normalgewinn.', richtig:true,
     weg:'Die zusätzlich angefallenen Gemeinkosten sind in den Preisen nicht enthalten – sie mindern den Gewinn.'},
    {text:'Es liegt eine Kostenüberdeckung vor, weil die Istkosten höher sind.',
     fehler:'Höhere Istkosten als verrechnet heißt: Die Kosten sind nicht gedeckt – Unterdeckung.'},
    {text:'Die Unterdeckung ist entstanden, weil die Fertigungslöhne gestiegen sind.',
     fehler:'Fertigungslöhne sind Einzelkosten. Höhere Löhne erhöhen die Zuschlagsgrundlage und damit die verrechneten Normal-FGK – das würde die Unterdeckung eher verkleinern.'}
  ],
  hinweise:['Mehr angefallen als verrechnet – sind die Kosten gedeckt?', 'Wie wirkt sich das auf den Istgewinn im Vergleich zum Normalgewinn aus?', 'Einzelkosten erklären keine Über- oder Unterdeckung.'],
  merke:'Kostenunterdeckung (Ist > Normal): Die Kalkulation hat Gemeinkosten zu niedrig angesetzt; der Istgewinn liegt um die Unterdeckung unter dem Normalgewinn.'
},
{
  id:'TB7', modul:'K4T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Ist eine Kostenüberdeckung gut?',
  tags:['Kostenstellenrechnung','Theorie','Normalkosten'],
  text:'Die Geschäftsführerin der Fahrzeugbau Neumann KG freut sich: „Wir haben in allen Kostenstellen seit drei Quartalen eine Kostenüberdeckung – besser geht es nicht.“',
  frage:'Wie ist die Lage zu beurteilen?',
  optionen:[
    {text:'Positiv ist: Die tatsächlich angefallenen Gemeinkosten sind durch die kalkulierten Preise gedeckt.', richtig:true,
     weg:'Es wurde mehr verrechnet als angefallen – kein Verlust durch zu knapp kalkulierte Gemeinkosten.'},
    {text:'Die Normalzuschläge sind wahrscheinlich zu hoch – die Angebotspreise könnten über denen der Konkurrenz liegen.', richtig:true,
     weg:'Eine dauerhafte Überdeckung heißt: In jedem Angebot stecken zu viele Gemeinkosten. Das kann Aufträge kosten.'},
    {text:'Die Normalzuschlagssätze sollten überprüft und an die Istwerte angepasst werden.', richtig:true,
     weg:'Normalzuschläge sind Durchschnittswerte vergangener Perioden – liegen sie dauerhaft daneben, werden sie angepasst.'},
    {text:'Eine Überdeckung ist immer gut, es besteht kein Handlungsbedarf.',
     fehler:'Kurzfristig ja, auf Dauer nein: Überhöhte Preise schwächen die Wettbewerbsfähigkeit.'},
    {text:'Eine Kostenüberdeckung bedeutet, dass das Unternehmen Verlust macht.',
     fehler:'Im Gegenteil: Der Istgewinn ist um die Überdeckung höher als der Normalgewinn.'}
  ],
  hinweise:['Was bedeutet Überdeckung für die angefallenen Kosten?', 'Was bedeutet sie für die kalkulierten Preise?', 'Wenn die Abweichung dauerhaft ist: Was ist mit den Normalzuschlägen?'],
  merke:'Kostenüberdeckung: Kosten sind gedeckt – aber dauerhaft zu hohe Normalzuschläge machen die Preise zu teuer. Normalzuschläge regelmäßig an die Istwerte anpassen.'
},
{
  id:'TB8', modul:'K4T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Bestandsmehrung im BAB',
  tags:['Kostenstellenrechnung','Theorie','Bestandsveränderungen'],
  text:'Die Fahrzeugbau Neumann KG hat im Monat mehr Anhänger hergestellt als verkauft. Im BAB sind die Herstellkosten des Umsatzes deshalb kleiner als die Herstellkosten der Erzeugung.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Ein Teil der hergestellten Anhänger liegt noch auf Lager – deren Herstellkosten gehören nicht zum Umsatz dieses Monats.', richtig:true,
     weg:'Herstellkosten des Umsatzes = Herstellkosten der Erzeugung − Mehrbestand.'},
    {text:'Die Verwaltungsgemeinkosten werden auf die Herstellkosten der Erzeugung bezogen, die Vertriebsgemeinkosten auf die Herstellkosten des Umsatzes.', richtig:true,
     weg:'Verwaltet wird die gesamte Produktion; Vertriebskosten entstehen nur für das, was verkauft wird.'},
    {text:'Die Zuschlagsgrundlage der Vertriebsgemeinkosten ist kleiner als die der Verwaltungsgemeinkosten.', richtig:true,
     weg:'Bei einer Mehrung ist die Grundlage des Vertriebs (HK des Umsatzes) um den Mehrbestand kleiner.'},
    {text:'Bei einer Bestandsmehrung werden die Herstellkosten der Erzeugung um den Mehrbestand erhöht.',
     fehler:'Umgekehrt: Der Mehrbestand wird von den Herstellkosten der Erzeugung abgezogen, um die Herstellkosten des Umsatzes zu erhalten.'},
    {text:'Durch die Bestandsmehrung ändern sich auch die Zuschlagsgrundlagen von Material und Fertigung.',
     fehler:'Material und Fertigung beziehen sich auf Fertigungsmaterial und Fertigungslöhne – die ändern sich durch Lagerbestände nicht.'}
  ],
  hinweise:['Mehr hergestellt als verkauft – was liegt auf Lager?', 'Welche Stelle bezieht sich auf die gesamte Produktion, welche nur auf den Verkauf?', 'Material und Fertigung haben eigene Grundlagen (Einzelkosten).'],
  merke:'HK der Erzeugung − Mehrbestand (+ Minderbestand) = HK des Umsatzes. Verwaltung → HK der Erzeugung, Vertrieb → HK des Umsatzes.'
},
{
  id:'TB9', modul:'K4T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Passende Verteilungsschlüssel',
  tags:['Kostenstellenrechnung','Theorie','BAB'],
  text:'Die Fahrzeugbau Neumann KG verteilt im BAB Kostenstellengemeinkosten mit Schlüsseln auf ihre Kostenstellen.',
  frage:'Welche Zuordnungen sind verursachungsgerecht?',
  optionen:[
    {text:'Miete für das Betriebsgebäude nach der Fläche (m²) der Kostenstellen', richtig:true,
     weg:'Wer mehr Fläche belegt, verursacht mehr Miete.'},
    {text:'Stromkosten nach den abgelesenen Zählerständen (kWh) der Kostenstellen', richtig:true,
     weg:'Zählerstände messen den tatsächlichen Verbrauch – genauer geht es nicht.'},
    {text:'Kosten der Kantine nach der Zahl der Beschäftigten je Kostenstelle', richtig:true,
     weg:'Die Kantine wird von den Mitarbeitern genutzt – die Kopfzahl ist ein sinnvoller Maßstab.'},
    {text:'Abschreibungen auf Maschinen gleichmäßig auf alle Kostenstellen',
     fehler:'Abschreibungen fallen dort an, wo die Maschinen stehen – sie werden nach den Anlagewerten der Stellen verteilt.'},
    {text:'Heizkosten nach den Fertigungslöhnen der Kostenstellen',
     fehler:'Heizkosten hängen vom beheizten Raum ab (m² oder m³), nicht von der Höhe der Löhne.'}
  ],
  hinweise:['Verursachungsgerecht heißt: Wer mehr in Anspruch nimmt, trägt mehr.', 'Frag dich bei jedem Posten: Wovon hängt die Höhe dieser Kosten ab?', 'Gleichmäßig verteilen ist fast nie verursachungsgerecht.'],
  merke:'Typische Schlüssel: Miete/Heizung → Fläche oder Raum, Strom → Zähler (kWh), Abschreibungen → Anlagewerte, Kantine/Sozialkosten → Beschäftigte. Wo es Belege gibt, wird direkt zugeordnet.'
},
{
  id:'TB10', modul:'K4T', typ:'berechnung', mehrfach:true, stufe:0, titel:'Warum Hilfskostenstellen umlegen?',
  tags:['Kostenstellenrechnung','Theorie','BAB'],
  text:'Im mehrstufigen BAB der Fahrzeugbau Neumann KG stehen die Hilfskostenstellen Werkstatt und Fuhrpark vor den Hauptkostenstellen.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Hilfskostenstellen geben ihre Leistungen nur an andere Kostenstellen ab, nicht an die Erzeugnisse – ohne Umlage kämen ihre Kosten nie in die Kalkulation.', richtig:true,
     weg:'Zuschlagssätze gibt es nur für die Hauptkostenstellen. Deshalb müssen die Hilfsstellen vorher auf sie umgelegt werden.'},
    {text:'Umgelegt wird nach der Inanspruchnahme, z. B. Reparaturstunden der Werkstatt oder gefahrene Kilometer des Fuhrparks.', richtig:true,
     weg:'So trägt jede Stelle den Teil, den sie verursacht hat.'},
    {text:'Nach der Umlage stehen die Hilfskostenstellen auf null.', richtig:true,
     weg:'Ihre Kosten sind vollständig auf die empfangenden Stellen übertragen.'},
    {text:'Hilfskostenstellen erhalten einen eigenen Zuschlagssatz für die Kalkulation.',
     fehler:'Nur Hauptkostenstellen haben eine Zuschlagsgrundlage aus Einzelkosten oder Herstellkosten – Hilfsstellen nicht.'},
    {text:'Die Kosten der Hilfskostenstellen werden als neutraler Aufwand abgegrenzt.',
     fehler:'Werkstatt und Fuhrpark arbeiten für den Betrieb – ihre Kosten sind Kosten und bleiben in der KLR.'}
  ],
  hinweise:['Wer liefert an wen? Erzeugnisse oder andere Stellen?', 'Wonach wäre eine gerechte Aufteilung der Werkstattkosten?', 'Welche Stellen bekommen einen Zuschlagssatz?'],
  merke:'Allgemeine Hilfskostenstellen werden auf alle folgenden Stellen umgelegt, Fertigungshilfsstellen nur auf die Fertigung – nach der Inanspruchnahme. Danach stehen sie auf null; Zuschlagssätze gibt es nur für die Hauptkostenstellen.'
},
/* ---------- Modul 6 · Kostenträgerzeitrechnung ---------- */
{
  id:'TT1', modul:'K5', typ:'berechnung', stufe:0, titel:'Kostenüberdeckung',
  tags:['Kostenträgerzeitrechnung','Theorie'],
  text:'In der Fertigung wurden mit dem Normalzuschlagssatz 399.280,00 € Gemeinkosten verrechnet. Laut BAB sind tatsächlich 416.400,00 € angefallen.',
  frage:'Was liegt vor?',
  optionen:[
    {text:'Eine Kostenunterdeckung von 17.120,00 € – es wurden weniger Gemeinkosten verrechnet, als angefallen sind.', richtig:true,
     weg:'Über-/Unterdeckung = Normalgemeinkosten − Istgemeinkosten = 399.280,00 € − 416.400,00 € = −17.120,00 €. Negativ heißt: zu wenig verrechnet, der Istgewinn fällt entsprechend niedriger aus.'},
    {text:'Eine Kostenüberdeckung von 17.120,00 €.', fehler:'Überdeckung hieße: mehr verrechnet, als angefallen ist. Hier ist es umgekehrt.'},
    {text:'Eine Kostenunterdeckung, die den Istgewinn erhöht.', fehler:'Wurden zu wenig Kosten verrechnet, sind die tatsächlichen Kosten höher – der Istgewinn ist niedriger.'},
    {text:'Ein Fehler bei den Fertigungslöhnen.', fehler:'Einzelkosten sind in Ist- und Normalrechnung gleich; Abweichungen entstehen nur bei den Gemeinkosten.'}
  ],
  hinweise:['Normalgemeinkosten − Istgemeinkosten = ?', 'Das Ergebnis ist negativ.', 'Negativ = zu wenig verrechnet = Unterdeckung.'],
  merke:'Über-/Unterdeckung = Normalgemeinkosten − Istgemeinkosten. Überdeckung (+): Istgewinn höher; Unterdeckung (−): Istgewinn niedriger.'
},
{
  id:'TT2', modul:'K5', typ:'berechnung', stufe:0, titel:'Woher kommt die Gewinnabweichung?',
  tags:['Kostenträgerzeitrechnung','Theorie'],
  text:'In der Kostenträgerzeitrechnung beträgt der Gewinn auf Istkostenbasis 78.370,00 €, auf Normalkostenbasis 64.774,15 €.',
  frage:'Wie lässt sich die Abweichung von 13.595,85 € begründen?',
  optionen:[
    {text:'Durch die Summe der Kostenüber- und -unterdeckungen der Gemeinkosten – insgesamt eine Überdeckung von 13.595,85 €.', richtig:true,
     weg:'Einzelkosten und Erlöse sind in beiden Rechnungen gleich. Unterschiedlich sind nur die Gemeinkosten: Ist laut BAB, Normal mit den Normalsätzen. Die Summe der Abweichungen ist genau die Gewinnabweichung.'},
    {text:'Durch höhere Einzelkosten in der Istrechnung.', fehler:'Die Einzelkosten sind in Ist- und Normalrechnung gleich – sie können die Abweichung nicht erklären.'},
    {text:'Durch eine Kostenunterdeckung von 13.595,85 €.', fehler:'Bei einer Unterdeckung wäre der Istgewinn niedriger als der Normalgewinn.'},
    {text:'Durch die Bestandsmehrung.', fehler:'Die Bestandsveränderung steht in beiden Rechnungen in gleicher Höhe.'}
  ],
  hinweise:['Was ist in beiden Spalten gleich?', 'Einzelkosten, Bestandsveränderung, Erlöse.', 'Was bleibt als Unterschied?'],
  merke:'Istgewinn − Normalgewinn = Summe der Über- und Unterdeckungen. Die Begründung erfolgt immer über die Gemeinkosten, nie über die Einzelkosten.'
},
ktz({id:'TZ1', stufe:1, titel:'Kostenträgerzeitrechnung · ohne Bestandsveränderungen', firma:'Elektromotoren Weiß GmbH',
  mek:210000, fek:160000, ist:{mgk:25200, fgk:192000, vw:48000, vt:33000}, normal:{mgk:11, fgk:125, vw:9, vt:6}, erl:780000,
  merke:'Ohne Bestandsveränderungen sind Herstellkosten der Fertigung und des Umsatzes gleich.'}),
ktz({id:'TZ2', stufe:2, titel:'Kostenträgerzeitrechnung · Mehrung und Minderung', firma:'Kurpfalz Präzisionsteile KG',
  mek:354200, fek:273480, ist:{mgk:68700, fgk:416400, vw:151400, vt:105300}, normal:{mgk:22, fgk:146, vw:12, vt:14}, erl:1383000,
  ufe:[15000, 85000], fe:[60150, 55000],
  merke:'Unfertige Erzeugnisse nehmen zu (+ 70.000 €), fertige ab (− 5.150 €): insgesamt eine Bestandsmehrung von 64.850 €, die die Herstellkosten des Umsatzes mindert.'}),
ktz({id:'TZ3', stufe:3, titel:'Kostenträgerzeitrechnung · gemischte Bestände, Unterdeckung', firma:'Maschinenbau Keller AG',
  mek:486000, fek:312500, ist:{mgk:63180, fgk:515625, vw:98000, vt:121500}, normal:{mgk:12, fgk:160, vw:7, vt:9}, erl:1750000,
  ufe:[42300, 28900], fe:[65800, 81200],
  merke:'Unfertige und fertige Erzeugnisse zusammen betrachten: Hier gleicht die Mehrung der fertigen die Minderung der unfertigen Erzeugnisse mehr als aus.'}),
/* ---------- Modul 7 · Vorwärtskalkulation ---------- */
{
  id:'KT1', modul:'K6', typ:'berechnung', stufe:0, titel:'Skonto „im Hundert“',
  tags:['Kalkulation','Theorie'],
  text:'Der Barverkaufspreis beträgt 9.800,00 €. Der Kunde darf 2 % Skonto abziehen.',
  frage:'Wie hoch ist der Zielverkaufspreis?',
  optionen:[
    {wert:10000, richtig:true, weg:'Skonto wird vom Zielverkaufspreis abgezogen: 9.800,00 € entsprechen 98 % → 9.800,00 € ÷ 98 × 100 = 10.000,00 €.'},
    {wert:9996, fehler:'2 % auf 9.800,00 € aufgeschlagen ergibt 9.996,00 € – zieht der Kunde dann 2 % ab, bleiben nur 9.796,08 €.'},
    {wert:9604, fehler:'Das wäre ein Abzug – der Zielverkaufspreis muss höher sein als der Barverkaufspreis.'},
    {wert:9800, fehler:'Ohne Aufschlag würde der Skontoabzug den Erlös schmälern.'}
  ],
  hinweise:['Von welchem Preis zieht der Kunde den Skonto ab?', 'Der Barverkaufspreis ist der Zielverkaufspreis nach Skontoabzug – also 98 %.', '9.800 ÷ 0,98 = …'],
  merke:'Skonto, Provision und Rabatt werden „im Hundert“ gerechnet: Der höhere Preis ist 100 %. Vorwärts: ÷ (100 − Satz) × 100.'
},
/* Stufe 1–3: je eine Aufgabe mit einer, dann eine mit zwei Fertigungsstellen */
kalk({id:'KV1', art:'vor', stufe:1, titel:'Vorwärtskalkulation · Grundschema', firma:'Die Möbelwerk Kraus GmbH', produkt:'einen Auftrag über 20 Schreibtische',
  fm:8400, mgk:12, fl:3600, fgk:140, vw:9, vt:6, gewinn:10, skonto:2, rabatt:15,
  merke:'Vorwärtskalkulation: Zuschläge „vom Hundert“ bis zum Barverkaufspreis, danach Skonto und Rabatt „im Hundert“.'}),
kalk({id:'KVZ1', art:'vor', stufe:1, titel:'Vorwärtskalkulation · zwei Fertigungsstellen', firma:'Die Feinmechanik Ludwig GmbH', produkt:'eine Serie Präzisionsteile',
  fm:5200, mgk:10, fl:[1800, 1200], fgk:[180, 120], vw:8, vt:7, gewinn:12, skonto:3, rabatt:10,
  merke:'Mit zwei Fertigungsstellen wird jede Stelle mit ihrem eigenen Zuschlag auf ihre eigenen Fertigungslöhne gerechnet.'}),
kalk({id:'KVN2', art:'vor', stufe:2, titel:'Vorwärtskalkulation · ohne Sondereinzelkosten', firma:'Die Polsterei Brandt GmbH', produkt:'einen Auftrag über 12 Sofas',
  fm:14800, mgk:9, fl:6200, fgk:135, vw:11, vt:7, gewinn:14, skonto:3, rabatt:20,
  merke:'Ohne Sondereinzelkosten und Provision: Materialkosten + Fertigungskosten = Herstellkosten; Skonto allein „im Hundert“.'}),
kalk({id:'KV2', art:'vor', stufe:2, titel:'Vorwärtskalkulation · Sondereinzelkosten und Provision', firma:'Die Kunststoffwerk Lenz GmbH', produkt:'einen Sonderauftrag Gehäuseteile',
  fm:12600, mgk:14, fl:5400, fgk:125, sekf:450, vw:11, vt:6, sekvt:300, gewinn:15, skonto:2, prov:5, rabatt:20,
  merke:'Sondereinzelkosten werden ohne Zuschlag addiert: SEKF zu den Fertigungskosten, SEKVt zu den Selbstkosten. Skonto und Provision gemeinsam „im Hundert“.'}),
kalk({id:'KVZ2', art:'vor', stufe:2, titel:'Vorwärtskalkulation · zwei Fertigungsstellen mit SEKF und Provision', firma:'Die Pumpenbau Roth GmbH', produkt:'eine Kreiselpumpe',
  fm:7800, mgk:12, fl:[2200, 2800], fgk:[190, 110], sekf:350, vw:10, vt:6, gewinn:12, skonto:2, prov:3, rabatt:15,
  merke:'Jede Fertigungsstelle hat ihren eigenen Zuschlag. Die SEKF kommen ohne Zuschlag zu den Fertigungskosten.'}),
kalk({id:'KVN3', art:'vor', stufe:3, titel:'Vorwärtskalkulation · zwei Fertigungsstellen ohne Sondereinzelkosten', firma:'Die Kunstguss Merkel GmbH', produkt:'eine Serie Pumpengehäuse',
  fm:19600, mgk:11, fl:[4300, 5100], fgk:[240, 95], vw:13, vt:8, gewinn:11, skonto:2, rabatt:25,
  merke:'Zwei Fertigungsstellen mit sehr unterschiedlichen Zuschlägen – jede Stelle rechnet mit ihrem eigenen Satz.'}),
kalk({id:'KV3', art:'vor', stufe:3, titel:'Vorwärtskalkulation · alle Bestandteile', firma:'Die Präzisionstechnik Wolf GmbH', produkt:'eine Sondermaschine',
  fm:23750, mgk:14, fl:9800, fgk:160, sekf:1250, vw:12, vt:8, sekvt:840, gewinn:9, skonto:2, prov:3, rabatt:20,
  merke:'Stufe 3: alle Bestandteile – Sondereinzelkosten der Fertigung und des Vertriebs, Skonto und Provision gemeinsam „im Hundert“, dann Rabatt.'}),
kalk({id:'KVZ3', art:'vor', stufe:3, titel:'Vorwärtskalkulation · zwei Fertigungsstellen, alle Bestandteile', firma:'Die Hydraulik Becker GmbH', produkt:'eine Hebebühne',
  fm:16450, mgk:12, fl:[5400, 3850], fgk:[215, 130], sekf:980, vw:13, vt:7, sekvt:620, gewinn:9, skonto:3, prov:4, rabatt:25,
  merke:'Zwei Fertigungsstellen mit unterschiedlich hohen Zuschlägen – das ist die Vorstufe zur Maschinenstundensatzrechnung.'}),
kalk({id:'KVF1', art:'vor', stufe:3, frei:true, titel:'Vorwärtskalkulation · Schema selbst aufstellen', firma:'Die Schreinerei Holzmann GmbH', produkt:'eine Einbauküche',
  fm:9600, mgk:15, fl:4200, fgk:130, vw:10, vt:5, gewinn:12, skonto:2, rabatt:20,
  merke:'Wie in der Prüfung: Das Schema steht nicht da – erst die Zeilen in der richtigen Reihenfolge, dann rechnen.'}),
kalk({id:'KVF2', art:'vor', stufe:3, frei:true, titel:'Vorwärtskalkulation · Schema selbst aufstellen, alle Bestandteile', firma:'Die Elektromotoren Weiß GmbH', produkt:'eine Serie Antriebsmotoren',
  fm:15400, mgk:10, fl:[3600, 2800], fgk:[200, 150], sekf:600, vw:12, vt:6, sekvt:400, gewinn:10, skonto:2, prov:4, rabatt:15,
  merke:'SEKF gehören in die Fertigungskosten, SEKVt zwischen Vertriebsgemeinkosten und Selbstkosten; Skonto und Provision stehen zwischen Bar- und Zielverkaufspreis.'}),
/* Wirtschaftsgymnasium (05.11.2026): eine Fertigungsstelle, Sondereinzelkosten ja, keine Vertreterprovision */
kalk({id:'KVW1', art:'vor', stufe:1, titel:'Vorwärtskalkulation · Angebot für Fahrräder', firma:'Die Radwerk Brenner GmbH', produkt:'einen Auftrag über 40 Trekkingräder',
  fm:12000, mgk:8, fl:5000, fgk:120, vw:10, vt:5, gewinn:12, skonto:2, rabatt:10,
  merke:'Zuschläge auf die Grundlage („vom Hundert“): MGK auf FM, FGK auf FL, VwGK und VtGK auf die Herstellkosten, Gewinn auf die Selbstkosten.'}),
kalk({id:'KVW2', art:'vor', stufe:2, titel:'Vorwärtskalkulation · mit Sondereinzelkosten der Fertigung', firma:'Die Gießerei Haller GmbH', produkt:'eine Serie Ventilgehäuse',
  fm:9600, mgk:12, fl:4400, fgk:150, sekf:800, vw:9, vt:6, gewinn:10, skonto:3, rabatt:15,
  merke:'Sondereinzelkosten der Fertigung (z. B. Modelle, Spezialwerkzeuge) kommen ohne Zuschlag zu den Fertigungskosten.'}),
kalk({id:'KVW3', art:'vor', stufe:2, titel:'Vorwärtskalkulation · mit Sondereinzelkosten des Vertriebs', firma:'Die Küchenbau Seiler GmbH', produkt:'eine Großküche für eine Kantine',
  fm:15200, mgk:10, fl:6100, fgk:130, vw:11, vt:7, sekvt:650, gewinn:8, skonto:2, rabatt:20,
  merke:'Sondereinzelkosten des Vertriebs (z. B. Spezialverpackung, Transportversicherung) werden nach den Vertriebsgemeinkosten addiert.'}),
kalk({id:'KVW4', art:'vor', stufe:3, titel:'Vorwärtskalkulation · beide Sondereinzelkosten', firma:'Die Sondermaschinen Brandl GmbH', produkt:'eine Abfüllanlage',
  fm:21400, mgk:13, fl:8800, fgk:175, sekf:1400, vw:12, vt:8, sekvt:900, gewinn:9, skonto:3, rabatt:25,
  merke:'SEKF zu den Fertigungskosten, SEKVt zu den Selbstkosten – beide ohne Zuschlag. Skonto und Rabatt „im Hundert“.'}),
kalk({id:'KVW5', art:'vor', stufe:3, frei:true, ohneProv:true, titel:'Vorwärtskalkulation · Schema selbst aufstellen mit Sondereinzelkosten', firma:'Die Metallbau Ritter GmbH', produkt:'ein Vordach aus Edelstahl',
  fm:11800, mgk:11, fl:4600, fgk:145, sekf:500, vw:10, vt:6, sekvt:300, gewinn:10, skonto:2, rabatt:15,
  merke:'Wie in der Prüfung: zuerst das Schema in der richtigen Reihenfolge aufstellen, dann rechnen.'}),
/* ---------- Modul 8 · Rückwärtskalkulation (Ziel: Fertigungsmaterial, Materialkosten, Fertigungslöhne) ---------- */
{
  id:'KT3', modul:'K6R', typ:'berechnung', stufe:0, titel:'Gewinn „auf Hundert“',
  tags:['Kalkulation','Theorie'],
  text:'In einer Rückwärtskalkulation beträgt der Barverkaufspreis 11.200,00 €. Kalkuliert wird mit 12 % Gewinn.',
  frage:'Wie hoch dürfen die Selbstkosten höchstens sein?',
  optionen:[
    {wert:10000, richtig:true, weg:'Der Gewinn wird auf die Selbstkosten (100 %) aufgeschlagen, der Barverkaufspreis entspricht 112 % → 11.200,00 € ÷ 112 × 100 = 10.000,00 €.'},
    {wert:9856, fehler:'12 % vom Barverkaufspreis abgezogen – der Gewinn bezieht sich aber auf die Selbstkosten, nicht auf den Barverkaufspreis.'},
    {wert:12544, fehler:'Das wäre ein Aufschlag – rückwärts müssen die Selbstkosten kleiner sein als der Barverkaufspreis.'},
    {wert:11200, fehler:'Ohne Abzug bliebe kein Gewinn übrig.'}
  ],
  hinweise:['Worauf wird der Gewinn in der Vorwärtskalkulation aufgeschlagen?', 'Selbstkosten = 100 %, Barverkaufspreis = 112 %.', '11.200 ÷ 1,12 = …'],
  merke:'Gewinn und Zuschläge werden rückwärts „auf Hundert“ herausgerechnet: ÷ (100 + Satz) × 100.'
},
/* Stufe 1–3 */
kalk({id:'KR1', art:'rueck', ziel:'fm', stufe:1, titel:'Rückwärtskalkulation · zulässiges Fertigungsmaterial', firma:'Holzbau Wagner GmbH', produkt:'eine Gartenhütte',
  lvp:25000, rabatt:20, skonto:3, gewinn:8, vw:10, vt:5, fl:4200, fgk:150, mgk:10,
  merke:'Rückwärts werden Rabatt und Skonto „vom Hundert“ abgezogen, Gewinn und Zuschläge „auf Hundert“ herausgerechnet.'}),
kalk({id:'KRZ1', art:'rueck', ziel:'fm', stufe:1, titel:'Rückwärtskalkulation · zwei Fertigungsstellen', firma:'Stahlbau Krüger GmbH', produkt:'ein Rolltor',
  lvp:30000, rabatt:15, skonto:2, gewinn:10, vw:9, vt:6, fl:[2400, 1600], fgk:[160, 110], mgk:10,
  merke:'Fertigungskosten = (FL I + FGK I) + (FL II + FGK II); Materialkosten = Herstellkosten − Fertigungskosten.'}),
kalk({id:'KRN2', art:'rueck', ziel:'fl', stufe:2, titel:'Rückwärtskalkulation · zulässige Fertigungslöhne ohne Sondereinzelkosten', firma:'Glasbau Fischer GmbH', produkt:'eine Glasfassade',
  lvp:58000, rabatt:20, skonto:3, gewinn:12, vw:10, vt:6, fm:16000, mgk:12, fgk:150,
  merke:'Fertigungslöhne rückwärts: Fertigungskosten = Herstellkosten − Materialkosten; Fertigungslöhne = Fertigungskosten ÷ (100 + FGK) × 100.'}),
kalk({id:'KR2', art:'rueck', ziel:'mk', stufe:2, titel:'Rückwärtskalkulation · zulässige Materialkosten', firma:'Fensterbau Schuster GmbH', produkt:'eine Haustür',
  lvp:48000, rabatt:25, skonto:2, prov:4, gewinn:12, vw:9, vt:6, fl:7500, fgk:135, sekf:600,
  merke:'Materialkosten = Herstellkosten − Fertigungskosten. Die SEKF gehören zu den Fertigungskosten.'}),
kalk({id:'KRZ2', art:'rueck', ziel:'mk', stufe:2, titel:'Rückwärtskalkulation · zulässige Materialkosten, zwei Fertigungsstellen', firma:'Möbelfabrik Hahn GmbH', produkt:'eine Ladeneinrichtung',
  lvp:54000, rabatt:20, skonto:2, prov:3, gewinn:10, vw:10, vt:5, fl:[3800, 2900], fgk:[175, 120], sekf:700,
  merke:'Die Materialkosten sind der Rest: Herstellkosten minus Fertigungskosten beider Stellen und SEKF.'}),
kalk({id:'KRN3', art:'rueck', ziel:'mk', stufe:3, titel:'Rückwärtskalkulation · zulässige Materialkosten, zwei Fertigungsstellen', firma:'Kesselbau Albrecht GmbH', produkt:'einen Druckbehälter',
  lvp:86000, rabatt:25, skonto:2, gewinn:9, vw:12, vt:7, fl:[6400, 4900], fgk:[190, 130],
  merke:'Materialkosten = Herstellkosten − Fertigungskosten beider Stellen.'}),
kalk({id:'KR3', art:'rueck', ziel:'fl', stufe:3, titel:'Rückwärtskalkulation · zulässige Fertigungslöhne', firma:'Antriebstechnik Seidel GmbH', produkt:'ein Getriebe',
  lvp:64000, rabatt:20, skonto:2, prov:3, gewinn:10, vw:11, vt:6, sekvt:520, fm:14000, mgk:15, sekf:900, fgk:180,
  merke:'Fertigungslöhne rückwärts: Fertigungskosten − SEKF = Fertigungslöhne + FGK = 100 % + FGK-Satz.'}),
kalk({id:'KRZ3', art:'rueck', ziel:'fm', stufe:3, titel:'Rückwärtskalkulation · zwei Fertigungsstellen', firma:'Elektrotechnik Sauer KG', produkt:'einen Schaltschrank',
  lvp:72000, rabatt:20, skonto:3, prov:2, gewinn:12, vw:10, vt:6, sekvt:600, fl:[4800, 3600], fgk:[220, 140], sekf:1000, mgk:12,
  merke:'Mit zwei Fertigungsstellen: Fertigungskosten = (FL I + FGK I) + (FL II + FGK II) + SEKF – dann Materialkosten und Fertigungsmaterial rückwärts.'}),
kalk({id:'KRF1', art:'rueck', ziel:'fm', stufe:3, frei:true, titel:'Rückwärtskalkulation · Schema selbst aufstellen', firma:'Bootsbau Klein GmbH', produkt:'ein Ruderboot',
  lvp:18000, rabatt:10, skonto:2, gewinn:10, vw:9, vt:6, fl:3800, fgk:120, mgk:12,
  merke:'Auch rückwärts steht das Schema in der gewohnten Reihenfolge – gerechnet wird von unten nach oben.'}),
kalk({id:'KRF2', art:'rueck', ziel:'mk', stufe:3, frei:true, titel:'Rückwärtskalkulation · Schema selbst aufstellen, zulässige Materialkosten', firma:'Fahrzeugbau Neumann KG', produkt:'einen Anhänger',
  lvp:42000, rabatt:20, skonto:3, prov:2, gewinn:8, vw:10, vt:5, sekvt:350, fl:[3200, 2100], fgk:[180, 110], sekf:500,
  merke:'Gesucht sind die Materialkosten – Fertigungsmaterial und Materialgemeinkosten gehören dann nicht ins Schema.'}),
/* Wirtschaftsgymnasium (05.11.2026): eine Fertigungsstelle, Sondereinzelkosten ja, keine Vertreterprovision */
kalk({id:'KRW1', art:'rueck', ziel:'fm', stufe:1, titel:'Rückwärtskalkulation · zulässiges Fertigungsmaterial für ein Carport', firma:'Holzbau Kerner GmbH', produkt:'ein Carport',
  lvp:32000, rabatt:15, skonto:2, gewinn:10, vw:10, vt:5, fl:5200, fgk:140, mgk:10,
  merke:'Rückwärts: Rabatt und Skonto „vom Hundert“ abziehen, Gewinn und Zuschläge „auf Hundert“ herausrechnen.'}),
kalk({id:'KRW2', art:'rueck', ziel:'fl', stufe:2, titel:'Rückwärtskalkulation · zulässige Fertigungslöhne mit SEKF', firma:'Werkzeugbau Lorenz GmbH', produkt:'ein Spritzgießwerkzeug',
  lvp:46000, rabatt:20, skonto:3, gewinn:12, vw:9, vt:6, fm:12500, mgk:12, fgk:160, sekf:700,
  merke:'Fertigungslöhne rückwärts: Fertigungskosten − SEKF = FL + FGK = (100 + FGK-Satz) %.'}),
kalk({id:'KRW3', art:'rueck', ziel:'mk', stufe:2, titel:'Rückwärtskalkulation · zulässige Materialkosten mit SEKVt', firma:'Treppenbau Möller GmbH', produkt:'eine Wendeltreppe',
  lvp:38000, rabatt:10, skonto:2, gewinn:8, vw:11, vt:6, sekvt:400, fl:6000, fgk:125,
  merke:'Die SEKVt werden vor dem Herausrechnen der Verwaltungs- und Vertriebsgemeinkosten von den Selbstkosten abgezogen.'}),
kalk({id:'KRW4', art:'rueck', ziel:'fm', stufe:3, frei:true, ohneProv:true, titel:'Rückwärtskalkulation · Schema selbst aufstellen mit Sondereinzelkosten', firma:'Anlagenbau Petersen KG', produkt:'eine Förderanlage',
  lvp:52000, rabatt:20, skonto:2, gewinn:10, vw:10, vt:7, sekvt:500, fl:7400, fgk:150, sekf:900, mgk:12,
  merke:'Rückwärts im eigenen Schema: von unten nach oben rechnen, Sondereinzelkosten ohne Zuschlag abziehen.'}),
/* ---------- Modul 9 · Differenzkalkulation ---------- */
{
  id:'KT2', modul:'K6D', typ:'berechnung', stufe:0, titel:'Welche Kalkulation?',
  tags:['Kalkulation','Theorie'],
  text:'Ein Wettbewerber bietet ein vergleichbares Erzeugnis zu einem Listenpreis an, den auch der eigene Betrieb nicht überschreiten kann. Die eigenen Selbstkosten sind bekannt.',
  frage:'Mit welcher Kalkulation prüft der Betrieb, ob sich der Auftrag lohnt?',
  optionen:[
    {text:'Differenzkalkulation – sie ermittelt den Gewinn, der beim vorgegebenen Preis übrig bleibt.', richtig:true,
     weg:'Selbstkosten (vorwärts) und Barverkaufspreis (rückwärts vom Marktpreis) sind bekannt; die Differenz ist der Gewinn bzw. Verlust.'},
    {text:'Vorwärtskalkulation.', fehler:'Sie ermittelt den Angebotspreis aus den Kosten – der Preis ist hier aber vorgegeben.'},
    {text:'Rückwärtskalkulation.', fehler:'Sie ermittelt, wie hoch die Kosten höchstens sein dürfen – hier sind die Kosten bekannt, gesucht ist der Gewinn.'},
    {text:'Nachkalkulation.', fehler:'Sie vergleicht nach Abschluss eines Auftrags die tatsächlichen mit den geplanten Kosten.'}
  ],
  hinweise:['Was ist bekannt, was ist gesucht?', 'Preis und Kosten stehen fest.', 'Gesucht ist der Unterschied – der Gewinn.'],
  merke:'Vorwärts: Kosten → Preis. Rückwärts: Preis → zulässige Kosten. Differenz: Kosten und Preis → Gewinn.'
},
/* Stufe 1–3 */
kalk({id:'KD1', art:'diff', stufe:1, titel:'Differenzkalkulation · Gewinn beim Marktpreis', firma:'Die Metallbau Vogt GmbH', produkt:'ein Treppengeländer',
  fm:6000, mgk:15, fl:2400, fgk:160, vw:12, vt:8, lvp:20000, rabatt:10, skonto:2,
  merke:'Differenzkalkulation: Selbstkosten vorwärts, Barverkaufspreis rückwärts – der Unterschied ist der Gewinn.'}),
kalk({id:'KDZ1', art:'diff', stufe:1, titel:'Differenzkalkulation · zwei Fertigungsstellen', firma:'Die Werkzeugbau Arnold GmbH', produkt:'einen Satz Stanzwerkzeuge',
  fm:4600, mgk:12, fl:[1500, 1100], fgk:[170, 130], vw:10, vt:6, lvp:17000, rabatt:10, skonto:2,
  merke:'Die Selbstkosten werden mit beiden Fertigungsstellen vorwärts gerechnet, der Barverkaufspreis rückwärts vom Listenpreis.'}),
kalk({id:'KDN2', art:'diff', stufe:2, titel:'Differenzkalkulation · ohne Sondereinzelkosten', firma:'Die Leuchtenwerk Schott GmbH', produkt:'eine Serie Hallenleuchten',
  fm:11200, mgk:14, fl:4800, fgk:165, vw:11, vt:7, lvp:39700, rabatt:15, skonto:2,
  merke:'Differenzkalkulation: Selbstkosten vorwärts, Barverkaufspreis rückwärts – der Unterschied ist der Gewinn.'}),
kalk({id:'KD2', art:'diff', stufe:2, titel:'Differenzkalkulation · mit Sondereinzelkosten des Vertriebs', firma:'Die Textilwerk Brenner GmbH', produkt:'eine Ladung Arbeitsjacken',
  fm:7500, mgk:16, fl:3000, fgk:175, vw:10, vt:8, sekvt:380, lvp:26500, rabatt:12, skonto:2,
  merke:'Die Sondereinzelkosten des Vertriebs gehören zu den Selbstkosten – sie mindern den Gewinn in voller Höhe.'}),
kalk({id:'KDZ2', art:'diff', stufe:2, titel:'Differenzkalkulation · zwei Fertigungsstellen', firma:'Die Gerätebau Lindner GmbH', produkt:'eine Messstation',
  fm:9800, mgk:12, fl:[2600, 3400], fgk:[210, 95], sekf:800, vw:10, vt:7, sekvt:450, lvp:43500, rabatt:15, skonto:3, prov:2,
  merke:'Die Fertigungskosten setzen sich aus beiden Fertigungsstellen und den Sondereinzelkosten der Fertigung zusammen.'}),
kalk({id:'KDN3', art:'diff', stufe:3, titel:'Differenzkalkulation · zwei Fertigungsstellen ohne Sondereinzelkosten', firma:'Die Ventiltechnik Kurz AG', produkt:'eine Charge Regelventile',
  fm:17500, mgk:12, fl:[5600, 3900], fgk:[210, 140], vw:12, vt:8, lvp:70000, rabatt:20, skonto:3,
  merke:'Liegt der Barverkaufspreis unter den Selbstkosten, entsteht ein Verlust – der Prozentsatz wird negativ.'}),
kalk({id:'KD3', art:'diff', stufe:3, titel:'Differenzkalkulation · Verlust beim Marktpreis', firma:'Die Maschinenbau Keller AG', produkt:'eine Verpackungsanlage',
  fm:18000, mgk:14, fl:8500, fgk:190, sekf:1200, vw:12, vt:8, sekvt:700, lvp:62000, rabatt:25, skonto:3, prov:4,
  merke:'Ist der Barverkaufspreis kleiner als die Selbstkosten, entsteht ein Verlust – Gewinn und Prozentsatz werden negativ.'}),
kalk({id:'KDZ3', art:'diff', stufe:3, titel:'Differenzkalkulation · zwei Fertigungsstellen, alle Bestandteile', firma:'Die Anlagenbau Hartmann AG', produkt:'eine Abfüllanlage',
  fm:21500, mgk:14, fl:[6200, 4700], fgk:[205, 145], sekf:1350, vw:12, vt:8, sekvt:880, lvp:97500, rabatt:20, skonto:2, prov:3,
  merke:'Mehrere Fertigungsstellen, Sondereinzelkosten und Provision – der Gewinn in % bezieht sich immer auf die Selbstkosten.'}),
kalk({id:'KDF1', art:'diff', stufe:3, frei:true, titel:'Differenzkalkulation · Schema selbst aufstellen', firma:'Die Druckerei Lang GmbH', produkt:'einen Auftrag Kataloge',
  fm:7200, mgk:10, fl:3100, fgk:150, vw:12, vt:6, lvp:24400, rabatt:15, skonto:2,
  merke:'Differenzkalkulation im eigenen Schema: oben vorwärts bis zu den Selbstkosten, unten rückwärts bis zum Barverkaufspreis.'}),
kalk({id:'KDF2', art:'diff', stufe:3, frei:true, titel:'Differenzkalkulation · Schema selbst aufstellen, alle Bestandteile', firma:'Die Medizintechnik Graf GmbH', produkt:'eine Serie Untersuchungsliegen',
  fm:12800, mgk:12, fl:[3900, 2600], fgk:[190, 120], sekf:700, vw:11, vt:7, sekvt:450, lvp:54400, rabatt:20, skonto:2, prov:3,
  merke:'Gewinn in % immer bezogen auf die Selbstkosten.'}),
/* Wirtschaftsgymnasium (05.11.2026): eine Fertigungsstelle, Sondereinzelkosten ja, keine Vertreterprovision */
kalk({id:'KDW1', art:'diff', stufe:1, titel:'Differenzkalkulation · Gartenmöbel zum Marktpreis', firma:'Die Gartenmöbel Sommer GmbH', produkt:'eine Serie Gartenbänke',
  fm:8200, mgk:10, fl:3600, fgk:150, vw:10, vt:6, lvp:26000, rabatt:10, skonto:2,
  merke:'Selbstkosten vorwärts, Barverkaufspreis rückwärts vom Listenpreis – die Differenz ist der Gewinn.'}),
kalk({id:'KDW2', art:'diff', stufe:2, titel:'Differenzkalkulation · mit Sondereinzelkosten der Fertigung', firma:'Die Formenbau Engel GmbH', produkt:'eine Serie Kunststoffformen',
  fm:13400, mgk:12, fl:5200, fgk:140, sekf:900, vw:11, vt:7, lvp:46000, rabatt:15, skonto:3,
  merke:'Die SEKF erhöhen die Herstellkosten und damit auch die Verwaltungs- und Vertriebsgemeinkosten.'}),
kalk({id:'KDW3', art:'diff', stufe:3, titel:'Differenzkalkulation · reicht der Marktpreis?', firma:'Die Pressenbau Vogel AG', produkt:'eine hydraulische Presse',
  fm:19800, mgk:14, fl:7600, fgk:180, sekf:1100, vw:12, vt:8, sekvt:750, lvp:64000, rabatt:20, skonto:3,
  merke:'Liegt der Barverkaufspreis unter den Selbstkosten, entsteht ein Verlust; Gewinn in % immer auf die Selbstkosten.'}),
kalk({id:'KDW4', art:'diff', stufe:3, frei:true, ohneProv:true, titel:'Differenzkalkulation · Schema selbst aufstellen mit SEKVt', firma:'Die Fensterbau Keil GmbH', produkt:'eine Ladung Holzfenster',
  fm:9900, mgk:10, fl:4100, fgk:155, vw:11, vt:6, sekvt:350, lvp:33000, rabatt:15, skonto:2,
  merke:'Differenzkalkulation im eigenen Schema: oben vorwärts bis zu den Selbstkosten, unten rückwärts bis zum Barverkaufspreis.'}),
/* ---------- Modul 10 · Nachkalkulation ---------- */
{
  id:'NT1', modul:'K7', typ:'berechnung', stufe:0, titel:'Wozu die Nachkalkulation?',
  tags:['Nachkalkulation','Theorie'],
  text:'Ein Auftrag wurde mit Normalkosten kalkuliert und zum vereinbarten Preis ausgeliefert. Jetzt liegen die tatsächlichen Kosten vor.',
  frage:'Was ermittelt die Nachkalkulation?',
  optionen:[
    {text:'Den tatsächlich erzielten Gewinn des Auftrags – mit den Istkosten beim vereinbarten Preis.', richtig:true, weg:'Der Preis steht fest. Die Nachkalkulation stellt die tatsächlichen Kosten dagegen und zeigt, wie viel Gewinn wirklich übrig bleibt – und wo die Kalkulation daneben lag.'},
    {text:'Einen neuen Verkaufspreis für den Kunden.', fehler:'Der Preis ist vereinbart und wird nicht nachträglich geändert.'},
    {text:'Die Bestandsveränderungen der Periode.', fehler:'Bei einem einzelnen Auftrag gibt es keine Bestandsveränderungen – das ist Thema der Kostenträgerzeitrechnung.'},
    {text:'Nur die Abweichungen der Einzelkosten.', fehler:'Verglichen werden Einzel- und Gemeinkosten.'}
  ],
  hinweise:['Was steht nach der Auslieferung fest?', 'Der Preis.', 'Was ändert sich gegenüber der Vorkalkulation?'],
  merke:'Nachkalkulation: Istkosten beim vereinbarten Barverkaufspreis → tatsächlicher Gewinn. Grundlage für bessere Vorkalkulationen.'
},
{
  id:'NT2', modul:'K7', typ:'berechnung', stufe:0, titel:'Nachkalkulation oder Kostenträgerzeitrechnung?',
  tags:['Nachkalkulation','Theorie'],
  text:'Sowohl die Nachkalkulation als auch die Kostenträgerzeitrechnung vergleichen Normal- und Istkosten.',
  frage:'Worin unterscheidet sich die Nachkalkulation?',
  optionen:[
    {text:'Sie betrachtet einen einzelnen Auftrag: Auch die Einzelkosten können abweichen, Bestandsveränderungen gibt es nicht.', richtig:true, weg:'Die Kostenträgerzeitrechnung betrachtet eine Periode mit gleichen Einzelkosten und Bestandsveränderungen; die Nachkalkulation einen Auftrag (Kostenträgerstückrechnung) mit Ist-Einzelkosten.'},
    {text:'Sie rechnet ohne Gemeinkosten.', fehler:'Auch die Nachkalkulation verwendet Gemeinkostenzuschläge – die Ist-Sätze aus dem BAB.'},
    {text:'Sie vergleicht nur die Einzelkosten.', fehler:'Gemeinkosten weichen meist ebenfalls ab.'},
    {text:'Es gibt keinen Unterschied.', fehler:'Zeitraum gegen Auftrag – und damit auch eine andere Behandlung der Einzelkosten und Bestände.'}
  ],
  hinweise:['Periode oder Auftrag?', 'Bei einem Auftrag kann mehr oder weniger Material verbraucht werden.', 'Bestände gibt es nur in einer Periode.'],
  merke:'Kostenträgerzeitrechnung: Periode, gleiche Einzelkosten, Bestandsveränderungen. Nachkalkulation: Auftrag, Einzelkosten können abweichen, keine Bestände.'
},
nachkalk({id:'NK1', stufe:1, titel:'Nachkalkulation · Einzel- und Gemeinkosten weichen ab', firma:'Möbelwerk Kraus GmbH', auftrag:'einen Auftrag über Büroschränke',
  fm:[2700, 2835], fl:[2300, 2185], normal:{mgk:10, fgk:90, vw:19, vt:17}, ist:{mgk:11, fgk:96, vw:21, vt:18}, gewinn:25,
  merke:'Mehr Material, weniger Lohn, höhere Zuschläge: Der Gewinn sinkt von 25 % auf 20,83 % der Selbstkosten.'}),
nachkalk({id:'NK2', stufe:2, vorGegeben:true, titel:'Nachkalkulation · mit Sondereinzelkosten der Fertigung', firma:'Metallbau Vogt GmbH', auftrag:'den Bau einer Stahltreppe',
  fm:[8400, 8950], fl:[5200, 5650], sekf:[600, 720], normal:{mgk:12, fgk:110, vw:10, vt:6}, ist:{mgk:12, fgk:118, vw:11, vt:6}, gewinn:15,
  merke:'Auch Sondereinzelkosten können in der Nachkalkulation abweichen.'}),
nachkalk({id:'NK3', stufe:3, titel:'Nachkalkulation · aus dem Gewinn wird ein Verlust', firma:'Anlagenbau Hartmann AG', auftrag:'eine Sonder-Förderanlage',
  fm:[24500, 27100], fl:[11800, 13900], sekf:[1500, 1950], normal:{mgk:14, fgk:150, vw:12, vt:7}, ist:{mgk:15, fgk:162, vw:13, vt:8}, gewinn:8,
  merke:'Kostensteigerungen bei Einzel- und Gemeinkosten können den kalkulierten Gewinn vollständig aufzehren.'}),
/* ---------- Modul 11 · Maschinenstundensätze ---------- */
{
  id:'MT1', modul:'K8', typ:'berechnung', stufe:0, titel:'Warum ein Maschinenstundensatz?',
  tags:['Maschinenstundensatz','Theorie'],
  text:'Ein Betrieb hat stark automatisiert. In der Fertigung stehen hohen Maschinenkosten nur noch geringe Fertigungslöhne gegenüber; der Fertigungsgemeinkostenzuschlag liegt bei 640 %.',
  frage:'Warum rechnet der Betrieb die Maschinenkosten künftig über einen Maschinenstundensatz ab?',
  optionen:[
    {text:'Die Maschinenkosten hängen von der Maschinenlaufzeit ab, nicht von den Fertigungslöhnen – über den Stundensatz trägt jedes Erzeugnis die Maschinenkosten, die es verursacht.', richtig:true,
     weg:'Je mehr automatisiert wird, desto weniger passen Lohn und Maschinenkosten zusammen. Ein Erzeugnis mit wenig Lohn, aber langer Maschinenzeit würde über den FGK-Zuschlag viel zu billig kalkuliert.'},
    {text:'Weil ein Zuschlag über 100 % nicht erlaubt ist.', fehler:'Zuschläge über 100 % sind üblich – das Problem ist die falsche Bezugsgröße.'},
    {text:'Damit die Fertigungslöhne sinken.', fehler:'Die Art der Verrechnung ändert nichts an den Kosten, nur an ihrer Verteilung auf die Erzeugnisse.'},
    {text:'Weil Maschinenkosten Einzelkosten sind.', fehler:'Maschinenkosten bleiben Gemeinkosten – sie werden nur genauer, nämlich über die Laufzeit, zugerechnet.'}
  ],
  hinweise:['Wovon hängen die Kosten einer Maschine ab?', 'Bezugsgröße des FGK-Zuschlags sind die Fertigungslöhne.', 'Passen Lohn und Maschinenzeit bei allen Erzeugnissen zusammen?'],
  merke:'Maschinenstundensatz = maschinenabhängige Fertigungsgemeinkosten ÷ Maschinenlaufzeit. Die übrigen FGK (Rest-FGK) bleiben ein Zuschlag auf die Fertigungslöhne.'
},
{
  id:'MT2', modul:'K8', typ:'berechnung', stufe:0, titel:'Kalkulatorische Zinsen',
  tags:['Maschinenstundensatz','Theorie'],
  text:'Eine Maschine kostet 240.000,00 € (Anschaffungswert). Kalkuliert wird mit 8 % Zinsen.',
  frage:'Wie hoch sind die kalkulatorischen Zinsen pro Jahr?',
  optionen:[
    {wert:9600, richtig:true, weg:'Im Durchschnitt der Nutzungsdauer ist nur der halbe Anschaffungswert gebunden: 240.000,00 € ÷ 2 × 8 % = 9.600,00 €.'},
    {wert:19200, fehler:'8 % auf den vollen Anschaffungswert – durch die Abschreibung ist aber im Durchschnitt nur die Hälfte gebunden.'},
    {wert:4800, fehler:'Das wäre nur ein Viertel des Werts verzinst.'},
    {wert:30000, fehler:'Das ist die Abschreibung bei 8 Jahren Nutzungsdauer, nicht die Verzinsung.'}
  ],
  hinweise:['Wie viel Kapital ist im Durchschnitt in der Maschine gebunden?', 'Am Anfang der volle Wert, am Ende 0.', 'Anschaffungswert ÷ 2 × Zinssatz.'],
  merke:'Kalkulatorische Zinsen = Anschaffungswert ÷ 2 × Zinssatz; kalkulatorische Abschreibung = Wiederbeschaffungswert ÷ Nutzungsdauer.'
},
{
  id:'MT3', modul:'K8', typ:'berechnung', stufe:0, titel:'Maschinenkosten je Stück',
  tags:['Maschinenstundensatz','Theorie'],
  text:'Ein Werkstück läuft 36 Minuten auf einer Fräsmaschine. Der Maschinenstundensatz beträgt 85,00 €/h.',
  frage:'Wie hoch sind die Maschinenkosten für das Werkstück?',
  optionen:[
    {wert:51, richtig:true, weg:'36 min = 0,6 h; 0,6 h × 85,00 €/h = 51,00 €.'},
    {wert:30.6, fehler:'36 Minuten sind nicht 0,36 Stunden – eine Stunde hat 60 Minuten: 36 ÷ 60 = 0,6 h.'},
    {wert:3060, fehler:'Minuten × Stundensatz – die Minuten müssen erst in Stunden umgerechnet werden.'},
    {wert:85, fehler:'Das wäre eine volle Stunde Laufzeit.'}
  ],
  hinweise:['Der Satz gilt je Stunde.', 'Minuten in Stunden: ÷ 60.', '36 ÷ 60 × 85 = …'],
  merke:'Maschinenkosten je Stück = Maschinenlaufzeit in Minuten ÷ 60 × Maschinenstundensatz.'
},
/* Stufe 1 */
mss({id:'MS1', stufe:1, titel:'Maschinenstundensatz · Grundform', firma:'Rheinwerk Metallbau GmbH', maschine:'CNC-Fräsmaschine',
  aw:240000, nd:8, zins:8, lz:1800, qm:20, qmP:12, kW:25, kwh:0.25, inst:6000,
  merke:'Maschinenstundensatz = (AfA + Zinsen + Raum + Energie + Instandhaltung) ÷ Laufstunden.'}),
mssKalk({id:'MK1', stufe:1, ziel:'sk', titel:'Kalkulation mit Maschinenstundensatz · eine Fertigungsstelle', firma:'Domstadt Feinmechanik GmbH', produkt:'den Lagerbock LB-12',
  fm:86.40, mgk:12, stellen:[{name:'Fräserei', fl:42.50, rfgk:120, mMin:24, mss:78.50}], vw:10, vt:6,
  merke:'Fertigungskosten = Fertigungslöhne + Rest-FGK (Zuschlag auf die Löhne) + Maschinenkosten (Laufzeit × Stundensatz).'}),
/* Stufe 2 */
mss({id:'MS2', stufe:2, titel:'Maschinenstundensatz · Wiederbeschaffungswert und Grundgebühr', firma:'Kurpfalz Präzisionsteile KG', maschine:'Laserschneidanlage',
  aw:380000, wbw:420000, nd:10, zins:7, lz:2200, qm:35, qmP:11.5, kW:40, kwh:0.28, grund:900, instP:4,
  merke:'Abschreibung vom Wiederbeschaffungswert, Zinsen und Instandhaltung vom Anschaffungswert.'}),
mssKalk({id:'MK2', stufe:2, ziel:'lvp', titel:'Kalkulation mit Maschinenstundensätzen · zwei Fertigungsstellen', firma:'Hardt Antriebstechnik GmbH', produkt:'die Getriebewelle GW-40',
  fm:124.80, mgk:10, stellen:[{name:'Dreherei', fl:36.20, rfgk:90, mMin:18, mss:92.40}, {name:'Schleiferei', fl:22.80, rfgk:140, mMin:12, mss:65}], vw:12, vt:5, gewinn:10, skonto:2, rabatt:15,
  merke:'Jede Fertigungsstelle hat ihren eigenen Rest-FGK-Zuschlag und ihren eigenen Maschinenstundensatz.'}),
mssKalk({id:'MKF', stufe:2, ziel:'lvp', frei:true, titel:'Kalkulation mit Maschinenstundensatz · Schema selbst aufstellen', firma:'Kurpfalz Präzisionsteile KG', produkt:'den Hydraulikkolben HK-25',
  fm:64.80, mgk:15, stellen:[{name:'Dreherei', fl:28.60, rfgk:110, mMin:20, jk:142140, T:{tage:230, sch:2, still:10}}], vw:12, vt:6, gewinn:10, skonto:2, rabatt:15,
  merke:'Wie in der Prüfung: Laufzeit und Stundensatz als Nebenrechnung, dann das Schema mit Fertigungslöhnen, Rest-FGK und Maschinenkosten statt FGK-Zuschlag.'}),
/* Stufe 3 */
mss({id:'MS3', stufe:3, titel:'Maschinenstundensatz · Laufzeit und Werkzeugkosten', firma:'Neckar Systemtechnik AG', maschine:'5-Achs-Bearbeitungszentrum',
  aw:560000, wbw:600000, nd:10, zins:6, T:{tage:240, sch:2, still:10}, qm:45, qmP:13, kW:55, kwh:0.24, grund:1200, instP:3, wz:2.5,
  merke:'Erst die Laufzeit: Tage × Schichten × 8 h, davon den Stillstand abziehen. Energie und Werkzeug hängen von der Laufzeit ab.'}),
mssKalk({id:'MK4', stufe:3, ziel:'lvp', titel:'Kalkulation mit Maschinenstundensätzen · Löhne und Stundensatz selbst ermitteln', firma:'Vorderpfalz Blechverarbeitung OHG', produkt:'den Montagewinkel MW-5',
  fm:18.60, mgk:15, stellen:[{name:'Stanzerei', min:6, lohn:21, rfgk:150, mMin:4, jk:96000, jh:1600}, {name:'Lackiererei', min:4, lohn:19.5, rfgk:110, mMin:3, mss:42}], vw:11, vt:6, gewinn:12, skonto:3, rabatt:20,
  merke:'Fertigungslöhne = Minuten ÷ 60 × Stundenlohn; der Maschinenstundensatz der Stanzerei ist eine Nebenrechnung und gehört nicht in die Summe.'}),
mssKalk({id:'MK3', stufe:3, ziel:'lvp', titel:'Kalkulation mit Maschinenstundensätzen · mit Vertreterprovision', firma:'Rheinwerk Metallbau GmbH', produkt:'das Pumpengehäuse PG-3',
  fm:212.40, mgk:12, stellen:[{name:'Fräserei', min:45, lohn:24, rfgk:130, mMin:38, jk:118800, jh:1800}, {name:'Montage', min:30, lohn:22.8, rfgk:90, mMin:12, mss:55.50}], vw:10, vt:7, gewinn:15, skonto:2, prov:3, rabatt:10,
  merke:'Skonto und Provision werden gemeinsam „im Hundert“ gerechnet: Barverkaufspreis ÷ (100 − Skonto − Provision) × 100.'}),
/* ---------- Modul 12 · Maschinenstundensätze (extra): mit Restbuchwert ---------- */
{
  id:'MRT1', modul:'K8R', typ:'berechnung', stufe:0, titel:'Abschreibung mit Restbuchwert',
  tags:['Maschinenstundensatz','Restbuchwert','Theorie'],
  text:'Eine Maschine hat einen Wiederbeschaffungswert von 240.000,00 €. Nach 8 Jahren Nutzungsdauer wird ein Restbuchwert von 24.000,00 € erwartet.',
  frage:'Wie hoch ist die kalkulatorische Abschreibung pro Jahr?',
  optionen:[
    {text:'27.000,00 €', richtig:true, weg:'Abgeschrieben wird nur, was verbraucht wird: (240.000,00 € − 24.000,00 €) ÷ 8 = 27.000,00 €.'},
    {text:'30.000,00 €', fehler:'Das wäre die Abschreibung ohne Restbuchwert – der Restbuchwert wird aber nicht verbraucht.'},
    {text:'33.000,00 €', fehler:'Der Restbuchwert wird abgezogen, nicht hinzugerechnet.'},
    {text:'24.000,00 €', fehler:'Das ist der Restbuchwert selbst.'}
  ],
  hinweise:['Welcher Teil des Werts geht durch die Nutzung verloren?', 'Wiederbeschaffungswert − Restbuchwert.', '216.000 ÷ 8 = …'],
  merke:'Kalkulatorische Abschreibung = (Wiederbeschaffungswert − Restbuchwert) ÷ Nutzungsdauer.'
},
{
  id:'MRT2', modul:'K8R', typ:'berechnung', stufe:0, titel:'Zinsen mit Restbuchwert',
  tags:['Maschinenstundensatz','Restbuchwert','Theorie'],
  text:'Eine Maschine kostet 200.000,00 € (Anschaffungswert). Am Ende der Nutzungsdauer hat sie noch einen Restbuchwert von 20.000,00 €. Kalkuliert wird mit 8 % Zinsen.',
  frage:'Wie hoch sind die kalkulatorischen Zinsen pro Jahr?',
  optionen:[
    {text:'8.800,00 €', richtig:true, weg:'Gebunden ist im Durchschnitt (Anschaffungswert + Restbuchwert) ÷ 2 = 110.000,00 €, denn der Restbuchwert bleibt bis zum Schluss gebunden: 110.000,00 € × 8 % = 8.800,00 €.'},
    {text:'8.000,00 €', fehler:'Das wäre ohne Restbuchwert – der Restbuchwert ist aber bis zum Ende gebunden und muss verzinst werden.'},
    {text:'7.200,00 €', fehler:'Der Restbuchwert wird beim durchschnittlich gebundenen Kapital hinzugerechnet, nicht abgezogen.'},
    {text:'16.000,00 €', fehler:'Verzinst wird nicht der volle Anschaffungswert, sondern das durchschnittlich gebundene Kapital.'}
  ],
  hinweise:['Wie viel Kapital ist am Anfang und wie viel am Ende gebunden?', 'Anfang 200.000 €, Ende 20.000 €.', 'Durchschnitt × Zinssatz.'],
  merke:'Kalkulatorische Zinsen = (Anschaffungswert + Restbuchwert) ÷ 2 × Zinssatz.'
},
mss({id:'MR1', modul:'K8R', stufe:1, titel:'Maschinenstundensatz mit Restbuchwert', firma:'Kurpfalz Präzisionsteile KG', maschine:'CNC-Drehmaschine',
  aw:180000, rw:20000, nd:8, zins:6, lz:1600, qm:18, qmP:12, kW:22, kwh:0.25, inst:4800,
  merke:'Mit Restbuchwert: Abschreibung (Wert − Restbuchwert) ÷ Nutzungsdauer, Zinsen (Anschaffungswert + Restbuchwert) ÷ 2 × Zinssatz.'}),
mss({id:'MR2', modul:'K8R', stufe:2, titel:'Restbuchwert, Wiederbeschaffungswert und Grundgebühr', firma:'Domstadt Feinmechanik GmbH', maschine:'Laserschneidanlage',
  aw:320000, wbw:350000, rw:30000, nd:10, zins:7, lz:2500, qm:30, qmP:12.5, kW:35, kwh:0.28, grund:700, instP:4,
  merke:'Abschreibung vom Wiederbeschaffungswert minus Restbuchwert; Zinsen und Instandhaltung vom Anschaffungswert.'}),
mss({id:'MR3', modul:'K8R', stufe:3, titel:'Restbuchwert, Laufzeit und Werkzeugkosten', firma:'Hardt Antriebstechnik GmbH', maschine:'5-Achs-Bearbeitungszentrum',
  aw:480000, wbw:520000, rw:40000, nd:8, zins:6, T:{tage:230, sch:2, still:15}, qm:40, qmP:13.5, kW:50, kwh:0.26, grund:1000, instP:3, wz:1.8,
  merke:'Erst die Laufzeit, dann alle laufzeitabhängigen Kosten; der Restbuchwert wirkt auf Abschreibung und Zinsen.'}),
/* ---------- Theorie Kostenträgerrechnung (extra) · Modul-ID K8RT ----------
   Kostenträgerzeitrechnung, Kalkulation, Nachkalkulation und Maschinenstundensatz deuten – Fahrzeugbau Neumann KG. */
{
  id:'TC1', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Istgewinn unter dem Normalgewinn',
  tags:['Kostenträgerrechnung','Theorie','Kostenträgerzeitrechnung'],
  text:'In der Kostenträgerzeitrechnung der Fahrzeugbau Neumann KG für den Mai beträgt der Normalgewinn 48.000 €, der Istgewinn nur 39.500 €.',
  frage:'Welche Erklärungen kommen in Frage?',
  optionen:[
    {text:'Insgesamt sind 8.500 € mehr Gemeinkosten angefallen als mit den Normalzuschlägen verrechnet (Unterdeckung).', richtig:true,
     weg:'Istgewinn − Normalgewinn = Summe der Über- und Unterdeckungen: 39.500 € − 48.000 € = −8.500 €.'},
    {text:'In der Fertigung waren mehr Reparaturen nötig als geplant.', richtig:true,
     weg:'Reparaturen sind Fertigungsgemeinkosten – mehr als geplant führt zur Unterdeckung.'},
    {text:'Die Energiekosten sind stärker gestiegen, als in den Normalzuschlägen berücksichtigt.', richtig:true,
     weg:'Auch Energie ist ein Gemeinkostenposten, der vom Plan abweichen kann.'},
    {text:'Das Fertigungsmaterial ist teurer geworden.',
     fehler:'Fertigungsmaterial ist Einzelkosten. Teureres Material erhöht die Zuschlagsgrundlage und damit die verrechneten Normal-MGK – das spräche eher für eine Überdeckung, nicht für eine Unterdeckung.'},
    {text:'Ein Kunde hat wegen eines Mangels einen Preisnachlass erhalten, die Umsatzerlöse sind dadurch gesunken.',
     fehler:'Erlösminderungen stehen in Normal- und Istrechnung gleich hoch – sie verändern den Unterschied zwischen Ist- und Normalgewinn nicht.'}
  ],
  hinweise:['Istgewinn − Normalgewinn = Summe der Über- und Unterdeckungen.', 'Was ist in der Normal- und in der Istrechnung verschieden – und was gleich?', 'Begründet wird über Gemeinkosten, die vom Plan abweichen – nicht über Einzelkosten oder Umsätze.'],
  merke:'Ist- und Normalgewinn unterscheiden sich nur durch die Gemeinkosten. Istgewinn < Normalgewinn heißt: insgesamt Unterdeckung – mehr Gemeinkosten angefallen als verrechnet.'
},
{
  id:'TC2', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Überdeckung hier, Unterdeckung dort',
  tags:['Kostenträgerrechnung','Theorie','Kostenträgerzeitrechnung'],
  text:'Die Kostenträgerzeitrechnung der Fahrzeugbau Neumann KG zeigt: Material +1.800 € Überdeckung, Fertigung −6.300 € Unterdeckung, Verwaltung +400 € Überdeckung, Vertrieb −200 € Unterdeckung.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Insgesamt liegt eine Unterdeckung von 4.300 € vor – der Istgewinn ist um 4.300 € niedriger als der Normalgewinn.', richtig:true,
     weg:'1.800 € − 6.300 € + 400 € − 200 € = −4.300 €.'},
    {text:'Die Fertigung ist die Hauptursache – dort sollte man nach den Gründen suchen.', richtig:true,
     weg:'Die Unterdeckung der Fertigung ist größer als alle Überdeckungen zusammen.'},
    {text:'Die Überdeckung im Material zeigt, dass dort mit zu hohen Normalzuschlägen kalkuliert wurde.', richtig:true,
     weg:'Es wurden mehr Materialgemeinkosten verrechnet als angefallen – der Normalzuschlag war für diesen Monat zu hoch.'},
    {text:'Über- und Unterdeckungen gleichen sich immer aus.',
     fehler:'Sie werden zwar verrechnet, gleichen sich aber nur zufällig aus – hier bleibt ein Saldo von −4.300 €.'},
    {text:'Die Unterdeckung in der Fertigung zeigt, dass die Fertigungslöhne gestiegen sind.',
     fehler:'Steigende Fertigungslöhne erhöhen die verrechneten Normal-FGK – sie würden eher eine Überdeckung bewirken. Die Unterdeckung zeigt, dass die Ist-FGK höher waren als verrechnet.'}
  ],
  hinweise:['Addiere die Über- und Unterdeckungen mit Vorzeichen.', 'Welche Stelle wiegt am schwersten?', 'Überdeckung heißt: mehr verrechnet als angefallen.'],
  merke:'Über- und Unterdeckungen werden je Kostenstelle ermittelt und ergeben zusammen den Unterschied zwischen Ist- und Normalgewinn. Die Stelle mit der größten Abweichung zeigt, wo man ansetzen muss.'
},
{
  id:'TC3', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Kunde verlangt mehr Rabatt',
  tags:['Kostenträgerrechnung','Theorie','Kalkulation'],
  text:'Die Fahrzeugbau Neumann KG bietet einen Anhänger zum Listenverkaufspreis von 27.400 € an, kalkuliert mit 10 % Kundenrabatt, 2 % Skonto und 8 % Gewinn. Ein Großkunde verlangt 15 % Rabatt; der Listenpreis soll gleich bleiben.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der Zielverkaufspreis sinkt, weil vom gleichen Listenpreis mehr Rabatt abgeht.', richtig:true,
     weg:'Zielverkaufspreis = Listenverkaufspreis − Rabatt.'},
    {text:'Der Skontobetrag wird kleiner, weil er vom niedrigeren Zielverkaufspreis berechnet wird.', richtig:true,
     weg:'Skonto bezieht sich auf den Zielverkaufspreis – sinkt er, sinkt auch der Skontobetrag.'},
    {text:'Bei gleichen Selbstkosten sinkt der Gewinn – um ihn zu halten, müssten die Kosten sinken.', richtig:true,
     weg:'Der Barverkaufspreis sinkt, die Selbstkosten bleiben – die Differenz (Gewinn) wird kleiner.'},
    {text:'Der Gewinn sinkt genau um 5 % des Listenpreises.',
     fehler:'Nicht ganz: Weil auch der Skonto vom kleineren Zielverkaufspreis berechnet wird, sinkt der Gewinn etwas weniger als um 5 % des Listenpreises.'},
    {text:'Die Selbstkosten steigen durch den höheren Rabatt.',
     fehler:'Rabatt ist ein Preisnachlass, keine Kosten der Herstellung – die Selbstkosten bleiben gleich.'}
  ],
  hinweise:['Gehe das Schema von unten nach oben durch: Listenpreis → Rabatt → Zielverkaufspreis → Skonto → Barverkaufspreis.', 'Wovon wird der Skonto berechnet?', 'Was passiert mit dem Gewinn, wenn der Barverkaufspreis sinkt und die Selbstkosten gleich bleiben?'],
  merke:'Mehr Rabatt bei gleichem Listenpreis: Zielverkaufspreis und Barverkaufspreis sinken, der Gewinn schrumpft. Halten lässt er sich nur über niedrigere Kosten.'
},
{
  id:'TC4', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Im Hundert und auf Hundert',
  tags:['Kostenträgerrechnung','Theorie','Kalkulation'],
  text:'In der Vorwärtskalkulation der Fahrzeugbau Neumann KG wird der Gewinn vom Hundert berechnet, Skonto, Provision und Rabatt dagegen im Hundert.',
  frage:'Welche Begründungen sind richtig?',
  optionen:[
    {text:'Der Gewinn bezieht sich auf die Selbstkosten – sie sind der Grundwert (100 %).', richtig:true,
     weg:'8 % Gewinn heißt: 8 % der Selbstkosten kommen obendrauf.'},
    {text:'Skonto und Provision beziehen sich auf den Zielverkaufspreis (Rechnungsbetrag), von dem der Kunde den Nachlass abzieht – er ist 100 %, der Barverkaufspreis also weniger als 100 %.', richtig:true,
     weg:'Der Kunde zieht 2 % vom Rechnungsbetrag ab. Von unten gerechnet ist der Barverkaufspreis 98 % – also ÷ 98 × 100.'},
    {text:'Der Rabatt bezieht sich auf den Listenverkaufspreis – er ist 100 %, der Zielverkaufspreis z. B. nur 90 %.', richtig:true,
     weg:'Rabatt wird vom Listenpreis gewährt. In der Vorwärtskalkulation kennt man aber erst den Zielverkaufspreis – deshalb ÷ (100 − Rabatt) × 100.'},
    {text:'Weil es so einfacher zu rechnen ist.',
     fehler:'Es geht nicht um Bequemlichkeit, sondern darum, worauf sich der Prozentsatz bezieht – sonst stimmt der Preis nicht.'},
    {text:'Weil Skonto und Rabatt freiwillig gewährt werden.',
     fehler:'Freiwillig oder nicht – entscheidend ist, von welchem Betrag der Kunde den Nachlass abzieht.'}
  ],
  hinweise:['Frag bei jedem Prozentsatz: Von welchem Betrag wird er berechnet?', 'Den Skonto zieht der Kunde vom Rechnungsbetrag ab – ist das der höhere oder der niedrigere Betrag im Schema?', 'Der höhere Betrag ist 100 % → im Hundert.'],
  merke:'Vom Hundert: Zuschläge und Gewinn (der untere Betrag ist 100 %). Im Hundert: Skonto, Provision, Rabatt (der obere Betrag, den der Kunde sieht, ist 100 %).'
},
{
  id:'TC5', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Zulässige Materialkosten zu niedrig',
  tags:['Kostenträgerrechnung','Theorie','Kalkulation'],
  text:'Für einen Anhänger lässt der Markt nur einen Listenverkaufspreis von 42.000 € zu. Die Rückwärtskalkulation der Fahrzeugbau Neumann KG ergibt zulässige Materialkosten von 11.000 € – bisher betragen die Materialkosten 14.000 €.',
  frage:'Welche Maßnahmen sind sinnvoll?',
  optionen:[
    {text:'Im Einkauf günstigere Lieferanten suchen oder Mengenrabatte aushandeln.', richtig:true,
     weg:'Niedrigere Einstandspreise senken das Fertigungsmaterial und damit auch die Materialgemeinkosten.'},
    {text:'Den Materialverbrauch senken, z. B. durch weniger Verschnitt oder eine andere Konstruktion.', richtig:true,
     weg:'Weniger Material je Anhänger senkt die Materialkosten direkt.'},
    {text:'Prüfen, ob der Gewinnzuschlag für diesen Auftrag gesenkt werden kann.', richtig:true,
     weg:'Ein geringerer Gewinnanspruch erhöht die zulässigen Kosten in der Rückwärtskalkulation.'},
    {text:'Den Listenverkaufspreis erhöhen.',
     fehler:'Genau das lässt der Markt nicht zu – deshalb wird ja rückwärts gerechnet.'},
    {text:'Die Materialgemeinkosten in der Kalkulation weglassen.',
     fehler:'Die Gemeinkosten fallen trotzdem an. Weglassen auf dem Papier senkt keine Kosten, sondern führt zu Verlust.'}
  ],
  hinweise:['Der Preis ist fest – was bleibt beeinflussbar?', 'Welche Größen stecken zwischen Listenpreis und Materialkosten?', 'Kosten verschwinden nicht, wenn man sie nicht einrechnet.'],
  merke:'Rückwärtskalkulation: Der Marktpreis ist vorgegeben. Liegen die eigenen Kosten über den zulässigen, muss man Kosten senken oder auf Gewinn verzichten – nicht den Preis erhöhen.'
},
{
  id:'TC6', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Differenzkalkulation ergibt Verlust',
  tags:['Kostenträgerrechnung','Theorie','Kalkulation'],
  text:'Ein Kunde bietet der Fahrzeugbau Neumann KG für einen Sonderanhänger einen festen Preis. Die Differenzkalkulation ergibt einen „Gewinn“ von −1.200 €.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Zum angebotenen Preis werden die Selbstkosten nicht gedeckt – es entsteht ein Verlust von 1.200 €.', richtig:true,
     weg:'Barverkaufspreis − Selbstkosten = −1.200 €.'},
    {text:'Man kann versuchen, die Kosten zu senken oder mit dem Kunden über Rabatt und Skonto zu verhandeln.', richtig:true,
     weg:'Weniger Nachlass erhöht den Barverkaufspreis, niedrigere Kosten senken die Selbstkosten.'},
    {text:'Bei freier Kapazität kann der Auftrag trotzdem sinnvoll sein, wenn der Barverkaufspreis (Erlös nach Rabatt und Skonto) über den variablen Kosten liegt.', richtig:true,
     weg:'Das zeigt die Teilkostenrechnung: Ein positiver Deckungsbeitrag hilft, die ohnehin anfallenden Fixkosten zu decken.'},
    {text:'Der Auftrag muss in jedem Fall abgelehnt werden.',
     fehler:'Nicht zwingend – bei freier Kapazität kann ein positiver Deckungsbeitrag das Ergebnis trotzdem verbessern.'},
    {text:'Der Verlust wird einfach auf den Listenpreis aufgeschlagen.',
     fehler:'Der Preis ist bei der Differenzkalkulation vorgegeben – das ist ja gerade der Ausgangspunkt.'}
  ],
  hinweise:['Was bedeutet ein negativer Gewinn in der Differenzkalkulation?', 'Welche Größen kann man noch beeinflussen?', 'Denk an die Teilkostenrechnung: Welche Kosten entstehen durch den Auftrag zusätzlich?'],
  merke:'Differenzkalkulation: Preis und Kosten sind gegeben, der Gewinn ist der Rest. Ist er negativ, deckt der Preis die Selbstkosten nicht – ob der Auftrag trotzdem lohnt, zeigt der Deckungsbeitrag.'
},
{
  id:'TC7', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Preise erhöhen oder Kosten senken?',
  tags:['Kostenträgerrechnung','Theorie','Kalkulation'],
  text:'Die Stahlpreise sind um 15 % gestiegen. Die Konkurrenz der Fahrzeugbau Neumann KG hält ihre Anhängerpreise trotzdem stabil.',
  frage:'Welche Reaktionen sind sinnvoll?',
  optionen:[
    {text:'Kosten senken: Einkauf neu verhandeln, Materialverbrauch senken, Gemeinkosten prüfen.', richtig:true,
     weg:'Wenn der Preis nicht steigen kann, bleibt nur die Kostenseite.'},
    {text:'Den Gewinnzuschlag vorübergehend senken, um wettbewerbsfähig zu bleiben.', richtig:true,
     weg:'Kurzfristig kann man auf einen Teil des Gewinns verzichten, statt Kunden zu verlieren.'},
    {text:'Mit den Stahllieferanten Rahmenverträge mit festen Preisen vereinbaren, um weitere Preissprünge abzufedern.', richtig:true,
     weg:'Feste Einkaufspreise machen die Materialkosten planbar.'},
    {text:'Den Listenpreis um 15 % erhöhen.',
     fehler:'Die Konkurrenz bleibt bei ihren Preisen – die Kunden würden abwandern. Außerdem steigen nicht die gesamten Selbstkosten um 15 %, sondern nur der Materialanteil.'},
    {text:'Die Gemeinkostenzuschläge senken, damit der Preis gleich bleibt.',
     fehler:'Zuschlagssätze ergeben sich aus den tatsächlichen Gemeinkosten. Sie auf dem Papier zu senken, senkt keine Kosten.'}
  ],
  hinweise:['Kann die Neumann KG ihren Preis frei festlegen?', 'Welche Teile des Kalkulationsschemas kann sie beeinflussen?', 'Steigen durch die Stahlpreise alle Kosten um 15 %?'],
  merke:'Ist der Marktpreis vorgegeben, bleiben Kostensenkung und Verzicht auf Gewinn. Zuschläge „schönrechnen“ senkt keine Kosten.'
},
{
  id:'TC8', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Nachkalkulation über der Vorkalkulation',
  tags:['Kostenträgerrechnung','Theorie','Nachkalkulation'],
  text:'Die Nachkalkulation eines Kundenauftrags der Fahrzeugbau Neumann KG ergibt Selbstkosten, die 2.400 € über der Vorkalkulation liegen.',
  frage:'Welche Gründe kommen in Frage?',
  optionen:[
    {text:'Die Fertigung hat mehr Stunden gebraucht als geplant.', richtig:true,
     weg:'Mehr Stunden → höhere Fertigungslöhne und damit auch höhere Fertigungsgemeinkosten.'},
    {text:'Das Material war teurer oder es wurde mehr verbraucht als geplant.', richtig:true,
     weg:'In der Nachkalkulation stehen die tatsächlichen Einzelkosten des Auftrags.'},
    {text:'Die Ist-Zuschlagssätze lagen über den Normalzuschlägen der Vorkalkulation.', richtig:true,
     weg:'Die Nachkalkulation rechnet mit Ist-Zuschlägen – sind sie höher, steigen die Gemeinkosten des Auftrags.'},
    {text:'Der Kunde hat die Rechnung später bezahlt als vereinbart.',
     fehler:'Der Zahlungszeitpunkt ändert die Selbstkosten des Auftrags nicht.'},
    {text:'Der Kunde hat Skonto abgezogen.',
     fehler:'Skonto ist ein Preisnachlass und gehört nicht zu den Selbstkosten – außerdem war er schon in der Vorkalkulation eingerechnet.'}
  ],
  hinweise:['Welche Werte ändern sich von der Vor- zur Nachkalkulation?', 'Einzelkosten und Zuschlagssätze können abweichen.', 'Zahlungen haben mit den Selbstkosten nichts zu tun.'],
  merke:'Nachkalkulation: tatsächliche Einzelkosten und Ist-Zuschläge des Auftrags. Abweichungen entstehen bei Material, Stunden und Gemeinkostenzuschlägen.'
},
{
  id:'TC9', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Was folgt aus der Nachkalkulation?',
  tags:['Kostenträgerrechnung','Theorie','Nachkalkulation'],
  text:'Die Nachkalkulation zeigt: Der Auftrag hat 2.400 € mehr gekostet als kalkuliert – vor allem, weil die Montage 30 Stunden länger gedauert hat.',
  frage:'Welche Schlussfolgerungen sind sinnvoll?',
  optionen:[
    {text:'Die Kalkulationsgrundlagen (Fertigungszeiten, Normalzuschläge, Materialpreise) für ähnliche Aufträge überprüfen und gegebenenfalls anpassen.', richtig:true,
     weg:'Die nächste Vorkalkulation soll realistischer werden.'},
    {text:'Herausfinden, warum die Montage länger gedauert hat, und die Schwachstelle beheben.', richtig:true,
     weg:'Die Nachkalkulation ist auch ein Kontrollinstrument für die Wirtschaftlichkeit.'},
    {text:'Bei ähnlichen Aufträgen einen höheren Preis verlangen oder die Kosten senken.', richtig:true,
     weg:'Sonst wiederholt sich die Gewinneinbuße beim nächsten Auftrag.'},
    {text:'Dem Kunden den Mehrbetrag nachträglich in Rechnung stellen.',
     fehler:'Der Preis war vereinbart – Kostenüberschreitungen gehen zulasten des Unternehmens.'},
    {text:'Nichts – die Nachkalkulation dient nur der Dokumentation.',
     fehler:'Gerade die Folgerungen für künftige Angebote machen die Nachkalkulation wertvoll.'}
  ],
  hinweise:['Wozu macht man eine Nachkalkulation überhaupt?', 'Was soll beim nächsten Angebot besser laufen?', 'Kann man einen vereinbarten Preis nachträglich ändern?'],
  merke:'Die Nachkalkulation kontrolliert die Vorkalkulation: Abweichungen aufklären, Kalkulationsgrundlagen anpassen, künftige Preise oder Kosten korrigieren.'
},
{
  id:'TC10', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Weniger Laufstunden – höherer Stundensatz',
  tags:['Kostenträgerrechnung','Theorie','Maschinenstundensatz'],
  text:'Eine Laserschneidanlage der Fahrzeugbau Neumann KG verursacht 96.000 € fixe Maschinenkosten im Jahr (Abschreibung, Zinsen, Raum, Instandhaltung) und 6 € Energiekosten je Laufstunde. Wegen Auftragsmangel sinkt die Laufzeit von 1.600 auf 1.200 Stunden.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der Maschinenstundensatz steigt von 66 € auf 86 €, weil die fixen Kosten auf weniger Stunden verteilt werden.', richtig:true,
     weg:'96.000 € ÷ 1.600 h + 6 € = 66 €/h; 96.000 € ÷ 1.200 h + 6 € = 86 €/h.'},
    {text:'Die Fertigungskosten je Stück steigen für alle Teile, die auf der Anlage bearbeitet werden.', richtig:true,
     weg:'Jede Minute Laserzeit wird teurer verrechnet.'},
    {text:'Die Preise lassen sich deshalb nicht einfach anheben – höhere Preise würden die Auftragslage weiter verschlechtern.', richtig:true,
     weg:'Der Markt bezahlt nicht die eigene schlechte Auslastung. Besser: Auslastung verbessern oder Kosten senken.'},
    {text:'Der Stundensatz sinkt, weil weniger Energie verbraucht wird.',
     fehler:'Die Energiekosten je Stunde bleiben gleich (6 €). Was sich ändert, sind die fixen Kosten je Stunde.'},
    {text:'Der Stundensatz bleibt gleich, weil es dieselbe Maschine ist.',
     fehler:'Der Stundensatz hängt von der Laufzeit ab – fixe Kosten ÷ weniger Stunden ergibt mehr je Stunde.'}
  ],
  hinweise:['Maschinenstundensatz = maschinenabhängige Kosten pro Jahr ÷ Laufstunden.', 'Welche Kosten bleiben gleich, wenn die Maschine weniger läuft?', 'Lässt sich eine schlechte Auslastung über den Preis weitergeben?'],
  merke:'Sinkt die Laufzeit, steigt der Maschinenstundensatz: Die fixen Maschinenkosten verteilen sich auf weniger Stunden. Höhere Stückkosten lassen sich am Markt aber meist nicht einfach weitergeben.'
},
{
  id:'TC11', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Kalkulatorische Zinsen mit Restbuchwert',
  tags:['Kostenträgerrechnung','Theorie','Maschinenstundensatz','Restbuchwert'],
  text:'Eine Schweißanlage der Fahrzeugbau Neumann KG hat 240.000 € gekostet (Anschaffungswert), der Wiederbeschaffungswert beträgt 270.000 €. Nach der Nutzungsdauer von 8 Jahren bleibt ein Restbuchwert von 30.000 €. Kalkulatorischer Zinssatz: 8 %.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Ohne Restbuchwert ist im Durchschnitt die Hälfte des Anschaffungswerts gebunden – die Zinsen betragen 240.000 € ÷ 2 × 8 % = 9.600 €.', richtig:true,
     weg:'Das Kapital nimmt über die Nutzungsdauer von 240.000 € auf 0 € ab – durchschnittlich ist die Hälfte gebunden.'},
    {text:'Mit Restbuchwert bleibt dieser bis zum Schluss gebunden – die Zinsen betragen (240.000 € + 30.000 €) ÷ 2 × 8 % = 10.800 €.', richtig:true,
     weg:'Das Kapital sinkt nur bis auf 30.000 € – das durchschnittlich gebundene Kapital ist höher.'},
    {text:'Die kalkulatorische Abschreibung wird durch den Restbuchwert kleiner: (270.000 € − 30.000 €) ÷ 8 = 30.000 € statt 33.750 €.', richtig:true,
     weg:'Der Restbuchwert wird nicht verbraucht – abgeschrieben wird nur der Teil darüber.'},
    {text:'Die kalkulatorischen Zinsen werden vom halben Wiederbeschaffungswert berechnet.',
     fehler:'Gebunden ist das tatsächlich eingesetzte Kapital, also der Anschaffungswert. Der Wiederbeschaffungswert ist die Grundlage der Abschreibung.'},
    {text:'Durch den Restbuchwert sinken die kalkulatorischen Zinsen.',
     fehler:'Umgekehrt: Es bleibt mehr Kapital gebunden – die Zinsen steigen.'}
  ],
  hinweise:['Wie viel Kapital ist am Anfang, wie viel am Ende der Nutzungsdauer gebunden?', 'Zinsen: Anschaffungswert, Abschreibung: Wiederbeschaffungswert.', 'Der Restbuchwert wird nicht verbraucht, bleibt aber gebunden.'],
  merke:'Mit Restbuchwert: Abschreibung = (Wiederbeschaffungswert − Restbuchwert) ÷ Nutzungsdauer (kleiner), Zinsen = (Anschaffungswert + Restbuchwert) ÷ 2 × Zinssatz (größer).'
},
{
  id:'TC12', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Teure und günstige Maschinenstunden',
  tags:['Kostenträgerrechnung','Theorie','Maschinenstundensatz'],
  text:'In der Fertigung der Fahrzeugbau Neumann KG stehen eine konventionelle Fräsmaschine (Maschinenstundensatz 85 €) und ein CNC-Bearbeitungszentrum (140 €). Bisher wurden die Fertigungsgemeinkosten mit einem einheitlichen Zuschlag auf die Fertigungslöhne verrechnet.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Ein einheitlicher Zuschlag behandelt teure und günstige Maschinenzeit gleich – Aufträge auf dem CNC-Zentrum werden tendenziell zu billig, Aufträge auf der Fräsmaschine zu teuer kalkuliert.', richtig:true,
     weg:'Der Zuschlag richtet sich nach den Löhnen, nicht danach, welche Maschine wie lange belegt wird.'},
    {text:'Mit Maschinenstundensätzen trägt jeder Auftrag die Kosten der Maschine, die er tatsächlich belegt.', richtig:true,
     weg:'Maschinenkosten = Belegungszeit × Stundensatz der jeweiligen Maschine.'},
    {text:'Ein einfacher Auftrag, den beide Maschinen in etwa gleicher Zeit schaffen, gehört auf die konventionelle Fräsmaschine.', richtig:true,
     weg:'Bei gleicher Bearbeitungszeit kostet die Stunde dort 55 € weniger.'},
    {text:'Das CNC-Zentrum ist unwirtschaftlich und sollte verkauft werden.',
     fehler:'Ein hoher Stundensatz heißt nur: Die Stunde ist teuer. Für anspruchsvolle Teile kann sie trotzdem die beste Wahl sein.'},
    {text:'Im Maschinenstundensatz sind auch die Fertigungslöhne enthalten.',
     fehler:'Fertigungslöhne und Rest-Fertigungsgemeinkosten werden getrennt verrechnet – der Stundensatz enthält nur die maschinenabhängigen Kosten.'}
  ],
  hinweise:['Wonach richtet sich ein Zuschlag auf die Löhne – und wonach die Maschinenkosten?', 'Was kostet eine Stunde auf jeder Maschine?', 'Was steckt im Maschinenstundensatz, was nicht?'],
  merke:'Maschinenstundensätze verteilen die maschinenabhängigen Gemeinkosten nach der tatsächlichen Belegungszeit – genauer als ein einheitlicher Zuschlag auf die Löhne. Löhne und Rest-FGK kommen getrennt dazu.'
},
{
  id:'TC13', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Tariflohn steigt, Konkurrenz zieht mit',
  tags:['Kostenträgerrechnung','Theorie','Kalkulation'],
  text:'Nach dem neuen Tarifabschluss steigen die Fertigungslöhne der Fahrzeugbau Neumann KG um 6 %. Die Wettbewerber sind vom gleichen Tarifvertrag betroffen und haben bereits Preiserhöhungen angekündigt; die Nachfrage nach Anhängern ist stabil.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Eine Preiserhöhung ist durchsetzbar, weil der Markt mitzieht.', richtig:true,
     weg:'Wenn alle Anbieter teurer werden, wandern die Kunden nicht zur Konkurrenz ab.'},
    {text:'Die Selbstkosten steigen um mehr als nur die Lohnerhöhung, weil die Fertigungsgemeinkosten als Zuschlag auf die Fertigungslöhne verrechnet werden.', richtig:true,
     weg:'Höhere Fertigungslöhne = höhere Zuschlagsgrundlage → auch die verrechneten FGK und alles, was darauf aufbaut (VwGK, VtGK, Gewinn), steigen.'},
    {text:'Die Preiserhöhung sollte begründet und den Kunden rechtzeitig angekündigt werden.', richtig:true,
     weg:'Eine nachvollziehbare, frühzeitige Ankündigung erhält das Vertrauen der Stammkunden.'},
    {text:'Die Selbstkosten steigen um 6 %.',
     fehler:'Um 6 % steigen nur die Fertigungslöhne. Material und Materialgemeinkosten bleiben gleich – die Selbstkosten steigen deshalb um deutlich weniger als 6 %.'},
    {text:'Man sollte den FGK-Zuschlag senken, damit die Selbstkosten gleich bleiben.',
     fehler:'Der Zuschlagssatz ergibt sich aus den tatsächlichen Gemeinkosten. Ihn auf dem Papier zu senken, senkt keine Kosten.'}
  ],
  hinweise:['Was machen die Wettbewerber – und was heißt das für die Kunden?', 'Welche Zeilen im Kalkulationsschema bauen auf den Fertigungslöhnen auf?', 'Welcher Anteil der Selbstkosten sind Fertigungslöhne?'],
  merke:'Steigen die Kosten bei allen Anbietern, lässt sich der Preis eher erhöhen. Lohnsteigerungen wirken über den FGK-Zuschlag verstärkt, betreffen aber nur einen Teil der Selbstkosten.'
},
{
  id:'TC14', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Der Großkunde gibt den Preis vor',
  tags:['Kostenträgerrechnung','Theorie','Kalkulation'],
  text:'Ein Großkunde zahlt für einen Kastenanhänger höchstens einen Barverkaufspreis von 1.650 €. Bei 10 % Gewinnzuschlag ergibt die Rückwärtskalkulation zulässige Selbstkosten von 1.500 €. Die Neumann KG hat tatsächliche Selbstkosten von 1.620 €.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Es fehlen 120 € je Stück – sie müssen durch Kostensenkung oder Verzicht auf Gewinn aufgefangen werden.', richtig:true,
     weg:'1.620 € − 1.500 € = 120 €. Der Preis ist fest, also bleiben nur die Kosten und der Gewinn.'},
    {text:'Ohne Kostensenkung bleiben nur noch 30 € Gewinn je Stück.', richtig:true,
     weg:'1.650 € − 1.620 € = 30 € (rund 1,85 % der Selbstkosten statt 10 %).'},
    {text:'Sinnvoll ist auch eine Kombination: etwas Kostensenkung und etwas weniger Gewinn.', richtig:true,
     weg:'Die Lücke muss nicht von einer Seite allein geschlossen werden.'},
    {text:'Die Neumann KG erhöht den Preis auf den kalkulierten Wert von 1.782 €.',
     fehler:'1.620 € + 10 % wären zwar 1.782 €, aber der Kunde zahlt höchstens 1.650 € – der Preis ist vorgegeben.'},
    {text:'Mehr Kundenrabatt anbieten, um den Auftrag sicher zu bekommen.',
     fehler:'Mehr Rabatt senkt den Erlös weiter – die Lücke würde größer, nicht kleiner.'}
  ],
  hinweise:['Welche Kalkulation passt, wenn der Preis vorgegeben ist?', 'Vergleiche zulässige und tatsächliche Selbstkosten.', 'Wie viel Gewinn bleibt, wenn sich an den Kosten nichts ändert?'],
  merke:'Gibt der Markt den Preis vor, zeigt die Rückwärtskalkulation die zulässigen Kosten. Die Lücke zu den tatsächlichen Kosten wird durch Kostensenkung, weniger Gewinn oder beides geschlossen.'
},
{
  id:'TC15', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Preis erhöhen und Kosten senken',
  tags:['Kostenträgerrechnung','Theorie','Kalkulation'],
  text:'Rohstoffe und Energie sind teurer geworden: Die Selbstkosten eines Anhängers steigen von 1.000 € auf 1.070 €. Bisher lag der Barverkaufspreis bei 1.100 € (10 % Gewinn). Die Konkurrenz erhöht ihre Preise nur um 3 %; die Neumann KG zieht mit.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Mit der Preiserhöhung um 3 % allein bleiben nur 63 € Gewinn statt 100 €.', richtig:true,
     weg:'1.100 € · 1,03 = 1.133 €; 1.133 € − 1.070 € = 63 €.'},
    {text:'Um weiterhin 100 € Gewinn je Stück zu erzielen, müssen die Selbstkosten zusätzlich um 37 € sinken.', richtig:true,
     weg:'1.133 € − 100 € = 1.033 € zulässige Selbstkosten; 1.070 € − 1.033 € = 37 €.'},
    {text:'Weder die Preiserhöhung noch eine Kostensenkung allein muss die Lücke schließen – beides zusammen ist hier sinnvoll.', richtig:true,
     weg:'Der Markt erlaubt nur 3 % mehr; den Rest müssen Kostensenkung oder Gewinnverzicht tragen.'},
    {text:'Die Neumann KG sollte den Preis um 7 % erhöhen, weil auch die Kosten um 7 % gestiegen sind.',
     fehler:'Dann läge sie deutlich über der Konkurrenz (+3 %) und würde Kunden verlieren.'},
    {text:'Der Gewinn bleibt gleich, weil der Preis steigt.',
     fehler:'Der Preis steigt um 33 €, die Kosten um 70 € – der Gewinn sinkt um 37 €.'}
  ],
  hinweise:['Rechne den neuen Barverkaufspreis aus.', 'Wie hoch dürfen die Selbstkosten sein, wenn 100 € Gewinn bleiben sollen?', 'Wie viel Preiserhöhung lässt der Markt zu?'],
  merke:'Lässt der Markt nur einen Teil der Kostensteigerung im Preis zu, muss der Rest über Kostensenkung oder weniger Gewinn aufgefangen werden – oft beides.'
},
{
  id:'TC16', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Preis rauf, Absatz runter',
  tags:['Kostenträgerrechnung','Theorie','Kalkulation'],
  text:'Die Neumann KG erhöht den Preis ihres Standardanhängers um 5 %. Im folgenden Quartal sinkt der Absatz um 15 %, weil Kunden zu günstigeren Anbietern wechseln.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der Umsatz sinkt um rund 10,75 %.', richtig:true,
     weg:'Neuer Umsatz = 1,05 · 0,85 = 0,8925 des bisherigen Umsatzes, also −10,75 %.'},
    {text:'Die Fixkosten verteilen sich auf weniger Stück – die Selbstkosten je Stück steigen.', richtig:true,
     weg:'Gleiche Fixkosten ÷ weniger Stück = höherer Fixkostenanteil je Stück.'},
    {text:'Eine Preiserhöhung kann das Ergebnis verschlechtern, wenn die Kunden stark auf den Preis reagieren.', richtig:true,
     weg:'Der Mehrerlös je Stück wiegt den Verlust an Menge hier nicht auf.'},
    {text:'Der Umsatz steigt um 5 %.',
     fehler:'Das gilt nur, wenn die Menge gleich bleibt. Hier sinkt sie um 15 %.'},
    {text:'Die Selbstkosten je Stück bleiben gleich, weil sich an der Fertigung nichts ändert.',
     fehler:'Die variablen Kosten je Stück bleiben gleich, die fixen Kosten je Stück steigen aber, weil weniger produziert wird.'}
  ],
  hinweise:['Umsatz = Preis · Menge – beide ändern sich.', 'Was passiert mit den Fixkosten je Stück, wenn weniger produziert wird?', 'Lohnt sich die Preiserhöhung unter dem Strich?'],
  merke:'Eine Preiserhöhung lohnt sich nur, wenn der Absatz nicht zu stark zurückgeht. Sinkt die Menge, steigen zudem die fixen Kosten je Stück.'
},
{
  id:'TC17', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Wo lohnt sich das Sparen?',
  tags:['Kostenträgerrechnung','Theorie','Kalkulation'],
  text:'Die Selbstkosten eines Anhängers der Neumann KG setzen sich so zusammen: Materialkosten 55 %, Fertigungskosten 30 %, Verwaltungs- und Vertriebskosten 15 %. Die Geschäftsleitung will die Selbstkosten senken.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'5 % weniger Materialkosten senken die Selbstkosten um 2,75 %.', richtig:true,
     weg:'55 % · 5 % = 2,75 %.'},
    {text:'5 % weniger Verwaltungs- und Vertriebskosten senken die Selbstkosten nur um 0,75 %.', richtig:true,
     weg:'15 % · 5 % = 0,75 %.'},
    {text:'Am meisten bringt die Suche beim größten Kostenblock – z. B. bessere Einkaufskonditionen, weniger Verschnitt und Ausschuss.', richtig:true,
     weg:'Schon kleine Einsparungen beim größten Anteil wirken stark auf die Selbstkosten.'},
    {text:'Die Gemeinkostenzuschläge in der Kalkulation senken.',
     fehler:'Die Zuschläge spiegeln die tatsächlichen Gemeinkosten. Niedrigere Sätze ohne niedrigere Kosten führen zur Unterdeckung.'},
    {text:'Alle Kostenblöcke pauschal um 5 % kürzen – das ist am gerechtesten.',
     fehler:'Pauschale Kürzungen übersehen, wo Einsparungen möglich und sinnvoll sind; manche Kosten lassen sich kurzfristig gar nicht senken.'}
  ],
  hinweise:['Multipliziere den Anteil des Kostenblocks mit der Einsparung.', 'Wo ist der Hebel am größten?', 'Senkt ein niedrigerer Zuschlagssatz die Kosten?'],
  merke:'Kostensenkung setzt am wirksamsten beim größten Kostenblock an. Die Wirkung auf die Selbstkosten = Anteil des Blocks · Einsparung in Prozent.'
},
{
  id:'TC18', modul:'K8RT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Sparen mit Nebenwirkungen',
  tags:['Kostenträgerrechnung','Theorie','Kalkulation'],
  text:'Um die Kosten zu senken, plant die Neumann KG zwei Maßnahmen: Achsen künftig bei einem neuen, 12 % günstigeren Lieferanten einkaufen und eine Stelle im Außendienst nicht neu besetzen.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der günstigere Lieferant kann schlechtere Qualität, mehr Reklamationen oder unsichere Liefertermine bedeuten.', richtig:true,
     weg:'Ein niedriger Einkaufspreis hilft nur, wenn Qualität und Lieferzuverlässigkeit stimmen.'},
    {text:'Weniger Außendienst kann Umsatz kosten, weil Kunden seltener betreut werden.', richtig:true,
     weg:'Eingesparte Vertriebskosten können durch entgangene Aufträge mehr als aufgezehrt werden.'},
    {text:'Kostensenkungen müssen mit ihren Folgen für Qualität, Image und Absatz abgewogen werden.', richtig:true,
     weg:'Entscheidend ist die Wirkung auf den Gewinn insgesamt, nicht nur auf die Kosten.'},
    {text:'Jede Kostensenkung erhöht den Gewinn genau um den eingesparten Betrag.',
     fehler:'Nur wenn Absatz und Preis gleich bleiben. Leidet die Qualität oder die Kundenbetreuung, sinken möglicherweise auch die Erlöse.'},
    {text:'Für die Kalkulation zählt nur der Einkaufspreis, die Qualität spielt keine Rolle.',
     fehler:'Schlechte Qualität verursacht Folgekosten (Nacharbeit, Gewährleistung) und kostet Kunden.'}
  ],
  hinweise:['Was kann ein billigerer Lieferant außer einem niedrigeren Preis noch bedeuten?', 'Welche Aufgabe hat der Außendienst?', 'Wirkt eine Kostensenkung nur auf die Kosten?'],
  merke:'Kosten senken heißt nicht automatisch Gewinn erhöhen: Folgen für Qualität, Lieferfähigkeit und Absatz gehören mit in die Entscheidung.'
},
/* ---------- Modul 12 · Deckungsbeitrag: Sortiment, Zusatzauftrag, Preisuntergrenzen ---------- */
{
  id:'DT1', modul:'K9', typ:'berechnung', stufe:0, titel:'Was deckt der Deckungsbeitrag?',
  tags:['Deckungsbeitrag','Theorie'],
  text:'Ein Erzeugnis wird zu 50,00 € verkauft, die variablen Kosten betragen 32,00 € je Stück.',
  frage:'Was sagt der Deckungsbeitrag von 18,00 € je Stück aus?',
  optionen:[
    {text:'Mit jedem verkauften Stück stehen 18,00 € zur Deckung der Fixkosten zur Verfügung; was danach übrig bleibt, ist Gewinn.', richtig:true,
     weg:'Der Deckungsbeitrag ist der Teil des Preises, der über die variablen Kosten hinausgeht. Erst wenn alle Deckungsbeiträge zusammen die Fixkosten übersteigen, entsteht ein Gewinn.'},
    {text:'Mit jedem Stück werden 18,00 € Gewinn erzielt.', fehler:'Gewinn entsteht erst, wenn die Fixkosten gedeckt sind.'},
    {text:'18,00 € sind die Fixkosten je Stück.', fehler:'Fixkosten je Stück hängen von der Menge ab; der Deckungsbeitrag ist Preis − variable Stückkosten.'},
    {text:'Das Erzeugnis muss mindestens 18,00 € kosten.', fehler:'Die kurzfristige Preisuntergrenze liegt bei den variablen Stückkosten, also 32,00 €.'}
  ],
  hinweise:['Preis − variable Kosten = ?', 'Welche Kosten sind damit noch nicht bezahlt?', 'Fixkosten fallen unabhängig von der Menge an.'],
  merke:'Deckungsbeitrag = Erlös − variable Kosten. Er dient zuerst der Deckung der Fixkosten; der Rest ist Gewinn.'
},
{
  id:'DT2', modul:'K9', typ:'berechnung', stufe:0, titel:'Kurzfristige Preisuntergrenze',
  tags:['Deckungsbeitrag','Preisuntergrenze','Theorie'],
  text:'Ein Erzeugnis hat variable Kosten von 32,00 € je Stück. Bei der geplanten Menge entfallen auf jedes Stück 12,00 € Fixkosten. Der Listenpreis beträgt 50,00 €.',
  frage:'Wo liegt die kurzfristige Preisuntergrenze je Stück?',
  optionen:[
    {wert:32, richtig:true, weg:'Kurzfristig fallen die Fixkosten ohnehin an. Jeder Preis über den variablen Stückkosten bringt einen Deckungsbeitrag – die Untergrenze liegt bei 32,00 €.'},
    {wert:44, fehler:'Das sind die Selbstkosten je Stück – die langfristige Preisuntergrenze.'},
    {wert:50, fehler:'Das ist der Listenpreis, keine Untergrenze.'},
    {wert:18, fehler:'Das ist der Deckungsbeitrag je Stück beim Listenpreis.'}
  ],
  hinweise:['Welche Kosten entstehen nur, wenn produziert wird?', 'Die Fixkosten fallen auch ohne den Auftrag an.', 'Kurzfristig = variable Stückkosten.'],
  merke:'Kurzfristige Preisuntergrenze = variable Stückkosten; langfristige Preisuntergrenze = Selbstkosten je Stück (variable + fixe Stückkosten).'
},
/* Stufe 1 */
dbEin({id:'DE1', stufe:1, titel:'Deckungsbeitrag und Preisuntergrenzen · Einproduktbetrieb', firma:'Fahrradwerk Lorenz GmbH', produkt:'ein Trekkingrad',
  preis:640, kv:410, menge:3000, kf:520000,
  merke:'Betriebsergebnis = (Preis − variable Stückkosten) × Menge − Fixkosten.'}),
dbStueck({id:'DS1', stufe:1, titel:'Einstufige Deckungsbeitragsrechnung · drei Erzeugnisse', firma:'Gartenmöbel Huber GmbH', rang:true,
  produkte:[{n:'Gartenstuhl', menge:2400, preis:89, kv:52}, {n:'Gartentisch', menge:800, preis:249, kv:171}, {n:'Sonnenliege', menge:600, preis:179, kv:118}], fix:120000,
  merke:'Einstufig: Die Fixkosten werden als Block von der Summe aller Deckungsbeiträge abgezogen.'}),
/* Stufe 2 */
dbEin({id:'DE2', stufe:2, titel:'Zusatzauftrag annehmen?', firma:'Kaffeemaschinen Brandl GmbH', produkt:'eine Siebträgermaschine',
  preis:480, kv:265, menge:4200, kf:690000, zusatz:{menge:600, preis:310},
  merke:'Zusatzauftrag bei freier Kapazität: annehmen, wenn der Preis über den variablen Stückkosten liegt – auch wenn er unter den Selbstkosten liegt.'}),
dbStueck({id:'DS2', stufe:2, titel:'Sortiment bereinigen · Erzeugnis mit negativem Deckungsbeitrag', firma:'Spielwaren Krämer GmbH',
  produkte:[{n:'Holzeisenbahn', menge:1500, preis:69, kv:41}, {n:'Puppenhaus', menge:400, preis:189, kv:132}, {n:'Kaufladen', menge:300, preis:149, kv:156}, {n:'Bauklötze', menge:3000, preis:29, kv:16}], fix:80000,
  frage:'Welches Erzeugnis sollte – bei sonst gleichen Bedingungen – aus dem Sortiment genommen werden?',
  merke:'Ein negativer Deckungsbeitrag verschlechtert das Betriebsergebnis mit jedem Stück – die Fixkosten bleiben auch ohne das Erzeugnis.'}),
/* Stufe 3 */
dbEin({id:'DE3', stufe:3, titel:'Zusatzauftrag unter den variablen Kosten', firma:'Pumpentechnik Weber GmbH', produkt:'eine Gartenpumpe',
  preis:185, kv:112, menge:9000, kf:540000, zusatz:{menge:1500, preis:105},
  merke:'Liegt der Preis unter den variablen Stückkosten, verschlechtert jedes zusätzliche Stück das Ergebnis.'}),
/* ---------- Modul · Deckungsbeitrag bei Engpass ---------- */
{
  id:'ET1', modul:'K9E', typ:'berechnung', mehrfach:true, stufe:0, titel:'Wann liegt ein Engpass vor?',
  tags:['Deckungsbeitrag','Engpass','Theorie'],
  text:'Die Pumpenwerke Neckar GmbH plant das nächste Quartal. Alle Erzeugnisse haben einen positiven Deckungsbeitrag; alle laufen über dieselbe Montagelinie.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Ein Engpass liegt vor, wenn der Kapazitätsbedarf für den möglichen Absatz größer ist als die vorhandene Kapazität.', richtig:true, weg:'Kapazitätsbedarf = Höchstabsatz × Fertigungszeit je Stück, für alle Erzeugnisse addiert'},
    {text:'Ohne Engpass werden alle Erzeugnisse mit positivem Deckungsbeitrag bis zum Höchstabsatz gefertigt.', richtig:true, weg:'Dann ist keine Rangfolge nötig.'},
    {text:'Bei einem Engpass richtet sich die Rangfolge nach dem relativen Deckungsbeitrag (DB je Engpassstunde).', richtig:true, weg:'Die knappe Größe ist die Engpasszeit.'},
    {text:'Ein Zusatzauftrag bei voll ausgelastetem Engpass muss nicht nur seine variablen Kosten decken, sondern auch den Deckungsbeitrag, der durch die Verdrängung anderer Erzeugnisse verloren geht.', richtig:true, weg:'Opportunitätskosten'},
    {text:'Bei einem Engpass sollte immer das Erzeugnis mit dem höchsten Verkaufspreis zuerst gefertigt werden.', fehler:'Entscheidend ist der Deckungsbeitrag je Engpassstunde.'}
  ],
  hinweise:['Vergleiche Kapazitätsbedarf und vorhandene Kapazität.', 'Was ist knapp, wenn ein Engpass vorliegt?'],
  merke:'Engpass: Kapazitätsbedarf > Kapazität → Rangfolge nach relativem DB · Zusatzauftrag bei Engpass: Preisuntergrenze = variable Kosten + verdrängter Deckungsbeitrag je Stück.'
},
(() => {
  // Programm nach relativem DB (Reihenfolge rel) und nach Stück-DB (Reihenfolge abs); kap@0 und fix@0 in der ersten Spalte
  const prog = ord => { const fs = []; let belegt = '0';
    ord.forEach(c => { fs[c] = `max(0, min(ha@${c}, (kap@0 - (${belegt})) * 60 / tm@${c}))`; belegt += ` + MENGE@${c} * tm@${c} / 60`; });
    return fs; };
  const rel = [2, 0, 1], abs = [1, 0, 2];
  const fr = prog(rel).map(x => x.replace(/MENGE/g, 'mr')), fa = prog(abs).map(x => x.replace(/MENGE/g, 'ma'));
  return blBau('rechnung', {id:'EP1', modul:'K9E', stufe:2, titel:'Engpass prüfen: Stück-DB oder relativer DB?', tags:['Deckungsbeitrag', 'Engpass', 'Produktionsprogramm'], kopf:'Pumpenwerke Neckar GmbH (Quartal)', passes:4,
    text:'Die Pumpenwerke Neckar GmbH fertigt drei Pumpen auf derselben Montagelinie; im Quartal stehen {kap} zur Verfügung, die Fixkosten betragen {fix}. Prüfe, ob ein Engpass vorliegt. Ermittle dann das Produktionsprogramm einmal nach dem relativen Deckungsbeitrag und zum Vergleich nach dem Deckungsbeitrag je Stück – jeweils in der Rangfolge bis zum Höchstabsatz, der Rest der Stunden für das nächste Erzeugnis.',
    spalten:['Standardpumpe', 'Hochdruckpumpe', 'Kleinpumpe'],
    zeilen:[{id:'kap', t:'Kapazität der Montagelinie', e:'Std'}, {id:'fix', t:'Fixkosten', e:'€'},
      {id:'p', t:'Verkaufspreis je Stück', e:'€'}, {id:'kv', t:'variable Kosten je Stück', e:'€'},
      {id:'dbs', t:'Deckungsbeitrag je Stück', e:'€', f:'p - kv'},
      {id:'tm', t:'Montagezeit je Stück', e:'min'}, {id:'ha', t:'Höchstabsatz', e:'Stück'},
      {id:'kb', t:'Kapazitätsbedarf für den Höchstabsatz', e:'Std', f:'ha * tm / 60'},
      {id:'rel', t:'relativer Deckungsbeitrag (€ je Stunde)', kurz:'relativer DB', e:'€', f:'(p - kv) * 60 / tm'},
      {id:'mr', t:'Menge nach relativem DB', e:'Stück', fs:fr, weg:'nach Rangfolge des relativen DB bis zum Höchstabsatz, Rest der Stunden für das nächste Erzeugnis: [mr]'},
      {id:'dr', t:'Deckungsbeitrag nach relativem DB', e:'€', f:'mr * (p - kv)'},
      {id:'ma', t:'Menge nach Stück-DB (Vergleich)', e:'Stück', fs:fa, weg:'nach Rangfolge des Stück-DB bis zum Höchstabsatz, Rest der Stunden für das nächste Erzeugnis: [ma]'},
      {id:'da', t:'Deckungsbeitrag nach Stück-DB', e:'€', f:'ma * (p - kv)'}],
    werte:[{kap:1300, fix:60000, p:180, kv:120, tm:30, ha:1200}, {p:420, kv:300, tm:90, ha:500}, {p:75, kv:45, tm:12, ha:2000}],
    sets:[[{kap:1210, fix:55000, p:200, kv:140, tm:30, ha:1000}, {p:450, kv:330, tm:90, ha:400}, {p:80, kv:50, tm:12, ha:2500}],
      [{kap:1300, fix:70000, p:150, kv:100, tm:20, ha:1800}, {p:360, kv:240, tm:60, ha:600}, {p:90, kv:60, tm:10, ha:2400}],
      [{kap:1450, fix:80000, p:240, kv:160, tm:40, ha:900}, {p:500, kv:350, tm:100, ha:450}, {p:100, kv:64, tm:15, ha:1600}]],
    felder:[{id:'kbs', t:'Kapazitätsbedarf insgesamt', kurz:'Kapazitätsbedarf', f:'kb@0 + kb@1 + kb@2', e:'Std'},
      {id:'ber', t:'Betriebsergebnis nach relativem DB', kurz:'Betriebsergebnis (relativer DB)', f:'dr@0 + dr@1 + dr@2 - fix@0', e:'€'},
      {id:'bea', t:'Betriebsergebnis nach Stück-DB', kurz:'Betriebsergebnis (Stück-DB)', f:'da@0 + da@1 + da@2 - fix@0', e:'€'},
      {id:'vt', t:'Vorteil der Planung nach relativem DB', kurz:'Vorteil', f:'(dr@0 + dr@1 + dr@2) - (da@0 + da@1 + da@2)', e:'€'}],
    wahl:[{id:'eg', t:'Liegt ein Engpass vor?', opts:['Ja – der Kapazitätsbedarf übersteigt die Kapazität.', 'Nein – alle Pumpen können bis zum Höchstabsatz gefertigt werden.'], r:'kb@0 + kb@1 + kb@2 > kap@0 ? 0 : 1'}],
    hinweise:['Kapazitätsbedarf = Höchstabsatz × Minuten ÷ 60; mit der Kapazität vergleichen.', 'Relativer DB = DB je Stück × 60 ÷ Minuten; Rangfolge danach. Zum Vergleich die Rangfolge nach DB je Stück.', 'In der Rangfolge jeweils den Höchstabsatz einplanen, solange die Stunden reichen; danach die Reststunden × 60 ÷ Minuten.'],
    merke:'Bei einem Engpass bringt die Planung nach dem relativen Deckungsbeitrag den höchsten Gesamt-DB. Wer nach dem Stück-DB plant, belegt die knappen Stunden mit „langsamen“ Erzeugnissen und verschenkt Deckungsbeitrag.'}); })(),
blBau('rechnung', {id:'EP2', modul:'K9E', stufe:3, titel:'Zusatzauftrag bei voll ausgelastetem Engpass', tags:['Deckungsbeitrag', 'Engpass', 'Zusatzauftrag', 'Preisuntergrenze'], kopf:'Zusatzauftrag',
  text:'Die Spritzgießmaschine der Kunststofftechnik Böhm GmbH ist mit dem optimalen Programm voll ausgelastet. Ein Kunde bietet einen Zusatzauftrag über {z} Spezialgehäuse an ({pz} je Stück, variable Kosten {kz}, {mz} Maschinenzeit je Stück). Für den Auftrag müsste das Erzeugnis mit dem niedrigsten relativen Deckungsbeitrag im Programm verdrängt werden: Gehäuse B mit {dbv} DB je Stück und {mv} Maschinenzeit je Stück. Entscheide und ermittle die Preisuntergrenze.',
  zeilen:[{id:'z', t:'Menge des Zusatzauftrags', e:'Stück'}, {id:'pz', t:'angebotener Preis je Stück', e:'€'}, {id:'kz', t:'variable Kosten je Stück', e:'€'}, {id:'mz', t:'Maschinenzeit je Stück (Zusatzauftrag)', e:'min'},
    {id:'dbv', t:'DB je Stück des verdrängten Erzeugnisses', e:'€'}, {id:'mv', t:'Maschinenzeit je Stück des verdrängten Erzeugnisses', e:'min'},
    {id:'dbz', t:'Deckungsbeitrag des Zusatzauftrags = Menge × (Preis − variable Kosten)', kurz:'DB des Zusatzauftrags', e:'€', f:'z * (pz - kz)'},
    {id:'hz', t:'benötigte Maschinenstunden = Menge × Minuten ÷ 60', kurz:'benötigte Stunden', e:'Std', f:'z * mz / 60'},
    {id:'rv', t:'relativer DB des verdrängten Erzeugnisses', kurz:'relativer DB verdrängt', e:'€', f:'dbv * 60 / mv'},
    {id:'ev', t:'entgangener Deckungsbeitrag = Stunden × relativer DB', kurz:'entgangener DB', e:'€', f:'z * mz / 60 * dbv * 60 / mv'},
    {id:'ve', t:'Veränderung des Betriebsergebnisses', kurz:'Veränderung Betriebsergebnis', e:'€', f:'z * (pz - kz) - z * mz / 60 * dbv * 60 / mv'},
    {id:'pu', t:'Preisuntergrenze je Stück = variable Kosten + entgangener DB je Stück', kurz:'Preisuntergrenze', e:'€', f:'kz + mz / 60 * dbv * 60 / mv'}],
  werte:[{z:600, pz:42, kz:26, mz:15, dbv:16, mv:12}],
  sets:[[{z:600, pz:50, kz:26, mz:15, dbv:16, mv:12}], [{z:400, pz:38, kz:22, mz:9, dbv:20, mv:15}], [{z:800, pz:30, kz:21, mz:6, dbv:18, mv:10}]],
  wahl:[{id:'w', t:'Soll der Zusatzauftrag angenommen werden?', opts:['Ja – sein Deckungsbeitrag ist größer als der verdrängte Deckungsbeitrag.', 'Nein – zu diesem Preis sinkt das Betriebsergebnis; nur zu einem Preis über der Preisuntergrenze annehmen.'], r:'z@0 * (pz@0 - kz@0) > z@0 * mz@0 / 60 * dbv@0 * 60 / mv@0 ? 0 : 1'}],
  hinweise:['Ohne Engpass würde ein Preis über den variablen Kosten genügen – hier nicht.', 'Entgangener DB = benötigte Stunden × relativer DB des verdrängten Erzeugnisses.', 'Preisuntergrenze = variable Kosten + entgangener DB ÷ Menge.'],
  merke:'Bei voll ausgelastetem Engpass gilt: Preisuntergrenze = variable Kosten + verdrängter Deckungsbeitrag je Stück (Opportunitätskosten). Ohne Engpass liegt die kurzfristige Preisuntergrenze bei den variablen Kosten.'}),
blBau('rechnung', {id:'EP3', modul:'K9E', stufe:3, titel:'Engpass erweitern: Lohnt sich eine Zusatzschicht?', tags:['Deckungsbeitrag', 'Engpass', 'Kapazitätserweiterung'], kopf:'Zusatzschicht im Engpass',
  text:'Wegen des Engpasses kann ein Erzeugnis nicht bis zum Höchstabsatz gefertigt werden; sein relativer Deckungsbeitrag beträgt {rel} je Stunde. Eine Zusatzschicht brächte {hs} zusätzliche Stunden. Sie kostet {km} je Stunde (Löhne mit Zuschlägen, Energie) und einmalig {kf} für Organisation und Aufsicht. Die zusätzliche Menge lässt sich absetzen.',
  zeilen:[{id:'hs', t:'zusätzliche Stunden', e:'Std'}, {id:'rel', t:'relativer DB des Erzeugnisses', e:'€'}, {id:'km', t:'Mehrkosten je Stunde', e:'€'}, {id:'kf', t:'einmalige Kosten der Zusatzschicht', e:'€'},
    {id:'zd', t:'zusätzlicher Deckungsbeitrag = Stunden × relativer DB', kurz:'zusätzlicher DB', e:'€', f:'hs * rel'},
    {id:'zk', t:'zusätzliche Kosten = Stunden × Mehrkosten + einmalige Kosten', kurz:'zusätzliche Kosten', e:'€', f:'hs * km + kf'},
    {id:'ve', t:'Veränderung des Betriebsergebnisses', kurz:'Veränderung Betriebsergebnis', e:'€', f:'hs * rel - (hs * km + kf)'},
    {id:'ko', t:'höchstens tragbare Mehrkosten je Stunde = relativer DB − einmalige Kosten ÷ Stunden', kurz:'Kostenobergrenze je Stunde', e:'€', f:'rel - kf / hs'}],
  werte:[{hs:200, rel:80, km:55, kf:3000}],
  sets:[[{hs:200, rel:80, km:70, kf:3000}], [{hs:150, rel:120, km:85, kf:4500}], [{hs:300, rel:60, km:52, kf:3600}]],
  wahl:[{id:'w', t:'Lohnt sich die Zusatzschicht?', opts:['Ja – der zusätzliche Deckungsbeitrag übersteigt die zusätzlichen Kosten.', 'Nein – die zusätzlichen Kosten sind höher als der zusätzliche Deckungsbeitrag.'], r:'hs@0 * rel@0 > hs@0 * km@0 + kf@0 ? 0 : 1'}],
  hinweise:['Jede zusätzliche Engpassstunde bringt den relativen DB des Erzeugnisses, das noch nicht voll gefertigt wird.', 'Davon gehen die zusätzlichen Kosten der Schicht ab.', 'Fixkosten des normalen Betriebs bleiben gleich und spielen keine Rolle.'],
  merke:'Eine Engpasserweiterung (Zusatzschicht, Überstunden, Fremdvergabe) lohnt sich, solange ihre Kosten je Stunde unter dem relativen DB der zusätzlich gefertigten Erzeugnisse liegen.'}),
/* Wirtschaftsgymnasium (05.11.2026, BPE 7.5): absoluter und relativer Deckungsbeitrag */
{
  id:'ET2', modul:'K9E', typ:'berechnung', mehrfach:true, stufe:1, titel:'Absoluter oder relativer Deckungsbeitrag?',
  tags:['Deckungsbeitrag','Engpass','relativer Deckungsbeitrag'],
  text:'Ein Hersteller kann wegen einer ausgelasteten Lackieranlage nicht alle Aufträge annehmen.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Ohne Engpass wird nach dem absoluten Deckungsbeitrag je Stück entschieden.', richtig:true, weg:'Ohne Engpass bringt jedes zusätzliche Stück seinen vollen Stück-DB.'},
    {text:'Bei einem Engpass zählt der Deckungsbeitrag je Einheit der Engpasszeit (relativer Deckungsbeitrag).', richtig:true, weg:'Knapp ist die Anlagenzeit – sie muss möglichst ertragreich genutzt werden.'},
    {text:'Relativer Deckungsbeitrag = Stückdeckungsbeitrag ÷ Beanspruchung des Engpasses je Stück.', richtig:true, weg:'So wird der Deckungsbeitrag je Engpassminute vergleichbar.'},
    {text:'Bei einem Engpass wird immer das Produkt mit dem höchsten Verkaufspreis zuerst gefertigt.', fehler:'Entscheidend ist, wie viel Deckungsbeitrag eine Engpassminute bringt – nicht der Preis.'},
    {text:'Produkte mit negativem Deckungsbeitrag werden auch ohne Engpass nicht gefertigt.', richtig:true, weg:'Sie würden das Ergebnis verschlechtern – jedes Stück erhöht den Verlust.'}
  ],
  hinweise:['Welche Größe ist knapp?'],
  merke:'Kein Engpass: absoluter Stück-DB · Engpass: relativer DB = Stück-DB ÷ Engpasszeit je Stück, Rangfolge danach · negativer DB: nicht fertigen.'
},
/* ---------- Modul 14 · Make or Buy ---------- */
{
  id:'MBT1', modul:'K9M', typ:'berechnung', stufe:0, titel:'Welche Kosten zählen?',
  tags:['Make or Buy','Theorie'],
  text:'Ein Betrieb hat freie Kapazität und überlegt, ein Bauteil selbst zu fertigen statt es zuzukaufen. Maschinen und Personal sind vorhanden; die Fixkosten ändern sich nicht.',
  frage:'Womit wird der Einstandspreis des Zulieferers verglichen?',
  optionen:[
    {text:'Mit den variablen Stückkosten der Eigenfertigung.', richtig:true, weg:'Die Fixkosten fallen in beiden Fällen an. Entscheidend sind nur die Kosten, die zusätzlich entstehen – die variablen Kosten.'},
    {text:'Mit den Selbstkosten (Vollkosten) je Stück.', fehler:'Die anteiligen Fixkosten entstehen auch beim Zukauf – sie verfälschen den Vergleich.'},
    {text:'Mit den Fertigungslöhnen.', fehler:'Auch Material und variable Gemeinkosten gehören dazu.'},
    {text:'Mit dem eigenen Verkaufspreis.', fehler:'Es geht um Kosten, nicht um den Erlös des Endprodukts.'}
  ],
  hinweise:['Welche Kosten ändern sich durch die Entscheidung?', 'Fixkosten bleiben gleich.', 'Also nur die variablen Kosten.'],
  merke:'Kurzfristig (freie Kapazität, keine zusätzlichen Fixkosten): Einstandspreis gegen variable Stückkosten.'
},
{
  id:'MBT2', modul:'K9M', typ:'berechnung', stufe:0, titel:'Kritische Menge',
  tags:['Make or Buy','Theorie'],
  text:'Für die Eigenfertigung müsste eine Anlage mit Fixkosten von 24.000,00 € im Jahr angeschafft werden. Die variablen Stückkosten betragen 18,00 €, der Einstandspreis beim Zulieferer 22,00 €.',
  frage:'Ab welcher Menge lohnt sich die Eigenfertigung?',
  optionen:[
    {text:'6.000 Stück', richtig:true, weg:'Je Stück spart die Eigenfertigung 22,00 € − 18,00 € = 4,00 €. Damit sich 24.000,00 € Fixkosten lohnen: 24.000 ÷ 4 = 6.000 Stück.'},
    {text:'1.334 Stück', fehler:'Fixkosten ÷ variable Stückkosten – richtig ist Fixkosten ÷ Ersparnis je Stück.'},
    {text:'1.091 Stück', fehler:'Fixkosten ÷ Einstandspreis – richtig ist Fixkosten ÷ (Einstandspreis − variable Stückkosten).'},
    {text:'4.000 Stück', fehler:'Rechne nach: 24.000 ÷ (22 − 18) = …'}
  ],
  hinweise:['Wie viel spart jedes selbst gefertigte Stück?', '22 − 18 = 4 €.', 'Wie viele Stück braucht es, um 24.000 € hereinzuholen?'],
  merke:'Kritische Menge = zusätzliche Fixkosten ÷ (Einstandspreis − variable Stückkosten).'
},
makeBuy({id:'MB1', stufe:1, titel:'Make or Buy · freie Kapazität', firma:'Fahrzeugteile Brenner GmbH', teil:'einer Halterung', menge:5000,
  eigen:{mat:4.20, lohn:3.10, vgk:1.50}, kfDa:18000, fremd:{preis:9.60},
  merke:'Bei freier Kapazität zählen nur die variablen Kosten – ohnehin anfallende Fixkosten bleiben außen vor.'}),
makeBuy({id:'MB2', stufe:2, titel:'Make or Buy · zusätzliche Fixkosten und kritische Menge', firma:'Elektrogeräte Kaiser GmbH', teil:'einer Steuerplatine', menge:10000,
  eigen:{mat:12.40, lohn:6.80, vgk:3.80}, kfZus:36000, anlage:'eine Prüfanlage', fremd:{lep:30, rab:10, bzk:0.50},
  merke:'Oberhalb der kritischen Menge ist die Eigenfertigung günstiger, darunter der Fremdbezug.'}),
makeBuy({id:'MB3', stufe:3, titel:'Make or Buy · Einstandspreis mit Rabatt, Skonto und Bezugskosten', firma:'Landmaschinen Vogel AG', teil:'eines Hydraulikventils', menge:3000,
  eigen:{mat:38.50, lohn:22.40, vgk:14.10}, kfZus:60000, anlage:'ein Bearbeitungszentrum', fremd:{lep:100, rab:15, sko:2, bzk:1.70},
  merke:'Liegt die Bedarfsmenge unter der kritischen Menge, ist der Fremdbezug günstiger – trotz niedrigerer variabler Stückkosten der Eigenfertigung.'}),
/* ---------- Modul 13 · Relativer Deckungsbeitrag (begrenzte Stunden) ---------- */
{
  id:'RT1', modul:'K9R', typ:'berechnung', stufe:0, titel:'Freie Kapazität – was fertigen?',
  tags:['relativer Deckungsbeitrag','Theorie'],
  text:'Auf einer Spritzgießmaschine sind im nächsten Monat noch 120 Stunden frei. Drei Erzeugnisse könnten dort zusätzlich gefertigt und auch abgesetzt werden; sie belegen die Maschine unterschiedlich lange.',
  frage:'Nach welcher Größe entscheidet der Betrieb, welches Erzeugnis er in den freien Stunden fertigt?',
  optionen:[
    {text:'Nach dem Deckungsbeitrag je Maschinenstunde (relativer Deckungsbeitrag).', richtig:true, weg:'Begrenzt sind die freien Maschinenstunden. Am meisten bringt das Erzeugnis, das je Maschinenstunde den höchsten Deckungsbeitrag erwirtschaftet – unabhängig davon, ob die Maschine sonst voll ausgelastet ist.'},
    {text:'Nach dem Deckungsbeitrag je Stück.', fehler:'Ein hoher Stück-DB nützt wenig, wenn das Erzeugnis die freien Stunden sehr lange belegt.'},
    {text:'Nach dem Verkaufspreis.', fehler:'Der Preis sagt nichts über die variablen Kosten und die Maschinenzeit.'},
    {text:'Nach dem Gewinn je Stück auf Vollkostenbasis.', fehler:'Fixkosten fallen ohnehin an; entscheidend ist der Deckungsbeitrag je Maschinenstunde.'}
  ],
  hinweise:['Was ist begrenzt?', 'Die freien Maschinenstunden.', 'Wie viel bringt eine dieser Stunden?'],
  merke:'Sind die Stunden begrenzt – ob als echter Engpass oder als freie Restkapazität –, entscheidet der relative Deckungsbeitrag = DB je Stück ÷ Fertigungszeit je Stück.'
},
{
  id:'RT2', modul:'K9R', typ:'berechnung', stufe:0, titel:'Relativen Deckungsbeitrag berechnen',
  tags:['relativer Deckungsbeitrag','Theorie'],
  text:'Ein Erzeugnis hat einen Deckungsbeitrag von 30,00 € je Stück und belegt die Maschine 20 Minuten.',
  frage:'Wie hoch ist der relative Deckungsbeitrag je Maschinenstunde?',
  optionen:[
    {text:'90,00 € je Stunde', richtig:true, weg:'20 Minuten = 1/3 Stunde; in einer Stunde schafft die Maschine 3 Stück: 3 × 30,00 € = 90,00 € je Stunde.'},
    {text:'600,00 € je Stunde', fehler:'DB × Minuten – richtig ist DB ÷ Stunden je Stück.'},
    {text:'1,50 € je Stunde', fehler:'Das ist der DB je Minute; gefragt ist je Stunde.'},
    {text:'30,00 € je Stunde', fehler:'Das ist der Deckungsbeitrag je Stück.'}
  ],
  hinweise:['Wie viele Stück schafft die Maschine in einer Stunde?', '60 ÷ 20 = 3 Stück.', '3 × 30 = …'],
  merke:'Relativer DB = DB je Stück × 60 ÷ Fertigungsminuten je Stück.'
},
relDB({id:'RD1', stufe:1, titel:'Rangfolge nach dem relativen Deckungsbeitrag', firma:'Polstermöbel Arnold GmbH', engpass:'Polsterei', kap:400,
  produkte:[{n:'Sessel', preis:420, kv:260, min:48, max:300}, {n:'Sofa', preis:980, kv:640, min:150, max:120}, {n:'Hocker', preis:140, kv:85, min:15, max:600}],
  merke:'Das Sofa hat den höchsten Stück-DB, belegt die freien Stunden aber am längsten – je Stunde bringt der Hocker am meisten.'}),
relDB({id:'RD4', stufe:2, titel:'Rangfolge · mit negativem Deckungsbeitrag', firma:'Glasmanufaktur Reiter GmbH', engpass:'Schleiferei', kap:300,
  produkte:[{n:'Vase', preis:85, kv:49, min:30, max:400}, {n:'Schale', preis:48, kv:30, min:12, max:900}, {n:'Karaffe', preis:120, kv:72, min:45, max:300}, {n:'Windlicht', preis:22, kv:23, min:6, max:2000}],
  merke:'Ein Erzeugnis ohne positiven Deckungsbeitrag bekommt keinen Rang – es würde jede freie Stunde mit Verlust belegen.'}),
relDB({id:'RD2', stufe:3, programm:true, engpassFall:true, titel:'Optimales Produktionsprogramm bei Engpass', firma:'Kunststofftechnik Böhm GmbH', engpass:'Spritzgießmaschine', kap:800, fix:40000,
  produkte:[{n:'Gehäuse A', preis:24, kv:15, min:6, max:4000}, {n:'Gehäuse B', preis:38, kv:22, min:12, max:2500}, {n:'Gehäuse C', preis:55, kv:34, min:20, max:1200}],
  merke:'Erst nach Rang den Höchstabsatz einplanen; das Erzeugnis, bei dem die Stunden ausgehen, bekommt nur noch den Rest.'}),
/* Labor-Aufgaben: eingebettete Werkstätten aus quellen/labor (Stufe „Labor“) */
{
  id:'K3LAB', modul:'K3', typ:'labor', stufe:9, labor:'bab', titel:'Labor: BAB-Werkstatt',
  tags:['BAB','Labor'],
  text:'Verteile die Gemeinkosten im Betriebsabrechnungsbogen, lege die allgemeine Hilfskostenstelle um und ermittle die Zuschlagssätze. Die Werkstatt reagiert sofort auf jede Änderung. Erfülle die Aufträge – sie haken sich automatisch ab. Das Labor zählt nicht für die Medaillen.'
},
{
  id:'K10LAB', modul:'K10', typ:'labor', stufe:9, labor:'breakeven', titel:'Labor: Break-even-Labor',
  tags:['Gewinnschwelle','Labor'],
  text:'Verändere Preis, variable Kosten und Fixkosten und beobachte die Gewinnschwelle im Schaubild. Die Werkstatt reagiert sofort auf jede Änderung. Erfülle die Aufträge – sie haken sich automatisch ab. Das Labor zählt nicht für die Medaillen.'
},

];

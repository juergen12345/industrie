window.POOL_DATEN_if = () => [
/* ---------- Modul 1 · Kalkulatorische Abschreibung und Zinsen ---------- */
inv({id:'IG1', modul:'IG', stufe:1, titel:'Abschreibung und Zinsen zweier Maschinen', firma:'Hagen Metallbau GmbH', zins:8, fragen:['grund'],
  m:[{aw:120000, nd:8, rw:8000}, {aw:180000, nd:8, rw:12000}]}),
inv({id:'IG2', modul:'IG', stufe:1, titel:'Ohne Restwert', firma:'Druckerei Brandl KG', zins:6, fragen:['grund'],
  anlass:'plant den Kauf einer neuen Druckmaschine und vergleicht zwei Angebote',
  m:[{aw:96000, nd:6, rw:0}, {aw:132000, nd:6, rw:0}]}),
inv({id:'IG3', modul:'IG', stufe:2, titel:'Zinsen nur vom Anschaffungswert', firma:'Kunststofftechnik Ott GmbH', zins:7, fragen:['grund'], zinsAW:true,
  zusatz:'Die Geschäftsleitung rechnet die kalkulatorischen Zinsen vereinfacht vom halben Anschaffungswert.',
  m:[{aw:150000, nd:10, rw:10000}, {aw:210000, nd:10, rw:30000}],
  merke:'Wird der Restwert bei den Zinsen nicht berücksichtigt, ist das durchschnittlich gebundene Kapital der halbe Anschaffungswert. Lies immer genau, welche Rechenweise die Aufgabe verlangt.'}),

/* Wirtschaftsgymnasium (05.11.2026): weitere Aufgaben mit Zinsen vom durchschnittlich gebundenen Kapital */
inv({id:'IG4', modul:'IG', stufe:1, titel:'Zwei Verpackungsanlagen', firma:'FreshFood AG', zins:6, fragen:['grund'],
  anlass:'plant den Kauf einer Verpackungsanlage und vergleicht zwei Angebote',
  m:[{aw:90000, nd:6, rw:6000}, {aw:140000, nd:7, rw:14000}]}),
inv({id:'IG5', modul:'IG', stufe:2, titel:'Unterschiedliche Nutzungsdauern', firma:'Metallbau Ritter GmbH', zins:7, fragen:['grund'],
  anlass:'will eine Laserschneidanlage anschaffen und vergleicht zwei Angebote',
  m:[{aw:250000, nd:10, rw:20000}, {aw:190000, nd:6, rw:10000}]}),
inv({id:'IG6', modul:'IG', stufe:2, titel:'Restwert und Zinsen', firma:'Druckerei Lang GmbH', zins:5, fragen:['grund'],
  anlass:'plant den Kauf einer Digitaldruckmaschine und vergleicht zwei Angebote',
  m:[{aw:160000, nd:8, rw:16000}, {aw:120000, nd:5, rw:0}]}),

/* ---------- Modul 2 · Kostenvergleich ---------- */
inv({id:'IK1', modul:'IK', stufe:1, titel:'Kostenvergleich zweier Maschinen', firma:'Hagen Metallbau GmbH', zins:8, menge:20000, fragen:['kosten'], entscheid:true,
  m:[{aw:120000, nd:8, rw:8000, kfs:9000, kv:3.20}, {aw:180000, nd:8, rw:12000, kfs:7500, kv:2.60}],
  merke:'Beim Kostenvergleich gewinnt die Maschine mit den niedrigeren Gesamtkosten – aber nur für die zugrunde gelegte Menge.'}),
inv({id:'IK5', modul:'IK', stufe:2, titel:'Kostenvergleich zweier Laseranlagen', firma:'Metallbau Ritter GmbH', zins:7, menge:12000, fragen:['kosten', 'stueck'], entscheid:true,
  anlass:'will eine Laserschneidanlage anschaffen und vergleicht zwei Angebote',
  m:[{aw:250000, nd:10, rw:20000, kfs:14000, kv:6.50}, {aw:190000, nd:8, rw:10000, kfs:12000, kv:8.20}]}),
inv({id:'IK2', modul:'IK', stufe:2, titel:'Gesamt- und Stückkosten', firma:'Druckerei Brandl KG', zins:6, menge:400000, fragen:['kosten', 'stueck'], entscheid:true,
  anlass:'plant den Kauf einer neuen Druckmaschine und vergleicht zwei Angebote',
  m:[{aw:96000, nd:6, rw:0, kfs:12000, kv:0.18}, {aw:132000, nd:6, rw:0, kfs:10500, kv:0.15}]}),
inv({id:'IK3', modul:'IK', stufe:2, titel:'Zinsen vom halben Anschaffungswert', firma:'Kunststofftechnik Ott GmbH', zins:7, menge:30000, fragen:['kosten', 'stueck'], entscheid:true, zinsAW:true,
  zusatz:'Die kalkulatorischen Zinsen werden vom halben Anschaffungswert berechnet.',
  m:[{aw:150000, nd:10, rw:10000, kfs:8000, kv:4.10}, {aw:210000, nd:10, rw:30000, kfs:6500, kv:3.55}]}),
inv({id:'IK4', modul:'IK', stufe:3, titel:'Drei Angebote im Kostenvergleich', firma:'Schreinerei Wolf GmbH', zins:5, menge:6000, fragen:['kosten', 'stueck'], entscheid:true,
  anlass:'will eine CNC-Fräse anschaffen und vergleicht drei Angebote',
  m:[{aw:84000, nd:7, rw:7000, kfs:6000, kv:14.50}, {aw:112000, nd:7, rw:14000, kfs:5500, kv:12.80}, {aw:150000, nd:7, rw:10000, kfs:7000, kv:11.20}]}),

/* ---------- Modul 3 · Kritische Menge ---------- */
inv({id:'IM1', modul:'IM', stufe:1, titel:'Kritische Menge aus fixen und variablen Kosten', firma:'Bäckerei Lindner GmbH', direkt:true, fragen:['krit'],
  anlass:'vergleicht zwei Teigknetmaschinen',
  m:[{kf:18000, kv:0.42}, {kf:27000, kv:0.30}]}),
inv({id:'IM2', modul:'IM', stufe:2, titel:'Kritische Menge und Entscheidung', firma:'Hagen Metallbau GmbH', zins:8, menge:16000, fragen:['krit'], entscheid:true,
  m:[{aw:120000, nd:8, rw:8000, kfs:9000, kv:3.20}, {aw:180000, nd:8, rw:12000, kfs:7500, kv:2.60}]}),
inv({id:'IM3', modul:'IM', stufe:2, titel:'Kostenvergleich mit kritischer Menge', firma:'Druckerei Brandl KG', zins:6, menge:400000, fragen:['kosten', 'krit'], entscheid:true,
  anlass:'plant den Kauf einer neuen Druckmaschine und vergleicht zwei Angebote',
  m:[{aw:96000, nd:6, rw:0, kfs:12000, kv:0.18}, {aw:132000, nd:6, rw:0, kfs:10500, kv:0.15}]}),
inv({id:'IM4', modul:'IM', stufe:3, titel:'Absatzmenge knapp über der kritischen Menge', firma:'Getränke Sommer GmbH', zins:6, menge:900000, fragen:['kosten', 'krit'], entscheid:true,
  anlass:'will eine Abfüllanlage anschaffen und vergleicht zwei Angebote',
  m:[{aw:240000, nd:8, rw:16000, kfs:22000, kv:0.09}, {aw:320000, nd:8, rw:24000, kfs:18500, kv:0.08}]}),

/* ---------- Modul 4 · Gewinn- und Kostenvergleich ---------- */
inv({id:'IGW1', modul:'IGW', stufe:1, titel:'Gewinn- und Kostenvergleich bei gleichem Preis', firma:'Hagen Metallbau GmbH', zins:8, menge:20000, fragen:['kosten', 'gewinn'], entscheid:true,
  m:[{aw:120000, nd:8, rw:8000, kfs:9000, kv:3.20, p:5.40}, {aw:180000, nd:8, rw:12000, kfs:7500, kv:2.60, p:5.40}],
  merke:'Bei gleichem Verkaufspreis führen Kosten- und Gewinnvergleich zum selben Ergebnis.'}),
inv({id:'IGW2', modul:'IGW', stufe:2, titel:'Bessere Qualität, höherer Preis', firma:'Kunststofftechnik Ott GmbH', zins:7, menge:30000, fragen:['kosten', 'gewinn'], entscheid:true,
  zusatz:'Mit Maschine II lässt sich wegen der besseren Oberflächenqualität ein höherer Verkaufspreis erzielen.',
  m:[{aw:150000, nd:10, rw:10000, kfs:8000, kv:4.10, p:5.40}, {aw:210000, nd:10, rw:30000, kfs:6500, kv:4.40, p:5.95}],
  merke:'Unterscheiden sich die Verkaufspreise, kann der Gewinnvergleich zu einem anderen Ergebnis führen als der Kostenvergleich.'}),
inv({id:'IGW3', modul:'IGW', stufe:3, titel:'Gewinnvergleich mit kritischer Menge', firma:'Schreinerei Wolf GmbH', zins:5, menge:6000, fragen:['kosten', 'gewinn', 'krit'], entscheid:true,
  anlass:'will eine CNC-Fräse anschaffen und vergleicht zwei Angebote',
  zusatz:'Die Teile von Maschine II erzielen einen höheren Preis.',
  m:[{aw:84000, nd:7, rw:7000, kfs:6000, kv:14.50, p:19.00}, {aw:150000, nd:7, rw:10000, kfs:7000, kv:12.80, p:19.80}]}),

/* ---------- Modul 5 · Rentabilitätsvergleich ---------- */
inv({id:'IR1', modul:'IR', stufe:1, titel:'Gewinn, Kosten und Rentabilität', firma:'Hagen Metallbau GmbH', zins:8, menge:20000, fragen:['kosten', 'gewinn', 'rent'], entscheid:true,
  m:[{aw:120000, nd:8, rw:8000, kfs:9000, kv:3.20, p:5.40}, {aw:180000, nd:8, rw:12000, kfs:7500, kv:2.60, p:5.40}]}),
inv({id:'IR2', modul:'IR', stufe:2, titel:'Höherer Gewinn, geringere Rentabilität', firma:'Druckerei Brandl KG', zins:6, menge:400000, fragen:['kosten', 'gewinn', 'rent'], entscheid:true,
  anlass:'plant den Kauf einer neuen Druckmaschine und vergleicht zwei Angebote',
  m:[{aw:60000, nd:6, rw:0, kfs:9000, kv:0.20, p:0.27}, {aw:132000, nd:6, rw:0, kfs:10500, kv:0.15, p:0.27}],
  merke:'Die Rentabilität setzt den Erfolg ins Verhältnis zum eingesetzten Kapital. Eine teure Maschine kann mehr Gewinn bringen und trotzdem weniger rentabel sein.'}),
inv({id:'IR3', modul:'IR', stufe:3, titel:'Rentabilität mit Zinsen vom halben Anschaffungswert', firma:'Kunststofftechnik Ott GmbH', zins:7, menge:30000, fragen:['kosten', 'gewinn', 'rent'], entscheid:true, zinsAW:true,
  zusatz:'Die kalkulatorischen Zinsen und das gebundene Kapital werden vom halben Anschaffungswert berechnet. Mit Maschine II lässt sich ein höherer Preis erzielen.',
  m:[{aw:150000, nd:10, rw:10000, kfs:8000, kv:4.10, p:5.40}, {aw:210000, nd:10, rw:30000, kfs:6500, kv:4.40, p:5.95}]}),

/* ---------- Modul 6 · Amortisationsvergleich ---------- */
inv({id:'IA0', modul:'IA', stufe:1, titel:'Einstieg: Kosten, Gewinn und Amortisation', firma:'Metallwerk Krämer GmbH', direkt:true, menge:20800, fragen:['kosten', 'gewinn', 'amort'], entscheid:true,
  namen:['Angebot 1', 'Angebot 2'], anlass:'plant die Anschaffung einer neuen Maschine und vergleicht zwei Angebote',
  zusatz:'Die fixen Kosten enthalten bereits Abschreibung und Zinsen.',
  hinweise:['Welche Angaben brauchst du wirklich? Nicht jede Zahl in der Tabelle wird für die Rechnung benötigt.',
    'Gesamtkosten = fixe Kosten + variable Kosten je Stück × Menge. Gewinn = Umsatzerlöse − Gesamtkosten.',
    'Abschreibung = Anschaffungswert ÷ Nutzungsdauer. Amortisationszeit = Anschaffungswert ÷ (Gewinn + Abschreibung).'],
  m:[{aw:130000, nd:6, kap:26000, kf:41600, kv:11.40, p:14.20}, {aw:364000, nd:8, kap:26800, kf:101400, kv:8.90, p:14.20}],
  merke:'Bei gleicher Absatzmenge und gleichem Preis sind die Umsatzerlöse gleich. Dann ist der Kostenvergleich zugleich ein Gewinnvergleich: Der Unterschied bei den Kosten ist genau der Unterschied beim Gewinn. Die Kapazitätsgrenze spielt keine Rolle, solange die geplante Menge darunter liegt.'}),
inv({id:'IA5', modul:'IA', stufe:2, titel:'Amortisation zweier Verpackungsanlagen', firma:'FreshFood AG', zins:6, menge:250000, fragen:['kosten', 'gewinn', 'amort'], entscheid:true,
  anlass:'plant den Kauf einer Verpackungsanlage und vergleicht zwei Angebote',
  m:[{aw:90000, nd:6, rw:6000, kfs:8000, kv:0.22, p:0.40}, {aw:140000, nd:7, rw:14000, kfs:9500, kv:0.16, p:0.40}]}),
inv({id:'IA1', modul:'IA', stufe:1, titel:'Gewinn, Kosten und Amortisation', firma:'Hagen Metallbau GmbH', zins:8, menge:20000, fragen:['kosten', 'gewinn', 'amort'], entscheid:true,
  m:[{aw:120000, nd:8, rw:8000, kfs:9000, kv:3.20, p:5.40}, {aw:180000, nd:8, rw:12000, kfs:7500, kv:2.60, p:5.40}]}),
inv({id:'IA2', modul:'IA', stufe:2, titel:'Amortisation ohne Restwert', firma:'Druckerei Brandl KG', zins:6, menge:400000, fragen:['kosten', 'gewinn', 'amort'], entscheid:true,
  anlass:'plant den Kauf einer neuen Druckmaschine und vergleicht zwei Angebote',
  m:[{aw:60000, nd:6, rw:0, kfs:9000, kv:0.20, p:0.27}, {aw:132000, nd:6, rw:0, kfs:10500, kv:0.15, p:0.27}]}),
inv({id:'IA3', modul:'IA', stufe:2, titel:'Zwei Rechenweisen der Amortisationszeit', firma:'Getränke Sommer GmbH', zins:6, menge:900000, fragen:['kosten', 'gewinn', 'amort', 'amortAW'], entscheid:true,
  anlass:'will eine Abfüllanlage anschaffen und vergleicht zwei Angebote',
  zusatz:'Berechne die Amortisationszeit einmal mit und einmal ohne Abzug des Restwerts.',
  m:[{aw:240000, nd:8, rw:16000, kfs:22000, kv:0.09, p:0.17}, {aw:320000, nd:8, rw:24000, kfs:18500, kv:0.08, p:0.17}],
  merke:'Wird der Restwert abgezogen, muss weniger Kapital zurückfließen – die Amortisationszeit wird kürzer. Welche Rechenweise gilt, steht in der Aufgabe.'}),
inv({id:'IA4', modul:'IA', stufe:3, titel:'Alle Verfahren im Vergleich', firma:'Schreinerei Wolf GmbH', zins:5, menge:6000, fragen:['kosten', 'gewinn', 'rent', 'amort'], entscheid:true,
  anlass:'will eine CNC-Fräse anschaffen und vergleicht zwei Angebote',
  zusatz:'Die Teile von Maschine II erzielen einen höheren Preis.',
  m:[{aw:84000, nd:7, rw:7000, kfs:6000, kv:14.50, p:19.00}, {aw:150000, nd:7, rw:10000, kfs:7000, kv:12.80, p:19.80}]}),
/* ---------- Modul 7 · Theorie (extra): Investitionsrechnung deuten ---------- */
{
  id:'IT1', modul:'IT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Welche Kosten gehören in den Kostenvergleich?',
  tags:['Investitionsrechnung','Theorie','Kostenvergleich'],
  text:'Für den Kostenvergleich zweier Maschinen sollen die jährlichen Kosten ermittelt werden.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die kalkulatorische Abschreibung verteilt Anschaffungswert minus Restwert gleichmäßig auf die Nutzungsdauer.', richtig:true, weg:'(Anschaffungswert − Restwert) ÷ Nutzungsdauer.'},
    {text:'Kalkulatorische Zinsen werden angesetzt, weil das gebundene Kapital sonst anderweitig Zinsen bringen könnte.', richtig:true, weg:'Sie stehen für den entgangenen Zins des im Durchschnitt gebundenen Kapitals.'},
    {text:'Abschreibung, Zinsen, Raum- und Wartungskosten sind fixe Kosten; Material und Energie je Stück sind variable Kosten.', richtig:true, weg:'Fixe Kosten fallen unabhängig von der Menge an.'},
    {text:'Der Anschaffungswert wird im Jahr der Anschaffung in voller Höhe als Kosten angesetzt.', fehler:'Er wird über die Nutzungsdauer verteilt – als kalkulatorische Abschreibung.'},
    {text:'Kalkulatorische Zinsen werden vom vollen Anschaffungswert berechnet, weil das ganze Kapital über die gesamte Nutzungsdauer gebunden ist.', fehler:'Durch die Abschreibungen fließt Kapital zurück. Im Durchschnitt ist nur etwa die Hälfte gebunden: (AW + RW) ÷ 2.'}
  ],
  hinweise:['Wie wird der Wertverlust auf die Jahre verteilt?', 'Warum sinkt das gebundene Kapital im Laufe der Nutzung?', 'Welche Kosten hängen von der Menge ab, welche nicht?'],
  merke:'Jährliche Kosten = kalkulatorische Abschreibung + kalkulatorische Zinsen + sonstige fixe Kosten + variable Kosten.'
},
{
  id:'IT2', modul:'IT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Was sagt die kritische Menge?',
  tags:['Investitionsrechnung','Theorie','Kritische Menge'],
  text:'Maschine I hat niedrigere fixe, aber höhere variable Kosten je Stück als Maschine II. Die kritische Menge liegt bei 13.434 Stück.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Bei 13.434 Stück verursachen beide Maschinen ungefähr gleich hohe Gesamtkosten.', richtig:true, weg:'An der kritischen Menge schneiden sich die Kostengeraden.'},
    {text:'Wird weniger produziert, ist Maschine I günstiger.', richtig:true, weg:'Bei kleinen Mengen zählen die niedrigeren fixen Kosten.'},
    {text:'Wird mehr produziert, ist Maschine II günstiger.', richtig:true, weg:'Mit steigender Menge wirken sich die niedrigeren variablen Kosten immer stärker aus.'},
    {text:'Die kritische Menge ist die Menge, ab der eine Maschine Gewinn erzielt.', fehler:'Das wäre die Gewinnschwelle. Die kritische Menge vergleicht zwei Maschinen miteinander.'},
    {text:'Die kritische Menge ist für die Entscheidung unwichtig, wenn man die geplante Absatzmenge kennt.', fehler:'Sie zeigt, wie sicher die Entscheidung ist: Liegt die geplante Menge knapp daneben, kann eine kleine Planabweichung die Entscheidung umkehren.'}
  ],
  hinweise:['Was passiert mit den Gesamtkosten beider Maschinen genau an der kritischen Menge?', 'Bei kleinen Mengen zählen vor allem die fixen Kosten.', 'Bei großen Mengen zählen vor allem die variablen Kosten je Stück.'],
  merke:'Unterhalb der kritischen Menge ist die Maschine mit den niedrigeren fixen Kosten günstiger, oberhalb die mit den niedrigeren variablen Kosten.'
},
{
  id:'IT3', modul:'IT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Kosten, Gewinn oder Rentabilität?',
  tags:['Investitionsrechnung','Theorie','Verfahren'],
  text:'Maschine II ist teurer in der Anschaffung, hat aber niedrigere Gesamtkosten und erzielt einen höheren Gewinn. Ihre Rentabilität ist dennoch niedriger als die von Maschine I.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der Kostenvergleich berücksichtigt keine Erlöse – er passt, wenn beide Maschinen gleiche Leistungen zum gleichen Preis erbringen.', richtig:true, weg:'Unterscheiden sich Preise oder Mengen, braucht man den Gewinnvergleich.'},
    {text:'Die Rentabilität ist niedriger, weil Maschine II deutlich mehr Kapital bindet.', richtig:true, weg:'Rentabilität = (Gewinn + Zinsen) ÷ durchschnittlich gebundenes Kapital × 100.'},
    {text:'Ist das Kapital knapp, spricht die höhere Rentabilität für Maschine I.', richtig:true, weg:'Die Rentabilität zeigt, wie gut sich das eingesetzte Kapital verzinst.'},
    {text:'Der höhere Gewinn beweist, dass Maschine II in jedem Fall die bessere Wahl ist.', fehler:'Der Gewinn sagt nichts über den Kapitaleinsatz. Deshalb ergänzt man den Rentabilitätsvergleich.'},
    {text:'Bei der Rentabilität werden die kalkulatorischen Zinsen abgezogen, weil sie Kosten sind.', fehler:'Sie werden zum Gewinn addiert: Gezeigt werden soll die gesamte Verzinsung des Kapitals.'}
  ],
  hinweise:['Welches Verfahren berücksichtigt Erlöse, welches den Kapitaleinsatz?', 'Rentabilität = (Gewinn + Zinsen) ÷ durchschnittlich gebundenes Kapital × 100.', 'Ein höherer Gewinn kann mit einem viel höheren Kapitaleinsatz erkauft sein.'],
  merke:'Kostenvergleich: nur Kosten. Gewinnvergleich: Erlöse und Kosten. Rentabilitätsvergleich: Erfolg im Verhältnis zum gebundenen Kapital.'
},
{
  id:'IT4', modul:'IT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Amortisationszeit deuten',
  tags:['Investitionsrechnung','Theorie','Amortisation'],
  text:'Für Maschine I ergibt sich eine Amortisationszeit von 3,75 Jahren, für Maschine II von 4,12 Jahren. Beide werden 8 Jahre genutzt.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Nach 3,75 Jahren ist das in Maschine I eingesetzte Kapital über Gewinn und Abschreibungen zurückgeflossen.', richtig:true, weg:'Rückfluss je Jahr = Gewinn + Abschreibung.'},
    {text:'Die Amortisationsrechnung beurteilt vor allem das Risiko: Je kürzer, desto schneller ist das Kapital zurück.', richtig:true, weg:'Sie ist ein Risikomaß, kein Maß für den Erfolg.'},
    {text:'Die Abschreibung wird zum Gewinn addiert, weil sie Kosten ohne Auszahlung sind und als Geld im Unternehmen bleiben.', richtig:true, weg:'Abschreibungen fließen über die Verkaufspreise zurück, ohne dass Geld ausgegeben wird.'},
    {text:'Die Maschine mit der kürzeren Amortisationszeit erzielt immer den höheren Gewinn.', fehler:'Nicht unbedingt – über die gesamte Nutzungsdauer kann die andere Maschine mehr erwirtschaften.'},
    {text:'Liegt die Amortisationszeit über der Nutzungsdauer, ist das unbedenklich.', fehler:'Dann fließt das eingesetzte Kapital während der Nutzung nicht vollständig zurück.'}
  ],
  hinweise:['Was fließt jährlich an Geld zurück?', 'Amortisationszeit = (Anschaffungswert − Restwert) ÷ (Gewinn + Abschreibung).', 'Vergleiche die Amortisationszeit mit der Nutzungsdauer.'],
  merke:'Je kürzer die Amortisationszeit, desto geringer das Risiko. Sie muss deutlich unter der Nutzungsdauer liegen.'
},
{
  id:'IT5', modul:'IT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Grenzen statischer Verfahren',
  tags:['Investitionsrechnung','Theorie','Grenzen'],
  text:'Die Geschäftsleitung entscheidet sich nach Kosten-, Gewinn-, Rentabilitäts- und Amortisationsvergleich für eine Maschine.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Statische Verfahren rechnen mit Durchschnittswerten eines Jahres – Schwankungen über die Nutzungsdauer bleiben unberücksichtigt.', richtig:true, weg:'Daher der Name „statisch“.'},
    {text:'Die Ergebnisse gelten nur für die geplante Absatzmenge; weicht sie ab, kann sich die Entscheidung ändern.', richtig:true, weg:'Deshalb ist die kritische Menge wichtig.'},
    {text:'Qualitative Gründe – Lieferzeit, Service, Bedienung, Umweltwirkung – fließen in die Rechnung nicht ein und müssen zusätzlich beurteilt werden.', richtig:true, weg:'Zum Beispiel mit einer Nutzwertanalyse.'},
    {text:'Wann Einnahmen und Ausgaben anfallen, wird bei statischen Verfahren genau berücksichtigt.', fehler:'Gerade nicht – das leisten erst dynamische Verfahren wie die Kapitalwertmethode.'},
    {text:'Führen alle Verfahren zum selben Ergebnis, ist die Entscheidung ohne jedes Risiko.', fehler:'Auch dann beruhen alle Verfahren auf geplanten Zahlen.'}
  ],
  hinweise:['Mit welchen Zahlen rechnen die Verfahren – mit einzelnen Jahren oder mit Durchschnitten?', 'Was passiert, wenn die geplante Menge nicht erreicht wird?', 'Was lässt sich nicht in Euro ausdrücken?'],
  merke:'Statische Verfahren sind einfach, rechnen aber mit Durchschnittswerten und Planmengen. Qualitative Gründe gehören zusätzlich in die Entscheidung.'
},
/* ---------- Modul 8 · Special: Dynamische Verfahren (Relevanz mit der Fachlehrkraft abstimmen!) ---------- */
dyn({id:'ID1', modul:'ID', stufe:1, titel:'Kapitalwert einer Investition',
  text:'Die Metallbau Kern GmbH plant den Kauf einer Laserschneidanlage. Nutzungsdauer 4 Jahre, die jährlichen Rückflüsse (Einzahlungsüberschüsse) stehen in der Tabelle.',
  alts:[{name:'Anlage', aw:100000, rf:[30000, 35000, 40000, 30000]}], zinsen:[8],
  merke:'Relevanz mit der Fachlehrkraft abstimmen! · Kapitalwert > 0: Die Investition bringt mehr als die Verzinsung zum Kalkulationszinssatz – sie ist vorteilhaft.'}),
dyn({id:'ID2', modul:'ID', stufe:2, titel:'Kapitalwert mit Restwert',
  text:'Ein Logistikunternehmen prüft die Anschaffung eines Lagerroboters für 5 Jahre.',
  alts:[{name:'Lagerroboter', aw:150000, rf:[40000, 45000, 45000, 40000, 30000], rw:10000}], zinsen:[6],
  merke:'Relevanz mit der Fachlehrkraft abstimmen! · Der Restwert fließt am Ende des letzten Jahres zu – er wird deshalb mit dem Abzinsungsfaktor des letzten Jahres abgezinst.'}),
dyn({id:'ID3', modul:'ID', stufe:2, titel:'Zwei Investitionen vergleichen',
  text:'Für eine Verpackungslinie stehen zwei Anlagen zur Wahl. Beide kosten gleich viel, die Rückflüsse verteilen sich aber unterschiedlich auf die Jahre.',
  alts:[{name:'Anlage A', aw:80000, rf:[25000, 25000, 25000, 25000]}, {name:'Anlage B', aw:80000, rf:[10000, 20000, 30000, 45000]}], zinsen:[7],
  merke:'Relevanz mit der Fachlehrkraft abstimmen! · Vorteilhafter ist die Investition mit dem höheren Kapitalwert. Spätere Rückflüsse sind heute weniger wert – sie werden stärker abgezinst.'}),
dyn({id:'ID4', modul:'ID', stufe:3, titel:'Interner Zinsfuß durch Interpolation',
  text:'Eine Druckerei plant eine neue Falzmaschine.',
  alts:[{name:'Falzmaschine', aw:50000, rf:[15000, 20000, 20000, 10000]}], zinsen:[10, 14], kalk:8,
  merke:'Relevanz mit der Fachlehrkraft abstimmen! · Der interne Zinsfuß ist die Verzinsung, die die Investition selbst erwirtschaftet. Liegt er über dem Kalkulationszinssatz, ist die Investition vorteilhaft.'}),
dyn({id:'ID5', modul:'ID', stufe:3, titel:'Interner Zinsfuß und Entscheidung',
  text:'Ein Bauunternehmen überlegt, einen Minibagger zu kaufen, statt ihn weiter zu mieten.',
  alts:[{name:'Minibagger', aw:120000, rf:[30000, 40000, 40000, 30000, 20000]}], zinsen:[10, 13], kalk:12,
  merke:'Relevanz mit der Fachlehrkraft abstimmen! · Ein Kapitalwert ist positiv, der andere negativ – dazwischen liegt der interne Zinsfuß (Kapitalwert = 0).'}),
{
  id:'ID6', modul:'ID', typ:'berechnung', mehrfach:true, stufe:0, titel:'Statische und dynamische Verfahren',
  tags:['Investitionsrechnung','Theorie','Dynamische Verfahren'],
  text:'Neben den statischen Verfahren (Kosten-, Gewinn-, Rentabilitäts-, Amortisationsvergleich) gibt es dynamische Verfahren wie die Kapitalwertmethode und die Methode des internen Zinsfußes.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Dynamische Verfahren berücksichtigen, wann eine Zahlung anfällt: Geld, das später fließt, ist heute weniger wert.', richtig:true, weg:'Deshalb werden alle Zahlungen auf den Zeitpunkt der Investition abgezinst.'},
    {text:'Dynamische Verfahren betrachten die gesamte Nutzungsdauer, statische Verfahren meist nur ein durchschnittliches Jahr.', richtig:true, weg:'Statische Verfahren rechnen mit Durchschnittswerten einer Periode.'},
    {text:'Dynamische Verfahren rechnen mit Ein- und Auszahlungen (Rückflüssen), nicht mit Kosten und Leistungen.', richtig:true, weg:'Rückfluss = Einzahlungen − Auszahlungen eines Jahres.'},
    {text:'Bei dynamischen Verfahren spielt der Kalkulationszinssatz keine Rolle.', fehler:'Mit dem Kalkulationszinssatz wird abgezinst – er ist die Mindestverzinsung, die der Investor erwartet.'},
    {text:'Dynamische Verfahren liefern sichere Ergebnisse, weil die künftigen Rückflüsse genau bekannt sind.', fehler:'Die Rückflüsse sind geschätzt – je weiter in der Zukunft, desto unsicherer.'}
  ],
  hinweise:['Ist 1.000 € in fünf Jahren genauso viel wert wie 1.000 € heute?', 'Mit welchen Größen rechnen die statischen Verfahren?', 'Woher kennt man die künftigen Rückflüsse?'],
  merke:'Relevanz mit der Fachlehrkraft abstimmen! · Statisch: Durchschnittsperiode, Kosten und Erlöse · Dynamisch: gesamte Nutzungsdauer, Zahlungen, Zeitpunkt der Zahlung zählt.'
},
{
  id:'ID7', modul:'ID', typ:'berechnung', mehrfach:true, stufe:0, titel:'Den Kapitalwert deuten',
  tags:['Investitionsrechnung','Theorie','Kapitalwertmethode'],
  text:'Für eine Investition mit einer Anschaffungsauszahlung von 100.000 € ergibt sich bei einem Kalkulationszinssatz von 8 % ein Kapitalwert von +11.584,50 €.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die Investition ist vorteilhaft.', richtig:true, weg:'Der Kapitalwert ist positiv.'},
    {text:'Die Investition verzinst das eingesetzte Kapital zu mehr als 8 %.', richtig:true, weg:'Bei genau 8 % Verzinsung wäre der Kapitalwert 0.'},
    {text:'Die Summe der abgezinsten Rückflüsse ist höher als die Anschaffungsauszahlung.', richtig:true, weg:'Kapitalwert = Summe der Barwerte − Anschaffungsauszahlung > 0.'},
    {text:'Das Unternehmen macht mit der Investition insgesamt genau 11.584,50 € Gewinn.', fehler:'Der Kapitalwert ist ein Überschuss bezogen auf heute – über die 8 % Verzinsung hinaus. Er ist kein Gewinn im Sinne der Buchführung.'},
    {text:'Bei einem höheren Kalkulationszinssatz steigt der Kapitalwert.', fehler:'Je höher der Zinssatz, desto stärker wird abgezinst – der Kapitalwert sinkt.'}
  ],
  hinweise:['Was bedeutet ein Kapitalwert von genau 0?', 'Was passiert mit den Barwerten, wenn der Zinssatz steigt?'],
  merke:'Relevanz mit der Fachlehrkraft abstimmen! · Kapitalwert > 0: vorteilhaft · = 0: Verzinsung genau zum Kalkulationszinssatz · < 0: nicht vorteilhaft.'
},
{
  id:'ID8', modul:'ID', typ:'berechnung', mehrfach:true, stufe:0, titel:'Den internen Zinsfuß deuten',
  tags:['Investitionsrechnung','Theorie','Interner Zinsfuß'],
  text:'Für eine Investition wurde ein interner Zinsfuß von 11,99 % ermittelt. Das Unternehmen rechnet mit einem Kalkulationszinssatz von 8 %.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Bei einem Zinssatz von 11,99 % ist der Kapitalwert der Investition 0.', richtig:true, weg:'So ist der interne Zinsfuß festgelegt.'},
    {text:'Die Investition ist vorteilhaft, weil der interne Zinsfuß über dem Kalkulationszinssatz liegt.', richtig:true, weg:'11,99 % > 8 %.'},
    {text:'Die Interpolation zwischen zwei Zinssätzen liefert nur einen Näherungswert.', richtig:true, weg:'Zwischen den beiden Kapitalwerten wird eine Gerade angenommen – der tatsächliche Verlauf ist gekrümmt.'},
    {text:'Würde die Investition vollständig mit einem Kredit zu 13 % finanziert, wäre sie trotzdem vorteilhaft.', fehler:'Die Investition erwirtschaftet nur rund 12 % – das reicht nicht für 13 % Kreditzinsen.'},
    {text:'Der interne Zinsfuß ist immer gleich dem Kalkulationszinssatz.', fehler:'Der Kalkulationszinssatz wird vorgegeben, der interne Zinsfuß ergibt sich aus den Zahlungen der Investition.'}
  ],
  hinweise:['Bei welchem Zinssatz ist der Kapitalwert gerade 0?', 'Vergleiche die erwirtschaftete Verzinsung mit den Kosten der Finanzierung.'],
  merke:'Relevanz mit der Fachlehrkraft abstimmen! · Interner Zinsfuß > Kalkulationszinssatz: vorteilhaft. Interpolation: i₁ − KW₁ × (i₂ − i₁) ÷ (KW₂ − KW₁).'
},
/* ---------- Modul 8 · Darlehensarten: Tilgungspläne ---------- */
darlehen({id:'FD1', modul:'FD', stufe:1, titel:'Tilgungsplan bei Ratentilgung', firma:'Hagen Metallbau GmbH', zweck:'kauft eine neue Biegemaschine', B:100000, p:6, n:4, arten:['rate'],
  merke:'Bei der Ratentilgung bleibt die Tilgung gleich, die Zinsen sinken – die Belastung wird jedes Jahr kleiner.'}),
darlehen({id:'FD2', modul:'FD', stufe:1, titel:'Tilgungsplan beim Fälligkeitsdarlehen', firma:'Druckerei Brandl KG', zweck:'erweitert die Lagerhalle', B:80000, p:5, n:5, arten:['faellig'],
  merke:'Beim Fälligkeitsdarlehen bleiben die Zinsen gleich hoch, weil die volle Schuld bis zum Ende besteht. Die gesamte Tilgung fällt im letzten Jahr an.'}),
darlehen({id:'FD3', modul:'FD', stufe:2, titel:'Tilgungsplan beim Annuitätendarlehen', firma:'Bäckerei Lindner GmbH', zweck:'kauft einen neuen Etagenbackofen', B:60000, p:6, n:4, arten:['ann'],
  merke:'Beim Annuitätendarlehen bleibt die jährliche Zahlung gleich. Weil die Zinsen sinken, steigt die Tilgung von Jahr zu Jahr.'}),
darlehen({id:'FD4', modul:'FD', stufe:2, titel:'Ratentilgung über fünf Jahre', firma:'Kunststofftechnik Ott GmbH', zweck:'kauft eine Spritzgießmaschine', B:150000, p:7.5, n:5, arten:['rate']}),
darlehen({id:'FD5', modul:'FD', stufe:3, titel:'Annuitätendarlehen über fünf Jahre', firma:'Getränke Sommer GmbH', zweck:'modernisiert die Abfüllanlage', B:120000, p:5.5, n:5, arten:['ann']}),

/* ---------- Modul 9 · Darlehensarten vergleichen ---------- */
darlehen({id:'FV1', modul:'FV', stufe:2, titel:'Ratentilgung oder Fälligkeitsdarlehen?', firma:'Hagen Metallbau GmbH', zweck:'kauft eine Laserschneidanlage', B:100000, p:6, n:4, arten:['rate', 'faellig'],
  merke:'Die Ratentilgung kostet insgesamt weniger Zinsen, belastet aber die Liquidität von Anfang an. Das Fälligkeitsdarlehen schont die Liquidität – dafür muss am Ende der volle Betrag bereitstehen.'}),
darlehen({id:'FV2', modul:'FV', stufe:2, titel:'Ratentilgung oder Annuitätendarlehen?', firma:'Schreinerei Wolf GmbH', zweck:'kauft eine Kantenanleimmaschine', B:80000, p:5, n:4, arten:['rate', 'ann'],
  merke:'Beim Annuitätendarlehen wird anfangs weniger getilgt als bei der Ratentilgung. Deshalb sind die Zinsen insgesamt höher – dafür ist die Belastung jedes Jahr gleich und gut planbar.'}),
darlehen({id:'FV3', modul:'FV', stufe:3, titel:'Annuitäten- oder Fälligkeitsdarlehen?', firma:'Druckerei Brandl KG', zweck:'kauft eine Falzmaschine', B:50000, p:6, n:5, arten:['ann', 'faellig']}),

/* ---------- Modul 10 · Kredit oder Leasing ---------- */
darlehen({id:'FL1', modul:'FL', stufe:1, titel:'Kredit oder Leasing – Zahlungen vergleichen', firma:'Hagen Metallbau GmbH', zweck:'eine CNC-Drehmaschine', B:80000, p:7, n:4, arten:['rate'],
  leasing:{rate:2050},
  merke:'Leasing ist meist teurer als ein Kredit – dafür bleibt die Liquidität geschont, und nach der Mietzeit kann auf neue Technik umgestiegen werden. Beim Kredit gehört die Anlage danach dem Unternehmen.'}),
darlehen({id:'FL2', modul:'FL', stufe:2, titel:'Leasingrate in Prozent und Sonderzahlung', firma:'Bäckerei Lindner GmbH', zweck:'einen Lieferwagen', B:60000, p:8, n:4, arten:['rate'],
  leasing:{satz:2.2, sonder:5},
  merke:'Leasing kann günstiger sein als ein Kredit – etwa bei hohen Kreditzinsen. Für einen fairen Vergleich zählt aber auch, wem die Anlage am Ende gehört.'}),
darlehen({id:'FL3', modul:'FL', stufe:3, titel:'Leasing mit Kaufoption', firma:'Kunststofftechnik Ott GmbH', zweck:'eine Fertigungsanlage', B:150000, p:6.5, n:5, arten:['rate'],
  leasing:{satz:1.9, kauf:10},
  merke:'Mit Kaufoption gehört die Anlage auch beim Leasing am Ende dem Unternehmen – so lassen sich beide Möglichkeiten fair vergleichen.'}),

/* ---------- Modul 11 · Skonto und Lieferantenkredit ---------- */
skonto({id:'FS1', modul:'FS', stufe:1, titel:'Wie teuer ist der Lieferantenkredit?', firma:'Hagen Metallbau GmbH', rb:23800, s:2, frist:10, ziel:30, fragen:['jahr'],
  merke:'Wer Skonto nicht nutzt, zahlt für wenige Tage Kredit einen sehr hohen Preis. Der Lieferantenkredit ist einer der teuersten Kredite.'}),
skonto({id:'FS2', modul:'FS', stufe:2, titel:'Skonto mit Kontoüberziehung', firma:'Druckerei Brandl KG', rb:14280, s:2, frist:10, ziel:30, p:12, fragen:['jahr', 'ueber'],
  merke:'Skonto lohnt sich fast immer – selbst wenn dafür das Konto überzogen werden muss.'}),
skonto({id:'FS3', modul:'FS', stufe:2, titel:'Skontosatz aus dem Skontobetrag', firma:'Schreinerei Wolf GmbH', rb:9520, sk:285.60, skGegeben:true, frist:8, ziel:45, fragen:['jahr']}),
skonto({id:'FS4', modul:'FS', stufe:3, titel:'Wenn sich Skonto nicht lohnt', firma:'Kunststofftechnik Ott GmbH', rb:35700, s:1, frist:10, ziel:60, p:12, fragen:['jahr', 'ueber'],
  merke:'Bei niedrigem Skontosatz und langem Zahlungsziel kann die Kontoüberziehung mehr kosten, als der Skonto bringt. Dann zahlt man besser erst am Ende des Zahlungsziels.'}),
skonto({id:'FS5', modul:'FS', stufe:3, titel:'Skontosatz berechnen und Überziehung prüfen', firma:'Getränke Sommer GmbH', rb:17850, sk:535.50, skGegeben:true, frist:14, ziel:60, p:13, fragen:['jahr', 'ueber']}),
/* ---------- Modul 12 · Kreditsicherheiten (Theorie) ----------
   mehrfach:true = alle zutreffenden ankreuzen; ohne mehrfach = genau eine Antwort (Fälle). */
{
  id:'FK1', modul:'FK', typ:'berechnung', mehrfach:true, stufe:1, titel:'Personal- und Realsicherheiten',
  tags:['Finanzierung','Kreditsicherheiten','Theorie'],
  text:'Die Hausbank der Hagen Metallbau GmbH verlangt für einen Investitionskredit Sicherheiten. Man unterscheidet Personalsicherheiten (eine weitere Person haftet) und Realsicherheiten (der Gläubiger erhält Rechte an einer Sache oder einem Recht).',
  frage:'Welche Zuordnungen sind richtig?',
  optionen:[
    {text:'Die Bürgschaft ist eine Personalsicherheit.', richtig:true, weg:'Neben dem Schuldner haftet eine weitere Person – der Bürge.'},
    {text:'Verpfändung, Sicherungsübereignung und Grundschuld sind Realsicherheiten.', richtig:true, weg:'Der Gläubiger erhält ein Recht an einer Sache: Pfandrecht, Sicherungseigentum oder Grundpfandrecht.'},
    {text:'Der Eigentumsvorbehalt sichert den Lieferanten, der auf Ziel verkauft.', richtig:true, weg:'Er sichert den Lieferantenkredit: Bis zur vollständigen Zahlung bleibt der Lieferant Eigentümer.'},
    {text:'Die Grundschuld ist eine Personalsicherheit, weil der Grundstückseigentümer persönlich haftet.', fehler:'Bei der Grundschuld haftet das Grundstück – sie ist ein Grundpfandrecht, also eine Realsicherheit.'},
    {text:'Bei einer Bürgschaft wird der Bürge Eigentümer einer Sache des Schuldners.', fehler:'Der Bürge erhält keine Sache. Er verpflichtet sich, für die Schuld einzustehen, wenn der Schuldner nicht zahlt.'}
  ],
  hinweise:['Haftet bei der Sicherheit eine Person oder eine Sache?', 'Wer gibt den Kredit beim Eigentumsvorbehalt – eine Bank oder ein Lieferant?', 'Grundpfandrechte sind Rechte an einem Grundstück.'],
  merke:'Personalsicherheit: eine weitere Person haftet (Bürgschaft). Realsicherheit: eine Sache oder ein Recht haftet (Pfand, Sicherungsübereignung, Grundschuld, Eigentumsvorbehalt).'
},
{
  id:'FK2', modul:'FK', typ:'berechnung', mehrfach:true, stufe:1, titel:'Bürgschaft: Merkmale',
  tags:['Finanzierung','Kreditsicherheiten','Bürgschaft'],
  text:'Die Gesellschafterin Petra Hagen bürgt gegenüber der Bank für einen Kredit über 50.000 € an die Hagen Metallbau GmbH.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Zahlt die GmbH nicht, kann die Bank Frau Hagen in Anspruch nehmen – sie haftet mit ihrem Privatvermögen.', richtig:true, weg:'Der Bürge verpflichtet sich, für die Schuld eines anderen einzustehen.'},
    {text:'Bei der Ausfallbürgschaft muss die Bank zuerst erfolglos gegen die GmbH vollstrecken (Einrede der Vorausklage).', richtig:true, weg:'Erst wenn beim Schuldner nichts zu holen ist, haftet der Bürge.'},
    {text:'Bei der selbstschuldnerischen Bürgschaft kann sich die Bank sofort an den Bürgen wenden, sobald der Schuldner nicht zahlt.', richtig:true, weg:'Der Bürge verzichtet auf die Einrede der Vorausklage. Banken verlangen fast immer diese Form.'},
    {text:'Eine Privatperson kann eine Bürgschaft auch mündlich wirksam übernehmen.', fehler:'Für Privatpersonen verlangt das Gesetz die Schriftform (§ 766 BGB). Nur Kaufleute können formfrei bürgen.'},
    {text:'Die Bürgschaft bleibt bestehen, auch wenn der Kredit vollständig zurückgezahlt ist.', fehler:'Die Bürgschaft hängt von der Schuld ab (akzessorisch). Ist der Kredit getilgt, erlischt sie.'}
  ],
  hinweise:['Wer haftet, wenn der Schuldner nicht zahlt?', 'Worin unterscheiden sich Ausfallbürgschaft und selbstschuldnerische Bürgschaft?', 'Was passiert mit der Bürgschaft, wenn es keine Schuld mehr gibt?'],
  merke:'Ausfallbürgschaft: Bürge haftet erst, wenn beim Schuldner nichts zu holen ist. Selbstschuldnerische Bürgschaft: Bürge haftet sofort – üblich bei Banken; ein Kaufmann bürgt immer selbstschuldnerisch.'
},
{
  id:'FK3', modul:'FK', typ:'berechnung', mehrfach:true, stufe:2, titel:'Bürgschaft: Vor- und Nachteile',
  tags:['Finanzierung','Kreditsicherheiten','Bürgschaft'],
  text:'Ein junges Unternehmen hat kaum Vermögen, das es als Sicherheit anbieten könnte. Der Inhaber überlegt, seinen Vater als Bürgen zu gewinnen.',
  frage:'Welche Aussagen beschreiben Vor- oder Nachteile der Bürgschaft richtig?',
  optionen:[
    {text:'Vorteil für den Kreditnehmer: Er braucht kein eigenes Vermögen als Sicherheit – entscheidend ist die Kreditwürdigkeit des Bürgen.', richtig:true, weg:'Deshalb ist die Bürgschaft gerade für Gründer wichtig.'},
    {text:'Vorteil für die Bank: Sie hat einen zweiten Schuldner, den sie in Anspruch nehmen kann.', richtig:true, weg:'Bei der selbstschuldnerischen Bürgschaft sogar ohne vorherige Klage gegen den Schuldner.'},
    {text:'Nachteil für den Bürgen: Er trägt ein hohes Risiko und haftet mit seinem ganzen Privatvermögen.', richtig:true, weg:'Er bekommt dafür keine Gegenleistung.'},
    {text:'Nachteil für die Bank: Die Sicherheit ist nur so viel wert wie die Zahlungsfähigkeit des Bürgen.', richtig:true, weg:'Gerät auch der Bürge in Schwierigkeiten, ist die Sicherheit wertlos.'},
    {text:'Vorteil für den Bürgen: Er wird Miteigentümer des Unternehmens.', fehler:'Der Bürge erhält keine Rechte am Unternehmen – nur das Risiko.'}
  ],
  hinweise:['Betrachte die Sicht von Kreditnehmer, Bank und Bürge getrennt.', 'Was bekommt der Bürge für sein Risiko?', 'Was passiert, wenn auch der Bürge nicht zahlen kann?'],
  merke:'Bürgschaft: einfach und ohne eigenes Vermögen des Schuldners möglich – ihr Wert hängt aber ganz an der Zahlungsfähigkeit des Bürgen.'
},
{
  id:'FK4', modul:'FK', typ:'berechnung', mehrfach:true, stufe:1, titel:'Arten des Eigentumsvorbehalts',
  tags:['Finanzierung','Kreditsicherheiten','Eigentumsvorbehalt'],
  text:'Die Stahlhandel Nord GmbH liefert Bleche auf Ziel an die Hagen Metallbau GmbH. In ihren Lieferbedingungen steht: „Die Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.“',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Einfacher Eigentumsvorbehalt: Der Lieferant bleibt Eigentümer, bis der Kaufpreis vollständig bezahlt ist; der Käufer wird sofort Besitzer.', richtig:true, weg:'Der Käufer kann die Ware nutzen, gehört ihm aber noch nicht.'},
    {text:'Der einfache Eigentumsvorbehalt erlischt, wenn die Ware verarbeitet, verbraucht, fest eingebaut oder an einen gutgläubigen Dritten verkauft wird.', richtig:true, weg:'Dann gibt es die Sache, an der der Lieferant Eigentum hat, nicht mehr – oder ein anderer hat Eigentum erworben.'},
    {text:'Verlängerter Eigentumsvorbehalt: Wird die Ware weiterverkauft oder verarbeitet, tritt der Käufer die Forderung aus dem Weiterverkauf im Voraus an den Lieferanten ab bzw. der Lieferant wird Eigentümer der neuen Sache.', richtig:true, weg:'Die Sicherheit „verlängert“ sich auf die Forderung oder das neue Produkt.'},
    {text:'Erweiterter Eigentumsvorbehalt: Das Eigentum geht erst über, wenn alle Forderungen aus der Geschäftsbeziehung bezahlt sind – nicht nur die einzelne Rechnung.', richtig:true, weg:'Er „erweitert“ die Sicherung auf weitere Forderungen gegen denselben Kunden.'},
    {text:'Beim Eigentumsvorbehalt darf der Käufer die Ware bis zur Zahlung nicht benutzen.', fehler:'Er ist Besitzer und darf sie nutzen – nur das Eigentum bleibt beim Lieferanten.'}
  ],
  hinweise:['Wer ist Eigentümer, wer ist Besitzer?', 'Was passiert mit dem Eigentum, wenn die Bleche zu einem Gehäuse verarbeitet werden?', '„Verlängert“ geht auf Weiterverkauf und Verarbeitung, „erweitert“ auf weitere Forderungen.'],
  merke:'Einfacher EV: Eigentum bis zur Zahlung. Verlängerter EV: Sicherung geht über auf Forderung oder neue Sache. Erweiterter EV: Eigentum erst, wenn alle Forderungen bezahlt sind.'
},
{
  id:'FK5', modul:'FK', typ:'berechnung', stufe:2, titel:'Eigentumsvorbehalt im Fall',
  tags:['Finanzierung','Kreditsicherheiten','Eigentumsvorbehalt'],
  text:'Ein Großhändler liefert 200 Bürostühle unter Eigentumsvorbehalt an ein Möbelhaus. Das Möbelhaus verkauft die Stühle an seine Kunden weiter, bevor es den Großhändler bezahlt hat.',
  frage:'Welche Art des Eigentumsvorbehalts schützt den Großhändler in diesem Fall?',
  optionen:[
    {text:'Der verlängerte Eigentumsvorbehalt – das Möbelhaus tritt die Forderungen gegen seine Kunden im Voraus an den Großhändler ab.', richtig:true,
     weg:'Mit dem Weiterverkauf erwerben die Kunden Eigentum. Der Großhändler ist dann nur noch über die abgetretenen Forderungen gesichert.'},
    {text:'Der einfache Eigentumsvorbehalt – der Großhändler kann die Stühle bei den Kunden des Möbelhauses abholen.',
     fehler:'Die Kunden erwerben gutgläubig Eigentum. Der einfache Eigentumsvorbehalt erlischt mit dem Weiterverkauf.'},
    {text:'Der erweiterte Eigentumsvorbehalt – er gilt automatisch für alle Kunden des Möbelhauses.',
     fehler:'Der erweiterte EV erfasst weitere Forderungen gegen das Möbelhaus, nicht die Ware bei dessen Kunden.'},
    {text:'Gar keiner – mit der Lieferung ist der Eigentumsvorbehalt erloschen.',
     fehler:'Der Eigentumsvorbehalt besteht nach der Lieferung weiter; er endet erst mit Zahlung, Weiterverkauf oder Verarbeitung.'}
  ],
  hinweise:['Wem gehören die Stühle, nachdem die Kunden sie gekauft und bezahlt haben?', 'Was bleibt dem Großhändler dann noch als Sicherheit?', 'Welche Art des EV erfasst den Weiterverkauf?'],
  merke:'Wird Ware zum Weiterverkauf geliefert, braucht der Lieferant den verlängerten Eigentumsvorbehalt – sonst ist er mit dem Weiterverkauf ungesichert.'
},
{
  id:'FK6', modul:'FK', typ:'berechnung', mehrfach:true, stufe:2, titel:'Eigentumsvorbehalt: Vor- und Nachteile',
  tags:['Finanzierung','Kreditsicherheiten','Eigentumsvorbehalt'],
  text:'Ein Lieferant liefert grundsätzlich nur unter Eigentumsvorbehalt.',
  frage:'Welche Aussagen beschreiben Vor- oder Nachteile richtig?',
  optionen:[
    {text:'Vorteil für den Lieferanten: Zahlt der Kunde nicht, kann er nach Rücktritt vom Vertrag die Ware zurückverlangen.', richtig:true, weg:'Er ist ja noch Eigentümer.'},
    {text:'Vorteil für den Lieferanten: In der Insolvenz des Kunden kann er die Ware aussondern – sie gehört nicht zur Insolvenzmasse.', richtig:true, weg:'Andere Gläubiger gehen leer aus, der Lieferant bekommt seine Ware.'},
    {text:'Vorteil für den Käufer: Er kann die Ware sofort nutzen oder verkaufen, ohne einen Bankkredit aufzunehmen.', richtig:true, weg:'Der Lieferant gewährt den Kredit – gesichert durch den Eigentumsvorbehalt.'},
    {text:'Nachteil für den Lieferanten: Der einfache Eigentumsvorbehalt erlischt leicht, z. B. durch Verarbeitung oder Weiterverkauf; die zurückgenommene Ware ist oft gebraucht und weniger wert.', richtig:true, weg:'Deshalb wird meist der verlängerte oder erweiterte EV vereinbart.'},
    {text:'Der Eigentumsvorbehalt muss im Grundbuch eingetragen werden und ist deshalb teuer.', fehler:'Er wird einfach im Kaufvertrag oder in den Lieferbedingungen vereinbart – ohne Kosten.'}
  ],
  hinweise:['Was nützt es dem Lieferanten, noch Eigentümer zu sein?', 'Was passiert in der Insolvenz des Kunden?', 'Wann erlischt der einfache Eigentumsvorbehalt?'],
  merke:'Eigentumsvorbehalt: einfach und kostenlos vereinbart, stark in der Insolvenz – aber der einfache EV erlischt bei Verarbeitung oder Weiterverkauf.'
},
{
  id:'FK7', modul:'FK', typ:'berechnung', mehrfach:true, stufe:1, titel:'Verpfändung (Faustpfand)',
  tags:['Finanzierung','Kreditsicherheiten','Verpfändung'],
  text:'Ein Unternehmer verpfändet seiner Bank ein Wertpapierdepot über 80.000 € als Sicherheit für einen Kredit (Lombardkredit).',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der Unternehmer bleibt Eigentümer, die Bank erhält den Besitz (bzw. die Verfügungsmacht) und ein Pfandrecht.', richtig:true, weg:'Das Pfandrecht entsteht durch Einigung und Übergabe.'},
    {text:'Zahlt der Schuldner nicht, darf die Bank das Pfand verwerten, z. B. die Wertpapiere verkaufen.', richtig:true, weg:'Aus dem Erlös wird die Forderung beglichen; ein Überschuss steht dem Schuldner zu.'},
    {text:'Vorteil für die Bank: Sie hat die Sache in der Hand – der Schuldner kann sie nicht beiseiteschaffen.', richtig:true, weg:'Die Verwertung ist einfach und sicher.'},
    {text:'Nachteil für den Schuldner: Er kann die verpfändete Sache nicht mehr nutzen – für Maschinen oder Fahrzeuge ist die Verpfändung deshalb ungeeignet.', richtig:true, weg:'Dafür gibt es die Sicherungsübereignung.'},
    {text:'Mit der Verpfändung wird die Bank Eigentümerin der Wertpapiere.', fehler:'Eigentümer bleibt der Schuldner. Die Bank hat nur ein Pfandrecht.'}
  ],
  hinweise:['Wer ist nach der Verpfändung Eigentümer, wer Besitzer?', 'Was darf die Bank tun, wenn der Kredit nicht zurückgezahlt wird?', 'Welche Gegenstände eignen sich, welche nicht?'],
  merke:'Verpfändung: Schuldner bleibt Eigentümer, Gläubiger erhält Besitz und Pfandrecht. Geeignet für Wertpapiere, Schmuck, Sparguthaben – nicht für Sachen, die im Betrieb gebraucht werden.'
},
{
  id:'FK8', modul:'FK', typ:'berechnung', mehrfach:true, stufe:1, titel:'Sicherungsübereignung',
  tags:['Finanzierung','Kreditsicherheiten','Sicherungsübereignung'],
  text:'Die Bäckerei Lindner GmbH finanziert einen Lieferwagen mit einem Bankkredit. Die Bank lässt sich den Lieferwagen zur Sicherheit übereignen; die Zulassungsbescheinigung Teil II (Fahrzeugbrief) behält sie.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die Bank wird (treuhänderisch) Eigentümerin, die Bäckerei bleibt Besitzerin und darf den Wagen weiter nutzen.', richtig:true, weg:'Die Übergabe wird durch eine Vereinbarung ersetzt (Besitzkonstitut).'},
    {text:'Ist der Kredit zurückgezahlt, fällt das Eigentum an die Bäckerei zurück.', richtig:true, weg:'Die Sicherungsübereignung gilt nur für die Dauer des Kredits.'},
    {text:'Vorteil für den Schuldner: Er kann mit dem Gegenstand weiterarbeiten und daraus die Raten verdienen.', richtig:true, weg:'Deshalb ist sie die typische Sicherheit für Maschinen und Fahrzeuge.'},
    {text:'Nachteil für die Bank: Der Gegenstand verliert an Wert, kann beschädigt oder unerlaubt an einen gutgläubigen Dritten verkauft werden.', richtig:true, weg:'Die Bank hat die Sache nicht in der Hand und kann sie kaum kontrollieren.'},
    {text:'Bei der Sicherungsübereignung muss der Lieferwagen bis zur Rückzahlung bei der Bank abgestellt werden.', fehler:'Das wäre eine Verpfändung. Bei der Sicherungsübereignung bleibt der Wagen im Betrieb.'}
  ],
  hinweise:['Wer ist Eigentümer, wer Besitzer – und wie ist es bei der Verpfändung?', 'Warum behält die Bank den Fahrzeugbrief?', 'Welche Risiken hat die Bank, wenn sie die Sache nicht selbst hat?'],
  merke:'Sicherungsübereignung: Bank wird Eigentümerin, Schuldner bleibt Besitzer und nutzt die Sache weiter. Ideal für Maschinen und Fahrzeuge – riskant für die Bank wegen Wertverlust und fehlender Kontrolle.'
},
{
  id:'FK9', modul:'FK', typ:'berechnung', stufe:2, titel:'Verpfändung oder Sicherungsübereignung?',
  tags:['Finanzierung','Kreditsicherheiten','Verpfändung','Sicherungsübereignung'],
  text:'Die Druckerei Brandl KG braucht einen Kredit. Als Sicherheit bietet sie ihre Druckmaschine an, die sie täglich in der Produktion einsetzt.',
  frage:'Welche Kreditsicherheit eignet sich für die Druckmaschine?',
  optionen:[
    {text:'Sicherungsübereignung – die Maschine bleibt im Betrieb und kann weiter genutzt werden.', richtig:true,
     weg:'Die Bank wird Eigentümerin, die Druckerei bleibt Besitzerin. So kann die Maschine weiter Geld verdienen.'},
    {text:'Verpfändung – die Bank nimmt die Maschine bis zur Rückzahlung in Verwahrung.',
     fehler:'Dann könnte die Druckerei nicht mehr produzieren und den Kredit nicht zurückzahlen.'},
    {text:'Grundschuld – sie wird auf die Maschine im Grundbuch eingetragen.',
     fehler:'Ins Grundbuch werden nur Rechte an Grundstücken eingetragen, nicht an beweglichen Sachen.'},
    {text:'Eigentumsvorbehalt – die Bank behält sich das Eigentum an der Maschine vor.',
     fehler:'Einen Eigentumsvorbehalt kann nur der Verkäufer vereinbaren, nicht eine Bank.'}
  ],
  hinweise:['Braucht die Druckerei die Maschine während der Kreditlaufzeit?', 'Bei welcher Sicherheit bleibt der Schuldner Besitzer?', 'Ins Grundbuch kommen nur Grundstücke.'],
  merke:'Wird die Sache im Betrieb gebraucht: Sicherungsübereignung. Wird sie nicht gebraucht (Wertpapiere, Schmuck): Verpfändung.'
},
{
  id:'FK10', modul:'FK', typ:'berechnung', mehrfach:true, stufe:2, titel:'Grundschuld: Merkmale',
  tags:['Finanzierung','Kreditsicherheiten','Grundschuld'],
  text:'Die Kunststofftechnik Ott GmbH baut eine neue Produktionshalle und nimmt dafür ein Darlehen über 1,2 Mio. € auf. Die Bank lässt eine Grundschuld auf das Betriebsgrundstück eintragen.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die Grundschuld ist ein Pfandrecht an einem Grundstück; sie wird notariell beurkundet und in Abteilung III des Grundbuchs eingetragen.', richtig:true, weg:'Ohne Eintragung im Grundbuch entsteht sie nicht.'},
    {text:'Zahlt der Schuldner nicht, kann die Bank die Zwangsversteigerung oder Zwangsverwaltung des Grundstücks betreiben.', richtig:true, weg:'Aus dem Erlös bzw. den Mieteinnahmen wird die Forderung bezahlt.'},
    {text:'Die Grundschuld ist nicht an eine bestimmte Forderung gebunden – sie bleibt nach der Tilgung bestehen und kann für einen neuen Kredit genutzt werden.', richtig:true, weg:'Anders als die Hypothek, die mit der Forderung erlischt (akzessorisch).'},
    {text:'Bei mehreren Grundschulden entscheidet der Rang im Grundbuch, wer bei einer Versteigerung zuerst befriedigt wird.', richtig:true, weg:'Eine erstrangige Grundschuld ist deshalb mehr wert.'},
    {text:'Für eine Grundschuld genügt ein schriftlicher Vertrag zwischen Bank und Kreditnehmer.', fehler:'Notarielle Beurkundung bzw. Beglaubigung und Eintragung ins Grundbuch sind nötig.'}
  ],
  hinweise:['Wo wird eine Grundschuld eingetragen?', 'Was kann die Bank tun, wenn der Kredit nicht bedient wird?', 'Was unterscheidet die Grundschuld von der Hypothek?'],
  merke:'Grundschuld: Pfandrecht am Grundstück, Eintragung im Grundbuch (Abt. III), nicht an eine Forderung gebunden – deshalb bei Banken beliebter als die Hypothek.'
},
{
  id:'FK11', modul:'FK', typ:'berechnung', mehrfach:true, stufe:2, titel:'Grundschuld: Vor- und Nachteile',
  tags:['Finanzierung','Kreditsicherheiten','Grundschuld'],
  text:'Ein Unternehmen überlegt, ob es einen langfristigen Kredit mit einer Grundschuld absichern soll.',
  frage:'Welche Aussagen beschreiben Vor- oder Nachteile richtig?',
  optionen:[
    {text:'Vorteil für die Bank: Grundstücke verlieren kaum an Wert und können nicht beiseitegeschafft werden – eine sehr sichere Sicherheit.', richtig:true, weg:'Deshalb gibt es grundpfandrechtlich gesicherte Kredite meist zu günstigeren Zinsen.'},
    {text:'Vorteil für den Kreditnehmer: Er kann Grundstück und Gebäude weiter uneingeschränkt nutzen; auch hohe und langfristige Kredite werden möglich.', richtig:true, weg:'Typisch für Bau- und Investitionsfinanzierungen.'},
    {text:'Vorteil: Nach der Tilgung kann die Grundschuld für einen neuen Kredit wiederverwendet werden.', richtig:true, weg:'Das spart erneute Notar- und Grundbuchkosten.'},
    {text:'Nachteil: Bestellung und Löschung kosten Notar- und Grundbuchgebühren und sind aufwendig.', richtig:true, weg:'Für kleine, kurzfristige Kredite lohnt sich das kaum.'},
    {text:'Die Bank beleiht das Grundstück in der Regel zum vollen Marktwert.', fehler:'Sie setzt einen vorsichtigen Beleihungswert an und beleiht davon nur einen Teil (Beleihungsgrenze).'}
  ],
  hinweise:['Wie sicher ist ein Grundstück im Vergleich zu einer Maschine?', 'Was kostet eine Grundschuld?', 'Für welche Kredite lohnt sich der Aufwand?'],
  merke:'Grundschuld: sehr sicher, für hohe und langfristige Kredite – aber nur mit Grundbesitz möglich und mit Kosten verbunden.'
},
{
  id:'FK12', modul:'FK', typ:'berechnung', stufe:3, titel:'Welche Sicherheit passt?',
  tags:['Finanzierung','Kreditsicherheiten','Entscheidung'],
  text:'Die Schreinerei Wolf GmbH ist erst zwei Jahre alt und will einen Betriebsmittelkredit über 30.000 €. Grundstücke besitzt sie nicht, die Maschinen sind bereits an eine andere Bank sicherungsübereignet. Der Geschäftsführer Jan Wolf hat ein gutes Einkommen und ein privates Wertpapierdepot.',
  frage:'Welche Sicherheiten kommen für die Bank in Frage?',
  optionen:[
    {text:'Eine selbstschuldnerische Bürgschaft von Jan Wolf und/oder die Verpfändung seines Wertpapierdepots.', richtig:true,
     weg:'Das Unternehmen selbst hat kaum freie Sicherheiten – also werden Person und Privatvermögen des Geschäftsführers herangezogen.'},
    {text:'Eine Grundschuld auf das Betriebsgrundstück.',
     fehler:'Die Schreinerei besitzt kein Grundstück.'},
    {text:'Eine erneute Sicherungsübereignung der Maschinen an die neue Bank.',
     fehler:'Die Maschinen gehören bereits (zur Sicherheit) der anderen Bank – sie können nicht ein zweites Mal übereignet werden.'},
    {text:'Ein Eigentumsvorbehalt der Bank an den künftig gekauften Waren.',
     fehler:'Einen Eigentumsvorbehalt vereinbart nur der Verkäufer der Ware, nicht die Bank.'}
  ],
  hinweise:['Welche Vermögensgegenstände des Unternehmens sind noch frei?', 'Wer außer dem Unternehmen könnte haften?', 'Welche Sicherheit kann nur ein Lieferant vereinbaren?'],
  merke:'Hat ein Unternehmen keine freien Sicherheiten, verlangen Banken oft Bürgschaften oder Privatvermögen der Inhaber bzw. Geschäftsführer.'
},
{
  id:'FK13', modul:'FK', typ:'berechnung', mehrfach:true, stufe:3, titel:'Kreditsicherheiten im Überblick',
  tags:['Finanzierung','Kreditsicherheiten','Theorie'],
  text:'Vergleiche Bürgschaft, Verpfändung, Sicherungsübereignung und Grundschuld.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Bei Verpfändung bleibt der Schuldner Eigentümer, bei der Sicherungsübereignung wird es der Gläubiger.', richtig:true, weg:'Dafür ist es beim Besitz umgekehrt.'},
    {text:'Bei der Sicherungsübereignung bleibt der Schuldner Besitzer, bei der Verpfändung erhält der Gläubiger den Besitz.', richtig:true, weg:'Deshalb kann der Schuldner bei der Sicherungsübereignung weiterarbeiten.'},
    {text:'Bürgschaft und Hypothek erlöschen mit der Forderung, die Grundschuld nicht.', richtig:true, weg:'Bürgschaft und Hypothek sind akzessorisch, die Grundschuld ist abstrakt.'},
    {text:'Für bewegliche Sachen gibt es eine Eintragung im Grundbuch.', fehler:'Das Grundbuch betrifft nur Grundstücke.'},
    {text:'Bei der Grundschuld wird die Bank Eigentümerin des Grundstücks.', fehler:'Eigentümer bleibt der Schuldner. Die Bank erhält nur ein Pfandrecht am Grundstück.'}
  ],
  hinweise:['Lege dir eine Tabelle an: Eigentümer – Besitzer – Nutzung.', 'Welche Sicherheiten hängen am Bestand der Forderung?', 'Wo liegt die Sache bei welcher Sicherheit?'],
  merke:'Verpfändung: Schuldner Eigentümer, Gläubiger Besitzer. Sicherungsübereignung: Gläubiger Eigentümer, Schuldner Besitzer. Grundschuld: Recht am Grundstück, unabhängig von der Forderung.'
},
blBau('rechnung', {id:'FK14', modul:'FK', stufe:2, titel:'Sicherungsübereignung: Reicht die Sicherheit?', tags:['Finanzierung', 'Kreditsicherheiten', 'Sicherungsübereignung', 'Rechnung'], kopf:'Sicherungsgut',
  text:'Die Druckerei Brandl KG braucht einen Kredit über {kr@0}. Als Sicherheit bietet sie der Bank an, drei Gegenstände zur Sicherheit zu übereignen. Die Bank beleiht den Zeitwert nur zu einem Teil (Beleihungsgrenze), weil sie bei einer Verwertung mit Abschlägen rechnet.'
    + '<br>Lieferwagen: Zeitwert {zw@0}, Beleihungsgrenze {bg@0} · Druckmaschine: Zeitwert {zw@1}, Beleihungsgrenze {bg@1} · Gabelstapler: Zeitwert {zw@2}, Beleihungsgrenze {bg@2}',
  spalten:['Lieferwagen', 'Druckmaschine', 'Gabelstapler', 'Summe'],
  zeilen:[{id:'kr', t:'Kreditbedarf', e:'€', aus:true}, {id:'zw', t:'Zeitwert', e:'€', aus:true}, {id:'bg', t:'Beleihungsgrenze', e:'%', aus:true},
    {id:'bw', t:'Beleihungswert = Zeitwert × Beleihungsgrenze', kurz:'Beleihungswert', e:'€', fs:['zw * bg / 100', 'zw * bg / 100', 'zw * bg / 100', 'bw@0 + bw@1 + bw@2']}],
  werte:[{kr:65000, zw:32000, bg:50}, {zw:95000, bg:40}, {zw:18000, bg:50}, {}],
  sets:[[{kr:50000, zw:28000, bg:50}, {zw:70000, bg:40}, {zw:16000, bg:50}, {}], [{kr:75000, zw:40000, bg:60}, {zw:120000, bg:40}, {zw:22000, bg:50}, {}], [{kr:45000, zw:24000, bg:50}, {zw:60000, bg:40}, {zw:12000, bg:60}, {}]],
  wahl:[{id:'w1', t:'Reicht der Beleihungswert für den Kreditbedarf?', opts:['Ja, der Beleihungswert deckt den Kredit.', 'Nein, die Bank wird eine zusätzliche Sicherheit verlangen.'], r:'bw@3 >= kr@0 ? 0 : 1'},
        {id:'w2', t:'Wer ist nach der Sicherungsübereignung Eigentümer und wer Besitzer des Lieferwagens?', opts:['Die Bank ist Eigentümerin, die Druckerei bleibt Besitzerin und nutzt ihn weiter.', 'Die Druckerei bleibt Eigentümerin, die Bank wird Besitzerin.', 'Die Bank wird Eigentümerin und Besitzerin; der Lieferwagen wird abgeholt.'], r:'0'}],
  hinweise:['Beleihungswert = Zeitwert × Beleihungsgrenze ÷ 100.', 'Die Summe der Beleihungswerte mit dem Kreditbedarf vergleichen.'],
  merke:'Sicherungsübereignung: Die Bank wird Eigentümerin, der Kreditnehmer bleibt Besitzer und nutzt die Sache weiter · beliehen wird nur ein Teil des Zeitwerts.'}),
blBau('zuordnung', {id:'FK15', modul:'FK', stufe:2, titel:'Eigentumsvorbehalt: welche Form – und wann erlischt er?', tags:['Finanzierung', 'Kreditsicherheiten', 'Eigentumsvorbehalt'],
  text:'Die Papiergroßhandlung Kurz liefert unter Eigentumsvorbehalt. Ordne zu.', kategorien:['einfacher Eigentumsvorbehalt', 'verlängerter Eigentumsvorbehalt', 'erweiterter Eigentumsvorbehalt', 'Eigentumsvorbehalt erlischt'], anzahl:7,
  faelle:[
    {t:'Die Großhandlung bleibt Eigentümerin der gelieferten Ware, bis die Rechnung vollständig bezahlt ist.', k:0},
    {t:'Der Kunde darf die Ware weiterverkaufen; seine Forderung gegen den Endkunden tritt er schon jetzt an die Großhandlung ab.', k:1, weg:'Vorausabtretung der Kaufpreisforderung'},
    {t:'Wird das Papier verarbeitet, wird die Großhandlung Miteigentümerin der hergestellten Broschüren (Verarbeitungsklausel).', k:1},
    {t:'Das Eigentum geht erst über, wenn alle Forderungen aus der Geschäftsverbindung bezahlt sind.', k:2, weg:'auch Kontokorrentvorbehalt'},
    {t:'Der Kunde hat den Kaufpreis vollständig bezahlt.', k:3, weg:'Bedingung erfüllt – das Eigentum geht über'},
    {t:'Der Kunde verkauft die Ware an einen gutgläubigen Dritten, der den Vorbehalt nicht kennt.', k:3, weg:'gutgläubiger Erwerb'},
    {t:'Das gelieferte Papier wird ohne Verarbeitungsklausel zu Broschüren verarbeitet.', k:3, weg:'Verarbeitung – neues Produkt'},
    {t:'Gelieferte Fenster werden fest in ein Gebäude eingebaut.', k:3, weg:'Verbindung mit einem Grundstück'},
    {t:'Die Ware wird beim Kunden durch einen Brand vernichtet.', k:3, weg:'Untergang der Sache'}
  ],
  hinweise:['Einfach: nur diese Ware · verlängert: Weiterverkauf/Verarbeitung abgesichert · erweitert: mehrere Forderungen.', 'Der Vorbehalt endet mit Zahlung – oder wenn die Sache nicht mehr zurückgeholt werden kann.'],
  merke:'Eigentumsvorbehalt: einfach (bis zur Zahlung), verlängert (Vorausabtretung, Verarbeitungsklausel), erweitert (alle Forderungen) · erlischt durch Zahlung, gutgläubigen Erwerb, Verarbeitung, Verbindung, Untergang.'}),
blBau('zuordnung', {id:'FK16', modul:'FK', stufe:2, titel:'Sicherungsübereignung, Eigentumsvorbehalt oder Verpfändung?', tags:['Finanzierung', 'Kreditsicherheiten', 'Sicherungsübereignung', 'Eigentumsvorbehalt'],
  text:'Welche Sicherheit ist gemeint?', kategorien:['Sicherungsübereignung', 'Eigentumsvorbehalt', 'Verpfändung'], anzahl:8,
  faelle:[
    {t:'Der Kreditgeber wird Eigentümer, der Schuldner bleibt Besitzer und nutzt die Sache weiter.', k:0},
    {t:'Typisch für Lkw und Maschinen, die der Betrieb weiter braucht.', k:0},
    {t:'Die Bank verwahrt die Zulassungsbescheinigung Teil II (Fahrzeugbrief).', k:0},
    {t:'Sichert den Lieferer beim Kauf auf Ziel ab.', k:1},
    {t:'Der Käufer wird Besitzer, der Verkäufer bleibt bis zur Zahlung Eigentümer.', k:1},
    {t:'Muss spätestens bei der Übergabe der Ware vereinbart sein, z. B. in den AGB.', k:1},
    {t:'Der Gläubiger erhält den Besitz; der Schuldner bleibt Eigentümer.', k:2},
    {t:'Typisch für Wertpapiere oder Schmuck, die der Schuldner nicht braucht.', k:2},
    {t:'Der Schuldner kann die Sache während der Kreditlaufzeit nicht nutzen.', k:2}
  ],
  hinweise:['Wer ist Eigentümer, wer Besitzer? Geht es um einen Bankkredit oder um einen Lieferantenkredit?'],
  merke:'Sicherungsübereignung: Bank Eigentümerin, Schuldner Besitzer · Eigentumsvorbehalt: Verkäufer Eigentümer bis zur Zahlung, Käufer Besitzer · Verpfändung: Gläubiger Besitzer, Schuldner Eigentümer.'}),
{
  id:'FK17', modul:'FK', typ:'berechnung', mehrfach:true, stufe:3, titel:'Fall: Risiken bei Sicherungsübereignung und Eigentumsvorbehalt',
  tags:['Finanzierung', 'Kreditsicherheiten', 'Sicherungsübereignung', 'Eigentumsvorbehalt', 'Fall'],
  text:'Die Bürowelt Kraft GmbH hat ihren Lieferwagen zur Sicherheit an die Bank übereignet. Außerdem hat sie Büromöbel unter Eigentumsvorbehalt an einen Händler geliefert, der sie weiterverkaufen darf.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Weil die Bürowelt den Lieferwagen weiter besitzt, könnte sie ihn einem gutgläubigen Dritten verkaufen – die Bank trägt dieses Risiko.', richtig:true, weg:'Der Dritte sieht nur den Besitz.'},
    {text:'Die Bank verwahrt deshalb meist die Zulassungsbescheinigung Teil II, um einen gutgläubigen Erwerb zu erschweren.', richtig:true, weg:'Ohne Brief ist ein Gutglaubenserwerb beim Kfz kaum möglich.'},
    {text:'Wird der Kredit vollständig zurückgezahlt, fällt das Eigentum am Lieferwagen an die Bürowelt zurück.', richtig:true, weg:'Sicherungszweck entfällt'},
    {text:'Mit dem Weiterverkauf der Möbel an Endkunden wäre der einfache Eigentumsvorbehalt verloren – deshalb sollte ein verlängerter Eigentumsvorbehalt vereinbart werden.', richtig:true, weg:'Die Kaufpreisforderung des Händlers tritt an die Stelle der Ware.'},
    {text:'Beim Eigentumsvorbehalt muss der Käufer die Ware bis zur Zahlung beim Verkäufer lassen.', fehler:'Der Käufer erhält die Ware sofort und nutzt sie; nur das Eigentum bleibt beim Verkäufer.'},
    {text:'Eine Sicherungsübereignung muss ins Grundbuch eingetragen werden.', fehler:'Sie betrifft bewegliche Sachen und wird nur vertraglich vereinbart.'}
  ],
  hinweise:['Besitz und Eigentum fallen auseinander – wer kann was mit der Sache tun?'],
  merke:'Bei Sicherungsübereignung und Eigentumsvorbehalt hat der Schuldner die Sache in der Hand – Risiko: gutgläubiger Erwerb durch Dritte. Schutz: Fahrzeugbrief verwahren, verlängerter Eigentumsvorbehalt.'
},
/* ---------- Modul 12 · Theorie (extra): Finanzierung ---------- */
{
  id:'FT1', modul:'FT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Darlehensarten unterscheiden',
  tags:['Finanzierung','Theorie','Darlehen'],
  text:'Ein Unternehmen nimmt ein Darlehen über 100.000 € mit fünf Jahren Laufzeit auf.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Bei der Ratentilgung ist die Tilgung jedes Jahr gleich hoch, die Zinsen sinken.', richtig:true, weg:'Die Schuld nimmt jedes Jahr um denselben Betrag ab.'},
    {text:'Beim Annuitätendarlehen bleibt die Summe aus Zinsen und Tilgung gleich, der Tilgungsanteil steigt.', richtig:true, weg:'Was an Zinsen wegfällt, fließt in die Tilgung.'},
    {text:'Beim Fälligkeitsdarlehen sind die Zinsen jedes Jahr gleich hoch.', richtig:true, weg:'Bis zum Ende wird nichts getilgt – die Schuld bleibt voll bestehen.'},
    {text:'Beim Fälligkeitsdarlehen fallen insgesamt die wenigsten Zinsen an.', fehler:'Im Gegenteil: Die volle Schuld wird über die ganze Laufzeit verzinst – die Zinsen sind am höchsten.'},
    {text:'Beim Annuitätendarlehen sinkt die jährliche Belastung von Jahr zu Jahr.', fehler:'Das gilt für die Ratentilgung. Die Annuität bleibt gleich.'}
  ],
  hinweise:['Was bleibt bei welcher Darlehensart gleich – Tilgung, Zinsen oder die Summe aus beiden?', 'Die Zinsen hängen von der Restschuld ab.', 'Je länger die Schuld hoch bleibt, desto mehr Zinsen fallen an.'],
  merke:'Ratentilgung: gleiche Tilgung, sinkende Belastung. Annuität: gleiche Belastung, steigende Tilgung. Fälligkeitsdarlehen: gleiche Zinsen, Tilgung am Ende.'
},
{
  id:'FT2', modul:'FT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Vorteile des Leasings',
  tags:['Finanzierung','Theorie','Leasing'],
  text:'Ein Unternehmen überlegt, seine Fahrzeugflotte zu leasen statt zu kaufen.',
  frage:'Welche Aussagen beschreiben Vorteile des Leasings?',
  optionen:[
    {text:'Die Liquidität wird geschont, weil kein hoher Kaufpreis auf einmal bezahlt werden muss.', richtig:true, weg:'Statt des Kaufpreises fallen laufende Raten an.'},
    {text:'Nach der Mietzeit kann das Unternehmen auf neue, moderne Technik umsteigen.', richtig:true, weg:'Das senkt das Risiko, mit veralteten Anlagen zu arbeiten.'},
    {text:'Die Leasingraten sind gut planbar und können aus den laufenden Erlösen bezahlt werden.', richtig:true, weg:'„Pay as you earn“ – die Anlage verdient ihre Raten selbst.'},
    {text:'Der Kreditrahmen bei der Bank bleibt frei für andere Zwecke.', richtig:true, weg:'Leasing belastet die Kreditlinie nicht.'},
    {text:'Leasing ist in der Summe der Zahlungen immer günstiger als ein Kredit.', fehler:'Meist ist es teurer – der Leasinggeber will an Zinsen, Risiko und Verwaltung verdienen.'}
  ],
  hinweise:['Wie viel Geld muss zu Beginn aufgebracht werden?', 'Was passiert am Ende der Mietzeit?', 'Vergleiche auch die Summe aller Zahlungen.'],
  merke:'Leasing schont Liquidität und Kreditrahmen und hält die Technik aktuell – ist aber meist teurer als ein Kredit.'
},
{
  id:'FT3', modul:'FT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Nachteile des Leasings',
  tags:['Finanzierung','Theorie','Leasing'],
  text:'Die Geschäftsleitung prüft, welche Nachteile Leasing gegenüber dem Kauf mit einem Kredit hat.',
  frage:'Welche Aussagen beschreiben Nachteile des Leasings?',
  optionen:[
    {text:'Die Summe der Leasingzahlungen ist meist höher als Kaufpreis und Kreditzinsen.', richtig:true, weg:'Der Leasinggeber kalkuliert Gewinn, Risiko und Verwaltung ein.'},
    {text:'Das Unternehmen wird nicht Eigentümer – nach der Mietzeit gehört ihm die Anlage nicht.', richtig:true, weg:'Ohne Kaufoption muss die Anlage zurückgegeben werden.'},
    {text:'Während der Grundmietzeit ist der Vertrag in der Regel nicht kündbar.', richtig:true, weg:'Die Raten müssen auch gezahlt werden, wenn die Anlage nicht mehr gebraucht wird.'},
    {text:'Bauliche Veränderungen oder Umbauten an der Anlage sind nur eingeschränkt möglich.', richtig:true, weg:'Die Anlage gehört dem Leasinggeber.'},
    {text:'Das Unternehmen muss den vollen Kaufpreis zu Beginn bezahlen.', fehler:'Genau das entfällt beim Leasing – das ist ein Vorteil.'}
  ],
  hinweise:['Wem gehört die Anlage beim Leasing?', 'Kann das Unternehmen den Vertrag jederzeit beenden?', 'Wer verdient am Leasingvertrag mit?'],
  merke:'Leasing: kein Eigentum, feste Bindung während der Grundmietzeit und meist höhere Gesamtkosten.'
},
{
  id:'FT4', modul:'FT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Lieferantenkredit und Skonto',
  tags:['Finanzierung','Theorie','Skonto','Lieferantenkredit'],
  text:'Eine Rechnung lautet: „Zahlbar innerhalb von 10 Tagen mit 2 % Skonto oder innerhalb von 30 Tagen ohne Abzug.“',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Wer erst nach 30 Tagen zahlt, nimmt für 20 Tage einen Lieferantenkredit in Anspruch.', richtig:true, weg:'Zahlungsziel 30 − Skontofrist 10 = 20 Tage.'},
    {text:'Der Lieferantenkredit kostet hier rund 36 % Zinsen im Jahr.', richtig:true, weg:'2 % × 360 ÷ 20 = 36 %.'},
    {text:'Skonto lohnt sich meist sogar dann, wenn dafür das Konto überzogen werden muss.', richtig:true, weg:'Überziehungszinsen liegen meist deutlich unter dem Jahreszins des Lieferantenkredits.'},
    {text:'Der Lieferantenkredit ist günstig, weil der Lieferant keine Zinsen berechnet.', fehler:'Die Zinsen stecken im entgangenen Skonto.'},
    {text:'Der Zeitraum des Lieferantenkredits sind die vollen 30 Tage.', fehler:'Die ersten 10 Tage sind „kostenlos“ – Kredit sind nur die 20 Tage danach.'}
  ],
  hinweise:['Für wie viele Tage verzichtet man auf den Skonto, wenn man später zahlt?', 'Rechne den Skontosatz auf ein Jahr (360 Tage) hoch.', 'Vergleiche mit dem Zinssatz für eine Kontoüberziehung.'],
  merke:'Jahreszinssatz des Lieferantenkredits ≈ Skontosatz × 360 ÷ (Zahlungsziel − Skontofrist).'
},
{
  id:'FT5', modul:'FT', typ:'berechnung', mehrfach:true, stufe:0, titel:'Welche Finanzierung passt?',
  tags:['Finanzierung','Theorie','Entscheidung'],
  text:'Ein junges Unternehmen mit knapper Liquidität will eine Produktionsanlage anschaffen, die in der Branche technisch schnell veraltet.',
  frage:'Welche Überlegungen sind richtig?',
  optionen:[
    {text:'Leasing kann sinnvoll sein, weil es die knappe Liquidität schont.', richtig:true, weg:'Es muss kein Kaufpreis auf einmal aufgebracht werden.'},
    {text:'Bei schnell veraltender Technik spricht für Leasing, dass nach der Mietzeit getauscht werden kann.', richtig:true, weg:'Das Unternehmen trägt kein Veraltungsrisiko.'},
    {text:'Ein Fälligkeitsdarlehen schont die Liquidität während der Laufzeit, verlangt aber am Ende den vollen Betrag.', richtig:true, weg:'Für die Rückzahlung muss rechtzeitig vorgesorgt werden.'},
    {text:'Entscheidend ist immer nur, welche Finanzierung in der Summe am wenigsten kostet.', fehler:'Auch Liquidität, Eigentum, Flexibilität und Risiko gehören in die Entscheidung.'},
    {text:'Eine Anlage, die viele Jahre genutzt wird, sollte möglichst kurzfristig finanziert werden.', fehler:'Langfristig genutzte Anlagen gehören langfristig finanziert (Fristenkongruenz).'}
  ],
  hinweise:['Was ist für ein Unternehmen mit knapper Liquidität besonders wichtig?', 'Wer trägt das Risiko, dass die Technik veraltet?', 'Passen Laufzeit der Finanzierung und Nutzungsdauer zusammen?'],
  merke:'Neben den Kosten zählen Liquidität, Eigentum, Flexibilität und Risiko. Langfristig genutzte Anlagen werden langfristig finanziert.'
},
/* ---------- Modul · Kapitalbedarf und Finanzplan ---------- */
{
  id:'FB1', modul:'FB', typ:'berechnung', mehrfach:true, stufe:1, titel:'Kapitalbedarf und Finanzplanung',
  tags:['Finanzierung','Kapitalbedarf','Finanzplan'],
  text:'Die Rheinpfalz AG plant ein neues Werk für kompostierbare Verpackungen.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der Kapitalbedarf umfasst das Anlagevermögen (z. B. Gebäude, Maschinen) und das Umlaufvermögen, das bis zum Zahlungseingang der Kunden vorfinanziert werden muss.', richtig:true, weg:'Dazu kommen Gründungs- bzw. Ingangsetzungskosten und eine Reserve.'},
    {text:'Der Kapitalbedarf für das Umlaufvermögen hängt von der Kapitalbindungsdauer ab: Lagerdauer + Produktionsdauer + Kundenziel − Lieferantenziel.', richtig:true, weg:'So lange ist das Geld gebunden.'},
    {text:'Ein Finanzplan stellt die erwarteten Einzahlungen und Auszahlungen je Monat gegenüber und zeigt, wann eine Unterdeckung droht.', richtig:true, weg:'Liquiditätsplanung'},
    {text:'Eine Unterdeckung kann z. B. durch einen Kontokorrentkredit, verschobene Auszahlungen oder schnellere Einzahlungen ausgeglichen werden.', richtig:true, weg:'Ausgleichsmaßnahmen'},
    {text:'Ein längeres Lieferantenziel erhöht den Kapitalbedarf.', fehler:'Es senkt ihn: Je später wir die Lieferanten bezahlen, desto kürzer ist unser Geld gebunden.'}
  ],
  hinweise:['Wofür wird Kapital benötigt – und wie lange ist es gebunden?'],
  merke:'Kapitalbedarf = Anlagevermögen + Umlaufvermögen (tägliche Auszahlungen × Kapitalbindungsdauer) + Gründungskosten + Reserve · Finanzplan: Einzahlungen − Auszahlungen je Monat → Über- oder Unterdeckung.'
},
blBau('rechnung', {id:'FB2', modul:'FB', stufe:1, titel:'Kapitalbedarf für das Umlaufvermögen', tags:['Finanzierung', 'Kapitalbedarf', 'Rechnung'], kopf:'Kapitalbindung',
  text:'Für das neue Werk rechnet die Rheinpfalz AG mit durchschnittlichen Auszahlungen von {ta} pro Tag für Material, Löhne und Gemeinkosten. Berechne die Kapitalbindungsdauer und den Kapitalbedarf für das Umlaufvermögen. (Vereinfachung: Für alle Auszahlungen wird dieselbe Kapitalbindungsdauer angenommen.)',
  spalten:['Wert'],
  zeilen:[{id:'rl', t:'Lagerdauer der Rohstoffe', e:'Tage'}, {id:'pd', t:'Produktionsdauer', e:'Tage'}, {id:'fl', t:'Lagerdauer der fertigen Erzeugnisse', e:'Tage'}, {id:'kz', t:'Zahlungsziel der Kunden', e:'Tage'}, {id:'lz', t:'Zahlungsziel der Lieferanten', e:'Tage'}, {id:'ta', t:'durchschnittliche Auszahlungen pro Tag', e:'€'},
    {id:'kb', t:'Kapitalbindungsdauer = Lagerdauer + Produktionsdauer + Lagerdauer + Kundenziel − Lieferantenziel', kurz:'Kapitalbindungsdauer', e:'Tage', f:'rl + pd + fl + kz - lz'},
    {id:'kuv', t:'Kapitalbedarf Umlaufvermögen = Auszahlungen pro Tag × Kapitalbindungsdauer', kurz:'Kapitalbedarf Umlaufvermögen', e:'€', f:'ta * kb'}],
  werte:[{rl:20, pd:10, fl:15, kz:30, lz:25, ta:8000}], sets:[[{rl:15, pd:5, fl:10, kz:45, lz:30, ta:12000}], [{rl:30, pd:12, fl:8, kz:30, lz:20, ta:6500}], [{rl:10, pd:20, fl:20, kz:60, lz:30, ta:5000}]],
  hinweise:['Das Lieferantenziel verkürzt die Bindung – wir zahlen später.'],
  merke:'Kapitalbedarf Umlaufvermögen = durchschnittliche tägliche Auszahlungen × Kapitalbindungsdauer.'}),
blBau('rechnung', {id:'FB3', modul:'FB', stufe:2, titel:'Gesamtkapitalbedarf', tags:['Finanzierung', 'Kapitalbedarf', 'Rechnung'], kopf:'Kapitalbedarfsplan',
  text:'Für das neue Werk liegen folgende Planwerte vor. Zusätzlich soll eine Reserve von {rp} % auf den Kapitalbedarf eingeplant werden. Berechne den Gesamtkapitalbedarf.',
  spalten:['Betrag'],
  zeilen:[{id:'gb', t:'Grundstück und Gebäude', e:'€'}, {id:'ma', t:'Maschinen', e:'€'}, {id:'bga', t:'Betriebs- und Geschäftsausstattung', e:'€'}, {id:'gr', t:'Ingangsetzungskosten (Planung, Schulung, Werbung)', e:'€'}, {id:'uv', t:'Kapitalbedarf Umlaufvermögen', e:'€'}, {id:'rp', t:'Reserve', e:'%'},
    {id:'av', t:'Kapitalbedarf Anlagevermögen', e:'€', f:'gb + ma + bga'},
    {id:'su', t:'Kapitalbedarf ohne Reserve', e:'€', f:'av + gr + uv'},
    {id:'re', t:'Reserve = Kapitalbedarf × Reservesatz', kurz:'Reserve', e:'€', f:'su * rp / 100'},
    {id:'ges', t:'Gesamtkapitalbedarf', e:'€', f:'su + re'}],
  werte:[{gb:1800000, ma:2400000, bga:300000, gr:100000, uv:400000, rp:10}], sets:[[{gb:1200000, ma:1500000, bga:200000, gr:100000, uv:500000, rp:5}], [{gb:2500000, ma:3000000, bga:400000, gr:150000, uv:450000, rp:8}]],
  hinweise:['Erst Anlage- und Umlaufvermögen addieren, dann die Reserve aufschlagen.'],
  merke:'Gesamtkapitalbedarf = Anlagevermögen + Ingangsetzungskosten + Umlaufvermögen + Reserve.'}),
blBau('rechnung', {id:'FB4', modul:'FB', stufe:2, titel:'Finanzplan für ein Quartal', tags:['Finanzierung', 'Finanzplan', 'Liquidität', 'Rechnung'], kopf:'Finanzplan', spaltenweise:true,
  text:'Die Rheinpfalz AG plant ihre Zahlungen für das erste Quartal. Am 1. Januar beträgt der Bestand an flüssigen Mitteln {ab}. Vervollständige den Finanzplan: Der Bestand am Monatsende wird als Anfangsbestand in den nächsten Monat übertragen.',
  spalten:['Januar', 'Februar', 'März'],
  zeilen:[{id:'ab', t:'Anfangsbestand', kurz:'Anfangsbestand (Übertrag)', e:'€', fs:[null, 'eb@0', 'eb@1']},
    {id:'ein', t:'Einzahlungen', e:'€'}, {id:'aus', t:'Auszahlungen', e:'€'},
    {id:'ue', t:'Überschuss (+) bzw. Fehlbetrag (−) = Einzahlungen − Auszahlungen', kurz:'Überschuss/Fehlbetrag', e:'€', f:'ein - aus'},
    {id:'eb', t:'Bestand am Monatsende = Anfangsbestand + Überschuss bzw. − Fehlbetrag', kurz:'Bestand am Monatsende', e:'€', f:'ab + ue'}],
  werte:[{ab:20000, ein:80000, aus:95000}, {ein:70000, aus:90000}, {ein:110000, aus:85000}],
  sets:[[{ab:10000, ein:60000, aus:75000}, {ein:90000, aus:70000}, {ein:80000, aus:85000}], [{ab:30000, ein:100000, aus:90000}, {ein:80000, aus:95000}, {ein:70000, aus:90000}], [{ab:15000, ein:90000, aus:80000}, {ein:85000, aus:95000}, {ein:75000, aus:110000}]],
  wahl:[{id:'w', t:'Ein Kredit (Unterdeckung) wird zuerst benötigt …', opts:['im Januar.', 'im Februar.', 'im März.', 'in keinem Monat – es gibt keine Unterdeckung.'], r:'eb@0 < 0 ? 0 : (eb@1 < 0 ? 1 : (eb@2 < 0 ? 2 : 3))'}],
  hinweise:['Der Bestand am Monatsende wird als Anfangsbestand in den nächsten Monat übertragen.', 'Ein negativer Bestand bedeutet: Es muss Geld beschafft werden.'],
  merke:'Finanzplan: Anfangsbestand + Einzahlungen − Auszahlungen = Bestand am Monatsende = Anfangsbestand des Folgemonats. Ein negativer Bestand zeigt eine Unterdeckung, die rechtzeitig finanziert werden muss.'}),

blBau('rechnung', {id:'FB5', modul:'FB', stufe:3, titel:'Finanzplan aus Einzelposten', tags:['Finanzierung', 'Finanzplan', 'Liquidität', 'Rechnung'], kopf:'Finanzplan', spaltenweise:true,
  text:'Die Rheinpfalz AG plant das zweite Quartal. Am 1. April beträgt der Bestand an flüssigen Mitteln {ab}. Die Planung enthält die folgenden Posten. Ermittle die Summe der Einzahlungen und der Auszahlungen, den Überschuss bzw. Fehlbetrag und den Bestand am Monatsende. Achtung: Nicht jeder Posten führt zu einer Zahlung.',
  spalten:['April', 'Mai', 'Juni'],
  zeilen:[{id:'ab', t:'Anfangsbestand', kurz:'Anfangsbestand (Übertrag)', e:'€', fs:[null, 'eb@0', 'eb@1']},
    {id:'uz', t:'Zahlungseingänge von Kunden (Umsatzerlöse)', e:'€'}, {id:'ze', t:'Mieteinnahmen', e:'€'},
    {id:'lo', t:'Löhne und Gehälter', e:'€'}, {id:'mat', t:'Zahlungen an Lieferanten für Rohstoffe', e:'€'}, {id:'mi', t:'Miete für das Lager', e:'€'},
    {id:'ti', t:'Zins und Tilgung für das Darlehen', e:'€'}, {id:'afa', t:'Abschreibungen auf Maschinen', e:'€'},
    {id:'se', t:'Summe der Einzahlungen', e:'€', f:'uz + ze'},
    {id:'sa', t:'Summe der Auszahlungen', e:'€', f:'lo + mat + mi + ti', weg:W => `${blN(W.lo)} + ${blN(W.mat)} + ${blN(W.mi)} + ${blN(W.ti)} = <b>${blE(W.sa)}</b> (ohne die Abschreibungen von ${blE(W.afa)} – sie führen zu keiner Auszahlung)`},
    {id:'ue', t:'Überschuss (+) bzw. Fehlbetrag (−)', e:'€', f:'se - sa'},
    {id:'eb', t:'Bestand am Monatsende', e:'€', f:'ab + ue'}],
  werte:[{ab:25000, uz:120000, ze:2000, lo:45000, mat:60000, mi:8000, ti:12000, afa:15000}, {uz:95000, ze:2000, lo:45000, mat:70000, mi:8000, ti:12000, afa:15000}, {uz:150000, ze:2000, lo:47000, mat:55000, mi:8000, ti:12000, afa:15000}],
  sets:[[{ab:10000, uz:90000, ze:1000, lo:40000, mat:50000, mi:6000, ti:10000, afa:12000}, {uz:130000, ze:1000, lo:40000, mat:55000, mi:6000, ti:10000, afa:12000}, {uz:100000, ze:1000, lo:42000, mat:50000, mi:6000, ti:10000, afa:12000}],
    [{ab:40000, uz:110000, ze:3000, lo:50000, mat:45000, mi:9000, ti:15000, afa:20000}, {uz:105000, ze:3000, lo:50000, mat:50000, mi:9000, ti:15000, afa:20000}, {uz:120000, ze:3000, lo:52000, mat:48000, mi:9000, ti:15000, afa:20000}]],
  wahl:[{id:'wa', t:'Die Abschreibungen auf Maschinen …', opts:['werden im Finanzplan nicht berücksichtigt – sie sind Aufwand, aber keine Auszahlung.', 'gehören zu den Auszahlungen, weil sie den Gewinn mindern.', 'gehören zu den Einzahlungen, weil sie über die Preise verdient werden.'], r:'0'},
    {id:'w', t:'Ein Kredit (Unterdeckung) wird zuerst benötigt …', opts:['im April.', 'im Mai.', 'im Juni.', 'in keinem Monat – es gibt keine Unterdeckung.'], r:'eb@0 < 0 ? 0 : (eb@1 < 0 ? 1 : (eb@2 < 0 ? 2 : 3))'}],
  hinweise:['Ein Finanzplan erfasst nur Zahlungen – fließt bei jedem Posten wirklich Geld?', 'Abschreibungen mindern den Gewinn, aber es fließt kein Geld ab.', 'Der Bestand am Monatsende ist der Anfangsbestand des nächsten Monats.'],
  merke:'Im Finanzplan stehen nur Einzahlungen und Auszahlungen. Abschreibungen (und andere Aufwendungen ohne Zahlung, z. B. Zuführungen zu Rückstellungen) gehören nicht hinein.'}),

/* ---------- Modul · Innenfinanzierung ---------- */
{
  id:'FI1', modul:'FI', typ:'berechnung', mehrfach:true, stufe:1, titel:'Arten der Finanzierung',
  tags:['Finanzierung','Innenfinanzierung','Außenfinanzierung'],
  text:'Man unterscheidet Finanzierungen nach der Herkunft des Kapitals (innen/außen) und nach der Rechtsstellung der Kapitalgeber (Eigen-/Fremdkapital).',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Bei der Innenfinanzierung kommen die Mittel aus dem Unternehmen selbst, vor allem aus den Umsatzerlösen.', richtig:true, weg:'z. B. einbehaltene Gewinne, Abschreibungen, Rückstellungen, Vermögensumschichtung'},
    {text:'Bei der Außenfinanzierung fließt Kapital von außen zu: Eigenkapital von (neuen) Gesellschaftern oder Fremdkapital von Kreditgebern.', richtig:true, weg:'Beteiligungs- und Kreditfinanzierung'},
    {text:'Die Selbstfinanzierung aus einbehaltenen Gewinnen ist Innen- und Eigenfinanzierung.', richtig:true, weg:'Der Gewinn gehört den Eigentümern.'},
    {text:'Die Beteiligungsfinanzierung (z. B. Ausgabe neuer Aktien) ist Außen- und Eigenfinanzierung.', richtig:true, weg:''},
    {text:'Ein Bankdarlehen ist Innenfinanzierung, weil das Geld auf dem Firmenkonto liegt.', fehler:'Das Geld kommt von außen (Bank) und ist Fremdkapital – Außen- und Fremdfinanzierung.'}
  ],
  hinweise:['Woher kommt das Geld – und wer gibt es: Eigentümer oder Gläubiger?'],
  merke:'Innenfinanzierung: Selbstfinanzierung (einbehaltene Gewinne), Finanzierung aus Abschreibungen und Rückstellungen, Vermögensumschichtung · Außenfinanzierung: Beteiligungsfinanzierung (Eigenkapital), Kreditfinanzierung (Fremdkapital).'
},
blBau('zuordnung', {id:'FI2', modul:'FI', stufe:1, titel:'Welche Finanzierungsart?', tags:['Finanzierung', 'Finanzierungsarten'],
  text:'Welche Finanzierungsart liegt vor?', kategorien:['Beteiligungsfinanzierung', 'Kreditfinanzierung', 'Selbstfinanzierung', 'Finanzierung aus Abschreibungen', 'Vermögensumschichtung'], anzahl:6,
  faelle:[
    {t:'Die AG gibt neue Aktien aus.', k:0}, {t:'Ein neuer Kommanditist tritt mit 200.000 € Einlage in die KG ein.', k:0},
    {t:'Die Bank gewährt ein Darlehen über 500.000 €.', k:1}, {t:'Ein Lieferant gewährt 60 Tage Zahlungsziel.', k:1, weg:'Lieferanten- bzw. Warenkredit'},
    {t:'Der Jahresgewinn wird nicht ausgeschüttet, sondern in die Gewinnrücklagen eingestellt.', k:2},
    {t:'Die in den Verkaufspreisen verdienten Abschreibungen fließen als Geld zurück und werden für neue Maschinen verwendet.', k:3},
    {t:'Ein nicht mehr benötigtes Grundstück wird verkauft.', k:4}, {t:'Die Lagerbestände werden dauerhaft um 20 % gesenkt.', k:4, weg:'gebundenes Kapital wird frei'},
    {t:'Das Verwaltungsgebäude wird verkauft und sofort zurückgemietet (Sale and Lease back).', k:4}
  ],
  hinweise:['Neue Gesellschafter? Gläubiger? Gewinn behalten? Abschreibungsrückflüsse? Vermögen in Geld umwandeln?'],
  merke:'Beteiligungsfinanzierung (Außen, Eigen) · Kreditfinanzierung (Außen, Fremd) · Selbstfinanzierung (Innen, Eigen) · Finanzierung aus Abschreibungen und Vermögensumschichtung (Innen).'}),
{
  id:'FI3', modul:'FI', typ:'berechnung', mehrfach:true, stufe:2, titel:'Offene und stille Selbstfinanzierung',
  tags:['Finanzierung','Selbstfinanzierung','stille Reserven'],
  text:'Die Rheinpfalz AG finanziert einen Teil ihrer Investitionen aus eigener Kraft.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Offene Selbstfinanzierung: Ein ausgewiesener Gewinn wird einbehalten und den Rücklagen (bzw. dem Kapitalkonto) zugeführt.', richtig:true, weg:'in der Bilanz sichtbar'},
    {text:'Stille Selbstfinanzierung entsteht durch stille Reserven, z. B. wenn Vermögen niedriger oder Schulden höher bewertet werden, als sie tatsächlich sind.', richtig:true, weg:'Der Gewinn wird zu niedrig ausgewiesen und nicht ausgeschüttet bzw. versteuert (Steuerstundung).'},
    {text:'Vorteile der Selbstfinanzierung: keine Zinsen, keine Tilgung, keine Sicherheiten, keine neuen Mitspracherechte.', richtig:true, weg:''},
    {text:'Nachteil: Sie setzt Gewinne voraus, und Gesellschafter verzichten auf Ausschüttungen.', richtig:true, weg:'Gefahr, dass das Kapital weniger kritisch eingesetzt wird'},
    {text:'Stille Reserven sind in der Bilanz als eigener Posten ausgewiesen.', fehler:'Gerade nicht – sie sind „still“, also nicht erkennbar.'}
  ],
  hinweise:['Sichtbar oder unsichtbar in der Bilanz?'],
  merke:'Offene Selbstfinanzierung: Gewinn einbehalten (Rücklagen) · stille Selbstfinanzierung: stille Reserven durch Unterbewertung von Vermögen oder Überbewertung von Schulden.'
},
blBau('rechnung', {id:'FI4', modul:'FI', stufe:2, titel:'Finanzierung aus Abschreibungen', tags:['Finanzierung', 'Abschreibungen', 'Kapitalfreisetzung', 'Rechnung'], kopf:'Abschreibungsrückflüsse',
  text:'Die Rheinpfalz AG besitzt {n} gleiche Stanzmaschinen zu je {ak} Anschaffungskosten (Nutzungsdauer {nd} Jahre, lineare Abschreibung). Die Abschreibungen sind in den Verkaufspreisen einkalkuliert und fließen über die Umsatzerlöse als Geld zurück. Neue Maschinen werden erst nach Ablauf der Nutzungsdauer gebraucht.',
  spalten:['Wert'],
  zeilen:[{id:'n', t:'Anzahl der Maschinen', e:'Stück'}, {id:'ak', t:'Anschaffungskosten je Maschine', e:'€'}, {id:'nd', t:'Nutzungsdauer', e:'Jahre'},
    {id:'afa', t:'jährliche Abschreibungsrückflüsse = Anzahl × Anschaffungskosten ÷ Nutzungsdauer', kurz:'jährliche Rückflüsse', e:'€', f:'n * ak / nd'},
    {id:'k2', t:'freigesetzte Mittel nach zwei Jahren', e:'€', f:'afa * 2'}],
  werte:[{n:4, ak:60000, nd:5}], sets:[[{n:5, ak:40000, nd:4}], [{n:2, ak:100000, nd:5}], [{n:6, ak:25000, nd:5}]],
  wahl:[{id:'w', t:'Mit den nach zwei Jahren freigesetzten Mitteln kann die Rheinpfalz AG …', opts:['mindestens eine zusätzliche Maschine kaufen, ohne neues Kapital aufzunehmen (Kapazitätserweiterungseffekt).', 'noch keine zusätzliche Maschine kaufen.'], r:'n * ak / nd * 2 >= ak ? 0 : 1'}],
  hinweise:['Abschreibungen sind Aufwand, aber keine Auszahlung – das Geld bleibt im Unternehmen, bis die Maschine ersetzt wird.'],
  merke:'Finanzierung aus Abschreibungen: Die über die Preise verdienten Abschreibungen werden bis zur Ersatzbeschaffung frei (Kapitalfreisetzung) und können sofort reinvestiert werden (Kapazitätserweiterungseffekt).'}),
{
  id:'FI5', modul:'FI', typ:'berechnung', mehrfach:true, stufe:2, titel:'Rückstellungen und Vermögensumschichtung',
  tags:['Finanzierung','Innenfinanzierung','Rückstellungen','Vermögensumschichtung'],
  text:'Die Rheinpfalz AG sucht weitere Möglichkeiten der Innenfinanzierung.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Langfristige Rückstellungen (z. B. Pensionsrückstellungen) mindern den Gewinn, führen aber erst viel später zu Auszahlungen – bis dahin steht das Geld zur Verfügung.', richtig:true, weg:'Finanzierung aus Rückstellungen'},
    {text:'Bei der Vermögensumschichtung wird gebundenes Vermögen in Geld umgewandelt, z. B. durch den Verkauf nicht betriebsnotwendiger Anlagen oder den Abbau von Lagerbeständen.', richtig:true, weg:'Bei Verkauf zum Buchwert ändert sich die Bilanzsumme nicht (Aktivtausch).'},
    {text:'Beim Sale and Lease back wird ein Gebäude an eine Leasinggesellschaft verkauft und sofort zurückgeleast.', richtig:true, weg:'sofort Liquidität, dafür laufende Leasingraten'},
    {text:'Durch den Verkauf von Forderungen an ein Factoringunternehmen fließt sofort Geld zu.', richtig:true, weg:'Factoring – oft auch zur Außenfinanzierung gezählt.'},
    {text:'Bei der Vermögensumschichtung fließt neues Kapital von außen in das Unternehmen.', fehler:'Es wird nur bereits vorhandenes Vermögen umgewandelt.'}
  ],
  hinweise:['Woher kommt das Geld jeweils – aus Gewinn, aus Aufwand ohne Auszahlung oder aus vorhandenem Vermögen?'],
  merke:'Innenfinanzierung außerdem aus Rückstellungen (Aufwand jetzt, Auszahlung später) und durch Vermögensumschichtung (Verkauf von Anlagen, Lagerabbau, Sale and Lease back, Factoring).'
},

/* ---------- Modul · Außenfinanzierung ---------- */
blBau('zuordnung', {id:'FA1', modul:'FA', stufe:1, titel:'Eigen- oder Fremdfinanzierung: Vor- und Nachteile', tags:['Finanzierung', 'Außenfinanzierung', 'Beurteilung'],
  text:'Die Rheinpfalz AG braucht 2 Mio. € für das neue Werk. Ist die Aussage ein Merkmal der Beteiligungsfinanzierung (neues Eigenkapital) oder der Kreditfinanzierung (Fremdkapital)?', kategorien:['Beteiligungsfinanzierung', 'Kreditfinanzierung'], anzahl:6,
  faelle:[
    {t:'Es fallen feste Zinsen an, auch wenn das Unternehmen Verlust macht.', k:1}, {t:'Die neuen Kapitalgeber erhalten Mitsprache- und Stimmrechte.', k:0},
    {t:'Das Kapital steht unbefristet zur Verfügung und muss nicht getilgt werden.', k:0}, {t:'Die Bank verlangt Sicherheiten.', k:1},
    {t:'Die Kapitalgeber werden am Gewinn beteiligt (Dividende).', k:0}, {t:'Der Kapitalgeber hat keine Mitspracherechte in der Geschäftsführung.', k:1},
    {t:'Die Eigenkapitalquote steigt, die Kreditwürdigkeit verbessert sich.', k:0}, {t:'Zinsen sind als Aufwand steuerlich abzugsfähig.', k:1}
  ],
  hinweise:['Gesellschafter oder Gläubiger?'],
  merke:'Beteiligungsfinanzierung: unbefristet, keine Zinsen und Tilgung, aber Gewinnbeteiligung und Mitsprache · Kreditfinanzierung: befristet, Zinsen und Tilgung, Sicherheiten, aber keine Mitsprache.'}),
blBau('zuordnung', {id:'FA2', modul:'FA', stufe:2, titel:'Welche Kreditart passt?', tags:['Finanzierung', 'Außenfinanzierung', 'Kreditarten'],
  text:'Welche Finanzierung passt am besten zum Vorhaben?', kategorien:['Kontokorrentkredit', 'Investitionsdarlehen', 'Lieferantenkredit (Warenkredit)', 'Leasing'], anzahl:5,
  faelle:[
    {t:'Im März fehlen kurzfristig 40.000 €, weil viele Kunden spät zahlen.', k:0, weg:'kurzfristige, schwankende Lücke'},
    {t:'Eine neue Fertigungsstraße für 1,5 Mio. € soll über 10 Jahre finanziert werden.', k:1},
    {t:'Rohstoffe werden mit 30 Tagen Zahlungsziel eingekauft.', k:2},
    {t:'Die Fahrzeugflotte soll ohne hohe Anfangsauszahlung genutzt und nach vier Jahren gegen neue Fahrzeuge getauscht werden.', k:3},
    {t:'Gehaltszahlungen am Monatsende müssen überbrückt werden, bis die Kundenzahlungen eingehen.', k:0},
    {t:'IT-Hardware soll immer auf dem neuesten Stand sein, ohne Kapital zu binden.', k:3}
  ],
  hinweise:['Kurzfristige Lücke, langfristige Investition, Einkauf auf Ziel oder Nutzung statt Eigentum?'],
  merke:'Kontokorrentkredit: kurzfristige, schwankende Lücken (teuer) · Darlehen: langfristige Investitionen · Lieferantenkredit: Zahlungsziel beim Einkauf (Skonto beachten) · Leasing: Nutzung ohne Kauf.'}),
{
  id:'FA3', modul:'FA', typ:'berechnung', mehrfach:true, stufe:2, titel:'Der Kontokorrentkredit',
  tags:['Finanzierung','Kontokorrentkredit'],
  text:'Die Hausbank räumt der Rheinpfalz AG auf ihrem Geschäftskonto eine Kreditlinie von 250.000 € ein.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die Rheinpfalz AG kann das Konto bis zur Kreditlinie beliebig in Anspruch nehmen und wieder zurückführen.', richtig:true, weg:'flexibel'},
    {text:'Zinsen fallen nur für den tatsächlich in Anspruch genommenen Betrag an.', richtig:true, weg:'Abrechnung meist vierteljährlich; ggf. zusätzlich Bereitstellungs- bzw. Kreditprovision'},
    {text:'Wird die Kreditlinie überschritten, verlangt die Bank zusätzlich hohe Überziehungszinsen.', richtig:true, weg:''},
    {text:'Der Kontokorrentkredit eignet sich für kurzfristigen Finanzbedarf, nicht für langfristige Investitionen.', richtig:true, weg:'Fristenkongruenz'},
    {text:'Der Kontokorrentkredit ist meist günstiger als ein langfristiges Darlehen.', fehler:'Er ist wegen seiner Flexibilität meist teurer.'}
  ],
  hinweise:['Flexibel – aber teuer.'],
  merke:'Kontokorrentkredit: Kreditlinie auf dem laufenden Konto, flexibel, Zinsen nur auf die Inanspruchnahme, teuer – für kurzfristigen Bedarf.'
},
blBau('zuordnung', {id:'FA4', modul:'FA', stufe:3, titel:'Finanzierungsformen im Überblick', tags:['Finanzierung', 'Finanzierungsarten'],
  text:'Ordne jede Finanzierung nach Herkunft und Rechtsstellung des Kapitals ein.', kategorien:['Außen- und Eigenfinanzierung', 'Außen- und Fremdfinanzierung', 'Innen- und Eigenfinanzierung', 'Innen- und Fremdfinanzierung', 'Innenfinanzierung durch Vermögensumschichtung'], anzahl:6,
  faelle:[
    {t:'Kapitalerhöhung durch Ausgabe neuer Aktien', k:0}, {t:'Bankdarlehen', k:1}, {t:'Gewinnthesaurierung (Gewinne einbehalten)', k:2},
    {t:'Bildung von Pensionsrückstellungen', k:3, weg:'Rückstellungen sind Fremdkapital, das im Unternehmen entsteht.'}, {t:'Lieferantenkredit', k:1},
    {t:'Aufnahme eines neuen GmbH-Gesellschafters', k:0}, {t:'Abschreibungsrückflüsse', k:4, weg:'Umschichtung: Anlagevermögen wird über die Umsatzerlöse zu Geld.'},
    {t:'Bildung stiller Reserven', k:2}
  ],
  hinweise:['Herkunft (innen/außen) und Rechtsstellung (Eigentümer/Gläubiger) getrennt prüfen.'],
  merke:'Außen + Eigen: Beteiligung · Außen + Fremd: Kredite · Innen + Eigen: Selbstfinanzierung · Innen + Fremd: Rückstellungen · Vermögensumschichtung: Abschreibungsrückflüsse, Verkauf von Vermögen (manche Lehrbücher zählen Abschreibungen zur Eigenfinanzierung).'}),

/* ---------- Modul · Kreditwürdigkeit, Blankokredit, Zession und Grundpfandrechte ---------- */
{
  id:'FZ1', modul:'FZ', typ:'berechnung', mehrfach:true, stufe:1, titel:'Bonität: Kreditfähigkeit und Kreditwürdigkeit',
  tags:['Finanzierung','Kreditsicherheiten','Bonität'],
  text:'Bevor die Bank der Kunststofftechnik Lang GmbH einen Kredit gewährt, prüft sie deren Bonität.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Kreditfähigkeit heißt: Der Kreditnehmer kann rechtswirksam einen Kreditvertrag abschließen (Geschäftsfähigkeit, Vertretungsmacht).', richtig:true, weg:'rechtliche Voraussetzung'},
    {text:'Kreditwürdigkeit heißt: Es ist zu erwarten, dass der Kreditnehmer Zinsen und Tilgung pünktlich zahlt.', richtig:true, weg:'wirtschaftliche und persönliche Voraussetzungen'},
    {text:'Für die Kreditwürdigkeit prüft die Bank z. B. Jahresabschlüsse, Auftragslage, Sicherheiten, Auskünfte (z. B. SCHUFA, Creditreform) und die Zuverlässigkeit der Geschäftsführung.', richtig:true, weg:''},
    {text:'Ein Blankokredit wird ohne besondere Sicherheiten nur aufgrund der Bonität gewährt – meist nur bei sehr guter Bonität und kleineren Beträgen.', richtig:true, weg:'Personalkredit ohne Sicherheiten'},
    {text:'Wer kreditfähig ist, ist automatisch auch kreditwürdig.', fehler:'Auch ein voll geschäftsfähiger Kunde kann zahlungsunfähig sein.'}
  ],
  hinweise:['Darf er – und kann er zurückzahlen?'],
  merke:'Bonität = Kreditfähigkeit (rechtlich: darf abschließen) + Kreditwürdigkeit (wirtschaftlich/persönlich: wird zurückzahlen) · Blankokredit: ohne Sicherheiten, nur bei sehr guter Bonität.'
},
blBau('zuordnung', {id:'FZ2', modul:'FZ', stufe:1, titel:'Kreditfähigkeit oder Kreditwürdigkeit?', tags:['Finanzierung', 'Kreditsicherheiten', 'Bonität'],
  text:'Welcher Prüfung dient die Information?', kategorien:['Kreditfähigkeit', 'Kreditwürdigkeit'], anzahl:6,
  faelle:[
    {t:'Handelsregisterauszug: Wer darf die GmbH vertreten?', k:0}, {t:'Jahresabschlüsse der letzten drei Jahre', k:1},
    {t:'Personalausweis: Ist der Kunde volljährig?', k:0}, {t:'Auskunft der Creditreform über das Zahlungsverhalten', k:1},
    {t:'Auftragsbestand für die nächsten zwölf Monate', k:1}, {t:'Gesellschaftsvertrag: Braucht der Geschäftsführer für Kredite die Zustimmung der Gesellschafter?', k:0},
    {t:'Wert der angebotenen Sicherheiten', k:1}
  ],
  hinweise:['Rechtliche Befugnis oder wirtschaftliche Leistungsfähigkeit?'],
  merke:'Kreditfähigkeit: Geschäftsfähigkeit, Vertretungsbefugnis · Kreditwürdigkeit: Vermögen, Ertragslage, Zahlungsverhalten, Sicherheiten, Persönlichkeit.'}),
{
  id:'FZ3', modul:'FZ', typ:'berechnung', mehrfach:true, stufe:2, titel:'Die Zession (Forderungsabtretung)',
  tags:['Finanzierung','Kreditsicherheiten','Zession'],
  text:'Die Kunststofftechnik Lang GmbH tritt zur Sicherung eines Kredits Forderungen gegenüber ihren Kunden an die Bank ab.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Bei der Zession tritt der Kreditnehmer (Zedent) Forderungen an den Kreditgeber (Zessionar) ab; der Kunde (Drittschuldner) schuldet weiterhin den Betrag.', richtig:true, weg:'§ 398 BGB'},
    {text:'Bei der stillen Zession erfahren die Kunden nichts; sie zahlen weiter an die Lang GmbH.', richtig:true, weg:'üblich, um Kunden nicht zu beunruhigen – Risiko für die Bank'},
    {text:'Bei der offenen Zession werden die Kunden benachrichtigt und zahlen mit befreiender Wirkung nur noch an die Bank.', richtig:true, weg:''},
    {text:'Bei der Globalzession werden alle gegenwärtigen und künftigen Forderungen gegen bestimmte Kunden (z. B. Buchstaben A–K) abgetreten; bei der Mantelzession werden Forderungen bis zu einer bestimmten Gesamtsumme abgetreten, die laufend aufgefüllt werden.', richtig:true, weg:''},
    {text:'Bei der stillen Zession ist die Bank vor allen Risiken geschützt.', fehler:'Risiken: Forderung besteht nicht, wurde schon bezahlt, mehrfach abgetreten oder der Kunde zahlt nicht.'}
  ],
  hinweise:['Wer erfährt von der Abtretung – und an wen wird gezahlt?'],
  merke:'Zession: Abtretung von Forderungen · still (Kunde weiß nichts) oder offen (Kunde zahlt an Bank) · Global- und Mantelzession für viele Forderungen · Risiko: Bestand und Werthaltigkeit der Forderungen.'
},
blBau('zuordnung', {id:'FZ4', modul:'FZ', stufe:2, titel:'Hypothek oder Grundschuld?', tags:['Finanzierung', 'Kreditsicherheiten', 'Grundpfandrechte'],
  text:'Ordne die Merkmale zu.', kategorien:['Hypothek', 'Grundschuld', 'beide'], anzahl:5,
  faelle:[
    {t:'Sie ist streng an eine bestimmte Forderung gebunden (akzessorisch) und vermindert sich mit jeder Tilgung.', k:0},
    {t:'Sie besteht unabhängig von einer Forderung und kann nach Tilgung für neue Kredite wieder verwendet werden.', k:1},
    {t:'Sie ist ein Grundpfandrecht und wird ins Grundbuch eingetragen.', k:2},
    {t:'Sie ist heute in der Bankpraxis die übliche Form der Kreditsicherung mit Grundstücken.', k:1},
    {t:'Bei Nichtzahlung kann der Gläubiger die Zwangsversteigerung des Grundstücks betreiben.', k:2},
    {t:'Wird das Darlehen getilgt, geht sie in dieser Höhe automatisch auf den Eigentümer über (Eigentümergrundschuld).', k:0}
  ],
  hinweise:['Ist das Recht an die Forderung gebunden?'],
  merke:'Hypothek: akzessorisch (an die Forderung gebunden) · Grundschuld: abstrakt (unabhängig), flexibel wiederverwendbar – Standard in der Praxis · beide: Grundbuch, Zwangsversteigerung.'}),
blBau('zuordnung', {id:'FZ5', modul:'FZ', stufe:3, titel:'Welche Sicherheit bietet sich an?', tags:['Finanzierung', 'Kreditsicherheiten', 'Fall'],
  text:'Welche Kreditsicherheit passt am besten zum Fall?', kategorien:['Blankokredit', 'Bürgschaft', 'Zession', 'Sicherungsübereignung', 'Grundschuld'], anzahl:5,
  faelle:[
    {t:'Ein Kunde mit hervorragender Bonität braucht kurzfristig 20.000 €.', k:0},
    {t:'Die Geschäftsführerin einer jungen GmbH haftet mit ihrem Privatvermögen für den Kredit der Gesellschaft.', k:1},
    {t:'Ein Großhändler hat hohe Forderungen gegenüber zahlungskräftigen Kunden, aber kaum Anlagevermögen.', k:2},
    {t:'Eine Spedition finanziert neue Lkw und braucht sie im täglichen Einsatz.', k:3},
    {t:'Für den Bau einer Lagerhalle auf dem eigenen Grundstück wird ein Darlehen über 20 Jahre benötigt.', k:4},
    {t:'Eine Druckerei finanziert eine Druckmaschine, die im Betrieb weiter genutzt werden muss.', k:3}
  ],
  hinweise:['Was hat der Kreditnehmer: gute Bonität, einen Bürgen, Forderungen, bewegliche Sachen im Einsatz, ein Grundstück?'],
  merke:'Bonität sehr gut → Blankokredit · Person haftet → Bürgschaft · Forderungen → Zession · bewegliche Sachen, die genutzt werden → Sicherungsübereignung · Grundstück → Grundschuld.'}),
/* ---------- Modul · Bilanzkennzahlen ---------- */
{
  id:'JK1', modul:'JK', typ:'berechnung', mehrfach:true, stufe:1, titel:'Bilanzkennzahlen im Überblick',
  tags:['Bilanzanalyse','Kennzahlen','Theorie'],
  text:'Die Hausbank wertet die Bilanz der Rheinpfalz AG mit Kennzahlen aus.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Eigenkapitalquote = Eigenkapital ÷ Gesamtkapital × 100 – sie zeigt die finanzielle Unabhängigkeit.', richtig:true, weg:'Kapitalstruktur (Finanzierung)'},
    {text:'Anlagendeckungsgrad II = (Eigenkapital + langfristiges Fremdkapital) ÷ Anlagevermögen × 100 – er sollte mindestens 100 % betragen.', richtig:true, weg:'Goldene Bilanzregel: langfristig gebundenes Vermögen langfristig finanzieren.'},
    {text:'Liquidität 2. Grades = (flüssige Mittel + kurzfristige Forderungen) ÷ kurzfristige Verbindlichkeiten × 100 – Richtwert mindestens 100 %.', richtig:true, weg:'„Quick Ratio“'},
    {text:'Die Anlagenintensität = Anlagevermögen ÷ Gesamtvermögen × 100 beschreibt die Vermögensstruktur.', richtig:true, weg:'In der Industrie ist sie meist hoch.'},
    {text:'Der Verschuldungsgrad = Eigenkapital ÷ Fremdkapital × 100; je höher er ist, desto besser.', fehler:'Verschuldungsgrad = Fremdkapital ÷ Eigenkapital × 100; ein hoher Wert bedeutet hohe Abhängigkeit von Gläubigern.'}
  ],
  hinweise:['Kapitalstruktur, Vermögensstruktur, Deckung, Liquidität – was wird jeweils ins Verhältnis gesetzt?'],
  merke:'Eigenkapitalquote = EK ÷ GK · Verschuldungsgrad = FK ÷ EK · Anlagendeckung I = EK ÷ AV, II = (EK + langfr. FK) ÷ AV · Liquidität 1. Grades = flüssige Mittel ÷ kurzfr. Verb., 2. Grades = (flüssige Mittel + kurzfr. Ford.) ÷ kurzfr. Verb., 3. Grades = Umlaufvermögen ÷ kurzfr. Verb. (jeweils × 100).'
},
blBau('rechnung', {id:'JK2', modul:'JK', stufe:1, titel:'Kapital- und Vermögensstruktur', tags:['Bilanzanalyse', 'Kennzahlen', 'Rechnung'], kopf:'Strukturbilanz (T€)',
  text:'Die aufbereitete Bilanz (Strukturbilanz) der Rheinpfalz AG enthält folgende Werte in Tausend Euro. Berechne die Kennzahlen der Kapital- und der Vermögensstruktur.',
  spalten:['T€'],
  zeilen:[{id:'av', t:'Anlagevermögen', e:''}, {id:'uv', t:'Umlaufvermögen', e:''}, {id:'ek', t:'Eigenkapital', e:''}, {id:'lfk', t:'langfristiges Fremdkapital', e:''}, {id:'kfk', t:'kurzfristiges Fremdkapital', e:''},
    {id:'gk', t:'Gesamtkapital', e:'', f:'ek + lfk + kfk'},
    {id:'ekq', t:'Eigenkapitalquote = Eigenkapital ÷ Gesamtkapital × 100', kurz:'Eigenkapitalquote', e:'%', f:'ek / gk * 100'},
    {id:'fkq', t:'Fremdkapitalquote = Fremdkapital ÷ Gesamtkapital × 100', kurz:'Fremdkapitalquote', e:'%', f:'(lfk + kfk) / gk * 100'},
    {id:'vg', t:'Verschuldungsgrad = Fremdkapital ÷ Eigenkapital × 100', kurz:'Verschuldungsgrad', e:'%', f:'(lfk + kfk) / ek * 100'},
    {id:'ai', t:'Anlagenintensität = Anlagevermögen ÷ Gesamtvermögen × 100', kurz:'Anlagenintensität', e:'%', f:'av / (av + uv) * 100'}],
  werte:[{av:6000, uv:4000, ek:3500, lfk:4000, kfk:2500}],
  sets:[[{av:4800, uv:3200, ek:3200, lfk:2400, kfk:2400}], [{av:9000, uv:3000, ek:3000, lfk:6000, kfk:3000}], [{av:5000, uv:5000, ek:4500, lfk:2500, kfk:3000}]],
  hinweise:['Gesamtkapital = Eigenkapital + Fremdkapital = Gesamtvermögen.', 'Fremdkapital = lang- und kurzfristiges Fremdkapital.'],
  merke:'Je höher die Eigenkapitalquote, desto unabhängiger und krisenfester ist das Unternehmen. Ein hoher Verschuldungsgrad bedeutet hohe Zins- und Tilgungslasten.'}),
blBau('rechnung', {id:'JK3', modul:'JK', stufe:2, titel:'Anlagendeckung und Liquidität', tags:['Bilanzanalyse', 'Kennzahlen', 'Liquidität', 'Rechnung'], kopf:'Strukturbilanz (T€)',
  text:'Aus der Strukturbilanz der Rheinpfalz AG (Werte in T€) sollen die Deckungs- und die Liquiditätskennzahlen berechnet werden.',
  spalten:['T€'],
  zeilen:[{id:'av', t:'Anlagevermögen', e:''}, {id:'vr', t:'Vorräte', e:''}, {id:'fo', t:'kurzfristige Forderungen', e:''}, {id:'fm', t:'flüssige Mittel', e:''},
    {id:'ek', t:'Eigenkapital', e:''}, {id:'lfk', t:'langfristiges Fremdkapital', e:''}, {id:'kfk', t:'kurzfristiges Fremdkapital', e:''},
    {id:'ad1', t:'Anlagendeckungsgrad I = Eigenkapital ÷ Anlagevermögen × 100', kurz:'Anlagendeckung I', e:'%', f:'ek / av * 100'},
    {id:'ad2', t:'Anlagendeckungsgrad II = (Eigenkapital + langfristiges FK) ÷ Anlagevermögen × 100', kurz:'Anlagendeckung II', e:'%', f:'(ek + lfk) / av * 100'},
    {id:'l1', t:'Liquidität 1. Grades = flüssige Mittel ÷ kurzfristiges FK × 100', kurz:'Liquidität 1. Grades', e:'%', f:'fm / kfk * 100'},
    {id:'l2', t:'Liquidität 2. Grades = (flüssige Mittel + kurzfristige Forderungen) ÷ kurzfristiges FK × 100', kurz:'Liquidität 2. Grades', e:'%', f:'(fm + fo) / kfk * 100'},
    {id:'l3', t:'Liquidität 3. Grades = Umlaufvermögen ÷ kurzfristiges FK × 100', kurz:'Liquidität 3. Grades', e:'%', f:'(fm + fo + vr) / kfk * 100'}],
  werte:[{av:6000, vr:1800, fo:1500, fm:500, ek:3500, lfk:4000, kfk:2300}],
  sets:[[{av:5000, vr:2000, fo:1200, fm:800, ek:4000, lfk:2000, kfk:3000}], [{av:8000, vr:1500, fo:900, fm:100, ek:2500, lfk:4500, kfk:3500}], [{av:4000, vr:1000, fo:1600, fm:400, ek:3000, lfk:1500, kfk:2500}]],
  wahl:[{id:'w', t:'Die goldene Bilanzregel (Anlagendeckung II mindestens 100 %) ist …', opts:['erfüllt.', 'nicht erfüllt – Teile des Anlagevermögens sind kurzfristig finanziert.'], r:'(ek + lfk) >= av ? 0 : 1'}],
  hinweise:['Umlaufvermögen = Vorräte + kurzfristige Forderungen + flüssige Mittel.', 'Richtwerte: Liquidität 1. Grades etwa 20 %, 2. Grades mindestens 100 %, 3. Grades etwa 200 %.'],
  merke:'Goldene Bilanzregel: Anlagevermögen langfristig finanzieren (Anlagendeckung II ≥ 100 %) · Liquidität 2. Grades unter 100 %: kurzfristige Schulden sind nicht durch schnell verfügbare Mittel gedeckt.'}),
blBau('rechnung', {id:'JK4', modul:'JK', stufe:2, titel:'Branchenvergleich', tags:['Bilanzanalyse', 'Kennzahlen', 'Branchenvergleich', 'Rechnung'], kopf:'Strukturbilanzen (T€)',
  text:'Die Hausbank vergleicht die Rheinpfalz AG mit dem Durchschnitt der Verpackungsindustrie (Werte in T€, für die Branche auf die gleiche Bilanzsumme umgerechnet). Berechne die Kennzahlen und beurteile.',
  spalten:['Rheinpfalz AG', 'Branchendurchschnitt'],
  zeilen:[{id:'av', t:'Anlagevermögen', e:''}, {id:'uv', t:'Umlaufvermögen', e:''}, {id:'fo', t:'davon kurzfristige Forderungen und flüssige Mittel', e:''},
    {id:'ek', t:'Eigenkapital', e:''}, {id:'lfk', t:'langfristiges Fremdkapital', e:''}, {id:'kfk', t:'kurzfristiges Fremdkapital', e:''},
    {id:'ekq', t:'Eigenkapitalquote', e:'%', f:'ek / (ek + lfk + kfk) * 100'},
    {id:'ad2', t:'Anlagendeckungsgrad II', e:'%', f:'(ek + lfk) / av * 100'},
    {id:'l2', t:'Liquidität 2. Grades', e:'%', f:'fo / kfk * 100'}],
  werte:[{av:6000, uv:4000, fo:2200, ek:2500, lfk:3000, kfk:4500}, {av:5500, uv:4500, fo:3000, ek:3800, lfk:3200, kfk:3000}],
  sets:[[{av:5000, uv:5000, fo:3300, ek:4200, lfk:2800, kfk:3000}, {av:5500, uv:4500, fo:3000, ek:3800, lfk:3200, kfk:3000}], [{av:7000, uv:3000, fo:1800, ek:3000, lfk:4500, kfk:2500}, {av:6500, uv:3500, fo:2400, ek:3500, lfk:3500, kfk:3000}]],
  wahl:[{id:'w1', t:'Im Vergleich zur Branche ist die Eigenkapitalquote der Rheinpfalz AG …', opts:['höher.', 'niedriger.'], r:'ek@0 / (ek@0 + lfk@0 + kfk@0) > ek@1 / (ek@1 + lfk@1 + kfk@1) ? 0 : 1'},
    {id:'w2', t:'Die Liquidität 2. Grades der Rheinpfalz AG …', opts:['erreicht den Richtwert von 100 %.', 'liegt unter dem Richtwert von 100 % – kurzfristige Zahlungsschwierigkeiten drohen.'], r:'fo@0 >= kfk@0 ? 0 : 1'}],
  hinweise:['Absolute Zahlen sagen wenig – erst die Kennzahlen machen Unternehmen vergleichbar.', 'Der Branchendurchschnitt ist ein Maßstab, kein Grenzwert.'],
  merke:'Beim Branchenvergleich (Betriebsvergleich) zeigt sich, ob ein Unternehmen besser oder schlechter finanziert ist als vergleichbare Unternehmen.'}),
blBau('zuordnung', {id:'JK5', modul:'JK', stufe:1, titel:'Welche Kennzahl beantwortet die Frage?', tags:['Bilanzanalyse', 'Kennzahlen'],
  text:'Welche Kennzahl beantwortet die Frage des Analysten?', kategorien:['Eigenkapitalquote', 'Anlagendeckungsgrad II', 'Liquidität 2. Grades', 'Anlagenintensität', 'Verschuldungsgrad'], anzahl:5,
  faelle:[
    {t:'Welcher Anteil des Gesamtkapitals stammt von den Eigentümern?', k:0},
    {t:'Ist das Anlagevermögen langfristig finanziert?', k:1},
    {t:'Kann das Unternehmen seine kurzfristigen Schulden mit schnell verfügbaren Mitteln bezahlen?', k:2},
    {t:'Wie viel des Vermögens ist langfristig im Betrieb gebunden?', k:3},
    {t:'Wie viel Euro Fremdkapital kommen auf einen Euro Eigenkapital?', k:4},
    {t:'Wird die goldene Bilanzregel eingehalten?', k:1}
  ],
  hinweise:['Finanzierung, Deckung, Liquidität oder Vermögensstruktur?'],
  merke:'Kapitalstruktur: Eigenkapitalquote, Verschuldungsgrad · Vermögensstruktur: Anlagenintensität · Deckung: Anlagendeckungsgrade · Zahlungsfähigkeit: Liquiditätsgrade.'}),
blBau('rechnung', {id:'JK6', modul:'JK', stufe:3, titel:'Zeitvergleich zweier Jahre', tags:['Bilanzanalyse', 'Kennzahlen', 'Zeitvergleich', 'Rechnung'], kopf:'Strukturbilanzen (T€)',
  text:'Die Rheinpfalz AG hat im Berichtsjahr eine neue Fertigungsstraße gekauft und mit einem kurzfristigen Kontokorrentkredit bezahlt. Vergleiche die Kennzahlen beider Jahre (Werte in T€).',
  spalten:['Vorjahr', 'Berichtsjahr'],
  zeilen:[{id:'av', t:'Anlagevermögen', e:''}, {id:'fo', t:'kurzfristige Forderungen und flüssige Mittel', e:''}, {id:'vr', t:'Vorräte', e:''},
    {id:'ek', t:'Eigenkapital', e:''}, {id:'lfk', t:'langfristiges Fremdkapital', e:''}, {id:'kfk', t:'kurzfristiges Fremdkapital', e:''},
    {id:'ad2', t:'Anlagendeckungsgrad II', e:'%', f:'(ek + lfk) / av * 100'},
    {id:'l2', t:'Liquidität 2. Grades', e:'%', f:'fo / kfk * 100'}],
  werte:[{av:5000, fo:2400, vr:1600, ek:3500, lfk:2500, kfk:3000}, {av:6500, fo:2300, vr:1700, ek:3600, lfk:2400, kfk:4500}],
  sets:[[{av:4000, fo:2000, vr:1000, ek:3000, lfk:1500, kfk:2500}, {av:5200, fo:1900, vr:1100, ek:3100, lfk:1400, kfk:3700}]],
  wahl:[{id:'w', t:'Die Finanzierung der Fertigungsstraße war …', opts:['solide – das Anlagevermögen ist weiterhin langfristig finanziert.', 'riskant – die goldene Bilanzregel ist verletzt und die Liquidität ist gesunken (fristeninkongruente Finanzierung).'], r:'(ek@1 + lfk@1) >= av@1 && fo@1 / kfk@1 >= fo@0 / kfk@0 ? 0 : 1'}],
  hinweise:['Langfristig gebundenes Vermögen sollte nicht mit kurzfristigen Krediten bezahlt werden.'],
  merke:'Fristenkongruenz: Anlagevermögen langfristig finanzieren. Kurzfristige Kredite für Investitionen verschlechtern Anlagendeckung und Liquidität.'}),

(() => {
  const z = (l, r) => `<tr><td style="padding:2px 8px 2px 0">${l[0] || ''}</td><td style="padding:2px 12px 2px 0;text-align:right;white-space:nowrap;border-right:2px solid var(--tinte2)">${l[1] || ''}</td><td style="padding:2px 8px 2px 12px">${r[0] || ''}</td><td style="padding:2px 0;text-align:right;white-space:nowrap">${r[1] || ''}</td></tr>`;
  const k = (l, r) => z([`<b>${l}</b>`, ''], [`<b>${r}</b>`, '']);
  const bilanz = `<div style="overflow-x:auto;margin:10px 0"><table style="border-collapse:collapse;font-size:.88rem;min-width:520px">
<tr><th colspan="2" style="text-align:left;border-bottom:2px solid var(--tinte2);padding:4px 0">Aktiva</th><th colspan="2" style="text-align:right;border-bottom:2px solid var(--tinte2);padding:4px 0">Passiva</th></tr>
${k('A. Anlagevermögen', 'A. Eigenkapital')}
${z(['Grundstücke und Bauten', '{gb}'], ['Gezeichnetes Kapital', '{gk}'])}
${z(['Technische Anlagen und Maschinen', '{ma}'], ['Kapitalrücklage', '{kr}'])}
${z(['Betriebs- und Geschäftsausstattung', '{bga}'], ['Gewinnrücklagen', '{gr}'])}
${z(['', ''], ['Jahresüberschuss', '{jue}'])}
${k('B. Umlaufvermögen', 'B. Rückstellungen')}
${z(['Vorräte', '{vo}'], ['Pensionsrückstellungen', '{pr}'])}
${z(['Forderungen aus Lieferungen und Leistungen', '{fo}'], ['Sonstige Rückstellungen (kurzfristig)', '{sr}'])}
${z(['Kassenbestand, Guthaben bei Kreditinstituten', '{fm}'], ['<b>C. Verbindlichkeiten</b>', ''])}
${z(['', ''], ['Darlehen (Restlaufzeit über 5 Jahre)', '{dl}'])}
${z(['', ''], ['Verbindlichkeiten aus Lieferungen und Leistungen', '{vb}'])}
<tr><td style="border-top:2px solid var(--tinte2);padding:4px 0"><b>Bilanzsumme</b></td><td style="border-top:2px solid var(--tinte2);border-right:2px solid var(--tinte2);text-align:right;padding:4px 12px 4px 0"><b>{bs}</b></td><td style="border-top:2px solid var(--tinte2);padding:4px 0 4px 12px"><b>Bilanzsumme</b></td><td style="border-top:2px solid var(--tinte2);text-align:right;padding:4px 0"><b>{bs}</b></td></tr>
</table></div>`;
  const pos = ['gb', 'ma', 'bga', 'vo', 'fo', 'fm', 'gk', 'kr', 'gr', 'jue', 'pr', 'sr', 'dl', 'vb', 'u', 'zi'];
  const lab = {gb:'Grundstücke und Bauten', ma:'Technische Anlagen und Maschinen', bga:'Betriebs- und Geschäftsausstattung', vo:'Vorräte', fo:'Forderungen aus Lieferungen und Leistungen', fm:'flüssige Mittel', gk:'Gezeichnetes Kapital', kr:'Kapitalrücklage', gr:'Gewinnrücklagen', jue:'Jahresüberschuss', pr:'Pensionsrückstellungen', sr:'sonstige Rückstellungen', dl:'Darlehen', vb:'Verbindlichkeiten aLL', u:'Umsatzerlöse', zi:'Zinsaufwendungen'};
  const S = a => [Object.assign({bs:a.gb + a.ma + a.bga + a.vo + a.fo + a.fm}, a)];
  return blBau('rechnung', {id:'JK7', modul:'JK', stufe:2, titel:'Kennzahlen aus der Bilanz', tags:['Bilanzanalyse', 'Kennzahlen', 'Rentabilität', 'Rechnung'], kopf:'Auswertung',
    text:'Die Hausbank wertet die Schlussbilanz der Rheinpfalz AG zum 31.12. aus (Beträge in €):' + bilanz + 'Aus der Gewinn- und Verlustrechnung: Umsatzerlöse {u}, Zinsaufwendungen {zi}. Ermittle aus der Bilanz die Strukturzahlen und berechne die wichtigsten Kennzahlen. Rentabilitäten mit dem Eigen- bzw. Gesamtkapital laut Schlussbilanz; die Pensionsrückstellungen und das Darlehen sind langfristiges Fremdkapital.',
    zeilen:pos.map(id => ({id, t:lab[id], e:'€', aus:true})).concat([{id:'bs', t:'Bilanzsumme', e:'€', aus:true},
      {id:'av', t:'Anlagevermögen', e:'€', f:'gb + ma + bga'},
      {id:'uv', t:'Umlaufvermögen', e:'€', f:'vo + fo + fm'},
      {id:'ek', t:'Eigenkapital (einschließlich Jahresüberschuss)', kurz:'Eigenkapital', e:'€', f:'gk + kr + gr + jue'},
      {id:'lf', t:'langfristiges Fremdkapital', e:'€', f:'pr + dl'},
      {id:'kf', t:'kurzfristiges Fremdkapital', e:'€', f:'sr + vb'},
      {id:'ekq', t:'Eigenkapitalquote = EK ÷ Gesamtkapital × 100', kurz:'Eigenkapitalquote', e:'%', f:'(gk + kr + gr + jue) / bs * 100'},
      {id:'ad2', t:'Anlagendeckungsgrad II = (EK + langfr. FK) ÷ AV × 100', kurz:'Anlagendeckungsgrad II', e:'%', f:'(gk + kr + gr + jue + pr + dl) / (gb + ma + bga) * 100'},
      {id:'l2', t:'Liquidität 2. Grades = (flüssige Mittel + Forderungen) ÷ kurzfr. FK × 100', kurz:'Liquidität 2. Grades', e:'%', f:'(fm + fo) / (sr + vb) * 100'},
      {id:'ekr', t:'Eigenkapitalrentabilität = Jahresüberschuss ÷ EK × 100', kurz:'Eigenkapitalrentabilität', e:'%', f:'jue / (gk + kr + gr + jue) * 100'},
      {id:'gkr', t:'Gesamtkapitalrentabilität = (Jahresüberschuss + Zinsen) ÷ Gesamtkapital × 100', kurz:'Gesamtkapitalrentabilität', e:'%', f:'(jue + zi) / bs * 100'},
      {id:'ur', t:'Umsatzrentabilität = Jahresüberschuss ÷ Umsatzerlöse × 100', kurz:'Umsatzrentabilität', e:'%', f:'jue / u * 100'}]),
    werte:S({gb:1200000, ma:900000, bga:300000, vo:700000, fo:550000, fm:150000, gk:1000000, kr:200000, gr:300000, jue:180000, pr:320000, sr:120000, dl:980000, vb:700000, u:6000000, zi:70000}),
    sets:[S({gb:800000, ma:1100000, bga:200000, vo:650000, fo:480000, fm:270000, gk:800000, kr:150000, gr:420000, jue:210000, pr:260000, sr:90000, dl:700000, vb:870000, u:5200000, zi:48000}),
      S({gb:1500000, ma:1300000, bga:250000, vo:900000, fo:600000, fm:90000, gk:1200000, kr:100000, gr:250000, jue:95000, pr:400000, sr:150000, dl:900000, vb:1545000, u:7500000, zi:110000}),
      S({gb:600000, ma:700000, bga:150000, vo:380000, fo:420000, fm:250000, gk:600000, kr:120000, gr:380000, jue:160000, pr:180000, sr:60000, dl:520000, vb:480000, u:4000000, zi:36000})],
    wahl:[{id:'gbr', t:'Goldene Bilanzregel (Anlagendeckungsgrad II mindestens 100 %):', opts:['eingehalten – das Anlagevermögen ist langfristig finanziert.', 'nicht eingehalten – ein Teil des Anlagevermögens ist kurzfristig finanziert.'], r:'(gk@0 + kr@0 + gr@0 + jue@0 + pr@0 + dl@0) >= (gb@0 + ma@0 + bga@0) ? 0 : 1'},
      {id:'liq', t:'Liquidität 2. Grades (Richtwert mindestens 100 %):', opts:['ausreichend – die kurzfristigen Schulden sind durch flüssige Mittel und Forderungen gedeckt.', 'zu niedrig – ohne Verkauf von Vorräten oder neue Kredite drohen Zahlungsengpässe.'], r:'fm@0 + fo@0 >= sr@0 + vb@0 ? 0 : 1'}],
    hinweise:['Strukturzahlen: Posten der Bilanz zu Anlagevermögen, Umlaufvermögen, Eigenkapital, langfristigem und kurzfristigem Fremdkapital zusammenfassen.', 'Der Jahresüberschuss steht in der Bilanz im Eigenkapital – er gehört zum Eigenkapital und ist zugleich der Gewinn für die Rentabilitäten.', 'Gesamtkapital = Bilanzsumme; bei der Gesamtkapitalrentabilität die Zinsen zum Jahresüberschuss addieren.'],
    merke:'Die Bilanz liefert die Strukturzahlen (AV, UV, EK, langfristiges und kurzfristiges FK) und mit dem Jahresüberschuss auch den Gewinn. Kennzahlen: Eigenkapitalquote, Anlagendeckung, Liquidität, Rentabilitäten – erst der Vergleich mit Vorjahr oder Branche macht sie aussagekräftig.'}); })(),

/* ---------- Modul · Analyse und Kritik am Jahresabschluss ---------- */
{
  id:'JA1', modul:'JA', typ:'berechnung', mehrfach:true, stufe:1, titel:'Ziele und Vorgehen der Bilanzanalyse',
  tags:['Bilanzanalyse','Jahresabschluss','Theorie'],
  text:'Die Rheinpfalz AG veröffentlicht ihren Jahresabschluss. Verschiedene Interessengruppen werten ihn aus.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Vor der Auswertung wird die Bilanz zu einer Strukturbilanz aufbereitet: Vermögen nach Bindungsdauer, Kapital nach Fristigkeit (Eigenkapital, lang- und kurzfristiges Fremdkapital).', richtig:true, weg:'Aufbereitung'},
    {text:'Beim Zeitvergleich werden Kennzahlen mehrerer Jahre desselben Unternehmens verglichen.', richtig:true, weg:'Entwicklung erkennen'},
    {text:'Beim Betriebs- oder Branchenvergleich werden die Kennzahlen mit anderen Unternehmen bzw. dem Branchendurchschnitt verglichen.', richtig:true, weg:'Stellung im Wettbewerb'},
    {text:'Beim Soll-Ist-Vergleich werden die erreichten Werte mit geplanten Werten verglichen.', richtig:true, weg:'Zielerreichung'},
    {text:'Eine einzelne Kennzahl eines einzelnen Jahres reicht aus, um ein Unternehmen sicher zu beurteilen.', fehler:'Kennzahlen werden erst im Vergleich (Zeit, Branche, Plan) und im Zusammenhang aussagekräftig.'}
  ],
  hinweise:['Womit wird verglichen?'],
  merke:'Bilanzanalyse: aufbereiten (Strukturbilanz) → Kennzahlen bilden → vergleichen (Zeit-, Betriebs-/Branchen-, Soll-Ist-Vergleich) → beurteilen.'
},
blBau('zuordnung', {id:'JA2', modul:'JA', stufe:1, titel:'Strukturbilanz: wohin gehört der Posten?', tags:['Bilanzanalyse', 'Strukturbilanz'],
  text:'Ordne die Posten der Passivseite für die Strukturbilanz zu.', kategorien:['Eigenkapital', 'langfristiges Fremdkapital', 'kurzfristiges Fremdkapital'], anzahl:6,
  faelle:[
    {t:'Gezeichnetes Kapital und Gewinnrücklagen', k:0}, {t:'Pensionsrückstellungen', k:1, weg:'Sie werden erst nach vielen Jahren fällig.'},
    {t:'Darlehen mit einer Restlaufzeit von acht Jahren', k:1}, {t:'Verbindlichkeiten aus Lieferungen und Leistungen', k:2},
    {t:'Steuerrückstellungen', k:2, weg:'Sie werden meist im Folgejahr fällig.'}, {t:'Bilanzgewinn, der im Mai ausgeschüttet werden soll', k:2, weg:'Der auszuschüttende Teil fließt kurzfristig ab.'},
    {t:'Kontokorrentkredit', k:2}, {t:'Hypothekendarlehen mit 15 Jahren Laufzeit', k:1}
  ],
  hinweise:['Wie lange steht das Kapital dem Unternehmen zur Verfügung?'],
  merke:'Strukturbilanz: Eigenkapital (ohne geplante Ausschüttung) · langfristiges FK (Restlaufzeit über ein Jahr, Pensionsrückstellungen) · kurzfristiges FK (Verbindlichkeiten a. LL, Steuerrückstellungen, Ausschüttung, Kontokorrent).'}),
blBau('zuordnung', {id:'JA3', modul:'JA', stufe:2, titel:'Wer interessiert sich wofür?', tags:['Bilanzanalyse', 'Interessengruppen'],
  text:'Welche Interessengruppe stellt die Frage an den Jahresabschluss?', kategorien:['Bank (Kreditgeber)', 'Anteilseigner', 'Lieferanten', 'Beschäftigte', 'Finanzamt'], anzahl:5,
  faelle:[
    {t:'Kann das Unternehmen Zinsen und Tilgung zahlen, und welche Sicherheiten gibt es?', k:0},
    {t:'Wie hoch ist die Rendite meines Kapitals, und wie viel Dividende gibt es?', k:1},
    {t:'Bezahlt der Kunde seine Rechnungen pünktlich, und bleibt er zahlungsfähig?', k:2},
    {t:'Sind die Arbeitsplätze sicher, und ist Spielraum für Lohnerhöhungen?', k:3},
    {t:'Wie hoch ist der zu versteuernde Gewinn?', k:4}
  ],
  hinweise:['Jede Gruppe hat ein eigenes Interesse.'],
  merke:'Kreditgeber: Liquidität, Sicherheiten · Anteilseigner: Rentabilität, Dividende · Lieferanten: Zahlungsfähigkeit · Beschäftigte: Sicherheit, Lohnspielraum · Staat: Steuern.'}),
{
  id:'JA4', modul:'JA', typ:'berechnung', mehrfach:true, stufe:2, titel:'Grenzen der Bilanzanalyse',
  tags:['Bilanzanalyse','Kritik','Jahresabschluss'],
  text:'Ein Analyst warnt: „Bilanzkennzahlen darf man nicht überschätzen.“',
  frage:'Welche Kritikpunkte am Jahresabschluss als Informationsquelle treffen zu?',
  optionen:[
    {text:'Der Jahresabschluss ist vergangenheitsbezogen; bei Veröffentlichung sind die Zahlen oft schon Monate alt.', richtig:true, weg:'Die Zukunft ist nicht abgebildet.'},
    {text:'Die Bilanz ist eine Stichtagsaufnahme; am 31.12. kann die Lage bewusst günstig dargestellt sein (Window Dressing).', richtig:true, weg:'z. B. Kredit kurz vorher zurückgezahlt und im Januar neu aufgenommen'},
    {text:'Durch Bewertungswahlrechte und stille Reserven (Bilanzpolitik) entspricht der Bilanzwert nicht unbedingt dem tatsächlichen Wert.', richtig:true, weg:'Vergleiche zwischen Unternehmen werden dadurch schwieriger.'},
    {text:'Wichtige Erfolgsfaktoren fehlen, z. B. Auftragsbestand, Qualifikation der Beschäftigten, Innovationskraft oder Kundenzufriedenheit.', richtig:true, weg:'qualitative Faktoren'},
    {text:'Weil der Jahresabschluss geprüft ist, zeigt er die künftige Entwicklung zuverlässig.', fehler:'Die Prüfung bestätigt die Ordnungsmäßigkeit, nicht die Zukunft.'}
  ],
  hinweise:['Zeitbezug, Stichtag, Bewertung, fehlende Informationen.'],
  merke:'Grenzen: vergangenheits- und stichtagsbezogen, Bilanzpolitik und stille Reserven, fehlende qualitative Informationen – Kennzahlen immer im Zusammenhang und im Vergleich beurteilen.'
},
blBau('zuordnung', {id:'JA5', modul:'JA', stufe:2, titel:'Welche Vergleichsart?', tags:['Bilanzanalyse', 'Vergleich'],
  text:'Welche Art des Vergleichs liegt vor?', kategorien:['Zeitvergleich', 'Betriebs- bzw. Branchenvergleich', 'Soll-Ist-Vergleich'], anzahl:5,
  faelle:[
    {t:'Die Eigenkapitalquote ist von 32 % auf 35 % gestiegen.', k:0}, {t:'Unsere Eigenkapitalquote liegt 4 Prozentpunkte unter dem Branchendurchschnitt.', k:1},
    {t:'Geplant war eine Liquidität 2. Grades von 110 %, erreicht wurden 96 %.', k:2}, {t:'Der Wettbewerber hat eine deutlich höhere Anlagenintensität.', k:1},
    {t:'Seit fünf Jahren sinkt die Anlagendeckung kontinuierlich.', k:0}, {t:'Die Zielvorgabe von 40 % Eigenkapitalquote wurde übertroffen.', k:2}
  ],
  hinweise:['Mit früheren Jahren, mit anderen Unternehmen oder mit dem Plan?'],
  merke:'Zeitvergleich (eigene Vorjahre) · Betriebs-/Branchenvergleich (andere Unternehmen) · Soll-Ist-Vergleich (Plan).'}),

/* ---------- Modul · Rentabilität und Cash-Flow ---------- */
{
  id:'JR1', modul:'JR', typ:'berechnung', mehrfach:true, stufe:1, titel:'Rentabilitätskennzahlen und Cash-Flow',
  tags:['JA-Analyse','Rentabilität','Cash-Flow','Theorie'],
  text:'Neben Kapital- und Vermögensstruktur wertet die Bank auch den Erfolg und die Finanzkraft der Rheinpfalz AG aus.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Eigenkapitalrentabilität = Jahresüberschuss ÷ Eigenkapital × 100 – die Verzinsung des Kapitals der Eigentümer.', richtig:true, weg:''},
    {text:'Gesamtkapitalrentabilität = (Jahresüberschuss + Fremdkapitalzinsen) ÷ Gesamtkapital × 100 – die Verzinsung des gesamten eingesetzten Kapitals.', richtig:true, weg:'Die Zinsen sind das Entgelt für das Fremdkapital.'},
    {text:'Umsatzrentabilität = Jahresüberschuss ÷ Umsatzerlöse × 100 – wie viel Gewinn von 100 € Umsatz übrig bleiben.', richtig:true, weg:''},
    {text:'Der Cash-Flow (vereinfacht: Jahresüberschuss + Abschreibungen + Erhöhung der langfristigen Rückstellungen) zeigt, wie viel Geld das Unternehmen aus eigener Kraft erwirtschaftet hat.', richtig:true, weg:'Innenfinanzierungskraft: für Investitionen, Tilgung und Ausschüttung'},
    {text:'Der Cash-Flow ist immer gleich dem Jahresüberschuss.', fehler:'Aufwendungen ohne Auszahlung (z. B. Abschreibungen) mindern den Gewinn, aber nicht den Geldzufluss – deshalb ist der Cash-Flow meist höher.'}
  ],
  hinweise:['Gewinn im Verhältnis zu welchem Kapital oder zum Umsatz?', 'Welche Aufwendungen führen zu keiner Auszahlung?'],
  merke:'Eigenkapitalrentabilität = JÜ ÷ EK × 100 · Gesamtkapitalrentabilität = (JÜ + FK-Zinsen) ÷ GK × 100 · Umsatzrentabilität = JÜ ÷ Umsatz × 100 · Cash-Flow (vereinfacht) = JÜ + Abschreibungen + Erhöhung langfristiger Rückstellungen.'
},
blBau('rechnung', {id:'JR2', modul:'JR', stufe:2, titel:'Rentabilitäten im Branchenvergleich', tags:['JA-Analyse', 'Rentabilität', 'Branchenvergleich', 'Rechnung'], kopf:'Erfolgszahlen (T€)',
  text:'Die Rheinpfalz AG vergleicht ihre Rentabilität mit dem Durchschnitt der Verpackungsindustrie (Werte in T€). Berechne die drei Rentabilitäten und beurteile.',
  spalten:['Rheinpfalz AG', 'Branchendurchschnitt'],
  zeilen:[{id:'jue', t:'Jahresüberschuss', e:''}, {id:'zi', t:'Zinsen für Fremdkapital', e:''}, {id:'ek', t:'Eigenkapital', e:''}, {id:'fk', t:'Fremdkapital', e:''}, {id:'u', t:'Umsatzerlöse', e:''},
    {id:'ekr', t:'Eigenkapitalrentabilität = Jahresüberschuss ÷ Eigenkapital × 100', kurz:'Eigenkapitalrentabilität', e:'%', f:'jue / ek * 100'},
    {id:'gkr', t:'Gesamtkapitalrentabilität = (Jahresüberschuss + Zinsen) ÷ Gesamtkapital × 100', kurz:'Gesamtkapitalrentabilität', e:'%', f:'(jue + zi) / (ek + fk) * 100'},
    {id:'ur', t:'Umsatzrentabilität = Jahresüberschuss ÷ Umsatzerlöse × 100', kurz:'Umsatzrentabilität', e:'%', f:'jue / u * 100'}],
  werte:[{jue:420, zi:280, ek:3500, fk:6500, u:12000}, {jue:450, zi:250, ek:4500, fk:5500, u:10000}],
  sets:[[{jue:600, zi:200, ek:4000, fk:4000, u:10000}, {jue:450, zi:250, ek:4500, fk:5500, u:10000}], [{jue:240, zi:360, ek:3000, fk:7000, u:9600}, {jue:450, zi:250, ek:4500, fk:5500, u:10000}]],
  wahl:[{id:'w1', t:'Die Eigenkapitalrentabilität der Rheinpfalz AG liegt …', opts:['über dem Branchendurchschnitt.', 'unter dem Branchendurchschnitt.'], r:'jue@0 / ek@0 > jue@1 / ek@1 ? 0 : 1'},
    {id:'w2', t:'Die Umsatzrentabilität der Rheinpfalz AG liegt …', opts:['über dem Branchendurchschnitt.', 'unter dem Branchendurchschnitt.'], r:'jue@0 / u@0 > jue@1 / u@1 ? 0 : 1'}],
  hinweise:['Gesamtkapital = Eigenkapital + Fremdkapital.', 'Bei der Gesamtkapitalrentabilität gehören die Fremdkapitalzinsen zum Erfolg.'],
  merke:'Die Rentabilitäten werden erst im Vergleich aussagekräftig – mit der Branche, mit Vorjahren und mit dem Zins einer sicheren Geldanlage.'}),
blBau('rechnung', {id:'JR3', modul:'JR', stufe:2, titel:'Cash-Flow und Entschuldungsdauer', tags:['JA-Analyse', 'Cash-Flow', 'Rechnung'], kopf:'Cash-Flow (T€)',
  text:'Aus dem Jahresabschluss der Rheinpfalz AG liegen folgende Werte vor (in T€). Berechne den Cash-Flow (vereinfacht), die Cash-Flow-Umsatzrate und die Entschuldungsdauer.',
  spalten:['T€'],
  zeilen:[{id:'jue', t:'Jahresüberschuss', e:''}, {id:'afa', t:'Abschreibungen auf Anlagen', e:''}, {id:'rst', t:'Erhöhung der Pensionsrückstellungen', e:''}, {id:'u', t:'Umsatzerlöse', e:''}, {id:'fk', t:'Fremdkapital', e:''}, {id:'fm', t:'flüssige Mittel', e:''},
    {id:'cf', t:'Cash-Flow = Jahresüberschuss + Abschreibungen + Erhöhung langfristiger Rückstellungen', kurz:'Cash-Flow', e:'', f:'jue + afa + rst'},
    {id:'cfu', t:'Cash-Flow-Umsatzrate = Cash-Flow ÷ Umsatzerlöse × 100', kurz:'Cash-Flow-Umsatzrate', e:'%', f:'cf / u * 100'},
    {id:'ed', t:'Entschuldungsdauer = (Fremdkapital − flüssige Mittel) ÷ Cash-Flow', kurz:'Entschuldungsdauer', e:'Jahre', f:'(fk - fm) / cf'}],
  werte:[{jue:420, afa:900, rst:80, u:12000, fk:6500, fm:900}], sets:[[{jue:600, afa:700, rst:100, u:14000, fk:5400, fm:500}], [{jue:150, afa:450, rst:0, u:8000, fk:4800, fm:300}], [{jue:800, afa:1000, rst:200, u:20000, fk:9000, fm:1000}]],
  wahl:[{id:'w', t:'Ohne neue Kredite und ohne Ausschüttungen könnte die Rheinpfalz AG ihre Schulden (abzüglich flüssiger Mittel) …', opts:['in höchstens 5 Jahren tilgen – eine gute Finanzkraft.', 'erst in mehr als 5 Jahren tilgen – die Finanzkraft ist eher schwach.'], r:'(fk - fm) / (jue + afa + rst) <= 5 ? 0 : 1'}],
  hinweise:['Abschreibungen und Zuführungen zu langfristigen Rückstellungen sind Aufwand ohne Auszahlung – sie werden zum Jahresüberschuss addiert.', 'Entschuldungsdauer: Wie viele Jahre bräuchte man, um die Nettoschulden aus dem Cash-Flow zu tilgen?'],
  merke:'Cash-Flow (vereinfacht) = JÜ + Abschreibungen + Erhöhung langfristiger Rückstellungen · Cash-Flow-Umsatzrate = CF ÷ Umsatz × 100 · Entschuldungsdauer = (FK − flüssige Mittel) ÷ CF.'}),
blBau('zuordnung', {id:'JR4', modul:'JR', stufe:2, titel:'Vom Jahresüberschuss zum Cash-Flow', tags:['JA-Analyse', 'Cash-Flow'],
  text:'Der Cash-Flow wird aus dem Jahresüberschuss abgeleitet. Wie wird der Posten dabei berücksichtigt?', kategorien:['zum Jahresüberschuss addieren', 'vom Jahresüberschuss abziehen', 'keine Korrektur nötig'], anzahl:5,
  faelle:[
    {t:'Abschreibungen auf Sachanlagen', k:0, weg:'Aufwand ohne Auszahlung'},
    {t:'Zuführung zu den Pensionsrückstellungen', k:0, weg:'Aufwand, ausgezahlt wird erst viel später'},
    {t:'Erträge aus der Auflösung von Rückstellungen', k:1, weg:'Ertrag ohne Einzahlung'},
    {t:'Zuschreibung (Wertaufholung) bei einer Maschine', k:1, weg:'Ertrag ohne Einzahlung'},
    {t:'bar bezahlte Löhne', k:2, weg:'Aufwand und Auszahlung fallen zusammen.'},
    {t:'Umsatzerlöse, die im Geschäftsjahr bezahlt wurden', k:2},
    {t:'außerplanmäßige Abschreibung auf eine Maschine', k:0}
  ],
  hinweise:['Fließt zu dem Aufwand oder Ertrag im selben Jahr Geld?'],
  merke:'Cash-Flow: Aufwendungen ohne Auszahlung addieren (Abschreibungen, Zuführung zu langfristigen Rückstellungen), Erträge ohne Einzahlung abziehen (Zuschreibungen, Auflösung von Rückstellungen).'}),
{
  id:'JR5', modul:'JR', typ:'berechnung', mehrfach:true, stufe:3, titel:'Rentabilität und Cash-Flow beurteilen',
  tags:['JA-Analyse','Rentabilität','Cash-Flow','Leverage-Effekt'],
  text:'Die Rheinpfalz AG erzielt eine Gesamtkapitalrentabilität von 7 %. Für Kredite zahlt sie 4 % Zinsen.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Solange die Gesamtkapitalrentabilität über dem Fremdkapitalzins liegt, steigt die Eigenkapitalrentabilität, wenn zusätzliches Fremdkapital eingesetzt wird (Leverage-Effekt).', richtig:true, weg:'Das Fremdkapital „verdient“ mehr, als es kostet.'},
    {text:'Steigen die Zinsen über die Gesamtkapitalrentabilität, kehrt sich der Effekt um: Mehr Fremdkapital senkt dann die Eigenkapitalrentabilität.', richtig:true, weg:'Leverage-Risiko'},
    {text:'Der Cash-Flow ist schwerer durch Bilanzpolitik zu beeinflussen als der Jahresüberschuss, weil z. B. die Höhe der Abschreibungen ihn nicht verändert.', richtig:true, weg:'Deshalb gilt er als aussagekräftiger Maßstab der Finanzkraft.'},
    {text:'Ein hoher Cash-Flow bedeutet, dass das Unternehmen Investitionen, Tilgungen und Ausschüttungen aus eigener Kraft finanzieren kann.', richtig:true, weg:'Innenfinanzierungskraft'},
    {text:'Eine hohe Eigenkapitalrentabilität zeigt immer, dass das Unternehmen sicher finanziert ist.', fehler:'Sie kann gerade durch einen hohen Fremdkapitalanteil entstehen – dann ist das Risiko hoch.'}
  ],
  hinweise:['Vergleiche Gesamtkapitalrentabilität und Fremdkapitalzins.'],
  merke:'Leverage-Effekt: GK-Rentabilität > FK-Zins → mehr Fremdkapital erhöht die EK-Rentabilität (aber auch das Risiko) · Cash-Flow: Maßstab der Innenfinanzierungskraft, kaum durch Bewertungswahlrechte beeinflussbar.'
},
/* ---------- Finanzplanung und Liquiditätskennzahlen (LQ) – einfacher Liquiditätsplan, Liquidität 1. und 2. Grades ---------- */
...(() => {
  const td = 'style="border:1px solid var(--linie);padding:3px 8px"';
  const tabL = (kopf, zeilen) => `<div style="overflow-x:auto;margin:6px 0 8px"><table style="border-collapse:collapse;font-size:.86rem">`
    + `<tr>${kopf.map(k => `<th ${td}>${k}</th>`).join('')}</tr>` + zeilen.map(z => `<tr>${z.map(x => `<td ${td}>${x}</td>`).join('')}</tr>`).join('') + `</table></div>`;
  const formel = f => `<div style="margin:4px 0 6px 14px;font-weight:600">${f}</div>`;
  const T = ['Finanzierung', 'Liquidität'];
  const kl = v => v < 0 ? '(−' + blN(-v) + ')' : blN(v);   // negative Zahl in Klammern
  const pm = (a, b, id) => `${blN(a)} ${b < 0 ? '−' : '+'} ${blN(Math.abs(b))} = [${id}]`;
  const abWeg = w => 'Übertrag = korrigierter Bestand des Vormonats: [ab]';
  const agWeg = w => w.eb < w.m ? `Mindestbestand ${blN(w.m)} − Endbestand ${kl(w.eb)} = [ag]` : `Endbestand ${blN(w.eb)} ≥ Mindestbestand ${blN(w.m)} → keine Maßnahme: [ag]`;
  return [
  {
    id:'LQ1', modul:'LQ', typ:'berechnung', mehrfach:true, stufe:0, titel:'Liquidität sichern',
    tags:T.concat(['Theorie']),
    text:'<b>Liquidität</b> ist die Fähigkeit, fällige Zahlungen jederzeit fristgerecht zu leisten. Wer nicht zahlen kann, ist zahlungsunfähig – ein Insolvenzgrund, auch wenn das Unternehmen Gewinn macht.<br>'
      + '<b>Liquiditätskennzahlen</b> (Stichtag, aus der Bilanz):'
      + formel('Liquidität 1. Grades = flüssige Mittel ÷ kurzfristige Verbindlichkeiten × 100')
      + formel('Liquidität 2. Grades = (flüssige Mittel + kurzfristige Forderungen) ÷ kurzfristige Verbindlichkeiten × 100')
      + 'Richtwerte: 1. Grades etwa 20 %, 2. Grades mindestens 100 %.<br>'
      + '<b>Liquiditätsplan (Finanzplan)</b> – vorausschauend, z. B. Monat für Monat:'
      + tabL(['Zeile', 'Rechnung'], [['Anfangsbestand', 'Bankguthaben zu Monatsbeginn (= korrigierter Bestand des Vormonats)'], ['+ geplante Einzahlungen', 'z. B. Zahlungen von Kunden'], ['− geplante Auszahlungen', 'z. B. Lieferer, Löhne, Miete'], ['= geplanter Endbestand', ''], ['± Ausgleichsmaßnahme', 'z. B. Kontokorrentkredit, wenn der Mindestbestand unterschritten wird'], ['= korrigierter Bestand', 'Anfangsbestand des Folgemonats']]),
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Ein Unternehmen mit Gewinn kann trotzdem zahlungsunfähig werden.', richtig:true, weg:'Gewinn ist nicht gleich Geld auf dem Konto.'},
      {text:'Der Liquiditätsplan zeigt Engpässe, bevor sie eintreten – so bleibt Zeit für Gegenmaßnahmen.', richtig:true, weg:'vorausschauende Planung'},
      {text:'Die Liquidität 2. Grades sollte mindestens 100 % betragen.', richtig:true, weg:'kurzfristige Schulden durch schnell verfügbare Mittel gedeckt'},
      {text:'Je höher die Liquidität 1. Grades, desto besser für das Unternehmen.', fehler:'Zu viel Geld auf dem Konto bringt kaum Zinsen – Überliquidität mindert die Rentabilität.'},
      {text:'Die Liquiditätskennzahlen aus der Bilanz sind vergangenheitsbezogen; über künftige Zahlungen sagt der Liquiditätsplan mehr.', richtig:true, weg:'Stichtag vs. Planung'},
      {text:'Ein vorübergehender Engpass wird am besten mit einem langfristigen Darlehen ausgeglichen.', fehler:'Kurzfristige Engpässe kurzfristig ausgleichen, z. B. mit dem Kontokorrentkredit.'}
    ],
    hinweise:['Liquidität = Zahlungsfähigkeit.'],
    merke:'Liquidität 1. Grades ≈ 20 %, 2. Grades ≥ 100 % · Liquiditätsplan: Anfangsbestand + Einzahlungen − Auszahlungen = Endbestand ± Ausgleich = korrigierter Bestand.'
  },
  blBau('zuordnung', {id:'LQ2', modul:'LQ', stufe:1, titel:'Was gehört in welche Gruppe?', tags:T.concat(['Kennzahlen']),
    text:'Für die Liquiditätskennzahlen werden Bilanzposten zusammengefasst. Ordne zu.', kategorien:['flüssige Mittel', 'kurzfristige Forderungen', 'kurzfristige Verbindlichkeiten', 'nicht einbezogen'], anzahl:8,
    faelle:[
      {t:'Bankguthaben', k:0}, {t:'Kasse', k:0},
      {t:'Forderungen aus Lieferungen und Leistungen', k:1}, {t:'Forderungen an das Finanzamt (Vorsteuer)', k:1},
      {t:'Verbindlichkeiten aus Lieferungen und Leistungen', k:2}, {t:'Umsatzsteuer-Zahllast', k:2}, {t:'Kontokorrentkredit', k:2},
      {t:'Darlehen mit 8 Jahren Restlaufzeit', k:3, weg:'langfristig'}, {t:'Büroeinrichtung', k:3, weg:'Anlagevermögen'}, {t:'Eigenkapital', k:3}
    ],
    hinweise:['Wird daraus in den nächsten Wochen Geld – oder muss in den nächsten Wochen gezahlt werden?'],
    merke:'Flüssige Mittel: Kasse, Bank · kurzfristige Forderungen: Kunden, Finanzamt · kurzfristige Verbindlichkeiten: Lieferer, USt, Kontokorrent.'}),
  blBau('rechnung', {id:'LQ3', modul:'LQ', stufe:1, titel:'Liquidität 1. und 2. Grades', tags:T.concat(['Kennzahlen']), kopf:'Bilanzwerte (€)',
    text:'Aus den Bilanzen der Büroservice Hartmann GmbH sind diese Werte bekannt. Berechne die Liquidität 1. und 2. Grades (auf zwei Nachkommastellen).',
    spalten:['Vorjahr', 'Berichtsjahr'],
    zeilen:[{id:'fm', t:'flüssige Mittel', e:'€'}, {id:'fo', t:'kurzfristige Forderungen', e:'€'}, {id:'kv', t:'kurzfristige Verbindlichkeiten', e:'€'},
      {id:'l1', t:'Liquidität 1. Grades = flüssige Mittel ÷ kurzfristige Verbindlichkeiten × 100', kurz:'Liquidität 1. Grades', e:'%', f:'fm / kv * 100'},
      {id:'l2', t:'Liquidität 2. Grades = (flüssige Mittel + kurzfristige Forderungen) ÷ kurzfristige Verbindlichkeiten × 100', kurz:'Liquidität 2. Grades', e:'%', f:'(fm + fo) / kv * 100'}],
    werte:[{fm:18000, fo:54000, kv:80000}, {fm:13000, fo:65000, kv:65000}],
    sets:[[{fm:24000, fo:60000, kv:120000}, {fm:30000, fo:96000, kv:105000}], [{fm:9000, fo:51000, kv:50000}, {fm:6000, fo:39000, kv:60000}], [{fm:15000, fo:45000, kv:75000}, {fm:20000, fo:76000, kv:80000}]],
    wahl:[{id:'w1', t:'Die Liquidität 2. Grades im Berichtsjahr ist …', opts:['ausreichend (mindestens 100 %).', 'nicht ausreichend – die kurzfristigen Verbindlichkeiten sind nicht gedeckt.'], r:'l2@1 >= 100 ? 0 : 1'},
          {id:'w2', t:'Die Liquidität 2. Grades hat sich gegenüber dem Vorjahr …', opts:['verbessert.', 'verschlechtert.'], r:'l2@1 >= l2@0 ? 0 : 1'}],
    hinweise:['Liquidität 1. Grades: nur flüssige Mittel · 2. Grades: zusätzlich kurzfristige Forderungen.', 'Richtwerte: 1. Grades etwa 20 %, 2. Grades mindestens 100 %.'],
    merke:'Liquidität 2. Grades unter 100 %: Die kurzfristigen Verbindlichkeiten sind durch flüssige Mittel und kurzfristige Forderungen nicht gedeckt.'}),
  blBau('rechnung', {id:'LQ4', modul:'LQ', stufe:2, titel:'Einfacher Liquiditätsplan', tags:T.concat(['Liquiditätsplan']), kopf:'Liquiditätsplan (€)',
    text:'Die Büroservice Hartmann GmbH plant ihre Zahlungen für das erste Quartal. Auf dem Bankkonto soll immer ein Mindestbestand von {m@0} bleiben; fehlt Geld, wird der Kontokorrentkredit in Anspruch genommen. Der korrigierte Bestand ist der Anfangsbestand des Folgemonats.',
    spalten:['Januar', 'Februar', 'März'],
    zeilen:[{id:'m', t:'Mindestbestand', e:'€', aus:true},
      {id:'ab', t:'Anfangsbestand', e:'€', fs:[null, 'kb@0', 'kb@1'], weg:abWeg},
      {id:'e1', t:'Einzahlungen von Kunden', e:'€'}, {id:'e2', t:'sonstige Einzahlungen', e:'€'},
      {id:'es', t:'= geplante Einzahlungen', e:'€', f:'e1 + e2', art:'summe'},
      {id:'a1', t:'Auszahlungen an Lieferer', e:'€'}, {id:'a2', t:'Löhne und Gehälter', e:'€'}, {id:'a3', t:'Miete und sonstige Auszahlungen', e:'€'},
      {id:'as', t:'= geplante Auszahlungen', e:'€', f:'a1 + a2 + a3', art:'summe'},
      {id:'eb', t:'geplanter Endbestand = Anfangsbestand + Einzahlungen − Auszahlungen', kurz:'geplanter Endbestand', e:'€', f:'ab + es - as'},
      {id:'ag', t:'geplante Ausgleichsmaßnahme (Kontokorrentkredit bis zum Mindestbestand)', kurz:'Ausgleichsmaßnahme', e:'€', f:'eb < m ? m - eb : 0', weg:agWeg},
      {id:'kb', t:'= korrigierter Bestand', e:'€', f:'eb + ag', art:'summe', weg:w => pm(w.eb, w.ag, 'kb')}],
    werte:[{m:5000, ab:12000, e1:38000, e2:2000, a1:22000, a2:18000, a3:6000}, {m:5000, e1:30000, e2:0, a1:20000, a2:18000, a3:6000}, {m:5000, e1:45000, e2:1500, a1:21000, a2:18000, a3:6000}],
    sets:[[{m:4000, ab:9000, e1:31000, e2:1000, a1:17000, a2:15000, a3:5000}, {m:4000, e1:42000, e2:0, a1:19000, a2:15000, a3:5000}, {m:4000, e1:24000, e2:2500, a1:18000, a2:16000, a3:5500}],
          [{m:6000, ab:15000, e1:28000, e2:0, a1:16000, a2:20000, a3:7000}, {m:6000, e1:47000, e2:3000, a1:21000, a2:20000, a3:7000}, {m:6000, e1:44000, e2:0, a1:15000, a2:20000, a3:7000}],
          [{m:3000, ab:7500, e1:26000, e2:500, a1:14000, a2:12000, a3:4000}, {m:3000, e1:22000, e2:0, a1:13000, a2:12000, a3:4000}, {m:3000, e1:35000, e2:1000, a1:15000, a2:12000, a3:4000}]],
    wahl:[{id:'w1', t:'Welche Ausgleichsmaßnahme ist bei einem vorübergehenden Engpass geeignet?', opts:['kurzfristig: Kontokorrentkredit, Zahlungsziele beim Lieferer nutzen, Forderungen schneller einziehen', 'langfristiges Darlehen über zehn Jahre aufnehmen', 'Büroeinrichtung verkaufen'], r:'0'}],
    hinweise:['Endbestand = Anfangsbestand + Einzahlungen − Auszahlungen.', 'Liegt der Endbestand unter dem Mindestbestand, wird die Differenz ausgeglichen; sonst keine Maßnahme (0).', 'Der korrigierte Bestand wird Anfangsbestand des nächsten Monats.'],
    merke:'Liquiditätsplan: Anfangsbestand + Einzahlungen − Auszahlungen = geplanter Endbestand · bei Unterschreiten des Mindestbestands ausgleichen · korrigierter Bestand = Anfangsbestand des Folgemonats.'}),
  blBau('rechnung', {id:'LQ5', modul:'LQ', stufe:3, titel:'Liquiditätsplan mit Rückführung des Kontokorrentkredits', tags:T.concat(['Liquiditätsplan']), kopf:'Liquiditätsplan (€)',
    text:'Die Schreibwaren Klein KG plant vier Monate. Mindestbestand auf dem Bankkonto: {m@0}. Fehlt Geld, wird der Kontokorrentkredit in Anspruch genommen (+). Liegt der Endbestand über dem Mindestbestand und ist noch Kontokorrentkredit offen, wird er mit dem Überschuss zurückgeführt (−), weil er teuer ist.',
    spalten:['April', 'Mai', 'Juni', 'Juli'],
    zeilen:[{id:'m', t:'Mindestbestand', e:'€', aus:true},
      {id:'ab', t:'Anfangsbestand', e:'€', fs:[null, 'kb@0', 'kb@1', 'kb@2'], weg:abWeg},
      {id:'es', t:'+ geplante Einzahlungen', e:'€'}, {id:'as', t:'− geplante Auszahlungen', e:'€'},
      {id:'eb', t:'= geplanter Endbestand', e:'€', f:'ab + es - as', art:'summe'},
      {id:'kv', t:'offener Kontokorrentkredit zu Monatsbeginn', kurz:'offener Kredit', e:'€', fs:[null, 'kk@0', 'kk@1', 'kk@2'], weg:w => 'Übertrag = Kredit zu Monatsende des Vormonats: [kv]'},
      {id:'ag', t:'Ausgleichsmaßnahme: Kreditaufnahme (+) bzw. Rückführung (−)', kurz:'Ausgleichsmaßnahme', e:'€', f:'eb < m ? m - eb : 0 - min(kv, eb - m)',
        weg:w => w.eb < w.m ? `Mindestbestand ${blN(w.m)} − Endbestand ${kl(w.eb)} = [ag] (Kreditaufnahme)` : w.kv > 0 ? `Rückführung: kleinerer Wert aus offenem Kredit ${blN(w.kv)} und Überschuss ${blN(w.eb - w.m)} → [ag]` : `kein Engpass, kein offener Kredit: [ag]`},
      {id:'kb', t:'= korrigierter Bestand', e:'€', f:'eb + ag', art:'summe', weg:w => pm(w.eb, w.ag, 'kb')},
      {id:'kk', t:'offener Kontokorrentkredit zu Monatsende', kurz:'Kredit zu Monatsende', e:'€', f:'kv + ag', weg:w => pm(w.kv, w.ag, 'kk')}],
    werte:[{m:3000, ab:8000, es:25000, as:34000, kv:0}, {m:3000, es:30000, as:31000}, {m:3000, es:36000, as:30000}, {m:3000, es:28000, as:27000}],
    sets:[[{m:2000, ab:6000, es:21000, as:27000, kv:0}, {m:2000, es:26000, as:27500}, {m:2000, es:33000, as:26000}, {m:2000, es:25000, as:24000}],
          [{m:4000, ab:10000, es:30000, as:38000, kv:0}, {m:4000, es:34000, as:36000}, {m:4000, es:41000, as:33000}, {m:4000, es:30000, as:29000}],
          [{m:2500, ab:5000, es:18000, as:22500, kv:0}, {m:2500, es:24000, as:23000}, {m:2500, es:27000, as:21000}, {m:2500, es:20000, as:19500}]],
    wahl:[{id:'w1', t:'Warum wird ein Überschuss zuerst zur Rückführung des Kontokorrentkredits verwendet?', opts:['Der Kontokorrentkredit ist eine der teuersten Finanzierungsformen.', 'Weil die Bank das immer sofort verlangt.', 'Weil sonst der Mindestbestand unterschritten wird.'], r:'0'}],
    hinweise:['Erst den Endbestand berechnen, dann prüfen: unter Mindestbestand → Kredit aufnehmen; darüber und Kredit offen → zurückführen (höchstens den offenen Kredit, höchstens den Überschuss).', 'Offener Kredit zu Monatsende = Kredit zu Monatsbeginn + Ausgleichsmaßnahme.'],
    merke:'Engpass: Kontokorrent in Anspruch nehmen · Überschuss: zuerst den teuren Kontokorrentkredit zurückführen, dann z. B. anlegen.'}),
  blBau('zuordnung', {id:'LQ6', modul:'LQ', stufe:2, titel:'Maßnahmen bei Unter- und Überdeckung', tags:T.concat(['Liquiditätsplan']),
    text:'Der Liquiditätsplan zeigt eine Unterdeckung (Engpass) oder eine Überdeckung (Überschuss). Welche Maßnahme passt?', kategorien:['bei Unterdeckung', 'bei Überdeckung'], anzahl:8,
    faelle:[
      {t:'Kontokorrentkredit in Anspruch nehmen', k:0}, {t:'Zahlungsziel beim Lieferer ausnutzen statt Skonto', k:0},
      {t:'Offene Kundenforderungen konsequent anmahnen oder Factoring nutzen', k:0}, {t:'Geplante Anschaffung verschieben oder leasen statt kaufen', k:0},
      {t:'Lagerbestände abbauen', k:0},
      {t:'Kontokorrentkredit zurückführen', k:1}, {t:'Geld als Tages- oder Festgeld anlegen', k:1},
      {t:'Lieferantenrechnungen mit Skonto bezahlen', k:1}, {t:'Darlehen außerplanmäßig tilgen', k:1}
    ],
    hinweise:['Unterdeckung: Geld beschaffen oder Auszahlungen verschieben · Überdeckung: Schulden abbauen oder Geld anlegen.'],
    merke:'Unterdeckung: Kredit, Zahlungsziele, Forderungen eintreiben, Auszahlungen verschieben · Überdeckung: Kredit zurückführen, Skonto nutzen, anlegen, tilgen.'}),
  ]; })(),
/* ---------- Ergänzungen Kaufmännisches Berufskolleg II: EZ Effektivzins · JB Jahresabschluss der Kapitalgesellschaft ·
   BG Bewertungsgrundsätze · UK Umweltkennzahlen ---------- */
...(() => {
  const td = 'style="border:1px solid var(--linie);padding:3px 8px"';
  const tabL = (kopf, zeilen) => `<div style="overflow-x:auto;margin:6px 0 8px"><table style="border-collapse:collapse;font-size:.86rem">`
    + `<tr>${kopf.map(k => `<th ${td}>${k}</th>`).join('')}</tr>` + zeilen.map(z => `<tr>${z.map(x => `<td ${td}>${x}</td>`).join('')}</tr>`).join('') + `</table></div>`;
  return [
  /* ======================= EZ · Effektivzins ======================= */
  {
    id:'EZ1', modul:'EZ', typ:'berechnung', mehrfach:true, stufe:0, titel:'Nominalzins und Effektivzins',
    tags:['Finanzierung', 'Effektivzins', 'Theorie'],
    text:'Der <b>Nominalzins</b> ist der vereinbarte Zinssatz, bezogen auf den Kreditbetrag (Nennbetrag). Der <b>Effektivzins</b> gibt die tatsächlichen jährlichen Kreditkosten an, bezogen auf den tatsächlich ausgezahlten Betrag. Er berücksichtigt auch ein <b>Disagio</b> (Abschlag bei der Auszahlung), Bearbeitungsgebühren und die Laufzeit.<br>Näherungsformel (Fälligkeitsdarlehen): Effektivzins ≈ (Zinsen + Disagio ÷ Laufzeit + Gebühren ÷ Laufzeit) ÷ Auszahlungsbetrag × 100.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Bei einem Disagio ist der Effektivzins höher als der Nominalzins.', richtig:true, weg:'weniger Auszahlung, gleiche Zinsen'},
      {text:'Je kürzer die Laufzeit, desto stärker erhöht ein Disagio den Effektivzins.', richtig:true, weg:'Disagio verteilt sich auf weniger Jahre'},
      {text:'Banken müssen Verbrauchern den effektiven Jahreszins angeben, damit Angebote vergleichbar sind.', richtig:true, weg:'Preisangabenverordnung'},
      {text:'Für den Vergleich von Kreditangeboten ist der Effektivzins aussagekräftiger als der Nominalzins.', richtig:true, weg:'alle Kosten enthalten'},
      {text:'Der Nominalzins bezieht sich auf den ausgezahlten Betrag.', fehler:'Er bezieht sich auf den Nennbetrag (Kreditbetrag).'},
      {text:'Bearbeitungsgebühren verändern den Effektivzins nicht.', fehler:'Sie erhöhen die Kreditkosten und damit den Effektivzins.'}
    ],
    hinweise:['Bezugsgröße und Kostenbestandteile vergleichen.'],
    merke:'Nominalzins: auf den Nennbetrag · Effektivzins: tatsächliche Kosten (Zinsen, Disagio, Gebühren, Laufzeit) auf den Auszahlungsbetrag – maßgeblich für den Angebotsvergleich.'
  },
  blBau('rechnung', {id:'EZ2', modul:'EZ', stufe:2, titel:'Effektivzins berechnen und Angebote vergleichen', tags:['Finanzierung', 'Effektivzins'], kopf:'Kreditangebote',
    text:'Die Holzwerk Pfalz GmbH braucht für eine neue Maschine ein Fälligkeitsdarlehen über {k@0} mit einer Laufzeit von {n@0}. Angebot A: Nominalzins {p@0}, Auszahlung {az@0}, Bearbeitungsgebühr {g@0}. Angebot B: Nominalzins {p@1}, Auszahlung {az@1}, Bearbeitungsgebühr {g@1}. Berechne mit der Näherungsformel den Effektivzins beider Angebote.',
    spalten:['Angebot A', 'Angebot B'],
    zeilen:[{id:'k', t:'Kreditbetrag', e:'€', aus:true}, {id:'n', t:'Laufzeit', e:'Jahre', aus:true}, {id:'p', t:'Nominalzins', e:'%', aus:true}, {id:'az', t:'Auszahlungskurs', e:'%', aus:true}, {id:'g', t:'Bearbeitungsgebühr', e:'€', aus:true},
      {id:'zi', t:'Zinsen pro Jahr = Kredit × Nominalzins', kurz:'Zinsen pro Jahr', e:'€', f:'k * p / 100'},
      {id:'da', t:'Disagio = Kredit × (100 − Auszahlungskurs) ÷ 100', kurz:'Disagio', e:'€', f:'k * (100 - az) / 100'},
      {id:'au', t:'Auszahlungsbetrag = Kredit − Disagio − Gebühr', kurz:'Auszahlungsbetrag', e:'€', f:'k - da - g'},
      {id:'kj', t:'Kosten pro Jahr = Zinsen + (Disagio + Gebühr) ÷ Laufzeit', kurz:'Kosten pro Jahr', e:'€', f:'zi + (da + g) / n'},
      {id:'ef', t:'Effektivzins = Kosten pro Jahr ÷ Auszahlungsbetrag × 100', kurz:'Effektivzins', e:'%', f:'kj / au * 100'}],
    werte:[{k:200000, n:5, p:4.5, az:98, g:500}, {k:200000, n:5, p:5, az:100, g:1000}],
    sets:[[{k:150000, n:4, p:4, az:97, g:300}, {k:150000, n:4, p:4.8, az:99.5, g:600}], [{k:300000, n:8, p:3.8, az:96, g:1200}, {k:300000, n:8, p:4.5, az:100, g:800}], [{k:80000, n:3, p:5.2, az:99, g:200}, {k:80000, n:3, p:5.5, az:100, g:150}]],
    wahl:[{id:'w', t:'Günstiger ist:', opts:['Angebot A', 'Angebot B'], r:'(k@0 * p@0 / 100 + (k@0 * (100 - az@0) / 100 + g@0) / n@0) / (k@0 - k@0 * (100 - az@0) / 100 - g@0) <= (k@1 * p@1 / 100 + (k@1 * (100 - az@1) / 100 + g@1) / n@1) / (k@1 - k@1 * (100 - az@1) / 100 - g@1) ? 0 : 1'},
          {id:'w2', t:'Warum reicht der Vergleich der Nominalzinsen nicht aus?', opts:['Disagio und Gebühren verteuern den Kredit und verringern die Auszahlung.', 'Der Nominalzins ist immer höher als der Effektivzins.', 'Der Nominalzins hängt von der Bonität ab.'], r:'0'}],
    hinweise:['Disagio = Abschlag vom Kreditbetrag bei der Auszahlung.', 'Disagio und Gebühr werden gleichmäßig auf die Laufzeit verteilt.', 'Effektivzins auf den Auszahlungsbetrag beziehen.'],
    merke:'Effektivzins ≈ (Zinsen + (Disagio + Gebühren) ÷ Laufzeit) ÷ Auszahlungsbetrag × 100 – ein niedriger Nominalzins mit Disagio kann teurer sein als ein höherer Nominalzins ohne.'}),

  /* ======================= JB · Jahresabschluss der Kapitalgesellschaft ======================= */
  {
    id:'JB1', modul:'JB', typ:'berechnung', mehrfach:true, stufe:0, titel:'Aufgaben und Bestandteile des Jahresabschlusses',
    tags:['Jahresabschluss', 'Kapitalgesellschaft', 'Theorie'],
    text:'Die Holzwerk Pfalz GmbH (mittelgroße Kapitalgesellschaft) erstellt ihren Jahresabschluss. Für Kapitalgesellschaften gilt (HGB, aktuelle Rechtslage):'
      + tabL(['Bestandteil', 'Inhalt'], [['Bilanz', 'Vermögen und Kapital am Stichtag, gegliedert nach § 266 HGB'], ['Gewinn- und Verlustrechnung', 'Aufwendungen und Erträge des Geschäftsjahres, meist nach dem Gesamtkostenverfahren (§ 275 HGB)'], ['Anhang', 'Erläuterungen zu Bilanz und GuV, z. B. Bewertungsmethoden'], ['Lagebericht', 'Geschäftsverlauf, Lage, Chancen und Risiken – Pflicht für mittelgroße und große Kapitalgesellschaften']]),
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Der Jahresabschluss informiert Gesellschafter, Gläubiger, Finanzamt und Öffentlichkeit über die Lage des Unternehmens.', richtig:true, weg:'Informationsfunktion'},
      {text:'Er dient als Grundlage für die Gewinnverteilung bzw. Ausschüttung.', richtig:true, weg:'Ausschüttungsbemessung'},
      {text:'Bei der Kapitalgesellschaft besteht der Jahresabschluss aus Bilanz, GuV und Anhang; dazu kommt ggf. der Lagebericht.', richtig:true, weg:'§ 264 HGB'},
      {text:'Kapitalgesellschaften müssen ihren Jahresabschluss (je nach Größe in unterschiedlichem Umfang) offenlegen.', richtig:true, weg:'Unternehmensregister'},
      {text:'Mittelgroße und große Kapitalgesellschaften werden in der Regel durch einen Abschlussprüfer geprüft.', richtig:true, weg:'Prüfungspflicht'},
      {text:'Die Bilanz zeigt die Erträge und Aufwendungen des Jahres.', fehler:'Das zeigt die GuV; die Bilanz zeigt Vermögen und Kapital am Stichtag.'}
    ],
    hinweise:['Wer liest den Jahresabschluss – und was steht wo?'],
    merke:'Jahresabschluss KapG: Bilanz + GuV + Anhang (+ Lagebericht bei mittelgroßen/großen) · Aufgaben: Information, Dokumentation, Gewinnermittlung und Ausschüttung · Prüfung und Offenlegung je nach Größe.'
  },
  blBau('zuordnung', {id:'JB2', modul:'JB', stufe:1, titel:'Gliederung der Bilanz nach § 266 HGB', tags:['Jahresabschluss', 'Bilanzgliederung'],
    text:'Wo steht der Posten in der Bilanz einer Kapitalgesellschaft?', kategorien:['A. Anlagevermögen', 'B. Umlaufvermögen', 'C. Rechnungsabgrenzung (aktiv)', 'A. Eigenkapital', 'B. Rückstellungen', 'C. Verbindlichkeiten'], anzahl:9,
    faelle:[
      {t:'Technische Anlagen und Maschinen', k:0}, {t:'Beteiligung an einer Tochtergesellschaft', k:0, weg:'Finanzanlagen'}, {t:'Software-Lizenz (gekauft)', k:0, weg:'immaterielle Vermögensgegenstände'},
      {t:'fertige Erzeugnisse', k:1}, {t:'Forderungen aus Lieferungen und Leistungen', k:1}, {t:'Guthaben bei Kreditinstituten', k:1},
      {t:'im Voraus bezahlte Versicherungsprämie für das nächste Jahr', k:2},
      {t:'gezeichnetes Kapital (Stammkapital)', k:3}, {t:'Gewinnrücklagen', k:3}, {t:'Jahresüberschuss', k:3},
      {t:'Pensionsverpflichtungen', k:4}, {t:'Steuerrückstellungen', k:4},
      {t:'Verbindlichkeiten gegenüber Kreditinstituten', k:5}, {t:'erhaltene Anzahlungen auf Bestellungen', k:5}
    ],
    hinweise:['Aktiva: Anlage- und Umlaufvermögen, ARAP · Passiva: Eigenkapital, Rückstellungen, Verbindlichkeiten.'],
    merke:'Aktiva: A Anlagevermögen (immateriell, Sachanlagen, Finanzanlagen) · B Umlaufvermögen · C ARAP · Passiva: A Eigenkapital (gezeichnetes Kapital, Rücklagen, Jahresüberschuss) · B Rückstellungen · C Verbindlichkeiten · D PRAP.'}),

  /* ======================= BG · Bewertungsgrundsätze ======================= */
  {
    id:'BG1', modul:'BG', typ:'berechnung', mehrfach:true, stufe:0, titel:'Bewertungsgrundsätze: Gläubiger- und Teilhaberschutz',
    tags:['Jahresabschluss', 'Bewertung', 'Theorie'],
    text:'Das Handelsrecht schützt vor allem die <b>Gläubiger</b>: Das Vermögen soll eher zu niedrig, Schulden eher zu hoch ausgewiesen werden (<b>Vorsichtsprinzip</b>). Der <b>Teilhaberschutz</b> verhindert, dass durch zu starke Unterbewertung stille Reserven entstehen, die den Gesellschaftern Gewinne vorenthalten.'
      + tabL(['Grundsatz', 'Bedeutung'], [['Anschaffungskostenprinzip', 'Vermögen höchstens zu Anschaffungs- bzw. Herstellungskosten'], ['Realisationsprinzip', 'Gewinne erst ausweisen, wenn sie durch Umsatz verwirklicht sind'], ['Imparitätsprinzip', 'drohende Verluste schon ausweisen, wenn sie absehbar sind'], ['Niederstwertprinzip (Aktiva)', 'von zwei Werten den niedrigeren ansetzen – im Umlaufvermögen immer (strenges), im Anlagevermögen bei dauerhafter Wertminderung (gemildertes)'], ['Höchstwertprinzip (Passiva)', 'Verbindlichkeiten zum höheren Wert ansetzen'], ['Wertaufholungsgebot', 'fällt der Grund einer Abschreibung weg, wird höchstens bis zu den Anschaffungskosten zugeschrieben']]),
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Ein Kursgewinn bei Wertpapieren des Umlaufvermögens wird erst beim Verkauf als Gewinn ausgewiesen.', richtig:true, weg:'Realisationsprinzip'},
      {text:'Ein am Stichtag gesunkener Börsenkurs muss im Umlaufvermögen berücksichtigt werden.', richtig:true, weg:'strenges Niederstwertprinzip'},
      {text:'Eine Rückstellung für einen drohenden Prozessverlust ist zu bilden, obwohl der Verlust noch nicht eingetreten ist.', richtig:true, weg:'Imparitätsprinzip'},
      {text:'Das Wertaufholungsgebot schützt die Teilhaber vor zu hohen stillen Reserven.', richtig:true, weg:'Teilhaberschutz'},
      {text:'Grundstücke dürfen mit ihrem höheren Marktwert bilanziert werden, wenn er über den Anschaffungskosten liegt.', fehler:'Höchstens Anschaffungskosten (Anschaffungskostenprinzip).'},
      {text:'Eine Fremdwährungsverbindlichkeit wird bei gesunkenem Kurs mit dem niedrigeren Wert angesetzt, auch bei langer Restlaufzeit.', fehler:'Höchstwertprinzip: Bei Restlaufzeit über einem Jahr bleibt es beim höheren Wert.'}
    ],
    hinweise:['Vermögen eher niedrig, Schulden eher hoch – aber keine willkürliche Unterbewertung.'],
    merke:'Gläubigerschutz: Vorsichts-, Anschaffungskosten-, Realisations-, Imparitäts-, Niederst- und Höchstwertprinzip · Teilhaberschutz: Wertaufholungsgebot, Grenzen für stille Reserven.'
  },
  blBau('rechnung', {id:'BG2', modul:'BG', stufe:2, titel:'Bilanzwerte nach dem Niederstwertprinzip', tags:['Jahresabschluss', 'Bewertung', 'Niederstwertprinzip'], kopf:'Bewertung am 31.12.',
    text:W => `Die Holzwerk Pfalz GmbH bewertet am Bilanzstichtag drei Posten des Umlaufvermögens und eine Maschine des Anlagevermögens. ${W[3].tw < W[3].bw ? 'Die Wertminderung der Maschine ist voraussichtlich ' + (W[3].dau ? '<b>dauerhaft</b> (technischer Fortschritt).' : '<b>nur vorübergehend</b>.') : ''} Ermittle den Bilanzansatz und die außerplanmäßige Abschreibung.`,
    spalten:['Rohstoffe Eichenholz', 'Wertpapiere', 'Handelswaren', 'Maschine (AV)'],
    zeilen:[{id:'dau', t:'dauerhaft', aus:true}, {id:'av', t:'Anlagevermögen', aus:true},
      {id:'bw', t:'Anschaffungskosten bzw. fortgeführter Buchwert', kurz:'Buchwert', e:'€'},
      {id:'tw', t:'Tageswert bzw. beizulegender Wert am Stichtag', kurz:'Tageswert', e:'€'},
      {id:'ba', t:'Bilanzansatz', e:'€', f:'av > 0 ? (dau > 0 ? min(bw, tw) : bw) : min(bw, tw)', weg:w => w.tw >= w.bw ? 'Tageswert nicht niedriger → Anschaffungskosten/Buchwert bleiben: [ba]' : w.av ? (w.dau ? 'Anlagevermögen, dauerhafte Wertminderung → niedrigerer Wert: [ba]' : 'Anlagevermögen, nur vorübergehende Wertminderung → Buchwert bleibt: [ba]') : 'Umlaufvermögen, strenges Niederstwertprinzip → niedrigerer Wert: [ba]'},
      {id:'ab', t:'außerplanmäßige Abschreibung = Buchwert − Bilanzansatz', kurz:'außerplanmäßige Abschreibung', e:'€', f:'bw - ba'}],
    werte:[{bw:48000, tw:45500, dau:0, av:0}, {bw:12000, tw:13800, dau:0, av:0}, {bw:21500, tw:19800, dau:0, av:0}, {bw:84000, tw:70000, dau:1, av:1}],
    sets:[[{bw:52000, tw:54500, dau:0, av:0}, {bw:15000, tw:12600, dau:0, av:0}, {bw:18400, tw:18900, dau:0, av:0}, {bw:96000, tw:81000, dau:0, av:1}], [{bw:36000, tw:33100, dau:0, av:0}, {bw:9000, tw:8250, dau:0, av:0}, {bw:24000, tw:26500, dau:0, av:0}, {bw:60000, tw:52000, dau:1, av:1}], [{bw:41000, tw:41600, dau:0, av:0}, {bw:20000, tw:17400, dau:0, av:0}, {bw:16500, tw:14900, dau:0, av:0}, {bw:72000, tw:65000, dau:0, av:1}]],
    passes:2,
    hinweise:['Umlaufvermögen: immer der niedrigere Wert.', 'Anlagevermögen: niedrigerer Wert nur bei dauerhafter Wertminderung (Pflicht); vorübergehend: Buchwert beibehalten (Ausnahme Finanzanlagen: Wahlrecht).', 'Ein höherer Tageswert wird nie angesetzt (Anschaffungskostenprinzip).'],
    merke:'Umlaufvermögen: strenges Niederstwertprinzip (immer der niedrigere Wert) · Anlagevermögen: gemildertes (nur bei dauerhafter Wertminderung) · höhere Tageswerte bleiben unberücksichtigt.'}),

  /* ======================= UK · Umweltkennzahlen ======================= */
  blBau('rechnung', {id:'UK1', modul:'UK', stufe:2, titel:'Umweltkennzahlen berechnen und vergleichen', tags:['Kennzahlen', 'Umweltkennzahlen', 'Nachhaltigkeit'], kopf:'Umweltkennzahlen',
    text:'Für den Nachhaltigkeitsbericht der Holzwerk Pfalz GmbH sollen die Umweltkennzahlen zweier Jahre verglichen werden.',
    spalten:['Vorjahr', 'Berichtsjahr'],
    zeilen:[{id:'st', t:'produzierte Schreibtische', e:'Stück'}, {id:'en', t:'Energieverbrauch', e:'kWh'}, {id:'ma', t:'Materialeinsatz Holz', e:'kg'}, {id:'ab', t:'Abfall gesamt', e:'kg'}, {id:'re', t:'davon recycelt', e:'kg'}, {id:'co', t:'CO₂-Emissionen', e:'kg'},
      {id:'ej', t:'Energieverbrauch je Schreibtisch = Energie ÷ Stück', kurz:'kWh je Stück', e:'kWh', f:'en / st'},
      {id:'aq', t:'Abfallquote = Abfall ÷ Materialeinsatz × 100', kurz:'Abfallquote', e:'%', f:'ab / ma * 100'},
      {id:'rq', t:'Recyclingquote = recycelt ÷ Abfall × 100', kurz:'Recyclingquote', e:'%', f:'re / ab * 100'},
      {id:'cj', t:'CO₂ je Schreibtisch = CO₂ ÷ Stück', kurz:'CO₂ je Stück', e:'kg', f:'co / st'}],
    werte:[{st:8000, en:960000, ma:400000, ab:60000, re:42000, co:384000}, {st:9000, en:990000, ma:432000, ab:54000, re:43200, co:369000}],
    sets:[[{st:5000, en:700000, ma:250000, ab:40000, re:24000, co:300000}, {st:5500, en:715000, ma:264000, ab:33000, re:26400, co:280500}], [{st:12000, en:1500000, ma:600000, ab:90000, re:63000, co:720000}, {st:11000, en:1430000, ma:561000, ab:89760, re:67320, co:704000}], [{st:6400, en:800000, ma:320000, ab:48000, re:28800, co:352000}, {st:7200, en:828000, ma:345600, ab:41472, re:29030, co:345600}]],
    wahl:[{id:'w', t:'Wie hat sich der Energieverbrauch je Schreibtisch entwickelt?', opts:['gesunken – die Energieeffizienz hat sich verbessert', 'gestiegen – die Energieeffizienz hat sich verschlechtert'], r:'en@1 / st@1 <= en@0 / st@0 ? 0 : 1'},
          {id:'w2', t:'Warum werden Umweltkennzahlen auf die Produktionsmenge bezogen?', opts:['Damit Jahre mit unterschiedlicher Produktion vergleichbar sind.', 'Weil absolute Werte nicht erhoben werden dürfen.', 'Weil das Finanzamt es verlangt.'], r:'0'}],
    hinweise:['Kennzahlen je Stück machen Jahre mit unterschiedlicher Produktion vergleichbar.', 'Quoten: Teil ÷ Ganzes × 100.'],
    merke:'Umweltkennzahlen: Energie, Material, Abfall, CO₂ – absolut und je Produktionseinheit (Effizienz); Grundlage für Ziele und Nachhaltigkeitsberichte.'}),
  {
    id:'UK2', modul:'UK', typ:'berechnung', mehrfach:true, stufe:1, titel:'Nichtfinanzielle Kennzahlen nutzen',
    tags:['Kennzahlen', 'Umweltkennzahlen', 'Nachhaltigkeit'],
    text:'Die Geschäftsführung will neben Rentabilität und Liquidität auch nichtfinanzielle Kennzahlen steuern.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Sinkende Energie je Stück senkt Kosten und Emissionen zugleich.', richtig:true, weg:'ökonomisch und ökologisch'},
      {text:'Umweltkennzahlen können in Nachhaltigkeitsberichten veröffentlicht werden und das Image stärken.', richtig:true, weg:'Kommunikation'},
      {text:'Kennzahlen wie Krankenquote oder Weiterbildungsstunden sind soziale, nichtfinanzielle Kennzahlen.', richtig:true, weg:'soziale Dimension'},
      {text:'Aus Kennzahlen lassen sich messbare Ziele ableiten, z. B. „CO₂ je Stück bis 2028 um 15 % senken“.', richtig:true, weg:'Zielvereinbarung'},
      {text:'Steigen die absoluten CO₂-Emissionen, hat sich die Umweltleistung in jedem Fall verschlechtert.', fehler:'Bei stärker gestiegener Produktion kann der Wert je Stück trotzdem gesunken sein.'}
    ],
    hinweise:['Absolut oder je Stück? Wer nutzt die Kennzahl?'],
    merke:'Nichtfinanzielle Kennzahlen (Umwelt, Soziales) ergänzen die Finanzkennzahlen; sinnvoll sind relative Größen (je Stück) für Vergleiche und messbare Ziele.'
  },
  ]; })(),
/* ---------- Modul · Industrieobligation (Anleihe) ---------- */
{
  id:'FO1', modul:'FO', typ:'berechnung', mehrfach:true, stufe:1, titel:'Merkmale der Industrieobligation',
  tags:['Finanzierung','Industrieobligation','Anleihe'],
  text:'Die Neckar Chemie AG braucht für den Bau eines neuen Werks 20 Mio. € langfristiges Fremdkapital. Statt eines Bankkredits gibt sie eine Anleihe (Industrieobligation) aus.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die Anleihe wird in viele Teilschuldverschreibungen mit kleinem Nennwert (z. B. 1.000 €) gestückelt und am Kapitalmarkt an viele Anleger verkauft.', richtig:true, weg:'So lässt sich ein sehr großer Betrag aufnehmen.'},
    {text:'Die Anleger sind Gläubiger: Sie erhalten feste Zinsen (Kupon) und am Ende der Laufzeit den Rückzahlungsbetrag.', richtig:true, weg:'Fremdfinanzierung – keine Mitspracherechte.'},
    {text:'Ein Ausgabekurs unter 100 % (Disagio) und Emissionskosten erhöhen die effektiven Kosten für die AG.', richtig:true, weg:'Die AG erhält weniger, als sie zurückzahlen muss.'},
    {text:'Die Anleger werden Miteigentümer der AG und haben Stimmrecht in der Hauptversammlung.', fehler:'Das gilt für Aktionäre. Obligationäre sind Gläubiger.'},
    {text:'Industrieobligationen eignen sich besonders für kleine Handwerksbetriebe.', fehler:'Die Ausgabe ist aufwendig und lohnt sich nur für große, bekannte Unternehmen mit guter Bonität.'}
  ],
  hinweise:['Eigentümer oder Gläubiger?', 'Wer kann eine Anleihe am Kapitalmarkt platzieren?'],
  merke:'Industrieobligation: langfristiges Fremdkapital vom Kapitalmarkt, gestückelt in Teilschuldverschreibungen · feste Zinsen, Rückzahlung am Laufzeitende · geeignet für große Unternehmen guter Bonität.'
},
blBau('rechnung', {id:'FO2', modul:'FO', stufe:2, titel:'Kosten einer Anleihe für das Unternehmen', tags:['Finanzierung', 'Industrieobligation', 'Effektivzins'], kopf:'Anleihe der Neckar Chemie AG',
  text:'Die Neckar Chemie AG gibt eine Industrieobligation aus.'
    + blGeg([['Nennwert der Anleihe (gesamt)', '{nw}'], ['Ausgabekurs', '{ak}'], ['Rückzahlungskurs', '{rk}'], ['Nominalzins (Kupon)', '{zs}'], ['Laufzeit', '{n}'], ['Emissionskosten (vom Nennwert)', '{ek}']])
    + '<b>Auftrag:</b> Ermittle den Mittelzufluss, die Kosten und den Effektivzins (Näherungsformel).',
  spalten:['Betrag'],
  zeilen:[{id:'nw', aus:true, e:'€'}, {id:'ak', aus:true, e:'%'}, {id:'rk', aus:true, e:'%'}, {id:'zs', aus:true, e:'%'}, {id:'n', aus:true, e:'Jahre'}, {id:'ek', aus:true, e:'%'},
    {id:'emk', t:'Emissionskosten = Nennwert × Satz', kurz:'Emissionskosten', e:'€', f:'nw * ek / 100'},
    {id:'az', t:'Mittelzufluss = Nennwert × Ausgabekurs − Emissionskosten', kurz:'Mittelzufluss', e:'€', f:'nw * ak / 100 - emk', art:'zwischen'},
    {id:'zj', t:'Zinsen je Jahr = Nennwert × Nominalzins', kurz:'Zinsen je Jahr', e:'€', f:'nw * zs / 100'},
    {id:'dis', t:'Disagio = Nennwert × (Rückzahlungskurs − Ausgabekurs)', kurz:'Disagio', e:'€', f:'nw * (rk - ak) / 100'},
    {id:'gk', t:'Finanzierungskosten über die Laufzeit = Zinsen × Laufzeit + Disagio + Emissionskosten', kurz:'Finanzierungskosten gesamt', e:'€', f:'zj * n + dis + emk'},
    {id:'eff', t:'Effektivzins ≈ (Zinsen + (Disagio + Emissionskosten) ÷ Laufzeit) ÷ Mittelzufluss × 100', kurz:'Effektivzins', e:'%', f:'(zj + (dis + emk) / n) / az * 100', art:'summe'}],
  werte:[{nw:10000000, ak:98, rk:100, zs:4, n:5, ek:1.5}],
  sets:[[{nw:20000000, ak:99, rk:100, zs:3.5, n:4, ek:1}], [{nw:5000000, ak:97.5, rk:101, zs:5, n:8, ek:2}]],
  hinweise:['Die AG erhält nur den Ausgabekurs abzüglich Emissionskosten, muss aber den Rückzahlungskurs zurückzahlen.', 'Disagio und Emissionskosten werden auf die Laufzeit verteilt.'],
  merke:'Effektivzins einer Anleihe ≈ (jährliche Zinsen + (Disagio + Emissionskosten) ÷ Laufzeit) ÷ Mittelzufluss × 100 – er liegt über dem Nominalzins.'}),
blBau('rechnung', {id:'FO3', modul:'FO', stufe:2, titel:'Rendite für den Anleger', tags:['Finanzierung', 'Industrieobligation', 'Rendite'], kopf:'Kauf einer Teilschuldverschreibung',
  text:'Lena Roth kauft Anleihen der Neckar Chemie AG an der Börse. Spesen bleiben unberücksichtigt.'
    + blGeg([['Nennwert', '{nw}'], ['Kaufkurs', '{kk}'], ['Nominalzins (Kupon)', '{zs}'], ['Restlaufzeit', '{n}'], ['Rückzahlung', 'zu 100 %']]),
  spalten:['Betrag'],
  zeilen:[{id:'nw', aus:true, e:'€'}, {id:'kk', aus:true, e:'%'}, {id:'zs', aus:true, e:'%'}, {id:'n', aus:true, e:'Jahre'},
    {id:'kp', t:'Kaufpreis = Nennwert × Kaufkurs', kurz:'Kaufpreis', e:'€', f:'nw * kk / 100'},
    {id:'zj', t:'Zinsen je Jahr = Nennwert × Nominalzins', kurz:'Zinsen je Jahr', e:'€', f:'nw * zs / 100'},
    {id:'kg', t:'Kursgewinn bis zur Rückzahlung = Nennwert − Kaufpreis', kurz:'Kursgewinn', e:'€', f:'nw - kp'},
    {id:'kgj', t:'Kursgewinn je Jahr', e:'€', f:'kg / n'},
    {id:'ren', t:'Rendite ≈ (Zinsen + Kursgewinn je Jahr) ÷ Kaufpreis × 100', kurz:'Rendite', e:'%', f:'(zj + kgj) / kp * 100', art:'summe'}],
  werte:[{nw:10000, kk:96, zs:3, n:4}],
  sets:[[{nw:20000, kk:98, zs:2.5, n:5}], [{nw:5000, kk:95, zs:4, n:2}]],
  hinweise:['Der Kupon bezieht sich immer auf den Nennwert, nicht auf den Kaufpreis.', 'Wer unter 100 % kauft, erhält bei Rückzahlung einen Kursgewinn.'],
  merke:'Liegt der Kurs unter 100 %, ist die Rendite höher als der Nominalzins: Zinsen und Kursgewinn zusammen, bezogen auf den Kaufpreis.'}),
blBau('zuordnung', {id:'FO4', modul:'FO', stufe:1, titel:'Anleihe oder Aktie?', tags:['Finanzierung', 'Industrieobligation', 'Aktie'],
  text:'Ordne jedes Merkmal zu.', kategorien:['Industrieobligation (Anleihe)', 'Aktie'], anzahl:6,
  faelle:[
    {t:'Der Anleger ist Gläubiger des Unternehmens.', k:0},
    {t:'Der Anleger ist Miteigentümer des Unternehmens.', k:1},
    {t:'Fester Zins – unabhängig vom Gewinn.', k:0},
    {t:'Gewinnabhängige Dividende.', k:1},
    {t:'Rückzahlung am Ende der Laufzeit.', k:0},
    {t:'Keine Rückzahlung – das Kapital steht unbefristet zur Verfügung.', k:1},
    {t:'Stimmrecht in der Hauptversammlung.', k:1},
    {t:'Fremdfinanzierung für das Unternehmen.', k:0}
  ],
  hinweise:['Gläubiger oder Eigentümer? Fremd- oder Eigenkapital?'],
  merke:'Anleihe: Fremdkapital, Gläubiger, fester Zins, Rückzahlung · Aktie: Eigenkapital, Eigentümer, Dividende, Stimmrecht, keine Rückzahlung.'}),
/* ---------- Modul · Leasing: Vertragsgestaltung ---------- */
blBau('zuordnung', {id:'LV1', modul:'LV', stufe:1, titel:'Operate- oder Finance-Leasing?', tags:['Finanzierung', 'Leasing'],
  text:'Ordne jedes Merkmal der passenden Vertragsform zu.', kategorien:['Operate-Leasing', 'Finance-Leasing'], anzahl:7,
  faelle:[
    {t:'Kurze Vertragsdauer, der Vertrag ist kurzfristig kündbar.', k:0},
    {t:'Feste Grundmietzeit, in der nicht gekündigt werden kann.', k:1},
    {t:'Der Leasinggeber trägt das Risiko, dass das Gut veraltet oder untergeht.', k:0},
    {t:'Der Leasingnehmer trägt das Investitionsrisiko (Beschädigung, Untergang, Wartung).', k:1},
    {t:'Wartung und Reparaturen übernimmt meist der Leasinggeber.', k:0},
    {t:'Die Raten in der Grundmietzeit decken die Anschaffungskosten des Leasinggebers samt Zinsen und Gewinn (Vollamortisation).', k:1},
    {t:'Typisch für Kopierer oder Computer, die schnell veralten.', k:0},
    {t:'Nach der Grundmietzeit gibt es oft eine Kauf- oder Verlängerungsoption.', k:1},
    {t:'Wirtschaftlich ähnelt es einem kreditfinanzierten Kauf.', k:1},
    {t:'Ähnelt einem normalen Mietvertrag.', k:0}
  ],
  hinweise:['Kurz und kündbar wie Miete – oder lang, fest und wie ein Ratenkauf?'],
  merke:'Operate-Leasing: kurz, kündbar, Risiko beim Leasinggeber (mietähnlich) · Finance-Leasing: feste Grundmietzeit, Vollamortisation, Risiko beim Leasingnehmer (kaufähnlich), Kauf- oder Verlängerungsoption.'}),
{
  id:'LV2', modul:'LV', typ:'berechnung', mehrfach:true, stufe:1, titel:'Vor- und Nachteile des Leasings',
  tags:['Finanzierung','Leasing','Theorie'],
  text:'Die Bürotechnik Kraft GmbH überlegt, eine neue Fertigungsanlage zu leasen statt sie mit einem Kredit zu kaufen.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Leasing schont die Liquidität: Es fällt keine hohe Anfangsauszahlung an, die Raten werden aus den laufenden Erträgen bezahlt.', richtig:true, weg:'„pay as you earn“'},
    {text:'Feste Leasingraten erleichtern die Planung.', richtig:true, weg:'Kalkulationssicherheit'},
    {text:'Leasing ist über die ganze Laufzeit meist teurer als ein Kreditkauf, weil der Leasinggeber auch Verwaltungskosten und Gewinn einrechnet.', richtig:true, weg:'Vergleich der Gesamtzahlungen'},
    {text:'Wird das Leasinggut dem Leasinggeber zugerechnet, sind die Leasingraten in voller Höhe Aufwand.', richtig:true, weg:'Beim Kreditkauf sind nur Abschreibungen und Zinsen Aufwand.'},
    {text:'Der Leasingnehmer wird mit Vertragsbeginn Eigentümer der Anlage.', fehler:'Eigentümer bleibt der Leasinggeber.'}
  ],
  hinweise:['Liquidität, Planung, Kosten, Eigentum.'],
  merke:'Leasing: liquiditätsschonend, planbar, Raten als Aufwand – aber meist teurer und ohne Eigentum. Kreditkauf: Eigentum, oft günstiger, aber hohe Kapitalbindung.'
},
blBau('rechnung', {id:'LV3', modul:'LV', stufe:2, titel:'Kredit oder Leasing: Aufwand und Liquidität im 1. Jahr', tags:['Finanzierung', 'Leasing', 'Kreditfinanzierung', 'Liquidität'], kopf:'Vergleich im 1. Jahr (Beträge in €)',
  text:'Die Bürotechnik Kraft GmbH vergleicht für eine Anlage den Kauf mit einem Abzahlungsdarlehen und das Leasing.'
    + blGeg([['Anschaffungskosten (= Darlehen)', '{ak} €'], ['Nutzungsdauer (lineare Abschreibung)', '{nd}'], ['Darlehen: Laufzeit (Abzahlungsdarlehen)', '{lz}'], ['Darlehen: Zinssatz', '{zs}'], ['Leasing: Monatsrate', '{rate} €']])
    + '<b>Auftrag:</b> Vergleiche Aufwand (Gewinnwirkung) und Auszahlungen (Liquiditätswirkung) im 1. Jahr.',
  spalten:['Kreditkauf', 'Leasing'],
  zeilen:[{id:'ak', aus:true, e:'ma'}, {id:'nd', aus:true, e:'Jahre'}, {id:'lz', aus:true, e:'Jahre'}, {id:'zs', aus:true, e:'%'}, {id:'rate', aus:true, e:'ma'},
    {id:'afa', t:'Abschreibung = Anschaffungskosten ÷ Nutzungsdauer', kurz:'Abschreibung', e:'ma', fs:['ak / nd', null]},
    {id:'zi', t:'Zinsen im 1. Jahr = Darlehen × Zinssatz', kurz:'Zinsen', e:'ma', fs:['ak * zs / 100', null]},
    {id:'ti', t:'Tilgung im 1. Jahr = Darlehen ÷ Laufzeit', kurz:'Tilgung', e:'ma', fs:['ak / lz', null]},
    {id:'lr', t:'Leasingraten im 1. Jahr = Monatsrate × 12', kurz:'Leasingraten', e:'ma', fs:[null, 'rate * 12']},
    {id:'aufw', t:'Aufwand im 1. Jahr (Kredit: Abschreibung + Zinsen)', kurz:'Aufwand', e:'ma', fs:['afa + zi', 'lr'], art:'zwischen'},
    {id:'ausz', t:'Auszahlungen im 1. Jahr (Kredit: Tilgung + Zinsen)', kurz:'Auszahlungen', e:'ma', fs:['ti + zi', 'lr'], art:'summe'}],
  wahl:[{id:'w1', t:'Welche Variante belastet im 1. Jahr die Liquidität weniger?', opts:['Kreditkauf', 'Leasing'], r:'ausz@1 < ausz@0 ? 1 : 0'},
    {id:'w2', t:'Welche Variante mindert im 1. Jahr den Gewinn weniger?', opts:['Kreditkauf', 'Leasing'], r:'aufw@1 < aufw@0 ? 1 : 0'}],
  werte:[{ak:100000, nd:8, lz:5, zs:6, rate:2100}, {ak:100000, nd:8, lz:5, zs:6, rate:2100}],
  sets:[[{ak:120000, nd:10, lz:4, zs:5, rate:2400}, {ak:120000, nd:10, lz:4, zs:5, rate:2400}], [{ak:60000, nd:5, lz:5, zs:7, rate:1500}, {ak:60000, nd:5, lz:5, zs:7, rate:1500}]],
  hinweise:['Beim Kreditkauf ist nicht die Tilgung Aufwand, sondern die Abschreibung.', 'Auszahlungen beim Kredit: Tilgung und Zinsen.', 'Beim Leasing sind die Raten Aufwand und Auszahlung zugleich.'],
  merke:'Kreditkauf: Aufwand = Abschreibung + Zinsen, Auszahlung = Tilgung + Zinsen · Leasing: Aufwand = Auszahlung = Leasingraten. Ist die Darlehenslaufzeit kürzer als die Nutzungsdauer, belastet der Kredit die Liquidität stärker als den Gewinn.'}),
/* ---------- Finanzierung aus Abschreibungen: Kapazitätserweiterungseffekt (Modul FI) ---------- */
blBau('rechnung', {id:'FI6', modul:'FI', stufe:3, titel:'Kapazitätserweiterungseffekt in der Tabelle', tags:['Finanzierung', 'Abschreibungen', 'Kapazitätserweiterungseffekt'], kopf:'Jahr (Beträge in €)',
  text:'Die Rheinpfalz AG startet mit {bst} gleichen Maschinen. Die Abschreibungen fließen über die Umsatzerlöse zurück. Am Ende jedes Jahres kauft die AG davon so viele neue Maschinen, wie sie bezahlen kann; der Rest wird ins nächste Jahr übertragen. Neue Maschinen werden ab dem folgenden Jahr abgeschrieben.'
    + blGeg([['Anschaffungskosten je Maschine', '{ak} €'], ['Nutzungsdauer (lineare Abschreibung)', '{nd}'], ['Maschinen zu Beginn', '{bst}']]),
  spalten:['Jahr 1', 'Jahr 2', 'Jahr 3', 'Jahr 4'],
  zeilen:[{id:'ak', aus:true, e:'ma'}, {id:'nd', aus:true, e:'Jahre'},
    {id:'bst', t:'Maschinen zu Jahresbeginn', e:'Stück', fs:[null, 'bst@0 + neu@0', 'bst@1 + neu@1', 'bst@2 + neu@2']},
    {id:'rf', t:'Abschreibungsrückflüsse = Maschinen × Anschaffungskosten ÷ Nutzungsdauer', kurz:'Rückflüsse', e:'ma', f:'bst * ak / nd'},
    {id:'vf', t:'Verfügbare Mittel = Rückflüsse + Rest aus dem Vorjahr', kurz:'Verfügbare Mittel', e:'ma', fs:['rf', 'rf + rest@0', 'rf + rest@1', 'rf + rest@2']},
    {id:'neu', t:'Neue Maschinen am Jahresende (nur ganze Maschinen)', kurz:'Neue Maschinen', e:'Stück', f:'0 - aufrunden(0 - vf / ak)', weg:w => '{vf} ÷ {ak} → [neu] ganze Maschinen'},
    {id:'rest', t:'Rest = verfügbare Mittel − neue Maschinen × Anschaffungskosten', kurz:'Rest', e:'ma', f:'vf - neu * ak'}],
  felder:[{id:'zuw', t:'Zuwachs an Maschinen nach vier Jahren (ohne neues Kapital)', kurz:'Zuwachs', e:'Stück', f:'bst@3 + neu@3 - bst@0'}],
  wahl:[{id:'w1', t:'Wie nennt man diese Wirkung der Abschreibungsrückflüsse?', opts:['Kapazitätserweiterungseffekt (Lohmann-Ruchti-Effekt)', 'Leverage-Effekt', 'Kostenremanenz'], r:'0'}],
  werte:[{bst:10, ak:30000, nd:5}, {ak:30000, nd:5}, {ak:30000, nd:5}, {ak:30000, nd:5}],
  sets:[[{bst:6, ak:50000, nd:4}, {ak:50000, nd:4}, {ak:50000, nd:4}, {ak:50000, nd:4}], [{bst:8, ak:20000, nd:5}, {ak:20000, nd:5}, {ak:20000, nd:5}, {ak:20000, nd:5}]],
  hinweise:['Rückflüsse je Jahr = Zahl der Maschinen × jährliche Abschreibung je Maschine.', 'Nur ganze Maschinen kaufen – der Rest bleibt für das nächste Jahr.', 'Die neuen Maschinen erhöhen im Folgejahr die Rückflüsse.'],
  merke:'Kapazitätserweiterungseffekt: Werden Abschreibungsrückflüsse sofort in gleiche Anlagen reinvestiert, wächst der Anlagenbestand ohne zusätzliches Kapital – solange die Preise die Abschreibungen decken.'}),
/* ---------- Modul · Factoring (FC, 30.10.2026; BK Wirtschaftsinformatik BPE 5.5 – ohne Berechnung) ---------- */
{
  id:'FC1', modul:'FC', typ:'berechnung', mehrfach:true, stufe:0, titel:'Was ist Factoring?',
  tags:['Finanzierung','Factoring','Theorie'],
  text:'Die Werkzeugbau Lindner GmbH liefert an Industriekunden mit 60 Tagen Zahlungsziel. Sie verkauft ihre Forderungen laufend an eine Factoringgesellschaft.',
  frage:'Welche Aussagen über Factoring treffen zu?',
  optionen:[
    {text:'Das Unternehmen verkauft seine Forderungen aus Lieferungen und Leistungen an den Factor.', richtig:true, weg:'Der Factor kauft die Forderungen an – das ist der Kern des Factorings.'},
    {text:'Der Factor zahlt sofort einen großen Teil des Forderungsbetrags aus (Finanzierungsfunktion).', richtig:true, weg:'Meist 80–90 %, der Rest nach Zahlung des Kunden.'},
    {text:'Übernimmt der Factor das Risiko, dass ein Kunde nicht zahlt, spricht man von der Delkrederefunktion.', richtig:true, weg:'Delkredere = Übernahme des Ausfallrisikos (echtes Factoring).'},
    {text:'Der Factor kann auch Debitorenbuchhaltung, Mahnwesen und Inkasso übernehmen (Dienstleistungsfunktion).', richtig:true, weg:'Das entlastet die eigene Verwaltung.'},
    {text:'Beim Factoring nimmt das Unternehmen ein Darlehen auf, das es später zurückzahlen muss.', fehler:'Es wird nichts zurückgezahlt: Die Forderungen werden verkauft, der Kunde zahlt an den Factor.'}
  ],
  hinweise:['Wem gehört die Forderung nach dem Verkauf?', 'Denke an drei Funktionen: Geld, Risiko, Arbeit.'],
  merke:'Factoring: laufender Verkauf von Forderungen an einen Factor. Funktionen: Finanzierung (sofort Geld), Delkredere (Ausfallrisiko), Dienstleistung (Buchhaltung, Mahnwesen, Inkasso).'
},
{
  id:'FC2', modul:'FC', typ:'berechnung', mehrfach:true, stufe:0, titel:'Offenes und stilles Factoring',
  tags:['Finanzierung','Factoring','Theorie'],
  text:'Die Lindner GmbH möchte nicht, dass ihre Kunden vom Factoring erfahren. Ein anderes Unternehmen teilt seinen Kunden auf jeder Rechnung mit, dass nur noch an den Factor gezahlt werden darf.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Beim offenen Factoring wissen die Kunden Bescheid und zahlen direkt an den Factor.', richtig:true, weg:'Auf der Rechnung steht ein Hinweis auf die Abtretung.'},
    {text:'Beim stillen Factoring erfahren die Kunden nichts; sie zahlen weiter an den Lieferer, der das Geld an den Factor weiterleitet.', richtig:true, weg:'So bleibt die Kundenbeziehung nach außen unverändert.'},
    {text:'Die Lindner GmbH sollte sich für das stille Factoring entscheiden.', richtig:true, weg:'Nur so bleibt das Factoring den Kunden verborgen.'},
    {text:'Beim stillen Factoring trägt immer der Kunde die Factoringgebühren.', fehler:'Die Kosten trägt das Unternehmen, das seine Forderungen verkauft – egal ob offen oder still.'}
  ],
  hinweise:['Entscheidend ist, ob der Kunde von der Abtretung erfährt.', 'An wen überweist der Kunde?'],
  merke:'Offenes Factoring: Kunde weiß davon und zahlt an den Factor. Stilles Factoring: Kunde weiß nichts und zahlt an den Lieferer.'
},
{
  id:'FC3', modul:'FC', typ:'berechnung', mehrfach:true, stufe:1, titel:'Factoring beurteilen',
  tags:['Finanzierung','Factoring','Theorie','Vergleich'],
  text:'Die Geschäftsführung der Lindner GmbH vergleicht Factoring mit einem Kontokorrentkredit, um die lange Zeit bis zum Zahlungseingang zu überbrücken.',
  frage:'Welche Aussagen sind richtig?',
  optionen:[
    {text:'Factoring verbessert die Liquidität, ohne dass neue Schulden entstehen.', richtig:true, weg:'Aus Forderungen wird sofort Geld – die Bilanz wird sogar kürzer.'},
    {text:'Mit dem früheren Geld kann die Lindner GmbH ihre Lieferer mit Skonto bezahlen.', richtig:true, weg:'Ein häufiges Argument: Skonto sparen statt teuren Lieferantenkredit nutzen.'},
    {text:'Beim echten Factoring muss sich das Unternehmen nicht mehr um zahlungsunfähige Kunden kümmern.', richtig:true, weg:'Das Ausfallrisiko liegt beim Factor.'},
    {text:'Factoring ist kostenlos, weil der Factor nur die Forderungen übernimmt.', fehler:'Der Factor verlangt Gebühren und Zinsen für die Vorauszahlung – Factoring kann teurer sein als ein Kredit.'},
    {text:'Der Factor kauft jede Forderung, auch von Kunden mit schlechter Bonität.', fehler:'Der Factor prüft die Kunden und kann Forderungen ablehnen.'}
  ],
  hinweise:['Was wird aus der Forderung in der Bilanz?', 'Wer verlangt für die Leistungen des Factors Geld?'],
  merke:'Vorteile: sofortige Liquidität ohne neue Schulden, Skontonutzung, Schutz vor Forderungsausfall, Entlastung der Verwaltung. Nachteile: Gebühren und Zinsen, Prüfung der Kunden durch den Factor, bei offenem Factoring mögliches Imageproblem.'
},
/* ---------- Ergänzungen für das Wirtschaftsgymnasium J2 (BPE 10): FV Barwertsummen von Darlehen · FL Leasing und Kredit mit Gewinnsteuer und Barwerten ·
   LV Leasingarten und Vertragsgestaltung. Neu am 06.11.2026. ---------- */
...(() => {
  const q = k => '(1 + kz / 100)' + ' * (1 + kz / 100)'.repeat(k - 1);
  return [
  blBau('rechnung', {id:'FV4', modul:'FV', stufe:3, titel:'Barwertsummen: Fest- oder Abzahlungsdarlehen?', tags:['Finanzierung', 'Darlehensarten', 'Barwert'],
    text:'Die Hagen Metallbau GmbH kann {d} für 3 Jahre als Festdarlehen oder als Abzahlungsdarlehen aufnehmen, jeweils zum Zinssatz von {p}. Zins und Tilgung werden am Jahresende gezahlt. Zum Vergleich werden alle Zahlungen mit dem Kalkulationszinssatz von {kz} abgezinst.',
    kopf:'Größe',
    zeilen:[
      {id:'d', t:'Darlehensbetrag', e:'€', aus:true}, {id:'p', t:'Darlehenszinssatz', e:'%', aus:true}, {id:'kz', t:'Kalkulationszinssatz', e:'%', aus:true},
      {id:'zf', t:'Festdarlehen: Zinsen je Jahr', e:'€', f:'d * p / 100'},
      {id:'bf', t:'Festdarlehen: Barwertsumme', e:'€', f:'zf / ' + q(1) + ' + zf / (' + q(2) + ') + (zf + d) / (' + q(3) + ')'},
      {id:'ta', t:'Abzahlungsdarlehen: Tilgung je Jahr', e:'€', f:'d / 3'},
      {id:'ba', t:'Abzahlungsdarlehen: Barwertsumme', e:'€', f:'(ta + d * p / 100) / ' + q(1) + ' + (ta + (d - ta) * p / 100) / (' + q(2) + ') + (ta + (d - 2 * ta) * p / 100) / (' + q(3) + ')'},
      {id:'df', t:'Unterschied der Barwertsummen (Fest − Abzahlung)', e:'€', f:'bf - ba'}
    ],
    werte:[{d:100000, p:6, kz:4}],
    sets:[[{d:150000, p:3, kz:5}], [{d:80000, p:7, kz:5}]],
    wahl:[{id:'w', t:'Welches Darlehen ist günstiger – und warum?', opts:['das Abzahlungsdarlehen: Liegt der Darlehenszins über dem Kalkulationszins, ist schnelle Tilgung vorteilhaft (kleinere Barwertsumme).', 'das Festdarlehen: Liegt der Darlehenszins unter dem Kalkulationszins, lohnt es sich, das günstige Kapital lange zu behalten (kleinere Barwertsumme).'], r:'p > kz ? 0 : 1'}],
    hinweise:['Barwert = Zahlung ÷ (1 + Kalkulationszins)ⁿ.', 'Festdarlehen: jedes Jahr Zinsen auf den vollen Betrag, Tilgung am Ende.'],
    merke:'Vergleich von Darlehensarten über Barwertsummen · Darlehenszins > Kalkulationszins → schnell tilgen · Darlehenszins < Kalkulationszins → spät tilgen · Liquiditätswirkung zusätzlich beachten.'}),
  {
    id:'FV5', modul:'FV', typ:'berechnung', mehrfach:true, stufe:2, titel:'Welche Darlehensart passt zu den Rahmenbedingungen?',
    tags:['Finanzierung', 'Darlehensarten', 'Vorteilhaftigkeit'],
    text:'Drei Unternehmen wählen zwischen Fest-, Abzahlungs- und Annuitätendarlehen.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Erwartet ein Unternehmen erst in einigen Jahren hohe Einzahlungen (Anlaufphase), schont ein Festdarlehen die Liquidität in den ersten Jahren.', richtig:true},
      {text:'Liegt der Darlehenszins über dem Kalkulationszinssatz, ist die Darlehensart mit der schnellsten Tilgung (kleinste Barwertsumme) vorteilhaft.', richtig:true},
      {text:'Liegt der Darlehenszins unter dem Kalkulationszinssatz, ist eine möglichst schnelle Tilgung am günstigsten.', fehler:'Dann lohnt es sich, das günstige Fremdkapital lange zu behalten – das Festdarlehen hat die kleinste Barwertsumme.'},
      {text:'Das Annuitätendarlehen erleichtert die Finanzplanung, weil die jährliche Belastung gleich bleibt.', richtig:true},
      {text:'Beim Abzahlungsdarlehen ist die Belastung im ersten Jahr am höchsten.', richtig:true},
      {text:'Bei gleichem Zinssatz und gleicher Laufzeit fallen bei allen Darlehensarten gleich hohe Zinsen an.', fehler:'Beim Festdarlehen sind die Zinsen insgesamt am höchsten, weil die volle Schuld bis zum Ende verzinst wird.'}
    ],
    hinweise:['Kosten (Barwerte) und Liquidität (Belastung je Jahr) getrennt betrachten.'],
    merke:'Auswahl der Darlehensart nach Kosten (Barwertsumme, Zinsvergleich mit Kalkulationszins) und Liquidität (Belastungsverlauf, erwartete Einzahlungen) · Festdarlehen: späte Belastung · Abzahlung: hohe Anfangsbelastung · Annuität: gleichmäßig.'
  },
  blBau('rechnung', {id:'FL4', modul:'FL', stufe:3, titel:'Kredit oder Leasing mit Gewinnsteuer und Barwerten', tags:['Finanzierung', 'Leasing', 'Gewinnsteuer', 'Barwert'],
    text:'Die Bäckerei Lindner GmbH braucht einen Ofen für {d} (Nutzungsdauer 3 Jahre, lineare Abschreibung, kein Restwert). Kredit: Abzahlungsdarlehen über {d}, 3 Jahre, Zinssatz {p}. Leasing: Grundmietzeit 3 Jahre, Jahresrate {lr}, danach Rückgabe. Gewinnsteuersatz (pauschal) {s}, Kalkulationszinssatz {kz}. Alle Zahlungen am Jahresende; Zinsen, Abschreibungen und Leasingraten mindern die Gewinnsteuer.',
    kopf:'Größe',
    zeilen:[
      {id:'d', t:'Anschaffungskosten = Darlehen', e:'€', aus:true}, {id:'p', t:'Darlehenszinssatz', e:'%', aus:true}, {id:'lr', t:'Leasingrate je Jahr', e:'€', aus:true}, {id:'s', t:'Gewinnsteuersatz', e:'%', aus:true}, {id:'kz', t:'Kalkulationszinssatz', e:'%', aus:true},
      {id:'ta', t:'Tilgung = Abschreibung je Jahr', e:'€', f:'d / 3'},
      {id:'k1', t:'Kredit: Zahlung nach Steuern im 1. Jahr', e:'€', f:'ta + d * p / 100 - s / 100 * (d * p / 100 + ta)'},
      {id:'k2', t:'Kredit: Zahlung nach Steuern im 2. Jahr', e:'€', f:'ta + (d - ta) * p / 100 - s / 100 * ((d - ta) * p / 100 + ta)'},
      {id:'k3', t:'Kredit: Zahlung nach Steuern im 3. Jahr', e:'€', f:'ta + (d - 2 * ta) * p / 100 - s / 100 * ((d - 2 * ta) * p / 100 + ta)'},
      {id:'bk', t:'Kredit: Barwertsumme', e:'€', f:'k1 / ' + q(1) + ' + k2 / (' + q(2) + ') + k3 / (' + q(3) + ')'},
      {id:'ln', t:'Leasing: Zahlung nach Steuern je Jahr', e:'€', f:'lr * (1 - s / 100)'},
      {id:'bl', t:'Leasing: Barwertsumme', e:'€', f:'ln / ' + q(1) + ' + ln / (' + q(2) + ') + ln / (' + q(3) + ')'}
    ],
    werte:[{d:90000, p:6, lr:34000, s:30, kz:5}],
    sets:[[{d:120000, p:5, lr:43000, s:30, kz:4}], [{d:60000, p:7, lr:21500, s:25, kz:5}]],
    wahl:[{id:'w', t:'Welche Finanzierung ist nach dem Barwertvergleich günstiger?', opts:['Kredit (kleinere Barwertsumme)', 'Leasing (kleinere Barwertsumme)'], r:'(d / 3 + d * p / 100 - s / 100 * (d * p / 100 + d / 3)) / (1 + kz / 100) + (d / 3 + (d - d / 3) * p / 100 - s / 100 * ((d - d / 3) * p / 100 + d / 3)) / ((1 + kz / 100) * (1 + kz / 100)) + (d / 3 + (d - 2 * d / 3) * p / 100 - s / 100 * ((d - 2 * d / 3) * p / 100 + d / 3)) / ((1 + kz / 100) * (1 + kz / 100) * (1 + kz / 100)) <= lr * (1 - s / 100) * (1 / (1 + kz / 100) + 1 / ((1 + kz / 100) * (1 + kz / 100)) + 1 / ((1 + kz / 100) * (1 + kz / 100) * (1 + kz / 100))) ? 0 : 1'}],
    hinweise:['Steuerersparnis = abzugsfähiger Aufwand · Gewinnsteuersatz; die Tilgung ist kein Aufwand.', 'Barwert = Zahlung ÷ (1 + Kalkulationszins)ⁿ.'],
    merke:'Kredit: Auszahlung = Zinsen + Tilgung, Steuerersparnis auf Zinsen + Abschreibung · Leasing: Auszahlung = Rate, Steuerersparnis auf die Rate · Vergleich der Barwertsummen der Zahlungen nach Steuern.'}),
  {
    id:'FL5', modul:'FL', typ:'berechnung', mehrfach:true, stufe:2, titel:'Leasing, Kredit und Steuern',
    tags:['Finanzierung', 'Leasing', 'Gewinnsteuer'],
    text:'Die Bäckerei Lindner GmbH vergleicht Leasing und Kreditkauf auch nach den steuerlichen Wirkungen.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Leasingraten sind beim Leasingnehmer Aufwand und mindern den steuerpflichtigen Gewinn, wenn das Objekt dem Leasinggeber zugerechnet wird.', richtig:true},
      {text:'Beim Kreditkauf mindern Abschreibungen und Zinsen den Gewinn, die Tilgung nicht.', richtig:true},
      {text:'Steuerersparnis = steuerlich abzugsfähiger Aufwand · Gewinnsteuersatz.', richtig:true},
      {text:'Für den Vergleich werden die Zahlungen nach Steuern abgezinst; günstiger ist die kleinere Barwertsumme.', richtig:true},
      {text:'Die Tilgung eines Darlehens ist Aufwand und mindert die Steuer.', fehler:'Die Tilgung verringert nur die Schuld (erfolgsneutral); steuerlich wirken Zinsen und Abschreibungen.'},
      {text:'Beim Leasing bilanziert der Leasingnehmer das Objekt nach HGB immer als eigenes Anlagevermögen.', fehler:'In der Regel wird es dem Leasinggeber zugerechnet (Grundmietzeit 40–90 % der Nutzungsdauer); beim Leasingnehmer erscheint es dann nicht in der Bilanz.'}
    ],
    hinweise:['Was ist Aufwand, was nur Zahlung?'],
    merke:'Leasing: Rate = Aufwand · Kredit: Zinsen + Abschreibung = Aufwand, Tilgung erfolgsneutral · Steuerersparnis = Aufwand · Steuersatz · Barwertvergleich nach Steuern.'
  },
  blBau('zuordnung', {id:'LV4', modul:'LV', stufe:2, titel:'Leasingarten und Vertragsgestaltung', tags:['Finanzierung', 'Leasing', 'Leasingarten'],
    text:'Ordne die Beschreibung zu.',
    kategorien:['direktes Leasing', 'indirektes Leasing', 'Vollamortisationsvertrag', 'Teilamortisationsvertrag'], anzahl:7,
    faelle:[
      {t:'Ein Hersteller vermietet seine Maschinen selbst an die Kunden.', k:0},
      {t:'Ein Kopiererhersteller schließt den Leasingvertrag ohne Leasinggesellschaft direkt mit dem Kunden.', k:0},
      {t:'Eine Leasinggesellschaft kauft die Anlage beim Hersteller und überlässt sie dem Leasingnehmer.', k:1},
      {t:'Die Bank eines Händlers tritt als Leasinggeber zwischen Hersteller und Kunde.', k:1},
      {t:'Die Raten der Grundmietzeit decken Anschaffungskosten, Zinsen, Kosten und Gewinn des Leasinggebers vollständig.', k:2},
      {t:'Nach der Grundmietzeit bleibt ein kalkulierter Restwert, der z. B. durch Verkauf oder ein Andienungsrecht gedeckt wird.', k:3},
      {t:'Beim Kilometerleasing eines Dienstwagens wird das Fahrzeug nach Vertragsende verwertet.', k:3},
      {t:'Am Ende der Grundmietzeit ist das Objekt vollständig bezahlt; der Vertrag kann Kauf- oder Verlängerungsoption vorsehen.', k:2}
    ],
    hinweise:['Wer ist Leasinggeber? Wie viel decken die Raten?'],
    merke:'Direktes Leasing: Hersteller = Leasinggeber · indirektes: Leasinggesellschaft dazwischen · Vollamortisation: Raten decken alles · Teilamortisation: Restwert bleibt · Optionen: Kauf, Verlängerung, Rückgabe.'}),
  {
    id:'LV5', modul:'LV', typ:'berechnung', mehrfach:true, stufe:2, titel:'Merkmale des Leasings',
    tags:['Finanzierung', 'Leasing', 'Merkmale'],
    text:'Die Druckerei Brandl GmbH will eine Druckmaschine leasen statt kaufen.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Leasing ist die Miete von Investitionsgütern; der Leasinggeber bleibt in der Regel rechtlicher und wirtschaftlicher Eigentümer.', richtig:true},
      {text:'Die Grundmietzeit ist unkündbar; nach den steuerlichen Leasingerlassen beträgt sie 40 % bis 90 % der betriebsgewöhnlichen Nutzungsdauer.', richtig:true},
      {text:'Nach Ablauf kann der Vertrag eine Kaufoption, eine Verlängerungsoption oder die Rückgabe vorsehen.', richtig:true},
      {text:'Beim Finance-Leasing trägt der Leasingnehmer Wartung, Versicherung und das Investitionsrisiko.', richtig:true},
      {text:'Beim Operate-Leasing ist die Grundmietzeit lang und unkündbar.', fehler:'Operate-Leasing ist kurzfristig kündbar; das Risiko trägt der Leasinggeber.'},
      {text:'Leasing erhöht nach HGB das bilanzielle Fremdkapital des Leasingnehmers.', fehler:'Wird das Objekt dem Leasinggeber zugerechnet, ist Leasing beim Leasingnehmer bilanzneutral (kein Vermögen, keine Schuld).'}
    ],
    hinweise:['Miete, Grundmietzeit, Optionen, Risiko.'],
    merke:'Leasing: Nutzungsüberlassung gegen Raten · Grundmietzeit unkündbar (40–90 % der Nutzungsdauer) · Optionen · Finance-Leasing (langfristig, Risiko beim Leasingnehmer) vs. Operate-Leasing (kurzfristig kündbar) · bilanzneutral nach HGB.'
  }
  ];
})(),
/* ---------- Ergänzungen für das Wirtschaftsgymnasium Profil Finanzmanagement J2 (BPE 11, 13): FO Anleihe (Pflichten, Bilanz, Beurteilung) ·
   FC echtes Factoring (Kosten, Arten) · FL Leasing und Kreditkauf ohne steuerliche Auswirkungen (Barwerte, Vor- und Nachteile). Neu am 07.11.2026. ---------- */
...(() => {
  const q = k => '(1 + kz / 100)' + ' * (1 + kz / 100)'.repeat(k - 1);
  const T = ['Finanzierung', 'Wirtschaftsgymnasium'];
  return [
  {
    id:'FO5', modul:'FO', typ:'berechnung', mehrfach:true, stufe:2, titel:'Pflichten des Emittenten und Wirkung auf die Bilanz',
    tags:T.concat(['Industrieobligation', 'Anleihe', 'Bilanz']),
    text:'Die Neckar Chemie AG gibt eine Festzinsanleihe über 50 Mio. € mit 4 % Kupon und 7 Jahren Laufzeit aus; der Erlös finanziert ein neues Werk.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Die AG muss jährlich die Zinsen (Kupon) zahlen und die Anleihe am Ende der Laufzeit zum Nennwert zurückzahlen.', richtig:true},
      {text:'Für eine öffentlich angebotene Anleihe ist ein von der BaFin gebilligter Wertpapierprospekt nötig.', richtig:true},
      {text:'In der Bilanz steigen Bankguthaben bzw. Anlagevermögen auf der Aktivseite und die Anleiheverbindlichkeiten auf der Passivseite (Bilanzverlängerung).', richtig:true},
      {text:'Die Eigenkapitalquote sinkt durch die Ausgabe der Anleihe, weil das Fremdkapital steigt.', richtig:true},
      {text:'Die Anleihegläubiger erhalten Stimmrechte in der Hauptversammlung.', fehler:'Anleihegläubiger sind Fremdkapitalgeber ohne Stimmrecht; Stimmrechte haben Aktionäre.'},
      {text:'Bei einem Verlust der AG entfallen die Zinszahlungen.', fehler:'Der Zins ist erfolgsunabhängig; er muss auch bei Verlust gezahlt werden.'}
    ],
    hinweise:['Anleihe = Fremdkapital mit festem Zins und fester Laufzeit.'],
    merke:'Festzinsanleihe: Zinszahlung und Tilgung zum Nennwert · Prospektpflicht · Bilanzverlängerung, Eigenkapitalquote sinkt · Gläubiger ohne Stimmrecht, Zins erfolgsunabhängig.'
  },
  blBau('zuordnung', {id:'FO6', modul:'FO', stufe:2, titel:'Anleihe, Bankdarlehen oder Kapitalerhöhung?', tags:T.concat(['Industrieobligation', 'Finanzierungsvergleich']),
    text:'Auf welche Finanzierung trifft die Aussage vor allem zu?',
    kategorien:['Anleihe', 'Bankdarlehen', 'Kapitalerhöhung'], anzahl:8,
    faelle:[
      {t:'Große Beträge werden von vielen Anlegern am Kapitalmarkt eingesammelt; die Teilschuldverschreibungen sind börsenhandelbar.', k:0},
      {t:'Der Zinssatz hängt stark vom Rating des Emittenten ab; die Ausgabe lohnt sich erst ab hohen Volumina.', k:0},
      {t:'Schnell verfügbar, individuell verhandelbar, meist gegen Sicherheiten.', k:1},
      {t:'Die Hausbank prüft die Kreditwürdigkeit und kann bei Verschlechterung Sicherheiten nachfordern.', k:1},
      {t:'Es entstehen keine Zins- und Tilgungspflichten; die Eigenkapitalquote steigt.', k:2},
      {t:'Altaktionäre erhalten ein Bezugsrecht, sonst verwässern ihre Stimmrechte.', k:2},
      {t:'Die Kapitalgeber werden am Gewinn beteiligt (Dividende).', k:2},
      {t:'Feste Kuponzahlungen, Rückzahlung in einer Summe am Ende der Laufzeit', k:0}
    ],
    hinweise:['Anleihe und Darlehen: Fremdkapital · Kapitalerhöhung: Eigenkapital.'],
    merke:'Anleihe: Kapitalmarkt, große Volumina, Rating, Fremdkapital · Bankdarlehen: individuell, Sicherheiten · Kapitalerhöhung: Eigenkapital, keine Zinsen, Bezugsrecht, Dividendenanspruch.'}),
  blBau('rechnung', {id:'FC4', modul:'FC', stufe:2, titel:'Was kostet echtes Factoring?', tags:T.concat(['Factoring', 'Kosten']),
    text:'Die GreenGrid GmbH verkauft Forderungen über {fo} an einen Factor (echtes Factoring). Der Factor zahlt sofort {bv} aus, der Rest wird als Sicherheitseinbehalt nach Zahlung der Kunden überwiesen. Factoringgebühr {gb} der Forderungen, Zinsen für die Bevorschussung {zs} p. a. für durchschnittlich {tg} Tage (Jahr = 360 Tage). Die Delkrederegebühr ist in der Factoringgebühr enthalten.',
    kopf:'Größe',
    zeilen:[
      {id:'fo', t:'Forderungen', e:'€', aus:true}, {id:'bv', t:'Bevorschussung', e:'%', aus:true}, {id:'gb', t:'Factoringgebühr', e:'%', aus:true}, {id:'zs', t:'Zinssatz', e:'%', aus:true}, {id:'tg', t:'Tage', aus:true},
      {id:'so', t:'sofortige Auszahlung', e:'€', f:'fo * bv / 100'},
      {id:'si', t:'Sicherheitseinbehalt', e:'€', f:'fo - fo * bv / 100'},
      {id:'gf', t:'Factoringgebühr', e:'€', f:'fo * gb / 100'},
      {id:'zi', t:'Zinsen für die Bevorschussung', e:'€', f:'fo * bv / 100 * zs / 100 * tg / 360'},
      {id:'ko', t:'Kosten des Factorings insgesamt', kurz:'Kosten insgesamt', e:'€', f:'fo * gb / 100 + fo * bv / 100 * zs / 100 * tg / 360'}
    ],
    werte:[{fo:400000, bv:90, gb:1.5, zs:6, tg:60}],
    sets:[[{fo:250000, bv:85, gb:1.2, zs:7, tg:45}], [{fo:600000, bv:90, gb:1.8, zs:6.5, tg:72}]],
    wahl:[{id:'w', t:'Wann lohnt sich das Factoring?', opts:['wenn die Vorteile – sofortige Liquidität, kein Ausfallrisiko, ersparte Debitorenbuchhaltung, geringere Kreditkosten – die Kosten übersteigen', 'immer, weil es kostenlos ist', 'nur, wenn die Kunden zahlungsunfähig sind'], r:'0'}],
    hinweise:['Zinsen = Vorschuss · Zinssatz · Tage ÷ 360.'],
    merke:'Factoringkosten = Factoringgebühr (inkl. Delkredere) + Zinsen auf den Vorschuss · Auszahlung sofort (z. B. 80–90 %), Rest nach Zahlungseingang.'}),
  blBau('zuordnung', {id:'FC5', modul:'FC', stufe:1, titel:'Echt oder unecht, offen oder still?', tags:T.concat(['Factoring', 'Arten']),
    text:'Welche Form des Factorings wird beschrieben?',
    kategorien:['echtes Factoring', 'unechtes Factoring', 'offenes Factoring', 'stilles Factoring'], anzahl:8,
    faelle:[
      {t:'Der Factor übernimmt das Ausfallrisiko (Delkredere).', k:0}, {t:'Fällt ein Kunde aus, trägt der Factor den Verlust.', k:0},
      {t:'Das Ausfallrisiko bleibt beim Verkäufer der Forderung.', k:1}, {t:'Der Factor kann den Vorschuss zurückfordern, wenn der Kunde nicht zahlt.', k:1},
      {t:'Die Kunden werden über den Forderungsverkauf informiert und zahlen direkt an den Factor.', k:2}, {t:'Auf der Rechnung steht ein Abtretungsvermerk.', k:2},
      {t:'Die Kunden erfahren nichts vom Forderungsverkauf und zahlen weiter an den Lieferanten.', k:3}, {t:'Der Lieferant leitet die Zahlungen der Kunden an den Factor weiter.', k:3}
    ],
    hinweise:['echt/unecht: Wer trägt das Ausfallrisiko? · offen/still: Wissen die Kunden Bescheid?'],
    merke:'Echtes Factoring: Factor trägt Delkredere · unechtes: Risiko bleibt beim Verkäufer · offen: Kunden zahlen an den Factor · still: Kunden wissen nichts.'}),
  blBau('rechnung', {id:'FL6', modul:'FL', stufe:3, titel:'Leasing oder Kreditkauf: Barwertvergleich', tags:T.concat(['Leasing', 'Kredit', 'Barwert']),
    text:'Die Hagen Metallbau GmbH braucht eine Maschine für {b}. Kreditkauf: Abzahlungsdarlehen über {b}, Laufzeit 3 Jahre, Zinssatz {p}, Zins und Tilgung am Jahresende; die Maschine hat nach 3 Jahren noch einen Restwert von {rw}. Leasing: jährliche Leasingrate {lr} am Jahresende, Laufzeit 3 Jahre, danach Rückgabe. Kalkulationszinssatz {kz}. Steuerliche Auswirkungen bleiben unberücksichtigt.',
    kopf:'Größe',
    zeilen:[
      {id:'b', t:'Kaufpreis = Darlehensbetrag', e:'€', aus:true}, {id:'p', t:'Darlehenszinssatz', e:'%', aus:true}, {id:'rw', t:'Restwert nach 3 Jahren', e:'€', aus:true}, {id:'lr', t:'Leasingrate je Jahr', e:'€', aus:true}, {id:'kz', t:'Kalkulationszinssatz', e:'%', aus:true},
      {id:'k1', t:'Kredit: Zahlung 1. Jahr (Zins + Tilgung)', kurz:'Kredit Zahlung 1. Jahr', e:'€', f:'b / 3 + b * p / 100'},
      {id:'k2', t:'Kredit: Zahlung 2. Jahr', e:'€', f:'b / 3 + (b - b / 3) * p / 100'},
      {id:'k3', t:'Kredit: Zahlung 3. Jahr', e:'€', f:'b / 3 + (b - 2 * b / 3) * p / 100'},
      {id:'bk', t:'Barwertsumme Kredit abzüglich Barwert des Restwerts', kurz:'Barwert Kreditkauf', e:'€', f:'k1 / ' + q(1) + ' + k2 / (' + q(2) + ') + (k3 - rw) / (' + q(3) + ')'},
      {id:'bl', t:'Barwertsumme Leasing', e:'€', f:'lr / ' + q(1) + ' + lr / (' + q(2) + ') + lr / (' + q(3) + ')'}
    ],
    werte:[{b:120000, p:6, rw:15000, lr:42000, kz:5}],
    sets:[[{b:90000, p:5, rw:9000, lr:33000, kz:4}], [{b:150000, p:7, rw:12000, lr:50000, kz:5}]],
    wahl:[{id:'w', t:'Welche Finanzierung ist rechnerisch günstiger?', opts:['Kreditkauf', 'Leasing'], r:'(k1 / (1 + kz / 100) + k2 / ((1 + kz / 100) * (1 + kz / 100)) + (k3 - rw) / ((1 + kz / 100) * (1 + kz / 100) * (1 + kz / 100))) <= (lr / (1 + kz / 100) + lr / ((1 + kz / 100) * (1 + kz / 100)) + lr / ((1 + kz / 100) * (1 + kz / 100) * (1 + kz / 100))) ? 0 : 1',
      weg:['Die Barwertsumme des Kreditkaufs (nach Abzug des Restwerts) ist kleiner.', 'Die Barwertsumme des Leasings ist kleiner.']}],
    hinweise:['Barwert = Zahlung ÷ (1 + Kalkulationszins)ⁿ.', 'Der Restwert gehört beim Kreditkauf dem Unternehmen und mindert die Belastung im 3. Jahr.'],
    merke:'Vergleich ohne Steuern: Barwertsummen der Zahlungen · Kreditkauf: Restwert mindert die Belastung · kleinere Barwertsumme = günstiger · zusätzlich Liquiditätsbelastung, Flexibilität und Service beachten.'}),
  blBau('zuordnung', {id:'FL7', modul:'FL', stufe:1, titel:'Vor- und Nachteile des Leasings', tags:T.concat(['Leasing', 'Beurteilung']),
    text:'Ist die Aussage ein Vorteil oder ein Nachteil des Leasings gegenüber dem Kreditkauf?',
    kategorien:['Vorteil des Leasings', 'Nachteil des Leasings'], anzahl:8,
    faelle:[
      {t:'Es wird kein Eigenkapital gebunden; die Kreditlinie bei der Bank bleibt frei.', k:0}, {t:'Die Anlagen sind immer auf dem neuesten technischen Stand.', k:0},
      {t:'Die Raten sind fest und gut planbar.', k:0}, {t:'Service und Wartung können im Vertrag enthalten sein.', k:0},
      {t:'Die Summe der Leasingraten liegt meist über dem Kaufpreis.', k:1}, {t:'Während der Grundmietzeit ist der Vertrag meist unkündbar.', k:1},
      {t:'Das Unternehmen wird nicht Eigentümer und kann die Anlage nicht als Kreditsicherheit nutzen.', k:1}, {t:'Ein Restwert am Ende der Laufzeit steht dem Leasinggeber zu.', k:1}
    ],
    hinweise:['Liquidität und Flexibilität gegen Kosten und Eigentum abwägen.'],
    merke:'Leasing: Liquidität schonen, aktuelle Technik, planbare Raten, Service · aber höhere Gesamtkosten, Bindung, kein Eigentum, Restwert beim Leasinggeber.'})
  ];
})(),
/* Labor-Aufgaben: eingebettete Werkstätten aus quellen/labor (Stufe „Labor“) */
{
  id:'IDLAB', modul:'ID', typ:'labor', stufe:9, labor:'kapitalwert', titel:'Labor: Kapitalwert-Labor',
  tags:['Investition','Kapitalwert','Labor'],
  merke:'Dynamische Verfahren sind ein Special-Modul – Relevanz mit der Fachlehrkraft abstimmen.',
  text:'Verändere den Kalkulationszinssatz und beobachte Kapitalwert und internen Zinsfuß. Die Werkstatt reagiert sofort auf jede Änderung. Erfülle die Aufträge – sie haken sich automatisch ab. Das Labor zählt nicht für die Medaillen.'
},
{
  id:'FDLAB', modul:'FD', typ:'labor', stufe:9, labor:'tilgung', titel:'Labor: Tilgungsplan-Werkstatt',
  tags:['Darlehen','Tilgungsplan','Labor'],
  text:'Vergleiche Fälligkeits-, Abzahlungs- und Annuitätendarlehen und fülle die Tilgungspläne aus. Die Werkstatt reagiert sofort auf jede Änderung. Erfülle die Aufträge – sie haken sich automatisch ab. Das Labor zählt nicht für die Medaillen.'
},

];

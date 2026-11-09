window.POOL_DATEN_vw = () => [
/* ---------- Modul 1 · BIP: Entstehung und Verwendung ---------- */
blBau('rechnung', {id:'VE1', modul:'VE', stufe:1, titel:'Entstehungsrechnung: Bruttowertschöpfung und BIP', tags:['Volkswirtschaft', 'VGR', 'Entstehungsrechnung'], kopf:'Entstehungsrechnung (Mrd. €)',
  text:'Für eine Volkswirtschaft liegen die Produktionswerte und Vorleistungen der drei Wirtschaftsbereiche vor. Dazu kommen Gütersteuern von {gst@0} und Gütersubventionen von {sub@0}. Berechne die Bruttowertschöpfung der Bereiche und das Bruttoinlandsprodukt.',
  spalten:['Land- und Forstwirtschaft', 'Produzierendes Gewerbe', 'Dienstleistungen'],
  zeilen:[{id:'pw', t:'Produktionswert', e:'Mrd. €'}, {id:'vl', t:'Vorleistungen', e:'Mrd. €'}, {id:'gst', t:'Gütersteuern (gesamt)', e:'Mrd. €'}, {id:'sub', t:'Gütersubventionen (gesamt)', e:'Mrd. €'},
    {id:'bws', t:'Bruttowertschöpfung = Produktionswert − Vorleistungen', kurz:'Bruttowertschöpfung', e:'Mrd. €', f:'pw - vl'}],
  werte:[{pw:60, vl:35, gst:330, sub:15}, {pw:2100, vl:1300}, {pw:3600, vl:1400}],
  sets:[[{pw:48, vl:30, gst:310, sub:12}, {pw:1950, vl:1240}, {pw:3400, vl:1310}], [{pw:72, vl:40, gst:345, sub:18}, {pw:2250, vl:1380}, {pw:3800, vl:1450}]],
  felder:[{id:'sbws', t:'Bruttowertschöpfung insgesamt (Mrd. €)', kurz:'Summe der Bruttowertschöpfung', f:'bws@0 + bws@1 + bws@2', e:'Mrd. €'},
    {id:'bip', t:'Bruttoinlandsprodukt = Bruttowertschöpfung + Gütersteuern − Gütersubventionen (Mrd. €)', kurz:'Bruttoinlandsprodukt', f:'bws@0 + bws@1 + bws@2 + gst@0 - sub@0', e:'Mrd. €'},
    {id:'dl', t:'Anteil der Dienstleistungen an der Bruttowertschöpfung (%)', kurz:'Anteil Dienstleistungen', f:'bws@2 / (bws@0 + bws@1 + bws@2) * 100', e:'%'}],
  hinweise:['Bruttowertschöpfung = was ein Bereich selbst an Wert hinzufügt: Produktionswert minus eingekaufte Vorleistungen.', 'Gütersteuern (z. B. Umsatzsteuer) werden addiert, Gütersubventionen abgezogen.', 'Der Anteil zeigt, wie stark der Dienstleistungssektor ist.'],
  merke:'Entstehungsrechnung: Produktionswert − Vorleistungen = Bruttowertschöpfung; Summe + Gütersteuern − Gütersubventionen = BIP. Vorleistungen werden abgezogen, damit nichts doppelt gezählt wird.'}),
blBau('rechnung', {id:'VE2', modul:'VE', stufe:1, titel:'Verwendungsrechnung', tags:['Volkswirtschaft', 'VGR', 'Verwendungsrechnung'], kopf:'Verwendungsrechnung',
  text:'Die Statistik weist für ein Jahr folgende Werte aus: Konsumausgaben der privaten Haushalte {pk}, Konsumausgaben des Staates {sk}, Bruttoinvestitionen {bi}, Exporte {ex}, Importe {im}. Berechne Außenbeitrag, BIP und die Konsumquote der privaten Haushalte.',
  zeilen:[{id:'pk', t:'Konsumausgaben private Haushalte', e:'Mrd. €'}, {id:'sk', t:'Konsumausgaben des Staates', e:'Mrd. €'}, {id:'bi', t:'Bruttoinvestitionen', e:'Mrd. €'}, {id:'ex', t:'Exporte', e:'Mrd. €'}, {id:'im', t:'Importe', e:'Mrd. €'},
    {id:'ab', t:'Außenbeitrag = Exporte − Importe', kurz:'Außenbeitrag', e:'Mrd. €', f:'ex - im'},
    {id:'bip', t:'BIP = privater Konsum + Staatskonsum + Investitionen + Außenbeitrag', kurz:'BIP', e:'Mrd. €', f:'pk + sk + bi + ab', art:'summe'},
    {id:'kq', t:'Anteil des privaten Konsums am BIP', kurz:'Konsumquote', e:'%', f:'pk / bip * 100'}],
  werte:[{pk:2100, sk:920, bi:860, ex:1950, im:1780}], sets:[[{pk:2050, sk:890, bi:830, ex:1900, im:1760}], [{pk:2200, sk:960, bi:900, ex:1880, im:1890}], [{pk:1980, sk:870, bi:790, ex:1820, im:1650}]],
  hinweise:['Außenbeitrag = Exporte − Importe (kann auch negativ sein).', 'BIP = C + G + I + (Ex − Im).', 'Anteil = privater Konsum ÷ BIP × 100.'],
  merke:'Verwendungsrechnung: BIP = privater Konsum + Staatskonsum + Bruttoinvestitionen + Außenbeitrag. Exporte zählen zum BIP, Importe nicht – sie wurden im Ausland erwirtschaftet.'}),
blBau('rechnung', {id:'VE3', modul:'VE', stufe:2, titel:'Fehlende Größe in der Verwendungsrechnung', tags:['Volkswirtschaft', 'VGR', 'Verwendungsrechnung'], kopf:'Verwendungsrechnung',
  text:'Das BIP eines Landes beträgt {bip}. Bekannt sind privater Konsum {pk}, Staatskonsum {sk}, Exporte {ex} und Importe {im}. Wie hoch waren die Bruttoinvestitionen?',
  zeilen:[{id:'bip', t:'Bruttoinlandsprodukt', e:'Mrd. €'}, {id:'pk', t:'Konsumausgaben private Haushalte', e:'Mrd. €'}, {id:'sk', t:'Konsumausgaben des Staates', e:'Mrd. €'}, {id:'ex', t:'Exporte', e:'Mrd. €'}, {id:'im', t:'Importe', e:'Mrd. €'},
    {id:'ab', t:'Außenbeitrag', e:'Mrd. €', f:'ex - im'},
    {id:'bi', t:'Bruttoinvestitionen = BIP − privater Konsum − Staatskonsum − Außenbeitrag', kurz:'Bruttoinvestitionen', e:'Mrd. €', f:'bip - pk - sk - ab'},
    {id:'iq', t:'Investitionsquote = Investitionen ÷ BIP × 100', kurz:'Investitionsquote', e:'%', f:'bi / bip * 100'}],
  werte:[{bip:4300, pk:2240, sk:950, ex:1890, im:1720}], sets:[[{bip:4100, pk:2150, sk:900, ex:1800, im:1700}], [{bip:3950, pk:2080, sk:870, ex:1650, im:1700}], [{bip:4450, pk:2300, sk:1000, ex:1950, im:1780}]],
  hinweise:['Stelle die Verwendungsgleichung nach den Investitionen um.', 'Denke an das Vorzeichen des Außenbeitrags.', 'Investitionsquote = Investitionen ÷ BIP × 100.'],
  merke:'Die Verwendungsgleichung lässt sich nach jeder Größe umstellen – z. B. I = BIP − C − G − (Ex − Im).'}),
{
  id:'VE4', modul:'VE', typ:'berechnung', mehrfach:true, stufe:2, titel:'Was gehört ins BIP?',
  tags:['Volkswirtschaft','VGR','Theorie'],
  text:'Das Bruttoinlandsprodukt misst den Wert aller im Inland in einem Jahr hergestellten Waren und Dienstleistungen (Endprodukte).',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die Arbeit eines Handwerkers, der eine Küche einbaut und eine Rechnung schreibt, geht ins BIP ein.', richtig:true, weg:'Marktleistung, die erfasst wird.'},
    {text:'Hausarbeit, Kindererziehung in der Familie und Ehrenamt werden im BIP nicht erfasst.', richtig:true, weg:'Sie werden nicht über den Markt bezahlt.'},
    {text:'Schwarzarbeit fehlt im BIP, obwohl Werte geschaffen werden.', richtig:true, weg:'Sie wird nicht gemeldet (Schattenwirtschaft).'},
    {text:'Ein in Deutschland arbeitender Franzose trägt zum deutschen BIP bei.', richtig:true, weg:'BIP = Inlandsprinzip: was im Inland erwirtschaftet wird.'},
    {text:'Vorleistungen wie Stahl für ein Auto werden zusätzlich zum Auto gezählt.', fehler:'Dann würde doppelt gezählt – im BIP stecken nur die Endprodukte bzw. die Wertschöpfung.'}
  ],
  hinweise:['Wird die Leistung über den Markt bezahlt und erfasst?', 'Inland oder Inländer?', 'Warum werden Vorleistungen abgezogen?'],
  merke:'BIP: Inlandsprinzip, nur Marktleistungen, ohne Doppelzählung der Vorleistungen.'
},

/* ---------- Modul 2 · Verteilung, Wachstum und BNE ---------- */
blBau('rechnung', {id:'VV1', modul:'VV', stufe:1, titel:'Lohnquote und Gewinnquote', tags:['Volkswirtschaft', 'VGR', 'Verteilungsrechnung'], kopf:'Verteilungsrechnung (Mrd. €)',
  text:'Das Volkseinkommen setzt sich aus Arbeitnehmerentgelt und Unternehmens- und Vermögenseinkommen zusammen. Berechne Volkseinkommen, Lohnquote und Gewinnquote für beide Jahre.',
  spalten:['Vorjahr', 'Berichtsjahr'],
  zeilen:[{id:'ae', t:'Arbeitnehmerentgelt', e:'Mrd. €'}, {id:'uv', t:'Unternehmens- und Vermögenseinkommen', e:'Mrd. €'},
    {id:'ve', t:'Volkseinkommen', e:'Mrd. €', f:'ae + uv', art:'summe'},
    {id:'lq', t:'Lohnquote = Arbeitnehmerentgelt ÷ Volkseinkommen × 100', kurz:'Lohnquote', e:'%', f:'ae / ve * 100'},
    {id:'gq', t:'Gewinnquote = Unternehmens- und Vermögenseinkommen ÷ Volkseinkommen × 100', kurz:'Gewinnquote', e:'%', f:'uv / ve * 100'}],
  werte:[{ae:2050, uv:850}, {ae:2180, uv:820}], sets:[[{ae:1980, uv:870}, {ae:2040, uv:910}], [{ae:2200, uv:800}, {ae:2310, uv:790}], [{ae:2100, uv:900}, {ae:2150, uv:960}]],
  wahl:[{id:'w', t:'Die Lohnquote ist gegenüber dem Vorjahr …', opts:['gestiegen – die Arbeitnehmer erhalten einen größeren Anteil am Volkseinkommen.', 'gesunken – die Arbeitnehmer erhalten einen kleineren Anteil am Volkseinkommen.'], r:'lq@1 > lq@0 ? 0 : 1'}],
  hinweise:['Volkseinkommen = Arbeitnehmerentgelt + Unternehmens- und Vermögenseinkommen.', 'Lohnquote + Gewinnquote = 100 %.', 'Vergleiche die Lohnquoten beider Jahre.'],
  merke:'Die Lohnquote zeigt den Anteil der Arbeitnehmerentgelte am Volkseinkommen. Sie steigt oft in Abschwüngen, weil Gewinne stärker schwanken als Löhne.'}),
blBau('rechnung', {id:'VV2', modul:'VV', stufe:2, titel:'Nominales und reales Wachstum', tags:['Volkswirtschaft', 'VGR', 'Wirtschaftswachstum'], kopf:'BIP (Mrd. €)',
  text:'Das nominale BIP ist in Preisen des jeweiligen Jahres angegeben. Der Preisindex des BIP (Basisjahr = 100) zeigt die Preisentwicklung. Berechne das reale BIP und die Wachstumsraten.',
  spalten:['Vorjahr', 'Berichtsjahr'],
  zeilen:[{id:'bn', t:'Nominales BIP', e:'Mrd. €'}, {id:'pi', t:'Preisindex (Basisjahr = 100)', e:''},
    {id:'br', t:'Reales BIP = nominales BIP ÷ Preisindex × 100', kurz:'Reales BIP', e:'Mrd. €', f:'bn / pi * 100'}],
  werte:[{bn:4120, pi:103}, {bn:4305, pi:108}], sets:[[{bn:3900, pi:102}, {bn:4040, pi:105}], [{bn:4000, pi:100}, {bn:4100, pi:104}], [{bn:4250, pi:104}, {bn:4400, pi:106}]],
  felder:[{id:'wn', t:'Nominales Wachstum (%)', kurz:'Nominales Wachstum', f:'(bn@1 - bn@0) / bn@0 * 100', e:'%'}, {id:'wr', t:'Reales Wachstum (%)', kurz:'Reales Wachstum', f:'(br@1 - br@0) / br@0 * 100', e:'%'}],
  wahl:[{id:'w', t:'Die Wirtschaft ist real …', opts:['gewachsen.', 'geschrumpft – das nominale Wachstum beruht nur auf Preissteigerungen.'], r:'br@1 > br@0 ? 0 : 1'}],
  hinweise:['Reales BIP = nominales BIP ÷ Preisindex × 100 – die Preissteigerung wird herausgerechnet.', 'Wachstum = (neu − alt) ÷ alt × 100.', 'Steigt das nominale BIP langsamer als die Preise, schrumpft die Wirtschaft real.'],
  merke:'Nominales Wachstum enthält Preissteigerungen. Aussagekräftig für die Produktion ist das reale Wachstum.'}),
blBau('rechnung', {id:'VV3', modul:'VV', stufe:3, titel:'Vom BIP zum BNE und je Einwohner', tags:['Volkswirtschaft', 'VGR', 'BNE'], kopf:'Inlands- und Inländerprinzip',
  text:'Ein Land hat ein BIP von {bip}. Inländer erhalten {pez} Primäreinkommen aus dem Ausland (z. B. Löhne von Grenzpendlern, Zinsen, Dividenden), an das Ausland fließen {pea}. Das Land hat {ew} Einwohner.',
  zeilen:[{id:'bip', t:'Bruttoinlandsprodukt', e:'Mrd. €'}, {id:'pez', t:'Primäreinkommen aus der übrigen Welt', e:'Mrd. €'}, {id:'pea', t:'Primäreinkommen an die übrige Welt', e:'Mrd. €'}, {id:'ew', t:'Einwohner', e:'Mio.'},
    {id:'bne', t:'Bruttonationaleinkommen = BIP + Primäreinkommen aus dem Ausland − an das Ausland', kurz:'Bruttonationaleinkommen', e:'Mrd. €', f:'bip + pez - pea'},
    {id:'bipk', t:'BIP je Einwohner (€)', kurz:'BIP je Einwohner', e:'€', f:'bip / ew * 1000'},
    {id:'bnek', t:'BNE je Einwohner (€)', kurz:'BNE je Einwohner', e:'€', f:'bne / ew * 1000'}],
  werte:[{bip:4300, pez:210, pea:140, ew:84}], sets:[[{bip:4100, pez:180, pea:150, ew:82}], [{bip:4450, pez:160, pea:190, ew:85}], [{bip:3960, pez:220, pea:120, ew:80}]],
  hinweise:['BIP: Inlandsprinzip (wo?) – BNE: Inländerprinzip (wer?).', 'Einkommen von Inländern aus dem Ausland kommt dazu, Einkommen von Ausländern aus dem Inland geht ab.', 'Mrd. € ÷ Mio. Einwohner × 1.000 = € je Einwohner.'],
  merke:'BNE = BIP + Saldo der Primäreinkommen mit der übrigen Welt. Je-Kopf-Werte machen Länder unterschiedlicher Größe vergleichbar.'}),
{
  id:'VV4', modul:'VV', typ:'berechnung', mehrfach:true, stufe:2, titel:'Ist das BIP ein gutes Wohlstandsmaß?',
  tags:['Volkswirtschaft','VGR','Wohlstand','Theorie'],
  text:'Politiker verweisen gern auf ein steigendes BIP als Zeichen wachsenden Wohlstands.',
  frage:'Welche Kritikpunkte am BIP als Wohlstandsmaß sind berechtigt?',
  optionen:[
    {text:'Umweltschäden werden nicht abgezogen – Aufräumarbeiten nach einem Unfall erhöhen das BIP sogar.', richtig:true, weg:'Reparaturen gehen positiv ein.'},
    {text:'Das BIP sagt nichts über die Verteilung der Einkommen aus.', richtig:true, weg:'Ein hohes BIP je Einwohner kann sehr ungleich verteilt sein.'},
    {text:'Nicht bezahlte Arbeit wie Pflege in der Familie oder Ehrenamt fehlt.', richtig:true, weg:'Sie trägt viel zum Wohlstand bei.'},
    {text:'Freizeit, Gesundheit und Lebenszufriedenheit werden nicht erfasst.', richtig:true, weg:'Deshalb gibt es ergänzende Indikatoren, z. B. den Human Development Index.'},
    {text:'Das BIP ist ungeeignet, weil Dienstleistungen nicht erfasst werden.', fehler:'Dienstleistungen gehören selbstverständlich zum BIP.'}
  ],
  hinweise:['Was fließt ins BIP ein, was nicht?', 'Steigt das BIP auch durch Schäden?', 'Wie verteilt sich das Einkommen?'],
  merke:'Das BIP misst die wirtschaftliche Leistung – nicht Wohlstand oder Lebensqualität. Ergänzende Indikatoren berücksichtigen Umwelt, Verteilung und Gesundheit.'
},
/* ---------- Modul 3 · Polypol: Preisbildung am Markt ---------- */
blBau('markt', {id:'PP1', modul:'PP', stufe:1, titel:'Gleichgewichtspreis aus der Tabelle', mengeneinheit:'kg', einheit:'kg', frage:4,
  text:'Auf einem Wochenmarkt bieten viele Händler Erdbeeren an, viele Kunden fragen nach. Die Tabelle zeigt, welche Mengen bei verschiedenen Preisen nachgefragt und angeboten werden.',
  preise:[2, 2.5, 3, 3.5, 4, 4.5], N:[1000, 900, 800, 700, 600, 500], A:[400, 600, 800, 1000, 1200, 1400],
  merke:'Im Gleichgewicht stimmen Angebot und Nachfrage überein – der Markt wird geräumt. Bei höheren Preisen bleiben Anbieter auf Ware sitzen (Angebotsüberhang), bei niedrigeren gehen Käufer leer aus (Nachfrageüberhang).'}),
blBau('markt', {id:'PP2', modul:'PP', stufe:2, titel:'Umsatz und Überhänge', mengeneinheit:'Stück', einheit:'Stück', frage:1, umsatzFrage:true,
  text:'Für Fahrradhelme eines bestimmten Typs gibt es viele Anbieter und viele Nachfrager.',
  preise:[10, 12, 14, 16, 18, 20], N:[900, 800, 700, 600, 500, 400], A:[300, 500, 700, 900, 1100, 1300],
  merke:'Abgesetzt wird immer die kleinere Menge. Deshalb ist die Absatzmenge im Gleichgewicht am größten – der Umsatz meistens auch.'}),
{
  id:'PP4', modul:'PP', typ:'berechnung', mehrfach:true, stufe:1, titel:'Marktformen',
  tags:['Volkswirtschaft','Marktformen','Theorie'],
  text:'Märkte werden nach der Zahl der Anbieter und Nachfrager eingeteilt.',
  frage:'Welche Zuordnungen sind richtig?',
  optionen:[
    {text:'Polypol: viele Anbieter, viele Nachfrager – z. B. Wochenmarkt, Börse.', richtig:true, weg:'Kein Einzelner kann den Preis bestimmen.'},
    {text:'Oligopol: wenige Anbieter, viele Nachfrager – z. B. Mineralölkonzerne, Mobilfunk.', richtig:true, weg:'Die Anbieter beobachten sich gegenseitig.'},
    {text:'Angebotsmonopol: ein Anbieter, viele Nachfrager – z. B. Netzbetreiber, Patentinhaber.', richtig:true, weg:'Der Monopolist kann den Preis festlegen.'},
    {text:'Nachfragemonopol: viele Anbieter, ein Nachfrager – z. B. Bundeswehr bei Panzern.', richtig:true, weg:'Der einzige Käufer hat die Marktmacht.'},
    {text:'Im Polypol kann ein einzelner Anbieter den Marktpreis nach Belieben erhöhen.', fehler:'Er ist Mengenanpasser – bei höherem Preis kaufen die Kunden bei der Konkurrenz.'}
  ],
  hinweise:['Zähle Anbieter und Nachfrager.', 'Wer hat Einfluss auf den Preis?', 'Polypol = viele, Oligopol = wenige, Monopol = einer.'],
  merke:'Marktformen nach der Zahl der Marktteilnehmer: Polypol (viele), Oligopol (wenige), Monopol (einer).'
},
{
  id:'PP5', modul:'PP', typ:'berechnung', mehrfach:true, stufe:2, titel:'Der vollkommene Markt',
  tags:['Volkswirtschaft','Polypol','Theorie'],
  text:'Das Modell des vollkommenen Marktes beschreibt einen „idealen“ Wettbewerb.',
  frage:'Welche Bedingungen gehören zum vollkommenen Markt?',
  optionen:[
    {text:'Homogene Güter: Die Waren sind gleichartig und austauschbar.', richtig:true, weg:'Kein Anbieter hat ein „besonderes“ Produkt.'},
    {text:'Vollständige Markttransparenz: Alle kennen alle Preise und Angebote.', richtig:true, weg:'Kein Kunde kauft aus Unwissenheit teurer.'},
    {text:'Keine Präferenzen: keine Vorlieben für bestimmte Händler, Orte oder Zeiten.', richtig:true, weg:'Gekauft wird allein nach dem Preis.'},
    {text:'Sofortige Reaktion: Käufer und Verkäufer reagieren ohne Verzögerung auf Preisänderungen.', richtig:true, weg:'Unendlich schnelle Anpassung.'},
    {text:'Auf einem vollkommenen Markt kann es für dasselbe Gut mehrere Preise geben.', fehler:'Nein – es gibt nur einen einheitlichen Preis (Gesetz der Unterschiedslosigkeit).'}
  ],
  hinweise:['Welche Bedingungen sorgen dafür, dass nur der Preis zählt?', 'Wie viel wissen die Marktteilnehmer?', 'Kann es dann unterschiedliche Preise geben?'],
  merke:'Vollkommener Markt: homogene Güter, Markttransparenz, keine Präferenzen, sofortige Reaktion – dann gibt es nur einen Preis. Die Börse kommt dem am nächsten.'
},
{
  id:'PP6', modul:'PP', typ:'berechnung', mehrfach:true, stufe:3, titel:'Funktionen des Preises',
  tags:['Volkswirtschaft','Polypol','Theorie'],
  text:'Der Marktpreis erfüllt in der Marktwirtschaft wichtige Aufgaben.',
  frage:'Welche Zuordnungen sind richtig?',
  optionen:[
    {text:'Ausgleichsfunktion: Der Gleichgewichtspreis bringt Angebot und Nachfrage zum Ausgleich und räumt den Markt.', richtig:true, weg:'Kein Überhang bleibt übrig.'},
    {text:'Signalfunktion: Steigende Preise zeigen Knappheit an.', richtig:true, weg:'Anbieter und Käufer erkennen, wo Güter knapp sind.'},
    {text:'Lenkungsfunktion: Produktionsfaktoren fließen dorthin, wo hohe Preise hohe Gewinne versprechen.', richtig:true, weg:'Der Preis steuert die Produktion.'},
    {text:'Auslesefunktion: Anbieter, die zum Marktpreis nicht kostendeckend produzieren, scheiden aus.', richtig:true, weg:'Nur wirtschaftlich arbeitende Anbieter bleiben.'},
    {text:'Der Preis sorgt dafür, dass jeder Käufer die gewünschte Menge bekommt, egal wie viel er zahlen will.', fehler:'Wer den Marktpreis nicht zahlen will oder kann, geht leer aus.'}
  ],
  hinweise:['Was passiert am Markt beim Gleichgewichtspreis?', 'Was „sagen“ steigende Preise?', 'Wer bleibt bei niedrigen Preisen am Markt?'],
  merke:'Preisfunktionen: Ausgleich, Signal, Lenkung, Auslese.'
},

{
  id:'PP7', modul:'PP', typ:'berechnung', stufe:2, titel:'Verschiebung der Nachfragekurve',
  tags:['Volkswirtschaft','Polypol','Grafik'],
  text:'Nach einer Studie über die gesundheitliche Wirkung steigt die Nachfrage nach Haferflocken bei jedem Preis (gestrichelte Kurve N₁).' + vwMarktGrafik({verschiebung:'N+'}),
  frage:'Wie verändern sich Gleichgewichtspreis und -menge?',
  optionen:[
    {text:'Preis und Menge steigen.', richtig:true, weg:'Die Nachfragekurve verschiebt sich nach rechts; der neue Schnittpunkt mit A liegt höher und weiter rechts.'},
    {text:'Der Preis steigt, die Menge sinkt.', fehler:'Das wäre bei einem sinkenden Angebot der Fall.'},
    {text:'Der Preis sinkt, die Menge steigt.', fehler:'Das passiert, wenn das Angebot steigt.'},
    {text:'Preis und Menge bleiben gleich.', fehler:'Der Schnittpunkt hat sich verschoben.'}
  ],
  hinweise:['Wo schneidet N₁ die Angebotskurve?', 'Vergleiche den neuen mit dem alten Schnittpunkt.', 'Rechtsverschiebung der Nachfrage = mehr Nachfrage bei jedem Preis.'],
  merke:'Nachfrage steigt → Preis und Menge steigen. Nachfrage sinkt → Preis und Menge sinken.'
},
{
  id:'PP8', modul:'PP', typ:'berechnung', stufe:2, titel:'Verschiebung der Angebotskurve',
  tags:['Volkswirtschaft','Polypol','Grafik'],
  text:'Eine sehr gute Ernte erhöht das Angebot an Äpfeln (gestrichelte Kurve A₁).' + vwMarktGrafik({verschiebung:'A+'}),
  frage:'Wie verändern sich Gleichgewichtspreis und -menge?',
  optionen:[
    {text:'Der Preis sinkt, die Menge steigt.', richtig:true, weg:'Mehr Angebot bei jedem Preis: Der neue Schnittpunkt liegt tiefer und weiter rechts.'},
    {text:'Preis und Menge steigen.', fehler:'Das wäre eine steigende Nachfrage.'},
    {text:'Der Preis steigt, die Menge sinkt.', fehler:'Das wäre ein sinkendes Angebot, z. B. nach einer Missernte.'},
    {text:'Preis und Menge sinken.', fehler:'Das wäre eine sinkende Nachfrage.'}
  ],
  hinweise:['In welche Richtung hat sich A verschoben?', 'Wo liegt der neue Schnittpunkt mit N?', 'Mehr Angebot drückt den Preis.'],
  merke:'Angebot steigt → Preis sinkt, Menge steigt. Angebot sinkt → Preis steigt, Menge sinkt.'
},
/* ---------- Modul 4 · Polypol: Staatliche Eingriffe ---------- */
blBau('markt', {id:'PF1', modul:'PF', stufe:2, titel:'Höchstpreis für Konzertkarten', mengeneinheit:'Karten', einheit:'Karte', frage:1, eingriff:{art:'hoechst', i:1},
  text:'Für ein Festival bieten viele Wiederverkäufer Karten an. Weil die Preise stark steigen, schlägt die Stadt vor, einen Höchstpreis von {ep} festzulegen.',
  preise:[30, 40, 50, 60, 70, 80], N:[5200, 4400, 3600, 2800, 2000, 1200], A:[1600, 2600, 3600, 4600, 5600, 6600],
  hinweise:['Bestimme zuerst das Gleichgewicht.', 'Liegt der Höchstpreis unter oder über dem Gleichgewichtspreis?', 'Bei einem Höchstpreis unter dem Gleichgewichtspreis wird mehr nachgefragt als angeboten.'],
  merke:'Ein Höchstpreis unter dem Gleichgewichtspreis führt zu einem Nachfrageüberhang: Nicht alle Käufer kommen zum Zug – es drohen Schwarzmarkt und Zuteilung.'}),
blBau('markt', {id:'PF2', modul:'PF', stufe:2, titel:'Garantierter Mindestpreis für Milch', mengeneinheit:'Liter', einheit:'Liter', frage:4, eingriff:{art:'mindest', i:4},
  text:'Um die Milchbauern zu schützen, garantiert der Staat einen Mindestpreis von {ep} je Liter und kauft nicht absetzbare Milch zu diesem Preis auf. Die Tabelle zeigt Angebot und Nachfrage im Monat.',
  preise:[0.30, 0.35, 0.40, 0.45, 0.50, 0.55], N:[900000, 850000, 800000, 750000, 700000, 650000], A:[500000, 650000, 800000, 950000, 1100000, 1250000],
  hinweise:['Bestimme zuerst das Gleichgewicht.', 'Liegt der Mindestpreis über oder unter dem Gleichgewichtspreis?', 'Beim Mindestpreis wird mehr angeboten als nachgefragt – diesen Überschuss kauft der Staat auf.'],
  merke:'Ein Mindestpreis über dem Gleichgewichtspreis schützt die Anbieter, erzeugt aber einen Angebotsüberhang. Kauft der Staat ihn auf, zahlen die Steuerzahler – es entstehen „Milchseen“ und „Butterberge“.'}),
blBau('markt', {id:'PF3', modul:'PF', stufe:3, titel:'Höchstpreis für Mietwohnungen', mengeneinheit:'Wohnungen', einheit:'m²', frage:0, eingriff:{art:'hoechst', i:0},
  text:'In einer Großstadt sind Wohnungen knapp. Die Tabelle zeigt, wie viele Wohnungen bei verschiedenen Kaltmieten je m² angeboten und nachgefragt werden. Die Stadt erwägt eine Mietobergrenze von {ep} je m².',
  preise:[9, 10, 11, 12, 13, 14], N:[8400, 7800, 7200, 6600, 6000, 5400], A:[4800, 5600, 6400, 6600, 6800, 7000],
  hinweise:['Wo liegt das Gleichgewicht?', 'Wirkt die Obergrenze, weil sie unter dem Gleichgewichtspreis liegt?', 'Nachfrageüberhang = Nachfrage − Angebot beim Höchstpreis.'],
  merke:'Mietobergrenzen helfen den Mietern, die eine Wohnung haben. Weil weniger angeboten wird, gehen aber andere leer aus – Wartelisten und Ausweichen auf andere Märkte sind die Folge.'}),
{
  id:'PF4', modul:'PF', typ:'berechnung', mehrfach:true, stufe:1, titel:'Warum greift der Staat ein?',
  tags:['Volkswirtschaft','Staatseingriffe','Theorie'],
  text:'Der Markt bildet Preise eigentlich selbst. Trotzdem setzt der Staat manchmal Höchst- oder Mindestpreise fest.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Höchstpreise sollen Verbraucher vor zu hohen Preisen schützen – z. B. bei Mieten oder Grundnahrungsmitteln in Krisen.', richtig:true, weg:'Sozialer Schutz der Nachfrager.'},
    {text:'Mindestpreise sollen Anbieter schützen – z. B. Landwirte oder Arbeitnehmer (Mindestlohn).', richtig:true, weg:'Einkommenssicherung der Anbieter.'},
    {text:'Höchst- und Mindestpreise sind marktkonträre Eingriffe: Sie setzen den Preismechanismus außer Kraft.', richtig:true, weg:'Der Preis kann seine Ausgleichsfunktion nicht mehr erfüllen.'},
    {text:'Subventionen oder Steuern sind marktkonforme Eingriffe: Sie verändern Angebot oder Nachfrage, der Preis bildet sich weiter am Markt.', richtig:true, weg:'Z. B. Tabaksteuer, Förderung von Elektroautos.'},
    {text:'Staatliche Preisvorgaben führen immer zu mehr Angebot.', fehler:'Ein Höchstpreis senkt das Angebot sogar.'}
  ],
  hinweise:['Wen soll ein Höchstpreis schützen, wen ein Mindestpreis?', 'Bildet sich der Preis noch am Markt?', 'Was ist der Unterschied zwischen Steuer und Preisvorgabe?'],
  merke:'Marktkonträr: Höchst- und Mindestpreise (Preis wird vorgegeben). Marktkonform: Steuern, Subventionen, Information (Preis bildet sich weiter am Markt).'
},
{
  id:'PF5', modul:'PF', typ:'berechnung', mehrfach:true, stufe:2, titel:'Folgen eines Höchstpreises',
  tags:['Volkswirtschaft','Staatseingriffe','Höchstpreis'],
  text:'Eine Stadt führt eine strenge Mietobergrenze unter dem Marktpreis ein.',
  frage:'Welche Folgen sind zu erwarten?',
  optionen:[
    {text:'Mieter mit Wohnung zahlen weniger.', richtig:true, weg:'Das ist das Ziel der Maßnahme.'},
    {text:'Mehr Menschen suchen eine Wohnung, als angeboten werden – es entstehen Wartelisten.', richtig:true, weg:'Nachfrageüberhang.'},
    {text:'Vermieter investieren weniger in Neubau und Instandhaltung.', richtig:true, weg:'Die niedrigere Miete macht Investitionen weniger lohnend.'},
    {text:'Es können Schwarzmärkte oder Umgehungen entstehen, z. B. überhöhte Abstandszahlungen.', richtig:true, weg:'Die Knappheit sucht sich andere Wege.'},
    {text:'Der Wohnungsmangel verschwindet, weil die Mieten sinken.', fehler:'Im Gegenteil: Die Nachfrage steigt, das Angebot sinkt.'}
  ],
  hinweise:['Wer profitiert direkt?', 'Was passiert mit Angebot und Nachfrage bei niedrigerem Preis?', 'Wie wird ein Mangel verteilt, wenn der Preis es nicht darf?'],
  merke:'Höchstpreis unter p*: Vorteil für die versorgten Käufer, aber Nachfrageüberhang, weniger Angebot, Schwarzmärkte.'
},
{
  id:'PF7', modul:'PF', typ:'berechnung', mehrfach:true, stufe:2, titel:'Mindestlohn als Mindestpreis',
  tags:['Volkswirtschaft','Staatseingriffe','Mindestpreis','Arbeitsmarkt'],
  text:'Auf dem Arbeitsmarkt sind die Arbeitnehmer die Anbieter von Arbeit, die Unternehmen die Nachfrager. Der gesetzliche Mindestlohn ist ein Mindestpreis für Arbeit.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Liegt der Mindestlohn über dem Marktlohn, bieten mehr Menschen Arbeit an, als nachgefragt wird.', richtig:true, weg:'Modellhaft: Angebotsüberhang = Arbeitslosigkeit.'},
    {text:'Beschäftigte mit niedrigem Lohn profitieren von einem höheren Einkommen.', richtig:true, weg:'Ziel des Mindestlohns.'},
    {text:'Liegt der Mindestlohn unter dem Marktlohn, hat er keine Wirkung.', richtig:true, weg:'Dann wird ohnehin mehr gezahlt.'},
    {text:'Ob tatsächlich Arbeitsplätze verloren gehen, hängt auch von Produktivität, Nachfrage und Kaufkraft ab – das Modell vereinfacht.', richtig:true, weg:'Höhere Löhne können auch die Nachfrage nach Gütern stärken.'},
    {text:'Der Mindestlohn ist ein Höchstpreis.', fehler:'Er legt eine Untergrenze fest – also ein Mindestpreis.'}
  ],
  hinweise:['Wer ist auf dem Arbeitsmarkt Anbieter, wer Nachfrager?', 'Wo muss ein Mindestpreis liegen, damit er wirkt?', 'Was entspricht einem Angebotsüberhang auf dem Arbeitsmarkt?'],
  merke:'Mindestlohn = Mindestpreis für Arbeit. Im Modell kann er einen Angebotsüberhang (Arbeitslosigkeit) erzeugen; in der Wirklichkeit spielen weitere Faktoren mit.'
},
{
  id:'PF6', modul:'PF', typ:'berechnung', mehrfach:true, stufe:3, titel:'Höchst- und Mindestpreise',
  tags:['Volkswirtschaft','Polypol','Staatseingriffe','Theorie'],
  text:'Der Staat greift manchmal in die Preisbildung ein – z. B. mit Mietpreisbremse, Mindestlohn oder garantierten Erzeugerpreisen.' + vwMarktGrafik({hoechst:true}),
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Ein Höchstpreis wirkt nur, wenn er unter dem Gleichgewichtspreis liegt – dann entsteht ein Nachfrageüberhang.', richtig:true, weg:'Wie in der Grafik: Beim Höchstpreis wird mehr nachgefragt als angeboten.'},
    {text:'Ein Mindestpreis wirkt nur, wenn er über dem Gleichgewichtspreis liegt – dann entsteht ein Angebotsüberhang.', richtig:true, weg:'Z. B. Butterberge bei garantierten Agrarpreisen.'},
    {text:'Folgen eines Höchstpreises können Schwarzmärkte, Wartelisten und Zuteilungen sein.', richtig:true, weg:'Die knappe Menge muss anders verteilt werden.'},
    {text:'Der Mindestlohn ist ein Mindestpreis auf dem Arbeitsmarkt.', richtig:true, weg:'Er liegt (für manche Tätigkeiten) über dem Marktlohn.'},
    {text:'Ein Höchstpreis über dem Gleichgewichtspreis senkt den Marktpreis.', fehler:'Er hat dann keine Wirkung – der Markt pendelt sich beim Gleichgewichtspreis ein.'}
  ],
  hinweise:['Wo muss der Höchstpreis liegen, damit er etwas bewirkt?', 'Was passiert bei einem Mindestpreis über dem Gleichgewicht?', 'Wie wird ein Nachfrageüberhang verteilt?'],
  merke:'Höchstpreis (unter p*) → Nachfrageüberhang. Mindestpreis (über p*) → Angebotsüberhang. Beide schalten die Ausgleichsfunktion des Preises aus.'
},
/* ---------- Modul 5 · Monopol ---------- */
blBau('monopol', {id:'MO1', modul:'MO', stufe:1, titel:'Erlös des Monopolisten', mengeneinheit:'Stück', nurErloes:true,
  text:'Ein Pharmaunternehmen ist einziger Anbieter eines patentgeschützten Medikaments. Je höher der Preis, desto weniger Packungen werden nachgefragt.',
  x:[20, 40, 60, 80, 100, 120, 140, 160, 180], a:100, b:0.5, Kf:0, kv:0,
  merke:'Der Monopolist kann den Preis selbst festlegen – aber nicht unabhängig von der Nachfrage: Höherer Preis bedeutet geringere Absatzmenge (Preis-Absatz-Funktion).'}),
blBau('monopol', {id:'MO2', modul:'MO', stufe:2, titel:'Cournot-Punkt in der Tabelle', mengeneinheit:'Stück',
  text:'Ein regionaler Wasserversorger ist einziger Anbieter von Wasserfiltern eines bestimmten Systems.',
  x:[20, 40, 60, 80, 100, 120, 140], a:100, b:0.5, Kf:1200, kv:20,
  merke:'Der Monopolist maximiert nicht den Erlös, sondern den Gewinn. Der gewinnmaximale Punkt auf der Preis-Absatz-Funktion heißt Cournot-Punkt.'}),
blBau('monopol', {id:'MO3', modul:'MO', stufe:3, titel:'Grenzerlös und Grenzkosten', mengeneinheit:'Stück', delta:true,
  text:'Ein Softwareunternehmen besitzt das einzige zugelassene Programm für eine bestimmte Prüfung.',
  x:[100, 200, 300, 400, 500, 600, 700], a:50, b:0.04, Kf:3000, kv:10,
  merke:'Solange eine zusätzliche Menge mehr Erlös als Kosten bringt (Grenzerlös > Grenzkosten), steigt der Gewinn. Im Cournot-Punkt gilt: Grenzerlös = Grenzkosten.'}),
{
  id:'MO4', modul:'MO', typ:'berechnung', mehrfach:true, stufe:3, titel:'Der Cournot-Punkt',
  tags:['Volkswirtschaft','Monopol','Cournot-Punkt','Theorie'],
  text:'Ein Monopolist sucht auf seiner Preis-Absatz-Funktion die gewinnmaximale Kombination aus Preis und Menge.',
  frage:'Welche Aussagen zum Cournot-Punkt treffen zu?',
  optionen:[
    {text:'Der Cournot-Punkt ist der Punkt auf der Preis-Absatz-Funktion, an dem der Gewinn am größten ist.', richtig:true, weg:'Benannt nach dem Ökonomen Antoine-Augustin Cournot.'},
    {text:'Im Cournot-Punkt gilt: Grenzerlös = Grenzkosten – eine zusätzliche Einheit bringt genauso viel Erlös, wie sie kostet.', richtig:true, weg:'Davor lohnt sich mehr Produktion, danach nicht mehr.'},
    {text:'Die Cournot-Menge ist kleiner als die Menge, bei der der Erlös am höchsten ist.', richtig:true, weg:'Weil zusätzliche Mengen auch Kosten verursachen.'},
    {text:'Der Cournot-Preis liegt über dem Preis, der sich bei vollständiger Konkurrenz bilden würde.', richtig:true, weg:'Der Monopolist verknappt die Menge und erhöht so den Preis.'},
    {text:'Im Cournot-Punkt sind die Kosten am niedrigsten.', fehler:'Entscheidend ist der Abstand zwischen Erlös und Kosten, nicht die Kosten allein.'},
    {text:'Im Cournot-Punkt ist der Erlös am höchsten.', fehler:'Das Erlösmaximum liegt bei einer größeren Menge – dort wäre der Gewinn kleiner.'}
  ],
  hinweise:['Was will der Monopolist maximieren – Erlös oder Gewinn?', 'Wann lohnt sich eine zusätzliche Einheit?', 'Wie unterscheiden sich Monopol- und Wettbewerbspreis?'],
  merke:'Cournot-Punkt: Gewinnmaximum auf der Preis-Absatz-Funktion (Grenzerlös = Grenzkosten). Im Vergleich zum Wettbewerb: höherer Preis, geringere Menge.'
},
{
  id:'MO5', modul:'MO', typ:'berechnung', mehrfach:true, stufe:1, titel:'Merkmale des Monopols',
  tags:['Volkswirtschaft','Monopol','Theorie'],
  text:'Ein Unternehmen ist einziger Anbieter eines Gutes.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der Monopolist ist Preisfestsetzer: Er bestimmt entweder den Preis oder die Menge – das andere ergibt sich aus der Nachfrage.', richtig:true, weg:'Beides gleichzeitig kann er nicht festlegen.'},
    {text:'Die Preis-Absatz-Funktion zeigt, welche Menge zu welchem Preis abgesetzt werden kann.', richtig:true, weg:'Sie ist die Nachfragekurve des Marktes.'},
    {text:'Im Vergleich zum Polypol ist der Preis höher und die Menge geringer.', richtig:true, weg:'Der Monopolist verknappt das Angebot, um den Gewinn zu erhöhen.'},
    {text:'Ein Monopolist kann jeden beliebigen Preis verlangen und trotzdem dieselbe Menge verkaufen.', fehler:'Steigt der Preis, sinkt die Nachfrage – auch der Monopolist ist an die Preis-Absatz-Funktion gebunden.'},
    {text:'Der Monopolist erzielt den höchsten Gewinn immer beim höchsten Erlös.', fehler:'Gewinn = Erlös − Kosten; der Cournot-Punkt liegt meist bei einer kleineren Menge als das Erlösmaximum.'}
  ],
  hinweise:['Kann der Monopolist Preis und Menge gleichzeitig festlegen?', 'Was passiert mit der Nachfrage bei höherem Preis?', 'Welche Rolle spielen die Kosten?'],
  merke:'Monopol: Preisfestsetzer mit Preis-Absatz-Funktion; Gewinnmaximum im Cournot-Punkt – höherer Preis, geringere Menge als im Wettbewerb.'
},
{
  id:'MO6', modul:'MO', typ:'berechnung', mehrfach:true, stufe:2, titel:'Monopole: Arten und Kontrolle',
  tags:['Volkswirtschaft','Monopol','Wettbewerbspolitik'],
  text:'Monopole entstehen aus unterschiedlichen Gründen und werden vom Staat beobachtet.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Natürliches Monopol: Ein zweites Netz (Wasser, Strom, Schiene) wäre unwirtschaftlich – ein Anbieter ist am günstigsten.', richtig:true, weg:'Deshalb werden solche Netze reguliert (Bundesnetzagentur).'},
    {text:'Ein Patent gewährt ein zeitlich begrenztes Monopol als Belohnung für Erfindungen.', richtig:true, weg:'Meist bis zu 20 Jahre.'},
    {text:'Das Bundeskartellamt kann den Missbrauch einer marktbeherrschenden Stellung untersagen.', richtig:true, weg:'Missbrauchsaufsicht nach dem Gesetz gegen Wettbewerbsbeschränkungen (GWB).'},
    {text:'Zusammenschlüsse großer Unternehmen müssen unter bestimmten Voraussetzungen angemeldet und genehmigt werden.', richtig:true, weg:'Fusionskontrolle.'},
    {text:'Monopole sind in Deutschland grundsätzlich verboten.', fehler:'Verboten ist der Missbrauch von Marktmacht, nicht das Monopol an sich.'}
  ],
  hinweise:['Warum gibt es nur ein Wassernetz?', 'Was schützt ein Patent?', 'Was darf ein Monopolist nicht?'],
  merke:'Natürliche, rechtliche (Patent) und staatliche Monopole. Der Staat kontrolliert Marktmacht durch Missbrauchsaufsicht, Fusionskontrolle und Regulierung.'
},
/* ---------- Modul 6 · Oligopol (Theorie) ---------- */
{
  id:'OL1', modul:'OL', typ:'berechnung', mehrfach:true, stufe:1, titel:'Merkmale des Oligopols',
  tags:['Volkswirtschaft','Oligopol','Theorie'],
  text:'Auf dem deutschen Tankstellenmarkt teilen sich wenige große Gesellschaften den größten Teil des Umsatzes.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Im Oligopol gibt es wenige Anbieter mit jeweils großem Marktanteil.', richtig:true, weg:'Daher kennt jeder Anbieter seine Konkurrenten genau.'},
    {text:'Die Anbieter sind voneinander abhängig: Jede Preisänderung löst Reaktionen der Konkurrenz aus (Reaktionsverbundenheit).', richtig:true, weg:'Senkt einer den Preis, ziehen die anderen meist nach.'},
    {text:'Preise sind oft „starr“ – man vermeidet Preiskämpfe und konkurriert lieber über Werbung, Service und Marke.', richtig:true, weg:'Nicht-preislicher Wettbewerb.'},
    {text:'Ein Oligopolist kann den Preis ohne Rücksicht auf die Konkurrenz festlegen.', fehler:'Das kann nur ein Monopolist – im Oligopol muss man mit Reaktionen rechnen.'}
  ],
  hinweise:['Wie viele Anbieter gibt es?', 'Was passiert, wenn einer den Preis senkt?', 'Worüber konkurrieren Oligopolisten außer über den Preis?'],
  merke:'Oligopol: wenige Anbieter, Reaktionsverbundenheit, oft starre Preise und Wettbewerb über Qualität, Service und Werbung.'
},
{
  id:'OL2', modul:'OL', typ:'berechnung', mehrfach:true, stufe:2, titel:'Verhaltensweisen im Oligopol',
  tags:['Volkswirtschaft','Oligopol','Theorie'],
  text:'Oligopolisten können sich unterschiedlich verhalten.',
  frage:'Welche Beschreibungen sind richtig?',
  optionen:[
    {text:'Preisführerschaft: Ein großer Anbieter ändert den Preis, die anderen folgen.', richtig:true, weg:'Ohne ausdrückliche Absprache – „Parallelverhalten“.'},
    {text:'Preiskampf (ruinöse Konkurrenz): Anbieter unterbieten sich, um Konkurrenten vom Markt zu drängen.', richtig:true, weg:'Kurzfristig gut für Kunden, langfristig droht weniger Wettbewerb.'},
    {text:'Kartell: Anbieter sprechen Preise, Mengen oder Gebiete ab.', richtig:true, weg:'Ziel: Gewinne wie ein Monopolist.'},
    {text:'Friedliches Verhalten: Man vermeidet Preisänderungen und setzt auf Produktdifferenzierung.', richtig:true, weg:'Typisch, um Preiskämpfe zu vermeiden.'},
    {text:'Preisführerschaft ist immer eine verbotene Absprache.', fehler:'Bloßes Nachziehen ohne Absprache ist erlaubt; verboten sind Absprachen und abgestimmtes Verhalten.'}
  ],
  hinweise:['Wer gibt bei der Preisführerschaft den Ton an?', 'Was ist das Ziel eines Preiskampfs?', 'Was unterscheidet ein Kartell von bloßem Nachziehen?'],
  merke:'Oligopol: Preisführerschaft, Preiskampf, Kartell oder friedliches Nebeneinander mit nicht-preislichem Wettbewerb.'
},
{
  id:'OL3', modul:'OL', typ:'berechnung', stufe:2, titel:'Fall: Benzinpreise',
  tags:['Volkswirtschaft','Oligopol'],
  text:'Ein großer Tankstellenkonzern erhöht morgens um 7 Uhr den Literpreis um 6 Cent. Innerhalb von 20 Minuten ziehen alle Tankstellen in der Umgebung nach – ohne dass sie miteinander gesprochen haben.',
  frage:'Welches Verhalten liegt vor?',
  optionen:[
    {text:'Preisführerschaft mit Parallelverhalten.', richtig:true, weg:'Ein Anbieter führt, die anderen folgen – möglich durch hohe Markttransparenz (Preis-Apps, Markttransparenzstelle).'},
    {text:'Ruinöser Preiskampf.', fehler:'Dabei würden sich die Anbieter gegenseitig unterbieten.'},
    {text:'Vollkommene Konkurrenz im Polypol.', fehler:'Es gibt nur wenige große Anbieter.'},
    {text:'Ein Kartell mit schriftlicher Preisabsprache.', fehler:'Laut Fall gab es keine Absprache.'}
  ],
  hinweise:['Haben die Anbieter miteinander gesprochen?', 'Wer hat den Preis zuerst geändert?', 'Warum reagieren alle so schnell?'],
  merke:'Preisführerschaft: Ein Anbieter führt, die anderen folgen – ohne Absprache.'
},
{
  id:'OL4', modul:'OL', typ:'berechnung', mehrfach:true, stufe:3, titel:'Kartelle und Kartellrecht',
  tags:['Volkswirtschaft','Oligopol','Kartell','Wettbewerbspolitik'],
  text:'Mehrere Hersteller von Kaffee treffen sich regelmäßig und stimmen Preiserhöhungen ab. Das Bundeskartellamt ermittelt.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Absprachen über Preise, Mengen oder Gebiete sind nach dem Gesetz gegen Wettbewerbsbeschränkungen grundsätzlich verboten.', richtig:true, weg:'Kartellverbot (§ 1 GWB, Art. 101 AEUV).'},
    {text:'Das Bundeskartellamt kann hohe Bußgelder verhängen.', richtig:true, weg:'Bis zu 10 % des Jahresumsatzes.'},
    {text:'Mit der Kronzeugenregelung kann ein Unternehmen, das das Kartell aufdeckt, einen Erlass oder eine Ermäßigung der Strafe erhalten.', richtig:true, weg:'So werden Kartelle von innen aufgebrochen.'},
    {text:'Leidtragende eines Preiskartells sind die Verbraucher, die höhere Preise zahlen.', richtig:true, weg:'Der Wettbewerb wird ausgeschaltet.'},
    {text:'Kartelle sind erlaubt, solange sie beim Kartellamt angemeldet sind.', fehler:'Preisabsprachen sind auch angemeldet nicht erlaubt; nur bestimmte Kooperationen (z. B. Mittelstandskartelle) können zulässig sein.'}
  ],
  hinweise:['Welches Gesetz schützt den Wettbewerb?', 'Welche Strafen drohen?', 'Wie kommen Kartelle ans Licht?'],
  merke:'Preisabsprachen sind verboten. Das Bundeskartellamt verfolgt Kartelle mit Bußgeldern; Kronzeugen können straffrei bleiben.'
},
{
  id:'OL5', modul:'OL', typ:'berechnung', stufe:3, titel:'Fall: Preiskampf',
  tags:['Volkswirtschaft','Oligopol'],
  text:'Drei Mobilfunkanbieter teilen sich den Markt. Ein Anbieter senkt seine Tarife um 30 %, um Kunden zu gewinnen. Die beiden anderen ziehen sofort nach; alle drei schreiben danach Verluste.',
  frage:'Was beschreibt der Fall am besten?',
  optionen:[
    {text:'Einen Preiskampf im Oligopol – wegen der Reaktionsverbundenheit gewinnt keiner Marktanteile, alle verlieren Gewinn.', richtig:true, weg:'Deshalb meiden Oligopolisten Preiskämpfe meist.'},
    {text:'Einen Monopolmissbrauch.', fehler:'Es gibt drei Anbieter, keinen Monopolisten.'},
    {text:'Eine erlaubte Preisabsprache.', fehler:'Es gab keine Absprache – und Preisabsprachen wären verboten.'},
    {text:'Das Verhalten im vollkommenen Polypol.', fehler:'Im Polypol gibt es viele Anbieter, die den Preis nicht beeinflussen.'}
  ],
  hinweise:['Warum ziehen die anderen sofort nach?', 'Hat sich der Marktanteil verändert?', 'Wer profitiert kurzfristig?'],
  merke:'Preiskämpfe im Oligopol schaden meist allen Anbietern – kurzfristig profitieren die Kunden.'
},
{
  id:'OL6', modul:'OL', typ:'berechnung', mehrfach:true, stufe:2, titel:'Oligopol, Monopol und Polypol im Vergleich',
  tags:['Volkswirtschaft','Oligopol','Marktformen'],
  text:'Vergleiche die Marktformen aus Sicht der Verbraucher.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Im Polypol ist der Preis für die Verbraucher am günstigsten, weil kein Anbieter Marktmacht hat.', richtig:true, weg:'Wettbewerb drückt den Preis.'},
    {text:'Im Monopol sind Preise meist höher und Mengen geringer als bei Wettbewerb.', richtig:true, weg:'Cournot-Punkt.'},
    {text:'Im Oligopol hängt das Ergebnis vom Verhalten ab – von Preiskampf bis Kartell.', richtig:true, weg:'Deshalb beobachtet das Kartellamt Oligopolmärkte besonders.'},
    {text:'Im Oligopol gibt es keinen Wettbewerb.', fehler:'Es gibt Wettbewerb – oft über Qualität, Service und Werbung statt über den Preis.'}
  ],
  hinweise:['Wo haben Anbieter die meiste Marktmacht?', 'Wann profitieren Verbraucher?', 'Worüber konkurrieren Oligopolisten?'],
  merke:'Je weniger Anbieter, desto größer die Marktmacht. Wettbewerbspolitik soll verhindern, dass Marktmacht missbraucht wird.'
},
/* ---------- Modul 7 · Magisches Viereck: Überblick ---------- */
{
  id:'MV1', modul:'MV', typ:'berechnung', mehrfach:true, stufe:1, titel:'Die vier Ziele des Stabilitätsgesetzes',
  tags:['Volkswirtschaft','Wirtschaftspolitik','Magisches Viereck'],
  text:'Das Stabilitäts- und Wachstumsgesetz von 1967 verpflichtet Bund und Länder, mit ihrer Wirtschafts- und Finanzpolitik zum gesamtwirtschaftlichen Gleichgewicht beizutragen.',
  frage:'Welche Aussagen zu den Zielen und ihren Messgrößen treffen zu?',
  optionen:[
    {text:'Preisniveaustabilität wird an der Inflationsrate gemessen, meist mit dem Verbraucherpreisindex.', richtig:true, weg:'Die EZB strebt mittelfristig eine Inflationsrate von 2 % an.'},
    {text:'Ein hoher Beschäftigungsstand wird an der Arbeitslosenquote gemessen.', richtig:true, weg:'Je niedriger die Arbeitslosenquote, desto eher ist das Ziel erreicht.'},
    {text:'Stetiges und angemessenes Wirtschaftswachstum wird an der Veränderung des realen BIP gemessen.', richtig:true, weg:'Real – also ohne Preissteigerungen.'},
    {text:'Das außenwirtschaftliche Gleichgewicht wird am Außenbeitrag bzw. am Saldo der Leistungsbilanz im Verhältnis zum BIP gemessen.', richtig:true, weg:'Ziel ist ein in etwa ausgeglichener Saldo – weder dauerhaft hohe Überschüsse noch Defizite.'},
    {text:'Eine gerechte Einkommensverteilung gehört zu den vier Zielen des Stabilitätsgesetzes.', fehler:'Sie gehört erst zum erweiterten magischen Sechseck (zusammen mit dem Umweltschutz).'}
  ],
  hinweise:['Welche vier Ziele nennt § 1 des Stabilitätsgesetzes?', 'Mit welcher Zahl würdest du jedes Ziel messen?'],
  merke:'Magisches Viereck: Preisniveaustabilität (Inflationsrate) · hoher Beschäftigungsstand (Arbeitslosenquote) · stetiges, angemessenes Wachstum (reales BIP) · außenwirtschaftliches Gleichgewicht (Außenbeitrag/Leistungsbilanz).'
},
{
  id:'MV2', modul:'MV', typ:'berechnung', mehrfach:true, stufe:1, titel:'Warum „magisch“?',
  tags:['Volkswirtschaft','Wirtschaftspolitik','Magisches Viereck'],
  text:'Die vier Ziele werden als „magisches“ Viereck bezeichnet.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'„Magisch“ heißt: Es ist kaum möglich, alle vier Ziele gleichzeitig voll zu erreichen.', richtig:true, weg:'Man bräuchte dafür sozusagen Magie.'},
    {text:'Zwischen den Zielen bestehen Zielkonflikte: Maßnahmen für ein Ziel können ein anderes gefährden.', richtig:true, weg:'Beispiel: Mehr Nachfrage senkt die Arbeitslosigkeit, kann aber die Preise treiben.'},
    {text:'Der Staat muss die Ziele gleichrangig verfolgen; in der Praxis setzt die Politik aber Schwerpunkte.', richtig:true, weg:'Je nach Lage steht z. B. die Inflations- oder die Arbeitsmarktbekämpfung im Vordergrund.'},
    {text:'Das magische Sechseck ergänzt die Ziele um eine gerechte Einkommens- und Vermögensverteilung und den Schutz der Umwelt.', richtig:true, weg:'Diese Ziele stehen nicht im Stabilitätsgesetz von 1967.'},
    {text:'„Magisch“ bedeutet, dass sich die Ziele bei guter Politik von selbst erreichen.', fehler:'Im Gegenteil – gerade weil sie sich gegenseitig behindern, gelten sie als schwer gleichzeitig erreichbar.'}
  ],
  hinweise:['Was müsste man können, um alle Ziele gleichzeitig zu erfüllen?', 'Welche zwei Ziele kommen beim Sechseck dazu?'],
  merke:'Magisch, weil die Ziele nicht alle gleichzeitig vollständig erreichbar sind. Sechseck = Viereck + gerechte Einkommens- und Vermögensverteilung + Umweltschutz.'
},
{
  id:'MV3', modul:'MV', typ:'berechnung', mehrfach:true, stufe:2, titel:'Zielbeziehungen',
  tags:['Volkswirtschaft','Wirtschaftspolitik','Zielbeziehungen'],
  text:'Zwischen den Zielen des magischen Vierecks unterscheidet man Zielharmonie, Zielkonflikt und Zielneutralität.',
  frage:'Welche Zuordnungen treffen zu?',
  optionen:[
    {text:'Wirtschaftswachstum und hoher Beschäftigungsstand: meist Zielharmonie – bei steigender Produktion werden mehr Arbeitskräfte gebraucht.', richtig:true, weg:'Wächst die Wirtschaft, sinkt in der Regel die Arbeitslosigkeit.'},
    {text:'Hoher Beschäftigungsstand und Preisniveaustabilität: häufig Zielkonflikt – mehr Beschäftigung und Nachfrage können die Preise steigen lassen.', richtig:true, weg:'Mehr Einkommen → mehr Nachfrage → Preissteigerungen.'},
    {text:'Hohe Exportüberschüsse und Preisniveaustabilität: Zielkonflikt möglich – die Nachfrage aus dem Ausland kann die Preise im Inland treiben.', richtig:true, weg:'Man spricht von importierter Inflation über die Exportnachfrage.'},
    {text:'Zielneutralität heißt: Die Förderung eines Ziels hat keinen Einfluss auf das andere.', richtig:true, weg:'Die Ziele beeinflussen sich in diesem Fall nicht.'},
    {text:'Zielharmonie heißt: Die Förderung eines Ziels verschlechtert ein anderes.', fehler:'Das ist ein Zielkonflikt. Bei Zielharmonie fördert ein Ziel das andere.'}
  ],
  hinweise:['Fördern oder behindern sich die beiden Ziele?', 'Was passiert mit den Preisen, wenn mehr Menschen Arbeit und Einkommen haben?'],
  merke:'Zielharmonie: Ziele fördern sich (Wachstum ↔ Beschäftigung) · Zielkonflikt: Ziele behindern sich (Beschäftigung ↔ Preisniveaustabilität) · Zielneutralität: kein Einfluss.'
},
{
  id:'MV4', modul:'MV', typ:'berechnung', stufe:2, titel:'Zielbeziehung im Fall',
  tags:['Volkswirtschaft','Wirtschaftspolitik','Zielbeziehungen'],
  text:'Der Staat legt ein großes Investitionsprogramm für Schulen und Straßen auf. Die Bauunternehmen stellen Leute ein, die Arbeitslosigkeit sinkt. Weil die Baufirmen ausgelastet sind, steigen die Baupreise und mit der höheren Nachfrage auch andere Preise.',
  frage:'Welche Zielbeziehung zeigt der Fall zwischen hohem Beschäftigungsstand und Preisniveaustabilität?',
  optionen:[
    {text:'Zielkonflikt – die Maßnahme fördert die Beschäftigung, gefährdet aber die Preisniveaustabilität.', richtig:true, weg:'Mehr Nachfrage senkt die Arbeitslosigkeit und treibt zugleich die Preise.'},
    {text:'Zielharmonie – beide Ziele werden durch die Maßnahme gefördert.', fehler:'Die Preise steigen – das verschlechtert die Preisniveaustabilität.'},
    {text:'Zielneutralität – die Maßnahme wirkt nur auf die Beschäftigung.', fehler:'Im Fall steigen auch die Preise; die Ziele beeinflussen sich also.'},
    {text:'Keine Zielbeziehung – Staatsausgaben haben mit den Zielen des Stabilitätsgesetzes nichts zu tun.', fehler:'Mit seinen Ausgaben beeinflusst der Staat gerade die gesamtwirtschaftliche Nachfrage.'}
  ],
  hinweise:['Welches Ziel wird besser, welches schlechter?'],
  merke:'Mehr gesamtwirtschaftliche Nachfrage: gut für Beschäftigung und Wachstum – Gefahr für die Preisniveaustabilität (Zielkonflikt).'
},
{
  id:'MV5', modul:'MV', typ:'berechnung', mehrfach:true, stufe:2, titel:'Welche Ziele sind erreicht?',
  tags:['Volkswirtschaft','Wirtschaftspolitik','Magisches Viereck'],
  text:'Für ein Land liegen folgende Jahreswerte vor: Inflationsrate 2,1 % · Arbeitslosenquote 6,2 % · reales Wachstum des BIP −0,3 % · Außenbeitrag 6,5 % des BIP.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Das Ziel Preisniveaustabilität ist weitgehend erreicht.', richtig:true, weg:'2,1 % liegt nahe am Ziel der EZB von 2 %.'},
    {text:'Das Ziel stetiges und angemessenes Wirtschaftswachstum ist verfehlt.', richtig:true, weg:'Die Wirtschaft ist real geschrumpft.'},
    {text:'Das außenwirtschaftliche Gleichgewicht ist gestört, weil der Außenbeitrag sehr hoch ist.', richtig:true, weg:'Dauerhafte hohe Überschüsse gelten ebenso als Ungleichgewicht wie Defizite.'},
    {text:'Ein hoher Beschäftigungsstand ist erreicht, weil die Arbeitslosenquote unter 10 % liegt.', fehler:'6,2 % ist deutlich von Vollbeschäftigung entfernt – als Richtwert gelten oft Quoten um 2–3 %.'},
    {text:'Ein Exportüberschuss ist immer erwünscht, das Ziel ist deshalb übererfüllt.', fehler:'Ziel ist ein Gleichgewicht. Hohe Überschüsse bedeuten Defizite anderer Länder und Abhängigkeit vom Ausland.'}
  ],
  hinweise:['Vergleiche jeden Wert mit dem Ziel.', 'Ist ein hoher Exportüberschuss ein „Gleichgewicht“?'],
  merke:'Ziel erreicht? Inflationsrate nahe 2 % · möglichst niedrige Arbeitslosenquote · reales Wachstum positiv und stetig · Außenbeitrag bzw. Leistungsbilanz in etwa ausgeglichen.'
},

/* ---------- Modul 8 · Preisniveaustabilität ---------- */
blBau('rechnung', {id:'PN1', modul:'PN', stufe:1, titel:'Warenkorb und Inflationsrate', tags:['Volkswirtschaft', 'Preisniveaustabilität', 'Warenkorb'], kopf:'Warenkorb eines Haushalts',
  text:'Ein vereinfachter Warenkorb enthält vier Güter. Die Mengen bleiben gleich, nur die Preise ändern sich. Berechne die Ausgaben für den Warenkorb im Basisjahr und im Berichtsjahr, den Preisindex und die Inflationsrate.',
  spalten:['Brot (Laib)', 'Milch (Liter)', 'Strom (kWh)', 'Kinokarte'],
  zeilen:[{id:'m', t:'Menge im Jahr', e:''}, {id:'p0', t:'Preis Basisjahr', e:'€'}, {id:'p1', t:'Preis Berichtsjahr', e:'€'},
    {id:'a0', t:'Ausgaben Basisjahr = Menge × Preis', kurz:'Ausgaben Basisjahr', e:'€', f:'m * p0'},
    {id:'a1', t:'Ausgaben Berichtsjahr = Menge × Preis', kurz:'Ausgaben Berichtsjahr', e:'€', f:'m * p1'}],
  werte:[{m:60, p0:3, p1:3.15}, {m:120, p0:1, p1:1.08}, {m:2000, p0:0.3, p1:0.32}, {m:10, p0:10, p1:10.5}],
  sets:[[{m:60, p0:3, p1:3.03}, {m:120, p0:1, p1:1.01}, {m:2000, p0:0.3, p1:0.3}, {m:10, p0:10, p1:10.3}],
    [{m:60, p0:3, p1:3.12}, {m:120, p0:1, p1:1.05}, {m:2000, p0:0.3, p1:0.3}, {m:10, p0:10, p1:11.5}],
    [{m:60, p0:3, p1:3.03}, {m:120, p0:1, p1:0.99}, {m:2000, p0:0.3, p1:0.29}, {m:10, p0:10, p1:10.1}]],
  felder:[{id:'s0', t:'Ausgaben für den Warenkorb im Basisjahr (€)', kurz:'Warenkorb Basisjahr', f:'a0@0 + a0@1 + a0@2 + a0@3', e:'€'},
    {id:'s1', t:'Ausgaben für den Warenkorb im Berichtsjahr (€)', kurz:'Warenkorb Berichtsjahr', f:'a1@0 + a1@1 + a1@2 + a1@3', e:'€'},
    {id:'pi', t:'Preisindex = Warenkorb Berichtsjahr ÷ Warenkorb Basisjahr × 100', kurz:'Preisindex', f:'(a1@0 + a1@1 + a1@2 + a1@3) / (a0@0 + a0@1 + a0@2 + a0@3) * 100', e:''},
    {id:'ir', t:'Inflationsrate (%)', kurz:'Inflationsrate', f:'((a1@0 + a1@1 + a1@2 + a1@3) - (a0@0 + a0@1 + a0@2 + a0@3)) / (a0@0 + a0@1 + a0@2 + a0@3) * 100', e:'%'}],
  wahl:[{id:'w', t:'Gemessen am Ziel der EZB (Inflationsrate von 2 % auf mittlere Sicht) liegt die Inflationsrate …', opts:['zwischen 0 und 2 % – das gilt als Preisniveaustabilität.', 'über 2 % – das Ziel ist verfehlt, es herrscht Inflation.', 'unter 0 % – die Preise sinken (Deflation); auch das verfehlt das Ziel.'],
    r:'(a1@0 + a1@1 + a1@2 + a1@3) < (a0@0 + a0@1 + a0@2 + a0@3) ? 2 : ((a1@0 + a1@1 + a1@2 + a1@3) > (a0@0 + a0@1 + a0@2 + a0@3) * 1.02 ? 1 : 0)'}],
  hinweise:['Ausgaben je Gut = Menge × Preis – für beide Jahre.', 'Preisindex = Ausgaben Berichtsjahr ÷ Ausgaben Basisjahr × 100.', 'Inflationsrate = Preisindex − 100 (bezogen auf das Basisjahr).'],
  merke:'Der Warenkorb hält die Mengen fest und misst nur die Preisänderung. Inflationsrate = (Warenkorb neu − Warenkorb alt) ÷ Warenkorb alt × 100.'}),
(() => { const r = k => `(vpi@${k} - vpi@${k - 1}) / vpi@${k - 1}`;
  const max = `${r(2)} >= ${r(1)} && ${r(2)} >= ${r(3)} && ${r(2)} >= ${r(4)} ? 1 : (${r(3)} >= ${r(1)} && ${r(3)} >= ${r(4)} ? 2 : (${r(4)} >= ${r(1)} ? 3 : 0))`;
  return blBau('rechnung', {id:'PN2', modul:'PN', stufe:1, titel:'Inflationsraten aus dem Verbraucherpreisindex', tags:['Volkswirtschaft', 'Preisniveaustabilität', 'Verbraucherpreisindex'], kopf:'Verbraucherpreisindex',
  text:'Das Statistische Amt eines Landes veröffentlicht den Verbraucherpreisindex (Jahr 1 = 100). Berechne die Inflationsraten der Jahre 2 bis 5 und die Preissteigerung über den gesamten Zeitraum.',
  spalten:['Jahr 1', 'Jahr 2', 'Jahr 3', 'Jahr 4', 'Jahr 5'],
  zeilen:[{id:'vpi', t:'Verbraucherpreisindex (Jahr 1 = 100)', e:''}],
  werte:[{vpi:100}, {vpi:103.1}, {vpi:110.2}, {vpi:116.7}, {vpi:119.3}],
  sets:[[{vpi:100}, {vpi:101.4}, {vpi:102.9}, {vpi:106.8}, {vpi:108.5}], [{vpi:100}, {vpi:102.2}, {vpi:103.6}, {vpi:105.1}, {vpi:110.4}], [{vpi:100}, {vpi:104.5}, {vpi:106.3}, {vpi:107.4}, {vpi:108.9}]],
  felder:[2, 3, 4, 5].map(j => ({id:'i' + j, t:`Inflationsrate Jahr ${j} (%)`, kurz:`Jahr ${j}`, f:`(vpi@${j - 1} - vpi@${j - 2}) / vpi@${j - 2} * 100`, e:'%'}))
    .concat([{id:'ig', t:'Preissteigerung von Jahr 1 bis Jahr 5 insgesamt (%)', kurz:'Insgesamt', f:'(vpi@4 - vpi@0) / vpi@0 * 100', e:'%'}]),
  wahl:[{id:'w', t:'Die höchste Inflationsrate gab es in …', opts:['Jahr 2', 'Jahr 3', 'Jahr 4', 'Jahr 5'], r:max}],
  hinweise:['Inflationsrate = (Index neues Jahr − Index Vorjahr) ÷ Index Vorjahr × 100.', 'Achtung: Die Differenz der Indexwerte (Prozentpunkte) ist nicht die Inflationsrate – außer im Jahr nach dem Basisjahr.', 'Die Gesamtsteigerung bezieht sich auf Jahr 1 (= 100).'],
  merke:'Inflationsrate = Veränderung des Verbraucherpreisindex gegenüber dem Vorjahr in Prozent. Indexpunkte und Prozent sind nur im Jahr nach dem Basisjahr gleich.'}); })(),
blBau('rechnung', {id:'PN3', modul:'PN', stufe:2, titel:'Reallohn und Kaufkraft', tags:['Volkswirtschaft', 'Preisniveaustabilität', 'Reallohn'], kopf:'Lohn und Preise',
  text:'Eine Industriekauffrau erhält eine Tariferhöhung. Prüfe mit dem Verbraucherpreisindex (Basisjahr = 100), ob sie sich davon tatsächlich mehr leisten kann.',
  spalten:['Vorjahr', 'Berichtsjahr'],
  zeilen:[{id:'nl', t:'Bruttomonatslohn (nominal)', e:'€'}, {id:'vpi', t:'Verbraucherpreisindex (Basisjahr = 100)', e:''},
    {id:'rl', t:'Reallohn = Nominallohn ÷ Verbraucherpreisindex × 100', kurz:'Reallohn', e:'€', f:'nl / vpi * 100'},
    {id:'kk', t:'Kaufkraft von 1 € (in Preisen des Basisjahres) = 100 ÷ Verbraucherpreisindex', kurz:'Kaufkraft von 1 €', e:'€', f:'100 / vpi'}],
  werte:[{nl:3200, vpi:110.2}, {nl:3360, vpi:116.7}], sets:[[{nl:3000, vpi:103.1}, {nl:3150, vpi:105}], [{nl:3500, vpi:116.7}, {nl:3570, vpi:119.3}], [{nl:2800, vpi:119.3}, {nl:3000, vpi:121.9}]],
  felder:[{id:'wn', t:'Nominale Lohnerhöhung (%)', kurz:'Nominale Lohnerhöhung', f:'(nl@1 - nl@0) / nl@0 * 100', e:'%'}, {id:'ir', t:'Inflationsrate (%)', kurz:'Inflationsrate', f:'(vpi@1 - vpi@0) / vpi@0 * 100', e:'%'},
    {id:'wr', t:'Veränderung des Reallohns ≈ Lohnerhöhung − Inflationsrate (%)', kurz:'Veränderung Reallohn (Faustregel)', f:'runde((nl@1 - nl@0) / nl@0 * 100) - runde((vpi@1 - vpi@0) / vpi@0 * 100)', e:'%',
      weg:(V, F) => `${blP(F.wn)} − ${blP(F.ir)} = ${blB(blP(F.wr))} (genau: (1 + ${blP(F.wn)}) ÷ (1 + ${blP(F.ir)}) − 1 = ${blP(blR(((1 + F.wn / 100) / (1 + F.ir / 100) - 1) * 100))})`}],
  wahl:[{id:'w', t:'Die Industriekauffrau kann sich im Berichtsjahr …', opts:['mehr leisten – der Reallohn ist gestiegen.', 'weniger leisten – die Preise sind stärker gestiegen als ihr Lohn.'], r:'nl@1 / vpi@1 > nl@0 / vpi@0 ? 0 : 1'}],
  hinweise:['Der Reallohn rechnet die Preissteigerung aus dem Nominallohn heraus.', 'Veränderung des Reallohns: Lohnerhöhung minus Inflationsrate (Faustregel).', 'Kaufkraft: Was ist 1 € heute in Preisen des Basisjahres wert?'],
  merke:'Reallohn = Nominallohn ÷ Preisindex × 100. Veränderung des Reallohns ≈ Lohnerhöhung − Inflationsrate (genau: (1 + Lohnerhöhung) ÷ (1 + Inflationsrate) − 1 – das weicht nur wenig ab). Steigen die Preise stärker als die Löhne, sinkt der Reallohn.'}),
{
  id:'PN4', modul:'PN', typ:'berechnung', mehrfach:true, stufe:2, titel:'Ursachen und Folgen der Inflation',
  tags:['Volkswirtschaft','Preisniveaustabilität','Inflation','Theorie'],
  text:'In einem Jahr steigen die Verbraucherpreise um 7 %.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Steigen die Energie- und Rohstoffpreise, erhöhen Unternehmen ihre Preise – kosteninduzierte (angebotsbedingte) Inflation.', richtig:true, weg:'Höhere Kosten werden über die Preise weitergegeben.'},
    {text:'Ist die Nachfrage größer als das Angebot (z. B. durch hohe Staatsausgaben), steigen die Preise – nachfrageinduzierte Inflation.', richtig:true, weg:'Zu viel Nachfrage trifft auf zu wenig Güter.'},
    {text:'Sparer mit niedrig verzinsten Guthaben verlieren, Schuldner mit festen Zinsen gewinnen.', richtig:true, weg:'Die Schulden werden real weniger wert – die Ersparnisse auch.'},
    {text:'Bei hoher Inflation flüchten viele in Sachwerte wie Immobilien oder Gold.', richtig:true, weg:'Sachwerte behalten eher ihren Wert als Geld.'},
    {text:'Inflation trifft alle Haushalte gleich stark, weil der Warenkorb für alle gilt.', fehler:'Wer viel für Energie und Lebensmittel ausgibt (oft Haushalte mit kleinem Einkommen), spürt Preissteigerungen dort stärker – die „gefühlte“ Inflation ist unterschiedlich.'}
  ],
  hinweise:['Woher kann der Preisdruck kommen – von den Kosten oder von der Nachfrage?', 'Wer verliert, wenn Geld an Wert verliert, wer gewinnt?'],
  merke:'Ursachen: Nachfrageüberhang (nachfrageinduziert), steigende Kosten (kosteninduziert), zu starkes Geldmengenwachstum. Folgen: Kaufkraftverlust, Sparer verlieren, Schuldner gewinnen, Flucht in Sachwerte.'
},
{
  id:'PN5', modul:'PN', typ:'berechnung', mehrfach:true, stufe:2, titel:'Verbraucherpreisindex und Deflation',
  tags:['Volkswirtschaft','Preisniveaustabilität','Verbraucherpreisindex','Theorie'],
  text:'Das Statistische Bundesamt misst die Preisentwicklung mit dem Verbraucherpreisindex (VPI). Die Europäische Zentralbank (EZB) ist für die Preisniveaustabilität im Euroraum zuständig.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der VPI beruht auf einem Warenkorb mit rund 650 Güterarten; ihr Gewicht richtet sich nach den Ausgaben der Haushalte (Wägungsschema).', richtig:true, weg:'Mieten und Energie haben z. B. ein großes Gewicht.'},
    {text:'Der Warenkorb wird regelmäßig an veränderte Verbrauchsgewohnheiten angepasst.', richtig:true, weg:'Neue Güter (z. B. Streamingdienste) kommen hinzu, andere fallen weg.'},
    {text:'Die EZB strebt mittelfristig eine Inflationsrate von 2 % an – also nicht 0 %.', richtig:true, weg:'Ein kleiner Puffer schützt vor Deflation.'},
    {text:'Eine Deflation ist gefährlich: Verbraucher warten auf weiter sinkende Preise, Unternehmen verkaufen weniger und investieren weniger.', richtig:true, weg:'Es droht eine Abwärtsspirale aus Nachfrage, Produktion und Beschäftigung.'},
    {text:'Sinkende Preise sind für die Volkswirtschaft immer gut, weil die Kaufkraft steigt.', fehler:'Dauerhaft sinkende Preise (Deflation) bremsen Nachfrage und Investitionen.'}
  ],
  hinweise:['Wie wird der Warenkorb gewichtet?', 'Warum strebt die EZB nicht 0 % an?'],
  merke:'VPI: Warenkorb mit Wägungsschema, regelmäßig angepasst. EZB-Ziel: 2 % mittelfristig. Deflation (sinkendes Preisniveau) ist ebenso unerwünscht wie hohe Inflation.'
},

/* ---------- Modul 9 · Hoher Beschäftigungsstand ---------- */
blBau('rechnung', {id:'BE1', modul:'BE', stufe:1, titel:'Arbeitslosenquote berechnen', tags:['Volkswirtschaft', 'Beschäftigung', 'Arbeitslosenquote'], kopf:'Arbeitsmarkt',
  text:'Die Statistik weist für zwei Jahre die Zahl der Erwerbstätigen und der registrierten Arbeitslosen aus. Berechne die Erwerbspersonen und die Arbeitslosenquote.',
  spalten:['Vorjahr', 'Berichtsjahr'],
  zeilen:[{id:'et', t:'Erwerbstätige', e:'Mio.'}, {id:'al', t:'Registrierte Arbeitslose', e:'Mio.'},
    {id:'ep', t:'Erwerbspersonen = Erwerbstätige + Arbeitslose', kurz:'Erwerbspersonen', e:'Mio.', f:'et + al'},
    {id:'alq', t:'Arbeitslosenquote = Arbeitslose ÷ Erwerbspersonen × 100', kurz:'Arbeitslosenquote', e:'%', f:'al / ep * 100'}],
  werte:[{et:43.2, al:2.61}, {et:43, al:2.95}], sets:[[{et:42.6, al:2.84}, {et:42.9, al:2.62}], [{et:44.1, al:2.4}, {et:44.3, al:2.52}], [{et:41.8, al:3.1}, {et:42.2, al:2.85}]],
  felder:[{id:'va', t:'Veränderung der Zahl der Arbeitslosen (%)', kurz:'Veränderung der Arbeitslosen', f:'(al@1 - al@0) / al@0 * 100', e:'%'}],
  wahl:[{id:'w', t:'Mit Blick auf das Ziel „hoher Beschäftigungsstand“ hat sich die Lage …', opts:['verbessert – die Arbeitslosenquote ist gesunken.', 'verschlechtert – die Arbeitslosenquote ist gestiegen.'], r:'al@1 / (et@1 + al@1) < al@0 / (et@0 + al@0) ? 0 : 1'}],
  hinweise:['Erwerbspersonen = alle, die arbeiten oder Arbeit suchen.', 'Arbeitslosenquote = Arbeitslose ÷ Erwerbspersonen × 100 – nicht ÷ Erwerbstätige.', 'Veränderung in % = (neu − alt) ÷ alt × 100.'],
  merke:'Arbeitslosenquote = registrierte Arbeitslose ÷ Erwerbspersonen (Erwerbstätige + Arbeitslose) × 100. Die Bundesagentur für Arbeit veröffentlicht sie monatlich.'}),
blBau('rechnung', {id:'BE2', modul:'BE', stufe:2, titel:'Von der Quote zur Zahl der Arbeitslosen', tags:['Volkswirtschaft', 'Beschäftigung', 'Arbeitslosenquote'], kopf:'Arbeitsmarkt',
  text:'In einem Land gibt es {ep} Erwerbspersonen, die Arbeitslosenquote beträgt {alq}. Im Folgejahr sinkt die Zahl der Arbeitslosen um {rg}, die Zahl der Erwerbspersonen bleibt gleich.',
  zeilen:[{id:'ep', t:'Erwerbspersonen', e:'Mio.'}, {id:'alq', t:'Arbeitslosenquote', e:'%'}, {id:'rg', t:'Rückgang der Arbeitslosen im Folgejahr', e:'Mio.'},
    {id:'al', t:'Arbeitslose = Erwerbspersonen × Arbeitslosenquote ÷ 100', kurz:'Arbeitslose', e:'Mio.', f:'ep * alq / 100'},
    {id:'et', t:'Erwerbstätige = Erwerbspersonen − Arbeitslose', kurz:'Erwerbstätige', e:'Mio.', f:'ep - al'},
    {id:'al2', t:'Arbeitslose im Folgejahr', kurz:'Arbeitslose im Folgejahr', e:'Mio.', f:'al - rg'},
    {id:'alq2', t:'Arbeitslosenquote im Folgejahr', kurz:'Arbeitslosenquote im Folgejahr', e:'%', f:'al2 / ep * 100'}],
  werte:[{ep:46, alq:6, rg:0.18}], sets:[[{ep:45.5, alq:5.8, rg:0.12}], [{ep:46.4, alq:6.4, rg:0.25}], [{ep:44, alq:7.5, rg:0.33}]],
  hinweise:['Stelle die Formel der Arbeitslosenquote nach den Arbeitslosen um.', 'Die Erwerbspersonen bleiben gleich – nur die Arbeitslosen ändern sich.'],
  merke:'Arbeitslose = Erwerbspersonen × Arbeitslosenquote ÷ 100. Schon wenige Zehntelprozentpunkte entsprechen Zehntausenden von Menschen.'}),
blBau('rechnung', {id:'BE3', modul:'BE', stufe:2, titel:'Erwerbsquote und Arbeitslosenquote im Vergleich', tags:['Volkswirtschaft', 'Beschäftigung', 'Erwerbsquote'], kopf:'Arbeitsmarkt (Altersgruppe 15 bis unter 65 Jahre)',
  text:'Zwei Länder sollen verglichen werden. Berechne für beide Erwerbspersonen, Erwerbsquote und Arbeitslosenquote.',
  spalten:['Land A', 'Land B'],
  zeilen:[{id:'bev', t:'Bevölkerung von 15 bis unter 65 Jahren', e:'Mio.'}, {id:'et', t:'Erwerbstätige', e:'Mio.'}, {id:'al', t:'Arbeitslose', e:'Mio.'},
    {id:'ep', t:'Erwerbspersonen = Erwerbstätige + Arbeitslose', kurz:'Erwerbspersonen', e:'Mio.', f:'et + al'},
    {id:'eq', t:'Erwerbsquote = Erwerbspersonen ÷ Bevölkerung × 100', kurz:'Erwerbsquote', e:'%', f:'ep / bev * 100'},
    {id:'alq', t:'Arbeitslosenquote = Arbeitslose ÷ Erwerbspersonen × 100', kurz:'Arbeitslosenquote', e:'%', f:'al / ep * 100'}],
  werte:[{bev:52, et:40.3, al:1.6}, {bev:30, et:20.6, al:2.1}], sets:[[{bev:48, et:37.2, al:1.9}, {bev:12, et:8.8, al:0.45}], [{bev:25, et:17.5, al:1.8}, {bev:40, et:31.4, al:1.3}], [{bev:6, et:4.6, al:0.42}, {bev:45, et:33.9, al:1.4}]],
  wahl:[{id:'w', t:'Dem Ziel „hoher Beschäftigungsstand“ ist näher …', opts:['Land A', 'Land B'], r:'al@0 / (et@0 + al@0) < al@1 / (et@1 + al@1) ? 0 : 1'}],
  hinweise:['Die Erwerbsquote zeigt, wie viele Menschen im erwerbsfähigen Alter überhaupt arbeiten oder Arbeit suchen.', 'Für den Vergleich zählt die Quote, nicht die absolute Zahl der Arbeitslosen.'],
  merke:'Erwerbsquote = Erwerbspersonen ÷ Bevölkerung im erwerbsfähigen Alter × 100. Länder vergleicht man über Quoten, nicht über absolute Zahlen.'}),
{
  id:'BE4', modul:'BE', typ:'berechnung', mehrfach:true, stufe:2, titel:'Arten der Arbeitslosigkeit',
  tags:['Volkswirtschaft','Beschäftigung','Arbeitslosigkeit','Theorie'],
  text:'Arbeitslosigkeit hat unterschiedliche Ursachen. Man unterscheidet friktionelle, saisonale, konjunkturelle und strukturelle Arbeitslosigkeit.',
  frage:'Welche Zuordnungen treffen zu?',
  optionen:[
    {text:'Eine Kauffrau kündigt und beginnt ihre neue Stelle erst nach sechs Wochen – friktionelle Arbeitslosigkeit.', richtig:true, weg:'Kurzzeitig beim Wechsel des Arbeitsplatzes (Such- oder Fluktuationsarbeitslosigkeit).'},
    {text:'Ein Maurer findet im Januar wegen Frost keine Arbeit – saisonale Arbeitslosigkeit.', richtig:true, weg:'Abhängig von der Jahreszeit (Bau, Landwirtschaft, Tourismus).'},
    {text:'In einer Rezession entlassen viele Unternehmen Mitarbeiter, weil die Nachfrage fehlt – konjunkturelle Arbeitslosigkeit.', richtig:true, weg:'Sie geht im nächsten Aufschwung meist wieder zurück.'},
    {text:'Durch Automatisierung werden Kassiererinnen kaum noch gebraucht, ihre Qualifikation passt nicht zu den offenen Stellen – strukturelle Arbeitslosigkeit.', richtig:true, weg:'Ursache ist ein dauerhafter Wandel der Wirtschaft; sie ist am schwersten abzubauen.'},
    {text:'Strukturelle Arbeitslosigkeit verschwindet von selbst im nächsten Aufschwung.', fehler:'Das gilt eher für die konjunkturelle. Strukturelle Arbeitslosigkeit braucht Umschulung, Weiterbildung oder Mobilität.'}
  ],
  hinweise:['Ist die Ursache kurzfristig, jahreszeitlich, die schwache Gesamtnachfrage oder ein dauerhafter Wandel?'],
  merke:'Friktionell: beim Stellenwechsel · saisonal: Jahreszeit · konjunkturell: schwache Gesamtnachfrage · strukturell: dauerhafter Wandel (Technik, Branchen, Regionen, Qualifikation).'
},
{
  id:'BE5', modul:'BE', typ:'berechnung', mehrfach:true, stufe:2, titel:'Folgen der Arbeitslosigkeit und Maßnahmen',
  tags:['Volkswirtschaft','Beschäftigung','Arbeitslosigkeit','Theorie'],
  text:'Die Arbeitslosenquote eines Landes steigt seit zwei Jahren.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der Staat nimmt weniger Steuern und Sozialbeiträge ein und muss mehr Arbeitslosengeld und Bürgergeld zahlen.', richtig:true, weg:'Arbeitslosigkeit belastet die öffentlichen Haushalte doppelt.'},
    {text:'Für die Betroffenen drohen Einkommensverlust, Verlust von Qualifikation und soziale Ausgrenzung.', richtig:true, weg:'Langzeitarbeitslosigkeit erschwert den Wiedereinstieg.'},
    {text:'Weiterbildung und Umschulung helfen vor allem gegen strukturelle Arbeitslosigkeit.', richtig:true, weg:'Die Qualifikation wird an die offenen Stellen angepasst.'},
    {text:'Kurzarbeitergeld kann in einer Rezession Entlassungen vermeiden.', richtig:true, weg:'Die Betriebe halten ihre Fachkräfte und reduzieren nur die Arbeitszeit.'},
    {text:'Steigende Arbeitslosigkeit erhöht die gesamtwirtschaftliche Nachfrage, weil die Menschen mehr Zeit zum Einkaufen haben.', fehler:'Mit dem Einkommen sinkt die Kaufkraft – die Nachfrage geht zurück.'}
  ],
  hinweise:['Denke an die Betroffenen, den Staat und die Unternehmen.', 'Welche Maßnahme passt zu welcher Art der Arbeitslosigkeit?'],
  merke:'Folgen: Einkommensverlust, weniger Nachfrage, weniger Steuern und Beiträge, mehr Sozialausgaben. Maßnahmen: Weiterbildung, Kurzarbeit, Förderung von Investitionen, Vermittlung.'
},

/* ---------- Modul 10 · Wirtschaftswachstum ---------- */
(() => { const g = k => `(bn@${k} / pi@${k} - bn@${k - 1} / pi@${k - 1})`;
  return blBau('rechnung', {id:'WW1', modul:'WW', stufe:2, titel:'Reales BIP über mehrere Jahre', tags:['Volkswirtschaft', 'Wirtschaftswachstum', 'Reales BIP'], kopf:'BIP (Mrd. €)',
  text:'Für vier Jahre liegen das nominale BIP und der Preisindex des BIP (Jahr 1 = 100) vor. Berechne das reale BIP und die realen Wachstumsraten.',
  spalten:['Jahr 1', 'Jahr 2', 'Jahr 3', 'Jahr 4'],
  zeilen:[{id:'bn', t:'Nominales BIP', e:'Mrd. €'}, {id:'pi', t:'Preisindex (Jahr 1 = 100)', e:''},
    {id:'br', t:'Reales BIP = nominales BIP ÷ Preisindex × 100', kurz:'Reales BIP', e:'Mrd. €', f:'bn / pi * 100'}],
  werte:[{bn:3800, pi:100}, {bn:3950, pi:103}, {bn:4020, pi:108}, {bn:4200, pi:110}],
  sets:[[{bn:4000, pi:100}, {bn:4080, pi:101}, {bn:4150, pi:102.5}, {bn:4180, pi:105}], [{bn:3600, pi:100}, {bn:3600, pi:102}, {bn:3780, pi:103}, {bn:3900, pi:105}]],
  felder:[2, 3, 4].map(j => ({id:'w' + j, t:`Reales Wachstum Jahr ${j} (%)`, kurz:`Jahr ${j}`, f:`(br@${j - 1} - br@${j - 2}) / br@${j - 2} * 100`, e:'%'})),
  wahl:[{id:'w', t:'Real geschrumpft ist die Wirtschaft in …', opts:['Jahr 2', 'Jahr 3', 'Jahr 4'], r:`${g(1)} < 0 ? 0 : (${g(2)} < 0 ? 1 : 2)`}],
  hinweise:['Reales BIP: Preissteigerung herausrechnen – nominales BIP ÷ Preisindex × 100.', 'Wachstum = (reales BIP neu − reales BIP alt) ÷ reales BIP alt × 100.', 'Das nominale BIP steigt in jedem Jahr – trotzdem kann die Wirtschaft real schrumpfen.'],
  merke:'Für das Ziel „stetiges und angemessenes Wachstum“ zählt das reale BIP. Sinkt es, spricht man von einer Rezession (technisch: zwei Quartale in Folge).'}); })(),
blBau('rechnung', {id:'WW2', modul:'WW', stufe:2, titel:'Reales Wachstum in Preisen des Vorjahres', tags:['Volkswirtschaft', 'Wirtschaftswachstum', 'Reales BIP'], kopf:'BIP (Mrd. €)',
  text:'Das nominale BIP eines Landes stieg von {bnv} auf {bnb}. Die Preise der im Inland hergestellten Güter stiegen um {pa}. Berechne das reale BIP des Berichtsjahres in Preisen des Vorjahres sowie das nominale und das reale Wachstum.',
  zeilen:[{id:'bnv', t:'Nominales BIP Vorjahr', e:'Mrd. €'}, {id:'bnb', t:'Nominales BIP Berichtsjahr', e:'Mrd. €'}, {id:'pa', t:'Preisanstieg', e:'%'},
    {id:'brb', t:'Reales BIP Berichtsjahr = nominales BIP ÷ (1 + Preisanstieg ÷ 100)', kurz:'Reales BIP Berichtsjahr', e:'Mrd. €', f:'bnb / (1 + pa / 100)'},
    {id:'wn', t:'Nominales Wachstum', kurz:'Nominales Wachstum', e:'%', f:'(bnb - bnv) / bnv * 100'},
    {id:'wr', t:'Reales Wachstum = (reales BIP Berichtsjahr − BIP Vorjahr) ÷ BIP Vorjahr × 100', kurz:'Reales Wachstum', e:'%', f:'(brb - bnv) / bnv * 100'}],
  werte:[{bnv:4185, bnb:4400, pa:3.5}], sets:[[{bnv:4000, bnb:4120, pa:2}], [{bnv:4300, bnb:4380, pa:2.5}], [{bnv:3900, bnb:4095, pa:1.5}]],
  wahl:[{id:'w', t:'Die Wirtschaft ist real …', opts:['gewachsen.', 'geschrumpft – das nominale Wachstum reicht nicht, um den Preisanstieg auszugleichen.'], r:'bnb / (1 + pa / 100) > bnv ? 0 : 1'}],
  hinweise:['Ein Preisanstieg von 3,5 % bedeutet: Faktor 1,035.', 'Das Vorjahr ist die Basis – sein BIP ist schon in Preisen des Vorjahres.', 'Faustregel: reales Wachstum ≈ nominales Wachstum − Preisanstieg.'],
  merke:'Reales BIP = nominales BIP ÷ (1 + Preisanstieg). Faustregel: reales Wachstum ≈ nominales Wachstum − Preissteigerungsrate.'}),
blBau('rechnung', {id:'WW3', modul:'WW', stufe:2, titel:'Wachstum je Einwohner', tags:['Volkswirtschaft', 'Wirtschaftswachstum', 'BIP je Einwohner'], kopf:'Reales BIP und Bevölkerung',
  text:'Das reale BIP ist gestiegen. Gleichzeitig hat sich die Zahl der Einwohner verändert. Prüfe, ob auch das BIP je Einwohner gestiegen ist.',
  spalten:['Vorjahr', 'Berichtsjahr'],
  zeilen:[{id:'br', t:'Reales BIP', e:'Mrd. €'}, {id:'ew', t:'Einwohner', e:'Mio.'},
    {id:'bk', t:'Reales BIP je Einwohner', kurz:'BIP je Einwohner', e:'€', f:'br / ew * 1000'}],
  werte:[{br:3800, ew:83.2}, {br:3830, ew:84.1}], sets:[[{br:3700, ew:82}, {br:3780, ew:82.3}], [{br:4000, ew:84}, {br:4010, ew:84.6}], [{br:3500, ew:80}, {br:3560, ew:80.2}]],
  felder:[{id:'wb', t:'Reales Wachstum des BIP (%)', kurz:'Wachstum BIP', f:'(br@1 - br@0) / br@0 * 100', e:'%'}, {id:'we', t:'Veränderung des BIP je Einwohner (%)', kurz:'Veränderung je Einwohner', f:'(br@1 / ew@1 - br@0 / ew@0) / (br@0 / ew@0) * 100', e:'%'}],
  wahl:[{id:'w', t:'Das reale BIP je Einwohner ist …', opts:['gestiegen – das Wachstum ist stärker als der Bevölkerungszuwachs.', 'gesunken – die Bevölkerung ist stärker gewachsen als das BIP.'], r:'br@1 / ew@1 > br@0 / ew@0 ? 0 : 1'}],
  hinweise:['Mrd. € ÷ Mio. Einwohner × 1.000 = € je Einwohner.', 'Vergleiche das Wachstum des BIP mit dem Wachstum der Bevölkerung.'],
  merke:'Wächst die Bevölkerung stärker als das reale BIP, sinkt das BIP je Einwohner – trotz Wachstum.'}),
{
  id:'WW4', modul:'WW', typ:'berechnung', mehrfach:true, stufe:2, titel:'Konjunkturphasen und Indikatoren',
  tags:['Volkswirtschaft','Wirtschaftswachstum','Konjunktur','Theorie'],
  text:'Das Wachstum einer Volkswirtschaft verläuft nicht gleichmäßig, sondern in Konjunkturzyklen mit den Phasen Aufschwung, Hochkonjunktur (Boom), Abschwung und Tiefstand (Rezession/Depression).',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Im Aufschwung steigen Produktion und Auftragseingänge, die Arbeitslosigkeit beginnt zu sinken.', richtig:true, weg:'Die Unternehmen investieren wieder.'},
    {text:'In der Hochkonjunktur sind die Kapazitäten ausgelastet, Preise und Löhne steigen stark.', richtig:true, weg:'Hier ist die Gefahr der Inflation am größten.'},
    {text:'Der ifo-Geschäftsklimaindex und die Auftragseingänge sind Frühindikatoren.', richtig:true, weg:'Sie zeigen die Entwicklung, bevor sie in der Produktion ankommt.'},
    {text:'Die Arbeitslosigkeit ist ein Spätindikator – sie reagiert erst mit Verzögerung.', richtig:true, weg:'Unternehmen entlassen und stellen erst ein, wenn die Entwicklung sicher ist.'},
    {text:'Von einer Rezession spricht man, sobald die Inflationsrate über 2 % steigt.', fehler:'Eine Rezession ist ein Rückgang des realen BIP – technisch: zwei Quartale in Folge.'}
  ],
  hinweise:['Was passiert in jeder Phase mit Produktion, Beschäftigung und Preisen?', 'Welche Zahlen zeigen eine Wende früh, welche spät?'],
  merke:'Konjunkturphasen: Aufschwung → Boom → Abschwung → Rezession. Frühindikatoren: Geschäftsklima, Auftragseingänge · Spätindikatoren: Arbeitslosigkeit, Preise.'
},
{
  id:'WW5', modul:'WW', typ:'berechnung', mehrfach:true, stufe:2, titel:'Stetig, angemessen – und nachhaltig?',
  tags:['Volkswirtschaft','Wirtschaftswachstum','Theorie'],
  text:'Das Stabilitätsgesetz fordert ein „stetiges und angemessenes“ Wirtschaftswachstum.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'„Stetig“ heißt: möglichst gleichmäßig, ohne starke Schwankungen zwischen Boom und Rezession.', richtig:true, weg:'Starke Ausschläge gefährden Preisniveau und Beschäftigung.'},
    {text:'„Angemessen“ heißt: so viel Wachstum, dass Beschäftigung gesichert wird, ohne die Preise oder die Umwelt zu überfordern.', richtig:true, weg:'Ein fester Wert ist nicht vorgeschrieben.'},
    {text:'Qualitatives Wachstum achtet auf Umwelt, Ressourcen und Lebensqualität, nicht nur auf die Menge der Güter.', richtig:true, weg:'Daraus ist das Ziel Umweltschutz im magischen Sechseck entstanden.'},
    {text:'Wachstum ist wichtig, weil es Arbeitsplätze schafft und die Steuereinnahmen erhöht.', richtig:true, weg:'Zielharmonie zwischen Wachstum und Beschäftigung.'},
    {text:'Je höher das Wachstum, desto besser – das Ziel heißt „möglichst hohes“ Wachstum.', fehler:'Gefordert ist angemessenes Wachstum. Zu starkes Wachstum kann Inflation und Umweltschäden verursachen.'}
  ],
  hinweise:['Was bedeuten die Wörter „stetig“ und „angemessen“?', 'Welche Nachteile kann sehr starkes Wachstum haben?'],
  merke:'Stetig = gleichmäßig · angemessen = nicht zu hoch, nicht zu niedrig. Qualitatives Wachstum berücksichtigt Umwelt und Lebensqualität.'
},

/* ---------- Modul 11 · Außenwirtschaftliches Gleichgewicht (Theorie) ---------- */
{
  id:'AG1', modul:'AG', typ:'berechnung', mehrfach:true, stufe:1, titel:'Aufbau der Zahlungsbilanz',
  tags:['Volkswirtschaft','Außenwirtschaft','Zahlungsbilanz','Theorie'],
  text:'Die Zahlungsbilanz erfasst alle wirtschaftlichen Vorgänge zwischen Inländern und dem Ausland in einem Jahr. Sie besteht aus Leistungsbilanz, Vermögensänderungsbilanz und Kapitalbilanz.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die Leistungsbilanz enthält den Warenhandel (Handelsbilanz), die Dienstleistungen, die Primäreinkommen und die Sekundäreinkommen.', richtig:true, weg:'Sie ist die wichtigste Teilbilanz für das außenwirtschaftliche Gleichgewicht.'},
    {text:'Primäreinkommen sind z. B. Löhne von Grenzpendlern, Zinsen und Dividenden aus dem Ausland.', richtig:true, weg:'Einkommen aus Arbeit und Vermögen.'},
    {text:'Sekundäreinkommen sind laufende Übertragungen ohne Gegenleistung, z. B. Überweisungen in die Heimat oder Beiträge an die EU.', richtig:true, weg:'Früher: Übertragungsbilanz.'},
    {text:'Die Kapitalbilanz zeigt Kapitalanlagen im Ausland und ausländische Anlagen im Inland, z. B. Direktinvestitionen und Wertpapierkäufe.', richtig:true, weg:'Ein Leistungsbilanzüberschuss führt zu Kapitalanlagen im Ausland.'},
    {text:'Die Handelsbilanz erfasst auch den Reiseverkehr deutscher Urlauber im Ausland.', fehler:'Reisen sind Dienstleistungen – sie stehen in der Dienstleistungsbilanz.'}
  ],
  hinweise:['Waren, Dienstleistungen, Einkommen, Übertragungen – wo steht was?', 'Wo werden Geldanlagen über die Grenze erfasst?'],
  merke:'Zahlungsbilanz = Leistungsbilanz (Handel, Dienstleistungen, Primär- und Sekundäreinkommen) + Vermögensänderungsbilanz + Kapitalbilanz.'
},
{
  id:'AG2', modul:'AG', typ:'berechnung', mehrfach:true, stufe:2, titel:'Vorgänge zuordnen',
  tags:['Volkswirtschaft','Außenwirtschaft','Zahlungsbilanz','Theorie'],
  text:'Ordne die Vorgänge aus deutscher Sicht den Teilbilanzen der Zahlungsbilanz zu.',
  frage:'Welche Zuordnungen treffen zu?',
  optionen:[
    {text:'Ein Maschinenbauer aus Baden-Württemberg liefert Anlagen nach China – Handelsbilanz (Export).', richtig:true, weg:'Warenexport.'},
    {text:'Eine Familie aus Speyer macht Urlaub in Italien – Dienstleistungsbilanz (Reiseverkehr, Ausgabe).', richtig:true, weg:'Ausgaben deutscher Reisender im Ausland sind Dienstleistungsimporte.'},
    {text:'Ein Anleger aus Deutschland erhält Dividenden von einem US-Unternehmen – Primäreinkommen (Einnahme).', richtig:true, weg:'Vermögenseinkommen aus dem Ausland.'},
    {text:'Eine in Deutschland arbeitende Pflegekraft überweist Geld an ihre Familie in Polen – Sekundäreinkommen (Ausgabe).', richtig:true, weg:'Übertragung ohne Gegenleistung.'},
    {text:'Ein deutsches Unternehmen kauft eine Fabrik in Tschechien – Handelsbilanz (Import).', fehler:'Das ist eine Direktinvestition im Ausland – sie steht in der Kapitalbilanz.'}
  ],
  hinweise:['Ware, Dienstleistung, Einkommen, Übertragung oder Kapitalanlage?'],
  merke:'Waren → Handelsbilanz · Reisen, Transport, Versicherungen → Dienstleistungen · Löhne, Zinsen, Dividenden → Primäreinkommen · Überweisungen ohne Gegenleistung → Sekundäreinkommen · Beteiligungen, Wertpapiere → Kapitalbilanz.'
},
{
  id:'AG3', modul:'AG', typ:'berechnung', mehrfach:true, stufe:2, titel:'Was heißt außenwirtschaftliches Gleichgewicht?',
  tags:['Volkswirtschaft','Außenwirtschaft','Theorie'],
  text:'Deutschland erzielt seit vielen Jahren hohe Überschüsse in der Leistungsbilanz.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Außenwirtschaftliches Gleichgewicht bedeutet einen in etwa ausgeglichenen Saldo der Leistungsbilanz bzw. des Außenbeitrags.', richtig:true, weg:'Ein leichter Überschuss gilt meist als unproblematisch.'},
    {text:'Die EU wertet einen Leistungsbilanzüberschuss von mehr als 6 % des BIP (Dreijahresdurchschnitt) als Hinweis auf ein Ungleichgewicht.', richtig:true, weg:'Für Defizite liegt die Schwelle bei −4 %.'},
    {text:'Den Überschüssen eines Landes stehen Defizite anderer Länder gegenüber, die sich dafür verschulden.', richtig:true, weg:'Das kann zu Spannungen und Handelskonflikten führen.'},
    {text:'Hohe Exportüberschüsse machen ein Land abhängig von der Nachfrage im Ausland.', richtig:true, weg:'Bricht die Weltkonjunktur ein, leidet die Exportwirtschaft besonders.'},
    {text:'Ein dauerhafter Exportüberschuss ist das Ziel des Stabilitätsgesetzes.', fehler:'Gefordert ist ein Gleichgewicht – nicht ein möglichst hoher Überschuss.'}
  ],
  hinweise:['Kann ein Land dauerhaft mehr verkaufen als kaufen, ohne dass andere sich verschulden?'],
  merke:'Ziel: ausgeglichene Leistungsbilanz. Dauerhafte Überschüsse bedeuten Abhängigkeit vom Ausland und Defizite bei den Handelspartnern; dauerhafte Defizite bedeuten Verschuldung im Ausland.'
},
{
  id:'AG4', modul:'AG', typ:'berechnung', mehrfach:true, stufe:3, titel:'Wechselkurs und Außenhandel',
  tags:['Volkswirtschaft','Außenwirtschaft','Wechselkurs','Theorie'],
  text:'Der Euro wertet gegenüber dem US-Dollar auf: Für 1 € bekommt man statt 1,05 $ jetzt 1,20 $.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Deutsche Waren werden für Käufer in den USA teurer – die Exporte in die USA gehen eher zurück.', richtig:true, weg:'Amerikaner müssen für den gleichen Euro-Preis mehr Dollar bezahlen.'},
    {text:'Importe aus den USA werden für deutsche Käufer billiger.', richtig:true, weg:'Für 1 € gibt es mehr Dollar.'},
    {text:'Weil importierte Rohstoffe (in Dollar bezahlt) billiger werden, dämpft die Aufwertung die Inflation.', richtig:true, weg:'Zielharmonie mit der Preisniveaustabilität.'},
    {text:'Der Leistungsbilanzüberschuss gegenüber den USA wird durch die Aufwertung eher kleiner.', richtig:true, weg:'Weniger Exporte, mehr Importe.'},
    {text:'Urlaub in den USA wird für Deutsche teurer.', fehler:'Mit dem stärkeren Euro bekommen deutsche Urlauber mehr Dollar – der Urlaub wird billiger.'}
  ],
  hinweise:['Wie viele Dollar muss ein Amerikaner für eine Maschine zu 100.000 € vorher und nachher zahlen?', 'Was kostet eine in Dollar bezahlte Ware nun in Euro?'],
  merke:'Aufwertung des Euro: Exporte teurer, Importe billiger → Exporte sinken, Importe steigen, importierte Inflation sinkt. Abwertung: umgekehrt.'
},
{
  id:'AG5', modul:'AG', typ:'berechnung', stufe:2, titel:'Abwertung im Fall',
  tags:['Volkswirtschaft','Außenwirtschaft','Wechselkurs','Theorie'],
  text:'Der Euro verliert gegenüber dem US-Dollar deutlich an Wert. Erdöl wird weltweit in Dollar gehandelt.',
  frage:'Welche Folge ist für Deutschland zu erwarten?',
  optionen:[
    {text:'Exporte in den Dollarraum werden gefördert, Energie wird aber teurer – die Abwertung kann die Inflation erhöhen.', richtig:true, weg:'Deutsche Waren werden im Ausland billiger; für importiertes Öl braucht man mehr Euro (importierte Inflation).'},
    {text:'Exporte gehen zurück, und Öl wird billiger.', fehler:'Das wären die Folgen einer Aufwertung.'},
    {text:'Der Wechselkurs hat keinen Einfluss auf Exporte und Preise.', fehler:'Der Wechselkurs bestimmt, was Waren im anderen Währungsraum kosten.'},
    {text:'Alle Ziele des magischen Vierecks werden gleichzeitig besser erreicht.', fehler:'Zielkonflikt: Exporte und Beschäftigung profitieren, die Preisniveaustabilität leidet.'}
  ],
  hinweise:['Was kostet ein Barrel Öl zu 80 $ in Euro, wenn der Euro schwächer wird?'],
  merke:'Abwertung: Exporte billiger (gut für Export und Beschäftigung), Importe teurer (Gefahr importierter Inflation) – ein Zielkonflikt.'
},
/* ---------- Modul · Wirtschaftsordnungen im Vergleich ---------- */
{
  id:'WO1', modul:'WO', typ:'berechnung', mehrfach:true, stufe:1, titel:'Idealtypen der Wirtschaftsordnung',
  tags:['Volkswirtschaft','Wirtschaftsordnung'],
  text:'Jede Volkswirtschaft muss klären, wer was, wie und für wen produziert. Die Antworten bestimmen die Wirtschaftsordnung.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'In der freien Marktwirtschaft planen Haushalte und Unternehmen selbst; koordiniert wird über Märkte und Preise.', richtig:true, weg:'dezentrale Planung, Privateigentum an Produktionsmitteln, Vertrags- und Gewerbefreiheit (Adam Smith: „unsichtbare Hand“)'},
    {text:'In der Zentralverwaltungswirtschaft legt eine staatliche Planungsbehörde fest, was, wie viel und zu welchen Preisen produziert wird.', richtig:true, weg:'zentrale Planung, Staats- bzw. Kollektiveigentum an Produktionsmitteln, Planerfüllung statt Gewinn'},
    {text:'In der freien Marktwirtschaft beschränkt sich der Staat darauf, Sicherheit und Recht zu garantieren („Nachtwächterstaat“).', richtig:true, weg:'Er greift nicht in das Marktgeschehen ein.'},
    {text:'Beide Ordnungen sind Idealtypen; in der Wirklichkeit gibt es Mischformen wie die Soziale Marktwirtschaft.', richtig:true, weg:'Realtypen'},
    {text:'In der Zentralverwaltungswirtschaft bilden sich die Preise durch Angebot und Nachfrage.', fehler:'Die Preise werden vom Staat festgesetzt.'}
  ],
  hinweise:['Wer plant – die Einzelnen oder der Staat? Wem gehören die Produktionsmittel?'],
  merke:'Freie Marktwirtschaft: dezentrale Planung, Privateigentum, Marktpreise, Staat nur Ordnungshüter · Zentralverwaltungswirtschaft: zentrale Planung, Staatseigentum, staatliche Preise.'
},
blBau('zuordnung', {id:'WO2', modul:'WO', stufe:1, titel:'Ordnungsmerkmale zuordnen', tags:['Volkswirtschaft', 'Wirtschaftsordnung', 'Ordnungsmerkmale'],
  text:'Zu welcher Wirtschaftsordnung passt das Merkmal am besten?', kategorien:['freie Marktwirtschaft', 'Zentralverwaltungswirtschaft', 'Soziale Marktwirtschaft'], anzahl:6,
  faelle:[
    {t:'Die Produktionsmittel gehören überwiegend dem Staat.', k:1},
    {t:'Privateigentum ist geschützt, aber „Eigentum verpflichtet“ – sein Gebrauch soll auch dem Wohl der Allgemeinheit dienen.', k:2, weg:'Art. 14 GG'},
    {t:'Der Staat greift nicht in die Lohnbildung ein; es gibt keine Sozialversicherung.', k:0},
    {t:'Ein Fünfjahresplan legt die Produktionsmengen der Betriebe fest.', k:1},
    {t:'Die Preise bilden sich grundsätzlich am Markt; der Staat schützt den Wettbewerb durch ein Kartellamt.', k:2},
    {t:'Betriebe streben die Erfüllung des Plans an, nicht den Gewinn.', k:1},
    {t:'Völlige Vertragsfreiheit – auch Absprachen zwischen Konkurrenten sind erlaubt.', k:0},
    {t:'Wer nicht arbeiten kann, wird durch Sozialversicherung und Grundsicherung abgesichert.', k:2}
  ],
  hinweise:['Ordnungsmerkmale: Eigentum, Planung, Preisbildung, Rolle des Staates.'],
  merke:'Soziale Marktwirtschaft: Markt und Wettbewerb als Grundprinzip, verbunden mit sozialem Ausgleich und einem starken Ordnungsrahmen des Staates.'}),
blBau('zuordnung', {id:'WO3', modul:'WO', stufe:2, titel:'Stärken und Schwächen', tags:['Volkswirtschaft', 'Wirtschaftsordnung', 'Beurteilung'],
  text:'Ordne die Aussage zu.', kategorien:['Vorteil der freien Marktwirtschaft', 'Nachteil der freien Marktwirtschaft', 'Vorteil der Zentralverwaltungswirtschaft', 'Nachteil der Zentralverwaltungswirtschaft'], anzahl:6,
  faelle:[
    {t:'Gewinnstreben und Wettbewerb führen zu Innovationen und effizienter Produktion.', k:0},
    {t:'Große Unterschiede bei Einkommen und Vermögen; wer nicht arbeiten kann, ist ungesichert.', k:1},
    {t:'Arbeitsplätze und Grundversorgung sind staatlich garantiert (z. B. niedrige Mieten und Grundnahrungsmittelpreise).', k:2},
    {t:'Häufig Versorgungsmängel und Warteschlangen, weil die Planung am Bedarf vorbeigeht.', k:3},
    {t:'Unternehmen können sich zu Kartellen und Monopolen zusammenschließen und den Wettbewerb ausschalten.', k:1},
    {t:'Fehlende Leistungsanreize, weil sich Mehrarbeit kaum lohnt.', k:3},
    {t:'Das Angebot richtet sich nach den Wünschen der Kunden.', k:0},
    {t:'Umweltschäden werden nicht berücksichtigt, weil sie keinen Preis haben.', k:1}
  ],
  hinweise:['Markt: effizient, aber sozial blind · Plan: sozial gemeint, aber ineffizient.'],
  merke:'Freie Marktwirtschaft: effizient und innovativ – aber soziale Härten, Machtkonzentration, Umweltschäden · Zentralverwaltungswirtschaft: Sicherheit – aber Mangelwirtschaft, geringe Anreize, Unfreiheit.'}),
{
  id:'WO4', modul:'WO', typ:'berechnung', mehrfach:true, stufe:1, titel:'Die Soziale Marktwirtschaft',
  tags:['Volkswirtschaft','Soziale Marktwirtschaft'],
  text:'In Deutschland wurde nach 1948 die Soziale Marktwirtschaft eingeführt.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Sie verbindet die Freiheit des Marktes mit sozialem Ausgleich (Alfred Müller-Armack); politisch durchgesetzt hat sie vor allem Ludwig Erhard.', richtig:true, weg:''},
    {text:'Der Staat setzt den Ordnungsrahmen: Er schützt den Wettbewerb, sichert sozial ab und greift korrigierend ein, wo der Markt versagt.', richtig:true, weg:'Ordnungs- und Prozesspolitik'},
    {text:'Das Grundgesetz schreibt den Sozialstaat vor (Art. 20 GG) und bindet das Eigentum an das Gemeinwohl (Art. 14 GG).', richtig:true, weg:'Eine bestimmte Wirtschaftsordnung schreibt es aber nicht ausdrücklich vor.'},
    {text:'Heute gehört auch der Umweltschutz zu den Aufgaben des Staates (Art. 20a GG) – man spricht von ökosozialer Marktwirtschaft.', richtig:true, weg:''},
    {text:'In der Sozialen Marktwirtschaft legt der Staat die Preise aller Güter fest, um soziale Gerechtigkeit herzustellen.', fehler:'Die Preise bilden sich grundsätzlich am Markt; der Staat greift nur in Ausnahmefällen ein.'}
  ],
  hinweise:['So viel Markt wie möglich, so viel Staat wie nötig.'],
  merke:'Soziale Marktwirtschaft: „So viel Markt wie möglich, so viel Staat wie nötig“ – Wettbewerb, soziale Sicherung, Eigentum mit Sozialbindung, Umweltschutz.'
},

/* ---------- Modul · Staatseingriffe in der Sozialen Marktwirtschaft ---------- */
blBau('zuordnung', {id:'WS1', modul:'WS', stufe:1, titel:'In welchem Bereich greift der Staat ein?', tags:['Volkswirtschaft', 'Soziale Marktwirtschaft', 'Staatseingriffe'],
  text:'Ordne die staatliche Maßnahme dem Bereich zu.', kategorien:['Einkommensverteilung', 'soziale Sicherung', 'Wettbewerb', 'Umweltschutz'], anzahl:6,
  faelle:[
    {t:'progressive Einkommensteuer: Höhere Einkommen zahlen einen höheren Steuersatz.', k:0},
    {t:'gesetzlicher Mindestlohn', k:0},
    {t:'Pflichtversicherung in der Kranken-, Renten-, Pflege- und Arbeitslosenversicherung', k:1},
    {t:'Grundsicherung für Arbeitsuchende (früher Bürgergeld) für Erwerbsfähige ohne ausreichendes Einkommen', k:1},
    {t:'Das Bundeskartellamt verhängt Bußgelder wegen Preisabsprachen.', k:2},
    {t:'Fusionskontrolle bei großen Unternehmenszusammenschlüssen', k:2},
    {t:'CO₂-Preis auf Heizöl und Benzin', k:3},
    {t:'Grenzwerte für Abgase von Industrieanlagen', k:3},
    {t:'Die Pflegeversicherung zahlt bei Pflegebedürftigkeit Pflegegeld.', k:1},
    {t:'Erbschaftsteuer auf große Vermögen', k:0}
  ],
  hinweise:['Wird Einkommen umverteilt, werden Risiken abgesichert, Märkte offen gehalten oder die Umwelt geschützt?'],
  merke:'Staatseingriffe: Einkommensverteilung (Steuern, Mindestlohn) · soziale Sicherung (Sozialversicherung, Grundsicherung) · Wettbewerb (Kartellrecht, Fusionskontrolle) · Umwelt (CO₂-Preis, Grenzwerte).'}),
{
  id:'WS2', modul:'WS', typ:'berechnung', mehrfach:true, stufe:2, titel:'Warum greift der Staat ein?',
  tags:['Volkswirtschaft','Soziale Marktwirtschaft','Marktversagen'],
  text:'In der Sozialen Marktwirtschaft soll der Markt grundsätzlich allein funktionieren. Trotzdem greift der Staat in vielen Bereichen ein.',
  frage:'Welche Begründungen treffen zu?',
  optionen:[
    {text:'Der Markt verteilt Einkommen nach Leistung und Marktmacht, nicht nach Bedürftigkeit – ohne Ausgleich entstünden große soziale Härten.', richtig:true, weg:'Umverteilung'},
    {text:'Unternehmen könnten den Wettbewerb durch Absprachen oder Zusammenschlüsse ausschalten.', richtig:true, weg:'Der Wettbewerb muss geschützt werden.'},
    {text:'Umweltschäden haben am Markt keinen Preis; ohne Staat würden sie nicht berücksichtigt (externe Effekte).', richtig:true, weg:'Marktversagen'},
    {text:'Risiken wie Krankheit, Alter und Arbeitslosigkeit kann der Einzelne oft nicht allein tragen.', richtig:true, weg:'Solidarprinzip'},
    {text:'Der Staat greift ein, weil er die Ergebnisse jedes Marktes besser planen kann als die Unternehmen.', fehler:'Das wäre die Logik der Zentralverwaltungswirtschaft.'}
  ],
  hinweise:['Wo versagt der Markt oder führt zu unerwünschten Ergebnissen?'],
  merke:'Gründe für Staatseingriffe: soziale Gerechtigkeit, Schutz des Wettbewerbs, externe Effekte (Umwelt), Absicherung großer Lebensrisiken.'
},
{
  id:'WS3', modul:'WS', typ:'berechnung', mehrfach:true, stufe:3, titel:'Grenzen der Staatseingriffe',
  tags:['Volkswirtschaft','Soziale Marktwirtschaft','Beurteilung'],
  text:'In einer Talkshow wird diskutiert, ob der Staat zu viel oder zu wenig eingreift.',
  frage:'Welche Argumente treffen zu?',
  optionen:[
    {text:'Hohe Steuern und Abgaben können die Leistungsbereitschaft und die Investitionen schwächen.', richtig:true, weg:'Anreizprobleme'},
    {text:'Sozialleistungen müssen finanziert werden – über Beiträge, Steuern oder Schulden; das belastet künftige Generationen.', richtig:true, weg:'Finanzierungsgrenzen'},
    {text:'Viele Vorschriften verursachen Bürokratie und Kosten für Unternehmen.', richtig:true, weg:''},
    {text:'Ohne soziale Absicherung könnte der Zusammenhalt der Gesellschaft gefährdet sein – auch das hat wirtschaftliche Folgen.', richtig:true, weg:'Argument für Eingriffe'},
    {text:'Je mehr der Staat eingreift, desto besser funktioniert der Markt.', fehler:'Zu viele Eingriffe können die Lenkungswirkung der Preise stören.'}
  ],
  hinweise:['Abwägen: soziale Sicherheit gegen Anreize, Kosten und Freiheit.'],
  merke:'Staatseingriffe sind eine Abwägung: Sie schaffen Sicherheit und Gerechtigkeit, kosten aber Geld, Freiheit und können Anreize schwächen.'
},

/* ---------- Modul · Kooperation und Konzentration ---------- */
{
  id:'KZ1', modul:'KZ', typ:'berechnung', mehrfach:true, stufe:1, titel:'Kooperation und Konzentration',
  tags:['Volkswirtschaft','Unternehmenszusammenschlüsse'],
  text:'Unternehmen schließen sich zusammen, um ihre Wettbewerbsposition zu stärken.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Bei der Kooperation arbeiten Unternehmen in Teilbereichen zusammen, bleiben aber rechtlich und weitgehend wirtschaftlich selbstständig (z. B. Arbeitsgemeinschaft, Joint Venture).', richtig:true, weg:''},
    {text:'Bei der Konzentration verlieren Unternehmen ihre wirtschaftliche Selbstständigkeit: im Konzern unter einheitlicher Leitung, bei der Fusion auch die rechtliche.', richtig:true, weg:''},
    {text:'Ziele von Zusammenschlüssen sind z. B. Kostensenkung durch größere Mengen, Sicherung von Beschaffung und Absatz, Risikostreuung und mehr Marktmacht.', richtig:true, weg:''},
    {text:'Ein Kartell ist eine Absprache rechtlich selbstständiger Unternehmen, um den Wettbewerb zu beschränken, z. B. über Preise; es ist grundsätzlich verboten.', richtig:true, weg:'§ 1 GWB, Art. 101 AEUV'},
    {text:'Bei einer Fusion bleiben beide Unternehmen rechtlich selbstständig.', fehler:'Bei der Fusion verschmelzen die Unternehmen zu einer rechtlichen Einheit.'}
  ],
  hinweise:['Wie viel Selbstständigkeit bleibt erhalten?'],
  merke:'Kooperation: Selbstständigkeit bleibt (ARGE, Joint Venture, Kartell) · Konzentration: wirtschaftliche Selbstständigkeit geht verloren (Konzern), bei der Fusion auch die rechtliche.'
},
blBau('zuordnung', {id:'KZ2', modul:'KZ', stufe:1, titel:'Horizontal, vertikal oder lateral?', tags:['Volkswirtschaft', 'Unternehmenszusammenschlüsse', 'Stufen'],
  text:'Auf welcher Ebene schließen sich die Unternehmen zusammen?', kategorien:['horizontal', 'vertikal', 'lateral (anorganisch, Konglomerat)'], anzahl:6,
  faelle:[
    {t:'Zwei Brauereien fusionieren.', k:0}, {t:'Ein Autohersteller übernimmt einen Zulieferer für Autositze.', k:1, weg:'vorgelagerte Stufe'},
    {t:'Ein Lebensmittelkonzern kauft eine Versicherung.', k:2}, {t:'Zwei Supermarktketten schließen sich zusammen.', k:0},
    {t:'Ein Stahlwerk übernimmt ein Erzbergwerk.', k:1}, {t:'Ein Kartonhersteller kauft eine Hotelkette.', k:2},
    {t:'Eine Molkerei übernimmt eine Kette von Käsefachgeschäften.', k:1, weg:'nachgelagerte Stufe'}, {t:'Zwei Fluggesellschaften fusionieren.', k:0}
  ],
  hinweise:['Gleiche Produktionsstufe? Vor- oder nachgelagerte Stufe? Kein Zusammenhang?'],
  merke:'Horizontal: gleiche Stufe (mehr Marktmacht) · vertikal: vor- oder nachgelagerte Stufe (Sicherung von Beschaffung/Absatz) · lateral: verschiedene Branchen (Risikostreuung).'}),
blBau('zuordnung', {id:'KZ3', modul:'KZ', stufe:2, titel:'Welche Form des Zusammenschlusses?', tags:['Volkswirtschaft', 'Unternehmenszusammenschlüsse', 'Formen'],
  text:'Welche Form des Zusammenschlusses liegt vor?', kategorien:['Arbeitsgemeinschaft', 'Joint Venture', 'Kartell', 'Konzern', 'Fusion'], anzahl:5,
  faelle:[
    {t:'Drei Bauunternehmen bauen gemeinsam eine Autobahnbrücke und trennen sich nach Fertigstellung wieder.', k:0},
    {t:'Zwei Chemieunternehmen gründen eine gemeinsame Tochtergesellschaft für Batterieforschung.', k:1},
    {t:'Vier Zementhersteller sprechen ihre Preise und Absatzgebiete ab.', k:2},
    {t:'Eine Holding hält die Mehrheit an mehreren rechtlich selbstständigen Gesellschaften und leitet sie einheitlich.', k:3},
    {t:'Zwei Banken verschmelzen zu einer neuen Bank; die alten Firmen erlöschen.', k:4},
    {t:'Die Rheinpfalz AG verschmilzt einen Konkurrenten auf sich; dessen Gesellschaft erlischt, er wird als Abteilung weitergeführt.', k:4, weg:'Fusion durch Aufnahme'}
  ],
  hinweise:['Wie eng ist die Bindung – befristet, gemeinsame Tochter, Absprache, einheitliche Leitung oder Verschmelzung?'],
  merke:'Arbeitsgemeinschaft (befristetes Projekt) · Joint Venture (gemeinsame Tochter) · Kartell (Absprache) · Konzern (einheitliche Leitung) · Fusion (Verschmelzung).'}),
blBau('zuordnung', {id:'KZ4', modul:'KZ', stufe:2, titel:'Vor- und Nachteile von Zusammenschlüssen', tags:['Volkswirtschaft', 'Unternehmenszusammenschlüsse', 'Beurteilung'],
  text:'Ist die Aussage eher ein Vorteil oder ein Nachteil von Unternehmenszusammenschlüssen – aus Sicht der Verbraucher bzw. der Gesamtwirtschaft?', kategorien:['Vorteil', 'Nachteil'], anzahl:6,
  faelle:[
    {t:'Größere Stückzahlen senken die Kosten, das kann zu niedrigeren Preisen führen.', k:0},
    {t:'Weniger Wettbewerber können höhere Preise durchsetzen.', k:1},
    {t:'Gemeinsame Forschung ermöglicht Innovationen, die ein Einzelner nicht finanzieren könnte.', k:0},
    {t:'Die Auswahl für die Kunden sinkt.', k:1},
    {t:'Große Unternehmen gewinnen politischen Einfluss.', k:1},
    {t:'Arbeitsplätze werden durch Zusammenlegung von Abteilungen abgebaut.', k:1},
    {t:'Größere Unternehmen sind im internationalen Wettbewerb stärker.', k:0},
    {t:'Kleine und mittlere Unternehmen werden vom Markt verdrängt.', k:1}
  ],
  hinweise:['Effizienz und Stärke gegen Marktmacht und weniger Wettbewerb.'],
  merke:'Zusammenschlüsse: Effizienz, Innovation, internationale Stärke – aber Gefahr von Marktmacht, höheren Preisen, weniger Auswahl und Verdrängung kleiner Anbieter.'}),

/* ---------- Modul · Wettbewerbspolitik ---------- */
{
  id:'KW1', modul:'KW', typ:'berechnung', mehrfach:true, stufe:1, titel:'Ziele und Instrumente der Wettbewerbspolitik',
  tags:['Volkswirtschaft','Wettbewerbspolitik','Kartellrecht'],
  text:'Das Gesetz gegen Wettbewerbsbeschränkungen (GWB) wird auch „Grundgesetz der Sozialen Marktwirtschaft“ genannt.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Wettbewerbspolitik soll den Wettbewerb schützen, damit Preise, Qualität, Auswahl und Innovationen den Kunden zugutekommen.', richtig:true, weg:''},
    {text:'Kartellverbot: Vereinbarungen, die den Wettbewerb beschränken (z. B. Preis- oder Gebietsabsprachen), sind verboten; Ausnahmen sind nur unter engen Voraussetzungen möglich.', richtig:true, weg:'§§ 1–3 GWB'},
    {text:'Missbrauchsaufsicht: Marktbeherrschende Unternehmen dürfen ihre Stellung nicht missbrauchen, z. B. durch überhöhte Preise oder Behinderung von Konkurrenten.', richtig:true, weg:'§§ 19, 19a GWB'},
    {text:'Fusionskontrolle: Große Zusammenschlüsse müssen beim Bundeskartellamt (bzw. bei der EU-Kommission) angemeldet werden und können untersagt werden, wenn sie wirksamen Wettbewerb erheblich behindern.', richtig:true, weg:'§§ 35 ff. GWB'},
    {text:'Das Bundeskartellamt legt die Preise für Produkte fest, auf deren Markt es zu wenig Wettbewerb gibt.', fehler:'Es setzt keine Preise fest, sondern schützt die Bedingungen des Wettbewerbs.'}
  ],
  hinweise:['Drei Säulen: Absprachen, Marktmacht, Zusammenschlüsse.'],
  merke:'Wettbewerbspolitik: Kartellverbot · Missbrauchsaufsicht über marktbeherrschende Unternehmen · Fusionskontrolle – zuständig: Bundeskartellamt, bei großen grenzüberschreitenden Fällen die EU-Kommission.'
},
blBau('zuordnung', {id:'KW2', modul:'KW', stufe:2, titel:'Welches Instrument greift?', tags:['Volkswirtschaft', 'Wettbewerbspolitik', 'Fall'],
  text:'Welches Instrument der Wettbewerbspolitik ist im Fall betroffen?', kategorien:['Kartellverbot', 'Missbrauchsaufsicht', 'Fusionskontrolle'], anzahl:5,
  faelle:[
    {t:'Mehrere Drogerieketten haben sich auf einheitliche Preiserhöhungen abgesprochen.', k:0},
    {t:'Ein marktbeherrschender Energieversorger verlangt in einer Region deutlich überhöhte Preise.', k:1},
    {t:'Zwei große Supermarktketten wollen sich zusammenschließen.', k:2},
    {t:'Eine Online-Plattform bevorzugt ihre eigenen Produkte in den Suchergebnissen gegenüber denen fremder Händler.', k:1},
    {t:'Bauunternehmen sprechen ab, wer bei welcher Ausschreibung das günstigste Angebot abgibt.', k:0, weg:'Submissionsabsprache – auch eine Straftat'},
    {t:'Ein Konzern will einen Konkurrenten mit 30 % Marktanteil kaufen.', k:2}
  ],
  hinweise:['Absprache, Missbrauch einer starken Stellung oder geplanter Zusammenschluss?'],
  merke:'Absprachen → Kartellverbot · Ausnutzen von Marktmacht → Missbrauchsaufsicht · Zusammenschluss → Fusionskontrolle.'}),
{
  id:'KW3', modul:'KW', typ:'berechnung', mehrfach:true, stufe:2, titel:'Kartelle aufdecken und bestrafen',
  tags:['Volkswirtschaft','Wettbewerbspolitik','Kartell'],
  text:'Das Bundeskartellamt hat ein Kartell von Herstellern von Wellpappe aufgedeckt.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Gegen die Unternehmen können Bußgelder von bis zu 10 % des weltweiten Konzernumsatzes verhängt werden.', richtig:true, weg:'§ 81c GWB'},
    {text:'Durch die Kronzeugenregelung kann ein Kartellmitglied, das die Absprache als Erstes aufdeckt, einen vollständigen Erlass des Bußgelds erhalten; wer später mit dem Amt zusammenarbeitet, kann eine Ermäßigung erhalten.', richtig:true, weg:'§§ 81h ff. GWB – das erschwert Kartelle, weil jeder dem anderen misstrauen muss.'},
    {text:'Geschädigte Kunden können Schadensersatz verlangen.', richtig:true, weg:'z. B. für überhöhte Preise'},
    {text:'Bestimmte Kooperationen können vom Kartellverbot freigestellt sein, z. B. wenn sie Effizienzvorteile bringen, an denen die Verbraucher angemessen beteiligt werden, oder als Mittelstandskartell die Wettbewerbsfähigkeit kleiner Unternehmen verbessern, ohne den Wettbewerb wesentlich zu beeinträchtigen.', richtig:true, weg:'§ 2 GWB (Freistellung) und § 3 GWB (Mittelstandskartelle)'},
    {text:'Ein Kartell ist erlaubt, solange die Preise nicht stärker als die Inflationsrate steigen.', fehler:'Preisabsprachen sind grundsätzlich verboten – unabhängig von der Höhe.'}
  ],
  hinweise:['Welche Folgen hat ein Kartell für die Beteiligten?'],
  merke:'Kartelle: Bußgelder bis 10 % des Konzernumsatzes, Kronzeugenregelung, Schadensersatz für Geschädigte; nur wenige Kooperationen sind freigestellt.'
},
{
  id:'KW4', modul:'KW', typ:'berechnung', mehrfach:true, stufe:3, titel:'Grenzen der Wettbewerbspolitik',
  tags:['Volkswirtschaft','Wettbewerbspolitik','Beurteilung'],
  text:'Kritiker sagen, die Wettbewerbspolitik komme bei manchen Märkten an ihre Grenzen.',
  frage:'Welche Grenzen treffen zu?',
  optionen:[
    {text:'Stillschweigend gleiches Verhalten (z. B. Preisführerschaft an Tankstellen) ist schwer als verbotene Absprache nachzuweisen.', richtig:true, weg:'Parallelverhalten im Oligopol'},
    {text:'Märkte sind international; nationale Behörden können weltweit tätige Konzerne nur begrenzt kontrollieren.', richtig:true, weg:''},
    {text:'Digitale Plattformen wachsen durch Netzwerkeffekte sehr schnell zu marktbeherrschender Größe.', richtig:true, weg:'Deshalb wurden Sonderregeln eingeführt (§ 19a GWB, Digital Markets Act der EU).'},
    {text:'Mit einer Ministererlaubnis kann ein untersagter Zusammenschluss aus Gründen des Gemeinwohls trotzdem genehmigt werden.', richtig:true, weg:'§ 42 GWB'},
    {text:'Weil es ein Kartellamt gibt, kann es in Deutschland keine marktbeherrschenden Unternehmen geben.', fehler:'Marktbeherrschung ist nicht verboten, nur ihr Missbrauch.'}
  ],
  hinweise:['Nachweis, internationale Märkte, digitale Plattformen, politische Ausnahmen.'],
  merke:'Grenzen: Nachweisprobleme bei Parallelverhalten, internationale Konzerne, digitale Plattformen, politische Ausnahmen (Ministererlaubnis) · Marktbeherrschung ist erlaubt, ihr Missbrauch nicht.'
},
/* ---------- Modul · EZB: Organe und Ziele ---------- */
{
  id:'EO1', modul:'EO', typ:'berechnung', mehrfach:true, stufe:1, titel:'Eurosystem und Organe der EZB',
  tags:['Volkswirtschaft','EZB','Organe'],
  text:'Seit 1999 ist die Europäische Zentralbank (EZB) mit Sitz in Frankfurt am Main für die Geldpolitik im Euroraum zuständig.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der EZB-Rat ist das oberste Beschlussorgan: Er legt die Geldpolitik fest, z. B. die Leitzinsen.', richtig:true, weg:'Er tagt in der Regel alle sechs Wochen zu geldpolitischen Beschlüssen.'},
    {text:'Dem EZB-Rat gehören die sechs Mitglieder des Direktoriums und die Präsidenten der nationalen Zentralbanken der Euro-Länder an.', richtig:true, weg:'Für Deutschland: der Präsident der Deutschen Bundesbank'},
    {text:'Das Direktorium (Präsident, Vizepräsident, vier weitere Mitglieder) führt die Geldpolitik nach den Beschlüssen des EZB-Rats aus und leitet die laufenden Geschäfte.', richtig:true, weg:'ausführendes Organ'},
    {text:'Das Eurosystem besteht aus der EZB und den nationalen Zentralbanken der Länder, die den Euro eingeführt haben.', richtig:true, weg:'Die Deutsche Bundesbank ist Teil des Eurosystems und setzt die Beschlüsse in Deutschland um.'},
    {text:'Der Erweiterte Rat beschließt die Leitzinsen für alle EU-Staaten.', fehler:'Der Erweiterte Rat (mit den Zentralbankpräsidenten auch der Nicht-Euro-Länder) hat beratende und vorbereitende Aufgaben, z. B. für den Beitritt zum Euro. Die Leitzinsen beschließt der EZB-Rat – nur für den Euroraum.'},
    {text:'Die Bundesregierung kann der Bundesbank Weisungen zur Höhe der Leitzinsen geben.', fehler:'EZB und nationale Zentralbanken sind unabhängig und nehmen keine Weisungen von Regierungen an (Art. 130 AEUV).'}
  ],
  hinweise:['Wer beschließt, wer führt aus, wer setzt in den einzelnen Ländern um?'],
  merke:'EZB-Rat = Direktorium + Präsidenten der Euro-Zentralbanken → beschließt die Geldpolitik · Direktorium → führt aus · Erweiterter Rat → berät (alle EU-Zentralbanken) · Eurosystem = EZB + Zentralbanken der Euro-Länder.'
},
blBau('zuordnung', {id:'EO2', modul:'EO', stufe:1, titel:'Wer ist zuständig?', tags:['Volkswirtschaft', 'EZB', 'Organe'],
  text:'Welches Organ bzw. welche Einrichtung ist zuständig?', kategorien:['EZB-Rat', 'Direktorium der EZB', 'Erweiterter Rat', 'nationale Zentralbank (z. B. Bundesbank)'], anzahl:7,
  faelle:[
    {t:'beschließt, den Einlagesatz um 0,25 Prozentpunkte zu senken', k:0},
    {t:'legt die geldpolitische Strategie des Eurosystems fest', k:0},
    {t:'führt die Geldpolitik nach den Beschlüssen des EZB-Rats aus, erteilt den nationalen Zentralbanken die nötigen Weisungen und führt die laufenden Geschäfte der EZB', k:1},
    {t:'bereitet die Sitzungen des EZB-Rats vor', k:1},
    {t:'wirkt an Konvergenzberichten mit, wenn ein EU-Staat den Euro einführen möchte', k:2, weg:'Mitglieder: Präsident und Vizepräsident der EZB sowie die Präsidenten aller EU-Zentralbanken'},
    {t:'versorgt die Geschäftsbanken eines Landes mit Zentralbankgeld und führt deren Konten', k:3},
    {t:'bringt Euro-Banknoten im eigenen Land in Umlauf', k:3, weg:'Die Ausgabe genehmigt der EZB-Rat, in Umlauf bringen sie die nationalen Zentralbanken.'},
    {t:'entscheidet über Ankaufprogramme für Anleihen', k:0}
  ],
  hinweise:['Beschließen → EZB-Rat · Ausführen und Anweisen → Direktorium · praktische Durchführung mit den Banken im Land → nationale Zentralbank.'],
  merke:'Der EZB-Rat entscheidet, das Direktorium führt aus, die nationalen Zentralbanken setzen um. Der Erweiterte Rat verbindet die Euro-Länder mit den übrigen EU-Staaten.'}),
{
  id:'EO3', modul:'EO', typ:'berechnung', mehrfach:true, stufe:1, titel:'Ziel und Unabhängigkeit der EZB',
  tags:['Volkswirtschaft','EZB','Preisstabilität'],
  text:'Der Vertrag über die Arbeitsweise der EU (AEUV) gibt der EZB ein klares Ziel vor.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Vorrangiges Ziel ist die Preisstabilität im Euroraum.', richtig:true, weg:'Art. 127 AEUV'},
    {text:'Die EZB strebt mittelfristig eine Inflationsrate von 2 % an; Abweichungen nach oben und nach unten gelten als gleich unerwünscht (symmetrisches Ziel).', richtig:true, weg:'Strategie seit 2021'},
    {text:'Gemessen wird die Inflation mit dem Harmonisierten Verbraucherpreisindex (HVPI) für den Euroraum.', richtig:true, weg:'Er wird in allen EU-Ländern nach gleichen Regeln berechnet.'},
    {text:'Soweit die Preisstabilität nicht gefährdet ist, unterstützt die EZB die allgemeine Wirtschaftspolitik in der EU.', richtig:true, weg:'nachrangiges Ziel, z. B. Wachstum und Beschäftigung'},
    {text:'Die EZB darf Staaten keine Kredite geben und keine Staatsanleihen direkt bei der Ausgabe kaufen.', richtig:true, weg:'Verbot der monetären Staatsfinanzierung (Art. 123 AEUV); Käufe am Sekundärmarkt sind unter Auflagen möglich.'},
    {text:'Preisstabilität und Vollbeschäftigung sind gleichrangige Ziele der EZB.', fehler:'Preisstabilität hat Vorrang. (Ein doppeltes, gleichrangiges Mandat hat z. B. die US-Notenbank Fed.)'},
    {text:'Ziel ist eine Inflationsrate von genau 0 %.', fehler:'Angestrebt werden 2 % – ein Puffer gegen Deflation und Messfehler.'}
  ],
  hinweise:['Ein Ziel hat Vorrang. Welche Zahl, welcher Index, welcher Zeitraum?'],
  merke:'Ziel: Preisstabilität = 2 % Inflation (HVPI) auf mittlere Sicht, symmetrisch · Unabhängigkeit: keine Weisungen von Regierungen · Verbot der Staatsfinanzierung durch die Notenpresse.'
},
{
  id:'EO4', modul:'EO', typ:'berechnung', mehrfach:true, stufe:2, titel:'Inflation messen und erklären',
  tags:['Volkswirtschaft','EZB','Inflation','Warenkorb'],
  text:'Grundlage der Geldpolitik ist die Messung der Preisentwicklung mit einem Warenkorb.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Der Warenkorb bildet die typischen Konsumausgaben der privaten Haushalte ab; jedes Gut hat ein Gewicht (Wägungsschema).', richtig:true, weg:'Mieten oder Energie haben z. B. ein höheres Gewicht als Kinokarten.'},
    {text:'Weil die Mengen im Warenkorb gleich bleiben, misst der Index nur die Preisänderung.', richtig:true, weg:'Der Warenkorb wird von Zeit zu Zeit an das Kaufverhalten angepasst.'},
    {text:'Der HVPI wird in allen EU-Ländern nach gleichen Regeln ermittelt; so sind die Inflationsraten vergleichbar.', richtig:true, weg:'Daneben berechnet das Statistische Bundesamt den nationalen Verbraucherpreisindex (VPI).'},
    {text:'Steigen vor allem die Energie- und Rohstoffpreise, spricht man von Kosteninflation (angebotsseitig).', richtig:true, weg:'Ursache auf der Angebotsseite'},
    {text:'Ist die Gesamtnachfrage größer als das Angebot, kann es zu Nachfrageinflation kommen.', richtig:true, weg:'nachfrageseitige Ursache – hier wirkt die Zinspolitik am stärksten'},
    {text:'Die persönliche Inflationsrate eines Haushalts ist immer genau so hoch wie der HVPI.', fehler:'Wer z. B. viel Energie verbraucht, spürt eine höhere Teuerung – der Warenkorb ist ein Durchschnitt.'}
  ],
  hinweise:['Warenkorb, Gewichtung, Vergleichbarkeit; Ursachen auf der Angebots- oder Nachfrageseite.'],
  merke:'Inflationsrate = Veränderung des Preisindex in % · HVPI: EU-weit vergleichbar · Ursachen: Nachfrageinflation, Kosteninflation (z. B. Energie, Löhne), importierte Inflation.'
},

/* ---------- Modul · Geldpolitische Instrumente ---------- */
{
  id:'EI1', modul:'EI', typ:'berechnung', mehrfach:true, stufe:1, titel:'Instrumente des Eurosystems',
  tags:['Volkswirtschaft','EZB','Instrumente'],
  text:'Geschäftsbanken brauchen Zentralbankgeld, z. B. für Bargeld und die Mindestreserve. Die EZB steuert über die Bedingungen, zu denen sie dieses Geld bereitstellt.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Bei Hauptrefinanzierungsgeschäften leihen sich Banken für eine Woche Zentralbankgeld gegen Sicherheiten.', richtig:true, weg:'Offenmarktgeschäft; Zinssatz: Hauptrefinanzierungssatz – traditionell „Leitzins“ genannt; seit 2024 liegt er 0,15 Prozentpunkte über dem Einlagesatz'},
    {text:'Längerfristige Refinanzierungsgeschäfte haben in der Regel eine Laufzeit von drei Monaten.', richtig:true, weg:'ebenfalls Offenmarktgeschäfte'},
    {text:'Über die Spitzenrefinanzierungsfazilität können Banken sich jederzeit über Nacht Geld leihen – zu einem höheren Zins.', richtig:true, weg:'ständige Fazilität; ihr Zins bildet die Obergrenze für den Tagesgeldzins'},
    {text:'Über die Einlagefazilität können Banken überschüssiges Geld über Nacht bei der Zentralbank anlegen.', richtig:true, weg:'ihr Zins (Einlagesatz) bildet die Untergrenze; über ihn steuert die EZB derzeit vor allem den Geldmarkt'},
    {text:'Banken müssen einen Teil der Kundeneinlagen als Mindestreserve bei der Zentralbank halten (derzeit 1 %).', richtig:true, weg:'Mindestreservepflicht'},
    {text:'Mit Ankaufprogrammen kauft das Eurosystem in großem Umfang Anleihen am Markt.', richtig:true, weg:'Wertpapierankaufprogramme, z. B. in Krisen, wenn die Zinsen schon sehr niedrig sind'},
    {text:'Unternehmen und Privatpersonen können sich direkt bei der EZB Kredit holen.', fehler:'Geschäftspartner des Eurosystems sind Banken (Kreditinstitute), nicht Unternehmen oder Haushalte.'}
  ],
  hinweise:['Offenmarktgeschäfte, ständige Fazilitäten, Mindestreserve, Ankaufprogramme.'],
  merke:'Offenmarktgeschäfte (Hauptrefinanzierung 1 Woche, längerfristig 3 Monate) · ständige Fazilitäten (Spitzenrefinanzierung = Obergrenze, Einlage = Untergrenze) · Mindestreserve (1 %) · Anleihekäufe.'
},
blBau('zuordnung', {id:'EI2', modul:'EI', stufe:1, titel:'Instrumente erkennen', tags:['Volkswirtschaft', 'EZB', 'Instrumente'],
  text:'Um welches Instrument geht es?', kategorien:['Offenmarktgeschäft', 'ständige Fazilität', 'Mindestreserve', 'Ankaufprogramm'], anzahl:7,
  faelle:[
    {t:'Die Kreditbank AG leiht sich in der wöchentlichen Ausschreibung 50 Mio. € für sieben Tage.', k:0, weg:'Hauptrefinanzierungsgeschäft'},
    {t:'Eine Sparkasse leiht sich für drei Monate Zentralbankgeld.', k:0, weg:'längerfristiges Refinanzierungsgeschäft'},
    {t:'Eine Bank hat am Abend zu wenig Geld auf ihrem Zentralbankkonto und leiht sich den Betrag über Nacht.', k:1, weg:'Spitzenrefinanzierungsfazilität'},
    {t:'Eine Bank legt überschüssige Liquidität über Nacht verzinslich bei der Bundesbank an.', k:1, weg:'Einlagefazilität'},
    {t:'Eine Bank muss 1 % ihrer Kundeneinlagen auf ihrem Konto bei der Zentralbank halten.', k:2},
    {t:'Das Eurosystem kauft über mehrere Jahre Staats- und Unternehmensanleihen am Kapitalmarkt.', k:3},
    {t:'Die Bank muss für den Wochenkredit Wertpapiere als Sicherheit hinterlegen.', k:0, weg:'Refinanzierung nur gegen notenbankfähige Sicherheiten'},
    {t:'Das Eurosystem lässt fällige Anleihen auslaufen und legt das Geld nicht wieder an.', k:3, weg:'Abbau der Bestände („quantitative Straffung“)'}
  ],
  hinweise:['Ausschreibung mit fester Laufzeit → Offenmarktgeschäft · über Nacht auf Initiative der Bank → ständige Fazilität.'],
  merke:'Offenmarktgeschäfte: EZB bietet an, feste Laufzeit · ständige Fazilitäten: Bank entscheidet, über Nacht · Mindestreserve: Pflichtguthaben · Ankaufprogramme: Kauf von Anleihen am Markt.'}),
blBau('zuordnung', {id:'EI3', modul:'EI', stufe:2, titel:'Expansiv oder restriktiv?', tags:['Volkswirtschaft', 'EZB', 'Instrumente', 'Geldpolitik'],
  text:'Wie wirkt die Maßnahme der EZB?', kategorien:['expansiv (Geld wird billiger, mehr Kredite)', 'restriktiv (Geld wird teurer, weniger Kredite)'], anzahl:8,
  faelle:[
    {t:'Die EZB senkt die Leitzinsen.', k:0},
    {t:'Der Einlagesatz wird um 0,5 Prozentpunkte erhöht.', k:1},
    {t:'Der Mindestreservesatz wird gesenkt.', k:0, weg:'Die Banken haben mehr Geld für Kredite frei.'},
    {t:'Der Mindestreservesatz wird erhöht.', k:1},
    {t:'Das Eurosystem kauft in großem Umfang Anleihen.', k:0, weg:'Es fließt Zentralbankgeld in die Wirtschaft; die Renditen sinken.'},
    {t:'Fällige Anleihen werden nicht ersetzt; die Bestände schrumpfen.', k:1},
    {t:'Der Spitzenrefinanzierungssatz steigt.', k:1},
    {t:'Die EZB stellt den Banken langfristige Kredite zu besonders günstigen Bedingungen bereit.', k:0},
    {t:'Die EZB kündigt an, die Zinsen „für längere Zeit auf hohem Niveau“ zu halten.', k:1, weg:'Auch Ankündigungen wirken – über die Erwartungen.'}
  ],
  hinweise:['Expansiv: mehr und billigeres Geld · restriktiv: weniger und teureres Geld.'],
  merke:'Expansive Geldpolitik (bei Deflationsgefahr, Rezession): Zinsen senken, Anleihen kaufen · restriktive Geldpolitik (bei Inflation): Zinsen erhöhen, Anleihebestände abbauen.'}),
blBau('rechnung', {id:'EI4', modul:'EI', stufe:2, titel:'Mindestreserve und Kosten der Refinanzierung', tags:['Volkswirtschaft', 'EZB', 'Instrumente', 'Mindestreserve'], kopf:'Kreditbank AG (Zinssätze angenommen)',
  text:'Die Kreditbank AG hat reservepflichtige Kundeneinlagen. Außerdem leiht sie sich im Hauptrefinanzierungsgeschäft Zentralbankgeld. Berechne die Mindestreserve (vereinfacht, ohne Freibetrag) und die Zinskosten des Kredits (Zinstage ÷ 360). Die Zinssätze sind angenommen.',
  spalten:['Kreditbank AG'],
  zeilen:[{id:'ein', t:'reservepflichtige Kundeneinlagen', e:'€'}, {id:'ms', t:'Mindestreservesatz', e:'%'},
    {id:'kr', t:'Kredit im Hauptrefinanzierungsgeschäft', e:'€'}, {id:'z', t:'Hauptrefinanzierungssatz (angenommen)', e:'%'}, {id:'tg', t:'Laufzeit', e:'Tage'},
    {id:'z2', t:'Hauptrefinanzierungssatz nach einer Zinserhöhung (angenommen)', e:'%'}],
  werte:[{ein:800000000, ms:1, kr:40000000, z:2.4, tg:7, z2:2.9}],
  sets:[[{ein:650000000, ms:1, kr:30000000, z:3.6, tg:7, z2:4.1}], [{ein:1200000000, ms:1, kr:60000000, z:1.8, tg:7, z2:2.3}], [{ein:500000000, ms:1, kr:25000000, z:4.2, tg:7, z2:4.5}]],
  felder:[{id:'mr', t:'Mindestreserve = Einlagen × Mindestreservesatz', kurz:'Mindestreserve', f:'ein@0 * ms@0 / 100', e:'€'},
    {id:'zk', t:'Zinskosten des Kredits = Kredit × Zinssatz × Tage ÷ (100 × 360)', kurz:'Zinskosten', f:'kr@0 * z@0 * tg@0 / 36000', e:'€'},
    {id:'zk2', t:'Zinskosten nach der Zinserhöhung', kurz:'Zinskosten neu', f:'kr@0 * z2@0 * tg@0 / 36000', e:'€'},
    {id:'md', t:'Mehrkosten für die Bank je Woche', kurz:'Mehrkosten', f:'kr@0 * (z2@0 - z@0) * tg@0 / 36000', e:'€'}],
  wahl:[{id:'w', t:'Welche Folge der Zinserhöhung ist zu erwarten?', opts:['Die Bank gibt die höheren Kosten weiter: Kredite für Unternehmen und Haushalte werden teurer.', 'Die Bank senkt ihre Kreditzinsen, weil sie mehr Zinsen zahlen muss.', 'Die Kreditzinsen der Kunden bleiben immer unverändert.'], r:'0'}],
  hinweise:['Mindestreserve = Einlagen × 1 %.', 'Zinsen = Kapital × Zinssatz × Tage ÷ (100 × 360).', 'Mehrkosten = Zinskosten neu − Zinskosten alt.'],
  merke:'Steigt der Leitzins, wird die Refinanzierung der Banken teurer – sie geben das über höhere Kreditzinsen weiter. Das ist der erste Schritt der Wirkungskette. Die Mindestreserve wird derzeit nicht verzinst.'}),

/* ---------- Modul · Wirkungskette der Geldpolitik ---------- */
blBau('zuordnung', {id:'EW1', modul:'EW', stufe:1, titel:'Wirkungskette einer Zinssenkung', tags:['Volkswirtschaft', 'EZB', 'Wirkungskette', 'expansiv'],
  text:'Die EZB senkt die Leitzinsen, weil die Inflationsrate deutlich unter 2 % liegt und die Wirtschaft schwächelt. Bringe die Wirkungskette in die richtige Reihenfolge.', kategorien:['1. Schritt', '2. Schritt', '3. Schritt', '4. Schritt', '5. Schritt', '6. Schritt'], anzahl:6,
  faelle:[
    {t:'Die Geschäftsbanken können sich günstiger bei der Zentralbank refinanzieren.', k:0},
    {t:'Die Banken senken die Zinsen für Kredite an Unternehmen und Haushalte.', k:1},
    {t:'Kredite werden attraktiver, Sparen weniger attraktiv – die Kreditnachfrage steigt.', k:2},
    {t:'Unternehmen investieren mehr, Haushalte konsumieren mehr: Die Gesamtnachfrage steigt.', k:3},
    {t:'Die Unternehmen erhöhen die Produktion und stellen mehr Arbeitskräfte ein.', k:4},
    {t:'Bei steigender Nachfrage können Preise leichter erhöht werden: Die Inflationsrate steigt in Richtung 2 %.', k:5}
  ],
  hinweise:['Beginne bei den Banken, ende beim Preisniveau.'],
  merke:'Expansiv: Leitzins ↓ → Refinanzierung der Banken billiger → Kreditzinsen ↓ → Kredite ↑, Sparen ↓ → Investitionen und Konsum ↑ → Produktion und Beschäftigung ↑ → Preisniveau ↑.'}),
blBau('zuordnung', {id:'EW2', modul:'EW', stufe:1, titel:'Wirkungskette einer Zinserhöhung', tags:['Volkswirtschaft', 'EZB', 'Wirkungskette', 'restriktiv'],
  text:'Die Inflationsrate im Euroraum liegt bei 5 %. Die EZB erhöht die Leitzinsen. Bringe die Wirkungskette in die richtige Reihenfolge.', kategorien:['1. Schritt', '2. Schritt', '3. Schritt', '4. Schritt', '5. Schritt', '6. Schritt'], anzahl:6,
  faelle:[
    {t:'Zentralbankgeld wird für die Geschäftsbanken teurer.', k:0},
    {t:'Die Banken erhöhen die Kreditzinsen und bieten höhere Sparzinsen.', k:1},
    {t:'Unternehmen und Haushalte nehmen weniger Kredite auf und sparen mehr.', k:2},
    {t:'Investitionen und Konsum gehen zurück: Die Gesamtnachfrage sinkt.', k:3},
    {t:'Die Unternehmen können Preiserhöhungen schwerer durchsetzen.', k:4},
    {t:'Der Preisanstieg verlangsamt sich: Die Inflationsrate sinkt in Richtung 2 %.', k:5}
  ],
  hinweise:['Teureres Geld → weniger Kredite → weniger Nachfrage → weniger Spielraum für Preiserhöhungen.'],
  merke:'Restriktiv: Leitzins ↑ → Refinanzierung teurer → Kredit- und Sparzinsen ↑ → Kredite ↓, Sparen ↑ → Investitionen und Konsum ↓ → Preisspielraum ↓ → Inflationsrate ↓. Nebenwirkung: Wachstum und Beschäftigung können sinken.'}),
blBau('zuordnung', {id:'EW3', modul:'EW', stufe:2, titel:'Was steigt, was sinkt?', tags:['Volkswirtschaft', 'EZB', 'Wirkungskette'],
  text:'Die EZB erhöht die Leitzinsen deutlich. Wie verändern sich die Größen – bei sonst gleichen Bedingungen?', kategorien:['steigt', 'sinkt'], anzahl:8,
  faelle:[
    {t:'Zinsen für Unternehmenskredite', k:0},
    {t:'Zinsen für Tagesgeld und Festgeld', k:0},
    {t:'Nachfrage nach Baukrediten und Immobilien', k:1},
    {t:'Investitionen der Unternehmen', k:1},
    {t:'Bereitschaft der Haushalte zu sparen', k:0},
    {t:'Konsumnachfrage auf Kredit (z. B. Autokauf)', k:1},
    {t:'Inflationsrate (mit Verzögerung)', k:1},
    {t:'Außenwert des Euro (Wechselkurs) – tendenziell', k:0, weg:'Anlagen im Euroraum werden attraktiver, Kapital fließt zu, der Euro wertet auf.'},
    {t:'Preise für Importe in Euro – tendenziell', k:1, weg:'Ein stärkerer Euro macht Einfuhren billiger.'},
    {t:'Arbeitslosigkeit – kurzfristig', k:0, weg:'Weniger Nachfrage → weniger Produktion → weniger Arbeitskräfte gebraucht (Zielkonflikt).'}
  ],
  hinweise:['Höhere Zinsen machen Kredite teurer und Sparen lohnender.'],
  merke:'Zinserhöhung: Kredit- und Sparzinsen ↑ · Kredite, Investitionen, Konsum ↓ · Euro ↑, Importpreise ↓ · Inflation ↓, kurzfristig aber auch Wachstum ↓ und Arbeitslosigkeit ↑.'}),
blBau('zuordnung', {id:'EW4', modul:'EW', stufe:2, titel:'Welche Geldpolitik passt?', tags:['Volkswirtschaft', 'EZB', 'Wirkungskette', 'Geldpolitik'],
  text:'Welche Geldpolitik würde die EZB in dieser Lage wahrscheinlich betreiben?', kategorien:['expansiv: Zinsen senken', 'restriktiv: Zinsen erhöhen'], anzahl:7,
  faelle:[
    {t:'Die Inflationsrate liegt seit Monaten bei 5 % und steigt weiter.', k:1},
    {t:'Die Preise sinken auf breiter Front; es droht eine Deflation.', k:0},
    {t:'Die Wirtschaft steckt in einer Rezession, die Inflationsrate liegt bei 0,8 %.', k:0},
    {t:'Gewerkschaften fordern wegen hoher Inflation 10 % mehr Lohn; eine Lohn-Preis-Spirale droht.', k:1},
    {t:'In einer Finanzkrise vergeben die Banken kaum noch Kredite.', k:0},
    {t:'Die Kapazitäten sind voll ausgelastet, die Nachfrage boomt, die Preise ziehen an.', k:1},
    {t:'Umfragen zeigen: Unternehmen und Haushalte erwarten dauerhaft deutlich mehr als 2 % Inflation.', k:1, weg:'Die EZB muss die Erwartungen wieder bei 2 % verankern.'},
    {t:'Die Inflationsrate liegt seit Jahren unter 1 %.', k:0}
  ],
  hinweise:['Inflation über 2 % → bremsen · Inflation weit unter 2 % oder Deflation → anregen.'],
  merke:'Liegt die Inflation dauerhaft über 2 %: restriktiv · darunter oder Deflationsgefahr: expansiv. Maßstab ist die mittelfristige Inflationsaussicht, nicht ein einzelner Monat.'}),
{
  id:'EW5', modul:'EW', typ:'berechnung', mehrfach:true, stufe:2, titel:'Fall: Inflation von 6 %',
  tags:['Volkswirtschaft','EZB','Wirkungskette','Fall'],
  text:'Im Euroraum liegt die Inflationsrate bei 6 %. Das Wirtschaftswachstum ist schwach, die Arbeitslosigkeit gering. Die Zeitung schreibt: „Die EZB muss handeln.“',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Die EZB wird die Leitzinsen voraussichtlich erhöhen.', richtig:true, weg:'restriktive Geldpolitik, weil die Inflation weit über 2 % liegt'},
    {text:'Ziel ist es, die Gesamtnachfrage zu dämpfen und die Inflationserwartungen wieder bei 2 % zu verankern.', richtig:true, weg:'Erwartungskanal: Wer weiter hohe Inflation erwartet, fordert höhere Löhne und Preise.'},
    {text:'Die volle Wirkung auf die Preise tritt erst nach längerer Zeit ein, oft nach ein bis zwei Jahren.', richtig:true, weg:'Wirkungsverzögerung'},
    {text:'Es besteht ein Zielkonflikt: Höhere Zinsen können das ohnehin schwache Wachstum weiter bremsen.', richtig:true, weg:'Preisstabilität ↔ Wachstum und Beschäftigung'},
    {text:'Die EZB senkt die Zinsen, damit Unternehmen mehr investieren und dadurch die Preise sinken.', fehler:'Eine Zinssenkung erhöht die Nachfrage und würde die Inflation eher verstärken.'},
    {text:'Die EZB kann für wichtige Güter Höchstpreise festsetzen.', fehler:'Preisvorschriften gehören nicht zu den Instrumenten der EZB; sie wirkt über Zinsen und Geldmenge.'}
  ],
  hinweise:['Welche Richtung? Welches Ziel? Wie schnell? Mit welchen Nebenwirkungen?'],
  merke:'Bei hoher Inflation erhöht die EZB die Zinsen. Die Wirkung tritt verzögert ein und kann Wachstum und Beschäftigung belasten.'
},
{
  id:'EW6', modul:'EW', typ:'berechnung', mehrfach:true, stufe:3, titel:'Wirkungskanäle',
  tags:['Volkswirtschaft','EZB','Wirkungskette'],
  text:'Geldpolitik wirkt nicht nur über die Kreditzinsen.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Zinskanal: Höhere Leitzinsen verteuern Kredite und machen Sparen attraktiver.', richtig:true, weg:'klassische Wirkungskette'},
    {text:'Wechselkurskanal: Steigende Zinsen im Euroraum lassen den Euro tendenziell aufwerten; Importe werden billiger, die Inflation sinkt.', richtig:true, weg:'importierte Inflation sinkt'},
    {text:'Erwartungskanal: Glaubt die Öffentlichkeit, dass die EZB die Inflation senkt, fallen Lohn- und Preisforderungen moderater aus.', richtig:true, weg:'Glaubwürdigkeit der Notenbank'},
    {text:'Vermögenskanal: Höhere Zinsen lassen Aktien- und Immobilienpreise tendenziell sinken; Haushalte fühlen sich ärmer und konsumieren weniger.', richtig:true, weg:'Vermögenseffekt'},
    {text:'Eine Zinserhöhung wirkt nur auf Unternehmen, die einen Kredit bei der EZB haben.', fehler:'Unternehmen haben keine Kredite bei der EZB; die Wirkung läuft über Banken, Märkte und Erwartungen.'}
  ],
  hinweise:['Zinsen, Wechselkurs, Erwartungen, Vermögenspreise.'],
  merke:'Wirkungskanäle der Geldpolitik: Zins- und Kreditkanal, Wechselkurskanal, Erwartungskanal, Vermögenskanal.'
},
{
  id:'EW7', modul:'EW', typ:'berechnung', mehrfach:true, stufe:3, titel:'Grenzen der Geldpolitik',
  tags:['Volkswirtschaft','EZB','Wirkungskette','Grenzen'],
  text:'Die Wirkungskette funktioniert nicht immer so, wie sie im Lehrbuch steht.',
  frage:'Welche Aussagen treffen zu?',
  optionen:[
    {text:'Wirkungsverzögerung: Zwischen Zinsentscheidung und Wirkung auf die Preise vergeht viel Zeit.', richtig:true, weg:'Die Lage kann sich bis dahin geändert haben.'},
    {text:'Bei Kosteninflation (z. B. Energiepreisschock) kann die EZB die Ursache nicht beseitigen; sie kann nur verhindern, dass sich höhere Preise in Löhnen und anderen Preisen festsetzen.', richtig:true, weg:'Zweitrundeneffekte vermeiden'},
    {text:'Ein einheitlicher Leitzins passt nicht für alle Euro-Länder, wenn sich Inflation und Konjunktur stark unterscheiden.', richtig:true, weg:'„one size fits all“-Problem'},
    {text:'Sind Unternehmen pessimistisch, investieren sie auch bei niedrigen Zinsen kaum.', richtig:true, weg:'Man kann die Pferde zur Tränke führen, aber nicht zum Trinken zwingen.'},
    {text:'Die Zinsen können nicht beliebig weit unter null gesenkt werden.', richtig:true, weg:'Untergrenze – deshalb in Krisen zusätzlich Anleihekäufe'},
    {text:'Die EZB kann die Inflation innerhalb weniger Wochen genau auf 2 % einstellen.', fehler:'Die Wirkung ist verzögert und unsicher.'},
    {text:'Die EZB bestimmt die Steuer- und Ausgabenpolitik der Euro-Länder.', fehler:'Fiskalpolitik ist Sache der Mitgliedstaaten; sie kann die Geldpolitik unterstützen oder ihr entgegenwirken.'}
  ],
  hinweise:['Zeit, Ursache der Inflation, unterschiedliche Länder, Verhalten der Unternehmen, Untergrenze der Zinsen.'],
  merke:'Grenzen: Wirkungsverzögerung, Kosteninflation, ein Zins für unterschiedliche Länder, Pessimismus der Investoren, Zinsuntergrenze, fehlende Zuständigkeit für die Fiskalpolitik.'
},
/* ---------- WiSo-Ergänzungen (Kompetenzbereiche I–III BW): WK Wirtschaftskreislauf · KJ Konjunktur und Konjunkturpolitik ·
   SV Sozialversicherung und Altersvorsorge · GL EU-Binnenmarkt und Globalisierung · QZ Umwelt und gerechte Verteilung ---------- */
...(() => {
  const td = 'style="border:1px solid var(--linie);padding:3px 8px"';
  const tabL = (kopf, zeilen) => `<div style="overflow-x:auto;margin:6px 0 8px"><table style="border-collapse:collapse;font-size:.86rem">`
    + `<tr>${kopf.map(k => `<th ${td}>${k}</th>`).join('')}</tr>` + zeilen.map(z => `<tr>${z.map(x => `<td ${td}>${x}</td>`).join('')}</tr>`).join('') + `</table></div>`;
  const V = ['Volkswirtschaft'];

  return [
  /* ======================= WK · Wirtschaftskreislauf ======================= */
  {
    id:'WK1', modul:'WK', typ:'berechnung', mehrfach:true, stufe:0, titel:'Der Wirtschaftskreislauf',
    tags:V.concat(['Wirtschaftskreislauf', 'Theorie']),
    text:'Der Wirtschaftskreislauf ist ein vereinfachtes Modell: Er zeigt die Ströme zwischen den Sektoren einer Volkswirtschaft. Jedem <b>Güterstrom</b> (Waren, Dienstleistungen, Arbeitsleistung) steht ein gleich großer <b>Geldstrom</b> in Gegenrichtung gegenüber.'
      + tabL(['Sektor', 'Rolle im Kreislauf'], [
        ['Private Haushalte', 'stellen Arbeit zur Verfügung, erhalten Einkommen, konsumieren und sparen'],
        ['Unternehmen', 'produzieren Güter, zahlen Löhne, investieren'],
        ['Staat', 'erhebt Steuern und Sozialabgaben, zahlt Transfers (z. B. Kindergeld, Bürgergeld) und Subventionen, fragt Güter nach'],
        ['Ausland', 'kauft Exporte und liefert Importe'],
        ['Vermögensänderung (Banken)', 'sammelt die Ersparnisse und stellt sie für Investitionen und Kredite bereit']]),
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Haushalte stellen den Unternehmen ihre Arbeitskraft zur Verfügung und erhalten dafür Einkommen.', richtig:true, weg:'Güterstrom Arbeit – Geldstrom Lohn'},
      {text:'Mit ihrem Einkommen kaufen die Haushalte Konsumgüter; das Geld fließt als Konsumausgaben zu den Unternehmen zurück.', richtig:true, weg:'Kreislauf schließt sich'},
      {text:'Ersparnisse der Haushalte fließen über die Banken (Vermögensänderung) als Kredite zu den Unternehmen für Investitionen.', richtig:true, weg:'Sparen = Investieren im Gleichgewicht'},
      {text:'Kindergeld ist eine Zahlung der Haushalte an den Staat.', fehler:'Es ist eine Transferzahlung des Staates an die Haushalte.'},
      {text:'Exporte führen zu einem Geldstrom vom Ausland an die inländischen Unternehmen.', richtig:true, weg:'Ware hinaus, Geld herein'},
      {text:'Im Modell gibt es nur Geldströme, keine Güterströme.', fehler:'Jedem Güterstrom steht ein Geldstrom in Gegenrichtung gegenüber.'}
    ],
    hinweise:['Wer gibt wem was – und was fließt zurück?'],
    merke:'Kreislauf: Haushalte (Arbeit → Einkommen → Konsum/Sparen) · Unternehmen (Produktion, Löhne, Investitionen) · Staat (Steuern, Transfers, Subventionen) · Ausland (Export/Import) · Vermögensänderung (Sparen → Kredite).'
  },
  blBau('zuordnung', {id:'WK2', modul:'WK', stufe:1, titel:'Welcher Geldstrom ist gemeint?', tags:V.concat(['Wirtschaftskreislauf']),
    text:'Von wem fließt das Geld zu wem?', kategorien:['Unternehmen → Haushalte', 'Haushalte → Unternehmen', 'Haushalte → Staat', 'Staat → Haushalte', 'Staat → Unternehmen', 'Ausland → Unternehmen'], anzahl:8,
    faelle:[
      {t:'Gehalt einer Auszubildenden', k:0}, {t:'Gewinnausschüttung an die Eigentümer', k:0},
      {t:'Kauf eines Smartphones', k:1}, {t:'Miete, Strom und Lebensmittel', k:1, weg:'Konsumausgaben'},
      {t:'Lohnsteuer und Sozialversicherungsbeiträge', k:2}, {t:'Kindergeld', k:3}, {t:'Arbeitslosengeld', k:3, weg:'Transferzahlung'},
      {t:'Zuschuss für den Kauf einer Solaranlage für die Lagerhalle', k:4, weg:'Subvention'}, {t:'Auftrag der Stadt an ein Bauunternehmen', k:4, weg:'Staatsnachfrage'},
      {t:'Ein Kunde aus Frankreich bezahlt eine Lieferung.', k:5, weg:'Export'}
    ],
    hinweise:['Einkommen, Konsum, Abgaben, Transfers, Subventionen, Exporte.'],
    merke:'Löhne und Gewinne: U → H · Konsum: H → U · Steuern/Abgaben: H → St · Transfers: St → H · Subventionen und Staatsaufträge: St → U · Exporte: A → U.'}),
  blBau('rechnung', {id:'WK3', modul:'WK', stufe:2, titel:'Konsum und Sparen im Kreislauf', tags:V.concat(['Wirtschaftskreislauf']), kopf:'Haushalte (Mrd. €)',
    text:'In einer Volkswirtschaft erhalten die privaten Haushalte von den Unternehmen Einkommen von {y}. Vom Staat bekommen sie Transferzahlungen von {tr}; an den Staat zahlen sie Steuern und Sozialabgaben von {st}. Für Konsum geben sie {c} aus, den Rest sparen sie.',
    zeilen:[{id:'y', t:'Einkommen von den Unternehmen', e:'Mrd. €', aus:true}, {id:'tr', t:'Transferzahlungen', e:'Mrd. €', aus:true}, {id:'st', t:'Steuern und Sozialabgaben', e:'Mrd. €', aus:true}, {id:'c', t:'Konsumausgaben', e:'Mrd. €', aus:true},
      {id:'yv', t:'verfügbares Einkommen = Einkommen + Transfers − Steuern/Abgaben', kurz:'verfügbares Einkommen', e:'Mrd. €', f:'y + tr - st'},
      {id:'sp', t:'Ersparnis = verfügbares Einkommen − Konsum', kurz:'Ersparnis', e:'Mrd. €', f:'yv - c'},
      {id:'kq', t:'Konsumquote = Konsum ÷ verfügbares Einkommen × 100', kurz:'Konsumquote', e:'%', f:'c / yv * 100', dez:1},
      {id:'sq', t:'Sparquote = Ersparnis ÷ verfügbares Einkommen × 100', kurz:'Sparquote', e:'%', f:'sp / yv * 100', dez:1}],
    werte:[{y:2400, tr:600, st:900, c:1890}],
    sets:[[{y:2600, tr:650, st:950, c:2047}], [{y:2200, tr:500, st:800, c:1748}], [{y:2800, tr:700, st:1050, c:2156}]],
    wahl:[{id:'w1', t:'Wohin fließt die Ersparnis im Kreislauf?', opts:['über die Banken (Vermögensänderung) als Kredite zu Unternehmen für Investitionen', 'zurück an den Staat', 'ins Ausland'], r:'0'}],
    hinweise:['Verfügbar ist, was nach Abgaben und mit Transfers übrig bleibt.', 'Konsumquote + Sparquote = 100 %.'],
    merke:'Verfügbares Einkommen = Einkommen + Transfers − Steuern/Abgaben = Konsum + Ersparnis · Sparquote = Ersparnis ÷ verfügbares Einkommen × 100.'}),

  /* ======================= KJ · Konjunktur und Konjunkturpolitik ======================= */
  blBau('zuordnung', {id:'KJ1', modul:'KJ', stufe:1, titel:'Konjunkturphasen erkennen', tags:V.concat(['Konjunktur']),
    text:'In welcher Konjunkturphase befindet sich die Wirtschaft?', kategorien:['Aufschwung (Expansion)', 'Hochkonjunktur (Boom)', 'Abschwung (Rezession im weiteren Sinne)', 'Tiefstand (Depression)'], anzahl:8,
    faelle:[
      {t:'Die Auftragseingänge steigen wieder, Unternehmen stellen vorsichtig ein, die Preise sind noch stabil.', k:0},
      {t:'Die Stimmung der Unternehmen hellt sich nach langer Flaute auf; Lager werden abgebaut und wieder aufgefüllt.', k:0},
      {t:'Die Kapazitäten sind voll ausgelastet, es fehlen Fachkräfte, Preise und Löhne steigen stark.', k:1},
      {t:'Lieferzeiten werden länger, Überstunden sind die Regel, die Zinsen steigen.', k:1},
      {t:'Die Nachfrage lässt nach, die Lager füllen sich, Überstunden werden abgebaut.', k:2},
      {t:'Die Investitionen gehen zurück; erste Unternehmen melden Kurzarbeit an.', k:2},
      {t:'Hohe Arbeitslosigkeit, viele Insolvenzen, die Preise sinken teilweise.', k:3},
      {t:'Die Kapazitäten sind kaum ausgelastet, die Stimmung ist pessimistisch, kaum jemand investiert.', k:3}
    ],
    hinweise:['Auslastung, Beschäftigung, Preise, Stimmung.'],
    merke:'Aufschwung: Aufträge und Stimmung steigen · Boom: Vollauslastung, Preise und Löhne steigen · Abschwung: Nachfrage sinkt, Lager voll, Kurzarbeit · Tiefstand: hohe Arbeitslosigkeit, Pessimismus.'}),
  blBau('zuordnung', {id:'KJ2', modul:'KJ', stufe:1, titel:'Konjunkturindikatoren', tags:V.concat(['Konjunktur', 'Indikatoren']),
    text:'Indikatoren zeigen die konjunkturelle Lage. Handelt es sich um einen Früh-, Präsenz- (Gegenwarts-) oder Spätindikator?', kategorien:['Frühindikator', 'Präsenzindikator', 'Spätindikator'], anzahl:7,
    faelle:[
      {t:'ifo-Geschäftsklimaindex (Erwartungen der Unternehmen)', k:0}, {t:'Auftragseingänge in der Industrie', k:0}, {t:'Baugenehmigungen', k:0},
      {t:'Kapazitätsauslastung', k:1}, {t:'Produktion und Umsätze im Handel', k:1}, {t:'reales Bruttoinlandsprodukt', k:1},
      {t:'Zahl der Arbeitslosen', k:2, weg:'Unternehmen entlassen und stellen erst mit Verzögerung ein'}, {t:'Verbraucherpreise (Inflationsrate)', k:2}, {t:'Lagerbestände', k:2, weg:'reagieren verzögert auf Nachfrageänderungen'}
    ],
    hinweise:['Zeigt die Größe, was kommt, was ist, oder was schon war?'],
    merke:'Frühindikatoren: Geschäftsklima, Auftragseingänge, Baugenehmigungen · Präsenz: Produktion, Kapazitätsauslastung, BIP · Spät: Arbeitslosigkeit, Preise, Lagerbestände.'}),
  blBau('zuordnung', {id:'KJ3', modul:'KJ', stufe:2, titel:'Antizyklische Konjunkturpolitik', tags:V.concat(['Konjunktur', 'Konjunkturpolitik']),
    text:'Der Staat soll antizyklisch handeln: in der Krise die Nachfrage anregen, im Boom bremsen. Wann passt die Maßnahme?', kategorien:['im Abschwung/Tiefstand (Nachfrage anregen)', 'im Boom (Nachfrage dämpfen)'], anzahl:8,
    faelle:[
      {t:'Einkommensteuer senken', k:0}, {t:'Staatsaufträge vorziehen, z. B. Schulen sanieren', k:0}, {t:'Investitionszulagen und Sonderabschreibungen für Unternehmen', k:0},
      {t:'Kurzarbeitergeld verlängern', k:0}, {t:'Kaufprämien bzw. Subventionen für bestimmte Güter', k:0},
      {t:'Steuern erhöhen', k:1}, {t:'Staatsausgaben kürzen und Schulden tilgen', k:1}, {t:'Subventionen abbauen', k:1}, {t:'Abschreibungsmöglichkeiten einschränken', k:1}, {t:'Konjunkturausgleichsrücklage bilden', k:1}
    ],
    hinweise:['Mehr Geld in die Wirtschaft – oder weniger?'],
    merke:'Antizyklische Fiskalpolitik: Krise → Steuern ↓, Staatsausgaben und Subventionen ↑ (Deficit Spending) · Boom → Steuern ↑, Ausgaben ↓, Rücklagen bilden.'}),
  {
    id:'KJ4', modul:'KJ', typ:'berechnung', mehrfach:true, stufe:2, titel:'Konjunktur im Ausbildungsbetrieb und Grenzen der Konjunkturpolitik',
    tags:V.concat(['Konjunktur', 'Konjunkturpolitik']),
    text:'Die Wirtschaft befindet sich im Abschwung. Die Pfalz-Handel GmbH, ein Großhändler für Haushaltswaren, spürt die Folgen; die Bundesregierung beschließt ein Konjunkturprogramm.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Im Abschwung sinken die Bestellungen der Einzelhändler, die Lager des Großhändlers füllen sich.', richtig:true, weg:'Folgen für den Betrieb'},
      {text:'Das Unternehmen kann Kurzarbeit beantragen, um Entlassungen zu vermeiden.', richtig:true, weg:'Kurzarbeitergeld der Bundesagentur für Arbeit'},
      {text:'Für Auszubildende kann eine Rezession die Chance auf Übernahme verringern.', richtig:true, weg:'Folgen für die eigene Lebenssituation'},
      {text:'Bis eine Maßnahme beschlossen ist und wirkt, kann die Konjunktur schon wieder gedreht haben (Wirkungsverzögerung).', richtig:true, weg:'Time-Lags'},
      {text:'Konjunkturprogramme auf Kredit erhöhen die Staatsverschuldung; die Schuldenbremse begrenzt den Spielraum.', richtig:true, weg:'Grenzen'},
      {text:'Steuersenkungen wirken immer sofort, weil Haushalte zusätzliches Geld vollständig ausgeben.', fehler:'Haushalte sparen in unsicheren Zeiten oft einen Teil (Sparneigung steigt).'}
    ],
    hinweise:['Was merkt der Betrieb? Warum wirkt Politik nicht immer?'],
    merke:'Konjunktur trifft Betrieb (Aufträge, Lager, Kurzarbeit) und Beschäftigte (Übernahme, Einkommen) · Grenzen der Konjunkturpolitik: Wirkungsverzögerung, Staatsverschuldung/Schuldenbremse, Sparverhalten, Mitnahmeeffekte.'
  },

  /* ======================= SV · Sozialversicherung und Altersvorsorge ======================= */
  {
    id:'SV1', modul:'SV', typ:'berechnung', mehrfach:true, stufe:0, titel:'Die fünf Zweige der Sozialversicherung',
    tags:V.concat(['Sozialversicherung', 'Theorie']),
    text:'Die gesetzliche Sozialversicherung schützt Arbeitnehmerinnen und Arbeitnehmer gegen große Lebensrisiken. Sie ist eine <b>Pflichtversicherung</b> und wird nach dem <b>Solidaritätsprinzip</b> und – bei der Rente – im <b>Umlageverfahren</b> finanziert.'
      + tabL(['Zweig', 'Träger', 'Finanzierung', 'wichtige Leistungen'], [
        ['Krankenversicherung', 'Krankenkassen (AOK, Ersatzkassen …)', 'Arbeitnehmer und Arbeitgeber je zur Hälfte (inkl. Zusatzbeitrag)', 'Arzt, Krankenhaus, Medikamente, Krankengeld ab der 7. Woche'],
        ['Pflegeversicherung', 'Pflegekassen (bei den Krankenkassen)', 'je zur Hälfte (Kinderlose zahlen einen Zuschlag)', 'Pflegegeld, Pflegesachleistungen, stationäre Pflege'],
        ['Rentenversicherung', 'Deutsche Rentenversicherung', 'je zur Hälfte + Bundeszuschuss', 'Altersrente, Erwerbsminderungsrente, Hinterbliebenenrente, Reha'],
        ['Arbeitslosenversicherung', 'Bundesagentur für Arbeit', 'je zur Hälfte', 'Arbeitslosengeld, Kurzarbeitergeld, Vermittlung, Weiterbildung'],
        ['Unfallversicherung', 'Berufsgenossenschaften', '<b>nur Arbeitgeber</b>', 'Heilbehandlung und Rente nach Arbeits- und Wegeunfall, Berufskrankheit; Unfallverhütung']]),
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Die Beiträge zur Unfallversicherung zahlt allein der Arbeitgeber.', richtig:true, weg:'Berufsgenossenschaft'},
      {text:'Die ersten sechs Wochen einer Krankheit zahlt der Arbeitgeber das Gehalt weiter, danach zahlt die Krankenkasse Krankengeld.', richtig:true, weg:'Entgeltfortzahlung'},
      {text:'Solidaritätsprinzip: Alle zahlen nach ihrem Einkommen, Leistungen erhalten sie nach ihrem Bedarf.', richtig:true, weg:'Gesunde tragen Kranke mit'},
      {text:'Umlageverfahren: Die Beiträge der heutigen Beschäftigten finanzieren die Renten der heutigen Rentner (Generationenvertrag).', richtig:true, weg:'keine Ansparung'},
      {text:'Auszubildende sind von der Sozialversicherung befreit.', fehler:'Auszubildende sind versicherungspflichtig; bei sehr geringer Vergütung trägt der Arbeitgeber die Beiträge allein.'},
      {text:'Die Arbeitslosenversicherung wird von den Krankenkassen verwaltet.', fehler:'Träger ist die Bundesagentur für Arbeit.'}
    ],
    hinweise:['Zweig – Träger – wer zahlt – was gibt es?'],
    merke:'Fünf Zweige: Kranken-, Pflege-, Renten-, Arbeitslosen- (je ½ AN/AG) und Unfallversicherung (nur AG) · Solidaritätsprinzip · Rente im Umlageverfahren (Generationenvertrag).'
  },
  blBau('zuordnung', {id:'SV2', modul:'SV', stufe:1, titel:'Wer ist zuständig?', tags:V.concat(['Sozialversicherung']),
    text:'Welcher Zweig der Sozialversicherung (bzw. wer) leistet?', kategorien:['Krankenversicherung', 'Pflegeversicherung', 'Rentenversicherung', 'Arbeitslosenversicherung', 'Unfallversicherung', 'Arbeitgeber (Entgeltfortzahlung)'], anzahl:9,
    faelle:[
      {t:'Lea bricht sich beim Fußball in der Freizeit das Bein; der Arzt behandelt sie.', k:0},
      {t:'Ein Lagerist verletzt sich beim Abladen eines Lkw.', k:4, weg:'Arbeitsunfall'},
      {t:'Ein Azubi stürzt auf dem direkten Weg zur Berufsschule mit dem Fahrrad.', k:4, weg:'Wegeunfall'},
      {t:'Ein Mitarbeiter ist drei Wochen krank – sein Gehalt läuft weiter.', k:5},
      {t:'Eine Mitarbeiterin ist seit zehn Wochen krank und erhält Krankengeld.', k:0},
      {t:'Ein Kollege verliert seinen Arbeitsplatz und erhält Arbeitslosengeld.', k:3},
      {t:'Wegen Auftragsmangel arbeitet die Belegschaft kurz; Kurzarbeitergeld wird gezahlt.', k:3},
      {t:'Die Großmutter einer Auszubildenden ist pflegebedürftig (Pflegegrad 3).', k:1},
      {t:'Eine Kollegin geht mit 67 Jahren in Rente.', k:2},
      {t:'Nach einer Krebserkrankung erhält ein Mitarbeiter eine Reha, damit er wieder arbeiten kann.', k:2, weg:'Reha zur Erhaltung der Erwerbsfähigkeit'},
      {t:'Ein Lagerarbeiter erkrankt durch jahrelangen Lärm an Schwerhörigkeit.', k:4, weg:'Berufskrankheit'}
    ],
    hinweise:['Arbeit oder Freizeit? Wie lange krank? Arbeitslos, pflegebedürftig, alt?'],
    merke:'Krankheit: 6 Wochen Arbeitgeber, dann Krankengeld · Arbeits-/Wegeunfall, Berufskrankheit: Unfallversicherung · Arbeitslosigkeit, Kurzarbeit: Arbeitslosenversicherung · Alter, Erwerbsminderung, Reha: Rentenversicherung · Pflege: Pflegeversicherung.'}),
  blBau('rechnung', {id:'SV3', modul:'SV', stufe:2, titel:'Sozialversicherungsbeiträge berechnen', tags:V.concat(['Sozialversicherung']), kopf:'Beiträge im Monat',
    text:'Ein Mitarbeiter der Pfalz-Handel GmbH verdient {br@0} brutto im Monat (unterhalb der Beitragsbemessungsgrenzen). Berechne für jeden Zweig den Gesamtbeitrag sowie den Anteil von Arbeitnehmer und Arbeitgeber (je zur Hälfte). Beitragssätze (angenommen; es gilt jeweils der aktuelle Satz): Krankenversicherung {sz@0} (inkl. durchschnittlichem Zusatzbeitrag), Pflegeversicherung {sz@1} (Mitarbeiter mit Kind), Rentenversicherung {sz@2}, Arbeitslosenversicherung {sz@3}.',
    spalten:['Kranken', 'Pflege', 'Rente', 'Arbeitslosen'],
    zeilen:[{id:'br', t:'Bruttogehalt', e:'€', aus:true}, {id:'sz', t:'Beitragssatz', e:'%', aus:true},
      {id:'ge', t:'Gesamtbeitrag = Bruttogehalt × Beitragssatz', kurz:'Gesamtbeitrag', e:'€', f:'br * sz / 100'},
      {id:'an', t:'Arbeitnehmeranteil = Gesamtbeitrag ÷ 2', kurz:'Arbeitnehmeranteil', e:'€', f:'ge / 2'},
      {id:'ag', t:'Arbeitgeberanteil = Gesamtbeitrag − Arbeitnehmeranteil', kurz:'Arbeitgeberanteil', e:'€', f:'ge - an'}],
    werte:[{br:3200, sz:17.5}, {br:3200, sz:3.6}, {br:3200, sz:18.6}, {br:3200, sz:2.6}],
    sets:[2800, 3600, 4100].map(b => [{br:b, sz:17.5}, {br:b, sz:3.6}, {br:b, sz:18.6}, {br:b, sz:2.6}]),
    wahl:[{id:'w1', t:'Wer zahlt die Beiträge zur Unfallversicherung?', opts:['allein der Arbeitgeber', 'Arbeitnehmer und Arbeitgeber je zur Hälfte', 'allein der Arbeitnehmer'], r:'0'},
          {id:'w2', t:'Warum zahlen Kinderlose in der Pflegeversicherung einen Zuschlag?', opts:['Sie tragen keine Kinder als künftige Beitragszahler bei (Urteil des Bundesverfassungsgerichts).', 'Weil sie häufiger pflegebedürftig werden.', 'Weil sie mehr verdienen.'], r:'0'}],
    hinweise:['Gesamtbeitrag = Brutto × Satz ÷ 100.', 'Arbeitnehmer und Arbeitgeber teilen sich den Beitrag je zur Hälfte.'],
    merke:'Beitrag = Bruttogehalt × Beitragssatz; Kranken-, Pflege-, Renten- und Arbeitslosenversicherung je zur Hälfte, Unfallversicherung nur Arbeitgeber – die Arbeitnehmeranteile werden vom Gehalt abgezogen.'}),
  {
    id:'SV4', modul:'SV', typ:'berechnung', mehrfach:true, stufe:2, titel:'Probleme der sozialen Sicherung',
    tags:V.concat(['Sozialversicherung', 'Demografischer Wandel']),
    text:'Die Menschen in Deutschland werden älter, gleichzeitig kommen weniger Kinder zur Welt; die geburtenstarken Jahrgänge gehen in Rente. Im Jahr 1962 kamen etwa sechs Beitragszahler auf einen Rentner, heute sind es knapp zwei.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Beim Umlageverfahren müssen immer weniger Beitragszahler die Renten von immer mehr Rentnern finanzieren.', richtig:true, weg:'demografischer Wandel'},
      {text:'Steigende Lebenserwartung verlängert die Rentenbezugsdauer und erhöht die Ausgaben auch der Kranken- und Pflegeversicherung.', richtig:true, weg:'mehr ältere Menschen'},
      {text:'Mögliche Lösungsansätze sind höhere Beiträge, ein späterer Renteneintritt, ein niedrigeres Rentenniveau oder höhere Steuerzuschüsse.', richtig:true, weg:'jeweils mit Zielkonflikten'},
      {text:'Qualifizierte Zuwanderung und eine höhere Erwerbsbeteiligung (z. B. von Frauen und Älteren) erhöhen die Zahl der Beitragszahler.', richtig:true, weg:'mehr Einzahler'},
      {text:'Weil die gesetzliche Rente den Lebensstandard oft nicht sichert, wird zusätzliche betriebliche und private Vorsorge immer wichtiger.', richtig:true, weg:'Versorgungslücke'},
      {text:'Der demografische Wandel betrifft nur die Rentenversicherung.', fehler:'Auch Kranken- und Pflegeversicherung sind stark betroffen.'}
    ],
    hinweise:['Weniger Junge, mehr Alte – was bedeutet das für Einnahmen und Ausgaben?'],
    merke:'Demografischer Wandel: weniger Beitragszahler, mehr Leistungsempfänger · Ansätze: Beiträge ↑, Rentenalter ↑, Rentenniveau ↓, Steuerzuschuss ↑, Zuwanderung, Erwerbsbeteiligung, zusätzliche Vorsorge.'
  },
  blBau('zuordnung', {id:'SV5', modul:'SV', stufe:2, titel:'Drei-Schichten-Modell der Altersvorsorge', tags:V.concat(['Altersvorsorge']),
    text:'Das Drei-Schichten-Modell ordnet die Altersvorsorge nach Förderung und Verfügbarkeit. In welche Schicht gehört die Vorsorgeform? (Es gilt jeweils die aktuelle Rechtslage.)', kategorien:['1. Schicht: Basisversorgung', '2. Schicht: staatlich geförderte Zusatzversorgung', '3. Schicht: private Vorsorge ohne besondere Förderung'], anzahl:7,
    faelle:[
      {t:'gesetzliche Rentenversicherung', k:0}, {t:'Basisrente („Rürup-Rente“), z. B. für Selbstständige', k:0}, {t:'berufsständische Versorgung, z. B. für Ärzte', k:0},
      {t:'betriebliche Altersvorsorge (z. B. Entgeltumwandlung, Direktversicherung)', k:1}, {t:'staatlich geförderte private Altersvorsorge mit Zulagen („Riester“)', k:1},
      {t:'ETF-Sparplan auf einem normalen Depot', k:2}, {t:'private Rentenversicherung ohne Förderung', k:2}, {t:'Sparbuch, Tagesgeld oder eigene Immobilie', k:2}
    ],
    hinweise:['Gesetzlich/Basis – gefördert mit Arbeitgeber oder Zulage – frei verfügbar.'],
    merke:'1. Schicht: gesetzliche Rente, Basisrente · 2. Schicht: betriebliche Altersvorsorge, geförderte private Vorsorge · 3. Schicht: private Vorsorge (ETF, Versicherungen, Immobilie) – flexibel, aber ohne besondere Förderung.'}),

  /* ======================= GL · EU-Binnenmarkt und Globalisierung ======================= */
  {
    id:'GL1', modul:'GL', typ:'berechnung', mehrfach:true, stufe:0, titel:'Der EU-Binnenmarkt',
    tags:V.concat(['Europa', 'Binnenmarkt', 'Theorie']),
    text:'Der europäische Binnenmarkt ist ein Raum ohne Binnengrenzen. Er beruht auf den <b>vier Grundfreiheiten</b>: freier Warenverkehr, Personenfreizügigkeit (Arbeitnehmer und Niederlassung), Dienstleistungsfreiheit und freier Kapital- und Zahlungsverkehr. Nach außen hat die EU einen gemeinsamen Zolltarif (Zollunion).',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Zwischen EU-Staaten fallen keine Zölle an.', richtig:true, weg:'Zollunion'},
      {text:'Ein deutscher Großhändler kann ohne Zollformalitäten Ware aus Italien beziehen.', richtig:true, weg:'freier Warenverkehr'},
      {text:'Gegenüber Drittländern wie China erhebt die EU einheitliche Zölle.', richtig:true, weg:'gemeinsamer Außenzoll'},
      {text:'Eine Fachkraft aus Polen darf ohne Arbeitserlaubnis in Deutschland arbeiten.', richtig:true, weg:'Arbeitnehmerfreizügigkeit'},
      {text:'Der Binnenmarkt erhöht den Wettbewerb – Verbraucher profitieren von größerer Auswahl und niedrigeren Preisen.', richtig:true, weg:'Vorteile'},
      {text:'Im Binnenmarkt gilt in allen EU-Staaten der Euro.', fehler:'Nicht alle EU-Staaten haben den Euro eingeführt (z. B. Polen, Schweden, Dänemark).'}
    ],
    hinweise:['Waren, Personen, Dienstleistungen, Kapital.'],
    merke:'EU-Binnenmarkt: vier Grundfreiheiten (Waren, Personen, Dienstleistungen, Kapital) · Zollunion mit gemeinsamem Außenzoll · mehr Wettbewerb, größerer Markt – nicht gleichbedeutend mit dem Euro.'
  },
  blBau('zuordnung', {id:'GL2', modul:'GL', stufe:1, titel:'Welche Grundfreiheit wird genutzt?', tags:V.concat(['Europa', 'Binnenmarkt']),
    text:'Welche Grundfreiheit des Binnenmarkts ist betroffen?', kategorien:['freier Warenverkehr', 'Personenfreizügigkeit', 'Dienstleistungsfreiheit', 'freier Kapital- und Zahlungsverkehr'], anzahl:8,
    faelle:[
      {t:'Die Pfalz-Handel GmbH verkauft Gläser an einen Händler in Belgien ohne Zollkontrolle.', k:0},
      {t:'Ein Lebensmittel, das in Frankreich rechtmäßig verkauft wird, darf auch in Deutschland verkauft werden.', k:0},
      {t:'Eine Spanierin zieht nach Mannheim und arbeitet als Lageristin.', k:1},
      {t:'Ein deutscher Händler eröffnet eine Filiale in Österreich.', k:1, weg:'Niederlassungsfreiheit'},
      {t:'Eine niederländische Spedition übernimmt einen Transport von Speyer nach Stuttgart.', k:2},
      {t:'Ein Handwerker aus Tschechien repariert eine Lagerhalle in Ludwigshafen.', k:2},
      {t:'Eine deutsche Familie kauft Aktien eines französischen Unternehmens.', k:3},
      {t:'Eine Überweisung nach Italien kostet nicht mehr als eine Inlandsüberweisung (SEPA).', k:3}
    ],
    hinweise:['Ware, Mensch, Leistung oder Geld?'],
    merke:'Waren: kein Zoll, gegenseitige Anerkennung · Personen: arbeiten und niederlassen · Dienstleistungen: grenzüberschreitend anbieten · Kapital: Geld anlegen und überweisen (SEPA).'}),
  {
    id:'GL3', modul:'GL', typ:'berechnung', mehrfach:true, stufe:1, titel:'Ursachen der Globalisierung',
    tags:V.concat(['Globalisierung']),
    text:'Globalisierung bezeichnet die zunehmende weltweite Verflechtung von Märkten, Unternehmen und Gesellschaften. Viele Haushaltswaren der Pfalz-Handel GmbH werden in Asien hergestellt.',
    frage:'Welche Aussagen beschreiben Ursachen bzw. Grundlagen der Globalisierung?',
    optionen:[
      {text:'Containerschiffe und moderne Logistik haben die Transportkosten stark gesenkt.', richtig:true, weg:'Transport'},
      {text:'Internet und Digitalisierung ermöglichen weltweite Kommunikation und Bestellungen in Echtzeit.', richtig:true, weg:'Information und Kommunikation'},
      {text:'Zölle und Handelshemmnisse wurden durch Handelsabkommen und die Welthandelsorganisation (WTO) abgebaut.', richtig:true, weg:'Liberalisierung'},
      {text:'Unterschiedliche Lohnkosten und Rohstoffvorkommen machen internationale Arbeitsteilung lohnend.', richtig:true, weg:'Kostenvorteile'},
      {text:'Globalisierung entsteht, weil alle Länder die gleichen Produktionskosten haben.', fehler:'Gerade Unterschiede bei Kosten, Ressourcen und Know-how machen Handel vorteilhaft.'}
    ],
    hinweise:['Transport, Kommunikation, Politik, Kosten.'],
    merke:'Ursachen der Globalisierung: sinkende Transport- und Kommunikationskosten, Digitalisierung, Abbau von Handelshemmnissen (WTO, Freihandelsabkommen), Kosten- und Standortunterschiede → internationale Arbeitsteilung.'
  },
  blBau('zuordnung', {id:'GL4', modul:'GL', stufe:2, titel:'Chancen und Risiken der Globalisierung', tags:V.concat(['Globalisierung']),
    text:'Ist die beschriebene Folge aus deutscher Sicht – für Unternehmen, Beschäftigte oder Verbraucher in Deutschland – eher eine Chance oder ein Risiko?', kategorien:['Chance', 'Risiko'], anzahl:8,
    faelle:[
      {t:'Verbraucher erhalten eine größere Auswahl zu niedrigeren Preisen.', k:0},
      {t:'Exportorientierte Unternehmen finden neue Absatzmärkte; dort entstehen Arbeitsplätze.', k:0},
      {t:'Unternehmen können günstiger einkaufen und produzieren.', k:0},
      {t:'In Schwellenländern wächst eine kaufkräftige Mittelschicht – deutsche Exporteure finden neue Kunden.', k:0},
      {t:'Unternehmen aus Schwellenländern holen technisch auf und werden zu Konkurrenten mit niedrigeren Kosten.', k:1},
      {t:'Arbeitsplätze mit geringer Qualifikation werden in Länder mit niedrigen Löhnen verlagert.', k:1},
      {t:'Lieferketten reißen bei Krisen (Pandemie, gesperrte Seewege) – Waren fehlen.', k:1},
      {t:'Abhängigkeit von wenigen Lieferländern bei wichtigen Gütern', k:1},
      {t:'Mehr Transporte belasten Klima und Umwelt.', k:1},
      {t:'Krisen in einem Land breiten sich schnell weltweit aus (z. B. Finanzkrise).', k:1}
    ],
    hinweise:['Wer gewinnt – wer verliert?'],
    merke:'Chancen: Auswahl, niedrige Preise, neue Märkte (auch wachsende Mittelschicht in Schwellenländern), Kostenvorteile · Risiken: neue Konkurrenz aus Schwellenländern, Verlagerung von Arbeitsplätzen, anfällige Lieferketten, Abhängigkeiten, Umweltbelastung, Ausbreitung von Krisen.'}),

  /* ======================= QZ · Umwelt und gerechte Verteilung ======================= */
  {
    id:'QZ1', modul:'QZ', typ:'berechnung', mehrfach:true, stufe:1, titel:'Vom magischen Viereck zum Sechseck',
    tags:V.concat(['Wirtschaftspolitik', 'Ziele']),
    text:'Zu den vier Zielen des Stabilitätsgesetzes kommen zwei <b>qualitative</b> Ziele hinzu: eine <b>lebenswerte Umwelt</b> und eine <b>gerechte Einkommens- und Vermögensverteilung</b> (magisches Sechseck).',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Die Einkommensverteilung kann z. B. an der Lohnquote oder am Gini-Koeffizienten gemessen werden.', richtig:true, weg:'Messgrößen'},
      {text:'Die Umweltqualität kann z. B. an den CO₂-Emissionen oder am Anteil erneuerbarer Energien gemessen werden.', richtig:true, weg:'Messgrößen'},
      {text:'Die progressive Einkommensteuer und Transferzahlungen sollen die Einkommen gerechter verteilen.', richtig:true, weg:'Umverteilung'},
      {text:'Ein CO₂-Preis verteuert klimaschädliche Produktion und soll so den Ausstoß senken.', richtig:true, weg:'marktkonformes Umweltinstrument'},
      {text:'Hohes Wirtschaftswachstum und Umweltschutz stehen nie in Konflikt.', fehler:'Mehr Produktion bedeutet oft mehr Ressourcenverbrauch – Zielkonflikt (außer bei qualitativem Wachstum).'},
      {text:'„Gerecht“ bedeutet, dass alle genau das gleiche Einkommen erhalten.', fehler:'Gemeint ist eine als fair empfundene Verteilung (Leistung und Bedarf), nicht Gleichheit.'}
    ],
    hinweise:['Wie misst man Umwelt und Verteilung? Mit welchen Mitteln greift der Staat ein?'],
    merke:'Magisches Sechseck = Viereck + lebenswerte Umwelt + gerechte Einkommens- und Vermögensverteilung · Instrumente: CO₂-Preis, Auflagen, Förderung · progressive Steuer, Transfers, Mindestlohn.'
  },
  blBau('zuordnung', {id:'QZ2', modul:'QZ', stufe:2, titel:'Zielharmonie oder Zielkonflikt?', tags:V.concat(['Wirtschaftspolitik', 'Ziele']),
    text:'Wie wirkt die Maßnahme auf die beiden genannten Ziele?', kategorien:['Zielharmonie', 'Zielkonflikt'], anzahl:6,
    faelle:[
      {t:'Investitionen in Wärmedämmung schaffen Arbeitsplätze und senken den Energieverbrauch (Beschäftigung – Umwelt).', k:0},
      {t:'Ein starkes Wirtschaftswachstum erhöht den Rohstoff- und Energieverbrauch (Wachstum – Umwelt).', k:1},
      {t:'Ein hoher CO₂-Preis verteuert Energie und erhöht die Preise (Umwelt – Preisniveaustabilität).', k:1},
      {t:'Ein hoher CO₂-Preis belastet Haushalte mit geringem Einkommen besonders (Umwelt – gerechte Verteilung).', k:1, weg:'deshalb Ausgleich, z. B. Klimageld, diskutiert'},
      {t:'Mehr Beschäftigung senkt Arbeitslosigkeit und verringert Einkommensunterschiede (Beschäftigung – Verteilung).', k:0},
      {t:'Stark steigende Löhne für Geringverdiener erhöhen die Kosten der Unternehmen und die Preise (Verteilung – Preisniveau).', k:1},
      {t:'Wachstum mit neuen Umwelttechnologien („grünes Wachstum“) (Wachstum – Umwelt)', k:0}
    ],
    hinweise:['Fördert die Maßnahme beide Ziele – oder geht das eine auf Kosten des anderen?'],
    merke:'Zielharmonie: ein Ziel fördert das andere · Zielkonflikt: ein Ziel geht auf Kosten des anderen – die qualitativen Ziele verschärfen viele Konflikte, z. B. Wachstum ↔ Umwelt, Umwelt ↔ Preise/Verteilung.'}),
  blBau('zuordnung', {id:'QZ3', modul:'QZ', stufe:2, titel:'Harmonie, Konflikt oder Indifferenz?', tags:V.concat(['Wirtschaftspolitik', 'Ziele', 'Zielbeziehungen']),
    text:'Analysiere die Wirkung der wirtschaftspolitischen Maßnahme auf die beiden genannten Ziele. <b>Zielindifferenz</b> heißt: Die Maßnahme für das eine Ziel hat keine (nennenswerte) Wirkung auf das andere.', kategorien:['Zielharmonie', 'Zielkonflikt', 'Zielindifferenz'], anzahl:7,
    faelle:[
      {t:'Der Staat erhöht die Investitionen in Schulen und Straßen, um die Arbeitslosigkeit zu senken (Beschäftigung – Wachstum).', k:0, weg:'mehr Nachfrage → mehr Produktion und Beschäftigung'},
      {t:'Die EZB senkt den Leitzins, um die Konjunktur anzukurbeln (Wachstum – Preisniveaustabilität).', k:1, weg:'mehr Nachfrage kann die Preise steigen lassen'},
      {t:'Der Staat senkt die Einkommensteuer, um den Konsum zu stärken (Beschäftigung – außenwirtschaftliches Gleichgewicht).', k:1, weg:'mehr Importe, Überschuss ändert sich'},
      {t:'Steuererhöhungen zur Bekämpfung der Inflation dämpfen die Nachfrage (Preisniveau – Beschäftigung).', k:1},
      {t:'Ein Programm zur Weiterbildung von Langzeitarbeitslosen senkt die Arbeitslosigkeit und erhöht die Einkommen der Betroffenen (Beschäftigung – gerechte Verteilung).', k:0},
      {t:'Eine Förderung der Wärmedämmung von Gebäuden senkt CO₂-Emissionen und belebt das Baugewerbe (Umwelt – Wachstum).', k:0},
      {t:'Die Bundesregierung ändert die Regeln für die Barrierefreiheit von Websites (Preisniveaustabilität – außenwirtschaftliches Gleichgewicht).', k:2, weg:'keine erkennbare Wirkung auf beide Ziele'},
      {t:'Eine Reform des Kündigungsschutzes im Kleinbetrieb wird beschlossen (Preisniveaustabilität – Umweltschutz).', k:2},
      {t:'Die Regierung führt eine neue Regel zur Ladenöffnung an Feiertagen ein (außenwirtschaftliches Gleichgewicht – Umweltschutz).', k:2}
    ],
    hinweise:['Harmonie: beide Ziele werden gefördert · Konflikt: ein Ziel leidet · Indifferenz: kein (erkennbarer) Zusammenhang.'],
    merke:'Zielharmonie (komplementär) · Zielkonflikt (konkurrierend) · Zielindifferenz (neutral): Maßnahmen für ein Ziel beeinflussen das andere nicht. Ob Harmonie oder Konflikt vorliegt, hängt oft von der Lage und der Maßnahme ab.'}),
  ]; })(),
/* ---------- Volkswirtschaft · Mikroökonomie (BKFH Wirtschaft LPE 2) ----------
   HB Bedürfnisse und ökonomisches Prinzip · NU Nutzentheorie und Haushaltsoptimum · EL Elastizitäten
   MP Polypol mathematisch (Gleichgewicht, Renten, Verschiebungen, Gesamtangebot) · MM Monopol mathematisch (Cournot, Preisdifferenzierung, Preisspielraum)
   Rechenaufgaben mit vorberechneten Lösungen (ma-helfer.js: maSaetze, maMit, maAus, maZ). */
...(() => {
  const T = ['Volkswirtschaft', 'Mikroökonomie'];
  const NR = ['①', '②', '③', '④'];
  const rd = v => Math.abs(v) < 1e-9 ? 0 : maR(v);
  const eu = v => maZ(v) + ' €';
  const elW = v => Math.abs(v) > 1 ? 0 : Math.abs(v) < 1 ? 1 : 2;   // elastisch / unelastisch / proportional
  return [
  /* ======================= HB · Bedürfnisse und ökonomisches Prinzip ======================= */
  blBau('zuordnung', {id:'HB1', modul:'HB', stufe:1, titel:'Bedürfnis, Bedarf oder Nachfrage?', tags:T.concat(['Bedürfnisse']),
    text:'Ordne zu.', kategorien:['Bedürfnis (Mangelempfinden)', 'Bedarf (mit Kaufkraft verbunden)', 'Nachfrage (am Markt wirksam)'], anzahl:7,
    faelle:[
      {t:'Lena hat Durst.', k:0}, {t:'Tim wünscht sich ein Elektroauto, hat aber kein Geld dafür.', k:0, weg:'ohne Kaufkraft bleibt es ein Bedürfnis'}, {t:'Ein Student möchte mehr Freizeit.', k:0},
      {t:'Ayşe hat 900 € gespart und will damit ein neues Smartphone kaufen.', k:1, weg:'Kaufkraft vorhanden, noch kein Kauf'}, {t:'Ein Betrieb hat Geld für eine neue Maschine eingeplant.', k:1},
      {t:'Jonas bestellt im Onlineshop Laufschuhe für 120 €.', k:2, weg:'der Kauf tritt am Markt auf'}, {t:'Ein Hotel kauft beim Großhändler 200 Handtücher.', k:2}, {t:'Familie Weber kauft im Supermarkt ein.', k:2}
    ],
    hinweise:['Bedürfnis: Gefühl eines Mangels.', 'Bedarf: Bedürfnis + Kaufkraft.', 'Nachfrage: Bedarf, der am Markt als Kauf wirksam wird.'],
    merke:'Bedürfnis (Mangelempfinden) → Bedarf (mit Kaufkraft) → Nachfrage (am Markt wirksamer Bedarf).'}),
  blBau('zuordnung', {id:'HB2', modul:'HB', stufe:1, titel:'Ökonomisches Prinzip', tags:T.concat(['Ökonomisches Prinzip']),
    text:'Welche Ausprägung des ökonomischen Prinzips liegt vor?', kategorien:['Maximalprinzip', 'Minimalprinzip', 'kein ökonomisches Prinzip'], anzahl:7,
    faelle:[
      {t:'Mit einem Werbebudget von 10.000 € sollen möglichst viele Kunden erreicht werden.', k:0}, {t:'Mit 50 € Taschengeld möglichst viele Kinokarten kaufen.', k:0}, {t:'Mit der vorhandenen Maschine in einer Schicht möglichst viel produzieren.', k:0},
      {t:'Eine bestimmte Menge Kopierpapier zum günstigsten Preis einkaufen.', k:1}, {t:'Die Strecke Stuttgart–Berlin mit möglichst wenig Treibstoff fahren.', k:1}, {t:'Ein festgelegtes Umsatzziel mit möglichst geringen Kosten erreichen.', k:1},
      {t:'Mit möglichst wenig Geld möglichst viel kaufen.', k:2, weg:'beides zugleich ist nicht möglich'}, {t:'Mit möglichst geringem Aufwand den größtmöglichen Ertrag erzielen.', k:2, weg:'unlösbare Doppelforderung'}
    ],
    hinweise:['Maximalprinzip: Mittel fest, Ergebnis maximieren.', 'Minimalprinzip: Ergebnis fest, Mittel minimieren.'],
    merke:'Maximalprinzip: gegebene Mittel → größtmöglicher Erfolg; Minimalprinzip: gegebener Erfolg → geringstmögliche Mittel; „Maximum mit Minimum“ ist kein ökonomisches Prinzip.'}),
  blBau('zuordnung', {id:'HB3', modul:'HB', stufe:1, titel:'Produktionsfaktoren', tags:T.concat(['Produktionsfaktoren']),
    text:'Welcher volkswirtschaftliche Produktionsfaktor ist gemeint?', kategorien:['Arbeit', 'Boden (Natur)', 'Kapital'], anzahl:7,
    faelle:[
      {t:'die Tätigkeit einer Bankkauffrau', k:0}, {t:'ein Programmierer entwickelt Software', k:0}, {t:'der Landwirt erntet Getreide', k:0},
      {t:'Ackerfläche', k:1}, {t:'Erdöl im Boden', k:1}, {t:'ein Standort am Fluss für ein Wasserkraftwerk', k:1},
      {t:'eine CNC-Maschine', k:2, weg:'produziertes Produktionsmittel (Realkapital)'}, {t:'ein Lieferwagen des Betriebs', k:2}, {t:'eine Lagerhalle', k:2}
    ],
    hinweise:['Kapital im volkswirtschaftlichen Sinn: produzierte Produktionsmittel (Maschinen, Gebäude), nicht Geld.'],
    merke:'Volkswirtschaftliche Produktionsfaktoren: Arbeit, Boden (Natur) und Kapital (produzierte Produktionsmittel).'}),
  {
    id:'HB4', modul:'HB', typ:'berechnung', mehrfach:true, stufe:0, titel:'Konsum und Sparen',
    tags:T.concat(['Theorie', 'Konsum', 'Sparen']),
    text:'Private Haushalte teilen ihr verfügbares Einkommen auf.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Verfügbares Einkommen = Konsum + Sparen.', richtig:true, weg:'was nicht konsumiert wird, wird gespart'},
      {text:'Die Sparquote gibt den Anteil des Sparens am verfügbaren Einkommen an.', richtig:true, weg:'Sparen ÷ verfügbares Einkommen'},
      {text:'Steigt das Einkommen, steigt meist auch das Sparen.', richtig:true, weg:'Konsum steigt unterproportional'},
      {text:'Ersparnisse der Haushalte können über Banken als Kredite für Investitionen der Unternehmen dienen.', richtig:true, weg:'Kapitalbildung'},
      {text:'Sparen heißt, Geld auszugeben.', fehler:'Sparen ist Konsumverzicht.'}
    ],
    hinweise:['Wofür kann ein Haushalt sein Einkommen verwenden?'],
    merke:'Einkommen = Konsum + Sparen; Sparquote = Sparen ÷ verfügbares Einkommen; Sparen ermöglicht Investitionen.'
  },

  /* ======================= NU · Nutzentheorie und Haushaltsoptimum ======================= */
  blBau('rechnung', {id:'NU1', modul:'NU', stufe:1, titel:'Grenznutzen und 1. Gossen’sches Gesetz', tags:T.concat(['Nutzentheorie', 'Grenznutzen']), kopf:'Grenznutzen',
    text:W => `Ein Haushalt bewertet den Konsum von Pizzastücken mit folgendem Gesamtnutzen (Nutzeneinheiten, kardinale Messung):<br>${W.map((w, i) => `${i + 1}. Stück: Gesamtnutzen ${maZ(w.G)}`).join(' · ')}<br>Berechne den Grenznutzen des jeweiligen Stücks.`,
    spalten:['1. Stück', '2. Stück', '3. Stück', '4. Stück'],
    zeilen:maAus('G', 'Gv').concat([{id:'gn', t:'Grenznutzen', e:'ma', f:'G - Gv', weg:w => `${maZ(w.G)} − ${maZ(w.Gv)} = [gn]`}]),
    ...maMit(maSaetze(2401, 12, R => { const g1 = R.p([20, 24, 30, 16]), d = R.p([4, 6, 5, 8]); const gn = [g1, g1 - d, g1 - 2 * d, g1 - 3 * d]; if (gn[3] < 0) return null;
      let s = 0; return gn.map(x => { const Gv = s; s += x; return {G:s, Gv}; }); })),
    wahl:[{id:'w', t:'Der Grenznutzen nimmt mit jeder weiteren Einheit ab. Das ist', opts:['das 1. Gossen’sche Gesetz (Gesetz vom abnehmenden Grenznutzen)', 'das 2. Gossen’sche Gesetz', 'das Engel’sche Gesetz'], r:'0'}],
    hinweise:['Grenznutzen = Nutzenzuwachs durch die zusätzliche Einheit.', 'GN(n) = Gesamtnutzen(n) − Gesamtnutzen(n − 1).'],
    merke:'1. Gossen’sches Gesetz: Der Grenznutzen nimmt mit zunehmendem Konsum eines Gutes ab (Sättigung).'}),
  blBau('rechnung', {id:'NU2', modul:'NU', stufe:1, titel:'Bilanzgerade', tags:T.concat(['Nutzentheorie', 'Bilanzgerade', 'Budget']), kopf:'Budget',
    text:W => { const w = W[0]; return `Ein Haushalt gibt ${eu(w.E)} pro Monat für Kino (Gut 1, Preis ${eu(w.p1)}) und Bücher (Gut 2, Preis ${eu(w.p2)}) aus.<br>a) Wie viele Kinobesuche bzw. Bücher sind höchstens möglich?<br>b) Stelle die Bilanzgerade x₂ = … auf (Steigung und Achsenabschnitt).<br>c) Wie viele Bücher sind noch möglich, wenn der Haushalt ${w.k} Kinobesuche plant?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('E', 'p1', 'p2', 'k').concat([
      {id:'m1', t:'höchstens Kinobesuche', e:'Stück', f:'E / p1', weg:w => `${maZ(w.E)} ÷ ${maZ(w.p1)} = [m1]`},
      {id:'m2', t:'höchstens Bücher (Achsenabschnitt)', e:'Stück', f:'E / p2', weg:w => `${maZ(w.E)} ÷ ${maZ(w.p2)} = [m2]`},
      {id:'s', t:'Steigung der Bilanzgeraden', e:'ma', f:'0 - p1 / p2', weg:w => `x₂ = ${maZ(w.E / w.p2)} − (${maZ(w.p1)} ÷ ${maZ(w.p2)})·x₁; Steigung = [s]`},
      {id:'b', t:'Bücher bei geplanten Kinobesuchen', e:'Stück', f:'(E - p1 * k) / p2', weg:w => `(${maZ(w.E)} − ${maZ(w.p1)} · ${w.k}) ÷ ${maZ(w.p2)} = [b]`}]),
    ...maMit(maSaetze(2402, 12, R => { const p1 = R.p([8, 10, 12, 15]), p2 = R.p([10, 20, 15, 25]), E = p1 * p2 * R.p([1, 2]) / (p1 % 5 === 0 && p2 % 5 === 0 ? 5 : 1); const k = R.p([2, 3, 4, 5]);
      if (E / p1 % 1 || E / p2 % 1 || (E - p1 * k) / p2 % 1 || E - p1 * k < 0 || E > 400) return null; return [{E, p1, p2, k}]; })),
    hinweise:['Alles für ein Gut ausgeben: Einkommen ÷ Preis.', 'p₁·x₁ + p₂·x₂ = E nach x₂ auflösen.'],
    merke:'Bilanzgerade: p₁·x₁ + p₂·x₂ = E ⇔ x₂ = E/p₂ − (p₁/p₂)·x₁; Steigung = −Preisverhältnis.'}),
  blBau('rechnung', {id:'NU3', modul:'NU', stufe:2, titel:'Haushaltsoptimum nach dem 2. Gossen’schen Gesetz', tags:T.concat(['Nutzentheorie', 'Haushaltsoptimum', 'Grenznutzen']), kopf:'Grenznutzen je Euro',
    text:W => { const w = W[0]; return `Ein Haushalt hat ${eu(w.E)} für Gut A (Preis ${eu(w.pa)}) und Gut B (Preis ${eu(w.pb)}). Die Grenznutzen der 1. bis 5. Einheit:<br>A: ${w.ga.join(' · ')}<br>B: ${w.gb.join(' · ')}<br>Berechne die Grenznutzen je Euro der ersten Einheit und bestimme das Haushaltsoptimum (Mengen so, dass das Budget genau aufgeht und die Grenznutzen je Euro gleich sind).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('E', 'pa', 'pb', 'ga', 'gb', 'La', 'Lb', 'Lx', 'Ly').concat([
      {id:'ea', t:'Grenznutzen je Euro, 1. Einheit A', e:'ma', f:'La', weg:w => `${maZ(w.ga[0])} ÷ ${maZ(w.pa)} = [ea]`},
      {id:'eb', t:'Grenznutzen je Euro, 1. Einheit B', e:'ma', f:'Lb', weg:w => `${maZ(w.gb[0])} ÷ ${maZ(w.pb)} = [eb]`},
      {id:'xa', t:'Menge Gut A im Optimum', e:'Stück', f:'Lx', weg:w => `GN/p gleich bei A: ${maZ(w.ga[w.Lx - 1])} ÷ ${maZ(w.pa)} = ${maZ(w.ga[w.Lx - 1] / w.pa)} und B: ${maZ(w.gb[w.Ly - 1])} ÷ ${maZ(w.pb)} = ${maZ(w.gb[w.Ly - 1] / w.pb)}; x<sub>A</sub> = [xa]`},
      {id:'xb', t:'Menge Gut B im Optimum', e:'Stück', f:'Ly', weg:w => `x<sub>B</sub> = [xb]; Probe: ${w.Lx} · ${maZ(w.pa)} + ${w.Ly} · ${maZ(w.pb)} = ${maZ(w.Lx * w.pa + w.Ly * w.pb)} €`}]),
    ...maMit(maSaetze(2403, 12, R => { const pa = R.p([2, 4, 5]), pb = R.p([2, 3, 4, 5]), q = R.p([2, 3, 4]); const xa = R.g(2, 4), xb = R.g(2, 4);
      // Grenznutzen je Euro fallen; im Optimum gleich q
      const ga = [1, 2, 3, 4, 5].map(i => pa * (q + (xa - i))), gb = [1, 2, 3, 4, 5].map(i => pb * (q + (xb - i))); if (ga[4] <= 0 || gb[4] <= 0) return null;
      // Eindeutigkeit: keine weitere Kombination mit gleichem GN/p und gleichem Budget
      return [{E:xa * pa + xb * pb, pa, pb, ga, gb, La:rd(ga[0] / pa), Lb:rd(gb[0] / pb), Lx:xa, Ly:xb}]; })),
    hinweise:['Grenznutzen je Euro = Grenznutzen ÷ Preis.', 'Der Haushalt kauft immer die Einheit mit dem höchsten Grenznutzen je Euro, bis das Budget aufgebraucht ist.'],
    merke:'2. Gossen’sches Gesetz (Haushaltsoptimum): GN<sub>A</sub> ÷ p<sub>A</sub> = GN<sub>B</sub> ÷ p<sub>B</sub> bei vollständig ausgegebenem Budget.'}),
  blBau('rechnung', {id:'NU4', modul:'NU', stufe:3, titel:'Haushaltsoptimum mit Nutzenfunktion', tags:T.concat(['Nutzentheorie', 'Haushaltsoptimum', 'ordinal']), kopf:'Optimum',
    text:W => { const w = W[0]; return `Die Präferenzen eines Haushalts werden durch die Nutzenfunktion U = x₁ · x₂ beschrieben (Indifferenzkurven: U = konstant). Einkommen ${eu(w.E)}, Preise p₁ = ${eu(w.p1)}, p₂ = ${eu(w.p2)}.<br>a) Im Optimum ist die Steigung der Indifferenzkurve gleich der Steigung der Bilanzgeraden; daraus folgt p₁·x₁ = p₂·x₂. Bestimme die optimalen Mengen.<br>b) Welches Nutzenniveau erreicht der Haushalt?<br>c) Wie ändern sich die Mengen, wenn der Preis von Gut 1 auf ${eu(w.p1n)} steigt?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('E', 'p1', 'p2', 'p1n').concat([
      {id:'x1', t:'x₁ im Optimum', e:'Stück', f:'E / (2 * p1)', weg:w => `p₁x₁ = p₂x₂ und p₁x₁ + p₂x₂ = E ⇒ 2p₁x₁ = E ⇒ x₁ = ${maZ(w.E)} ÷ (2 · ${maZ(w.p1)}) = [x1]`},
      {id:'x2', t:'x₂ im Optimum', e:'Stück', f:'E / (2 * p2)', weg:w => `x₂ = ${maZ(w.E)} ÷ (2 · ${maZ(w.p2)}) = [x2]`},
      {id:'U', t:'Nutzenniveau U', e:'ma', f:'x1 * x2', weg:w => `U = ${maZ(w.E / (2 * w.p1))} · ${maZ(w.E / (2 * w.p2))} = [U]`},
      {id:'x1n', t:'x₁ nach der Preiserhöhung', e:'Stück', f:'E / (2 * p1n)', weg:w => `x₁ = ${maZ(w.E)} ÷ (2 · ${maZ(w.p1n)}) = [x1n] (x₂ bleibt gleich)`}]),
    ...maMit(maSaetze(2404, 12, R => { const p1 = R.p([2, 4, 5]), p2 = R.p([4, 5, 10]), E = R.p([200, 400, 100, 300]), p1n = p1 * 2; return [{E, p1, p2, p1n}]; })),
    hinweise:['Ordinale Nutzentheorie: Indifferenzkurven verbinden gleich gute Güterbündel.', 'Bei U = x₁·x₂ gibt der Haushalt je die Hälfte des Einkommens für jedes Gut aus.'],
    merke:'Haushaltsoptimum: Tangentialpunkt von Bilanzgerade und höchster erreichbarer Indifferenzkurve (Grenzrate der Substitution = Preisverhältnis).'}),
  blBau('zuordnung', {id:'NU5', modul:'NU', stufe:2, titel:'Engel-Schwabe’sche Gesetze', tags:T.concat(['Engel’sches Gesetz', 'Einkommen']),
    text:'Wie verändert sich der Anteil der Ausgaben am Einkommen, wenn das Einkommen eines Haushalts steigt?', kategorien:['Anteil sinkt', 'Anteil steigt'], anzahl:6,
    faelle:[
      {t:'Ausgaben für Grundnahrungsmittel (Engel’sches Gesetz)', k:0}, {t:'Ausgaben für die Wohnungsmiete (Schwabe’sches Gesetz)', k:0, weg:'Mietausgaben steigen absolut, aber unterproportional'},
      {t:'Ausgaben für Brot und Kartoffeln', k:0}, {t:'Ausgaben für Fernreisen', k:1}, {t:'Ausgaben für Kultur und Freizeit', k:1}, {t:'Ausgaben für hochwertige Markenkleidung', k:1}
    ],
    hinweise:['Engel: Je höher das Einkommen, desto geringer der Anteil für Nahrungsmittel.', 'Schwabe: Gleiches gilt für die Miete.'],
    merke:'Engel’sches Gesetz: Mit steigendem Einkommen sinkt der Anteil der Nahrungsmittelausgaben; Schwabe’sches Gesetz: ebenso der Anteil der Mietausgaben.'}),
  {
    id:'NU6', modul:'NU', typ:'berechnung', mehrfach:true, stufe:0, titel:'Kardinale und ordinale Nutzentheorie',
    tags:T.concat(['Theorie', 'Nutzentheorie']),
    text:'Nutzen kann unterschiedlich gemessen werden.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Kardinale Nutzentheorie: Der Nutzen lässt sich in Nutzeneinheiten messen und zahlenmäßig vergleichen.', richtig:true, weg:'Gossen'},
      {text:'Ordinale Nutzentheorie: Der Haushalt kann Güterbündel nur in eine Rangfolge bringen (besser, schlechter, gleich gut).', richtig:true, weg:'Indifferenzkurven'},
      {text:'Alle Punkte einer Indifferenzkurve stiften denselben Nutzen.', richtig:true, weg:'Indifferenz'},
      {text:'Eine weiter vom Ursprung entfernte Indifferenzkurve bedeutet ein höheres Nutzenniveau.', richtig:true, weg:'mehr von beiden Gütern'},
      {text:'Im Haushaltsoptimum schneidet die Bilanzgerade die Indifferenzkurve.', fehler:'Sie berührt (tangiert) die höchste erreichbare Indifferenzkurve.'},
      {text:'Der Nutzen eines Gutes ist für alle Menschen gleich.', fehler:'Nutzen ist subjektiv.'}
    ],
    hinweise:['Messen oder nur ordnen?'],
    merke:'Kardinal: Nutzen messbar (Grenznutzen, Gossen); ordinal: nur Rangfolge (Indifferenzkurven, Bilanzgerade, Tangentialpunkt = Optimum).'
  },

  /* ======================= EL · Elastizitäten ======================= */
  blBau('rechnung', {id:'EL1', modul:'EL', stufe:1, titel:'Direkte Preiselastizität der Nachfrage', tags:T.concat(['Elastizität', 'Preiselastizität']), kopf:'Preiselastizität',
    text:W => `Berechne die direkte Preiselastizität der Nachfrage (prozentuale Mengenänderung ÷ prozentuale Preisänderung, bezogen auf die Ausgangswerte):<br>${W.map((w, i) => `${NR[i]} ${w.g}: Preis ${eu(w.p0)} → ${eu(w.p1)}, Menge ${maZ(w.x0)} → ${maZ(w.x1)} Stück`).join('<br>')}`,
    spalten:['①', '②', '③'],
    zeilen:maAus('g', 'p0', 'p1', 'x0', 'x1', 'Lx', 'Lp', 'Le').concat([
      {id:'dx', t:'Mengenänderung in %', e:'ma', f:'Lx', weg:w => `(${maZ(w.x1)} − ${maZ(w.x0)}) ÷ ${maZ(w.x0)} · 100 = [dx]`},
      {id:'dp', t:'Preisänderung in %', e:'ma', f:'Lp', weg:w => `(${maZ(w.p1)} − ${maZ(w.p0)}) ÷ ${maZ(w.p0)} · 100 = [dp]`},
      {id:'e', t:'Preiselastizität', e:'ma', f:'Le', weg:w => `${maZ(w.Lx)} ÷ ${maZ(w.Lp)} = [e]`}]),
    ...maMit(maSaetze(2411, 12, R => [['Benzin', 1], ['Pauschalreise', 0], ['Kinokarte', 2]].map(([g, typ]) => { const p0 = R.p([2, 4, 5, 10, 20, 40]), dp = R.p([10, 20, 25, -10, -20]);
      const e = typ === 0 ? -R.p([2, 1.5, 3, 2.5]) : typ === 1 ? -R.p([0.2, 0.25, 0.5, 0.4]) : -1; const x0 = R.p([1000, 2000, 400, 800]);
      const x1 = x0 * (1 + e * dp / 100); return {g, p0, p1:rd(p0 * (1 + dp / 100)), x0, x1:rd(x1), Lx:rd(e * dp), Lp:dp, Le:rd(e)}; }))),
    wahl:[0, 1, 2].map(k => ({id:'r' + k, t:`Die Nachfrage ${NR[k]} ist`, opts:['elastisch (|ε| > 1)', 'unelastisch (|ε| < 1)', 'proportional elastisch (|ε| = 1)'], r:`Le@${k} < -1 ? 0 : Le@${k} > -1 ? 1 : 2`})),
    hinweise:['ε = (Δx/x₀ in %) ÷ (Δp/p₀ in %).', 'Bei normaler Nachfrage ist ε negativ; betrachtet wird der Betrag.'],
    merke:'Direkte Preiselastizität ε = prozentuale Mengenänderung ÷ prozentuale Preisänderung; |ε| > 1 elastisch, |ε| < 1 unelastisch.'}),
  blBau('rechnung', {id:'EL2', modul:'EL', stufe:2, titel:'Elastizität und Umsatz', tags:T.concat(['Elastizität', 'Umsatz']), kopf:'Umsatz',
    text:W => { const w = W[0]; return `Ein Anbieter verkauft ${maZ(w.x0)} Stück zu ${eu(w.p0)}. Er senkt den Preis um ${w.d} %. Die Preiselastizität der Nachfrage beträgt ε = ${maZ(w.e)}.<br>a) Um wie viel Prozent ändert sich die Absatzmenge?<br>b) Berechne neue Menge, alten und neuen Umsatz.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('x0', 'p0', 'd', 'e').concat([
      {id:'dx', t:'Mengenänderung in %', e:'ma', f:'e * (0 - d)', weg:w => `ε · Preisänderung = ${maZ(w.e)} · (−${w.d}) = [dx]`},
      {id:'x1', t:'neue Menge', e:'Stück', f:'x0 * (1 + dx / 100)', weg:w => `${maZ(w.x0)} · (1 + ${maZ(-w.e * w.d)} ÷ 100) = [x1]`},
      {id:'u0', t:'alter Umsatz', e:'€', f:'x0 * p0', weg:w => `${maZ(w.x0)} · ${maZ(w.p0)} = [u0]`},
      {id:'u1', t:'neuer Umsatz', e:'€', f:'x1 * p0 * (1 - d / 100)', weg:w => `${maZ(w.x0 * (1 - w.e * w.d / 100))} · ${maZ(w.p0 * (1 - w.d / 100))} = [u1]`}]),
    ...maMit(maSaetze(2412, 12, R => [{x0:R.p([1000, 2000, 5000]), p0:R.p([10, 20, 50, 40]), d:R.p([10, 20]), e:R.p([-2, -0.5, -1.5, -0.25, -3])}])),
    wahl:[{id:'w', t:'Bei elastischer Nachfrage führt eine Preissenkung zu', opts:['steigendem Umsatz', 'sinkendem Umsatz', 'unverändertem Umsatz'], r:'0'}],
    hinweise:['Mengenänderung in % = ε · Preisänderung in %.', 'Umsatz = Preis · Menge.'],
    merke:'Elastische Nachfrage: Preissenkung → Umsatz steigt; unelastische Nachfrage: Preissenkung → Umsatz sinkt.'}),
  blBau('rechnung', {id:'EL3', modul:'EL', stufe:2, titel:'Kreuzpreiselastizität', tags:T.concat(['Elastizität', 'Kreuzpreiselastizität', 'Substitut', 'Komplement']), kopf:'Kreuzpreiselastizität',
    text:W => `Der Preis von Gut A ändert sich; beobachtet wird die Nachfrage nach Gut B. Berechne die indirekte (Kreuz-)Preiselastizität:<br>${W.map((w, i) => `${NR[i]} ${w.t}: Preis A ${w.dp > 0 ? '+' : '−'}${maZ(Math.abs(w.dp))} %, Nachfrage B ${w.dx > 0 ? '+' : '−'}${maZ(Math.abs(w.dx))} %`).join('<br>')}`,
    spalten:['①', '②', '③'],
    zeilen:maAus('t', 'dp', 'dx').concat([{id:'e', t:'Kreuzpreiselastizität', e:'ma', f:'dx / dp', weg:w => `${maZ(w.dx)} ÷ ${maZ(w.dp)} = [e]`}]),
    ...maMit(maSaetze(2413, 12, R => [['A Butter, B Margarine', 1], ['A Drucker, B Druckerpatronen', -1], ['A Kaffee, B Socken', 0]].map(([t, s]) => { const dp = R.p([10, 20, -10, 25]);
      const dx = s === 0 ? 0 : s * dp * R.p([0.5, 0.8, 1.2, 1.5]); return {t, dp, dx:rd(dx)}; }))),
    wahl:[0, 1, 2].map(k => ({id:'r' + k, t:`Die Güter ${NR[k]} sind`, opts:['Substitutionsgüter (ε > 0)', 'Komplementärgüter (ε < 0)', 'unabhängige Güter (ε = 0)'], r:`dx@${k} / dp@${k} > 0 ? 0 : dx@${k} / dp@${k} < 0 ? 1 : 2`})),
    hinweise:['Indirekte Preiselastizität = %-Änderung der Menge von B ÷ %-Änderung des Preises von A.', 'Positiv: Substitute; negativ: Komplemente.'],
    merke:'Kreuzpreiselastizität > 0: Substitutionsgüter; < 0: Komplementärgüter; = 0: unabhängige Güter.'}),
  blBau('rechnung', {id:'EL4', modul:'EL', stufe:2, titel:'Einkommenselastizität', tags:T.concat(['Elastizität', 'Einkommenselastizität']), kopf:'Einkommenselastizität',
    text:W => `Das Einkommen der Haushalte steigt um ${maZ(W[0].dy)} %. Berechne die Einkommenselastizität der Nachfrage:<br>${W.map((w, i) => `${NR[i]} ${w.t}: Nachfrage ${w.dx >= 0 ? '+' : '−'}${maZ(Math.abs(w.dx))} %`).join('<br>')}`,
    spalten:['①', '②', '③'],
    zeilen:maAus('t', 'dy', 'dx').concat([{id:'e', t:'Einkommenselastizität', e:'ma', f:'dx / dy', weg:w => `${maZ(w.dx)} ÷ ${maZ(w.dy)} = [e]`}]),
    ...maMit(maSaetze(2414, 12, R => { const dy = R.p([5, 10, 4, 8]); return [['Grundnahrungsmittel', 0.4], ['Flugreisen', 2], ['einfache Margarine', -0.5]].map(([t, e]) => ({t, dy, dx:rd(e * dy * R.p([1, 0.75, 1.25]))})); })),
    wahl:[0, 1, 2].map(k => ({id:'r' + k, t:`Gut ${NR[k]} ist`, opts:['ein superiores Gut (Luxusgut, ε > 1)', 'ein normales Gut (0 < ε < 1)', 'ein inferiores Gut (ε < 0)'], r:`dx@${k} / dy@${k} > 1 ? 0 : dx@${k} / dy@${k} > 0 ? 1 : 2`})),
    hinweise:['Einkommenselastizität = %-Änderung der Nachfrage ÷ %-Änderung des Einkommens.'],
    merke:'Einkommenselastizität > 1: superiores Gut (Luxusgut); 0 bis 1: normales (relativ inferiores) Gut; < 0: (absolut) inferiores Gut.'}),
  {
    id:'EL5', modul:'EL', typ:'berechnung', mehrfach:true, stufe:0, titel:'Elastizitäten deuten',
    tags:T.concat(['Theorie', 'Elastizität']),
    text:'Elastizitäten messen, wie stark eine Größe auf die Änderung einer anderen reagiert.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Lebensnotwendige Güter ohne Ersatz haben meist eine unelastische Nachfrage.', richtig:true, weg:'z. B. Medikamente'},
      {text:'Gibt es viele Ersatzgüter, ist die Nachfrage eher elastisch.', richtig:true, weg:'Ausweichen möglich'},
      {text:'Bei vollkommen unelastischer Nachfrage verläuft die Nachfragekurve senkrecht.', richtig:true, weg:'Menge reagiert gar nicht'},
      {text:'Ein starres (unelastisches) Angebot kann auf Preissteigerungen kurzfristig kaum mit Mehrproduktion reagieren.', richtig:true, weg:'z. B. Bauland, Ernte'},
      {text:'Eine Preiselastizität von −0,5 bedeutet elastische Nachfrage.', fehler:'|ε| < 1: unelastisch.'},
      {text:'Bei unelastischer Nachfrage erhöht eine Preissenkung den Umsatz.', fehler:'Bei unelastischer Nachfrage sinkt der Umsatz bei Preissenkung.'}
    ],
    hinweise:['Wie stark reagiert die Menge?'],
    merke:'|ε| > 1 elastisch, |ε| < 1 unelastisch; senkrechte Nachfragekurve: vollkommen unelastisch; starres Angebot: Menge kurzfristig fix.'
  },

  /* ======================= MP · Polypol mathematisch ======================= */
  blBau('rechnung', {id:'MP1', modul:'MP', stufe:1, titel:'Gleichgewicht berechnen', tags:T.concat(['Polypol', 'Marktgleichgewicht']), kopf:'Gleichgewicht',
    text:W => { const w = W[0]; return `Auf einem Markt gelten die Nachfragefunktion p<sub>N</sub>(x) = ${maZ(w.a)} − ${maZ(w.b)}x und die Angebotsfunktion p<sub>A</sub>(x) = ${maZ(w.c)} + ${maZ(w.d)}x (x in Tausend Stück, p in €).%%GRAFIK%%Berechne Gleichgewichtsmenge und Gleichgewichtspreis sowie den Umsatz im Gleichgewicht (in Tausend €).`; },
    grafik:W => { const w = W[0]; return maGraf([{f:x => w.a - w.b * x, name:'N'}, {f:x => w.c + w.d * x, name:'A'}], {x0:0, x1:Math.ceil(w.a / w.b), y0:0, y1:w.a + 2, xs:Math.max(1, Math.ceil(w.a / w.b / 10)), ys:Math.max(1, Math.ceil(w.a / 10)), punkte:[[(w.a - w.c) / (w.b + w.d), w.a - w.b * (w.a - w.c) / (w.b + w.d)]]}); },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'c', 'd').concat([
      {id:'x', t:'Gleichgewichtsmenge', e:'Tsd. Stück', f:'(a - c) / (b + d)', weg:w => `${maZ(w.a)} − ${maZ(w.b)}x = ${maZ(w.c)} + ${maZ(w.d)}x ⇔ ${maZ(w.b + w.d)}x = ${maZ(w.a - w.c)} ⇒ x = [x]`},
      {id:'p', t:'Gleichgewichtspreis', e:'€', f:'a - b * x', weg:w => `p = ${maZ(w.a)} − ${maZ(w.b)} · ${maZ((w.a - w.c) / (w.b + w.d))} = [p]`},
      {id:'u', t:'Umsatz', e:'Tsd. €', f:'x * p', weg:w => `${maZ((w.a - w.c) / (w.b + w.d))} · ${maZ(w.a - w.b * (w.a - w.c) / (w.b + w.d))} = [u]`}]),
    ...maMit(maSaetze(2421, 12, R => { const b = R.p([0.5, 1, 2]), d = R.p([0.5, 1, 1.5]), x = R.p([4, 6, 8, 10, 12]), c = R.p([2, 4, 5]), p = c + d * x, a = p + b * x;
      return [{a, b, c, d, X0:x, P0:p}]; })),
    hinweise:['Im Gleichgewicht: p<sub>N</sub>(x) = p<sub>A</sub>(x).', 'x berechnen, dann in eine der Funktionen einsetzen.'],
    merke:'Marktgleichgewicht: Schnittpunkt von Angebots- und Nachfragekurve: p<sub>N</sub>(x) = p<sub>A</sub>(x).'}),
  blBau('rechnung', {id:'MP2', modul:'MP', stufe:2, titel:'Konsumenten- und Produzentenrente', tags:T.concat(['Polypol', 'Konsumentenrente', 'Produzentenrente']), kopf:'Renten',
    text:W => { const w = W[0]; return `Nachfrage p<sub>N</sub>(x) = ${maZ(w.a)} − ${maZ(w.b)}x, Angebot p<sub>A</sub>(x) = ${maZ(w.c)} + ${maZ(w.d)}x (x in Tausend Stück, p in €).<br>a) Bestimme das Gleichgewicht.<br>b) Berechne die Konsumentenrente und die Produzentenrente (in Tausend €; Dreiecksflächen im Schaubild).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'c', 'd').concat([
      {id:'x', t:'Gleichgewichtsmenge', e:'Tsd. Stück', f:'(a - c) / (b + d)', weg:w => `x = (${maZ(w.a)} − ${maZ(w.c)}) ÷ (${maZ(w.b)} + ${maZ(w.d)}) = [x]`},
      {id:'p', t:'Gleichgewichtspreis', e:'€', f:'a - b * x', weg:w => `p = [p]`},
      {id:'KR', t:'Konsumentenrente', e:'Tsd. €', f:'(a - p) * x / 2', weg:w => `½ · (Höchstpreis ${maZ(w.a)} − ${maZ(w.c + w.d * (w.a - w.c) / (w.b + w.d))}) · ${maZ((w.a - w.c) / (w.b + w.d))} = [KR]`},
      {id:'PR', t:'Produzentenrente', e:'Tsd. €', f:'(p - c) * x / 2', weg:w => `½ · (${maZ(w.c + w.d * (w.a - w.c) / (w.b + w.d))} − Mindestpreis ${maZ(w.c)}) · ${maZ((w.a - w.c) / (w.b + w.d))} = [PR]`}]),
    ...maMit(maSaetze(2422, 12, R => { const b = R.p([0.5, 1, 2]), d = R.p([0.5, 1, 1.5]), x = R.p([4, 6, 8, 10]), c = R.p([2, 4, 5]), p = c + d * x; return [{a:p + b * x, b, c, d}]; })),
    hinweise:['Konsumentenrente: Dreieck zwischen Nachfragekurve und Gleichgewichtspreis.', 'Produzentenrente: Dreieck zwischen Gleichgewichtspreis und Angebotskurve.'],
    merke:'Konsumentenrente = ½ · (Prohibitivpreis − p*) · x*; Produzentenrente = ½ · (p* − Mindestpreis der Anbieter) · x*.'}),
  blBau('rechnung', {id:'MP3', modul:'MP', stufe:2, titel:'Verschiebung der Nachfragekurve', tags:T.concat(['Polypol', 'Verschiebung']), kopf:'neues Gleichgewicht',
    text:W => { const w = W[0]; return `Nachfrage p<sub>N</sub>(x) = ${maZ(w.a)} − ${maZ(w.b)}x, Angebot p<sub>A</sub>(x) = ${maZ(w.c)} + ${maZ(w.d)}x (x in Tausend Stück, p in €). Durch ${w.grund} verschiebt sich die Nachfragekurve um ${maZ(Math.abs(w.s))} € ${w.s > 0 ? 'nach oben' : 'nach unten'} (Zahlungsbereitschaft je Menge ${w.s > 0 ? 'höher' : 'niedriger'}).<br>Berechne altes und neues Gleichgewicht.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'c', 'd', 's', 'grund').concat([
      {id:'x0', t:'alte Gleichgewichtsmenge', e:'Tsd. Stück', f:'(a - c) / (b + d)', weg:w => `x = (${maZ(w.a)} − ${maZ(w.c)}) ÷ ${maZ(w.b + w.d)} = [x0]`},
      {id:'p0', t:'alter Gleichgewichtspreis', e:'€', f:'c + d * x0', weg:w => `p = [p0]`},
      {id:'x1', t:'neue Gleichgewichtsmenge', e:'Tsd. Stück', f:'(a + s - c) / (b + d)', weg:w => `neue Nachfrage p = ${maZ(w.a + w.s)} − ${maZ(w.b)}x; x = (${maZ(w.a + w.s)} − ${maZ(w.c)}) ÷ ${maZ(w.b + w.d)} = [x1]`},
      {id:'p1', t:'neuer Gleichgewichtspreis', e:'€', f:'c + d * x1', weg:w => `p = [p1]`}]),
    ...maMit(maSaetze(2423, 12, R => { const b = R.p([0.5, 1, 2]), d = R.p([0.5, 1]), x = R.p([6, 8, 10, 12]), c = R.p([2, 4]), p = c + d * x, s = R.p([3, 6, -3, -6, 4.5]);
      const grund = s > 0 ? R.p(['steigende Einkommen', 'einen Modetrend', 'gestiegene Preise eines Ersatzgutes']) : R.p(['sinkende Einkommen', 'ein negatives Testergebnis', 'gesunkene Preise eines Ersatzgutes']);
      if ((p + b * x + s - c) / (b + d) <= 0) return null; return [{a:p + b * x, b, c, d, s, grund}]; })),
    wahl:[{id:'w', t:'Durch die Verschiebung', opts:['steigen Preis und Menge', 'sinken Preis und Menge', 'steigt der Preis, die Menge sinkt'], r:'s@0 > 0 ? 0 : 1'}],
    hinweise:['Verschiebung nach oben: Zahlungsbereitschaft steigt; der Achsenabschnitt der Nachfragefunktion wird größer.', 'Neues Gleichgewicht wie gewohnt berechnen.'],
    merke:'Nachfrage steigt (Kurve nach rechts/oben): Preis und Menge steigen; Nachfrage sinkt: beide sinken.'}),
  blBau('rechnung', {id:'MP4', modul:'MP', stufe:3, titel:'Höchst- und Mindestpreis rechnerisch', tags:T.concat(['Polypol', 'Staatseingriff', 'Höchstpreis', 'Mindestpreis']), kopf:'Staatseingriff',
    text:W => { const w = W[0]; return `Nachfrage p<sub>N</sub>(x) = ${maZ(w.a)} − ${maZ(w.b)}x, Angebot p<sub>A</sub>(x) = ${maZ(w.c)} + ${maZ(w.d)}x (x in Tausend Stück, p in €).<br>a) Der Staat setzt einen ${w.art ? 'Mindestpreis' : 'Höchstpreis'} von ${eu(w.q)} fest. Ist er wirksam?<br>b) Berechne angebotene und nachgefragte Menge bei diesem Preis und den Überhang.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'c', 'd', 'q', 'art').concat([
      {id:'pg', t:'Gleichgewichtspreis ohne Eingriff', e:'€', f:'a - b * (a - c) / (b + d)', weg:w => `x* = ${maZ((w.a - w.c) / (w.b + w.d))}; p* = [pg]`},
      {id:'xn', t:'nachgefragte Menge bei q', e:'Tsd. Stück', f:'(a - q) / b', weg:w => `${maZ(w.q)} = ${maZ(w.a)} − ${maZ(w.b)}x ⇒ x = [xn]`},
      {id:'xa', t:'angebotene Menge bei q', e:'Tsd. Stück', f:'(q - c) / d', weg:w => `${maZ(w.q)} = ${maZ(w.c)} + ${maZ(w.d)}x ⇒ x = [xa]`},
      {id:'ue', t:'Überhang', e:'Tsd. Stück', f:'abs(xa - xn)', weg:w => `|${maZ((w.q - w.c) / w.d)} − ${maZ((w.a - w.q) / w.b)}| = [ue] (${w.art ? 'Angebotsüberhang' : 'Nachfrageüberhang'})`}]),
    ...maMit(maSaetze(2424, 12, R => { const b = R.p([0.5, 1, 2]), d = R.p([0.5, 1]), x = R.p([8, 10, 12]), c = R.p([2, 4]), p = c + d * x, art = R.g(0, 1), q = p + (art ? 1 : -1) * R.p([1, 2, 3]);
      if (q <= c) return null; return [{a:p + b * x, b, c, d, q, art}]; })),
    wahl:[{id:'w', t:'Der staatliche Preis ist', opts:['wirksam (liegt auf der „richtigen“ Seite des Gleichgewichtspreises)', 'unwirksam'], r:'0'}],
    hinweise:['Höchstpreis wirkt nur unter, Mindestpreis nur über dem Gleichgewichtspreis.', 'Beim staatlichen Preis beide Mengen berechnen; abgesetzt wird die kleinere.'],
    merke:'Wirksamer Höchstpreis (< p*): Nachfrageüberhang; wirksamer Mindestpreis (> p*): Angebotsüberhang.'}),
  blBau('rechnung', {id:'MP5', modul:'MP', stufe:1, titel:'Gesamtangebot aus den Stückkosten', tags:T.concat(['Polypol', 'Gesamtangebot', 'Stückkosten']), kopf:'Angebot',
    text:W => { const w = W[0]; return `Fünf Anbieter bieten auf einem Markt an, sobald der Preis ihre Stückkosten deckt:<br>${w.A.map((s, i) => `Anbieter ${i + 1}: Stückkosten ${eu(s)}, Kapazität ${w.K[i]} Stück`).join('<br>')}<br>Bestimme das Gesamtangebot bei den Preisen ${eu(w.q1)}, ${eu(w.q2)} und ${eu(w.q3)}.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('A', 'K', 'q1', 'q2', 'q3', 'L1', 'L2', 'L3').concat([
      {id:'g1', t:'Gesamtangebot bei q₁', e:'Stück', f:'L1', weg:w => `Anbieter mit Stückkosten ≤ ${maZ(w.q1)} €: ${w.A.map((s, i) => s <= w.q1 ? w.K[i] : 0).filter(Boolean).join(' + ') || '0'} = [g1]`},
      {id:'g2', t:'Gesamtangebot bei q₂', e:'Stück', f:'L2', weg:w => `Stückkosten ≤ ${maZ(w.q2)} €: [g2]`},
      {id:'g3', t:'Gesamtangebot bei q₃', e:'Stück', f:'L3', weg:w => `Stückkosten ≤ ${maZ(w.q3)} €: [g3]`}]),
    ...maMit(maSaetze(2425, 12, R => { const A = [R.p([4, 5]), R.p([6, 7]), R.p([8, 9]), R.p([10, 11]), R.p([12, 13])], K = A.map(() => R.p([100, 200, 300, 400]));
      const q1 = A[1], q2 = A[3] + 0.5, q3 = A[4]; const sum = q => A.reduce((s, a, i) => s + (a <= q ? K[i] : 0), 0);
      return [{A, K, q1, q2, q3, L1:sum(q1), L2:sum(q2), L3:sum(q3)}]; })),
    wahl:[{id:'w', t:'Die Gesamtangebotskurve', opts:['steigt mit dem Preis, weil bei höheren Preisen auch Anbieter mit höheren Stückkosten anbieten', 'fällt mit dem Preis', 'ist waagrecht'], r:'0'}],
    hinweise:['Ein Anbieter bietet an, wenn der Preis mindestens seine Stückkosten deckt.', 'Gesamtangebot = Summe der Kapazitäten aller anbietenden Unternehmen.'],
    merke:'Das Gesamtangebot entsteht durch Addition der individuellen Angebote; mit steigendem Preis kommen Anbieter mit höheren Stückkosten hinzu – die Kurve steigt.'}),
  blBau('zuordnung', {id:'MP6', modul:'MP', stufe:2, titel:'Marktkonforme und marktkonträre Eingriffe', tags:T.concat(['Staatseingriff', 'Ordnungspolitik']),
    text:'Wie greift der Staat in den Markt ein?', kategorien:['marktkonform (Preismechanismus bleibt wirksam)', 'marktkonträr (Preismechanismus wird außer Kraft gesetzt)'], anzahl:8,
    faelle:[
      {t:'Subvention für Elektroautos', k:0}, {t:'Verbrauchsteuer auf Tabak', k:0}, {t:'staatliche Werbekampagne für Obst', k:0}, {t:'CO₂-Abgabe auf Heizöl', k:0},
      {t:'Mietpreisdeckel (Höchstpreis)', k:1}, {t:'garantierter Mindestpreis für Milch', k:1}, {t:'Einfuhrkontingent für Stahl', k:1, weg:'Menge wird festgelegt'}, {t:'staatlich festgesetzte Taxitarife', k:1}
    ],
    hinweise:['Marktkonform: Staat verändert Angebot oder Nachfrage – der Preis bildet sich weiter am Markt.', 'Marktkonträr: Staat legt Preis oder Menge fest.'],
    merke:'Marktkonforme Eingriffe (Steuern, Subventionen) verschieben Kurven; marktkonträre Eingriffe (Höchst-, Mindestpreise, Kontingente) setzen den Preismechanismus außer Kraft.'}),

  {
    id:'MP7', modul:'MP', typ:'berechnung', mehrfach:true, stufe:0, titel:'Renten, Verschiebungen und Angebotselastizität',
    tags:T.concat(['Theorie', 'Polypol']),
    text:'Auf einem vollkommenen Polypolmarkt bildet sich der Gleichgewichtspreis p*.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Die Konsumentenrente ist der Vorteil der Käufer, die auch einen höheren Preis als p* gezahlt hätten.', richtig:true, weg:'Zahlungsbereitschaft über dem Marktpreis'},
      {text:'Die Produzentenrente ist der Vorteil der Anbieter, die auch zu einem niedrigeren Preis angeboten hätten.', richtig:true, weg:'Kosten unter dem Marktpreis'},
      {text:'Steigen die Kosten der Anbieter, verschiebt sich die Angebotskurve nach oben (links): Preis steigt, Menge sinkt.', richtig:true, weg:'Angebotsrückgang'},
      {text:'Bei einem starren (unelastischen) Angebot führt eine Nachfragesteigerung vor allem zu höheren Preisen.', richtig:true, weg:'Menge kann kaum steigen'},
      {text:'Eine Nachfragesteigerung senkt bei normalem Verlauf den Gleichgewichtspreis.', fehler:'Der Preis steigt.'},
      {text:'Im Gleichgewicht gibt es einen Nachfrageüberhang.', fehler:'Im Gleichgewicht sind Angebot und Nachfrage gleich.'}
    ],
    hinweise:['Zahlungsbereitschaft vs. Marktpreis; Kosten vs. Marktpreis.'],
    merke:'Konsumentenrente: Zahlungsbereitschaft über p*; Produzentenrente: Preis über den Kosten; starres Angebot → Preisanpassung statt Mengenanpassung.'
  },

  /* ======================= MM · Monopol mathematisch ======================= */
  blBau('rechnung', {id:'MM1', modul:'MM', stufe:2, titel:'Erlös- und Gewinnmaximum des Monopolisten', tags:T.concat(['Monopol', 'Cournot-Punkt']), kopf:'Monopol',
    text:W => { const w = W[0]; return `Ein Monopolist hat die Preis-Absatz-Funktion p(x) = ${maZ(w.a)} − ${maZ(w.b)}x und die Kostenfunktion K(x) = ${maZ(w.F)} + ${maZ(w.kv)}x (x in Stück, Beträge in €).<br>a) Bestimme die Erlösfunktion E(x) und das Erlösmaximum.<br>b) Bestimme den Cournot-Punkt (gewinnmaximale Menge und Preis) und den maximalen Gewinn.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'F', 'kv').concat([
      {id:'xe', t:'erlösmaximale Menge', e:'Stück', f:'a / (2 * b)', weg:w => `E(x) = ${maZ(w.a)}x − ${maZ(w.b)}x²; E′(x) = ${maZ(w.a)} − ${maZ(2 * w.b)}x = 0 ⇒ x = [xe]`},
      {id:'Em', t:'maximaler Erlös', e:'€', f:'a * xe - b * xe * xe', weg:w => `E(${maZ(w.a / (2 * w.b))}) = [Em]`},
      {id:'xc', t:'Cournot-Menge', e:'Stück', f:'(a - kv) / (2 * b)', weg:w => `G(x) = ${maZ(-w.b)}x² + ${maZ(w.a - w.kv)}x − ${maZ(w.F)}; G′(x) = 0 ⇔ Grenzerlös ${maZ(w.a)} − ${maZ(2 * w.b)}x = Grenzkosten ${maZ(w.kv)} ⇒ x = [xc]`},
      {id:'pc', t:'Cournot-Preis', e:'€', f:'a - b * xc', weg:w => `p = ${maZ(w.a)} − ${maZ(w.b)} · ${maZ((w.a - w.kv) / (2 * w.b))} = [pc]`},
      {id:'G', t:'maximaler Gewinn', e:'€', f:'pc * xc - F - kv * xc', weg:w => `G = [G]`}]),
    ...maMit(maSaetze(2431, 12, R => { const b = R.p([0.5, 1, 2, 0.25]), xc = R.p([20, 30, 40, 50]), kv = R.p([10, 20, 30]), a = kv + 2 * b * xc, F = R.p([200, 500, 1000]);
      if ((a - b * xc) * xc - F - kv * xc <= 0) return null; return [{a, b, F, kv}]; })),
    hinweise:['Erlös E(x) = p(x) · x.', 'Cournot-Punkt: Grenzerlös E′(x) = Grenzkosten K′(x).'],
    merke:'Monopol: E(x) = p(x)·x; Erlösmaximum bei E′(x) = 0; Cournot-Menge bei E′(x) = K′(x), Cournot-Preis aus der Preis-Absatz-Funktion.'}),
  blBau('rechnung', {id:'MM2', modul:'MM', stufe:3, titel:'Monopol und Polypol im Vergleich', tags:T.concat(['Monopol', 'Polypol', 'Konsumentenrente']), kopf:'Vergleich',
    text:W => { const w = W[0]; return `Die Marktnachfrage lautet p(x) = ${maZ(w.a)} − ${maZ(w.b)}x; die Grenzkosten sind konstant ${eu(w.kv)} (keine Fixkosten).<br>a) Bei vollständiger Konkurrenz bildet sich der Preis in Höhe der Grenzkosten. Berechne Menge und Konsumentenrente.<br>b) Ein Monopolist bietet im Cournot-Punkt an. Berechne Menge, Preis und Konsumentenrente.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'kv').concat([
      {id:'xp', t:'Menge im Polypol', e:'Stück', f:'(a - kv) / b', weg:w => `${maZ(w.kv)} = ${maZ(w.a)} − ${maZ(w.b)}x ⇒ x = [xp]`},
      {id:'kp', t:'Konsumentenrente im Polypol', e:'€', f:'(a - kv) * xp / 2', weg:w => `½ · (${maZ(w.a)} − ${maZ(w.kv)}) · ${maZ((w.a - w.kv) / w.b)} = [kp]`},
      {id:'xm', t:'Menge im Monopol', e:'Stück', f:'xp / 2', weg:w => `Grenzerlös = Grenzkosten: ${maZ(w.a)} − ${maZ(2 * w.b)}x = ${maZ(w.kv)} ⇒ x = [xm]`},
      {id:'pm', t:'Monopolpreis', e:'€', f:'a - b * xm', weg:w => `p = [pm]`},
      {id:'km', t:'Konsumentenrente im Monopol', e:'€', f:'(a - pm) * xm / 2', weg:w => `½ · (${maZ(w.a)} − ${maZ(w.a - w.b * (w.a - w.kv) / (2 * w.b))}) · ${maZ((w.a - w.kv) / (2 * w.b))} = [km]`}]),
    ...maMit(maSaetze(2432, 12, R => { const b = R.p([0.5, 1, 2]), kv = R.p([10, 20, 30]), xp = R.p([40, 60, 80, 100]); return [{a:kv + b * xp, b, kv}]; })),
    hinweise:['Polypol: Preis = Grenzkosten.', 'Monopol: Grenzerlös = Grenzkosten – bei linearer Nachfrage halbe Polypolmenge.'],
    merke:'Monopol im Vergleich zum Polypol: halbe Menge (bei linearer Nachfrage und konstanten Grenzkosten), höherer Preis, kleinere Konsumentenrente.'}),
  blBau('rechnung', {id:'MM3', modul:'MM', stufe:3, titel:'Preisdifferenzierung des Monopolisten', tags:T.concat(['Monopol', 'Preisdifferenzierung']), kopf:'Preisdifferenzierung',
    text:W => { const w = W[0]; return `Ein Freizeitpark (Monopolist in der Region) teilt seine Kunden in zwei Gruppen (Grenzkosten je Besucher ${eu(w.kv)}):<br>Erwachsene: p₁(x) = ${maZ(w.a1)} − ${maZ(w.b1)}x · Schüler: p₂(x) = ${maZ(w.a2)} − ${maZ(w.b2)}x (x in Besuchern pro Tag).<br>Bestimme für jede Gruppe die gewinnmaximale Besucherzahl und den Eintrittspreis.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a1', 'b1', 'a2', 'b2', 'kv').concat([
      {id:'x1', t:'Besucher Erwachsene', e:'Stück', f:'(a1 - kv) / (2 * b1)', weg:w => `Grenzerlös ${maZ(w.a1)} − ${maZ(2 * w.b1)}x = ${maZ(w.kv)} ⇒ x = [x1]`},
      {id:'p1', t:'Preis Erwachsene', e:'€', f:'a1 - b1 * x1', weg:w => `p₁ = [p1]`},
      {id:'x2', t:'Besucher Schüler', e:'Stück', f:'(a2 - kv) / (2 * b2)', weg:w => `${maZ(w.a2)} − ${maZ(2 * w.b2)}x = ${maZ(w.kv)} ⇒ x = [x2]`},
      {id:'p2', t:'Preis Schüler', e:'€', f:'a2 - b2 * x2', weg:w => `p₂ = [p2]`}]),
    ...maMit(maSaetze(2433, 12, R => { const kv = R.p([4, 6, 8]), b1 = R.p([0.02, 0.05, 0.04]), b2 = R.p([0.02, 0.04, 0.05]), x1 = R.p([400, 500, 600]), x2 = R.p([200, 300, 400]);
      const a1 = kv + 2 * b1 * x1, a2 = kv + 2 * b2 * x2; if (a2 >= a1) return null; return [{a1:maR(a1), b1, a2:maR(a2), b2, kv}]; })),
    wahl:[{id:'w', t:'Preisdifferenzierung lohnt sich, weil', opts:['die Gruppen unterschiedlich zahlungsbereit sind und der Monopolist so mehr Konsumentenrente abschöpft', 'die Kosten für Schüler höher sind', 'der Staat es vorschreibt'], r:'0'}],
    hinweise:['Je Teilmarkt: Grenzerlös = Grenzkosten.', 'Die zahlungsbereitere Gruppe bekommt den höheren Preis.'],
    merke:'Preisdifferenzierung: Für jeden Teilmarkt gilt Grenzerlös = Grenzkosten; so wird Konsumentenrente abgeschöpft und der Gewinn steigt.'}),
  {
    id:'MM4', modul:'MM', typ:'berechnung', mehrfach:true, stufe:2, titel:'Unvollkommener Markt: Preisspielraum und Oligopol',
    tags:T.concat(['Theorie', 'unvollkommener Markt', 'Oligopol']),
    text:'Auf unvollkommenen Märkten haben Anbieter Präferenzen ihrer Kunden (Marke, Service, Standort).',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Ein Polypolist auf dem unvollkommenen Markt hat einen monopolistischen Preisspielraum: Innerhalb gewisser Grenzen verliert er bei Preiserhöhungen kaum Kunden.', richtig:true, weg:'doppelt geknickte Preis-Absatz-Funktion (Gutenberg)'},
      {text:'Überschreitet er den oberen Grenzpreis, wandern viele Kunden zur Konkurrenz ab.', richtig:true, weg:'steiler Nachfragerückgang'},
      {text:'Im homogenen Oligopol führt eine Preissenkung eines Anbieters oft zu einem Preiskampf.', richtig:true, weg:'Konkurrenten ziehen nach'},
      {text:'Im heterogenen Oligopol setzen Anbieter stärker auf Produktdifferenzierung und Werbung als auf Preissenkungen.', richtig:true, weg:'Qualitätswettbewerb'},
      {text:'Preisdifferenzierung ist nur möglich, wenn die Teilmärkte getrennt werden können (keine Weiterverkäufe).', richtig:true, weg:'Marktspaltung'},
      {text:'Auf dem vollkommenen Markt hat jeder Anbieter einen großen Preisspielraum.', fehler:'Auf dem vollkommenen Markt ist der Polypolist Mengenanpasser ohne Preisspielraum.'}
    ],
    hinweise:['Was unterscheidet den vollkommenen vom unvollkommenen Markt?'],
    merke:'Unvollkommener Markt: Präferenzen schaffen einen monopolistischen Preisspielraum (Gutenberg); Oligopol: Preiskampf (homogen) oder Qualitäts- und Werbewettbewerb (heterogen).'
  }
  ]; })(),
/* Labor-Aufgaben: eingebettete Werkstätten aus quellen/labor (Stufe „Labor“) */
{
  id:'PPLAB', modul:'PP', typ:'labor', stufe:9, labor:'markt', titel:'Labor: Markt-Labor',
  tags:['Markt','Preisbildung','Labor'],
  text:'Verschiebe Angebot und Nachfrage und setze Höchst- und Mindestpreise – Gleichgewicht, Überschuss und Mangel werden sichtbar. Die Werkstatt reagiert sofort auf jede Änderung. Erfülle die Aufträge – sie haken sich automatisch ab. Das Labor zählt nicht für die Medaillen.'
},
  /* ======================= Eigene Fälle für die Freitextfassung der VWL-Abiturfälle (Wunsch Juergen 08.11.2026) =======================
     Siehe bl-wg-offen.js – blAbi() nimmt für „(offene Frage)“ den hier hinterlegten Fall. */
  ...(() => { globalThis.ABI_OFFEN = {

  /* ---------- AN4 · Elastizität und Gewinnmaximum im Polypol ---------- */
  AN4:{titel:'Abiturfall: Fitnessstudio und Hantelscheiben',
    text:'Ein Fitnessstudio erhöht den Monatsbeitrag von {p0} auf {p1}. Die Zahl der Mitglieder ändert sich von {x0} auf {x1}. Sein Lieferant für Hantelscheiben ist Polypolist mit der Kostenfunktion K(x) = x³ − 9x² + 40x + 50 (x in 1.000 Stück, K und p in 1.000 €); der Marktpreis für 1.000 Hantelscheiben liegt bei {pm}.',
    zeilen:[{id:'p0', t:'Beitrag vorher', e:'€', aus:true}, {id:'p1', t:'Beitrag nachher', e:'€', aus:true}, {id:'x0', t:'Mitglieder vorher', aus:true}, {id:'x1', t:'Mitglieder nachher', aus:true}, {id:'pm', t:'Marktpreis', aus:true}],
    werte:[{p0:30, p1:36, x0:1200, x1:1140, pm:88}],
    sets:[[{p0:25, p1:30, x0:2000, x1:1500, pm:61}]],
    felder:[
      {id:'e', t:'a) Berechnen Sie die direkte Preiselastizität der Nachfrage (auf zwei Nachkommastellen).', f:'((x1 - x0) / x0) / ((p1 - p0) / p0)', kurz:'a) Elastizität'},
      {id:'du', t:'b) Berechnen Sie die Veränderung der monatlichen Beitragseinnahmen (€; Rückgang mit Minuszeichen).', f:'p1 * x1 - p0 * x0', e:'€', kurz:'b) Umsatzänderung'},
      {id:'xm', t:'c) Ermitteln Sie die gewinnmaximale Menge des Herstellers (in 1.000 Stück).', f:'(18 + wurzel(324 - 12 * (40 - pm))) / 6', kurz:'c) gewinnmaximale Menge', weg:V => `p = K′: ${V.pm} = 3x² − 18x + 40 → x = ${blN((18 + Math.sqrt(324 - 12 * (40 - V.pm))) / 6)}`},
      {id:'gm', t:'d) Berechnen Sie seinen Gewinn (in 1.000 €).', f:'pm * ((18 + wurzel(324 - 12 * (40 - pm))) / 6) - (((18 + wurzel(324 - 12 * (40 - pm))) / 6) * ((18 + wurzel(324 - 12 * (40 - pm))) / 6) * ((18 + wurzel(324 - 12 * (40 - pm))) / 6) - 9 * ((18 + wurzel(324 - 12 * (40 - pm))) / 6) * ((18 + wurzel(324 - 12 * (40 - pm))) / 6) + 40 * ((18 + wurzel(324 - 12 * (40 - pm))) / 6) + 50)', kurz:'d) Gewinn', weg:V => { const x = (18 + Math.sqrt(324 - 12 * (40 - V.pm))) / 6; return `G = ${V.pm} · ${blN(x)} − K(${blN(x)}) = ${blN(V.pm * x)} − ${blN(x * x * x - 9 * x * x + 40 * x + 50)} = ${blB(blN(V.pm * x - (x * x * x - 9 * x * x + 40 * x + 50)))}`; }}
    ],
    wahl:[
      {id:'w1', t:'e) Erläutern Sie mithilfe der Elastizität, warum sich die Beitragseinnahmen so verändert haben.',
        frei:{muster:'Ist der Betrag der Elastizität kleiner als 1, reagiert die Nachfrage unelastisch: Die Mitgliederzahl sinkt prozentual weniger stark, als der Beitrag steigt – die Einnahmen steigen. Ist der Betrag größer als 1, reagiert die Nachfrage elastisch: Es kündigen prozentual mehr Mitglieder, als der Beitrag steigt – die Einnahmen sinken. Gründe für die Höhe: Zahl der Ausweichmöglichkeiten (andere Studios, Sport im Freien), Bindung durch Verträge, Anteil am Budget.', punkte:['Einordnung elastisch/unelastisch', 'Zusammenhang Preis – Menge – Umsatz', 'Bezug auf b', 'Grund für die Höhe der Elastizität']}},
      {id:'w2', t:'f) Beurteilen Sie, wie sich der Markteintritt weiterer Hersteller langfristig auf Marktpreis und Gewinn des Herstellers auswirkt.',
        frei:{muster:'Solange im Polypol Gewinne erzielt werden, lohnt sich der Markteintritt für weitere Anbieter. Das Marktangebot steigt (Angebotskurve nach rechts), der Marktpreis sinkt. Als Mengenanpasser muss der Hersteller den niedrigeren Preis hinnehmen, er produziert weniger und sein Gewinn schrumpft. Langfristig sinkt der Preis bis auf das Minimum der Stückkosten (Betriebsoptimum), wo kein Gewinn über die Kosten hinaus mehr erzielt wird.', punkte:['Markteintritt wegen Gewinnen', 'Angebot steigt, Preis sinkt', 'Folge für den Mengenanpasser', 'langfristig Preis = Minimum der Stückkosten']}}
    ],
    hinweise:['Elastizität = prozentuale Mengenänderung ÷ prozentuale Preisänderung.', 'Gewinnmaximum im Polypol: p = K′(x) mit K′(x) = 3x² − 18x + 40.']},

  /* ---------- AN5 · Polypol mit quadratischer Kostenfunktion ---------- */
  AN5:{titel:'Abiturfall: Erdbeeren vom Hof',
    text:'Ein Erdbeerhof verkauft Erdbeeren auf einem polypolistischen Markt zum Marktpreis von {p} je Schale. Seine Kostenfunktion lautet K(x) = {kf} + {a}·x + 0,0002·x² (x in Schalen pro Woche). Im Gewinnmaximum gilt Preis = Grenzkosten: p = {a} + 0,0004·x.',
    zeilen:[{id:'p', t:'Marktpreis', e:'€', aus:true}, {id:'kf', t:'Fixkosten', aus:true}, {id:'a', t:'variable Kosten (linear)', aus:true}],
    werte:[{p:4.5, kf:2000, a:1.5}],
    sets:[[{p:4, kf:1500, a:1.6}]],
    felder:[
      {id:'xg', t:'a) Berechnen Sie die gewinnmaximale Menge (Schalen).', f:'(p - a) / 0.0004', kurz:'a) gewinnmaximale Menge'},
      {id:'kk', t:'b) Berechnen Sie die Gesamtkosten (€).', f:'kf + a * (p - a) / 0.0004 + 0.0002 * ((p - a) / 0.0004) * ((p - a) / 0.0004)', e:'€', kurz:'b) Kosten'},
      {id:'sk', t:'c) Berechnen Sie die Stückkosten im Gewinnmaximum (€).', f:'(kf + a * (p - a) / 0.0004 + 0.0002 * ((p - a) / 0.0004) * ((p - a) / 0.0004)) / ((p - a) / 0.0004)', e:'€', kurz:'c) Stückkosten'},
      {id:'gw', t:'d) Berechnen Sie den maximalen Gewinn (€).', f:'p * (p - a) / 0.0004 - (kf + a * (p - a) / 0.0004 + 0.0002 * ((p - a) / 0.0004) * ((p - a) / 0.0004))', e:'€', kurz:'d) Gewinn'}
    ],
    wahl:[
      {id:'w1', t:'e) Erläutern Sie, warum der Erdbeerhof als Mengenanpasser bezeichnet wird.',
        frei:{muster:'Auf dem Markt gibt es viele Anbieter und viele Nachfrager, die Erdbeeren sind weitgehend gleichartig und die Kunden gut informiert. Ein einzelner Hof hat einen so kleinen Marktanteil, dass er den Marktpreis nicht beeinflussen kann: Verlangt er mehr, kaufen die Kunden woanders. Er nimmt den Preis als gegeben hin und kann nur die Menge wählen – er passt seine Menge so an, dass Preis = Grenzkosten gilt.', punkte:['Merkmale des Polypols', 'kein Einfluss auf den Preis', 'Entscheidung nur über die Menge (p = K′)']}},
      {id:'w2', t:'f) Beurteilen Sie, wie der Hof reagieren sollte, wenn billige Importware den Marktpreis stark sinken lässt.',
        frei:{muster:'Sinkt der Preis, sinkt die gewinnmaximale Menge und der Gewinn schrumpft. Kurzfristig sollte der Hof weiter verkaufen, solange der Preis die variablen Stückkosten deckt (kurzfristige Preisuntergrenze, Betriebsminimum) – die Fixkosten fallen ohnehin an. Langfristig muss der Preis die gesamten Stückkosten decken (Betriebsoptimum). Der Hof kann ausweichen, indem er sich von der Importware abhebt: Regionalität, Frische, Selbstpflücke, Direktvermarktung – damit verlässt er teilweise das reine Polypol.', punkte:['Folge für Menge und Gewinn', 'kurzfristige Preisuntergrenze', 'langfristige Preisuntergrenze', 'Strategie (Differenzierung, Direktvermarktung)']}}
    ],
    hinweise:['Gewinnmaximum: p = K′(x) = a + 0,0004·x → x = (p − a) ÷ 0,0004.', 'Stückkosten = Gesamtkosten ÷ Menge.']},

  /* ---------- HH4 · Monopol und Wohlfahrtsverlust ---------- */
  HH4:{titel:'Abiturfall: Die einzige Fähre zur Insel',
    text:'Eine Reederei betreibt als einziger Anbieter die Autofähre zu einer Nordseeinsel. Die Preis-Absatz-Funktion lautet p(x) = {a} − {b}x, die Kostenfunktion K(x) = {kf} + {kv}x (x in 1.000 Überfahrten, p in €, K in 1.000 €).',
    zeilen:[{id:'a', t:'a', aus:true}, {id:'b', t:'b', e:'ma', aus:true}, {id:'kf', t:'Fixkosten', aus:true}, {id:'kv', t:'variable Stückkosten', aus:true}],
    werte:[{a:60, b:0.5, kf:200, kv:10}],
    sets:[[{a:80, b:1, kf:300, kv:20}]],
    felder:[
      {id:'xc', t:'a) Ermitteln Sie die gewinnmaximale Menge (Cournot-Menge, 1.000 Überfahrten).', f:'(a - kv) / (2 * b)', kurz:'a) Cournot-Menge', weg:V => `E′ = K′: ${blN(V.a)} − ${blN(2 * V.b)}x = ${blN(V.kv)} → x = ${blB(blN((V.a - V.kv) / (2 * V.b)))}`},
      {id:'pc', t:'b) Berechnen Sie den Cournot-Preis (€).', f:'a - b * (a - kv) / (2 * b)', e:'€', kurz:'b) Cournot-Preis'},
      {id:'gm', t:'c) Berechnen Sie den maximalen Gewinn (1.000 €).', f:'(a - b * (a - kv) / (2 * b)) * (a - kv) / (2 * b) - kf - kv * (a - kv) / (2 * b)', kurz:'c) Gewinn'},
      {id:'wv', t:'d) Berechnen Sie den Wohlfahrtsverlust gegenüber einem Preis in Höhe der Grenzkosten (1.000 €).', f:'(a - b * (a - kv) / (2 * b) - kv) * ((a - kv) / b - (a - kv) / (2 * b)) / 2', kurz:'d) Wohlfahrtsverlust'}
    ],
    wahl:[
      {id:'w1', t:'e) Erläutern Sie, warum die Reederei eine Monopolstellung hat.',
        frei:{muster:'Eine zweite Fährlinie lohnt sich kaum: Schiffe, Anleger und Personal verursachen sehr hohe Fixkosten, die Nachfrage reicht nur für einen Anbieter (natürliches Monopol – ein Anbieter kann den Markt am günstigsten versorgen). Häufig vergibt die Gemeinde oder das Land zudem eine Konzession für die Linie (rechtliches Monopol). Ausweichmöglichkeiten wie Flugzeug sind teuer oder für Autos nicht nutzbar.', punkte:['hohe Fixkosten/Markteintrittsbarrieren', 'natürliches oder rechtliches Monopol', 'fehlende Substitute']}},
      {id:'w2', t:'f) Beurteilen Sie, ob der Staat den Fährpreis regulieren sollte.',
        frei:{muster:'Der Monopolist setzt einen höheren Preis und eine geringere Menge als bei Wettbewerb; Konsumentenrente geht verloren, es entsteht ein Wohlfahrtsverlust (d). Bewohner und Betriebe der Insel sind auf die Fähre angewiesen. Eine Preisobergrenze oder genehmigungspflichtige Tarife schützen sie. Allerdings muss der regulierte Preis die Kosten decken, sonst fehlen Mittel für Wartung und neue Schiffe; zudem braucht die Behörde genaue Kosteninformationen. Abwägung: Regulierung oder Ausschreibung der Konzession ist sinnvoll, wenn sie kostendeckend gestaltet wird.', punkte:['Nachteile des Monopols (Preis, Menge, Wohlfahrtsverlust)', 'Argument für Regulierung', 'Risiko/Grenze der Regulierung', 'begründetes Urteil']}}
    ],
    hinweise:['E′(x) = a − 2bx; Gewinnmaximum bei E′ = K′ (= kv).', 'Bei p = Grenzkosten: x = (a − kv) ÷ b.', 'Wohlfahrtsverlust = ½ · (Cournot-Preis − kv) · (Menge bei p = kv − Cournot-Menge).']},

  /* ---------- HH5 · Oligopol: Werbung als Gefangenendilemma ---------- */
  HH5:{titel:'Abiturfall: Werbung im Supermarktduell',
    text:'Zwei Supermärkte A und B konkurrieren in einer Kleinstadt. Verzichten beide auf eine teure Prospektwerbung, verdient jeder {kk} € im Monat. Wirbt nur einer, verdient er {wk} €, der andere {kw} €. Werben beide, verdient jeder {ww} €. Im Lebensmitteleinzelhandel haben die vier größten Unternehmen Marktanteile von {m1} %, {m2} %, {m3} % und {m4} %.',
    zeilen:[{id:'kk', t:'beide ohne Werbung', aus:true}, {id:'wk', t:'nur werbender', aus:true}, {id:'kw', t:'nicht werbender', aus:true}, {id:'ww', t:'beide werben', aus:true},
      {id:'m1', t:'Anteil 1', aus:true}, {id:'m2', t:'Anteil 2', aus:true}, {id:'m3', t:'Anteil 3', aus:true}, {id:'m4', t:'Anteil 4', aus:true}],
    werte:[{kk:12000, wk:15000, kw:7000, ww:9000, m1:30, m2:22, m3:18, m4:12}],
    sets:[[{kk:20000, wk:26000, kw:11000, ww:16000, m1:25, m2:20, m3:15, m4:10}]],
    felder:[
      {id:'cr', t:'a) Berechnen Sie die Konzentrationsrate CR4 (%).', f:'m1 + m2 + m3 + m4', e:'%', kurz:'a) CR4'},
      {id:'gk', t:'b) Berechnen Sie den gemeinsamen Gewinn, wenn beide auf Werbung verzichten (€).', f:'2 * kk', e:'€', kurz:'b) Gewinn ohne Werbung'},
      {id:'vl', t:'c) Berechnen Sie, wie viel Gewinn beide zusammen im Gleichgewicht gegenüber b) verlieren (€).', f:'2 * kk - 2 * ww', e:'€', kurz:'c) Verlust im Gleichgewicht'},
      {id:'an', t:'d) Berechnen Sie den Anreiz für A, als Einziger zu werben (€).', f:'wk - kk', e:'€', kurz:'d) Anreiz zum Werben'}
    ],
    wahl:[
      {id:'w1', t:'e) Erläutern Sie mithilfe des Gefangenendilemmas, warum am Ende beide werben.',
        frei:{muster:'Für jeden Markt ist Werben die dominante Strategie: Wirbt der andere nicht, verdient man mit Werbung mehr als ohne (d); wirbt der andere, verliert man ohne Werbung noch mehr Kunden. Beide werben also, obwohl sie zusammen ohne Werbung mehr verdienen würden (c). Eine Absprache wäre instabil, weil jeder einen Anreiz hat abzuweichen, und sie wäre ohnehin verboten.', punkte:['dominante Strategie begründet', 'Gleichgewicht schlechter als Kooperation (Bezug auf c)', 'Instabilität einer Absprache']}},
      {id:'w2', t:'f) Beurteilen Sie, ob eine Fusion der beiden größten Lebensmittelhändler vom Bundeskartellamt genehmigt würde.',
        frei:{muster:'Die Fusionskontrolle prüft, ob durch den Zusammenschluss wirksamer Wettbewerb erheblich behindert wird, insbesondere durch die Entstehung oder Verstärkung einer marktbeherrschenden Stellung. Bei hoher Konzentration (CR4 aus a) hätte das fusionierte Unternehmen einen sehr großen Marktanteil und starke Macht gegenüber Lieferanten und Verbrauchern. Eine Freigabe wäre daher unwahrscheinlich oder nur mit Auflagen (z. B. Verkauf von Filialen) möglich; eine Ministererlaubnis ist die seltene Ausnahme.', punkte:['Prüfmaßstab der Fusionskontrolle', 'Bezug zur Konzentration', 'Folgen für Verbraucher/Lieferanten', 'Ergebnis (Untersagung oder Auflagen)']}}
    ],
    hinweise:['CR4 = Summe der Marktanteile der vier größten Anbieter.', 'Dominante Strategie: in jedem Fall die beste Antwort.']},

  /* ---------- KD5 · Konjunktur: Abschwung ---------- */
  KD5:{titel:'Abiturfall: Ostland rutscht ab',
    text:'Für Ostland liegen vor (Vorjahr in Klammern): reales BIP {b1} Mrd. € ({b0} Mrd. €), Verbraucherpreisindex {v1} ({v0}), Arbeitslose {al1} Mio. ({al0} Mio.) bei unverändert {ep} Mio. Erwerbspersonen. Die Kapazitätsauslastung ist gesunken, die Lagerbestände sind hoch, Unternehmen verschieben Investitionen.',
    zeilen:[{id:'b0', t:'BIP Vorjahr', aus:true}, {id:'b1', t:'BIP', aus:true}, {id:'v0', t:'VPI Vorjahr', e:'ma', aus:true}, {id:'v1', t:'VPI', e:'ma', aus:true}, {id:'al0', t:'Arbeitslose Vorjahr', e:'ma', aus:true}, {id:'al1', t:'Arbeitslose', e:'ma', aus:true}, {id:'ep', t:'Erwerbspersonen', e:'ma', aus:true}],
    werte:[{b0:3200, b1:3168, v0:125, v1:127.5, al0:2.1, al1:2.5, ep:44}],
    sets:[[{b0:2500, b1:2480, v0:110, v1:111.1, al0:1.8, al1:2.0, ep:40}]],
    felder:[
      {id:'wr', t:'a) Berechnen Sie die reale Wachstumsrate (%; negativ mit Minuszeichen).', f:'(b1 - b0) / b0 * 100', e:'%', kurz:'a) Wachstumsrate'},
      {id:'ir', t:'b) Berechnen Sie die Inflationsrate (%).', f:'(v1 - v0) / v0 * 100', e:'%', kurz:'b) Inflationsrate'},
      {id:'aq', t:'c) Berechnen Sie die aktuelle Arbeitslosenquote (%).', f:'al1 / ep * 100', e:'%', kurz:'c) Arbeitslosenquote'},
      {id:'dq', t:'d) Berechnen Sie die Veränderung der Arbeitslosenquote gegenüber dem Vorjahr (Prozentpunkte).', f:'(al1 - al0) / ep * 100', kurz:'d) Veränderung in Prozentpunkten'}
    ],
    wahl:[
      {id:'w1', t:'e) Ordnen Sie die Lage in Ostland einer Konjunkturphase zu und begründen Sie mit den Indikatoren.',
        frei:{muster:'Ostland befindet sich im Abschwung bzw. in einer Rezession: Das reale BIP schrumpft (a), die Kapazitätsauslastung sinkt, Lager sind voll und Investitionen werden verschoben. Die Arbeitslosigkeit steigt (c, d) – als Spätindikator folgt sie dem Rückgang der Produktion. Die Inflationsrate ist gering (b), weil die Nachfrage schwach ist und Unternehmen kaum Preiserhöhungen durchsetzen.', punkte:['Phase benannt', 'Begründung mit Wachstum und Auslastung', 'Arbeitslosigkeit als Spätindikator', 'Preisentwicklung erklärt']}},
      {id:'w2', t:'f) Beurteilen Sie eine antizyklische Fiskalpolitik als Antwort auf diese Lage.',
        frei:{muster:'Antizyklisch handelt der Staat, wenn er im Abschwung die Nachfrage stützt: mehr Staatsausgaben (z. B. Investitionen in Infrastruktur), Steuersenkungen oder Investitionsanreize; finanziert über Kredite (deficit spending). Über den Multiplikator steigen Produktion und Beschäftigung. Probleme: Wirkungsverzögerungen (Erkennen, Beschließen, Wirken), steigende Staatsverschuldung und Schuldenbremse, Mitnahmeeffekte; im Aufschwung werden Ausgaben oft nicht wieder gesenkt. Urteil: sinnvoll, wenn rechtzeitig, zeitlich befristet und gezielt.', punkte:['Maßnahmen antizyklischer Fiskalpolitik', 'Wirkungskette (Nachfrage, Multiplikator, Beschäftigung)', 'Probleme (Verzögerung, Verschuldung)', 'begründetes Urteil']}}
    ],
    hinweise:['Wachstums- und Inflationsrate: Veränderung gegenüber dem Vorjahr in %.', 'Arbeitslosenquote = Arbeitslose ÷ Erwerbspersonen · 100; Veränderung in Prozentpunkten = Differenz der Quoten.']},

  /* ---------- KD6 · Konjunktur: Stagflation ---------- */
  KD6:{titel:'Abiturfall: Nordland in der Stagflation',
    text:'Für Nordland liegen vor: reales BIP {b1} Mrd. € (Vorjahr {b0}), Verbraucherpreisindex {v1} (Vorjahr {v0}), Arbeitslose {al} Mio. bei {ep} Mio. Erwerbspersonen, Exporte {ex} Mrd. €, Importe {im} Mrd. €. Ursache der Preissteigerung sind vor allem stark gestiegene Energie- und Rohstoffpreise.',
    zeilen:[{id:'b0', t:'BIP Vorjahr', aus:true}, {id:'b1', t:'BIP', e:'ma', aus:true}, {id:'v0', t:'VPI Vorjahr', e:'ma', aus:true}, {id:'v1', t:'VPI', e:'ma', aus:true}, {id:'al', t:'Arbeitslose', e:'ma', aus:true}, {id:'ep', t:'Erwerbspersonen', e:'ma', aus:true}, {id:'ex', t:'Exporte', aus:true}, {id:'im', t:'Importe', aus:true}],
    werte:[{b0:1500, b1:1504.5, v0:120, v1:127.2, al:1.6, ep:30, ex:520, im:550}],
    sets:[[{b0:2000, b1:2004, v0:130, v1:137.15, al:1.9, ep:36, ex:700, im:760}]],
    felder:[
      {id:'wr', t:'a) Berechnen Sie die reale Wachstumsrate (%).', f:'(b1 - b0) / b0 * 100', e:'%', kurz:'a) Wachstum'},
      {id:'ir', t:'b) Berechnen Sie die Inflationsrate (%).', f:'(v1 - v0) / v0 * 100', e:'%', kurz:'b) Inflation'},
      {id:'aq', t:'c) Berechnen Sie die Arbeitslosenquote (%).', f:'al / ep * 100', e:'%', kurz:'c) Arbeitslosenquote'},
      {id:'ab', t:'d) Berechnen Sie den Außenbeitrag in % des BIP (negativ mit Minuszeichen).', f:'(ex - im) / b1 * 100', e:'%', kurz:'d) Außenbeitrag in % des BIP'}
    ],
    wahl:[
      {id:'w1', t:'e) Erläutern Sie, warum die Wirtschaftspolitik in Nordland in einem Dilemma steckt.',
        frei:{muster:'Nordland erlebt eine Stagflation: kaum Wachstum (a) bei hoher Inflation (b). Die Preissteigerung ist angebotsbedingt (Energie, Rohstoffe). Bekämpft man die Inflation mit restriktiver Politik (höhere Zinsen, weniger Staatsausgaben), bremst das die ohnehin schwache Wirtschaft und erhöht die Arbeitslosigkeit. Stützt man dagegen die Konjunktur mit expansiver Politik, steigt die Nachfrage und die Inflation wird zusätzlich angeheizt. Die Ziele Preisniveaustabilität und hoher Beschäftigungsstand/Wachstum stehen im Konflikt.', punkte:['Stagflation mit Bezug auf a und b', 'angebotsbedingte Inflation', 'Wirkung restriktiver Politik', 'Wirkung expansiver Politik – Zielkonflikt']}},
      {id:'w2', t:'f) Beurteilen Sie eine Leitzinserhöhung der Zentralbank in dieser Lage.',
        frei:{muster:'Eine Leitzinserhöhung verteuert Kredite, dämpft Konsum und Investitionen und soll so die Inflationserwartungen verankern und Zweitrundeneffekte (Lohn-Preis-Spirale) verhindern. Gegen die eigentliche Ursache – teure Energie und Rohstoffe – wirkt sie kaum; sie verschärft aber die Wachstumsschwäche und kann die Arbeitslosigkeit erhöhen. Ein höherer Zins kann die Währung aufwerten und Importe verbilligen, was bei einem negativen Außenbeitrag (d) hilft. Urteil: maßvolle Erhöhung sinnvoll, um Glaubwürdigkeit zu sichern, ergänzt durch angebotsseitige Maßnahmen.', punkte:['Wirkungskette der Zinserhöhung', 'begrenzte Wirkung bei Angebotsschock', 'Risiko für Wachstum/Beschäftigung', 'begründetes Urteil']}}
    ],
    hinweise:['Außenbeitrag = Exporte − Importe; in % des BIP: ÷ BIP · 100.']},

  /* ---------- GS4 · Inflation: Rente, Kredit und Bargeld ---------- */
  GS4:{titel:'Abiturfall: Herr Albers und die Preise',
    text:'Herr Albers bezog im Vorjahr eine Rente von {r0} im Monat, in diesem Jahr {r1}. Der Verbraucherpreisindex stieg im gleichen Zeitraum von {v0} auf {v1}. Für sein Auto zahlt er einen Kredit mit festem Zinssatz von {kz} ab. Zu Hause bewahrt er {bk} Bargeld auf.',
    zeilen:[{id:'r0', t:'Rente Vorjahr', e:'€', aus:true}, {id:'r1', t:'Rente', e:'€', aus:true}, {id:'v0', t:'VPI Vorjahr', e:'ma', aus:true}, {id:'v1', t:'VPI', e:'ma', aus:true}, {id:'kz', t:'Kreditzins', e:'%', aus:true}, {id:'bk', t:'Bargeld', e:'€', aus:true}],
    werte:[{r0:1500, r1:1560, v0:120, v1:127.2, kz:5, bk:5000}],
    sets:[[{r0:1400, r1:1449, v0:115, v1:117.3, kz:4.5, bk:4000}]],
    felder:[
      {id:'i', t:'a) Berechnen Sie die Inflationsrate (%).', f:'(v1 - v0) / v0 * 100', e:'%', kurz:'a) Inflationsrate'},
      {id:'rr', t:'b) Berechnen Sie die Veränderung der realen Rente (%; negativ mit Minuszeichen).', f:'((r1 / r0) / (v1 / v0) - 1) * 100', e:'%', kurz:'b) reale Rentenänderung'},
      {id:'rz', t:'c) Berechnen Sie den realen Zinssatz des Kredits (%).', f:'((1 + kz / 100) / (v1 / v0) - 1) * 100', e:'%', kurz:'c) Realzins'},
      {id:'kv', t:'d) Berechnen Sie den Kaufkraftverlust des Bargelds innerhalb des Jahres (€).', f:'bk - bk / (v1 / v0)', e:'€', kurz:'d) Kaufkraftverlust'}
    ],
    wahl:[
      {id:'w1', t:'e) Erläutern Sie, warum Kreditnehmer mit festem Zinssatz von hoher Inflation profitieren können.',
        frei:{muster:'Die Schuld und die Zinsen sind nominal fest vereinbart. Steigen die Preise und damit meist auch die Einkommen, verliert die Schuld real an Wert; der reale Zins (c) liegt deutlich unter dem vereinbarten Zins und kann sogar negativ werden. Der Kreditnehmer zahlt also Geld mit geringerer Kaufkraft zurück – er gewinnt, der Gläubiger (die Bank) verliert. Voraussetzung ist, dass sein eigenes Einkommen mit der Inflation steigt.', punkte:['nominal feste Schuld', 'realer Wertverlust der Schuld/Realzins', 'Gewinner und Verlierer', 'Voraussetzung (steigendes Einkommen)']}},
      {id:'w2', t:'f) Erläutern Sie zwei Ursachen der Inflation am Beispiel steigender Energiepreise.',
        frei:{muster:'Angebotsseitig (Kostendruckinflation): Steigen Energiepreise, erhöhen sich die Produktions- und Transportkosten; Unternehmen geben sie über höhere Preise weiter. Folgen höhere Lohnforderungen, kann eine Lohn-Preis-Spirale entstehen. Nachfrageseitig (Nachfrageinflation): Ist die gesamtwirtschaftliche Nachfrage, z. B. durch Staatsausgaben oder eine starke Ausweitung der Geldmenge, größer als das Angebot, können Unternehmen höhere Preise durchsetzen. Bei Energiepreisschocks dominiert die angebotsseitige Ursache.', punkte:['angebotsseitige Ursache (Kosten)', 'Zweitrundeneffekt/Lohn-Preis-Spirale', 'nachfrageseitige Ursache', 'Bezug zum Beispiel']}}
    ],
    hinweise:['Reale Veränderung = (1 + nominale Veränderung) ÷ (1 + Inflationsrate) − 1.', 'Kaufkraftverlust = Betrag − Betrag ÷ (VPI ÷ VPI Vorjahr).']},

  /* ---------- GS6 · Geldschöpfung bei Senkung des Mindestreservesatzes ---------- */
  GS6:{titel:'Abiturfall: Die Zentralbank senkt die Mindestreserve',
    text:'Ein Unternehmen zahlt {ez} Bargeld auf sein Konto bei der Bank A ein. Der Mindestreservesatz beträgt {rs}, die Banken halten zusätzlich eine Bargeldreserve von {bs} der Einlagen (vereinfachtes Modell ohne Bargeldabfluss an Nichtbanken). Die Zentralbank überlegt, den Mindestreservesatz auf {rn} zu senken.',
    zeilen:[{id:'ez', t:'Einzahlung', e:'€', aus:true}, {id:'rs', t:'Mindestreservesatz', e:'%', aus:true}, {id:'bs', t:'Bargeldreserve', e:'%', aus:true}, {id:'rn', t:'neuer Mindestreservesatz', e:'%', aus:true}],
    werte:[{ez:50000, rs:4, bs:6, rn:2}],
    sets:[[{ez:80000, rs:5, bs:7, rn:3}]],
    felder:[
      {id:'ue', t:'a) Berechnen Sie die Überschussreserve der Bank A (€).', f:'ez * (1 - (rs + bs) / 100)', e:'€', kurz:'a) Überschussreserve'},
      {id:'gm', t:'b) Berechnen Sie den Geldschöpfungsmultiplikator beim bisherigen Satz.', f:'1 / ((rs + bs) / 100)', kurz:'b) Multiplikator'},
      {id:'ge', t:'c) Berechnen Sie die maximale Geldschöpfung aller Banken beim bisherigen Satz (€).', f:'ez * (1 - (rs + bs) / 100) / ((rs + bs) / 100)', e:'€', kurz:'c) Geldschöpfung bisher'},
      {id:'dg', t:'d) Berechnen Sie, um wie viel die maximale Geldschöpfung nach der Senkung steigt (€).', f:'ez * (1 - (rn + bs) / 100) / ((rn + bs) / 100) - ez * (1 - (rs + bs) / 100) / ((rs + bs) / 100)', e:'€', kurz:'d) Zunahme der Geldschöpfung'}
    ],
    wahl:[
      {id:'w1', t:'e) Erläutern Sie, warum die Banken die zusätzliche Geldschöpfungsmöglichkeit nicht unbedingt ausschöpfen.',
        frei:{muster:'Die Rechnung zeigt nur eine Obergrenze. Kredite entstehen nur, wenn Unternehmen und Haushalte sie nachfragen – in einer schwachen Konjunktur fehlt diese Nachfrage. Banken vergeben Kredite nur an kreditwürdige Kunden und müssen Eigenkapitalvorschriften einhalten. Außerdem heben Kunden Bargeld ab, das dann nicht mehr als Einlage zur Verfügung steht. Die tatsächliche Geldschöpfung ist daher meist deutlich kleiner.', punkte:['Kreditnachfrage als Voraussetzung', 'Bonität und Eigenkapitalvorschriften', 'Bargeldabfluss', 'Folge: Obergrenze wird nicht erreicht']}},
      {id:'w2', t:'f) Beurteilen Sie die Mindestreserve als geldpolitisches Instrument der EZB.',
        frei:{muster:'Die Mindestreserve verpflichtet Banken, einen Teil ihrer Einlagen bei der Zentralbank zu halten; ein höherer Satz verringert theoretisch die Geldschöpfung, ein niedrigerer erhöht sie. Im Euroraum ist der Satz seit Jahren niedrig (1 %) und wird kaum verändert. Die EZB steuert die Geldpolitik vor allem über ihre Leitzinsen (Zinssatz für die Einlagefazilität, Hauptrefinanzierungssatz) und Wertpapierkäufe. Die Mindestreserve dient vor allem dazu, die Liquidität der Banken zu stabilisieren; als aktives Steuerungsinstrument ist sie heute von geringer Bedeutung.', punkte:['Wirkungsweise der Mindestreserve', 'aktuelle geringe Bedeutung im Euroraum', 'wichtigere Instrumente (Leitzinsen)', 'begründetes Urteil']}}
    ],
    hinweise:['Überschussreserve = Einlage · (1 − Reservesatz insgesamt).', 'Multiplikator = 1 ÷ Reservesatz insgesamt; maximale Geldschöpfung = Überschussreserve ÷ Reservesatz insgesamt.']},

  /* ---------- ET6 · EZB: Deflationsgefahr und Anleihekäufe (Fall) ---------- */
  ET6:{titel:'Abiturfall: Die EZB gegen die Deflationsgefahr',
    text:'Im Euroraum sinkt die Inflationsrate auf 0,8 %, die Wirtschaft schrumpft leicht, und die Banken vergeben kaum neue Kredite. Viele Unternehmen erwarten weiter fallende Preise und verschieben Investitionen. Der EZB-Rat senkt den Einlagesatz von 1,50 % auf 1,00 % und kündigt umfangreiche Käufe von Staats- und Unternehmensanleihen an.',
    teile:[
      {op:'Erläutern Sie', t:'warum die EZB auch eine zu niedrige Inflationsrate bekämpft.',
        frei:{muster:'Das Ziel der EZB ist Preisstabilität, definiert als 2 % Inflation mittelfristig – symmetrisch: Abweichungen nach unten sind ebenso unerwünscht wie nach oben. Bei sehr niedriger Inflation droht Deflation: Erwarten Haushalte und Unternehmen sinkende Preise, verschieben sie Käufe und Investitionen, die Nachfrage sinkt, Preise und Produktion fallen weiter (Deflationsspirale). Zudem steigt die reale Schuldenlast. Der Puffer von 2 % gibt der Geldpolitik außerdem Spielraum, die Zinsen in Krisen zu senken.', punkte:['Ziel 2 %, symmetrisch', 'Deflationsspirale (Kaufzurückhaltung)', 'reale Schuldenlast steigt', 'Bezug zum Fall']}},
      {op:'Beschreiben Sie', t:'die Wirkungskette der angekündigten Anleihekäufe.',
        frei:{muster:'Die EZB kauft Anleihen am Markt (nicht direkt vom Staat). Die Nachfrage nach Anleihen steigt, ihre Kurse steigen und die Renditen sinken – damit sinken langfristige Zinsen. Banken erhalten Zentralbankgeld und können mehr Kredite vergeben; Unternehmen finanzieren sich günstiger. Investitionen und Konsum steigen, die Nachfrage zieht an, die Inflation nähert sich wieder 2 %. Zusätzlich steigen Vermögenspreise, und ein schwächerer Euro verbilligt Exporte.', punkte:['Kauf am Sekundärmarkt', 'Kurse steigen, Renditen/langfristige Zinsen sinken', 'mehr Kredite, Investitionen, Nachfrage', 'weiterer Kanal (Vermögenspreise, Wechselkurs)']}},
      {op:'Ermitteln Sie', t:'den Zinsertrag einer Bank, die 500 Mio. € für 30 Tage zum neuen Einlagesatz bei der EZB anlegt (Zinstage/360).', opts:['416.666,67 €', '5.000.000,00 €', '625.000,00 €', '41.666,67 €'], r:0, weg:'500.000.000 € · 1,00 % · 30 ÷ 360 = 416.666,67 €.'},
      {op:'Beurteilen Sie', t:'die Risiken der Anleihekäufe.',
        frei:{muster:'Risiken: Werden Staatsanleihen in großem Umfang gekauft, verschwimmt die Grenze zum verbotenen direkten Staatsfinanzieren (monetäre Staatsfinanzierung); Staaten könnten Reformen verschieben. Steigende Aktien- und Immobilienpreise begünstigen Vermögende und können Blasen erzeugen. Die Zentralbankbilanz wächst stark, der Ausstieg ist schwierig, und die Unabhängigkeit der EZB könnte unter politischen Druck geraten. Dem steht der Nutzen gegenüber, eine Deflation zu verhindern, wenn die Leitzinsen kaum noch gesenkt werden können. Urteil: befristet und verhältnismäßig vertretbar.', punkte:['Nähe zur Staatsfinanzierung', 'Vermögenspreise/Verteilung', 'Ausstieg und Unabhängigkeit', 'Abwägung mit dem Nutzen']}}
    ],
    hinweise:['Preisstabilität: 2 % mittelfristig, symmetrisch.', 'Zinsertrag = Betrag · Zinssatz · Tage ÷ 360.']},

  /* ---------- ET7 · EZB: importierte Inflation und Wechselkurs (Fall) ---------- */
  ET7:{titel:'Abiturfall: Der schwache Euro',
    text:'Die US-Notenbank hat ihre Leitzinsen deutlich stärker erhöht als die EZB. Anleger schichten in Dollaranlagen um, der Euro fällt innerhalb eines Jahres von 1,10 US-$ auf 1,00 US-$. Rohöl wird in Dollar gehandelt und kostet unverändert 80 US-$ je Barrel. Die Inflationsrate im Euroraum steigt.',
    teile:[
      {op:'Erläutern Sie', t:'wie der schwache Euro die Inflation im Euroraum beeinflusst.',
        frei:{muster:'Fällt der Euro, werden Importe in Euro gerechnet teurer – vor allem Energie und Rohstoffe, die in Dollar gehandelt werden. Höhere Einkaufspreise erhöhen die Produktionskosten der Unternehmen, die diese über höhere Verkaufspreise weitergeben (importierte Inflation). Zugleich werden Exporte aus dem Euroraum billiger, die Auslandsnachfrage steigt – das erhöht zusätzlich den Preisdruck.', punkte:['Importe werden teurer', 'Kostenweitergabe (importierte Inflation)', 'Exportnachfrage steigt']}},
      {op:'Beschreiben Sie', t:'den Wechselkurskanal einer Leitzinserhöhung der EZB.',
        frei:{muster:'Erhöht die EZB die Leitzinsen, werden Anlagen im Euroraum im Vergleich zu Dollaranlagen attraktiver. Anleger fragen mehr Euro nach, der Euro wertet auf. Importe, insbesondere Energie, werden in Euro günstiger, Exporte teurer – der Preisdruck lässt nach. Dieser Kanal ergänzt die Wirkung über teurere Kredite und geringere Nachfrage.', punkte:['höhere Zinsen → Anlagen attraktiver', 'Nachfrage nach Euro, Aufwertung', 'Importe billiger, weniger Preisdruck']}},
      {op:'Ermitteln Sie', t:'wie sich der Ölpreis je Barrel in Euro durch den Kursrückgang verändert.', opts:['von 72,73 € auf 80,00 € (+10 %)', 'von 88,00 € auf 80,00 € (−9,1 %)', 'von 80,00 € auf 88,00 € (+10 %)', 'er bleibt bei 80,00 €'], r:0, weg:'80 US-$ ÷ 1,10 = 72,73 € · 80 US-$ ÷ 1,00 = 80,00 € · Anstieg 7,27 € ÷ 72,73 € = 10 %.'},
      {op:'Beurteilen Sie', t:'ob die EZB auf die importierte Inflation mit Zinserhöhungen reagieren sollte.',
        frei:{muster:'Für Zinserhöhungen spricht: Sie stützen den Euro, dämpfen damit die Importpreise und verhindern, dass sich höhere Inflationserwartungen und Lohnforderungen festsetzen (Zweitrundeneffekte). Dagegen spricht: Die Ursache liegt im Ausland, die Preise für Öl kann die EZB nicht direkt senken; höhere Zinsen belasten eine schwache Konjunktur und hoch verschuldete Staaten. Urteil: maßvolle Zinserhöhungen, wenn die Inflation über dem Ziel zu verharren droht; einmalige Preisschübe kann die EZB tolerieren.', punkte:['Argument für Zinserhöhung (Wechselkurs, Erwartungen)', 'Argument dagegen (Ursache, Konjunktur)', 'Zweitrundeneffekte', 'begründetes Urteil']}}
    ],
    hinweise:['Preis in Euro = Preis in US-$ ÷ Kurs (US-$ je €).']},

  /* ---------- AO5 · Sparprogramm in der Rezession ---------- */
  AO5:{titel:'Abiturfall: Sparen in der Krise?',
    text:'Westland steckt in der Rezession: BIP {bip} Mrd. €, Haushaltsdefizit {def} Mrd. €. Um das Defizit zu senken, kürzt die Regierung die Staatsausgaben um {ku} Mrd. €. Die marginale Konsumquote beträgt {cq}, Steuern und Sozialabgaben machen {tq} des BIP aus.',
    zeilen:[{id:'bip', t:'BIP', aus:true}, {id:'def', t:'Defizit', aus:true}, {id:'ku', t:'Kürzung', aus:true}, {id:'cq', t:'Konsumquote', e:'ma', aus:true}, {id:'tq', t:'Abgabenquote', e:'%', aus:true}],
    werte:[{bip:2000, def:80, ku:30, cq:0.6, tq:40}],
    sets:[[{bip:1500, def:60, ku:20, cq:0.5, tq:35}]],
    felder:[
      {id:'dq', t:'a) Berechnen Sie die Defizitquote vor der Kürzung (%).', f:'def / bip * 100', e:'%', kurz:'a) Defizitquote vorher'},
      {id:'dy', t:'b) Berechnen Sie den Rückgang des BIP nach dem Multiplikatormodell (Mrd. €).', f:'ku / (1 - cq)', kurz:'b) BIP-Rückgang'},
      {id:'me', t:'c) Berechnen Sie die Mindereinnahmen an Steuern und Abgaben durch den BIP-Rückgang (Mrd. €).', f:'ku / (1 - cq) * tq / 100', kurz:'c) Mindereinnahmen'},
      {id:'dn', t:'d) Berechnen Sie die Defizitquote nach der Kürzung (%).', f:'(def - ku + ku / (1 - cq) * tq / 100) / (bip - ku / (1 - cq)) * 100', e:'%', kurz:'d) Defizitquote nachher'}
    ],
    wahl:[
      {id:'w1', t:'e) Beurteilen Sie das Sparprogramm aus nachfrageorientierter Sicht.',
        frei:{muster:'Nachfrageorientiert (Keynes) ist das Sparprogramm prozyklisch: In der Rezession sinkt die Staatsnachfrage zusätzlich, über den Multiplikator schrumpft das BIP um ein Mehrfaches der Kürzung (b). Weil Einkommen sinken, gehen Steuereinnahmen zurück (c) und Sozialausgaben steigen. Das Defizit sinkt deshalb viel weniger als geplant, die Defizitquote kann sogar steigen (d). Empfohlen wäre antizyklisches Handeln: in der Krise stützen, im Aufschwung konsolidieren.', punkte:['prozyklische Wirkung', 'Multiplikatoreffekt mit Bezug auf b', 'Rückwirkung auf Einnahmen und Defizitquote (c, d)', 'Alternative antizyklische Politik']}},
      {id:'w2', t:'f) Erläutern Sie die Schuldenbremse des Grundgesetzes und ihre Ausnahmen.',
        frei:{muster:'Die Schuldenbremse begrenzt die strukturelle, also konjunkturbereinigte Neuverschuldung des Bundes auf 0,35 % des BIP; die Länder dürfen strukturell nur in engen Grenzen Kredite aufnehmen. Über eine Konjunkturkomponente sind in Abschwüngen höhere Defizite erlaubt, die im Aufschwung ausgeglichen werden müssen. Bei Naturkatastrophen oder außergewöhnlichen Notsituationen kann der Bundestag mit Mehrheit Ausnahmen beschließen, verbunden mit einem Tilgungsplan. Seit 2025 sind zudem Verteidigungsausgaben oberhalb einer Schwelle ausgenommen und ein kreditfinanziertes Sondervermögen für Infrastruktur erlaubt.', punkte:['strukturelle Grenze (0,35 % des BIP)', 'Konjunkturkomponente', 'Ausnahme bei Notsituationen', 'Bezug zur Lage in Westland']}}
    ],
    hinweise:['Multiplikator = 1 ÷ (1 − marginale Konsumquote).', 'Neues Defizit = altes Defizit − Kürzung + Mindereinnahmen.']},

  /* ---------- AO6 · Angebotsorientierung: Lohnnebenkosten senken ---------- */
  AO6:{titel:'Abiturfall: Weniger Sozialabgaben, mehr Mehrwertsteuer',
    text:'Die Regierung von Südland senkt den Arbeitgeberanteil zur Sozialversicherung von {ag} auf {an} des Bruttolohns und finanziert die Ausfälle über eine höhere Mehrwertsteuer. Ein durchschnittlicher Beschäftigter verdient {bl} brutto im Jahr; es gibt {nb} Mio. sozialversicherungspflichtig Beschäftigte. Der private Konsum beträgt {kp} Mrd. €, der Mehrwertsteuersatz steigt um {dp} Prozentpunkte.',
    zeilen:[{id:'ag', t:'AG-Anteil alt', e:'%', aus:true}, {id:'an', t:'AG-Anteil neu', e:'%', aus:true}, {id:'bl', t:'Bruttolohn', e:'€', aus:true}, {id:'nb', t:'Beschäftigte', aus:true}, {id:'kp', t:'Konsum', aus:true}, {id:'dp', t:'Erhöhung MwSt', e:'ma', aus:true}],
    werte:[{ag:20, an:18, bl:45000, nb:30, kp:1500, dp:2}],
    sets:[[{ag:21, an:19.5, bl:40000, nb:32, kp:1200, dp:1.5}]],
    felder:[
      {id:'k0', t:'a) Berechnen Sie die Arbeitskosten je Beschäftigtem vor der Reform (€).', f:'bl * (1 + ag / 100)', e:'€', kurz:'a) Arbeitskosten vorher'},
      {id:'k1', t:'b) Berechnen Sie die Arbeitskosten je Beschäftigtem nach der Reform (€).', f:'bl * (1 + an / 100)', e:'€', kurz:'b) Arbeitskosten nachher'},
      {id:'en', t:'c) Berechnen Sie die Entlastung aller Arbeitgeber (Mrd. €).', f:'bl * (ag - an) / 100 * nb / 1000', kurz:'c) Entlastung'},
      {id:'mw', t:'d) Berechnen Sie die zusätzlichen Mehrwertsteuereinnahmen bei unverändertem Konsum (Mrd. €, vereinfacht).', f:'kp * dp / 100', kurz:'d) Mehreinnahmen'}
    ],
    wahl:[
      {id:'w1', t:'e) Ordnen Sie die Reform einer wirtschaftspolitischen Konzeption zu und begründen Sie.',
        frei:{muster:'Die Reform gehört zur angebotsorientierten Wirtschaftspolitik: Sie verbessert die Produktionsbedingungen der Unternehmen, indem sie die Arbeitskosten senkt (a, b). Niedrigere Lohnnebenkosten sollen Neueinstellungen, Investitionen und die internationale Wettbewerbsfähigkeit fördern. Der Staat setzt nicht auf zusätzliche Nachfrage, sondern auf bessere Rahmenbedingungen für das Angebot.', punkte:['Zuordnung angebotsorientiert', 'Wirkung über niedrigere Arbeitskosten', 'erwartete Folgen (Beschäftigung, Wettbewerbsfähigkeit)']}},
      {id:'w2', t:'f) Beurteilen Sie die Reform hinsichtlich Beschäftigungs- und Verteilungswirkung.',
        frei:{muster:'Beschäftigung: Sinkende Arbeitskosten können Einstellungen fördern, besonders in arbeitsintensiven Branchen; ob Unternehmen die Entlastung (c) in Jobs oder in Gewinne umsetzen, ist unsicher. Verteilung: Die Mehrwertsteuer belastet alle Konsumenten, auch Rentner, Studierende und Arbeitslose, die von niedrigeren Beiträgen nichts haben. Haushalte mit geringem Einkommen geben einen größeren Teil ihres Einkommens für Konsum aus und werden relativ stärker belastet (regressive Wirkung). Kurzfristig kann der Konsum sinken. Urteil mit Abwägung.', punkte:['mögliche positive Beschäftigungswirkung', 'Unsicherheit der Wirkung', 'regressive Verteilungswirkung der Mehrwertsteuer', 'begründetes Urteil']}}
    ],
    hinweise:['Arbeitskosten = Bruttolohn · (1 + Arbeitgeberanteil).', 'Entlastung in Mrd. € = Bruttolohn · Senkung · Beschäftigte (Mio.) ÷ 1.000.']},

  /* ---------- AL6 · Arbeitsmarkt: Mindestlohn ---------- */
  AL6:{titel:'Abiturfall: Der Mindestlohn steigt',
    text:'Der gesetzliche Mindestlohn steigt von {m0} auf {m1} je Stunde. Eine Bäckereikette beschäftigt {nb} Mitarbeitende zum Mindestlohn mit je {st} Stunden im Monat; auf jeden Euro Lohn kommen {ag} Arbeitgeberbeiträge zur Sozialversicherung. Die Inflationsrate beträgt {inf}, die Arbeitsproduktivität steigt um {pz}; die EZB strebt 2 % Inflation an.',
    zeilen:[{id:'m0', t:'Mindestlohn alt', e:'€', aus:true}, {id:'m1', t:'Mindestlohn neu', e:'€', aus:true}, {id:'nb', t:'Mitarbeitende', aus:true}, {id:'st', t:'Stunden', aus:true}, {id:'ag', t:'AG-Beiträge', e:'%', aus:true}, {id:'inf', t:'Inflationsrate', e:'%', aus:true}, {id:'pz', t:'Produktivität', e:'%', aus:true}],
    werte:[{m0:13.9, m1:14.6, nb:25, st:160, ag:21, inf:2.2, pz:1}],
    sets:[[{m0:12.82, m1:13.9, nb:40, st:150, ag:20, inf:2.5, pz:1.2}]],
    felder:[
      {id:'pe', t:'a) Berechnen Sie die prozentuale Erhöhung des Mindestlohns (%).', f:'(m1 - m0) / m0 * 100', e:'%', kurz:'a) Erhöhung'},
      {id:'mk', t:'b) Berechnen Sie die monatlichen Mehrkosten der Bäckereikette einschließlich Arbeitgeberbeiträgen (€).', f:'nb * st * (m1 - m0) * (1 + ag / 100)', e:'€', kurz:'b) Mehrkosten'},
      {id:'rl', t:'c) Berechnen Sie die Veränderung des Reallohns der Beschäftigten (%).', f:'((m1 / m0) / (1 + inf / 100) - 1) * 100', e:'%', kurz:'c) Reallohn'},
      {id:'ue', t:'d) Berechnen Sie, um wie viele Prozentpunkte die Erhöhung über dem produktivitätsorientierten Lohnspielraum (Produktivität + Zielinflation) liegt.', f:'(m1 - m0) / m0 * 100 - (pz + 2)', kurz:'d) Abweichung vom Spielraum'}
    ],
    wahl:[
      {id:'w1', t:'e) Beurteilen Sie die Mindestlohnerhöhung aus Sicht der Beschäftigten und der Arbeitgeber.',
        frei:{muster:'Beschäftigte: Der Reallohn steigt (c), Geringverdiener können besser von ihrer Arbeit leben, die Kaufkraft und damit die Nachfrage steigen. Arbeitgeber: Die Lohnkosten steigen (b); liegt die Erhöhung über dem produktivitätsorientierten Spielraum (d), steigen die Lohnstückkosten. Betriebe müssen Preise erhöhen, Kosten senken oder Personal abbauen; vor allem in Branchen mit geringen Margen und in strukturschwachen Regionen drohen Jobverluste oder Schwarzarbeit. Bisherige Erfahrungen zeigen in Deutschland nur geringe negative Beschäftigungseffekte. Abwägendes Urteil.', punkte:['Vorteile für Beschäftigte (Reallohn, Kaufkraft)', 'Kostenwirkung für Arbeitgeber (Bezug b, d)', 'mögliche Beschäftigungsfolgen', 'begründetes Urteil']}},
      {id:'w2', t:'f) Erläutern Sie, wie der Mindestlohn in Deutschland festgelegt wird, und das Verhältnis zur Tarifautonomie.',
        frei:{muster:'Über die Anpassung entscheidet die Mindestlohnkommission, in der Arbeitgeber und Gewerkschaften gleich stark vertreten sind (dazu eine Vorsitzende und beratende Wissenschaftler). Sie orientiert sich nachlaufend an der Tarifentwicklung und berücksichtigt den Schutz der Beschäftigten, faire Wettbewerbsbedingungen und die Beschäftigung; die Bundesregierung setzt den Vorschlag per Verordnung um. Tarifautonomie bedeutet, dass Gewerkschaften und Arbeitgeberverbände Löhne ohne staatliche Einmischung aushandeln. Der Mindestlohn setzt dafür eine Untergrenze; Kritiker sehen einen Eingriff, wenn der Staat die Höhe politisch vorgibt.', punkte:['Mindestlohnkommission (Sozialpartner)', 'Kriterien/Orientierung an Tarifen', 'Begriff Tarifautonomie', 'Spannungsverhältnis']}}
    ],
    hinweise:['Reallohnänderung = (1 + nominale Änderung) ÷ (1 + Inflationsrate) − 1.', 'Produktivitätsorientierter Spielraum = Produktivitätszuwachs + Zielinflation.']},

  /* ---------- AL7 · Arbeitsmarkt: saisonale und friktionelle Arbeitslosigkeit ---------- */
  AL7:{titel:'Abiturfall: Sommer an der Küste',
    text:'In einer Ferienregion an der Ostsee gibt es {ep} Tsd. Erwerbspersonen. Im Januar sind {aw} Tsd. Menschen arbeitslos gemeldet, im Juli {as} Tsd. Von den Arbeitslosen im Januar sind {kz} Tsd. weniger als drei Monate ohne Arbeit; viele von ihnen haben bereits eine Zusage für die nächste Saison oder wechseln gerade die Stelle.',
    zeilen:[{id:'ep', t:'Erwerbspersonen', aus:true}, {id:'aw', t:'Arbeitslose Januar', aus:true}, {id:'as', t:'Arbeitslose Juli', aus:true}, {id:'kz', t:'kurzzeitig Arbeitslose', aus:true}],
    werte:[{ep:400, aw:36, as:22, kz:18}],
    sets:[[{ep:500, aw:40, as:30, kz:24}]],
    felder:[
      {id:'qw', t:'a) Berechnen Sie die Arbeitslosenquote im Januar (%).', f:'aw / ep * 100', e:'%', kurz:'a) Quote Januar'},
      {id:'qs', t:'b) Berechnen Sie die Arbeitslosenquote im Juli (%).', f:'as / ep * 100', e:'%', kurz:'b) Quote Juli'},
      {id:'dq', t:'c) Berechnen Sie den Unterschied in Prozentpunkten.', f:'(aw - as) / ep * 100', kurz:'c) Unterschied'},
      {id:'ak', t:'d) Berechnen Sie den Anteil der kurzzeitig Arbeitslosen an den Arbeitslosen im Januar (%).', f:'kz / aw * 100', e:'%', kurz:'d) Anteil kurzzeitig'}
    ],
    wahl:[
      {id:'w1', t:'e) Ordnen Sie die Arbeitslosigkeit in der Region Arten der Arbeitslosigkeit zu und begründen Sie.',
        frei:{muster:'Der Unterschied zwischen Winter und Sommer (c) ist saisonale Arbeitslosigkeit: Tourismus, Gastronomie und Bau beschäftigen im Winter weniger Menschen. Der hohe Anteil kurzzeitig Arbeitsloser (d), die bereits eine Zusage haben oder die Stelle wechseln, deutet auf friktionelle Arbeitslosigkeit (Sucharbeitslosigkeit) hin. Beide Arten sind vorübergehend; der Rest kann strukturell oder konjunkturell bedingt sein.', punkte:['saisonale Arbeitslosigkeit mit Bezug auf c', 'friktionelle Arbeitslosigkeit mit Bezug auf d', 'Abgrenzung zu struktureller/konjunktureller']}},
      {id:'w2', t:'f) Entwickeln Sie zwei Maßnahmen gegen die saisonale Arbeitslosigkeit und beurteilen Sie sie.',
        frei:{muster:'Ganzjahrestourismus fördern, z. B. Wellness, Tagungen und Kulturveranstaltungen im Winter – verlängert die Saison, erfordert aber Investitionen und Nachfrage. Saison-Kurzarbeitergeld bzw. Arbeitszeitkonten: Beschäftigte bleiben angestellt und werden im Winter mit weniger Stunden bezahlt – sichert Fachkräfte, kostet aber Beiträge. Qualifizierung im Winter (Weiterbildung) oder Arbeitnehmerüberlassung in andere Branchen sind weitere Wege. Urteil: Kombination sinnvoll, vollständig lässt sich Saisonarbeitslosigkeit nicht vermeiden.', punkte:['erste Maßnahme mit Wirkung', 'zweite Maßnahme mit Wirkung', 'Grenzen/Kosten', 'Urteil']}}
    ],
    hinweise:['Arbeitslosenquote = Arbeitslose ÷ Erwerbspersonen · 100.']},

  /* ---------- UI6 · Umweltpolitik: CO₂-Preis für Haushalte ---------- */
  UI6:{titel:'Abiturfall: Was kostet der CO₂-Preis Familie Yilmaz?',
    text:'Für Heizöl und Kraftstoffe gilt ein CO₂-Preis von {p} je Tonne. Familie Yilmaz (zwei Personen) verbraucht im Jahr {hl} Liter Heizöl (2,65 kg CO₂ je Liter) und fährt {km} km mit einem Benziner, der {vb} Liter je 100 km verbraucht (2,37 kg CO₂ je Liter). Die Regierung erwägt, die Einnahmen von {ae} Mrd. € als Klimageld gleichmäßig an alle {ew} Mio. Einwohner auszuzahlen.',
    zeilen:[{id:'p', t:'CO₂-Preis', e:'€', aus:true}, {id:'hl', t:'Heizöl', aus:true}, {id:'km', t:'Kilometer', aus:true}, {id:'vb', t:'Verbrauch', e:'ma', aus:true}, {id:'ae', t:'Einnahmen', aus:true}, {id:'ew', t:'Einwohner', aus:true}],
    werte:[{p:55, hl:2000, km:15000, vb:7, ae:12, ew:84}],
    sets:[[{p:65, hl:1500, km:12000, vb:6, ae:15, ew:84}]],
    felder:[
      {id:'kh', t:'a) Berechnen Sie die CO₂-Kosten für das Heizöl (€).', f:'hl * 2.65 / 1000 * p', e:'€', kurz:'a) CO₂-Kosten Heizöl'},
      {id:'kb', t:'b) Berechnen Sie die CO₂-Kosten für das Benzin (€).', f:'km / 100 * vb * 2.37 / 1000 * p', e:'€', kurz:'b) CO₂-Kosten Benzin'},
      {id:'kg', t:'c) Berechnen Sie das Klimageld je Einwohner (€).', f:'ae * 1000 / ew', e:'€', kurz:'c) Klimageld je Kopf'},
      {id:'sa', t:'d) Berechnen Sie die Nettobelastung der Familie nach Auszahlung des Klimagelds (€; Entlastung mit Minuszeichen).', f:'hl * 2.65 / 1000 * p + km / 100 * vb * 2.37 / 1000 * p - 2 * ae * 1000 / ew', e:'€', kurz:'d) Nettobelastung'}
    ],
    wahl:[
      {id:'w1', t:'e) Erläutern Sie, wie der CO₂-Preis das Verhalten von Haushalten lenkt.',
        frei:{muster:'Der CO₂-Preis macht fossile Energie teurer und lässt die Verursacher die externen Kosten ihrer Emissionen zum Teil selbst tragen (Verursacherprinzip). Wer viel CO₂ ausstößt, zahlt mehr (a, b). Dadurch lohnt es sich, weniger zu heizen, Gebäude zu dämmen, auf eine Wärmepumpe umzusteigen, weniger Auto zu fahren oder ein sparsameres bzw. elektrisches Auto zu kaufen. Der Anreiz bleibt auch bei Rückzahlung eines Klimagelds erhalten, weil jede eingesparte Tonne die Kosten senkt.', punkte:['Verteuerung fossiler Energie/Verursacherprinzip', 'Anpassungsreaktionen der Haushalte', 'Anreiz bleibt trotz Rückerstattung']}},
      {id:'w2', t:'f) Beurteilen Sie das geplante Klimageld.',
        frei:{muster:'Das Klimageld gibt die Einnahmen pro Kopf zurück. Haushalte mit geringem Verbrauch – oft solche mit niedrigem Einkommen – erhalten mehr zurück, als sie zahlen; Vielverbraucher zahlen drauf (d). Das erhöht die Akzeptanz und wirkt sozial ausgleichend, ohne die Lenkungswirkung aufzuheben. Probleme: Pendler auf dem Land oder Mieter in schlecht gedämmten Wohnungen können kaum ausweichen; das Geld fehlt für andere Klimaschutzausgaben (z. B. Förderprogramme); die Auszahlung erfordert einen Verwaltungsweg. Urteil mit Abwägung.', punkte:['soziale Ausgleichswirkung', 'Lenkungswirkung bleibt', 'Problemgruppen/Gegenargumente', 'begründetes Urteil']}}
    ],
    hinweise:['CO₂ in t = Liter · kg je Liter ÷ 1.000.', 'Klimageld je Kopf = Einnahmen (Mrd. €) · 1.000 ÷ Einwohner (Mio.).']},

  /* ---------- UI7 · Umweltpolitik: externe Kosten und Pigou-Steuer ---------- */
  UI7:{titel:'Abiturfall: Die Steuer auf Düngemittel',
    text:'Auf dem Markt für Stickstoffdünger gilt die Nachfragefunktion p = {a} − {b}x und die Angebotsfunktion p = {c} + {d}x (x in 1.000 t, p in € je t). Durch Nitrat im Grundwasser entstehen externe Kosten von {e} € je t, die in den Preisen nicht enthalten sind. Die Regierung erwägt eine Steuer in Höhe der externen Kosten.',
    zeilen:[{id:'a', t:'a', aus:true}, {id:'b', t:'b', aus:true}, {id:'c', t:'c', aus:true}, {id:'d', t:'d', aus:true}, {id:'e', t:'externe Kosten', aus:true}],
    werte:[{a:100, b:2, c:10, d:1, e:15}],
    sets:[[{a:80, b:1, c:20, d:1, e:10}]],
    felder:[
      {id:'x0', t:'a) Berechnen Sie die Gleichgewichtsmenge ohne Steuer (1.000 t).', f:'(a - c) / (b + d)', kurz:'a) Menge ohne Steuer'},
      {id:'p0', t:'b) Berechnen Sie den Gleichgewichtspreis ohne Steuer (€ je t).', f:'a - b * (a - c) / (b + d)', e:'€', kurz:'b) Preis ohne Steuer'},
      {id:'x1', t:'c) Berechnen Sie die Gleichgewichtsmenge mit Steuer (1.000 t).', f:'(a - c - e) / (b + d)', kurz:'c) Menge mit Steuer'},
      {id:'st', t:'d) Berechnen Sie das Steueraufkommen (1.000 €).', f:'e * (a - c - e) / (b + d)', kurz:'d) Steueraufkommen'}
    ],
    wahl:[
      {id:'w1', t:'e) Erläutern Sie, warum der Markt ohne Eingriff zu viel Dünger hervorbringt.',
        frei:{muster:'Die Kosten der Nitratbelastung tragen nicht Hersteller und Landwirte, sondern Dritte – etwa Wasserversorger und Verbraucher (negative externe Effekte). Der Marktpreis spiegelt deshalb nur die privaten Kosten wider und ist zu niedrig; die Menge (a) liegt über dem gesellschaftlich optimalen Niveau. Es kommt zu Marktversagen: Knappe Umweltgüter werden übernutzt, weil sie keinen Preis haben.', punkte:['externe Kosten erklärt', 'Preis zu niedrig, Menge zu hoch (Bezug a)', 'Marktversagen']}},
      {id:'w2', t:'f) Beurteilen Sie die Steuer in Höhe der externen Kosten (Pigou-Steuer).',
        frei:{muster:'Die Steuer verteuert den Dünger um die externen Kosten, die Angebotskurve verschiebt sich nach oben, die Menge sinkt auf das gesellschaftlich optimale Niveau (c); die externen Kosten werden internalisiert (Verursacherprinzip). Der Staat erzielt Einnahmen (d), die er z. B. für Gewässerschutz verwenden kann. Problem: Die Höhe der externen Kosten ist schwer zu messen; die Treffsicherheit für ein bestimmtes Umweltziel ist geringer als bei Auflagen oder Zertifikaten; Landwirte im internationalen Wettbewerb werden belastet. Urteil mit Abwägung.', punkte:['Wirkung auf Preis und Menge (Bezug c)', 'Internalisierung/Verursacherprinzip', 'Problem der Bewertung und Treffsicherheit', 'begründetes Urteil']}}
    ],
    hinweise:['Gleichgewicht: a − bx = c + dx.', 'Mit Steuer: Angebot p = c + e + dx.', 'Steueraufkommen = Steuersatz · Menge mit Steuer.']},

  /* ---------- OF6 · Öffentliche Finanzen: Steuerprogression ---------- */
  OF6:{titel:'Abiturfall: Wie stark steigt die Einkommensteuer?',
    text:'In Südland zahlt eine Person mit einem zu versteuernden Einkommen von {z1} eine Einkommensteuer von {e1}. Steigt das zu versteuernde Einkommen auf {z2}, beträgt die Steuer {e2}. Die Steuertarife werden seit Jahren nicht an die Inflation angepasst.',
    zeilen:[{id:'z1', t:'zvE 1', e:'€', aus:true}, {id:'e1', t:'Steuer 1', e:'€', aus:true}, {id:'z2', t:'zvE 2', e:'€', aus:true}, {id:'e2', t:'Steuer 2', e:'€', aus:true}],
    werte:[{z1:30000, e1:4500, z2:31000, e2:4800}],
    sets:[[{z1:60000, e1:15000, z2:61000, e2:15420}]],
    felder:[
      {id:'d1', t:'a) Berechnen Sie den Durchschnittssteuersatz beim niedrigeren Einkommen (%).', f:'e1 / z1 * 100', e:'%', kurz:'a) Durchschnittssteuersatz 1'},
      {id:'d2', t:'b) Berechnen Sie den Durchschnittssteuersatz beim höheren Einkommen (%).', f:'e2 / z2 * 100', e:'%', kurz:'b) Durchschnittssteuersatz 2'},
      {id:'gs', t:'c) Berechnen Sie den Grenzsteuersatz in diesem Bereich (%).', f:'(e2 - e1) / (z2 - z1) * 100', e:'%', kurz:'c) Grenzsteuersatz'},
      {id:'nz', t:'d) Berechnen Sie, wie viel von der Einkommenserhöhung nach Steuern übrig bleibt (€).', f:'(z2 - z1) - (e2 - e1)', e:'€', kurz:'d) Netto der Erhöhung'}
    ],
    wahl:[
      {id:'w1', t:'e) Erläutern Sie das Leistungsfähigkeitsprinzip und wie der progressive Tarif es umsetzt.',
        frei:{muster:'Nach dem Leistungsfähigkeitsprinzip soll jeder entsprechend seiner wirtschaftlichen Leistungsfähigkeit zur Finanzierung des Staates beitragen. Der progressive Tarif setzt das um: Mit steigendem Einkommen steigt nicht nur der Steuerbetrag, sondern auch der Durchschnittssteuersatz (a, b), weil jeder zusätzliche Euro mit einem höheren Grenzsteuersatz (c) belastet wird. Ein Grundfreibetrag stellt das Existenzminimum steuerfrei. So tragen Bezieher hoher Einkommen relativ mehr bei – das wirkt umverteilend.', punkte:['Inhalt des Leistungsfähigkeitsprinzips', 'Durchschnitts- vs. Grenzsteuersatz mit Bezug auf a–c', 'Grundfreibetrag', 'Umverteilungswirkung']}},
      {id:'w2', t:'f) Beurteilen Sie die Folgen der nicht angepassten Tarife („kalte Progression“).',
        frei:{muster:'Steigen die Löhne nur im Umfang der Inflation, bleibt die Kaufkraft gleich. Weil der Tarif aber nicht angepasst wird, rutschen die Steuerpflichtigen in höhere Grenz- und Durchschnittssteuersätze; sie zahlen real mehr Steuern, ihr Realeinkommen nach Steuern sinkt. Der Staat erhält Mehreinnahmen ohne Gesetzesänderung – eine heimliche Steuererhöhung, die besonders mittlere Einkommen trifft und Leistungsanreize mindert. Abhilfe: regelmäßige Anpassung des Tarifs an die Inflation (Tarif auf Rädern); das kostet den Staat allerdings Einnahmen.', punkte:['Mechanismus der kalten Progression', 'Folgen für Steuerzahler', 'Folgen für den Staat', 'Lösung mit Abwägung']}}
    ],
    hinweise:['Durchschnittssteuersatz = Steuer ÷ zu versteuerndes Einkommen · 100.', 'Grenzsteuersatz = Steueränderung ÷ Einkommensänderung · 100.']},

  /* ---------- OF7 · Öffentliche Finanzen: Steuerarten und Quoten (Fall) ---------- */
  OF7:{titel:'Abiturfall: Mehrwertsteuer oder Einkommensteuer?',
    text:'Der Staat Mittelland nimmt im Jahr 950 Mrd. € Steuern ein, das BIP beträgt 4.300 Mrd. €. Für den Bundeshaushalt fallen 40 Mrd. € Zinsen an, die Steuereinnahmen des Bundes betragen 400 Mrd. €. Um zusätzliche Verteidigungs- und Bildungsausgaben zu finanzieren, schlägt eine Partei eine höhere Mehrwertsteuer vor, eine andere einen höheren Spitzensteuersatz der Einkommensteuer.',
    teile:[
      {op:'Erläutern Sie', t:'den Unterschied zwischen direkten und indirekten Steuern an je einem Beispiel aus dem Fall.',
        frei:{muster:'Bei direkten Steuern sind Steuerschuldner und Steuerträger dieselbe Person: Wer Einkommen erzielt, zahlt die Einkommensteuer selbst. Bei indirekten Steuern führt ein anderer die Steuer ab, als sie wirtschaftlich trägt: Die Unternehmen führen die Mehrwertsteuer an das Finanzamt ab, getragen wird sie von den Verbrauchern über den Preis. Direkte Steuern können an die persönliche Leistungsfähigkeit anknüpfen, indirekte nicht.', punkte:['Merkmal direkter Steuern mit Beispiel', 'Merkmal indirekter Steuern mit Beispiel', 'Bezug zur Leistungsfähigkeit']}},
      {op:'Ermitteln Sie', t:'die Steuerquote von Mittelland.', opts:['22,09 %', '4,53 %', '9,30 %', '42,11 %'], r:0, weg:'950 ÷ 4.300 · 100 = 22,09 %.'},
      {op:'Ermitteln Sie', t:'die Zins-Steuer-Quote des Bundes.', opts:['10 %', '4,21 %', '0,93 %', '1 %'], r:0, weg:'40 ÷ 400 · 100 = 10 %.'},
      {op:'Beurteilen Sie', t:'die beiden Vorschläge zur Finanzierung der Mehrausgaben.',
        frei:{muster:'Höhere Mehrwertsteuer: bringt schnell hohe, konjunkturell stabile Einnahmen und belastet auch Konsum aus Vermögen, wirkt aber regressiv – Haushalte mit niedrigem Einkommen geben einen größeren Teil für Konsum aus; zudem kann sie die Preise und den Konsum dämpfen. Höherer Spitzensteuersatz: folgt dem Leistungsfähigkeitsprinzip und belastet hohe Einkommen; bringt aber weniger Einnahmen, kann Leistungs- und Investitionsanreize mindern und trifft Personenunternehmen. Urteil mit Abwägung von Aufkommen, Gerechtigkeit und Wachstum.', punkte:['Bewertung Mehrwertsteuer (Aufkommen, regressiv)', 'Bewertung Spitzensteuersatz (Leistungsfähigkeit, Anreize)', 'Wirkung auf Konjunktur/Wachstum', 'begründetes Urteil']}}
    ],
    hinweise:['Steuerquote = Steuereinnahmen ÷ BIP · 100.', 'Zins-Steuer-Quote = Zinsausgaben ÷ Steuereinnahmen · 100.']},

  /* ---------- FM5 · Außenwirtschaft: Abwertung aus Sicht eines Importeurs (Fall) ---------- */
  FM5:{titel:'Abiturfall: Der schwache Euro und der Importeur',
    text:'Die TechImport GmbH bezieht Laptops aus den USA und zahlt in US-Dollar. Weil die US-Notenbank die Zinsen erhöht, während die EZB sie senkt, fällt der Euro von 1,25 auf 1,10 US-Dollar. Eine Rechnung über 500.000 US-Dollar ist in drei Monaten fällig. Die GmbH überlegt, künftige Rechnungen abzusichern.',
    teile:[
      {op:'Erklären Sie', t:'die Abwertung des Euro.',
        frei:{muster:'Höhere Zinsen in den USA machen Dollaranlagen attraktiver. Anleger verkaufen Euro und kaufen Dollar, um in den USA anzulegen (Kapitalabflüsse aus dem Euroraum). Das Angebot an Euro am Devisenmarkt steigt, die Nachfrage nach Dollar steigt – der Euro verliert an Wert, man erhält für einen Euro weniger Dollar.', punkte:['Zinsdifferenz', 'Kapitalbewegungen', 'Angebot/Nachfrage am Devisenmarkt']}},
      {op:'Ermitteln Sie', t:'den Euro-Betrag der Rechnung zum alten und zum neuen Kurs.', opts:['400.000,00 € → 454.545,45 €', '625.000,00 € → 550.000,00 €', '454.545,45 € → 400.000,00 €', '500.000,00 € → 500.000,00 €'], r:0, weg:'500.000 ÷ 1,25 = 400.000 € · 500.000 ÷ 1,10 = 454.545,45 €.'},
      {op:'Erläutern Sie', t:'wie die GmbH sich mit einem Devisentermingeschäft absichern kann.',
        frei:{muster:'Mit einem Devisentermingeschäft vereinbart die GmbH heute mit ihrer Bank, die benötigten Dollar zu einem festen Kurs (Terminkurs) zum Fälligkeitstag zu kaufen. Damit steht der Euro-Betrag der Rechnung fest – Kalkulationssicherheit. Fällt der Euro weiter, ist sie geschützt; steigt er, kann sie vom günstigeren Kurs nicht profitieren, weil sie an den vereinbarten Kurs gebunden ist.', punkte:['Vereinbarung eines festen Kurses heute', 'Kalkulationssicherheit', 'Verzicht auf Chancen']}},
      {op:'Beurteilen Sie', t:'die Folgen der Euro-Abwertung für die deutsche Wirtschaft.',
        frei:{muster:'Exporteure profitieren: Ihre Waren werden im Ausland billiger, die Auslandsnachfrage und die Beschäftigung in Exportbranchen steigen. Importeure und Verbraucher verlieren: Importe, vor allem Energie und Rohstoffe, werden teurer, die Inflation steigt (importierte Inflation), die Kaufkraft sinkt. Für ein exportstarkes Land kann die Abwertung kurzfristig die Konjunktur stützen, sie verschärft aber außenwirtschaftliche Ungleichgewichte und den Preisdruck. Urteil mit Abwägung.', punkte:['Vorteile für Exporteure', 'Nachteile für Importeure/Verbraucher', 'importierte Inflation', 'Gesamturteil']}}
    ],
    hinweise:['Betrag in € = Betrag in US-$ ÷ Kurs (US-$ je €).']},

  /* ---------- FM6 · Außenwirtschaft: Import aus der Schweiz ---------- */
  FM6:{titel:'Abiturfall: Die Maschine aus der Schweiz',
    text:'Die Kunststofftechnik Lörrach GmbH kauft eine Spritzgießmaschine für {chf} Schweizer Franken; Zahlung in drei Monaten. Aktueller Kurs: {k1} CHF je Euro. Die Bank bietet ein Devisentermingeschäft zum Kurs von {kt} CHF je Euro an. Bei Fälligkeit liegt der Kassakurs bei {k2} CHF je Euro.',
    zeilen:[{id:'chf', t:'Rechnungsbetrag', aus:true}, {id:'k1', t:'Kurs heute', e:'ma', aus:true}, {id:'kt', t:'Terminkurs', e:'ma', aus:true}, {id:'k2', t:'Kurs bei Fälligkeit', e:'ma', aus:true}],
    werte:[{chf:480000, k1:0.96, kt:0.95, k2:0.92}],
    sets:[[{chf:300000, k1:0.94, kt:0.93, k2:0.97}]],
    felder:[
      {id:'a1', t:'a) Berechnen Sie die Kosten der Maschine zum heutigen Kurs (€).', f:'chf / k1', e:'€', kurz:'a) Kosten heute'},
      {id:'a2', t:'b) Berechnen Sie die Kosten ohne Absicherung bei Fälligkeit (€).', f:'chf / k2', e:'€', kurz:'b) Kosten ohne Absicherung'},
      {id:'at', t:'c) Berechnen Sie die Kosten mit Termingeschäft (€).', f:'chf / kt', e:'€', kurz:'c) Kosten mit Termingeschäft'},
      {id:'wv', t:'d) Berechnen Sie die prozentuale Veränderung des Kurses (CHF je €) zwischen heute und Fälligkeit (%; Rückgang mit Minuszeichen).', f:'(k2 - k1) / k1 * 100', e:'%', kurz:'d) Kursänderung'}
    ],
    wahl:[
      {id:'w1', t:'e) Beurteilen Sie die Entscheidung für oder gegen die Kurssicherung im Nachhinein.',
        frei:{muster:'Ist der Euro gegenüber dem Franken gefallen (d negativ), wäre die Maschine ohne Absicherung teurer geworden (b > c) – das Termingeschäft hat sich gelohnt. Ist der Euro gestiegen, wäre die ungesicherte Zahlung günstiger gewesen; das Termingeschäft hat dann Geld gekostet. Entscheidend ist aber nicht das Ergebnis im Nachhinein: Die Absicherung schafft Kalkulationssicherheit für die Investitionsentscheidung und schützt vor großen Verlusten. Bei einer größeren Investition ist sie in der Regel sinnvoll.', punkte:['Vergleich b und c mit Bezug auf d', 'Fall eines steigenden Euro', 'Zweck: Kalkulationssicherheit', 'Urteil']}},
      {id:'w2', t:'f) Erläutern Sie zwei Faktoren, die den Wechselkurs zwischen Franken und Euro beeinflussen.',
        frei:{muster:'Zinsdifferenz: Steigen die Zinsen im Euroraum gegenüber der Schweiz, werden Euroanlagen attraktiver, der Euro wertet auf. Sicherer Hafen: In Krisen flüchten Anleger in den Franken, er wertet auf und der Euro ab. Weitere Faktoren sind die Inflationsdifferenz (Kaufkraftparität), Leistungsbilanzsalden und Interventionen der Schweizerischen Nationalbank am Devisenmarkt.', punkte:['erster Faktor mit Wirkungsrichtung', 'zweiter Faktor mit Wirkungsrichtung', 'Bezug zu Angebot und Nachfrage am Devisenmarkt']}}
    ],
    hinweise:['Betrag in € = Betrag in CHF ÷ Kurs (CHF je €).']},

  /* ---------- XA6 · common goods (case) ---------- */
  XA6:{titel:'Abiturfall: Groundwater in a dry summer',
    text:'After several dry summers, the groundwater level in the Upper Rhine valley is falling. Farmers pump water for irrigation free of charge; each farmer argues that his own use makes little difference. Water suppliers warn that drinking water could become scarce. The state government considers either a water price per cubic metre or fixed quotas for each farm.',
    teile:[
      {op:'Explain', t:'why the groundwater is overused (tragedy of the commons).',
        frei:{muster:'Groundwater is a common good: it is rival (water one farmer uses is not available for others) but hardly excludable (anyone with a well can pump it, free of charge). Each farmer gains the full benefit of extra irrigation but bears only a tiny part of the damage, which is shared by all. Acting rationally in their own interest, all farmers use too much – the resource is overused although this harms everyone in the long run.', punkte:['rival and non-excludable', 'individual benefit vs. shared costs', 'collective result: overuse']}},
      {op:'Analyse', t:'the behaviour of the farmers with the model of homo oeconomicus.',
        frei:{muster:'Homo oeconomicus acts rationally, is fully informed and maximises his own benefit. The farmers behave in this way: they compare their private benefit and costs, and since water is free, they irrigate as much as is useful for them. The model explains the overuse well, but real people also act out of responsibility, tradition or social pressure; voluntary agreements between farmers show that cooperation is possible.', punkte:['assumptions of the model', 'application to the farmers', 'limits of the model']}},
      {op:'Assess', t:'a water price compared with fixed quotas.',
        frei:{muster:'A water price follows the polluter-pays principle: those who use more pay more, and farmers who can save water cheaply have the strongest incentive to do so – efficient. However, the reduction in total use is uncertain and farmers’ incomes fall. Quotas guarantee a maximum total use (ecologically precise), but they are inflexible and do not reward extra savings. A combination – quotas that can be traded, or a price above a basic allowance – could combine both advantages.', punkte:['effect and advantage of a price', 'disadvantage of a price', 'advantage/disadvantage of quotas', 'justified conclusion']}}
    ]},

  /* ---------- XA7 · economic systems (case) ---------- */
  XA7:{titel:'Abiturfall: Queues for bread',
    text:'In a centrally planned economy, a state planning office decides how much bread, meat and cars are produced and fixes all prices. Bread is very cheap, but there are long queues in front of bakeries every morning, and shelves are often empty in the afternoon. At the same time, large amounts of bread are fed to animals because it is cheaper than animal feed.',
    teile:[
      {op:'Explain', t:'the three basic economic questions and how a centrally planned economy answers them.',
        frei:{muster:'Every economy must decide what and how much is produced, how it is produced and for whom it is produced. In a centrally planned economy a state authority answers all three questions in a central plan: it determines quantities, production methods and the distribution of goods, and it fixes prices. In a market economy these decisions are made by households and firms and coordinated by prices on markets.', punkte:['three basic questions', 'answer of the planned economy', 'contrast with the market economy']}},
      {op:'Analyse', t:'why the low bread price leads to queues and waste.',
        frei:{muster:'The fixed price is far below the market-clearing price. At this price, households demand much more bread than is produced – a shortage that shows up as queues and empty shelves. Because the price does not reflect scarcity, bread is used wastefully, even as animal feed. Producers have no incentive to produce more, since they cannot sell at a higher price.', punkte:['price below equilibrium → shortage', 'missing signal of scarcity', 'waste and missing incentives']}},
      {op:'Evaluate', t:'the social market economy as an alternative.',
        frei:{muster:'In the social market economy, prices on markets coordinate supply and demand, so shortages and waste are avoided and firms have incentives to produce efficiently. The state ensures competition and social balance – e.g. through social security and transfers to low-income households – instead of fixing prices. Disadvantages: incomes are unequal and the market alone does not protect the environment. Overall it combines efficiency with social security better than central planning.', punkte:['role of prices and competition', 'social compensation by the state', 'limitation', 'justified conclusion']}}
    ]},

  /* ---------- XI6 · elasticity (case) ---------- */
  XI6:{titel:'Abiturfall: A more expensive swimming pool',
    text:'The town of Bruchsal raises the entrance fee for its outdoor pool from 4 € to 5 €. The number of visitors on an average summer day falls from 1,000 to 900. In the same summer, a heatwave hits the region, and a new free bathing lake opens nearby.',
    teile:[
      {op:'Calculate', t:'the price elasticity of demand.', opts:['−0.4', '−2.5', '−0.1', '−1.0'], r:0, weg:'%Δ quantity = −10 % · %Δ price = +25 % · PED = −10 ÷ 25 = −0.4.'},
      {op:'Explain', t:'the effect of the price increase on the town’s revenue.',
        frei:{muster:'Demand is price-inelastic (|PED| < 1): the number of visitors falls by a smaller percentage than the price rises. Revenue therefore increases – from 4 € · 1,000 = 4,000 € to 5 € · 900 = 4,500 € per day. Reasons for inelastic demand: few substitutes for a pool on a hot day, and the fee is a small part of the budget.', punkte:['inelastic demand identified', 'revenue before and after', 'reason for the elasticity']}},
      {op:'Analyse', t:'how the heatwave and the new bathing lake influence the demand for the pool.',
        frei:{muster:'Both events shift the demand curve rather than causing a movement along it. The heatwave increases the desire to swim – demand shifts to the right. The free bathing lake is a substitute – demand shifts to the left. The overall effect depends on which influence is stronger; the observed fall in visitors may therefore not be caused by the price increase alone.', punkte:['heatwave: shift to the right', 'lake as substitute: shift to the left', 'shift vs. movement; consequence for the interpretation']}}
    ]},

  /* ---------- XI7 · price and income elasticity ---------- */
  XI7:{titel:'Abiturfall: The organic food shop',
    text:'An organic food shop raises the price of its bread from {p0} € to {p1} €; weekly sales fall from {x0} to {x1} loaves. In another town, the average household income rises from {y0} € to {y1} € per month while the price stays the same; weekly sales of the same bread rise from {z0} to {z1} loaves.',
    zeilen:[{id:'p0', t:'price before', aus:true}, {id:'p1', t:'price after', aus:true}, {id:'x0', t:'sales before', aus:true}, {id:'x1', t:'sales after', aus:true}, {id:'y0', t:'income before', aus:true}, {id:'y1', t:'income after', aus:true}, {id:'z0', t:'sales before (income)', aus:true}, {id:'z1', t:'sales after (income)', aus:true}],
    werte:[{p0:4, p1:4.4, x0:1000, x1:900, y0:2000, y1:2100, z0:1000, z1:1080}],
    sets:[[{p0:5, p1:5.5, x0:800, x1:760, y0:2500, y1:2600, z0:800, z1:820}]],
    felder:[
      {id:'pe', t:'a) Calculate the price elasticity of demand.', f:'((x1 - x0) / x0) / ((p1 - p0) / p0)', kurz:'a) PED'},
      {id:'ru', t:'b) Calculate the change in weekly revenue (€; decrease with minus sign).', f:'p1 * x1 - p0 * x0', kurz:'b) change in revenue'},
      {id:'ye', t:'c) Calculate the income elasticity of demand.', f:'((z1 - z0) / z0) / ((y1 - y0) / y0)', kurz:'c) income elasticity'},
      {id:'rp', t:'d) Calculate the percentage change in revenue caused by the price increase (%).', f:'(p1 * x1 - p0 * x0) / (p0 * x0) * 100', e:'%', kurz:'d) % change in revenue'}
    ],
    wahl:[
      {id:'w1', t:'e) Explain what the results show about the bread.',
        frei:{muster:'The price elasticity shows how strongly customers react to the price: if |PED| < 1, demand is inelastic and revenue rises; if |PED| = 1, revenue stays almost the same; if |PED| > 1, revenue falls (a, b, d). The income elasticity (c) is positive, so organic bread is a normal good; a value above 1 indicates a superior (luxury) good whose demand grows faster than income.', punkte:['interpretation of the PED and revenue', 'income elasticity: normal good', 'superior good if > 1']}},
      {id:'w2', t:'f) Recommend a pricing decision for the shop.',
        frei:{muster:'If demand is inelastic, a moderate price increase raises revenue and, since costs fall with lower quantities, profit. If demand is elastic, the shop should rather keep prices stable and attract customers with quality and service. Because organic bread is a normal or superior good, the shop benefits from rising incomes; in a recession, however, demand could fall. Competitors’ prices and customer loyalty must also be considered.', punkte:['decision depending on elasticity', 'role of income development', 'further factors (competition, loyalty)']}}
    ],
    hinweise:['PED = %Δ quantity ÷ %Δ price · income elasticity = %Δ quantity ÷ %Δ income.']},

  /* ---------- XJ6 · subsidy in the market model ---------- */
  XJ6:{titel:'Abiturfall: A subsidy for heat pumps',
    text:'Market for heat pumps: demand Qd = {a} − {b} · P, supply Qs = {d} · P − {c} (P in € per unit, Q in thousand units). The government pays producers a subsidy of {s} € per heat pump; the supply curve becomes Qs = {d} · (P + {s}) − {c}.',
    zeilen:[{id:'a', t:'a', aus:true}, {id:'b', t:'b', e:'ma', aus:true}, {id:'c', t:'c', aus:true}, {id:'d', t:'d', e:'ma', aus:true}, {id:'s', t:'subsidy', aus:true}],
    werte:[{a:500, b:0.05, c:100, d:0.05, s:2000}],
    sets:[[{a:500, b:0.05, c:100, d:0.05, s:1000}]],
    felder:[
      {id:'p0', t:'a) Calculate the equilibrium price without the subsidy (€).', f:'(a + c) / (b + d)', e:'€', kurz:'a) price without subsidy'},
      {id:'p1', t:'b) Calculate the equilibrium price with the subsidy (€).', f:'(a + c - d * s) / (b + d)', e:'€', kurz:'b) price with subsidy'},
      {id:'q1', t:'c) Calculate the equilibrium quantity with the subsidy (thousand units).', f:'a - b * (a + c - d * s) / (b + d)', kurz:'c) quantity with subsidy'},
      {id:'ko', t:'d) Calculate the cost of the subsidy for the government (€ million).', f:'s * (a - b * (a + c - d * s) / (b + d)) / 1000', kurz:'d) cost of subsidy'}
    ],
    wahl:[
      {id:'w1', t:'e) Explain who benefits from the subsidy.',
        frei:{muster:'The subsidy shifts the supply curve to the right. Buyers pay a lower price (b instead of a) and buy more heat pumps (c). Producers receive the market price plus the subsidy, i.e. more per unit than before. How the benefit is shared depends on the slopes of demand and supply; here both curves are equally steep, so buyers and producers each gain half of the subsidy per unit. Taxpayers finance the subsidy (d).', punkte:['shift of supply', 'lower price for buyers, higher receipt for producers', 'sharing depends on elasticities', 'financed by taxpayers']}},
      {id:'w2', t:'f) Evaluate the subsidy as an instrument of climate policy.',
        frei:{muster:'The subsidy makes heat pumps cheaper and speeds up the switch from oil and gas heating – emissions fall. It is popular because it rewards instead of punishing. However, it is expensive for the state budget, may also be paid to people who would have bought anyway (windfall gains), and producers may raise prices. A CO₂ price follows the polluter-pays principle and generates revenue; a combination of both, with the subsidy targeted at low-income households, is often recommended.', punkte:['effect on emissions', 'costs and windfall gains', 'comparison with a CO₂ price', 'justified conclusion']}}
    ],
    hinweise:['Equilibrium: a − b·P = d·P − c.', 'With subsidy: a − b·P = d·(P + s) − c.']},

  /* ---------- XJ7 · price ceiling for rents ---------- */
  XJ7:{titel:'Abiturfall: A rent cap for Freiburg',
    text:'Market for rental flats in Freiburg: demand Qd = {a} − {b} · P, supply Qs = {c} + {d} · P (P in € per m² per month, Q in thousand flats). To help tenants, the city council sets a maximum rent of {ph} € per m².',
    zeilen:[{id:'a', t:'a', aus:true}, {id:'b', t:'b', aus:true}, {id:'c', t:'c', aus:true}, {id:'d', t:'d', aus:true}, {id:'ph', t:'maximum rent', aus:true}],
    werte:[{a:1000, b:50, c:100, d:40, ph:8}],
    sets:[[{a:1200, b:40, c:200, d:60, ph:8}]],
    felder:[
      {id:'pe', t:'a) Calculate the equilibrium rent (€ per m²).', f:'(a - c) / (b + d)', e:'€', kurz:'a) equilibrium rent'},
      {id:'qd', t:'b) Calculate the quantity demanded at the maximum rent (thousand flats).', f:'a - b * ph', kurz:'b) demand at maximum rent'},
      {id:'qs', t:'c) Calculate the quantity supplied at the maximum rent (thousand flats).', f:'c + d * ph', kurz:'c) supply at maximum rent'},
      {id:'sh', t:'d) Calculate the shortage of flats (thousand flats).', f:'(a - b * ph) - (c + d * ph)', kurz:'d) shortage'}
    ],
    wahl:[
      {id:'w1', t:'e) Explain the effects of the maximum rent.',
        frei:{muster:'The maximum rent lies below the equilibrium rent (a), so it is binding. Tenants who have a flat pay less. But demand rises and supply falls (b, c): a shortage arises (d). Landlords choose tenants by other criteria (income, connections), black markets and side payments appear, and investors build fewer new flats; the quality of existing flats may decline because maintenance pays off less.', punkte:['binding ceiling below equilibrium', 'shortage with reference to the figures', 'side effects (selection, black market)', 'long-term effects on supply and quality']}},
      {id:'w2', t:'f) Evaluate housing benefit as an alternative.',
        frei:{muster:'Housing benefit is paid directly to low-income households, so help goes to those who need it, while rents remain market prices – supply incentives are preserved and no shortage arises. However, it is financed by taxpayers and, if supply is scarce, landlords may raise rents, so part of the benefit goes to them. Building more flats (e.g. land for housing, faster permits) addresses the root cause. Overall housing benefit is more targeted than a rent cap but should be combined with measures to increase supply.', punkte:['targeted help', 'market prices and incentives preserved', 'costs and price effects', 'justified conclusion']}}
    ],
    hinweise:['Equilibrium: a − b·P = c + d·P.', 'Shortage = quantity demanded − quantity supplied at the maximum rent.']},

  /* ---------- XM6 · protectionism (case) ---------- */
  XM6:{titel:'Abiturfall: Duties on Chinese e-bikes',
    text:'The EU imposes an anti-dumping duty of 35 % on e-bikes from China because Chinese producers sell below their costs with state support. A Chinese e-bike previously cost a German retailer 800 € (import price). European e-bike makers welcome the duty; retailers and consumer organisations criticise it.',
    teile:[
      {op:'Calculate', t:'the import price of the e-bike including the duty.', opts:['1,080 €', '835 €', '1,035 €', '520 €'], r:0, weg:'800 € · 1.35 = 1,080 €.'},
      {op:'Explain', t:'two arguments for protecting the European e-bike industry.',
        frei:{muster:'Protection against unfair competition: if Chinese producers sell below cost thanks to state subsidies (dumping), European firms lose market share although they are efficient; the duty restores fair conditions. Securing jobs and know-how: e-bikes are a growing future market; if European production disappears, jobs, suppliers and technological capabilities are lost and Europe becomes dependent on imports.', punkte:['first argument (dumping/fair competition)', 'second argument (jobs, know-how, dependence)']}},
      {op:'Discuss', t:'the consequences of the duty for consumers and retailers.',
        frei:{muster:'Consumers pay higher prices and have less choice; e-bikes become less affordable, which may slow down the switch to environmentally friendly mobility. Retailers’ margins fall or they lose sales; they must look for new suppliers. China may retaliate with duties on European goods (trade conflict). On the other hand, fair competition can secure a diverse European supply in the long run. A balanced judgement weighs short-term costs against long-term benefits.', punkte:['effects on consumers', 'effects on retailers', 'risk of retaliation', 'balanced conclusion']}}
    ]},

  /* ---------- XM7 · comparative advantage and exchange rate ---------- */
  XM7:{titel:'Abiturfall: Olive oil and furniture',
    text:'Spain and Poland produce olive oil and furniture. Labour hours per unit: Spain needs {so} hours for a barrel of olive oil and {sf} hours for a piece of furniture; Poland needs {po} hours for a barrel of olive oil and {pf} hours for a piece of furniture. A Polish sofa costs {pz} złoty. The exchange rate is {k1} złoty per euro; after a depreciation of the złoty it is {k2} złoty per euro.',
    zeilen:[{id:'so', t:'Spain oil', aus:true}, {id:'sf', t:'Spain furniture', aus:true}, {id:'po', t:'Poland oil', aus:true}, {id:'pf', t:'Poland furniture', aus:true}, {id:'pz', t:'price sofa', aus:true}, {id:'k1', t:'rate before', e:'ma', aus:true}, {id:'k2', t:'rate after', e:'ma', aus:true}],
    werte:[{so:4, sf:8, po:10, pf:10, pz:2000, k1:4.3, k2:4.6}],
    sets:[[{so:6, sf:9, po:8, pf:6, pz:1500, k1:4.2, k2:4.5}]],
    felder:[
      {id:'os', t:'a) Calculate Spain’s opportunity costs of one barrel of olive oil (pieces of furniture).', f:'so / sf', kurz:'a) OC oil Spain'},
      {id:'op', t:'b) Calculate Poland’s opportunity costs of one barrel of olive oil (pieces of furniture).', f:'po / pf', kurz:'b) OC oil Poland'},
      {id:'e1', t:'c) Calculate the euro price of the sofa before the depreciation (€).', f:'pz / k1', e:'€', kurz:'c) price before'},
      {id:'e2', t:'d) Calculate the euro price of the sofa after the depreciation (€).', f:'pz / k2', e:'€', kurz:'d) price after'}
    ],
    wahl:[
      {id:'w1', t:'e) Explain the pattern of specialisation and the gains from trade.',
        frei:{muster:'The country with the lower opportunity costs for olive oil has a comparative advantage in olive oil (a, b) and should specialise in it; the other country specialises in furniture. Even if one country is more productive in both goods (absolute advantage), both gain from specialisation and trade according to Ricardo: total production increases, and each country can consume more than without trade.', punkte:['comparative advantage identified with figures', 'specialisation pattern', 'gains from trade (Ricardo)']}},
      {id:'w2', t:'f) Assess the effect of the złoty depreciation on trade between the two countries.',
        frei:{muster:'After the depreciation, Polish goods become cheaper for buyers in the euro area (c, d), so Polish furniture exports rise; imports of Spanish olive oil become more expensive for Polish consumers. This supports Polish producers and jobs, but raises import prices and inflation in Poland. For Spanish furniture makers, competition from Poland increases. The effect is favourable for exporters, unfavourable for importers and consumers in Poland.', punkte:['Polish exports cheaper', 'imports more expensive/inflation', 'effects on Spain', 'overall assessment']}}
    ],
    hinweise:['Opportunity costs of oil = hours for oil ÷ hours for furniture.', 'Price in € = price in złoty ÷ złoty per euro.']},

  /* ---------- XL6 · circular economy (case) ---------- */
  XL6:{titel:'Abiturfall: Repair instead of replace',
    text:'In a German town, volunteers run a repair café where citizens can have broken toasters, phones and bikes repaired for free. The EU has introduced a “right to repair”: manufacturers must offer repairs and spare parts for several years. A retail association warns that fewer new products will be sold and that GDP will grow more slowly.',
    teile:[
      {op:'Explain', t:'the idea of a circular economy.',
        frei:{muster:'In a linear economy, raw materials are extracted, products are made, used and thrown away. A circular economy keeps products and materials in use for as long as possible: products are designed to last, repaired, reused, shared and finally recycled. Waste and the consumption of new resources fall.', punkte:['contrast with the linear economy', 'principles (repair, reuse, recycle)', 'aim: less waste and resource use']}},
      {op:'Analyse', t:'the right to repair with regard to the three dimensions of sustainability.',
        frei:{muster:'Ecological: longer use saves raw materials and energy and reduces e-waste. Economic: consumers save money; new jobs arise in repair services; manufacturers may sell fewer new products and must keep spare parts. Social: repairs become affordable for low-income households, and repair cafés strengthen community and skills.', punkte:['ecological dimension', 'economic dimension', 'social dimension']}},
      {op:'Evaluate', t:'whether slower GDP growth is a reason to reject the right to repair.',
        frei:{muster:'GDP measures the market value of goods and services produced; it rises when broken products are replaced, but it ignores resource consumption, waste and unpaid work such as volunteer repairs. Lower GDP growth from fewer new purchases does not necessarily mean lower wellbeing. Alternative indicators (e.g. a national welfare index or the SDG indicators) give a more complete picture. Therefore slower GDP growth is not a convincing argument against the right to repair.', punkte:['what GDP measures', 'weaknesses as a welfare indicator', 'alternative indicators', 'justified conclusion']}}
    ]},

  /* ---------- XL7 · supply chains and the SDGs (case) ---------- */
  XL7:{titel:'Abiturfall: The price of chocolate',
    text:'A German chocolate maker buys cocoa from West Africa. Studies show child labour on many cocoa farms and deforestation of rainforest. Under the German Supply Chain Act, large companies must identify and reduce human rights and environmental risks in their supply chains. The chocolate maker could pay higher prices to certified farms, which would raise the price of a bar by 20 cents.',
    teile:[
      {op:'Analyse', t:'cocoa production with regard to the three dimensions of sustainability.',
        frei:{muster:'Ecological: deforestation for new cocoa farms destroys rainforest and biodiversity and releases CO₂. Social: child labour and very low incomes violate human rights and keep families in poverty. Economic: low world market prices give farmers little income and make investment impossible, while chocolate makers profit from cheap raw materials.', punkte:['ecological dimension', 'social dimension', 'economic dimension']}},
      {op:'Identify', t:'two SDGs that are affected and explain the link.',
        frei:{muster:'SDG 1 (no poverty) and SDG 8 (decent work and economic growth): farmers earn too little and children work instead of going to school. SDG 15 (life on land): deforestation destroys forests and biodiversity. SDG 12 (responsible consumption and production) also applies to consumers and companies.', punkte:['first SDG with link', 'second SDG with link']}},
      {op:'Evaluate', t:'the obligations of the Supply Chain Act for the chocolate maker.',
        frei:{muster:'The law obliges the company to analyse risks, take preventive measures, set up a complaints procedure. This can reduce child labour and deforestation and protects the company’s reputation. However, controls deep in the supply chain are difficult, bureaucracy and costs increase, and higher prices may reduce sales. Small suppliers could be excluded instead of supported. Overall the law sets important minimum standards; its success depends on cooperation with farmers and fair prices.', punkte:['obligations described', 'benefits', 'costs and problems', 'justified conclusion']}}
    ]},

  /* ---------- PK4 · Knappheit und Opportunitätskosten ---------- */
  PK4:{titel:'Abiturfall: Jana und die freie Zeit',
    text:'Jana (17) hat neben der Schule {h} Stunden pro Woche frei. Sie kann in einem Café zu {lc} je Stunde jobben. Alternativ kann sie bis zu {hn} Stunden pro Woche Nachhilfe zu {ln} je Stunde geben und die übrige Zeit im Café arbeiten. Sie überlegt aber auch, die ganze Zeit für die Vorbereitung auf das Abitur zu nutzen.',
    zeilen:[{id:'h', t:'freie Stunden', aus:true}, {id:'lc', t:'Lohn Café', e:'€', aus:true}, {id:'hn', t:'Nachhilfestunden', aus:true}, {id:'ln', t:'Lohn Nachhilfe', e:'€', aus:true}],
    werte:[{h:10, lc:13.9, hn:4, ln:18}],
    sets:[[{h:8, lc:14.6, hn:3, ln:20}]],
    felder:[
      {id:'ec', t:'a) Berechnen Sie Janas Wocheneinkommen, wenn sie nur im Café arbeitet (€).', f:'h * lc', e:'€', kurz:'a) nur Café'},
      {id:'en', t:'b) Berechnen Sie ihr Wocheneinkommen mit Nachhilfe und Café (€).', f:'hn * ln + (h - hn) * lc', e:'€', kurz:'b) Nachhilfe + Café'},
      {id:'ok', t:'c) Ermitteln Sie die Opportunitätskosten einer Woche Lernen statt Arbeiten (€).', f:'max(h * lc, hn * ln + (h - hn) * lc)', e:'€', kurz:'c) Opportunitätskosten'},
      {id:'e4', t:'d) Berechnen Sie ihr Einkommen in vier Wochen bei der günstigsten Arbeitsvariante (€).', f:'4 * max(h * lc, hn * ln + (h - hn) * lc)', e:'€', kurz:'d) Einkommen in 4 Wochen'}
    ],
    wahl:[
      {id:'w1', t:'e) Erläutern Sie am Beispiel von Jana die Begriffe Knappheit, Opportunitätskosten und ökonomisches Prinzip.',
        frei:{muster:'Janas Zeit ist knapp: Sie kann sie nur einmal verwenden, für Arbeit oder für Lernen. Opportunitätskosten sind der Nutzen der besten nicht gewählten Alternative – lernt sie, verzichtet sie auf das höchste mögliche Einkommen (c). Nach dem ökonomischen Prinzip handelt sie rational, wenn sie mit ihrer gegebenen Zeit ein möglichst hohes Ergebnis erzielt (Maximalprinzip) – etwa, indem sie die besser bezahlte Nachhilfe vorzieht.', punkte:['Knappheit', 'Opportunitätskosten mit Bezug auf c', 'ökonomisches Prinzip (Maximal-/Minimalprinzip)']}},
      {id:'w2', t:'f) Beurteilen Sie, ob Jana arbeiten oder lernen sollte.',
        frei:{muster:'Kurzfristig bringt Arbeit Einkommen (d) und Erfahrung, Nachhilfe festigt zudem eigenes Wissen. Lernen kostet heute Einkommen, ist aber eine Investition in Humankapital: Ein besseres Abitur kann den Zugang zu Studium und Ausbildung und damit das spätere Einkommen deutlich erhöhen. Die langfristigen Opportunitätskosten einer schlechten Note können höher sein als der heutige Verdienst. Sinnvoll ist ein Kompromiss, z. B. Nachhilfe in wenigen Stunden und mehr Lernzeit vor den Prüfungen.', punkte:['Nutzen der Arbeit', 'Lernen als Investition in Humankapital', 'kurz- vs. langfristige Opportunitätskosten', 'begründetes Urteil']}}
    ],
    hinweise:['Opportunitätskosten = Nutzen der besten nicht gewählten Alternative.']},

  /* ---------- PK5 · Arbeitsteilung in der Schülerfirma ---------- */
  PK5:{titel:'Abiturfall: Flyer und Plakate in der Schülerfirma',
    text:'In der Schülerfirma „PrintPoint“ gestalten Lena und Tom Werbemittel. In einer Stunde schafft Lena {lf} Flyer oder {lp} Plakate, Tom {tf} Flyer oder {tp} Plakate. Beide haben in dieser Woche je {h} Stunden Zeit.',
    zeilen:[{id:'lf', t:'Lena Flyer', aus:true}, {id:'lp', t:'Lena Plakate', aus:true}, {id:'tf', t:'Tom Flyer', aus:true}, {id:'tp', t:'Tom Plakate', aus:true}, {id:'h', t:'Stunden', aus:true}],
    werte:[{lf:20, lp:4, tf:10, tp:4, h:5}],
    sets:[[{lf:24, lp:6, tf:12, tp:6, h:4}]],
    felder:[
      {id:'ol', t:'a) Berechnen Sie Lenas Opportunitätskosten für ein Plakat (Flyer).', f:'lf / lp', kurz:'a) OK Plakat Lena'},
      {id:'ot', t:'b) Berechnen Sie Toms Opportunitätskosten für ein Plakat (Flyer).', f:'tf / tp', kurz:'b) OK Plakat Tom'},
      {id:'fs', t:'c) Lena macht nur Flyer, Tom nur Plakate. Berechnen Sie die Zahl der Flyer.', f:'lf * h', kurz:'c) Flyer bei Spezialisierung'},
      {id:'mg', t:'d) Ohne Spezialisierung arbeiten beide je zur Hälfte an Flyern und Plakaten. Berechnen Sie, wie viele Flyer durch die Spezialisierung bei gleicher Plakatzahl mehr entstehen.', f:'lf * h - (lf + tf) * h / 2', kurz:'d) Mehrmenge Flyer'}
    ],
    wahl:[
      {id:'w1', t:'e) Begründen Sie, warum sich die Spezialisierung lohnt, obwohl Lena bei Flyern und Plakaten mindestens so schnell ist wie Tom.',
        frei:{muster:'Entscheidend ist nicht der absolute, sondern der komparative Vorteil. Lena verzichtet für ein Plakat auf mehr Flyer als Tom (a, b); Tom hat also bei Plakaten, Lena bei Flyern die geringeren Opportunitätskosten. Spezialisieren sich beide auf das Gut mit ihrem komparativen Vorteil, entstehen bei gleicher Plakatzahl mehr Flyer (d) – beide profitieren.', punkte:['absoluter vs. komparativer Vorteil', 'Vergleich der Opportunitätskosten', 'Mehrproduktion durch Spezialisierung']}},
      {id:'w2', t:'f) Erläutern Sie je zwei Vor- und Nachteile der Arbeitsteilung.',
        frei:{muster:'Vorteile: höhere Produktivität durch Übung und Spezialisierung; Fähigkeiten werden besser genutzt, die Gesamtmenge steigt. Nachteile: Eintönigkeit und geringere Motivation; Abhängigkeit voneinander – fällt einer aus, fehlt ein Produkt; außerdem höherer Abstimmungsaufwand.', punkte:['zwei Vorteile', 'zwei Nachteile']}}
    ],
    hinweise:['Opportunitätskosten eines Plakats = Flyer je Stunde ÷ Plakate je Stunde.']},

  /* ---------- WI4 · Wirtschaftskreislauf mit Staat ---------- */
  WI4:{titel:'Abiturfall: Der Kreislauf in Westland',
    text:'Im Land Westland erhalten die privaten Haushalte Einkommen von {y} Mrd. €. Sie zahlen {st} Mrd. € Steuern und Abgaben an den Staat und sparen {sp} Mrd. €; den Rest geben sie für Konsum aus. Der Staat gibt {sa} Mrd. € aus.',
    zeilen:[{id:'y', t:'Einkommen', aus:true}, {id:'st', t:'Steuern', aus:true}, {id:'sp', t:'Ersparnis', aus:true}, {id:'sa', t:'Staatsausgaben', aus:true}],
    werte:[{y:2400, st:600, sp:180, sa:650}],
    sets:[[{y:3000, st:800, sp:264, sa:760}]],
    felder:[
      {id:'ve', t:'a) Berechnen Sie das verfügbare Einkommen der Haushalte (Mrd. €).', f:'y - st', kurz:'a) verfügbares Einkommen'},
      {id:'ko', t:'b) Berechnen Sie den Konsum (Mrd. €).', f:'y - st - sp', kurz:'b) Konsum'},
      {id:'sq', t:'c) Berechnen Sie die Sparquote (%).', f:'sp / (y - st) * 100', e:'%', kurz:'c) Sparquote'},
      {id:'bs', t:'d) Berechnen Sie den Finanzierungssaldo des Staates (Mrd. €; Defizit mit Minuszeichen).', f:'st - sa', kurz:'d) Staatssaldo'}
    ],
    wahl:[
      {id:'w1', t:'e) Erläutern Sie den Wirtschaftskreislauf mit Staat und Banken an den Zahlen von Westland.',
        frei:{muster:'Haushalte stellen Unternehmen Arbeit und Kapital zur Verfügung und erhalten dafür Einkommen. Einen Teil zahlen sie als Steuern an den Staat, einen Teil sparen sie bei den Banken, den Rest geben sie für Konsumgüter bei den Unternehmen aus (b). Der Staat kauft Güter und zahlt Transfers und Gehälter. Weil er mehr ausgibt als er einnimmt (bzw. umgekehrt, d), muss er sich bei den Banken verschulden oder kann Kredite tilgen. Die Banken leiten die Ersparnisse als Kredite an Unternehmen (Investitionen) und Staat weiter.', punkte:['Ströme Haushalte – Unternehmen', 'Rolle des Staates', 'Rolle der Banken (Sparen – Kredite)', 'Bezug auf die Zahlen']}},
      {id:'w2', t:'f) Beurteilen Sie eine stark steigende Sparquote für die Wirtschaft.',
        frei:{muster:'Mehr Sparen stellt den Banken mehr Mittel für Kredite zur Verfügung; sinken dadurch die Zinsen, können Investitionen steigen – langfristig wächst der Kapitalstock. Kurzfristig fehlt aber Konsumnachfrage: Unternehmen verkaufen weniger, Produktion und Beschäftigung sinken, im schlimmsten Fall sinken die Einkommen und damit auch die Ersparnisse (Sparparadoxon). Die Wirkung hängt von der Konjunkturlage und davon ab, ob die Ersparnis tatsächlich investiert wird.', punkte:['positiver Effekt (Kredite, Investitionen)', 'negativer Effekt (Nachfrageausfall)', 'Sparparadoxon/Konjunkturlage', 'Urteil']}}
    ],
    hinweise:['Verfügbares Einkommen = Einkommen − Steuern und Abgaben.', 'Sparquote = Ersparnis ÷ verfügbares Einkommen · 100.']},

  /* ---------- WI5 · Verwendungsrechnung des BIP ---------- */
  WI5:{titel:'Abiturfall: Wofür wird das BIP verwendet?',
    text:'Für Nordland liegen folgende Werte vor (Mrd. €): private Konsumausgaben {c}, Bruttoinvestitionen {iv}, Konsumausgaben des Staates {g}, Exporte {ex}, Importe {im}. Nordland hat {ew} Mio. Einwohner.',
    zeilen:[{id:'c', t:'privater Konsum', aus:true}, {id:'iv', t:'Investitionen', aus:true}, {id:'g', t:'Staatskonsum', aus:true}, {id:'ex', t:'Exporte', aus:true}, {id:'im', t:'Importe', aus:true}, {id:'ew', t:'Einwohner', aus:true}],
    werte:[{c:2200, iv:900, g:950, ex:1800, im:1650, ew:84}],
    sets:[[{c:1800, iv:700, g:800, ex:1300, im:1200, ew:70}]],
    felder:[
      {id:'bi', t:'a) Berechnen Sie das BIP (Mrd. €).', f:'c + iv + g + ex - im', kurz:'a) BIP'},
      {id:'kq', t:'b) Berechnen Sie den Anteil des privaten Konsums am BIP (%).', f:'c / (c + iv + g + ex - im) * 100', e:'%', kurz:'b) Konsumquote'},
      {id:'ab', t:'c) Berechnen Sie den Außenbeitrag (Mrd. €).', f:'ex - im', kurz:'c) Außenbeitrag'},
      {id:'pk', t:'d) Berechnen Sie das BIP je Einwohner (€).', f:'(c + iv + g + ex - im) / ew * 1000', e:'€', kurz:'d) BIP je Einwohner'}
    ],
    wahl:[
      {id:'w1', t:'e) Erläutern Sie zwei Gründe, warum das BIP den Wohlstand nur unvollständig misst.',
        frei:{muster:'Das BIP erfasst nur Leistungen, die über Märkte gehandelt werden; Hausarbeit, Pflege in der Familie und Ehrenamt fehlen, Schwarzarbeit ebenso. Es sagt nichts über die Verteilung der Einkommen aus. Umweltschäden und Ressourcenverbrauch werden nicht abgezogen – Reparaturen nach Unfällen oder Umweltkatastrophen erhöhen das BIP sogar. Auch Freizeit, Gesundheit und Bildung werden nicht erfasst.', punkte:['erster Grund erläutert', 'zweiter Grund erläutert']}},
      {id:'w2', t:'f) Erläutern Sie den Unterschied zwischen Bruttoinlandsprodukt und Bruttonationaleinkommen.',
        frei:{muster:'Das Bruttoinlandsprodukt erfasst alle im Inland erbrachten Leistungen, gleich ob Inländer oder Ausländer sie erbringen (Inlandskonzept). Das Bruttonationaleinkommen erfasst die Einkommen der Inländer, gleich ob im In- oder Ausland erzielt (Inländerkonzept): BNE = BIP + Primäreinkommen aus dem Ausland − Primäreinkommen an das Ausland. Bei vielen Grenzpendlern oder Auslandsinvestitionen können beide deutlich abweichen.', punkte:['Inlandskonzept', 'Inländerkonzept', 'Umrechnung']}}
    ],
    hinweise:['BIP = privater Konsum + Investitionen + Staatskonsum + Exporte − Importe.']}

  }; return []; })(),
/* ---------- Volkswirtschaft · Wirtschaftsgymnasium Eingangsklasse (VBWL, Bildungsplan 2021, BPE 1 und 2) ----------
   GU Güterarten und Grundfragen · HO Homo oeconomicus und reales Verhalten · PK Arbeitsteilung, Produktionsmöglichkeiten, Opportunitätskosten (mit Abiturfall BPE 1)
   VG Verteilungsgerechtigkeit · GD Geld: Funktionen und Arten · BO Preisbildung an der Börse · GG Grundgesetz und Ordoliberalismus
   WI Wohlstand messen (mit Abiturfall BPE 2). Neu am 04.11.2026. */
...(() => {
  const T = ['Volkswirtschaft', 'Wirtschaftsgymnasium'];
  const tab = (kopf, zeilen) => '<table class="lager"><tr>' + kopf.map(k => '<th>' + k + '</th>').join('') + '</tr>' + zeilen.map(z => '<tr>' + z.map((x, i) => '<td' + (i % 2 ? ' class="z"' : '') + '>' + x + '</td>').join('') + '</tr>').join('') + '</table>';
  const buch1 = tab(['Kaufaufträge', 'Stück', 'Verkaufsaufträge', 'Stück'], [['billigst', '100', 'bestens', '150'], ['Limit 21 €', '200', 'Limit 18 €', '200'], ['Limit 20 €', '250', 'Limit 19 €', '250'], ['Limit 19 €', '200', 'Limit 20 €', '300']]);
  const buch2 = tab(['Kaufaufträge', 'Stück', 'Verkaufsaufträge', 'Stück'], [['billigst', '200', 'bestens', '100'], ['Limit 48 €', '100', 'Limit 45 €', '300'], ['Limit 47 €', '300', 'Limit 46 €', '300'], ['Limit 46 €', '400', 'Limit 47 €', '400']]);
  return [
  /* ======================= GU · Güterarten und Grundfragen der Volkswirtschaft ======================= */
  blBau('zuordnung', {id:'GU1', modul:'GU', stufe:1, titel:'Private Güter, öffentliche Güter, Allmende- und Klubgüter', tags:T.concat(['Güterarten']),
    text:'Güter lassen sich danach einteilen, ob andere von der Nutzung ausgeschlossen werden können (Ausschließbarkeit) und ob die Nutzung durch eine Person die Nutzung durch andere einschränkt (Rivalität). Ordne zu.',
    kategorien:['privates Gut', 'öffentliches Gut', 'Allmendegut', 'Klubgut'], anzahl:8,
    faelle:[
      {t:'Fischbestand im offenen Meer', k:2, weg:'niemand kann ausgeschlossen werden, aber jeder gefangene Fisch fehlt den anderen'},
      {t:'ein Streaming-Abo', k:3, weg:'nur zahlende Kunden haben Zugang, ein weiterer Zuschauer stört die anderen nicht'},
      {t:'ein Brötchen beim Bäcker', k:0},
      {t:'Deich zum Hochwasserschutz', k:1, weg:'schützt alle hinter dem Deich, egal ob sie zahlen'},
      {t:'Weideland, das alle Bauern eines Dorfes kostenlos nutzen dürfen', k:2},
      {t:'Straßenbeleuchtung', k:1},
      {t:'ein Fahrrad', k:0},
      {t:'Fitnessstudio mit Mitgliedsbeitrag (nicht ausgelastet)', k:3},
      {t:'Landesverteidigung', k:1},
      {t:'Grundwasser, das jeder Betrieb kostenlos abpumpen darf', k:2}
    ],
    hinweise:['Kann man Nichtzahler ausschließen? Schränkt meine Nutzung die der anderen ein?', 'Ausschluss ja + Rivalität ja = privat · Ausschluss nein + Rivalität nein = öffentlich · Ausschluss nein + Rivalität ja = Allmende · Ausschluss ja + Rivalität nein = Klub.'],
    merke:'Privates Gut: ausschließbar und rivalisierend · Öffentliches Gut: weder noch · Allmendegut: nicht ausschließbar, aber rivalisierend (Gefahr der Übernutzung) · Klubgut: ausschließbar, aber nicht rivalisierend.'}),
  blBau('zuordnung', {id:'GU2', modul:'GU', stufe:1, titel:'Freie und wirtschaftliche Güter', tags:T.concat(['Güterarten']),
    text:'Ordne jedes Gut zu.', kategorien:['freies Gut', 'wirtschaftliches Gut: Sachgut', 'wirtschaftliches Gut: Dienstleistung', 'wirtschaftliches Gut: Recht'], anzahl:8,
    faelle:[
      {t:'ein Haarschnitt beim Friseur', k:2},
      {t:'Sonnenlicht im Sommer', k:0, weg:'in ausreichender Menge vorhanden, ohne Preis'},
      {t:'ein Patent auf ein neues Verfahren', k:3},
      {t:'Trinkwasser aus der Leitung', k:1, weg:'muss gewonnen, aufbereitet und geliefert werden – deshalb knapp und mit Preis'},
      {t:'eine Nachhilfestunde', k:2},
      {t:'ein Laptop', k:1},
      {t:'Luft zum Atmen (auf dem Land)', k:0},
      {t:'eine Softwarelizenz', k:3},
      {t:'eine Versicherung gegen Fahrraddiebstahl', k:2},
      {t:'Meerwasser am Strand', k:0}
    ],
    hinweise:['Freie Güter sind nicht knapp und haben keinen Preis. Wirtschaftliche Güter sind knapp.', 'Wirtschaftliche Güter: Sachgüter (greifbar), Dienstleistungen (nicht lagerfähig), Rechte (z. B. Patente, Lizenzen).'],
    merke:'Freie Güter: nicht knapp, kein Preis · Wirtschaftliche Güter: knapp, haben einen Preis – Sachgüter, Dienstleistungen, Rechte · Ob ein Gut frei ist, kann sich ändern (z. B. saubere Luft in Großstädten).'}),
  {
    id:'GU3', modul:'GU', typ:'berechnung', mehrfach:true, stufe:1, titel:'Die Grundfragen jeder Volkswirtschaft',
    tags:T.concat(['Knappheit', 'Grundfragen']),
    text:'Weil die Güter knapp sind, die Bedürfnisse aber nahezu unbegrenzt, muss jede Volkswirtschaft entscheiden, wie sie ihre Mittel einsetzt.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Jede Volkswirtschaft muss klären, was und wie viel produziert wird.', richtig:true},
      {text:'Weil es keine Knappheit mehr gibt, stellen sich diese Fragen in reichen Ländern nicht.', fehler:'Auch reiche Länder haben knappe Ressourcen (Arbeitskräfte, Boden, Energie, Zeit).'},
      {text:'Sie muss klären, wie produziert wird – also mit welchen Produktionsfaktoren und Verfahren.', richtig:true},
      {text:'Sie muss klären, für wen produziert wird, also wie die Güter verteilt werden.', richtig:true},
      {text:'Wer diese Fragen entscheidet – Markt oder Staat – bestimmt die Wirtschaftsordnung.', richtig:true, weg:'Marktwirtschaft: Haushalte und Unternehmen · Zentralverwaltungswirtschaft: staatliche Planbehörde'}
    ],
    hinweise:['Was? Wie? Für wen? Und: Wer entscheidet?'],
    merke:'Knappheit zwingt zum Wirtschaften · Grundfragen: Was und wie viel? Wie? Für wen? Wer entscheidet? · Die Antwort auf „Wer entscheidet?“ unterscheidet die Wirtschaftsordnungen.'
  },
  {
    id:'GU4', modul:'GU', typ:'berechnung', mehrfach:true, stufe:2, titel:'Das Allmendeproblem',
    tags:T.concat(['Allmende', 'Übernutzung']),
    text:'In einer Bucht dürfen alle Fischer kostenlos fischen. Jeder Fischer fängt so viel wie möglich, denn was er nicht fängt, fangen die anderen. Nach einigen Jahren ist der Fischbestand fast zusammengebrochen.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Die Fischer handeln einzeln rational, gemeinsam aber schädlich („Tragik der Allmende“).', richtig:true},
      {text:'Feste Fangquoten oder handelbare Fanglizenzen können die Übernutzung begrenzen.', richtig:true, weg:'Der Zugang wird beschränkt – das Gut wird teilweise ausschließbar.'},
      {text:'Das Problem entsteht, weil niemand ausgeschlossen werden kann, jeder Fang aber den anderen fehlt.', richtig:true, weg:'nicht ausschließbar, aber rivalisierend'},
      {text:'Das Problem verschwindet von selbst, wenn mehr Fischer in die Bucht kommen.', fehler:'Mehr Fischer verschärfen die Übernutzung.'},
      {text:'Auch das Klima ist ein Beispiel: Jeder darf CO₂ ausstoßen, die Folgen tragen alle.', richtig:true, weg:'Lösungen: CO₂-Preis, Emissionshandel, internationale Abkommen'}
    ],
    hinweise:['Wer trägt die Kosten, wenn ein Fischer mehr fängt?'],
    merke:'Allmendegüter werden übernutzt, weil der Einzelne den Nutzen allein hat, die Kosten aber alle tragen · Lösungen: Quoten, Lizenzen, Preise, Eigentumsrechte, Absprachen.'
  },

  /* ======================= HO · Homo oeconomicus und reales Verhalten ======================= */
  {
    id:'HO1', modul:'HO', typ:'berechnung', mehrfach:true, stufe:1, titel:'Das Modell des homo oeconomicus',
    tags:T.concat(['homo oeconomicus', 'Modell']),
    text:'Viele ökonomische Modelle gehen von einem idealisierten Menschen aus, dem homo oeconomicus.',
    frage:'Welche Annahmen gehören zu diesem Modell?',
    optionen:[
      {text:'Er handelt rational und wägt Kosten und Nutzen ab.', richtig:true},
      {text:'Er verzichtet auf eigenen Vorteil, wenn das Ergebnis sonst unfair wäre.', fehler:'Fairness spielt im Modell keine Rolle – er handelt eigennützig.'},
      {text:'Er ist vollständig über alle Möglichkeiten und Preise informiert.', richtig:true},
      {text:'Er strebt nach dem größtmöglichen eigenen Nutzen (Eigennutz).', richtig:true},
      {text:'Seine Vorlieben (Präferenzen) sind stabil und widerspruchsfrei.', richtig:true}
    ],
    hinweise:['Das Modell vereinfacht stark – es soll Verhalten erklären und vorhersagen, nicht beschreiben, wie Menschen wirklich sind.'],
    merke:'Homo oeconomicus: rational, eigennützig, vollständig informiert, stabile Präferenzen, Nutzenmaximierung · Ein Modell vereinfacht die Wirklichkeit bewusst.'
  },
  blBau('fall', {id:'HO2', modul:'HO', stufe:2, titel:'Das Ultimatumspiel', tags:T.concat(['homo oeconomicus', 'Experiment', 'Fairness']),
    text:'Im Ultimatumspiel erhält Spielerin A 100 €. Sie bietet Spieler B einen Teil davon an. Nimmt B an, wird so geteilt. Lehnt B ab, bekommen beide nichts. Das Spiel wird nur einmal gespielt, die beiden kennen sich nicht.',
    teile:[
      {op:'Erläutern Sie', t:'wie sich ein homo oeconomicus als Spieler B verhalten würde.', opts:['Er lehnt jedes Angebot unter 50 € ab, weil er Fairness erwartet.', 'Er nimmt jedes Angebot über 0 € an, denn etwas ist mehr als nichts.', 'Er lehnt grundsätzlich ab, um A zu bestrafen.'], r:1, weg:'Eigennutz: Ablehnen bringt ihm nichts.'},
      {op:'Beschreiben Sie', t:'welches Angebot A als homo oeconomicus machen würde.', opts:['den kleinstmöglichen Betrag, z. B. 1 €', 'genau die Hälfte', 'den ganzen Betrag'], r:0, weg:'Sie rechnet damit, dass B jeden positiven Betrag annimmt.'},
      {op:'Vergleichen Sie', t:'das Modell mit den Ergebnissen echter Experimente.', opts:['Die Ergebnisse stimmen mit dem Modell genau überein.', 'Die meisten Spieler A bieten nur 1 €.', 'Meist werden 40 bis 50 % angeboten; sehr niedrige Angebote werden oft abgelehnt.'], r:2, weg:'Menschen achten auf Fairness und bestrafen unfaires Verhalten – auch auf eigene Kosten.'},
      {op:'Beurteilen Sie', t:'was daraus für das Modell folgt.', opts:['Das Modell ist wertlos und sollte nicht mehr verwendet werden.', 'Das Modell erklärt vieles, blendet aber Fairness, Gefühle und Gewohnheiten aus; man muss seine Grenzen kennen.', 'Die Experimente sind falsch, weil sich Menschen immer eigennützig verhalten.'], r:1}
    ],
    hinweise:['Was bekommt B, wenn er ablehnt?', 'Wie reagieren Menschen auf ein Angebot von 5 € aus 100 €?'],
    merke:'Ultimatumspiel: Das Modell sagt minimale Angebote und Annahme voraus · In Experimenten zählen Fairness und Gegenseitigkeit · Modelle haben Grenzen.'}),
  blBau('zuordnung', {id:'HO3', modul:'HO', stufe:1, titel:'Positive und negative externe Effekte', tags:T.concat(['externe Effekte']),
    text:'Externe Effekte sind Wirkungen auf Unbeteiligte, für die kein Preis gezahlt wird. Ordne zu.',
    kategorien:['positiver externer Effekt', 'negativer externer Effekt', 'kein externer Effekt'], anzahl:8,
    faelle:[
      {t:'Fluglärm über einem Wohngebiet', k:1},
      {t:'Ein Imker stellt seine Bienen neben eine Obstplantage – die Bäume tragen mehr.', k:0},
      {t:'Lea kauft im Supermarkt Brot zum üblichen Preis.', k:2, weg:'Kauf und Preis betreffen nur Käufer und Verkäufer'},
      {t:'Eine Fabrik leitet ungeklärtes Abwasser in einen Fluss.', k:1},
      {t:'Wer sich impfen lässt, schützt auch andere vor Ansteckung.', k:0},
      {t:'Ein Unternehmen zahlt seinen Beschäftigten den vereinbarten Lohn.', k:2},
      {t:'Ein Hausbesitzer renoviert die Fassade, die Nachbarhäuser gewinnen an Wert.', k:0},
      {t:'Abgase des Autoverkehrs belasten die Gesundheit der Anwohner.', k:1}
    ],
    hinweise:['Gibt es Betroffene, die nicht am Geschäft beteiligt sind und weder zahlen noch bezahlt werden?'],
    merke:'Externe Effekte: Nutzen oder Kosten für Unbeteiligte ohne Preis · negative Effekte → zu viel Produktion (z. B. Umweltschäden) · positive Effekte → zu wenig (z. B. Impfungen) · Marktversagen → Staat (Steuern, Auflagen, Förderung).'}),
  {
    id:'HO4', modul:'HO', typ:'berechnung', mehrfach:true, stufe:2, titel:'Trittbrettfahrer und Kooperation',
    tags:T.concat(['Trittbrettfahrer', 'Kooperation', 'öffentliche Güter']),
    text:'Ein Dorf möchte eine Straßenbeleuchtung bauen. Sie soll freiwillig über Spenden finanziert werden. Viele Bewohner spenden nichts, weil sie das Licht ohnehin nutzen können.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Wer nicht zahlt, aber trotzdem nutzt, ist ein Trittbrettfahrer.', richtig:true},
      {text:'Öffentliche Güter werden über den Markt meist zu wenig angeboten, deshalb finanziert sie oft der Staat über Steuern.', richtig:true},
      {text:'Trittbrettfahrer zahlen einen höheren Preis als die anderen.', fehler:'Sie zahlen gar nichts – das ist ja das Problem.'},
      {text:'Kooperation (Absprachen, Regeln, Kontrolle) kann helfen, dass alle ihren Beitrag leisten.', richtig:true},
      {text:'Wenn alle so denken, entsteht die Beleuchtung gar nicht – obwohl alle sie wollen (soziales Dilemma).', richtig:true}
    ],
    hinweise:['Kann man jemanden vom Licht ausschließen?'],
    merke:'Trittbrettfahrer nutzen, ohne zu zahlen · öffentliche Güter → private Finanzierung scheitert oft → Staat (Steuern) oder verbindliche Regeln · soziales Dilemma: Einzeln rational ist gemeinsam schlecht.'
  },

  /* ======================= PK · Arbeitsteilung, Produktionsmöglichkeiten und Opportunitätskosten ======================= */
  blBau('rechnung', {id:'PK1', modul:'PK', stufe:2, titel:'Opportunitätskosten auf der Produktionsmöglichkeitenkurve', tags:T.concat(['Produktionsmöglichkeitenkurve', 'Opportunitätskosten']),
    text:'Ein Land kann mit allen Produktionsfaktoren Weizen (in 1.000 t) und Traktoren (Stück) herstellen. Die Tabelle zeigt Punkte auf seiner Produktionsmöglichkeitenkurve. Berechne für jeden Übergang, auf wie viel Weizen das Land für einen zusätzlichen Traktor verzichten muss.',
    kopf:'Übergang', spalten:['A → B', 'B → C', 'C → D', 'D → E'],
    zeilen:[
      {id:'t0', t:'Traktoren vorher', e:'Stück'}, {id:'t1', t:'Traktoren nachher', e:'Stück'},
      {id:'w0', t:'Weizen vorher (1.000 t)'}, {id:'w1', t:'Weizen nachher (1.000 t)'},
      {id:'dt', t:'zusätzliche Traktoren', e:'Stück', f:'t1 - t0'},
      {id:'dw', t:'Verzicht auf Weizen (1.000 t)', f:'w0 - w1'},
      {id:'ok', t:'Opportunitätskosten je Traktor (1.000 t Weizen)', f:'dw / dt'}
    ],
    werte:[{t0:0, t1:10, w0:100, w1:95}, {t0:10, t1:20, w0:95, w1:85}, {t0:20, t1:30, w0:85, w1:65}, {t0:30, t1:40, w0:65, w1:30}],
    sets:[[{t0:0, t1:10, w0:120, w1:114}, {t0:10, t1:20, w0:114, w1:102}, {t0:20, t1:30, w0:102, w1:84}, {t0:30, t1:40, w0:84, w1:60}],
          [{t0:0, t1:5, w0:80, w1:78}, {t0:5, t1:10, w0:78, w1:74}, {t0:10, t1:15, w0:74, w1:66}, {t0:15, t1:20, w0:66, w1:50}]],
    wahl:[{id:'w', t:'Wie entwickeln sich die Opportunitätskosten?', opts:['Sie sinken, weil die Arbeiter mit jedem Traktor mehr Erfahrung haben.', 'Sie steigen, weil die Produktionsfaktoren nicht für beide Güter gleich gut geeignet sind (Kurve nach außen gewölbt).', 'Sie bleiben gleich, weil jeder Traktor gleich viel kostet.'], r:'1'}],
    hinweise:['Opportunitätskosten = Verzicht auf das andere Gut ÷ Mehrmenge des einen Guts.', 'Zuerst werden die Faktoren umgeschichtet, die für Traktoren am besten geeignet sind – später auch fruchtbare Äcker und erfahrene Landwirte.'],
    merke:'Opportunitätskosten = entgangener Nutzen der besten Alternative · auf der Produktionsmöglichkeitenkurve: Verzicht ÷ Mehrmenge · steigende Opportunitätskosten → Kurve nach außen gewölbt.'}),
  {
    id:'PK2', modul:'PK', typ:'berechnung', mehrfach:true, stufe:1, titel:'Arbeitsteilung und Produktivität',
    tags:T.concat(['Arbeitsteilung', 'Produktivität']),
    text:'Adam Smith beschrieb, wie in einer Stecknadelfabrik zehn Arbeiter, die sich die Arbeitsschritte teilen, ein Vielfaches dessen herstellen, was sie allein schaffen würden.',
    frage:'Welche Aussagen zur Arbeitsteilung treffen zu?',
    optionen:[
      {text:'Durch Spezialisierung steigt die Arbeitsproduktivität (Menge je Arbeitsstunde).', richtig:true},
      {text:'Arbeitsteilung macht die Beteiligten unabhängig voneinander.', fehler:'Sie macht abhängig – fällt ein Glied der Kette aus, stockt alles (z. B. Lieferketten).'},
      {text:'Einseitige, sich wiederholende Tätigkeiten können zu Monotonie und Belastung führen.', richtig:true},
      {text:'Man unterscheidet berufliche, betriebliche und internationale Arbeitsteilung.', richtig:true},
      {text:'Arbeitsteilung setzt Tausch und damit meist Geld voraus.', richtig:true, weg:'Wer sich spezialisiert, muss die übrigen Güter eintauschen.'}
    ],
    hinweise:['Was gewinnt man durch Spezialisierung – und welche Risiken entstehen?'],
    merke:'Arbeitsteilung → Spezialisierung → höhere Produktivität · Nachteile: Abhängigkeit, Monotonie · Formen: beruflich, betrieblich, international · setzt Tausch voraus.'
  },
  blBau('rechnung', {id:'PK3', modul:'PK', stufe:2, titel:'Brutto-, Ersatz- und Nettoinvestition', tags:T.concat(['Investition', 'Kapitalstock']),
    text:'Für eine Volkswirtschaft liegen die Bruttoinvestitionen und die Abschreibungen (Wertminderung des Kapitalstocks) für drei Jahre vor (in Mrd. €). Berechne die Nettoinvestitionen und den Kapitalstock am Jahresende.',
    kopf:'Jahr', spalten:['Jahr 1', 'Jahr 2', 'Jahr 3'],
    zeilen:[
      {id:'ka', t:'Kapitalstock am Jahresanfang (Mrd. €)', fs:[null, 'ke@0', 'ke@1']},
      {id:'bi', t:'Bruttoinvestitionen (Mrd. €)'}, {id:'ab', t:'Abschreibungen = Ersatzinvestitionen (Mrd. €)'},
      {id:'ni', t:'Nettoinvestitionen (Mrd. €)', f:'bi - ab'},
      {id:'ke', t:'Kapitalstock am Jahresende (Mrd. €)', f:'ka + ni'}
    ],
    werte:[{ka:5000, bi:520, ab:400}, {bi:450, ab:410}, {bi:380, ab:420}],
    sets:[[{ka:6000, bi:600, ab:450}, {bi:480, ab:460}, {bi:400, ab:470}]],
    wahl:[{id:'w', t:'In welchem Jahr schrumpft der Kapitalstock?', opts:['Jahr 1', 'Jahr 2', 'Jahr 3'], r:'ni@0 < 0 ? 0 : ni@1 < 0 ? 1 : 2'}],
    hinweise:['Nettoinvestition = Bruttoinvestition − Abschreibungen.', 'Ist die Nettoinvestition negativ, wird weniger ersetzt, als verschleißt.'],
    merke:'Bruttoinvestition = Ersatzinvestition (Abschreibungen) + Nettoinvestition · Nettoinvestition > 0: Kapitalstock wächst · < 0: Kapitalstock schrumpft · Investieren heißt heute auf Konsum verzichten (Sparen).'}),
  ...blAbi('rechnung', {id:'PK4', modul:'PK', stufe:3, titel:'Abiturfall: Konsum heute oder Wachstum morgen?', tags:T.concat(['Abiturfall', 'Produktionsmöglichkeitenkurve', 'Opportunitätskosten']),
    text:'Der Inselstaat Nordau kann mit seinen Arbeitskräften und Rohstoffen Nahrungsmittel (Konsumgut, in t) und Fischerboote (Investitionsgut, Stück) herstellen. Punkte auf der Produktionsmöglichkeitenkurve:'
      + '<table class="lager"><tr><th>Punkt</th><th>Boote</th><th>Nahrung</th></tr><tr><td>A</td><td class="z">0</td><td class="z">{na} t</td></tr><tr><td>B</td><td class="z">{tb}</td><td class="z">{nb} t</td></tr><tr><td>C</td><td class="z">{tc}</td><td class="z">{nc} t</td></tr><tr><td>D</td><td class="z">{td}</td><td class="z">{nd} t</td></tr><tr><td>E</td><td class="z">{te}</td><td class="z">{ne} t</td></tr></table>'
      + 'Zurzeit stellt Nordau {ib} Boote und {ix} t Nahrung her; viele Menschen sind ohne Arbeit. Die Regierung überlegt, künftig mehr Boote zu bauen.',
    zeilen:[
      {id:'na', t:'Nahrung A', aus:true}, {id:'nb', t:'Nahrung B', aus:true}, {id:'nc', t:'Nahrung C', aus:true}, {id:'nd', t:'Nahrung D', aus:true}, {id:'ne', t:'Nahrung E', aus:true},
      {id:'tb', t:'Boote B', aus:true}, {id:'tc', t:'Boote C', aus:true}, {id:'td', t:'Boote D', aus:true}, {id:'te', t:'Boote E', aus:true},
      {id:'ib', t:'Boote heute', aus:true}, {id:'ix', t:'Nahrung heute', aus:true}
    ],
    werte:[{na:500, nb:460, nc:380, nd:260, ne:100, tb:20, tc:40, td:60, te:80, ib:30, ix:300}],
    sets:[[{na:720, nb:690, nc:630, nd:540, ne:420, tb:20, tc:40, td:60, te:80, ib:30, ix:500}]],
    felder:[
      {id:'o1', t:'a) Berechnen Sie die Opportunitätskosten je Boot beim Übergang von B nach C (t Nahrung).', f:'(nb - nc) / (tc - tb)', kurz:'a) B → C'},
      {id:'o2', t:'b) Berechnen Sie die Opportunitätskosten je Boot beim Übergang von C nach D (t Nahrung).', f:'(nc - nd) / (td - tc)', kurz:'b) C → D'}
    ],
    wahl:[
      {frei:{muster:"Die Produktionsfaktoren sind nicht für beide Güter gleich gut geeignet. Für zusätzliche Boote müssen zunehmend Arbeitskräfte und Mittel abgezogen werden, die in der Nahrungsproduktion besonders produktiv sind. Deshalb wächst der Verzicht an Nahrung je zusätzlichem Boot (vgl. a und b); die Kurve ist nach außen gewölbt.", punkte:["Produktionsfaktoren sind nicht für beide Güter gleich gut geeignet", "zunehmend werden Faktoren abgezogen, die für Nahrung besonders produktiv sind → Verzicht je Boot steigt", "Bezug zu den Ergebnissen aus a) und b) oder zur nach außen gewölbten Kurve"]}, id:'w1', t:'c) Erläutern Sie, warum die Opportunitätskosten steigen.', opts:['Boote werden mit jedem Stück billiger.', 'Für zusätzliche Boote müssen zunehmend Arbeitskräfte und Mittel abgezogen werden, die für die Nahrungsproduktion besonders gut geeignet sind.', 'Die Nachfrage nach Nahrung sinkt.'], r:'1'},
      {frei:{muster:"Die Kombination liegt unterhalb der Produktionsmöglichkeitenkurve: Bei gleicher Bootszahl wäre deutlich mehr Nahrung möglich (Kurve zwischen B und C). Sie ist ineffizient, weil Arbeitskräfte ungenutzt bleiben (Arbeitslosigkeit). Mehr Boote und mehr Nahrung wären zugleich möglich, ohne auf etwas zu verzichten.", punkte:["Lage unterhalb der Kurve erkannt (Vergleich mit der Kurve zwischen B und C)", "ineffizient: Ressourcen bzw. Arbeitskräfte bleiben ungenutzt (Arbeitslosigkeit)", "Folgerung: mehr von beiden Gütern ohne Verzicht möglich"]}, id:'w2', t:'d) Beurteilen Sie die heutige Kombination.', opts:['Sie liegt unterhalb der Kurve: Ressourcen bleiben ungenutzt (Arbeitslosigkeit), mehr Boote und mehr Nahrung wären zugleich möglich.', 'Sie liegt auf der Kurve und ist effizient.', 'Sie liegt außerhalb der Kurve und ist mit den vorhandenen Mitteln nicht erreichbar.'], r:'0'},
      {frei:{muster:"Kurzfristig muss Nordau auf Konsum verzichten (Opportunitätskosten in Nahrung). Die zusätzlichen Boote sind Investitionsgüter: Sie vergrößern den Kapitalstock und erhöhen künftig die Produktionsmöglichkeiten, z. B. durch mehr Fischfang. Die Kurve verschiebt sich langfristig nach außen – die Wirtschaft wächst, später ist mehr Konsum möglich.", punkte:["heute Verzicht auf Konsumgüter (Opportunitätskosten)", "Boote sind Investitionsgüter, der Kapitalstock wächst", "die Kurve verschiebt sich künftig nach außen (Wachstum, später mehr Konsum)"]}, id:'w3', t:'e) Erläutern Sie die langfristige Wirkung, wenn Nordau mehr Boote statt Nahrung produziert.', opts:['Die Kurve verschiebt sich nach innen, weil heute weniger konsumiert wird.', 'Nichts ändert sich, Investitionsgüter wirken nur heute.', 'Heute muss auf Konsum verzichtet werden; mit mehr Booten wächst der Kapitalstock, die Kurve verschiebt sich künftig nach außen.'], r:'2'}
    ],
    hinweise:['Opportunitätskosten = Verzicht auf Nahrung ÷ zusätzliche Boote.', 'Punkte unterhalb der Kurve: ineffizient · auf der Kurve: effizient · außerhalb: nicht erreichbar.', 'Investitionsgüter erhöhen die künftigen Produktionsmöglichkeiten.'],
    merke:'Produktionsmöglichkeitenkurve: effiziente Kombinationen · steigende Opportunitätskosten · unterhalb = ungenutzte Ressourcen · Investitionen heute → Kurve verschiebt sich morgen nach außen (Wachstum).'}),

  /* ======================= VG · Verteilungsgerechtigkeit ======================= */
  blBau('zuordnung', {id:'VG1', modul:'VG', stufe:1, titel:'Leistung, Bedarf oder Gleichheit?', tags:T.concat(['Verteilung', 'Gerechtigkeit']),
    text:'Nach welchem Prinzip wird hier verteilt?', kategorien:['Leistungsprinzip', 'Bedarfsprinzip', 'Gleichheitsprinzip'], anzahl:8,
    faelle:[
      {t:'Kindergeld für jedes Kind', k:1},
      {t:'Akkordlohn nach der Stückzahl', k:0},
      {t:'Jede Bürgerin und jeder Bürger erhält denselben Klimabonus.', k:2},
      {t:'Wohngeld für Haushalte mit geringem Einkommen', k:1},
      {t:'Provision für Verkäufer nach dem Umsatz', k:0},
      {t:'Drei Geschwister erben zu gleichen Teilen.', k:2},
      {t:'Bürgergeld zur Sicherung des Existenzminimums', k:1},
      {t:'Prämie für einen Verbesserungsvorschlag', k:0},
      {t:'Jede Klasse erhält das gleiche Budget für den Wandertag.', k:2}
    ],
    hinweise:['Leistung: wer mehr leistet, erhält mehr · Bedarf: wer mehr braucht, erhält mehr · Gleichheit: alle erhalten gleich viel.'],
    merke:'Leistungsprinzip (Markt, Lohn) · Bedarfsprinzip (Sozialstaat, Transfers) · Gleichheitsprinzip (gleiche Anteile) · Ein objektiv „gerechtes“ Prinzip gibt es nicht – die Gesellschaft muss abwägen.'}),
  {
    id:'VG2', modul:'VG', typ:'berechnung', mehrfach:true, stufe:2, titel:'Was ist eine gerechte Verteilung?',
    tags:T.concat(['Verteilung', 'Gerechtigkeit']),
    text:'In einer Diskussion über Einkommen fallen verschiedene Aussagen.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Es gibt keinen objektiven Maßstab für Verteilungsgerechtigkeit; Urteile hängen von Werten ab.', richtig:true},
      {text:'Der Markt verteilt Einkommen nach dem Leistungsprinzip (Primärverteilung).', richtig:true, weg:'genauer: nach der am Markt bewerteten Leistung und Knappheit'},
      {text:'Der Staat verändert die Verteilung über Steuern und Transfers (Sekundärverteilung).', richtig:true},
      {text:'Ein reines Bedarfsprinzip stärkt in jedem Fall den Anreiz, mehr zu leisten.', fehler:'Wer unabhängig von der Leistung erhält, hat weniger Anreiz zur Mehrarbeit – Zielkonflikt mit dem Leistungsprinzip.'},
      {text:'Zwischen Leistungs- und Bedarfsprinzip besteht oft ein Zielkonflikt.', richtig:true}
    ],
    hinweise:['Wer verteilt zuerst – und wer korrigiert?'],
    merke:'Primärverteilung über den Markt (Leistung) · Sekundärverteilung über den Staat (Steuern, Transfers, Bedarf) · Gerechtigkeit ist ein Werturteil · Zielkonflikt Leistung ↔ Bedarf.'
  },
  {
    id:'VG3', modul:'VG', typ:'berechnung', mehrfach:true, stufe:2, titel:'Internationale Verteilungskonflikte',
    tags:T.concat(['Verteilung', 'Land Grabbing', 'Ressourcen']),
    text:'Ein internationaler Agrarinvestor pachtet in einem ostafrikanischen Land für 99 Jahre 50.000 Hektar Ackerland, um Futtermittel für den Export anzubauen. Bisher bewirtschafteten dort Kleinbauern ihre Felder ohne Grundbuchtitel.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Man spricht von Land Grabbing: Große Investoren erwerben oder pachten Land in großem Umfang, oft zulasten der lokalen Bevölkerung.', richtig:true},
      {text:'Kleinbauern können ihre Existenzgrundlage verlieren; die Ernährungssicherheit im Land kann sinken.', richtig:true},
      {text:'Das Land kann durch Investitionen, Arbeitsplätze und Pachteinnahmen auch profitieren.', richtig:true, weg:'Ob die Vorteile die Nachteile überwiegen, hängt von Verträgen, Rechten und ihrer Kontrolle ab.'},
      {text:'Ressourcen wie Wasser, Ackerland und Rohstoffe (z. B. seltene Erden) können zu Konflikten zwischen Staaten führen.', richtig:true},
      {text:'Da es um Pacht geht, sind Verteilungsfragen nicht berührt.', fehler:'Wer das Land nutzen darf und wer die Erträge erhält, ist gerade eine Verteilungsfrage.'}
    ],
    hinweise:['Wer gewinnt, wer verliert – und wer entscheidet darüber?'],
    merke:'Internationale Verteilungskonflikte: Land Grabbing, Wasser, Rohstoffe · Chancen (Investitionen) und Risiken (Verdrängung, Ernährung) abwägen · sichere Landrechte schützen die Schwächeren.'
  },
  blBau('rechnung', {id:'VG4', modul:'VG', stufe:2, titel:'Primär- und Sekundärverteilung', tags:T.concat(['Verteilung', 'Umverteilung']),
    text:'Zwei Haushalte im Vergleich (Jahreswerte). Berechne das verfügbare Einkommen und vergleiche den Abstand vor und nach der staatlichen Umverteilung.',
    kopf:'Haushalt', spalten:['Haushalt A', 'Haushalt B'],
    zeilen:[
      {id:'me', t:'Markteinkommen', e:'€'}, {id:'sa', t:'Steuern und Sozialabgaben', e:'€'}, {id:'tr', t:'Transfers (z. B. Kindergeld, Wohngeld)', e:'€'},
      {id:'ve', t:'verfügbares Einkommen', e:'€', f:'me - sa + tr'}
    ],
    werte:[{me:80000, sa:30000, tr:0}, {me:15000, sa:2000, tr:9000}],
    sets:[[{me:96000, sa:36000, tr:0}, {me:18000, sa:2500, tr:10500}]],
    felder:[
      {id:'v1', t:'Markteinkommen A ist das …-fache von B', f:'me@0 / me@1', kurz:'Verhältnis vorher'},
      {id:'v2', t:'Verfügbares Einkommen A ist das …-fache von B', f:'ve@0 / ve@1', kurz:'Verhältnis nachher'}
    ],
    wahl:[{id:'w', t:'Was zeigt der Vergleich?', opts:['Der Abstand wird durch den Staat größer.', 'Steuern und Transfers verringern den Abstand – das Bedarfsprinzip ergänzt das Leistungsprinzip.', 'Der Staat verteilt nach dem Gleichheitsprinzip: Beide haben danach gleich viel.'], r:'1'}],
    hinweise:['Verfügbares Einkommen = Markteinkommen − Steuern und Abgaben + Transfers.', 'Verhältnis = Wert A ÷ Wert B (auf zwei Stellen gerundet).'],
    merke:'Primärverteilung: Markteinkommen · Sekundärverteilung: nach Steuern, Abgaben und Transfers · Umverteilung verringert Unterschiede, hebt sie aber nicht auf.'}),

  /* ======================= GD · Geld: Funktionen und Arten ======================= */
  blBau('zuordnung', {id:'GD1', modul:'GD', stufe:1, titel:'Funktionen des Geldes', tags:T.concat(['Geld', 'Geldfunktionen']),
    text:'Welche Funktion erfüllt das Geld in der Situation?', kategorien:['Tauschmittel', 'Wertaufbewahrungsmittel', 'Recheneinheit (Wertmaßstab)', 'Wertübertragungsmittel'], anzahl:8,
    faelle:[
      {t:'Jonas legt jeden Monat 50 € für ein Auto zurück.', k:1},
      {t:'Lisa bezahlt beim Bäcker ihre Brezel.', k:0},
      {t:'Ein Fahrrad kostet 600 €, ein Roller 900 € – so lassen sich die Güter vergleichen.', k:2},
      {t:'Die Großmutter schenkt ihrem Enkel 200 € zum Geburtstag.', k:3},
      {t:'Eine Bank zahlt einem Kunden einen Kredit aus.', k:3},
      {t:'Ein Unternehmen bewertet sein Vermögen in der Bilanz in Euro.', k:2},
      {t:'Ein Bäcker verkauft Brot und kauft vom Erlös Mehl, ohne Mehl gegen Brot tauschen zu müssen.', k:0},
      {t:'Eine Familie spart für die Ausbildung ihrer Kinder.', k:1}
    ],
    hinweise:['Bezahlen = Tausch · Sparen = Wertaufbewahrung · Preise vergleichen = Recheneinheit · Schenken, Kredit = Wertübertragung.'],
    merke:'Geld ist Tauschmittel, Wertaufbewahrungsmittel, Recheneinheit (Wertmaßstab) und Wertübertragungsmittel · Voraussetzung: Vertrauen in die Stabilität seines Werts.'}),
  {
    id:'GD2', modul:'GD', typ:'berechnung', mehrfach:true, stufe:2, titel:'Geldarten und Geldsubstitute',
    tags:T.concat(['Geld', 'Geldarten', 'Kryptowährung']),
    text:'Heute wird auf sehr unterschiedliche Weise bezahlt: mit Bargeld, mit Karte, per Handy oder mit Kryptowährungen.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Bargeld besteht aus Banknoten und Münzen; Euro-Banknoten sind gesetzliches Zahlungsmittel.', richtig:true},
      {text:'Buchgeld (Giralgeld) ist das Guthaben auf Girokonten; mit Überweisung oder Karte wird darüber verfügt.', richtig:true, weg:'Buchgeld macht den größten Teil der Geldmenge aus.'},
      {text:'Buchgeld ist kein echtes Geld, weil man es nicht anfassen kann.', fehler:'Buchgeld erfüllt alle Geldfunktionen und ist der größte Teil der Geldmenge.'},
      {text:'Kryptowährungen wie Bitcoin sind in Deutschland kein gesetzliches Zahlungsmittel; wegen starker Kursschwankungen eignen sie sich schlecht zur Wertaufbewahrung.', richtig:true},
      {text:'Mit M-PESA zahlen in Kenia auch Menschen ohne Bankkonto per Handy; das Guthaben beim Anbieter ersetzt Bargeld (Geldsubstitut).', richtig:true}
    ],
    hinweise:['Welche Geldfunktionen erfüllt die jeweilige Form – und wer garantiert ihren Wert?'],
    merke:'Bargeld (Noten, Münzen) · Buchgeld (Kontoguthaben) · Geldsubstitute ersetzen Bargeld (z. B. Mobile Money wie M-PESA) · Kryptowährungen: kein gesetzliches Zahlungsmittel, stark schwankend.'
  },
  {
    id:'GD3', modul:'GD', typ:'berechnung', mehrfach:true, stufe:1, titel:'Was gutes Geld ausmacht',
    tags:T.concat(['Geld', 'Geldgeschichte']),
    text:'Früher dienten Muscheln, Salz oder Vieh als Geld (Warengeld), später Gold- und Silbermünzen, heute Banknoten und Kontoguthaben.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Gutes Geld ist allgemein anerkannt, knapp, haltbar, teilbar und leicht zu transportieren.', richtig:true},
      {text:'Ohne Geld müssten Güter direkt gegeneinander getauscht werden (Naturaltausch) – das ist sehr umständlich.', richtig:true, weg:'Man müsste jemanden finden, der genau das hat, was man will, und genau das will, was man hat.'},
      {text:'Geld ist nur etwas wert, wenn es vollständig durch Gold gedeckt ist.', fehler:'Heutiges Geld ist nicht durch Gold gedeckt; sein Wert beruht auf Vertrauen und Knappheit (Geldpolitik der Zentralbank).'},
      {text:'Der Wert des heutigen Geldes beruht auf dem Vertrauen, dass andere es annehmen und es seinen Wert behält.', richtig:true},
      {text:'Muscheln eigneten sich nur so lange als Geld, wie sie knapp waren.', richtig:true}
    ],
    hinweise:['Was passiert mit Geld, das nicht mehr knapp ist?'],
    merke:'Entwicklung: Naturaltausch → Warengeld → Münzgeld → Papiergeld → Buchgeld → digitale Zahlungsformen · Gutes Geld: anerkannt, knapp, haltbar, teilbar · Wert beruht auf Vertrauen.'
  },
  blBau('rechnung', {id:'GD4', modul:'GD', stufe:2, titel:'Kaufkraft des Ersparten', tags:T.concat(['Geld', 'Kaufkraft', 'Inflation']),
    text:'Mia hat Geld gespart und bewahrt es ein Jahr zu Hause auf. Berechne, wie viel ihr Erspartes nach einem Jahr noch wert ist (in Preisen von heute), wenn die Preise um den angegebenen Satz steigen.',
    kopf:'Fall', spalten:['Inflation niedrig', 'Inflation hoch'],
    zeilen:[
      {id:'sp', t:'Ersparnis', e:'€'}, {id:'ir', t:'Inflationsrate', e:'%'},
      {id:'kk', t:'Kaufkraft nach einem Jahr', e:'€', f:'sp / (1 + ir / 100)'},
      {id:'kv', t:'Kaufkraftverlust', e:'€', f:'sp - kk'}
    ],
    werte:[{sp:10000, ir:2}, {sp:10000, ir:8}],
    sets:[[{sp:8000, ir:2}, {sp:8000, ir:6}], [{sp:12000, ir:3}, {sp:12000, ir:10}]],
    wahl:[{id:'w', t:'Welche Geldfunktion leidet unter hoher Inflation besonders?', opts:['Recheneinheit', 'Wertaufbewahrungsmittel', 'Tauschmittel'], r:'1'}],
    hinweise:['Kaufkraft = Ersparnis ÷ (1 + Inflationsrate).', 'Der Geldbetrag bleibt gleich, aber man kann weniger dafür kaufen.'],
    merke:'Inflation mindert die Kaufkraft: Kaufkraft = Betrag ÷ (1 + Inflationsrate) · Geld verliert seine Funktion als Wertaufbewahrungsmittel · bei sehr hoher Inflation auch als Recheneinheit und Tauschmittel.'}),

  /* ======================= BO · Preisbildung an der Börse ======================= */
  blBau('rechnung', {id:'BO1', modul:'BO', stufe:2, titel:'Den Einheitskurs an der Börse ermitteln', tags:T.concat(['Börse', 'Gleichgewichtspreis', 'Meistausführung']),
    text: W => 'Für eine Aktie liegen dem Börsenmakler folgende Aufträge vor. Ermittle für jeden möglichen Kurs die ausführbare Nachfrage, das ausführbare Angebot und den Umsatz.' + (W[0].p === 18 ? buch1 : buch2)
      + '<p>Käufer mit Limit kaufen höchstens zum Limit, Verkäufer mit Limit verkaufen mindestens zum Limit. „billigst“ und „bestens“ werden zu jedem Kurs ausgeführt.</p>',
    kopf:'möglicher Kurs', spalten:['Kurs 1', 'Kurs 2', 'Kurs 3', 'Kurs 4'],
    zeilen:[
      {id:'p', t:'Kurs', e:'€'}, {id:'nn', t:'N', aus:true}, {id:'aa', t:'A', aus:true},
      {id:'n', t:'Nachfrage (Stück)', f:'nn', weg:'billigst + alle Kauflimits ab {p}: [n] Stück'},
      {id:'a', t:'Angebot (Stück)', f:'aa', weg:'bestens + alle Verkaufslimits bis {p}: [a] Stück'},
      {id:'u', t:'Umsatz (Stück)', f:'min(n, a)'}
    ],
    werte:[{p:18, nn:750, aa:350}, {p:19, nn:750, aa:600}, {p:20, nn:550, aa:900}, {p:21, nn:300, aa:900}],
    sets:[[{p:45, nn:1000, aa:400}, {p:46, nn:1000, aa:700}, {p:47, nn:600, aa:1100}, {p:48, nn:300, aa:1100}]],
    felder:[{id:'ue', t:'Nachfrageüberhang beim Einheitskurs (Stück)', f:'n@1 - a@1', kurz:'Überhang'}],
    wahl:[{id:'w', t:'Welcher Einheitskurs wird festgesetzt?', opts:['Kurs 1', 'Kurs 2', 'Kurs 3', 'Kurs 4'], r:'1', weg:['', 'Beim zweiten Kurs ist der Umsatz am größten (Meistausführungsprinzip).', '', '']}],
    hinweise:['Nachfrage zum Kurs: alle Käufer, deren Limit mindestens so hoch ist wie der Kurs, plus „billigst“.', 'Angebot zum Kurs: alle Verkäufer, deren Limit höchstens so hoch ist wie der Kurs, plus „bestens“.', 'Umsatz = die kleinere der beiden Mengen. Der Kurs mit dem größten Umsatz wird festgesetzt.'],
    merke:'Meistausführungsprinzip: Der Einheitskurs ist der Kurs mit dem größten Umsatz · Umsatz = Minimum aus Nachfrage und Angebot · alle zahlen bzw. erhalten denselben Kurs.'}),
  {
    id:'BO2', modul:'BO', typ:'berechnung', mehrfach:true, stufe:2, titel:'Wer wird beim Einheitskurs bedient?',
    tags:T.concat(['Börse', 'Gleichgewichtspreis']),
    text:'An der Börse wurde für eine Aktie ein Einheitskurs von 19 € festgesetzt. Beim Kurs von 19 € fragen Käufer 750 Stück nach, Verkäufer bieten 600 Stück an.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Käufer mit „billigst“ und mit einem Limit über 19 € werden voll bedient.', richtig:true},
      {text:'Jeder Käufer zahlt den Preis, den er als Limit angegeben hat.', fehler:'Alle Geschäfte werden zum selben Einheitskurs abgerechnet.'},
      {text:'Verkäufer mit „bestens“ und mit einem Limit unter 19 € werden voll bedient.', richtig:true},
      {text:'Käufer mit einem Limit von genau 19 € werden nur teilweise bedient, weil ein Nachfrageüberhang von 150 Stück besteht.', richtig:true},
      {text:'Käufer, deren Limit unter 19 € liegt, gehen leer aus.', richtig:true}
    ],
    hinweise:['Wer ist bereit, zu 19 € zu kaufen bzw. zu verkaufen?'],
    merke:'Einheitskurs: einheitlicher Preis für alle Abschlüsse · voll bedient: billigst/bestens und Limits, die günstiger als der Kurs sind · beim Überhang werden Aufträge zum Kurslimit nur teilweise ausgeführt.'
  },
  blBau('zuordnung', {id:'BO3', modul:'BO', stufe:1, titel:'Polypol, Angebotsoligopol oder Angebotsmonopol?', tags:T.concat(['Marktformen']),
    text:'Welche Marktform liegt auf der Anbieterseite vor?', kategorien:['Polypol (viele Anbieter)', 'Angebotsoligopol (wenige Anbieter)', 'Angebotsmonopol (ein Anbieter)'], anzahl:8,
    faelle:[
      {t:'Flugzeugbau für große Passagierjets', k:1, weg:'im Wesentlichen zwei Hersteller'},
      {t:'Obst- und Gemüsestände auf einem großen Wochenmarkt', k:0},
      {t:'Wasserversorgung durch die Stadtwerke einer Stadt', k:2},
      {t:'Mobilfunknetzbetreiber in Deutschland', k:1},
      {t:'Friseursalons in einer Großstadt', k:0},
      {t:'Betrieb des Schienennetzes für die Eisenbahn', k:2},
      {t:'Handel mit Aktien eines großen Unternehmens an der Börse', k:0},
      {t:'Mineralölgesellschaften, die Tankstellen beliefern', k:1}
    ],
    hinweise:['Zähle die Anbieter: einer, wenige oder viele?'],
    merke:'Marktformen nach Zahl der Anbieter: Polypol (viele, kein Einfluss auf den Preis) · Oligopol (wenige, gegenseitige Abhängigkeit) · Monopol (einer, Preissetzungsmacht).'}),
  {
    id:'BO4', modul:'BO', typ:'berechnung', mehrfach:true, stufe:1, titel:'Die Börse als Modell eines Marktes',
    tags:T.concat(['Börse', 'vollkommener Markt']),
    text:'Die Börse gilt als Beispiel für einen Markt, der dem Modell des vollkommenen Marktes nahekommt.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Viele Anbieter und Nachfrager treffen an einem Ort bzw. auf einer Plattform zusammen.', richtig:true},
      {text:'Die gehandelten Aktien eines Unternehmens sind gleichartig (homogen).', richtig:true},
      {text:'Alle Marktteilnehmer erhalten Kurse und Aufträge sehr schnell (Markttransparenz).', richtig:true},
      {text:'Der Börsenmakler legt den Kurs nach eigenem Belieben fest.', fehler:'Er ermittelt den Kurs nach festen Regeln aus den Aufträgen (Meistausführung).'},
      {text:'Der Preis gleicht Angebot und Nachfrage aus und zeigt die Knappheit an (Ausgleichs- und Signalfunktion).', richtig:true}
    ],
    hinweise:['Merkmale des vollkommenen Marktes: viele Teilnehmer, homogene Güter, Transparenz, schnelle Reaktion, keine Vorlieben.'],
    merke:'Börse ≈ vollkommener Markt: viele Teilnehmer, homogene Güter, Transparenz, schnelle Reaktion · Preisfunktionen: Ausgleich, Signal, Lenkung, Auslese.'
  },

  /* ======================= GG · Grundgesetz und Ordoliberalismus ======================= */
  blBau('zuordnung', {id:'GG1', modul:'GG', stufe:1, titel:'Das Grundgesetz und die Wirtschaftsordnung', tags:T.concat(['Grundgesetz', 'Soziale Marktwirtschaft']),
    text:'Auf welchen Artikel des Grundgesetzes stützt sich das Ordnungsmerkmal?', kategorien:['Art. 2 GG (allgemeine Handlungsfreiheit, Vertragsfreiheit)', 'Art. 9 GG (Vereinigungs- und Koalitionsfreiheit)', 'Art. 12 GG (Berufsfreiheit)', 'Art. 14 GG (Eigentum und Sozialbindung)'], anzahl:8,
    faelle:[
      {t:'Gewerkschaften und Arbeitgeberverbände handeln Tarifverträge ohne den Staat aus.', k:1, weg:'Tarifautonomie'},
      {t:'Ein Unternehmen wählt seine Lieferanten selbst und verhandelt die Preise frei.', k:0},
      {t:'Für eine neue Bahnstrecke darf ein Grundstück gegen Entschädigung enteignet werden.', k:3, weg:'Enteignung nur zum Wohl der Allgemeinheit und gegen Entschädigung'},
      {t:'Eine Abiturientin wählt ihren Ausbildungsberuf frei.', k:2},
      {t:'Ein Bäckermeister darf seinen Betrieb an seine Tochter vererben.', k:3},
      {t:'Beschäftigte treten einer Gewerkschaft bei.', k:1},
      {t:'Eine Mechatronikerin macht sich mit einer eigenen Werkstatt selbstständig.', k:2, weg:'Berufs- und Gewerbefreiheit'},
      {t:'Zwei Privatleute schließen einen Kaufvertrag über ein gebrauchtes Auto.', k:0},
      {t:'„Eigentum verpflichtet. Sein Gebrauch soll zugleich dem Wohle der Allgemeinheit dienen.“', k:3}
    ],
    hinweise:['Art. 2: freie Entfaltung · Art. 9: sich zusammenschließen · Art. 12: Beruf · Art. 14: Eigentum und Erbrecht.'],
    merke:'Das Grundgesetz schreibt keine Wirtschaftsordnung vor, setzt aber den Rahmen: Art. 2 Vertragsfreiheit · Art. 9 Koalitionsfreiheit (Tarifautonomie) · Art. 12 Berufs- und Gewerbefreiheit · Art. 14 Eigentum mit Sozialbindung · Art. 20 Sozialstaat.'}),
  {
    id:'GG2', modul:'GG', typ:'berechnung', mehrfach:true, stufe:2, titel:'Die Idee des Ordoliberalismus',
    tags:T.concat(['Ordoliberalismus', 'Soziale Marktwirtschaft']),
    text:'Die Soziale Marktwirtschaft beruht auf den Ideen der Freiburger Schule (Walter Eucken) und wurde von Alfred Müller-Armack und Ludwig Erhard weiterentwickelt.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Der Staat soll eine Wettbewerbsordnung schaffen und schützen, z. B. durch ein Verbot von Kartellen.', richtig:true},
      {text:'Der Staat soll die Konjunktur laufend durch höhere Staatsausgaben steuern.', fehler:'Das entspricht der Nachfragesteuerung nach Keynes; die Ordoliberalen wollten einen festen Ordnungsrahmen, aber keine laufende Lenkung.'},
      {text:'Zu den Grundsätzen gehören Privateigentum, Vertragsfreiheit, Haftung und ein stabiler Geldwert.', richtig:true},
      {text:'Der Staat setzt den Rahmen (Ordnungspolitik), in den Marktablauf greift er möglichst wenig ein.', richtig:true},
      {text:'Müller-Armack ergänzte den sozialen Ausgleich: Freiheit des Marktes und soziale Sicherheit sollen verbunden werden.', richtig:true}
    ],
    hinweise:['Ordo = Ordnung: Der Staat ist „Schiedsrichter“, nicht „Mitspieler“.'],
    merke:'Ordoliberalismus: starker Staat als Hüter des Wettbewerbs, Ordnungsrahmen statt Prozesslenkung · Grundsätze: Wettbewerb, Privateigentum, Vertragsfreiheit, Haftung, Geldwertstabilität · Soziale Marktwirtschaft = Markt + sozialer Ausgleich.'
  },
  {
    id:'GG3', modul:'GG', typ:'berechnung', mehrfach:true, stufe:2, titel:'Konflikte in der Sozialen Marktwirtschaft',
    tags:T.concat(['Soziale Marktwirtschaft', 'Zielkonflikte']),
    text:'Die Soziale Marktwirtschaft muss immer wieder zwischen Freiheit und sozialer Sicherheit abwägen.',
    frage:'Welche Beispiele beschreiben ein solches Spannungsverhältnis zutreffend?',
    optionen:[
      {text:'Der gesetzliche Mindestlohn schützt Beschäftigte, schränkt aber die Vertragsfreiheit von Arbeitgebern und Beschäftigten ein.', richtig:true},
      {text:'Hohe Sozialleistungen erfordern hohe Steuern und Abgaben, die den Anreiz zu arbeiten und zu investieren mindern können.', richtig:true},
      {text:'Die Fusion zweier großer Unternehmen kann Kosten senken, aber den Wettbewerb gefährden.', richtig:true, weg:'Deshalb prüft das Bundeskartellamt Zusammenschlüsse.'},
      {text:'Weil das Grundgesetz die Soziale Marktwirtschaft ausdrücklich vorschreibt, sind Änderungen ausgeschlossen.', fehler:'Das Grundgesetz ist wirtschaftspolitisch offen; die Ordnung wird ständig weiterentwickelt (z. B. ökologische Ziele).'},
      {text:'Die umlagefinanzierte Rente gerät durch den demografischen Wandel unter Druck – zwischen den Generationen entsteht ein Verteilungskonflikt.', richtig:true}
    ],
    hinweise:['Wer gewinnt Freiheit, wer Sicherheit – und wer bezahlt?'],
    merke:'Spannungsfelder: Freiheit ↔ soziale Sicherheit · Wettbewerb ↔ Konzentration · Wachstum ↔ Umwelt · Jung ↔ Alt · Die Soziale Marktwirtschaft wird ständig weiterentwickelt.'
  },
  blBau('fall', {id:'GG4', modul:'GG', stufe:3, titel:'Fall: Soll der Staat die Mieten begrenzen?', tags:T.concat(['Soziale Marktwirtschaft', 'Staatseingriffe', 'Fallaufgabe']),
    text:'In einer Großstadt steigen die Mieten stark. Eine Partei fordert, Mieterhöhungen bei bestehenden Verträgen gesetzlich zu begrenzen. Der Verband der Haus- und Wohnungseigentümer hält dagegen, so werde weniger gebaut.',
    teile:[
      {op:'Ordnen Sie', t:'die Forderung ein.', opts:['Sie ist ein Eingriff des Staates in die Preisbildung am Wohnungsmarkt (Höchstpreis).', 'Sie ist eine reine Maßnahme der Geldpolitik.', 'Sie verändert nichts an der Marktordnung.'], r:0},
      {op:'Erläutern Sie', t:'welches Grundrecht der Vermieter berührt ist.', opts:['Art. 9 GG (Koalitionsfreiheit)', 'Art. 14 GG: Eigentum ist geschützt, unterliegt aber der Sozialbindung.', 'Art. 12 GG (Berufsfreiheit der Mieter)'], r:1},
      {op:'Begründen Sie', t:'die Forderung aus Sicht des Sozialstaats.', opts:['Wohnen ist ein Grundbedürfnis; Mieter sollen vor Verdrängung geschützt werden (Art. 20 GG).', 'Höhere Mieten erhöhen das BIP.', 'Der Markt verteilt Wohnungen immer gerecht.'], r:0},
      {op:'Beurteilen Sie', t:'die Maßnahme aus ordnungspolitischer Sicht.', opts:['Sie hat keinerlei Nebenwirkungen.', 'Sie löst das Knappheitsproblem, weil mehr Wohnungen entstehen.', 'Sie kann kurzfristig schützen, verringert aber Anreize zu bauen; die Knappheit selbst lässt sich nur durch mehr Angebot beseitigen.'], r:2, weg:'Gleichzeitig kann der Staat den Wohnungsbau fördern (z. B. Bauland, sozialer Wohnungsbau).'}
    ],
    hinweise:['Höchstpreis unter dem Marktpreis → Nachfrageüberhang.', 'Eigentum verpflichtet – aber wie weit?'],
    merke:'Staatseingriffe abwägen: sozialer Schutz (Art. 20 GG) ↔ Eigentum und Vertragsfreiheit (Art. 14, Art. 2 GG) · Höchstpreise lindern Folgen, beheben aber nicht die Knappheit.'}),

  /* ======================= WI · Wohlstand messen ======================= */
  blBau('zuordnung', {id:'WI1', modul:'WI', stufe:2, titel:'Wie wirkt der Vorgang auf das BIP?', tags:T.concat(['BIP', 'Wohlstand']),
    text:'Das BIP misst den Wert der im Inland in einem Jahr hergestellten Güter und Dienstleistungen, die über den Markt gehen. Ordne zu.',
    kategorien:['erhöht das BIP', 'verändert das BIP nicht', 'senkt das BIP'], anzahl:8,
    faelle:[
      {t:'Ein Gebrauchtwagen wird privat weiterverkauft.', k:1, weg:'Es wird nichts neu hergestellt.'},
      {t:'Nach einem Autounfall wird das Auto in einer Werkstatt repariert.', k:0, weg:'Der Schaden mindert den Wohlstand, die Reparatur erhöht das BIP.'},
      {t:'Ein Handwerker arbeitet schwarz.', k:1},
      {t:'Ein Unternehmen verlagert seine Produktion vollständig ins Ausland.', k:2},
      {t:'Ehrenamtliche Trainer betreuen Jugendliche im Sportverein.', k:1},
      {t:'Nach einem Hochwasser werden zerstörte Häuser neu gebaut.', k:0},
      {t:'Eine Tochter pflegt ihre Mutter unentgeltlich zu Hause.', k:1},
      {t:'Die Beschäftigten arbeiten bei gleicher Produktivität weniger Stunden.', k:2},
      {t:'Eine Familie lässt ihre Wohnung von einem Malerbetrieb streichen statt selbst.', k:0}
    ],
    hinweise:['Wird neu produziert und über den Markt bezahlt?'],
    merke:'Das BIP erfasst nur Marktproduktion · nicht erfasst: Hausarbeit, Ehrenamt, Schwarzarbeit · Reparaturen nach Schäden erhöhen das BIP, obwohl der Wohlstand nicht steigt · Umweltschäden und Verteilung bleiben unberücksichtigt.'}),
  {
    id:'WI2', modul:'WI', typ:'berechnung', mehrfach:true, stufe:2, titel:'Alternative Wohlstandsindikatoren',
    tags:T.concat(['Wohlstand', 'HDI', 'Happy Planet Index']),
    text:'Weil das BIP Wohlstand nur unvollständig misst, gibt es weitere Indikatoren.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Der Human Development Index (HDI) der Vereinten Nationen verbindet Lebenserwartung, Bildung und Einkommen je Einwohner.', richtig:true},
      {text:'Der HDI liegt zwischen 0 und 1; je näher an 1, desto höher die menschliche Entwicklung.', richtig:true},
      {text:'Der Happy Planet Index berücksichtigt Lebenszufriedenheit und Lebenserwartung im Verhältnis zum ökologischen Fußabdruck.', richtig:true},
      {text:'Der Happy Planet Index misst vor allem die Höhe des Einkommens.', fehler:'Er stellt Wohlergehen dem Ressourcenverbrauch gegenüber; das Einkommen geht nicht direkt ein.'},
      {text:'Länder mit hohem BIP je Einwohner schneiden beim Happy Planet Index nicht automatisch gut ab.', richtig:true, weg:'Ein hoher Ressourcenverbrauch drückt den Wert.'}
    ],
    hinweise:['Welche Dimensionen von Wohlstand erfasst der jeweilige Indikator?'],
    merke:'HDI: Lebenserwartung + Bildung + Einkommen (0 bis 1) · Happy Planet Index: Wohlergehen im Verhältnis zum ökologischen Fußabdruck · Wohlstand ist mehr als Einkommen.'
  },
  blBau('rechnung', {id:'WI3', modul:'WI', stufe:1, titel:'BIP insgesamt oder je Einwohner?', tags:T.concat(['BIP', 'Wohlstand']),
    text:'Zwei Länder im Vergleich. Berechne das BIP je Einwohner.',
    kopf:'Land', spalten:['Land A', 'Land B'],
    zeilen:[
      {id:'bip', t:'BIP (Mrd. €)'}, {id:'ew', t:'Einwohner (Mio.)'},
      {id:'pk', t:'BIP je Einwohner', e:'€', f:'bip * 1000 / ew'}
    ],
    werte:[{bip:4200, ew:84}, {bip:380, ew:5.5}],
    sets:[[{bip:3600, ew:80}, {bip:420, ew:6}]],
    wahl:[
      {id:'w1', t:'Welches Land hat das höhere BIP insgesamt?', opts:['Land A', 'Land B'], r:'bip@0 > bip@1 ? 0 : 1'},
      {id:'w2', t:'In welchem Land ist das BIP je Einwohner höher?', opts:['Land A', 'Land B'], r:'pk@0 > pk@1 ? 0 : 1'}
    ],
    hinweise:['Mrd. ÷ Mio. = Tausend: BIP in Mrd. € × 1.000 ÷ Einwohner in Mio. = € je Einwohner.'],
    merke:'Für Wohlstandsvergleiche zählt das BIP je Einwohner, nicht das BIP insgesamt · auch dieses sagt nichts über Verteilung, Umwelt und Lebensqualität.'}),
  ...blAbi('rechnung', {id:'WI4', modul:'WI', stufe:3, titel:'Abiturfall: Geht es allen besser?', tags:T.concat(['Abiturfall', 'Volkseinkommen', 'Lohnquote', 'reales BIP']),
    text:'Für das Land Mittelland liegen folgende Daten vor: Arbeitnehmerentgelt {ae} Mrd. €, Unternehmens- und Vermögenseinkommen {ue} Mrd. €. Das nominale BIP stieg von {b1} Mrd. € auf {b2} Mrd. €; der Preisindex des BIP stieg im selben Jahr von 100 auf {pi}. Der Wirtschaftsminister erklärt: „Das BIP ist gestiegen – also geht es allen besser.“',
    zeilen:[{id:'ae', t:'AE', aus:true}, {id:'ue', t:'UV', aus:true}, {id:'b1', t:'BIP 1', aus:true}, {id:'b2', t:'BIP 2', aus:true}, {id:'pi', t:'Index', aus:true}],
    werte:[{ae:2100, ue:900, b1:4000, b2:4200, pi:104}],
    sets:[[{ae:1800, ue:700, b1:3500, b2:3640, pi:102}]],
    felder:[
      {id:'ve', t:'a) Berechnen Sie das Volkseinkommen (Mrd. €).', f:'ae + ue', kurz:'a) Volkseinkommen'},
      {id:'lq', t:'b) Berechnen Sie die Lohnquote (%).', f:'ae * 100 / (ae + ue)', e:'%', kurz:'b) Lohnquote'},
      {id:'nw', t:'c) Berechnen Sie das nominale Wachstum (%).', f:'(b2 / b1 - 1) * 100', e:'%', kurz:'c) nominales Wachstum'},
      {id:'rw', t:'d) Berechnen Sie das reale Wachstum (%).', f:'(b2 / (pi / 100) / b1 - 1) * 100', e:'%', kurz:'d) reales Wachstum'}
    ],
    wahl:[
      {frei:{muster:"Das nominale Wachstum misst die Veränderung des BIP in jeweiligen Preisen und enthält deshalb auch Preissteigerungen. Das reale Wachstum rechnet die Preisänderung heraus (nominales BIP ÷ Preisindex) und zeigt, ob tatsächlich mehr Güter und Dienstleistungen hergestellt wurden. Im Fall ist das reale Wachstum deutlich kleiner, ein großer Teil des Anstiegs geht auf höhere Preise zurück.", punkte:["nominal: in jeweiligen Preisen, enthält Preissteigerungen", "real: preisbereinigt mit dem Preisindex, zeigt die Mengenentwicklung", "Bezug zum Fall: reales Wachstum deutlich kleiner, Großteil sind Preissteigerungen"]}, id:'w1', t:'e) Erläutern Sie den Unterschied zwischen nominalem und realem Wachstum.', opts:['Real und nominal sind gleich, wenn die Bevölkerung wächst.', 'Das nominale Wachstum enthält Preissteigerungen; nur das reale Wachstum zeigt, ob mehr Güter hergestellt wurden.', 'Das reale Wachstum ist immer höher als das nominale.'], r:'1'},
      {frei:{muster:"Die Aussage ist zu pauschal. Real ist das BIP nur wenig gewachsen. Ein höheres BIP sagt nichts über die Verteilung aus; die Lohnquote zeigt nur, wie das Volkseinkommen auf Arbeit und Kapital verteilt ist – ob alle profitieren, bleibt offen. Das BIP erfasst zudem weder Hausarbeit und Ehrenamt noch Umweltschäden und Lebensqualität. Fazit: Ein steigendes BIP zeigt mehr Produktion, ist aber kein Beleg dafür, dass es allen besser geht.", punkte:["reales statt nominales Wachstum betrachtet (Anstieg real gering)", "BIP sagt nichts über die Verteilung (z. B. Lohnquote, Einkommensverteilung)", "Grenzen des BIP als Wohlstandsmaß (Umwelt, Hausarbeit, Ehrenamt, Lebensqualität)", "begründetes Fazit"]}, id:'w2', t:'f) Beurteilen Sie die Aussage des Ministers.', opts:['Sie ist zu pauschal: Das reale Wachstum ist geringer, und das BIP sagt nichts über Verteilung, Umwelt und Lebensqualität aus.', 'Sie trifft zu, denn ein höheres BIP bedeutet immer mehr Wohlstand für alle.', 'Sie ist falsch, weil das BIP gesunken ist.'], r:'0'}
    ],
    hinweise:['Volkseinkommen = Arbeitnehmerentgelt + Unternehmens- und Vermögenseinkommen.', 'Lohnquote = Arbeitnehmerentgelt ÷ Volkseinkommen × 100.', 'Reales BIP = nominales BIP ÷ (Preisindex ÷ 100).'],
    merke:'Volkseinkommen = Arbeitnehmerentgelt + Unternehmens- und Vermögenseinkommen · Lohnquote = Arbeitnehmerentgelt ÷ Volkseinkommen · reales BIP = nominales BIP ÷ Preisindex · ein steigendes BIP bedeutet nicht automatisch mehr Wohlstand für alle.'})
  ];
})(),
/* ---------- Volkswirtschaft · Wirtschaftsgymnasium Jahrgangsstufe 1 (VBWL, Bildungsplan 2021, BPE 15 bis 18) ----------
   NF Nachfrage: Bestimmungsfaktoren und Nachfragekurve · AN Angebot: Kostenverlauf, Gewinnmaximum, Angebotskurve (mit Abiturfall BPE 15)
   SU Verbrauchsteuer und Subvention im Marktmodell · HH Oligopol: Dilemma und Konzentration (mit Abiturfall BPE 16)
   KD Konjunktur: Indikatoren, Daten und Ziele (mit Abiturfall BPE 17) · GS Geldschöpfung und Geldmengen (mit Abiturfall BPE 18).
   Vorhandene Module (EL, PP, MP, PF, MO, MM, OL, KJ, MV, PN, EO, EI) ergänzen die J1 im Trainer. Neu am 05.11.2026. */
...(() => {
  const T = ['Volkswirtschaft', 'Wirtschaftsgymnasium'];
  const tab = (kopf, zeilen) => '<table class="lager"><tr>' + kopf.map(k => '<th>' + k + '</th>').join('') + '</tr>' + zeilen.map(z => '<tr>' + z.map((x, i) => '<td' + (i ? ' class="z"' : '') + '>' + x + '</td>').join('') + '</tr>').join('') + '</table>';
  return [
  /* ======================= NF · Nachfrage: Bestimmungsfaktoren und Nachfragekurve (BPE 15.1) ======================= */
  blBau('zuordnung', {id:'NF1', modul:'NF', stufe:1, titel:'Bewegung auf der Kurve oder Verschiebung?', tags:T.concat(['Nachfrage', 'Nachfragekurve']),
    text:'Betrachtet wird die Nachfrage nach E-Bikes. Wie wirkt sich das Ereignis auf die Nachfragekurve für E-Bikes aus (ceteris paribus)?',
    kategorien:['Bewegung entlang der Nachfragekurve', 'Verschiebung nach rechts', 'Verschiebung nach links'], anzahl:8,
    faelle:[
      {t:'Der Preis für E-Bikes sinkt.', k:0, weg:'Der eigene Preis ändert nur die Menge auf derselben Kurve.'},
      {t:'Die Einkommen der Haushalte steigen deutlich (E-Bike ist ein superiores Gut).', k:1},
      {t:'Die Preise für Bahn- und Busfahrkarten steigen stark.', k:1, weg:'Substitutionsgut wird teurer → mehr E-Bikes werden nachgefragt.'},
      {t:'Die Strompreise steigen kräftig.', k:2, weg:'Strom ist ein Komplementärgut zum E-Bike.'},
      {t:'Der Preis für E-Bikes steigt wegen höherer Akkukosten.', k:0},
      {t:'Viele Menschen erwarten, dass E-Bikes im nächsten Jahr deutlich billiger werden.', k:2, weg:'Käufe werden aufgeschoben.'},
      {t:'Radfahren wird durch eine Gesundheitskampagne zum Trend.', k:1, weg:'Die Bedürfnisstruktur ändert sich.'},
      {t:'Die Stadt baut viele sichere Radwege.', k:1},
      {t:'Die Bevölkerung in der Region schrumpft stark.', k:2, weg:'Weniger Nachfrager → Gesamtnachfrage sinkt.'}
    ],
    hinweise:['Ändert sich der Preis des Gutes selbst, bleibt man auf derselben Kurve.', 'Alle anderen Bestimmungsfaktoren (Preise anderer Güter, Einkommen, Bedürfnisse, Erwartungen) verschieben die ganze Kurve.'],
    merke:'Eigener Preis → Bewegung auf der Nachfragekurve · andere Bestimmungsfaktoren → Verschiebung (rechts = mehr Nachfrage bei jedem Preis, links = weniger) · Ceteris-paribus-Klausel: immer nur einen Faktor verändern.'}),
  blBau('zuordnung', {id:'NF2', modul:'NF', stufe:1, titel:'Substitutions-, Komplementär- oder indifferente Güter?', tags:T.concat(['Nachfrage', 'Güterbeziehungen']),
    text:'Ordne jedes Güterpaar zu.',
    kategorien:['Substitutionsgüter', 'Komplementärgüter', 'indifferente Güter'], anzahl:8,
    faelle:[
      {t:'Butter und Margarine', k:0}, {t:'Drucker und Druckerpatronen', k:1}, {t:'Kaffee und Fahrradhelm', k:2},
      {t:'Bahnfahrt und Fernbusfahrt', k:0}, {t:'Spielkonsole und Videospiel', k:1}, {t:'Smartphone und Gartenschlauch', k:2},
      {t:'Streamingdienst A und Streamingdienst B', k:0}, {t:'Auto und Kraftstoff', k:1}, {t:'Zahnpasta und Konzertkarte', k:2}
    ],
    hinweise:['Substitutionsgüter ersetzen sich gegenseitig, Komplementärgüter werden zusammen genutzt.', 'Steigt der Preis des einen Gutes: Substitut → Nachfrage nach dem anderen steigt · Komplement → sie sinkt · indifferent → keine Wirkung.'],
    merke:'Substitutionsgüter: Preis von A ↑ → Nachfrage nach B ↑ · Komplementärgüter: Preis von A ↑ → Nachfrage nach B ↓ · indifferente Güter: keine Beziehung.'}),
  blBau('rechnung', {id:'NF3', modul:'NF', stufe:2, titel:'Individuelle Nachfrage und Gesamtnachfrage', tags:T.concat(['Nachfrage', 'Prohibitivpreis', 'Sättigungsmenge', 'Gesamtnachfrage']),
    text:'Auf einem Markt gibt es zwei Gruppen von Nachfragern. Ihre Nachfrage (Menge x in Stück je Woche, Preis p in €) lautet: Gruppe 1: x = {a@0} − {b@0} · p · Gruppe 2: x = {a@1} − {b@1} · p. Berechne Prohibitivpreis, Sättigungsmenge und die nachgefragten Mengen bei p = {p1} und p = {p2}.',
    kopf:'Größe', spalten:['Gruppe 1', 'Gruppe 2'],
    zeilen:[
      {id:'a', t:'Achsenabschnitt der Menge a', aus:true}, {id:'b', t:'Steigung b', aus:true}, {id:'p1', t:'Preis 1', e:'€', aus:true}, {id:'p2', t:'Preis 2', e:'€', aus:true},
      {id:'pp', t:'Prohibitivpreis', e:'€', f:'a / b'},
      {id:'sm', t:'Sättigungsmenge (Stück)', f:'a', weg:'Menge bei p = 0: {a}'},
      {id:'x1', t:'Menge bei Preis 1 (Stück)', f:'max(0, a - b * p1)'},
      {id:'x2', t:'Menge bei Preis 2 (Stück)', f:'max(0, a - b * p2)'}
    ],
    werte:[{a:40, b:4, p1:8, p2:11}, {a:60, b:5, p1:8, p2:11}],
    sets:[[{a:30, b:3, p1:6, p2:11}, {a:48, b:4, p1:6, p2:11}], [{a:36, b:3, p1:9, p2:13}, {a:70, b:5, p1:9, p2:13}]],
    felder:[
      {id:'g1', t:'Gesamtnachfrage bei Preis 1 (Stück)', f:'x1@0 + x1@1', kurz:'Gesamtnachfrage bei Preis 1'},
      {id:'g2', t:'Gesamtnachfrage bei Preis 2 (Stück)', f:'x2@0 + x2@1', kurz:'Gesamtnachfrage bei Preis 2'}
    ],
    wahl:[{id:'w', t:'Warum hat die Gesamtnachfragekurve einen Knick?', opts:['Weil Gruppe 1 oberhalb ihres Prohibitivpreises nichts mehr nachfragt – darüber besteht die Gesamtnachfrage nur aus Gruppe 2.', 'Weil die Gesamtnachfrage immer das Doppelte der Einzelnachfrage ist.', 'Weil bei hohen Preisen das Angebot fehlt.'], r:'0'}],
    hinweise:['Prohibitivpreis: Preis, bei dem die Menge null wird (a ÷ b). Sättigungsmenge: Menge bei p = 0 (a).', 'Gesamtnachfrage: Mengen beider Gruppen beim selben Preis addieren – negative Mengen gibt es nicht (dann 0).'],
    merke:'Prohibitivpreis: ab hier keine Nachfrage · Sättigungsmenge: Nachfrage beim Preis 0 · Gesamtnachfrage = waagrechte Addition der individuellen Nachfragekurven (Knick beim Prohibitivpreis einer Gruppe).'}),
  {
    id:'NF4', modul:'NF', typ:'berechnung', mehrfach:true, stufe:2, titel:'Einkommen, inferiore und superiore Güter',
    tags:T.concat(['Nachfrage', 'Einkommen', 'inferiore Güter']),
    text:'Nach einer kräftigen Lohnerhöhung kaufen die Mitglieder eines Haushalts mehr Bio-Lebensmittel und gehen öfter ins Restaurant, kaufen aber weniger Billig-Nudeln und Discount-Kaffee.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Bio-Lebensmittel und Restaurantbesuche sind hier superiore Güter: Mit steigendem Einkommen steigt die Nachfrage.', richtig:true},
      {text:'Billig-Nudeln sind hier ein inferiores Gut: Mit steigendem Einkommen sinkt die Nachfrage.', richtig:true},
      {text:'Die Nachfragekurve für Billig-Nudeln verschiebt sich nach links.', richtig:true},
      {text:'Die Lohnerhöhung führt zu einer Bewegung entlang der Nachfragekurve für Bio-Lebensmittel.', fehler:'Das Einkommen ist ein anderer Bestimmungsfaktor als der eigene Preis – die Kurve verschiebt sich (nach rechts).'},
      {text:'Ob ein Gut inferior ist, hängt vom Haushalt und seiner Einkommenshöhe ab.', richtig:true, weg:'Für einen Studierenden können Fertiggerichte superior sein, für einen Gutverdiener inferior.'}
    ],
    hinweise:['Superior: Einkommen ↑ → Nachfrage ↑ · inferior: Einkommen ↑ → Nachfrage ↓.'],
    merke:'Superiore Güter: Nachfrage steigt mit dem Einkommen (Kurve nach rechts) · inferiore Güter: Nachfrage sinkt mit steigendem Einkommen (Kurve nach links) · Einkommensänderung = Verschiebung, nicht Bewegung auf der Kurve.'
  },

  /* ======================= AN · Angebot: Kostenverlauf, Gewinnmaximum und Angebotskurve (BPE 15.3–15.4) ======================= */
  {
    id:'AN1', modul:'AN', typ:'berechnung', mehrfach:true, stufe:1, titel:'Bestimmungsfaktoren des Angebots',
    tags:T.concat(['Angebot', 'Angebotskurve']),
    text:'Ein Hersteller von Solarmodulen überlegt, wie viele Module er anbietet.',
    frage:'Welche Aussagen treffen zu (ceteris paribus)?',
    optionen:[
      {text:'Steigt der Marktpreis der Module, bietet er mehr an – Bewegung entlang der Angebotskurve.', richtig:true},
      {text:'Steigen die Preise für Silizium (Produktionsfaktor), verschiebt sich die Angebotskurve nach links.', richtig:true},
      {text:'Eine neue, kostensparende Fertigungstechnik verschiebt die Angebotskurve nach rechts.', richtig:true},
      {text:'Erwartet er stark steigende Preise im nächsten Jahr, bietet er heute eher mehr an.', fehler:'Er hält eher Ware zurück, um sie später teurer zu verkaufen – das heutige Angebot sinkt.'},
      {text:'Treten weitere Anbieter in den Markt ein, verschiebt sich das Gesamtangebot nach rechts.', richtig:true}
    ],
    hinweise:['Preis des Gutes → Bewegung · Faktorpreise, Technik, Erwartungen, Zahl der Anbieter → Verschiebung.'],
    merke:'Angebot hängt ab von: Preis des Gutes (Bewegung), Kosten der Produktionsfaktoren, Technologie, Erwartungen, Zielen und Zahl der Anbieter (Verschiebung) · Kosten ↑ → Kurve nach links · Fortschritt → nach rechts.'
  },
  blBau('rechnung', {id:'AN2', modul:'AN', stufe:2, titel:'Gewinnmaximum, Betriebsminimum und Betriebsoptimum', tags:T.concat(['Angebot', 'Kostenfunktion', 'Gewinnmaximum', 'Preisuntergrenze']),
    text:'Ein Polypolist hat die Kostenfunktion K(x) = x³ − 12x² + 60x + 98 (x in 1.000 Stück, K in 1.000 €). Der Marktpreis beträgt {p} je Einheit (1.000 €). Bestimme mithilfe der Differenzialrechnung die gewinnmaximale Menge (E′ = K′), den Gewinn sowie Betriebsminimum und Betriebsoptimum.',
    kopf:'Größe',
    zeilen:[
      {id:'p', t:'Marktpreis p', aus:true}, {id:'a', t:'a', aus:true}, {id:'b', t:'b', aus:true}, {id:'c', t:'c', aus:true}, {id:'kf', t:'Fixkosten', aus:true},
      {id:'xg', t:'gewinnmaximale Menge x', f:'(2 * b + wurzel(4 * b * b - 12 * a * (c - p))) / (6 * a)', weg:'E′ = K′: {p} = 3x² − 24x + 60 → x = [xg]'},
      {id:'g', t:'Gewinn G = E − K', f:'p * xg - (a * xg * xg * xg - b * xg * xg + c * xg + kf)'},
      {id:'xm', t:'Betriebsminimum: Menge', f:'b / (2 * a)', weg:'k<sub>v</sub>(x) = x² − 12x + 60 → k<sub>v</sub>′ = 2x − 12 = 0 → x = [xm]'},
      {id:'pm', t:'Betriebsminimum: kurzfristige Preisuntergrenze', f:'a * xm * xm - b * xm + c'},
      {id:'xo', t:'Betriebsoptimum: Menge', f:'7', weg:'k(x) = x² − 12x + 60 + 98/x → k′ = 2x − 12 − 98/x² = 0 → x = [xo]'},
      {id:'po', t:'Betriebsoptimum: langfristige Preisuntergrenze', f:'a * xo * xo - b * xo + c + kf / xo'}
    ],
    werte:[{p:120, a:1, b:12, c:60, kf:98}],
    sets:[[{p:87, a:1, b:12, c:60, kf:98}], [{p:60, a:1, b:12, c:60, kf:98}]],
    wahl:[{id:'w', t:'Welcher Teil der Grenzkostenkurve ist die kurzfristige Angebotskurve des Polypolisten?', opts:['Der ganze Verlauf der Grenzkostenkurve.', 'Der steigende Ast der Grenzkostenkurve ab dem Betriebsminimum.', 'Der Teil unterhalb der Stückkostenkurve.'], r:'1'}],
    hinweise:['E(x) = p · x, also E′ = p. K′(x) = 3x² − 24x + 60. Setze p = K′(x) und nimm die größere Lösung.', 'Betriebsminimum: Minimum der variablen Stückkosten k<sub>v</sub> = x² − 12x + 60 · Betriebsoptimum: Minimum der Stückkosten k = k<sub>v</sub> + 98/x.'],
    merke:'Gewinnmaximum im Polypol: p = K′(x) (steigender Ast) · Betriebsminimum = Minimum der variablen Stückkosten = kurzfristige Preisuntergrenze · Betriebsoptimum = Minimum der Stückkosten = langfristige Preisuntergrenze · Angebotskurve = Grenzkostenkurve ab dem Betriebsminimum.'}),
  blBau('rechnung', {id:'AN3', modul:'AN', stufe:2, titel:'Vom individuellen Angebot zum Gesamtangebot', tags:T.concat(['Angebot', 'Gesamtangebot']),
    text:'Zwei Anbieter bieten auf einem Markt an (x in Stück, p in €). Anbieter 1: x = {d@0} · p − {c@0} · Anbieter 2: x = {d@1} · p − {c@1}. Unterhalb seines Mindestpreises bietet ein Anbieter nichts an. Betrachtet werden die Preise {p1@0} (Preis 1) und {p2@0} (Preis 2).',
    kopf:'Größe', spalten:['Anbieter 1', 'Anbieter 2'],
    zeilen:[
      {id:'d', t:'Steigung d', aus:true}, {id:'c', t:'Achsenabschnitt c', aus:true}, {id:'p1', t:'Preis 1', e:'€', aus:true}, {id:'p2', t:'Preis 2', e:'€', aus:true},
      {id:'pm', t:'Mindestpreis (Angebot beginnt)', e:'€', f:'c / d'},
      {id:'x1', t:'Angebotsmenge bei Preis 1 (Stück)', f:'max(0, d * p1 - c)'},
      {id:'x2', t:'Angebotsmenge bei Preis 2 (Stück)', f:'max(0, d * p2 - c)'}
    ],
    werte:[{d:2, c:10, p1:8, p2:14}, {d:3, c:30, p1:8, p2:14}],
    sets:[[{d:4, c:12, p1:5, p2:9}, {d:2, c:12, p1:5, p2:9}], [{d:3, c:15, p1:7, p2:12}, {d:5, c:40, p1:7, p2:12}]],
    felder:[
      {id:'g1', t:'Gesamtangebot bei Preis 1 (Stück)', f:'x1@0 + x1@1', kurz:'Gesamtangebot bei Preis 1'},
      {id:'g2', t:'Gesamtangebot bei Preis 2 (Stück)', f:'x2@0 + x2@1', kurz:'Gesamtangebot bei Preis 2'}
    ],
    wahl:[{id:'w', t:'Was passiert mit der Gesamtangebotskurve, wenn ein dritter Anbieter in den Markt eintritt?', opts:['Sie verschiebt sich nach links.', 'Sie verschiebt sich nach rechts: Bei jedem Preis wird mehr angeboten.', 'Sie bleibt unverändert, weil sich der Preis nicht ändert.'], r:'1'}],
    hinweise:['Mindestpreis: Angebotsmenge = 0 → p = c ÷ d.', 'Gesamtangebot = Summe der Mengen aller Anbieter beim selben Preis (negative Mengen → 0).'],
    merke:'Gesamtangebot = waagrechte Addition der individuellen Angebotskurven · unterhalb ihres Mindestpreises (Betriebsminimum) bieten Anbieter nichts an · mehr Anbieter → Gesamtangebot nach rechts.'}),
  ...blAbi('rechnung', {id:'AN4', modul:'AN', titel:'Abiturfall: Preiserhöhung im Kino', tags:T.concat(['Abiturfall', 'Preiselastizität', 'Gewinnmaximum', 'Angebot']),
    text:'Ein Kinobetreiber erhöht den Eintrittspreis von {p0} auf {p1}. Die Zahl der verkauften Karten je Woche ändert sich von {x0} auf {x1}. Sein Lieferant für Popcornmaschinen ist Polypolist mit der Kostenfunktion K(x) = x³ − 12x² + 60x + 98 (x in 100 Stück, K und p in 1.000 €); der Marktpreis einer Einheit (100 Maschinen) liegt bei {pm}.',
    zeilen:[
      {id:'p0', t:'Preis vorher', e:'€', aus:true}, {id:'p1', t:'Preis nachher', e:'€', aus:true}, {id:'x0', t:'Menge vorher', aus:true}, {id:'x1', t:'Menge nachher', aus:true}, {id:'pm', t:'Marktpreis Maschinen', aus:true}
    ],
    werte:[{p0:10, p1:12, x0:1000, x1:850, pm:87}],
    sets:[[{p0:8, p1:10, x0:2000, x1:1400, pm:120}]],
    felder:[
      {id:'e', t:'a) Berechnen Sie die direkte Preiselastizität der Nachfrage (auf zwei Nachkommastellen).', f:'((x1 - x0) / x0) / ((p1 - p0) / p0)', kurz:'a) Elastizität'},
      {id:'u0', t:'b) Berechnen Sie den Umsatz vor der Preiserhöhung (€).', f:'p0 * x0', e:'€', kurz:'b) Umsatz vorher'},
      {id:'u1', t:'c) Berechnen Sie den Umsatz nach der Preiserhöhung (€).', f:'p1 * x1', e:'€', kurz:'c) Umsatz nachher'},
      {id:'xm', t:'d) Ermitteln Sie die gewinnmaximale Menge des Maschinenherstellers (in 100 Stück).', f:'(24 + wurzel(576 - 12 * (60 - pm))) / 6', kurz:'d) gewinnmaximale Menge', weg:V => `E′ = K′: ${V.pm} = 3x² − 24x + 60 → x = ${blN((24 + Math.sqrt(576 - 12 * (60 - V.pm))) / 6)}`},
      {id:'gm', t:'e) Berechnen Sie seinen Gewinn (in 1.000 €).', f:'pm * ((24 + wurzel(576 - 12 * (60 - pm))) / 6) - (((24 + wurzel(576 - 12 * (60 - pm))) / 6) * ((24 + wurzel(576 - 12 * (60 - pm))) / 6) * ((24 + wurzel(576 - 12 * (60 - pm))) / 6) - 12 * ((24 + wurzel(576 - 12 * (60 - pm))) / 6) * ((24 + wurzel(576 - 12 * (60 - pm))) / 6) + 60 * ((24 + wurzel(576 - 12 * (60 - pm))) / 6) + 98)', kurz:'e) Gewinn', weg:V => { const x = (24 + Math.sqrt(576 - 12 * (60 - V.pm))) / 6; return `G = ${V.pm} · ${blN(x)} − K(${blN(x)}) = ${blN(V.pm * x)} − ${blN(x * x * x - 12 * x * x + 60 * x + 98)} = ${blB(blN(V.pm * x - (x * x * x - 12 * x * x + 60 * x + 98)))}`; }}
    ],
    wahl:[
      {frei:{muster:'Der Betrag der Elastizität ist kleiner als 1: Die Nachfrage reagiert unelastisch – die Menge sinkt prozentual weniger, als der Preis steigt. Deshalb steigt der Umsatz. (Bei einem Betrag größer als 1 – elastische Nachfrage – würde der Umsatz sinken.) Gründe für eine geringe Reaktion: wenige gleichwertige Alternativen in der Nähe, Kino als Gemeinschaftserlebnis, kleiner Anteil am Budget.', punkte:['Elastizität richtig eingeordnet (unelastisch bzw. elastisch, Betrag mit 1 verglichen)', 'Zusammenhang Preisänderung – Mengenänderung – Umsatz erklärt', 'Bezug zu den berechneten Umsätzen', 'mindestens ein Grund für die Höhe der Elastizität']}, id:'w1', t:'f) Erläutern Sie den Zusammenhang zwischen der Elastizität und der Umsatzentwicklung.', opts:['Die Nachfrage ist unelastisch (Betrag < 1): Die Menge sinkt prozentual weniger, als der Preis steigt – der Umsatz steigt.', 'Die Nachfrage ist elastisch (Betrag > 1): Die Menge sinkt prozentual stärker, als der Preis steigt – der Umsatz sinkt.', 'Die Elastizität hat keinen Einfluss auf den Umsatz.'], r:'abs(((x1 - x0) / x0) / ((p1 - p0) / p0)) < 1 ? 0 : 1'},
      {frei:{muster:'Steigende Energiekosten erhöhen die Kosten der Produktionsfaktoren. Bei jedem Preis lohnt sich nur noch eine geringere Menge, weil die Grenzkosten steigen: Die individuelle Angebotskurve (Grenzkostenkurve ab dem Betriebsminimum) verschiebt sich nach links bzw. oben. Da alle Anbieter betroffen sind, verschiebt sich auch das Gesamtangebot nach links – der Gleichgewichtspreis steigt, die Menge sinkt.', punkte:['höhere Faktorkosten → höhere Grenzkosten', 'individuelle Angebotskurve verschiebt sich nach links (oben)', 'Gesamtangebot nach links, Folgen für Preis und Menge']}, id:'w2', t:'g) Beurteilen Sie, wie sich stark steigende Energiekosten auf das Angebot der Maschinenhersteller auswirken.', opts:['Die Angebotskurve verschiebt sich nach rechts, weil die Hersteller mehr verdienen wollen.', 'Die Angebotskurven verschieben sich nach links: Höhere Faktorkosten erhöhen die Grenzkosten, bei jedem Preis wird weniger angeboten.', 'Es kommt nur zu einer Bewegung entlang der Angebotskurve.'], r:'1'}
    ],
    hinweise:['Elastizität = prozentuale Mengenänderung ÷ prozentuale Preisänderung.', 'Gewinnmaximum im Polypol: p = K′(x) mit K′(x) = 3x² − 24x + 60.'],
    merke:'Direkte Preiselastizität: Betrag < 1 unelastisch (Preis ↑ → Umsatz ↑), Betrag > 1 elastisch (Preis ↑ → Umsatz ↓) · Polypol: Gewinnmaximum bei p = K′ · Faktorkosten ↑ → Angebot nach links.'}),

  /* ======================= SU · Verbrauchsteuer und Subvention im Marktmodell (BPE 16.2) ======================= */
  blBau('rechnung', {id:'SU1', modul:'SU', stufe:2, titel:'Wirkung einer Mengensteuer', tags:T.concat(['Staatseingriffe', 'Verbrauchsteuer', 'Wohlfahrt']),
    text:'Auf einem Polypolmarkt lauten Nachfrage p = {a} − {b}x und Angebot p = {c} + {d}x (p in €, x in 1.000 Stück). Der Staat erhebt eine Verbrauchsteuer von {t} je Stück, die die Anbieter abführen.',
    kopf:'Größe',
    zeilen:[
      {id:'a', t:'a', e:'ma', aus:true}, {id:'b', t:'b', e:'ma', aus:true}, {id:'c', t:'c', e:'ma', aus:true}, {id:'d', t:'d', e:'ma', aus:true}, {id:'t', t:'Steuer je Stück', e:'€', aus:true},
      {id:'x0', t:'Gleichgewichtsmenge ohne Steuer (1.000 Stück)', f:'(a - c) / (b + d)'},
      {id:'p0', t:'Gleichgewichtspreis ohne Steuer', e:'€', f:'a - b * x0'},
      {id:'xt', t:'Menge mit Steuer (1.000 Stück)', f:'(a - c - t) / (b + d)', weg:'neue Angebotskurve p = {c} + {t} + {d}x → x = ({a} − {c} − {t}) ÷ ({b} + {d}) = [xt]'},
      {id:'pk', t:'Preis für die Käufer', e:'€', f:'a - b * xt'},
      {id:'pv', t:'Nettopreis für die Anbieter', e:'€', f:'pk - t'},
      {id:'sa', t:'Steueraufkommen (1.000 €)', f:'t * xt'},
      {id:'wv', t:'Wohlfahrtsverlust (1.000 €)', f:'t * (x0 - xt) / 2'}
    ],
    werte:[{a:20, b:0.5, c:2, d:0.25, t:3}],
    sets:[[{a:30, b:1, c:6, d:0.5, t:3}], [{a:24, b:0.5, c:4, d:0.5, t:4}]],
    wahl:[{id:'w', t:'Wer trägt hier den größeren Teil der Steuer je Stück?', opts:['die Käufer', 'die Anbieter', 'beide gleich viel'], r:'(a - b * ((a - c - t) / (b + d))) - (a - b * ((a - c) / (b + d))) > t / 2 + 0.001 ? 0 : (a - b * ((a - c - t) / (b + d))) - (a - b * ((a - c) / (b + d))) < t / 2 - 0.001 ? 1 : 2'}],
    hinweise:['Die Steuer verschiebt die Angebotskurve um t nach oben: p = c + t + dx.', 'Steueranteil der Käufer = Käuferpreis − alter Preis; Anteil der Anbieter = alter Preis − Nettopreis.', 'Wohlfahrtsverlust = Dreieck: ½ · t · (Mengenrückgang).'],
    merke:'Verbrauchsteuer: Angebotskurve nach oben → Käuferpreis ↑, Nettopreis der Anbieter ↓, Menge ↓ · Aufkommen = t · neue Menge · Wohlfahrtsverlust = ½ · t · Δx · wer weniger elastisch reagiert, trägt mehr von der Steuer.'}),
  blBau('rechnung', {id:'SU2', modul:'SU', stufe:2, titel:'Wirkung einer Subvention', tags:T.concat(['Staatseingriffe', 'Subvention']),
    text:'Auf einem Polypolmarkt lauten Nachfrage p = {a} − {b}x und Angebot p = {c} + {d}x (p in €, x in 1.000 Stück). Um den Absatz zu fördern, zahlt der Staat den Anbietern eine Subvention von {s} je verkauftem Stück.',
    kopf:'Größe',
    zeilen:[
      {id:'a', t:'a', e:'ma', aus:true}, {id:'b', t:'b', e:'ma', aus:true}, {id:'c', t:'c', e:'ma', aus:true}, {id:'d', t:'d', e:'ma', aus:true}, {id:'s', t:'Subvention je Stück', e:'€', aus:true},
      {id:'x0', t:'Gleichgewichtsmenge ohne Subvention (1.000 Stück)', f:'(a - c) / (b + d)'},
      {id:'p0', t:'Gleichgewichtspreis ohne Subvention', e:'€', f:'a - b * x0'},
      {id:'xs', t:'Menge mit Subvention (1.000 Stück)', f:'(a - c + s) / (b + d)', weg:'neue Angebotskurve p = {c} − {s} + {d}x → x = ({a} − {c} + {s}) ÷ ({b} + {d}) = [xs]'},
      {id:'pk', t:'Preis für die Käufer', e:'€', f:'a - b * xs'},
      {id:'pa', t:'Erlös je Stück für die Anbieter (Preis + Subvention)', e:'€', f:'pk + s'},
      {id:'sk', t:'Kosten der Subvention für den Staat (1.000 €)', f:'s * xs'}
    ],
    werte:[{a:20, b:0.5, c:2, d:0.25, s:1.5}],
    sets:[[{a:30, b:1, c:6, d:0.5, s:3}], [{a:24, b:0.5, c:4, d:0.5, s:2}]],
    wahl:[{id:'w', t:'Welche Aussage zur Subvention trifft zu?', opts:['Der Käuferpreis steigt, weil der Staat eingreift.', 'Käufer zahlen weniger, Anbieter erhalten mehr – die Menge steigt; finanziert wird das über Steuern.', 'Die Subvention verändert Preis und Menge nicht.'], r:'1'}],
    hinweise:['Die Subvention verschiebt die Angebotskurve um s nach unten: p = c − s + dx.', 'Anbieter erhalten den Käuferpreis plus die Subvention.'],
    merke:'Subvention: Angebotskurve nach unten → Käuferpreis ↓, Anbietererlös ↑, Menge ↑ · Kosten = s · neue Menge (aus Steuermitteln) · marktkonform, weil der Preismechanismus wirkt; Gefahr von Mitnahmeeffekten und Dauersubventionen.'}),
  {
    id:'SU3', modul:'SU', typ:'berechnung', mehrfach:true, stufe:3, titel:'Steuer, Subvention und Zielerreichung',
    tags:T.concat(['Staatseingriffe', 'Verbrauchsteuer', 'Subvention']),
    text:'Die Regierung will den Zuckerkonsum senken und überlegt eine Steuer auf zuckerhaltige Getränke. Gleichzeitig sollen Wärmepumpen durch eine Subvention gefördert werden.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Steuer und Subvention sind marktkonforme Eingriffe: Der Preis bildet sich weiter am Markt.', richtig:true},
      {text:'Je unelastischer die Nachfrage nach Limonade ist, desto geringer ist die Lenkungswirkung der Steuer, aber desto höher das Steueraufkommen.', richtig:true},
      {text:'Ein Höchstpreis für Limonade wäre ebenfalls eine marktkonforme Maßnahme.', fehler:'Höchst- und Mindestpreise setzen den Marktpreis außer Kraft – sie sind marktkonträr.'},
      {text:'Eine Subvention für Wärmepumpen kann Mitnahmeeffekte haben: Auch Haushalte, die ohnehin gekauft hätten, erhalten sie.', richtig:true},
      {text:'Eine Verbrauchsteuer belastet immer nur die Anbieter, weil sie die Steuer abführen.', fehler:'Wer die Steuer abführt, trägt sie nicht unbedingt: Ein Teil wird über höhere Preise an die Käufer weitergegeben.'}
    ],
    hinweise:['Lenkungsziel (weniger Konsum) und Finanzierungsziel (Einnahmen) können sich widersprechen.'],
    merke:'Marktkonform: Steuern, Subventionen, Transfers (Preismechanismus bleibt) · marktkonträr: Höchst- und Mindestpreise · Steuerlast verteilt sich nach Elastizität · unelastische Nachfrage: wenig Lenkung, viel Aufkommen.'
  },

  /* ======================= HH · Oligopol: Dilemma, Preiskampf und Konzentration (BPE 16.6) ======================= */
  blBau('rechnung', {id:'HH1', modul:'HH', stufe:1, titel:'Konzentration messen: Herfindahl-Hirschman-Index', tags:T.concat(['Oligopol', 'Konzentration', 'Herfindahl-Hirschman-Index']),
    text:'Die Marktanteile (in %) der Anbieter auf zwei Märkten sind bekannt. Berechne für jeden Markt den Herfindahl-Hirschman-Index (Summe der quadrierten Marktanteile in Prozentpunkten).',
    kopf:'Anbieter', spalten:['Markt A', 'Markt B'],
    zeilen:[
      {id:'s1', t:'Marktanteil Anbieter 1', e:'%'}, {id:'s2', t:'Marktanteil Anbieter 2', e:'%'}, {id:'s3', t:'Marktanteil Anbieter 3', e:'%'}, {id:'s4', t:'Marktanteil Anbieter 4', e:'%'}, {id:'s5', t:'Marktanteil Anbieter 5', e:'%'},
      {id:'h', t:'Herfindahl-Hirschman-Index', f:'s1 * s1 + s2 * s2 + s3 * s3 + s4 * s4 + s5 * s5'},
      {id:'hf', t:'HHI nach Fusion von Anbieter 1 und 2', f:'(s1 + s2) * (s1 + s2) + s3 * s3 + s4 * s4 + s5 * s5'},
      {id:'dh', t:'Anstieg des HHI durch die Fusion', f:'hf - h'}
    ],
    werte:[{s1:40, s2:30, s3:20, s4:10, s5:0}, {s1:25, s2:25, s3:20, s4:15, s5:15}],
    sets:[[{s1:50, s2:20, s3:15, s4:10, s5:5}, {s1:30, s2:20, s3:20, s4:15, s5:15}], [{s1:35, s2:35, s3:20, s4:10, s5:0}, {s1:20, s2:20, s3:20, s4:20, s5:20}]],
    wahl:[{id:'w', t:'Welcher Markt ist vor der Fusion stärker konzentriert?', opts:['Markt A', 'Markt B', 'beide gleich'], r:'(s1@0*s1@0+s2@0*s2@0+s3@0*s3@0+s4@0*s4@0+s5@0*s5@0) > (s1@1*s1@1+s2@1*s2@1+s3@1*s3@1+s4@1*s4@1+s5@1*s5@1) ? 0 : 1'}],
    hinweise:['HHI = Summe der quadrierten Marktanteile (40 % → 40² = 1.600).', 'Der HHI liegt zwischen fast 0 (viele kleine Anbieter) und 10.000 (Monopol: 100²).', 'Fusion: Die Anteile der beiden Anbieter werden addiert, dann quadriert.'],
    merke:'HHI = Σ (Marktanteil in %)² · Monopol 10.000 · je höher, desto stärker konzentriert · große Anbieter wiegen durch das Quadrieren besonders schwer · Kartellbehörden prüfen bei Fusionen Höhe und Anstieg des HHI.'}),
  {
    id:'HH2', modul:'HH', typ:'berechnung', mehrfach:true, stufe:2, titel:'Das Dilemma der Oligopolisten',
    tags:T.concat(['Oligopol', 'Gefangenendilemma', 'Auszahlungsmatrix']),
    text:'Zwei Tankstellenketten A und B legen ihre Preise fest. Die Matrix zeigt die Gewinne (A | B in Mio. €):'
      + tab(['', 'B: Preis hoch', 'B: Preis senken'], [['A: Preis hoch', '10 | 10', '2 | 14'], ['A: Preis senken', '14 | 2', '5 | 5']]),
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Für jede Kette ist „Preis senken“ die bessere Wahl – egal, was die andere tut (dominante Strategie).', richtig:true, weg:'A: 14 > 10 und 5 > 2; für B genauso.'},
      {text:'Handeln beide eigennützig, landen sie bei 5 | 5 – obwohl 10 | 10 für beide besser wäre.', richtig:true},
      {text:'Eine Absprache, beide Preise hoch zu halten, ist erlaubt, wenn sie nur mündlich getroffen wird.', fehler:'Preisabsprachen sind als Kartell verboten (§ 1 GWB, Art. 101 AEUV) – auch mündlich oder stillschweigend abgestimmt.'},
      {text:'Selbst bei einer Absprache besteht der Anreiz, heimlich den Preis zu senken und 14 statt 10 zu verdienen.', richtig:true},
      {text:'Im Dilemma verhalten sich die Oligopolisten kooperativ.', fehler:'Das Dilemma beschreibt gerade, dass rationales Einzelverhalten zu einem schlechteren Ergebnis für beide führt.'}
    ],
    hinweise:['Prüfe für A: Was ist besser, wenn B hoch bleibt? Und wenn B senkt?'],
    merke:'Gefangenendilemma: individuell rationale Strategie (Preis senken) → kollektiv schlechteres Ergebnis · Kooperation (Kartell) wäre für die Anbieter besser, ist aber instabil und verboten · Preiskampf nützt den Käufern.'
  },
  blBau('zuordnung', {id:'HH3', modul:'HH', stufe:2, titel:'Verhaltensweisen im Oligopol', tags:T.concat(['Oligopol', 'Preisführerschaft', 'Kartell']),
    text:'Ordne das beschriebene Verhalten zu.',
    kategorien:['Preisstarrheit', 'Preisführerschaft', 'Preisabsprache (Kartell)', 'Preiskampf'], anzahl:7,
    faelle:[
      {t:'Die Mineralölkonzerne erhöhen die Preise; die kleineren Ketten ziehen innerhalb einer Stunde nach.', k:1},
      {t:'Obwohl die Kosten leicht gesunken sind, ändert kein Anbieter seinen Preis – jeder fürchtet, dass die anderen sonst nachziehen.', k:0},
      {t:'Drei Zementhersteller verabreden heimlich Mindestpreise und teilen die Kunden nach Regionen auf.', k:2},
      {t:'Zwei Billigflieger unterbieten sich wochenlang, bis einer Verluste macht und aufgibt.', k:3},
      {t:'Der Marktführer im Brauereimarkt kündigt Preiserhöhungen an, die anderen folgen.', k:1},
      {t:'Die Mobilfunkanbieter halten ihre Tarife über Jahre fast unverändert.', k:0},
      {t:'Lkw-Hersteller sprechen über Jahre ihre Listenpreise ab.', k:2},
      {t:'Ein neuer Lieferdienst senkt die Preise radikal, die etablierten Anbieter antworten mit Rabattaktionen.', k:3}
    ],
    hinweise:['Absprache = Kartell (verboten). Folgen ohne Absprache = Preisführerschaft.'],
    merke:'Oligopol: gegenseitige Abhängigkeit (Reaktionsverbundenheit) · Preisstarrheit (Angst vor Reaktionen) · Preisführerschaft (Marktführer gibt vor) · Kartell (verboten nach GWB/AEUV) · Preiskampf (Verdrängung).'}),
  ...blAbi('rechnung', {id:'HH4', modul:'HH', titel:'Abiturfall: Der Monopolist und die Konsumenten', tags:T.concat(['Abiturfall', 'Monopol', 'Cournot', 'Konsumentenrente']),
    text:'Ein Unternehmen ist einziger Anbieter eines patentierten Medikaments. Die Preis-Absatz-Funktion lautet p(x) = {a} − {b}x, die Kostenfunktion K(x) = {kf} + {kv}x (x in 1.000 Packungen, p in €, K in 1.000 €).',
    zeilen:[
      {id:'a', t:'a', aus:true}, {id:'b', t:'b', e:'ma', aus:true}, {id:'kf', t:'Fixkosten', aus:true}, {id:'kv', t:'variable Stückkosten', aus:true}
    ],
    werte:[{a:100, b:2, kf:400, kv:20}],
    sets:[[{a:120, b:1, kf:1000, kv:40}], [{a:90, b:1.5, kf:300, kv:30}]],
    felder:[
      {id:'xc', t:'a) Ermitteln Sie die gewinnmaximale Menge (Cournot-Menge, 1.000 Packungen).', f:'(a - kv) / (2 * b)', kurz:'a) Cournot-Menge', weg:V => `E′ = K′: ${blN(V.a)} − ${blN(2 * V.b)}x = ${blN(V.kv)} → x = ${blB(blN((V.a - V.kv) / (2 * V.b)))}`},
      {id:'pc', t:'b) Berechnen Sie den Cournot-Preis (€).', f:'a - b * (a - kv) / (2 * b)', e:'€', kurz:'b) Cournot-Preis'},
      {id:'gm', t:'c) Berechnen Sie den maximalen Gewinn (1.000 €).', f:'(a - b * (a - kv) / (2 * b)) * (a - kv) / (2 * b) - kf - kv * (a - kv) / (2 * b)', kurz:'c) Gewinn'},
      {id:'km', t:'d) Berechnen Sie die Konsumentenrente im Monopol (1.000 €).', f:'(a - (a - b * (a - kv) / (2 * b))) * ((a - kv) / (2 * b)) / 2', kurz:'d) Konsumentenrente Monopol'},
      {id:'kp', t:'e) Berechnen Sie die Konsumentenrente, wenn der Preis wie im Polypol den Grenzkosten entspräche (1.000 €).', f:'(a - kv) * ((a - kv) / b) / 2', kurz:'e) Konsumentenrente bei p = Grenzkosten'}
    ],
    wahl:[
      {frei:{muster:'Der Monopolist setzt den Preis über den Grenzkosten fest und bietet weniger an als bei vollständiger Konkurrenz (p = Grenzkosten). Die Konsumenten zahlen mehr und erhalten weniger; ihre Konsumentenrente schrumpft (vgl. d und e), ein Teil wird zum Gewinn des Monopolisten, ein Teil geht als Wohlfahrtsverlust verloren. Beim Medikament ist das besonders heikel, weil Kranke kaum ausweichen können (unelastische Nachfrage).', punkte:['höherer Preis und geringere Menge als im Polypol', 'Rückgang der Konsumentenrente mit Bezug auf d) und e)', 'Umverteilung zum Monopolisten und Wohlfahrtsverlust', 'Bezug zum Medikament (wenig Ausweichmöglichkeiten)']}, id:'w1', t:'f) Erläutern Sie die Folgen der Monopolstellung für die Konsumenten.', opts:['Der Monopolist verlangt einen höheren Preis und bietet weniger an als im Polypol – die Konsumentenrente sinkt, es entsteht ein Wohlfahrtsverlust.', 'Die Konsumenten profitieren, weil der Monopolist die Kosten senkt und den Preis an die Grenzkosten anpasst.', 'Für die Konsumenten ändert sich nichts.'], r:'0'},
      {frei:{muster:'Das Monopol beruht auf einem Patent (rechtliches Monopol). Das Patent belohnt die teure Forschung und schafft Anreize für neue Medikamente; es ist zeitlich begrenzt (höchstens 20 Jahre). Danach können Generika-Hersteller anbieten, der Preis sinkt. Der Staat kann außerdem über Preisregeln der Krankenkassen und die Missbrauchsaufsicht eingreifen. Abzuwägen sind also Innovationsanreize gegen hohe Preise.', punkte:['Ursache: Patent als rechtliches (staatlich geschütztes) Monopol', 'Rechtfertigung: Forschungsanreiz, zeitliche Begrenzung', 'Folge nach Ablauf (Generika) oder staatliche Kontrolle', 'abwägendes Urteil']}, id:'w2', t:'g) Beurteilen Sie, ob das Monopol des Herstellers gerechtfertigt ist.', opts:['Es ist ein natürliches Monopol und muss deshalb verstaatlicht werden.', 'Das Patent schafft ein befristetes, rechtliches Monopol: Es belohnt Forschung und Innovation; nach Ablauf sorgen Generika für Wettbewerb – abzuwägen gegen hohe Preise.', 'Monopole sind in Deutschland grundsätzlich verboten.'], r:'1'}
    ],
    hinweise:['Erlös E(x) = (a − bx) · x → E′(x) = a − 2bx. Gewinnmaximum: E′ = K′ (Grenzkosten = kv).', 'Konsumentenrente = ½ · (Prohibitivpreis − Preis) · Menge.', 'Polypol-Vergleich: p = kv → x = (a − kv) ÷ b.'],
    merke:'Cournot-Punkt: E′ = K′, Preis auf der Preis-Absatz-Funktion · Monopol: höherer Preis, geringere Menge als im Polypol · Konsumentenrente sinkt, Wohlfahrtsverlust · Patente: befristetes rechtliches Monopol als Innovationsanreiz.'}),

  /* ======================= KD · Konjunktur: Indikatoren, Daten und Ziele (BPE 17) ======================= */
  blBau('zuordnung', {id:'KD1', modul:'KD', stufe:1, titel:'Früh-, Gegenwarts- oder Spätindikator?', tags:T.concat(['Konjunktur', 'Konjunkturindikatoren']),
    text:'Ordne jeden Konjunkturindikator zu.',
    kategorien:['Frühindikator', 'Gegenwartsindikator', 'Spätindikator'], anzahl:8,
    faelle:[
      {t:'Auftragseingänge in der Industrie', k:0}, {t:'ifo-Geschäftsklimaindex', k:0}, {t:'Baugenehmigungen', k:0},
      {t:'Kapazitätsauslastung der Industrie', k:1}, {t:'Industrieproduktion', k:1}, {t:'Bruttoinlandsprodukt', k:1},
      {t:'Arbeitslosenquote', k:2, weg:'Unternehmen stellen erst ein bzw. entlassen erst, wenn sich die Lage verfestigt hat.'}, {t:'Inflationsrate', k:2}, {t:'Tariflohnsteigerungen', k:2},
      {t:'Konsumklimaindex (Stimmung der Verbraucher)', k:0}
    ],
    hinweise:['Frühindikatoren zeigen die künftige Entwicklung (Erwartungen, Aufträge), Gegenwartsindikatoren die aktuelle, Spätindikatoren reagieren verzögert.'],
    merke:'Frühindikatoren: Auftragseingänge, Geschäftsklima, Konsumklima, Baugenehmigungen · Gegenwartsindikatoren: Produktion, Kapazitätsauslastung, BIP · Spätindikatoren: Arbeitslosigkeit, Preise, Löhne.'}),
  {
    id:'KD2', modul:'KD', typ:'berechnung', mehrfach:true, stufe:1, titel:'Der idealtypische Konjunkturzyklus',
    tags:T.concat(['Konjunktur', 'Konjunkturzyklus']),
    text:'Im Modell verläuft die Wirtschaft in Wellen um den langfristigen Wachstumstrend.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Die Phasen heißen Aufschwung (Expansion), Hochkonjunktur (Boom), Abschwung (Rezession) und Tiefstand (Depression).', richtig:true},
      {text:'In der Hochkonjunktur sind die Kapazitäten stark ausgelastet, Preise und Löhne steigen.', richtig:true},
      {text:'Im Tiefstand ist die Arbeitslosigkeit am niedrigsten.', fehler:'Im Tiefstand ist die Arbeitslosigkeit hoch; sie sinkt erst verzögert im Aufschwung.'},
      {text:'Der Trend zeigt die langfristige Entwicklung des Produktionspotenzials, die Konjunktur die Schwankungen darum.', richtig:true},
      {text:'Reale Konjunkturverläufe sind unregelmäßig und lassen sich nicht exakt vorhersagen.', richtig:true}
    ],
    hinweise:['Zyklus: Aufschwung → Boom → Abschwung → Tiefstand → …'],
    merke:'Konjunkturphasen: Aufschwung, Hochkonjunktur, Abschwung, Tiefstand · Schwankungen um den Wachstumstrend · Realität weicht vom Modell ab (unterschiedliche Länge und Stärke, Schocks).'
  },
  blBau('rechnung', {id:'KD3', modul:'KD', stufe:2, titel:'Zielerreichung aus statistischen Daten', tags:T.concat(['Konjunktur', 'Stabilitätsgesetz', 'Inflationsrate', 'Arbeitslosenquote']),
    text:'Für eine Volkswirtschaft liegen folgende Daten vor (BIP real in Mrd. €, Personen in Mio.).',
    kopf:'Größe', spalten:['Jahr 1', 'Jahr 2'],
    zeilen:[
      {id:'by', t:'BIP real im Vorjahr'}, {id:'bj', t:'BIP real'}, {id:'vv', t:'Verbraucherpreisindex Vorjahr'}, {id:'vj', t:'Verbraucherpreisindex'},
      {id:'al', t:'Arbeitslose'}, {id:'ep', t:'Erwerbspersonen'}, {id:'ex', t:'Exporte'}, {id:'im', t:'Importe'},
      {id:'w', t:'Wachstumsrate des realen BIP', e:'%', f:'(bj - by) / by * 100'},
      {id:'ir', t:'Inflationsrate', e:'%', f:'(vj - vv) / vv * 100'},
      {id:'aq', t:'Arbeitslosenquote', e:'%', f:'al / ep * 100'},
      {id:'ab', t:'Außenbeitrag in % des BIP', e:'%', f:'(ex - im) / bj * 100'}
    ],
    werte:[{by:3600, bj:3672, vv:115.0, vj:117.3, al:2.6, ep:46.0, ex:1700, im:1520}, {by:3672, bj:3654, vv:117.3, vj:124.3, al:2.9, ep:46.0, ex:1690, im:1580}],
    sets:[[{by:3800, bj:3876, vv:120.0, vj:122.4, al:2.3, ep:46.0, ex:1850, im:1640}, {by:3876, bj:3872, vv:122.4, vj:128.5, al:2.8, ep:46.0, ex:1810, im:1650}]],
    wahl:[{id:'z', t:'Welches Ziel des Stabilitätsgesetzes wird im Jahr 2 besonders deutlich verfehlt?', opts:['Preisniveaustabilität (Ziel: Inflationsrate knapp unter 2 %)', 'außenwirtschaftliches Gleichgewicht', 'keines – alle Ziele sind erreicht'], r:'0'}],
    hinweise:['Wachstumsrate = (BIP − BIP Vorjahr) ÷ BIP Vorjahr · 100.', 'Inflationsrate aus dem Verbraucherpreisindex: (VPI − VPI Vorjahr) ÷ VPI Vorjahr · 100.', 'Arbeitslosenquote = Arbeitslose ÷ Erwerbspersonen · 100.'],
    merke:'Stabilitätsgesetz: Preisniveaustabilität (EZB: 2 % mittelfristig), hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht, stetiges und angemessenes Wachstum · Daten aus der Statistik prüfen und vergleichen.'}),
  {
    id:'KD4', modul:'KD', typ:'berechnung', mehrfach:true, stufe:2, titel:'Vom magischen Viereck zum Sechseck',
    tags:T.concat(['Wirtschaftspolitische Ziele', 'Zielbeziehungen']),
    text:'Neben den vier Zielen des Stabilitätsgesetzes werden oft zwei weitere Ziele genannt.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Das magische Sechseck ergänzt eine gerechte Einkommens- und Vermögensverteilung und den Erhalt einer lebenswerten Umwelt.', richtig:true},
      {text:'„Magisch“ heißt, dass sich nie alle Ziele gleichzeitig vollständig erreichen lassen.', richtig:true},
      {text:'Mehr Wachstum und mehr Beschäftigung stehen meist in Zielharmonie.', richtig:true},
      {text:'Wirtschaftswachstum und Umweltschutz stehen immer in Zielharmonie.', fehler:'Mehr Produktion bedeutet oft mehr Ressourcenverbrauch und Emissionen – ein möglicher Zielkonflikt; nachhaltiges (qualitatives) Wachstum versucht ihn zu entschärfen.'},
      {text:'Hohe Beschäftigung kann über steigende Löhne und Nachfrage die Preisniveaustabilität gefährden.', richtig:true}
    ],
    hinweise:['Zielharmonie: ein Ziel fördert das andere · Zielkonflikt: ein Ziel erschwert das andere.'],
    merke:'Magisches Sechseck: Viereck + gerechte Verteilung + lebenswerte Umwelt · Zielharmonie (Wachstum – Beschäftigung) · Zielkonflikt (Beschäftigung – Preisstabilität, Wachstum – Umwelt).'
  },
  ...blAbi('rechnung', {id:'KD5', modul:'KD', titel:'Abiturfall: Wo steht die Konjunktur?', tags:T.concat(['Abiturfall', 'Konjunktur', 'Stabilitätsgesetz', 'Zielbeziehungen']),
    text:'Das Statistische Amt eines Landes meldet für das abgelaufene Jahr (Vorjahreswerte in Klammern): BIP real {bj} Mrd. € ({by} Mrd. €), Verbraucherpreisindex {vj} ({vv}), Arbeitslose {al} Mio. bei {ep} Mio. Erwerbspersonen ({av} Mio. Arbeitslose). Die Auftragseingänge der Industrie sind seit drei Monaten gesunken, der Geschäftsklimaindex fällt, die Kapazitätsauslastung ist noch hoch.',
    zeilen:[
      {id:'by', t:'BIP Vorjahr', aus:true}, {id:'bj', t:'BIP', aus:true}, {id:'vv', t:'VPI Vorjahr', e:'ma', aus:true}, {id:'vj', t:'VPI', e:'ma', aus:true}, {id:'al', t:'Arbeitslose', e:'ma', aus:true}, {id:'av', t:'Arbeitslose Vorjahr', e:'ma', aus:true}, {id:'ep', t:'Erwerbspersonen', e:'ma', aus:true}
    ],
    werte:[{by:3800, bj:3895, vv:118.0, vj:123.9, al:2.4, av:2.5, ep:46.0}],
    sets:[[{by:4000, bj:4120, vv:120.0, vj:126.6, al:2.2, av:2.4, ep:45.0}]],
    felder:[
      {id:'w', t:'a) Berechnen Sie die Wachstumsrate des realen BIP (%).', f:'(bj - by) / by * 100', e:'%', kurz:'a) Wachstumsrate'},
      {id:'i', t:'b) Berechnen Sie die Inflationsrate (%).', f:'(vj - vv) / vv * 100', e:'%', kurz:'b) Inflationsrate'},
      {id:'q', t:'c) Berechnen Sie die Arbeitslosenquote (%).', f:'al / ep * 100', e:'%', kurz:'c) Arbeitslosenquote'}
    ],
    wahl:[
      {frei:{muster:'Wachstum und hohe Kapazitätsauslastung sowie steigende Preise sprechen für eine Hochkonjunktur (Boom). Die Frühindikatoren (sinkende Auftragseingänge, fallendes Geschäftsklima) zeigen aber bereits nach unten: Der obere Wendepunkt ist erreicht, ein Abschwung steht bevor. Die Arbeitslosigkeit sinkt noch, weil sie als Spätindikator verzögert reagiert.', punkte:['Einordnung: Hochkonjunktur bzw. Übergang zum Abschwung', 'Begründung mit Gegenwartsindikatoren (Wachstum, Auslastung, Preise)', 'Begründung mit Frühindikatoren (Aufträge, Geschäftsklima)', 'Arbeitslosigkeit als Spätindikator erklärt']}, id:'w1', t:'d) Ordnen Sie die aktuelle Lage in den Konjunkturzyklus ein.', opts:['Tiefstand: Die Arbeitslosigkeit ist sehr hoch, die Preise sinken.', 'Hochkonjunktur am oberen Wendepunkt: Auslastung und Preise sind hoch, die Frühindikatoren zeigen bereits einen Abschwung an.', 'Beginnender Aufschwung nach einer Rezession.'], r:'1'},
      {frei:{muster:'Das Wachstum ist angemessen, die Arbeitslosenquote sinkt (Beschäftigung erreicht bzw. auf gutem Weg). Die Inflationsrate liegt deutlich über dem Ziel der EZB von 2 % – Preisniveaustabilität ist verfehlt. Hier zeigt sich ein Zielkonflikt: Hohe Auslastung und Beschäftigung erhöhen Löhne und Nachfrage und treiben die Preise; eine Bremse der Inflation (z. B. höhere Zinsen) kann Wachstum und Beschäftigung dämpfen.', punkte:['Wachstum und Beschäftigung beurteilt', 'Preisniveaustabilität verfehlt (Vergleich mit 2 %)', 'Zielkonflikt Beschäftigung/Wachstum – Preisstabilität erläutert', 'Folgerung (z. B. Wirkung einer Zinserhöhung)']}, id:'w2', t:'e) Beurteilen Sie die Zielerreichung und erläutern Sie eine Zielbeziehung.', opts:['Alle Ziele sind erreicht – es besteht Zielharmonie.', 'Wachstum und Beschäftigung sind gut, die Preisniveaustabilität ist deutlich verfehlt – Zielkonflikt zwischen hoher Beschäftigung und stabilen Preisen.', 'Nur das außenwirtschaftliche Gleichgewicht ist verfehlt.'], r:'1'}
    ],
    hinweise:['Wachstumsrate und Inflationsrate: Veränderung gegenüber dem Vorjahr in %.', 'Frühindikatoren zeigen die Zukunft, Spätindikatoren reagieren verzögert.'],
    merke:'Konjunkturdiagnose: Gegenwarts- und Frühindikatoren zusammen lesen · Arbeitslosigkeit ist Spätindikator · Zielkonflikt Beschäftigung – Preisniveaustabilität · EZB-Ziel: 2 % mittelfristig.'}),

  /* ======================= GS · Geldschöpfung und Geldmengen (BPE 18.1) ======================= */
  blBau('zuordnung', {id:'GS1', modul:'GS', stufe:1, titel:'Geldmengen M1, M2 und M3', tags:T.concat(['Geldmenge', 'M1 M2 M3']),
    text:'Ordne jede Position der kleinsten Geldmenge zu, in der sie enthalten ist (nach der Abgrenzung des Eurosystems).',
    kategorien:['M1', 'M2 (zusätzlich zu M1)', 'M3 (zusätzlich zu M2)'], anzahl:7,
    faelle:[
      {t:'Bargeldumlauf (Banknoten und Münzen bei Nichtbanken)', k:0}, {t:'täglich fällige Einlagen (Girokonten)', k:0},
      {t:'Einlagen mit vereinbarter Laufzeit bis zu 2 Jahren (Termingeld)', k:1}, {t:'Einlagen mit vereinbarter Kündigungsfrist bis zu 3 Monaten (Spareinlagen)', k:1},
      {t:'Repogeschäfte', k:2}, {t:'Geldmarktfondsanteile', k:2}, {t:'Schuldverschreibungen mit Laufzeit bis zu 2 Jahren', k:2},
      {t:'Tagesgeldkonto, über das täglich verfügt werden kann', k:0}
    ],
    hinweise:['M1: sofort verfügbar · M2: kurzfristig verfügbar · M3: zusätzlich marktfähige kurzfristige Finanzinstrumente.'],
    merke:'M1 = Bargeldumlauf + täglich fällige Einlagen · M2 = M1 + Termingeld bis 2 Jahre + Spareinlagen bis 3 Monate Kündigungsfrist · M3 = M2 + Repogeschäfte, Geldmarktfondsanteile, Schuldverschreibungen bis 2 Jahre.'}),
  {
    id:'GS2', modul:'GS', typ:'berechnung', mehrfach:true, stufe:1, titel:'Zentralbankgeld und Geschäftsbankengeld',
    tags:T.concat(['Geldschöpfung', 'Zentralbankgeld', 'Buchgeld']),
    text:'Geld entsteht im Euroraum auf zwei Ebenen: bei der Zentralbank und bei den Geschäftsbanken.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Zentralbankgeld sind Bargeld und Guthaben der Banken bei der Zentralbank.', richtig:true},
      {text:'Die Zentralbank schafft Zentralbankgeld, z. B. wenn sie Banken Kredit gibt oder Wertpapiere ankauft.', richtig:true},
      {text:'Gibt eine Geschäftsbank einem Kunden einen Kredit, schreibt sie ihm den Betrag auf dem Girokonto gut – es entsteht neues Buchgeld.', richtig:true},
      {text:'Geschäftsbanken können unbegrenzt Buchgeld schaffen.', fehler:'Grenzen setzen u. a. Mindestreserve, Bargeldabflüsse, Eigenkapitalvorschriften und die Kreditnachfrage.'},
      {text:'Wird ein Kredit getilgt, wird Buchgeld vernichtet.', richtig:true}
    ],
    hinweise:['Kredit schafft Einlage – Tilgung vernichtet Geld.'],
    merke:'Zentralbankgeld: Bargeld + Bankguthaben bei der Zentralbank (Schöpfung durch Kredite an Banken, Wertpapierkäufe) · Geschäftsbankengeld (Buchgeld) entsteht durch Kreditvergabe · Grenzen: Mindestreserve, Bargeldbedarf, Eigenkapital, Kreditnachfrage.'
  },
  blBau('rechnung', {id:'GS3', modul:'GS', stufe:2, titel:'Geldschöpfung einer einzelnen Geschäftsbank', tags:T.concat(['Geldschöpfung', 'Mindestreserve', 'Überschussreserve']),
    text:'Ein Kunde zahlt {e} in bar auf sein Girokonto bei der Sparbank ein. Der Mindestreservesatz beträgt {mr}, für Barabhebungen hält die Bank zusätzlich {lr} der Einlage als Liquiditätsreserve.',
    kopf:'Größe',
    zeilen:[
      {id:'e', t:'Bareinzahlung', e:'€', aus:true}, {id:'mr', t:'Mindestreservesatz', e:'%', aus:true}, {id:'lr', t:'Liquiditätsreserve', e:'%', aus:true},
      {id:'m', t:'Mindestreserve', e:'€', f:'e * mr / 100'},
      {id:'l', t:'Liquiditätsreserve', e:'€', f:'e * lr / 100'},
      {id:'u', t:'Überschussreserve = möglicher Kredit', e:'€', f:'e - m - l'}
    ],
    werte:[{e:50000, mr:1, lr:9}],
    sets:[[{e:80000, mr:1, lr:4}], [{e:120000, mr:1, lr:14}]],
    wahl:[{id:'w', t:'Vergibt die Bank diesen Kredit an einen Unternehmer und schreibt ihn auf dessen Girokonto gut, …', opts:['… steigt die Geldmenge M1 um den Kreditbetrag – es ist neues Buchgeld entstanden.', '… bleibt die Geldmenge gleich, weil nur Geld umgebucht wird.', '… sinkt die Geldmenge, weil die Bank Reserven halten muss.'], r:'0'}],
    hinweise:['Mindestreserve und Liquiditätsreserve werden von der Einlage abgezogen.', 'Der Rest (Überschussreserve) kann als Kredit vergeben werden.'],
    merke:'Kreditschöpfungsspielraum einer Bank = Einlage − Mindestreserve − Liquiditätsreserve (Überschussreserve) · Kredit auf dem Girokonto = neues Buchgeld (M1 steigt) · Mindestreservesatz im Euroraum derzeit 1 %.'}),
  ...blAbi('rechnung', {id:'GS4', modul:'GS', titel:'Abiturfall: Wenn das Geld an Wert verliert', tags:T.concat(['Abiturfall', 'Inflation', 'Reallohn', 'EZB']),
    text:'Frau Kaya verdiente im Vorjahr {l0} brutto im Monat, in diesem Jahr {l1}. Der Verbraucherpreisindex stieg im gleichen Zeitraum von {v0} auf {v1}. Auf ihrem Sparkonto liegen {sp} zu einem Zinssatz von {z}.',
    zeilen:[
      {id:'l0', t:'Lohn Vorjahr', e:'€', aus:true}, {id:'l1', t:'Lohn', e:'€', aus:true}, {id:'v0', t:'VPI Vorjahr', e:'ma', aus:true}, {id:'v1', t:'VPI', e:'ma', aus:true}, {id:'sp', t:'Sparguthaben', e:'€', aus:true}, {id:'z', t:'Zinssatz', e:'%', aus:true}
    ],
    werte:[{l0:3000, l1:3120, v0:115.0, v1:121.9, sp:10000, z:1.5}],
    sets:[[{l0:2800, l1:2940, v0:118.0, v1:120.36, sp:8000, z:2.5}]],
    felder:[
      {id:'i', t:'a) Berechnen Sie die Inflationsrate (%).', f:'(v1 - v0) / v0 * 100', e:'%', kurz:'a) Inflationsrate'},
      {id:'n', t:'b) Berechnen Sie die nominale Lohnsteigerung (%).', f:'(l1 - l0) / l0 * 100', e:'%', kurz:'b) nominale Lohnsteigerung'},
      {id:'r', t:'c) Berechnen Sie die Veränderung des Reallohns (%).', f:'((l1 / l0) / (v1 / v0) - 1) * 100', e:'%', kurz:'c) Reallohnänderung'},
      {id:'k', t:'d) Berechnen Sie die Kaufkraft des verzinsten Sparguthabens nach einem Jahr in Preisen des Vorjahres (€).', f:'sp * (1 + z / 100) / (v1 / v0)', e:'€', kurz:'d) Kaufkraft des Sparguthabens'}
    ],
    wahl:[
      {frei:{muster:'Bei Inflation sinkt die Kaufkraft des Geldes. Liegt die Lohnsteigerung unter der Inflationsrate, sinkt der Reallohn; Sparer verlieren, wenn der Zins unter der Inflationsrate liegt (negativer Realzins). Schuldner profitieren, weil ihre Schulden real an Wert verlieren. Unsicherheit über die Preisentwicklung erschwert Planungen; Bezieher fester Einkommen (z. B. Rentner) sind besonders betroffen.', punkte:['Kaufkraftverlust und Reallohn mit Bezug auf c)', 'Sparer verlieren bei negativem Realzins (Bezug auf d)', 'Schuldner gewinnen, Gläubiger verlieren', 'weitere Wirkung (Planungsunsicherheit, feste Einkommen, Flucht in Sachwerte)']}, id:'w1', t:'e) Erläutern Sie die Wirkungen der Inflation auf verschiedene Gruppen.', opts:['Sparer und Gläubiger verlieren, Schuldner gewinnen; Arbeitnehmer verlieren, wenn die Löhne langsamer steigen als die Preise.', 'Inflation nützt allen, weil die Löhne steigen.', 'Inflation betrifft nur Unternehmen, nicht die privaten Haushalte.'], r:'0'},
      {frei:{muster:'Die EZB ist unabhängig: Weder Regierungen noch EU-Organe dürfen ihr Weisungen erteilen, und sie darf Staaten nicht direkt finanzieren. So kann sie das Ziel Preisniveaustabilität (2 % mittelfristig) auch dann verfolgen, wenn Zinserhöhungen politisch unbeliebt sind. Kritiker bemängeln die geringe demokratische Kontrolle und die Schwierigkeit, mit einem Zins für viele unterschiedliche Länder zu handeln. Insgesamt überwiegt der Vorteil glaubwürdiger, langfristig stabiler Preise.', punkte:['Merkmale der Unabhängigkeit (keine Weisungen, Verbot der Staatsfinanzierung)', 'Vorteil: Vorrang der Preisstabilität, Glaubwürdigkeit', 'Nachteil bzw. Kritik (demokratische Kontrolle, ein Zins für unterschiedliche Länder)', 'begründetes Urteil']}, id:'w2', t:'f) Beurteilen Sie die Unabhängigkeit der EZB.', opts:['Die EZB muss den Weisungen der Bundesregierung folgen.', 'Unabhängigkeit sichert, dass die EZB die Preisstabilität auch gegen politischen Druck verfolgen kann; Kritik: geringe demokratische Kontrolle.', 'Unabhängigkeit bedeutet, dass die EZB Staatsschulden direkt finanzieren darf.'], r:'1'}
    ],
    hinweise:['Inflationsrate = (VPI − VPI Vorjahr) ÷ VPI Vorjahr · 100.', 'Reallohnänderung = (1 + nominale Steigerung) ÷ (1 + Inflationsrate) − 1.', 'Kaufkraft = Betrag ÷ (VPI ÷ VPI Vorjahr).'],
    merke:'Reallohn = Nominallohn bereinigt um die Preisentwicklung · Realzins ≈ Nominalzins − Inflationsrate · Inflation: Schuldner gewinnen, Sparer und Gläubiger verlieren · EZB unabhängig, vorrangiges Ziel Preisniveaustabilität (2 %).'})
  ,
  blBau('rechnung', {id:'NF5', modul:'NF', stufe:2, titel:'Die Nachfragekurve verschiebt sich', tags:T.concat(['Nachfrage', 'Nachfragekurve']),
    text:'Die Marktnachfrage nach Kinokarten lautet x = {a0} − {b} · p (x in Karten je Woche, p in €). Nach einer Einkommenssteigerung lautet sie x = {a1} − {b} · p. Der Preis beträgt {p} je Karte.',
    kopf:'Größe',
    zeilen:[
      {id:'a0', t:'a vorher', aus:true}, {id:'a1', t:'a nachher', aus:true}, {id:'b', t:'b', aus:true}, {id:'p', t:'Preis', e:'€', aus:true},
      {id:'x0', t:'Menge vorher', f:'a0 - b * p'},
      {id:'x1', t:'Menge nachher', f:'a1 - b * p'},
      {id:'pp0', t:'Prohibitivpreis vorher', e:'€', f:'a0 / b'},
      {id:'pp1', t:'Prohibitivpreis nachher', e:'€', f:'a1 / b'}
    ],
    werte:[{a0:1200, a1:1500, b:60, p:10}],
    sets:[[{a0:900, a1:1080, b:45, p:8}], [{a0:2000, a1:2400, b:100, p:12}]],
    wahl:[{id:'w', t:'Wie ist die Änderung einzuordnen?', opts:['Verschiebung der Nachfragekurve nach rechts – Kinokarten sind hier ein superiores Gut.', 'Bewegung entlang der Nachfragekurve.', 'Verschiebung nach links – Kinokarten sind ein inferiores Gut.'], r:'0'}],
    hinweise:['Setze den Preis in beide Funktionen ein.', 'Prohibitivpreis: x = 0 → p = a ÷ b.'],
    merke:'Einkommen ↑ bei superioren Gütern → Nachfragekurve nach rechts: bei jedem Preis höhere Menge, höherer Prohibitivpreis.'}),
  {
    id:'GS5', modul:'GS', typ:'berechnung', mehrfach:true, stufe:2, titel:'Geldmenge und Preisniveau',
    tags:T.concat(['Geldmenge', 'Preisniveau']),
    text:'Die EZB beobachtet die Entwicklung der Geldmenge.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Wächst die Geldmenge dauerhaft deutlich schneller als die Gütermenge, steigt die Gefahr von Inflation.', richtig:true},
      {text:'Die Zentralbank kann die Geldmenge über den Leitzins und Geschäfte mit den Banken beeinflussen.', richtig:true},
      {text:'Geschäftsbanken tragen durch Kreditvergabe den größten Teil zur Geldmenge M1 bei.', richtig:true},
      {text:'Mehr Geld macht eine Volkswirtschaft automatisch reicher.', fehler:'Wohlstand entsteht durch Güter und Dienstleistungen; mehr Geld bei gleicher Gütermenge hebt vor allem die Preise.'},
      {text:'M3 umfasst mehr Positionen als M1.', richtig:true}
    ],
    hinweise:['Geld ist der Gegenwert zu Gütern.'],
    merke:'Geldmenge und Preisniveau hängen zusammen · Geldmenge > Gütermenge → Inflationsgefahr · Buchgeld der Banken ist der größte Teil von M1.'
  }

  ];
})(),
/* ---------- Volkswirtschaft · Wirtschaftsgymnasium Jahrgangsstufe 2 (VBWL, Bildungsplan 2021, BPE 18 II bis 23) ----------
   ET Strategie und Instrumente des Eurosystems (mit Abiturfall BPE 18 II)
   KY Nachfrageorientierte Konjunkturpolitik · AO Angebotsorientierung und Staatsfinanzen (mit Abiturfall BPE 19)
   AL Arbeitslosigkeit: Messung und Arten (mit Abiturfall BPE 20) · LO Lohn- und Arbeitsmarktpolitik
   UI Umweltpolitik: Prinzipien und Instrumente (mit Abiturfall BPE 21) · NH Nachhaltige Entwicklung
   VA Verteilungspolitik (BPE 22*) · AH Freihandel und Protektionismus (BPE 23*).
   Vorhandene Module (EI, EW, AG) ergänzen die J2. Neu am 06.11.2026. Stand der Geldpolitik: Strategieüberprüfung 2021/2025, operativer Rahmen seit 09/2024. */
...(() => {
  const T = ['Volkswirtschaft', 'Wirtschaftsgymnasium'];
  return [
  /* ======================= ET · Strategie und Instrumente des Eurosystems (BPE 18.3) ======================= */
  {
    id:'ET1', modul:'ET', typ:'berechnung', mehrfach:true, stufe:1, titel:'Die geldpolitische Strategie der EZB',
    tags:T.concat(['Geldpolitik', 'EZB', 'Strategie']),
    text:'Der EZB-Rat entscheidet alle sechs Wochen über die Leitzinsen. Grundlage ist seine geldpolitische Strategie.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Vorrangiges Ziel ist Preisstabilität: mittelfristig eine Inflationsrate von 2 %, wobei Abweichungen nach oben und unten gleich unerwünscht sind (symmetrisches Ziel).', richtig:true},
      {text:'Die frühere Zwei-Säulen-Strategie (wirtschaftliche und monetäre Analyse) wurde 2021 durch eine integrierte Beurteilung abgelöst: Wirtschaftliche Analyse sowie monetäre und finanzielle Analyse fließen gemeinsam in die Entscheidung ein.', richtig:true},
      {text:'In der monetären und finanziellen Analyse beobachtet die EZB u. a. Geldmenge und Kreditvergabe, weil Inflation langfristig mit dem Geldmengenwachstum zusammenhängt.', richtig:true},
      {text:'Die Inflation wird am Harmonisierten Verbraucherpreisindex (HVPI) des Euroraums gemessen.', richtig:true},
      {text:'Die EZB legt jedes Jahr ein verbindliches Wachstumsziel für die Geldmenge M3 fest.', fehler:'Ein Referenzwert für M3 diente früher nur zur Orientierung; ein verbindliches Geldmengenziel gibt es nicht.'},
      {text:'Die EZB richtet ihre Zinsen nach der Inflationsrate in Deutschland aus.', fehler:'Maßgeblich ist der Euroraum insgesamt – ein Zins für alle Mitgliedsländer („one size fits all“).'}
    ],
    hinweise:['Preisstabilität im Euroraum, mittelfristig 2 %.'],
    merke:'Ziel: Preisstabilität (2 %, symmetrisch, mittelfristig, HVPI) · Strategie seit 2021: integrierte Beurteilung aus wirtschaftlicher sowie monetärer und finanzieller Analyse (vorher Zwei-Säulen-Strategie) · Unterstützung der allgemeinen Wirtschaftspolitik nachrangig.'
  },
  blBau('rechnung', {id:'ET2', modul:'ET', stufe:2, titel:'Hauptrefinanzierungsgeschäft im Mengentender', tags:T.concat(['Geldpolitik', 'Offenmarktgeschäfte', 'Mengentender']),
    text:'Im Hauptrefinanzierungsgeschäft (Laufzeit 7 Tage) gibt die EZB einen Zinssatz von {hz@0} vor (Mengentender). Drei Banken bieten. Angenommen, die EZB will nur {zv@0} Mio. € zuteilen; dann wird gleichmäßig gekürzt (Repartierung).',
    kopf:'Größe', spalten:['Bank A', 'Bank B', 'Bank C'],
    zeilen:[
      {id:'g', t:'Gebot (Mio. €)', e:'ma'}, {id:'gs', t:'Gebote aller Banken (Mio. €)', e:'ma'}, {id:'zv', t:'Zuteilungsvolumen (Mio. €)', e:'ma', aus:true}, {id:'hz', t:'Zinssatz', e:'%', aus:true},
      {id:'qu', t:'Zuteilungsquote', e:'%', f:'zv / gs * 100'},
      {id:'za', t:'Zuteilung (Mio. €)', e:'ma', f:'g * qu / 100'},
      {id:'kt', t:'Zinsen für 7 Tage (€)', e:'€', f:'za * 1000000 * hz / 100 * 7 / 360'}
    ],
    werte:[{g:300, gs:1000, zv:800, hz:2.15}, {g:500, gs:1000, zv:800, hz:2.15}, {g:200, gs:1000, zv:800, hz:2.15}],
    sets:[[{g:450, gs:1000, zv:600, hz:2.4}, {g:250, gs:1000, zv:600, hz:2.4}, {g:300, gs:1000, zv:600, hz:2.4}]],
    wahl:[{id:'w', t:'Wie führt die EZB die Hauptrefinanzierungsgeschäfte derzeit durch?', opts:['als Mengentender mit Vollzuteilung: Jede Bank erhält zum festen Zinssatz die volle Menge (gegen ausreichende Sicherheiten)', 'als Zinstender, bei dem nur die höchsten Gebote zum Zug kommen', 'Die EZB vergibt keine Kredite an Banken.'], r:'0'}],
    hinweise:['Zuteilungsquote = Zuteilungsvolumen ÷ Summe aller Gebote · 100 · Zuteilung = Gebot · Quote.', 'Zinsen = Betrag · Zinssatz · Tage ÷ 360.'],
    merke:'Mengentender: EZB setzt den Zins, Banken bieten Mengen, bei Knappheit Repartierung · seit 2008 Vollzuteilung · Laufzeit 1 Woche, gegen Sicherheiten · Zinsen nach Eurozinsmethode (Tage ÷ 360).'}),
  blBau('rechnung', {id:'ET3', modul:'ET', stufe:3, titel:'Zinstender nach dem amerikanischen Verfahren', tags:T.concat(['Geldpolitik', 'Offenmarktgeschäfte', 'Zinstender']),
    text:'Die EZB teilt in einem Zinstender {zv} Mio. € zu. Gebote: zum Satz {r1} insgesamt {v1} Mio. €, zum Satz {r2} insgesamt {v2} Mio. €, zum Satz {r3} insgesamt {v3} Mio. €. Die Mittelbank bietet {b1} Mio. € zu {r1} und {b2} Mio. € zu {r2}. Zugeteilt wird von oben nach unten; beim niedrigsten noch zum Zug kommenden Satz wird gekürzt. Laufzeit 7 Tage, amerikanisches Verfahren.',
    kopf:'Größe',
    zeilen:[
      {id:'zv', t:'Zuteilungsvolumen (Mio. €)', e:'ma', aus:true}, {id:'r1', t:'Satz 1', e:'%', aus:true}, {id:'v1', t:'Gebote zu Satz 1 (Mio. €)', e:'ma', aus:true}, {id:'r2', t:'Satz 2', e:'%', aus:true}, {id:'v2', t:'Gebote zu Satz 2 (Mio. €)', e:'ma', aus:true},
      {id:'r3', t:'Satz 3', e:'%', aus:true}, {id:'v3', t:'Gebote zu Satz 3 (Mio. €)', e:'ma', aus:true}, {id:'b1', t:'Mittelbank zu Satz 1 (Mio. €)', e:'ma', aus:true}, {id:'b2', t:'Mittelbank zu Satz 2 (Mio. €)', e:'ma', aus:true},
      {id:'z2', t:'Zuteilung zum marginalen Satz 2 insgesamt (Mio. €)', e:'ma', f:'zv - v1'},
      {id:'qu', t:'Repartierungsquote beim Satz 2', e:'%', f:'z2 / v2 * 100'},
      {id:'zb', t:'Zuteilung an die Mittelbank (Mio. €)', e:'ma', f:'b1 + b2 * qu / 100'},
      {id:'zi', t:'Zinsen der Mittelbank für 7 Tage (€)', e:'€', f:'b1 * 1000000 * r1 / 100 * 7 / 360 + b2 * qu / 100 * 1000000 * r2 / 100 * 7 / 360'}
    ],
    werte:[{zv:650, r1:2.2, v1:400, r2:2.15, v2:500, r3:2.1, v3:300, b1:40, b2:60}],
    sets:[[{zv:750, r1:2.45, v1:300, r2:2.4, v2:600, r3:2.35, v3:200, b1:50, b2:80}]],
    wahl:[{id:'w', t:'Was unterscheidet das amerikanische vom holländischen Verfahren?', opts:['Amerikanisch: Jede Bank zahlt ihren eigenen Bietungssatz; holländisch: alle zahlen den marginalen (niedrigsten zugeteilten) Satz.', 'Amerikanisch: Alle zahlen den höchsten Satz.', 'Es gibt keinen Unterschied.'], r:'0'}],
    hinweise:['Gebote zum höchsten Satz werden voll bedient, der Rest geht an den nächsten Satz.', 'Zinsen = Betrag · Satz · 7 ÷ 360.'],
    merke:'Zinstender: Banken bieten Menge und Zins · Zuteilung von oben nach unten · marginaler Satz mit Repartierung · amerikanisch: eigener Satz, holländisch: Einheitssatz · der Zinstender wird derzeit für die Hauptrefinanzierung nicht genutzt.'}),
  blBau('rechnung', {id:'ET4', modul:'ET', stufe:2, titel:'Ständige Fazilitäten und Zinskorridor', tags:T.concat(['Geldpolitik', 'ständige Fazilitäten', 'Leitzinsen']),
    text:'Angenommen: Einlagesatz {ez}, Hauptrefinanzierungssatz {hz}, Spitzenrefinanzierungssatz {sr}. Die Kreditbank AG braucht über Nacht {b} zusätzlich (Spitzenrefinanzierungsfazilität); die Sparbank AG legt {u} Überschussliquidität über Nacht bei der Zentralbank an (Einlagefazilität).',
    kopf:'Größe',
    zeilen:[
      {id:'ez', t:'Einlagesatz', e:'%', aus:true}, {id:'hz', t:'Hauptrefinanzierungssatz', e:'%', aus:true}, {id:'sr', t:'Spitzenrefinanzierungssatz', e:'%', aus:true}, {id:'b', t:'Bedarf Kreditbank', e:'€', aus:true}, {id:'u', t:'Überschuss Sparbank', e:'€', aus:true},
      {id:'ks', t:'Zinsen der Kreditbank für eine Nacht', e:'€', f:'b * sr / 100 / 360'},
      {id:'ke', t:'Zinsertrag der Sparbank für eine Nacht', e:'€', f:'u * ez / 100 / 360'},
      {id:'kb', t:'Breite des Zinskorridors (Prozentpunkte)', f:'sr - ez'},
      {id:'ab', t:'Abstand Hauptrefinanzierungssatz – Einlagesatz (Prozentpunkte)', f:'hz - ez'}
    ],
    werte:[{ez:2, hz:2.15, sr:2.4, b:50000000, u:80000000}],
    sets:[[{ez:1.75, hz:1.9, sr:2.15, b:36000000, u:120000000}]],
    wahl:[{id:'w', t:'Warum steuert derzeit vor allem der Einlagesatz den Geldmarktzins?', opts:['Wegen der hohen Überschussliquidität legen Banken überschüssiges Zentralbankgeld zum Einlagesatz an; billiger verleiht keine Bank am Geldmarkt.', 'Weil die Banken nur noch Spitzenrefinanzierung nutzen.', 'Weil der Einlagesatz immer der höchste Leitzins ist.'], r:'0'}],
    hinweise:['Übernachtzinsen = Betrag · Satz ÷ 360.'],
    merke:'Ständige Fazilitäten auf Initiative der Banken, über Nacht · Spitzenrefinanzierung = Obergrenze, Einlagefazilität = Untergrenze des Zinskorridors · seit 09/2024 liegt der Hauptrefinanzierungssatz 0,15 Prozentpunkte über dem Einlagesatz; der Einlagesatz signalisiert den geldpolitischen Kurs.'}),
  {
    id:'ET5', modul:'ET', typ:'berechnung', mehrfach:true, stufe:2, titel:'Mindestreserve und Grenzen der Geldpolitik',
    tags:T.concat(['Geldpolitik', 'Mindestreserve', 'Grenzen']),
    text:'Neben Offenmarktgeschäften und ständigen Fazilitäten gehört die Mindestreserve zum Instrumentarium. Doch die Geldpolitik stößt auch an Grenzen.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Der Mindestreservesatz beträgt 1 % der reservepflichtigen Einlagen; seit September 2023 wird die Mindestreserve nicht mehr verzinst.', richtig:true},
      {text:'Eine Erhöhung des Mindestreservesatzes verringert den Kreditschöpfungsspielraum der Banken (restriktiv).', richtig:true},
      {text:'Die Mindestreserve muss nur im Durchschnitt einer Erfüllungsperiode gehalten werden; das glättet die Geldmarktzinsen.', richtig:true},
      {text:'Die EZB verändert den Mindestreservesatz häufig, um die Konjunktur fein zu steuern.', fehler:'Der Satz ist seit 2012 unverändert 1 %; gesteuert wird über die Leitzinsen.'},
      {text:'Geldpolitik wirkt erst mit Verzögerung von oft einem bis zwei Jahren auf die Inflation.', richtig:true},
      {text:'Bei einem Energiepreisschock kann die EZB die Ursache der Inflation direkt beseitigen.', fehler:'Sie kann das Angebot nicht erhöhen; sie kann nur verhindern, dass sich höhere Preise in Löhnen und Erwartungen festsetzen.'}
    ],
    hinweise:['Mindestreserve: Pflichtguthaben der Banken bei der Zentralbank.'],
    merke:'Mindestreserve: 1 %, unverzinst, Durchschnittserfüllung · Grenzen: Wirkungsverzögerungen, Kosteninflation, „one size fits all“, Zinsuntergrenze, Erwartungen und Vertrauen.'
  },
  {
    id:'EI5', modul:'EI', typ:'berechnung', mehrfach:true, stufe:2, titel:'Längerfristige Refinanzierung und Ankaufprogramme',
    tags:T.concat(['Geldpolitik', 'Offenmarktgeschäfte', 'Ankaufprogramme']),
    text:'Neben den wöchentlichen Hauptrefinanzierungsgeschäften setzt das Eurosystem weitere Offenmarktgeschäfte ein – vor allem seit der Finanz- und Staatsschuldenkrise.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Längerfristige Refinanzierungsgeschäfte haben in der Regel eine Laufzeit von drei Monaten.', richtig:true},
      {text:'Mit Ankaufprogrammen (z. B. APP, PEPP) kaufte das Eurosystem in großem Umfang Anleihen, um die langfristigen Zinsen zu senken.', richtig:true},
      {text:'Seit 2023 werden die Bestände schrittweise abgebaut, weil fällige Anleihen nicht mehr ersetzt werden (quantitative Straffung).', richtig:true},
      {text:'Durch die Ankäufe entstand viel Überschussliquidität; deshalb liegt der Tagesgeldsatz nahe am Einlagesatz.', richtig:true},
      {text:'Die EZB kauft Staatsanleihen direkt bei den Regierungen, wenn diese neue Anleihen ausgeben.', fehler:'Das verbietet Art. 123 AEUV (keine monetäre Staatsfinanzierung); gekauft wird nur am Sekundärmarkt.'},
      {text:'Anleihekäufe der Zentralbank wirken restriktiv.', fehler:'Sie bringen Zentralbankgeld in Umlauf und senken die Zinsen – sie wirken expansiv.'}
    ],
    hinweise:['Kaufen bringt Geld in Umlauf, Verkaufen bzw. Auslaufenlassen entzieht es.'],
    merke:'Offenmarktgeschäfte: Hauptrefinanzierung (1 Woche), längerfristige Refinanzierung (3 Monate), Ankaufprogramme (expansiv, nur Sekundärmarkt) · quantitative Straffung seit 2023 · Überschussliquidität → Einlagesatz steuert den Geldmarkt.'
  },
  ...blAbi('fall', {id:'ET6', modul:'ET', titel:'Abiturfall: Die EZB unter Druck', tags:T.concat(['Abiturfall', 'Geldpolitik', 'EZB', 'Leitzinsen', 'Grenzen']),
    text:'Im Euroraum steigt die Inflationsrate auf 4,5 %, vor allem wegen gestiegener Energie- und Lebensmittelpreise; die Kerninflation liegt bei 3,5 %. Die Wirtschaft wächst kaum. In Deutschland ist die Arbeitslosigkeit niedrig, in Spanien und Italien deutlich höher. Der EZB-Rat erhöht den Einlagesatz von 2,00 % auf 2,50 %; Haupt- und Spitzenrefinanzierungssatz steigen entsprechend.',
    teile:[
      {frei:{muster:'Vorrangiges Ziel der EZB ist Preisstabilität, d. h. mittelfristig eine Inflationsrate von 2 % (HVPI, symmetrisch). Seit der Strategieüberprüfung 2021 beruhen die Entscheidungen auf einer integrierten Beurteilung: Die wirtschaftliche Analyse betrachtet Nachfrage, Kosten, Löhne und Energiepreise, die monetäre und finanzielle Analyse Geldmenge, Kredite und Finanzstabilität. Mit 4,5 % liegt die Inflation deutlich über dem Ziel, deshalb handelt die EZB restriktiv.', punkte:['Ziel Preisstabilität, 2 % mittelfristig (HVPI)', 'integrierte Beurteilung mit wirtschaftlicher sowie monetärer und finanzieller Analyse (früher Zwei-Säulen-Strategie)', 'Bezug zum Fall: Inflation weit über dem Ziel']}, op:'Erläutern Sie', t:'die geldpolitische Strategie der EZB und warum sie im Fall handelt.', opts:['Ziel 2 % Inflation mittelfristig; integrierte Beurteilung aus wirtschaftlicher und monetärer/finanzieller Analyse – bei 4,5 % ist eine restriktive Politik angezeigt.', 'Ziel ist Vollbeschäftigung in Deutschland; deshalb müsste sie die Zinsen senken.', 'Die EZB richtet sich nur nach dem Wechselkurs.'], r:0},
      {frei:{muster:'Höhere Leitzinsen verteuern die Refinanzierung der Banken; sie geben das an Kunden weiter. Kredite für Investitionen und Konsum werden teurer, Sparen wird attraktiver. Die Nachfrage sinkt, Unternehmen können Preise schwerer erhöhen, die Inflation geht zurück. Zusätzlich wirkt die Zinserhöhung über die Erwartungen (Glaubwürdigkeit) und über eine tendenzielle Aufwertung des Euro, die Importe verbilligt.', punkte:['höhere Refinanzierungskosten der Banken', 'höhere Kreditzinsen → weniger Investitionen und Konsum, mehr Sparen', 'geringere Nachfrage → sinkender Preisdruck', 'weiterer Kanal (Erwartungen oder Wechselkurs)']}, op:'Beschreiben Sie', t:'die Wirkungskette der Zinserhöhung.', opts:['Refinanzierung teurer → Kreditzinsen steigen → weniger Investitionen und Konsum → Nachfrage sinkt → Preisdruck sinkt.', 'Kreditzinsen sinken → mehr Nachfrage → Preise sinken.', 'Die Zinserhöhung wirkt direkt auf die Energiepreise.'], r:0},
      {op:'Ermitteln Sie', t:'die Zuteilung einer Bank, die im Mengentender 200 Mio. € bietet, wenn die EZB bei Gesamtgeboten von 1.000 Mio. € nur 700 Mio. € zuteilt.', opts:['140 Mio. €', '200 Mio. €', '70 Mio. €'], r:0, weg:'Quote 700 ÷ 1.000 = 70 % · 200 Mio. € · 70 % = 140 Mio. €.'},
      {frei:{muster:'Die Inflation ist vor allem durch Energie- und Lebensmittelpreise verursacht (Kosteninflation); diese Ursache kann die EZB nicht beseitigen, sie kann nur Zweitrundeneffekte über Löhne und Erwartungen verhindern. Die Zinserhöhung bremst zugleich die ohnehin schwache Wirtschaft. Sie wirkt erst mit Verzögerung. Zudem gilt ein Zins für alle Länder („one size fits all“): Für Länder mit hoher Arbeitslosigkeit wie Spanien und Italien ist er eher zu hoch, für Deutschland passender.', punkte:['Kosteninflation: Ursache nicht direkt beeinflussbar, Zweitrundeneffekte', 'Zielkonflikt mit schwachem Wachstum', 'Wirkungsverzögerung', '„one size fits all“ mit Bezug auf die Länder im Fall']}, op:'Beurteilen Sie', t:'die Grenzen der Geldpolitik im Fall.', opts:['Bei Kosteninflation kann die EZB nur Zweitrundeneffekte verhindern; die Erhöhung bremst die schwache Wirtschaft, wirkt verzögert und passt nicht für alle Länder gleich.', 'Die Geldpolitik wirkt sofort und für alle Länder gleich gut.', 'Die EZB sollte stattdessen die Energiepreise festlegen.'], r:0}
    ],
    hinweise:['Strategie, Wirkungskette, Grenzen.', 'Zuteilung = Gebot · Zuteilungsvolumen ÷ Summe der Gebote.'],
    merke:'Preisstabilität 2 % · integrierte Beurteilung · Leitzinserhöhung: Kredite teurer, Nachfrage sinkt · Mengentender mit Repartierung · Grenzen: Kosteninflation, Verzögerung, Zielkonflikt, one size fits all.'}),

  /* ======================= KY · Nachfrageorientierte Konjunkturpolitik (BPE 19.1) ======================= */
  {
    id:'KY1', modul:'KY', typ:'berechnung', mehrfach:true, stufe:1, titel:'Die Nachfrageorientierung nach Keynes',
    tags:T.concat(['Konjunkturpolitik', 'Keynes', 'Fiskalpolitik']),
    text:'In einer Rezession fordern Politiker ein großes Konjunkturprogramm und berufen sich auf John Maynard Keynes.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Nach Keynes bestimmt die gesamtwirtschaftliche Nachfrage Produktion und Beschäftigung; Arbeitslosigkeit kann dauerhaft bestehen (Unterbeschäftigungsgleichgewicht).', richtig:true},
      {text:'Der Markt findet nicht schnell genug von selbst zur Vollbeschäftigung zurück; der Staat soll Nachfragelücken schließen.', richtig:true},
      {text:'Antizyklische Fiskalpolitik: im Abschwung Ausgaben erhöhen und Steuern senken, im Boom Ausgaben senken und Steuern erhöhen.', richtig:true},
      {text:'Deficit spending: In der Rezession nimmt der Staat Kredite auf; im Aufschwung sollen die Schulden aus Überschüssen getilgt werden.', richtig:true},
      {text:'Keynes forderte, der Staat solle in der Rezession sparen, um die Schulden zu senken.', fehler:'Das wäre prozyklisch und würde die Krise verschärfen; Keynes forderte zusätzliche Staatsnachfrage.'},
      {text:'Nach Keynes schafft sich jedes Angebot seine Nachfrage selbst.', fehler:'Das ist das Saysche Theorem der Klassik/Neoklassik, das Keynes ablehnte.'}
    ],
    hinweise:['Nachfrage als Engpass.'],
    merke:'Keynes: Nachfrage bestimmt Produktion und Beschäftigung · Märkte instabil · Staat steuert antizyklisch (Ausgaben, Steuern) · deficit spending in der Rezession, Tilgung im Boom.'
  },
  blBau('rechnung', {id:'KY2', modul:'KY', stufe:2, titel:'Die keynesianische Konsumfunktion', tags:T.concat(['Konjunkturpolitik', 'Keynes', 'Konsumfunktion']),
    text:'Die Konsumfunktion einer Volkswirtschaft lautet C = {ca@0} + {cq@0} · Y (Werte in Mrd. €). Berechne Konsum, Ersparnis und durchschnittliche Konsumquote für drei Einkommen.',
    kopf:'Größe', spalten:['Einkommen 1', 'Einkommen 2', 'Einkommen 3'],
    zeilen:[
      {id:'y', t:'Einkommen Y', e:'Mrd. €'}, {id:'ca', t:'autonomer Konsum', e:'Mrd. €', aus:true}, {id:'cq', t:'marginale Konsumquote', aus:true},
      {id:'c', t:'Konsum C', e:'Mrd. €', f:'ca + cq * y'},
      {id:'s', t:'Ersparnis S', e:'Mrd. €', f:'y - c'},
      {id:'dq', t:'durchschnittliche Konsumquote', f:'c / y'}
    ],
    werte:[{y:800, ca:200, cq:0.8}, {y:1200, ca:200, cq:0.8}, {y:2000, ca:200, cq:0.8}],
    sets:[[{y:500, ca:150, cq:0.75}, {y:1000, ca:150, cq:0.75}, {y:1600, ca:150, cq:0.75}]],
    wahl:[{id:'w', t:'Was bedeutet die marginale Konsumquote?', opts:['Sie gibt an, welcher Teil eines zusätzlichen Euros Einkommen konsumiert wird; der Rest wird gespart.', 'Sie gibt den Anteil des Konsums am gesamten Einkommen an.', 'Sie zeigt den Konsum ohne Einkommen.'], r:'0'}],
    hinweise:['C = autonomer Konsum + marginale Konsumquote · Y · S = Y − C.'],
    merke:'Konsumfunktion C = Ca + c · Y · autonomer Konsum (auch ohne Einkommen) · marginale Konsumquote c = ΔC ÷ ΔY · durchschnittliche Konsumquote sinkt mit steigendem Einkommen · Sparquote = 1 − Konsumquote.'}),
  blBau('rechnung', {id:'KY3', modul:'KY', stufe:2, titel:'Der Einkommensmultiplikator', tags:T.concat(['Konjunkturpolitik', 'Keynes', 'Multiplikator']),
    text:'Der Staat erhöht seine Investitionen um {di} Mrd. €. Die marginale Konsumquote beträgt {cq}. Berechne die Wirkung auf das Einkommen (vereinfachter Multiplikator ohne Steuern und Importe).',
    kopf:'Größe',
    zeilen:[
      {id:'di', t:'zusätzliche Staatsausgaben', e:'Mrd. €', aus:true}, {id:'cq', t:'marginale Konsumquote', aus:true},
      {id:'m', t:'Multiplikator', f:'1 / (1 - cq)'},
      {id:'dy', t:'Anstieg des Einkommens', e:'Mrd. €', f:'di * m'},
      {id:'dc', t:'davon zusätzlicher Konsum', e:'Mrd. €', f:'cq * dy'}
    ],
    werte:[{di:20, cq:0.75}],
    sets:[[{di:15, cq:0.8}], [{di:30, cq:0.6}]],
    wahl:[{id:'w', t:'Warum fällt der Multiplikator in der Praxis kleiner aus?', opts:['Ein Teil des zusätzlichen Einkommens fließt in Ersparnis, Steuern und Importe (Sickerverluste); außerdem wirkt er nur mit Verzögerung.', 'Weil die Konsumquote immer 1 beträgt.', 'Weil Staatsausgaben keine Nachfrage sind.'], r:'0'}],
    hinweise:['Multiplikator = 1 ÷ (1 − marginale Konsumquote) = 1 ÷ marginale Sparquote.'],
    merke:'Multiplikatorprozess: zusätzliche Ausgaben werden zu Einkommen, davon wird ein Teil wieder ausgegeben · ΔY = ΔI · 1 ÷ (1 − c) · je höher die Konsumquote, desto größer die Wirkung · Sickerverluste verkleinern ihn.'}),
  blBau('zuordnung', {id:'KY4', modul:'KY', stufe:2, titel:'Antizyklische Fiskalpolitik: expansiv oder restriktiv?', tags:T.concat(['Konjunkturpolitik', 'Fiskalpolitik', 'antizyklisch']),
    text:'Gehört die Maßnahme zu einer expansiven Fiskalpolitik im Abschwung oder zu einer restriktiven im Boom?',
    kategorien:['expansiv (Abschwung, Rezession)', 'restriktiv (Boom)'], anzahl:8,
    faelle:[
      {t:'Investitionsprogramm für Schulen, Schienen und Brücken', k:0}, {t:'Senkung der Einkommensteuer', k:0}, {t:'Sonderabschreibungen für Investitionen der Unternehmen', k:0},
      {t:'Kaufprämie für Elektroautos', k:0}, {t:'Bezugsdauer des Kurzarbeitergelds verlängern', k:0},
      {t:'Konjunkturausgleichsrücklage bei der Bundesbank bilden', k:1}, {t:'öffentliche Aufträge zurückstellen', k:1}, {t:'Staatsschulden aus Überschüssen tilgen', k:1},
      {t:'Abschreibungsmöglichkeiten einschränken', k:1}, {t:'Steuersätze befristet erhöhen', k:1}
    ],
    hinweise:['Abschwung: Nachfrage stärken · Boom: Nachfrage dämpfen.'],
    merke:'Antizyklische Fiskalpolitik (Stabilitätsgesetz): Abschwung → Ausgaben ↑, Steuern ↓, Kredite (deficit spending) · Boom → Ausgaben ↓, Steuern ↑, Rücklagen, Tilgung.'}),
  {
    id:'KY5', modul:'KY', typ:'berechnung', mehrfach:true, stufe:3, titel:'Kritik an der Nachfragepolitik',
    tags:T.concat(['Konjunkturpolitik', 'Keynes', 'Kritik']),
    text:'Kritiker halten nachfrageorientierte Konjunkturprogramme oft für wenig wirksam.',
    frage:'Welche Kritikpunkte treffen zu?',
    optionen:[
      {text:'Wirkungsverzögerungen (Erkennen, Entscheiden, Wirken) können dazu führen, dass Programme erst im nächsten Aufschwung wirken (prozyklisch).', richtig:true},
      {text:'Im Aufschwung wurden Schulden oft nicht getilgt – die Staatsverschuldung stieg dauerhaft.', richtig:true},
      {text:'Steigt durch hohe Staatsverschuldung der Zins, können private Investitionen verdrängt werden (Crowding-out).', richtig:true},
      {text:'Bei angebotsseitigen Problemen, z. B. Fachkräftemangel oder Energiepreisschock, hilft zusätzliche Nachfrage kaum und kann die Inflation verstärken.', richtig:true},
      {text:'In einer offenen Volkswirtschaft wirkt ein Konjunkturprogramm stärker, weil die gesamte zusätzliche Nachfrage im Inland bleibt.', fehler:'Ein Teil der Nachfrage fließt in Importe ab; das schwächt die Wirkung im Inland.'},
      {text:'Keynes’ Konzept verlangt dauerhafte Haushaltsdefizite.', fehler:'Defizite sind nur in der Rezession vorgesehen; im Boom sollen Überschüsse sie ausgleichen.'}
    ],
    hinweise:['Zeit, Schulden, Zinsen, Ursachen der Krise.'],
    merke:'Kritik: time lags, Asymmetrie (Schulden werden nicht getilgt), Crowding-out, Importe, falsche Diagnose bei Angebotsproblemen, politische Durchsetzbarkeit.'
  },

  /* ======================= AO · Angebotsorientierung und Staatsfinanzen (BPE 19.1, 19.2) ======================= */
  blBau('zuordnung', {id:'AO1', modul:'AO', stufe:1, titel:'Nachfrage- oder angebotsorientiert?', tags:T.concat(['Wirtschaftspolitik', 'Angebotsorientierung', 'Keynes']),
    text:'Zu welcher wirtschaftspolitischen Konzeption passt die Aussage?',
    kategorien:['nachfrageorientiert (Keynes)', 'angebotsorientiert (Neoklassik, Monetarismus)'], anzahl:8,
    faelle:[
      {t:'Jedes Angebot schafft sich seine Nachfrage (Saysches Theorem).', k:1},
      {t:'Märkte sind im Grunde stabil; der Staat soll sich weitgehend heraushalten.', k:1},
      {t:'Unternehmenssteuern senken und Bürokratie abbauen, um Investitionen zu fördern.', k:1},
      {t:'Die Geldmenge soll stetig mit dem Produktionspotenzial wachsen (potenzialorientierte Geldpolitik).', k:1},
      {t:'Staatsausgaben wachsen gleichmäßig mit dem Produktionspotenzial, statt kurzfristig gegenzusteuern.', k:1},
      {t:'Arbeitsmarkt flexibilisieren, z. B. Befristungen erleichtern.', k:1},
      {t:'In der Krise ein kreditfinanziertes Ausgabenprogramm auflegen.', k:0},
      {t:'Lohnerhöhungen stärken die Kaufkraft und damit die Nachfrage.', k:0},
      {t:'Konjunkturkrisen entstehen durch zu geringe Gesamtnachfrage.', k:0},
      {t:'Der Staat gleicht Schwankungen der privaten Nachfrage antizyklisch aus.', k:0}
    ],
    hinweise:['Wo liegt der Engpass: bei der Nachfrage oder bei den Produktionsbedingungen?'],
    merke:'Nachfrageorientiert: Staat stabilisiert die Nachfrage antizyklisch · angebotsorientiert: bessere Bedingungen für Unternehmen (Steuern, Regulierung, Arbeitsmarkt), verstetigte potenzialorientierte Geld- und Finanzpolitik, Vertrauen in Marktkräfte (Saysches Theorem).'}),
  blBau('rechnung', {id:'AO2', modul:'AO', stufe:2, titel:'Staatsquote, Abgabenquote, Sozialleistungsquote und Schuldenquote', tags:T.concat(['Staatsfinanzen', 'Staatsquote', 'Staatsverschuldung']),
    text:'Für ein Land liegen folgende Daten vor (Mrd. €): BIP {bip}, Staatsausgaben {sa}, Steuern {st}, Sozialbeiträge {sv}, Sozialleistungen {sl}, Schuldenstand des Staates {sd}, Haushaltsdefizit {dz}.',
    kopf:'Größe',
    zeilen:[
      {id:'bip', t:'BIP', e:'Mrd. €', aus:true}, {id:'sa', t:'Staatsausgaben', e:'Mrd. €', aus:true}, {id:'st', t:'Steuern', e:'Mrd. €', aus:true}, {id:'sv', t:'Sozialbeiträge', e:'Mrd. €', aus:true},
      {id:'sl', t:'Sozialleistungen', e:'Mrd. €', aus:true}, {id:'sd', t:'Schuldenstand', e:'Mrd. €', aus:true}, {id:'dz', t:'Defizit', e:'Mrd. €', aus:true},
      {id:'sq', t:'Staatsquote', e:'%', f:'sa / bip * 100'},
      {id:'aq', t:'Abgabenquote', e:'%', f:'(st + sv) / bip * 100'},
      {id:'lq', t:'Sozialleistungsquote', e:'%', f:'sl / bip * 100'},
      {id:'uq', t:'Schuldenquote', e:'%', f:'sd / bip * 100'},
      {id:'fq', t:'Defizitquote', e:'%', f:'dz / bip * 100'}
    ],
    werte:[{bip:4300, sa:2100, st:1000, sv:760, sl:1350, sd:2700, dz:120}],
    sets:[[{bip:4500, sa:2150, st:1080, sv:790, sl:1400, sd:2650, dz:150}]],
    wahl:[{id:'w', t:'Welche Grenzen des europäischen Stabilitäts- und Wachstumspakts (Defizit 3 %, Schulden 60 % des BIP) werden eingehalten?', opts:['Defizitquote eingehalten, Schuldenquote überschritten', 'beide eingehalten', 'beide überschritten', 'Defizitquote überschritten, Schuldenquote eingehalten'], r:'dz / bip * 100 <= 3 ? (sd / bip * 100 <= 60 ? 1 : 0) : (sd / bip * 100 <= 60 ? 3 : 2)'}],
    hinweise:['Alle Quoten: Größe ÷ BIP · 100.', 'Abgabenquote = (Steuern + Sozialbeiträge) ÷ BIP · 100.'],
    merke:'Staatsquote: Staatsausgaben ÷ BIP · Abgabenquote: (Steuern + Sozialbeiträge) ÷ BIP · Sozialleistungsquote: Sozialleistungen ÷ BIP · Schuldenquote: Schuldenstand ÷ BIP · EU-Grenzen: 3 % Defizit, 60 % Schulden.'}),
  blBau('rechnung', {id:'AO3', modul:'AO', stufe:2, titel:'Der Misery-Index', tags:T.concat(['Wirtschaftspolitik', 'Misery-Index', 'Zielbeziehungen']),
    text:'Der Misery-Index (Elendsindex) addiert Inflationsrate und Arbeitslosenquote. Berechne ihn für drei Jahre.',
    kopf:'Größe', spalten:['Jahr 1', 'Jahr 2', 'Jahr 3'],
    zeilen:[
      {id:'inf', t:'Inflationsrate', e:'%'}, {id:'alq', t:'Arbeitslosenquote', e:'%'},
      {id:'mi', t:'Misery-Index (Prozentpunkte)', f:'inf + alq'}
    ],
    werte:[{inf:2, alq:5}, {inf:7, alq:5.3}, {inf:2.5, alq:6.2}],
    sets:[[{inf:1.5, alq:5.6}, {inf:6.4, alq:5.1}, {inf:2.8, alq:6}]],
    wahl:[
      {id:'w1', t:'In welchem Jahr war die Lage nach dem Misery-Index am ungünstigsten?', opts:['Jahr 1', 'Jahr 2', 'Jahr 3'], r:'(inf@0 + alq@0) >= (inf@1 + alq@1) && (inf@0 + alq@0) >= (inf@2 + alq@2) ? 0 : ((inf@1 + alq@1) >= (inf@2 + alq@2) ? 1 : 2)'},
      {id:'w2', t:'Welche Zielbeziehung zeigt sich von Jahr 2 zu Jahr 3?', opts:['Zielkonflikt: Die Inflation sinkt, die Arbeitslosigkeit steigt.', 'Zielharmonie: Beide Größen verbessern sich.', 'Zielneutralität: Keine Größe verändert sich.'], r:'0'}
    ],
    hinweise:['Misery-Index = Inflationsrate + Arbeitslosenquote.'],
    merke:'Misery-Index = Inflationsrate + Arbeitslosenquote · je höher, desto schlechter · zeigt den Zielkonflikt Preisstabilität – Beschäftigung (Phillips-Kurve) · Kritik: gleiche Gewichtung, andere Ziele fehlen.'}),
  {
    id:'AO4', modul:'AO', typ:'berechnung', mehrfach:true, stufe:2, titel:'Staatsverschuldung beurteilen',
    tags:T.concat(['Staatsfinanzen', 'Staatsverschuldung', 'Schuldenbremse']),
    text:'Im Bundestag wird über neue Kredite für Investitionen gestritten.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Die Schuldenbremse des Grundgesetzes erlaubt dem Bund ein strukturelles Defizit von höchstens 0,35 % des BIP; im Abschwung sind zusätzliche Kredite möglich (Konjunkturkomponente).', richtig:true},
      {text:'Seit der Grundgesetzänderung 2025 sind Verteidigungsausgaben oberhalb von 1 % des BIP von der Schuldenbremse ausgenommen; zudem gibt es ein kreditfinanziertes Sondervermögen für Infrastruktur und Klimaneutralität.', richtig:true},
      {text:'Kreditfinanzierte Investitionen können künftigen Generationen nutzen; Schulden für laufenden Konsum belasten sie dagegen.', richtig:true},
      {text:'Steigende Zinslasten engen den Spielraum künftiger Haushalte ein.', richtig:true},
      {text:'Staatsschulden sind unproblematisch, weil ein Staat nie in Zahlungsschwierigkeiten geraten kann.', fehler:'Hohe Schulden können das Vertrauen der Anleger schwächen, die Zinsen erhöhen und im Extremfall zur Schuldenkrise führen.'},
      {text:'Der Stabilitäts- und Wachstumspakt begrenzt das jährliche Defizit auf 6 % des BIP.', fehler:'Die Grenze liegt bei 3 % (Schuldenstand 60 %).'}
    ],
    hinweise:['Wofür werden Schulden gemacht – Investition oder Konsum?'],
    merke:'Schuldenbremse (Art. 109, 115 GG): strukturell max. 0,35 % des BIP für den Bund, Konjunkturkomponente, Ausnahmen (Notlage, seit 2025 Verteidigung über 1 % des BIP, Sondervermögen Infrastruktur) · EU: 3 % / 60 % · Generationengerechtigkeit, Zinslast, Investitionsbedarf.'
  },
  ...blAbi('rechnung', {id:'AO5', modul:'AO', titel:'Abiturfall: Ein Konjunkturprogramm in der Rezession', tags:T.concat(['Abiturfall', 'Konjunkturpolitik', 'Multiplikator', 'Staatsverschuldung', 'Misery-Index']),
    text:'Ein Land steckt in der Rezession: BIP {bip} Mrd. €, Staatsausgaben {sa} Mrd. €, Schuldenstand {sd} Mrd. €, Inflationsrate {inf}, Arbeitslosenquote {alq}. Die Regierung plant ein vollständig kreditfinanziertes Investitionsprogramm von {di} Mrd. €. Die marginale Konsumquote beträgt {cq}. Die Opposition fordert stattdessen Steuersenkungen für Unternehmen und weniger Bürokratie.',
    zeilen:[
      {id:'bip', t:'BIP', e:'Mrd. €', aus:true}, {id:'sa', t:'Staatsausgaben', e:'Mrd. €', aus:true}, {id:'sd', t:'Schuldenstand', e:'Mrd. €', aus:true}, {id:'inf', t:'Inflationsrate', e:'%', aus:true},
      {id:'alq', t:'Arbeitslosenquote', e:'%', aus:true}, {id:'di', t:'Programm', e:'Mrd. €', aus:true}, {id:'cq', t:'marginale Konsumquote', aus:true}
    ],
    werte:[{bip:4000, sa:1950, sd:2500, inf:2, alq:6.5, di:50, cq:0.6}],
    sets:[[{bip:4200, sa:2050, sd:2700, inf:1.5, alq:6.8, di:60, cq:0.5}]],
    felder:[
      {id:'sq', t:'a) Berechnen Sie die Staatsquote vor dem Programm (%).', f:'sa / bip * 100', e:'%', kurz:'a) Staatsquote'},
      {id:'mi', t:'b) Berechnen Sie den Misery-Index (Prozentpunkte).', f:'inf + alq', kurz:'b) Misery-Index'},
      {id:'m', t:'c) Berechnen Sie den Multiplikator.', f:'1 / (1 - cq)', kurz:'c) Multiplikator'},
      {id:'dy', t:'d) Berechnen Sie den möglichen Anstieg des BIP (Mrd. €).', f:'di / (1 - cq)', kurz:'d) Anstieg des BIP'},
      {id:'uq', t:'e) Berechnen Sie die Schuldenquote nach dem Programm, wenn das BIP um den Betrag aus d) steigt (%).', f:'(sd + di) / (bip + di / (1 - cq)) * 100', e:'%', kurz:'e) Schuldenquote danach'}
    ],
    wahl:[
      {frei:{muster:'Aus keynesianischer Sicht fehlt in der Rezession Nachfrage. Das Investitionsprogramm erhöht sie direkt und über den Multiplikator (vgl. c, d); Einkommen und Beschäftigung steigen. Weil das BIP wächst, steigt die Schuldenquote kaum oder sinkt sogar (vgl. e). Aus angebotsorientierter Sicht ist das Programm skeptisch zu sehen: Es erhöht Staatsquote und Schulden, kann private Investitionen verdrängen und wirkt nur vorübergehend. Angebotsorientierte Ökonomen setzen auf bessere Bedingungen für Investitionen (Steuersenkungen, Bürokratieabbau), die das Wachstum dauerhaft stärken, aber erst langfristig wirken.', punkte:['keynesianische Begründung mit Multiplikator', 'Wirkung auf die Schuldenquote mit Bezug auf e)', 'angebotsorientierte Kritik (Staatsquote, Schulden, Verdrängung)', 'Alternative der Opposition eingeordnet']}, id:'w1', t:'f) Beurteilen Sie das Programm aus nachfrage- und aus angebotsorientierter Sicht.', opts:['Nachfrageorientiert sinnvoll, weil es über den Multiplikator Einkommen und Beschäftigung erhöht; angebotsorientiert kritisch wegen Schulden, Staatsquote und Verdrängung privater Investitionen.', 'Beide Konzeptionen lehnen staatliche Investitionen in jeder Lage ab.', 'Beide Konzeptionen fordern dasselbe Programm.'], r:'0'},
      {frei:{muster:'Zielkonform: Das Programm zielt auf Wachstum und Beschäftigung; bei niedriger Inflation entsteht kaum ein Zielkonflikt mit der Preisstabilität, wohl aber mit tragfähigen Staatsfinanzen. Systemkonform: Öffentliche Investitionen greifen nicht in die Preisbildung ein und sind mit der Sozialen Marktwirtschaft vereinbar. Politisch durchsetzbar ist es, wenn die Schuldenbremse Spielraum lässt (Konjunkturkomponente, Investitionen über Sondervermögen) und eine Mehrheit dafür gewonnen wird; Wähler schätzen sichtbare Investitionen, Kritik kommt wegen der Schulden.', punkte:['Zielkonformität mit Bezug auf Ziele und Zielkonflikt', 'Systemkonformität', 'politische Durchsetzbarkeit mit Schuldenbremse/Mehrheiten']}, id:'w2', t:'g) Beurteilen Sie das Programm hinsichtlich Ziel- und Systemkonformität sowie politischer Durchsetzbarkeit.', opts:['zielkonform (Wachstum, Beschäftigung), systemkonform (kein Eingriff in die Preisbildung), Durchsetzbarkeit hängt von Schuldenbremse und Mehrheiten ab', 'systemwidrig, weil der Staat nie investieren darf', 'nicht zielkonform, weil es die Inflation auf null senkt'], r:'0'}
    ],
    hinweise:['Multiplikator = 1 ÷ (1 − c).', 'Schuldenquote = Schuldenstand ÷ BIP · 100.'],
    merke:'Nachfrageorientierung: Programm + Multiplikator · Angebotsorientierung: Steuern, Regulierung, Verstetigung · Beurteilung nach Ziel- und Systemkonformität sowie Durchsetzbarkeit · Staatsquote, Schuldenquote, Misery-Index.'}),

  /* ======================= AL · Arbeitslosigkeit: Messung und Arten (BPE 20.1) ======================= */
  blBau('rechnung', {id:'AL1', modul:'AL', stufe:1, titel:'Arbeitslosenquote und Erwerbslosenquote', tags:T.concat(['Arbeitsmarkt', 'Arbeitslosenquote', 'Erwerbslose']),
    text:'Angenommen: {al} Mio. registrierte Arbeitslose, {et} Mio. zivile Erwerbstätige, {el} Mio. Erwerbslose nach der Definition der Internationalen Arbeitsorganisation (ILO).',
    kopf:'Größe',
    zeilen:[
      {id:'al', t:'registrierte Arbeitslose', e:'Mio.', aus:true}, {id:'et', t:'zivile Erwerbstätige', e:'Mio.', aus:true}, {id:'el', t:'Erwerbslose (ILO)', e:'Mio.', aus:true},
      {id:'ep', t:'zivile Erwerbspersonen (Erwerbstätige + Arbeitslose)', e:'Mio.', f:'et + al'},
      {id:'aq', t:'Arbeitslosenquote', e:'%', f:'al / ep * 100'},
      {id:'eq', t:'Erwerbslosenquote', e:'%', f:'el / (et + el) * 100'}
    ],
    werte:[{al:3, et:45.6, el:1.7}],
    sets:[[{al:2.8, et:45.9, el:1.6}], [{al:3.2, et:45.4, el:1.9}]],
    wahl:[{id:'w', t:'Warum ist die Zahl der Erwerbslosen kleiner als die der Arbeitslosen?', opts:['Erwerbslos ist nur, wer gar nicht arbeitet (nicht einmal eine Stunde pro Woche); als arbeitslos zählt auch, wer weniger als 15 Stunden arbeitet und arbeitslos gemeldet ist.', 'Weil Erwerbslose immer bei der Arbeitsagentur gemeldet sein müssen.', 'Weil Arbeitslose auch Rentner sind.'], r:'0'}],
    hinweise:['Arbeitslosenquote = Arbeitslose ÷ zivile Erwerbspersonen · 100.'],
    merke:'Arbeitslose (Bundesagentur für Arbeit): gemeldet, ohne oder unter 15 Std. Beschäftigung, verfügbar · Erwerbslose (ILO): ohne jede Arbeit, aktiv suchend, verfügbar, Meldung nicht nötig · Vollbeschäftigung vs. Unterbeschäftigung.'}),
  blBau('zuordnung', {id:'AL2', modul:'AL', stufe:1, titel:'Arten der Arbeitslosigkeit', tags:T.concat(['Arbeitsmarkt', 'Arten der Arbeitslosigkeit']),
    text:'Welche Art der Arbeitslosigkeit liegt vor?',
    kategorien:['saisonale Arbeitslosigkeit', 'friktionelle Arbeitslosigkeit', 'konjunkturelle Arbeitslosigkeit', 'strukturelle Arbeitslosigkeit'], anzahl:8,
    faelle:[
      {t:'Bauarbeiter finden im Januar wegen Frost keine Arbeit.', k:0}, {t:'Eine Kellnerin im Skiort ist im Sommer ohne Job.', k:0},
      {t:'Ein Ingenieur hat gekündigt und beginnt die neue Stelle erst in sechs Wochen.', k:1}, {t:'Eine Absolventin sucht nach dem Studium einige Wochen nach der passenden Stelle.', k:1},
      {t:'Wegen der allgemeinen Wirtschaftskrise entlassen viele Branchen gleichzeitig Personal.', k:2}, {t:'Die Nachfrage nach Maschinen bricht im Abschwung ein, Zulieferer bauen Stellen ab.', k:2},
      {t:'Kohlekraftwerke werden stillgelegt, die Beschäftigten finden keine Stelle mit passender Qualifikation.', k:3},
      {t:'Viele offene Stellen für Pflegekräfte, aber arbeitslose Industriearbeiter passen nicht auf diese Stellen.', k:3},
      {t:'Einfache Bürotätigkeiten werden durch Software ersetzt.', k:3}
    ],
    hinweise:['Jahreszeit – Wechsel – Konjunkturlage – Wandel der Wirtschaftsstruktur.'],
    merke:'Saisonal: Jahreszeit · friktionell: kurzfristig beim Stellenwechsel (Sucharbeitslosigkeit) · konjunkturell: Nachfragemangel im Abschwung · strukturell: Wandel von Branchen, Regionen, Technik, Qualifikation (Mismatch) – oft dauerhaft.'}),
  blBau('zuordnung', {id:'AL3', modul:'AL', stufe:2, titel:'Offene oder verdeckte Arbeitslosigkeit?', tags:T.concat(['Arbeitsmarkt', 'verdeckte Arbeitslosigkeit', 'Statistik']),
    text:'Zählt die Person in der Statistik der Bundesagentur für Arbeit als arbeitslos (offene Arbeitslosigkeit) oder gehört sie zur verdeckten Arbeitslosigkeit?',
    kategorien:['als arbeitslos gezählt (offen)', 'nicht als arbeitslos gezählt (verdeckt)'], anzahl:7,
    faelle:[
      {t:'gemeldete Arbeitsuchende ohne Beschäftigung, sofort verfügbar', k:0},
      {t:'gemeldeter Arbeitsloser mit einem Minijob von 8 Stunden pro Woche', k:0},
      {t:'Teilnehmerin einer Weiterbildungsmaßnahme der Arbeitsagentur', k:1},
      {t:'Beschäftigte in Kurzarbeit', k:1},
      {t:'Menschen, die resigniert haben und sich nicht mehr melden (stille Reserve)', k:1},
      {t:'arbeitsunfähig erkrankte Arbeitsuchende', k:1},
      {t:'ein Arbeitsloser, der nach einer Kündigung sofort arbeitslos gemeldet ist', k:0},
      {t:'Personen in einer geförderten Arbeitsgelegenheit („Ein-Euro-Job“)', k:1}
    ],
    hinweise:['Gezählt wird, wer gemeldet, ohne Beschäftigung (unter 15 Std.) und verfügbar ist.'],
    merke:'Offene Arbeitslosigkeit: in der Statistik erfasst · verdeckte: Maßnahmeteilnehmer, Kurzarbeit, Krankheit, stille Reserve · Unterbeschäftigung = Arbeitslose + Personen in entlastenden Maßnahmen.'}),
  {
    id:'AL4', modul:'AL', typ:'berechnung', mehrfach:true, stufe:2, titel:'Die Beveridge-Kurve',
    tags:T.concat(['Arbeitsmarkt', 'Beveridge-Kurve', 'Mismatch']),
    text:'Die Beveridge-Kurve stellt die Arbeitslosenquote (x-Achse) und die Quote der offenen Stellen (y-Achse) gegenüber.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Die Kurve verläuft fallend: Gibt es viele offene Stellen, ist die Arbeitslosigkeit meist niedrig.', richtig:true},
      {text:'Eine Bewegung entlang der Kurve nach rechts unten zeigt einen Abschwung: weniger offene Stellen, mehr Arbeitslose.', richtig:true},
      {text:'Verschiebt sich die Kurve nach außen, gibt es bei gleich vielen offenen Stellen mehr Arbeitslose – ein Hinweis auf Mismatch (strukturelle Arbeitslosigkeit).', richtig:true},
      {text:'Viele offene Stellen bei zugleich hoher Arbeitslosigkeit zeigen vor allem fehlende Gesamtnachfrage.', fehler:'Das deutet auf Mismatch hin: Qualifikation, Region oder Branche von Arbeitslosen und Stellen passen nicht zusammen.'},
      {text:'Eine Verschiebung der Kurve nach innen zeigt einen schlechter funktionierenden Arbeitsmarkt.', fehler:'Nach innen bedeutet: Stellen und Arbeitslose finden besser zueinander.'},
      {text:'Gegen Mismatch helfen vor allem Qualifizierung, Mobilitätshilfen und bessere Vermittlung.', richtig:true}
    ],
    hinweise:['Bewegung auf der Kurve = Konjunktur · Verschiebung = Struktur.'],
    merke:'Beveridge-Kurve: Arbeitslosenquote vs. Vakanzquote, fallend · Bewegung entlang der Kurve: konjunkturell · Verschiebung nach außen: schlechteres Matching (Mismatch, strukturell) · Gegenmittel: Qualifizierung, Mobilität, Vermittlung.'
  },
  {
    id:'AL5', modul:'AL', typ:'berechnung', mehrfach:true, stufe:2, titel:'Folgen der Arbeitslosigkeit',
    tags:T.concat(['Arbeitsmarkt', 'Folgen', 'Sozialversicherung']),
    text:'Arbeitslosigkeit ist ein wirtschaftliches und soziales Problem.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Für den Staat sinken Steuer- und Beitragseinnahmen, die Ausgaben für Arbeitslosengeld und Grundsicherung steigen.', richtig:true},
      {text:'Gesamtwirtschaftlich bleibt Produktionspotenzial ungenutzt, die Nachfrage sinkt.', richtig:true},
      {text:'Für Betroffene drohen Einkommensverlust, Verlust von Qualifikation und sozialen Kontakten sowie psychische Belastungen.', richtig:true},
      {text:'Langzeitarbeitslosigkeit verfestigt sich, weil Arbeitgeber lange Lücken im Lebenslauf scheuen.', richtig:true},
      {text:'Das Arbeitslosengeld wird zeitlich unbegrenzt gezahlt.', fehler:'Das Arbeitslosengeld wird in der Regel höchstens 12 Monate gezahlt, für Ältere bis zu 24 Monate; danach greift die Grundsicherung.'},
      {text:'Arbeitslosigkeit hat keine Folgen für die Sozialversicherung.', fehler:'Beiträge fallen weg, Ausgaben steigen – das belastet Arbeitslosen-, Renten- und Krankenversicherung.'}
    ],
    hinweise:['Folgen für Betroffene, Staat und Volkswirtschaft.'],
    merke:'Folgen: individuell (Einkommen, Qualifikation, Psyche, Kontakte) · gesellschaftlich (Armut, Unzufriedenheit) · gesamtwirtschaftlich (ungenutztes Potenzial, Nachfrage) · fiskalisch (weniger Einnahmen, mehr Ausgaben).'
  },
  ...blAbi('rechnung', {id:'AL6', modul:'AL', titel:'Abiturfall: Der Arbeitsmarkt kühlt ab', tags:T.concat(['Abiturfall', 'Arbeitsmarkt', 'Arbeitslosenquote', 'Lohnpolitik']),
    text:'Im Vorjahr gab es {a1} Mio. Arbeitslose bei {e1} Mio. zivilen Erwerbstätigen und {o1} Mio. offene Stellen. In diesem Jahr sind es {a2} Mio. Arbeitslose, {e2} Mio. Erwerbstätige und {o2} Mio. offene Stellen. Die Arbeitsproduktivität steigt um {pz}, die EZB erwartet eine Inflationsrate von {inf}. Die Gewerkschaft fordert {lf} mehr Lohn.',
    zeilen:[
      {id:'a1', t:'Arbeitslose Vorjahr', e:'Mio.', aus:true}, {id:'e1', t:'Erwerbstätige Vorjahr', e:'Mio.', aus:true}, {id:'o1', t:'offene Stellen Vorjahr', e:'Mio.', aus:true},
      {id:'a2', t:'Arbeitslose', e:'Mio.', aus:true}, {id:'e2', t:'Erwerbstätige', e:'Mio.', aus:true}, {id:'o2', t:'offene Stellen', e:'Mio.', aus:true},
      {id:'pz', t:'Produktivitätszuwachs', e:'%', aus:true}, {id:'inf', t:'Inflation', e:'%', aus:true}, {id:'lf', t:'Lohnforderung', e:'%', aus:true}
    ],
    werte:[{a1:2.6, e1:45.9, o1:0.7, a2:3, e2:45.6, o2:0.6, pz:1.2, inf:2, lf:7}],
    sets:[[{a1:2.5, e1:46.1, o1:0.8, a2:2.9, e2:45.8, o2:0.65, pz:1, inf:2, lf:6.5}]],
    felder:[
      {id:'q1', t:'a) Berechnen Sie die Arbeitslosenquote des Vorjahres (%).', f:'a1 / (e1 + a1) * 100', e:'%', kurz:'a) Quote Vorjahr'},
      {id:'q2', t:'b) Berechnen Sie die Arbeitslosenquote dieses Jahres (%).', f:'a2 / (e2 + a2) * 100', e:'%', kurz:'b) Quote dieses Jahr'},
      {id:'dq', t:'c) Berechnen Sie die Veränderung in Prozentpunkten.', f:'a2 / (e2 + a2) * 100 - a1 / (e1 + a1) * 100', kurz:'c) Veränderung'},
      {id:'ls', t:'d) Berechnen Sie den Lohnspielraum nach der produktivitätsorientierten Lohnpolitik (%).', f:'pz + inf', e:'%', kurz:'d) Lohnspielraum'}
    ],
    wahl:[
      {frei:{muster:'Die Arbeitslosigkeit steigt (vgl. a–c), während die offenen Stellen zurückgehen. Auf der Beveridge-Kurve ist das eine Bewegung nach rechts unten – typisch für konjunkturelle Arbeitslosigkeit im Abschwung. Wäre die Zahl der offenen Stellen gleich geblieben oder gestiegen, deutete das auf Mismatch hin. Folgen sind Einkommensverluste, geringere Steuer- und Beitragseinnahmen und höhere Sozialausgaben.', punkte:['Entwicklung beider Quoten und der offenen Stellen beschrieben', 'Einordnung als konjunkturelle Arbeitslosigkeit (Bewegung auf der Beveridge-Kurve)', 'Abgrenzung zu struktureller Arbeitslosigkeit', 'Folgen genannt']}, id:'w1', t:'e) Analysieren Sie die Entwicklung und ordnen Sie die Art der Arbeitslosigkeit ein.', opts:['Mehr Arbeitslose bei weniger offenen Stellen: Bewegung auf der Beveridge-Kurve – vor allem konjunkturelle Arbeitslosigkeit.', 'Mehr Arbeitslose bei mehr offenen Stellen: reiner Mismatch.', 'Saisonale Arbeitslosigkeit, weil Winter ist.'], r:'0'},
      {frei:{muster:'Nach der produktivitätsorientierten Lohnpolitik dürfen die Löhne um Produktivitätszuwachs plus Zielinflation steigen (vgl. d), damit die Lohnstückkosten und das Preisniveau stabil bleiben. Die Forderung liegt deutlich darüber: Die Kosten der Unternehmen steigen, es drohen Preiserhöhungen (Lohn-Preis-Spirale) oder weiterer Stellenabbau. Aus Sicht der expansiven Lohnpolitik stärken höhere Löhne dagegen die Kaufkraft und damit die Nachfrage, was im Abschwung Beschäftigung sichern kann; zudem soll die Verteilung zugunsten der Arbeitnehmer verbessert werden.', punkte:['produktivitätsorientierter Spielraum mit Bezug auf d)', 'Folgen einer darüber liegenden Erhöhung (Kosten, Preise, Beschäftigung)', 'Argumentation der expansiven Lohnpolitik (Kaufkraft, Verteilung)', 'eigenes begründetes Urteil']}, id:'w2', t:'f) Beurteilen Sie die Lohnforderung aus Sicht der produktivitätsorientierten und der expansiven Lohnpolitik.', opts:['Produktivitätsorientiert zu hoch (Kosten, Preise, Stellenabbau); expansiv begründbar über Kaufkraft und Verteilung.', 'Beide Konzepte halten jede Lohnerhöhung für schädlich.', 'Die Forderung entspricht genau dem produktivitätsorientierten Spielraum.'], r:'0'}
    ],
    hinweise:['Arbeitslosenquote = Arbeitslose ÷ (Erwerbstätige + Arbeitslose) · 100.', 'Produktivitätsorientierter Lohnspielraum = Produktivitätszuwachs + Zielinflation.'],
    merke:'Arbeitslosenquote, Veränderung in Prozentpunkten · Beveridge-Kurve: Konjunktur vs. Mismatch · Lohnpolitik: produktivitätsorientiert (kostenneutral) vs. expansiv (Kaufkraft, Umverteilung).'}),

  /* ======================= LO · Lohn- und Arbeitsmarktpolitik (BPE 20.2) ======================= */
  blBau('rechnung', {id:'LO1', modul:'LO', stufe:2, titel:'Produktivitätsorientierte Lohnpolitik', tags:T.concat(['Arbeitsmarkt', 'Lohnpolitik', 'Lohnstückkosten']),
    text:'Die Arbeitsproduktivität steigt um {pz}, die Zielinflation der EZB beträgt {inf}. Die Gewerkschaft fordert {lf} mehr Lohn.',
    kopf:'Größe',
    zeilen:[
      {id:'pz', t:'Produktivitätszuwachs', e:'%', aus:true}, {id:'inf', t:'Zielinflation', e:'%', aus:true}, {id:'lf', t:'Lohnforderung', e:'%', aus:true},
      {id:'ls', t:'kostenniveauneutraler Lohnspielraum', e:'%', f:'pz + inf'},
      {id:'ue', t:'Überschreitung des Spielraums (Prozentpunkte)', f:'lf - ls'},
      {id:'lk', t:'Anstieg der Lohnstückkosten (Näherung)', e:'%', f:'lf - pz'}
    ],
    werte:[{pz:1.5, inf:2, lf:5.5}],
    sets:[[{pz:1, inf:2, lf:4}], [{pz:2, inf:2, lf:6}]],
    wahl:[{id:'w', t:'Welche Gefahr sieht die produktivitätsorientierte Lohnpolitik bei dieser Forderung?', opts:['Die Lohnstückkosten steigen stärker als mit Preisstabilität vereinbar; es drohen Preiserhöhungen (Lohn-Preis-Spirale) oder Stellenabbau.', 'Die Kaufkraft sinkt.', 'Die Produktivität sinkt automatisch.'], r:'0'}],
    hinweise:['Lohnstückkosten = Lohnkosten ÷ produzierte Menge; sie steigen ungefähr um Lohnzuwachs − Produktivitätszuwachs.'],
    merke:'Produktivitätsorientiert: Lohnzuwachs = Produktivitätszuwachs (+ Zielinflation) → Lohnstückkosten und Verteilung bleiben stabil · darüber: Kostendruck, Preise, Beschäftigung · Tarifautonomie: Gewerkschaften und Arbeitgeberverbände verhandeln.'}),
  blBau('zuordnung', {id:'LO2', modul:'LO', stufe:2, titel:'Produktivitätsorientierte oder expansive Lohnpolitik?', tags:T.concat(['Arbeitsmarkt', 'Lohnpolitik', 'Tarifparteien']),
    text:'Zu welchem lohnpolitischen Konzept passt die Aussage?',
    kategorien:['produktivitätsorientierte Lohnpolitik', 'expansive Lohnpolitik'], anzahl:8,
    faelle:[
      {t:'Lohnerhöhungen sollen den Produktivitätsfortschritt (plus Zielinflation) nicht übersteigen.', k:0},
      {t:'Löhne sind vor allem Kosten der Unternehmen.', k:0},
      {t:'Die Lohnstückkosten sollen konstant bleiben, damit Preise und Wettbewerbsfähigkeit stabil bleiben.', k:0},
      {t:'wird vor allem von Arbeitgeberverbänden vertreten', k:0},
      {t:'Höhere Löhne stärken die Kaufkraft und damit Nachfrage und Beschäftigung.', k:1},
      {t:'Löhne sind vor allem Einkommen und Nachfrage der Haushalte.', k:1},
      {t:'Die Einkommensverteilung soll sich zugunsten der Arbeitnehmer verschieben.', k:1},
      {t:'wird vor allem von Gewerkschaften vertreten', k:1},
      {t:'Gefahr: Kostendruck, Inflation und Arbeitsplatzabbau', k:1}
    ],
    hinweise:['Kostenargument oder Kaufkraftargument?'],
    merke:'Produktivitätsorientiert: Kostenargument, verteilungsneutral, Preisniveaustabilität · expansiv (umverteilend): Kaufkraftargument, Umverteilung, Risiko Kosten- und Preissteigerung.'}),
  blBau('zuordnung', {id:'LO3', modul:'LO', stufe:2, titel:'Instrumente der Beschäftigungs- und Arbeitsmarktpolitik', tags:T.concat(['Arbeitsmarktpolitik', 'Instrumente']),
    text:'Ordne die Maßnahme einem Bereich der staatlichen Arbeitsmarktpolitik zu.',
    kategorien:['Qualifizierungspolitik', 'Arbeitszeitpolitik', 'Vermittlung und Eingliederung', 'Flexibilisierung des Arbeitsmarkts'], anzahl:8,
    faelle:[
      {t:'Förderung beruflicher Weiterbildung mit Bildungsgutschein', k:0}, {t:'Umschulung zur Pflegefachkraft', k:0},
      {t:'Kurzarbeitergeld bei vorübergehendem Arbeitsausfall', k:1}, {t:'Förderung von Teilzeit- und Altersteilzeitmodellen', k:1},
      {t:'Eingliederungszuschuss an Arbeitgeber, die Langzeitarbeitslose einstellen', k:2}, {t:'Stellenvermittlung und Beratung durch die Arbeitsagentur', k:2},
      {t:'Arbeitnehmerüberlassung (Leiharbeit)', k:3}, {t:'erleichterte Befristung von Arbeitsverträgen', k:3},
      {t:'Gründungszuschuss für Arbeitslose, die sich selbstständig machen', k:2}
    ],
    hinweise:['Träger sind vor allem die Bundesagentur für Arbeit, Bund und Länder; die Tarifparteien wirken über Löhne und Arbeitszeiten.'],
    merke:'Arbeitsmarktpolitik: Qualifizierung (Weiterbildung, Umschulung) · Arbeitszeit (Kurzarbeit, Teilzeit) · Vermittlung/Eingliederung (Beratung, Zuschüsse) · Flexibilisierung (Leiharbeit, Befristung) · Träger: Bundesagentur für Arbeit, Bund, Länder, Kommunen.'}),
  {
    id:'LO4', modul:'LO', typ:'berechnung', mehrfach:true, stufe:2, titel:'Der gesetzliche Mindestlohn',
    tags:T.concat(['Arbeitsmarkt', 'Mindestlohn', 'Lohnpolitik']),
    text:'Der gesetzliche Mindestlohn ist ein Eingriff des Staates in die Lohnbildung.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Seit 1. Januar 2026 beträgt der Mindestlohn 13,90 € brutto je Stunde; für 2027 sind 14,60 € beschlossen.', richtig:true},
      {text:'Die Höhe schlägt die Mindestlohnkommission vor, in der Arbeitgeber und Gewerkschaften vertreten sind; die Bundesregierung setzt sie per Verordnung fest.', richtig:true},
      {text:'Befürworter: Schutz vor Niedriglöhnen, mehr Kaufkraft, weniger aufstockende Sozialleistungen.', richtig:true},
      {text:'Kritiker: Höhere Kosten können vor allem Arbeitsplätze für Geringqualifizierte gefährden oder Schwarzarbeit fördern.', richtig:true},
      {text:'Der Mindestlohn gilt auch für Auszubildende.', fehler:'Für Auszubildende gilt die Mindestausbildungsvergütung nach dem Berufsbildungsgesetz, nicht der Mindestlohn.'},
      {text:'Die Gewerkschaften legen den Mindestlohn allein fest.', fehler:'Die Mindestlohnkommission ist paritätisch besetzt; die Bundesregierung setzt den Vorschlag per Verordnung um.'}
    ],
    hinweise:['Mindestlohngesetz.'],
    merke:'Mindestlohn: 13,90 € (2026), 14,60 € (2027) · Mindestlohnkommission + Verordnung · Pro: Existenzsicherung, Kaufkraft · Contra: Beschäftigungsrisiken, Kosten · gilt nicht für Auszubildende.'
  },
  {
    id:'LO5', modul:'LO', typ:'berechnung', mehrfach:true, stufe:3, titel:'Vorschläge zum Abbau der Arbeitslosigkeit beurteilen',
    tags:T.concat(['Arbeitsmarktpolitik', 'Interessen', 'Beurteilung']),
    text:'Arbeitgeberverbände, Gewerkschaften und Parteien machen Vorschläge zum Abbau der Arbeitslosigkeit.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Arbeitgeberverbände fordern eher niedrigere Lohnnebenkosten und flexible Beschäftigung, Gewerkschaften eher Lohnerhöhungen, Weiterbildung und Arbeitszeitverkürzung – die Vorschläge sind interessengebunden.', richtig:true},
      {text:'Arbeitszeitverkürzung kann Arbeit umverteilen, scheitert aber, wenn Fachkräfte fehlen oder die Kosten je Stunde stark steigen.', richtig:true},
      {text:'Gegen strukturelle Arbeitslosigkeit wirkt Qualifizierung besser als ein Konjunkturprogramm.', richtig:true},
      {text:'Gegen saisonale Arbeitslosigkeit hilft vor allem eine Senkung der Leitzinsen.', fehler:'Saisonale Ausfälle werden z. B. über das Saison-Kurzarbeitergeld überbrückt; die Geldpolitik wirkt auf die Konjunktur.'},
      {text:'Leiharbeit kann den Einstieg in Beschäftigung erleichtern, birgt aber das Risiko niedrigerer Löhne und unsicherer Beschäftigung.', richtig:true},
      {text:'Konjunkturelle Arbeitslosigkeit lässt sich am besten durch Umschulungen beseitigen.', fehler:'Hier fehlt Nachfrage; geeignet sind konjunkturpolitische Maßnahmen und Kurzarbeit zur Überbrückung.'}
    ],
    hinweise:['Ursache der Arbeitslosigkeit und Maßnahme müssen zusammenpassen.'],
    merke:'Maßnahme nach Ursache: konjunkturell → Konjunkturpolitik, Kurzarbeit · strukturell → Qualifizierung, Mobilität · saisonal → Saison-Kurzarbeitergeld · Vorschläge der Interessengruppen kritisch prüfen.'
  },

  /* ======================= UI · Umweltpolitik: Prinzipien und Instrumente (BPE 21.1) ======================= */
  blBau('zuordnung', {id:'UI1', modul:'UI', stufe:1, titel:'Prinzipien der Umweltpolitik', tags:T.concat(['Umweltpolitik', 'Verursacherprinzip', 'Vorsorgeprinzip']),
    text:'Welches Prinzip der Umweltpolitik liegt vor?',
    kategorien:['Verursacherprinzip', 'Gemeinlastprinzip', 'Vorsorgeprinzip', 'Kooperationsprinzip'], anzahl:8,
    faelle:[
      {t:'Ein Chemieunternehmen muss die Sanierung des von ihm verseuchten Bodens bezahlen.', k:0},
      {t:'Für jede Tonne CO₂ muss der Emittent ein Zertifikat vorlegen.', k:0},
      {t:'Die Gemeinde beseitigt aus Steuermitteln eine alte Mülldeponie, deren Verursacher nicht mehr existiert.', k:1},
      {t:'Der Staat bezahlt den Hochwasserschutz für alle aus dem Haushalt.', k:1},
      {t:'Ein neuer Stoff darf erst verkauft werden, wenn seine Unbedenklichkeit nachgewiesen ist.', k:2},
      {t:'Strenge Grenzwerte sollen Schäden verhindern, bevor sie entstehen.', k:2},
      {t:'Staat und Industrie vereinbaren freiwillig, Verpackungen zu verringern.', k:3},
      {t:'Umweltverbände werden in Genehmigungsverfahren beteiligt.', k:3}
    ],
    hinweise:['Wer zahlt? Wann wird gehandelt? Wer wirkt mit?'],
    merke:'Verursacherprinzip: wer verschmutzt, zahlt (externe Kosten internalisieren) · Gemeinlastprinzip: Allgemeinheit zahlt, wenn Verursacher unbekannt oder Kosten unzumutbar · Vorsorgeprinzip: Schäden vermeiden, bevor sie entstehen · Kooperationsprinzip: Staat, Wirtschaft, Bürger arbeiten zusammen.'}),
  blBau('rechnung', {id:'UI2', modul:'UI', stufe:2, titel:'Emissionshandel: zukaufen oder selbst vermeiden?', tags:T.concat(['Umweltpolitik', 'Emissionshandel', 'Zertifikate']),
    text:'Zwei Unternehmen nehmen am Emissionshandel teil. Ein Zertifikat (1 t CO₂) kostet {p@0}. Jedes Unternehmen kann die Fehlmenge entweder zukaufen oder durch eigene Maßnahmen vermeiden.',
    kopf:'Größe', spalten:['Zementwerk A', 'Papierfabrik B'],
    zeilen:[
      {id:'e', t:'Emissionen (t)', e:'ma'}, {id:'z', t:'verfügbare Zertifikate (t)', e:'ma'}, {id:'vk', t:'Vermeidungskosten je t', e:'€'}, {id:'p', t:'Zertifikatpreis', e:'€', aus:true},
      {id:'fm', t:'Fehlmenge (t)', e:'ma', f:'e - z'},
      {id:'kz', t:'Kosten bei Zukauf', e:'€', f:'fm * p'},
      {id:'kv', t:'Kosten bei eigener Vermeidung', e:'€', f:'fm * vk'}
    ],
    werte:[{e:12000, z:10000, vk:60, p:80}, {e:9000, z:8000, vk:110, p:80}],
    sets:[[{e:20000, z:17000, vk:95, p:75}, {e:6000, z:5000, vk:50, p:75}]],
    felder:[{id:'gk', t:'Gesamtkosten beider Unternehmen bei jeweils günstigerer Wahl (€)', f:'min(kz@0, kv@0) + min(kz@1, kv@1)', e:'€', kurz:'Gesamtkosten'}],
    wahl:[
      {id:'w1', t:'Wie entscheidet Zementwerk A?', opts:['selbst vermeiden (Vermeidungskosten unter dem Zertifikatpreis)', 'Zertifikate zukaufen (Vermeidungskosten über dem Zertifikatpreis)'], r:'vk@0 < p@0 ? 0 : 1'},
      {id:'w2', t:'Wie entscheidet Papierfabrik B?', opts:['selbst vermeiden (Vermeidungskosten unter dem Zertifikatpreis)', 'Zertifikate zukaufen (Vermeidungskosten über dem Zertifikatpreis)'], r:'vk@1 < p@1 ? 0 : 1'}
    ],
    hinweise:['Vermeiden lohnt sich, wenn die Vermeidungskosten je Tonne unter dem Zertifikatpreis liegen.'],
    merke:'Emissionshandel (cap and trade): Staat begrenzt die Gesamtmenge · Preis bildet sich am Markt · vermieden wird dort, wo es am billigsten ist (Effizienz) · Verursacherprinzip · EU-Emissionshandel für Energie, Industrie, Luft- und Seeverkehr.'}),
  {
    id:'UI3', modul:'UI', typ:'berechnung', mehrfach:true, stufe:2, titel:'Auflagen, Ökosteuer und Emissionshandel beurteilen',
    tags:T.concat(['Umweltpolitik', 'Instrumente', 'Ökosteuer', 'Emissionshandel']),
    text:'Umweltpolitische Instrumente werden nach ökologischer Treffsicherheit, ökonomischer Effizienz und Anreizwirkung beurteilt.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Auflagen (Grenzwerte, Verbote) sind ökologisch treffsicher, aber oft ineffizient, weil alle gleich stark mindern müssen – unabhängig von ihren Kosten.', richtig:true},
      {text:'Eine Ökosteuer setzt einen Preis je Einheit Umweltverbrauch; wie stark die Emissionen sinken, ist aber unsicher.', richtig:true},
      {text:'Beim Emissionshandel legt der Staat die Gesamtmenge fest – die Treffsicherheit ist hoch, der Preis bildet sich am Markt.', richtig:true},
      {text:'Emissionshandel und Ökosteuer setzen einen dauerhaften Anreiz, Emissionen weiter zu senken.', richtig:true},
      {text:'Auflagen geben einen dauerhaften Anreiz, die Emissionen unter den Grenzwert zu senken.', fehler:'Ist der Grenzwert erreicht, lohnt weitere Minderung nicht – es fehlt der Anreiz zu mehr.'},
      {text:'Die Ökosteuer folgt dem Gemeinlastprinzip.', fehler:'Sie belastet die Verursacher – Verursacherprinzip.'}
    ],
    hinweise:['Wird das Umweltziel sicher erreicht? Zu welchen Kosten? Lohnt sich mehr Umweltschutz?'],
    merke:'Auflagen: treffsicher, ineffizient, kein Anreiz über den Grenzwert · Ökosteuer: Preislösung, effizient, Menge unsicher · Emissionshandel: Mengenlösung, treffsicher und effizient, Preis schwankt.'
  },
  {
    id:'UI4', modul:'UI', typ:'berechnung', mehrfach:true, stufe:2, titel:'Grenzen des Wachstums: Ursachen und Ausmaß',
    tags:T.concat(['Umweltpolitik', 'Wachstum', 'Club of Rome']),
    text:'Wirtschaftswachstum und Umwelt stehen in einem Spannungsverhältnis.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Der Club of Rome zeigte 1972 („Die Grenzen des Wachstums“), dass exponentielles Wachstum von Bevölkerung, Produktion und Ressourcenverbrauch an natürliche Grenzen stößt.', richtig:true},
      {text:'Qualitatives Wachstum strebt mehr Lebensqualität bei geringerem Ressourcenverbrauch an.', richtig:true},
      {text:'Umweltgüter wie saubere Luft haben oft keinen Preis und werden übernutzt; die Schäden sind externe Kosten.', richtig:true},
      {text:'Ursachen von Umweltproblemen sind z. B. Übernutzung natürlicher Ressourcen, Bevölkerungswachstum, Verstädterung und Konsumverhalten.', richtig:true},
      {text:'Das BIP zieht Umweltschäden vom Wachstum ab.', fehler:'Umweltschäden werden nicht abgezogen; Reparaturkosten erhöhen das BIP sogar.'},
      {text:'Quantitatives Wachstum senkt die Umweltbelastung automatisch.', fehler:'Mehr Produktion bedeutet ohne Entkopplung meist mehr Ressourcenverbrauch und Emissionen.'}
    ],
    hinweise:['Quantitativ = mehr Menge, qualitativ = bessere Qualität des Wachstums.'],
    merke:'Grenzen des Wachstums: endliche Ressourcen, Senken (Klima) · Ursachen: Übernutzung, Bevölkerung, Verstädterung, Lebensstil · Ausmaß: Klimawandel, Luft, Wasser, Böden · externe Kosten · qualitatives Wachstum.'
  },
  {
    id:'UI5', modul:'UI', typ:'berechnung', mehrfach:true, stufe:2, titel:'Internationale Klimapolitik',
    tags:T.concat(['Umweltpolitik', 'Klimapolitik', 'Paris']),
    text:'Klimaschutz ist ein globales öffentliches Gut – deshalb braucht es internationale Vereinbarungen.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Im Übereinkommen von Paris (2015) haben sich die Staaten verpflichtet, die Erderwärmung auf deutlich unter 2 °C, möglichst 1,5 °C, zu begrenzen.', richtig:true},
      {text:'Jeder Staat legt eigene Klimaziele vor (national festgelegte Beiträge); Sanktionen bei Verfehlung gibt es nicht.', richtig:true},
      {text:'Hemmnisse sind Trittbrettfahrerverhalten, unterschiedliche Interessen von Industrie- und Entwicklungsländern und kurzfristige Kosten.', richtig:true},
      {text:'Die EU will bis 2050 klimaneutral werden; dazu dient u. a. der EU-Emissionshandel.', richtig:true},
      {text:'Die UN-Klimakonferenzen verhängen verbindliche Strafzahlungen gegen Staaten, die ihre Ziele verfehlen.', fehler:'Die Beschlüsse setzen auf freiwillige nationale Beiträge, Berichtspflichten und politischen Druck.'},
      {text:'Klimaschutz lohnt sich für ein einzelnes Land immer, weil es den Nutzen allein erhält.', fehler:'Der Nutzen verteilt sich weltweit, die Kosten trägt das Land – deshalb lockt das Trittbrettfahren.'}
    ],
    hinweise:['Öffentliches Gut: Niemand kann vom Nutzen ausgeschlossen werden.'],
    merke:'Internationale Klimapolitik: Klimarahmenkonvention, jährliche UN-Klimakonferenzen (COP), Paris 2015 (unter 2 °C/1,5 °C, nationale Beiträge) · Erfolge: Ziele und Berichte · Hemmnisse: Trittbrettfahrer, Interessenkonflikte, fehlende Sanktionen.'
  },
  ...blAbi('rechnung', {id:'UI6', modul:'UI', titel:'Abiturfall: Stahl, Zertifikate und Klimaschutz', tags:T.concat(['Abiturfall', 'Umweltpolitik', 'Emissionshandel', 'Instrumente', 'Prinzipien']),
    text:'Das Stahlwerk A stößt {ea} t CO₂ aus und besitzt {za} Zertifikate; eigene Minderung kostet {va} je t. Die Gießerei B stößt {eb} t aus, besitzt {zb} Zertifikate und kann den Überschuss verkaufen. Ein Zertifikat kostet {p}. Eine Partei fordert, den Emissionshandel durch strenge Grenzwerte für jedes Werk zu ersetzen.',
    zeilen:[
      {id:'ea', t:'Emissionen A', e:'ma', aus:true}, {id:'za', t:'Zertifikate A', e:'ma', aus:true}, {id:'va', t:'Vermeidungskosten A', e:'€', aus:true},
      {id:'eb', t:'Emissionen B', e:'ma', aus:true}, {id:'zb', t:'Zertifikate B', e:'ma', aus:true}, {id:'p', t:'Zertifikatpreis', e:'€', aus:true}
    ],
    werte:[{ea:50000, za:42000, va:70, eb:30000, zb:32000, p:85}],
    sets:[[{ea:64000, za:58000, va:60, eb:21000, zb:24000, p:72}]],
    felder:[
      {id:'fa', t:'a) Berechnen Sie die Fehlmenge von A (t).', f:'ea - za', kurz:'a) Fehlmenge A'},
      {id:'kv', t:'b) Berechnen Sie die Kosten von A bei eigener Vermeidung (€).', f:'(ea - za) * va', e:'€', kurz:'b) Kosten Vermeidung'},
      {id:'kz', t:'c) Berechnen Sie die Kosten von A bei Zukauf (€).', f:'(ea - za) * p', e:'€', kurz:'c) Kosten Zukauf'},
      {id:'eb2', t:'d) Berechnen Sie den Erlös von B aus dem Verkauf der überschüssigen Zertifikate (€).', f:'(zb - eb) * p', e:'€', kurz:'d) Erlös B'}
    ],
    wahl:[
      {frei:{muster:'Der Emissionshandel folgt dem Verursacherprinzip: Wer CO₂ ausstößt, braucht dafür Zertifikate und trägt die Kosten. Er ist ökologisch treffsicher, weil der Staat die Gesamtmenge festlegt. Er ist effizient, weil dort vermieden wird, wo es am billigsten ist: A vermeidet selbst, weil die Vermeidung günstiger ist als der Zukauf (vgl. b und c), B verkauft Überschüsse (vgl. d). Beide haben einen dauerhaften Anreiz, weiter zu mindern.', punkte:['Verursacherprinzip begründet', 'Treffsicherheit durch festgelegte Gesamtmenge', 'Effizienz mit Bezug auf die Rechnung (A vermeidet, B verkauft)', 'dauerhafter Anreiz']}, id:'w1', t:'e) Erläutern Sie mithilfe Ihrer Ergebnisse, warum der Emissionshandel als treffsicher und effizient gilt, und ordnen Sie ihn einem Prinzip zu.', opts:['Verursacherprinzip; Menge fest (treffsicher), vermieden wird dort, wo es am billigsten ist (effizient).', 'Gemeinlastprinzip; der Staat bezahlt die Minderung.', 'Er ist weder treffsicher noch effizient, weil der Preis schwankt.'], r:'0'},
      {frei:{muster:'Grenzwerte sind ökologisch treffsicher und leicht verständlich, aber ineffizient: Jedes Werk muss gleich stark mindern, auch wenn das bei einigen sehr teuer ist. Ist der Grenzwert erreicht, fehlt der Anreiz zu weiterer Minderung. Zudem sind Kontrolle und Anpassung aufwendig. Der Emissionshandel erreicht dasselbe Ziel zu geringeren Gesamtkosten. Eine Ökosteuer wäre eine weitere Alternative: effizient, aber mit unsicherer Mengenwirkung.', punkte:['Vorteil der Grenzwerte (Treffsicherheit, Einfachheit)', 'Nachteil: Ineffizienz und fehlender Anreiz', 'Vergleich mit Emissionshandel (Kosten) bzw. Ökosteuer', 'begründetes Urteil']}, id:'w2', t:'f) Beurteilen Sie die Forderung, den Emissionshandel durch strenge Grenzwerte zu ersetzen.', opts:['Grenzwerte sind treffsicher, aber ineffizient und ohne Anreiz über den Grenzwert hinaus – der Emissionshandel erreicht das Ziel kostengünstiger.', 'Grenzwerte sind immer effizienter, weil jeder gleich viel mindert.', 'Grenzwerte führen automatisch zu sinkenden Zertifikatpreisen.'], r:'0'}
    ],
    hinweise:['Vermeiden lohnt sich, wenn die Vermeidungskosten unter dem Zertifikatpreis liegen.'],
    merke:'Emissionshandel: Verursacherprinzip, Mengensteuerung, effizient · Grenzwerte (Auflagen): treffsicher, ineffizient · Ökosteuer: Preissteuerung · Beurteilung nach Treffsicherheit, Effizienz, Anreiz.'}),

  /* ======================= NH · Nachhaltige Entwicklung (BPE 21.2) ======================= */
  {
    id:'NH1', modul:'NH', typ:'berechnung', mehrfach:true, stufe:1, titel:'Leitbild und Dimensionen der Nachhaltigkeit',
    tags:T.concat(['Nachhaltigkeit', 'Leitbild', 'Dimensionen']),
    text:'Nachhaltige Entwicklung ist ein weltweites Leitbild der Politik.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Nach dem Brundtland-Bericht (1987) befriedigt nachhaltige Entwicklung die Bedürfnisse der Gegenwart, ohne die Möglichkeiten künftiger Generationen zu gefährden.', richtig:true},
      {text:'Nachhaltigkeit umfasst eine ökologische, eine ökonomische und eine soziale Dimension.', richtig:true},
      {text:'Generationengerechtigkeit und globale Gerechtigkeit sind Kernideen des Leitbilds.', richtig:true},
      {text:'Nachhaltigkeit bezieht sich nur auf den Schutz der Natur.', fehler:'Sie umfasst auch wirtschaftliche Leistungsfähigkeit und soziale Gerechtigkeit.'},
      {text:'Der Begriff stammt ursprünglich aus der Forstwirtschaft: nur so viel Holz schlagen, wie nachwächst.', richtig:true},
      {text:'Ein Land ist nachhaltig, sobald sein BIP wächst.', fehler:'Wachstum allein sagt nichts über Ressourcenverbrauch, Verteilung und Lebenschancen künftiger Generationen.'}
    ],
    hinweise:['Heute und morgen, hier und anderswo.'],
    merke:'Leitbild: Bedürfnisse heute erfüllen, ohne künftige Generationen zu gefährden (Brundtland 1987) · Dimensionen: Ökologie, Ökonomie, Soziales · Generationen- und globale Gerechtigkeit.'
  },
  blBau('zuordnung', {id:'NH2', modul:'NH', stufe:1, titel:'Schwache oder starke Nachhaltigkeit?', tags:T.concat(['Nachhaltigkeit', 'Mehr-Dimensionen-Modelle']),
    text:'Gehört die Aussage zur schwachen oder zur starken Nachhaltigkeit?',
    kategorien:['schwache Nachhaltigkeit', 'starke Nachhaltigkeit'], anzahl:8,
    faelle:[
      {t:'Naturkapital darf durch Sach- und Humankapital ersetzt werden, solange der Gesamtbestand erhalten bleibt.', k:0},
      {t:'Die Abholzung eines Waldes ist vertretbar, wenn mit dem Erlös Schulen gebaut werden.', k:0},
      {t:'Drei gleichrangige Säulen: Ökologie, Ökonomie und Soziales (Drei-Säulen-Modell).', k:0},
      {t:'Technischer Fortschritt kann den Verlust natürlicher Ressourcen ausgleichen.', k:0},
      {t:'Naturkapital ist nur begrenzt ersetzbar und muss für sich erhalten werden.', k:1},
      {t:'Die Ökologie bildet den Rahmen, in dem sich Wirtschaft und Gesellschaft bewegen (Vorrangmodell).', k:1},
      {t:'Planetare Belastungsgrenzen dürfen nicht überschritten werden.', k:1},
      {t:'Ein stabiles Klima ist kritisches Naturkapital und nicht ersetzbar.', k:1}
    ],
    hinweise:['Ist Natur ersetzbar oder nicht?'],
    merke:'Schwache Nachhaltigkeit: Kapitalarten austauschbar, Gesamtkapital erhalten (Drei-Säulen-Modell) · starke Nachhaltigkeit: Naturkapital nicht ersetzbar, ökologische Leitplanken haben Vorrang (Vorrang- bzw. Schnittmengenmodell mit Vorrang der Ökologie).'}),
  blBau('zuordnung', {id:'NH3', modul:'NH', stufe:2, titel:'Die Agenda 2030: fünf Kernbotschaften', tags:T.concat(['Nachhaltigkeit', 'Agenda 2030', 'SDG']),
    text:'Die Agenda 2030 der Vereinten Nationen enthält 17 Nachhaltigkeitsziele (SDGs), gebündelt in fünf Kernbotschaften (5 P). Ordne die Ziele zu.',
    kategorien:['Mensch (People)', 'Planet', 'Wohlstand (Prosperity)', 'Frieden (Peace)', 'Partnerschaft (Partnership)'], anzahl:9,
    faelle:[
      {t:'SDG 1: Keine Armut', k:0}, {t:'SDG 2: Kein Hunger', k:0}, {t:'SDG 4: Hochwertige Bildung', k:0},
      {t:'SDG 13: Maßnahmen zum Klimaschutz', k:1}, {t:'SDG 14: Leben unter Wasser', k:1}, {t:'SDG 15: Leben an Land', k:1},
      {t:'SDG 7: Bezahlbare und saubere Energie', k:2}, {t:'SDG 8: Menschenwürdige Arbeit und Wirtschaftswachstum', k:2},
      {t:'SDG 16: Frieden, Gerechtigkeit und starke Institutionen', k:3}, {t:'SDG 17: Partnerschaften zur Erreichung der Ziele', k:4}
    ],
    hinweise:['Die Ziele gelten für alle Staaten – auch für Industrieländer.'],
    merke:'Agenda 2030 (2015): 17 Ziele für alle Staaten bis 2030 · 5 P: Mensch, Planet, Wohlstand, Frieden, Partnerschaft · Zielkonflikte (z. B. Wachstum vs. Klima) und Umsetzungsdefizite.'}),
  {
    id:'NH4', modul:'NH', typ:'berechnung', mehrfach:true, stufe:2, titel:'Nachhaltige Wirtschafts- und Gesellschaftsmodelle',
    tags:T.concat(['Nachhaltigkeit', 'Postwachstum', 'Gemeinwohl-Ökonomie']),
    text:'Um Wohlstand und Umweltschutz zu vereinbaren, werden verschiedene Modelle diskutiert.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Postwachstumsökonomie: Wohlstand ohne Wirtschaftswachstum durch Suffizienz (weniger Konsum), Regionalisierung und kürzere Erwerbsarbeitszeit.', richtig:true},
      {text:'Gemeinwohl-Ökonomie: Unternehmen erstellen eine Gemeinwohl-Bilanz, die z. B. Menschenwürde, Solidarität, ökologische Nachhaltigkeit und Mitentscheidung bewertet.', richtig:true},
      {text:'Grünes Wachstum setzt auf Entkopplung: Wachstum soll durch Effizienz und erneuerbare Energien vom Ressourcenverbrauch getrennt werden.', richtig:true},
      {text:'Kritiker der Postwachstumsökonomie befürchten Probleme bei Beschäftigung, Sozialsystemen und Staatsfinanzen, die auf Wachstum ausgelegt sind.', richtig:true},
      {text:'Die Gemeinwohl-Bilanz ist für alle Kapitalgesellschaften gesetzlich vorgeschrieben.', fehler:'Sie ist freiwillig; gesetzlich geregelt ist die Nachhaltigkeitsberichterstattung großer Unternehmen.'},
      {text:'Effizienzgewinne senken den Verbrauch immer im vollen Umfang.', fehler:'Rebound-Effekt: Eingesparte Kosten führen oft zu Mehrverbrauch.'}
    ],
    hinweise:['Effizienz, Konsistenz, Suffizienz.'],
    merke:'Grünes Wachstum (Entkopplung, Effizienz) · Postwachstum (Suffizienz, Regionalität) · Gemeinwohl-Ökonomie (Gemeinwohl-Bilanz) · Rebound-Effekt · Zielkonflikte mit Beschäftigung und Sozialstaat.'
  },
  blBau('fall', {id:'NH5', modul:'NH', stufe:3, titel:'Ein Windpark für Waldstetten', tags:T.concat(['Nachhaltigkeit', 'Zielkonflikte', 'SDG']),
    text:'Die Stadtwerke Waldstetten wollen auf einer Anhöhe im Wald vier Windräder bauen. Bürgerinnen und Bürger können sich über eine Genossenschaft beteiligen und erhalten eine Rendite. Der Strom soll günstig an die Einwohner gehen und jährlich mehrere tausend Tonnen CO₂ einsparen. Naturschützer warnen vor Schäden für Vögel und Fledermäuse und vor der Rodung von Waldfläche.',
    teile:[
      {op:'Ordnen Sie', t:'die Argumente den Dimensionen der Nachhaltigkeit zu: (1) günstiger Strom, (2) CO₂-Einsparung, (3) Bürgerbeteiligung.', opts:['(1) ökonomisch, (2) ökologisch, (3) sozial', '(1) ökologisch, (2) sozial, (3) ökonomisch', '(1) sozial, (2) ökonomisch, (3) ökologisch'], r:0},
      {op:'Erläutern Sie', t:'den Zielkonflikt im Fall.', opts:['Klimaschutz (weniger CO₂) steht gegen Natur- und Artenschutz vor Ort (Rodung, Vögel, Fledermäuse).', 'Es gibt keinen Zielkonflikt, weil Windkraft immer gut ist.', 'Günstiger Strom steht gegen die Bürgerbeteiligung.'], r:0},
      {op:'Ordnen Sie', t:'das Projekt vor allem einem Ziel der Agenda 2030 zu.', opts:['SDG 7 Bezahlbare und saubere Energie (und SDG 13 Klimaschutz)', 'SDG 4 Hochwertige Bildung', 'SDG 16 Frieden und Gerechtigkeit'], r:0},
      {op:'Beurteilen Sie', t:'das Projekt aus Sicht der starken Nachhaltigkeit.', opts:['vertretbar, wenn kritisches Naturkapital (geschützte Arten, wertvoller Wald) nicht zerstört wird, z. B. durch Standortwahl und Ausgleichsflächen', 'immer vertretbar, weil Geld die Natur ersetzen kann', 'nie vertretbar, weil jede Veränderung der Natur verboten ist'], r:0}
    ],
    hinweise:['Ökologie, Ökonomie, Soziales – und mögliche Zielkonflikte.'],
    merke:'Nachhaltigkeitsprojekte haben Ziel- und Interessenkonflikte · starke Nachhaltigkeit: kritisches Naturkapital schützen · SDG 7 und 13.'}),

  /* ======================= VA · Verteilungspolitik (BPE 22*) ======================= */
  blBau('rechnung', {id:'VA1', modul:'VA', stufe:2, titel:'Lohnquote und Gewinnquote', tags:T.concat(['Verteilung', 'funktionelle Einkommensverteilung', 'Lohnquote']),
    text:'Die funktionelle Einkommensverteilung zeigt, wie sich das Volkseinkommen auf die Produktionsfaktoren verteilt (Werte in Mrd. €).',
    kopf:'Größe', spalten:['Jahr 1', 'Jahr 2'],
    zeilen:[
      {id:'ae', t:'Arbeitnehmerentgelt', e:'Mrd. €'}, {id:'uv', t:'Unternehmens- und Vermögenseinkommen', e:'Mrd. €'},
      {id:'vk', t:'Volkseinkommen', e:'Mrd. €', f:'ae + uv'},
      {id:'lq', t:'Lohnquote', e:'%', f:'ae / vk * 100'},
      {id:'gq', t:'Gewinnquote', e:'%', f:'uv / vk * 100'}
    ],
    werte:[{ae:2100, uv:900}, {ae:2250, uv:870}],
    sets:[[{ae:1900, uv:950}, {ae:1960, uv:1040}]],
    wahl:[{id:'w', t:'Warum ist die Lohnquote nur bedingt ein Maßstab für Verteilungsgerechtigkeit?', opts:['Sie steigt auch, wenn mehr Menschen Arbeitnehmer werden; zudem beziehen Arbeitnehmer auch Vermögenseinkommen (Querverteilung).', 'Weil sie die Gewinne doppelt zählt.', 'Weil sie immer genau 50 % beträgt.'], r:'0'}],
    hinweise:['Lohnquote = Arbeitnehmerentgelt ÷ Volkseinkommen · 100 · Gewinnquote = 100 % − Lohnquote.'],
    merke:'Primärverteilung: Einkommen aus dem Markt (Arbeit, Kapital) · funktionelle Verteilung: Lohn- und Gewinnquote · Sekundärverteilung nach Steuern, Abgaben und Transfers · Aussagekraft begrenzt (Arbeitnehmerzahl, Querverteilung).'}),
  blBau('rechnung', {id:'VA2', modul:'VA', stufe:2, titel:'Lorenzkurve und Gini-Koeffizient', tags:T.concat(['Verteilung', 'personelle Einkommensverteilung', 'Lorenzkurve', 'Gini-Koeffizient']),
    text:'Die Haushalte werden nach ihrem Einkommen in fünf gleich große Gruppen (Quintile) eingeteilt. Gegeben sind die Anteile am Gesamteinkommen. Berechne die Punkte der Lorenzkurve (kumulierte Anteile) und den Gini-Koeffizienten.',
    kopf:'Größe',
    zeilen:[
      {id:'a1', t:'Anteil ärmstes Fünftel', e:'%'}, {id:'a2', t:'Anteil 2. Fünftel', e:'%'}, {id:'a3', t:'Anteil 3. Fünftel', e:'%'}, {id:'a4', t:'Anteil 4. Fünftel', e:'%'}, {id:'a5', t:'Anteil reichstes Fünftel', e:'%'},
      {id:'l1', t:'kumuliert bei 20 % der Haushalte', e:'%', f:'a1'},
      {id:'l2', t:'kumuliert bei 40 % der Haushalte', e:'%', f:'l1 + a2'},
      {id:'l3', t:'kumuliert bei 60 % der Haushalte', e:'%', f:'l2 + a3'},
      {id:'l4', t:'kumuliert bei 80 % der Haushalte', e:'%', f:'l3 + a4'},
      {id:'g', t:'Gini-Koeffizient', f:'1 - 0.2 * (l1 + (l1 + l2) + (l2 + l3) + (l3 + l4) + (l4 + 100)) / 100'}
    ],
    werte:[{a1:8, a2:13, a3:17, a4:23, a5:39}],
    sets:[[{a1:1, a2:4, a3:10, a4:20, a5:65}], [{a1:10, a2:15, a3:18, a4:22, a5:35}]],
    wahl:[{id:'w', t:'Was zeigt der Gini-Koeffizient?', opts:['0 = völlige Gleichverteilung, 1 = eine Person erhält alles; je weiter die Lorenzkurve unter der Diagonalen liegt, desto ungleicher.', '0 = völlige Ungleichverteilung, 1 = Gleichverteilung.', 'Er zeigt das Durchschnittseinkommen.'], r:'0'}],
    hinweise:['Gini = Fläche zwischen Diagonale und Lorenzkurve ÷ Fläche unter der Diagonalen.', 'Näherung mit Trapezen: 1 − 0,2 · Σ (kumulierter Vorwert + kumulierter Wert) ÷ 100.'],
    merke:'Lorenzkurve: kumulierte Haushaltsanteile vs. kumulierte Einkommensanteile · Diagonale = Gleichverteilung · Gini 0 bis 1 · Vermögen ist ungleicher verteilt als Einkommen.'}),
  blBau('zuordnung', {id:'VA3', modul:'VA', stufe:1, titel:'Instrumente der Verteilungspolitik', tags:T.concat(['Verteilung', 'Verteilungspolitik', 'Transfers']),
    text:'Ordne die Maßnahme zu.',
    kategorien:['Steuerpolitik (Leistungsfähigkeitsprinzip)', 'Transferzahlung', 'Vermögenspolitik'], anzahl:8,
    faelle:[
      {t:'progressiver Einkommensteuertarif', k:0}, {t:'Grundfreibetrag bei der Einkommensteuer', k:0}, {t:'Erbschaft- und Schenkungsteuer', k:0},
      {t:'Kindergeld', k:1}, {t:'Wohngeld', k:1}, {t:'Grundsicherung im Alter', k:1}, {t:'BAföG', k:1},
      {t:'Arbeitnehmersparzulage auf vermögenswirksame Leistungen', k:2}, {t:'Wohnungsbauprämie', k:2}
    ],
    hinweise:['Nehmen nach Leistungsfähigkeit – geben nach Bedarf – Vermögensbildung fördern.'],
    merke:'Umverteilung: Steuern nach Leistungsfähigkeit (Progression, Grundfreibetrag) · Transfers nach Bedarf (Fürsorgeprinzip: Kindergeld, Wohngeld, Grundsicherung) · Vermögenspolitik (Sparzulage, Prämien) · Ergebnis: Sekundärverteilung.'}),
  blBau('rechnung', {id:'VA4', modul:'VA', stufe:2, titel:'Armutsrisikoschwelle und Armutsrisikoquote', tags:T.concat(['Verteilung', 'Armut', 'Armutsrisikoquote']),
    text:'Angenommen: Das mittlere Nettoäquivalenzeinkommen (Median) beträgt {md} im Jahr. Von {n} Mio. Einwohnern liegen {a} Mio. unter der Armutsrisikoschwelle. Für einen Haushalt mit zwei Erwachsenen und zwei Kindern unter 14 Jahren gilt der Gewichtungsfaktor 2,1 (1 + 0,5 + 0,3 + 0,3).',
    kopf:'Größe',
    zeilen:[
      {id:'md', t:'Median Nettoäquivalenzeinkommen', e:'€', aus:true}, {id:'n', t:'Einwohner', e:'Mio.', aus:true}, {id:'a', t:'unter der Schwelle', e:'Mio.', aus:true},
      {id:'sw', t:'Armutsrisikoschwelle (60 % des Medians) je Jahr', e:'€', f:'md * 0.6'},
      {id:'sm', t:'Armutsrisikoschwelle je Monat', e:'€', f:'sw / 12'},
      {id:'sh', t:'Schwelle für den Vier-Personen-Haushalt je Monat', e:'€', f:'sm * 2.1'},
      {id:'aq', t:'Armutsrisikoquote', e:'%', f:'a / n * 100'}
    ],
    werte:[{md:28000, n:84, a:13}],
    sets:[[{md:27000, n:83.5, a:12.4}]],
    wahl:[{id:'w', t:'Was unterscheidet relative von absoluter Armut?', opts:['Absolute Armut: Grundbedürfnisse wie Nahrung und Unterkunft sind nicht gedeckt; relative Armut: deutlich weniger Einkommen als in der eigenen Gesellschaft üblich.', 'Beide Begriffe bedeuten dasselbe.', 'Relative Armut gibt es nur in Entwicklungsländern.'], r:'0'}],
    hinweise:['Armutsgefährdet ist, wer weniger als 60 % des Medians des Nettoäquivalenzeinkommens hat.'],
    merke:'Relative Armut: unter 60 % des Medians (Armutsrisikoquote) · absolute Armut: Existenzminimum nicht gesichert · Äquivalenzgewichte: 1 / 0,5 / 0,3 · Risikogruppen: Alleinerziehende, Arbeitslose, Geringqualifizierte, Ältere (Altersarmut) · Armuts- und Reichtumsbericht der Bundesregierung.'}),
  {
    id:'VA5', modul:'VA', typ:'berechnung', mehrfach:true, stufe:2, titel:'Gerechtigkeit und Armutsbekämpfung',
    tags:T.concat(['Verteilung', 'Leistungsgerechtigkeit', 'Bedarfsgerechtigkeit', 'Armut']),
    text:'In einer Talkshow wird über Verteilungspolitik gestritten.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Leistungsgerechtigkeit: Das Einkommen soll der am Markt erbrachten Leistung entsprechen (Primärverteilung).', richtig:true},
      {text:'Bedarfsgerechtigkeit: Jeder soll unabhängig von seiner Leistung ein menschenwürdiges Existenzminimum erhalten.', richtig:true},
      {text:'Die Sekundärverteilung entsteht durch staatliche Umverteilung mit Steuern, Sozialabgaben und Transfers.', richtig:true},
      {text:'Leistungsfähigkeitsprinzip: Wer mehr Einkommen hat, zahlt absolut und prozentual mehr Steuern (progressiver Tarif).', richtig:true},
      {text:'Beim Fürsorgeprinzip erhält nur Leistungen, wer vorher Beiträge gezahlt hat.', fehler:'Das ist das Versicherungsprinzip; Fürsorgeleistungen hängen vom Bedarf ab und werden aus Steuern finanziert.'},
      {text:'Altersarmut betrifft vor allem Menschen mit langen, gut bezahlten Erwerbsbiografien.', fehler:'Betroffen sind vor allem Menschen mit niedrigen Löhnen, Lücken im Erwerbsleben oder langer Teilzeit.'}
    ],
    hinweise:['Leistung oder Bedarf als Maßstab?'],
    merke:'Leistungs- vs. Bedarfsgerechtigkeit · Primär- und Sekundärverteilung · Leistungsfähigkeitsprinzip (Steuern) · Fürsorgeprinzip (Transfers nach Bedarf) · Armutsbekämpfung: Bildung, Mindestlohn, Transfers, Kinderbetreuung.'
  },

  /* ======================= AH · Freihandel und Protektionismus (BPE 23*) ======================= */
  blBau('zuordnung', {id:'AH1', modul:'AH', stufe:1, titel:'Warum handeln Länder miteinander?', tags:T.concat(['Außenwirtschaft', 'Außenhandel', 'Handelsgründe']),
    text:'Welcher Grund für den internationalen Handel liegt vor?',
    kategorien:['Nicht-Verfügbarkeit', 'Preis- bzw. Kostenunterschiede', 'intra-industrieller Handel'], anzahl:8,
    faelle:[
      {t:'Deutschland importiert Kaffee und Kakao.', k:0}, {t:'Deutschland bezieht seltene Erden aus dem Ausland.', k:0}, {t:'Frische Erdbeeren werden im Winter aus Südamerika eingeflogen.', k:0},
      {t:'Textilien werden wegen niedriger Lohnkosten in Bangladesch gefertigt.', k:1}, {t:'Solarmodule aus China sind deutlich günstiger als heimische.', k:1},
      {t:'Deutschland exportiert und importiert gleichzeitig Autos.', k:2}, {t:'Französischer Käse wird in Deutschland, deutscher Käse in Frankreich verkauft.', k:2},
      {t:'Ein Konzern liefert Bauteile zwischen seinen Werken in mehreren Ländern.', k:2}
    ],
    hinweise:['Gibt es das Gut im Inland nicht, ist es im Ausland billiger oder geht es um Vielfalt gleichartiger Güter?'],
    merke:'Handelsgründe: Nicht-Verfügbarkeit (Rohstoffe, Klima), Preis- und Kostenunterschiede (Löhne, Technik, Größenvorteile), intra-industrieller Handel (Produktdifferenzierung, Konsumentenpräferenzen, multinationale Unternehmen).'}),
  blBau('zuordnung', {id:'AH2', modul:'AH', stufe:1, titel:'Tarifäre oder nichttarifäre Handelshemmnisse?', tags:T.concat(['Außenwirtschaft', 'Protektionismus', 'Handelshemmnisse']),
    text:'Ordne das Handelshemmnis zu.',
    kategorien:['tarifäres Handelshemmnis', 'nichttarifäres Handelshemmnis'], anzahl:8,
    faelle:[
      {t:'Einfuhrzoll von 25 % auf Stahl', k:0}, {t:'Antidumpingzoll auf Fahrräder', k:0}, {t:'Ausgleichszoll gegen subventionierte Elektroautos', k:0},
      {t:'Einfuhrkontingent: höchstens 10.000 t pro Jahr', k:1}, {t:'technische Normen, die nur heimische Hersteller erfüllen', k:1}, {t:'Importlizenzen', k:1},
      {t:'Subventionen für heimische Exporteure', k:1}, {t:'Vorschrift, bei öffentlichen Aufträgen heimische Anbieter zu bevorzugen', k:1}, {t:'aufwendige Zollformalitäten', k:1}
    ],
    hinweise:['Tarifär = Zoll.'],
    merke:'Tarifär: Zölle (Schutz-, Antidumping-, Ausgleichszoll) · nichttarifär: Kontingente, Normen, Lizenzen, Subventionen, Bürokratie, „buy national“.'}),
  blBau('rechnung', {id:'AH3', modul:'AH', stufe:2, titel:'Die Wirkung eines Zolls', tags:T.concat(['Außenwirtschaft', 'Zoll', 'Protektionismus']),
    text:'Ein Land erhebt einen Zoll von {zs} auf importierte Waschmaschinen. Der Weltmarktpreis beträgt {pw}. Vor dem Zoll wurden {ma} Stück importiert, danach {mi} Stück.',
    kopf:'Größe',
    zeilen:[
      {id:'pw', t:'Weltmarktpreis', e:'€', aus:true}, {id:'zs', t:'Zollsatz', e:'%', aus:true}, {id:'ma', t:'Importe vor dem Zoll', aus:true}, {id:'mi', t:'Importe nach dem Zoll', aus:true},
      {id:'pi', t:'Inlandspreis der Importware mit Zoll', e:'€', f:'pw * (1 + zs / 100)'},
      {id:'ze', t:'Zolleinnahmen des Staates', e:'€', f:'mi * pw * zs / 100'},
      {id:'ir', t:'Rückgang der Importe', e:'%', f:'(ma - mi) / ma * 100'}
    ],
    werte:[{pw:400, zs:25, ma:2000000, mi:1500000}],
    sets:[[{pw:250, zs:20, ma:800000, mi:680000}]],
    wahl:[{id:'w', t:'Wer gewinnt, wer verliert durch den Zoll?', opts:['Inländische Hersteller und der Staat gewinnen; Verbraucher zahlen höhere Preise, Gegenzölle können Exporteure treffen.', 'Alle gewinnen.', 'Nur die ausländischen Hersteller gewinnen.'], r:'0'}],
    hinweise:['Zoll = Prozentsatz des Warenwerts.'],
    merke:'Zoll: Importpreis ↑, Importe ↓, inländische Anbieter geschützt, Staatseinnahmen · Verlierer: Verbraucher, weiterverarbeitende Industrie, Exporteure bei Gegenzöllen · Wohlfahrtsverlust.'}),
  {
    id:'AH4', modul:'AH', typ:'berechnung', mehrfach:true, stufe:2, titel:'Internationale Organisationen: EU, IWF und WTO',
    tags:T.concat(['Außenwirtschaft', 'WTO', 'IWF', 'EU']),
    text:'Internationale Organisationen sollen den Welthandel fördern und stabilisieren.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Die WTO setzt Regeln für den Welthandel, z. B. die Meistbegünstigung (Zollvorteile für ein Mitglied gelten für alle), und hat ein Verfahren zur Streitschlichtung.', richtig:true},
      {text:'Der IWF sichert die Stabilität des internationalen Währungs- und Finanzsystems und gibt Ländern mit Zahlungsbilanzproblemen Kredite gegen Auflagen.', richtig:true},
      {text:'Die EU ist eine Zollunion: Innerhalb gibt es keine Zölle, gegenüber Drittländern gilt ein gemeinsamer Außenzoll.', richtig:true},
      {text:'Die EU schließt Handelsabkommen für alle Mitgliedstaaten ab (gemeinsame Handelspolitik).', richtig:true},
      {text:'Jedes EU-Land legt eigene Zölle gegenüber den USA fest.', fehler:'Die Handelspolitik ist ausschließliche Zuständigkeit der EU; es gilt der gemeinsame Zolltarif.'},
      {text:'Der IWF finanziert vor allem Infrastrukturprojekte in Entwicklungsländern.', fehler:'Das ist vor allem Aufgabe der Weltbank.'}
    ],
    hinweise:['Handel – Währung – Binnenmarkt.'],
    merke:'WTO: Regeln (Meistbegünstigung, Inländerbehandlung), Zollsenkungen, Streitschlichtung · IWF: Währungsstabilität, Kredite bei Zahlungsbilanzkrisen · EU: Binnenmarkt, Zollunion, gemeinsame Handelspolitik.'
  },
  {
    id:'AH5', modul:'AH', typ:'berechnung', mehrfach:true, stufe:2, titel:'Gründe für Protektionismus beurteilen',
    tags:T.concat(['Außenwirtschaft', 'Protektionismus', 'Freihandel']),
    text:'Regierungen begründen Zölle und andere Handelshemmnisse unterschiedlich.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Schutz junger Industrien („Erziehungszoll“), bis sie international wettbewerbsfähig sind.', richtig:true},
      {text:'Sicherung von Arbeitsplätzen in bedrohten Branchen – kurzfristig wirksam, langfristig oft teuer für Verbraucher und hemmend für den Strukturwandel.', richtig:true},
      {text:'Versorgungssicherheit und Unabhängigkeit bei strategischen Gütern wie Chips oder Medikamenten.', richtig:true},
      {text:'Abwehr von Dumping und unfairen Subventionen anderer Länder.', richtig:true},
      {text:'Zölle schaden nur dem Ausland, nie dem eigenen Land.', fehler:'Verbraucher und Unternehmen zahlen höhere Preise, Vorprodukte werden teurer, Gegenzölle treffen die eigenen Exporteure.'},
      {text:'Handelskonflikte mit gegenseitigen Zöllen erhöhen in der Regel den Wohlstand aller beteiligten Länder.', fehler:'Sie verringern Handel, Wachstum und Wohlstand meist auf beiden Seiten.'}
    ],
    hinweise:['Kurzfristige Ziele gegen langfristige Kosten abwägen.'],
    merke:'Gründe für Protektionismus: Erziehungszoll, Arbeitsplätze, Versorgungssicherheit, Schutz vor Dumping, Staatseinnahmen, politische Macht · Folgen: höhere Preise, weniger Wettbewerb, Gegenzölle, Wohlstandsverluste · Freihandel: Spezialisierung, Vielfalt, Wettbewerb.'
  }
  ];
})(),
/* ---------- Volkswirtschaft · Wirtschaftsgymnasium Profil Finanzmanagement (WGF), J1 und J2 (BPE 15.4, 17.4, 19, 20) ----------
   IM Immobilienmarkt: Polypol auf dem unvollkommenen Markt (BPE 15.4) · WU Europäische Währungsunion: Probleme und Stabilisierung (BPE 17.4)
   OF Öffentliches Finanzwesen (BPE 19, mit Abiturfall) · FM Wechselkurse und internationale Finanzmärkte (BPE 20.3–20.4, mit Abiturfall BPE 20).
   Neu am 07.11.2026. Stand: Euroraum mit 21 Mitgliedern (Bulgarien seit 01.01.2026), Schuldenbremse nach der Grundgesetzänderung 2025,
   reformierte EU-Fiskalregeln seit 2024. */
...(() => {
  const T = ['Volkswirtschaft', 'Wirtschaftsgymnasium', 'Finanzmanagement'];
  return [
  /* ======================= IM · Immobilienmarkt: Polypol auf dem unvollkommenen Markt (BPE 15.4) ======================= */
  {
    id:'IM1', modul:'IM', typ:'berechnung', mehrfach:true, stufe:1, titel:'Der Immobilienmarkt als unvollkommener Markt',
    tags:T.concat(['Marktformen', 'unvollkommener Markt', 'Immobilienmarkt']),
    text:'Auf dem Wohnungsmarkt in Karlsruhe bieten viele private und gewerbliche Vermieter Wohnungen an, viele Haushalte fragen nach.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Es liegt ein Polypol vor, aber auf einem unvollkommenen Markt: Wohnungen sind nicht homogen (Lage, Größe, Ausstattung).', richtig:true},
      {text:'Der Immobilienmarkt besteht aus vielen heterogenen Teilmärkten, z. B. nach Region, Stadtteil, Objektart und Preissegment.', richtig:true},
      {text:'Es fehlt Markttransparenz; Suche und Vertragsabschluss kosten Zeit und Geld, Anpassungen erfolgen verzögert.', richtig:true},
      {text:'Nachfrager haben Präferenzen, z. B. für einen bestimmten Stadtteil, und wechseln bei kleinen Preisunterschieden nicht sofort.', richtig:true},
      {text:'Weil es viele Anbieter gibt, gilt auf dem Wohnungsmarkt ein einheitlicher Preis für alle Wohnungen.', fehler:'Wegen Heterogenität, Präferenzen und fehlender Transparenz gibt es unterschiedliche Preise; der einheitliche Preis gilt nur im vollkommenen Markt.'},
      {text:'Das Angebot an Wohnungen passt sich kurzfristig schnell an eine steigende Nachfrage an.', fehler:'Neubau dauert Jahre; das Angebot ist kurzfristig sehr unelastisch, deshalb steigen Preise bei Nachfrageschüben stark.'}
    ],
    hinweise:['Vollkommener Markt: homogene Güter, Transparenz, keine Präferenzen, unendliche Reaktionsgeschwindigkeit.'],
    merke:'Immobilienmarkt: Polypol auf unvollkommenem Markt · heterogene Teilmärkte · Präferenzen (räumlich, sachlich, persönlich, zeitlich) · geringe Transparenz · kurzfristig unelastisches Angebot.'
  },
  blBau('zuordnung', {id:'IM2', modul:'IM', stufe:1, titel:'Welche Präferenz liegt vor?', tags:T.concat(['unvollkommener Markt', 'Präferenzen', 'Immobilienmarkt']),
    text:'Ordne den Grund für die Wahl der Wohnung einer Präferenz zu.',
    kategorien:['räumliche Präferenz', 'sachliche Präferenz', 'persönliche Präferenz', 'zeitliche Präferenz'], anzahl:8,
    faelle:[
      {t:'nah am Arbeitsplatz und an der Schule der Kinder', k:0}, {t:'ruhige Lage am Stadtrand mit Blick ins Grüne', k:0},
      {t:'Balkon nach Süden und Einbauküche', k:1}, {t:'Neubau mit niedrigem Energieverbrauch', k:1},
      {t:'Der Vermieter ist ein alter Bekannter der Familie.', k:2}, {t:'Die Maklerin war besonders freundlich und hilfsbereit.', k:2},
      {t:'Die Wohnung ist sofort bezugsfertig.', k:3}, {t:'Der Verkäufer kann schneller einen Notartermin anbieten als andere.', k:3}
    ],
    hinweise:['Präferenzen machen einen Markt unvollkommen.'],
    merke:'Präferenzen: räumlich (Lage), sachlich (Eigenschaften), persönlich (Beziehung), zeitlich (Verfügbarkeit) · sie verschaffen Anbietern einen Preisspielraum.'}),
  {
    id:'IM3', modul:'IM', typ:'berechnung', mehrfach:true, stufe:2, titel:'Die doppelt geknickte Preis-Absatz-Kurve',
    tags:T.concat(['unvollkommener Markt', 'Preis-Absatz-Kurve', 'monopolistischer Preisspielraum']),
    text:'Ein Anbieter möblierter Apartments hat durch Lage und Service Stammkunden. Die Preis-Absatz-Kurve nach Gutenberg ist doppelt geknickt.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Im mittleren (monopolistischen) Bereich kann der Anbieter den Preis ändern, ohne viele Kunden zu verlieren oder zu gewinnen – die Nachfrage reagiert wenig.', richtig:true},
      {text:'Erhöht er den Preis über die obere Grenze, wandern viele Kunden trotz Präferenzen ab; die Nachfrage reagiert stark.', richtig:true},
      {text:'Senkt er den Preis unter die untere Grenze, gewinnt er viele Kunden der Konkurrenz hinzu.', richtig:true},
      {text:'Die Breite des monopolistischen Bereichs hängt von der Stärke der Präferenzen ab.', richtig:true},
      {text:'Im monopolistischen Bereich verhält sich der Anbieter wie ein Mengenanpasser und muss den Marktpreis hinnehmen.', fehler:'Im monopolistischen Bereich hat er Preisspielraum wie ein Monopolist; Mengenanpasser ist man im vollkommenen Polypol.'}
    ],
    hinweise:['Drei Abschnitte: oberer und unterer (polypolistischer) Bereich mit elastischer Nachfrage, mittlerer monopolistischer Bereich.'],
    merke:'Doppelt geknickte PAK: monopolistischer Preisspielraum zwischen oberer und unterer Preisgrenze (unelastische Nachfrage) · außerhalb stark elastisch · Gewinnmaximum meist im monopolistischen Bereich.'
  },
  blBau('rechnung', {id:'IM4', modul:'IM', stufe:3, titel:'Gewinnmaximum im monopolistischen Bereich', tags:T.concat(['unvollkommener Markt', 'Gewinnmaximum', 'Differenzialrechnung']),
    text:'Für den Apartmentanbieter gilt im monopolistischen Bereich (Monatsmiete zwischen {pu} und {po}) die Preis-Absatz-Funktion p(x) = {a} − {b} · x (x = Zahl der vermieteten Apartments). Die variablen Kosten betragen {kv} je Apartment und Monat, die Fixkosten {kf} im Monat. Gewinn: G(x) = (a − b · x) · x − (Kf + kv · x); im Maximum gilt G′(x) = a − 2b · x − kv = 0.',
    kopf:'Größe',
    zeilen:[
      {id:'pu', t:'untere Preisgrenze', e:'€', aus:true}, {id:'po', t:'obere Preisgrenze', e:'€', aus:true}, {id:'a', t:'Höchstpreis a', aus:true}, {id:'b', t:'Steigung b', aus:true}, {id:'kv', t:'variable Kosten', e:'€', aus:true}, {id:'kf', t:'Fixkosten', e:'€', aus:true},
      {id:'xs', t:'gewinnmaximale Zahl vermieteter Apartments', kurz:'gewinnmaximale Menge', f:'(a - kv) / (2 * b)'},
      {id:'ps', t:'gewinnmaximaler Preis', e:'€', f:'a - b * (a - kv) / (2 * b)'},
      {id:'ue', t:'Umsatz', e:'€', f:'(a - b * (a - kv) / (2 * b)) * (a - kv) / (2 * b)'},
      {id:'g', t:'maximaler Gewinn', e:'€', f:'(a - b * (a - kv) / (2 * b) - kv) * (a - kv) / (2 * b) - kf'}
    ],
    werte:[{pu:800, po:1300, a:1600, b:2, kv:400, kf:90000}],
    sets:[[{pu:850, po:1400, a:1800, b:2.5, kv:300, kf:100000}], [{pu:700, po:1200, a:1500, b:2, kv:300, kf:75000}]],
    wahl:[{id:'w', t:'Liegt das Gewinnmaximum im monopolistischen Bereich?', opts:['Ja, der gewinnmaximale Preis liegt zwischen der unteren und der oberen Preisgrenze.', 'Nein, er liegt über der oberen Grenze.', 'Nein, er liegt unter der unteren Grenze.'], r:'0'}],
    hinweise:['G′(x) = 0 → x = (a − kv) ÷ (2b).', 'Preis durch Einsetzen in p(x).'],
    merke:'Gewinnmaximum: Grenzerlös = Grenzkosten · lineare PAK: x* = (a − kv) ÷ 2b, p* = p(x*) · Prüfen, ob p* im monopolistischen Bereich liegt.'}),
  {
    id:'IM5', modul:'IM', typ:'berechnung', mehrfach:true, stufe:2, titel:'Spekulative Blasen auf Immobilienmärkten',
    tags:T.concat(['Immobilienmarkt', 'Spekulation', 'Blase']),
    text:'In einer Region steigen die Immobilienpreise seit Jahren deutlich schneller als Mieten und Einkommen. Viele kaufen, weil sie weitere Preissteigerungen erwarten.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Eine spekulative Blase entsteht, wenn Preise vor allem durch Erwartungen weiter steigender Preise getrieben werden und sich von Mieten und Einkommen lösen.', richtig:true},
      {text:'Niedrige Zinsen und großzügige Kreditvergabe können Blasen verstärken.', richtig:true},
      {text:'Platzt die Blase, sinken die Preise stark; Kreditnehmer sind dann überschuldet, Banken erleiden Ausfälle (z. B. US-Immobilienkrise 2007/08).', richtig:true},
      {text:'Ein hohes Kaufpreis-Miet-Verhältnis kann ein Warnsignal sein.', richtig:true},
      {text:'Immobilienpreise können nicht fallen, weil Boden knapp ist.', fehler:'Auch Immobilienpreise können deutlich sinken, z. B. bei steigenden Zinsen, Überangebot oder wirtschaftlichem Abschwung.'}
    ],
    hinweise:['Fundamentalwert: abgeleitet aus Mieten und Zinsen.'],
    merke:'Spekulative Blase: Preise über dem Fundamentalwert durch Erwartungen · Verstärker: niedrige Zinsen, Kreditboom, Herdenverhalten · Platzen: Preisverfall, Überschuldung, Bankenkrise.'
  },

  /* ======================= WU · Europäische Währungsunion (BPE 17.4) ======================= */
  {
    id:'WU1', modul:'WU', typ:'berechnung', mehrfach:true, stufe:1, titel:'One size fits all',
    tags:T.concat(['Währungsunion', 'EZB', 'Geldpolitik']),
    text:'In Land A des Euroraums liegt die Inflation bei 4 % und die Wirtschaft boomt, in Land B herrschen Rezession und hohe Arbeitslosigkeit. Die EZB legt einen Leitzins für alle 21 Euroländer fest.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Die einheitliche Geldpolitik orientiert sich am Durchschnitt des Euroraums; für einzelne Länder kann der Zins zu hoch oder zu niedrig sein.', richtig:true},
      {text:'Für Land A ist ein durchschnittlicher Leitzins eher zu niedrig, für Land B eher zu hoch.', richtig:true},
      {text:'Die Länder können nicht mehr abwerten, um wettbewerbsfähiger zu werden; Anpassungen müssen über Löhne, Preise und Produktivität erfolgen.', richtig:true},
      {text:'Deshalb kommt der nationalen Fiskalpolitik eine größere Rolle bei der Stabilisierung zu.', richtig:true},
      {text:'Die EZB kann für Land A und Land B unterschiedliche Leitzinsen festlegen.', fehler:'Es gibt nur einen Leitzins für den gesamten Euroraum.'}
    ],
    hinweise:['Ein Zins für 21 Länder mit unterschiedlicher Konjunktur.'],
    merke:'One size fits all: einheitlicher Leitzins trotz unterschiedlicher Konjunktur · kein Wechselkursinstrument mehr · Anpassung über Löhne, Preise, Fiskalpolitik.'
  },
  blBau('zuordnung', {id:'WU2', modul:'WU', stufe:2, titel:'Stabilisierung des Euro', tags:T.concat(['Währungsunion', 'ESM', 'Fiskalregeln', 'Bankenunion']),
    text:'Ordne die Einrichtung oder Regel zu.',
    kategorien:['Rettungsschirm und Krisenhilfe', 'Haushaltsregeln und Koordinierung', 'Bankenunion'], anzahl:8,
    faelle:[
      {t:'Europäischer Stabilitätsmechanismus (ESM): Kredite an Euroländer gegen Auflagen', k:0}, {t:'Hilfskredite in der Eurokrise für Griechenland, Irland und Portugal', k:0},
      {t:'Stabilitäts- und Wachstumspakt: Defizit max. 3 %, Schuldenstand max. 60 % des BIP', k:1}, {t:'nationale mittelfristige Ausgabenpfade nach den reformierten EU-Fiskalregeln', k:1}, {t:'Europäisches Semester: jährliche Abstimmung der Haushalts- und Wirtschaftspolitik', k:1},
      {t:'einheitliche Aufsicht über große Banken durch die EZB (SSM)', k:2}, {t:'einheitlicher Abwicklungsmechanismus für Banken (SRM)', k:2}, {t:'Einlagensicherung bis 100.000 € je Kunde und Bank', k:2}
    ],
    hinweise:['Krisenhilfe – Regeln für Staaten – Regeln für Banken.'],
    merke:'Stabilisierung: ESM (Rettungsschirm, Auflagen) · Fiskalregeln (3 %/60 %, Ausgabenpfade, Europäisches Semester) · Bankenunion (Aufsicht SSM, Abwicklung SRM, Einlagensicherung).'}),
  blBau('rechnung', {id:'WU3', modul:'WU', stufe:2, titel:'Fiskalregeln und Konvergenzkriterien prüfen', tags:T.concat(['Währungsunion', 'Konvergenzkriterien', 'Defizitquote', 'Schuldenquote']),
    text:'Ein Land möchte den Euro einführen. BIP {bip} Mrd. €, Haushaltsdefizit {df} Mrd. €, Staatsschulden {sc} Mrd. €, Inflationsrate {ir}. Die Inflationsraten der drei preisstabilsten EU-Länder betragen im Durchschnitt {rf}.',
    kopf:'Größe',
    zeilen:[
      {id:'bip', t:'BIP (Mrd. €)', aus:true}, {id:'df', t:'Defizit (Mrd. €)', aus:true}, {id:'sc', t:'Schulden (Mrd. €)', aus:true}, {id:'ir', t:'Inflationsrate', e:'%', aus:true}, {id:'rf', t:'Referenzwert der drei Besten', e:'%', aus:true},
      {id:'dq', t:'Defizitquote', e:'%', f:'df / bip * 100'},
      {id:'sq', t:'Schuldenstandsquote', e:'%', f:'sc / bip * 100'},
      {id:'ig', t:'zulässige Inflationsrate (Referenzwert + 1,5 Prozentpunkte)', kurz:'Inflationsgrenze', e:'%', f:'rf + 1.5'}
    ],
    werte:[{bip:120, df:4.2, sc:66, ir:3.1, rf:1.4}],
    sets:[[{bip:80, df:2, sc:52, ir:2.6, rf:1.3}], [{bip:250, df:9, sc:140, ir:2.9, rf:1.1}]],
    wahl:[{id:'w', t:'Welche Kriterien erfüllt das Land nicht?', opts:['Defizit und Inflation', 'nur den Schuldenstand', 'alle Kriterien sind erfüllt'], r:'(df / bip * 100 > 3 && ir > rf + 1.5) ? 0 : (sc / bip * 100 > 60 && df / bip * 100 <= 3) ? 1 : 2', weg:['Defizitquote über 3 % und Inflation über der Grenze.', 'Nur die Schuldenquote liegt über 60 %.', 'Alle Werte liegen innerhalb der Grenzen.']}],
    hinweise:['Defizitquote = Defizit ÷ BIP · 100 (Grenze 3 %).', 'Schuldenstandsquote = Schulden ÷ BIP · 100 (Grenze 60 %).'],
    merke:'Konvergenzkriterien: Defizit ≤ 3 % BIP, Schulden ≤ 60 % BIP (oder rückläufig), Inflation ≤ Durchschnitt der drei Besten + 1,5 Prozentpunkte, langfristige Zinsen ≤ + 2 Prozentpunkte, Wechselkursstabilität (WKM II).'}),
  {
    id:'WU4', modul:'WU', typ:'berechnung', mehrfach:true, stufe:2, titel:'Das Eurosystem und seine Unabhängigkeit',
    tags:T.concat(['Währungsunion', 'Eurosystem', 'Unabhängigkeit']),
    text:'Seit dem 1. Januar 2026 gehört Bulgarien als 21. Land zum Euroraum.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Das Eurosystem besteht aus der EZB und den nationalen Zentralbanken der Euroländer; das ESZB umfasst zusätzlich die Zentralbanken der übrigen EU-Länder.', richtig:true},
      {text:'Der EZB-Rat (Direktorium und Präsidenten der nationalen Zentralbanken des Euroraums) beschließt die Geldpolitik.', richtig:true},
      {text:'Die EZB ist unabhängig: Weder EU-Organe noch Regierungen dürfen ihr Weisungen erteilen; die direkte Finanzierung von Staaten ist verboten.', richtig:true},
      {text:'Die Unabhängigkeit soll verhindern, dass Regierungen kurzfristig Inflation in Kauf nehmen, um Ausgaben zu finanzieren.', richtig:true},
      {text:'Kritiker bemängeln die fehlende demokratische Kontrolle; die EZB legt deshalb gegenüber dem Europäischen Parlament Rechenschaft ab.', richtig:true},
      {text:'Die Bundesbank entscheidet weiterhin allein über die Leitzinsen in Deutschland.', fehler:'Die Bundesbank ist Teil des Eurosystems; über die Leitzinsen entscheidet der EZB-Rat für den gesamten Euroraum.'}
    ],
    hinweise:['Eurosystem ≠ ESZB.'],
    merke:'Eurosystem = EZB + nationale Zentralbanken des Euroraums (21 Länder) · EZB-Rat entscheidet · Unabhängigkeit und Verbot monetärer Staatsfinanzierung · Rechenschaft gegenüber dem Parlament.'
  },
  blBau('fall', {id:'WU5', modul:'WU', stufe:3, titel:'Krise in einem Euroland', tags:T.concat(['Währungsunion', 'Staatsschuldenkrise', 'Fallaufgabe']),
    text:'Ein Euroland hat eine Schuldenquote von 140 %. Nach einem Wirtschaftseinbruch steigen die Zinsen für seine Staatsanleihen von 3 % auf 7 %. Investoren fürchten einen Zahlungsausfall, Banken des Landes halten viele dieser Anleihen.',
    teile:[
      {op:'Erläutern Sie', t:'warum steigende Anleihezinsen die Lage verschärfen.', opts:['Neue Schulden werden teurer, die Zinslast steigt, das Defizit wächst – ein Teufelskreis aus Zinsen und Schulden.', 'Höhere Zinsen senken die Schulden automatisch.', 'Die Zinsen betreffen nur private Haushalte.'], r:0},
      {op:'Erläutern Sie', t:'die Gefahr für die Banken.', opts:['Fallen die Anleihekurse, verlieren Banken an Eigenkapital; Staats- und Bankenkrise verstärken sich gegenseitig.', 'Banken profitieren immer von höheren Zinsen.', 'Banken halten keine Staatsanleihen.'], r:0},
      {op:'Nennen Sie', t:'eine europäische Hilfe.', opts:['Kredite des ESM gegen Reform- und Sparauflagen', 'Abwertung der nationalen Währung', 'Die EZB senkt nur für dieses Land die Zinsen.'], r:0},
      {op:'Beurteilen Sie', t:'die Auflagen.', opts:['Sie sollen die Haushalte sanieren und Fehlanreize (Moral Hazard) verhindern, können aber die Rezession kurzfristig verschärfen.', 'Sie haben keine Nebenwirkungen.', 'Sie verpflichten Deutschland, die Schulden des Landes zu übernehmen.'], r:0}
    ],
    hinweise:['Teufelskreis aus Zinsen, Defiziten und Bankbilanzen.'],
    merke:'Staatsschuldenkrise: steigende Risikoaufschläge → höhere Zinslast → Teufelskreis mit Banken · Hilfe: ESM-Kredite gegen Auflagen, EZB-Instrumente unter Bedingungen · Konflikt: Solidarität vs. Moral Hazard.'}),

  /* ======================= OF · Öffentliches Finanzwesen (BPE 19) ======================= */
  blBau('zuordnung', {id:'OF1', modul:'OF', stufe:1, titel:'Bund, Länder oder Gemeinden?', tags:T.concat(['Öffentliche Finanzen', 'Gebietskörperschaften']),
    text:'Welche Gebietskörperschaft ist vor allem zuständig und trägt die Ausgaben?',
    kategorien:['Bund', 'Länder', 'Gemeinden'], anzahl:8,
    faelle:[
      {t:'Bundeswehr und Verteidigung', k:0}, {t:'Zuschüsse an die Rentenversicherung', k:0}, {t:'Autobahnen und Fernstraßen', k:0},
      {t:'Lehrkräfte an öffentlichen Schulen', k:1}, {t:'Polizei', k:1}, {t:'Hochschulen', k:1},
      {t:'Kindertagesstätten', k:2}, {t:'Müllabfuhr, Wasserversorgung und Abwasser', k:2}, {t:'Gemeindestraßen und Friedhöfe', k:2}
    ],
    hinweise:['Föderalismus: Aufgaben sind auf drei Ebenen verteilt.'],
    merke:'Gebietskörperschaften: Bund (Verteidigung, Soziales, Fernstraßen), Länder (Bildung, Polizei, Justiz), Gemeinden (Daseinsvorsorge, Kitas, Ver- und Entsorgung) · Finanzierung über Steuern, Gebühren, Beiträge, Kredite.'}),
  blBau('rechnung', {id:'OF2', modul:'OF', stufe:2, titel:'Staatsquote, Abgabenquote und Sozialleistungsquote', tags:T.concat(['Öffentliche Finanzen', 'Staatsquote', 'Abgabenquote', 'Sozialleistungsquote']),
    text:'Vereinfachte Daten einer Volkswirtschaft (Mrd. €): BIP {bip}, Staatsausgaben {sa}, Steuereinnahmen {st}, Sozialbeiträge {sb}, Sozialleistungen {sl}, Staatsschulden {sc}.',
    kopf:'Größe',
    zeilen:[
      {id:'bip', t:'BIP', aus:true}, {id:'sa', t:'Staatsausgaben', aus:true}, {id:'st', t:'Steuern', aus:true}, {id:'sb', t:'Sozialbeiträge', aus:true}, {id:'sl', t:'Sozialleistungen', aus:true}, {id:'sc', t:'Staatsschulden', aus:true},
      {id:'sq', t:'Staatsquote', e:'%', f:'sa / bip * 100'},
      {id:'aq', t:'Abgabenquote (Steuern + Sozialbeiträge)', kurz:'Abgabenquote', e:'%', f:'(st + sb) / bip * 100'},
      {id:'lq', t:'Sozialleistungsquote', e:'%', f:'sl / bip * 100'},
      {id:'dq', t:'Schuldenstandsquote', e:'%', f:'sc / bip * 100'}
    ],
    werte:[{bip:4300, sa:2130, st:1010, sb:720, sl:1340, sc:2690}],
    sets:[[{bip:4500, sa:2200, st:1060, sb:760, sl:1400, sc:2850}], [{bip:3900, sa:1870, st:900, sb:650, sl:1150, sc:2400}]],
    wahl:[{id:'w', t:'Was zeigt eine Staatsquote von fast 50 %?', opts:['Rund die Hälfte der Wirtschaftsleistung wird über öffentliche Haushalte und Sozialversicherungen ausgegeben; ein großer Teil davon sind Transfers.', 'Der Staat produziert die Hälfte aller Güter selbst.', 'Die Hälfte der Bevölkerung ist im öffentlichen Dienst beschäftigt.'], r:'0'}],
    hinweise:['Quote = Größe ÷ BIP · 100.'],
    merke:'Staatsquote = Staatsausgaben ÷ BIP · Abgabenquote = (Steuern + Sozialbeiträge) ÷ BIP · Sozialleistungsquote = Sozialleistungen ÷ BIP · Schuldenstandsquote = Schulden ÷ BIP (EU-Grenze 60 %).'}),
  {
    id:'OF3', modul:'OF', typ:'berechnung', mehrfach:true, stufe:1, titel:'Der Bundeshaushalt',
    tags:T.concat(['Öffentliche Finanzen', 'Bundeshaushalt', 'Funktionalplan']),
    text:'Der Bundestag beschließt jährlich das Haushaltsgesetz mit dem Bundeshaushalt.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Der größte Ausgabenposten des Bundes ist der Bereich Arbeit und Soziales, vor allem Zuschüsse an die Rentenversicherung.', richtig:true},
      {text:'Der Funktionalplan gliedert die Ausgaben nach Aufgabenbereichen, z. B. soziale Sicherung, Verteidigung, Bildung, Verkehr.', richtig:true},
      {text:'Die wichtigste Einnahmequelle sind Steuern; Gebühren und Beiträge sind Entgelte für bestimmte Leistungen.', richtig:true},
      {text:'Der Haushaltsplan hat Ordnungs-, Kontroll- und politische Funktion: Er ist „in Zahlen gegossene Politik“.', richtig:true},
      {text:'Verteidigung ist der größte Ausgabenposten des Bundeshaushalts.', fehler:'Trotz deutlich gestiegener Verteidigungsausgaben bleibt der Sozialbereich (Arbeit und Soziales) der größte Posten.'},
      {text:'Gemeinschaftsteuern wie Lohn-, Einkommen- und Umsatzsteuer erhält allein der Bund.', fehler:'Gemeinschaftsteuern werden zwischen Bund, Ländern und teilweise Gemeinden aufgeteilt.'}
    ],
    hinweise:['Steuern: keine Gegenleistung · Gebühren: für eine konkrete Leistung · Beiträge: für die Möglichkeit der Nutzung.'],
    merke:'Bundeshaushalt: größter Posten Arbeit und Soziales · Funktionalplan nach Aufgabenbereichen · Einnahmen: Steuern (Gemeinschaftsteuern verteilt), Gebühren, Beiträge, Kredite · Haushalt = politisches Programm.'
  },
  {
    id:'OF4', modul:'OF', typ:'berechnung', mehrfach:true, stufe:2, titel:'Staatsverschuldung: Ursachen, Grenzen, Folgen',
    tags:T.concat(['Öffentliche Finanzen', 'Staatsverschuldung', 'Schuldenbremse']),
    text:'Die Staatsverschuldung Deutschlands ist in den Krisenjahren deutlich gestiegen; 2025 wurde das Grundgesetz geändert.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Ursachen sind z. B. Rezessionen (automatische Stabilisatoren), Krisen wie Corona oder Energiepreisschocks, Investitionsbedarf sowie strukturelle Defizite.', richtig:true},
      {text:'Die Schuldenbremse erlaubt dem Bund ein strukturelles Defizit von höchstens 0,35 % des BIP; seit 2025 dürfen auch die Länder zusammen 0,35 % aufnehmen.', richtig:true},
      {text:'Seit der Grundgesetzänderung 2025 sind Verteidigungsausgaben über 1 % des BIP von der Schuldenbremse ausgenommen; zusätzlich gibt es ein Sondervermögen von 500 Mrd. € für Infrastruktur und Klimaneutralität.', richtig:true},
      {text:'Der Bund finanziert sich vor allem über Bundesanleihen und andere Wertpapiere, Gemeinden auch über Kommunalkredite.', richtig:true},
      {text:'Folgen hoher Verschuldung können steigende Zinslasten, geringere Spielräume für künftige Generationen und die Verdrängung privater Investitionen (Crowding-out) sein.', richtig:true},
      {text:'Die Schuldenbremse verbietet in Notlagen wie Naturkatastrophen jede zusätzliche Kreditaufnahme.', fehler:'Bei Naturkatastrophen und außergewöhnlichen Notsituationen kann der Bundestag Ausnahmen beschließen (mit Tilgungsplan).'}
    ],
    hinweise:['Schuldenbremse: Art. 109, 115 GG.'],
    merke:'Ursachen: Konjunktur, Krisen, strukturelle Defizite · Grenzen: Schuldenbremse (Bund 0,35 %, Länder zusammen 0,35 %, Ausnahmen Notlage und Verteidigung > 1 % BIP), EU-Regeln (3 %/60 %) · Instrumente: Bundesanleihen, Kommunalkredite · Folgen: Zinslast, Generationengerechtigkeit, Crowding-out.'
  },
  {
    id:'OF5', modul:'OF', typ:'berechnung', mehrfach:true, stufe:2, titel:'Public Private Partnership',
    tags:T.concat(['Öffentliche Finanzen', 'Public Private Partnership']),
    text:'Ein Landkreis lässt ein neues Schulzentrum von einem privaten Unternehmen bauen, finanzieren und 25 Jahre lang betreiben; dafür zahlt der Kreis jährlich ein festes Entgelt (Public Private Partnership, PPP).',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Der Kreis muss das Gebäude nicht sofort aus eigenen Mitteln bezahlen; die Belastung verteilt sich über die Laufzeit.', richtig:true},
      {text:'Private Partner können durch Know-how und Lebenszyklusbetrachtung (Bau und Betrieb aus einer Hand) effizienter sein.', richtig:true},
      {text:'Die langfristigen Zahlungsverpflichtungen wirken wirtschaftlich wie Schulden, erscheinen aber nicht immer als Kredit im Haushalt.', richtig:true},
      {text:'Risiken sind z. B. komplizierte Verträge, Renditeerwartungen des Privaten und geringere Flexibilität über Jahrzehnte.', richtig:true},
      {text:'PPP-Projekte sind für den Staat grundsätzlich billiger, weil Private günstigere Kredite erhalten als der Staat.', fehler:'Der Staat finanziert sich meist günstiger; ob PPP wirtschaftlicher ist, muss eine Wirtschaftlichkeitsuntersuchung im Einzelfall zeigen.'}
    ],
    hinweise:['PPP: Zusammenarbeit von öffentlicher Hand und Privatwirtschaft bei Bau, Finanzierung, Betrieb.'],
    merke:'PPP: Bau, Finanzierung, Betrieb durch Private gegen Entgelt · Vorteile: Effizienz, schnelle Umsetzung · Nachteile: versteckte Verschuldung, Vertragsrisiken, höhere Finanzierungskosten · Wirtschaftlichkeitsvergleich nötig.'
  },
  ...blAbi('rechnung', {id:'OF6', modul:'OF', titel:'Abiturfall: Mehr Schulden für Investitionen?', tags:T.concat(['Abiturfall', 'Öffentliche Finanzen', 'Staatsverschuldung', 'Schuldenbremse']),
    text:'Vereinfachte Daten eines Bundesstaates (Mrd. €): BIP {bip}, Staatsausgaben {sa}, Steuern {st}, Sozialbeiträge {sb}, Haushaltsdefizit {df}, Staatsschulden {sc}, Zinsausgaben {zi}. Die Regierung will zusätzlich {iv} Mrd. € im Jahr über Kredite für Schienen, Brücken und Schulen ausgeben. Die Opposition warnt vor einer Schuldenspirale.',
    zeilen:[
      {id:'bip', t:'BIP', aus:true}, {id:'sa', t:'Staatsausgaben', aus:true}, {id:'st', t:'Steuern', aus:true}, {id:'sb', t:'Sozialbeiträge', aus:true}, {id:'df', t:'Defizit', aus:true}, {id:'sc', t:'Schulden', aus:true}, {id:'zi', t:'Zinsausgaben', aus:true}, {id:'iv', t:'Investitionen', aus:true}
    ],
    werte:[{bip:4300, sa:2130, st:1010, sb:720, df:110, sc:2690, zi:60, iv:50}],
    sets:[[{bip:4500, sa:2200, st:1060, sb:760, df:120, sc:2850, zi:70, iv:60}]],
    felder:[
      {id:'sq', t:'a) Berechnen Sie die Staatsquote (%).', f:'sa / bip * 100', e:'%', kurz:'a) Staatsquote'},
      {id:'dq', t:'b) Berechnen Sie die Defizitquote nach den zusätzlichen Investitionen (%).', f:'(df + iv) / bip * 100', e:'%', kurz:'b) Defizitquote neu'},
      {id:'zs', t:'c) Berechnen Sie die Zinsausgaben in Prozent der Steuereinnahmen (Zins-Steuer-Quote, %).', f:'zi / st * 100', e:'%', kurz:'c) Zins-Steuer-Quote'},
      {id:'sn', t:'d) Berechnen Sie die Schuldenstandsquote nach einem Jahr mit dem neuen Defizit bei unverändertem BIP (%).', f:'(sc + df + iv) / bip * 100', e:'%', kurz:'d) Schuldenquote neu'}
    ],
    wahl:[
      {id:'w1', t:'e) Erörtern Sie, ob die zusätzlichen Kredite gerechtfertigt sind.', opts:['Investitionen können das Produktionspotenzial erhöhen und künftigen Generationen nützen (goldene Regel); dagegen stehen steigende Zinslast, EU-Grenzen und das Risiko, dass Mittel konsumtiv versickern.', 'Kredite sind immer schädlich, weil sie zurückgezahlt werden müssen.', 'Kredite sind unproblematisch, weil der Staat nicht insolvent werden kann.'], r:'0',
        frei:{muster:'Für die Kredite spricht: Öffentliche Investitionen in Schienen, Brücken und Bildung erhöhen das Produktionspotenzial; sie nutzen auch künftigen Generationen, die deshalb an der Finanzierung beteiligt werden dürfen. Unterlassene Investitionen hinterlassen ebenfalls Lasten. Dagegen spricht: Defizit- und Schuldenquote steigen (b, d) und überschreiten ggf. die EU-Grenzen; die Zinslast (c) engt künftige Spielräume ein; steigende Zinsen können private Investitionen verdrängen. Entscheidend sind wirksame Projekte, Planungs- und Baukapazitäten und eine klare Zweckbindung.', punkte:['Argument pro: Investitionen erhöhen Potenzial, Generationengerechtigkeit', 'Argument contra: Quoten, Zinslast, Crowding-out', 'Bezug zu den Berechnungen', 'begründetes Urteil']}},
      {id:'w2', t:'f) Erläutern Sie die Regeln der Schuldenbremse für den Bund.', opts:['strukturelles Defizit max. 0,35 % des BIP, konjunkturelle Komponente zulässig, Ausnahmen bei Notlagen und für Verteidigungsausgaben über 1 % des BIP; Sondervermögen Infrastruktur', 'kein Defizit erlaubt, keine Ausnahmen', 'Defizit bis 3 % des BIP ohne weitere Regeln'], r:'0',
        frei:{muster:'Der Bund darf ein strukturelles, also konjunkturbereinigtes, Defizit von höchstens 0,35 % des BIP aufweisen. Im Abschwung sind zusätzliche konjunkturbedingte Kredite erlaubt, die im Aufschwung zurückgeführt werden. In Naturkatastrophen und außergewöhnlichen Notlagen kann der Bundestag Ausnahmen mit Tilgungsplan beschließen. Seit 2025 sind Verteidigungsausgaben über 1 % des BIP ausgenommen, und ein Sondervermögen von 500 Mrd. € finanziert Infrastruktur und Klimaneutralität.', punkte:['strukturell 0,35 % BIP', 'Konjunkturkomponente', 'Notlagenklausel', 'Ausnahmen 2025 (Verteidigung, Sondervermögen)']}}
    ],
    hinweise:['Quote = Größe ÷ BIP · 100.', 'Neue Schulden = alte Schulden + Defizit.'],
    merke:'Staatsquote, Defizit-, Schulden- und Zins-Steuer-Quote · Schuldenbremse und EU-Regeln · Abwägung: Investitionen und Generationengerechtigkeit vs. Zinslast und Crowding-out.'}),

  /* ======================= FM · Wechselkurse und internationale Finanzmärkte (BPE 20.3, 20.4) ======================= */
  blBau('zuordnung', {id:'FM1', modul:'FM', stufe:1, titel:'Euro: Aufwertung oder Abwertung?', tags:T.concat(['Außenwirtschaft', 'Wechselkurs', 'Devisenmarkt']),
    text:'Wie wirkt das Ereignis bei flexiblen Wechselkursen tendenziell auf den Außenwert des Euro gegenüber dem US-Dollar?',
    kategorien:['Aufwertung des Euro', 'Abwertung des Euro'], anzahl:8,
    faelle:[
      {t:'Die EZB erhöht die Leitzinsen, die US-Notenbank nicht (Zinsparität).', k:0}, {t:'Die US-Notenbank senkt die Zinsen deutlich.', k:0},
      {t:'Die Inflation im Euroraum ist dauerhaft niedriger als in den USA (Kaufkraftparität).', k:0}, {t:'Die USA kaufen deutlich mehr Waren aus dem Euroraum.', k:0},
      {t:'Die Inflation im Euroraum ist deutlich höher als in den USA.', k:1}, {t:'Anleger erwarten eine Schuldenkrise im Euroraum und ziehen Kapital ab.', k:1},
      {t:'Europäische Unternehmen investieren massiv in den USA.', k:1}, {t:'Die US-Zinsen steigen stärker als die im Euroraum.', k:1}
    ],
    hinweise:['Mehr Nachfrage nach Euro → Aufwertung · mehr Angebot an Euro → Abwertung.'],
    merke:'Einflussfaktoren: Zinsparität (Kapital fließt zu höheren Zinsen), Kaufkraftparität (höhere Inflation → Abwertung), Erwartungen, Handelsströme · Mengennotierung: mehr US-Dollar je Euro = Aufwertung.'}),
  blBau('rechnung', {id:'FM2', modul:'FM', stufe:2, titel:'Kaufkraftparität und Exporterlös', tags:T.concat(['Außenwirtschaft', 'Wechselkurs', 'Kaufkraftparität']),
    text:'Ein vergleichbarer Warenkorb kostet im Euroraum {pe} € und in den USA {pu} US-Dollar. Am Devisenmarkt notiert der Euro bei {k1} US-Dollar je Euro. Ein deutscher Maschinenbauer hat eine Maschine für {ve} US-Dollar an einen US-Kunden verkauft; bis zur Zahlung steigt der Kurs auf {k2} US-Dollar je Euro.',
    kopf:'Größe',
    zeilen:[
      {id:'pe', t:'Warenkorb Euroraum (€)', aus:true}, {id:'pu', t:'Warenkorb USA (US-$)', aus:true}, {id:'k1', t:'Kurs bei Vertragsabschluss', aus:true}, {id:'ve', t:'Verkaufspreis (US-$)', aus:true}, {id:'k2', t:'Kurs bei Zahlung', aus:true},
      {id:'kp', t:'Wechselkurs nach Kaufkraftparität (US-$ je €)', kurz:'Kurs nach Kaufkraftparität', f:'pu / pe'},
      {id:'ub', t:'Über- oder Unterbewertung des Euro (+ = Überbewertung)', kurz:'Bewertung des Euro', e:'%', f:'(k1 - pu / pe) / (pu / pe) * 100'},
      {id:'e1', t:'erwarteter Erlös in € bei Vertragsabschluss', e:'€', f:'ve / k1'},
      {id:'e2', t:'tatsächlicher Erlös in € bei Zahlung', e:'€', f:'ve / k2'},
      {id:'wv', t:'Währungsverlust', e:'€', f:'ve / k1 - ve / k2'}
    ],
    werte:[{pe:1000, pu:1150, k1:1.08, ve:540000, k2:1.2}],
    sets:[[{pe:800, pu:960, k1:1.1, ve:330000, k2:1.2}], [{pe:1200, pu:1320, k1:1.15, ve:460000, k2:1.25}]],
    wahl:[{id:'w', t:'Wie kann sich der Maschinenbauer gegen das Risiko absichern?', opts:['Devisentermingeschäft (Kurs vorab festlegen) oder in Euro fakturieren', 'gar nicht, Wechselkursrisiken sind nicht absicherbar', 'den Preis nachträglich in US-Dollar erhöhen'], r:'0'}],
    hinweise:['Kaufkraftparität: Kurs = Preis USA ÷ Preis Euroraum.', 'Erlös in € = Betrag in US-$ ÷ Kurs.'],
    merke:'Kaufkraftparität: Wechselkurs gleicht Preisniveaus aus (langfristig) · Aufwertung des Euro senkt Euro-Erlöse von Exporteuren · Absicherung: Termingeschäft, Fakturierung in Euro.'}),
  {
    id:'FM3', modul:'FM', typ:'berechnung', mehrfach:true, stufe:2, titel:'Instabile Finanzmärkte',
    tags:T.concat(['Finanzmärkte', 'Finanzkrise', 'Spekulation']),
    text:'Die Finanzkrise 2007/08 begann mit faulen Immobilienkrediten in den USA und erfasste die Weltwirtschaft.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Ursachen instabiler Finanzmärkte sind z. B. hohe Verschuldung (Leverage), Spekulationsblasen, Herdenverhalten und undurchsichtige Finanzprodukte.', richtig:true},
      {text:'Weil Banken eng verflochten sind, kann die Schieflage einer Bank auf andere übergreifen (Ansteckung, systemisches Risiko).', richtig:true},
      {text:'Große Banken können darauf setzen, im Notfall gerettet zu werden („too big to fail“), und gehen deshalb höhere Risiken ein.', richtig:true},
      {text:'Plötzliche Kapitalabflüsse können in Schwellenländern Währungskrisen und starke Abwertungen auslösen.', richtig:true},
      {text:'Finanzkrisen betreffen nur Banken, nicht die Realwirtschaft.', fehler:'Über Kreditklemme, Vermögensverluste und Vertrauensverlust sinken Investitionen und Konsum; es folgen Rezession und Arbeitslosigkeit.'}
    ],
    hinweise:['Systemisches Risiko: der Ausfall eines Instituts gefährdet das Gesamtsystem.'],
    merke:'Ursachen: Leverage, Blasen, Herdenverhalten, Intransparenz, Fehlanreize (too big to fail) · Gefahren: Ansteckung, Kreditklemme, Rezession, Währungskrisen.'
  },
  blBau('zuordnung', {id:'FM4', modul:'FM', stufe:2, titel:'Wer stabilisiert die Finanzmärkte?', tags:T.concat(['Finanzmärkte', 'IWF', 'EZB', 'Bankenaufsicht']),
    text:'Ordne die Aufgabe der Institution bzw. Regelung zu.',
    kategorien:['Internationaler Währungsfonds (IWF)', 'Europäische Zentralbank', 'Bankenaufsicht und -regulierung'], anzahl:8,
    faelle:[
      {t:'vergibt Kredite an Länder mit Zahlungsbilanzproblemen gegen wirtschaftspolitische Auflagen', k:0}, {t:'überwacht die Wirtschafts- und Wechselkurspolitik seiner Mitgliedsländer', k:0},
      {t:'stellt Banken in Krisen Liquidität zur Verfügung (Kreditgeber der letzten Instanz)', k:1}, {t:'beaufsichtigt im Einheitlichen Aufsichtsmechanismus direkt die bedeutenden Banken des Euroraums', k:1},
      {t:'Eigenkapitalvorschriften nach Basel III', k:2}, {t:'Liquiditätsvorschriften und Stresstests', k:2}, {t:'Regeln für die geordnete Abwicklung von Banken (Bail-in statt Steuergeld)', k:2},
      {t:'Die Europäische Bankenaufsichtsbehörde (EBA) erarbeitet einheitliche Aufsichtsstandards.', k:2}
    ],
    hinweise:['IWF: Länder · EZB: Liquidität und Aufsicht im Euroraum · Regulierung: Regeln für Banken.'],
    merke:'Stabilisierung: IWF (Kredite gegen Auflagen, Überwachung) · EZB (Liquidität, Bankenaufsicht SSM) · Regulierung (Basel III, Stresstests, Abwicklung mit Bail-in, EBA).'}),
  ...blAbi('fall', {id:'FM5', modul:'FM', titel:'Abiturfall: Der starke Euro und die Exportwirtschaft', tags:T.concat(['Abiturfall', 'Außenwirtschaft', 'Zahlungsbilanz', 'Wechselkurs', 'Finanzmärkte']),
    text:'Deutschland weist seit Jahren hohe Leistungsbilanzüberschüsse auf (rund 5 % des BIP). Nachdem die EZB die Leitzinsen erhöht hat, während die US-Notenbank die Zinsen senkt, steigt der Euro von 1,05 auf 1,20 US-Dollar. Exportorientierte Unternehmen klagen, zugleich warnen Ökonomen vor Kapitalabflüssen aus Schwellenländern.',
    teile:[
      {op:'Erläutern Sie', t:'was ein Leistungsbilanzüberschuss bedeutet und wie er in der Zahlungsbilanz ausgeglichen wird.', opts:['Exporte von Waren und Dienstleistungen übersteigen die Importe (inkl. Primär- und Sekundäreinkommen); dem steht ein Nettokapitalexport in der Kapitalbilanz gegenüber.', 'Deutschland importiert mehr als es exportiert; das wird über die Devisenbilanz der Haushalte ausgeglichen.', 'Die Zahlungsbilanz ist dann nicht ausgeglichen.'], r:0,
        frei:{muster:'In der Leistungsbilanz übersteigen die Einnahmen aus Exporten von Waren und Dienstleistungen sowie aus Primär- und Sekundäreinkommen die entsprechenden Ausgaben. Formal ist die Zahlungsbilanz immer ausgeglichen: Dem Überschuss steht ein Nettokapitalexport in der Kapitalbilanz gegenüber, d. h. Deutschland erwirbt per Saldo Forderungen gegenüber dem Ausland (z. B. Wertpapiere, Direktinvestitionen).', punkte:['Exporte > Importe (Leistungsbilanz)', 'Ausgleich durch Kapitalbilanz', 'Nettokapitalexport/Forderungen ans Ausland']}},
      {op:'Erklären Sie', t:'die Aufwertung des Euro.', opts:['Zinsparität: Höhere Euro-Zinsen und sinkende US-Zinsen ziehen Kapital in den Euroraum; die Nachfrage nach Euro steigt.', 'Weil Deutschland weniger exportiert, sinkt die Euro-Nachfrage.', 'Die EZB legt den Wechselkurs fest.'], r:0,
        frei:{muster:'Bei flexiblen Wechselkursen bestimmen Angebot und Nachfrage am Devisenmarkt den Kurs. Durch die Zinserhöhung der EZB und die Zinssenkung in den USA werden Anlagen im Euroraum attraktiver (Zinsparität). Anleger tauschen US-Dollar in Euro; die Nachfrage nach Euro steigt, der Euro wertet auf. Die hohen Exportüberschüsse verstärken die Euro-Nachfrage zusätzlich.', punkte:['Zinsdifferenz/Zinsparität', 'Kapitalzufluss → Nachfrage nach Euro', 'flexible Kurse: Angebot/Nachfrage']}},
      {op:'Ermitteln Sie', t:'den Euro-Erlös einer Exportrechnung über 1,2 Mio. US-Dollar vor und nach der Aufwertung.', opts:['1.142.857,14 € vorher, 1.000.000 € nachher', '1.260.000 € vorher, 1.440.000 € nachher', 'unverändert 1,2 Mio. €'], r:0, weg:'1.200.000 ÷ 1,05 = 1.142.857,14 € · 1.200.000 ÷ 1,20 = 1.000.000 €.'},
      {op:'Beurteilen Sie', t:'die Folgen der Aufwertung für Deutschland.', opts:['Exporte werden im Ausland teurer, Importe (z. B. Energie) billiger; die Exportwirtschaft verliert Wettbewerbsfähigkeit, Inflation und Leistungsbilanzüberschuss sinken tendenziell.', 'Nur Vorteile: Exporte werden billiger.', 'Keine Auswirkungen, da der Euroraum geschlossen ist.'], r:0,
        frei:{muster:'Die Aufwertung verteuert deutsche Waren im Dollarraum bzw. senkt die Euro-Erlöse der Exporteure; Absatz und Margen geraten unter Druck, Arbeitsplätze in der Exportindustrie können betroffen sein. Gleichzeitig werden Importe – vor allem in Dollar abgerechnete Energie und Rohstoffe – billiger; das dämpft die Inflation und stärkt die Kaufkraft der Verbraucher. Der Leistungsbilanzüberschuss sinkt tendenziell, was internationale Ungleichgewichte verringert.', punkte:['Exporte teurer/Erlöse sinken', 'Importe billiger, Inflation sinkt', 'Leistungsbilanzüberschuss sinkt', 'Abwägung Gewinner/Verlierer']}},
      {op:'Erläutern Sie', t:'warum Schwellenländer gefährdet sind und wer helfen kann.', opts:['Kapitalabflüsse führen zu Abwertung und erschweren die Bedienung von Schulden in Fremdwährung; der IWF kann mit Krediten gegen Auflagen stabilisieren.', 'Schwellenländer profitieren immer von steigenden Zinsen in Europa.', 'Nur die WTO kann helfen.'], r:0,
        frei:{muster:'Steigen die Zinsen in den Industrieländern, ziehen Anleger Kapital aus Schwellenländern ab. Deren Währungen werten ab; Schulden in US-Dollar oder Euro werden in heimischer Währung teurer, Banken und Unternehmen geraten in Schwierigkeiten (Ansteckungsgefahr). Der IWF kann mit Krediten gegen wirtschaftspolitische Auflagen helfen und die Wirtschaftspolitik überwachen.', punkte:['Kapitalabfluss, Abwertung', 'Fremdwährungsschulden werden teurer', 'Ansteckung/Instabilität', 'IWF-Kredite gegen Auflagen']}}
    ],
    hinweise:['Zahlungsbilanz: Leistungsbilanz + Vermögensänderungsbilanz = Kapitalbilanz (+ Restposten).', 'Euro-Erlös = US-$-Betrag ÷ Kurs.'],
    merke:'Leistungsbilanzüberschuss ↔ Nettokapitalexport · Zinsparität: Zinsdifferenz bewegt Kapital und Kurse · Aufwertung: Exporte teurer, Importe billiger · Finanzmarktinstabilität: Kapitalflucht, IWF.'})
  ];
})(),
/* ---------- Volkswirtschaft · WG Profil Internationale Wirtschaft (WGI), bilinguale BPE auf Englisch ----------
   XA Introduction to economics (BPE 1) · XI Behaviour of market participants (BPE 17) · XJ Price determination in perfectly competitive markets (BPE 18.1–18.2)
   XM Foreign trade and globalisation (BPE 22) · XL Sustainable development and alternative welfare concepts (BPE 23) – jeweils mit Abiturfall. Neu am 07.11.2026. */
...(() => {
  const T = ['Volkswirtschaft', 'Wirtschaftsgymnasium', 'Internationale Wirtschaft', 'English'];
  const W = 'Which statements are correct?';
  return [
  /* ======================= XA · Introduction to economics (BPE 1) ======================= */
  blBau('zuordnung', {id:'XA1', modul:'XA', stufe:1, titel:'Types of goods', tags:T.concat(['goods', 'scarcity']),
    text:'Classify the good according to rivalry in consumption and excludability.',
    kategorien:['private good', 'public good', 'common good (common-pool resource)', 'club good'], anzahl:8,
    faelle:[
      {t:'a sandwich bought in the canteen', k:0}, {t:'a smartphone', k:0},
      {t:'street lighting', k:1}, {t:'national defence', k:1},
      {t:'fish in the open sea', k:2}, {t:'clean air in a city', k:2},
      {t:'a streaming subscription', k:3}, {t:'a private golf course with membership fee', k:3}
    ],
    hinweise:['Rival: one person’s use reduces availability for others · excludable: people who do not pay can be excluded.'],
    merke:'Private goods: rival and excludable · public goods: non-rival, non-excludable (free-rider problem) · common goods: rival, non-excludable (overuse) · club goods: non-rival, excludable.'}),
  {
    id:'XA2', modul:'XA', typ:'berechnung', mehrfach:true, stufe:1, titel:'Scarcity, needs and the economic principle',
    tags:T.concat(['scarcity', 'needs', 'economic principle', 'factors of production']),
    text:'Economics deals with the problem of scarce resources and unlimited wants.',
    frage:W,
    optionen:[
      {text:'Because resources are scarce compared with wants, people must make choices; every choice has opportunity costs.', richtig:true},
      {text:'Maximum principle: achieve the greatest possible output with given resources; minimum principle: achieve a given output with the fewest resources.', richtig:true},
      {text:'The basic economic questions are: What, how much, how and for whom to produce – and who decides?', richtig:true},
      {text:'Factors of production are land (nature), labour and capital; education (human capital) and information are increasingly important.', richtig:true},
      {text:'Free goods such as sunlight have a price because everybody needs them.', fehler:'Free goods are available in unlimited quantities and have no price; only scarce (economic) goods have a price.'},
      {text:'The economic principle means achieving the maximum output with the minimum input at the same time.', fehler:'This is logically impossible; the principle is either a maximum or a minimum principle.'}
    ],
    hinweise:['Scarcity forces choices.'],
    merke:'Scarcity → choices → opportunity costs · economic principle: maximum or minimum principle · basic economic questions · factors of production: land, labour, capital (+ human capital, information).'
  },
  blBau('rechnung', {id:'XA3', modul:'XA', stufe:2, titel:'Production possibilities and opportunity costs', tags:T.concat(['production possibility curve', 'opportunity costs']),
    text:'A country can produce either {xa} units of food or {xb} units of computers per year with all its resources (linear production possibility curve). At the moment it produces {fa} units of food.',
    kopf:'Production possibilities',
    zeilen:[
      {id:'xa', t:'maximum food', aus:true}, {id:'xb', t:'maximum computers', aus:true}, {id:'fa', t:'current food production', aus:true},
      {id:'oc', t:'opportunity costs of 1 computer (units of food)', kurz:'opportunity costs of 1 computer', f:'xa / xb'},
      {id:'of', t:'opportunity costs of 1 unit of food (computers)', kurz:'opportunity costs of 1 unit of food', f:'xb / xa'},
      {id:'cp', t:'maximum number of computers at current food production', kurz:'possible computers', f:'(xa - fa) * xb / xa'}
    ],
    werte:[{xa:1000, xb:250, fa:600}],
    sets:[[{xa:800, xb:400, fa:300}], [{xa:1200, xb:300, fa:900}]],
    wahl:[{id:'w', t:'What does a point inside the curve mean?', opts:['Resources are not fully used (e.g. unemployment) – production is inefficient.', 'The country produces more than possible.', 'The country is perfectly efficient.'], r:'0'}],
    hinweise:['Opportunity costs = what you have to give up for one more unit.'],
    merke:'Production possibility curve: all efficient combinations · points inside: inefficient · outside: not attainable (yet) · slope = opportunity costs · economic growth shifts the curve outwards.'}),
  blBau('zuordnung', {id:'XA4', modul:'XA', stufe:2, titel:'Functions of money and economic systems', tags:T.concat(['money', 'economic systems', 'circular flow']),
    text:'Assign the statement.',
    kategorien:['function of money', 'free market economy', 'centrally planned economy'], anzahl:8,
    faelle:[
      {t:'medium of exchange', k:0}, {t:'unit of account (measure of value)', k:0}, {t:'store of value', k:0},
      {t:'Prices are determined by supply and demand; private ownership of the means of production.', k:1}, {t:'Households and firms plan independently; coordination via markets.', k:1},
      {t:'A state authority decides what and how much is produced.', k:2}, {t:'Collective ownership of the means of production; prices are fixed by the state.', k:2}, {t:'Shortages and waiting lists are typical because plans do not match needs.', k:2}
    ],
    hinweise:['Money makes a specialised economy possible.'],
    merke:'Functions of money: medium of exchange, unit of account, store of value (also crypto/mobile money as substitutes) · circular flow of goods and money between households and firms · free market vs. centrally planned economy.'}),
  blBau('rechnung', {id:'XA5', modul:'XA', stufe:2, titel:'Equilibrium price at a commodity exchange', tags:T.concat(['market', 'equilibrium price']),
    text:'At a commodity exchange, buyers and sellers place orders for coffee (price per kg).'
      + '<div style="overflow-x:auto;margin:6px 0 8px"><table style="border-collapse:collapse;font-size:.86rem"><tr><th style="border:1px solid var(--linie);padding:3px 8px">price</th><th style="border:1px solid var(--linie);padding:3px 8px">demand (kg)</th><th style="border:1px solid var(--linie);padding:3px 8px">supply (kg)</th></tr>'
      + '<tr><td style="border:1px solid var(--linie);padding:3px 8px">{p1}</td><td style="border:1px solid var(--linie);padding:3px 8px">{d1}</td><td style="border:1px solid var(--linie);padding:3px 8px">{s1}</td></tr>'
      + '<tr><td style="border:1px solid var(--linie);padding:3px 8px">{p2}</td><td style="border:1px solid var(--linie);padding:3px 8px">{d2}</td><td style="border:1px solid var(--linie);padding:3px 8px">{s2}</td></tr>'
      + '<tr><td style="border:1px solid var(--linie);padding:3px 8px">{p3}</td><td style="border:1px solid var(--linie);padding:3px 8px">{d3}</td><td style="border:1px solid var(--linie);padding:3px 8px">{s3}</td></tr></table></div>',
    kopf:'Exchange',
    zeilen:[
      {id:'p1', t:'price 1', e:'€', aus:true}, {id:'d1', t:'demand 1', aus:true}, {id:'s1', t:'supply 1', aus:true},
      {id:'p2', t:'price 2', e:'€', aus:true}, {id:'d2', t:'demand 2', aus:true}, {id:'s2', t:'supply 2', aus:true},
      {id:'p3', t:'price 3', e:'€', aus:true}, {id:'d3', t:'demand 3', aus:true}, {id:'s3', t:'supply 3', aus:true},
      {id:'u1', t:'quantity traded at price 1', f:'min(d1, s1)'},
      {id:'u2', t:'quantity traded at price 2', f:'min(d2, s2)'},
      {id:'u3', t:'quantity traded at price 3', f:'min(d3, s3)'},
      {id:'ue', t:'excess supply at price 3', f:'s3 - d3'}
    ],
    werte:[{p1:4, d1:900, s1:500, p2:5, d2:750, s2:750, p3:6, d3:600, s3:950}],
    sets:[[{p1:7, d1:1200, s1:700, p2:8, d2:1000, s2:1000, p3:9, d3:800, s3:1300}], [{p1:3, d1:650, s1:300, p2:3.5, d2:520, s2:520, p3:4, d3:400, s3:700}]],
    wahl:[{id:'w', t:'Which price is the equilibrium price?', opts:['price 2: the traded quantity is highest, demand equals supply', 'price 1: demand is highest', 'price 3: supply is highest'], r:'0'}],
    hinweise:['Traded quantity = the smaller of demand and supply.'],
    merke:'Equilibrium price: quantity traded is maximised, demand = supply, market is cleared · functions of the price: signalling, rationing, allocation, steering.'}),
  ...blAbi('fall', {id:'XA6', modul:'XA', titel:'Abiturfall: Fishing in the Baltic Sea', tags:T.concat(['Abiturfall', 'common goods', 'homo oeconomicus', 'externalities', 'sustainability']),
    text:'Cod stocks in the Baltic Sea have collapsed. For decades, fishing companies from several countries caught as much as possible because each company expected the others to do the same. Scientists recommend a total ban for several years; fishermen fear for their jobs. Consumers keep buying cheap fish.',
    teile:[
      {op:'Explain', t:'why the fish stocks were overused.', opts:['Fish in the open sea is a common good: rival but non-excludable – individually rational fishing leads to collectively irrational overuse (tragedy of the commons).', 'Fish is a public good, so nobody wanted it.', 'The fish stocks were a club good with high membership fees.'], r:0,
        frei:{muster:'Fish in the open sea is a common good: consumption is rival (each fish caught is no longer available for others), but nobody can be excluded. For each company it is individually rational to catch as much as possible, because fish it leaves in the sea will be caught by others. Collectively, this leads to overuse and the collapse of the stocks (tragedy of the commons; individual vs. collective rationality).', punkte:['common good: rival, non-excludable', 'individual vs. collective rationality', 'overuse/tragedy of the commons']}},
      {op:'Discuss', t:'whether the model of homo oeconomicus explains the behaviour.', opts:['Partly: self-interest explains overfishing, but real people also consider fairness and future generations; cooperation is possible with rules and trust.', 'Completely: people never cooperate.', 'Not at all: fishermen do not act in their own interest.'], r:0,
        frei:{muster:'Homo oeconomicus acts purely rationally and in his own interest – this explains why each company fished as much as possible. In reality, people also act altruistically and fairly, as experiments like the ultimatum game show, and many fishermen want to preserve stocks for future generations. However, without binding rules and trust in others’ cooperation, the free-rider problem dominates. The model is a useful simplification, not a complete description.', punkte:['model assumptions', 'explains overfishing', 'limits: fairness, altruism, cooperation', 'conclusion']}},
      {op:'Assess', t:'the fishing ban from different perspectives.', opts:['Ecologically necessary for recovery and future catches; socially hard for fishermen (transitional support needed); economically sensible in the long term – an example of sustainable development.', 'Only the fishermen’s short-term income matters.', 'A ban has no effect on fish stocks.'], r:0,
        frei:{muster:'Ecologically, a ban allows the stocks to recover – the basis for future catches. Economically and socially, fishermen lose income and jobs in the short term; regions may need transitional aid or retraining. In the long term, sustainable stocks secure income for future generations. Consumers might pay higher prices. A temporary ban combined with quotas and support measures balances the dimensions of sustainability.', punkte:['ecological perspective', 'economic/social perspective', 'long-term vs. short-term', 'own judgement']}}
    ],
    hinweise:['Rivalry and excludability; individual vs. collective rationality.'],
    merke:'Common goods are overused without rules · homo oeconomicus vs. real behaviour · sustainability requires balancing ecological, economic and social interests.'}),

  /* ======================= XI · Behaviour of market participants (BPE 17) ======================= */
  blBau('zuordnung', {id:'XI1', modul:'XI', stufe:1, titel:'Movement along or shift of the demand curve?', tags:T.concat(['demand', 'demand curve']),
    text:'What happens to the demand for e-scooters? (ceteris paribus)',
    kategorien:['movement along the demand curve', 'shift of the demand curve to the right', 'shift of the demand curve to the left'], anzahl:8,
    faelle:[
      {t:'The price of e-scooters falls.', k:0}, {t:'The price of e-scooters rises.', k:0},
      {t:'Consumers’ incomes rise (e-scooters are a normal good).', k:1}, {t:'The price of public transport tickets (a substitute) rises.', k:1}, {t:'E-scooters become trendy among young people.', k:1},
      {t:'Electricity (a complement) becomes much more expensive.', k:2}, {t:'Consumers expect falling prices next year and wait.', k:2}, {t:'Several cities ban e-scooters on pavements.', k:2}
    ],
    hinweise:['A change in the good’s own price → movement along the curve; all other factors → shift.'],
    merke:'Determinants of demand: own price (movement along), prices of other goods (substitutes, complements), income (normal/inferior goods), preferences, expectations (shifts) · ceteris paribus.'}),
  blBau('rechnung', {id:'XI2', modul:'XI', stufe:2, titel:'Price elasticity of demand', tags:T.concat(['elasticity', 'PED']),
    text:'A cinema raises the ticket price from {p0} to {p1}. The number of tickets sold per week falls from {x0} to {x1}.',
    kopf:'Elasticity',
    zeilen:[
      {id:'p0', t:'old price', e:'€', aus:true}, {id:'p1', t:'new price', e:'€', aus:true}, {id:'x0', t:'old quantity', aus:true}, {id:'x1', t:'new quantity', aus:true},
      {id:'dp', t:'percentage change in price', e:'%', f:'(p1 - p0) / p0 * 100'},
      {id:'dx', t:'percentage change in quantity demanded', e:'%', f:'(x1 - x0) / x0 * 100'},
      {id:'el', t:'price elasticity of demand (PED)', kurz:'PED', f:'((x1 - x0) / x0) / ((p1 - p0) / p0)'},
      {id:'u0', t:'revenue before', e:'€', f:'p0 * x0'},
      {id:'u1', t:'revenue after', e:'€', f:'p1 * x1'}
    ],
    werte:[{p0:10, p1:12, x0:3000, x1:2700}],
    sets:[[{p0:8, p1:10, x0:2000, x1:1400}], [{p0:12, p1:15, x0:4000, x1:3200}]],
    wahl:[{id:'w', t:'How is demand classified?', opts:['inelastic (|PED| < 1): revenue rises when the price rises', 'elastic (|PED| > 1): revenue falls when the price rises', 'unit elastic (|PED| = 1): revenue stays the same'], r:'abs(((x1 - x0) / x0) / ((p1 - p0) / p0)) < 0.999 ? 0 : abs(((x1 - x0) / x0) / ((p1 - p0) / p0)) > 1.001 ? 1 : 2', weg:['|PED| < 1: inelastic – revenue rises with a price increase.', '|PED| > 1: elastic – revenue falls with a price increase.', '|PED| = 1: unit elastic – revenue unchanged.']}],
    hinweise:['PED = % change in quantity ÷ % change in price.'],
    merke:'PED = %Δ quantity ÷ %Δ price (negative for normal demand) · |PED| > 1 elastic, < 1 inelastic · inelastic: price increase raises revenue · elastic: price increase lowers revenue.'}),
  blBau('rechnung', {id:'XI3', modul:'XI', stufe:2, titel:'Cross-price elasticity of demand', tags:T.concat(['elasticity', 'XED', 'substitutes', 'complements']),
    text:'The price of good B rises from {pb0} to {pb1}. The quantity demanded of good A changes from {xa0} to {xa1}.',
    kopf:'Cross-price elasticity',
    zeilen:[
      {id:'pb0', t:'old price of B', e:'€', aus:true}, {id:'pb1', t:'new price of B', e:'€', aus:true}, {id:'xa0', t:'old quantity of A', aus:true}, {id:'xa1', t:'new quantity of A', aus:true},
      {id:'dp', t:'percentage change in the price of B', e:'%', f:'(pb1 - pb0) / pb0 * 100'},
      {id:'dx', t:'percentage change in the quantity of A', e:'%', f:'(xa1 - xa0) / xa0 * 100'},
      {id:'xe', t:'cross-price elasticity (XED)', kurz:'XED', f:'((xa1 - xa0) / xa0) / ((pb1 - pb0) / pb0)'}
    ],
    werte:[{pb0:2, pb1:2.5, xa0:1000, xa1:1150}],
    sets:[[{pb0:400, pb1:480, xa0:5000, xa1:4500}], [{pb0:1.5, pb1:1.8, xa0:800, xa1:880}]],
    wahl:[{id:'w', t:'What is the relationship between A and B?', opts:['substitutes (XED > 0)', 'complements (XED < 0)'], r:'((xa1 - xa0) / xa0) / ((pb1 - pb0) / pb0) > 0 ? 0 : 1', weg:['positive XED: when B becomes more expensive, more A is bought → substitutes', 'negative XED: when B becomes more expensive, less A is bought → complements']}],
    hinweise:['XED = %Δ quantity of A ÷ %Δ price of B.'],
    merke:'XED > 0: substitutes (e.g. butter/margarine) · XED < 0: complements (e.g. printer/ink) · XED ≈ 0: independent goods.'}),
  blBau('zuordnung', {id:'XI4', modul:'XI', stufe:2, titel:'Shifts of the supply curve', tags:T.concat(['supply', 'supply curve']),
    text:'How does the supply curve of e-bikes react? (ceteris paribus)',
    kategorien:['movement along the supply curve', 'shift to the right (more supply)', 'shift to the left (less supply)'], anzahl:8,
    faelle:[
      {t:'The market price of e-bikes rises.', k:0}, {t:'The market price of e-bikes falls.', k:0},
      {t:'New, cheaper battery technology lowers production costs.', k:1}, {t:'More manufacturers enter the market.', k:1}, {t:'The government pays a subsidy per e-bike to producers.', k:1},
      {t:'Wages in the industry rise sharply.', k:2}, {t:'A new tax per e-bike is levied on producers.', k:2}, {t:'Supply chain problems make components scarce.', k:2}
    ],
    hinweise:['Own price → movement · costs, technology, number of suppliers, expectations → shift.'],
    merke:'Determinants of supply: own price (movement along), costs of factors of production, technology, expectations, number of suppliers (shift) · market supply = horizontal sum of individual supply curves.'}),
  {
    id:'XI5', modul:'XI', typ:'berechnung', mehrfach:true, stufe:2, titel:'Individual and market demand',
    tags:T.concat(['demand', 'market demand', 'prohibitive price']),
    text:'Three consumers have individual demand curves for concert tickets.',
    frage:W,
    optionen:[
      {text:'The prohibitive price is the price at which the quantity demanded becomes zero.', richtig:true},
      {text:'The saturation quantity is the quantity demanded at a price of zero.', richtig:true},
      {text:'Market demand is derived by adding the quantities of all individual consumers at each price (horizontal addition).', richtig:true},
      {text:'Normal goods: demand rises with income; inferior goods: demand falls when income rises.', richtig:true},
      {text:'Market demand is derived by adding the prices of all consumers at each quantity.', fehler:'Quantities, not prices, are added at each price level (horizontal aggregation).'}
    ],
    hinweise:['Horizontal aggregation.'],
    merke:'Individual demand curve: prohibitive price, saturation quantity · market demand = sum of individual quantities at each price · normal vs. inferior goods.'
  },
  ...blAbi('fall', {id:'XI6', modul:'XI', titel:'Abiturfall: Higher prices for public transport?', tags:T.concat(['Abiturfall', 'elasticity', 'demand', 'substitutes']),
    text:'A regional transport company raises the price of a monthly ticket from 50 € to 60 €. The number of monthly tickets sold falls from 40,000 to 36,000. At the same time, petrol prices rise by 20 %, and more people buy e-bikes.',
    teile:[
      {op:'Calculate', t:'the price elasticity of demand.', opts:['−0.5', '−2.0', '−0.1'], r:0, weg:'%Δ quantity = −10 % · %Δ price = +20 % · PED = −10 ÷ 20 = −0.5.'},
      {op:'Explain', t:'the effect on revenue.', opts:['Demand is inelastic, so revenue rises from 2.0 m € to 2.16 m € per month.', 'Revenue falls because fewer tickets are sold.', 'Revenue stays the same.'], r:0, weg:'50 · 40,000 = 2,000,000 € · 60 · 36,000 = 2,160,000 €.',
        frei:{muster:'The PED is −0.5, so demand is inelastic: the quantity falls by a smaller percentage (10 %) than the price rises (20 %). Revenue therefore rises from 50 € · 40,000 = 2.0 m € to 60 € · 36,000 = 2.16 m € per month. Many commuters depend on public transport and have few alternatives in the short run.', punkte:['inelastic demand', 'revenue calculation', 'reason: few short-term alternatives']}},
      {op:'Analyse', t:'how rising petrol prices and e-bikes influence the demand for monthly tickets.', opts:['Petrol is the price of a substitute (car use) – demand for tickets shifts right; e-bikes are another substitute – demand shifts left; the net effect is open.', 'Both shift the demand curve to the right.', 'Neither affects demand for tickets.'], r:0,
        frei:{muster:'Car travel is a substitute for public transport. Higher petrol prices make driving more expensive, so the demand curve for monthly tickets shifts to the right (positive cross-price elasticity). E-bikes are also a substitute; their growing popularity (changed preferences, lower prices) shifts the demand for tickets to the left. Which effect dominates depends on distances, weather and infrastructure; in the long run, demand may become more elastic as more alternatives exist.', punkte:['petrol/car: substitute → shift right', 'e-bikes: substitute → shift left', 'net effect/long-run elasticity']}}
    ],
    hinweise:['PED = %Δ quantity ÷ %Δ price.'],
    merke:'Inelastic demand → price increase raises revenue · changes in prices of substitutes and preferences shift the demand curve.'}),

  /* ======================= XJ · Price determination in perfectly competitive markets (BPE 18.1–18.2) ======================= */
  blBau('rechnung', {id:'XJ1', modul:'XJ', stufe:2, titel:'Algebraic market equilibrium', tags:T.concat(['market equilibrium', 'algebraic']),
    text:'On the market for strawberries: demand Qd = {a} − {b} · P, supply Qs = {c} + {d} · P (P in €/kg, Q in tonnes).',
    kopf:'Equilibrium',
    zeilen:[
      {id:'a', t:'a', aus:true}, {id:'b', t:'b', aus:true}, {id:'c', t:'c', aus:true}, {id:'d', t:'d', aus:true},
      {id:'pe', t:'equilibrium price', e:'€', f:'(a - c) / (b + d)'},
      {id:'qe', t:'equilibrium quantity (tonnes)', kurz:'equilibrium quantity', f:'a - b * (a - c) / (b + d)'},
      {id:'ue', t:'excess supply at a price of 1 € above equilibrium (tonnes)', kurz:'excess supply', f:'(c + d * ((a - c) / (b + d) + 1)) - (a - b * ((a - c) / (b + d) + 1))'}
    ],
    werte:[{a:1000, b:50, c:200, d:30}],
    sets:[[{a:900, b:40, c:150, d:35}], [{a:1200, b:60, c:300, d:30}]],
    wahl:[{id:'w', t:'What happens if the price is above the equilibrium price?', opts:['excess supply: sellers lower their prices until the market is cleared', 'excess demand: prices rise further', 'nothing, the market stays as it is'], r:'0'}],
    hinweise:['Set Qd = Qs and solve for P.'],
    merke:'Equilibrium: Qd = Qs → P* = (a − c) ÷ (b + d) · above P*: excess supply → prices fall · below P*: excess demand → prices rise (adjustment process).'}),
  blBau('rechnung', {id:'XJ2', modul:'XJ', stufe:3, titel:'Consumer and producer surplus', tags:T.concat(['consumer surplus', 'producer surplus', 'welfare']),
    text:'The demand curve is linear with a prohibitive price of {ph} €. The market is in equilibrium at price {pe} € and quantity {qe} units. The supply curve starts at a minimum price of {pm} € (quantity 0).',
    kopf:'Welfare',
    zeilen:[
      {id:'ph', t:'prohibitive price', e:'€', aus:true}, {id:'pe', t:'equilibrium price', e:'€', aus:true}, {id:'qe', t:'equilibrium quantity', aus:true}, {id:'pm', t:'minimum supply price', e:'€', aus:true},
      {id:'ks', t:'consumer surplus', e:'€', f:'(ph - pe) * qe / 2'},
      {id:'ps', t:'producer surplus', e:'€', f:'(pe - pm) * qe / 2'},
      {id:'wf', t:'total welfare', e:'€', f:'(ph - pe) * qe / 2 + (pe - pm) * qe / 2'}
    ],
    werte:[{ph:20, pe:12, qe:800, pm:4}],
    sets:[[{ph:30, pe:18, qe:600, pm:6}], [{ph:15, pe:9, qe:1000, pm:3}]],
    wahl:[{id:'w', t:'What does the consumer surplus mean?', opts:['the sum of the differences between what consumers would have been willing to pay and the market price', 'the profit of the producers', 'the tax revenue of the state'], r:'0'}],
    hinweise:['Triangles: ½ · base · height.'],
    merke:'Consumer surplus = area between demand curve and price · producer surplus = area between price and supply curve · total welfare is maximal in equilibrium.'}),
  blBau('rechnung', {id:'XJ3', modul:'XJ', stufe:3, titel:'Price ceiling and price floor', tags:T.concat(['price ceiling', 'price floor', 'government intervention']),
    text:'Market for rental flats: demand Qd = {a} − {b} · P, supply Qs = {c} + {d} · P (P = rent per m²). The government sets a maximum rent of {ph} €.',
    kopf:'Price ceiling',
    zeilen:[
      {id:'a', t:'a', aus:true}, {id:'b', t:'b', aus:true}, {id:'c', t:'c', aus:true}, {id:'d', t:'d', aus:true}, {id:'ph', t:'maximum price', e:'€', aus:true},
      {id:'pe', t:'equilibrium rent', e:'€', f:'(a - c) / (b + d)'},
      {id:'qd', t:'quantity demanded at the maximum price', kurz:'demand at ceiling', f:'a - b * ph'},
      {id:'qs', t:'quantity supplied at the maximum price', kurz:'supply at ceiling', f:'c + d * ph'},
      {id:'ue', t:'excess demand (shortage)', f:'(a - b * ph) - (c + d * ph)'}
    ],
    werte:[{a:20000, b:800, c:2000, d:700, ph:10}],
    sets:[[{a:18000, b:600, c:3000, d:400, ph:12}], [{a:25000, b:1000, c:1000, d:1000, ph:9}]],
    wahl:[{id:'w', t:'Which consequence is typical of a price ceiling below the equilibrium price?', opts:['shortage: waiting lists, black markets, less investment in new flats', 'excess supply of flats', 'higher rents for all tenants'], r:'0'}],
    hinweise:['A price ceiling is only effective below the equilibrium price.'],
    merke:'Price ceiling (below equilibrium): excess demand, rationing, black markets · price floor (above equilibrium, e.g. minimum wage): excess supply · market-based measures: excise taxes, subsidies.'}),
  blBau('zuordnung', {id:'XJ4', modul:'XJ', stufe:2, titel:'Effects of government intervention', tags:T.concat(['government intervention', 'excise tax', 'subsidy']),
    text:'Which measure has this effect (perfectly competitive market, normal curves)?',
    kategorien:['excise tax', 'subsidy to producers', 'price ceiling', 'price floor'], anzahl:8,
    faelle:[
      {t:'The supply curve shifts up/left; the price rises, the quantity falls.', k:0}, {t:'Consumers and producers share the burden; the state earns revenue.', k:0},
      {t:'The supply curve shifts down/right; the price falls, the quantity rises.', k:1}, {t:'The state has expenses; e.g. for heat pumps.', k:1},
      {t:'Excess demand occurs; flats or goods have to be rationed.', k:2}, {t:'protects consumers from high prices, e.g. rent cap', k:2},
      {t:'Excess supply occurs; the state may have to buy up surpluses.', k:3}, {t:'protects producers or workers, e.g. minimum price for milk or a minimum wage', k:3}
    ],
    hinweise:['Market-based: taxes, subsidies · price and quantity controls: ceilings, floors.'],
    merke:'Market-based measures (excise tax, subsidy) shift the supply curve · price ceiling → shortage · price floor → surplus · welfare losses (deadweight loss) possible.'}),
  {
    id:'XJ5', modul:'XJ', typ:'berechnung', mehrfach:true, stufe:2, titel:'Functions of the equilibrium price',
    tags:T.concat(['equilibrium price', 'perfect competition']),
    text:'On a perfectly competitive market, the price of wheat rises after a drought.',
    frage:W,
    optionen:[
      {text:'The higher price signals scarcity (signalling function).', richtig:true},
      {text:'It rations the scarce wheat to those willing to pay the most (rationing function).', richtig:true},
      {text:'It encourages farmers to grow more wheat next season (allocation function).', richtig:true},
      {text:'A perfectly competitive market requires homogeneous goods, transparency, no preferences and many suppliers and buyers.', richtig:true},
      {text:'In equilibrium there is excess demand.', fehler:'In equilibrium, demand equals supply; the market is cleared.'}
    ],
    hinweise:['Signalling, rationing, allocation, clearing.'],
    merke:'Price functions: signalling, rationing, allocation, market clearing · conditions of a perfect market: homogeneity, transparency, no preferences, immediate reaction.'
  },
  ...blAbi('rechnung', {id:'XJ6', modul:'XJ', titel:'Abiturfall: A tax on sugary drinks', tags:T.concat(['Abiturfall', 'market equilibrium', 'excise tax', 'welfare']),
    text:'Market for sugary drinks: demand Qd = {a} − {b} · P, supply Qs = {c} + {d} · P (P in € per litre, Q in million litres). The government introduces a tax of {t} € per litre, paid by producers; the supply curve becomes Qs = {c} + {d} · (P − {t}).',
    zeilen:[{id:'a', t:'a', aus:true}, {id:'b', t:'b', aus:true}, {id:'c', t:'c', aus:true}, {id:'d', t:'d', aus:true}, {id:'t', t:'tax', e:'€', aus:true}],
    werte:[{a:120, b:20, c:0, d:20, t:0.6}],
    sets:[[{a:150, b:30, c:10, d:20, t:0.5}]],
    felder:[
      {id:'p0', t:'a) Calculate the equilibrium price without tax (€).', f:'(a - c) / (b + d)', e:'€', kurz:'a) price without tax'},
      {id:'p1', t:'b) Calculate the new equilibrium price with tax (€).', f:'(a - c + d * t) / (b + d)', e:'€', kurz:'b) price with tax'},
      {id:'q1', t:'c) Calculate the new equilibrium quantity (million litres).', f:'a - b * (a - c + d * t) / (b + d)', kurz:'c) quantity with tax'},
      {id:'st', t:'d) Calculate the tax revenue (€ million).', f:'t * (a - b * (a - c + d * t) / (b + d))', kurz:'d) tax revenue'}
    ],
    wahl:[
      {id:'w1', t:'e) Explain who bears the tax burden.', opts:['Consumers pay part through a higher price, producers bear the rest because they receive less per litre after tax.', 'Producers bear the whole tax because they pay it to the state.', 'Nobody, the tax has no effect on prices.'], r:'0',
        frei:{muster:'Although producers pay the tax to the state, the burden is shared: the market price rises (compare a and b), so consumers pay part of the tax. Producers receive the new price minus the tax, i.e. less than before. The distribution depends on the elasticities of demand and supply – the less elastic side bears more.', punkte:['price rises: consumers bear part', 'producers receive less net', 'depends on elasticities']}},
      {id:'w2', t:'f) Evaluate whether the tax achieves its objective of healthier nutrition.', opts:['The quantity falls (steering effect) and the state gains revenue; the effect is limited if demand is inelastic, and low-income households are burdened more.', 'The tax has no steering effect at all.', 'The tax eliminates all health problems.'], r:'0',
        frei:{muster:'The tax increases the price and reduces the quantity consumed (c) – a steering effect towards healthier nutrition. The state receives revenue (d) that could finance health programmes. However, if demand is inelastic, consumption falls only slightly; consumers may switch to untaxed sugary products. The tax is regressive because low-income households spend a larger share of income on such drinks. Producers may react by reducing sugar content, as seen in the UK.', punkte:['steering effect: quantity falls', 'revenue use', 'limits: inelastic demand, substitution, regressive', 'judgement']}}
    ],
    hinweise:['Equilibrium: set Qd = Qs.', 'With tax: Qs = c + d · (P − t).'],
    merke:'Excise tax shifts supply up · price rises less than the tax · burden shared by elasticity · steering and revenue effect · welfare loss.'}),

  /* ======================= XM · Foreign trade and globalisation (BPE 22) ======================= */
  blBau('rechnung', {id:'XM1', modul:'XM', stufe:2, titel:'Comparative advantage', tags:T.concat(['foreign trade', 'comparative advantage', 'Ricardo']),
    text:'Labour hours needed per unit: country A needs {a1} hours for a ton of wheat and {a2} hours for a machine; country B needs {b1} hours for a ton of wheat and {b2} hours for a machine.',
    kopf:'Ricardo',
    zeilen:[
      {id:'a1', t:'A: wheat', aus:true}, {id:'a2', t:'A: machine', aus:true}, {id:'b1', t:'B: wheat', aus:true}, {id:'b2', t:'B: machine', aus:true},
      {id:'oa', t:'opportunity costs of 1 machine in A (tons of wheat)', kurz:'opportunity costs machine A', f:'a2 / a1'},
      {id:'ob', t:'opportunity costs of 1 machine in B (tons of wheat)', kurz:'opportunity costs machine B', f:'b2 / b1'}
    ],
    werte:[{a1:10, a2:20, b1:30, b2:90}],
    sets:[[{a1:8, a2:24, b1:12, b2:24}], [{a1:5, a2:15, b1:20, b2:40}]],
    wahl:[{id:'w', t:'In which good does country A have a comparative advantage?', opts:['machines', 'wheat'], r:'a2 / a1 < b2 / b1 ? 0 : 1', weg:['A has lower opportunity costs for machines.', 'A has lower opportunity costs for wheat (B for machines).']}],
    hinweise:['Compare opportunity costs, not absolute costs.'],
    merke:'Absolute advantage: fewer resources per unit · comparative advantage: lower opportunity costs · specialisation according to comparative advantage increases total output – trade benefits both.'}),
  blBau('zuordnung', {id:'XM2', modul:'XM', stufe:1, titel:'Reasons for foreign trade', tags:T.concat(['foreign trade', 'intra-industry trade']),
    text:'Which reason for trade is it mainly?',
    kategorien:['availability of goods', 'differences in costs and prices', 'intra-industry trade'], anzahl:8,
    faelle:[
      {t:'Germany imports coffee and bananas.', k:0}, {t:'Europe imports rare earths from China.', k:0}, {t:'Germany imports oil and gas.', k:0},
      {t:'Textiles are produced in Bangladesh because wages are lower.', k:1}, {t:'Solar panels are imported because foreign producers are cheaper.', k:1},
      {t:'Germany exports cars to France and imports cars from France.', k:2}, {t:'Consumers want different brands and product variants.', k:2}, {t:'Multinational corporations ship parts between their plants in different countries.', k:2}
    ],
    hinweise:['Intra-industry trade: exchange of similar goods.'],
    merke:'Reasons for trade: availability (non-availability at home), cost/price differences (absolute and comparative advantages), intra-industry trade (preferences, product differentiation, multinationals).'}),
  blBau('rechnung', {id:'XM3', modul:'XM', stufe:2, titel:'Exchange rates and foreign trade', tags:T.concat(['exchange rate', 'indirect quotation']),
    text:'A German company sells machines for {pe} € each to the USA. The exchange rate changes from {k1} to {k2} US-$ per euro (indirect quotation). A US software licence costs {pu} US-$.',
    kopf:'Exchange rate',
    zeilen:[
      {id:'pe', t:'price of the machine (€)', aus:true}, {id:'k1', t:'old exchange rate', aus:true}, {id:'k2', t:'new exchange rate', aus:true}, {id:'pu', t:'licence (US-$)', aus:true},
      {id:'u1', t:'price of the machine in US-$ before', kurz:'machine in US-$ before', f:'pe * k1'},
      {id:'u2', t:'price of the machine in US-$ after', kurz:'machine in US-$ after', f:'pe * k2'},
      {id:'l1', t:'price of the licence in € before', kurz:'licence in € before', e:'€', f:'pu / k1'},
      {id:'l2', t:'price of the licence in € after', kurz:'licence in € after', e:'€', f:'pu / k2'}
    ],
    werte:[{pe:50000, k1:1.05, k2:1.2, pu:24000}],
    sets:[[{pe:80000, k1:1.2, k2:1.1, pu:33000}], [{pe:120000, k1:1.1, k2:1.25, pu:55000}]],
    wahl:[{id:'w', t:'What has happened to the euro?', opts:['appreciation: exports become more expensive for US buyers, imports cheaper', 'depreciation: exports become cheaper for US buyers, imports more expensive'], r:'k2 > k1 ? 0 : 1', weg:['more dollars per euro → appreciation of the euro', 'fewer dollars per euro → depreciation of the euro']}],
    hinweise:['Indirect quotation: US-$ per 1 €.'],
    merke:'Indirect quotation: foreign currency per euro · appreciation of the euro: exports dearer, imports cheaper · depreciation: exports cheaper, imports dearer · flexible rates set by supply and demand.'}),
  {
    id:'XM4', modul:'XM', typ:'berechnung', mehrfach:true, stufe:2, titel:'Free trade vs. protectionism',
    tags:T.concat(['free trade', 'protectionism', 'tariffs', 'WTO']),
    text:'A large economy introduces high import tariffs on cars and steel.',
    frage:W,
    optionen:[
      {text:'Tariffs make imports more expensive and protect domestic producers in the short term.', richtig:true},
      {text:'Non-tariff barriers include quotas and technical or legal standards.', richtig:true},
      {text:'Trading partners may retaliate with their own tariffs (trade war), causing welfare losses for all sides.', richtig:true},
      {text:'The WTO sets rules for world trade, the IMF supports financial stability and the EU forms a single market with a customs union.', richtig:true},
      {text:'Free trade benefits every person in every country equally.', fehler:'Free trade increases overall welfare, but there are winners and losers, e.g. workers in industries that face strong import competition.'}
    ],
    hinweise:['Tariff vs. non-tariff barriers; winners and losers.'],
    merke:'Free trade: specialisation, lower prices, more choice · protectionism: tariffs, quotas, standards – short-term protection, long-term welfare losses, retaliation · WTO, IMF, EU promote trade.'
  },
  blBau('zuordnung', {id:'XM5', modul:'XM', stufe:2, titel:'Globalisation: opportunities and challenges', tags:T.concat(['globalisation', 'migration', 'relocation', 'standards']),
    text:'Is it rather an opportunity or a challenge of globalisation?',
    kategorien:['opportunity', 'challenge'], anzahl:8,
    faelle:[
      {t:'Consumers get a wider range of goods at lower prices.', k:0}, {t:'Emerging economies grow through exports; poverty declines.', k:0}, {t:'Migration helps to reduce skill shortages in ageing societies.', k:0}, {t:'Knowledge and technology spread faster.', k:0},
      {t:'Relocation of production causes job losses in high-wage countries.', k:1}, {t:'Low environmental and social standards in some countries create a “race to the bottom”.', k:1},
      {t:'Long supply chains are vulnerable to crises.', k:1}, {t:'Inequality within countries can increase.', k:1}
    ],
    hinweise:['Consider different countries and groups.'],
    merke:'Globalisation: welfare gains (specialisation, prices, growth) vs. welfare losses for some groups · migration, relocation · international environmental and social standards.'}),
  ...blAbi('fall', {id:'XM6', modul:'XM', titel:'Abiturfall: Tariffs on European cars', tags:T.concat(['Abiturfall', 'free trade', 'protectionism', 'exchange rate']),
    text:'The USA imposes a 25 % import tariff on cars from the EU. A German carmaker exports 200,000 cars per year to the USA. At the same time, the euro appreciates from 1.05 to 1.15 US-$. The EU considers counter-tariffs on US goods; the carmaker considers building a plant in the USA.',
    teile:[
      {op:'Explain', t:'the effects of the tariff and the appreciation on the German carmaker.', opts:['Both make German cars more expensive in the USA; sales and margins fall, unless the company lowers prices.', 'The tariff makes German cars cheaper in the USA.', 'The appreciation of the euro helps German exporters.'], r:0,
        frei:{muster:'The tariff increases the price of German cars in the USA by 25 % unless the carmaker absorbs part of it by lowering its prices. The appreciation of the euro also makes German cars more expensive in dollars (or reduces euro revenues if dollar prices stay the same). Both effects reduce competitiveness, sales and profit margins in the US market.', punkte:['tariff raises price', 'appreciation raises dollar price/reduces euro revenue', 'lower sales/margins']}},
      {op:'Assess', t:'the plan to build a plant in the USA.', opts:['avoids tariffs and currency risk (production costs in dollars), but high investment, possibly higher wages, and jobs may be lost in Germany', 'impossible because of the WTO', 'has no advantages'], r:0,
        frei:{muster:'A US plant would avoid the tariff and reduce the exchange-rate risk because costs and revenues would both be in dollars. It brings the company closer to customers. Disadvantages: high investment, risk of political changes, possibly higher wages and the loss of jobs and know-how in Germany (relocation). The decision depends on how long the tariffs are expected to last.', punkte:['advantages: no tariff, natural hedge, proximity', 'disadvantages: investment, relocation, jobs in Germany', 'judgement']}},
      {op:'Discuss', t:'whether the EU should impose counter-tariffs.', opts:['Counter-tariffs may put pressure on the USA but risk a trade war with welfare losses for consumers and companies on both sides; negotiations within WTO rules are an alternative.', 'Counter-tariffs only have advantages.', 'The EU is not allowed to react at all.'], r:0,
        frei:{muster:'Counter-tariffs can increase the pressure on the USA to withdraw its tariffs and protect the EU’s credibility. However, they make US goods more expensive for European consumers and companies, and the USA might escalate further (trade war). Both sides would lose welfare. Alternatives are negotiations, a WTO dispute settlement procedure or targeted measures. Free trade generally increases overall welfare.', punkte:['arguments for counter-tariffs', 'risk of trade war, welfare losses', 'alternatives (negotiations, WTO)', 'own position']}}
    ],
    hinweise:['Tariff + exchange rate effects; free trade vs. protectionism.'],
    merke:'Tariffs and appreciation reduce export competitiveness · relocation as reaction · trade wars cause welfare losses · WTO and negotiations.'}),

  /* ======================= XL · Sustainable development (BPE 23) ======================= */
  blBau('zuordnung', {id:'XL1', modul:'XL', stufe:1, titel:'Dimensions of sustainability', tags:T.concat(['sustainability']),
    text:'Which dimension of sustainability does the measure mainly address?',
    kategorien:['ecological', 'economic', 'social'], anzahl:8,
    faelle:[
      {t:'protecting biodiversity and forests', k:0}, {t:'reducing greenhouse gas emissions', k:0}, {t:'using resources only as fast as they regenerate', k:0},
      {t:'stable, long-term economic growth without excessive debt', k:1}, {t:'securing jobs and competitiveness', k:1},
      {t:'fair wages and decent working conditions', k:2}, {t:'access to education and health care for everybody', k:2}, {t:'reducing poverty and inequality', k:2}
    ],
    hinweise:['Triangle of sustainability.'],
    merke:'Sustainable development: meeting the needs of the present without compromising future generations · ecological, economic and social dimension (triangle of sustainability).'}),
  {
    id:'XL2', modul:'XL', typ:'berechnung', mehrfach:true, stufe:1, titel:'The UN Sustainable Development Goals',
    tags:T.concat(['SDGs', 'United Nations']),
    text:'In 2015, the United Nations adopted the 2030 Agenda for Sustainable Development.',
    frage:W,
    optionen:[
      {text:'The agenda contains 17 Sustainable Development Goals (SDGs), e.g. no poverty, zero hunger, climate action.', richtig:true},
      {text:'The goals apply to all countries, not only to developing countries (universality).', richtig:true},
      {text:'A guiding principle is “leave no one behind”.', richtig:true},
      {text:'The goals are interconnected; progress in one area can support or conflict with another.', richtig:true},
      {text:'The SDGs are legally binding and countries are fined if they miss them.', fehler:'They are a political commitment without legal sanctions; progress is monitored and reported.'}
    ],
    hinweise:['2030 Agenda, 17 goals.'],
    merke:'UN 2030 Agenda: 17 SDGs · principles: universality, leave no one behind, interconnectedness · not legally binding.'
  },
  blBau('zuordnung', {id:'XL3', modul:'XL', stufe:2, titel:'Post-growth economy or Economy for the Common Good?', tags:T.concat(['post-growth economy', 'Economy for the Common Good']),
    text:'Assign the idea to the concept.',
    kategorien:['post-growth economy', 'Economy for the Common Good (ECG)', 'neither (traditional growth model)'], anzahl:8,
    faelle:[
      {t:'Sufficiency: consuming less and living well with less', k:0}, {t:'More subsistence and regional economic cycles', k:0}, {t:'Rich economies should stop pursuing GDP growth.', k:0},
      {t:'Companies publish a Common Good Balance Sheet.', k:1}, {t:'Success is measured by contribution to human dignity, solidarity, sustainability and democracy.', k:1}, {t:'Companies with a good common-good score should receive advantages, e.g. lower taxes.', k:1},
      {t:'Maximising GDP growth is the main goal of economic policy.', k:2}, {t:'Profit is the only measure of a company’s success.', k:2}
    ],
    hinweise:['Post-growth: sufficiency, subsistence, regional economy · ECG (Christian Felber): Common Good Balance Sheet.'],
    merke:'Post-growth economy (e.g. N. Paech): sufficiency, subsistence, regional economy · Economy for the Common Good (C. Felber): Common Good Balance Sheet · inspiration: Club of Rome “Limits to Growth” (1972).'}),
  {
    id:'XL4', modul:'XL', typ:'berechnung', mehrfach:true, stufe:2, titel:'Assessing alternative welfare concepts',
    tags:T.concat(['post-growth economy', 'Economy for the Common Good', 'welfare']),
    text:'In class, students discuss whether alternative concepts could replace growth-oriented economies.',
    frage:W,
    optionen:[
      {text:'Supporters argue that infinite growth on a finite planet is impossible and that well-being does not rise with GDP beyond a certain level.', richtig:true},
      {text:'Critics argue that growth is needed to finance pensions, reduce debt and lift poorer countries out of poverty.', richtig:true},
      {text:'Green growth aims to decouple growth from resource use through technology and efficiency.', richtig:true},
      {text:'A Common Good Balance Sheet may be criticised as subjective and bureaucratic.', richtig:true},
      {text:'All economists agree that a post-growth economy is the best solution.', fehler:'The concepts are controversial; many economists favour green growth or other approaches.'}
    ],
    hinweise:['Arguments for and against.'],
    merke:'Alternative concepts question GDP growth as the main goal · arguments: planetary limits, well-being vs. financing of welfare state, poverty reduction · green growth as alternative approach.'
  },
  blBau('zuordnung', {id:'XL5', modul:'XL', stufe:2, titel:'Strong or weak sustainability?', tags:T.concat(['sustainability', 'natural capital']),
    text:'Assign the statement.',
    kategorien:['weak sustainability', 'strong sustainability'], anzahl:6,
    faelle:[
      {t:'Natural capital can be replaced by man-made capital as long as total capital does not decrease.', k:0}, {t:'Using up a forest is acceptable if the profits are invested in schools.', k:0}, {t:'Technology will solve resource shortages.', k:0},
      {t:'Critical natural capital (e.g. a stable climate) must be preserved because it cannot be replaced.', k:1}, {t:'Ecological limits come first; the economy must operate within them.', k:1}, {t:'Biodiversity losses cannot be compensated by money.', k:1}
    ],
    hinweise:['Substitutability of natural capital.'],
    merke:'Weak sustainability: natural capital substitutable · strong sustainability: critical natural capital must be preserved · basis for different policy approaches.'}),
  ...blAbi('fall', {id:'XL6', modul:'XL', titel:'Abiturfall: Growth or sufficiency?', tags:T.concat(['Abiturfall', 'sustainability', 'post-growth economy', 'Economy for the Common Good', 'SDGs']),
    text:'A town council discusses its future: One group wants to attract a large logistics centre (800 jobs, high trade tax, but 40 hectares of farmland sealed and more truck traffic). Another group proposes a regional strategy based on the ideas of the post-growth economy: support for local farms, repair cafés and sharing offers, and a Common Good Balance Sheet for municipal companies.',
    teile:[
      {op:'Analyse', t:'the logistics centre with regard to the three dimensions of sustainability.', opts:['economic: jobs and tax revenue (+) · ecological: land sealing, traffic, emissions (−) · social: jobs (+), noise and traffic (−)', 'only positive effects in all dimensions', 'only ecological effects'], r:0,
        frei:{muster:'Economically, the logistics centre creates 800 jobs and high trade tax revenue. Ecologically, 40 hectares of farmland are sealed, biodiversity is lost and truck traffic increases emissions and noise. Socially, jobs provide income and security, but residents suffer from traffic and noise. There are conflicts between the dimensions.', punkte:['economic dimension', 'ecological dimension', 'social dimension', 'conflicts']}},
      {op:'Explain', t:'the main ideas of the post-growth economy and the Economy for the Common Good.', opts:['post-growth: sufficiency, subsistence, regional cycles instead of GDP growth · ECG: success measured by contribution to the common good (Common Good Balance Sheet)', 'both demand maximum GDP growth', 'both abolish money and markets'], r:0,
        frei:{muster:'The post-growth economy argues that rich economies cannot grow forever within planetary limits. It focuses on sufficiency (consuming less), subsistence (self-production, repairing, sharing) and regional economic cycles. The Economy for the Common Good measures the success of companies by their contribution to human dignity, solidarity, ecological sustainability, justice and democracy, documented in a Common Good Balance Sheet.', punkte:['post-growth: sufficiency, subsistence, regional economy', 'ECG: Common Good Balance Sheet, values', 'limits to growth']}},
      {op:'Evaluate', t:'which strategy the town should choose.', opts:['A justified judgement that weighs jobs and revenue against land use and quality of life, e.g. a smaller, greener centre plus regional initiatives.', 'Always choose the option with the highest GDP growth.', 'Reject all economic activity.'], r:0,
        frei:{muster:'The logistics centre offers quick economic benefits but irreversible ecological costs (strong sustainability would reject the loss of farmland). The regional strategy strengthens resilience, community and ecology but creates fewer jobs and less tax revenue in the short term. A compromise could be a smaller logistics centre on brownfield land with rail connection plus support for regional initiatives. A justified judgement weighs the dimensions and long-term effects for future generations (SDGs).', punkte:['weigh advantages and disadvantages', 'long-term perspective/future generations', 'own justified judgement']}}
    ],
    hinweise:['Use the triangle of sustainability.'],
    merke:'Sustainability decisions weigh ecological, economic and social effects · alternative concepts: post-growth economy, Economy for the Common Good · long-term perspective.'})
  ];
})(),
/* ---------- Wirtschaftsgymnasium · Wahlfach Global Studies (Bildungsplan 2020, bilingual) ----------
   Aufgaben auf Englisch (Fach mit mind. 50 % Unterricht in der Fremdsprache, Debating in der Zielsprache).
   GA Globalisation and global governance (BPE 1.1) · GK Culture, stereotypes, acculturation (BPE 1.2–1.4) · GB Population and migration (BPE 2)
   GC Debating basics (BPE 3) · GH Cultural dimensions: Hofstede and Hall (BPE 4) · GE Climate, water and biomes (BPE 5.1–5.3)
   GF Threats to ecosystems and solutions (BPE 5.4–5.5) · GI Advanced debating (BPE 6) · GJ Measuring development and its causes (BPE 7.1–7.2)
   GM Industrialised countries, multinationals and private initiatives (BPE 7.3–7.5). Wahlfach ohne Abiturprüfung: Anwendungsfälle. Neu am 08.11.2026. */
...(() => {
  const T = ['Wirtschaftsgymnasium', 'Global Studies', 'English'];
  const W = 'Which statements are correct?';
  return [
  /* ======================= GA · Globalisation and global governance (BPE 1.1) ======================= */
  blBau('zuordnung', {id:'GA1', modul:'GA', stufe:1, titel:'Dimensions of globalisation', tags:T.concat(['globalisation']),
    text:'Which dimension of globalisation does the example mainly illustrate?',
    kategorien:['economic', 'political', 'cultural'], anzahl:8,
    faelle:[
      {t:'A smartphone is designed in the USA, assembled in China and sold worldwide.', k:0}, {t:'Foreign direct investment and global financial flows grow faster than world output.', k:0}, {t:'Global supply chains link producers on several continents.', k:0},
      {t:'States negotiate a climate agreement within the United Nations.', k:1}, {t:'Trade rules are settled in the World Trade Organization.', k:1},
      {t:'Streaming services spread the same series and music around the world.', k:2}, {t:'English becomes the lingua franca of business and science.', k:2}, {t:'Fast-food chains offer similar menus in many countries.', k:2}
    ],
    hinweise:['Preconditions: falling transport costs, digital communication, liberalisation of trade and capital flows.'],
    merke:'Globalisation: growing interconnection of economies, politics and cultures · preconditions: transport (container), information technology, liberalisation, political changes after 1990 · dimensions: economic, political, cultural (also ecological).'}),
  {
    id:'GA2', modul:'GA', typ:'berechnung', mehrfach:true, stufe:2, titel:'Winners and losers of globalisation',
    tags:T.concat(['globalisation', 'winners and losers']),
    text:'Economists discuss who has gained and who has lost through globalisation.',
    frage:W,
    optionen:[
      {text:'Many emerging economies, e.g. China and India, have achieved strong growth and reduced extreme poverty through integration into world markets.', richtig:true},
      {text:'Consumers in industrialised countries benefit from lower prices and a wider choice of goods.', richtig:true},
      {text:'Low-skilled workers in industries exposed to import competition in high-wage countries are often among the losers.', richtig:true},
      {text:'Some least developed countries are hardly integrated and gain little, e.g. because of poor infrastructure and dependence on raw materials.', richtig:true},
      {text:'Globalisation has made all people in all countries better off to the same extent.', fehler:'Gains are unevenly distributed between and within countries; inequality within many countries has increased.'}
    ],
    hinweise:['Think of countries, sectors and social groups.'],
    merke:'Winners: emerging economies, exporters, consumers, highly skilled · losers: low-skilled workers in import-competing sectors, poorly integrated countries · inequality between and within countries.'
  },
  blBau('zuordnung', {id:'GA3', modul:'GA', stufe:1, titel:'Actors of global governance', tags:T.concat(['global governance', 'WTO', 'IMF', 'World Bank', 'UN', 'NGO']),
    text:'Which actor is described?',
    kategorien:['WTO', 'IMF', 'World Bank', 'United Nations', 'NGOs'], anzahl:9,
    faelle:[
      {t:'sets rules for international trade and settles trade disputes', k:0}, {t:'principle of non-discrimination: most-favoured-nation treatment', k:0},
      {t:'provides short-term loans to countries with balance-of-payments problems, usually with conditions', k:1}, {t:'monitors exchange rates and the economic policies of its members', k:1},
      {t:'finances long-term development projects, e.g. infrastructure and education', k:2}, {t:'aims at ending extreme poverty through loans and grants for developing countries', k:2},
      {t:'Security Council, General Assembly and the 2030 Agenda with 17 Sustainable Development Goals', k:3},
      {t:'independent organisations such as Greenpeace or Oxfam that campaign and run projects', k:4}, {t:'not run by governments; financed by donations and members', k:4}
    ],
    hinweise:['Global governance: many problems (trade, finance, climate) can only be solved internationally.'],
    merke:'Global governance: international rules and cooperation · WTO (trade rules), IMF (financial stability, loans with conditionality), World Bank (development finance), UN (peace, SDGs), NGOs (civil society) · criticism: dominance of rich countries, democratic legitimacy.'}),
  blBau('rechnung', {id:'GA4', modul:'GA', stufe:2, titel:'Trade openness', tags:T.concat(['globalisation', 'trade openness', 'statistics']),
    text:'Data for two countries (in billion US-$): Country A: exports {xa}, imports {ma}, GDP {ya}. Country B: exports {xb}, imports {mb}, GDP {yb}.',
    kopf:'Trade openness',
    zeilen:[
      {id:'xa', t:'exports A', aus:true}, {id:'ma', t:'imports A', aus:true}, {id:'ya', t:'GDP A', aus:true}, {id:'xb', t:'exports B', aus:true}, {id:'mb', t:'imports B', aus:true}, {id:'yb', t:'GDP B', aus:true},
      {id:'oa', t:'trade openness of A ((exports + imports) ÷ GDP)', kurz:'trade openness A', e:'%', f:'(xa + ma) / ya * 100'},
      {id:'ob', t:'trade openness of B', kurz:'trade openness B', e:'%', f:'(xb + mb) / yb * 100'},
      {id:'ta', t:'trade balance of A', kurz:'trade balance A', f:'xa - ma'}
    ],
    werte:[{xa:1800, ma:1500, ya:4500, xb:2100, mb:3200, yb:27000}],
    sets:[[{xa:420, ma:380, ya:900, xb:3500, mb:2600, yb:18000}], [{xa:650, ma:700, ya:2000, xb:3000, mb:2800, yb:3700}]],
    wahl:[{id:'w', t:'Which country is more integrated into world trade relative to its size?', opts:['country A', 'country B'], r:'(xa + ma) / ya >= (xb + mb) / yb ? 0 : 1', weg:['A has the higher trade openness.', 'B has the higher trade openness.']}],
    hinweise:['Trade openness = (exports + imports) ÷ GDP · 100.'],
    merke:'Trade openness measures integration into world trade · small, export-oriented economies often have higher values than large economies · trade balance = exports − imports.'}),
  blBau('fall', {id:'GA5', modul:'GA', stufe:3, titel:'A T-shirt’s journey', tags:T.concat(['globalisation', 'global value chain', 'Fallaufgabe']),
    text:'A T-shirt sold in Germany for 15 €: cotton grown in Texas (subsidised), spun in China, sewn in Bangladesh (wage share of the price: about 0.6 %), shipped to Hamburg and sold by a European fashion chain.',
    teile:[
      {op:'Explain', t:'which preconditions make this value chain possible.', opts:['cheap container shipping, digital communication and liberalised trade', 'high tariffs and closed borders', 'the absence of any transport'], r:0},
      {op:'Identify', t:'a winner and a loser.', opts:['winner: consumers and the fashion chain (low prices) · loser: seamstresses with very low wages and poor working conditions', 'winner: nobody · loser: everybody', 'Only the workers in Bangladesh win.'], r:0},
      {op:'Explain', t:'why rules for such chains must be set internationally.', opts:['No single country controls the whole chain; standards for labour, environment and trade require cooperation (global governance), e.g. supply chain laws and ILO standards.', 'Each country can regulate the whole chain alone.', 'Rules are unnecessary because markets solve all problems.'], r:0},
      {op:'Assess', t:'the role of US cotton subsidies.', opts:['They lower world market prices and harm unsubsidised cotton farmers in poorer countries.', 'They help farmers in Africa.', 'They have no effect on world prices.'], r:0}
    ],
    hinweise:['Global value chain: production steps in different countries.'],
    merke:'Global value chains: specialisation and low prices, but unequal distribution of value added · international rules (WTO, ILO, supply chain due diligence) needed.'}),

  /* ======================= GK · Culture, stereotypes, acculturation (BPE 1.2–1.4) ======================= */
  blBau('zuordnung', {id:'GK1', modul:'GK', stufe:1, titel:'The cultural iceberg', tags:T.concat(['culture', 'cultural iceberg']),
    text:'Is the aspect above the waterline (visible) or below (invisible) in the cultural iceberg model?',
    kategorien:['visible (above the waterline)', 'invisible (below the waterline)'], anzahl:8,
    faelle:[
      {t:'food and eating habits', k:0}, {t:'clothing and fashion', k:0}, {t:'language and greetings', k:0}, {t:'festivals, music and art', k:0},
      {t:'values and beliefs about right and wrong', k:1}, {t:'concept of time and punctuality', k:1}, {t:'attitude towards hierarchy and authority', k:1}, {t:'notions of modesty and personal space', k:1}
    ],
    hinweise:['Only a small part of culture is visible; most of it lies hidden and determines behaviour.'],
    merke:'Culture: shared values, norms and practices learned in a group · cultural iceberg: visible behaviour above, hidden values and assumptions below · misunderstandings often arise below the waterline.'}),
  {
    id:'GK2', modul:'GK', typ:'berechnung', mehrfach:true, stufe:2, titel:'Communication and perception traps',
    tags:T.concat(['culture', 'communication', 'perception']),
    text:'A German sales manager negotiates with partners in Japan and Brazil.',
    frage:W,
    optionen:[
      {text:'Direct criticism that is meant to be efficient in Germany may be perceived as rude in cultures that value harmony and face-saving.', richtig:true},
      {text:'A Japanese “yes” may mean “I understand” rather than “I agree”.', richtig:true},
      {text:'Perception traps arise when we interpret others’ behaviour through our own cultural lens.', richtig:true},
      {text:'Small talk and building personal relationships before business can be essential in many cultures.', richtig:true},
      {text:'Good manners are the same everywhere, so there is no need to prepare.', fehler:'Forms of politeness, greetings and communication styles differ considerably between cultures.'}
    ],
    hinweise:['Our own culture is the “glasses” through which we see others.'],
    merke:'Communication styles differ (direct/indirect, verbal/non-verbal) · perception traps: interpreting others by own norms · preparation and openness reduce misunderstandings.'
  },
  {
    id:'GK3', modul:'GK', typ:'berechnung', mehrfach:true, stufe:2, titel:'Generalisations and stereotypes',
    tags:T.concat(['stereotypes', 'prejudice']),
    text:'In a class discussion, statements like “Germans are always punctual” and “Italians are always late” are made.',
    frage:W,
    optionen:[
      {text:'Stereotypes are simplified, generalised images of groups; they reduce complexity but ignore individual differences.', richtig:true},
      {text:'Explanations include the need for orientation, group identity (in-group vs. out-group) and limited personal contact.', richtig:true},
      {text:'Problems arise when stereotypes turn into prejudice and discrimination.', richtig:true},
      {text:'Personal contact, reflection on one’s own perspective and learning about other cultures help to overcome stereotypes.', richtig:true},
      {text:'Cultural models like Hofstede’s describe exactly how every individual of a country behaves.', fehler:'Models describe tendencies of groups on average; applying them to individuals leads to stereotyping.'}
    ],
    hinweise:['Generalisation ≠ individual behaviour.'],
    merke:'Stereotypes: generalised images, often unconscious · causes: orientation, identity, lack of contact · risks: prejudice, discrimination · solutions: contact, reflection, knowledge, empathy.'
  },
  blBau('zuordnung', {id:'GK4', modul:'GK', stufe:2, titel:'Berry’s acculturation model', tags:T.concat(['acculturation', 'Berry', 'integration']),
    text:'Which acculturation strategy according to John W. Berry is described?',
    kategorien:['assimilation', 'integration', 'separation', 'marginalisation'], anzahl:8,
    faelle:[
      {t:'A family gives up its language and traditions and adopts only the culture of the host society.', k:0}, {t:'“We want to become completely like the locals.”', k:0},
      {t:'A young woman keeps her heritage culture and language and actively takes part in the host society.', k:1}, {t:'Bilingual identity: maintaining origin culture and having contact with the new society', k:1},
      {t:'A group maintains its culture but avoids contact with the host society.', k:2}, {t:'Life takes place almost exclusively within the own community.', k:2},
      {t:'A person has lost ties to the culture of origin and has no contact with the host society.', k:3}, {t:'feeling of not belonging anywhere', k:3}
    ],
    hinweise:['Two questions: Is the own culture maintained? Is there contact with the host society?'],
    merke:'Berry: maintain own culture (yes/no) × contact with host society (yes/no) → integration (yes/yes), assimilation (no/yes), separation (yes/no), marginalisation (no/no) · integration is usually most successful.'}),
  blBau('fall', {id:'GK5', modul:'GK', stufe:3, titel:'Integration in a small town', tags:T.concat(['integration', 'acculturation', 'Fallaufgabe']),
    text:'A small town in Baden-Württemberg has taken in 150 refugees from Syria and Afghanistan. Some families hardly have contact with locals; children attend school, parents wait for language courses. Local sports clubs offer free membership; an employer offers internships.',
    teile:[
      {op:'Classify', t:'families who live only within their own community.', opts:['separation', 'assimilation', 'integration'], r:0},
      {op:'Identify', t:'a state integration measure.', opts:['integration and language courses, recognition of qualifications, school education', 'sports club memberships', 'private language tandems'], r:0},
      {op:'Identify', t:'a private integration measure.', opts:['offers of sports clubs, internships by employers, volunteer mentoring', 'residence permits', 'compulsory schooling'], r:0},
      {op:'Assess', t:'the limits of integration measures.', opts:['They depend on the willingness of both sides, waiting times, resources and acceptance in society; integration cannot be forced.', 'There are no limits.', 'Only the state can achieve integration.'], r:0}
    ],
    hinweise:['Integration requires opportunities and openness on both sides.'],
    merke:'Integration: language, education, work, social contacts · state and private measures complement each other · limits: resources, waiting times, prejudice, willingness.'}),

  /* ======================= GB · Population and migration (BPE 2) ======================= */
  blBau('zuordnung', {id:'GB1', modul:'GB', stufe:1, titel:'Stages of the demographic transition', tags:T.concat(['demographic transition', 'population']),
    text:'Which stage of the demographic transition model is described?',
    kategorien:['stage 1', 'stage 2', 'stage 3', 'stage 4', 'stage 5'], anzahl:8,
    faelle:[
      {t:'high birth rate and high, fluctuating death rate; very slow population growth', k:0}, {t:'pre-industrial society, e.g. Europe before 1750', k:0},
      {t:'death rate falls rapidly thanks to better hygiene and food, birth rate stays high – rapid growth', k:1}, {t:'e.g. Niger or Afghanistan today', k:1},
      {t:'birth rate falls, death rate is low – growth slows down', k:2},
      {t:'low birth and death rates; population stable', k:3},
      {t:'birth rate below death rate; population shrinks and ages', k:4}, {t:'e.g. Japan or Italy', k:4}
    ],
    hinweise:['Look at birth rate, death rate and the gap between them.'],
    merke:'Demographic transition: 1 high/high · 2 death rate falls (population explosion) · 3 birth rate falls · 4 low/low · 5 birth rate < death rate · population pyramids: pyramid (young), beehive (stable), urn (ageing).'}),
  blBau('rechnung', {id:'GB2', modul:'GB', stufe:2, titel:'Population growth and dependency', tags:T.concat(['population', 'growth rate', 'dependency ratio']),
    text:'A country has a birth rate of {gb} ‰ and a death rate of {gs} ‰ (per 1,000 inhabitants per year); migration is ignored. Population: {bv} million, of whom {ju} million are under 15 and {al} million are 65 or older.',
    kopf:'Demography',
    zeilen:[
      {id:'gb', t:'birth rate (‰)', aus:true}, {id:'gs', t:'death rate (‰)', aus:true}, {id:'bv', t:'population (million)', aus:true}, {id:'ju', t:'under 15 (million)', aus:true}, {id:'al', t:'65 and older (million)', aus:true},
      {id:'wr', t:'natural growth rate', e:'%', f:'(gb - gs) / 10'},
      {id:'vz', t:'doubling time (rule of 70, years)', kurz:'doubling time', f:'70 / ((gb - gs) / 10)'},
      {id:'aq', t:'dependency ratio ((under 15 + 65+) ÷ 15–64)', kurz:'dependency ratio', e:'%', f:'(ju + al) / (bv - ju - al) * 100'}
    ],
    werte:[{gb:38, gs:8, bv:24, ju:10.6, al:0.7}],
    sets:[[{gb:24, gs:7, bv:110, ju:33, al:5.5}], [{gb:14, gs:10, bv:65, ju:11.7, al:9.1}]],
    wahl:[{id:'w', t:'Which stage of the demographic transition fits best?', opts:['stage 2: high birth rate, low death rate, very young population', 'stage 4 or 5: low growth, ageing population'], r:'(gb - gs) >= 15 ? 0 : 1', weg:['High natural growth and a very young population.', 'Low natural growth.']}],
    hinweise:['Growth rate in % = (birth rate − death rate) ÷ 10.', 'Doubling time ≈ 70 ÷ growth rate in %.'],
    merke:'Natural growth = birth rate − death rate · doubling time ≈ 70 ÷ growth rate (%) · dependency ratio: young and old per 100 people of working age · basis for judging development and carrying capacity.'}),
  blBau('zuordnung', {id:'GB3', modul:'GB', stufe:1, titel:'Push or pull factors?', tags:T.concat(['migration', 'push and pull factors']),
    text:'Is it a push factor (in the region of origin) or a pull factor (in the destination)?',
    kategorien:['push factor', 'pull factor'], anzahl:8,
    faelle:[
      {t:'civil war and persecution', k:0}, {t:'droughts and crop failures due to climate change', k:0}, {t:'unemployment and poverty in rural areas', k:0}, {t:'lack of schools and hospitals', k:0},
      {t:'jobs and higher wages in the city', k:1}, {t:'political stability and safety', k:1}, {t:'family members who already live there', k:1}, {t:'better education and health care', k:1}
    ],
    hinweise:['Push: reasons to leave · pull: reasons to go somewhere.'],
    merke:'Migration as a result of spatial disparities: push factors (economic, political, ecological, demographic) and pull factors · forms: rural exodus, international migration, climate refugees · megacities as a result of rural-urban migration.'}),
  {
    id:'GB4', modul:'GB', typ:'berechnung', mehrfach:true, stufe:2, titel:'Carrying capacity and megacities',
    tags:T.concat(['carrying capacity', 'megacities', 'population distribution']),
    text:'Lagos (Nigeria) is one of the fastest-growing megacities in the world.',
    frage:W,
    optionen:[
      {text:'Settlement factors include natural factors (climate, water, soils, relief) and anthropogenic factors (jobs, infrastructure, political stability).', richtig:true},
      {text:'The carrying capacity of a region is the number of people it can sustain in the long term without damaging its natural basis.', richtig:true},
      {text:'Megacities have more than 10 million inhabitants; many grow in developing and emerging countries.', richtig:true},
      {text:'Rapid growth often leads to informal settlements (slums), traffic chaos and environmental problems.', richtig:true},
      {text:'Carrying capacity is a fixed value that technology and trade cannot change.', fehler:'Technology, trade, farming methods and consumption patterns change carrying capacity.'}
    ],
    hinweise:['Megacity: > 10 million inhabitants.'],
    merke:'Population distribution follows natural and human factors · carrying capacity depends on resources, technology and consumption · megacities: opportunities (jobs, services) and problems (slums, infrastructure, environment).'
  },
  blBau('fall', {id:'GB5', modul:'GB', stufe:3, titel:'Leaving the Sahel', tags:T.concat(['migration', 'climate refugees', 'Fallaufgabe']),
    text:'Amadou (19) lives in a village in Niger. Rainfall has become more irregular, the family’s harvest failed twice. His cousin works in Niamey and sends money home; others try to reach Europe. Niger has one of the highest birth rates in the world.',
    teile:[
      {op:'Identify', t:'two push factors.', opts:['crop failures caused by climate change and lack of jobs', 'high wages and good schools in the village', 'political stability and safety'], r:0},
      {op:'Explain', t:'why many migrants first move to the capital.', opts:['rural exodus: jobs, services and networks in the city are closer and cheaper to reach than migration abroad', 'Cities have no jobs.', 'International migration is easier.'], r:0},
      {op:'Explain', t:'the link between population growth and carrying capacity.', opts:['Rapid population growth increases pressure on scarce land and water; overuse can reduce carrying capacity further.', 'More people always increase carrying capacity.', 'There is no link.'], r:0},
      {op:'Evaluate', t:'a measure to reduce forced migration.', opts:['Improving local livelihoods, e.g. water management, adapted farming and education – reduces push factors but takes time and money.', 'closing all borders', 'doing nothing'], r:0}
    ],
    hinweise:['Push and pull, carrying capacity.'],
    merke:'Migration has economic, demographic, political and ecological causes · rural exodus often comes first · reducing push factors requires long-term development.'}),

  /* ======================= GC · Debating basics (BPE 3) ======================= */
  {
    id:'GC1', modul:'GC', typ:'berechnung', mehrfach:true, stufe:1, titel:'The idea of debating',
    tags:T.concat(['debating']),
    text:'Your class prepares for its first formal debate.',
    frage:W,
    optionen:[
      {text:'A debate is a structured argument about a motion, e.g. “This House would ban single-use plastics.”', richtig:true},
      {text:'The proposition (government) argues for the motion, the opposition against it.', richtig:true},
      {text:'Speakers may have to argue a side that does not match their own opinion – this trains changing perspectives.', richtig:true},
      {text:'Fair play, objectivity and respect for the other side are central values of debating.', richtig:true},
      {text:'Personal attacks on opponents are a legitimate debating strategy.', fehler:'Debaters attack arguments, never people (ad hominem attacks are against the rules and spirit of debating).'}
    ],
    hinweise:['Motion, proposition, opposition.'],
    merke:'Debating: structured argument about a motion · proposition vs. opposition · values: objectivity, commitment, fair play, change of perspective.'
  },
  blBau('zuordnung', {id:'GC2', modul:'GC', stufe:1, titel:'Debating terminology', tags:T.concat(['debating', 'terminology']),
    text:'Which term is described?',
    kategorien:['motion', 'rebuttal', 'point of information (POI)', 'chair', 'adjudicator'], anzahl:8,
    faelle:[
      {t:'the topic of the debate, formulated as a proposal', k:0}, {t:'“This House believes that …”', k:0},
      {t:'refuting the arguments of the other side', k:1}, {t:'showing why an opponent’s argument is wrong or irrelevant', k:1},
      {t:'a short question or remark offered to the speaker of the other side during his or her speech', k:2},
      {t:'chairs the debate, calls the speakers and keeps time and order', k:3},
      {t:'judges the debate and gives feedback', k:4}, {t:'decides which side has won and explains the decision', k:4}
    ],
    hinweise:['Roles and elements of a formal debate.'],
    merke:'Terminology: motion, proposition/opposition, speaker, rebuttal, point of information, reply speech, chair, timekeeper, adjudicator.'}),
  blBau('zuordnung', {id:'GC3', modul:'GC', stufe:2, titel:'Building an argument: the AREC model', tags:T.concat(['debating', 'argumentation', 'AREC']),
    text:'Motion: “This House would introduce a four-day school week.” Which part of the AREC model is the sentence?',
    kategorien:['Assertion', 'Reasoning', 'Evidence', 'Conclusion'], anzahl:8,
    faelle:[
      {t:'A four-day week would improve students’ well-being.', k:0}, {t:'Our first point: a shorter week increases motivation.', k:0},
      {t:'With an extra day off, students can recover from stress and come back to school more focused.', k:1}, {t:'This is because rest improves concentration and reduces burnout.', k:1},
      {t:'A study in a US school district showed lower absence rates after the switch.', k:2}, {t:'For example, teachers in pilot schools reported better concentration in class.', k:2},
      {t:'Therefore, a four-day week is good for students – please support the motion.', k:3}, {t:'This is why our proposal clearly benefits students.', k:3}
    ],
    hinweise:['Assertion – Reasoning – Evidence – Conclusion.'],
    merke:'AREC: Assertion (claim), Reasoning (why?), Evidence (example, data), Conclusion (link back to the motion) · body language, eye contact and voice support the argument.'}),
  {
    id:'GC4', modul:'GC', typ:'berechnung', mehrfach:true, stufe:2, titel:'Judging and feedback',
    tags:T.concat(['debating', 'adjudication', 'feedback']),
    text:'After the debate, the adjudicators give their decision and feedback.',
    frage:W,
    optionen:[
      {text:'Debates are often judged by content (arguments), style (delivery) and strategy (structure, teamwork, responding to the other side).', richtig:true},
      {text:'Good feedback is specific, names strengths first and gives concrete suggestions for improvement.', richtig:true},
      {text:'Debaters should accept constructive criticism and use it to rethink their positions.', richtig:true},
      {text:'In a Balloon Debate, each speaker represents a person and argues why he or she should stay in a sinking balloon – a playful exercise.', richtig:true},
      {text:'The team with the louder speakers automatically wins.', fehler:'Volume is not a criterion; persuasive content, clear style and good strategy count.'}
    ],
    hinweise:['Content, style, strategy.'],
    merke:'Judging: content, style, strategy · feedback culture: specific, fair, constructive · exercises: impromptu speeches, Balloon Debate.'
  },
  blBau('fall', {id:'GC5', modul:'GC', stufe:3, titel:'Preparing a debate on migration', tags:T.concat(['debating', 'migration', 'Fallaufgabe']),
    text:'Motion: “This House believes that rich countries should open their borders to climate refugees.” Your team is the opposition. You have one week to prepare.',
    teile:[
      {op:'Describe', t:'a sensible first step in preparation.', opts:['brainstorm arguments for both sides and anticipate the proposition’s main arguments', 'only write the closing words', 'ignore the other side'], r:0},
      {op:'Develop', t:'an argument for the opposition.', opts:['Open borders could overwhelm housing and integration systems; targeted help in affected regions and legal pathways may help more people.', 'Climate change does not exist.', 'Refugees are bad people.'], r:0},
      {op:'Explain', t:'how to rebut the argument “It is our moral duty because rich countries caused climate change.”', opts:['Accept the responsibility but argue that it is better fulfilled through climate finance and adaptation in the regions than through open borders.', 'Insult the speaker.', 'Ignore the argument.'], r:0},
      {op:'Explain', t:'why a team strategy is important.', opts:['Speakers divide arguments, avoid contradictions and build on each other; the last speaker summarises the clash.', 'Each speaker should improvise independently.', 'Only the first speaker matters.'], r:0}
    ],
    hinweise:['Anticipate, structure, rebut respectfully.'],
    merke:'Preparation: analyse the motion, collect arguments for both sides, divide roles, prepare rebuttals · argue respectfully and evidence-based.'}),

  /* ======================= GH · Cultural dimensions: Hofstede and Hall (BPE 4) ======================= */
  blBau('zuordnung', {id:'GH1', modul:'GH', stufe:1, titel:'Hofstede’s cultural dimensions', tags:T.concat(['Hofstede', 'cultural dimensions']),
    text:'Which of Hofstede’s dimensions is described?',
    kategorien:['power distance', 'individualism vs. collectivism', 'uncertainty avoidance', 'long-term orientation'], anzahl:8,
    faelle:[
      {t:'the extent to which less powerful members accept that power is distributed unequally', k:0}, {t:'Employees rarely contradict their boss; titles and hierarchy matter.', k:0},
      {t:'whether people see themselves mainly as “I” or as part of a “we” group', k:1}, {t:'Decisions are made with the family or group in mind; loyalty to the group is central.', k:1},
      {t:'how threatened people feel by unknown or ambiguous situations', k:2}, {t:'preference for detailed rules, plans and contracts', k:2},
      {t:'focus on future rewards, perseverance and saving', k:3}, {t:'Traditions are adapted pragmatically to changed conditions.', k:3}
    ],
    hinweise:['Further dimensions: masculinity vs. femininity, indulgence vs. restraint.'],
    merke:'Hofstede: power distance, individualism/collectivism, masculinity/femininity, uncertainty avoidance, long-term orientation, indulgence/restraint · scores compare countries, not individuals.'}),
  blBau('zuordnung', {id:'GH2', modul:'GH', stufe:1, titel:'Edward T. Hall: context, time and space', tags:T.concat(['Hall', 'high context', 'low context', 'monochronic', 'polychronic']),
    text:'Which concept of Edward T. Hall is described?',
    kategorien:['low-context communication', 'high-context communication', 'monochronic time', 'polychronic time'], anzahl:8,
    faelle:[
      {t:'Messages are explicit and direct; what is said is what is meant.', k:0}, {t:'Detailed written contracts are expected.', k:0},
      {t:'Much meaning lies in the situation, relationships and non-verbal signals.', k:1}, {t:'“Reading between the lines” is necessary.', k:1},
      {t:'One thing at a time; schedules and punctuality are very important.', k:2}, {t:'Interrupting a meeting for a phone call is considered rude.', k:2},
      {t:'Several things are done at the same time; relationships are more important than schedules.', k:3}, {t:'A meeting may start later and run longer without anyone minding.', k:3}
    ],
    hinweise:['Hall also describes proxemics: personal space differs between cultures.'],
    merke:'Hall: low vs. high context (explicit vs. implicit communication), monochronic vs. polychronic time, proxemics (personal distance) · Germany: rather low context and monochronic.'}),
  {
    id:'GH3', modul:'GH', typ:'berechnung', mehrfach:true, stufe:2, titel:'Applying the models to business',
    tags:T.concat(['Hofstede', 'Hall', 'intercultural business']),
    text:'A German engineering company (low power distance, high uncertainty avoidance, low context, monochronic) starts a joint project with a partner in a country with high power distance, collectivism, high context and polychronic time.',
    frage:W,
    optionen:[
      {text:'The German team may expect open discussion with everybody, while the partner’s employees wait for decisions from their superiors.', richtig:true},
      {text:'Building trust and personal relationships before business can be crucial for the partner.', richtig:true},
      {text:'Detailed schedules may be interpreted more flexibly by the partner; buffers and regular personal contact help.', richtig:true},
      {text:'Criticism should be given carefully and privately to avoid loss of face.', richtig:true},
      {text:'The German way of working is objectively the best and should simply be imposed.', fehler:'Cultural models are value-neutral; successful cooperation needs mutual adaptation.'}
    ],
    hinweise:['Use the dimensions to explain behaviour – not to judge it.'],
    merke:'Applying models: anticipate differences in hierarchy, communication, time and relationships · recommendations: preparation, trust-building, clear but respectful communication, flexibility.'
  },
  {
    id:'GH4', modul:'GH', typ:'berechnung', mehrfach:true, stufe:2, titel:'Criticism of dimension models',
    tags:T.concat(['Hofstede', 'criticism']),
    text:'Your teacher asks you to discuss the limits of Hofstede’s and Hall’s models.',
    frage:W,
    optionen:[
      {text:'Hofstede’s original data came from employees of one company (IBM) around 1970, which limits representativeness.', richtig:true},
      {text:'Equating cultures with nation states ignores regional, generational and individual differences within a country.', richtig:true},
      {text:'Cultures change over time, e.g. through globalisation and migration, while country scores can appear static.', richtig:true},
      {text:'The models give helpful orientation but can encourage stereotyping if they are applied to individuals.', richtig:true},
      {text:'Because the models are criticised, they have no value at all.', fehler:'Despite their limits, they offer a structured starting point for reflecting on cultural differences.'}
    ],
    hinweise:['Strengths and limits.'],
    merke:'Criticism: data basis, nation = culture, static view, risk of stereotyping · value: orientation, vocabulary for differences, starting point for reflection.'
  },
  blBau('fall', {id:'GH5', modul:'GH', stufe:3, titel:'The failed meeting in Shanghai', tags:T.concat(['Hofstede', 'Hall', 'Fallaufgabe']),
    text:'Lisa, 28, project manager from Stuttgart, meets the management of a Chinese supplier for the first time. She arrives exactly on time, skips small talk, presents a detailed timetable and openly points out quality problems in front of the whole team. The Chinese managers remain polite but quiet; the next deliveries are delayed.',
    teile:[
      {op:'Analyse', t:'Lisa’s criticism in front of the team with Hofstede.', opts:['high power distance and collectivism: public criticism causes loss of face for the managers and the group', 'low power distance: criticism is always welcome', 'uncertainty avoidance: China likes many rules'], r:0},
      {op:'Analyse', t:'the missing small talk with Hall.', opts:['high-context culture: relationships and trust come before business', 'low-context culture: only facts count', 'monochronic: one task at a time'], r:0},
      {op:'Recommend', t:'how Lisa should behave next time.', opts:['invest in relationship building, address problems privately and indirectly, involve senior managers, allow time', 'be even more direct and threaten to cancel the contract', 'send only e-mails'], r:0},
      {op:'Assess', t:'the limits of the analysis.', opts:['The individuals may not match national tendencies; other reasons (capacity, prices) could also explain the delays.', 'The models explain everything perfectly.', 'Culture plays no role in business.'], r:0}
    ],
    hinweise:['Face, hierarchy, context.'],
    merke:'Cultural models explain misunderstandings and help to derive recommendations · avoid overgeneralisation.'}),

  /* ======================= GE · Climate, water and biomes (BPE 5.1–5.3) ======================= */
  blBau('zuordnung', {id:'GE1', modul:'GE', stufe:1, titel:'Climate elements or climate factors?', tags:T.concat(['climate', 'climate elements', 'climate factors']),
    text:'Is it a climate element (measurable property of the atmosphere) or a climate factor (cause that influences the climate)?',
    kategorien:['climate element', 'climate factor'], anzahl:8,
    faelle:[
      {t:'temperature', k:0}, {t:'precipitation', k:0}, {t:'air pressure and wind', k:0}, {t:'humidity', k:0},
      {t:'latitude', k:1}, {t:'altitude', k:1}, {t:'distance from the sea (continentality)', k:1}, {t:'ocean currents, e.g. the Gulf Stream', k:1}
    ],
    hinweise:['Elements are measured; factors explain differences.'],
    merke:'Climate: long-term average state of the atmosphere (≥ 30 years) · elements: temperature, precipitation, wind, pressure, humidity · factors: latitude, altitude, continentality, ocean currents, relief · climate zones: tropical, subtropical, temperate, polar.'}),
  {
    id:'GE2', modul:'GE', typ:'berechnung', mehrfach:true, stufe:2, titel:'Global wind and pressure systems',
    tags:T.concat(['climate', 'trade winds', 'ITCZ', 'climate diagram']),
    text:'You analyse the global atmospheric circulation and some climate diagrams.',
    frage:W,
    optionen:[
      {text:'At the equator, warm air rises (low pressure, ITCZ) and causes heavy convective rainfall.', richtig:true},
      {text:'The air sinks again around 30° latitude (subtropical high), which explains many hot deserts there.', richtig:true},
      {text:'The trade winds blow from the subtropical highs towards the equator.', richtig:true},
      {text:'In a climate diagram (Walter/Lieth), months in which the precipitation curve lies below the temperature curve are arid.', richtig:true},
      {text:'The ITCZ stays at the equator all year round.', fehler:'It moves with the position of the sun; this causes rainy and dry seasons, e.g. in the savannas.'}
    ],
    hinweise:['Hadley cell: rising air at the equator, sinking air in the subtropics.'],
    merke:'Global circulation: ITCZ (low pressure, rain), subtropical highs (deserts), trade winds, westerlies · seasonal shift of the ITCZ → rainy/dry seasons · climate diagram: humid vs. arid months.'
  },
  blBau('rechnung', {id:'GE3', modul:'GE', stufe:2, titel:'Water availability per person', tags:T.concat(['water', 'water scarcity', 'Falkenmark']),
    text:'A country has renewable water resources of {ws} km³ per year (1 km³ = 1 billion m³) and a population of {bv} million. The population is expected to grow by {wa} % until 2050. (Falkenmark indicator: below 1,700 m³ per person and year = water stress, below 1,000 m³ = water scarcity.)',
    kopf:'Water',
    zeilen:[
      {id:'ws', t:'water resources (km³)', aus:true}, {id:'bv', t:'population (million)', aus:true}, {id:'wa', t:'population growth until 2050', e:'%', aus:true},
      {id:'pk', t:'water per person today (m³)', kurz:'water per person today', f:'ws * 1000 / bv'},
      {id:'p5', t:'water per person 2050 (m³)', kurz:'water per person 2050', f:'ws * 1000 / (bv * (1 + wa / 100))'}
    ],
    werte:[{ws:57, bv:30, wa:40}],
    sets:[[{ws:60, bv:52, wa:30}], [{ws:120, bv:45, wa:50}]],
    wahl:[{id:'w', t:'How should the situation in 2050 be classified?', opts:['water scarcity (below 1,000 m³)', 'water stress (1,000–1,700 m³)', 'no water stress (above 1,700 m³)'], r:'ws * 1000 / (bv * (1 + wa / 100)) < 1000 ? 0 : ws * 1000 / (bv * (1 + wa / 100)) < 1700 ? 1 : 2', weg:['below 1,000 m³ per person', 'between 1,000 and 1,700 m³ per person', 'above 1,700 m³ per person']}],
    hinweise:['1 km³ = 1,000 million m³ → m³ per person = km³ · 1,000 ÷ population in million.'],
    merke:'Water per person = renewable water ÷ population · population growth reduces availability · conflicts over water (dams, withdrawal) · water management: efficient irrigation, reuse, cooperation.'}),
  blBau('zuordnung', {id:'GE4', modul:'GE', stufe:1, titel:'Which biome?', tags:T.concat(['biomes', 'rainforest', 'savanna', 'temperate zone']),
    text:'Assign the feature to the biome.',
    kategorien:['tropical rainforest', 'savanna', 'temperate zone'], anzahl:8,
    faelle:[
      {t:'hot and humid all year; rain almost every afternoon', k:0}, {t:'nutrient-poor soils; nutrients are stored in the vegetation and recycled quickly', k:0}, {t:'the highest biodiversity on earth', k:0},
      {t:'distinct rainy and dry seasons', k:1}, {t:'grassland with scattered trees, e.g. in East Africa', k:1},
      {t:'four seasons with warm summers and cool winters', k:2}, {t:'fertile soils with a thick humus layer, good for arable farming', k:2}, {t:'deciduous and mixed forests, e.g. Central Europe', k:2}
    ],
    hinweise:['Climate determines vegetation and soils.'],
    merke:'Biomes: tropical rainforest (humid, nutrient-poor soils, high biodiversity), savanna (rainy/dry seasons, grassland), temperate zone (seasons, fertile soils) · geofactors (climate, soils, relief, water, vegetation) and humans interact.'}),
  blBau('fall', {id:'GE5', modul:'GE', stufe:3, titel:'A dam on the Nile', tags:T.concat(['water', 'water conflicts', 'Fallaufgabe']),
    text:'Ethiopia has built a large dam on the Blue Nile to produce electricity for millions of people. Egypt, which gets almost all its water from the Nile, fears shortages, especially during the filling of the reservoir. Sudan hopes for better flood control.',
    teile:[
      {op:'Explain', t:'why water is important for the carrying capacity of a region.', opts:['Water is needed for drinking, agriculture, industry and energy; in dry regions it limits how many people can live there.', 'Water has no influence on carrying capacity.', 'Only rain in winter matters.'], r:0},
      {op:'Explain', t:'the conflict of interests.', opts:['upstream country (energy, development) vs. downstream country (water security for agriculture and drinking water)', 'Both countries want less electricity.', 'There is no conflict because the Nile has enough water at all times.'], r:0},
      {op:'Develop', t:'an approach to solve the conflict.', opts:['a binding agreement on filling speed and minimum water releases, joint management and data sharing', 'military action', 'stopping all water use'], r:0},
      {op:'Assess', t:'the role of efficient irrigation in Egypt.', opts:['reduces water demand and the vulnerability to shortages – an important part of sustainable water management', 'irrelevant', 'increases water demand'], r:0}
    ],
    hinweise:['Upstream vs. downstream interests.'],
    merke:'Water conflicts: transboundary rivers, dams, withdrawals · solutions: treaties, joint management, efficient use, water pricing.'}),

  /* ======================= GF · Threats to ecosystems and solutions (BPE 5.4–5.5) ======================= */
  blBau('zuordnung', {id:'GF1', modul:'GF', stufe:1, titel:'Threats to ecosystems', tags:T.concat(['ecosystems', 'deforestation', 'desertification']),
    text:'Which threat to carrying capacity is described?',
    kategorien:['deforestation and erosion', 'overuse and overgrazing', 'desertification', 'loss of species'], anzahl:8,
    faelle:[
      {t:'Rainforest is cleared for soy and cattle; heavy rain washes away the thin topsoil.', k:0}, {t:'Logging on steep slopes leads to landslides.', k:0},
      {t:'Too many goats and cattle eat the vegetation faster than it can regrow.', k:1}, {t:'Fields are used without fallow periods until the soil is exhausted.', k:1},
      {t:'Dry areas at the edge of the Sahara gradually turn into desert.', k:2}, {t:'Land degradation in drylands caused by climate variation and human activities', k:2},
      {t:'Habitat loss causes many plant and animal species to die out.', k:3}, {t:'Coral reefs bleach and their biodiversity declines.', k:3}
    ],
    hinweise:['Population pressure and climate change intensify all of these threats.'],
    merke:'Threats: deforestation, erosion, overuse/overgrazing, population pressure, climate change, desertification, loss of species · consequences are global (CO₂, migration, food security).'}),
  blBau('zuordnung', {id:'GF2', modul:'GF', stufe:2, titel:'Approaches to protect ecosystems', tags:T.concat(['environmental policy', 'external costs', 'certification']),
    text:'Assign the measure to the type of approach.',
    kategorien:['internalising external costs (market-based)', 'command-and-control (regulation)', 'certification', 'ecological measure'], anzahl:8,
    faelle:[
      {t:'CO₂ price in the EU emissions trading system', k:0}, {t:'a tax on plastic packaging', k:0},
      {t:'ban on importing products from illegal deforestation (EU deforestation regulation)', k:1}, {t:'legal limits for pollutants', k:1},
      {t:'FSC label for wood from sustainable forestry', k:2}, {t:'Fairtrade or organic labels on food', k:2},
      {t:'reforestation and agroforestry projects', k:3}, {t:'creating protected areas and wildlife corridors', k:3}
    ],
    hinweise:['External costs: costs that the polluter does not pay.'],
    merke:'Solutions: internalise external costs (taxes, emissions trading), regulation (bans, limits), certification (FSC, Fairtrade), ecological measures (reforestation, protected areas) · actors: consumers, states, companies.'}),
  {
    id:'GF3', modul:'GF', typ:'berechnung', mehrfach:true, stufe:2, titel:'Why local damage has global consequences',
    tags:T.concat(['rainforest', 'climate change', 'global consequences']),
    text:'The Amazon rainforest is being cleared at a high rate.',
    frage:W,
    optionen:[
      {text:'Deforestation releases stored carbon and reduces the forest’s ability to absorb CO₂, which accelerates climate change.', richtig:true},
      {text:'The rainforest recycles a large part of its own rainfall; large-scale clearing can turn parts into savanna (tipping point).', richtig:true},
      {text:'Loss of biodiversity means the loss of genetic resources, e.g. for medicine.', richtig:true},
      {text:'Demand in industrialised countries, e.g. for soy feed and beef, contributes to deforestation.', richtig:true},
      {text:'Cleared rainforest soils are very fertile for decades.', fehler:'Rainforest soils are nutrient-poor; after clearing, fertility declines within a few years.'}
    ],
    hinweise:['Local action – global effect.'],
    merke:'Rainforest destruction: CO₂ emissions, regional climate change, loss of biodiversity, tipping points · global demand as a driver · responsibility of consumers and companies along supply chains.'
  },
  blBau('rechnung', {id:'GF4', modul:'GF', stufe:2, titel:'Internalising external costs with a CO₂ price', tags:T.concat(['external costs', 'CO₂ price']),
    text:'Producing one tonne of beef causes about {co} tonnes of CO₂ equivalents. The damage per tonne of CO₂ is estimated at {sk} €. The market price of beef is {mp} € per tonne.',
    kopf:'External costs',
    zeilen:[
      {id:'co', t:'CO₂e per tonne of beef', aus:true}, {id:'sk', t:'damage per tonne of CO₂', e:'€', aus:true}, {id:'mp', t:'market price per tonne', e:'€', aus:true},
      {id:'ek', t:'external costs per tonne of beef', e:'€', f:'co * sk'},
      {id:'np', t:'price including external costs', e:'€', f:'mp + co * sk'},
      {id:'pa', t:'price increase', e:'%', f:'co * sk / mp * 100'}
    ],
    werte:[{co:60, sk:200, mp:6500}],
    sets:[[{co:50, sk:180, mp:7000}], [{co:70, sk:220, mp:6000}]],
    wahl:[{id:'w', t:'What would the internalisation of these costs achieve?', opts:['The price would reflect the true costs; demand would shift towards lower-emission products (polluter-pays principle).', 'Beef would become cheaper.', 'Nothing, prices have no effect on demand.'], r:'0'}],
    hinweise:['External costs = emissions · damage per tonne.'],
    merke:'External costs: damage borne by third parties · internalisation via taxes or emissions trading (polluter-pays principle) · prices then send correct signals.'}),
  blBau('fall', {id:'GF5', modul:'GF', stufe:3, titel:'Palm oil in your shampoo', tags:T.concat(['palm oil', 'certification', 'Fallaufgabe']),
    text:'Indonesia is one of the largest palm oil producers; large areas of rainforest have been converted into plantations. Palm oil is found in many products, from chocolate to shampoo. A German cosmetics company wants to act more responsibly.',
    teile:[
      {op:'Analyse', t:'the consequences of palm oil plantations.', opts:['deforestation, CO₂ emissions (especially from peatlands), loss of species such as orangutans, land conflicts – but also income and jobs', 'only advantages', 'no ecological effects'], r:0},
      {op:'Evaluate', t:'a total switch to other oils.', opts:['Not necessarily better: oil palms are very productive; other oils need more land. Sustainable sourcing may be more effective.', 'always the best solution', 'impossible because no other oils exist'], r:0},
      {op:'Recommend', t:'measures for the company.', opts:['certified, traceable palm oil (e.g. RSPO segregated), supplier audits, deforestation-free supply chains', 'buying only the cheapest oil', 'stopping all production'], r:0},
      {op:'Explain', t:'what consumers can do.', opts:['buy less and choose products with credible certification; inform themselves', 'nothing at all', 'buy as much as possible'], r:0}
    ],
    hinweise:['Consider ecological, economic and social aspects.'],
    merke:'Responsible action of all actors: companies (sourcing, certification), states (regulation), consumers (sustainable consumption).'}),

  /* ======================= GI · Advanced debating (BPE 6) ======================= */
  blBau('zuordnung', {id:'GI1', modul:'GI', stufe:2, titel:'Rebuttal, POI or reply speech?', tags:T.concat(['debating', 'rebuttal', 'POI', 'reply speech']),
    text:'Which element of advanced debating is described?',
    kategorien:['rebuttal', 'point of information', 'reply speech'], anzahl:8,
    faelle:[
      {t:'“Our opponents claim that … – but this ignores …”', k:0}, {t:'attacking the logic, relevance or evidence of the other side’s argument', k:0}, {t:'should be at the beginning of every speech after the first', k:0},
      {t:'“Point of information!” – a short question offered during an opponent’s speech', k:1}, {t:'The speaker can accept or decline it.', k:1},
      {t:'a short, final speech that summarises the debate from the team’s point of view', k:2}, {t:'No new arguments may be introduced; it compares both sides’ main clashes.', k:2}, {t:'usually given by the first or second speaker of each team, opposition first', k:2}
    ],
    hinweise:['Rebuttal: refute · POI: interrupt briefly · reply: summarise.'],
    merke:'Advanced debating: rebuttal (refuting), points of information (short interventions), reply speech (biased summary, no new arguments) · rhetorical devices: rhetorical questions, tricolon, contrast, analogy.'}),
  blBau('zuordnung', {id:'GI2', modul:'GI', stufe:2, titel:'Rhetorical devices', tags:T.concat(['debating', 'rhetoric']),
    text:'Which rhetorical device is used?',
    kategorien:['rhetorical question', 'rule of three (tricolon)', 'contrast (antithesis)', 'analogy'], anzahl:8,
    faelle:[
      {t:'“Do we really want our children to grow up in a world without forests?”', k:0}, {t:'“Who would seriously accept such risks?”', k:0},
      {t:'“This policy is cheap, fast and fair.”', k:1}, {t:'“We need education, investment and cooperation.”', k:1},
      {t:'“They talk about costs – we talk about lives.”', k:2}, {t:'“Not charity, but justice.”', k:2},
      {t:'“Ignoring climate change is like ignoring a fire alarm because the music is too loud.”', k:3}, {t:'“A country without trade is like a body without blood circulation.”', k:3}
    ],
    hinweise:['Rhetorical devices make arguments memorable.'],
    merke:'Rhetorical devices: rhetorical questions, rule of three, contrast, analogy, repetition, emotive language · use them to support, not replace, arguments.'}),
  {
    id:'GI3', modul:'GI', typ:'berechnung', mehrfach:true, stufe:2, titel:'Handling points of information',
    tags:T.concat(['debating', 'POI']),
    text:'You are speaking for the proposition. An opponent stands up and says: “Point of information!”',
    frage:W,
    optionen:[
      {text:'You may accept or decline the point; accepting one or two points shows confidence.', richtig:true},
      {text:'Points of information are usually not allowed in the first and last minute of a speech (protected time).', richtig:true},
      {text:'A good point of information is short and precise and exposes a weakness in the speaker’s argument.', richtig:true},
      {text:'After answering briefly, you should return to your structure.', richtig:true},
      {text:'The person offering the point may give a two-minute speech.', fehler:'A point of information should take only about 15 seconds.'}
    ],
    hinweise:['Short, precise, respectful.'],
    merke:'POIs: offered by the other side, max. about 15 seconds, not in protected time, speaker decides whether to accept · answer briefly and continue.'
  },
  {
    id:'GI4', modul:'GI', typ:'berechnung', mehrfach:true, stufe:3, titel:'Impromptu debate',
    tags:T.concat(['debating', 'impromptu', 'preparation']),
    text:'At a debating competition, your team receives the motion only shortly before the debate (impromptu).',
    frage:W,
    optionen:[
      {text:'First define the motion and the key terms clearly, then agree on a team line (main idea).', richtig:true},
      {text:'Brainstorm arguments quickly, select the strongest two or three and distribute them among the speakers.', richtig:true},
      {text:'Predict the main arguments of the other side and prepare rebuttals.', richtig:true},
      {text:'Use general knowledge from topics like globalisation, migration, ecosystems and development as evidence.', richtig:true},
      {text:'Each speaker should prepare alone without talking to the team.', fehler:'Team coordination is essential to avoid contradictions and overlaps.'}
    ],
    hinweise:['Definition – team line – arguments – rebuttal – roles.'],
    merke:'Impromptu preparation: define the motion, team line, select and distribute arguments, anticipate rebuttals, use knowledge from the course.'
  },
  blBau('fall', {id:'GI5', modul:'GI', stufe:3, titel:'Reply speech on fair trade', tags:T.concat(['debating', 'reply speech', 'Fallaufgabe']),
    text:'Motion: “This House would make fair trade standards mandatory for all imports to the EU.” You give the reply speech for the proposition. The opposition argued: prices would rise, small producers could not afford certification, and WTO rules forbid such requirements.',
    teile:[
      {op:'Describe', t:'the purpose of the reply speech.', opts:['to summarise the main clashes and explain why your side has won them – without new arguments', 'to introduce completely new arguments', 'to repeat the first speech word for word'], r:0},
      {op:'Identify', t:'a good structure.', opts:['Clash 1: costs – Clash 2: small producers – Clash 3: legality; for each, compare both sides and show why yours is stronger', 'only thank the audience', 'list every argument in chronological order'], r:0},
      {op:'Develop', t:'a sentence for the clash on costs.', opts:['“They told you prices would rise – but they never answered our point that today’s low prices are paid by workers earning poverty wages.”', '“They are wrong because they are wrong.”', '“We have a new statistic nobody mentioned yet …”'], r:0},
      {op:'Explain', t:'why the opposition speaks first in the reply speeches.', opts:['The proposition, which opened the debate, gets the last word.', 'because the opposition is always weaker', 'There is no rule.'], r:0}
    ],
    hinweise:['Reply: biased summary, clashes, no new material.'],
    merke:'Reply speech: summarise clashes, weigh arguments, no new arguments · opposition reply first, proposition last.'}),

  /* ======================= GJ · Measuring development and its causes (BPE 7.1–7.2) ======================= */
  blBau('zuordnung', {id:'GJ1', modul:'GJ', stufe:1, titel:'Classifying countries', tags:T.concat(['development', 'country classification']),
    text:'Which category fits the description best?',
    kategorien:['More Developed Countries (MDCs)', 'Newly Industrialised Countries (NICs)', 'Less Developed Countries (LDCs)', 'Least Developed Countries (LLDCs)'], anzahl:8,
    faelle:[
      {t:'high income, high life expectancy, service-based economy, e.g. Germany, Japan', k:0}, {t:'very high Human Development Index', k:0},
      {t:'rapid industrialisation and export growth, e.g. Vietnam, Malaysia', k:1}, {t:'strong growth in manufacturing; rising middle class', k:1},
      {t:'low to middle income, large agricultural sector, e.g. Kenya, Bolivia', k:2},
      {t:'the poorest countries according to the UN, with very low income and high economic vulnerability, e.g. Chad, Niger', k:3}, {t:'very low HDI, often landlocked or affected by conflicts', k:3},
      {t:'growing industries, but still large regional disparities, e.g. Mexico', k:1}
    ],
    hinweise:['Classifications are simplifications; borders are fluid.'],
    merke:'Classification: MDCs, NICs, LDCs, LLDCs · indicators beyond GDP: HDI (life expectancy, education, income), demography, sectors, human rights, infrastructure, internet access, drinking water.'}),
  blBau('rechnung', {id:'GJ2', modul:'GJ', stufe:2, titel:'Comparing development indicators', tags:T.concat(['development', 'indicators', 'GNI per capita']),
    text:'Compare two countries:'
      + '<div style="overflow-x:auto;margin:6px 0 8px"><table style="border-collapse:collapse;font-size:.86rem"><tr><th style="border:1px solid var(--linie);padding:3px 8px"></th><th style="border:1px solid var(--linie);padding:3px 8px">Country A</th><th style="border:1px solid var(--linie);padding:3px 8px">Country B</th></tr>'
      + '<tr><td style="border:1px solid var(--linie);padding:3px 8px">GNI (billion US-$, PPP)</td><td style="border:1px solid var(--linie);padding:3px 8px">{gn@0}</td><td style="border:1px solid var(--linie);padding:3px 8px">{gn@1}</td></tr>'
      + '<tr><td style="border:1px solid var(--linie);padding:3px 8px">population (million)</td><td style="border:1px solid var(--linie);padding:3px 8px">{bv@0}</td><td style="border:1px solid var(--linie);padding:3px 8px">{bv@1}</td></tr>'
      + '<tr><td style="border:1px solid var(--linie);padding:3px 8px">employment in agriculture (million)</td><td style="border:1px solid var(--linie);padding:3px 8px">{la@0}</td><td style="border:1px solid var(--linie);padding:3px 8px">{la@1}</td></tr>'
      + '<tr><td style="border:1px solid var(--linie);padding:3px 8px">total employment (million)</td><td style="border:1px solid var(--linie);padding:3px 8px">{er@0}</td><td style="border:1px solid var(--linie);padding:3px 8px">{er@1}</td></tr>'
      + '<tr><td style="border:1px solid var(--linie);padding:3px 8px">people with access to safe drinking water (million)</td><td style="border:1px solid var(--linie);padding:3px 8px">{tw@0}</td><td style="border:1px solid var(--linie);padding:3px 8px">{tw@1}</td></tr></table></div>',
    spalten:['Country A', 'Country B'],
    zeilen:[
      {id:'gn', t:'GNI (billion US-$)', aus:true}, {id:'bv', t:'population (million)', aus:true}, {id:'la', t:'agriculture (million)', aus:true}, {id:'er', t:'employment (million)', aus:true}, {id:'tw', t:'drinking water (million)', aus:true},
      {id:'pk', t:'GNI per capita (US-$, PPP)', kurz:'GNI per capita', f:'gn * 1000 / bv'},
      {id:'ag', t:'share of employment in agriculture', kurz:'agriculture share', e:'%', f:'la / er * 100'},
      {id:'wq', t:'share of population with safe drinking water', kurz:'drinking water share', e:'%', f:'tw / bv * 100'}
    ],
    werte:[{gn:42, bv:21, la:6.2, er:8.4, tw:9.5}, {gn:1350, bv:100, la:12.6, er:52, tw:96}],
    sets:[[{gn:60, bv:30, la:8.1, er:11, tw:15}, {gn:2100, bv:120, la:14.4, er:60, tw:110}]],
    wahl:[{id:'w', t:'Which classification is plausible?', opts:['A: least developed country · B: newly industrialised country', 'A: newly industrialised country · B: least developed country', 'both: more developed countries'], r:'0'}],
    hinweise:['GNI per capita = GNI ÷ population (billion ÷ million → · 1,000).'],
    merke:'Indicators: GNI per capita (PPP), sector structure (high agriculture share = low development), access to drinking water, life expectancy, literacy, HDI · several indicators together give a clearer picture.'}),
  {
    id:'GJ3', modul:'GJ', typ:'berechnung', mehrfach:true, stufe:2, titel:'The Human Development Index',
    tags:T.concat(['development', 'HDI']),
    text:'The UN publishes the Human Development Index every year.',
    frage:W,
    optionen:[
      {text:'The HDI combines three dimensions: a long and healthy life (life expectancy), knowledge (years of schooling) and a decent standard of living (GNI per capita, PPP).', richtig:true},
      {text:'Values range from 0 to 1; countries are grouped into very high, high, medium and low human development.', richtig:true},
      {text:'Two countries with similar income can have very different HDI values, e.g. because of differences in health and education.', richtig:true},
      {text:'The HDI does not reflect inequality within a country, ecological sustainability or human rights.', richtig:true},
      {text:'The HDI measures only GDP growth.', fehler:'It deliberately goes beyond income and includes health and education.'}
    ],
    hinweise:['Three dimensions: health, education, income.'],
    merke:'HDI: life expectancy, education, GNI per capita · 0–1 · criticism: averages hide inequality, no ecological or political dimension · supplemented by other indicators.'
  },
  blBau('zuordnung', {id:'GJ4', modul:'GJ', stufe:2, titel:'Causes of underdevelopment', tags:T.concat(['development', 'causes', 'colonialism', 'institutions']),
    text:'Which group of causes does the example belong to?',
    kategorien:['population growth', 'colonial past', 'weak institutions', 'infrastructure'], anzahl:8,
    faelle:[
      {t:'Very high birth rates mean that growth in output is eaten up by population growth.', k:0}, {t:'a very young population that needs schools and jobs', k:0},
      {t:'Borders drawn by colonial powers divide ethnic groups and cause conflicts.', k:1}, {t:'The economy is still focused on exporting raw materials, as under colonial rule.', k:1},
      {t:'Corruption and lack of independent courts deter investors.', k:2}, {t:'Insecure property rights prevent farmers from investing in their land.', k:2},
      {t:'Missing roads and ports make it expensive to bring goods to markets.', k:3}, {t:'Unreliable electricity supply hampers production.', k:3}
    ],
    hinweise:['Internal and external causes interact.'],
    merke:'Causes of underdevelopment: population growth, colonial legacy (borders, raw-material dependency, authoritarian structures), weak institutions (corruption, property rights, rule of law), poor infrastructure · approaches: education, family planning, good governance, adapted technology, agricultural development.'}),
  blBau('fall', {id:'GJ5', modul:'GJ', stufe:3, titel:'Rwanda after 1994', tags:T.concat(['development', 'institutions', 'Fallaufgabe']),
    text:'After the genocide of 1994, Rwanda was one of the poorest countries in the world. Since then, the government has improved health care, fought corruption, built roads and invested in digital infrastructure; the birth rate has fallen considerably. Critics point to the lack of political freedom and press freedom.',
    teile:[
      {op:'Identify', t:'factors that contributed to development.', opts:['better health care, fight against corruption, infrastructure, falling birth rate', 'more conflicts and higher birth rates', 'closing the economy to the world'], r:0},
      {op:'Explain', t:'why falling birth rates can support development.', opts:['More resources per child for education and health, a larger working-age share (demographic dividend)', 'They reduce the number of workers immediately to zero.', 'They have no effect.'], r:0},
      {op:'Assess', t:'the criticism of the lack of political freedom.', opts:['Human rights are part of development; authoritarian stability can achieve progress but carries risks for sustainability and legitimacy.', 'Political freedom has nothing to do with development.', 'Development is only measured by GDP.'], r:0},
      {op:'Evaluate', t:'which indicator shows the progress best.', opts:['several indicators together, e.g. HDI, life expectancy, school enrolment, poverty rate – plus human rights indicators', 'only the number of roads', 'only GDP'], r:0}
    ],
    hinweise:['Development is multi-dimensional.'],
    merke:'Development needs institutions, health, education and infrastructure · demographic dividend · development includes human rights.'}),

  /* ======================= GM · Industrialised countries, multinationals, private initiatives (BPE 7.3–7.5) ======================= */
  {
    id:'GM1', modul:'GM', typ:'berechnung', mehrfach:true, stufe:2, titel:'Trade policy, aid and conditionality',
    tags:T.concat(['development aid', 'WTO', 'IMF', 'World Bank', 'Washington Consensus']),
    text:'Developing countries criticise the role of industrialised countries.',
    frage:W,
    optionen:[
      {text:'Agricultural subsidies in the EU and USA can depress world prices and harm farmers in developing countries.', richtig:true},
      {text:'Tariff escalation (higher tariffs on processed goods than on raw materials) makes it harder for developing countries to export processed products.', richtig:true},
      {text:'The “Washington Consensus” stood for loans with conditions such as privatisation, liberalisation and budget cuts; critics say it often increased poverty in the short run.', richtig:true},
      {text:'The UN target for official development assistance is 0.7 % of gross national income.', richtig:true},
      {text:'Development aid always reaches the poorest people directly and is never misused.', fehler:'Aid can be ineffective if it is tied to donor interests, creates dependency or is diverted through corruption; effectiveness must be checked.'}
    ],
    hinweise:['Free trade vs. protectionism; conditionality.'],
    merke:'Role of industrialised countries: trade policy (subsidies, tariffs, WTO), development aid (aims, problems: dependency, tied aid, corruption), IMF/World Bank conditionality (Washington Consensus) · ODA target 0.7 % of GNI.'
  },
  blBau('rechnung', {id:'GM2', modul:'GM', stufe:2, titel:'Official development assistance (ODA)', tags:T.concat(['development aid', 'ODA']),
    text:'Country X has a gross national income of {bn} billion € and spends {oa} billion € on official development assistance. Of this, {bi} billion € are spent on refugees in the donor country itself.',
    kopf:'ODA',
    zeilen:[
      {id:'bn', t:'GNI (billion €)', aus:true}, {id:'oa', t:'ODA (billion €)', aus:true}, {id:'bi', t:'refugee costs in the donor country', aus:true},
      {id:'oq', t:'ODA quota', e:'%', f:'oa / bn * 100'},
      {id:'oo', t:'ODA quota without in-donor refugee costs', kurz:'ODA quota without refugee costs', e:'%', f:'(oa - bi) / bn * 100'},
      {id:'fz', t:'additional ODA needed to reach 0.7 % (billion €)', kurz:'gap to 0.7 %', f:'max(0, bn * 0.007 - oa)'}
    ],
    werte:[{bn:4200, oa:29.4, bi:4.2}],
    sets:[[{bn:3000, oa:15, bi:1.5}], [{bn:900, oa:8.1, bi:0.9}]],
    wahl:[{id:'w', t:'Why is it criticised that refugee costs in the donor country count as ODA?', opts:['The money does not reach developing countries, so the quota overstates actual support for development.', 'Because refugees do not need support.', 'Because ODA must be spent only on weapons.'], r:'0'}],
    hinweise:['ODA quota = ODA ÷ GNI · 100.'],
    merke:'ODA quota = ODA ÷ GNI · target 0.7 % · quality matters as much as quantity (untied aid, ownership, effectiveness).'}),
  blBau('zuordnung', {id:'GM3', modul:'GM', stufe:2, titel:'Multinational companies in developing countries', tags:T.concat(['multinational companies', 'working conditions', 'market power']),
    text:'Is the effect rather positive or negative for the host country?',
    kategorien:['positive effect', 'negative effect'], anzahl:8,
    faelle:[
      {t:'new jobs and training for local workers', k:0}, {t:'transfer of technology and know-how', k:0}, {t:'tax revenue and export earnings', k:0}, {t:'local suppliers grow with the company', k:0},
      {t:'very low wages and unsafe working conditions in supplier factories', k:1}, {t:'destruction of livelihoods through pesticides or land grabbing', k:1},
      {t:'Patents and market power make seeds and medicines expensive.', k:1}, {t:'Profits are transferred abroad and resources exploited cheaply.', k:1}
    ],
    hinweise:['Effects depend on regulation and corporate responsibility.'],
    merke:'Multinationals: investment, jobs, technology vs. poor working conditions, environmental damage, market power (contract terms, patents, resources) · solutions: supply chain due diligence laws, international standards, CSR, certification.'}),
  {
    id:'GM4', modul:'GM', typ:'berechnung', mehrfach:true, stufe:2, titel:'Private initiatives: fair trade, NGOs, microcredit',
    tags:T.concat(['fair trade', 'NGOs', 'microcredit', 'sustainable consumption']),
    text:'Besides states, private initiatives also try to improve living conditions in developing countries.',
    frage:W,
    optionen:[
      {text:'Fair trade guarantees producers minimum prices and a premium for community projects.', richtig:true},
      {text:'Microcredits give small loans to people without access to banks, often women, to start small businesses.', richtig:true},
      {text:'Very high interest rates and over-indebtedness are criticised in parts of the microcredit sector.', richtig:true},
      {text:'The ecological footprint of food or clothing depends on production methods, transport and season; local is not automatically better.', richtig:true},
      {text:'Ecotourism always protects nature, regardless of how many tourists come.', fehler:'Too many tourists can damage ecosystems; ecotourism needs limits and benefits for the local population.'}
    ],
    hinweise:['Assess effects for people and environment.'],
    merke:'Private initiatives: sustainable consumption (life cycle assessment, fair trade, ecotourism), NGOs, microcredits · opportunities and limits (scale, costs, over-indebtedness, greenwashing).'
  },
  blBau('fall', {id:'GM5', modul:'GM', stufe:3, titel:'Cocoa from Côte d’Ivoire', tags:T.concat(['multinational companies', 'fair trade', 'Fallaufgabe']),
    text:'Côte d’Ivoire produces a large share of the world’s cocoa. Many smallholder farmers earn less than the poverty line; child labour still occurs. A few multinational traders and chocolate brands dominate the market. The EU has adopted a regulation against products from deforestation, and Germany has a supply chain due diligence law.',
    teile:[
      {op:'Analyse', t:'why farmers earn so little.', opts:['market power of a few buyers, low world prices, small farms, little processing in the country (raw material export)', 'Cocoa is too expensive in Europe.', 'Farmers do not want higher incomes.'], r:0},
      {op:'Assess', t:'the effect of fair trade cocoa.', opts:['higher, more stable income and a premium – but limited market share and certification costs', 'no effect at all', 'solves all problems immediately'], r:0},
      {op:'Explain', t:'the aim of supply chain laws.', opts:['Companies must identify and reduce human rights and environmental risks in their supply chains.', 'They ban all imports from Africa.', 'They set the world market price of cocoa.'], r:0},
      {op:'Develop', t:'a proposal to increase value added in the country.', opts:['support local processing (e.g. cocoa butter, chocolate) and fair tariff structures, cooperatives for farmers', 'export only raw beans forever', 'abolish all cooperatives'], r:0}
    ],
    hinweise:['Market power, value chain, responsibility.'],
    merke:'Raw-material dependency and market power keep incomes low · approaches: fair trade, cooperatives, local processing, supply chain due diligence, deforestation-free supply chains.'})
  ];
})(),
/* ---------- Zweiter Abiturfall je Pflicht-BPE (Wunsch Juergen 08.11.2026), Teil A: Volkswirtschaft (VBWL E, J1, J2, Finanzmanagement) ----------
   PK5, WI5, AN5, HH5, KD6, GS6, ET7, AO6, AL7, UI7, OF7, FM6 – jeweils Auswahl- und Freitextfassung (blAbi). */
...(() => {
  const T = ['Volkswirtschaft', 'Wirtschaftsgymnasium'];
  return [
  ...blAbi('rechnung', {id:'PK5', modul:'PK', stufe:3, titel:'Abiturfall: Spezialisierung im Tal', tags:T.concat(['Abiturfall', 'Arbeitsteilung', 'Opportunitätskosten', 'komparativer Vorteil']),
    text:'Zwei Bauernhöfe im Schwarzwald können in einer Woche entweder Käse oder Brot herstellen. Hof Huber: {ka} kg Käse oder {ba} Laibe Brot. Hof Maier: {kb} kg Käse oder {bb} Laibe Brot (jeweils lineare Möglichkeiten).',
    zeilen:[{id:'ka', t:'Käse Huber', aus:true}, {id:'ba', t:'Brot Huber', aus:true}, {id:'kb', t:'Käse Maier', aus:true}, {id:'bb', t:'Brot Maier', aus:true}],
    werte:[{ka:120, ba:240, kb:60, bb:180}],
    sets:[[{ka:150, ba:300, kb:80, bb:240}]],
    felder:[
      {id:'oa', t:'a) Berechnen Sie die Opportunitätskosten von 1 kg Käse bei Huber (Laibe Brot).', f:'ba / ka', kurz:'a) OK Käse Huber'},
      {id:'ob', t:'b) Berechnen Sie die Opportunitätskosten von 1 kg Käse bei Maier (Laibe Brot).', f:'bb / kb', kurz:'b) OK Käse Maier'},
      {id:'og', t:'c) Huber stellt nur Käse her, Maier nur Brot. Berechnen Sie die Käsemenge insgesamt (kg); Brot gibt es dabei so viel, wie Maier allein backen kann.', f:'ka', kurz:'c) Käse bei Spezialisierung'},
      {id:'oh', t:'d) Nun backt Huber dieselbe Brotmenge wie Maier in c) und beide nutzen die übrige Zeit für Käse. Berechnen Sie die Käsemenge insgesamt (kg).', f:'ka * (1 - bb / ba) + kb', kurz:'d) Käse ohne sinnvolle Spezialisierung'}
    ],
    wahl:[
      {id:'w1', t:'e) Begründen Sie, wer sich worauf spezialisieren sollte.', opts:['Huber auf Käse (geringere Opportunitätskosten bei Käse), Maier auf Brot (geringere Opportunitätskosten bei Brot) – komparative Vorteile', 'Huber auf beides, weil er absolut überlegen ist', 'Maier auf Käse, Huber auf Brot'], r:'0',
        frei:{muster:'Huber ist bei beiden Gütern absolut überlegen, entscheidend sind aber die Opportunitätskosten. Für 1 kg Käse verzichtet Huber auf weniger Brot als Maier (a, b); umgekehrt sind Maiers Opportunitätskosten beim Brot geringer. Huber hat einen komparativen Vorteil bei Käse, Maier bei Brot. Spezialisieren sich beide entsprechend und tauschen, steigt die Gesamtproduktion.', punkte:['Opportunitätskosten verglichen', 'komparativer statt absoluter Vorteil', 'Spezialisierung + Tausch erhöht Produktion']}},
      {id:'w2', t:'f) Erläutern Sie zwei Risiken der Spezialisierung.', opts:['Abhängigkeit vom Tauschpartner und Anfälligkeit bei Ausfällen (z. B. Krankheit, Missernte); monotone Arbeit', 'Spezialisierung hat keine Nachteile.', 'Die Produktion sinkt immer.'], r:'0',
        frei:{muster:'Durch Spezialisierung werden die Höfe voneinander abhängig: Fällt ein Hof aus (Krankheit, Missernte, Streit), fehlt dem anderen ein Gut. Zudem steigt die Anfälligkeit gegenüber Nachfrageschwankungen beim eigenen Produkt. Für Beschäftigte kann einseitige Arbeit monoton werden. Auf Volkswirtschaften übertragen zeigen Lieferkettenprobleme diese Risiken.', punkte:['Abhängigkeit', 'Ausfall-/Nachfragerisiko', 'Übertragung/weiterer Nachteil']}}
    ],
    hinweise:['Opportunitätskosten von Käse = mögliche Brotmenge ÷ mögliche Käsemenge.'],
    merke:'Absoluter vs. komparativer Vorteil · Spezialisierung nach geringeren Opportunitätskosten · Tausch erhöht die Gesamtproduktion · Risiken: Abhängigkeit.'}),
  ...blAbi('rechnung', {id:'WI5', modul:'WI', stufe:3, titel:'Abiturfall: Wächst der Wohlstand in Südland?', tags:T.concat(['Abiturfall', 'BIP', 'reales Wachstum', 'Pro-Kopf', 'Wohlstandsindikatoren']),
    text:'Südland: nominales BIP im Vorjahr {b1} Mrd. €, in diesem Jahr {b2} Mrd. €. Der BIP-Deflator stieg von 100 auf {pd}. Die Bevölkerung wuchs von {e1} auf {e2} Mio. Gleichzeitig stiegen die CO₂-Emissionen um 6 %, und die Lebenserwartung blieb gleich.',
    zeilen:[{id:'b1', t:'BIP Vorjahr', aus:true}, {id:'b2', t:'BIP aktuell', aus:true}, {id:'pd', t:'Deflator', aus:true}, {id:'e1', t:'Bevölkerung Vorjahr', aus:true}, {id:'e2', t:'Bevölkerung aktuell', aus:true}],
    werte:[{b1:400, b2:428, pd:104, e1:40, e2:40.8}],
    sets:[[{b1:600, b2:636, pd:103, e1:50, e2:51.5}]],
    felder:[
      {id:'nw', t:'a) Berechnen Sie das nominale Wachstum (%).', f:'(b2 - b1) / b1 * 100', e:'%', kurz:'a) nominales Wachstum'},
      {id:'rb', t:'b) Berechnen Sie das reale BIP dieses Jahres in Preisen des Vorjahres (Mrd. €).', f:'b2 / pd * 100', kurz:'b) reales BIP'},
      {id:'rw', t:'c) Berechnen Sie das reale Wachstum (%).', f:'(b2 / pd * 100 - b1) / b1 * 100', e:'%', kurz:'c) reales Wachstum'},
      {id:'pk', t:'d) Berechnen Sie die Veränderung des realen BIP je Einwohner (%).', f:'((b2 / pd * 100) / e2 - b1 / e1) / (b1 / e1) * 100', e:'%', kurz:'d) Veränderung real pro Kopf'}
    ],
    wahl:[
      {id:'w1', t:'e) Beurteilen Sie die Aussage der Regierung: „Unser BIP ist kräftig gewachsen, der Wohlstand steigt.“', opts:['Zu einseitig: Ein großer Teil ist Preissteigerung, pro Kopf wächst das reale BIP kaum; Umwelt und Lebensqualität sind nicht erfasst.', 'Richtig, das nominale BIP zeigt den Wohlstand vollständig.', 'Falsch, weil das BIP gesunken ist.'], r:'0',
        frei:{muster:'Das nominale Wachstum (a) enthält Preissteigerungen. Real (c) ist das Wachstum deutlich kleiner, und je Einwohner (d) bleibt wegen des Bevölkerungswachstums kaum etwas übrig. Das BIP erfasst zudem weder Umweltbelastungen (CO₂ +6 %) noch Verteilung, Freizeit oder Gesundheit. Die Aussage ist daher zu einseitig; ergänzende Indikatoren wie HDI oder Nationaler Wohlfahrtsindex zeigen ein vollständigeres Bild.', punkte:['nominal vs. real', 'pro Kopf', 'Grenzen des BIP (Umwelt, Verteilung)', 'alternative Indikatoren']}},
      {id:'w2', t:'f) Nennen und erläutern Sie einen alternativen Wohlstandsindikator.', opts:['Human Development Index: kombiniert Lebenserwartung, Bildung und Einkommen', 'Verbraucherpreisindex', 'Leitzins der EZB'], r:'0',
        frei:{muster:'Der Human Development Index (HDI) der UN verbindet Lebenserwartung, Bildung (Schuljahre) und Einkommen je Kopf. Er zeigt, dass Wohlstand mehr ist als Einkommen. Alternativen sind der Nationale Wohlfahrtsindex (zieht Umweltschäden ab, berücksichtigt Hausarbeit und Verteilung) oder der Better Life Index der OECD.', punkte:['Indikator benannt', 'Bestandteile erklärt', 'Mehrwert gegenüber BIP']}}
    ],
    hinweise:['Reales BIP = nominales BIP ÷ Deflator · 100.', 'Pro Kopf = BIP ÷ Bevölkerung.'],
    merke:'Nominal vs. real (Deflator) · Pro-Kopf-Betrachtung · BIP misst keine Umwelt, Verteilung, Lebensqualität · alternative Indikatoren: HDI, NWI, Better Life Index.'}),
  ...blAbi('rechnung', {id:'AN5', modul:'AN', stufe:3, titel:'Abiturfall: Die Brezelbäckerei am Markt', tags:T.concat(['Abiturfall', 'Kosten', 'Gewinnmaximum', 'Polypol', 'Angebotskurve']),
    text:'Eine Bäckerei verkauft Brezeln auf einem polypolistischen Markt zum Marktpreis von {p} je Stück. Ihre Kostenfunktion lautet K(x) = {kf} + {a}·x + 0,0005·x² (x in Stück pro Tag). Im Gewinnmaximum gilt Preis = Grenzkosten: p = {a} + 0,001·x.',
    zeilen:[{id:'p', t:'Preis', e:'€', aus:true}, {id:'kf', t:'Fixkosten', e:'€', aus:true}, {id:'a', t:'a', aus:true}],
    werte:[{p:0.9, kf:120, a:0.3}],
    sets:[[{p:1.1, kf:150, a:0.3}]],
    felder:[
      {id:'xg', t:'a) Berechnen Sie die gewinnmaximale Menge (Stück).', f:'(p - a) / (0.001)', kurz:'a) gewinnmaximale Menge'},
      {id:'ue', t:'b) Berechnen Sie den Umsatz (€).', f:'p * (p - a) / (0.001)', e:'€', kurz:'b) Umsatz'},
      {id:'kk', t:'c) Berechnen Sie die Gesamtkosten (€).', f:'kf + a * (p - a) / (0.001) + 0.0005 * ((p - a) / (0.001)) * ((p - a) / (0.001))', e:'€', kurz:'c) Kosten'},
      {id:'gw', t:'d) Berechnen Sie den maximalen Gewinn (€).', f:'p * (p - a) / (0.001) - (kf + a * (p - a) / (0.001) + 0.0005 * ((p - a) / (0.001)) * ((p - a) / (0.001)))', e:'€', kurz:'d) Gewinn'}
    ],
    wahl:[
      {id:'w1', t:'e) Erläutern Sie, warum die Bäckerei den Preis nicht selbst festlegen kann.', opts:['Im Polypol auf einem vollkommenen Markt ist sie Mengenanpasser: Bei höherem Preis würden die Kunden sofort zur Konkurrenz wechseln.', 'Weil der Staat den Preis vorschreibt.', 'Weil Brezeln keine Kosten verursachen.'], r:'0',
        frei:{muster:'Auf dem Brezelmarkt gibt es viele Anbieter mit nahezu gleichen Produkten. Die einzelne Bäckerei hat einen sehr kleinen Marktanteil und kann den Marktpreis nicht beeinflussen; sie ist Mengenanpasser. Verlangt sie mehr, wandern Kunden zu anderen Bäckern ab; verlangt sie weniger, verschenkt sie Gewinn. Sie optimiert daher nur die Menge, bis Preis = Grenzkosten gilt.', punkte:['Polypol, viele Anbieter', 'Mengenanpasser', 'Preis = Grenzkosten']}},
      {id:'w2', t:'f) Erläutern Sie, wie die Angebotskurve der Bäckerei aus der Grenzkostenkurve entsteht.', opts:['Für jeden Marktpreis bietet sie die Menge an, bei der p = Grenzkosten; die steigende Grenzkostenkurve (oberhalb des Betriebsminimums) ist ihre Angebotskurve.', 'Die Angebotskurve ist immer waagerecht.', 'Sie entsteht aus der Nachfragekurve der Kunden.'], r:'0',
        frei:{muster:'Für jeden möglichen Marktpreis wählt die Bäckerei die Menge, bei der der Preis den Grenzkosten entspricht. Steigt der Preis, lohnt sich eine höhere Menge, weil die steigenden Grenzkosten gedeckt sind. Die Grenzkostenkurve oberhalb des Betriebsminimums (Minimum der variablen Stückkosten) ist deshalb die individuelle Angebotskurve; die Marktangebotskurve ergibt sich durch Addition aller Anbieter.', punkte:['p = Grenzkosten für jeden Preis', 'steigende Grenzkosten → steigendes Angebot', 'Betriebsminimum/Aggregation']}}
    ],
    hinweise:['x* = (p − a) ÷ (2c).', 'Gewinn = Umsatz − Kosten.'],
    merke:'Polypol: Mengenanpasser, Gewinnmaximum bei p = Grenzkosten · Angebotskurve = Grenzkostenkurve ab Betriebsminimum · Marktangebot = Summe der Einzelangebote.'}),
  ...blAbi('rechnung', {id:'HH5', modul:'HH', stufe:3, titel:'Abiturfall: Zwei Tankstellen an der Kreuzung', tags:T.concat(['Abiturfall', 'Oligopol', 'Gefangenendilemma', 'Konzentration', 'Kartell']),
    text:'Zwei Tankstellen A und B stehen sich gegenüber. Halten beide den Preis hoch, verdient jede {hh} € am Tag. Senkt nur eine den Preis, verdient sie {nh} €, die andere {hn} €. Senken beide, verdient jede {nn} €. Auf dem regionalen Kraftstoffmarkt haben die drei größten Ketten Marktanteile von {m1} %, {m2} % und {m3} %.',
    zeilen:[{id:'hh', t:'beide hoch', aus:true}, {id:'nh', t:'nur ich niedrig', aus:true}, {id:'hn', t:'nur der andere niedrig', aus:true}, {id:'nn', t:'beide niedrig', aus:true}, {id:'m1', t:'Anteil 1', aus:true}, {id:'m2', t:'Anteil 2', aus:true}, {id:'m3', t:'Anteil 3', aus:true}],
    werte:[{hh:1800, nh:2400, hn:900, nn:1200, m1:24, m2:21, m3:17}],
    sets:[[{hh:2000, nh:2700, hn:1000, nn:1300, m1:28, m2:20, m3:14}]],
    felder:[
      {id:'cr', t:'a) Berechnen Sie die Konzentrationsrate CR3 (%).', f:'m1 + m2 + m3', e:'%', kurz:'a) CR3'},
      {id:'gb', t:'b) Berechnen Sie den gemeinsamen Gewinn, wenn beide den Preis hoch halten (€).', f:'2 * hh', e:'€', kurz:'b) Gewinn beide hoch'},
      {id:'gn', t:'c) Berechnen Sie den gemeinsamen Gewinn im Gleichgewicht, wenn beide senken (€).', f:'2 * nn', e:'€', kurz:'c) Gewinn beide niedrig'},
      {id:'ve', t:'d) Berechnen Sie den Vorteil, den A durch einseitiges Senken erzielt, wenn B hoch bleibt (€).', f:'nh - hh', e:'€', kurz:'d) Anreiz zum Abweichen'}
    ],
    wahl:[
      {id:'w1', t:'e) Erläutern Sie, warum beide trotz höherer gemeinsamer Gewinne die Preise senken.', opts:['Gefangenendilemma: Unabhängig vom Verhalten des anderen ist Preissenken für jeden einzeln besser (dominante Strategie); das Ergebnis ist für beide schlechter.', 'Weil Preissenkungen immer den Gewinn erhöhen.', 'Weil der Staat Preissenkungen vorschreibt.'], r:'0',
        frei:{muster:'Für jede Tankstelle gilt: Hält die andere den Preis hoch, lohnt sich Senken (d); senkt die andere, ist Senken ebenfalls besser als hoch zu bleiben. Preissenken ist dominante Strategie. Beide landen im Gleichgewicht mit niedrigen Gewinnen (c), obwohl Kooperation mehr brächte (b) – ein Gefangenendilemma. Ohne bindende Absprachen und wegen Misstrauen kommt die Kooperation nicht zustande.', punkte:['dominante Strategie', 'Gleichgewicht schlechter als Kooperation', 'fehlende Bindung/Misstrauen']}},
      {id:'w2', t:'f) Beurteilen Sie eine Preisabsprache der beiden aus Sicht des Wettbewerbsrechts und der Verbraucher.', opts:['verbotenes Kartell (§ 1 GWB, Art. 101 AEUV): höhere Preise und weniger Wettbewerb zulasten der Verbraucher; Bußgelder durch das Kartellamt', 'erlaubt, weil nur zwei Tankstellen beteiligt sind', 'vorteilhaft für Verbraucher'], r:'0',
        frei:{muster:'Eine Preisabsprache wäre ein Kartell und ist nach § 1 GWB bzw. Art. 101 AEUV verboten. Die Tankstellen könnten zwar höhere Gewinne erzielen, die Verbraucher zahlten aber höhere Preise, und der Wettbewerb als Antrieb für Effizienz fiele weg. Das Bundeskartellamt kann hohe Bußgelder verhängen; die Markttransparenzstelle für Kraftstoffe beobachtet die Preise. Bei hoher Konzentration (a) ist der Markt besonders anfällig für abgestimmtes Verhalten.', punkte:['Kartellverbot', 'Nachteile für Verbraucher', 'Kontrolle (Kartellamt)', 'Bezug zur Konzentration']}}
    ],
    hinweise:['CR3 = Summe der drei größten Marktanteile.'],
    merke:'Oligopol: gegenseitige Abhängigkeit · Gefangenendilemma: dominante Strategie führt zu schlechterem Ergebnis · Kartelle verboten · Konzentrationsmaße (CR3, HHI).'}),
  ...blAbi('rechnung', {id:'KD6', modul:'KD', stufe:3, titel:'Abiturfall: Aufschwung oder Überhitzung?', tags:T.concat(['Abiturfall', 'Konjunktur', 'magisches Viereck', 'Indikatoren']),
    text:'Für Westland liegen vor: reales BIP {b1} Mrd. € (Vorjahr {b0}), Verbraucherpreisindex {v1} (Vorjahr {v0}), Arbeitslose {al} Mio. bei {ep} Mio. Erwerbspersonen, Exporte {ex} Mrd. €, Importe {im} Mrd. €. Die Kapazitätsauslastung der Industrie liegt bei 91 %, der ifo-Geschäftsklimaindex steigt seit sechs Monaten.',
    zeilen:[{id:'b1', t:'BIP', aus:true}, {id:'b0', t:'BIP Vorjahr', aus:true}, {id:'v1', t:'VPI', aus:true}, {id:'v0', t:'VPI Vorjahr', aus:true}, {id:'al', t:'Arbeitslose', aus:true}, {id:'ep', t:'Erwerbspersonen', aus:true}, {id:'ex', t:'Exporte', aus:true}, {id:'im', t:'Importe', aus:true}],
    werte:[{b1:3240, b0:3120, v1:118.9, v0:113.8, al:1.9, ep:46, ex:1610, im:1420}],
    sets:[[{b1:2860, b0:2750, v1:124.6, v0:119.3, al:1.7, ep:44, ex:1380, im:1290}]],
    felder:[
      {id:'wr', t:'a) Berechnen Sie die reale Wachstumsrate (%).', f:'(b1 - b0) / b0 * 100', e:'%', kurz:'a) Wachstum'},
      {id:'ir', t:'b) Berechnen Sie die Inflationsrate (%).', f:'(v1 - v0) / v0 * 100', e:'%', kurz:'b) Inflation'},
      {id:'aq', t:'c) Berechnen Sie die Arbeitslosenquote (%).', f:'al / ep * 100', e:'%', kurz:'c) Arbeitslosenquote'},
      {id:'ab', t:'d) Berechnen Sie den Außenbeitrag in % des BIP.', f:'(ex - im) / b1 * 100', e:'%', kurz:'d) Außenbeitrag in % des BIP'}
    ],
    wahl:[
      {id:'w1', t:'e) Ordnen Sie die Lage einer Konjunkturphase zu und begründen Sie.', opts:['Boom/Hochkonjunktur: hohes Wachstum, hohe Auslastung, steigende Preise, geringe Arbeitslosigkeit, positiver Frühindikator', 'Rezession', 'Depression'], r:'0',
        frei:{muster:'Das reale Wachstum ist hoch (a), die Kapazitätsauslastung liegt bei über 90 %, die Inflation ist deutlich über dem Zielwert von 2 % (b) und die Arbeitslosenquote ist niedrig (c). Der ifo-Index als Frühindikator steigt weiter. Das spricht für einen Boom mit Überhitzungsgefahr.', punkte:['Phase benannt (Boom)', 'mindestens drei Indikatoren', 'Früh-/Spät-/Präsenzindikator unterschieden']}},
      {id:'w2', t:'f) Beurteilen Sie die Zielerreichung im magischen Viereck und einen Zielkonflikt.', opts:['Wachstum und Beschäftigung erreicht, Preisniveaustabilität verfehlt, außenwirtschaftliches Gleichgewicht durch hohen Überschuss gefährdet; Konflikt Beschäftigung ↔ Preisniveaustabilität', 'alle Ziele perfekt erreicht', 'kein Ziel erreicht'], r:'0',
        frei:{muster:'Angemessenes Wachstum und hoher Beschäftigungsstand sind erreicht. Die Preisniveaustabilität (Ziel nahe 2 %) wird verfehlt. Der Außenbeitrag (d) ist deutlich positiv; ein dauerhaft hoher Überschuss gilt als Störung des außenwirtschaftlichen Gleichgewichts. Typisch ist der Zielkonflikt zwischen Beschäftigung und Preisniveaustabilität (Phillips-Kurve): Hohe Nachfrage senkt die Arbeitslosigkeit, treibt aber die Preise.', punkte:['Bewertung der vier Ziele', 'Zielkonflikt benannt und erklärt']}}
    ],
    hinweise:['Arbeitslosenquote = Arbeitslose ÷ Erwerbspersonen · 100.', 'Außenbeitrag = Exporte − Importe.'],
    merke:'Konjunkturphasen über Indikatoren bestimmen · magisches Viereck (Stabilitätsgesetz) · Zielkonflikte, z. B. Beschäftigung vs. Preisniveau.'}),
  ...blAbi('rechnung', {id:'GS6', modul:'GS', stufe:3, titel:'Abiturfall: Wie viel Geld schaffen die Banken?', tags:T.concat(['Abiturfall', 'Geldschöpfung', 'Mindestreserve', 'Geldmenge', 'Inflation']),
    text:'Eine Kundin zahlt {ez} Bargeld auf ihr Girokonto bei der Bank A ein. Mindestreservesatz {rs}, die Banken halten zusätzlich eine Bargeldreserve von {bs} der Einlagen (vereinfachtes Modell ohne Bargeldabfluss an Nichtbanken).',
    zeilen:[{id:'ez', t:'Einzahlung', e:'€', aus:true}, {id:'rs', t:'Mindestreservesatz', e:'%', aus:true}, {id:'bs', t:'Bargeldreserve', e:'%', aus:true}],
    werte:[{ez:100000, rs:1, bs:9}],
    sets:[[{ez:50000, rs:2, bs:8}]],
    felder:[
      {id:'ue', t:'a) Berechnen Sie die Überschussreserve der Bank A, die sie als Kredit vergeben kann (€).', f:'ez * (1 - (rs + bs) / 100)', e:'€', kurz:'a) Überschussreserve A'},
      {id:'gm', t:'b) Berechnen Sie den Geldschöpfungsmultiplikator.', f:'1 / ((rs + bs) / 100)', kurz:'b) Multiplikator'},
      {id:'ge', t:'c) Berechnen Sie die maximale Geldschöpfung aller Banken (zusätzliche Kredite, €).', f:'ez * (1 - (rs + bs) / 100) / ((rs + bs) / 100)', e:'€', kurz:'c) maximale Geldschöpfung'},
      {id:'ve', t:'d) Berechnen Sie die maximale Geldschöpfung, wenn die Banken ihre Reserve auf 20 % insgesamt erhöhen (€).', f:'ez * 0.8 / 0.2', e:'€', kurz:'d) Geldschöpfung bei 20 %'}
    ],
    wahl:[
      {id:'w1', t:'e) Erläutern Sie, warum die tatsächliche Geldschöpfung meist kleiner ist als berechnet.', opts:['Bargeldabflüsse, fehlende Kreditnachfrage, höhere freiwillige Reserven und Eigenkapitalvorschriften begrenzen die Kreditvergabe.', 'Weil Banken kein Geld schaffen können.', 'Weil der Multiplikator immer 1 ist.'], r:'0',
        frei:{muster:'Das Modell unterstellt, dass alle Überschussreserven als Kredite vergeben und wieder bei Banken eingezahlt werden. Tatsächlich halten Nichtbanken Bargeld, Unternehmen und Haushalte fragen nicht beliebig viele Kredite nach, Banken halten freiwillige Liquiditätsreserven und müssen Eigenkapital- und Liquiditätsvorschriften einhalten. Deshalb ist die Geldschöpfung kleiner als der theoretische Höchstwert.', punkte:['Bargeldabfluss', 'Kreditnachfrage', 'Reserven/Regulierung']}},
      {id:'w2', t:'f) Beurteilen Sie den Zusammenhang zwischen Geldmenge und Preisniveau.', opts:['Wächst die Geldmenge dauerhaft stärker als die Gütermenge, steigt tendenziell das Preisniveau (Quantitätsgleichung); kurzfristig hängen Effekte von Umlaufgeschwindigkeit und Auslastung ab.', 'Geldmenge und Preise hängen nie zusammen.', 'Mehr Geld senkt immer die Preise.'], r:'0',
        frei:{muster:'Nach der Quantitätsgleichung M · U = P · Y steigt das Preisniveau, wenn die Geldmenge bei gegebener Umlaufgeschwindigkeit stärker wächst als das reale Güterangebot. Langfristig ist Inflation daher ein monetäres Phänomen. Kurzfristig kann zusätzliches Geld bei unterausgelasteten Kapazitäten auch die Produktion erhöhen, und die Umlaufgeschwindigkeit schwankt. Deshalb beobachtet die EZB die Geldmengenentwicklung als einen von mehreren Faktoren.', punkte:['Quantitätsgleichung', 'Geldmenge > Gütermenge → Inflation', 'kurzfristige Einschränkungen']}}
    ],
    hinweise:['Multiplikator = 1 ÷ Reservesatz.', 'Geldschöpfung = Überschussreserve · Multiplikator.'],
    merke:'Giralgeldschöpfung über Kredite · Multiplikator = 1 ÷ Reservesatz · Grenzen: Bargeldabfluss, Kreditnachfrage, Regulierung · Quantitätsgleichung M · U = P · Y.'}),
  ...blAbi('fall', {id:'ET7', modul:'ET', stufe:3, titel:'Abiturfall: Leitzinssenkung trotz Inflation?', tags:T.concat(['Abiturfall', 'EZB', 'Geldpolitik', 'Transmission']),
    text:'Im Euroraum sinkt die Inflationsrate von 4,5 % auf 2,3 %; gleichzeitig stagniert die Wirtschaft, und die Kreditvergabe an Unternehmen geht zurück. Der EZB-Rat diskutiert, den Einlagesatz von 3,75 % auf 3,25 % zu senken. Ein Ratsmitglied warnt vor steigenden Lohnabschlüssen.',
    teile:[
      {op:'Erläutern Sie', t:'das vorrangige Ziel und die Strategie der EZB.', opts:['Preisniveaustabilität mit einem symmetrischen Inflationsziel von 2 % mittelfristig; integrierte Analyse aus wirtschaftlicher und monetärer/finanzieller Analyse', 'Vollbeschäftigung um jeden Preis', 'feste Wechselkurse zum US-Dollar'], r:0,
        frei:{muster:'Vorrangiges Ziel des Eurosystems ist die Preisniveaustabilität. Seit 2021 verfolgt die EZB ein symmetrisches Inflationsziel von 2 % auf mittlere Sicht: Abweichungen nach oben und unten sind gleich unerwünscht. Grundlage der Entscheidungen ist eine integrierte Bewertung aus wirtschaftlicher Analyse und monetärer und finanzieller Analyse. Unterstützend fördert sie die allgemeine Wirtschaftspolitik der EU, ohne die Preisstabilität zu gefährden.', punkte:['Preisniveaustabilität vorrangig', 'symmetrisch 2 % mittelfristig', 'zwei Analysestränge']}},
      {op:'Erläutern Sie', t:'die Wirkung einer Zinssenkung über die Transmission.', opts:['niedrigere Geldmarkt- und Kreditzinsen → mehr Kredite, Investitionen und Konsum → höhere Nachfrage → stabilisierende Wirkung auf Wachstum und Preise', 'Zinssenkungen verringern immer die Nachfrage.', 'Zinssenkungen wirken nur auf Sparbücher.'], r:0},
      {op:'Beurteilen Sie', t:'die Zinssenkung.', opts:['vertretbar, wenn die Inflation mittelfristig in Richtung 2 % sinkt und die Konjunktur schwach ist; Risiko: Zweitrundeneffekte durch Löhne – vorsichtiges, datenabhängiges Vorgehen', 'auf keinen Fall, weil die Inflation über null liegt', 'die Zinsen sollten auf null gesenkt werden'], r:0,
        frei:{muster:'Die Inflation nähert sich dem Ziel, die Wirtschaft stagniert und die Kreditvergabe sinkt – eine zu restriktive Geldpolitik könnte die Konjunktur weiter schwächen und das Ziel nach unten verfehlen. Eine moderate Senkung ist daher vertretbar. Dagegen spricht das Risiko von Zweitrundeneffekten: Hohe Lohnabschlüsse könnten die Inflation erneut anheizen. Die EZB sollte schrittweise und datenabhängig vorgehen und ihre Entscheidung klar kommunizieren.', punkte:['Argumente für die Senkung', 'Risiko Zweitrundeneffekte', 'abgewogenes Urteil']}},
      {op:'Nennen Sie', t:'ein Instrument neben dem Leitzins.', opts:['Wertpapierankaufprogramme bzw. deren Abbau, längerfristige Refinanzierungsgeschäfte, Mindestreserve', 'Einkommensteuer', 'Zölle'], r:0}
    ],
    hinweise:['Strategie seit 2021, Transmissionsmechanismus.'],
    merke:'EZB: Preisniveaustabilität, symmetrisch 2 % · Leitzinsen, Offenmarktgeschäfte, Mindestreserve, Wertpapierkäufe · Transmission über Zinsen, Kredite, Erwartungen, Wechselkurs.'}),
  ...blAbi('rechnung', {id:'AO6', modul:'AO', stufe:3, titel:'Abiturfall: Steuersenkung für Unternehmen', tags:T.concat(['Abiturfall', 'Angebotsorientierung', 'Staatsfinanzen', 'Multiplikator']),
    text:'Die Regierung von Ostland senkt die Unternehmenssteuern um {st} Mrd. € pro Jahr, um private Investitionen anzuregen. Sie erwartet, dass die Investitionen um {iv} Mrd. € steigen. Die marginale Konsumquote beträgt {c}. BIP {bip} Mrd. €, Staatsschulden {sd} Mrd. €.',
    zeilen:[{id:'st', t:'Steuersenkung', aus:true}, {id:'iv', t:'Investitionsanstieg', aus:true}, {id:'c', t:'Konsumquote', aus:true}, {id:'bip', t:'BIP', aus:true}, {id:'sd', t:'Schulden', aus:true}],
    werte:[{st:30, iv:24, c:0.6, bip:3000, sd:1950}],
    sets:[[{st:40, iv:30, c:0.5, bip:3500, sd:2400}]],
    felder:[
      {id:'mu', t:'a) Berechnen Sie den Investitionsmultiplikator.', f:'1 / (1 - c)', kurz:'a) Multiplikator'},
      {id:'dy', t:'b) Berechnen Sie den erwarteten Anstieg des BIP (Mrd. €).', f:'iv / (1 - c)', kurz:'b) BIP-Anstieg'},
      {id:'sq', t:'c) Berechnen Sie die Schuldenstandsquote vor der Maßnahme (%).', f:'sd / bip * 100', e:'%', kurz:'c) Schuldenquote vorher'},
      {id:'sn', t:'d) Berechnen Sie die Schuldenstandsquote nach einem Jahr, wenn die Steuersenkung voll kreditfinanziert wird und das BIP wie unter b) steigt (%).', f:'(sd + st) / (bip + iv / (1 - c)) * 100', e:'%', kurz:'d) Schuldenquote nachher'}
    ],
    wahl:[
      {id:'w1', t:'e) Ordnen Sie die Maßnahme einer wirtschaftspolitischen Konzeption zu und begründen Sie.', opts:['angebotsorientiert: verbessert die Rahmenbedingungen der Unternehmen (Gewinne, Investitionsanreize) statt direkt die Nachfrage zu steuern', 'nachfrageorientiert, weil der Staat mehr ausgibt', 'gar keine Konzeption'], r:'0',
        frei:{muster:'Die Steuersenkung setzt bei den Unternehmen an: Sie erhöht die Nettorenditen und soll Investitionen, Innovation und Arbeitsplätze anregen. Das entspricht der angebotsorientierten Wirtschaftspolitik, die auf Marktkräfte, Deregulierung und günstige Standortbedingungen setzt. Die nachfrageorientierte Politik würde dagegen direkt die gesamtwirtschaftliche Nachfrage, z. B. durch Staatsausgaben, beleben.', punkte:['angebotsorientiert', 'Ansatz bei Unternehmen/Rahmenbedingungen', 'Abgrenzung zur Nachfrageorientierung']}},
      {id:'w2', t:'f) Beurteilen Sie die Maßnahme.', opts:['Chance: mehr Investitionen und Wachstum, Selbstfinanzierung teilweise über höhere Steuerbasis · Risiko: Mitnahmeeffekte, höhere Schulden, Wirkung erst langfristig', 'nur Vorteile', 'nur Nachteile'], r:'0',
        frei:{muster:'Für die Maßnahme spricht, dass höhere Investitionen über den Multiplikator das BIP steigern (b) und das Produktionspotenzial langfristig erhöhen; ein Teil der Steuerausfälle kann über eine breitere Steuerbasis zurückfließen. Dagegen sprechen Mitnahmeeffekte (Investitionen, die ohnehin erfolgt wären), unsichere Wirkung bei schwacher Nachfrage und die zunächst steigende Verschuldung (c, d). Die Wirkung tritt eher langfristig ein.', punkte:['Wachstumseffekt/Multiplikator', 'Mitnahmeeffekte/Unsicherheit', 'Schuldenwirkung', 'Urteil']}}
    ],
    hinweise:['Multiplikator = 1 ÷ (1 − marginale Konsumquote).'],
    merke:'Angebotsorientierung: Steuersenkung, Deregulierung, Flexibilisierung · Multiplikator · Wirkungen auf Wachstum und Staatsfinanzen abwägen.'}),
  ...blAbi('rechnung', {id:'AL7', modul:'AL', stufe:3, titel:'Abiturfall: Fachkräftemangel trotz Arbeitslosigkeit', tags:T.concat(['Abiturfall', 'Arbeitslosigkeit', 'strukturelle Arbeitslosigkeit', 'Arbeitsmarkt']),
    text:'Im Land Mittelland gibt es {al} Mio. registrierte Arbeitslose bei {ep} Mio. Erwerbspersonen und gleichzeitig {os} Mio. offene Stellen. Von den Arbeitslosen sind {la} Mio. länger als ein Jahr ohne Arbeit. In der Region Nord fehlen Pflegekräfte und IT-Fachleute, in der Region Süd werden Stellen in der Automobilindustrie abgebaut.',
    zeilen:[{id:'al', t:'Arbeitslose', aus:true}, {id:'ep', t:'Erwerbspersonen', aus:true}, {id:'os', t:'offene Stellen', aus:true}, {id:'la', t:'Langzeitarbeitslose', aus:true}],
    werte:[{al:2.8, ep:46, os:0.7, la:1.0}],
    sets:[[{al:3.1, ep:47, os:0.9, la:1.2}]],
    felder:[
      {id:'aq', t:'a) Berechnen Sie die Arbeitslosenquote (%).', f:'al / ep * 100', e:'%', kurz:'a) Arbeitslosenquote'},
      {id:'lq', t:'b) Berechnen Sie den Anteil der Langzeitarbeitslosen an allen Arbeitslosen (%).', f:'la / al * 100', e:'%', kurz:'b) Anteil Langzeitarbeitslose'},
      {id:'ve', t:'c) Berechnen Sie, wie viele Arbeitslose rechnerisch auf eine offene Stelle kommen.', f:'al / os', kurz:'c) Arbeitslose je Stelle'},
      {id:'mm', t:'d) Berechnen Sie die Arbeitslosenquote, wenn alle offenen Stellen mit Arbeitslosen besetzt würden (%).', f:'(al - os) / ep * 100', e:'%', kurz:'d) Quote nach Besetzung'}
    ],
    wahl:[
      {id:'w1', t:'e) Ordnen Sie die Situation einer Art von Arbeitslosigkeit zu und begründen Sie.', opts:['strukturelle Arbeitslosigkeit (Mismatch): Qualifikationen und Regionen von Arbeitslosen und offenen Stellen passen nicht zusammen', 'saisonale Arbeitslosigkeit', 'rein konjunkturelle Arbeitslosigkeit'], r:'0',
        frei:{muster:'Trotz vieler offener Stellen bleiben Arbeitslose ohne Job: Es fehlen Pflege- und IT-Fachkräfte im Norden, während im Süden Stellen in der Autoindustrie wegfallen. Qualifikation und Region passen nicht zusammen (Mismatch). Das ist strukturelle Arbeitslosigkeit, verstärkt durch den Wandel der Automobilindustrie. Der hohe Anteil Langzeitarbeitsloser (b) deutet auf verfestigte, strukturelle Ursachen hin.', punkte:['strukturell/Mismatch', 'qualifikatorisch und regional', 'Bezug zu Langzeitarbeitslosigkeit']}},
      {id:'w2', t:'f) Entwickeln Sie zwei Maßnahmen und beurteilen Sie sie.', opts:['Weiterbildung und Umschulung (z. B. Kfz-Mechatroniker zu IT-Fachkraft) und Mobilitätshilfen bzw. regionale Ansiedlungsförderung – wirksam, aber langfristig und kostenintensiv', 'Leitzins senken', 'Arbeitslosengeld abschaffen'], r:'0',
        frei:{muster:'Gegen strukturelle Arbeitslosigkeit helfen vor allem Qualifizierungsmaßnahmen: Weiterbildung und Umschulung in Mangelberufe (Pflege, IT) über die Bundesagentur für Arbeit. Mobilitätshilfen (Umzugskosten) oder die Ansiedlung neuer Branchen im Süden verringern den regionalen Mismatch. Diese Maßnahmen wirken langfristig und kosten Geld; ihr Erfolg hängt von Motivation und Bedarf ab. Konjunkturpolitische Nachfragestützung wäre hier wenig wirksam.', punkte:['Qualifizierung', 'Mobilität/Regionalpolitik', 'Beurteilung (Kosten, Zeit, Wirksamkeit)']}}
    ],
    hinweise:['Arbeitslosenquote = Arbeitslose ÷ Erwerbspersonen · 100.'],
    merke:'Arten: friktionell, saisonal, konjunkturell, strukturell (Mismatch) · Maßnahmen je nach Ursache · Fachkräftemangel und Arbeitslosigkeit können gleichzeitig bestehen.'}),
  ...blAbi('rechnung', {id:'UI7', modul:'UI', stufe:3, titel:'Abiturfall: CO₂-Steuer oder Grenzwert?', tags:T.concat(['Abiturfall', 'Umweltpolitik', 'externe Kosten', 'Ökosteuer', 'Auflagen']),
    text:'Zwei Zementwerke stoßen je {em} t CO₂ im Jahr aus. Werk A kann die Emissionen zu Kosten von {va} € je t vermeiden, Werk B zu {vb} € je t. Die Regierung will die Gesamtemissionen um {zr} t senken. Variante 1: Auflage – jedes Werk muss die Hälfte der Minderung erbringen. Variante 2: CO₂-Steuer von {st} € je t.',
    zeilen:[{id:'em', t:'Emissionen je Werk', aus:true}, {id:'va', t:'Vermeidungskosten A', e:'€', aus:true}, {id:'vb', t:'Vermeidungskosten B', e:'€', aus:true}, {id:'zr', t:'Minderungsziel', aus:true}, {id:'st', t:'Steuersatz', e:'€', aus:true}],
    werte:[{em:60000, va:40, vb:110, zr:50000, st:80}],
    sets:[[{em:80000, va:35, vb:120, zr:60000, st:90}]],
    felder:[
      {id:'ka', t:'a) Berechnen Sie die gesamten Vermeidungskosten bei der Auflage (€).', f:'zr / 2 * va + zr / 2 * vb', e:'€', kurz:'a) Kosten Auflage'},
      {id:'kb', t:'b) Berechnen Sie die Vermeidungskosten bei der Steuer, wenn A wegen va < Steuersatz das Ziel komplett allein erbringt und B die Steuer zahlt (€).', f:'zr * va', e:'€', kurz:'b) Vermeidungskosten Steuer'},
      {id:'se', t:'c) Berechnen Sie die Steuerzahlung von Werk B (€).', f:'em * st', e:'€', kurz:'c) Steuer B'},
      {id:'ve', t:'d) Berechnen Sie die volkswirtschaftliche Kostenersparnis der Steuerlösung bei den Vermeidungskosten (€).', f:'zr / 2 * va + zr / 2 * vb - zr * va', e:'€', kurz:'d) Ersparnis'}
    ],
    wahl:[
      {id:'w1', t:'e) Erläutern Sie, warum die Steuer das Ziel kostengünstiger erreicht.', opts:['Die Minderung erfolgt dort, wo sie am billigsten ist (bei A); jedes Werk vergleicht Vermeidungskosten mit dem Steuersatz (statische Effizienz).', 'Weil Steuern keine Kosten verursachen.', 'Weil die Auflage strenger ist.'], r:'0',
        frei:{muster:'Bei der Steuer entscheidet jedes Werk selbst: Werk A vermeidet, weil seine Vermeidungskosten unter dem Steuersatz liegen; Werk B zahlt lieber die Steuer. So wird dort gemindert, wo es am günstigsten ist, und das Ziel wird mit geringeren Gesamtkosten erreicht (d). Die Auflage zwingt dagegen auch B zu teurer Vermeidung. Zudem setzt die Steuer einen dauerhaften Anreiz, weitere Emissionen zu senken (dynamische Effizienz).', punkte:['Vergleich Vermeidungskosten/Steuersatz', 'Minderung beim günstigsten Vermeider', 'dynamischer Anreiz']}},
      {id:'w2', t:'f) Beurteilen Sie die Steuerlösung im Vergleich zum Emissionshandel.', opts:['Steuer: Preis sicher, Menge unsicher (Steuersatz muss evtl. angepasst werden) · Emissionshandel: Menge sicher, Preis schwankt; beide internalisieren externe Kosten (Verursacherprinzip)', 'Beide Instrumente sind identisch.', 'Emissionshandel internalisiert keine Kosten.'], r:'0',
        frei:{muster:'Die CO₂-Steuer setzt einen sicheren Preis, die erreichte Minderung ist aber unsicher, weil sie vom Verhalten der Unternehmen abhängt; ggf. muss der Satz angepasst werden. Der Emissionshandel legt die Gesamtmenge (Cap) fest und erreicht das Ziel sicher, der Zertifikatspreis schwankt aber. Beide setzen das Verursacherprinzip um und internalisieren externe Kosten. Für Unternehmen im internationalen Wettbewerb besteht bei beiden die Gefahr der Abwanderung (Carbon Leakage), dem der CO₂-Grenzausgleich der EU begegnen soll.', punkte:['Steuer: Preissicherheit', 'Handel: Mengensicherheit', 'Verursacherprinzip', 'Carbon Leakage']}}
    ],
    hinweise:['Ein Werk vermeidet, wenn die Vermeidungskosten unter dem Steuersatz liegen.'],
    merke:'Umweltpolitik: Auflagen (ordnungsrechtlich) vs. Abgaben und Zertifikate (marktwirtschaftlich) · Steuer: Preissteuerung, Handel: Mengensteuerung · Verursacherprinzip.'}),
  ...blAbi('fall', {id:'OF7', modul:'OF', stufe:3, titel:'Abiturfall: Die Gemeinde baut eine Schule', tags:T.concat(['Abiturfall', 'Öffentliche Finanzen', 'Gemeindefinanzen', 'PPP']),
    text:'Die Stadt Bruchtal (40.000 Einwohner) braucht eine neue Gesamtschule für 30 Mio. €. Die Einnahmen der Stadt stammen aus Gewerbe- und Grundsteuer, Gemeindeanteilen an Einkommen- und Umsatzsteuer, Gebühren und Zuweisungen des Landes. Ein Investor bietet an, die Schule zu bauen und 25 Jahre gegen eine jährliche Miete von 1,9 Mio. € zu betreiben (PPP). Alternativ könnte die Stadt einen Kommunalkredit über 30 Mio. € zu 3,5 % (Annuität 1,82 Mio. € über 25 Jahre) aufnehmen und selbst betreiben (Betriebskosten 0,4 Mio. € jährlich).',
    teile:[
      {op:'Nennen Sie', t:'zwei Steuern, die den Gemeinden zustehen.', opts:['Gewerbesteuer und Grundsteuer', 'Umsatzsteuer vollständig und Tabaksteuer', 'Kfz-Steuer und Zölle'], r:0},
      {op:'Vergleichen Sie', t:'die jährlichen Belastungen beider Varianten.', opts:['PPP 1,9 Mio. € · Eigenbau 1,82 + 0,4 = 2,22 Mio. € – PPP ist in diesem Vergleich günstiger, sofern die Leistungen vergleichbar sind', 'beide gleich', 'Eigenbau 1,82 Mio. € ist günstiger'], r:0, weg:'Eigenbau: Annuität 1,82 + Betrieb 0,4 = 2,22 Mio. € > PPP 1,9 Mio. €.'},
      {op:'Beurteilen Sie', t:'die PPP-Lösung.', opts:['Vorteil: geringere jährliche Belastung, Bau und Betrieb aus einer Hand · Risiken: lange Bindung, versteckte Verschuldung, Abhängigkeit vom Investor, Qualität und Vertragsdetails prüfen', 'nur Vorteile', 'verboten'], r:0,
        frei:{muster:'Die PPP-Lösung ist in den genannten Zahlen günstiger und nutzt Know-how des Investors für Bau und Betrieb über den Lebenszyklus. Die Stadt bindet sich aber 25 Jahre; die Miete wirkt wie eine Schuld, erscheint jedoch nicht als Kredit im Haushalt. Risiken sind unklare Vertragsdetails (Instandhaltung, Anpassungsklauseln), Insolvenz des Investors und geringe Flexibilität. Eine Wirtschaftlichkeitsuntersuchung mit allen Kosten und Risiken ist notwendig.', punkte:['Kostenvorteil/Lebenszyklus', 'langfristige Bindung, versteckte Verschuldung', 'Vertragsrisiken', 'Wirtschaftlichkeitsuntersuchung']}},
      {op:'Erläutern Sie', t:'warum die Schuldenbremse für die Stadt nicht unmittelbar gilt.', opts:['Die Schuldenbremse des Grundgesetzes gilt für Bund und Länder; Kommunen unterliegen dem kommunalen Haushaltsrecht und der Kommunalaufsicht, Kredite nur für Investitionen.', 'Weil Städte gar keine Kredite aufnehmen dürfen.', 'Weil die EU es verbietet.'], r:0}
    ],
    hinweise:['Gemeindefinanzen, Wirtschaftlichkeitsvergleich, PPP.'],
    merke:'Gemeinden: Gewerbe- und Grundsteuer, Anteile an Gemeinschaftsteuern, Gebühren, Zuweisungen · Kommunalkredite nur für Investitionen · PPP: Vorteile und Risiken abwägen.'}),
  ...blAbi('rechnung', {id:'FM6', modul:'FM', stufe:3, titel:'Abiturfall: Der Weinexport nach Japan', tags:T.concat(['Abiturfall', 'Wechselkurs', 'Kaufkraftparität', 'Zinsparität']),
    text:'Ein Weingut aus der Pfalz liefert Wein im Wert von {yw} Yen nach Japan; Zahlung in drei Monaten. Aktueller Kurs: {k1} Yen je Euro. Ein Devisentermingeschäft sichert einen Kurs von {kt} Yen je Euro. Bei Zahlung liegt der Kassakurs bei {k2} Yen je Euro. Ein Warenkorb kostet in Japan {pj} Yen, im Euroraum {pe} €.',
    zeilen:[{id:'yw', t:'Rechnungsbetrag (Yen)', aus:true}, {id:'k1', t:'Kurs heute', aus:true}, {id:'kt', t:'Terminkurs', aus:true}, {id:'k2', t:'Kurs bei Zahlung', aus:true}, {id:'pj', t:'Warenkorb Japan', aus:true}, {id:'pe', t:'Warenkorb Euroraum', e:'€', aus:true}],
    werte:[{yw:16200000, k1:162, kt:160, k2:172, pj:150000, pe:1000}],
    sets:[[{yw:9300000, k1:155, kt:153, k2:165, pj:140000, pe:1000}]],
    felder:[
      {id:'e1', t:'a) Berechnen Sie den erwarteten Erlös zum heutigen Kurs (€).', f:'yw / k1', e:'€', kurz:'a) Erlös heute'},
      {id:'e2', t:'b) Berechnen Sie den Erlös ohne Absicherung bei Zahlung (€).', f:'yw / k2', e:'€', kurz:'b) Erlös ohne Absicherung'},
      {id:'et', t:'c) Berechnen Sie den Erlös mit Termingeschäft (€).', f:'yw / kt', e:'€', kurz:'c) Erlös mit Termingeschäft'},
      {id:'kp', t:'d) Berechnen Sie den Wechselkurs nach der Kaufkraftparität (Yen je €).', f:'pj / pe', kurz:'d) Kurs nach KKP'}
    ],
    wahl:[
      {id:'w1', t:'e) Beurteilen Sie die Kurssicherung.', opts:['Sie hat sich gelohnt: Der Euro hat gegenüber dem Yen aufgewertet, ohne Sicherung wäre der Erlös geringer gewesen; die Sicherung kostet aber die Chance auf Kursgewinne.', 'Sie war unnötig, weil Kurse nie schwanken.', 'Sie hat den Erlös gesenkt.'], r:'0',
        frei:{muster:'Der Euro hat gegenüber dem Yen aufgewertet (mehr Yen je Euro). Ohne Absicherung sinkt der Erlös in Euro (b). Mit dem Termingeschäft erhält das Weingut einen festen Betrag (c), der deutlich höher liegt. Die Sicherung schafft Planungssicherheit; bei einer Abwertung des Euro hätte das Weingut aber auf einen Kursgewinn verzichtet. Für ein kleines Unternehmen mit knappen Margen ist die Absicherung sinnvoll.', punkte:['Aufwertung erkannt', 'Vergleich der Erlöse', 'Planungssicherheit vs. entgangene Chance']}},
      {id:'w2', t:'f) Beurteilen Sie anhand der Kaufkraftparität und der Zinsparität die Bewertung des Euro.', opts:['Der Marktkurs liegt über dem KKP-Kurs, der Euro ist nach der KKP überbewertet; höhere Zinsen im Euroraum als in Japan ziehen Kapital an und können die Überbewertung kurzfristig erklären.', 'Der Euro ist unterbewertet, weil Japan teurer ist.', 'Wechselkurse folgen nur der Kaufkraftparität.'], r:'0',
        frei:{muster:'Nach der Kaufkraftparität (d) müsste ein Euro so viele Yen kosten, dass der Warenkorb in beiden Ländern gleich teuer ist. Liegt der Marktkurs darüber, ist der Euro überbewertet – Waren aus dem Euroraum sind in Japan vergleichsweise teuer. Kurzfristig erklären Kapitalströme die Abweichung: Höhere Zinsen im Euroraum als in Japan führen zu Kapitalzuflüssen und Euro-Nachfrage (Zinsparität). Langfristig tendieren Kurse eher zur Kaufkraftparität.', punkte:['KKP-Vergleich', 'Überbewertung erkannt', 'Zinsdifferenz/Kapitalströme', 'kurz- vs. langfristig']}}
    ],
    hinweise:['Erlös in € = Yen-Betrag ÷ Kurs (Yen je €).', 'KKP-Kurs = Preis Japan ÷ Preis Euroraum.'],
    merke:'Mengennotierung: steigender Kurs = Aufwertung des Euro · Kurssicherung durch Termingeschäft · Kaufkraftparität (langfristig) und Zinsparität (kurzfristig) erklären Kurse.'})
  ];
})(),
/* ---------- Zweiter Abiturfall je Pflicht-BPE (08.11.2026), Teil C: Internationale Wirtschaft, bilinguale VWL-BPE (English): XA7, XI7, XJ7, XM7, XL7 ---------- */
...(() => {
  const TV = ['Volkswirtschaft', 'Wirtschaftsgymnasium', 'Internationale Wirtschaft', 'English'];
  return [
  ...blAbi('fall', {id:'XA7', modul:'XA', stufe:3, titel:'Abiturfall: Who decides what to produce?', tags:TV.concat(['Abiturfall', 'economic systems', 'scarcity', 'opportunity costs']),
    text:'During an energy crisis, the government of a market economy considers fixing the price of heating oil far below the market price and deciding centrally which households receive how much. Critics warn of shortages; supporters say poor households must be protected.',
    teile:[
      {op:'Explain', t:'how prices coordinate decisions in a market economy.', opts:['Prices signal scarcity, ration goods and give incentives to produce more or consume less (signalling, rationing, allocation functions)', 'Prices are fixed by the state in a market economy.', 'Prices have no function.'], r:0,
        frei:{muster:'In a market economy, prices result from supply and demand. A rising price signals scarcity, rations the good to those who value it most and gives suppliers an incentive to produce or import more and consumers an incentive to save. In this way millions of decisions are coordinated without central planning.', punkte:['signalling', 'rationing', 'allocation/incentives']}},
      {op:'Analyse', t:'the consequences of a price ceiling far below the market price.', opts:['excess demand: shortages, queues, black markets and less incentive to supply', 'excess supply', 'no consequences'], r:0},
      {op:'Evaluate', t:'an alternative way of protecting poor households.', opts:['direct financial support (e.g. energy allowance) keeps price signals intact while protecting low-income households', 'free oil for everybody', 'abolishing all markets'], r:0,
        frei:{muster:'Instead of fixing prices, the state can support poor households directly, for example with an energy allowance or higher housing benefit. Prices continue to signal scarcity, so everybody has an incentive to save energy, while low-income households can still afford heating. This combines the efficiency of markets with social balance, as intended in a social market economy. Costs for the state and targeting must be considered.', punkte:['direct transfer', 'price signals preserved', 'social market economy', 'costs/targeting']}},
      {op:'Explain', t:'the opportunity costs of the government’s spending on such support.', opts:['The money cannot be used for other purposes, e.g. schools or infrastructure.', 'There are no opportunity costs because the state prints money.', 'Opportunity costs only exist for firms.'], r:0}
    ],
    hinweise:['Functions of prices, price controls, social market economy.'],
    merke:'Market economy: coordination by prices · price ceilings cause shortages · social goals better via transfers · every choice has opportunity costs.'}),
  ...blAbi('rechnung', {id:'XI7', modul:'XI', stufe:3, titel:'Abiturfall: Streaming prices go up', tags:TV.concat(['Abiturfall', 'price elasticity', 'cross-price elasticity', 'demand']),
    text:'A streaming service raises its monthly price from {p0} € to {p1} €. Subscribers fall from {x0} million to {x1} million. At the same time, a competitor’s subscribers rise from {k0} million to {k1} million.',
    zeilen:[{id:'p0', t:'old price', e:'€', aus:true}, {id:'p1', t:'new price', e:'€', aus:true}, {id:'x0', t:'old subscribers', aus:true}, {id:'x1', t:'new subscribers', aus:true}, {id:'k0', t:'competitor old', aus:true}, {id:'k1', t:'competitor new', aus:true}],
    werte:[{p0:10, p1:12, x0:8, x1:7.2, k0:5, k1:5.4}],
    sets:[[{p0:12, p1:15, x0:10, x1:8.5, k0:6, k1:6.6}]],
    felder:[
      {id:'pe', t:'a) Calculate the price elasticity of demand.', f:'((x1 - x0) / x0) / ((p1 - p0) / p0)', kurz:'a) PED'},
      {id:'r0', t:'b) Calculate the monthly revenue before (million €).', f:'p0 * x0', kurz:'b) revenue before'},
      {id:'r1', t:'c) Calculate the monthly revenue after (million €).', f:'p1 * x1', kurz:'c) revenue after'},
      {id:'xe', t:'d) Calculate the cross-price elasticity of the competitor’s demand.', f:'((k1 - k0) / k0) / ((p1 - p0) / p0)', kurz:'d) XED'}
    ],
    wahl:[
      {id:'w1', t:'e) Explain whether the price increase was a good decision.', opts:['Demand is price-inelastic (|PED| < 1), so revenue rises although subscribers fall; but the company loses market share to the competitor.', 'It was bad because revenue fell.', 'Elasticity has no influence on revenue.'], r:'0',
        frei:{muster:'The price elasticity (a) is below 1 in absolute terms: demand is inelastic. The percentage loss of subscribers is smaller than the percentage price increase, so revenue rises (b, c). However, the competitor gains subscribers (d): the services are substitutes, and market share is lost. In the long run, demand may become more elastic if more alternatives appear.', punkte:['inelastic demand', 'revenue comparison', 'loss of market share/substitutes', 'long-run view']}},
      {id:'w2', t:'f) Explain what the cross-price elasticity shows.', opts:['It is positive, so the services are substitutes: when one becomes more expensive, demand for the other rises.', 'It is negative, so they are complements.', 'It shows nothing.'], r:'0',
        frei:{muster:'The cross-price elasticity (d) is positive: the price increase of one service raises the demand for the competitor’s service. The two services are substitutes. The higher the value, the closer the substitutes and the stronger the competition between them.', punkte:['positive XED', 'substitutes', 'intensity of competition']}}
    ],
    hinweise:['PED = %Δ quantity ÷ %Δ price.', 'XED = %Δ quantity of B ÷ %Δ price of A.'],
    merke:'Inelastic demand → price increase raises revenue · positive cross-price elasticity → substitutes · market share vs. revenue.'}),
  ...blAbi('rechnung', {id:'XJ7', modul:'XJ', stufe:3, titel:'Abiturfall: A minimum price for milk', tags:TV.concat(['Abiturfall', 'price floor', 'market equilibrium', 'government intervention']),
    text:'Market for milk: demand Qd = {a} − {b} · P, supply Qs = {c} + {d} · P (P in € per litre, Q in million litres). To support farmers, the government sets a minimum price of {pm} € per litre and promises to buy up any surplus.',
    zeilen:[{id:'a', t:'a', aus:true}, {id:'b', t:'b', aus:true}, {id:'c', t:'c', aus:true}, {id:'d', t:'d', aus:true}, {id:'pm', t:'minimum price', e:'€', aus:true}],
    werte:[{a:300, b:200, c:20, d:200, pm:0.9}],
    sets:[[{a:340, b:250, c:40, d:250, pm:0.8}]],
    felder:[
      {id:'pe', t:'a) Calculate the equilibrium price (€).', f:'(a - c) / (b + d)', e:'€', kurz:'a) equilibrium price'},
      {id:'qd', t:'b) Calculate the quantity demanded at the minimum price (million litres).', f:'a - b * pm', kurz:'b) demand at minimum price'},
      {id:'qs', t:'c) Calculate the quantity supplied at the minimum price (million litres).', f:'c + d * pm', kurz:'c) supply at minimum price'},
      {id:'ko', t:'d) Calculate the government’s cost of buying up the surplus (million €).', f:'((c + d * pm) - (a - b * pm)) * pm', kurz:'d) cost of surplus'}
    ],
    wahl:[
      {id:'w1', t:'e) Explain the effects of the minimum price.', opts:['Farmers receive a higher price, but supply exceeds demand; the surplus must be bought and stored or destroyed at taxpayers’ expense; consumers pay more.', 'There is a shortage of milk.', 'The market is in equilibrium.'], r:'0',
        frei:{muster:'The minimum price lies above the equilibrium price (a). Farmers produce more (c), consumers buy less (b), and a surplus arises that the state has to buy (d). Farmers benefit, while consumers pay higher prices and taxpayers finance the purchases and storage. Resources are wasted (welfare loss); the EU experienced this with “butter mountains” and “milk lakes”.', punkte:['price above equilibrium', 'surplus and costs', 'winners/losers', 'welfare loss']}},
      {id:'w2', t:'f) Evaluate an alternative instrument to support farmers.', opts:['direct income payments not tied to production keep market prices undistorted and avoid surpluses, but cost tax money', 'a price ceiling', 'banning milk imports and exports'], r:'0',
        frei:{muster:'Direct income payments (decoupled from production quantity) support farmers without changing market prices; there are no surpluses, and consumers pay the market price. They can be linked to environmental services. However, they are financed by taxes and may keep inefficient farms in the market. Compared to a minimum price, they cause fewer distortions.', punkte:['alternative named', 'advantages (no surplus, prices undistorted)', 'disadvantages (costs)']}}
    ],
    hinweise:['Equilibrium: Qd = Qs.', 'Surplus = Qs − Qd at the minimum price.'],
    merke:'Price floor above equilibrium → surplus · costs for the state and consumers · decoupled income payments as alternative.'}),
  ...blAbi('rechnung', {id:'XM7', modul:'XM', stufe:3, titel:'Abiturfall: Should Germany specialise?', tags:TV.concat(['Abiturfall', 'comparative advantage', 'free trade', 'exchange rate']),
    text:'Germany and Vietnam produce machines and textiles. Labour hours per unit: Germany needs {gm} hours for a machine and {gt} hours for a batch of textiles; Vietnam needs {vm} hours for a machine and {vt} hours for a batch of textiles. A German machine costs {pe} €; the exchange rate rises from {k1} to {k2} Vietnamese dong (thousand) per euro.',
    zeilen:[{id:'gm', t:'DE machine', aus:true}, {id:'gt', t:'DE textiles', aus:true}, {id:'vm', t:'VN machine', aus:true}, {id:'vt', t:'VN textiles', aus:true}, {id:'pe', t:'price', e:'€', aus:true}, {id:'k1', t:'rate 1', aus:true}, {id:'k2', t:'rate 2', aus:true}],
    werte:[{gm:100, gt:20, vm:400, vt:40, pe:80000, k1:26, k2:28}],
    sets:[[{gm:120, gt:30, vm:500, vt:50, pe:90000, k1:27, k2:29}]],
    felder:[
      {id:'og', t:'a) Calculate Germany’s opportunity costs of one machine (batches of textiles).', f:'gm / gt', kurz:'a) OC machine Germany'},
      {id:'ov', t:'b) Calculate Vietnam’s opportunity costs of one machine (batches of textiles).', f:'vm / vt', kurz:'b) OC machine Vietnam'},
      {id:'p1', t:'c) Calculate the price of the machine in Vietnam before (thousand dong).', f:'pe * k1', kurz:'c) price before'},
      {id:'p2', t:'d) Calculate the price of the machine in Vietnam after (thousand dong).', f:'pe * k2', kurz:'d) price after'}
    ],
    wahl:[
      {id:'w1', t:'e) Explain the pattern of specialisation and the gains from trade.', opts:['Germany: machines (lower opportunity costs), Vietnam: textiles – although Germany is absolutely better in both, specialisation by comparative advantage increases total output', 'Germany should produce everything itself.', 'Vietnam should produce machines.'], r:'0',
        frei:{muster:'Germany needs fewer hours for both goods (absolute advantage). Decisive, however, are opportunity costs: a machine costs Germany fewer batches of textiles than Vietnam (a, b), so Germany has a comparative advantage in machines and Vietnam in textiles. If both specialise accordingly and trade, total output increases and both can consume more (Ricardo).', punkte:['absolute vs. comparative advantage', 'specialisation pattern', 'gains from trade']}},
      {id:'w2', t:'f) Assess the effect of the euro appreciation and the risks of specialisation.', opts:['German machines become more expensive in Vietnam, which can reduce exports · specialisation creates dependence and makes industries vulnerable to shocks and job losses', 'The appreciation makes German machines cheaper.', 'Specialisation has no risks.'], r:'0',
        frei:{muster:'The appreciation of the euro raises the price of German machines in dong (c, d); Vietnamese buyers may buy fewer or switch to other suppliers. Specialisation increases efficiency but also dependence: shocks in demand, supply chains or exchange rates hit specialised industries hard; workers in sectors that shrink (e.g. textiles in Germany) lose jobs and need retraining. Trade policy and social policy should cushion these effects.', punkte:['appreciation effect', 'dependence/vulnerability', 'structural change and job losses', 'policy response']}}
    ],
    hinweise:['Opportunity costs of a machine = hours per machine ÷ hours per textile batch.', 'Price abroad = price in € · exchange rate.'],
    merke:'Comparative advantage (Ricardo) · gains from trade · exchange rates influence competitiveness · risks of specialisation.'}),
  ...blAbi('fall', {id:'XL7', modul:'XL', stufe:3, titel:'Abiturfall: Fast fashion and the SDGs', tags:TV.concat(['Abiturfall', 'sustainability', 'SDGs', 'Economy for the Common Good']),
    text:'A fast-fashion retailer offers new collections every two weeks. Clothes are produced cheaply in Bangladesh; many items are worn only a few times. A rival company follows the Economy for the Common Good: it publishes a Common Good Balance Sheet, pays living wages and offers a repair service, but its T-shirts cost three times as much.',
    teile:[
      {op:'Analyse', t:'fast fashion with regard to the three dimensions of sustainability.', opts:['economic: low prices, jobs in producing countries · ecological: high resource use, waste, emissions · social: low wages, poor working conditions', 'only positive effects', 'no effects on the environment'], r:0,
        frei:{muster:'Economically, fast fashion offers low prices and creates jobs in producing countries and retail. Ecologically, it causes high consumption of water, energy and chemicals, emissions and huge amounts of textile waste. Socially, workers often receive low wages and face unsafe conditions. The economic advantages are achieved at ecological and social costs.', punkte:['economic', 'ecological', 'social', 'trade-offs']}},
      {op:'Identify', t:'two SDGs that are affected.', opts:['SDG 8 (decent work and economic growth) and SDG 12 (responsible consumption and production)', 'SDG 14 only', 'none'], r:0},
      {op:'Evaluate', t:'the business model of the rival company.', opts:['credible contribution to the common good and customer loyalty, but higher prices limit the target group; transparency through the Common Good Balance Sheet', 'cannot work at all', 'is identical to fast fashion'], r:0,
        frei:{muster:'The rival company measures success not only by profit but by its contribution to human dignity, solidarity, sustainability and transparency. Living wages and repair services reduce social and ecological costs; the Common Good Balance Sheet creates credibility. Higher prices limit the customer group and growth; the company relies on customers who value sustainability. Policy measures (e.g. supply chain laws) could level the playing field.', punkte:['ECG principles', 'advantages (credibility, impact)', 'limits (price, market size)', 'role of policy']}},
      {op:'Recommend', t:'a measure for consumers.', opts:['buy less and better, use second-hand and repair, check credible labels', 'buy more often to support jobs', 'ignore where clothes come from'], r:0}
    ],
    hinweise:['Triangle of sustainability, SDGs, alternative concepts.'],
    merke:'Sustainability conflicts in global value chains · SDGs 8 and 12 · Economy for the Common Good as alternative business model · sufficiency in consumption.'})
  ];
})(),
/* ---------- Volkswirtschaft · Ergänzungen für das Wirtschaftsgymnasium (05.11.2026) ----------
   Damit jedes Modul im WG-Trainer mindestens fünf Aufgaben hat – eng am Bildungsplan VBWL 2021.
   WK Wirtschaftskreislauf (BPE 1.6) · WS Staatseingriffe (BPE 2.1) · KW Wettbewerbsordnung im Überblick (BPE 2.1)
   VV Steuern, Transfers, Außenbeitrag (BPE 2.3) · EL Elastizitäten (BPE 15.2) · KJ Konjunktur (BPE 17.1) · SU Staatseingriffe (BPE 16.2) */
...(() => {
  const T = ['Volkswirtschaft', 'Wirtschaftsgymnasium'];
  return [
  /* ---------- WK · Wirtschaftskreislauf ---------- */
  blBau('rechnung', {id:'WK4', modul:'WK', stufe:1, titel:'Einfacher Kreislauf: Einkommen, Konsum und Sparen', tags:T.concat(['Wirtschaftskreislauf', 'Sparen']),
    text:'In einer Volkswirtschaft ohne Staat und Ausland zahlen die Unternehmen den Haushalten Faktoreinkommen von {y} Mrd. €. Die Haushalte geben {c} Mrd. € für Konsumgüter aus, den Rest sparen sie bei den Banken. Die Unternehmen leihen sich die Ersparnisse für Investitionen.',
    kopf:'Größe',
    zeilen:[
      {id:'y', t:'Einkommen', aus:true}, {id:'c', t:'Konsumausgaben', aus:true},
      {id:'s', t:'Ersparnis (Mrd. €)', f:'y - c'},
      {id:'sq', t:'Sparquote', e:'%', f:'(y - c) / y * 100'},
      {id:'i', t:'Investitionen, wenn der Kreislauf geschlossen ist (Mrd. €)', f:'y - c', weg:'Investitionen = Ersparnis = [i]'}
    ],
    werte:[{y:2000, c:1700}],
    sets:[[{y:2400, c:2160}], [{y:1800, c:1620}]],
    wahl:[{id:'w', t:'Was zeigt der geschlossene Kreislauf?', opts:['Was die Haushalte sparen, steht über die Banken den Unternehmen für Investitionen zur Verfügung.', 'Ersparnisse gehen dem Kreislauf verloren.', 'Die Unternehmen erhalten weniger Geld, als sie den Haushalten zahlen.'], r:'0'}],
    hinweise:['Ersparnis = Einkommen − Konsum.', 'Sparquote = Ersparnis ÷ Einkommen · 100.'],
    merke:'Einfacher Kreislauf: Haushalte (Faktorleistungen, Konsum, Sparen) und Unternehmen (Güter, Einkommen, Investitionen) · Ersparnis = Investition, wenn der Kreislauf geschlossen ist.'}),
  blBau('zuordnung', {id:'WK5', modul:'WK', stufe:1, titel:'Güterstrom oder Geldstrom?', tags:T.concat(['Wirtschaftskreislauf']),
    text:'Ordne jeden Strom zwischen Haushalten und Unternehmen zu.',
    kategorien:['Güterstrom (Sachgüter, Dienstleistungen, Faktorleistungen)', 'Geldstrom'], anzahl:8,
    faelle:[
      {t:'Ein Arbeitnehmer arbeitet in einer Fabrik.', k:0}, {t:'Die Fabrik zahlt ihm seinen Lohn.', k:1}, {t:'Eine Familie kauft im Supermarkt ein und bezahlt.', k:1},
      {t:'Der Supermarkt übergibt die Lebensmittel.', k:0}, {t:'Ein Haushalt vermietet ein Grundstück an ein Unternehmen.', k:0}, {t:'Das Unternehmen überweist die Pacht.', k:1},
      {t:'Ein Sparer stellt dem Unternehmen über die Bank Kapital zur Verfügung.', k:0}, {t:'Das Unternehmen zahlt Zinsen.', k:1}, {t:'Eine Werkstatt repariert das Auto eines Haushalts.', k:0}
    ],
    hinweise:['Jedem Güterstrom steht ein Geldstrom in entgegengesetzter Richtung gegenüber.'],
    merke:'Güterstrom: Faktorleistungen (Arbeit, Boden, Kapital) zu den Unternehmen, Güter zu den Haushalten · Geldstrom in Gegenrichtung: Einkommen bzw. Konsumausgaben.'}),

  /* ---------- WS · Staatseingriffe in der Sozialen Marktwirtschaft ---------- */
  blBau('zuordnung', {id:'WS4', modul:'WS', stufe:1, titel:'Welches Ziel verfolgt der Staat?', tags:T.concat(['Soziale Marktwirtschaft', 'Staatseingriffe']),
    text:'In der Sozialen Marktwirtschaft setzt der Staat den Rahmen und greift korrigierend ein. Ordne die Maßnahme ihrem Hauptziel zu.',
    kategorien:['Wettbewerb sichern', 'sozialen Ausgleich schaffen', 'Arbeitnehmer und Verbraucher schützen', 'Umwelt schützen'], anzahl:8,
    faelle:[
      {t:'Das Bundeskartellamt untersagt den Zusammenschluss zweier Marktführer.', k:0}, {t:'Familien erhalten Kindergeld.', k:1}, {t:'Ein Kündigungsschutzgesetz begrenzt Kündigungen.', k:2},
      {t:'Für CO₂-Ausstoß müssen Zertifikate gekauft werden.', k:3}, {t:'Haushalte mit geringem Einkommen erhalten Wohngeld.', k:1}, {t:'Irreführende Werbung ist verboten.', k:2},
      {t:'Gegen ein Preiskartell wird ein Bußgeld verhängt.', k:0}, {t:'Für Autoabgase gelten Grenzwerte.', k:3}, {t:'Eine progressive Einkommensteuer belastet hohe Einkommen stärker.', k:1}
    ],
    hinweise:['Fragt: Wem soll die Maßnahme vor allem nützen?'],
    merke:'Soziale Marktwirtschaft: Markt + staatlicher Rahmen · Wettbewerbspolitik, Sozialpolitik (Umverteilung, soziale Sicherung), Schutzvorschriften, Umweltpolitik.'}),
  {
    id:'WS5', modul:'WS', typ:'berechnung', mehrfach:true, stufe:2, titel:'Freie und Soziale Marktwirtschaft im Vergleich',
    tags:T.concat(['Soziale Marktwirtschaft', 'Wirtschaftsordnung']),
    text:'Die Soziale Marktwirtschaft beruht auf der freien Marktwirtschaft, ergänzt sie aber.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'In beiden Ordnungen gibt es Privateigentum an Produktionsmitteln und Preisbildung am Markt.', richtig:true},
      {text:'In der Sozialen Marktwirtschaft sichert der Staat den Wettbewerb gegen Kartelle und Monopole.', richtig:true},
      {text:'In der Sozialen Marktwirtschaft setzt der Staat die Preise für alle Güter fest.', fehler:'Die Preise bilden sich am Markt; nur in Ausnahmen greift der Staat ein (z. B. Mindestlohn).'},
      {text:'Die Soziale Marktwirtschaft gleicht Härten des Marktes aus, z. B. durch Sozialversicherung und Umverteilung.', richtig:true},
      {text:'In der freien Marktwirtschaft beschränkt sich der Staat auf Schutz von Eigentum, Sicherheit und Vertragsfreiheit (Nachtwächterstaat).', richtig:true}
    ],
    hinweise:['Was hat die Soziale Marktwirtschaft zusätzlich?'],
    merke:'Freie Marktwirtschaft: Privateigentum, Wettbewerb, Staat nur Nachtwächter · Soziale Marktwirtschaft: zusätzlich Wettbewerbsschutz, sozialer Ausgleich, Konjunktur- und Umweltpolitik.'
  },

  /* ---------- KW · Wettbewerbsordnung im Überblick ---------- */
  blBau('zuordnung', {id:'KW5', modul:'KW', stufe:1, titel:'Kartellverbot, Fusionskontrolle oder Missbrauchsaufsicht?', tags:T.concat(['Wettbewerbspolitik', 'Kartellrecht']),
    text:'Das Gesetz gegen Wettbewerbsbeschränkungen (GWB) kennt drei Säulen. Welche ist betroffen?',
    kategorien:['Kartellverbot', 'Fusionskontrolle', 'Missbrauchsaufsicht'], anzahl:8,
    faelle:[
      {t:'Drei Baufirmen sprechen ihre Angebote für öffentliche Aufträge ab.', k:0}, {t:'Ein großer Lebensmittelhändler will einen Konkurrenten übernehmen.', k:1},
      {t:'Ein marktbeherrschender Stromnetzbetreiber verlangt überhöhte Netzentgelte.', k:2}, {t:'Hersteller teilen den Markt nach Regionen auf.', k:0},
      {t:'Zwei Krankenhausketten wollen fusionieren.', k:1}, {t:'Eine dominierende Internetplattform benachteiligt die Angebote anderer Händler.', k:2},
      {t:'Brauereien verabreden gemeinsame Preiserhöhungen.', k:0}, {t:'Ein Medienkonzern kauft einen Radiosender dazu.', k:1}, {t:'Ein Marktbeherrscher verweigert Konkurrenten ohne Grund die Belieferung.', k:2}
    ],
    hinweise:['Absprache → Kartell · Zusammenschluss → Fusion · Ausnutzen von Marktmacht → Missbrauch.'],
    merke:'GWB: Kartellverbot (Absprachen), Fusionskontrolle (Zusammenschlüsse prüfen), Missbrauchsaufsicht (marktbeherrschende Unternehmen) · Bundeskartellamt bzw. EU-Kommission.'}),
  {
    id:'KW6', modul:'KW', typ:'berechnung', mehrfach:true, stufe:1, titel:'Warum der Staat den Wettbewerb schützt',
    tags:T.concat(['Wettbewerbspolitik', 'Soziale Marktwirtschaft']),
    text:'Für die Ordoliberalen ist funktionierender Wettbewerb das Herzstück der Marktwirtschaft.',
    frage:'Welche Aufgaben erfüllt der Wettbewerb?',
    optionen:[
      {text:'Er spornt Unternehmen zu besserer Leistung und Innovationen an.', richtig:true},
      {text:'Er sorgt dafür, dass die Preise auf ein angemessenes Niveau gedrückt werden.', richtig:true},
      {text:'Er begrenzt wirtschaftliche Macht.', richtig:true},
      {text:'Er garantiert jedem Unternehmen einen sicheren Gewinn.', fehler:'Im Wettbewerb können Unternehmen auch Verluste machen und ausscheiden – das gehört zur Auslesefunktion.'},
      {text:'Er gibt den Verbrauchern Auswahl und richtet das Angebot an ihren Wünschen aus.', richtig:true}
    ],
    hinweise:['Denke an Verbraucher, Unternehmen und Macht.'],
    merke:'Wettbewerb: Leistungs- und Innovationsanreiz, angemessene Preise, Begrenzung von Macht, Verbrauchersouveränität · ohne staatlichen Schutz Gefahr von Kartellen und Monopolen.'
  },
  {
    id:'KW7', modul:'KW', typ:'berechnung', mehrfach:true, stufe:2, titel:'Wer schützt den Wettbewerb?',
    tags:T.concat(['Wettbewerbspolitik', 'Kartellrecht']),
    text:'Im Überblick: Institutionen der Wettbewerbspolitik.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Das Bundeskartellamt verfolgt Kartelle und kann Bußgelder verhängen.', richtig:true},
      {text:'Bei Fällen mit Auswirkungen auf mehrere EU-Staaten ist die Europäische Kommission zuständig.', richtig:true},
      {text:'Größere Zusammenschlüsse müssen vor dem Vollzug angemeldet werden.', richtig:true},
      {text:'Das Bundeskartellamt legt die Preise für Lebensmittel fest.', fehler:'Die Preisbildung erfolgt am Markt – das Bundeskartellamt schützt nur den Wettbewerb.'},
      {text:'Die Monopolkommission berät die Bundesregierung zur Wettbewerbslage.', richtig:true}
    ],
    hinweise:['Bundeskartellamt (Bonn), EU-Kommission, Monopolkommission.'],
    merke:'Wettbewerbsordnung: GWB, Bundeskartellamt (Kartelle, Fusionen, Missbrauch), EU-Kommission (grenzüberschreitend), Monopolkommission (Beratung).'
  },

  /* ---------- VV · Steuern, Transfers und Außenbeitrag ---------- */
  blBau('zuordnung', {id:'VV5', modul:'VV', stufe:1, titel:'Direkte Steuer, indirekte Steuer, Transfer oder Subvention?', tags:T.concat(['Steuern', 'Transferzahlungen', 'Subventionen']),
    text:'Ordne die Zahlung zu.',
    kategorien:['direkte Steuer', 'indirekte Steuer', 'Transferzahlung an Haushalte', 'Subvention an Unternehmen'], anzahl:9,
    faelle:[
      {t:'Einkommensteuer', k:0, weg:'Steuerschuldner und Steuerträger sind dieselbe Person.'}, {t:'Umsatzsteuer', k:1, weg:'Das Unternehmen führt sie ab, getragen wird sie vom Verbraucher.'},
      {t:'Kindergeld', k:2}, {t:'Zuschuss an Landwirte je Hektar', k:3}, {t:'Körperschaftsteuer', k:0}, {t:'Energiesteuer auf Kraftstoffe', k:1},
      {t:'Wohngeld', k:2}, {t:'Forschungszulage für Unternehmen', k:3}, {t:'Tabaksteuer', k:1}, {t:'BAföG', k:2}, {t:'Gewerbesteuer', k:0}
    ],
    hinweise:['Direkt: Wer zahlt, trägt sie auch · indirekt: wird über den Preis überwälzt.', 'Transfers ohne Gegenleistung an Haushalte, Subventionen an Unternehmen.'],
    merke:'Direkte Steuern (Einkommen-, Körperschaft-, Gewerbesteuer) · indirekte Steuern (Umsatz-, Energie-, Tabaksteuer) · Transferzahlungen an Haushalte, Subventionen an Unternehmen – jeweils ohne Gegenleistung.'}),
  blBau('rechnung', {id:'VV6', modul:'VV', stufe:2, titel:'Außenbeitrag berechnen', tags:T.concat(['Außenbeitrag', 'Verwendungsrechnung']),
    text:'Für zwei Jahre liegen folgende Werte vor (Mrd. €).',
    kopf:'Größe', spalten:['Jahr 1', 'Jahr 2'],
    zeilen:[
      {id:'bip', t:'Bruttoinlandsprodukt'}, {id:'ex', t:'Exporte'}, {id:'im', t:'Importe'},
      {id:'ab', t:'Außenbeitrag (Mrd. €)', f:'ex - im'},
      {id:'aq', t:'Außenbeitrag in % des BIP', e:'%', f:'(ex - im) / bip * 100'}
    ],
    werte:[{bip:4100, ex:1950, im:1780}, {bip:4200, ex:1890, im:1820}],
    sets:[[{bip:3900, ex:1800, im:1650}, {bip:4000, ex:1760, im:1790}]],
    wahl:[{id:'w', t:'Was bedeutet ein positiver Außenbeitrag?', opts:['Das Land führt mehr Waren und Dienstleistungen aus als ein.', 'Das Land importiert mehr, als es exportiert.', 'Der Staat hat einen Haushaltsüberschuss.'], r:'0'}],
    hinweise:['Außenbeitrag = Exporte − Importe (Teil der Verwendungsrechnung des BIP).'],
    merke:'Außenbeitrag = Exporte − Importe · positiv: Exportüberschuss · Bestandteil der Verwendungsrechnung: BIP = Konsum + Investitionen + Staatsausgaben + Außenbeitrag.'}),

  /* ---------- EL · Elastizitäten (BPE 15.2) ---------- */
  blBau('rechnung', {id:'EL6', modul:'EL', stufe:2, titel:'Direkte Preiselastizität und Konsumausgaben', tags:T.concat(['Preiselastizität', 'Konsumausgaben']),
    text:'Ein Anbieter ändert den Preis zweier Produkte. Berechne jeweils die direkte Preiselastizität der Nachfrage (bezogen auf die Ausgangswerte) und die Konsumausgaben vorher und nachher.',
    kopf:'Größe', spalten:['Produkt A', 'Produkt B'],
    zeilen:[
      {id:'p0', t:'Preis vorher', e:'€'}, {id:'p1', t:'Preis nachher', e:'€'}, {id:'x0', t:'Menge vorher'}, {id:'x1', t:'Menge nachher'},
      {id:'dx', t:'Mengenänderung in %', e:'%', f:'(x1 - x0) / x0 * 100'},
      {id:'dp', t:'Preisänderung in %', e:'%', f:'(p1 - p0) / p0 * 100'},
      {id:'el', t:'direkte Preiselastizität', f:'((x1 - x0) / x0) / ((p1 - p0) / p0)'},
      {id:'u0', t:'Konsumausgaben vorher', e:'€', f:'p0 * x0'},
      {id:'u1', t:'Konsumausgaben nachher', e:'€', f:'p1 * x1'}
    ],
    werte:[{p0:10, p1:8, x0:1000, x1:1400}, {p0:4, p1:5, x0:2000, x1:1900}],
    sets:[[{p0:20, p1:16, x0:500, x1:650}, {p0:2, p1:2.5, x0:4000, x1:3600}]],
    wahl:[{id:'w', t:'Bei welchem Produkt steigen die Konsumausgaben, obwohl weniger gekauft wird?', opts:['bei Produkt A', 'bei Produkt B', 'bei keinem'], r:'p1@1 * x1@1 > p0@1 * x0@1 ? 1 : 2'}],
    hinweise:['Elastizität = prozentuale Mengenänderung ÷ prozentuale Preisänderung.', 'Betrag > 1: elastisch – Preis und Ausgaben bewegen sich gegenläufig; Betrag < 1: unelastisch – gleichläufig.'],
    merke:'Direkte Preiselastizität ohne Mittelwertmethode: Bezug auf die Ausgangswerte · elastisch (|e| > 1): Preissenkung erhöht die Ausgaben · unelastisch (|e| < 1): Preiserhöhung erhöht die Ausgaben.'}),
  {
    id:'EL7', modul:'EL', typ:'berechnung', mehrfach:true, stufe:2, titel:'Indirekte Preiselastizität deuten',
    tags:T.concat(['Kreuzpreiselastizität', 'Güterbeziehungen']),
    text:'Die indirekte Preiselastizität (Kreuzpreiselastizität) misst, wie die Nachfrage nach Gut A auf eine Preisänderung bei Gut B reagiert.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Ist sie positiv, sind A und B Substitutionsgüter.', richtig:true, weg:'Preis von B steigt → mehr A wird gekauft.'},
      {text:'Ist sie negativ, sind A und B Komplementärgüter.', richtig:true},
      {text:'Liegt sie bei null, sind die Güter indifferent.', richtig:true},
      {text:'Eine indirekte Preiselastizität von −0,8 zeigt Substitutionsgüter an.', fehler:'Negativ heißt: Preis von B steigt, Nachfrage nach A sinkt – das passt zu Komplementärgütern.'},
      {text:'Je höher der Betrag, desto enger ist die Beziehung zwischen den Gütern.', richtig:true}
    ],
    hinweise:['Vorzeichen zuerst: positiv – Ersatz, negativ – Ergänzung.'],
    merke:'Indirekte Preiselastizität = %-Änderung Menge A ÷ %-Änderung Preis B · positiv: Substitute · negativ: Komplemente · null: indifferent.'
  },

  /* ---------- KJ · Konjunktur (BPE 17.1) ---------- */
  blBau('zuordnung', {id:'KJ5', modul:'KJ', stufe:1, titel:'Merkmale der Konjunkturphasen', tags:T.concat(['Konjunktur', 'Konjunkturzyklus']),
    text:'Ordne das Merkmal der Konjunkturphase zu, in der es typisch auftritt.',
    kategorien:['Aufschwung', 'Hochkonjunktur', 'Abschwung', 'Tiefstand'], anzahl:8,
    faelle:[
      {t:'Die Auftragseingänge steigen, die Kapazitäten sind noch nicht ausgelastet.', k:0}, {t:'Die Kapazitäten sind voll ausgelastet, Lieferzeiten werden lang.', k:1},
      {t:'Die Nachfrage lässt nach, Lager füllen sich.', k:2}, {t:'Die Arbeitslosigkeit ist hoch, die Stimmung schlecht.', k:3},
      {t:'Preise und Löhne steigen stark.', k:1}, {t:'Unternehmen investieren wieder, die Stimmung hellt sich auf.', k:0},
      {t:'Unternehmen bauen Überstunden ab und stellen kaum noch ein.', k:2}, {t:'Die Investitionen sind auf einem niedrigen Niveau.', k:3}, {t:'Die Gewinne erreichen ihren Höhepunkt.', k:1}
    ],
    hinweise:['Aufschwung → Hochkonjunktur → Abschwung → Tiefstand.'],
    merke:'Aufschwung: Nachfrage und Investitionen steigen · Hochkonjunktur: Vollauslastung, Preise und Löhne ↑ · Abschwung: Nachfrage sinkt, Lager voll · Tiefstand: hohe Arbeitslosigkeit, wenig Investitionen.'}),
  blBau('rechnung', {id:'KJ6', modul:'KJ', stufe:2, titel:'Wachstumsraten aus einer BIP-Reihe', tags:T.concat(['Konjunktur', 'Wachstumsrate']),
    text:'Das reale BIP eines Landes entwickelt sich über fünf Jahre (Mrd. €). Berechne die Wachstumsraten gegenüber dem Vorjahr.',
    kopf:'Jahr', spalten:['Jahr 2', 'Jahr 3', 'Jahr 4', 'Jahr 5'],
    zeilen:[
      {id:'v', t:'BIP real im Vorjahr'}, {id:'b', t:'BIP real'},
      {id:'w', t:'Wachstumsrate', e:'%', f:'(b - v) / v * 100'}
    ],
    werte:[{v:3800, b:3895}, {v:3895, b:3973}, {v:3973, b:3953}, {v:3953, b:3874}],
    sets:[[{v:4000, b:3920}, {v:3920, b:3940}, {v:3940, b:4058}, {v:4058, b:4180}]],
    wahl:[{id:'w1', t:'In welcher Phase befindet sich die Wirtschaft im letzten Jahr der Reihe?', opts:['Aufschwung bzw. Hochkonjunktur: Das BIP wächst kräftig.', 'Abschwung bzw. Rezession: Das BIP schrumpft.'], r:'b@3 > v@3 ? 0 : 1'}],
    hinweise:['Wachstumsrate = (BIP − BIP Vorjahr) ÷ BIP Vorjahr · 100.', 'Eine Rezession liegt meist vor, wenn das reale BIP sinkt.'],
    merke:'Konjunkturverlauf an den Wachstumsraten des realen BIP ablesen · steigende Raten: Aufschwung · sinkendes BIP: Abschwung bzw. Rezession.'}),
  {
    id:'KJ7', modul:'KJ', typ:'berechnung', mehrfach:true, stufe:2, titel:'Modell und Wirklichkeit',
    tags:T.concat(['Konjunktur', 'Konjunkturzyklus']),
    text:'Der idealtypische Konjunkturzyklus ist ein Modell. Die tatsächliche Entwicklung in Deutschland weicht davon ab.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Die Phasen sind in Wirklichkeit unterschiedlich lang und unterschiedlich stark.', richtig:true},
      {text:'Plötzliche Ereignisse wie eine Pandemie oder ein Energiepreisschock können einen Einbruch auslösen, der nicht in das Schema passt.', richtig:true},
      {text:'Das Modell hilft, Daten einzuordnen und frühzeitig Fehlentwicklungen zu erkennen.', richtig:true},
      {text:'Ein Konjunkturzyklus dauert immer genau vier Jahre.', fehler:'Die Dauer schwankt stark; feste Zyklen gibt es nicht.'},
      {text:'Statistische Daten (z. B. von destatis) werden oft nachträglich korrigiert.', richtig:true}
    ],
    hinweise:['Modelle vereinfachen die Wirklichkeit.'],
    merke:'Konjunkturmodell: idealtypisch, regelmäßige Wellen · Realität: unregelmäßig, Schocks, Datenrevisionen · Nutzen: Einordnung und Prognose.'
  },

  /* ---------- SU · Staatseingriffe (BPE 16.2) ---------- */
  blBau('zuordnung', {id:'SU4', modul:'SU', stufe:1, titel:'Marktkonform oder marktkonträr?', tags:T.concat(['Staatseingriffe']),
    text:'Ordne den staatlichen Eingriff zu.',
    kategorien:['marktkonform (Preismechanismus bleibt wirksam)', 'marktkonträr (Preismechanismus wird außer Kraft gesetzt)'], anzahl:8,
    faelle:[
      {t:'Verbrauchsteuer auf Alkohol', k:0}, {t:'Höchstpreis für Mieten', k:1}, {t:'Kaufprämie für Wärmepumpen', k:0}, {t:'garantierter Mindestpreis für Getreide', k:1},
      {t:'Kindergeld', k:0}, {t:'gesetzlicher Mindestlohn', k:1}, {t:'Subvention für den öffentlichen Nahverkehr', k:0}, {t:'Preisstopp für Brot', k:1}, {t:'CO₂-Abgabe auf Heizöl', k:0}
    ],
    hinweise:['Marktkonform: verändert Angebot oder Nachfrage, der Preis bildet sich weiter am Markt.'],
    merke:'Marktkonform: Steuern, Subventionen, Transfers · marktkonträr: Höchst- und Mindestpreise, Preisstopps → Überhänge, Schwarzmärkte, Überschüsse.'}),
  {
    id:'SU5', modul:'SU', typ:'berechnung', mehrfach:true, stufe:3, titel:'Wer trägt die Steuer?',
    tags:T.concat(['Verbrauchsteuer', 'Elastizität', 'Wohlfahrt']),
    text:'Auf Zigaretten und auf Restaurantbesuche wird jeweils eine Verbrauchsteuer von 1 € je Einheit erhoben. Raucher reagieren kaum auf Preisänderungen, Restaurantgäste deutlich.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Bei Zigaretten tragen vor allem die Käufer die Steuer, weil ihre Nachfrage unelastisch ist.', richtig:true},
      {text:'Bei Restaurantbesuchen müssen die Anbieter einen größeren Teil der Steuer selbst tragen.', richtig:true},
      {text:'Der Wohlfahrtsverlust ist bei den Zigaretten größer, weil dort die Menge stark sinkt.', fehler:'Die Menge sinkt bei unelastischer Nachfrage wenig – der Wohlfahrtsverlust ist dort kleiner.'},
      {text:'Bei Zigaretten bringt die Steuer viel Aufkommen, lenkt aber wenig.', richtig:true},
      {text:'Wer die Steuer ans Finanzamt abführt, trägt sie auch immer vollständig.', fehler:'Zahllast und Steuerlast fallen auseinander – ein Teil wird über den Preis weitergegeben.'}
    ],
    hinweise:['Wer weniger ausweichen kann, trägt mehr.'],
    merke:'Steuerinzidenz: Die unelastischere Marktseite trägt den größeren Teil · unelastische Nachfrage: hohes Aufkommen, geringe Lenkung, kleiner Wohlfahrtsverlust.'
  }
  ,
  /* ======================= Runde 2: je Modul auf mindestens fünf Aufgaben ======================= */
  blBau('zuordnung', {id:'HB5', modul:'HB', stufe:1, titel:'Existenz-, Kultur- oder Luxusbedürfnis?', tags:T.concat(['Bedürfnisse']),
    text:'Ordne das Bedürfnis zu (bezogen auf eine Familie in Deutschland).',
    kategorien:['Existenzbedürfnis', 'Kulturbedürfnis', 'Luxusbedürfnis'], anzahl:8,
    faelle:[
      {t:'Nahrung und Trinkwasser', k:0}, {t:'ein Theaterbesuch', k:1}, {t:'eine Jacht', k:2}, {t:'eine warme Wohnung im Winter', k:0},
      {t:'ein Zeitungsabo', k:1}, {t:'ein Sportwagen mit 600 PS', k:2}, {t:'Grundkleidung', k:0}, {t:'ein Smartphone', k:1}, {t:'eine Luxusuhr', k:2}
    ],
    hinweise:['Die Einordnung hängt von Zeit, Ort und Einkommen ab.'],
    merke:'Existenzbedürfnisse sichern das Überleben, Kulturbedürfnisse ergeben sich aus dem gesellschaftlichen Lebensstandard, Luxusbedürfnisse gehen darüber hinaus · Grenzen verschieben sich.'}),
  {
    id:'GU5', modul:'GU', typ:'berechnung', mehrfach:true, stufe:2, titel:'Knappheit und Ressourcen',
    tags:T.concat(['Knappheit', 'Ressourcen']),
    text:'Wasser ist in Deutschland meist reichlich vorhanden, in Dürreregionen dagegen knapp.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Knappheit ist relativ: Ein Gut ist knapp, wenn die Bedürfnisse größer sind als die verfügbare Menge.', richtig:true},
      {text:'Ob ein Gut frei oder wirtschaftlich ist, kann sich mit Ort und Zeit ändern.', richtig:true},
      {text:'Knappe Ressourcen zwingen zu Entscheidungen – jede Wahl hat Opportunitätskosten.', richtig:true},
      {text:'Reiche Länder kennen keine Knappheit.', fehler:'Auch dort sind Zeit, Arbeitskräfte, Boden oder Energie knapp.'},
      {text:'Der Klimawandel kann bisher freie Güter wie saubere Luft oder Wasser knapp machen.', richtig:true}
    ],
    hinweise:['Knappheit = Bedürfnisse > verfügbare Güter.'],
    merke:'Knappheit ist das Grundproblem der Wirtschaft · relativ zu den Bedürfnissen · zwingt zum Wirtschaften nach dem ökonomischen Prinzip.'
  },
  blBau('zuordnung', {id:'HO5', modul:'HO', stufe:2, titel:'Win-win oder win-lose?', tags:T.concat(['Homo oeconomicus', 'Kooperation']),
    text:'Ordne die Situation zu.',
    kategorien:['win-win: beide gewinnen', 'win-lose: einer gewinnt auf Kosten des anderen'], anzahl:7,
    faelle:[
      {t:'Ein Käufer zahlt freiwillig 3 € für ein Brot, das ihm mehr wert ist; der Bäcker verdient daran.', k:0},
      {t:'Ein Händler verkauft einem Unwissenden einen Unfallwagen als unfallfrei.', k:1},
      {t:'Zwei Länder spezialisieren sich und tauschen ihre Güter.', k:0},
      {t:'Ein Fischer fängt so viel, dass für die anderen kaum etwas bleibt.', k:1},
      {t:'Zwei Nachbarn teilen sich einen Rasenmäher und sparen beide Geld.', k:0},
      {t:'Ein Unternehmen leitet Abwasser ungeklärt in den Fluss, die Anwohner tragen die Folgen.', k:1},
      {t:'Eine Lerngruppe teilt ihre Zusammenfassungen, alle schreiben bessere Noten.', k:0}
    ],
    hinweise:['Freiwilliger Tausch nützt meist beiden Seiten.'],
    merke:'Win-win: freiwillige Kooperation und Tausch · win-lose: Täuschung, Übernutzung, externe Kosten · Fairness und Kooperation können sich langfristig lohnen.'}),
  {
    id:'VG5', modul:'VG', typ:'berechnung', mehrfach:true, stufe:2, titel:'Verteilungskonflikte in Deutschland',
    tags:T.concat(['Verteilung', 'Verteilungskonflikte']),
    text:'Um die Verteilung von Einkommen und Vermögen wird in Deutschland regelmäßig gestritten.',
    frage:'Welche Aussagen beschreiben nationale Verteilungskonflikte zutreffend?',
    optionen:[
      {text:'In Tarifverhandlungen streiten Gewerkschaften und Arbeitgeber um den Anteil der Löhne an der Wertschöpfung.', richtig:true},
      {text:'Bei der Rentenpolitik geht es um die Lastenverteilung zwischen Jung und Alt.', richtig:true},
      {text:'Über die Höhe von Steuern auf hohe Einkommen und Erbschaften wird politisch gestritten.', richtig:true},
      {text:'Es gibt einen objektiven Maßstab, der allen sagt, welche Verteilung gerecht ist.', fehler:'Gerechtigkeit hängt vom Prinzip ab (Leistung, Bedarf, Gleichheit) – einen allgemein anerkannten Maßstab gibt es nicht.'},
      {text:'Hinter Verteilungskonflikten stehen unterschiedliche Vorstellungen von Gerechtigkeit.', richtig:true}
    ],
    hinweise:['Wer will was, und mit welchem Gerechtigkeitsprinzip?'],
    merke:'Nationale Verteilungskonflikte: Löhne und Gewinne, Steuern, Renten, Sozialleistungen · kein objektiver Maßstab · Leistungs-, Bedarfs- und Gleichheitsprinzip konkurrieren.'
  },
  blBau('zuordnung', {id:'GD5', modul:'GD', stufe:1, titel:'Welche Funktion erfüllt das Geld?', tags:T.concat(['Geld', 'Geldfunktionen']),
    text:'Ordne zu, welche Funktion des Geldes im Beispiel vor allem genutzt wird.',
    kategorien:['Tauschmittel', 'Wertaufbewahrungsmittel', 'Recheneinheit (Wertmaßstab)', 'Wertübertragungsmittel'], anzahl:8,
    faelle:[
      {t:'Lisa bezahlt im Supermarkt ihren Einkauf.', k:0}, {t:'Opa legt jeden Monat 50 € für später zurück.', k:1}, {t:'Ein Preisvergleichsportal zeigt alle Angebote in Euro.', k:2},
      {t:'Eltern überweisen ihrer Tochter zum Geburtstag 100 €.', k:3}, {t:'Ein Unternehmen bewertet sein Vermögen in der Bilanz in Euro.', k:2}, {t:'Ein Handwerker wird für seine Arbeit bezahlt.', k:0},
      {t:'Eine Familie spart für das Studium der Kinder.', k:1}, {t:'Ein Staat zahlt Entwicklungshilfe an ein anderes Land.', k:3}
    ],
    hinweise:['Tauschen, aufbewahren, vergleichen, übertragen.'],
    merke:'Geldfunktionen: Tauschmittel, Wertaufbewahrungsmittel, Recheneinheit (Wertmaßstab), Wertübertragungsmittel · ohne Geld müsste direkt getauscht werden.'}),
  {
    id:'WO5', modul:'WO', typ:'berechnung', mehrfach:true, stufe:2, titel:'Probleme der Zentralverwaltungswirtschaft',
    tags:T.concat(['Wirtschaftsordnungen', 'Zentralverwaltungswirtschaft']),
    text:'In einer Zentralverwaltungswirtschaft legt eine staatliche Planbehörde fest, was, wie und für wen produziert wird.',
    frage:'Welche Probleme sind typisch?',
    optionen:[
      {text:'Die Planbehörde kann die Wünsche von Millionen Verbrauchern kaum erfassen – es entstehen Mangel und Überschüsse.', richtig:true},
      {text:'Ohne Gewinnchancen fehlen Anreize für Leistung und Innovation.', richtig:true},
      {text:'Festgesetzte Preise zeigen Knappheiten nicht an.', richtig:true},
      {text:'Die Preise bilden sich durch Angebot und Nachfrage.', fehler:'Das ist ein Merkmal der Marktwirtschaft; in der Zentralverwaltungswirtschaft setzt der Staat die Preise fest.'},
      {text:'Die Produktionsmittel sind überwiegend in Staatseigentum.', richtig:true}
    ],
    hinweise:['Wer plant, wer entscheidet, wie entstehen Preise?'],
    merke:'Zentralverwaltungswirtschaft: Staatseigentum, zentraler Plan, staatliche Preise · Probleme: Informations-, Anreiz- und Lenkungsprobleme, Mangelwirtschaft.'
  },
  {
    id:'BO5', modul:'BO', typ:'berechnung', mehrfach:true, stufe:1, titel:'Aufträge an der Börse',
    tags:T.concat(['Börse', 'Preisbildung']),
    text:'An einer Warenbörse geben Käufer und Verkäufer Aufträge ab, aus denen der Einheitskurs ermittelt wird.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'„Billigst“ heißt: Der Käufer kauft zu jedem Kurs.', richtig:true},
      {text:'„Bestens“ heißt: Der Verkäufer verkauft zu jedem Kurs.', richtig:true},
      {text:'Ein Kauflimit von 20 € bedeutet: Der Käufer zahlt höchstens 20 €.', richtig:true},
      {text:'Ein Verkaufslimit von 20 € bedeutet: Der Verkäufer verkauft höchstens zu 20 €.', fehler:'Ein Verkaufslimit ist ein Mindestpreis: Er verkauft nur zu 20 € oder mehr.'},
      {text:'Der Einheitskurs ist der Kurs, zu dem der größte Umsatz zustande kommt.', richtig:true}
    ],
    hinweise:['Kauflimit = Höchstpreis, Verkaufslimit = Mindestpreis.'],
    merke:'Börse als Modell des Marktes: billigst/bestens immer ausgeführt · Kauflimit = Höchstpreis · Verkaufslimit = Mindestpreis · Einheitskurs = größter Umsatz (Meistausführungsprinzip).'
  },
  {
    id:'PP9', modul:'PP', typ:'berechnung', mehrfach:true, stufe:2, titel:'Überhang oder Gleichgewicht?',
    tags:T.concat(['Marktgleichgewicht', 'Preisbildung']),
    text:'Auf dem Wochenmarkt gilt für Erdbeeren (Schalen pro Tag):'
      + '<table class="lager"><tr><th>Preis</th><th>Nachfrage</th><th>Angebot</th></tr><tr><td>2 €</td><td class="z">900</td><td class="z">300</td></tr><tr><td>3 €</td><td class="z">700</td><td class="z">500</td></tr><tr><td>4 €</td><td class="z">600</td><td class="z">600</td></tr><tr><td>5 €</td><td class="z">450</td><td class="z">750</td></tr></table>',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Bei 4 € herrscht Gleichgewicht; es werden 600 Schalen umgesetzt.', richtig:true},
      {text:'Bei 3 € gibt es einen Nachfrageüberhang von 200 Schalen.', richtig:true},
      {text:'Bei 5 € gibt es einen Angebotsüberhang von 300 Schalen.', richtig:true},
      {text:'Bei 2 € werden 900 Schalen verkauft.', fehler:'Verkauft werden kann nur, was angeboten wird: höchstens 300 Schalen.'},
      {text:'Im Gleichgewicht werden alle Käufer bedient, die mindestens den Gleichgewichtspreis zahlen wollen.', richtig:true}
    ],
    hinweise:['Umsatz = die kleinere Menge aus Angebot und Nachfrage.'],
    merke:'Gleichgewichtspreis: Angebot = Nachfrage, größter Umsatz · darunter Nachfrageüberhang, darüber Angebotsüberhang · Markt wird geräumt.'
  },
  {
    id:'GG5', modul:'GG', typ:'berechnung', mehrfach:true, stufe:2, titel:'Eigentum verpflichtet',
    tags:T.concat(['Grundgesetz', 'Eigentum']),
    text:'Art. 14 des Grundgesetzes gewährleistet das Eigentum.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Eigentum und Erbrecht werden gewährleistet.', richtig:true},
      {text:'Der Gebrauch des Eigentums soll zugleich dem Wohle der Allgemeinheit dienen (Sozialbindung).', richtig:true},
      {text:'Eine Enteignung ist nur zum Wohle der Allgemeinheit und gegen Entschädigung zulässig.', richtig:true},
      {text:'Der Staat darf Eigentum jederzeit ohne Entschädigung entziehen.', fehler:'Enteignung setzt ein Gesetz, das Allgemeinwohl und eine Entschädigung voraus.'},
      {text:'Privateigentum an Produktionsmitteln ist ein Ordnungsmerkmal der Sozialen Marktwirtschaft.', richtig:true}
    ],
    hinweise:['Art. 14 Abs. 1–3 GG.'],
    merke:'Art. 14 GG: Eigentum gewährleistet · Sozialbindung („Eigentum verpflichtet“) · Enteignung nur zum Allgemeinwohl gegen Entschädigung.'
  },
  {
    id:'SV6', modul:'SV', typ:'berechnung', mehrfach:true, stufe:2, titel:'Umlageverfahren und Generationenvertrag',
    tags:T.concat(['Sozialversicherung', 'Rentenversicherung']),
    text:'Die gesetzliche Rentenversicherung wird im Umlageverfahren finanziert.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Die Beiträge der heutigen Beschäftigten finanzieren die Renten der heutigen Rentner.', richtig:true},
      {text:'Steigt die Zahl der Rentner im Verhältnis zu den Beitragszahlern, gerät das System unter Druck.', richtig:true},
      {text:'Mögliche Reaktionen sind höhere Beiträge, ein niedrigeres Rentenniveau, längeres Arbeiten oder mehr Steuerzuschüsse.', richtig:true},
      {text:'Jeder Beschäftigte spart seine Beiträge auf einem eigenen Konto für seine spätere Rente an.', fehler:'Das wäre ein Kapitaldeckungsverfahren; die gesetzliche Rente arbeitet mit Umlage.'},
      {text:'Die Beiträge zahlen Arbeitnehmer und Arbeitgeber grundsätzlich je zur Hälfte.', richtig:true}
    ],
    hinweise:['Generationenvertrag: Die Erwerbstätigen tragen die Älteren.'],
    merke:'Umlageverfahren: Beiträge heute → Renten heute · demografischer Wandel belastet · Stellschrauben: Beitragssatz, Rentenniveau, Renteneintrittsalter, Bundeszuschuss.'
  },
  blBau('rechnung', {id:'VE5', modul:'VE', stufe:1, titel:'Wertschöpfung vom Weizen zum Brot', tags:T.concat(['Wertschöpfung', 'Entstehungsrechnung']),
    text:'Ein Landwirt verkauft Weizen an eine Mühle, die Mühle verkauft Mehl an eine Bäckerei, die Bäckerei verkauft Brot an die Kunden (Werte in €).',
    kopf:'Stufe', spalten:['Landwirt', 'Mühle', 'Bäckerei'],
    zeilen:[
      {id:'pw', t:'Produktionswert (Verkaufserlös)', e:'€'}, {id:'vl', t:'Vorleistungen (gekaufte Güter)', e:'€'},
      {id:'ws', t:'Wertschöpfung', e:'€', f:'pw - vl'}
    ],
    werte:[{pw:2000, vl:0}, {pw:3200, vl:2000}, {pw:7500, vl:3200}],
    sets:[[{pw:1500, vl:0}, {pw:2600, vl:1500}, {pw:6000, vl:2600}]],
    felder:[{id:'sum', t:'Summe der Wertschöpfung (€)', f:'ws@0 + ws@1 + ws@2', e:'€', kurz:'Summe der Wertschöpfung'}],
    wahl:[{id:'w', t:'Warum zählt man im BIP die Wertschöpfung und nicht die Summe aller Verkaufserlöse?', opts:['Sonst würden die Vorleistungen mehrfach gezählt.', 'Weil die Bäckerei keine Steuern zahlt.', 'Weil Weizen kein wirtschaftliches Gut ist.'], r:'0'}],
    hinweise:['Wertschöpfung = Produktionswert − Vorleistungen.'],
    merke:'Wertschöpfung = Produktionswert − Vorleistungen · Summe der Wertschöpfung = Wert des Endprodukts · Entstehungsrechnung des BIP vermeidet Doppelzählungen.'})

  ,
  blBau('zuordnung', {id:'MM5', modul:'MM', stufe:1, titel:'Arten der Preisdifferenzierung', tags:T.concat(['Monopol', 'Preisdifferenzierung']),
    text:'Ordne das Beispiel der Art der Preisdifferenzierung zu.',
    kategorien:['zeitlich', 'räumlich', 'personell', 'mengenmäßig'], anzahl:8,
    faelle:[
      {t:'Kinokarten sind am Montag billiger.', k:0}, {t:'Ein Medikament kostet in Deutschland mehr als in Polen.', k:1}, {t:'Studierende zahlen im Museum weniger.', k:2},
      {t:'Wer 10 Kisten kauft, erhält Rabatt.', k:3}, {t:'Strom ist nachts günstiger.', k:0}, {t:'Seniorenticket im Nahverkehr', k:2},
      {t:'Ein Auto wird im Ausland zu einem anderen Preis angeboten.', k:1}, {t:'Großpackung mit niedrigerem Preis je Stück', k:3}, {t:'Frühbucherrabatt für Urlaubsreisen', k:0}
    ],
    hinweise:['Wann, wo, wer, wie viel?'],
    merke:'Preisdifferenzierung: gleiches Gut zu unterschiedlichen Preisen – zeitlich, räumlich, personell, mengenmäßig · Ziel: Konsumentenrente abschöpfen · Voraussetzung: Teilmärkte lassen sich trennen.'}),
  blBau('zuordnung', {id:'EO5', modul:'EO', stufe:1, titel:'ESZB, Eurosystem und EZB', tags:T.concat(['EZB', 'ESZB', 'Eurosystem']),
    text:'Ordne zu.',
    kategorien:['EZB-Rat', 'Direktorium der EZB', 'Eurosystem', 'ESZB'], anzahl:7,
    faelle:[
      {t:'beschließt die Leitzinsen für den Euroraum', k:0}, {t:'führt die Geldpolitik nach den Beschlüssen aus und leitet die laufenden Geschäfte', k:1},
      {t:'EZB und nationale Zentralbanken der Länder mit dem Euro', k:2}, {t:'EZB und die nationalen Zentralbanken aller EU-Staaten', k:3},
      {t:'besteht aus den sechs Mitgliedern des Direktoriums und den Präsidenten der nationalen Zentralbanken des Euroraums', k:0},
      {t:'Präsidentin bzw. Präsident, Vizepräsident und vier weitere Mitglieder', k:1}, {t:'umfasst auch Zentralbanken von Ländern ohne Euro, z. B. Schweden', k:3}
    ],
    hinweise:['Eurosystem = Euroländer · ESZB = alle EU-Länder.'],
    merke:'EZB-Rat: oberstes Beschlussorgan (Leitzinsen) · Direktorium: Ausführung · Eurosystem: EZB + Zentralbanken der Euroländer · ESZB: EZB + alle EU-Zentralbanken.'}),
  blBau('rechnung', {id:'PN6', modul:'PN', stufe:2, titel:'Inflationsrate mit Wägungsschema', tags:T.concat(['Verbraucherpreisindex', 'Wägungsschema']),
    text:'Ein vereinfachter Warenkorb besteht aus drei Gütergruppen. Das Wägungsschema gibt an, welchen Anteil sie an den Konsumausgaben haben. Berechne den Beitrag jeder Gruppe zur Inflationsrate.',
    kopf:'Gütergruppe', spalten:['Wohnen und Energie', 'Nahrungsmittel', 'Sonstiges'],
    zeilen:[
      {id:'g', t:'Gewicht', e:'%'}, {id:'pr', t:'Preisänderung', e:'%'},
      {id:'bt', t:'Beitrag zur Inflationsrate (Prozentpunkte)', f:'g * pr / 100'}
    ],
    werte:[{g:35, pr:6}, {g:15, pr:8}, {g:50, pr:2}],
    sets:[[{g:30, pr:4}, {g:20, pr:10}, {g:50, pr:1}], [{g:40, pr:-2}, {g:15, pr:6}, {g:45, pr:3}]],
    felder:[{id:'ir', t:'Inflationsrate insgesamt (%)', f:'bt@0 + bt@1 + bt@2', e:'%', kurz:'Inflationsrate'}],
    wahl:[{id:'w', t:'Warum kann die gemessene Inflationsrate von der „gefühlten“ abweichen?', opts:['Weil jeder Haushalt anders konsumiert als der Durchschnittswarenkorb – z. B. häufig gekaufte Lebensmittel werden stärker wahrgenommen.', 'Weil das Statistische Bundesamt Preise schätzt, ohne sie zu erheben.', 'Weil Mieten nicht im Warenkorb enthalten sind.'], r:'0'}],
    hinweise:['Beitrag = Gewicht · Preisänderung ÷ 100.', 'Die Inflationsrate ist die Summe der Beiträge.'],
    merke:'Verbraucherpreisindex: Warenkorb mit Wägungsschema · Inflationsrate = gewichtete Summe der Preisänderungen · gefühlte Inflation weicht wegen individueller Konsummuster ab.'})

  ];
})(),

];

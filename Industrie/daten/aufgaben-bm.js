window.POOL_DATEN_bm = () => [
{
  id:'M5LAB', modul:'M5', typ:'labor', stufe:9, labor:'tkonten', titel:'Labor: T-Konto-Werkstatt',
  tags:['T-Konten','Abschluss','Labor'],
  text:'Buche neun Geschäftsfälle (ohne Umsatzsteuer) auf T-Konten und schließe die Konten über GuV, Eigenkapital und Schlussbilanzkonto ab. Die Werkstatt reagiert sofort auf jede Buchung. Erfülle die Aufträge – sie haken sich automatisch ab. Das Labor zählt nicht für die Medaillen.'
},

/* ---------- Modul 1 · Aus dem Inventar eine Bilanz aufstellen ---------- */
{
  id:'IB1', modul:'M1', typ:'bilanzaufstellung', reihenfolge:true, stufe:1, titel:'Bilanz aus dem Inventar · Beispiel 1',
  tags:['Inventar','Bilanzgliederung','Eigenkapital'],
  bilanzTitel:'Bilanz der Sommer Handels e. K. zum 31.12.',
  text:'Aus dem Inventar der Sommer Handels e. K. sind die folgenden Werte bekannt. Ordne jeden Posten der richtigen Bilanzposition zu und ermittle anschließend das Eigenkapital.',
  posten:[
    {name:'Bebaute Grundstücke',                betrag:150000, gruppe:'AV', rang:1},
    {name:'Verbindlichkeiten a. LL',            betrag:34000,  gruppe:'FK', rang:11},
    {name:'Handelswaren',                       betrag:48000,  gruppe:'UV', rang:5},
    {name:'Fuhrpark',                           betrag:36000,  gruppe:'AV', rang:4},
    {name:'Kasse',                              betrag:1500,   gruppe:'UV', rang:8},
    {name:'Darlehensschulden',                  betrag:90000,  gruppe:'FK', rang:9},
    {name:'Forderungen a. LL',                  betrag:22000,  gruppe:'UV', rang:6},
    {name:'Geschäftsausstattung', betrag:24000,  gruppe:'AV', rang:3},
    {name:'Bankguthaben',                       betrag:18500,  gruppe:'UV', rang:7}
  ],
  hinweise:[
    'Sortiere zuerst grob: Was gehört dem Unternehmen – und was schuldet es anderen?',
    'Links steht das Vermögen, gegliedert nach der Dauer der Bindung: Anlagevermögen bleibt dem Betrieb langfristig erhalten, Umlaufvermögen wird verbraucht, verkauft oder zu Geld. Rechts stehen die Schulden. Das Eigenkapital wird nicht aus dem Inventar abgelesen, sondern berechnet.',
    'Grundstücke, Fuhrpark und Geschäftsausstattung sind Anlagevermögen. Für das Eigenkapital ziehst du von der Summe des Vermögens die Summe der Schulden ab.'
  ],
  merke:'Das Eigenkapital wird nicht gezählt, sondern gerechnet: Vermögen minus Schulden.'
},
{
  id:'IB2', modul:'M1', typ:'bilanzaufstellung', reihenfolge:true, stufe:2, titel:'Bilanz aus dem Inventar · Beispiel 2',
  tags:['Inventar','Bilanzgliederung','Eigenkapital'],
  bilanzTitel:'Bilanz der Kramer KG zum 31.12.',
  text:'Das Inventar der Kramer KG weist die folgenden Werte aus. Stelle daraus die Bilanz auf und ermittle das Eigenkapital.',
  posten:[
    {name:'Technische Anlagen und Maschinen', betrag:85000, gruppe:'AV', rang:2},
    {name:'Forderungen a. LL',                betrag:31500, gruppe:'UV', rang:6},
    {name:'Darlehensschulden',                betrag:45000, gruppe:'FK', rang:9},
    {name:'Handelswaren',                     betrag:62000, gruppe:'UV', rang:5},
    {name:'Geschäftsausstattung', betrag:6000, gruppe:'AV', rang:3},
    {name:'Verbindlichkeiten a. LL',          betrag:28500, gruppe:'FK', rang:11},
    {name:'Kasse',                            betrag:800,   gruppe:'UV', rang:8},
    {name:'Bankguthaben',                     betrag:9200,  gruppe:'UV', rang:7}
  ],
  hinweise:[
    'Zwei Posten sind Schulden. Welche?',
    'Maschinen und Geschäftsausstattung werden über Jahre genutzt und gehören zum Anlagevermögen. Waren, Forderungen und Zahlungsmittel wechseln laufend – das ist Umlaufvermögen. Alles, was das Unternehmen anderen schuldet, steht rechts.',
    'Das Vermögen beträgt insgesamt 194.500,00 €. Ziehe davon die Schulden ab, um das Eigenkapital zu erhalten.'
  ],
  merke:'Die Gliederung des Vermögens folgt der Bindungsdauer: erst das Langfristige, dann das Kurzfristige.'
},
{
  id:'IB3', modul:'M1', typ:'bilanzaufstellung', reihenfolge:true, stufe:3, titel:'Bilanz aus dem Inventar · Beispiel 3',
  tags:['Inventar','Bilanzgliederung','Eigenkapital','Abgrenzung'],
  bilanzTitel:'Bilanz der Nowak Handels GmbH zum 31.12.',
  text:'Aus dem Inventar der Nowak Handels GmbH sind die folgenden Werte bekannt. Achte genau darauf, wer wem etwas schuldet.',
  posten:[
    {name:'Bebaute Grundstücke',                betrag:210000, gruppe:'AV', rang:1},
    {name:'Kurzfristige Bankverbindlichkeiten', betrag:20000,  gruppe:'FK', rang:10},
    {name:'Handelswaren',                       betrag:54000,  gruppe:'UV', rang:5},
    {name:'Verbindlichkeiten a. LL',            betrag:41000,  gruppe:'FK', rang:11},
    {name:'Technische Anlagen und Maschinen',   betrag:64000,  gruppe:'AV', rang:2},
    {name:'Fuhrpark',                           betrag:48000,  gruppe:'AV', rang:4},
    {name:'Bankguthaben',                       betrag:12000,  gruppe:'UV', rang:7},
    {name:'Darlehensschulden',                  betrag:120000, gruppe:'FK', rang:9},
    {name:'Geschäftsausstattung', betrag:15000,  gruppe:'AV', rang:3},
    {name:'Forderungen a. LL',                  betrag:26000,  gruppe:'UV', rang:6},
    {name:'Kasse',                              betrag:2000,   gruppe:'UV', rang:8}
  ],
  hinweise:[
    'Zwei Posten enthalten das Wort Bank – stehen sie deshalb auf derselben Seite?',
    'Ein Bankguthaben ist unser Geld bei der Bank, also Vermögen. Eine Bankverbindlichkeit ist ein in Anspruch genommener Kredit, also eine Schuld. Ebenso unterscheiden sich Forderungen und Verbindlichkeiten: einmal bekommen wir Geld, einmal schulden wir es.',
    'Drei Posten gehören auf die Passivseite: die beiden Kreditformen und die Lieferantenschulden. Das Vermögen beträgt insgesamt 431.000,00 €.'
  ],
  merke:'Nicht der Name entscheidet, sondern die Richtung: Bekommen wir etwas, ist es Vermögen. Schulden wir es, ist es Fremdkapital.'
},

/* ---------- Modul 2 · Geschäftsvorfälle und Bilanz (ohne Umsatzsteuer) ---------- */
{
  id:'B1', modul:'M2', typ:'bilanzwirkung', stufe:1, titel:'Kunde zahlt per Bank',
  tags:['Aktivtausch','Zahlungsverkehr'],
  text:'Ein Kunde begleicht eine Rechnung über {betrag} durch Überweisung auf unser Bankkonto.',
  werte:{betrag:2500},
  positionen:[{name:'Bank', richtung:'zu', wert:'betrag'},{name:'Forderungen a. LL', richtung:'ab', wert:'betrag'}],
  vorgangsart:'aktivtausch',
  hinweise:[
    'Was kommt ins Unternehmen – und was gibt es dafür auf?',
    'Der Kunde schuldete uns Geld; diese Forderung erlischt mit der Zahlung. Dafür liegt der Betrag jetzt auf dem Bankkonto. Beide Positionen stehen auf derselben Bilanzseite – prüfe, auf welcher.',
    'Eine der beiden Positionen ist Bank, sie nimmt zu. Welche Position nimmt im Gegenzug ab?'
  ],
  merke:'Ein Zahlungseingang tauscht nur die Form des Vermögens: aus einer Forderung wird Bankguthaben.'
},
{
  id:'B2', modul:'M2', typ:'bilanzwirkung', stufe:1, titel:'Lieferantenrechnung überwiesen',
  tags:['Bilanzverkürzung','Zahlungsverkehr'],
  text:'Eine offene Lieferantenrechnung über {betrag} wird per Bank überwiesen.',
  werte:{betrag:1500},
  positionen:[{name:'Verbindlichkeiten a. LL', richtung:'ab', wert:'betrag'},{name:'Bank', richtung:'ab', wert:'betrag'}],
  vorgangsart:'bilanzverkuerzung',
  hinweise:[
    'Zwei Positionen werden kleiner. Stehen sie auf derselben Bilanzseite?',
    'Wir begleichen eine Schuld: Die Verbindlichkeit gegenüber dem Lieferanten erlischt, gleichzeitig verlässt Geld das Bankkonto. Eine Position steht auf der Aktivseite, eine auf der Passivseite.',
    'Die Verbindlichkeiten a. LL nehmen ab. Welche Aktivposition nimmt ebenfalls ab?'
  ],
  merke:'Werden Aktiv- und Passivseite gleichzeitig kleiner, verkürzt sich die Bilanz.'
},
{
  id:'B3', modul:'M2', typ:'bilanzwirkung', stufe:1, titel:'Barabhebung vom Bankkonto',
  tags:['Aktivtausch','Zahlungsverkehr'],
  text:'Vom Bankkonto werden {betrag} abgehoben und in die Geschäftskasse gelegt.',
  werte:{betrag:800},
  positionen:[{name:'Kasse', richtung:'zu', wert:'betrag'},{name:'Bank', richtung:'ab', wert:'betrag'}],
  vorgangsart:'aktivtausch',
  hinweise:[
    'Wo lag das Geld vorher, wo liegt es danach – und ist das Unternehmen dadurch reicher geworden?',
    'Bargeld und Bankguthaben sind zwei verschiedene Bilanzpositionen, beide auf der Aktivseite. Das Vermögen wechselt nur die Form.',
    'Die Kasse nimmt zu. Welche Position nimmt in gleicher Höhe ab?'
  ],
  merke:'Vermögen wird umgeschichtet, nicht vermehrt: klassischer Aktivtausch.'
},
{
  id:'B4', modul:'M2', typ:'bilanzwirkung', stufe:2, titel:'Darlehen aufgenommen',
  tags:['Bilanzverlängerung','Finanzierung'],
  text:'Die Sparkasse schreibt ein langfristiges Darlehen über {betrag} auf unserem Bankkonto gut.',
  werte:{betrag:20000},
  positionen:[{name:'Bank', richtung:'zu', wert:'betrag'},{name:'Darlehensschulden', richtung:'zu', wert:'betrag'}],
  vorgangsart:'bilanzverlaengerung',
  hinweise:[
    'Das Unternehmen bekommt Geld. Ist es dadurch tatsächlich reicher?',
    'Das Bankguthaben steigt – und in gleicher Höhe entsteht eine Schuld. Aktiv- und Passivseite wachsen gemeinsam, das Eigenkapital bleibt unberührt.',
    'Die Bank nimmt zu. Welche Passivposition entsteht durch die Kreditaufnahme?'
  ],
  merke:'Kredit heißt mehr Vermögen und mehr Schulden zugleich. Die Bilanz wird länger, das Eigenkapital ändert sich nicht.'
},
{
  id:'B5', modul:'M2', typ:'bilanzwirkung', stufe:3, titel:'Verbindlichkeit in Darlehen umgewandelt',
  tags:['Passivtausch','Finanzierung'],
  text:'Eine Lieferantenverbindlichkeit über {betrag} wird nach Vereinbarung in ein langfristiges Darlehen umgewandelt.',
  werte:{betrag:6000},
  positionen:[{name:'Verbindlichkeiten a. LL', richtung:'ab', wert:'betrag'},{name:'Darlehensschulden', richtung:'zu', wert:'betrag'}],
  vorgangsart:'passivtausch',
  hinweise:[
    'Fließt bei diesem Vorgang überhaupt Geld?',
    'Es wechselt nur die Art der Schuld – aus einer kurzfristigen Lieferantenschuld wird ein langfristiges Darlehen. Beide betroffenen Positionen stehen auf derselben Bilanzseite.',
    'Die Verbindlichkeiten a. LL nehmen ab. Welche Passivposition nimmt zu?'
  ],
  merke:'Wird eine Schuld durch eine andere ersetzt, ändert sich nur die Zusammensetzung der Passivseite.'
},
{
  id:'B6', modul:'M2', typ:'bilanzwirkung', stufe:2, titel:'Handelswaren auf Ziel gekauft',
  tags:['Bilanzverlängerung','Einkauf'],
  text:'Wir kaufen Handelswaren für {betrag} auf Ziel. Die Ware wird sofort eingelagert.',
  werte:{betrag:3400},
  positionen:[{name:'Handelswaren', richtung:'zu', wert:'betrag'},{name:'Verbindlichkeiten a. LL', richtung:'zu', wert:'betrag'}],
  vorgangsart:'bilanzverlaengerung',
  hinweise:[
    'Was kommt ins Lager – und was ist dafür noch offen?',
    'Der Warenbestand wächst. Bezahlt wird erst später, also entsteht gleichzeitig eine Schuld gegenüber dem Lieferanten. Beide Positionen nehmen zu.',
    'Die Handelswaren nehmen zu. Welche Passivposition entsteht durch den Kauf auf Ziel?'
  ],
  merke:'Kauf auf Ziel verlängert die Bilanz: mehr Vermögen und mehr Schulden.'
},
{
  id:'B7', modul:'M2', typ:'bilanzwirkung', stufe:2, titel:'Schreibtisch bar gekauft',
  tags:['Aktivtausch','Anlagevermögen'],
  text:'Für das Büro wird ein Schreibtisch für {betrag} gekauft und sofort bar bezahlt.',
  werte:{betrag:900},
  positionen:[{name:'Geschäftsausstattung', richtung:'zu', wert:'betrag'},{name:'Kasse', richtung:'ab', wert:'betrag'}],
  vorgangsart:'aktivtausch',
  hinweise:[
    'Das Unternehmen gibt Bargeld aus. Ist das Geld damit weg?',
    'Für das Bargeld kommt ein Gegenstand ins Unternehmen, der über Jahre genutzt wird. Beide betroffenen Positionen stehen auf der Aktivseite.',
    'Die Geschäftsausstattung nimmt zu. Welche Aktivposition nimmt ab?'
  ],
  merke:'Solange bar oder per Bank bezahlt wird, ist ein Kauf ein Aktivtausch.'
},
{
  id:'B8', modul:'M2', typ:'bilanzwirkung', stufe:2, titel:'Darlehensrate getilgt',
  tags:['Bilanzverkürzung','Finanzierung'],
  text:'Eine Darlehensrate über {betrag} wird vom Bankkonto abgebucht.',
  werte:{betrag:2000},
  positionen:[{name:'Darlehensschulden', richtung:'ab', wert:'betrag'},{name:'Bank', richtung:'ab', wert:'betrag'}],
  vorgangsart:'bilanzverkuerzung',
  hinweise:[
    'Zwei Positionen werden kleiner – auf welchen Bilanzseiten stehen sie?',
    'Mit der Tilgung sinkt die Schuld, gleichzeitig sinkt das Bankguthaben. Beide Seiten der Bilanz werden kürzer.',
    'Die Darlehensschulden nehmen ab. Welche Aktivposition nimmt ebenfalls ab?'
  ],
  merke:'Tilgung verkürzt die Bilanz. Das Eigenkapital bleibt davon unberührt.'
},

/* ---------- Modul 3 · T-Konten führen und abschließen ---------- */
{
  id:'T1', modul:'M3', gruppe:'Bank', typ:'kontenabschluss', stufe:1, titel:'T-Konto Bank · Beispiel 1',
  tags:['T-Konto','Bank','Schlussbestand'],
  konto:'2800', anfangsbestand:3500,
  faelle:[
    {text:'Ein Kunde begleicht eine Rechnung per Banküberweisung über 750 EUR.', betrag:750, seite:'soll'},
    {text:'Wir überweisen Hilfslöhne i. H. v. 250 EUR.', betrag:250, seite:'haben'},
    {text:'Wir kaufen Geschäftsausstattung über 1.000 EUR und zahlen mit EC-Karte.', betrag:1000, seite:'haben'},
    {text:'Wir überweisen eine offene Rechnung über 550 EUR.', betrag:550, seite:'haben'},
    {text:'Wir zahlen 1.200 EUR auf unser Bankkonto ein.', betrag:1200, seite:'soll'},
    {text:'Wir verkaufen Waren über 1.100 EUR. Die Bezahlung erfolgt sofort per EC-Karte.', betrag:1100, seite:'soll'}
  ],
  hinweise:[
    'Gehe jeden Fall einzeln durch und frage nur eines: Wird das Bankguthaben dadurch größer oder kleiner?',
    'Bank ist ein Aktivkonto. Der Anfangsbestand und alle Zugänge stehen im Soll, alle Abgänge im Haben. Zahlungen mit EC-Karte belasten das Konto sofort – anders als eine Zahlung auf Ziel.',
    'Vier Fälle mehren das Guthaben nicht: Hilfslöhne, Geschäftsausstattung und die offene Rechnung mindern es. Zum Schluss gleicht der Schlussbestand die kleinere Seite aus.'
  ],
  merke:'Der Schlussbestand steht auf der Gegenseite des Anfangsbestands und macht beide Seiten gleich groß.'
},
{
  id:'T2', modul:'M3', gruppe:'Bank', typ:'kontenabschluss', stufe:2, titel:'T-Konto Bank · Beispiel 2',
  tags:['T-Konto','Bank','Schlussbestand','Abgrenzung'],
  konto:'2800', anfangsbestand:2000,
  faelle:[
    {text:'Wir liefern Ware und verschicken eine Zahlungsaufforderung über 600 EUR.', betrag:600, seite:null,
     grund:'Mit der Rechnung entsteht eine Forderung gegenüber dem Kunden. Auf dem Bankkonto bewegt sich erst etwas, wenn er bezahlt.'},
    {text:'Wir heben 450 EUR von unserem Bankkonto ab.', betrag:450, seite:'haben'},
    {text:'Ein Kunde begleicht eine Rechnung per Banküberweisung über 750 EUR.', betrag:750, seite:'soll'},
    {text:'Wir überweisen eine offene Rechnung über 550 EUR.', betrag:550, seite:'haben'},
    {text:'Wir verkaufen Waren über 1.100 EUR. Die Bezahlung erfolgt sofort per EC-Karte.', betrag:1100, seite:'soll'},
    {text:'Ein Kunde begleicht eine Rechnung über 350 EUR bar.', betrag:350, seite:null,
     grund:'Der Kunde zahlt bar. Betroffen sind die Kasse und das Forderungskonto – über die Bank läuft nichts.'}
  ],
  hinweise:[
    'Nicht jeder Geschäftsvorfall berührt dieses eine Konto. Prüfe zuerst, ob überhaupt Geld über die Bank fließt.',
    'Eine Rechnung zu verschicken ist noch keine Zahlung – es entsteht zunächst nur eine Forderung. Erst der Zahlungseingang trifft das Bankkonto.',
    'Zwei Fälle gehören nicht auf das Bankkonto. Die Abhebung dagegen mindert das Guthaben, obwohl das Geld im Unternehmen bleibt.'
  ],
  merke:'Nicht jede Zahlung läuft über die Bank. Beleg lesen: bar, per Karte oder auf Ziel?'
},
{
  id:'T3', modul:'M3', gruppe:'Bank', typ:'kontenabschluss', stufe:2, titel:'T-Konto Bank · Beispiel 3',
  tags:['T-Konto','Bank','Schlussbestand','Abgrenzung'],
  konto:'2800', anfangsbestand:2500,
  faelle:[
    {text:'Wir zahlen 1.200 EUR auf unser Bankkonto ein.', betrag:1200, seite:'soll'},
    {text:'Wir kaufen Büromaterial über 120 EUR und bezahlen bar aus der Kasse.', betrag:120, seite:null,
     grund:'Bezahlt wird aus der Kasse. Betroffen sind das Kassenkonto und ein Aufwandskonto, nicht die Bank.'},
    {text:'Wir kaufen Geschäftsausstattung über 1.000 EUR und zahlen mit EC-Karte.', betrag:1000, seite:'haben'},
    {text:'Wir überweisen Hilfslöhne i. H. v. 250 EUR.', betrag:250, seite:'haben'},
    {text:'Wir liefern Ware und verschicken eine Zahlungsaufforderung über 600 EUR.', betrag:600, seite:null,
     grund:'Die Lieferung auf Ziel erzeugt eine Forderung. Das Bankkonto bleibt bis zum Zahlungseingang unberührt.'},
    {text:'Ein Kunde begleicht eine Rechnung per Banküberweisung über 750 EUR.', betrag:750, seite:'soll'}
  ],
  hinweise:[
    'Zwei der sechs Fälle berühren das Bankkonto überhaupt nicht. Welche?',
    'Achte auf das Zahlungsmittel und auf den Zeitpunkt: „bar aus der Kasse“ ist nicht die Bank, und eine verschickte Rechnung ist noch keine Zahlung.',
    'Die Einzahlung und der Zahlungseingang des Kunden mehren das Guthaben. Geschäftsausstattung und Hilfslöhne mindern es.'
  ],
  merke:'Zwei Fragen genügen: Fließt Geld – und fließt es über dieses Konto?'
},
{
  id:'T4', modul:'M3', gruppe:'Bank', typ:'kontenabschluss', stufe:2, titel:'T-Konto Bank · Beispiel 4',
  tags:['T-Konto','Bank','Schlussbestand','Abgrenzung'],
  konto:'2800', anfangsbestand:3000,
  faelle:[
    {text:'Wir verkaufen Waren über 1.100 EUR. Die Bezahlung erfolgt sofort per EC-Karte.', betrag:1100, seite:'soll'},
    {text:'Ein Lieferant räumt uns für eine Rechnung über 300 EUR ein Zahlungsziel von 30 Tagen ein.', betrag:300, seite:null,
     grund:'Ein Zahlungsziel ist eine Vereinbarung, keine Zahlung. Auf dem Bankkonto passiert nichts, solange nicht überwiesen wird.'},
    {text:'Wir überweisen eine offene Rechnung über 550 EUR.', betrag:550, seite:'haben'},
    {text:'Wir kaufen Geschäftsausstattung über 1.000 EUR und zahlen mit EC-Karte.', betrag:1000, seite:'haben'},
    {text:'Wir zahlen 1.200 EUR auf unser Bankkonto ein.', betrag:1200, seite:'soll'},
    {text:'Ein Kunde begleicht eine Rechnung über 350 EUR bar.', betrag:350, seite:null,
     grund:'Der Kunde zahlt bar. Betroffen sind die Kasse und das Forderungskonto – über die Bank läuft nichts.'}
  ],
  hinweise:[
    'Zwei Fälle sehen nach Zahlungen aus, berühren das Bankkonto aber nicht. Welche?',
    'Ein eingeräumtes Zahlungsziel verschiebt die Zahlung nur – gebucht wird auf dem Bankkonto erst, wenn tatsächlich überwiesen wird.',
    'Zwei Fälle mindern das Guthaben: die überwiesene Rechnung und die Geschäftsausstattung.'
  ],
  merke:'Eine Vereinbarung über einen Zahlungstermin verändert kein Konto. Gebucht wird, was tatsächlich geschieht.'
},

{
  id:'W1', modul:'M3', gruppe:'Waren', typ:'kontenabschluss', stufe:3, titel:'T-Konto Waren · Beispiel 1',
  tags:['T-Konto','Waren','Schlussbestand'],
  konten:[{konto:'2210', anfangsbestand:4000, label:'2210 Handelswaren'}],
  faelle:[
    {text:'Wir kaufen Handelswaren auf Ziel für 1.500 EUR.', betrag:1500, seite:'soll'},
    {text:'Wir verkaufen Waren im Einstandswert von 900 EUR auf Ziel.', betrag:900, seite:'haben'},
    {text:'Wegen eines Mangels senden wir Ware im Wert von 250 EUR an den Lieferanten zurück.', betrag:250, seite:'haben'},
    {text:'Ein Kunde sendet uns Ware im Einstandswert von 300 EUR zurück.', betrag:300, seite:'soll'},
    {text:'Wir kaufen Handelswaren gegen Barzahlung für 600 EUR.', betrag:600, seite:'soll'}
  ],
  hinweise:[
    'Frage bei jedem Fall nur eines: Kommt Ware ins Lager oder geht Ware hinaus?',
    'Handelswaren sind ein Aktivkonto: Jeder Zugang steht im Soll, jeder Abgang im Haben. Ob bar oder auf Ziel bezahlt wird, spielt für das Warenkonto keine Rolle – das betrifft nur die Gegenseite der Buchung.',
    'Zwei Fälle mindern den Bestand: der Verkauf und unsere Rücksendung an den Lieferanten. Die Rücksendung des Kunden füllt das Lager dagegen wieder auf.'
  ],
  merke:'Beim Warenkonto zählt die Warenbewegung, nicht die Zahlung. Rücksendungen kehren die ursprüngliche Bewegung um.'
},
{
  id:'W2', modul:'M3', gruppe:'Waren', typ:'kontenabschluss', stufe:3, titel:'T-Konto Waren · Beispiel 2',
  tags:['T-Konto','Waren','Schlussbestand','Abgrenzung'],
  konten:[{konto:'2210', anfangsbestand:3500, label:'2210 Handelswaren'}],
  faelle:[
    {text:'Wir bestellen Handelswaren für 2.000 EUR. Die Lieferung ist für nächste Woche zugesagt.', betrag:2000, seite:null,
     grund:'Bestellung und Lieferung sind zwei Schritte. Solange die Ware nicht da ist, hat sich am Lagerbestand nichts geändert – gebucht wird erst bei Lieferung.'},
    {text:'Wir kaufen Handelswaren auf Ziel für 1.200 EUR.', betrag:1200, seite:'soll'},
    {text:'Wir verkaufen Waren im Einstandswert von 800 EUR gegen bar.', betrag:800, seite:'haben'},
    {text:'Wir senden Ware im Wert von 300 EUR an den Lieferanten zurück.', betrag:300, seite:'haben'},
    {text:'Wir verkaufen Waren im Einstandswert von 450 EUR auf Ziel.', betrag:450, seite:'haben'},
    {text:'Ein Kunde sendet uns Ware im Einstandswert von 200 EUR zurück.', betrag:200, seite:'soll'},
    {text:'Ein Lieferant unterbreitet uns ein Angebot über Handelswaren für 1.800 EUR.', betrag:1800, seite:null,
     grund:'Ein Angebot ist unverbindlich und noch kein Geschäft. Selbst wenn wir es annehmen, folgt daraus zunächst nur eine Bestellung – geliefert ist nichts.'}
  ],
  hinweise:[
    'Zwei Fälle verändern den Warenbestand überhaupt nicht. Welche?',
    'Achte darauf, ob die Ware schon da ist. Erst mit der Lieferung ändert sich der Bestand; eine Bestellung allein wird nicht gebucht. Bei allen übrigen Fällen entscheidet die Richtung der Warenbewegung über die Seite.',
    'Drei Fälle mindern den Bestand: zwei Verkäufe und unsere Rücksendung. Zugänge sind der Einkauf und die Rücksendung des Kunden.'
  ],
  merke:'Angebot, Bestellung, Lieferung – erst der letzte Schritt wird gebucht. Was nur vereinbart ist, verändert kein Konto.'
},
{
  id:'W3', modul:'M3', gruppe:'Waren', typ:'kontenabschluss', stufe:3, titel:'T-Konto Waren · Beispiel 3',
  tags:['T-Konto','Waren','Schlussbestand','Abgrenzung'],
  konten:[{konto:'2210', anfangsbestand:5000, label:'2210 Handelswaren'}],
  faelle:[
    {text:'Wir kaufen Handelswaren auf Ziel für 1.800 EUR.', betrag:1800, seite:'soll'},
    {text:'Wir überweisen eine offene Lieferantenrechnung über 1.200 EUR.', betrag:1200, seite:null,
     grund:'Hier wird nur eine Schuld beglichen. Die Ware liegt längst im Lager – der Warenbestand ändert sich durch die Zahlung nicht.'},
    {text:'Wir verkaufen Waren im Einstandswert von 1.100 EUR auf Ziel.', betrag:1100, seite:'haben'},
    {text:'Ein Kunde begleicht eine Rechnung über 700 EUR per Banküberweisung.', betrag:700, seite:null,
     grund:'Der Zahlungseingang berührt Bank und Forderungen. Die Ware hat das Lager bereits beim Verkauf verlassen.'},
    {text:'Wir senden Ware im Wert von 400 EUR an den Lieferanten zurück.', betrag:400, seite:'haben'},
    {text:'Ein Kunde sendet uns Ware im Einstandswert von 350 EUR zurück.', betrag:350, seite:'soll'},
    {text:'Wir unterbreiten einem Kunden ein Angebot über Waren zum Preis von 2.500 EUR.', betrag:2500, seite:null,
     grund:'Wir haben lediglich ein Angebot abgegeben. Ob der Kunde bestellt, ist offen – im Lager hat sich nichts bewegt.'}
  ],
  hinweise:[
    'Drei Fälle gehören nicht auf dieses Konto: Bei zweien geht es um Geld statt um Ware, bei einem ist noch gar kein Geschäft zustande gekommen.',
    'Warenbewegung und Zahlung sind zwei getrennte Vorgänge und werden zu verschiedenen Zeitpunkten gebucht. Auf dem Warenkonto steht nur, was tatsächlich ins Lager kommt oder es verlässt.',
    'Zugänge sind der Einkauf und die Rücksendung des Kunden, Abgänge der Verkauf und unsere Rücksendung an den Lieferanten.'
  ],
  merke:'Auf dem Warenkonto steht nur, was ins Lager kommt oder es verlässt. Weder Zahlungen noch bloße Angebote gehören dorthin.'
},

{
  id:'T5', modul:'M3', gruppe:'Forderungen und Verbindlichkeiten', typ:'kontenabschluss', stufe:4, titel:'Forderungen und Verbindlichkeiten · Beispiel 1',
  tags:['T-Konto','Forderungen','Verbindlichkeiten','Schlussbestand'],
  konten:[
    {konto:'2400', anfangsbestand:2500, label:'2400 Forderungen'},
    {konto:'4400', anfangsbestand:2500, label:'4400 Verbindlichkeiten'}
  ],
  faelle:[
    {text:'Wir verkaufen gebrauchte Geschäftsausstattung auf Ziel über 500 EUR.', betrag:500, konto:'2400', seite:'soll'},
    {text:'Wir kaufen einen Büroschrank auf Rechnung über 350 EUR.', betrag:350, konto:'4400', seite:'haben'},
    {text:'Wir verkaufen Waren auf Ziel über 750 EUR.', betrag:750, konto:'2400', seite:'soll'},
    {text:'Ein Kunde zahlt eine ausstehende Rechnung über 200 EUR in bar.', betrag:200, konto:'2400', seite:'haben'},
    {text:'Wir begleichen eine offene Rechnung über 900 EUR in bar.', betrag:900, konto:'4400', seite:'soll'},
    {text:'Wir kaufen Handelswaren auf Ziel über 300 EUR.', betrag:300, konto:'4400', seite:'haben'},
    {text:'Wir überweisen an einen Lieferanten 800 EUR.', betrag:800, konto:'4400', seite:'soll'},
    {text:'Ein Kunde überweist uns 1.000 EUR.', betrag:1000, konto:'2400', seite:'haben'}
  ],
  hinweise:[
    'Zwei Fragen führen dich durch alle acht Fälle: Bekommen wir noch Geld oder schulden wir noch Geld – und wird der offene Posten größer oder kleiner?',
    'Verkaufen wir auf Ziel, entsteht eine Forderung; zahlt der Kunde, verschwindet sie wieder. Kaufen wir auf Rechnung, entsteht eine Verbindlichkeit; zahlen wir, verschwindet sie. Ob bar oder per Überweisung gezahlt wird, spielt für diese beiden Konten keine Rolle. Forderungen sind ein Aktivkonto, Verbindlichkeiten ein Passivkonto – die Seiten liegen spiegelbildlich.',
    'Die Fälle 1, 3, 4 und 8 gehören auf die Forderungen, die übrigen auf die Verbindlichkeiten. Zugänge bei den Forderungen stehen im Soll, Zugänge bei den Verbindlichkeiten im Haben.'
  ],
  merke:'Nicht das Zahlungsmittel entscheidet, sondern die Richtung: Bekommen wir Geld, ist es eine Forderung. Schulden wir Geld, ist es eine Verbindlichkeit.'
},
{
  id:'T6', modul:'M3', gruppe:'Forderungen und Verbindlichkeiten', typ:'kontenabschluss', stufe:5, titel:'Forderungen und Verbindlichkeiten · Beispiel 2',
  tags:['T-Konto','Forderungen','Verbindlichkeiten','Schlussbestand'],
  konten:[
    {konto:'2400', anfangsbestand:2000, label:'2400 Forderungen'},
    {konto:'4400', anfangsbestand:1500, label:'4400 Verbindlichkeiten'}
  ],
  faelle:[
    {text:'Wir verkaufen Waren auf Ziel über 1.800 EUR.', betrag:1800, konto:'2400', seite:'soll'},
    {text:'Wir kaufen Waren auf Ziel über 1.400 EUR.', betrag:1400, konto:'4400', seite:'haben'},
    {text:'Ein Kunde begleicht eine Rechnung per Banküberweisung über 900 EUR.', betrag:900, konto:'2400', seite:'haben'},
    {text:'Wir überweisen eine Lieferantenrechnung über 700 EUR.', betrag:700, konto:'4400', seite:'soll'},
    {text:'Wir heben 500 EUR von unserem Bankkonto ab.', betrag:500, seite:null,
     grund:'Geld wandert nur von der Bank in die Kasse. Weder eine Forderung noch eine Verbindlichkeit verändert sich dadurch.'},
    {text:'Ein Kunde zahlt eine Rechnung bar über 400 EUR.', betrag:400, konto:'2400', seite:'haben'}
  ],
  hinweise:[
    'Frage dich bei jedem Fall zuerst: Bekommen wir noch Geld – oder schulden wir noch Geld?',
    'Forderungen entstehen beim Verkauf auf Ziel und verschwinden mit dem Zahlungseingang; wie das Geld ankommt, ist dabei egal. Verbindlichkeiten entstehen beim Einkauf auf Ziel und verschwinden mit unserer Zahlung. Forderungen sind ein Aktivkonto, Verbindlichkeiten ein Passivkonto – die Seiten liegen also spiegelbildlich.',
    'Der Verkauf auf Ziel gehört auf die Forderungen ins Soll. Ein Fall betrifft keines der beiden Konten.'
  ],
  merke:'Wer zahlt an wen? Bekommen wir Geld, ist es eine Forderung. Schulden wir Geld, ist es eine Verbindlichkeit.'
},
{
  id:'T7', modul:'M3', gruppe:'Forderungen und Verbindlichkeiten', typ:'kontenabschluss', stufe:5, titel:'Forderungen und Verbindlichkeiten · Beispiel 3',
  tags:['T-Konto','Forderungen','Verbindlichkeiten','Schlussbestand','Abgrenzung'],
  konten:[
    {konto:'2400', anfangsbestand:1800, label:'2400 Forderungen'},
    {konto:'4400', anfangsbestand:2000, label:'4400 Verbindlichkeiten'}
  ],
  faelle:[
    {text:'Wir kaufen Handelswaren auf Ziel über 2.200 EUR.', betrag:2200, konto:'4400', seite:'haben'},
    {text:'Wir bezahlen eine Lieferantenrechnung bar über 250 EUR.', betrag:250, konto:'4400', seite:'soll'},
    {text:'Wir kaufen Büromaterial über 180 EUR und bezahlen sofort per Bank.', betrag:180, seite:null,
     grund:'Sofort bezahlt heißt: Es entsteht keine Verbindlichkeit. Betroffen sind das Bankkonto und ein Aufwandskonto.'},
    {text:'Wir verkaufen Waren auf Ziel über 1.600 EUR.', betrag:1600, konto:'2400', seite:'soll'},
    {text:'Ein Kunde begleicht eine Rechnung per Banküberweisung über 1.200 EUR.', betrag:1200, konto:'2400', seite:'haben'},
    {text:'Wir zahlen Löhne in bar über 800 EUR aus.', betrag:800, seite:null,
     grund:'Die Löhne werden sofort bar ausgezahlt. Es bleibt keine Schuld offen, also verändert sich keine Verbindlichkeit.'}
  ],
  hinweise:[
    'Entscheidend ist, ob nach dem Vorgang noch etwas offen bleibt.',
    'Nur wenn später noch gezahlt wird, entsteht eine Forderung oder eine Verbindlichkeit. Wird sofort bezahlt, sind ausschließlich Zahlungsmittel- und Erfolgskonten betroffen.',
    'Zwei Fälle betreffen keines der beiden Konten, weil sofort bezahlt wird.'
  ],
  merke:'Sofort bezahlt heißt: keine Forderung, keine Verbindlichkeit. Offene Posten entstehen nur bei Zahlung auf Ziel.'
},

/* ---------- Modul 4 · Vorübung: Soll oder Haben? ---------- */
{
  id:'Z1', modul:'M4', gruppe:'Zuordnung', stufe:0, vorgabe:'seiten', titel:'Zuordnung: Zahlungseingang eines Kunden',
  tags:['Zahlungsverkehr','Aktivkonto'],
  text:'Ein Kunde begleicht eine Rechnung über {betrag} durch Überweisung auf unser Bankkonto.',
  werte:{betrag:2500},
  soll:[{konto:'2800', wert:'betrag'}], haben:[{konto:'2400', wert:'betrag'}],
  hinweise:[
    'Welcher Bestand wächst durch die Zahlung, welcher verschwindet?',
    'Beide Konten sind Aktivkonten. Bei Aktivkonten stehen Zugänge im Soll und Abgänge im Haben.',
    'Das Bankguthaben wächst – das Konto Bank gehört also ins Soll.'
  ],
  merke:'Erst die Kontenart bestimmen, dann die Seite. Die Reihenfolge ist immer dieselbe.'
},
{
  id:'Z2', modul:'M4', gruppe:'Zuordnung', stufe:0, vorgabe:'seiten', titel:'Zuordnung: Lieferantenrechnung überwiesen',
  tags:['Zahlungsverkehr','Passivkonto'],
  text:'Eine offene Lieferantenrechnung über {betrag} wird per Bank überwiesen.',
  werte:{betrag:1500},
  soll:[{konto:'4400', wert:'betrag'}], haben:[{konto:'2800', wert:'betrag'}],
  hinweise:[
    'Beide Bestände werden kleiner. Bedeutet das auch, dass beide auf derselben Seite stehen?',
    'Verbindlichkeiten a. LL ist ein Passivkonto, Bank ein Aktivkonto. Passivminderungen stehen im Soll, Aktivminderungen im Haben – Minderung heißt also nicht automatisch dieselbe Seite.',
    'Die Schuld sinkt: Verbindlichkeiten a. LL gehört ins Soll.'
  ],
  merke:'Aktiv- und Passivkonten sind spiegelbildlich aufgebaut. Dieselbe Bewegung landet auf verschiedenen Seiten.'
},
{
  id:'Z3', modul:'M4', gruppe:'Zuordnung', stufe:0, vorgabe:'seiten', titel:'Zuordnung: Darlehen aufgenommen',
  tags:['Finanzierung','Passivkonto'],
  text:'Die Sparkasse schreibt ein langfristiges Darlehen über {betrag} auf unserem Bankkonto gut.',
  werte:{betrag:20000},
  soll:[{konto:'2800', wert:'betrag'}], haben:[{konto:'4200', wert:'betrag'}],
  hinweise:[
    'Beide Bestände wachsen. Landen sie deshalb auf derselben Seite?',
    'Aktivmehrungen stehen im Soll, Passivmehrungen im Haben. Bank ist ein Aktivkonto, Darlehen ist ein Passivkonto.',
    'Das Guthaben wächst: Bank gehört ins Soll.'
  ],
  merke:'Bei einer Bilanzverlängerung steht das Aktivkonto im Soll und das Passivkonto im Haben.'
},
{
  id:'Z4', modul:'M4', gruppe:'Zuordnung', stufe:0, vorgabe:'seiten', titel:'Zuordnung: Handelswaren auf Ziel',
  tags:['Einkauf','Passivkonto'],
  text:'Wir kaufen Handelswaren für {betrag} auf Ziel und lagern sie ein.',
  werte:{betrag:3400},
  soll:[{konto:'2210', wert:'betrag'}], haben:[{konto:'4400', wert:'betrag'}],
  hinweise:[
    'Was kommt ins Unternehmen – und was entsteht dadurch an Verpflichtung?',
    'Der Warenbestand ist ein Aktivkonto und nimmt zu. Die Verbindlichkeit ist ein Passivkonto und nimmt ebenfalls zu.',
    'Der Lagerzugang steht im Soll: Handelswaren.'
  ],
  merke:'Kauf auf Ziel: Ware ins Soll, Schuld ins Haben.'
},

/* ---------- Modul 4 · Buchungssätze ohne Umsatzsteuer ---------- */
{
  id:'K1', modul:'M4', gruppe:'Buchungssätze', stufe:1, titel:'Zahlungseingang eines Kunden',
  tags:['Zahlungsverkehr','Aktivkonto'],
  text:'Ein Kunde begleicht eine Rechnung über {betrag} durch Überweisung auf unser Bankkonto.',
  werte:{betrag:2500},
  soll:[{konto:'2800', wert:'betrag'}], haben:[{konto:'2400', wert:'betrag'}],
  hinweise:[
    'Welche beiden Konten sind betroffen – und nimmt der Bestand jeweils zu oder ab?',
    'Derselbe Fall wie in Modul 2: ein Aktivtausch. Das Bankguthaben steigt, die Forderung erlischt. Aktivkonten führen Zugänge im Soll und Abgänge im Haben.',
    'Im Soll steht das Konto Bank mit {betrag}.'
  ],
  merke:'Der Zahlungseingang bucht nur die Forderung aus – der Ertrag wurde schon bei der Rechnungsstellung erfasst.'
},
{
  id:'K2', modul:'M4', gruppe:'Buchungssätze', stufe:1, titel:'Lieferantenrechnung überwiesen',
  tags:['Zahlungsverkehr','Passivkonto'],
  text:'Eine offene Lieferantenrechnung über {betrag} wird per Bank überwiesen.',
  werte:{betrag:1500},
  soll:[{konto:'4400', wert:'betrag'}], haben:[{konto:'2800', wert:'betrag'}],
  hinweise:[
    'Zwei Konten verändern sich – wird die Bilanzsumme dabei größer, kleiner oder bleibt sie gleich?',
    'Bilanzverkürzung wie in Modul 2: Die Schuld gegenüber dem Lieferanten sinkt (Passivminderung), das Bankguthaben sinkt (Aktivminderung). Passivminderungen stehen im Soll, Aktivminderungen im Haben.',
    'Im Soll steht das Konto Verbindlichkeiten a. LL mit {betrag}.'
  ],
  merke:'Bei der Zahlung fällt keine Umsatzsteuer mehr an – die wurde beim Rechnungseingang gebucht.'
},
{
  id:'K3', modul:'M4', gruppe:'Buchungssätze', stufe:1, titel:'Barabhebung vom Bankkonto',
  tags:['Zahlungsverkehr','Aktivkonto'],
  text:'Vom Bankkonto werden {betrag} abgehoben und in die Geschäftskasse gelegt.',
  werte:{betrag:800},
  soll:[{konto:'2820', wert:'betrag'}], haben:[{konto:'2800', wert:'betrag'}],
  hinweise:[
    'Welches Konto wird voller, welches leerer?',
    'Beide Konten sind Aktivkonten. Der Zugang steht im Soll, der Abgang im Haben.',
    'Im Soll steht das Konto Kasse mit {betrag}.'
  ],
  merke:'Kasse und Bank sind zwei getrennte Konten – der Belegtext entscheidet, welches gemeint ist.'
},
{
  id:'K4', modul:'M4', gruppe:'Buchungssätze', stufe:2, titel:'Darlehen aufgenommen',
  tags:['Finanzierung','Passivkonto'],
  text:'Die Sparkasse schreibt ein langfristiges Darlehen über {betrag} auf unserem Bankkonto gut.',
  werte:{betrag:20000},
  soll:[{konto:'2800', wert:'betrag'}], haben:[{konto:'4200', wert:'betrag'}],
  hinweise:[
    'Das Guthaben steigt – wodurch ist dieser Zugang finanziert?',
    'Bilanzverlängerung: Ein Aktivkonto und ein Passivkonto nehmen gleichzeitig zu. Aktivmehrungen stehen im Soll, Passivmehrungen im Haben.',
    'Im Soll steht das Konto Bank mit {betrag}.'
  ],
  merke:'Die Kreditaufnahme berührt das Eigenkapital nicht – sie verlängert nur die Bilanz.'
},
{
  id:'K5', modul:'M4', gruppe:'Buchungssätze', stufe:3, titel:'Verbindlichkeit in Darlehen umgewandelt',
  tags:['Finanzierung','Passivkonto'],
  text:'Eine Lieferantenverbindlichkeit über {betrag} wird in ein langfristiges Darlehen umgewandelt.',
  werte:{betrag:6000},
  soll:[{konto:'4400', wert:'betrag'}], haben:[{konto:'4200', wert:'betrag'}],
  hinweise:[
    'Fließt Geld? Wenn nein – was ändert sich dann überhaupt?',
    'Passivtausch: Beide Konten stehen auf der Passivseite. Die alte Schuld wird kleiner (Soll), die neue entsteht (Haben).',
    'Im Soll steht das Konto Verbindlichkeiten a. LL mit {betrag}.'
  ],
  merke:'Bei einem Passivtausch bleibt die Bilanzsumme gleich, nur die Zusammensetzung der Schulden ändert sich.'
},
{
  id:'K6', modul:'M4', gruppe:'Buchungssätze', stufe:2, titel:'Handelswaren auf Ziel gekauft',
  tags:['Einkauf','Passivkonto'],
  text:'Wir kaufen Handelswaren für {betrag} auf Ziel und lagern sie ein. Die Umsatzsteuer bleibt in diesem Modul noch außer Betracht.',
  werte:{betrag:3400},
  soll:[{konto:'2210', wert:'betrag'}], haben:[{konto:'4400', wert:'betrag'}],
  hinweise:[
    'Wohin geht die Ware – und wann wird sie bezahlt?',
    'Bilanzverlängerung: Der Warenbestand nimmt zu (Aktivmehrung, Soll), die Verbindlichkeit entsteht (Passivmehrung, Haben). Der Zugang geht auf das Bestandskonto.',
    'Im Soll steht das Konto Handelswaren mit {betrag}.'
  ],
  merke:'Der Zugang geht auf das Bestandskonto. Aufwand entsteht erst beim Verbrauch.'
},
{
  id:'K7', modul:'M4', gruppe:'Buchungssätze', stufe:2, titel:'Schreibtisch bar gekauft',
  tags:['Anlagevermögen','Zahlungsverkehr'],
  text:'Für das Büro wird ein Schreibtisch für {betrag} gekauft und sofort bar bezahlt.',
  werte:{betrag:900},
  soll:[{konto:'0870', wert:'betrag'}], haben:[{konto:'2820', wert:'betrag'}],
  hinweise:[
    'Wird der Schreibtisch sofort verbraucht oder über Jahre genutzt?',
    'Mehrjährige Nutzung bedeutet Anlagevermögen, also ein Bestandskonto der Klasse 0 – kein Aufwandskonto. Bezahlt wird bar.',
    'Im Soll steht das Konto Geschäftsausstattung mit {betrag}.'
  ],
  merke:'Anlagevermögen wird aktiviert und später abgeschrieben, nicht sofort als Aufwand gebucht.'
},
{
  id:'K8', modul:'M4', gruppe:'Buchungssätze', stufe:2, titel:'Darlehensrate getilgt',
  tags:['Finanzierung','Zahlungsverkehr'],
  text:'Eine Darlehensrate über {betrag} wird vom Bankkonto abgebucht.',
  werte:{betrag:2000},
  soll:[{konto:'4200', wert:'betrag'}], haben:[{konto:'2800', wert:'betrag'}],
  hinweise:[
    'Beide Bestände werden kleiner. Auf welchen Seiten steht das jeweils?',
    'Bilanzverkürzung: Passivminderung im Soll, Aktivminderung im Haben.',
    'Im Soll steht das Konto Darlehen mit {betrag}.'
  ],
  merke:'Die Tilgung mindert die Schuld. Zinsen wären ein eigener Aufwand und würden getrennt gebucht.'
},


/* ---------- Modul 5 · Vorübung: Aufwand und Ertrag zuordnen ---------- */
{
  id:'EZ1', modul:'M5', gruppe:'Zuordnung', stufe:0, vorgabe:'seiten', titel:'Zuordnung: Miete überwiesen',
  tags:['Aufwand','Miete'],
  text:'Die Monatsmiete für die Lagerhalle über {betrag} wird per Bank überwiesen.',
  werte:{betrag:1200},
  soll:[{konto:'6700', wert:'betrag'}], haben:[{konto:'2800', wert:'betrag'}],
  hinweise:[
    'Das Geld ist weg und kommt nicht als Vermögen zurück. Was bleibt davon in der Bilanz?',
    'Miete ist verbraucht, sobald der Monat vorbei ist – das ist Aufwand. Aufwendungen mindern das Eigenkapital und werden deshalb auf der Seite gebucht, auf der auch Eigenkapitalminderungen stehen: im Soll.',
    'Mietaufwendungen gehören ins Soll, die Bank ins Haben.'
  ],
  merke:'Aufwand steht im Soll. Er mindert das Eigenkapital, und Minderungen eines Passivpostens stehen links.'
},
{
  id:'EZ2', modul:'M5', gruppe:'Zuordnung', stufe:0, vorgabe:'seiten', titel:'Zuordnung: Zinsgutschrift der Bank',
  tags:['Ertrag','Zinsen'],
  text:'Die Bank schreibt uns Guthabenzinsen über {betrag} gut.',
  werte:{betrag:180},
  soll:[{konto:'2800', wert:'betrag'}], haben:[{konto:'5710', wert:'betrag'}],
  hinweise:[
    'Das Bankguthaben steigt, ohne dass wir etwas verkauft oder eine Schuld aufgenommen hätten. Woher kommt der Zuwachs?',
    'Zinsen sind ein Ertrag. Erträge mehren das Eigenkapital und stehen deshalb auf derselben Seite wie eine Eigenkapitalmehrung: im Haben.',
    'Die Bank gehört ins Soll, die Zinserträge ins Haben.'
  ],
  merke:'Ertrag steht im Haben – spiegelbildlich zum Aufwand.'
},

/* ---------- Modul 5 · Erfolgskonten ohne Umsatzsteuer ---------- */
{
  id:'E1', modul:'M5', gruppe:'Erfolgskonten', stufe:1, titel:'Monatsmiete überwiesen',
  tags:['Aufwand','Miete','Zahlungsverkehr'],
  text:'Die Monatsmiete für die Lagerhalle über {betrag} wird per Bank überwiesen.',
  werte:{betrag:1200},
  soll:[{konto:'6700', wert:'betrag'}], haben:[{konto:'2800', wert:'betrag'}],
  hinweise:[
    'Entsteht durch diese Zahlung ein neuer Vermögensgegenstand?',
    'Nein – die Nutzung des Monats ist verbraucht. Solche Werteverzehre laufen über Aufwandskonten, nicht über Bestandskonten. Aufwendungen werden im Soll gebucht.',
    'Im Soll stehen die Mietaufwendungen mit {betrag}.'
  ],
  merke:'Aufwand ist verbrauchter Wert. Er taucht in keiner Bilanzposition mehr auf, sondern mindert über die GuV das Eigenkapital.'
},
{
  id:'E2', modul:'M5', gruppe:'Erfolgskonten', stufe:1, titel:'Porto bar bezahlt',
  tags:['Aufwand','Zahlungsverkehr'],
  text:'Für den Versand von Werbebriefen werden {betrag} Porto aus der Kasse bezahlt.',
  werte:{betrag:85},
  soll:[{konto:'6820', wert:'betrag'}], haben:[{konto:'2820', wert:'betrag'}],
  hinweise:[
    'Was bleibt dem Unternehmen von diesem Geld?',
    'Die Beförderungsleistung ist mit dem Versand verbraucht. Aufwandskonto im Soll, Zahlungsmittelkonto im Haben – und beachte, aus welcher Kasse gezahlt wurde.',
    'Im Soll stehen die Portokosten mit {betrag}.'
  ],
  merke:'Der Belegtext verrät das Zahlungsmittel: „bar“ bedeutet Kasse, nicht Bank.'
},
{
  id:'E3', modul:'M5', gruppe:'Erfolgskonten', stufe:1, titel:'Mieteinnahme für untervermietete Fläche',
  tags:['Ertrag','Miete'],
  text:'Ein Teil unserer Lagerfläche ist untervermietet. Der Mieter überweist {betrag} auf unser Bankkonto.',
  werte:{betrag:600},
  soll:[{konto:'2800', wert:'betrag'}], haben:[{konto:'5400', wert:'betrag'}],
  hinweise:[
    'Das Guthaben steigt. Ist das eine Forderung, die beglichen wird – oder etwas anderes?',
    'Hier entsteht ein Wertezuwachs, der nicht auf einer bestehenden Forderung beruht: ein Ertrag. Erträge stehen im Haben, das Zahlungsmittelkonto im Soll.',
    'Im Soll steht die Bank mit {betrag}.'
  ],
  merke:'Erträge mehren das Eigenkapital und stehen deshalb im Haben.'
},
{
  id:'E4', modul:'M5', gruppe:'Erfolgskonten', stufe:2, titel:'Maschine repariert',
  tags:['Aufwand','Abgrenzung Aufwand und Vermögen'],
  text:'Eine Maschine wird nach einem Defekt instandgesetzt. Die Rechnung über {betrag} wird sofort per Bank bezahlt. Die Nutzungsdauer der Maschine verlängert sich dadurch nicht.',
  werte:{betrag:950},
  soll:[{konto:'6130', wert:'betrag'}], haben:[{konto:'2800', wert:'betrag'}],
  hinweise:[
    'Ist die Maschine nach der Reparatur mehr wert als vorher – oder nur wieder so viel wie vor dem Defekt?',
    'Eine Reparatur stellt den ursprünglichen Zustand wieder her und erhöht den Wert der Maschine nicht. Deshalb wird sie nicht auf dem Anlagekonto aktiviert, sondern sofort als Aufwand gebucht.',
    'Im Soll steht das Konto Instandhaltung/Reparatur mit {betrag}.'
  ],
  merke:'Erhalten heißt Aufwand, verbessern heißt aktivieren. Nur wertsteigernde Maßnahmen erhöhen das Anlagekonto.',
  stolpersteine:['Reparatur auf dem Maschinenkonto aktiviert','Aufwand ins Haben gebucht']
},
{
  id:'E5', modul:'M5', gruppe:'Erfolgskonten', stufe:2, titel:'Darlehenszinsen abgebucht',
  tags:['Aufwand','Zinsen','Finanzierung'],
  text:'Die Bank bucht {betrag} Zinsen für unser Darlehen ab. Die Tilgung erfolgt getrennt zu einem späteren Termin.',
  werte:{betrag:450},
  soll:[{konto:'7510', wert:'betrag'}], haben:[{konto:'2800', wert:'betrag'}],
  hinweise:[
    'Wird durch diese Zahlung die Schuld kleiner?',
    'Nein – Zinsen sind der Preis für die Überlassung des Geldes und damit Aufwand. Nur die Tilgung mindert die Darlehensschuld. Beides wird streng getrennt gebucht.',
    'Im Soll stehen die Zinsaufwendungen mit {betrag}.'
  ],
  merke:'Zinsen sind Aufwand, Tilgung ist Schuldenabbau. Wer beides zusammenwirft, verändert die Bilanz falsch.',
  stolpersteine:['Zinsen gegen das Darlehenskonto gebucht','Aufwand und Tilgung vermischt']
},
{
  id:'E6', modul:'M5', gruppe:'Erfolgskonten', stufe:2, titel:'Zinsgutschrift der Bank',
  tags:['Ertrag','Zinsen'],
  text:'Für das Guthaben auf dem Geschäftskonto schreibt die Bank {betrag} Zinsen gut.',
  werte:{betrag:180},
  soll:[{konto:'2800', wert:'betrag'}], haben:[{konto:'5710', wert:'betrag'}],
  hinweise:[
    'Auf welcher Seite steht ein Ertrag – und welches Konto nimmt den Gegenwert auf?',
    'Guthabenzinsen sind ein Ertrag und stehen im Haben. Verwechsle sie nicht mit Zinsaufwendungen: Entscheidend ist, ob wir Zinsen zahlen oder erhalten.',
    'Im Soll steht die Bank mit {betrag}.'
  ],
  merke:'Erhaltene Zinsen sind Ertrag, gezahlte Zinsen sind Aufwand – zwei verschiedene Konten.',
  stolpersteine:['Zinsaufwendungen statt Zinserträge','Ertrag ins Soll gebucht']
},
{
  id:'E7', modul:'M5', gruppe:'Erfolgskonten', stufe:2, titel:'Gehälter überwiesen',
  tags:['Aufwand','Personal'],
  text:'Die Gehälter der kaufmännischen Angestellten über {betrag} werden per Bank überwiesen.',
  werte:{betrag:14000},
  soll:[{konto:'6300', wert:'betrag'}], haben:[{konto:'2800', wert:'betrag'}],
  hinweise:[
    'Die Arbeitsleistung des Monats ist erbracht und verbraucht. Welche Kontenart passt dazu?',
    'Personalkosten sind Aufwand und stehen im Soll. Der Kontenrahmen trennt Löhne für gewerbliche Arbeitnehmer von Gehältern für kaufmännische Angestellte – der Belegtext entscheidet.',
    'Im Soll stehen die Gehälter mit {betrag}.'
  ],
  merke:'Löhne und Gehälter sind zwei getrennte Aufwandskonten. Wer sie bekommt, steht im Beleg.',
  stolpersteine:['Löhne statt Gehälter','Kasse statt Bank']
},
{
  id:'E8', modul:'M5', gruppe:'Erfolgskonten', stufe:3, titel:'Leasingrate für den Firmenwagen',
  tags:['Aufwand','Abgrenzung Aufwand und Vermögen'],
  text:'Für den geleasten Firmenwagen wird die Monatsrate über {betrag} abgebucht. Das Fahrzeug bleibt Eigentum der Leasinggesellschaft.',
  werte:{betrag:520},
  soll:[{konto:'6710', wert:'betrag'}], haben:[{konto:'2800', wert:'betrag'}],
  hinweise:[
    'Gehört uns das Fahrzeug? Und was folgt daraus für die Bilanz?',
    'Beim Leasing erwerben wir kein Eigentum, sondern nur ein Nutzungsrecht auf Zeit. Deshalb steht kein Fahrzeug im Anlagevermögen – die Rate ist reiner Aufwand, vergleichbar mit einer Miete.',
    'Im Soll stehen die Leasingaufwendungen mit {betrag}.'
  ],
  merke:'Leasing ist Nutzung ohne Eigentum. Es entsteht kein Anlagevermögen und keine Abschreibung, nur laufender Aufwand.',
  stolpersteine:['Fuhrpark aktiviert statt Aufwand gebucht','Leasingrate als Tilgung behandelt']
},
{
  id:'E9', modul:'M5', gruppe:'Erfolgskonten', stufe:3, titel:'Tankfüllung für den Firmenwagen',
  tags:['Aufwand','Zahlungsverkehr'],
  text:'Der Firmenwagen wird für {betrag} betankt, bezahlt wird per Bankkarte. Ein Lagerbestand an Kraftstoff wird nicht geführt – der Kraftstoff gilt sofort als verbraucht.',
  werte:{betrag:110},
  soll:[{konto:'6030', wert:'betrag'}], haben:[{konto:'2800', wert:'betrag'}],
  hinweise:[
    'Wird hier etwas eingelagert, das man später noch abzählen könnte?',
    'Kraftstoff zählt zu den Betriebsstoffen. Da kein Bestand geführt wird, geht der Betrag sofort auf das Aufwandskonto und nicht auf ein Bestandskonto.',
    'Im Soll stehen die Aufwendungen für Betriebsstoffe mit {betrag}.'
  ],
  merke:'Wird ein Verbrauchsgut sofort verbraucht, wird gleich Aufwand gebucht – ein Bestandskonto braucht es dann nicht.',
  stolpersteine:['Bestandskonto statt Aufwandskonto','Kasse statt Bank']
},

/* ---------- Modul 6 · Vorübung: netto, brutto, Umsatzsteuer ---------- */
{
  id:'R1', modul:'M6', gruppe:'Berechnungen', typ:'berechnung', stufe:0, titel:'Vom Nettobetrag zum Bruttobetrag',
  tags:['Umsatzsteuer','Rechnen'],
  text:'Eine Warenlieferung hat einen Nettowert von 2.400,00 €. Der Umsatzsteuersatz beträgt 19 %.',
  frage:'Wie hoch ist der Bruttobetrag?',
  optionen:[
    {wert:2856, richtig:true, weg:'2.400,00 € × 1,19 = 2.856,00 €'},
    {wert:2016.81, fehler:'Hier wurde durch 1,19 geteilt. Geteilt wird nur in der Gegenrichtung, wenn aus einem Bruttobetrag der Nettobetrag werden soll.'},
    {wert:1944.00, fehler:'Hier wurden 19 % abgezogen statt aufgeschlagen. Der Bruttobetrag ist immer größer als der Nettobetrag.'},
    {wert:456.00,  fehler:'Das ist nur die Umsatzsteuer. Der Bruttobetrag besteht aus Nettobetrag plus Steuer.'}
  ],
  hinweise:[
    'Der Nettowert ist der Ausgangsbetrag. Was kommt hinzu, damit daraus der Rechnungsbetrag wird?',
    'Auf den Nettobetrag werden 19 % aufgeschlagen. In einem Schritt: Nettobetrag mal 1,19.',
    '19 % von 2.400,00 € sind 456,00 €.'
  ],
  merke:'Netto mal 1,19 ergibt brutto. Der Faktor enthält den Nettobetrag selbst und die Steuer.'
},
{
  id:'R2', modul:'M6', gruppe:'Berechnungen', typ:'berechnung', stufe:0, titel:'Vom Bruttobetrag zum Nettobetrag',
  tags:['Umsatzsteuer','Rechnen'],
  text:'Eine Eingangsrechnung lautet über 1.190,00 € brutto. Der Umsatzsteuersatz beträgt 19 %.',
  frage:'Wie hoch ist der Nettobetrag?',
  optionen:[
    {wert:1000.00, richtig:true, weg:'1.190,00 € ÷ 1,19 = 1.000,00 €'},
    {wert:963.90,  fehler:'Hier wurden 19 % vom Bruttobetrag abgezogen. Das ist zu viel, denn die 19 % beziehen sich auf den Nettobetrag – also auf eine kleinere Grundlage.'},
    {wert:1416.10, fehler:'Hier wurde mit 1,19 multipliziert. Der Nettobetrag muss kleiner sein als der Bruttobetrag.'},
    {wert:190.00,  fehler:'Das ist die enthaltene Umsatzsteuer, nicht der Nettobetrag.'}
  ],
  hinweise:[
    'Der Bruttobetrag enthält bereits die Steuer. Von welcher Grundlage wurden die 19 % berechnet?',
    'Die Steuer wurde vom Nettobetrag berechnet. Der Bruttobetrag entspricht also 119 % – teile ihn durch 1,19.',
    'Ein Abzug von 19 % vom Bruttobetrag führt zu einem zu kleinen Ergebnis, weil er sich auf die falsche Grundlage bezieht.'
  ],
  merke:'Brutto geteilt durch 1,19 ergibt netto. Ein Abzug von 19 % vom Bruttobetrag ist immer falsch.'
},
{
  id:'R3', modul:'M6', gruppe:'Berechnungen', typ:'berechnung', stufe:0, titel:'Umsatzsteuer aus dem Nettobetrag',
  tags:['Umsatzsteuer','Rechnen'],
  text:'Wir stellen eine Rechnung über einen Nettobetrag von 3.600,00 € aus. Der Umsatzsteuersatz beträgt 19 %.',
  frage:'Wie hoch ist die Umsatzsteuer?',
  optionen:[
    {wert:684.00,  richtig:true, weg:'3.600,00 € × 19 % = 684,00 €'},
    {wert:574.79,  fehler:'Hier wurde mit 19/119 gerechnet. Dieser Satz gilt nur, wenn die Steuer aus einem Bruttobetrag herausgerechnet wird.'},
    {wert:4284.00, fehler:'Das ist der Bruttobetrag, also Nettobetrag plus Steuer – gefragt war nur die Steuer.'}
  ],
  hinweise:[
    'Worauf werden die 19 % berechnet – auf den Nettobetrag oder auf den Rechnungsbetrag?',
    'Bemessungsgrundlage ist immer der Nettobetrag. Also: Nettobetrag mal 19 %.',
    'Der Bruttobetrag dieser Rechnung wäre 4.284,00 €. Gefragt ist aber nur der Steueranteil.'
  ],
  merke:'Die Umsatzsteuer wird vom Nettobetrag berechnet – das ist die Bemessungsgrundlage.'
},
{
  id:'R4', modul:'M6', gruppe:'Berechnungen', typ:'berechnung', stufe:0, titel:'Umsatzsteuer aus dem Bruttobetrag',
  tags:['Umsatzsteuer','Rechnen'],
  text:'Ein Kassenbon weist einen Gesamtbetrag von 2.380,00 € aus. Darin sind 19 % Umsatzsteuer enthalten.',
  frage:'Wie hoch ist die enthaltene Umsatzsteuer?',
  optionen:[
    {wert:380.00,  richtig:true, weg:'2.380,00 € ÷ 1,19 = 2.000,00 € netto · 2.380,00 € − 2.000,00 € = 380,00 €'},
    {wert:452.20,  fehler:'Hier wurden 19 % vom Bruttobetrag gerechnet. Die 19 % beziehen sich aber auf den Nettobetrag, der kleiner ist.'},
    {wert:2000.00, fehler:'Das ist der Nettobetrag. Gefragt war der darin enthaltene Steueranteil.'}
  ],
  hinweise:[
    'Der Betrag enthält die Steuer bereits. Von welcher Grundlage wurde sie berechnet?',
    'Rechne zuerst den Nettobetrag aus – Bruttobetrag geteilt durch 1,19 – und ziehe ihn dann vom Bruttobetrag ab.',
    'Der Nettobetrag beträgt 2.000,00 €.'
  ],
  merke:'Aus dem Bruttobetrag wird die Steuer herausgerechnet, nicht aufgeschlagen: erst netto ermitteln, dann die Differenz bilden.'
},
{
  id:'R5', modul:'M6', gruppe:'Berechnungen', typ:'berechnung', stufe:1, titel:'Rechnungsbetrag aufteilen',
  tags:['Umsatzsteuer','Rechnen'],
  text:'Eine Eingangsrechnung lautet über 4.284,00 € brutto bei 19 % Umsatzsteuer.',
  frage:'Welcher Betrag wird als Wareneinkauf gebucht?',
  optionen:[
    {wert:3600.00, richtig:true, weg:'4.284,00 € ÷ 1,19 = 3.600,00 € – der Nettobetrag ist der Wareneinkauf'},
    {wert:4284.00, fehler:'Das ist der Bruttobetrag. Er steht auf dem Konto des Lieferanten; der Wareneinkauf wird netto erfasst.'},
    {wert:3470.04, fehler:'Hier wurden 19 % vom Bruttobetrag abgezogen statt durch 1,19 zu teilen.'},
    {wert:684.00,  fehler:'Das ist die Vorsteuer. Sie bekommt eine eigene Buchungszeile.'}
  ],
  hinweise:[
    'Drei Beträge stecken in dieser Rechnung. Welcher davon beschreibt den Wert der Ware?',
    'Das Lager wird zum Nettowert bewertet, die Steuer läuft über ein eigenes Konto, und der Lieferant fordert den Bruttobetrag.',
    'Der Nettobetrag beträgt 3.600,00 €, die Vorsteuer 684,00 €.'
  ],
  merke:'Ein Rechnungsbetrag zerfällt in drei Zahlen – und jede hat ihr eigenes Konto.'
},
{
  id:'R6', modul:'M6', gruppe:'Berechnungen', typ:'berechnung', stufe:1, titel:'Nettobetrag mit Steuer ergänzen',
  tags:['Umsatzsteuer','Rechnen'],
  text:'Für eine Dienstleistung berechnen wir 850,00 € netto zuzüglich 19 % Umsatzsteuer.',
  frage:'Auf welchen Betrag lautet die Rechnung?',
  optionen:[
    {wert:1011.50, richtig:true, weg:'850,00 € × 1,19 = 1.011,50 €'},
    {wert:714.29,  fehler:'Hier wurde durch 1,19 geteilt. Das wäre richtig, wenn aus einem Bruttobetrag der Nettobetrag werden soll.'},
    {wert:688.50,  fehler:'Hier wurden 19 % abgezogen statt aufgeschlagen.'},
    {wert:161.50,  fehler:'Das ist nur die Umsatzsteuer, nicht der Rechnungsbetrag.'}
  ],
  hinweise:[
    'Was steht am Ende auf der Rechnung – der Wert der Leistung oder der Betrag, den der Kunde zahlen muss?',
    'Der Kunde zahlt den Bruttobetrag: Nettobetrag mal 1,19.',
    '19 % von 850,00 € sind 161,50 €.'
  ],
  merke:'Zuzüglich Umsatzsteuer heißt: aufschlagen, nicht herausrechnen.'
},

/* ---------- Modul 6 · Buchungssätze mit Umsatzsteuer ---------- */
{
  id:'U1', modul:'M6', gruppe:'Buchungssätze', stufe:1, titel:'Handelswaren auf Ziel gekauft',
  tags:['Einkauf','Umsatzsteuer','Zusammengesetzter Satz'],
  text:'Die Weber Handels e. K. erhält die Eingangsrechnung Nr. 4711 über Handelswaren: {netto} netto zzgl. 19 % Umsatzsteuer. Zahlbar in 30 Tagen.',
  werte:{netto:2400, satz:0.19},
  soll:[{konto:'6080', wert:'netto'},{konto:'2600', wert:'ust'}],
  haben:[{konto:'4400', wert:'brutto'}],
  hinweise:[
    'In Modul 4 lief dieser Fall noch über das Bestandskonto. Jetzt wird erfolgsorientiert gebucht – welche Kontenart tritt an die Stelle des Bestandskontos?',
    'Der Wareneinkauf gilt sofort als Aufwand und geht auf 6080 Aufwendungen für Handelswaren, nicht auf das Bestandskonto 2210. Die Verbindlichkeit steigt um den Bruttobetrag; die ausgewiesene Steuer ist für den Käufer Vorsteuer, also eine Forderung gegenüber dem Finanzamt.',
    'Im Soll beginnt es mit 6080 Aufwendungen für Handelswaren {netto}. Dazu kommt die Vorsteuer von {ust} – ebenfalls im Soll. Im Haben steht nur ein Konto mit dem Bruttobetrag.'
  ],
  merke:'Der Lieferant bekommt brutto, der Aufwand wird netto erfasst. Die Differenz ist Vorsteuer.',
  stolpersteine:['Bestandskonto statt Aufwandskonto','Bruttobetrag auf dem Aufwandskonto','Vorsteuer vergessen','Umsatzsteuer statt Vorsteuer']
},
{
  id:'U2', modul:'M6', gruppe:'Buchungssätze', stufe:2, titel:'Bürodrucker per Banküberweisung',
  tags:['Anlagevermögen','Umsatzsteuer','Zahlungsverkehr'],
  text:'Für das Sekretariat wird ein Laserdrucker angeschafft, der voraussichtlich fünf Jahre genutzt wird. Kaufpreis {netto} netto zzgl. 19 % Umsatzsteuer, Zahlung sofort per Banküberweisung.',
  werte:{netto:1800, satz:0.19},
  soll:[{konto:'0870', wert:'netto'},{konto:'2600', wert:'ust'}],
  haben:[{konto:'2800', wert:'brutto'}],
  hinweise:[
    'Der Drucker wird fünf Jahre genutzt. Ist das schon Aufwand dieses Jahres – oder erst einmal Vermögen?',
    'Güter mit mehrjähriger Nutzung gehören ins Anlagevermögen und werden später planmäßig abgeschrieben. Sofort verbrauchtes Material wie Papier oder Toner wäre dagegen Aufwand auf 6800 Büromaterial.',
    'Im Soll steht 0870 Geschäftsausstattung mit {netto}. Ergänze die Vorsteuer im Soll; im Haben steht das Zahlungsmittelkonto mit {brutto}.'
  ],
  merke:'Mehrjährige Nutzung heißt Anlagevermögen (Klasse 0), sofortiger Verbrauch heißt Aufwand (Klasse 6).',
  stolpersteine:['Aufwandskonto statt Anlagekonto','Kasse statt Bank','Bruttobetrag im Anlagekonto']
},
{
  id:'U3', modul:'M6', gruppe:'Buchungssätze', stufe:2, titel:'Handelswaren auf Ziel verkauft',
  tags:['Verkauf','Umsatzsteuer','Zusammengesetzter Satz'],
  text:'Wir verkaufen Handelswaren an die Kunze KG auf Ziel. Rechnungsbetrag: {netto} netto zzgl. 19 % Umsatzsteuer.',
  werte:{netto:3600, satz:0.19},
  soll:[{konto:'2400', wert:'brutto'}],
  haben:[{konto:'5010', wert:'netto'},{konto:'4800', wert:'ust'}],
  hinweise:[
    'Der Kunde schuldet uns den vollen Rechnungsbetrag. Wie viel davon ist tatsächlich unser Ertrag?',
    'Der Kunde zahlt später, es entsteht eine Forderung in Höhe des Bruttobetrags. Ertrag ist nur der Nettobetrag; die Umsatzsteuer schulden wir dem Finanzamt und buchen sie als Verbindlichkeit.',
    'Im Soll steht nur 2400 Forderungen a. LL mit {brutto}. Im Haben teilt sich der Betrag auf: Erlöse {netto} und Umsatzsteuer {ust}.'
  ],
  merke:'Beim Verkauf ist die Steuer Umsatzsteuer (4800) und damit eine Schuld – nicht Vorsteuer.',
  stolpersteine:['Vorsteuer statt Umsatzsteuer','Bruttobetrag als Erlös','Forderung netto statt brutto']
},
{
  id:'U4', modul:'M6', gruppe:'Buchungssätze', stufe:2, titel:'Handelswaren gegen bar verkauft',
  tags:['Verkauf','Umsatzsteuer'],
  text:'Ein Kunde kauft Handelswaren und zahlt bar. Der Kassenbon weist {netto} netto zzgl. 19 % Umsatzsteuer aus.',
  werte:{netto:900, satz:0.19},
  soll:[{konto:'2820', wert:'brutto'}],
  haben:[{konto:'5010', wert:'netto'},{konto:'4800', wert:'ust'}],
  hinweise:[
    'Welcher Betrag liegt am Ende in der Kasse – und welcher davon gehört uns wirklich?',
    'In die Kasse fließt der Bruttobetrag. Erlös ist nur der Nettoanteil; die enthaltene Steuer ist eine Schuld gegenüber dem Finanzamt. Achte außerdem auf das Zahlungsmittel.',
    'Im Soll steht 2820 Kasse mit {brutto}. Im Haben stehen zwei Konten.'
  ],
  merke:'Beim Verkauf von Handelswaren ist 5010 das Erlöskonto. Bar heißt: Kasse 2820 im Soll.',
  stolpersteine:['Bank statt Kasse','Kasse netto statt brutto','Vorsteuer statt Umsatzsteuer']
},
{
  id:'U5', modul:'M6', gruppe:'Buchungssätze', stufe:2, titel:'Handelswaren sofort bezahlt',
  tags:['Einkauf','Umsatzsteuer','Zahlungsverkehr'],
  text:'Wir kaufen Handelswaren für {netto} netto zzgl. 19 % Umsatzsteuer und begleichen die Rechnung sofort per Banküberweisung.',
  werte:{netto:3200, satz:0.19},
  soll:[{konto:'6080', wert:'netto'},{konto:'2600', wert:'ust'}],
  haben:[{konto:'2800', wert:'brutto'}],
  hinweise:[
    'Gegenüber dem Zieleinkauf ändert sich nur eine einzige Zeile. Welche?',
    'Da sofort bezahlt wird, entsteht keine Verbindlichkeit. Statt des Lieferantenkontos steht das Zahlungsmittelkonto im Haben – mit dem Bruttobetrag. Aufwandskonto und Vorsteuer bleiben unverändert.',
    'Im Soll steht 6080 Aufwendungen für Handelswaren mit {netto}, dazu die Vorsteuer.'
  ],
  merke:'Ziel oder sofort verändert nur die Habenseite. Die Aufteilung in netto und Vorsteuer bleibt gleich.',
  stolpersteine:['Verbindlichkeiten trotz Sofortzahlung','Bestandskonto statt Aufwandskonto','Bruttobetrag im Aufwandskonto']
},

/* ---------- Modul 7 · Wareneinsatz und Warenrohgewinn ---------- */
{
  id:'WG1', modul:'M7', typ:'wareneinsatz', stufe:1, titel:'Wareneinsatz und Warenrohgewinn · Beispiel 1',
  tags:['Wareneinsatz','Warenrohgewinn','Inventur'],
  text:'Aus der Buchführung der Sommer Handels e. K. liegen für das abgelaufene Geschäftsjahr folgende Werte vor. Ordne zu, was in die Ermittlung des Wareneinsatzes gehört, und berechne anschließend den Warenrohgewinn.',
  posten:[
    {label:'Anfangsbestand Handelswaren (01.01., Konto 2210)', wert:18000, ziel:'ab'},
    {label:'Wareneinkäufe des Jahres (Konto 6080)', wert:145000, ziel:'einkauf'},
    {label:'Schlussbestand lt. Inventur (31.12.)', wert:21000, ziel:'sb'}
  ],
  umsatz:{label:'Umsatzerlöse Handelswaren (Konto 5010)', wert:210000},
  hinweise:[
    'Drei Werte gehören in die Ermittlung des Wareneinsatzes. Wie beginnt und wie endet der Warenbestand des Jahres, und was kommt dazwischen hinzu?',
    'Wareneinsatz = Anfangsbestand + Wareneinkäufe − Schlussbestand laut Inventur. Der Umsatz wird erst im zweiten Schritt gebraucht.',
    'Anfangsbestand 18.000,00 € plus Wareneinkäufe 145.000,00 € minus Schlussbestand 21.000,00 € ergibt den Wareneinsatz.'
  ],
  merke:'Wareneinsatz = Anfangsbestand + Einkäufe − Schlussbestand laut Inventur. Warenrohgewinn = Umsatzerlöse − Wareneinsatz.'
},
{
  id:'WG2', modul:'M7', typ:'wareneinsatz', stufe:2, titel:'Wareneinsatz und Warenrohgewinn · Beispiel 2',
  tags:['Wareneinsatz','Warenrohgewinn','Inventur','Abgrenzung'],
  text:'Für die Kramer KG liegen mehr Werte vor, als du brauchst. Finde die drei, aus denen sich der Wareneinsatz ergibt.',
  posten:[
    {label:'Anfangsbestand Handelswaren (01.01., Konto 2210)', wert:24000, ziel:'ab'},
    {label:'Wareneinkäufe des Jahres (Konto 6080)', wert:168000, ziel:'einkauf'},
    {label:'Schlussbestand lt. Inventur (31.12.)', wert:19500, ziel:'sb'},
    {label:'Schlussbestand lt. Buchführung (Konto 2210, 31.12.)', wert:24000, ziel:null,
     grund:'Seit der erfolgsorientierten Buchung wird das Konto 2210 während des Jahres nicht mehr angesprochen – es zeigt zum 31.12. immer noch den Anfangsbestand. Das ist gerade nicht der tatsächliche Bestand, deshalb zählt hier nur die Inventur.'}
  ],
  umsatz:{label:'Umsatzerlöse Handelswaren (Konto 5010)', wert:245000},
  hinweise:[
    'Zwei der vier Werte tragen zwar „Konto 2210“, sind aber nicht dasselbe. Was unterscheidet sie?',
    'Der Buchwert des Warenkontos ändert sich seit Modul 6 während des Jahres nicht mehr, weil Einkauf und Verkauf erfolgsorientiert über andere Konten laufen. Nur die körperliche Inventur zeigt, wie viel Ware tatsächlich noch da ist.',
    'Der Schlussbestand laut Buchführung entspricht hier zufällig dem Anfangsbestand – das ist kein Fehler in der Aufgabe, sondern die Folge der Buchungsmethode. Für den Wareneinsatz zählt nur die Inventur mit 19.500,00 €.'
  ],
  merke:'Bei erfolgsorientierter Buchung bewegt sich das Warenkonto während des Jahres nicht. Nur die Inventur zeigt den wirklichen Schlussbestand.'
},
{
  id:'WG3', modul:'M7', typ:'wareneinsatz', stufe:3, titel:'Wareneinsatz und Warenrohgewinn · Beispiel 3',
  tags:['Wareneinsatz','Warenrohgewinn','Inventur','Abgrenzung'],
  text:'Bei der Nowak Handels GmbH sind gleich zwei Werte im Spiel, die auf den ersten Blick passen könnten, aber nicht gebraucht werden.',
  posten:[
    {label:'Anfangsbestand Handelswaren (01.01., Konto 2210)', wert:15000, ziel:'ab'},
    {label:'Wareneinkäufe des Jahres netto (Konto 6080)', wert:132000, ziel:'einkauf'},
    {label:'Schlussbestand lt. Inventur (31.12.)', wert:17800, ziel:'sb'},
    {label:'Schlussbestand lt. Buchführung (Konto 2210, 31.12.)', wert:15000, ziel:null,
     grund:'Das Warenkonto bewegt sich seit der erfolgsorientierten Buchung während des Jahres nicht – es zeigt weiterhin den Anfangsbestand. Maßgeblich ist die körperliche Inventur.'},
    {label:'Wareneinkäufe des Jahres brutto (inkl. 19 % USt)', wert:157080, ziel:null,
     grund:'Aufwendungen für Handelswaren werden seit Modul 6 zum Nettobetrag gebucht – die Umsatzsteuer läuft über die Vorsteuer. Für den Wareneinsatz zählt der Nettobetrag von 132.000,00 €, nicht der Bruttobetrag.'}
  ],
  umsatz:{label:'Umsatzerlöse Handelswaren (Konto 5010)', wert:205000},
  hinweise:[
    'Zwei Werte sehen auf den ersten Blick brauchbar aus. Bei einem ist die Steuer das Problem, beim anderen die Quelle des Wertes.',
    'Das Aufwandskonto 6080 ist immer netto bebucht – ein Bruttobetrag würde die Umsatzsteuer fälschlich mit hineinrechnen. Und der Buchwert des Warenkontos bleibt während des Jahres unverändert, maßgeblich ist nur die Inventur.',
    'Verwende 132.000,00 € (netto) als Einkauf und 17.800,00 € als Schlussbestand. Die beiden anderen Werte bleiben unbenutzt.'
  ],
  merke:'Zwei häufige Fallen in einer Aufgabe: Brutto statt netto, und der eingefrorene Buchwert statt der tatsächlichen Inventur.'
},

/* ---------- Modul 8 · Eingangsrechnung: Skonto und Rücksendung ---------- */
{
  id:'ER1', modul:'M8', typ:'kette', stufe:1, titel:'Eingangsrechnung Handelswaren · mit Skonto',
  tags:['Eingangsrechnung','Skonto','Handelswaren'],
  text:'Wir kaufen Handelswaren auf Ziel für 8.000,00 € netto zzgl. 19 % Umsatzsteuer. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 2 % Skonto. Buche den Rechnungseingang und die Banküberweisung für beide möglichen Fälle: a) Wir überweisen nach 30 Tagen ohne Abzug, oder b) wir überweisen innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'6080', betrag:8000}, {seite:'soll', konto:'2600', betrag:1520}, {seite:'haben', konto:'4400', betrag:9520}]},
    {id:'zahlungOhne', titel:'Fall a) Überweisung ohne Skontoabzug',
     muster:[{seite:'soll', konto:'4400', betrag:9520}, {seite:'haben', konto:'2800', betrag:9520}]},
    {id:'zahlungMit', titel:'Fall b) Überweisung mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'4400', betrag:9520}, {seite:'haben', konto:'2800', betrag:9329.60},
             {seite:'haben', konto:'6083', betrag:160}, {seite:'haben', konto:'2600', betrag:30.40}]}
  ],
  hinweise:[
    'Handelswaren haben ein eigenes Skontokonto. Wenn du Skonto abziehst, mindert das sowohl den Aufwand als auch die Vorsteuer – beide waren ja netto bzw. anteilig gebucht.',
    'Der Skontobetrag von 190,40 € (2 % von 9.520,00 €) verteilt sich auf 160,00 € Skonto (6083) und 30,40 € Vorsteuerkorrektur (2600). Die Bank bekommt nur die Differenz.',
    'Zahlung mit Skonto: Soll 4400 Verbindlichkeiten 9.520,00 €. Haben: 2800 Bank 9.329,60 €, 6083 Skonto 160,00 €, 2600 Vorsteuer 30,40 €.'
  ],
  merke:'Skonto ist ein nachträglicher Abzug: Er mindert den ursprünglich gebuchten Aufwand und die Vorsteuer – beide waren ja zu hoch angesetzt.'
},
{
  id:'ER2', modul:'M8', typ:'kette', stufe:1, titel:'Eingangsrechnung Handelswaren · mit Skonto',
  tags:['Eingangsrechnung','Skonto','Handelswaren'],
  text:'Wir kaufen Handelswaren auf Ziel für 6.500,00 € netto zzgl. 19 % Umsatzsteuer. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 3 % Skonto. Buche den Rechnungseingang und die Banküberweisung für beide möglichen Fälle: a) Wir überweisen nach 30 Tagen ohne Abzug, oder b) wir überweisen innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'6080', betrag:6500}, {seite:'soll', konto:'2600', betrag:1235}, {seite:'haben', konto:'4400', betrag:7735}]},
    {id:'zahlungOhne', titel:'Fall a) Überweisung ohne Skontoabzug',
     muster:[{seite:'soll', konto:'4400', betrag:7735}, {seite:'haben', konto:'2800', betrag:7735}]},
    {id:'zahlungMit', titel:'Fall b) Überweisung mit Abzug 3 % Skonto',
     muster:[{seite:'soll', konto:'4400', betrag:7735}, {seite:'haben', konto:'2800', betrag:7502.95},
             {seite:'haben', konto:'6083', betrag:195}, {seite:'haben', konto:'2600', betrag:37.05}]}
  ],
  hinweise:[
    'Handelswaren haben ihr eigenes Skontokonto 6083 – Skonto wird nicht direkt auf 6080 gebucht.',
    '3 % von 7.735,00 € sind 232,05 €. Davon sind 195,00 € Skonto (6083) und 37,05 € Vorsteuerkorrektur (2600).',
    'Zahlung mit Skonto: Soll 4400 mit 7.735,00 €. Haben: 2800 Bank 7.502,95 €, 6083 Skonto 195,00 €, 2600 Vorsteuer 37,05 €.'
  ],
  merke:'Skonto beim Wareneinkauf kommt auf das eigene Unterkonto 6083 – nicht auf 6080 selbst.'
},
{
  id:'ER3', modul:'M8', typ:'kette', stufe:1, titel:'Eingangsrechnung Geschäftsausstattung · mit Skonto',
  tags:['Eingangsrechnung','Skonto','Anlagevermögen'],
  text:'Wir kaufen Büromöbel (Geschäftsausstattung) auf Ziel für 4.200,00 € netto zzgl. 19 % Umsatzsteuer. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 2 % Skonto. Buche den Rechnungseingang und die Banküberweisung für beide möglichen Fälle: a) Wir überweisen nach 30 Tagen ohne Abzug, oder b) wir überweisen innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'0870', betrag:4200}, {seite:'soll', konto:'2600', betrag:798}, {seite:'haben', konto:'4400', betrag:4998}]},
    {id:'zahlungOhne', titel:'Fall a) Überweisung ohne Skontoabzug',
     muster:[{seite:'soll', konto:'4400', betrag:4998}, {seite:'haben', konto:'2800', betrag:4998}]},
    {id:'zahlungMit', titel:'Fall b) Überweisung mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'4400', betrag:4998}, {seite:'haben', konto:'2800', betrag:4898.04},
             {seite:'haben', konto:'0870', betrag:84}, {seite:'haben', konto:'2600', betrag:15.96}]}
  ],
  hinweise:[
    'Suche in deinem Kontenrahmen nach einem Skontokonto für Geschäftsausstattung. Findest du eins?',
    'Es gibt keins – 0870 hat kein eigenes Korrekturkonto. Der Skontoabzug mindert deshalb direkt das Konto, auf dem der Kauf gebucht wurde: dasselbe 0870, nur diesmal im Haben.',
    'Zahlung mit Skonto: Soll 4400 mit 4.998,00 €. Haben: 2800 Bank 4.898,04 €, 0870 Geschäftsausstattung 84,00 €, 2600 Vorsteuer 15,96 €.'
  ],
  merke:'Nicht jedes Konto hat ein eigenes Korrekturkonto. Ohne eins wird direkt auf dem Hauptkonto korrigiert – hier taucht 0870 also zweimal auf, einmal im Soll, einmal im Haben.',
  stolpersteine:['Ein nicht existierendes Skontokonto erfunden','Skonto auf ein Aufwandskonto statt auf 0870 gebucht']
},
{
  id:'ER4', modul:'M8', typ:'kette', stufe:1, titel:'Eingangsrechnung Büromaterial · mit Skonto',
  tags:['Eingangsrechnung','Skonto','Zahlungsverkehr'],
  text:'Wir kaufen Büromaterial auf Ziel für 900,00 € netto zzgl. 19 % Umsatzsteuer. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 2 % Skonto. Buche den Rechnungseingang und die Banküberweisung für beide möglichen Fälle: a) Wir überweisen nach 30 Tagen ohne Abzug, oder b) wir überweisen innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'6800', betrag:900}, {seite:'soll', konto:'2600', betrag:171}, {seite:'haben', konto:'4400', betrag:1071}]},
    {id:'zahlungOhne', titel:'Fall a) Überweisung ohne Skontoabzug',
     muster:[{seite:'soll', konto:'4400', betrag:1071}, {seite:'haben', konto:'2800', betrag:1071}]},
    {id:'zahlungMit', titel:'Fall b) Überweisung mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'4400', betrag:1071}, {seite:'haben', konto:'2800', betrag:1049.58},
             {seite:'haben', konto:'6800', betrag:18}, {seite:'haben', konto:'2600', betrag:3.42}]}
  ],
  hinweise:[
    'Wie schon bei der Geschäftsausstattung: Prüfe, ob 6800 ein eigenes Skontokonto hat.',
    'Auch hier nicht. Der Skontoabzug korrigiert direkt 6800 Büromaterial – im Haben, weil er den zuvor gebuchten Aufwand mindert.',
    'Zahlung mit Skonto: Soll 4400 mit 1.071,00 €. Haben: 2800 Bank 1.049,58 €, 6800 Büromaterial 18,00 €, 2600 Vorsteuer 3,42 €.'
  ],
  merke:'Wieder dasselbe Muster: Kein eigenes Korrekturkonto heißt, das Hauptkonto trägt die Korrektur selbst.'
},
{
  id:'ER5', modul:'M8', typ:'kette', stufe:2, titel:'Eingangsrechnung Handelswaren · mit Rücksendung',
  tags:['Eingangsrechnung','Skonto','Rücksendung','Handelswaren'],
  text:'Wir kaufen Handelswaren auf Ziel für 12.000,00 € netto zzgl. 19 % Umsatzsteuer. Wegen einer Falschlieferung senden wir 15 % der Ware an den Lieferanten zurück. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 2 % Skonto. Buche den Rechnungseingang, die Rücksendung und die Banküberweisung des Restbetrags für beide möglichen Fälle: a) Wir überweisen nach 30 Tagen ohne Abzug, oder b) wir überweisen innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'6080', betrag:12000}, {seite:'soll', konto:'2600', betrag:2280}, {seite:'haben', konto:'4400', betrag:14280}]},
    {id:'minderung', titel:'Rücksendung von 15 % wegen Falschlieferung',
     muster:[{seite:'soll', konto:'4400', betrag:2142}, {seite:'haben', konto:'6082', betrag:1800}, {seite:'haben', konto:'2600', betrag:342}]},
    {id:'zahlungOhne', titel:'Fall a) Überweisung Restbetrag ohne Skontoabzug',
     muster:[{seite:'soll', konto:'4400', betrag:12138}, {seite:'haben', konto:'2800', betrag:12138}]},
    {id:'zahlungMit', titel:'Fall b) Überweisung Restbetrag mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'4400', betrag:12138}, {seite:'haben', konto:'2800', betrag:11895.24},
             {seite:'haben', konto:'6083', betrag:204}, {seite:'haben', konto:'2600', betrag:38.76}]}
  ],
  hinweise:[
    'Eine Rücksendung heißt: Die Ware geht tatsächlich zurück. Gibt es für Handelswaren ein eigenes Konto für Rücksendungen?',
    'Ja: 6082 Nachlässe und Rücksendungen. 15 % von 12.000,00 € = 1.800,00 € werden dort im Haben gebucht, dazu die anteilige Vorsteuer von 342,00 €. Die Verbindlichkeit sinkt um den Bruttobetrag von 2.142,00 €.',
    'Für die Zahlung zählt nur noch der Restbetrag von 12.138,00 € (14.280,00 € − 2.142,00 €). Das Skonto von 2 % bezieht sich auf diesen Restbetrag, nicht auf die ursprüngliche Rechnung.'
  ],
  merke:'Gibt es ein Konto für Rücksendungen – hier 6082 Nachlässe und Rücksendungen –, wird die Rücksendung dort gebucht. Fehlt es (wie bei 0870), wird direkt auf dem Hauptkonto storniert.'
},
{
  id:'ER6', modul:'M8', typ:'kette', stufe:2, titel:'Eingangsrechnung Handelswaren · mit Preisnachlass',
  tags:['Eingangsrechnung','Skonto','Preisnachlass','Handelswaren'],
  text:'Wir kaufen Handelswaren auf Ziel für 9.600,00 € netto zzgl. 19 % Umsatzsteuer. Wegen kleinerer Mängel gewährt uns der Lieferant einen Preisnachlass von 10 % – die Ware behalten wir. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 3 % Skonto. Buche den Rechnungseingang, den Nachlass und die Banküberweisung des Restbetrags für beide möglichen Fälle: a) Wir überweisen nach 30 Tagen ohne Abzug, oder b) wir überweisen innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'6080', betrag:9600}, {seite:'soll', konto:'2600', betrag:1824}, {seite:'haben', konto:'4400', betrag:11424}]},
    {id:'minderung', titel:'Preisnachlass von 10 % wegen kleinerer Mängel',
     muster:[{seite:'soll', konto:'4400', betrag:1142.40}, {seite:'haben', konto:'6082', betrag:960}, {seite:'haben', konto:'2600', betrag:182.40}]},
    {id:'zahlungOhne', titel:'Fall a) Überweisung Restbetrag ohne Skontoabzug',
     muster:[{seite:'soll', konto:'4400', betrag:10281.60}, {seite:'haben', konto:'2800', betrag:10281.60}]},
    {id:'zahlungMit', titel:'Fall b) Überweisung Restbetrag mit Abzug 3 % Skonto',
     muster:[{seite:'soll', konto:'4400', betrag:10281.60}, {seite:'haben', konto:'2800', betrag:9973.15, formel:'9600 * f * 0.9 * 1.19 - 9600 * f * 0.9 * 0.03 - round(9600 * f * 0.9 * 0.19 * 0.03)'},
             {seite:'haben', konto:'6083', betrag:259.20}, {seite:'haben', konto:'2600', betrag:49.25, formel:'round(9600 * f * 0.9 * 0.19 * 0.03)'}]}
  ],
  hinweise:[
    'Anders als bei der Rücksendung bleibt die Ware hier im Haus – nur der Preis wird nachträglich gesenkt. Welches Konto passt zu einer reinen Preiskorrektur, ohne dass Ware zurückgeht?',
    'Handelswaren haben dafür ein eigenes Konto: 6082 Nachlässe und Rücksendungen. Es wird trotz des Namens auch für reine Preisnachlässe benutzt, nicht nur für tatsächliche Rücksendungen.',
    'Der Nachlass mindert die Verbindlichkeit um 1.142,40 € (10 % von 11.424,00 €). Für den Rest von 10.281,60 € zählt anschließend das Skonto von 3 %.'
  ],
  merke:'6082/6002 heißen „Nachlässe und Rücksendungen“ – sie gelten für beides: für eine reine Preiskorrektur genauso wie für eine tatsächliche Rücksendung.',
  stolpersteine:['Nachlass auf das Hauptkonto 6080 statt auf 6082 gebucht','Skonto-Prozentsatz auf den ursprünglichen statt auf den geminderten Betrag angewendet']
},
{
  id:'ER7', modul:'M8', typ:'kette', stufe:3, titel:'Eingangsrechnung Geschäftsausstattung · mit Rücksendung',
  tags:['Eingangsrechnung','Skonto','Rücksendung','Anlagevermögen'],
  text:'Wir kaufen Büromöbel auf Ziel für 3.000,00 € netto zzgl. 19 % Umsatzsteuer. Ein Teil der Lieferung – 20 % – wird als beschädigt zurückgeschickt. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 2 % Skonto. Buche den Rechnungseingang, die Rücksendung und die Banküberweisung des Restbetrags für beide möglichen Fälle: a) Wir überweisen nach 30 Tagen ohne Abzug, oder b) wir überweisen innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'0870', betrag:3000}, {seite:'soll', konto:'2600', betrag:570}, {seite:'haben', konto:'4400', betrag:3570}]},
    {id:'minderung', titel:'Rücksendung von 20 % wegen Beschädigung',
     muster:[{seite:'soll', konto:'4400', betrag:714}, {seite:'haben', konto:'0870', betrag:600}, {seite:'haben', konto:'2600', betrag:114}]},
    {id:'zahlungOhne', titel:'Fall a) Überweisung Restbetrag ohne Skontoabzug',
     muster:[{seite:'soll', konto:'4400', betrag:2856}, {seite:'haben', konto:'2800', betrag:2856}]},
    {id:'zahlungMit', titel:'Fall b) Überweisung Restbetrag mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'4400', betrag:2856}, {seite:'haben', konto:'2800', betrag:2798.88},
             {seite:'haben', konto:'0870', betrag:48}, {seite:'haben', konto:'2600', betrag:9.12}]}
  ],
  hinweise:[
    'In dieser Aufgabe taucht 0870 an drei verschiedenen Stellen auf – im Rechnungseingang, bei der Rücksendung und beim Skonto. Warum ausgerechnet immer dasselbe Konto?',
    '0870 hat weder ein Rücksendungs- noch ein Skontokonto. Jede Korrektur – ob Rücksendung oder Skonto – wird deshalb direkt auf 0870 selbst gebucht, jedes Mal im Haben, weil sie den ursprünglichen Zugang mindert.',
    'Rücksendung: Soll 4400 mit 714,00 €, Haben 0870 mit 600,00 € und 2600 mit 114,00 €. Für die Zahlung zählt danach nur noch der Restbetrag von 2.856,00 €.'
  ],
  merke:'Ohne eigenes Korrekturkonto trägt das Hauptkonto jede Korrektur selbst – ob es sich um eine Rücksendung oder um Skonto handelt, macht dabei keinen Unterschied.'
},
{
  id:'ER8', modul:'M8', typ:'kette', stufe:3, titel:'Eingangsrechnung Büromaterial · mit Preisnachlass',
  tags:['Eingangsrechnung','Skonto','Preisnachlass','Zahlungsverkehr'],
  text:'Wir kaufen Büromaterial auf Ziel für 1.200,00 € netto zzgl. 19 % Umsatzsteuer. Wegen einer falschen Farbe erhalten wir nachträglich einen Preisnachlass von 25 % – das Material behalten wir. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 2 % Skonto. Buche den Rechnungseingang, den Nachlass und die Banküberweisung des Restbetrags für beide möglichen Fälle: a) Wir überweisen nach 30 Tagen ohne Abzug, oder b) wir überweisen innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'6800', betrag:1200}, {seite:'soll', konto:'2600', betrag:228}, {seite:'haben', konto:'4400', betrag:1428}]},
    {id:'minderung', titel:'Preisnachlass von 25 % wegen falscher Farbe',
     muster:[{seite:'soll', konto:'4400', betrag:357}, {seite:'haben', konto:'6800', betrag:300}, {seite:'haben', konto:'2600', betrag:57}]},
    {id:'zahlungOhne', titel:'Fall a) Überweisung Restbetrag ohne Skontoabzug',
     muster:[{seite:'soll', konto:'4400', betrag:1071}, {seite:'haben', konto:'2800', betrag:1071}]},
    {id:'zahlungMit', titel:'Fall b) Überweisung Restbetrag mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'4400', betrag:1071}, {seite:'haben', konto:'2800', betrag:1049.58},
             {seite:'haben', konto:'6800', betrag:18}, {seite:'haben', konto:'2600', betrag:3.42}]}
  ],
  hinweise:[
    'Wie bei der Geschäftsausstattung: 6800 hat kein eigenes Korrekturkonto. Nachlass und Skonto landen deshalb beide auf demselben Konto.',
    'Der Nachlass mindert 6800 direkt um 300,00 € (25 % von 1.200,00 €), dazu die anteilige Vorsteuer von 57,00 €. Für den Restbetrag von 1.071,00 € gilt anschließend das Skonto.',
    'Zahlung mit Skonto: Soll 4400 mit 1.071,00 €. Haben: 2800 Bank 1.049,58 €, 6800 Büromaterial 18,00 €, 2600 Vorsteuer 3,42 €.'
  ],
  merke:'Bei Konten ohne eigenes Korrekturkonto sieht die Zahlung mit Skonto fast genauso aus wie beim einfachen Rechnungseingang ohne Zwischenschritt – nur die Zahlen sind kleiner, weil sie sich auf den Restbetrag beziehen.'
},
{
  id:'ER9', modul:'M8', typ:'kette', stufe:3, titel:'Eingangsrechnung Handelswaren · Skontofrist prüfen',
  tags:['Eingangsrechnung','Skonto','Skontofrist','Handelswaren'],
  text:'Wir kaufen Handelswaren auf Ziel für 5.400,00 € netto zzgl. 19 % Umsatzsteuer. Rechnungsdatum: 24.04. Zahlungsbedingungen: 10 Tage 2 % Skonto, 30 Tage rein netto. Bezahlung am: 08.05. per Banküberweisung.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'6080', betrag:5400}, {seite:'soll', konto:'2600', betrag:1026}, {seite:'haben', konto:'4400', betrag:6426}]},
    {id:'zahlung', titel:'Überweisung am 08.05. buchen',
     muster:[{seite:'soll', konto:'4400', betrag:6426}, {seite:'haben', konto:'2800', betrag:6426}]}
  ],
  hinweise:[
    'Vergleiche Rechnungsdatum und Zahlungsdatum mit der Skontofrist. Für Fristen rechnet man jeden Monat mit 30 Tagen.',
    'Vom 24.04. bis zum 30.04. sind es 6 Tage, dazu 8 Tage im Mai – zusammen 14 Tage. Die Skontofrist von 10 Tagen ist abgelaufen.',
    'Wir überweisen also den vollen Rechnungsbetrag: Soll 4400 Verbindlichkeiten 6.426,00 €, Haben 2800 Bank 6.426,00 €.'
  ],
  merke:'Skonto darf nur abziehen, wer innerhalb der Skontofrist zahlt. Erst die Tage zählen, dann buchen.'
},
{
  id:'ER10', modul:'M8', typ:'kette', stufe:3, titel:'Eingangsrechnung Handelswaren · Rücksendung, Skontofrist prüfen',
  tags:['Eingangsrechnung','Skonto','Skontofrist','Rücksendung','Handelswaren'],
  text:'Wir kaufen Handelswaren auf Ziel für 10.000,00 € netto zzgl. 19 % Umsatzsteuer. Rechnungsdatum: 27.06. Zahlungsbedingungen: 10 Tage 2 % Skonto, 30 Tage rein netto. Wegen Beschädigung senden wir 10 % der Handelswaren an den Lieferanten zurück. Bezahlung des Restbetrags am: 04.07. per Banküberweisung.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'6080', betrag:10000}, {seite:'soll', konto:'2600', betrag:1900}, {seite:'haben', konto:'4400', betrag:11900}]},
    {id:'minderung', titel:'Rücksendung von 10 % wegen Beschädigung',
     muster:[{seite:'soll', konto:'4400', betrag:1190}, {seite:'haben', konto:'6082', betrag:1000}, {seite:'haben', konto:'2600', betrag:190}]},
    {id:'zahlung', titel:'Überweisung des Restbetrags am 04.07. buchen',
     muster:[{seite:'soll', konto:'4400', betrag:10710}, {seite:'haben', konto:'2800', betrag:10495.80},
             {seite:'haben', konto:'6083', betrag:180}, {seite:'haben', konto:'2600', betrag:34.20}]}
  ],
  hinweise:[
    'Vergleiche Rechnungsdatum und Zahlungsdatum mit der Skontofrist. Für Fristen rechnet man jeden Monat mit 30 Tagen.',
    'Vom 27.06. bis zum 30.06. sind es 3 Tage, dazu 4 Tage im Juli – zusammen 7 Tage. Wir zahlen innerhalb der Skontofrist und ziehen 2 % Skonto ab.',
    'Nach der Rücksendung schulden wir noch 10.710,00 €. 2 % Skonto davon sind 214,20 €: 180,00 € auf 6083 Skonto und 34,20 € Vorsteuerkorrektur auf 2600. Die Bank überweist 10.495,80 €.'
  ],
  merke:'Skonto wird vom Restbetrag nach der Rücksendung berechnet – und nur, wenn die Zahlung innerhalb der Skontofrist liegt.'
},
{
  id:'ER11', modul:'M8', typ:'kette', stufe:3, titel:'Überweisung nach Skonto · Handelswaren',
  tags:['Eingangsrechnung','Skonto','Zurückrechnen','Handelswaren'],
  text:'Wir haben Handelswaren auf Ziel gekauft. Der Rechnungseingang ist bereits gebucht. Wir überweisen den Rechnungsbetrag abzüglich 3 % Skonto. Der Überweisungsbetrag beträgt 11.543,00 €.',
  bloecke:[
    {id:'rb', titel:'Rechnungsbetrag ermitteln', typ:'rechnen',
     frage:'Wie hoch war der Rechnungsbetrag (brutto) vor dem Skontoabzug?',
     antwort:11900,
     tipp:'Der Überweisungsbetrag entspricht 97 % des Rechnungsbetrags.',
     rechenweg:'11.543,00 € entsprechen 97 %. 11.543,00 € ÷ 0,97 = <b>11.900,00 €</b> Rechnungsbetrag.'},
    {id:'zahlung', titel:'Überweisung buchen',
     muster:[{seite:'soll', konto:'4400', betrag:11900, formel:'rb'}, {seite:'haben', konto:'2800', betrag:11543},
             {seite:'haben', konto:'6083', betrag:300, formel:'(rb - 11543 * f) * 100 / 119'}, {seite:'haben', konto:'2600', betrag:57, formel:'(rb - 11543 * f) * 19 / 119'}]}
  ],
  hinweise:[
    'Der Überweisungsbetrag ist schon um das Skonto gekürzt. Wie viel Prozent des Rechnungsbetrags sind das?',
    '11.543,00 € sind 97 % – der Rechnungsbetrag ist 11.543,00 € ÷ 0,97 = 11.900,00 €. Das Skonto beträgt brutto 357,00 €.',
    'Das Bruttoskonto von 357,00 € wird aufgeteilt: 357,00 € ÷ 1,19 = 300,00 € auf 6083 Skonto, 57,00 € Vorsteuerkorrektur auf 2600. Die Verbindlichkeit wird mit 11.900,00 € ausgebucht.'
  ],
  merke:'Ist nur der Zahlbetrag nach Skonto bekannt, rechnet man zurück: Zahlbetrag ÷ (100 % − Skontosatz) = Rechnungsbetrag. Die Differenz ist das Bruttoskonto.'
},
{
  id:'ER12', modul:'M8', typ:'kette', stufe:3, titel:'Überweisung nach Skonto · Handelswaren',
  tags:['Eingangsrechnung','Skonto','Zurückrechnen','Handelswaren'],
  text:'Wir haben Handelswaren auf Ziel gekauft. Der Rechnungseingang ist bereits gebucht. Wir überweisen unter Abzug von 2 % Skonto 5.831,00 €.',
  bloecke:[
    {id:'zahlung', titel:'Überweisung buchen',
     muster:[{seite:'soll', konto:'4400', betrag:5950}, {seite:'haben', konto:'2800', betrag:5831},
             {seite:'haben', konto:'6083', betrag:100}, {seite:'haben', konto:'2600', betrag:19}]}
  ],
  hinweise:[
    'Die Verbindlichkeit steht noch in voller Höhe in den Büchern. Rechne aus dem Überweisungsbetrag zurück auf den Rechnungsbetrag.',
    '5.831,00 € sind 98 % – der Rechnungsbetrag ist 5.831,00 € ÷ 0,98 = 5.950,00 €. Das Bruttoskonto beträgt 119,00 €.',
    '119,00 € ÷ 1,19 = 100,00 € auf 6083 Skonto, 19,00 € auf 2600 Vorsteuer. Soll 4400 5.950,00 €, Haben 2800 5.831,00 €.'
  ],
  merke:'Die Verbindlichkeit wird immer mit dem vollen Rechnungsbetrag ausgebucht – auch wenn weniger überwiesen wird. Den Unterschied tragen Skonto- und Vorsteuerkonto.'
},

/* ---------- Modul 9 · Ausgangsrechnung: Skonto und Rücksendung ---------- */
{
  id:'AR1', modul:'M9', typ:'kette', stufe:1, titel:'Ausgangsrechnung Handelswaren · mit Skonto',
  tags:['Ausgangsrechnung','Skonto','Handelswaren'],
  text:'Wir verkaufen Handelswaren auf Ziel für 7.000,00 € netto zzgl. 19 % Umsatzsteuer. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 2 % Skonto. Buche die Ausgangsrechnung und den Zahlungseingang auf dem Bankkonto für beide möglichen Fälle: a) Der Kunde überweist nach 30 Tagen ohne Abzug, oder b) er überweist innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Ausgangsrechnung buchen',
     muster:[{seite:'soll', konto:'2400', betrag:8330}, {seite:'haben', konto:'5010', betrag:7000}, {seite:'haben', konto:'4800', betrag:1330}]},
    {id:'zahlungOhne', titel:'Fall a) Zahlungseingang per Überweisung ohne Skontoabzug',
     muster:[{seite:'soll', konto:'2800', betrag:8330}, {seite:'haben', konto:'2400', betrag:8330}]},
    {id:'zahlungMit', titel:'Fall b) Zahlungseingang per Überweisung mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'2800', betrag:8163.40}, {seite:'soll', konto:'5012', betrag:140},
             {seite:'soll', konto:'4800', betrag:26.60}, {seite:'haben', konto:'2400', betrag:8330}]}
  ],
  hinweise:[
    'Die Forderung entsteht in Höhe des Bruttobetrags. Erlös ist nur der Nettoanteil – die Steuer ist eine Schuld gegenüber dem Finanzamt, kein Ertrag.',
    'Zahlt der Kunde mit Skonto, bekommen wir weniger Geld, als die Forderung ausweist. Der Unterschiedsbetrag zerfällt in zwei Teile: weniger Erlös (5012) und weniger geschuldete Umsatzsteuer (4800) – beide Konten werden dadurch kleiner, also im Soll gebucht.',
    'Skonto von 2 % auf 8.330,00 € sind 166,60 €, davon 140,00 € Erlösminderung (5012) und 26,60 € Umsatzsteuerkorrektur (4800). Die Bank bekommt nur 8.163,40 €.'
  ],
  merke:'Auf der Verkaufsseite mindert Skonto den Erlös und die Umsatzsteuerschuld – beide werden im Soll gebucht, weil beide Konten dadurch kleiner werden.'
},
{
  id:'AR2', modul:'M9', typ:'kette', stufe:1, titel:'Ausgangsrechnung Handelswaren · mit Skonto',
  tags:['Ausgangsrechnung','Skonto','Handelswaren','Brutto/Netto'],
  text:'Wir verkaufen Handelswaren auf Ziel für 9.520,00 € inkl. 19 % Umsatzsteuer. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 3 % Skonto. Buche die Ausgangsrechnung und den Zahlungseingang auf dem Bankkonto für beide möglichen Fälle: a) Der Kunde überweist nach 30 Tagen ohne Abzug, oder b) er überweist innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Ausgangsrechnung buchen',
     muster:[{seite:'soll', konto:'2400', betrag:9520}, {seite:'haben', konto:'5010', betrag:8000}, {seite:'haben', konto:'4800', betrag:1520}]},
    {id:'zahlungOhne', titel:'Fall a) Zahlungseingang per Überweisung ohne Skontoabzug',
     muster:[{seite:'soll', konto:'2800', betrag:9520}, {seite:'haben', konto:'2400', betrag:9520}]},
    {id:'zahlungMit', titel:'Fall b) Zahlungseingang per Überweisung mit Abzug 3 % Skonto',
     muster:[{seite:'soll', konto:'2800', betrag:9234.40}, {seite:'soll', konto:'5012', betrag:240},
             {seite:'soll', konto:'4800', betrag:45.60}, {seite:'haben', konto:'2400', betrag:9520}]}
  ],
  hinweise:[
    'Hier steht „inkl. 19 % USt.“ – der angegebene Betrag ist bereits der Bruttobetrag. Rechne zuerst den Nettoerlös aus, bevor du die Rechnung buchst.',
    '9.520,00 € brutto entsprechen 119 %. Geteilt durch 1,19 ergibt das 8.000,00 € netto – das ist der Erlös. Die Differenz von 1.520,00 € ist die Umsatzsteuer.',
    'Skonto von 3 % auf 9.520,00 € sind 285,60 €: 240,00 € Erlösminderung (5012, Handelswaren) und 45,60 € Umsatzsteuerkorrektur.'
  ],
  merke:'Steht „inkl. USt.“ da, ist der genannte Betrag bereits brutto. Erst netto ausrechnen, dann buchen.',
  stolpersteine:['Angegebenen Betrag direkt als Erlös gebucht, obwohl er brutto war','5002 statt 5012 verwendet']
},
{
  id:'AR3', modul:'M9', typ:'kette', stufe:1, titel:'Ausgangsrechnung Handelswaren · mit Skonto (Brutto)',
  tags:['Ausgangsrechnung','Skonto','Handelswaren','Brutto/Netto'],
  text:'Wir verkaufen Handelswaren auf Ziel für 5.950,00 € inkl. 19 % Umsatzsteuer. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 2 % Skonto. Buche die Ausgangsrechnung und den Zahlungseingang auf dem Bankkonto für beide möglichen Fälle: a) Der Kunde überweist nach 30 Tagen ohne Abzug, oder b) er überweist innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Ausgangsrechnung buchen',
     muster:[{seite:'soll', konto:'2400', betrag:5950}, {seite:'haben', konto:'5010', betrag:5000}, {seite:'haben', konto:'4800', betrag:950}]},
    {id:'zahlungOhne', titel:'Fall a) Zahlungseingang per Überweisung ohne Skontoabzug',
     muster:[{seite:'soll', konto:'2800', betrag:5950}, {seite:'haben', konto:'2400', betrag:5950}]},
    {id:'zahlungMit', titel:'Fall b) Zahlungseingang per Überweisung mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'2800', betrag:5831}, {seite:'soll', konto:'5012', betrag:100},
             {seite:'soll', konto:'4800', betrag:19}, {seite:'haben', konto:'2400', betrag:5950}]}
  ],
  hinweise:[
    'Wieder ein Bruttobetrag. Wie viel davon ist Erlös, wie viel Umsatzsteuer?',
    '5.950,00 € ÷ 1,19 = 5.000,00 € netto, die Differenz von 950,00 € ist die Umsatzsteuer.',
    'Skonto von 2 % auf 5.950,00 € sind 119,00 €: 100,00 € Erlösminderung (5012), 19,00 € Umsatzsteuerkorrektur.'
  ],
  merke:'Egal ob netto oder brutto angegeben: Die Forderung entsteht immer in Höhe des Bruttobetrags, gebucht wird immer im Soll bei 2400.'
},
{
  id:'AR4', modul:'M9', typ:'kette', stufe:1, titel:'Ausgangsrechnung Handelswaren · mit Skonto',
  tags:['Ausgangsrechnung','Skonto','Handelswaren'],
  text:'Wir verkaufen Handelswaren auf Ziel für 4.800,00 € netto zzgl. 19 % Umsatzsteuer. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 3 % Skonto. Buche die Ausgangsrechnung und den Zahlungseingang auf dem Bankkonto für beide möglichen Fälle: a) Der Kunde überweist nach 30 Tagen ohne Abzug, oder b) er überweist innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Ausgangsrechnung buchen',
     muster:[{seite:'soll', konto:'2400', betrag:5712}, {seite:'haben', konto:'5010', betrag:4800}, {seite:'haben', konto:'4800', betrag:912}]},
    {id:'zahlungOhne', titel:'Fall a) Zahlungseingang per Überweisung ohne Skontoabzug',
     muster:[{seite:'soll', konto:'2800', betrag:5712}, {seite:'haben', konto:'2400', betrag:5712}]},
    {id:'zahlungMit', titel:'Fall b) Zahlungseingang per Überweisung mit Abzug 3 % Skonto',
     muster:[{seite:'soll', konto:'2800', betrag:5540.64}, {seite:'soll', konto:'5012', betrag:144},
             {seite:'soll', konto:'4800', betrag:27.36}, {seite:'haben', konto:'2400', betrag:5712}]}
  ],
  hinweise:[
    'Handelswaren haben ihr eigenes Skontokonto 5012 – Skonto wird nicht direkt auf 5010 gebucht.',
    'Skonto mindert Erlös und Umsatzsteuer. Beide werden im Soll gebucht, weil beide Konten dadurch kleiner werden.',
    'Skonto: 3 % von 5.712,00 € = 171,36 €, davon 144,00 € auf 5012 Skonto und 27,36 € Umsatzsteuerkorrektur.'
  ],
  merke:'Skonto beim Warenverkauf kommt auf das eigene Unterkonto 5012 – nicht auf 5010 selbst.'
},
{
  id:'AR5', modul:'M9', typ:'kette', stufe:2, titel:'Ausgangsrechnung Handelswaren · mit Rücksendung',
  tags:['Ausgangsrechnung','Skonto','Rücksendung','Handelswaren'],
  text:'Wir verkaufen Handelswaren auf Ziel für 11.000,00 € netto zzgl. 19 % Umsatzsteuer. Der Kunde sendet wegen eines Mangels 20 % der Ware zurück. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 2 % Skonto. Buche die Ausgangsrechnung, die Rücksendung und den Zahlungseingang des Restbetrags auf dem Bankkonto für beide möglichen Fälle: a) Der Kunde überweist nach 30 Tagen ohne Abzug, oder b) er überweist innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Ausgangsrechnung buchen',
     muster:[{seite:'soll', konto:'2400', betrag:13090}, {seite:'haben', konto:'5010', betrag:11000}, {seite:'haben', konto:'4800', betrag:2090}]},
    {id:'minderung', titel:'Rücksendung von 20 % wegen Mangel',
     muster:[{seite:'soll', konto:'5011', betrag:2200}, {seite:'soll', konto:'4800', betrag:418}, {seite:'haben', konto:'2400', betrag:2618}]},
    {id:'zahlungOhne', titel:'Fall a) Zahlungseingang per Überweisung Restbetrag ohne Skontoabzug',
     muster:[{seite:'soll', konto:'2800', betrag:10472}, {seite:'haben', konto:'2400', betrag:10472}]},
    {id:'zahlungMit', titel:'Fall b) Zahlungseingang per Überweisung Restbetrag mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'2800', betrag:10262.56}, {seite:'soll', konto:'5012', betrag:176},
             {seite:'soll', konto:'4800', betrag:33.44}, {seite:'haben', konto:'2400', betrag:10472}]}
  ],
  hinweise:[
    'Der Kunde schickt Ware zurück. Gibt es für Handelswaren ein eigenes Konto für Rücksendungen?',
    'Ja: 5011 Nachlässe und Rücksendungen. 20 % von 11.000,00 € = 2.200,00 € werden dort im Soll gebucht, dazu die anteilige Umsatzsteuer von 418,00 €. Die Forderung sinkt um den Bruttobetrag von 2.618,00 €.',
    'Für die Zahlung zählt nur noch der Restbetrag von 10.472,00 € (13.090,00 € − 2.618,00 €). Das Skonto von 2 % bezieht sich auf diesen Restbetrag.'
  ],
  merke:'Gibt es ein Konto für Rücksendungen – hier 5011 Nachlässe und Rücksendungen –, wird die Rücksendung dort gebucht: im Soll, weil sie den Erlös mindert.'
},
{
  id:'AR6', modul:'M9', typ:'kette', stufe:2, titel:'Ausgangsrechnung Handelswaren · mit Preisnachlass',
  tags:['Ausgangsrechnung','Skonto','Preisnachlass','Handelswaren','Brutto/Netto'],
  text:'Wir verkaufen Handelswaren auf Ziel für 13.328,00 € inkl. 19 % Umsatzsteuer. Wegen kleinerer Mängel gewähren wir dem Kunden einen Preisnachlass von 10 % – die Ware bleibt beim Kunden. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 3 % Skonto. Buche die Ausgangsrechnung, den Nachlass und den Zahlungseingang des Restbetrags auf dem Bankkonto für beide möglichen Fälle: a) Der Kunde überweist nach 30 Tagen ohne Abzug, oder b) er überweist innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Ausgangsrechnung buchen',
     muster:[{seite:'soll', konto:'2400', betrag:13328}, {seite:'haben', konto:'5010', betrag:11200}, {seite:'haben', konto:'4800', betrag:2128}]},
    {id:'minderung', titel:'Preisnachlass von 10 % wegen kleinerer Mängel',
     muster:[{seite:'soll', konto:'5011', betrag:1120}, {seite:'soll', konto:'4800', betrag:212.80}, {seite:'haben', konto:'2400', betrag:1332.80}]},
    {id:'zahlungOhne', titel:'Fall a) Zahlungseingang per Überweisung Restbetrag ohne Skontoabzug',
     muster:[{seite:'soll', konto:'2800', betrag:11995.20}, {seite:'haben', konto:'2400', betrag:11995.20}]},
    {id:'zahlungMit', titel:'Fall b) Zahlungseingang per Überweisung Restbetrag mit Abzug 3 % Skonto',
     muster:[{seite:'soll', konto:'2800', betrag:11635.34, formel:'11200 * f * 0.9 * 1.19 - 11200 * f * 0.9 * 0.03 - round(11200 * f * 0.9 * 0.19 * 0.03)'}, {seite:'soll', konto:'5012', betrag:302.40},
             {seite:'soll', konto:'4800', betrag:57.46, formel:'round(11200 * f * 0.9 * 0.19 * 0.03)'}, {seite:'haben', konto:'2400', betrag:11995.20}]}
  ],
  hinweise:[
    'Zuerst der Nettoerlös: 13.328,00 € brutto ÷ 1,19 = 11.200,00 € netto. Die Ware bleibt beim Kunden – nur der Preis wird nachträglich gesenkt. Welches Konto passt zu einer reinen Preiskorrektur?',
    'Handelswaren haben dafür ein eigenes Konto: 5011 Nachlässe und Rücksendungen – trotz des Namens auch für reine Preisnachlässe zuständig, nicht nur für tatsächliche Rücksendungen.',
    'Der Nachlass mindert die Forderung um 1.332,80 € (10 % von 13.328,00 €). Für den Rest von 11.995,20 € zählt anschließend das Skonto von 3 %.'
  ],
  merke:'5001/5011 heißen „Nachlässe und Rücksendungen“ – sie gelten für beides: für eine reine Preiskorrektur genauso wie für eine tatsächliche Rücksendung.',
  stolpersteine:['Nachlass auf das Hauptkonto 5010 statt auf 5011 gebucht','Skonto-Prozentsatz auf den ursprünglichen statt auf den geminderten Betrag angewendet']
},
{
  id:'AR7', modul:'M9', typ:'kette', stufe:3, titel:'Ausgangsrechnung Handelswaren · mit Rücksendung (Brutto)',
  tags:['Ausgangsrechnung','Skonto','Rücksendung','Handelswaren','Brutto/Netto'],
  text:'Wir verkaufen Handelswaren auf Ziel für 7.140,00 € inkl. 19 % Umsatzsteuer. Der Kunde sendet wegen eines Mangels 25 % der Ware zurück. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 2 % Skonto. Buche die Ausgangsrechnung, die Rücksendung und den Zahlungseingang des Restbetrags auf dem Bankkonto für beide möglichen Fälle: a) Der Kunde überweist nach 30 Tagen ohne Abzug, oder b) er überweist innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Ausgangsrechnung buchen',
     muster:[{seite:'soll', konto:'2400', betrag:7140}, {seite:'haben', konto:'5010', betrag:6000}, {seite:'haben', konto:'4800', betrag:1140}]},
    {id:'minderung', titel:'Rücksendung von 25 % wegen Mangel',
     muster:[{seite:'soll', konto:'5011', betrag:1500}, {seite:'soll', konto:'4800', betrag:285}, {seite:'haben', konto:'2400', betrag:1785}]},
    {id:'zahlungOhne', titel:'Fall a) Zahlungseingang per Überweisung Restbetrag ohne Skontoabzug',
     muster:[{seite:'soll', konto:'2800', betrag:5355}, {seite:'haben', konto:'2400', betrag:5355}]},
    {id:'zahlungMit', titel:'Fall b) Zahlungseingang per Überweisung Restbetrag mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'2800', betrag:5247.90}, {seite:'soll', konto:'5012', betrag:90},
             {seite:'soll', konto:'4800', betrag:17.10}, {seite:'haben', konto:'2400', betrag:5355}]}
  ],
  hinweise:[
    'Zwei Dinge gleichzeitig: Der Bruttobetrag muss zuerst aufgeteilt werden, und die Rücksendung kommt auf das Konto für Rücksendungen.',
    '7.140,00 € ÷ 1,19 = 6.000,00 € netto. 25 % davon, also 1.500,00 €, kommen als Rücksendung auf 5011 Nachlässe und Rücksendungen – zusammen mit der anteiligen Umsatzsteuer von 285,00 €.',
    'Restforderung: 7.140,00 € − 1.785,00 € = 5.355,00 €. Darauf beziehen sich die beiden Zahlungsvarianten.'
  ],
  merke:'Eine Rücksendung mindert den Erlös anteilig – gebucht auf 5011 Nachlässe und Rücksendungen, unabhängig davon, ob die Rechnung netto oder brutto angegeben war.'
},
{
  id:'AR8', modul:'M9', typ:'kette', stufe:3, titel:'Ausgangsrechnung Handelswaren · mit Preisnachlass',
  tags:['Ausgangsrechnung','Skonto','Preisnachlass','Handelswaren'],
  text:'Wir verkaufen Handelswaren auf Ziel für 8.800,00 € netto zzgl. 19 % Umsatzsteuer. Wegen einer verspäteten Lieferung gewähren wir dem Kunden einen Preisnachlass von 15 % – die Ware bleibt beim Kunden. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 3 % Skonto. Buche die Ausgangsrechnung, den Nachlass und den Zahlungseingang des Restbetrags auf dem Bankkonto für beide möglichen Fälle: a) Der Kunde überweist nach 30 Tagen ohne Abzug, oder b) er überweist innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Ausgangsrechnung buchen',
     muster:[{seite:'soll', konto:'2400', betrag:10472}, {seite:'haben', konto:'5010', betrag:8800}, {seite:'haben', konto:'4800', betrag:1672}]},
    {id:'minderung', titel:'Preisnachlass von 15 % wegen verspäteter Lieferung',
     muster:[{seite:'soll', konto:'5011', betrag:1320}, {seite:'soll', konto:'4800', betrag:250.80}, {seite:'haben', konto:'2400', betrag:1570.80}]},
    {id:'zahlungOhne', titel:'Fall a) Zahlungseingang per Überweisung Restbetrag ohne Skontoabzug',
     muster:[{seite:'soll', konto:'2800', betrag:8901.20}, {seite:'haben', konto:'2400', betrag:8901.20}]},
    {id:'zahlungMit', titel:'Fall b) Zahlungseingang per Überweisung Restbetrag mit Abzug 3 % Skonto',
     muster:[{seite:'soll', konto:'2800', betrag:8634.16, formel:'8800 * f * 0.85 * 1.19 - 8800 * f * 0.85 * 0.03 - round(8800 * f * 0.85 * 0.19 * 0.03)'}, {seite:'soll', konto:'5012', betrag:224.40},
             {seite:'soll', konto:'4800', betrag:42.64, formel:'round(8800 * f * 0.85 * 0.19 * 0.03)'}, {seite:'haben', konto:'2400', betrag:8901.20}]}
  ],
  hinweise:[
    'Auch ein Nachlass wegen verspäteter Lieferung ist eine reine Preiskorrektur – die Ware selbst kommt nicht zurück.',
    'Deshalb gehört der Nachlass auf 5011, nicht auf 5010. 15 % von 8.800,00 € netto sind 1.320,00 €, dazu die anteilige Umsatzsteuer von 250,80 €.',
    'Restforderung: 10.472,00 € − 1.570,80 € = 8.901,20 €. Das Skonto von 3 % bezieht sich auf diesen Restbetrag.'
  ],
  merke:'Der Grund für die Minderung – Mangel, Verspätung, Kulanz – ändert nichts an der Buchung. Entscheidend ist nur: Kommt Ware zurück, oder bleibt sie beim Kunden?'
},
{
  id:'AR9', modul:'M9', typ:'kette', stufe:3, titel:'Ausgangsrechnung Handelswaren · Skontofrist prüfen',
  tags:['Ausgangsrechnung','Skonto','Skontofrist','Handelswaren'],
  text:'Wir verkaufen Handelswaren auf Ziel für 8.500,00 € netto zzgl. 19 % Umsatzsteuer. Rechnungsdatum: 18.09. Zahlungsbedingungen: 10 Tage 2 % Skonto, 30 Tage rein netto. Bezahlung durch den Kunden am: 26.09. per Banküberweisung.',
  bloecke:[
    {id:'eingang', titel:'Ausgangsrechnung buchen',
     muster:[{seite:'soll', konto:'2400', betrag:10115}, {seite:'haben', konto:'5010', betrag:8500}, {seite:'haben', konto:'4800', betrag:1615}]},
    {id:'zahlung', titel:'Zahlungseingang am 26.09. buchen',
     muster:[{seite:'soll', konto:'2800', betrag:9912.70}, {seite:'soll', konto:'5012', betrag:170},
             {seite:'soll', konto:'4800', betrag:32.30}, {seite:'haben', konto:'2400', betrag:10115}]}
  ],
  hinweise:[
    'Vergleiche Rechnungsdatum und Zahlungsdatum mit der Skontofrist. Für Fristen rechnet man jeden Monat mit 30 Tagen.',
    'Vom 18.09. bis zum 26.09. sind es 8 Tage. Der Kunde zahlt innerhalb der Skontofrist und zieht 2 % Skonto ab.',
    '2 % Skonto von 10.115,00 € sind 202,30 €: 170,00 € Erlösminderung auf 5012 und 32,30 € Umsatzsteuerkorrektur auf 4800. Auf der Bank gehen 9.912,70 € ein.'
  ],
  merke:'Zieht der Kunde berechtigt Skonto ab, mindern sich Erlös und Umsatzsteuer – beide im Soll.'
},
{
  id:'AR10', modul:'M9', typ:'kette', stufe:3, titel:'Ausgangsrechnung Handelswaren · Preisnachlass, Skontofrist prüfen',
  tags:['Ausgangsrechnung','Skonto','Skontofrist','Preisnachlass','Handelswaren'],
  text:'Wir verkaufen Handelswaren auf Ziel für 12.000,00 € netto zzgl. 19 % Umsatzsteuer. Rechnungsdatum: 23.11. Zahlungsbedingungen: 10 Tage 2 % Skonto, 30 Tage rein netto. Wegen kleinerer Mängel gewähren wir dem Kunden nachträglich einen Preisnachlass von 5 %. Bezahlung des Restbetrags durch den Kunden am: 01.12. per Banküberweisung.',
  bloecke:[
    {id:'eingang', titel:'Ausgangsrechnung buchen',
     muster:[{seite:'soll', konto:'2400', betrag:14280}, {seite:'haben', konto:'5010', betrag:12000}, {seite:'haben', konto:'4800', betrag:2280}]},
    {id:'minderung', titel:'Preisnachlass von 5 % wegen kleinerer Mängel',
     muster:[{seite:'soll', konto:'5011', betrag:600}, {seite:'soll', konto:'4800', betrag:114}, {seite:'haben', konto:'2400', betrag:714}]},
    {id:'zahlung', titel:'Zahlungseingang des Restbetrags am 01.12. buchen',
     muster:[{seite:'soll', konto:'2800', betrag:13294.68}, {seite:'soll', konto:'5012', betrag:228},
             {seite:'soll', konto:'4800', betrag:43.32}, {seite:'haben', konto:'2400', betrag:13566}]}
  ],
  hinweise:[
    'Vergleiche Rechnungsdatum und Zahlungsdatum mit der Skontofrist. Für Fristen rechnet man jeden Monat mit 30 Tagen.',
    'Vom 23.11. bis zum 30.11. sind es 7 Tage, dazu 1 Tag im Dezember – zusammen 8 Tage. Der Kunde zahlt innerhalb der Skontofrist.',
    'Nach dem Nachlass beträgt die Forderung noch 13.566,00 €. 2 % Skonto davon sind 271,32 €: 228,00 € auf 5012 Skonto und 43,32 € auf 4800. Auf der Bank gehen 13.294,68 € ein.'
  ],
  merke:'Erst die Minderung, dann das Skonto: Skonto rechnet man vom Restbetrag – und nur innerhalb der Skontofrist.'
},
{
  id:'AR11', modul:'M9', typ:'kette', stufe:3, titel:'Zahlungseingang nach Skonto · Handelswaren',
  tags:['Ausgangsrechnung','Skonto','Zurückrechnen','Handelswaren'],
  text:'Wir haben Handelswaren auf Ziel verkauft. Die Ausgangsrechnung ist bereits gebucht. Der Kunde überweist unter Abzug von 1 % Skonto 11.781,00 €.',
  bloecke:[
    {id:'rb', titel:'Rechnungsbetrag ermitteln', typ:'rechnen',
     frage:'Wie hoch war der Rechnungsbetrag (brutto) vor dem Skontoabzug?',
     antwort:11900,
     tipp:'Der Zahlungseingang entspricht 99 % des Rechnungsbetrags.',
     rechenweg:'11.781,00 € entsprechen 99 %. 11.781,00 € ÷ 0,99 = <b>11.900,00 €</b> Rechnungsbetrag.'},
    {id:'zahlung', titel:'Zahlungseingang buchen',
     muster:[{seite:'soll', konto:'2800', betrag:11781}, {seite:'soll', konto:'5012', betrag:100, formel:'(rb - 11781 * f) * 100 / 119'},
             {seite:'soll', konto:'4800', betrag:19, formel:'(rb - 11781 * f) * 19 / 119'}, {seite:'haben', konto:'2400', betrag:11900, formel:'rb'}]}
  ],
  hinweise:[
    'Der Kunde hat schon abgezogen. Wie viel Prozent des Rechnungsbetrags sind bei uns angekommen?',
    '11.781,00 € sind 99 % – der Rechnungsbetrag ist 11.781,00 € ÷ 0,99 = 11.900,00 €. Das Skonto beträgt brutto 119,00 €.',
    '119,00 € ÷ 1,19 = 100,00 € Erlösminderung auf 5002, 19,00 € Umsatzsteuerkorrektur auf 4800. Die Forderung wird mit 11.900,00 € ausgebucht.'
  ],
  merke:'Aus dem Zahlungseingang nach Skonto zurückrechnen: Zahlbetrag ÷ (100 % − Skontosatz) = Rechnungsbetrag. Die Forderung erlischt in voller Höhe.'
},
{
  id:'AR12', modul:'M9', typ:'kette', stufe:3, titel:'Zahlungseingang nach Skonto · Handelswaren',
  tags:['Ausgangsrechnung','Skonto','Zurückrechnen','Handelswaren'],
  text:'Wir haben Handelswaren auf Ziel verkauft. Die Ausgangsrechnung ist bereits gebucht. Der Kunde überweist unter Abzug von 2 % Skonto 8.746,50 €.',
  bloecke:[
    {id:'zahlung', titel:'Zahlungseingang buchen',
     muster:[{seite:'soll', konto:'2800', betrag:8746.50}, {seite:'soll', konto:'5012', betrag:150},
             {seite:'soll', konto:'4800', betrag:28.50}, {seite:'haben', konto:'2400', betrag:8925}]}
  ],
  hinweise:[
    'Die Forderung steht noch in voller Höhe in den Büchern. Rechne aus dem Zahlungseingang zurück auf den Rechnungsbetrag.',
    '8.746,50 € sind 98 % – der Rechnungsbetrag ist 8.746,50 € ÷ 0,98 = 8.925,00 €. Das Bruttoskonto beträgt 178,50 €.',
    '178,50 € ÷ 1,19 = 150,00 € auf 5012 Skonto, 28,50 € auf 4800 Umsatzsteuer. Haben 2400 8.925,00 €, Soll 2800 8.746,50 €.'
  ],
  merke:'Die Forderung wird immer mit dem vollen Rechnungsbetrag ausgebucht. Was der Kunde weniger zahlt, mindert Erlös und Umsatzsteuer.'
},

/* ---------- Modul 10 · Anlagenkauf und Abschreibung ---------- */
{
  id:'AB1', modul:'M10', typ:'kette', stufe:1, titel:'Maschine kaufen und abschreiben',
  tags:['Anlagenkauf','Skonto','Abschreibung','Anschaffungskosten'],
  text:'Am 1. Juli kaufen wir eine Maschine auf Ziel für 24.000,00 € netto zzgl. 19 % Umsatzsteuer. Wir überweisen den Rechnungsbetrag unter Abzug von 2 % Skonto. Die Nutzungsdauer beträgt 8 Jahre, linear abgeschrieben.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'0710', betrag:24000}, {seite:'soll', konto:'2600', betrag:4560}, {seite:'haben', konto:'4400', betrag:28560}]},
    {id:'zahlung', titel:'Überweisung mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'4400', betrag:28560}, {seite:'haben', konto:'2800', betrag:27988.80},
             {seite:'haben', konto:'0710', betrag:480}, {seite:'haben', konto:'2600', betrag:91.20}]},
    {id:'ak', titel:'Anschaffungskosten ermitteln', typ:'rechnen',
     frage:'Wie hoch sind die Anschaffungskosten der Maschine?',
     antwort:23520,
     tipp:'Anschaffungskosten = Nettopreis minus der Nettoanteil des Skontos.',
     rechenweg:'24.000,00 € Nettopreis − 480,00 € Skonto (netto) = <b>23.520,00 €</b> Anschaffungskosten.'},
    {id:'afa', titel:'Abschreibung zum 31.12. buchen',
     muster:[{seite:'soll', konto:'6500', betrag:1470, formel:'ak / 8 * 6 / 12'}, {seite:'haben', konto:'0710', betrag:1470, formel:'ak / 8 * 6 / 12'}]}
  ],
  hinweise:[
    'Skonto ist ein nachträglicher Preisnachlass. Bei einem Anlagegut zählt er nicht als Aufwand, sondern mindert die Anschaffungskosten selbst – und damit alles, was darauf aufbaut.',
    'Ein Wirtschaftsgut wird nicht automatisch für zwölf Monate abgeschrieben, wenn es unterjährig angeschafft wurde.',
    'Ermittle selbst, wie viele volle Monate zwischen dem Anschaffungsdatum (einschließlich des Anschaffungsmonats) und dem 31.12. liegen, und rechne die Jahres-AfA entsprechend herunter.'
  ],
  merke:'Skonto beim Anlagenkauf mindert die Anschaffungskosten, nicht einen Aufwand. Im Jahr der Anschaffung wird nur für die tatsächliche Nutzungsdauer abgeschrieben – nicht für 12 Monate.',
  stolpersteine:['Skonto als Ertrag statt als Minderung der Anschaffungskosten behandelt','Volle Jahres-AfA statt zeitanteiliger AfA gebucht']
},
{
  id:'AB2', modul:'M10', typ:'kette', stufe:2, titel:'Geschäftsausstattung kaufen und abschreiben',
  tags:['Anlagenkauf','Skonto','Abschreibung','Anschaffungskosten'],
  text:'Am 30. März kaufen wir neue Büromöbel (Geschäftsausstattung) auf Ziel für 9.100,00 € netto zzgl. 19 % Umsatzsteuer. Wir überweisen den Rechnungsbetrag unter Abzug von 2 % Skonto. Die Nutzungsdauer beträgt 13 Jahre, linear abgeschrieben.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'0870', betrag:9100}, {seite:'soll', konto:'2600', betrag:1729}, {seite:'haben', konto:'4400', betrag:10829}]},
    {id:'zahlung', titel:'Überweisung mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'4400', betrag:10829}, {seite:'haben', konto:'2800', betrag:10612.42},
             {seite:'haben', konto:'0870', betrag:182}, {seite:'haben', konto:'2600', betrag:34.58}]},
    {id:'ak', titel:'Anschaffungskosten ermitteln', typ:'rechnen',
     frage:'Wie hoch sind die Anschaffungskosten der Büromöbel?',
     antwort:8918,
     tipp:'Anschaffungskosten = Nettopreis minus der Nettoanteil des Skontos.',
     rechenweg:'9.100,00 € Nettopreis − 182,00 € Skonto (netto) = <b>8.918,00 €</b> Anschaffungskosten.'},
    {id:'afa', titel:'Abschreibung zum 31.12. buchen',
     muster:[{seite:'soll', konto:'6500', betrag:571.67, formel:'ak / 13 * 10 / 12'}, {seite:'haben', konto:'0870', betrag:571.67, formel:'ak / 13 * 10 / 12'}]}
  ],
  hinweise:[
    'Büromöbel gelten in der Regel als langlebiger als andere Geschäftsausstattung – deshalb die vergleichsweise lange Nutzungsdauer von 13 Jahren.',
    'Auch wenn der Kauf erst gegen Monatsende erfolgt, zählt der Anschaffungsmonat trotzdem als voller Monat für die Abschreibung.',
    'Ermittle selbst, wie viele volle Monate zwischen dem 30. März (einschließlich März) und dem 31.12. liegen, und rechne die Jahres-AfA entsprechend herunter.'
  ],
  merke:'Die Nutzungsdauer hängt vom konkreten Gegenstand ab – nicht jede Geschäftsausstattung wird gleich lange genutzt.'
},
{
  id:'AB3', modul:'M10', typ:'kette', stufe:2, titel:'Firmenwagen kaufen und abschreiben',
  tags:['Anlagenkauf','Skonto','Abschreibung','Anschaffungskosten','Fuhrpark'],
  text:'Am 25. September kaufen wir einen Firmenwagen auf Ziel für 30.000,00 € netto zzgl. 19 % Umsatzsteuer. Wir überweisen den Rechnungsbetrag unter Abzug von 2 % Skonto. Die Nutzungsdauer beträgt 6 Jahre, linear abgeschrieben.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'0840', betrag:30000}, {seite:'soll', konto:'2600', betrag:5700}, {seite:'haben', konto:'4400', betrag:35700}]},
    {id:'zahlung', titel:'Überweisung mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'4400', betrag:35700}, {seite:'haben', konto:'2800', betrag:34986},
             {seite:'haben', konto:'0840', betrag:600}, {seite:'haben', konto:'2600', betrag:114}]},
    {id:'ak', titel:'Anschaffungskosten ermitteln', typ:'rechnen',
     frage:'Wie hoch sind die Anschaffungskosten des Firmenwagens?',
     antwort:29400,
     tipp:'Anschaffungskosten = Nettopreis minus der Nettoanteil des Skontos.',
     rechenweg:'30.000,00 € Nettopreis − 600,00 € Skonto (netto) = <b>29.400,00 €</b> Anschaffungskosten.'},
    {id:'afa', titel:'Abschreibung zum 31.12. buchen',
     muster:[{seite:'soll', konto:'6500', betrag:1633.33, formel:'ak / 6 * 4 / 12'}, {seite:'haben', konto:'0840', betrag:1633.33, formel:'ak / 6 * 4 / 12'}]}
  ],
  hinweise:[
    'Ein Pkw wird in der Praxis üblicherweise über 6 Jahre abgeschrieben.',
    'Der Wagen wurde erst gegen Monatsende im September gekauft – zählt September deshalb weniger, oder trotzdem voll?',
    'Der Anschaffungsmonat zählt immer voll, ganz gleich an welchem Tag gekauft wurde. Ermittle selbst, wie viele volle Monate von September bis zum 31.12. vergehen, und rechne die Jahres-AfA entsprechend herunter.'
  ],
  merke:'Je später im Jahr angeschafft wird, desto geringer fällt die Abschreibung im ersten Jahr aus – auch wenn Anschaffungskosten und Nutzungsdauer gleich blieben.'
},
{
  id:'AB4', modul:'M10', typ:'kette', stufe:3, titel:'Gabelstapler kaufen und abschreiben',
  tags:['Anlagenkauf','Skonto','Abschreibung','Anschaffungskosten'],
  text:'Am 30. August kaufen wir einen Gabelstapler (Lager- und Transporteinrichtung) auf Ziel für 16.660,00 € inkl. 19 % Umsatzsteuer. Wir überweisen den Rechnungsbetrag unter Abzug von 2 % Skonto. Die Nutzungsdauer beträgt 8 Jahre, linear abgeschrieben.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'0830', betrag:14000}, {seite:'soll', konto:'2600', betrag:2660}, {seite:'haben', konto:'4400', betrag:16660}]},
    {id:'zahlung', titel:'Überweisung mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'4400', betrag:16660}, {seite:'haben', konto:'2800', betrag:16326.80},
             {seite:'haben', konto:'0830', betrag:280}, {seite:'haben', konto:'2600', betrag:53.20}]},
    {id:'afa', titel:'Abschreibung zum 31.12. buchen',
     muster:[{seite:'soll', konto:'6500', betrag:714.58, formel:'14000 * f * 0.98 / 8 * 5 / 12'}, {seite:'haben', konto:'0830', betrag:714.58, formel:'14000 * f * 0.98 / 8 * 5 / 12'}]}
  ],
  hinweise:[
    'Ein Gabelstapler gehört zur Lager- und Transporteinrichtung – ein eigenes Anlagenkonto, getrennt vom Fuhrpark. Und: Der angegebene Betrag ist diesmal brutto.',
    'Der Stapler wurde erst gegen Monatsende im August gekauft. Zählt der Monat trotzdem voll?',
    'Ja – der Anschaffungsmonat zählt immer voll. Den Rest musst du selbst rechnen: erst den Nettopreis aus dem Bruttobetrag, dann Anschaffungskosten, Jahres-AfA und die Monate bis zum 31.12.'
  ],
  merke:'Ein Fahrzeug ist nicht automatisch Fuhrpark: Fahrzeuge zur Personenbeförderung gehören zum Fuhrpark, Fahrzeuge zum innerbetrieblichen Transport zur Lager- und Transporteinrichtung.',
  stolpersteine:['Gabelstapler auf 0840 Fuhrpark statt auf 0830 gebucht']
},

/* ---------- Modul 11 · Anschaffungskosten ermitteln ---------- */
{
  id:'AK1', modul:'M11', typ:'anschaffungskosten', stufe:1, titel:'Anschaffungskosten einer Maschine',
  tags:['Anschaffungskosten','Nebenkosten','Skonto'],
  text:'Für eine neue Maschine liegen folgende Kostenpositionen vor. Ordne zu, was zu den Anschaffungskosten gehört, und ermittle anschließend die Anschaffungskosten insgesamt.',
  posten:[
    {label:'Kaufpreis, zzgl. 19 % USt.', wert:40000, dazu:true},
    {label:'Transportkosten, zzgl. 19 % USt.', wert:800, dazu:true},
    {label:'Montage, zzgl. 19 % USt.', wert:1200, dazu:true},
    {label:'Inbetriebnahme, zzgl. 19 % USt.', wert:500, dazu:true},
    {label:'Vorsteuer (19 % auf die Nettobeträge)', wert:8075, dazu:false,
     grund:'Vorsteuer ist eine Forderung gegenüber dem Finanzamt (Konto 2600) und wird gesondert gebucht. Die Anschaffungskosten werden immer netto ermittelt – die Umsatzsteuer gehört nie dazu.'},
    {label:'Schulung der Mitarbeiter an der neuen Maschine', wert:600, dazu:false,
     grund:'Die Schulung macht die Maschine nicht betriebsbereit, sondern die Mitarbeiter sachkundig. Das ist laufender Personalaufwand, kein Bestandteil der Anschaffungskosten.'},
    {label:'2 % Skonto auf den Kaufpreis (netto)', wert:-800, dazu:true,
     grund:'Skonto mindert die Anschaffungskosten – es ist keine laufende Ausgabe, sondern reduziert direkt, was die Maschine tatsächlich gekostet hat.'}
  ],
  hinweise:[
    'Jede Position ist zzgl. 19 % USt. angegeben – die genannten Beträge sind bereits netto. Eine Position in der Liste ist die Umsatzsteuer selbst. Gehört sie zu den Anschaffungskosten?',
    'Anschaffungskosten sind alles, was nötig ist, damit die Maschine betriebsbereit wird – immer netto betrachtet. Vorsteuer ist keine Ausgabe für die Maschine, sondern eine Forderung ans Finanzamt, und die Schulung macht nicht die Maschine, sondern die Mitarbeiter sachkundig.',
    'Anschaffungskosten: 40.000,00 € + 800,00 € + 1.200,00 € + 500,00 € − 800,00 € (Skonto) = 41.700,00 €. Vorsteuer und Schulung bleiben außen vor.'
  ],
  merke:'Anschaffungskosten werden immer netto ermittelt. Die Umsatzsteuer – ob als Vorsteuer beim Einkauf oder als Umsatzsteuer beim Verkauf – gehört nie dazu, auch wenn sie auf derselben Rechnung steht.'
},
{
  id:'AK2', modul:'M11', typ:'anschaffungskosten', stufe:2, titel:'Anschaffungskosten eines Firmenwagens',
  tags:['Anschaffungskosten','Nebenkosten','Rabatt','Fuhrpark'],
  text:'Für einen neuen Firmenwagen liegen folgende Kostenpositionen vor. Ordne zu, was zu den Anschaffungskosten gehört, und ermittle anschließend die Anschaffungskosten insgesamt. Achte darauf, welche Beträge netto und welche brutto angegeben sind.',
  posten:[
    {label:'Listenpreis, zzgl. 19 % USt.', wert:32000, dazu:true},
    {label:'Sonderausstattung, zzgl. 19 % USt.', wert:2500, dazu:true},
    {label:'Überführung, inkl. 19 % USt.', anzeige:714, wert:600, dazu:true,
     grund:'Die Überführung ist brutto angegeben. Für die Anschaffungskosten zählt nur der Nettoanteil: 714,00 € ÷ 1,19 = 600,00 €.'},
    {label:'Zulassung (Gebühr, keine USt.)', wert:150, dazu:true,
     grund:'Ohne Zulassung darf der Wagen nicht gefahren werden – sie gehört zu den Kosten, die nötig sind, um das Fahrzeug einsatzbereit zu machen.'},
    {label:'Werbeaufdruck, zzgl. 19 % USt.', wert:400, dazu:true,
     grund:'Ein dauerhaft angebrachter Werbeaufdruck gehört üblicherweise zu den Anschaffungskosten, da er Teil der Ausstattung des Fahrzeugs wird. (In der Praxis wird er gelegentlich auch als eigenständiger Werbeaufwand gebucht – beide Sichtweisen sind vertretbar, hier zählt die häufigere Variante.)'},
    {label:'Kfz-Steuer (erstes Jahr, keine USt.)', wert:300, dazu:false,
     grund:'Die Kfz-Steuer ist eine laufende jährliche Steuer für die Haltung des Fahrzeugs, keine Ausgabe für die Anschaffung selbst.'},
    {label:'Kfz-Haftpflichtversicherung (erstes Jahr)', wert:900, dazu:false,
     grund:'Versicherungsbeiträge laufen mit der Nutzung mit, Jahr für Jahr – sie gehören nicht zu den einmaligen Anschaffungskosten.'},
    {label:'Erstbetankung', wert:60, dazu:false,
     grund:'Kraftstoff wird beim Fahren sofort verbraucht – anders als etwa Schmierstoffe bei einer Maschine macht er das Fahrzeug nicht erst betriebsbereit, sondern wird laufend nachgekauft.'},
    {label:'Finanzierungskosten (Zinsen)', wert:850, dazu:false,
     grund:'Zinsen sind der Preis für geliehenes Geld, nicht für das Fahrzeug selbst. Sie sind Finanzierungsaufwand, unabhängig davon, was damit angeschafft wird.'},
    {label:'5 % Rabatt auf den Listenpreis', wert:-1600, dazu:true,
     grund:'Ein Rabatt mindert die Anschaffungskosten genau wie Skonto – er reduziert, was das Fahrzeug tatsächlich gekostet hat.'}
  ],
  hinweise:[
    'Vier Positionen gehören nicht zu den Anschaffungskosten. Frage bei jeder: Ist das eine einmalige Ausgabe für die Anschaffung, oder eine laufende Kosten der Nutzung? Und: Eine Position ist brutto angegeben – erkennst du, welche?',
    'Steuer, Versicherung und Zinsen fallen Jahr für Jahr an – sie laufen mit der Nutzung mit. Die Erstbetankung ist zwar einmalig, aber Kraftstoff wird laufend verbraucht, nicht wie das Fahrzeug selbst dauerhaft genutzt. Die Überführung ist als einzige Position inklusive Umsatzsteuer angegeben.',
    'Überführung netto: 714,00 € ÷ 1,19 = 600,00 €. Anschaffungskosten: 32.000,00 € + 2.500,00 € + 600,00 € + 150,00 € + 400,00 € − 1.600,00 € (Rabatt) = 34.050,00 €.'
  ],
  merke:'Entscheidend ist nicht, ob eine Kosten mit dem Kauf zusammenhängt, sondern ob sie einmalig für die Anschaffung anfällt oder laufend für die Nutzung. Steuern, Versicherungen und Zinsen sind immer laufender Aufwand.',
  stolpersteine:['Zulassung als laufende Kosten statt als Anschaffungskosten behandelt','Kfz-Steuer oder Versicherung fälschlich zu den Anschaffungskosten gezählt']
},
{
  id:'AK3', modul:'M11', typ:'anschaffungskosten', stufe:3, titel:'Anschaffungskosten eines Grundstücks',
  tags:['Anschaffungskosten','Nebenkosten','Grundstück','Brutto/Netto'],
  text:'Für den Kauf eines unbebauten Grundstücks liegen folgende Kostenpositionen vor. Ordne zu, was zu den Anschaffungskosten gehört, und ermittle anschließend die Anschaffungskosten insgesamt.',
  posten:[
    {label:'Kaufpreis des Grundstücks', wert:300000, dazu:true},
    {label:'Notargebühren netto', wert:6000, dazu:true,
     grund:'Ohne Notar ist der Grundstückskauf rechtlich nicht wirksam – die Gebühr gehört zu den Kosten, die für den Erwerb notwendig sind. Es zählt der Nettobetrag.'},
    {label:'Notargebühren inkl. 19 % USt.', wert:7140, dazu:false,
     grund:'Das ist dieselbe Notargebühr mit Umsatzsteuer. Die Umsatzsteuer holen wir uns als Vorsteuer vom Finanzamt zurück – zu den Anschaffungskosten zählt nur der Nettobetrag von 6.000,00 €.'},
    {label:'Maklerprovision netto', wert:9000, dazu:true,
     grund:'Die Maklerprovision gehört zu den Anschaffungskosten – mit dem Nettobetrag.'},
    {label:'Maklerprovision inkl. 19 % USt.', wert:10710, dazu:false,
     grund:'Das ist dieselbe Provision mit Umsatzsteuer. Die Umsatzsteuer ist Vorsteuer und damit kein Teil der Anschaffungskosten – es zählt nur der Nettobetrag von 9.000,00 €.'},
    {label:'Grundbucheintrag', wert:1200, dazu:true,
     grund:'Ohne Grundbucheintrag gehört das Grundstück rechtlich nicht dem Käufer – auch diese Gebühr ist für den Erwerb notwendig.'},
    {label:'Grunderwerbsteuer', wert:15000, dazu:true,
     grund:'Die Grunderwerbsteuer fällt einmalig beim Erwerb an und ist unmittelbare Folge des Kaufs – sie gehört zu den Anschaffungskosten.'},
    {label:'Grundsteuer (laufend, erstes Jahr)', wert:2400, dazu:false,
     grund:'Die Grundsteuer ist eine laufende jährliche Steuer für den Besitz des Grundstücks, keine einmalige Ausgabe für den Erwerb.'},
    {label:'Finanzierungskosten (Zinsen)', wert:8000, dazu:false,
     grund:'Zinsen sind der Preis für das geliehene Geld, nicht für das Grundstück. Sie zählen nicht zu den Anschaffungskosten, egal wie hoch der Kaufpreis finanziert wurde.'}
  ],
  hinweise:[
    'Fünf Positionen gehören zu den Anschaffungskosten, vier nicht. Notar und Makler stehen doppelt da – nur einer der beiden Beträge kann stimmen. Bei den beiden Steuern hilft eine Frage: Fällt sie einmalig beim Kauf an, oder Jahr für Jahr?',
    'Grunderwerbsteuer fällt einmalig beim Kauf an und gehört zu den Anschaffungskosten. Grundsteuer dagegen ist eine laufende Steuer für den Besitz – sie läuft weiter, solange das Grundstück gehört, unabhängig vom Kauf.',
    'Von Notar und Makler zählen nur die Nettobeträge (6.000,00 € und 9.000,00 €), die Umsatzsteuer ist Vorsteuer. Anschaffungskosten: 300.000,00 € + 6.000,00 € + 9.000,00 € + 1.200,00 € + 15.000,00 € = 331.200,00 €.'
  ],
  merke:'Grunderwerbsteuer gehört zu den Anschaffungskosten, Grundsteuer nicht – beide heißen ähnlich, meinen aber grundverschiedene Dinge. Bei brutto angegebenen Positionen zählt für die Anschaffungskosten immer nur der Nettobetrag.',
  stolpersteine:['Grunderwerbsteuer mit Grundsteuer verwechselt','Notar oder Makler brutto statt netto eingerechnet']
},

/* ---------- Modul 12 · Vorübung: Wechsel degressiv → linear ---------- */
{
  id:'AK4', modul:'M11', typ:'kette', stufe:2, titel:'Nebenkosten buchen (Fortsetzung von AK1)',
  tags:['Anschaffungskosten','Nebenkosten','Skonto','Buchen'],
  text:'In AK1 hast du bereits ermittelt, welche Kosten zu den Anschaffungskosten der Maschine gehören: Kaufpreis 40.000,00 €, Transportkosten 800,00 €, Montage 1.200,00 € und Inbetriebnahme 500,00 € – alle zzgl. 19 % USt., abzüglich 2 % Skonto auf den Kaufpreis. Jetzt wird daraus ein echter Buchungssatz. Alle vier Positionen stehen auf einer gemeinsamen Rechnung.',
  bloecke:[
    {id:'rechnung', titel:'Rechnung buchen (Kaufpreis und Nebenkosten)',
     muster:[{seite:'soll', konto:'0710', betrag:42500}, {seite:'soll', konto:'2600', betrag:8075}, {seite:'haben', konto:'4400', betrag:50575}]},
    {id:'zahlung', titel:'Überweisung mit Abzug 2 % Skonto (auf den Kaufpreis)',
     muster:[{seite:'soll', konto:'4400', betrag:50575}, {seite:'haben', konto:'2800', betrag:49623},
             {seite:'haben', konto:'0710', betrag:800}, {seite:'haben', konto:'2600', betrag:152}]}
  ],
  hinweise:[
    'Alle vier Kostenpositionen aus AK1 gehören auf dasselbe Konto – welches war das noch?',
    'Kaufpreis, Transport, Montage und Inbetriebnahme werden alle auf 0710 Maschinen aktiviert: 40.000,00 € + 800,00 € + 1.200,00 € + 500,00 € = 42.500,00 € netto. Dazu die Vorsteuer von 8.075,00 €.',
    'Bei der Zahlung mindert der Skonto wieder direkt 0710 – wie in den Modulen 11 und 13 gelernt, weil es kein eigenes Skontokonto für Anlagegüter gibt. Skontobetrag: 800,00 € netto, 152,00 € Vorsteuerkorrektur.'
  ],
  merke:'Erst zuordnen, dann buchen: Alle Anschaffungsnebenkosten landen auf demselben Konto wie der Kaufpreis selbst – ganz gleich, von wie vielen verschiedenen Rechnungen sie stammen.'
},

/* ---------- Modul 17 · Rückstellungen bilden und auflösen ---------- */
/* ---------- Modul 13 · Bewertung des Umlaufvermögens (gewichteter Durchschnitt) ---------- */
/* ---------- Modul 14 · Herstellungskosten (§ 255 Abs. 2 HGB) ---------- */
/* ---------- Modul 15 · Bewertung von Forderungen ---------- */
/* ---------- Bewertung von Forderungen · Buchungen ----------
   Insolvenzeröffnung: Umsatzsteuer sofort berichtigen (4800 an 2400), die Forderung steht dann netto da.
   Keine Umbuchung auf 2410 Zweifelhafte Forderungen (wäre möglich, wird hier bewusst weggelassen).
   Ausfall direkt über 6951; Geldeingang über Erwarten im Folgejahr über 5470.
   tausch: Im Test und Training werden Fall a und Fall b vertauscht: im Test nach Wahl der Lehrkraft in der Vorschau, im Prüfungstraining zufällig. */
/* ---------- Modul 16 · Rechnungsabgrenzung und antizipative Posten ---------- */
/* ---------- Modul 18 · Bewertung von Fremdwährungsverbindlichkeiten ---------- */
/* ---------- Modul · Außerplanmäßige Abschreibung und Wertaufholung ---------- */
/* ---------- Modul 12 · Degressive Abschreibung ---------- */
/* ---------- Modul 13 · Geringwertige Wirtschaftsgüter ----------
   Wertgrenzen (netto): bis 250 € sofort Aufwand · über 250 € bis 800 € GWG (0890, Sofortabschreibung 6540)
   · über 250 € bis 1.000 € wahlweise Sammelposten (0891, jährlich 20 % über 6540) · darüber normale AfA.
   Gesetzliche Grenzen stehen im Text ohne Cent („800 €“), damit sie bei neuen Zahlen nicht mitwandern.
   gwg: Nettobeträge, die beim Variieren in ihrem Wertbereich bleiben müssen. */
/* ---------- Modul · Verkauf von Anlagevermögen ----------
   Schulkontenrahmen Industrie BW: Buchgewinn über 5461 Erlöse / 5460 Erträge aus dem Abgang,
   Buchverlust über 6961 Erlöse / 6960 Verluste aus dem Abgang. Vier Buchungen:
   1. Verkauf (2800 bzw. 2400 an 5461/6961 und 4800)  2. Restbuchwert ausbuchen (5460/6960 an Anlagekonto)
   3. Erlöskonto abschließen (5461 an 5460 bzw. 6961 an 6960)  4. Ergebnis über die GuV (5460 an 8020 bzw. 8020 an 6960)
   AfA immer linear, bis zum Verkauf bereits gebucht. Den Verkaufsmonat darf man noch abschreiben, muss es aber nicht:
   beide Restbuchwerte sind richtig (Rechenblock: alternativen, Buchungen: muster2). Gewinn- und Verlustfälle wechseln sich ab;
   „inkl. USt.“ täuscht bei Verlustfällen einen Gewinn vor (brutto über, netto unter dem Restbuchwert). */
/* ---------- Modul · Kauf von Umlaufvermögen mit Bezugskosten ----------
   Gegenstück zu „Anschaffungskosten ermitteln“: Beim Anlagevermögen werden Nebenkosten aktiviert (Anlagekonto),
   beim Umlaufvermögen laufen sie über das Unterkonto Bezugskosten (6081 bei Handelswaren).
   Skonto und Preisnachlass betreffen nur den Warenwert – außer der Lieferant gewährt Skonto auf den ganzen Rechnungsbetrag. */
{
  id:'BT1', modul:'M11B', typ:'berechnung', stufe:0, titel:'Fracht für Handelswaren',
  tags:['Bezugskosten','Theorie','Handelswaren'],
  text:'Ein Spediteur liefert uns Handelswaren und stellt die Fracht gesondert in Rechnung.',
  frage:'Auf welchem Konto wird die Fracht (netto) gebucht?',
  optionen:[
    {text:'6081 Bezugskosten', richtig:true,
     weg:'Fracht für eingekaufte Handelswaren sind Bezugskosten. Sie erhöhen den Einstandspreis und werden auf dem Unterkonto 6081 gesammelt.'},
    {text:'6080 Aufwendungen für Handelswaren',
     fehler:'Die Bezugskosten gehören zwar zum Warenaufwand, werden aber auf dem eigenen Unterkonto 6081 erfasst – so bleiben sie sichtbar.'},
    {text:'6140 Frachten und Fremdlagerkosten',
     fehler:'6140 nimmt Frachten auf, die wir beim Verkauf für den Versand an Kunden zahlen (Ausgangsfrachten). Eingangsfrachten sind Bezugskosten.'},
    {text:'0710 Maschinen',
     fehler:'Auf ein Anlagekonto kommen nur Nebenkosten von Anlagegütern. Handelswaren sind Umlaufvermögen.'}
  ],
  hinweise:[
    'Gekauft wird Umlaufvermögen. Wofür fällt die Fracht an – für den Einkauf oder für den Verkauf?',
    'Eingangsfrachten gehören zum Einkauf und erhöhen den Einstandspreis der Handelswaren.',
    'Konto: 6081 Bezugskosten, ein Unterkonto von 6080.'
  ],
  merke:'Bezugskosten beim Einkauf von Handelswaren: 6081 (Unterkonto von 6080). Frachten beim Versand an Kunden: 6140.'
},
{
  id:'BT2', modul:'M11B', typ:'berechnung', stufe:0, titel:'Fracht für eine Maschine',
  tags:['Bezugskosten','Anschaffungsnebenkosten','Theorie','Vergleich'],
  text:'Ein Spediteur liefert eine neue Maschine und stellt die Fracht gesondert in Rechnung.',
  frage:'Wie wird die Fracht (netto) gebucht?',
  optionen:[
    {text:'Auf 0710 Maschinen – sie gehört zu den Anschaffungskosten', richtig:true,
     weg:'Nebenkosten eines Anlageguts werden aktiviert: Sie erhöhen die Anschaffungskosten und werden über die Nutzungsdauer abgeschrieben.'},
    {text:'Auf 6081 Bezugskosten',
     fehler:'6081 gilt für Handelswaren – also Umlaufvermögen. Die Maschine ist Anlagevermögen; ihre Nebenkosten gehören auf das Anlagekonto.'},
    {text:'Auf 6140 Frachten und Fremdlagerkosten',
     fehler:'6140 ist für Ausgangsfrachten beim Verkauf. Diese Fracht fällt beim Kauf an.'},
    {text:'Auf 6500 Abschreibungen auf Sachanlagen',
     fehler:'Abgeschrieben wird erst am Jahresende – und zwar die gesamten Anschaffungskosten einschließlich der Fracht.'}
  ],
  hinweise:[
    'Anlagevermögen oder Umlaufvermögen? Davon hängt das Konto ab.',
    'Bei Anlagegütern gehören alle Kosten, um das Gut betriebsbereit zu machen, zu den Anschaffungskosten.',
    'Die Fracht wird auf 0710 Maschinen aktiviert.'
  ],
  merke:'Anlagevermögen: Nebenkosten aufs Anlagekonto (aktivieren). Umlaufvermögen: Bezugskosten aufs Unterkonto 6081.'
},
{
  id:'BT3', modul:'M11B', typ:'berechnung', stufe:0, titel:'Skonto auf den Warenwert',
  tags:['Bezugskosten','Skonto','Theorie'],
  text:'Eine Eingangsrechnung enthält Handelswaren und Transportkosten. Der Lieferant gewährt 2 % Skonto auf den Warenwert.',
  frage:'Was wird durch den Skontoabzug gemindert?',
  optionen:[
    {text:'Nur die Waren (über 6083 Skonto) und die darauf entfallende Vorsteuer – die Transportkosten bleiben unverändert', richtig:true,
     weg:'Gilt der Skonto nur für den Warenwert, wird er nur vom Warenpreis berechnet. Die Bezugskosten auf 6081 bleiben in voller Höhe stehen.'},
    {text:'Waren und Transportkosten anteilig',
     fehler:'Das gilt nur, wenn Skonto auf den gesamten Rechnungsbetrag gewährt wird. Hier ist ausdrücklich der Warenwert genannt.'},
    {text:'Nur die Transportkosten',
     fehler:'Skonto ist ein Preisnachlass auf die Ware – nicht auf die Fracht.'},
    {text:'Nur die Vorsteuer',
     fehler:'Der Skonto mindert immer auch den Nettobetrag; die Vorsteuer wird nur anteilig mitkorrigiert.'}
  ],
  hinweise:[
    'Lies genau, worauf der Skonto gewährt wird.',
    'Warenwert heißt: nur der Preis der Waren, ohne Transport.',
    'Gemindert werden 6083 Skonto und die anteilige Vorsteuer.'
  ],
  merke:'Skonto auf den Warenwert berührt die Bezugskosten nicht. Skonto auf den Rechnungsbetrag wird vom gesamten Betrag berechnet.'
},
{
  id:'BZ1', modul:'M11B', typ:'kette', stufe:1, titel:'Handelswaren mit gesonderter Frachtrechnung',
  tags:['Bezugskosten','Handelswaren','Eingangsrechnung'],
  text:'Wir kaufen Handelswaren auf Ziel für 8.000,00 € netto zzgl. 19 % Umsatzsteuer. Für den Transport stellt uns der Spediteur 300,00 € netto zzgl. 19 % Umsatzsteuer gesondert in Rechnung (ebenfalls auf Ziel).',
  bloecke:[
    {id:'eingang', titel:'Rechnung des Lieferanten buchen',
     muster:[{seite:'soll', konto:'6080', betrag:8000}, {seite:'soll', konto:'2600', betrag:1520}, {seite:'haben', konto:'4400', betrag:9520}]},
    {id:'fracht', titel:'Rechnung des Spediteurs buchen',
     muster:[{seite:'soll', konto:'6081', betrag:300}, {seite:'soll', konto:'2600', betrag:57}, {seite:'haben', konto:'4400', betrag:357}]}
  ],
  hinweise:[
    'Die Fracht gehört zum Einkauf der Handelswaren. Gibt es für Handelswaren ein eigenes Konto für Nebenkosten?',
    'Eingangsfrachten für Handelswaren sind Bezugskosten: 6001.',
    'Soll 6081 Bezugskosten 300,00 € und 2600 Vorsteuer 57,00 €, Haben 4400 357,00 €.'
  ],
  merke:'Bezugskosten für Handelswaren werden auf 6081 gebucht – auch wenn sie von einem anderen Unternehmen (Spediteur) in Rechnung gestellt werden.'
},
{
  id:'BZ2', modul:'M11B', typ:'kette', stufe:1, titel:'Handelswaren mit Bezugskosten in einer Rechnung',
  tags:['Bezugskosten','Handelswaren','Eingangsrechnung'],
  text:'Wir kaufen Handelswaren auf Ziel. Die Rechnung des Lieferanten enthält den Warenwert von 5.000,00 € und Verpackung und Fracht von 250,00 €, jeweils netto zzgl. 19 % Umsatzsteuer.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'6080', betrag:5000}, {seite:'soll', konto:'6081', betrag:250}, {seite:'soll', konto:'2600', betrag:997.50}, {seite:'haben', konto:'4400', betrag:6247.50}]}
  ],
  hinweise:[
    'Warenwert und Nebenkosten stehen in einer Rechnung, werden aber auf verschiedenen Konten gebucht.',
    'Bezugskosten für Handelswaren: 6081. Die Vorsteuer wird vom gesamten Nettobetrag berechnet.',
    'Soll 6080 5.000,00 €, 6081 250,00 €, 2600 997,50 €; Haben 4400 6.247,50 €.'
  ],
  merke:'Auch in einer gemeinsamen Rechnung werden Warenwert und Bezugskosten getrennt gebucht: 6080 und 6081.'
},
{
  id:'BZ3', modul:'M11B', typ:'kette', stufe:2, titel:'Handelswaren · Verpackung in der Rechnung, Fracht bar',
  tags:['Bezugskosten','Handelswaren','Brutto/Netto'],
  text:'Wir kaufen Handelswaren auf Ziel. Die Rechnung des Lieferanten enthält Handelswaren für 6.000,00 € und Einwegverpackung für 150,00 €, jeweils netto zzgl. 19 % Umsatzsteuer. Die Fracht bezahlen wir dem Spediteur bei Anlieferung bar: 238,00 € inkl. 19 % Umsatzsteuer.',
  bloecke:[
    {id:'eingang', titel:'Rechnung des Lieferanten buchen',
     muster:[{seite:'soll', konto:'6080', betrag:6000}, {seite:'soll', konto:'6081', betrag:150}, {seite:'soll', konto:'2600', betrag:1168.50}, {seite:'haben', konto:'4400', betrag:7318.50}]},
    {id:'fracht', titel:'Barzahlung der Fracht buchen',
     muster:[{seite:'soll', konto:'6081', betrag:200}, {seite:'soll', konto:'2600', betrag:38}, {seite:'haben', konto:'2820', betrag:238}]}
  ],
  hinweise:[
    'Verpackung und Fracht sind beide Bezugskosten. Achte darauf, welcher Betrag netto und welcher brutto angegeben ist.',
    'Fracht: 238,00 € ÷ 1,19 = 200,00 € netto, 38,00 € Vorsteuer. Bezahlt wird bar.',
    'Rechnung: 6080 6.000,00 €, 6001 150,00 €, 2600 1.168,50 € an 4400 7.318,50 €. Fracht: 6081 200,00 €, 2600 38,00 € an 2820 238,00 €.'
  ],
  merke:'Alle Nebenkosten des Einkaufs – Fracht, Verpackung, Rollgeld – sind Bezugskosten, gleich ob sie in der Lieferantenrechnung stehen oder gesondert bezahlt werden.'
},
{
  id:'BZ4', modul:'M11B', typ:'kette', stufe:3, titel:'Handelswaren mit Transportkosten · Skonto auf Warenwert oder Rechnungsbetrag',
  tags:['Bezugskosten','Handelswaren','Skonto','Vergleich'],
  text:'<b>Auszug aus der Eingangsrechnung</b> (Kauf auf Ziel):'
    + '<table class="lager"><tr><td>Handelswaren</td><td class="z">15.000,00 €</td></tr><tr><td>Transport und Versand</td><td class="z">200,00 €</td></tr>'
    + '<tr><td>gesamt netto</td><td class="z">15.200,00 €</td></tr><tr><td>zzgl. 19 % Umsatzsteuer</td><td class="z">2.888,00 €</td></tr>'
    + '<tr><td><b>Rechnungsbetrag</b></td><td class="z"><b>18.088,00 €</b></td></tr></table>'
    + 'Wir überweisen innerhalb der Skontofrist unter Abzug von 2 % Skonto. Buche den Rechnungseingang und die Überweisung für beide möglichen Fälle: a) Der Lieferant gewährt Skonto nur auf den Warenwert, b) der Lieferant gewährt Skonto auf den Rechnungsbetrag.',
  lesartText:'wenn der Skontoanteil der Transportkosten die Bezugskosten mindert',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'6080', betrag:15000}, {seite:'soll', konto:'6081', betrag:200}, {seite:'soll', konto:'2600', betrag:2888}, {seite:'haben', konto:'4400', betrag:18088}]},
    {id:'skontoWare', titel:'Fall a) Überweisung, Skonto auf den Warenwert',
     muster:[{seite:'soll', konto:'4400', betrag:18088}, {seite:'haben', konto:'2800', betrag:17731}, {seite:'haben', konto:'6083', betrag:300}, {seite:'haben', konto:'2600', betrag:57}]},
    {id:'skontoRechnung', titel:'Fall b) Überweisung, Skonto auf den Rechnungsbetrag',
     muster:[{seite:'soll', konto:'4400', betrag:18088}, {seite:'haben', konto:'2800', betrag:17726.24}, {seite:'haben', konto:'6083', betrag:304}, {seite:'haben', konto:'2600', betrag:57.76}],
     muster2:[{seite:'soll', konto:'4400', betrag:18088}, {seite:'haben', konto:'2800', betrag:17726.24}, {seite:'haben', konto:'6083', betrag:300}, {seite:'haben', konto:'6081', betrag:4}, {seite:'haben', konto:'2600', betrag:57.76}]}
  ],
  hinweise:[
    'Der Unterschied steckt in der Bemessungsgrundlage: einmal nur der Warenpreis, einmal der gesamte Rechnungsbetrag.',
    'Fall a: 2 % von 15.000,00 € = 300,00 € netto, Vorsteuer 57,00 €, überwiesen werden 17.731,00 €. Fall b: 2 % von 18.088,00 € = 361,76 € brutto, davon 304,00 € netto und 57,76 € Vorsteuer, überwiesen werden 17.726,24 €.',
    'Die Verbindlichkeit wird in beiden Fällen mit 18.088,00 € ausgebucht. Der Unterschied liegt nur in Bank, Skonto und Vorsteuer.'
  ],
  merke:'Skonto auf den Warenwert: nur vom Preis der Ware. Skonto auf den Rechnungsbetrag: vom Bruttobetrag einschließlich der Bezugskosten – die Vorsteuerkorrektur steckt dann schon im Skontobetrag.'
},
{
  id:'BZ5', modul:'M11B', typ:'kette', stufe:3, titel:'Handelswaren mit Bezugskosten · Preisnachlass und Skonto',
  tags:['Bezugskosten','Handelswaren','Preisnachlass','Skonto'],
  text:'Wir kaufen Handelswaren auf Ziel: Warenwert 10.000,00 €, Fracht 300,00 €, jeweils netto zzgl. 19 % Umsatzsteuer. Wegen kleinerer Mängel gewährt uns der Lieferant nachträglich einen Preisnachlass von 10 % auf den Warenwert. Den Restbetrag überweisen wir innerhalb der Skontofrist unter Abzug von 2 % Skonto auf den verbleibenden Warenwert.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'6080', betrag:10000}, {seite:'soll', konto:'6081', betrag:300}, {seite:'soll', konto:'2600', betrag:1957}, {seite:'haben', konto:'4400', betrag:12257}]},
    {id:'minderung', titel:'Preisnachlass von 10 % buchen',
     muster:[{seite:'soll', konto:'4400', betrag:1190}, {seite:'haben', konto:'6082', betrag:1000}, {seite:'haben', konto:'2600', betrag:190}]},
    {id:'zahlung', titel:'Überweisung mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'4400', betrag:11067}, {seite:'haben', konto:'2800', betrag:10852.80}, {seite:'haben', konto:'6083', betrag:180}, {seite:'haben', konto:'2600', betrag:34.20}]}
  ],
  hinweise:[
    'Preisnachlass und Skonto beziehen sich hier nur auf den Warenwert. Die Fracht bleibt unberührt.',
    'Nachlass: 10 % von 10.000,00 € = 1.000,00 € netto, 190,00 € Vorsteuer. Es bleiben 11.067,00 € Verbindlichkeit, davon 9.000,00 € Warenwert.',
    'Skonto: 2 % von 9.000,00 € = 180,00 € netto, 34,20 € Vorsteuer. Überwiesen werden 11.067,00 € − 214,20 € = 10.852,80 €.'
  ],
  merke:'Erst die Preisminderung, dann das Skonto – und beide nur vom Warenwert, wenn nichts anderes vereinbart ist. Die Bezugskosten bleiben stehen.'
},

/* ---------- Modul 7 · Erfolgskonten abschließen ---------- */
{
  id:'ET1', modul:'M6E', typ:'berechnung', stufe:0, titel:'Wohin mit den Erfolgskonten?',
  tags:['Abschluss','GuV','Theorie'],
  text:'Zum Jahresende werden alle Aufwands- und Ertragskonten abgeschlossen.',
  frage:'Über welches Konto werden sie abgeschlossen?',
  optionen:[
    {text:'Über das Gewinn- und Verlustkonto (GuV).', richtig:true,
     weg:'Aufwendungen und Erträge werden im GuV-Konto gesammelt. Dort zeigt sich, ob das Jahr mit Gewinn oder Verlust endet.'},
    {text:'Über das Schlussbilanzkonto (SBK).',
     fehler:'Das SBK nimmt die Bestandskonten auf – Vermögen und Kapital. Aufwand und Ertrag gehören nicht in die Bilanz.'},
    {text:'Direkt über das Eigenkapitalkonto.',
     fehler:'Am Ende landet der Erfolg zwar im Eigenkapital, aber erst über den Umweg GuV. Nur so wird sichtbar, wie Gewinn oder Verlust zustande kamen.'},
    {text:'Gar nicht – Erfolgskonten werden ins nächste Jahr vorgetragen.',
     fehler:'Erfolgskonten beginnen jedes Jahr bei null. Vorgetragen werden nur die Bestandskonten.'}
  ],
  hinweise:[
    'Aufwand und Ertrag sind keine Bestände. Wo werden sie einander gegenübergestellt?',
    'Das Ergebnis des Jahres entsteht aus Aufwendungen und Erträgen – dafür gibt es ein eigenes Abschlusskonto.',
    'Das Konto heißt Gewinn- und Verlustkonto, kurz GuV.'
  ],
  merke:'Bestandskonten → SBK. Erfolgskonten → GuV. Der Saldo der GuV geht ins Eigenkapital.'
},
{
  id:'ET2', modul:'M6E', typ:'berechnung', stufe:0, titel:'Was zeigt das GuV-Konto?',
  tags:['Abschluss','GuV','Gewinn','Theorie'],
  text:'Nach dem Abschluss der Erfolgskonten stehen im GuV-Konto 95.000 € Aufwendungen im Soll und 110.000 € Erträge im Haben.',
  frage:'Was gilt?',
  optionen:[
    {text:'Es entsteht ein Gewinn von 15.000 €. Gebucht wird: GuV an Eigenkapital.', richtig:true,
     weg:'Die Erträge sind höher als die Aufwendungen. Der Gewinn gleicht die Sollseite der GuV aus und mehrt das Eigenkapital.'},
    {text:'Es entsteht ein Verlust von 15.000 €. Gebucht wird: Eigenkapital an GuV.',
     fehler:'Mehr Ertrag als Aufwand bedeutet Gewinn, nicht Verlust.'},
    {text:'Es entsteht ein Gewinn von 15.000 €. Gebucht wird: GuV an SBK.',
     fehler:'Der Gewinn gehört dem Eigentümer. Er geht deshalb ins Eigenkapital – erst das Eigenkapital wird über das SBK abgeschlossen.'},
    {text:'Es entsteht ein Gewinn von 205.000 €.',
     fehler:'Aufwendungen und Erträge werden nicht addiert, sondern gegeneinander gerechnet.'}
  ],
  hinweise:[
    'Vergleiche die beiden Seiten des GuV-Kontos: Welche ist größer?',
    'Der Saldo steht immer auf der kleineren Seite. Wohin wird er gegengebucht?',
    'Erträge 110.000 € − Aufwendungen 95.000 € = 15.000 € Gewinn; Gegenkonto ist das Eigenkapital.'
  ],
  merke:'Gewinn: GuV an Eigenkapital. Verlust: Eigenkapital an GuV.'
},
{
  id:'ET3', modul:'M6E', typ:'berechnung', stufe:0, titel:'Ein Verlust im Jahresabschluss',
  tags:['Abschluss','GuV','Verlust','Theorie'],
  text:'Im GuV-Konto sind die Aufwendungen höher als die Erträge.',
  frage:'Wie wird der Saldo des GuV-Kontos gebucht?',
  optionen:[
    {text:'Eigenkapital an GuV', richtig:true,
     weg:'Ein Verlust mindert das Eigenkapital. Minderungen eines Passivkontos stehen im Soll, also Eigenkapital an GuV.'},
    {text:'GuV an Eigenkapital',
     fehler:'Das ist die Buchung bei einem Gewinn.'},
    {text:'SBK an GuV',
     fehler:'Der Verlust trifft den Eigentümer, nicht direkt die Bilanz. Er läuft über das Eigenkapital.'},
    {text:'GuV an Bank',
     fehler:'Ein Verlust ist kein Zahlungsvorgang. Es fließt kein Geld.'}
  ],
  hinweise:[
    'Bei einem Verlust ist die Habenseite der GuV kleiner. Auf welcher Seite steht dann der Saldo?',
    'Ein Verlust mindert das Eigenkapital. Auf welcher Seite steht eine Minderung des Eigenkapitals?',
    'Eigenkapital im Soll, GuV im Haben.'
  ],
  merke:'Der Verlust steht in der GuV im Haben und mindert das Eigenkapital im Soll.'
},
{
  id:'EA1', modul:'M6E', typ:'kette', stufe:1, titel:'Erfolgskonten abschließen · Beispiel 1',
  tags:['Abschluss','GuV','Gewinn'],
  text:'Zum 31.12. weisen die Erfolgskonten folgende Salden aus:<table class="lager"><tr><th>Konto</th><th class="z">Saldo</th></tr><tr><td>5010 Umsatzerlöse Handelswaren</td><td class="z">186.000,00 €</td></tr><tr><td>5710 Zinserträge</td><td class="z">2.400,00 €</td></tr><tr><td>6080 Aufwendungen für Handelswaren</td><td class="z">74.000,00 €</td></tr><tr><td>6300 Gehälter</td><td class="z">58.000,00 €</td></tr><tr><td>6700 Mietaufwendungen</td><td class="z">18.000,00 €</td></tr></table>Schließe die Konten 6080 und 5010 ab. Ermittle danach das Ergebnis aus allen Salden und schließe das GuV-Konto ab.',
  bloecke:[
    {id:'aufwand', titel:'Konto 6080 Aufwendungen für Handelswaren abschließen',
     muster:[{seite:'soll', konto:'8020', betrag:74000}, {seite:'haben', konto:'6080', betrag:74000}]},
    {id:'ertrag', titel:'Konto 5010 Umsatzerlöse Handelswaren abschließen',
     muster:[{seite:'soll', konto:'5010', betrag:186000}, {seite:'haben', konto:'8020', betrag:186000}]},
    {id:'ergebnis', titel:'Ergebnis ermitteln', typ:'rechnen',
     frage:'Wie hoch ist das Ergebnis des Geschäftsjahres? Berücksichtige alle Erfolgskonten.',
     antwort:38400,
     tipp:'Stelle die Summe aller Erträge der Summe aller Aufwendungen gegenüber.',
     rechenweg:'Erträge 186.000,00 € + 2.400,00 € = 188.400,00 € · Aufwendungen 74.000,00 € + 58.000,00 € + 18.000,00 € = 150.000,00 € · <b>38.400,00 € Gewinn</b>'},
    {id:'gewinn', titel:'GuV-Konto abschließen',
     muster:[{seite:'soll', konto:'8020', betrag:38400, formel:'ergebnis'}, {seite:'haben', konto:'3000', betrag:38400, formel:'ergebnis'}]}
  ],
  hinweise:[
    'Ein Aufwandskonto hat seinen Saldo im Soll. Zum Abschluss wird er im Haben gegengebucht – das Gegenkonto ist die GuV.',
    'Ertragskonten spiegelbildlich: Ertragskonto im Soll, GuV im Haben. Für das Ergebnis zählen alle Konten der Tabelle, auch die, die du nicht selbst abschließt.',
    'Sind die Erträge höher, bleibt in der GuV ein Gewinn, der ins Eigenkapital geht: GuV an Eigenkapital.'
  ],
  merke:'Aufwandskonto: GuV an Aufwandskonto. Ertragskonto: Ertragskonto an GuV. Gewinn: GuV an Eigenkapital.',
  stolpersteine:['Aufwandskonto im Soll statt im Haben abgeschlossen','Gewinn über das SBK statt über das Eigenkapital gebucht','Beim Ergebnis nur die beiden abgeschlossenen Konten berücksichtigt']
},
{
  id:'EA2', modul:'M6E', typ:'kette', stufe:2, titel:'Erfolgskonten abschließen · Beispiel 2',
  tags:['Abschluss','GuV','Verlust'],
  text:'Zum 31.12. weisen die Erfolgskonten folgende Salden aus:<table class="lager"><tr><th>Konto</th><th class="z">Saldo</th></tr><tr><td>5010 Umsatzerlöse Handelswaren</td><td class="z">96.000,00 €</td></tr><tr><td>5400 Erträge aus Vermietung und Verpachtung</td><td class="z">6.000,00 €</td></tr><tr><td>6080 Aufwendungen für Handelswaren</td><td class="z">61.000,00 €</td></tr><tr><td>6200 Löhne</td><td class="z">28.500,00 €</td></tr><tr><td>6700 Mietaufwendungen</td><td class="z">12.000,00 €</td></tr><tr><td>7510 Zinsaufwendungen</td><td class="z">3.100,00 €</td></tr></table>Schließe die Konten 6200 und 5400 ab. Ermittle danach das Ergebnis aus allen Salden und schließe das GuV-Konto ab.',
  bloecke:[
    {id:'aufwand', titel:'Konto 6200 Löhne abschließen',
     muster:[{seite:'soll', konto:'8020', betrag:28500}, {seite:'haben', konto:'6200', betrag:28500}]},
    {id:'ertrag', titel:'Konto 5400 Erträge aus Vermietung und Verpachtung abschließen',
     muster:[{seite:'soll', konto:'5400', betrag:6000}, {seite:'haben', konto:'8020', betrag:6000}]},
    {id:'ergebnis', titel:'Ergebnis ermitteln', typ:'rechnen',
     frage:'Wie hoch ist das Ergebnis des Geschäftsjahres? Berücksichtige alle Erfolgskonten und gib den Betrag ohne Vorzeichen an.',
     antwort:2600,
     tipp:'Welche Seite der GuV ist größer – und was bedeutet das?',
     rechenweg:'Aufwendungen 104.600,00 € − Erträge 102.000,00 € = <b>2.600,00 € Verlust</b>'},
    {id:'verlust', titel:'GuV-Konto abschließen',
     muster:[{seite:'soll', konto:'3000', betrag:2600, formel:'ergebnis'}, {seite:'haben', konto:'8020', betrag:2600, formel:'ergebnis'}]}
  ],
  hinweise:[
    'Die beiden Konten schließt du ab wie immer: Aufwandskonto im Haben, Ertragskonto im Soll, Gegenkonto jeweils die GuV.',
    'Für das Ergebnis zählen alle sechs Konten. Diesmal sind die Aufwendungen höher – auf welcher Seite der GuV steht dann der Saldo?',
    'Ein Verlust mindert das Eigenkapital: Eigenkapital an GuV.'
  ],
  merke:'Bei einem Verlust dreht sich die letzte Buchung um: Eigenkapital an GuV.',
  stolpersteine:['Verlust wie einen Gewinn gebucht (GuV an Eigenkapital)','Ergebnis mit Vorzeichen eingetragen']
},
{
  id:'EA3', modul:'M6E', typ:'kette', stufe:2, titel:'Vom GuV-Konto bis zur Schlussbilanz',
  tags:['Abschluss','GuV','Eigenkapital','SBK'],
  text:'Das Eigenkapital betrug am 1.1. 120.000,00 €. Zum 31.12. weisen die Erfolgskonten folgende Salden aus:<table class="lager"><tr><th>Konto</th><th class="z">Saldo</th></tr><tr><td>5010 Umsatzerlöse Handelswaren</td><td class="z">240.000,00 €</td></tr><tr><td>5400 Erträge aus Vermietung und Verpachtung</td><td class="z">4.500,00 €</td></tr><tr><td>6080 Aufwendungen für Handelswaren</td><td class="z">98.000,00 €</td></tr><tr><td>6200 Löhne</td><td class="z">72.000,00 €</td></tr><tr><td>6870 Werbeaufwand</td><td class="z">18.000,00 €</td></tr><tr><td>6900 Versicherungsbeiträge</td><td class="z">34.000,00 €</td></tr></table>Schließe die Konten 6870 und 5010 ab. Ermittle das Ergebnis aus allen Salden, schließe das GuV-Konto und anschließend das Eigenkapitalkonto ab.',
  bloecke:[
    {id:'aufwand', titel:'Konto 6870 Werbeaufwand abschließen',
     muster:[{seite:'soll', konto:'8020', betrag:18000}, {seite:'haben', konto:'6870', betrag:18000}]},
    {id:'ertrag', titel:'Konto 5010 Umsatzerlöse Handelswaren abschließen',
     muster:[{seite:'soll', konto:'5010', betrag:240000}, {seite:'haben', konto:'8020', betrag:240000}]},
    {id:'ergebnis', titel:'Ergebnis ermitteln', typ:'rechnen',
     frage:'Wie hoch ist das Ergebnis des Geschäftsjahres? Berücksichtige alle Erfolgskonten und gib den Betrag ohne Vorzeichen an.',
     antwort:22500,
     tipp:'Alle Erträge und alle Aufwendungen gegeneinander rechnen.',
     rechenweg:'Erträge 244.500,00 € − Aufwendungen 222.000,00 € = <b>22.500,00 € Gewinn</b>'},
    {id:'gewinn', titel:'GuV-Konto abschließen',
     muster:[{seite:'soll', konto:'8020', betrag:22500, formel:'ergebnis'}, {seite:'haben', konto:'3000', betrag:22500, formel:'ergebnis'}]},
    {id:'ek', titel:'Eigenkapital am Jahresende', typ:'rechnen',
     frage:'Wie hoch ist das Eigenkapital am 31.12.?',
     antwort:142500, formel:'120000 * f + ergebnis',
     tipp:'Anfangsbestand plus Gewinn.',
     rechenweg:'120.000,00 € + 22.500,00 € = <b>142.500,00 €</b>'},
    {id:'sbk', titel:'Eigenkapitalkonto abschließen',
     muster:[{seite:'soll', konto:'3000', betrag:142500, formel:'ek'}, {seite:'haben', konto:'8010', betrag:142500, formel:'ek'}]}
  ],
  hinweise:[
    'Die Reihenfolge zählt: erst die Erfolgskonten über die GuV, dann die GuV ins Eigenkapital, zuletzt das Eigenkapital ins SBK.',
    'Das Eigenkapital ist ein Passivkonto: Anfangsbestand und Gewinn stehen im Haben, der Schlussbestand im Soll.',
    'Eigenkapital an SBK mit dem Schlussbestand – also Anfangsbestand plus Gewinn.'
  ],
  merke:'Erfolgskonten → GuV → Eigenkapital → SBK. Der Gewinn erhöht das Eigenkapital, das in die Schlussbilanz geht.',
  stolpersteine:['Eigenkapital ohne den Gewinn ins SBK übernommen','SBK an Eigenkapital gebucht']
},
{
  id:'EA4', modul:'M6E', typ:'kette', stufe:3, titel:'Abschluss mit Verlust bis zur Schlussbilanz',
  tags:['Abschluss','GuV','Verlust','Eigenkapital','SBK'],
  text:'Das Eigenkapital betrug am 1.1. 85.000,00 €. Zum 31.12. weisen die Erfolgskonten folgende Salden aus:<table class="lager"><tr><th>Konto</th><th class="z">Saldo</th></tr><tr><td>5010 Umsatzerlöse Handelswaren</td><td class="z">128.000,00 €</td></tr><tr><td>5710 Zinserträge</td><td class="z">1.200,00 €</td></tr><tr><td>6080 Aufwendungen für Handelswaren</td><td class="z">64.000,00 €</td></tr><tr><td>6200 Löhne</td><td class="z">41.000,00 €</td></tr><tr><td>6700 Mietaufwendungen</td><td class="z">15.600,00 €</td></tr><tr><td>6870 Werbeaufwand</td><td class="z">15.200,00 €</td></tr><tr><td>7510 Zinsaufwendungen</td><td class="z">2.400,00 €</td></tr></table>Schließe die Konten 7510 und 5710 ab. Ermittle das Ergebnis aus allen Salden und schließe alle Konten bis zur Schlussbilanz ab.',
  bloecke:[
    {id:'aufwand', titel:'Konto 7510 Zinsaufwendungen abschließen',
     muster:[{seite:'soll', konto:'8020', betrag:2400}, {seite:'haben', konto:'7510', betrag:2400}]},
    {id:'ertrag', titel:'Konto 5710 Zinserträge abschließen',
     muster:[{seite:'soll', konto:'5710', betrag:1200}, {seite:'haben', konto:'8020', betrag:1200}]},
    {id:'ergebnis', titel:'Ergebnis ermitteln', typ:'rechnen',
     frage:'Wie hoch ist das Ergebnis des Geschäftsjahres? Berücksichtige alle Erfolgskonten und gib den Betrag ohne Vorzeichen an.',
     antwort:9000,
     tipp:'Summe aller Erträge gegen Summe aller Aufwendungen – welche ist größer?',
     rechenweg:'Aufwendungen 138.200,00 € − Erträge 129.200,00 € = <b>9.000,00 € Verlust</b>'},
    {id:'verlust', titel:'GuV-Konto abschließen',
     muster:[{seite:'soll', konto:'3000', betrag:9000, formel:'ergebnis'}, {seite:'haben', konto:'8020', betrag:9000, formel:'ergebnis'}]},
    {id:'ek', titel:'Eigenkapital am Jahresende', typ:'rechnen',
     frage:'Wie hoch ist das Eigenkapital am 31.12.?',
     antwort:76000, formel:'85000 * f - ergebnis',
     tipp:'Was macht ein Verlust mit dem Eigenkapital?',
     rechenweg:'85.000,00 € − 9.000,00 € Verlust = <b>76.000,00 €</b>'},
    {id:'sbk', titel:'Eigenkapitalkonto abschließen',
     muster:[{seite:'soll', konto:'3000', betrag:76000, formel:'ek'}, {seite:'haben', konto:'8010', betrag:76000, formel:'ek'}]}
  ],
  hinweise:[
    'Rechne beim Ergebnis mit allen sieben Konten – nicht nur mit den beiden, die du abschließt.',
    'Die Aufwendungen sind höher: Es entsteht ein Verlust, der das Eigenkapital mindert (Eigenkapital an GuV).',
    'Der Schlussbestand des Eigenkapitals ist der Anfangsbestand minus Verlust. Er geht ins SBK: Eigenkapital an SBK.'
  ],
  merke:'Ein Verlust mindert das Eigenkapital – in die Schlussbilanz geht der verminderte Betrag.',
  stolpersteine:['Verlust zum Eigenkapital addiert','Verlust wie einen Gewinn gebucht']
},

/* ---------- Modul 8 · Umsatzsteuerkonten abschließen ---------- */
{
  id:'UT1', modul:'M6U', typ:'berechnung', stufe:0, titel:'Warum verrechnen?',
  tags:['Umsatzsteuer','Vorsteuer','Zahllast','Theorie'],
  text:'Am Ende eines Voranmeldungszeitraums wird das Konto Vorsteuer mit dem Konto Umsatzsteuer verrechnet.',
  frage:'Warum?',
  optionen:[
    {text:'Weil an das Finanzamt nur der Unterschied fließt: Umsatzsteuer minus Vorsteuer.', richtig:true,
     weg:'Die Vorsteuer ist eine Forderung, die Umsatzsteuer eine Verbindlichkeit gegenüber demselben Finanzamt. Beide werden verrechnet – übrig bleibt die Zahllast oder ein Vorsteuerüberhang.'},
    {text:'Weil die Vorsteuer ein Aufwand ist und so in die GuV gelangt.',
     fehler:'Die Vorsteuer ist kein Aufwand, sondern eine Forderung gegenüber dem Finanzamt. Sie berührt die GuV nicht.'},
    {text:'Weil das Unternehmen die Vorsteuer selbst tragen muss.',
     fehler:'Gerade nicht: Die Vorsteuer bekommt das Unternehmen vom Finanzamt zurück – durch die Verrechnung mit der Umsatzsteuer.'},
    {text:'Weil das Schlussbilanzkonto keine Steuerkonten aufnehmen darf.',
     fehler:'Ein Saldo aus Vorsteuer oder Umsatzsteuer kann sehr wohl in die Schlussbilanz gehen – als Forderung oder Verbindlichkeit.'}
  ],
  hinweise:[
    'Wem schuldet das Unternehmen die Umsatzsteuer – und von wem bekommt es die Vorsteuer zurück?',
    'Beides betrifft dasselbe Finanzamt. Muss man dann wirklich in beide Richtungen zahlen?',
    'Nur der Unterschied wird gezahlt oder erstattet.'
  ],
  merke:'Umsatzsteuer − Vorsteuer = Zahllast. Ist die Vorsteuer größer, entsteht ein Vorsteuerüberhang.'
},
{
  id:'UT2', modul:'M6U', typ:'berechnung', stufe:0, titel:'Zahllast am Jahresende',
  tags:['Umsatzsteuer','Zahllast','Bilanz','Theorie'],
  text:'Am 31.12. ist die Zahllast für Dezember noch nicht an das Finanzamt überwiesen.',
  frage:'Wo erscheint sie im Jahresabschluss?',
  optionen:[
    {text:'Auf der Passivseite der Schlussbilanz als Verbindlichkeit gegenüber dem Finanzamt.', richtig:true,
     weg:'Die Zahllast ist eine Schuld. Das Konto Umsatzsteuer wird mit ihr über das SBK abgeschlossen: Umsatzsteuer an SBK.'},
    {text:'Auf der Aktivseite der Schlussbilanz.',
     fehler:'Auf die Aktivseite gehört ein Vorsteuerüberhang – eine Forderung. Die Zahllast ist eine Schuld.'},
    {text:'Als Aufwand in der GuV.',
     fehler:'Die Umsatzsteuer ist durchlaufend: Der Kunde hat sie bezahlt, das Unternehmen leitet sie nur weiter. Sie ist kein Aufwand.'},
    {text:'Nirgends – sie wird erst bei Zahlung gebucht.',
     fehler:'Die Schuld besteht am 31.12. bereits. Sie muss deshalb in der Bilanz stehen.'}
  ],
  hinweise:[
    'Ist die Zahllast etwas, das das Unternehmen hat, oder etwas, das es schuldet?',
    'Schulden stehen in der Bilanz auf der Passivseite.',
    'Gebucht wird Umsatzsteuer an SBK.'
  ],
  merke:'Zahllast am Jahresende: Umsatzsteuer an SBK (Passivseite). Vorsteuerüberhang: SBK an Vorsteuer (Aktivseite).'
},
{
  id:'UT3', modul:'M6U', typ:'berechnung', stufe:0, titel:'Mehr Vorsteuer als Umsatzsteuer',
  tags:['Vorsteuer','Vorsteuerüberhang','Theorie'],
  text:'In einem Monat mit großen Investitionen ist die Vorsteuer höher als die Umsatzsteuer.',
  frage:'Was bedeutet das?',
  optionen:[
    {text:'Es entsteht ein Vorsteuerüberhang – eine Forderung gegenüber dem Finanzamt, die erstattet wird.', richtig:true,
     weg:'Das Unternehmen hat mehr Steuer an Lieferanten gezahlt, als es von Kunden eingenommen hat. Den Unterschied erstattet das Finanzamt.'},
    {text:'Es entsteht eine Zahllast.',
     fehler:'Eine Zahllast entsteht nur, wenn die Umsatzsteuer größer ist.'},
    {text:'Der Unterschied ist Aufwand und mindert den Gewinn.',
     fehler:'Die Vorsteuer bekommt das Unternehmen zurück – sie belastet den Gewinn nicht.'},
    {text:'Das Unternehmen macht in diesem Monat Verlust.',
     fehler:'Die Steuerkonten sagen nichts über Gewinn oder Verlust. Sie berühren die GuV nicht.'}
  ],
  hinweise:[
    'Wer schuldet hier wem etwas – das Unternehmen dem Finanzamt oder umgekehrt?',
    'Mehr gezahlte als eingenommene Steuer bekommt man zurück.',
    'Das ist ein Vorsteuerüberhang, also eine Forderung.'
  ],
  merke:'Vorsteuer > Umsatzsteuer: Vorsteuerüberhang, Forderung an das Finanzamt.'
},
{
  id:'UA1', modul:'M6U', typ:'kette', stufe:1, titel:'Monatsabschluss mit Überweisung',
  tags:['Umsatzsteuer','Vorsteuer','Zahllast','Voranmeldung'],
  text:'Am Ende des Monats Mai weisen die Konten folgende Salden aus: 2600 Vorsteuer 3.420,00 € (Soll), 4800 Umsatzsteuer 7.980,00 € (Haben). Der Saldo wird mit der Umsatzsteuer-Voranmeldung per Bank beglichen.',
  bloecke:[
    {id:'verrechnung', titel:'Steuerkonten verrechnen',
     muster:[{seite:'soll', konto:'4800', betrag:3420}, {seite:'haben', konto:'2600', betrag:3420}]},
    {id:'saldo', titel:'Saldo ermitteln', typ:'rechnen',
     frage:'Welcher Saldo bleibt nach der Verrechnung?',
     antwort:4560,
     tipp:'Das kleinere Konto wird über das größere abgeschlossen. Was bleibt auf dem größeren übrig?',
     rechenweg:'Umsatzsteuer 7.980,00 € − Vorsteuer 3.420,00 € = <b>4.560,00 € Zahllast</b>'},
    {id:'zahlung', titel:'Saldo begleichen',
     muster:[{seite:'soll', konto:'4800', betrag:4560, formel:'saldo'}, {seite:'haben', konto:'2800', betrag:4560, formel:'saldo'}]}
  ],
  hinweise:[
    'Welches der beiden Steuerkonten hat den kleineren Saldo? Dieses Konto wird abgeschlossen.',
    'Die Vorsteuer steht im Soll. Abgeschlossen wird sie im Haben – das Gegenkonto ist die Umsatzsteuer.',
    'Umsatzsteuer an Vorsteuer, danach Umsatzsteuer an Bank mit der Zahllast.'
  ],
  merke:'Monatsabschluss: Umsatzsteuer an Vorsteuer, dann Umsatzsteuer an Bank mit der Zahllast.',
  stolpersteine:['Vorsteuer an Umsatzsteuer gebucht','Die volle Umsatzsteuer überwiesen']
},
{
  id:'UA2', modul:'M6U', typ:'kette', stufe:1, titel:'Jahresabschluss mit Zahllast',
  tags:['Umsatzsteuer','Vorsteuer','Zahllast','SBK'],
  text:'Zum 31.12. weisen die Konten folgende Salden aus: 2600 Vorsteuer 18.450,00 € (Soll), 4800 Umsatzsteuer 31.200,00 € (Haben). Der Saldo wird erst im Januar überwiesen.',
  bloecke:[
    {id:'verrechnung', titel:'Steuerkonten verrechnen',
     muster:[{seite:'soll', konto:'4800', betrag:18450}, {seite:'haben', konto:'2600', betrag:18450}]},
    {id:'saldo', titel:'Saldo ermitteln', typ:'rechnen',
     frage:'Welcher Saldo bleibt nach der Verrechnung?',
     antwort:12750,
     tipp:'Umsatzsteuer und Vorsteuer gegeneinander rechnen.',
     rechenweg:'31.200,00 € − 18.450,00 € = <b>12.750,00 € Zahllast</b>'},
    {id:'abschluss', titel:'Umsatzsteuerkonto abschließen',
     muster:[{seite:'soll', konto:'4800', betrag:12750, formel:'saldo'}, {seite:'haben', konto:'8010', betrag:12750, formel:'saldo'}]}
  ],
  hinweise:[
    'Zuerst wird verrechnet wie im Monatsabschluss.',
    'Am 31.12. ist die Zahllast noch nicht bezahlt. Was ist sie dann – und wo steht so etwas?',
    'Die Zahllast ist eine Verbindlichkeit: Umsatzsteuer an SBK.'
  ],
  merke:'Eine Zahllast am Jahresende wird passiviert: Umsatzsteuer an SBK.',
  stolpersteine:['Zahllast über die GuV abgeschlossen','SBK an Umsatzsteuer gebucht']
},
{
  id:'UA3', modul:'M6U', typ:'kette', stufe:2, titel:'Jahresabschluss nach einer Investition',
  tags:['Vorsteuer','Vorsteuerüberhang','SBK'],
  text:'Im Dezember wurde eine neue Regalanlage für das Lager gekauft. Zum 31.12. weisen die Konten folgende Salden aus: 2600 Vorsteuer 14.250,00 € (Soll), 4800 Umsatzsteuer 9.880,00 € (Haben).',
  bloecke:[
    {id:'verrechnung', titel:'Steuerkonten verrechnen',
     muster:[{seite:'soll', konto:'4800', betrag:9880}, {seite:'haben', konto:'2600', betrag:9880}]},
    {id:'saldo', titel:'Saldo ermitteln', typ:'rechnen',
     frage:'Welcher Saldo bleibt nach der Verrechnung?',
     antwort:4370,
     tipp:'Diesmal ist ein anderes Konto das kleinere.',
     rechenweg:'Vorsteuer 14.250,00 € − Umsatzsteuer 9.880,00 € = <b>4.370,00 € Vorsteuerüberhang</b>'},
    {id:'abschluss', titel:'Verbleibendes Steuerkonto abschließen',
     muster:[{seite:'soll', konto:'8010', betrag:4370, formel:'saldo'}, {seite:'haben', konto:'2600', betrag:4370, formel:'saldo'}]}
  ],
  hinweise:[
    'Vergleiche die Salden: Welches Konto ist diesmal kleiner?',
    'Die Umsatzsteuer wird über die Vorsteuer abgeschlossen. Der Betrag ist der kleinere Saldo – die Umsatzsteuer.',
    'Übrig bleibt Vorsteuer – eine Forderung an das Finanzamt. Sie geht auf die Aktivseite: SBK an Vorsteuer.'
  ],
  merke:'Abgeschlossen wird immer das kleinere Steuerkonto über das größere. Ein Vorsteuerüberhang ist eine Forderung: SBK an Vorsteuer.',
  stolpersteine:['Vorsteuerüberhang wie eine Zahllast gebucht','Mit dem größeren statt dem kleineren Saldo verrechnet']
},
{
  id:'UA4', modul:'M6U', typ:'kette', stufe:2, titel:'Erstattung durch das Finanzamt',
  tags:['Vorsteuer','Vorsteuerüberhang','Voranmeldung'],
  text:'Am Ende des Monats März weisen die Konten folgende Salden aus: 2600 Vorsteuer 6.270,00 € (Soll), 4800 Umsatzsteuer 4.180,00 € (Haben). Der Saldo wird mit der Umsatzsteuer-Voranmeldung ausgeglichen; der Betrag geht auf dem Bankkonto ein.',
  bloecke:[
    {id:'verrechnung', titel:'Steuerkonten verrechnen',
     muster:[{seite:'soll', konto:'4800', betrag:4180}, {seite:'haben', konto:'2600', betrag:4180}]},
    {id:'saldo', titel:'Saldo ermitteln', typ:'rechnen',
     frage:'Welcher Saldo bleibt nach der Verrechnung?',
     antwort:2090,
     tipp:'Welches Konto ist kleiner?',
     rechenweg:'Vorsteuer 6.270,00 € − Umsatzsteuer 4.180,00 € = <b>2.090,00 € Vorsteuerüberhang</b>'},
    {id:'erstattung', titel:'Saldo ausgleichen',
     muster:[{seite:'soll', konto:'2800', betrag:2090, formel:'saldo'}, {seite:'haben', konto:'2600', betrag:2090, formel:'saldo'}]}
  ],
  hinweise:[
    'Die Umsatzsteuer ist diesmal das kleinere Konto.',
    'Nach der Verrechnung bleibt ein Rest auf dem Vorsteuerkonto – das Finanzamt erstattet ihn.',
    'Bank an Vorsteuer mit dem Vorsteuerüberhang.'
  ],
  merke:'Vorsteuerüberhang im Monat: Das Finanzamt erstattet ihn – Bank an Vorsteuer.',
  stolpersteine:['Vorsteuer an Bank gebucht','Den Überhang an das Finanzamt überwiesen']
},
{
  id:'UA5', modul:'M6U', typ:'kette', stufe:3, titel:'Salden selbst ermitteln · Zahllast',
  tags:['Umsatzsteuer','Vorsteuer','Zahllast','SBK','Korrektur'],
  text:'Vor den Dezember-Buchungen zeigen die Konten 2600 Vorsteuer 2.280,00 € (Soll) und 4800 Umsatzsteuer 4.750,00 € (Haben). Im Dezember kommen hinzu:<ol><li>Einkauf von Handelswaren auf Ziel, 9.000,00 € netto zzgl. 19 % USt.</li><li>Verkauf von Handelswaren auf Ziel, 21.000,00 € netto zzgl. 19 % USt.</li><li>Rücksendung von Handelswaren an den Lieferanten, 1.000,00 € netto.</li><li>Ein Kunde erhält wegen eines Mangels einen Preisnachlass von 2.000,00 € netto.</li></ol>Der Saldo wird erst im Januar mit dem Finanzamt abgerechnet.',
  bloecke:[
    {id:'vst', titel:'Vorsteuer am 31.12.', typ:'rechnen',
     frage:'Wie hoch ist der Saldo des Kontos Vorsteuer am 31.12.?',
     antwort:3800,
     tipp:'Welche Fälle betreffen die Vorsteuer – und in welche Richtung?',
     rechenweg:'2.280,00 € + 1.710,00 € (Fall 1) − 190,00 € (Fall 3) = <b>3.800,00 €</b>'},
    {id:'ust', titel:'Umsatzsteuer am 31.12.', typ:'rechnen',
     frage:'Wie hoch ist der Saldo des Kontos Umsatzsteuer am 31.12.?',
     antwort:8360,
     tipp:'Welche Fälle betreffen die Umsatzsteuer – und in welche Richtung?',
     rechenweg:'4.750,00 € + 3.990,00 € (Fall 2) − 380,00 € (Fall 4) = <b>8.360,00 €</b>'},
    {id:'verrechnung', titel:'Steuerkonten verrechnen',
     muster:[{seite:'soll', konto:'4800', betrag:3800, formel:'min(vst, ust)'}, {seite:'haben', konto:'2600', betrag:3800, formel:'min(vst, ust)'}]},
    {id:'saldo', titel:'Saldo ermitteln', typ:'rechnen',
     frage:'Welcher Saldo bleibt nach der Verrechnung?',
     antwort:4560, formel:'abs(ust - vst)',
     tipp:'Größeres minus kleineres Konto.',
     rechenweg:'8.360,00 € − 3.800,00 € = <b>4.560,00 € Zahllast</b>'},
    {id:'abschluss', titel:'Verbleibendes Steuerkonto abschließen',
     muster:[{seite:'soll', konto:'4800', betrag:4560, formel:'saldo'}, {seite:'haben', konto:'8010', betrag:4560, formel:'saldo'}]}
  ],
  hinweise:[
    'Rücksendungen und Preisnachlässe ändern die Steuer mit: Beim Einkauf sinkt die Vorsteuer, beim Verkauf die Umsatzsteuer.',
    'Fall 1 und 3 betreffen die Vorsteuer, Fall 2 und 4 die Umsatzsteuer – jeweils 19 % vom Nettobetrag.',
    'Ist die Umsatzsteuer am Ende größer, bleibt eine Zahllast, die am 31.12. noch offen ist: Umsatzsteuer an SBK.'
  ],
  merke:'Jede Korrektur des Nettobetrags korrigiert auch die Steuer. Erst danach werden die Steuerkonten verrechnet.',
  stolpersteine:['Rücksendung und Preisnachlass bei der Steuer vergessen','Korrektur beim falschen Steuerkonto abgezogen']
},
{
  id:'UA6', modul:'M6U', typ:'kette', stufe:3, titel:'Salden selbst ermitteln · Investition',
  tags:['Vorsteuer','Vorsteuerüberhang','SBK','Korrektur'],
  text:'Vor den Dezember-Buchungen zeigen die Konten 2600 Vorsteuer 1.140,00 € (Soll) und 4800 Umsatzsteuer 2.660,00 € (Haben). Im Dezember kommen hinzu:<ol><li>Kauf einer Maschine auf Ziel, 30.000,00 € netto zzgl. 19 % USt.</li><li>Verkauf von Handelswaren auf Ziel, 12.000,00 € netto zzgl. 19 % USt.</li><li>Ein Kunde sendet Handelswaren zurück, 2.000,00 € netto.</li></ol>Der Saldo wird erst im Januar mit dem Finanzamt abgerechnet.',
  bloecke:[
    {id:'vst', titel:'Vorsteuer am 31.12.', typ:'rechnen',
     frage:'Wie hoch ist der Saldo des Kontos Vorsteuer am 31.12.?',
     antwort:6840,
     tipp:'Welcher Fall betrifft die Vorsteuer?',
     rechenweg:'1.140,00 € + 5.700,00 € (Fall 1) = <b>6.840,00 €</b>'},
    {id:'ust', titel:'Umsatzsteuer am 31.12.', typ:'rechnen',
     frage:'Wie hoch ist der Saldo des Kontos Umsatzsteuer am 31.12.?',
     antwort:4560,
     tipp:'Welche Fälle betreffen die Umsatzsteuer – und in welche Richtung?',
     rechenweg:'2.660,00 € + 2.280,00 € (Fall 2) − 380,00 € (Fall 3) = <b>4.560,00 €</b>'},
    {id:'verrechnung', titel:'Steuerkonten verrechnen',
     muster:[{seite:'soll', konto:'4800', betrag:4560, formel:'min(vst, ust)'}, {seite:'haben', konto:'2600', betrag:4560, formel:'min(vst, ust)'}]},
    {id:'saldo', titel:'Saldo ermitteln', typ:'rechnen',
     frage:'Welcher Saldo bleibt nach der Verrechnung?',
     antwort:2280, formel:'abs(ust - vst)',
     tipp:'Größeres minus kleineres Konto.',
     rechenweg:'6.840,00 € − 4.560,00 € = <b>2.280,00 € Vorsteuerüberhang</b>'},
    {id:'abschluss', titel:'Verbleibendes Steuerkonto abschließen',
     muster:[{seite:'soll', konto:'8010', betrag:2280, formel:'saldo'}, {seite:'haben', konto:'2600', betrag:2280, formel:'saldo'}]}
  ],
  hinweise:[
    'Die Maschine ist ein großer Einkauf – achte darauf, welches Konto am Ende größer ist.',
    'Die Rücksendung des Kunden mindert die Umsatzsteuer um 19 % von 2.000,00 €.',
    'Die Vorsteuer ist größer: Umsatzsteuer an Vorsteuer mit dem kleineren Saldo, danach SBK an Vorsteuer mit dem Überhang.'
  ],
  merke:'Nach großen Investitionen kann am Jahresende ein Vorsteuerüberhang stehen – eine Forderung, die auf die Aktivseite gehört.',
  stolpersteine:['Vorsteuerüberhang wie eine Zahllast gebucht','Rücksendung des Kunden bei der Vorsteuer abgezogen']
},

/* ---------- Modul · Warenbestandsveränderungen (Büromanagement, aus dem Großhandel übernommen) ----------
   Einkauf aufwandsorientiert auf 6080 . Am Jahresende wird der Bestand angepasst:
   Mehrbestand 2210 an 6080, Minderbestand 6080 an 2210.
   Danach Schlussbestand an SBK, Saldo von 6080 = Wareneinsatz über die GuV. */
{
  id:'BVT1', modul:'M6B', typ:'berechnung', stufe:0, titel:'Warum mindert ein Mehrbestand den Aufwand?',
  tags:['Bestandsveränderungen','Theorie','Wareneinsatz'],
  text:'Ein Handelsbetrieb bucht alle Wareneinkäufe des Jahres als Aufwand auf 6080. Am 31.12. liegt laut Inventur mehr Ware auf Lager als am 1.1.',
  frage:'Warum wird der Mehrbestand im Haben des Aufwandskontos gebucht (2210 an 6080)?',
  optionen:[
    {text:'Ein Teil der eingekauften Ware wurde nicht verkauft und liegt noch auf Lager. Dieser Teil ist noch Vermögen und kein Aufwand des Jahres – der Aufwand muss um den Mehrbestand sinken.', richtig:true,
     weg:'Auf 6080 stehen alle Einkäufe. Aufwand des Jahres ist aber nur, was tatsächlich verkauft wurde – der Wareneinsatz. Der Mehrbestand wird deshalb vom Aufwand abgezogen und auf das Bestandskonto 2210 übertragen.'},
    {text:'Weil die Ware bereits verkauft ist und Umsatzerlöse bringt.',
     fehler:'Gerade nicht: Der Mehrbestand ist Ware, die noch auf Lager liegt und noch keinen Erlös gebracht hat.'},
    {text:'Weil der Lagerbestand über die Anschaffungskosten hinaus aufgewertet wird.',
     fehler:'Bewertet wird höchstens zu Anschaffungskosten. Der Mehrbestand ist keine Höherbewertung, sondern zusätzliche Menge auf Lager.'},
    {text:'Ein Mehrbestand hat keine Auswirkung auf das Ergebnis.',
     fehler:'Doch: Ohne die Korrektur stünden alle Einkäufe als Aufwand in der GuV, auch die noch nicht verkaufte Ware – das Ergebnis wäre zu niedrig.'}
  ],
  hinweise:[
    'Auf dem Aufwandskonto stehen alle Einkäufe des Jahres. Wurde auch alles davon verkauft?',
    'Was noch auf Lager liegt, ist Vermögen. Der Aufwand dafür darf das Ergebnis dieses Jahres nicht mindern.',
    'Der Mehrbestand mindert den Aufwand: Der Wareneinsatz ist kleiner als die Einkäufe, das Ergebnis steigt.'
  ],
  merke:'Mehrbestand: 2210 an 6080 – der Wareneinsatz ist kleiner als die Einkäufe. Minderbestand: 6080 an 2210 – der Wareneinsatz ist größer als die Einkäufe.'
},
{
  id:'BV1', modul:'M6B', typ:'kette', stufe:2, titel:'Mehrbestand · Beispiel 1',
  tags:['Bestandsveränderungen','Wareneinsatz','Abschluss','GuV'],
  text:'Für die Waren liegen zum Jahresende folgende Werte vor:'
    + '<table class="lager"><tr><td>Anfangsbestand 01.01. (Konto 2210)</td><td class="z">40.000,00 €</td></tr><tr><td>Wareneinkäufe des Jahres (Konto 6080)</td><td class="z">310.000,00 €</td></tr><tr><td>Schlussbestand laut Inventur 31.12.</td><td class="z">55.000,00 €</td></tr></table>'
    + 'Buche die Bestandsveränderung, ermittle den Wareneinsatz und schließe die beiden Konten ab.',
  bloecke:[
    {id:'bestand', titel:'Bestandsveränderung buchen',
     muster:[{seite:'soll', konto:'2210', betrag:15000}, {seite:'haben', konto:'6080', betrag:15000}]},
    {id:'sbk', titel:'Schlussbestand auf das SBK abschließen',
     muster:[{seite:'soll', konto:'8010', betrag:55000}, {seite:'haben', konto:'2210', betrag:55000}]},
    {id:'einsatz', titel:'Wareneinsatz ermitteln', typ:'rechnen',
     frage:'Wie hoch ist der Wareneinsatz?',
     antwort:295000,
     tipp:'Einkäufe des Jahres – und was davon noch auf Lager liegt?',
     rechenweg:'Mehrbestand 55.000,00 € − 40.000,00 € = 15.000,00 €<br>Wareneinsatz: 310.000,00 € − 15.000,00 € = <b>295.000,00 €</b>'},
    {id:'guv', titel:'Konto 6080 über die GuV abschließen',
     muster:[{seite:'soll', konto:'8020', betrag:295000, formel:'einsatz'}, {seite:'haben', konto:'6080', betrag:295000, formel:'einsatz'}]}
  ],
  hinweise:[
    'Vergleiche Schlussbestand und Anfangsbestand: Liegt jetzt mehr oder weniger auf Lager?',
    'Der Bestand ist um 15.000,00 € gestiegen – ein Mehrbestand. Das Bestandskonto 2210 nimmt zu (Soll), das Aufwandskonto 6080 nimmt ab (Haben).',
    'Mehrbestand: 2210 an 6080 (15.000,00 €). Abschluss: SBK an 2210 (55.000,00 €), GuV an 6080 mit dem Wareneinsatz von 295.000,00 €.'
  ],
  merke:'Mehrbestand = Schlussbestand über Anfangsbestand. Er mindert den Aufwand (2210 an 6080): Wareneinsatz = Einkäufe − Mehrbestand.',
  stolpersteine:['Mehrbestand im Soll von 6080 gebucht','Einkäufe statt Wareneinsatz in die GuV übernommen','Anfangsbestand statt Schlussbestand ins SBK']
},
{
  id:'BV2', modul:'M6B', typ:'kette', stufe:3, titel:'Minderbestand · Beispiel 2',
  tags:['Bestandsveränderungen','Wareneinsatz','Abschluss','GuV'],
  text:'Für die Waren liegen zum Jahresende folgende Werte vor:'
    + '<table class="lager"><tr><td>Anfangsbestand 01.01. (Konto 2210)</td><td class="z">62.000,00 €</td></tr><tr><td>Wareneinkäufe des Jahres (Konto 6080)</td><td class="z">240.000,00 €</td></tr><tr><td>Schlussbestand laut Inventur 31.12.</td><td class="z">48.500,00 €</td></tr></table>'
    + 'Buche die Bestandsveränderung, ermittle den Wareneinsatz und schließe die beiden Konten ab.',
  bloecke:[
    {id:'bestand', titel:'Bestandsveränderung buchen',
     muster:[{seite:'soll', konto:'6080', betrag:13500}, {seite:'haben', konto:'2210', betrag:13500}]},
    {id:'sbk', titel:'Schlussbestand auf das SBK abschließen',
     muster:[{seite:'soll', konto:'8010', betrag:48500}, {seite:'haben', konto:'2210', betrag:48500}]},
    {id:'einsatz', titel:'Wareneinsatz ermitteln', typ:'rechnen',
     frage:'Wie hoch ist der Wareneinsatz?',
     antwort:253500,
     tipp:'Diesmal wurde auch Ware aus dem Vorjahresbestand verkauft.',
     rechenweg:'Minderbestand 62.000,00 € − 48.500,00 € = 13.500,00 €<br>Wareneinsatz: 240.000,00 € + 13.500,00 € = <b>253.500,00 €</b>'},
    {id:'guv', titel:'Konto 6080 über die GuV abschließen',
     muster:[{seite:'soll', konto:'8020', betrag:253500, formel:'einsatz'}, {seite:'haben', konto:'6080', betrag:253500, formel:'einsatz'}]}
  ],
  hinweise:[
    'Vergleiche Schlussbestand und Anfangsbestand: Liegt jetzt mehr oder weniger auf Lager?',
    'Der Bestand ist um 13.500,00 € gesunken – ein Minderbestand. Es wurde Ware aus dem Vorjahr mitverkauft; 2210 nimmt ab (Haben), der Aufwand auf 6080 steigt (Soll).',
    'Minderbestand: 6080 an 2210 (13.500,00 €). Abschluss: SBK an 2210 (48.500,00 €), GuV an 6080 mit dem Wareneinsatz von 253.500,00 €.'
  ],
  merke:'Minderbestand = Schlussbestand unter Anfangsbestand. Er erhöht den Aufwand (6080 an 2210): Wareneinsatz = Einkäufe + Minderbestand.',
  stolpersteine:['Minderbestand als Ertrag gebucht','Wareneinsatz ohne den Minderbestand ermittelt','Anfangsbestand statt Schlussbestand ins SBK']
},
/* ---------- Modul · Eigenkapitalrentabilität (Büromanagement, LF 6) ----------
   Eigenkapitalrentabilität = Gewinn ÷ Eigenkapital × 100 (Bezugsgröße: Eigenkapital am 01.01.). */
{
  id:'RE1', modul:'M6R', typ:'berechnung', stufe:0, titel:'Was misst die Eigenkapitalrentabilität?',
  tags:['Eigenkapitalrentabilität','Theorie','Kennzahl'],
  text:'Die Geschäftsleitung möchte wissen, ob sich das Kapital, das die Inhaberin in den Betrieb gesteckt hat, gelohnt hat.',
  frage:'Was gibt die Eigenkapitalrentabilität an?',
  optionen:[
    {text:'Wie viel Prozent Gewinn das eingesetzte Eigenkapital im Geschäftsjahr erwirtschaftet hat.', richtig:true,
     weg:'Eigenkapitalrentabilität = Gewinn ÷ Eigenkapital × 100. Sie zeigt die Verzinsung des Eigenkapitals – vergleichbar mit dem Zins einer Geldanlage.'},
    {text:'Welchen Anteil das Eigenkapital am Gesamtkapital hat.',
     fehler:'Das ist die Eigenkapitalquote. Sie beschreibt die Finanzierung, nicht den Erfolg.'},
    {text:'Wie viel Prozent des Umsatzes als Gewinn übrig bleiben.',
     fehler:'Das ist die Umsatzrentabilität. Bei der Eigenkapitalrentabilität steht das Eigenkapital im Nenner.'},
    {text:'Wie hoch die Umsatzerlöse im Verhältnis zum Eigenkapital sind.',
     fehler:'Umsatz ist nicht Gewinn. Ein hoher Umsatz kann mit Verlust einhergehen.'}
  ],
  hinweise:[
    'Es geht um den Erfolg des eingesetzten Eigenkapitals – welche Größe aus der GuV beschreibt den Erfolg?',
    'Der Gewinn wird ins Verhältnis zum Eigenkapital gesetzt.',
    'Eigenkapitalrentabilität = Gewinn ÷ Eigenkapital × 100.'
  ],
  merke:'Eigenkapitalrentabilität = Gewinn ÷ Eigenkapital × 100. Sie sagt, wie sich das Eigenkapital im Geschäftsjahr verzinst hat.'
},
{
  id:'RE2', modul:'M6R', typ:'berechnung', stufe:0, titel:'Ist die Rentabilität gut?',
  tags:['Eigenkapitalrentabilität','Theorie','Beurteilung'],
  text:'Ein Einzelunternehmen erzielt eine Eigenkapitalrentabilität von 3,5 %. Für eine sichere Geldanlage zahlt die Bank zurzeit 3 % Zinsen.',
  frage:'Wie ist das Ergebnis zu beurteilen?',
  optionen:[
    {text:'Schwach: Die Rentabilität liegt kaum über dem Zins einer sicheren Anlage – für das unternehmerische Risiko und die eigene Arbeit bleibt fast nichts übrig.', richtig:true,
     weg:'Wer Eigenkapital im Betrieb einsetzt, trägt ein Risiko und arbeitet meist selbst mit. Die Rentabilität sollte deshalb deutlich über dem Zins einer sicheren Geldanlage liegen.'},
    {text:'Gut, denn jede positive Rentabilität bedeutet, dass sich der Betrieb lohnt.',
     fehler:'Positiv reicht nicht: Das Geld hätte auch ohne Risiko angelegt werden können.'},
    {text:'Das lässt sich nicht beurteilen, weil der Umsatz fehlt.',
     fehler:'Für die Beurteilung der Eigenkapitalrentabilität braucht man keinen Umsatz, sondern einen Vergleichsmaßstab wie den Zins einer sicheren Anlage.'},
    {text:'Sehr gut, weil die Rentabilität über dem Bankzins liegt.',
     fehler:'Der Abstand von 0,5 Prozentpunkten deckt weder Risiko noch Arbeitseinsatz der Inhaberin.'}
  ],
  hinweise:[
    'Womit kann man eine Eigenkapitalrentabilität sinnvoll vergleichen?',
    'Das Eigenkapital hätte die Inhaberin auch ohne Risiko bei der Bank anlegen können.',
    'Die Rentabilität muss Risiko und Arbeitseinsatz zusätzlich abdecken – 0,5 Prozentpunkte über dem Bankzins sind dafür zu wenig.'
  ],
  merke:'Beurteilt wird im Vergleich: Die Eigenkapitalrentabilität sollte deutlich über dem Zins einer sicheren Geldanlage liegen, denn der Unternehmer trägt Risiko und arbeitet mit.'
},
{
  id:'RK1', modul:'M6R', typ:'kette', stufe:1, titel:'Eigenkapitalrentabilität berechnen · Beispiel 1',
  tags:['Eigenkapitalrentabilität','Rechnen'],
  text:'Die Bürotechnik Kramer e. K. hat im Geschäftsjahr einen Gewinn von 36.000,00 € erzielt. Das Eigenkapital betrug am 01.01. 300.000,00 €.',
  bloecke:[
    {id:'quote', titel:'Eigenkapitalrentabilität ermitteln', typ:'rechnen', einheit:'%',
     formel:'36000 * f * 100 / (300000 * f)',
     frage:'Wie hoch ist die Eigenkapitalrentabilität (bezogen auf das Eigenkapital am 01.01.)?',
     antwort:12,
     tipp:'Gewinn ÷ Eigenkapital × 100.',
     rechenweg:'36.000,00 € ÷ 300.000,00 € × 100 = <b>12 %</b>'}
  ],
  hinweise:[
    'Gesucht ist ein Prozentsatz: Welcher Betrag steht im Zähler, welcher im Nenner?',
    'Im Zähler steht der Gewinn, im Nenner das Eigenkapital.',
    '36.000,00 € ÷ 300.000,00 € × 100 = 12 %.'
  ],
  merke:'Eigenkapitalrentabilität = Gewinn ÷ Eigenkapital × 100.'
},
{
  id:'RK2', modul:'M6R', typ:'kette', stufe:2, titel:'Vom GuV-Konto zur Rentabilität · Beispiel 2',
  tags:['Eigenkapitalrentabilität','GuV','Rechnen'],
  text:'Für die Office-Service Lenz e. K. liegen zum 31.12. folgende Salden vor:'
    + '<table class="lager"><tr><td>Umsatzerlöse für Handelswaren</td><td class="z">520.000,00 €</td></tr>'
    + '<tr><td>Zinserträge</td><td class="z">4.000,00 €</td></tr>'
    + '<tr><td>Aufwendungen für Handelswaren</td><td class="z">310.000,00 €</td></tr>'
    + '<tr><td>Gehälter</td><td class="z">120.000,00 €</td></tr>'
    + '<tr><td>Mietaufwendungen</td><td class="z">36.000,00 €</td></tr>'
    + '<tr><td>Übrige Aufwendungen</td><td class="z">18.000,00 €</td></tr>'
    + '<tr><td>Eigenkapital am 01.01.</td><td class="z">250.000,00 €</td></tr></table>'
    + 'Ermittle den Gewinn und die Eigenkapitalrentabilität.',
  bloecke:[
    {id:'gewinn', titel:'Gewinn ermitteln', typ:'rechnen',
     formel:'(520000 + 4000 - 310000 - 120000 - 36000 - 18000) * f',
     frage:'Wie hoch ist der Gewinn des Geschäftsjahres?',
     antwort:40000,
     tipp:'Alle Erträge minus alle Aufwendungen. Das Eigenkapital gehört nicht in die GuV.',
     rechenweg:'Erträge 524.000,00 € − Aufwendungen 484.000,00 € = <b>40.000,00 €</b>'},
    {id:'quote', titel:'Eigenkapitalrentabilität ermitteln', typ:'rechnen', einheit:'%',
     formel:'gewinn * 100 / (250000 * f)',
     frage:'Wie hoch ist die Eigenkapitalrentabilität (bezogen auf das Eigenkapital am 01.01.)?',
     antwort:16,
     tipp:'Dein Gewinn ÷ Eigenkapital am 01.01. × 100',
     rechenweg:'40.000,00 € ÷ 250.000,00 € × 100 = <b>16 %</b>'}
  ],
  hinweise:[
    'Zuerst der Gewinn: Erträge stehen im Haben des GuV-Kontos, Aufwendungen im Soll. Welche Posten sind Erträge?',
    'Erträge: 520.000,00 € + 4.000,00 € = 524.000,00 €. Aufwendungen: 310.000,00 € + 120.000,00 € + 36.000,00 € + 18.000,00 € = 484.000,00 €.',
    'Gewinn 40.000,00 €. Rentabilität: 40.000,00 € ÷ 250.000,00 € × 100 = 16 %.'
  ],
  merke:'Erst den Gewinn aus der GuV ermitteln, dann durch das Eigenkapital teilen. Das Eigenkapital selbst ist kein Ertrag.',
  stolpersteine:['Eigenkapital als Ertrag mitgerechnet','Umsatz statt Gewinn durch das Eigenkapital geteilt']
},
{
  id:'RK3', modul:'M6R', typ:'kette', stufe:3, titel:'Rentabilität beurteilen · Beispiel 3',
  tags:['Eigenkapitalrentabilität','Beurteilung','Rechnen'],
  text:'Die Schreibwaren Yilmaz e. K. erzielt einen Gewinn von 43.200,00 €. Das Eigenkapital betrug am 01.01. 480.000,00 €. Für eine sichere Geldanlage würde die Bank 3 % Zinsen zahlen.',
  bloecke:[
    {id:'quote', titel:'Eigenkapitalrentabilität ermitteln', typ:'rechnen', einheit:'%',
     formel:'43200 * f * 100 / (480000 * f)',
     frage:'Wie hoch ist die Eigenkapitalrentabilität (bezogen auf das Eigenkapital am 01.01.)?',
     antwort:9,
     tipp:'Gewinn ÷ Eigenkapital × 100.',
     rechenweg:'43.200,00 € ÷ 480.000,00 € × 100 = <b>9 %</b>'},
    {id:'abstand', titel:'Vergleich mit der sicheren Geldanlage', typ:'rechnen', einheit:'%',
     formel:'quote - 3',
     frage:'Um wie viele Prozentpunkte liegt die Rentabilität über dem Zins der sicheren Geldanlage?',
     antwort:6,
     tipp:'Deine Rentabilität minus 3 %.',
     rechenweg:'9 % − 3 % = <b>6 Prozentpunkte</b>'}
  ],
  hinweise:[
    'Rechne zuerst die Rentabilität aus. Danach vergleichst du mit dem Bankzins.',
    '43.200,00 € ÷ 480.000,00 € × 100 = 9 %.',
    'Der Abstand zum Bankzins beträgt 9 % − 3 % = 6 Prozentpunkte – das ist der Lohn für Risiko und Arbeitseinsatz.'
  ],
  merke:'Die Rentabilität wird erst im Vergleich aussagekräftig: Der Abstand zum Zins einer sicheren Anlage ist der Lohn für das unternehmerische Risiko.'
},
{
  id:'RK4', modul:'M6R', typ:'kette', stufe:3, titel:'Abschluss, Eigenkapital und Rentabilität · Beispiel 4',
  tags:['Eigenkapitalrentabilität','Abschluss','GuV','Eigenkapital'],
  text:'Auf dem GuV-Konto der Büroservice Brandt e. K. stehen zum 31.12. im Soll Aufwendungen von 612.000,00 € und im Haben Erträge von 640.000,00 €. Das Eigenkapital betrug am 01.01. 200.000,00 €.',
  bloecke:[
    {id:'gewinn', titel:'Ergebnis ermitteln', typ:'rechnen',
     formel:'(640000 - 612000) * f',
     frage:'Wie hoch ist der Gewinn?',
     antwort:28000,
     tipp:'Erträge minus Aufwendungen.',
     rechenweg:'640.000,00 € − 612.000,00 € = <b>28.000,00 €</b>'},
    {id:'abschluss', titel:'GuV-Konto über das Eigenkapital abschließen',
     muster:[{seite:'soll', konto:'8020', betrag:28000, formel:'gewinn'}, {seite:'haben', konto:'3000', betrag:28000, formel:'gewinn'}]},
    {id:'ekende', titel:'Eigenkapital am 31.12.', typ:'rechnen',
     formel:'200000 * f + gewinn',
     frage:'Wie hoch ist das Eigenkapital am 31.12.?',
     antwort:228000,
     tipp:'Anfangsbestand plus Gewinn.',
     rechenweg:'200.000,00 € + 28.000,00 € = <b>228.000,00 €</b>'},
    {id:'quote', titel:'Eigenkapitalrentabilität ermitteln', typ:'rechnen', einheit:'%',
     formel:'gewinn * 100 / (200000 * f)',
     frage:'Wie hoch ist die Eigenkapitalrentabilität, bezogen auf das Eigenkapital am 01.01.?',
     antwort:14,
     tipp:'Gewinn ÷ Eigenkapital am 01.01. × 100 – nicht am 31.12.',
     rechenweg:'28.000,00 € ÷ 200.000,00 € × 100 = <b>14 %</b>'}
  ],
  hinweise:[
    'Der Saldo des GuV-Kontos ist der Gewinn. Er erhöht das Eigenkapital.',
    'Gewinn 28.000,00 €: GuV an Eigenkapital. Eigenkapital am 31.12.: 200.000,00 € + 28.000,00 € = 228.000,00 €.',
    'Rentabilität auf das Eigenkapital am 01.01.: 28.000,00 € ÷ 200.000,00 € × 100 = 14 %.'
  ],
  merke:'Gewinn: GuV an Eigenkapital. Die Rentabilität bezieht sich auf das Eigenkapital, das zu Beginn des Jahres eingesetzt war.',
  stolpersteine:['Eigenkapital an GuV gebucht','Rentabilität auf das Eigenkapital am 31.12. bezogen']
},
{
  id:'WT1', modul:'M6R', typ:'berechnung', stufe:0, titel:'Was sagt die Wirtschaftlichkeit aus?',
  tags:['Wirtschaftlichkeit','Theorie','Kennzahl'],
  text:'Für den Bürofachhandel Kurz e. K. wurde eine Wirtschaftlichkeit von 1,08 ermittelt.',
  frage:'Was bedeutet dieser Wert?',
  optionen:[
    {text:'Für jeden Euro Aufwand wurden 1,08 € Ertrag erzielt – der Betrieb arbeitet wirtschaftlich.', richtig:true,
     weg:'Wirtschaftlichkeit = Erträge ÷ Aufwendungen. Ein Wert über 1 heißt: Die Erträge sind höher als die Aufwendungen, es entsteht Gewinn.'},
    {text:'Das Eigenkapital hat sich mit 8 % verzinst.',
     fehler:'Das wäre die Eigenkapitalrentabilität. Die Wirtschaftlichkeit vergleicht Erträge und Aufwendungen, das Eigenkapital spielt keine Rolle.'},
    {text:'Der Betrieb arbeitet unwirtschaftlich, weil der Wert kaum über 1 liegt.',
     fehler:'Unwirtschaftlich ist ein Betrieb erst bei einem Wert unter 1 – dann sind die Aufwendungen höher als die Erträge.'},
    {text:'Der Umsatz ist um 8 % gestiegen.',
     fehler:'Die Wirtschaftlichkeit ist kein Vergleich mit dem Vorjahr, sondern das Verhältnis von Erträgen zu Aufwendungen in einem Jahr.'}
  ],
  hinweise:[
    'Welche beiden Größen aus der GuV werden bei der Wirtschaftlichkeit ins Verhältnis gesetzt?',
    'Wirtschaftlichkeit = Erträge ÷ Aufwendungen.',
    'Über 1: Erträge größer als Aufwendungen – wirtschaftlich. Unter 1: unwirtschaftlich.'
  ],
  merke:'Wirtschaftlichkeit = Erträge ÷ Aufwendungen. Über 1 arbeitet der Betrieb wirtschaftlich, unter 1 unwirtschaftlich.'
},
{
  id:'WK1', modul:'M6R', typ:'kette', stufe:1, titel:'Wirtschaftlichkeit berechnen · Beispiel 1',
  tags:['Wirtschaftlichkeit','Rechnen'],
  text:'Die Office-Service Lenz e. K. hat im Geschäftsjahr Erträge von 524.000,00 € und Aufwendungen von 484.000,00 €.',
  bloecke:[
    {id:'w', titel:'Wirtschaftlichkeit ermitteln', typ:'rechnen', einheit:' ',
     formel:'round(524000 * f / (484000 * f))',
     frage:'Wie hoch ist die Wirtschaftlichkeit (auf zwei Nachkommastellen gerundet)?',
     antwort:1.08,
     tipp:'Erträge ÷ Aufwendungen.',
     rechenweg:'524.000,00 € ÷ 484.000,00 € = <b>1,08</b>'}
  ],
  hinweise:[
    'Die Wirtschaftlichkeit ist ein Verhältnis aus zwei GuV-Größen. Welche steht oben?',
    'Erträge ÷ Aufwendungen.',
    '524.000,00 € ÷ 484.000,00 € = 1,08 – der Betrieb arbeitet wirtschaftlich.'
  ],
  merke:'Wirtschaftlichkeit = Erträge ÷ Aufwendungen. Über 1: wirtschaftlich.'
},
{
  id:'WK2', modul:'M6R', typ:'kette', stufe:2, titel:'Wirtschaftlichkeit im Jahresvergleich · Beispiel 2',
  tags:['Wirtschaftlichkeit','Vergleich','Rechnen'],
  text:'Für die Schreibwaren Yilmaz e. K. liegen zwei Jahre vor:'
    + '<table class="lager"><tr><th></th><th class="z">Vorjahr</th><th class="z">Berichtsjahr</th></tr>'
    + '<tr><td>Erträge</td><td class="z">400.000,00 €</td><td class="z">450.000,00 €</td></tr>'
    + '<tr><td>Aufwendungen</td><td class="z">380.000,00 €</td><td class="z">441.000,00 €</td></tr></table>'
    + 'Ermittle die Wirtschaftlichkeit beider Jahre (auf zwei Nachkommastellen gerundet).',
  bloecke:[
    {id:'w1', titel:'Wirtschaftlichkeit im Vorjahr', typ:'rechnen', einheit:' ',
     formel:'round(400000 * f / (380000 * f))',
     frage:'Wie hoch war die Wirtschaftlichkeit im Vorjahr?',
     antwort:1.05,
     tipp:'Erträge ÷ Aufwendungen des Vorjahres.',
     rechenweg:'400.000,00 € ÷ 380.000,00 € = <b>1,05</b>'},
    {id:'w2', titel:'Wirtschaftlichkeit im Berichtsjahr', typ:'rechnen', einheit:' ',
     formel:'round(450000 * f / (441000 * f))',
     frage:'Wie hoch ist die Wirtschaftlichkeit im Berichtsjahr?',
     antwort:1.02,
     tipp:'Erträge ÷ Aufwendungen des Berichtsjahres.',
     rechenweg:'450.000,00 € ÷ 441.000,00 € = <b>1,02</b>'}
  ],
  hinweise:[
    'Rechne für jedes Jahr Erträge ÷ Aufwendungen.',
    'Vorjahr 400.000,00 € ÷ 380.000,00 € = 1,05; Berichtsjahr 450.000,00 € ÷ 441.000,00 € = 1,02.',
    'Die Erträge sind gestiegen, die Aufwendungen aber stärker – die Wirtschaftlichkeit ist gesunken, der Betrieb arbeitet aber noch wirtschaftlich.'
  ],
  merke:'Steigende Erträge allein sagen wenig. Erst das Verhältnis zu den Aufwendungen zeigt, ob der Betrieb wirtschaftlicher geworden ist.'
},

/* ---------- Privatkonto (Modul „Erfolgskonten abschließen“) ----------
   3001 Privat ist ein Unterkonto des Eigenkapitals: Entnahmen im Soll, Einlagen im Haben,
   Abschluss über 3000 Eigenkapital. Nur hier im Tutor – sonst kommt das Privatkonto nicht vor. */
{
  id:'PV1', modul:'M6E', typ:'kette', stufe:2, titel:'Privatkonto · Entnahmen, Einlage und Abschluss',
  tags:['Privatkonto','Eigenkapital','Abschluss'],
  text:'Der Inhaber eines Einzelunternehmens hat im Geschäftsjahr<br>1. 1.500,00 € bar aus der Geschäftskasse für private Zwecke entnommen,<br>2. seine private Einkommensteuer von 2.400,00 € vom Geschäftskonto überwiesen,<br>3. 5.000,00 € aus seinem Privatvermögen auf das Geschäftskonto eingezahlt.<br>Buche die drei Vorgänge und schließe das Privatkonto ab.',
  bloecke:[
    {id:'entnahme1', titel:'1. Barentnahme buchen',
     muster:[{seite:'soll', konto:'3001', betrag:1500}, {seite:'haben', konto:'2820', betrag:1500}]},
    {id:'entnahme2', titel:'2. Private Steuer vom Geschäftskonto buchen',
     muster:[{seite:'soll', konto:'3001', betrag:2400}, {seite:'haben', konto:'2800', betrag:2400}]},
    {id:'einlage', titel:'3. Einlage buchen',
     muster:[{seite:'soll', konto:'2800', betrag:5000}, {seite:'haben', konto:'3001', betrag:5000}]},
    {id:'saldo', titel:'Saldo des Privatkontos ermitteln', typ:'rechnen',
     frage:'Wie hoch ist der Saldo des Privatkontos?',
     antwort:1100, formel:'5000 * f - (1500 + 2400) * f',
     tipp:'Entnahmen stehen im Soll, Einlagen im Haben. Ziehe die kleinere Seite von der größeren ab.',
     rechenweg:'Haben (Einlage) 5.000,00 € − Soll (Entnahmen) 3.900,00 € = <b>1.100,00 €</b>. Die Einlagen überwiegen.'},
    {id:'abschluss', titel:'Privatkonto über das Eigenkapital abschließen',
     muster:[{seite:'soll', konto:'3001', betrag:1100}, {seite:'haben', konto:'3000', betrag:1100}]}
  ],
  hinweise:[
    'Das Privatkonto ist ein Unterkonto des Eigenkapitals. Was den Inhaber Geld kostet, mindert das Eigenkapital – auf welcher Seite?',
    'Entnahmen (auch private Steuern vom Geschäftskonto): Soll 3001. Einlagen: Haben 3001. Gegenkonto ist jeweils Kasse oder Bank.',
    'Die Einlagen sind um 1.100,00 € höher als die Entnahmen. Der Saldo steht im Soll und wird ins Eigenkapital übertragen: 3001 an 3000 – das Eigenkapital steigt.'
  ],
  merke:'Privatentnahmen mindern, Privateinlagen erhöhen das Eigenkapital. Gesammelt wird auf 3001 Privat, abgeschlossen über 3000 Eigenkapital – nicht über die GuV, denn das ist kein Erfolg des Unternehmens.'
},
{
  id:'PV2', modul:'M6E', typ:'kette', stufe:3, titel:'Privatkonto und GuV · Eigenkapital zum 31.12.',
  tags:['Privatkonto','Eigenkapital','GuV','Abschluss'],
  text:'Im Laufe des Geschäftsjahres hat der Inhaber eines Einzelunternehmens:'
    + '<ol class="pv-faelle"><li>2.000,00 € bar aus der Geschäftskasse für private Einkäufe entnommen – gebucht: <b>3001 Privat an 2820 Kasse</b>,</li>'
    + '<li>3.000,00 € aus seinem Privatvermögen auf das Geschäftskonto eingezahlt – gebucht: <b>2800 Bank an 3001 Privat</b>,</li>'
    + '<li>die Miete seiner Privatwohnung von 6.000,00 € vom Geschäftskonto überwiesen – gebucht: <b>3001 Privat an 2800 Bank</b>.</li></ol>'
    + 'Das Privatkonto zeigt deshalb zum 31.12.:'
    + '<table class="t-statisch"><tr><th class="s">Soll</th><th class="m" colspan="2">3001 Privat</th><th class="h">Haben</th></tr>'
    + '<tr><td>(1) 2820 Kasse</td><td class="z">2.000,00 €</td><td>(2) 2800 Bank</td><td class="z">3.000,00 €</td></tr>'
    + '<tr><td>(3) 2800 Bank</td><td class="z">6.000,00 €</td><td></td><td></td></tr></table>'
    + 'Das Eigenkapital betrug am 01.01. 80.000,00 €. Das GuV-Konto weist einen Gewinn von 12.000,00 € aus. Schließe das Privatkonto und das Eigenkapital ab.',
  bloecke:[
    {id:'guv', titel:'Gewinn ins Eigenkapital übertragen',
     muster:[{seite:'soll', konto:'8020', betrag:12000}, {seite:'haben', konto:'3000', betrag:12000}]},
    {id:'privat', titel:'Privatkonto über das Eigenkapital abschließen',
     muster:[{seite:'soll', konto:'3000', betrag:5000}, {seite:'haben', konto:'3001', betrag:5000}]},
    {id:'ek', titel:'Eigenkapital zum 31.12. ermitteln', typ:'rechnen',
     frage:'Wie hoch ist das Eigenkapital zum 31.12.?',
     antwort:87000,
     tipp:'Anfangsbestand plus Gewinn, dann den Saldo des Privatkontos berücksichtigen.',
     rechenweg:'80.000,00 € + 12.000,00 € Gewinn − 5.000,00 € Überschuss der Entnahmen = <b>87.000,00 €</b>.'},
    {id:'sbk', titel:'Eigenkapital auf das SBK abschließen',
     muster:[{seite:'soll', konto:'3000', betrag:87000, formel:'ek'}, {seite:'haben', konto:'8010', betrag:87000, formel:'ek'}]}
  ],
  hinweise:[
    'Auf dem Privatkonto stehen Entnahmen im Soll und Einlagen im Haben. Welche Seite ist größer?',
    'Entnahmen 8.000,00 €, Einlage 3.000,00 € – der Überschuss der Entnahmen von 5.000,00 € mindert das Eigenkapital: 3000 an 3001.',
    'Eigenkapital: 80.000,00 € + 12.000,00 € − 5.000,00 € = 87.000,00 €, abgeschlossen mit 3000 an 8010 SBK.'
  ],
  merke:'Eigenkapital am Jahresende = Anfangsbestand + Gewinn (− Verlust) − Entnahmen + Einlagen. Gewinn und Privat werden getrennt abgeschlossen: der Gewinn über die GuV, das Privatkonto direkt.'
},

/* ---------- Modul · Roh-, Hilfs- und Betriebsstoffe bestandsorientiert (BKFH) ----------
   Einkauf auf das Bestandskonto (2000/2020/2030), Verbrauch laut Entnahmescheinen bzw. Inventur (60.. an 20..),
   Abschluss: Schlussbestand an SBK, Aufwandskonto über die GuV. */
/* ---------- Modul · Abschreibung nach Leistungseinheiten ---------- */
/* ---------- Modul · Personalaufwand buchen (M22, 30.10.2026; BK Wirtschaftsinformatik BPE 6.2) ---------- */
/* ---------- Vertiefung · Skonto ---------- */
/* ---------- Vertiefung · Bezugskosten ---------- */
];

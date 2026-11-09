window.POOL_DATEN_suk = () => [
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
  merke:'Bei Handelswaren ist 5010 das richtige Erlöskonto; 5000 gilt für selbst hergestellte Erzeugnisse.',
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
  id:'ER1', modul:'M8', typ:'kette', stufe:1, titel:'Eingangsrechnung Rohstoffe · mit Skonto',
  tags:['Eingangsrechnung','Skonto','Rohstoffe'],
  text:'Wir kaufen Rohstoffe auf Ziel für 8.000,00 € netto zzgl. 19 % Umsatzsteuer. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 2 % Skonto. Buche den Rechnungseingang und die Banküberweisung für beide möglichen Fälle: a) Wir überweisen nach 30 Tagen ohne Abzug, oder b) wir überweisen innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'6000', betrag:8000}, {seite:'soll', konto:'2600', betrag:1520}, {seite:'haben', konto:'4400', betrag:9520}]},
    {id:'zahlungOhne', titel:'Fall a) Überweisung ohne Skontoabzug',
     muster:[{seite:'soll', konto:'4400', betrag:9520}, {seite:'haben', konto:'2800', betrag:9520}]},
    {id:'zahlungMit', titel:'Fall b) Überweisung mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'4400', betrag:9520}, {seite:'haben', konto:'2800', betrag:9329.60},
             {seite:'haben', konto:'6003', betrag:160}, {seite:'haben', konto:'2600', betrag:30.40}]}
  ],
  hinweise:[
    'Rohstoffe haben ein eigenes Skontokonto. Wenn du Skonto abziehst, mindert das sowohl den Aufwand als auch die Vorsteuer – beide waren ja netto bzw. anteilig gebucht.',
    'Der Skontobetrag von 190,40 € (2 % von 9.520,00 €) verteilt sich auf 160,00 € Skonto (6003) und 30,40 € Vorsteuerkorrektur (2600). Die Bank bekommt nur die Differenz.',
    'Zahlung mit Skonto: Soll 4400 Verbindlichkeiten 9.520,00 €. Haben: 2800 Bank 9.329,60 €, 6003 Skonto 160,00 €, 2600 Vorsteuer 30,40 €.'
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
    'Genau wie bei Rohstoffen: Handelswaren haben ihr eigenes Skontokonto 6083 – nicht 6003, das gehört zu den Rohstoffen.',
    '3 % von 7.735,00 € sind 232,05 €. Davon sind 195,00 € Skonto (6083) und 37,05 € Vorsteuerkorrektur (2600).',
    'Zahlung mit Skonto: Soll 4400 mit 7.735,00 €. Haben: 2800 Bank 7.502,95 €, 6083 Skonto 195,00 €, 2600 Vorsteuer 37,05 €.'
  ],
  merke:'Jede Warenart hat ihr eigenes Skontokonto: 6003 für Rohstoffe, 6083 für Handelswaren. Verwechseln kostet die Aufgabe.'
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
  id:'ER5', modul:'M8', typ:'kette', stufe:2, titel:'Eingangsrechnung Rohstoffe · mit Rücksendung',
  tags:['Eingangsrechnung','Skonto','Rücksendung','Rohstoffe'],
  text:'Wir kaufen Rohstoffe auf Ziel für 12.000,00 € netto zzgl. 19 % Umsatzsteuer. Wegen einer Falschlieferung senden wir 15 % der Ware an den Lieferanten zurück. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 2 % Skonto. Buche den Rechnungseingang, die Rücksendung und die Banküberweisung des Restbetrags für beide möglichen Fälle: a) Wir überweisen nach 30 Tagen ohne Abzug, oder b) wir überweisen innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'6000', betrag:12000}, {seite:'soll', konto:'2600', betrag:2280}, {seite:'haben', konto:'4400', betrag:14280}]},
    {id:'minderung', titel:'Rücksendung von 15 % wegen Falschlieferung',
     muster:[{seite:'soll', konto:'4400', betrag:2142}, {seite:'haben', konto:'6002', betrag:1800}, {seite:'haben', konto:'2600', betrag:342}]},
    {id:'zahlungOhne', titel:'Fall a) Überweisung Restbetrag ohne Skontoabzug',
     muster:[{seite:'soll', konto:'4400', betrag:12138}, {seite:'haben', konto:'2800', betrag:12138}]},
    {id:'zahlungMit', titel:'Fall b) Überweisung Restbetrag mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'4400', betrag:12138}, {seite:'haben', konto:'2800', betrag:11895.24},
             {seite:'haben', konto:'6003', betrag:204}, {seite:'haben', konto:'2600', betrag:38.76}]}
  ],
  hinweise:[
    'Eine Rücksendung heißt: Die Ware geht tatsächlich zurück. Gibt es für Rohstoffe ein eigenes Konto für Rücksendungen?',
    'Ja: 6002 Nachlässe und Rücksendungen. 15 % von 12.000,00 € = 1.800,00 € werden dort im Haben gebucht, dazu die anteilige Vorsteuer von 342,00 €. Die Verbindlichkeit sinkt um den Bruttobetrag von 2.142,00 €.',
    'Für die Zahlung zählt nur noch der Restbetrag von 12.138,00 € (14.280,00 € − 2.142,00 €). Das Skonto von 2 % bezieht sich auf diesen Restbetrag, nicht auf die ursprüngliche Rechnung.'
  ],
  merke:'Gibt es ein Konto für Rücksendungen – hier 6002 Nachlässe und Rücksendungen –, wird die Rücksendung dort gebucht. Fehlt es (wie bei 0870), wird direkt auf dem Hauptkonto storniert.'
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
  id:'ER10', modul:'M8', typ:'kette', stufe:3, titel:'Eingangsrechnung Rohstoffe · Rücksendung, Skontofrist prüfen',
  tags:['Eingangsrechnung','Skonto','Skontofrist','Rücksendung','Rohstoffe'],
  text:'Wir kaufen Rohstoffe auf Ziel für 10.000,00 € netto zzgl. 19 % Umsatzsteuer. Rechnungsdatum: 27.06. Zahlungsbedingungen: 10 Tage 2 % Skonto, 30 Tage rein netto. Wegen Beschädigung senden wir 10 % der Rohstoffe an den Lieferanten zurück. Bezahlung des Restbetrags am: 04.07. per Banküberweisung.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'6000', betrag:10000}, {seite:'soll', konto:'2600', betrag:1900}, {seite:'haben', konto:'4400', betrag:11900}]},
    {id:'minderung', titel:'Rücksendung von 10 % wegen Beschädigung',
     muster:[{seite:'soll', konto:'4400', betrag:1190}, {seite:'haben', konto:'6002', betrag:1000}, {seite:'haben', konto:'2600', betrag:190}]},
    {id:'zahlung', titel:'Überweisung des Restbetrags am 04.07. buchen',
     muster:[{seite:'soll', konto:'4400', betrag:10710}, {seite:'haben', konto:'2800', betrag:10495.80},
             {seite:'haben', konto:'6003', betrag:180}, {seite:'haben', konto:'2600', betrag:34.20}]}
  ],
  hinweise:[
    'Vergleiche Rechnungsdatum und Zahlungsdatum mit der Skontofrist. Für Fristen rechnet man jeden Monat mit 30 Tagen.',
    'Vom 27.06. bis zum 30.06. sind es 3 Tage, dazu 4 Tage im Juli – zusammen 7 Tage. Wir zahlen innerhalb der Skontofrist und ziehen 2 % Skonto ab.',
    'Nach der Rücksendung schulden wir noch 10.710,00 €. 2 % Skonto davon sind 214,20 €: 180,00 € auf 6003 Skonto und 34,20 € Vorsteuerkorrektur auf 2600. Die Bank überweist 10.495,80 €.'
  ],
  merke:'Skonto wird vom Restbetrag nach der Rücksendung berechnet – und nur, wenn die Zahlung innerhalb der Skontofrist liegt.'
},
{
  id:'ER11', modul:'M8', typ:'kette', stufe:3, titel:'Überweisung nach Skonto · Rohstoffe',
  tags:['Eingangsrechnung','Skonto','Zurückrechnen','Rohstoffe'],
  text:'Wir haben Rohstoffe auf Ziel gekauft. Der Rechnungseingang ist bereits gebucht. Wir überweisen den Rechnungsbetrag abzüglich 3 % Skonto. Der Überweisungsbetrag beträgt 11.543,00 €.',
  bloecke:[
    {id:'rb', titel:'Rechnungsbetrag ermitteln', typ:'rechnen',
     frage:'Wie hoch war der Rechnungsbetrag (brutto) vor dem Skontoabzug?',
     antwort:11900,
     tipp:'Der Überweisungsbetrag entspricht 97 % des Rechnungsbetrags.',
     rechenweg:'11.543,00 € entsprechen 97 %. 11.543,00 € ÷ 0,97 = <b>11.900,00 €</b> Rechnungsbetrag.'},
    {id:'zahlung', titel:'Überweisung buchen',
     muster:[{seite:'soll', konto:'4400', betrag:11900, formel:'rb'}, {seite:'haben', konto:'2800', betrag:11543},
             {seite:'haben', konto:'6003', betrag:300, formel:'(rb - 11543 * f) * 100 / 119'}, {seite:'haben', konto:'2600', betrag:57, formel:'(rb - 11543 * f) * 19 / 119'}]}
  ],
  hinweise:[
    'Der Überweisungsbetrag ist schon um das Skonto gekürzt. Wie viel Prozent des Rechnungsbetrags sind das?',
    '11.543,00 € sind 97 % – der Rechnungsbetrag ist 11.543,00 € ÷ 0,97 = 11.900,00 €. Das Skonto beträgt brutto 357,00 €.',
    'Das Bruttoskonto von 357,00 € wird aufgeteilt: 357,00 € ÷ 1,19 = 300,00 € auf 6003 Skonto, 57,00 € Vorsteuerkorrektur auf 2600. Die Verbindlichkeit wird mit 11.900,00 € ausgebucht.'
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
  id:'AR1', modul:'M9', typ:'kette', stufe:1, titel:'Ausgangsrechnung eigene Erzeugnisse · mit Skonto',
  tags:['Ausgangsrechnung','Skonto','Erzeugnisse'],
  text:'Wir verkaufen eigene Erzeugnisse auf Ziel für 7.000,00 € netto zzgl. 19 % Umsatzsteuer. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 2 % Skonto. Buche die Ausgangsrechnung und den Zahlungseingang auf dem Bankkonto für beide möglichen Fälle: a) Der Kunde überweist nach 30 Tagen ohne Abzug, oder b) er überweist innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Ausgangsrechnung buchen',
     muster:[{seite:'soll', konto:'2400', betrag:8330}, {seite:'haben', konto:'5000', betrag:7000}, {seite:'haben', konto:'4800', betrag:1330}]},
    {id:'zahlungOhne', titel:'Fall a) Zahlungseingang per Überweisung ohne Skontoabzug',
     muster:[{seite:'soll', konto:'2800', betrag:8330}, {seite:'haben', konto:'2400', betrag:8330}]},
    {id:'zahlungMit', titel:'Fall b) Zahlungseingang per Überweisung mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'2800', betrag:8163.40}, {seite:'soll', konto:'5002', betrag:140},
             {seite:'soll', konto:'4800', betrag:26.60}, {seite:'haben', konto:'2400', betrag:8330}]}
  ],
  hinweise:[
    'Die Forderung entsteht in Höhe des Bruttobetrags. Erlös ist nur der Nettoanteil – die Steuer ist eine Schuld gegenüber dem Finanzamt, kein Ertrag.',
    'Zahlt der Kunde mit Skonto, bekommen wir weniger Geld, als die Forderung ausweist. Der Unterschiedsbetrag zerfällt in zwei Teile: weniger Erlös (5002) und weniger geschuldete Umsatzsteuer (4800) – beide Konten werden dadurch kleiner, also im Soll gebucht.',
    'Skonto von 2 % auf 8.330,00 € sind 166,60 €, davon 140,00 € Erlösminderung (5002) und 26,60 € Umsatzsteuerkorrektur (4800). Die Bank bekommt nur 8.163,40 €.'
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
  id:'AR3', modul:'M9', typ:'kette', stufe:1, titel:'Ausgangsrechnung eigene Erzeugnisse · mit Skonto (Brutto)',
  tags:['Ausgangsrechnung','Skonto','Erzeugnisse','Brutto/Netto'],
  text:'Wir verkaufen eigene Erzeugnisse auf Ziel für 5.950,00 € inkl. 19 % Umsatzsteuer. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 2 % Skonto. Buche die Ausgangsrechnung und den Zahlungseingang auf dem Bankkonto für beide möglichen Fälle: a) Der Kunde überweist nach 30 Tagen ohne Abzug, oder b) er überweist innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Ausgangsrechnung buchen',
     muster:[{seite:'soll', konto:'2400', betrag:5950}, {seite:'haben', konto:'5000', betrag:5000}, {seite:'haben', konto:'4800', betrag:950}]},
    {id:'zahlungOhne', titel:'Fall a) Zahlungseingang per Überweisung ohne Skontoabzug',
     muster:[{seite:'soll', konto:'2800', betrag:5950}, {seite:'haben', konto:'2400', betrag:5950}]},
    {id:'zahlungMit', titel:'Fall b) Zahlungseingang per Überweisung mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'2800', betrag:5831}, {seite:'soll', konto:'5002', betrag:100},
             {seite:'soll', konto:'4800', betrag:19}, {seite:'haben', konto:'2400', betrag:5950}]}
  ],
  hinweise:[
    'Wieder ein Bruttobetrag. Wie viel davon ist Erlös, wie viel Umsatzsteuer?',
    '5.950,00 € ÷ 1,19 = 5.000,00 € netto, die Differenz von 950,00 € ist die Umsatzsteuer.',
    'Skonto von 2 % auf 5.950,00 € sind 119,00 €: 100,00 € Erlösminderung (5002), 19,00 € Umsatzsteuerkorrektur.'
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
    'Handelswaren haben ihr eigenes Skontokonto – nicht dasselbe wie eigene Erzeugnisse.',
    '5012 gehört zu Handelswaren (5010), 5002 zu eigenen Erzeugnissen (5000). Verwechseln kostet die Aufgabe.',
    'Skonto von 3 % auf 5.712,00 € sind 171,36 €: 144,00 € Erlösminderung (5012), 27,36 € Umsatzsteuerkorrektur.'
  ],
  merke:'Wie beim Einkauf hat jede Erlösart ihr eigenes Skontokonto: 5002 für eigene Erzeugnisse, 5012 für Handelswaren.'
},
{
  id:'AR5', modul:'M9', typ:'kette', stufe:2, titel:'Ausgangsrechnung eigene Erzeugnisse · mit Rücksendung',
  tags:['Ausgangsrechnung','Skonto','Rücksendung','Erzeugnisse'],
  text:'Wir verkaufen eigene Erzeugnisse auf Ziel für 11.000,00 € netto zzgl. 19 % Umsatzsteuer. Der Kunde sendet wegen eines Mangels 20 % der Ware zurück. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 2 % Skonto. Buche die Ausgangsrechnung, die Rücksendung und den Zahlungseingang des Restbetrags auf dem Bankkonto für beide möglichen Fälle: a) Der Kunde überweist nach 30 Tagen ohne Abzug, oder b) er überweist innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Ausgangsrechnung buchen',
     muster:[{seite:'soll', konto:'2400', betrag:13090}, {seite:'haben', konto:'5000', betrag:11000}, {seite:'haben', konto:'4800', betrag:2090}]},
    {id:'minderung', titel:'Rücksendung von 20 % wegen Mangel',
     muster:[{seite:'soll', konto:'5001', betrag:2200}, {seite:'soll', konto:'4800', betrag:418}, {seite:'haben', konto:'2400', betrag:2618}]},
    {id:'zahlungOhne', titel:'Fall a) Zahlungseingang per Überweisung Restbetrag ohne Skontoabzug',
     muster:[{seite:'soll', konto:'2800', betrag:10472}, {seite:'haben', konto:'2400', betrag:10472}]},
    {id:'zahlungMit', titel:'Fall b) Zahlungseingang per Überweisung Restbetrag mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'2800', betrag:10262.56}, {seite:'soll', konto:'5002', betrag:176},
             {seite:'soll', konto:'4800', betrag:33.44}, {seite:'haben', konto:'2400', betrag:10472}]}
  ],
  hinweise:[
    'Der Kunde schickt Ware zurück. Gibt es für eigene Erzeugnisse ein eigenes Konto für Rücksendungen?',
    'Ja: 5001 Nachlässe und Rücksendungen. 20 % von 11.000,00 € = 2.200,00 € werden dort im Soll gebucht, dazu die anteilige Umsatzsteuer von 418,00 €. Die Forderung sinkt um den Bruttobetrag von 2.618,00 €.',
    'Für die Zahlung zählt nur noch der Restbetrag von 10.472,00 € (13.090,00 € − 2.618,00 €). Das Skonto von 2 % bezieht sich auf diesen Restbetrag.'
  ],
  merke:'Gibt es ein Konto für Rücksendungen – hier 5001 Nachlässe und Rücksendungen –, wird die Rücksendung dort gebucht: im Soll, weil sie den Erlös mindert.'
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
  id:'AR7', modul:'M9', typ:'kette', stufe:3, titel:'Ausgangsrechnung eigene Erzeugnisse · mit Rücksendung (Brutto)',
  tags:['Ausgangsrechnung','Skonto','Rücksendung','Erzeugnisse','Brutto/Netto'],
  text:'Wir verkaufen eigene Erzeugnisse auf Ziel für 7.140,00 € inkl. 19 % Umsatzsteuer. Der Kunde sendet wegen eines Mangels 25 % der Ware zurück. Zahlungsbedingung: 30 Tage netto, innerhalb von 10 Tagen 2 % Skonto. Buche die Ausgangsrechnung, die Rücksendung und den Zahlungseingang des Restbetrags auf dem Bankkonto für beide möglichen Fälle: a) Der Kunde überweist nach 30 Tagen ohne Abzug, oder b) er überweist innerhalb der Skontofrist.',
  bloecke:[
    {id:'eingang', titel:'Ausgangsrechnung buchen',
     muster:[{seite:'soll', konto:'2400', betrag:7140}, {seite:'haben', konto:'5000', betrag:6000}, {seite:'haben', konto:'4800', betrag:1140}]},
    {id:'minderung', titel:'Rücksendung von 25 % wegen Mangel',
     muster:[{seite:'soll', konto:'5001', betrag:1500}, {seite:'soll', konto:'4800', betrag:285}, {seite:'haben', konto:'2400', betrag:1785}]},
    {id:'zahlungOhne', titel:'Fall a) Zahlungseingang per Überweisung Restbetrag ohne Skontoabzug',
     muster:[{seite:'soll', konto:'2800', betrag:5355}, {seite:'haben', konto:'2400', betrag:5355}]},
    {id:'zahlungMit', titel:'Fall b) Zahlungseingang per Überweisung Restbetrag mit Abzug 2 % Skonto',
     muster:[{seite:'soll', konto:'2800', betrag:5247.90}, {seite:'soll', konto:'5002', betrag:90},
             {seite:'soll', konto:'4800', betrag:17.10}, {seite:'haben', konto:'2400', betrag:5355}]}
  ],
  hinweise:[
    'Zwei Dinge gleichzeitig: Der Bruttobetrag muss zuerst aufgeteilt werden, und die Rücksendung kommt auf das Konto für Rücksendungen.',
    '7.140,00 € ÷ 1,19 = 6.000,00 € netto. 25 % davon, also 1.500,00 €, kommen als Rücksendung auf 5001 Nachlässe und Rücksendungen – zusammen mit der anteiligen Umsatzsteuer von 285,00 €.',
    'Restforderung: 7.140,00 € − 1.785,00 € = 5.355,00 €. Darauf beziehen sich die beiden Zahlungsvarianten.'
  ],
  merke:'Eine Rücksendung mindert den Erlös anteilig – gebucht auf 5001 Nachlässe und Rücksendungen, unabhängig davon, ob die Rechnung netto oder brutto angegeben war.'
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
  id:'AR9', modul:'M9', typ:'kette', stufe:3, titel:'Ausgangsrechnung eigene Erzeugnisse · Skontofrist prüfen',
  tags:['Ausgangsrechnung','Skonto','Skontofrist','Erzeugnisse'],
  text:'Wir verkaufen eigene Erzeugnisse auf Ziel für 8.500,00 € netto zzgl. 19 % Umsatzsteuer. Rechnungsdatum: 18.09. Zahlungsbedingungen: 10 Tage 2 % Skonto, 30 Tage rein netto. Bezahlung durch den Kunden am: 26.09. per Banküberweisung.',
  bloecke:[
    {id:'eingang', titel:'Ausgangsrechnung buchen',
     muster:[{seite:'soll', konto:'2400', betrag:10115}, {seite:'haben', konto:'5000', betrag:8500}, {seite:'haben', konto:'4800', betrag:1615}]},
    {id:'zahlung', titel:'Zahlungseingang am 26.09. buchen',
     muster:[{seite:'soll', konto:'2800', betrag:9912.70}, {seite:'soll', konto:'5002', betrag:170},
             {seite:'soll', konto:'4800', betrag:32.30}, {seite:'haben', konto:'2400', betrag:10115}]}
  ],
  hinweise:[
    'Vergleiche Rechnungsdatum und Zahlungsdatum mit der Skontofrist. Für Fristen rechnet man jeden Monat mit 30 Tagen.',
    'Vom 18.09. bis zum 26.09. sind es 8 Tage. Der Kunde zahlt innerhalb der Skontofrist und zieht 2 % Skonto ab.',
    '2 % Skonto von 10.115,00 € sind 202,30 €: 170,00 € Erlösminderung auf 5002 und 32,30 € Umsatzsteuerkorrektur auf 4800. Auf der Bank gehen 9.912,70 € ein.'
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
  id:'AR11', modul:'M9', typ:'kette', stufe:3, titel:'Zahlungseingang nach Skonto · eigene Erzeugnisse',
  tags:['Ausgangsrechnung','Skonto','Zurückrechnen','Erzeugnisse'],
  text:'Wir haben eigene Erzeugnisse auf Ziel verkauft. Die Ausgangsrechnung ist bereits gebucht. Der Kunde überweist unter Abzug von 1 % Skonto 11.781,00 €.',
  bloecke:[
    {id:'rb', titel:'Rechnungsbetrag ermitteln', typ:'rechnen',
     frage:'Wie hoch war der Rechnungsbetrag (brutto) vor dem Skontoabzug?',
     antwort:11900,
     tipp:'Der Zahlungseingang entspricht 99 % des Rechnungsbetrags.',
     rechenweg:'11.781,00 € entsprechen 99 %. 11.781,00 € ÷ 0,99 = <b>11.900,00 €</b> Rechnungsbetrag.'},
    {id:'zahlung', titel:'Zahlungseingang buchen',
     muster:[{seite:'soll', konto:'2800', betrag:11781}, {seite:'soll', konto:'5002', betrag:100, formel:'(rb - 11781 * f) * 100 / 119'},
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
/* WG-START */{
  id:'WGM1', modul:'WGM', typ:'kette', stufe:1, titel:'Rohstoffe bestandsorientiert einkaufen · mit Rücksendung',
  tags:['Eingangsrechnung','Rücksendung','Rohstoffe','bestandsorientiert'],
  text:'Wir kaufen Rohstoffe auf Ziel für 8.000,00 € netto zzgl. 19 % Umsatzsteuer und buchen den Einkauf bestandsorientiert. Wegen einer Falschlieferung senden wir 10 % der Rohstoffe zurück. Den Restbetrag überweisen wir nach 30 Tagen ohne Abzug.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang bestandsorientiert buchen',
     muster:[{seite:'soll', konto:'2000', betrag:8000}, {seite:'soll', konto:'2600', betrag:1520}, {seite:'haben', konto:'4400', betrag:9520}]},
    {id:'minderung', titel:'Rücksendung von 10 % wegen Falschlieferung',
     muster:[{seite:'soll', konto:'4400', betrag:952}, {seite:'haben', konto:'2000', betrag:800}, {seite:'haben', konto:'2600', betrag:152}]},
    {id:'zahlung', titel:'Überweisung des Restbetrags',
     muster:[{seite:'soll', konto:'4400', betrag:8568}, {seite:'haben', konto:'2800', betrag:8568}]}
  ],
  hinweise:[
    'Bestandsorientiert heißt: Die Rohstoffe kommen zuerst ins Lager – gebucht wird auf dem Bestandskonto, nicht auf einem Aufwandskonto.',
    'Die Rücksendung mindert den Bestand (2000 im Haben) und die Vorsteuer; die Verbindlichkeit sinkt um den Bruttobetrag.',
    'Restbetrag = 9.520,00 € − 952,00 € = 8.568,00 €.'
  ],
  merke:'Bestandsorientierter Einkauf: 2000 Rohstoffe + 2600 Vorsteuer an 4400 · Rücksendung: 4400 an 2000 und 2600 · Aufwand entsteht erst beim Verbrauch.'
},
{
  id:'WGM2', modul:'WGM', typ:'kette', stufe:2, titel:'Hilfsstoffe einkaufen, zurücksenden und verbrauchen',
  tags:['Eingangsrechnung','Rücksendung','Materialverbrauch','bestandsorientiert'],
  text:'Wir kaufen Hilfsstoffe auf Ziel für 4.000,00 € netto zzgl. 19 % Umsatzsteuer (bestandsorientierte Buchung). Ein Viertel der Lieferung ist beschädigt und geht zurück. Den Restbetrag überweisen wir. Laut Materialentnahmescheinen werden im Monat Hilfsstoffe für 2.200,00 € in der Fertigung verbraucht.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang bestandsorientiert buchen',
     muster:[{seite:'soll', konto:'2020', betrag:4000}, {seite:'soll', konto:'2600', betrag:760}, {seite:'haben', konto:'4400', betrag:4760}]},
    {id:'minderung', titel:'Rücksendung von 25 %',
     muster:[{seite:'soll', konto:'4400', betrag:1190}, {seite:'haben', konto:'2020', betrag:1000}, {seite:'haben', konto:'2600', betrag:190}]},
    {id:'zahlung', titel:'Überweisung des Restbetrags',
     muster:[{seite:'soll', konto:'4400', betrag:3570}, {seite:'haben', konto:'2800', betrag:3570}]},
    {id:'verbrauch', titel:'Verbrauch laut Materialentnahmescheinen buchen',
     muster:[{seite:'soll', konto:'6020', betrag:2200}, {seite:'haben', konto:'2020', betrag:2200}]}
  ],
  hinweise:[
    'Hilfsstoffe haben das Bestandskonto 2020 und das Aufwandskonto 6020.',
    'Der Verbrauch macht aus Bestand Aufwand: Aufwandskonto im Soll, Bestandskonto im Haben – ohne Umsatzsteuer, denn es ist ein innerbetrieblicher Vorgang.'
  ],
  merke:'Bestandsorientiert: Einkauf und Rücksendung über 2020, Verbrauch 6020 an 2020 (ohne Umsatzsteuer).'
},
{
  id:'WGM3', modul:'WGM', typ:'kette', stufe:3, titel:'Materialverbrauch über die Inventur ermitteln',
  tags:['Materialverbrauch','Inventur','bestandsorientiert'],
  text:'Das Konto 2000 Rohstoffe zeigt am Jahresende: Anfangsbestand 12.000,00 €, Einkäufe 46.000,00 € netto, Rücksendungen 6.000,00 € netto. Laut Inventur sind noch Rohstoffe für 14.000,00 € auf Lager. Die Rohstoffentnahmen wurden während des Jahres nicht einzeln gebucht.',
  bloecke:[
    {id:'vb', titel:'Rohstoffverbrauch ermitteln', typ:'rechnen',
     frage:'Wie hoch ist der Rohstoffverbrauch des Jahres?',
     antwort:38000,
     tipp:'Verbrauch = Anfangsbestand + Einkäufe − Rücksendungen − Schlussbestand laut Inventur.',
     rechenweg:'12.000,00 € + 46.000,00 € − 6.000,00 € − 14.000,00 € = <b>38.000,00 €</b> Rohstoffverbrauch.'},
    {id:'buchung', titel:'Rohstoffverbrauch buchen',
     muster:[{seite:'soll', konto:'6000', betrag:38000, formel:'vb'}, {seite:'haben', konto:'2000', betrag:38000, formel:'vb'}]}
  ],
  hinweise:[
    'Was am Jahresende nicht mehr auf Lager ist, wurde verbraucht.',
    'Der Verbrauch wird als Aufwand gebucht: 6000 an 2000. Danach stimmt der Saldo von 2000 mit dem Inventurbestand überein.'
  ],
  merke:'Verbrauch laut Inventur = AB + Zugänge − Rücksendungen − SB · Buchung 6000 Aufwendungen für Rohstoffe an 2000 Rohstoffe · Schlussbestand geht ins Schlussbilanzkonto.'
},
{
  id:'WGA1', modul:'WGA', typ:'kette', stufe:1, titel:'Maschine kaufen und abschreiben',
  tags:['Anlagenkauf','Abschreibung','Anschaffungskosten'],
  text:'Am 1. April kaufen wir eine Maschine auf Ziel für 30.000,00 € netto zzgl. 19 % Umsatzsteuer. Wir überweisen den Rechnungsbetrag nach 30 Tagen ohne Abzug. Die Nutzungsdauer beträgt 10 Jahre, linear abgeschrieben.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'0710', betrag:30000}, {seite:'soll', konto:'2600', betrag:5700}, {seite:'haben', konto:'4400', betrag:35700}]},
    {id:'zahlung', titel:'Überweisung des Rechnungsbetrags',
     muster:[{seite:'soll', konto:'4400', betrag:35700}, {seite:'haben', konto:'2800', betrag:35700}]},
    {id:'ak', titel:'Anschaffungskosten ermitteln', typ:'rechnen',
     frage:'Wie hoch sind die Anschaffungskosten der Maschine?',
     antwort:30000,
     tipp:'Die Vorsteuer gehört nicht zu den Anschaffungskosten.',
     rechenweg:'Nettopreis = <b>30.000,00 €</b> Anschaffungskosten (die Vorsteuer wird vom Finanzamt erstattet).'},
    {id:'afa', titel:'Abschreibung zum 31.12. buchen',
     muster:[{seite:'soll', konto:'6500', betrag:2250, formel:'ak / 10 * 9 / 12'}, {seite:'haben', konto:'0710', betrag:2250, formel:'ak / 10 * 9 / 12'}]}
  ],
  hinweise:[
    'Anlagegüter werden auf dem Anlagekonto mit dem Nettobetrag gebucht.',
    'Lineare Abschreibung = Anschaffungskosten ÷ Nutzungsdauer. Im ersten Jahr zählen die Monate ab dem Anschaffungsmonat (April bis Dezember).'
  ],
  merke:'Anlagenkauf: 0710 + 2600 an 4400 · AK = Nettopreis (+ Nebenkosten) · AfA im ersten Jahr zeitanteilig: AK ÷ ND · Monate ÷ 12.'
},
{
  id:'WGA2', modul:'WGA', typ:'kette', stufe:2, titel:'Maschine mit Transport und Montage',
  tags:['Anlagenkauf','Anschaffungsnebenkosten','Abschreibung'],
  text:'Am 1. März erhalten wir die Rechnung für eine CNC-Maschine: Kaufpreis 45.000,00 €, Transport 1.800,00 €, Montage 1.200,00 €, jeweils netto zzgl. 19 % Umsatzsteuer. Die Nutzungsdauer beträgt 8 Jahre, linear abgeschrieben.',
  bloecke:[
    {id:'ak', titel:'Anschaffungskosten ermitteln', typ:'rechnen',
     frage:'Wie hoch sind die Anschaffungskosten der Maschine?',
     antwort:48000,
     tipp:'Anschaffungsnebenkosten wie Transport und Montage gehören zu den Anschaffungskosten.',
     rechenweg:'45.000,00 € + 1.800,00 € + 1.200,00 € = <b>48.000,00 €</b> Anschaffungskosten.'},
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'0710', betrag:48000}, {seite:'soll', konto:'2600', betrag:9120}, {seite:'haben', konto:'4400', betrag:57120}]},
    {id:'afa', titel:'Abschreibung zum 31.12. buchen',
     muster:[{seite:'soll', konto:'6500', betrag:5000, formel:'ak / 8 * 10 / 12'}, {seite:'haben', konto:'0710', betrag:5000, formel:'ak / 8 * 10 / 12'}]}
  ],
  hinweise:[
    'Transport und Montage sind nötig, um die Maschine betriebsbereit zu machen – sie werden aktiviert, nicht als Aufwand gebucht.',
    'Abschreibung im ersten Jahr: März bis Dezember.'
  ],
  merke:'Anschaffungsnebenkosten (Transport, Montage, Fundament …) werden aktiviert und mit abgeschrieben · Vorsteuer ist kein Teil der AK.'
},
{
  id:'WGA3', modul:'WGA', typ:'kette', stufe:3, titel:'Lkw mit Überführung kaufen und abschreiben',
  tags:['Anlagenkauf','Anschaffungsnebenkosten','Abschreibung'],
  text:'Am 12. Oktober kaufen wir einen Lkw für 72.000,00 € netto, dazu stellt der Händler Überführungskosten von 1.200,00 € netto in Rechnung, jeweils zzgl. 19 % Umsatzsteuer. Wir überweisen sofort. Die Nutzungsdauer beträgt 9 Jahre, linear abgeschrieben.',
  bloecke:[
    {id:'ak', titel:'Anschaffungskosten ermitteln', typ:'rechnen',
     frage:'Wie hoch sind die Anschaffungskosten des Lkw?',
     antwort:73200,
     tipp:'Die Überführung ist eine Anschaffungsnebenkostenart.',
     rechenweg:'72.000,00 € + 1.200,00 € = <b>73.200,00 €</b> Anschaffungskosten.'},
    {id:'kauf', titel:'Kauf mit Banküberweisung buchen',
     muster:[{seite:'soll', konto:'0840', betrag:73200}, {seite:'soll', konto:'2600', betrag:13908}, {seite:'haben', konto:'2800', betrag:87108}]},
    {id:'afa', titel:'Abschreibung zum 31.12. buchen',
     muster:[{seite:'soll', konto:'6500', betrag:2033.33, formel:'ak / 9 * 3 / 12'}, {seite:'haben', konto:'0840', betrag:2033.33, formel:'ak / 9 * 3 / 12'}]}
  ],
  hinweise:[
    'Der Anschaffungsmonat zählt voll: Oktober, November, Dezember.',
    'Fahrzeuge stehen auf 0840 Fuhrpark.'
  ],
  merke:'Kauf gegen Bank: 0840 + 2600 an 2800 · AK einschließlich Überführung · AfA = 73.200 ÷ 9 · 3 ÷ 12.'
},
{
  id:'WGA4', modul:'WGA', typ:'kette', stufe:2, titel:'Büromöbel mit Lieferung und Aufbau',
  tags:['Anlagenkauf','Anschaffungsnebenkosten','Abschreibung'],
  text:'Am 3. Juni erhalten wir Büromöbel (Geschäftsausstattung) für 12.000,00 € netto, dazu Lieferung und Aufbau für 480,00 € netto, jeweils zzgl. 19 % Umsatzsteuer, auf Ziel. Die Nutzungsdauer beträgt 13 Jahre, linear abgeschrieben.',
  bloecke:[
    {id:'ak', titel:'Anschaffungskosten ermitteln', typ:'rechnen',
     frage:'Wie hoch sind die Anschaffungskosten der Büromöbel?',
     antwort:12480,
     tipp:'Lieferung und Aufbau sind Anschaffungsnebenkosten.',
     rechenweg:'12.000,00 € + 480,00 € = <b>12.480,00 €</b> Anschaffungskosten.'},
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'0870', betrag:12480}, {seite:'soll', konto:'2600', betrag:2371.20}, {seite:'haben', konto:'4400', betrag:14851.20}]},
    {id:'afa', titel:'Abschreibung zum 31.12. buchen',
     muster:[{seite:'soll', konto:'6500', betrag:560, formel:'ak / 13 * 7 / 12'}, {seite:'haben', konto:'0870', betrag:560, formel:'ak / 13 * 7 / 12'}]}
  ],
  hinweise:['Geschäftsausstattung steht auf 0870.', 'Abschreibung im ersten Jahr: Juni bis Dezember = 7 Monate.'],
  merke:'Auch Lieferung und Aufbau gehören zu den Anschaffungskosten · AfA zeitanteilig ab dem Anschaffungsmonat.'
},
{
  id:'WGA5', modul:'WGA', typ:'kette', stufe:3, titel:'Abschreibung im Folgejahr und Buchwert',
  tags:['Abschreibung','Buchwert'],
  text:'Eine Verpackungsmaschine wurde am 1. September des Vorjahres für 36.000,00 € netto (Anschaffungskosten) gekauft; Nutzungsdauer 6 Jahre, linear. Im Vorjahr wurde zeitanteilig abgeschrieben.',
  bloecke:[
    {id:'vj', titel:'Abschreibung des Vorjahres', typ:'rechnen',
     frage:'Wie hoch war die Abschreibung im Vorjahr?',
     antwort:2000,
     tipp:'September bis Dezember = 4 Monate.',
     rechenweg:'36.000,00 € ÷ 6 = 6.000,00 € im Jahr; 6.000,00 € · 4 ÷ 12 = <b>2.000,00 €</b>.'},
    {id:'afa', titel:'Abschreibung im laufenden Jahr buchen',
     muster:[{seite:'soll', konto:'6500', betrag:6000}, {seite:'haben', konto:'0710', betrag:6000}]},
    {id:'bw', titel:'Buchwert zum 31.12. des laufenden Jahres', typ:'rechnen',
     frage:'Wie hoch ist der Buchwert der Maschine am 31.12. des laufenden Jahres?',
     antwort:28000,
     tipp:'Anschaffungskosten minus alle bisherigen Abschreibungen.',
     rechenweg:'36.000,00 € − 2.000,00 € − 6.000,00 € = <b>28.000,00 €</b>.'}
  ],
  hinweise:['Ab dem zweiten Jahr wird für das volle Jahr abgeschrieben.'],
  merke:'Lineare AfA: gleicher Jahresbetrag, nur im Anschaffungsjahr zeitanteilig · Buchwert = AK − bisherige Abschreibungen.'
},
{
  id:'WGM4', modul:'WGM', typ:'kette', stufe:2, titel:'Betriebsstoffe einkaufen und verbrauchen',
  tags:['Eingangsrechnung','Materialverbrauch','bestandsorientiert'],
  text:'Wir kaufen Schmierstoffe und Reinigungsmittel (Betriebsstoffe) für 2.500,00 € netto zzgl. 19 % Umsatzsteuer gegen Banküberweisung und buchen bestandsorientiert. Im Laufe des Monats werden laut Entnahmescheinen Betriebsstoffe für 1.150,00 € verbraucht.',
  bloecke:[
    {id:'kauf', titel:'Kauf gegen Bank bestandsorientiert buchen',
     muster:[{seite:'soll', konto:'2030', betrag:2500}, {seite:'soll', konto:'2600', betrag:475}, {seite:'haben', konto:'2800', betrag:2975}]},
    {id:'verbrauch', titel:'Verbrauch buchen',
     muster:[{seite:'soll', konto:'6030', betrag:1150}, {seite:'haben', konto:'2030', betrag:1150}]}
  ],
  hinweise:['Betriebsstoffe: Bestandskonto 2030, Aufwandskonto 6030.'],
  merke:'Roh-, Hilfs- und Betriebsstoffe bestandsorientiert: Einkauf auf 2000/2020/2030, Verbrauch 6000/6020/6030 an das Bestandskonto.'
},
{
  id:'WGM5', modul:'WGM', typ:'kette', stufe:3, titel:'Rohstoffe: Einkauf, Rücksendung und Verbrauch über die Inventur',
  tags:['Eingangsrechnung','Rücksendung','Materialverbrauch','Inventur'],
  text:'Anfangsbestand Rohstoffe 9.000,00 €. Im Dezember kaufen wir Rohstoffe für 20.000,00 € netto zzgl. 19 % USt auf Ziel (bestandsorientiert); 5 % senden wir wegen Mängeln zurück. Sonst gab es im Jahr keine Rohstoffeinkäufe. Laut Inventur sind am 31.12. Rohstoffe für 7.000,00 € auf Lager.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang bestandsorientiert buchen',
     muster:[{seite:'soll', konto:'2000', betrag:20000}, {seite:'soll', konto:'2600', betrag:3800}, {seite:'haben', konto:'4400', betrag:23800}]},
    {id:'minderung', titel:'Rücksendung von 5 %',
     muster:[{seite:'soll', konto:'4400', betrag:1190}, {seite:'haben', konto:'2000', betrag:1000}, {seite:'haben', konto:'2600', betrag:190}]},
    {id:'vb', titel:'Rohstoffverbrauch ermitteln', typ:'rechnen',
     frage:'Wie hoch ist der Rohstoffverbrauch des Jahres?',
     antwort:21000,
     tipp:'Anfangsbestand + Zugänge − Rücksendungen − Schlussbestand.',
     rechenweg:'9.000,00 € + 20.000,00 € − 1.000,00 € − 7.000,00 € = <b>21.000,00 €</b>.'},
    {id:'buchung', titel:'Rohstoffverbrauch buchen',
     muster:[{seite:'soll', konto:'6000', betrag:21000, formel:'vb'}, {seite:'haben', konto:'2000', betrag:21000, formel:'vb'}]}
  ],
  hinweise:['Die Rücksendung mindert den Bestand auf 2000 direkt.', 'Der Verbrauch ergibt sich als Differenz zum Inventurbestand.'],
  merke:'Bestandsorientiert: Zugänge und Rücksendungen über das Bestandskonto, Verbrauch = AB + Zugänge − Rücksendungen − SB, gebucht 6000 an 2000.'
},
{
  id:'BV3', modul:'M6B', typ:'kette', stufe:2, titel:'Unfertige Erzeugnisse · Minderbestand',
  tags:['Bestandsveränderungen','Unfertige Erzeugnisse','Abschluss','GuV'],
  text:'Für die unfertigen Erzeugnisse liegen zum Jahresende folgende Werte vor:'
    + '<table class="lager"><tr><td>Anfangsbestand 01.01.</td><td class="z">24.000,00 €</td></tr><tr><td>Schlussbestand laut Inventur 31.12.</td><td class="z">18.500,00 €</td></tr></table>'
    + 'Buche die Bestandsveränderung und schließe die Konten ab.',
  bloecke:[
    {id:'bestand', titel:'Bestandsveränderung buchen',
     muster:[{seite:'soll', konto:'5200', betrag:5500}, {seite:'haben', konto:'2100', betrag:5500}]},
    {id:'sbk', titel:'Schlussbestand auf das SBK abschließen',
     muster:[{seite:'soll', konto:'8010', betrag:18500}, {seite:'haben', konto:'2100', betrag:18500}]},
    {id:'guv', titel:'Konto 5200 über die GuV abschließen',
     muster:[{seite:'soll', konto:'8020', betrag:5500}, {seite:'haben', konto:'5200', betrag:5500}]},
    {id:'ergebnis', titel:'Wirkung auf das Ergebnis bestimmen', typ:'rechnen',
     frage:'Wie wirkt sich die Bestandsveränderung auf das Ergebnis aus?', richtung:'ab',
     antwort:5500,
     tipp:'Ein Minderbestand steht im Soll der GuV.',
     rechenweg:'Minderbestand von 5.500,00 € – er wirkt wie ein Aufwand und <b>vermindert das Ergebnis um 5.500,00 €</b>.'}
  ],
  hinweise:['Liegt jetzt mehr oder weniger auf Lager?', 'Minderbestand: 5200 an 2100; Abschluss: GuV an 5200.'],
  merke:'Minderbestand = Schlussbestand unter Anfangsbestand: 5200 an 2100 · senkt über die GuV das Ergebnis.'
},
{
  id:'BV4', modul:'M6B', typ:'kette', stufe:3, titel:'Unfertige und fertige Erzeugnisse',
  tags:['Bestandsveränderungen','Abschluss','GuV'],
  text:'Zum Jahresende liegen folgende Werte vor:'
    + '<table class="lager"><tr><td>Unfertige Erzeugnisse: AB / SB laut Inventur</td><td class="z">12.000,00 € / 16.000,00 €</td></tr><tr><td>Fertige Erzeugnisse: AB / SB laut Inventur</td><td class="z">45.000,00 € / 38.000,00 €</td></tr></table>'
    + 'Buche beide Bestandsveränderungen und bestimme die Gesamtwirkung auf das Ergebnis.',
  bloecke:[
    {id:'ue', titel:'Bestandsveränderung der unfertigen Erzeugnisse buchen',
     muster:[{seite:'soll', konto:'2100', betrag:4000}, {seite:'haben', konto:'5200', betrag:4000}]},
    {id:'fe', titel:'Bestandsveränderung der fertigen Erzeugnisse buchen',
     muster:[{seite:'soll', konto:'5220', betrag:7000}, {seite:'haben', konto:'2200', betrag:7000}]},
    {id:'ergebnis', titel:'Gesamtwirkung auf das Ergebnis', typ:'rechnen',
     frage:'Um wie viel ändert sich das Ergebnis durch beide Bestandsveränderungen zusammen?', richtung:'ab',
     antwort:3000,
     tipp:'Mehrbestand (+) und Minderbestand (−) verrechnen.',
     rechenweg:'+ 4.000,00 € (unfertige) − 7.000,00 € (fertige) = <b>− 3.000,00 €</b>: Das Ergebnis sinkt um 3.000,00 €.'}
  ],
  hinweise:['Jede Erzeugnisart hat ihr eigenes Bestandskonto (2100, 2200).'],
  merke:'Mehrbestand erhöht, Minderbestand senkt das Ergebnis · Bestandsveränderungen je Erzeugnisart getrennt buchen.'
},
{
  id:'AK5', modul:'M11', typ:'anschaffungskosten', stufe:1, titel:'Anschaffungskosten einer Verpackungsmaschine',
  tags:['Anschaffungskosten','Nebenkosten'],
  text:'Für eine neue Verpackungsmaschine liegen folgende Kostenpositionen vor. Ordne zu, was zu den Anschaffungskosten gehört, und ermittle die Anschaffungskosten.',
  posten:[
    {label:'Kaufpreis, zzgl. 19 % USt.', wert:28000, dazu:true},
    {label:'Fracht, zzgl. 19 % USt.', wert:650, dazu:true},
    {label:'Fundament für die Maschine, zzgl. 19 % USt.', wert:1350, dazu:true},
    {label:'Vorsteuer (19 % auf die Nettobeträge)', wert:5700, dazu:false,
     grund:'Die Vorsteuer wird vom Finanzamt erstattet und gehört nicht zu den Anschaffungskosten.'},
    {label:'Verpackungsmaterial für die ersten Aufträge', wert:900, dazu:false,
     grund:'Das ist Material für die Produktion, nicht Teil der Maschine.'}
  ],
  hinweise:['Alles, was nötig ist, damit die Maschine betriebsbereit ist – netto.'],
  merke:'Anschaffungskosten = Kaufpreis + Anschaffungsnebenkosten (netto) · Vorsteuer und laufende Kosten gehören nicht dazu.'
},
{
  id:'AK6', modul:'M11', typ:'anschaffungskosten', stufe:2, titel:'Anschaffungskosten eines Lieferwagens',
  tags:['Anschaffungskosten','Nebenkosten'],
  text:'Für einen Lieferwagen liegen folgende Positionen vor. Ordne zu und ermittle die Anschaffungskosten.',
  posten:[
    {label:'Listenpreis, zzgl. 19 % USt.', wert:42000, dazu:true},
    {label:'Überführung, zzgl. 19 % USt.', wert:900, dazu:true},
    {label:'Kennzeichen und Zulassung', wert:150, dazu:true},
    {label:'Kfz-Steuer für das erste Jahr', wert:300, dazu:false,
     grund:'Die Kfz-Steuer fällt für die Nutzung jedes Jahr an – sie ist laufender Aufwand.'},
    {label:'Haftpflichtversicherung für das erste Jahr', wert:850, dazu:false,
     grund:'Versicherungsbeiträge sind laufender Aufwand.'},
    {label:'erste Tankfüllung', wert:95, dazu:false,
     grund:'Kraftstoff ist laufender Betriebsaufwand.'}
  ],
  hinweise:['Zulassung und Überführung machen das Fahrzeug betriebsbereit; Steuer, Versicherung und Kraftstoff fallen laufend an.'],
  merke:'Anschaffungsnebenkosten beim Fahrzeug: Überführung, Zulassung, Kennzeichen · keine Anschaffungskosten: Kfz-Steuer, Versicherung, Kraftstoff.'
},
{
  id:'AK7', modul:'M11', typ:'anschaffungskosten', stufe:3, titel:'Anschaffungskosten einer Produktionsanlage',
  tags:['Anschaffungskosten','Nebenkosten'],
  text:'Für eine Produktionsanlage liegen folgende Positionen vor. Ordne zu und ermittle die Anschaffungskosten.',
  posten:[
    {label:'Kaufpreis, zzgl. 19 % USt.', wert:120000, dazu:true},
    {label:'Transportversicherung für die Anlieferung, zzgl. 19 % USt.', wert:600, dazu:true},
    {label:'Montage durch den Hersteller, zzgl. 19 % USt.', wert:4800, dazu:true},
    {label:'Probelauf bis zur Betriebsbereitschaft, zzgl. 19 % USt.', wert:1100, dazu:true},
    {label:'Wartungsvertrag für das erste Jahr, zzgl. 19 % USt.', wert:2400, dazu:false,
     grund:'Wartung fällt laufend während der Nutzung an – sie ist Aufwand.'},
    {label:'Zinsen für den Kredit zur Finanzierung der Anlage', wert:3200, dazu:false,
     grund:'Finanzierungskosten gehören nicht zu den Anschaffungskosten, sie sind Zinsaufwand.'}
  ],
  hinweise:['Bis zur Betriebsbereitschaft: dazu · danach oder für die Finanzierung: nicht dazu.'],
  merke:'Anschaffungskosten: alle Ausgaben bis zur Betriebsbereitschaft (Kaufpreis, Transport, Versicherung des Transports, Montage, Probelauf) · nicht: Wartung, Finanzierungszinsen, Vorsteuer.'
},
{
  id:'IB4', modul:'M1', typ:'bilanzaufstellung', reihenfolge:true, stufe:2, titel:'Bilanz eines Industriebetriebs · Beispiel 1',
  tags:['Inventar','Bilanzgliederung','Eigenkapital'],
  bilanzTitel:'Bilanz der Holzwerk Bauer e. K. zum 31.12.',
  text:'Aus dem Inventar der Holzwerk Bauer e. K. sind die folgenden Werte bekannt. Ordne jeden Posten der richtigen Bilanzposition zu und ermittle das Eigenkapital.',
  posten:[
    {name:'Technische Anlagen und Maschinen', betrag:185000, gruppe:'AV', rang:2},
    {name:'Rohstoffe',                        betrag:42000,  gruppe:'UV', rang:5},
    {name:'Bebaute Grundstücke',              betrag:260000, gruppe:'AV', rang:1},
    {name:'Fertige Erzeugnisse',              betrag:31000,  gruppe:'UV', rang:5.2},
    {name:'Verbindlichkeiten a. LL',          betrag:38000,  gruppe:'FK', rang:11},
    {name:'Forderungen a. LL',                betrag:27500,  gruppe:'UV', rang:6},
    {name:'Darlehensschulden',                betrag:150000, gruppe:'FK', rang:9},
    {name:'Bankguthaben',                     betrag:16500,  gruppe:'UV', rang:7},
    {name:'Geschäftsausstattung',             betrag:22000,  gruppe:'AV', rang:3}
  ],
  hinweise:['Vorräte: Roh-, Hilfs- und Betriebsstoffe vor unfertigen und fertigen Erzeugnissen.', 'Eigenkapital = Vermögen − Schulden.'],
  merke:'Aktiva nach Liquidität: Anlagevermögen, dann Umlaufvermögen (Vorräte, Forderungen, liquide Mittel) · Passiva: Eigenkapital, Fremdkapital (langfristig vor kurzfristig).'
},
{
  id:'IB5', modul:'M1', typ:'bilanzaufstellung', reihenfolge:true, stufe:3, titel:'Bilanz eines Industriebetriebs · Beispiel 2',
  tags:['Inventar','Bilanzgliederung','Eigenkapital'],
  bilanzTitel:'Bilanz der Metallbau Kern e. K. zum 31.12.',
  text:'Aus dem Inventar der Metallbau Kern e. K. sind die folgenden Werte bekannt. Ordne jeden Posten der richtigen Bilanzposition zu und ermittle das Eigenkapital.',
  posten:[
    {name:'Fuhrpark',                         betrag:54000,  gruppe:'AV', rang:4},
    {name:'Unfertige Erzeugnisse',            betrag:18000,  gruppe:'UV', rang:5.1},
    {name:'Kurzfristige Bankverbindlichkeiten', betrag:24000, gruppe:'FK', rang:10},
    {name:'Hilfsstoffe',                      betrag:9500,   gruppe:'UV', rang:5},
    {name:'Technische Anlagen und Maschinen', betrag:140000, gruppe:'AV', rang:2},
    {name:'Kasse',                            betrag:1800,   gruppe:'UV', rang:8},
    {name:'Fertige Erzeugnisse',              betrag:36500,  gruppe:'UV', rang:5.2},
    {name:'Verbindlichkeiten a. LL',          betrag:47300,  gruppe:'FK', rang:11},
    {name:'Forderungen a. LL',                betrag:33000,  gruppe:'UV', rang:6},
    {name:'Darlehensschulden',                betrag:95000,  gruppe:'FK', rang:9}
  ],
  hinweise:['Vorräte: Hilfsstoffe, unfertige, dann fertige Erzeugnisse.', 'Eigenkapital = Vermögen − Schulden.'],
  merke:'Gliederung nach § 266 HGB: Anlagevermögen, Vorräte, Forderungen, Kasse/Bank · Fremdkapital nach Fristigkeit.'
},
{
  id:'IB6', modul:'M1', typ:'bilanzaufstellung', reihenfolge:true, stufe:1, titel:'Bilanz eines Industriebetriebs · Gartenmöbel',
  tags:['Inventar','Bilanzgliederung','Eigenkapital'],
  bilanzTitel:'Bilanz der Gartenmöbel Sommer e. K. zum 31.12.',
  text:'Aus dem Inventar der Gartenmöbel Sommer e. K. sind die folgenden Werte bekannt. Ordne jeden Posten der richtigen Bilanzposition zu und ermittle das Eigenkapital.',
  posten:[
    {name:'Technische Anlagen und Maschinen', betrag:96000, gruppe:'AV', rang:2},
    {name:'Rohstoffe', betrag:28000, gruppe:'UV', rang:5},
    {name:'Darlehensschulden', betrag:70000, gruppe:'FK', rang:9},
    {name:'Geschäftsausstattung', betrag:18000, gruppe:'AV', rang:3},
    {name:'Forderungen a. LL', betrag:21000, gruppe:'UV', rang:6},
    {name:'Bankguthaben', betrag:12500, gruppe:'UV', rang:7},
    {name:'Verbindlichkeiten a. LL', betrag:26500, gruppe:'FK', rang:11},
    {name:'Kasse', betrag:1200, gruppe:'UV', rang:8}
  ],
  hinweise:['Aktiva: Anlagevermögen, dann Umlaufvermögen (Vorräte, Forderungen, liquide Mittel).', 'Eigenkapital = Vermögen − Schulden.'],
  merke:'Die Bilanz zeigt Vermögen (Aktiva) und Kapital (Passiva) · Eigenkapital = Vermögen − Fremdkapital.'
},
{
  id:'IB7', modul:'M1', typ:'bilanzaufstellung', reihenfolge:true, stufe:2, titel:'Bilanz eines Industriebetriebs · Fahrradbau',
  tags:['Inventar','Bilanzgliederung','Eigenkapital'],
  bilanzTitel:'Bilanz der Fahrradbau Klein e. K. zum 31.12.',
  text:'Aus dem Inventar der Fahrradbau Klein e. K. sind die folgenden Werte bekannt. Ordne jeden Posten der richtigen Bilanzposition zu und ermittle das Eigenkapital.',
  posten:[
    {name:'Bebaute Grundstücke', betrag:180000, gruppe:'AV', rang:1},
    {name:'Fertige Erzeugnisse', betrag:44000, gruppe:'UV', rang:5.2},
    {name:'Fuhrpark', betrag:38000, gruppe:'AV', rang:4},
    {name:'Kurzfristige Bankverbindlichkeiten', betrag:15000, gruppe:'FK', rang:10},
    {name:'Hilfsstoffe', betrag:7500, gruppe:'UV', rang:5},
    {name:'Technische Anlagen und Maschinen', betrag:120000, gruppe:'AV', rang:2},
    {name:'Verbindlichkeiten a. LL', betrag:33500, gruppe:'FK', rang:11},
    {name:'Forderungen a. LL', betrag:29000, gruppe:'UV', rang:6},
    {name:'Darlehensschulden', betrag:140000, gruppe:'FK', rang:9},
    {name:'Bankguthaben', betrag:9800, gruppe:'UV', rang:7}
  ],
  hinweise:['Aktiva: Anlagevermögen, dann Umlaufvermögen (Vorräte, Forderungen, liquide Mittel).', 'Eigenkapital = Vermögen − Schulden.'],
  merke:'Die Bilanz zeigt Vermögen (Aktiva) und Kapital (Passiva) · Eigenkapital = Vermögen − Fremdkapital.'
},
{
  id:'IB8', modul:'M1', typ:'bilanzaufstellung', reihenfolge:true, stufe:3, titel:'Bilanz eines Industriebetriebs · Kunststoffwerk',
  tags:['Inventar','Bilanzgliederung','Eigenkapital'],
  bilanzTitel:'Bilanz der Kunststoffwerk Lenz e. K. zum 31.12.',
  text:'Aus dem Inventar der Kunststoffwerk Lenz e. K. sind die folgenden Werte bekannt. Ordne jeden Posten der richtigen Bilanzposition zu und ermittle das Eigenkapital.',
  posten:[
    {name:'Unfertige Erzeugnisse', betrag:22000, gruppe:'UV', rang:5.1},
    {name:'Betriebsstoffe', betrag:4300, gruppe:'UV', rang:5.05},
    {name:'Bebaute Grundstücke', betrag:240000, gruppe:'AV', rang:1},
    {name:'Geschäftsausstattung', betrag:31000, gruppe:'AV', rang:3},
    {name:'Darlehensschulden', betrag:165000, gruppe:'FK', rang:9},
    {name:'Rohstoffe', betrag:51000, gruppe:'UV', rang:5},
    {name:'Kasse', betrag:2100, gruppe:'UV', rang:8},
    {name:'Fertige Erzeugnisse', betrag:39500, gruppe:'UV', rang:5.2},
    {name:'Technische Anlagen und Maschinen', betrag:210000, gruppe:'AV', rang:2},
    {name:'Verbindlichkeiten a. LL', betrag:58400, gruppe:'FK', rang:11},
    {name:'Fuhrpark', betrag:46000, gruppe:'AV', rang:4},
    {name:'Forderungen a. LL', betrag:37600, gruppe:'UV', rang:6},
    {name:'Kurzfristige Bankverbindlichkeiten', betrag:28000, gruppe:'FK', rang:10}
  ],
  hinweise:['Aktiva: Anlagevermögen, dann Umlaufvermögen (Vorräte, Forderungen, liquide Mittel).', 'Eigenkapital = Vermögen − Schulden.'],
  merke:'Die Bilanz zeigt Vermögen (Aktiva) und Kapital (Passiva) · Eigenkapital = Vermögen − Fremdkapital.'
},
{
  id:'TW1', modul:'M3', gruppe:'Bank', typ:'kontenabschluss', stufe:2, titel:'T-Konto Bank · Industriebetrieb',
  tags:['T-Konto','Bank','Schlussbestand'],
  konto:'2800', anfangsbestand:4000,
  faelle:[
    {text:'Ein Kunde überweist eine Rechnung über 1.800 EUR.', betrag:1800, seite:'soll'},
    {text:'Wir überweisen eine Lieferantenrechnung über 950 EUR.', betrag:950, seite:'haben'},
    {text:'Wir verkaufen eigene Erzeugnisse gegen Barzahlung über 300 EUR.', betrag:300, seite:null, grund:'Das Geld geht in die Kasse, nicht auf das Bankkonto.'},
    {text:'Wir heben 500 EUR vom Bankkonto für die Kasse ab.', betrag:500, seite:'haben'},
    {text:'Die Bank zahlt uns ein Darlehen über 5.000 EUR aus.', betrag:5000, seite:'soll'},
    {text:'Wir kaufen Rohstoffe auf Ziel für 1.200 EUR.', betrag:1200, seite:null, grund:'Auf Ziel: Es entsteht eine Verbindlichkeit, die Bank ist noch nicht betroffen.'}
  ],
  hinweise:['Bank ist ein Aktivkonto: Zugänge im Soll, Abgänge im Haben.', 'Nur Vorgänge mit Geldbewegung auf dem Bankkonto werden gebucht.'],
  merke:'Aktivkonto Bank: AB und Zugänge im Soll, Abgänge und SB im Haben · Zielgeschäfte berühren die Bank erst bei Zahlung.'
},
{
  id:'TW2', modul:'M3', gruppe:'Rohstoffe', typ:'kontenabschluss', stufe:3, titel:'T-Konto Rohstoffe · bestandsorientiert',
  tags:['T-Konto','Rohstoffe','Schlussbestand','bestandsorientiert'],
  konten:[{konto:'2000', anfangsbestand:6000, label:'2000 Rohstoffe'}],
  faelle:[
    {text:'Wir kaufen Rohstoffe auf Ziel für 2.500 EUR.', betrag:2500, seite:'soll'},
    {text:'Wegen eines Mangels senden wir Rohstoffe für 300 EUR an den Lieferanten zurück.', betrag:300, seite:'haben'},
    {text:'Laut Materialentnahmeschein gehen Rohstoffe für 3.100 EUR in die Fertigung.', betrag:3100, seite:'haben'},
    {text:'Wir bestellen Rohstoffe für 1.000 EUR, Lieferung nächste Woche.', betrag:1000, seite:null, grund:'Gebucht wird erst bei Lieferung – der Bestand hat sich noch nicht verändert.'},
    {text:'Wir kaufen Rohstoffe gegen Banküberweisung für 900 EUR.', betrag:900, seite:'soll'}
  ],
  hinweise:['Bestandsorientiert: Einkäufe erhöhen das Bestandskonto, Rücksendungen und Verbrauch mindern es.'],
  merke:'Rohstoffkonto (bestandsorientiert): Zugänge im Soll, Rücksendungen und Verbrauch im Haben · Schlussbestand = Saldo.'
},
{
  id:'TW3', modul:'M3', gruppe:'Bank', typ:'kontenabschluss', stufe:2, titel:'T-Konto Kasse',
  tags:['T-Konto','Kasse','Schlussbestand'],
  konto:'2820', anfangsbestand:800,
  faelle:[
    {text:'Wir verkaufen eigene Erzeugnisse bar für 595 EUR.', betrag:595, seite:'soll'},
    {text:'Wir zahlen 500 EUR aus der Kasse auf das Bankkonto ein.', betrag:500, seite:'haben'},
    {text:'Wir bezahlen Porto bar, 30 EUR.', betrag:30, seite:'haben'},
    {text:'Wir heben 400 EUR vom Bankkonto für die Kasse ab.', betrag:400, seite:'soll'},
    {text:'Ein Kunde begleicht seine Rechnung per Überweisung über 700 EUR.', betrag:700, seite:null, grund:'Die Überweisung geht auf das Bankkonto, nicht in die Kasse.'}
  ],
  hinweise:['Die Kasse ist ein Aktivkonto und kann nie einen negativen Bestand haben.'],
  merke:'Kasse: Bareinnahmen im Soll, Barausgaben im Haben · Überweisungen betreffen die Bank.'
},
{
  id:'TW4', modul:'M3', gruppe:'Forderungen und Verbindlichkeiten', typ:'kontenabschluss', stufe:4, titel:'Forderungen und Verbindlichkeiten · Industriebetrieb',
  tags:['T-Konto','Forderungen','Verbindlichkeiten','Schlussbestand'],
  konten:[
    {konto:'2400', anfangsbestand:3000, label:'2400 Forderungen'},
    {konto:'4400', anfangsbestand:2200, label:'4400 Verbindlichkeiten'}
  ],
  faelle:[
    {text:'Wir verkaufen eigene Erzeugnisse auf Ziel über 2.380 EUR.', betrag:2380, konto:'2400', seite:'soll'},
    {text:'Wir kaufen Rohstoffe auf Ziel über 1.190 EUR.', betrag:1190, konto:'4400', seite:'haben'},
    {text:'Ein Kunde überweist 1.500 EUR.', betrag:1500, konto:'2400', seite:'haben'},
    {text:'Wir überweisen einem Lieferanten 900 EUR.', betrag:900, konto:'4400', seite:'soll'},
    {text:'Wir kaufen eine Maschine auf Ziel über 3.570 EUR.', betrag:3570, konto:'4400', seite:'haben'}
  ],
  hinweise:['Forderungen (Aktiv): Zugang im Soll · Verbindlichkeiten (Passiv): Zugang im Haben.'],
  merke:'Forderungen steigen im Soll und sinken im Haben · Verbindlichkeiten steigen im Haben und sinken im Soll.'
},
{
  id:'AR13', modul:'M9', typ:'kette', stufe:2, titel:'Zahlungseingang mit 3 % Skonto · eigene Erzeugnisse',
  tags:['Ausgangsrechnung','Skonto','Erzeugnisse'],
  text:'Wir verkaufen eigene Erzeugnisse auf Ziel für 12.500,00 € netto zzgl. 19 % Umsatzsteuer. Der Kunde überweist innerhalb der Skontofrist unter Abzug von 3 % Skonto.',
  bloecke:[
    {id:'eingang', titel:'Ausgangsrechnung buchen',
     muster:[{seite:'soll', konto:'2400', betrag:14875}, {seite:'haben', konto:'5000', betrag:12500}, {seite:'haben', konto:'4800', betrag:2375}]},
    {id:'zahlungMit', titel:'Zahlungseingang mit 3 % Skonto',
     muster:[{seite:'soll', konto:'2800', betrag:14428.75}, {seite:'soll', konto:'5002', betrag:375},
             {seite:'soll', konto:'4800', betrag:71.25}, {seite:'haben', konto:'2400', betrag:14875}]}
  ],
  hinweise:['Skonto: 3 % von 14.875,00 € = 446,25 €, davon 375,00 € Erlösminderung und 71,25 € Umsatzsteuer.'],
  merke:'Kundenskonto mindert Erlös (5002) und Umsatzsteuer (4800) · die Forderung wird voll ausgebucht.'
},
{
  id:'AR14', modul:'M9', typ:'kette', stufe:3, titel:'Bücher mit ermäßigtem Steuersatz · Kundenskonto',
  tags:['Ausgangsrechnung','Skonto','ermäßigter Steuersatz'],
  text:'Eine Druckerei verkauft selbst hergestellte Bücher auf Ziel für 5.600,00 € netto zzgl. 7 % Umsatzsteuer (ermäßigter Steuersatz). Der Kunde überweist unter Abzug von 2 % Skonto.',
  bloecke:[
    {id:'eingang', titel:'Ausgangsrechnung buchen',
     muster:[{seite:'soll', konto:'2400', betrag:5992}, {seite:'haben', konto:'5000', betrag:5600}, {seite:'haben', konto:'4800', betrag:392}]},
    {id:'zahlungMit', titel:'Zahlungseingang mit 2 % Skonto',
     muster:[{seite:'soll', konto:'2800', betrag:5872.16}, {seite:'soll', konto:'5002', betrag:112},
             {seite:'soll', konto:'4800', betrag:7.84}, {seite:'haben', konto:'2400', betrag:5992}]}
  ],
  hinweise:['Bücher unterliegen dem ermäßigten Steuersatz von 7 %.', 'Skonto: 2 % von 5.992,00 € = 119,84 €, davon 112,00 € netto und 7,84 € Umsatzsteuer.'],
  merke:'Regelsteuersatz 19 %, ermäßigter Steuersatz 7 % (z. B. Bücher, Lebensmittel) · die Skontokorrektur folgt dem Steuersatz der Rechnung.'
},
/* WG-ENDE */{
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
  id:'TF1', modul:'M12', typ:'berechnung', stufe:0, titel:'Wechsel von degressiv zu linear: wann erlaubt?',
  tags:['Degressiv','Theorie','Wechsel'],
  text:'Ein Wirtschaftsgut wird degressiv abgeschrieben.',
  frage:'Wann darf während der Nutzungsdauer von der degressiven zur linearen Abschreibung gewechselt werden?',
  optionen:[
    {text:'Gar nicht – ein Wechsel ist ausgeschlossen.',
     fehler:'Der Wechsel ist ausdrücklich erlaubt (§ 7 Abs. 3 EStG) – nur die umgekehrte Richtung ist es nicht.'},
    {text:'Jederzeit während der Nutzungsdauer – erlaubt ist aber nur diese eine Richtung.', richtig:true,
     weg:'Der Wechsel von degressiv zu linear ist gesetzlich zu jedem beliebigen Zeitpunkt erlaubt, sogar schon im ersten Jahr. Sinnvoll ist er in der Praxis meist erst später – aber erlaubt ist er von Anfang an.'},
    {text:'Nur, wenn die degressive AfA größer ist als die lineare AfA.',
     fehler:'Das beschreibt eher, wann ein Wechsel wenig bringen würde, nicht die rechtliche Voraussetzung dafür.'},
    {text:'Nur, wenn die lineare AfA größer ist als die degressive AfA.',
     fehler:'Das ist der Zeitpunkt, an dem sich ein Wechsel lohnt – erlaubt ist er aber schon vorher.'}
  ],
  hinweise:[
    'Unterscheide zwei Fragen: Wann DARF man wechseln – und wann macht ein Wechsel Sinn? Das ist nicht dasselbe.',
    'Rechtlich ist der Wechsel an keinen bestimmten Zeitpunkt gebunden.',
    'Erlaubt ist der Wechsel jederzeit, nur eben nur in eine Richtung: von degressiv zu linear.'
  ],
  merke:'Rechtlich erlaubt und wirtschaftlich sinnvoll sind zwei verschiedene Fragen. Der Wechsel ist immer erlaubt, sinnvoll meist erst später.'
},
{
  id:'TF2', modul:'M12', typ:'berechnung', stufe:0, titel:'Wechsel von degressiv zu linear: warum genau dann?',
  tags:['Degressiv','Theorie','Wechsel'],
  text:'In der Praxis wird meist genau in dem Jahr gewechselt, in dem die lineare AfA die degressive erstmals übersteigt.',
  frage:'Warum wird der Wechsel typischerweise erst zu diesem Zeitpunkt vorgenommen?',
  optionen:[
    {text:'Weil ein früherer Wechsel gesetzlich nicht erlaubt wäre.',
     fehler:'Der Wechsel ist von Anfang an erlaubt – die Praxis wartet aus einem anderen Grund.'},
    {text:'Weil so ab diesem Jahr in jedem einzelnen Jahr der höchstmögliche Betrag abgeschrieben wird – nicht mehr insgesamt, aber früher.', richtig:true,
     weg:'Über die gesamte Nutzungsdauer wird immer derselbe Gesamtbetrag abgeschrieben, ganz gleich, wann gewechselt wird – am Ende steht so oder so der volle Restbuchwert auf null. Der Zeitpunkt entscheidet nur über die Verteilung: Wer genau beim Erreichen des Schnittpunkts wechselt, nimmt ab da in jedem einzelnen Jahr den höchstmöglichen Betrag – vorher wäre degressiv besser, nachher linear.'},
    {text:'Weil die degressive Methode ab diesem Zeitpunkt automatisch endet.',
     fehler:'Die degressive Methode würde ohne Wechsel einfach mit sinkenden Beträgen weiterlaufen – sie endet nicht von selbst.'},
    {text:'Weil sich dadurch die insgesamt abschreibbare Summe erhöht.',
     fehler:'Die Gesamtsumme über die Nutzungsdauer bleibt gleich, unabhängig vom Wechselzeitpunkt – es verschiebt sich nur, wann wie viel abgeschrieben wird.'}
  ],
  hinweise:[
    'Vergleiche, wie sich beide Werte über die Zeit entwickeln: Eine Kurve sinkt, die andere bleibt gleich. Ändert der Zeitpunkt des Wechsels etwas an der Summe – oder nur an der Verteilung?',
    'Die degressive AfA wird jedes Jahr kleiner, weil die Bemessungsgrundlage – der Restbuchwert – schrumpft. Die lineare AfA auf den Restbuchwert bliebe dagegen konstant. Am Ende der Nutzungsdauer ist der Restbuchwert so oder so aufgebraucht.',
    'Der günstigste Zeitpunkt ist der, an dem beide Kurven sich kreuzen – ab da liefert linear in jedem Jahr mehr als degressiv es täte. Die Gesamtsumme bleibt davon unberührt.'
  ],
  merke:'Die Gesamtabschreibung über die Nutzungsdauer ist immer gleich hoch, egal wann gewechselt wird. Der richtige Zeitpunkt verschiebt nur die Verteilung zugunsten der früheren Jahre.'
},
{
  id:'TF3', modul:'M12', typ:'berechnung', stufe:0, titel:'Rückwechsel von linear zu degressiv?',
  tags:['Degressiv','Theorie','Wechsel'],
  text:'Ein Unternehmen ist bereits von der degressiven zur linearen Abschreibung gewechselt.',
  frage:'Darf es später wieder zur degressiven Abschreibung zurückwechseln?',
  optionen:[
    {text:'Ja, jederzeit möglich.',
     fehler:'Der Wechsel funktioniert nur in eine Richtung.'},
    {text:'Ja, sobald die degressive AfA wieder höher wäre als die lineare.',
     fehler:'Dieser Vergleich kehrt sich bei degressiver Abschreibung ohnehin nie wieder um – und selbst wenn, wäre ein Rückwechsel trotzdem nicht erlaubt.'},
    {text:'Nein, der Wechsel ist nur in eine Richtung erlaubt: von degressiv zu linear, nicht zurück.', richtig:true,
     weg:'§ 7 Abs. 3 EStG erlaubt den Übergang von degressiv zu linear, schließt den umgekehrten Weg aber ausdrücklich aus. Wer einmal gewechselt hat, bleibt bei der linearen Abschreibung bis zum Ende der Nutzungsdauer.'},
    {text:'Nein, weil sich der Restbuchwert dafür nicht mehr eignet.',
     fehler:'Rechnerisch wäre das kein Problem – das Verbot ist rein rechtlicher Natur, keine technische Notwendigkeit.'}
  ],
  hinweise:[
    'Der Wechsel von degressiv zu linear ist eine Einbahnstraße – aber ist dir klar, warum das so geregelt ist?',
    'Ohne diese Regel könnte man ständig zwischen beiden Methoden hin- und herspringen, je nachdem, was gerade steuerlich günstiger ist.',
    'Erlaubt ist ausschließlich der Wechsel von degressiv zu linear – niemals umgekehrt.'
  ],
  merke:'Der Wechsel von degressiv zu linear ist endgültig. Es gibt keinen Weg zurück zur degressiven Abschreibung für dasselbe Wirtschaftsgut.'
},

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
{
  id:'RT1', modul:'M17', typ:'berechnung', stufe:0, titel:'Wozu dienen Rückstellungen?',
  tags:['Rückstellung','Theorie','Periodenabgrenzung'],
  text:'Zum 31.12. prüft das Unternehmen, welche Verpflichtungen aus dem abgelaufenen Jahr noch offen sind.',
  frage:'Warum werden zum Abschlussstichtag Rückstellungen gebildet?',
  optionen:[
    {text:'Weil eine Verpflichtung wirtschaftlich zum abgelaufenen Jahr gehört, ihre Höhe oder ihr Fälligkeitszeitpunkt aber noch nicht feststeht.', richtig:true,
     weg:'Eine Rückstellung erfasst eine <b>ungewisse</b> Verbindlichkeit. Der Grund der Verpflichtung liegt im abgelaufenen Jahr – die Steuer ist entstanden, die Reparatur ist unterblieben, die Leistung ist erbracht –, nur der genaue Betrag oder der Zeitpunkt der Zahlung ist noch offen. Damit der Aufwand in der Periode erscheint, die ihn verursacht hat, wird er geschätzt und schon jetzt gebucht. Dahinter stehen das Prinzip der periodengerechten Erfolgsermittlung und das Vorsichtsprinzip.'},
    {text:'Weil das Unternehmen Geld für künftige Investitionen zurücklegen möchte.',
     fehler:'Eine Rückstellung ist kein zurückgelegtes Geld. Sie steht auf der Passivseite und sagt nichts darüber aus, ob liquide Mittel vorhanden sind – bei der Bildung fließt kein Cent.'},
    {text:'Weil eine Rechnung bereits vorliegt, aber noch nicht bezahlt worden ist.',
     fehler:'Dann steht die Verpflichtung nach Grund und Höhe fest. Das ist eine Verbindlichkeit aus Lieferungen und Leistungen, keine Rückstellung.'},
    {text:'Weil Aufwendungen des kommenden Jahres bereits im alten Jahr erfasst werden sollen.',
     fehler:'Die Richtung stimmt nicht: Der Aufwand gehört wirtschaftlich bereits ins alte Jahr, nur die Zahlung folgt später. Vorgezogen wird nichts, was ins neue Jahr gehören würde.'}
  ],
  hinweise:[
    'Frage dich, was eine Rückstellung von einer normalen Verbindlichkeit unterscheidet. Was weiß man in dem einen Fall, was im anderen noch offen ist?',
    'Bei einer Verbindlichkeit stehen Grund und Höhe fest. Bei einer Rückstellung ist der Grund zwar gegeben, die Höhe oder der Zeitpunkt aber ungewiss. Die zweite Frage ist: In welche Periode gehört der Aufwand?',
    'Rückstellungen sorgen dafür, dass ein Aufwand in dem Jahr erscheint, das ihn verursacht hat – auch wenn Betrag und Zahlungstermin noch nicht feststehen.'
  ],
  merke:'Rückstellung = ungewisse Verbindlichkeit. Der Grund liegt im alten Jahr, Höhe oder Zeitpunkt sind noch offen. Sie ist eine Schuld, kein angespartes Geld.'
},
{
  id:'RT2', modul:'M17', typ:'berechnung', stufe:0, titel:'Bildung einer Rückstellung: Wirkung auf Bilanz und GuV',
  tags:['Rückstellung','Theorie','Bilanz','GuV'],
  text:'Ein Unternehmen bildet zum 31.12. eine Rückstellung über 10.000,00 €. Der Buchungssatz lautet: Aufwandskonto an 3900 Sonstige Rückstellungen.',
  frage:'Wie wirkt sich die Bildung dieser Rückstellung auf Bilanz und GuV aus?',
  optionen:[
    {text:'Die Rückstellungen auf der Passivseite steigen, in der GuV entsteht Aufwand. Gewinn und Eigenkapital sinken um denselben Betrag, die Bilanzsumme bleibt unverändert.', richtig:true,
     weg:'Die Gegenbuchung erfolgt auf einem Aufwandskonto: Der Gewinn sinkt um 10.000,00 € und mit ihm das Eigenkapital. Auf der Passivseite kommen zugleich 10.000,00 € Rückstellungen hinzu. Beides steht auf derselben Bilanzseite – <b>Eigenkapital wird zu Fremdkapital</b>, die Bilanzsumme bleibt gleich. Die Aktivseite wird gar nicht berührt, denn es fließt kein Geld.'},
    {text:'Die Bilanzsumme steigt, weil auf der Passivseite eine neue Position hinzukommt.',
     fehler:'Die Rückstellung kommt zwar hinzu – aber der Aufwand mindert über den Gewinn das Eigenkapital um genau denselben Betrag. Innerhalb der Passivseite verschiebt sich also nur etwas, die Summe bleibt gleich.'},
    {text:'Der Bankbestand sinkt, weil das Geld für die spätere Zahlung reserviert wird.',
     fehler:'Bei der Bildung fließt kein Geld. Erst die spätere Zahlung berührt das Bankkonto – und zwar im nächsten Jahr.'},
    {text:'Es ändert sich nur etwas in der Bilanz, die GuV bleibt unberührt.',
     fehler:'Die Gegenbuchung läuft über ein Aufwandskonto und damit über die GuV. Genau darum geht es ja: Der Aufwand soll im alten Jahr erscheinen.'}
  ],
  hinweise:[
    'Schau dir den Buchungssatz an: Welche Kontenarten sind beteiligt? Und auf welchen Bilanzseiten stehen sie?',
    'Ein Aufwand mindert den Gewinn und damit das Eigenkapital – beides Passivseite. Die Rückstellung selbst ist ebenfalls Passivseite. Was folgt daraus für die Bilanzsumme?',
    'Passivtausch: Eigenkapital sinkt um 10.000,00 €, Rückstellungen steigen um 10.000,00 €. Die Bilanzsumme bleibt gleich, der Gewinn sinkt.'
  ],
  merke:'Bildung einer Rückstellung: Aufwand in der GuV, Rückstellung in der Bilanz. Eigenkapital sinkt, Fremdkapital steigt – die Bilanzsumme bleibt unverändert und es fließt kein Geld.'
},
{
  id:'RG1', modul:'M17', typ:'kette', stufe:1, titel:'Gewerbesteuer-Rückstellung · Bildung und Auflösung · Beispiel 1',
  tags:['Rückstellung','Gewerbesteuer','Auflösung'],
  text:'Zum 31.12. rechnet das Unternehmen mit einer Gewerbesteuernachzahlung für das laufende Jahr und bildet dafür eine Rückstellung über 8.000,00 €. Im Folgejahr geht der Steuerbescheid ein: Die tatsächliche Nachzahlung beträgt 9.500,00 € und wird sofort per Bank beglichen.',
  bloecke:[
    {id:'bildung', titel:'Rückstellung zum 31.12. bilden',
     muster:[{seite:'soll', konto:'7700', betrag:8000}, {seite:'haben', konto:'3800', betrag:8000}]},
    {id:'aufloesung', titel:'Rückstellung im Folgejahr auflösen',
     muster:[{seite:'soll', konto:'3800', betrag:8000}, {seite:'soll', konto:'7700', betrag:1500},
             {seite:'haben', konto:'2800', betrag:9500}]}
  ],
  hinweise:[
    'Die Rückstellung wird komplett aufgelöst – sie hat ihren Zweck erfüllt, sobald der tatsächliche Betrag feststeht. Reicht sie aus, um die Zahlung zu decken?',
    'Die Rückstellung deckt nur 8.000,00 € der tatsächlichen 9.500,00 €. Die Differenz von 1.500,00 € war nicht eingeplant und ist zusätzlicher Aufwand des laufenden Jahres.',
    'Soll: 3800 Rückstellungen 8.000,00 € und 7700 Gewerbesteuer 1.500,00 €. Haben: 2800 Bank 9.500,00 €.'
  ],
  merke:'War die Rückstellung zu niedrig, wird die Differenz zusätzlicher Aufwand im Jahr der Auflösung – nicht rückwirkend im Jahr der Bildung.'
},
{
  id:'RG2', modul:'M17', typ:'kette', stufe:1, titel:'Gewerbesteuer-Rückstellung · Bildung und Auflösung · Beispiel 2',
  tags:['Rückstellung','Gewerbesteuer','Auflösung'],
  text:'Zum 31.12. rechnet das Unternehmen mit einer Gewerbesteuernachzahlung für das laufende Jahr und bildet dafür eine Rückstellung über 8.000,00 €. Im Folgejahr geht der Steuerbescheid ein: Die tatsächliche Nachzahlung beträgt 6.200,00 € und wird sofort per Bank beglichen.',
  bloecke:[
    {id:'bildung', titel:'Rückstellung zum 31.12. bilden',
     muster:[{seite:'soll', konto:'7700', betrag:8000}, {seite:'haben', konto:'3800', betrag:8000}]},
    {id:'aufloesung', titel:'Rückstellung im Folgejahr auflösen',
     muster:[{seite:'soll', konto:'3800', betrag:8000}, {seite:'haben', konto:'2800', betrag:6200},
             {seite:'haben', konto:'5480', betrag:1800}]}
  ],
  hinweise:[
    'Die Rückstellung wird komplett aufgelöst. Reicht der tatsächliche Betrag aus, oder bleibt etwas übrig?',
    'Die Rückstellung war mit 8.000,00 € höher angesetzt als die tatsächlich nötigen 6.200,00 €. Der übrige Betrag von 1.800,00 € wird nicht mehr gebraucht – er wird zum Ertrag.',
    'Soll: 3800 Rückstellungen 8.000,00 €. Haben: 2800 Bank 6.200,00 € und 5480 Erträge aus Auflösung von Rückstellungen 1.800,00 €.'
  ],
  merke:'War die Rückstellung zu hoch, wird der übrige Betrag bei der Auflösung zum Ertrag – auf dem eigenen Konto 5480, nicht auf dem ursprünglichen Aufwandskonto.',
  stolpersteine:['Überschuss auf das Aufwandskonto statt auf 5480 gebucht','Rückstellung nur in Höhe des tatsächlichen Betrags aufgelöst, Rest stehen gelassen']
},
{
  id:'RI1', modul:'M17', typ:'kette', stufe:2, titel:'Unterlassene Wartung der Produktionsanlage · Bildung und Auflösung',
  tags:['Rückstellung','Instandhaltung','Auflösung'],
  text:'Aus Kapazitätsgründen konnte eine notwendige Wartung der Produktionsanlage im laufenden Jahr nicht mehr durchgeführt werden. Sie wird in den ersten drei Monaten des Folgejahres nachgeholt. Zum 31.12. wird dafür eine Rückstellung über 5.000,00 € gebildet. Im Folgejahr stellt sich heraus, dass die Wartung tatsächlich netto 5.800,00 € zzgl. 19 % USt. kostet; die Rechnung wird sofort per Bank beglichen.',
  bloecke:[
    {id:'bildung', titel:'Rückstellung zum 31.12. bilden',
     muster:[{seite:'soll', konto:'6130', betrag:5000}, {seite:'haben', konto:'3900', betrag:5000}]},
    {id:'aufloesung', titel:'Rückstellung im Folgejahr auflösen',
     muster:[{seite:'soll', konto:'3900', betrag:5000}, {seite:'soll', konto:'6130', betrag:800},
             {seite:'soll', konto:'2600', betrag:1102}, {seite:'haben', konto:'2800', betrag:6902}]}
  ],
  hinweise:[
    'Anders als die Rückstellung selbst ist die tatsächliche Wartung eine echte Rechnung eines externen Betriebs. Was kommt bei einer echten Rechnung normalerweise noch dazu?',
    'Die Rückstellung war mit 5.000,00 € netto zu niedrig angesetzt – tatsächlich kostet die Wartung netto 5.800,00 €, also 800,00 € mehr. Zusätzlich fällt auf die gesamte Rechnung Vorsteuer an, die bei der ursprünglichen Schätzung noch keine Rolle spielte.',
    'Soll: 3900 Rückstellungen 5.000,00 €, 6130 Instandhaltung 800,00 € und 2600 Vorsteuer 1.102,00 €. Haben: 2800 Bank 6.902,00 €.'
  ],
  merke:'Die Rückstellung selbst wird immer netto und ohne Umsatzsteuer gebildet – sie ist ja nur eine interne Schätzung. Erst die tatsächliche Rechnung bei der Auflösung bringt die Vorsteuer ins Spiel.',
  stolpersteine:['Vorsteuer bei der Auflösung vergessen','Rückstellung zu einem Bruttobetrag gebildet']
},
{
  id:'RI2', modul:'M17', typ:'kette', stufe:2, titel:'Unterlassene Instandsetzung der Lagerhalle · Bildung und Auflösung',
  tags:['Rückstellung','Instandhaltung','Auflösung'],
  text:'Das undichte Dach der Lagerhalle konnte im laufenden Jahr nicht mehr instand gesetzt werden. Die Arbeiten werden in den ersten drei Monaten des Folgejahres nachgeholt. Zum 31.12. wird dafür eine Rückstellung über 6.000,00 € gebildet. Im Folgejahr stellt sich heraus, dass die Instandsetzung netto 4.500,00 € zzgl. 19 % USt. kostet; die Rechnung wird sofort per Bank beglichen.',
  bloecke:[
    {id:'bildung', titel:'Rückstellung zum 31.12. bilden',
     muster:[{seite:'soll', konto:'6130', betrag:6000}, {seite:'haben', konto:'3900', betrag:6000}]},
    {id:'aufloesung', titel:'Rückstellung im Folgejahr auflösen',
     muster:[{seite:'soll', konto:'3900', betrag:6000}, {seite:'soll', konto:'2600', betrag:855},
             {seite:'haben', konto:'2800', betrag:5355}, {seite:'haben', konto:'5480', betrag:1500}]}
  ],
  hinweise:[
    'Die Vorsteuer aus der tatsächlichen Rechnung kommt auch hier dazu. Reicht die Rückstellung dann trotzdem für mehr als die reine Zahlung?',
    'Die Rückstellung war mit 6.000,00 € höher angesetzt als der tatsächliche Nettobetrag von 4.500,00 €. Die Vorsteuer von 855,00 € kommt zusätzlich dazu, mindert aber nichts an der Rückstellung selbst – die war ja rein netto gedacht.',
    'Soll: 3900 Rückstellungen 6.000,00 € und 2600 Vorsteuer 855,00 €. Haben: 2800 Bank 5.355,00 € und 5480 Erträge aus Auflösung von Rückstellungen 1.500,00 €.'
  ],
  merke:'Beim Vergleich zählt immer Netto gegen Netto: Die Rückstellung (netto) wird mit dem tatsächlichen Aufwand (netto) verglichen, nicht mit dem Bruttobetrag der Rechnung.',
  stolpersteine:['Vorsteuer mit dem Ertrag aus der Auflösung verrechnet','Bruttobetrag der Rechnung mit der Rückstellung verglichen']
},
{
  id:'RB1', modul:'M17', typ:'kette', stufe:3, titel:'Ausstehende Agenturrechnung für eine Kampagnenkonzeption · Bildung und Auflösung',
  tags:['Rückstellung','Ausstehende Rechnung','Auflösung','Brutto/Netto'],
  text:'Eine Werbeagentur hat im Dezember die Konzeption einer neuen Kampagne erarbeitet. Abgerechnet wird nach tatsächlichem Zeitaufwand, die Rechnung liegt zum 31.12. noch nicht vor. Nach dem geschätzten Stundenaufwand bildet das Unternehmen eine Rückstellung über 8.000,00 €. Im Februar des Folgejahres geht die Rechnung ein: <b>Rechnungsbetrag 9.163,00 € (inkl. 19 % USt.)</b>, zahlbar auf Ziel.',
  bloecke:[
    {id:'bildung', titel:'Rückstellung zum 31.12. bilden',
     muster:[{seite:'soll', konto:'6870', betrag:8000}, {seite:'haben', konto:'3900', betrag:8000}]},
    {id:'aufloesung', titel:'Rechnungseingang buchen und Rückstellung auflösen',
     muster:[{seite:'soll', konto:'3900', betrag:8000}, {seite:'soll', konto:'2600', betrag:1463},
             {seite:'haben', konto:'4400', betrag:9163}, {seite:'haben', konto:'5480', betrag:300}]}
  ],
  hinweise:[
    'Die Rechnung nennt nur den Bruttobetrag – die Rückstellung wurde dagegen netto gebildet. Was musst du also zuerst tun, bevor du die beiden Beträge vergleichen kannst?',
    'Netto: 9.163,00 € ÷ 1,19 = 7.700,00 €, Umsatzsteuer 1.463,00 €. Der Nettoaufwand liegt damit <b>unter</b> der Rückstellung von 8.000,00 € – obwohl der Bruttobetrag höher aussieht.',
    'Soll: 3900 Rückstellungen 8.000,00 € und 2600 Vorsteuer 1.463,00 €. Haben: 4400 Verbindlichkeiten a. LL 9.163,00 € und 5480 Erträge aus Auflösung von Rückstellungen 300,00 €.'
  ],
  merke:'Ein Bruttobetrag, der über der Rückstellung liegt, sagt noch gar nichts. Erst der Nettobetrag zeigt, ob zu viel oder zu wenig zurückgestellt wurde – die Vorsteuer ist für diesen Vergleich ohne Bedeutung.',
  stolpersteine:['Bruttobetrag der Rechnung mit der Rückstellung verglichen','Umsatzsteuer aus dem Bruttobetrag mit 19 % statt mit 19/119 herausgerechnet','Differenz als zusätzlichen Aufwand statt als Ertrag auf 5480 gebucht']
},
{
  id:'RB2', modul:'M17', typ:'kette', stufe:3, titel:'Prozesskosten · Bildung und Auflösung',
  tags:['Rückstellung','Prozesskosten','Auflösung','Brutto/Netto'],
  text:'Ein ehemaliger Kunde hat das Unternehmen verklagt. Für die zu erwartenden Anwaltskosten bildet es zum 31.12. eine Rückstellung über 6.000,00 €. Im März des Folgejahres ist der Rechtsstreit beendet. Die Rechnung des Rechtsanwalts über <b>8.330,00 € (inkl. 19 % USt.)</b> wird per Banküberweisung bezahlt.',
  bloecke:[
    {id:'bildung', titel:'Rückstellung zum 31.12. bilden',
     muster:[{seite:'soll', konto:'6770', betrag:6000}, {seite:'haben', konto:'3900', betrag:6000}]},
    {id:'aufloesung', titel:'Zahlung buchen und Rückstellung auflösen',
     muster:[{seite:'soll', konto:'3900', betrag:6000}, {seite:'soll', konto:'6770', betrag:1000},
             {seite:'soll', konto:'2600', betrag:1330}, {seite:'haben', konto:'2800', betrag:8330}]}
  ],
  hinweise:[
    'Die Rechnung ist brutto angegeben. Rechne sie zuerst in Netto und Umsatzsteuer auf, bevor du sie mit der Rückstellung vergleichst.',
    'Netto: 8.330,00 € ÷ 1,19 = 7.000,00 €, Umsatzsteuer 1.330,00 €. Die Rückstellung deckt davon 6.000,00 € – es fehlen 1.000,00 €, die jetzt noch Aufwand sind.',
    'Soll: 3900 Sonstige Rückstellungen 6.000,00 €, 6770 Rechts- und Beratungskosten 1.000,00 € und 2600 Vorsteuer 1.330,00 €. Haben: 2800 Bank 8.330,00 €.'
  ],
  merke:'Reicht die Rückstellung nicht, wird nur die Netto-Differenz zusätzlich als Aufwand gebucht. Die Vorsteuer hat mit der Rückstellung nichts zu tun.',
  stolpersteine:['Differenz aus Bruttobetrag und Rückstellung als zusätzlichen Aufwand gebucht','Vorsteuer vergessen','Rückstellung nur teilweise aufgelöst']
},

/* ---------- Modul 13 · Bewertung des Umlaufvermögens (gewichteter Durchschnitt) ---------- */
{
  id:'BU1', modul:'M13', typ:'kette', stufe:1, titel:'Rohstoff Aluminiumblech · Durchschnittsbewertung',
  tags:['Bewertung','Umlaufvermögen','Gewichteter Durchschnitt','Niederstwertprinzip'],
  text:'Für den Rohstoff Aluminiumblech sind im abgelaufenen Geschäftsjahr die folgenden Lagerbewegungen erfasst worden. Der Endbestand ist nach dem <b>gewichteten Durchschnittsverfahren</b> zu bewerten.'
    + '<table class="lager"><tr><th>Datum</th><th>Vorgang</th><th class="z">Menge</th><th class="z">Preis je Stück</th></tr><tr class="rahmen"><td>01.01.</td><td>Anfangsbestand</td><td class="z">400 St.</td><td class="z">20,00 €</td></tr><tr><td>12.03.</td><td>Zugang</td><td class="z">600 St.</td><td class="z">22,00 €</td></tr><tr><td>20.04.</td><td>Abgang</td><td class="z">500 St.</td><td class="z leer">–</td></tr><tr><td>05.08.</td><td>Zugang</td><td class="z">1.000 St.</td><td class="z">21,40 €</td></tr><tr><td>15.11.</td><td>Abgang</td><td class="z">900 St.</td><td class="z leer">–</td></tr></table>'
    + 'Der <b>Tageswert am 31.12. beträgt 20,50 € je Stück</b>.',
  bloecke:[
    {id:'preis', titel:'Durchschnittlichen Einstandspreis ermitteln', typ:'rechnen', einheit:'€/Stück',
     frage:'Wie hoch ist der gewichtete durchschnittliche Einstandspreis je Stück?',
     antwort:21.30,
     tipp:'Fasse Anfangsbestand und alle Zugänge zusammen – erst mengenmäßig, dann wertmäßig – und teile den Gesamtwert durch die Gesamtmenge. Die Abgänge bleiben dabei außen vor.',
     rechenweg:'Mengen: 400 + 600 + 1.000 = <b>2.000 St.</b><br>Werte: 400 × 20,00 € = 8.000,00 € · 600 × 22,00 € = 13.200,00 € · 1.000 × 21,40 € = 21.400,00 € → <b>42.600,00 €</b><br>42.600,00 € ÷ 2.000 St. = <b>21,30 €/Stück</b>'},
    {id:'menge', titel:'Endbestand mengenmäßig ermitteln', typ:'rechnen', einheit:'Stück', nachkomma:0,
     frage:'Wie viele Stück befinden sich am 31.12. noch im Lager?',
     antwort:600,
     tipp:'Verfügbare Menge minus alle Abgänge.',
     rechenweg:'2.000 St. − 500 St. − 900 St. = <b>600 St.</b>'},
    {formel:'menge * preis', id:'wertAK', titel:'Endbestand zum Durchschnittspreis bewerten', typ:'rechnen',
     frage:'Mit welchem Wert ist der Endbestand zu Anschaffungskosten anzusetzen?',
     antwort:12780,
     tipp:'Endbestandsmenge × durchschnittlicher Einstandspreis.',
     rechenweg:'600 St. × 21,30 €/St. = <b>12.780,00 €</b>'},
    {formel:'menge * 20.5 * f', id:'wertTag', titel:'Endbestand zum Tageswert bewerten', typ:'rechnen',
     frage:'Welchen Wert hat der Endbestand, wenn man ihn mit dem Tageswert bewertet?',
     antwort:12300,
     tipp:'Dieselbe Menge, aber der Preis vom Abschlussstichtag.',
     rechenweg:'600 St. × 20,50 €/St. = <b>12.300,00 €</b>'},
    {formel:'min(wertAK, wertTag)', id:'ansatz', titel:'Bilanzansatz bestimmen', typ:'rechnen',
     frage:'Mit welchem Wert erscheint der Rohstoff in der Bilanz?',
     antwort:12300,
     tipp:'Beim Umlaufvermögen gilt das strenge Niederstwertprinzip. Vergleiche die beiden eben ermittelten Werte.',
     rechenweg:'Anschaffungskosten 12.780,00 € gegen Tageswert 12.300,00 € – anzusetzen ist der <b>niedrigere Wert: 12.300,00 €</b>. Die Abwertung von 480,00 € mindert das Ergebnis.'}
  ],
  hinweise:[
    'Zwei Größen musst du getrennt bestimmen: <i>wie viel</i> noch da ist und <i>wie viel es wert ist</i>. Womit fängst du an?',
    'Der Durchschnittspreis entsteht aus Anfangsbestand und Zugängen zusammen: Gesamtwert geteilt durch Gesamtmenge. Die Abgänge verändern nur die Menge, nicht den Preis.',
    'Ø 42.600,00 € ÷ 2.000 St. = 21,30 €/St. · Endbestand 600 St. · zu AK 12.780,00 €, zum Tageswert 12.300,00 € · Bilanzansatz 12.300,00 €.'
  ],
  merke:'Der Durchschnittspreis wird aus Anfangsbestand und Zugängen gebildet – Abgänge gehen nie in die Berechnung ein. Erst danach folgt der Vergleich mit dem Tageswert.',
  stolpersteine:['Abgänge in die Durchschnittsberechnung einbezogen','Nur den Durchschnitt der Stückpreise gebildet, ohne nach Mengen zu gewichten','Vergleich mit dem Tageswert vergessen']
},
{
  id:'BU2', modul:'M13', typ:'kette', stufe:2, titel:'Hilfsstoff Spezialkleber · Durchschnittsbewertung',
  tags:['Bewertung','Umlaufvermögen','Gewichteter Durchschnitt','Niederstwertprinzip'],
  text:'Für den Hilfsstoff Spezialkleber liegen die folgenden Lagerbewegungen des abgelaufenen Geschäftsjahres vor. Der Endbestand ist nach dem <b>gewichteten Durchschnittsverfahren</b> zu bewerten.'
    + '<table class="lager"><tr><th>Datum</th><th>Vorgang</th><th class="z">Menge</th><th class="z">Preis je Stück</th></tr><tr class="rahmen"><td>01.01.</td><td>Anfangsbestand</td><td class="z">250 St.</td><td class="z">48,00 €</td></tr><tr><td>18.02.</td><td>Zugang</td><td class="z">350 St.</td><td class="z">52,00 €</td></tr><tr><td>12.03.</td><td>Abgang</td><td class="z">300 St.</td><td class="z leer">–</td></tr><tr><td>09.06.</td><td>Zugang</td><td class="z">200 St.</td><td class="z">55,00 €</td></tr><tr><td>25.07.</td><td>Abgang</td><td class="z">150 St.</td><td class="z leer">–</td></tr><tr><td>14.10.</td><td>Zugang</td><td class="z">200 St.</td><td class="z">50,00 €</td></tr><tr><td>30.11.</td><td>Abgang</td><td class="z">280 St.</td><td class="z leer">–</td></tr></table>'
    + 'Der <b>Tageswert am 31.12. beträgt 54,00 € je Stück</b>.',
  bloecke:[
    {id:'preis', titel:'Durchschnittlichen Einstandspreis ermitteln', typ:'rechnen', einheit:'€/Stück',
     frage:'Wie hoch ist der gewichtete durchschnittliche Einstandspreis je Stück?',
     antwort:51.20,
     tipp:'Auch wenn sich Zugänge und Abgänge abwechseln: Für den Durchschnitt zählen nur Anfangsbestand und Zugänge – in der Summe, unabhängig von der Reihenfolge.',
     rechenweg:'Mengen: 250 + 350 + 200 + 200 = <b>1.000 St.</b><br>Werte: 12.000,00 € + 18.200,00 € + 11.000,00 € + 10.000,00 € = <b>51.200,00 €</b><br>51.200,00 € ÷ 1.000 St. = <b>51,20 €/Stück</b>'},
    {id:'menge', titel:'Endbestand mengenmäßig ermitteln', typ:'rechnen', einheit:'Stück', nachkomma:0,
     frage:'Wie viele Stück befinden sich am 31.12. noch im Lager?',
     antwort:270,
     tipp:'Alle Zugänge zusammenzählen, alle Abgänge abziehen.',
     rechenweg:'1.000 St. − 300 St. − 150 St. − 280 St. = <b>270 St.</b>'},
    {formel:'menge * min(preis, 54 * f)', id:'ansatz', titel:'Endbestand bewerten und Bilanzansatz bestimmen', typ:'rechnen',
     frage:'Mit welchem Wert erscheint der Hilfsstoff in der Bilanz?',
     antwort:13824,
     tipp:'Bewerte den Endbestand zuerst mit dem Durchschnittspreis und dann mit dem Tageswert – und entscheide dich anschließend. Achte darauf, in welche Richtung der Tageswert diesmal abweicht.',
     rechenweg:'Zu Anschaffungskosten: 270 St. × 51,20 €/St. = <b>13.824,00 €</b><br>Zum Tageswert: 270 St. × 54,00 €/St. = <b>14.580,00 €</b><br>Angesetzt wird der <b>niedrigere Wert: 13.824,00 €</b>. Der gestiegene Marktpreis bleibt unberücksichtigt, denn die Anschaffungskosten bilden die Obergrenze. Ein Gewinn entsteht erst beim Verkauf.'}
  ],
  hinweise:[
    'Zugänge und Abgänge wechseln sich hier ab. Ändert das etwas an der Art, wie du den Durchschnitt bildest?',
    'Nein – für den gewichteten Durchschnitt zählen nur Anfangsbestand und Zugänge, unabhängig davon, wann dazwischen entnommen wurde. Achte anschließend darauf, in welche Richtung der Tageswert diesmal abweicht.',
    'Ø 51.200,00 € ÷ 1.000 St. = 51,20 €/St. · Endbestand 270 St. · zu AK 13.824,00 €, zum Tageswert 14.580,00 € · Bilanzansatz 13.824,00 €.'
  ],
  merke:'Liegt der Tageswert über den Anschaffungskosten, bleibt es beim Anschaffungswert. Die Anschaffungskosten sind die Obergrenze – ein nicht realisierter Gewinn wird nicht ausgewiesen.',
  stolpersteine:['Den höheren Tageswert angesetzt','Abgänge in die Durchschnittsberechnung einbezogen','Nur zwei der drei Zugänge berücksichtigt']
},
{
  id:'BU3', modul:'M13', typ:'kette', stufe:3, titel:'Rohstoff Kupferdraht · Zugang am Abschlussstichtag',
  tags:['Bewertung','Umlaufvermögen','Gewichteter Durchschnitt','Niederstwertprinzip','Stichtag'],
  text:'Für den Rohstoff Kupferdraht sind die folgenden Lagerbewegungen erfasst. Der Endbestand ist nach dem <b>gewichteten Durchschnittsverfahren</b> zu bewerten.'
    + '<table class="lager"><tr><th>Datum</th><th>Vorgang</th><th class="z">Menge</th><th class="z">Preis je Stück</th></tr><tr class="rahmen"><td>01.01.</td><td>Anfangsbestand</td><td class="z">600 St.</td><td class="z">15,00 €</td></tr><tr><td>20.03.</td><td>Zugang</td><td class="z">900 St.</td><td class="z">16,00 €</td></tr><tr><td>05.05.</td><td>Abgang</td><td class="z">800 St.</td><td class="z leer">–</td></tr><tr><td>12.09.</td><td>Zugang</td><td class="z">700 St.</td><td class="z">14,00 €</td></tr><tr><td>18.10.</td><td>Abgang</td><td class="z">1.100 St.</td><td class="z leer">–</td></tr><tr class="rahmen"><td>31.12.</td><td>Zugang</td><td class="z">300 St.</td><td class="z">13,00 €</td></tr></table>',
  bloecke:[
    {id:'ansatz', titel:'Endbestand bewerten und Bilanzansatz bestimmen', typ:'rechnen',
     frage:'Mit welchem Wert erscheint der Rohstoff in der Bilanz?',
     antwort:7800,
     tipp:'Arbeite in vier Schritten: Durchschnittspreis aus Anfangsbestand und allen Zugängen, Endbestandsmenge, Bewertung zu Anschaffungskosten – und der Tageswert, der hier nicht gesondert genannt wird, sondern in der Aufstellung steht.',
     rechenweg:'Mengen: 600 + 900 + 700 + 300 = <b>2.500 St.</b><br>Werte: 9.000,00 € + 14.400,00 € + 9.800,00 € + 3.900,00 € = <b>37.100,00 €</b><br>Durchschnittspreis: 37.100,00 € ÷ 2.500 St. = <b>14,84 €/Stück</b><br>Endbestand: 2.500 St. − 800 St. − 1.100 St. = <b>600 St.</b><br>Zu Anschaffungskosten: 600 St. × 14,84 €/St. = <b>8.904,00 €</b><br>Der Zugang vom 31.12. belegt den Preis am Abschlussstichtag: 13,00 €/Stück → 600 St. × 13,00 €/St. = <b>7.800,00 €</b><br>Anzusetzen ist der <b>niedrigere Wert: 7.800,00 €</b>. Die Abwertung beträgt 1.104,00 €.'}
  ],
  hinweise:[
    'Zum Tageswert steht nichts im Text. Steht er vielleicht doch irgendwo – nur nicht so genannt?',
    'Am 31.12. wurde eingekauft. Dieser Einkaufspreis ist der Preis am Abschlussstichtag und damit der Tageswert. Zugleich gehört der Zugang noch in den Bestand und damit in die Durchschnittsrechnung.',
    'Ø 37.100,00 € ÷ 2.500 St. = 14,84 €/St. · Endbestand 600 St. · zu AK 8.904,00 €, zum Tageswert (13,00 €/St.) 7.800,00 € · Bilanzansatz 7.800,00 €.'
  ],
  merke:'Ein Einkauf am Abschlussstichtag hat eine Doppelrolle: Er erhöht Menge und Wert des Bestands – und sein Stückpreis ist zugleich der Tageswert, mit dem verglichen wird.',
  stolpersteine:['Zugang vom 31.12. aus der Durchschnittsrechnung herausgelassen','Nach dem Tageswert gesucht, obwohl er in der Tabelle steht','Den Zugang vom 31.12. nur als Tageswert genutzt und die Menge vergessen']
},

/* ---------- Modul 14 · Herstellungskosten (§ 255 Abs. 2 HGB) ---------- */
{
  id:'HK1', modul:'M14', typ:'herstellungskosten', stufe:1, titel:'Bestandteile zuordnen · Grundfall',
  tags:['Herstellungskosten','§ 255 HGB','Wertuntergrenze','Wertobergrenze'],
  text:'Für die selbst hergestellten Erzeugnisse eines Fertigungsbetriebs liegen die folgenden Kosten der Periode vor. Ordne jede Position danach zu, ob sie in die Herstellungskosten <b>einbezogen werden muss</b>, <b>einbezogen werden darf</b> oder <b>nicht einbezogen werden darf</b>. Die Summen und die beiden Wertgrenzen werden dabei mitgerechnet.',
  posten:[
    {name:'Fertigungsmaterial', betrag:240000, gruppe:'pflicht',
     grund:'Das Material geht unmittelbar in das Erzeugnis ein und lässt sich ihm direkt zurechnen – ein Einzelkostenbestandteil, der zwingend zu aktivieren ist.'},
    {name:'Fertigungslöhne', betrag:180000, gruppe:'pflicht',
     grund:'Die Löhne der Fertigung sind Einzelkosten der Herstellung und daher Pflichtbestandteil.'},
    {name:'Sondereinzelkosten der Fertigung', betrag:20000, gruppe:'pflicht',
     grund:'Kosten wie Spezialwerkzeuge oder Modelle fallen nur für diesen Auftrag an und sind ihm direkt zurechenbar – ebenfalls Pflicht.'},
    {name:'Materialgemeinkosten', betrag:36000, gruppe:'pflicht',
     grund:'Angemessene Teile der Materialgemeinkosten müssen seit dem BilMoG zwingend einbezogen werden.'},
    {name:'Fertigungsgemeinkosten', betrag:90000, gruppe:'pflicht',
     grund:'Auch die angemessenen Fertigungsgemeinkosten sind Pflichtbestandteil – anders als früher besteht hier kein Wahlrecht mehr.'},
    {name:'Allgemeine Verwaltungskosten', betrag:60000, gruppe:'wahl',
     grund:'Die Verwaltung dient dem ganzen Unternehmen, nicht nur der Fertigung. Angemessene Teile dürfen einbezogen werden, müssen es aber nicht.'},
    {name:'Aufwendungen für soziale Einrichtungen', betrag:14000, gruppe:'wahl',
     grund:'Kantine, Sportanlagen und ähnliche Einrichtungen stehen dem Betrieb insgesamt zur Verfügung – § 255 Abs. 2 Satz 3 HGB räumt dafür ein Wahlrecht ein.'},
    {name:'Vertriebskosten', betrag:48000, gruppe:'verbot',
     grund:'Vertriebskosten entstehen erst nach der Herstellung, beim Verkauf. § 255 Abs. 2 Satz 4 HGB schließt sie ausdrücklich aus.'},
    {name:'Forschungskosten', betrag:25000, gruppe:'verbot',
     grund:'Forschung ist ergebnisoffen und keinem konkreten Erzeugnis zurechenbar – eine Aktivierung ist verboten.'}
  ],
  hinweise:[
    'Frage bei jeder Position: Ist sie durch die <i>Fertigung</i> veranlasst? Was danach kommt oder ins Ungewisse zielt, gehört nicht dazu.',
    'Einzelkosten der Fertigung und angemessene Fertigungs- und Materialgemeinkosten sind Pflicht. Alles, was das Unternehmen als Ganzes betrifft – Verwaltung, soziale Einrichtungen – steht im Wahlrecht. Vertrieb und Forschung sind verboten.',
    'Pflicht: Fertigungsmaterial, Fertigungslöhne, Sondereinzelkosten der Fertigung, Material- und Fertigungsgemeinkosten. Wahlrecht: allgemeine Verwaltungskosten, soziale Einrichtungen. Verbot: Vertriebs- und Forschungskosten.'
  ],
  merke:'Die Pflichtbestandteile ergeben die Wertuntergrenze, Pflicht plus Wahlrechte die Wertobergrenze. Dazwischen liegt der bilanzpolitische Spielraum.',
  stolpersteine:['Fertigungsgemeinkosten für ein Wahlrecht gehalten (das war vor dem BilMoG so)','Vertriebskosten einbezogen','Verwaltungskosten für Pflicht gehalten']
},
{
  id:'HK2', modul:'M14', typ:'herstellungskosten', stufe:2, titel:'Bestandteile zuordnen · erweiterter Fall',
  tags:['Herstellungskosten','§ 255 HGB','Wertuntergrenze','Wertobergrenze'],
  text:'Ein Maschinenbauunternehmen bewertet seine unfertigen Erzeugnisse zum Bilanzstichtag. Ordne die Kostenpositionen den drei Gruppen des § 255 Abs. 2 HGB zu.',
  posten:[
    {name:'Fertigungsmaterial', betrag:310000, gruppe:'pflicht',
     grund:'Einzelkosten der Fertigung sind immer Pflichtbestandteil.'},
    {name:'Fertigungslöhne', betrag:245000, gruppe:'pflicht',
     grund:'Einzelkosten der Fertigung sind immer Pflichtbestandteil.'},
    {name:'Sondereinzelkosten der Fertigung', betrag:15000, gruppe:'pflicht',
     grund:'Direkt zurechenbare Kosten des Fertigungsauftrags gehören zwingend hinein.'},
    {name:'Materialgemeinkosten', betrag:46500, gruppe:'pflicht',
     grund:'Angemessene Materialgemeinkosten sind Pflichtbestandteil.'},
    {name:'Fertigungsgemeinkosten', betrag:122500, gruppe:'pflicht',
     grund:'Angemessene Fertigungsgemeinkosten sind Pflichtbestandteil.'},
    {name:'Abschreibungen auf Fertigungsmaschinen', betrag:61000, gruppe:'pflicht',
     grund:'Der fertigungsbedingte Wertverzehr des Anlagevermögens wird in § 255 Abs. 2 Satz 2 HGB ausdrücklich genannt und ist Pflicht.'},
    {name:'Angemessene Teile der allgemeinen Verwaltungskosten', betrag:54000, gruppe:'wahl',
     grund:'Die Verwaltung dient dem gesamten Unternehmen; das Gesetz stellt die Einbeziehung frei.'},
    {name:'Freiwillige soziale Leistungen', betrag:18000, gruppe:'wahl',
     grund:'Kantinenzuschüsse, Betriebsausflüge und Ähnliches sind freiwillig und werden nur durch das Wahlrecht des § 255 Abs. 2 Satz 3 HGB aktivierbar.'},
    {name:'Aufwendungen für betriebliche Altersversorgung', betrag:22000, gruppe:'wahl',
     grund:'Auch die betriebliche Altersversorgung nennt § 255 Abs. 2 Satz 3 HGB unter den Wahlrechten.'},
    {name:'Fremdkapitalzinsen für die Zeit der Herstellung', betrag:6000, gruppe:'wahl',
     grund:'§ 255 Abs. 3 HGB erlaubt die Einbeziehung, soweit die Zinsen auf den Herstellungszeitraum entfallen – ein Wahlrecht, kein Muss.'},
    {name:'Sondereinzelkosten des Vertriebs', betrag:12000, gruppe:'verbot',
     grund:'Trotz des Wortes „Sondereinzelkosten“ geht es hier um den Vertrieb – und Vertriebskosten sind ausdrücklich ausgeschlossen.'},
    {name:'Forschungskosten', betrag:40000, gruppe:'verbot',
     grund:'Forschungskosten dürfen nicht aktiviert werden, weil ihr Erfolg ungewiss ist.'},
    {name:'Kalkulatorischer Unternehmerlohn', betrag:30000, gruppe:'verbot',
     grund:'Kalkulatorische Kosten stehen kein Aufwand gegenüber – sie sind reine Kostenrechnungsgrößen und in der Bilanz nicht ansatzfähig.'}
  ],
  hinweise:[
    'Zwei Positionen sind hier heikel: eine trägt „Sondereinzelkosten“ im Namen, gehört aber nicht zur Fertigung. Und eine Kostenart existiert nur in der Kostenrechnung.',
    'Der fertigungsbedingte Wertverzehr des Anlagevermögens ist Pflicht. Freiwillige soziale Leistungen, betriebliche Altersversorgung und Fremdkapitalzinsen der Herstellungszeit stehen im Wahlrecht.',
    'Pflicht sind die sechs fertigungsnahen Positionen, Wahlrecht die vier freiwilligen bzw. unternehmensweiten, Verboten sind Sondereinzelkosten des Vertriebs, Forschungskosten und der kalkulatorische Unternehmerlohn.'
  ],
  merke:'Sondereinzelkosten der Fertigung sind Pflicht, Sondereinzelkosten des Vertriebs sind verboten. Kalkulatorische Kosten haben in der Bilanz nichts zu suchen, weil ihnen kein Aufwand gegenübersteht.',
  stolpersteine:['Sondereinzelkosten des Vertriebs mit denen der Fertigung verwechselt','Kalkulatorischen Unternehmerlohn einbezogen','Fremdkapitalzinsen für Pflicht gehalten']
},
{
  id:'HK3', modul:'M14', typ:'herstellungskosten', stufe:3, titel:'Wertgrenzen bei Unterbeschäftigung',
  tags:['Herstellungskosten','Angemessene Kosten','Leerkosten','Wertgrenzen'],
  text:'Ein Fertigungsbetrieb war im abgelaufenen Jahr nicht ausgelastet. In den Fertigungsgemeinkosten von insgesamt 150.000,00 € stecken deshalb 30.000,00 € Leerkosten; sie sind unten getrennt aufgeführt. Ordne jede Position zu: Muss sie in die Herstellungskosten einbezogen werden, darf sie einbezogen werden oder darf sie nicht einbezogen werden? Wertuntergrenze und Wertobergrenze werden dabei mitgerechnet.',
  posten:[
    {name:'Fertigungsmaterial', betrag:300000, gruppe:'pflicht',
     grund:'Einzelkosten der Fertigung sind immer Pflichtbestandteil.'},
    {name:'Fertigungslöhne', betrag:200000, gruppe:'pflicht',
     grund:'Einzelkosten der Fertigung sind immer Pflichtbestandteil.'},
    {name:'Materialgemeinkosten (in voller Höhe angemessen)', betrag:45000, gruppe:'pflicht',
     grund:'Angemessene Materialgemeinkosten müssen einbezogen werden.'},
    {name:'Fertigungsgemeinkosten ohne Leerkosten', betrag:120000, gruppe:'pflicht',
     grund:'Der angemessene Teil der Fertigungsgemeinkosten ist Pflichtbestandteil.'},
    {name:'Leerkosten wegen Unterbeschäftigung (Teil der Fertigungsgemeinkosten)', betrag:30000, gruppe:'verbot',
     grund:'Leerkosten entfallen auf ungenutzte Kapazität. Sie sind nicht durch die Fertigung veranlasst, also nicht angemessen – sie bleiben Aufwand der Periode.'},
    {name:'Allgemeine Verwaltungskosten (in voller Höhe angemessen)', betrag:80000, gruppe:'wahl',
     grund:'Angemessene Teile der allgemeinen Verwaltungskosten dürfen einbezogen werden.'},
    {name:'Freiwillige soziale Leistungen (Kantinenzuschuss, Betriebsausflug)', betrag:25000, gruppe:'wahl',
     grund:'Freiwillige soziale Leistungen stehen im Wahlrecht des § 255 Abs. 2 Satz 3 HGB.'},
    {name:'Vertriebskosten', betrag:90000, gruppe:'verbot',
     grund:'Vertriebskosten dürfen nie einbezogen werden.'}
  ],
  hinweise:[
    'Zwei Fallen stecken in dieser Aufstellung: ein Kostenteil, der zwar zur richtigen Kostenart gehört, aber nicht angemessen ist – und eine Position, die gar nicht aktivierbar ist.',
    'Angemessen sind nur die Gemeinkosten, die auf die tatsächlich genutzte Kapazität entfallen. Leerkosten wegen Unterbeschäftigung gehören nicht dazu.',
    'Pflicht: Material, Löhne, Materialgemeinkosten, Fertigungsgemeinkosten ohne Leerkosten (665.000,00 €). Wahlrecht: Verwaltung, soziale Leistungen (Obergrenze 770.000,00 €). Verbot: Leerkosten, Vertrieb.'
  ],
  merke:'„Angemessen“ ist die entscheidende Einschränkung bei den Gemeinkosten. Was auf ungenutzte Kapazität entfällt, ist nicht durch die Fertigung veranlasst und darf nicht aktiviert werden.',
  stolpersteine:['Die Leerkosten als Pflicht oder Wahlrecht eingeordnet','Vertriebskosten in die Obergrenze einbezogen','Freiwillige soziale Leistungen für Pflicht gehalten']
},
{
  id:'HK4', modul:'M14', typ:'herstellungskosten', stufe:3, titel:'Wertgrenzen mit Wahlrechten und Kostenteilen',
  tags:['Herstellungskosten','Angemessene Kosten','Soziale Leistungen','Wertgrenzen'],
  text:'Für die unfertigen Erzeugnisse eines Auftragsfertigers liegen die folgenden Kosten der Periode vor. Von den Fertigungsgemeinkosten (195.000,00 €) und den allgemeinen Verwaltungskosten (96.000,00 €) ist jeweils ein Teil unangemessen; diese Teile sind getrennt aufgeführt. Ordne jede Position zu: Muss sie in die Herstellungskosten einbezogen werden, darf sie einbezogen werden oder darf sie nicht einbezogen werden? Wertuntergrenze und Wertobergrenze werden dabei mitgerechnet.',
  posten:[
    {name:'Fertigungsmaterial', betrag:420000, gruppe:'pflicht', grund:'Einzelkosten der Fertigung sind immer Pflichtbestandteil.'},
    {name:'Fertigungslöhne', betrag:260000, gruppe:'pflicht', grund:'Einzelkosten der Fertigung sind immer Pflichtbestandteil.'},
    {name:'Sondereinzelkosten der Fertigung (Spezialwerkzeuge für den Auftrag)', betrag:18000, gruppe:'pflicht',
     grund:'Direkt zurechenbare Kosten des Fertigungsauftrags gehören zwingend hinein.'},
    {name:'Materialgemeinkosten (in voller Höhe angemessen)', betrag:63000, gruppe:'pflicht', grund:'Angemessene Materialgemeinkosten sind Pflicht.'},
    {name:'Fertigungsgemeinkosten, angemessener Teil', betrag:170000, gruppe:'pflicht', grund:'Der angemessene Teil der Fertigungsgemeinkosten ist Pflicht.'},
    {name:'Fertigungsgemeinkosten, unangemessener Teil', betrag:25000, gruppe:'verbot',
     grund:'Unangemessene Kostenteile dürfen nicht aktiviert werden – auch wenn sie zu einer Pflichtposition gehören.'},
    {name:'Abschreibungen auf Fertigungsmaschinen (fertigungsbedingt)', betrag:44000, gruppe:'pflicht',
     grund:'Der fertigungsbedingte Wertverzehr des Anlagevermögens ist Pflichtbestandteil.'},
    {name:'Allgemeine Verwaltungskosten, angemessener Teil', betrag:80000, gruppe:'wahl', grund:'Angemessene Verwaltungskosten dürfen einbezogen werden.'},
    {name:'Allgemeine Verwaltungskosten, unangemessener Teil', betrag:16000, gruppe:'verbot',
     grund:'Auch beim Wahlrecht gilt: nur angemessene Teile. Der unangemessene Teil bleibt draußen.'},
    {name:'Freiwillige soziale Leistungen', betrag:21000, gruppe:'wahl', grund:'Wahlrecht nach § 255 Abs. 2 Satz 3 HGB.'},
    {name:'Aufwendungen für betriebliche Altersversorgung', betrag:13000, gruppe:'wahl', grund:'Wahlrecht nach § 255 Abs. 2 Satz 3 HGB.'},
    {name:'Fremdkapitalzinsen (entfallen auf den Herstellungszeitraum)', betrag:9000, gruppe:'wahl',
     grund:'§ 255 Abs. 3 HGB erlaubt die Einbeziehung, soweit die Zinsen auf den Herstellungszeitraum entfallen.'},
    {name:'Vertriebskosten', betrag:110000, gruppe:'verbot', grund:'Vertriebskosten dürfen nie einbezogen werden.'},
    {name:'Forschungskosten', betrag:35000, gruppe:'verbot', grund:'Forschungskosten dürfen nicht aktiviert werden.'}
  ],
  hinweise:[
    'Die Einschränkung „angemessen“ taucht hier zweimal auf – einmal bei einer Pflichtposition und einmal bei einer Wahlrechtsposition.',
    'Zu den Wahlrechten zählen neben den Verwaltungskosten auch freiwillige soziale Leistungen, die betriebliche Altersversorgung und Fremdkapitalzinsen, soweit sie auf die Herstellungszeit entfallen. Der fertigungsbedingte Wertverzehr ist Pflicht.',
    'Untergrenze 975.000,00 €, dazu Wahlrechte von 123.000,00 € – Obergrenze 1.098.000,00 €. Beide unangemessenen Teile, Vertrieb und Forschung: Verbot.'
  ],
  merke:'Der Abstand zwischen den Wertgrenzen ist der bilanzpolitische Spielraum. Wer hoch ansetzt, weist mehr Bestandsvermögen und mehr Gewinn aus – wer niedrig ansetzt, bildet stille Reserven.',
  stolpersteine:['Fertigungsbedingte Abschreibungen vergessen','Den unangemessenen Teil der Verwaltungskosten als Wahlrecht eingeordnet','Forschungskosten in die Obergrenze aufgenommen']
},

/* ---------- Modul 15 · Bewertung von Forderungen ---------- */
{
  id:'WB1', modul:'M15', typ:'berechnung', stufe:0, titel:'Totalausfall: Was mindert das Ergebnis?',
  tags:['Forderungen','Theorie','Umsatzsteuer'],
  text:'Eine Kundenforderung über 11.900,00 € (darin enthalten 19 % Umsatzsteuer) fällt endgültig aus.',
  frage:'Wie wirkt sich der Ausfall auf den Jahresabschluss aus?',
  optionen:[
    {text:'Die Forderung wird in voller Höhe ausgebucht, das Ergebnis mindert sich aber nur um den Nettobetrag von 10.000,00 €.', richtig:true,
     weg:'Aus der Bilanz verschwinden 11.900,00 €, denn so hoch war der Anspruch gegen den Kunden. Von diesem Betrag waren jedoch 1.900,00 € nie Ertrag des Unternehmens, sondern Umsatzsteuer, die an das Finanzamt abzuführen war. Fällt die Forderung aus, wird diese Steuer berichtigt und zurückgeholt. Als Aufwand bleibt der Nettobetrag von <b>10.000,00 €</b>.'},
    {text:'Das Ergebnis mindert sich um den vollen Bruttobetrag von 11.900,00 €.',
     fehler:'Damit würde die Umsatzsteuer doppelt zulasten des Unternehmens gehen: einmal bei der Abführung an das Finanzamt und ein zweites Mal als Aufwand. Sie wird stattdessen berichtigt.'},
    {text:'Es entsteht gar kein Aufwand, weil der Kunde ohnehin nie gezahlt hat.',
     fehler:'Der Ertrag wurde beim Verkauf bereits erfasst, unabhängig von der Zahlung. Fällt die Forderung aus, muss dieser Ertrag durch einen Aufwand ausgeglichen werden.'},
    {text:'Nur die Umsatzsteuer wird berichtigt, das Ergebnis bleibt unverändert.',
     fehler:'Dann stünde dem seinerzeit erfassten Ertrag kein Aufwand gegenüber – das Ergebnis wäre zu günstig dargestellt.'}
  ],
  hinweise:[
    'Überlege, welcher Teil des Rechnungsbetrags dem Unternehmen jemals wirtschaftlich zustand.',
    'Die Umsatzsteuer war von Anfang an für das Finanzamt bestimmt und wurde bereits abgeführt. Fällt die Forderung aus, lässt sie sich berichtigen.',
    'Ausgebucht werden 11.900,00 €, davon sind 1.900,00 € Umsatzsteuerkorrektur und 10.000,00 € Aufwand.'
  ],
  merke:'Ein Forderungsausfall kostet immer nur netto. Die Umsatzsteuer wird berichtigt – sie war nie Ertrag und ist deshalb auch kein Verlust.'
},
{
  id:'WB2', modul:'M15', typ:'berechnung', stufe:0, titel:'Zweifelhafte Forderung am Bilanzstichtag',
  tags:['Forderungen','Theorie','Einzelwertberichtigung'],
  text:'Über das Vermögen eines Kunden ist im Dezember das Insolvenzverfahren eröffnet worden. Am 31.12. ist noch nicht absehbar, wie viel von der Forderung zurückfließt; das Unternehmen rechnet mit einem Ausfall von 60 %.',
  frage:'Wie ist dieser Sachverhalt im Jahresabschluss zu berücksichtigen?',
  optionen:[
    {text:'Die Umsatzsteuer wird bereits jetzt berichtigt, wodurch die Forderung nur noch mit dem Nettobetrag zu Buche steht; auf diesen wird der geschätzte Ausfall wertberichtigt.', richtig:true,
     weg:'Mit der Eröffnung des Insolvenzverfahrens gilt die Forderung als <b>uneinbringlich</b> – das genügt für die Berichtigung der Umsatzsteuer nach § 17 UStG. Die Steuer wird gegen die Forderung ausgebucht, die anschließend mit dem Nettobetrag in der Bilanz steht. Auf diesen Nettobetrag bezieht sich die Einzelwertberichtigung für den geschätzten Ausfall; sie mindert das Ergebnis des alten Jahres. Geht später doch noch Geld ein, wird die Umsatzsteuer für den gezahlten Anteil wieder eingebucht.'},
    {text:'Die Umsatzsteuer bleibt zunächst unberührt und wird erst berichtigt, wenn der Ausfall endgültig feststeht.',
     fehler:'Auf den Abschluss des Verfahrens muss nicht gewartet werden: Bereits seine Eröffnung macht die Forderung uneinbringlich und erlaubt die Berichtigung. Geht später Geld ein, wird die Steuer für diesen Anteil einfach wieder eingebucht.'},
    {text:'Der geschätzte Ausfall wird vom Bruttobetrag berechnet und mindert das Ergebnis entsprechend.',
     fehler:'Damit würde die Umsatzsteuer als Aufwand behandelt, obwohl sie nie Ertrag war – und nach der Berichtigung ist sie ohnehin nicht mehr Teil der Forderung. Wertberichtigt wird auf den Nettobetrag.'},
    {text:'Solange das Verfahren läuft, ist nichts zu erfassen – erst der endgültige Ausfall wird gebucht.',
     fehler:'Das Vorsichtsprinzip verlangt das Gegenteil: Ein erkennbarer drohender Verlust gehört in das Jahr, in dem er erkennbar wird.'}
  ],
  hinweise:[
    'Zwei Dinge sind zu klären: Was geschieht mit der Umsatzsteuer – und von welchem Betrag wird der geschätzte Ausfall berechnet?',
    'Für die Umsatzsteuer genügt bereits die Eröffnung des Verfahrens; auf den Ausgang muss nicht gewartet werden. Der drohende Verlust selbst gehört nach dem Vorsichtsprinzip ohnehin schon ins alte Jahr.',
    'Umsatzsteuer sofort berichtigen, die Forderung steht danach netto – und auf diesen Nettobetrag bezieht sich die Wertberichtigung von 60 %.'
  ],
  merke:'Schon die Eröffnung des Insolvenzverfahrens erlaubt die Berichtigung der Umsatzsteuer. Die Forderung steht danach netto, und darauf bezieht sich die Wertberichtigung. Geht später Geld ein, wird die Steuer anteilig wieder eingebucht.'
},
{
  id:'WB3', modul:'M15', typ:'kette', stufe:1, titel:'Totalausfall · Forderung brutto gegeben',
  tags:['Forderungen','Totalausfall','Umsatzsteuer'],
  text:'Gegen einen Kunden besteht eine Forderung über <b>23.800,00 € (inkl. 19 % USt.)</b>. Im laufenden Geschäftsjahr wird das Insolvenzverfahren mangels Masse eingestellt – die Forderung fällt vollständig aus.',
  bloecke:[
    {id:'netto', titel:'Forderung aufteilen', typ:'rechnen',
     frage:'Wie hoch ist der Nettobetrag der Forderung?',
     antwort:20000,
     tipp:'Der genannte Betrag enthält die Umsatzsteuer bereits.',
     rechenweg:'23.800,00 € ÷ 1,19 = <b>20.000,00 €</b>'},
    {formel:'23800 * f - netto', id:'ust', titel:'Umsatzsteuer berichtigen', typ:'rechnen',
     frage:'Um welchen Betrag wird die Umsatzsteuer berichtigt?',
     antwort:3800,
     tipp:'Die Differenz zwischen Brutto- und Nettobetrag.',
     rechenweg:'23.800,00 € − 20.000,00 € = <b>3.800,00 €</b><br>Diese Steuer wurde beim Verkauf an das Finanzamt abgeführt und wird jetzt zurückgeholt.'},
    {formel:'netto', id:'ergebnis', titel:'Wirkung auf das Ergebnis bestimmen', typ:'rechnen',
     frage:'Wie wirkt sich der Ausfall auf das Ergebnis des Geschäftsjahres aus?', richtung:'ab',
     antwort:20000,
     tipp:'Welcher Teil des ausgefallenen Betrags war jemals Ertrag des Unternehmens?',
     rechenweg:'Nur der Nettobetrag war Ertrag, also mindert der Ausfall das Ergebnis um <b>20.000,00 €</b>. Aus der Bilanz verschwinden dagegen die vollen 23.800,00 €.'}
  ],
  hinweise:[
    'Der genannte Betrag ist der Anspruch gegen den Kunden. Ist er in voller Höhe ein Verlust für das Unternehmen?',
    'Rechne den Betrag zuerst in Netto und Umsatzsteuer auf. Die Steuer war für das Finanzamt bestimmt und lässt sich berichtigen.',
    'Netto 20.000,00 €, Umsatzsteuer 3.800,00 €. Das Ergebnis sinkt um 20.000,00 €.'
  ],
  merke:'Bilanz und GuV werden unterschiedlich stark berührt: Die Forderung verschwindet brutto, das Ergebnis sinkt netto.',
  stolpersteine:['Den Bruttobetrag als Aufwand erfasst','Die Umsatzsteuer mit 19 % vom Bruttobetrag gerechnet','Die Umsatzsteuerberichtigung vergessen']
},
{
  id:'WB4', modul:'M15', typ:'kette', stufe:1, titel:'Totalausfall · Forderung netto gegeben',
  tags:['Forderungen','Totalausfall','Umsatzsteuer'],
  text:'Einem Kunden wurden Waren für <b>15.000,00 € zzgl. 19 % USt.</b> in Rechnung gestellt. Noch im selben Geschäftsjahr wird das Insolvenzverfahren abgeschlossen, ohne dass eine Zahlung eingeht.',
  bloecke:[
    {id:'brutto', titel:'Ausgebuchte Forderung ermitteln', typ:'rechnen',
     frage:'Mit welchem Betrag verschwindet die Forderung aus der Bilanz?',
     antwort:17850,
     tipp:'Der Anspruch gegen den Kunden umfasst auch die Umsatzsteuer.',
     rechenweg:'15.000,00 € × 1,19 = <b>17.850,00 €</b>'},
    {id:'ergebnis', titel:'Wirkung auf das Ergebnis bestimmen', typ:'rechnen',
     frage:'Wie wirkt sich der Ausfall auf das Ergebnis des Geschäftsjahres aus?', richtung:'ab',
     antwort:15000,
     tipp:'Diesmal ist der maßgebliche Betrag bereits gegeben – du musst ihn nur erkennen.',
     rechenweg:'Als Aufwand wirkt der Nettobetrag: <b>15.000,00 €</b>. Die Umsatzsteuer von 2.850,00 € wird berichtigt und belastet das Ergebnis nicht.'}
  ],
  hinweise:[
    'Achte darauf, wie der Betrag angegeben ist: mit oder ohne Umsatzsteuer?',
    'Hier steht der Nettobetrag im Text, der Bruttobetrag muss erst berechnet werden – umgekehrt als im vorigen Fall.',
    'Brutto 17.850,00 € verlassen die Bilanz, das Ergebnis sinkt um 15.000,00 €.'
  ],
  merke:'Erst prüfen, ob ein Betrag netto oder brutto angegeben ist. Für das Ergebnis zählt immer der Nettobetrag, für die Bilanz der Bruttobetrag.',
  stolpersteine:['Netto- und Bruttobetrag verwechselt','Aus dem Nettobetrag mit ÷ 1,19 gerechnet','Den Bruttobetrag als Ergebniswirkung angegeben']
},
{
  id:'WB5', modul:'M15', typ:'kette', stufe:2, titel:'Teilausfall · Ausfall in Prozent',
  tags:['Forderungen','Teilausfall','Insolvenz'],
  text:'Gegen einen Kunden besteht eine Forderung über <b>47.600,00 € (inkl. 19 % USt.)</b>. Das Insolvenzverfahren wird noch im laufenden Geschäftsjahr abgeschlossen. Die Forderung fällt zu <b>80 %</b> aus, der Rest wird überwiesen.',
  bloecke:[
    {id:'eingang', titel:'Zahlungseingang ermitteln', typ:'rechnen',
     frage:'Welcher Betrag geht auf dem Bankkonto ein?',
     antwort:9520,
     tipp:'Der Kunde zahlt den Teil, der nicht ausfällt – bezogen auf den gesamten Rechnungsbetrag einschließlich Umsatzsteuer.',
     rechenweg:'100 % − 80 % = 20 % werden gezahlt.<br>47.600,00 € × 20 % = <b>9.520,00 €</b>'},
    {formel:'(47600 * f - eingang) / 1.19', id:'ergebnis', titel:'Wirkung auf das Ergebnis bestimmen', typ:'rechnen',
     frage:'Wie wirkt sich der Ausfall auf das Ergebnis des Geschäftsjahres aus?', richtung:'ab',
     antwort:32000,
     tipp:'Rechne den ausgefallenen Teil in netto um – oder ermittle gleich den Anteil vom Nettobetrag.',
     rechenweg:'Ausfall brutto: 47.600,00 € × 80 % = 38.080,00 €<br>Davon netto: 38.080,00 € ÷ 1,19 = <b>32.000,00 €</b><br>Kürzer: 47.600,00 € ÷ 1,19 = 40.000,00 € netto, davon 80 % = 32.000,00 €.<br>Zur Umsatzsteuer: Bei Insolvenzeröffnung wurden zunächst die vollen 7.600,00 € berichtigt; mit dem Zahlungseingang werden davon 1.520,00 € wieder eingebucht. Berichtigt bleiben die <b>6.080,00 €</b>, die auf den Ausfall entfallen.'}
  ],
  hinweise:[
    'Die Prozentangabe bezieht sich auf die Forderung insgesamt, also auf den Bruttobetrag. Für das Ergebnis brauchst du aber den Nettoanteil.',
    'Zwei Wege führen zum Ziel: erst den Bruttoausfall bilden und dann netto rechnen – oder erst netto rechnen und dann den Prozentsatz anwenden. Das Ergebnis ist dasselbe.',
    'Eingang 9.520,00 €, Ausfall brutto 38.080,00 €, davon netto 32.000,00 €.'
  ],
  merke:'Prozentangaben beziehen sich auf die Forderung, also auf den Bruttobetrag. Die Ergebniswirkung ergibt sich erst nach der Umrechnung in netto.',
  stolpersteine:['Den Prozentsatz auf den Nettobetrag bezogen und den Zahlungseingang zu niedrig angesetzt','Ausfall- und Zahlungsanteil vertauscht','Den Bruttoausfall als Ergebniswirkung angegeben']
},
{
  id:'WB6', modul:'M15', typ:'kette', stufe:2, titel:'Teilausfall · Insolvenzquote',
  tags:['Forderungen','Teilausfall','Insolvenzquote'],
  text:'Gegen einen Kunden besteht eine Forderung über <b>30.000,00 € zzgl. 19 % USt.</b> Das Insolvenzverfahren wird im laufenden Geschäftsjahr abgeschlossen. Die <b>Insolvenzquote beträgt 35 %</b>.',
  bloecke:[
    {id:'eingang', titel:'Zahlungseingang ermitteln', typ:'rechnen',
     frage:'Welcher Betrag geht auf dem Bankkonto ein?',
     antwort:12495,
     tipp:'Die Insolvenzquote gibt an, welcher Anteil der Forderung noch bedient wird – nicht, welcher ausfällt.',
     rechenweg:'Forderung brutto: 30.000,00 € × 1,19 = 35.700,00 €<br>35.700,00 € × 35 % = <b>12.495,00 €</b>'},
    {formel:'(35700 * f - eingang) / 1.19', id:'ergebnis', titel:'Wirkung auf das Ergebnis bestimmen', typ:'rechnen',
     frage:'Wie wirkt sich der Ausfall auf das Ergebnis des Geschäftsjahres aus?', richtung:'ab',
     antwort:19500,
     tipp:'Ausgefallen sind 65 % der Forderung. Für das Ergebnis zählt davon der Nettoanteil.',
     rechenweg:'Ausfall: 100 % − 35 % = 65 %<br>30.000,00 € × 65 % = <b>19.500,00 €</b> netto<br>Brutto sind das 23.205,00 €.<br>Zur Umsatzsteuer: Zunächst wurden die vollen 5.700,00 € berichtigt, mit dem Zahlungseingang werden 1.995,00 € wieder eingebucht. Berichtigt bleiben die <b>3.705,00 €</b> auf den Ausfall.'}
  ],
  hinweise:[
    'Vorsicht bei der Richtung: Die Insolvenzquote nennt den Anteil, der noch gezahlt wird.',
    'Der Zahlungseingang bemisst sich am Bruttobetrag, die Ergebniswirkung am Nettobetrag. Rechne beides getrennt.',
    'Eingang 35.700,00 € × 35 % = 12.495,00 € · Ausfall netto 30.000,00 € × 65 % = 19.500,00 €.'
  ],
  merke:'Die Insolvenzquote ist der Anteil, der noch fließt. Der Ausfall ist die Gegenzahl dazu.',
  stolpersteine:['Die Insolvenzquote als Ausfallquote gelesen','Den Zahlungseingang vom Nettobetrag berechnet','Die Umsatzsteuer aus dem Ausfall nicht berichtigt']
},
{
  id:'WB7', modul:'M15', typ:'kette', stufe:2, titel:'Teilausfall · Geldeingang in Euro',
  tags:['Forderungen','Teilausfall','Insolvenz'],
  text:'Gegen einen Kunden besteht eine Forderung über <b>59.500,00 € (inkl. 19 % USt.)</b>. Nach Abschluss des Insolvenzverfahrens gehen im laufenden Geschäftsjahr <b>17.850,00 €</b> auf dem Bankkonto ein; der Rest ist endgültig verloren.',
  bloecke:[
    {id:'ausfall', titel:'Ausgefallenen Betrag ermitteln', typ:'rechnen',
     frage:'Wie hoch ist der ausgefallene Teil der Forderung?',
     antwort:41650,
     tipp:'Diesmal ist keine Quote angegeben, sondern der Zahlungseingang selbst.',
     rechenweg:'59.500,00 € − 17.850,00 € = <b>41.650,00 €</b> (brutto)'},
    {formel:'ausfall / 1.19', id:'ergebnis', titel:'Wirkung auf das Ergebnis bestimmen', typ:'rechnen',
     frage:'Wie wirkt sich der Ausfall auf das Ergebnis des Geschäftsjahres aus?', richtung:'ab',
     antwort:35000,
     tipp:'Der ausgefallene Betrag enthält noch Umsatzsteuer.',
     rechenweg:'41.650,00 € ÷ 1,19 = <b>35.000,00 €</b><br>Zur Umsatzsteuer: Zunächst wurden die vollen 9.500,00 € berichtigt, vom Zahlungseingang werden 2.850,00 € wieder eingebucht. Berichtigt bleiben die <b>6.650,00 €</b> auf den Ausfall.'}
  ],
  hinweise:[
    'Der Ausfall lässt sich hier direkt als Differenz bestimmen – aber in welcher Größe ist diese Differenz angegeben?',
    'Zahlungseingang und Forderung sind beide Bruttobeträge, also ist auch die Differenz brutto. Für das Ergebnis muss sie noch umgerechnet werden.',
    'Ausfall brutto 41.650,00 €, davon netto 35.000,00 €.'
  ],
  merke:'Ob Prozentsatz, Quote oder Eurobetrag – der Weg bleibt gleich: erst den Bruttoausfall bestimmen, dann in netto umrechnen.',
  stolpersteine:['Den Bruttoausfall als Ergebniswirkung angegeben','Den Zahlungseingang statt des Ausfalls umgerechnet','Mit 19 % statt mit 19/119 aus dem Bruttobetrag gerechnet']
},
{
  id:'WB8', modul:'M15', typ:'kette', stufe:3, titel:'Schätzung und Insolvenzquote im Folgejahr',
  tags:['Forderungen','Einzelwertberichtigung','Folgejahr'],
  text:'Über das Vermögen eines Kunden wird im Dezember das Insolvenzverfahren eröffnet. Die Forderung beträgt <b>35.700,00 € (inkl. 19 % USt.)</b>. Zum 31.12. schätzt das Unternehmen den Ausfall auf <b>70 %</b> und berichtigt die Forderung entsprechend.<br><br>Im Folgejahr wird das Verfahren abgeschlossen. Die <b>Insolvenzquote beträgt 40 %</b>.',
  bloecke:[
    {id:'ewb', titel:'Wirkung im alten Jahr', typ:'rechnen',
     frage:'Wie wirkt sich die Einzelwertberichtigung auf das Ergebnis des alten Geschäftsjahres aus?', richtung:'ab',
     antwort:21000,
     tipp:'Mit der Eröffnung des Verfahrens wird die Umsatzsteuer berichtigt – die Forderung steht danach netto. Auf diesen Betrag bezieht sich die Wertberichtigung.',
     rechenweg:'Nach der Umsatzsteuerberichtigung steht die Forderung mit 35.700,00 € ÷ 1,19 = 30.000,00 € in der Bilanz.<br>30.000,00 € × 70 % = <b>21.000,00 €</b> Aufwand'},
    {formel:'ewb - 18000 * f', id:'folgejahr', titel:'Wirkung im Folgejahr', typ:'rechnen',
     frage:'Wie wirkt sich der Abschluss des Verfahrens auf das Ergebnis des Folgejahres aus?', richtung:'zu',
     antwort:3000,
     tipp:'Ermittle den tatsächlichen Nettoausfall und vergleiche ihn mit der Schätzung. War sie zu hoch oder zu niedrig?',
     rechenweg:'Zahlungseingang: 35.700,00 € × 40 % = 14.280,00 €. Davon werden 2.280,00 € Umsatzsteuer wieder eingebucht, netto fließen also 12.000,00 €.<br>Tatsächlicher Nettoausfall: 30.000,00 € − 12.000,00 € = 18.000,00 € (entspricht 60 % von 30.000,00 €).<br>Geschätzt waren 21.000,00 €, tatsächlich sind es 18.000,00 € – die Schätzung war um <b>3.000,00 €</b> zu hoch. Dieser Betrag wird aufgelöst und erhöht als Ertrag das Ergebnis des Folgejahres.'}
  ],
  hinweise:[
    'Zwei Geschäftsjahre, zwei Erfolgswirkungen. Bestimme zuerst, was im alten Jahr geschätzt wurde, dann was tatsächlich eingetreten ist.',
    'Beide Beträge sind Nettobeträge – erst dann sind sie vergleichbar. Achte auch darauf, dass die Insolvenzquote den gezahlten Anteil bezeichnet, nicht den ausgefallenen.',
    'Schätzung 30.000,00 € × 70 % = 21.000,00 €, tatsächlich 30.000,00 € × 60 % = 18.000,00 €. Differenz 3.000,00 € als Ertrag im Folgejahr.'
  ],
  merke:'Die Schätzung belastet das alte Jahr, die Korrektur das neue. War zu viel wertberichtigt, entsteht im Folgejahr ein Ertrag.',
  stolpersteine:['Schätzung und tatsächlichen Ausfall auf unterschiedlicher Basis verglichen (netto gegen brutto)','Die Insolvenzquote als Ausfallquote gelesen','Den vollen tatsächlichen Ausfall noch einmal als Aufwand erfasst']
},
{
  id:'WB9', modul:'M15', typ:'kette', stufe:3, titel:'Schätzung und Geldeingang im Folgejahr',
  tags:['Forderungen','Einzelwertberichtigung','Folgejahr'],
  text:'Zum 31.12. ist eine Forderung über <b>71.400,00 € (inkl. 19 % USt.)</b> zweifelhaft geworden. Das Unternehmen schätzt den Ausfall auf <b>50 %</b> und berichtigt die Forderung entsprechend.<br><br>Im Folgejahr wird das Insolvenzverfahren abgeschlossen. Es gehen <b>17.850,00 €</b> auf dem Bankkonto ein, der Rest fällt aus.',
  bloecke:[
    {id:'ausfall', titel:'Tatsächlichen Ausfall ermitteln', typ:'rechnen',
     frage:'Wie hoch ist der tatsächliche Ausfall netto?',
     antwort:45000,
     tipp:'Erst die Differenz zum Zahlungseingang bilden, dann in netto umrechnen.',
     rechenweg:'71.400,00 € − 17.850,00 € = 53.550,00 € brutto<br>53.550,00 € ÷ 1,19 = <b>45.000,00 €</b> netto'},
    {formel:'ausfall - 30000 * f', id:'folgejahr', titel:'Wirkung im Folgejahr', typ:'rechnen',
     frage:'Wie wirkt sich der Abschluss des Verfahrens auf das Ergebnis des Folgejahres aus?', richtung:'ab',
     antwort:15000,
     tipp:'Vergleiche den tatsächlichen Nettoausfall mit der Wertberichtigung aus dem Vorjahr.',
     rechenweg:'Wertberichtigt waren: 71.400,00 € ÷ 1,19 = 60.000,00 € netto, davon 50 % = 30.000,00 €<br>Vom Zahlungseingang über 17.850,00 € werden 2.850,00 € Umsatzsteuer wieder eingebucht, netto fließen 15.000,00 €. Tatsächlich ausgefallen sind damit 60.000,00 € − 15.000,00 € = 45.000,00 €.<br>45.000,00 € − 30.000,00 € = <b>15.000,00 €</b> zusätzlicher Aufwand im Folgejahr.'}
  ],
  hinweise:[
    'Der Zahlungseingang ist ein Bruttobetrag, die Wertberichtigung ein Nettobetrag. Bringe beide auf dieselbe Basis, bevor du vergleichst.',
    'Tatsächlicher Ausfall netto und geschätzter Ausfall netto sind die beiden Zahlen, die einander gegenüberstehen. Die Differenz ist die Erfolgswirkung des Folgejahres.',
    'Wertberichtigung 30.000,00 €, tatsächlicher Nettoausfall 45.000,00 €. Es fehlen 15.000,00 €, die als Aufwand nachzuholen sind.'
  ],
  merke:'War die Schätzung zu niedrig, holt das Folgejahr den Rest als Aufwand nach. Verglichen wird immer netto gegen netto.',
  stolpersteine:['Den Bruttoausfall mit der Nettowertberichtigung verglichen','Den vollen Ausfall als Aufwand des Folgejahres erfasst','Den Zahlungseingang als Ausfall behandelt']
},
{
  id:'WB10', modul:'M15', typ:'kette', stufe:3, titel:'Schätzung und Totalausfall im Folgejahr',
  tags:['Forderungen','Einzelwertberichtigung','Folgejahr'],
  text:'Zum 31.12. ist eine Forderung über <b>20.000,00 € zzgl. 19 % USt.</b> zweifelhaft. Der Ausfall wird auf <b>60 %</b> geschätzt und die Forderung entsprechend berichtigt.<br><br>Im Folgejahr wird das Insolvenzverfahren mangels Masse eingestellt – es geht nichts ein.',
  bloecke:[
    {id:'folgejahr', titel:'Wirkung im Folgejahr', typ:'rechnen',
     frage:'Wie wirkt sich der endgültige Ausfall auf das Ergebnis des Folgejahres aus?', richtung:'ab',
     antwort:8000,
     tipp:'Stelle den tatsächlichen Nettoausfall der Wertberichtigung aus dem Vorjahr gegenüber. Nur die Differenz belastet das neue Jahr.',
     rechenweg:'Wertberichtigt waren 20.000,00 € × 60 % = 12.000,00 €<br>Tatsächlich ausgefallen ist der volle Nettobetrag von 20.000,00 €<br>20.000,00 € − 12.000,00 € = <b>8.000,00 €</b> zusätzlicher Aufwand.<br>Die Umsatzsteuer von 3.800,00 € war bereits bei Eröffnung des Verfahrens berichtigt worden. Da nichts eingeht, bleibt es dabei – eine Rückbuchung entfällt.'}
  ],
  hinweise:[
    'Ein Teil des Verlusts wurde bereits im alten Jahr erfasst. Was bleibt für das neue Jahr übrig?',
    'Der Nettobetrag steht schon im Text – rechne ihn nicht erst um. Bestimme die Wertberichtigung des Vorjahres und ziehe sie vom tatsächlichen Nettoausfall ab.',
    'Wertberichtigung 12.000,00 €, tatsächlicher Ausfall 20.000,00 €, Differenz 8.000,00 € als Aufwand des Folgejahres.'
  ],
  merke:'Bei einem Totalausfall ist der tatsächliche Nettoausfall der volle Nettobetrag der Forderung. Belastet wird das Folgejahr nur mit dem noch nicht wertberichtigten Rest.',
  stolpersteine:['Den vollen Nettobetrag noch einmal als Aufwand erfasst','Die Vorjahresschätzung übersehen','Den Bruttobetrag als Ausfall angesetzt']
},
/* ---------- Bewertung von Forderungen · Buchungen ----------
   Insolvenzeröffnung: Umsatzsteuer sofort berichtigen (4800 an 2400), die Forderung steht dann netto da.
   Keine Umbuchung auf 2410 Zweifelhafte Forderungen (wäre möglich, wird hier bewusst weggelassen).
   Ausfall direkt über 6951; Geldeingang über Erwarten im Folgejahr über 5470.
   tausch: Im Test und Training werden Fall a und Fall b vertauscht: im Test nach Wahl der Lehrkraft in der Vorschau, im Prüfungstraining zufällig. */
{
  id:'WB11', modul:'M15', typ:'kette', stufe:2, titel:'Insolvenz eines Kunden · Abschluss im selben Jahr buchen',
  tags:['Forderungen','Insolvenz','Umsatzsteuerberichtigung','Buchung'],
  text:'Gegen einen Kunden besteht eine Forderung über <b>11.900,00 € (inkl. 19 % USt.)</b>. Im Mai meldet der Kunde Insolvenz an; das Insolvenzverfahren wird eröffnet. Buche die Umsatzsteuerberichtigung und danach den Abschluss des Verfahrens noch im selben Jahr für beide möglichen Fälle: a) Die Forderung fällt vollständig aus. b) Im Oktober geht eine Insolvenzquote von 30 % auf dem Bankkonto ein, der Rest fällt aus.',
  bloecke:[
    {id:'ust', titel:'Umsatzsteuer bei Eröffnung des Insolvenzverfahrens berichtigen',
     muster:[{seite:'soll', konto:'4800', betrag:1900}, {seite:'haben', konto:'2400', betrag:1900}]},
    {id:'totalausfall', titel:'Fall a) Forderung fällt vollständig aus',
     muster:[{seite:'soll', konto:'6951', betrag:10000}, {seite:'haben', konto:'2400', betrag:10000}]},
    {id:'teilausfall', titel:'Fall b) Geldeingang von 30 %, Rest fällt aus',
     muster:[{seite:'soll', konto:'2800', betrag:3570}, {seite:'soll', konto:'6951', betrag:7000},
             {seite:'haben', konto:'2400', betrag:10000}, {seite:'haben', konto:'4800', betrag:570}]}
  ],
  hinweise:[
    'Mit der Eröffnung des Insolvenzverfahrens gilt die Forderung als uneinbringlich – die Umsatzsteuer darf sofort berichtigt werden. Danach steht die Forderung netto in den Büchern.',
    'Umsatzsteuer: 11.900,00 € ÷ 1,19 × 0,19 = 1.900,00 € (4800 an 2400). Fall a: Der Nettobetrag von 10.000,00 € wird abgeschrieben (6951 an 2400).',
    'Fall b: 30 % von 11.900,00 € = 3.570,00 € gehen ein, darin 570,00 € Umsatzsteuer, die wieder einzubuchen ist. Abgeschrieben werden 70 % des Nettobetrags = 7.000,00 €. Soll 2800 3.570,00 € und 6951 7.000,00 €, Haben 2400 10.000,00 € und 4800 570,00 €.'
  ],
  merke:'Bei Insolvenzeröffnung wird die Umsatzsteuer sofort berichtigt; abgeschrieben wird nur der Nettoausfall. Geht doch noch Geld ein, wird die Umsatzsteuer auf den gezahlten Teil wieder eingebucht. Man kann die Forderung vorher auch auf 2410 Zweifelhafte Forderungen umbuchen (2410 an 2400) – nötig ist das nicht.'
},
{
  id:'WB12', modul:'M15', typ:'kette', stufe:3, titel:'Geschätzter Ausfall zum 31.12. · Geldeingang im Folgejahr buchen',
  tags:['Forderungen','Insolvenz','Abschreibung','Folgejahr','Buchung'],
  text:'Gegen einen Kunden besteht eine Forderung über <b>23.800,00 € (inkl. 19 % USt.)</b>. Im Dezember wird über sein Vermögen das Insolvenzverfahren eröffnet. Zum 31.12. schätzt das Unternehmen den Ausfall auf <b>60 %</b> und schreibt die Forderung entsprechend ab. Im Folgejahr wird das Verfahren abgeschlossen. Buche die Vorgänge im alten Jahr und den Geldeingang im Folgejahr.',
  tausch:['fallA','fallB'],
  bloecke:[
    {id:'ust', titel:'Dezember: Umsatzsteuer berichtigen',
     muster:[{seite:'soll', konto:'4800', betrag:3800}, {seite:'haben', konto:'2400', betrag:3800}]},
    {id:'abschreibung', titel:'31.12.: Geschätzten Ausfall abschreiben',
     muster:[{seite:'soll', konto:'6951', betrag:12000}, {seite:'haben', konto:'2400', betrag:12000}]},
    {id:'fallA', titel:'Fall a) Folgejahr: Buche den Geldeingang über 11.900,00 €',
     muster:[{seite:'soll', konto:'2800', betrag:11900},
             {seite:'haben', konto:'2400', betrag:8000}, {seite:'haben', konto:'5470', betrag:2000}, {seite:'haben', konto:'4800', betrag:1900}]},
    {id:'fallB', titel:'Fall b) Folgejahr: Buche den Geldeingang über 5.950,00 €',
     muster:[{seite:'soll', konto:'2800', betrag:5950}, {seite:'soll', konto:'6951', betrag:3000},
             {seite:'haben', konto:'2400', betrag:8000}, {seite:'haben', konto:'4800', betrag:950}]}
  ],
  hinweise:[
    'Nach der Umsatzsteuerberichtigung steht die Forderung mit 20.000,00 € netto da. 60 % davon werden zum 31.12. abgeschrieben – es bleiben 8.000,00 € in der Bilanz.',
    'Im Folgejahr wird die Restforderung von 8.000,00 € ausgebucht. Vergleiche den eingegangenen Nettobetrag mit diesen 8.000,00 €: Mehr eingegangen ist ein Ertrag (5470), weniger ein zusätzlicher Ausfall (6951). Die Umsatzsteuer auf den gezahlten Teil wird wieder eingebucht.',
    '<span class="fall-a">11.900,00 € gehen ein = 10.000,00 € netto + 1.900,00 € USt; 2.000,00 € mehr als erwartet → 5470.</span> <span class="fall-b">5.950,00 € gehen ein = 5.000,00 € netto + 950,00 € USt; 3.000,00 € weniger als erwartet → 6951.</span>'
  ],
  merke:'War die Schätzung zu pessimistisch, entsteht im Folgejahr ein Ertrag (5470 Erlöse aus direkt abgeschriebenen Forderungen); war sie zu optimistisch, wird zusätzlich abgeschrieben (6951). Die Umsatzsteuer auf jeden eingehenden Betrag wird wieder eingebucht.'
},

/* ---------- Modul 16 · Rechnungsabgrenzung und antizipative Posten ---------- */
{
  id:'RAP1', modul:'M16', typ:'berechnung', stufe:0, titel:'Gezahlt im alten Jahr, Aufwand im neuen',
  tags:['Abgrenzung','Theorie','ARAP'],
  text:'Am 01.11. überweist das Unternehmen die Miete für die Monate November bis April im Voraus.',
  frage:'Welcher Posten entsteht dadurch im Jahresabschluss zum 31.12.?',
  optionen:[
    {text:'Ein aktiver Rechnungsabgrenzungsposten (ARAP).', richtig:true,
     weg:'Die Ausgabe ist bereits erfolgt, der Aufwand für Januar bis April gehört aber ins neue Jahr. Ausgabe vor dem Stichtag, Aufwand danach – das ist der <b>transitorische</b> Fall auf der Aktivseite. Der ARAP ist gewissermaßen vorausbezahlter Aufwand, der als Posten wartet, bis er im neuen Jahr wirksam wird.'},
    {text:'Ein passiver Rechnungsabgrenzungsposten (PRAP).',
     fehler:'Ein PRAP entsteht, wenn das Unternehmen Geld erhalten hat und die Gegenleistung erst im neuen Jahr erbringt. Hier wurde gezahlt, nicht vereinnahmt.'},
    {text:'Eine sonstige Verbindlichkeit.',
     fehler:'Sonstige Verbindlichkeiten sind antizipativ: Der Aufwand gehört ins alte Jahr, die Zahlung folgt erst später. Hier ist bereits gezahlt worden.'},
    {text:'Eine sonstige Forderung.',
     fehler:'Eine sonstige Forderung entsteht bei einem Ertrag des alten Jahres, dessen Einnahme noch aussteht. Hier geht es dagegen um eigenen Aufwand.'}
  ],
  hinweise:[
    'Stelle dir zwei Fragen: Ist das Geld schon geflossen? Und in welches Jahr gehört der Aufwand?',
    'Das Geld ist bereits abgeflossen, der Aufwand fällt teilweise erst später an. Damit ist der Fall transitorisch – bleibt die Frage, auf welche Bilanzseite er gehört.',
    'Eigene Zahlung im alten Jahr, eigener Aufwand im neuen Jahr: aktiver Rechnungsabgrenzungsposten.'
  ],
  merke:'Transitorisch heißt: Das Geld ist schon geflossen. Zahlt das Unternehmen selbst, entsteht ein ARAP; erhält es Geld, ein PRAP.'
},
{
  id:'RAP2', modul:'M16', typ:'berechnung', stufe:0, titel:'Aufwand im alten Jahr, Zahlung im neuen',
  tags:['Abgrenzung','Theorie','Sonstige Verbindlichkeiten'],
  text:'Für ein Darlehen sind die Zinsen der Monate Oktober bis Dezember erst am 31. März des Folgejahres fällig.',
  frage:'Welcher Posten entsteht dadurch im Jahresabschluss zum 31.12.?',
  optionen:[
    {text:'Eine sonstige Verbindlichkeit.', richtig:true,
     weg:'Die Zinsen sind wirtschaftlich im alten Jahr entstanden, gezahlt wird aber erst im neuen. Der Aufwand wird also <b>vorweggenommen</b> – daher „antizipativ". Weil das Geld noch nicht geflossen ist, steht dem Aufwand eine echte Schuld gegenüber: eine sonstige Verbindlichkeit.'},
    {text:'Ein passiver Rechnungsabgrenzungsposten.',
     fehler:'Beim PRAP ist das Geld bereits geflossen – hier wurde noch nichts gezahlt. Merkhilfe: transitorisch heißt „Geld ist schon geflossen", antizipativ heißt „Geld fließt erst noch".'},
    {text:'Ein aktiver Rechnungsabgrenzungsposten.',
     fehler:'Ein ARAP setzt eine bereits geleistete Zahlung voraus, deren Aufwand ins neue Jahr gehört. Hier ist es genau umgekehrt.'},
    {text:'Gar kein Posten, solange keine Rechnung vorliegt.',
     fehler:'Auf die Rechnung kommt es nicht an. Die Zinsen sind im alten Jahr entstanden und müssen dort als Aufwand erscheinen – sonst wäre das Ergebnis zu günstig dargestellt.'}
  ],
  hinweise:[
    'Ist in diesem Fall schon Geld geflossen? Und in welches Jahr gehört der Zinsaufwand?',
    'Der Aufwand gehört ins alte Jahr, gezahlt wird erst im neuen. Damit ist der Fall antizipativ – bleibt die Frage nach der Bilanzseite.',
    'Eigener Aufwand im alten Jahr, eigene Zahlung im neuen Jahr: sonstige Verbindlichkeit.'
  ],
  merke:'Antizipativ heißt: Das Geld fließt erst noch. Bei eigenem Aufwand entsteht eine sonstige Verbindlichkeit, bei eigenem Ertrag eine sonstige Forderung.'
},
{
  id:'RAP3', modul:'M16', typ:'kette', stufe:1, titel:'Versicherungsprämie im Voraus gezahlt',
  tags:['Abgrenzung','ARAP','Ergebniswirkung'],
  text:'Am 01.10. überweist das Unternehmen die Prämie für eine Betriebshaftpflichtversicherung für zwölf Monate im Voraus: <b>2.400,00 €</b>. Der Versicherungsschutz läuft vom 01.10. bis zum 30.09. des Folgejahres. Das Geschäftsjahr entspricht dem Kalenderjahr.',
  bloecke:[
    {id:'monate', titel:'Zeitraum abgrenzen', typ:'rechnen', einheit:'Monate', nachkomma:0,
     frage:'Wie viele Monate des Versicherungszeitraums entfallen auf das neue Geschäftsjahr?',
     antwort:9,
     tipp:'Der Schutz läuft ab dem 01.10. für zwölf Monate. Wie viele davon liegen noch vor dem 31.12., wie viele danach?',
     rechenweg:'Oktober bis Dezember = 3 Monate im alten Jahr.<br>12 − 3 = <b>9 Monate</b> im neuen Jahr (Januar bis September).'},
    {formel:'2400 * f / 12 * monate', id:'arap', titel:'Abgrenzungsposten berechnen', typ:'rechnen',
     frage:'Mit welchem Betrag ist der aktive Rechnungsabgrenzungsposten zum 31.12. anzusetzen?',
     antwort:1800,
     tipp:'Monatsbetrag ermitteln und mit den Monaten des neuen Jahres multiplizieren.',
     rechenweg:'2.400,00 € ÷ 12 Monate = 200,00 € je Monat<br>9 Monate × 200,00 € = <b>1.800,00 €</b> ARAP'},
    {formel:'2400 * f - arap', id:'ergebnis', titel:'Wirkung auf das Ergebnis bestimmen', typ:'rechnen',
     frage:'Wie wirkt sich die Versicherung auf das Ergebnis des laufenden Geschäftsjahres aus?', richtung:'ab',
     antwort:600,
     tipp:'Nur der Teil, der wirtschaftlich ins alte Jahr gehört, darf als Aufwand wirken.',
     rechenweg:'3 Monate × 200,00 € = <b>600,00 €</b> Aufwand.<br>Von den gezahlten 2.400,00 € mindern also nur 600,00 € das Ergebnis; die übrigen 1.800,00 € warten im ARAP auf das neue Jahr.'}
  ],
  hinweise:[
    'Die Zahlung deckt einen Zeitraum ab, der über den Stichtag hinausreicht. Welcher Teil davon gehört wirtschaftlich noch ins alte Jahr?',
    'Rechne zuerst den Monatsbetrag aus: 2.400,00 € für zwölf Monate. Dann zähle die Monate vor und nach dem 31.12. getrennt.',
    '200,00 € je Monat · 3 Monate im alten Jahr = 600,00 € Aufwand · 9 Monate im neuen Jahr = 1.800,00 € ARAP.'
  ],
  merke:'Abgegrenzt wird zeitanteilig. Der ARAP nimmt den Teil der Zahlung auf, der wirtschaftlich ins neue Jahr gehört – das Ergebnis des alten Jahres wird dadurch entlastet.',
  stolpersteine:['Den vollen Zahlbetrag als Aufwand des alten Jahres behandelt','Die Monate falsch herum zugeordnet','Den Abgrenzungsbetrag statt des Aufwands als Ergebniswirkung angegeben']
},
{
  id:'RAP4', modul:'M16', typ:'kette', stufe:1, titel:'Miete im Voraus vereinnahmt',
  tags:['Abgrenzung','PRAP','Ergebniswirkung'],
  text:'Das Unternehmen vermietet eine nicht benötigte Halle. Am 01.11. gehen die Mieten für sechs Monate im Voraus ein: <b>7.200,00 €</b> für den Zeitraum November bis April. Das Geschäftsjahr entspricht dem Kalenderjahr.',
  bloecke:[
    {id:'prap', titel:'Abgrenzungsposten berechnen', typ:'rechnen',
     frage:'Mit welchem Betrag ist der passive Rechnungsabgrenzungsposten zum 31.12. anzusetzen?',
     antwort:4800,
     tipp:'Ermittle den Monatsbetrag und zähle die Monate, deren Mietleistung erst im neuen Jahr erbracht wird.',
     rechenweg:'7.200,00 € ÷ 6 Monate = 1.200,00 € je Monat<br>Januar bis April = 4 Monate × 1.200,00 € = <b>4.800,00 €</b> PRAP'},
    {formel:'7200 * f - prap', id:'ergebnis', titel:'Wirkung auf das Ergebnis bestimmen', typ:'rechnen',
     frage:'Wie wirkt sich die Vermietung auf das Ergebnis des laufenden Geschäftsjahres aus?', richtung:'zu',
     antwort:2400,
     tipp:'Nur die Monate, in denen die Halle im alten Jahr tatsächlich zur Verfügung stand, sind verdient.',
     rechenweg:'November und Dezember = 2 Monate × 1.200,00 € = <b>2.400,00 €</b> Ertrag.<br>Die restlichen 4.800,00 € sind zwar schon vereinnahmt, aber noch nicht verdient – sie stehen als PRAP auf der Passivseite.'}
  ],
  hinweise:[
    'Das Geld ist eingegangen, die Gegenleistung aber noch nicht vollständig erbracht. Was bedeutet das für den Ertrag des alten Jahres?',
    'Ein Ertrag gilt erst als verdient, wenn die Leistung erbracht ist. Zähle die Monate, in denen die Halle im alten Jahr überlassen wurde.',
    '1.200,00 € je Monat · 2 Monate im alten Jahr = 2.400,00 € Ertrag · 4 Monate im neuen Jahr = 4.800,00 € PRAP.'
  ],
  merke:'Der PRAP ist eine erhaltene, aber noch nicht verdiente Einnahme. Er steht auf der Passivseite, weil das Unternehmen die Leistung noch schuldet.',
  stolpersteine:['Den gesamten Zahlungseingang als Ertrag des alten Jahres erfasst','PRAP und ARAP verwechselt','Durch zwölf statt durch sechs Monate geteilt']
},
{
  id:'RAP5', modul:'M16', typ:'kette', stufe:2, titel:'Darlehenszinsen nachträglich fällig',
  tags:['Abgrenzung','Sonstige Verbindlichkeiten','Ergebniswirkung'],
  text:'Das Unternehmen hat ein Darlehen über <b>150.000,00 €</b> aufgenommen, das während des gesamten Geschäftsjahres bestand. Der Zinssatz beträgt <b>8 % p. a.</b> Die Zinsen werden vierteljährlich nachträglich gezahlt, jeweils am 10. Januar, 10. April, 10. Juli und 10. Oktober.',
  bloecke:[
    {id:'jahr', titel:'Zinsaufwand des Geschäftsjahres', typ:'rechnen',
     frage:'Wie hoch ist der Zinsaufwand des laufenden Geschäftsjahres?',
     antwort:12000,
     tipp:'Das Darlehen bestand das ganze Jahr. Für die Höhe des Aufwands ist es unerheblich, wann gezahlt wird.',
     rechenweg:'150.000,00 € × 8 % = <b>12.000,00 €</b> für zwölf Monate.<br>Der Aufwand entsteht durch die Kapitalnutzung, nicht durch die Zahlung.'},
    {formel:'jahr / 4', id:'sonstV', titel:'Abgrenzungsposten berechnen', typ:'rechnen',
     frage:'Mit welchem Betrag ist die sonstige Verbindlichkeit zum 31.12. anzusetzen?',
     antwort:3000,
     tipp:'Welches Quartal ist am 31.12. bereits abgelaufen, aber noch nicht bezahlt worden?',
     rechenweg:'Die letzte Zahlung am 10. Oktober betraf Juli bis September. Die Zinsen für Oktober bis Dezember werden erst am 10. Januar gezahlt.<br>12.000,00 € ÷ 4 Quartale = <b>3.000,00 €</b> sonstige Verbindlichkeit'}
  ],
  hinweise:[
    'Trenne zwei Dinge: Wie viel Zins ist im alten Jahr entstanden – und wie viel davon ist bereits geflossen?',
    'Der Jahreszins ergibt sich aus Darlehensbetrag und Zinssatz, unabhängig vom Zahlungsrhythmus. Prüfe dann, welcher Zeitraum am 31.12. noch offen ist.',
    'Jahreszins 12.000,00 €, davon sind drei Quartale gezahlt. Offen bleiben die Zinsen für Oktober bis Dezember: 3.000,00 €.'
  ],
  merke:'Der Aufwand richtet sich nach dem Zeitraum der Kapitalnutzung, nicht nach dem Zahlungstermin. Was im alten Jahr entstanden, aber noch nicht gezahlt ist, wird als sonstige Verbindlichkeit erfasst.',
  stolpersteine:['Nur die tatsächlich gezahlten Zinsen als Aufwand erfasst','Das im Januar gezahlte Quartal dem neuen Jahr zugeordnet','Mit dem falschen Zeitanteil gerechnet']
},
{
  id:'RAP6', modul:'M16', typ:'kette', stufe:2, titel:'Mieteinnahmen nachträglich vereinnahmt',
  tags:['Abgrenzung','Sonstige Forderungen','Ergebniswirkung'],
  text:'Eine Lagerhalle ist ganzjährig für <b>1.500,00 € monatlich</b> vermietet. Die Miete wird vierteljährlich nachträglich vereinnahmt, jeweils am 10. Januar, 10. April, 10. Juli und 10. Oktober.',
  bloecke:[
    {id:'jahr', titel:'Mietertrag des Geschäftsjahres', typ:'rechnen',
     frage:'Wie hoch ist der Mietertrag des laufenden Geschäftsjahres?',
     antwort:18000,
     tipp:'Die Halle war das ganze Jahr überlassen. Der Ertrag entsteht durch die Nutzungsüberlassung, nicht durch den Zahlungseingang.',
     rechenweg:'12 Monate × 1.500,00 € = <b>18.000,00 €</b>'},
    {formel:'jahr / 4', id:'sonstF', titel:'Abgrenzungsposten berechnen', typ:'rechnen',
     frage:'Mit welchem Betrag ist die sonstige Forderung zum 31.12. anzusetzen?',
     antwort:4500,
     tipp:'Für welches Quartal steht der Zahlungseingang am 31.12. noch aus?',
     rechenweg:'Die Miete für Oktober bis Dezember geht erst am 10. Januar ein.<br>3 Monate × 1.500,00 € = <b>4.500,00 €</b> sonstige Forderung'}
  ],
  hinweise:[
    'Der Ertrag ist verdient, sobald die Halle überlassen wurde. Ist er damit auch schon vereinnahmt?',
    'Rechne zuerst den vollen Jahresertrag aus. Prüfe dann, welches Quartal am Stichtag noch nicht bezahlt ist.',
    'Jahresertrag 18.000,00 €, offen sind die Mieten für Oktober bis Dezember: 4.500,00 €.'
  ],
  merke:'Bei der sonstigen Forderung ist der Ertrag im alten Jahr verdient, das Geld kommt erst im neuen. Sie ist das Spiegelbild der sonstigen Verbindlichkeit.',
  stolpersteine:['Nur die tatsächlich eingegangenen Mieten als Ertrag erfasst','Sonstige Forderung und PRAP verwechselt','Mit dem falschen Zeitanteil gerechnet']
},
{
  id:'RAP7', modul:'M16', typ:'kette', stufe:3, titel:'Zwei Sachverhalte, eine Ergebniswirkung',
  tags:['Abgrenzung','ARAP','Sonstige Forderungen','Ergebniswirkung'],
  text:'Zum 31.12. sind zwei Sachverhalte abzugrenzen. Das Geschäftsjahr entspricht dem Kalenderjahr.<br><br><b>a)</b> Am 01.09. wurde ein Beratungshonorar für zwölf Monate im Voraus gezahlt: 14.400,00 € für den Zeitraum September bis August.<br><b>b)</b> Am 01.07. hat das Unternehmen einem Geschäftspartner ein Darlehen über 60.000,00 € zu 5 % p. a. gewährt. Darlehen und Zinsen werden erst am 30.06. des Folgejahres in einer Summe zurückgezahlt.',
  bloecke:[
    {id:'ergebnis', titel:'Gesamte Ergebniswirkung bestimmen', typ:'rechnen',
     frage:'Wie wirken sich beide Sachverhalte zusammen auf das Ergebnis des laufenden Geschäftsjahres aus?', richtung:'ab',
     antwort:3300,
     tipp:'Bearbeite beide Sachverhalte zuerst getrennt: Wie viel Aufwand gehört bei a) ins alte Jahr, wie viel Ertrag bei b)? Verrechne die beiden Beträge erst am Schluss.',
     rechenweg:'<b>a)</b> 14.400,00 € ÷ 12 Monate = 1.200,00 € je Monat. September bis Dezember = 4 Monate × 1.200,00 € = <b>4.800,00 € Aufwand</b> (die übrigen 9.600,00 € stehen als ARAP in der Bilanz).<br><b>b)</b> 60.000,00 € × 5 % × 6/12 = <b>1.500,00 € Zinsertrag</b> für Juli bis Dezember (als sonstige Forderung erfasst, da die Zahlung erst im Folgejahr erfolgt).<br>Saldo: 4.800,00 € − 1.500,00 € = <b>3.300,00 € Ergebnisminderung</b>'}
  ],
  hinweise:[
    'Zwei Sachverhalte, zwei Richtungen: Einer belastet das Ergebnis, der andere erhöht es. Bestimme beide getrennt, bevor du sie zusammenführst.',
    'Bei a) ist bereits gezahlt worden, der Aufwand reicht aber ins neue Jahr – ein transitorischer Fall. Bei b) ist der Zinsertrag im alten Jahr entstanden, das Geld kommt später – ein antizipativer Fall.',
    'a) 4 Monate × 1.200,00 € = 4.800,00 € Aufwand · b) 60.000,00 € × 5 % × 6/12 = 1.500,00 € Ertrag · Saldo 3.300,00 € Ergebnisminderung.'
  ],
  merke:'Abgrenzungen können in beide Richtungen wirken. Erst wenn jeder Sachverhalt für sich zugeordnet ist, lässt sich die Wirkung auf das Ergebnis zusammenfassen.',
  stolpersteine:['Die beiden Beträge addiert statt saldiert','Die Zinsen für zwölf statt für sechs Monate gerechnet','Den ARAP-Betrag als Ergebniswirkung angegeben']
},

/* ---------- Modul 18 · Bewertung von Fremdwährungsverbindlichkeiten ---------- */
{
  id:'FT1', modul:'M18', typ:'berechnung', stufe:0, titel:'Kursgewinn bei langer Restlaufzeit',
  tags:['Fremdwährung','Theorie','Realisationsprinzip'],
  text:'Eine in US-Dollar aufgenommene Darlehensverbindlichkeit mit fünf Jahren Restlaufzeit ist am Bilanzstichtag in Euro weniger wert als bei der Aufnahme.',
  frage:'Wie ist dieser Kursgewinn im Jahresabschluss zu behandeln?',
  optionen:[
    {text:'Er bleibt unberücksichtigt – die Verbindlichkeit wird weiterhin mit dem Kurs bei Aufnahme angesetzt.', richtig:true,
     weg:'Bei einer Restlaufzeit von mehr als einem Jahr gilt das <b>Realisationsprinzip</b>: Ein Gewinn darf erst ausgewiesen werden, wenn er tatsächlich eingetreten ist – und das ist er erst bei der Rückzahlung. Bis dahin kann der Kurs sich wieder drehen. Für Verbindlichkeiten folgt daraus das <b>Höchstwertprinzip</b>: Angesetzt wird der höhere der beiden Werte, hier also der ursprüngliche.'},
    {text:'Er ist als Ertrag zu erfassen, die Verbindlichkeit wird entsprechend niedriger angesetzt.',
     fehler:'Das gilt nur bei einer Restlaufzeit von höchstens einem Jahr (§ 256a HGB). Bei längerer Laufzeit bleibt der noch nicht realisierte Gewinn außen vor.'},
    {text:'Er wird erfolgsneutral unmittelbar mit dem Eigenkapital verrechnet.',
     fehler:'Eine solche direkte Verrechnung mit dem Eigenkapital sieht das HGB an dieser Stelle nicht vor.'},
    {text:'Die Verbindlichkeit wird zum Stichtagskurs angesetzt, der Gewinn aber erst im Folgejahr erfasst.',
     fehler:'Bilanzansatz und Erfolgswirkung lassen sich nicht trennen: Würde die Verbindlichkeit gemindert, entstünde zwangsläufig sofort ein Ertrag.'}
  ],
  hinweise:[
    'Ist der Gewinn schon eingetreten – oder könnte sich der Kurs bis zur Rückzahlung in fünf Jahren wieder ändern?',
    'Das HGB behandelt Gewinne und Verluste ungleich: Drohende Verluste werden erfasst, sobald sie erkennbar sind, Gewinne erst, wenn sie realisiert sind.',
    'Bei mehr als einem Jahr Restlaufzeit bleibt der Kursgewinn unberücksichtigt; die Verbindlichkeit steht weiter zum ursprünglichen Kurs.'
  ],
  merke:'Über einem Jahr Restlaufzeit gilt für Verbindlichkeiten das Höchstwertprinzip: Kursverluste ja, Kursgewinne nein.'
},
{
  id:'FT2', modul:'M18', typ:'berechnung', stufe:0, titel:'Kursverlust bei kurzer Restlaufzeit',
  tags:['Fremdwährung','Theorie','Bilanz','GuV'],
  text:'Eine Lieferverbindlichkeit in US-Dollar ist in zwei Monaten fällig. Am Bilanzstichtag ist der Euro-Wert der Schuld höher als beim Einkauf.',
  frage:'Wie wirkt sich die Bewertung zum Stichtagskurs auf den Jahresabschluss aus?',
  optionen:[
    {text:'Die Verbindlichkeit wird höher angesetzt, in der GuV entsteht Aufwand – Gewinn und Eigenkapital sinken.', richtig:true,
     weg:'Die Schuld wächst um den Kursverlust, und der Gegenposten ist ein Aufwand. Beides betrifft die Passivseite: Die Verbindlichkeiten steigen, das Eigenkapital sinkt über den geminderten Gewinn um denselben Betrag – die Bilanzsumme bleibt unverändert. Die Aktivseite wird nicht berührt, denn es fließt kein Geld.'},
    {text:'Die Verbindlichkeit bleibt unverändert, weil der Verlust noch nicht realisiert ist.',
     fehler:'Beim Imparitätsprinzip ist es genau umgekehrt: Drohende Verluste sind zu erfassen, sobald sie erkennbar sind – auch wenn sie noch nicht realisiert sind.'},
    {text:'Die Verbindlichkeit steigt, das Ergebnis bleibt davon unberührt.',
     fehler:'Der Gegenposten der höheren Schuld ist ein Aufwand und läuft damit über die GuV. Ohne Erfolgswirkung ginge die Bilanz gar nicht auf.'},
    {text:'Der Bankbestand sinkt um den Betrag des Kursverlusts.',
     fehler:'Es fließt kein Geld. Erst die Zahlung im neuen Jahr berührt das Bankkonto – und zwar zum dann geltenden Kurs.'}
  ],
  hinweise:[
    'Die Schuld in Euro wird größer. Woher kommt der Gegenposten dieser Erhöhung?',
    'Eine höhere Verbindlichkeit ohne zusätzlichen Vermögensgegenstand kann nur über einen Aufwand entstehen. Überlege dann, welche Bilanzseiten betroffen sind.',
    'Verbindlichkeiten steigen, Aufwand mindert den Gewinn, Eigenkapital sinkt um denselben Betrag – die Bilanzsumme bleibt gleich.'
  ],
  merke:'Ein Kursverlust erhöht die Schuld und mindert über den Aufwand das Eigenkapital. Die Bilanzsumme ändert sich dadurch nicht, und es fließt kein Geld.'
},
{
  id:'FW1', modul:'M18', typ:'kette', stufe:1, titel:'Lieferverbindlichkeit in USD · Beispiel 1',
  tags:['Fremdwährung','Kurzfristig','Kursänderung'],
  text:'Ein Unternehmen kauft Waren gegen Rechnung in US-Dollar. Das Geschäftsjahr endet am 31.12.'
    + '<table class="lager"><tr><th>Datum</th><th class="z">Vorgang</th><th class="z">Betrag</th><th class="z">Devisenkurs</th></tr><tr><td>15.11.</td><td class="z">Wareneinkauf auf Ziel</td><td class="z">60.000,00 USD</td><td class="z">1,00 € = 1,25 USD</td></tr><tr><td>31.12.</td><td class="z">Bilanzstichtag</td><td class="z leer">–</td><td class="z">1,00 € = 1,20 USD</td></tr><tr><td>15.02.</td><td class="z">Fälligkeit der Rechnung</td><td class="z leer">–</td><td class="z leer">–</td></tr></table>'
    + 'Der Rechnungsbetrag ist noch offen.',
  bloecke:[
    {id:'einbuchung', titel:'Wert bei Entstehung ermitteln', typ:'rechnen',
     frage:'Mit welchem Euro-Betrag wurde die Verbindlichkeit am 15.11. erfasst?',
     antwort:48000,
     tipp:'Fremdwährungsbetrag geteilt durch den Devisenkurs des Tages.',
     rechenweg:'60.000,00 USD ÷ 1,25 = <b>48.000,00 €</b>'},
    {id:'stichtag', titel:'Wert zum Stichtagskurs ermitteln', typ:'rechnen',
     frage:'Welchen Euro-Betrag ergibt die Umrechnung zum Kurs vom 31.12.?',
     antwort:50000,
     tipp:'Derselbe Dollarbetrag, aber der Kurs vom Bilanzstichtag. Der Euro ist schwächer geworden.',
     rechenweg:'60.000,00 USD ÷ 1,20 = <b>50.000,00 €</b>'},
    {formel:'stichtag', id:'ansatz', titel:'Bilanzansatz bestimmen', typ:'rechnen',
     frage:'Mit welchem Betrag erscheint die Verbindlichkeit in der Bilanz?',
     antwort:50000,
     tipp:'Die Restlaufzeit beträgt gut zwei Monate. Welche Bewertungsregel gilt dann?',
     rechenweg:'Die Restlaufzeit liegt unter einem Jahr, deshalb wird zum Stichtagskurs bewertet: <b>50.000,00 €</b>. Hier führt zusätzlich schon das Höchstwertprinzip zu diesem Ergebnis, denn der Wert ist gestiegen.'},
    {formel:'ansatz - einbuchung', id:'ergebnis', titel:'Wirkung auf das Ergebnis bestimmen', typ:'rechnen',
     frage:'Wie wirkt sich die Bewertung auf das Ergebnis des Geschäftsjahres aus?', richtung:'ab',
     antwort:2000,
     tipp:'Vergleiche den Bilanzansatz mit dem Wert bei Entstehung.',
     rechenweg:'50.000,00 € − 48.000,00 € = <b>2.000,00 €</b> Kursverlust, der als Aufwand das Ergebnis mindert.'}
  ],
  hinweise:[
    'Rechne beide Zeitpunkte getrennt in Euro um, bevor du sie vergleichst. Achte auf die Richtung: Was bedeutet ein niedrigerer Kurs für den Euro-Wert der Schuld?',
    'Wenn ein Euro weniger Dollar kauft, braucht man mehr Euro für dieselbe Dollarschuld – der Euro-Wert der Verbindlichkeit steigt also.',
    '60.000,00 USD ÷ 1,25 = 48.000,00 € · ÷ 1,20 = 50.000,00 € · Ansatz 50.000,00 € · Kursverlust 2.000,00 €.'
  ],
  merke:'Ein sinkender Kurs (weniger Dollar je Euro) verteuert eine Dollarschuld. Bei kurzer Restlaufzeit wird stets zum Stichtagskurs bewertet.',
  stolpersteine:['Mit dem Kurs multipliziert statt geteilt','Die beiden Kurse vertauscht','Den Kursverlust als Ertrag gedeutet']
},
{
  id:'FW2', modul:'M18', typ:'kette', stufe:1, titel:'Lieferverbindlichkeit in USD · Beispiel 2',
  tags:['Fremdwährung','Kurzfristig','Kursänderung'],
  text:'Ein Unternehmen kauft Waren gegen Rechnung in US-Dollar. Das Geschäftsjahr endet am 31.12.'
    + '<table class="lager"><tr><th>Datum</th><th class="z">Vorgang</th><th class="z">Betrag</th><th class="z">Devisenkurs</th></tr><tr><td>01.12.</td><td class="z">Wareneinkauf auf Ziel</td><td class="z">90.000,00 USD</td><td class="z">1,00 € = 1,20 USD</td></tr><tr><td>31.12.</td><td class="z">Bilanzstichtag</td><td class="z leer">–</td><td class="z">1,00 € = 1,25 USD</td></tr><tr><td>01.03.</td><td class="z">Fälligkeit der Rechnung</td><td class="z leer">–</td><td class="z leer">–</td></tr></table>'
    + 'Der Rechnungsbetrag ist noch offen.',
  bloecke:[
    {id:'einbuchung', titel:'Wert bei Entstehung ermitteln', typ:'rechnen',
     frage:'Mit welchem Euro-Betrag wurde die Verbindlichkeit am 01.12. erfasst?',
     antwort:75000,
     tipp:'Fremdwährungsbetrag geteilt durch den Devisenkurs des Tages.',
     rechenweg:'90.000,00 USD ÷ 1,20 = <b>75.000,00 €</b>'},
    {id:'ansatz', titel:'Bilanzansatz bestimmen', typ:'rechnen',
     frage:'Mit welchem Betrag erscheint die Verbindlichkeit in der Bilanz?',
     antwort:72000,
     tipp:'Rechne zunächst zum Stichtagskurs um. Die Restlaufzeit beträgt drei Monate – gilt hier auch für einen Kursgewinn die Stichtagsbewertung?',
     rechenweg:'90.000,00 USD ÷ 1,25 = 72.000,00 €<br>Bei einer Restlaufzeit von höchstens einem Jahr wird ohne Rücksicht auf das Realisationsprinzip zum Stichtagskurs bewertet (§ 256a HGB). Angesetzt werden also <b>72.000,00 €</b>, obwohl der Gewinn noch nicht realisiert ist.'},
    {formel:'einbuchung - ansatz', id:'ergebnis', titel:'Wirkung auf das Ergebnis bestimmen', typ:'rechnen',
     frage:'Wie wirkt sich die Bewertung auf das Ergebnis des Geschäftsjahres aus?', richtung:'zu',
     antwort:3000,
     tipp:'Vergleiche den Bilanzansatz mit dem Wert bei Entstehung.',
     rechenweg:'75.000,00 € − 72.000,00 € = <b>3.000,00 €</b> Kursgewinn, der als Ertrag das Ergebnis erhöht.'}
  ],
  hinweise:[
    'Der Euro ist diesmal stärker geworden. Was bedeutet das für den Euro-Wert einer Dollarschuld?',
    'Ein Euro kauft mehr Dollar, die Schuld wird also billiger. Entscheidend ist nun die Restlaufzeit: Bis zu einem Jahr wird auch ein noch nicht realisierter Gewinn erfasst.',
    '90.000,00 USD ÷ 1,20 = 75.000,00 € · ÷ 1,25 = 72.000,00 € · Ansatz 72.000,00 € · Kursgewinn 3.000,00 €.'
  ],
  merke:'Bei einer Restlaufzeit bis zu einem Jahr zählt allein der Stichtagskurs – auch ein noch nicht realisierter Kursgewinn erhöht das Ergebnis.',
  stolpersteine:['Den Kursgewinn wegen des Realisationsprinzips unberücksichtigt gelassen','Mit dem Kurs multipliziert statt geteilt','Kursgewinn und Kursverlust verwechselt']
},
{
  id:'FW3', modul:'M18', typ:'kette', stufe:2, titel:'Darlehen in USD · Beispiel 1',
  tags:['Fremdwährung','Langfristig','Kursänderung'],
  text:'Ein Unternehmen hat ein Darlehen in US-Dollar aufgenommen. Das Geschäftsjahr endet am 31.12.'
    + '<table class="lager"><tr><th>Datum</th><th class="z">Vorgang</th><th class="z">Betrag</th><th class="z">Devisenkurs</th></tr><tr><td>01.04.</td><td class="z">Darlehensaufnahme</td><td class="z">528.000,00 USD</td><td class="z">1,00 € = 1,20 USD</td></tr><tr><td>31.12.</td><td class="z">Bilanzstichtag</td><td class="z leer">–</td><td class="z">1,00 € = 1,10 USD</td></tr><tr><td>später</td><td class="z">Rückzahlung in vier Jahren</td><td class="z leer">–</td><td class="z leer">–</td></tr></table>',
  bloecke:[
    {id:'einbuchung', titel:'Wert bei Aufnahme ermitteln', typ:'rechnen',
     frage:'Mit welchem Euro-Betrag wurde das Darlehen am 01.04. erfasst?',
     antwort:440000,
     tipp:'Fremdwährungsbetrag geteilt durch den Devisenkurs des Tages.',
     rechenweg:'528.000,00 USD ÷ 1,20 = <b>440.000,00 €</b>'},
    {id:'ansatz', titel:'Bilanzansatz bestimmen', typ:'rechnen',
     frage:'Mit welchem Betrag erscheint das Darlehen in der Bilanz?',
     antwort:480000,
     tipp:'Rechne zum Stichtagskurs um und vergleiche. Bei mehr als einem Jahr Restlaufzeit gilt für Verbindlichkeiten das Höchstwertprinzip.',
     rechenweg:'528.000,00 USD ÷ 1,10 = 480.000,00 €<br>Der Wert ist gestiegen. Nach dem Höchstwertprinzip ist der höhere Betrag anzusetzen: <b>480.000,00 €</b>. Der drohende Verlust wird erfasst, obwohl er noch nicht realisiert ist.'},
    {formel:'ansatz - einbuchung', id:'ergebnis', titel:'Wirkung auf das Ergebnis bestimmen', typ:'rechnen',
     frage:'Wie wirkt sich die Bewertung auf das Ergebnis des Geschäftsjahres aus?', richtung:'ab',
     antwort:40000,
     tipp:'Differenz zwischen Bilanzansatz und ursprünglichem Wert.',
     rechenweg:'480.000,00 € − 440.000,00 € = <b>40.000,00 €</b> Kursverlust als Aufwand.'}
  ],
  hinweise:[
    'Rechne beide Zeitpunkte um und stelle sie gegenüber. Prüfe dann, in welche Richtung sich der Wert der Schuld verändert hat.',
    'Der Euro-Wert der Schuld ist gestiegen – das ist ein drohender Verlust. Das Imparitätsprinzip verlangt, solche Verluste zu erfassen, unabhängig von der Restlaufzeit.',
    '528.000,00 USD ÷ 1,20 = 440.000,00 € · ÷ 1,10 = 480.000,00 € · Ansatz 480.000,00 € · Kursverlust 40.000,00 €.'
  ],
  merke:'Ein Kursverlust wird immer erfasst – bei kurzer wie bei langer Restlaufzeit. Nur beim Gewinn macht die Laufzeit einen Unterschied.',
  stolpersteine:['Wegen der langen Laufzeit gar nicht bewertet','Mit dem Kurs multipliziert statt geteilt','Den niedrigeren Wert angesetzt']
},
{
  id:'FW4', modul:'M18', typ:'kette', stufe:2, titel:'Darlehen in USD · Beispiel 2',
  tags:['Fremdwährung','Langfristig','Kursänderung'],
  text:'Ein Unternehmen hat ein Darlehen in US-Dollar aufgenommen. Das Geschäftsjahr endet am 31.12.'
    + '<table class="lager"><tr><th>Datum</th><th class="z">Vorgang</th><th class="z">Betrag</th><th class="z">Devisenkurs</th></tr><tr><td>01.04.</td><td class="z">Darlehensaufnahme</td><td class="z">528.000,00 USD</td><td class="z">1,00 € = 1,20 USD</td></tr><tr><td>31.12.</td><td class="z">Bilanzstichtag</td><td class="z leer">–</td><td class="z">1,00 € = 1,32 USD</td></tr><tr><td>später</td><td class="z">Rückzahlung in vier Jahren</td><td class="z leer">–</td><td class="z leer">–</td></tr></table>',
  bloecke:[
    {id:'stichtag', titel:'Wert zum Stichtagskurs ermitteln', typ:'rechnen',
     frage:'Welchen Euro-Betrag ergibt die Umrechnung zum Kurs vom 31.12.?',
     antwort:400000,
     tipp:'Fremdwährungsbetrag geteilt durch den Stichtagskurs.',
     rechenweg:'528.000,00 USD ÷ 1,32 = <b>400.000,00 €</b><br>Bei Aufnahme waren es 528.000,00 USD ÷ 1,20 = 440.000,00 €.'},
    {formel:'max(stichtag, 440000 * f)', id:'ansatz', titel:'Bilanzansatz bestimmen', typ:'rechnen',
     frage:'Mit welchem Betrag erscheint das Darlehen in der Bilanz?',
     antwort:440000,
     tipp:'Die Restlaufzeit beträgt vier Jahre. Darf ein noch nicht realisierter Kursgewinn dann ausgewiesen werden?',
     rechenweg:'Der Wert ist gesunken – das wäre ein Kursgewinn. Bei einer Restlaufzeit von mehr als einem Jahr bleibt er nach dem Realisationsprinzip unberücksichtigt. Angesetzt wird weiterhin der höhere Wert bei Aufnahme: <b>440.000,00 €</b>.'},
    {formel:'abs(ansatz - 440000 * f)', id:'ergebnis', titel:'Wirkung auf das Ergebnis bestimmen', typ:'rechnen',
     frage:'Wie wirkt sich die Bewertung auf das Ergebnis des Geschäftsjahres aus?', richtung:'keine',
     antwort:0,
     tipp:'Wenn sich der Bilanzansatz nicht ändert – was folgt daraus für die GuV?',
     rechenweg:'Der Bilanzansatz bleibt bei 440.000,00 €, also entsteht weder Aufwand noch Ertrag: <b>0,00 €</b>. Der Kursgewinn von 40.000,00 € wird erst sichtbar, wenn das Darlehen zurückgezahlt wird – und nur, falls der Kurs dann noch günstig steht.'}
  ],
  hinweise:[
    'Rechne beide Zeitpunkte um. In welche Richtung geht die Wertänderung diesmal – und wie lange läuft das Darlehen noch?',
    'Der Euro-Wert der Schuld ist gesunken, das wäre ein Gewinn. Bei mehr als einem Jahr Restlaufzeit darf ein solcher Gewinn aber nicht ausgewiesen werden.',
    '528.000,00 USD ÷ 1,32 = 400.000,00 €, aber Ansatz bleibt 440.000,00 € · Ergebniswirkung 0,00 €.'
  ],
  merke:'Der einzige Fall ohne Erfolgswirkung: Kursgewinn bei mehr als einem Jahr Restlaufzeit. Der Bilanzansatz bleibt unverändert.',
  stolpersteine:['Den Kursgewinn trotz langer Restlaufzeit erfasst','Die Regel für kurzfristige Verbindlichkeiten angewendet','Bei der Ergebniswirkung die Differenz statt null angegeben']
},
{
  id:'FW5', modul:'M18', typ:'kette', stufe:3, titel:'Zwei Verbindlichkeiten, ein Stichtagskurs',
  tags:['Fremdwährung','Kurzfristig','Langfristig','Ergebniswirkung'],
  text:'Zum 31.12. bestehen zwei Verbindlichkeiten in US-Dollar. Der Devisenkurs am Bilanzstichtag beträgt <b>1,00 € = 1,25 USD</b>.'
    + '<table class="lager"><tr><th>Verbindlichkeit</th><th class="z">Restlaufzeit</th><th class="z">Betrag</th><th class="z">Kurs bei Entstehung</th></tr><tr><td>Lieferverbindlichkeit</td><td class="z">knapp 3 Monate</td><td class="z">90.000,00 USD</td><td class="z">1,00 € = 1,20 USD</td></tr><tr><td>Darlehen</td><td class="z">3 Jahre</td><td class="z">660.000,00 USD</td><td class="z">1,00 € = 1,10 USD</td></tr></table>',
  bloecke:[
    {id:'darlehen', titel:'Darlehen bewerten', typ:'rechnen',
     frage:'Mit welchem Betrag erscheint das Darlehen in der Bilanz?',
     antwort:600000,
     tipp:'Rechne den Wert bei Aufnahme und den Wert zum Stichtagskurs aus und beachte die Restlaufzeit.',
     rechenweg:'Bei Aufnahme: 660.000,00 USD ÷ 1,10 = 600.000,00 €<br>Zum Stichtagskurs: 660.000,00 USD ÷ 1,25 = 528.000,00 €<br>Das wäre ein Kursgewinn von 72.000,00 €. Bei drei Jahren Restlaufzeit bleibt er unberücksichtigt – angesetzt werden weiterhin <b>600.000,00 €</b>.'},
    {id:'ergebnis', titel:'Gesamte Ergebniswirkung bestimmen', typ:'rechnen',
     frage:'Wie wirkt sich die Stichtagsbewertung beider Verbindlichkeiten insgesamt auf das Ergebnis aus?', richtung:'zu',
     antwort:3000,
     tipp:'Das Darlehen bleibt ohne Wirkung. Bewerte nun die Lieferverbindlichkeit – bei ihr entscheidet die kurze Restlaufzeit.',
     rechenweg:'Lieferverbindlichkeit bei Entstehung: 90.000,00 USD ÷ 1,20 = 75.000,00 €<br>Zum Stichtagskurs: 90.000,00 USD ÷ 1,25 = 72.000,00 €<br>Restlaufzeit unter einem Jahr → Stichtagsbewertung, also <b>3.000,00 € Kursgewinn</b> als Ertrag.<br>Darlehen: keine Erfolgswirkung.<br>Insgesamt erhöht sich das Ergebnis um <b>3.000,00 €</b>.'}
  ],
  hinweise:[
    'Beide Verbindlichkeiten werden zum selben Stichtagskurs umgerechnet – aber sie werden nicht gleich behandelt. Was unterscheidet sie?',
    'Die Restlaufzeit entscheidet. Bei beiden ist der Euro-Wert gesunken, es geht also jeweils um einen Kursgewinn. Nur einer davon darf ausgewiesen werden.',
    'Lieferverbindlichkeit: 75.000,00 € → 72.000,00 €, Kursgewinn 3.000,00 € wird erfasst. Darlehen: 600.000,00 € → 528.000,00 €, Kursgewinn bleibt unberücksichtigt. Ergebnis: +3.000,00 €.'
  ],
  merke:'Derselbe Kurs, dieselbe Richtung – und trotzdem zwei verschiedene Ergebnisse. Über die Erfolgswirkung entscheidet allein die Restlaufzeit.',
  stolpersteine:['Beide Kursgewinne erfasst','Beide Verbindlichkeiten unverändert gelassen','Die Kursgewinne addiert, ohne die Restlaufzeiten zu prüfen']
},

/* ---------- Modul · Außerplanmäßige Abschreibung und Wertaufholung ---------- */
{
  id:'WA1', modul:'M19', typ:'kette', stufe:2, titel:'Dauerhafte Wertminderung einer Maschine',
  tags:['Abschreibung','außerplanmäßige Abschreibung','Bewertung','Jahresabschluss'],
  text:'Am 2. Januar 2023 wurde eine Spezialmaschine für 100.000,00 € angeschafft (Nutzungsdauer 10 Jahre, lineare Abschreibung). Ende 2025 sinkt ihr Wert wegen einer neuen Technik der Konkurrenz voraussichtlich dauerhaft auf 35.000,00 €.',
  bloecke:[
    {id:'afa', titel:'Planmäßige Abschreibung zum 31.12.2025 buchen',
     muster:[{seite:'soll', konto:'6500', betrag:10000}, {seite:'haben', konto:'0710', betrag:10000}]},
    {id:'bw', titel:'Buchwert ermitteln', typ:'rechnen',
     frage:'Wie hoch ist der Buchwert am 31.12.2025 nach der planmäßigen Abschreibung?',
     antwort:70000,
     tipp:'Drei Jahre (2023 bis 2025) zu je 10.000,00 € sind abgeschrieben.',
     rechenweg:'100.000,00 € − 3 × 10.000,00 € = <b>70.000,00 €</b>'},
    {id:'apl', titel:'Außerplanmäßige Abschreibung ermitteln', typ:'rechnen',
     frage:'Um wie viel Euro muss außerplanmäßig abgeschrieben werden?',
     antwort:35000,
     tipp:'Bei dauerhafter Wertminderung wird auf den niedrigeren Wert abgeschrieben.',
     rechenweg:'70.000,00 € Buchwert − 35.000,00 € beizulegender Wert = <b>35.000,00 €</b>'},
    {id:'aplb', titel:'Außerplanmäßige Abschreibung buchen',
     muster:[{seite:'soll', konto:'6550', betrag:35000}, {seite:'haben', konto:'0710', betrag:35000}]},
    {id:'neu', titel:'Neue planmäßige Abschreibung', typ:'rechnen',
     frage:'Wie hoch ist die planmäßige Abschreibung ab 2026 (Restnutzungsdauer 7 Jahre)?',
     antwort:5000,
     tipp:'Der neue Buchwert wird auf die Restnutzungsdauer verteilt.',
     rechenweg:'35.000,00 € ÷ 7 Jahre = <b>5.000,00 €</b> pro Jahr'}
  ],
  hinweise:[
    'Zuerst wird die planmäßige Abschreibung des Jahres gebucht, erst dann wird der Buchwert mit dem niedrigeren Wert verglichen.',
    'Bei einer voraussichtlich dauerhaften Wertminderung muss im Anlagevermögen außerplanmäßig abgeschrieben werden (gemildertes Niederstwertprinzip: Pflicht bei dauerhafter Wertminderung; bei nur vorübergehender Wertminderung ist die Abschreibung bei Sachanlagen verboten).',
    'Für außerplanmäßige Abschreibungen gibt es ein eigenes Aufwandskonto.'
  ],
  merke:'Dauerhafte Wertminderung im Anlagevermögen: außerplanmäßig abschreiben (6550 an 0710) – Pflicht nach § 253 Abs. 3 Satz 5 HGB. Danach wird der neue Buchwert auf die Restnutzungsdauer verteilt.',
  stolpersteine:['Außerplanmäßige Abschreibung auf dem Konto 6500 gebucht','Vom Buchwert vor der planmäßigen Abschreibung ausgegangen','Neue AfA weiter von den Anschaffungskosten berechnet']
},
{
  id:'WA2', modul:'M19', typ:'kette', stufe:3, titel:'Wertaufholung: Zuschreibung bis zur Obergrenze',
  tags:['Wertaufholung','Zuschreibung','Bewertung','Jahresabschluss'],
  text:'Fortsetzung: Die Spezialmaschine (Anschaffung 2. Januar 2023 für 100.000,00 €, Nutzungsdauer 10 Jahre) wurde Ende 2025 außerplanmäßig auf 35.000,00 € abgeschrieben und seit 2026 mit 5.000,00 € pro Jahr abgeschrieben. Ende 2027 ist der Grund für die Wertminderung entfallen: Die Maschine ist jetzt 60.000,00 € wert. Die planmäßige Abschreibung 2027 ist bereits gebucht.',
  bloecke:[
    {id:'bw', titel:'Buchwert ermitteln', typ:'rechnen',
     frage:'Wie hoch ist der Buchwert am 31.12.2027?',
     antwort:25000,
     tipp:'Ausgangspunkt ist der Wert nach der außerplanmäßigen Abschreibung, dann zwei Jahre neue AfA.',
     rechenweg:'35.000,00 € − 2 × 5.000,00 € = <b>25.000,00 €</b>'},
    {id:'fak', titel:'Obergrenze ermitteln', typ:'rechnen',
     frage:'Wie hoch sind die fortgeführten Anschaffungskosten am 31.12.2027 (Obergrenze der Zuschreibung)?',
     antwort:50000,
     tipp:'Anschaffungskosten minus planmäßige Abschreibungen, als hätte es die Wertminderung nie gegeben (2023 bis 2027).',
     rechenweg:'100.000,00 € − 5 × 10.000,00 € = <b>50.000,00 €</b>'},
    {id:'zu', titel:'Zuschreibung ermitteln', typ:'rechnen',
     frage:'Um wie viel Euro muss zugeschrieben werden?',
     antwort:25000,
     tipp:'Zugeschrieben wird auf den höheren Wert – aber nie über die fortgeführten Anschaffungskosten hinaus.',
     rechenweg:'Der Wert von 60.000,00 € liegt über der Obergrenze → zuschreiben bis 50.000,00 €: 50.000,00 € − 25.000,00 € = <b>25.000,00 €</b>'},
    {id:'zub', titel:'Zuschreibung buchen',
     muster:[{seite:'soll', konto:'0710', betrag:25000}, {seite:'haben', konto:'5440', betrag:25000}]}
  ],
  hinweise:[
    'Nach § 253 Abs. 5 HGB muss zugeschrieben werden, wenn die Gründe für die außerplanmäßige Abschreibung nicht mehr bestehen.',
    'Obergrenze sind die fortgeführten Anschaffungskosten: Anschaffungskosten minus die planmäßigen Abschreibungen, die ohne die Wertminderung angefallen wären.',
    'Die Zuschreibung ist ein Ertrag.'
  ],
  merke:'Wertaufholungsgebot: Entfällt der Grund der Wertminderung, wird zugeschrieben (0710 an 5440) – höchstens bis zu den fortgeführten Anschaffungskosten (hier 50.000,00 €), nicht bis zum höheren Zeitwert. Ab 2028 beträgt die AfA 50.000,00 € ÷ 5 Jahre = 10.000,00 €.',
  stolpersteine:['Bis zum Zeitwert von 60.000,00 € zugeschrieben','Obergrenze mit den ursprünglichen Anschaffungskosten gleichgesetzt','Zuschreibung als Minderung des Abschreibungsaufwands gebucht']
},
/* ---------- Modul 12 · Degressive Abschreibung ---------- */
{
  id:'DA1', modul:'M12', typ:'kette', stufe:1, titel:'Maschine degressiv abschreiben',
  tags:['Abschreibung','Degressiv','Höchstsatz'],
  text:'Eine Maschine mit Anschaffungskosten von 80.000,00 € wird im Januar angeschafft und über 8 Jahre genutzt. Sie soll degressiv abgeschrieben werden. <b>Es gilt: das Zweifache des linearen Satzes, höchstens jedoch 20 %.</b> Ermittle zuerst den Abschreibungssatz und dann die Abschreibung der ersten drei Jahre.',
  bloecke:[
    {id:'satz', titel:'Abschreibungssatz ermitteln', typ:'rechnen', einheit:'%',
     frage:'Mit welchem Prozentsatz wird degressiv abgeschrieben?',
     antwort:20,
     tipp:'Rechne zuerst den linearen Satz aus, verdopple ihn – und vergleiche das Ergebnis mit dem Höchstsatz.',
     rechenweg:'Linearer Satz: 100 % ÷ 8 Jahre = 12,5 %. Das Zweifache wären 25 % – das liegt über dem Höchstsatz von 20 %. Es gilt deshalb der <b>Höchstsatz von 20 %</b>.'},
    {formel:'80000 * f * satz / 100', id:'jahr1', titel:'Abschreibung im 1. Jahr', typ:'rechnen',
     frage:'Wie hoch ist die Abschreibung im ersten Jahr?',
     antwort:16000,
     tipp:'Im ersten Jahr ist der Restbuchwert noch gleich den Anschaffungskosten.',
     rechenweg:'80.000,00 € × 20 % = <b>16.000,00 €</b> · Restbuchwert danach: 64.000,00 €'},
    {formel:'(80000 * f - jahr1) * satz / 100', id:'jahr2', titel:'Abschreibung im 2. Jahr', typ:'rechnen',
     frage:'Wie hoch ist die Abschreibung im zweiten Jahr?',
     antwort:12800,
     tipp:'Degressiv wird immer vom Restbuchwert abgeschrieben, nicht von den Anschaffungskosten.',
     rechenweg:'Restbuchwert 64.000,00 € × 20 % = <b>12.800,00 €</b> · Restbuchwert danach: 51.200,00 €'},
    {formel:'(80000 * f - jahr1 - jahr2) * satz / 100', id:'jahr3', titel:'Abschreibung im 3. Jahr', typ:'rechnen',
     frage:'Wie hoch ist die Abschreibung im dritten Jahr?',
     antwort:10240,
     tipp:'Ziehe die Abschreibung des zweiten Jahres vom bisherigen Restbuchwert ab, bevor du rechnest.',
     rechenweg:'Restbuchwert 51.200,00 € × 20 % = <b>10.240,00 €</b> · Restbuchwert danach: 40.960,00 €'}
  ],
  hinweise:[
    'Der degressive Satz ergibt sich aus dem linearen Satz – aber er ist nach oben begrenzt. Prüfe immer beides.',
    'Linearer Satz: 100 % ÷ 8 Jahre = 12,5 %. Verdoppelt wären das 25 %, doch der Höchstsatz liegt bei 20 % – der niedrigere Wert gilt.',
    'Ab dem zweiten Jahr wird nicht mehr von 80.000,00 € gerechnet, sondern vom jeweils verbliebenen Restbuchwert.'
  ],
  merke:'Der degressive Satz ist das Vielfache des linearen Satzes – aber nie mehr als der Höchstsatz. Es gilt immer der kleinere der beiden Werte.'
},
{
  id:'DA2', modul:'M12', typ:'kette', stufe:2, titel:'Geschäftsausstattung degressiv abschreiben',
  tags:['Abschreibung','Degressiv','Restbuchwert'],
  text:'Eine Geschäftsausstattung mit Anschaffungskosten von 64.000,00 € wird im Januar angeschafft und über 16 Jahre genutzt. Sie soll degressiv abgeschrieben werden. <b>Es gilt: das Zweifache des linearen Satzes, höchstens jedoch 20 %.</b> Ermittle zuerst den Abschreibungssatz und dann die Abschreibung der ersten drei Jahre.',
  bloecke:[
    {id:'satz', titel:'Abschreibungssatz ermitteln', typ:'rechnen', einheit:'%',
     frage:'Mit welchem Prozentsatz wird degressiv abgeschrieben?',
     antwort:12.5,
     tipp:'Diesmal ist die Nutzungsdauer deutlich länger. Liegt das Doppelte des linearen Satzes überhaupt über dem Höchstsatz?',
     rechenweg:'Linearer Satz: 100 % ÷ 16 Jahre = 6,25 %. Das Zweifache sind 12,5 % – das liegt <b>unter</b> dem Höchstsatz von 20 %. Es gilt deshalb der errechnete Satz von <b>12,5 %</b>.'},
    {formel:'64000 * f * satz / 100', id:'jahr1', titel:'Abschreibung im 1. Jahr', typ:'rechnen',
     frage:'Wie hoch ist die Abschreibung im ersten Jahr?',
     antwort:8000,
     tipp:'Im ersten Jahr ist der Restbuchwert noch gleich den Anschaffungskosten.',
     rechenweg:'64.000,00 € × 12,5 % = <b>8.000,00 €</b> · Restbuchwert danach: 56.000,00 €'},
    {formel:'(64000 * f - jahr1) * satz / 100', id:'jahr2', titel:'Abschreibung im 2. Jahr', typ:'rechnen',
     frage:'Wie hoch ist die Abschreibung im zweiten Jahr?',
     antwort:7000,
     tipp:'Vom Restbuchwert rechnen, nicht von den Anschaffungskosten.',
     rechenweg:'Restbuchwert 56.000,00 € × 12,5 % = <b>7.000,00 €</b> · Restbuchwert danach: 49.000,00 €'},
    {formel:'(64000 * f - jahr1 - jahr2) * satz / 100', id:'jahr3', titel:'Abschreibung im 3. Jahr', typ:'rechnen',
     frage:'Wie hoch ist die Abschreibung im dritten Jahr?',
     antwort:6125,
     tipp:'Auch krumme Beträge sind hier richtig – der Restbuchwert wird nicht gerundet.',
     rechenweg:'Restbuchwert 49.000,00 € × 12,5 % = <b>6.125,00 €</b> · Restbuchwert danach: 42.875,00 €'}
  ],
  hinweise:[
    'Die Regel ist dieselbe wie in der vorigen Aufgabe – aber führt sie auch zum selben Ergebnis?',
    'Linearer Satz: 100 % ÷ 16 Jahre = 6,25 %. Verdoppelt sind das 12,5 % und damit weniger als der Höchstsatz von 20 %. Der Höchstsatz greift hier also gar nicht.',
    'Bei langer Nutzungsdauer ist der errechnete Satz oft kleiner als der Höchstsatz – dann zählt der errechnete.'
  ],
  merke:'Der Höchstsatz ist eine Obergrenze, kein Automatismus. Bei langer Nutzungsdauer bleibt der errechnete Satz darunter und gilt unverändert.',
  stolpersteine:['Höchstsatz angewendet, obwohl der errechnete Satz niedriger war']
},
{
  id:'DA3', modul:'M12', typ:'kette', stufe:2, titel:'Lager- und Transporteinrichtung degressiv abschreiben',
  tags:['Abschreibung','Degressiv','Restbuchwert'],
  text:'Eine Lager- und Transporteinrichtung mit Anschaffungskosten von 48.000,00 € wird im Januar angeschafft und über 12 Jahre genutzt. Sie soll degressiv abgeschrieben werden. <b>Es gilt: das Dreifache des linearen Satzes, höchstens jedoch 30 %.</b> Ermittle zuerst den Abschreibungssatz und dann die Abschreibung der ersten drei Jahre.',
  bloecke:[
    {id:'satz', titel:'Abschreibungssatz ermitteln', typ:'rechnen', einheit:'%',
     frage:'Mit welchem Prozentsatz wird degressiv abgeschrieben?',
     antwort:25,
     tipp:'Achtung: Hier gilt eine andere Regel als in den vorigen Aufgaben – lies den Aufgabentext genau.',
     rechenweg:'Linearer Satz: 100 % ÷ 12 Jahre = 8,33 %. Das Dreifache sind genau 25 % – das liegt <b>unter</b> dem Höchstsatz von 30 %. Es gilt deshalb der errechnete Satz von <b>25 %</b>.'},
    {formel:'48000 * f * satz / 100', id:'jahr1', titel:'Abschreibung im 1. Jahr', typ:'rechnen',
     frage:'Wie hoch ist die Abschreibung im ersten Jahr?',
     antwort:12000,
     tipp:'Im ersten Jahr ist der Restbuchwert noch gleich den Anschaffungskosten.',
     rechenweg:'48.000,00 € × 25 % = <b>12.000,00 €</b> · Restbuchwert danach: 36.000,00 €'},
    {formel:'(48000 * f - jahr1) * satz / 100', id:'jahr2', titel:'Abschreibung im 2. Jahr', typ:'rechnen',
     frage:'Wie hoch ist die Abschreibung im zweiten Jahr?',
     antwort:9000,
     tipp:'Vom Restbuchwert rechnen, nicht von den Anschaffungskosten.',
     rechenweg:'Restbuchwert 36.000,00 € × 25 % = <b>9.000,00 €</b> · Restbuchwert danach: 27.000,00 €'},
    {formel:'(48000 * f - jahr1 - jahr2) * satz / 100', id:'jahr3', titel:'Abschreibung im 3. Jahr', typ:'rechnen',
     frage:'Wie hoch ist die Abschreibung im dritten Jahr?',
     antwort:6750,
     tipp:'Der Restbuchwert nach dem zweiten Jahr ist die neue Rechengrundlage.',
     rechenweg:'Restbuchwert 27.000,00 € × 25 % = <b>6.750,00 €</b> · Restbuchwert danach: 20.250,00 €'}
  ],
  hinweise:[
    'Diesmal gilt das Dreifache statt des Zweifachen, und der Höchstsatz liegt bei 30 %. Welcher Wert ist kleiner?',
    'Linearer Satz: 100 % ÷ 12 Jahre = 8,33 %. Verdreifacht ergibt das genau 25 % – unter dem Höchstsatz von 30 %.',
    'Auch bei der Dreifach-Regel gilt: erst rechnen, dann mit dem Höchstsatz vergleichen, den kleineren Wert nehmen.'
  ],
  merke:'Welches Vielfache und welcher Höchstsatz gelten, hat der Gesetzgeber mehrfach geändert. Die Regel steht deshalb immer in der Aufgabe – das Vorgehen bleibt aber gleich.'
},
{
  id:'DA4', modul:'M12', typ:'kette', stufe:3, titel:'Firmenwagen degressiv abschreiben',
  tags:['Abschreibung','Degressiv','Höchstsatz','Fuhrpark'],
  text:'Ein Firmenwagen mit Anschaffungskosten von 50.000,00 € wird im Januar angeschafft und über 5 Jahre genutzt. Er soll degressiv abgeschrieben werden. <b>Es gilt: das Dreifache des linearen Satzes, höchstens jedoch 30 %.</b> Ermittle zuerst den Abschreibungssatz und dann die Abschreibung der ersten drei Jahre.',
  bloecke:[
    {id:'satz', titel:'Abschreibungssatz ermitteln', typ:'rechnen', einheit:'%',
     frage:'Mit welchem Prozentsatz wird degressiv abgeschrieben?',
     antwort:30,
     tipp:'Bei kurzer Nutzungsdauer wird der errechnete Satz schnell sehr hoch. Was sagt der Höchstsatz dazu?',
     rechenweg:'Linearer Satz: 100 % ÷ 5 Jahre = 20 %. Das Dreifache wären 60 % – weit über dem Höchstsatz von 30 %. Es gilt deshalb der <b>Höchstsatz von 30 %</b>.'},
    {formel:'50000 * f * satz / 100', id:'jahr1', titel:'Abschreibung im 1. Jahr', typ:'rechnen',
     frage:'Wie hoch ist die Abschreibung im ersten Jahr?',
     antwort:15000,
     tipp:'Im ersten Jahr ist der Restbuchwert noch gleich den Anschaffungskosten.',
     rechenweg:'50.000,00 € × 30 % = <b>15.000,00 €</b> · Restbuchwert danach: 35.000,00 €'},
    {formel:'(50000 * f - jahr1) * satz / 100', id:'jahr2', titel:'Abschreibung im 2. Jahr', typ:'rechnen',
     frage:'Wie hoch ist die Abschreibung im zweiten Jahr?',
     antwort:10500,
     tipp:'Vom Restbuchwert rechnen, nicht von den Anschaffungskosten.',
     rechenweg:'Restbuchwert 35.000,00 € × 30 % = <b>10.500,00 €</b> · Restbuchwert danach: 24.500,00 €'},
    {formel:'(50000 * f - jahr1 - jahr2) * satz / 100', id:'jahr3', titel:'Abschreibung im 3. Jahr', typ:'rechnen',
     frage:'Wie hoch ist die Abschreibung im dritten Jahr?',
     antwort:7350,
     tipp:'Der Restbuchwert nach dem zweiten Jahr ist die neue Rechengrundlage.',
     rechenweg:'Restbuchwert 24.500,00 € × 30 % = <b>7.350,00 €</b> · Restbuchwert danach: 17.150,00 €'}
  ],
  hinweise:[
    'Kurze Nutzungsdauer, hohes Vielfaches – hier greift die Obergrenze deutlich.',
    'Linearer Satz: 100 % ÷ 5 Jahre = 20 %. Verdreifacht wären das 60 %, der Höchstsatz liegt aber bei 30 %.',
    'Beachte außerdem, dass die Abschreibungsbeträge von Jahr zu Jahr kleiner werden – das ist der Kern des degressiven Verfahrens.'
  ],
  merke:'Je kürzer die Nutzungsdauer, desto eher greift der Höchstsatz. Bei degressiver Abschreibung sinkt der Betrag jedes Jahr, weil die Rechengrundlage schrumpft.'
},

/* ---------- Modul 13 · Geringwertige Wirtschaftsgüter ----------
   Wertgrenzen (netto): bis 250 € sofort Aufwand · über 250 € bis 800 € GWG (0890, Sofortabschreibung 6540)
   · über 250 € bis 1.000 € wahlweise Sammelposten (0891, jährlich 20 % über 6540) · darüber normale AfA.
   Gesetzliche Grenzen stehen im Text ohne Cent („800 €“), damit sie bei neuen Zahlen nicht mitwandern.
   gwg: Nettobeträge, die beim Variieren in ihrem Wertbereich bleiben müssen. */
{
  id:'GT1', modul:'M12G', typ:'berechnung', stufe:0, titel:'GWG: bis zu welchem Betrag?',
  tags:['GWG','Theorie','Wertgrenze'],
  text:'Ein Unternehmen schafft einen beweglichen, abnutzbaren und selbständig nutzbaren Gegenstand des Anlagevermögens an.',
  frage:'Bis zu welchen Anschaffungskosten darf er als geringwertiges Wirtschaftsgut im Anschaffungsjahr sofort voll abgeschrieben werden?',
  optionen:[
    {text:'800 € netto', richtig:true,
     weg:'Die Grenze für die Sofortabschreibung liegt bei 800 € – gemessen an den Anschaffungskosten, also netto ohne Vorsteuer.'},
    {text:'800 € brutto',
     fehler:'Die Vorsteuer gehört nie zu den Anschaffungskosten. Alle Wertgrenzen gelten deshalb netto.'},
    {text:'1.000 € netto',
     fehler:'1.000 € ist die Obergrenze für den Sammelposten. Sofort voll abschreiben darf man nur bis 800 €.'},
    {text:'250 € netto',
     fehler:'Bis 250 € wird der Kauf direkt als Aufwand gebucht. Die GWG-Sofortabschreibung reicht weiter.'}
  ],
  hinweise:[
    'Es gibt mehrere Wertgrenzen: für den sofortigen Aufwand, für GWG und für den Sammelposten. Gefragt ist die mittlere.',
    'Wertgrenzen beziehen sich immer auf die Anschaffungskosten – und gehört die Vorsteuer dazu?',
    'Die Grenze liegt bei 800 € – netto.'
  ],
  merke:'Bis 250 € netto: sofort Aufwand. Über 250 € bis 800 € netto: GWG, im Anschaffungsjahr voll abschreiben. Über 250 € bis 1.000 € netto: wahlweise Sammelposten.'
},
{
  id:'GT2', modul:'M12G', typ:'berechnung', stufe:0, titel:'Was gilt beim Sammelposten?',
  tags:['GWG','Sammelposten','Theorie'],
  text:'Ein Unternehmen entscheidet sich, für das laufende Geschäftsjahr einen Sammelposten zu bilden.',
  frage:'Was gilt dann?',
  optionen:[
    {text:'Alle Wirtschaftsgüter des Jahres über 250 € bis 1.000 € netto kommen in den Sammelposten. Er wird fünf Jahre lang mit jährlich 20 % abgeschrieben – unabhängig vom Anschaffungsmonat.', richtig:true,
     weg:'Das Wahlrecht gilt einheitlich für das ganze Wirtschaftsjahr: Wer einen Sammelposten bildet, muss alle Güter über 250 € bis 1.000 € hineinnehmen – auch die, die man sonst als GWG sofort abschreiben könnte.'},
    {text:'Nur Wirtschaftsgüter über 800 € kommen in den Sammelposten; die übrigen GWG dürfen weiterhin sofort abgeschrieben werden.',
     fehler:'Das Wahlrecht lässt sich nicht aufteilen. Mit dem Sammelposten entfällt für dieses Jahr die Sofortabschreibung für alle Güter über 250 €.'},
    {text:'Der Sammelposten wird zeitanteilig ab dem Anschaffungsmonat abgeschrieben.',
     fehler:'Gerade das nicht: Im Anschaffungsjahr werden immer volle 20 % abgeschrieben, egal ob im Januar oder im Dezember gekauft wurde.'},
    {text:'Scheidet ein Gut vorzeitig aus, wird sein Restwert aus dem Sammelposten sofort abgeschrieben.',
     fehler:'Der Sammelposten bleibt unverändert und wird weiter mit 20 % jährlich abgeschrieben – auch wenn ein Gut verkauft wird oder kaputtgeht.'}
  ],
  hinweise:[
    'Ein Sammelposten ist ein Topf für ein ganzes Jahr – nicht für ein einzelnes Wirtschaftsgut.',
    'Prüfe bei jeder Antwort: Hängt die Abschreibung vom Anschaffungsmonat oder vom einzelnen Gut ab?',
    'Der Sammelposten wird pauschal mit 20 % je Jahr abgeschrieben, und das Wahlrecht gilt für alle Güter über 250 € bis 1.000 € eines Jahres gemeinsam.'
  ],
  merke:'Sammelposten: ein Topf je Jahr, alle Güter über 250 € bis 1.000 € netto, fünf Jahre lang je 20 % – ohne Zeitanteil, ohne Rücksicht auf Abgänge.'
},
{
  id:'GT3', modul:'M12G', typ:'berechnung', stufe:0, titel:'Kleiner Kauf fürs Büro',
  tags:['GWG','Theorie','Aufwand'],
  text:'Wir kaufen einen Tischlocher für die Buchhaltung für 35 € netto.',
  frage:'Wie wird der Kauf erfasst?',
  optionen:[
    {text:'Direkt als Aufwand, z. B. auf 6800 Büromaterial.', richtig:true,
     weg:'Bis 250 € netto wird der Kauf sofort als Aufwand gebucht – ein Anlagenkonto ist nicht nötig.'},
    {text:'Auf 0890 GWG und zum 31.12. voll abschreiben.',
     fehler:'Das Konto GWG braucht man erst über 250 €. Darunter geht der Betrag direkt in den Aufwand.'},
    {text:'Auf 0870 Geschäftsausstattung und linear über die Nutzungsdauer abschreiben.',
     fehler:'Für einen so kleinen Betrag ist eine Abschreibung über Jahre nicht vorgesehen.'},
    {text:'In den Sammelposten 0891.',
     fehler:'In den Sammelposten kommen nur Wirtschaftsgüter über 250 € bis 1.000 €.'}
  ],
  hinweise:[
    'Vergleiche den Betrag mit der niedrigsten Wertgrenze.',
    'Unter dieser Grenze braucht man weder ein Anlagenkonto noch eine Abschreibung.',
    'Bis 250 € netto wird direkt als Aufwand gebucht.'
  ],
  merke:'Bis 250 € netto: sofort Aufwand – kein Anlagenkonto, keine Abschreibung.'
},
{
  id:'GT4', modul:'M12G', typ:'berechnung', stufe:0, titel:'Welche Möglichkeiten gibt es?',
  tags:['GWG','Sammelposten','Theorie'],
  text:'Ein Beamer kostet 880 € netto. Er ist selbständig nutzbar und soll mehrere Jahre genutzt werden.',
  frage:'Welche Möglichkeiten hat das Unternehmen bei der Abschreibung?',
  optionen:[
    {text:'Sammelposten (jährlich 20 %) oder lineare Abschreibung über die Nutzungsdauer.', richtig:true,
     weg:'880 € liegen über 800 €, also keine Sofortabschreibung als GWG. Bis 1.000 € ist aber der Sammelposten möglich – oder die normale Abschreibung.'},
    {text:'Sofortabschreibung als GWG oder Sammelposten.',
     fehler:'Für die Sofortabschreibung ist der Beamer zu teuer – die Grenze liegt bei 800 €.'},
    {text:'Nur die lineare Abschreibung über die Nutzungsdauer.',
     fehler:'Bis 1.000 € kommt auch der Sammelposten in Frage.'},
    {text:'Direkt als Aufwand buchen.',
     fehler:'Direkt als Aufwand geht nur bis 250 €.'}
  ],
  hinweise:[
    'Ordne den Betrag in die Wertgrenzen ein: 250 €, 800 €, 1.000 €.',
    'Über 800 € ist die Sofortabschreibung ausgeschlossen. Was bleibt bis 1.000 €?',
    'Bis 1.000 € gibt es den Sammelposten – oder die normale Abschreibung.'
  ],
  merke:'Über 800 € bis 1.000 € netto: Sammelposten oder normale Abschreibung – eine Sofortabschreibung gibt es nicht.'
},
{
  id:'GW1', modul:'M12G', typ:'kette', stufe:1, titel:'Bürodrehstuhl kaufen und abschreiben',
  tags:['GWG','Sofortabschreibung'], gwg:[640],
  text:'Am 12. Mai kaufen wir einen Bürodrehstuhl auf Ziel für 640,00 € netto zzgl. 19 % Umsatzsteuer. Der Stuhl ist selbständig nutzbar und soll 13 Jahre genutzt werden. Im Anschaffungsjahr soll ein möglichst hoher Aufwand entstehen; einen Sammelposten bildet das Unternehmen in diesem Jahr nicht.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'0890', betrag:640}, {seite:'soll', konto:'2600', betrag:121.60}, {seite:'haben', konto:'4400', betrag:761.60}]},
    {id:'afa', titel:'Abschreibung im Anschaffungsjahr', typ:'rechnen',
     frage:'Wie hoch ist die Abschreibung im Anschaffungsjahr?',
     antwort:640,
     tipp:'Prüfe zuerst, in welche Wertgrenze der Stuhl fällt. Spielt dann der Anschaffungsmonat noch eine Rolle?',
     rechenweg:'640,00 € liegen über 250 € und nicht über 800 € – der Stuhl ist ein GWG und wird im Anschaffungsjahr <b>voll mit 640,00 €</b> abgeschrieben, egal in welchem Monat er gekauft wurde.'},
    {id:'buchung', titel:'Abschreibung zum 31.12. buchen',
     muster:[{seite:'soll', konto:'6540', betrag:640, formel:'afa'}, {seite:'haben', konto:'0890', betrag:640, formel:'afa'}]}
  ],
  hinweise:[
    'Ein Bürostuhl wäre eigentlich Geschäftsausstattung. Bei diesem Preis gibt es aber ein eigenes Konto.',
    'Liegen die Anschaffungskosten über 250 € und höchstens bei 800 € netto, ist es ein GWG.',
    'GWG werden auf 0890 erfasst und im Anschaffungsjahr voll abgeschrieben – über 6540, nicht zeitanteilig.'
  ],
  merke:'Ein GWG wird im Anschaffungsjahr voll abgeschrieben. Der Anschaffungsmonat und die Nutzungsdauer spielen dafür keine Rolle.',
  stolpersteine:['Stuhl auf 0870 Geschäftsausstattung gebucht','Nur zeitanteilig ab Mai abgeschrieben','Abschreibung über 6500 statt 6540 gebucht']
},
{
  id:'GW2', modul:'M12G', typ:'kette', stufe:1, titel:'Zwei Büroartikel auf einer Rechnung',
  tags:['GWG','Aufwand','Wertgrenze'], gwg:[180, 520],
  text:'Am 3. März erhalten wir eine Rechnung über ein Laminiergerät für 180,00 € netto und einen Rollcontainer für 520,00 € netto, jeweils zzgl. 19 % Umsatzsteuer, zahlbar auf Ziel. Beide Gegenstände sind selbständig nutzbar. GWG schreibt das Unternehmen sofort ab; einen Sammelposten bildet es in diesem Jahr nicht.',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'6800', betrag:180}, {seite:'soll', konto:'0890', betrag:520},
             {seite:'soll', konto:'2600', betrag:133}, {seite:'haben', konto:'4400', betrag:833}]},
    {id:'afa', titel:'Abschreibung zum 31.12. buchen',
     muster:[{seite:'soll', konto:'6540', betrag:520}, {seite:'haben', konto:'0890', betrag:520}]}
  ],
  hinweise:[
    'Prüfe jeden Gegenstand einzeln gegen die Wertgrenzen – nicht die Summe der Rechnung.',
    'Einer der beiden liegt unter 250 € und wird nicht als Anlagegut erfasst.',
    'Das Laminiergerät geht direkt in den Aufwand (6800), der Rollcontainer ist ein GWG (0890). Abgeschrieben wird am Jahresende nur, was auf 0890 steht.'
  ],
  merke:'Die Wertgrenzen gelten für jedes Wirtschaftsgut einzeln. Eine Rechnung kann deshalb Aufwand und Anlagevermögen zugleich enthalten.',
  stolpersteine:['Beide Gegenstände auf 0890 gebucht','Die Rechnungssumme mit der 800-€-Grenze verglichen','Auch das Laminiergerät zum 31.12. abgeschrieben']
},
{
  id:'GW3', modul:'M12G', typ:'kette', stufe:2, titel:'Kaffeevollautomat für den Pausenraum',
  tags:['GWG','Sammelposten','Anschaffungskosten','Entscheidung'], gwg:[820],
  text:'Am 7. Oktober kaufen wir für den Pausenraum einen Kaffeevollautomaten für 760,00 € netto. Für Lieferung und Aufstellung berechnet der Händler zusätzlich 60,00 € netto. Beides steht auf einer Rechnung zzgl. 19 % Umsatzsteuer, zahlbar auf Ziel. Die Nutzungsdauer beträgt 5 Jahre. Weitere Anschaffungen über 250 € bis 1.000 € gibt es in diesem Jahr nicht. <b>Das Unternehmen wählt die Variante mit dem höchsten Aufwand im Anschaffungsjahr.</b>',
  bloecke:[
    {id:'ak', titel:'Anschaffungskosten ermitteln', typ:'rechnen',
     frage:'Wie hoch sind die Anschaffungskosten des Kaffeevollautomaten?',
     antwort:820,
     tipp:'Was gehört alles dazu, damit der Automat betriebsbereit im Pausenraum steht?',
     rechenweg:'760,00 € Kaufpreis + 60,00 € Lieferung und Aufstellung = <b>820,00 €</b>. Damit liegt der Automat über 800 € – keine Sofortabschreibung als GWG.'},
    {id:'linear', titel:'Variante 1: lineare Abschreibung', typ:'rechnen',
     frage:'Wie hoch wäre die lineare Abschreibung im Anschaffungsjahr?',
     antwort:41, formel:'ak / 5 * 3 / 12',
     tipp:'Jahres-AfA berechnen und auf die Monate ab Oktober herunterrechnen.',
     rechenweg:'820,00 € ÷ 5 Jahre = 164,00 € je Jahr · Oktober bis Dezember = 3 Monate · 164,00 € × 3/12 = <b>41,00 €</b>'},
    {id:'sammel', titel:'Variante 2: Sammelposten (Poolabschreibung)', typ:'rechnen',
     frage:'Wie hoch wäre die Abschreibung im Anschaffungsjahr, wenn der Kaffeevollautomat in den Sammelposten (Pool) kommt?',
     antwort:164, formel:'ak * 0.2',
     tipp:'Der Sammelposten wird pauschal abgeschrieben – zählen die Monate hier?',
     rechenweg:'820,00 € × 20 % = <b>164,00 €</b> – volle 20 %, auch bei Kauf im Oktober. Das ist mehr als die lineare AfA, also wählt das Unternehmen den Sammelposten.'},
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'0891', betrag:820}, {seite:'soll', konto:'2600', betrag:155.80}, {seite:'haben', konto:'4400', betrag:975.80}]},
    {id:'buchung', titel:'Abschreibung zum 31.12. buchen',
     muster:[{seite:'soll', konto:'6540', betrag:164, formel:'sammel'}, {seite:'haben', konto:'0891', betrag:164, formel:'sammel'}]}
  ],
  hinweise:[
    'Lieferung und Aufstellung sind Anschaffungsnebenkosten. Was bedeutet das für die 800-€-Grenze?',
    'Mit 820 € ist der Automat kein GWG mehr. Bis 1.000 € bleiben zwei Möglichkeiten – rechne beide aus.',
    'Die lineare AfA zählt nur die Monate ab Oktober, der Sammelposten immer volle 20 %. Gebucht wird die Variante mit dem höheren Aufwand: Sammelposten 0891, Abschreibung über 6540.'
  ],
  merke:'Nebenkosten gehören zu den Anschaffungskosten – sie können ein Wirtschaftsgut über eine Wertgrenze heben. Bei späten Käufen im Jahr bringt der Sammelposten meist mehr Aufwand als die zeitanteilige lineare AfA.',
  stolpersteine:['Nur den Kaufpreis von 760,00 € betrachtet und als GWG sofort abgeschrieben','Sammelposten zeitanteilig abgeschrieben','Auf 0870 gebucht, obwohl der Sammelposten mehr Aufwand bringt']
},
{
  id:'GW4', modul:'M12G', typ:'kette', stufe:2, titel:'Laptop für die Buchhaltung',
  tags:['Sammelposten','Abschreibung','Entscheidung'], gwg:[900],
  text:'Am 8. Januar kaufen wir für die Buchhaltung einen Laptop für 900,00 € netto zzgl. 19 % Umsatzsteuer auf Ziel. Die Nutzungsdauer beträgt 3 Jahre. Weitere Anschaffungen über 250 € bis 1.000 € gibt es in diesem Jahr nicht. <b>Das Unternehmen wählt die Variante mit dem höchsten Aufwand im Anschaffungsjahr.</b>',
  bloecke:[
    {id:'linear', titel:'Variante 1: lineare Abschreibung', typ:'rechnen',
     frage:'Wie hoch wäre die lineare Abschreibung im Anschaffungsjahr?',
     antwort:300, formel:'900 * f / 3',
     tipp:'Der Laptop wurde im Januar gekauft. Wie viele Monate zählen?',
     rechenweg:'900,00 € ÷ 3 Jahre = <b>300,00 €</b> – bei Kauf im Januar das volle Jahr.'},
    {id:'sammel', titel:'Variante 2: Sammelposten (Poolabschreibung)', typ:'rechnen',
     frage:'Wie hoch wäre die Abschreibung im Anschaffungsjahr, wenn der Laptop in den Sammelposten (Pool) kommt?',
     antwort:180, formel:'900 * f * 0.2',
     tipp:'Der Sammelposten wird immer über fünf Jahre abgeschrieben – egal wie lange der Laptop tatsächlich genutzt wird.',
     rechenweg:'900,00 € × 20 % = <b>180,00 €</b>. Das ist weniger als die lineare AfA – hier lohnt sich der Sammelposten nicht.'},
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'0870', betrag:900}, {seite:'soll', konto:'2600', betrag:171}, {seite:'haben', konto:'4400', betrag:1071}]},
    {id:'buchung', titel:'Abschreibung zum 31.12. buchen',
     muster:[{seite:'soll', konto:'6500', betrag:300, formel:'linear'}, {seite:'haben', konto:'0870', betrag:300, formel:'linear'}]}
  ],
  hinweise:[
    '900 € liegen über 800 € – eine Sofortabschreibung scheidet aus. Rechne beide übrigen Varianten aus.',
    'Der Sammelposten läuft immer fünf Jahre, die tatsächliche Nutzungsdauer ist hier deutlich kürzer.',
    'Bei kurzer Nutzungsdauer und Kauf im Januar ist die lineare AfA höher. Dann wird der Laptop ganz normal als Geschäftsausstattung (0870) erfasst und über 6500 abgeschrieben.'
  ],
  merke:'Der Sammelposten ist nicht automatisch günstiger. Bei kurzer Nutzungsdauer und Kauf am Jahresanfang bringt die normale Abschreibung mehr Aufwand.',
  stolpersteine:['Laptop ohne Vergleich in den Sammelposten gebucht','Laptop als GWG sofort abgeschrieben','Sammelposten mit der Nutzungsdauer von 3 Jahren abgeschrieben']
},
{
  id:'GW5', modul:'M12G', typ:'kette', stufe:3, titel:'Schreibtisch und Beamer im selben Jahr',
  tags:['GWG','Sammelposten','Entscheidung'], gwg:[700, 900],
  text:'Im Geschäftsjahr schaffen wir zwei selbständig nutzbare Wirtschaftsgüter an (Beträge netto): am 4. März einen Schreibtisch für 700,00 € (Nutzungsdauer 13 Jahre) und am 15. November einen Beamer für 900,00 € (Nutzungsdauer 6 Jahre). Weitere Anschaffungen über 250 € bis 1.000 € gibt es in diesem Jahr nicht. <b>Das Unternehmen wählt die Variante mit dem höchsten Aufwand im Anschaffungsjahr.</b>',
  bloecke:[
    {id:'ohne', titel:'Variante 1: ohne Sammelposten', typ:'rechnen',
     frage:'Wie hoch ist der Aufwand im Anschaffungsjahr insgesamt, wenn kein Sammelposten gebildet wird?',
     antwort:725, formel:'700 * f + round(900 * f / 6 * 2 / 12)',
     tipp:'Ohne Sammelposten wird jedes Gut für sich behandelt: Welches ist ein GWG, welches wird normal abgeschrieben?',
     rechenweg:'Schreibtisch: GWG, voll abgeschrieben = 700,00 € · Beamer: 900,00 € ÷ 6 Jahre × 2/12 = 25,00 € · zusammen <b>725,00 €</b>'},
    {id:'mit', titel:'Variante 2: mit Sammelposten', typ:'rechnen',
     frage:'Wie hoch ist der Aufwand im Anschaffungsjahr, wenn ein Sammelposten gebildet wird?',
     antwort:320, formel:'(700 + 900) * f * 0.2',
     tipp:'Wenn das Unternehmen einen Sammelposten bildet – welche Güter müssen dann hinein?',
     rechenweg:'Beide Güter müssen in den Sammelposten: (700,00 € + 900,00 €) × 20 % = <b>320,00 €</b>. Variante 1 bringt mehr Aufwand.'},
    {id:'buchung', titel:'Abschreibungen zum 31.12. buchen',
     muster:[{seite:'soll', konto:'6540', betrag:700}, {seite:'soll', konto:'6500', betrag:25, formel:'ohne - 700 * f'},
             {seite:'haben', konto:'0890', betrag:700}, {seite:'haben', konto:'0870', betrag:25, formel:'ohne - 700 * f'}]}
  ],
  hinweise:[
    'Der Sammelposten gilt für ein ganzes Jahr – entweder kommen beide Güter hinein oder keines.',
    'Ohne Sammelposten: Der Schreibtisch ist ein GWG, der Beamer wird zeitanteilig ab November linear abgeschrieben.',
    'Mit Sammelposten müsste auch der Schreibtisch hinein und brächte nur 20 % statt 100 %. Darum ist hier Variante 1 besser: Schreibtisch über 6540, Beamer über 6500.'
  ],
  merke:'Das Wahlrecht für den Sammelposten gilt einheitlich für alle Güter über 250 € bis 1.000 € eines Jahres. Wer ihn bildet, verliert für dieses Jahr die Sofortabschreibung der GWG.',
  stolpersteine:['Schreibtisch sofort abgeschrieben und Beamer in den Sammelposten genommen','Beamer für das ganze Jahr abgeschrieben','Nur ein Gut in den Sammelposten gerechnet']
},
{
  id:'GW6', modul:'M12G', typ:'kette', stufe:3, titel:'Drei Anschaffungen – lohnt sich der Sammelposten?',
  tags:['GWG','Sammelposten','Entscheidung'], gwg:[300, 900, 900],
  text:'Im Geschäftsjahr schaffen wir drei selbständig nutzbare Wirtschaftsgüter an (Beträge netto): am 6. Februar einen Aktenschrank für 300,00 € (Nutzungsdauer 13 Jahre), am 14. Oktober ein Tablet für 900,00 € (Nutzungsdauer 3 Jahre) und am 9. Dezember einen Konferenztisch für 900,00 € (Nutzungsdauer 13 Jahre). Weitere Anschaffungen über 250 € bis 1.000 € gibt es in diesem Jahr nicht. <b>Das Unternehmen wählt die Variante mit dem höchsten Aufwand im Anschaffungsjahr.</b>',
  bloecke:[
    {id:'ohne', titel:'Variante 1: ohne Sammelposten', typ:'rechnen',
     frage:'Wie hoch ist der Aufwand im Anschaffungsjahr insgesamt, wenn kein Sammelposten gebildet wird?',
     antwort:380.77, formel:'300 * f + round(900 * f / 3 * 3 / 12) + round(900 * f / 13 / 12)',
     tipp:'Der Aktenschrank ist ein GWG. Tablet und Konferenztisch liegen über 800 € – sie werden zeitanteilig abgeschrieben.',
     rechenweg:'Aktenschrank: GWG = 300,00 € · Tablet: 900,00 € ÷ 3 × 3/12 = 75,00 € · Konferenztisch: 900,00 € ÷ 13 × 1/12 = 5,77 € · zusammen <b>380,77 €</b>'},
    {id:'mit', titel:'Variante 2: mit Sammelposten', typ:'rechnen',
     frage:'Wie hoch ist der Aufwand im Anschaffungsjahr, wenn ein Sammelposten gebildet wird?',
     antwort:420, formel:'(300 + 900 + 900) * f * 0.2',
     tipp:'Alle drei Güter müssen in den Sammelposten.',
     rechenweg:'(300,00 € + 900,00 € + 900,00 €) × 20 % = <b>420,00 €</b>. Das ist mehr als Variante 1 – das Unternehmen bildet den Sammelposten.'},
    {id:'buchung', titel:'Abschreibung zum 31.12. buchen',
     muster:[{seite:'soll', konto:'6540', betrag:420, formel:'mit'}, {seite:'haben', konto:'0891', betrag:420, formel:'mit'}]}
  ],
  hinweise:[
    'Rechne beide Varianten vollständig aus, bevor du entscheidest.',
    'Zwei der Güter wurden spät im Jahr gekauft. Was bedeutet das für die lineare AfA – und was für den Sammelposten?',
    'Mit Sammelposten kommen alle drei Güter hinein, abgeschrieben werden volle 20 %. Das bringt hier mehr als die Sofortabschreibung des Schranks plus der kleinen zeitanteiligen AfA – gebucht wird also über 6540 an 0891.'
  ],
  merke:'Je später im Jahr teurere Güter (über 800 €) gekauft werden, desto eher lohnt sich der Sammelposten – auch wenn dafür ein GWG nicht mehr sofort abgeschrieben werden kann.',
  stolpersteine:['Aktenschrank zusätzlich sofort abgeschrieben','Sammelposten nur aus Tablet und Konferenztisch gebildet','Konferenztisch für das ganze Jahr abgeschrieben']
},

/* ---------- Modul · Verkauf von Anlagevermögen ----------
   Schulkontenrahmen Industrie BW: Buchgewinn über 5461 Erlöse / 5460 Erträge aus dem Abgang,
   Buchverlust über 6961 Erlöse / 6960 Verluste aus dem Abgang. Vier Buchungen:
   1. Verkauf (2800 bzw. 2400 an 5461/6961 und 4800)  2. Restbuchwert ausbuchen (5460/6960 an Anlagekonto)
   3. Erlöskonto abschließen (5461 an 5460 bzw. 6961 an 6960)  4. Ergebnis über die GuV (5460 an 8020 bzw. 8020 an 6960)
   AfA immer linear, bis zum Verkauf bereits gebucht. Den Verkaufsmonat darf man noch abschreiben, muss es aber nicht:
   beide Restbuchwerte sind richtig (Rechenblock: alternativen, Buchungen: muster2). Gewinn- und Verlustfälle wechseln sich ab;
   „inkl. USt.“ täuscht bei Verlustfällen einen Gewinn vor (brutto über, netto unter dem Restbuchwert). */
{
  id:'VT1', modul:'M12V', typ:'berechnung', stufe:0, titel:'Buchgewinn oder Buchverlust?',
  tags:['Anlagenverkauf','Theorie','Restbuchwert'],
  text:'Ein Lieferwagen mit einem Restbuchwert von 10.000,00 € wird für 11.305,00 € inkl. 19 % Umsatzsteuer verkauft.',
  frage:'Was ergibt sich aus dem Verkauf?',
  optionen:[
    {text:'Ein Buchverlust von 500,00 €', richtig:true,
     weg:'Maßgeblich ist der Nettoerlös: 11.305,00 € ÷ 1,19 = 9.500,00 €. Er liegt 500,00 € unter dem Restbuchwert – ein Buchverlust.'},
    {text:'Ein Buchgewinn von 1.305,00 €',
     fehler:'Die Umsatzsteuer gehört nicht uns, sondern dem Finanzamt. Vergleiche den Nettoerlös mit dem Restbuchwert.'},
    {text:'Ein Buchgewinn von 500,00 €',
     fehler:'Der Betrag stimmt, die Richtung nicht: Netto bekommen wir weniger, als das Fahrzeug in den Büchern noch wert ist.'},
    {text:'Weder Gewinn noch Verlust, weil der Verkaufspreis über dem Restbuchwert liegt',
     fehler:'Der Bruttopreis liegt darüber, der Nettoerlös aber darunter – und nur der zählt.'}
  ],
  hinweise:[
    'Verglichen wird immer der Nettoerlös mit dem Restbuchwert.',
    'Rechne den Bruttopreis in den Nettopreis um: Bruttopreis ÷ 1,19.',
    '11.305,00 € ÷ 1,19 = 9.500,00 € – das sind 500,00 € weniger als der Restbuchwert.'
  ],
  merke:'Ob Buchgewinn oder Buchverlust entscheidet der Vergleich von Nettoerlös und Restbuchwert – die Umsatzsteuer spielt dabei keine Rolle.'
},
{
  id:'VT2', modul:'M12V', typ:'berechnung', stufe:0, titel:'Welches Erlöskonto?',
  tags:['Anlagenverkauf','Theorie','Konten'],
  text:'Eine Maschine wird mit Buchverlust verkauft.',
  frage:'Auf welchem Konto wird der Nettoerlös beim Verkauf gebucht?',
  optionen:[
    {text:'6961 Erlöse aus dem Abgang von Gegenständen des Sachanlagevermögens bei Buchverlust', richtig:true,
     weg:'Bei Buchverlust läuft der Erlös über 6961 und wird später mit 6960 Verluste aus dem Abgang verrechnet.'},
    {text:'5461 Erlöse aus dem Abgang von Gegenständen des Sachanlagevermögens bei Buchgewinn',
     fehler:'5461 gilt nur bei Buchgewinn. Bei Buchverlust gehört der Erlös auf 6961.'},
    {text:'5000 Umsatzerlöse für eigene Erzeugnisse',
     fehler:'Umsatzerlöse entstehen aus dem Verkauf unserer Produkte. Eine gebrauchte Maschine gehört nicht dazu.'},
    {text:'0710 Maschinen',
     fehler:'Auf dem Anlagekonto wird nur der Restbuchwert ausgebucht, nicht der Erlös.'}
  ],
  hinweise:[
    'Für den Erlös gibt es zwei Konten – eines für den Gewinnfall, eines für den Verlustfall.',
    'Das Erlöskonto wird später mit dem Ergebniskonto desselben Falls verrechnet.',
    'Bei Buchverlust: 6961 Erlöse und 6960 Verluste aus dem Abgang.'
  ],
  merke:'Buchgewinn: 5461 Erlöse und 5460 Erträge aus dem Abgang. Buchverlust: 6961 Erlöse und 6960 Verluste aus dem Abgang.'
},
{
  id:'VT3', modul:'M12V', typ:'berechnung', stufe:0, titel:'Restbuchwert ausbuchen',
  tags:['Anlagenverkauf','Theorie','Restbuchwert'],
  text:'Ein Gabelstapler wird mit Buchgewinn verkauft. Sein Restbuchwert steht noch auf 0830 Lager- und Transporteinrichtungen.',
  frage:'Wie wird der Restbuchwert ausgebucht?',
  optionen:[
    {text:'5460 Erträge aus dem Abgang an 0830 Lager- und Transporteinrichtungen', richtig:true,
     weg:'Der Restbuchwert mindert den Ertrag aus dem Abgang. Nach dem Abschluss des Erlöskontos bleibt auf 5460 genau der Buchgewinn stehen.'},
    {text:'6500 Abschreibungen auf Sachanlagen an 0830 Lager- und Transporteinrichtungen',
     fehler:'Der Verkauf ist keine Abschreibung. Die planmäßige AfA bis zum Verkauf ist bereits gebucht.'},
    {text:'0830 Lager- und Transporteinrichtungen an 5460 Erträge aus dem Abgang',
     fehler:'Das Anlagekonto muss auf null – der Restbuchwert steht dort im Soll und wird deshalb im Haben ausgebucht.'},
    {text:'6960 Verluste aus dem Abgang an 0830 Lager- und Transporteinrichtungen',
     fehler:'6960 gilt für den Verlustfall. Hier gibt es einen Buchgewinn.'}
  ],
  hinweise:[
    'Das Anlagekonto ist ein Aktivkonto. Auf welcher Seite steht der Restbuchwert, und wie wird es leer?',
    'Gegenkonto ist das Ergebniskonto des jeweiligen Falls – bei Buchgewinn 5460.',
    'Soll 5460, Haben 0830.'
  ],
  merke:'Der Restbuchwert wird immer gegen das Ergebniskonto des Falls ausgebucht: bei Buchgewinn 5460, bei Buchverlust 6960.'
},
{
  id:'VA1', modul:'M12V', typ:'kette', stufe:1, titel:'Lieferwagen verkaufen',
  tags:['Anlagenverkauf','Restbuchwert','Fuhrpark'],
  text:'Wir verkaufen einen gebrauchten Lieferwagen gegen Bankscheck für 12.000,00 € zzgl. 19 % Umsatzsteuer. Der Restbuchwert beträgt zum Verkaufszeitpunkt 9.500,00 €.',
  bloecke:[
    {id:'verkauf', titel:'Verkauf buchen',
     muster:[{seite:'soll', konto:'2800', betrag:14280}, {seite:'haben', konto:'5461', betrag:12000}, {seite:'haben', konto:'4800', betrag:2280}]},
    {id:'ausbuchung', titel:'Restbuchwert ausbuchen',
     muster:[{seite:'soll', konto:'5460', betrag:9500}, {seite:'haben', konto:'0840', betrag:9500}]},
    {id:'erloese', titel:'Erlöskonto abschließen',
     muster:[{seite:'soll', konto:'5461', betrag:12000}, {seite:'haben', konto:'5460', betrag:12000}]},
    {id:'guv', titel:'Ergebnis des Anlagenabgangs über die GuV abschließen',
     muster:[{seite:'soll', konto:'5460', betrag:2500}, {seite:'haben', konto:'8020', betrag:2500}]}
  ],
  hinweise:[
    'Vergleiche zuerst den Nettoerlös mit dem Restbuchwert: Buchgewinn oder Buchverlust? Davon hängen alle Konten ab.',
    '12.000,00 € netto liegen über dem Restbuchwert von 9.500,00 € – ein Buchgewinn. Der Erlös läuft über 5461, das Ergebnis über 5460.',
    'Nach Ausbuchung (Soll 9.500,00 €) und Erlösabschluss (Haben 12.000,00 €) steht auf 5460 ein Saldo von 2.500,00 € – der Buchgewinn, abgeschlossen über die GuV.'
  ],
  merke:'Buchgewinn: Erlös auf 5461, Restbuchwert gegen 5460, Erlöse auf 5460 übertragen, Gewinn von 5460 in die GuV.'
},
{
  id:'VA2', modul:'M12V', typ:'kette', stufe:1, titel:'Verpackungsmaschine verkaufen',
  tags:['Anlagenverkauf','Restbuchwert','Maschinen','Brutto/Netto'],
  text:'Wir verkaufen eine gebrauchte Verpackungsmaschine auf Ziel für 8.330,00 € inkl. 19 % Umsatzsteuer. Der Restbuchwert beträgt zum Verkaufszeitpunkt 7.600,00 €.',
  bloecke:[
    {id:'verkauf', titel:'Verkauf buchen',
     muster:[{seite:'soll', konto:'2400', betrag:8330}, {seite:'haben', konto:'6961', betrag:7000}, {seite:'haben', konto:'4800', betrag:1330}]},
    {id:'ausbuchung', titel:'Restbuchwert ausbuchen',
     muster:[{seite:'soll', konto:'6960', betrag:7600}, {seite:'haben', konto:'0710', betrag:7600}]},
    {id:'erloese', titel:'Erlöskonto abschließen',
     muster:[{seite:'soll', konto:'6961', betrag:7000}, {seite:'haben', konto:'6960', betrag:7000}]},
    {id:'guv', titel:'Ergebnis des Anlagenabgangs über die GuV abschließen',
     muster:[{seite:'soll', konto:'8020', betrag:600}, {seite:'haben', konto:'6960', betrag:600}]}
  ],
  hinweise:[
    'Der Preis ist brutto angegeben. Vergleiche den Nettoerlös mit dem Restbuchwert.',
    '8.330,00 € ÷ 1,19 = 7.000,00 € netto – das ist weniger als der Restbuchwert von 7.600,00 €. Ein Buchverlust: Erlös über 6961, Ergebnis über 6960.',
    'Auf 6960 stehen 7.600,00 € im Soll und 7.000,00 € im Haben. Der Saldo von 600,00 € ist der Buchverlust: Soll 8020 GuV, Haben 6960.'
  ],
  merke:'Der Bruttopreis kann über dem Restbuchwert liegen und trotzdem ist es ein Buchverlust. Es zählt nur der Nettoerlös.'
},
{
  id:'VA3', modul:'M12V', typ:'kette', stufe:2, titel:'Gabelstapler verkaufen · Restbuchwert ermitteln',
  tags:['Anlagenverkauf','Restbuchwert','Abschreibung','Lager- und Transporteinrichtungen'],
  text:'Ein Gabelstapler wurde am 1. Januar 2021 für 36.000,00 € netto angeschafft und wird linear über 8 Jahre abgeschrieben. Am 30. September 2025 verkaufen wir ihn gegen Bankscheck für 18.445,00 € inkl. 19 % Umsatzsteuer. Die planmäßige Abschreibung bis zum Verkauf ist bereits gebucht.',
  lesartText:'wenn der Verkaufsmonat nicht mehr abgeschrieben wird',
  bloecke:[
    {id:'rbw', titel:'Restbuchwert ermitteln', typ:'rechnen',
     frage:'Wie hoch ist der Restbuchwert des Gabelstaplers am Verkaufstag?',
     antwort:14625, alternativen:[15000],
     tipp:'Jahres-AfA = Anschaffungskosten ÷ Nutzungsdauer. Wie viele volle Jahre und wie viele Monate sind bis zum Verkauf abgeschrieben?',
     rechenweg:'36.000,00 € ÷ 8 = 4.500,00 € pro Jahr, 375,00 € pro Monat. 2021 bis 2024: 4 × 4.500,00 € = 18.000,00 €. 2025 mit Verkaufsmonat: 9 Monate = 3.375,00 € → Restbuchwert <b>14.625,00 €</b>. Ohne den Verkaufsmonat: 8 Monate = 3.000,00 € → Restbuchwert <b>15.000,00 €</b>. Beides ist richtig.'},
    {id:'verkauf', titel:'Verkauf buchen',
     muster:[{seite:'soll', konto:'2800', betrag:18445}, {seite:'haben', konto:'5461', betrag:15500}, {seite:'haben', konto:'4800', betrag:2945}]},
    {id:'ausbuchung', titel:'Restbuchwert ausbuchen',
     muster:[{seite:'soll', konto:'5460', betrag:14625, formel:'rbw'}, {seite:'haben', konto:'0830', betrag:14625, formel:'rbw'}],
     muster2:[{seite:'soll', konto:'5460', betrag:15000}, {seite:'haben', konto:'0830', betrag:15000}]},
    {id:'erloese', titel:'Erlöskonto abschließen',
     muster:[{seite:'soll', konto:'5461', betrag:15500}, {seite:'haben', konto:'5460', betrag:15500}]},
    {id:'guv', titel:'Ergebnis des Anlagenabgangs über die GuV abschließen',
     muster:[{seite:'soll', konto:'5460', betrag:875, formel:'15500 * f - rbw'}, {seite:'haben', konto:'8020', betrag:875, formel:'15500 * f - rbw'}],
     muster2:[{seite:'soll', konto:'5460', betrag:500}, {seite:'haben', konto:'8020', betrag:500}]}
  ],
  hinweise:[
    'Ermittle zuerst den Restbuchwert: Anschaffungskosten minus aller Abschreibungen bis zum Verkauf.',
    'Der Verkaufspreis ist brutto angegeben: 18.445,00 € ÷ 1,19 = 15.500,00 € netto. Vergleiche mit dem Restbuchwert – Gewinn oder Verlust?',
    '15.500,00 € netto liegen über dem Restbuchwert – ein Buchgewinn über 5461 und 5460: 875,00 € (Verkaufsmonat abgeschrieben, Restbuchwert 14.625,00 €) oder 500,00 € (ohne Verkaufsmonat, Restbuchwert 15.000,00 €).'
  ],
  merke:'Der Restbuchwert am Verkaufstag ergibt sich aus Anschaffungskosten minus planmäßiger Abschreibung bis zum Verkaufsmonat. Den Verkaufsmonat darf man noch abschreiben, muss es aber nicht – beide Restbuchwerte sind richtig.'
},
{
  id:'VA4', modul:'M12V', typ:'kette', stufe:2, titel:'Büroeinrichtung verkaufen · Restbuchwert ermitteln',
  tags:['Anlagenverkauf','Restbuchwert','Abschreibung','Geschäftsausstattung','Brutto/Netto'],
  text:'Eine Büroeinrichtung (Geschäftsausstattung) wurde am 1. Juli 2022 für 24.000,00 € netto angeschafft und wird linear über 10 Jahre abgeschrieben. Am 31. März 2026 verkaufen wir sie gegen Bankscheck für 17.255,00 € inkl. 19 % Umsatzsteuer. Die planmäßige Abschreibung bis zum Verkauf ist bereits gebucht.',
  lesartText:'wenn der Verkaufsmonat nicht mehr abgeschrieben wird',
  bloecke:[
    {id:'rbw', titel:'Restbuchwert ermitteln', typ:'rechnen',
     frage:'Wie hoch ist der Restbuchwert der Büroeinrichtung am Verkaufstag?',
     antwort:15000, alternativen:[15200],
     tipp:'Im Anschaffungsjahr zählt der Anschaffungsmonat voll mit. Wie viele Monate sind insgesamt abgeschrieben?',
     rechenweg:'24.000,00 € ÷ 10 = 2.400,00 € pro Jahr, 200,00 € pro Monat. 2022: 6 Monate = 1.200,00 €. 2023 bis 2025: 3 × 2.400,00 € = 7.200,00 €. 2026 mit Verkaufsmonat: 3 Monate = 600,00 € → Restbuchwert <b>15.000,00 €</b>. Ohne den Verkaufsmonat: 2 Monate = 400,00 € → Restbuchwert <b>15.200,00 €</b>. Beides ist richtig.'},
    {id:'verkauf', titel:'Verkauf buchen',
     muster:[{seite:'soll', konto:'2800', betrag:17255}, {seite:'haben', konto:'6961', betrag:14500}, {seite:'haben', konto:'4800', betrag:2755}]},
    {id:'ausbuchung', titel:'Restbuchwert ausbuchen',
     muster:[{seite:'soll', konto:'6960', betrag:15000, formel:'rbw'}, {seite:'haben', konto:'0870', betrag:15000, formel:'rbw'}],
     muster2:[{seite:'soll', konto:'6960', betrag:15200}, {seite:'haben', konto:'0870', betrag:15200}]},
    {id:'erloese', titel:'Erlöskonto abschließen',
     muster:[{seite:'soll', konto:'6961', betrag:14500}, {seite:'haben', konto:'6960', betrag:14500}]},
    {id:'guv', titel:'Ergebnis des Anlagenabgangs über die GuV abschließen',
     muster:[{seite:'soll', konto:'8020', betrag:500, formel:'rbw - 14500 * f'}, {seite:'haben', konto:'6960', betrag:500, formel:'rbw - 14500 * f'}],
     muster2:[{seite:'soll', konto:'8020', betrag:700}, {seite:'haben', konto:'6960', betrag:700}]}
  ],
  hinweise:[
    'Ermittle zuerst den Restbuchwert. Im Anschaffungsjahr 2022 zählt der Juli voll mit.',
    'Netto erhalten wir 17.255,00 € ÷ 1,19 = 14.500,00 €. Vergleiche mit dem Restbuchwert – der Bruttopreis täuscht.',
    'Restbuchwert 15.000,00 € (mit Verkaufsmonat) oder 15.200,00 € (ohne), Nettoerlös 14.500,00 € – ein Buchverlust von 500,00 € bzw. 700,00 € über 6961 und 6960.'
  ],
  merke:'Bei einem Buchverlust wird der Erlös auf 6961 gebucht und mit 6960 verrechnet; der Saldo von 6960 geht als Verlust in die GuV. Den Verkaufsmonat darf man noch abschreiben, muss es aber nicht – beide Restbuchwerte sind richtig.'
},
{
  id:'VA5', modul:'M12V', typ:'kette', stufe:3, titel:'Maschine verkaufen',
  tags:['Anlagenverkauf','Restbuchwert','Abschreibung','Maschinen'],
  text:'Eine Maschine wurde am 1. April 2020 für 60.000,00 € netto angeschafft und wird linear über 10 Jahre abgeschrieben. Am 31. August 2025 verkaufen wir sie auf Ziel für 30.000,00 € zzgl. 19 % Umsatzsteuer. Die planmäßige Abschreibung bis zum Verkauf ist bereits gebucht.',
  lesartText:'wenn der Verkaufsmonat nicht mehr abgeschrieben wird',
  bloecke:[
    {id:'verkauf', titel:'Verkauf buchen',
     muster:[{seite:'soll', konto:'2400', betrag:35700}, {seite:'haben', konto:'5461', betrag:30000}, {seite:'haben', konto:'4800', betrag:5700}]},
    {id:'ausbuchung', titel:'Restbuchwert ausbuchen',
     muster:[{seite:'soll', konto:'5460', betrag:27500}, {seite:'haben', konto:'0710', betrag:27500}],
     muster2:[{seite:'soll', konto:'5460', betrag:28000}, {seite:'haben', konto:'0710', betrag:28000}]},
    {id:'erloese', titel:'Erlöskonto abschließen',
     muster:[{seite:'soll', konto:'5461', betrag:30000}, {seite:'haben', konto:'5460', betrag:30000}]},
    {id:'guv', titel:'Ergebnis des Anlagenabgangs über die GuV abschließen',
     muster:[{seite:'soll', konto:'5460', betrag:2500}, {seite:'haben', konto:'8020', betrag:2500}],
     muster2:[{seite:'soll', konto:'5460', betrag:2000}, {seite:'haben', konto:'8020', betrag:2000}]}
  ],
  hinweise:[
    'Ohne Restbuchwert geht es nicht: Wie viele Monate sind von April 2020 bis August 2025 abgeschrieben?',
    '6.000,00 € pro Jahr, 500,00 € pro Monat. 2020: 9 Monate = 4.500,00 €, 2021 bis 2024: 24.000,00 €, 2025: 8 Monate mit Verkaufsmonat = 4.000,00 € → Restbuchwert 27.500,00 €. Ohne den Verkaufsmonat (7 Monate): 28.000,00 €.',
    'Nettoerlös 30.000,00 € über dem Restbuchwert – ein Buchgewinn über 5461 und 5460: 2.500,00 € bzw. 2.000,00 € ohne Verkaufsmonat.'
  ],
  merke:'Erst den Restbuchwert ermitteln, dann mit dem Nettoerlös vergleichen – erst danach steht fest, welche Konten gebucht werden. Den Verkaufsmonat darf man noch abschreiben, muss es aber nicht – beide Restbuchwerte sind richtig.'
},
{
  id:'VA6', modul:'M12V', typ:'kette', stufe:3, titel:'Firmenwagen verkaufen',
  tags:['Anlagenverkauf','Restbuchwert','Abschreibung','Fuhrpark','Brutto/Netto'],
  text:'Ein Firmenwagen wurde am 1. Oktober 2021 für 42.000,00 € netto angeschafft und wird linear über 7 Jahre abgeschrieben. Am 30. Juni 2025 verkaufen wir ihn gegen Bankscheck für 22.610,00 € inkl. 19 % Umsatzsteuer. Die planmäßige Abschreibung bis zum Verkauf ist bereits gebucht.',
  lesartText:'wenn der Verkaufsmonat nicht mehr abgeschrieben wird',
  bloecke:[
    {id:'verkauf', titel:'Verkauf buchen',
     muster:[{seite:'soll', konto:'2800', betrag:22610}, {seite:'haben', konto:'6961', betrag:19000}, {seite:'haben', konto:'4800', betrag:3610}]},
    {id:'ausbuchung', titel:'Restbuchwert ausbuchen',
     muster:[{seite:'soll', konto:'6960', betrag:19500}, {seite:'haben', konto:'0840', betrag:19500}],
     muster2:[{seite:'soll', konto:'6960', betrag:20000}, {seite:'haben', konto:'0840', betrag:20000}]},
    {id:'erloese', titel:'Erlöskonto abschließen',
     muster:[{seite:'soll', konto:'6961', betrag:19000}, {seite:'haben', konto:'6960', betrag:19000}]},
    {id:'guv', titel:'Ergebnis des Anlagenabgangs über die GuV abschließen',
     muster:[{seite:'soll', konto:'8020', betrag:500}, {seite:'haben', konto:'6960', betrag:500}],
     muster2:[{seite:'soll', konto:'8020', betrag:1000}, {seite:'haben', konto:'6960', betrag:1000}]}
  ],
  hinweise:[
    'Ermittle zuerst den Restbuchwert. Im Anschaffungsjahr 2021 zählt der Oktober voll mit.',
    '6.000,00 € pro Jahr, 500,00 € pro Monat. 2021: 3 Monate = 1.500,00 €, 2022 bis 2024: 18.000,00 €, 2025: 6 Monate mit Verkaufsmonat = 3.000,00 € → Restbuchwert 19.500,00 €. Ohne den Verkaufsmonat (5 Monate): 20.000,00 €.',
    'Netto erhalten wir 22.610,00 € ÷ 1,19 = 19.000,00 € – weniger als der Restbuchwert. Ein Buchverlust über 6961 und 6960: 500,00 € bzw. 1.000,00 € ohne Verkaufsmonat.'
  ],
  merke:'Liegt der Nettoerlös unter dem Restbuchwert, entsteht ein Buchverlust – auch wenn der Bruttopreis höher ist. Den Verkaufsmonat darf man noch abschreiben, muss es aber nicht – beide Restbuchwerte sind richtig.'
},

/* ---------- Modul · Kauf von Umlaufvermögen mit Bezugskosten ----------
   Gegenstück zu „Anschaffungskosten ermitteln“: Beim Anlagevermögen werden Nebenkosten aktiviert (Anlagekonto),
   beim Umlaufvermögen laufen sie über das Unterkonto Bezugskosten (6001 Rohstoffe, 6081 Handelswaren).
   Skonto und Preisnachlass betreffen nur den Warenwert – außer der Lieferant gewährt Skonto auf den ganzen Rechnungsbetrag. */
{
  id:'BT1', modul:'M11B', typ:'berechnung', stufe:0, titel:'Fracht für Rohstoffe',
  tags:['Bezugskosten','Theorie','Rohstoffe'],
  text:'Ein Spediteur liefert uns Rohstoffe und stellt die Fracht gesondert in Rechnung.',
  frage:'Auf welchem Konto wird die Fracht (netto) gebucht?',
  optionen:[
    {text:'6001 Bezugskosten', richtig:true,
     weg:'Fracht für eingekaufte Rohstoffe sind Bezugskosten. Sie erhöhen den Einstandspreis und werden auf dem Unterkonto 6001 gesammelt.'},
    {text:'6000 Aufwendungen für Rohstoffe',
     fehler:'Die Bezugskosten gehören zwar zum Rohstoffaufwand, werden aber auf dem eigenen Unterkonto 6001 erfasst – so bleiben sie sichtbar.'},
    {text:'6140 Frachten und Fremdlagerkosten',
     fehler:'6140 nimmt Frachten auf, die wir beim Verkauf für den Versand an Kunden zahlen (Ausgangsfrachten). Eingangsfrachten sind Bezugskosten.'},
    {text:'0710 Maschinen',
     fehler:'Auf ein Anlagekonto kommen nur Nebenkosten von Anlagegütern. Rohstoffe sind Umlaufvermögen.'}
  ],
  hinweise:[
    'Gekauft wird Umlaufvermögen. Wofür fällt die Fracht an – für den Einkauf oder für den Verkauf?',
    'Eingangsfrachten gehören zum Einkauf und erhöhen den Einstandspreis der Rohstoffe.',
    'Konto: 6001 Bezugskosten, ein Unterkonto von 6000.'
  ],
  merke:'Bezugskosten beim Einkauf von Rohstoffen: 6001, von Handelswaren: 6081. Frachten beim Verkauf: 6140.'
},
{
  id:'BT2', modul:'M11B', typ:'berechnung', stufe:0, titel:'Fracht für eine Maschine',
  tags:['Bezugskosten','Anschaffungsnebenkosten','Theorie','Vergleich'],
  text:'Ein Spediteur liefert eine neue Maschine und stellt die Fracht gesondert in Rechnung.',
  frage:'Wie wird die Fracht (netto) gebucht?',
  optionen:[
    {text:'Auf 0710 Maschinen – sie gehört zu den Anschaffungskosten', richtig:true,
     weg:'Nebenkosten eines Anlageguts werden aktiviert: Sie erhöhen die Anschaffungskosten und werden über die Nutzungsdauer abgeschrieben.'},
    {text:'Auf 6001 Bezugskosten',
     fehler:'6001 gilt für Rohstoffe – also Umlaufvermögen. Die Maschine ist Anlagevermögen; ihre Nebenkosten gehören auf das Anlagekonto.'},
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
  merke:'Anlagevermögen: Nebenkosten aufs Anlagekonto (aktivieren). Umlaufvermögen: Bezugskosten aufs Unterkonto 6001 bzw. 6081.'
},
{
  id:'BT3', modul:'M11B', typ:'berechnung', stufe:0, titel:'Skonto auf den Warenwert',
  tags:['Bezugskosten','Skonto','Theorie'],
  text:'Eine Eingangsrechnung enthält Rohstoffe und Transportkosten. Der Lieferant gewährt 2 % Skonto auf den Warenwert.',
  frage:'Was wird durch den Skontoabzug gemindert?',
  optionen:[
    {text:'Nur die Rohstoffe (über 6003 Skonto) und die darauf entfallende Vorsteuer – die Transportkosten bleiben unverändert', richtig:true,
     weg:'Gilt der Skonto nur für den Warenwert, wird er nur vom Rohstoffpreis berechnet. Die Bezugskosten auf 6001 bleiben in voller Höhe stehen.'},
    {text:'Rohstoffe und Transportkosten anteilig',
     fehler:'Das gilt nur, wenn Skonto auf den gesamten Rechnungsbetrag gewährt wird. Hier ist ausdrücklich der Warenwert genannt.'},
    {text:'Nur die Transportkosten',
     fehler:'Skonto ist ein Preisnachlass auf die Ware – nicht auf die Fracht.'},
    {text:'Nur die Vorsteuer',
     fehler:'Der Skonto mindert immer auch den Nettobetrag; die Vorsteuer wird nur anteilig mitkorrigiert.'}
  ],
  hinweise:[
    'Lies genau, worauf der Skonto gewährt wird.',
    'Warenwert heißt: nur der Preis der Rohstoffe, ohne Transport.',
    'Gemindert werden 6003 Skonto (Rohstoffe) und die anteilige Vorsteuer.'
  ],
  merke:'Skonto auf den Warenwert berührt die Bezugskosten nicht. Skonto auf den Rechnungsbetrag wird vom gesamten Betrag berechnet.'
},
{
  id:'BZ1', modul:'M11B', typ:'kette', stufe:1, titel:'Rohstoffe mit gesonderter Frachtrechnung',
  tags:['Bezugskosten','Rohstoffe','Eingangsrechnung'],
  text:'Wir kaufen Rohstoffe auf Ziel für 8.000,00 € netto zzgl. 19 % Umsatzsteuer. Für den Transport stellt uns der Spediteur 300,00 € netto zzgl. 19 % Umsatzsteuer gesondert in Rechnung (ebenfalls auf Ziel).',
  bloecke:[
    {id:'eingang', titel:'Rechnung des Lieferanten buchen',
     muster:[{seite:'soll', konto:'6000', betrag:8000}, {seite:'soll', konto:'2600', betrag:1520}, {seite:'haben', konto:'4400', betrag:9520}]},
    {id:'fracht', titel:'Rechnung des Spediteurs buchen',
     muster:[{seite:'soll', konto:'6001', betrag:300}, {seite:'soll', konto:'2600', betrag:57}, {seite:'haben', konto:'4400', betrag:357}]}
  ],
  hinweise:[
    'Die Fracht gehört zum Einkauf der Rohstoffe. Gibt es für Rohstoffe ein eigenes Konto für Nebenkosten?',
    'Eingangsfrachten für Rohstoffe sind Bezugskosten: 6001.',
    'Soll 6001 Bezugskosten 300,00 € und 2600 Vorsteuer 57,00 €, Haben 4400 357,00 €.'
  ],
  merke:'Bezugskosten für Rohstoffe werden auf 6001 gebucht – auch wenn sie von einem anderen Unternehmen (Spediteur) in Rechnung gestellt werden.'
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
  id:'BZ3', modul:'M11B', typ:'kette', stufe:2, titel:'Rohstoffe · Verpackung in der Rechnung, Fracht bar',
  tags:['Bezugskosten','Rohstoffe','Brutto/Netto'],
  text:'Wir kaufen Rohstoffe auf Ziel. Die Rechnung des Lieferanten enthält Rohstoffe für 6.000,00 € und Einwegverpackung für 150,00 €, jeweils netto zzgl. 19 % Umsatzsteuer. Die Fracht bezahlen wir dem Spediteur bei Anlieferung bar: 238,00 € inkl. 19 % Umsatzsteuer.',
  bloecke:[
    {id:'eingang', titel:'Rechnung des Lieferanten buchen',
     muster:[{seite:'soll', konto:'6000', betrag:6000}, {seite:'soll', konto:'6001', betrag:150}, {seite:'soll', konto:'2600', betrag:1168.50}, {seite:'haben', konto:'4400', betrag:7318.50}]},
    {id:'fracht', titel:'Barzahlung der Fracht buchen',
     muster:[{seite:'soll', konto:'6001', betrag:200}, {seite:'soll', konto:'2600', betrag:38}, {seite:'haben', konto:'2820', betrag:238}]}
  ],
  hinweise:[
    'Verpackung und Fracht sind beide Bezugskosten. Achte darauf, welcher Betrag netto und welcher brutto angegeben ist.',
    'Fracht: 238,00 € ÷ 1,19 = 200,00 € netto, 38,00 € Vorsteuer. Bezahlt wird bar.',
    'Rechnung: 6000 6.000,00 €, 6001 150,00 €, 2600 1.168,50 € an 4400 7.318,50 €. Fracht: 6001 200,00 €, 2600 38,00 € an 2820 238,00 €.'
  ],
  merke:'Alle Nebenkosten des Einkaufs – Fracht, Verpackung, Rollgeld – sind Bezugskosten, gleich ob sie in der Lieferantenrechnung stehen oder gesondert bezahlt werden.'
},
{
  id:'BZ4', modul:'M11B', typ:'kette', stufe:3, titel:'Rohstoffe mit Transportkosten · Skonto auf Warenwert oder Rechnungsbetrag',
  tags:['Bezugskosten','Rohstoffe','Skonto','Vergleich'],
  text:'<b>Auszug aus der Eingangsrechnung</b> (Kauf auf Ziel):'
    + '<table class="lager"><tr><td>Rohstoffe</td><td class="z">15.000,00 €</td></tr><tr><td>Transport und Versand</td><td class="z">200,00 €</td></tr>'
    + '<tr><td>gesamt netto</td><td class="z">15.200,00 €</td></tr><tr><td>zzgl. 19 % Umsatzsteuer</td><td class="z">2.888,00 €</td></tr>'
    + '<tr><td><b>Rechnungsbetrag</b></td><td class="z"><b>18.088,00 €</b></td></tr></table>'
    + 'Wir überweisen innerhalb der Skontofrist unter Abzug von 2 % Skonto. Buche den Rechnungseingang und die Überweisung für beide möglichen Fälle: a) Der Lieferant gewährt Skonto nur auf den Warenwert, b) der Lieferant gewährt Skonto auf den Rechnungsbetrag.',
  lesartText:'wenn der Skontoanteil der Transportkosten die Bezugskosten mindert',
  bloecke:[
    {id:'eingang', titel:'Rechnungseingang buchen',
     muster:[{seite:'soll', konto:'6000', betrag:15000}, {seite:'soll', konto:'6001', betrag:200}, {seite:'soll', konto:'2600', betrag:2888}, {seite:'haben', konto:'4400', betrag:18088}]},
    {id:'skontoWare', titel:'Fall a) Überweisung, Skonto auf den Warenwert',
     muster:[{seite:'soll', konto:'4400', betrag:18088}, {seite:'haben', konto:'2800', betrag:17731}, {seite:'haben', konto:'6003', betrag:300}, {seite:'haben', konto:'2600', betrag:57}]},
    {id:'skontoRechnung', titel:'Fall b) Überweisung, Skonto auf den Rechnungsbetrag',
     muster:[{seite:'soll', konto:'4400', betrag:18088}, {seite:'haben', konto:'2800', betrag:17726.24}, {seite:'haben', konto:'6003', betrag:304}, {seite:'haben', konto:'2600', betrag:57.76}],
     muster2:[{seite:'soll', konto:'4400', betrag:18088}, {seite:'haben', konto:'2800', betrag:17726.24}, {seite:'haben', konto:'6003', betrag:300}, {seite:'haben', konto:'6001', betrag:4}, {seite:'haben', konto:'2600', betrag:57.76}]}
  ],
  hinweise:[
    'Der Unterschied steckt in der Bemessungsgrundlage: einmal nur der Rohstoffpreis, einmal der gesamte Rechnungsbetrag.',
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
  text:'Zum 31.12. weisen die Erfolgskonten folgende Salden aus:<table class="lager"><tr><th>Konto</th><th class="z">Saldo</th></tr><tr><td>5000 Umsatzerlöse eigene Erzeugnisse</td><td class="z">186.000,00 €</td></tr><tr><td>5710 Zinserträge</td><td class="z">2.400,00 €</td></tr><tr><td>6000 Aufwendungen für Rohstoffe</td><td class="z">74.000,00 €</td></tr><tr><td>6300 Gehälter</td><td class="z">58.000,00 €</td></tr><tr><td>6700 Mietaufwendungen</td><td class="z">18.000,00 €</td></tr></table>Schließe die Konten 6000 und 5000 ab. Ermittle danach das Ergebnis aus allen Salden und schließe das GuV-Konto ab.',
  bloecke:[
    {id:'aufwand', titel:'Konto 6000 Aufwendungen für Rohstoffe abschließen',
     muster:[{seite:'soll', konto:'8020', betrag:74000}, {seite:'haben', konto:'6000', betrag:74000}]},
    {id:'ertrag', titel:'Konto 5000 Umsatzerlöse eigene Erzeugnisse abschließen',
     muster:[{seite:'soll', konto:'5000', betrag:186000}, {seite:'haben', konto:'8020', betrag:186000}]},
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
  text:'Das Eigenkapital betrug am 1.1. 120.000,00 €. Zum 31.12. weisen die Erfolgskonten folgende Salden aus:<table class="lager"><tr><th>Konto</th><th class="z">Saldo</th></tr><tr><td>5000 Umsatzerlöse eigene Erzeugnisse</td><td class="z">240.000,00 €</td></tr><tr><td>5400 Erträge aus Vermietung und Verpachtung</td><td class="z">4.500,00 €</td></tr><tr><td>6000 Aufwendungen für Rohstoffe</td><td class="z">98.000,00 €</td></tr><tr><td>6200 Löhne</td><td class="z">72.000,00 €</td></tr><tr><td>6870 Werbeaufwand</td><td class="z">18.000,00 €</td></tr><tr><td>6900 Versicherungsbeiträge</td><td class="z">34.000,00 €</td></tr></table>Schließe die Konten 6870 und 5000 ab. Ermittle das Ergebnis aus allen Salden, schließe das GuV-Konto und anschließend das Eigenkapitalkonto ab.',
  bloecke:[
    {id:'aufwand', titel:'Konto 6870 Werbeaufwand abschließen',
     muster:[{seite:'soll', konto:'8020', betrag:18000}, {seite:'haben', konto:'6870', betrag:18000}]},
    {id:'ertrag', titel:'Konto 5000 Umsatzerlöse eigene Erzeugnisse abschließen',
     muster:[{seite:'soll', konto:'5000', betrag:240000}, {seite:'haben', konto:'8020', betrag:240000}]},
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
  text:'Das Eigenkapital betrug am 1.1. 85.000,00 €. Zum 31.12. weisen die Erfolgskonten folgende Salden aus:<table class="lager"><tr><th>Konto</th><th class="z">Saldo</th></tr><tr><td>5000 Umsatzerlöse eigene Erzeugnisse</td><td class="z">128.000,00 €</td></tr><tr><td>5710 Zinserträge</td><td class="z">1.200,00 €</td></tr><tr><td>6000 Aufwendungen für Rohstoffe</td><td class="z">64.000,00 €</td></tr><tr><td>6200 Löhne</td><td class="z">41.000,00 €</td></tr><tr><td>6700 Mietaufwendungen</td><td class="z">15.600,00 €</td></tr><tr><td>6870 Werbeaufwand</td><td class="z">15.200,00 €</td></tr><tr><td>7510 Zinsaufwendungen</td><td class="z">2.400,00 €</td></tr></table>Schließe die Konten 7510 und 5710 ab. Ermittle das Ergebnis aus allen Salden und schließe alle Konten bis zur Schlussbilanz ab.',
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
  text:'Im Dezember wurde eine neue Fertigungsanlage gekauft. Zum 31.12. weisen die Konten folgende Salden aus: 2600 Vorsteuer 14.250,00 € (Soll), 4800 Umsatzsteuer 9.880,00 € (Haben).',
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
  text:'Vor den Dezember-Buchungen zeigen die Konten 2600 Vorsteuer 2.280,00 € (Soll) und 4800 Umsatzsteuer 4.750,00 € (Haben). Im Dezember kommen hinzu:<ol><li>Einkauf von Rohstoffen auf Ziel, 9.000,00 € netto zzgl. 19 % USt.</li><li>Verkauf eigener Erzeugnisse auf Ziel, 21.000,00 € netto zzgl. 19 % USt.</li><li>Rücksendung von Rohstoffen an den Lieferanten, 1.000,00 € netto.</li><li>Ein Kunde erhält wegen eines Mangels einen Preisnachlass von 2.000,00 € netto.</li></ol>Der Saldo wird erst im Januar mit dem Finanzamt abgerechnet.',
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
  text:'Vor den Dezember-Buchungen zeigen die Konten 2600 Vorsteuer 1.140,00 € (Soll) und 4800 Umsatzsteuer 2.660,00 € (Haben). Im Dezember kommen hinzu:<ol><li>Kauf einer Maschine auf Ziel, 30.000,00 € netto zzgl. 19 % USt.</li><li>Verkauf eigener Erzeugnisse auf Ziel, 12.000,00 € netto zzgl. 19 % USt.</li><li>Ein Kunde sendet Erzeugnisse zurück, 2.000,00 € netto.</li></ol>Der Saldo wird erst im Januar mit dem Finanzamt abgerechnet.',
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

/* ---------- Modul · Bestandsveränderungen (fertige Erzeugnisse) ----------
   Direkte Buchung: Mehrbestand 2200 an 5220, Minderbestand 5220 an 2200.
   Danach Schlussbestand an SBK und 5220 über die GuV – so wird die Wirkung auf das Ergebnis sichtbar. */
{
  id:'BVT1', modul:'M6B', typ:'berechnung', stufe:0, titel:'Warum erhöht ein Mehrbestand das Ergebnis?',
  tags:['Bestandsveränderungen','Theorie','Ergebnis'],
  text:'Ein Industriebetrieb hat im Geschäftsjahr mehr fertige Erzeugnisse hergestellt als verkauft. Der Schlussbestand an fertigen Erzeugnissen ist dadurch höher als der Anfangsbestand.',
  frage:'Warum wird der Mehrbestand in der GuV als Ertrag gebucht?',
  optionen:[
    {text:'Die Herstellungsaufwendungen für die noch nicht verkauften Erzeugnisse stehen bereits in der GuV. Der Mehrbestand gleicht sie aus, damit das Ergebnis nicht zu niedrig ausgewiesen wird.', richtig:true,
     weg:'Löhne, Material und Abschreibungen der ganzen Produktion sind schon Aufwand. Was davon auf Lager liegt, ist aber noch Vermögen – deshalb steht der Mehrbestand als Ertrag (5220 im Haben) gegenüber.'},
    {text:'Weil die Erzeugnisse bereits verkauft sind und Umsatzerlöse bringen.',
     fehler:'Gerade nicht: Der Mehrbestand sind Erzeugnisse, die noch auf Lager liegen und noch keinen Erlös gebracht haben.'},
    {text:'Weil der Lagerbestand höher bewertet werden muss als die Herstellungskosten.',
     fehler:'Bewertet wird höchstens zu Herstellungskosten. Der Mehrbestand ist keine Höherbewertung, sondern zusätzliche Menge auf Lager.'},
    {text:'Ein Mehrbestand hat keine Auswirkung auf das Ergebnis.',
     fehler:'Doch: Ohne die Bestandserhöhung stünden den Herstellungsaufwendungen keine Erträge gegenüber – das Ergebnis wäre zu niedrig.'}
  ],
  hinweise:[
    'Wo stehen die Aufwendungen für die Herstellung – egal ob verkauft wurde oder nicht?',
    'Was auf Lager liegt, ist noch Vermögen. Der Aufwand dafür darf das Ergebnis nicht mindern.',
    'Der Mehrbestand neutralisiert den Herstellungsaufwand der nicht verkauften Erzeugnisse – er erhöht das Ergebnis.'
  ],
  merke:'Mehrbestand: Ertrag, erhöht das Ergebnis (2200 an 5220). Minderbestand: Aufwand, mindert das Ergebnis (5220 an 2200).'
},
{
  id:'BV1', modul:'M6B', typ:'kette', stufe:2, titel:'Fertige Erzeugnisse · Beispiel 1',
  tags:['Bestandsveränderungen','Fertige Erzeugnisse','Abschluss','GuV'],
  text:'Für die fertigen Erzeugnisse liegen zum Jahresende folgende Werte vor:'
    + '<table class="lager"><tr><td>Anfangsbestand 01.01.</td><td class="z">40.000,00 €</td></tr><tr><td>Schlussbestand laut Inventur 31.12.</td><td class="z">55.000,00 €</td></tr></table>'
    + 'Buche die Bestandsveränderung und schließe die Konten ab.',
  bloecke:[
    {id:'bestand', titel:'Bestandsveränderung buchen',
     muster:[{seite:'soll', konto:'2200', betrag:15000}, {seite:'haben', konto:'5220', betrag:15000}]},
    {id:'sbk', titel:'Schlussbestand auf das SBK abschließen',
     muster:[{seite:'soll', konto:'8010', betrag:55000}, {seite:'haben', konto:'2200', betrag:55000}]},
    {id:'guv', titel:'Konto 5220 über die GuV abschließen',
     muster:[{seite:'soll', konto:'5220', betrag:15000}, {seite:'haben', konto:'8020', betrag:15000}]},
    {id:'ergebnis', titel:'Wirkung auf das Ergebnis bestimmen', typ:'rechnen',
     frage:'Wie wirkt sich die Bestandsveränderung auf das Ergebnis aus?', richtung:'zu',
     antwort:15000,
     tipp:'Steht 5220 im Haben der GuV (Ertrag) oder im Soll (Aufwand)?',
     rechenweg:'Mehrbestand von 15.000,00 € – er steht als Ertrag im Haben der GuV und <b>erhöht das Ergebnis um 15.000,00 €</b>.'}
  ],
  hinweise:[
    'Vergleiche Schlussbestand und Anfangsbestand: Liegt jetzt mehr oder weniger auf Lager?',
    'Der Bestand ist um 15.000,00 € gestiegen – ein Mehrbestand. Das Bestandskonto 2200 nimmt zu (Soll), 5220 ist der Gegenposten.',
    'Mehrbestand: 2200 an 5220. Abschluss: SBK an 2200 (55.000,00 €), 5220 an GuV (15.000,00 €) – das Ergebnis steigt.'
  ],
  merke:'Mehrbestand = Schlussbestand über Anfangsbestand. Er wird als Ertrag gebucht (2200 an 5220) und erhöht über die GuV das Ergebnis.'
},
{
  id:'BV2', modul:'M6B', typ:'kette', stufe:3, titel:'Fertige Erzeugnisse · Beispiel 2',
  tags:['Bestandsveränderungen','Fertige Erzeugnisse','Abschluss','GuV'],
  text:'Für die fertigen Erzeugnisse liegen zum Jahresende folgende Werte vor:'
    + '<table class="lager"><tr><td>Anfangsbestand 01.01.</td><td class="z">62.000,00 €</td></tr><tr><td>Schlussbestand laut Inventur 31.12.</td><td class="z">48.500,00 €</td></tr></table>'
    + 'Buche die Bestandsveränderung und schließe die Konten ab.',
  bloecke:[
    {id:'bestand', titel:'Bestandsveränderung buchen',
     muster:[{seite:'soll', konto:'5220', betrag:13500}, {seite:'haben', konto:'2200', betrag:13500}]},
    {id:'sbk', titel:'Schlussbestand auf das SBK abschließen',
     muster:[{seite:'soll', konto:'8010', betrag:48500}, {seite:'haben', konto:'2200', betrag:48500}]},
    {id:'guv', titel:'Konto 5220 über die GuV abschließen',
     muster:[{seite:'soll', konto:'8020', betrag:13500}, {seite:'haben', konto:'5220', betrag:13500}]},
    {id:'ergebnis', titel:'Wirkung auf das Ergebnis bestimmen', typ:'rechnen',
     frage:'Wie wirkt sich die Bestandsveränderung auf das Ergebnis aus?', richtung:'ab',
     antwort:13500,
     tipp:'Steht 5220 im Haben der GuV (Ertrag) oder im Soll (Aufwand)?',
     rechenweg:'Minderbestand von 13.500,00 € – er steht als Aufwand im Soll der GuV und <b>mindert das Ergebnis um 13.500,00 €</b>.'}
  ],
  hinweise:[
    'Vergleiche Schlussbestand und Anfangsbestand: Liegt jetzt mehr oder weniger auf Lager?',
    'Der Bestand ist um 13.500,00 € gesunken – ein Minderbestand. Es wurden Erzeugnisse aus dem Vorjahr mitverkauft; 2200 nimmt ab (Haben).',
    'Minderbestand: 5220 an 2200. Abschluss: SBK an 2200 (48.500,00 €), GuV an 5220 (13.500,00 €) – das Ergebnis sinkt.'
  ],
  merke:'Minderbestand = Schlussbestand unter Anfangsbestand. Er wird als Aufwand gebucht (5220 an 2200) und mindert über die GuV das Ergebnis.'
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
{
  id:'BO0', modul:'M20', typ:'berechnung', stufe:0, titel:'Bestandsorientiert oder aufwandsorientiert?',
  tags:['Werkstoffe','bestandsorientiert','Theorie'],
  text:'Ein Industriebetrieb kauft Rohstoffe ein und verbraucht sie in der Fertigung. Er bucht die Werkstoffe <b>bestandsorientiert</b>.',
  frage:'Wie werden Einkauf und Verbrauch gebucht?',
  optionen:[
    {text:'Einkauf auf das Bestandskonto 2000 Rohstoffe; Verbrauch laut Entnahmescheinen (oder Inventur) mit 6000 an 2000.', richtig:true,
     weg:'Der Einkauf erhöht zunächst den Bestand. Aufwand entsteht erst beim Verbrauch: 6000 Aufwendungen für Rohstoffe an 2000 Rohstoffe. Ohne laufende Erfassung gilt: Verbrauch = Anfangsbestand + Zugänge − Schlussbestand.'},
    {text:'Einkauf sofort als Aufwand auf 6000; am Jahresende wird nur die Bestandsveränderung gebucht.',
     fehler:'Das ist das aufwandsorientierte Verfahren.'},
    {text:'Einkauf auf 2000; der Verbrauch wird nicht gebucht, der Schlussbestand geht über die GuV.',
     fehler:'Der Verbrauch ist Aufwand (6000 an 2000); Bestandskonten werden über das SBK abgeschlossen.'},
    {text:'Einkauf und Verbrauch werden beide auf 6000 gebucht.',
     fehler:'Dann stünde der Einkauf doppelt im Aufwand.'}
  ],
  hinweise:['Wo landet der Einkauf zuerst – auf einem Bestands- oder einem Aufwandskonto?', 'Wann wird beim bestandsorientierten Verfahren Aufwand gebucht?', 'Beide Verfahren führen zum gleichen Aufwand – nur der Buchungsweg unterscheidet sich.'],
  merke:'Bestandsorientiert: Einkauf auf 2000/2020/2030 (Bestand), Verbrauch 6000/6020/6030 an 2000/2020/2030 (Aufwand) laut Entnahmeschein oder Inventur.'
},
{
  id:'BO1', modul:'M20', typ:'kette', stufe:1, titel:'Rohstoffe auf Ziel einkaufen',
  tags:['Werkstoffe','bestandsorientiert','Einkauf','Umsatzsteuer'],
  text:'Wir kaufen Rohstoffe (Aluminiumprofile) auf Ziel: 18.400,00 € netto zzgl. 19 % Umsatzsteuer. Die Werkstoffe werden bestandsorientiert gebucht.',
  bloecke:[
    {id:'eingang', titel:'Eingangsrechnung buchen',
     muster:[{seite:'soll', konto:'2000', betrag:18400}, {seite:'soll', konto:'2600', betrag:3496}, {seite:'haben', konto:'4400', betrag:21896}]}
  ],
  hinweise:['Bestandsorientiert: Der Einkauf erhöht zunächst den Bestand.', 'Soll: 2000 Rohstoffe (netto) und 2600 Vorsteuer; Haben: 4400 Verbindlichkeiten (brutto).'],
  merke:'Einkauf bestandsorientiert: 2000 Rohstoffe + 2600 Vorsteuer an 4400 Verbindlichkeiten a. LL.',
  stolpersteine:['Aufwandskonto 6000 statt Bestandskonto 2000','Vorsteuer vergessen']
},
{
  id:'BO2', modul:'M20', typ:'kette', stufe:1, titel:'Hilfsstoffe einkaufen und verbrauchen',
  tags:['Werkstoffe','bestandsorientiert','Verbrauch','Entnahmeschein'],
  text:'a) Wir kaufen Hilfsstoffe (Schrauben, Klebstoff) für 2.600,00 € netto zzgl. 19 % Umsatzsteuer und bezahlen sofort per Banküberweisung.<br>b) Laut Materialentnahmescheinen werden im Monat Hilfsstoffe für 1.950,00 € in die Fertigung gegeben.',
  bloecke:[
    {id:'einkauf', titel:'a) Einkauf buchen',
     muster:[{seite:'soll', konto:'2020', betrag:2600}, {seite:'soll', konto:'2600', betrag:494}, {seite:'haben', konto:'2800', betrag:3094}]},
    {id:'verbrauch', titel:'b) Verbrauch laut Entnahmescheinen buchen',
     muster:[{seite:'soll', konto:'6020', betrag:1950}, {seite:'haben', konto:'2020', betrag:1950}]}
  ],
  hinweise:['Einkauf: Zugang auf dem Bestandskonto 2020.', 'Verbrauch: Aufwand 6020 an Bestandskonto 2020.'],
  merke:'Der Verbrauch laut Entnahmeschein wird als Aufwand gebucht: 6020 Aufwendungen für Hilfsstoffe an 2020 Hilfsstoffe.',
  stolpersteine:['Verbrauch mit Umsatzsteuer gebucht','Verbrauch auf 4400 statt 2020']
},
{
  id:'BO3', modul:'M20', typ:'kette', stufe:2, titel:'Verbrauch über die Inventur ermitteln',
  tags:['Werkstoffe','bestandsorientiert','Inventur','Abschluss'],
  text:'Für das Konto 2000 Rohstoffe liegen zum Jahresende folgende Werte vor (Verbrauch wurde unterjährig nicht gebucht):'
    + '<table class="lager"><tr><td>Anfangsbestand 01.01.</td><td class="z">36.000,00 €</td></tr><tr><td>Zugänge (Einkäufe) im Jahr</td><td class="z">214.000,00 €</td></tr><tr><td>Schlussbestand laut Inventur 31.12.</td><td class="z">42.500,00 €</td></tr></table>'
    + 'Ermittle den Verbrauch, buche ihn und schließe die Konten ab.',
  bloecke:[
    {id:'verbr', titel:'Verbrauch ermitteln', typ:'rechnen',
     frage:'Wie hoch ist der Rohstoffverbrauch?',
     antwort:207500,
     tipp:'Verbrauch = Anfangsbestand + Zugänge − Schlussbestand.',
     rechenweg:'36.000,00 € + 214.000,00 € − 42.500,00 € = <b>207.500,00 €</b> Verbrauch.'},
    {id:'buchen', titel:'Verbrauch buchen',
     muster:[{seite:'soll', konto:'6000', betrag:207500}, {seite:'haben', konto:'2000', betrag:207500}]},
    {id:'sbk', titel:'Schlussbestand auf das SBK',
     muster:[{seite:'soll', konto:'8010', betrag:42500}, {seite:'haben', konto:'2000', betrag:42500}]},
    {id:'guv', titel:'Aufwandskonto über die GuV abschließen',
     muster:[{seite:'soll', konto:'8020', betrag:207500}, {seite:'haben', konto:'6000', betrag:207500}]}
  ],
  hinweise:['Was nicht mehr auf Lager liegt, wurde verbraucht.', 'Verbrauch: 6000 an 2000; Abschluss: SBK an 2000, GuV an 6000.'],
  merke:'Inventurmethode: Verbrauch = Anfangsbestand + Zugänge − Schlussbestand; 6000 an 2000, SBK an 2000, GuV an 6000.',
  stolpersteine:['Schlussbestand als Verbrauch gebucht','6000 über das SBK abgeschlossen']
},
{
  id:'BO4', modul:'M20', typ:'kette', stufe:2, titel:'Betriebsstoffe: Entnahmescheine und Inventurdifferenz',
  tags:['Werkstoffe','bestandsorientiert','Inventurdifferenz','Abschluss'],
  text:'Konto 2030 Betriebsstoffe (Schmierstoffe, Reinigungsmittel): Anfangsbestand 4.800,00 €; Einkäufe im Jahr 16.200,00 € (bereits gebucht); laut Materialentnahmescheinen verbraucht und gebucht 15.300,00 €. Die Inventur am 31.12. ergibt einen Schlussbestand von 5.100,00 €.',
  bloecke:[
    {id:'buch', titel:'Buchbestand ermitteln', typ:'rechnen',
     frage:'Wie hoch ist der Buchbestand vor der Inventur?',
     antwort:5700,
     tipp:'Anfangsbestand + Einkäufe − gebuchter Verbrauch.',
     rechenweg:'4.800,00 € + 16.200,00 € − 15.300,00 € = <b>5.700,00 €</b> Buchbestand.'},
    {id:'diff', titel:'Inventurdifferenz (Schwund) buchen',
     muster:[{seite:'soll', konto:'6030', betrag:600}, {seite:'haben', konto:'2030', betrag:600}]},
    {id:'sbk', titel:'Schlussbestand auf das SBK',
     muster:[{seite:'soll', konto:'8010', betrag:5100}, {seite:'haben', konto:'2030', betrag:5100}]},
    {id:'aufw', titel:'Gesamter Aufwand für Betriebsstoffe', typ:'rechnen',
     frage:'Wie hoch ist der gesamte Aufwand auf 6030, der in die GuV geht?',
     antwort:15900,
     tipp:'Verbrauch laut Entnahmescheinen plus Inventurdifferenz.',
     rechenweg:'15.300,00 € + 600,00 € = <b>15.900,00 €</b>.'}
  ],
  hinweise:['Der Buchbestand ist höher als der Inventurbestand – die Differenz ist zusätzlich verbraucht (Schwund).', 'Inventurdifferenz: 6030 an 2030.'],
  merke:'Inventur geht vor Buchbestand: Ist der Inventurbestand niedriger, wird die Differenz als zusätzlicher Verbrauch gebucht (60.. an 20..).',
  stolpersteine:['Differenz als Ertrag gebucht','Buchbestand statt Inventurbestand ins SBK']
},
{
  id:'BO5', modul:'M20', typ:'kette', stufe:3, titel:'Gleiches Ergebnis auf zwei Wegen',
  tags:['Werkstoffe','bestandsorientiert','aufwandsorientiert','Vergleich'],
  text:'Rohstoffe: Anfangsbestand 20.000,00 €, Einkäufe im Jahr 90.000,00 € netto, Schlussbestand laut Inventur 28.000,00 €.<br>Vergleiche die beiden Buchungsverfahren.',
  bloecke:[
    {id:'bo', titel:'Bestandsorientiert: Verbrauch am Jahresende buchen',
     muster:[{seite:'soll', konto:'6000', betrag:82000}, {seite:'haben', konto:'2000', betrag:82000}]},
    {id:'ao', titel:'Aufwandsorientiert: Die Einkäufe stehen schon auf 6000 – Bestandsveränderung (Mehrbestand) buchen',
     muster:[{seite:'soll', konto:'2000', betrag:8000}, {seite:'haben', konto:'6000', betrag:8000}]},
    {id:'aufw', titel:'Aufwand für Rohstoffe in der GuV', typ:'rechnen',
     frage:'Wie hoch ist der Rohstoffaufwand in der GuV (bei beiden Verfahren)?',
     antwort:82000,
     tipp:'Bestandsorientiert: AB + Zugänge − SB. Aufwandsorientiert: Einkäufe − Mehrbestand.',
     rechenweg:'Bestandsorientiert: 20.000 + 90.000 − 28.000 = 82.000; aufwandsorientiert: 90.000 − 8.000 Mehrbestand = <b>82.000,00 €</b> – derselbe Aufwand.'}
  ],
  hinweise:['Mehrbestand = Schlussbestand − Anfangsbestand = 8.000,00 €.', 'Aufwandsorientiert wird der Mehrbestand vom Aufwand abgezogen (2000 an 6000).'],
  merke:'Bestands- und aufwandsorientierte Buchung führen zum gleichen Aufwand: AB + Zugänge − SB = Einkäufe ± Bestandsveränderung.',
  stolpersteine:['Mehrbestand als Aufwand gebucht']
},
/* ---------- Modul · Abschreibung nach Leistungseinheiten ---------- */
{
  id:'LE0', modul:'M21', typ:'berechnung', stufe:0, titel:'Wann passt die Leistungsabschreibung?',
  tags:['Abschreibung','Leistungsabschreibung','Theorie'],
  text:'Abnutzbares Anlagevermögen wird planmäßig abgeschrieben: linear, geometrisch-degressiv oder nach Leistungseinheiten. Es gilt jeweils die aktuelle Rechtslage.',
  frage:'Für welches Anlagegut ist die Abschreibung nach Leistungseinheiten am besten geeignet?',
  optionen:[
    {text:'Ein Lkw, dessen Fahrleistung von Jahr zu Jahr stark schwankt.', richtig:true,
     weg:'Die Abschreibung folgt der tatsächlichen Abnutzung: AfA = Anschaffungskosten ÷ Gesamtleistung × Leistung des Jahres (z. B. km).'},
    {text:'Ein Grundstück.', fehler:'Grundstücke nutzen sich nicht ab und werden nicht planmäßig abgeschrieben.'},
    {text:'Ein Bürostuhl, der jeden Tag gleich genutzt wird.', fehler:'Bei gleichmäßiger Nutzung passt die lineare Abschreibung.'},
    {text:'Eine Software-Lizenz mit fester Laufzeit.', fehler:'Bei fester Laufzeit wird zeitanteilig (linear) abgeschrieben.'}
  ],
  hinweise:['Welche Methode folgt der tatsächlichen Nutzung?', 'Wo schwankt die Nutzung stark?'],
  merke:'Linear: AK ÷ ND; geometrisch-degressiv: % vom Restbuchwert; Leistungsabschreibung: AK ÷ Gesamtleistung × Jahresleistung – bei stark schwankender Nutzung.'
},
{
  id:'LE1', modul:'M21', typ:'kette', stufe:1, titel:'Lkw nach gefahrenen Kilometern abschreiben',
  tags:['Abschreibung','Leistungsabschreibung','Fuhrpark'],
  text:'Ein Lkw wurde Anfang Januar für 150.000,00 € angeschafft. Die geschätzte Gesamtfahrleistung beträgt 500.000 km. Im ersten Jahr fährt der Lkw 72.000 km. Abgeschrieben wird nach Leistungseinheiten.',
  bloecke:[
    {id:'satz', titel:'Abschreibung je Kilometer', typ:'rechnen',
     frage:'Wie hoch ist die Abschreibung je km?',
     antwort:0.3,
     tipp:'Anschaffungskosten ÷ Gesamtleistung.',
     rechenweg:'150.000,00 € ÷ 500.000 km = <b>0,30 €</b> je km.'},
    {id:'afa', titel:'Abschreibung zum 31.12. buchen',
     muster:[{seite:'soll', konto:'6500', betrag:21600}, {seite:'haben', konto:'0840', betrag:21600}]},
    {id:'rbw', titel:'Restbuchwert am 31.12.', typ:'rechnen',
     frage:'Wie hoch ist der Restbuchwert nach dem ersten Jahr?',
     antwort:128400,
     tipp:'Anschaffungskosten − Abschreibung.',
     rechenweg:'150.000,00 € − 21.600,00 € = <b>128.400,00 €</b>.'}
  ],
  hinweise:['AfA = 0,30 € × 72.000 km.', 'Buchung: 6500 Abschreibungen auf Sachanlagen an 0840 Fuhrpark.'],
  merke:'Leistungsabschreibung: AfA-Satz je Einheit = AK ÷ Gesamtleistung; Jahres-AfA = Satz × Leistung des Jahres.',
  stolpersteine:['Linear statt nach Leistung abgeschrieben']
},
{
  id:'LE2', modul:'M21', typ:'kette', stufe:2, titel:'Maschine nach Laufstunden über mehrere Jahre',
  tags:['Abschreibung','Leistungsabschreibung','Maschinen'],
  text:'Eine Maschine (Anschaffungskosten 96.000,00 €) soll insgesamt 24.000 Maschinenstunden laufen. Laufzeiten: 1. Jahr 5.000 h, 2. Jahr 7.500 h, 3. Jahr 6.000 h.',
  bloecke:[
    {id:'satz', titel:'Abschreibung je Maschinenstunde', typ:'rechnen',
     frage:'Wie hoch ist die Abschreibung je Stunde?', antwort:4,
     tipp:'96.000 € ÷ 24.000 h.', rechenweg:'96.000,00 € ÷ 24.000 h = <b>4,00 €</b> je Stunde.'},
    {id:'afa2', titel:'Abschreibung im 2. Jahr buchen',
     muster:[{seite:'soll', konto:'6500', betrag:30000}, {seite:'haben', konto:'0710', betrag:30000}]},
    {id:'rbw', titel:'Restbuchwert nach dem 3. Jahr', typ:'rechnen',
     frage:'Wie hoch ist der Restbuchwert am Ende des 3. Jahres?', antwort:22000,
     tipp:'Insgesamt 18.500 Stunden abgeschrieben.',
     rechenweg:'96.000 − 4 × (5.000 + 7.500 + 6.000) = 96.000 − 74.000 = <b>22.000,00 €</b>.'}
  ],
  hinweise:['Satz je Stunde × Laufzeit des Jahres.', 'Restbuchwert = AK − Summe der Abschreibungen.'],
  merke:'Bei der Leistungsabschreibung schwanken die Jahresbeträge mit der Nutzung; der Restbuchwert entspricht der noch verbleibenden Leistung × Satz.',
  stolpersteine:['Jahresleistung mit Gesamtleistung verwechselt']
},
{
  id:'LE3', modul:'M21', typ:'kette', stufe:3, titel:'Linear, degressiv oder nach Leistung?',
  tags:['Abschreibung','Leistungsabschreibung','geometrisch-degressiv','Vergleich'],
  text:'Ein Bagger kostet 200.000,00 €, Nutzungsdauer 5 Jahre, Gesamtleistung 10.000 Betriebsstunden. Im 1. Jahr läuft er 2.800 Stunden. Vergleiche die Abschreibung im 1. Jahr (Anschaffung im Januar; degressiver Satz 20 %).',
  bloecke:[
    {id:'lin', titel:'Lineare Abschreibung im 1. Jahr', typ:'rechnen', frage:'Lineare AfA im 1. Jahr?', antwort:40000,
     tipp:'AK ÷ Nutzungsdauer.', rechenweg:'200.000 € ÷ 5 = <b>40.000,00 €</b>.'},
    {id:'deg', titel:'Geometrisch-degressive Abschreibung im 1. Jahr', typ:'rechnen', frage:'Degressive AfA (20 %) im 1. Jahr?', antwort:40000,
     tipp:'20 % vom Buchwert zu Jahresbeginn.', rechenweg:'20 % von 200.000 € = <b>40.000,00 €</b> (ab dem 2. Jahr vom Restbuchwert).'},
    {id:'lei', titel:'Abschreibung nach Leistung im 1. Jahr', typ:'rechnen', frage:'Leistungs-AfA im 1. Jahr?', antwort:56000,
     tipp:'AK ÷ Gesamtleistung × Stunden des Jahres.', rechenweg:'200.000 € ÷ 10.000 h × 2.800 h = <b>56.000,00 €</b>.'},
    {id:'buch', titel:'Leistungs-AfA buchen',
     muster:[{seite:'soll', konto:'6500', betrag:56000}, {seite:'haben', konto:'0710', betrag:56000}]}
  ],
  hinweise:['Bei starker Nutzung im 1. Jahr ist die Leistungs-AfA höher als die lineare.', 'Degressiv: im 1. Jahr gleicher Betrag wie linear bei 20 % und 5 Jahren.'],
  merke:'Die Leistungsabschreibung bildet die tatsächliche Abnutzung ab – bei intensiver Nutzung ist sie höher als die lineare Abschreibung.',
  stolpersteine:['Degressiver Satz auf die Anschaffungskosten in jedem Jahr angewendet']
},

/* ---------- Modul · Personalaufwand buchen (M22, 30.10.2026; BK Wirtschaftsinformatik BPE 6.2) ---------- */
{
  id:'PA1', modul:'M22', typ:'kette', stufe:1, titel:'Gehaltsabrechnung buchen',
  tags:['Personal','Gehalt','Sozialversicherung','Lohnsteuer'],
  text:'Für die Sachbearbeiterin Lena Brandt liegt die Gehaltsabrechnung für März vor:'
    + '<table class="lager"><tr><td>Bruttogehalt</td><td class="z">3.200,00 €</td></tr><tr><td>Lohnsteuer und Kirchensteuer</td><td class="z">365,48 €</td></tr><tr><td>Arbeitnehmeranteil zur Sozialversicherung</td><td class="z">676,80 €</td></tr><tr><td>Nettogehalt (Überweisung)</td><td class="z">2.157,72 €</td></tr></table>'
    + 'Der Arbeitgeberanteil zur Sozialversicherung beträgt ebenfalls 676,80 €. Die einbehaltenen Abzüge werden erst später abgeführt.',
  bloecke:[
    {id:'gehalt', titel:'Gehaltszahlung buchen',
     muster:[{seite:'soll', konto:'6300', betrag:3200}, {seite:'haben', konto:'4830', betrag:365.48}, {seite:'haben', konto:'4840', betrag:676.80}, {seite:'haben', konto:'2800', betrag:2157.72}]},
    {id:'ag', titel:'Arbeitgeberanteil zur Sozialversicherung buchen',
     muster:[{seite:'soll', konto:'6400', betrag:676.80}, {seite:'haben', konto:'4840', betrag:676.80}]},
    {id:'aufwand', titel:'Personalaufwand', typ:'rechnen',
     frage:'Wie hoch ist der gesamte Personalaufwand des Unternehmens für Frau Brandt im März?',
     antwort:3876.80,
     tipp:'Aufwand sind das Bruttogehalt und der Arbeitgeberanteil.',
     rechenweg:'3.200,00 € Bruttogehalt + 676,80 € Arbeitgeberanteil = <b>3.876,80 €</b> Personalaufwand.'}
  ],
  hinweise:['Aufwand ist das Bruttogehalt (6300). Abzüge, die das Unternehmen noch abführen muss, sind Verbindlichkeiten.', 'Steuern an das Finanzamt: 4830; Sozialversicherung an die Krankenkasse: 4840.'],
  merke:'Gehaltsbuchung: 6300 Gehälter (brutto) an 4830 (Steuern), 4840 (AN-Anteil SV), 2800 (netto). Arbeitgeberanteil: 6400 an 4840.',
  stolpersteine:['Nettogehalt als Aufwand gebucht','Arbeitgeberanteil vom Gehalt abgezogen','Abzüge sofort über die Bank gebucht']
},
{
  id:'PA2', modul:'M22', typ:'kette', stufe:1, titel:'Abzüge an Finanzamt und Krankenkasse überweisen',
  tags:['Personal','Sozialversicherung','Lohnsteuer','Zahlungsausgang'],
  text:'Aus der Gehaltsabrechnung für März (Lena Brandt) stehen noch offen: Lohnsteuer und Kirchensteuer 365,48 € sowie Sozialversicherung (Arbeitnehmer- und Arbeitgeberanteil je 676,80 €). Beide Beträge werden per Banküberweisung beglichen.',
  bloecke:[
    {id:'sv', titel:'Wie viel geht an die Krankenkasse?', typ:'rechnen',
     frage:'Welchen Betrag überweisen wir an die Krankenkasse (Einzugsstelle)?',
     antwort:1353.60,
     tipp:'Die Krankenkasse erhält beide Anteile.',
     rechenweg:'676,80 € Arbeitnehmeranteil + 676,80 € Arbeitgeberanteil = <b>1.353,60 €</b>.'},
    {id:'zahl', titel:'Überweisungen buchen (ein Buchungssatz)',
     muster:[{seite:'soll', konto:'4830', betrag:365.48}, {seite:'soll', konto:'4840', betrag:1353.60}, {seite:'haben', konto:'2800', betrag:1719.08}]}
  ],
  hinweise:['Die Verbindlichkeiten aus der Gehaltsbuchung werden ausgeglichen.', 'Die Krankenkasse zieht den Gesamtbeitrag ein – Arbeitnehmer- und Arbeitgeberanteil.'],
  merke:'Abführung: 4830 Verbindlichkeiten gegenüber Finanzbehörden und 4840 Verbindlichkeiten gegenüber Sozialversicherungsträgern an 2800 Bank.',
  stolpersteine:['Nur den Arbeitnehmeranteil an die Krankenkasse überwiesen','Abführung noch einmal als Aufwand gebucht']
},
{
  id:'PA3', modul:'M22', typ:'kette', stufe:2, titel:'Lohn mit vermögenswirksamen Leistungen',
  tags:['Personal','Lohn','vermögenswirksame Leistungen','Sozialversicherung'],
  text:'Der Facharbeiter Timo Kessler spart monatlich 40,00 € vermögenswirksam in einem Bausparvertrag. Der Arbeitgeber zahlt dazu einen Zuschuss von 40,00 €, der im Bruttolohn enthalten ist. Lohnabrechnung für April:'
    + '<table class="lager"><tr><td>Bruttolohn (einschließlich 40,00 € Arbeitgeberzuschuss VL)</td><td class="z">2.850,00 €</td></tr><tr><td>Lohnsteuer und Kirchensteuer</td><td class="z">257,21 €</td></tr><tr><td>Arbeitnehmeranteil zur Sozialversicherung</td><td class="z">602,78 €</td></tr><tr><td>Sparrate VL (an die Bausparkasse)</td><td class="z">40,00 €</td></tr></table>'
    + 'Der Arbeitgeberanteil zur Sozialversicherung beträgt 602,78 €. Der Auszahlungsbetrag wird überwiesen; die Sparrate wird später an die Bausparkasse überwiesen.',
  bloecke:[
    {id:'netto', titel:'Auszahlungsbetrag', typ:'rechnen',
     frage:'Welcher Betrag wird Herrn Kessler überwiesen?',
     antwort:1950.01,
     tipp:'Brutto − Steuern − Sozialversicherung − Sparrate.',
     rechenweg:'2.850,00 € − 257,21 € − 602,78 € − 40,00 € = <b>1.950,01 €</b>.'},
    {id:'lohn', titel:'Lohnzahlung buchen',
     muster:[{seite:'soll', konto:'6200', betrag:2850}, {seite:'haben', konto:'4830', betrag:257.21}, {seite:'haben', konto:'4840', betrag:602.78}, {seite:'haben', konto:'4860', betrag:40}, {seite:'haben', konto:'2800', betrag:1950.01}]},
    {id:'ag', titel:'Arbeitgeberanteil zur Sozialversicherung buchen',
     muster:[{seite:'soll', konto:'6400', betrag:602.78}, {seite:'haben', konto:'4840', betrag:602.78}]},
    {id:'vl', titel:'Sparrate an die Bausparkasse überweisen',
     muster:[{seite:'soll', konto:'4860', betrag:40}, {seite:'haben', konto:'2800', betrag:40}]}
  ],
  hinweise:['Der Arbeitgeberzuschuss VL ist Teil des Bruttolohns (6200).', 'Die einbehaltene Sparrate schuldet das Unternehmen der Bausparkasse: 4860 Verbindlichkeiten aus vermögenswirksamen Leistungen.'],
  merke:'VL: Zuschuss des Arbeitgebers im Bruttolohn; die einbehaltene Sparrate steht bis zur Überweisung auf 4860.',
  stolpersteine:['Sparrate als Aufwand gebucht','Arbeitgeberzuschuss zusätzlich zum Bruttolohn gebucht','Sparrate nicht vom Auszahlungsbetrag abgezogen']
},
{
  id:'PA4', modul:'M22', typ:'kette', stufe:2, titel:'Gehaltsvorschuss verrechnen',
  tags:['Personal','Gehalt','Vorschuss','Forderungen an Mitarbeiter'],
  text:'a) Der Vertriebsmitarbeiter Can Yilmaz erhält am 10. Mai einen Gehaltsvorschuss von 600,00 € per Banküberweisung.<br>'
    + 'b) Die Gehaltsabrechnung für Mai: Bruttogehalt 3.600,00 €, Lohnsteuer und Kirchensteuer 493,83 €, Arbeitnehmeranteil zur Sozialversicherung 761,40 €. Der Vorschuss wird vollständig verrechnet, der Rest überwiesen.',
  bloecke:[
    {id:'vorschuss', titel:'a) Vorschuss buchen',
     muster:[{seite:'soll', konto:'2650', betrag:600}, {seite:'haben', konto:'2800', betrag:600}]},
    {id:'netto', titel:'b) Überweisungsbetrag', typ:'rechnen',
     frage:'Welcher Betrag wird Herrn Yilmaz Ende Mai überwiesen?',
     antwort:1744.77,
     tipp:'Netto = Brutto − Steuern − Sozialversicherung; davon geht der Vorschuss ab.',
     rechenweg:'3.600,00 € − 493,83 € − 761,40 € = 2.344,77 € netto; 2.344,77 € − 600,00 € Vorschuss = <b>1.744,77 €</b>.'},
    {id:'gehalt', titel:'b) Gehaltszahlung mit Verrechnung des Vorschusses buchen',
     muster:[{seite:'soll', konto:'6300', betrag:3600}, {seite:'haben', konto:'4830', betrag:493.83}, {seite:'haben', konto:'4840', betrag:761.40}, {seite:'haben', konto:'2650', betrag:600}, {seite:'haben', konto:'2800', betrag:1744.77}]}
  ],
  hinweise:['Der Vorschuss ist noch kein Aufwand, sondern eine Forderung an den Mitarbeiter (2650).', 'Bei der Gehaltsbuchung wird die Forderung ausgeglichen – sie steht im Haben.'],
  merke:'Vorschuss: 2650 Forderungen an Mitarbeiter an 2800. Verrechnung mit dem Gehalt: 2650 im Haben der Gehaltsbuchung.',
  stolpersteine:['Vorschuss als Gehaltsaufwand gebucht','Bruttogehalt um den Vorschuss gekürzt']
},

/* ---------- Vertiefung · Skonto ---------- */
{
  id:'V1a', modul:'V1', stufe:3, titel:'Eingangsrechnung mit Skontoabzug bezahlt',
  tags:['Skonto','Steuerkorrektur','Zahlungsverkehr'],
  text:'Wir begleichen die Rohstoffrechnung über {brutto} brutto (Warenwert {netto} netto) per Bank und ziehen dabei 2 % Skonto ab.',
  werte:{netto:2400, satz:0.19},
  formeln:{skontoNetto:'netto*0.02', skontoUst:'skontoNetto*satz', skontoBrutto:'skontoNetto+skontoUst', zahlung:'brutto-skontoBrutto'},
  soll:[{konto:'4400', wert:'brutto'}],
  haben:[{konto:'2800', wert:'zahlung'},{konto:'6003', wert:'skontoNetto'},{konto:'2600', wert:'skontoUst'}],
  hinweise:[
    'Die Verbindlichkeit verschwindet in voller Höhe – überwiesen wird aber weniger. Wo bleibt der Rest?',
    'Skonto ist ein nachträglicher Preisnachlass. Er mindert den Aufwand (6003 Skonto) und zugleich die abziehbare Vorsteuer. Beide Korrekturen stehen auf der Gegenseite ihrer normalen Buchungsseite. Der Skontobetrag ist ein Bruttobetrag und muss zerlegt werden.',
    'Im Soll steht 4400 Verbindlichkeiten a. LL mit {brutto}. Im Haben: Bank {zahlung}, dazu die Aufteilung des Skontos in {skontoNetto} netto und {skontoUst} Vorsteuerkorrektur.'
  ],
  merke:'Skonto immer in Netto und Steuer zerlegen. Das Skonto mindert den Aufwand, die Vorsteuerkorrektur steht im Haben.',
  stolpersteine:['Skonto brutto auf das Skontokonto','Vorsteuerkorrektur vergessen','Verbindlichkeit nur mit dem Zahlbetrag ausgebucht']
},
{
  id:'V1b', modul:'V1', stufe:3, titel:'Kunde zahlt unter Abzug von Skonto',
  tags:['Skonto','Steuerkorrektur','Verkauf'],
  text:'Ein Kunde begleicht unsere Ausgangsrechnung über {brutto} brutto (Warenwert {netto} netto) per Bank und zieht vereinbarungsgemäß 3 % Skonto ab.',
  werte:{netto:3600, satz:0.19},
  formeln:{skontoNetto:'netto*0.03', skontoUst:'skontoNetto*satz', zahlung:'brutto-skontoNetto-skontoUst'},
  soll:[{konto:'2800', wert:'zahlung'},{konto:'5002', wert:'skontoNetto'},{konto:'4800', wert:'skontoUst'}],
  haben:[{konto:'2400', wert:'brutto'}],
  hinweise:[
    'Die Forderung wird vollständig ausgebucht, es kommt aber weniger Geld an. Was passiert mit der Differenz?',
    'Spiegelbild zum Einkauf: Der gewährte Skonto mindert unseren Erlös (5002 Skonto) und die von uns geschuldete Umsatzsteuer. Beide Korrekturen stehen im Soll, also gegen ihre normale Seite.',
    'Im Haben steht nur 2400 Forderungen a. LL mit {brutto}. Im Soll: Bank {zahlung}, Skonto {skontoNetto} und Umsatzsteuerkorrektur {skontoUst}.'
  ],
  merke:'Gewährter Skonto mindert Erlös und Umsatzsteuer – beim Lieferanten spiegelbildlich Aufwand und Vorsteuer.',
  stolpersteine:['Erlöskonto statt Skontokonto','Umsatzsteuerkorrektur vergessen','Skonto brutto gebucht']
},

/* ---------- Vertiefung · Bezugskosten ---------- */
{
  id:'V2a', modul:'V2', stufe:3, titel:'Wareneingang mit Bezugskosten',
  tags:['Einkauf','Bezugskosten','Zusammengesetzter Satz','Umsatzsteuer'],
  text:'Eine Eingangsrechnung weist Rohstoffe über {netto} netto und gesondert berechnete Frachtkosten von {fracht} netto aus. Auf den gesamten Rechnungsbetrag werden 19 % Umsatzsteuer erhoben. Zahlung auf Ziel.',
  werte:{netto:5000, fracht:200, satz:0.19},
  formeln:{ust:'(netto+fracht)*satz', brutto:'netto+fracht+ust'},
  soll:[{konto:'2000', wert:'netto'},{konto:'6001', wert:'fracht'},{konto:'2600', wert:'ust'}],
  haben:[{konto:'4400', wert:'brutto'}],
  hinweise:[
    'Die Fracht gehört zu den Anschaffungskosten – aber wird sie im Schulkontenrahmen auf dasselbe Konto gebucht wie die Ware?',
    'Bezugskosten erhöhen die Anschaffungskosten, werden im Kontenrahmen aber auf einem eigenen Konto (6001 Bezugskosten) erfasst, damit sie auswertbar bleiben. Die Umsatzsteuer bemisst sich vom gesamten Nettobetrag, also Ware plus Fracht.',
    'Im Soll stehen drei Zeilen: 2000 Rohstoffe {netto}, 6001 Bezugskosten {fracht} und die Vorsteuer. Achte darauf, worauf sich die Steuer bemisst.'
  ],
  merke:'Bezugskosten laufen über ein eigenes Konto, die Vorsteuer bemisst sich aber vom gesamten Nettobetrag.',
  stolpersteine:['Fracht auf dem Warenkonto','Vorsteuer nur vom Warenwert','Fracht als sonstiger Aufwand']
}
];

window.POOL_DATEN_ma = () => [
/* ---------- Mathematik · GR Terme und Potenzen (Grundlagen für Lehrplaneinheit 1) ---------- */
...(() => {
  const T = ['Mathematik', 'Terme'];
  const NR = ['①', '②', '③', '④', '⑤'];
  return [
  blBau('rechnung', {id:'GR1', modul:'GR', stufe:1, titel:'Termwerte berechnen', tags:T.concat(['Einsetzen']), kopf:'Termwerte',
    text:W => `Berechne die Werte des Terms T(x) = ${maPoly([W[0].a, W[0].b, W[0].c])} für die angegebenen x-Werte.`,
    spalten:['', '', '', '', ''],
    zeilen:maAus('a', 'b', 'c').concat([{id:'x', t:'x', e:'ma'},
      {id:'y', t:'T(x)', kurz:'Termwert', e:'ma', f:'a * x * x + b * x + c', weg:w => `T(${maZ(w.x)}) = ${maK(w.a)} · ${maK(w.x)}² ${maVz(w.b)} · ${maK(w.x)} ${maVz(w.c)} = [y]`}]),
    ...maMit(maSaetze(101, 10, R => { const a = R.p([1, 2, -1, 0.5, 3, -2]), b = R.g(-5, 5), c = R.g(-6, 6); return b && c ? [-3, -0.5, 0, 2, 4].map(x => ({a, b, c, x})) : null; })),
    hinweise:['Negative Zahlen in Klammern einsetzen: (−3)² = 9.', 'Potenz vor Punkt vor Strich.'],
    merke:'Einsetzen: jedes x durch die Zahl in Klammern ersetzen<br>(−a)² ist positiv<br>erst Potenzen, dann Produkte, dann Summen.'}),
  blBau('rechnung', {id:'GR2', modul:'GR', stufe:1, titel:'Klammern ausmultiplizieren', tags:T.concat(['Ausmultiplizieren']), kopf:'x² + bx + c',
    text:W => `Multipliziere aus und bringe auf die Form x² + bx + c:<br>${W.map((w, i) => `${NR[i]} (x ${maVz(w.p)})(x ${maVz(w.q)})`).join('<br>')}`,
    spalten:['①', '②', '③'],
    zeilen:maAus('p', 'q').concat([
      {id:'b', t:'b', e:'ma', f:'p + q', weg:w => `(x ${maVz(w.p)})(x ${maVz(w.q)}) = x² ${maVz(w.q)}x ${maVz(w.p)}x ${maVz(w.p * w.q)}; b = ${maZ(w.p)} ${maVz(w.q)} = [b]`},
      {id:'c', t:'c', e:'ma', f:'p * q', weg:w => `c = ${maK(w.p)} · ${maK(w.q)} = [c]`}]),
    ...maMit(maSaetze(102, 10, R => { const s = [0, 1, 2].map(() => ({p:R.g(-9, 9), q:R.g(-9, 9)})); return s.every(w => w.p && w.q) ? s : null; })),
    hinweise:['Jedes Glied der ersten Klammer mit jedem Glied der zweiten multiplizieren.', 'Die beiden x-Glieder zusammenfassen.'],
    merke:'(x + p)(x + q) = x² + (p + q)x + p · q.'}),
  blBau('rechnung', {id:'GR3', modul:'GR', stufe:1, titel:'Binomische Formeln', tags:T.concat(['Binomische Formeln']), kopf:'ax² + bx + c',
    text:W => `Wende die binomischen Formeln an und bringe auf die Form ax² + bx + c:<br>① (${maFaktor(W[0].k)}x + ${maZ(W[0].p)})²<br>② (${maFaktor(W[1].k)}x − ${maZ(W[1].p)})²<br>③ (${maFaktor(W[2].k)}x + ${maZ(W[2].p)})(${maFaktor(W[2].k)}x − ${maZ(W[2].p)})`,
    spalten:['① 1. Formel', '② 2. Formel', '③ 3. Formel'],
    zeilen:maAus('k', 'p', 't').concat([
      {id:'a', t:'a', e:'ma', f:'k * k', weg:w => `a = ${maK(w.k)}² = [a]`},
      {id:'b', t:'b', e:'ma', fs:['2 * k * p', '0 - 2 * k * p', '0'], weg:w => w.t === 2 ? 'kein gemischtes Glied: b = [b]' : `b = ${w.t ? '−' : ''}2 · ${maZ(w.k)} · ${maZ(w.p)} = [b]`},
      {id:'c', t:'c', e:'ma', fs:['p * p', 'p * p', '0 - p * p'], weg:w => w.t === 2 ? `c = −${maZ(w.p)}² = [c]` : `c = ${maZ(w.p)}² = [c]`}]),
    ...maMit(maSaetze(103, 10, R => [0, 1, 2].map(t => ({k:R.p([1, 1, 2, 3, 0.5]), p:R.g(1, 9), t})))),
    hinweise:['(a + b)² = a² + 2ab + b²; (a − b)² = a² − 2ab + b²; (a + b)(a − b) = a² − b².', 'Das erste Glied ist hier kx, also (kx)² = k²x².'],
    merke:'Binomische Formeln: (a ± b)² = a² ± 2ab + b²; (a + b)(a − b) = a² − b² – das gemischte Glied 2ab nicht vergessen.'}),
  blBau('rechnung', {id:'GR4', modul:'GR', stufe:2, titel:'Produktform ausmultiplizieren (3. Grad)', tags:T.concat(['Ausmultiplizieren', 'Polynom']), kopf:'Koeffizienten',
    text:W => `Multipliziere ${maFaktor(W[0].a)}${maFakt(W[0].r1)}${maFakt(W[0].r2)}${maFakt(W[0].r3)} aus und gib die Koeffizienten von a₃x³ + a₂x² + a₁x + a₀ an.`,
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'r1', 'r2', 'r3').concat([
      {id:'k3', t:'a₃', e:'ma', f:'a', weg:w => `erst zwei Klammern: ${maFakt(w.r1)}${maFakt(w.r2)} = ${maPoly([1, -(w.r1 + w.r2), w.r1 * w.r2])}; dann mal ${maFakt(w.r3)} und mal ${maZ(w.a)}: a₃ = [k3]`},
      {id:'k2', t:'a₂', e:'ma', f:'0 - a * (r1 + r2 + r3)', weg:w => `a₂ = [k2]`},
      {id:'k1', t:'a₁', e:'ma', f:'a * (r1 * r2 + r1 * r3 + r2 * r3)', weg:w => `a₁ = [k1]`},
      {id:'k0', t:'a₀', e:'ma', f:'0 - a * r1 * r2 * r3', weg:w => `a₀ = [k0] → f(x) = ${maPoly([w.a, -w.a * (w.r1 + w.r2 + w.r3), w.a * (w.r1 * w.r2 + w.r1 * w.r3 + w.r2 * w.r3), -w.a * w.r1 * w.r2 * w.r3])}`}]),
    ...maMit(maSaetze(104, 10, R => { const a = R.p([1, 2, -1, 0.5, -0.5]), r = [R.g(-4, 4), R.g(-4, 4), R.g(-4, 4)]; return new Set(r).size === 3 ? [{a, r1:r[0], r2:r[1], r3:r[2]}] : null; })),
    hinweise:['Zuerst zwei Klammern ausmultiplizieren, das Ergebnis dann mit der dritten.', 'Gleiche Potenzen zusammenfassen, zum Schluss mit dem Vorfaktor multiplizieren.'],
    merke:'a(x − r₁)(x − r₂)(x − r₃): a₃ = a; a₀ = −a · r₁r₂r₃ – die Produktform zeigt die Nullstellen, die ausmultiplizierte Form den y-Achsenabschnitt a₀.'}),
  blBau('rechnung', {id:'GR5', modul:'GR', stufe:1, titel:'Potenzgesetze anwenden', tags:T.concat(['Potenzgesetze']), kopf:'Ergebnis als xⁿ',
    text:W => `Vereinfache zu einer Potenz xⁿ und gib den Exponenten n an:<br>① x<sup>${maZ(W[0].m)}</sup> · x<sup>${maZ(W[0].n)}</sup><br>② x<sup>${maZ(W[1].m)}</sup> : x<sup>${maZ(W[1].n)}</sup><br>③ (x<sup>${maZ(W[2].m)}</sup>)<sup>${maZ(W[2].n)}</sup><br>④ x<sup>${maZ(W[3].m)}</sup> · x<sup>${maZ(W[3].n)}</sup> : x<sup>${maZ(W[3].k)}</sup>`,
    spalten:['①', '②', '③', '④'],
    zeilen:maAus('m', 'n', 'k').concat([{id:'e', t:'Exponent n', kurz:'n', e:'ma', fs:['m + n', 'm - n', 'm * n', 'm + n - k'],
      weg:w => `n = [e]`}]),
    ...maMit(maSaetze(105, 10, R => [0, 1, 2, 3].map(() => ({m:R.g(-4, 7), n:R.g(-3, 5), k:R.g(-2, 6)})))),
    hinweise:['Gleiche Basis multiplizieren: Exponenten addieren; dividieren: subtrahieren.', 'Potenz potenzieren: Exponenten multiplizieren.'],
    merke:'xᵐ · xⁿ = xᵐ⁺ⁿ<br>xᵐ : xⁿ = xᵐ⁻ⁿ<br>(xᵐ)ⁿ = xᵐ·ⁿ<br>x⁻ⁿ = 1 ÷ xⁿ<br>x⁰ = 1.'}),
  blBau('rechnung', {id:'GR6', modul:'GR', stufe:2, titel:'Potenzen mit negativen und gebrochenen Exponenten', tags:T.concat(['Potenzen', 'Wurzeln']), kopf:'Wert',
    text:W => `Berechne ohne Taschenrechner (als Dezimalzahl):<br>${W.map((w, i) => `${NR[i]} ${maZ(w.b)}<sup>${w.t}</sup>`).join('<br>')}`,
    spalten:['①', '②', '③', '④'],
    zeilen:maAus('b', 'L', 't').concat([{id:'v', t:'Wert', e:'ma', f:'L', weg:w => `= [v]`}]),
    ...maMit(maSaetze(106, 10, R => {
      const t1 = R.p([[2, 3], [2, 2], [4, 2], [10, 2], [5, 1], [2, 1]]), t2 = R.p([[8, 3], [27, 3], [16, 2], [25, 2], [16, 4], [9, 2]]), t3 = R.p([[8, 3, 2], [16, 4, 3], [4, 2, 3], [27, 3, 2], [9, 2, 3]]), t4 = R.p([[4, 2], [9, 2], [16, 4], [8, 3], [25, 2]]);
      return [{b:t1[0], t:'−' + t1[1], L:maR(Math.pow(t1[0], -t1[1]))}, {b:t2[0], t:'1/' + t2[1], L:maR(Math.pow(t2[0], 1 / t2[1]))},
              {b:t3[0], t:t3[2] + '/' + t3[1], L:maR(Math.pow(t3[0], t3[2] / t3[1]))}, {b:t4[0], t:'−1/' + t4[1], L:maR(Math.pow(t4[0], -1 / t4[1]))}]; })),
    hinweise:['a⁻ⁿ = 1 ÷ aⁿ.', 'a<sup>1/n</sup> = n-te Wurzel aus a; a<sup>m/n</sup> = (n-te Wurzel aus a)ᵐ.'],
    merke:'a⁻ⁿ = 1/aⁿ<br>a<sup>1/n</sup> = ⁿ√a<br>a<sup>m/n</sup> = (ⁿ√a)ᵐ – erst die Wurzel ziehen, dann potenzieren.'}),
  {
    id:'GR7', modul:'GR', typ:'berechnung', mehrfach:true, stufe:0, titel:'Typische Fehler beim Umformen',
    tags:T.concat(['Theorie']),
    text:'Beim Umformen von Termen passieren immer wieder dieselben Fehler.',
    frage:'Welche Umformungen sind richtig?',
    optionen:[
      {text:'(x − 3)² = x² − 6x + 9', richtig:true, weg:'2. binomische Formel'},
      {text:'2x² + 3x² = 5x²', richtig:true, weg:'gleiche Potenzen addieren'},
      {text:'x³ · x² = x⁵', richtig:true, weg:'Exponenten addieren'},
      {text:'x⁻² = 1 ÷ x²', richtig:true, weg:'negativer Exponent'},
      {text:'(x − 3)² = x² − 9', fehler:'Das gemischte Glied −6x fehlt.'},
      {text:'(x²)³ = x⁵', fehler:'Potenzieren: Exponenten multiplizieren → x⁶.'},
      {text:'3x² · 2x = 6x²', fehler:'x² · x = x³ → 6x³.'},
      {text:'x² + x³ = x⁵', fehler:'Verschiedene Potenzen lassen sich nicht zusammenfassen.'}
    ],
    hinweise:['Jede Umformung mit einer Zahl testen, z. B. x = 2.'],
    merke:'Probe mit einer Zahl entlarvt falsche Umformungen<br>Summen verschiedener Potenzen bleiben stehen<br>binomische Formeln haben drei Glieder.'
  },
  ]; })(),
/* ---------- Mathematik · QF Quadratische Funktionen (Parabeln) ---------- */
...(() => {
  const T = ['Mathematik', 'Funktionen', 'Parabel'];
  return [
  blBau('rechnung', {id:'QF1', modul:'QF', stufe:1, titel:'Scheitelpunkt aus der Scheitelform', tags:T.concat(['Scheitelpunkt']), kopf:'Scheitelpunkt',
    text:W => `Gib den Scheitelpunkt S(x<sub>S</sub> | y<sub>S</sub>) der Parabeln an und entscheide, wie sie geöffnet sind:<br>${W.map((w, i) => `<i>f</i><sub>${i + 1}</sub>(x) = ${maScheitel(w.a, w.d, w.e)}`).join('<br>')}`,
    spalten:['f₁', 'f₂', 'f₃'],
    zeilen:maAus('a', 'd', 'e').concat([
      {id:'xs', t:'x<sub>S</sub>', kurz:'x-Wert', e:'ma', f:'d', weg:w => `${maScheitel(w.a, w.d, w.e)}: in der Klammer steht x ${maVz(-w.d)} → x<sub>S</sub> = [xs]`},
      {id:'ys', t:'y<sub>S</sub>', kurz:'y-Wert', e:'ma', f:'e', weg:w => `Summand hinter der Klammer → y<sub>S</sub> = [ys]`}]),
    ...maMit(maSaetze(201, 10, R => [0, 1, 2].map(() => ({a:R.p([1, -1, 2, -2, 0.5, -0.5, 3]), d:R.g(-5, 5), e:R.g(-6, 6)})))),
    wahl:[0, 1, 2].map(k => ({id:'o' + k, t:`f${'₁₂₃'[k]}: Die Parabel ist nach`, opts:['oben geöffnet', 'unten geöffnet'], r:`a@${k} > 0 ? 0 : 1`})),
    hinweise:['Scheitelform f(x) = a(x − d)² + e → S(d | e).', 'Vorsicht: (x + 3)² = (x − (−3))² → x<sub>S</sub> = −3.', 'a > 0: nach oben geöffnet, a < 0: nach unten.'],
    merke:'f(x) = a(x − d)² + e: Scheitel S(d | e); a > 0 nach oben, a < 0 nach unten geöffnet; |a| > 1 schmaler, |a| < 1 breiter als die Normalparabel.'}),
  blBau('rechnung', {id:'QF2', modul:'QF', stufe:2, titel:'Scheitelpunkt mit quadratischer Ergänzung', tags:T.concat(['Scheitelpunkt', 'quadratische Ergänzung']), kopf:'Scheitelpunkt',
    text:W => `Bestimme den Scheitelpunkt der Parabel zu ${maF('f', maPoly([W[0].a, W[0].b, W[0].c]))} (quadratische Ergänzung oder x<sub>S</sub> = −b ÷ (2a)).`,
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'c').concat([
      {id:'xs', t:'x<sub>S</sub>', kurz:'x<sub>S</sub>', e:'ma', f:'0 - b / (2 * a)', weg:w => `${w.a !== 1 ? maZ(w.a) + ' ausklammern: ' + maZ(w.a) + '(x² ' + maVz(w.b / w.a) + 'x) ' + maVz(w.c) + '; ' : ''}ergänzen mit (${maZ(w.b / w.a)} ÷ 2)² = ${maZ(Math.pow(w.b / w.a / 2, 2))} → ${maF('f', maScheitel(w.a, -w.b / (2 * w.a), w.c - w.b * w.b / (4 * w.a)))}; x<sub>S</sub> = [xs]`},
      {id:'ys', t:'y<sub>S</sub>', kurz:'y<sub>S</sub>', e:'ma', f:'c - b * b / (4 * a)', weg:w => `y<sub>S</sub> = f(${maZ(-w.b / (2 * w.a))}) = [ys]`}]),
    ...maMit(maSaetze(202, 12, R => { const a = R.p([1, 1, 1, 2, -1, -2, 0.5]), d = R.g(-4, 4), e = R.g(-8, 8); return d ? [{a, b:-2 * a * d, c:a * d * d + e}] : null; })),
    wahl:[{id:'w', t:'Der Scheitelpunkt ist der', opts:['tiefste Punkt der Parabel', 'höchste Punkt der Parabel'], r:'a@0 > 0 ? 0 : 1'}],
    hinweise:['Gegebenenfalls a ausklammern.', 'Ergänzen mit (halber Koeffizient von x)² und wieder abziehen.', 'Kontrolle: x<sub>S</sub> = −b ÷ (2a), y<sub>S</sub> = f(x<sub>S</sub>).'],
    merke:'Quadratische Ergänzung: x² + px = (x + p/2)² − (p/2)²; Kurzweg: x<sub>S</sub> = −b ÷ (2a), y<sub>S</sub> = f(x<sub>S</sub>).'}),
  blBau('rechnung', {id:'QF3', modul:'QF', stufe:2, titel:'Nullstellen mit der abc-Formel', tags:T.concat(['Nullstellen', 'abc-Formel']), kopf:'Nullstellen',
    text:W => `Berechne die Nullstellen von ${maF('f', maPoly([W[0].a, W[0].b, W[0].c]))} mit der abc-Formel (auf zwei Nachkommastellen, x₁ < x₂).`,
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'c').concat([
      {id:'D', t:'Diskriminante D = b² − 4ac', kurz:'D', e:'ma', f:'b * b - 4 * a * c', weg:w => `D = ${maK(w.b)}² − 4 · ${maK(w.a)} · ${maK(w.c)} = [D] > 0 → zwei Nullstellen`},
      {id:'x1', t:'x₁', e:'ma', f:'min((0 - b - wurzel(D)) / (2 * a), (0 - b + wurzel(D)) / (2 * a))', weg:w => `x = (${maZ(-w.b)} ± √${maZ(w.b * w.b - 4 * w.a * w.c)}) ÷ ${maK(2 * w.a)} → x₁ ≈ [x1]`},
      {id:'x2', t:'x₂', e:'ma', f:'max((0 - b - wurzel(D)) / (2 * a), (0 - b + wurzel(D)) / (2 * a))', weg:w => `x₂ ≈ [x2]`}]),
    ...maMit(maSaetze(203, 12, R => { const a = R.p([1, 2, -1, 0.5, 3, -2]), b = R.g(-6, 6), c = R.g(-6, 6); return b * b - 4 * a * c > 0 && c ? [{a, b, c}] : null; })),
    hinweise:['abc-Formel: x = (−b ± √(b² − 4ac)) ÷ (2a).', 'Erst die Diskriminante D = b² − 4ac berechnen.', 'Bei a = 1 geht auch die pq-Formel.'],
    merke:'ax² + bx + c = 0: x = (−b ± √D) ÷ (2a) mit D = b² − 4ac; D > 0 zwei, D = 0 eine, D < 0 keine Lösung.'}),
  blBau('rechnung', {id:'QF4', modul:'QF', stufe:2, titel:'Anzahl der Nullstellen über die Diskriminante', tags:T.concat(['Diskriminante', 'Nullstellen']), kopf:'Diskriminante',
    text:W => `Berechne die Diskriminante D = b² − 4ac und entscheide, wie viele Nullstellen die Funktion hat:<br>${W.map((w, i) => `<i>f</i><sub>${i + 1}</sub>(x) = ${maPoly([w.a, w.b, w.c])}`).join('<br>')}`,
    spalten:['f₁', 'f₂', 'f₃', 'f₄'],
    zeilen:maAus('a', 'b', 'c').concat([{id:'D', t:'D = b² − 4ac', kurz:'D', e:'ma', f:'b * b - 4 * a * c', weg:w => `D = ${maK(w.b)}² − 4 · ${maK(w.a)} · ${maK(w.c)} = [D]`}]),
    ...maMit(maSaetze(204, 12, R => { const s = [0, 1, 2, 3].map(() => { const a = R.p([1, -1, 2, -2, 0.5]), d = R.g(-3, 3), e = R.p([-4, -2, -1, 0, 1, 3, 5]); return {a, b:-2 * a * d, c:a * d * d + e}; });
      const z = s.map(w => Math.sign(w.b * w.b - 4 * w.a * w.c)); return new Set(z).size === 3 ? s : null; })),
    wahl:[0, 1, 2, 3].map(k => ({id:'n' + k, t:`f${'₁₂₃₄'[k]} hat`, opts:['zwei Nullstellen', 'eine Nullstelle', 'keine Nullstelle'], r:`b@${k} * b@${k} - 4 * a@${k} * c@${k} > 0 ? 0 : (b@${k} * b@${k} - 4 * a@${k} * c@${k} == 0 ? 1 : 2)`})),
    hinweise:['D > 0: zwei Nullstellen; D = 0: eine (Berührpunkt); D < 0: keine.'],
    merke:'Die Diskriminante D = b² − 4ac (unter der Wurzel der abc-Formel) entscheidet über die Anzahl der Lösungen.'}),
  blBau('zuordnung', {id:'QF5', modul:'QF', stufe:2, titel:'Scheitelpunkte zuordnen', tags:T.concat(['Scheitelpunkt']),
    text:'Welchen Scheitelpunkt hat die Parabel? (Teilweise erst umformen.)', kategorien:['S(2 | 1)', 'S(−2 | 1)', 'S(2 | −1)', 'S(−2 | −1)'], anzahl:8,
    faelle:[
      {t:'f(x) = (x − 2)² + 1', k:0}, {t:'f(x) = x² − 4x + 5', k:0, weg:'= (x − 2)² + 1'}, {t:'f(x) = −3(x − 2)² + 1', k:0}, {t:'f(x) = −x² + 4x − 3', k:0, weg:'= −(x − 2)² + 1'},
      {t:'f(x) = (x + 2)² + 1', k:1}, {t:'f(x) = x² + 4x + 5', k:1, weg:'= (x + 2)² + 1'}, {t:'f(x) = 0,5(x + 2)² + 1', k:1},
      {t:'f(x) = (x − 2)² − 1', k:2}, {t:'f(x) = x² − 4x + 3', k:2, weg:'= (x − 2)² − 1'}, {t:'f(x) = 2x² − 8x + 7', k:2, weg:'= 2(x − 2)² − 1'},
      {t:'f(x) = (x + 2)² − 1', k:3}, {t:'f(x) = x² + 4x + 3', k:3, weg:'= (x + 2)² − 1'}, {t:'f(x) = −(x + 2)² − 1', k:3}
    ],
    hinweise:['Scheitelform direkt ablesen: a(x − d)² + e → S(d | e).', 'Normalform: x<sub>S</sub> = −b ÷ (2a), dann y<sub>S</sub> = f(x<sub>S</sub>).'],
    merke:'Scheitel ablesen: (x − d) → x<sub>S</sub> = d, (x + d) → x<sub>S</sub> = −d; Normalform erst umformen oder x<sub>S</sub> = −b ÷ (2a).'}),
  blBau('rechnung', {id:'QF6', modul:'QF', stufe:3, titel:'Parabelgleichung aus Scheitel und Punkt', tags:T.concat(['Funktionsterm bestimmen']), kopf:'Funktionsterm',
    text:W => `Eine Parabel hat den Scheitelpunkt S(${maZ(W[0].d)} | ${maZ(W[0].e)}) und verläuft durch P(${maZ(W[0].px)} | ${maZ(W[0].py)}). Bestimme den Funktionsterm in der Form f(x) = ax² + bx + c.`,
    spalten:['Ergebnis'],
    zeilen:maAus('d', 'e', 'px', 'py').concat([
      {id:'aa', t:'a', e:'ma', f:'(py - e) / ((px - d) * (px - d))', weg:w => `Ansatz f(x) = a · ${maFakt(w.d)}² ${maVz(w.e)}; P einsetzen: ${maZ(w.py)} = a · ${maK(w.px - w.d)}² ${maVz(w.e)} → a = ${maZ(w.py - w.e)} ÷ ${maZ(Math.pow(w.px - w.d, 2))} = [aa]`},
      {id:'bb', t:'b', e:'ma', f:'0 - 2 * aa * d', weg:w => `ausmultiplizieren: b = −2 · a · ${maK(w.d)} = [bb]`},
      {id:'cc', t:'c', e:'ma', f:'aa * d * d + e', weg:w => `c = a · ${maK(w.d)}² ${maVz(w.e)} = [cc]`}]),
    ...maMit(maSaetze(205, 12, R => { const a = R.p([1, -1, 2, -2, 0.5, -0.5, 3]), d = R.g(-4, 4), e = R.g(-6, 6), px = d + R.p([-2, -1, 1, 2, 3]); return [{d, e, px, py:a * (px - d) * (px - d) + e}]; })),
    hinweise:['Ansatz in Scheitelform: f(x) = a(x − d)² + e.', 'Punkt P einsetzen und nach a auflösen.', 'Ausmultiplizieren: a(x − d)² + e = ax² − 2adx + ad² + e.'],
    merke:'Scheitel und ein Punkt bestimmen eine Parabel: Ansatz f(x) = a(x − x<sub>S</sub>)² + y<sub>S</sub>, Punktprobe liefert a.'}),
  ]; })(),
/* ---------- Mathematik · FB Potenzfunktionen und Funktionsbegriff ---------- */
...(() => {
  const T = ['Mathematik', 'Funktionen'];
  const hoch = n => MA_HOCH[n] || '<sup>' + n + '</sup>';
  return [
  {
    id:'FB1', modul:'FB', typ:'berechnung', mehrfach:true, stufe:0, titel:'Was ist eine Funktion?',
    tags:T.concat(['Funktionsbegriff', 'Theorie']),
    text:'Eine <b>Funktion</b> ordnet jedem Element x der Definitionsmenge D <b>genau einen</b> Funktionswert f(x) zu. Die Menge aller Funktionswerte heißt Wertemenge W.<br>Schreibweisen: f: x ↦ e<sup>x</sup>; x ∈ ℝ oder f mit f(x) = e<sup>x</sup>; x ∈ [1; 5].<br>Darstellungen: verbal, als Wertetabelle, als Schaubild, als Term.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'f: x ↦ x²; x ∈ [−1; 3] bedeutet: Es werden nur x-Werte von −1 bis 3 eingesetzt.', richtig:true, weg:'eingeschränkte Definitionsmenge'},
      {text:'Die Wertemenge von f(x) = x² (x ∈ ℝ) ist W = [0; ∞[.', richtig:true, weg:'Quadrate sind nie negativ'},
      {text:'Die Wertemenge von f(x) = e<sup>x</sup> (x ∈ ℝ) ist W = ]0; ∞[.', richtig:true, weg:'e<sup>x</sup> > 0, wird aber nie 0'},
      {text:'Ein Kreis im Koordinatensystem ist kein Schaubild einer Funktion.', richtig:true, weg:'zu einem x gehören zwei y-Werte'},
      {text:'Eine Wertetabelle mit zwei verschiedenen y-Werten zum selben x kann zu einer Funktion gehören.', fehler:'Zu jedem x gehört genau ein Funktionswert.'},
      {text:'Zwei verschiedene x-Werte dürfen nicht denselben Funktionswert haben.', fehler:'Doch, z. B. f(−2) = f(2) = 4 bei f(x) = x².'}
    ],
    hinweise:['Senkrechtentest: Jede senkrechte Linie schneidet ein Funktionsschaubild höchstens einmal.'],
    merke:'Funktion: jedem x aus D genau ein f(x)<br>Definitionsmenge D = erlaubte x-Werte<br>Wertemenge W = alle angenommenen y-Werte.'
  },
  blBau('zuordnung', {id:'FB2', modul:'FB', stufe:1, titel:'Darstellungen übersetzen', tags:T.concat(['Funktionsbegriff', 'Darstellung']),
    text:'Welcher Funktionsterm passt zur Beschreibung?', kategorien:['f(x) = 2x²', 'f(x) = (2x)²', 'f(x) = x² + 2', 'f(x) = 2x + 2'], anzahl:7,
    faelle:[
      {t:'Jeder Zahl wird das Doppelte ihres Quadrats zugeordnet.', k:0}, {t:'Wertetabelle: f(1) = 2, f(2) = 8, f(3) = 18', k:0},
      {t:'Jeder Zahl wird das Quadrat ihres Doppelten zugeordnet.', k:1}, {t:'Wertetabelle: f(1) = 4, f(2) = 16, f(3) = 36', k:1},
      {t:'Jede Zahl wird quadriert, dann wird 2 addiert.', k:2}, {t:'Normalparabel um 2 nach oben verschoben', k:2}, {t:'Wertetabelle: f(0) = 2, f(1) = 3, f(2) = 6', k:2},
      {t:'Gerade mit Steigung 2 durch (0 | 2)', k:3}, {t:'Wertetabelle: f(0) = 2, f(1) = 4, f(2) = 6', k:3}, {t:'Jede Zahl wird verdoppelt, dann wird 2 addiert.', k:3}
    ],
    hinweise:['Reihenfolge der Rechenschritte beachten: erst quadrieren oder erst verdoppeln?', 'Wertetabelle: zwei x-Werte einsetzen und vergleichen.'],
    merke:'2x² (erst quadrieren, dann verdoppeln) ist nicht (2x)² = 4x² (erst verdoppeln, dann quadrieren).'}),
  blBau('zuordnung', {id:'FB3', modul:'FB', stufe:1, titel:'Potenzfunktionen und ihre Schaubilder', tags:T.concat(['Potenzfunktion']),
    text:'Wie sieht das Schaubild der Potenzfunktion f(x) = a · xⁿ aus?', kategorien:['symmetrisch zur y-Achse, nach oben geöffnet', 'symmetrisch zur y-Achse, nach unten geöffnet', 'punktsymmetrisch, links unten nach rechts oben', 'punktsymmetrisch, links oben nach rechts unten'], anzahl:8,
    faelle:[
      {t:'f(x) = x⁴', k:0, weg:'n gerade, a > 0'}, {t:'f(x) = 0,5x⁶', k:0}, {t:'f(x) = 3x²', k:0},
      {t:'f(x) = −x²', k:1, weg:'n gerade, a < 0'}, {t:'f(x) = −2x⁴', k:1}, {t:'f(x) = −0,1x⁶', k:1},
      {t:'f(x) = x³', k:2, weg:'n ungerade, a > 0'}, {t:'f(x) = 3x⁵', k:2}, {t:'f(x) = x', k:2},
      {t:'f(x) = −x³', k:3, weg:'n ungerade, a < 0'}, {t:'f(x) = −0,5x⁵', k:3}, {t:'f(x) = −4x', k:3}
    ],
    hinweise:['n gerade: Verlauf wie eine Parabel, symmetrisch zur y-Achse.', 'n ungerade: Verlauf wie x³, punktsymmetrisch zum Ursprung.', 'a < 0 spiegelt an der x-Achse.'],
    merke:'f(x) = a · xⁿ: n gerade → y-Achsen-symmetrisch, gemeinsame Punkte von xⁿ: (−1 | 1), (0 | 0), (1 | 1); n ungerade → punktsymmetrisch, Punkte (−1 | −1), (0 | 0), (1 | 1).'}),
  blBau('rechnung', {id:'FB4', modul:'FB', stufe:2, titel:'Potenzfunktionen: Werte und Eigenschaften', tags:T.concat(['Potenzfunktion', 'Wertetabelle']), kopf:'Wertetabelle',
    text:W => `Gegeben ist die Potenzfunktion f mit f(x) = ${maFaktor(W[0].a)}x${hoch(W[0].n)}. Berechne die Funktionswerte und beschreibe das Schaubild.`,
    spalten:['', '', '', '', ''],
    zeilen:maAus('a', 'n', 'L').concat([{id:'x', t:'x', e:'ma'},
      {id:'y', t:'f(x)', kurz:'Funktionswert', e:'ma', f:'L', weg:w => `f(${maZ(w.x)}) = ${maZ(w.a)} · ${maK(w.x)}${hoch(w.n)} = [y]`}]),
    ...maMit(maSaetze(801, 12, R => { const a = R.p([1, -1, 2, -2, 0.5, -0.5, 3]), n = R.g(2, 5); return [-2, -1, 0.5, 1, 2].map(x => ({a, n, x, L:maR(a * Math.pow(x, n))})); })),
    wahl:[{id:'w', t:'Das Schaubild ist', opts:['symmetrisch zur y-Achse', 'punktsymmetrisch zum Ursprung'], r:'n@0 % 2 == 0 ? 0 : 1'},
          {id:'w2', t:'Für x → +∞ gilt', opts:['f(x) → +∞', 'f(x) → −∞'], r:'a@0 > 0 ? 0 : 1'}],
    hinweise:['Negative Zahl hoch gerader Exponent ist positiv, hoch ungerader Exponent negativ.', 'f(−x) mit f(x) vergleichen.'],
    merke:'(−x)ⁿ = xⁿ bei geradem n, (−x)ⁿ = −xⁿ bei ungeradem n – daraus folgt die Symmetrie.'}),
  blBau('rechnung', {id:'FB5', modul:'FB', stufe:2, titel:'Wertemenge bei eingeschränkter Definitionsmenge', tags:T.concat(['Definitionsmenge', 'Wertemenge']), kopf:'Wertemenge',
    text:W => { const w = W[0]; return `Gegeben ist f mit ${maF('f', maScheitel(w.a, w.d, w.e))}; x ∈ [${maZ(w.l)}; ${maZ(w.r)}]. Bestimme den kleinsten und den größten Funktionswert und damit die Wertemenge W = [y<sub>min</sub>; y<sub>max</sub>].`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'd', 'e', 'l', 'r', 'Lmin', 'Lmax').concat([
      {id:'fl', t:'Funktionswert am linken Rand', kurz:'f(links)', e:'ma', f:'a * (l - d) * (l - d) + e', weg:w => `f(${maZ(w.l)}) = [fl]`},
      {id:'fr', t:'Funktionswert am rechten Rand', kurz:'f(rechts)', e:'ma', f:'a * (r - d) * (r - d) + e', weg:w => `f(${maZ(w.r)}) = [fr]`},
      {id:'mn', t:'y<sub>min</sub>', e:'ma', f:'Lmin', weg:w => `${w.d > w.l && w.d < w.r ? 'Scheitel S(' + maZ(w.d) + ' | ' + maZ(w.e) + ') liegt im Intervall; ' : 'Scheitel liegt außerhalb; '}kleinster Wert: [mn]`},
      {id:'mx', t:'y<sub>max</sub>', e:'ma', f:'Lmax', weg:w => `größter Wert: [mx]`}]),
    ...maMit(maSaetze(802, 12, R => { const a = R.p([1, -1, 0.5, -0.5, 2]), d = R.g(-2, 2), e = R.g(-4, 4), l = R.g(-4, 0), r = l + R.g(2, 6);
      const f = x => a * (x - d) * (x - d) + e, v = [f(l), f(r)].concat(d > l && d < r ? [e] : []); return [{a, d, e, l, r, Lmin:Math.min(...v), Lmax:Math.max(...v)}]; })),
    hinweise:['Funktionswerte an beiden Rändern berechnen.', 'Liegt der Scheitel im Intervall, ist er der tiefste (a > 0) bzw. höchste Punkt (a < 0).'],
    merke:'Wertemenge auf [l; r]: Randwerte und – falls im Intervall – den Scheitelwert vergleichen.'}),
  blBau('rechnung', {id:'FB6', modul:'FB', stufe:3, titel:'Anwendung: Bewegungsgesetz', tags:T.concat(['Anwendung', 'Bewegung']), kopf:'Weg-Zeit-Gesetz',
    text:W => { const w = W[0]; return `Ein Fahrzeug fährt an. Der zurückgelegte Weg wird beschrieben durch ${maF('s', maPoly([w.k, w.v, 0], 't'), 't')} (t in Sekunden, s in Metern, 0 ≤ t ≤ ${maZ(w.tm)}).<br>a) Berechne den Weg nach ${maZ(w.t1)} s und nach ${maZ(w.t2)} s.<br>b) Berechne die Durchschnittsgeschwindigkeit zwischen ${maZ(w.t1)} s und ${maZ(w.t2)} s.<br>c) Berechne, nach welcher Zeit ${maZ(w.S)} m zurückgelegt sind (auf zwei Nachkommastellen).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'v', 'tm', 't1', 't2', 'S', 'L').concat([
      {id:'s1', t:'Weg nach t₁', kurz:'s(t₁)', e:'m', f:'k * t1 * t1 + v * t1', weg:w => `s(${maZ(w.t1)}) = ${maZ(w.k)} · ${maZ(w.t1)}² + ${maZ(w.v)} · ${maZ(w.t1)} = [s1]`},
      {id:'s2', t:'Weg nach t₂', kurz:'s(t₂)', e:'m', f:'k * t2 * t2 + v * t2', weg:w => `s(${maZ(w.t2)}) = [s2]`},
      {id:'vd', t:'Durchschnittsgeschwindigkeit', e:'m/s', f:'(s2 - s1) / (t2 - t1)', weg:w => `(s(${maZ(w.t2)}) − s(${maZ(w.t1)})) ÷ (${maZ(w.t2)} − ${maZ(w.t1)}) = [vd]`},
      {id:'tz', t:'Zeitpunkt für die Strecke', kurz:'Zeitpunkt', e:'s', f:'L', weg:w => `${maPoly([w.k, w.v, -w.S], 't')} = 0; abc-Formel, nur die positive Lösung ist sinnvoll: t ≈ [tz]`}]),
    ...maMit(maSaetze(803, 12, R => { const k = R.p([1, 1.5, 2, 2.5, 0.5]), v = R.p([0, 2, 4, 5]), t1 = R.g(2, 4), t2 = t1 + R.g(2, 4), S = R.p([50, 80, 100, 150, 200]);
      const L = maR((-v + Math.sqrt(v * v + 4 * k * S)) / (2 * k)); return L > 0 ? [{k, v, tm:Math.ceil(L) + 5, t1, t2, S, L}] : null; })),
    wahl:[{id:'w', t:'Warum ist die negative Lösung der quadratischen Gleichung nicht sinnvoll?', opts:['Die Zeit beginnt bei t = 0; negative Zeiten liegen außerhalb der Definitionsmenge.', 'Weil der Weg negativ wäre.', 'Negative Lösungen gibt es bei der abc-Formel nicht.'], r:'0'}],
    hinweise:['Zeitpunkte einsetzen.', 'Durchschnittsgeschwindigkeit = Wegdifferenz ÷ Zeitdifferenz.', 's(t) = S setzen, alles auf eine Seite, abc-Formel.'],
    merke:'Anwendungen: Definitionsmenge beachten (z. B. t ≥ 0)<br>Durchschnittsgeschwindigkeit = Δs ÷ Δt<br>nur sinnvolle Lösungen angeben.'}),
  ]; })(),
/* ---------- Mathematik · Lehrplaneinheit 1: Polynom- und Exponentialfunktionen, ihre Schaubilder und zugehörige Gleichungen ----------
   PF Polynomfunktionen und Schaubilder · GL Gleichungen lösen · TR Verschieben, Strecken, Spiegeln · EX Exponentialfunktionen
   Ergebnisse mit ln werden vorberechnet (L…-Zeilen), weil die Tabellenformeln keine Funktionen wie ln kennen. */
...(() => {
  const T = ['Mathematik', 'Funktionen'];
  const kub = w => x => w.a * (x - w.r1) * (x - w.r2) * (x - w.r3);
  const pf1 = (a, b, c, d) => [-2, -1, 0, 1, 2].map(x => ({a, b, c, d, x}));
  const gl1 = (a, p, q) => { const s = maSort([0, p, q]); return {a, p, q, s1:s[0], s2:s[1], s3:s[2]}; };
  const gl3 = (s1, s2, m, n) => ({s1, s2, m, n, b:m - s1 - s2, c:s1 * s2 + n});
  const quad = w => [w.a, -w.a * (w.p + w.q), w.a * w.p * w.q];
  return [
  /* ======================= PF · Polynomfunktionen und Schaubilder ======================= */
  blBau('rechnung', {id:'PF1', modul:'PF', stufe:1, titel:'Wertetabelle einer Polynomfunktion', tags:T.concat(['Polynomfunktion', 'Wertetabelle']), kopf:'Wertetabelle',
    text:W => `Gegeben ist die Funktion f mit ${maF('f', maPoly([W[0].a, W[0].b, W[0].c, W[0].d]))}; x ∈ ℝ. Berechne die Funktionswerte und vervollständige die Wertetabelle.`,
    spalten:['', '', '', '', ''],
    zeilen:[{id:'a', t:'a', aus:true}, {id:'b', t:'b', aus:true}, {id:'c', t:'c', aus:true}, {id:'d', t:'d', aus:true},
      {id:'x', t:'x', e:'ma'},
      {id:'y', t:'f(x)', kurz:'Funktionswert', e:'ma', f:'a * x * x * x + b * x * x + c * x + d', weg:w => `f(${maZ(w.x)}) = ${maK(w.a)} · ${maK(w.x)}³ + ${maK(w.b)} · ${maK(w.x)}² + ${maK(w.c)} · ${maK(w.x)} + ${maK(w.d)} = [y]`}],
    ...maMit(maSaetze(311, 12, R => { const a = R.p([0.5, -1, 1, -0.5, 2]), b = R.g(-3, 3), c = R.g(-4, 4), d = R.g(-4, 4); return pf1(a, b, c, d); })),
    wahl:[{id:'w', t:'Für x → +∞ gilt:', opts:['f(x) → +∞', 'f(x) → −∞'], r:'a@0 > 0 ? 0 : 1', weg:['Der Summand mit der höchsten Potenz (a · x³) bestimmt das Verhalten; a > 0 → f(x) → +∞.', 'Der Summand mit der höchsten Potenz (a · x³) bestimmt das Verhalten; a < 0 → f(x) → −∞.']}],
    hinweise:['Negative x-Werte in Klammern einsetzen: (−2)³ = −8, (−2)² = 4.', 'Erst die Potenzen, dann Punkt-, dann Strichrechnung.', 'Für große |x| entscheidet der Summand mit der höchsten Potenz.'],
    merke:'Funktionswert: x in den Term einsetzen<br>negative Zahlen in Klammern<br>globales Verhalten bestimmt der Summand mit der höchsten Potenz.'}),
  blBau('rechnung', {id:'PF2', modul:'PF', stufe:2, titel:'Nullstellen und y-Achsenabschnitt aus dem Schaubild', tags:T.concat(['Polynomfunktion', 'Schaubild', 'Nullstellen']), kopf:'Ablesen und berechnen',
    text:W => `Die Abbildung zeigt das Schaubild einer Polynomfunktion f dritten Grades.%%GRAFIK%%Lies die Nullstellen (x₁ < x₂ < x₃) und den y-Achsenabschnitt ab. Der Funktionsterm hat die Form ${maF('f', 'a · (x − x₁)(x − x₂)(x − x₃)')}. Bestimme damit den Faktor a.`,
    grafik:W => { const f = kub(W[0]); return maGraf([{f}], Object.assign(maBereich(f, W[0].r1 - 1.5, W[0].r3 + 1.5, W[0].r1, W[0].r3), {ys:1})); },
    spalten:['Ergebnis'],
    zeilen:[{id:'a', t:'a', aus:true}, {id:'r1', t:'r1', aus:true}, {id:'r2', t:'r2', aus:true}, {id:'r3', t:'r3', aus:true},
      {id:'n1', t:'Nullstelle x₁', e:'ma', f:'r1', weg:w => `Schnittpunkte mit der x-Achse: x₁ = [n1]`},
      {id:'n2', t:'Nullstelle x₂', e:'ma', f:'r2', weg:w => `x₂ = [n2]`},
      {id:'n3', t:'Nullstelle x₃', e:'ma', f:'r3', weg:w => `x₃ = [n3]`},
      {id:'sy', t:'y-Achsenabschnitt f(0)', kurz:'y-Achsenabschnitt', e:'ma', f:'0 - a * r1 * r2 * r3', weg:w => `Schnittpunkt mit der y-Achse abgelesen: S<sub>y</sub>(0 | [sy])`},
      {id:'fa', t:'Faktor a', e:'ma', f:'a', weg:w => `f(0) = a · ${maK(-w.r1)} · ${maK(-w.r2)} · ${maK(-w.r3)} = a · ${maK(-w.r1 * w.r2 * w.r3)} = ${maZ(-w.a * w.r1 * w.r2 * w.r3)} → a = ${maZ(-w.a * w.r1 * w.r2 * w.r3)} ÷ ${maK(-w.r1 * w.r2 * w.r3)} = [fa]`}],
    ...maMit(maSaetze(312, 12, R => { const a = R.p([0.5, -0.5, 1, -1, 0.25]), r = maSort([R.g(-4, -1), R.g(-2, 2), R.g(1, 4)]); if (new Set(r).size < 3 || r.includes(0)) return null; const sy = -a * r[0] * r[1] * r[2]; return Number.isInteger(sy) && Math.abs(sy) <= 8 ? [{a, r1:r[0], r2:r[1], r3:r[2]}] : null; })),
    wahl:[{id:'w', t:'Globaler Verlauf des Schaubilds:', opts:['von links unten nach rechts oben', 'von links oben nach rechts unten'], r:'a@0 > 0 ? 0 : 1'}],
    hinweise:['Nullstellen: dort schneidet das Schaubild die x-Achse.', 'y-Achsenabschnitt: Schnittpunkt mit der y-Achse, also f(0).', 'x = 0 in die Produktform einsetzen und nach a auflösen.'],
    merke:'Produktform f(x) = a · (x − x₁)(x − x₂)(x − x₃): Nullstellen direkt ablesbar<br>a über einen weiteren Punkt, z. B. f(0), bestimmen<br>a > 0: von links unten nach rechts oben.'}),
  blBau('zuordnung', {id:'PF3', modul:'PF', stufe:1, titel:'Symmetrie erkennen', tags:T.concat(['Polynomfunktion', 'Symmetrie']),
    text:'Welche Symmetrie hat das Schaubild der Funktion?', kategorien:['symmetrisch zur y-Achse', 'symmetrisch zum Ursprung', 'keine dieser Symmetrien'], anzahl:7,
    faelle:[
      {t:'f(x) = x⁴ − 3x² + 1', k:0, weg:'nur gerade Exponenten'}, {t:'f(x) = −2x² + 5', k:0, weg:'nur gerade Exponenten (5 = 5x⁰)'}, {t:'f(x) = 0,5x⁴ − x²', k:0},
      {t:'f(x) = x³ − 4x', k:1, weg:'nur ungerade Exponenten'}, {t:'f(x) = −x⁵ + 2x³ − x', k:1}, {t:'f(x) = 2x', k:1},
      {t:'f(x) = x³ − x²', k:2, weg:'gerade und ungerade Exponenten'}, {t:'f(x) = x² + x', k:2}, {t:'f(x) = x³ + 1', k:2, weg:'+1 zerstört die Punktsymmetrie'}, {t:'f(x) = x⁴ − x', k:2}
    ],
    hinweise:['Nur gerade Exponenten → y-Achse; nur ungerade Exponenten → Ursprung; gemischt → keine.', 'Ein konstanter Summand zählt als gerader Exponent (x⁰).'],
    merke:'f(−x) = f(x): achsensymmetrisch zur y-Achse (nur gerade Exponenten); f(−x) = −f(x): punktsymmetrisch zum Ursprung (nur ungerade Exponenten).'}),
  blBau('zuordnung', {id:'PF4', modul:'PF', stufe:1, titel:'Globales Verhalten', tags:T.concat(['Polynomfunktion', 'globales Verhalten']),
    text:'Wie verläuft das Schaubild für x → −∞ und x → +∞?', kategorien:['links unten → rechts oben', 'links oben → rechts unten', 'links oben → rechts oben', 'links unten → rechts unten'], anzahl:7,
    faelle:[
      {t:'f(x) = 2x³ − x', k:0, weg:'ungerader Grad, a > 0'}, {t:'f(x) = 0,1x⁵ − x⁴', k:0}, {t:'f(x) = (x − 1)² · (x + 2)', k:0, weg:'ausmultipliziert x³ + …'},
      {t:'f(x) = −x³ + 4x²', k:1, weg:'ungerader Grad, a < 0'}, {t:'f(x) = −x⁵ + x', k:1},
      {t:'f(x) = x⁴ − 5x²', k:2, weg:'gerader Grad, a > 0'}, {t:'f(x) = 3x² − 2x + 1', k:2},
      {t:'f(x) = −0,5x⁴ + x³', k:3, weg:'gerader Grad, a < 0'}, {t:'f(x) = −x² + 6', k:3}
    ],
    hinweise:['Nur der Summand mit der höchsten Potenz zählt.', 'Grad gerade: beide Enden gleich; Grad ungerade: Enden entgegengesetzt; Vorzeichen des Leitkoeffizienten entscheidet, wo rechts.'],
    merke:'Leitkoeffizient a und Grad n bestimmen das globale Verhalten: n ungerade, a > 0 → links unten, rechts oben; n gerade, a > 0 → links oben, rechts oben (bei a < 0 jeweils gespiegelt).'}),
  {
    id:'PF5', modul:'PF', typ:'berechnung', mehrfach:true, stufe:0, titel:'Eigenschaften von Polynomfunktionen',
    tags:T.concat(['Polynomfunktion', 'Theorie']),
    text:'Eine Polynomfunktion n-ten Grades hat die Form f(x) = aₙxⁿ + … + a₁x + a₀ mit aₙ ≠ 0.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Eine Polynomfunktion 3. Grades hat höchstens drei Nullstellen.', richtig:true, weg:'höchstens n Nullstellen'},
      {text:'Eine Polynomfunktion mit ungeradem Grad hat mindestens eine Nullstelle.', richtig:true, weg:'Enden entgegengesetzt'},
      {text:'Der y-Achsenabschnitt ist der konstante Summand a₀.', richtig:true, weg:'f(0) = a₀'},
      {text:'Bei einer doppelten Nullstelle berührt das Schaubild die x-Achse, ohne sie zu schneiden.', richtig:true, weg:'Vorzeichen wechselt nicht'},
      {text:'Jede Polynomfunktion 4. Grades hat genau vier Nullstellen.', fehler:'Höchstens vier, z. B. hat x⁴ + 1 keine.'},
      {text:'f(x) = x³ + 1 ist punktsymmetrisch zum Ursprung.', fehler:'Der Summand +1 (gerader Exponent 0) zerstört die Symmetrie.'}
    ],
    hinweise:['Grad, Nullstellen, Symmetrie, y-Achsenabschnitt prüfen.'],
    merke:'Grad n: höchstens n Nullstellen<br>ungerader Grad: mindestens eine<br>f(0) = a₀<br>doppelte Nullstelle: Berührpunkt.'
  },

  /* ======================= GL · Gleichungen lösen ======================= */
  blBau('rechnung', {id:'GL1', modul:'GL', stufe:2, titel:'Nullstellen durch Ausklammern', tags:T.concat(['Gleichungen', 'Nullstellen', 'Ausklammern']), kopf:'Nullstellen',
    text:W => `Berechne die Nullstellen der Funktion f mit ${maF('f', maPoly([W[0].a, -W[0].a * (W[0].p + W[0].q), W[0].a * W[0].p * W[0].q, 0]))} exakt. Ordne sie der Größe nach (x₁ < x₂ < x₃).`,
    spalten:['Ergebnis'],
    zeilen:[{id:'a', t:'a', aus:true}, {id:'p', t:'p', aus:true}, {id:'q', t:'q', aus:true}, {id:'s1', t:'s1', aus:true}, {id:'s2', t:'s2', aus:true}, {id:'s3', t:'s3', aus:true},
      {id:'x1', t:'x₁', e:'ma', f:'s1', weg:w => `f(x) = 0; x ausklammern: x · (${maPoly(quad(w))}) = 0; Satz vom Nullprodukt: x = 0 oder ${maPoly(quad(w))} = 0; ${w.a !== 1 ? 'durch ' + maK(w.a) + ' teilen: ' + maPoly([1, -(w.p + w.q), w.p * w.q]) + ' = 0; ' : ''}pq- oder abc-Formel: x = ${maZ(Math.min(w.p, w.q))} oder x = ${maZ(Math.max(w.p, w.q))} → x₁ = [x1]`},
      {id:'x2', t:'x₂', e:'ma', f:'s2', weg:w => `x₂ = [x2]`},
      {id:'x3', t:'x₃', e:'ma', f:'s3', weg:w => `x₃ = [x3]`}],
    ...maMit(maSaetze(411, 12, R => { const a = R.p([1, 0.5, -1, 2, -0.5]), p = R.g(-5, 5), q = R.g(-5, 5); return p && q && p !== q ? [gl1(a, p, q)] : null; })),
    hinweise:['Kein konstanter Summand → x ausklammern.', 'Satz vom Nullprodukt: Ein Produkt ist null, wenn ein Faktor null ist.', 'Die quadratische Gleichung mit der pq- oder abc-Formel lösen.'],
    merke:'Fehlt der konstante Summand: x ausklammern → x = 0 ist Nullstelle<br>Rest mit pq-/abc-Formel<br>Satz vom Nullprodukt.'}),
  blBau('rechnung', {id:'GL2', modul:'GL', stufe:2, titel:'Biquadratische Gleichung: Substitution', tags:T.concat(['Gleichungen', 'Substitution']), kopf:'Substitution',
    text:W => `Löse die Gleichung ${maPoly([1, 0, -(W[0].p * W[0].p + W[0].q * W[0].q), 0, W[0].p * W[0].p * W[0].q * W[0].q])} = 0 mit der Substitution z = x². Gib z₁ < z₂ und die Lösungen x₁ < x₂ < x₃ < x₄ an.`,
    spalten:['Ergebnis'],
    zeilen:[{id:'p', t:'p', aus:true}, {id:'q', t:'q', aus:true},
      {id:'z1', t:'z₁', e:'ma', f:'p * p', weg:w => `z = x²: z² − ${maZ(w.p * w.p + w.q * w.q)}z + ${maZ(w.p * w.p * w.q * w.q)} = 0; pq-Formel: z₁ = [z1]`},
      {id:'z2', t:'z₂', e:'ma', f:'q * q', weg:w => `z₂ = [z2]`},
      {id:'x1', t:'x₁', e:'ma', f:'0 - q', weg:w => `Rücksubstitution x² = ${maZ(w.q * w.q)} → x = ±${maZ(w.q)}; x₁ = [x1]`},
      {id:'x2', t:'x₂', e:'ma', f:'0 - p', weg:w => `x² = ${maZ(w.p * w.p)} → x = ±${maZ(w.p)}; x₂ = [x2]`},
      {id:'x3', t:'x₃', e:'ma', f:'p', weg:w => `x₃ = [x3]`},
      {id:'x4', t:'x₄', e:'ma', f:'q', weg:w => `x₄ = [x4]`}],
    ...maMit(maSaetze(412, 10, R => { const p = R.g(1, 4), q = R.g(2, 6); return p < q ? [{p, q}] : null; })),
    hinweise:['x⁴ = (x²)² = z².', 'Quadratische Gleichung in z lösen.', 'Zurück: x² = z → x = ±√z (nur für z ≥ 0).'],
    merke:'Biquadratische Gleichung ax⁴ + bx² + c = 0: Substitution z = x² → az² + bz + c = 0 → Rücksubstitution x = ±√z (z < 0: keine Lösung).'}),
  blBau('rechnung', {id:'GL3', modul:'GL', stufe:2, titel:'Schnittpunkte von Parabel und Gerade', tags:T.concat(['Gleichungen', 'Schnittpunkte']), kopf:'Schnittpunkte',
    text:W => `Gegeben sind ${maF('f', maPoly([1, W[0].b, W[0].c]))} und ${maF('g', maLin(W[0].m, W[0].n))}.%%GRAFIK%%Berechne die gemeinsamen Punkte S₁(x₁ | y₁) und S₂(x₂ | y₂) der Schaubilder mit x₁ < x₂.`,
    grafik:W => { const w = W[0], f = x => x * x + w.b * x + w.c, g = x => w.m * x + w.n, o = maBereich(f, w.s1 - 2, w.s2 + 2, w.s1 - 1, w.s2 + 1);
      return maGraf([{f, name:'f'}, {f:g, name:'g'}], o); },
    spalten:['Ergebnis'],
    zeilen:[{id:'b', t:'b', aus:true}, {id:'c', t:'c', aus:true}, {id:'m', t:'m', aus:true}, {id:'n', t:'n', aus:true}, {id:'s1', t:'s1', aus:true}, {id:'s2', t:'s2', aus:true},
      {id:'x1', t:'x₁', e:'ma', f:'s1', weg:w => `f(x) = g(x): ${maPoly([1, w.b, w.c])} = ${maLin(w.m, w.n)} ⇔ ${maPoly([1, w.b - w.m, w.c - w.n])} = 0; pq-Formel: x₁ = [x1]`},
      {id:'y1', t:'y₁', e:'ma', f:'m * s1 + n', weg:w => `y₁ = g(${maZ(w.s1)}) = ${maZ(w.m)} · ${maK(w.s1)} ${w.n < 0 ? '−' : '+'} ${maZ(Math.abs(w.n))} = [y1]`},
      {id:'x2', t:'x₂', e:'ma', f:'s2', weg:w => `x₂ = [x2]`},
      {id:'y2', t:'y₂', e:'ma', f:'m * s2 + n', weg:w => `y₂ = g(${maZ(w.s2)}) = ${maZ(w.m)} · ${maK(w.s2)} ${w.n < 0 ? '−' : '+'} ${maZ(Math.abs(w.n))} = [y2]`}],
    ...maMit(maSaetze(413, 12, R => { const s1 = R.g(-4, 1), s2 = s1 + R.g(2, 5), m = R.p([-2, -1, -0.5, 0.5, 1, 2]), n = R.g(-3, 4); return [gl3(s1, s2, m, n)]; })),
    wahl:[{id:'w', t:'Wie viele gemeinsame Punkte können eine Parabel und eine Gerade höchstens haben?', opts:['zwei', 'drei', 'unendlich viele'], r:'0'}],
    hinweise:['Funktionsterme gleichsetzen, alles auf eine Seite bringen.', 'Quadratische Gleichung lösen.', 'y-Werte durch Einsetzen in die einfachere Funktion (Gerade) berechnen.'],
    merke:'Gemeinsame Punkte: f(x) = g(x) setzen → x-Werte<br>y-Werte durch Einsetzen<br>Parabel und Gerade: 0, 1 (Berührpunkt) oder 2 gemeinsame Punkte.'}),

  /* ======================= TR · Verschieben, Strecken, Spiegeln ======================= */
  blBau('zuordnung', {id:'TR1', modul:'TR', stufe:1, titel:'Abbildungen erkennen', tags:T.concat(['Verschiebung', 'Streckung', 'Spiegelung']),
    text:'Wie entsteht das Schaubild von g aus dem Schaubild von f?', kategorien:['Verschiebung in x-Richtung', 'Verschiebung in y-Richtung', 'Streckung in y-Richtung', 'Spiegelung an der x-Achse', 'Spiegelung an der y-Achse'], anzahl:7,
    faelle:[
      {t:'f(x) = x² → g(x) = (x − 3)²', k:0, weg:'um 3 nach rechts'}, {t:'f(x) = eˣ → g(x) = eˣ⁺²', k:0, weg:'um 2 nach links'},
      {t:'f(x) = x² → g(x) = x² + 4', k:1, weg:'um 4 nach oben'}, {t:'f(x) = eˣ → g(x) = eˣ − 5', k:1, weg:'um 5 nach unten'},
      {t:'f(x) = x² → g(x) = 3x²', k:2, weg:'Faktor 3'}, {t:'f(x) = x³ → g(x) = 0,5x³', k:2, weg:'Faktor 0,5 (Stauchung)'},
      {t:'f(x) = x² → g(x) = −x²', k:3, weg:'g(x) = −f(x)'}, {t:'f(x) = eˣ → g(x) = −eˣ', k:3},
      {t:'f(x) = eˣ → g(x) = e⁻ˣ', k:4, weg:'g(x) = f(−x)'}
    ],
    hinweise:['g(x) = f(x − c): x-Richtung; g(x) = f(x) + d: y-Richtung; g(x) = a · f(x): Streckung.', '−f(x): Spiegelung an der x-Achse; f(−x): Spiegelung an der y-Achse.'],
    merke:'f(x − c): um c nach rechts (c < 0: links); f(x) + d: um d nach oben; a · f(x): Streckung mit Faktor a; −f(x): an der x-Achse; f(−x): an der y-Achse gespiegelt.'}),
  {
    id:'TR2', modul:'TR', typ:'berechnung', mehrfach:true, stufe:2, titel:'Funktionsterm nach einer Abbildung',
    tags:T.concat(['Verschiebung', 'Streckung', 'Spiegelung']),
    text:`Das Schaubild von ${maF('f', 'x³')} wird um 2 nach rechts und um 1 nach unten verschoben. Danach wird untersucht, wie sich weitere Abbildungen auswirken.`,
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Das verschobene Schaubild gehört zu g(x) = (x − 2)³ − 1.', richtig:true, weg:'rechts: x − 2; unten: − 1'},
      {text:'Der Wendepunkt (Symmetriezentrum) liegt nach der Verschiebung bei (2 | −1).', richtig:true, weg:'(0 | 0) wird mitverschoben'},
      {text:'Spiegelt man g an der x-Achse, erhält man h(x) = −(x − 2)³ + 1.', richtig:true, weg:'−g(x)'},
      {text:'Das verschobene Schaubild gehört zu g(x) = (x + 2)³ − 1.', fehler:'x + 2 verschiebt nach links.'},
      {text:'Streckt man g mit dem Faktor 2 in y-Richtung, erhält man 2(x − 2)³ − 1.', fehler:'Der ganze Term wird gestreckt: 2 · ((x − 2)³ − 1) = 2(x − 2)³ − 2.'}
    ],
    hinweise:['Verschiebung nach rechts um c: x durch (x − c) ersetzen.', 'Spiegelung an der x-Achse: den ganzen Term mit −1 multiplizieren.'],
    merke:'Abbildungen am Term: x → x − c (rechts), + d (oben), a · (…) (Streckung), −(…) (x-Achse), x → −x (y-Achse) – Reihenfolge beachten.'
  },

  /* ======================= EX · Exponentialfunktionen ======================= */
  blBau('rechnung', {id:'EX1', modul:'EX', stufe:2, titel:'Exponentialfunktion untersuchen', tags:T.concat(['Exponentialfunktion', 'Asymptote', 'Nullstelle']), kopf:'Untersuchung',
    text:W => `Gegeben ist die Funktion f mit ${maF('f', maExp(W[0].a, W[0].k, W[0].b))}; x ∈ ℝ. Bestimme den Schnittpunkt mit der y-Achse, die Gleichung der waagrechten Asymptote und die Nullstelle (auf zwei Nachkommastellen).`,
    spalten:['Ergebnis'],
    zeilen:[{id:'a', t:'a', aus:true}, {id:'k', t:'k', aus:true}, {id:'b', t:'b', aus:true}, {id:'Lsy', t:'', aus:true}, {id:'Lasy', t:'', aus:true}, {id:'Lnst', t:'', aus:true},
      {id:'sy', t:'y-Achsenabschnitt f(0)', kurz:'y-Achsenabschnitt', e:'ma', f:'a + b', weg:w => `f(0) = ${maZ(w.a)} · e⁰ ${w.b < 0 ? '−' : '+'} ${maZ(Math.abs(w.b))} = ${maZ(w.a)} ${w.b < 0 ? '−' : '+'} ${maZ(Math.abs(w.b))} = [sy]`},
      {id:'asy', t:'Asymptote: y =', kurz:'Asymptote', e:'ma', f:'b', weg:w => `e<sup>${maZ(w.k)}x</sup> → 0 für x → ${w.k > 0 ? '−∞' : '+∞'} → y = [asy]`},
      {id:'nst', t:'Nullstelle x', kurz:'Nullstelle', e:'ma', f:'Lnst', weg:w => `${maExp(w.a, w.k, w.b)} = 0 ⇔ e<sup>${maZ(w.k)}x</sup> = ${maZ(-w.b)} ÷ ${maK(w.a)} = ${maZ(-w.b / w.a)} ⇔ ${maZ(w.k)}x = ln(${maZ(-w.b / w.a, 4)}) ⇔ x = ln(${maZ(-w.b / w.a, 4)}) ÷ ${maK(w.k)} ≈ [nst]`}],
    ...maMit(maSaetze(611, 12, R => { const a = R.p([2, -3, 4, -1, 5, -2, 1]), k = R.p([0.5, -1, -0.5, 0.25, 1, -2, 2]), b = R.p([-4, -2, -1, 1, 3, 6]); return a * b < 0 ? [maExpWerte(a, k, b)] : null; })),
    wahl:[{id:'w', t:'Das Schaubild ist', opts:['streng monoton steigend', 'streng monoton fallend'], r:'a@0 * k@0 > 0 ? 0 : 1', weg:['a · k > 0 → steigend.', 'a · k < 0 → fallend.']},
          {id:'w2', t:'Das Schaubild nähert sich der Asymptote', opts:['für x → −∞', 'für x → +∞'], r:'k@0 > 0 ? 0 : 1'}],
    hinweise:['f(0): e⁰ = 1.', 'e hoch „etwas, das gegen −∞ geht“ geht gegen 0 – übrig bleibt b.', 'Nullstelle: f(x) = 0, nach e<sup>kx</sup> auflösen, dann ln anwenden.'],
    merke:'f(x) = a · e<sup>kx</sup> + b: S<sub>y</sub>(0 | a + b); Asymptote y = b (für x → −∞ bei k > 0, x → +∞ bei k < 0); Nullstelle nur, wenn −b/a > 0: x = ln(−b/a) ÷ k.'}),
  blBau('rechnung', {id:'EX2', modul:'EX', stufe:3, titel:'Exponentielles Wachstum: Umsatzentwicklung', tags:T.concat(['Exponentialfunktion', 'Wachstum', 'Anwendung']), kopf:'Wachstumsmodell',
    text:W => `Der Umsatz eines Online-Shops wird durch ${maF('U', maExp(W[0].b0, W[0].k, 0, 't'), 't')} modelliert (t in Jahren ab heute, U in Tausend €). Berechne den Umsatz nach ${maZ(W[0].t1)} Jahren, die Verdopplungszeit, den Zeitpunkt, an dem der Umsatz ${maZ(W[0].g)} Tsd. € erreicht, und die jährliche prozentuale Zunahme (jeweils auf zwei Nachkommastellen).`,
    spalten:['Ergebnis'],
    zeilen:[{id:'b0', t:'', aus:true}, {id:'k', t:'', aus:true}, {id:'t1', t:'', aus:true}, {id:'g', t:'', aus:true}, {id:'Lbt', t:'', aus:true}, {id:'Ltd', t:'', aus:true}, {id:'Ltg', t:'', aus:true}, {id:'Lp', t:'', aus:true},
      {id:'ut', t:'Umsatz nach t₁ Jahren', kurz:'Umsatz', e:'Tsd. €', f:'Lbt', weg:w => `U(${maZ(w.t1)}) = ${maZ(w.b0)} · e<sup>${maZ(w.k)} · ${maZ(w.t1)}</sup> = ${maZ(w.b0)} · e<sup>${maZ(w.k * w.t1)}</sup> ≈ [ut]`},
      {id:'td', t:'Verdopplungszeit', e:'Jahre', f:'Ltd', weg:w => `${maZ(w.b0)} · e<sup>${maZ(w.k)}t</sup> = ${maZ(2 * w.b0)} ⇔ e<sup>${maZ(w.k)}t</sup> = 2 ⇔ t = ln 2 ÷ ${maZ(w.k)} ≈ [td]`},
      {id:'tg', t:'Zeitpunkt, an dem der Zielumsatz erreicht ist', kurz:'Zielumsatz erreicht nach', e:'Jahre', f:'Ltg', weg:w => `${maZ(w.b0)} · e<sup>${maZ(w.k)}t</sup> = ${maZ(w.g)} ⇔ e<sup>${maZ(w.k)}t</sup> = ${maZ(w.g / w.b0, 4)} ⇔ t = ln(${maZ(w.g / w.b0, 4)}) ÷ ${maZ(w.k)} ≈ [tg]`},
      {id:'pz', t:'jährliche Zunahme', e:'%', f:'Lp', weg:w => `Wachstumsfaktor je Jahr e<sup>${maZ(w.k)}</sup> ≈ ${maZ(Math.exp(w.k), 4)} → Zunahme ≈ [pz]`}],
    ...maMit(maSaetze(612, 12, R => { const b0 = R.p([80, 120, 150, 250, 400, 60]), k = R.p([0.05, 0.08, 0.1, 0.12, 0.15, 0.2]), t1 = R.p([3, 4, 5, 6, 10]), g = b0 * R.p([2, 2.5, 3, 4]); return [maWachstum(b0, k, t1, g)]; })),
    wahl:[{id:'w', t:'Woran erkennt man am Term, dass der Umsatz wächst?', opts:['k > 0', 'Anfangswert > 0', 'Der Term enthält e.'], r:'0'}],
    hinweise:['Einsetzen: t₁ für t.', 'Gleichung nach e<sup>kt</sup> auflösen, dann ln anwenden.', 'Wachstumsfaktor pro Jahr: e<sup>k</sup>; Zunahme in % = (e<sup>k</sup> − 1) · 100.'],
    merke:'Exponentielles Wachstum B(t) = B₀ · e<sup>kt</sup> (k > 0)<br>Verdopplungszeit T = ln 2 ÷ k<br>Zeitpunkt für Wert G: t = ln(G ÷ B₀) ÷ k<br>Wachstumsfaktor e<sup>k</sup>.'}),
  {
    id:'EX3', modul:'EX', typ:'berechnung', mehrfach:true, stufe:0, titel:'Potenzen und Eigenschaften der e-Funktion',
    tags:T.concat(['Exponentialfunktion', 'Potenzgesetze', 'Theorie']),
    text:'Potenzgesetze: aᵐ · aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐ·ⁿ; a⁻ⁿ = 1 ÷ aⁿ; a<sup>1/n</sup> = ⁿ√a. Die natürliche Exponentialfunktion f(x) = eˣ (e ≈ 2,718) und der natürliche Logarithmus ln sind Umkehrfunktionen: ln(eˣ) = x.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'e²ˣ · e⁻ˣ = eˣ', richtig:true, weg:'2x + (−x) = x'},
      {text:'f(x) = eˣ hat keine Nullstelle, denn eˣ > 0 für alle x.', richtig:true, weg:'immer positiv'},
      {text:'Das Schaubild von f(x) = eˣ hat die x-Achse als Asymptote für x → −∞.', richtig:true, weg:'eˣ → 0'},
      {text:'Die Gleichung eˣ = 5 hat die Lösung x = ln 5.', richtig:true, weg:'ln auf beiden Seiten'},
      {text:'8<sup>1/3</sup> = 2', richtig:true, weg:'dritte Wurzel aus 8'},
      {text:'(e²)³ = e⁵', fehler:'Potenzieren: Exponenten multiplizieren → e⁶.'},
      {text:'Die Gleichung eˣ = −2 hat die Lösung x = ln(−2).', fehler:'eˣ ist immer positiv – keine Lösung; ln(−2) ist nicht definiert.'}
    ],
    hinweise:['Exponenten beim Multiplizieren addieren, beim Potenzieren multiplizieren.', 'eˣ ist immer positiv.'],
    merke:'eˣ > 0, S<sub>y</sub>(0 | 1), Asymptote y = 0 für x → −∞<br>eˣ = c (c > 0) ⇔ x = ln c<br>Potenzgesetze gelten für alle reellen Exponenten.'
  },
  ]; })(),
/* ---------- Mathematik · PF Polynomfunktionen – Erweiterung (Punktprobe, Art der Nullstellen, Prüfungsniveau) ---------- */
...(() => {
  const T = ['Mathematik', 'Funktionen', 'Polynomfunktion'];
  const kubik = w => [w.a, w.b, w.c, w.d];
  const fw = (k, x) => k[0] * x * x * x + k[1] * x * x + k[2] * x + k[3];
  return [
  blBau('rechnung', {id:'PF6', modul:'PF', stufe:2, titel:'Punktprobe: Liegt der Punkt auf dem Schaubild?', tags:T.concat(['Punktprobe']), kopf:'Punktprobe',
    text:W => `Gegeben ist ${maF('f', maPoly(kubik(W[0])))}; K ist das Schaubild von f. Prüfe, ob die Punkte P₁(${maZ(W[0].px)} | ${maZ(W[0].py)}), P₂(${maZ(W[1].px)} | ${maZ(W[1].py)}) und P₃(${maZ(W[2].px)} | ${maZ(W[2].py)}) auf K liegen.`,
    spalten:['P₁', 'P₂', 'P₃'],
    zeilen:maAus('a', 'b', 'c', 'd', 'px', 'py', 'on').concat([
      {id:'fp', t:'f(x<sub>P</sub>)', kurz:'Funktionswert', e:'ma', f:'a * px * px * px + b * px * px + c * px + d', weg:w => `f(${maZ(w.px)}) = [fp] ${w.on ? '= y<sub>P</sub> → liegt auf K' : '≠ ' + maZ(w.py) + ' → liegt nicht auf K'}`}]),
    ...maMit(maSaetze(301, 12, R => { const k = [R.p([1, -1, 0.5, 2, -0.5]), R.g(-3, 3), R.g(-4, 4), R.g(-5, 5)], xs = new Set();
      const s = [0, 1, 2].map(() => { let x = R.g(-3, 3); while (xs.has(x)) x = R.g(-3, 3); xs.add(x); const on = R.r() < 0.5 ? 1 : 0; return {a:k[0], b:k[1], c:k[2], d:k[3], px:x, py:fw(k, x) + (on ? 0 : R.p([-2, -1, 1, 3])), on}; });
      return s.some(w => w.on) && s.some(w => !w.on) ? s : null; })),
    wahl:[0, 1, 2].map(k => ({id:'l' + k, t:`P${'₁₂₃'[k]} liegt`, opts:['auf K', 'nicht auf K'], r:`on@${k} > 0 ? 0 : 1`})),
    hinweise:['x-Koordinate einsetzen und f(x) berechnen.', 'Stimmt f(x) mit der y-Koordinate überein, liegt der Punkt auf K.'],
    merke:'Punktprobe: P(x<sub>P</sub> | y<sub>P</sub>) liegt auf K, wenn f(x<sub>P</sub>) = y<sub>P</sub>.'}),
  blBau('zuordnung', {id:'PF7', modul:'PF', stufe:2, titel:'Art der Nullstelle', tags:T.concat(['Nullstellen', 'Vielfachheit']),
    text:'Wie verhält sich das Schaubild an der angegebenen Nullstelle?', kategorien:['einfach: schneidet die x-Achse', 'doppelt: berührt die x-Achse', 'dreifach: schneidet mit waagrechter Tangente (Sattelpunkt)'], anzahl:7,
    faelle:[
      {t:'f(x) = (x − 1)²(x + 3) bei x = 1', k:1}, {t:'f(x) = (x − 1)²(x + 3) bei x = −3', k:0}, {t:'f(x) = x³(x − 2) bei x = 0', k:2},
      {t:'f(x) = x²(x − 4) bei x = 0', k:1}, {t:'f(x) = x²(x − 4) bei x = 4', k:0}, {t:'f(x) = −2(x + 1)³ bei x = −1', k:2},
      {t:'f(x) = x⁴ − 4x² bei x = 0', k:1, weg:'= x²(x − 2)(x + 2)'}, {t:'f(x) = x⁴ − 4x² bei x = 2', k:0},
      {t:'f(x) = (x − 3)²(x + 1)² bei x = 3', k:1}, {t:'f(x) = (x + 2)(x − 5)³ bei x = 5', k:2}, {t:'f(x) = x³ − 6x² + 9x bei x = 3', k:1, weg:'= x(x − 3)²'}
    ],
    hinweise:['Produktform: Exponent der Klammer = Vielfachheit.', 'Gerade Vielfachheit: kein Vorzeichenwechsel → Berührpunkt.'],
    merke:'Einfache Nullstelle: Schnittpunkt mit Vorzeichenwechsel<br>doppelte: Berührpunkt<br>dreifache: Schnittpunkt mit waagrechter Tangente (Sattelpunkt).'}),
  blBau('rechnung', {id:'PF8', modul:'PF', stufe:2, titel:'Nullstellen und Achsenschnittpunkte aus der Produktform', tags:T.concat(['Nullstellen', 'Produktform']), kopf:'Achsenschnittpunkte',
    text:W => `Gegeben ist ${maF('f', maFaktor(W[0].a) + maFakt(W[0].r1) + '²' + maFakt(W[0].r2))}. Gib die Nullstellen an (x₁ = doppelte, x₂ = einfache Nullstelle) und berechne den y-Achsenabschnitt und f(${maZ(W[0].x0)}).`,
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'r1', 'r2', 'x0').concat([
      {id:'n1', t:'doppelte Nullstelle x₁', kurz:'x₁', e:'ma', f:'r1', weg:w => `Klammer ${maFakt(w.r1)} steht im Quadrat → doppelte Nullstelle x₁ = [n1]`},
      {id:'n2', t:'einfache Nullstelle x₂', kurz:'x₂', e:'ma', f:'r2', weg:w => `x₂ = [n2]`},
      {id:'sy', t:'y-Achsenabschnitt f(0)', kurz:'f(0)', e:'ma', f:'a * r1 * r1 * (0 - r2)', weg:w => `f(0) = ${maZ(w.a)} · ${maK(-w.r1)}² · ${maK(-w.r2)} = [sy]`},
      {id:'f0', t:'Funktionswert f(x₀)', kurz:'f(x₀)', e:'ma', f:'a * (x0 - r1) * (x0 - r1) * (x0 - r2)', weg:w => `f(${maZ(w.x0)}) = ${maZ(w.a)} · ${maK(w.x0 - w.r1)}² · ${maK(w.x0 - w.r2)} = [f0]`}]),
    ...maMit(maSaetze(302, 12, R => { const r1 = R.g(-3, 3), r2 = R.g(-4, 4), x0 = R.g(-2, 3); return r1 !== r2 && r1 && r2 && x0 !== r1 && x0 !== r2 && x0 ? [{a:R.p([1, -1, 0.5, 2, -0.5]), r1, r2, x0}] : null; })),
    wahl:[{id:'w', t:'An der doppelten Nullstelle', opts:['berührt das Schaubild die x-Achse', 'schneidet das Schaubild die x-Achse'], r:'0'},
          {id:'w2', t:'Globaler Verlauf:', opts:['von links unten nach rechts oben', 'von links oben nach rechts unten'], r:'a@0 > 0 ? 0 : 1'}],
    hinweise:['Nullstellen der Produktform: jede Klammer gleich null setzen.', 'y-Achsenabschnitt: x = 0 einsetzen.', 'Leitkoeffizient = Vorfaktor (Grad 3).'],
    merke:'Produktform a(x − x₁)²(x − x₂): Nullstellen direkt ablesbar, Quadrat → Berührpunkt; f(0) durch Einsetzen.'}),
  blBau('rechnung', {id:'PF9', modul:'PF', stufe:3, titel:'Prüfungsniveau: Polynomfunktion untersuchen', tags:T.concat(['Nullstellen', 'Symmetrie', 'Prüfung']), kopf:'Untersuchung',
    text:W => `Gegeben ist die Funktion f mit ${maF('f', maPoly([W[0].a, -W[0].a * (W[0].p + W[0].q), W[0].a * W[0].p * W[0].q, 0]))}; x ∈ ℝ. Ihr Schaubild ist K.<br>a) Berechne die Schnittpunkte von K mit der x-Achse (x₁ < x₂ < x₃).<br>b) Berechne f(${maZ(W[0].x0)}).<br>c) Beschreibe Symmetrie und globalen Verlauf von K.`,
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'p', 'q', 'x0', 's1', 's2', 's3').concat([
      {id:'x1', t:'x₁', e:'ma', f:'s1', weg:w => `f(x) = 0; x ausklammern: x · (${maPoly([w.a, -w.a * (w.p + w.q), w.a * w.p * w.q])}) = 0; x = 0 oder abc-/pq-Formel: x = ${maZ(Math.min(w.p, w.q))}, x = ${maZ(Math.max(w.p, w.q))} → x₁ = [x1]`},
      {id:'x2', t:'x₂', e:'ma', f:'s2', weg:w => `x₂ = [x2]`},
      {id:'x3', t:'x₃', e:'ma', f:'s3', weg:w => `x₃ = [x3]`},
      {id:'f0', t:'f(x₀)', e:'ma', f:'a * x0 * (x0 - p) * (x0 - q)', weg:w => `f(${maZ(w.x0)}) = [f0]`}]),
    ...maMit(maSaetze(303, 14, R => { const a = R.p([1, -1, 0.5, -0.5, 2]), p = R.g(-4, 4), q = R.p([-p, R.g(-4, 4)]), x0 = R.p([-1, 1, 2, -2]);
      if (!p || !q || p === q) return null; const s = maSort([0, p, q]); return [{a, p, q, x0, s1:s[0], s2:s[1], s3:s[2]}]; })),
    wahl:[{id:'w', t:'Symmetrie von K:', opts:['symmetrisch zur y-Achse', 'symmetrisch zum Ursprung', 'keine dieser Symmetrien'], r:'p@0 + q@0 == 0 ? 1 : 2'},
          {id:'w2', t:'Globaler Verlauf:', opts:['von links unten nach rechts oben', 'von links oben nach rechts unten'], r:'a@0 > 0 ? 0 : 1'}],
    hinweise:['Kein konstanter Summand → x ausklammern.', 'Nur ungerade Exponenten → symmetrisch zum Ursprung.', 'Grad 3: Vorzeichen des Leitkoeffizienten entscheidet den Verlauf.'],
    merke:'Prüfungsschema: Nullstellen (ausklammern, Formel), Funktionswerte, Symmetrie (Exponenten), globaler Verlauf (Grad, Leitkoeffizient).'}),
  blBau('rechnung', {id:'PF10', modul:'PF', stufe:3, titel:'Prüfungsniveau: Funktionsterm aus dem Schaubild', tags:T.concat(['Funktionsterm bestimmen', 'Schaubild', 'Prüfung']), kopf:'Funktionsterm',
    text:W => `Die Abbildung zeigt das Schaubild einer Polynomfunktion f dritten Grades mit einer doppelten Nullstelle.%%GRAFIK%%Lies die Nullstellen und den y-Achsenabschnitt ab. Bestimme mit dem Ansatz ${maF('f', 'a · (x − x₁)² · (x − x₂)')} den Faktor a und den Koeffizienten von x³, x², x und den konstanten Summanden.`,
    grafik:W => { const w = W[0], f = x => w.a * (x - w.r1) * (x - w.r1) * (x - w.r2), lo = Math.min(w.r1, w.r2, 0), hi = Math.max(w.r1, w.r2, 0); return maGraf([{f}], Object.assign(maBereich(f, lo - 1.5, hi + 1.5, lo - 0.3, hi + 0.3), {ys:1})); },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'r1', 'r2').concat([
      {id:'n1', t:'doppelte Nullstelle x₁', kurz:'x₁', e:'ma', f:'r1', weg:w => `Berührpunkt mit der x-Achse: x₁ = [n1]`},
      {id:'n2', t:'einfache Nullstelle x₂', kurz:'x₂', e:'ma', f:'r2', weg:w => `Schnittpunkt mit der x-Achse: x₂ = [n2]`},
      {id:'sy', t:'y-Achsenabschnitt', e:'ma', f:'a * r1 * r1 * (0 - r2)', weg:w => `abgelesen: f(0) = [sy]`},
      {id:'fa', t:'Faktor a', e:'ma', f:'a', weg:w => `f(0) = a · ${maK(-w.r1)}² · ${maK(-w.r2)} = a · ${maK(-w.r1 * w.r1 * w.r2)} = ${maZ(-w.a * w.r1 * w.r1 * w.r2)} → a = [fa]`},
      {id:'k2', t:'Koeffizient von x²', kurz:'Koeffizient x²', e:'ma', f:'0 - a * (2 * r1 + r2)', weg:w => `ausmultipliziert: ${maF('f', maPoly([w.a, -w.a * (2 * w.r1 + w.r2), w.a * (w.r1 * w.r1 + 2 * w.r1 * w.r2), -w.a * w.r1 * w.r1 * w.r2]))}; Koeffizient von x²: [k2]`},
      {id:'k1', t:'Koeffizient von x', kurz:'Koeffizient x', e:'ma', f:'a * (r1 * r1 + 2 * r1 * r2)', weg:w => `Koeffizient von x: [k1]`}]),
    ...maMit(maSaetze(304, 12, R => { const a = R.p([0.5, -0.5, 1, -1, 0.25]), r1 = R.g(-3, 3), r2 = R.g(-3, 4); if (!r1 || !r2 || r1 === r2) return null; const sy = -a * r1 * r1 * r2;
      const dd = Math.abs(r2 - r1), ext = Math.abs(a) * 4 * dd * dd * dd / 27; return Number.isInteger(sy) && Math.abs(sy) <= 8 && sy && dd >= 2 && ext >= Math.max(1.2, Math.abs(sy) / 4) ? [{a, r1, r2}] : null; })),
    hinweise:['Berührpunkt = doppelte Nullstelle, Schnittpunkt = einfache.', 'x = 0 in den Ansatz einsetzen, mit dem abgelesenen y-Achsenabschnitt gleichsetzen.', 'Zum Schluss ausmultiplizieren.'],
    merke:'Funktionsterm aus dem Schaubild: Nullstellen mit Vielfachheit ablesen → Produktansatz; einen weiteren Punkt (oft S<sub>y</sub>) einsetzen → a.'}),
  ]; })(),
/* ---------- Mathematik · GL Gleichungen – Erweiterung (Grundtypen, Nullprodukt, x² ausklammern, Substitution, Prüfungsniveau) ---------- */
...(() => {
  const T = ['Mathematik', 'Gleichungen'];
  return [
  blBau('rechnung', {id:'GL4', modul:'GL', stufe:1, titel:'Quadratische Gleichungen: Grundtypen', tags:T.concat(['quadratische Gleichung']), kopf:'Lösungen',
    text:W => `Löse ohne Formel (x₁ < x₂):<br>① x² = ${maZ(W[0].k * W[0].k)}<br>② ${maPoly([1, W[1].b, 0])} = 0<br>③ ${maFakt(W[2].p)}(x ${maVz(W[2].q)}) = 0`,
    spalten:['① x² = c', '② ausklammern', '③ Nullprodukt'],
    zeilen:maAus('k', 'b', 'p', 'q').concat([
      {id:'x1', t:'x₁', e:'ma', fs:['0 - k', 'min(0, 0 - b)', 'min(p, 0 - q)'], weg:w => w.k ? `Wurzel ziehen: x = ±${maZ(w.k)} → x₁ = [x1]` : w.b ? `x ausklammern: x(x ${maVz(w.b)}) = 0 → x₁ = [x1]` : `Satz vom Nullprodukt → x₁ = [x1]`},
      {id:'x2', t:'x₂', e:'ma', fs:['k', 'max(0, 0 - b)', 'max(p, 0 - q)'], weg:w => `x₂ = [x2]`}]),
    ...maMit(maSaetze(401, 12, R => { const k = R.g(1, 9), b = R.p([-7, -5, -4, -3, -2, 2, 3, 5, 6]), p = R.g(-6, 6), q = R.g(-6, 6);
      return p !== -q && p && q ? [{k, b:0, p:0, q:0}, {k:0, b, p:0, q:0}, {k:0, b:0, p, q}] : null; })),
    hinweise:['x² = c: x = ±√c.', 'x² + bx = 0: x ausklammern → x = 0 oder x = −b.', 'Produkt = 0: jeden Faktor null setzen.'],
    merke:'Ohne Formel: x² = c → ±√c<br>x(x + b) = 0 → 0 und −b<br>Produkt null, wenn ein Faktor null ist.'}),
  blBau('rechnung', {id:'GL5', modul:'GL', stufe:1, titel:'Satz vom Nullprodukt', tags:T.concat(['Nullprodukt']), kopf:'Lösungen',
    text:W => `Löse die Gleichung ${maFakt(W[0].p)}(x ${maVz(W[0].q)})(${maFaktor(W[0].k)}x ${maVz(-W[0].m)}) = 0 (x₁ < x₂ < x₃).`,
    spalten:['Ergebnis'],
    zeilen:maAus('p', 'q', 'k', 'm', 's1', 's2', 's3').concat([
      {id:'x1', t:'x₁', e:'ma', f:'s1', weg:w => `x ${maVz(-w.p)} = 0 → x = ${maZ(w.p)}; x ${maVz(w.q)} = 0 → x = ${maZ(-w.q)}; ${maFaktor(w.k)}x ${maVz(-w.m)} = 0 → x = ${maZ(w.m / w.k)}; x₁ = [x1]`},
      {id:'x2', t:'x₂', e:'ma', f:'s2', weg:w => `x₂ = [x2]`}, {id:'x3', t:'x₃', e:'ma', f:'s3', weg:w => `x₃ = [x3]`}]),
    ...maMit(maSaetze(402, 12, R => { const p = R.g(-5, 5), q = R.g(-5, 5), k = R.p([2, 3, 4, 2]), m = R.g(-7, 7); const L = [p, -q, maR(m / k)];
      if (new Set(L).size < 3 || m % k === 0 || (k === 3 && m % 3)) return null; const s = maSort(L); return [{p, q, k, m, s1:s[0], s2:s[1], s3:s[2]}]; })),
    hinweise:['Ein Produkt ist null, wenn mindestens ein Faktor null ist.', 'Jeden Faktor einzeln gleich null setzen und lösen.'],
    merke:'Satz vom Nullprodukt: a · b · c = 0 ⇔ a = 0 oder b = 0 oder c = 0 – nie ausmultiplizieren, wenn die Produktform schon da ist.'}),
  blBau('rechnung', {id:'GL6', modul:'GL', stufe:2, titel:'x² ausklammern (Grad 4)', tags:T.concat(['Ausklammern']), kopf:'Lösungen',
    text:W => `Löse die Gleichung ${maPoly([W[0].a, -W[0].a * (W[0].p + W[0].q), W[0].a * W[0].p * W[0].q, 0, 0])} = 0 (x₁ < x₂ < x₃, jede Lösung einmal).`,
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'p', 'q', 's1', 's2', 's3').concat([
      {id:'x1', t:'x₁', e:'ma', f:'s1', weg:w => `x² ausklammern: x² · (${maPoly([w.a, -w.a * (w.p + w.q), w.a * w.p * w.q])}) = 0; x² = 0 → x = 0 (doppelt); Klammer mit pq-/abc-Formel: x = ${maZ(Math.min(w.p, w.q))}, x = ${maZ(Math.max(w.p, w.q))} → x₁ = [x1]`},
      {id:'x2', t:'x₂', e:'ma', f:'s2', weg:w => `x₂ = [x2]`}, {id:'x3', t:'x₃', e:'ma', f:'s3', weg:w => `x₃ = [x3]`}]),
    ...maMit(maSaetze(403, 12, R => { const a = R.p([1, 2, -1, 0.5, 3]), p = R.g(-5, 5), q = R.g(-5, 5); if (!p || !q || p === q) return null; const s = maSort([0, p, q]); return [{a, p, q, s1:s[0], s2:s[1], s3:s[2]}]; })),
    wahl:[{id:'w', t:'Die Lösung x = 0 ist', opts:['eine doppelte Lösung (Berührpunkt)', 'eine einfache Lösung (Schnittpunkt)'], r:'0'}],
    hinweise:['Die kleinste vorkommende Potenz von x ausklammern – hier x².', 'x² = 0 liefert x = 0 (doppelt).'],
    merke:'Kleinste x-Potenz ausklammern: xⁿ · (…) = 0 → x = 0 (n-fach) und die Lösungen der Klammer.'}),
  blBau('rechnung', {id:'GL7', modul:'GL', stufe:2, titel:'Substitution mit nur zwei Lösungen', tags:T.concat(['Substitution']), kopf:'Substitution',
    text:W => `Löse die Gleichung ${maPoly([1, 0, W[0].n - W[0].m * W[0].m, 0, -W[0].n * W[0].m * W[0].m])} = 0 mit z = x² (z₁ < z₂, x₁ < x₂).`,
    spalten:['Ergebnis'],
    zeilen:maAus('n', 'm').concat([
      {id:'z1', t:'z₁', e:'ma', f:'0 - n', weg:w => `z² ${maVz(w.n - w.m * w.m)}z ${maVz(-w.n * w.m * w.m)} = 0; pq-Formel: z₁ = [z1]`},
      {id:'z2', t:'z₂', e:'ma', f:'m * m', weg:w => `z₂ = [z2]`},
      {id:'x1', t:'x₁', e:'ma', f:'0 - m', weg:w => `x² = ${maZ(-w.n)} hat keine Lösung; x² = ${maZ(w.m * w.m)} → x = ±${maZ(w.m)}; x₁ = [x1]`},
      {id:'x2', t:'x₂', e:'ma', f:'m', weg:w => `x₂ = [x2]`}]),
    ...maMit(maSaetze(404, 10, R => { const n = R.g(1, 9), m = R.g(1, 5); return n !== m * m ? [{n, m}] : null; })),
    wahl:[{id:'w', t:'Warum liefert z₁ keine Lösung für x?', opts:['Ein Quadrat x² kann nicht negativ sein.', 'Weil z₁ kleiner als z₂ ist.', 'Weil man nur positive Zahlen substituieren darf.'], r:'0'}],
    hinweise:['z = x², z² = x⁴.', 'Nur z ≥ 0 liefert Lösungen x = ±√z.'],
    merke:'Rücksubstitution x² = z: z > 0 → zwei Lösungen ±√z<br>z = 0 → x = 0<br>z < 0 → keine Lösung.'}),
  blBau('rechnung', {id:'GL8', modul:'GL', stufe:3, titel:'Prüfungsniveau: Schnittpunkte von Polynom 3. Grades und Gerade', tags:T.concat(['Schnittpunkte', 'Prüfung']), kopf:'Schnittpunkte',
    text:W => `Gegeben sind ${maF('f', maPoly([W[0].a, W[0].b, W[0].c, W[0].d]))} und ${maF('g', maLin(W[0].m, W[0].d))}. Ihre Schaubilder sind K und G.%%GRAFIK%%Berechne die Koordinaten der gemeinsamen Punkte von K und G (x₁ < x₂ < x₃).`,
    grafik:W => { const w = W[0], f = x => ((w.a * x + w.b) * x + w.c) * x + w.d, g = x => w.m * x + w.d, lo = Math.min(w.s1, 0), hi = Math.max(w.s3, 0);
      return maGraf([{f, name:'K'}, {f:g, name:'G'}], maBereich(f, lo - 1.5, hi + 1.5, lo - 0.5, hi + 0.5)); },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'c', 'd', 'm', 'u', 'v', 's1', 's2', 's3').concat([
      {id:'x1', t:'x₁', e:'ma', f:'s1', weg:w => `f(x) = g(x) ⇔ ${maPoly([w.a, w.b, w.c - w.m, 0])} = 0; x ausklammern: x · (${maPoly([w.a, w.b, w.c - w.m])}) = 0 → x = 0 oder x = ${maZ(Math.min(w.u, w.v))}, x = ${maZ(Math.max(w.u, w.v))}; x₁ = [x1]`},
      {id:'y1', t:'y₁', e:'ma', f:'m * s1 + d', weg:w => `y₁ = g(${maZ(w.s1)}) = [y1]`},
      {id:'x2', t:'x₂', e:'ma', f:'s2', weg:w => `x₂ = [x2]`}, {id:'y2', t:'y₂', e:'ma', f:'m * s2 + d', weg:w => `y₂ = g(${maZ(w.s2)}) = [y2]`},
      {id:'x3', t:'x₃', e:'ma', f:'s3', weg:w => `x₃ = [x3]`}, {id:'y3', t:'y₃', e:'ma', f:'m * s3 + d', weg:w => `y₃ = g(${maZ(w.s3)}) = [y3]`}]),
    ...maMit(maSaetze(405, 12, R => { const a = R.p([1, -1, 0.5, -0.5]), u = R.g(-3, 3), v = R.g(-3, 4), m = R.g(-3, 3), d = R.g(-3, 3);
      if (!u || !v || u === v || !m) return null; const s = maSort([0, u, v]); return [{a, b:-a * (u + v), c:a * u * v + m, d, m, u, v, s1:s[0], s2:s[1], s3:s[2]}]; })),
    hinweise:['Gleichsetzen, alles auf eine Seite: Der konstante Summand fällt weg.', 'x ausklammern, Klammer mit pq-/abc-Formel lösen.', 'y-Werte in der Geradengleichung berechnen.'],
    merke:'Gemeinsame Punkte: f(x) = g(x) → Gleichung = 0 → ausklammern/Formel → x-Werte in die einfachere Funktion einsetzen.'}),
  ]; })(),
/* ---------- Mathematik · TR Abbildungen – Erweiterung (Punkte abbilden, Term deuten, Term aufstellen) ---------- */
...(() => {
  const T = ['Mathematik', 'Funktionen', 'Abbildungen'];
  const expTerm = (a, c, d) => (a === 1 ? '' : a === -1 ? '−' : maZ(a) + '·') + 'e<sup>x' + (c ? ' ' + maVz(-c) : '') + '</sup>' + (d ? ' ' + maVz(d) : '');
  return [
  blBau('rechnung', {id:'TR3', modul:'TR', stufe:2, titel:'Punkte mit abbilden', tags:T.concat(['Verschiebung', 'Streckung']), kopf:'Bildpunkte',
    text:W => `Das Schaubild K von f wird zuerst in y-Richtung mit dem Faktor ${maZ(W[0].a)} gestreckt${W[0].a < 0 ? ' (dabei auch an der x-Achse gespiegelt)' : ''}, dann um ${maZ(Math.abs(W[0].c))} nach ${W[0].c > 0 ? 'rechts' : 'links'} und um ${maZ(Math.abs(W[0].d))} nach ${W[0].d > 0 ? 'oben' : 'unten'} verschoben. Wohin wandern die Punkte ${W.map((w, i) => `P${'₁₂₃'[i]}(${maZ(w.px)} | ${maZ(w.py)})`).join(', ')} von K?`,
    spalten:['P₁', 'P₂', 'P₃'],
    zeilen:maAus('a', 'c', 'd', 'px', 'py').concat([
      {id:'xb', t:'x-Koordinate des Bildpunkts', kurz:'x′', e:'ma', f:'px + c', weg:w => `x′ = ${maZ(w.px)} ${maVz(w.c)} = [xb]`},
      {id:'yb', t:'y-Koordinate des Bildpunkts', kurz:'y′', e:'ma', f:'a * py + d', weg:w => `y′ = ${maZ(w.a)} · ${maK(w.py)} ${maVz(w.d)} = [yb]`}]),
    ...maMit(maSaetze(501, 12, R => { const a = R.p([2, 3, -1, 0.5, -2]), c = R.p([-3, -2, -1, 1, 2, 4]), d = R.p([-4, -2, -1, 1, 3, 5]);
      return [0, 1, 2].map(() => ({a, c, d, px:R.g(-3, 3), py:R.g(-4, 4)})); })),
    hinweise:['Streckung in y-Richtung: y-Koordinate mal Faktor.', 'Verschiebung: x-Koordinate ± c, y-Koordinate ± d.', 'Reihenfolge: erst strecken, dann verschieben.'],
    merke:'g(x) = a · f(x − c) + d: P(x | y) → P′(x + c | a · y + d).'}),
  blBau('rechnung', {id:'TR4', modul:'TR', stufe:2, titel:'Abbildungen am Term ablesen', tags:T.concat(['Exponentialfunktion', 'Asymptote']), kopf:'Abbildung',
    text:W => `Das Schaubild von ${maF('g', expTerm(W[0].a, W[0].c, W[0].d))} entsteht aus dem Schaubild von ${maF('f', 'e<sup>x</sup>')}. Gib die Verschiebung in x-Richtung (rechts positiv), die Verschiebung in y-Richtung (oben positiv), den Streckfaktor, die Asymptote und den y-Achsenabschnitt an.`,
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'c', 'd', 'L').concat([
      {id:'vx', t:'Verschiebung in x-Richtung', kurz:'x-Richtung', e:'ma', f:'c', weg:w => `im Exponenten x ${maVz(-w.c)} → um ${maZ(Math.abs(w.c))} nach ${w.c > 0 ? 'rechts' : 'links'}: [vx]`},
      {id:'vy', t:'Verschiebung in y-Richtung', kurz:'y-Richtung', e:'ma', f:'d', weg:w => `Summand ${maVz(w.d)} → [vy]`},
      {id:'sf', t:'Streckfaktor', e:'ma', f:'a', weg:w => `Vorfaktor [sf]${w.a < 0 ? ' (negativ: zusätzlich Spiegelung an der x-Achse)' : ''}`},
      {id:'as', t:'Asymptote: y =', kurz:'Asymptote', e:'ma', f:'d', weg:w => `y = 0 wird um ${maZ(w.d)} verschoben → y = [as]`},
      {id:'sy', t:'y-Achsenabschnitt g(0)', kurz:'g(0)', e:'ma', f:'L', weg:w => `g(0) = ${maZ(w.a)} · e<sup>${maZ(-w.c)}</sup> ${maVz(w.d)} ≈ [sy]`}]),
    ...maMit(maSaetze(502, 12, R => { const a = R.p([1, 2, -1, 3, -2, 0.5]), c = R.p([-2, -1, 1, 2, 3]), d = R.p([-3, -2, -1, 1, 2, 4]); return [{a, c, d, L:maR(a * Math.exp(-c) + d)}]; })),
    hinweise:['g(x) = a · e<sup>x − c</sup> + d: c verschiebt nach rechts, d nach oben, a streckt.', 'Die Asymptote y = 0 von eˣ wandert mit nach oben bzw. unten.'],
    merke:'a · e<sup>x − c</sup> + d: Streckfaktor a (a < 0 mit Spiegelung); c nach rechts; d nach oben; Asymptote y = d.'}),
  blBau('rechnung', {id:'TR5', modul:'TR', stufe:3, titel:'Prüfungsniveau: Funktionsterm nach Abbildungen', tags:T.concat(['Exponentialfunktion', 'Prüfung']), kopf:'Funktion g',
    text:W => `Das Schaubild von ${maF('f', 'e<sup>x</sup>')} wird ${W[0].s < 0 ? 'an der x-Achse gespiegelt, ' : ''}mit dem Faktor ${maZ(W[0].q)} in y-Richtung gestreckt und anschließend um ${maZ(Math.abs(W[0].b))} nach ${W[0].b > 0 ? 'oben' : 'unten'} verschoben. Es entsteht das Schaubild der Funktion g mit g(x) = a · e<sup>x</sup> + b.<br>Bestimme a und b, die Asymptote, den Schnittpunkt mit der y-Achse und die Nullstelle von g (auf zwei Nachkommastellen).`,
    spalten:['Ergebnis'],
    zeilen:maAus('s', 'q', 'a', 'k', 'b', 'Lsy', 'Lasy', 'Lnst').concat([
      {id:'ga', t:'a', e:'ma', f:'a', weg:w => `${w.s < 0 ? 'Spiegelung: Faktor −1, ' : ''}Streckung: Faktor ${maZ(w.q)} → a = [ga]`},
      {id:'gb', t:'b', e:'ma', f:'b', weg:w => `Verschiebung um ${maZ(w.b)} → b = [gb]; ${maF('g', maExp(w.a, 1, w.b))}`},
      {id:'as', t:'Asymptote: y =', kurz:'Asymptote', e:'ma', f:'b', weg:w => `y = [as] (für x → −∞)`},
      {id:'sy', t:'y-Achsenabschnitt g(0)', kurz:'g(0)', e:'ma', f:'a + b', weg:w => `g(0) = ${maZ(w.a)} ${maVz(w.b)} = [sy]`},
      {id:'ns', t:'Nullstelle', e:'ma', f:'Lnst', weg:w => `${maExp(w.a, 1, w.b)} = 0 ⇔ e<sup>x</sup> = ${maZ(-w.b / w.a, 4)} ⇔ x = ln(${maZ(-w.b / w.a, 4)}) ≈ [ns]`}]),
    ...maMit(maSaetze(503, 12, R => { const s = R.p([1, -1]), q = R.p([1, 2, 3, 0.5, 4]), b = R.p([-5, -4, -3, -2, -1, 1, 2, 3, 6]); const a = s * q; if (a * b >= 0) return null; return [Object.assign({s, q}, maExpWerte(a, 1, b))]; })),
    hinweise:['Spiegelung an der x-Achse: Vorzeichen von a umdrehen; Streckung: a mal Faktor; Verschiebung nach oben: + b.', 'Nullstelle: g(x) = 0 nach eˣ auflösen, ln anwenden.'],
    merke:'Abbildungen in Term übersetzen: −f (Spiegelung x-Achse), q · f (Streckung), f + b (Verschiebung y) → g(x) = a · eˣ + b, Asymptote y = b.'}),
  ]; })(),
/* ---------- Mathematik · EX Exponentialfunktionen – Erweiterung (Werte, Gleichungen, Substitution, Term bestimmen, Abnahme, Schnittpunkte) ---------- */
...(() => {
  const T = ['Mathematik', 'Exponentialfunktion'];
  const eKx = k => 'e<sup>' + (k === 1 ? '' : k === -1 ? '−' : maZ(k)) + 'x</sup>';
  return [
  blBau('rechnung', {id:'EX4', modul:'EX', stufe:1, titel:'Funktionswerte einer Exponentialfunktion', tags:T.concat(['Funktionswerte']), kopf:'Wertetabelle',
    text:W => `Berechne mit dem Taschenrechner die Funktionswerte von ${maF('f', maExp(W[0].a, W[0].k, W[0].b))} (auf zwei Nachkommastellen).`,
    spalten:['', '', '', '', ''],
    zeilen:maAus('a', 'k', 'b', 'L').concat([{id:'x', t:'x', e:'ma'},
      {id:'y', t:'f(x)', kurz:'Funktionswert', e:'ma', f:'L', weg:w => `f(${maZ(w.x)}) = ${maZ(w.a)} · e<sup>${maZ(w.k * w.x)}</sup> ${maVz(w.b)} ≈ [y]`}]),
    ...maMit(maSaetze(601, 10, R => { const a = R.p([1, 2, -1, 0.5, 3, -2]), k = R.p([1, -1, 0.5, -0.5, 2]), b = R.g(-3, 3); return [-2, -1, 0, 1, 2].map(x => ({a, k, b, x, L:maR(a * Math.exp(k * x) + b)})); })),
    hinweise:['e<sup>…</sup> mit der Taste eˣ eingeben, Exponent in Klammern.', 'e⁰ = 1.'],
    merke:'Funktionswerte von a · e<sup>kx</sup> + b: erst k · x, dann e hoch, mal a, plus b.'}),
  blBau('rechnung', {id:'EX5', modul:'EX', stufe:1, titel:'Einfache Exponentialgleichungen', tags:T.concat(['Exponentialgleichung', 'ln']), kopf:'Lösung',
    text:W => `Löse die Gleichungen (auf zwei Nachkommastellen):<br>① e<sup>x</sup> = ${maZ(W[0].c)}<br>② ${eKx(W[1].k)} = ${maZ(W[1].c)}<br>③ ${maZ(W[2].a)}·e<sup>x</sup> = ${maZ(W[2].c)}`,
    spalten:['①', '②', '③'],
    zeilen:maAus('a', 'k', 'c', 'L').concat([{id:'x', t:'x', e:'ma', f:'L', weg:w => w.k !== 1 ? `${maZ(w.k)}x = ln(${maZ(w.c)}) → x = ln(${maZ(w.c)}) ÷ ${maK(w.k)} ≈ [x]` : w.a !== 1 ? `e<sup>x</sup> = ${maZ(w.c)} ÷ ${maZ(w.a)} = ${maZ(w.c / w.a, 4)} → x = ln(${maZ(w.c / w.a, 4)}) ≈ [x]` : `x = ln(${maZ(w.c)}) ≈ [x]`}]),
    ...maMit(maSaetze(602, 12, R => { const c1 = R.p([2, 5, 10, 0.5, 3, 20]), k = R.p([2, -1, 0.5, 3, -2]), c2 = R.p([4, 7, 0.2, 12, 1.5]), a = R.p([2, 4, 5, 0.5]), c3 = R.p([6, 10, 3, 20, 1]);
      return [{a:1, k:1, c:c1, L:maLn(c1)}, {a:1, k, c:c2, L:maR(Math.log(c2) / k)}, {a, k:1, c:c3, L:maR(Math.log(c3 / a))}]; })),
    hinweise:['e<sup>x</sup> = c ⇔ x = ln(c) (nur für c > 0).', 'Erst nach e<sup>…</sup> auflösen, dann ln anwenden.'],
    merke:'ln ist die Umkehrung von e<sup>x</sup>: e<sup>kx</sup> = c ⇔ kx = ln c ⇔ x = ln(c) ÷ k.'}),
  blBau('rechnung', {id:'EX6', modul:'EX', stufe:2, titel:'Exponentialgleichung umformen und lösen', tags:T.concat(['Exponentialgleichung']), kopf:'Lösung',
    text:W => `Löse die Gleichung ${maExp(W[0].a, W[0].k, W[0].b)} = ${maZ(W[0].c)} (auf zwei Nachkommastellen).`,
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'k', 'b', 'c', 'L').concat([
      {id:'u', t:'e<sup>kx</sup> =', kurz:'e<sup>kx</sup>', e:'ma', f:'(c - b) / a', weg:w => `${maVz(-w.b)} auf beiden Seiten, ÷ ${maK(w.a)}: e<sup>${maZ(w.k)}x</sup> = (${maZ(w.c)} ${maVz(-w.b)}) ÷ ${maK(w.a)} = [u]`},
      {id:'x', t:'x', e:'ma', f:'L', weg:w => `${maZ(w.k)}x = ln(${maZ((w.c - w.b) / w.a, 4)}) → x ≈ [x]`}]),
    ...maMit(maSaetze(603, 12, R => { const a = R.p([2, -1, 3, 0.5, -2, 4]), k = R.p([1, -1, 0.5, 2, -0.5]), b = R.g(-5, 5), c = R.g(-6, 8); const u = (c - b) / a;
      return u > 0 && u !== 1 && Number.isInteger(u * 100) ? [{a, k, b, c, L:maR(Math.log(u) / k)}] : null; })),
    wahl:[{id:'w', t:'Wann hätte die Gleichung keine Lösung?', opts:['wenn (c − b) ÷ a ≤ 0 wäre', 'wenn k negativ wäre', 'wenn a größer als c wäre'], r:'0'}],
    hinweise:['Zuerst b abziehen, dann durch a teilen.', 'Dann ln anwenden und durch k teilen.'],
    merke:'a · e<sup>kx</sup> + b = c ⇔ e<sup>kx</sup> = (c − b) ÷ a ⇔ x = ln((c − b) ÷ a) ÷ k – nur lösbar, wenn (c − b) ÷ a > 0.'}),
  blBau('zuordnung', {id:'EX7', modul:'EX', stufe:1, titel:'Verlauf von Exponentialfunktionen', tags:T.concat(['Monotonie', 'Asymptote']),
    text:'Wie verläuft das Schaubild?', kategorien:['steigend, Asymptote für x → −∞', 'fallend, Asymptote für x → −∞', 'fallend, Asymptote für x → +∞', 'steigend, Asymptote für x → +∞'], anzahl:8,
    faelle:[
      {t:'f(x) = 2eˣ + 1', k:0, weg:'a > 0, k > 0'}, {t:'f(x) = 0,5e^(2x) − 3', k:0}, {t:'f(x) = 3e^(0,5x)', k:0},
      {t:'f(x) = −eˣ + 4', k:1, weg:'a < 0, k > 0'}, {t:'f(x) = −3e^(0,5x)', k:1}, {t:'f(x) = 10 − 4eˣ', k:1},
      {t:'f(x) = 4e⁻ˣ − 2', k:2, weg:'a > 0, k < 0'}, {t:'f(x) = e^(−0,5x) + 1', k:2}, {t:'f(x) = 5e^(−2x)', k:2},
      {t:'f(x) = −2e⁻ˣ + 5', k:3, weg:'a < 0, k < 0'}, {t:'f(x) = 3 − e^(−2x)', k:3}, {t:'f(x) = −0,5e^(−x) − 1', k:3}
    ],
    hinweise:['a · k > 0: steigend, a · k < 0: fallend.', 'k > 0: Asymptote für x → −∞; k < 0: für x → +∞.'],
    merke:'f(x) = a · e<sup>kx</sup> + b: Monotonie aus dem Vorzeichen von a · k; Asymptote y = b auf der Seite, auf der kx → −∞ geht.'}),
  blBau('rechnung', {id:'EX8', modul:'EX', stufe:3, titel:'Prüfungsniveau: Gleichung mit Substitution', tags:T.concat(['Substitution', 'Prüfung']), kopf:'Substitution',
    text:W => `Löse die Gleichung e<sup>2x</sup> ${maVz(-(W[0].p + W[0].q))}·e<sup>x</sup> ${maVz(W[0].p * W[0].q)} = 0 exakt mit u = e<sup>x</sup> und gib die Lösungen auf zwei Nachkommastellen an (u₁ < u₂, x₁ < x₂).`,
    spalten:['Ergebnis'],
    zeilen:maAus('p', 'q', 'L1', 'L2').concat([
      {id:'u1', t:'u₁', e:'ma', f:'min(p, q)', weg:w => `u = e<sup>x</sup>, e<sup>2x</sup> = u²: u² ${maVz(-(w.p + w.q))}u ${maVz(w.p * w.q)} = 0; pq-Formel: u₁ = [u1]`},
      {id:'u2', t:'u₂', e:'ma', f:'max(p, q)', weg:w => `u₂ = [u2]`},
      {id:'x1', t:'x₁', e:'ma', f:'L1', weg:w => `e<sup>x</sup> = ${maZ(Math.min(w.p, w.q))} → x₁ = ln(${maZ(Math.min(w.p, w.q))}) ≈ [x1]`},
      {id:'x2', t:'x₂', e:'ma', f:'L2', weg:w => `e<sup>x</sup> = ${maZ(Math.max(w.p, w.q))} → x₂ = ln(${maZ(Math.max(w.p, w.q))}) ≈ [x2]`}]),
    ...maMit(maSaetze(604, 12, R => { const p = R.p([1, 2, 3, 4, 5, 0.5, 6]), q = R.p([1, 2, 3, 4, 5, 0.5, 6]); return p < q ? [{p, q, L1:maLn(p), L2:maLn(q)}] : null; })),
    wahl:[{id:'w', t:'Hätte die quadratische Gleichung die Lösung u = −2, dann', opts:['gäbe es dafür keine Lösung x, weil e<sup>x</sup> > 0 ist', 'wäre x = ln(−2)', 'wäre x = −ln 2'], r:'0'}],
    hinweise:['e<sup>2x</sup> = (e<sup>x</sup>)² = u².', 'Quadratische Gleichung in u lösen.', 'Rücksubstitution: e<sup>x</sup> = u ⇔ x = ln u (nur für u > 0).'],
    merke:'e<sup>2x</sup> + b·e<sup>x</sup> + c = 0: Substitution u = e<sup>x</sup> → u² + bu + c = 0 → x = ln u für jede positive Lösung u.'}),
  blBau('rechnung', {id:'EX9', modul:'EX', stufe:3, titel:'Prüfungsniveau: Exponentialfunktion aus Bedingungen', tags:T.concat(['Funktionsterm bestimmen', 'Prüfung']), kopf:'Funktionsterm',
    text:W => `Das Schaubild der Funktion f mit f(x) = a · e<sup>kx</sup> + b hat die waagrechte Asymptote y = ${maZ(W[0].b)}, schneidet die y-Achse im Punkt S(0 | ${maZ(W[0].y0)}) und verläuft durch P(${maZ(W[0].x1)} | ${maZ(W[0].y1)}). Bestimme a, b und k (k auf zwei Nachkommastellen).`,
    spalten:['Ergebnis'],
    zeilen:maAus('y0', 'x1', 'y1', 'b', 'L').concat([
      {id:'gb', t:'b', e:'ma', f:'b', weg:w => `Asymptote y = b → b = [gb]`},
      {id:'ga', t:'a', e:'ma', f:'y0 - b', weg:w => `f(0) = a + b = ${maZ(w.y0)} → a = ${maZ(w.y0)} ${maVz(-w.b)} = [ga]`},
      {id:'gk', t:'k', e:'ma', f:'L', weg:w => `f(${maZ(w.x1)}) = ${maZ(w.y1)}: ${maZ(w.y0 - w.b)} · e<sup>${maZ(w.x1)}k</sup> ${maVz(w.b)} = ${maZ(w.y1)} ⇔ e<sup>${maZ(w.x1)}k</sup> = ${maZ((w.y1 - w.b) / (w.y0 - w.b), 4)} ⇔ k = ln(${maZ((w.y1 - w.b) / (w.y0 - w.b), 4)}) ÷ ${maZ(w.x1)} ≈ [gk]`}]),
    ...maMit(maSaetze(605, 12, R => { const a = R.p([2, 3, 4, -2, -3, 5]), k = R.p([0.5, -0.5, 1, -1, 0.2, -0.3]), b = R.g(-4, 4), x1 = R.p([1, 2, 3]); const y1 = maR(a * Math.exp(k * x1) + b);
      return [{y0:a + b, x1, y1, b, L:maR(Math.log((y1 - b) / a) / x1)}]; })),
    hinweise:['Asymptote → b.', 'Punkt auf der y-Achse: f(0) = a + b → a.', 'Zweiten Punkt einsetzen, nach e<sup>…</sup> auflösen, ln anwenden.'],
    merke:'Drei Bedingungen für drei Unbekannte: Asymptote liefert b, f(0) = a + b liefert a, ein weiterer Punkt liefert k über ln.'}),
  blBau('rechnung', {id:'EX10', modul:'EX', stufe:2, titel:'Exponentielle Abnahme: Wertverlust einer Maschine', tags:T.concat(['Abnahme', 'Anwendung']), kopf:'Abnahmemodell',
    text:W => `Der Zeitwert einer Maschine wird durch ${maF('W', maExp(W[0].b0, -W[0].k, 0, 't'), 't')} beschrieben (t in Jahren, W in Tausend €). Berechne den Wert nach ${maZ(W[0].t1)} Jahren, die Halbwertszeit, den Zeitpunkt, ab dem der Wert unter ${maZ(W[0].g)} Tsd. € liegt, und die jährliche prozentuale Abnahme (auf zwei Nachkommastellen).`,
    spalten:['Ergebnis'],
    zeilen:maAus('b0', 'k', 't1', 'g', 'Lw', 'Lh', 'Lg', 'Lp').concat([
      {id:'wt', t:'Wert nach t₁ Jahren', kurz:'Wert', e:'Tsd. €', f:'Lw', weg:w => `W(${maZ(w.t1)}) = ${maZ(w.b0)} · e<sup>−${maZ(w.k * w.t1)}</sup> ≈ [wt]`},
      {id:'th', t:'Halbwertszeit', e:'Jahre', f:'Lh', weg:w => `e<sup>−${maZ(w.k)}t</sup> = 0,5 ⇔ t = ln(0,5) ÷ (−${maZ(w.k)}) ≈ [th]`},
      {id:'tg', t:'Wert unterschreitet die Grenze nach', kurz:'Grenze erreicht nach', e:'Jahre', f:'Lg', weg:w => `${maZ(w.b0)} · e<sup>−${maZ(w.k)}t</sup> = ${maZ(w.g)} ⇔ t = ln(${maZ(w.g / w.b0, 4)}) ÷ (−${maZ(w.k)}) ≈ [tg]`},
      {id:'pa', t:'jährliche Abnahme', e:'%', f:'Lp', weg:w => `Faktor je Jahr e<sup>−${maZ(w.k)}</sup> ≈ ${maZ(Math.exp(-w.k), 4)} → Abnahme ≈ [pa]`}]),
    ...maMit(maSaetze(606, 12, R => { const b0 = R.p([80, 120, 150, 200, 250, 60]), k = R.p([0.1, 0.15, 0.2, 0.25, 0.12, 0.3]), t1 = R.p([2, 3, 4, 5]), g = maR(b0 * R.p([0.2, 0.25, 0.3, 0.4]));
      return [{b0, k, t1, g, Lw:maR(b0 * Math.exp(-k * t1)), Lh:maR(Math.log(2) / k), Lg:maR(Math.log(g / b0) / -k), Lp:maR((1 - Math.exp(-k)) * 100)}]; })),
    hinweise:['Halbwertszeit: W(t) = halber Anfangswert.', 'Gleichung durch den Anfangswert teilen, dann ln.', 'Abnahme in % = (1 − e<sup>−k</sup>) · 100.'],
    merke:'Exponentielle Abnahme W(t) = W₀ · e<sup>−kt</sup>: Halbwertszeit ln 2 ÷ k; Zeitpunkt für Wert G: t = ln(G ÷ W₀) ÷ (−k).'}),
  blBau('rechnung', {id:'EX11', modul:'EX', stufe:3, titel:'Prüfungsniveau: Schnittpunkt zweier Exponentialfunktionen', tags:T.concat(['Schnittpunkte', 'Prüfung']), kopf:'Schnittpunkt',
    text:W => `Gegeben sind ${maF('f', maExp(W[0].a, 1, 0))} und ${maF('g', maExp(W[0].b, -1, 0))}.%%GRAFIK%%Berechne den Schnittpunkt S der Schaubilder (auf zwei Nachkommastellen).`,
    grafik:W => { const w = W[0], f = x => w.a * Math.exp(x), g = x => w.b * Math.exp(-x); return maGraf([{f, name:'f'}, {f:g, name:'g'}], maBereich(f, w.Lx - 2.5, w.Lx + 2.5, w.Lx - 1.2, w.Lx + 1.2)); },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'Lx', 'Ly').concat([
      {id:'x', t:'x<sub>S</sub>', kurz:'x<sub>S</sub>', e:'ma', f:'Lx', weg:w => `${maZ(w.a)}e<sup>x</sup> = ${maZ(w.b)}e<sup>−x</sup> | · e<sup>x</sup> ⇔ ${maZ(w.a)}e<sup>2x</sup> = ${maZ(w.b)} ⇔ e<sup>2x</sup> = ${maZ(w.b / w.a, 4)} ⇔ x = ln(${maZ(w.b / w.a, 4)}) ÷ 2 ≈ [x]`},
      {id:'y', t:'y<sub>S</sub>', kurz:'y<sub>S</sub>', e:'ma', f:'Ly', weg:w => `y = f(x<sub>S</sub>) = ${maZ(w.a)} · e<sup>${maZ(w.Lx)}</sup> ≈ [y]`}]),
    ...maMit(maSaetze(607, 12, R => { const a = R.p([1, 2, 3, 4, 0.5]), b = R.p([1, 2, 4, 8, 9, 6]); if (a === b) return null; const x = Math.log(b / a) / 2; return [{a, b, Lx:maR(x), Ly:maR(a * Math.exp(x))}]; })),
    hinweise:['Gleichsetzen, mit e<sup>x</sup> multiplizieren: e<sup>x</sup> · e<sup>x</sup> = e<sup>2x</sup>, e<sup>−x</sup> · e<sup>x</sup> = 1.', 'Nach e<sup>2x</sup> auflösen, ln anwenden, durch 2 teilen.'],
    merke:'Schnittpunkt zweier e-Funktionen: gleichsetzen, auf eine e-Potenz bringen (Potenzgesetze), ln anwenden.'}),
  ]; })(),
/* ---------- Mathematik · EL e-Funktion mit linearem Anteil (schiefe Asymptote) ---------- */
...(() => {
  const T = ['Mathematik', 'Exponentialfunktion', 'Asymptote'];
  const term = w => { const l = maPoly([w.m, w.n]); return maExp(w.a, w.k, 0) + (l[0] === '−' ? ' − ' + l.slice(1) : ' + ' + l); };
  const asy = w => maLin(w.m, w.n);
  return [
  blBau('rechnung', {id:'EL1', modul:'EL', stufe:1, titel:'Schiefe Asymptote ablesen', tags:T.concat(['schiefe Asymptote']), kopf:'Asymptote y = mx + n',
    text:W => `Gib jeweils die Gleichung der Asymptote y = mx + n an und entscheide, für welche Richtung sich das Schaubild ihr nähert:<br>${W.map((w, i) => `<i>f</i><sub>${i + 1}</sub>(x) = ${term(w)}`).join('<br>')}`,
    spalten:['f₁', 'f₂', 'f₃'],
    zeilen:maAus('a', 'k', 'm', 'n').concat([
      {id:'mm', t:'m', e:'ma', f:'m', weg:w => `e<sup>${maZ(w.k)}x</sup> → 0 für x → ${w.k < 0 ? '+∞' : '−∞'}; übrig bleibt der lineare Teil y = ${asy(w)}; m = [mm]`},
      {id:'nn', t:'n', e:'ma', f:'n', weg:w => `n = [nn]`}]),
    ...maMit(maSaetze(901, 12, R => [0, 1, 2].map(() => ({a:R.p([1, 2, -1, 3, -2, 0.5]), k:R.p([-1, -0.5, 1, 0.5, -2]), m:R.p([1, -1, 0.5, 2, -0.5]), n:R.g(-4, 4)})))),
    wahl:[0, 1, 2].map(k => ({id:'r' + k, t:`f${'₁₂₃'[k]} nähert sich der Asymptote für`, opts:['x → +∞', 'x → −∞'], r:`k@${k} < 0 ? 0 : 1`})),
    hinweise:['Der e-Term geht gegen 0, wenn sein Exponent gegen −∞ geht.', 'k < 0: für x → +∞; k > 0: für x → −∞.', 'Der lineare Teil mx + n bleibt übrig – das ist die Asymptote.'],
    merke:'f(x) = a · e<sup>kx</sup> + mx + n: schiefe Asymptote y = mx + n (für x → +∞ bei k < 0, für x → −∞ bei k > 0).'}),
  blBau('rechnung', {id:'EL2', modul:'EL', stufe:2, titel:'Lage von Schaubild und Asymptote', tags:T.concat(['schiefe Asymptote', 'Abstand']), kopf:'Lage',
    text:W => `Gegeben ist ${maF('f', term(W[0]))}. Berechne f(${maZ(W[0].x0)}), den Wert der Asymptote an dieser Stelle und den senkrechten Abstand zwischen Schaubild und Asymptote (auf zwei Nachkommastellen).`,
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'k', 'm', 'n', 'x0', 'Lf', 'Ld').concat([
      {id:'fx', t:'f(x₀)', e:'ma', f:'Lf', weg:w => `f(${maZ(w.x0)}) = ${maZ(w.a)} · e<sup>${maZ(w.k * w.x0)}</sup> ${maVz(w.m * w.x0 + w.n)} ≈ [fx]`},
      {id:'gx', t:'Asymptote bei x₀', kurz:'y-Wert der Asymptote', e:'ma', f:'m * x0 + n', weg:w => `y = ${maZ(w.m)} · ${maK(w.x0)} ${maVz(w.n)} = [gx]`},
      {id:'ab', t:'senkrechter Abstand', kurz:'Abstand', e:'ma', f:'Ld', weg:w => `|f(x₀) − y| = |${maZ(w.a)} · e<sup>${maZ(w.k * w.x0)}</sup>| ≈ [ab]`}]),
    ...maMit(maSaetze(902, 12, R => { const a = R.p([1, 2, -1, 3, -2, 4]), k = R.p([-1, -0.5, 1, 0.5]), m = R.p([1, -1, 0.5, 2]), n = R.g(-3, 3), x0 = R.p([-2, -1, 1, 2, 3]);
      return [{a, k, m, n, x0, Lf:maR(a * Math.exp(k * x0) + m * x0 + n), Ld:maR(Math.abs(a * Math.exp(k * x0)))}]; })),
    wahl:[{id:'w', t:'Das Schaubild verläuft', opts:['oberhalb der Asymptote', 'unterhalb der Asymptote'], r:'a@0 > 0 ? 0 : 1'}],
    hinweise:['Der Abstand ist genau der e-Term a · e<sup>kx</sup>.', 'a > 0: e-Term positiv → Schaubild oberhalb.'],
    merke:'f(x) − (mx + n) = a · e<sup>kx</sup>: Vorzeichen von a entscheidet die Lage (a > 0 oberhalb), der Abstand wird in Richtung der Asymptote beliebig klein.'}),
  blBau('rechnung', {id:'EL3', modul:'EL', stufe:2, titel:'Schnitt mit einer Parallelen zur Asymptote', tags:T.concat(['Exponentialgleichung', 'Schnittpunkte']), kopf:'Schnittpunkt',
    text:W => `Gegeben ist ${maF('f', term(W[0]))}. Die Gerade h mit ${maF('h', maLin(W[0].m, W[0].n + W[0].c))} ist parallel zur Asymptote. Berechne den gemeinsamen Punkt von K<sub>f</sub> und h (auf zwei Nachkommastellen).`,
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'k', 'm', 'n', 'c', 'Lx', 'Ly').concat([
      {id:'x', t:'x', e:'ma', f:'Lx', weg:w => `f(x) = h(x): ${maExp(w.a, w.k, 0)} = ${maZ(w.c)} (der lineare Teil fällt weg) ⇔ e<sup>${maZ(w.k)}x</sup> = ${maZ(w.c / w.a, 4)} ⇔ x = ln(${maZ(w.c / w.a, 4)}) ÷ ${maK(w.k)} ≈ [x]`},
      {id:'y', t:'y', e:'ma', f:'Ly', weg:w => `y = h(x) ≈ [y]`}]),
    ...maMit(maSaetze(903, 12, R => { const a = R.p([1, 2, 3, -1, -2, 4]), k = R.p([-1, -0.5, 1, 0.5, -2]), m = R.p([1, -1, 0.5, 2]), n = R.g(-3, 3), c = R.p([1, 2, 3, 4, 6]) * Math.sign(a);
      const x = Math.log(c / a) / k; return x !== 0 ? [{a, k, m, n, c, Lx:maR(x), Ly:maR(m * maR(x) + n + c)}] : null; })),
    hinweise:['Gleichsetzen: Der lineare Teil steht auf beiden Seiten und fällt weg.', 'Nach e<sup>…</sup> auflösen, ln anwenden.', 'y-Wert mit der Geraden berechnen.'],
    merke:'Schnitt von K<sub>f</sub> mit einer Parallelen zur Asymptote: lineare Teile heben sich weg → einfache Exponentialgleichung a · e<sup>kx</sup> = c.'}),
  blBau('rechnung', {id:'EL4', modul:'EL', stufe:3, titel:'Prüfungsniveau: Funktionsterm mit schiefer Asymptote bestimmen', tags:T.concat(['Funktionsterm bestimmen', 'Prüfung']), kopf:'Funktionsterm',
    text:W => { const w = W[0]; return `Die Funktion f hat einen Term der Form f(x) = a · e<sup>${maZ(w.k)}x</sup> + mx + n. Ihr Schaubild hat die Asymptote mit der Gleichung y = ${asy(w)} und schneidet die y-Achse im Punkt S(0 | ${maZ(w.a + w.n)}). Bestimme m, n und a und berechne f(${maZ(w.x0)}) (auf zwei Nachkommastellen).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'k', 'm', 'n', 'x0', 'L').concat([
      {id:'mm', t:'m', e:'ma', f:'m', weg:w => `Asymptote = linearer Teil: m = [mm]`},
      {id:'nn', t:'n', e:'ma', f:'n', weg:w => `n = [nn]`},
      {id:'aa', t:'a', e:'ma', f:'a', weg:w => `f(0) = a · e⁰ + n = a ${maVz(w.n)} = ${maZ(w.a + w.n)} → a = [aa]`},
      {id:'fx', t:'f(x₀)', e:'ma', f:'L', weg:w => `${maF('f', term(w))}; f(${maZ(w.x0)}) ≈ [fx]`}]),
    ...maMit(maSaetze(904, 12, R => { const a = R.p([1, 2, 3, -1, -2, 4, -3]), k = R.p([-0.5, -1, 0.5, -2]), m = R.p([1, -1, 0.5, 2, -0.5]), n = R.g(-4, 4), x0 = R.p([-1, 1, 2]);
      return [{a, k, m, n, x0, L:maR(a * Math.exp(k * x0) + m * x0 + n)}]; })),
    hinweise:['Die Asymptote liefert den linearen Teil mx + n.', 'S(0 | …) einsetzen: e⁰ = 1.'],
    merke:'Aus Asymptote und y-Achsenabschnitt: mx + n direkt ablesen; f(0) = a + n liefert a.'}),
  blBau('rechnung', {id:'EL5', modul:'EL', stufe:3, titel:'Prüfungsniveau: e-Funktion mit linearem Anteil untersuchen', tags:T.concat(['Prüfung', 'Schaubild']), kopf:'Untersuchung',
    text:W => { const w = W[0]; return `Gegeben ist die Funktion f mit ${maF('f', term(w))}; x ∈ ℝ. Ihr Schaubild ist K.%%GRAFIK%%a) Gib die Gleichung der Asymptote an.<br>b) Berechne den Schnittpunkt von K mit der y-Achse.<br>c) Berechne die Stelle, an der K die Gerade y = ${maLin(w.m, w.n + w.c)} schneidet (auf zwei Nachkommastellen).<br>d) Beschreibe die Lage von K zur Asymptote.`; },
    grafik:W => { const w = W[0], f = x => w.a * Math.exp(w.k * x) + w.m * x + w.n, g = x => w.m * x + w.n, x0 = -2, x1 = Math.max(5, Math.ceil(w.Lx) + 2);
      const o = maBereich(f, x0, x1, -0.5, x1), dy = (o.y1 - o.y0) * 0.06 * Math.sign(w.a);
      return maGraf([{f, name:'K', lx:1.6, ly:f(1.4) + dy}, {f:g, name:'A', farbe:'var(--stumm,#888)', lx:-1.2, ly:g(-1.4) - dy}], o); },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'k', 'm', 'n', 'c', 'Lx').concat([
      {id:'mm', t:'Asymptote: m', kurz:'m', e:'ma', f:'m', weg:w => `y = [mm]x ${maVz(w.n)}`},
      {id:'nn', t:'Asymptote: n', kurz:'n', e:'ma', f:'n', weg:w => `n = [nn]`},
      {id:'sy', t:'y-Achsenabschnitt f(0)', kurz:'f(0)', e:'ma', f:'a + n', weg:w => `f(0) = ${maZ(w.a)} ${maVz(w.n)} = [sy]`},
      {id:'x', t:'Schnittstelle', e:'ma', f:'Lx', weg:w => `${maExp(w.a, w.k, 0)} = ${maZ(w.c)} ⇔ x = ln(${maZ(w.c / w.a, 4)}) ÷ ${maK(w.k)} ≈ [x]`}]),
    ...maMit(maSaetze(905, 12, R => { const a = R.p([2, 3, 4, -2, -3]), k = R.p([-0.5, -1]), m = R.p([1, 0.5, -0.5, -1]), n = R.g(-3, 2), c = R.p([1, 2]) * Math.sign(a);
      const x = Math.log(c / a) / k; return x > 0 ? [{a, k, m, n, c, Lx:maR(x)}] : null; })),
    wahl:[{id:'w', t:'d) K verläuft', opts:['oberhalb der Asymptote', 'unterhalb der Asymptote'], r:'a@0 > 0 ? 0 : 1'},
          {id:'w2', t:'K nähert sich der Asymptote für', opts:['x → +∞', 'x → −∞'], r:'k@0 < 0 ? 0 : 1'}],
    hinweise:['Asymptote: linearer Teil, weil der e-Term für x → +∞ gegen 0 geht (k < 0).', 'f(x) = Gerade: lineare Teile heben sich weg.', 'Lage: Vorzeichen des e-Terms.'],
    merke:'Prüfungsschema e-Funktion mit linearem Anteil: Asymptote (linearer Teil), Achsenschnittpunkte, Gleichung f(x) = Gerade, Lage über das Vorzeichen von a.'}),
  ]; })(),
/* ---------- Mathematik · Ergänzungen nach dem Bildungsplan (LPE 1): Substitution x³, Wurzelziehen, Näherungsverfahren,
   Faktorisieren mit e, Streckung in x-Richtung, Art gemeinsamer Punkte, Kostenfunktion 3. Grades ---------- */
...(() => {
  return [
  blBau('rechnung', {id:'GL9', modul:'GL', stufe:3, titel:'Prüfungsniveau: Substitution mit z = x³', tags:['Mathematik', 'Gleichungen', 'Substitution', 'Prüfung'], kopf:'Substitution',
    text:W => `Löse die Gleichung ${maPoly([W[0].a, 0, 0, -W[0].a * (W[0].z1 + W[0].z2), 0, 0, W[0].a * W[0].z1 * W[0].z2])} = 0 mit der Substitution z = x³ (z₁ < z₂, x₁ < x₂, auf zwei Nachkommastellen).`,
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'z1', 'z2', 'L1', 'L2').concat([
      {id:'u1', t:'z₁', e:'ma', f:'z1', weg:w => `x⁶ = (x³)² = z²: ${maPoly([w.a, -w.a * (w.z1 + w.z2), w.a * w.z1 * w.z2], 'z')} = 0${w.a !== 1 ? '; durch ' + maZ(w.a) + ' teilen' : ''}; pq-Formel: z₁ = [u1]`},
      {id:'u2', t:'z₂', e:'ma', f:'z2', weg:w => `z₂ = [u2]`},
      {id:'x1', t:'x₁', e:'ma', f:'L1', weg:w => `x³ = ${maZ(w.z1)} → x = ∛(${maZ(w.z1)}) ≈ [x1]`},
      {id:'x2', t:'x₂', e:'ma', f:'L2', weg:w => `x³ = ${maZ(w.z2)} → x = ∛(${maZ(w.z2)}) ≈ [x2]`}]),
    ...maMit(maSaetze(1001, 12, R => { const z1 = R.p([-27, -8, -1, -2, 1, 2]), z2 = R.p([1, 2, 3, 8, 27, 4, 5]), a = R.p([1, 1, 2, 0.5]); return z1 < z2 ? [{a, z1, z2, L1:maR(Math.cbrt(z1)), L2:maR(Math.cbrt(z2))}] : null; })),
    wahl:[{id:'w', t:'Warum hat x³ = z auch für negatives z eine Lösung?', opts:['Eine ungerade Potenz kann negativ werden, z. B. (−2)³ = −8.', 'Weil man aus negativen Zahlen immer Wurzeln ziehen darf.', 'Das stimmt nicht, x³ = −8 hat keine Lösung.'], r:'0'}],
    hinweise:['x⁶ = (x³)², also z = x³ setzen.', 'Quadratische Gleichung in z lösen.', 'x³ = z hat immer genau eine Lösung x = ∛z – auch für negatives z.'],
    merke:'ax⁶ + bx³ + c = 0: z = x³ → az² + bz + c = 0 → x = ∛z (bei ungeraden Potenzen genau eine Lösung, auch für z < 0).'}),
  blBau('rechnung', {id:'GL10', modul:'GL', stufe:1, titel:'Potenzgleichungen: Wurzel ziehen', tags:['Mathematik', 'Gleichungen', 'Wurzeln'], kopf:'Lösungen',
    text:W => `Bestimme jeweils die Anzahl der Lösungen und die größte Lösung (auf zwei Nachkommastellen):<br>① x³ = ${maZ(W[0].c)}<br>② x⁴ = ${maZ(W[1].c)}<br>③ ${maZ(W[2].a)}x⁵ ${maVz(W[2].b)} = ${maZ(W[2].d)}`,
    spalten:['① x³', '② x⁴', '③ x⁵'],
    zeilen:maAus('a', 'b', 'c', 'd', 'N', 'G').concat([
      {id:'n', t:'Anzahl der Lösungen', kurz:'Anzahl', e:'ma', f:'N', weg:w => w.a ? `${maVz(-w.b)}, ÷ ${maZ(w.a)}: x⁵ = ${maZ((w.d - w.b) / w.a)}; ungerader Exponent → genau eine Lösung: [n]` : w.N === 1 && w.G === 0 ? 'x⁴ = 0 → nur x = 0: [n]' : w.N === 2 ? `gerader Exponent, rechte Seite positiv → ±: [n]` : `ungerader Exponent → genau eine Lösung: [n]`},
      {id:'g', t:'größte Lösung', e:'ma', f:'G', weg:w => `x ≈ [g]`}]),
    ...maMit(maSaetze(1002, 12, R => { const c1 = R.p([-8, 27, -64, 10, -5, 125]), c2 = R.p([16, 81, 10, 5, 0, 625]), a = R.p([2, 4, -1, 0.5]), b = R.g(-5, 5), d = R.g(-6, 8);
      const r = (d - b) / a; return [{a:0, b:0, c:c1, d:0, N:1, G:maR(Math.cbrt(c1))}, {a:0, b:0, c:c2, d:0, N:c2 > 0 ? 2 : 1, G:maR(Math.pow(c2, 0.25))}, {a, b, c:0, d, N:1, G:maR(Math.sign(r) * Math.pow(Math.abs(r), 0.2))}]; })),
    hinweise:['Gerader Exponent: x = ±ⁿ√c (c > 0), keine Lösung für c < 0.', 'Ungerader Exponent: genau eine Lösung, auch für negative c.'],
    merke:'xⁿ = c: n gerade → zwei Lösungen ±ⁿ√c (c > 0), eine (c = 0), keine (c < 0); n ungerade → genau eine Lösung.'}),
  blBau('rechnung', {id:'GL11', modul:'GL', stufe:2, titel:'Näherungsweise lösen: Vorzeichenwechsel', tags:['Mathematik', 'Gleichungen', 'Näherungsverfahren'], kopf:'Wertetabelle',
    text:W => `Die Gleichung ${maPoly([1, 0, W[0].p, W[0].q])} = 0 lässt sich nicht mit einer Formel lösen. Berechne die Wertetabelle, finde das ganzzahlige Intervall mit Vorzeichenwechsel und halbiere es einmal (Intervallhalbierung).`,
    spalten:['', '', '', '', ''],
    zeilen:maAus('p', 'q', 'M', 'FM', 'I', 'H').concat([{id:'x', t:'x', e:'ma'},
      {id:'y', t:'f(x)', kurz:'f(x)', e:'ma', f:'x * x * x + p * x + q', weg:w => `f(${maZ(w.x)}) = [y]`}]),
    ...maMit(maSaetze(1003, 12, R => { const p = R.g(-3, 4), q = R.g(-4, 4), f = x => x * x * x + p * x + q, X = [-2, -1, 0, 1, 2], v = X.map(f);
      const w = []; for (let i = 0; i < 4; i++) if (v[i] * v[i + 1] < 0) w.push(i); if (w.length !== 1 || v.includes(0)) return null;
      const i = w[0], M = X[i] + 0.5, FM = maR(f(M)); if (!FM) return null; const H = v[i] * FM < 0 ? 0 : 1; return X.map(x => ({p, q, M, FM, I:i, H, x})); })),
    felder:[{id:'fm', t:'Funktionswert in der Mitte des Intervalls mit Vorzeichenwechsel', kurz:'f(Mitte)', f:'FM@0', e:'', weg:(w, F, W) => `f(${maZ(W[0].M)}) = ${maZ(W[0].FM)}`}],
    wahl:[{id:'w', t:'Eine Nullstelle liegt im Intervall', opts:['[−2; −1]', '[−1; 0]', '[0; 1]', '[1; 2]'], r:'I@0'},
          {id:'w2', t:'Nach der Halbierung liegt sie', opts:['in der linken Hälfte', 'in der rechten Hälfte'], r:'H@0'}],
    hinweise:['Vorzeichenwechsel zwischen zwei Nachbarwerten: dazwischen liegt eine Nullstelle.', 'Funktionswert in der Mitte berechnen und das Teilintervall mit Vorzeichenwechsel nehmen.'],
    merke:'Näherungsweise lösen: Vorzeichenwechsel suchen, Intervall halbieren, wiederholen – oder grafisch bzw. mit dem Rechner (DMW).'}),
  blBau('rechnung', {id:'EX12', modul:'EX', stufe:2, titel:'Faktorisieren mit e-Termen', tags:['Mathematik', 'Exponentialfunktion', 'Faktorisieren'], kopf:'Lösung',
    text:W => `Löse durch Ausklammern (auf zwei Nachkommastellen):<br>① e<sup>2x</sup> ${maVz(-W[0].p)}·e<sup>x</sup> = 0<br>② x · e<sup>x</sup> ${maVz(-W[1].p)}·e<sup>x</sup> = 0`,
    spalten:['①', '②'],
    zeilen:maAus('p', 'L', 't').concat([{id:'x', t:'x', e:'ma', f:'L', weg:w => w.t ? `e<sup>x</sup> ausklammern: e<sup>x</sup>(x ${maVz(-w.p)}) = 0; e<sup>x</sup> > 0 → x ${maVz(-w.p)} = 0 → x = [x]` : `e<sup>x</sup> ausklammern: e<sup>x</sup>(e<sup>x</sup> ${maVz(-w.p)}) = 0; e<sup>x</sup> = 0 unmöglich → e<sup>x</sup> = ${maZ(w.p)} → x = ln(${maZ(w.p)}) ≈ [x]`}]),
    ...maMit(maSaetze(1004, 12, R => { const p = R.p([2, 3, 5, 0.5, 4, 10]), r = R.g(-4, 5); return [{p, L:maLn(p), t:0}, {p:r, L:r, t:1}]; })),
    wahl:[{id:'w', t:'Warum fällt der Faktor e<sup>x</sup> bei der Lösung weg?', opts:['e<sup>x</sup> ist immer positiv, also nie null.', 'e<sup>x</sup> ist immer 1.', 'Man darf durch e<sup>x</sup> nicht teilen.'], r:'0'}],
    hinweise:['Gemeinsamen Faktor e<sup>x</sup> ausklammern.', 'Satz vom Nullprodukt; e<sup>x</sup> = 0 hat keine Lösung.'],
    merke:'e<sup>2x</sup> − p·e<sup>x</sup> = e<sup>x</sup>(e<sup>x</sup> − p) und x·e<sup>x</sup> − p·e<sup>x</sup> = e<sup>x</sup>(x − p): e<sup>x</sup> ausklammern, e<sup>x</sup> ≠ 0.'}),
  blBau('rechnung', {id:'TR6', modul:'TR', stufe:2, titel:'Streckung in x-Richtung', tags:['Mathematik', 'Funktionen', 'Abbildungen', 'Streckung'], kopf:'Funktion g',
    text:W => `Gegeben ist ${maF('f', maFakt(W[0].r1) + maFakt(W[0].r2))}. Das Schaubild von g mit g(x) = f(${maZ(W[0].b)}x) entsteht durch Streckung in x-Richtung. Bestimme die Nullstellen von g (x₁ < x₂) und g(0).`,
    spalten:['Ergebnis'],
    zeilen:maAus('r1', 'r2', 'b', 's1', 's2').concat([
      {id:'x1', t:'x₁', e:'ma', f:'s1', weg:w => `g(x) = 0 ⇔ f(${maZ(w.b)}x) = 0 ⇔ ${maZ(w.b)}x = ${maZ(w.r1)} oder ${maZ(w.b)}x = ${maZ(w.r2)}; x₁ = [x1]`},
      {id:'x2', t:'x₂', e:'ma', f:'s2', weg:w => `x₂ = [x2]`},
      {id:'g0', t:'g(0)', e:'ma', f:'r1 * r2', weg:w => `g(0) = f(0) = [g0] (der y-Achsenabschnitt bleibt)`}]),
    ...maMit(maSaetze(1005, 12, R => { const r1 = R.g(-4, 4), r2 = R.g(-4, 6), b = R.p([2, 0.5, 4, -1, 0.25, -2]); if (r1 === r2) return null; const s = maSort([r1 / b, r2 / b]); return [{r1, r2, b, s1:maR(s[0]), s2:maR(s[1])}]; })),
    wahl:[{id:'w', t:'Bei g(x) = f(b · x) mit b > 1 wird das Schaubild in x-Richtung', opts:['gestaucht (Faktor 1/b)', 'gestreckt (Faktor b)'], r:'0'}],
    hinweise:['Jede Stelle x des Schaubilds von f wird zu x ÷ b.', 'g(0) = f(0): Der Schnittpunkt mit der y-Achse bleibt.', 'b = −1: Spiegelung an der y-Achse.'],
    merke:'g(x) = f(b · x): Streckung in x-Richtung mit Faktor 1/b (b > 1 staucht)<br>Nullstellen von g = Nullstellen von f geteilt durch b<br>b = −1 spiegelt an der y-Achse.'}),
  blBau('rechnung', {id:'QF7', modul:'QF', stufe:2, titel:'Parabel und Gerade: Schnitt, Berührung oder keine gemeinsamen Punkte', tags:['Mathematik', 'Parabel', 'Diskriminante', 'gemeinsame Punkte'], kopf:'f(x) − g(x) = 0',
    text:W => `Gegeben ist ${maF('f', maPoly([1, W[0].b, W[0].c]))}. Untersuche mit der Diskriminante der Gleichung f(x) = g(x), wie viele gemeinsame Punkte K<sub>f</sub> mit den Geraden hat:<br>${W.map((w, i) => `<i>g</i><sub>${i + 1}</sub>(x) = ${maLin(w.m, w.n)}`).join('<br>')}`,
    spalten:['g₁', 'g₂', 'g₃'],
    zeilen:maAus('b', 'c', 'm', 'n').concat([{id:'D', t:'Diskriminante', kurz:'D', e:'ma', f:'(b - m) * (b - m) - 4 * (c - n)', weg:w => `${maPoly([1, w.b - w.m, w.c - w.n])} = 0; D = ${maK(w.b - w.m)}² − 4 · ${maK(w.c - w.n)} = [D]`}]),
    ...maMit(maSaetze(1006, 12, R => { const b = R.g(-4, 4), c = R.g(-3, 5), s = R.p([[1, 0, -1], [0, 1, -1], [-1, 1, 0], [1, -1, 0], [0, -1, 1], [-1, 0, 1]]);
      return s.map(t => { const x0 = R.g(-3, 3), m = 2 * x0 + b, n = c - x0 * x0 + t * R.p([1, 2, 4]); return {b, c, m, n}; }); })),
    wahl:[0, 1, 2].map(k => ({id:'a' + k, t:`K<sub>f</sub> und g${'₁₂₃'[k]}:`, opts:['zwei Schnittpunkte', 'ein Berührpunkt', 'keine gemeinsamen Punkte'], r:`(b@${k} - m@${k}) * (b@${k} - m@${k}) - 4 * (c@${k} - n@${k}) > 0 ? 0 : ((b@${k} - m@${k}) * (b@${k} - m@${k}) - 4 * (c@${k} - n@${k}) == 0 ? 1 : 2)`})),
    hinweise:['Gleichsetzen und auf „… = 0“ bringen.', 'D > 0: zwei Schnittpunkte; D = 0: Berührpunkt (Gerade ist Tangente); D < 0: keine gemeinsamen Punkte.'],
    merke:'Lage, Anzahl und Art gemeinsamer Punkte: Diskriminante von f(x) − g(x) = 0 – zwei Schnittpunkte, ein Berührpunkt oder keine gemeinsamen Punkte.'}),
  blBau('rechnung', {id:'PR5', modul:'PR', stufe:3, titel:'Kostenfunktion 3. Grades', tags:['Mathematik', 'Prüfung', 'Kostenfunktion', 'Anwendung'], kopf:'Kostenanalyse',
    text:W => { const w = W[0]; return `Für die Produktion eines Bauteils gilt die Kostenfunktion ${maF('K', maPoly([w.a, -w.b, w.c, w.F]))} (x in Stück, K in €). Der Verkaufspreis beträgt ${maZ(w.p)} € je Stück.<br>a) Gib die Fixkosten an.<br>b) Berechne für ${maZ(w.x0)} Stück die Gesamtkosten, die Stückkosten, den Erlös und den Gewinn.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'c', 'F', 'p', 'x0').concat([
      {id:'fk', t:'Fixkosten', e:'€', f:'F', weg:w => `K(0) = [fk]`},
      {id:'kx', t:'Gesamtkosten K(x₀)', kurz:'K(x₀)', e:'€', f:'a * x0 * x0 * x0 - b * x0 * x0 + c * x0 + F', weg:w => `K(${maZ(w.x0)}) = ${maZ(w.a)} · ${maZ(w.x0)}³ − ${maZ(w.b)} · ${maZ(w.x0)}² + ${maZ(w.c)} · ${maZ(w.x0)} + ${maZ(w.F)} = [kx]`},
      {id:'sk', t:'Stückkosten', e:'€', f:'kx / x0', weg:w => `K(${maZ(w.x0)}) ÷ ${maZ(w.x0)} = [sk]`},
      {id:'ex', t:'Erlös E(x₀)', kurz:'E(x₀)', e:'€', f:'p * x0', weg:w => `${maZ(w.p)} · ${maZ(w.x0)} = [ex]`},
      {id:'gx', t:'Gewinn G(x₀)', kurz:'G(x₀)', e:'€', f:'ex - kx', weg:w => `E − K = [gx]`}]),
    ...maMit(maSaetze(1007, 12, R => { const a = R.p([0.01, 0.02]), b = R.p([0.3, 0.6, 0.9]), c = R.p([15, 20, 25, 30, 40]), F = R.p([200, 300, 400, 500]), p = R.p([20, 25, 30, 35]), x0 = R.p([10, 20, 30, 40]);
      return b * b < 3 * a * c ? [{a, b, c, F, p, x0}] : null; })),
    wahl:[{id:'w', t:'Bei dieser Menge macht der Betrieb', opts:['Gewinn', 'Verlust'], r:'p@0 * x0@0 - (a@0 * x0@0 * x0@0 * x0@0 - b@0 * x0@0 * x0@0 + c@0 * x0@0 + F@0) > 0 ? 0 : 1'}],
    hinweise:['Fixkosten = absolutes Glied (K bei x = 0).', 'Stückkosten = K(x) ÷ x.', 'Gewinn = Erlös − Kosten.'],
    merke:'Kostenfunktion 3. Grades: K(0) = Fixkosten<br>Stückkosten k(x) = K(x) ÷ x<br>Gewinn G(x) = E(x) − K(x).'}),
  ]; })(),
/* ---------- Mathematik · PR Prüfungstraining Lehrplaneinheit 1 (zusammengesetzte Aufgaben auf Prüfungsniveau) ---------- */
...(() => {
  const T = ['Mathematik', 'Prüfung'];
  return [
  blBau('rechnung', {id:'PR1', modul:'PR', stufe:3, titel:'Parabel und Gerade', tags:T.concat(['Parabel', 'Schnittpunkte', 'Scheitelpunkt']), kopf:'Lösungen',
    text:W => { const w = W[0]; return `Gegeben sind ${maF('f', maPoly([w.a, -w.a * (w.n1 + w.n2), w.a * w.n1 * w.n2]))} und ${maF('g', maLin(w.m, w.t))}; ihre Schaubilder sind K und G.%%GRAFIK%%a) Bestimme den Scheitelpunkt von K.<br>b) Berechne die Nullstellen von f (x₁ < x₂).<br>c) Berechne die Schnittstellen von K und G (u₁ < u₂).`; },
    grafik:W => { const w = W[0], f = x => w.a * (x - w.n1) * (x - w.n2), g = x => w.m * x + w.t, lo = Math.min(w.n1, w.s1), hi = Math.max(w.n2, w.s2);
      return maGraf([{f, name:'K'}, {f:g, name:'G'}], maBereich(f, lo - 1.5, hi + 1.5, lo - 0.5, hi + 0.5)); },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'n1', 'n2', 's1', 's2', 'm', 't').concat([
      {id:'xs', t:'x<sub>S</sub>', e:'ma', f:'(n1 + n2) / 2', weg:w => `x<sub>S</sub> = −b ÷ (2a) = ${maZ(w.a * (w.n1 + w.n2))} ÷ ${maK(2 * w.a)} = [xs]`},
      {id:'ys', t:'y<sub>S</sub>', e:'ma', f:'a * (xs - n1) * (xs - n2)', weg:w => `y<sub>S</sub> = f(${maZ((w.n1 + w.n2) / 2)}) = [ys]`},
      {id:'x1', t:'Nullstelle x₁', kurz:'x₁', e:'ma', f:'n1', weg:w => `f(x) = 0 ⇔ ${maPoly([1, -(w.n1 + w.n2), w.n1 * w.n2])} = 0 (durch ${maK(w.a)} geteilt); pq-Formel: x₁ = [x1]`},
      {id:'x2', t:'Nullstelle x₂', kurz:'x₂', e:'ma', f:'n2', weg:w => `x₂ = [x2]`},
      {id:'u1', t:'Schnittstelle u₁', kurz:'u₁', e:'ma', f:'s1', weg:w => `f(x) = g(x) ⇔ ${maPoly([w.a, -w.a * (w.n1 + w.n2) - w.m, w.a * w.n1 * w.n2 - w.t])} = 0; abc-Formel: u₁ = [u1]`},
      {id:'u2', t:'Schnittstelle u₂', kurz:'u₂', e:'ma', f:'s2', weg:w => `u₂ = [u2]`}]),
    ...maMit(maSaetze(701, 14, R => { const a = R.p([1, -1, 0.5, -0.5, 2]), n1 = R.g(-5, 2), n2 = n1 + R.p([2, 4, 6]), s1 = R.g(-4, 2), s2 = s1 + R.p([1, 2, 3, 4, 5]);
      const m = a * (s1 + s2 - n1 - n2), t = a * (n1 * n2 - s1 * s2); return m && (s1 !== n1 || s2 !== n2) ? [{a, n1, n2, s1, s2, m, t}] : null; })),
    hinweise:['Scheitel: x<sub>S</sub> = −b ÷ (2a), y<sub>S</sub> = f(x<sub>S</sub>).', 'Nullstellen: f(x) = 0, ggf. durch a teilen, pq-Formel.', 'Schnittstellen: f(x) = g(x), alles auf eine Seite, abc-Formel.'],
    merke:'Typische Teilaufgaben: Scheitelpunkt, Nullstellen, gemeinsame Punkte – immer erst die Gleichung auf „… = 0“ bringen.'}),
  blBau('rechnung', {id:'PR2', modul:'PR', stufe:3, titel:'Polynom 3. Grades und Ursprungsgerade', tags:T.concat(['Polynomfunktion', 'Schnittpunkte']), kopf:'Lösungen',
    text:W => { const w = W[0]; return `Gegeben ist ${maF('f', maPoly([w.a, -w.a * (w.p + w.q), w.a * w.p * w.q, 0]))} mit dem Schaubild K und die Ursprungsgerade G mit ${maF('g', maLin(w.m, 0))}.%%GRAFIK%%a) Berechne die Nullstellen von f (x₁ < x₂ < x₃).<br>b) Berechne die beiden weiteren gemeinsamen Punkte von K und G (außer dem Ursprung; u₁ < u₂).<br>c) Beschreibe den globalen Verlauf von K.`; },
    grafik:W => { const w = W[0], f = x => w.a * x * (x - w.p) * (x - w.q), g = x => w.m * x, lo = Math.min(w.s1, w.u1, 0), hi = Math.max(w.s3, w.u2, 0);
      return maGraf([{f, name:'K'}, {f:g, name:'G'}], maBereich(f, lo - 1.2, hi + 1.2, lo - 0.3, hi + 0.3)); },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'p', 'q', 'm', 's1', 's2', 's3', 'u1', 'u2').concat([
      {id:'x1', t:'Nullstelle x₁', kurz:'x₁', e:'ma', f:'s1', weg:w => `x · (${maPoly([w.a, -w.a * (w.p + w.q), w.a * w.p * w.q])}) = 0 → x = 0, x = ${maZ(Math.min(w.p, w.q))}, x = ${maZ(Math.max(w.p, w.q))}; x₁ = [x1]`},
      {id:'x2', t:'Nullstelle x₂', kurz:'x₂', e:'ma', f:'s2', weg:w => `x₂ = [x2]`}, {id:'x3', t:'Nullstelle x₃', kurz:'x₃', e:'ma', f:'s3', weg:w => `x₃ = [x3]`},
      {id:'v1', t:'Schnittstelle u₁', kurz:'u₁', e:'ma', f:'u1', weg:w => `f(x) = g(x) ⇔ x · (${maPoly([w.a, -w.a * (w.p + w.q), w.a * w.p * w.q - w.m])}) = 0; Klammer: u₁ = [v1]`},
      {id:'w1', t:'y-Wert bei u₁', kurz:'g(u₁)', e:'ma', f:'m * u1', weg:w => `g(${maZ(w.u1)}) = [w1]`},
      {id:'v2', t:'Schnittstelle u₂', kurz:'u₂', e:'ma', f:'u2', weg:w => `u₂ = [v2]`},
      {id:'w2', t:'y-Wert bei u₂', kurz:'g(u₂)', e:'ma', f:'m * u2', weg:w => `g(${maZ(w.u2)}) = [w2]`}]),
    ...maMit(maSaetze(702, 14, R => { const a = R.p([1, -1, 0.5, -0.5]), p = R.g(-4, 4), q = R.g(-4, 4), u1 = R.g(-4, 2), u2 = R.g(-2, 5);
      if (!p || !q || p === q || u1 >= u2 || !u1 || !u2 || u1 + u2 !== p + q) return null; const m = a * (p * q - u1 * u2); if (!m) return null;
      const s = maSort([0, p, q]); return [{a, p, q, m, s1:s[0], s2:s[1], s3:s[2], u1, u2}]; })),
    wahl:[{id:'w', t:'Globaler Verlauf von K:', opts:['von links unten nach rechts oben', 'von links oben nach rechts unten'], r:'a@0 > 0 ? 0 : 1'}],
    hinweise:['Kein konstanter Summand → x ausklammern.', 'f(x) − g(x) = 0: wieder x ausklammern, die Klammer liefert die weiteren Schnittstellen.'],
    merke:'Ursprungsgerade und Polynom ohne Absolutglied: f(x) = g(x) → x ausklammern → Klammer mit Formel lösen; y-Werte mit g berechnen.'}),
  blBau('rechnung', {id:'PR3', modul:'PR', stufe:3, titel:'Abkühlung (Exponentialmodell)', tags:T.concat(['Exponentialfunktion', 'Anwendung', 'Asymptote']), kopf:'Modell',
    text:W => { const w = W[0]; return `Ein Getränk kühlt in einem Raum ab. Seine Temperatur wird durch ${maF('T', maZ(w.tu) + ' + ' + maZ(w.t0 - w.tu) + ' · e<sup>−' + maZ(w.k) + 't</sup>', 't')} beschrieben (t in Minuten, T in °C).<br>a) Gib die Anfangstemperatur und die Temperatur an, der sich das Getränk langfristig nähert.<br>b) Berechne die Temperatur nach ${maZ(w.t1)} Minuten und die Abnahme in diesen ${maZ(w.t1)} Minuten.<br>c) Berechne, wann das Getränk ${maZ(w.g)} °C erreicht (auf zwei Nachkommastellen).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('tu', 't0', 'k', 't1', 'g', 'Lt', 'Lg').concat([
      {id:'ta', t:'Anfangstemperatur T(0)', kurz:'T(0)', e:'°C', f:'t0', weg:w => `T(0) = ${maZ(w.tu)} + ${maZ(w.t0 - w.tu)} · e⁰ = [ta]`},
      {id:'tl', t:'langfristige Temperatur (Asymptote)', kurz:'langfristig', e:'°C', f:'tu', weg:w => `e<sup>−${maZ(w.k)}t</sup> → 0 für t → ∞ → T → [tl] (Raumtemperatur)`},
      {id:'tt', t:'Temperatur nach t₁ Minuten', kurz:'T(t₁)', e:'°C', f:'Lt', weg:w => `T(${maZ(w.t1)}) = ${maZ(w.tu)} + ${maZ(w.t0 - w.tu)} · e<sup>−${maZ(w.k * w.t1)}</sup> ≈ [tt]`},
      {id:'ab', t:'Abnahme in den ersten t₁ Minuten', kurz:'Abnahme', e:'°C', f:'t0 - Lt', weg:w => `${maZ(w.t0)} − ${maZ(w.Lt)} = [ab]`},
      {id:'tz', t:'Zeitpunkt für die Zieltemperatur', kurz:'Zeitpunkt', e:'Minuten', f:'Lg', weg:w => `${maZ(w.tu)} + ${maZ(w.t0 - w.tu)}e<sup>−${maZ(w.k)}t</sup> = ${maZ(w.g)} ⇔ e<sup>−${maZ(w.k)}t</sup> = ${maZ((w.g - w.tu) / (w.t0 - w.tu), 4)} ⇔ t = ln(${maZ((w.g - w.tu) / (w.t0 - w.tu), 4)}) ÷ (−${maZ(w.k)}) ≈ [tz]`}]),
    ...maMit(maSaetze(703, 12, R => { const tu = R.p([18, 20, 21, 22]), t0 = R.p([70, 75, 80, 85, 90]), k = R.p([0.05, 0.08, 0.1, 0.12, 0.15]), t1 = R.p([5, 10, 15]), g = R.p([30, 35, 40, 45, 50]);
      return [{tu, t0, k, t1, g, Lt:maR(tu + (t0 - tu) * Math.exp(-k * t1)), Lg:maR(Math.log((g - tu) / (t0 - tu)) / -k)}]; })),
    wahl:[{id:'w', t:'Kann das Getränk in diesem Modell kälter als die Raumtemperatur werden?', opts:['Nein, die Raumtemperatur ist die waagrechte Asymptote.', 'Ja, nach genügend langer Zeit.'], r:'0'}],
    hinweise:['t = 0 einsetzen: e⁰ = 1.', 'Für große t geht e<sup>−kt</sup> gegen 0.', 'Gleichung: Raumtemperatur abziehen, durch den Faktor teilen, ln anwenden.'],
    merke:'Begrenzte Abnahme T(t) = S + (T₀ − S) · e<sup>−kt</sup>: Startwert T₀, Schranke S (Asymptote), Zeitpunkte über ln.'}),
  blBau('rechnung', {id:'PR4', modul:'PR', stufe:3, titel:'Kosten, Erlös und Gewinn', tags:T.concat(['Parabel', 'Anwendung', 'Gewinnschwelle']), kopf:'Gewinnanalyse',
    text:W => { const w = W[0]; return `Ein Betrieb rechnet mit der Kostenfunktion ${maF('K', maPoly([w.a, w.kv, w.F]))} und dem Erlös ${maF('E', maLin(w.p, 0))} (x in Stück, Beträge in €).<br>a) Gib die Fixkosten an.<br>b) Bestimme die Gewinnfunktion G(x) = E(x) − K(x) und berechne Gewinnschwelle und Gewinngrenze.<br>c) Berechne die gewinnmaximale Menge und den maximalen Gewinn.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'kv', 'F', 'p', 'u', 'v').concat([
      {id:'fk', t:'Fixkosten', e:'€', f:'F', weg:w => `K(0) = [fk]`},
      {id:'gs', t:'Gewinnschwelle', e:'Stück', f:'u', weg:w => `G(x) = ${maPoly([-w.a, w.p - w.kv, -w.F])} = 0 ⇔ ${maPoly([1, -(w.p - w.kv) / w.a, w.F / w.a])} = 0; pq-Formel: x₁ = [gs]`},
      {id:'gg', t:'Gewinngrenze', e:'Stück', f:'v', weg:w => `x₂ = [gg]`},
      {id:'xm', t:'gewinnmaximale Menge', e:'Stück', f:'(u + v) / 2', weg:w => `Scheitel von G: x = (${maZ(w.u)} + ${maZ(w.v)}) ÷ 2 = [xm]`},
      {id:'gm', t:'maximaler Gewinn', e:'€', f:'0 - a * xm * xm + (p - kv) * xm - F', weg:w => `G(${maZ((w.u + w.v) / 2)}) = [gm]`}]),
    ...maMit(maSaetze(704, 12, R => { const a = R.p([0.5, 1, 2, 0.25]), u = R.p([10, 20, 30, 40]), v = u + R.p([40, 60, 80, 100]), kv = R.p([5, 10, 15, 20]);
      const p = a * (u + v) + kv, F = a * u * v; return Number.isInteger(p) && F > 0 ? [{a, kv, F, p, u, v}] : null; })),
    wahl:[{id:'w', t:'Zwischen Gewinnschwelle und Gewinngrenze ist der Gewinn', opts:['positiv', 'negativ'], r:'0'}],
    hinweise:['Fixkosten = Kosten bei x = 0.', 'G(x) = E(x) − K(x) – Vorzeichen in der Klammer beachten.', 'Gewinnmaximum im Scheitel der Gewinnparabel (Mitte der Nullstellen).'],
    merke:'G(x) = E(x) − K(x)<br>Nullstellen von G: Gewinnschwelle und -grenze<br>Scheitel: gewinnmaximale Menge und maximaler Gewinn.'}),
  ]; })(),
/* ---------- Mathematik · Lehrplaneinheit 2: Trigonometrische Funktionen, ihre Schaubilder und zugehörige Gleichungen ----------
   TB Bogenmaß und besondere Werte · TF Eigenschaften von a·sin(kx) + b und a·cos(kx) + b · TV Abbildungen und Anwendungen · TQ Gleichungen
   Alle Ergebnisse mit sin, cos, arcsin, arccos werden vorberechnet (L…-Zeilen). */
...(() => {
  const T = ['Mathematik', 'Trigonometrie'];
  const P = Math.PI, NR = ['①', '②', '③', '④'];
  const FN = ['sin', 'cos'], fw = (c, z) => c ? Math.cos(z) : Math.sin(z);
  const kSatz = (R, liste) => R.p(liste || MA_K);
  const per = k => maPi(2 * P / k);
  // Lösungen von sin(z) = v bzw. cos(z) = v in [0; 2π)
  const zLsg = (c, v) => { if (Math.abs(v) > 1) return []; let z1 = c ? Math.acos(v) : Math.asin(v), z2 = c ? 2 * P - z1 : P - z1;
    const n = z => { z = z % (2 * P); return z < -1e-12 ? z + 2 * P : Math.abs(z - 2 * P) < 1e-12 ? 0 : z; };
    return [...new Set([n(z1), n(z2)].map(z => Math.round(z * 1e9) / 1e9))].sort((a, b) => a - b); };
  const winkel = [0, P / 6, P / 4, P / 3, P / 2, 2 * P / 3, 3 * P / 4, 5 * P / 6, P, 7 * P / 6, 4 * P / 3, 3 * P / 2, 5 * P / 3, 2 * P];
  return [
  /* ======================= TB · Bogenmaß und besondere Werte ======================= */
  blBau('rechnung', {id:'TB1', modul:'TB', stufe:1, titel:'Gradmaß und Bogenmaß', tags:T.concat(['Bogenmaß']), kopf:'Umrechnung',
    text:W => `Rechne um (Bogenmaß auf zwei Nachkommastellen):<br>${W.map((w, i) => w.t ? `${NR[i]} ${maPi(w.g * P / 180)} ins Gradmaß` : `${NR[i]} ${maZ(w.g)}° ins Bogenmaß`).join('<br>')}`,
    spalten:['①', '②', '③', '④'],
    zeilen:maAus('g', 't', 'L').concat([{id:'v', t:'Ergebnis', e:'ma', f:'L', weg:w => w.t ? `${maPi(w.g * P / 180)} · 180° ÷ π = [v]°` : `${maZ(w.g)}° · π ÷ 180° = ${maPi(w.g * P / 180)} ≈ [v]`}]),
    ...maMit(maSaetze(1101, 12, R => [0, 0, 1, 1].map(t => { const g = R.p([30, 45, 60, 90, 120, 135, 150, 180, 210, 240, 270, 300, 315, 360]); return {g, t, L:t ? g : maR(g * P / 180)}; }))),
    hinweise:['180° entsprechen π.', 'Grad → Bogenmaß: · π ÷ 180°; Bogenmaß → Grad: · 180° ÷ π.'],
    merke:'360° = 2π<br>180° = π<br>90° = π/2<br>x (Bogenmaß) = α · π ÷ 180°. Bei trigonometrischen Funktionen rechnet man im Bogenmaß (Taschenrechner auf RAD).'}),
  blBau('rechnung', {id:'TB2', modul:'TB', stufe:1, titel:'Besondere Werte von Sinus und Kosinus', tags:T.concat(['Einheitskreis']), kopf:'Wert',
    text:W => `Bestimme die Werte (auf zwei Nachkommastellen; Taschenrechner im Bogenmaß):<br>${W.map((w, i) => `${NR[i]} ${FN[w.c]}(${maPi(w.z)})`).join('<br>')}`,
    spalten:['①', '②', '③', '④'],
    zeilen:maAus('c', 'z', 'L').concat([{id:'v', t:'Wert', e:'ma', f:'L', weg:w => `${FN[w.c]}(${maPi(w.z)}) = ${maExakt(fw(w.c, w.z))} ≈ [v]`}]),
    ...maMit(maSaetze(1102, 12, R => [0, 1, 0, 1].map(c => { const z = R.p(winkel); return {c, z, L:maR(fw(c, z))}; }))),
    hinweise:['Einheitskreis: cos = x-Koordinate, sin = y-Koordinate des Punkts.', 'sin(π/6) = cos(π/3) = 0,5; sin(π/2) = 1; cos(π) = −1.'],
    merke:'Wichtige Werte: sin 0 = 0, sin(π/6) = ½, sin(π/4) = ½√2, sin(π/3) = ½√3, sin(π/2) = 1<br>cos entsprechend rückwärts<br>Vorzeichen über den Quadranten.'}),
  {
    id:'TB3', modul:'TB', typ:'berechnung', mehrfach:true, stufe:0, titel:'Eigenschaften von Sinus und Kosinus',
    tags:T.concat(['Theorie']),
    text:'Die Funktionen f(x) = sin(x) und g(x) = cos(x) (x im Bogenmaß) sind periodisch.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Sinus und Kosinus haben die Periode 2π.', richtig:true, weg:'Werte wiederholen sich nach 2π'},
      {text:'Die Wertemenge beider Funktionen ist [−1; 1].', richtig:true, weg:'Amplitude 1'},
      {text:'Das Schaubild von sin(x) ist punktsymmetrisch zum Ursprung, das von cos(x) achsensymmetrisch zur y-Achse.', richtig:true, weg:'sin(−x) = −sin(x), cos(−x) = cos(x)'},
      {text:'cos(x) = sin(x + π/2): Das Kosinus-Schaubild ist das um π/2 nach links verschobene Sinus-Schaubild.', richtig:true, weg:'Verschiebung'},
      {text:'Die Nullstellen von sin(x) sind x = kπ (k ganzzahlig).', richtig:true, weg:'0, ±π, ±2π …'},
      {text:'sin(x) hat bei x = π einen Hochpunkt.', fehler:'Bei π ist eine Nullstelle; der Hochpunkt liegt bei π/2.'},
      {text:'Der Taschenrechner muss für trigonometrische Funktionen auf DEG stehen.', fehler:'Bei Funktionen im Bogenmaß: RAD.'}
    ],
    hinweise:['Am Einheitskreis überlegen oder die Schaubilder skizzieren.'],
    merke:'sin, cos: Periode 2π, Wertemenge [−1; 1]<br>sin ungerade (Ursprung), cos gerade (y-Achse)<br>Nullstellen sin: kπ, cos: π/2 + kπ.'
  },

  /* ======================= TF · Eigenschaften ======================= */
  blBau('rechnung', {id:'TF1', modul:'TF', stufe:1, titel:'Amplitude, Periode und Wertemenge', tags:T.concat(['Amplitude', 'Periode']), kopf:'Eigenschaften',
    text:W => `Bestimme Amplitude, Periode (auf zwei Nachkommastellen), kleinsten und größten Funktionswert:<br>${W.map((w, i) => `<i>f</i><sub>${i + 1}</sub>(x) = ${maTrig(w.a, FN[w.c], w.kx, w.b)}`).join('<br>')}`,
    spalten:['f₁', 'f₂', 'f₃'],
    zeilen:maAus('a', 'c', 'kx', 'k', 'b', 'Lp').concat([
      {id:'am', t:'Amplitude', e:'ma', f:'abs(a)', weg:w => `|a| = |${maZ(w.a)}| = [am]`},
      {id:'p', t:'Periode', e:'ma', f:'Lp', weg:w => `p = 2π ÷ k = 2π ÷ ${maPi(w.k)} = ${per(w.k)} ≈ [p]`},
      {id:'mn', t:'kleinster Funktionswert', kurz:'y<sub>min</sub>', e:'ma', f:'b - abs(a)', weg:w => `${maZ(w.b)} − ${maZ(Math.abs(w.a))} = [mn]`},
      {id:'mx', t:'größter Funktionswert', kurz:'y<sub>max</sub>', e:'ma', f:'b + abs(a)', weg:w => `${maZ(w.b)} + ${maZ(Math.abs(w.a))} = [mx]`}]),
    ...maMit(maSaetze(1103, 12, R => [0, 1, 2].map(() => { const K = kSatz(R); return {a:R.p([1, 2, 3, -1, -2, 0.5, 4]), c:R.g(0, 1), kx:K.kx, k:K.k, b:R.g(-3, 3), Lp:maR(2 * P / K.k)}; }))),
    hinweise:['Amplitude = |a|; Periode p = 2π ÷ k.', 'Das Schaubild schwingt um die Mittellinie y = b zwischen b − |a| und b + |a|.'],
    merke:'f(x) = a·sin(kx) + b bzw. a·cos(kx) + b: Amplitude |a|, Periode 2π/k, Mittellinie y = b, Wertemenge [b − |a|; b + |a|].'}),
  blBau('zuordnung', {id:'TF2', modul:'TF', stufe:1, titel:'Symmetrie trigonometrischer Funktionen', tags:T.concat(['Symmetrie']),
    text:'Welche Symmetrie hat das Schaubild?', kategorien:['symmetrisch zur y-Achse', 'symmetrisch zum Ursprung', 'keine dieser Symmetrien'], anzahl:8,
    faelle:[
      {t:'f(x) = 2sin(3x)', k:1}, {t:'f(x) = −sin(2x)', k:1}, {t:'f(x) = 3sin(0,5x)', k:1}, {t:'f(x) = sin(x) + x', k:1, weg:'beide Teile ungerade'},
      {t:'f(x) = −cos(2x)', k:0}, {t:'f(x) = cos(x) + 4', k:0, weg:'Konstante ändert die y-Achsen-Symmetrie nicht'}, {t:'f(x) = cos(πx) − 2', k:0}, {t:'f(x) = 2cos(x) − x²', k:0, weg:'beide Teile gerade'},
      {t:'f(x) = sin(x) + 1', k:2, weg:'punktsymmetrisch zu (0 | 1), nicht zum Ursprung'}, {t:'f(x) = cos(x) + x', k:2, weg:'gerade und ungerade Teile gemischt'}, {t:'f(x) = 0,5x + cos(x)', k:2}
    ],
    hinweise:['sin(−x) = −sin(x); cos(−x) = cos(x).', 'Konstante Summanden zerstören die Punktsymmetrie zum Ursprung, nicht die y-Achsen-Symmetrie.'],
    merke:'sin(kx) und lineare Terme mx: ungerade (Ursprung)<br>cos(kx), Konstanten, x²: gerade (y-Achse)<br>gemischt: keine dieser Symmetrien.'}),
  blBau('rechnung', {id:'TF3', modul:'TF', stufe:2, titel:'Nullstellen in einem Intervall', tags:T.concat(['Nullstellen']), kopf:'Nullstellen',
    text:W => `Bestimme die Nullstellen von ${maF('f', maTrig(W[0].a, FN[W[0].c], W[0].kx, 0))} im Intervall [0; 2π]: Anzahl, kleinste positive und größte Nullstelle (auf zwei Nachkommastellen).`,
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'c', 'kx', 'k', 'N', 'L1', 'L2', 'L1x', 'L2x').concat([
      {id:'n', t:'Anzahl der Nullstellen', kurz:'Anzahl', e:'ma', f:'N', weg:w => `${FN[w.c]}(z) = 0 für z = ${w.c ? 'π/2 + jπ' : 'jπ'}; mit z = ${w.kx}: x = ${w.c ? '(π/2 + jπ)' : 'jπ'} ÷ ${maPi(w.k)}; im Intervall [0; 2π]: [n] Nullstellen`},
      {id:'x1', t:'kleinste positive Nullstelle', kurz:'kleinste', e:'ma', f:'L1', weg:w => `x = ${maPi(w.L1x)} ≈ [x1]`},
      {id:'x2', t:'größte Nullstelle im Intervall', kurz:'größte', e:'ma', f:'L2', weg:w => `x = ${maPi(w.L2x)} ≈ [x2]`}]),
    ...maMit(maSaetze(1104, 12, R => { const K = kSatz(R, MA_K.slice(0, 4)), c = R.g(0, 1), a = R.p([1, 2, -1, 3, -2]); const L = [];
      for (let j = 0; j < 40; j++){ const x = ((c ? P / 2 : 0) + j * P) / K.k; if (x <= 2 * P + 1e-9) L.push(x); }
      const pos = L.filter(x => x > 1e-9); return [{a, c, kx:K.kx, k:K.k, N:L.length, L1:maR(pos[0]), L2:maR(L[L.length - 1]), L1x:pos[0], L2x:L[L.length - 1]}]; })),
    hinweise:['Substitution z = kx: zuerst die Nullstellen von sin(z) bzw. cos(z), dann x = z ÷ k.', 'Der Faktor a ändert die Nullstellen nicht.', 'Abstand benachbarter Nullstellen = halbe Periode.'],
    merke:'Nullstellen von a·sin(kx): x = jπ/k<br>von a·cos(kx): x = (π/2 + jπ)/k<br>benachbarte Nullstellen liegen eine halbe Periode auseinander.'}),
  blBau('rechnung', {id:'TF4', modul:'TF', stufe:2, titel:'Hoch- und Tiefpunkte ohne Ableitung', tags:T.concat(['Hochpunkt', 'Tiefpunkt']), kopf:'Extrempunkte',
    text:W => `Bestimme für ${maF('f', maTrig(W[0].a, FN[W[0].c], W[0].kx, W[0].b))} den ersten Hochpunkt und den ersten Tiefpunkt mit x ≥ 0 (auf zwei Nachkommastellen).`,
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'c', 'kx', 'k', 'b', 'LH', 'LT').concat([
      {id:'xh', t:'Hochpunkt: x', kurz:'x<sub>H</sub>', e:'ma', f:'LH', weg:w => `größter Wert, wenn ${FN[w.c]}(${w.kx}) = ${w.a > 0 ? '1' : '−1'}: ${w.kx} = ${maPi(w.LH * w.k)} → x = ${maPi(w.LH)} ≈ [xh]`},
      {id:'yh', t:'Hochpunkt: y', kurz:'y<sub>H</sub>', e:'ma', f:'b + abs(a)', weg:w => `y = ${maZ(w.b)} + ${maZ(Math.abs(w.a))} = [yh]`},
      {id:'xt', t:'Tiefpunkt: x', kurz:'x<sub>T</sub>', e:'ma', f:'LT', weg:w => `eine halbe Periode weiter bzw. davor: x = ${maPi(w.LT)} ≈ [xt]`},
      {id:'yt', t:'Tiefpunkt: y', kurz:'y<sub>T</sub>', e:'ma', f:'b - abs(a)', weg:w => `y = ${maZ(w.b)} − ${maZ(Math.abs(w.a))} = [yt]`}]),
    ...maMit(maSaetze(1105, 12, R => { const K = kSatz(R), c = R.g(0, 1), a = R.p([1, 2, -1, 3, -2, 0.5]), b = R.g(-2, 3);
      const zH = c ? (a > 0 ? 0 : P) : (a > 0 ? P / 2 : 3 * P / 2), zT = (zH + P) % (2 * P); return [{a, c, kx:K.kx, k:K.k, b, LH:maR(zH / K.k), LT:maR(zT / K.k)}]; })),
    hinweise:['Hochpunkt, wo sin bzw. cos den Wert 1 annimmt (bei a < 0: den Wert −1).', 'sin(z) = 1 bei z = π/2; cos(z) = 1 bei z = 0; dann x = z ÷ k.', 'Tiefpunkt liegt eine halbe Periode vom Hochpunkt entfernt.'],
    merke:'Extrempunkte von a·sin(kx) + b: y-Werte b ± |a|<br>x-Werte aus sin(kx) = ±1 bzw. cos(kx) = ±1<br>Hoch- und Tiefpunkt liegen eine halbe Periode auseinander.'}),
  blBau('rechnung', {id:'TF5', modul:'TF', stufe:3, titel:'Prüfungsniveau: Funktionsterm aus dem Schaubild', tags:T.concat(['Funktionsterm bestimmen', 'Schaubild', 'Prüfung']), kopf:'Funktionsterm',
    text:W => `Die Abbildung zeigt das Schaubild einer Funktion f mit f(x) = a·sin(kx) + b oder f(x) = a·cos(kx) + b.%%GRAFIK%%Lies Mittellinie, Amplitude und Periode ab und bestimme k (auf zwei Nachkommastellen). Entscheide, welcher Funktionstyp vorliegt.`,
    grafik:W => { const w = W[0], f = x => w.a * fw(w.c, w.k * x) + w.b, o = maBereich(f, -1, 2 * w.p + 0.5); o.ys = 1; return maGraf([{f}], o); },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'c', 'k', 'b', 'p', 'Lk').concat([
      {id:'bb', t:'Mittellinie: y =', kurz:'b', e:'ma', f:'b', weg:w => `Mitte zwischen größtem (${maZ(w.b + Math.abs(w.a))}) und kleinstem Wert (${maZ(w.b - Math.abs(w.a))}): b = [bb]`},
      {id:'am', t:'Amplitude', e:'ma', f:'abs(a)', weg:w => `halber Abstand von größtem und kleinstem Wert: [am]`},
      {id:'pp', t:'Periode', e:'ma', f:'p', weg:w => `Abstand zweier Hochpunkte: p = [pp]`},
      {id:'kk', t:'k', e:'ma', f:'Lk', weg:w => `k = 2π ÷ ${maZ(w.p)} = ${maPi(w.k)} ≈ [kk]`}]),
    ...maMit(maSaetze(1106, 12, R => { const p = R.p([2, 4, 6, 8]), a = R.p([1, 2, 3, -1, -2, -3, 1.5]), c = R.g(0, 1), b = R.g(-2, 3); return [{a, c, k:2 * P / p, b, p, Lk:maR(2 * P / p)}]; })),
    wahl:[{id:'w', t:'Der Funktionsterm hat die Form', opts:['a·sin(kx) + b mit a > 0', 'a·sin(kx) + b mit a < 0', 'a·cos(kx) + b mit a > 0', 'a·cos(kx) + b mit a < 0'], r:'c@0 * 2 + (a@0 < 0 ? 1 : 0)'}],
    hinweise:['Bei x = 0: Schaubild auf der Mittellinie → Sinus; im Hoch- oder Tiefpunkt → Kosinus.', 'Steigt das Sinus-Schaubild bei x = 0, ist a > 0; startet das Kosinus-Schaubild im Hochpunkt, ist a > 0.', 'k = 2π ÷ Periode.'],
    merke:'Funktionsterm aus dem Schaubild: b = Mittellinie, |a| = Amplitude, k = 2π ÷ p<br>Start auf der Mittellinie → sin, Start im Extrempunkt → cos<br>Vorzeichen von a aus dem Verlauf bei x = 0.'}),

  /* ======================= TV · Abbildungen und Anwendungen ======================= */
  blBau('zuordnung', {id:'TV1', modul:'TV', stufe:1, titel:'Abbildungen trigonometrischer Schaubilder', tags:T.concat(['Abbildungen']),
    text:'Wie entsteht das Schaubild von g aus dem Schaubild von f?', kategorien:['Verschiebung in x-Richtung', 'Verschiebung in y-Richtung', 'Streckung in y-Richtung', 'Streckung in x-Richtung', 'Spiegelung an der x-Achse'], anzahl:8,
    faelle:[
      {t:'f(x) = sin(x) → g(x) = sin(x − 1)', k:0, weg:'um 1 nach rechts'}, {t:'f(x) = cos(x) → g(x) = cos(x + π)', k:0, weg:'um π nach links'},
      {t:'f(x) = sin(x) → g(x) = sin(x) + 2', k:1}, {t:'f(x) = cos(x) → g(x) = cos(x) − 3', k:1},
      {t:'f(x) = sin(x) → g(x) = 3sin(x)', k:2, weg:'Amplitude 3'}, {t:'f(x) = cos(x) → g(x) = 0,5cos(x)', k:2},
      {t:'f(x) = sin(x) → g(x) = sin(2x)', k:3, weg:'Periode halbiert'}, {t:'f(x) = cos(x) → g(x) = cos(0,5x)', k:3, weg:'Periode verdoppelt'},
      {t:'f(x) = sin(x) → g(x) = −sin(x)', k:4}, {t:'f(x) = cos(x) → g(x) = −cos(x)', k:4}
    ],
    hinweise:['a · f(x): Streckung in y-Richtung (Amplitude); f(kx): Streckung in x-Richtung (Periode 2π/k).', 'f(x − c): Verschiebung in x-Richtung; f(x) + d: in y-Richtung; −f(x): Spiegelung an der x-Achse.'],
    merke:'Amplitude a (Streckung in y-Richtung), Periode 2π/k (Streckung in x-Richtung), + b (Verschiebung nach oben), x − c (Verschiebung nach rechts), Minuszeichen vor f (Spiegelung an der x-Achse).'}),
  blBau('rechnung', {id:'TV2', modul:'TV', stufe:2, titel:'Funktionsterm aus Eigenschaften', tags:T.concat(['Funktionsterm bestimmen']), kopf:'f(x) = a·sin(kx) + b',
    text:W => { const w = W[0]; return `Das Schaubild der Funktion f mit f(x) = a·sin(kx) + b hat die Amplitude ${maZ(Math.abs(w.a))}, die Periode ${maPi(w.p)} und die Mittellinie y = ${maZ(w.b)}. Es ${w.a > 0 ? 'steigt' : 'fällt'} bei x = 0. Bestimme a, k (auf zwei Nachkommastellen) und b sowie den größten Funktionswert.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'p', 'b', 'Lk').concat([
      {id:'aa', t:'a', e:'ma', f:'a', weg:w => `Amplitude ${maZ(Math.abs(w.a))}, ${w.a > 0 ? 'steigend → a > 0' : 'fallend → a < 0'}: a = [aa]`},
      {id:'kk', t:'k', e:'ma', f:'Lk', weg:w => `k = 2π ÷ ${maPi(w.p)} = ${maPi(2 * P / w.p)} ≈ [kk]`},
      {id:'bb', t:'b', e:'ma', f:'b', weg:w => `Mittellinie → b = [bb]`},
      {id:'ym', t:'größter Funktionswert', e:'ma', f:'b + abs(a)', weg:w => `b + |a| = [ym]`}]),
    ...maMit(maSaetze(1107, 12, R => { const p = R.p([P, 4 * P, 2 * P / 3, P / 2, 4, 6, 12, 3 * P]), a = R.p([1, 2, 3, -1, -2, 0.5, 4]), b = R.g(-3, 4); return [{a, p, b, Lk:maR(2 * P / p)}]; })),
    hinweise:['k = 2π ÷ Periode.', 'Sinus startet auf der Mittellinie: steigend bei a > 0, fallend bei a < 0.'],
    merke:'Aus Amplitude, Periode und Mittellinie: |a| = Amplitude, k = 2π/p, b = Mittellinie; Vorzeichen von a aus dem Verlauf bei x = 0.'}),
  blBau('rechnung', {id:'TV3', modul:'TV', stufe:3, titel:'Anwendung: Saisonaler Umsatz', tags:T.concat(['Anwendung', 'Schwingung']), kopf:'Umsatzmodell',
    text:W => { const w = W[0]; return `Der monatliche Umsatz eines Eiscafés wird modelliert durch ${maF('U', maZ(w.a) + '·sin(π/6 · t) + ' + maZ(w.b), 't')} (t in Monaten, t = 0 entspricht Mitte März; U in Tausend €).<br>a) Gib die Periode an und deute sie.<br>b) Bestimme den höchsten und den niedrigsten Monatsumsatz und den Zeitpunkt des höchsten Umsatzes.<br>c) Berechne U(${maZ(w.t0)}).<br>d) Berechne, wann der Umsatz zum ersten Mal ${maZ(w.g)} Tsd. € erreicht (auf zwei Nachkommastellen).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 't0', 'g', 'Lu', 'Lt').concat([
      {id:'pp', t:'Periode', e:'Monate', f:'12', weg:w => `p = 2π ÷ (π/6) = [pp] (ein Jahr)`},
      {id:'um', t:'höchster Umsatz', e:'Tsd. €', f:'b + a', weg:w => `${maZ(w.b)} + ${maZ(w.a)} = [um]`},
      {id:'tm', t:'Zeitpunkt des höchsten Umsatzes', kurz:'Zeitpunkt Maximum', e:'Monate', f:'3', weg:w => `sin(π/6 · t) = 1 ⇔ π/6 · t = π/2 ⇔ t = [tm]`},
      {id:'un', t:'niedrigster Umsatz', e:'Tsd. €', f:'b - a', weg:w => `${maZ(w.b)} − ${maZ(w.a)} = [un]`},
      {id:'ut', t:'Umsatz U(t₀)', kurz:'U(t₀)', e:'Tsd. €', f:'Lu', weg:w => `U(${maZ(w.t0)}) = ${maZ(w.a)} · sin(${maPi(P / 6 * w.t0)}) + ${maZ(w.b)} ≈ [ut]`},
      {id:'tg', t:'erster Zeitpunkt mit dem Zielumsatz', kurz:'Zeitpunkt', e:'Monate', f:'Lt', weg:w => `sin(π/6 · t) = (${maZ(w.g)} − ${maZ(w.b)}) ÷ ${maZ(w.a)} = ${maZ((w.g - w.b) / w.a, 4)} ⇔ π/6 · t ≈ ${maZ(Math.asin((w.g - w.b) / w.a), 4)} ⇔ t ≈ [tg]`}]),
    ...maMit(maSaetze(1108, 12, R => { const a = R.p([20, 25, 30, 40]), b = R.p([50, 60, 70, 80]), t0 = R.p([1, 2, 4, 5, 7, 8, 10]), g = b + a * R.p([0.2, 0.4, 0.5, 0.6, 0.8]);
      return [{a, b, t0, g, Lu:maR(a * Math.sin(P / 6 * t0) + b), Lt:maR(Math.asin((g - b) / a) * 6 / P)}]; })),
    hinweise:['Periode 2π ÷ k; hier k = π/6.', 'Maximum, wenn sin(…) = 1.', 'Gleichung nach sin(…) auflösen, dann arcsin (sin⁻¹) im Bogenmaß.'],
    merke:'Saisonale Schwankungen: Periode = Saisonlänge, Mittellinie = Durchschnitt, Amplitude = Schwankung; Zeitpunkte über sin⁻¹ (erste Lösung).'}),
  blBau('rechnung', {id:'TV4', modul:'TV', stufe:3, titel:'Anwendung: Riesenrad', tags:T.concat(['Anwendung', 'Schwingung']), kopf:'Höhenmodell',
    text:W => { const w = W[0]; return `Die Höhe einer Gondel über dem Boden wird beschrieben durch ${maF('h', maZ(w.b) + ' − ' + maZ(w.a) + '·cos(' + maPi(w.k) + ' · t)', 't')} (t in Minuten, h in Metern).<br>a) Bestimme die Höhe beim Einstieg (t = 0), die größte Höhe und die Dauer einer Umdrehung.<br>b) Berechne die Höhe nach ${maZ(w.t0)} Minuten.<br>c) Berechne, wann die Gondel zum ersten Mal ${maZ(w.H)} m hoch ist (auf zwei Nachkommastellen).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'k', 't0', 'H', 'Lh', 'Lt', 'Lp').concat([
      {id:'h0', t:'Höhe beim Einstieg', e:'m', f:'b - a', weg:w => `h(0) = ${maZ(w.b)} − ${maZ(w.a)} · cos(0) = [h0]`},
      {id:'hm', t:'größte Höhe', e:'m', f:'b + a', weg:w => `cos(…) = −1: ${maZ(w.b)} + ${maZ(w.a)} = [hm]`},
      {id:'pp', t:'Dauer einer Umdrehung', e:'Minuten', f:'Lp', weg:w => `p = 2π ÷ ${maPi(w.k)} = [pp]`},
      {id:'ht', t:'Höhe nach t₀', kurz:'h(t₀)', e:'m', f:'Lh', weg:w => `h(${maZ(w.t0)}) = ${maZ(w.b)} − ${maZ(w.a)} · cos(${maPi(w.k * w.t0)}) ≈ [ht]`},
      {id:'tz', t:'erster Zeitpunkt mit der Höhe H', kurz:'Zeitpunkt', e:'Minuten', f:'Lt', weg:w => `cos(${maPi(w.k)} · t) = (${maZ(w.b)} − ${maZ(w.H)}) ÷ ${maZ(w.a)} = ${maZ((w.b - w.H) / w.a, 4)} ⇔ t = cos⁻¹(${maZ((w.b - w.H) / w.a, 4)}) ÷ ${maPi(w.k)} ≈ [tz]`}]),
    ...maMit(maSaetze(1109, 12, R => { const T0 = R.p([10, 12, 15, 20, 30]), k = 2 * P / T0, a = R.p([20, 25, 30, 40, 50]), b = a + R.p([2, 3, 5]), t0 = R.g(1, T0 - 1), H = maR(b - a * R.p([0.5, 0, -0.5, 0.3, -0.6]));
      return [{a, b, k, t0, H, Lh:maR(b - a * Math.cos(k * t0)), Lt:maR(Math.acos((b - H) / a) / k), Lp:T0}]; })),
    hinweise:['cos(0) = 1, also beginnt die Gondel unten.', 'Größte Höhe, wenn cos(…) = −1.', 'Gleichung nach cos(…) auflösen und cos⁻¹ (Bogenmaß) anwenden.'],
    merke:'h(t) = b − a·cos(kt): Start im Tiefpunkt b − a, höchster Punkt b + a, Umlaufzeit 2π/k; Zeitpunkte über cos⁻¹ (liefert die erste Lösung in [0; π/k]).'}),

  /* ======================= TQ · Gleichungen ======================= */
  blBau('rechnung', {id:'TQ1', modul:'TQ', stufe:1, titel:'Grundgleichungen sin(x) = c und cos(x) = c', tags:T.concat(['Gleichungen']), kopf:'Lösungen in [0; 2π)',
    text:W => `Löse im Intervall [0; 2π) (auf zwei Nachkommastellen, x₁ < x₂):<br>① sin(x) = ${maZ(W[0].v)}<br>② cos(x) = ${maZ(W[1].v)}`,
    spalten:['① sin(x) = c', '② cos(x) = c'],
    zeilen:maAus('c', 'v', 'L1', 'L2').concat([
      {id:'x1', t:'x₁', e:'ma', f:'L1', weg:w => w.c ? `cos⁻¹(${maZ(w.v)}) ≈ ${maZ(Math.acos(w.v))}; zweite Lösung 2π − ${maZ(Math.acos(w.v))}; x₁ ≈ [x1]` : `sin⁻¹(${maZ(w.v)}) ≈ ${maZ(Math.asin(w.v))}${w.v < 0 ? ' (+ 2π)' : ''}; zweite Lösung π − ${maZ(Math.asin(w.v))}; x₁ ≈ [x1]`},
      {id:'x2', t:'x₂', e:'ma', f:'L2', weg:w => `x₂ ≈ [x2]`}]),
    ...maMit(maSaetze(1110, 12, R => [0, 1].map(c => { const v = R.p([0.5, -0.5, 0.3, 0.8, -0.7, 0.2, -0.9, 0.6]), L = zLsg(c, v); return {c, v, L1:maR(L[0]), L2:maR(L[1])}; }))),
    hinweise:['Taschenrechner (RAD) liefert eine Lösung: sin⁻¹ bzw. cos⁻¹.', 'sin: zweite Lösung π − x₁; cos: zweite Lösung 2π − x₁.', 'Negative Werte von sin⁻¹ um 2π verschieben.'],
    merke:'sin(x) = c: x = sin⁻¹(c) und π − sin⁻¹(c)<br>cos(x) = c: x = cos⁻¹(c) und 2π − cos⁻¹(c)<br>jeweils + j·2π.'}),
  blBau('rechnung', {id:'TQ2', modul:'TQ', stufe:2, titel:'Gleichungen mit Substitution z = kx', tags:T.concat(['Gleichungen', 'Substitution']), kopf:'Lösungen',
    text:W => { const w = W[0]; return `Löse die Gleichung ${maTrig(w.a, FN[w.c], w.kx, w.b)} = ${maZ(w.d)} im Intervall [0; ${per(w.k)}) (auf zwei Nachkommastellen, x₁ < x₂).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'c', 'kx', 'k', 'b', 'd', 'L1', 'L2').concat([
      {id:'s', t:`Wert von sin bzw. cos`, kurz:'sin/cos =', e:'ma', f:'(d - b) / a', weg:w => `${FN[w.c]}(${w.kx}) = (${maZ(w.d)} ${maVz(-w.b)}) ÷ ${maK(w.a)} = [s]`},
      {id:'x1', t:'x₁', e:'ma', f:'L1', weg:w => { const L = zLsg(w.c, (w.d - w.b) / w.a); return `z = ${w.kx}: ${FN[w.c]}(z) = ${maZ((w.d - w.b) / w.a)} in [0; 2π): z = ${L.map(maPi).join(' oder z = ')}; x = z ÷ ${maPi(w.k)} → x₁ ≈ [x1]`; }},
      {id:'x2', t:'x₂', e:'ma', f:'L2', weg:w => `x₂ ≈ [x2]`}]),
    ...maMit(maSaetze(1111, 12, R => { const K = kSatz(R, MA_K.slice(0, 4)), c = R.g(0, 1), a = R.p([1, 2, -2, 3, 4]), b = R.g(-2, 2), v = R.p([0.5, -0.5, 0, 0.25, -0.75]);
      const L = zLsg(c, v); if (L.length !== 2) return null; const d = maR(a * v + b); return [{a, c, kx:K.kx, k:K.k, b, d, L1:maR(L[0] / K.k), L2:maR(L[1] / K.k)}]; })),
    hinweise:['Erst nach sin(…) bzw. cos(…) auflösen.', 'Substitution z = kx; Lösungen für z in [0; 2π) suchen.', 'Rücksubstitution x = z ÷ k.'],
    merke:'a·sin(kx) + b = d: sin(kx) = (d − b)/a → z = kx lösen → x = z/k; im Intervall einer Periode gibt es (meist) zwei Lösungen.'}),
  blBau('rechnung', {id:'TQ3', modul:'TQ', stufe:3, titel:'Prüfungsniveau: Schnittpunkte mit einer Parallelen zur x-Achse', tags:T.concat(['Gleichungen', 'Schnittpunkte', 'Prüfung']), kopf:'Schnittpunkte',
    text:W => { const w = W[0]; return `Gegeben ist ${maF('f', maTrig(w.a, 'cos', w.kx, w.b))}; ihr Schaubild ist K.%%GRAFIK%%Berechne die Schnittpunkte von K mit der Geraden y = ${maZ(w.d)} im Intervall [0; ${per(w.k)}] (auf zwei Nachkommastellen, x₁ < x₂).`; },
    grafik:W => { const w = W[0], f = x => w.a * Math.cos(w.k * x) + w.b, g = () => w.d, pp = 2 * P / w.k; return maGraf([{f, name:'K'}, {f:g, name:'', farbe:'var(--moos,#2C6A4E)'}], maBereich(f, -0.5, pp + 0.5)); },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'kx', 'k', 'b', 'd', 'L1', 'L2').concat([
      {id:'x1', t:'x₁', e:'ma', f:'L1', weg:w => `cos(${w.kx}) = (${maZ(w.d)} ${maVz(-w.b)}) ÷ ${maK(w.a)} = ${maZ((w.d - w.b) / w.a, 4)}; z = cos⁻¹(…) ≈ ${maZ(Math.acos((w.d - w.b) / w.a))} und 2π − ${maZ(Math.acos((w.d - w.b) / w.a))}; x = z ÷ ${maPi(w.k)}; x₁ ≈ [x1]`},
      {id:'x2', t:'x₂', e:'ma', f:'L2', weg:w => `x₂ ≈ [x2]`},
      {id:'yy', t:'y-Koordinate', e:'ma', f:'d', weg:w => `y = [yy]`}]),
    ...maMit(maSaetze(1112, 12, R => { const K = kSatz(R, MA_K.slice(0, 3).concat([MA_K[5]])), a = R.p([2, 3, -2, 4, 1.5]), b = R.g(-1, 3), v = R.p([0.5, -0.5, 0.25, -0.75, 0.8, -0.3]);
      const L = zLsg(1, v); return L.length === 2 ? [{a, kx:K.kx, k:K.k, b, d:maR(a * v + b), L1:maR(L[0] / K.k), L2:maR(L[1] / K.k)}] : null; })),
    wahl:[{id:'w', t:'Wie viele gemeinsame Punkte hat K mit der Geraden y = b + |a| in einer Periode?', opts:['einen (Berührpunkt im Hochpunkt)', 'zwei Schnittpunkte', 'keinen'], r:'0'}],
    hinweise:['Gleichsetzen und nach cos(…) auflösen.', 'cos⁻¹ liefert die erste Lösung; die zweite ist 2π − erste Lösung (für z).', 'Durch k teilen.'],
    merke:'Gemeinsame Punkte mit y = d: |(d − b)/a| < 1 → zwei Schnittpunkte je Periode; = 1 → Berührpunkte (Extrempunkte); > 1 → keine.'}),
  blBau('rechnung', {id:'TQ4', modul:'TQ', stufe:3, titel:'Prüfungsniveau: Sinus mit linearem Anteil', tags:T.concat(['Linearkombination', 'Prüfung']), kopf:'Untersuchung',
    text:W => { const w = W[0], l = maPoly([w.m, w.n]); return `Gegeben ist ${maF('f', maTrig(w.a, 'sin', w.kx, 0) + (l[0] === '−' ? ' − ' + l.slice(1) : ' + ' + l))} mit dem Schaubild K und die Gerade g mit ${maF('g', l)}.%%GRAFIK%%a) Bestimme die gemeinsamen Punkte von K und g im Intervall [0; 2π]: Anzahl, kleinste positive Stelle.<br>b) Berechne f(${maZ(w.x0)}) (auf zwei Nachkommastellen).<br>c) Zwischen welchen Geraden verläuft K?`; },
    grafik:W => { const w = W[0], f = x => w.a * Math.sin(w.k * x) + w.m * x + w.n, g = x => w.m * x + w.n; const o = maBereich(f, -0.5, 2 * P + 0.5), dy = (o.y1 - o.y0) * 0.07 * Math.sign(w.a); return maGraf([{f, name:'K', lx:P / (2 * w.k) + 0.3, ly:f(P / (2 * w.k)) + dy}, {f:g, name:'g', farbe:'var(--stumm,#888)', lx:P / (2 * w.k) + 0.3, ly:g(P / (2 * w.k)) - dy}], o); },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'kx', 'k', 'm', 'n', 'x0', 'N', 'L1', 'Lf').concat([
      {id:'nn', t:'Anzahl gemeinsamer Punkte', kurz:'Anzahl', e:'ma', f:'N', weg:w => `f(x) = g(x) ⇔ ${maZ(w.a)}·sin(${w.kx}) = 0 ⇔ x = jπ ÷ ${maPi(w.k)}; in [0; 2π]: [nn]`},
      {id:'x1', t:'kleinste positive Stelle', kurz:'kleinste Stelle', e:'ma', f:'L1', weg:w => `x = ${maPi(P / w.k)} ≈ [x1]`},
      {id:'fx', t:'f(x₀)', e:'ma', f:'Lf', weg:w => `f(${maZ(w.x0)}) = ${maZ(w.a)} · sin(${maZ(w.k * w.x0)}) ${maVz(w.m * w.x0 + w.n)} ≈ [fx]`},
      {id:'ab', t:'Abstand der Begrenzungsgeraden von g', kurz:'Abstand', e:'ma', f:'abs(a)', weg:w => `K verläuft zwischen y = ${maLin(w.m, w.n - Math.abs(w.a))} und y = ${maLin(w.m, w.n + Math.abs(w.a))}: Abstand [ab]`}]),
    ...maMit(maSaetze(1113, 12, R => { const K = kSatz(R, MA_K.slice(0, 4)), a = R.p([1, 2, -1, 1.5]), m = R.p([0.5, -0.5, 0.25, 1]), n = R.g(-2, 2), x0 = R.p([1, 2, 3, 4]);
      let N = 0; for (let j = 0; j * P / K.k <= 2 * P + 1e-9; j++) N++; return [{a, kx:K.kx, k:K.k, m, n, x0, N, L1:maR(P / K.k), Lf:maR(a * Math.sin(K.k * x0) + m * x0 + n)}]; })),
    hinweise:['f(x) − g(x) = a·sin(kx): gemeinsame Punkte dort, wo sin(kx) = 0.', 'Der Sinus-Anteil schwankt zwischen −|a| und |a| um die Gerade g.'],
    merke:'f(x) = a·sin(kx) + mx + n schwingt um die Gerade y = mx + n zwischen y = mx + n − |a| und y = mx + n + |a|; gemeinsame Punkte mit der Geraden bei sin(kx) = 0.'}),
  blBau('rechnung', {id:'TQ5', modul:'TQ', stufe:2, titel:'Näherungsweise lösen: Vorzeichenwechsel', tags:T.concat(['Gleichungen', 'Näherungsverfahren']), kopf:'Wertetabelle',
    text:W => `Die Gleichung ${maFaktor(W[0].a)}sin(x) = ${maLin(W[0].m, W[0].n)} lässt sich nicht exakt lösen. Berechne h(x) = ${maFaktor(W[0].a)}sin(x) − (${maLin(W[0].m, W[0].n)}) für die angegebenen x-Werte (auf zwei Nachkommastellen) und bestimme das Intervall mit Vorzeichenwechsel.`,
    spalten:['', '', '', '', ''],
    zeilen:maAus('a', 'm', 'n', 'I', 'L').concat([{id:'x', t:'x', e:'ma'},
      {id:'y', t:'h(x)', e:'ma', f:'L', weg:w => `h(${maZ(w.x)}) = ${maZ(w.a)} · sin(${maZ(w.x)}) − ${maK(w.m * w.x + w.n)} ≈ [y]`}]),
    ...maMit(maSaetze(1114, 12, R => { const a = R.p([1, 2, 3]), m = R.p([0.5, 1, -0.5, 0.25]), n = R.p([-1, 0.5, 1, -0.5, 0]), X = [0.5, 1, 1.5, 2, 2.5], h = x => a * Math.sin(x) - m * x - n, v = X.map(x => maR(h(x)));
      const w = []; for (let i = 0; i < 4; i++) if (v[i] * v[i + 1] < 0) w.push(i); if (w.length !== 1 || v.includes(0)) return null; return X.map((x, j) => ({a, m, n, I:w[0], L:v[j], x})); })),
    wahl:[{id:'w', t:'Eine Lösung liegt im Intervall', opts:['[0,5; 1]', '[1; 1,5]', '[1,5; 2]', '[2; 2,5]'], r:'I@0'}],
    hinweise:['Taschenrechner auf RAD.', 'Vorzeichenwechsel von h zwischen zwei Nachbarwerten: dort liegt eine Lösung.'],
    merke:'Gleichungen wie sin(x) = mx + n: nicht exakt lösbar → Vorzeichenwechsel, Intervallhalbierung oder grafisch bzw. mit dem Rechner (DMW).'}),
  ]; })(),
/* ---------- Mathematik · Lehrplaneinheit 3: Lineare Gleichungssysteme ----------
   LS Lösungsverfahren und Lösungsvielfalt · LA Anwendungen (Funktionsterme durch Punkte, Sachaufgaben) */
...(() => {
  const T = ['Mathematik', 'Lineare Gleichungssysteme'];
  const mal = (A, s) => A.map(z => z.reduce((t, v, j) => t + v * s[j], 0));
  const det3 = A => A[0][0] * (A[1][1] * A[2][2] - A[1][2] * A[2][1]) - A[0][1] * (A[1][0] * A[2][2] - A[1][2] * A[2][0]) + A[0][2] * (A[1][0] * A[2][1] - A[1][1] * A[2][0]);
  const zeile = R => [R.g(-3, 3), R.g(-3, 3), R.g(-3, 3)];
  const sys3 = (R, s, eins) => { for (let n = 0; n < 50; n++){ const A = [zeile(R), zeile(R), zeile(R)]; if (eins) A[0][0] = 1;
    if (A.some(z => z.every(v => !v)) || !A[0][0] || det3(A) === 0) continue; const b = mal(A, s); return A.map((z, i) => z.concat([b[i]])); } return null; };
  const flach = M => M.flat();
  const ausM = M => { const o = {}; M.forEach((z, i) => z.forEach((v, j) => o['m' + i + j] = v)); return o; };
  const vonW = w => [0, 1, 2].map(i => [0, 1, 2, 3].map(j => w['m' + i + j]));
  const mIds = ['m00', 'm01', 'm02', 'm03', 'm10', 'm11', 'm12', 'm13', 'm20', 'm21', 'm22', 'm23'];
  return [
  /* ======================= LS · Lösungsverfahren und Lösungsvielfalt ======================= */
  {
    id:'LS1', modul:'LS', typ:'berechnung', mehrfach:true, stufe:0, titel:'Lineare Gleichungssysteme: Grundbegriffe',
    tags:T.concat(['Theorie']),
    text:'Ein lineares Gleichungssystem (LGS) besteht aus mehreren linearen Gleichungen mit denselben Variablen. Beim <b>Gauß-Verfahren</b> bringt man es durch Zeilenumformungen auf <b>Stufenform</b> und löst dann von unten nach oben.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Eine Gleichung darf mit einer Zahl ≠ 0 multipliziert werden.', richtig:true, weg:'Äquivalenzumformung'},
      {text:'Das Vielfache einer Gleichung darf zu einer anderen addiert werden.', richtig:true, weg:'Additionsverfahren'},
      {text:'Gleichungen dürfen vertauscht werden.', richtig:true, weg:'ändert die Lösung nicht'},
      {text:'Ergibt sich beim Umformen eine Zeile 0 = 5, hat das LGS keine Lösung.', richtig:true, weg:'Widerspruch'},
      {text:'Ergibt sich eine Zeile 0 = 0, hat das LGS (bei sonst passender Stufenform) unendlich viele Lösungen.', richtig:true, weg:'eine Gleichung zu wenig'},
      {text:'Eine Gleichung darf mit 0 multipliziert werden.', fehler:'Dann geht die Information der Gleichung verloren – keine Äquivalenzumformung.'},
      {text:'Ein LGS mit drei Gleichungen und drei Variablen hat immer genau eine Lösung.', fehler:'Es kann auch keine oder unendlich viele Lösungen haben.'}
    ],
    hinweise:['Welche Umformungen ändern die Lösungsmenge nicht?'],
    merke:'Zulässig: Gleichungen vertauschen, mit Zahl ≠ 0 multiplizieren, Vielfache addieren. Stufenform → Rückwärtseinsetzen. 0 = c (c ≠ 0): keine Lösung; 0 = 0: unendlich viele Lösungen.'
  },
  blBau('rechnung', {id:'LS2', modul:'LS', stufe:1, titel:'LGS mit zwei Variablen', tags:T.concat(['Additionsverfahren']), kopf:'Lösung',
    text:W => `Löse das Gleichungssystem (Additions- oder Einsetzungsverfahren):${maGlS([[W[0].a, W[0].b, W[0].e], [W[0].c, W[0].d, W[0].f]], ['x', 'y'])}`,
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'c', 'd', 'e', 'f', 'sx', 'sy').concat([
      {id:'x', t:'x', e:'ma', f:'sx', weg:w => { const s = maStufe([[w.a, w.b, w.e], [w.c, w.d, w.f]]); return `${s.schritte.join('; ')}:${maGlS(s.M, ['x', 'y'])}aus II: y = ${maZ(w.sy)}; in I einsetzen: x = [x]`; }},
      {id:'y', t:'y', e:'ma', f:'sy', weg:w => `y = [y]`}]),
    ...maMit(maSaetze(1201, 12, R => { const a = R.g(-4, 4), b = R.g(-4, 4), c = R.g(-4, 4), d = R.g(-4, 4), sx = R.g(-5, 5), sy = R.g(-5, 5);
      return a && b && c && d && a * d - b * c ? [{a, b, c, d, e:a * sx + b * sy, f:c * sx + d * sy, sx, sy}] : null; })),
    hinweise:['Eine Gleichung so vervielfachen, dass beim Addieren eine Variable wegfällt.', 'Die gefundene Variable in eine Ausgangsgleichung einsetzen.', 'Probe in beiden Gleichungen.'],
    merke:'Additionsverfahren: Gleichungen so vervielfachen, dass eine Variable beim Addieren wegfällt; dann einsetzen und Probe machen.'}),
  blBau('rechnung', {id:'LS9', modul:'LS', stufe:1, titel:'Gauß-Werkstatt: Gleichungen addieren', tags:T.concat(['Additionsverfahren', 'Gauß-Verfahren', 'Werkstatt']), kopf:'Lösung',
    text:W => { const w = W[0]; return `Beim Additionsverfahren addiert man ein Vielfaches einer Gleichung zu einer anderen – <b>spaltenweise</b>: x-Glieder zu x-Gliedern, y-Glieder zu y-Gliedern, rechte Seite zur rechten Seite. Ziel: In Zeile II soll x wegfallen.<br>Probiere es in der Werkstatt aus (z. B. „Tipp“, dann „Ausführen“) und gib danach die Lösung an.${maWerkstatt([[w.a, w.b, w.e], [w.c, w.d, w.f]], ['x', 'y'])}`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'c', 'd', 'e', 'f', 'sx', 'sy').concat([
      {id:'y', t:'y', e:'ma', f:'sy', weg:w => { const s = maStufe([[w.a, w.b, w.e], [w.c, w.d, w.f]]); return `${s.schritte.join('; ')}:${maGlS(s.M, ['x', 'y'])}aus II: y = [y]`; }},
      {id:'x', t:'x', e:'ma', f:'sx', weg:w => `y in I einsetzen: x = [x]`}]),
    ...maMit(maSaetze(1212, 12, R => { const a = R.p([1, 1, 2, -1]), b = R.g(-4, 4), c = R.p([2, 3, -2, 1, -3]), d = R.g(-4, 4), sx = R.g(-5, 5), sy = R.g(-5, 5);
      return b && d && a * d - b * c ? [{a, b, c, d, e:a * sx + b * sy, f:c * sx + d * sy, sx, sy}] : null; })),
    hinweise:['Faktor so wählen, dass sich die x-Glieder aufheben: z. B. II − 2 · I.', 'In der Werkstatt: „Tipp“ füllt einen passenden Schritt ein.', 'Danach y ausrechnen und in I einsetzen.'],
    merke:'Gleichungen addieren heißt: Glieder derselben Variablen untereinander addieren – wie bei der schriftlichen Addition; ein Vielfaches wird vorher mit jedem Glied multipliziert.'}),
  blBau('zuordnung', {id:'LS3', modul:'LS', stufe:1, titel:'Lösungsvielfalt und geometrische Deutung', tags:T.concat(['Lösungsvielfalt']),
    text:'Wie viele Lösungen hat das Gleichungssystem aus zwei Gleichungen mit zwei Variablen (geometrisch: zwei Geraden)?', kategorien:['genau eine Lösung (Geraden schneiden sich)', 'keine Lösung (Geraden parallel)', 'unendlich viele Lösungen (Geraden identisch)'], anzahl:7,
    faelle:[
      {t:'x + y = 4 und x − y = 2', k:0}, {t:'2x + 3y = 6 und x = 0', k:0}, {t:'y = 2x + 1 und y = −x + 4', k:0, weg:'verschiedene Steigungen'},
      {t:'x + y = 4 und x + y = 6', k:1, weg:'Widerspruch 4 = 6'}, {t:'y = 2x + 1 und y = 2x − 3', k:1, weg:'gleiche Steigung, verschiedener Achsenabschnitt'}, {t:'2x − 4y = 2 und −x + 2y = 3', k:1},
      {t:'x + 2y = 3 und 2x + 4y = 6', k:2, weg:'zweite Gleichung = 2 · erste'}, {t:'y = 3x − 1 und 6x − 2y = 2', k:2}, {t:'−x + y = 1 und 3x − 3y = −3', k:2}
    ],
    hinweise:['Beide Gleichungen nach y auflösen und Steigungen vergleichen.', 'Gleiche Steigung und gleicher Achsenabschnitt: identisch; nur gleiche Steigung: parallel.'],
    merke:'Zwei Gleichungen mit zwei Variablen = zwei Geraden: schneiden (eine Lösung), parallel (keine), identisch (unendlich viele).'}),
  blBau('rechnung', {id:'LS4', modul:'LS', stufe:1, titel:'Stufenform: rückwärts einsetzen', tags:T.concat(['Stufenform']), kopf:'Lösung',
    text:W => { const w = W[0]; return `Das Gleichungssystem ist bereits in Stufenform. Bestimme die Lösung:${maGlS([[w.a, w.b, w.c, w.a * w.sx + w.b * w.sy + w.c * w.sz], [0, w.d, w.e, w.d * w.sy + w.e * w.sz], [0, 0, w.f, w.f * w.sz]])}`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'c', 'd', 'e', 'f', 'sx', 'sy', 'sz').concat([
      {id:'z', t:'z', e:'ma', f:'sz', weg:w => `aus III: z = ${maZ(w.f * w.sz)} ÷ ${maK(w.f)} = [z]`},
      {id:'y', t:'y', e:'ma', f:'sy', weg:w => `in II: ${maZ(w.d)}y ${maVz(w.e * w.sz)} = ${maZ(w.d * w.sy + w.e * w.sz)} → y = [y]`},
      {id:'x', t:'x', e:'ma', f:'sx', weg:w => `in I: ${maZ(w.a)}x ${maVz(w.b * w.sy + w.c * w.sz)} = ${maZ(w.a * w.sx + w.b * w.sy + w.c * w.sz)} → x = [x]`}]),
    ...maMit(maSaetze(1202, 12, R => { const nz = () => R.p([-3, -2, -1, 1, 2, 3]); return [{a:nz(), b:R.g(-3, 3), c:R.g(-3, 3), d:nz(), e:R.g(-3, 3), f:nz(), sx:R.g(-4, 4), sy:R.g(-4, 4), sz:R.g(-4, 4)}]; })),
    hinweise:['Mit der untersten Gleichung beginnen: sie enthält nur z.', 'z in die mittlere Gleichung einsetzen, dann y und z in die oberste.'],
    merke:'Stufenform: von unten nach oben lösen – z aus III, dann y aus II, dann x aus I.'}),
  blBau('rechnung', {id:'LS5', modul:'LS', stufe:2, titel:'Gauß-Verfahren: der erste Schritt', tags:T.concat(['Gauß-Verfahren']), kopf:'nach der Umformung',
    text:W => { const M = vonW(W[0]); return `Eliminiere x aus den Gleichungen II und III mit den Umformungen II − ${maK(M[1][0])} · I und III − ${maK(M[2][0])} · I. Gib die neuen Koeffizienten an.${maGlS(M)}<details style="margin:6px 0"><summary style="cursor:pointer">Gauß-Werkstatt öffnen: Zeilen per Klick umformen</summary>${maWerkstatt(M)}</details>`; },
    spalten:['neue Gleichung II', 'neue Gleichung III'],
    zeilen:maAus(...mIds, 'r').concat([
      {id:'ky', t:'Koeffizient von y', kurz:'y', e:'ma', fs:['m11 - m10 * m01', 'm21 - m20 * m01'], weg:w => `y: ${maZ(w.r ? w.m21 : w.m11)} − ${maK(w.r ? w.m20 : w.m10)} · ${maK(w.m01)} = [ky]`},
      {id:'kz', t:'Koeffizient von z', kurz:'z', e:'ma', fs:['m12 - m10 * m02', 'm22 - m20 * m02'], weg:w => `z: [kz]`},
      {id:'kr', t:'rechte Seite', e:'ma', fs:['m13 - m10 * m03', 'm23 - m20 * m03'], weg:w => `rechte Seite: [kr]`}]),
    ...maMit(maSaetze(1203, 12, R => { const M = sys3(R, [R.g(-3, 3), R.g(-3, 3), R.g(-3, 3)], true); return M && M[1][0] && M[2][0] ? [0, 1].map(r => Object.assign(ausM(M), {r})) : null; })),
    hinweise:['Erste Gleichung beginnt mit x (Koeffizient 1).', 'Neue II = II − (Koeffizient von x in II) · I – für jede Spalte.', 'Vorzeichen beachten: Minus mal Minus ergibt Plus.'],
    merke:'Gauß, erster Schritt: mit I das x aus II und III eliminieren: neue Zeile = Zeile − (x-Koeffizient der Zeile) · I (wenn I mit 1x beginnt).'}),
  blBau('rechnung', {id:'LS6', modul:'LS', stufe:2, titel:'Gauß-Verfahren: LGS mit drei Variablen', tags:T.concat(['Gauß-Verfahren']), kopf:'Lösung',
    text:W => `Löse das Gleichungssystem mit dem Gauß-Verfahren:${maGlS(vonW(W[0]))}<details style="margin:6px 0"><summary style="cursor:pointer">Gauß-Werkstatt öffnen: Zeilen per Klick umformen</summary>${maWerkstatt(vonW(W[0]))}</details>`,
    spalten:['Ergebnis'],
    zeilen:maAus(...mIds, 'sx', 'sy', 'sz').concat([
      {id:'x', t:'x', e:'ma', f:'sx', weg:w => { const s = maStufe(vonW(w)); return `${s.schritte.join('; ')} →${maGlS(s.M)}rückwärts einsetzen: z = ${maZ(w.sz)}, y = ${maZ(w.sy)}, x = [x]`; }},
      {id:'y', t:'y', e:'ma', f:'sy', weg:w => `y = [y]`}, {id:'z', t:'z', e:'ma', f:'sz', weg:w => `z = [z]`}]),
    ...maMit(maSaetze(1204, 12, R => { const s = [R.g(-4, 4), R.g(-4, 4), R.g(-4, 4)], M = sys3(R, s, R.r() < 0.6); return M ? [Object.assign(ausM(M), {sx:s[0], sy:s[1], sz:s[2]})] : null; })),
    hinweise:['Mit I das x aus II und III eliminieren.', 'Mit der neuen II das y aus der neuen III eliminieren.', 'Rückwärts einsetzen und Probe machen.'],
    merke:'Gauß-Verfahren: (1) x aus II und III eliminieren<br>(2) y aus III eliminieren → Stufenform<br>(3) rückwärts einsetzen<br>(4) Probe.'}),
  blBau('zuordnung', {id:'LS7', modul:'LS', stufe:2, titel:'Lösungsvielfalt an der Stufenform erkennen', tags:T.concat(['Lösungsvielfalt']),
    text:'Ein LGS mit drei Variablen wurde auf Stufenform gebracht. Die letzte Zeile lautet … Wie viele Lösungen hat das LGS?', kategorien:['genau eine Lösung', 'keine Lösung', 'unendlich viele Lösungen'], anzahl:6,
    faelle:[
      {t:'4z = 8', k:0}, {t:'−3z = 0', k:0, weg:'z = 0 ist eine Lösung'}, {t:'0,5z = −2', k:0},
      {t:'0 = 7', k:1, weg:'Widerspruch'}, {t:'0z = −3', k:1}, {t:'0 = 0,5', k:1},
      {t:'0 = 0', k:2, weg:'z frei wählbar'}, {t:'0z = 0', k:2}, {t:'0x + 0y + 0z = 0', k:2}
    ],
    hinweise:['Bleibt eine Gleichung mit z übrig, ist z eindeutig.', 'Falsche Aussage (0 = c, c ≠ 0): keine Lösung; wahre Aussage 0 = 0: eine Variable frei wählbar.'],
    merke:'Letzte Zeile der Stufenform: a·z = b (a ≠ 0) → eindeutig<br>0 = b (b ≠ 0) → keine Lösung<br>0 = 0 → unendlich viele Lösungen (Parameter).'}),
  blBau('rechnung', {id:'LS8', modul:'LS', stufe:3, titel:'Prüfungsniveau: LGS mit unendlich vielen Lösungen', tags:T.concat(['Lösungsvielfalt', 'Prüfung']), kopf:'Lösung',
    text:W => `Zeige mit dem Gauß-Verfahren, dass das Gleichungssystem unendlich viele Lösungen hat, und bestimme die Lösung, bei der z = ${maZ(W[0].t0)} ist.${maGlS(vonW(W[0]))}<details style="margin:6px 0"><summary style="cursor:pointer">Gauß-Werkstatt öffnen: Zeilen per Klick umformen</summary>${maWerkstatt(vonW(W[0]))}</details>`,
    spalten:['Ergebnis'],
    zeilen:maAus(...mIds, 't0', 'Lx', 'Ly').concat([
      {id:'x', t:'x (für das gegebene z)', kurz:'x', e:'ma', f:'Lx', weg:w => { const s = maStufe(vonW(w)); return `${s.schritte.join('; ')} →${maGlS(s.M)}letzte Zeile 0 = 0: z frei wählbar; z = ${maZ(w.t0)} einsetzen, dann y und x: x = [x]`; }},
      {id:'y', t:'y (für das gegebene z)', kurz:'y', e:'ma', f:'Ly', weg:w => `y = [y]`}]),
    ...maMit(maSaetze(1205, 12, R => { const d1 = R.g(-2, 2), d2 = R.g(-2, 2), x0 = R.g(-3, 3), y0 = R.g(-3, 3), t0 = R.p([1, 2, -1, 3]);
      const z = () => { const a = R.g(-3, 3), b = R.g(-3, 3); return [a, b, -(a * d1 + b * d2)]; }, E1 = z(), E2 = z(); if (!E1[0] || E1[0] * E2[1] - E1[1] * E2[0] === 0) return null;
      const p = R.p([1, -1, 2]), q = R.p([1, -1, 2, -2]), E3 = E1.map((v, j) => p * v + q * E2[j]); if (E3.every(v => !v)) return null;
      const A = [E1, E2, E3], s0 = [x0, y0, 0], b = mal(A, s0); return [Object.assign(ausM(A.map((zz, i) => zz.concat([b[i]]))), {t0, Lx:x0 + t0 * d1, Ly:y0 + t0 * d2})]; })),
    wahl:[{id:'w', t:'Woran erkennt man in der Stufenform die unendlich vielen Lösungen?', opts:['Die letzte Zeile lautet 0 = 0.', 'Die letzte Zeile lautet 0 = 5.', 'Alle Koeffizienten sind positiv.'], r:'0'}],
    hinweise:['Gauß-Verfahren durchführen: Die letzte Zeile wird 0 = 0.', 'z ist frei wählbar; den gegebenen Wert einsetzen und y, x berechnen.'],
    merke:'Unendlich viele Lösungen: in der Stufenform 0 = 0; eine Variable (z. B. z = t) frei wählen, die anderen in Abhängigkeit davon berechnen.'}),

  /* ======================= LA · Anwendungen ======================= */
  blBau('rechnung', {id:'LA1', modul:'LA', stufe:2, titel:'Parabel symmetrisch zur y-Achse', tags:T.concat(['Funktionsterm bestimmen']), kopf:'f(x) = ax² + c',
    text:W => `Das Schaubild einer quadratischen Funktion f mit f(x) = ax² + c (symmetrisch zur y-Achse) verläuft durch P(${maZ(W[0].p)} | ${maZ(W[0].a * W[0].p * W[0].p + W[0].c)}) und Q(${maZ(W[0].q)} | ${maZ(W[0].a * W[0].q * W[0].q + W[0].c)}). Bestimme a und c.`,
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'c', 'p', 'q').concat([
      {id:'aa', t:'a', e:'ma', f:'a', weg:w => `${maGlS([[w.p * w.p, 1, w.a * w.p * w.p + w.c], [w.q * w.q, 1, w.a * w.q * w.q + w.c]], ['a', 'c'])}II − I: ${maZ(w.q * w.q - w.p * w.p)}a = ${maZ(w.a * (w.q * w.q - w.p * w.p))} → a = [aa]`},
      {id:'cc', t:'c', e:'ma', f:'c', weg:w => `in I einsetzen: c = [cc]`}]),
    ...maMit(maSaetze(1206, 12, R => { const a = R.p([1, -1, 0.5, 2, -0.5, 3]), c = R.g(-5, 5), p = R.p([1, -1, 2]), q = R.p([3, -3, 4, 2]); return p * p !== q * q ? [{a, c, p, q}] : null; })),
    hinweise:['Punkte in f(x) = ax² + c einsetzen: zwei Gleichungen mit a und c.', 'Subtrahieren: c fällt weg.'],
    merke:'Bedingungen → Gleichungen: Punkt P(u | v) auf dem Schaubild bedeutet f(u) = v; so viele Bedingungen wie Unbekannte.'}),
  blBau('rechnung', {id:'LA2', modul:'LA', stufe:2, titel:'Parabel durch drei Punkte', tags:T.concat(['Funktionsterm bestimmen']), kopf:'f(x) = ax² + bx + c',
    text:W => { const w = W[0], f = x => w.a * x * x + w.b * x + w.c; return `Das Schaubild einer quadratischen Funktion f mit f(x) = ax² + bx + c verläuft durch die Punkte A(${maZ(w.x1)} | ${maZ(f(w.x1))}), B(${maZ(w.x2)} | ${maZ(f(w.x2))}) und C(${maZ(w.x3)} | ${maZ(f(w.x3))}). Stelle das LGS auf und bestimme a, b und c.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'c', 'x1', 'x2', 'x3').concat([
      {id:'aa', t:'a', e:'ma', f:'a', weg:w => { const f = x => w.a * x * x + w.b * x + w.c; return `Einsetzen:${maGlS([w.x1, w.x2, w.x3].map(x => [x * x, x, 1, f(x)]), ['a', 'b', 'c'])}Gauß-Verfahren → a = [aa]`; }},
      {id:'bb', t:'b', e:'ma', f:'b', weg:w => `b = [bb]`}, {id:'cc', t:'c', e:'ma', f:'c', weg:w => `c = [cc]`}]),
    ...maMit(maSaetze(1207, 12, R => { const a = R.p([1, -1, 2, -2, 0.5]), b = R.g(-4, 4), c = R.g(-5, 5), X = maSort([R.g(-3, 0), R.g(1, 2), R.g(3, 4)]); return new Set(X).size === 3 ? [{a, b, c, x1:X[0], x2:X[1], x3:X[2]}] : null; })),
    hinweise:['Jeden Punkt in f(x) = ax² + bx + c einsetzen: drei Gleichungen.', 'Liegt ein Punkt auf der y-Achse, ist c sofort bekannt.', 'Rest mit dem Gauß- oder Additionsverfahren.'],
    merke:'Drei Punkte bestimmen eine Parabel: f(xᵢ) = yᵢ einsetzen → LGS für a, b, c.'}),
  blBau('rechnung', {id:'LA3', modul:'LA', stufe:3, titel:'Prüfungsniveau: Polynom 3. Grades durch vier Punkte', tags:T.concat(['Funktionsterm bestimmen', 'Prüfung']), kopf:'f(x) = ax³ + bx² + cx + d',
    text:W => { const w = W[0], f = x => ((w.a * x + w.b) * x + w.c) * x + w.d; return `Das Schaubild einer Polynomfunktion 3. Grades verläuft durch die Punkte (0 | ${maZ(f(0))}), (1 | ${maZ(f(1))}), (−1 | ${maZ(f(-1))}) und (2 | ${maZ(f(2))}). Bestimme den Funktionsterm f(x) = ax³ + bx² + cx + d.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'c', 'd').concat([
      {id:'dd', t:'d', e:'ma', f:'d', weg:w => `f(0) = d → d = [dd]`},
      {id:'aa', t:'a', e:'ma', f:'a', weg:w => { const f = x => ((w.a * x + w.b) * x + w.c) * x + w.d; return `restliche Punkte mit d = ${maZ(w.d)}:${maGlS([[1, 1, 1, f(1) - w.d], [-1, 1, -1, f(-1) - w.d], [8, 4, 2, f(2) - w.d]], ['a', 'b', 'c'])}I + II: 2b = ${maZ(f(1) + f(-1) - 2 * w.d)} → b = ${maZ(w.b)}; dann a und c aus I und III: a = [aa]`; }},
      {id:'bb', t:'b', e:'ma', f:'b', weg:w => `b = [bb]`}, {id:'cc', t:'c', e:'ma', f:'c', weg:w => `c = [cc]`}]),
    ...maMit(maSaetze(1208, 12, R => { const a = R.p([1, -1, 0.5, 2, -0.5]), b = R.g(-3, 3), c = R.g(-4, 4), d = R.g(-4, 4); return [{a, b, c, d}]; })),
    hinweise:['Der Punkt auf der y-Achse liefert d sofort.', 'Die Punkte bei x = 1 und x = −1: addieren → b; subtrahieren → a + c.', 'Mit dem Punkt bei x = 2 a und c trennen.'],
    merke:'Polynom 3. Grades: vier Bedingungen → vier Gleichungen; Punkte auf der y-Achse und symmetrische x-Werte (±1) vereinfachen das LGS.'}),
  blBau('rechnung', {id:'LA4', modul:'LA', stufe:2, titel:'Sachaufgabe: Preise ermitteln', tags:T.concat(['Anwendung']), kopf:'Stückpreise',
    text:W => { const M = vonW(W[0]); return `Im Schulkiosk werden belegte Brötchen, Müsliriegel und Getränke verkauft. Drei Einkäufe:<br>${M.map((z, i) => `${['Anna', 'Ben', 'Cem'][i]} kauft ${z[0]} Brötchen, ${z[1]} Riegel und ${z[2]} Getränke für ${maZ(z[3], 2)} €.`).join('<br>')}<br>Stelle ein LGS auf und bestimme die Stückpreise.`; },
    spalten:['Ergebnis'],
    zeilen:maAus(...mIds, 'sx', 'sy', 'sz').concat([
      {id:'x', t:'Preis Brötchen', e:'€', f:'sx', weg:w => `x: Brötchen, y: Riegel, z: Getränk${maGlS(vonW(w))}Gauß-Verfahren → x = [x]`},
      {id:'y', t:'Preis Müsliriegel', e:'€', f:'sy', weg:w => `y = [y]`}, {id:'z', t:'Preis Getränk', e:'€', f:'sz', weg:w => `z = [z]`}]),
    ...maMit(maSaetze(1209, 12, R => { const s = [R.p([2, 2.5, 3, 3.5]), R.p([0.8, 1, 1.2, 1.5]), R.p([1.5, 1.8, 2, 2.2])];
      for (let n = 0; n < 40; n++){ const A = [0, 1, 2].map(() => [R.g(1, 4), R.g(0, 3), R.g(0, 3)]); if (det3(A) === 0) continue; const b = mal(A, s).map(maR); return [Object.assign(ausM(A.map((z, i) => z.concat([b[i]]))), {sx:s[0], sy:s[1], sz:s[2]})]; } return null; })),
    hinweise:['Variablen festlegen: x = Preis eines Brötchens usw.', 'Jeder Einkauf ergibt eine Gleichung.'],
    merke:'Sachaufgabe → LGS: Variablen benennen, je Information eine Gleichung, lösen, Ergebnis im Sachzusammenhang angeben und prüfen.'}),
  blBau('rechnung', {id:'LA5', modul:'LA', stufe:3, titel:'Prüfungsniveau: Maschinenauslastung', tags:T.concat(['Anwendung', 'Produktion', 'Prüfung']), kopf:'Produktionsmengen',
    text:W => { const M = vonW(W[0]); return `Ein Betrieb stellt drei Produkte P₁, P₂, P₃ auf drei Maschinen her. Benötigte Minuten je Stück und verfügbare Minuten pro Tag:` +
      `<div style="overflow-x:auto;margin:6px 0"><table style="border-collapse:collapse;font-size:.88rem">` +
      `<tr><th style="border:1px solid var(--linie);padding:3px 8px"></th>${['P₁', 'P₂', 'P₃', 'verfügbar'].map(h => `<th style="border:1px solid var(--linie);padding:3px 8px">${h}</th>`).join('')}</tr>` +
      M.map((z, i) => `<tr><td style="border:1px solid var(--linie);padding:3px 8px">Maschine ${MA_ROEM[i]}</td>${z.map(v => `<td style="border:1px solid var(--linie);padding:3px 8px;text-align:right">${maZ(v)}</td>`).join('')}</tr>`).join('') +
      `</table></div>Wie viele Stück je Produkt müssen hergestellt werden, damit alle Maschinen voll ausgelastet sind?`; },
    spalten:['Ergebnis'],
    zeilen:maAus(...mIds, 'sx', 'sy', 'sz').concat([
      {id:'x', t:'Menge P₁', e:'Stück', f:'sx', weg:w => `${maGlS(vonW(w), ['x₁', 'x₂', 'x₃'])}${maStufe(vonW(w)).schritte.join('; ')} → x₁ = [x]`},
      {id:'y', t:'Menge P₂', e:'Stück', f:'sy', weg:w => `x₂ = [y]`}, {id:'z', t:'Menge P₃', e:'Stück', f:'sz', weg:w => `x₃ = [z]`}]),
    ...maMit(maSaetze(1210, 12, R => { const s = [R.g(2, 12) * 5, R.g(2, 12) * 5, R.g(2, 12) * 5];
      for (let n = 0; n < 40; n++){ const A = [0, 1, 2].map(() => [R.g(1, 6), R.g(0, 5), R.g(0, 5)]); if (det3(A) === 0) continue; const b = mal(A, s); return [Object.assign(ausM(A.map((z, i) => z.concat([b[i]]))), {sx:s[0], sy:s[1], sz:s[2]})]; } return null; })),
    wahl:[{id:'w', t:'Was bedeutet es, wenn das LGS eine negative Lösung hätte?', opts:['Eine volle Auslastung aller Maschinen ist mit diesen Produkten nicht möglich.', 'Der Betrieb macht mit diesem Produkt Verlust.', 'Das Produkt muss teurer verkauft werden.'], r:'0'}],
    hinweise:['Je Maschine eine Gleichung: Minuten je Stück · Stückzahl summiert = verfügbare Minuten.', 'Gauß-Verfahren; Lösungen müssen nichtnegativ und ganzzahlig sein.'],
    merke:'Kapazitätsplanung: Zeilen = Maschinen (Kapazität), Spalten = Produkte; LGS lösen und Ergebnis auf Sinn prüfen (nichtnegativ, ganzzahlig).'}),
  blBau('rechnung', {id:'LA6', modul:'LA', stufe:3, titel:'Prüfungsniveau: Kostenfunktion aus Daten', tags:T.concat(['Kostenfunktion', 'Prüfung']), kopf:'K(x) = ax² + bx + c',
    text:W => { const w = W[0], K = x => w.a * x * x + w.b * x + w.c; return `Die Kosten eines Betriebs lassen sich durch K(x) = ax² + bx + c beschreiben (x in Stück, K in €). Bekannt sind K(${w.x1}) = ${maZ(K(w.x1))}, K(${w.x2}) = ${maZ(K(w.x2))} und K(${w.x3}) = ${maZ(K(w.x3))}.<br>Bestimme a, b und c, gib die Fixkosten an und berechne die Kosten für ${w.x4} Stück.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'c', 'x1', 'x2', 'x3', 'x4').concat([
      {id:'aa', t:'a', e:'ma', f:'a', weg:w => { const K = x => w.a * x * x + w.b * x + w.c; return `${maGlS([w.x1, w.x2, w.x3].map(x => [x * x, x, 1, K(x)]), ['a', 'b', 'c'])}II − I und III − II eliminieren c, danach b: a = [aa]`; }},
      {id:'bb', t:'b', e:'ma', f:'b', weg:w => `b = [bb]`},
      {id:'cc', t:'c (Fixkosten)', kurz:'Fixkosten', e:'€', f:'c', weg:w => `c = K(0) = [cc]`},
      {id:'k4', t:'Kosten für x₄ Stück', kurz:'K(x₄)', e:'€', f:'a * x4 * x4 + b * x4 + c', weg:w => `K(${w.x4}) = [k4]`}]),
    ...maMit(maSaetze(1211, 12, R => { const a = R.p([0.05, 0.1, 0.2, 0.5]), b = R.p([4, 5, 8, 10, 12]), c = R.p([200, 300, 400, 500, 800]), d = R.p([10, 20]), x1 = d, x2 = 2 * d, x3 = 3 * d, x4 = R.p([4, 5]) * d;
      return [{a, b, c, x1, x2, x3, x4}]; })),
    hinweise:['Jede Angabe K(x) = … ist eine Gleichung.', 'Gleichungen voneinander abziehen: c fällt weg.', 'c = K(0) sind die Fixkosten.'],
    merke:'Funktion aus Daten: Ansatz wählen, je Datenpunkt eine Gleichung, LGS lösen; Parameter im Sachzusammenhang deuten (c = Fixkosten).'}),
  ]; })(),
/* ---------- Mathematik · Differenzialrechnung (BKFH LPE 3 / BK FHSR) ----------
   DA Änderungsraten · DR Ableitungsregeln · DT Tangenten · DE Monotonie und Extrempunkte · DW Krümmung und Wendepunkte
   DG Schaubilder von f, f′ und f″ · DO Optimierungsprobleme
   Alle Ergebnisse werden vorberechnet (L…-Zeilen); Polynome als Koeffizientenlisten (höchster Grad zuerst). */
...(() => {
  const T = ['Mathematik', 'Differenzialrechnung'];
  const NR = ['①', '②', '③', '④'];
  const pW = (k, x) => k.reduce((s, a) => s * x + a, 0);                       // Polynomwert (Horner)
  const pD = k => k.slice(0, -1).map((a, i) => a * (k.length - 1 - i));        // Ableitung
  const nz = v => Math.abs(v) < 1e-9 ? 0 : v;
  const rd = v => nz(maR(v));
  const st = k => k.every(a => Number.isInteger(a * 100));                      // Koeffizienten mit höchstens zwei Nachkommastellen
  const gerade = (m, b) => maF('t', maPoly([rd(m), rd(b)]));
  const sinT = (a, kx, b) => maTrig(a, 'sin', kx, b), cosT = (a, kx, b) => maTrig(a, 'cos', kx, b);
  return [
  /* ======================= DA · Änderungsraten ======================= */
  blBau('rechnung', {id:'DA1', modul:'DA', stufe:1, titel:'Durchschnittliche Änderungsrate', tags:T.concat(['Änderungsrate', 'Sekante']), kopf:'Änderungsrate',
    text:W => `Berechne die durchschnittliche Änderungsrate (Sekantensteigung) auf dem angegebenen Intervall:<br>${W.map((w, i) => `${NR[i]} ${maF('f', maPoly(w.k))} auf [${maZ(w.x1)}; ${maZ(w.x2)}]`).join('<br>')}`,
    spalten:['①', '②', '③'],
    zeilen:maAus('k', 'x1', 'x2', 'Ly1', 'Ly2', 'Lm').concat([
      {id:'y1', t:'f(x₁)', e:'ma', f:'Ly1', weg:w => `f(${maZ(w.x1)}) = [y1]`},
      {id:'y2', t:'f(x₂)', e:'ma', f:'Ly2', weg:w => `f(${maZ(w.x2)}) = [y2]`},
      {id:'m', t:'durchschnittliche Änderungsrate', kurz:'m<sub>s</sub>', e:'ma', f:'Lm', weg:w => `m<sub>s</sub> = (f(x₂) − f(x₁)) ÷ (x₂ − x₁) = (${maZ(w.Ly2)} − ${maK(w.Ly1)}) ÷ (${maZ(w.x2)} − ${maK(w.x1)}) = [m]`}]),
    ...maMit(maSaetze(1601, 12, R => [0, 1, 2].map(() => { const k = [R.p([0.5, 1, -1, 2, -0.5]), R.g(-3, 3), R.g(-4, 4)], x1 = R.g(-3, 1), x2 = x1 + R.p([1, 2, 3, 4]);
      return {k, x1, x2, Ly1:rd(pW(k, x1)), Ly2:rd(pW(k, x2)), Lm:rd((pW(k, x2) - pW(k, x1)) / (x2 - x1))}; }))),
    hinweise:['Zuerst die beiden Funktionswerte berechnen.', 'm<sub>s</sub> = (f(x₂) − f(x₁)) ÷ (x₂ − x₁) – das ist die Steigung der Sekante durch beide Kurvenpunkte.'],
    merke:'Durchschnittliche Änderungsrate = Differenzenquotient = Sekantensteigung: m<sub>s</sub> = (f(x₂) − f(x₁)) ÷ (x₂ − x₁).'}),
  blBau('rechnung', {id:'DA2', modul:'DA', stufe:1, titel:'Durchschnittsgeschwindigkeit', tags:T.concat(['Änderungsrate', 'Anwendung']), kopf:'Bewegung',
    text:W => { const w = W[0]; return `Ein Fahrzeug beschleunigt aus dem Stand. Der zurückgelegte Weg wird beschrieben durch ${maF('s', maPoly([w.a, 0, 0], 't'), 't')} (t in Sekunden, s in Metern).<br>a) Welchen Weg hat es nach ${maZ(w.t1)} s und nach ${maZ(w.t2)} s zurückgelegt?<br>b) Berechne die Durchschnittsgeschwindigkeit im Zeitraum von ${maZ(w.t1)} s bis ${maZ(w.t2)} s.<br>c) Berechne die Durchschnittsgeschwindigkeit in den ersten ${maZ(w.t2)} Sekunden.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 't1', 't2', 'Ls1', 'Ls2', 'Lv', 'Lv0').concat([
      {id:'s1', t:'Weg nach t₁', e:'m', f:'Ls1', weg:w => `s(${maZ(w.t1)}) = ${maZ(w.a)} · ${maZ(w.t1)}² = [s1]`},
      {id:'s2', t:'Weg nach t₂', e:'m', f:'Ls2', weg:w => `s(${maZ(w.t2)}) = ${maZ(w.a)} · ${maZ(w.t2)}² = [s2]`},
      {id:'v', t:'Durchschnittsgeschwindigkeit t₁ bis t₂', kurz:'v̄', e:'m/s', f:'Lv', weg:w => `(${maZ(w.Ls2)} − ${maZ(w.Ls1)}) ÷ (${maZ(w.t2)} − ${maZ(w.t1)}) = [v]`},
      {id:'v0', t:'Durchschnittsgeschwindigkeit 0 bis t₂', kurz:'v̄₀', e:'m/s', f:'Lv0', weg:w => `${maZ(w.Ls2)} ÷ ${maZ(w.t2)} = [v0]`}]),
    ...maMit(maSaetze(1602, 12, R => { const a = R.p([1, 1.5, 2, 2.5, 3]), t1 = R.g(2, 6), t2 = t1 + R.g(2, 5);
      return [{a, t1, t2, Ls1:rd(a * t1 * t1), Ls2:rd(a * t2 * t2), Lv:rd(a * (t1 + t2)), Lv0:rd(a * t2)}]; })),
    hinweise:['Durchschnittsgeschwindigkeit = zurückgelegter Weg ÷ benötigte Zeit.', 'Das ist die durchschnittliche Änderungsrate von s auf dem Zeitintervall.'],
    merke:'Durchschnittsgeschwindigkeit v̄ = (s(t₂) − s(t₁)) ÷ (t₂ − t₁) – die Sekantensteigung im Weg-Zeit-Schaubild.'}),
  blBau('rechnung', {id:'DA3', modul:'DA', stufe:2, titel:'Von der Sekante zur Tangente', tags:T.concat(['Differenzenquotient', 'Grenzwert']), kopf:'Annäherung',
    text:W => { const w = W[0]; return `Gegeben ist ${maF('f', maPoly(w.k))}. Berechne den Differenzenquotienten (f(x₀ + h) − f(x₀)) ÷ h an der Stelle x₀ = ${maZ(w.x0)} für immer kleinere h (auf zwei Nachkommastellen) und gib den Grenzwert für h → 0 an – die momentane Änderungsrate f′(${maZ(w.x0)}).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'x0', 'L1', 'L2', 'L3', 'Lm').concat([
      {id:'d1', t:'h = 1', e:'ma', f:'L1', weg:w => `(f(${maZ(w.x0 + 1)}) − f(${maZ(w.x0)})) ÷ 1 = (${maZ(pW(w.k, w.x0 + 1))} − ${maK(pW(w.k, w.x0))}) ÷ 1 = [d1]`},
      {id:'d2', t:'h = 0,1', e:'ma', f:'L2', weg:w => `(f(${maZ(w.x0 + 0.1)}) − f(${maZ(w.x0)})) ÷ 0,1 ≈ [d2]`},
      {id:'d3', t:'h = 0,01', e:'ma', f:'L3', weg:w => `(f(${maZ(w.x0 + 0.01)}) − f(${maZ(w.x0)})) ÷ 0,01 ≈ [d3]`},
      {id:'m', t:'Grenzwert für h → 0', kurz:'f′(x₀)', e:'ma', f:'Lm', weg:w => `Die Werte nähern sich [m] – das ist die Tangentensteigung f′(${maZ(w.x0)}).`}]),
    ...maMit(maSaetze(1603, 12, R => { const k = R.p([[1, 0, 0], [1, 0, 0, 0], [0.5, 0, 0], [-1, 0, 0], [2, 0, 0], [0.5, 0, 0, 0]]), x0 = R.g(1, 3);
      const q = h => (pW(k, x0 + h) - pW(k, x0)) / h; return [{k, x0, L1:rd(q(1)), L2:rd(q(0.1)), L3:rd(q(0.01)), Lm:rd(pW(pD(k), x0))}]; })),
    hinweise:['f(x₀ + h) jeweils neu ausrechnen, dann durch h teilen.', 'Je kleiner h, desto näher liegt die Sekante an der Tangente.'],
    merke:'Momentane Änderungsrate = Grenzwert des Differenzenquotienten für h → 0 = Ableitung f′(x₀) = Tangentensteigung.'}),
  blBau('rechnung', {id:'DA4', modul:'DA', stufe:3, titel:'Änderungsrate aus dem Schaubild', tags:T.concat(['Änderungsrate', 'Schaubild']), kopf:'Ablesen',
    text:W => { const w = W[0]; return `Das Schaubild zeigt den Lagerbestand B(t) eines Artikels (t in Tagen, B in Stück).%%GRAFIK%%Lies B(${w.t1}), B(${w.t2}) und B(${w.t3}) ab und berechne die durchschnittliche Änderungsrate in den Zeiträumen [${w.t1}; ${w.t2}] und [${w.t2}; ${w.t3}]. Was bedeutet das Vorzeichen?`; },
    grafik:W => { const w = W[0], f = x => pW(w.k, x); return maGraf([{f, name:'B'}], {x0:0, x1:10, y0:0, y1:w.ymax, xs:1, ys:w.ys, punkte:[[w.t1, f(w.t1)], [w.t2, f(w.t2)], [w.t3, f(w.t3)]]}); },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 't1', 't2', 't3', 'ymax', 'ys', 'L1', 'L2', 'L3', 'Lm1', 'Lm2').concat([
      {id:'b1', t:'B(t₁)', e:'Stück', f:'L1', weg:w => `abgelesen: B(${w.t1}) = [b1]`},
      {id:'b2', t:'B(t₂)', e:'Stück', f:'L2', weg:w => `B(${w.t2}) = [b2]`},
      {id:'b3', t:'B(t₃)', e:'Stück', f:'L3', weg:w => `B(${w.t3}) = [b3]`},
      {id:'m1', t:'Änderungsrate [t₁; t₂]', e:'ma', f:'Lm1', weg:w => `(${maZ(w.L2)} − ${maZ(w.L1)}) ÷ (${w.t2} − ${w.t1}) = [m1] Stück pro Tag`},
      {id:'m2', t:'Änderungsrate [t₂; t₃]', e:'ma', f:'Lm2', weg:w => `(${maZ(w.L3)} − ${maZ(w.L2)}) ÷ (${w.t3} − ${w.t2}) = [m2] Stück pro Tag`}]),
    ...maMit(maSaetze(1604, 12, R => { const s = R.p([10, 20]), a = -s * R.p([0.5, 1]), t2 = R.g(3, 6), c = R.p([200, 240, 160]) ;
      const k = [a, -2 * a * t2, c], t1 = t2 - R.p([2, 3]), t3 = t2 + R.p([2, 3]); if (t1 < 0 || t3 > 10) return null;
      const v = [t1, t2, t3].map(t => pW(k, t)); if (v.some(y => y < 0 || !Number.isInteger(y))) return null; const top = Math.max(...v, pW(k, 0), pW(k, 10));
      if (pW(k, 0) < 0 || pW(k, 10) < 0) return null;
      return [{k, t1, t2, t3, ymax:Math.ceil(top / 50) * 50 + 50, ys:50, L1:v[0], L2:v[1], L3:v[2], Lm1:rd((v[1] - v[0]) / (t2 - t1)), Lm2:rd((v[2] - v[1]) / (t3 - t2))}]; })),
    wahl:[{id:'w', t:'Eine negative Änderungsrate bedeutet:', opts:['Der Bestand nimmt in diesem Zeitraum ab.', 'Der Bestand ist negativ.', 'Der Bestand bleibt gleich.'], r:'0'}],
    hinweise:['Die markierten Punkte liegen genau auf Gitterlinien.', 'Änderungsrate = Bestandsänderung ÷ Zeitspanne.'],
    merke:'Positive Änderungsrate: Größe nimmt zu<br>negative: nimmt ab<br>die Einheit ist „Einheit von B pro Einheit von t“.'}),
  {
    id:'DA5', modul:'DA', typ:'berechnung', mehrfach:true, stufe:0, titel:'Sekante, Tangente und Ableitung',
    tags:T.concat(['Theorie']),
    text:'Die Funktion f ist an der Stelle x₀ differenzierbar.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Der Differenzenquotient (f(x₀ + h) − f(x₀)) ÷ h ist die Steigung einer Sekante.', richtig:true, weg:'Sekante durch zwei Kurvenpunkte'},
      {text:'Die Ableitung f′(x₀) ist der Grenzwert des Differenzenquotienten für h → 0.', richtig:true, weg:'Differenzialquotient'},
      {text:'f′(x₀) gibt die Steigung der Tangente im Punkt P(x₀ | f(x₀)) an.', richtig:true, weg:'geometrische Deutung'},
      {text:'Bei einer Kostenfunktion heißt die momentane Änderungsrate Grenzkosten.', richtig:true, weg:'K′(x)'},
      {text:'Die durchschnittliche Änderungsrate ist immer gleich der momentanen Änderungsrate.', fehler:'Nur bei linearen Funktionen.'},
      {text:'Ist f′(x₀) = 0, dann ist f(x₀) = 0.', fehler:'f′(x₀) = 0 heißt waagrechte Tangente, nicht Nullstelle.'}
    ],
    hinweise:['Sekante: zwei Punkte; Tangente: ein Punkt und die Steigung dort.'],
    merke:'Differenzenquotient → Sekantensteigung (Durchschnitt); Differenzialquotient f′(x₀) → Tangentensteigung (momentan).'
  },

  /* ======================= DR · Ableitungsregeln ======================= */
  blBau('rechnung', {id:'DR1', modul:'DR', stufe:1, titel:'Polynomfunktionen ableiten', tags:T.concat(['Ableitung', 'Potenzregel']), kopf:'f′(x) = a·x³ + b·x² + c·x + d',
    text:W => `Bilde die Ableitung und trage die Koeffizienten von f′(x) = a·x³ + b·x² + c·x + d ein (fehlende Potenzen: 0):<br>${W.map((w, i) => `${NR[i]} ${maF('f', maPoly(w.k))}`).join('<br>')}`,
    spalten:['①', '②', '③'],
    zeilen:maAus('k', 'La', 'Lb', 'Lc', 'Ld').concat([
      {id:'a', t:'a (bei x³)', e:'ma', f:'La', weg:w => `f′(x) = ${maPoly(pD(w.k))}; a = [a]`},
      {id:'b', t:'b (bei x²)', e:'ma', f:'Lb', weg:w => `b = [b]`},
      {id:'c', t:'c (bei x)', e:'ma', f:'Lc', weg:w => `c = [c]`},
      {id:'d', t:'d (Konstante)', e:'ma', f:'Ld', weg:w => `d = [d]`}]),
    ...maMit(maSaetze(1611, 12, R => [0, 1, 2].map(() => { const k = [R.p([0, 0.25, 0.5, -1, 1, 2]), R.p([1, -2, 3, 0.5, -1]), R.g(-4, 4), R.g(-6, 6), R.g(-5, 5)];
      const d = pD(k); return {k, La:rd(d[0]), Lb:rd(d[1]), Lc:rd(d[2]), Ld:rd(d[3])}; }))),
    hinweise:['Potenzregel: (xⁿ)′ = n · xⁿ⁻¹.', 'Faktor bleibt stehen, Summanden einzeln ableiten, Konstanten fallen weg.'],
    merke:'(xⁿ)′ = n·xⁿ⁻¹<br>(a·f)′ = a·f′<br>(f + g)′ = f′ + g′<br>Konstante → 0.'}),
  blBau('rechnung', {id:'DR2', modul:'DR', stufe:1, titel:'Ableitung an einer Stelle', tags:T.concat(['Ableitung', 'Steigung']), kopf:'Steigung',
    text:W => `Berechne die Steigung des Schaubilds an der angegebenen Stelle:<br>${W.map((w, i) => `${NR[i]} ${maF('f', maPoly(w.k))}; x₀ = ${maZ(w.x0)}`).join('<br>')}`,
    spalten:['①', '②', '③'],
    zeilen:maAus('k', 'x0', 'L').concat([{id:'m', t:'f′(x₀)', e:'ma', f:'L', weg:w => `f′(x) = ${maPoly(pD(w.k))}; f′(${maZ(w.x0)}) = [m]`}]),
    ...maMit(maSaetze(1612, 12, R => [0, 1, 2].map(() => { const k = [R.p([0.5, -1, 1, 2, -0.5]), R.g(-3, 3), R.g(-4, 4), R.g(-5, 5)], x0 = R.g(-3, 3);
      return {k, x0, L:rd(pW(pD(k), x0))}; }))),
    hinweise:['Erst f′(x) bilden, dann x₀ einsetzen.'],
    merke:'Steigung im Punkt P(x₀ | f(x₀)) = f′(x₀).'}),
  blBau('rechnung', {id:'DR3', modul:'DR', stufe:2, titel:'e-Funktionen und trigonometrische Funktionen ableiten', tags:T.concat(['Ableitung', 'Kettenregel (linear)']), kopf:'Steigung',
    text:W => { const w = W[0]; return `Bilde jeweils die Ableitung und berechne die Steigung an der Stelle x₀ (auf zwei Nachkommastellen):<br>① ${maF('f', maExp(w.a, w.k, w.b))}; x₀ = ${maZ(w.x1)}<br>② ${maF('g', sinT(w.c, w.kx, 0) + ' ' + maVz(w.m) + 'x')}; x₀ = ${maPi(w.x2)}<br>③ ${maF('h', cosT(w.d, 'x', w.n))}; x₀ = ${maPi(w.x3)}`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'k', 'b', 'c', 'kx', 'kk', 'm', 'd', 'n', 'x1', 'x2', 'x3', 'L1', 'L2', 'L3').concat([
      {id:'f1', t:'① f′(x₀)', e:'ma', f:'L1', weg:w => `f′(x) = ${maExp(w.a * w.k, w.k, 0)}; f′(${maZ(w.x1)}) ≈ [f1]`},
      {id:'f2', t:'② g′(x₀)', e:'ma', f:'L2', weg:w => `g′(x) = ${maTrig(w.c * w.kk, 'cos', w.kx, 0)} ${maVz(w.m)}; g′(${maPi(w.x2)}) ≈ [f2]`},
      {id:'f3', t:'③ h′(x₀)', e:'ma', f:'L3', weg:w => `h′(x) = ${maTrig(-w.d, 'sin', 'x', 0)}; h′(${maPi(w.x3)}) ≈ [f3]`}]),
    ...maMit(maSaetze(1613, 12, R => { const a = R.p([2, 3, -1, 0.5, 4]), k = R.p([0.5, -0.5, 2, -1, 1]), b = R.g(-3, 3), x1 = R.p([0, 1, 2]);
      const K = R.p(MA_K.slice(0, 3)), c = R.p([2, 3, -1, 1]), m = R.p([1, -1, 2, 0.5]), d = R.p([2, -3, 4, 1]), n = R.g(-2, 2);
      if (Math.abs(k * x1) > 2) return null;
      const x2 = R.p([0, Math.PI / 2, Math.PI]), x3 = R.p([Math.PI / 6, Math.PI / 2, Math.PI / 3, Math.PI]);
      return [{a, k, b, c, kx:K.kx, kk:K.k, m, d, n, x1, x2, x3, L1:rd(a * k * Math.exp(k * x1)), L2:rd(c * K.k * Math.cos(K.k * x2) + m), L3:rd(-d * Math.sin(x3))}]; })),
    hinweise:['(e<sup>kx</sup>)′ = k·e<sup>kx</sup>; (sin(kx))′ = k·cos(kx); (cos(x))′ = −sin(x).', 'Taschenrechner im Bogenmaß (RAD).'],
    merke:'(a·e<sup>kx</sup> + b)′ = a·k·e<sup>kx</sup><br>(a·sin(kx))′ = a·k·cos(kx)<br>(a·cos(kx))′ = −a·k·sin(kx).'}),
  blBau('rechnung', {id:'DR4', modul:'DR', stufe:2, titel:'Höhere Ableitungen', tags:T.concat(['Ableitung', 'zweite Ableitung']), kopf:'Ableitungen',
    text:W => { const w = W[0]; return `Gegeben ist ${maF('f', maPoly(w.k))}. Bilde f′, f″ und f‴ und berechne die Werte an der Stelle x₀ = ${maZ(w.x0)}.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'x0', 'L1', 'L2', 'L3').concat([
      {id:'f1', t:'f′(x₀)', e:'ma', f:'L1', weg:w => `f′(x) = ${maPoly(pD(w.k))}; f′(${maZ(w.x0)}) = [f1]`},
      {id:'f2', t:'f″(x₀)', e:'ma', f:'L2', weg:w => `f″(x) = ${maPoly(pD(pD(w.k)))}; f″(${maZ(w.x0)}) = [f2]`},
      {id:'f3', t:'f‴(x₀)', e:'ma', f:'L3', weg:w => `f‴(x) = ${maPoly(pD(pD(pD(w.k))))}; f‴(${maZ(w.x0)}) = [f3]`}]),
    ...maMit(maSaetze(1614, 12, R => { const k = [R.p([0.25, 0.5, -0.5, 1]), R.p([1, -1, 2, 0]), R.g(-3, 3), R.g(-4, 4), R.g(-3, 3)], x0 = R.g(-2, 2);
      return [{k, x0, L1:rd(pW(pD(k), x0)), L2:rd(pW(pD(pD(k)), x0)), L3:rd(pW(pD(pD(pD(k))), x0))}]; })),
    hinweise:['Jede Ableitung aus der vorigen bilden.', 'Bei einem Polynom 4. Grades ist f‴ linear.'],
    merke:'f″ = (f′)′ beschreibt die Krümmung, f‴ = (f″)′ braucht man z. B. beim Nachweis von Wendepunkten.'}),
  {
    id:'DR5', modul:'DR', typ:'berechnung', mehrfach:true, stufe:1, titel:'Richtig abgeleitet?',
    tags:T.concat(['Ableitung']),
    text:'Prüfe die Ableitungen.',
    frage:'Welche Ableitungen sind richtig?',
    optionen:[
      {text:'f(x) = 3x⁴ − 2x → f′(x) = 12x³ − 2', richtig:true, weg:'Potenz- und Faktorregel'},
      {text:'f(x) = 5 − x² → f′(x) = −2x', richtig:true, weg:'Konstante fällt weg'},
      {text:'f(x) = 2e<sup>3x</sup> → f′(x) = 6e<sup>3x</sup>', richtig:true, weg:'innere Ableitung 3'},
      {text:'f(x) = sin(2x) → f′(x) = 2cos(2x)', richtig:true, weg:'innere Ableitung 2'},
      {text:'f(x) = cos(x) → f′(x) = sin(x)', fehler:'(cos x)′ = −sin x'},
      {text:'f(x) = e<sup>−x</sup> → f′(x) = e<sup>−x</sup>', fehler:'innere Ableitung −1: f′(x) = −e<sup>−x</sup>'},
      {text:'f(x) = x³ + 7 → f′(x) = 3x² + 7', fehler:'die Konstante 7 fällt beim Ableiten weg'}
    ],
    hinweise:['Bei e<sup>kx</sup>, sin(kx), cos(kx) kommt der Faktor k (innere Ableitung) dazu.'],
    merke:'(e<sup>kx</sup>)′ = k·e<sup>kx</sup><br>(sin(kx))′ = k·cos(kx)<br>(cos(kx))′ = −k·sin(kx)<br>Konstanten → 0.'
  },
  blBau('rechnung', {id:'DR6', modul:'DR', stufe:3, titel:'Grenzkosten', tags:T.concat(['Grenzkosten', 'Anwendung', 'Kostenfunktion']), kopf:'Kostenanalyse',
    text:W => { const w = W[0]; return `Ein Hersteller rechnet mit der Kostenfunktion ${maF('K', maPoly(w.k))} (x in Stück, K in €).<br>a) Berechne die Grenzkostenfunktion K′(x) und die Grenzkosten bei ${w.x0} Stück.<br>b) Berechne den tatsächlichen Kostenzuwachs K(${w.x0 + 1}) − K(${w.x0}) für das ${w.x0 + 1}. Stück.<br>c) Bei welcher Stückzahl sind die Grenzkosten am niedrigsten? Wie hoch sind sie dort?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'x0', 'Lg', 'Lz', 'Lx', 'Lm').concat([
      {id:'g', t:'Grenzkosten K′(x₀)', e:'€', f:'Lg', weg:w => `K′(x) = ${maPoly(pD(w.k))}; K′(${w.x0}) = [g]`},
      {id:'z', t:'Kostenzuwachs', e:'€', f:'Lz', weg:w => `K(${w.x0 + 1}) − K(${w.x0}) = ${maZ(pW(w.k, w.x0 + 1))} − ${maZ(pW(w.k, w.x0))} = [z]`},
      {id:'x', t:'Stückzahl mit minimalen Grenzkosten', kurz:'x<sub>min</sub>', e:'Stück', f:'Lx', weg:w => `K″(x) = ${maPoly(pD(pD(w.k)))} = 0 ⇒ x = [x]`},
      {id:'m', t:'minimale Grenzkosten', e:'€', f:'Lm', weg:w => `K′(${maZ(w.Lx)}) = [m]`}]),
    ...maMit(maSaetze(1615, 12, R => { const a = R.p([0.01, 0.02, 0.005]), xw = R.p([10, 20, 30, 40]), b = -3 * a * xw, c = R.p([20, 30, 40, 50]), F = R.p([200, 500, 800]);
      const k = [a, rd(b), c, F]; if (!st(k)) return null; const x0 = R.p([5, 10, 15, 25]); const g = pW(pD(k), x0); if (pW(pD(k), xw) <= 0) return null;
      return [{k, x0, Lg:rd(g), Lz:rd(pW(k, x0 + 1) - pW(k, x0)), Lx:xw, Lm:rd(pW(pD(k), xw))}]; })),
    hinweise:['Grenzkosten = K′(x): ungefähr die Kosten des nächsten Stücks.', 'Minimale Grenzkosten: Tiefpunkt von K′, also K″(x) = 0 (Wendestelle von K).'],
    merke:'Grenzkosten K′(x) ≈ Kosten einer zusätzlichen Einheit; ihr Minimum liegt an der Wendestelle der Kostenfunktion (Kostenkehre).'}),

  /* ======================= DT · Tangenten ======================= */
  blBau('rechnung', {id:'DT1', modul:'DT', stufe:1, titel:'Tangente an ein Polynom', tags:T.concat(['Tangente']), kopf:'Tangente t(x) = m·x + b',
    text:W => `Bestimme die Gleichung der Tangente im Punkt P(x₀ | f(x₀)):<br>${W.map((w, i) => `${NR[i]} ${maF('f', maPoly(w.k))}; x₀ = ${maZ(w.x0)}`).join('<br>')}`,
    spalten:['①', '②'],
    zeilen:maAus('k', 'x0', 'Ly', 'Lm', 'Lb').concat([
      {id:'y', t:'f(x₀)', e:'ma', f:'Ly', weg:w => `f(${maZ(w.x0)}) = [y]`},
      {id:'m', t:'Steigung m = f′(x₀)', kurz:'m', e:'ma', f:'Lm', weg:w => `f′(x) = ${maPoly(pD(w.k))}; m = f′(${maZ(w.x0)}) = [m]`},
      {id:'b', t:'y-Achsenabschnitt b', kurz:'b', e:'ma', f:'Lb', weg:w => `b = f(x₀) − m·x₀ = ${maZ(w.Ly)} − ${maK(w.Lm)} · ${maK(w.x0)} = [b]; ${gerade(w.Lm, w.Lb)}`}]),
    ...maMit(maSaetze(1621, 12, R => [0, 1].map(() => { const k = [R.p([0.5, -1, 1, -0.5]), R.g(-2, 2), R.g(-3, 3), R.g(-3, 3)], x0 = R.g(-2, 2);
      const y = pW(k, x0), m = pW(pD(k), x0); return {k, x0, Ly:rd(y), Lm:rd(m), Lb:rd(y - m * x0)}; }))),
    hinweise:['Berührpunkt: y₀ = f(x₀); Steigung: m = f′(x₀).', 'b aus y₀ = m·x₀ + b: b = y₀ − m·x₀.'],
    merke:'Tangente in P(x₀ | f(x₀)): t(x) = f′(x₀)·(x − x₀) + f(x₀).'}),
  blBau('rechnung', {id:'DT2', modul:'DT', stufe:2, titel:'Tangente an eine e-Funktion', tags:T.concat(['Tangente', 'Exponentialfunktion']), kopf:'Tangente t(x) = m·x + b',
    text:W => { const w = W[0]; return `Gegeben ist ${maF('f', maExp(w.a, w.k, w.c))}. Bestimme die Tangente an das Schaubild im Punkt mit x₀ = ${maZ(w.x0)} (Werte auf zwei Nachkommastellen) und den Schnittpunkt der Tangente mit der x-Achse.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'k', 'c', 'x0', 'Ly', 'Lm', 'Lb', 'Ln').concat([
      {id:'y', t:'f(x₀)', e:'ma', f:'Ly', weg:w => `f(${maZ(w.x0)}) ≈ [y]`},
      {id:'m', t:'Steigung m', e:'ma', f:'Lm', weg:w => `f′(x) = ${maExp(w.a * w.k, w.k, 0)}; m = f′(${maZ(w.x0)}) ≈ [m]`},
      {id:'b', t:'y-Achsenabschnitt b', e:'ma', f:'Lb', weg:w => `b = ${maZ(w.Ly)} − ${maK(w.Lm)} · ${maK(w.x0)} ≈ [b]`},
      {id:'n', t:'Nullstelle der Tangente', e:'ma', f:'Ln', weg:w => `m·x + b = 0 ⇒ x = −b ÷ m ≈ [n]`}]),
    ...maMit(maSaetze(1622, 12, R => { const a = R.p([1, 2, 0.5, -1, 3]), k = R.p([0.5, -0.5, 1, -1]), c = R.g(-2, 2), x0 = R.p([0, 1, 2, -1]);
      const y = rd(a * Math.exp(k * x0) + c), m = rd(a * k * Math.exp(k * x0)), b = rd(y - m * x0); if (Math.abs(m) < 0.1) return null;
      return [{a, k, c, x0, Ly:y, Lm:m, Lb:b, Ln:rd(-b / m)}]; })),
    hinweise:['(a·e<sup>kx</sup> + c)′ = a·k·e<sup>kx</sup>.', 'Mit den gerundeten Werten weiterrechnen.'],
    merke:'Tangente: m = f′(x₀), b = f(x₀) − m·x₀; Schnitt mit der x-Achse: t(x) = 0.'}),
  blBau('rechnung', {id:'DT3', modul:'DT', stufe:2, titel:'Punkte mit vorgegebener Steigung', tags:T.concat(['Tangente', 'Steigung']), kopf:'Kurvenpunkte',
    text:W => { const w = W[0]; return `In welchen Punkten hat das Schaubild von ${maF('f', maPoly(w.k))} die Steigung ${maZ(w.m)}? (Kleinere x-Stelle zuerst.)`; },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'm', 'L1', 'L2', 'Ly1', 'Ly2').concat([
      {id:'x1', t:'x₁', e:'ma', f:'L1', weg:w => `f′(x) = ${maPoly(pD(w.k))} = ${maZ(w.m)} ⇔ ${maPoly(pD(w.k).map((v, i) => i === 2 ? v - w.m : v))} = 0 ⇒ x₁ = [x1]`},
      {id:'y1', t:'f(x₁)', e:'ma', f:'Ly1', weg:w => `f(${maZ(w.L1)}) = [y1]`},
      {id:'x2', t:'x₂', e:'ma', f:'L2', weg:w => `x₂ = [x2]`},
      {id:'y2', t:'f(x₂)', e:'ma', f:'Ly2', weg:w => `f(${maZ(w.L2)}) = [y2]`}]),
    ...maMit(maSaetze(1623, 12, R => { const a = R.p([1, -1, 0.5]), p = R.g(-3, 1), q = p + R.g(1, 4), m = R.g(-3, 3);
      // f′(x) − m = 3a(x − p)(x − q) ⇒ f(x) = a x³ − 1,5a(p+q) x² + (3a·pq + m) x + d
      const k = [a, rd(-1.5 * a * (p + q)), rd(3 * a * p * q + m), R.g(-3, 3)]; if (!st(k)) return null;
      return [{k, m, L1:p, L2:q, Ly1:rd(pW(k, p)), Ly2:rd(pW(k, q))}]; })),
    hinweise:['Ansatz f′(x) = m.', 'Die quadratische Gleichung mit der abc- bzw. pq-Formel lösen.'],
    merke:'Punkte mit Steigung m: f′(x) = m lösen, dann die y-Werte mit f(x) berechnen.'}),
  blBau('rechnung', {id:'DT4', modul:'DT', stufe:3, titel:'Tangente und Steigungsdreieck mit den Achsen', tags:T.concat(['Tangente', 'Achsenschnittpunkte']), kopf:'Tangente',
    text:W => { const w = W[0]; return `Das Schaubild von ${maF('f', maPoly(w.k))} hat im Punkt P(${maZ(w.x0)} | f(${maZ(w.x0)})) die Tangente t.<br>a) Bestimme die Gleichung von t.<br>b) Berechne die Schnittpunkte von t mit den Koordinatenachsen.<br>c) Die Tangente bildet mit den Achsen ein Dreieck. Berechne seinen Flächeninhalt.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'x0', 'Lm', 'Lb', 'Ln', 'LA').concat([
      {id:'m', t:'Steigung m', e:'ma', f:'Lm', weg:w => `f(${maZ(w.x0)}) = ${maZ(pW(w.k, w.x0))}; f′(x) = ${maPoly(pD(w.k))}; m = [m]`},
      {id:'b', t:'y-Achsenabschnitt b', kurz:'S<sub>y</sub>', e:'ma', f:'Lb', weg:w => `b = ${maZ(pW(w.k, w.x0))} − ${maK(w.Lm)} · ${maK(w.x0)} = [b]; ${gerade(w.Lm, w.Lb)}`},
      {id:'n', t:'Schnittstelle mit der x-Achse', kurz:'N', e:'ma', f:'Ln', weg:w => `t(x) = 0 ⇒ x = −b ÷ m = [n]`},
      {id:'A', t:'Flächeninhalt des Dreiecks', kurz:'A', e:'FE', f:'LA', weg:w => `A = ½ · |${maZ(w.Ln)}| · |${maZ(w.Lb)}| = [A]`}]),
    ...maMit(maSaetze(1624, 12, R => { const k = [R.p([-0.5, 0.5, -1, 1]), 0, R.g(-2, 2), R.g(1, 4)], x0 = R.p([1, 2, -1]);
      const m = pW(pD(k), x0), y = pW(k, x0), b = y - m * x0; if (Math.abs(m) < 0.5 || Math.abs(b) < 0.5) return null; const n = -b / m;
      return [{k, x0, Lm:rd(m), Lb:rd(b), Ln:rd(n), LA:rd(0.5 * Math.abs(n * b))}]; })),
    hinweise:['Erst t(x) = m·x + b aufstellen.', 'Das Dreieck hat die Ecken (0 | 0), (N | 0) und (0 | b).'],
    merke:'Tangentendreieck mit den Achsen: A = ½ · |x-Achsenabschnitt| · |y-Achsenabschnitt|.'}),

  /* ======================= DE · Monotonie und Extrempunkte ======================= */
  blBau('rechnung', {id:'DE1', modul:'DE', stufe:1, titel:'Extrempunkte eines Polynoms 3. Grades', tags:T.concat(['Extrempunkte', 'Hochpunkt', 'Tiefpunkt']), kopf:'Extrempunkte',
    text:W => { const w = W[0]; return `Bestimme die Extrempunkte des Schaubilds von ${maF('f', maPoly(w.k))} (kleinere x-Stelle zuerst) und gib an, welcher ein Hochpunkt ist.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'a', 'p', 'q', 'Ly1', 'Ly2').concat([
      {id:'x1', t:'x₁', e:'ma', f:'p', weg:w => `f′(x) = ${maPoly(pD(w.k))} = 0 ⇒ x₁ = [x1]`},
      {id:'y1', t:'f(x₁)', e:'ma', f:'Ly1', weg:w => `f(${maZ(w.p)}) = [y1]`},
      {id:'x2', t:'x₂', e:'ma', f:'q', weg:w => `x₂ = [x2]`},
      {id:'y2', t:'f(x₂)', e:'ma', f:'Ly2', weg:w => `f(${maZ(w.q)}) = [y2]`}]),
    ...maMit(maSaetze(1631, 12, R => { const a = R.p([3, -3, 1.5, -1.5, 6, -6]), p = R.g(-3, 1), q = p + R.p([2, 4]);
      const k = [a / 3, rd(-a * (p + q) / 2), a * p * q, R.g(-3, 3)]; if (!st(k)) return null;
      return [{k, a, p, q, Ly1:rd(pW(k, p)), Ly2:rd(pW(k, q))}]; })),
    wahl:[{id:'w', t:'Der Hochpunkt liegt bei', opts:['x₁', 'x₂'], r:'a@0 > 0 ? 0 : 1'}],
    hinweise:['Notwendige Bedingung: f′(x) = 0.', 'Hinreichend: f″(x) < 0 → Hochpunkt, f″(x) > 0 → Tiefpunkt (oder Vorzeichenwechsel von f′).'],
    merke:'Extremstellen: f′(x) = 0 und f″(x) ≠ 0<br>f″ < 0 Hochpunkt, f″ > 0 Tiefpunkt<br>y-Wert mit f berechnen.'}),
  blBau('rechnung', {id:'DE2', modul:'DE', stufe:2, titel:'Art der Extrempunkte mit f″', tags:T.concat(['Extrempunkte', 'zweite Ableitung']), kopf:'Nachweis',
    text:W => { const w = W[0]; return `Gegeben ist ${maF('f', maPoly(w.k))}. Bestimme die Stellen mit waagrechter Tangente (kleinere zuerst) und weise mit der zweiten Ableitung nach, ob ein Hoch- oder Tiefpunkt vorliegt.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'p', 'q', 'L1', 'L2', 'Ly1', 'Ly2').concat([
      {id:'x1', t:'x₁', e:'ma', f:'p', weg:w => `f′(x) = ${maPoly(pD(w.k))} = 0 ⇒ x₁ = [x1]`},
      {id:'z1', t:'f″(x₁)', e:'ma', f:'L1', weg:w => `f″(x) = ${maPoly(pD(pD(w.k)))}; f″(${maZ(w.p)}) = [z1]`},
      {id:'y1', t:'f(x₁)', e:'ma', f:'Ly1', weg:w => `f(${maZ(w.p)}) = [y1]`},
      {id:'x2', t:'x₂', e:'ma', f:'q', weg:w => `x₂ = [x2]`},
      {id:'z2', t:'f″(x₂)', e:'ma', f:'L2', weg:w => `f″(${maZ(w.q)}) = [z2]`},
      {id:'y2', t:'f(x₂)', e:'ma', f:'Ly2', weg:w => `f(${maZ(w.q)}) = [y2]`}]),
    ...maMit(maSaetze(1632, 12, R => { const a = R.p([0.5, -0.5, 1, -1, 1.5]), p = R.g(-4, 1), q = p + R.g(1, 5);
      const k = [rd(a / 3), rd(-a * (p + q) / 2), rd(a * p * q), R.g(-2, 4)]; if (!st(k)) return null; const d2 = pD(pD(k));
      if (Math.abs(pW(pD(k), p)) > 1e-9 || Math.abs(pW(pD(k), q)) > 1e-9) return null;
      return [{k, p, q, L1:rd(pW(d2, p)), L2:rd(pW(d2, q)), Ly1:rd(pW(k, p)), Ly2:rd(pW(k, q))}]; })),
    wahl:[{id:'w1', t:'Bei x₁ liegt ein', opts:['Hochpunkt', 'Tiefpunkt'], r:'L1@0 < 0 ? 0 : 1'}, {id:'w2', t:'Bei x₂ liegt ein', opts:['Hochpunkt', 'Tiefpunkt'], r:'L2@0 < 0 ? 0 : 1'}],
    hinweise:['f″(x₁) < 0: Rechtskurve → Hochpunkt.', 'f″(x₁) > 0: Linkskurve → Tiefpunkt.'],
    merke:'Hinreichende Bedingung: f′(x₀) = 0 und f″(x₀) < 0 → Hochpunkt; f′(x₀) = 0 und f″(x₀) > 0 → Tiefpunkt.'}),
  blBau('rechnung', {id:'DE3', modul:'DE', stufe:2, titel:'Monotonie', tags:T.concat(['Monotonie']), kopf:'Monotonie',
    text:W => { const w = W[0]; return `Untersuche ${maF('f', maPoly(w.k))} auf Monotonie: Bestimme die Stellen, an denen sich das Monotonieverhalten ändert (kleinere zuerst), und gib an, wie f auf den Intervallen verläuft.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'a', 'p', 'q').concat([
      {id:'x1', t:'erste Stelle', e:'ma', f:'p', weg:w => `f′(x) = ${maPoly(pD(w.k))} = 0 ⇒ x₁ = [x1]`},
      {id:'x2', t:'zweite Stelle', e:'ma', f:'q', weg:w => `x₂ = [x2]; f′ ist eine nach ${w.a > 0 ? 'oben' : 'unten'} geöffnete Parabel`}]),
    ...maMit(maSaetze(1633, 12, R => { const a = R.p([3, -3, 1.5, -1.5]), p = R.g(-3, 1), q = p + R.p([2, 4, 6]);
      const k = [a / 3, rd(-a * (p + q) / 2), a * p * q, R.g(-3, 3)]; if (!st(k)) return null; return [{k, a, p, q}]; })),
    wahl:[{id:'w1', t:'Für x < x₁ ist f', opts:['streng monoton steigend', 'streng monoton fallend'], r:'a@0 > 0 ? 0 : 1'},
          {id:'w2', t:'Für x₁ < x < x₂ ist f', opts:['streng monoton steigend', 'streng monoton fallend'], r:'a@0 > 0 ? 1 : 0'},
          {id:'w3', t:'Für x > x₂ ist f', opts:['streng monoton steigend', 'streng monoton fallend'], r:'a@0 > 0 ? 0 : 1'}],
    hinweise:['f′(x) > 0: steigend; f′(x) < 0: fallend.', 'Vorzeichen von f′ in den Intervallen mit einem Testwert prüfen.'],
    merke:'Monotonie über das Vorzeichen von f′: f′ > 0 → streng monoton steigend, f′ < 0 → streng monoton fallend; Wechsel an den Extremstellen.'}),
  blBau('rechnung', {id:'DE4', modul:'DE', stufe:2, titel:'Extrempunkt einer e-Funktion mit linearem Anteil', tags:T.concat(['Extrempunkte', 'Exponentialfunktion']), kopf:'Extrempunkt',
    text:W => { const w = W[0]; return `Gegeben ist ${maF('f', maExp(w.a, w.k, 0) + ' ' + maVz(w.m) + 'x')}. Bestimme den Extrempunkt (Werte auf zwei Nachkommastellen) und seine Art.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'k', 'm', 'Lx', 'Ly', 'Lz').concat([
      {id:'x', t:'x-Koordinate', e:'ma', f:'Lx', weg:w => `f′(x) = ${maExp(w.a * w.k, w.k, 0)} ${maVz(w.m)} = 0 ⇔ e<sup>${w.k === 1 ? '' : maZ(w.k)}x</sup> = ${maZ(-w.m / (w.a * w.k))} ⇒ x = ln(${maZ(-w.m / (w.a * w.k))}) ÷ ${maK(w.k)} ≈ [x]`},
      {id:'y', t:'y-Koordinate', e:'ma', f:'Ly', weg:w => `f(${maZ(w.Lx)}) ≈ [y]`},
      {id:'z', t:'f″(x)', e:'ma', f:'Lz', weg:w => `f″(x) = ${maExp(w.a * w.k * w.k, w.k, 0)}; f″(${maZ(w.Lx)}) ≈ [z]`}]),
    ...maMit(maSaetze(1634, 12, R => { const a = R.p([1, 2, -1, -2, 0.5]), k = R.p([1, 0.5, -1, -0.5]), m = R.p([-1, -2, 1, 2, -3, 3]); const q = -m / (a * k); if (q <= 0) return null;
      const x = Math.log(q) / k; if (Math.abs(x) > 5) return null;
      return [{a, k, m, Lx:rd(x), Ly:rd(a * Math.exp(k * x) + m * x), Lz:rd(a * k * k * Math.exp(k * x))}]; })),
    wahl:[{id:'w', t:'Der Extrempunkt ist ein', opts:['Hochpunkt', 'Tiefpunkt'], r:'Lz@0 < 0 ? 0 : 1'}],
    hinweise:['f′(x) = 0 nach e<sup>kx</sup> auflösen, dann logarithmieren.', 'Das Vorzeichen von f″ hängt nur vom Vorzeichen von a ab.'],
    merke:'a·k·e<sup>kx</sup> + m = 0 ⇔ e<sup>kx</sup> = −m ÷ (a·k) ⇔ x = ln(−m ÷ (a·k)) ÷ k; f″(x) = a·k²·e<sup>kx</sup>.'}),
  blBau('rechnung', {id:'DE5', modul:'DE', stufe:3, titel:'Hoch- und Tiefpunkte einer Sinusfunktion', tags:T.concat(['Extrempunkte', 'Trigonometrie']), kopf:'Extrempunkte',
    text:W => { const w = W[0]; return `Gegeben ist ${maF('f', maTrig(w.a, 'sin', w.kx, w.b))} für 0 ≤ x ≤ ${maPi(2 * Math.PI / w.k)} (eine Periode). Bestimme mit der Ableitung die Hoch- und Tiefpunkte (x auf zwei Nachkommastellen).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'kx', 'k', 'b', 'Lh', 'Lt').concat([
      {id:'xh', t:'x-Wert des Hochpunkts', e:'ma', f:'Lh', weg:w => `f′(x) = ${maTrig(w.a * w.k, 'cos', w.kx, 0)} = 0 ⇒ ${w.kx} = π/2 oder 3π/2; Hochpunkt bei x ≈ [xh]`},
      {id:'yh', t:'y-Wert des Hochpunkts', e:'ma', f:'b + abs(a)', weg:w => `y = ${maZ(w.b)} + ${maZ(Math.abs(w.a))} = [yh]`},
      {id:'xt', t:'x-Wert des Tiefpunkts', e:'ma', f:'Lt', weg:w => `Tiefpunkt bei x ≈ [xt]`},
      {id:'yt', t:'y-Wert des Tiefpunkts', e:'ma', f:'b - abs(a)', weg:w => `y = ${maZ(w.b)} − ${maZ(Math.abs(w.a))} = [yt]`}]),
    ...maMit(maSaetze(1635, 12, R => { const K = R.p(MA_K.slice(0, 4)), a = R.p([2, 3, -2, 1, -1, 4]), b = R.g(-2, 3);
      const x1 = Math.PI / 2 / K.k, x2 = 3 * Math.PI / 2 / K.k; return [{a, kx:K.kx, k:K.k, b, Lh:rd(a > 0 ? x1 : x2), Lt:rd(a > 0 ? x2 : x1)}]; })),
    hinweise:['cos(z) = 0 für z = π/2 und z = 3π/2 in einer Periode.', 'Ist a < 0, tauschen Hoch- und Tiefpunkt die Rollen.'],
    merke:'a·sin(kx) + b: Extremstellen bei kx = π/2 und 3π/2; Hochpunkt y = b + |a|, Tiefpunkt y = b − |a|.'}),
  {
    id:'DE6', modul:'DE', typ:'berechnung', mehrfach:true, stufe:0, titel:'Bedingungen für Extrempunkte',
    tags:T.concat(['Theorie']),
    text:'Die Funktion f ist beliebig oft differenzierbar.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'f′(x₀) = 0 ist notwendig für eine Extremstelle x₀.', richtig:true, weg:'waagrechte Tangente'},
      {text:'f′(x₀) = 0 und f″(x₀) < 0 ⇒ Hochpunkt bei x₀.', richtig:true, weg:'hinreichende Bedingung'},
      {text:'Wechselt f′ bei x₀ das Vorzeichen von + nach −, liegt ein Hochpunkt vor.', richtig:true, weg:'Vorzeichenwechsel-Kriterium'},
      {text:'Bei f(x) = x³ ist f′(0) = 0, aber x = 0 ist keine Extremstelle (Sattelpunkt).', richtig:true, weg:'kein Vorzeichenwechsel'},
      {text:'Aus f′(x₀) = 0 folgt immer ein Extrempunkt.', fehler:'Gegenbeispiel x³ (Sattelpunkt).'},
      {text:'Ein Polynom 3. Grades hat immer zwei Extrempunkte.', fehler:'Es kann auch keinen haben, z. B. x³ + x.'}
    ],
    hinweise:['Notwendig ≠ hinreichend.'],
    merke:'Notwendig: f′(x₀) = 0<br>hinreichend: zusätzlich f″(x₀) ≠ 0 oder Vorzeichenwechsel von f′<br>ohne Vorzeichenwechsel: Sattelpunkt.'
  },

  /* ======================= DW · Krümmung und Wendepunkte ======================= */
  blBau('rechnung', {id:'DW1', modul:'DW', stufe:1, titel:'Wendepunkt eines Polynoms 3. Grades', tags:T.concat(['Wendepunkt']), kopf:'Wendepunkt',
    text:W => `Bestimme den Wendepunkt und die Steigung im Wendepunkt:<br>${W.map((w, i) => `${NR[i]} ${maF('f', maPoly(w.k))}`).join('<br>')}`,
    spalten:['①', '②'],
    zeilen:maAus('k', 'Lx', 'Ly', 'Lm').concat([
      {id:'x', t:'x<sub>W</sub>', e:'ma', f:'Lx', weg:w => `f″(x) = ${maPoly(pD(pD(w.k)))} = 0 ⇒ x<sub>W</sub> = [x]; f‴ ≠ 0`},
      {id:'y', t:'y<sub>W</sub>', e:'ma', f:'Ly', weg:w => `f(${maZ(w.Lx)}) = [y]`},
      {id:'m', t:'Steigung im Wendepunkt', kurz:'f′(x<sub>W</sub>)', e:'ma', f:'Lm', weg:w => `f′(${maZ(w.Lx)}) = [m]`}]),
    ...maMit(maSaetze(1641, 12, R => [0, 1].map(() => { const a = R.p([1, -1, 0.5, 2, -0.5]), xw = R.g(-2, 2), k = [a, rd(-3 * a * xw), R.g(-3, 3), R.g(-3, 3)];
      return {k, Lx:xw, Ly:rd(pW(k, xw)), Lm:rd(pW(pD(k), xw))}; }))),
    hinweise:['Notwendig: f″(x) = 0; hinreichend: f‴(x) ≠ 0 (oder Vorzeichenwechsel von f″).', 'Ein Polynom 3. Grades hat genau einen Wendepunkt.'],
    merke:'Wendepunkt: f″(x<sub>W</sub>) = 0 und f‴(x<sub>W</sub>) ≠ 0; dort ändert sich das Krümmungsverhalten.'}),
  blBau('rechnung', {id:'DW2', modul:'DW', stufe:2, titel:'Wendepunkte eines Polynoms 4. Grades', tags:T.concat(['Wendepunkt', 'Symmetrie']), kopf:'Wendepunkte',
    text:W => { const w = W[0]; return `Das Schaubild von ${maF('f', maPoly(w.k))} ist symmetrisch zur y-Achse. Bestimme die beiden Wendepunkte (kleinere x-Stelle zuerst; auf zwei Nachkommastellen).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'L1', 'L2', 'Ly').concat([
      {id:'x1', t:'x₁', e:'ma', f:'L1', weg:w => `f″(x) = ${maPoly(pD(pD(w.k)))} = 0 ⇔ x² = ${maZ(w.L2 * w.L2)} ⇒ x₁ ≈ [x1]`},
      {id:'x2', t:'x₂', e:'ma', f:'L2', weg:w => `x₂ ≈ [x2]`},
      {id:'y', t:'y-Wert (beide gleich)', e:'ma', f:'Ly', weg:w => `f(±${maZ(w.L2)}) ≈ [y]`}]),
    ...maMit(maSaetze(1642, 12, R => { const a = R.p([0.25, 0.5, -0.5, 1, -0.25]), b = R.p([-3, -2, 3, 2, -6, 6]), c = R.g(-2, 4); if (-b / (6 * a) <= 0) return null;
      const x = Math.sqrt(-b / (6 * a)), k = [a, 0, b, 0, c]; return [{k, L1:rd(-x), L2:rd(x), Ly:rd(pW(k, x))}]; })),
    hinweise:['Bei Achsensymmetrie liegen die Wendepunkte symmetrisch: ±x<sub>W</sub>.', 'f″(x) = 12a·x² + 2b = 0 nach x² auflösen.'],
    merke:'f(x) = ax⁴ + bx² + c: f″(x) = 12ax² + 2b; Wendestellen x = ±√(−b ÷ (6a)), falls a und b verschiedene Vorzeichen haben.'}),
  blBau('rechnung', {id:'DW3', modul:'DW', stufe:2, titel:'Krümmungsverhalten', tags:T.concat(['Krümmung']), kopf:'Krümmung',
    text:W => { const w = W[0]; return `Untersuche das Krümmungsverhalten von ${maF('f', maPoly(w.k))}: An welcher Stelle wechselt die Krümmung, und wie ist das Schaubild links und rechts davon gekrümmt?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'a', 'Lx').concat([{id:'x', t:'Stelle des Krümmungswechsels', e:'ma', f:'Lx', weg:w => `f″(x) = ${maPoly(pD(pD(w.k)))} = 0 ⇒ x = [x]`}]),
    ...maMit(maSaetze(1643, 12, R => { const a = R.p([1, -1, 2, -2, 0.5]), xw = R.g(-3, 3), k = [a, rd(-3 * a * xw), R.g(-4, 4), R.g(-3, 3)]; return [{k, a, Lx:xw}]; })),
    wahl:[{id:'w1', t:'Links vom Wendepunkt ist das Schaubild eine', opts:['Linkskurve (f″ > 0)', 'Rechtskurve (f″ < 0)'], r:'a@0 > 0 ? 1 : 0'},
          {id:'w2', t:'Rechts vom Wendepunkt ist das Schaubild eine', opts:['Linkskurve (f″ > 0)', 'Rechtskurve (f″ < 0)'], r:'a@0 > 0 ? 0 : 1'}],
    hinweise:['f″ ist hier eine Gerade mit der Steigung 6a.', 'f″ > 0: Linkskurve (wie ∪), f″ < 0: Rechtskurve (wie ∩).'],
    merke:'f″(x) > 0: Linkskurve; f″(x) < 0: Rechtskurve; Wendepunkt: Wechsel der Krümmung.'}),
  blBau('rechnung', {id:'DW4', modul:'DW', stufe:3, titel:'Wendetangente', tags:T.concat(['Wendepunkt', 'Tangente']), kopf:'Wendetangente',
    text:W => { const w = W[0]; return `Gegeben ist ${maF('f', maPoly(w.k))}.<br>a) Bestimme den Wendepunkt W.<br>b) Bestimme die Gleichung der Wendetangente.<br>c) Wo schneidet die Wendetangente die x-Achse?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'Lx', 'Ly', 'Lm', 'Lb', 'Ln').concat([
      {id:'x', t:'x<sub>W</sub>', e:'ma', f:'Lx', weg:w => `f″(x) = ${maPoly(pD(pD(w.k)))} = 0 ⇒ x<sub>W</sub> = [x]`},
      {id:'y', t:'y<sub>W</sub>', e:'ma', f:'Ly', weg:w => `f(${maZ(w.Lx)}) = [y]`},
      {id:'m', t:'Steigung m', e:'ma', f:'Lm', weg:w => `m = f′(${maZ(w.Lx)}) = [m]`},
      {id:'b', t:'y-Achsenabschnitt b', e:'ma', f:'Lb', weg:w => `b = ${maZ(w.Ly)} − ${maK(w.Lm)} · ${maK(w.Lx)} = [b]; ${gerade(w.Lm, w.Lb)}`},
      {id:'n', t:'Nullstelle der Wendetangente', e:'ma', f:'Ln', weg:w => `x = −b ÷ m = [n]`}]),
    ...maMit(maSaetze(1644, 12, R => { const a = R.p([0.5, -0.5, 1, -1]), xw = R.g(-2, 2), k = [a, rd(-3 * a * xw), R.g(-3, 3), R.g(-2, 4)];
      const y = pW(k, xw), m = pW(pD(k), xw), b = y - m * xw; if (Math.abs(m) < 0.5) return null; return [{k, Lx:xw, Ly:rd(y), Lm:rd(m), Lb:rd(b), Ln:rd(-b / m)}]; })),
    hinweise:['Wendetangente = Tangente im Wendepunkt.', 'm = f′(x<sub>W</sub>), b = y<sub>W</sub> − m·x<sub>W</sub>.'],
    merke:'Wendetangente: t(x) = f′(x<sub>W</sub>)·(x − x<sub>W</sub>) + f(x<sub>W</sub>); im Wendepunkt ist die Steigung lokal am größten oder am kleinsten.'}),

  /* ======================= DG · Schaubilder von f, f′ und f″ ======================= */
  blBau('zuordnung', {id:'DG1', modul:'DG', stufe:1, titel:'Was sieht man an f′?', tags:T.concat(['Ableitungsschaubild']),
    text:'Welche Eigenschaft von f′ gehört zur Eigenschaft von f?', kategorien:['f′(x) > 0', 'f′(x) < 0', 'f′ hat eine Nullstelle mit Vorzeichenwechsel', 'f′ hat einen Extrempunkt'], anzahl:8,
    faelle:[
      {t:'f ist streng monoton steigend', k:0}, {t:'das Schaubild von f steigt an', k:0},
      {t:'f ist streng monoton fallend', k:1}, {t:'das Schaubild von f fällt', k:1},
      {t:'f hat einen Hochpunkt', k:2, weg:'f′ wechselt von + nach −'}, {t:'f hat einen Tiefpunkt', k:2, weg:'f′ wechselt von − nach +'},
      {t:'f hat einen Wendepunkt', k:3, weg:'dort ist die Steigung lokal maximal oder minimal'}, {t:'die Steigung von f ist an einer Stelle am größten', k:3}
    ],
    hinweise:['f′ gibt an jeder Stelle die Steigung von f an.', 'Extrempunkt von f ↔ Nullstelle von f′; Wendepunkt von f ↔ Extrempunkt von f′.'],
    merke:'f′ > 0 ↔ f steigt; f′ < 0 ↔ f fällt; Nullstelle von f′ mit VZW ↔ Extrempunkt von f; Extrempunkt von f′ ↔ Wendepunkt von f.'}),
  {
    id:'DG2', modul:'DG', typ:'berechnung', mehrfach:true, stufe:2, titel:'Schaubild der Ableitung deuten',
    tags:T.concat(['Ableitungsschaubild']),
    text:'Das Schaubild zeigt die <b>Ableitung f′</b> einer Funktion f (nicht f selbst).' + maGraf([{f:x => 0.5 * (x + 2) * (x - 3), name:'f′'}], {x0:-4, x1:5, y0:-4, y1:5, xs:1, ys:1}),
    frage:'Welche Aussagen über f treffen zu?',
    optionen:[
      {text:'f hat bei x = −2 einen Hochpunkt.', richtig:true, weg:'f′ wechselt dort von + nach −'},
      {text:'f hat bei x = 3 einen Tiefpunkt.', richtig:true, weg:'f′ wechselt dort von − nach +'},
      {text:'f hat bei x = 0,5 einen Wendepunkt.', richtig:true, weg:'f′ hat dort seinen Tiefpunkt'},
      {text:'f ist für −2 < x < 3 streng monoton fallend.', richtig:true, weg:'dort ist f′ < 0'},
      {text:'f hat bei x = −2 und x = 3 Nullstellen.', fehler:'Dort hat f′ Nullstellen – f hat dort waagrechte Tangenten.'},
      {text:'f ist für x > 3 streng monoton fallend.', fehler:'Für x > 3 ist f′ > 0, also steigt f.'}
    ],
    hinweise:['Lies am Schaubild von f′ die Steigung von f ab, nicht die Funktionswerte.'],
    merke:'Am Schaubild von f′: Nullstellen mit VZW → Extremstellen von f<br>Tiefpunkt/Hochpunkt von f′ → Wendestellen von f<br>f′ über der x-Achse → f steigt.'
  },
  {
    id:'DG3', modul:'DG', typ:'berechnung', mehrfach:true, stufe:2, titel:'Vom Schaubild von f auf f′ schließen',
    tags:T.concat(['Ableitungsschaubild']),
    text:'Das Schaubild zeigt die Funktion f.' + maGraf([{f:x => -0.25 * x * x * x + 3 * x, name:'f'}], {x0:-4, x1:4, y0:-6, y1:6, xs:1, ys:2}),
    frage:'Welche Aussagen über die Ableitung f′ treffen zu?',
    optionen:[
      {text:'f′ hat genau zwei Nullstellen.', richtig:true, weg:'f hat zwei Extrempunkte (bei x = ±2)'},
      {text:'f′(0) ist größer als f′(1).', richtig:true, weg:'im Wendepunkt bei 0 ist die Steigung am größten'},
      {text:'f′ ist für −2 < x < 2 positiv.', richtig:true, weg:'f steigt dort'},
      {text:'Das Schaubild von f′ ist eine nach unten geöffnete Parabel.', richtig:true, weg:'f ist ein Polynom 3. Grades mit negativem Leitkoeffizienten'},
      {text:'f′ hat bei x = 0 eine Nullstelle, weil f dort eine Nullstelle hat.', fehler:'f′(0) = 3 – an der Nullstelle von f steigt f.'},
      {text:'f′ ist überall negativ.', fehler:'Zwischen den Extrempunkten steigt f, also f′ > 0.'}
    ],
    hinweise:['Wo f steigt, ist f′ positiv; wo f waagrechte Tangenten hat, ist f′ = 0.'],
    merke:'Steigung von f ablesen → Funktionswert von f′<br>Extrempunkte von f → Nullstellen von f′<br>Wendepunkt von f → Extrempunkt von f′.'
  },
  blBau('rechnung', {id:'DG4', modul:'DG', stufe:3, titel:'Extremstellen am Schaubild von f′ ablesen', tags:T.concat(['Ableitungsschaubild', 'Extrempunkte']), kopf:'Ablesen',
    text:W => `Das Schaubild zeigt die <b>Ableitung f′</b> einer Funktion f.%%GRAFIK%%Lies ab: Wo hat f einen Hochpunkt, wo einen Tiefpunkt, und wo liegt die Wendestelle von f?`,
    grafik:W => { const w = W[0], f = x => w.a * (x - w.p) * (x - w.q); return maGraf([{f, name:'f′'}], Object.assign(maBereich(f, Math.min(w.p, 0) - 2, Math.max(w.q, 0) + 2), {xs:1})); },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'p', 'q', 'Lh', 'Lt', 'Lw').concat([
      {id:'h', t:'Hochstelle von f', e:'ma', f:'Lh', weg:w => `f′ wechselt bei x = [h] von + nach −`},
      {id:'t', t:'Tiefstelle von f', e:'ma', f:'Lt', weg:w => `f′ wechselt bei x = [t] von − nach +`},
      {id:'wp', t:'Wendestelle von f', e:'ma', f:'Lw', weg:w => `Extremstelle von f′ (Scheitel der Parabel): x = (${maZ(w.p)} + ${maZ(w.q)}) ÷ 2 = [wp]`}]),
    ...maMit(maSaetze(1654, 12, R => { const a = R.p([0.5, -0.5, 1, -1]), p = R.g(-3, 0), q = p + R.p([2, 4]);
      return [{a, p, q, Lh:a > 0 ? p : q, Lt:a > 0 ? q : p, Lw:rd((p + q) / 2)}]; })),
    hinweise:['Nullstellen von f′ sind die Kandidaten für Extremstellen von f.', 'Vorzeichen von f′ links und rechts der Nullstelle vergleichen.'],
    merke:'f′: + → − ⇒ Hochpunkt von f<br>− → + ⇒ Tiefpunkt von f<br>Extremstelle von f′ ⇒ Wendestelle von f.'}),

  /* ======================= DO · Optimierungsprobleme ======================= */
  blBau('rechnung', {id:'DO1', modul:'DO', stufe:1, titel:'Größte Weidefläche an einer Mauer', tags:T.concat(['Optimierung', 'Extremwertproblem']), kopf:'Optimierung',
    text:W => { const w = W[0]; return `Mit ${maZ(w.L)} m Zaun soll an einer langen Mauer eine rechteckige Weide eingezäunt werden (die Mauer bildet eine Seite). Die beiden Seiten senkrecht zur Mauer sind je x m lang.<br>a) Stelle die Zielfunktion A(x) für die Fläche auf.<br>b) Für welches x wird die Fläche maximal? Wie lang ist die Seite parallel zur Mauer, und wie groß ist die Fläche?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('L').concat([
      {id:'x', t:'optimale Breite x', e:'m', f:'L / 4', weg:w => `A(x) = x·(${maZ(w.L)} − 2x) = ${maPoly([-2, w.L, 0])}; A′(x) = ${maPoly([-4, w.L])} = 0 ⇒ x = [x]`},
      {id:'l', t:'Seite parallel zur Mauer', e:'m', f:'L - 2 * x', weg:w => `${maZ(w.L)} − 2 · ${maZ(w.L / 4)} = [l]`},
      {id:'A', t:'maximale Fläche', e:'m²', f:'x * l', weg:w => `A = ${maZ(w.L / 4)} · ${maZ(w.L / 2)} = [A]`}]),
    ...maMit(maSaetze(1661, 12, R => [{L:R.p([40, 60, 80, 100, 120, 200, 48, 64])}])),
    hinweise:['Nebenbedingung: 2x + Länge = Zaunlänge.', 'A′(x) = 0; A″(x) = −4 < 0 → Maximum.'],
    merke:'Optimierung: Zielfunktion aufstellen, Nebenbedingung einsetzen, Ableitung null setzen, Art des Extremums und Definitionsbereich prüfen.'}),
  blBau('rechnung', {id:'DO2', modul:'DO', stufe:2, titel:'Schachtel mit größtem Volumen', tags:T.concat(['Optimierung', 'Volumen']), kopf:'Optimierung',
    text:W => { const w = W[0]; return `Aus einem rechteckigen Karton (${maZ(w.a)} cm × ${maZ(w.b)} cm) wird an jeder Ecke ein Quadrat mit der Seitenlänge x cm ausgeschnitten; die Ränder werden zu einer offenen Schachtel hochgebogen.<br>a) Stelle V(x) auf und gib den sinnvollen Definitionsbereich an.<br>b) Bestimme x so, dass das Volumen maximal wird (auf zwei Nachkommastellen), und berechne das maximale Volumen.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'Lx', 'LV').concat([
      {id:'d', t:'obere Grenze des Definitionsbereichs', e:'cm', f:'min(a, b) / 2', weg:w => `0 < x < ${maZ(Math.min(w.a, w.b))} ÷ 2 = [d]`},
      {id:'x', t:'optimales x', e:'cm', f:'Lx', weg:w => `V(x) = x(${maZ(w.a)} − 2x)(${maZ(w.b)} − 2x) = ${maPoly([4, -2 * (w.a + w.b), w.a * w.b, 0])}; V′(x) = ${maPoly([12, -4 * (w.a + w.b), w.a * w.b])} = 0 ⇒ x ≈ [x] (die zweite Lösung liegt außerhalb von D)`},
      {id:'V', t:'maximales Volumen', e:'cm³', f:'LV', weg:w => `V(${maZ(w.Lx)}) ≈ [V]`}]),
    ...maMit(maSaetze(1662, 12, R => { const a = R.p([20, 24, 30, 16, 40]), b = R.p([20, 30, 40, 50, 60]); if (b < a) return null;
      const A = 12, B = -4 * (a + b), C = a * b, x = (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A); const xr = rd(x);
      return [{a, b, Lx:xr, LV:rd(xr * (a - 2 * xr) * (b - 2 * xr))}]; })),
    hinweise:['Grundfläche (a − 2x)(b − 2x), Höhe x.', 'V′(x) = 0 mit der abc-Formel lösen; nur die Lösung im Definitionsbereich nehmen.'],
    merke:'Bei Optimierungsaufgaben immer den Definitionsbereich beachten: Lösungen außerhalb (oder an den Rändern) scheiden aus.'}),
  blBau('rechnung', {id:'DO3', modul:'DO', stufe:3, titel:'Gewinnmaximum bei kubischer Kostenfunktion', tags:T.concat(['Optimierung', 'Gewinnmaximum', 'Kostenfunktion']), kopf:'Gewinnmaximierung',
    text:W => { const w = W[0]; return `Ein Unternehmen verkauft sein Produkt zum festen Preis von ${maZ(w.p)} € je Stück. Die Kosten werden beschrieben durch ${maF('K', maPoly(w.k))} (x in Stück).<br>a) Stelle die Gewinnfunktion G(x) = ${maZ(w.p)}x − K(x) auf.<br>b) Berechne die gewinnmaximale Menge und den maximalen Gewinn.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'p', 'Lx', 'LG').concat([
      {id:'x', t:'gewinnmaximale Menge', e:'Stück', f:'Lx', weg:w => { const g = [-w.k[0], -w.k[1], w.p - w.k[2], -w.k[3]]; return `G(x) = ${maPoly(g)}; G′(x) = ${maPoly(pD(g))} = 0 ⇒ x = [x] (G″ < 0)`; }},
      {id:'G', t:'maximaler Gewinn', e:'€', f:'LG', weg:w => `G(${maZ(w.Lx)}) = [G]`}]),
    ...maMit(maSaetze(1663, 12, R => { const a = R.p([0.01, 0.02, 0.005]), xw = R.p([20, 30, 40]), b = rd(-3 * a * xw), c = R.p([20, 30, 40]), F = R.p([500, 800, 1000]), k = [a, b, c, F];
      if (!st(k) || pW(pD(k), xw) <= 0) return null; const xm = R.p([40, 50, 60, 70, 80]); if (xm <= xw) return null; const p = rd(pW(pD(k), xm)); if (!Number.isInteger(p * 100)) return null;
      const G = p * xm - pW(k, xm); if (G <= 0) return null; return [{k, p, Lx:xm, LG:rd(G)}]; })),
    hinweise:['G′(x) = p − K′(x) = 0 ⇔ K′(x) = p (Grenzkosten = Preis).', 'Von den beiden Lösungen ist die mit G″(x) < 0 das Maximum.'],
    merke:'Gewinnmaximum bei konstantem Preis: Grenzkosten = Preis (K′(x) = p) auf dem steigenden Ast von K′; dann G(x) berechnen.'}),
  blBau('rechnung', {id:'DO4', modul:'DO', stufe:3, titel:'Rechteck unter einer Parabel', tags:T.concat(['Optimierung', 'Rechteck']), kopf:'Optimierung',
    text:W => { const w = W[0]; return `Gegeben ist ${maF('f', maPoly([-w.a, 0, w.c]))}. Ein Rechteck hat zwei Seiten auf den Koordinatenachsen und eine Ecke P(u | f(u)) auf dem Schaubild im ersten Quadranten.%%GRAFIK%%Für welches u ist der Flächeninhalt maximal? Berechne u und den maximalen Flächeninhalt (auf zwei Nachkommastellen).`; },
    grafik:W => { const w = W[0], f = x => -w.a * x * x + w.c, u = w.Lu; return maGraf([{f, name:'f'}, {f:x => x >= 0 && x <= u ? f(u) : NaN, farbe:'var(--moos,#2C6A4E)'}], Object.assign(maBereich(f, -0.5, Math.sqrt(w.c / w.a) + 0.5, 0, Math.sqrt(w.c / w.a)), {punkte:[[u, f(u)]]})); },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'c', 'Lu', 'LA').concat([
      {id:'u', t:'optimales u', e:'ma', f:'Lu', weg:w => `A(u) = u · f(u) = ${maPoly([-w.a, 0, w.c, 0], 'u')}; A′(u) = ${maPoly([-3 * w.a, 0, w.c], 'u')} = 0 ⇒ u = √(${maZ(w.c / (3 * w.a))}) ≈ [u]`},
      {id:'A', t:'maximaler Flächeninhalt', e:'FE', f:'LA', weg:w => `A(${maZ(w.Lu)}) ≈ [A]`}]),
    ...maMit(maSaetze(1664, 12, R => { const a = R.p([0.5, 1, 2, 0.25]), c = R.p([3, 4, 6, 8, 9, 12]); const u = rd(Math.sqrt(c / (3 * a)));
      return [{a, c, Lu:u, LA:rd(u * (-a * u * u + c))}]; })),
    hinweise:['Breite u, Höhe f(u).', 'A′(u) = 0, nur positives u (erster Quadrant).'],
    merke:'Rechteck unter einem Schaubild: A(u) = u · f(u); Maximum über A′(u) = 0 und A″(u) < 0.'}),
  {
    id:'DO5', modul:'DO', typ:'berechnung', mehrfach:true, stufe:0, titel:'Vorgehen bei Optimierungsproblemen',
    tags:T.concat(['Theorie', 'Optimierung']),
    text:'Bei einem Optimierungsproblem soll eine Größe (z. B. Fläche, Volumen, Gewinn) möglichst groß oder klein werden.',
    frage:'Welche Schritte gehören zum Lösungsweg?',
    optionen:[
      {text:'Zielfunktion aufstellen: die Größe, die optimal werden soll, als Term.', richtig:true, weg:'Schritt 1'},
      {text:'Mit der Nebenbedingung eine Variable ersetzen, sodass die Zielfunktion nur noch von einer Variablen abhängt.', richtig:true, weg:'Schritt 2'},
      {text:'Definitionsbereich festlegen.', richtig:true, weg:'sinnvolle Werte'},
      {text:'Extremstellen mit der Ableitung bestimmen und die Randwerte prüfen.', richtig:true, weg:'globales Maximum/Minimum'},
      {text:'Ergebnis im Sachzusammenhang deuten (Antwortsatz).', richtig:true, weg:'Interpretation'},
      {text:'Die Lösung der Gleichung Zielfunktion = 0 ist immer das Optimum.', fehler:'Optimum über die Ableitung, nicht über die Nullstellen.'}
    ],
    hinweise:['Zielfunktion → Nebenbedingung → Definitionsbereich → Ableitung → Prüfen → Antwort.'],
    merke:'Optimierung: Zielfunktion, Nebenbedingung, Definitionsbereich, Extremstellen (auch Ränder), Antwort im Sachzusammenhang.'
  }
  ]; })(),
/* ---------- Mathematik · Integralrechnung und Funktionsbestimmung (BKFH LPE 3 / BK FHSR) ----------
   IS Stammfunktionen · IB Bestimmtes Integral · IF Flächeninhalte · IR Bestandsrekonstruktion · FT Funktionsterme aus Eigenschaften · AP Prüfungstraining Analysis
   Alle Ergebnisse werden vorberechnet (L…-Zeilen); Polynome als Koeffizientenlisten (höchster Grad zuerst). */
...(() => {
  const T = ['Mathematik', 'Integralrechnung'];
  const NR = ['①', '②', '③', '④'];
  const pW = (k, x) => k.reduce((s, a) => s * x + a, 0);
  const pD = k => k.slice(0, -1).map((a, i) => a * (k.length - 1 - i));
  const pS = k => k.map((a, i) => a / (k.length - i)).concat([0]);                // Stammfunktion (C = 0)
  const pI = (k, a, b) => pW(pS(k), b) - pW(pS(k), a);                            // bestimmtes Integral
  const nz = v => Math.abs(v) < 1e-9 ? 0 : v;
  const rd = v => nz(maR(v));
  const st = k => k.every(a => Number.isInteger(Math.round(a * 1e6) / 1e4));
  // Koeffizient als Bruch, wenn nötig (1/3, 2/3, 1/6 …)
  const frac = v => { for (const d of [1, 2, 3, 4, 6, 12]){ const n = Math.round(v * d); if (Math.abs(v * d - n) < 1e-9) return d === 1 || [2, 4].includes(d) ? maZ(v) : (n < 0 ? '−' : '') + Math.abs(n) + '/' + d; } return maZ(v); };
  const bruch = (k, v) => { v = v || 'x'; const n = k.length - 1; let s = '';
    k.forEach((a, i) => { const g = n - i; if (Math.abs(a) < 1e-12) return; const b = Math.abs(a), fb = frac(b), z = g === 0 ? fb : (Math.abs(b - 1) < 1e-12 ? '' : fb + (fb.includes('/') ? '·' : '')) + v + (g > 1 ? MA_HOCH[g] || '<sup>' + g + '</sup>' : '');
      s += s ? (a < 0 ? ' − ' : ' + ') + z : (a < 0 ? '−' : '') + z; }); return s || '0'; };
  // Integral als Text
  const zs = v => typeof v === 'number' ? maZ(v) : v, integ = (a, b, term) => `${maI(zs(a), zs(b))} (${term}) dx`;
  return [
  /* ======================= IS · Stammfunktionen ======================= */
  blBau('rechnung', {id:'IS1', modul:'IS', stufe:1, titel:'Stammfunktionen von Polynomen', tags:T.concat(['Stammfunktion']), kopf:'F(x) = a·x⁴ + b·x³ + c·x² + d·x',
    text:W => `Bestimme eine Stammfunktion F (ohne Konstante) und trage die Koeffizienten ein (fehlende Potenzen: 0; auf zwei Nachkommastellen):<br>${W.map((w, i) => `${NR[i]} ${maF('f', maPoly(w.k))}`).join('<br>')}`,
    spalten:['①', '②', '③'],
    zeilen:maAus('k', 'La', 'Lb', 'Lc', 'Ld').concat([
      {id:'a', t:'a (bei x⁴)', e:'ma', f:'La', weg:w => `F(x) = ${bruch(pS(w.k).slice(-5))}; a = [a]`},
      {id:'b', t:'b (bei x³)', e:'ma', f:'Lb', weg:w => `b = [b]`},
      {id:'c', t:'c (bei x²)', e:'ma', f:'Lc', weg:w => `c = [c]`},
      {id:'d', t:'d (bei x)', e:'ma', f:'Ld', weg:w => `d = [d]`}]),
    ...maMit(maSaetze(2301, 12, R => [0, 1, 2].map(() => { const k = [R.p([0, 2, 4, -4, 1]), R.p([3, -3, 6, 1.5, 0]), R.p([2, -4, 1, 0, 6]), R.g(-5, 5)];
      const F = pS(k); return {k, La:rd(F[0]), Lb:rd(F[1]), Lc:rd(F[2]), Ld:rd(F[3])}; }))),
    hinweise:['Potenzregel rückwärts: xⁿ → xⁿ⁺¹ ÷ (n + 1).', 'Probe: F′(x) muss wieder f(x) ergeben.'],
    merke:'F ist Stammfunktion von f, wenn F′ = f<br>zu xⁿ gehört xⁿ⁺¹ ÷ (n + 1)<br>jede weitere Stammfunktion unterscheidet sich nur um eine Konstante C.'}),
  blBau('rechnung', {id:'IS2', modul:'IS', stufe:2, titel:'Stammfunktionen von e- und trigonometrischen Funktionen', tags:T.concat(['Stammfunktion', 'Exponentialfunktion', 'Trigonometrie']), kopf:'Wert der Stammfunktion',
    text:W => { const w = W[0]; return `Bestimme jeweils die Stammfunktion F mit F(0) = 0 und berechne F(x₀) (auf zwei Nachkommastellen; Bogenmaß):<br>① ${maF('f', maExp(w.a, w.k, 0))}; x₀ = ${maZ(w.x1)}<br>② ${maF('g', maTrig(w.c, 'sin', w.kx, 0))}; x₀ = ${maPi(w.x2)}<br>③ ${maF('h', maTrig(w.d, 'cos', w.kx, 0))}; x₀ = ${maPi(w.x3)}`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'k', 'c', 'd', 'kx', 'kk', 'x1', 'x2', 'x3', 'L1', 'L2', 'L3').concat([
      {id:'f1', t:'① F(x₀)', e:'ma', f:'L1', weg:w => `F(x) = ${maZ(w.a / w.k)}·e<sup>${w.k === 1 ? '' : maZ(w.k)}x</sup> ${maVz(-w.a / w.k)} (wegen F(0) = 0); F(${maZ(w.x1)}) ≈ [f1]`},
      {id:'f2', t:'② G(x₀)', e:'ma', f:'L2', weg:w => `G(x) = ${maZ(-w.c / w.kk)}·cos(${w.kx}) ${maVz(w.c / w.kk)}; G(${maPi(w.x2)}) ≈ [f2]`},
      {id:'f3', t:'③ H(x₀)', e:'ma', f:'L3', weg:w => `H(x) = ${maZ(w.d / w.kk)}·sin(${w.kx}); H(${maPi(w.x3)}) ≈ [f3]`}]),
    ...maMit(maSaetze(2302, 12, R => { const a = R.p([2, 3, 4, -2, 6]), k = R.p([0.5, 2, -1, 1, -0.5]), x1 = R.p([1, 2]); if (Math.abs(k * x1) > 2) return null;
      const K = R.p(MA_K.slice(0, 3)), c = R.p([2, 4, -1, 3]), d = R.p([2, -2, 3, 1]);
      const x2 = R.p([Math.PI / 2, Math.PI, Math.PI / 3]), x3 = R.p([Math.PI / 4, Math.PI / 6, Math.PI / 2]);
      return [{a, k, c, d, kx:K.kx, kk:K.k, x1, x2, x3, L1:rd(a / k * (Math.exp(k * x1) - 1)), L2:rd(-c / K.k * (Math.cos(K.k * x2) - 1)), L3:rd(d / K.k * Math.sin(K.k * x3))}]; })),
    hinweise:['e<sup>kx</sup> → (1/k)·e<sup>kx</sup>; sin(kx) → −(1/k)·cos(kx); cos(kx) → (1/k)·sin(kx).', 'Die Konstante C so wählen, dass F(0) = 0.'],
    merke:'Stammfunktionen: a·e<sup>kx</sup> → (a/k)·e<sup>kx</sup><br>a·sin(kx) → −(a/k)·cos(kx)<br>a·cos(kx) → (a/k)·sin(kx)<br>Probe durch Ableiten.'}),
  blBau('rechnung', {id:'IS3', modul:'IS', stufe:2, titel:'Stammfunktion durch einen Punkt', tags:T.concat(['Stammfunktion', 'Integrationskonstante']), kopf:'Stammfunktion',
    text:W => { const w = W[0]; return `Das Schaubild der Stammfunktion F von ${maF('f', maPoly(w.k))} soll durch den Punkt P(${maZ(w.x0)} | ${maZ(w.y0)}) gehen. Bestimme die Konstante C und berechne F(${maZ(w.x1)}).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'x0', 'y0', 'x1', 'LC', 'LF').concat([
      {id:'C', t:'Konstante C', e:'ma', f:'LC', weg:w => `F(x) = ${bruch(pS(w.k))} + C; F(${maZ(w.x0)}) = ${maZ(pW(pS(w.k), w.x0))} + C = ${maZ(w.y0)} ⇒ C = [C]`},
      {id:'F', t:'F(x₁)', e:'ma', f:'LF', weg:w => `F(${maZ(w.x1)}) = ${maZ(pW(pS(w.k), w.x1))} ${maVz(w.LC)} = [F]`}]),
    ...maMit(maSaetze(2303, 12, R => { const k = [R.p([3, -3, 6]), R.p([2, -4, 0]), R.g(-3, 3)], x0 = R.p([1, 2, -1]), y0 = R.g(-4, 6), x1 = R.p([0, 2, 3, -2]); if (x1 === x0) return null;
      const C = y0 - pW(pS(k), x0); return [{k, x0, y0, x1, LC:rd(C), LF:rd(pW(pS(k), x1) + C)}]; })),
    hinweise:['Stammfunktion mit + C aufschreiben, dann den Punkt einsetzen.'],
    merke:'Alle Stammfunktionen von f: F(x) + C; ein vorgegebener Punkt legt C fest.'}),
  blBau('rechnung', {id:'IS5', modul:'IS', stufe:3, titel:'Stammfunktion einer e-Funktion mit linearem Anteil', tags:T.concat(['Stammfunktion', 'Exponentialfunktion', 'Integrationskonstante']), kopf:'Stammfunktion',
    text:W => { const w = W[0]; return `Gegeben ist ${maF('f', maExp(w.a, w.k, 0) + ' ' + maVz(w.m) + 'x ' + maVz(w.n))}. Das Schaubild einer Stammfunktion F geht durch P(0 | ${maZ(w.y0)}).<br>a) Bestimme F(x) einschließlich der Konstanten C.<br>b) Berechne F(${maZ(w.x1)}) (auf zwei Nachkommastellen).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'k', 'm', 'n', 'y0', 'x1', 'LC', 'LF').concat([
      {id:'C', t:'Konstante C', e:'ma', f:'LC', weg:w => `F(x) = ${maZ(w.a / w.k)}·e<sup>${w.k === 1 ? '' : maZ(w.k)}x</sup> ${maVz(w.m / 2)}x² ${maVz(w.n)}x + C; F(0) = ${maZ(w.a / w.k)} + C = ${maZ(w.y0)} ⇒ C = [C]`},
      {id:'F', t:'F(x₁)', e:'ma', f:'LF', weg:w => `F(${maZ(w.x1)}) ≈ [F]`}]),
    ...maMit(maSaetze(2305, 12, R => { const a = R.p([2, 4, -2, 6]), k = R.p([2, -1, 0.5, -0.5, 1]), m = R.p([2, -2, 4, 1]), n = R.g(-3, 3), y0 = R.g(-3, 5), x1 = R.p([1, 2]);
      if (Math.abs(k * x1) > 2) return null; const C = y0 - a / k; return [{a, k, m, n, y0, x1, LC:rd(C), LF:rd(a / k * Math.exp(k * x1) + m / 2 * x1 * x1 + n * x1 + C)}]; })),
    hinweise:['Jeden Summanden einzeln integrieren.', 'F(0) einsetzen: e⁰ = 1.'],
    merke:'Summenregel gilt auch beim Integrieren; die Konstante C aus einem Punkt bestimmen.'}),
  {
    id:'IS4', modul:'IS', typ:'berechnung', mehrfach:true, stufe:0, titel:'Stammfunktionen erkennen',
    tags:T.concat(['Theorie', 'Stammfunktion']),
    text:'F heißt Stammfunktion von f, wenn F′(x) = f(x) gilt.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'F(x) = x³ + 5 ist eine Stammfunktion von f(x) = 3x².', richtig:true, weg:'F′(x) = 3x²'},
      {text:'F(x) = −cos(x) ist eine Stammfunktion von f(x) = sin(x).', richtig:true, weg:'(−cos x)′ = sin x'},
      {text:'F(x) = 0,5e<sup>2x</sup> ist eine Stammfunktion von f(x) = e<sup>2x</sup>.', richtig:true, weg:'Kettenregel rückwärts'},
      {text:'Zwei Stammfunktionen von f unterscheiden sich nur um eine Konstante.', richtig:true, weg:'Schaubilder in y-Richtung verschoben'},
      {text:'F(x) = x³ ist eine Stammfunktion von f(x) = x².', fehler:'F′(x) = 3x² ≠ x²; richtig wäre x³ ÷ 3.'},
      {text:'F(x) = sin(x) ist eine Stammfunktion von f(x) = −cos(x).', fehler:'(sin x)′ = cos x, nicht −cos x.'}
    ],
    hinweise:['Immer per Ableiten prüfen: F′ = f?'],
    merke:'Probe für Stammfunktionen: ableiten. Zu f gibt es unendlich viele Stammfunktionen F + C.'
  },

  /* ======================= IB · Bestimmtes Integral ======================= */
  blBau('rechnung', {id:'IB1', modul:'IB', stufe:1, titel:'Bestimmte Integrale berechnen', tags:T.concat(['Integral', 'Hauptsatz']), kopf:'Integral',
    text:W => `Berechne mit dem Hauptsatz (auf zwei Nachkommastellen):<br>${W.map((w, i) => `${NR[i]} ${integ(w.a, w.b, maPoly(w.k))}`).join('<br>')}`,
    spalten:['①', '②', '③'],
    zeilen:maAus('k', 'a', 'b', 'Lb', 'La', 'L').concat([
      {id:'Fb', t:'F(b)', e:'ma', f:'Lb', weg:w => `F(x) = ${bruch(pS(w.k))}; F(${maZ(w.b)}) = [Fb]`},
      {id:'Fa', t:'F(a)', e:'ma', f:'La', weg:w => `F(${maZ(w.a)}) = [Fa]`},
      {id:'I', t:'Integral', e:'ma', f:'L', weg:w => `F(b) − F(a) = ${maZ(w.Lb)} − ${maK(w.La)} = [I]`}]),
    ...maMit(maSaetze(2311, 12, R => [0, 1, 2].map(() => { const k = R.p([[3, 0, 0], [1, 0], [6, -2, 0], [4, 0, -1, 0], [-3, 6, 0], [1.5, 0, 2]]), a = R.g(-2, 1), b = a + R.g(1, 3);
      const Fb = pW(pS(k), b), Fa = pW(pS(k), a); return {k, a, b, Lb:rd(Fb), La:rd(Fa), L:rd(Fb - Fa)}; }))),
    hinweise:['Hauptsatz: ' + maI('a', 'b') + ' f(x) dx = F(b) − F(a).', 'Klammern bei negativen Werten setzen.'],
    merke:'Hauptsatz der Differenzial- und Integralrechnung: ' + maI('a', 'b') + ' f(x) dx = ' + maKl('F(x)', 'a', 'b') + ' = F(b) − F(a), F eine beliebige Stammfunktion.'}),
  blBau('rechnung', {id:'IB2', modul:'IB', stufe:2, titel:'Integrale mit e- und Sinusfunktionen', tags:T.concat(['Integral', 'Exponentialfunktion', 'Trigonometrie']), kopf:'Integral',
    text:W => { const w = W[0]; return `Berechne (auf zwei Nachkommastellen; Bogenmaß):<br>① ${integ(w.a1, w.b1, maExp(w.a, w.k, w.c))}<br>② ${maI('0', maPi(w.b2))} (${maTrig(w.d, 'sin', w.kx, 0)}) dx`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'k', 'c', 'a1', 'b1', 'd', 'kx', 'kk', 'b2', 'L1', 'L2').concat([
      {id:'i1', t:'① Integral', e:'ma', f:'L1', weg:w => `F(x) = ${maZ(w.a / w.k)}·e<sup>${w.k === 1 ? '' : maZ(w.k)}x</sup> ${maVz(w.c)}x; F(${maZ(w.b1)}) − F(${maZ(w.a1)}) ≈ [i1]`},
      {id:'i2', t:'② Integral', e:'ma', f:'L2', weg:w => `F(x) = ${maZ(-w.d / w.kk)}·cos(${w.kx}); F(${maPi(w.b2)}) − F(0) ≈ [i2]`}]),
    ...maMit(maSaetze(2312, 12, R => { const a = R.p([2, 4, 1, 3]), k = R.p([0.5, 1, -1, -0.5]), c = R.g(-2, 2), a1 = 0, b1 = R.p([1, 2]); if (Math.abs(k * b1) > 2) return null;
      const K = R.p(MA_K.slice(0, 3)), d = R.p([2, 3, -1, 4]), b2 = R.p([Math.PI / 2, Math.PI, Math.PI / 3]) / K.k;
      const F1 = x => a / k * Math.exp(k * x) + c * x;
      return [{a, k, c, a1, b1, d, kx:K.kx, kk:K.k, b2, L1:rd(F1(b1) - F1(a1)), L2:rd(-d / K.k * (Math.cos(K.k * b2) - 1))}]; })),
    hinweise:['Stammfunktion bilden und Grenzen einsetzen.', 'cos(0) = 1, e⁰ = 1 nicht vergessen.'],
    merke:'∫ a·e<sup>kx</sup> dx → (a/k)·e<sup>kx</sup><br>∫ a·sin(kx) dx → −(a/k)·cos(kx)<br>dann F(b) − F(a).'}),
  blBau('rechnung', {id:'IB3', modul:'IB', stufe:2, titel:'Integral als Grenzwert einer Summe', tags:T.concat(['Integral', 'Untersumme', 'Obersumme']), kopf:'Annäherung',
    text:W => { const w = W[0]; return `Die Fläche unter ${maF('f', maPoly(w.k))} über dem Intervall [0; ${maZ(w.b)}] wird mit ${w.n} gleich breiten Rechtecken angenähert.<br>a) Berechne die Untersumme (Rechteckhöhe = Funktionswert am linken Rand) und die Obersumme (rechter Rand).<br>b) Berechne den exakten Wert mit dem Integral.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'b', 'n', 'LU', 'LO', 'LI').concat([
      {id:'U', t:'Untersumme', e:'FE', f:'LU', weg:w => { const d = w.b / w.n; return `Breite ${maZ(d)}; U = ${maZ(d)} · (${Array.from({length:w.n}, (_, i) => maZ(pW(w.k, i * d))).join(' + ')}) = [U]`; }},
      {id:'O', t:'Obersumme', e:'FE', f:'LO', weg:w => { const d = w.b / w.n; return `O = ${maZ(d)} · (${Array.from({length:w.n}, (_, i) => maZ(pW(w.k, (i + 1) * d))).join(' + ')}) = [O]`; }},
      {id:'I', t:'exakter Wert', e:'FE', f:'LI', weg:w => `${maI('0', maZ(w.b))} f(x) dx = F(${maZ(w.b)}) − F(0) = [I]`}]),
    ...maMit(maSaetze(2313, 12, R => { const k = R.p([[1, 0, 0], [0.5, 0, 0], [1, 0, 1], [0.5, 0, 2], [2, 0, 0]]), b = R.p([2, 4]), n = R.p([2, 4]); const d = b / n;
      let U = 0, O = 0; for (let i = 0; i < n; i++){ U += d * pW(k, i * d); O += d * pW(k, (i + 1) * d); }
      return [{k, b, n, LU:rd(U), LO:rd(O), LI:rd(pI(k, 0, b))}]; })),
    wahl:[{id:'w', t:'Mit mehr Rechtecken', opts:['nähern sich Unter- und Obersumme dem Integral', 'wird die Untersumme größer als die Obersumme', 'bleiben beide Werte gleich'], r:'0'}],
    hinweise:['Die Funktion steigt auf dem Intervall: links = kleinster, rechts = größter Wert im Streifen.', 'Untersumme ≤ Integral ≤ Obersumme.'],
    merke:'Das bestimmte Integral ist der Grenzwert der Unter- und Obersummen für immer feinere Zerlegungen.'}),
  blBau('rechnung', {id:'IB5', modul:'IB', stufe:3, titel:'Obere Grenze gesucht', tags:T.concat(['Integral', 'Grenze bestimmen']), kopf:'Grenze',
    text:W => { const w = W[0]; return `Für welche obere Grenze u > 0 gilt ${integ(0, 'u', maPoly([w.a, 0, 0]))} = ${maZ(w.A)}? Bestimme außerdem u für ${integ(0, 'u', maPoly([w.m, w.n]))} = ${maZ(w.B)}.`.replace('<sup>u</sup>', '<sup>u</sup>'); },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'A', 'm', 'n', 'B', 'L1', 'L2').concat([
      {id:'u1', t:'u (erste Gleichung)', e:'ma', f:'L1', weg:w => `${maZ(w.a / 3)}·u³ = ${maZ(w.A)} ⇒ u = ∛(${maZ(3 * w.A / w.a)}) ≈ [u1]`},
      {id:'u2', t:'u (zweite Gleichung)', e:'ma', f:'L2', weg:w => `${maZ(w.m / 2)}u² ${maVz(w.n)}u = ${maZ(w.B)} ⇒ positive Lösung u ≈ [u2]`}]),
    ...maMit(maSaetze(2315, 12, R => { const a = R.p([3, 6, 1.5, 0.75]), A = R.p([8, 9, 24, 27, 64, 4]), m = R.p([2, 4, 1]), n = R.g(1, 4), B = R.p([6, 10, 12, 20]);
      const L1 = Math.cbrt(3 * A / a), p = m / 2, L2 = (-n + Math.sqrt(n * n + 4 * p * B)) / (2 * p); return [{a, A, m, n, B, L1:rd(L1), L2:rd(L2)}]; })),
    hinweise:['Integral mit der Variablen u als obere Grenze ausrechnen.', 'Entstehende Gleichung nach u auflösen; nur positive Lösung.'],
    merke:'Gesuchte Grenze: ' + maI('0', 'u') + ' f(x) dx = F(u) − F(0) aufstellen und die Gleichung nach u lösen.'}),
  {
    id:'IB4', modul:'IB', typ:'berechnung', mehrfach:true, stufe:0, titel:'Das bestimmte Integral deuten',
    tags:T.concat(['Theorie', 'Integral']),
    text:'Gegeben ist eine stetige Funktion f auf [a; b].',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Liegt das Schaubild von f über der x-Achse, ist ' + maI('a', 'b') + ' f(x) dx der Flächeninhalt zwischen Schaubild und x-Achse.', richtig:true, weg:'Flächeninhalt'},
      {text:'Flächenstücke unterhalb der x-Achse gehen negativ in das Integral ein.', richtig:true, weg:'orientierter Flächeninhalt'},
      {text:'Ist f eine Änderungsrate, gibt ' + maI('a', 'b') + ' f(x) dx die Gesamtänderung des Bestands von a bis b an.', richtig:true, weg:'Bestandsrekonstruktion'},
      {text:maI('a', 'b') + ' f(x) dx = F(b) − F(a) für jede Stammfunktion F von f.', richtig:true, weg:'Hauptsatz'},
      {text:'Das Integral ist immer positiv.', fehler:'Es kann negativ oder null sein.'},
      {text:'Hat f zwischen a und b eine Nullstelle, ist das Integral automatisch der Flächeninhalt.', fehler:'Dann an der Nullstelle teilen und Beträge addieren.'}
    ],
    hinweise:['Integral = orientierte Fläche; Flächeninhalt = Summe der Beträge der Teilintegrale.'],
    merke:'Bestimmtes Integral: Flächenbilanz (oben +, unten −), Gesamtänderung bei Änderungsraten, berechnet mit F(b) − F(a).'
  },

  /* ======================= IF · Flächeninhalte ======================= */
  blBau('rechnung', {id:'IF1', modul:'IF', stufe:1, titel:'Fläche zwischen Parabel und x-Achse', tags:T.concat(['Flächeninhalt', 'Nullstellen']), kopf:'Fläche',
    text:W => { const w = W[0]; return `Das Schaubild von ${maF('f', maPoly(w.k))} schließt mit der x-Achse eine Fläche ein.%%GRAFIK%%Bestimme die Nullstellen und den Flächeninhalt (auf zwei Nachkommastellen).`; },
    grafik:W => { const w = W[0], f = x => pW(w.k, x); return maGraf([{f, name:'f'}], maBereich(f, w.p - 1, w.q + 1)); },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'p', 'q', 'LA').concat([
      {id:'x1', t:'linke Nullstelle', e:'ma', f:'p', weg:w => `f(x) = 0 ⇒ x₁ = [x1]`},
      {id:'x2', t:'rechte Nullstelle', e:'ma', f:'q', weg:w => `x₂ = [x2]`},
      {id:'A', t:'Flächeninhalt', e:'FE', f:'LA', weg:w => `A = |${maI(maZ(w.p), maZ(w.q))} f(x) dx|; F(x) = ${bruch(pS(w.k))}; A = [A]`}]),
    ...maMit(maSaetze(2321, 12, R => { const a = R.p([-1, -0.5, -2, 1, 0.5]), p = R.g(-3, 1), q = p + R.p([2, 3, 4]);
      const k = [a, -a * (p + q), a * p * q]; return [{k, p, q, LA:rd(Math.abs(pI(k, p, q)))}]; })),
    hinweise:['Integrationsgrenzen = Nullstellen.', 'Liegt die Fläche unter der x-Achse, den Betrag nehmen.'],
    merke:'Fläche zwischen Schaubild und x-Achse: Nullstellen als Grenzen, A = |' + maI('a', 'b') + ' f(x) dx|.'}),
  blBau('rechnung', {id:'IF2', modul:'IF', stufe:2, titel:'Mehrteilige Fläche', tags:T.concat(['Flächeninhalt', 'Nullstellen']), kopf:'Fläche',
    text:W => { const w = W[0]; return `Das Schaubild von ${maF('f', maPoly(w.k))} schließt mit der x-Achse zwei Flächenstücke ein (Nullstellen ${maZ(w.r1)}, ${maZ(w.r2)} und ${maZ(w.r3)}).%%GRAFIK%%Berechne die beiden Teilflächen und den gesamten Flächeninhalt.`; },
    grafik:W => { const w = W[0], f = x => pW(w.k, x); return maGraf([{f, name:'f'}], maBereich(f, w.r1 - 0.8, w.r3 + 0.8, w.r1, w.r3)); },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'r1', 'r2', 'r3', 'L1', 'L2').concat([
      {id:'A1', t:'Teilfläche links', e:'FE', f:'L1', weg:w => `F(x) = ${bruch(pS(w.k))}; A₁ = |F(${maZ(w.r2)}) − F(${maZ(w.r1)})| = [A1]`},
      {id:'A2', t:'Teilfläche rechts', e:'FE', f:'L2', weg:w => `A₂ = |F(${maZ(w.r3)}) − F(${maZ(w.r2)})| = [A2]`},
      {id:'A', t:'Gesamtfläche', e:'FE', f:'A1 + A2', weg:w => `A = ${maZ(w.L1)} + ${maZ(w.L2)} = [A]`}]),
    ...maMit(maSaetze(2322, 12, R => { const a = R.p([1, -1, 0.5, -0.5]), r1 = R.g(-3, -1), r2 = r1 + R.p([1, 2, 3]), r3 = r2 + R.p([1, 2, 3]);
      const k = [a, -a * (r1 + r2 + r3), a * (r1 * r2 + r1 * r3 + r2 * r3), -a * r1 * r2 * r3];
      return [{k, r1, r2, r3, L1:rd(Math.abs(pI(k, r1, r2))), L2:rd(Math.abs(pI(k, r2, r3)))}]; })),
    wahl:[{id:'w', t:'Warum darf man nicht einfach von der ersten bis zur letzten Nullstelle integrieren?', opts:['Flächen unter der x-Achse zählen im Integral negativ – sie würden sich teilweise aufheben.', 'Weil das Integral sonst zu groß wird.', 'Weil man nur über positive x integrieren darf.'], r:'0'}],
    hinweise:['An jeder Nullstelle teilen.', 'Teilintegrale einzeln berechnen und die Beträge addieren.'],
    merke:'Mehrteilige Flächen: an den Nullstellen aufteilen, A = |' + maI('x₁', 'x₂') + ' f dx| + |' + maI('x₂', 'x₃') + ' f dx|.'}),
  blBau('rechnung', {id:'IF3', modul:'IF', stufe:2, titel:'Fläche zwischen Parabel und Gerade', tags:T.concat(['Flächeninhalt', 'Schnittpunkte', 'Fläche zwischen zwei Kurven']), kopf:'Fläche',
    text:W => { const w = W[0]; return `Die Schaubilder von ${maF('f', maPoly(w.f))} und ${maF('g', maPoly(w.g))} schließen eine Fläche ein.%%GRAFIK%%Bestimme die Schnittstellen und den Flächeninhalt.`; },
    grafik:W => { const w = W[0], f = x => pW(w.f, x), g = x => pW(w.g, x); return maGraf([{f, name:'f'}, {f:g, name:'g'}], maBereich(f, w.p - 1, w.q + 1, w.p - 0.5, w.q + 0.5)); },
    spalten:['Ergebnis'],
    zeilen:maAus('f', 'g', 'p', 'q', 'LA').concat([
      {id:'x1', t:'linke Schnittstelle', e:'ma', f:'p', weg:w => `f(x) = g(x) ⇔ ${maPoly(w.f.map((v, i) => v - (w.g[i - (w.f.length - w.g.length)] || 0)))} = 0 ⇒ x₁ = [x1]`},
      {id:'x2', t:'rechte Schnittstelle', e:'ma', f:'q', weg:w => `x₂ = [x2]`},
      {id:'A', t:'Flächeninhalt', e:'FE', f:'LA', weg:w => `A = |${maI(maZ(w.p), maZ(w.q))} (f(x) − g(x)) dx| = [A]`}]),
    ...maMit(maSaetze(2323, 12, R => { const a = R.p([-1, 1, -0.5, 0.5]), p = R.g(-3, 0), q = p + R.p([2, 3, 4]), m = R.g(-2, 2), n = R.g(-2, 3);
      const d = [a, -a * (p + q), a * p * q], f = [d[0], d[1] + m, d[2] + n], g = [m, n]; return [{f, g, p, q, LA:rd(Math.abs(pI(d, p, q)))}]; })),
    hinweise:['Schnittstellen: f(x) = g(x).', 'Differenzfunktion d(x) = f(x) − g(x) zwischen den Schnittstellen integrieren.'],
    merke:'Fläche zwischen zwei Kurven: A = |' + maI('a', 'b') + ' (f(x) − g(x)) dx| mit den Schnittstellen a, b als Grenzen.'}),
  blBau('rechnung', {id:'IF4', modul:'IF', stufe:3, titel:'Fläche zwischen e-Funktion und Gerade', tags:T.concat(['Flächeninhalt', 'Exponentialfunktion']), kopf:'Fläche',
    text:W => { const w = W[0]; return `Gegeben sind ${maF('f', maExp(w.a, w.k, w.b))} und die Gerade y = ${maZ(w.b)} (Asymptote von f).<br>a) Berechne den Inhalt der Fläche zwischen dem Schaubild, der Asymptote und den Geraden x = 0 und x = ${maZ(w.u)}.<br>b) Gegen welchen Wert strebt dieser Inhalt, wenn die rechte Grenze immer weiter nach rechts wandert?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'k', 'b', 'u', 'L1', 'L2').concat([
      {id:'A', t:'Flächeninhalt bis x = u', e:'FE', f:'L1', weg:w => `A = ${maI('0', maZ(w.u))} ${maExp(w.a, w.k, 0)} dx = ${maKl(maZ(w.a / w.k) + '·e<sup>' + maZ(w.k) + 'x</sup>', '0', maZ(w.u))} ≈ [A]`},
      {id:'G', t:'Grenzwert für u → ∞', e:'FE', f:'L2', weg:w => `e<sup>${maZ(w.k)}u</sup> → 0, also A → ${maZ(w.a)} ÷ ${maZ(-w.k)} = [G]`}]),
    ...maMit(maSaetze(2324, 12, R => { const a = R.p([2, 3, 4, 6]), k = R.p([-0.5, -1, -2, -0.25]), b = R.g(-2, 3), u = R.p([2, 3, 4, 5]);
      return [{a, k, b, u, L1:rd(a / -k * (1 - Math.exp(k * u))), L2:rd(a / -k)}]; })),
    hinweise:['Die Differenz zur Asymptote ist a·e<sup>kx</sup>.', 'Für k < 0 geht e<sup>ku</sup> gegen 0.'],
    merke:'Fläche bis zur Asymptote: ' + maI('0', 'u') + ' a·e<sup>kx</sup> dx = (a/k)(e<sup>ku</sup> − 1); für k < 0 und u → ∞ Grenzwert −a/k.'}),

  /* ======================= IR · Bestandsrekonstruktion ======================= */
  blBau('rechnung', {id:'IR1', modul:'IR', stufe:2, titel:'Wasser im Becken', tags:T.concat(['Bestandsrekonstruktion', 'Änderungsrate']), kopf:'Bestand',
    text:W => { const w = W[0]; return `In ein Becken mit anfangs ${maZ(w.B0)} m³ Wasser fließt Wasser mit der Zuflussrate ${maF('r', maPoly(w.k, 't'), 't')} (t in Stunden, r in m³ pro Stunde; negative Werte = Abfluss).<br>a) Wie viel Wasser fließt in den ersten ${maZ(w.t1)} Stunden zu?<br>b) Wie viel Wasser ist nach ${maZ(w.t1)} Stunden im Becken?<br>c) Zu welchem Zeitpunkt ist am meisten Wasser im Becken?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'B0', 't1', 'LZ', 'Lm').concat([
      {id:'Z', t:'Zufluss in den ersten Stunden', e:'m³', f:'LZ', weg:w => `${maI('0', maZ(w.t1))} r(t) dt = ${maKl(bruch(pS(w.k), 't'), '0', maZ(w.t1))} = [Z]`},
      {id:'B', t:'Wassermenge nach t₁', e:'m³', f:'B0 + Z', weg:w => `${maZ(w.B0)} + ${maK(w.LZ)} = [B]`},
      {id:'tm', t:'Zeitpunkt der größten Wassermenge', e:'h', f:'Lm', weg:w => `größter Bestand, wenn r(t) von + nach − wechselt: r(t) = 0 ⇒ t = [tm]`}]),
    ...maMit(maSaetze(2331, 12, R => { const a = R.p([-1, -2, -0.5]), tm = R.p([4, 5, 6, 8]), k = [a, -a * tm], B0 = R.p([50, 80, 100, 120]), t1 = R.p([2, 3, 4, 10]);
      return [{k, B0, t1, LZ:rd(pI(k, 0, t1)), Lm:tm}]; })),
    hinweise:['Gesamtänderung = Integral der Änderungsrate.', 'Bestand = Anfangsbestand + Gesamtänderung.', 'Der Bestand ist maximal, wenn die Änderungsrate das Vorzeichen von + nach − wechselt.'],
    merke:'Bestand B(t) = B(0) + ' + maI('0', 't') + ' r(s) ds; Maximum des Bestands dort, wo die Änderungsrate von positiv nach negativ wechselt.'}),
  blBau('rechnung', {id:'IR2', modul:'IR', stufe:3, titel:'Kostenfunktion aus den Grenzkosten', tags:T.concat(['Bestandsrekonstruktion', 'Grenzkosten', 'Kostenfunktion']), kopf:'Kosten',
    text:W => { const w = W[0]; return `Für ein Produkt sind die Grenzkosten ${maF("K′", maPoly(w.g))} (x in Stück, Beträge in €) und die Fixkosten ${maZ(w.F)} € bekannt.<br>a) Bestimme die Kostenfunktion K(x).<br>b) Berechne die Gesamtkosten bei ${w.x1} Stück.<br>c) Um wie viel steigen die Kosten, wenn die Produktion von ${w.x1} auf ${w.x2} Stück erhöht wird?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('g', 'F', 'x1', 'x2', 'L1', 'L2').concat([
      {id:'K1', t:'K(x₁)', e:'€', f:'L1', weg:w => `K(x) = ${bruch(pS(w.g).slice(0, -1).concat([w.F]))}; K(${w.x1}) = [K1]`},
      {id:'D', t:'Kostenanstieg', e:'€', f:'L2', weg:w => `${maI(w.x1, w.x2)} K′(x) dx = K(${w.x2}) − K(${w.x1}) = [D]`}]),
    ...maMit(maSaetze(2332, 12, R => { const a = R.p([0.03, 0.06, 0.09]), xw = R.p([10, 20]), c = R.p([20, 30, 40]); const g = [a, rd(-2 * a * xw), c]; if (pW(g, xw) <= 0) return null;
      const F = R.p([300, 500, 800]), x1 = R.p([10, 20, 30]), x2 = x1 + R.p([5, 10]); const K = pS(g).slice(0, -1).concat([F]);
      return [{g, F, x1, x2, L1:rd(pW(K, x1)), L2:rd(pW(K, x2) - pW(K, x1))}]; })),
    hinweise:['K ist eine Stammfunktion der Grenzkosten; die Konstante sind die Fixkosten.', 'Kostenänderung = Integral der Grenzkosten.'],
    merke:'K(x) = ∫ K′(x) dx + Fixkosten; K(x₂) − K(x₁) = ' + maI('x₁', 'x₂') + ' K′(x) dx.'}),
  blBau('rechnung', {id:'IR3', modul:'IR', stufe:1, titel:'Gesamtänderung aus dem Schaubild der Rate', tags:T.concat(['Bestandsrekonstruktion', 'Schaubild']), kopf:'Ablesen',
    text:W => { const w = W[0]; return `Das Schaubild zeigt die Produktionsrate p(t) einer Anlage (t in Stunden, p in Stück pro Stunde).%%GRAFIK%%Bestimme über die Fläche unter dem Schaubild, wie viele Stück in den ersten ${w.t1} Stunden und insgesamt in ${w.t2} Stunden hergestellt werden.`; },
    grafik:W => { const w = W[0], f = x => x <= w.t1 ? w.h * x / w.t1 : w.h; return maGraf([{f, name:'p'}], {x0:0, x1:w.t2, y0:0, y1:w.h + 20, xs:1, ys:10}); },
    spalten:['Ergebnis'],
    zeilen:maAus('h', 't1', 't2').concat([
      {id:'s1', t:'Stück in den ersten t₁ Stunden', e:'Stück', f:'h * t1 / 2', weg:w => `Dreieck: ½ · ${w.t1} · ${w.h} = [s1]`},
      {id:'s2', t:'Stück insgesamt', e:'Stück', f:'s1 + h * (t2 - t1)', weg:w => `${maZ(w.h * w.t1 / 2)} + ${w.h} · (${w.t2} − ${w.t1}) = [s2]`}]),
    ...maMit(maSaetze(2333, 12, R => [{h:R.p([40, 60, 80, 50]), t1:R.p([2, 3, 4]), t2:R.p([6, 8])}])),
    hinweise:['Die Fläche unter der Rate ist die hergestellte Menge.', 'Fläche in Dreieck und Rechteck zerlegen.'],
    merke:'Fläche unter dem Schaubild einer Änderungsrate = Gesamtänderung (hier: hergestellte Stückzahl).'}),

  /* ======================= FT · Funktionsterme aus Eigenschaften ======================= */
  blBau('rechnung', {id:'FT1', modul:'FT', stufe:1, titel:'Parabel aus Scheitel und Punkt', tags:T.concat(['Funktionsbestimmung', 'Parabel']), kopf:'f(x) = a·x² + b·x + c',
    text:W => { const w = W[0]; return `Eine Parabel hat den Scheitel S(${maZ(w.d)} | ${maZ(w.e)}) und geht durch P(${maZ(w.px)} | ${maZ(w.py)}). Bestimme a, b und c.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('d', 'e', 'px', 'py', 'La').concat([
      {id:'a', t:'a', e:'ma', f:'La', weg:w => `f(x) = a(x ${maVz(-w.d)})² ${maVz(w.e)}; P einsetzen: ${maZ(w.py)} = a · ${maZ((w.px - w.d) ** 2)} ${maVz(w.e)} ⇒ a = [a]`},
      {id:'b', t:'b', e:'ma', f:'-2 * a * d', weg:w => `ausmultiplizieren: b = −2a · ${maK(w.d)} = [b]`},
      {id:'c', t:'c', e:'ma', f:'a * d * d + e', weg:w => `c = a · ${maK(w.d)}² + ${maK(w.e)} = [c]`}]),
    ...maMit(maSaetze(2341, 12, R => { const a = R.p([1, -1, 2, -2, 0.5, -0.5]), d = R.g(-3, 3), e = R.g(-4, 4), px = d + R.p([1, 2, -1, -2]); if (!d || !e) return null; return [{d, e, px, py:a * (px - d) ** 2 + e, La:a}]; })),
    hinweise:['Scheitelform f(x) = a(x − d)² + e verwenden.', 'P einsetzen, a bestimmen, dann ausmultiplizieren.'],
    merke:'Parabel aus Scheitel S(d | e) und Punkt: Scheitelform, Punkt einsetzen → a; Normalform über Ausmultiplizieren.'}),
  blBau('rechnung', {id:'FT2', modul:'FT', stufe:2, titel:'Polynom 3. Grades aus Extrem- und Wendepunkt', tags:T.concat(['Funktionsbestimmung', 'Steckbrief', 'LGS']), kopf:'f(x) = a·x³ + b·x² + c·x + d',
    text:W => { const w = W[0]; return `Das Schaubild eines Polynoms 3. Grades geht durch den Ursprung, hat bei x = ${maZ(w.xe)} eine waagrechte Tangente und den Wendepunkt W(${maZ(w.xw)} | ${maZ(w.yw)}). Stelle die Bedingungen auf und bestimme a, b, c und d.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('xe', 'xw', 'yw', 'La', 'Lb', 'Lc').concat([
      {id:'d', t:'d', e:'ma', f:'0', weg:w => `f(0) = 0 ⇒ d = [d]`},
      {id:'a', t:'a', e:'ma', f:'La', weg:w => `f″(${maZ(w.xw)}) = 0: 6a·${maK(w.xw)} + 2b = 0; f′(${maZ(w.xe)}) = 0: 3a·${maK(w.xe)}² + 2b·${maK(w.xe)} + c = 0; f(${maZ(w.xw)}) = ${maZ(w.yw)} ⇒ LGS lösen: a = [a]`},
      {id:'b', t:'b', e:'ma', f:'Lb', weg:w => `b = −3a · ${maK(w.xw)} = [b]`},
      {id:'c', t:'c', e:'ma', f:'Lc', weg:w => `c = [c]`}]),
    ...maMit(maSaetze(2342, 12, R => { const a = R.p([1, -1, 0.5, -0.5, 2]), xw = R.p([1, 2, -1]), xe = xw + R.p([1, 2, -1, -2]); if (xe === 0) return null;
      const b = -3 * a * xw, c = -(3 * a * xe * xe + 2 * b * xe), k = [a, b, c, 0];
      return [{xe, xw, yw:rd(pW(k, xw)), La:a, Lb:rd(b), Lc:rd(c)}]; })),
    hinweise:['Je Eigenschaft eine Gleichung: Punkt → f(x) = y; waagrechte Tangente → f′(x) = 0; Wendepunkt → f″(x) = 0 und f(x) = y.', 'Vier Unbekannte, vier Bedingungen.'],
    merke:'Steckbriefaufgabe: Eigenschaften in Gleichungen für f, f′, f″ übersetzen und das LGS lösen; Probe mit dem Schaubild.'}),
  blBau('rechnung', {id:'FT3', modul:'FT', stufe:3, titel:'Achsensymmetrisches Polynom 4. Grades', tags:T.concat(['Funktionsbestimmung', 'Symmetrie']), kopf:'f(x) = a·x⁴ + b·x² + c',
    text:W => { const w = W[0]; return `Das Schaubild einer zur y-Achse symmetrischen Funktion f(x) = ax⁴ + bx² + c schneidet die y-Achse bei ${maZ(w.c0)} und hat im Punkt T(${maZ(w.x0)} | ${maZ(w.y0)}) einen Tiefpunkt. Bestimme a, b und c.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('c0', 'x0', 'y0', 'La', 'Lb').concat([
      {id:'c', t:'c', e:'ma', f:'c0', weg:w => `f(0) = c = [c]`},
      {id:'a', t:'a', e:'ma', f:'La', weg:w => `f′(${maZ(w.x0)}) = 4a·${maZ(w.x0)}³ + 2b·${maZ(w.x0)} = 0 ⇒ b = −2a·${maZ(w.x0 * w.x0)}; f(${maZ(w.x0)}) = ${maZ(w.y0)} ⇒ a = [a]`},
      {id:'b', t:'b', e:'ma', f:'Lb', weg:w => `b = [b]`}]),
    ...maMit(maSaetze(2343, 12, R => { const a = R.p([0.25, 0.5, 1, 2]), x0 = R.p([1, 2, 3]), c = R.g(1, 6), b = -2 * a * x0 * x0; const y0 = a * x0 ** 4 + b * x0 * x0 + c;
      return [{c0:c, x0, y0, La:a, Lb:b}]; })),
    hinweise:['Symmetrie zur y-Achse: nur gerade Potenzen.', 'Tiefpunkt: f(x₀) = y₀ und f′(x₀) = 0.'],
    merke:'Symmetrie reduziert die Unbekannten: zur y-Achse nur gerade, zum Ursprung nur ungerade Potenzen.'}),
  blBau('rechnung', {id:'FT4', modul:'FT', stufe:2, titel:'Exponentialfunktion aus zwei Bedingungen', tags:T.concat(['Funktionsbestimmung', 'Exponentialfunktion']), kopf:'f(x) = a·e<sup>kx</sup>',
    text:W => { const w = W[0]; return `Das Schaubild von f(x) = a·e<sup>kx</sup> geht durch P(0 | ${maZ(w.a0)}) und Q(${maZ(w.x1)} | ${maZ(w.y1)}). Bestimme a und k (k auf vier Nachkommastellen genau rechnen, auf zwei angeben).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a0', 'x1', 'y1', 'Lk').concat([
      {id:'a', t:'a', e:'ma', f:'a0', weg:w => `f(0) = a = [a]`},
      {id:'k', t:'k', e:'ma', f:'Lk', weg:w => `${maZ(w.a0)}·e<sup>${maZ(w.x1)}k</sup> = ${maZ(w.y1)} ⇒ k = ln(${maZ(w.y1)} ÷ ${maZ(w.a0)}) ÷ ${maZ(w.x1)} ≈ [k]`}].map((z, i) => i === 0 ? z : z)).concat([]),
    ...maMit(maSaetze(2344, 12, R => { const a = R.p([2, 5, 10, 100, 50]), x1 = R.p([2, 3, 4, 5]), q = R.p([2, 3, 0.5, 4, 0.25]); return [{a0:a, x1, y1:rd(a * q), Lk:rd(Math.log(q) / x1)}]; })),
    hinweise:['P liefert direkt a.', 'Q einsetzen, durch a teilen, logarithmieren.'],
    merke:'a·e<sup>kx</sup>: a = f(0); k = ln(f(x₁) ÷ a) ÷ x₁.'}),
  blBau('rechnung', {id:'FT5', modul:'FT', stufe:3, titel:'Funktion a·sin(2x) + b·x', tags:T.concat(['Funktionsbestimmung', 'Trigonometrie']), kopf:'f(x) = a·sin(2x) + b·x',
    text:W => { const w = W[0]; return `Das Schaubild von f(x) = a·sin(2x) + b·x geht durch den Punkt P(π/4 | ${maZ(w.yp)}) und hat im Ursprung die Steigung ${maZ(w.m0)}. Bestimme a und b (auf zwei Nachkommastellen).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('yp', 'm0', 'La', 'Lb').concat([
      {id:'a', t:'a', e:'ma', f:'La', weg:w => `f′(x) = 2a·cos(2x) + b; f′(0) = 2a + b = ${maZ(w.m0)}; f(π/4) = a + b·π/4 = ${maZ(w.yp)} ⇒ a ≈ [a]`},
      {id:'b', t:'b', e:'ma', f:'Lb', weg:w => `b = ${maZ(w.m0)} − 2a ≈ [b]`}]),
    ...maMit(maSaetze(2345, 12, R => { const a = R.p([1, 2, -1, 3, 0.5]), b = R.p([1, -1, 2, 0.5, -2]); return [{yp:rd(a + b * Math.PI / 4), m0:2 * a + b, La:a, Lb:b}]; })),
    hinweise:['Zwei Bedingungen: Punkt → f(π/4); Steigung im Ursprung → f′(0).', 'sin(π/2) = 1, cos(0) = 1.'],
    merke:'Auch bei trigonometrischen Ansätzen: Bedingungen für f und f′ aufstellen und das LGS lösen.'}),

  /* ======================= AP · Prüfungstraining Analysis ======================= */
  blBau('rechnung', {id:'AP1', modul:'AP', stufe:3, titel:'Kurvenuntersuchung mit Fläche', tags:T.concat(['Prüfungstraining', 'Extrempunkte', 'Wendepunkt', 'Flächeninhalt']), kopf:'Lösungen',
    text:W => { const w = W[0]; return `Gegeben ist ${maF('f', maPoly(w.k))}.<br>a) Bestimme die Nullstellen von f (kleinste zuerst).<br>b) Bestimme die Extrempunkte (x-Werte; kleinerer zuerst).<br>c) Bestimme den Wendepunkt.<br>d) Berechne den Inhalt der Fläche, die das Schaubild im Intervall zwischen der ersten und zweiten Nullstelle mit der x-Achse einschließt.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'P', 'Q', 'E1', 'E2', 'Lyw', 'LA').concat([
      {id:'n1', t:'Nullstelle 1', e:'ma', f:'P', weg:w => `${maPoly(w.k)} = 0 ⇔ x·(${maPoly(w.k.slice(0, 3))}) = 0 ⇒ x = [n1]`},
      {id:'n2', t:'Nullstelle 2', e:'ma', f:'0', weg:w => `x = [n2]`},
      {id:'n3', t:'Nullstelle 3', e:'ma', f:'Q', weg:w => `x = [n3]`},
      {id:'e1', t:'Extremstelle 1', e:'ma', f:'E1', weg:w => `f′(x) = ${maPoly(pD(w.k))} = 0 ⇒ x ≈ [e1]`},
      {id:'e2', t:'Extremstelle 2', e:'ma', f:'E2', weg:w => `x ≈ [e2]`},
      {id:'xw', t:'x-Wert des Wendepunkts', e:'ma', f:'(e1 + e2) / 2', weg:w => `f″(x) = ${maPoly(pD(pD(w.k)))} = 0 ⇒ x<sub>W</sub> = [xw]`},
      {id:'yw', t:'y-Wert des Wendepunkts', e:'ma', f:'Lyw', weg:w => `f(x<sub>W</sub>) ≈ [yw]`},
      {id:'A', t:'Flächeninhalt', e:'FE', f:'LA', weg:w => `A = |${maI(maZ(w.P), '0')} f(x) dx| = [A]`}]),
    ...maMit(maSaetze(2351, 12, R => { const a = R.p([1, -1, 0.5, -0.5]), p = R.g(-4, -1), q = R.g(1, 4); const k = [a, -a * (p + q), a * p * q, 0];
      const d = pD(k), D = d[1] * d[1] - 4 * d[0] * d[2]; if (D <= 0) return null; const r1 = (-d[1] - Math.sqrt(D)) / (2 * d[0]), r2 = (-d[1] + Math.sqrt(D)) / (2 * d[0]);
      const e1 = rd(Math.min(r1, r2)), e2 = rd(Math.max(r1, r2)); if (Math.abs((e1 + e2) / 2 - (p + q) / 3) > 0.011) return null; const xw = (e1 + e2) / 2;
      return [{k, P:p, Q:q, E1:e1, E2:e2, Lyw:rd(pW(k, xw)), LA:rd(Math.abs(pI(k, p, 0)))}]; })),
    hinweise:['x ausklammern, dann die quadratische Gleichung lösen.', 'Wendestelle liegt in der Mitte der Extremstellen (Polynom 3. Grades).', 'Fläche: Nullstellen als Grenzen, Betrag nehmen.'],
    merke:'Kurvenuntersuchung nach Aufgabenstellung: Nullstellen (f = 0), Extremstellen (f′ = 0, f″ ≠ 0), Wendestellen (f″ = 0), Flächen (Integral mit Nullstellen als Grenzen).'}),
  blBau('rechnung', {id:'AP2', modul:'AP', stufe:3, titel:'Umsatz mit saisonaler Schwankung', tags:T.concat(['Prüfungstraining', 'Trigonometrie', 'Integral', 'Anwendung']), kopf:'Lösungen',
    text:W => { const w = W[0]; return `Der monatliche Umsatz eines Eiscafés wird modelliert durch ${maF('u', maTrig(w.a, 'sin', 'π/6 · t', w.b), 't')} (t in Monaten ab 1. März, u in Tausend € pro Monat).<br>a) Wann ist die Umsatzrate am größten, wie hoch ist sie?<br>b) Wie schnell ändert sich die Umsatzrate zum Zeitpunkt t = ${w.t0} (Tausend € pro Monat)?<br>c) Berechne den Gesamtumsatz der ersten ${w.T} Monate mit einem Integral.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 't0', 'T', 'Lm', 'LI').concat([
      {id:'tm', t:'Zeitpunkt größter Umsatzrate', e:'Monate', f:'3', weg:w => `sin(π/6 · t) = 1 ⇒ π/6 · t = π/2 ⇒ t = [tm]`},
      {id:'um', t:'größte Umsatzrate', e:'Tsd. €', f:'a + b', weg:w => `u(3) = ${maZ(w.a)} + ${maZ(w.b)} = [um]`},
      {id:'m', t:'Änderung zum Zeitpunkt t₀', e:'ma', f:'Lm', weg:w => `u′(t) = ${maZ(w.a)} · π/6 · cos(π/6 · t); u′(${w.t0}) ≈ [m]`},
      {id:'I', t:'Gesamtumsatz', e:'Tsd. €', f:'LI', weg:w => `${maI('0', w.T)} u(t) dt = ${maKl('−' + maZ(w.a) + ' · 6/π · cos(π/6 · t) + ' + maZ(w.b) + 't', '0', w.T)} ≈ [I]`}]),
    ...maMit(maSaetze(2352, 12, R => { const a = R.p([10, 15, 20, 12]), b = R.p([25, 30, 40]), t0 = R.p([1, 2, 4, 8]), T = R.p([6, 12, 4]);
      const P = Math.PI / 6; return [{a, b, t0, T, Lm:rd(a * P * Math.cos(P * t0)), LI:rd(-a / P * (Math.cos(P * T) - 1) + b * T)}]; })),
    hinweise:['Maximum des Sinus bei π/2.', 'Ableitung: innere Ableitung π/6.', 'Stammfunktion von sin(π/6 · t): −6/π · cos(π/6 · t).'],
    merke:'Anwendungen: Rate u(t), Änderung der Rate u′(t), Gesamtmenge = ∫ u(t) dt; Einheiten mitdenken.'})
  ]; })(),
/* ---------- Mathematik · Wirtschaftsgymnasium Eingangsklasse (Bildungsplan 2021, Mathematik vierstündig) – Ergänzungen ----------
   ZM Zahlenmengen, Funktionsbegriff und Definitionsbereich (BPE 1.1–1.3) · LF Lineare Funktionen und Ungleichungen (BPE 1.4, 3.4)
   LW Logarithmus und Wachstumsmodelle (BPE 4.5, 4.6) · VG Vektoren: Grundlagen (BPE 7.1, 7.2) · VS Skalarprodukt und Winkel (BPE 7.3).
   Alle Ergebnisse werden vorberechnet (L…-Zeilen). Neu am 06.11.2026. */
...(() => {
  const T = ['Mathematik', 'Wirtschaftsgymnasium'];
  const NR = ['①', '②', '③'];
  const rd = v => { const r = maR(v); return Math.abs(r) < 1e-9 ? 0 : r; };
  const cv = a => `<span class="ma-vek" style="display:inline-block;vertical-align:middle;border-left:1.5px solid currentColor;border-right:1.5px solid currentColor;border-radius:7px;padding:1px 6px;margin:0 2px;line-height:1.25;text-align:center;font-variant-numeric:tabular-nums">${a.map(v => maZ(v)).join('<br>')}</span>`;
  const pt = (n, a) => `${n}(${a.map(v => maZ(v)).join(' | ')})`;
  const vk = n => `<i>${n}</i>&#8407;`;
  const VS = ['x₁', 'x₂', 'x₃'];
  const grad = r => r * 180 / Math.PI;
  const len = a => Math.sqrt(a.reduce((s, v) => s + v * v, 0));
  const dot = (a, b) => a.reduce((s, v, i) => s + v * b[i], 0);
  const vg = (n, k, w) => `|${n}| = √(${w.map(v => maK(v) + '²').join(' + ')}) = [${k}]`;
  return [
  /* ======================= ZM · Zahlenmengen, Funktionsbegriff, Definitionsbereich (BPE 1.1–1.3) ======================= */
  blBau('zuordnung', {id:'ZM1', modul:'ZM', stufe:1, titel:'Zahlenmengen ℕ, ℤ, ℚ und ℝ', tags:T.concat(['Zahlenmengen']),
    text:'Ordne jede Zahl der kleinsten Zahlenmenge zu, zu der sie gehört (ℕ = {0; 1; 2; …}).',
    kategorien:['ℕ', 'ℤ, aber nicht ℕ', 'ℚ, aber nicht ℤ', 'ℝ, aber nicht ℚ (irrational)'], anzahl:8,
    faelle:[
      {t:'7', k:0}, {t:'√16', k:0, weg:'√16 = 4'}, {t:'0', k:0},
      {t:'−3', k:1}, {t:'−√9', k:1, weg:'−√9 = −3'},
      {t:'0,25', k:2, weg:'0,25 = 1/4'}, {t:'−2/3', k:2}, {t:'1/3 = 0,333…', k:2, weg:'periodische Dezimalzahl = Bruch'},
      {t:'√2', k:3}, {t:'π', k:3}, {t:'e', k:3}
    ],
    hinweise:['ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.', 'Rational = als Bruch zweier ganzer Zahlen darstellbar; irrational = unendlicher, nicht periodischer Dezimalbruch.'],
    merke:'ℕ natürliche Zahlen · ℤ ganze Zahlen · ℚ rationale Zahlen (Brüche, abbrechende oder periodische Dezimalzahlen) · ℝ reelle Zahlen (zusätzlich irrationale Zahlen wie √2, π, e) · ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.'}),
  {
    id:'ZM2', modul:'ZM', typ:'berechnung', mehrfach:true, stufe:1, titel:'Ungleichungen und Intervalle',
    tags:T.concat(['Intervalle', 'Ungleichungen']),
    text:'Teilmengen der reellen Zahlen lassen sich mit Ungleichungen oder in Intervallschreibweise angeben. Eine nach außen geöffnete Klammer bedeutet: Die Grenze gehört nicht dazu.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'−1 < x ≤ 3 entspricht x ∈ ]−1; 3].', richtig:true},
      {text:'x ≥ 2 entspricht x ∈ [2; ∞[.', richtig:true, weg:'bei ∞ ist die Klammer immer offen'},
      {text:'x < 5 entspricht x ∈ ]−∞; 5].', fehler:'5 gehört nicht dazu: x ∈ ]−∞; 5[.'},
      {text:'Das Intervall [−2; 2] enthält genau fünf ganze Zahlen.', richtig:true, weg:'−2; −1; 0; 1; 2'},
      {text:'ℝ \\ {0} enthält alle reellen Zahlen außer der Null.', richtig:true},
      {text:'Jede rationale Zahl ist auch eine ganze Zahl.', fehler:'Umgekehrt: Jede ganze Zahl ist rational (ℤ ⊂ ℚ), aber z. B. 1/2 ist nicht ganz.'}
    ],
    hinweise:['[ bzw. ] nach innen: Grenze gehört dazu · ] bzw. [ nach außen: Grenze gehört nicht dazu.'],
    merke:'Intervalle: [a; b] abgeschlossen, ]a; b[ offen, [a; b[ bzw. ]a; b] halboffen · bei ±∞ immer offen · Mengen: ℝ \\ {a} ohne a.'
  },
  blBau('rechnung', {id:'ZM3', modul:'ZM', stufe:2, titel:'Definitionslücke, Asymptoten und Funktionswerte', tags:T.concat(['Definitionsbereich', 'Definitionslücke', 'Asymptote']), kopf:'Gebrochene Funktion',
    text:W => { const w = W[0]; return `Gegeben ist <i>f</i>(x) = ${maZ(w.a)} ÷ (x ${maVz(-w.b)}) ${maVz(w.c)}.<br>a) Gib die Definitionslücke und die Gleichung der waagerechten Asymptote an.<br>b) Berechne f(${maZ(w.x1)}).<br>c) Für welches x gilt f(x) = ${maZ(w.y0)}?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'c', 'x1', 'y0', 'Lf', 'Lx').concat([
      {id:'dl', t:'Definitionslücke x₀', e:'ma', f:'b', weg:w => `Nenner x ${maVz(-w.b)} = 0 ⇒ x₀ = [dl]; D = ℝ \\ {${maZ(w.b)}}`},
      {id:'as', t:'waagerechte Asymptote y =', e:'ma', f:'c', weg:w => `für x → ±∞ geht ${maZ(w.a)} ÷ (x ${maVz(-w.b)}) → 0 ⇒ y = [as]`},
      {id:'fx', t:'f(x₁)', e:'ma', f:'Lf', weg:w => `${maZ(w.a)} ÷ (${maZ(w.x1)} ${maVz(-w.b)}) ${maVz(w.c)} = [fx]`},
      {id:'xl', t:'x mit f(x) = y₀', e:'ma', f:'Lx', weg:w => `${maZ(w.a)} ÷ (x ${maVz(-w.b)}) = ${maZ(w.y0)} ${maVz(-w.c)} = ${maZ(w.y0 - w.c)} ⇒ x ${maVz(-w.b)} = ${maZ(w.a)} ÷ ${maK(w.y0 - w.c)} ⇒ x = [xl]`}]),
    ...maMit(maSaetze(9101, 12, R => { const a = R.p([1, 2, 3, 4, -2, -4, 6]), b = R.g(-3, 3), c = R.g(-2, 3), x1 = b + R.p([1, 2, -1, -2, 4]), q = R.p([1, 2, -1, -2, 4, -4]);
      if (a % q) return null; const y0 = c + q; return [{a, b, c, x1, y0, Lf:rd(a / (x1 - b) + c), Lx:rd(b + a / q)}]; })),
    hinweise:['Definitionslücke: Nenner = 0.', 'Für große |x| wird der Bruch fast 0 – übrig bleibt die Konstante.'],
    merke:'Definitionslücke: Nullstelle des Nenners (senkrechte Asymptote) · f(x) = a ÷ (x − b) + c: senkrechte Asymptote x = b, waagerechte Asymptote y = c · D = ℝ \\ {b}, W = ℝ \\ {c}.'}),
  blBau('zuordnung', {id:'ZM4', modul:'ZM', stufe:2, titel:'Eindeutige Zuordnung – Funktion oder nicht?', tags:T.concat(['Funktionsbegriff', 'Zuordnung']),
    text:'Ist die Zuordnung eindeutig, also eine Funktion?',
    kategorien:['Funktion (eindeutig)', 'keine Funktion (nicht eindeutig)'], anzahl:8,
    faelle:[
      {t:'Jedem Kreisradius r wird die Kreisfläche zugeordnet.', k:0}, {t:'Jeder Schülerin wird ihr Geburtsdatum zugeordnet.', k:0},
      {t:'Jedem Zeitpunkt wird die Temperatur an einer Messstation zugeordnet.', k:0}, {t:'Jeder reellen Zahl x wird x² zugeordnet.', k:0},
      {t:'Jeder Produktionsmenge werden ihre Gesamtkosten zugeordnet.', k:0},
      {t:'Jeder positiven Zahl werden ihre beiden Quadratwurzeln zugeordnet.', k:1, weg:'zu 4 gehören 2 und −2'},
      {t:'Jedem Geburtsdatum werden die Schüler der Klasse zugeordnet, die an diesem Tag Geburtstag haben.', k:1},
      {t:'die Gerade mit der Gleichung x = 2', k:1, weg:'Parallele zur y-Achse: zu x = 2 gehören unendlich viele y'},
      {t:'der Kreis mit x² + y² = 4', k:1}
    ],
    hinweise:['Eine Funktion ordnet jedem x genau ein y zu.'],
    merke:'Funktion = eindeutige Zuordnung: jedem x aus D genau ein y · Senkrechtentest am Schaubild · abhängige Variable y, unabhängige Variable x.'}),
  blBau('rechnung', {id:'ZM5', modul:'ZM', stufe:3, titel:'Wurzelfunktion: Definitionsbereich und Wurzelgleichung', tags:T.concat(['Definitionsbereich', 'Wertebereich', 'Wurzelgleichung']), kopf:'Wurzelfunktion',
    text:W => { const w = W[0]; return `Gegeben ist <i>f</i>(x) = ${maZ(w.a)} · √(x ${maVz(-w.b)}) ${maVz(w.c)}.<br>a) Bestimme die kleinste Zahl des Definitionsbereichs und den kleinsten Funktionswert.<br>b) Berechne f(${maZ(w.x1)}).<br>c) Löse f(x) = ${maZ(w.y0)} und mache die Probe.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'c', 'x1', 'y0', 'Lf', 'Lx').concat([
      {id:'dm', t:'kleinstes x im Definitionsbereich', e:'ma', f:'b', weg:w => `x ${maVz(-w.b)} ≥ 0 ⇒ x ≥ [dm]; D = [${maZ(w.b)}; ∞[`},
      {id:'wm', t:'kleinster Funktionswert', e:'ma', f:'c', weg:w => `die Wurzel ist mindestens 0 ⇒ f(${maZ(w.b)}) = [wm]; W = [${maZ(w.c)}; ∞[`},
      {id:'fx', t:'f(x₁)', e:'ma', f:'Lf', weg:w => `${maZ(w.a)} · √(${maZ(w.x1 - w.b)}) ${maVz(w.c)} = [fx]`},
      {id:'xl', t:'Lösung von f(x) = y₀', e:'ma', f:'Lx', weg:w => `√(x ${maVz(-w.b)}) = (${maZ(w.y0)} ${maVz(-w.c)}) ÷ ${maZ(w.a)} = ${maZ((w.y0 - w.c) / w.a)} ⇒ x ${maVz(-w.b)} = ${maZ(((w.y0 - w.c) / w.a) ** 2)} ⇒ x = [xl] · Probe: f([xl]) = ${maZ(w.y0)} ✓`}]),
    ...maMit(maSaetze(9102, 12, R => { const a = R.p([1, 2, 3, 0.5]), b = R.g(-4, 4), c = R.g(-3, 3), s1 = R.p([1, 2, 3, 4]), s2 = R.p([1, 2, 3, 4, 5]);
      const x1 = b + s1 * s1, y0 = c + a * s2; return [{a, b, c, x1, y0, Lf:rd(a * s1 + c), Lx:rd(b + s2 * s2)}]; })),
    hinweise:['Unter der Wurzel darf nichts Negatives stehen.', 'Wurzelgleichung: Wurzel allein stellen, quadrieren, Probe machen.'],
    merke:'f(x) = a · √(x − b) + c (a > 0): D = [b; ∞[, W = [c; ∞[ · Wurzelgleichung: isolieren, quadrieren, Probe (Quadrieren kann Scheinlösungen erzeugen).'}),

  /* ======================= LF · Lineare Funktionen und Ungleichungen (BPE 1.4, 3.4) ======================= */
  blBau('rechnung', {id:'LF1', modul:'LF', stufe:1, titel:'Gerade durch zwei Punkte und Steigungswinkel', tags:T.concat(['lineare Funktion', 'Steigungswinkel']), kopf:'Gerade',
    text:W => `Bestimme jeweils die Gleichung y = mx + b der Geraden durch die beiden Punkte, ihren Steigungswinkel α (in Grad) und ihre Nullstelle:<br>${W.map((w, i) => `${NR[i]} ${pt('P', [w.x1, w.y1])} und ${pt('Q', [w.x2, w.y2])}`).join('<br>')}`,
    spalten:['①', '②', '③'],
    zeilen:maAus('x1', 'y1', 'x2', 'y2', 'Lm', 'Lb', 'La', 'Ln').concat([
      {id:'m', t:'Steigung m', e:'ma', f:'Lm', weg:w => `m = (${maZ(w.y2)} − ${maK(w.y1)}) ÷ (${maZ(w.x2)} − ${maK(w.x1)}) = [m]`},
      {id:'b', t:'y-Achsenabschnitt b', e:'ma', f:'Lb', weg:w => `b = ${maZ(w.y1)} − ${maK(w.Lm)} · ${maK(w.x1)} = [b]`},
      {id:'al', t:'Steigungswinkel α (Grad)', e:'ma', f:'La', weg:w => `tan α = m ⇒ α = tan⁻¹(${maZ(w.Lm)}) = [al]°`},
      {id:'n', t:'Nullstelle', e:'ma', f:'Ln', weg:w => `0 = ${maZ(w.Lm)}x ${maVz(w.Lb)} ⇒ x = [n]`}]),
    ...maMit(maSaetze(9111, 12, R => [0, 1, 2].map(() => { const m = R.p([0.5, 1, 2, -1, -0.5, 3, -2]), b = R.g(-4, 4), x1 = R.g(-3, 1), x2 = x1 + R.p([2, 4]);
      return {x1, y1:m * x1 + b, x2, y2:m * x2 + b, Lm:m, Lb:b, La:rd(grad(Math.atan(m))), Ln:rd(-b / m)}; }))),
    hinweise:['m = (y₂ − y₁) ÷ (x₂ − x₁) · b durch Einsetzen eines Punktes.', 'm = tan α; bei negativer Steigung ist α negativ (Gerade fällt).'],
    merke:'y = mx + b · m = Δy ÷ Δx = tan α · Nullstelle: x = −b ÷ m · besondere Geraden: y = c (parallel zur x-Achse), x = c (keine Funktion).'}),
  blBau('zuordnung', {id:'LF2', modul:'LF', stufe:1, titel:'Besondere Geraden', tags:T.concat(['lineare Funktion', 'besondere Geraden']),
    text:'Ordne jede Gleichung zu.',
    kategorien:['Parallele zur x-Achse', 'Parallele zur y-Achse (keine Funktion)', '1. Winkelhalbierende', '2. Winkelhalbierende', 'andere Ursprungsgerade'], anzahl:8,
    faelle:[
      {t:'y = 3', k:0}, {t:'y = −1,5', k:0}, {t:'y = 0 (x-Achse)', k:0},
      {t:'x = −2', k:1}, {t:'x = 4', k:1},
      {t:'y = x', k:2}, {t:'y = −x', k:3},
      {t:'y = 2x', k:4}, {t:'y = −0,5x', k:4}
    ],
    hinweise:['Winkelhalbierende: Steigung 1 bzw. −1 durch den Ursprung.'],
    merke:'y = c: waagerecht · x = c: senkrecht (keine Funktion) · y = x: 1. Winkelhalbierende (45°) · y = −x: 2. Winkelhalbierende · y = mx: Ursprungsgerade.'}),
  blBau('rechnung', {id:'LF3', modul:'LF', stufe:2, titel:'Lagebeziehung zweier Geraden', tags:T.concat(['lineare Funktion', 'Orthogonalität', 'Schnittpunkt']), kopf:'Zwei Geraden',
    text:W => { const w = W[0]; return `Gegeben sind g: y = ${maLin(w.m1, w.b1)} und h: y = ${maLin(w.m2, w.b2)}.<br>Berechne m<sub>g</sub> · m<sub>h</sub> und den Schnittpunkt S. Entscheide, ob die Geraden orthogonal sind.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('m1', 'b1', 'm2', 'b2', 'Lp', 'Lx', 'Ly', 'Lo').concat([
      {id:'p', t:'m_g · m_h', e:'ma', f:'Lp', weg:w => `${maZ(w.m1)} · ${maK(w.m2)} = [p]`},
      {id:'sx', t:'x-Koordinate von S', e:'ma', f:'Lx', weg:w => `${maLin(w.m1, w.b1)} = ${maLin(w.m2, w.b2)} ⇒ x = (${maZ(w.b2)} − ${maK(w.b1)}) ÷ (${maZ(w.m1)} − ${maK(w.m2)}) = [sx]`},
      {id:'sy', t:'y-Koordinate von S', e:'ma', f:'Ly', weg:w => `y = ${maZ(w.m1)} · ${maK(w.Lx)} ${maVz(w.b1)} = [sy]`}]),
    wahl:[{id:'w', t:'Sind g und h orthogonal?', opts:['ja, denn m_g · m_h = −1', 'nein, denn m_g · m_h ≠ −1'], r:'Lo'}],
    ...maMit(maSaetze(9112, 12, R => { const m1 = R.p([2, -2, 0.5, -0.5, 4, -4, 1, -1]), orth = R.p([true, false]), m2 = orth ? -1 / m1 : R.p([1, 3, -3, 2, 0.5]);
      if (Math.abs(m1 - m2) < 1e-9) return null; const b1 = R.g(-4, 4), b2 = R.g(-4, 4), x = (b2 - b1) / (m1 - m2);
      if (Math.abs(x * 4 - Math.round(x * 4)) > 1e-9) return null; return [{m1, b1, m2, b2, Lp:rd(m1 * m2), Lx:rd(x), Ly:rd(m1 * x + b1), Lo:Math.abs(m1 * m2 + 1) < 1e-9 ? 0 : 1}]; })),
    hinweise:['Orthogonal (senkrecht) genau dann, wenn m_g · m_h = −1.', 'Schnittpunkt: Terme gleichsetzen.'],
    merke:'Lagebeziehungen: gleiche Steigung → parallel (oder identisch) · verschiedene Steigung → ein Schnittpunkt · m_g · m_h = −1 → orthogonal.'}),
  blBau('rechnung', {id:'LF4', modul:'LF', stufe:2, titel:'Lineare Ungleichungen', tags:T.concat(['Ungleichungen', 'lineare Ungleichung']), kopf:'Ungleichung',
    text:W => { const w = W[0]; return `Löse die Ungleichung ${maLin(w.a, w.b)} &lt; ${maLin(w.c, w.d)} und gib die Lösungsmenge an. Deute sie geometrisch: Für welche x liegt die Gerade y = ${maLin(w.a, w.b)} unterhalb der Geraden y = ${maLin(w.c, w.d)}?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'c', 'd', 'Lg', 'Lr').concat([
      {id:'k', t:'Koeffizient von x nach dem Umformen (a − c)', e:'ma', f:'a - c', weg:w => `${maZ(w.a)}x − ${maK(w.c)}x = [k]x`},
      {id:'g', t:'Grenze der Lösungsmenge', e:'ma', f:'Lg', weg:w => `${maZ(w.a - w.c)}x &lt; ${maZ(w.d)} − ${maK(w.b)} = ${maZ(w.d - w.b)} ⇒ Grenze x = [g]`}]),
    wahl:[{id:'w', t:'Wie lautet die Lösungsmenge?', opts:['x kleiner als die Grenze', 'x größer als die Grenze'], r:'Lr', weg:['Der Koeffizient ist positiv – die Richtung bleibt.', 'Der Koeffizient ist negativ – beim Teilen kehrt sich das Ungleichheitszeichen um.']}],
    ...maMit(maSaetze(9113, 12, R => { const a = R.g(-4, 5), c = R.g(-4, 5), b = R.g(-6, 6), d = R.g(-6, 6); if (a === c) return null;
      const g = (d - b) / (a - c); if (Math.abs(g * 4 - Math.round(g * 4)) > 1e-9) return null; return [{a, b, c, d, Lg:rd(g), Lr:a - c > 0 ? 0 : 1}]; })),
    hinweise:['Wie eine Gleichung umformen.', 'Beim Multiplizieren oder Teilen mit einer negativen Zahl kehrt sich das Ungleichheitszeichen um.'],
    merke:'Lineare Ungleichung: Äquivalenzumformungen · Division durch eine negative Zahl dreht &lt; zu &gt; · Lösungsmenge als Intervall, z. B. ]−∞; 2[ · geometrisch: Bereich, in dem eine Gerade unter der anderen liegt.'}),
  blBau('rechnung', {id:'LF5', modul:'LF', stufe:3, titel:'Lot auf eine Gerade', tags:T.concat(['lineare Funktion', 'Orthogonalität', 'Lotfußpunkt']), kopf:'Orthogonale',
    text:W => { const w = W[0]; return `Gegeben ist die Gerade g: y = ${maLin(w.m, w.b)} und der Punkt ${pt('P', [w.px, w.py])}.<br>Bestimme die Gerade h, die g orthogonal schneidet und durch P geht, und den Schnittpunkt F (Lotfußpunkt).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('m', 'b', 'px', 'py', 'Lm', 'Lb', 'Lx', 'Ly').concat([
      {id:'mh', t:'Steigung von h', e:'ma', f:'Lm', weg:w => `m_h = −1 ÷ ${maK(w.m)} = [mh]`},
      {id:'bh', t:'y-Achsenabschnitt von h', e:'ma', f:'Lb', weg:w => `${maZ(w.py)} = ${maZ(w.Lm)} · ${maK(w.px)} + b ⇒ b = [bh]`},
      {id:'fx', t:'x-Koordinate von F', e:'ma', f:'Lx', weg:w => `${maLin(w.m, w.b)} = ${maLin(w.Lm, w.Lb)} ⇒ x = [fx]`},
      {id:'fy', t:'y-Koordinate von F', e:'ma', f:'Ly', weg:w => `y = ${maZ(w.m)} · ${maK(w.Lx)} ${maVz(w.b)} = [fy]`}]),
    ...maMit(maSaetze(9114, 12, R => { const m = R.p([2, -2, 0.5, -0.5, 1, -1]), b = R.g(-3, 3), mh = -1 / m, fx = R.g(-3, 3), fy = m * fx + b, d = R.p([1, 2, -1, -2]);
      const px = fx + d, py = fy + mh * d, bh = py - mh * px; return [{m, b, px, py, Lm:rd(mh), Lb:rd(bh), Lx:fx, Ly:rd(fy)}]; })),
    hinweise:['m_h = −1 ÷ m_g.', 'Dann P einsetzen und g mit h schneiden.'],
    merke:'Orthogonale durch P: m_h = −1 ÷ m_g, P einsetzen · Lotfußpunkt = Schnittpunkt · Orthogonalitätsbedingung m_g · m_h = −1 (Beweis über Steigungsdreiecke).'}),
  blBau('rechnung', {id:'LF6', modul:'LF', stufe:3, titel:'Quadratische Ungleichungen', tags:T.concat(['Ungleichungen', 'quadratische Ungleichung']), kopf:'Ungleichung',
    text:W => { const w = W[0]; return `Löse die quadratische Ungleichung ${maPoly([w.a, -w.a * (w.p + w.q), w.a * w.p * w.q])} ${w.gr ? '&gt;' : '&lt;'} 0. Bestimme dazu die Nullstellen der zugehörigen Parabel und lies die Lösungsmenge am Schaubild ab.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'p', 'q', 'gr', 'Lr').concat([
      {id:'x1', t:'kleinere Nullstelle', e:'ma', f:'p', weg:w => `${maFaktor(w.a)}${maFakt(w.p)}${maFakt(w.q)} = 0 ⇒ x₁ = [x1]`},
      {id:'x2', t:'größere Nullstelle', e:'ma', f:'q', weg:'x₂ = [x2]'}]),
    wahl:[{id:'w', t:'Lösungsmenge', opts:['x < x₁ oder x > x₂', 'x₁ < x < x₂'], r:'Lr', weg:['Die Parabel ist dort positiv bzw. negativ außerhalb der Nullstellen.', 'Die Parabel ist zwischen den Nullstellen positiv bzw. negativ.']}],
    ...maMit(maSaetze(9115, 12, R => { const a = R.p([1, -1, 2, -2, 0.5]), p = R.g(-4, 1), q = p + R.g(1, 5), gr = R.p([0, 1]);
      const aussen = (a > 0) === (gr === 1); return [{a, p, q, gr, Lr:aussen ? 0 : 1}]; })),
    hinweise:['Nullstellen mit Lösungsformel oder Produktform.', 'Nach oben geöffnete Parabel: außerhalb der Nullstellen positiv, dazwischen negativ.'],
    merke:'Quadratische Ungleichung: Nullstellen der Parabel bestimmen, Öffnung beachten, Bereich ablesen · Lösungsmenge als Intervall oder Vereinigung von Intervallen.'}),

  /* ======================= LW · Logarithmus und Wachstumsmodelle (BPE 4.5, 4.6) ======================= */
  {
    id:'LW1', modul:'LW', typ:'berechnung', mehrfach:true, stufe:1, titel:'Der Logarithmus',
    tags:T.concat(['Logarithmus']),
    text:'Der Logarithmus log<sub>q</sub>(y) ist die Hochzahl, mit der man q potenzieren muss, um y zu erhalten: q<sup>x</sup> = y ⇔ x = log<sub>q</sub>(y) (q > 0, q ≠ 1, y > 0).',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'log<sub>2</sub>(32) = 5, weil 2<sup>5</sup> = 32.', richtig:true},
      {text:'ln(y) ist der Logarithmus zur Basis e; es gilt ln(e) = 1.', richtig:true},
      {text:'log<sub>q</sub>(1) = 0 für jede zulässige Basis q.', richtig:true, weg:'q⁰ = 1'},
      {text:'log<sub>q</sub>(y) = ln(y) ÷ ln(q).', richtig:true, weg:'so rechnet man jede Basis mit ln aus'},
      {text:'log<sub>10</sub>(−100) = −2.', fehler:'Der Logarithmus einer negativen Zahl ist nicht definiert; 10<sup>−2</sup> = 0,01.'},
      {text:'log<sub>3</sub>(9) = 3.', fehler:'3² = 9, also log<sub>3</sub>(9) = 2.'}
    ],
    hinweise:['Frage: „q hoch wie viel ergibt y?“'],
    merke:'q<sup>x</sup> = y ⇔ x = log<sub>q</sub>(y) · ln = log<sub>e</sub> · log<sub>q</sub>(y) = ln y ÷ ln q · log<sub>q</sub>(1) = 0, log<sub>q</sub>(q) = 1 · nur für y > 0 definiert.'
  },
  blBau('rechnung', {id:'LW2', modul:'LW', stufe:1, titel:'Logarithmen berechnen', tags:T.concat(['Logarithmus']), kopf:'Logarithmus',
    text:W => `Berechne (auf zwei Nachkommastellen):<br>${W.map((w, i) => `${NR[i]} log<sub>${maZ(w.q)}</sub>(${maZ(w.y, 4)})`).join('<br>')}`,
    spalten:['①', '②', '③'],
    zeilen:maAus('q', 'y', 'L').concat([
      {id:'x', t:'Wert', e:'ma', f:'L', weg:w => `log<sub>${maZ(w.q)}</sub>(${maZ(w.y, 4)}) = ln(${maZ(w.y, 4)}) ÷ ln(${maZ(w.q)}) = [x]` + (Number.isInteger(w.L) ? `, denn ${maZ(w.q)}<sup>${maZ(w.L)}</sup> = ${maZ(w.y, 4)}` : '')}]),
    ...maMit(maSaetze(9121, 12, R => { const a = (() => { const q = R.p([2, 3, 5, 10]), n = R.p([2, 3, 4, -1, -2]); return {q, y:q ** n, L:n}; })();
      const b = (() => { const q = R.p([2, 4, 10]), n = R.p([0.5, 3, -1]); return {q, y:rd(q ** n), L:n}; })();
      const c = (() => { const q = R.p([2, 3, 1.5, 1.05]), y = R.p([7, 20, 50, 1.5]); return {q, y, L:rd(Math.log(y) / Math.log(q))}; })();
      return [a, b, c]; })),
    hinweise:['Ganzzahlige Ergebnisse: Potenz suchen.', 'Sonst: log<sub>q</sub>(y) = ln(y) ÷ ln(q).'],
    merke:'log<sub>q</sub>(y) = x ⇔ q<sup>x</sup> = y · Taschenrechner: log<sub>q</sub>(y) = ln(y) ÷ ln(q) · negative Hochzahl ↔ Wert kleiner als 1.'}),
  blBau('zuordnung', {id:'LW3', modul:'LW', stufe:1, titel:'Lineares, exponentielles oder beschränktes Wachstum?', tags:T.concat(['Wachstum', 'Modellieren']),
    text:'Welches Wachstumsmodell beschreibt die Situation am besten?',
    kategorien:['lineares Wachstum bzw. lineare Abnahme', 'exponentielles Wachstum bzw. exponentielle Abnahme', 'beschränktes Wachstum'], anzahl:8,
    faelle:[
      {t:'Eine Kerze brennt pro Stunde um 2 cm ab.', k:0}, {t:'Ein Handytarif kostet 5 € Grundgebühr plus 0,10 € je Minute.', k:0}, {t:'f(t) = 3t + 20', k:0},
      {t:'Ein Kapital wächst jährlich um 3 % (Zinseszins).', k:1}, {t:'Eine Bakterienkultur verdoppelt sich alle 20 Minuten.', k:1}, {t:'Ein radioaktiver Stoff zerfällt mit einer Halbwertszeit von 8 Tagen.', k:1}, {t:'f(t) = 500 · 1,04<sup>t</sup>', k:1},
      {t:'Heißer Kaffee kühlt auf Raumtemperatur ab.', k:2}, {t:'Ein Kondensator wird aufgeladen.', k:2}, {t:'Die Verkaufszahlen nähern sich der Marktsättigung.', k:2}, {t:'f(t) = 200 − 150 · e<sup>−0,3t</sup>', k:2}
    ],
    hinweise:['Linear: gleicher Zuwachs je Zeitschritt · exponentiell: gleicher Faktor · beschränkt: Annäherung an eine Schranke.'],
    merke:'Linear: f(t) = mt + b (konstante Änderung) · exponentiell: f(t) = a · q<sup>t</sup> = a · e<sup>kt</sup> (konstanter Faktor) · beschränkt: f(t) = S − c · e<sup>−kt</sup> (Zuwachs proportional zum Abstand zur Schranke S).'}),
  blBau('rechnung', {id:'LW4', modul:'LW', stufe:2, titel:'Exponentialgleichungen mit dem Logarithmus lösen', tags:T.concat(['Logarithmus', 'Exponentialgleichung']), kopf:'Gleichung',
    text:W => `Löse die Gleichungen (auf zwei Nachkommastellen):<br>${W.map((w, i) => `${NR[i]} ${maZ(w.a)} · ${maZ(w.q)}<sup>x</sup> = ${maZ(w.c)}`).join('<br>')}`,
    spalten:['①', '②', '③'],
    zeilen:maAus('a', 'q', 'c', 'L').concat([
      {id:'r', t:'q<sup>x</sup> =', e:'ma', f:'c / a', weg:w => `${maZ(w.q)}<sup>x</sup> = ${maZ(w.c)} ÷ ${maZ(w.a)} = [r]`},
      {id:'x', t:'x', e:'ma', f:'L', weg:w => `x = log<sub>${maZ(w.q)}</sub>(${maZ(w.c / w.a)}) = ln(${maZ(w.c / w.a)}) ÷ ln(${maZ(w.q)}) = [x]`}]),
    ...maMit(maSaetze(9122, 12, R => [0, 1, 2].map(() => { const a = R.p([2, 4, 5, 10, 200]), q = R.p([1.5, 2, 3, 1.05, 0.8, 0.5]), r = R.p([2, 3, 5, 10, 0.25, 0.5]);
      if ((q < 1) !== (r < 1) && R.r() < 0.5) return {a, q, c:a * r, L:rd(Math.log(r) / Math.log(q))}; return {a, q, c:a * r, L:rd(Math.log(r) / Math.log(q))}; }))),
    hinweise:['Zuerst durch den Vorfaktor teilen.', 'Dann logarithmieren: x = ln(rechte Seite) ÷ ln(q).'],
    merke:'a · q<sup>x</sup> = c ⇒ q<sup>x</sup> = c ÷ a ⇒ x = log<sub>q</sub>(c ÷ a) = ln(c ÷ a) ÷ ln(q) · Lösung grafisch: Schnittstelle von y = a · q<sup>x</sup> und y = c.'}),
  blBau('rechnung', {id:'LW5', modul:'LW', stufe:2, titel:'Lineares und exponentielles Wachstum im Vergleich', tags:T.concat(['Wachstum', 'Modellieren', 'Vergleich']), kopf:'Gehaltsangebote',
    text:W => { const w = W[0]; return `Eine Berufseinsteigerin erhält zwei Angebote mit einem Jahresgehalt von ${maZ(w.g0)} € im ersten Jahr. Angebot A: Das Gehalt steigt jedes Jahr um ${maZ(w.d)} €. Angebot B: Das Gehalt steigt jedes Jahr um ${maZ(w.p)} %.<br>a) Berechne das Gehalt im ${w.n}. Jahr bei beiden Angeboten.<br>b) Ab welchem Jahr ist das Gehalt bei Angebot B erstmals höher?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('g0', 'd', 'p', 'n', 'LA', 'LB', 'Lj').concat([
      {id:'ga', t:'Gehalt A im n-ten Jahr', e:'€', f:'LA', weg:w => `${maZ(w.g0)} + (${w.n} − 1) · ${maZ(w.d)} = [ga]`},
      {id:'gb', t:'Gehalt B im n-ten Jahr', e:'€', f:'LB', weg:w => `${maZ(w.g0)} · ${maZ(1 + w.p / 100, 4)}<sup>${w.n - 1}</sup> = [gb]`},
      {id:'j', t:'erstes Jahr, in dem B höher ist', e:'ma', f:'Lj', weg:w => `Vergleich Jahr für Jahr: im ${w.Lj - 1}. Jahr A ≥ B, im [j]. Jahr erstmals B > A`}]),
    ...maMit(maSaetze(9123, 12, R => { const g0 = R.p([36000, 40000, 42000, 45000]), d = R.p([1200, 1500, 1800, 2000]), p = R.p([3, 3.5, 4]), n = R.p([5, 8, 10]);
      let j = 1; while (j < 80 && !(g0 * (1 + p / 100) ** (j - 1) > g0 + (j - 1) * d + 1e-9)) j++; if (j >= 80) return null;
      return [{g0, d, p, n, LA:g0 + (n - 1) * d, LB:rd(g0 * (1 + p / 100) ** (n - 1)), Lj:j}]; })),
    hinweise:['A: gleicher Zuwachs (linear) · B: gleicher Faktor (exponentiell).', 'Im n-ten Jahr gab es n − 1 Erhöhungen.'],
    merke:'Linear: f(n) = a + (n − 1) · d · exponentiell: f(n) = a · q<sup>n − 1</sup> · exponentielles Wachstum überholt lineares Wachstum langfristig immer.'}),
  blBau('rechnung', {id:'LW6', modul:'LW', stufe:3, titel:'Beschränktes Wachstum', tags:T.concat(['Wachstum', 'beschränktes Wachstum', 'Logarithmus']), kopf:'Marktsättigung',
    text:W => { const w = W[0]; return `Die Zahl der Nutzer einer neuen App (in Tausend) wird beschrieben durch <i>N</i>(t) = ${maZ(w.S)} − ${maZ(w.c)} · e<sup>−${maZ(w.k)}t</sup> (t in Monaten).<br>a) Wie viele Nutzer gibt es zu Beginn und nach ${w.t1} Monaten?<br>b) Gib die Sättigungsgrenze an.<br>c) Nach wie vielen Monaten sind ${w.pr} % der Sättigungsgrenze erreicht?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('S', 'c', 'k', 't1', 'pr', 'L0', 'Lt', 'Lz').concat([
      {id:'n0', t:'N(0) (Tausend)', e:'ma', f:'L0', weg:w => `${maZ(w.S)} − ${maZ(w.c)} · e⁰ = [n0]`},
      {id:'nt', t:'N(t₁) (Tausend)', e:'ma', f:'Lt', weg:w => `${maZ(w.S)} − ${maZ(w.c)} · e<sup>−${maZ(w.k * w.t1)}</sup> = [nt]`},
      {id:'s', t:'Sättigungsgrenze (Tausend)', e:'ma', f:'S', weg:'für t → ∞ geht e<sup>−kt</sup> → 0 ⇒ S = [s]'},
      {id:'z', t:'Zeitpunkt (Monate)', e:'ma', f:'Lz', weg:w => `${maZ(w.S)} − ${maZ(w.c)} · e<sup>−${maZ(w.k)}t</sup> = ${maZ(w.S * w.pr / 100)} ⇒ e<sup>−${maZ(w.k)}t</sup> = ${maZ(w.S * (1 - w.pr / 100) / w.c, 4)} ⇒ t = ln(${maZ(w.S * (1 - w.pr / 100) / w.c, 4)}) ÷ (−${maZ(w.k)}) = [z]`}]),
    ...maMit(maSaetze(9124, 12, R => { const S = R.p([50, 80, 120, 200]), c = S * R.p([0.8, 0.9, 1]), k = R.p([0.1, 0.2, 0.25, 0.3]), t1 = R.p([3, 6, 12]), pr = R.p([80, 90, 95]);
      return [{S, c, k, t1, pr, L0:rd(S - c), Lt:rd(S - c * Math.exp(-k * t1)), Lz:rd(Math.log(S * (1 - pr / 100) / c) / -k)}]; })),
    hinweise:['Sättigungsgrenze: Was passiert mit e<sup>−kt</sup> für große t?', 'Gleichung nach e<sup>−kt</sup> auflösen, dann ln.'],
    merke:'Beschränktes Wachstum: N(t) = S − c · e<sup>−kt</sup> · Schranke S (waagerechte Asymptote) · Anfangswert S − c · Zuwachs wird immer kleiner · Zeitpunkt über ln bestimmen.'}),

  /* ======================= VG · Vektoren: Grundlagen (BPE 7.1, 7.2) ======================= */
  {
    id:'VG1', modul:'VG', typ:'berechnung', mehrfach:true, stufe:1, titel:'Punkte, Vektoren und Koordinatenebenen',
    tags:T.concat(['Vektoren', 'Koordinatensystem']),
    text:`Im räumlichen Koordinatensystem hat jeder Punkt drei Koordinaten, z. B. ${pt('P', [2, -1, 3])}. Ein Vektor beschreibt eine Verschiebung; alle gleich langen, gleich gerichteten Pfeile stellen denselben Vektor dar.`,
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Der Verbindungsvektor von A nach B ist AB→ = B − A (Spitze minus Fuß).', richtig:true},
      {text:'Der Ortsvektor eines Punktes P führt vom Ursprung O zum Punkt P und hat dieselben Koordinaten wie P.', richtig:true},
      {text:'Punkte in der x₁x₂-Ebene haben die Koordinate x₃ = 0.', richtig:true},
      {text:'Spiegelt man P(2 | −1 | 3) an der x₁x₂-Ebene, erhält man P′(2 | −1 | −3).', richtig:true},
      {text:'Der Gegenvektor von a→ hat dieselbe Richtung und Länge wie a→.', fehler:'Der Gegenvektor −a→ ist gleich lang, aber entgegengesetzt gerichtet.'},
      {text:'Punkte auf der x₃-Achse haben die Koordinate x₃ = 0.', fehler:'Auf der x₃-Achse gilt x₁ = 0 und x₂ = 0; x₃ ist beliebig.'}
    ],
    hinweise:['Verbindungsvektor: „Spitze minus Fuß“.'],
    merke:'Ortsvektor OP→ · Verbindungsvektor AB→ = B − A · Gegenvektor −a→ · Nullvektor o→ · Koordinatenebene: eine Koordinate ist 0 · Schrägbild: x₁-Achse unter 135°, Verkürzung ½√2.'
  },
  blBau('rechnung', {id:'VG2', modul:'VG', stufe:1, titel:'Verbindungsvektor, Mittelpunkt und Abstand', tags:T.concat(['Vektoren', 'Betrag', 'Mittelpunkt']), kopf:'Koordinate',
    text:W => `Gegeben sind ${pt('A', W.map(w => w.a))} und ${pt('B', W.map(w => w.b))}. Berechne den Verbindungsvektor AB→, den Mittelpunkt M der Strecke AB und den Abstand der beiden Punkte.`,
    spalten:VS,
    zeilen:maAus('a', 'b', 'Lab', 'Lm', 'Ld').concat([
      {id:'ab', t:'Koordinate von AB→', e:'ma', f:'Lab', weg:w => `${maZ(w.b)} − ${maK(w.a)} = [ab]`},
      {id:'m', t:'Koordinate von M', e:'ma', f:'Lm', weg:w => `(${maZ(w.a)} + ${maK(w.b)}) ÷ 2 = [m]`}]),
    felder:[{id:'d', t:'Abstand |AB→|', f:'Ld', kurz:'|AB→|', weg:(V, F, W) => vg('AB→', 'd', W.map(w => w.Lab)).replace('[d]', blB(maZ(W[0].Ld)))}],
    ...maMit(maSaetze(9131, 12, R => { const a = [0, 1, 2].map(() => R.g(-4, 5)), b = [0, 1, 2].map(() => R.g(-4, 6)); const ab = b.map((v, i) => v - a[i]);
      if (ab.every(v => !v)) return null; const d = rd(len(ab)); return [0, 1, 2].map(i => ({a:a[i], b:b[i], Lab:ab[i], Lm:rd((a[i] + b[i]) / 2), Ld:d})); }).map(s => s.map(w => ({...w})))),
    hinweise:['AB→ = B − A, komponentenweise.', 'M = ½ · (A + B) · Abstand = Betrag des Verbindungsvektors.'],
    merke:'AB→ = (b₁ − a₁ | b₂ − a₂ | b₃ − a₃) · Mittelpunkt M = ½(A + B) · |a→| = √(a₁² + a₂² + a₃²) · Abstand d(A, B) = |AB→|.'}),
  blBau('rechnung', {id:'VG3', modul:'VG', stufe:2, titel:'Spiegeln und Projizieren an Koordinatenebenen', tags:T.concat(['Vektoren', 'Spiegelung', 'Projektion']), kopf:'Koordinate',
    text:W => `Gegeben ist ${pt('P', W.map(w => w.p))}.<br>a) Spiegle P an der x₁x₂-Ebene (P₁).<br>b) Spiegle P am Ursprung (P₂).<br>c) Projiziere P senkrecht auf die x₂x₃-Ebene (P₃).`,
    spalten:VS,
    zeilen:maAus('p').concat([
      {id:'s1', t:'P₁ (Spiegelung an der x₁x₂-Ebene)', e:'ma', fs:['p', 'p', '-p'], weg:'nur das Vorzeichen von x₃ wechselt: [s1]'},
      {id:'s2', t:'P₂ (Spiegelung am Ursprung)', e:'ma', f:'-p', weg:'alle Vorzeichen wechseln: [s2]'},
      {id:'s3', t:'P₃ (Projektion auf die x₂x₃-Ebene)', e:'ma', fs:['0', 'p', 'p'], weg:'x₁ wird 0: [s3]'}]),
    ...maMit(maSaetze(9132, 12, R => { const p = [R.g(1, 5) * R.p([1, -1]), R.g(1, 5) * R.p([1, -1]), R.g(1, 5) * R.p([1, -1])]; return p.map(v => ({p:v})); })),
    hinweise:['Spiegelung an einer Koordinatenebene: die Koordinate senkrecht zur Ebene wechselt das Vorzeichen.', 'Projektion: diese Koordinate wird 0.'],
    merke:'Spiegelung an x₁x₂-Ebene: (x₁ | x₂ | −x₃) · am Ursprung: (−x₁ | −x₂ | −x₃) · senkrechte Projektion auf x₂x₃-Ebene: (0 | x₂ | x₃) · analog für die anderen Ebenen.'}),
  blBau('rechnung', {id:'VG4', modul:'VG', stufe:2, titel:'Teilpunkt einer Strecke', tags:T.concat(['Vektoren', 'Teilung', 'Streckenteilung']), kopf:'Koordinate',
    text:W => `Der Punkt T teilt die Strecke von ${pt('A', W.map(w => w.a))} nach ${pt('B', W.map(w => w.b))} im Verhältnis ${W[0].m} : ${W[0].n}. Berechne T.`,
    spalten:VS,
    zeilen:maAus('a', 'b', 'm', 'n', 'Lab', 'Lt').concat([
      {id:'ab', t:'Koordinate von AB→', e:'ma', f:'Lab', weg:w => `${maZ(w.b)} − ${maK(w.a)} = [ab]`},
      {id:'t', t:'Koordinate von T', e:'ma', f:'Lt', weg:w => `${maZ(w.a)} + ${w.m}/${w.m + w.n} · ${maK(w.Lab)} = [t]`}]),
    ...maMit(maSaetze(9133, 12, R => { const [m, n] = R.p([[2, 3], [1, 3], [3, 2], [1, 4], [2, 1]]), s = m + n, a = [0, 1, 2].map(() => R.g(-4, 4)), ab = [0, 1, 2].map(() => R.g(-3, 3) * s);
      if (ab.every(v => !v)) return null; return [0, 1, 2].map(i => ({a:a[i], b:a[i] + ab[i], m, n, Lab:ab[i], Lt:rd(a[i] + m / s * ab[i])})); })),
    hinweise:['Teilverhältnis m : n heißt: T liegt nach m von m + n gleichen Teilen.', 'OT→ = OA→ + m/(m + n) · AB→.'],
    merke:'Teilpunkt im Verhältnis m : n: OT→ = OA→ + m ÷ (m + n) · AB→ · Mittelpunkt = Teilung 1 : 1.'}),
  blBau('rechnung', {id:'VG5', modul:'VG', stufe:2, titel:'Rechnen mit Vektoren und Kollinearität', tags:T.concat(['Vektoren', 'Linearkombination', 'Kollinearität']), kopf:'Koordinate',
    text:W => `Gegeben sind a→ = ${cv(W.map(w => w.a))} und b→ = ${cv(W.map(w => w.b))}. Berechne 2a→ − 3b→ und |a→|. Prüfe, ob a→ und b→ kollinear (parallel) sind.`,
    spalten:VS,
    zeilen:maAus('a', 'b', 'Lk', 'La').concat([
      {id:'l', t:'Koordinate von 2a→ − 3b→', e:'ma', f:'2 * a - 3 * b', weg:w => `2 · ${maK(w.a)} − 3 · ${maK(w.b)} = [l]`}]),
    felder:[{id:'ba', t:'|a→|', f:'La', kurz:'|a→|', weg:(V, F, W) => `|a→| = √(${W.map(w => maK(w.a) + '²').join(' + ')}) = ${blB(maZ(W[0].La))}`}],
    wahl:[{id:'w', t:'Sind a→ und b→ kollinear?', opts:['ja: b→ ist ein Vielfaches von a→', 'nein: es gibt keine Zahl r mit b→ = r · a→'], r:'Lk'}],
    ...maMit(maSaetze(9134, 12, R => { const a = [R.g(1, 4), R.g(-3, 3), R.g(-2, 4)], kol = R.p([true, false]), r = R.p([2, -1, 0.5, -2, 3]);
      let b = a.map(v => v * r); if (!kol){ b = b.slice(); b[R.g(0, 2)] += R.p([1, -1, 2]); }
      const isK = a.every((v, i) => Math.abs(v * r - b[i]) < 1e-9); const La = rd(len(a)); return [0, 1, 2].map(i => ({a:a[i], b:b[i], Lk:isK ? 0 : 1, La})); })),
    hinweise:['Komponentenweise rechnen.', 'Kollinear: b→ = r · a→ mit derselben Zahl r in allen Koordinaten.'],
    merke:'Vektoren addieren und mit Zahlen multiplizieren: komponentenweise · kollinear ⇔ b→ = r · a→ · Einheitsvektor a→ ÷ |a→| hat die Länge 1.'}),
  blBau('rechnung', {id:'VG6', modul:'VG', stufe:3, titel:'Parallelogramm ergänzen', tags:T.concat(['Vektoren', 'Parallelogramm', 'Betrag']), kopf:'Koordinate',
    text:W => `Die Punkte ${pt('A', W.map(w => w.a))}, ${pt('B', W.map(w => w.b))} und ${pt('C', W.map(w => w.c))} sind Eckpunkte des Parallelogramms ABCD. Berechne den vierten Eckpunkt D, den Diagonalenschnittpunkt M und die Seitenlängen |AB| und |AD|.`,
    spalten:VS,
    zeilen:maAus('a', 'b', 'c', 'Lab', 'Lad').concat([
      {id:'d', t:'Koordinate von D', e:'ma', f:'a + c - b', weg:w => `OD→ = OA→ + BC→: ${maZ(w.a)} + (${maZ(w.c)} − ${maK(w.b)}) = [d]`},
      {id:'m', t:'Koordinate von M', e:'ma', f:'(a + c) / 2', weg:w => `(${maZ(w.a)} + ${maK(w.c)}) ÷ 2 = [m]`}]),
    felder:[
      {id:'lab', t:'|AB|', f:'Lab', kurz:'|AB|', weg:(V, F, W) => `√(${W.map(w => maK(w.b - w.a) + '²').join(' + ')}) = ${blB(maZ(W[0].Lab))}`},
      {id:'lad', t:'|AD|', f:'Lad', kurz:'|AD|', weg:(V, F, W) => `|AD| = |BC| = √(${W.map(w => maK(w.c - w.b) + '²').join(' + ')}) = ${blB(maZ(W[0].Lad))}`}],
    ...maMit(maSaetze(9135, 12, R => { const a = [0, 1, 2].map(() => R.g(-3, 3)), u = [0, 1, 2].map(() => R.g(-3, 4)), v = [0, 1, 2].map(() => R.g(-3, 4));
      if (u.every((x, i) => Math.abs(x * v[(i + 1) % 3] - v[i] * u[(i + 1) % 3]) < 1e-9)) return null; const b = a.map((x, i) => x + u[i]), c = b.map((x, i) => x + v[i]);
      const Lab = rd(len(u)), Lad = rd(len(v)); return [0, 1, 2].map(i => ({a:a[i], b:b[i], c:c[i], Lab, Lad})); })),
    hinweise:['Im Parallelogramm gilt AD→ = BC→.', 'Die Diagonalen halbieren sich: M ist Mittelpunkt von AC.'],
    merke:'Parallelogramm ABCD: OD→ = OA→ + BC→ · M = ½(A + C) = ½(B + D) · gegenüberliegende Seiten gleich lang und parallel.'}),

  /* ======================= VS · Skalarprodukt, Orthogonalität und Winkel (BPE 7.3) ======================= */
  blBau('rechnung', {id:'VS1', modul:'VS', stufe:1, titel:'Skalarprodukt und Winkel zwischen Vektoren', tags:T.concat(['Vektoren', 'Skalarprodukt', 'Winkel']), kopf:'Größe',
    text:W => { const w = W[0]; return `Gegeben sind a→ = ${cv(w.a)} und b→ = ${cv(w.b)}. Berechne a→ · b→, |a→|, |b→| und den Winkel zwischen a→ und b→.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'Ls', 'La', 'Lb', 'Lw').concat([
      {id:'s', t:'a→ · b→', e:'ma', f:'Ls', weg:w => w.a.map((v, i) => `${maK(v)} · ${maK(w.b[i])}`).join(' + ') + ' = [s]'},
      {id:'la', t:'|a→|', e:'ma', f:'La', weg:w => `√(${w.a.map(v => maK(v) + '²').join(' + ')}) = [la]`},
      {id:'lb', t:'|b→|', e:'ma', f:'Lb', weg:w => `√(${w.b.map(v => maK(v) + '²').join(' + ')}) = [lb]`},
      {id:'wi', t:'Winkel (Grad)', e:'ma', f:'Lw', weg:w => `cos α = ${maZ(w.Ls)} ÷ (${maZ(len(w.a), 4)} · ${maZ(len(w.b), 4)}) ⇒ α = [wi]°`}]),
    ...maMit(maSaetze(9141, 12, R => { const a = [R.g(-3, 4), R.g(-3, 4), R.g(-2, 4)], b = [R.g(-3, 4), R.g(-3, 4), R.g(-2, 4)]; if (!len(a) || !len(b)) return null;
      const s = dot(a, b); return [{a, b, Ls:s, La:rd(len(a)), Lb:rd(len(b)), Lw:rd(grad(Math.acos(s / (len(a) * len(b)))))}]; })),
    hinweise:['a→ · b→ = a₁b₁ + a₂b₂ + a₃b₃.', 'cos α = (a→ · b→) ÷ (|a→| · |b→|); mit ungerundeten Beträgen rechnen.'],
    merke:'Skalarprodukt a→ · b→ = a₁b₁ + a₂b₂ + a₃b₃ = |a→| · |b→| · cos α · Winkel: cos α = a→ · b→ ÷ (|a→| · |b→|) · a→ · b→ = 0 ⇔ orthogonal.'}),
  blBau('rechnung', {id:'VS2', modul:'VS', stufe:1, titel:'Bestellung und Rechnungsbetrag', tags:T.concat(['Vektoren', 'Skalarprodukt', 'Anwendung']), kopf:'Größe',
    text:W => { const w = W[0]; return `Ein Café bestellt bei seinem Großhändler Kaffee, Tee und Kakao (in kg). Bestellvektor b→ = ${cv(w.b)}, Preisvektor p→ = ${cv(w.p)} (€ je kg).<br>a) Berechne den Rechnungsbetrag b→ · p→.<br>b) Die Preise steigen um ${w.z} %. Berechne den neuen Rechnungsbetrag.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('b', 'p', 'z', 'Lr').concat([
      {id:'r', t:'Rechnungsbetrag', e:'€', f:'Lr', weg:w => w.b.map((v, i) => `${maZ(v)} · ${maZ(w.p[i])}`).join(' + ') + ' = [r]'},
      {id:'rn', t:'neuer Rechnungsbetrag', e:'€', f:'r * (1 + z / 100)', weg:w => `${maZ(w.Lr)} · ${maZ(1 + w.z / 100, 4)} = [rn]`}]),
    ...maMit(maSaetze(9142, 12, R => { const b = [R.p([10, 15, 20, 25]), R.p([2, 4, 5]), R.p([3, 6, 8])], p = [R.p([14, 16, 18.5]), R.p([22, 28, 30]), R.p([9, 12, 10.5])], z = R.p([4, 5, 8, 10]);
      return [{b, p, z, Lr:rd(dot(b, p))}]; })),
    hinweise:['Skalarprodukt: Menge · Preis für jede Ware, dann addieren.'],
    merke:'Bestellvektor · Preisvektor = Rechnungsbetrag · Preiserhöhung um z %: Preisvektor mit (1 + z ÷ 100) multiplizieren.'}),
  blBau('rechnung', {id:'VS3', modul:'VS', stufe:2, titel:'Orthogonale Vektoren mit Parameter', tags:T.concat(['Vektoren', 'Orthogonalität', 'Parameter']), kopf:'Größe',
    text:W => `Bestimme t so, dass die Vektoren orthogonal sind:<br>${W.map((w, i) => `${NR[i]} a→ = ${cv([w.a1, w.a2, 0]).replace(/>0<\/span>$/, '>t</span>').replace(/<br>0<\/span>$/, '<br>t</span>')} und b→ = ${cv([w.b1, w.b2, w.b3])}`).join('<br>')}`,
    spalten:['①', '②', '③'],
    zeilen:maAus('a1', 'a2', 'b1', 'b2', 'b3', 'Lt').concat([
      {id:'t', t:'t', e:'ma', f:'Lt', weg:w => `${maK(w.a1)} · ${maK(w.b1)} + ${maK(w.a2)} · ${maK(w.b2)} + t · ${maK(w.b3)} = 0 ⇒ t = [t]`}]),
    ...maMit(maSaetze(9143, 12, R => [0, 1, 2].map(() => { const a1 = R.g(-3, 4), a2 = R.g(-3, 4), b1 = R.g(-3, 4), b2 = R.g(-3, 4), b3 = R.p([1, 2, -1, -2, 4]);
      return {a1, a2, b1, b2, b3, Lt:rd(-(a1 * b1 + a2 * b2) / b3)}; }))),
    hinweise:['Orthogonal ⇔ Skalarprodukt = 0.'],
    merke:'a→ ⊥ b→ ⇔ a→ · b→ = 0 · Bedingung als Gleichung für den Parameter aufstellen und lösen.'}),
  {
    id:'VS4', modul:'VS', typ:'berechnung', mehrfach:true, stufe:2, titel:'Figuren mit Vektoren untersuchen',
    tags:T.concat(['Vektoren', 'Figuren', 'Skalarprodukt']),
    text:'Mit Verbindungsvektoren, Beträgen und Skalarprodukten lassen sich Eigenschaften von Dreiecken und Vierecken nachweisen.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Ein Viereck ABCD ist ein Parallelogramm, wenn AB→ = DC→.', richtig:true},
      {text:'Ein Parallelogramm ist ein Rechteck, wenn zusätzlich AB→ · AD→ = 0.', richtig:true},
      {text:'Ein Parallelogramm ist eine Raute, wenn zusätzlich |AB→| = |AD→|.', richtig:true},
      {text:'Ein Dreieck ist gleichschenklig, wenn zwei Seiten gleich lang sind, z. B. |AB→| = |AC→|.', richtig:true},
      {text:'Ein Dreieck ABC ist bei A rechtwinklig, wenn AB→ · BC→ = 0.', fehler:'Für den Winkel bei A braucht man die Vektoren, die von A ausgehen: AB→ · AC→ = 0.'},
      {text:'Ist das Skalarprodukt zweier Seitenvektoren negativ, ist der Winkel zwischen ihnen spitz.', fehler:'Negatives Skalarprodukt ⇒ cos α < 0 ⇒ stumpfer Winkel.'}
    ],
    hinweise:['Winkel an einer Ecke: beide Vektoren müssen von dieser Ecke ausgehen.'],
    merke:'Parallelogramm: AB→ = DC→ · Rechteck: zusätzlich AB→ ⊥ AD→ · Raute: zusätzlich gleich lange Seiten · Quadrat: beides · Skalarprodukt > 0 spitz, = 0 rechter Winkel, < 0 stumpf.'
  },
  blBau('rechnung', {id:'VS5', modul:'VS', stufe:3, titel:'Innenwinkel eines Dreiecks', tags:T.concat(['Vektoren', 'Dreieck', 'Winkel']), kopf:'Größe',
    text:W => { const w = W[0]; return `Gegeben ist das Dreieck mit ${pt('A', w.A)}, ${pt('B', w.B)} und ${pt('C', w.C)}. Berechne die Innenwinkel bei A und B und daraus den Winkel bei C. Ist das Dreieck rechtwinklig?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('A', 'B', 'C', 'La', 'Lb', 'Lr').concat([
      {id:'wa', t:'Winkel bei A (Grad)', e:'ma', f:'La', weg:w => { const u = w.B.map((v, i) => v - w.A[i]), v = w.C.map((x, i) => x - w.A[i]); return `AB→ = ${cv(u)}, AC→ = ${cv(v)}: cos α = ${maZ(dot(u, v))} ÷ (${maZ(len(u), 4)} · ${maZ(len(v), 4)}) ⇒ α = [wa]°`; }},
      {id:'wb', t:'Winkel bei B (Grad)', e:'ma', f:'Lb', weg:w => { const u = w.A.map((v, i) => v - w.B[i]), v = w.C.map((x, i) => x - w.B[i]); return `BA→ = ${cv(u)}, BC→ = ${cv(v)}: cos β = ${maZ(dot(u, v))} ÷ (${maZ(len(u), 4)} · ${maZ(len(v), 4)}) ⇒ β = [wb]°`; }},
      {id:'wc', t:'Winkel bei C (Grad)', e:'ma', f:'180 - wa - wb', weg:'γ = 180° − α − β = [wc]°'}]),
    wahl:[{id:'w', t:'Ist das Dreieck rechtwinklig?', opts:['ja', 'nein'], r:'Lr'}],
    ...maMit(maSaetze(9144, 12, R => { const A = [R.g(-2, 3), R.g(-2, 3), R.g(0, 3)], u = [R.g(-3, 4), R.g(-3, 4), R.g(-2, 3)]; if (!len(u)) return null;
      const re = R.p([true, false]); let v = [R.g(-3, 4), R.g(-3, 4), R.g(-2, 3)];
      if (re){ const k = R.p([0, 1, 2]); v = [0, 1, 2].map(i => i === k ? 0 : 0); const i1 = (k + 1) % 3, i2 = (k + 2) % 3; if (!u[i1] && !u[i2]) return null; v[i1] = -u[i2]; v[i2] = u[i1]; v[k] = 0;
        if (Math.abs(dot(u, v)) > 1e-9){ return null; } }
      if (!len(v) || Math.abs(Math.abs(dot(u, v)) - len(u) * len(v)) < 1e-9) return null;
      const B = A.map((x, i) => x + u[i]), C = A.map((x, i) => x + v[i]);
      const ang = (P, Q, S) => { const p = Q.map((x, i) => x - P[i]), q = S.map((x, i) => x - P[i]); return grad(Math.acos(dot(p, q) / (len(p) * len(q)))); };
      const a = ang(A, B, C), b = ang(B, A, C), c = 180 - a - b; const r = [a, b, c].some(x => Math.abs(x - 90) < 1e-6);
      return [{A, B, C, La:rd(a), Lb:rd(b), Lr:r ? 0 : 1}]; })),
    hinweise:['Für den Winkel bei einer Ecke beide Vektoren von dieser Ecke aus bilden.', 'Winkelsumme im Dreieck: 180°.'],
    merke:'Innenwinkel: Winkel zwischen den beiden von der Ecke ausgehenden Seitenvektoren · cos α = (u→ · v→) ÷ (|u→| · |v→|) · Winkelsumme 180° · rechter Winkel ⇔ Skalarprodukt 0.'})
  ];
})(),
/* ---------- Mathematik · Wirtschaftsgymnasium Jahrgangsstufen 1 und 2 (Bildungsplan 2021, Mathematik vierstündig) – Ergänzungen ----------
   VK Verknüpfung von Funktionen (BPE 11) · PK Produkt- und Kettenregel (BPE 12.2)
   SE Zufallsexperimente und Ereignisse · SP Mehrstufige Zufallsexperimente · SV Vierfeldertafel und bedingte Wahrscheinlichkeit
   SK Kombinatorik · SZ Zufallsgrößen und Erwartungswert · SB Bernoulli-Kette und Binomialverteilung (BPE 17)
   VR Geraden im Raum · VE Ebenen, Abstände und Volumen (BPE 16). Alle Ergebnisse werden vorberechnet (L…-Zeilen). Neu am 06.11.2026. */
...(() => {
  const T = ['Mathematik', 'Wirtschaftsgymnasium'];
  const NR = ['①', '②', '③'];
  const rd = v => { const r = maR(v); return Math.abs(r) < 1e-9 ? 0 : r; };
  const pz = v => rd(v * 100);                                  // Wahrscheinlichkeit in Prozent
  const cv = a => `<span class="ma-vek" style="display:inline-block;vertical-align:middle;border-left:1.5px solid currentColor;border-right:1.5px solid currentColor;border-radius:7px;padding:1px 6px;margin:0 2px;line-height:1.25;text-align:center;font-variant-numeric:tabular-nums">${a.map(v => maZ(v)).join('<br>')}</span>`;
  const pt = (n, a) => `${n}(${a.map(v => maZ(v)).join(' | ')})`;
  const VS = ['x₁', 'x₂', 'x₃'];
  const grad = r => r * 180 / Math.PI;
  const len = a => Math.sqrt(a.reduce((s, v) => s + v * v, 0));
  const dot = (a, b) => a.reduce((s, v, i) => s + v * b[i], 0);
  const fak = n => n <= 1 ? 1 : n * fak(n - 1);
  const C = (n, k) => k < 0 || k > n ? 0 : Math.round(fak(n) / (fak(k) * fak(n - k)));
  const bin = (n, p, k) => C(n, k) * p ** k * (1 - p) ** (n - k);
  const cum = (n, p, k) => { let s = 0; for (let i = 0; i <= k; i++) s += bin(n, p, i); return s; };
  const gl = (a, u, par) => `${cv(a)} + ${par || 't'} · ${cv(u)}`;
  const ex = (k, c) => `e<sup>${maPoly([k, c])}</sup>`;
  return [
  /* ======================= VK · Verknüpfung von Funktionen (BPE 11) ======================= */
  blBau('rechnung', {id:'VK1', modul:'VK', stufe:1, titel:'Summe und Produkt zweier Funktionen', tags:T.concat(['Verknüpfung', 'Summe', 'Produkt']), kopf:'Wertetabelle',
    text:W => { const w = W[0]; return `Gegeben sind <i>f</i>(x) = ${maLin(w.m, w.n)} und <i>g</i>(x) = ${ex(w.k, 0)}. Berechne für die angegebenen x-Werte f(x), g(x), die Summe s(x) = f(x) + g(x) und das Produkt p(x) = f(x) · g(x).`; },
    spalten:['x₁', 'x₂', 'x₃'],
    zeilen:[{id:'x', t:'x', e:'ma'}].concat(maAus('m', 'n', 'k', 'Lf', 'Lg')).concat([
      {id:'f', t:'f(x)', e:'ma', f:'Lf', weg:w => `${maZ(w.m)} · ${maK(w.x)} ${maVz(w.n)} = [f]`},
      {id:'g', t:'g(x)', e:'ma', f:'Lg', weg:w => `e<sup>${maZ(w.k * w.x)}</sup> ≈ [g]`},
      {id:'s', t:'s(x) = f(x) + g(x)', e:'ma', f:'f + g', weg:'Ordinatenaddition: [s]'},
      {id:'p', t:'p(x) = f(x) · g(x)', e:'ma', f:'f * g', weg:'[p]'}]),
    ...maMit(maSaetze(9201, 12, R => { const m = R.p([1, 2, -1, 0.5]), n = R.g(-3, 3), k = R.p([1, 0.5, -1]), xs = R.p([[-1, 0, 1], [0, 1, 2], [-2, 0, 2]]);
      return xs.map(x => ({m, n, k, x, Lf:rd(m * x + n), Lg:rd(Math.exp(k * x))})); })),
    hinweise:['Erst f(x) und g(x) einzeln, dann addieren bzw. multiplizieren.'],
    merke:'Summe (f + g)(x) = f(x) + g(x): Ordinatenaddition · Produkt (f · g)(x) = f(x) · g(x) · Nullstellen des Produkts = Nullstellen der Faktoren.'}),
  blBau('zuordnung', {id:'VK2', modul:'VK', stufe:1, titel:'Summe, Produkt oder Verkettung?', tags:T.concat(['Verknüpfung', 'Verkettung']),
    text:'Wie ist die Funktion aus einfacheren Funktionen zusammengesetzt?',
    kategorien:['Summe bzw. Differenz', 'Produkt', 'Verkettung mit linearer innerer Funktion'], anzahl:8,
    faelle:[
      {t:'f(x) = x² + e<sup>x</sup>', k:0}, {t:'f(x) = 3x − sin(x)', k:0}, {t:'f(x) = e<sup>x</sup> + 2', k:0},
      {t:'f(x) = x · e<sup>x</sup>', k:1}, {t:'f(x) = x² · sin(x)', k:1}, {t:'f(x) = (x + 2) · e<sup>−0,5x</sup>', k:1},
      {t:'f(x) = e<sup>2x − 1</sup>', k:2}, {t:'f(x) = sin(3x)', k:2}, {t:'f(x) = (2x + 1)³', k:2}
    ],
    hinweise:['Verkettung: In eine Funktion wird ein linearer Term eingesetzt.'],
    merke:'Summe f + g · Produkt f · g · Verkettung u(v(x)) mit äußerer Funktion u und innerer Funktion v, z. B. e<sup>2x − 1</sup>: u(z) = e<sup>z</sup>, v(x) = 2x − 1.'}),
  blBau('rechnung', {id:'VK3', modul:'VK', stufe:2, titel:'Produkt aus linearer Funktion und e-Funktion', tags:T.concat(['Verknüpfung', 'Produkt', 'Asymptote']), kopf:'Untersuchung',
    text:W => { const w = W[0]; return `Gegeben ist <i>f</i>(x) = (x ${maVz(-w.a)}) · ${ex(w.k, 0)}.<br>a) Bestimme die Nullstelle und den Schnittpunkt mit der y-Achse.<br>b) Berechne f(1).<br>c) Beschreibe das Verhalten für x → −∞.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'k', 'L1').concat([
      {id:'n', t:'Nullstelle', e:'ma', f:'a', weg:w => `e<sup>${maZ(w.k)}x</sup> > 0 ⇒ x ${maVz(-w.a)} = 0 ⇒ x = [n]`},
      {id:'y', t:'f(0)', e:'ma', f:'-a', weg:w => `(0 ${maVz(-w.a)}) · e⁰ = [y]`},
      {id:'f1', t:'f(1)', e:'ma', f:'L1', weg:w => `(1 ${maVz(-w.a)}) · e<sup>${maZ(w.k)}</sup> = [f1]`}]),
    wahl:[{id:'w', t:'Verhalten für x → −∞', opts:['f(x) → 0; die x-Achse ist waagerechte Asymptote', 'f(x) → −∞', 'f(x) → +∞'], r:'0', weg:['Der Faktor e<sup>kx</sup> geht schneller gegen 0, als (x − a) gegen −∞ geht.']}],
    ...maMit(maSaetze(9202, 12, R => { const a = R.g(-3, 4), k = R.p([1, 0.5, 2]); return [{a, k, L1:rd((1 - a) * Math.exp(k))}]; })),
    hinweise:['Ein Produkt ist 0, wenn ein Faktor 0 ist – e<sup>kx</sup> wird nie 0.', 'Für x → −∞ „gewinnt“ die e-Funktion.'],
    merke:'f(x) = (x − a) · e<sup>kx</sup> (k > 0): Nullstelle x = a · f(0) = −a · für x → −∞: f(x) → 0 (Asymptote y = 0) · für x → +∞: f(x) → +∞.'}),
  {
    id:'VK4', modul:'VK', typ:'berechnung', mehrfach:true, stufe:2, titel:'Eigenschaften verknüpfter Funktionen',
    tags:T.concat(['Verknüpfung', 'Symmetrie', 'Nullstellen']),
    text:'Aus den Eigenschaften der Bausteine lassen sich Eigenschaften der verknüpften Funktion ableiten.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Das Produkt zweier punktsymmetrischer Funktionen, z. B. x · sin(x), ist achsensymmetrisch zur y-Achse.', richtig:true},
      {text:'Die Nullstellen von f · g sind die Nullstellen von f und die Nullstellen von g.', richtig:true},
      {text:'Das Schaubild von f + g erhält man, indem man die y-Werte von f und g addiert (Ordinatenaddition).', richtig:true},
      {text:'Das Schaubild von e<sup>2x</sup> entsteht aus dem von e<sup>x</sup> durch Stauchung in x-Richtung mit dem Faktor ½.', richtig:true},
      {text:'Die Nullstellen von f + g sind die Nullstellen von f und von g.', fehler:'Bei der Summe gilt das nicht: Ist f(x) = 0, ist (f + g)(x) = g(x), also im Allgemeinen nicht 0.'},
      {text:'Die Summe einer geraden und einer ungeraden Funktion ist immer achsensymmetrisch.', fehler:'Im Allgemeinen ist sie weder achsen- noch punktsymmetrisch, z. B. x² + x.'}
    ],
    hinweise:['Beispiele mit einfachen Funktionen ausprobieren.'],
    merke:'Produkt: Nullstellen der Faktoren · Symmetrie: ungerade · ungerade = gerade, gerade · ungerade = ungerade · Summe: Ordinatenaddition · Verkettung mit linearer innerer Funktion: Streckung bzw. Verschiebung in x-Richtung.'
  },
  blBau('rechnung', {id:'VK5', modul:'VK', stufe:3, titel:'Verkettung mit linearer innerer Funktion', tags:T.concat(['Verkettung', 'Exponentialgleichung']), kopf:'Verkettung',
    text:W => { const w = W[0]; return `Gegeben sind u(x) = e<sup>x</sup> und v(x) = ${maLin(w.k, w.c)}.<br>a) Gib h(x) = u(v(x)) an und berechne h(0) und h(1).<br>b) Für welches x gilt h(x) = ${maZ(w.y0)}?<br>c) Berechne k(0) für k(x) = v(u(x)).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'c', 'y0', 'L0', 'L1', 'Lx').concat([
      {id:'h0', t:'h(0)', e:'ma', f:'L0', weg:w => `h(x) = ${ex(w.k, w.c)} ⇒ h(0) = e<sup>${maZ(w.c)}</sup> = [h0]`},
      {id:'h1', t:'h(1)', e:'ma', f:'L1', weg:w => `e<sup>${maZ(w.k + w.c)}</sup> = [h1]`},
      {id:'x', t:'x mit h(x) = y₀', e:'ma', f:'Lx', weg:w => `${maLin(w.k, w.c)} = ln(${maZ(w.y0)}) ⇒ x = (${maZ(Math.log(w.y0), 4)} ${maVz(-w.c)}) ÷ ${maK(w.k)} = [x]`},
      {id:'k0', t:'k(0) = v(u(0))', e:'ma', f:'k + c', weg:w => `u(0) = 1 ⇒ v(1) = ${maZ(w.k)} · 1 ${maVz(w.c)} = [k0]`}]),
    ...maMit(maSaetze(9203, 12, R => { const k = R.p([2, -1, 0.5, 3, -2]), c = R.g(-2, 2), y0 = R.p([2, 5, 10, 0.5]); return [{k, c, y0, L0:rd(Math.exp(c)), L1:rd(Math.exp(k + c)), Lx:rd((Math.log(y0) - c) / k)}]; })),
    hinweise:['Innere Funktion in die äußere einsetzen.', 'Reihenfolge beachten: u(v(x)) ≠ v(u(x)).'],
    merke:'Verkettung h(x) = u(v(x)): erst innere, dann äußere Funktion · u(v(x)) und v(u(x)) sind meist verschieden · e<sup>kx + c</sup> = y ⇒ kx + c = ln y.'}),

  /* ======================= PK · Produkt- und Kettenregel (BPE 12.2) ======================= */
  blBau('zuordnung', {id:'PK1', modul:'PK', stufe:1, titel:'Welche Ableitungsregel?', tags:T.concat(['Ableitungsregeln']),
    text:'Welche Regel braucht man vor allem, um die Funktion abzuleiten?',
    kategorien:['Faktor- und Summenregel', 'Produktregel', 'Kettenregel (lineare innere Funktion)', 'Produkt- und Kettenregel'], anzahl:8,
    faelle:[
      {t:'f(x) = 3x⁴ − 2x + 5', k:0}, {t:'f(x) = 4e<sup>x</sup> + x²', k:0},
      {t:'f(x) = x² · e<sup>x</sup>', k:1}, {t:'f(x) = x · cos(x)', k:1},
      {t:'f(x) = e<sup>3x − 1</sup>', k:2}, {t:'f(x) = sin(2x)', k:2}, {t:'f(x) = (2x + 5)³', k:2},
      {t:'f(x) = x · e<sup>−2x</sup>', k:3}, {t:'f(x) = x² · sin(3x)', k:3}
    ],
    hinweise:['Produkt zweier x-abhängiger Terme → Produktregel · eingesetzter linearer Term → Kettenregel.'],
    merke:'(u · v)′ = u′ · v + u · v′ · (f(ax + b))′ = a · f′(ax + b) · Kombinationen: erst Produktregel, darin Kettenregel.'}),
  blBau('rechnung', {id:'PK2', modul:'PK', stufe:1, titel:'Kettenregel mit linearer innerer Funktion', tags:T.concat(['Ableitungsregeln', 'Kettenregel']), kopf:'Ableitung',
    text:W => `Berechne jeweils die Ableitung an der Stelle x₀:<br>${W.map((w, i) => `${NR[i]} <i>f</i>(x) = ${w.typ === 0 ? `(${maLin(w.a, w.b)})${MA_HOCH[w.n]}` : w.typ === 1 ? ex(w.a, w.b) : `${maZ(w.c)} · sin(${maLin(w.a, w.b)})`}, x₀ = ${maZ(w.x0)}`).join('<br>')}`,
    spalten:['①', '②', '③'],
    zeilen:maAus('typ', 'a', 'b', 'n', 'c', 'x0', 'Ld').concat([
      {id:'in', t:'innere Ableitung', e:'ma', f:'a', weg:'v′(x) = [in]'},
      {id:'d', t:'f′(x₀)', e:'ma', f:'Ld', weg:w => w.typ === 0 ? `f′(x) = ${w.n} · ${maK(w.a)} · (${maLin(w.a, w.b)})${w.n - 1 > 1 ? MA_HOCH[w.n - 1] : ''} ⇒ f′(${maZ(w.x0)}) = [d]`
        : w.typ === 1 ? `f′(x) = ${maK(w.a)} · ${ex(w.a, w.b)} ⇒ f′(${maZ(w.x0)}) = [d]` : `f′(x) = ${maZ(w.c)} · ${maK(w.a)} · cos(${maLin(w.a, w.b)}) ⇒ f′(${maZ(w.x0)}) = [d]`}]),
    ...maMit(maSaetze(9211, 12, R => { const a0 = R.p([2, 3, -1, 0.5]), b0 = R.g(-3, 3), n = R.p([2, 3, 4]), x0a = R.g(-1, 2);
      const a1 = R.p([2, -1, 0.5, 3]), b1 = R.g(-2, 1), x0b = R.p([0, 1]); const a2 = R.p([2, 3, 0.5]), c2 = R.p([1, 2, 3]), x0c = 0;
      return [{typ:0, a:a0, b:b0, n, c:0, x0:x0a, Ld:rd(n * a0 * (a0 * x0a + b0) ** (n - 1))},
              {typ:1, a:a1, b:b1, n:0, c:0, x0:x0b, Ld:rd(a1 * Math.exp(a1 * x0b + b1))},
              {typ:2, a:a2, b:0, n:0, c:c2, x0:x0c, Ld:rd(c2 * a2 * Math.cos(a2 * x0c))}]; })),
    hinweise:['Äußere Ableitung mal innere Ableitung.', 'Die innere Ableitung von ax + b ist a.'],
    merke:'Kettenregel (lineare innere Funktion): f(x) = u(ax + b) ⇒ f′(x) = a · u′(ax + b) · z. B. (e<sup>3x</sup>)′ = 3e<sup>3x</sup>, (sin(2x))′ = 2cos(2x), ((2x + 1)³)′ = 6(2x + 1)².'}),
  blBau('rechnung', {id:'PK3', modul:'PK', stufe:2, titel:'Produktregel: Extremstelle von (x + a) · e^(kx)', tags:T.concat(['Ableitungsregeln', 'Produktregel', 'Extrempunkt']), kopf:'Untersuchung',
    text:W => { const w = W[0]; return `Gegeben ist <i>f</i>(x) = (x ${maVz(w.a)}) · ${ex(w.k, 0)}.<br>a) Bestimme f′(x) mit der Produktregel und berechne f′(0).<br>b) Bestimme die Extremstelle und den zugehörigen Funktionswert.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'k', 'Lx', 'Ly').concat([
      {id:'d0', t:'f′(0)', e:'ma', f:'1 + k * a', weg:w => { const e = `e<sup>${maPoly([w.k, 0])}</sup>`; return `f′(x) = 1 · ${e} + (x ${maVz(w.a)}) · ${maK(w.k)} · ${e} = ${e} · (1 + ${maK(w.k)}(x ${maVz(w.a)})) ⇒ f′(0) = [d0]`; }},
      {id:'xe', t:'Extremstelle', e:'ma', f:'Lx', weg:w => `1 + ${maK(w.k)}(x ${maVz(w.a)}) = 0 ⇒ x = [xe]`},
      {id:'ye', t:'Funktionswert an der Extremstelle', e:'ma', f:'Ly', weg:w => `f(${maZ(w.Lx)}) = ${maZ(w.Lx + w.a)} · e<sup>${maZ(w.k * w.Lx)}</sup> = [ye]`}]),
    ...maMit(maSaetze(9212, 12, R => { const a = R.g(-3, 3), k = R.p([1, -1, 0.5, -0.5, 2]); const x = -a - 1 / k; return [{a, k, Lx:rd(x), Ly:rd((x + a) * Math.exp(k * x))}]; })),
    hinweise:['u = x + a, v = e<sup>kx</sup> · u′ = 1, v′ = k · e<sup>kx</sup>.', 'e<sup>kx</sup> ausklammern – der Faktor wird nie 0.'],
    merke:'Produktregel (u · v)′ = u′v + uv′ · bei e-Funktionen e<sup>kx</sup> ausklammern · Extremstelle: f′(x) = 0, Vorzeichenwechsel prüfen.'}),
  blBau('rechnung', {id:'PK4', modul:'PK', stufe:2, titel:'Produktregel mit Sinus', tags:T.concat(['Ableitungsregeln', 'Produktregel', 'trigonometrische Funktion']), kopf:'Ableitung',
    text:W => `Gegeben ist <i>f</i>(x) = ${maZ(W[0].c)}x · sin(x). Bestimme f′(x) mit der Produktregel und berechne die Steigung an den Stellen x = 0, x = π/2 und x = π.`,
    spalten:['x = 0', 'x = π/2', 'x = π'],
    zeilen:maAus('c', 'x', 'L').concat([
      {id:'d', t:'f′(x)', e:'ma', f:'L', weg:w => `f′(x) = ${maZ(w.c)}(sin(x) + x · cos(x)) ⇒ f′ = ${maZ(w.c)} · (${maZ(Math.sin(w.x), 4)} + ${maZ(w.x, 4)} · ${maK(rd(Math.cos(w.x)))}) = [d]`}]),
    ...maMit(maSaetze(9213, 12, R => { const c = R.p([1, 2, 3, 0.5, -1, -2]); return [0, Math.PI / 2, Math.PI].map(x => ({c, x, L:rd(c * (Math.sin(x) + x * Math.cos(x)))})); })),
    hinweise:['u = cx, v = sin(x) · u′ = c, v′ = cos(x).', 'sin(0) = 0, sin(π/2) = 1, cos(π/2) = 0, cos(π) = −1.'],
    merke:'(x · sin x)′ = sin x + x · cos x · Faktor bleibt erhalten · Werte von sin und cos an 0, π/2, π auswendig kennen.'}),
  blBau('rechnung', {id:'PK5', modul:'PK', stufe:3, titel:'Tangente an das Schaubild von (x − a) · e^x', tags:T.concat(['Ableitungsregeln', 'Produktregel', 'Tangente']), kopf:'Tangente',
    text:W => { const w = W[0]; return `Gegeben ist <i>f</i>(x) = (x ${maVz(-w.a)}) · e<sup>x</sup>. Bestimme die Gleichung der Tangente t: y = mx + b im Punkt P(${maZ(w.x0)} | f(${maZ(w.x0)})).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'x0', 'Ly', 'Lm', 'Lb').concat([
      {id:'y', t:'f(x₀)', e:'ma', f:'Ly', weg:w => `(${maZ(w.x0)} ${maVz(-w.a)}) · e<sup>${maZ(w.x0)}</sup> = [y]`},
      {id:'m', t:'Steigung m = f′(x₀)', e:'ma', f:'Lm', weg:w => `f′(x) = e<sup>x</sup> + (x ${maVz(-w.a)})e<sup>x</sup> = (x ${maVz(1 - w.a)}) · e<sup>x</sup> ⇒ f′(${maZ(w.x0)}) = [m]`},
      {id:'b', t:'y-Achsenabschnitt b', e:'ma', f:'Lb', weg:w => `b = f(x₀) − m · x₀ = ${maZ(w.Ly)} − ${maK(w.Lm)} · ${maK(w.x0)} = [b]`}]),
    ...maMit(maSaetze(9214, 12, R => { const a = R.g(-2, 3), x0 = R.p([0, 1, -1, 0.5]); const y = (x0 - a) * Math.exp(x0), m = (x0 - a + 1) * Math.exp(x0);
      return [{a, x0, Ly:rd(y), Lm:rd(m), Lb:rd(rd(y) - rd(m) * x0)}]; })),
    hinweise:['Produktregel: u = x − a, v = e<sup>x</sup>.', 'Tangente: m = f′(x₀), b = f(x₀) − m · x₀.'],
    merke:'Tangente in P(x₀ | f(x₀)): t: y = f′(x₀) · (x − x₀) + f(x₀) · Ableitung von (x − a)e<sup>x</sup>: (x − a + 1)e<sup>x</sup>.'}),

  /* ======================= SE · Zufallsexperimente, Ergebnisse und Ereignisse (BPE 17.1, 17.2) ======================= */
  blBau('zuordnung', {id:'SE1', modul:'SE', stufe:1, titel:'Laplace-Experiment oder nicht?', tags:T.concat(['Stochastik', 'Laplace-Experiment']),
    text:'Sind alle Ergebnisse des Zufallsexperiments gleich wahrscheinlich (Laplace-Experiment)?',
    kategorien:['Laplace-Experiment', 'kein Laplace-Experiment'], anzahl:8,
    faelle:[
      {t:'einmal mit einem fairen Würfel würfeln, notiert wird die Augenzahl', k:0}, {t:'eine faire Münze werfen', k:0},
      {t:'eine Karte aus einem gut gemischten Kartenspiel ziehen', k:0}, {t:'eine Kugel aus einer Urne mit 10 durchnummerierten Kugeln ziehen, notiert wird die Nummer', k:0},
      {t:'Glücksrad mit unterschiedlich großen Sektoren drehen', k:1}, {t:'eine Reißzwecke werfen (Spitze oben oder seitlich)', k:1},
      {t:'zwei Würfel werfen, notiert wird die Augensumme', k:1, weg:'Augensumme 7 ist wahrscheinlicher als 2'},
      {t:'aus einer Urne mit 3 roten und 2 blauen Kugeln ziehen, notiert wird die Farbe', k:1}
    ],
    hinweise:['Laplace: alle Ergebnisse gleich wahrscheinlich – dann P(A) = Anzahl günstige ÷ Anzahl mögliche.'],
    merke:'Laplace-Experiment: alle Ergebnisse gleich wahrscheinlich · Laplace-Formel P(A) = |A| ÷ |S| · Gegenbeispiele: ungleiche Sektoren, Augensumme, Farben bei ungleicher Anzahl.'}),
  blBau('rechnung', {id:'SE2', modul:'SE', stufe:1, titel:'Wahrscheinlichkeiten beim Ziehen aus einer Urne', tags:T.concat(['Stochastik', 'Laplace-Formel', 'Erwartete Häufigkeit']), kopf:'Urne',
    text:W => { const w = W[0]; return `In einer Urne liegen ${w.r} rote, ${w.b} blaue und ${w.g} grüne Kugeln. Es wird eine Kugel gezogen.<br>a) Berechne P(rot) und P(nicht blau).<br>b) Es wird ${w.m}-mal mit Zurücklegen gezogen. Wie oft ist etwa mit einer roten Kugel zu rechnen?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('r', 'b', 'g', 'm').concat([
      {id:'pr', t:'P(rot)', e:'%', f:'r / (r + b + g) * 100', weg:w => `${w.r} ÷ ${w.r + w.b + w.g} = [pr]`},
      {id:'pn', t:'P(nicht blau)', e:'%', f:'(r + g) / (r + b + g) * 100', weg:w => `1 − P(blau) = 1 − ${w.b} ÷ ${w.r + w.b + w.g} = [pn]`},
      {id:'h', t:'erwartete Anzahl roter Kugeln', e:'ma', f:'m * r / (r + b + g)', weg:w => `${w.m} · ${w.r} ÷ ${w.r + w.b + w.g} = [h]`}]),
    ...maMit(maSaetze(9221, 12, R => { const r = R.g(2, 8), b = R.g(1, 7), g = R.g(1, 5), m = R.p([50, 100, 200, 500]); return [{r, b, g, m}]; })),
    hinweise:['Laplace: günstige ÷ mögliche Ergebnisse.', 'Erwartete Häufigkeit = Anzahl der Versuche · Wahrscheinlichkeit.'],
    merke:'P(A) = |A| ÷ |S| · P(Ā) = 1 − P(A) · erwartete absolute Häufigkeit = n · P(A).'}),
  {
    id:'SE3', modul:'SE', typ:'berechnung', mehrfach:true, stufe:1, titel:'Ergebnisse und Ereignisse',
    tags:T.concat(['Stochastik', 'Ereignisse', 'Mengen']),
    text:'Ein fairer Würfel wird einmal geworfen. S = {1; 2; 3; 4; 5; 6}. A: „gerade Zahl“ = {2; 4; 6}, B: „mindestens 5“ = {5; 6}.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'A ∩ B = {6} („gerade und mindestens 5“).', richtig:true},
      {text:'A ∪ B = {2; 4; 5; 6} („gerade oder mindestens 5“).', richtig:true},
      {text:'Ā = {1; 3; 5}, P(Ā) = 1 − P(A) = 0,5.', richtig:true},
      {text:'„Augenzahl kleiner als 7“ ist das sichere Ereignis S, „Augenzahl 0“ das unmögliche Ereignis ∅.', richtig:true},
      {text:'A ∩ B̄ = {5}.', fehler:'B̄ = {1; 2; 3; 4} ⇒ A ∩ B̄ = {2; 4}.'},
      {text:'P(A ∪ B) = P(A) + P(B) = 5/6.', fehler:'A und B haben die 6 gemeinsam: P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 3/6 + 2/6 − 1/6 = 4/6.'}
    ],
    hinweise:['∩ „und“, ∪ „oder“, Querstrich „nicht“.'],
    merke:'Ergebnis: einzelner Ausgang · Ereignis: Teilmenge von S · Gegenereignis Ā · A ∩ B (und), A ∪ B (oder) · sicheres Ereignis S, unmögliches ∅ · Additionssatz P(A ∪ B) = P(A) + P(B) − P(A ∩ B).'
  },
  blBau('rechnung', {id:'SE4', modul:'SE', stufe:2, titel:'Relative Häufigkeit und Wahrscheinlichkeit', tags:T.concat(['Stochastik', 'relative Häufigkeit', 'Gesetz der großen Zahlen']), kopf:'Glücksrad',
    text:W => `Ein Glücksrad hat drei Sektoren: rot (${W[0].w}°), blau (${W[1].w}°) und gelb (${W[2].w}°). Bei ${W[0].n} Drehungen ergab sich ${W[0].h}-mal rot, ${W[1].h}-mal blau und ${W[2].h}-mal gelb. Vergleiche relative Häufigkeit und Wahrscheinlichkeit und berechne die erwartete Anzahl bei ${W[0].n2} Drehungen.`,
    spalten:['rot', 'blau', 'gelb'],
    zeilen:maAus('w', 'n', 'h', 'n2').concat([
      {id:'rh', t:'relative Häufigkeit', e:'%', f:'h / n * 100', weg:w => `${w.h} ÷ ${w.n} = [rh]`},
      {id:'p', t:'Wahrscheinlichkeit', e:'%', f:'w / 360 * 100', weg:w => `${w.w}° ÷ 360° = [p]`},
      {id:'e', t:'erwartete Anzahl bei n₂ Drehungen', e:'ma', f:'n2 * w / 360', weg:w => `${w.n2} · ${w.w} ÷ 360 = [e]`}]),
    ...maMit(maSaetze(9222, 12, R => { const w = R.p([[180, 120, 60], [90, 90, 180], [144, 144, 72], [120, 120, 120], [200, 100, 60]]), n = R.p([50, 80, 100, 200]), n2 = R.p([600, 1000, 1800]);
      const h0 = Math.max(0, Math.round(n * w[0] / 360) + R.g(-4, 4)), h1 = Math.max(0, Math.round(n * w[1] / 360) + R.g(-4, 4)), h2 = n - h0 - h1; if (h2 < 0) return null;
      return [0, 1, 2].map(i => ({w:w[i], n, h:[h0, h1, h2][i], n2})); })),
    hinweise:['Relative Häufigkeit = absolute Häufigkeit ÷ Anzahl der Versuche.', 'Bei vielen Versuchen nähert sich die relative Häufigkeit der Wahrscheinlichkeit (empirisches Gesetz der großen Zahlen).'],
    merke:'relative Häufigkeit h = k ÷ n · Wahrscheinlichkeit beim Glücksrad = Winkel ÷ 360° · Gesetz der großen Zahlen: h stabilisiert sich bei P · erwartete Anzahl = n · P.'}),
  blBau('rechnung', {id:'SE5', modul:'SE', stufe:3, titel:'Mindestens einmal – das Gegenereignis nutzen', tags:T.concat(['Stochastik', 'Gegenereignis', 'mindestens']), kopf:'Mindestens-Aufgabe',
    text:W => { const w = W[0]; return `Bei einem Gewinnspiel gewinnt man bei jedem Versuch mit der Wahrscheinlichkeit ${maZ(w.p * 100)} % (unabhängig voneinander).<br>a) Wie groß ist die Wahrscheinlichkeit, bei ${w.n} Versuchen mindestens einmal zu gewinnen?<br>b) Wie oft muss man mindestens spielen, damit die Wahrscheinlichkeit für mindestens einen Gewinn mindestens ${w.q} % beträgt?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('p', 'n', 'q', 'Lm', 'Ln').concat([
      {id:'m', t:'P(mindestens ein Gewinn)', e:'%', f:'Lm', weg:w => `1 − ${maZ(1 - w.p, 4)}<sup>${w.n}</sup> = [m]`},
      {id:'nm', t:'Mindestanzahl der Versuche', e:'ma', f:'Ln', weg:w => `1 − ${maZ(1 - w.p, 4)}<sup>n</sup> ≥ ${maZ(w.q / 100)} ⇒ n ≥ ln(${maZ(1 - w.q / 100)}) ÷ ln(${maZ(1 - w.p, 4)}) = ${maZ(Math.log(1 - w.q / 100) / Math.log(1 - w.p))} ⇒ n = [nm]`}]),
    ...maMit(maSaetze(9223, 12, R => { const p = R.p([0.05, 0.1, 0.2, 0.25, 0.15]), n = R.p([3, 5, 8, 10]), q = R.p([90, 95, 99]);
      return [{p, n, q, Lm:pz(1 - (1 - p) ** n), Ln:Math.ceil(Math.log(1 - q / 100) / Math.log(1 - p) - 1e-9)}]; })),
    hinweise:['P(mindestens einmal) = 1 − P(keinmal).', 'Ungleichung mit ln lösen; Achtung: ln einer Zahl unter 1 ist negativ – das Zeichen dreht sich.'],
    merke:'P(mindestens ein Treffer) = 1 − (1 − p)<sup>n</sup> · „3-mal-mindestens“: 1 − (1 − p)<sup>n</sup> ≥ q ⇒ n ≥ ln(1 − q) ÷ ln(1 − p), aufrunden.'}),

  /* ======================= SP · Mehrstufige Zufallsexperimente und Pfadregeln (BPE 17.1, 17.3) ======================= */
  {
    id:'SP1', modul:'SP', typ:'berechnung', mehrfach:true, stufe:1, titel:'Baumdiagramm und Pfadregeln',
    tags:T.concat(['Stochastik', 'Baumdiagramm', 'Pfadregeln']),
    text:'Mehrstufige Zufallsexperimente lassen sich mit einem Baumdiagramm darstellen.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Pfadmultiplikationsregel: Die Wahrscheinlichkeit eines Pfades ist das Produkt der Wahrscheinlichkeiten entlang des Pfades.', richtig:true},
      {text:'Pfadadditionsregel: Die Wahrscheinlichkeit eines Ereignisses ist die Summe der Wahrscheinlichkeiten aller zugehörigen Pfade.', richtig:true},
      {text:'Die Wahrscheinlichkeiten der Äste, die von einem Verzweigungspunkt ausgehen, ergeben zusammen 1.', richtig:true},
      {text:'Beim Ziehen ohne Zurücklegen ändern sich die Wahrscheinlichkeiten auf der zweiten Stufe.', richtig:true},
      {text:'Beim Ziehen mit Zurücklegen werden die Wahrscheinlichkeiten der Stufen addiert.', fehler:'Entlang eines Pfades wird immer multipliziert; addiert werden verschiedene Pfade.'},
      {text:'Die Summe aller Pfadwahrscheinlichkeiten eines Baumdiagramms ist größer als 1.', fehler:'Sie ist genau 1 – irgendein Pfad tritt sicher ein.'}
    ],
    hinweise:['Entlang des Pfades multiplizieren, verschiedene Pfade addieren.'],
    merke:'1. Pfadregel: multiplizieren entlang des Pfades · 2. Pfadregel: addieren über die Pfade eines Ereignisses · Summe an jedem Verzweigungspunkt = 1 · mit/ohne Zurücklegen.'
  },
  blBau('rechnung', {id:'SP2', modul:'SP', stufe:1, titel:'Zweimal ziehen mit Zurücklegen', tags:T.concat(['Stochastik', 'Pfadregeln', 'mit Zurücklegen']), kopf:'Urne',
    text:W => { const w = W[0]; return `Eine Urne enthält ${w.r} rote und ${w.b} blaue Kugeln. Es wird zweimal mit Zurücklegen gezogen. Berechne die Wahrscheinlichkeiten.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('r', 'b').concat([
      {id:'rr', t:'P(zweimal rot)', e:'%', f:'(r / (r + b)) * (r / (r + b)) * 100', weg:w => `${w.r}/${w.r + w.b} · ${w.r}/${w.r + w.b} = [rr]`},
      {id:'g1', t:'P(genau eine rote)', e:'%', f:'2 * (r / (r + b)) * (b / (r + b)) * 100', weg:w => `${w.r}/${w.r + w.b} · ${w.b}/${w.r + w.b} + ${w.b}/${w.r + w.b} · ${w.r}/${w.r + w.b} = [g1]`},
      {id:'m1', t:'P(mindestens eine rote)', e:'%', f:'(1 - (b / (r + b)) * (b / (r + b))) * 100', weg:w => `1 − P(zweimal blau) = 1 − ${w.b}/${w.r + w.b} · ${w.b}/${w.r + w.b} = [m1]`}]),
    ...maMit(maSaetze(9231, 12, R => { const r = R.g(2, 7), b = R.g(2, 7); return [{r, b}]; })),
    hinweise:['Mit Zurücklegen: auf beiden Stufen dieselben Wahrscheinlichkeiten.', '„Genau eine“: zwei Pfade (rb und br).'],
    merke:'Mit Zurücklegen: unabhängige Stufen, gleiche Wahrscheinlichkeiten · genau eine: Pfade addieren · mindestens eine: Gegenereignis.'}),
  blBau('rechnung', {id:'SP3', modul:'SP', stufe:2, titel:'Zweimal ziehen ohne Zurücklegen', tags:T.concat(['Stochastik', 'Pfadregeln', 'ohne Zurücklegen']), kopf:'Urne',
    text:W => { const w = W[0]; return `Eine Urne enthält ${w.r} rote und ${w.b} blaue Kugeln. Es werden nacheinander zwei Kugeln ohne Zurücklegen gezogen. Berechne die Wahrscheinlichkeiten.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('r', 'b').concat([
      {id:'rr', t:'P(zweimal rot)', e:'%', f:'r / (r + b) * (r - 1) / (r + b - 1) * 100', weg:w => `${w.r}/${w.r + w.b} · ${w.r - 1}/${w.r + w.b - 1} = [rr]`},
      {id:'g1', t:'P(genau eine rote)', e:'%', f:'2 * r / (r + b) * b / (r + b - 1) * 100', weg:w => `${w.r}/${w.r + w.b} · ${w.b}/${w.r + w.b - 1} + ${w.b}/${w.r + w.b} · ${w.r}/${w.r + w.b - 1} = [g1]`},
      {id:'gf', t:'P(gleiche Farbe)', e:'%', f:'(r * (r - 1) + b * (b - 1)) / ((r + b) * (r + b - 1)) * 100', weg:w => `${w.r}/${w.r + w.b} · ${w.r - 1}/${w.r + w.b - 1} + ${w.b}/${w.r + w.b} · ${w.b - 1}/${w.r + w.b - 1} = [gf]`}]),
    ...maMit(maSaetze(9232, 12, R => { const r = R.g(2, 7), b = R.g(2, 7); return [{r, b}]; })),
    hinweise:['Ohne Zurücklegen: Nach dem ersten Zug ist eine Kugel weniger in der Urne.'],
    merke:'Ohne Zurücklegen: Nenner und ggf. Zähler sinken auf der zweiten Stufe um 1 · Pfadregeln gelten weiter.'}),
  blBau('rechnung', {id:'SP4', modul:'SP', stufe:2, titel:'Dreimal am Glücksrad drehen', tags:T.concat(['Stochastik', 'Pfadregeln', 'dreistufig']), kopf:'Glücksrad',
    text:W => { const w = W[0]; return `Ein Glücksrad zeigt mit der Wahrscheinlichkeit ${maZ(w.p * 100)} % „Gewinn“. Es wird dreimal gedreht. Berechne die Wahrscheinlichkeiten.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('p').concat([
      {id:'d', t:'P(dreimal Gewinn)', e:'%', f:'p * p * p * 100', weg:w => `${maZ(w.p)}³ = [d]`},
      {id:'g', t:'P(genau einmal Gewinn)', e:'%', f:'3 * p * (1 - p) * (1 - p) * 100', weg:w => `3 Pfade: 3 · ${maZ(w.p)} · ${maZ(1 - w.p)}² = [g]`},
      {id:'h', t:'P(höchstens einmal Gewinn)', e:'%', f:'((1 - p) * (1 - p) * (1 - p) + 3 * p * (1 - p) * (1 - p)) * 100', weg:w => `${maZ(1 - w.p)}³ + 3 · ${maZ(w.p)} · ${maZ(1 - w.p)}² = [h]`}]),
    ...maMit(maSaetze(9233, 12, R => [{p:R.p([0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6])}])),
    hinweise:['„Genau einmal“: GNN, NGN, NNG.', '„Höchstens einmal“: keinmal oder genau einmal.'],
    merke:'Dreistufig: 8 Pfade · genau k Treffer: Anzahl der Pfade · Pfadwahrscheinlichkeit · höchstens/mindestens: Fälle addieren oder Gegenereignis.'}),
  blBau('rechnung', {id:'SP5', modul:'SP', stufe:3, titel:'Ziehen bis zur ersten roten Kugel', tags:T.concat(['Stochastik', 'Pfadregeln', 'ohne Zurücklegen']), kopf:'Urne',
    text:W => { const w = W[0]; return `In einer Urne liegen ${w.r} rote und ${w.b} blaue Kugeln. Es wird ohne Zurücklegen gezogen, bis eine rote Kugel erscheint, höchstens aber dreimal. Berechne die Wahrscheinlichkeiten.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('r', 'b').concat([
      {id:'z1', t:'P(rot im 1. Zug)', e:'%', f:'r / (r + b) * 100', weg:w => `${w.r}/${w.r + w.b} = [z1]`},
      {id:'z2', t:'P(erste rote im 2. Zug)', e:'%', f:'b / (r + b) * r / (r + b - 1) * 100', weg:w => `${w.b}/${w.r + w.b} · ${w.r}/${w.r + w.b - 1} = [z2]`},
      {id:'z3', t:'P(erste rote im 3. Zug)', e:'%', f:'b / (r + b) * (b - 1) / (r + b - 1) * r / (r + b - 2) * 100', weg:w => `${w.b}/${w.r + w.b} · ${w.b - 1}/${w.r + w.b - 1} · ${w.r}/${w.r + w.b - 2} = [z3]`},
      {id:'k', t:'P(keine rote in drei Zügen)', e:'%', f:'b / (r + b) * (b - 1) / (r + b - 1) * (b - 2) / (r + b - 2) * 100', weg:w => `${w.b}/${w.r + w.b} · ${w.b - 1}/${w.r + w.b - 1} · ${w.b - 2}/${w.r + w.b - 2} = [k]`}]),
    ...maMit(maSaetze(9234, 12, R => [{r:R.g(1, 5), b:R.g(3, 8)}])),
    hinweise:['Das Baumdiagramm endet, sobald rot gezogen wird.', 'Kontrolle: Die vier Wahrscheinlichkeiten ergeben zusammen 100 %.'],
    merke:'Verkürztes Baumdiagramm: Pfad endet beim Erfolg · ohne Zurücklegen Zähler und Nenner anpassen · Summe aller Endpfade = 1.'}),

  /* ======================= SV · Vierfeldertafel, bedingte Wahrscheinlichkeit, Unabhängigkeit (BPE 17.3) ======================= */
  blBau('rechnung', {id:'SV1', modul:'SV', stufe:1, titel:'Vierfeldertafel ergänzen', tags:T.concat(['Stochastik', 'Vierfeldertafel']), kopf:'Vierfeldertafel',
    text:W => { const w = W[0]; return `Von ${w.N} Kunden eines Elektronikhändlers kaufen ${w.a} online (A), ${w.b} sind unter 30 Jahre alt (B), ${w.ab} sind unter 30 und kaufen online. Ergänze die Vierfeldertafel und berechne die Wahrscheinlichkeiten für einen zufällig ausgewählten Kunden.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('N', 'a', 'b', 'ab').concat([
      {id:'abq', t:'|A ∩ B̄| (online, nicht unter 30)', e:'ma', f:'a - ab', weg:w => `${w.a} − ${w.ab} = [abq]`},
      {id:'aqb', t:'|Ā ∩ B| (nicht online, unter 30)', e:'ma', f:'b - ab', weg:w => `${w.b} − ${w.ab} = [aqb]`},
      {id:'aqbq', t:'|Ā ∩ B̄|', e:'ma', f:'N - a - b + ab', weg:w => `${w.N} − ${w.a} − ${w.b} + ${w.ab} = [aqbq]`},
      {id:'pab', t:'P(A ∩ B)', e:'%', f:'ab / N * 100', weg:w => `${w.ab} ÷ ${w.N} = [pab]`},
      {id:'pu', t:'P(A ∪ B)', e:'%', f:'(a + b - ab) / N * 100', weg:w => `(${w.a} + ${w.b} − ${w.ab}) ÷ ${w.N} = [pu]`}]),
    ...maMit(maSaetze(9241, 12, R => { const N = R.p([200, 400, 500, 800, 1000]), a = N * R.p([0.3, 0.4, 0.5, 0.6]), b = N * R.p([0.25, 0.35, 0.45]), ab = Math.round(Math.min(a, b) * R.p([0.3, 0.5, 0.6, 0.7]));
      return [{N, a, b, ab}]; })),
    hinweise:['Zeilen und Spalten der Vierfeldertafel addieren sich zu den Randsummen.', 'Additionssatz: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).'],
    merke:'Vierfeldertafel: vier Felder A∩B, A∩B̄, Ā∩B, Ā∩B̄ mit Randsummen · P(A ∪ B) = P(A) + P(B) − P(A ∩ B).'}),
  blBau('zuordnung', {id:'SV2', modul:'SV', stufe:1, titel:'Welche Wahrscheinlichkeit ist gemeint?', tags:T.concat(['Stochastik', 'bedingte Wahrscheinlichkeit']),
    text:'A: „Der Kunde kauft online“, B: „Der Kunde ist unter 30“. Welche Wahrscheinlichkeit beschreibt die Aussage?',
    kategorien:['P(A ∩ B)', 'P<sub>A</sub>(B)', 'P<sub>B</sub>(A)', 'P(A ∪ B)'], anzahl:8,
    faelle:[
      {t:'Anteil der Kunden, die online kaufen und unter 30 sind', k:0}, {t:'Beide Merkmale treffen zu.', k:0},
      {t:'Anteil der unter 30-Jährigen unter den Online-Käufern', k:1}, {t:'Von den Online-Käufern ist ein Viertel unter 30.', k:1},
      {t:'Anteil der Online-Käufer unter den unter 30-Jährigen', k:2}, {t:'Wie viel Prozent der unter 30-Jährigen kaufen online?', k:2},
      {t:'Anteil der Kunden, die online kaufen oder unter 30 sind', k:3}, {t:'Mindestens eines der beiden Merkmale trifft zu.', k:3}
    ],
    hinweise:['„unter den …“ bzw. „von den …“ nennt die Bedingung.'],
    merke:'P<sub>B</sub>(A) = P(A ∩ B) ÷ P(B): Wahrscheinlichkeit von A unter der Bedingung B · „und“ ∩ · „oder“ ∪.'}),
  blBau('rechnung', {id:'SV3', modul:'SV', stufe:2, titel:'Bedingte Wahrscheinlichkeit und Unabhängigkeit', tags:T.concat(['Stochastik', 'bedingte Wahrscheinlichkeit', 'Unabhängigkeit']), kopf:'Auswertung',
    text:W => { const w = W[0]; return `Von ${w.N} Beschäftigten eines Betriebs nutzen ${w.a} das Jobrad (A), ${w.b} arbeiten in Teilzeit (B), ${w.ab} sind Teilzeitkräfte mit Jobrad. Eine Person wird zufällig ausgewählt.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('N', 'a', 'b', 'ab', 'Lu').concat([
      {id:'pa', t:'P(A)', e:'%', f:'a / N * 100', weg:w => `${w.a} ÷ ${w.N} = [pa]`},
      {id:'pb', t:'P(B)', e:'%', f:'b / N * 100', weg:w => `${w.b} ÷ ${w.N} = [pb]`},
      {id:'pba', t:'P<sub>B</sub>(A)', e:'%', f:'ab / b * 100', weg:w => `P(A ∩ B) ÷ P(B) = ${w.ab} ÷ ${w.b} = [pba]`},
      {id:'pab', t:'P<sub>A</sub>(B)', e:'%', f:'ab / a * 100', weg:w => `${w.ab} ÷ ${w.a} = [pab]`}]),
    wahl:[{id:'w', t:'Sind A und B stochastisch unabhängig?', opts:['ja, denn P(A ∩ B) = P(A) · P(B) bzw. P<sub>B</sub>(A) = P(A)', 'nein, denn P(A ∩ B) ≠ P(A) · P(B)'], r:'Lu'}],
    ...maMit(maSaetze(9242, 12, R => { const N = R.p([200, 400, 500, 1000]), a = N * R.p([0.2, 0.3, 0.4, 0.5]), b = N * R.p([0.25, 0.4, 0.5]), un = R.p([true, false]);
      const ab = un ? a * b / N : Math.round(a * b / N * R.p([0.6, 1.3, 1.5])); if (!Number.isInteger(ab) || ab > Math.min(a, b) || ab === a * b / N && !un) return null;
      return [{N, a, b, ab, Lu:Math.abs(ab * N - a * b) < 1e-9 ? 0 : 1}]; })),
    hinweise:['P<sub>B</sub>(A) = P(A ∩ B) ÷ P(B) – mit Anzahlen: |A ∩ B| ÷ |B|.', 'Unabhängig: Die Bedingung ändert die Wahrscheinlichkeit nicht.'],
    merke:'P<sub>B</sub>(A) = P(A ∩ B) ÷ P(B) · Multiplikationssatz P(A ∩ B) = P(B) · P<sub>B</sub>(A) · stochastisch unabhängig ⇔ P(A ∩ B) = P(A) · P(B) ⇔ P<sub>B</sub>(A) = P(A).'}),
  {
    id:'SV4', modul:'SV', typ:'berechnung', mehrfach:true, stufe:2, titel:'Unabhängigkeit und Additionssatz',
    tags:T.concat(['Stochastik', 'Unabhängigkeit', 'Additionssatz']),
    text:'Für zwei Ereignisse A und B gilt P(A) = 0,4 und P(B) = 0,5.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Sind A und B unabhängig, dann gilt P(A ∩ B) = 0,2.', richtig:true},
      {text:'Sind A und B unabhängig, dann gilt P(A ∪ B) = 0,4 + 0,5 − 0,2 = 0,7.', richtig:true},
      {text:'Gilt P(A ∩ B) = 0,3, dann sind A und B abhängig.', richtig:true, weg:'0,3 ≠ 0,4 · 0,5'},
      {text:'Schließen A und B einander aus, dann gilt P(A ∪ B) = 0,9.', richtig:true},
      {text:'Unabhängige Ereignisse können nie gemeinsam eintreten.', fehler:'Das gilt für unvereinbare Ereignisse; unabhängige Ereignisse treten mit P(A) · P(B) gemeinsam ein.'},
      {text:'Bei unabhängigen Ereignissen gilt P<sub>B</sub>(A) = P(B).', fehler:'Richtig ist P<sub>B</sub>(A) = P(A).'}
    ],
    hinweise:['Unabhängig ≠ unvereinbar.'],
    merke:'Unabhängigkeit: P(A ∩ B) = P(A) · P(B) · unvereinbar: P(A ∩ B) = 0 · Additionssatz P(A ∪ B) = P(A) + P(B) − P(A ∩ B).'
  },
  blBau('rechnung', {id:'SV5', modul:'SV', stufe:3, titel:'Qualitätskontrolle mit Prüfgerät', tags:T.concat(['Stochastik', 'bedingte Wahrscheinlichkeit', 'Baumdiagramm']), kopf:'Prüfgerät',
    text:W => { const w = W[0]; return `${maZ(w.d)} % der produzierten Teile sind fehlerhaft. Ein Prüfgerät schlägt bei fehlerhaften Teilen mit ${maZ(w.s)} % Wahrscheinlichkeit Alarm, bei einwandfreien Teilen fälschlich mit ${maZ(w.f)} %. Ein Teil wird zufällig geprüft.<br>a) Mit welcher Wahrscheinlichkeit gibt das Gerät Alarm?<br>b) Das Gerät gibt Alarm. Mit welcher Wahrscheinlichkeit ist das Teil tatsächlich fehlerhaft?<br>c) Das Gerät gibt keinen Alarm. Mit welcher Wahrscheinlichkeit ist das Teil einwandfrei?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('d', 's', 'f').concat([
      {id:'al', t:'P(Alarm)', e:'%', f:'(d / 100 * s / 100 + (1 - d / 100) * f / 100) * 100', weg:w => `${maZ(w.d / 100, 4)} · ${maZ(w.s / 100, 4)} + ${maZ(1 - w.d / 100, 4)} · ${maZ(w.f / 100, 4)} = [al]`},
      {id:'fa', t:'P<sub>Alarm</sub>(fehlerhaft)', e:'%', f:'d / 100 * s / 100 / (d / 100 * s / 100 + (1 - d / 100) * f / 100) * 100', weg:w => `${maZ(w.d / 100, 4)} · ${maZ(w.s / 100, 4)} ÷ P(Alarm) = [fa]`},
      {id:'ok', t:'P<sub>kein Alarm</sub>(einwandfrei)', e:'%', f:'(1 - d / 100) * (1 - f / 100) / (1 - (d / 100 * s / 100 + (1 - d / 100) * f / 100)) * 100', weg:w => `${maZ(1 - w.d / 100, 4)} · ${maZ(1 - w.f / 100, 4)} ÷ (1 − P(Alarm)) = [ok]`}]),
    ...maMit(maSaetze(9243, 12, R => [{d:R.p([2, 4, 5, 8, 10]), s:R.p([90, 95, 98]), f:R.p([2, 3, 5, 10])}])),
    hinweise:['Baumdiagramm: erste Stufe fehlerhaft/einwandfrei, zweite Stufe Alarm/kein Alarm.', 'P<sub>Alarm</sub>(fehlerhaft) = P(fehlerhaft ∩ Alarm) ÷ P(Alarm).'],
    merke:'Totale Wahrscheinlichkeit: alle Pfade zu „Alarm“ addieren · bedingte Wahrscheinlichkeit „rückwärts“: Pfadwahrscheinlichkeit ÷ Gesamtwahrscheinlichkeit · bei kleinem Fehleranteil sind viele Alarme Fehlalarme.'}),

  /* ======================= SK · Kombinatorik (BPE 17.4) ======================= */
  blBau('zuordnung', {id:'SK1', modul:'SK', stufe:1, titel:'Permutation, Variation oder Kombination?', tags:T.concat(['Stochastik', 'Kombinatorik']),
    text:'Welches Abzählverfahren passt?',
    kategorien:['Permutation n!', 'Variation nᵏ (mit Wiederholung)', 'Kombination (n über k)'], anzahl:8,
    faelle:[
      {t:'Sitzordnung von 5 Personen auf 5 Plätzen', k:0}, {t:'Reihenfolge von 8 Läufern im Ziel', k:0}, {t:'Anordnung von 6 Büchern im Regal', k:0},
      {t:'Zahlenschloss mit 4 Ringen zu je 10 Ziffern', k:1}, {t:'vierstellige PIN', k:1}, {t:'Tipp für 11 Fußballspiele mit je drei Ausgängen', k:1},
      {t:'Lotto „6 aus 49“', k:2}, {t:'3 Personen aus 10 für eine Arbeitsgruppe auswählen', k:2}, {t:'2 verschiedene Eissorten aus 12 für einen Becher wählen', k:2}
    ],
    hinweise:['Alle anordnen → n! · k-mal aus n mit Wiederholung, Reihenfolge wichtig → nᵏ · k aus n ohne Wiederholung, Reihenfolge egal → (n über k).'],
    merke:'Permutation: n! · Variation mit Wiederholung: nᵏ · Kombination ohne Wiederholung: (n über k) = n! ÷ (k! · (n − k)!).'}),
  blBau('rechnung', {id:'SK2', modul:'SK', stufe:1, titel:'Anzahlen berechnen', tags:T.concat(['Stochastik', 'Kombinatorik', 'Binomialkoeffizient']), kopf:'Anzahl',
    text:W => { const w = W[0]; return `a) Auf wie viele Arten können sich ${w.n1} Personen auf ${w.n1} Stühle setzen?<br>b) Wie viele Codes gibt es bei einem Schloss mit ${w.k2} Rädern zu je ${w.n2} Symbolen?<br>c) Wie viele Möglichkeiten gibt es, ${w.k3} aus ${w.n3} Bewerbern einzuladen?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('n1', 'n2', 'k2', 'n3', 'k3', 'La', 'Lb', 'Lc').concat([
      {id:'a', t:'a) Anzahl', e:'ma', f:'La', weg:w => `${w.n1}! = [a]`},
      {id:'b', t:'b) Anzahl', e:'ma', f:'Lb', weg:w => `${w.n2}<sup>${w.k2}</sup> = [b]`},
      {id:'c', t:'c) Anzahl', e:'ma', f:'Lc', weg:w => `(${w.n3} über ${w.k3}) = ${w.n3}! ÷ (${w.k3}! · ${w.n3 - w.k3}!) = [c]`}]),
    ...maMit(maSaetze(9251, 12, R => { const n1 = R.g(4, 7), n2 = R.p([6, 10]), k2 = R.p([3, 4]), n3 = R.g(8, 15), k3 = R.p([2, 3, 4]);
      return [{n1, n2, k2, n3, k3, La:fak(n1), Lb:n2 ** k2, Lc:C(n3, k3)}]; })),
    hinweise:['n! = 1 · 2 · … · n.', '(n über k) = n! ÷ (k! · (n − k)!).'],
    merke:'n! · nᵏ · (n über k) · Pascalsches Dreieck liefert die Binomialkoeffizienten.'}),
  blBau('rechnung', {id:'SK3', modul:'SK', stufe:2, titel:'Ziehen ohne Zurücklegen mit Kombinatorik', tags:T.concat(['Stochastik', 'Kombinatorik', 'Laplace-Formel']), kopf:'Lostrommel',
    text:W => { const w = W[0]; return `In einer Lostrommel liegen ${w.n} Lose, davon ${w.r} Gewinne. Es werden ${w.k} Lose gleichzeitig gezogen.<br>a) Wie viele Möglichkeiten gibt es insgesamt?<br>b) Wie groß ist die Wahrscheinlichkeit für genau ${w.j} Gewinn(e)?<br>c) Wie groß ist die Wahrscheinlichkeit für keinen Gewinn?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('n', 'r', 'k', 'j', 'Lm', 'Lp', 'L0').concat([
      {id:'m', t:'Anzahl aller Möglichkeiten', e:'ma', f:'Lm', weg:w => `(${w.n} über ${w.k}) = [m]`},
      {id:'p', t:'P(genau j Gewinne)', e:'%', f:'Lp', weg:w => `(${w.r} über ${w.j}) · (${w.n - w.r} über ${w.k - w.j}) ÷ (${w.n} über ${w.k}) = ${C(w.r, w.j) * C(w.n - w.r, w.k - w.j)} ÷ ${w.Lm} = [p]`},
      {id:'p0', t:'P(kein Gewinn)', e:'%', f:'L0', weg:w => `(${w.n - w.r} über ${w.k}) ÷ (${w.n} über ${w.k}) = ${C(w.n - w.r, w.k)} ÷ ${w.Lm} = [p0]`}]),
    ...maMit(maSaetze(9252, 12, R => { const n = R.g(10, 20), r = R.g(2, 5), k = R.p([3, 4]), j = R.p([1, 2]); if (j > r || k - j > n - r) return null;
      return [{n, r, k, j, Lm:C(n, k), Lp:pz(C(r, j) * C(n - r, k - j) / C(n, k)), L0:pz(C(n - r, k) / C(n, k))}]; })),
    hinweise:['Günstige Möglichkeiten: Gewinne auswählen · Nieten auswählen, dann multiplizieren.'],
    merke:'Ziehen ohne Zurücklegen, Reihenfolge egal: P(genau j Treffer) = (r über j) · (n − r über k − j) ÷ (n über k).'}),
  {
    id:'SK4', modul:'SK', typ:'berechnung', mehrfach:true, stufe:2, titel:'Binomialkoeffizient und Pascalsches Dreieck',
    tags:T.concat(['Stochastik', 'Kombinatorik', 'Binomialkoeffizient']),
    text:'Der Binomialkoeffizient (n über k) gibt an, wie viele Möglichkeiten es gibt, k Elemente aus n auszuwählen.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'(n über k) = (n über n − k), z. B. (10 über 3) = (10 über 7).', richtig:true},
      {text:'(n über 0) = (n über n) = 1.', richtig:true},
      {text:'Im Pascalschen Dreieck ist jede Zahl die Summe der beiden darüberstehenden Zahlen.', richtig:true},
      {text:'Die Summe der Zahlen in Zeile n des Pascalschen Dreiecks ist 2ⁿ.', richtig:true},
      {text:'(5 über 2) = 20.', fehler:'(5 über 2) = 5! ÷ (2! · 3!) = 10; 20 wäre die Anzahl mit Beachtung der Reihenfolge.'},
      {text:'(n über 1) = 1.', fehler:'(n über 1) = n – es gibt n Möglichkeiten, ein Element auszuwählen.'}
    ],
    hinweise:['(n über k) = n! ÷ (k! · (n − k)!).'],
    merke:'(n über k) · Symmetrie (n über k) = (n über n − k) · Pascalsches Dreieck · Zeilensumme 2ⁿ.'
  },
  blBau('rechnung', {id:'SK5', modul:'SK', stufe:3, titel:'PIN-Codes und Wahrscheinlichkeit', tags:T.concat(['Stochastik', 'Kombinatorik', 'Laplace-Formel']), kopf:'PIN',
    text:W => { const w = W[0]; return `Eine PIN besteht aus ${w.k} Ziffern (0 bis 9). Alle PINs sind gleich wahrscheinlich.<br>a) Wie viele PINs gibt es?<br>b) Wie viele PINs bestehen aus lauter verschiedenen Ziffern?<br>c) Mit welcher Wahrscheinlichkeit enthält eine zufällige PIN mindestens zwei gleiche Ziffern?<br>d) Ein Dieb darf ${w.v} Versuche machen. Mit welcher Wahrscheinlichkeit errät er die PIN?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('k', 'v', 'La', 'Lb').concat([
      {id:'a', t:'Anzahl aller PINs', e:'ma', f:'La', weg:w => `10<sup>${w.k}</sup> = [a]`},
      {id:'b', t:'PINs mit verschiedenen Ziffern', e:'ma', f:'Lb', weg:w => `${[10, 9, 8, 7, 6].slice(0, w.k).join(' · ')} = [b]`},
      {id:'p', t:'P(mindestens zwei gleiche)', e:'%', f:'(1 - Lb / La) * 100', weg:w => `1 − ${w.Lb} ÷ ${w.La} = [p]`},
      {id:'d', t:'P(Erraten)', e:'%', f:'v / La * 100', weg:w => `${w.v} ÷ ${w.La} = [d]`}]),
    ...maMit(maSaetze(9253, 12, R => { const k = R.p([3, 4, 5]), v = R.p([3, 5, 10]); return [{k, v, La:10 ** k, Lb:[10, 9, 8, 7, 6].slice(0, k).reduce((a, b) => a * b, 1)}]; })),
    hinweise:['Verschiedene Ziffern: Für jede Stelle gibt es eine Möglichkeit weniger.', '„Mindestens zwei gleiche“ ist das Gegenereignis zu „alle verschieden“.'],
    merke:'Mit Wiederholung: nᵏ · ohne Wiederholung, Reihenfolge wichtig: n · (n − 1) · … · (n − k + 1) · Gegenereignis spart Rechenarbeit.'}),

  /* ======================= SZ · Zufallsgrößen und Erwartungswert (BPE 17.5) ======================= */
  {
    id:'SZ1', modul:'SZ', typ:'berechnung', mehrfach:true, stufe:1, titel:'Zufallsgröße und Erwartungswert',
    tags:T.concat(['Stochastik', 'Zufallsgröße', 'Erwartungswert']),
    text:'Eine Zufallsgröße X ordnet jedem Ergebnis eines Zufallsexperiments eine Zahl zu, z. B. den Gewinn bei einem Spiel.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Die Wahrscheinlichkeiten aller Werte einer Zufallsgröße ergeben zusammen 1.', richtig:true},
      {text:'E(X) = x₁ · P(X = x₁) + x₂ · P(X = x₂) + … ist der Mittelwert, der sich bei sehr vielen Wiederholungen einstellt.', richtig:true},
      {text:'Ein Spiel ist fair, wenn der Erwartungswert des Reingewinns 0 ist.', richtig:true},
      {text:'Der Erwartungswert muss kein möglicher Wert von X sein, z. B. E = 3,5 beim Würfeln.', richtig:true},
      {text:'Der Erwartungswert ist der Wert, der am häufigsten auftritt.', fehler:'Das ist der wahrscheinlichste Wert; der Erwartungswert ist der langfristige Mittelwert.'},
      {text:'Ist E(Reingewinn) negativ, ist das Spiel für den Spieler günstig.', fehler:'Negativer Erwartungswert: Der Spieler verliert auf lange Sicht – günstig für den Anbieter.'}
    ],
    hinweise:['Erwartungswert = gewichteter Mittelwert.'],
    merke:'Zufallsgröße X · Wahrscheinlichkeitsverteilung (Wertetabelle) · E(X) = Σ xᵢ · P(X = xᵢ) · fair: E(Reingewinn) = 0.'
  },
  blBau('rechnung', {id:'SZ2', modul:'SZ', stufe:1, titel:'Erwartungswert eines Glücksspiels', tags:T.concat(['Stochastik', 'Erwartungswert', 'faires Spiel']), kopf:'Spiel',
    text:W => { const w = W[0]; return `Bei einem Spiel beträgt der Reingewinn X (in €): ${maZ(w.x1)} € mit ${maZ(w.p1)} %, ${maZ(w.x2)} € mit ${maZ(w.p2)} %, sonst ${maZ(w.x3)} €.<br>Ergänze die fehlende Wahrscheinlichkeit, berechne E(X) und beurteile das Spiel.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('x1', 'p1', 'x2', 'p2', 'x3', 'LE', 'Lr').concat([
      {id:'p3', t:'P(X = x₃)', e:'%', f:'100 - p1 - p2', weg:w => `100 % − ${maZ(w.p1)} % − ${maZ(w.p2)} % = [p3]`},
      {id:'e', t:'E(X)', e:'€', f:'LE', weg:w => `${maZ(w.x1)} · ${maZ(w.p1 / 100)} + ${maK(w.x2)} · ${maZ(w.p2 / 100)} + ${maK(w.x3)} · ${maZ(1 - (w.p1 + w.p2) / 100)} = [e]`}]),
    wahl:[{id:'w', t:'Beurteilung', opts:['fair (E = 0)', 'günstig für den Spieler (E > 0)', 'ungünstig für den Spieler (E < 0)'], r:'Lr'}],
    ...maMit(maSaetze(9261, 12, R => { const p1 = R.p([5, 10, 20]), p2 = R.p([20, 25, 30]), p3 = 100 - p1 - p2, x1 = R.p([10, 15, 20, 5]), x2 = R.p([2, 1, 3]);
      const fair = R.p([true, false]); let x3 = fair ? -(x1 * p1 + x2 * p2) / p3 : -R.p([1, 2, 3]); x3 = rd(x3); if (!fair && Math.abs(x1 * p1 + x2 * p2 + x3 * p3) < 1e-9) return null;
      const E = rd((x1 * p1 + x2 * p2 + x3 * p3) / 100); return [{x1, p1, x2, p2, x3, LE:E, Lr:Math.abs(E) < 0.005 ? 0 : E > 0 ? 1 : 2}]; })),
    hinweise:['Wahrscheinlichkeiten ergänzen sich zu 100 %.', 'E(X) = Summe aus Wert · Wahrscheinlichkeit.'],
    merke:'E(X) = Σ xᵢ · P(X = xᵢ) · E(Reingewinn) = 0 fair · > 0 günstig für den Spieler · < 0 ungünstig.'}),
  blBau('rechnung', {id:'SZ3', modul:'SZ', stufe:2, titel:'Glücksrad: fairer Einsatz', tags:T.concat(['Stochastik', 'Erwartungswert', 'faires Spiel']), kopf:'Glücksrad',
    text:W => { const w = W[0]; return `Auf einem Glücksrad zeigt ein Sektor mit ${maZ(w.p1)} % Wahrscheinlichkeit eine Auszahlung von ${maZ(w.a1)} €, ein Sektor mit ${maZ(w.p2)} % eine Auszahlung von ${maZ(w.a2)} €; sonst gibt es nichts. Der Einsatz beträgt ${maZ(w.e)} €.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('p1', 'a1', 'p2', 'a2', 'e').concat([
      {id:'ea', t:'erwartete Auszahlung', e:'€', f:'a1 * p1 / 100 + a2 * p2 / 100', weg:w => `${maZ(w.a1)} · ${maZ(w.p1 / 100)} + ${maZ(w.a2)} · ${maZ(w.p2 / 100)} = [ea]`},
      {id:'er', t:'erwarteter Reingewinn je Spiel', e:'€', f:'ea - e', weg:w => `[ea] − ${maZ(w.e)} = [er]`},
      {id:'f', t:'fairer Einsatz', e:'€', f:'ea', weg:'fairer Einsatz = erwartete Auszahlung = [f]'},
      {id:'g', t:'erwarteter Gewinn des Betreibers bei 500 Spielen', e:'€', f:'-er * 500', weg:'500 · (−[er]) = [g]'}]),
    ...maMit(maSaetze(9262, 12, R => [{p1:R.p([5, 10]), a1:R.p([10, 20, 15]), p2:R.p([20, 25, 30]), a2:R.p([2, 3, 1]), e:R.p([1, 2, 2.5, 3])}])),
    hinweise:['Reingewinn = Auszahlung − Einsatz.', 'Fair: Einsatz = erwartete Auszahlung.'],
    merke:'E(Auszahlung) = Σ aᵢ · pᵢ · E(Reingewinn) = E(Auszahlung) − Einsatz · fairer Einsatz = E(Auszahlung).'}),
  blBau('rechnung', {id:'SZ4', modul:'SZ', stufe:2, titel:'Wahrscheinlichkeitsverteilung aufstellen', tags:T.concat(['Stochastik', 'Wahrscheinlichkeitsverteilung', 'Erwartungswert']), kopf:'Verteilung',
    text:W => { const w = W[0]; return `Aus einer Urne mit ${w.r} roten und ${w.b} blauen Kugeln wird zweimal mit Zurücklegen gezogen. X ist die Anzahl der roten Kugeln. Stelle die Wahrscheinlichkeitsverteilung auf und berechne E(X).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('r', 'b').concat([
      {id:'p0', t:'P(X = 0)', e:'%', f:'(b / (r + b)) * (b / (r + b)) * 100', weg:w => `(${w.b}/${w.r + w.b})² = [p0]`},
      {id:'p1', t:'P(X = 1)', e:'%', f:'2 * r / (r + b) * b / (r + b) * 100', weg:w => `2 · ${w.r}/${w.r + w.b} · ${w.b}/${w.r + w.b} = [p1]`},
      {id:'p2', t:'P(X = 2)', e:'%', f:'(r / (r + b)) * (r / (r + b)) * 100', weg:w => `(${w.r}/${w.r + w.b})² = [p2]`},
      {id:'e', t:'E(X)', e:'ma', f:'2 * r / (r + b)', weg:w => `0 · P(X = 0) + 1 · P(X = 1) + 2 · P(X = 2) = [e]`}]),
    ...maMit(maSaetze(9263, 12, R => [{r:R.g(1, 6), b:R.g(1, 6)}])),
    hinweise:['Werte von X: 0, 1 oder 2 rote Kugeln.', 'Kontrolle: Die drei Wahrscheinlichkeiten ergeben 100 %.'],
    merke:'Wahrscheinlichkeitsverteilung: alle Werte von X mit ihren Wahrscheinlichkeiten (Summe 1) · E(X) = Σ xᵢ · P(X = xᵢ).'}),
  blBau('rechnung', {id:'SZ5', modul:'SZ', stufe:3, titel:'Erwartungswert, Varianz und Standardabweichung', tags:T.concat(['Stochastik', 'Varianz', 'Standardabweichung']), kopf:'Kennzahlen',
    text:W => { const w = W[0]; return `Die tägliche Zahl X der Reklamationen in einem Onlineshop hat die Verteilung: P(X = ${w.x1}) = ${maZ(w.p1)}, P(X = ${w.x2}) = ${maZ(w.p2)}, P(X = ${w.x3}) = ${maZ(w.p3)}. Berechne Erwartungswert, Varianz und Standardabweichung.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('x1', 'p1', 'x2', 'p2', 'x3', 'p3', 'LE', 'LV').concat([
      {id:'e', t:'E(X)', e:'ma', f:'LE', weg:w => `${w.x1} · ${maZ(w.p1)} + ${w.x2} · ${maZ(w.p2)} + ${w.x3} · ${maZ(w.p3)} = [e]`},
      {id:'v', t:'V(X)', e:'ma', f:'LV', weg:w => `(${w.x1} − ${maZ(w.LE)})² · ${maZ(w.p1)} + (${w.x2} − ${maZ(w.LE)})² · ${maZ(w.p2)} + (${w.x3} − ${maZ(w.LE)})² · ${maZ(w.p3)} = [v]`},
      {id:'s', t:'σ = √V(X)', e:'ma', f:'wurzel(v)', weg:'√[v] = [s]'}]),
    ...maMit(maSaetze(9264, 12, R => { const [p1, p2, p3] = R.p([[0.2, 0.5, 0.3], [0.1, 0.6, 0.3], [0.3, 0.4, 0.3], [0.25, 0.5, 0.25], [0.4, 0.4, 0.2]]), x1 = R.g(0, 2), x2 = x1 + R.g(1, 3), x3 = x2 + R.g(1, 3);
      const E = x1 * p1 + x2 * p2 + x3 * p3, V = (x1 - E) ** 2 * p1 + (x2 - E) ** 2 * p2 + (x3 - E) ** 2 * p3; return [{x1, p1, x2, p2, x3, p3, LE:rd(E), LV:rd(V)}]; })),
    hinweise:['V(X) = Σ (xᵢ − E(X))² · P(X = xᵢ).', 'σ ist die Wurzel aus der Varianz.'],
    merke:'E(X) = Σ xᵢpᵢ · V(X) = Σ (xᵢ − E)² · pᵢ · σ = √V · σ misst die Streuung um den Erwartungswert.'}),

  /* ======================= SB · Bernoulli-Kette und Binomialverteilung (BPE 17.6–17.8) ======================= */
  blBau('zuordnung', {id:'SB1', modul:'SB', stufe:1, titel:'Bernoulli-Kette oder nicht?', tags:T.concat(['Stochastik', 'Bernoulli-Kette']),
    text:'Lässt sich die Situation als Bernoulli-Kette (feste Anzahl n unabhängiger Versuche mit gleicher Trefferwahrscheinlichkeit p) beschreiben?',
    kategorien:['Bernoulli-Kette', 'keine Bernoulli-Kette'], anzahl:7,
    faelle:[
      {t:'20-mal würfeln, Treffer: Sechs', k:0}, {t:'10-mal eine Münze werfen, Treffer: Kopf', k:0},
      {t:'Ein Schüler rät bei 10 Fragen mit je 4 Antworten, Treffer: richtig', k:0},
      {t:'aus einer großen Lieferung 50 Teile prüfen (Ausschussquote 3 %), Treffer: defekt', k:0, weg:'große Grundgesamtheit: näherungsweise unabhängig'},
      {t:'aus einer Klasse mit 25 Schülern 5 ohne Zurücklegen auslosen, Treffer: Mädchen', k:1, weg:'p ändert sich von Zug zu Zug'},
      {t:'so lange würfeln, bis eine Sechs fällt', k:1, weg:'die Anzahl n der Versuche steht nicht fest'},
      {t:'Glücksrad mit drei Farben, notiert wird jedes Mal die Farbe', k:1, weg:'mehr als zwei Ausgänge betrachtet'},
      {t:'aus einer Urne mit 3 roten und 2 blauen Kugeln dreimal ohne Zurücklegen ziehen, Treffer: rot', k:1}
    ],
    hinweise:['Bernoulli-Experiment: nur Treffer oder Niete · Kette: n-mal unabhängig wiederholt, p bleibt gleich.'],
    merke:'Bernoulli-Kette der Länge n mit Trefferwahrscheinlichkeit p: zwei Ausgänge, feste Anzahl n, unabhängig, p konstant · Ziehen ohne Zurücklegen nur bei großer Grundgesamtheit näherungsweise.'}),
  blBau('rechnung', {id:'SB2', modul:'SB', stufe:1, titel:'Formel von Bernoulli', tags:T.concat(['Stochastik', 'Binomialverteilung', 'Bernoulli-Formel']), kopf:'P(X = k)',
    text:W => `X ist binomialverteilt mit n = ${W[0].n} und p = ${maZ(W[0].p)}. Berechne P(X = k) für k = ${W.map(w => w.k).join(', ')}.`,
    spalten:['①', '②', '③'],
    zeilen:[{id:'k', t:'k', e:'ma'}].concat(maAus('n', 'p', 'Lb', 'L')).concat([
      {id:'bk', t:'Binomialkoeffizient (n über k)', e:'ma', f:'Lb', weg:w => `(${w.n} über ${w.k}) = [bk]`},
      {id:'pk', t:'P(X = k)', e:'%', f:'L', weg:w => `(${w.n} über ${w.k}) · ${maZ(w.p)}<sup>${w.k}</sup> · ${maZ(1 - w.p)}<sup>${w.n - w.k}</sup> = [pk]`}]),
    ...maMit(maSaetze(9271, 12, R => { const n = R.p([5, 8, 10, 12]), p = R.p([0.1, 0.2, 0.3, 0.5, 0.25]); const k0 = R.g(0, 2);
      return [k0, k0 + 1, k0 + 3].map(k => ({n, p, k, Lb:C(n, k), L:pz(bin(n, p, k))})); })),
    hinweise:['P(X = k) = (n über k) · pᵏ · (1 − p)ⁿ⁻ᵏ.'],
    merke:'Formel von Bernoulli: P(X = k) = (n über k) · pᵏ · (1 − p)ⁿ⁻ᵏ · (n über k) zählt die Pfade mit genau k Treffern.'}),
  blBau('rechnung', {id:'SB3', modul:'SB', stufe:2, titel:'Kumulierte Wahrscheinlichkeiten', tags:T.concat(['Stochastik', 'Binomialverteilung', 'kumuliert']), kopf:'Wahrscheinlichkeit',
    text:W => { const w = W[0]; return `Ein Hersteller weiß: ${maZ(w.p * 100)} % seiner Bauteile sind fehlerhaft. In einer Stichprobe werden ${w.n} Teile geprüft; X ist die Anzahl fehlerhafter Teile (binomialverteilt). Berechne<br>a) P(X ≤ ${w.k1}), b) P(X ≥ ${w.k2}), c) P(${w.k1} &lt; X ≤ ${w.k2}).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('n', 'p', 'k1', 'k2', 'La', 'Lb', 'Lc').concat([
      {id:'a', t:'P(X ≤ k₁)', e:'%', f:'La', weg:w => `Σ von i = 0 bis ${w.k1}: P(X = i) = [a]`},
      {id:'b', t:'P(X ≥ k₂)', e:'%', f:'Lb', weg:w => `1 − P(X ≤ ${w.k2 - 1}) = [b]`},
      {id:'c', t:'P(k₁ < X ≤ k₂)', e:'%', f:'Lc', weg:w => `P(X ≤ ${w.k2}) − P(X ≤ ${w.k1}) = [c]`}]),
    ...maMit(maSaetze(9272, 12, R => { const n = R.p([10, 15, 20]), p = R.p([0.05, 0.1, 0.2]), k1 = R.g(0, 2), k2 = k1 + R.g(1, 3);
      return [{n, p, k1, k2, La:pz(cum(n, p, k1)), Lb:pz(1 - cum(n, p, k2 - 1)), Lc:pz(cum(n, p, k2) - cum(n, p, k1))}]; })),
    hinweise:['„Höchstens k“: X ≤ k aufsummieren.', '„Mindestens k“: Gegenereignis 1 − P(X ≤ k − 1).'],
    merke:'P(X ≤ k) = Σ P(X = i) (Verteilungsfunktion) · P(X ≥ k) = 1 − P(X ≤ k − 1) · P(a < X ≤ b) = P(X ≤ b) − P(X ≤ a).'}),
  blBau('rechnung', {id:'SB4', modul:'SB', stufe:2, titel:'Erwartungswert und Standardabweichung der Binomialverteilung', tags:T.concat(['Stochastik', 'Binomialverteilung', 'Erwartungswert', 'Standardabweichung']), kopf:'Kennzahlen',
    text:W => { const w = W[0]; return `Ein Callcenter erreicht bei einem Anruf mit der Wahrscheinlichkeit ${maZ(w.p * 100)} % den gewünschten Gesprächspartner. An einem Tag werden ${w.n} Anrufe getätigt; X ist die Anzahl der erfolgreichen Anrufe. Berechne Erwartungswert, Varianz und Standardabweichung und das Intervall [μ − σ; μ + σ].`; },
    spalten:['Ergebnis'],
    zeilen:maAus('n', 'p').concat([
      {id:'mu', t:'μ = E(X)', e:'ma', f:'n * p', weg:w => `${w.n} · ${maZ(w.p)} = [mu]`},
      {id:'v', t:'V(X)', e:'ma', f:'n * p * (1 - p)', weg:w => `${w.n} · ${maZ(w.p)} · ${maZ(1 - w.p)} = [v]`},
      {id:'s', t:'σ', e:'ma', f:'wurzel(v)', weg:'√[v] = [s]'},
      {id:'u', t:'μ − σ', e:'ma', f:'mu - s', weg:'[mu] − [s] = [u]'},
      {id:'o', t:'μ + σ', e:'ma', f:'mu + s', weg:'[mu] + [s] = [o]'}]),
    ...maMit(maSaetze(9273, 12, R => [{n:R.p([50, 80, 100, 120, 200]), p:R.p([0.2, 0.25, 0.3, 0.4, 0.6])}])),
    hinweise:['μ = n · p, σ² = n · p · (1 − p).'],
    merke:'Binomialverteilung: μ = n · p · V(X) = n · p · (1 − p) · σ = √(n · p · (1 − p)) · das Histogramm hat sein Maximum nahe μ, σ misst die Breite.'}),
  {
    id:'SB5', modul:'SB', typ:'berechnung', mehrfach:true, stufe:2, titel:'Histogramme deuten: Einfluss von n und p',
    tags:T.concat(['Stochastik', 'Binomialverteilung', 'Histogramm']),
    text:'Die Wahrscheinlichkeitsverteilung einer binomialverteilten Zufallsgröße wird als Histogramm dargestellt.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Bei p = 0,5 ist das Histogramm symmetrisch zu μ = n/2.', richtig:true},
      {text:'Bei p < 0,5 liegt das Maximum links von n/2 (linksgipflig).', richtig:true},
      {text:'Mit wachsendem n wird das Histogramm breiter und flacher, weil σ = √(np(1 − p)) wächst.', richtig:true},
      {text:'Die Summe aller Säulenhöhen (Wahrscheinlichkeiten) ist 1.', richtig:true},
      {text:'Der Erwartungswert ist bei der Binomialverteilung immer eine ganze Zahl.', fehler:'μ = n · p kann z. B. 2,5 sein.'},
      {text:'Bei p = 0,8 ist das Histogramm symmetrisch.', fehler:'Nur bei p = 0,5 symmetrisch; bei p = 0,8 ist es rechtsgipflig.'}
    ],
    hinweise:['Lage über μ = np, Breite über σ.'],
    merke:'p bestimmt die Lage (μ = np) und Symmetrie (nur bei p = 0,5) · n bestimmt Breite (σ wächst mit √n) · Verteilungsfunktion F(k) = P(X ≤ k) steigt treppenförmig bis 1.'
  },
  blBau('rechnung', {id:'SB6', modul:'SB', stufe:3, titel:'Unbekannte Kenngröße: Wie viele Versuche?', tags:T.concat(['Stochastik', 'Binomialverteilung', 'Kenngröße']), kopf:'Mindestanzahl',
    text:W => { const w = W[0]; return `Ein Werbeflyer führt mit ${maZ(w.p * 100)} % Wahrscheinlichkeit zu einer Bestellung. Wie viele Flyer muss man mindestens verteilen, damit mit mindestens ${w.q} % Wahrscheinlichkeit mindestens eine Bestellung eingeht? Wie groß ist diese Wahrscheinlichkeit dann genau, und wie viele Bestellungen sind dabei zu erwarten?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('p', 'q', 'Ln', 'Lp').concat([
      {id:'n', t:'Mindestanzahl n', e:'ma', f:'Ln', weg:w => `P(X ≥ 1) = 1 − ${maZ(1 - w.p, 4)}ⁿ ≥ ${maZ(w.q / 100)} ⇒ n ≥ ln(${maZ(1 - w.q / 100)}) ÷ ln(${maZ(1 - w.p, 4)}) = ${maZ(Math.log(1 - w.q / 100) / Math.log(1 - w.p))} ⇒ n = [n]`},
      {id:'pr', t:'P(X ≥ 1) bei dieser Anzahl', e:'%', f:'Lp', weg:w => `1 − ${maZ(1 - w.p, 4)}<sup>${w.Ln}</sup> = [pr]`},
      {id:'mu', t:'erwartete Anzahl Bestellungen', e:'ma', f:'Ln * p', weg:w => `μ = ${w.Ln} · ${maZ(w.p)} = [mu]`}]),
    ...maMit(maSaetze(9274, 12, R => { const p = R.p([0.02, 0.03, 0.05, 0.1, 0.08]), q = R.p([90, 95, 99]); const n = Math.ceil(Math.log(1 - q / 100) / Math.log(1 - p) - 1e-9);
      return [{p, q, Ln:n, Lp:pz(1 - (1 - p) ** n)}]; })),
    hinweise:['P(X ≥ 1) = 1 − P(X = 0) = 1 − (1 − p)ⁿ.', 'Ungleichung mit ln lösen und aufrunden.'],
    merke:'Gesucht n: 1 − (1 − p)ⁿ ≥ q ⇒ n ≥ ln(1 − q) ÷ ln(1 − p), aufrunden · Kontrolle durch Einsetzen.'}),

  /* ======================= VR · Geraden im Raum (BPE 16.1, 16.2) ======================= */
  blBau('rechnung', {id:'VR1', modul:'VR', stufe:1, titel:'Geradengleichung aus zwei Punkten', tags:T.concat(['Vektoren', 'Geraden', 'Parametergleichung']), kopf:'Koordinate',
    text:W => `Die Gerade g geht durch ${pt('A', W.map(w => w.a))} und ${pt('B', W.map(w => w.b))}. Gib eine Parametergleichung g: x→ = OA→ + t · AB→ an (Richtungsvektor AB→) und berechne den Punkt P von g für t = ${maZ(W[0].t)}.`,
    spalten:VS,
    zeilen:maAus('a', 'b', 't').concat([
      {id:'u', t:'Richtungsvektor AB→', e:'ma', f:'b - a', weg:w => `${maZ(w.b)} − ${maK(w.a)} = [u]`},
      {id:'p', t:'Punkt P (t eingesetzt)', e:'ma', f:'a + t * u', weg:w => `${maZ(w.a)} + ${maK(w.t)} · ${maK(w.b - w.a)} = [p]`}]),
    ...maMit(maSaetze(9281, 12, R => { const a = [0, 1, 2].map(() => R.g(-3, 4)), b = [0, 1, 2].map(() => R.g(-3, 5)), t = R.p([2, -1, 0.5, 3, -2]); if (a.every((v, i) => v === b[i])) return null;
      return [0, 1, 2].map(i => ({a:a[i], b:b[i], t})); })),
    hinweise:['Stützvektor: Ortsvektor eines Punktes · Richtungsvektor: Verbindungsvektor.'],
    merke:'Parametergleichung g: x→ = p→ + t · u→ (Stützvektor p→, Richtungsvektor u→, Parameter t ∈ ℝ) · jeder Wert von t liefert einen Punkt der Geraden.'}),
  blBau('rechnung', {id:'VR2', modul:'VR', stufe:2, titel:'Punktprobe bei einer Geraden', tags:T.concat(['Vektoren', 'Geraden', 'Punktprobe']), kopf:'Punktprobe',
    text:W => { const w = W[0]; return `Gegeben ist g: x→ = ${gl(w.a, w.u)} und ${pt('P', w.p)}. Prüfe, ob P auf g liegt.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'u', 'p', 'Lt', 'L2', 'L3', 'Ll').concat([
      {id:'t', t:'t aus der 1. Koordinatengleichung', e:'ma', f:'Lt', weg:w => `${maZ(w.p[0])} = ${maZ(w.a[0])} ${maVz(w.u[0])}t ⇒ t = [t]`},
      {id:'x2', t:'2. Koordinate von g für dieses t', e:'ma', f:'L2', weg:w => `${maZ(w.a[1])} + ${maK(w.Lt)} · ${maK(w.u[1])} = [x2] (P: ${maZ(w.p[1])})`},
      {id:'x3', t:'3. Koordinate von g für dieses t', e:'ma', f:'L3', weg:w => `${maZ(w.a[2])} + ${maK(w.Lt)} · ${maK(w.u[2])} = [x3] (P: ${maZ(w.p[2])})`}]),
    wahl:[{id:'w', t:'Liegt P auf g?', opts:['ja: alle drei Koordinatengleichungen liefern dasselbe t', 'nein: die Gleichungen widersprechen sich'], r:'Ll'}],
    ...maMit(maSaetze(9282, 12, R => { const a = [0, 1, 2].map(() => R.g(-3, 3)), u = [R.p([1, 2, -1, -2]), R.g(-3, 3), R.g(-3, 3)], t = R.p([1, 2, -1, 3, -2]), auf = R.p([true, false]);
      const p = a.map((v, i) => v + t * u[i]); if (!auf) p[R.p([1, 2])] += R.p([1, -1, 2]); return [{a, u, p, Lt:t, L2:a[1] + t * u[1], L3:a[2] + t * u[2], Ll:auf ? 0 : 1}]; })),
    hinweise:['P für x→ einsetzen: drei Gleichungen für t.', 'P liegt auf g, wenn alle drei dasselbe t ergeben.'],
    merke:'Punktprobe: OP→ = p→ + t · u→ als LGS mit drei Gleichungen und einer Unbekannten · eindeutig lösbar → P ∈ g · Widerspruch → P ∉ g.'}),
  blBau('rechnung', {id:'VR3', modul:'VR', stufe:2, titel:'Spurpunkt mit der x₁x₂-Ebene', tags:T.concat(['Vektoren', 'Geraden', 'Spurpunkt']), kopf:'Koordinate',
    text:W => `Gegeben ist g: x→ = ${gl(W.map(w => w.a), W.map(w => w.u))}. Berechne den Spurpunkt S der Geraden mit der x₁x₂-Ebene (x₃ = 0).`,
    spalten:VS,
    zeilen:maAus('a', 'u', 'Lt').concat([
      {id:'s', t:'Koordinate von S', e:'ma', f:'a + Lt * u', weg:w => `${maZ(w.a)} + ${maK(w.Lt)} · ${maK(w.u)} = [s]`}]),
    felder:[{id:'t', t:'Parameter t für den Spurpunkt', f:'Lt', kurz:'t', weg:(V, F, W) => `${maZ(W[2].a)} + t · ${maK(W[2].u)} = 0 ⇒ t = ${blB(maZ(W[0].Lt))}`}],
    ...maMit(maSaetze(9283, 12, R => { const u = [R.g(-3, 3), R.g(-3, 3), R.p([1, 2, -1, -2])], t = R.p([1, 2, -1, -2, 0.5, 3]), a = [R.g(-3, 3), R.g(-3, 3), -t * u[2]];
      return [0, 1, 2].map(i => ({a:a[i], u:u[i], Lt:t})); })),
    hinweise:['In der x₁x₂-Ebene ist x₃ = 0: dritte Koordinatengleichung nach t auflösen.'],
    merke:'Spurpunkte: Schnittpunkte mit den Koordinatenebenen · x₁x₂-Ebene: x₃ = 0 · x₁x₃-Ebene: x₂ = 0 · x₂x₃-Ebene: x₁ = 0 · t berechnen und einsetzen.'}),
  {
    id:'VR4', modul:'VR', typ:'berechnung', mehrfach:true, stufe:2, titel:'Lagebeziehungen von Geraden',
    tags:T.concat(['Vektoren', 'Geraden', 'Lagebeziehung']),
    text:'Zwei Geraden g: x→ = p→ + t · u→ und h: x→ = q→ + s · v→ im Raum.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Sind u→ und v→ kollinear und liegt ein Punkt von h auf g, sind die Geraden identisch.', richtig:true},
      {text:'Sind u→ und v→ kollinear und liegt kein Punkt von h auf g, sind die Geraden echt parallel.', richtig:true},
      {text:'Sind u→ und v→ nicht kollinear und hat das Gleichungssystem g = h eine Lösung, schneiden sich die Geraden.', richtig:true},
      {text:'Sind u→ und v→ nicht kollinear und hat das Gleichungssystem keine Lösung, sind die Geraden windschief.', richtig:true},
      {text:'Windschiefe Geraden gibt es auch in der Ebene.', fehler:'In der Ebene schneiden sich nicht parallele Geraden immer; windschief gibt es nur im Raum.'},
      {text:'Der Schnittwinkel zweier Geraden kann größer als 90° sein.', fehler:'Als Schnittwinkel nimmt man den kleineren Winkel: cos α = |u→ · v→| ÷ (|u→| · |v→|), also höchstens 90°.'}
    ],
    hinweise:['Erst Richtungsvektoren vergleichen, dann gleichsetzen bzw. Punktprobe.'],
    merke:'Lage zweier Geraden: identisch, echt parallel (Richtungsvektoren kollinear) · schneidend, windschief (nicht kollinear) · Schnittwinkel cos α = |u→ · v→| ÷ (|u→| · |v→|).'
  },
  blBau('rechnung', {id:'VR5', modul:'VR', stufe:3, titel:'Schnittpunkt und Schnittwinkel zweier Geraden', tags:T.concat(['Vektoren', 'Geraden', 'Schnittpunkt', 'Schnittwinkel']), kopf:'Koordinate',
    text:W => `Gegeben sind g: x→ = ${gl(W.map(w => w.a), W.map(w => w.u))} und h: x→ = ${gl(W.map(w => w.b), W.map(w => w.v), 's')}. Die Geraden schneiden sich. Bestimme t, s, den Schnittpunkt S und den Schnittwinkel.`,
    spalten:VS,
    zeilen:maAus('a', 'u', 'b', 'v', 'Lt', 'Ls', 'Lw').concat([
      {id:'s', t:'Koordinate von S', e:'ma', f:'a + Lt * u', weg:w => `${maZ(w.a)} + ${maK(w.Lt)} · ${maK(w.u)} = [s]`}]),
    felder:[
      {id:'t', t:'Parameter t', f:'Lt', kurz:'t', weg:(V, F, W) => `Gleichsetzen und das LGS aus zwei Koordinatengleichungen lösen, mit der dritten prüfen: t = ${blB(maZ(W[0].Lt))}`},
      {id:'s', t:'Parameter s', f:'Ls', kurz:'s', weg:(V, F, W) => `s = ${blB(maZ(W[0].Ls))}`},
      {id:'w', t:'Schnittwinkel (Grad)', f:'Lw', kurz:'Schnittwinkel', weg:(V, F, W) => { const u = W.map(w => w.u), v = W.map(w => w.v); return `cos α = |${maZ(dot(u, v))}| ÷ (${maZ(len(u), 4)} · ${maZ(len(v), 4)}) ⇒ α = ${blB(maZ(W[0].Lw))}°`; }}],
    ...maMit(maSaetze(9284, 12, R => { const S = [0, 1, 2].map(() => R.g(-3, 4)), u = [R.g(-2, 3), R.g(-2, 3), R.g(-2, 3)], v = [R.g(-2, 3), R.g(-2, 3), R.g(-2, 3)];
      if (!len(u) || !len(v)) return null; const cr = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]]; if (!len(cr)) return null;
      const t = R.p([1, 2, -1]), s = R.p([1, -1, 2, -2]); const a = S.map((x, i) => x - t * u[i]), b = S.map((x, i) => x - s * v[i]);
      const w = rd(grad(Math.acos(Math.abs(dot(u, v)) / (len(u) * len(v))))); return [0, 1, 2].map(i => ({a:a[i], u:u[i], b:b[i], v:v[i], Lt:t, Ls:s, Lw:w})); })),
    hinweise:['Ansatz: Stützvektor + t · Richtungsvektor = Stützvektor + s · Richtungsvektor.', 'Zwei Gleichungen lösen, dritte zur Kontrolle.'],
    merke:'Schnittpunkt: Geradengleichungen gleichsetzen, LGS (3 Gleichungen, 2 Unbekannte) lösen, t in g einsetzen · Schnittwinkel über die Richtungsvektoren.'}),

  /* ======================= VE · Ebenen, Abstände und Volumen (BPE 16.3, 16.4) ======================= */
  {
    id:'VE1', modul:'VE', typ:'berechnung', mehrfach:true, stufe:1, titel:'Ebenen in Parameterform',
    tags:T.concat(['Vektoren', 'Ebenen', 'Parameterform']),
    text:'Eine Ebene lässt sich in Parameterform E: x→ = p→ + r · u→ + s · v→ beschreiben (Stützvektor p→, Spannvektoren u→ und v→).',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Die Spannvektoren u→ und v→ dürfen nicht kollinear sein.', richtig:true},
      {text:'Durch drei Punkte, die nicht auf einer Geraden liegen, ist genau eine Ebene festgelegt.', richtig:true},
      {text:'Eine Ebene lässt sich auch aus einer Geraden und einem Punkt außerhalb der Geraden aufstellen.', richtig:true},
      {text:'Die x₁x₂-Ebene hat z. B. die Spannvektoren (1 | 0 | 0) und (0 | 1 | 0).', richtig:true},
      {text:'Für die Punktprobe bei einer Ebene genügt eine der drei Koordinatengleichungen.', fehler:'Man braucht alle drei: zwei bestimmen r und s, die dritte prüft.'},
      {text:'Zwei sich schneidende Geraden legen keine Ebene fest.', fehler:'Doch: Schnittpunkt als Stützvektor, die beiden Richtungsvektoren als Spannvektoren.'}
    ],
    hinweise:['Ebene = Stützpunkt + zwei Richtungen.'],
    merke:'Parameterform E: x→ = p→ + r · u→ + s · v→ · Aufstellen aus drei Punkten, Punkt und Gerade, zwei sich schneidenden (oder parallelen) Geraden · u→ und v→ nicht kollinear.'
  },
  blBau('rechnung', {id:'VE2', modul:'VE', stufe:1, titel:'Ebene durch drei Punkte', tags:T.concat(['Vektoren', 'Ebenen', 'Parameterform']), kopf:'Koordinate',
    text:W => `Stelle eine Parametergleichung der Ebene E durch ${pt('A', W.map(w => w.a))}, ${pt('B', W.map(w => w.b))} und ${pt('C', W.map(w => w.c))} auf (Stützvektor OA→, Spannvektoren AB→ und AC→) und berechne den Punkt für r = ${maZ(W[0].r)} und s = ${maZ(W[0].s)}.`,
    spalten:VS,
    zeilen:maAus('a', 'b', 'c', 'r', 's').concat([
      {id:'u', t:'Spannvektor AB→', e:'ma', f:'b - a', weg:w => `${maZ(w.b)} − ${maK(w.a)} = [u]`},
      {id:'v', t:'Spannvektor AC→', e:'ma', f:'c - a', weg:w => `${maZ(w.c)} − ${maK(w.a)} = [v]`},
      {id:'p', t:'Punkt für r und s', e:'ma', f:'a + r * u + s * v', weg:w => `${maZ(w.a)} + ${maK(w.r)} · ${maK(w.b - w.a)} + ${maK(w.s)} · ${maK(w.c - w.a)} = [p]`}]),
    ...maMit(maSaetze(9291, 12, R => { const a = [0, 1, 2].map(() => R.g(-2, 3)), u = [0, 1, 2].map(() => R.g(-2, 3)), v = [0, 1, 2].map(() => R.g(-2, 3));
      const cr = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]]; if (!len(cr)) return null; const r = R.p([1, 2, -1]), s = R.p([1, -1, 0.5]);
      return [0, 1, 2].map(i => ({a:a[i], b:a[i] + u[i], c:a[i] + v[i], r, s})); })),
    hinweise:['Spannvektoren: AB→ = B − A und AC→ = C − A.'],
    merke:'Ebene durch A, B, C: x→ = OA→ + r · AB→ + s · AC→ · jedes Paar (r, s) liefert einen Punkt der Ebene.'}),
  blBau('rechnung', {id:'VE3', modul:'VE', stufe:2, titel:'Punktprobe bei einer Ebene', tags:T.concat(['Vektoren', 'Ebenen', 'Punktprobe']), kopf:'Punktprobe',
    text:W => { const w = W[0]; return `Gegeben ist E: x→ = ${cv(w.a)} + r · ${cv(w.u)} + s · ${cv(w.v)} und ${pt('P', w.p)}. Bestimme r und s aus den ersten beiden Koordinatengleichungen und prüfe mit der dritten, ob P in E liegt.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'u', 'v', 'p', 'Lr', 'Ls', 'L3', 'Ll').concat([
      {id:'r', t:'r', e:'ma', f:'Lr', weg:w => `I: ${maZ(w.p[0] - w.a[0])} = ${maZ(w.u[0])}r ${maVz(w.v[0])}s · II: ${maZ(w.p[1] - w.a[1])} = ${maZ(w.u[1])}r ${maVz(w.v[1])}s ⇒ r = [r]`},
      {id:'s', t:'s', e:'ma', f:'Ls', weg:'s = [s]'},
      {id:'x3', t:'3. Koordinate der Ebene für r und s', e:'ma', f:'L3', weg:w => `${maZ(w.a[2])} + ${maK(w.Lr)} · ${maK(w.u[2])} + ${maK(w.Ls)} · ${maK(w.v[2])} = [x3] (P hat x₃ = ${maZ(w.p[2])})`}]),
    wahl:[{id:'w', t:'Liegt P in E?', opts:['ja', 'nein'], r:'Ll'}],
    ...maMit(maSaetze(9292, 12, R => { const a = [0, 1, 2].map(() => R.g(-2, 3)), u = [R.p([1, 2]), R.g(-1, 2), R.g(-2, 2)], v = [R.g(-1, 1), R.p([1, 2, -1]), R.g(-2, 2)];
      if (Math.abs(u[0] * v[1] - u[1] * v[0]) < 1e-9) return null; const r = R.g(-2, 2), s = R.g(-2, 2), auf = R.p([true, false]);
      const p = a.map((x, i) => x + r * u[i] + s * v[i]); if (!auf) p[2] += R.p([1, -1, 2]); return [{a, u, v, p, Lr:r, Ls:s, L3:a[2] + r * u[2] + s * v[2], Ll:auf ? 0 : 1}]; })),
    hinweise:['P einsetzen: drei Gleichungen mit zwei Unbekannten.', 'Zwei Gleichungen lösen, die dritte prüft.'],
    merke:'Punktprobe Ebene: OP→ = p→ + r · u→ + s · v→ · zwei Gleichungen für r und s, dritte als Probe · Widerspruch → P liegt nicht in E.'}),
  blBau('rechnung', {id:'VE4', modul:'VE', stufe:2, titel:'Abstände und Volumen einer Pyramide', tags:T.concat(['Vektoren', 'Abstand', 'Volumen']), kopf:'Pyramide',
    text:W => { const w = W[0]; return `Die Grundfläche einer Pyramide ist das Rechteck ABCD mit ${pt('A', [w.x, w.y, 0])}, ${pt('B', [w.x + w.l, w.y, 0])}, ${pt('C', [w.x + w.l, w.y + w.b, 0])} und ${pt('D', [w.x, w.y + w.b, 0])} in der x₁x₂-Ebene; die Spitze ist ${pt('S', [w.sx, w.sy, w.h])}.<br>a) Berechne die Länge der Kante AS.<br>b) Gib den Abstand von S zur x₁x₂-Ebene an.<br>c) Berechne das Volumen der Pyramide und des Quaders mit gleicher Grundfläche und Höhe.`; },
    spalten:['Ergebnis'],
    zeilen:maAus('x', 'y', 'l', 'b', 'sx', 'sy', 'h', 'La').concat([
      {id:'as', t:'Länge |AS|', e:'ma', f:'La', weg:w => `√(${maK(w.sx - w.x)}² + ${maK(w.sy - w.y)}² + ${maK(w.h)}²) = [as]`},
      {id:'d', t:'Abstand von S zur x₁x₂-Ebene', e:'ma', f:'h', weg:'Betrag der x₃-Koordinate: [d]'},
      {id:'g', t:'Grundfläche G', e:'ma', f:'l * b', weg:w => `${maZ(w.l)} · ${maZ(w.b)} = [g]`},
      {id:'vp', t:'Volumen der Pyramide', e:'ma', f:'g * h / 3', weg:'⅓ · [g] · [d] = [vp]'},
      {id:'vq', t:'Volumen des Quaders', e:'ma', f:'g * h', weg:'[g] · [d] = [vq]'}]),
    ...maMit(maSaetze(9293, 12, R => { const x = R.g(-2, 2), y = R.g(-2, 2), l = R.g(2, 6), b = R.g(2, 5), sx = x + R.g(0, l), sy = y + R.g(0, b), h = R.g(3, 8);
      return [{x, y, l, b, sx, sy, h, La:rd(len([sx - x, sy - y, h]))}]; })),
    hinweise:['Abstand zweier Punkte = Betrag des Verbindungsvektors.', 'Abstand zur x₁x₂-Ebene = |x₃|.', 'V<sub>Pyramide</sub> = ⅓ · G · h.'],
    merke:'Abstand Punkt–Punkt: |PQ→| · Punkt–Koordinatenebene: Betrag der fehlenden Koordinate · V<sub>Quader</sub> = G · h · V<sub>Pyramide</sub> = ⅓ · G · h.'}),
  blBau('rechnung', {id:'VE5', modul:'VE', stufe:3, titel:'Abstand eines Punktes von einer Geraden', tags:T.concat(['Vektoren', 'Abstand', 'Lotfußpunkt']), kopf:'Koordinate',
    text:W => `Gegeben sind g: x→ = ${gl(W.map(w => w.a), W.map(w => w.u))} und ${pt('P', W.map(w => w.p))}. Bestimme den Lotfußpunkt F von P auf g (Bedingung PF→ · u→ = 0) und den Abstand von P zu g.`,
    spalten:VS,
    zeilen:maAus('a', 'u', 'p', 'Lt', 'Ld').concat([
      {id:'f', t:'Koordinate von F', e:'ma', f:'a + Lt * u', weg:w => `${maZ(w.a)} + ${maK(w.Lt)} · ${maK(w.u)} = [f]`},
      {id:'pf', t:'Koordinate von PF→', e:'ma', f:'f - p', weg:w => `[f] − ${maK(w.p)} = [pf]`}]),
    felder:[
      {id:'t', t:'Parameter t von F', f:'Lt', kurz:'t', weg:(V, F, W) => { const a = W.map(w => w.a), u = W.map(w => w.u), p = W.map(w => w.p); return `(OA→ + t · u→ − OP→) · u→ = 0 ⇒ t = ${maZ(dot(p.map((x, i) => x - a[i]), u))} ÷ ${maZ(dot(u, u))} = ${blB(maZ(W[0].Lt))}`; }},
      {id:'d', t:'Abstand d(P, g)', f:'Ld', kurz:'Abstand', weg:(V, F, W) => `|PF→| = ${blB(maZ(W[0].Ld))}`}],
    ...maMit(maSaetze(9294, 12, R => { const a = [0, 1, 2].map(() => R.g(-2, 3)), u = [R.g(-2, 2), R.g(-2, 2), R.p([1, 2, -1])], t = R.p([1, 2, -1, 0.5]);
      const n0 = [R.g(-3, 3), R.g(-3, 3), 0]; n0[2] = -(n0[0] * u[0] + n0[1] * u[1]) / u[2]; if (!len(n0) || Math.abs(n0[2] * 2 - Math.round(n0[2] * 2)) > 1e-9) return null;
      const F = a.map((x, i) => x + t * u[i]), p = F.map((x, i) => x + n0[i]); const d = rd(len(n0)); return [0, 1, 2].map(i => ({a:a[i], u:u[i], p:p[i], Lt:t, Ld:d})); })),
    hinweise:['F = OA→ + t · u→ allgemein ansetzen.', 'PF→ steht senkrecht auf u→: Skalarprodukt = 0 ergibt t.'],
    merke:'Abstand Punkt–Gerade: Lotfußpunkt F mit PF→ · u→ = 0, dann d = |PF→| · t = (OP→ − OA→) · u→ ÷ (u→ · u→).'}),
  {
    id:'VE6', modul:'VE', typ:'berechnung', mehrfach:true, stufe:2, titel:'Besondere Lage im Koordinatensystem',
    tags:T.concat(['Vektoren', 'Geraden', 'Ebenen', 'besondere Lage']),
    text:'An den Koordinaten von Stütz- und Richtungsvektoren lässt sich die Lage im Koordinatensystem erkennen.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Hat der Richtungsvektor einer Geraden die x₃-Koordinate 0, verläuft die Gerade parallel zur x₁x₂-Ebene.', richtig:true},
      {text:'Die Gerade x→ = t · (0 | 0 | 1) ist die x₃-Achse.', richtig:true},
      {text:'Eine Ebene, deren Punkte alle x₃ = 4 haben, ist parallel zur x₁x₂-Ebene.', richtig:true},
      {text:'Eine Gerade mit Stützpunkt in der x₁x₂-Ebene und Richtungsvektor (0 | 0 | 1) verläuft parallel zur x₃-Achse.', richtig:true},
      {text:'Eine Gerade mit Richtungsvektor (1 | 2 | 0) schneidet die x₁x₂-Ebene in genau einem Punkt.', fehler:'Sie ist parallel zur x₁x₂-Ebene: Entweder liegt sie darin oder sie hat keinen gemeinsamen Punkt.'},
      {text:'Jede Ebene hat genau drei Spurpunkte mit den Koordinatenachsen.', fehler:'Ebenen parallel zu einer Achse haben weniger Spurpunkte; Ebenen durch den Ursprung haben nur einen.'}
    ],
    hinweise:['Null in einer Koordinate des Richtungsvektors → keine Bewegung in diese Richtung.'],
    merke:'Besondere Lage: Richtungsvektor mit x₃ = 0 → parallel zur x₁x₂-Ebene · Richtungsvektor parallel zu einer Achse → Gerade parallel zur Achse · Ebene x₃ = c → parallel zur x₁x₂-Ebene.'
  }
  ];
})(),
/* ---------- Mathematik · Ergänzungen für das Wirtschaftsgymnasium: kleine Module auf mindestens fünf Aufgaben ----------
   TB4–5 Bogenmaß · TV5 Tageslänge · DT5 Tangente an f(x) = a/x · DW5 Bedingungen für Wendepunkte · DG5 grafisches Differenzieren
   IF5 Fläche unter einer nach unten geöffneten Parabel · IR4–5 Bestandsrekonstruktion. Neu am 06.11.2026. */
...(() => {
  const T = ['Mathematik'];
  const NR = ['①', '②', '③'];
  const rd = v => { const r = maR(v); return Math.abs(r) < 1e-9 ? 0 : r; };
  return [
  {
    id:'TB4', modul:'TB', typ:'berechnung', mehrfach:true, stufe:2, titel:'Bogenmaß und Einheitskreis',
    tags:T.concat(['Bogenmaß', 'Einheitskreis']),
    text:'Im Einheitskreis (Radius 1) ist das Bogenmaß x eines Winkels die Länge des zugehörigen Kreisbogens. Für einen Punkt P auf dem Kreis gilt P(cos x | sin x).',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'180° entsprechen π, also gilt x = α · π ÷ 180°.', richtig:true},
      {text:'Der volle Kreis hat das Bogenmaß 2π ≈ 6,28.', richtig:true},
      {text:'sin(x) ist die y-Koordinate, cos(x) die x-Koordinate des Punktes auf dem Einheitskreis.', richtig:true},
      {text:'Für alle x gilt sin²(x) + cos²(x) = 1.', richtig:true, weg:'Satz des Pythagoras im Einheitskreis'},
      {text:'Das Bogenmaß 1 entspricht genau 1°.', fehler:'1 im Bogenmaß entspricht 180° ÷ π ≈ 57,3°.'},
      {text:'sin(π) = 1.', fehler:'sin(π) = 0; sin(π/2) = 1.'}
    ],
    hinweise:['Taschenrechner auf RAD stellen, wenn mit Bogenmaß gerechnet wird.'],
    merke:'x = α · π ÷ 180° · α = x · 180° ÷ π · P(cos x | sin x) · sin² x + cos² x = 1 · Perioden von sin und cos: 2π.'
  },
  blBau('rechnung', {id:'TB5', modul:'TB', stufe:2, titel:'Sinus- und Kosinuswerte im Bogenmaß', tags:T.concat(['Bogenmaß', 'Sinus', 'Kosinus']), kopf:'Werte',
    text:W => `Rechne in Gradmaß um und berechne sin(x) und cos(x) (Taschenrechner im Bogenmaß, zwei Nachkommastellen):<br>${W.map((w, i) => `${NR[i]} x = ${maZ(w.x)}`).join(' · ')}`,
    spalten:['①', '②', '③'],
    zeilen:maAus('x', 'Ls', 'Lc', 'Lg').concat([
      {id:'g', t:'Gradmaß α', e:'ma', f:'Lg', weg:w => `${maZ(w.x)} · 180° ÷ π = [g]°`},
      {id:'s', t:'sin(x)', e:'ma', f:'Ls', weg:w => `sin(${maZ(w.x)}) = [s]`},
      {id:'c', t:'cos(x)', e:'ma', f:'Lc', weg:w => `cos(${maZ(w.x)}) = [c]`}]),
    ...maMit(maSaetze(9301, 12, R => { const xs = [0, 1, 2].map(() => R.p([0.5, 1, 1.5, 2, 2.5, 3, 4, 5, -1, -2])); if (new Set(xs).size < 3) return null; return xs.map(x => ({x, Ls:rd(Math.sin(x)), Lc:rd(Math.cos(x)), Lg:rd(x * 180 / Math.PI)})); })),
    hinweise:['α = x · 180° ÷ π.', 'sin und cos im RAD-Modus berechnen.'],
    merke:'Bogenmaß ↔ Gradmaß: α = x · 180° ÷ π · Werte von sin und cos liegen immer zwischen −1 und 1.'}),
  blBau('rechnung', {id:'TV5', modul:'TV', stufe:2, titel:'Anwendung: Tageslänge im Jahresverlauf', tags:T.concat(['trigonometrische Funktion', 'Anwendung']), kopf:'Tageslänge',
    text:W => { const w = W[0]; return `Die Tageslänge (in Stunden) an einem Ort wird beschrieben durch <i>d</i>(t) = ${maZ(w.a)} · sin(2π/365 · (t − 80)) + 12, t in Tagen ab Jahresbeginn.<br>Gib die längste und die kürzeste Tageslänge sowie die Periode an und berechne d(${w.t1}).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 't1', 'Ld').concat([
      {id:'mx', t:'längste Tageslänge (h)', e:'ma', f:'12 + a', weg:w => `12 + ${maZ(w.a)} = [mx]`},
      {id:'mn', t:'kürzeste Tageslänge (h)', e:'ma', f:'12 - a', weg:w => `12 − ${maZ(w.a)} = [mn]`},
      {id:'p', t:'Periode (Tage)', e:'ma', f:'365', weg:'p = 2π ÷ (2π/365) = [p]'},
      {id:'dt', t:'d(t₁) (h)', e:'ma', f:'Ld', weg:w => `${maZ(w.a)} · sin(2π/365 · ${w.t1 - 80}) + 12 = [dt]`}]),
    ...maMit(maSaetze(9302, 12, R => { const a = R.p([3, 3.5, 4, 4.5]), t1 = R.p([30, 120, 172, 250, 300]); return [{a, t1, Ld:rd(a * Math.sin(2 * Math.PI / 365 * (t1 - 80)) + 12)}]; })),
    hinweise:['Amplitude a: Abweichung von der Mittellinie 12.', 'Periode p = 2π ÷ b.'],
    merke:'f(t) = a · sin(b(t − c)) + d: Amplitude |a|, Periode 2π ÷ b, Verschiebung c nach rechts, Mittellinie y = d · Maximum d + |a|, Minimum d − |a|.'}),
  blBau('rechnung', {id:'DT5', modul:'DT', stufe:2, titel:'Tangente an das Schaubild von f(x) = a/x', tags:T.concat(['Tangente', 'Potenzfunktion']), kopf:'Tangente',
    text:W => { const w = W[0]; return `Gegeben ist <i>f</i>(x) = ${maZ(w.a)}/x = ${maZ(w.a)} · x<sup>−1</sup>. Bestimme die Tangente im Punkt P(${maZ(w.x0)} | f(${maZ(w.x0)})).`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'x0', 'Ly', 'Lm', 'Lb').concat([
      {id:'y', t:'f(x₀)', e:'ma', f:'Ly', weg:w => `${maZ(w.a)} ÷ ${maK(w.x0)} = [y]`},
      {id:'m', t:'Steigung m = f′(x₀)', e:'ma', f:'Lm', weg:w => `f′(x) = −${maZ(w.a)} · x<sup>−2</sup> = −${maZ(w.a)}/x² ⇒ f′(${maZ(w.x0)}) = [m]`},
      {id:'b', t:'y-Achsenabschnitt b', e:'ma', f:'Lb', weg:w => `b = ${maZ(w.Ly)} − ${maK(w.Lm)} · ${maK(w.x0)} = [b]`}]),
    ...maMit(maSaetze(9303, 12, R => { const a = R.p([1, 2, 4, 6, -2]), x0 = R.p([1, 2, -1, -2, 0.5]); const y = a / x0, m = -a / (x0 * x0); return [{a, x0, Ly:rd(y), Lm:rd(m), Lb:rd(rd(y) - rd(m) * x0)}]; })),
    hinweise:['Potenzregel gilt auch für negative Hochzahlen: (x<sup>n</sup>)′ = n · x<sup>n − 1</sup>.'],
    merke:'(a/x)′ = −a/x² · Potenzregel auch für n ∈ ℤ und gebrochene Hochzahlen (z. B. (√x)′ = 1 ÷ (2√x)) · Tangente: y = f′(x₀)(x − x₀) + f(x₀).'}),
  {
    id:'DW5', modul:'DW', typ:'berechnung', mehrfach:true, stufe:2, titel:'Bedingungen für Wendepunkte',
    tags:T.concat(['Wendepunkt', 'Krümmung']),
    text:'An einem Wendepunkt ändert das Schaubild sein Krümmungsverhalten.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Notwendige Bedingung: f″(x₀) = 0.', richtig:true},
      {text:'Hinreichend: f″(x₀) = 0 und f‴(x₀) ≠ 0 oder f″ wechselt bei x₀ das Vorzeichen.', richtig:true},
      {text:'Im Wendepunkt hat f′ ein lokales Extremum – dort ist die Steigung lokal am größten oder am kleinsten.', richtig:true},
      {text:'Ein Wendepunkt mit waagerechter Tangente heißt Sattelpunkt.', richtig:true},
      {text:'Aus f″(x₀) = 0 folgt immer ein Wendepunkt.', fehler:'Gegenbeispiel f(x) = x⁴: f″(0) = 0, aber kein Wendepunkt (kein Vorzeichenwechsel von f″).'},
      {text:'Ist f″(x) > 0, ist das Schaubild rechtsgekrümmt.', fehler:'f″ > 0: linksgekrümmt; f″ < 0: rechtsgekrümmt.'}
    ],
    hinweise:['Krümmung: f″ > 0 links, f″ < 0 rechts.'],
    merke:'Wendepunkt: f″(x₀) = 0 und Vorzeichenwechsel von f″ (bzw. f‴(x₀) ≠ 0) · Sattelpunkt: zusätzlich f′(x₀) = 0 · Wendepunkt = Stelle extremer Steigung.'
  },
  {
    id:'DG5', modul:'DG', typ:'berechnung', mehrfach:true, stufe:2, titel:'Grafisches Differenzieren',
    tags:T.concat(['Ableitungsschaubild', 'grafisches Differenzieren']),
    text:'Aus dem Schaubild von f lässt sich das Schaubild von f′ skizzieren, ohne den Funktionsterm zu kennen.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'Wo f einen Hoch- oder Tiefpunkt hat, hat f′ eine Nullstelle.', richtig:true},
      {text:'Wo f steigt, verläuft f′ oberhalb der x-Achse.', richtig:true},
      {text:'Wo f einen Wendepunkt hat, hat f′ einen Hoch- oder Tiefpunkt.', richtig:true},
      {text:'Ist f eine Polynomfunktion 3. Grades, ist f′ eine Parabel.', richtig:true},
      {text:'Wo f eine Nullstelle hat, hat auch f′ eine Nullstelle.', fehler:'Nullstellen von f haben mit f′ nichts zu tun; f′ = 0 bei waagerechten Tangenten.'},
      {text:'Wo f fällt, ist f′ fallend.', fehler:'Wo f fällt, ist f′ negativ – ob f′ dort fällt oder steigt, hängt von der Krümmung von f ab.'}
    ],
    hinweise:['f′(x) ist die Steigung von f an der Stelle x.'],
    merke:'Grafisch differenzieren: Steigungen von f ablesen und als y-Werte von f′ eintragen · Extremstelle von f → Nullstelle von f′ · Wendestelle von f → Extremstelle von f′ · Grad sinkt um 1.'
  },
  blBau('rechnung', {id:'IF5', modul:'IF', stufe:1, titel:'Fläche unter einem Parabelbogen', tags:T.concat(['Flächeninhalt', 'Integral']), kopf:'Fläche',
    text:W => `Berechne jeweils den Inhalt der Fläche, die das Schaubild mit der x-Achse einschließt:<br>${W.map((w, i) => `${NR[i]} <i>f</i>(x) = ${maPoly([-w.a, 0, w.a * w.k * w.k])}`).join('<br>')}`,
    spalten:['①', '②', '③'],
    zeilen:maAus('a', 'k', 'L').concat([
      {id:'n', t:'rechte Nullstelle', e:'ma', f:'k', weg:w => `${maZ(w.a)}(${maZ(w.k * w.k)} − x²) = 0 ⇒ x = ±[n]`},
      {id:'A', t:'Flächeninhalt', e:'ma', f:'L', weg:w => `A = ∫ von −${maZ(w.k)} bis ${maZ(w.k)}: f(x) dx = 2 · [${maZ(w.a * w.k * w.k)}x − ${maZ(w.a / 3, 4)}x³] von 0 bis ${maZ(w.k)} = [A]`}]),
    ...maMit(maSaetze(9304, 12, R => [0, 1, 2].map(() => { const a = R.p([1, 0.5, 2, 3]), k = R.p([1, 2, 3]); return {a, k, L:rd(4 / 3 * a * k ** 3)}; }))),
    hinweise:['Grenzen sind die Nullstellen.', 'Symmetrie: doppeltes Integral von 0 bis zur rechten Nullstelle.'],
    merke:'Fläche mit der x-Achse: Nullstellen als Grenzen, Integral berechnen (oberhalb positiv) · Symmetrie nutzen.'}),
  blBau('rechnung', {id:'IR4', modul:'IR', stufe:1, titel:'Füllmenge aus einer linearen Zuflussrate', tags:T.concat(['Bestandsrekonstruktion', 'Änderungsrate']), kopf:'Bestand',
    text:W => { const w = W[0]; return `In einen Tank fließt Öl mit der Rate r(t) = ${maZ(w.a)} − ${maZ(w.b)}t (Liter pro Minute, t in Minuten). Zu Beginn sind ${maZ(w.b0)} Liter im Tank.<br>a) Wann ist der Zufluss beendet (r(t) = 0)?<br>b) Wie viel Öl fließt bis dahin zu, und wie viel ist dann im Tank?`; },
    spalten:['Ergebnis'],
    zeilen:maAus('a', 'b', 'b0').concat([
      {id:'te', t:'Ende des Zuflusses (min)', e:'ma', f:'a / b', weg:w => `${maZ(w.a)} − ${maZ(w.b)}t = 0 ⇒ t = [te]`},
      {id:'z', t:'zugeflossene Menge (l)', e:'ma', f:'a * a / (2 * b)', weg:w => `∫ von 0 bis ${maZ(w.a / w.b)}: (${maZ(w.a)} − ${maZ(w.b)}t) dt = [z]`},
      {id:'B', t:'Bestand am Ende (l)', e:'ma', f:'b0 + z', weg:w => `${maZ(w.b0)} + [z] = [B]`}]),
    ...maMit(maSaetze(9305, 12, R => [{a:R.p([20, 30, 40, 60]), b:R.p([1, 2, 4, 5]), b0:R.p([100, 200, 500])}])),
    hinweise:['Zuflussmenge = Integral der Rate = Fläche unter dem Schaubild der Rate (hier ein Dreieck).'],
    merke:'Bestand(t) = Anfangsbestand + ∫ Änderungsrate · Fläche unter der Ratenkurve = Gesamtänderung.'}),
  {
    id:'IR5', modul:'IR', typ:'berechnung', mehrfach:true, stufe:2, titel:'Integral als Bestandsänderung deuten',
    tags:T.concat(['Bestandsrekonstruktion', 'Deutung']),
    text:'r(t) beschreibt die Änderungsrate eines Bestandes B(t), z. B. Zuflussrate in Litern pro Minute.',
    frage:'Welche Aussagen treffen zu?',
    optionen:[
      {text:'∫ von a bis b: r(t) dt ist die Änderung des Bestandes zwischen a und b.', richtig:true},
      {text:'Ist r(t) negativ, nimmt der Bestand ab.', richtig:true},
      {text:'Der Bestand ist dort maximal, wo r(t) von positiv zu negativ wechselt.', richtig:true},
      {text:'B(t) = B(0) + ∫ von 0 bis t: r(s) ds.', richtig:true},
      {text:'Der Bestand ist dort am größten, wo die Rate r(t) am größten ist.', fehler:'Dort wächst der Bestand am schnellsten; am größten ist er, wenn die Rate auf 0 sinkt und negativ wird.'},
      {text:'Das Integral einer Rate ergibt immer den Bestand selbst, auch ohne Anfangsbestand.', fehler:'Das Integral liefert nur die Änderung; der Anfangsbestand muss addiert werden.'}
    ],
    hinweise:['Rate = Ableitung des Bestandes.'],
    merke:'Rate r = B′ · Integral der Rate = Änderung des Bestandes · Bestand = Anfangsbestand + Integral · Maximum des Bestandes bei Vorzeichenwechsel der Rate von + nach −.'
  }
  ];
})(),
/* Labor-Aufgaben: eingebettete Werkstätten aus quellen/labor (Stufe „Labor“) */
{
  id:'TRLAB', modul:'TR', typ:'labor', stufe:9, labor:'funktionen', titel:'Labor: Funktions-Labor',
  tags:['Funktionen','Labor'],
  text:'Verändere die Parameter von Parabel, e-Funktion, Sinus und Kosinus und beobachte das Schaubild. Die Werkstatt reagiert sofort auf jede Änderung. Erfülle die Aufträge – sie haken sich automatisch ab. Das Labor zählt nicht für die Medaillen.'
},
{
  id:'PFLAB', modul:'PF', typ:'labor', stufe:9, labor:'nullstellen', titel:'Labor: Nullstellen-Baukasten',
  tags:['Polynomfunktionen','Nullstellen','Labor'],
  text:'Baue Polynome aus Linearfaktoren und untersuche die Vielfachheit von Nullstellen. Die Werkstatt reagiert sofort auf jede Änderung. Erfülle die Aufträge – sie haken sich automatisch ab. Das Labor zählt nicht für die Medaillen.'
},
{
  id:'TFLAB', modul:'TF', typ:'labor', stufe:9, labor:'einheitskreis', titel:'Labor: Einheitskreis und Sinuskurve',
  tags:['Trigonometrie','Labor'],
  text:'Bewege den Punkt auf dem Einheitskreis und verfolge, wie die Sinus- und Kosinuskurve entsteht. Die Werkstatt reagiert sofort auf jede Änderung. Erfülle die Aufträge – sie haken sich automatisch ab. Das Labor zählt nicht für die Medaillen.'
},
{
  id:'GLLAB', modul:'GL', typ:'labor', stufe:9, labor:'halbierung', titel:'Labor: Intervallhalbierung',
  tags:['Gleichungen','Näherungsverfahren','Labor'],
  text:'Kreise eine Nullstelle durch Halbieren des Intervalls immer genauer ein. Die Werkstatt reagiert sofort auf jede Änderung. Erfülle die Aufträge – sie haken sich automatisch ab. Das Labor zählt nicht für die Medaillen.'
},
{
  id:'DALAB', modul:'DA', typ:'labor', stufe:9, labor:'tangente', titel:'Labor: Von der Sekante zur Tangente',
  tags:['Ableitung','Labor'],
  text:'Lass den zweiten Punkt zum ersten wandern: Aus der Sekantensteigung wird die Ableitung. Die Werkstatt reagiert sofort auf jede Änderung. Erfülle die Aufträge – sie haken sich automatisch ab. Das Labor zählt nicht für die Medaillen.'
},
{
  id:'IBLAB', modul:'IB', typ:'labor', stufe:9, labor:'flaeche', titel:'Labor: Ober- und Untersumme',
  tags:['Integral','Labor'],
  text:'Verfeinere die Zerlegung und beobachte, wie Ober- und Untersumme gegen das Integral streben. Die Werkstatt reagiert sofort auf jede Änderung. Erfülle die Aufträge – sie haken sich automatisch ab. Das Labor zählt nicht für die Medaillen.'
},
{
  id:'LSLAB', modul:'LS', typ:'labor', stufe:9, labor:'gauss', titel:'Labor: Gauß-Werkstatt',
  tags:['Gauß-Verfahren','Labor'],
  text:'Löse lineare Gleichungssysteme durch Zeilenumformungen – mit Tipps und Lösungsprüfung. Die Werkstatt reagiert sofort auf jede Änderung. Erfülle die Aufträge – sie haken sich automatisch ab. Das Labor zählt nicht für die Medaillen.'
},

];

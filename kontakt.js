/* Kontaktdaten obfuskiert (ROT13 + umgekehrt), Zusammenbau erst im Browser.
   Schutz gegen einfache E-Mail-/Telefon-Harvester, die kein JavaScript ausfuehren.
   Aendern: neuen Wert mit ROT13 codieren, dann Zeichenreihenfolge umkehren. */
(function () {
  function dec(s) {
    var r = s.split('').reverse().join('');
    return r.replace(/[A-Za-z]/g, function (c) {
      var b = c <= 'Z' ? 65 : 97;
      return String.fromCharCode((c.charCodeAt(0) - b + 13) % 26 + b);
    });
  }
  function fill(id, href, text) {
    var el = document.getElementById(id);
    if (!el) return;
    el.textContent = '';
    var a = document.createElement('a');
    a.href = href;
    a.textContent = text;
    el.appendChild(a);
  }
  var mail = dec('zbp.yvnzt@991aerxp');
  fill('k-mail', 'mailto:' + mail, mail);
  var tel = dec('495145711510');
  var disp = tel.slice(0, 4) + ' ' + tel.slice(4, 8) + ' ' + tel.slice(8);
  fill('k-tel', 'tel:+49' + tel.slice(1), disp);
})();

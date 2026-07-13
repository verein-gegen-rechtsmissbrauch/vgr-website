/* Telefonnummer obfuskiert (ROT13 + umgekehrt), Zusammenbau erst im Browser.
   Schutz gegen einfache Harvester, die kein JavaScript ausführen. */
(function () {
  function dec(value) {
    var reversed = value.split('').reverse().join('');
    return reversed.replace(/[A-Za-z]/g, function (character) {
      var base = character <= 'Z' ? 65 : 97;
      return String.fromCharCode((character.charCodeAt(0) - base + 13) % 26 + base);
    });
  }

  var phoneElement = document.getElementById('k-tel');
  if (phoneElement) {
    var phone = dec('495145711510');
    var display = phone.slice(0, 4) + ' ' + phone.slice(4, 8) + ' ' + phone.slice(8);
    phoneElement.textContent = '';
    var phoneLink = document.createElement('a');
    phoneLink.href = 'tel:+49' + phone.slice(1);
    phoneLink.textContent = display;
    phoneElement.appendChild(phoneLink);
  }
})();

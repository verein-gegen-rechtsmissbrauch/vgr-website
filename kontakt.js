/* Kontaktdaten obfuskiert (ROT13 + umgekehrt), Zusammenbau erst im Browser.
   Schutz gegen einfache E-Mail-/Telefon-Harvester, die kein JavaScript ausführen. */
(function () {
  function dec(value) {
    var reversed = value.split('').reverse().join('');
    return reversed.replace(/[A-Za-z]/g, function (character) {
      var base = character <= 'Z' ? 65 : 97;
      return String.fromCharCode((character.charCodeAt(0) - base + 13) % 26 + base);
    });
  }

  var contacts = {
    general: dec('zbp.yvnzt@991aerxp'),
    membership: dec('rq.rgtvqrnupfrtmvgfhw@eti-ffnx')
  };

  document.querySelectorAll('[data-contact]').forEach(function (element) {
    var address = contacts[element.getAttribute('data-contact')];
    if (!address) return;
    element.textContent = '';
    var link = document.createElement('a');
    link.href = 'mailto:' + address;
    link.textContent = address;
    element.appendChild(link);
  });

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

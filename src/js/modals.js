import tingle from 'tingle.js';

const modal_1 = new tingle.modal({
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: 'Close',
    cssClass: ['q-modal']
});

modal_1.setContent(`
<h1>Unternehmen</h1>
<p>Die  ständige  und  umfassende  Weiterbildung  unserer  engagierten  Mitarbeiter  ist  eine  Selbstverständlichkeit.  Dadurch  können  wir  Ihnen  Consulting-Leistungen  auf  höchstem  Niveau  bieten.  Münzen  Sie  unser  Know-How  in  Ihren  Wettbewerbsvorteil  um!</p>
<p>Als  Oracle-Partner  sind  wir  zudem  stets  auf  dem  neuesten  Stand  der  Technologie  aus  dem  Hause  Oracle.  Wir  arbeiten  mit  den  neuesten  Features  der  Oracle  11g  Datenbank  unter  Linux,  Solaris  und  Windows,  implementieren  Cluster  und  RAC-Lösungen,  11g  Application-Server  und  Business  Intelligence-Lösungen.</p>`);

document.getElementById('footer-1').addEventListener('click', () => modal_1.open());
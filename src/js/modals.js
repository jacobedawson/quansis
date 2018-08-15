import tingle from 'tingle.js';

const body = document.querySelector('body');

document.querySelectorAll('footer ul li').forEach(el => {
    el.addEventListener('click', e => {
        body.classList.add('no-scroll');
    });
});


const aboutUsModal = new tingle.modal({
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: 'Close',
    cssClass: ['q-modal', 'about-us-modal'],
    onClose() {
        body.classList.remove('no-scroll')
    }
});

aboutUsModal.setContent(`
<span lang="de">
<h1>Unternehmen</h1>
<p>Die  ständige  und  umfassende  Weiterbildung  unserer  engagierten  Mitarbeiter  ist  eine  Selbstverständlichkeit.  Dadurch  können  wir  Ihnen  Consulting-Leistungen  auf  höchstem  Niveau  bieten.  Münzen  Sie  unser  Know-How  in  Ihren  Wettbewerbsvorteil  um!</p>
<p>Als  Oracle-Partner  sind  wir  zudem  stets  auf  dem  neuesten  Stand  der  Technologie  aus  dem  Hause  Oracle.  Wir  arbeiten  mit  den  neuesten  Features  der  Oracle  11g  Datenbank  unter  Linux,  Solaris  und  Windows,  implementieren  Cluster  und  RAC-Lösungen,  11g  Application-Server  und  Business  Intelligence-Lösungen.</p>
</span>
<span lang="en">
<h1>About Us</h1>
<p>Our skilled staff is our most valuable asset. OSYON emphasizes regular training to make sure our employees would always be on top of their game. Therefore, we offer outstanding consulting services. Our know-how gives our customers a competitive edge. </p>
<p>As an Oracle-partner, OSYON has access to the most recent Oracle-technology. We use the latest features of Oracle's 11g database on Linux, Solaris and Windows. We implement clusters and RAC-solutions, 11g Application Servers and Business Intelligence-solutions.</p>
</span>`);

document.querySelectorAll('.footer-1').forEach(el => {
    el.addEventListener('click', () => aboutUsModal.open());
});

const contactModal = new tingle.modal({
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: 'Close',
    cssClass: ['q-modal', 'contact-modal'],
    onClose() {
        body.classList.remove('no-scroll')
    }
});

contactModal.setContent(`
    <span lang="de">
        <h1>Kontakt</h1>
    </span>
    <span lang="en">
        <h1>Contact</h1>
    </span>
    <p>OSYON GmbH<br>
    IT-Beratung<br>
    Pfuelstraße 5<br>
    10997 Berlin<br>
    Germany</p>
    <p>Tel +49 (0)30 310 135-0<br>
    Fax +49 (0)30 310 135-55</p>
    <br>
    <p>webmaster@quan-sis.com</p>
`);

document.querySelectorAll('.footer-2').forEach(el => {
    el.addEventListener('click', () => contactModal.open());
});

const termsModal = new tingle.modal({
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: 'Close',
    cssClass: ['q-modal', 'terms-modal'],
    onClose() {
        body.classList.remove('no-scroll')
    }
});

termsModal.setContent(`
    <span lang="de">
        <h1>AGB</h1>
    </span>
    <span lang="en">
        <h1>Terms & Conditions</h1>
    </span>
        <h2>1. Geltungsbereich</h2>
        <p>Die Lieferungen und Leistungen der OSYON GmbH (nachfolgend genannt OSYON) erfolgen ausschließlich zu den nachstehenden Allgemeinen Geschäftsbedingungen. Anderslautende Geschäftsbedingungen des Kunden sind nur wirksam, wenn sie von OSYON schriftlich bestätigt wurden. Entsprechendes gilt für Änderungen und Ergänzungen dieser Allgemeinen Geschäftsbedingungen. Mündliche Zusagen und Nebenabreden sind nur gültig, wenn und soweit sie von OSYON schriftlich bestätigt werden.</p>
        <h2>2. Lieferungen und Leistungen</h2>
        <p><b>2.1</b> Die Angebote von OSYON sind freibleibend und unverbindlich. Ein Vertrag kommt erst mit der schriftlichen Auftragsbestätigung durch OSYON zustande.</p>
        <p><b>2.2</b> OSYON ist berechtigt, abweichend von der Bestellung des Kunden, geänderte und angepasste Vertragsprodukte zu liefern, soweit deren Funktionstauglichkeit dadurch nicht beeinträchtigt wird.</p>
        <p><b>2.3</b> Das Recht auf Teillieferungen und Teilabrechnungen bleibt OSYON ausdrücklich vorbehalten.</p>
        <p><b>2.4</b> Vereinbarte Liefertermine gelten als eingehalten, wenn die Vertragsprodukte zum vereinbarten Liefertermin dem Frachtführer übergeben wurde. Verzögert sich die Versendung versandbereiter Ware aus Gründen, die nicht von OSYON zu vertreten sind, so können die Vertragsprodukte auf Kosten und Gefahr des Kunden eingeladen werden.</p>
        <p><b>2.5</b> Der Liefertermin wird nach dem voraussichtlichen Leistungsvermögen von OSYON vereinbart und versteht sich vorbehaltlich unvorhergesehener Umstände und Hindernisse, unabhängig davon, ob diese bei OSYON oder bei Auftragnehmern oder Erfüllungsgehilfen von OSYON eintreten, wie z.B. höhere Gewalt, staatliche Maßnahmen, Nichterteilung behördlicher Genehmigungen, Arbeitskämpfe jeder Art, Sabotage, Rohstoffmangel, unverschuldete verspätete Materialanlieferung. Derartige Ereignisse verlängern den Liefertermin entsprechend, und zwar auch dann, wenn sie während eines bereits eingetretenen Verzuges auftreten. Gerät OSYON mit einer Lieferung mehr als vier Wochen in Verzug, kann der Kunde nach einer schriftlich gesetzten, angemessenen Nachfrist unter Ausschluß von Ansprüchen vom Vertrag zurücktreten. Soweit die Lieferverzögerungen länger als sechs Wochen dauern, ist auch OSYON berechtigt ganz oder teilweise vom Vertrag zurückzutreten.</p>
        <h2>3. Abnahme und Gefahrenübergang</h2>
        <p><b>3.1</b> Der Kunde hat die Ware unmittelbar nach Erhalt auf Vollständigkeit und Beschädigung zu überprüfen. Unterbleibt die Mitteilung über unvollständige oder beschädigte Lieferung innerhalb einer Frist von 3 Werktagen nach Erhalt der Lieferung, verliert der Empfänger den aus der Unvollständigkeit oder Beschädigung entstandenen Anspruch.</p>
        <p><b>3.2</b> Unwesentliche Mängel, die die Funktionstüchtigkeit des Liefergegenstandes nicht beeinträchtigen, berechtigen den Kunden nicht zu einer Verweigerung der Abnahme.</p>
        <p><b>3.3</b> Die Gefahr geht mit Übergabe des Vertragsproduktes an den Frachtführer, dessen Beauftragten oder anderen Personen, die von OSYON benannt werden, spätestens jedoch mit unmittelbarer Übergabe des Vertragsproduktes an den vom Kunden benannten Empfänger, oder dessen Beauftragten, über.</p>
        <h2>4. Zahlungsbedingungen</h2>
        <p><b>4.1</b> Zahlungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne jeden Abzug fällig. Wechsel und Schecks werden nicht angenommen. Bei Überschreitung der Zahlungstermine steht OSYON ohne weitere Mahnung ein Anspruch auf Verzugszinsen in Höhe von Fünf vom Hundert über dem jeweils gültigen Diskontsatz der Deutschen Bundesbank zu. Das Recht zur Geltendmachung eines darüber hinausgehenden Verzugsschadens bleibt unberührt.</p>
        <p><b>4.2</b> OSYON ist berechtigt, trotz anderslautender Bestimmungen des Kunden, Zahlungen zunächst auf dessen alte Schulden anzurechnen. Sind bereits Kosten und Zinsen durch Verzug entstanden, so ist OSYON berechtigt, die Zahlung zunächst auf die Kosten, dann auf die Zinsen und zuletzt auf die Hauptleistung anzurechnen.</p>
        <p><b>4.3</b> Eine Aufrechnung oder die Geltendmachung eines Zurückbehaltungsrechtes wegen von OSYON nicht anerkannter oder nicht rechtzeitig festgestellter Gegenansprüche ist ausgeschlossen.</p>
        <h2>5. Eigentumsvorbehalt</h2>
        <p><b>5.1</b> Das Vertragsprodukt bleibt Eigentum von OSYON bis zur Erfüllung aller Forderungen aus dem jeweiligen Vertrag.</p>
        <p><b>5.2</b> Der Kunde ist zur Weitergabe der Ware im ordnungsgemäßen Geschäftsverkehr unter Eigentumsvorbehalt berechtigt, nicht aber zur Verpfändung oder Sicherheitsübereignung in irgendeiner Form. Bei Zugriffen Dritter auf die Vorbehaltsware hat der Kunde auf das Eigentum von OSYON hinzuweisen und OSYON unverzüglich zu unterrichten. Bei Weiterveräußerung an Dritte ist der Kunde dafür verantwortlich, dass der Dritte die Rechte von OSYON berücksichtigt.</p>
        <p><b>5.3</b> Bei Verbindung oder Vermischung der Vorbehaltsware mit OSYON gehörenden Waren erwirbt OSYON Miteigentum anteilig im Verhältnis des Rechungswertes der Vorbehaltsware zur übrigen Ware.</p>
        <h2>6. Gewährleistung</h2>
        <p><b>6.1</b> OSYON gewährleistet, dass die Vertragsprodukte nicht mit Mängeln, zu denen auch das Fehlen zugesicherter Eigenschaften gehört, behaftet sind. Die Parteien sind sich darüber bewusst, dass es nicht möglich ist, Fehler der Hard- oder Software unter allen Anwendungsbedingungen auszuschließen.</p>
        <p><b>6.2</b> OSYON gewährleistet, dass die Vertragsprodukte in der Produktinformation allgemein zutreffend beschrieben und in diesem Rahmen grundsätzlich einsatzfähig sind. Die technischen Daten und Beschreibungen in der Produktinformation allein stellen keine Zusicherung bestimmter Eigenschaften dar. Eine Zusicherung von Eigenschaften im Rechtssinne ist nur dann gegeben, wenn die jeweiligen Angaben von OSYON schriftlich bestätigt wurden.</p>
        <p><b>6.3</b> Die Gewährleistungsansprüche gegen OSYON verjähren in sechs Monaten ab Lieferung. Sie sind nicht übertragbar. Unabhängig davon gibt OSYON etwaige weitergehende Garantie- und Gewährleistungszusagen der Hersteller in vollem Umfang an den Kunden weiter, ohne dafür selbst einzustehen.</p>
        <p><b>6.4</b> Im Gewährleistungsfall erfolgt nach Wahl von OSYON Nachbesserung oder Ersatzlieferung. Ersetzte Teile gehen in das Eigentum von OSYON über. Falls OSYON Mängel innerhalb einer angemessenen, schriftlich gesetzten Nachfrist nicht beseitigt, ist der Kunde berechtigt, entweder die Rückabwicklung des Vertrages oder eine angemessene Minderung des Kaufpreises zu verlangen.</p>
        <p><b>6.5</b> lm Falle der Nachbesserung übernimmt OSYON die Arbeitskosten. Alle sonstigen Nebenkosten, insbesondere Transportkosten für das Ersatzstück, trägt der Kunde, soweit diese sonstigen Kosten zum Auftragswert nicht außer Verhältnis stehen.</p>
        <p><b>6.6</b> Die Gewährleistung entfällt, wenn das Vertragsprodukt durch den Kunden oder Dritte unsachgemäß installiert bzw. selbständig gewartet, repariert, benutzt, verändert oder Umgebungsbedingungen ausgesetzt wird, die nicht den Betriebsanforderungen entsprechen, es sei denn, der Kunde weist nach, dass diese Umstände nicht ursächlich für den gerügten Mangel sind. Die Gewährleistung entfällt ferner, wenn ohne schriftliche Zustimmung von OSYON technische Originalzeichen geändert oder beseitigt werden.</p>
        <p><b>6.7</b> OSYON übernimmt keine Haftung dafür, dass die Vertragsprodukte keine gewerblichen Schutzrechte oder Urheberrechte Dritter verletzen.</p>
        <h2>7. Allgemeine Bestimmungen</h2>
        <p><b>7.1</b> Der Kunde ist nicht berechtigt, seine Ansprüche aus dem Vertrag abzutreten.</p>
        <p><b>7.2</b> Erfüllungsort für die Lieferung der Vertragsprodukte und Gerichtsstand für alle Rechtsstreitigkeiten ist Berlin.</p>
        <p><b>7.3</b> Auf diese Allgemeinen Geschäftsbedingungen finden die in der Bundesrepublik Deutschland geltenden gesetzlichen Bestimmungen Anwendung. Das Einheitliche Kaufgesetz (EKG) und das Einheitliche Vertragsabschlußgesetz (EAG) sind ausgeschlossen.</p>
        <p><b>7.4</b> Sollten eine oder mehrere Bestimmungen dieser Allgemeinen Geschäftsbedingungen unwirksam sein oder werden, oder dieser Vertragstext eine Regelungslücke enthalten, so werden die Vertragsparteien die unwirksame oder unvollständige Bestimmung durch angemessene Regelungen ersetzen oder ergänzen, die dem wirtschaftlichen Zweck der gewollten Regelung weitestgehend entsprechen. Die Gültigkeit der übrigen Bestimmungen bleibt davon unbeührt.</p>`);

document.querySelectorAll('.footer-3').forEach(el => {
    el.addEventListener('click', () => termsModal.open());
});

const privacyModal = new tingle.modal({
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: 'Close',
    cssClass: ['q-modal', 'privacy-modal'],
    onClose() {
        body.classList.remove('no-scroll')
    }
});

privacyModal.setContent(`
    <span lang="de">
        <h1>Datenschutzerklärung</h1>
        <p>Wir speichern personenbezogene Daten, wenn Sie uns diese von sich aus mitteilen, wenn Sie also eine Anfrage an uns richten oder uns einen Auftrag erteilen zum Zwecke der Bearbeitung Ihres Anliegens. Bei Nutzung dieser Website speichern wir Informationen, die Ihr Browser an uns übermittelt oder die sich aus der Natur des Verbindungsaufbaus ergeben. Diese sind:</p>
        <ul class="bullet-list">
            <li>Browsertyp und version</li>
            <li>Verweisende URL</li>
            <li>Betriebssystem des zugreifenden Geräts</li>
            <li>Datum und Uhrzeit des Serverzugriffs</li>
            <li>IP-Adresse bzw. FQDN des zugreifenden Geräts</li>
        </ul>
        <p>Diese Daten sind zunächst nicht bestimmten Personen zugeordnet. Eine Zusammenführung der Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns jedoch vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung vorliegen.</p>
        <p>Diese Datenschutzerklärung erstreckt sich nicht auf Websites, auf die durch Links von unserer Seiten aus verwiesen wird. Bitte beachten Sie in diesem Falle die Datenschutzerklärungen der entsprechenden Fremdanbieter.</p>
        <p>Diese Website nutzt den Dienst Google Analytics der Firma Google Inc., 1600 Amphitheatre Parkway Mountain View, CA 94043, USA. Google Analytics verwendet Cookies. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden an die Firma Google in den USA übertragen und dort gespeichert.</p>
        <p>Sie können eine Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern. Sie können darüber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="https://tools.google.com/dlpage/gaoptout?hl=de">https://tools.google.com/dlpage/gaoptout?hl=de</a></p>
        <p>Informationen zu Nutzungsbedingungen von Google Analytics finden Sie unter <a href="http://www.google.com/analytics/terms/de.html">http://www.google.com/analytics/terms/de.html</a>, unter <a href="https://www.google.de/intl/de/policies/">https://www.google.de/intl/de/policies/</a> und in der Datenschutzerklärung von Google: <a href="https://support.google.com/analytics/answer/6004245?hl=de">https://support.google.com/analytics/answer/6004245?hl=de</a></p>
        <p>Bei Fragen zum Datenschutz sowie bei Auskunfts-, Löschungs- oder Sperrbegehren wenden Sie sich jederzeit an uns.</p>
        <p>Wir behalten uns das Recht vor, diese Datenschutzerklärung unter Beachtung der geltenden Datenschutzvorschriften zu ändern.</p>
    </span>
    <span lang="en">
        <h1>PRIVACY STATEMENT</h1>
        <p>We store personal information when you provide it to us, e.g. if you send us a request or give us an order, for the purpose of processing your request. When using this website we save information that your browser transmits or that is a part of the connecting protocol. These are:</p>
        <ul class="bullet-list">
            <li>Browser type and version</li>
            <li>Referral URL</li>
            <li>Operating system of the connecting device</li>
            <li>Date and time of server access</li>
            <li>IP address or FQDN of the connecting device</li>
        </ul>
        <p>This data cannot be traced back to individual persons. This data is not intended to be merged with data from other sources. We reserve the right, however, to retrospectively check this data if there are any concrete indications of unlawful use.</p>
        <p>This privacy policy does not extend to websites referenced by links from our sites. Please note the privacy statements of the corresponding third-party providers.</p>
        <p>This website uses the Google Analytics service of the company Google Inc., 1600 Amphitheatre Parkway Mountain View, CA 94043, USA. Google Analytics uses cookies. The information about your use of this website collected by the cookies is transferred to the company Google in the USA and stored there.</p>
        <p>You can block cookies through a relevant function in your browser software. Additionally, you may prevent the collection by Google of the data generated by the cookie and related to your use of the website (inc. your IP address), as well as the processing of this data by Google, by downloading and installing the following browser add-on: <a href="https://tools.google.com/dlpage/gaoptout?hl=en">https://tools.google.com/dlpage/gaoptout?hl=en</a></p>
        <p>For questions about data protection and information, cancellation or blocking requests, please contact us at any time.</p>
        <p>We reserve the right to change this privacy policy in accordance with applicable privacy laws.</p>
    </span>
`);

document.querySelectorAll('.footer-4').forEach(el => {
    el.addEventListener('click', () => privacyModal.open());
});

const impressumModal = new tingle.modal({
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: 'Close',
    cssClass: ['q-modal', 'impressum-modal'],
    onClose() {
        body.classList.remove('no-scroll')
    }
});

impressumModal.setContent(`
    <span lang="de">
        <h1>IMPRESSUM</h1>
        <p>quasis.de, qua-sis.de  sind Teledienste der</p>
        <p>OSYON GmbH
        <br>Pfuelstraße 5
        <br>10997 Berlin
        <br>Deutschland</p>
        <p>Reg-Nr HRB 82465 AG Charlottenburg<br>
        Geschäftsführer Oliver Spickhoff</br>
        USt-ID DE217618646</p>
        <p>webmaster@quan-sis.com</p>
        <p>Quan sis food® ist eine eingetragene Marke der OSYON GmbH.
        Vervielfältigung und Verbreitung unserer Inhalte oder deren Teile nur mit unserer schriftlichen Genehmigung.</p>
        <p>Für Inhalte, auf die von unseren Seiten aus verwiesen wird, sind wir nicht verantwortlich und distanzieren uns davon vorsorglich.</p>
        </span>
    <span lang="en">
        <h1>IMPRINT</h1>
        <p>quasis.de, qua-sis.de are internet services of</p>
        <p>OSYON GmbH
        <br>Pfuelstraße 5
        <br>10997 Berlin
        <br>Deutschland</p>
        <p>Reg-Nr HRB 82465 AG Charlottenburg<br>
        Geschäftsführer Oliver Spickhoff</br>
        USt-ID DE217618646</p>
        <p>webmaster@quan-sis.com</p>
        <p>Quan sis food® is a brand of OSYON GmbH.
        Distribution or reproduction of this website's content or parts of its content require the written permission of OSYON GmbH.</p>
        <p>OSYON GmbH does not assume any responsibility or liability for any information, communications or materials available at sites linked here.</p>
    </span>
`);

document.querySelectorAll('.footer-5').forEach(el => {
    el.addEventListener('click', () => impressumModal.open());
});
Meteor.methods({
    getServerTime: function () {
    	var time = (new Date).getTime();
        console.log(time);
        return time;
    },
    getHappeningNow: function () {
    	var time = (new Date).getTime();
		for (i in tapahtumat) {
			if (tapahtumat[i].epoch <= time) {
				now = tapahtumat[i];
			}
		}
		return now;
	},
	getHappeningNext: function () {
		var time = (new Date).getTime();
		for (i in tapahtumat) {
			if (tapahtumat[i].epoch > time) {
				return tapahtumat[i];
			}
		}
	},
	getTapahtumat: function () {
		return;
	}
});

var tapahtumat = [
	{nimi: 'Titeenikuumotukset', pvm: 'Nyt', klo: 'klo 04:00', paikka: 'Tietoteekkarikaupungit', epoch: 1457661600000},
	{nimi: 'Majoitus aukeaa', pvm: 'Perjantai', klo: 'klo 17:30', paikka: 'Kupittaan koulu', epoch: 1458315000000},
	{nimi: 'Sodanjulistus', pvm: 'Perjantai', klo: 'klo 18:00', paikka: 'Showroom', epoch: 1458316800000},
	{nimi: 'Ensimmäinen laji julkistetaan', pvm: 'Perjantai', klo: 'klo 20:00', paikka: 'Showroom', epoch: 1458324000000},
	{nimi: 'Aamupala', pvm: 'Lauantai', klo: 'klo 10:00', paikka: 'Kupittaan puisto', epoch: 1458374400000},
	{nimi: 'VVN-peli', pvm: 'Lauantai', klo: 'klo 11:00', paikka: 'Kupittaan puisto', epoch: 1458378000000},
	{nimi: 'Sokkoralli', pvm: 'Lauantai', klo: 'klo 13:00', paikka: 'Kupittaan liikennepuisto', epoch: 1458385200000},
	{nimi: 'Joystiq', pvm: 'Lauantai', klo: 'klo 15:00', paikka: 'Kupittaan puisto', epoch: 1458392400000},
	{nimi: 'Curling', pvm: 'Lauantai', klo: 'klo 17:00', paikka: 'Pesäpallokenttä', epoch: 1458399600000},
	{nimi: 'Tivoli aukeaa', pvm: 'Lauantai', klo: 'klo 18:00', paikka: 'Tivoli', epoch: 1458403200000},
	{nimi: 'Kadonneen tutkinnon metsästys', pvm: 'Lauantai', klo: 'klo 20:00', paikka: 'Tivoli', epoch: 1458410400000},
	{nimi: 'Voittaja julistetaan', pvm: 'Lauantai', klo: 'klo 22:00', paikka: 'Tivoli', epoch: 1458417600000},
	{nimi: 'Poistuminen majoituksesta', pvm: 'Sunnuntai', klo: 'klo 10:00', paikka: 'Kupittaan koulu', epoch: 1458460800000},
	{nimi: 'Titeenit ohi', pvm: '', klo: '', paikka: 'Turku', epoch: 1458460810000},
	{nimi: 'Titeenit', pvm: '2017', klo: '2017', paikka: 'Oulu', epoch: 1489996800000}
	];
var now, next;

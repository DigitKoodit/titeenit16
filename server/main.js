Meteor.methods({
    getServerTime: function () {
    	var time = (new Date).getTime();
        console.log(time);
        return time;
    },
    getHappeningNow: function () {
    	var time = (new Date).getTime();
    	var tapahtumat = Tapahtumat.find().fetch();
		for (i in tapahtumat) {
			if (tapahtumat[i].epoch <= time) {
				now = tapahtumat[i];
			}
		}
		return now;
	},
	getHappeningNext: function () {
		var time = (new Date).getTime();
		var tapahtumat = Tapahtumat.find().fetch();
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

if(Meteor.isServer){
  Meteor.startup(function(){
    if(Tapahtumat.find().fetch().length === 0){
      console.log("Initializing the events into empty database");
      // let tapahtumat = [""]
      // guilds.map(function(guild){
        Tapahtumat.insert(
        	{nimi: 'Titeenikuumotukset', pvm: 'Nyt', klo: 'klo 04:00', paikka: 'Tietoteekkarikaupungit', epoch: 1457661600000}
        );
        Tapahtumat.insert(
          	{nimi: 'Majoitus aukeaa', pvm: 'Perjantai', klo: 'klo 17:30', paikka: 'Kupittaan koulu', epoch: 1458315000000}
        );
        Tapahtumat.insert(
          	{nimi: 'Gaala', pvm: 'Perjantai', klo: 'klo 18:00', paikka: 'Showroom', epoch: 1458316800000}
        );
        Tapahtumat.insert(
        	{nimi: 'TIVIAn puheenvuoro', pvm: 'Perjantai', klo: 'klo 19:30', paikka: 'Showroomin yläkerta', epoch: 1458322200000}
        );
        Tapahtumat.insert(
        	{nimi: 'Sodanjulistus', pvm: 'Perjantai', klo: 'klo 20:00', paikka: 'Showroomin yläkerta', epoch: 1458324000000}
        );
        Tapahtumat.insert(
          	{nimi: 'Ensimmäinen laji julkistetaan', pvm: 'Perjantai', klo: 'klo 21:00', paikka: 'Showroomin yläkerta', epoch: 1458327600000}
        );
        Tapahtumat.insert(
          	{nimi: 'Aamupala', pvm: 'Lauantai', klo: 'klo 10:00', paikka: 'Kupittaan puisto', epoch: 1458374400000}
        );
        Tapahtumat.insert(
          	{nimi: 'VVN-peli', pvm: 'Lauantai', klo: 'klo 11:00', paikka: 'Kupittaan puisto', epoch: 1458378000000}
        );
        Tapahtumat.insert(
          	{nimi: 'Sokkoralli', pvm: 'Lauantai', klo: 'klo 12:00', paikka: 'Kupittaan liikennepuisto', epoch: 1458381600000}
        );
        Tapahtumat.insert(
        	{nimi: 'Majoitus auki', pvm: 'Lauantai', klo: 'klo 13-15', paikka: 'Kupittaan koulu', epoch: 1458385200000}
        );
        Tapahtumat.insert(
          	{nimi: 'Joystiq', pvm: 'Lauantai', klo: 'klo 15:30', paikka: 'Kupittaan puisto', epoch: 1458394200000}
        );
        Tapahtumat.insert(
          	{nimi: '5-way beer pong', pvm: 'Lauantai', klo: 'klo 17:00', paikka: 'Pesäpallokenttä', epoch: 1458399600000}
        );
        Tapahtumat.insert(
        	{nimi: 'Majoitus auki', pvm: 'Lauantai', klo: 'klo 18-19:30', paikka: 'Kupittaan koulu', epoch: 1458403200000}
        );
        Tapahtumat.insert(
          	{nimi: 'Jatkopaikka auki', pvm: 'Lauantai', klo: 'klo 18:00', paikka: 'Tivoli', epoch: 1458403210000}
        );
        Tapahtumat.insert(
          	{nimi: 'Kadonneen tutkinnon metsästys', pvm: 'Lauantai', klo: 'klo 20:00', paikka: 'Tivoli', epoch: 1458410400000}
        );
        Tapahtumat.insert(
          	{nimi: 'Voittaja julistetaan', pvm: 'Lauantai', klo: 'klo 22:00', paikka: 'Tivoli', epoch: 1458417600000}
        );
        Tapahtumat.insert(
          	{nimi: 'Poistuminen majoituksesta', pvm: 'Sunnuntai', klo: 'klo 10:00', paikka: 'Kupittaan koulu', epoch: 1458460800000}
        );
        Tapahtumat.insert(
          	{nimi: 'Titeenit ohi', pvm: '', klo: '', paikka: 'Turku', epoch: 1458460810000}
        );
        Tapahtumat.insert(
          	{nimi: 'Titeenit', pvm: '2017', klo: '2017', paikka: 'Oulu', epoch: 1489996800000}
        );
      // });

    }else{
      console.log("Events were initialized beforehand.");
    }
    console.log("Coughing this engine on the road.");
    Meteor.publish("tapahtumat",function(){
  		return Tapahtumat.find();
	});
  });
}



// var tapahtumat = [
// 	{nimi: 'Titeenikuumotukset', pvm: 'Nyt', klo: 'klo 04:00', paikka: 'Tietoteekkarikaupungit', epoch: 1457661600000},
// 	{nimi: 'Majoitus aukeaa', pvm: 'Perjantai', klo: 'klo 17:30', paikka: 'Kupittaan koulu', epoch: 1458315000000},
// 	{nimi: 'Sodanjulistus', pvm: 'Perjantai', klo: 'klo 18:00', paikka: 'Showroom', epoch: 1458316800000},
// 	{nimi: 'Ensimmäinen laji julkistetaan', pvm: 'Perjantai', klo: 'klo 20:00', paikka: 'Showroom', epoch: 1458324000000},
// 	{nimi: 'Aamupala', pvm: 'Lauantai', klo: 'klo 10:00', paikka: 'Kupittaan puisto', epoch: 1458374400000},
// 	{nimi: 'VVN-peli', pvm: 'Lauantai', klo: 'klo 11:00', paikka: 'Kupittaan puisto', epoch: 1458378000000},
// 	{nimi: 'Sokkoralli', pvm: 'Lauantai', klo: 'klo 13:00', paikka: 'Kupittaan liikennepuisto', epoch: 1458385200000},
// 	{nimi: 'Joystiq', pvm: 'Lauantai', klo: 'klo 15:00', paikka: 'Kupittaan puisto', epoch: 1458392400000},
// 	{nimi: 'Curling', pvm: 'Lauantai', klo: 'klo 17:00', paikka: 'Pesäpallokenttä', epoch: 1458399600000},
// 	{nimi: 'Tivoli aukeaa', pvm: 'Lauantai', klo: 'klo 18:00', paikka: 'Tivoli', epoch: 1458403200000},
// 	{nimi: 'Kadonneen tutkinnon metsästys', pvm: 'Lauantai', klo: 'klo 20:00', paikka: 'Tivoli', epoch: 1458410400000},
// 	{nimi: 'Voittaja julistetaan', pvm: 'Lauantai', klo: 'klo 22:00', paikka: 'Tivoli', epoch: 1458417600000},
// 	{nimi: 'Poistuminen majoituksesta', pvm: 'Sunnuntai', klo: 'klo 10:00', paikka: 'Kupittaan koulu', epoch: 1458460800000},
// 	{nimi: 'Titeenit ohi', pvm: '', klo: '', paikka: 'Turku', epoch: 1458460810000},
// 	{nimi: 'Titeenit', pvm: '2017', klo: '2017', paikka: 'Oulu', epoch: 1489996800000}
// 	];
// var now, next;

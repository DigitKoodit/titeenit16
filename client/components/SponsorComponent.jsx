SponsorComponent = React.createClass({
	render(){
		return(
			<div className="innerDiv">
				<SponsorText />
				<div className="sponsor">
					<a href="https://vaadin.com/" target="_blank"><img src="/images/sponsorit/Vaadin.png"></img></a>
				</div>
				<div className="sponsor">
					<a href="http://www.nortal.fi/" target="_blank"><img src="/images/sponsorit/Nortal.png"></img></a>
				</div>
				<div className="sponsor">
					<a href="https://www.sofokus.com/" target="_blank"><img src="/images/sponsorit/Sofokus.png"></img></a>
				</div>
				<div className="sponsor">
					<a href="https://www.tek.fi/" target="_blank"><img src="/images/sponsorit/TEK.png"></img></a>
				</div>
			</div>
		);
	}
});

SponsorText = React.createClass({
	render(){
		switch(Math.floor((Math.random() * 8) +1)) {
			case 1:
				return(
					<h1>Webbisuunnittelijoille päänvaivaa aiheuttivat</h1>
				);
				break;
			case 2:
				return(
					<h1>TiTeenit mahdollistavat</h1>
				);
				break;
			case 3:
				return(
					<h1>TiTeenien suojelijat</h1>
				);
				break;
			case 4:
				return(
					<h1>Apurahaa antoivat</h1>
				);
				break;
			case 5:
				return(
					<h1>Potentiaaliset työnantajat</h1>
				);
				break;
			case 6:
				return(
					<h1>Maksettuja mainoksia</h1>
				);
				break;
			case 7:
				return(
					<h1>Ultra siistejä firmoja</h1>
				);
				break;
			case 8:
				return(
					<h1>Ystävämme</h1>
				);
				break;
		}
	}
})
SponsorComponent = React.createClass({
	render(){
		return(
			<div className="innerDiv">
				<h1>TiTeeneissä mukana ystävämme</h1>
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
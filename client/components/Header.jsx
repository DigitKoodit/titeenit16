Header = React.createClass({
  render(){
    return(
      <div className="header">
        <ul className="headerNav">
          <li>
            <h2><a href="/">TiTeenit 2016</a></h2>
          </li>
          <li>
            Menossa mukana:
            <a href="https://vaadin.com/" target="_blank" className="sponsor"> Vaadin</a>,
            <a href="http://www.nortal.fi/" target="_blank" className="sponsor"> Nortal</a>,
            <a href="https://www.sofokus.com/" target="_blank" className="sponsor"> Sofokus</a>,
            <a href="https://www.accenture.com/" target="_blank" className="sponsor"> Accenture</a>,
            <a href="http://www.tivia.fi/" target="_blank" className="sponsor"> TIVIA</a>,
            <a href="https://www.tek.fi/" target="_blank" className="sponsor"> TEK</a>
          </li>
        </ul>
      </div>
    );
  }
})

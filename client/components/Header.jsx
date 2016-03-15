Header = React.createClass({
  render(){
    return(
      <div className="header">
        <ul className="headerNav">
          <li>
            <h2>Titeenit 2016</h2>
          </li>
          <li>
            Menossa mukana:
            <a href="https://vaadin.com/" target="_blank"> Vaadin</a>,
            <a href="http://www.nortal.fi/" target="_blank"> Nortal</a>,
            <a href="https://www.andersinnovations.com/" target="_blank"> Anders Innovations</a>,
            <a href="https://www.tek.fi/" target="_blank"> TEK</a>

          </li>
        </ul>
      </div>
    );
  }
})

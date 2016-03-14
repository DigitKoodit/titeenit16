HappeningComponent = React.createClass({
  mixins: [ReactMeteorData],
  // getMeteorData() {
  //   return {
  //     tapahtumat: Tapahtumat.find({}).fetch()
  //   }
  // },
  getMeteorData(){
    return{
      now: Session.get('happeningNow'),
      next: Session.get('happeningNext')
    }
  },
  checkCurrentForLoading(){
    if(!Session.get('happeningNow')){
      return "Ladataan tapahtumia.";
    }
    return Session.get('happeningNow').nimi +" @ "+ Session.get('happeningNow').paikka;
  },
  checkNextForLoading(){
    if(!Session.get('happeningNext')){
      return "Ladataan tapahtumia.";
    }
    return Session.get('happeningNext').klo+" "+Session.get('happeningNext').nimi+" @ "+Session.get('happeningNext').paikka;
  },
  render(){
    console.log(Session.get('happeningNow'));
    return(
      <div className="innerDiv">
        <h2>
          Juuri nyt: {this.checkCurrentForLoading()}
        </h2>
        <h2>
          Seuraavaksi: {this.checkNextForLoading()}
        </h2>
      </div>
    );
  }
});

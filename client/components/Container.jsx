Container = React.createClass({
  render(){
    return(
      <div>
        <Header/>
        <div className="outerDiv">
          {this.props.content}
        </div>
        <Footer/>
      </div>
    );
  }
});

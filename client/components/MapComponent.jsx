MapComponent = React.createClass({
  render() {
    return <MyTestMap />;
  }
});

MyTestMap = React.createClass({
  mixins: [ReactMeteorData],
  componentDidMount() {
    GoogleMaps.load();
  },
  getMeteorData() {
    return {
      loaded: GoogleMaps.loaded(),
      mapOptions: GoogleMaps.loaded() && this._mapOptions()
    };
  },
  _mapOptions() {
    return {
      center: new google.maps.LatLng(60.446494, 22.283787),
      zoom: 14
    };
  },
  render() {
    if (this.data.loaded)
      return <GoogleMap name="mymap" options={this.data.mapOptions} />;

    return <div>Loading map...</div>;
  }
});

GoogleMap = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.object.isRequired
  },
  componentDidMount() {
    GoogleMaps.create({
      name: this.props.name,
      element: ReactDOM.findDOMNode(this),
      options: this.props.options
    });

    GoogleMaps.ready(this.props.name, function(map) {
      var locations = [
        ['Majoitus', 'https://goo.gl/maps/exb3ZLa2s182', 60.440062, 22.293108, '', 0],
        ['Showroom','https://goo.gl/maps/bvNJuLRuwmo', 60.448573, 22.265756, 'Perjantaina <ul><li>Sodanjulistus 18:00</li></ul>', 1],
        ['Liikennepuisto', 'https://goo.gl/maps/5w2cQDb44FN2', 60.445343, 22.286750, 'Lauantaina <ul><li>Sokkoralli 13:00</li></ul>', 1],
        ['Tivoli', 'https://goo.gl/maps/BJ56xnoRDoG2', 60.447317, 22.282734, 'Lauantaina <ul><li>Kadonneen tutkinnon metsästys 20:00</li></ul>', 1],
        ['Pesäpallokenttä', 'https://goo.gl/maps/Hcnd3m4C8V42', 60.446205, 22.297271, 'Lauantaina <ul><li>Curling 17:00</li></ul>', 1],
        ['Kupittaan puisto', 'https://goo.gl/maps/EeiMnST9xX12', 60.445732, 22.287388, 'Lauantaina <ul><li>Aamupala 10:00</li> <li>VVN-peli 11:00</li> <li>Joystiq 15:00</li></ul>', 1],
        ['Kultainen Hirvi', 'https://goo.gl/maps/pE1mp13hDt22', 60.448055, 22.288839, '<p>Hyvää pubiruokaa, kaljaa<p>Avoinna 12-23:30 (keittiö 12-21:30)', 2],
        ['Delhi Darbar', 'https://goo.gl/maps/Az6CsFmsQdL2', 60.451895, 22.283035, '<p>Intialaista</p>Avoinna 12-23', 2],
        ['Assarin Ullakko', 'https://goo.gl/maps/vVBpgbqa4oN2', 60.454302, 22.287526, '<p>Opiskelijaravintola</p>Avoinna 11-16', 2],
        ['Hesburger', 'https://goo.gl/maps/ewNaMKwNHpM2', 60.445282, 22.301029, 'Avoinna 11:30-21', 2],
        ['Stadionin pikapala', 'https://goo.gl/maps/TKdqVXyqGKU2', 60.442284, 22.294271, '<p>Grilli</p>Avoinna 10-22', 2],
        ['Kupittaan Kebab & Pizzeria', 'https://goo.gl/maps/VqgG4RYqq6A2', 60.447192, 22.283035, 'Avoinna 10:30-5', 2],
        ['Arezzo', 'https://goo.gl/maps/RsEkx9bbWrv', 60.450483, 22.278903, '<p>Kebab-pizzeria</p>Avoinna 12-22', 2],
        ['Kotipizza', 'https://goo.gl/maps/357s9tyj3n92', 60.446235, 22.283900, 'Avoinna 11-22', 2],
        ['Hesburger', 'https://goo.gl/maps/PP2zevUNrET2', 60.440123, 22.282498, 'Avoinna 10-0:30', 2],
        ['Mantun Grilli', 'https://goo.gl/maps/JuNE496j7mn', 60.447739, 22.270468, 'Avoinna 18-5', 2],
        ['China Jade', 'https://goo.gl/maps/QSPRQ2eg9p92', 60.448708, 22.293519, 'Avoinna 12-16', 2],
        ['Burger King', 'https://goo.gl/maps/r52bX7sxrMB2', 60.451198, 22.265678, 'Avoinna 9-5', 2],
        ['Subway', 'https://goo.gl/maps/dFkkw7C47Ty', 60.449656, 22.268282, 'Avoinna 10-4:30', 2],
        ['Subway', 'https://goo.gl/maps/dNXJQVayybE2', 60.450091, 22.295366, 'Avoinna 10-18', 2],
        ['Subway', 'https://goo.gl/maps/tw5yyqU5yz52', 60.452189, 22.282650, 'Avoinna 24h', 2],
        ['Citymarket', 'https://goo.gl/maps/QU2s9CW48DN2', 60.441732, 22.286418, 'Avoinna La 8-21', 3],
        ['Alko', 'https://goo.gl/maps/Rvwkfa6JizF2', 60.442372, 22.286804, 'Avoinna La 9-18', 4],
        ['K-market', 'https://goo.gl/maps/vMmU17xiuus', 60.449335, 22.293491, 'Avoinna La 9-21', 3],
        ['K-market', 'https://goo.gl/maps/ayRxG5Em96u', 60.453080, 22.286861, 'Avoinna La 7-23', 3],
        ['Sale', 'https://goo.gl/maps/wg1M3yuvwbM2', 60.452193, 22.284499, 'Avoinna La 10-23', 3],
        ['K-Extra', 'https://goo.gl/maps/SQ1AtCQFXdA2', 60.452526, 22.283458, 'Avoinna La 7-22', 3]
      ];
      var infowindow = new google.maps.InfoWindow();
      var marker, i;
      var path = ''
      var icons = [
        '/images/map/home.png',
        '/images/map/cut.png',
        '/images/map/restaurant.png',
        '/images/map/shop.png',
        '/images/map/alko.png'
      ];
      for (i in locations) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][2], locations[i][3]),
          map: map.instance,
          title: locations[i][0],
          icon: icons[locations[i][5]]
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent('<h3>' + marker.title + '</h3>' + '<p>' + locations[i][4] + '</p><p><a href="' + locations[i][1] + '" target="_blank">Google Maps -linkki</a></p>');
              infowindow.open(map.instance, marker);
            }
          })(marker, i));
      }
    });
  },
  componentWillUnmount() {
    if (GoogleMaps.maps[this.props.name]) {
      google.maps.event.clearInstanceListeners(GoogleMaps.maps[this.props.name].instance);
      delete GoogleMaps.maps[this.props.name];
    }
  },
  render() {
    return <div className="map-container"></div>;

  }
});

var styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];

// if (Meteor.isClient) {
//   Meteor.startup(function() {
//     return React.render(<MapComponent />, document.getElementById('root'));
//   });
// }

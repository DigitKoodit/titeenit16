ScheduleComponent = React.createClass({
  render(){
    return(
      <div className="innerDiv">
        <h1>Aikataulu</h1>
        <table className="ScheduleTable">
            <tbody>
        	<tr>
        		<th rowSpan="5">Perjantai 18.3.</th>
        		<td>Majoitus aukeaa</td>
        		<td>17:30</td>
        		<td>@ Kupittaan koulu (Syreenikuja 1)</td>
        	</tr>
        	<tr>
        		<td>Gaala</td>
        		<td>18:00</td>
        		<td>@ Showroom (Linnankatu 18)</td>
        	</tr>
            <tr>
                <td>TIVIAn puheenvuoro</td>
                <td>19:30</td>
                <td>@ Showroomin yläkerta</td>
            </tr>
            <tr>
                <td>Sodanjulistus</td>
                <td>20:00</td>
                <td>@ Showroomin yläkerta</td>
            </tr>
        	<tr>
        		<td>Ensimmäisen lajin julkistus</td>
        		<td>21:00</td>
        		<td>@ Showoomin yläkerta</td>
        	</tr>
        	<tr>
        		<th rowSpan="10">Lauantai 19.3.</th>
        		<td>Aamupala</td>
        		<td>10:00</td>
        		<td>@ Kupittaan puisto</td>
        	</tr>
        	<tr>
        		<td>VVN-peli</td>
        		<td>11:00</td>
        		<td>@ Kupittaan puisto</td>
        	</tr>
        	<tr>
        		<td>Sokkoralli</td>
        		<td>12:00</td>
        		<td>@ Kupittaan liikennepuisto</td>
        	</tr>
            <tr>
                <td>Majoitus auki</td>
                <td>13-15</td>
                <td>@ Kupittaan koulu</td>
            </tr>
        	<tr>
        		<td>Joystiq</td>
        		<td>15:30</td>
        		<td>@ Kupittaan puisto</td>
        	</tr>
        	<tr>
        		<td>5-way beer pong</td>
        		<td>17:00</td>
        		<td>@ Pesäpallokenttä</td>
        	</tr>
            <tr>
                <td>Majoitus auki</td>
                <td>18-19:30</td>
                <td>@ Kupittaan koulu</td>
            </tr>
        	<tr>
        		<td>Tivoli aukeaa</td>
        		<td>18:00</td>
        		<td>@ Tivoli</td>
        	</tr>
        	<tr>
        		<td>Kadonneen tutkinnon metsästys</td>
        		<td>20:00</td>
        		<td>@ Tivoli</td>
        	</tr>
            <tr>
                <td>Voittajan julistus</td>
                <td>22:00</td>
                <td>@ Tivoli</td>
            </tr>
        	<tr>
        		<th>Sunnuntai 20.3.</th>
        		<td>Poistuminen majoituksesta</td>
        		<td>10:00</td>
        		<td>Turku kiittää!</td>
        	</tr>
            </tbody>
        </table>
      </div>
    );
  }
});
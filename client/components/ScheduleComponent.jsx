ScheduleComponent = React.createClass({
  render(){
    return(
      <div className="innerDiv">
        <h1>Aikataulu</h1>
        <table className="ScheduleTable">
            <tbody>
        	<tr>
        		<th rowSpan="5">Perjantai 18.3.</th>
        		<td>17:30</td>
                <td>Majoitus aukeaa</td>
        		<td>@ Kupittaan koulu (Syreenikuja 1)</td>
        	</tr>
        	<tr>
                <td>18:00</td>
        		<td>Gaala</td>
        		<td>@ Showroom (Linnankatu 18)</td>
        	</tr>
            <tr>
                <td>19:30</td>
                <td>TIVIAn puheenvuoro</td>
                <td>@ Showroomin yläkerta</td>
            </tr>
            <tr>
                <td>20:00</td>
                <td>Sodanjulistus</td>
                <td>@ Showroomin yläkerta</td>
            </tr>
        	<tr>
        		<td>21:00</td>
                <td>Ensimmäisen lajin julkistus</td>
        		<td>@ Showoomin yläkerta</td>
        	</tr>
        	<tr>
        		<th rowSpan="10">Lauantai 19.3.</th>
        		<td>10:00</td>
                <td>Aamupala</td>
        		<td>@ Kupittaan puisto</td>
        	</tr>
        	<tr>
        		<td>11:00</td>
                <td>VVN-peli</td>
        		<td>@ Kupittaan puisto</td>
        	</tr>
        	<tr>
        		<td>12:00</td>
                <td>Sokkoralli</td>
        		<td>@ Kupittaan liikennepuisto</td>
        	</tr>
            <tr>
                <td>13-15</td>
                <td>Majoitus auki</td>
                <td>@ Kupittaan koulu</td>
            </tr>
        	<tr>
        		<td>15:30</td>
                <td>Joystiq</td>
        		<td>@ Kupittaan puisto</td>
        	</tr>
        	<tr>
        		<td>17:00</td>
                <td>5-way BP</td>
        		<td>@ Pesäpallokenttä</td>
        	</tr>
            <tr>
                <td>18-19:30</td>
                <td>Majoitus auki</td>
                <td>@ Kupittaan koulu</td>
            </tr>
        	<tr>
        		<td>18:00</td>
                <td>Jatkopaikka aukeaa</td>
        		<td>@ Tivoli</td>
        	</tr>
        	<tr>
        		<td>20:00</td>
                <td>Kadonneen tutkinnon metsästys</td>
        		<td>@ Tivoli</td>
        	</tr>
            <tr>
                <td>22:00</td>
                <td>Voittajan julistus</td>
                <td>@ Tivoli</td>
            </tr>
        	<tr>
        		<th>Sunnuntai 20.3.</th>
                <td>10:00</td>
        		<td>Poistuminen majoituksesta</td>
        		<td>Turku kiittää!</td>
        	</tr>
            </tbody>
        </table>
      </div>
    );
  }
});
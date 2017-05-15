var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return({
      isLoading: false
    });
  },
  handleNewName: function(name){
    // this.setState({
    //   city: name,
    //   temp: 23
    // });
    var that = this;

    this.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(name).then(function(temp){
      that.setState({
        city: name,
        temp: temp,
        isLoading: false
      });
    }, function(err){
      that.setState({isLoading: false});
      alert(err);
    });

  },
  render: function(){
    //var city = this.state.city;
    //var temp = this.state.temp;

    var {isLoading, city, temp} = this.state;

    function renderMsg(){
      if(isLoading) {
        return <h3> Fetching Data... </h3>
      }
      else if (city && temp){
        return <WeatherMessage city={city} temp={temp}/>;
      }
    }
    return(
      <div>
        <h2> Weather component </h2>
        <WeatherForm onNewName={this.handleNewName}/>
        {renderMsg()}
      </div>
    );
  }
});

module.exports = Weather;

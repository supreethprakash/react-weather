var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

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
      isLoading: true,
      errorMessage: undefined,
      temp: undefined,
      city: undefined
    });
    openWeatherMap.getTemp(name).then(function(temp){
      that.setState({
        city: name,
        temp: temp,
        isLoading: false
      });
    }, function(err){
      that.setState({
        isLoading: false,
        errorMessage: err.message
      });
    });

  },
  componentDidMount: function(){
    var location = this.props.location.query.location;
    if(location && location.length > 0){
      this.handleNewName(location);
      window.location.hash = '/#';
    }
  },
  componentWillReceiveProps: function(newProps){
    var location = newProps.location.query.location;
    if(location && location.length > 0){
      this.handleNewName(location);
      window.location.hash = '/#';
    }
  },
  render: function(){
    //var city = this.state.city;
    //var temp = this.state.temp;

    var {isLoading, city, temp, errorMessage} = this.state;

    function renderMsg(){
      if(isLoading) {
        return <h3 className='text-center'> Fetching Data... </h3>
      }
      else if (city && temp){
        return <WeatherMessage city={city} temp={temp}/>;
      }
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return(<ErrorModal message={errorMessage}/>);
      }
    }
    return(
      <div>
        <h3 className='text-center page-title'> Get Weather</h3>
        <WeatherForm onNewName={this.handleNewName}/>
        {renderMsg()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;

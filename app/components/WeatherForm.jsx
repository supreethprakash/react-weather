var React = require('react');

var WeatherForm = React.createClass({
  onButtonClick: function(e){
    e.preventDefault();
    var cityName = this.refs.city.value;
    cityName && this.props.onNewName(cityName);
    if(cityName.length > 0){
      this.refs.city.value = '';
    }
  },
  render: function() {
    return(
      <form onSubmit={this.onButtonClick}>
        <input type='text' ref='city'/> <br/>
        <button className="button expanded hollow">Find Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;

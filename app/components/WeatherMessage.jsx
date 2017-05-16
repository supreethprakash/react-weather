var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     var city = this.props.city;
//     var temp = this.props.temp;
//     if(city.length != 0) {
//       return(
//         <h3>The temperature of {city} is {temp}</h3>
//       );
//   } else {
//     return(<h3></h3>);
//   }
//   }
// });

var WeatherMessage = (props) => {
  var city = props.city;
  var temp = props.temp;
  if(city.length != 0) {
    return(
      <h3 className="text-center">The temperature of {city} is {temp}</h3>
    );
} else {
  return(<h3></h3>);
}
}

module.exports = WeatherMessage;

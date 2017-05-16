var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return(
//       <h3> This is a basic Weather App, which tells the weather forecast. </h3>
//     );
//   }
// });

var About = (props) => {
  return(
    <div className='text-center'>
    <h1> About </h1>
    <p className='text-left'>This is a basic weather app built using React.</p>
    <p className='text-left'>
      These are some of the tools I've used,
      <ul>
        <li> <a href="http://facebook.github.io">React</a> -  This is the Javascript framework that has been used.</li>
        <li> <a href="http://openweathermap.org">Open Weather Map</a> -  Data Source used to get the real time data.</li>
      </ul>
    </p>
    </div>
  );
}

module.exports = About;

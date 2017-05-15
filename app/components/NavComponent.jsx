var React = require('react');
var {Link, IndexLink} = require('react-router');

// var NavComponent = React.createClass({
//   render: function(){
//     return(
//     <div>
//       <h2> React Weather Application </h2>
//       <IndexLink to = '/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather </IndexLink>
//       <Link to = '/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </Link>
//       <Link to = '/example' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Examples </Link>
//     </div>
//     );
//   }
// });

var NavComponent = () => {
  return(
  <div>
    <h2> React Weather Application </h2>
    <IndexLink to = '/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather </IndexLink>
    <Link to = '/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </Link>
    <Link to = '/example' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Examples </Link>
  </div>
  );
}

module.exports = NavComponent;

var React = require('react');
var {Link} = require('react-router');
// var Examples = React.createClass({
//   render: function(){
//     return(
//       <h2> Check here for some beautiful examples </h2>
//     );
//   }
// });

var Examples = () => {
  return(
    <div>
    <h1 className="text-center"> Examples </h1>
    <p> Here are a few examples for you to try </p>
    <ol>
      <li><Link to='/?location=Bloomington'> Bloomington, IN </Link></li>
      <li><Link to='/?location=Bangalore'> Bangalore, India </Link></li>
    </ol>
    </div>
  );
}

module.exports = Examples;

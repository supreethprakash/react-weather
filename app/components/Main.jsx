var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//   render: function(){
//     return (
//       <div>
//           <Nav/>
//           {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return (
    <div>
        <Nav/>
        <div className="rows">
          <div className="columns small-6 large-4 small-centered">
            {props.children}
          </div>
        </div>

    </div>
  );
}

module.exports = Main;

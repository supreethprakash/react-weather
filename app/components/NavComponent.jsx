var React = require('react');
var {Link, IndexLink} = require('react-router');

var NavComponent = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    alert('Not yet Wired!');
  },
  render: function(){
    return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
        <li className="menu-text">React Weather Application</li>
        <li><IndexLink to = '/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather </IndexLink></li>
        <li><Link to = '/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </Link></li>
        <li><Link to = '/example' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Examples </Link></li>
        </ul>
      </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
          <ul className="menu">
          <li><input type="search" placeholder="Find Weather"/></li>
          <li><input type="submit" placeholder="Find Weather" className="button"/></li>
          </ul>
          </form>
        </div>
    </div>
    );
  }
});

module.exports = NavComponent;

var React = require('react');

var Base = React.createClass({
    render() {
        return (
            <div>
                <header>
                    <h1> Header </h1>
                </header>
                
                {this.props.children}
                
                <footer>
                    <h1> Footer </h1>
                </footer>
            </div>
        );
    }
});

module.exports = Base;
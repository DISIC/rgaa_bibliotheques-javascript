var React = require('react');
var RgaaReactBootstrap = require('rgaa_react-bootstrap');



/**
 *	A simple demo container that updates it's child progress bar.
 */
module.exports = React.createClass({

	getInitialState: function() {
		return {
			value: 0
		};
	},

	start: function() {
		this.setState({
			value: 0
		}, function() {
			clearInterval(this.interval);
			this.interval = setInterval(this.update, 100);
		});
	},

	update: function() {
		var value = this.state.value + 5;

		this.setState({
			value: value
		}, function() {
			if (this.state.value >= 100) {
				clearInterval(this.interval);
			}
		});
	},

	render: function() {
		return (
			<div>
				<RgaaReactBootstrap.ProgressBar
					label="%(percent)s%"
					title="Exemple de progress bar"
					target={this.props.target}
					now={this.state.value}
				/>

				<button
					type="button"
					className="btn btn-sm btn-primary"
					onClick={this.start}
				>
					Démarrer
				</button>
			</div>
		);
	}
});

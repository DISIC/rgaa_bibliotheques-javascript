var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var RgaaReactBootstrap = require('rgaa_react-bootstrap');



/**
 *	A simple demo container that allows to open a modal.
 */
module.exports = React.createClass({

	mixins: [
		ReactBootstrap.OverlayMixin
	],

	getInitialState: function() {
		return {
			open: false
		};
	},

	handleToggle: function() {
		this.setState(function() {
			return {
				open: !this.state.open
			};
		});
	},

	render: function() {
		return (
			<ReactBootstrap.Button onClick={this.handleToggle} bsStyle="primary">
				Ouvrir
			</ReactBootstrap.Button>
		);
	},

	renderOverlay: function() {
		if (!this.state.open) {
			return <noscript />;
		}

		return (
			<RgaaReactBootstrap.Modal
				bsStyle="primary"
				title="Titre de la fenêtre"
				onRequestHide={this.handleToggle}
			>
				<div className="modal-body">
					<p>Contenu de la modale.</p>
					<p><a href="#">Un lien</a>.</p>
				</div>

				<div className="modal-footer">
					<ReactBootstrap.Button onClick={this.handleToggle}>
						Fermer
					</ReactBootstrap.Button>
				</div>
			</RgaaReactBootstrap.Modal>
		);
	}
});

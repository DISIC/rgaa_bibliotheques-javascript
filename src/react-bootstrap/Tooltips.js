var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var RgaaReactBootstrap = require('rgaa_react-bootstrap');



/**
 *
 */
module.exports = React.createClass({

	render: function() {
		return (
			<ReactBootstrap.ButtonToolbar>
				<RgaaReactBootstrap.TooltipOverlayTrigger
					placement="left"
					overlay={
						<ReactBootstrap.Tooltip id="tooltip1">
							Informations complémentaires
						</ReactBootstrap.Tooltip>
					}
				>
					<ReactBootstrap.Button bsStyle="default">
						À gauche
					</ReactBootstrap.Button>
				</RgaaReactBootstrap.TooltipOverlayTrigger>

				<RgaaReactBootstrap.TooltipOverlayTrigger
					placement="top"
					overlay={
						<ReactBootstrap.Tooltip id="tooltip2">
							Informations complémentaires
						</ReactBootstrap.Tooltip>
					}
				>
					<ReactBootstrap.Button bsStyle="default">
						En haut
					</ReactBootstrap.Button>
				</RgaaReactBootstrap.TooltipOverlayTrigger>

				<RgaaReactBootstrap.TooltipOverlayTrigger
					placement="bottom"
					overlay={
						<ReactBootstrap.Tooltip id="tooltip3">
							Informations complémentaires
						</ReactBootstrap.Tooltip>
					}
				>
					<ReactBootstrap.Button bsStyle="default">
						En bas
					</ReactBootstrap.Button>
				</RgaaReactBootstrap.TooltipOverlayTrigger>

				<RgaaReactBootstrap.TooltipOverlayTrigger
					placement="right"
					overlay={
						<ReactBootstrap.Tooltip id="tooltip4">
							Informations complémentaires
						</ReactBootstrap.Tooltip>
					}
				>
					<ReactBootstrap.Button bsStyle="default">
						À droite
					</ReactBootstrap.Button>
				</RgaaReactBootstrap.TooltipOverlayTrigger>
			</ReactBootstrap.ButtonToolbar>
		);
	}
});

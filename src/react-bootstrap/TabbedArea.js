var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var RgaaReactBootstrap = require('rgaa_react-bootstrap');



/**
 *
 */
module.exports = React.createClass({

	render: function() {
		return (
			<RgaaReactBootstrap.TabbedArea defaultActiveKey={2}>
				<ReactBootstrap.TabPane eventKey={1} tab="Tab 1">
					Contenu sans éléments focusables.
				</ReactBootstrap.TabPane>

				<ReactBootstrap.TabPane eventKey={2} tab="Tab 2">
					Contenu avec <a href="#">un élément focusable</a>.
				</ReactBootstrap.TabPane>
			</RgaaReactBootstrap.TabbedArea>
		);
	}
});

var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var RgaaReactBootstrap = require('rgaa_react-bootstrap');



/**
 *
 */
module.exports = React.createClass({

	render: function() {
		return (
			<RgaaReactBootstrap.Accordion defaultActiveKeys={['1']}>
				<ReactBootstrap.Panel header="Titre 1" id="panel2" eventKey="1">
					<p>
						Anim pariatur cliche reprehenderit, enim eiusmod high life
						accusamus terry richardson ad squid. 3 wolf moon officia
						aute, non cupidatat skateboard dolor brunch. Food truck
						quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
						sunt aliqua put a bird on it squid single-origin coffee
						nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
						craft beer labore wes anderson cred nesciunt sapiente ea
						proident. Ad vegan excepteur butcher vice lomo. Leggings
						occaecat craft beer farm-to-table, raw denim aesthetic
						synth nesciunt you probably haven't heard of them accusamus
						labore sustainable VHS.
					</p>
				</ReactBootstrap.Panel>

				<ReactBootstrap.Panel header="Titre 2" id="panel2" eventKey="2">
					<p>
						Anim pariatur cliche reprehenderit, enim eiusmod high life
						accusamus terry richardson ad squid. 3 wolf moon officia
						aute, non cupidatat skateboard dolor brunch. Food truck
						quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
						sunt aliqua put a bird on it squid single-origin coffee
						nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
						craft beer labore wes anderson cred nesciunt sapiente ea
						proident. Ad vegan excepteur butcher vice lomo. Leggings
						occaecat craft beer farm-to-table, raw denim aesthetic
						synth nesciunt you probably haven't heard of them accusamus
						labore sustainable VHS.
					</p>
					<p><a href="#">Un lien</a>.</p>
				</ReactBootstrap.Panel>

				<ReactBootstrap.Panel header="Titre 3" id="panel2" eventKey="3">
					<p>
						Anim pariatur cliche reprehenderit, enim eiusmod high life
						accusamus terry richardson ad squid. 3 wolf moon officia
						aute, non cupidatat skateboard dolor brunch. Food truck
						quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
						sunt aliqua put a bird on it squid single-origin coffee
						nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
						craft beer labore wes anderson cred nesciunt sapiente ea
						proident. Ad vegan excepteur butcher vice lomo. Leggings
						occaecat craft beer farm-to-table, raw denim aesthetic
						synth nesciunt you probably haven't heard of them accusamus
						labore sustainable VHS.
					</p>
				</ReactBootstrap.Panel>
			</RgaaReactBootstrap.Accordion>
		);
	}
});

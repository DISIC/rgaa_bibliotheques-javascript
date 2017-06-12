var React = require('react');
var ReactDOM = require('react-dom');
var Accordion = require('./Accordion');
var ProgressBar = require('./ProgressBar');
var Tooltips = require('./Tooltips');



/**
 *
 */
var target = document.getElementById('progress-bar-target');

ReactDOM.render(<Accordion />, document.getElementById('accordion'));
ReactDOM.render(<ProgressBar target={target} />, document.getElementById('progress-bar'));
ReactDOM.render(<Tooltips />, document.getElementById('tooltip'));

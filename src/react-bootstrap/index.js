var React = require('react');
var Accordion = require('./Accordion');
var Modal = require('./Modal');
var ProgressBar = require('./ProgressBar');
var TabbedArea = require('./TabbedArea');
var Tooltips = require('./Tooltips');



/**
 *
 */
var target = document.getElementById('progress-bar-target');

React.render(<Accordion />, document.getElementById('accordion'));
React.render(<Modal />, document.getElementById('modal'));
React.render(<ProgressBar target={target} />, document.getElementById('progress-bar'));
React.render(<TabbedArea />, document.getElementById('tabs'));
React.render(<Tooltips />, document.getElementById('tooltip'));

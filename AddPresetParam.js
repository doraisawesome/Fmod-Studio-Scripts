/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
// Goal: add a existing parameter on the event

var projectPath = studio.project.filePath.substr(0, studio.project.filePath.lastIndexOf("/"));
// Get Events.js Module for event functions
var eventUtilPath = projectPath + "/Scripts/utils/Events.js";
var EVENT_UTILS = studio.system.require(eventUtilPath);

/* ENTER NAMES HERE FOR PARAMETERS TO ADD */
var paramNames = ["Speed"];

studio.menu.addMenuItem({
	name: 'User\\Add Parameter',
	keySequence: 'Ctrl+Shift+P',
	execute: function () {
		
		function getParameter(paramName) {
			var parameter = studio.project.lookup('parameter:/' + paramName);
			if (paramName == '' || parameter == undefined) {
				alert('No such parameter found: ' + paramName);
				return null;
			}
			return parameter;
		}
		
		paramNames.forEach(function(name) {
			var parameter = getParameter(name);
			var highlighedEvent = EVENT_UTILS.getHightlightEvent();
			highlighedEvent.addGameParameter(parameter);
		});
	}
});

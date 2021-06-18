/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/*
	Use this script to add an exiting parameter to the selected event

	Steps:
	1. Enter all parameter names you want to add down below (separate with comma)
	1. highlight the event
	2. Ctrl+Shift+P or select from Scripts menu to run this script
*/
var PARAMETER_NAMES_TO_ADD = ["Speed"];

var projectPath = studio.project.filePath.substr(0, studio.project.filePath.lastIndexOf("/"));
// Get Events.js Module for event functions
var eventUtilPath = projectPath + "/Scripts/utils/Events.js";
var EVENT_UTILS = studio.system.require(eventUtilPath);

studio.menu.addMenuItem({
	name: 'User\\Add Parameter',
	keySequence: 'Ctrl+Shift+P',
	execute: function () {
		
		function getParameter(paramName) {
			if (paramName != '') {
				var parameter = studio.project.lookup('parameter:/' + paramName);
				return parameter;
			}
			return false;
		}

		function checkParameter(parameter, name) {
			if (parameter == undefined || parameter == false) {
				alert('No parameter found: ' + name);
				return false;
			}
			return true;
		}
		
		PARAMETER_NAMES_TO_ADD.forEach(function(name) {
			var highlighedEvent = EVENT_UTILS.getHightlightEvent();
			var parameter = getParameter(name);
			var isParameterExist = checkParameter(parameter, name);

			if (isParameterExist == true) {
				highlighedEvent.addGameParameter(parameter);
			}
		});
	}
});

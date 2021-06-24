/*
	Use this script to add an exiting effect preset to the selected event's master track

	Steps:
	1. highlight the event
	2. Ctrl+Shift+M or select from Scripts menu to run this script
	3. enter the exact effect preset name when propmt with dialog box
*/

var projectPath = studio.project.filePath.substr(0, studio.project.filePath.lastIndexOf("/"));
// Get Events.js Module for event functions
var eventUtilPath = projectPath + "/Scripts/utils/Events.js";
var EVENT_UTILS = studio.system.require(eventUtilPath);

studio.menu.addMenuItem({
    name: 'User\\Add Preset Effect',
	keySequence: 'Ctrl+Shift+M',
	execute: function () {

		function getEffectPreset(presetName) {
			var allPresets = studio.project.model.EffectPreset.findInstances();
			var effectPreset = allPresets.find(function(preset) {
				if (presetName == preset.name) {
					return preset;
				}
				return false;
			});
			return effectPreset;
		}

		function checkEffectPreset(effectPreset) {
			if (!effectPreset) {
				alert('No such preset found!');
				return false;
			}
			return true;
		}

		function addEffectPresetToMasterTrack(widget) {
			var highlighedEvent = EVENT_UTILS.getHightlightEvent();
			var presetName = widget.findWidget('user_input').text();
			var effectPreset = getEffectPreset(presetName);
			var isEffectPresetExist = checkEffectPreset(effectPreset);
			
			if (isEffectPresetExist == true) {
				highlighedEvent.masterTrack.mixerGroup.effectChain.addEffect(effectPreset);
			}
		}

		studio.ui.showModalDialog({
			windowTitle: 'Add Effect Preset to Master Track',
			windowWidth: 340,
			windowHeight: 120,
			widgetType: studio.ui.widgetType.Layout,
			layout: studio.ui.layoutType.VBoxLayout,
			items: [{
				widgetType: studio.ui.widgetType.Lable,
				text: 'Input Preset Effect Name:',
			}, {
				widgetType: studio.ui.widgetType.LineEdit,
				widgetId: 'user_input',
				text: ''
			}, {
				widgetType: studio.ui.widgetType.PushButton,
				text: 'Done',
				onClicked: function () {
					addEffectPresetToMasterTrack(this);
					this.closeDialog();
				}
			}]
		});
	},
});

/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
// Goal: add a custom preset on master track

// 1. Get the master track of highlighted event
// 2. Get the preset -> then custom preset
// 3. Adding the preset to the master track

var projectPath = studio.project.filePath.substr(0, studio.project.filePath.lastIndexOf("/"));
// Get Events.js Module for event functions
var eventUtilPath = projectPath + "/Scripts/utils/Events.js";
var EVENT_UTILS = studio.system.require(eventUtilPath);

studio.menu.addMenuItem({
    name: 'User\\Add Effect Master',
	keySequence: 'Ctrl+Shift+M',
	execute: function () {

		function getEffectPreset(presetName) {
			var effectPreset = studio.project.lookup('effect:/' + presetName);
			if (presetName == '' || effectPreset == undefined) {
				alert('No such preset found!');
				return null;
			}
			return effectPreset;
		}

		function addEffectPresetToMasterTrack(widget) {
			var highlighedEvent = EVENT_UTILS.getHightlightEvent();
			var presetName = widget.findWidget('user_input').text();
			var effectPreset = getEffectPreset(presetName);
			
            highlighedEvent.masterTrack.mixerGroup.effectChain.addEffect(effectPreset);
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
				text: 'Normal'
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

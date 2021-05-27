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
    name: 'Spatializer\\Add Normal Spatializer',
	keySequence: 'Ctrl+H',
	execute: function () {

		function getEffectPreset() {
			return studio.project.lookup('effect:/Normal');
		}

		function addSpatializer() {
			var highlighedEvent = EVENT_UTILS.getHightlightEvent();
			var presetSpatilizer = getEffectPreset();
			
            highlighedEvent.masterTrack.mixerGroup.effectChain.addEffect(presetSpatilizer);
		}

		studio.ui.showModalDialog({
			windowTitle: 'Add Spatializer',
			windowWidth: 340,
			windowHeight: 120,
			widgetType: studio.ui.widgetType.Layout,
			layout: studio.ui.layoutType.VBoxLayout,
			items: [{

			}, {
				widgetType: studio.ui.widgetType.PushButton,
				text: 'Add Events',
				onClicked: function () {
					addSpatializer();
					this.closeDialog();
				}
			},
			]
		});
	},
});

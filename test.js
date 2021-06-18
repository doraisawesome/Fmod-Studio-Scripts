var projectPath = studio.project.filePath.substr(0, studio.project.filePath.lastIndexOf("/"));
// Get Events.js Module for event functions
var eventUtilPath = projectPath + "/Scripts/utils/Events.js";
var EVENT_UTILS = studio.system.require(eventUtilPath);

studio.menu.addMenuItem({
    name: 'User\\Test',
	keySequence: 'Ctrl+H',
	execute: function () {
        var event = studio.window.browserCurrent();
		var params = stu
		// var param = event.addGameParameter({
		// 	name: "Speed"
		// });
        // var multiSound = studio.window.editorCurrent().addSound(event.timeline, 'MultiSound', 0, 10);
        // multiSound.dump();



		// studio.ui.showModalDialog({
		// 	windowTitle: 'Add Effect Preset to Master Track',
		// 	windowWidth: 340,
		// 	windowHeight: 120,
		// 	widgetType: studio.ui.widgetType.Layout,
		// 	layout: studio.ui.layoutType.VBoxLayout,
		// 	items: [{
		// 		widgetType: studio.ui.widgetType.Lable,
		// 		text: 'Input Preset Effect Name:',
		// 	}, {
		// 		widgetType: studio.ui.widgetType.LineEdit,
		// 		widgetId: 'user_input',
		// 		text: 'Normal'
		// 	}, {
		// 		widgetType: studio.ui.widgetType.PushButton,
		// 		text: 'Done',
		// 		onClicked: function () {
		// 			addEffectPresetToMasterTrack(this);
		// 			this.closeDialog();
		// 		}
		// 	}]
		// });
	},
});
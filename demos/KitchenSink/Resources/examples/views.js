// create table view data object
var data = [
	{title:'Events', hasChild:true, test:'../examples/view_events.js'},
	{title:'Events Propagation', hasChild:true, test:'../examples/view_event_propagation.js'},
	{title:'Map View', hasChild:true, test:'../examples/map_view.js'},
	{title:'Coverflow View', hasChild:true, test:'../examples/coverflow_view.js'},
	{title:'Image Views', hasChild:true, test:'../examples/image_views.js'},
	{title:'Scroll Views', hasChild:true, test:'../examples/scroll_views.js'},
	{title:'Table Views', hasChild:true, test:'../examples/table_views.js'},
	{title:'Grouped Views', hasChild:true, test:'../examples/grouped_views.js'},
	{title:'Web Views', hasChild:true, test:'../examples/web_views.js'},
	{title:'Alert Dialog', hasChild:true, test:'../examples/alert.js'},
	{title:'Options Dialog', hasChild:true, test:'../examples/options_dialog.js'},
	{title:'Email Dialog', hasChild:true, test:'../examples/email_dialog.js'},
	// {title:'Canvas Views', hasChild:true, test:'../examples/canvas_views.js'},
	{title:'Mixing Views', hasChild:true, test:'../examples/mixing_views_1.js'},

];

// create table view
var tableview = Titanium.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.test,
			title:e.rowData.title
		});
		Titanium.UI.currentTab.open(win,{animated:true})
	}
});

// add table view to the window
Titanium.UI.currentWindow.add(tableview);

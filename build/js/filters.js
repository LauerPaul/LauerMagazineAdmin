$(document).ready(function(){
	// Categories table
	$('#categories').datatable({
		pageSize: 15,
		sort: [false, true, true, false],
		filters: [false, true, false, false],
		filterText: 'Search...',
		pagingDivSelector: "#paging-table"
	});
});
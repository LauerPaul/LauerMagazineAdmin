$(document).ready(function(){
	// Categories table
	$('#categories').datatable({
		pageSize: 15,
		sort: [false, true, true, true],
		filters: [false, true, true, true],
		filterText: 'Search...',
		pagingDivSelector: "#paging-table"
	});
});
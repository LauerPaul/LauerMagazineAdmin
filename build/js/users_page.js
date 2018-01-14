$(document).ready(function(){
  // Admins table
  $('#users').datatable({
      pageSize: 15,
      sort: [false, true, true, false, true],
      filters: [false, true, true, true, 'select', true, false],
      filterText: 'Search...',
      pagingDivSelector: "#paging-table"
  });

  if($(window).width() > 767){
    new Morris.Donut({
      element: 'myfirstchart',
      data: [
        {label: "Admin", value: 3},
        {label: "Moderator", value: 1},
        {label: "SEO", value: 4},
      ]
    });
  }
});
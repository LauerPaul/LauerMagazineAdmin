jQuery(document).ready(function($) {app.init()});
var
/*Application*/ 
app = {
	init: function(){
		let scroll_options = {					 	// scroll options
			maintainPosition: 	true,
			horizontalGutter: 	-6,
			verticalGutter: 	-6
		};
		this.lm();									// menu init
		this.header();								// header init
		this.scrollFix.load();						// fix on scroll
		
		$(document).ready(function(){
			plugin.jsp('.srcollInit', scroll_options);	// scroll init
			$('input[type="checkbox"]').iCheck({});
		});
	},
	/*left menu*/
	lm: function(){
		let parent = $('.left-menu');			 	// left menu obj
		let wrapper = $('.wrapper-list', parent);	// wrapper menu items
		let scroll_options = {					 	// scroll options
			maintainPosition: 	true,
			horizontalGutter: 	-6,
			verticalGutter: 	-6
		};
		let item = '.left-menu .item.list';			// item
		
		plugin.jsp(wrapper, scroll_options);		// scroll init

		// Click item
		$(document).on('click', item, function(){
			let i = $(this);
			if(!i.hasClass('open')){
				$(item).removeClass('open');
				i.addClass('open');
			} else { i.removeClass('open'); }
		});
	},
	/*header*/
	header: function(){
		let toggleMenu = 'header .fa-bars';		// Icon toggle menu
		let body = $('body');					// Body

		$(document)
		.on('click', toggleMenu, function(event) {body.toggleClass('open-menu');})	// toggle open left menu mobile
		.on('click', 'header .notify-wrapper .dropdown-menu', function(event) {		// notifycation popup click
			return false;
		});
	},
	scrollFix: {
		load: function(){
			if($('.col-md-hide').length > 0) {
				this.init('.scroll-col', '.control-wrapper-save');
			}
		},
		init: function(a, b){
			$(document).scroll(function(){
				if($(window).width() > 767){
					var pageH = $(document).outerHeight(),
						LbH = $(a).outerHeight(),
						LbT = $(a).offset().top,
						fixed = $(b),
						maxBottom = pageH - LbT - ((pageH - (LbH + LbT)) + fixed.outerHeight()),
						offset = $(document).scrollTop();
						value_ = offset <= LbT ? 0 : (offset - LbT < maxBottom ? offset - LbT + $('header').height() + 30 : maxBottom);
						fixed.css({'top' : value_});
					if(!value_) {fixed.removeClass('scrollInit')} else {fixed.addClass('scrollInit')}
				}
			});
		}
	}
},
plugin = {
	/*scrollpane init*/
	jsp: function(wrap, options){
		options = typeof(options) == 'undefined' ? '' : options;
		let element = $(wrap).jScrollPane(options);
		let api_case = element.data('jsp');

		$(window).resize(function() { setTimeout(function(){ api_case.reinitialise(options); }, 1000); });
	}
}
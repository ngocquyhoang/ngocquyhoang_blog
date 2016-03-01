// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets
jQuery(function ($) {
	/*-------------------------------------------------------------------*/
	/*              Progress bar Javascript                   */
	/*-------------------------------------------------------------------*/
	$('.skill-progress').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			var thisSkill = $(this).find('.progress-bar.six-sec-ease-in-out');
			thisSkill.css('width', thisSkill.attr('aria-valuenow')+'%');
			$(this).unbind('inview');
		}
	});
	/*-------------------------------------------------------------------*/
	/*                         Back to top button                             */
	/*-------------------------------------------------------------------*/
	
	/*-------------------------------------------------------------------*/
	/*                              Project done                                 */
	/*-------------------------------------------------------------------*/
	(function () {
		var $grid = $('#grid');
		$grid.shuffle({
			itemSelector: '.portfolio-item'
		});
		/* reshuffle when user clicks a filter item */
		$('#filter a').click(function (e) {
			e.preventDefault();
			// set active class
			$('#filter a').removeClass('active');
			$(this).addClass('active');
			// get group name from clicked item
			var groupName = $(this).attr('data-group');
			// reshuffle grid
			$grid.shuffle('shuffle', groupName );
		});
	}());

	setTimeout(function(){ 
		var $grid = $('#grid');
		$grid.shuffle({
			itemSelector: '.portfolio-item'
		});
		console.log('ok');
		$grid.shuffle('shuffle', 'all' );
	}, 69);

})

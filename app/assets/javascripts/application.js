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
	(function () {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});
	}());
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
		$grid.shuffle('shuffle', 'all' );
	}, 100);
	/*------------------------------------------------------------------------*/
	/*                                    Sticky menu                                 */
	/*------------------------------------------------------------------------*/
	jQuery(document).ready(function($) {
		$("#nav-menu").sticky({topSpacing:0});
		jQuery('.ngocquy_post').addClass("ngocquy_hidden").viewportChecker({
			classToAdd: 'ngocquy_visible animated fadeInUp', 
			offset: 100,
		});
	});
	/*fadeInDown flipInX bounceInUp*/
	/*------------------------------------------------------------------------*/
	/*                                    Send message                               */
	/*------------------------------------------------------------------------*/
	$('#contact #submit_contact_form').click(function(event) {
		$('#contact .contact_el').removeClass('error success');
		var name = $('#contact input[name="name"]');
		var email = $('#contact input[name="email"]');
		var subject = $('#contact input[name="subject"]');
		var message = $('#contact textarea[name="message"]');
		if (name.val() !== "" ) {
			name.addClass('success');
		} else{
			name.addClass('error');
		};
		if (email.val() !== "" ) {
			if (validateEmail(email.val())) {
				email.addClass('success');
			} else{
				email.addClass('error');
			};
		} else{
			email.addClass('error');
		};
		if (subject.val() !== "" ) {
			subject.addClass('success');
		} else{
			subject.addClass('error');
		};
		if (message.val() !== "" ) {
			message.addClass('success');
		} else{
			message.addClass('error');
		};
		var suc_arr = $('#contact .row .success');
		if (suc_arr.length == 4) {
			$.ajax({
				url: "send_message",
				type: "POST",
				data: {"name": name.val(), "email": email.val(), "subject": subject.val(), "message": message.val()},
				success: function(data) {
					if (typeof data["notice"] != 'undefined') {
						location.reload();
					};
				}
			});
		} ;
	});
	/*------------------------------------------------------------------------*/
	/*                                    Smooth scroll                               */
	/*------------------------------------------------------------------------*/
	(function () {
		$('.smooth_scroll').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});
	}());
	/*------------------------------------------------------------------------*/
	/*                                 add active class                               */
	/*------------------------------------------------------------------------*/
	$('#nav-menu ul li').click(function(event) {
		$('#nav-menu ul li').removeClass('active');
		$(this).addClass('active');
		if ($('#nav-reponsive-button').css('display') == 'block') {
			setTimeout(function(){ 
				$('#nav-reponsive-button').click();
			}, 1000);
		};
	});
})
function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

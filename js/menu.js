jQuery(document).ready(function() {
	jQuery('.toggle-nav').click(function(e) {
		jQuery(this).toggleClass('active');
		jQuery('.navmenu ul').toggleClass('active');

		e.preventDefault();
	});
});
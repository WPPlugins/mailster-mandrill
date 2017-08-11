jQuery(document).ready(function($) {

	$('.mailster-mandrill-api').on('change', function(){

		($(this).val() == 'smtp')
			? $('.mandrill-tab-smtp').slideDown()
			: $('.mandrill-tab-smtp').slideUp();

	});

});

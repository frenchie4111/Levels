var ANIMATION_SPEED = 150;

function expand( target ) {
	if( target ) {
		$("#" + target).parents(".box_cont").removeClass("hidden", ANIMATION_SPEED, "linear");
		$("#" + target).removeClass("hidden", ANIMATION_SPEED, "linear");
	}
}

function collapse( target ) {
	if( target ) {
		$("#" + target).parents(".box_cont").addClass("hidden", ANIMATION_SPEED, "linear");
		$("#" + target).parents(".box_cont").next(".box_cont").addClass("hidden", ANIMATION_SPEED, "linear");
		$("#" + target).addClass("hidden", ANIMATION_SPEED, "linear");
	}
}

$(document).ready( function() {
	$(".line_button").click(function() {
		var target = $(this).attr("data-target")
		if( !$(this).hasClass("open") ) {
			$(this).addClass("open");

			$(this).parents(".box_cont").next(".box_cont").find(".box").each(function() {
				$(this).addClass("hidden");
				console.log(target);
			});

			expand(target);
		} else {
			$(this).removeClass("open");
			collapse(target);
		}
	});

	$(".box_cont").hover(function() {
		$(this).removeClass("box_cont_slim", ANIMATION_SPEED, "linear");
		$(this).prev(".box_cont").each(function() {
			$(this).addClass("box_cont_slim", ANIMATION_SPEED, "linear");
		});
	}, function() {

	});
});
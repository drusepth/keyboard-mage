$(document).ready(function () {
	// Initialize game engine
	var engine = game_engine();


	$.get('templates/battle.mst', function(template) {
	    var rendered = Mustache.render(template, {name: "Luke"});
	    $('body').html(rendered);
	});



	$('#cast_spell').click(function () {
		var chosen_spell = spells[Math.floor(Math.random() * spells.length)];
		console.log('Attempting to cast ' + chosen_spell.name);

		engine.cast_spell(chosen_spell);
	});

});
$(document).ready(function () {
	// Initialize game engine
	var engine = game_engine();

	engine.show_template($('body'), 'battle', {});


	$('#cast_spell').click(function () {
		var chosen_spell = spells[Math.floor(Math.random() * spells.length)];
		console.log('Attempting to cast ' + chosen_spell.name);

		engine.cast_spell(chosen_spell);
	});

});
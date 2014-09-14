console.log('alive');

$(document).ready(function () {

	var engine = game_engine();

	$('#cast_spell').click(function () {
		var chosen_spell = spells[Math.floor(Math.random() * spells.length)];
		console.log('Attempting to cast ' + chosen_spell.name);

		engine.cast_spell(chosen_spell);
	});

});
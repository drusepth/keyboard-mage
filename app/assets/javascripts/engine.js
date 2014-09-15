var game_engine = function (game_container) {
	var _public  = {},
	    _private = {};

	// DOM container for the game
	_private.game_container = game_container;

	// First scene to load on game load
	_public.initial_template = 'battle';

	// Display incantation text
	_private.incantation_display = '#spell-text';

	// Input for user to type incantation
	_private.spell_input = '#spell-input';

	// Time remaining to finish casting the current spell
	_private.time_remaining = '#spell-time-left';

	// Battle results for stuff
	_private.battle_results = '#results';

	// ATB update frequency
	_private.timer_frequency = 50; // ms
	_private.timer_timestep = 0.50; // #todo math

	_public.show_template = function (template, data, target) {
		// Default param for target to game container
		target = (typeof target !== 'undefined' ? target : _private.game_container);

		$.get('game_template/' + template, function (t) {
			var rendered_template = Mustache.render(t, data);
			$(target).html(rendered_template);
		});
	};

	_public.cast_spell = function (spell) {
		$(_private.incantation_display).html('Please type...<br />' + spell.incantation);
		$(_private.spell_input).val('').focus();

		var time_left = spell.casting_time;
		var timer = setInterval(function () {
			time_left -= _private.timer_timestep;

			$(_private.time_remaining).find('.time-filler').text('Time left: ' + Math.max(0, time_left));
			$(_private.time_remaining).find('.time-filler').css('width', 100 - Math.max(0, time_left) + '%');

			if ($(_private.spell_input).val() == spell.incantation) {
				var spell_response = spell.cast();
				$(_private.battle_results).text(spell_response + ' ' + Math.round(time_left) + ' bonus damage!');

				clearInterval(timer);
			} else if (time_left <= 0) {
				$(_private.battle_results).text('Failed to cast ' + spell.name + '!');

				clearInterval(timer);
			}
		}, _private.timer_frequency);
	};

	return _public;
}

console.log('Engine loaded');
var game_engine = function () {
	var _public  = {},
	    _private = {};

	// Display incantation text
	_private.incantation_display = $('#spell_text');

	// Input for user to type incantation
	_private.spell_input = $('#spell_input');

	// Time remaining to finish casting the current spell
	_private.time_remaining = $('#spell_time_left');

	// ATB update frequency (ms)
	_private.timer_frequency = 1000;

	_private.process_incantation = function (spell) {
		var time_left = spell.casting_time;
		var timer = setInterval(function () {
			time_left -= 15;

			_private.time_remaining.text(time_left);

			if (_private.spell_input.val() == spell.incantation) {
				spell.cast();
				clearInterval(timer);
			} else if (time_left <= 0) {
				console.log('Failed to cast ' + spell.name);
				clearInterval(timer);
			}
		}, _private.timer_frequency);
	}

	_public.cast_spell = function (spell) {
		_private.incantation_display.text(spell.incantation);
		_private.spell_input.focus();

		_private.process_incantation(spell);
	}

	return _public;
}

console.log('Engine loaded');
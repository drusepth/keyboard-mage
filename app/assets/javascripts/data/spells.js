var spells = [
	{
		name: 'Fireball',
		incantation: 'Summon a fireball pls',
		mp_cost: 30,
		casting_time: 100,
		cast: function (target) {
			return 'Successfully cast Fireball!';
		}
	},

	{
		name: 'Lightning bolt',
		incantation: 'Hit this bro with lightning',
		mp_const: 30,
		casting_time: 100,
		cast: function (target) {
			return 'Successfully cast Lightning bolt!';
		}
	}

]
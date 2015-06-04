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
	},

	{
		name: 'Magic missile',
		incantation: 'Abra kadabra',
		mp_const: 20,
		casting_time: 50,
		cast: function (target) {
			return 'Successfully cast Magic missile!';
		}
	}

]
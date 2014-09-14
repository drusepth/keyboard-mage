var spells = [
	{
		name: 'Fireball',
		incantation: 'Summon a fireball pls',
		mp_cost: 30,
		casting_time: 100,
		cast: function (target) {
			console.log('Successfully cast fireball!');
		}
	},

	{
		name: 'Lightning bolt',
		incantation: 'Hit this bro with lightning',
		mp_const: 30,
		casting_time: 100,
		cast: function (target) {
			console.log('Successfully cast lightning bolt');
		}
	}

]
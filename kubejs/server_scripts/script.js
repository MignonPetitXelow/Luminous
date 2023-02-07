onEvent('block.loot_tables', event => {
	event.addBlock(/minecraft:.*_leaves/, x => {
		x.addPool(pool => {
			pool.survivesExplosion()
			pool.addItem('minecraft:stick', 1, [1, 3])
		})
	})
});

onEvent('recipes', event => {
	event.remove({output: 'minecraft:stick'});

	event.shapeless('3x farmerdelights:rope', [
		'SD',
	], {
		S: Item.of('farmerdelights:flint_knife').ignoreNBT(),
		D: 'minecraft:stick'
	}).damageIngredient(1).keepIngredient('farmerdelights:flint_knife')
});
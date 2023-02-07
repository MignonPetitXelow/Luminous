onEvent('block.loot_tables', event => {
	event.addBlock(/minecraft:.*_leaves/, table => {
		table.addPool(pool => {
			pool.survivesExplosion()
			pool.addItem('minecraft:stick', 1, [1, 3])
		})
	})
});

onEvent('recipes', event => {
	event.remove({output: 'minecraft:stick'})
});
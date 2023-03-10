onEvent('block.loot_tables', event => {
	event.addBlock(/minecraft:.*_leaves/, x => {
		x.addPool(pool => {
			pool.survivesExplosion()
			pool.addItem('minecraft:stick', 1, [1, 3])
		})
	})
});
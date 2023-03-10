onEvent('recipes', event => {
	craftRemove(event);
	
	event.shaped('minecraft:crafting_table', [
		'AB ',
		'CC ',
		'   '
	  ], {
		A: 'tconstruct:pattern',
		B: '#forge:rods',
		C: '#minecraft:planks',
	});

	event.shapeless('4x minecraft:stick', ['#minecraft:planks', '#forge:fillet_knife']).keepIngredient('#forge:fillet_knife');
});

function craftRemove(event)
{
	event.remove({output: 'minecraft:stick'});
	event.remove({output: 'minecraft:wooden_pickaxe'});
	event.remove({output: 'minecraft:wooden_axe'});
	event.remove({output: 'minecraft:wooden_shovel'});
	event.remove({output: 'minecraft:wooden_hoe'});
	event.remove({output: 'minecraft:wooden_sword'});
	event.remove({output: 'minecraft:crafting_table'});
}
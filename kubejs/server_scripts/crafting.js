onEvent('recipes', event => {
	craftRemove(event);
	
	event.shaped('minecraft:crafting_table', [
		'AB ',
		'CC ',
		'   '
	  ], {
		A: 'tconstruct:pattern',
		B: '#forge:rods',
		C: '#minecraft:planks'
	});

	// Dont use before pre-release
	/*event.shaped('tiab:timeinabottle', [
		'ABA',
		'CDC',
		'EBE'
	  ], {
		A: 'mysticalagriculture:prudentium_ingot',
		B: 'projecte:klein_star_sphere',
		C: 'minecraft:gold_ingot',
		D: 'projecte:watch_of_flowing_time',
		E: 'mysticalagriculture:imperium_gemstone'
	});*/

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
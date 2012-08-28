(function (){

	var itemsToDisplay = [{name:0},{name:1},{name:2},{name:3},{name:4},{name:5}];

	var createItem = function(itemToDisplay){

		var item = DOMBUILDER.liBuilder([
			DOMBUILDER.spanBuilder(['The element name is ' + itemToDisplay.name]),
			DOMBUILDER.inputBuilder(null, {type: 'text'})],
			{className: 'item'}
		);

		return item;
	};

	var list = DOMBUILDER.ulBuilder(
		itemsToDisplay.map(createItem),
		{className: 'mainList'}
	);

	document.getElementById('main').appendChild(list);
})();
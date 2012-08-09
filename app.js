(function (){

	var itemsToDisplay = [{name:0},{name:1},{name:2},{name:3},{name:4},{name:5}];

	var createItem = function(itemToDisplay){

		var item = DomBuilder.liBuilder([
			DomBuilder.spanBuilder(['The element name is ' + itemToDisplay.name]),
			DomBuilder.inputBuilder(null, {type: 'text'})],			
			{className: 'item'}
		);

		return item;
	};

	var list = DomBuilder.ulBuilder(
		itemsToDisplay.map(createItem), 
		{className: 'mainList'}
	);

	document.getElementById('main').appendChild(list);
})();
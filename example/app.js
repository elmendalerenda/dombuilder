(function (){

	var itemsToDisplay = [{name:0},{name:1},{name:2},{name:3},{name:4},{name:5}];

	var createItem = function(itemToDisplay){

		var item = DB.LI([
			DB.SPAN(['The element name is ' + itemToDisplay.name]),
			DB.INPUT(null, {type: 'text'})],
			{className: 'item'}
		);

		return item;
	};

	var list = DB.UL(
		itemsToDisplay.map(createItem),
		{className: 'mainList'}
	);

	document.getElementById('main').appendChild(list);
})();
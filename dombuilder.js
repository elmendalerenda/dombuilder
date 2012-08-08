
(function dombuilder(){
	
	var itemsToDisplay = [{name:0},{name:1},{name:2},{name:3},{name:4},{name:5}];

	var createItems = function(){

		var items = itemsToDisplay.map(function(itemToDisplay){
			var item = document.createElement('li');
			item.className = 'item';

			var text = document.createElement('p');
			text.innerHTML = 'The element name is ' + itemToDisplay.name;

			var input = document.createElement('input');
			input.type = 'text';

			item.appendChild(text);
			item.appendChild(input);
			return item;
		});

		return items;
	};


	var list = document.createElement('ul');
	list.className = 'mainlist';


	var items = createItems();
	for(var i = 0; i < items.length; i++){
		list.appendChild(items[i]);
	}
	

	document.getElementById('main').appendChild(list);

})();
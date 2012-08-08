
(function dombuilder(){
	
	var itemsToDisplay = [{name:0},{name:1},{name:2},{name:3},{name:4},{name:5}];


	var list = document.createElement('ul');
	list.className = 'mainlist';


	for(var i = 0; i < itemsToDisplay.length; i++){


		var item = document.createElement('li');
		item.className = 'item';

		var text = document.createElement('p');
		text.innerHTML = 'The element name is ' + itemsToDisplay[i].name;

		var input = document.createElement('input');
		input.type = 'text';

		item.appendChild(text);
		item.appendChild(input);

		list.appendChild(item);
	}

	document.getElementById('main').appendChild(list);

})();

(function dombuilder(){
	
	var itemsToDisplay = [{name:0},{name:1},{name:2},{name:3},{name:4},{name:5}];

	var elementBuilder = function(tagName){

		return function(children){
			children = children || [];

			var element = document.createElement(tagName);

			for(var i=0; i<children.length; i++){
				var innerElement = children[i];
				if(typeof innerElement === 'string')
					innerElement = document.createTextNode(innerElement);

				element.appendChild(innerElement);
			}

			return element;
		};
	};

	var li = elementBuilder('li');
	var span = elementBuilder('span');
	var input = elementBuilder('input');
	var ul = elementBuilder('ul');

	var createItems = function(){
		var items = itemsToDisplay.map(function(itemToDisplay){
			var text = span(['The element name is ' + itemToDisplay.name]); 

			var field = input();
			field.type = 'text';

			var item = li([text, field]);
			item.className = 'item';

			return item;
		});

		return items;
	};

	var list = ul(createItems());
	list.className = 'mainlist';
	

	document.getElementById('main').appendChild(list);

})();
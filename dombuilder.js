
(function dombuilder(){
	
	var itemsToDisplay = [{name:0},{name:1},{name:2},{name:3},{name:4},{name:5}];

	var elementBuilder = function(tagName){

		return function(children, props){
			children = children || [];
			props = props || [];

			var element = document.createElement(tagName);

			element = children.reduce(function(reducedElement, child){
				var innerElement = child;
				if(typeof innerElement === 'string')
					innerElement = document.createTextNode(innerElement);

				reducedElement.appendChild(innerElement);
				return reducedElement;
			},element);

			for(var propertyName in props){
				element[propertyName] = props[propertyName]; 
			}

			return element;
		};
	};

	var li = elementBuilder('li');
	var span = elementBuilder('span');
	var input = elementBuilder('input');
	var ul = elementBuilder('ul');

	var createItem = function(itemToDisplay){
		var text = span(['The element name is ' + itemToDisplay.name]); 
		var field = input(null, {type: 'text'});

		var item = li([text, field], {className: 'item'});

		return item;
	};

	var list = ul(itemsToDisplay.map(createItem), {className: 'mainList'});

	document.getElementById('main').appendChild(list);

})();
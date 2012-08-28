var DOMBUILDER = (function(document) {

	var elementBuilder = function(tagName) {
			return function(children, properties) {
				children = checkChildren(children);

				var element = document.createElement(tagName);
				element = appendChildren(children, element);
				element = appendProperties(properties, element);
				return element;
			};
		};

	var checkChildren = function(children) {
			children = children || [];
			if (children instanceof Array) return children;
			return [children];
		};
	var appendChildren = function(children, emptyElement) {

			var element = children.reduce(function(reducedElement, child) {
				var innerElement = child;
				if (typeof innerElement === 'string') innerElement = document.createTextNode(innerElement);

				reducedElement.appendChild(innerElement);
				return reducedElement;
			}, emptyElement);

			return element;
		};

	var appendProperties = function(properties, element) {
			properties = properties || [];

			for (var propertyName in properties) {
				element[propertyName] = properties[propertyName];
			}

			return element;
		};

	return {
		elementBuilder: elementBuilder,
		divBuilder : elementBuilder('div'),
		pBuilder : elementBuilder('p'),
		aBuilder : elementBuilder('a'),
		imgBuilder : elementBuilder('img'),
		ulBuilder : elementBuilder('ul'),
		liBuilder : elementBuilder('li'),
		inputBuilder : elementBuilder('input'),
		spanBuilder : elementBuilder('span')
	};
})(document);
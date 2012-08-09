var DomBuilder = new function(){

	this.elementBuilder = function(tagName) {

		return function(children, props) {
			children = children || [];
			props = props || [];

			var element = document.createElement(tagName);

			element = children.reduce(function(reducedElement, child) {
				var innerElement = child;
				if (typeof innerElement === 'string') innerElement = document.createTextNode(innerElement);

				reducedElement.appendChild(innerElement);
				return reducedElement;
			}, element);

			for (var propertyName in props) {
				element[propertyName] = props[propertyName];
			}
			return element;
		};
	};

	this.liBuilder = this.elementBuilder('li');
	this.spanBuilder = this.elementBuilder('span');
	this.inputBuilder = this.elementBuilder('input');
	this.ulBuilder = this.elementBuilder('ul');
};
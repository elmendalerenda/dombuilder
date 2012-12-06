var DB = DB || (function(document) {


	this.element = function(tagName) {
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
			if(children instanceof Array) return children;
			return [children];
		};

	var appendChildren = function(children, emptyElement) {

			var element = children.reduce(function(reducedElement, child) {
				var innerElement = child;
				if(typeof innerElement === 'string') innerElement = document.createTextNode(innerElement);

				reducedElement.appendChild(innerElement);
				return reducedElement;
			}, emptyElement);

			return element;
		};

	var appendProperties = function(properties, element) {
			properties = properties || [];

			for(var propertyName in properties) {
				if(properties.hasOwnProperty(propertyName)) element[propertyName] = properties[propertyName];
			}

			return element;
		};


	var createBuiltInFunctions = function() {
			var htmlTags = ["A", "ARTICLE", "ASIDE", "BR", "BUTTON", "CANVAS", "CAPTION", "DIV", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEAD", "HEADER", "HGROUP", "HR", "HTML", "IMG", "INPUT", "LABEL", "LEGEND", "LI", "LINK", "MAP", "P", "PARAM", "PRE", "SCRIPT", "SECTION", "SELECT", "SMALL", "SOURCE", "SPAN", "STRONG", "STYLE", "TEXTAREA", "TITLE", "UL"]

			var i = htmlTags.length;
			while(i--) {
				var tagName = htmlTags[i];
				this[tagName] = this.element(tagName.toLowerCase());
			}
		}

	createBuiltInFunctions();
	return this;

})(document);
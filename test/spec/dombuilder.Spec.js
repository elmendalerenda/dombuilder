describe("dombuilder", function() {

    it('creates an DOM Element', function(){
        var element = DOMBUILDER.element('div')();

        expect(element instanceof Element).toBeTruthy();
        expect(element.tagName).toEqual('DIV');
    });

    it('hosts an elements', function(){
        var li = DOMBUILDER.element('li')();
        var element = DOMBUILDER.element('ul')(li);


        expect(element.firstChild.tagName).toEqual('LI');
    });

    it('hosts more than one elements', function(){
        var aLi = DOMBUILDER.element('li')();
        var anotherLi = DOMBUILDER.element('li')();
        var element = DOMBUILDER.element('ul')(
            [aLi, anotherLi]);

        expect(element.children.length).toBe(2);
        expect(element.firstChild.tagName).toEqual('LI');
    });

    it('hosts text', function(){
        var element = DOMBUILDER.element('ul')(
            'a test text');

        expect(element.innerHTML).toEqual('a test text');

        element = DOMBUILDER.element('ul')(
            ['a test text',
            DOMBUILDER.element('li')()]);

        expect(element.innerHTML).toMatch('a test text');
        expect(element.children[0].tagName).toEqual('LI');
    });

    it('assign properties to the element', function(){
        var element = DOMBUILDER.element('div')(
            null,
            {className: 'aClassName', id: 'uniqueId'});

        expect(element.className).toEqual('aClassName');
        expect(element.id).toEqual('uniqueId');
    });

    it('has built-in builders', function(){
        expect(DOMBUILDER.div().tagName).toEqual('DIV');
        expect(DOMBUILDER.p().tagName).toEqual('P');
        expect(DOMBUILDER.a().tagName).toEqual('A');
        expect(DOMBUILDER.img().tagName).toEqual('IMG');
        expect(DOMBUILDER.ul().tagName).toEqual('UL');
        expect(DOMBUILDER.li().tagName).toEqual('LI');
        expect(DOMBUILDER.input().tagName).toEqual('INPUT');
        expect(DOMBUILDER.span().tagName).toEqual('SPAN');
    });



});
describe("dombuilder", function() {

    it('creates an DOM Element', function(){
        var element = DOMBUILDER.elementBuilder('div')();

        expect(element instanceof Element).toBeTruthy();
        expect(element.tagName).toEqual('DIV');
    });

    it('hosts an elements', function(){
        var li = DOMBUILDER.elementBuilder('li')();
        var element = DOMBUILDER.elementBuilder('ul')(li);


        expect(element.firstChild.tagName).toEqual('LI');
    });

    it('hosts more than one elements', function(){
        var aLi = DOMBUILDER.elementBuilder('li')();
        var anotherLi = DOMBUILDER.elementBuilder('li')();
        var element = DOMBUILDER.elementBuilder('ul')(
            [aLi, anotherLi]);

        expect(element.children.length).toBe(2);
        expect(element.firstChild.tagName).toEqual('LI');
    });

    it('hosts text', function(){
        var element = DOMBUILDER.elementBuilder('ul')(
            'a test text');

        expect(element.innerHTML).toEqual('a test text');

        element = DOMBUILDER.elementBuilder('ul')(
            ['a test text',
            DOMBUILDER.elementBuilder('li')()]);

        expect(element.innerHTML).toMatch('a test text');
        expect(element.children[0].tagName).toEqual('LI');
    });

    it('assign properties to the element', function(){
        var element = DOMBUILDER.elementBuilder('div')(
            null,
            {className: 'aClassName', id: 'uniqueId'});

        expect(element.className).toEqual('aClassName');
        expect(element.id).toEqual('uniqueId');
    });

    it('has built-in builders', function(){
        expect(DOMBUILDER.divBuilder().tagName).toEqual('DIV');
        expect(DOMBUILDER.pBuilder().tagName).toEqual('P');
        expect(DOMBUILDER.aBuilder().tagName).toEqual('A');
        expect(DOMBUILDER.imgBuilder().tagName).toEqual('IMG');
        expect(DOMBUILDER.ulBuilder().tagName).toEqual('UL');
        expect(DOMBUILDER.liBuilder().tagName).toEqual('LI');
        expect(DOMBUILDER.inputBuilder().tagName).toEqual('INPUT');
        expect(DOMBUILDER.spanBuilder().tagName).toEqual('SPAN');
    });



});
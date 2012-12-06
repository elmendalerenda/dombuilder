describe("dombuilder", function() {

    it('creates an DOM Element', function(){
        var element = DB.element('div')();

        expect(element instanceof Element).toBeTruthy();
        expect(element.tagName).toEqual('DIV');
    });

    it('hosts an elements', function(){
        var li = DB.element('li')();
        var element = DB.element('ul')(li);


        expect(element.firstChild.tagName).toEqual('LI');
    });

    it('hosts more than one elements', function(){
        var aLi = DB.element('li')();
        var anotherLi = DB.element('li')();
        var element = DB.element('ul')(
            [aLi, anotherLi]);

        expect(element.children.length).toBe(2);
        expect(element.firstChild.tagName).toEqual('LI');
    });

    it('hosts text', function(){
        var element = DB.element('ul')(
            'a test text');

        expect(element.innerHTML).toEqual('a test text');

        element = DB.element('ul')(
            ['a test text',
            DB.element('li')()]);

        expect(element.innerHTML).toMatch('a test text');
        expect(element.children[0].tagName).toEqual('LI');
    });

    it('assign properties to the element', function(){
        var element = DB.element('div')(
            null,
            {className: 'aClassName', id: 'uniqueId'});

        expect(element.className).toEqual('aClassName');
        expect(element.id).toEqual('uniqueId');
    });

    it('has built-in builders', function(){
        expect(DB.DIV().tagName).toEqual('DIV');
        expect(DB.P().tagName).toEqual('P');
        expect(DB.A().tagName).toEqual('A');
        expect(DB.IMG().tagName).toEqual('IMG');
        expect(DB.UL().tagName).toEqual('UL');
        expect(DB.LI().tagName).toEqual('LI');
        expect(DB.INPUT().tagName).toEqual('INPUT');
        expect(DB.SPAN().tagName).toEqual('SPAN');
    });
});
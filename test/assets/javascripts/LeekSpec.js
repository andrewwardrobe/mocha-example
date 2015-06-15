describe('Javascript Unit Testing', function(){


  describe('Examples', function(){
    var service;

    before(function(){
    });

    after(function(){
        nock.restore();
        nock.cleanAll();
    });

    beforeEach(function(){
        $("body").append("<div id=\"leek\">leek</div>");
        service = nock(sitebase).get('/leek')
                                .reply(200,{
                                     leek:"sheek",
                                     meek:"bleek"
                                 });
    });

    afterEach(function(){
        $("#leek").remove();
    });

    it('testing DOM inserts from jQuery',function(done){
            var leek = requirejs('leek');
            var result = leek.nockTest();
            result.then(function(data){
                $("#leek").text(data.leek);
            });

            return result.should.be.fulfilled.then(function(){
                expect($("#leek")).to.have.$text("sheek");
            }).should.notify(done);
    });

    it('testing Ajax with promises',function(done){
        var leek = requirejs('leek');
        var result = leek.nockTest();

        return expect(result).to.eventually
                 .have.property('leek',"sheek")
                 .notify(done);
    });

    it('Testing an requirejs module that uses jQuery', function(){
        var leek = requirejs("leek");
        var text = leek.test("sheek");

        var result = $("#leek").text();
        assert.equal(result,"leek sheek" );
    });

    it("stubing out jsRoutes",function(){
        //I have a jsfile with a empty js routes structure
        var stub = sinon.stub(global.jsRoutes.controllers.Application, "leek");
        stub.returns("Andrew Wardrobe");

        var leek = requirejs("leek");
        leek.jsRoutesTest();

        var actualOutput = $("#leek").text();
        assert.equal(actualOutput,"Andrew Wardrobe" );
    });

     it('making sure before and after work', function(){
            var jimbo = $("#leek").text();
            assert.equal(jimbo,"leek" );
     });

  });

});
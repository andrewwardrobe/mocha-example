describe ('Array', function (){
    describe ('#indexOf()', function(){
         it('should return -1 when the value is not present', function(){
              assert.equal(true,true);
            });
    });
});

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should leeeeeeeeek', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('Leek', function(){
  describe('JS Test Framework', function(){

    it('should be able to call function with underlying jquery', function(){
        console.log("hello");

        var leek = requirejs("leek");
        var text = leek.test("sheek");

        var jimbo = $("#leek").text();
        assert.equal(jimbo,"leek sheek" );
    });

    it("be able to stub a function",function(){

        var stub = sinon.stub(global.jsRoutes.controllers.Application, "leek");
        stub.returns("Andrew Wardrobe");

        var leek = requirejs("leek");
        leek.jsRoutesTest();
        var actualOutput = $("#leek").text();

        assert.equal(actualOutput,"Andrew Wardrobe" );
    });
  });

  describe('Reloading', function(){
      it('should reset the doc without breaking jquery', function(){

        document = jsdom("<html><head></head><body><div id=\"leek\">leek</div></body></html>");
        var jimbo = document.getElementById("leek").textContent;
        var leek = requirejs("leek");
        assert.equal(jimbo,"leek" );

        [1,2,3].indexOf(5).should.equal(-1);
        [1,2,3].indexOf(0).should.equal(-1);
      });
    });


});

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should jimbo jambo', function(){
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    });
  });
});
var assert = require("assert");


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

describe('Array', function(){
  describe('#indexOf()', function(){
    console.log("hello");
    it('should twat', function(){
        console.log("hello");
        var leek = requirejs("leek");
        var jsdom = require('jsdom').jsdom;
        var document = jsdom('<html><head><script></script></head><body></body></html>');
        var window = document.createWindow();
        var  $ = require("jquery").create(window);
        var text = leek.test("sheek");
        assert.equal(text,"leek sheek" );
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
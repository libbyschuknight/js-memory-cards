//Begin state
//test card object exists
//test id exists
//test image exists
//test boolean is false (all cards will start face down)

describe('CardMaker()', function(){
    beforeALL(function() {
      this.cardMaker = new cardMaker();
    }
    describe("cardMaker", function() {
    it("creates id", function() {
      expect(id).toBe(1);
    });
    it("has image", function() {
      expect(image).toBe(url);
    });
    it("is false to show card is down", function() {
      expect(stsate).toBe(false);
    });

  });

});



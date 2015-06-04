//Begin state
//test card object exists
//test id exists
//test image exists
//test boolean is false (all cards will start face down)

describe("Card()", function(){

    beforeAll(function() {
      card = new Card("dog", "dog", true);
    });

    describe("Card", function() {
     it("creates match", function() {
      expect(card.match).toBe("dog");
    });

    it("has a description", function() {
      expect(card.description).toBe("dog");
    });

    it("is true to show card is up", function() {
      expect(card.state).toBe(true);
    });
  });

    describe('#placeCard()', function(){
      beforeAll(function(){
        this.description = "dog";
        this.div = this.Card.placeCard(this.description);
      });

      it("checking if description is on page", function(){
        expect(this.div.attr('id')).toEqual("dog");
      });
  });


});



describe("Card()", function(){

    beforeAll(function() {
      card = new Card("joshua", "http://www.buckybox.com/images/team-joshua-63101086.jpg", true);
      });

      describe("Card", function() {
       it("creates match", function() {
        expect(card.match).toBe("joshua");
      });

      it("has an image source", function() {
        expect(card.image_src).toBe("http://www.buckybox.com/images/team-joshua-63101086.jpg");
      });

    });
});



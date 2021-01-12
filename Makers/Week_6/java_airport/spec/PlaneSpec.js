describe("Plane", function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane;
    airport = new Airport
  });

  describe("isFlying", function() {
    it("returns true is plane is flying", function() {
      expect(plane.isFlying()).toEqual(true);
    });

    it("returns false is plane is not flying", function() {
      airport.land(plane);
      expect(plane.isFlying()).toEqual(false);
    });
  });
});

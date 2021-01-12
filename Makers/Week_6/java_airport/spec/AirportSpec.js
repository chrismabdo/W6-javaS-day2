describe("Airport", function(){

    var airport;
    var plane;

        beforeEach(function() {
            airport = new Airport;
            plane = new Plane;
        });

        it('should create a new instance of Airport', function() {
            expect(airport).toBeInstanceOf(Airport);
        });

        it('should have a hangar upon creation', function() {
            expect(airport.hangar).toEqual([]);
        });

        describe('land function', function() {

            it('should land a plane ', function() {
                airport.land(plane);
                expect(airport.hangar).toEqual([plane]);
            });

            it('changes plane.inFLight to false', function() {
              airport.land(plane);
              expect(plane.inFlight).toEqual(false);
            });
        });

        describe('takeOff function', function() {
          it('removes plane from hangar', function() {
            airport.land(plane);
            airport.takeOff(plane);
            expect(airport.hangar).toEqual([]);
          });
        });




});

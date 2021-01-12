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

        it('should have the option to set a capacity', function() {
            airport_1 = new Airport(5)
            expect(airport_1.capacity).toEqual(5);
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

            it('should not land a plane if the hangar is full', function() {
              airport.land(plane)
              expect(function() { airport.land(plane)}).toThrow('Hangar Full!');
            });

            it('should allow more planes depending on capacity', function() {
              airport_2 = new Airport(2)
              airport_2.land(plane)
              expect(function() { airport_2.land(plane)}).not.toThrow('Hangar Full!');     
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

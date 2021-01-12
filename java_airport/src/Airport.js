class Airport {

    constructor (capacity = 1) {
        this.hangar = [];
        this.capacity = capacity;
    }

    land (plane) {
        if ( this.isFull() ){
             throw 'Hangar Full!';
        } else {
            this.hangar.push(plane);
            plane.inFlight = false;
        }
    }

    takeOff(plane) {
      var planeIndex = this.hangar.indexOf(plane);
      this.hangar.splice(planeIndex);
    }

    isFull() {
        return this.hangar.length === this.capacity;
    }
}

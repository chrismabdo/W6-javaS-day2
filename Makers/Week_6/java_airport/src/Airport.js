class Airport {

    constructor () {
        this.hangar = [];

    }

    land (plane) {
        this.hangar.push(plane);
        plane.inFlight = false;
    }

    takeOff(plane) {
      var planeIndex = this.hangar.indexOf(plane)
      this.hangar.splice(planeIndex)
    }
}

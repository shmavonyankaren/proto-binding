const AirPlane = {
    isFlying: null,
    name: null,
    init(name) {
        this.name = name;
        this.isFlying = false;
    },
    takeOff () {
        this.isFlying = true;
    },
    land () {
        this.isFlying = false;
    },
};

AirPlane.init("Karen");
console.log(AirPlane.isFlying);
AirPlane.takeOff();
console.log(AirPlane.isFlying);
AirPlane.land();
console.log(AirPlane.isFlying);
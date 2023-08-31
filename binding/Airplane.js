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
alert(AirPlane.isFlying);
AirPlane.takeOff();
alert(AirPlane.isFlying);
AirPlane.land();
alert(AirPlane.isFlying);
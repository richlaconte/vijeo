class Collider {
    constructor(name) {
        this.type = 'collider';
        this.name = name;
        this.transform = {
            position: {
                x: 0,
                y: 0
            },
            scale: {
                x: 0,
                y: 0
            },
            rotation: {
                x: 0,
                y: 0,
            }
        }
        this.isTrigger = false;
    }
}

module.exports = Collider;
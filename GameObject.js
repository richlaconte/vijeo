const Sprite = require('./Components/Sprite');
const Collider = require('./Components/Collider');
const Listener = require('./Components/Listener');
const Physics = require('./Components/Physics');

class GameObject {
    constructor(name) {
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
        this.components = [];
        this.AddSprite = (name) => {
            // Dupe check
            for (let i = 0; i < this.components.length; i++) {
                if (this.components[i].name === name) {
                    return 'sprite with that name already exists on gameobject';
                }
            }
            let sprite = new Sprite(name);
            this.components.push(sprite);
        }
        this.AddCollider = (name) => {
            // Dupe checks
            for (let i = 0; i < this.components.length; i++) {
                if (this.components[i].type === 'collider' || this.components[i].name === name) {
                    return 'collider already present on GameObject';
                }
                if (this.components[i].name === name) {
                    return 'collider with that name already exists on gameobject';
                }
            }
            let col = new Collider(name);
            this.components.push(col);
        }
        this.AddListener = (name) => {
            // Dupe check
            for (let i = 0; i < this.components.length; i++) {
                if (this.components[i].name === name) {
                    return 'listener with that name already exists on gameobject';
                }
            }
            let listener = new Listener(name);
            this.components.push(listener);
        }
        this.AddPhysics = (name) => {
            // Dupe checks
            for (let i = 0; i < this.components.length; i++) {
                if (this.components[i].type === 'physics') {
                    return 'physics already present on GameObject';
                }
                if (this.components[i].name === name) {
                    return 'physics with that name already exists on gameobject';
                }
            }
            let phys = new Physics(name);
            this.components.push(phys);
        }
    }
}

module.exports = GameObject;
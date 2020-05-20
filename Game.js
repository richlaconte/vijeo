const GameObject = require('./GameObject');

class Game {
    constructor() {
        this.settings = {};
        this.gameObjects = [];
        this.addGameObject = (name) => {
            for (let i = 0; i < this.gameObjects.length; i++) {
                if (this.gameObjects[i].name === name) {
                    return 'gameobject with that name already exists';
                }
            }
            let obj = new GameObject(name);
            this.gameObjects.push(obj);
        }
        this.variables = [];
        this.addVariable = (name, type) => {
            let variable = new variable(name, type);
            // Dupe name check
            for (let i = 0; i < this.variables.length; i++) {
                if (this.variables[i].name === name) {
                    return 'a variable already exists with that name';
                }
            }
            this.variables.push(variable);
        }
        this.getGameObjectByName = (name) => {
            for (let i = 0; i < this.gameObjects.length; i++) {
                if (this.gameObjects[i].name === name) {
                    return this.gameObjects[i];
                }
            }
        }
    }
}

module.exports = Game;
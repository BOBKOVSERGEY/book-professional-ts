"use strict";
// Представляет игру в шахматы
class Game {
}
// Шахматная фигура
class Piece {
    constructor(color, file, rank) {
        this.color = color;
        this.position = new Position(file, rank);
    }
    moveTo(position) {
        this.position = position;
    }
}
// Набор координат шахматной фигуры
class Position {
    constructor(file, rank) {
        this.file = file;
        this.rank = rank;
    }
    distanceFrom(position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) -
                this.file.charCodeAt(0))
        };
    }
}
class King extends Piece {
    canMoveTo(position) {
        let distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    }
}
let set = new Set;
set.add(1).add(2).add(3);
set.has(2); // верно
set.has(4); // неверно
class Cat {
    constructor(name) {
        this.name = name;
    }
    eat(food) {
    }
    meow() {
    }
    sleep(hours) {
    }
}
class Zebra {
    trot() {
        // ...
    }
}
class Poodle {
    trot() {
        // ...
    }
}
function ambleAround(animal) {
    animal.trot();
}
let zebra = new Zebra;
let poodle = new Poodle;
ambleAround(zebra); // OK
ambleAround(poodle); // OK
//# sourceMappingURL=index.js.map
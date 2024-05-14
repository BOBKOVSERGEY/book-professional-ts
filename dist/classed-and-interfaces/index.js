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
console.log(set.has(2)); // верно
set.has(4); // неверно
//# sourceMappingURL=index.js.map
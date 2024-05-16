// Представляет игру в шахматы
class Game {}

// Шахматная фигура
abstract class Piece {
    protected position: Position
    constructor(
        private readonly color: Color,
        file: Letters,
        rank: Rank
    ) {
        this.position = new Position(file, rank)
    }

    moveTo(position: Position) {
        this.position = position
    }
    abstract canMoveTo(position: Position): boolean
}

// Набор координат шахматной фигуры
class Position {
    constructor(
        private file: Letters,
        private rank: Rank
    ) {}

    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) -
                this.file.charCodeAt(0))
        }
    }
}

class King extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}


type Color = 'Black' | 'White'
type Letters = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

let set = new Set
set.add(1).add(2).add(3)
set.has(2) // верно
set.has(4) // неверно


/*
type Food = {
    calories: number
    tasty: boolean
}

type Sushi = Food & {
    salty: boolean
}

type Cake = Food & {
    sweet: boolean
}*/

interface Food {
    calories: number
    tasty: boolean
}
interface Sushi extends Food {
    salty: boolean
}
interface Cake extends Food {
    sweet: boolean
}

interface Animal {
    readonly name: string
    eat(food: string): void
    sleep(hours: number): void
}

interface Feline {
    meow(): void
}

class Cat implements Animal, Feline {
    readonly name: string;

    constructor(name: string) {
        this.name = name
    }

    eat(food: string): void {
    }

    meow(): void {
    }

    sleep(hours: number): void {
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

function ambleAround(animal: Zebra) {
    animal.trot()
}

let zebra = new Zebra
let poodle = new Poodle

ambleAround(zebra) // OK
ambleAround(poodle) // OK

type State = {
    [key: string]: string
}

interface StringDatabase {
    state: State
    get(key: string): string | null
    set(key: string, value: string): void
}

interface StringDatabaseConstructor {
    new(): StringDatabase
    from(state: State): StringDatabase
}

class StringDatabase {
    state: State = {}


    get(key: string): string | null {
        return key in this.state ? this.state[key] : null
    }
    set(key: string, value: string): void {
        this.state[key] = value
    }

    static from(state: State) {
        let db = new StringDatabase
        for (let key in state) {
            db.set(key, state[key])
        }
        return db
    }
}


interface MyMap<K, V> {
    get(key: K): V
    set(key: K, value: V): void
}

//let a = new MyMap<string, number>('k', 1) // MyMap<string, number>
//let b = new MyMap('k', true) // MyMap<string, boolean>
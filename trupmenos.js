class Trupmena {
    constructor(sveikojiDalis = 0, skaitiklis = 0, daliklis = 1) {
        this._sveikojiDalis = sveikojiDalis;
        this._skaitiklis = skaitiklis;
        this._daliklis = daliklis;

        const getDBD = (a, b) => {
            if (b === 0) {
                return a;
            } else {
                return getDBD(b, a % b);
            }
        };

        this.prastinti = () => {
            let dbd = getDBD(this._skaitiklis, this._daliklis);
            this._skaitiklis /= dbd;
            this._daliklis /= dbd;
        };
        
    }

    get sveikojiDalis() {
        return this._sveikojiDalis;
    }

    set sveikojiDalis(value) {
        this._sveikojiDalis = value;
        this.prastinti();
    }

    get skaitiklis() {
        return this._skaitiklis;
    }

    set skaitiklis(value) {
        this._skaitiklis = value;
        this.prastinti();
    }

    get daliklis() {
        return this._daliklis;
    }

    set daliklis(value) {
        if (value !== 0) {
            this._daliklis = value;
            this.prastinti();
        } else {
            throw new Error("daliklis negali buti 0");
        }
    }

    pridetiInt(sveikasisSkaicius) {
        this._sveikojiDalis += sveikasisSkaicius;
    }

    prideti(sveikasisSkaicius, skaitiklis, daliklis) {
        this._sveikojiDalis += sveikasisSkaicius;
        this._skaitiklis = this._skaitiklis * daliklis + this._daliklis * skaitiklis;
        this._daliklis *= daliklis;
        this.prastinti();
    }

   
    toString() {
        return `${this.sveikojiDalis} ${this.skaitiklis}/${this.daliklis}`;
    }

    toDouble() {
        return this._sveikojiDalis + this._skaitiklis / this._daliklis;
    }
}

let trupmena = new Trupmena();
trupmena.sveikojiDalis = 1;
trupmena.skaitiklis = 2;
trupmena.daliklis = 5;

console.log(trupmena.toString()); 

trupmena.prideti(1, 3, 4); //prideti sveikaji skaiciu ir trupmena

console.log(trupmena.toString()); 
console.log(trupmena.toDouble()); 
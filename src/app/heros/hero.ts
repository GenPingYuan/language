export class Hero {
    private _id: number;
    private _name: string;
    constructor(id, name) {
        this._id = id;
        this._name = name
    }

    set id(id: number){
        this._id = id;
    }

    set name(name: string){
        this._name = name;
    }

    get name(){
        return this._name
    }

    get id(){
        return this._id
    }
}

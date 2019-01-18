import { EngineType } from './engine-type.enum';

export class Engine {
    private _id: number;
    private _name: string;
    private _type: EngineType;

    constructor(id,name,type){
        this._id = id;
        this._name = name
        this._type = type
    }

    set id(id: number){
        this._id = id;
    }

    set name(name: string){
        this._name = name;
    }

    set type(type: EngineType){
        this._type = type;
    }

    get id(){
        return this._id
    }

    get name(){
        return this._name
    }

    get type(){
        return this._type
    }



}

module.exports = class BaseSlashCommand {
    /**
     * 
     * @param {String} name 
     * @param {String} description 
     * @param {Boolean} restricted 
     */
    constructor(name, description, restricted){
        this._name = name
        this._description = description
        this._restricted = restricted
    }

    get name(){
        return this._name;
    }

    get description(){
        return this._description;
    }

    get isRestricted(){
        return this.restricted;
    }
};
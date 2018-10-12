class Bike {

    constructor() {
        this.frame_colors;
        this.thumb;
        this.id;
        this.title;
        this.serial;
        this.manufacturer_name;
        this.frame_model;
        this._year;
    }

    set year(value) {
        let currentYear = new Date().getFullYear();
        
        if (value <= currentYear && value >= currentYear - 25)
            this._year = value;
        else
            throw new Error(`Year must be between ${currentYear-25} to ${currentYear}`);
    }


    get year() {
        return this._year;
    }


}


module.exports={
    "BikeClassPointer":Bike
};
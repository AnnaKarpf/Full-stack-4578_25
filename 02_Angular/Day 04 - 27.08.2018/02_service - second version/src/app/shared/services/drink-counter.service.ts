export class DrinkCounterService{

    drinkInfo={
        wine:0,
        beer:0,
        water:0
    };

    incCounter(key:string){
        this.drinkInfo[key.toLowerCase()]++;
    }
}
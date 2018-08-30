class MathAction{
    add(n1,n2){
        return n1+n2;
    }
}


function getMathObj(){
    return new MathAction();
}


let num1=getMathObj().add(1,2);


let mathAction=getMathObj();
let num2=mathAction.add(1,2);

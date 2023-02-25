import gcd from './gcd'

export const validate = (x:number,y:number,z:number)=>{
    //When X=Z or Y=Z then just fill one bucket
    if(x===z){
        return `Reduntant-OP=FILL X(${x})`
    }
    if(y===z){
        return `Reduntant-OP=FILL Y(${y})`
    }
    //Negative buckets...
    if(x<=0||y<=0||z<=0){
        return "Invalid-Negative buckets"
    }
    //Not enought space in any bucket
    if((z>y) && (z>x) ){
        return "Invalid-Impossible to reach Z"
    }
    if(z%gcd(x,y)!=0){
        return "Invalid-Impossible (Greast Commin Divisor)"
    }
    return "valid"
}
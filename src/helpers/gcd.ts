 const gcd=(a:number , b:number)=> {
    if (b == 0)
        return a;

    return gcd(b, a % b);
}
export default gcd;
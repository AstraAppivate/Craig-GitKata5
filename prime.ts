function isPrime(num: number): boolean{

  let imAPrime = true;
  for(let i = 2; i < num / 2; i++){

    if(num % i == 0){
        imAPrime = false;
        break;
    }

}
return(imAPrime)
}



console.log(isPrime(71));


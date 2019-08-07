function mash(){
    return `You will live in a ${getHome()}, and you will have ${getKidCount()} kids, you'll drive a ${getCar()}, and your salary will be ${getCash()}!`;
}
function getHome(){
    if (process.argv[2]){   
        let homes = ["Mansion", process.argv[2], "Shack", "House", "North Korea"];
        return homes[Math.floor(Math.random()*homes.length)];
    } else {
        let homes = ["Mansion", "Shack", "House", "North Korea"];
        return homes[Math.floor(Math.random()*homes.length)];
    }
}
function getKidCount(){
    if ((Math.random()>.5) || !process.argv[3]){
        return Math.floor(Math.random()*101);
    } else {
        return process.argv[3];
    }
}
function getCar(){
    if (process.argv[4]){
        let cars = ["Tesla", "Lambo", "Horse", process.argv[4]];
        return cars[Math.floor(Math.random()*cars.length)];
    } else {
        let cars = ["Tesla", "Lambo", "Horse"];
        return cars[Math.floor(Math.random()*cars.length)];    
    }
}
function getCash(){
    if (process.argv[5]){
        let cash = ["$100 Billion", "$1 Million", "$14,000", "$-43", process.argv[5]]
        return cash[Math.floor(Math.random()*cash.length)];
    } else {
        let cash = ["$100 Billion", "$1 Million", "$14,000", "$-43"];
        return cash[Math.floor(Math.random()*cash.length)];
    }
}
console.log(mash())
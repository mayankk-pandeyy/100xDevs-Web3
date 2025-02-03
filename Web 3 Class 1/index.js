const crypto = require("crypto");

const value = "100xdevs";

const hash = crypto.createHash('sha256').update(value).digest('hex');
console.log(hash);


// Assignment 1
function findRandomString(){
    for(let i=0; i<10000000; i++){
        const randomString = i.toString();
    
        const hash = crypto.createHash('sha256').update(randomString).digest('hex');
    
        if(hash[0] === '0' && hash[1] === '0' && hash[2] === '0' && hash[3] === '0' && hash[4] === '0'){
            return randomString;
        }
    }
}

let randomString = findRandomString();

console.log(randomString);



// Assignment 2
function findRandomString2(){
    for(let i=0; i<100000000; i++){
        const randomString = i.toString();
        const newString = '100xdevs' + randomString;
    
        const hash = crypto.createHash('sha256').update(newString).digest('hex');
    
        if(hash[0] === '0' && hash[1] === '0' && hash[2] === '0' && hash[3] === '0' && hash[4] === '0'){
            return randomString;
        }
    }
}

let randomString2 = findRandomString2();

console.log(randomString2);

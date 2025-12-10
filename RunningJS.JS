let str = "ABCDEFGHIJK";
let num = "123456789"
for(let i = 0; i < str.length; i++){
    let currentLetter = str[i]
    console.log("LOOP")
    for(let i = 0; i < num.length; i++)
        console.log(num[i], str[i])
    ;
}  


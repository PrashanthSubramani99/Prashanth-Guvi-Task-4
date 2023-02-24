let obj1 ={
    name:"Person 1",
    age : 5
}

let obj2 = {
    age:5,
    name:"Person 1"
}
if(JSON.stringify(obj1) === JSON.stringify(obj2)){
    console.log('The objects are same');
}else{
    console.log('The objects are not same');
}


//--------------------------------------------------------------

let xhr =new XMLHttpRequest();

xhr.open('GET', "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
   const data =JSON.parse(xhr.response);
    for(var i = 0; i< data.length; i++){
        console.log(data[i].flags)
        console.log(data[i].name.common, data[i].population)
    }
}


// ---------------------------------------------------------------






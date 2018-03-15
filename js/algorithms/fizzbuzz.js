function fizzBuzz(num, conditions){
    for(var i = 1; i <= num; i++){
        var output ="";
        for(var j = 0; j < conditions.length; j++){
            if(i % conditions[j][0] === 0) output+= conditions[j][1];
        }
        if(!output) console.log(i);
        else console.log(output);
    }
}

var conditions= [
  [3, "Fizz"],
  [5, "Buzz"],
  [8, "Boom"]
];

fizzBuzz(15, conditions);
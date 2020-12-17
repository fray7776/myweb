
    var name= document.getElementById('Fruit').innerHTML;
        document.getElementById('Fruit').innerHTML="Fruit";
        var expression=document.createElement("li")
        var expression1=document.createElement("li")
        expression.innerHTML="Apple";
        expression1.innerHTML="Orange";

        document.getElementById("Fruit").append(expression);
        document.getElementById("Fruit").append(expression1);

        console.log("-----------------------------------")
        for(var i=1; i<=9; i++) {
        var str='2*'+i+'='+2*i;
        console.log(str);
        }
        console.log("-----------------------------------")
        var sum=0;
        for(var i=1; i<=100; i++) {
            sum += i;
            
        }console.log(sum);
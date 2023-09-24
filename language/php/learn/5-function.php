<?php
//Simple example of function
    function hello(){
        echo "<h1>"."Hi I am Pranav Kumar"."</h1>";
    }
    echo hello();

    
    //function with paramater
    function sum($num1,$num2){
        echo $num1+$num2;
    }
    
    //function with return
    
    function sum2($num3,$num4){
        return $num3+$num4;
    }
    
    echo "Here is your numer = ".sum(34,45)."<br/>";
    echo "Here is your numer = ".sum2(30,40);

?>
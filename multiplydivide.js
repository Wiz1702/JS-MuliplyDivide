function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
        if (num1 * num2 > 1000) {
                document.getElementById("message").innerHTML = "BIG!!!"; 
        } else {
                document.getElementById("message").innerHTML = "";
        }
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 / num2;
}

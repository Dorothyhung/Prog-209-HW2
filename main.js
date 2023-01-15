let num1 = document.getElementById("num1").value


document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("button").addEventListener("click", function () {

        document.getElementById("textbox1").value = (parseInt(num1+num2+num3))/3;
    });
});


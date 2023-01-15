


document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("button").addEventListener("click", function () {
        let num1=Number(document.getElementById("num1").value);
        let num2=Number(document.getElementById("num2").value);
        let num3=Number(document.getElementById("num3").value);
        document.getElementById("textbox1").value = ((num1+num2+num3)/3).toFixed(2);
        document.getElementById("textbox1").style.backgroundColor="lightgreen";
    });
});


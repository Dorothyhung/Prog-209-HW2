document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("button").addEventListener("click", function () {
        let num1=Number(document.getElementById("num1").value);
        let num2=Number(document.getElementById("num2").value);
        let num3=Number(document.getElementById("num3").value);
        var avg=Math.round((((num1+num2+num3)/3) + Number.EPSILON) * 100) / 100
        document.getElementById("textbox1").value = avg;
    });
});

function copyText() {
    var result=document.getElementById("textbox1");
    result.select();
    navigator.clipboard.writeText(result.value);
    document.getElementById("textbox1").style.backgroundColor="lightgreen";
}

function refresh() {
    location.reload();
}
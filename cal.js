
    function calcularsuma() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var resultado = num1 + num2;
      document.getElementById("resultado").innerHTML = "El resultado de la suma es: " + resultado;
    }
    
    function calcularresta() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var resultado = num1 - num2;
      document.getElementById("resultado").innerHTML = "El resultado de la resta es: " + resultado;
    }
    
    function calcularmultiplicacion() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var resultado = num1 * num2;
      document.getElementById("resultado").innerHTML = "El resultado de la multiplicación es: " + resultado;
    }
    
    function calculardivision() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var resultado = num1 / num2;
      document.getElementById("resultado").innerHTML = "El resultado de la división es: " + resultado;
    }
    
    function calcularalgoritmonatural() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var res = Math.log10(num1);
      var resu = Math.log10(num2);
      var resultado = res - resu
      document.getElementById("resultado").innerHTML = "El resultado de algoritmo natural es: " + resultado;
    }
    
    function calcularpotencia() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var resultado = Math.pow(num1, num2);
      document.getElementById("resultado").innerHTML = "El resultado de la potencia es: " + resultado;
    }
    
    function calcularfraccion() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      document.getElementById("resultado").innerHTML = "la Fraccion es  "+num1+"/"+num2;
    }
      
 
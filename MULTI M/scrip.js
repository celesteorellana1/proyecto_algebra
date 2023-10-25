function multiplicarMatrices1() {
    const a00 = parseFloat(document.getElementById("a00").value);
    const a01 = parseFloat(document.getElementById("a01").value);
    const a10 = parseFloat(document.getElementById("a10").value);
    const a11 = parseFloat(document.getElementById("a11").value);
  
    const b00 = parseFloat(document.getElementById("b00").value);
    const b01 = parseFloat(document.getElementById("b01").value);
    const b10 = parseFloat(document.getElementById("b10").value);
    const b11 = parseFloat(document.getElementById("b11").value);
  
    // Realiza la multiplicación de matrices
    const resultA = a00 * b00 + a01 * b10;
    const resultB = a00 * b01 + a01 * b11;
    const resultC = a10 * b00 + a11 * b10;
    const resultD = a10 * b01 + a11 * b11;
  
    // Muestra el resultado en la página
    const resultadoElement = document.getElementById("resultado1");
    resultadoElement.textContent = `Resultado: [${resultA}, ${resultB}, ${resultC}, ${resultD}]`;
  }
    
  function multiplicarMatrices2(){
    const a20 = parseFloat(document.getElementById("a20").value);
    const a21 = parseFloat(document.getElementById("a21").value);
    const a22 = parseFloat(document.getElementById("a22").value);
    const a30 = parseFloat(document.getElementById("a30").value);
    const a31 = parseFloat(document.getElementById("a31").value);
    const a32 = parseFloat(document.getElementById("a32").value);
    const a40 = parseFloat(document.getElementById("a40").value);
    const a41 = parseFloat(document.getElementById("a41").value);
    const a42 = parseFloat(document.getElementById("a42").value);

    const b20 = parseFloat(document.getElementById("b20").value);
    const b21 = parseFloat(document.getElementById("b21").value);
    const b22 = parseFloat(document.getElementById("b22").value);
    const b30 = parseFloat(document.getElementById("b30").value);
    const b31 = parseFloat(document.getElementById("b31").value);
    const b32 = parseFloat(document.getElementById("b32").value);
    const b40 = parseFloat(document.getElementById("b40").value);
    const b41 = parseFloat(document.getElementById("b41").value);
    const b42 = parseFloat(document.getElementById("b42").value);

    // Realiza la multiplicación de matrices
    const resultA = a20 * b20 + a21 * b30 + a22 * b40;
    const resultB = a20 * b21 + a21 * b31 + a22 * b41;
    const resultC = a20 * b22 + a21 * b32 + a22 * b42;
    const resultD = a30 * b20 + a31 * b30 + a32 * b40;
    const resultE = a30 * b21 + a31 * b31 + a32 * b41;
    const resultF = a30 * b22 + a31 * b32 + a32 * b42;
    const resultG = a40 * b20 + a41 * b30 + a42 * b40;
    const resultH = a40 * b21 + a41 * b31 + a42 * b41;
    const resultI = a40 * b22 + a41 * b32 + a42 * b42;


    // Muestra el resultado en la página
    const resultadoElement = document.getElementById("resultado2");
    resultadoElement.textContent = `Resultado: [${resultA}, ${resultB}, ${resultC}, ${resultD}, ${resultE}, ${resultF}, ${resultG}, ${resultH}, ${resultI}]`;
  }
  
 
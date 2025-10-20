function promoDosPorUno() {
  let precio1 = prompt("Precio del primer producto:");
  let precio2 = prompt("Precio del segundo producto:");
  let totalSinDescuento = Number(precio1) + Number(precio2);
  let descuento = Number(precio2) / 2;
  let totalFinal = totalSinDescuento - descuento;

  document.getElementById("resultado").innerHTML =
    "<p>Total sin descuento: $" + totalSinDescuento +
    "<br>Descuento aplicado: $" + descuento +
    "<br>Total final: $" + totalFinal + "</p>";
}

function promoTresPorDos() {
  let cantidad = prompt("¿Cuántos productos querés comprar?");
  let precios = [];
  let totalSinDescuento = 0;

  for (let i = 0; i < Number(cantidad); i++) {
    let precio = prompt("Precio del producto " + (i + 1) + ":");
    precios.push(Number(precio));
    totalSinDescuento += Number(precio);
  }

  // Ordeno los precios de menor a mayor
  precios.sort(function(a, b) {
    return a - b;
  });

  // Calculo cuántos descuentos aplicar
  let gruposDeTres = Math.floor(precios.length / 3);
  let descuento = 0;

  for (let i = 0; i < gruposDeTres; i++) {
    descuento += precios[i * 3]; // el más barato de cada grupo
  }

  let totalFinal = totalSinDescuento - descuento;

  document.getElementById("resultado").innerHTML =
    "<p>Cantidad ingresada: " + cantidad +
    "<br>Total sin descuento: $" + totalSinDescuento +
    "<br>Descuento aplicado: $" + descuento +
    "<br>Total final: $" + totalFinal + "</p>";
}



function promoDiezPorciento() {
  let totalCompra = prompt("¿Cuál es el total de tu compra?");
  let descuento = 0;
  let totalFinal = Number(totalCompra);

  if (Number(totalCompra) > 30000) {
    descuento = Number(totalCompra) * 0.10;
    totalFinal = Number(totalCompra) - descuento;
  }

  document.getElementById("resultado").innerHTML =
    "<p>Total sin descuento: $" + totalCompra +
    "<br>Descuento aplicado: $" + descuento +
    "<br>Total final: $" + totalFinal + "</p>";
}

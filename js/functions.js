let userName = "";

const welcome = () => {
  userName = prompt("Escribe tu nombre y apellido:");
  const born = prompt("Escribe tu fecha de nacimiento (YYYY-MM-DD)");

  validation(userName, born);

  let dateBorn = new Date(born);
  let todayDate = new Date();
  let age = todayDate.getFullYear() - dateBorn.getFullYear();
  let monthDiff = todayDate.getMonth() - dateBorn.getMonth();
  let dayDiff = todayDate.getDate() - dateBorn.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  if (age < 18) {
    alert("Debes ser mayor de 18 años para usar esta aplicación.");
    return;
  }

  alert(
    `Bienvenido, ${userName}, al carrito de compras \n\n Añade los productos que deseas llevar`
  );
  alert(
    "Lista de productos:\n 1_Collar $ 50\n 2_Pelota $ 150\n 3_Mordillo $ 160\n 4_Alimento balanceado 2Kg $ 700\n 5_Shampoo $ 320"
  );
};

const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

const validation = (name, born) => {
  while (!name.trim() || !regexName.test(name)) {
    name = prompt("Escribe tu nombre correctamente (solo letras)");
  }

  while (!born.trim() || !dateRegex.test(born)) {
    born = prompt(
      "Escribe tu fecha de nacimiento en formato válido (YYYY-MM-DD)"
    );
  }
};

const purchase = () => {
  const buy = prompt("Elige el número del producto que deseas:");
  let item = parseInt(buy);

  console.log("Producto seleccionado: " + item);

  if (isNaN(item) || item < 1 || item > 5) {
    alert("Por favor, elige un número válido entre 1 y 5.");
    return;
  }

  const selectedProduct = addCart(item);

  const count = prompt("Elige la cantidad que vas a comprar:");
  let result = parseInt(count);
  console.log("Cantidad seleccionada: " + result);

  if (isNaN(result) || result <= 0) {
    alert("Por favor, ingresa una cantidad válida.");
    return;
  }

  const totalCost = costs(item, result);

  alert(
    `Gracias por tu compra, ${userName}! \nHas comprado ${result} ${selectedProduct}(s). \nTotal gastado: $${totalCost}`
  );
};

const addCart = (num) => {
  let nameProduct = "";

  switch (num) {
    case 1:
      nameProduct = "Collar";
      break;
    case 2:
      nameProduct = "Pelota";
      break;
    case 3:
      nameProduct = "Mordillo";
      break;
    case 4:
      nameProduct = "Alimento balanceado 2kg";
      break;
    case 5:
      nameProduct = "Shampoo";
      break;
    default:
      return "Producto no válido";
  }

  return nameProduct;
};

const iva = 0.22;

const costs = (item, cantidad) => {
  let precio;

  switch (item) {
    case 1:
      precio = 50;
      break;
    case 2:
      precio = 150;
      break;
    case 3:
      precio = 160;
      break;
    case 4:
      precio = 700;
      break;
    case 5:
      precio = 320;
      break;
    default:
      precio = 0;
      break;
  }

  return precio * cantidad * (1 + iva);
};

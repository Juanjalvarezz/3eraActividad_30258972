
const formPost = document.getElementById('postUsuario');

formPost.addEventListener('submit', async (e) => {
  e.preventDefault();
  let message = '';
  const nombre = e.target.nombre.value;
  const apellido = e.target.apellido.value;
  const email = e.target.email.value;
  const asunto = e.target.asunto.value;
  const mensaje = e.target.mensaje.value;

  await fetch('http://127.0.0.1:3000/user/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nombre: nombre, apellido: apellido, email: email, asunto: asunto, mensaje: mensaje}),
  })
    .then((response) => response.json())
    .then((data) => {
      message = data.message;
    });

  document.getElementById('textoPost').innerHTML = message;
});


//----------------------------------------

function mostrarImagen() {
  var opcion = document.getElementById("opcion").value;
  var imagen = document.getElementById("imagen");
  if (opcion == "0") {
      imagen.src = "img/Serie-A.jpg";
  } else if (opcion == "Juve") {
   imagen.src = "https://i.ibb.co/njpKb3M/juve.png";
  } else if (opcion == "Milan") {
   imagen.src = "https://i.ibb.co/m4q9c6R/milan.png";
  } else if (opcion == "Inter") {
   imagen.src = "https://i.ibb.co/rdbQVmC/inter.png";
  } else if (opcion == "Lazio") {
      imagen.src = "https://i.ibb.co/HrsV4Pb/lazio.png";
  } else if (opcion == "Sassuolo") {
      imagen.src = "https://i.ibb.co/DCwcF0b/sassuolo.png";
  } else if (opcion == "Empoli") {
      imagen.src = "https://i.ibb.co/qrHXSs5/empoli.png";
  } else if (opcion == "Hellas Verona") {
      imagen.src = "https://i.ibb.co/Rbm9rty/hellas.png";
  } else if (opcion == "Roma") {
      imagen.src = "https://i.ibb.co/LCbW8nd/roma.png";
  } else if (opcion == "Napoli") {
      imagen.src = "https://i.ibb.co/pLKNdHv/napoli.png";
  } else if (opcion == "Atalanta") {
      imagen.src = "https://i.ibb.co/8X1TM9S/atalanta.png";
  } else if (opcion == "Fiore") {
      imagen.src = "https://i.ibb.co/yhPD7gh/fiorentina.png" 
  } else if (opcion == "Bologna") {
      imagen.src = "https://i.ibb.co/z2LnrpQ/bologna.png";
  } else if (opcion == "Spezia") {
      imagen.src = "https://i.ibb.co/ck5pmjY/spezia.png";
  } else if (opcion == "Lecce") {
      imagen.src = "https://i.ibb.co/xgGp6Qn/lecce.png";
  } else if (opcion == "Samp") {
      imagen.src = "https://i.ibb.co/rGtwCZJ/samp.png";
  } else if (opcion == "Salermitana") {
      imagen.src = "https://i.ibb.co/LxX4bsZ/salermitana.png";
  } else if (opcion == "Cremonense") {
      imagen.src = "https://i.ibb.co/c66SKp7/cremonense.png";
  } else if (opcion == "Monza") {
      imagen.src = "https://i.ibb.co/N6BNt1v/monza.png";
  } else if (opcion == "Torino") {
      imagen.src = "https://i.ibb.co/4tk2dty/torino.png";
  } else if (opcion == "Udinese") {
      imagen.src = "https://i.ibb.co/fGBJnbb/udinese.png";
  } else if (opcion == "Cagliari") {
      imagen.src = "https://i.ibb.co/17TrHj6/cagliari.png";
  }
 }
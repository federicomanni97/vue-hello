const { createApp } = Vue

//apro un metodo
  createApp({
    data() { //con dentro un altro metodo che si chiama data
      return { //deve ritornare
        title: 'Hello World!', //una variabile con un messaggio con scritto Hello Vue!
        white: 'white',
        bgImage: "img/space-background.jpg",
      }
    },
  }).mount('#app'); //monta i miei dati dentro il div con l'id "app"
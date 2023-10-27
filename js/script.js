const { createApp } = Vue

//apro un metodo
  createApp({
    data() { //con dentro un altro metodo che si chiama data
      return { //deve ritornare
        title: 'Hello World!', //una variabile con un messaggio con scritto Hello Vue!
        red: 'blue'
      }
    },
  }).mount('#app'); //monta i miei dati dentro il div con l'id "app"
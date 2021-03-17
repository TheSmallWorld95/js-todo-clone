// Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista.
// Bonus
// Permettiamo la modifica di un todo già aggiunto.
var btn = $("button")


btn.click(function () {

  var value = $("input").val()

  $(".template li ").prepend(value)

  var clone = $(".template li ").clone()


  $("ol.lista").append(clone)

})


// Punto sull'input creato nell'HTML e prendo il suo valore,
// salvo questo valore in una variabile,
// al click del bottone/invio voglio che questo valore
// venga appeso come [li] ad un [ol] ogni volta che clicco
// così da creare una lista.
// Aggiungo anche che al doppio-click del mio valore questo si sottolinei
// (underline) come se fosse completato.
// Aggiungo all'interno di ogni li una X che una volta cliccata
// mi permette di rimuovere dal documento questo valore.

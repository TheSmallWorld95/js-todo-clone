// Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista.
// Bonus
// Permettiamo la modifica di un todo già aggiunto.
$(document).ready(function () {
  var btn = $("button")


  btn.click(function () {

    var value = $("input").val()

    var clone = $(".template li ").clone()

    clone.prepend(value)


    $(document).on("click", ".lista li span", function () {
      $(this).parent().remove()
    })

    $(document).on("dblclick", ".lista li", function () {
      $(this).toggleClass("underline")
    })

    $("ol.lista").append(clone)

  })

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

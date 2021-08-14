var arrayOfCards  = [
  {
  card:"As",
    src : "images/Ace-of-spades.jpg"
  },
 
  {
    card:"Jack",
    src : "images/Jack-of-clubs.jpg"
  },
 
  {
    card:"King",
    src : "images/King-of-spades.jpg"
  },
 
  {
    card:"Nine",
    src : "images/nine-of-hearts.jpg"
  },

  {
    card:"Queen",
    src :"images/Queen-of-hearts.jpg"
  },

  {
    card:"Ten",
    src : "images/ten-diamonds.jpg"
  },

   ]





function randomCard(arrayOfCards){
	var newGame = []
  var clone = arrayOfCards.map(function(element){
    
    return {
    card:element.card,
    src : element.src
    }
  })
	for (var i = 0; i < arrayOfCards.length; i++){	 
	var game = Math.floor((Math.random() * clone.length) )

	newGame.push(clone[game])
  clone.splice(game,1)
	} return newGame
  }
		
  

$(document).ready(function(){



var shuffledCard = randomCard(arrayOfCards)
$(".cards-container").html('')
console.log(shuffledCard.length)
shuffledCard.forEach(function(e){
	smallCard(e)
})
function smallCard (obj){
$(".cards-container").append(`<div class = "allCards">
								<img class = "card"  class = "As" src=${obj.src}>
								<img class = "back-img" src = "images/back-image.jpg">
							</div>`)
}
var count = 0

$(".back-img").click(function(){
	console.log($(this))
$(this).hide();
$(".card" ).show()
console.log($(this).siblings().attr('src'));
if($(this).siblings().attr('src') === "images/King-of-spades.jpg") {
  setTimeout(function(){alert('good one')},200)
  setTimeout(function(){location.href = "file:///C:/Users/PC/Desktop/matching-card-/index.html"},3000)
} else {
  setTimeout(function(){alert('wrong one')},200)
}


count = count+1
$("#displayCount p").text(count)
})

$("#start").click(function(){
  count = 0
  var counterTag=$(`<p> ${count}</p>`)
   $("#displayCount").append(counterTag)
})

});





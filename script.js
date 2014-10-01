$(document).ready(function() {

	//what does this do? Gives a string name to the cards that have a greater number than 10.
	var convert_value_to_string = function(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString(); //Returns the rest of the cards value as strings.
	}

	//what does this do? Iterates over the suits array and then iterates again to get a number from 1 to 13
	// and pushes to the deck array a number and a suit.
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
	
	//what does this do? Creates a function that shuffles the deck by iterating over the array of
	// cards and then deleting the one that appears first and then decreases the number of cards in
	// the array
	var shuffle = function(array) { 
		var copy = [];
		var n = array.length; 
		var i; 
		while (n) { i = Math.floor(Math.random() * array.length);  
			if (i in array) { 
		 		copy.push(array[i]); 
		 		delete array[i]; 
		 		n--; 
		 	} 
		} 
		return copy; 
	}
	
	//Now call the shuffle function and save the result of what shuffle returns into your deck variable
	
	deck = shuffle(deck);
	var cards_player_1 = [];
	var cards_player_2 = [];
	

	// write a function called deal that will evently divide the deck up between the two players
	
	var deal = function () {
		cards_player_1 = deck.slice(0, 26);
		cards_player_2 = deck.slice(26);

	}
	deal();
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	var war = function(card1, card2){
		if (card1.number > card2.number) {
			return "Player 1 wins";
		}
		else if (card1.number < card2.number) {
			return "Player 2 wins";
		}
		else {
			return false
		}

		
	}
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	var play = function(){
		var card1 = cards_player_1.shift();
		var card2 = cards_player_2.shift();
		var result = war(card1,card2);

		if (result === "Player 1 wins") {
			cards_player_1.push(card1, card2);

		}
		else if (result === "Player 2 wins") {
			cards_player_2.push(card1, card2);
			
		}
		else {
			return "Draw again";
		}


		
		//this function (defined below) will continue to the next turn
		advance();
	}
	
	var advance = function(){
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	advance();
	
	$(".btn").click(function() {
		play();
	});
});

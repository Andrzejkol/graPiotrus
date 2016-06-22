var zestawkart = [
    {symbol: 'A', wybrana: 0},
    {symbol: 'A', wybrana: 0},
    {symbol: 'B', wybrana: 0},
    {symbol: 'B', wybrana: 0},
    {symbol: 'C', wybrana: 0},
    {symbol: 'C', wybrana: 0},
    {symbol: 'D', wybrana: 0},
    {symbol: 'D', wybrana: 0},
    {symbol: 'E', wybrana: 0},
    {symbol: 'E', wybrana: 0},
    {symbol: 'F', wybrana: 0},
    {symbol: 'F', wybrana: 0},
    {symbol: 'G', wybrana: 0},
    {symbol: 'G', wybrana: 0},
    {symbol: 'H', wybrana: 0},
    {symbol: 'H', wybrana: 0},
    {symbol: 'I', wybrana: 0},
    {symbol: 'I', wybrana: 0},
    {symbol: 'J', wybrana: 0},
    {symbol: 'J', wybrana: 0},
    {symbol: 'K', wybrana: 0},
    {symbol: 'K', wybrana: 0},
    {symbol: 'L', wybrana: 0},
    {symbol: 'L', wybrana: 0},
    {symbol: 'P', wybrana: 0}];

var player1 = [];
var player2 = [];
var player3 = [];
var player4 = [];


function inicjuj(array) {
    /* losowa zmiana kolejności liczb */
    var i = array.length,
            j = 0,
            temp,
            num;

    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}
function sprawdzWynik() {
    var alertmsg;
    if (player1.length === 1 && player1[0].symbol === 'P') {
        alertmsg('Gracz ' + player1_name + ' przegrał.');
    } else
    if (player2.length === 1 && player2[0].symbol === 'P') {
        alertmsg('Gracz ' + player2_name + ' przegrał.');
    } else
    if (player3.length === 1 && player3[0].symbol === 'P') {
        alertmsg('Gracz ' + player3_name + ' przegrał.');
    } else
    if (player4.length === 1 && player4[0].symbol === 'P') {
        alertmsg('Gracz ' + player4_name + ' przegrał.');
    }
}
function redukujPary() {
    /* sprawdzenie par po losowaniu */
    setTimeout(function () {
        for (i = 0; i < player1.length; i++) {
            for (j = 0; j < player1.length; j++) {
                if ((player1[i].symbol === player1[j].symbol) && (i !== j)) {
                    $('#player1 .player-cards .card_' + player1[i].symbol).addClass('para');
                }
            }
        }
        for (i = 0; i < player2.length; i++) {
            for (j = 0; j < player2.length; j++) {
                if ((player2[i].symbol === player2[j].symbol) && (i !== j)) {
                    $('#player2 .player-cards .card_' + player2[i].symbol).addClass('para');
                }
            }
        }
        for (i = 0; i < player3.length; i++) {
            for (j = 0; j < player3.length; j++) {
                if ((player3[i].symbol === player3[j].symbol) && (i !== j)) {
                    $('#player3 .player-cards .card_' + player3[i].symbol).addClass('para');
                }
            }
        }
        for (i = 0; i < player4.length; i++) {
            for (j = 0; j < player1.length; j++) {
                if ((player4[i].symbol === player4[j].symbol) && (i !== j)) {
                    $('#player4 .player-cards .card_' + player4[i].symbol).addClass('para');
                }
            }
        }
    }, 2000);
    setTimeout(function () {
        $('.player-cards .para').each(function () {
            $(this).addClass('hide_card');
        });
    }, 5000);

}

$(document).ready(function () {
    var i, j;
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    var randomNums = inicjuj(nums);
    for (i = 0; i < 25; i++) {
        if (i >= 0 && i <= 5) {
            player1.push(zestawkart[randomNums[i]]);
            $('#player1 .player-cards').append('<div class="card card_' + zestawkart[randomNums[i]].symbol + '" data-player="1" data-number="' + (i) + '" data-symbol="' + zestawkart[randomNums[i]].symbol + '"></div>');
        } else if (i >= 6 && i <= 11) {
            player2.push(zestawkart[randomNums[i]]);
            $('#player2 .player-cards').append('<div class="card card_' + zestawkart[randomNums[i]].symbol + '" data-player="2" data-number="' + (i - 6) + '" data-symbol="' + zestawkart[randomNums[i]].symbol + '"></div>');
        } else if (i >= 12 && i <= 17) {
            player3.push(zestawkart[randomNums[i]]);
            $('#player3 .player-cards').append('<div class="card card_' + zestawkart[randomNums[i]].symbol + '" data-player="3" data-number="' + (i - 12) + '" data-symbol="' + zestawkart[randomNums[i]].symbol + '"></div>');
        } else if (i >= 18 && i <= 25) {
            player4.push(zestawkart[randomNums[i]]);
            $('#player4 .player-cards').append('<div class="card card_' + zestawkart[randomNums[i]].symbol + '" data-player="4" data-number="' + (i - 18) + '" data-symbol="' + zestawkart[randomNums[i]].symbol + '"></div>');
        }
    }

    redukujPary();
    sprawdzWynik();
});
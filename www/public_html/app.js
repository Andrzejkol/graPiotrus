/* talia kart */
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
var player1_name = "gracz 1",
        player2_name = "gracz 2",
        player3_name = "gracz 3",
        player4_name = "gracz 4";
var players_in_game = 4;
var player_now = 1;
var player_lose = 0;
var nums, randomNums;
var enemy = 4;
var game_stop = false;
var log_player1, log_player2, log_player3, log_player4;

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
    var alertmsg = '';
    /* gdy komuś został tylko piotruś*/
    if (player1.length === 1 && player1[0].symbol === 'P') {
        alertmsg = 'Gracz ' + player1_name + ' przegrał.';
        player_lose = 1;
    } else
    if (player2.length === 1 && player2[0].symbol === 'P') {
        alertmsg = 'Gracz ' + player2_name + ' przegrał.';
        player_lose = 2;
    } else
    if (player3.length === 1 && player3[0].symbol === 'P') {
        alertmsg = 'Gracz ' + player3_name + ' przegrał.';
        player_lose = 3;
    } else
    if (player4.length === 1 && player4[0].symbol === 'P') {
        alertmsg = 'Gracz ' + player4_name + ' przegrał.';
        player_lose = 4;
    }


    switch (player_lose) {
        case 1:
            {
                $('#player1').addClass('player_lose');
            }
            break;
        case 2:
            {
                $('#player2').addClass('player_lose');

            }
            break;
        case 3:
            {
                $('#player3').addClass('player_lose');

            }
            break;
        case 4:
            {
                $('#player4').addClass('player_lose');

            }
            break;
    }
    if (alertmsg !== '') {
        game_stop = true;
        alert(alertmsg);
    }
    /* gdy ktoś został sam w grze */

    /*  */
}

function redukujPary() {
    /* sprawdzenie par po losowaniu */
    setTimeout(function () {
        for (i = 0; i < player1.length; i++) {
            for (j = 0; j < player1.length; j++) {
                if ((player1[i].symbol === player1[j].symbol) && (i !== j)) {
                    $('#player1 .player-cards .card_' + player1[i].symbol).addClass('para');
                    player1[i].wybrana = 1;
                    player1[j].wybrana = 1;
                }
            }
        }
        for (i = 0; i < player2.length; i++) {
            for (j = 0; j < player2.length; j++) {
                if ((player2[i].symbol === player2[j].symbol) && (i !== j)) {
                    $('#player2 .player-cards .card_' + player2[i].symbol).addClass('para');
                    player2[i].wybrana = 1;
                    player2[j].wybrana = 1;
                }
            }
        }
        for (i = 0; i < player3.length; i++) {
            for (j = 0; j < player3.length; j++) {
                if ((player3[i].symbol === player3[j].symbol) && (i !== j)) {
                    $('#player3 .player-cards .card_' + player3[i].symbol).addClass('para');
                    player3[i].wybrana = 1;
                    player3[j].wybrana = 1;
                }
            }
        }
        for (i = 0; i < player4.length; i++) {
            for (j = 0; j < player4.length; j++) {
                if ((player4[i].symbol === player4[j].symbol) && (i !== j)) {
                    $('#player4 .player-cards .card_' + player4[i].symbol).addClass('para');
                    player4[i].wybrana = 1;
                    player4[j].wybrana = 1;
                }
            }
        }

        /* usunięcie par z tablicy kart graczy*/
        var pary;

        pary = true;
        while (pary) {
            pary = false;
            for (i = 0; i < player1.length; i++) {
                if (player1[i].wybrana === 1) {
                    pary = true;

                    player1.splice(i, 1);
                }
            }
        }
        pary = true;
        while (pary) {
            pary = false;
            for (i = 0; i < player2.length; i++) {
                if (player2[i].wybrana === 1) {
                    pary = true;
                    player2.splice(i, 1);
                }
            }
        }
        pary = true;
        while (pary) {
            pary = false;
            for (i = 0; i < player3.length; i++) {
                if (player3[i].wybrana === 1) {
                    pary = true;
                    player3.splice(i, 1);
                }
            }
        }
        pary = true;
        while (pary) {
            pary = false;
            for (i = 0; i < player4.length; i++) {
                if (player4[i].wybrana === 1) {
                    pary = true;
                    player4.splice(i, 1);
                }
            }
        }




    }, 1000);
    setTimeout(function () {


        /* ukrycie wybranej karty */
        $('.player-cards .para').each(function () {
            $(this).addClass('hide_card');
        });


        /* przesunięcie aktualnego gracza gdy ten niema już kart */
        /*   if (player_now === 1 && player2.length === 0) {
         player_now = 2;
         }
         if (player_now === 2 && player3.length === 0) {
         player_now = 3;
         }
         if (player_now === 3 && player4.length === 0) {
         player_now = 4;
         }
         if (player_now === 4 && player1.length === 0) {
         player_now = 1;
         }*/

        /* przesunięcie wroga aktualnego gracza ze względu na brak któregoś gracza */
        if (player_now === 1) {
            if (player1.length === 0) {
                player_now = 2;
            } else
            if (player2.length > 0) {
                enemy = 2;
            } else
            if (player3.length > 0) {
                enemy = 3;
            } else
            if (player4.length > 0) {
                enemy = 4;
            }
        }
        if (player_now === 2) {
            if (player2.length === 0) {
                player_now = 3;
            } else
            if (player3.length > 0) {
                enemy = 3;
            } else
            if (player4.length > 0) {
                enemy = 4;
            } else
            if (player1.length > 0) {
                enemy = 1;
            }
        }

        if (player_now === 3) {
            if (player3.length === 0) {
                player_now = 4;
            } else
            if (player4.length > 0) {
                enemy = 4;
            } else
            if (player1.length > 0) {
                enemy = 1;
            } else
            if (player2.length > 0) {
                enemy = 2;
            }
        }
        if (player_now === 4) {
            if (player4.length === 0) {
                player_now = 1;
            } else
            if (player1.length > 0) {
                enemy = 1;
            } else
            if (player2.length > 0) {
                enemy = 2;
            } else
            if (player3.length > 0) {
                enemy = 3;
            }
        }
        console.log(player_now + ' vs ' + enemy + ' -> ' + player1.length + ' | ' + player2.length + ' | ' + player3.length + ' | ' + player4.length + ' | ');

        gra();
    }, 2000);

}

function przerysujkarty() {

    /* kasowanie i rysowanie od nowa kart */
    $('#player1 .player-cards').html('');
    for (i = 0; i < player1.length; i++) {
        $('#player1 .player-cards').append('<div class="card card_' + player1[i].symbol + '" data-player="1" data-number="' + i + '" data-symbol="' + player1[i].symbol + '"></div>');
    }
    $('#player2 .player-cards').html('');
    for (i = 0; i < player2.length; i++) {
        $('#player2 .player-cards').append('<div class="card card_' + player2[i].symbol + '" data-player="2" data-number="' + i + '" data-symbol="' + player2[i].symbol + '"></div>');
    }

    $('#player3 .player-cards').html('');
    for (i = 0; i < player3.length; i++) {
        $('#player3 .player-cards').append('<div class="card card_' + player3[i].symbol + '" data-player="3" data-number="' + i + '" data-symbol="' + player3[i].symbol + '"></div>');
    }

    $('#player4 .player-cards').html('');
    for (i = 0; i < player4.length; i++) {
        $('#player4 .player-cards').append('<div class="card card_' + player4[i].symbol + '" data-player="4" data-number="' + i + '" data-symbol="' + player4[i].symbol + '"></div>');
    }

    // console.log(player_now + ' -> ' + player1.length + ' | ' + player2.length + ' | ' + player3.length + ' | ' + player4.length + ' | ');

}

function gra() {


    $('.selectedcard').removeClass('selectedcard');
    /* ustawianie gracza od którego pobierana jest teraz karta */
    if (!game_stop) {
        if (enemy === 1) {
            $('.selectcard').removeClass('selectcard');
            $('#player1').addClass('selectcard');
        } else if (enemy === 2) {
            $('.selectcard').removeClass('selectcard');
            $('#player2').addClass('selectcard');
        } else if (enemy === 3) {
            $('.selectcard').removeClass('selectcard');
            $('#player3').addClass('selectcard');
        } else if (enemy === 4) {
            $('.selectcard').removeClass('selectcard');
            $('#player4').addClass('selectcard');
        }
    } else {
        player_now = 0;
    }
    // console.log(player_now + ' -> ' + player1.length + ' | ' + player2.length + ' | ' + player3.length + ' | ' + player4.length + ' | ');
    przerysujkarty();

}



$(document).ready(function () {
    var i, j;
    nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    randomNums = inicjuj(nums);


    $('#hide_popup').click(function () {
        player1_name = $('#player1name').text();
        player2_name = $('#player2name').text();
        player3_name = $('#player3name').text();
        player4_name = $('#player4name').text();
        $('#player1 .player-name h2').text(player1_name);
        $('#player2 .player-name h2').text(player2_name);
        $('#player3 .player-name h2').text(player3_name);
        $('#player4 .player-name h2').text(player4_name);
        $('#popup').hide();
    });

    for (i = 0; i < randomNums.length; i++) {
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

    $('body').on('click', '.selectcard .player-cards', function () {

    });
    $('body').on('click', '.selectcard .player-cards .card', function () {
        $('.selectcard').addClass('selectedcard');
        $('.selectcard').removeClass('selectcard');
        /* kliknięcie w karte = przepisanie jej do poprzedniego gracza*/
        if (player_now === 1) {
            switch (enemy) {
                case 2:
                {
                    player1.push(player2[$(this).attr('data-number')]);
                    player2.splice(parseInt($(this).attr('data-number')), 1);
                    player1[player1.length - 1].wybrana = 0;
                    break;
                }
                case 3:
                {
                    player1.push(player3[$(this).attr('data-number')]);
                    player3.splice(parseInt($(this).attr('data-number')), 1);
                    player1[player1.length - 1].wybrana = 0;
                    break;
                }
                case 4:
                {
                    player1.push(player4[$(this).attr('data-number')]);
                    player4.splice(parseInt($(this).attr('data-number')), 1);
                    player1[player1.length - 1].wybrana = 0;
                    break;
                }
            }
            player_now = 2;
        } else
        if (player_now === 2) {
            switch (enemy) {
                case 3:
                {
                    player2.push(player3[$(this).attr('data-number')]);
                    player3.splice(parseInt($(this).attr('data-number')), 1);
                    player2[player2.length - 1].wybrana = 0;
                    break;
                }
                case 4:
                {
                    player2.push(player4[$(this).attr('data-number')]);
                    player4.splice(parseInt($(this).attr('data-number')), 1);
                    player2[player2.length - 1].wybrana = 0;
                    break;
                }
                case 1:
                {
                    player2.push(player1[$(this).attr('data-number')]);
                    player1.splice(parseInt($(this).attr('data-number')), 1);
                    player2[player2.length - 1].wybrana = 0;
                    break;
                }
            }
            player_now = 3;
        } else
        if (player_now === 3) {
            switch (enemy) {
                case 4:
                {
                    player3.push(player4[$(this).attr('data-number')]);
                    player4.splice(parseInt($(this).attr('data-number')), 1);
                    player3[player3.length - 1].wybrana = 0;
                    break;
                }
                case 1:
                {
                    player3.push(player1[$(this).attr('data-number')]);
                    player1.splice(parseInt($(this).attr('data-number')), 1);
                    player3[player3.length - 1].wybrana = 0;
                    break;
                }
                case 2:
                {
                    player3.push(player2[$(this).attr('data-number')]);
                    player2.splice(parseInt($(this).attr('data-number')), 1);
                    player3[player3.length - 1].wybrana = 0;
                    break;
                }
            }
            player_now = 4;
        } else
        if (player_now === 4) {
            switch (enemy) {
                case 1:
                {
                    player4.push(player1[$(this).attr('data-number')]);
                    player1.splice(parseInt($(this).attr('data-number')), 1);
                    player4[player4.length - 1].wybrana = 0;
                    break;
                }
                case 2:
                {
                    player4.push(player2[$(this).attr('data-number')]);
                    player2.splice(parseInt($(this).attr('data-number')), 1);
                    player4[player4.length - 1].wybrana = 0;
                    break;
                }
                case 3:
                {
                    player4.push(player3[$(this).attr('data-number')]);
                    player3.splice(parseInt($(this).attr('data-number')), 1);
                    player4[player4.length - 1].wybrana = 0;
                    break;
                }
            }
            player_now = 1;
        }
        redukujPary();


        sprawdzWynik();

    });

    redukujPary();

    sprawdzWynik();
    // console.log(player_now + ' -> ' + player1.length + ' | ' + player2.length + ' | ' + player3.length + ' | ' + player4.length + ' | ');

});
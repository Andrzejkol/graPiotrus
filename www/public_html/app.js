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
            temp;

    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        if (i >= 0 && i <= 5) {
            player1.push(zestawkart[j]);
        } else if (i >= 6 && i <= 11) {
            player2.push(zestawkart[j]);
        } else if (i >= 12 && i <= 17) {
            player3.push(zestawkart[j]);
        } else if (i >= 18 && i <= 25) {
            player4.push(zestawkart[j]);
        }
    }
    return array;
}

$(document).ready(function () {

    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    var randomNums = inicjuj(nums);
    

    console.log(player1);
    console.log(player2);
    console.log(player3);
    console.log(player4);

});
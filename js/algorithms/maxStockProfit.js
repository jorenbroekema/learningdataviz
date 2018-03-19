function maxStockProfit(pricesArr){
    var highestIndex = null; //memo of highest sell price
    var maxProfit = -1;

    for(var i = 0; i < pricesArr.length; i++){
        if(!(highestIndex > i)){
            highestIndex = i+1;
            for(var j = i+2; j < pricesArr.length; j++)
                if(pricesArr[j] > pricesArr[highestIndex]) highestIndex = j;
        }

        if(pricesArr[highestIndex] - pricesArr[i] > maxProfit)
            maxProfit = pricesArr[highestIndex] - pricesArr[i];
    }
    return maxProfit;
}

//Lecture version. Much better, just in general quite clever..
function maxStockProfit2 (pricesArr) {
    var maxProfit = -1;
    var buyPrice = 0;
    var sellPrice = 0;

    var changeBuyPrice = true;

    for (var i = 0; i < pricesArr.length-1; i++) {
        if (changeBuyPrice) buyPrice = pricesArr[i];
        sellPrice = pricesArr[i + 1];
        console.log(sellPrice);

        if (sellPrice < buyPrice) {
            changeBuyPrice = true;
        }
        else {
            var tempProfit = sellPrice - buyPrice;
            if (tempProfit > maxProfit) maxProfit = tempProfit;
            changeBuyPrice = false;
        }
    }

    return maxProfit;
}

console.log(maxStockProfit([32,48,38,26,40,46,42]));
console.log(maxStockProfit2([32,48,38,26,40,46,42]));
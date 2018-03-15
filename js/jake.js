   Number.prototype.map = function (in_min, in_max, out_min, out_max) {
        return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    function number_format(number, decimals, dec_point, thousands_sep) {
        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            toFixedFix = function (n, prec) {
                // Fix for IE parseFloat(0.55).toFixed(0) = 0;
                var k = Math.pow(10, prec);
                return Math.round(n * k) / k;
            },
            s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    }

    //TWO REALLY COOL FUNCTIONS ^

    // CODE FOR JAKE

    /*var sliderMin = 0; var sliderMax = 100;
    var GHsMin = 0; var GHsMax = 50000; var stepMin = 0; var stepMax = 10;
    var currencyMin = 0; var currencyMax = 10000;


    var steps = Math.round(slider_value.map(sliderMin, sliderMax, stepMin, stepMax));
    var GHs = steps.map(stepMin, stepMax, GHsMin, GHsMax);
    var currency = steps.map(stepMin, stepMax, currencyMin, currencyMax);
    GHs = number_format(GHs);
    currency = number_format(currency);
    var currencyString = "<span class='currency'>$</span>";
    currencyString += currency;
    currencyString += "<span class=\\'interval mt-10\\' style=\\'margin-left:10px;\\'>/ contract</span>"

    $(".amount-gh").html(GHs);
    $(".contract-price").html(currencyString);*/
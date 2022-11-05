let button = document.getElementById('btn');

button.addEventListener('click', function(){
    const gram = parseInt(document.getElementById('grams').value);
    const type = document.getElementById('type').value;

    if(gram === '' || isNaN(gram)){
        document.getElementById('grams').focus();
        document.getElementById('error').innerHTML = 'Please provide a valid number';
        document.getElementById('output').innerHTML = '';
    }

    else {
        document.getElementById('error').innerHTML = '';
        switch(type){
           case 'kilogram':
                convert_kilogram(gram);
                break;
            case 'milligram':
                convert_milligram(gram);
                break;
            case 'microgram':
                convert_microgram(gram);
                break;
            case 'pound':
                convert_pound(gram);
                break;
            case 'ounce':
                convert_ounce(gram);
                break;
            case 'stone':
                convert_stone(gram);
                break;
            case 'imperialTon':
                convert_imperialTon(gram);
                break;
            case 'usTon':
                convert_usTon(gram);
                break;
            default:
                alert('error');
        }

        function convert_kilogram(gram){
            let rate = 1000, kilogram;
            kilogram = gram / rate;
            document.getElementById('output').innerHTML = gram + " grams = " + kilogram.toFixed(3) + ' kg.';
        }

        function convert_milligram(gram){
            let rate = 1000, milligram;
            milligram = gram * rate;
            document.getElementById('output').innerHTML = gram + " grams = " + milligram.toFixed(3) + ' Mg.';
        }

        function convert_microgram(gram){
            let rate = 1e+6, microgram;
            microgram = gram * rate;
            document.getElementById('output').innerHTML = gram + " grams = " + microgram.toFixed(3) + ' Mcg.';
        }

        function convert_pound(gram){
            let rate = 453.6, pound;
            pound = gram / rate;
            document.getElementById('output').innerHTML = gram + " grams = " + pound.toFixed(3) + ' Lbs.';
        }

        function convert_ounce(gram){
            let rate = 28.35, ounce;
            ounce = gram / rate;
            document.getElementById('output').innerHTML = gram + " grams = " + ounce.toFixed(3) + ' Oz.';
        }

        function convert_stone(gram){
            let rate = 6350, stone;
            stone = gram / rate;
            document.getElementById('output').innerHTML = gram + " grams = " + stone.toFixed(3) + ' St.';
        }

        function convert_imperialTon(gram){
            let rate = 1.016e+6, imperialTon;
            imperialTon = gram / rate;
            document.getElementById('output').innerHTML = gram + " grams = " + imperialTon.toFixed(3) + ' Tons.';
        }

        function convert_usTon(gram){
            let rate = 1.016e+6, usTon;
            usTon = gram / rate;
            document.getElementById('output').innerHTML = gram + " grams = " + usTon.toFixed(3) + ' UsTon.';
        }
    }
});
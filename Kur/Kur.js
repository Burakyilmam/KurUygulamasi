var dolar = document.querySelector('#dolardeger');
var euro = document.querySelector('#eurodeger');
var sterlin = document.querySelector('#sterlindeger');
var ruble = document.querySelector('#rubledeger');

let dolarApi = 'https://api.freecurrencyapi.com/v1/latest?apikey=ecM24lRC6NVIGuagK2AlkZQiPRdwejZsZxzM1F5K&base_currency=USD';

fetch(dolarApi).then(Response => Response.json()).then(data => 
    {

    var dolarValue = data['data']['TRY'];

    dolar.innerHTML = Number(dolarValue.toFixed(4));

    }
    )

    let EuroApi = 'https://api.freecurrencyapi.com/v1/latest?apikey=ecM24lRC6NVIGuagK2AlkZQiPRdwejZsZxzM1F5K&base_currency=EUR';

    fetch(EuroApi).then(Response => Response.json()).then(data => 
    {

    var euroValue = data['data']['TRY'];


    euro.innerHTML = Number(euroValue.toFixed(4));

    }
    )
    let SterlinApi = 'https://api.freecurrencyapi.com/v1/latest?apikey=ecM24lRC6NVIGuagK2AlkZQiPRdwejZsZxzM1F5K&base_currency=GBP';

    fetch(SterlinApi).then(Response => Response.json()).then(data => 
        {
    
        var sterlinValue = data['data']['TRY'];
    
    
        sterlin.innerHTML = Number(sterlinValue.toFixed(4));
    
        }
        )
        let rubleApi = 'https://api.freecurrencyapi.com/v1/latest?apikey=ecM24lRC6NVIGuagK2AlkZQiPRdwejZsZxzM1F5K&base_currency=RUB';

    fetch(rubleApi).then(Response => Response.json()).then(data => 
        {
    
        var rubleValue = data['data']['TRY'];
    
        ruble.innerHTML = Number(rubleValue.toFixed(4));
    
        }
        )

        
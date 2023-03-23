const ctx = document.getElementById('EUCountry');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Germany", "France", "Italy", "United Kingdom", "Spain", "Poland", "Netherlands", "Sweden", "Belgium/Luxembourg", "Switzerland"],
        datasets: [{
            label: 'Country size (km²)',
            data: [348560, 547557, 294140, 241930, 498800, 306230, 33720, 410340, 30280, 39516],
            borderWidth: 3,
            backgroundColor: 'rgba(0, 51, 153, 0.6)',
            borderColor:'rgba(0, 51, 153, 0.6)'
        }

        ]
    }
});


const ctx2 = document.getElementById('EUPop');

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["Germany", "France", "Italy", "United Kingdom", "Spain", "Poland", "Netherlands", "Sweden", "Belgium/Luxembourg", "Switzerland"],
        datasets: [
        {
            label: 'Population',
            data: [83783942, 65273511, 60273511, 67886011, 46733762, 37846611, 17134872, 10099265, 11589623,8654622],
            borderWidth: 3,
            backgroundColor: 'rgba(255, 204, 0, 0.6)',
            borderColor: 'rgba(255, 204, 0, 0.6)',
            
        }

        ]
    }
});

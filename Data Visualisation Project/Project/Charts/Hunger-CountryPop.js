const ctx = document.getElementById('countrySize');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Somalia", "Yemen", "Central African Republic", "Chad", "Democratic Republic of the Congo", "Madagascar", "Liberia", "Haiti", "Timor-Leste", "sierra Leone"],
        datasets: [{
            label: 'Country size (km²)',
            data: [637657, 527968, 623000, 1284000, 2344858, 587041, 111369, 27750, 30777, 71740],
            borderWidth: 3,
            backgroundColor:'rgba(28, 163, 80, 0.6)',
            borderColor:'rgba(28, 163, 80, 0.6)'
        },
]
    }
});

const ctx2 = document.getElementById('Population');

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["Somalia", "Yemen", "Central African Republic", "Chad", "Democratic Republic of the Congo", "Madagascar", "Liberia", "Haiti", "Timor-Leste", "sierra Leone"],
        datasets: [
        {
            label: 'Population',
            data: [17597511, 30984689, 5454533, 17963211, 108407721, 28172462, 5358483, 11334637, 3311735, 8692606 ],
            borderWidth: 3,
            backgroundColor:'rgba(255, 174, 66, 0.6)',
            borderColor:'rgba(255, 174, 66, 0.6)'
        }]
    }
});
const ctx = document.getElementById('Euro');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Germany", "France", "Italy", "United Kingdom", "Spain", "Poland", "Netherlands", "Sweden", "Belgium/Luxembourg", "Switzerland"],
    datasets: [{
      label: 'Total expenditure in Euros (million)',
      data: [13604, 11967,10640, 9885, 6898, 4004, 2898, 2232, 2001, 1858],
      borderWidth: 1,
      backgroundColor:'rgba(0, 20, 137, 0.6)'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
const ctx = document.getElementById('Temp');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Somalia", "Yemen", "Central African Republic", "Chad", "Democratic Republic of the Congo", "Madagascar", "Liberia", "Haiti", "Timor-Leste", "sierra Leone"],
    datasets: [{
      label: 'Average temperature',
      data: [26.88, 25.62,25.78, 27.72, 25.23, 22.87, 25.87, 25.06, 24.87, 27.19],
      borderWidth: 1,
      backgroundColor:'rgba(136, 73, 165, 0.6)'
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
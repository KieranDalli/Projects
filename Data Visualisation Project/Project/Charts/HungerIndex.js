const ctx = document.getElementById('Hunger');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Somalia", "Yemen", "Central African Republic", "Chad", "Democratic Republic of the Congo", "Madagascar", "Liberia", "Haiti", "Timor-Leste", "sierra Leone"],
    datasets: [{
      label: 'Global Hunger Index Score',
      data: [50.8, 45.1,43, 39.6, 39, 36.3, 33.3, 32.8, 32.4, 31.3],
      borderWidth: 1,
      backgroundColor:'rgba(208, 52, 44, 0.6)'
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
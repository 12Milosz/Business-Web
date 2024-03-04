const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{
        label: "Sales",
        data: [100, 200, 300, 400, 500, 600],
        borderColor: 'blue',
        borderWidth: 2,
        fill: false
    }]
};

// Get the canvas element
const ctx = document.getElementById('lineChart').getContext('2d');

// Create the line chart
const lineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
<script>
  import { onMount } from 'svelte'
  import Chart from 'Chart.js'
  const yLabels = {
    0: 'Novice',
    1: 'Basic',
    2: 'Medium',
    3: 'High',
    4: 'Master',
  }
  onMount(() => {
    let ctx = document.getElementById('myChart').getContext('2d')

    Chart.defaults.global.defaultFontColor = 'rgb(255,255,255,0.6)'
    let chart = new Chart(ctx, {
      type: 'bar',

      data: {
        labels: [
          'HTML',
          'CSS',
          'JavaScript',
          'Vue.JS',
          'Svelte',
          'Quasar',
          'PHP',
          'Laravel',
          'TailwindCSS',
          'Bootstrap',
          'Figma',
          'Adobe xd',
        ],
        datasets: [
          {
            label: '',
            backgroundColor: 'rgb(254,47,77,0.1)',
            borderColor: 'rgb(254,47,77)',
            borderWidth: 1,
            data: [
              3.8,
              3.2,
              2.9,
              2.9,
              2.5,
              1.9,
              1.2,
              1.3,
              3.1,
              1.9,
              3.4,
              2.8,
              4,
            ],
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'My web development skills chart',
          fontColor: '#fff',
          fontStyle: 'light',
          fontSize: '14',
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                callback: function(value, index, values) {
                  return yLabels[value]
                },
              },
            },
          ],
        },
      },
    })
  })
</script>

<style>
  .custom-shadow {
    -webkit-box-shadow: 16px 16px 32px rgba(0, 0, 0, 0.64);
    -moz-box-shadow: 16px 16px 32px rgba(0, 0, 0, 0.64);
    box-shadow: 16px 16px 32px rgba(0, 0, 0, 0.64);
  }
</style>

<canvas
  id="myChart"
  aria-label="my skill's chart"
  height="130"
  class="custom-shadow">
  <p class="text-white">Unfortunately, Your browser does not support canvas!</p>
</canvas>

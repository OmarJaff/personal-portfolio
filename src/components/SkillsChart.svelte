<script>
  import { onMount } from 'svelte'
  import Chart from 'chart.js'
  import deferred from 'chartjs-plugin-deferred'

  const yLabels = {
    0: 'Novice',
    1: 'Basic',
    2: 'Medium',
    3: 'High',
    4: 'Master',
  }

  onMount(() => {
    let ctx = document.getElementById('myChart').getContext('2d')
    Chart.defaults.global.defaultFontColor = 'rgb(255,255,255,0.8)'
    Chart.defaults.global.defaultFontFamily =
      "Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
    Chart.defaults.global.defaultFontSize = '12'
    Chart.defaults.global.tooltips.enabled = false
    Chart.defaults.global.animation.duration = 2000
    Chart.defaults.global.animation.easing = 'easeOutElastic'
    Chart.defaults.global.plugins.deferred.delay = 100
    Chart.defaults.global.plugins.deferred.xOffset = 150
    Chart.defaults.global.plugins.deferred.yOffset = '50%'
    let chart = new Chart(ctx, {
      type: 'bar',
      plugin: [deferred],
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
            backgroundColor: 'rgb(254,47,77,0.2)',
            borderColor: 'rgb(254,47,77,0.8)',
            hoverBorderColor: 'rgb(254,47,77,1)',
            barPercentage: 0.5,
            borderWidth: 1.5,
            data: [3, 3, 2.5, 2.8, 2.5, 1.9, 1, 1.1, 3, 2, 3, 2, 4],
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'My web development skills',
          fontColor: '#fff',
          fontSize: '16',
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              stacked: true,
              gridLines: {
                display: true,
                color: 'rgba(255,255,255,0.2)',
              },
              ticks: {
                beginAtZero: true,
                callback: function(value, index, values) {
                  return yLabels[value]
                },
              },
            },
          ],
        },
        // plugin: {
        //   deferred: {
        //     xOffset: 150, // defer until 150px of the canvas width are inside the viewport
        //     yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        //     delay: 500, // delay of 500 ms after the canvas is considered inside the viewport
        //   },
        // },
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

<canvas id="myChart" aria-label="my skill's chart" class="custom-shadow">
  <p class="text-white">Unfortunately, Your browser does not support canvas!</p>
</canvas>

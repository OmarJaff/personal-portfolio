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
    ctx.height = '1000'

    Chart.defaults.global.defaultFontColor = 'rgb(224,225,235)'
    Chart.defaults.global.defaultFontFamily =
      "Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
    Chart.defaults.global.defaultFontSize = '14'
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
          'Nuxt.JS',
          'Quasar',
          'Svelte',
          'PHP',
          'Laravel',
          'TailwindCSS',
          'Bootstrap',
          'Figma',
        ],
        datasets: [
          {
            backgroundColor: [
              'rgb(255,77,90,0.5)',
              'rgb(255,255,255,0.5)',
              'rgb(255,77,90,0.5)',
              'rgb(255,255,255,0.5)',
              'rgb(255,77,90,0.5)',
              'rgb(255,255,255,0.5)',
              'rgb(255,77,90,0.5)',
              'rgb(255,255,255,0.5)',
              'rgb(255,77,90,0.5)',
              'rgb(255,255,255,0.5)',
              'rgb(255,77,90,0.5)',
              'rgb(255,255,255,0.5)',
            ],
            // borderColor: 'rgb(254,47,77,1)',
            hoverBorderColor: 'rgb(254,47,77,1)',
            barPercentage: 0.8,
            borderWidth: 1,
            data: [3, 3, 2.5, 2.8, 2.5, 2, 2.5, 1, 1, 3, 2, 3, 4],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,

        legend: {
          display: false,
        },
        title: {
          display: false,
          text: 'Web Skills',

          fontSize: '16',
          fontFamily: 'nixiOne',
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
  .custom-h {
    height: 550px;
    width: 100%;
  }
</style>

<canvas
  id="myChart"
  dir="rtl"
  aria-label="my skill's chart"
  class="custom-shadow custom-h ">
  <p class="text-white">Unfortunately, Your browser does not support canvas!</p>
</canvas>

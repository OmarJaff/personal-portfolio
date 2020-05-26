<script>
  import { onMount } from "svelte";
  import Chart from "chart.js";
  import deferred from "chartjs-plugin-deferred";

  const yLabels = {
    0: "Novice",
    1: "Basic",
    2: "Medium",
    3: "High",
    4: "Master"
  };

  onMount(() => {
    let ctx = document.getElementById("myChart").getContext("2d");
    ctx.height = "1000";

    Chart.defaults.global.defaultFontColor = "rgb(113,128,150)";
    Chart.defaults.global.defaultFontFamily =
      "'Roboto Mono', 'sans-serif', 'Arial' ,'Courier New', monospace";
    Chart.defaults.global.defaultFontSize = "14";
    Chart.defaults.global.tooltips.enabled = false;
    Chart.defaults.global.animation.duration = 600;
    Chart.defaults.global.animation.easing = "linear";
    Chart.defaults.global.plugins.deferred.delay = 100;
    Chart.defaults.global.plugins.deferred.xOffset = 150;
    Chart.defaults.global.plugins.deferred.yOffset = "50%";
    let chart = new Chart(ctx, {
      type: "bar",
      plugin: [deferred],
      data: {
        labels: [
          "HTML",
          "CSS",
          "JavaScript",
          "Vue.JS",
          "Nuxt.JS",
          "NativeScript",
          "Svelte",
          "PHP",
          "Laravel",
          "TailwindCSS",
          "Bootstrap",
          "Figma"
        ],
        datasets: [
          {
            backgroundColor: "rgb(80,209,197)",
            hoverBorderColor: "rgb(224,225,235)",
            barPercentage: 0.5,
            borderWidth: 1,
            data: [3, 3, 2.5, 2.8, 2.5, 1, 2.5, 2, 2, 3, 2, 3, 4]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,

        legend: {
          display: false
        },
        title: {
          display: false,

          fontSize: "14",
          fontFamily: "'Roboto Mono'"
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              stacked: false,
              gridLines: {
                display: true,
                color: "rgb(203,213,224)"
              },
              ticks: {
                beginAtZero: true,
                callback: function(value, index, values) {
                  return yLabels[value];
                }
              }
            }
          ]
        }
      }
    });
  });
</script>

<canvas
  id="myChart"
  dir="rtl"
  aria-label="my skill's chart"
  class="custom-shadow custom-h"
  height="380">
  <p class="text-white">Unfortunately, Your browser does not support canvas!</p>
</canvas>

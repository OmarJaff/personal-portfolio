<script>
  let y = 0
  $: console.log(y);
</script>

<style>
  .arrows {
    width: 60px;
    height: 72px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    bottom: 20px;
  }

  .arrows path {
    stroke: #fe2f4d;
    fill: transparent;
    stroke-width: 1px;
    animation: arrow 2s infinite;
    -webkit-animation: arrow 2s infinite;
  }
  .fadeOut {
    opacity: 1;
    animation: faded-out 2s ease forwards;
    -webkit-animation: faded-out 2s ease forwards;
  }
  .fadeIn {
    opacity: 0;
    animation: faded-in 2s ease forwards;
    -webkit-animation: faded-in 2s ease forwards;
  }

  @keyframes faded-in {
    0% {
      opacity: 0
    }
    100% {
      opacity: 1
    }
  }

  @keyframes faded-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes arrow {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes arrow /*Safari and Chrome*/ {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  .arrows path.a2 {
    animation-delay: -0.5s;
    -webkit-animation-delay: -0.5s;
  }

  .arrows path.a3 {
    animation-delay: 0s;
    -webkit-animation-delay: 0s;
  }
</style>

<svelte:window bind:scrollY={y} />

<div
  class="{y > 0 ? ' fadeOut' : 'fadeIn'}   sm:block flex font-col
  topstyle my-12 justify-center ">

  <svg class="arrows my-16 lg:my-0 ">
    <path class="a2" d="M0 20 L30 52 L60 20" />
    <path class="a3" d="M0 40 L30 72 L60 40" />
  </svg>
</div>

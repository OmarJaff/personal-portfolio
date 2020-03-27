<script>
  let y = 0
</script>

<style>
  .fadeOut {
    opacity: 1;
    animation: faded-out 1s ease forwards;
    -webkit-animation: faded-out 1s ease forwards;
  }
  .fadeIn {
    opacity: 0;
    animation: faded-in 1s ease forwards;
    -webkit-animation: faded-in 1s ease forwards;
  }

  @keyframes faded-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes faded-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .arrow,
  .arrow:before {
    position: absolute;
    left: 50%;
  }
  .arrow {
    top: 90%;
    margin: -20px 0 0 -20px;
    -webkit-transform: rotate(45deg);
    border-left: none;
    border-top: none;
    border-right: 2px #fff solid;
    border-bottom: 2px #fff solid;
  }
  .arrow:before {
    content: '';
    width: 20px;
    height: 20px;
    top: 50%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 1px #fe2f4d solid;
    border-bottom: 1px #fe2f4d solid;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: arrow;
  }

  .top-20 {
    top: 60px;
  }
  @keyframes arrow {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(-10px, -10px);
    }
  }
  .size {
    width: 30px;
    height: 30px;
  }
  @media only screen and (min-width: 640px) {
    .size {
      width: 40px;
      height: 40px;
    }
  }
</style>

<svelte:window bind:scrollY={y} />

<!-- <div
  class="{y > 0 ? ' fadeOut' : 'fadeIn'} sm:block flex font-col topstyle my-12
  justify-center ">
  <svg class="arrows my-16 lg:my-0 ">
    <path class="a2" d="M0 20 L30 52 L60 20" />
    <path class="a3" d="M0 40 L30 72 L60 40" />
  </svg>
</div> -->

<div
  class="{y > 0 ? ' fadeOut' : 'fadeIn'} sm:block flex font-col justify-center
  top-20 ">

  <div class="arrow size" />

</div>

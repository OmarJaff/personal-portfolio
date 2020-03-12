<script>

</script>

<style>
  div {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
  }
  .spananimation {
    will-change: auto;
    animation: slidein 5s ease;
  }
  @keyframes showup {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes slidein {
    0% {
      margin-left: -800px;
    }
    20% {
      margin-left: -800px;
    }
    35% {
      margin-left: 0px;
    }
    100% {
      margin-left: 0px;
    }
  }

  @keyframes reveal {
    0% {
      opacity: 0;
      width: 0px;
    }
    20% {
      opacity: 1;
      width: 0px;
    }
    30% {
      width: 35px;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      width: 35px;
    }
  }
</style>

<div class="absolute ">
  <div class="sm:text-4xl lg:text-6xl px-3 md:px-6">OMAR</div>
  <div>
    <span class="spananimation sm:text-4xl lg:text-6xl ">S. JAFF</span>
  </div>
</div>

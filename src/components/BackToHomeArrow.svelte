<script>
  let y = 0;
  import jump from "jump.js";
</script>

<style>
  .fadeIn-custom {
    opacity: 0;
    animation: fade-in 1s ease forwards;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.7;
    }
  }
</style>

<svelte:window bind:scrollY={y} />

{#if y > 600}
  <div
    class="fadeIn-custom flex justify-end right-0 fixed bottom-0 my-3 sm:my-6
    z-40 outline-none sm:mx-4">
    <button
      class="outline-none focus:outline-none"
      on:click={() => jump('.target', {
          duration: 1000,
          offset: 0,
          a11y: false
        })}
      name="backtotop">
      <svg
        width="51"
        height="51"
        viewBox="0 0 51 51"
        class="fill-current text-teal-400 w-10 h-10 sm:h-auto sm:w-auto
        hover:text-teal-500"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25.5 45.9C36.7666 45.9 45.9 36.7666 45.9 25.5C45.9 14.2334 36.7666
          5.09998 25.5 5.09998C14.2334 5.09998 5.09998 14.2334 5.09998
          25.5C5.09998 36.7666 14.2334 45.9 25.5 45.9ZM34.9531 23.6968L27.3031
          16.0468C26.3073 15.051 24.6927 15.051 23.6968 16.0468L16.0468
          23.6968C15.051 24.6927 15.051 26.3073 16.0468 27.3031C17.0427 28.2989
          18.6573 28.2989 19.6531 27.3031L22.95 24.0062V33.15C22.95 34.5583
          24.0916 35.7 25.5 35.7C26.9083 35.7 28.05 34.5583 28.05
          33.15V24.0062L31.3469 27.3031C32.3426 28.2989 33.9573 28.2989 34.9531
          27.3031C35.9489 26.3073 35.9489 24.6927 34.9531 23.6968Z" />
      </svg>

    </button>
  </div>
{/if}

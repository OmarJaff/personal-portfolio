<script>
  export let containerTitle = ''
  export let containerDescription = ''
  export let techIconsPresent = true
</script>

<style>
  .custom-shadow {
    -webkit-box-shadow: 16px 16px 32px rgba(0, 0, 0, 0.64);
    -moz-box-shadow: 16px 16px 32px rgba(0, 0, 0, 0.64);
    box-shadow: 16px 16px 32px rgba(0, 0, 0, 0.64);
  }

  @media only screen and (min-width: 640px) and (max-width: 1279px) {
    .top-custom-2 {
      top: 21rem;
    }
  }
  @media only screen and (min-width: 1280px) {
    .pictuer-width {
      width: 35rem;
    }
    .text-width {
      width: 35rem;
    }
    .h-custom {
      height: 20rem;
    }
    .text-h-custom {
      height: 20rem;
    }
    .top-custom {
      top: 4rem;
      left: 32rem;
    }
    .left-picture {
      right: 8rem;
    }
    .photo-shadow {
      -webkit-box-shadow: -16px 16px 32px rgba(0, 0, 0, 0.64);
      -moz-box-shadow: -16px 16px 32px rgba(0, 0, 0, 0.64);
      box-shadow: -16px 16px 32px rgba(0, 0, 0, 0.64);
    }
  }
</style>

<div
  class="{containerTitle ? ' xl:mb-40 mb-12' : ''} flex flex-col w-auto relative
  items-center sm:items-start ">
  <div
    class=" flex pictuer-width lg:h-auto left-0 z-10 photo-shadow left-picture
    h-custom w-full bg-dark-blue">
    <slot name="containerDesign" />
  </div>
  <div
    class=" text-width text-h-custom flex xl:justify-end xl:absolute top-custom
    h-auto top-custom-2 font-mono ">
    <div class="custom-shadow h-full w-full flex flex-col justify-between ">
      {#if containerTitle}
        <h1
          class="text-white flex justify-center p-2 text-base lg:p-4 lg:text-xl
          xl:text-2xl xl:-mb-10 ">
          {containerTitle.toUpperCase()}
        </h1>
      {/if}
      {#if containerDescription}
        <p
          class="text-white flex justify-center text-justify font-thin
          text-center text-sm px-6 py-2 sm:text-lg xl:ml-12 xl:px-5 xl:py-0
          xl:leading-8 opacity-75 h-full xl:my-10 ">
          {containerDescription}
        </p>
      {:else}
        <slot name="aboutMe" />
      {/if}

      {#if techIconsPresent === true}
        <div class="flex w-full py-3 px-6 bg-dark-blue-deep lg:px-4 xl:-my-8">
          <span
            class="flex text-vived-red font-thin text-xs items-center
            flex-shrink-0 sm:text-sm opacity-75">
            Technologies Used:
          </span>
          <slot name="techIcons" />
        </div>
      {/if}
    </div>
  </div>
</div>

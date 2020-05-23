<script>
  export let containerTitle = "";
  export let containerDescription = "";
  export let techIconsPresent = true;
</script>

<style>
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
    .custom-shadow {
      -webkit-box-shadow: 8px 6px 12px 0px rgba(0, 0, 0, 0.68);
      -moz-box-shadow: 8px 6px 12px 0px rgba(0, 0, 0, 0.68);
      box-shadow: 8px 6px 12px 0px rgba(0, 0, 0, 0.68);
    }
    .photo-shadow {
      -webkit-box-shadow: -8px 6px 12px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: -8px 6px 12px 0px rgba(0, 0, 0, 0.75);
      box-shadow: -8px 6px 12px 0px rgba(0, 0, 0, 0.75);
    }
  }
  @media only screen and (max-width: 1279px) {
    .layout-shadow {
      -webkit-box-shadow: 8px 6px 12px 0px rgba(0, 0, 0, 0.68);
      -moz-box-shadow: 8px 6px 12px 0px rgba(0, 0, 0, 0.68);
      box-shadow: 8px 6px 12px 0px rgba(0, 0, 0, 0.68);
    }
  }
</style>

<div
  class="{containerTitle ? ' xl:mb-40 mb-24' : ''} flex flex-col w-auto relative
  items-center sm:items-start layout-shadow ">
  <div
    class=" flex pictuer-width left-0 z-10 photo-shadow left-picture h-custom
    w-full bg-dark-blue lg:h-auto">
    <slot />
  </div>
  <div
    class=" text-width text-h-custom flex xl:justify-end xl:absolute top-custom
    h-auto top-custom-2 font-mono custom-shadow">
    <div class=" h-full w-full flex flex-col justify-between ">
      {#if containerTitle}
        <h1
          class="text-white flex justify-center text-base p-4 lg:text-xl
          xl:text-2xl xl:-mb-10 ">
          {containerTitle.toUpperCase()}
        </h1>
      {/if}
      {#if containerDescription}
        <p
          class=" text-text-white-lighter flex justify-center text-justify
          font-thin text-center text-sm px-6 py-2 sm:text-lg xl:ml-12 xl:px-5
          xl:py-0 xl:leading-8 h-full xl:my-10 ">
          {containerDescription}
        </p>
      {:else}
        <slot name="aboutMe" />
      {/if}

      {#if techIconsPresent === true}
        <div
          class="flex w-full py-4 px-6 bg-dark-blue-deep lg:px-4 xl:-my-8
          custom-shadow">
          <span
            class="flex text-vived-red font-thin text-xs items-center
            flex-shrink-0 sm:text-sm">
            Technologies Used:
          </span>
          <slot name="techIcons" />
        </div>
      {/if}
    </div>
  </div>
</div>

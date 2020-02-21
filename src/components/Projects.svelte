<script>
  import PageTitle from './PageTitle.svelte'
</script>

<style>
  .custom-shadow {
    -webkit-box-shadow: 16px 16px 32px rgba(0, 0, 0, 0.64);
    -moz-box-shadow: 16px 16px 32px rgba(0, 0, 0, 0.64);
    box-shadow: 16px 16px 32px rgba(0, 0, 0, 0.64);
  }

  .w-custom {
    width: 24rem;
  }
  @media only screen and (min-width: 640px) and (max-width: 1279px) {
    .w-custom {
      width: 34rem;
    }
    .top-custom-2 {
      top: 21rem;
    }
  }
  @media only screen and (min-width: 1280px) {
    .w-custom {
      width: 64rem;
      top: 30rem;
    }
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

<div class="flex flex-col w-custom">
  <div class="flex mb-12 justify-center sm:justify-start">
    <PageTitle title="Featured Projects" />
  </div>
  <div class="flex flex-col w-auto relative ">
    <div
      class=" flex pictuer-width lg:h-auto left-0 z-10 photo-shadow left-picture
      h-custom" />
    <div
      class=" text-width text-h-custom flex xl:justify-end xl:absolute
      top-custom h-auto top-custom-2">
      <div class="custom-shadow">
        <p>sddfafsdf</p>
      </div>
    </div>
  </div>
</div>

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
      width: 28rem;
    }
  }
  @media only screen and (min-width: 1280px) {
    .w-custom {
      width: 64rem;
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

<svelte:head>
  <title>About Omar</title>
</svelte:head>
<div class="flex flex-col w-custom ">
  <div class="flex relative mb-12 justify-center sm:justify-start">
    <PageTitle title="About Omar" />
  </div>
  <div class="flex flex-col w-auto lg:flex-row relative ">
    <div
      class=" flex pictuer-width lg:h-auto left-0 lg:absolute z-10 photo-shadow
      left-picture h-custom">
      <img
        class="fill-current relative "
        src="web-developer-omar-jaff.jpg"
        alt="a web developer person character with a laptop and other symbols of
        code and programming" />
    </div>
    <div
      class=" text-width text-h-custom flex xl:justify-end xl:absolute
      top-custom h-auto mb-20 ">
      <div class="custom-shadow ">

        <p
          class="text-white font-thin p-6 xl:ml-12 sm:text-lg font-mono
          font-thin text-justify ">
          Hi ! I am a front-end web developer and user interface (UI) designer.
          I have about two years of experience in web development field and have
          worked on independent projects with other freelancer teams using the
          most efficient and modern web technologies. I love to work in a
          professional and accurate pattern, and always aim to develop fast,
          beautiful and functional user interfaces. You may also have a look at
          my
          <span class="text-vived-red">CV</span>
          by clicking
          <a href="#home" class="text-vived-red">here</a>

        </p>
      </div>

    </div>
  </div>
</div>

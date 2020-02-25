<script>
  import PageTitle from './PageTitle.svelte'
</script>

<style>
  .w-custom {
    width: 24rem;
  }
  .custom-shadow {
    -webkit-box-shadow: 8px 6px 12px 0px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 8px 6px 12px 0px rgba(0, 0, 0, 0.68);
    box-shadow: 8px 6px 12px 0px rgba(0, 0, 0, 0.68);
  }
  .buttom-shadow {
    -webkit-box-shadow: 6px 5px 9px -3px rgba(0, 0, 0, 0.59);
    -moz-box-shadow: 6px 5px 9px -3px rgba(0, 0, 0, 0.59);
    box-shadow: 6px 5px 9px -3px rgba(0, 0, 0, 0.59);
  }
  @media only screen and (min-width: 640px) and (max-width: 1279px) {
    .w-custom {
      width: 34rem;
    }
  }
  @media only screen and (min-width: 1280px) {
    .w-custom {
      width: 64rem;
      top: 30rem;
    }
  }
</style>

<div class="flex flex-col w-custom mb-48">
  <div class="flex mb-12 justify-center sm:justify-start">
    <PageTitle title="Contact me" />
  </div>
  <div class=" flex justify-center font-mono ">

    <div
      class="flex flex-col custom-shadow my-8 w-full xl:w-11/12 items-center ">
      <div class="flex">
        <h1
          class="text-white text-sm text-center sm:text-lg xl:text-2xl px-6
          font-col ">
          Have a
          <span class="text-vived-red">question</span>
          or want to
          <span class="text-vived-red">work</span>
          together?
        </h1>
      </div>
      <form class="flex flex-col p-6 w-full">
        <input
          type="text"
          id="fullname"
          required
          name="fullname"
          class="bg-dark-blue-deep placeholder-gray-600 text-white text-xs p-2
          w-full my-1 sm:my-2 sm:text-base xl:text-lg "
          placeholder="Full Name" />
        <input
          type="email"
          id="email"
          name="email"
          class="bg-dark-blue-deep placeholder-gray-600 text-white text-xs p-2
          w-full my-1 sm:my-2 sm:text-base xl:text-lg "
          placeholder="Your Email" />
        <input
          type="subject"
          id="subject"
          name="subject"
          class="bg-dark-blue-deep placeholder-gray-600 text-white text-xs p-2
          w-full my-1 sm:my-2 sm:text-base xl:text-lg "
          placeholder="Subject" />
        <textarea
          type="text"
          id="email"
          name="email"
          class="bg-dark-blue-deep placeholder-gray-600 text-white text-xs p-2
          w-full my-1 sm:my-2 h-24 sm:text-base xl:text-lg"
          placeholder="Your Message" />
        <div class="w-full flex justify-end">

          <button
            class="text-white text-xs bg-dark-blue-deep h-8 w-24 w-1/3
            buttom-shadow sm:text-base xl:text-lg sm:h-10 mt-2 ">
            Submit
          </button>
        </div>
      </form>
    </div>

  </div>
</div>

<script>
  import PageTitle from '../PageTitle.svelte'
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
  .hover-class {
    transition: 0.2s;
    transition-timing-function: ease-in-out;
  }
  .hover-class:hover {
    background-color: #1f223d;
    color: #1f223d;
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

<div class="flex flex-col w-custom">
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
          sm:p-4 w-full my-1 sm:my-2 sm:text-base xl:text-lg sm:py-4 "
          placeholder="Full Name" />
        <input
          type="email"
          id="email"
          name="email"
          class="bg-dark-blue-deep placeholder-gray-600 text-white text-xs p-2
          sm:p-4 w-full my-1 sm:my-2 sm:text-base xl:text-lg sm:py-4 "
          placeholder="Your Email" />
        <input
          type="subject"
          id="subject"
          name="subject"
          class="bg-dark-blue-deep placeholder-gray-600 text-white text-xs p-2
          sm:p-4 w-full my-1 sm:my-2 sm:text-base xl:text-lg sm:py-4 "
          placeholder="Subject" />
        <textarea
          type="text"
          id="message"
          name="email"
          class="bg-dark-blue-deep placeholder-gray-600 text-white text-xs p-2
          sm:p-4 w-full my-1 sm:my-2 h-24 sm:h-32 sm:text-base xl:text-lg
          sm:py-4"
          placeholder="Your Message" />
        <div class="w-full flex justify-end">

          <button
            class=" text-xs bg-dark-blue-deep h-8 sm:h-12 w-1/3 buttom-shadow
            sm:text-base xl:text-xl sm:h-10 mt-2 flex justify-center
            items-center hover-class ">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              class="h-3 w-4 mx-1 sm:h-5 sm:w-4 sm:mx-2 xl:h-4 xl:w-5
              fill-current"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 4L8.8906 9.2604C9.5624 9.7083 10.4376 9.7083 11.1094
                9.2604L19 4H1ZM3 15H17C18.1046 15 19 14.1046 19 13V3C19 1.89543
                18.1046 1 17 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15
                3 15Z"
                stroke="#E0E1EB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>

            <span class="mx-1 text-white">Send</span>
          </button>
        </div>
      </form>
    </div>

  </div>
</div>

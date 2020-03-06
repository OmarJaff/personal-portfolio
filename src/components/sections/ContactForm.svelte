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
      <form
        class="flex flex-col p-6 w-full"
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true">
        <p class="hidden">
          <label>
            Don’t fill this out if you're human:
            <input name="bot-field" />
          </label>
        </p>
        <label for="fullname" class="sr-only">Full Name</label>
        <input
          type="text"
          id="fullname"
          required
          name="name"
          class="bg-dark-blue-deep placeholder-gray-600 text-white text-xs p-2
          sm:p-4 w-full my-1 sm:my-2 sm:text-base xl:text-lg sm:py-4 "
          placeholder="Full Name" />
        <label for="email" class="sr-only">Email</label>
        <input
          type="email"
          id="email"
          required
          name="email"
          class="bg-dark-blue-deep placeholder-gray-600 text-white text-xs p-2
          sm:p-4 w-full my-1 sm:my-2 sm:text-base xl:text-lg sm:py-4 "
          placeholder="Your Email" />
        <label for="subject" class="sr-only">Subject</label>
        <input
          type="subject"
          id="subject"
          name="subject"
          class="bg-dark-blue-deep placeholder-gray-600 text-white text-xs p-2
          sm:p-4 w-full my-1 sm:my-2 sm:text-base xl:text-lg sm:py-4 "
          placeholder="Subject" />
        <label for="message" class="sr-only">Full Name</label>
        <textarea
          type="text"
          id="message"
          name="message"
          required
          class="bg-dark-blue-deep placeholder-gray-600 text-white text-xs p-2
          sm:p-4 w-full my-1 sm:my-2 h-24 sm:h-32 sm:text-base xl:text-lg
          sm:py-4"
          placeholder="Your Message" />

        <div class="w-full flex justify-end">
          <button
            type="submit"
            class=" text-xs bg-dark-blue-deep h-8 sm:h-12 w-1/3 buttom-shadow
            sm:text-base xl:text-xl sm:h-10 mt-2 hover-class text-white ">

            <span class="text-white">Send</span>
          </button>
        </div>
      </form>
    </div>

  </div>
</div>

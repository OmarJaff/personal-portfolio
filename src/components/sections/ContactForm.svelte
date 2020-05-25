<script>
  import PageTitle from "../PageTitle.svelte";
  import SubmitModal from "../submitmodal.svelte";
  import bodymovin from "lottie-web";
  import jump from "jump.js";
  import encoder from "../encoder.js";
  import ClipboardJS from "clipboard";
  import SvelteTooltip from "svelte-tooltip";
  import { onMount } from "svelte";

  onMount(() => {
    const clipboard = new ClipboardJS(".mycopybtn");
    clipboard.on("success", function(e) {
      copyResponse = "Copied!";
      isCopied = true;

      e.clearSelection();
    });
    clipboard.on("error", function(e) {
      copyResponse = "Oops! something is wrong.";
    });
  });

  let successAnimation;
  let errorAnimation;
  let errorLog;
  let isCopied = false;
  let copyResponse = "";

  const successMessage = () => {
    successAnimation = bodymovin.loadAnimation({
      container: document.getElementById("sendIcon"), // Required
      path: "lf30_editor_m1Vm1w.json", // Required
      renderer: "svg", // Required
      loop: false, // Optional
      autoplay: true, // Optional
      name: "success message" // Name for future reference. Optional.
    });
  };

  const errorMessage = () => {
    errorAnimation = bodymovin.loadAnimation({
      container: document.getElementById("sendIcon"),
      path: "errormessage.json",
      renderer: "svg",
      loop: true,
      autoplay: true,
      name: "error massage"
    });
  };

  let formData = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  let violated = { nameField: false, emailField: false, message: false };

  let openModal = false;

  let clearFormData = () => {
    for (const property in formData) {
      formData[property] = "";
    }
  };

  let handleSubmit = () => {
    formData.name.trim().length === 0
      ? (violated.nameField = true)
      : (violated.nameField = false);
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email) &&
    formData.email.length != 0
      ? (violated.emailField = false)
      : (violated.emailField = true);
    formData.message.trim().length === 0
      ? (violated.message = true)
      : (violated.message = false);
    if (
      violated.nameField === false &&
      violated.emailField === false &&
      violated.message === false
    ) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoder(formData)
      })
        .then(() => {
          clearFormData(),
            (openModal = true),
            successMessage(),
            successAnimation.setSpeed(2);
        })
        .catch(error => {
          errorLog = error;
          openModal = true;
          errorMessage();
        });
    }
  };
  const handleCloseModal = () => {
    openModal = false;
    successAnimation ? successAnimation.destroy() : errorAnimation.destroy();
    jump(".target", {
      duration: 1000,
      offset: 0,
      a11y: false
    });
  };
</script>

<style>
  .validationClass {
    border: 0.1px red solid;
  }
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

<SubmitModal
  {openModal}
  {errorLog}
  on:closeModal={() => {
    handleCloseModal();
  }} />

<div class="flex flex-col w-full">
  <div class="flex mb-4 justify-start">
    <PageTitle title="Contact me" />
  </div>
  <div class=" flex justify-center font-mono ">
    <div class="flex flex-col my-8 w-full xl:w-11/12 items-center ">
      <div class="flex py-4">
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
        data-netlify="true"
        netlify-honeypot="bot-field">
        <p class="hidden">
          <label>
            Don’t fill this out if you're human:
            <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="form-name" value="contact" />
        <label for="fullname" class="sr-only">Full Name</label>
        <input
          type="text"
          id="fullname"
          bind:value={formData.name}
          name="name"
          class="{violated.nameField ? ' animated fast shake validationClass' : ' border-none'}
          bg-dark-blue-deep placeholder-gray-600 text-white text-xs py-3 p-2
          sm:p-4 w-full my-2 sm:text-base xl:text-lg sm:py-4 "
          placeholder="Full Name" />
        {#if violated.nameField}
          <span class="text-red-600 text-xs sm:text-sm px-2 pb-3">
            This field is required.
          </span>
        {/if}
        <label for="email" class="sr-only">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          bind:value={formData.email}
          class="{violated.emailField ? ' animated fast shake validationClass' : ' border-none'}
          bg-dark-blue-deep placeholder-gray-600 text-white text-xs py-3 p-2
          sm:p-4 w-full my-2 sm:text-base xl:text-lg sm:py-4 "
          placeholder="Your Email" />
        {#if violated.emailField}
          <span class="text-red-600 text-xs sm:text-sm px-2 pb-3">
            This field is required and must be a valid email address.
          </span>
        {/if}
        <label for="subject" class="sr-only">Subject</label>
        <input
          type="subject"
          id="subject"
          name="subject"
          bind:value={formData.subject}
          class="bg-dark-blue-deep placeholder-gray-600 text-white text-xs py-3
          p-2 sm:p-4 w-full my-2 sm:text-base xl:text-lg sm:py-4"
          placeholder="Subject" />
        <label for="message" class="sr-only">Message</label>
        <textarea
          type="text"
          id="message"
          name="message"
          bind:value={formData.message}
          class="{violated.message ? ' animated fast shake validationClass' : ' border-none'}
          bg-dark-blue-deep placeholder-gray-600 text-white text-xs py-3 p-2
          sm:p-4 w-full my-2 h-24 sm:h-32 sm:text-base xl:text-lg sm:py-4"
          placeholder="Your Message" />
        {#if violated.message}
          <span class="text-red-600 text-xs sm:text-sm px-2 pb-3">
            This field is required.
          </span>
        {/if}
        <div class="w-full flex justify-between flex-row-reverse">

          <button
            type="submit"
            on:click|preventDefault={() => handleSubmit()}
            class=" text-xs bg-dark-blue-deep h-8 sm:h-12 w-1/3 buttom-shadow
            sm:text-base xl:text-xl sm:h-10 mt-2 hover-class text-white ">

            <span class="text-white">Send</span>
          </button>

          <div
            class="flex bg-dark-blue-deep text-xs sm:text-base h-8 sm:h-12 mt-2
            sm:h-10 xl:text-lg text-white relative ">
            <label for="emailaddress" class="sr-only">email addess</label>
            <input
              type="text"
              id="emailaddress"
              name="emailaddress"
              readonly
              value={'me@omarjaff.com'}
              class=" bg-dark-blue-deep py-3 p-2 sm:p-4 w-32 sm:w-48" />
            <span class=" border-l-2 absolute inset-0 border-vived-red w-0" />

            <SvelteTooltip
              tip={copyResponse}
              bottom
              color="#272740"
              active={isCopied} />

            <button
              data-clipboard-target="#emailaddress"
              type="button"
              class="mycopybtn text-white -mt-1 py-3 p-2 sm:p-4 hover-class
              outline-none"
              on:mouseout|preventDefault={() => (isCopied = false)}>
              <span class="text-white">Copy</span>
            </button>

          </div>
        </div>
      </form>
    </div>
  </div>

</div>

<script>
  import PageTitle from "../PageTitle.svelte";
  import SubmitModal from "../submitmodal.svelte";
  import bodymovin from "lottie-web";
  import jump from "jump.js";
  import encoder from "../encoder.js";
  import ClipboardJS from "clipboard";
  import SvelteTooltip from "svelte-tooltip";
  import { onMount } from "svelte";
  import Button from "../utilities/Button.svelte";
  import Saparator2 from "../utilities/Saparator2.svelte";
  import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks
  } from "body-scroll-lock";

  let successAnimation;
  let errorAnimation;
  let errorLog;
  let isCopied = false;
  let copyResponse = "";
  let targetElement;
  let openModal = false;
  let submitButtonDisabled = false;

  let formData = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  let violated = { nameField: false, emailField: false, message: false };

  onMount(() => {
    const targetElement = document.querySelector("#submitModel");

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

  $: openModal
    ? disableBodyScroll(targetElement)
    : enableBodyScroll(targetElement);

  const clearFormData = () => {
    for (const property in formData) {
      formData[property] = "";
    }
  };

  const handleSubmit = () => {
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
      submitButtonDisabled = true;
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
          submitButtonDisabled = false;
        })
        .catch(error => {
          errorLog = error;
          openModal = true;
          submitButtonDisabled = false;
        });
    }
  };

  const successMessage = () => {
    successAnimation = bodymovin.loadAnimation({
      container: document.getElementById("sendIcon"), // Required
      path: "success_animation.json", // Required
      renderer: "svg", // Required
      loop: false, // Optional
      autoplay: true, // Optional
      name: "success message" // Name for future reference. Optional.
    });
  };

  const errorMessage = () => {
    errorAnimation = bodymovin.loadAnimation({
      container: document.getElementById("sendIcon"),
      path: "error_animation.json",
      renderer: "svg",
      loop: false,
      autoplay: true,
      name: "error massage"
    });
  };

  const handleCloseModal = () => {
    openModal = false;
    successAnimation ? successAnimation.destroy() : errorAnimation.destroy();
  };
</script>

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
  <div class="flex">
    <h1 class="text-teal-500 text-sm sm:text-2xl font-col capitalize ">
      Have a question or want to work together?
    </h1>
  </div>
  <div class=" flex justify-center font-roboto sm:p-6">
    <div class="flex flex-col my-8 w-full items-center">

      <form
        class="flex flex-col font-SourceSans space-y-4 w-full lg:w-10/12"
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
          class="{violated.nameField ? ' animated fast shake border-2 border-red-500' : 'border-2 border-gray-400'}
          bg-white placeholder-gray-600 text-gray-800 py-2 p-2 sm:p-3 w-full
          text-sm xl:text-lg sm:py-2 rounded"
          placeholder="Full Name" />
        {#if violated.nameField}
          <span
            class="text-red-600 text-xs sm:text-sm px-2 transform -translate-y-3">
            This field is required.
          </span>
        {/if}
        <label for="email" class="sr-only">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          bind:value={formData.email}
          class="{violated.emailField ? ' animated fast shake border-2 border-red-500' : 'border-2 border-gray-400'}
          bg-white placeholder-gray-600 text-gray-800 text-sm py-2 p-2 sm:p-3
          w-full xl:text-lg sm:py-2 rounded"
          placeholder="Your Email" />

        {#if violated.emailField}
          <span
            class="text-red-600 text-xs sm:text-sm px-2 transform -translate-y-3">
            This field is required and must be a valid email address.
          </span>
        {/if}
        <label for="subject" class="sr-only">Subject</label>
        <input
          type="subject"
          id="subject"
          name="subject"
          bind:value={formData.subject}
          class="border-2 border-gray-400 bg-white placeholder-gray-600
          text-gray-800 py-2 p-2 sm:p-3 w-full text-sm xl:text-lg sm:py-2
          rounded"
          placeholder="Subject" />

        <label for="message" class="sr-only">Message</label>
        <textarea
          type="text"
          id="message"
          name="message"
          bind:value={formData.message}
          class="{violated.message ? ' animated fast shake border-2 border-red-500' : 'border-2 border-gray-400'}
          bg-white placeholder-gray-600 text-gray-800 py-2 p-2 sm:p-3 w-full
          h-24 sm:h-32 text-sm xl:text-lg sm:py-4 rounded"
          placeholder="Your Message" />
        {#if violated.message}
          <span
            class="text-red-600 text-xs sm:text-sm px-2 transform -translate-y-3">
            This field is required.
          </span>
        {/if}
        <div class="w-full flex justify-between flex-row-reverse">

          <Button
            {submitButtonDisabled}
            title="Submit"
            on:click={() => handleSubmit()}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.40399 7.06031L11.9999 11.8583L21.596 7.06025C21.5236
                5.79983 20.4786 4.80005 19.2 4.80005H4.8C3.52142 4.80005 2.47635
                5.79987 2.40399 7.06031Z"
                fill="#718096" />
              <path
                d="M21.6 9.74146L12 14.5415L2.40002 9.74153V16.8C2.40002 18.1255
                3.47454 19.2 4.80002 19.2H19.2C20.5255 19.2 21.6 18.1255 21.6
                16.8V9.74146Z"
                fill="#718096" />
            </svg>

          </Button>

        </div>

      </form>
      <Saparator2
        width="w-full lg:w-10/12"
        fontSize="font-base lg:text-lg"
        title="Want to send me an email instead?" />

      <label for="emailaddress" class="sr-only">email addess</label>

      <div class="relative w-full lg:w-10/12 flex items-center">
        <input
          type="text"
          id="emailaddress"
          name="emailaddress"
          readonly
          value={'me@omarjaff.com'}
          class="text-sm sm:text-base outline-none text-gray-600 w-auto
          border-l-4 border-teal-400 bg-white py-3 p-2 sm:p-3 rounded w-full" />

        <button
          data-clipboard-target="#emailaddress"
          type="button"
          class="text-sm sm:text-base mycopybtn absolute bg-gray-800
          hover:bg-gray-900 text-white outline-none font-roboto rounded py-1
          right-0 mx-4 w-20 sm:w-24 lg:w-32 ">
          <span class="text-white">{isCopied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
    </div>
  </div>

</div>

<script>
  import bodymovin from 'lottie-web'
  import { onMount } from 'svelte'
  import Footer from '../components/sections/Footer.svelte'
  onMount(() => {
    let animation = bodymovin.loadAnimation({
      container: document.getElementById('sendIcon'), // Required
      path: 'lf30_editor_1EwfHg.json', // Required
      renderer: 'svg', // Required
      loop: false, // Optional
      autoplay: true, // Optional
      name: 'Hello World', // Name for future reference. Optional.
    })
  })
</script>


<svelte:head>
  <title>Message Submitted!</title>
</svelte:head>
<div class="flex flex-col h-screen justify-around">
  <div class="flex flex-col w-full items-center ">
    <div
      id="sendIcon"
      class=" h-56 w-56 sm:h-64 sm:w-64 lg:h-auto lg:w-auto my-4" />
    <h1
      class="font-nixieOne text-2xl sm:text-2xl lg:text-4xl text-white
      justify-center text-center animated fadeIn delay-5s slow">
      Thanks, your message sent successfully!
    </h1>
    <a href="." rel="noopener" class="my-6">
      <span
        class="font-nixieOne text-vived-red text-lg sm:text-xl animated fadeIn
        delay-5s slow">
        Back To home
      </span>
    </a>
  </div>

  <div class="flex flex-col justify-end ">
    <Footer />
  </div>
</div>

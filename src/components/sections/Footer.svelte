<script>
  import ScoialIcons from '../../components/SocialIcons.svelte'

  let currentYear = new Date()
</script>

<style>
  .text-color {
    color: #8084b2;
  }

  /* .bg-gradiant {
    background: radial-gradient(
      circle,
      rgba(253, 47, 77, 1) 0%,
      rgba(26, 28, 51, 1) 81%
    );
  }
  .custom-height {
    height: 1.5px;
  }
  @media only screen and (min-width: 640px) {
    .line-shadow {
      box-shadow: 0 32px 32px 0 rgba(0, 0, 0, 0.64);
    }
  } */
</style>

<div class="absolute flex justify-center h-2 flex-wrap w-full ">

  <!-- <span
    class="hidden sm:block bg-vived-red bg-gradiant custom-height w-11/12" /> -->

  <div
    class="flex flex-col h-40 items-center justify-center mb-4 sm:mb-0
    bg-dark-blue-deep w-screen ">

    <ScoialIcons
      IconSize="h-4 sm:h-5 xl:h-8 my-3 "
      IconColor="text-vived-red" />

    <span class=" text-color text-xs sm:text-sm">
      <span>&copy; {currentYear.getFullYear()}</span>
      Developerd and designed by Omar S. Jaff
    </span>
  </div>
</div>

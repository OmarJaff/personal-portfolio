<script>
  import ScoialIcons from '../../components/SocialIcons.svelte'

  let currentYear = new Date()
</script>

<style>
  .text-color {
    color: #8084b2;
  }
  .line-shadow {
    box-shadow: 0 32px 32px 0 rgba(0, 0, 0, 0.64);
  }
  .bg-gradiant {
    background: radial-gradient(
      circle,
      rgba(253, 47, 77, 1) 0%,
      rgba(26, 28, 51, 1) 81%
    );
  }
  .custom-height {
    height: 1.5px;
  }
</style>

<div
  class="line-shadow absolute  flex  justify-center h-2
  flex-wrap w-full ">

  <span class="bg-vived-red  bg-gradiant custom-height w-11/12" />

  <div
    class="flex flex-col relative h-40 w-full items-center justify-center
    sm:justify-around mb-5 sm:mb-0">

    <ScoialIcons
      IconSize="h-4 sm:h-5 xl:h-8 my-5 sm:my-0"
      IconColor="text-vived-red" />

    <span class=" text-color text-xs sm:text-sm">
      <span>&copy; {currentYear.getFullYear()}</span>
      Omar Jaff - All rights reserved.
    </span>
  </div>
</div>

<script>
  import ScoialIcons from "../../components/SocialIcons.svelte";

  let currentYear = new Date();
</script>

<style>
  .text-color {
    color: #8084b2;
  }
</style>

<div class="absolute flex justify-center h-2 flex-wrap w-full ">

  <div
    class="flex flex-col h-40 items-center justify-center bg-dark-blue-deep
    w-screen ">

    <ScoialIcons IconSize="h-4 sm:h-5 xl:h-8 my-3" IconColor="teal-600" />

    <span class=" text-color text-xs sm:text-sm">
      <span>&copy; {currentYear.getFullYear()}</span>
      Developed and designed by Omar S. Jaff
    </span>
  </div>
</div>

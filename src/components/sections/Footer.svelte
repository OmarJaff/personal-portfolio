<script>
  import ScoialIcons from "../../components/SocialIcons.svelte";

  let currentYear = new Date();
</script>

<div class="absolute flex justify-center h-2 flex-wrap w-full ">

  <div
    class="flex flex-col h-40 items-center justify-center bg-gray-800 w-screen ">

    <ScoialIcons IconSize="h-4 sm:h-5 xl:h-8 my-3" IconColor="teal-400" />

    <span class=" text-gray-500 text-xs sm:text-sm capitalize">
      <span>&copy; {currentYear.getFullYear()}</span>
      Developed and designed by Omar S. Jaff
    </span>
  </div>
</div>

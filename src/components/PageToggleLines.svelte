<script>

</script>

<style>
  .line-hight {
    height: 2px;
  }
  .active-class {
    background-color: #fe2f4d;
    width: 2.5rem;
  }
  @media screen and (min-width: 640px) and (max-width: 1023px) {
    .active-class {
      width: 4rem;
    }
  }
  @media screen and (min-width: 1024px) {
    .active-class {
      width: 5.5rem;
    }
  }
</style>

<ul
  class="flex flex-col-reverse sm:flex-col transform sm:transform-none
  -rotate-90 translate-y-16 translate-x-3">
  <li class="bg-white w-5 sm:w-10 xl:w-12 active-class line-hight my-5" />
  <li class="bg-white w-5 sm:w-10 xl:w-12 line-hight my-5" />
  <li class="bg-white w-5 sm:w-10 xl:w-12 line-hight my-5" />
  <li class="bg-white w-5 sm:w-10 xl:w-12 line-hight my-5" />
  <li class="bg-white w-5 sm:w-10 xl:w-12 line-hight my-5" />
</ul>

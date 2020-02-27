<script>
  import PageTitle from '../PageTitle.svelte'
  import ProjectContainer from '../ProjectContailner.svelte'
</script>

<style>
  .w-custom {
    width: 24rem;
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

<svelte:head>
  <title>About Omar</title>
</svelte:head>
<div class="flex flex-col w-custom ">
  <div class="flex relative mb-12 justify-center sm:justify-start">
    <PageTitle title="About Omar" />
  </div>
  <ProjectContainer techIconsPresent="false">
    <img
      slot="containerDesign"
      class="fill-current relative "
      src="web-developer-omar-jaff.jpg"
      alt="a web developer person character with a laptop and other symbols of
      code and programming" />
    <p
      class=" text-text-white-lighter font-thin p-6 xl:ml-12 tex font-mono
      font-thin text-justify text-base sm:text-lg "
      slot="aboutMe">
      Hi ! I am a front-end web developer and user interface (UI) designer. I
      have about two years of experience in web development field and have
      worked on independent projects with other freelancer teams using the most
      efficient and modern web technologies. I love to work in a professional
      and accurate pattern, and always aim to develop fast, beautiful and
      functional user interfaces. You may also have a look at my
      <span class="text-vived-red">CV</span>
      by clicking
      <a href="#home" class="text-vived-red">here</a>

    </p>
  </ProjectContainer>

</div>

<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
  import PageTitle from "../../components/PageTitle.svelte";
  import Header from "../../components/Header.svelte";
</script>

<svelte:head>
  <title>Blog</title>
  <img
    src="Optimized-blogthubnail.png"
    alt="thubnail of the post"
    class="h-auto rounded-lg sr-only" />
</svelte:head>

<div
  class="w-full flex container mx-auto mt-5 lg:mt-10 mb-10 prose-sm md:prose-lg
  lg:prose-xl">

  <div class=" flex flex-col mb-10 w-full mx-10 divide-y-2">

    <div class="w-full flex justify-between items-baseline pb-8">
      <div>
        <PageTitle title="Blog" />
        <span class="text-lg sm:text-xl md:text-2xl text-gray-600">
          My Latest posts
        </span>
      </div>
      <div class="flex">
        <a
          href="/"
          class="font-roboto text-gray-600 hover:text-gray-800 flex space-x-2
          items-center">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            class="-mt-1"
            fill="currenColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.3839 2.86611C12.8957 2.37796 12.1043 2.37796 11.6161
              2.86611L2.86611 11.6161C2.37796 12.1043 2.37796 12.8957 2.86611
              13.3839C3.35428 13.872 4.14572 13.872 4.63389 13.3839L5
              13.0177V21.25C5 21.9404 5.55965 22.5 6.25 22.5H8.75C9.44035 22.5
              10 21.9404 10 21.25V18.75C10 18.0596 10.5596 17.5 11.25
              17.5H13.75C14.4404 17.5 15 18.0596 15 18.75V21.25C15 21.9404
              15.5596 22.5 16.25 22.5H18.75C19.4404 22.5 20 21.9404 20
              21.25V13.0177L20.3661 13.3839C20.8543 13.872 21.6457 13.872
              22.1339 13.3839C22.622 12.8957 22.622 12.1043 22.1339
              11.6161L13.3839 2.86611Z"
              fill="currentColor" />
          </svg>

          <span class="flex">
            <span class="hidden sm:block mr-1">Back to</span>
            Home
          </span>
        </a>
      </div>
    </div>

    <div class="w-full flex font-roboto flex-col">
      <div class="flex flex-col divide-y">

        {#each posts as post}
          <div class="flex flex-col lg:flex-row w-full items-baseline py-10">
            <div class="flex flex-col lg:w-1/4">
              <span class="text-sm sm:text-lg text-gray-600">{post.date}</span>
            </div>
            <div class="flex flex-col lg:w-3/4">
              <a
                rel="external"
                href="blog/{post.slug}"
                class="text-2xl sm:text-3xl text-gray-800">
                {post.title}
              </a>
              <p class="text-base lg:text-lg text-gray-600">
                {post.description}
              </p>
              <div class="flex ">
                <a
                  href="blog/{post.slug}"
                  rel="external"
                  class="text-teal-400 text-base flex items-center
                  hover:text-teal-500">
                  Read more
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class=" w-5 h-5 ml-2"
                    stroke="currentColor">
                    <path
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168
                      5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477
                      4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0
                      3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5
                      18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        {/each}

      </div>

    </div>

  </div>
</div>

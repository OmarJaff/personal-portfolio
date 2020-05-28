<script>
  import PersonalInfo from "./PersonalInfo.svelte";
  import Container from "./Container.svelte";
</script>

<style>
  .list-color li::before {
    content: "\2022";
    color: #718096;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
  .custom-w {
    width: 100%;
  }
  @media (min-width: 640px) {
    .custom-w {
      width: 50rem;
    }
  }
  @media (min-width: 1280px) {
    .custom-w {
      width: 55rem;
    }
  }
</style>

<div class="flex justify-center container mx-auto mt-24 mb-10">

  <div
    class="border-2 border-gray-300 rounded flex flex-col mx-8 sm:grid
    sm:grid-flow-col space-y-4 custom-w">

    <div class="flex bg-gray-300">

      <div class="flex flex-col w-full p-6 sm:p-8 sm:pt-12 sm:space-y-16">

        <div
          class="flex items-center space-x-4 sm:flex-col sm:items-start
          sm:space-y-4 sm:space-x-2">
          <div
            class="flex h-24 w-24 bg-gray-100 p-2 rounded-full border-2
            border-gray-100 sm:h-32 sm:w-32 ">
            <img src="#" class=" object-fill " alt="" />
          </div>
          <div class="flex flex-col text-gray-600">
            <h1 class=" text-xl font-payTon sm:text-2xl font-sans">
              OMAR JAFF
            </h1>
            <span class="font-SourceSans text-sm sm:text-lg">
              Full Stack Developer
            </span>
          </div>
        </div>

        <div class="flex flex-col space-y-2 mt-6 pl-2 ">

          <PersonalInfo text="me@omarjaff.com">
            <svg
              class="w-5 h-5 text-gray-600"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.40405 7.06031L12 11.8583L21.5961 7.06025C21.5236 5.79983
                20.4787 4.80005 19.2001 4.80005H4.80006C3.52148 4.80005 2.47641
                5.79987 2.40405 7.06031Z"
                fill="currentColor" />
              <path
                d="M21.6 9.74146L12 14.5415L2.40002 9.74153V16.8C2.40002 18.1255
                3.47454 19.2 4.80002 19.2H19.2C20.5255 19.2 21.6 18.1255 21.6
                16.8V9.74146Z"
                fill="currentColor" />
            </svg>
          </PersonalInfo>

          <PersonalInfo text="www.omarjaff.com">
            <svg
              class="w-5 h-5 text-gray-600"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.89958 10.7999H7.23438C7.34142 8.94423 7.69476 7.23479
                8.23975 5.85864C6.50105 6.92552 5.25018 8.71008 4.89958
                10.7999ZM12 2.3999C6.69809 2.3999 2.40002 6.69797 2.40002
                11.9999C2.40002 17.3019 6.69809 21.5999 12 21.5999C17.302
                21.5999 21.6 17.3019 21.6 11.9999C21.6 6.69797 17.302 2.3999 12
                2.3999ZM12 4.7999C11.9088 4.7999 11.7215 4.83798 11.4417
                5.11411C11.1567 5.39534 10.845 5.86178 10.5574 6.53291C10.091
                7.62122 9.74992 9.10261 9.63887 10.7999H14.3611C14.2501 9.10261
                13.9091 7.62122 13.4427 6.53291C13.155 5.86178 12.8434 5.39534
                12.5584 5.11411C12.2785 4.83798 12.0912 4.7999 12
                4.7999ZM16.7657 10.7999C16.6587 8.94423 16.3053 7.23479 15.7603
                5.85864C17.499 6.92552 18.7499 8.71008 19.1004
                10.7999H16.7657ZM14.3611 13.1999H9.63887C9.74992 14.8972 10.091
                16.3786 10.5574 17.4669C10.845 18.138 11.1567 18.6045 11.4417
                18.8857C11.7215 19.1619 11.9088 19.1999 12 19.1999C12.0912
                19.1999 12.2785 19.1619 12.5584 18.8857C12.8434 18.6045 13.155
                18.138 13.4427 17.4669C13.9091 16.3786 14.2501 14.8972 14.3611
                13.1999ZM15.7603 18.1411C16.3053 16.765 16.6587 15.0556 16.7657
                13.1999H19.1004C18.7499 15.2897 17.499 17.0743 15.7603
                18.1411ZM8.23975 18.1411C7.69476 16.765 7.34142 15.0556 7.23438
                13.1999H4.89958C5.25018 15.2897 6.50105 17.0743 8.23975 18.1411Z"
                fill="currentColor" />
            </svg>
          </PersonalInfo>

          <PersonalInfo text="(+964) 750 349 1464">
            <svg
              class="w-5 h-4 text-gray-600"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 1.25C0 0.55965 0.55965 0 1.25 0H3.94109C4.55214 0 5.07362
                0.441762 5.17409 1.0445L6.09823 6.58934C6.18844 7.13064 5.91507
                7.66746 5.42425 7.91288L3.48907 8.88046C4.88445 12.3479 7.6521
                15.1155 11.1195 16.5109L12.0871 14.5757C12.3325 14.0849 12.8694
                13.8115 13.4106 13.9017L18.9555 14.8259C19.5583 14.9264 20
                15.4479 20 16.0589V18.75C20 19.4404 19.4404 20 18.75
                20H16.25C7.27538 20 0 12.7246 0 3.75V1.25Z"
                fill="currentColor" />
            </svg>

          </PersonalInfo>

          <PersonalInfo text="Erbil-Iraq">
            <svg
              class="h-4 text-gray-600"
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.63604 2.66905C6.15077 -0.889682 11.8493 -0.889682 15.3639
                2.66905C18.8787 6.22777 18.8787 11.9976 15.3639 15.5563L9.00002
                22L2.63604 15.5563C-0.878681 11.9976 -0.878681 6.22777 2.63604
                2.66905ZM9.00002 11.7163C10.4202 11.7163 11.5715 10.5507 11.5715
                9.1127C11.5715 7.67475 10.4202 6.50907 9.00002 6.50907C7.57985
                6.50907 6.42858 7.67475 6.42858 9.1127C6.42858 10.5507 7.57985
                11.7163 9.00002 11.7163Z"
                fill="currentColor" />
            </svg>

          </PersonalInfo>
        </div>

        <div class="hidden sm:flex flex-col font-roboto px-2 space-y-2">
          <div class="flex items-center space-x-2">
            <svg
              class="w-5 h-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.49992 0C8.32833 0 8.9999 0.671571 8.9999
                1.49998V2.99996H10.0982C10.1159 2.99965 10.1336 2.99965 10.1513
                2.99996H13.4998C14.3283 2.99996 14.9998 3.67153 14.9998
                4.49994C14.9998 5.32835 14.3283 5.99992 13.4998
                5.99992H11.3669C10.8244 8.53111 9.94601 10.9372 8.78096
                13.1692C9.21711 13.7005 9.67434 14.2138 10.1514 14.7081C10.7267
                15.304 10.71 16.2536 10.114 16.829C9.51793 17.4043 8.56834
                17.3876 7.99299 16.7915C7.70933 16.4977 7.43193 16.1978 7.16098
                15.892C5.83335 17.8649 4.26575 19.6624 2.50035 21.2424C1.88307
                21.7949 0.934787 21.7424 0.382299 21.1251C-0.170174 20.5077
                -0.117644 19.5595 0.499643 19.007C2.31925 17.3785 3.90316 15.493
                5.19458 13.4082C4.35989 12.2247 3.61297 10.9746 2.96333
                9.66742C2.59467 8.92556 2.89718 8.0253 3.63904 7.65664C4.3809
                7.28796 5.28118 7.59049 5.64984 8.33235C6.00024 9.03742 6.38234
                9.72405 6.79433 10.3904C7.42041 8.98897 7.9236 7.52094 8.29036
                5.99992H1.49999C0.67157 5.99992 1.39532e-05 5.32835 1.39532e-05
                4.49994C1.39532e-05 3.67153 0.67157 2.99996 1.49999
                2.99996H5.99994V1.49998C5.99994 0.671571 6.67149 0 7.49992
                0ZM16.4998 8.99989C17.068 8.99989 17.5873 9.32088 17.8414
                9.82906L22.3278 18.802C22.3376 18.8204 22.347 18.8392 22.3559
                18.8581L23.8413 21.8289C24.2118 22.5699 23.9115 23.4708 23.1705
                23.8413C22.4295 24.2118 21.5286 23.9115 21.1581 23.1705L20.0727
                20.9997H12.9268L11.8415 23.1705C11.471 23.9115 10.57 24.2118
                9.82908 23.8413C9.08811 23.4708 8.78777 22.5699 9.15825
                21.8289L10.6437 18.8581C10.6527 18.8392 10.662 18.8204 10.6717
                18.802L15.1582 9.82906C15.4123 9.32088 15.9316 8.99989 16.4998
                8.99989ZM14.4268 17.9998H18.5728L16.4998 13.854L14.4268 17.9998Z"
                fill="#718096" />
            </svg>
            <h1 class="text-gray-600 text-lg mt-1">LANGUAGES</h1>
          </div>
          <div class="flex flex-col font-SourceSans text-gray-800 px-8 ">
            <ul class="space-y-3">
              <li>
                Kurdish
                <ul class="flex">
                  -
                  <li class="text-gray-600 text-base px-1">
                    Native Proficiency
                  </li>
                </ul>
              </li>
              <li>
                Arabic
                <ul class="flex">
                  -
                  <li class="text-gray-600 text-base px-1">
                    Full Professional Proficiency
                  </li>
                </ul>

              </li>
              <li>
                English
                <ul class="flex">
                  -
                  <li class="text-gray-600 text-base px-1">
                    Professional Working Proficiency
                  </li>
                </ul>
              </li>
              <li>
                Turkish
                <ul class="flex">
                  -
                  <li class="text-gray-600 text-base px-1">
                    Limited Working Proficiency
                  </li>
                </ul>
              </li>
            </ul>

          </div>

        </div>
      </div>

    </div>

    <div class="flex flex-col p-6 space-y-8 col-span-4 lg:col-span-1">
      <div class="flex sm:hidden">
        <Container title="languages">
          <svg
            class="w-5 h-5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.49992 0C8.32833 0 8.9999 0.671571 8.9999
              1.49998V2.99996H10.0982C10.1159 2.99965 10.1336 2.99965 10.1513
              2.99996H13.4998C14.3283 2.99996 14.9998 3.67153 14.9998
              4.49994C14.9998 5.32835 14.3283 5.99992 13.4998
              5.99992H11.3669C10.8244 8.53111 9.94601 10.9372 8.78096
              13.1692C9.21711 13.7005 9.67434 14.2138 10.1514 14.7081C10.7267
              15.304 10.71 16.2536 10.114 16.829C9.51793 17.4043 8.56834 17.3876
              7.99299 16.7915C7.70933 16.4977 7.43193 16.1978 7.16098
              15.892C5.83335 17.8649 4.26575 19.6624 2.50035 21.2424C1.88307
              21.7949 0.934787 21.7424 0.382299 21.1251C-0.170174 20.5077
              -0.117644 19.5595 0.499643 19.007C2.31925 17.3785 3.90316 15.493
              5.19458 13.4082C4.35989 12.2247 3.61297 10.9746 2.96333
              9.66742C2.59467 8.92556 2.89718 8.0253 3.63904 7.65664C4.3809
              7.28796 5.28118 7.59049 5.64984 8.33235C6.00024 9.03742 6.38234
              9.72405 6.79433 10.3904C7.42041 8.98897 7.9236 7.52094 8.29036
              5.99992H1.49999C0.67157 5.99992 1.39532e-05 5.32835 1.39532e-05
              4.49994C1.39532e-05 3.67153 0.67157 2.99996 1.49999
              2.99996H5.99994V1.49998C5.99994 0.671571 6.67149 0 7.49992
              0ZM16.4998 8.99989C17.068 8.99989 17.5873 9.32088 17.8414
              9.82906L22.3278 18.802C22.3376 18.8204 22.347 18.8392 22.3559
              18.8581L23.8413 21.8289C24.2118 22.5699 23.9115 23.4708 23.1705
              23.8413C22.4295 24.2118 21.5286 23.9115 21.1581 23.1705L20.0727
              20.9997H12.9268L11.8415 23.1705C11.471 23.9115 10.57 24.2118
              9.82908 23.8413C9.08811 23.4708 8.78777 22.5699 9.15825
              21.8289L10.6437 18.8581C10.6527 18.8392 10.662 18.8204 10.6717
              18.802L15.1582 9.82906C15.4123 9.32088 15.9316 8.99989 16.4998
              8.99989ZM14.4268 17.9998H18.5728L16.4998 13.854L14.4268 17.9998Z"
              fill="#718096" />
          </svg>
          <ul
            slot="custom"
            class="font-SourceSans flex flex-col list-disc p-2 text-gray-800
            space-y-2">

            <li class="flex">
              Kurdish
              <span class="text-gray-600 px-1">- Native Proficiency</span>
            </li>

            <li class="flex">
              Arabic
              <span class="text-gray-600 px-1">
                - Full Professional Proficiency
              </span>
            </li>

            <li class="flex">
              English
              <span class="text-gray-600 px-1">
                - Professional Working Proficiency
              </span>
            </li>
            <li class="flex">
              Turkish
              <span class="text-gray-600 px-1">
                - Limited Working Proficiency
              </span>
            </li>
          </ul>
        </Container>
      </div>

      <Container
        title="about me"
        description=" I am a Full stack web developer and user interface (UI)
        designer. I have about two years of experience in web development field
        and I have worked on independent projects with other freelancer teams
        using the most efficient and modern web technologies">
        <svg
          class="h-5 w-5"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.0001 13.9999C12.453 13.9999 10.9693 13.3853 9.87529
            12.2914C8.78133 11.1974 8.16675 9.71368 8.16675 8.16658C8.16675
            6.61949 8.78133 5.13576 9.87529 4.0418C10.9693 2.94783 12.453
            2.33325 14.0001 2.33325C15.5472 2.33325 17.0309 2.94783 18.1249
            4.0418C19.2188 5.13576 19.8334 6.61949 19.8334 8.16658C19.8334
            9.71368 19.2188 11.1974 18.1249 12.2914C17.0309 13.3853 15.5472
            13.9999 14.0001 13.9999Z"
            fill="#718096" />
          <path
            d="M24.5 23.3333V22.1666C24.5 20.6195 23.8854 19.1358 22.7915
            18.0418C21.6975 16.9478 20.2138 16.3333 18.6667
            16.3333H9.33333C7.78624 16.3333 6.30251 16.9478 5.20854
            18.0418C4.11458 19.1358 3.5 20.6195 3.5 22.1666V23.3333C3.5 24.6166
            4.55 25.6666 5.83333 25.6666H22.1667C22.7855 25.6666 23.379 25.4208
            23.8166 24.9832C24.2542 24.5456 24.5 23.9521 24.5 23.3333Z"
            fill="#718096" />
        </svg>
      </Container>
      <Container title="work experience">
        <svg
          class="h-5 w-5"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.40005 8.40005V7.00005C8.40005 4.68046 10.2805 2.80005 12.6
            2.80005H15.4C17.7197 2.80005 19.6 4.68046 19.6
            7.00005V8.40005H22.4C23.9465 8.40005 25.2 9.65365 25.2
            11.2V16.1992C21.7135 17.4926 17.9409 18.1999 14 18.1999C10.0592
            18.1999 6.28657 17.4926 2.80005 16.199V11.2C2.80005 9.65365 4.05365
            8.40005 5.60005 8.40005H8.40005ZM11.2 7.00005C11.2 6.22686 11.8269
            5.60005 12.6 5.60005H15.4C16.1733 5.60005 16.8 6.22686 16.8
            7.00005V8.40005H11.2V7.00005ZM12.6 14C12.6 13.2269 13.2269 12.6 14
            12.6H14.014C14.7873 12.6 15.414 13.2269 15.414 14C15.414 14.7733
            14.7873 15.4 14.014 15.4H14C13.2269 15.4 12.6 14.7733 12.6 14Z"
            fill="#718096" />
          <path
            d="M2.80005 19.1692V22.4C2.80005 23.9464 4.05365 25.2 5.60005
            25.2H22.4C23.9465 25.2 25.2 23.9464 25.2 22.4V19.1692C21.6821
            20.3565 17.915 20.9998 14 20.9998C10.0851 20.9998 6.31795 20.3565
            2.80005 19.1692Z"
            fill="#718096" />
        </svg>

        <ul
          slot="custom"
          class="font-SourceSans flex flex-col list-inside list-disc p-2
          text-gray-800 space-y-6">

          <li class="flex flex-col">
            Full stack web developer - Freelance
            <span class="text-teal-400 text-sm">| July-2018 - Present</span>
          </li>

          <li class="flex flex-col">
            Front-End Web developer at a local company - Erbil
            <span class="text-teal-400 text-sm">| Sep-2019 - Feb-2020</span>
          </li>

          <li class="flex flex-col">
            Web development trainer at Rwanga foundation – Erbil
            <span class="text-teal-400 text-sm">| Feb-2019 - Aprl-2020</span>
          </li>

        </ul>
      </Container>
      <Container title="Skills">
        <svg
          class="h-5 w-5"
          width="28"
          height="21"
          viewBox="0 0 28 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.603 0.0773733C18.4181 0.339338 18.8585 1.18878 18.5869
            1.97466L12.3646 19.974C12.093 20.7598 11.212 21.1846 10.397
            20.9226C9.58197 20.6607 9.1415 19.8111 9.41318 19.0253L15.6354
            1.02603C15.9071 0.240147 16.788 -0.184576 17.603 0.0773733ZM7.32218
            4.93955C7.92966 5.52531 7.92966 6.47502 7.32218 7.06078L3.75544
            10.5L7.32218 13.9392C7.92966 14.5249 7.92966 15.4747 7.32218
            16.0604C6.71469 16.6463 5.72977 16.6463 5.12228 16.0604L0.455608
            11.5606C-0.15187 10.9748 -0.15187 10.0251 0.455608 9.43937L5.12228
            4.93955C5.72977 4.35379 6.71469 4.35379 7.32218 4.93955ZM20.6779
            4.93955C21.2853 4.35379 22.2703 4.35379 22.8777 4.93955L27.5444
            9.43937C28.1519 10.0251 28.1519 10.9748 27.5444 11.5606L22.8777
            16.0604C22.2703 16.6463 21.2853 16.6463 20.6779 16.0604C20.0704
            15.4747 20.0704 14.5249 20.6779 13.9392L24.2446 10.5L20.6779
            7.06078C20.0704 6.47502 20.0704 5.52531 20.6779 4.93955Z"
            fill="#718096" />
        </svg>

        <ul
          slot="custom"
          class="font-SourceSans flex flex-col list-outside p-2 text-gray-800
          space-y-6 list-color">

          <li>
            Front-End Web development:
            <span class="text-gray-600">
              HTML, CSS , Vuejs (vuex, Nuxt.js), Svelte, React, TailwindCSS,
              Bootstrap.
            </span>
          </li>
          <li>
            Back-End Web Development:
            <span class="text-gray-600">PHP, Laravel Framework.</span>
          </li>
          <li>
            Programming Languages:
            <span class="text-gray-600">
              PHP, JavaScript, C++, Visual Basic.
            </span>
          </li>
          <li>
            Desktop Development:
            <span class="text-gray-600">WPF.</span>
          </li>
          <li>
            Mobile Development:
            <span class="text-gray-600">NativeScript.</span>
          </li>
          <li>
            DataBase M. System:
            <span class="text-gray-600">MySQL, SQL server.</span>
          </li>
          <li>
            Web Design:
            <span class="text-gray-600">Adobe XD, Figma.</span>
          </li>
          <li>
            Video Editing and montage:
            <span class="text-gray-600">Adobe Premiere.</span>
          </li>
          <li>
            Visual effects and motion graphics:
            <span class="text-gray-600">Adobe After Effects.</span>
          </li>
        </ul>
      </Container>
      <Container title="Education">
        <svg
          class="h-5 w-5"
          width="25"
          height="18"
          viewBox="0 0 25 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.9375 1.27154C9.28563 0.457024 7.42994 0 5.46875 0C3.50756 0
            1.65187 0.457024 0 1.27154V17.0822C1.65187 16.2678 3.50756 15.8107
            5.46875 15.8107C8.07594 15.8107 10.4967 16.6183 12.5 18C14.5033
            16.6183 16.9241 15.8107 19.5312 15.8107C21.4925 15.8107 23.3481
            16.2678 25 17.0822V1.27154C23.3481 0.457024 21.4925 0 19.5312
            0C17.57 0 15.7144 0.457024 14.0625 1.27154V12.6486C14.0625 13.5218
            13.363 14.2296 12.5 14.2296C11.6371 14.2296 10.9375 13.5218 10.9375
            12.6486V1.27154Z"
            fill="#718096" />
        </svg>
        <ul
          slot="custom"
          class="font-SourceSans flex flex-col list-outside p-2 text-gray-800
          space-y-2">
          <li>
            Salahaddin University-Erbil
            <span class="text-teal-400 text-sm ml-1">| 2014 - 2018</span>

            <ul>
              <li class="text-gray-600 list-none">
                + Bachelor degree in Computer Science
                <span class="text-gray-700">( Average grade: 77.38 )</span>
              </li>
            </ul>
          </li>

        </ul>
      </Container>
    </div>

  </div>

</div>

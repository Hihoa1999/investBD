<style>
  
</style>
<section class="home__menu" id="#home__menu">
    <ul class="menu__links">
      <li class="menu__links-wrapper"  >
        <a href="#index" class="menu__links-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </a>
      </li>
      <li class="menu__links-wrapper"  >
        <a href="#home__investment" class="menu__links-link"
          >Tiềm năng lợi thế</a
        >
      </li>
      <li class="menu__links-wrapper" >
        <a href="/page2/" class="menu__links-link" use:link>Thủ tục đầu tư</a>
      </li>
      <li class="menu__links-wrapper" >
        <a href="#home__news" class="menu__links-link">Thông tin đầu tư</a>
      </li>
      <li class="menu__links-wrapper" >
        <a href="#home__opportunity" class="menu__links-link">Cơ hội đầu tư</a>
      </li>
      <li class="menu__links-wrapper" >
        <a href="#footer" class="menu__links-link">Hỏi đáp</a>
      </li>
      <li class="menu__links-wrappers" on:click={changeStatus}>
        <a href="#index" class="menu__links-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ul>
    <ul class="menu__phone" style="display:{status ? "none" : "block"}">
        <li>Menu</li>
        <li>Menu</li>
        <li>Menu</li>
        <li>Menu</li>
        <li>Menu</li>
    </ul>
  </section>

  <script>
    import {link} from 'svelte-spa-router';
    let status=true;
    const changeStatus =()=>{
        status=!status
        console.log(status);
    }
    
  </script>
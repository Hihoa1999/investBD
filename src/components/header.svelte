<script>
  import {link} from 'svelte-spa-router';
  let linkHome="./";
  import {push, pop, replace} from 'svelte-spa-router'
  const incrementCount =()=>{
    push("/");
  }
</script>

<header class="header" id="header">
  <div class="header__content">
    <div class="header__logo">
      <div class="header__logo-logos">
        <img src="./../images/logo.png" alt="logo" />
        <div class="header__logo-logos-title">
          <a class="title" href="./">INVESTBINHDINH</a><br />
          <a href="./">Đồng hành cùng nhà đầu tư</a>
        </div>
      </div>
    </div>

    <div class="header__search">
      <div class="mt-1 relative rounded-md shadow-sm header__search-content">
        <div class="header__search-content-input">
          <select
          id="language"
          name="language"
          class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
        >
          <option>Việt Nam</option>
          <option>English</option>
        </select>
          <input
            type="text"
            name="price"
            id="price"
            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Search"
          />
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</header>

<style>
</style>

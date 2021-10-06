<script>
  let src = "./images/back.png";
  import Menu from "./menu.svelte";
  import Background from "./background.svelte";
  import Introduce from "./introduce.svelte";
  import Opportunity from "./opportunity.svelte";
  import News from "./news.svelte";
  import Investment from "./investment.svelte";
  import Utilities from "./utilities.svelte";
</script>
<a class="scroll" href="#header"
    ><svg
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
        d="M5 15l7-7 7 7"
      />
    </svg></a
  >
<div class="home">
  <Menu />
  <Background />
  <Introduce />
  <Opportunity />
  <News />
  <Investment />
  <Utilities />
</div>

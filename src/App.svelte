<main>
  <Header />
    <Router {routes}/>
  <Footer />
</main>
<script>
  import Router from 'svelte-spa-router'
  import Header from "./components/header.svelte";
  import Footer from "./components/footer.svelte";
  import routes from "./../routes";
</script>


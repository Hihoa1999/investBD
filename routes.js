import Home from "./src/pages/main/index.svelte";
import PageOne from "./src/pages/page1/pageOne.svelte";
import NotFound from "./src/components/notFound.svelte";
import { wrap } from 'svelte-spa-router/wrap';
export default {
    "/": Home,
    "/page2/*": PageOne,
    "*": NotFound
}
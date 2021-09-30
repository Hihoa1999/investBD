import App from './App.svelte';
import "smelte/src/tailwind.css";
import './scss/main.scss';
const app = new App({
    target: document.body,
    props: {
        name: 'world'
    }
});

export default app;
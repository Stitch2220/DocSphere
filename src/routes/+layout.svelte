<script>
    import "../app.css";
    import Logo from "./logo.svelte";
</script>

<div class="fixed w-screen gradient-bg h-screen">

    
    <div class="gradients-container">
        <div class="g1"></div>
        <div class="g2"></div>
        <div class="g3"></div>
    </div>

    <a  href="/"
        class="fixed left-5 top-5 mt-0">
        <Logo/>
    </a>
    <slot/>
</div>

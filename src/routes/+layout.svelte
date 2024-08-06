<script>
    import "../app.css";
    import Logo from "./logo.svelte";
</script>

<div class="relative mx-auto w-full min-h-screen gradient-bg">
    <div class="gradients-container absolute inset-0">
        <div class="g1"></div>
        <div class="g2"></div>
        <div class="g3"></div>
    </div>

    <a href="/" class="fixed left-5 top-5 mt-0 z-20">
        <Logo />
    </a>

    <div class="relative z-10">
        <slot />
    </div>
</div>

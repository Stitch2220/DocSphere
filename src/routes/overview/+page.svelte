<script>
    import { ChatbubblesOutline } from 'svelte-ionicons';
    import { HelpBuoyOutline } from 'svelte-ionicons';
    import { PersonOutline } from 'svelte-ionicons';
    import { page } from '$app/stores';

    // Reactive declaration to get the current path
    $: currentPath = $page.url.pathname;

    // Function to check if a link is active
    const isActive = (path) => currentPath === path;

</script>

<style lang="postcss">

</style>
<div class="relative w-full top-0 flex items-center justify-center bg-primary-400">

    <nav class="absolute mx-auto top-7 w-3/6  py-2 flex justify-evenly items-center bg-greys-50 rounded-full text-lg font-bold font-inter
     backdrop-filter backdrop-blur-3xl drop-shadow-lg bg-opacity-60 transition duration-500 delay-150 ease-in-out z-10">
        <a href="/overview" class="rounded-full hover:bg-secondary-600 hover:text-warning-100 transition ease-in-out duration-300 px-4 py-2 hover:scale-125 hover:bg-opacity-45 {isActive('/overview') ? 'bg-secondary-600 text-warning-100 scale-125 bg-opacity-45' : ''}"> Overview</a>
        <a href="#" class="rounded-full hover:bg-secondary-600 hover:text-warning-100 transition ease-in-out duration-300 px-4 py-2 hover:scale-125 hover:bg-opacity-45"> Features</a>
        <a href="#" class="rounded-full hover:bg-secondary-600 hover:text-warning-100 transition ease-in-out duration-300 px-4 py-2 hover:scale-125 hover:bg-opacity-45"> Pricing</a>
        <a href="#" class="rounded-full hover:bg-secondary-600 hover:text-warning-100 transition ease-in-out duration-300 px-4 py-2 hover:scale-125 hover:bg-opacity-45"> Contact</a>
        <a href="#" class="rounded-full hover:bg-secondary-600 hover:text-warning-100 transition ease-in-out duration-300 px-4 py-2 hover:scale-125 hover:bg-opacity-45"> Search</a>
    </nav>

    <div class="flex justify-evenly items-center w-auto gap-2.5 h-14 absolute right-7 top-7 z-10">

        <span class="w-10 h-10 bg-greys-50 inline-flex items-center mr-2 justify-center rounded-full drop-shadow-lg relative bg-opacity-60 hover:bg-primary-700 hover:text-warning-100 transition ease-in-out duration-500">
            <ChatbubblesOutline class="text-lg select-none"/>
            <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-error-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-error-400"></span>
            </span>
        </span>

        <div class="w-10 h-10 bg-greys-50 flex items-center mr-2 justify-center rounded-full drop-shadow-lg relative bg-opacity-60 hover:bg-primary-700 hover:text-warning-100 transition ease-in-out duration-500">
            <HelpBuoyOutline class="text-lg select-none"/>
        </div>

        <div class="w-14 h-14 bg-greys-50 flex items-center justify-center rounded-full drop-shadow-lg relative bg-opacity-60 hover:bg-primary-700 hover:text-warning-100 transition ease-in-out duration-500">
            <PersonOutline class="text-lg select-none"/>
        </div>
    </div>
</div>

<div class="relative w-full h-screen flex items-center justify-center mt-10">

    <div class="relative container mx-auto w-1/6 h-5/6 flex flex-col">
        <div class="relative mx-auto w-5/6 h-3/6 rounded-3xl bg-greys-50 backdrop-filter backdrop-blur-3xl drop-shadow-lg bg-opacity-60 mb-2.5 flex justify-center items-center">
            1
        </div>

        <div class="relative mx-auto w-5/6 h-3/6 rounded-3xl bg-greys-50 backdrop-filter backdrop-blur-3xl drop-shadow-lg bg-opacity-60 flex justify-center items-center">
            2
        </div>
    </div>


    <div class="relative mx-auto w-4/6 h-5/6 rounded-3xl bg-greys-50 backdrop-filter backdrop-blur-3xl drop-shadow-lg bg-opacity-60 flex justify-center items-center">
        DASHBOARD
    </div>

    <div class="relative container mx-auto w-1/6 h-5/6 flex flex-col">
        <div class="relative mx-auto w-5/6 h-3/6 rounded-3xl bg-greys-50 backdrop-filter backdrop-blur-3xl drop-shadow-lg bg-opacity-60 mb-2.5 flex justify-center items-center">
            3
        </div>

        <div class="relative mx-auto w-5/6 h-3/6 rounded-3xl bg-greys-50 backdrop-filter backdrop-blur-3xl drop-shadow-lg bg-opacity-60 flex justify-center items-center">
            4
        </div>
    </div>
</div>





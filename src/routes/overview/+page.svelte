<script>
    import { ChatbubblesOutline } from 'svelte-ionicons';
    import { HelpBuoyOutline } from 'svelte-ionicons';
    import { PersonOutline } from 'svelte-ionicons';

</script>

<style lang="postcss">

</style>
<header class="relative w-full top-0 flex items-center justify-center bg-primary-400">

    <nav class="absolute mx-auto top-7 w-2/4 flex justify-evenly items-center bg-greys-50 rounded-full text-lg font-bold font-inter
     backdrop-filter backdrop-blur-3xl drop-shadow-lg hover:-translate-y-1 bg-opacity-60 transition duration-500 delay-150 ease-in-out z-10">
        <a href="#" class="rounded-full hover:bg-primary-700 hover:text-warning-100 transition ease-in-out duration-300 px-4 py-4 hover:bg-opacity-45"> Overview</a>
        <a href="#" class="rounded-full hover:bg-primary-700 hover:text-warning-100 transition ease-in-out duration-300 px-4 py-2 "> Features</a>
        <a href="#" class="rounded-full hover:bg-primary-700 hover:text-warning-100 transition ease-in-out duration-300 px-4 py-2 "> Pricing</a>
        <a href="#" class="rounded-full hover:bg-primary-700 hover:text-warning-100 transition ease-in-out duration-300 px-4 py-2 "> Contact</a>
        <a href="#" class="rounded-full hover:bg-primary-700 hover:text-warning-100 transition ease-in-out duration-300 px-4 py-2 "> Search</a>
    </nav>

    <div class="flex justify-evenly items-center w-1/6 h-14 absolute top-7 right-0 z-10">

        <div class="w-10 h-10 bg-greys-50 flex items-center justify-center rounded-full drop-shadow-lg relative bg-opacity-60 hover:bg-primary-700 hover:text-warning-100 transition ease-in-out duration-500">
            <ChatbubblesOutline class="text-lg select-none "/>
            <span class="absolute h-3 w-3 rounded-full bg-red-500 top-0 right-0 transform translate-x-1/4 -translate-y-1/4"></span>
        </div>


        <div class="w-10 h-10 bg-greys-50 flex items-center justify-center rounded-full drop-shadow-lg relative bg-opacity-60 hover:bg-primary-700 hover:text-warning-100 transition ease-in-out duration-500">
            <HelpBuoyOutline class="text-lg select-none"/>
        </div>

        <div class="w-14 h-14 bg-greys-50 flex items-center justify-center rounded-full drop-shadow-lg relative bg-opacity-60 hover:bg-primary-700 hover:text-warning-100 transition ease-in-out duration-500">
            <PersonOutline class="text-lg select-none"/>
        </div>
    </div>
</header>

<body class="relative w-full h-screen flex items-center justify-center mt-10">

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
</body>





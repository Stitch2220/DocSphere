<script>

import AnimatedIcon from "./animatedsvg.svelte";
</script>

<style lang="postcss">

</style>

<div class="relative w-full h-screen flex items-center justify-center">
    <div class="absolute w-2/6 h-4/6 bg-greys-200 rounded-3xl drop-shadow-md flex flex-col items-center justify-center">
        <div class="mb-2">
            <AnimatedIcon width="203px" height="203px"/>
        </div>

        <h1 class="text-4xl select-none mb-10 font-gantari font-bold">Sign In</h1>

        <form novalidate class="group gap-1 flex flex-col">
            <div class="w-80 max-w-xs">
                <input type="email"
                       placeholder="Email"
                       class="input input-bordered input-md w-full bg-greys-300 text-lg invalid:[&:not(:placeholder-shown):not(:focus)]:border-error-500 peer" />

                <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                    Please enter a valid email address
                </span>
            </div>

            <div class="w-80 max-w-xs mt-2">
                <input type="password"
                       placeholder="Password"
                       class="input input-bordered input-md w-full bg-greys-300 text-lg peer" />
                <span class="mt-2 hidden text-sm text-red-50">
                Wrong password
                </span>
            </div>

            <div class="form-control justify-start flex flex-row">
                <label class="label cursor-pointer">
                    <input type="checkbox" class="checkbox checkbox-primary" />
                    <span class="label-text ml-2 font-regular">Remember me</span>

                </label>
            </div>

            <a type="submit"
               href="/overview"
               class=" btn btn-primary btn-wide hover:bg-primary-400 mt-2 group-invalid:pointer-events-none group-invalid:opacity-30 mx-auto text-lg font-regular">
                Sign In
            </a>
        </form>
    </div>
</div>

<script>
    import anime from "animejs";
    import AnimatedIcon from './animatedsvg.svelte';
    import Logo from './logo.svelte';
    // import {initDb} from "$lib/surreal.js";

    import { Surreal } from "surrealdb.js";

    //let db;

    export async function initDb() {
        const db = new Surreal();
        try {
            await db.connect("http://localhost:8000",{
                namespace: 'AutoDoc',
                database: 'user',
            });
            console.log("Connected to SurrealDB");
            await db.close();
            return db;
        } catch (err) {
            console.error("Failed to connect to SurrealDB:", err);
            alert("Failed to connect to SurrealDB");
            throw err;
        }
    }

    /*export async function closeDb() {
        if (!db) return;
        await db.close();
        db = undefined;
    }*/


   /* export async function main() {
        try {
            await initDb();
            await closeDb();

        } catch (err) {
            console.error("Failed to connect to SurrealDB:", err);
            alert("Failed to connect to SurrealDB");
            throw err;
        }
    }*/

    // Animation function using anime.js
</script>

<style lang="postcss">
</style>


<div class="w-full gradient-bg h-full">

    <div class="gradients-container">
        <div class="g1"></div>
        <div class="g2"></div>
        <div class="g3"></div>
    </div>

    <div class="fixed left-5 top-5 mt-0">
        <Logo/>
    </div>



    <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/6 h-4/6 bg-greys-200 rounded-3xl drop-shadow-md flex flex-col items-center justify-center ">
        <div class="relative justify-center">
            <AnimatedIcon/>
        </div>
        <h1 class=" flex text-4xl font-bold select-none justify-center mb-10">Sign In</h1>
        <form novalidate class="group flex flex-col gap-1 align-middle justify-center">
            <div class="w-80 max-w-xs">
                <input
                        required
                        type="email"
                        placeholder="Email"
                        class="input input-bordered input-md w-full bg-greys-300 text-lg invalid:[&:not(:placeholder-shown):not(:focus)]:border-error-500 peer" />
                <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                    Please enter a valid email address
                </span>
            </div>
            <div class="w-80 max-w-xs mt-2">
                <input
                        required
                        type="password"
                        placeholder="Password"
                        class="input input-bordered input-md w-full bg-greys-300 text-lg peer" />
                <span class="mt-2 hidden text-sm text-red-50">
                Wrong password
                </span>
            </div>
            <div class="justify-start flex flex-row form-control">
                <label class="label cursor-pointer">
                    <input type="checkbox" class="checkbox checkbox-secondary form-control"/>
                    <span class="label-text ml-2">Remember me</span>
                </label>
            </div>
            <button type="submit"
                    class=" flex self-center btn btn-primary btn-wide hover:bg-primary-400 mt-2 group-invalid:pointer-events-none group-invalid:opacity-30"
                    >
                Sign In</button>

        </form>


        <p class="relative text-sm font-normal text-left mt-4">
            <span class="text-left text-black select-none">Need an account? </span>
            <a href="#" class="select-none text-left hover:underline text-secondary-400}">Sign up here</a>
        </p>

    </div>
</div>



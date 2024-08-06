
<style>
    .icon {
        margin: auto;
        display: block;
    }
</style>

<script>
    import anime from 'animejs';
    import { onMount } from 'svelte';
    let body,
        leftEye,
        rightEye;
    export let width = 203;
    export let height = 203;

    onMount(setup);

    function setup() {
        anime.timeline({
            easing: 'easeInSine',
            autoplay: true,
            duration: 1000,
        }).add({
            targets: body,
            d: [
                { value : "M176.506 85.8984C174.783 76.1246 164.885 69.7003 154.398 71.5494C143.911 73.3984 136.807 82.8206 138.531 92.5945C140.254 102.368 146.483 83.4674 156.969 81.6184C167.456 79.7693 178.229 95.6722 176.506 85.8984Z"}
            ],
            easing: 'easeInSine',
            duration: 5,
        });
    }
</script>

<div class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 203 181" fill="none" filter="url(#dropShadow)">
        <defs>
            <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="black" flood-opacity="0.5"/>
            </filter>
        </defs>
        <circle bind:this={body} cx="101.062" cy="67.0625" r="59.0625" fill="url(#paint0_diamond_59_76)"/>
        <ellipse bind:this={leftEye} cx="78.3498" cy="57.8113" rx="11.3876" ry="17.5063" transform="rotate(10 78.3498 57.8113)" fill="white"/>
        <ellipse bind:this={rightEye} cx="11.3876" cy="17.5063" rx="11.3876" ry="17.5063" transform="matrix(0.984808 -0.173648 -0.173648 -0.984808 115.726 77.0291)" fill="white"/>
        <g filter="url(#filter0_f_59_76)">
            <path d="M117.232 91.8526C105.3 100.927 93.6956 97.5044 85.499 91.7024C82.0406 89.2544 84.1186 84.4839 88.3558 84.4839H114.19C118.399 84.4839 120.583 89.3048 117.232 91.8526Z" fill="white" fill-opacity="0.2"/>
        </g>
        <defs>
            <filter id="filter0_f_59_76" x="0.257507" y="0.983887" width="202.111" height="179.951" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="41.75" result="effect1_foregroundBlur_59_76"/>
            </filter>
            <radialGradient id="paint0_diamond_59_76" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.8314 14.2037) rotate(2.02892) scale(242.436)">
                <stop stop-color="#EDE0D4"/>
                <stop offset="0.37413" stop-color="#DDB892"/>
                <stop offset="0.8" stop-color="#4895EF"/>
            </radialGradient>
        </defs>
    </svg>

</div>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="sidebar">
	<a href="#twitter"><i class="fa fa-fw fa-twitter"></i></a>
	<a href="#facebook"><i class="fa fa-fw fa-facebook"></i></a>
	<a href="#instagram"><i class="fa fa-fw fa-instagram"></i></a>
	<a href="#discord"><i class="fa fa-fw fa-home"></i></a>
</div>

<div class="splash-page">
	<h1 class="heading1">IIITDM KANCHEEPURAM</h1>
	<h1 class="heading2">CULTKANCHI</h1>
	<p>We are a team of interdisciplinary (and jobless) engineering students from IIITDM Kancheepuram.</p>
	<p>We aim to provide a platform for our students to express their talents in fine arts.</p>
</div>

<style>
    :global(body) {
        background-image: url('/announcements-media/PXL_20210502_155917986 1.png');
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        scrollbar-width: none;
    }

    .heading1 {
        font-family: Lato;
        font-style: normal;
        font-size: 60px;
        font-weight: normal;
        letter-spacing: -0.02em;
        color: white;
    }

    .heading2 {
        font-family: Lato;
        font-style: normal;
        font-weight: 600;
        font-size: 70px;
        letter-spacing: 0.04em;
        color: red;
    }

    .splash-page {
        padding-top: 5%;
        text-align: center;
    }

    .splash-page p {
        font-size: 30px;
        padding: 0px 150px;
        color: white;
    }

    .sidebar {
        padding-top: 10%;
        height: 100%;
        width: 12%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        overflow-x: hidden;
        text-align: center;
    }

    .sidebar a {
        padding: 10px;
        text-decoration: none;
        font-size: 30px;
        display: block;
        color: red;
    }

    @media screen and (max-width: 650px) {

        .heading1 {
            font-size: 30px;
            letter-spacing: -0.02em;
        }

        .heading2 {
            font-size: 40px;
            letter-spacing: 0.04em;
        }

        .sidebar {
            width: 100%;
            margin-top: 500px;
            float: bottom;
            overflow: hidden;
            text-align: center;
        }
        
        .sidebar a {
            
            font-size: 30px;
            display: inline;
        }
        
        .splash-page {
            margin-left: 0px;
            padding: 0px 10px;
        }

        .splash-page p {
            font-size: 20px;
            padding: 10px 50px;
            line-height: 24px;
        }
    }

</style>

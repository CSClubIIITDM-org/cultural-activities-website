<script>
	import { fadeIn, fadeOut } from '$lib/transitions/fade';
	import { mdiDiscord, mdiFacebook, mdiInstagram, mdiTwitter } from '@mdi/js';
	import Icon from '../lib/AppIcon.svelte';
</script>

<!--  -->
<div in:fadeIn out:fadeOut>
	<div class="bg-image" />

	<div class="sidebar">
		<a href="#twitter"> <Icon path={mdiTwitter} /> </a>
		<a href="#facebook"> <Icon path={mdiFacebook} /> </a>
		<a href="#instagram"> <Icon path={mdiInstagram} /> </a>
		<a href="#discord"> <Icon path={mdiDiscord} /> </a>
	</div>

	<div class="splash-page">
		<h1 class="heading1">IIITDM KANCHEEPURAM</h1>
		<h1 class="heading2">CULTKANCHI</h1>
		<br />
		<br />
		<p>
			We are a team of interdisciplinary (and jobless) engineering students from IIITDM
			Kancheepuram.
		</p>
		<p>We aim to provide a platform for our students to express their talents in fine arts.</p>
	</div>
</div>

<style>
	.bg-image {
		height: 100%;
		width: 100%;

		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;

		background-image: url('/cover-image.webp');

		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.heading1 {
		font-style: normal;
		font-size: 60px;
		font-weight: normal;
		letter-spacing: -0.02em;
		color: var(--app-color-dark);
	}

	.heading2 {
		font-style: normal;
		font-weight: 600;
		font-size: 70px;
		letter-spacing: 0.04em;
		color: var(--app-color-primary);
	}

	.splash-page {
		padding-top: 5%;
		text-align: center;
	}

	.splash-page p {
		font-size: 30px;
		padding: 0px 150px;
		color: var(--app-color-dark);
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

		display: flex;
		flex-direction: column;
	}

	.sidebar a {
		padding: 10px;
		margin: 1rem;

		text-decoration: none;

		width: 60px;
		height: 60px;

		border-radius: 50%;

		display: grid;
		place-items: center;

		fill: var(--app-color-light);

		background-color: var(--app-color-primary);
	}

	.sidebar a :global(svg) {
		width: 40px;
		height: auto;
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
			height: auto;
			/* margin-top: 500px; */
			float: bottom;
			overflow: hidden;
			text-align: center;

			flex-direction: row;

			bottom: 1vh !important;
			top: auto;
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

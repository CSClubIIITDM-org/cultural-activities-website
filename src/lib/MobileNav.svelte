<script>
	import { fadeIn, fadeOut } from '$lib/transitions/fade';
	import { mdiClose } from '@mdi/js';
	import { createEventDispatcher } from 'svelte';
	import AppIcon from './AppIcon.svelte';

	/** @type {string} */
	export let current;

	/** @param {string} path */
	const isCurrent = (path) => path === current;

	const dispatch = createEventDispatcher();

	$: current && dispatch('close');
</script>

<nav in:fadeIn out:fadeOut>
	<div class="close-button-container">
		<button on:click={() => dispatch('close')}>
			<AppIcon path={mdiClose} fill="var(--app-color-dark)" size={40} />
		</button>
	</div>
	<div class="links-container">
		<a href="/" aria-current={isCurrent('/')}>HOME</a>
		<a href="/active-events" aria-current={isCurrent('/active-events')}>ANNOUNCEMENTS</a>
		<a href="/archives" aria-current={isCurrent('/archives')}>PAST EVENTS</a>
		<a href="/calendar" aria-current={isCurrent('/calendar')}>CALENDAR</a>
		<a href="/clubs" aria-current={isCurrent('/clubs')}>CLUBS</a>
		<a href="/past-cores" aria-current={isCurrent('/past-cores')}>PAST CORES</a>
	</div>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;

		height: 100vh;
		width: 100%;

		backdrop-filter: blur(40px);

		display: grid;
		grid-template-rows: auto 1fr;
		justify-content: center;
		align-items: center;
	}

	.close-button-container {
		display: flex;
		justify-content: flex-end;

		padding: 1rem 1rem 0 0;
	}

	.close-button-container button {
		--size: 3rem;

		height: var(--size);
		width: var(--size);

		border-radius: 50%;
	}

	.close-button-container button:focus {
		background-color: rgba(var(--app-color-dark-rgb), 0.2);
	}

	.links-container {
		display: grid;
		grid-template-rows: repeat(6, 1fr);
		justify-content: center;
		align-items: center;

		height: 100%;
		width: 100vw;
	}

	a {
		text-align: center;

		font-size: 1.618rem;
	}
</style>

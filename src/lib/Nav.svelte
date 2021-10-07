<script>
	import { page } from '$app/stores';
	import { mdiMenu } from '@mdi/js';
	import AppIcon from './AppIcon.svelte';
	import MobileNav from './MobileNav.svelte';

	let isMobileNavOpen = false;
</script>

<header>
	<!-- <img src="../../static/" /> -->
	<div class="logo-alt" />
	<span />
	<nav>
		<a href="/" aria-current={$page.path === '/' ? 'page' : 'false'}>HOME</a>
		<a href="/active-events" aria-current={$page.path === '/active-events' ? 'page' : 'false'}>
			ANNOUNCEMENTS
		</a>
		<a href="/archives" aria-current={$page.path === '/archives' ? 'page' : 'false'}>PAST EVENTS</a>
		<a href="/calendar" aria-current={$page.path === '/calendar' ? 'page' : 'false'}>CALENDAR</a>
		<a href="/clubs" aria-current={$page.path === '/clubs' ? 'page' : 'false'}>CLUBS</a>
		<a href="/past-cores" aria-current={$page.path === '/past-cores' ? 'page' : 'false'}>
			PAST CORES
		</a>
	</nav>
	<div class="buttons">
		<button class="open-menu" on:click={() => (isMobileNavOpen = true)}>
			<AppIcon path={mdiMenu} fill="var(--app-color-dark)" />
		</button>
	</div>
</header>

{#if isMobileNavOpen}
	<MobileNav on:close={() => (isMobileNavOpen = false)} current={$page.path} />
{/if}

<style>
	header {
		width: 100vw;

		position: absolute;
		top: 0;
		left: 0;

		padding: 1rem;
		margin-bottom: 1rem;

		display: grid;
		grid-template-columns: auto 1fr auto auto;
		align-items: center;
	}

	nav {
		width: max-content;
	}

	nav {
		display: flex;
		gap: 1.5rem;
	}

	nav a {
		letter-spacing: 0.8px;
	}

	nav a[aria-current='page'] {
		color: var(--app-color-dark);
	}

	.logo-alt {
		--size: 60px;

		height: var(--size);
		width: var(--size);

		background: var(--app-color-primary);

		border-radius: 50%;
	}

	.buttons {
		padding: 0 1rem;
	}

	.open-menu {
		--size: 3rem;

		display: none;

		height: var(--size);
		width: var(--size);

		border-radius: 50%;

		/* display: grid; */
		place-items: center;
	}

	.open-menu:focus {
		background-color: rgba(var(--app-color-dark-rgb), 0.2);
	}

	@media screen and (max-width: 900px) {
		.open-menu {
			display: grid;
		}

		nav > a {
			display: none;
		}
	}
</style>

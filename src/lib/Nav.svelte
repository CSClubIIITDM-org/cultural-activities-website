<script>
	import { page } from '$app/stores';

	/**
	 * @param {string} path
	 */
	function isCurrent(path) {
		console.log(path);
		return $page.path === path ? 'page' : 'false';
	}

	// $: console.log($page.path);
</script>

<header>
	<!-- <img src="../../static/" /> -->
	<div class="logo-alt" />
	<span />
	<nav>
		<a href="/" aria-current={isCurrent('/')}>HOME</a>
		<a href="/active-events" aria-current={isCurrent('/active-events')}>ANNOUNCEMENTS</a>
		<a href="/">PAST EVENTS</a>
		<a href="/">CALENDAR</a>
		<a href="/clubs">CLUBS</a>
		<a href="/past-cores" aria-current={isCurrent('/past-cores')}>PAST CORES</a>
	</nav>
	<div />
</header>

<style>
	header {
		width: 100%;

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
</style>

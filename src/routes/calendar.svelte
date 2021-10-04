<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ fetch }) => {
		const res = await fetch('/data/calendar.json');
		const events = await res.json();

		return {
			props: {
				events,
			},
		};
	};
</script>

<script>
	/** @type {import('scripts/types').Event} */
	export let events;
</script>

<svelte:head>
	<title>Calendar - Cultural Activities</title>
</svelte:head>

<pre>{JSON.stringify(events, null, 4)}</pre>

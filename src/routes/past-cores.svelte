<script>
	const clubs = [
		{
			clubName: 'Club Name',
			yearActive: '20-21',
			coName1: 'Name1',
			coName2: 'Name2',
		},
		{
			clubName: 'Club Name',
			yearActive: '20-21',
			coName1: 'Name1',
			coName2: 'Name2',
		},
		{
			clubName: 'Club Name',
			yearActive: '20-21',
			coName1: 'Name1',
			coName2: 'Name2',
		},
		{
			clubName: 'Club Name',
			yearActive: '20-21',
			coName1: 'Name1',
			coName2: 'Name2',
		},
	];
</script>

<main>
	<h1>Past cores</h1>

	<div class="container">
		{#each clubs as club}
			<div class="clubCard">
				<h2 class="clubName">{club.clubName}</h2>
				<p class="yearACtive">{club.yearActive}</p>
				<h2>Coordinators</h2>
				<h2>{club.coName1}</h2>
				<h2>{club.coName2}</h2>
			</div>
		{/each}
	</div>
</main>

<style>
	main {
		padding: 25px;

		background-color: var(--app-color-dark);
	}

	h1 {
		text-align: center;

		color: var(--app-color-light);
	}
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
	h2 {
		font-size: 1.618rem;
	}
	.clubName {
		margin-bottom: 0px;
	}

	/* .yearActive {
		margin-top: 0px;
	} */

	.clubCard {
		padding: 10px;
		background-color: var(--app-color-shell);
		text-align: center;
		color: var(--app-color-dark);
		margin: 5px;
		border-radius: 10%;

		shape-outside: margin-box;
	}
	@media only screen and (max-width: 1110px) {
		.container {
			display: block;
		}
		.clubCard {
			margin-bottom: 20px;
		}
	}
</style>

<script>
	import Icon from '$lib/AppIcon.svelte';
	import { mdiFacebook, mdiInstagram, mdiTwitter } from '@mdi/js';
</script>

<div class="container">
	<div class="title">
		<h1>Meet The Team</h1>
	</div>
	<div class="container card-container">
		<div class="logo-container" />
		<div class="content-holder">
			<div class="card-title">
				<h2>Club Name</h2>
			</div>
			<div class="card-content">
				<p class="content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus quos quia magnam
					neque! Veritatis velit quia sequi. Aspernatur ipsam asperiores tempore fugiat eveniet
					itaque, possimus est consequatur aliquam iusto!
				</p>
			</div>
			<div class="team-container">
				<div class="cores">
					<p>Co-ordinators</p>
					<p>Name1</p>
				</div>
				<div class="joint-cores">
					<p>Joint Co-ordinators</p>
					<div class="joint-cores-list">
						<p>Name 1</p>
						<p>Name 2</p>
						<p>Name 3</p>
					</div>
				</div>
			</div>
			<div class="sidebar">
				<a href="#twitter"><Icon path={mdiTwitter} /></a>
				<a href="#facebook"><Icon path={mdiFacebook} /></a>
				<a href="#instagram"><Icon path={mdiInstagram} /></a>
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2rem;
		background-color: var(--app-color-light);
	}
	.title {
		display: flex;
		margin-right: auto;
		margin-left: auto;
	}
	.title h1 {
		font-size: 4rem;
	}
	.card-container {
		width: 80vw;
		height: 70vh;
		justify-content: end;
	}
	.content-holder {
		background-color: var(--app-color-dark);
		width: 100%;
		height: 80%;
		border-radius: 2.5rem;
		z-index: 0;
		position: relative;
	}
	.logo-container {
		margin-bottom: -3rem;
		z-index: 1;
		height: 10rem;
		width: 10rem;
		border-radius: 2.5rem;
		background-color: var(--app-color-primary);
	}
	.card-title {
		color: #000;
		z-index: 1;
		margin: 3.5rem auto 0;
		padding: 0.3rem 0 0 0;
		text-align: center;
	}
	.card-title h2 {
		color: #000;
		font-size: 2.5rem;
		font-weight: 500;
	}
	.card-content {
		margin-top: 1.5rem;
		width: 100%;
		padding: 1rem;
	}
	.card-content p {
		color: #000;
		font-size: 1.5rem;
		font-weight: 500;
		text-align: center;
	}
	.team-container {
		display: flex;
		width: 100%;
		align-items: center;
	}
	.team-container p {
		color: #000;
		font-size: 1.75rem;
		font-weight: 600;
		letter-spacing: 0.05rem;
		margin: 1.5rem 0 0 0;
	}
	.cores {
		display: flex;
		width: 50%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.joint-cores {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.joint-cores-list {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-around;
	}
	.sidebar {
		display: flex;
		width: 100%;
		justify-content: center;
		z-index: 1;
		position: absolute;
		bottom: 1.75rem;
	}

	.sidebar a {
		text-decoration: none;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0rem 1.5rem;
		fill: var(--app-color-light);
		background-color: var(--app-color-primary);
	}

	.sidebar a :global(svg) {
		width: 40px;
		height: auto;
	}

	@media screen and (max-width: 650px) {
		.title {
			display: flex;
			margin-right: auto;
			margin-left: auto;
		}
		.title h1 {
			font-size: 2rem;
		}
		.card-container {
			width: 90vw;
			height: max-content;
			justify-content: end;
		}
		.content-holder {
			background-color: var(--app-color-dark);
			width: 100%;
			height: 80%;
			border-radius: 1rem;
			z-index: 0;
			position: relative;
		}
		.logo-container {
			margin-bottom: -2.5rem;
			z-index: 1;
			height: 5rem;
			width: 5rem;
			border-radius: 1rem;
			background-color: var(--app-color-primary);
		}
		.card-title {
			color: #000;
			z-index: 1;
			margin: 2.5rem auto 0;
			padding: 0.3rem 0 0 0;
			text-align: center;
		}
		.card-title h2 {
			color: #000;
			font-size: 1.75rem;
			font-weight: 500;
		}
		.card-content {
			margin-top: 0.5rem;
			width: 100%;
			padding: 0.5rem 0.8rem;
		}
		.card-content p {
			color: #000;
			font-size: 1rem;
			font-weight: 500;
			text-align: center;
		}
		.team-container {
			display: flex;
			width: 100%;
			align-items: flex-start;
			justify-content: center;
		}
		.team-container p {
			color: #000;
			font-size: 1rem;
			font-weight: 600;
			letter-spacing: 0.05rem;
			margin: 1rem 0 0 0;
			line-height: 0.75rem;
		}
		.cores {
			display: flex;
			width: 50%;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
		}
		.joint-cores {
			width: 50%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.joint-cores-list {
			display: flex;
			flex-direction: column;
			width: 100%;
			justify-content: center;
			align-items: center;
		}
		.sidebar {
			display: flex;
			width: 100%;
			justify-content: center;
			z-index: 1;
			position: relative;
			bottom: 0;
			padding: 1.5rem 0 0.75rem 0;
		}

		.sidebar a {
			text-decoration: none;
			width: 2.5em;
			height: 2.5rem;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0rem 1rem;
			fill: var(--app-color-light);
			background-color: var(--app-color-primary);
		}

		.sidebar a :global(svg) {
			width: 30px;
			height: auto;
		}
	}
</style>

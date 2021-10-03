<script>
	import Icon from '$lib/AppIcon.svelte';
	import { mdiFacebook, mdiInstagram, mdiTwitter } from '@mdi/js';

	export let club = {
		clubImg: '',
		clubName: '',
		content: '',
		coOrdinators: {
			name1: '',
			name2: '',
			name3: '',
		},
		jointCoOrdinators: {
			name1: '',
			name2: '',
			name3: '',
		},
		contacts: {
			twitter: '',
			facebook: '',
			instagram: '',
		},
	};
</script>

<div class="container card-container">
	<div class="logo-container">
		<img class="club-image" src={club.clubImg ? club.clubImg : ''} alt="clubImages" />
	</div>
	<div class="content-holder">
		<div class="card-title">
			<h2>{club.clubName ? club.clubName : ''}</h2>
		</div>
		<div class="card-content">
			<p class="content">
				{club.content ? club.content : 'No input Content'}
			</p>
		</div>
		<div class="team-container">
			<div class="cores">
				<p class="title">Co-ordinators</p>
				<p>{club.coOrdinators ? club.coOrdinators.name1 : 'No data'}</p>
				<p>{club.coOrdinators ? club.coOrdinators.name2 : 'No data'}</p>
				<p>{club.coOrdinators ? club.coOrdinators.name3 : ''}</p>
			</div>
			<div class="joint-cores">
				<p class="title">Joint Co-ordinators</p>
				<div class="joint-cores-list">
					<p>{club.jointCoOrdinators ? club.jointCoOrdinators.name1 : 'No data'}</p>
					<p>{club.jointCoOrdinators ? club.jointCoOrdinators.name2 : 'No data'}</p>
					<p>{club.jointCoOrdinators ? club.jointCoOrdinators.name2 : ''}</p>
				</div>
			</div>
		</div>
		<div class="sidebar">
			<a href={club.contacts.twitter} rel="noreferrer noopener" target="_blank"
				><Icon path={mdiTwitter} /></a
			>
			<a href={club.contacts.facebook} rel="noreferrer noopener" target="_blank"
				><Icon path={mdiFacebook} /></a
			>
			<a href={club.contacts.instagram} rel="noreferrer noopener" target="_blank"
				><Icon path={mdiInstagram} /></a
			>
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
	.club-image {
		width: 100%;
		height: 100%;
		border-radius: 2.5rem;
		padding: 5px;
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
	.cores .title,
	.joint-cores .title {
		font-size: 2rem !important;
	}
	.cores p,
	.joint-cores p {
		font-size: 1.25rem !important;
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
		.cores .title,
		.joint-cores .title {
			font-size: 1.2rem !important;
		}
		.cores p,
		.joint-cores p {
			font-size: 0.9rem !important;
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

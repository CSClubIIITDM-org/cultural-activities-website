<script>
	import ClubComponent from './components/clubcomponent.svelte';

	const clubs = [
		{
			clubName: 'Art Club',
			clubImg: 'https://drive.google.com/file/d/1veYITMlaJIfHwsyUkv5V15STBILwgQcT/view?usp=sharing',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. \n Libero ducimus quos quia magnam neque! Veritatis velit quia sequi. Aspernatur ipsam asperiores tempore fugiat \n eveniet itaque, possimus est consequatur aliquam iusto!',
			coOrdinators: {
				name1: 'Sangeeta Das',
				name2: 'Tarun Eswar',
				name3: '',
			},
			jointCoOrdinators: {
				name1: 'Harshit',
				name2: 'Kankanam Sriram',
				name3: 'Priyanshu Kumar',
			},
			contacts: {
				twitter: '',
				facebook: '',
				instagram: '',
			},
		},
		{
			clubName: 'CS Club',
			clubImg: 'https://picsum.photos/200/300',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus quos quia magnam neque! Veritatis velit quia sequi. Aspernatur ipsam asperiores tempore fugiat eveniet itaque, possimus est consequatur aliquam iusto!',
			coOrdinators: {
				name1: 'XYZ',
				name2: '',
				name3: '',
			},
			jointCoOrdinators: {
				name1: 'abc',
				name2: 'bcd',
				name3: 'cde',
			},
			contacts: {
				twitter: '',
				facebook: '',
				instagram: '',
			},
		},
		{
			clubName: 'CS Club',
			clubImg: 'https://picsum.photos/200/300',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus quos quia magnam neque! Veritatis velit quia sequi. Aspernatur ipsam asperiores tempore fugiat eveniet itaque, possimus est consequatur aliquam iusto!',
			coOrdinators: {
				name1: 'XYZ',
				name2: '',
				name3: '',
			},
			jointCoOrdinators: {
				name1: 'abc',
				name2: 'bcd',
				name3: 'cde',
			},
			contacts: {
				twitter: '',
				facebook: '',
				instagram: '',
			},
		},
		{
			clubName: 'CS Club',
			clubImg: 'https://picsum.photos/200/300',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus quos quia magnam neque! Veritatis velit quia sequi. Aspernatur ipsam asperiores tempore fugiat eveniet itaque, possimus est consequatur aliquam iusto!',
			coOrdinators: {
				name1: 'XYZ',
				name2: '',
				name3: '',
			},
			jointCoOrdinators: {
				name1: 'abc',
				name2: 'bcd',
				name3: 'cde',
			},
			contacts: {
				twitter: '',
				facebook: '',
				instagram: '',
			},
		},
		{
			clubName: 'CS Club',
			clubImg: 'https://picsum.photos/200/300',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus quos quia magnam neque! Veritatis velit quia sequi. Aspernatur ipsam asperiores tempore fugiat eveniet itaque, possimus est consequatur aliquam iusto!',
			coOrdinators: {
				name1: 'XYZ',
				name2: '',
				name3: '',
			},
			jointCoOrdinators: {
				name1: 'abc',
				name2: 'bcd',
				name3: 'cde',
			},
			contacts: {
				twitter: '',
				facebook: '',
				instagram: '',
			},
		},
	];
</script>

<div class="container">
	<div class="title">
		<h1>Meet The Team</h1>
	</div>

	{#each clubs as club}
		<ClubComponent {club} />
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2rem;
		background-color: var(--app-color-light);
		padding-bottom: 5rem;
	}
	.title {
		display: flex;
		margin-right: auto;
		margin-left: auto;
	}
	.title h1 {
		font-size: 4rem;
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
	}
</style>

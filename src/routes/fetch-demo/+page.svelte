<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Fetched user with title : {data.data.title}</h1>

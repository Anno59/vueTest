<template>
	<div>
		{{ $store.state.count }}
		<button @click="add">a</button>
	</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	methods: mapActions(["add", "minus"]),
};
</script>

<style></style>

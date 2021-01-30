<template>
  <div>{{ a }}</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class extends Vue {
  a: Number = 123;
}
</script>

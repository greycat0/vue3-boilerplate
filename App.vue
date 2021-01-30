<template>
  <div>1{{ a }}</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class extends Vue {
  a: Number = 123;
}
// export default {}
</script>

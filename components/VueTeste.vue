<script setup lang="ts">
import { ref } from "vue";

function getStateRef() {
  const state = ref(Math.random() > 0 ? 1 : 0);

  return { state };
}

const { state } = getStateRef();
</script>

<template>
  <div>
    value {{ state }}
  </div>
</template>

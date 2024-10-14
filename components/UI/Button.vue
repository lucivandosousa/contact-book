<template>
  <button
    class="w-full p-4 mt-8 border border-blue-800 rounded bg-blue-500 text-white flex items-center justify-center"
    :type="props.type"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const emits = defineEmits(["click"]);
const props = defineProps({
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: "button"
  }
});

function handleClick () {
  return emits("click");
};
</script>

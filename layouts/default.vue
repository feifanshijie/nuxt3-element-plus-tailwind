<script setup>
</script>
<template>
  <div>
    <div class="main-screen">
      <slot/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main-screen {
  height: calc(100vh - 60px);
  overflow-y: scroll;
  background-color: #F4F5F7;
}
</style>

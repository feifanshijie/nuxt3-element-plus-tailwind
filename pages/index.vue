<script setup>
import {
  ElButton,ElInput
} from 'element-plus'
import { Search, View } from '@element-plus/icons-vue'
</script>
<template>
  <div class="w-72 mb-7">
    <ElButton>nuxt3 element-plus tailwin</ElButton>
    <ElInput>
      <template #append>
        <el-button :icon="Search" />
      </template>
    </ElInput>
    <Search/>
    <View/>
  </div>
</template>
<style>
/*element plus 和 tailwind css 冲突*/
.el-input__inner:focus{
  box-shadow:none !important;
}
</style>

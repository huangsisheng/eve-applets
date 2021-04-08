<!--
 * @Author: your name
 * @Date: 2021-04-07 13:51:18
 * @LastEditTime: 2021-04-08 16:19:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eva-applets\src\pages\themeSetting\index.vue
-->
<template>
  <view>
    <button type="default" @click="handleChangeTheme">更改主题</button>
  </view>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions("theme", ["changeTheme"]),
    handleChangeTheme() {
      this.changeTheme();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

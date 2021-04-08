<!--
 * @Author: your name
 * @Date: 2021-04-08 16:26:59
 * @LastEditTime: 2021-04-08 16:44:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eva-applets\src\pages\login\index.vue
-->

<template>
  <view class="content"> <button>登录</button> </view>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  onLoad() {},
  methods: {
    ...mapActions("user", ["login"]),
    
  },
};
</script>

<style lang="scss" scoped>
</style>
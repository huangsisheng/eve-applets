<!--
 * @Author: your name
 * @Date: 2021-04-07 13:38:17
 * @LastEditTime: 2021-04-08 10:38:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eva-applets\src\pages\index\index.vue
-->
<template>
  <view class="content">
    <view class="" @click="toTheme"> 去主题配置 </view>
    <view class="" @click="modal"> 模态框 </view>
  </view>
</template>
<script>
import { getEvaTemplate } from "../../api/index.js";
export default {
  data() {
    return {};
  },
  onLoad() {
    this.getEvaTemplate();
  },
  methods: {
    getEvaTemplate() {
      getEvaTemplate({ templeteId: 1617767082202005 });
    },
    modal(){
        this.$toast.showModal().then(() => {
            console.log(11)
        }).catch(() => {
            console.log(22)
        })
    },
    toTheme() {
      console.log(this.$router);
      this.$router.push({
        path: "../themeSetting/index",
      });
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>

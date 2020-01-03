<template>
  <div class="swiperPage">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import { Swipe, SwipeItem } from "vant";
@Component({
  name: "swiperPage",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
})
export default class swiperPage extends Vue {}
</script>
<style lang="scss">
.swiperPage {
  .van-swipe {
    height: 200px;
    line-height: 200px;
    .van-swipe-item {
      background-color: skyblue;
    }
  }
}
</style>
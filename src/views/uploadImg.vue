<template>
  <div class="uploadImg">
    <p class="tipText">请上传您的证件照片：</p>
    <van-uploader class="uploader" v-model="fileList" />

    <div class="boxShadow">
      <img :src="imgSrc" alt draggable="true" />
    </div>

    <!-- dom开始 -->
    <div class="box">
      <div class="left_box">
        <div class="left_item"></div>
      </div>
      <div class="right_box">
        <div class="right_item"></div>
      </div>
      <div class="mask" @click="skipToSwiper">跳过</div>
    </div>
    <!-- dom结束 -->
    <van-popup class="popupContract" v-model="isShow" :close-on-click-overlay="false">
      <div class="tipTitle"></div>
      <div class="tipContent">新的内容</div>
      <div class="tipBtn">
        <van-button type="primary" size="small" class="notAgreeBtn" @click="cancelDialog">不同意并离开</van-button>
        <van-button class="agreeBtn" type="primary" size="small" @click="confirmDialog">已阅读并同意</van-button>
      </div>
    </van-popup>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import { Uploader, Toast, Popup, Button } from "vant";
Vue.use(Toast);
@Component({
  name: "uploadImg",
  components: {
    [Uploader.name]: Uploader,
    [Popup.name]: Popup,
    [Button.name]: Button
  }
})
export default class uploadImg extends Vue {
  fileList: object[] = [];
  countdown: number = 3;
  isShow: boolean = true;
  imgSrc: string = require("@/assets/images/img.jpg");
  created() {
    let that = this;
    // js开始
    let timer = setInterval(function() {
      that.countdown--;
      if (that.countdown <= 0) {
        clearInterval(timer);
        // that.$router.push({ name: "home" });
      }
    }, 1000);
    // js结束
    let node = {
      type: "identifier",
      name: "foo",
      obj: {
        nickName: "erwa"
      }
    };
    let {
      type: localType,
      name: localName,
      obj: { nickName: littlename }
    } = node;
    console.log(localType);
    console.log(localName);
    console.log("解构", littlename);
    let arr = [1, 2, 3, 4, 5];
    console.log([...arr, 6, 7, 8, 9]);
    let obj = {
      name: "nihao"
    };
    console.log({ ...obj, methods: "nijiushi" });
  }
  skipToSwiper() {
    this.$router.push({ name: "swiperPage" });
  }
  cancelDialog() {
    this.isShow = false;
  }
  confirmDialog() {
    this.$router.push({ name: "movieList" });
  }
}
</script>
<style lang="scss">
.uploadImg {
  padding: 15px 10px;
  text-align: left;
  .popupContract {
    width: 320px;
    text-align: left;
    .tipTitle {
      text-align: center;
      margin-bottom: 20px;
    }
    .tipContent {
      font-size: 14px;
      height: 390px;
      overflow-x: scroll;
      padding: 0 20px 0;
    }
    .tipBtn {
      display: flex;
      justify-content: space-between;
      margin: 10px 20px 10px 20px;
      text-align: center;
      .van-button--primary {
        border: 0;
        font-size: 14px;
        width: 120px;
        height: 40px;
        background-color: #1069dd;
      }
      .notAgreeBtn {
        background: #999999;
      }
    }
  }
  .tipText {
    font-size: 15px;
    font-weight: bold;
    color: #333;
    text-align: left;
  }
  .uploader {
    margin-top: 20px;
  }
  .boxShadow {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    // box-shadow: 0px 2px 9px 0px rgba(4, 0, 0, 0.1);
    box-shadow: 0 0px 9px 2px rgba(191, 223, 255, 0.3);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  // css开始
  .box {
    /* 最外层的盒子 */
    margin-top: 20px;
    width: 34px;
    height: 34px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    background-color: lime;
    position: absolute;
    right: 30px;
    top: 30px;
  }
  .left_box,
  .right_box {
    /* 
        左右两边用于 隐藏 旋转的div的盒子 
        通过overflow来隐藏内部div旋转出去的部分
      */
    position: absolute;
    top: 0;
    width: 17px;
    height: 34px;
    overflow: hidden;
    z-index: 1;
  }
  .left_box {
    left: 0;
  }
  .right_box {
    right: 0;
  }
  .left_item,
  .right_item {
    width: 17px;
    height: 34px;
  }
  .left_item {
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    -webkit-transform-origin: right center;
    transform-origin: right center;
    -webkit-animation: loading_left 3s linear;
    background-color: #ccc;
  }
  .right_item {
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    -webkit-transform-origin: left center;
    transform-origin: left center;
    -webkit-animation: loading_right 3s linear;
    background-color: #ccc;
  }
  .mask {
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    z-index: 2;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    color: #999;
    border-radius: 50%;
    background-color: #fff;
  }
  @-webkit-keyframes loading_left {
    0% {
      -webkit-transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(180deg);
    }
  }
  @-webkit-keyframes loading_right {
    0% {
      -webkit-transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(180deg);
    }
    100% {
      -webkit-transform: rotate(180deg);
    }
  }
  // css结束
}
</style>
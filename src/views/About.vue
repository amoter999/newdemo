<template>
  <div class="about">
    <h1 class="aboutlist">This is an about page</h1>
    <van-cell title="URL 跳转" is-link url="/about" />
    <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
    <van-cell-group>
      <van-field v-model="msg" center clearable placeholder="请输入短信验证码">
        <img slot="button" class="slotBtn" :src="newIcon" alt />
      </van-field>
    </van-cell-group>
    <div class="submitBtn"></div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import {
  Button,
  Toast,
  Popup,
  Field,
  Cell,
  CellGroup,
  Collapse,
  CollapseItem
} from "vant";

@Component({
  name: "about",
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Popup.name]: Popup,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  }
})
export default class About extends Vue {
  msg: string = "This is a flower";
  newIcon: string = require("@/assets/images/jxjrapp.png");
  // isIos: boolean = false;
  // isAndroid: boolean = false;
  get judgeIOS() {
    var u = navigator.userAgent,
      app = navigator.appVersion;
    var isIOS = u; //ios终端
    return isIOS;
  }
  get judgeAndroid() {
    var u = navigator.userAgent,
      app = navigator.appVersion;
    var isAndroid = u; //g
    return isAndroid;
  }
}
</script>
<style lang="scss">
.about {
  h1.aboutlist {
    font-size: 18px;
    padding-left: 15px;
    text-align: left;
  }
  .van-cell:first-child {
    border-top: 1px solid #efefef;
  }
  .van-cell__title {
    text-align: left;
  }
  .submitBtn {
    width: 100%;
    padding: 0 45px;
    box-sizing: border-box;
    text-align: center;
    margin-top: 30px;
  }
  .slotBtn {
    width: 30px;
    margin-top: 5px;
  }
  .judgeEquip {
    width: 100%;
    height: 300px;
    position: relative;
    font-size: 12px;
    div.first {
      width: 20px;
      height: 20px;
      position: absolute;
      left: 20px;
      top: 30px;
      background-color: lime;
    }
    div.second {
      width: 17px;
      height: 17px;
      position: absolute;
      left: 24px;
      top: 34px;
      background-color: #fff;
    }
  }
}
</style>

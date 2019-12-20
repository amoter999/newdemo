<template>
  <div class="about">
    <div class="innerCont">
      <div class="content">
        <header class="title">征信同意</header>
        <p>1.重要须知：借口而感觉欧派二更健康发过来南京考虑到福建省考虑了； 低费率砥砺奋进赶快来突然又没了迫使对方大风歌哦。</p>
        <p>2.重要须知：借口而感觉欧派二更健康发过来南京考虑到福建省考虑了； 低费率砥砺奋进赶快来突然又没了迫使对方大风歌哦。</p>
        <p>1.重要须知：借口而感觉欧派二更健康发过来南京考虑到福建省考虑了； 低费率砥砺奋进赶快来突然又没了迫使对方大风歌哦。</p>
        <p>2.重要须知：借口而感觉欧派二更健康发过来南京考虑到福建省考虑了； 低费率砥砺奋进赶快来突然又没了迫使对方大风歌哦。</p>
        <p>1.重要须知：借口而感觉欧派二更健康发过来南京考虑到福建省考虑了； 低费率砥砺奋进赶快来突然又没了迫使对方大风歌哦。</p>
        <p>2.重要须知：借口而感觉欧派二更健康发过来南京考虑到福建省考虑了； 低费率砥砺奋进赶快来突然又没了迫使对方大风歌哦。</p>
        <p>1.重要须知：借口而感觉欧派二更健康发过来南京考虑到福建省考虑了； 低费率砥砺奋进赶快来突然又没了迫使对方大风歌哦。</p>
        <p>2.重要须知：借口而感觉欧派二更健康发过来南京考虑到福建省考虑了； 低费率砥砺奋进赶快来突然又没了迫使对方大风歌哦。</p>
        <p>1.重要须知：借口而感觉欧派二更健康发过来南京考虑到福建省考虑了； 低费率砥砺奋进赶快来突然又没了迫使对方大风歌哦。</p>
        <p>2.重要须知：借口而感觉欧派二更健康发过来南京考虑到福建省考虑了； 低费率砥砺奋进赶快来突然又没了迫使对方大风歌哦。</p>
        <p>1.重要须知：借口而感觉欧派二更健康发过来南京考虑到福建省考虑了； 低费率砥砺奋进赶快来突然又没了迫使对方大风歌哦。</p>
        <p>2.重要须知：借口而感觉欧派二更健康发过来南京考虑到福建省考虑了； 低费率砥砺奋进赶快来突然又没了迫使对方大风歌哦。</p>
        <p>1.重要须知：借口而感觉欧派二更健康发过来南京考虑到福建省考虑了； 低费率砥砺奋进赶快来突然又没了迫使对方大风歌哦。</p>
        <p>2.重要须知：借口而感觉欧派二更健康发过来南京考虑到福建省考虑了； 低费率砥砺奋进赶快来突然又没了迫使对方大风歌哦。</p>
        <p>1.重要须知：借口而感觉欧派二更健康发过来南京考虑到福建省考虑了； 低费率砥砺奋进赶快来突然又没了迫使对方大风歌哦。</p>
        <p>2.重要须知：借口而感觉欧派二更健康发过来南京考虑到福建省考虑了； 低费率砥砺奋进赶快来突然又没了迫使对方大风歌哦。</p>
      </div>
      <div class="contracts" @click="isSure">
        <van-checkbox v-model="checked"></van-checkbox>
        <span class="contractsCon">
          我已阅读并同意
          <span
            class="agreement"
          >《南京银行征信授权书》,《南京银行个人信息查询使用授权书》,《个人信息查询授权书》,《征信授权委托书》,《吉象普惠征信授权书》</span>
        </span>
      </div>
      <div class="completeBtn">
        <van-button
          type="primary"
          color="#1777C8"
          :disabled="isDisabled"
          size="large"
          @click="finishClick"
        >同意以上协议，提交申请</van-button>
      </div>
    </div>
    <van-dialog
      v-model="show"
      show-cancel-button
      confirmButtonText="同意"
      @confirm="next"
      @cancel="last"
    >确定已经同意此页面的所有协议？同意进入下一个页面，取消返回上一个页面</van-dialog>
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
  Checkbox,
  Dialog,
  CheckboxGroup
} from "vant";
Vue.use(Dialog);
@Component({
  name: "about",
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Popup.name]: Popup
  }
})
export default class About extends Vue {
  checked: boolean = false;
  isDisabled: boolean = true;
  show: boolean = false;
  isSure() {
    this.checked = !this.checked;
    if (!this.checked) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }
  finishClick() {
    if (!this.isDisabled) {
      this.show = true;
    }
  }
  next() {
    this.$router.push({ name: "movieList" });
  }
  last() {
    this.$router.push({ name: "home" });
  }
}
</script>
<style lang="scss">
@import "../assets/style/normalize";
.about {
  .content {
    padding: 15px;
    padding-bottom: 0;
    .title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    p {
      margin-bottom: 15px;
      font-size: 15px;
      color: #333;
      text-align: left;
      &:last-child {
        margin-bottom: 8px;
      }
    }
  }
  .contracts {
    margin: 15px 0 0 0;
    display: flex;
    align-items: flex-start;
    .contractsCon {
      display: inline-block;
      width: 335px;
      text-align: left;
      font-size: 12px;
    }
    .agreement {
      color: #1069dd;
    }
    .van-checkbox {
      text-align: left;
      margin: 4px 8px 0;
      font-size: 12px;
      .van-checkbox__icon--round .van-icon {
        border-radius: 3px;
        width: 13px;
        height: 13px;
        line-height: 8px;
      }
      .van-checkbox__label {
        margin-left: 2px;
      }
    }
  }
  .completeBtn {
    padding: 15px;
    .van-button {
      font-size: 17px;
      font-weight: 400;
      color: rgba(244, 244, 244, 1);
    }
  }
  .van-dialog__content {
    padding: 30px 20px;
  }
}
</style>

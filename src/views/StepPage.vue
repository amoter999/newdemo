<template>
  <div class="stepPage">
    <van-steps direction="vertical" :active="2">
      <van-step>
        <h3>【城市】物流状态1</h3>
        <p>2016-07-12 12:40</p>
      </van-step>
      <van-step>
        <h3>【城市】物流状态2</h3>
        <p>2016-07-11 10:00</p>
      </van-step>
      <van-step>
        <h3>快件已发货</h3>
        <p class="timetext">2016-07-10 09:30</p>
        <p class="timetext">2016-07-10 09:30</p>
        <p class="timetext">2016-07-10 09:30</p>
      </van-step>
    </van-steps>
    <div class="chooseBox">
      <van-checkbox-group v-model="result">
        <van-checkbox name="a">复选框 a</van-checkbox>
        <van-checkbox name="b">复选框 b</van-checkbox>
        <van-checkbox name="c">复选框 c</van-checkbox>
      </van-checkbox-group>
    </div>
    <div class="finalSubmit">
      <van-button
        type="primary"
        @click="finalSubmit"
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
        size="large"
      >提交</van-button>
    </div>

    <van-checkbox v-model="ischecked" shape="square" icon-size="20">复选框</van-checkbox>
    <p class="clickEnter">
      <router-link class="enterNext" to="./dateTimepage">点击进入时间页面</router-link>
    </p>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import { Step, Steps, Checkbox, CheckboxGroup, Button } from "vant";
Vue.use(Step).use(Steps);

@Component({
  name: "stepPage",
  components: {
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Button.name]: Button
  }
})
export default class StepPage extends Vue {
  result: any = [];
  ischecked: boolean = false;

  finalSubmit() {
    console.log(this.result);
  }
}
</script>
<style lang="scss">
.stepPage {
  text-align: left;
  box-sizing: border-box;
  .van-step {
    h3 {
      margin: 0;
      font-size: 15px;
    }
    p {
      font-size: 15px;
      padding-left: 20px;
      // &.timetext {
      // }
    }
  }
  .van-checkbox__label {
    font-size: 18px;
  }
  .van-checkbox {
    margin-bottom: 6px;
  }
  .chooseBox {
    padding-left: 15px;
    padding-top: 20px;
  }
  .finalSubmit {
    padding: 15px;
  }
  .clickEnter {
    text-align: center;
    .enterNext {
      font-size: 16px;
      color: #333;
      padding-left: 15px;
    }
  }
}
</style>
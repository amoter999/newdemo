<template>
  <div class="dateTimePage">
    <div class="dateTime">
      <p class="chooseTime" @click="chooseTime">请选择你需要购买火车票的时间</p>
      <p class="chooseTime">
        <span>您选择的时间是：</span>
        <span>{{starttime}}</span>
      </p>
    </div>
    <div class="Area">
      <p class="chooseArea" @click="chooseTime">请选择您所在的地区：</p>
      <p class="chooseArea">
        <span>您选择的地区是：</span>
        <span>{{area}}</span>
      </p>
    </div>

    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker v-model="currentDate" @confirm="confirm" type="datetime" />
    </van-popup>
    <van-popup v-model="showAreaBox" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker @confirm="confirm" />
    </van-popup>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import { DatetimePicker, Popup } from "vant";
import moment from "moment";
import "@/assets/js/allArea";
Vue.use(DatetimePicker);
@Component({
  name: "dateTimePage",
  components: {
    [DatetimePicker.name]: DatetimePicker,
    [Popup.name]: Popup
  }
})
export default class dateTimePage extends Vue {
  currentDate: Date = new Date();
  show: boolean = false;
  showAreaBox: boolean = false;
  starttime: string = "";
  starttime1: Date = new Date();
  allArea: string[] = require("@/assets/js/allArea");
  area: string = "";
  chooseTime() {
    this.show = true;
  }
  confirm() {
    this.show = false;
    this.starttime = moment(this.currentDate).format("YYYY年MM月DD日 HH:mm:ss");
  }
  chooseArea() {
    this.showAreaBox = true;
  }
}
</script>
<style lang="scss">
.dateTimePage {
  padding: 20px;
  .dateTime {
    margin-bottom: 20px;
    .chooseTime {
      font-size: 18px;
      text-align: left;
      line-height: 30px;
    }
  }
  .Area {
    margin-bottom: 20px;
    .chooseArea {
      font-size: 18px;
      text-align: left;
      line-height: 30px;
    }
  }
}
</style>
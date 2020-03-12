<template>
  <div class="BankAddSpace">
    <div class="form">
      <p>
        手机号：
        <input
          v-model="mobile"
          type="tel"
          ref="mobile"
          maxlength="13"
          @keyup="inputMobile"
          @paste="inputMobile"
        />
      </p>
      <p>
        银行卡号：
        <input v-model="card" type="text" @keyup="inputCard" @paste="inputCard" />
      </p>
    </div>
    <van-tabs>
      <van-tab v-for="index in 8" :key="index" :title="'标签 ' + index">
        <ul class="itemList">
          <li v-for="index in 60" class="item" :key="index">{{index}}</li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import { Getter } from "vuex-class";
import { Tab, Tabs, AddressEdit, Toast, Sidebar, SidebarItem } from "vant";
Vue.use(Tab).use(Tabs);
Vue.use(Toast);
@Component({
  name: "BankAddSpace",
  components: {
    [AddressEdit.name]: AddressEdit,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem
  }
})
export default class BankAddSpace extends Vue {
  mobile: string = "";
  card: string = "";
  areaList: any[] = [];
  searchResult: any[] = [];
  activeKey: number = 0;
  inputMobile() {
    let value = this.mobile.replace(/\D/g, "").substr(0, 11);
    let len = value.length;
    if (len > 3 && len < 8) {
      value = value.replace(/^(\d{3})/g, "$1 ");
    } else if (len >= 8) {
      value = value.replace(/^(\d{3})(\d{4})/g, "$1 $2 ");
    }
    this.mobile = value;
  }
  onSave() {
    Toast("save");
  }
  onDelete() {
    Toast("delete");
  }
  onChangeDetail(val: any) {
    if (val) {
      this.searchResult = [
        {
          name: "黄龙万科中心",
          address: "杭州市西湖区"
        }
      ];
    } else {
      this.searchResult = [];
    }
  }
  inputCard() {
    this.card = this.card.replace(/\D/g, "");
    this.card = this.card.replace(/(\d{4})(?=\d)/g, "$1  ");
  }
}
</script>
<style lang="scss">
@import "../assets/style/normalize.scss";
.BankAddSpace {
  .form {
    padding: 10px;
  }
  p {
    text-align: left;
    font-size: 18px;
    margin-bottom: 10px;
    input {
      border: 1px solid #ccc;
      display: block;
      margin-top: 10px;
      height: 40px;
      padding-left: 10px;
      box-sizing: border-box;
      width: 100%;
    }
  }
  .itemList {
    li {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: left;
      font-size: 15px;
      border-bottom: 1px solid #efefef;
    }
  }
  .van-tab__pane {
    width: 100%;
    height: 300px;
    overflow-y: scroll;
    border: 1px solid #ccc;
    border-right: 0;
    border-left: 0;

    // border-radius: 10px;
    box-shadow: 2px 2px 10px 2px #efefef;
    li {
      padding: 0 15px;
    }
  }
}
</style>
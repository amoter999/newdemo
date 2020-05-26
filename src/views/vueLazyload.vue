<template>
  <div class="vueLazyload">
    <img class="item-pic" v-lazy="getIcons(newItem.picUrl)" />
    <img class="item-pic" v-lazy="getIcons(newItem.picUrl)" />
    <img class="item-pic" v-lazy="getIcons(newItem.picUrl)" />
    <img class="item-pic" v-lazy="getIcons(newItem.picUrl)" />
    <img class="item-pic" v-lazy="getIcons(newItem.picUrl)" />
    <img class="item-pic" v-lazy="getIcons(newItem.picUrl)" />
    <img class="item-pic" v-lazy="getIcons(newItem.picUrl)" />
    <img class="item-pic" v-lazy="getIcons(newItem.picUrl)" />
    <img class="item-pic" v-lazy="getIcons(newItem.picUrl)" />
    <img class="item-pic" v-lazy="getIcons(newItem.picUrl)" />
    <img class="item-pic" v-lazy="getIcons(newItem.picUrl)" />
    <img class="item-pic" v-lazy="getIcons(newItem.picUrl)" />
    <img class="item-pic" v-lazy="getIcons(newItem.picUrl)" />
    <img class="item-pic" v-lazy="getIcons(newItem.picUrl)" />
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import VueLazyLoad from "vue-lazyload";
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: "../assets/images/error.jpg",
  loading: "../assets/images/loadImg2.gif",
  attempt: 1,
  listenEvents: ["scroll"]
});
@Component({
  name: "vueLazyload",
  components: {}
})
export default class VueLazyload extends Vue {
  newItem: object = {
    picUrl: "img.jpg"
  };
  getIcons(icon: any) {
    try {
      return require(`@/assets/images/${icon}`);
    } catch (e) {
      return "";
    }
  }
}
</script>
<style lang="scss">
.vueLazyload {
  font-size: 0;
  .item-pic {
    // display: block;
    width: 100%;
  }
}
</style>

<template>
  <div class="uploadImg">
    <van-uploader :before-read="beforeRead" />
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import {Uploader } from "vant";

@Component({
  name: "uploadImg",
  components: {}
})
export default class Home extends Vue {}
</script>
<style lang="scss">
</style>
<template>
  <div class="movieDetail">你好</div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import { movieDetail } from "@/api/index";
import { Toast } from "vant";
@Component({
  name: "movieDetail",
  components: {}
})
export default class Home extends Vue {
  created() {
    console.log();
    let id = this.$route.params.id;

    movieDetail(id).then(res => {
      console.log(res);
    });
  }
}
</script>
<style lang="scss"></style>
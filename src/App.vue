<template>
  <div id="app">
    <router-view />
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
  enterPage() {
    this.$router.push({ name: "home" });
  }
}
</script>

<style lang="scss">
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
p {
  margin: 0;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 30px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

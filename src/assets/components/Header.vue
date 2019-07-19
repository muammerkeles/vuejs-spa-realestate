<template>
    <div>
    <section class="hero" v-bind:class="{'slider':isSliderActive}">
      <Navigation />
      <!--  end header section  -->
      <section class="caption">
        <h2 class="caption">{{sliderMsg.title}}</h2>
        <h3 class="properties">{{sliderMsg.msg}}</h3>
      </section>
    </section>
    <!--  end hero section  -->
    <SearchBox />
    </div>
</template>

<script>
import SearchBox from "./SearchBox.vue";
import Navigation from "./Navigation.vue";

export default {
  components: {
    SearchBox,
    Navigation
  },
  computed:{
    isSliderActive () {
      return this.$store.state.sliderActive
    }
  },
  props: {
    sliderMsg: Object,
    //isslider:false
  }
};
</script>

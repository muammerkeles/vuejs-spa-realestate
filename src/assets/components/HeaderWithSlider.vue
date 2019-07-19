<template>
  <div>
    <section class="hero">
      <header>
        <div class="wrapper">
          <a href="#">
            <img src="/src/theme/img/logo.png" class="logo" alt titl />
          </a>
          <a href="#" class="hamburger"></a>
          <nav>
            <ul>
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/property-list">Property List</router-link>
              </li>
              <li>
                <router-link to="/aboutus">About Us</router-link>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <a href="#" class="login_btn">Login</a>
          </nav>
        </div>
      </header>
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

export default {
  components: {
    SearchBox
  },
  props: {
    sliderMsg: Object
  }
};
</script>

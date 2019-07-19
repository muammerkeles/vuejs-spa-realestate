<template>
    <header>
        <div class="wrapper">
          <a href="#">
            <img src="src/theme/img/logo.png" class="logo" alt />
          </a>
          <a href="#" class="hamburger"></a>
          <nav>
            <ul>
              <li>
                <router-link to="/index">Home</router-link>
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
</template>

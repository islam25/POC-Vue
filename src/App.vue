<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to = "/">School</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link" to = "/">
                Home
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 20px;
}
</style>

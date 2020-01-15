<template>
  <v-app>
    <v-container>
      <div id="app-container">
        <Dashboard/>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import Dashboard from './components/Dashboard.vue'
import { VApp, VContainer } from 'vuetify/lib';

export default {
  name: 'app',
  components: {
    Dashboard,
    VApp,
    VContainer
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
$body-font-family: "Avenir", sans-serif;
$heading-font-family: "Avenir", sans-serif;
.container {padding: 0 !important;}
::-webkit-scrollbar {display: none;}
#app {
  background-image: url("./assets/bg.jpg");
  background-size: cover;
  background-position: top left;
}
#app-container {
  :focus {outline: none}
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  

  .dashboard {
    height: 100%;
    width: 100%;
    margin: auto;
    padding: 30px;
    overflow: hidden;
  }

  .v-application {
    font-family: 'Avenir' Helvetica, sans-serif !important;
  }
}
</style>
<template>
  <div id="app">
    <div class="panel">
      <router-link tag="div" class="logo" to="/">
        <img src="@/assets/cuva_logo_white.png" alt="Cuva">
      </router-link>
      <div
        class="view_btn view_btn-grid"
        @click="gridView = !gridView"
        v-if="gridView"
      >
        <div class="view_btn-grid__item"></div>
        <div class="view_btn-grid__item"></div>
        <div class="view_btn-grid__item"></div>
        <div class="view_btn-grid__item"></div>
      </div>
      <div
        class="view_btn view_btn-column"
        @click="gridView = !gridView"
        v-else
      >
        <div class="view_btn-column__item"></div>
        <div class="view_btn-column__item"></div>
      </div>
    </div>
    <div class="page">
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default {
  computed: {
    gridView: {
      get() {
        return this.$store.getters.getGridView
      },
      set (value) {
        this.$store.commit('setGridView', value)
      }
    }
  }
}
</script>
<style lang="stylus">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;700&display=swap');


:root {
  --main: #101010;
  --shadow-color: #e3e3e3;
  --shadow: 0px 5px 10px 0px var(--shadow-color);
  --light-text-color: #fff;
}

body {
  margin: 0;
}

#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.page {
  margin-top: 50px;
}

h1 {
  margin-bottom: 70px;
  font-size: clamp(16px, 4vw, 42px);
}

.container {
  width: 100%;
  max-width: 1048px;
  padding-left: 12px;
  padding-right: 12px;
  margin-left: auto;
  margin-right: auto;
}

.panel {
  background-color: var(--main);
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
  height: 40px;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 64px;
  color: var(--light-text-color);
  font-weight: 600;
  font-size: 22px;
  cursor: pointer;
  & img {
    width: 100%;
  }
}

.view_btn {
    width: 22px;
    height: 22px;
    overflow: hidden;

  &-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2px;
    &__item {
      background-color #fff
      width: 10px;
      height: 10px;
    }
  }

  &-column {
    &__item {
      background-color #fff
      width: 22px;
      height: 16px;
      margin-bottom: 2px;
    }
  }
}

button {
  letter-spacing: 0.6px;
  border: none;
  padding: 12px 26px;
  cursor: pointer;
  font-size: 18px;
}

.main-btn {
  background-color: var(--main);
  color: var(--light-text-color);
  opacity: .9;
  transition: opacity .3s;
  &:hover {
    opacity: 1;
  }
}

.mt24 {
  margin-top: 24px;
}

.grid {

}
</style>

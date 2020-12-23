<template>
  <div id="app">
    <div class="panel">
      <router-link tag="div" class="logo" to="/">
        Book in Room
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;700&display=swap');


:root {
  --main: #bc2a3a;
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

.panel {
  background-color: var(--main);
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
  height: 40px;
  align-items: center;
}

.logo {
  color: var(--light-text-color);
  font-weight: 600;
  font-size: 22px;
  cursor: pointer;
}

button {
  letter-spacing: 0.6px;
  border: none;
  padding: 12px 26px;
  cursor: pointer;
  box-shadow: var(--shadow);
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

</style>

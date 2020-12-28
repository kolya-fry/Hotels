<template>
  <div>
    <h1>
      Спасибо, ваш сертификат активирован!
    </h1>
    <q-btn color="primary" @click="goToMain">
      На главную
    </q-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Final extends Vue {
  goToMain() {
    this.$router.push({name: 'Home'})
  }

}
</script>

<style lang="stylus">
</style>

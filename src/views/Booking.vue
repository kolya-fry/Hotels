<template>
  <div class="hotel-card">
    <div class="hotel-card__title">
      {{hotel.title}}
    </div>
    <div class="hotel-card__image-wrapper">
      <img :src="hotel.picture" alt="hotel.title">
    </div>
    <button class="main-btn mt24">
      Забронировать
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Hotel extends Vue {
  @Prop() private hotel!: object;
}

</script>

<style scoped lang="stylus">
  .hotel-card {
    width: 100%;
    padding: 24px;
    margin-bottom: 34px;
    background-color: #fff;
    border-radius: 24px;
    box-shadow: var(--shadow);
    & img {
      width: 100%;
      border-radius: 24px;
    }

    &__title {
      font-weight: 600;
      margin-bottom: 24px;
      font-size: 24px;
      color: var(--main);
    }
  }
</style>



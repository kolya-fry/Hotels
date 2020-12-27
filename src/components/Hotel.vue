<template>
  <div class="hotel-card" @click="navigateToBooking(hotel)">
    <q-img :src="hotel.picture" alt="hotel.title" :ratio="1">
      <div class="hotel-card__title">
        {{ hotel.title }}
      </div>
      <q-btn class="main-btn mt24" v-if="main" color="primary">
        Забронировать
      </q-btn>
    </q-img>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Hotel extends Vue {
  @Prop() private hotel!: object;
  @Prop() private main!: boolean;

  navigateToBooking(hotel) {
    this.$router.push({
      name: `Booking`,
      params: {
        id: hotel.id,
        hotel: hotel,
      },
    });
  }
}
</script>

<style scoped lang="stylus">

.hotel-card {
  position: relative;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 20px;
  cursor: pointer;

  &:after,
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 30%;
    position: absolute;
    z-index: 1;
    transition: background .4s;
  }

  &:before {
    top: 0;
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,.7) 100%);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,.7) 100%);
  }

  & img {
    width: 100%;
  }

  &__title {
    font-weight: 600;
    font-size: clamp(16px, 2vw, 22px);;
    color: var(--light-text-color);
    position: absolute;
    text-shadow: var(--shadow);
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    background: none;
    width: 100%;
  }

  & button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    z-index: 2;
  }
}

.hotel_wrapper--grid .hotel-card {
  height: auto;
  margin-bottom: auto;
}
</style>

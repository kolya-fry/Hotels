<template>
  <div class="hotel-card" :class="{'hotal-card--view-only': !main}" @click="navigateToBooking(hotel)">
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
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters("hotels", ["hotels"]),
  },
})
export default class Hotel extends Vue {
  @Prop() private hotel!: object;
  @Prop() private main!: boolean;
  hotels
  mounted() {
    if (!this.hotels) this.$store.dispatch("hotels/fetchHotels");
  }


  navigateToBooking(hotel) {
    if (!this.main) return
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
    height: 42%;
    position: absolute;
    z-index: 1;
    transition: background .4s;
  }

  &:before {
    top: 0;
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, #00000075 51%, #000000db 100%)
  }

  &:after {
    bottom: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, #00000075 51%, #000000db 100%)
  }

  & img {
    width: 100%;
  }

  &__title {
    font-weight: 500;
    font-size: clamp(16px, 2vw, 30px);
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

.hotal-card--view-only {
  height: 300px;
  cursor: unset;
  & .q-img {
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
  }
  & .hotel-card__title {
    z-index: 5;
  }
}
.hotel_wrapper--grid .hotel-card__title {
  font-size: clamp(13px, 2vw, 15px);
}
</style>

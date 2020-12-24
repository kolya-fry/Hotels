<template>
  <div>
    <h1>
      Подарите близким незабываемые выходные в отеле с открытой датой
    </h1>
    <div class="hotel_wrapper" :class="{ 'hotel_wrapper--grid': gridView }">
      <Hotel :hotel="hotel" v-for="hotel in hotels" :key="hotel.id" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Hotel from "@/components/Hotel.vue";
import { mapGetters } from "vuex";
@Component({
  computed: {
    ...mapGetters("hotels", ["hotels"]),
  },
  components: {
    Hotel,
  },
})
export default class Home extends Vue {
  mounted() {
    this.fetchHotels();
  }

  get gridView() {
    return this.$store.getters.getGridView;
  }

  async fetchHotels() {
    this.$store.dispatch("hotels/fetchHotels");
  }
}
</script>

<style lang="stylus">

* {
  box-sizing: border-box;
}

.hotel_wrapper {
  &--grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
  }
}
</style>

<template>
  <div class="page">
    <div class="container">
      <div v-for="hotel in hotels" :key="hotel.id">
        <Hotel :hotel="hotel"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Hotel from '@/components/Hotel.vue';
import { mapGetters } from 'vuex'
@Component({
  computed: {
    ...mapGetters('hotels', ['hotels'])
  },
  components: {
    Hotel,
  },
})
export default class Home extends Vue {

  mounted() {
    this.fetchHotels()
  }

  async fetchHotels() {
    this.$store.dispatch('hotels/fetchHotels')
  }


}
</script>

<style lang="stylus">

  * {
    box-sizing: border-box;
  }

  .container {
    width: 100%;
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
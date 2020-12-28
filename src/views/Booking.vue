<template>
  <div class="q-pb-lg">
    <Hotel :hotel="hotel" v-if="hotel"/>
    <div class="booking-form">
      <h3>
        {{hotel.title}}
      </h3>
      <h4>
        Для активации сертификата заполните поля
      </h4>

      <div class="q-mb-lg">
        <q-btn
          class="q-mt-sm"
          push
          color="primary"
          :label="formatDate(bookingData.bookingDate)"
        >
          <q-popup-proxy>
            <q-date v-model="bookingData.bookingDate" minimal />
          </q-popup-proxy>
        </q-btn>
        <div class="text-subtitle2">
          Необходимо активировать не позднее, чем за 7 дней до визита. Выбрать
          можно любые даты, кроме праздничных.
        </div>
      </div>

      <div class="input-wrapper">
        <q-input
          outlined
          v-model="bookingData.certificate"
          label="Номер сертификата"
          placeholder="NOV0-0000-0000-0000"
        />
      </div>

      <div class="input-wrapper">
        <q-input
          outlined
          v-model="bookingData.name"
          label="Ваше имя и фамилия"
          class="q-mt-sm"
        />
      </div>

      <div class="input-wrapper">
        <q-checkbox
          v-model="bookingData.allGuestsAreResidents"
          label="Все гости являются гражданами РФ"
          color="primary"
        />
      </div>

      <div class="input-wrapper">
        Кровать
        <q-radio v-model="bookingData.bathSize" :val="1" label="Односпальная" />
        <q-radio v-model="bookingData.bathSize" :val="2" label="двуспальная" />
      </div>

      <div class="input-wrapper q-mt-md">
        <div class="q-mb-sm">
          Дети
        </div>
        <q-btn
          v-if="showAddChildrenButtonCondition"
          class="main-button q-mb-sm"
          color="primary"
          @click="addChild"
        >
          +
        </q-btn>
        <div v-if="showchildrenList">
          <div v-for="(child, key) in bookingData.childrenWithAge" :key="key">
            <q-badge color="primary">
              Возраст: {{ bookingData.childrenWithAge[key] }} (0 to 18)
            </q-badge>
            <q-slider
              v-model="bookingData.childrenWithAge[key]"
              :min="minChildenAge"
              :max="maxChildenAge"
            />
          </div>
        </div>
        <div v-else>
          Если планируете отдых с детьми, то укажите их количество и возраст
        </div>
      </div>

      <div class="input-wrapper q-mt-lg">
        <q-input
          outlined
          v-model="bookingData.email"
          label="Электронная почта"
          placeholder="user@host.ru"
        />
      </div>

      <div class="input-wrapper">
        <q-input
          outlined
          v-model="bookingData.phone"
          label="Телефон"
          placeholder="+7 (999) 999-99-99"
        />
      </div>

      <div class="input-wrapper">
        <q-checkbox
          v-model="bookingData.acceptUserCondition"
          label="Я согласен с условиями публичной оферты"
          color="primary"
        />
      </div>

      <div class="input-wrapper">
        <q-checkbox
          v-model="bookingData.acceptProtectionData"
          label="Я согласен с положением о защите персональных данных"
          color="primary"
        />
      </div>

      <q-btn class="main-button q-mt-lg" color="primary" @click="sendForm">
        Активировать сертификат
      </q-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { mapGetters } from "vuex"
import Hotel from "@/components/Hotel.vue"
import moment from "moment"

const MAX_CHILDREN_COUNT:number = 10
const MIN_CHILDREN_AGE:number = 0
const MAX_CHILDREN_AGE:number = 18

interface BookingData {
  certificate: string
  name: string
  phone: string
  bookingDate: string
  email: string
  bathSize: number
  childrenWithAge: number[]
  allGuestsAreResidents: boolean
  acceptUserCondition: boolean
  acceptProtectionData: boolean
}

@Component({
  components: {
    Hotel,
  },
  computed: {
    ...mapGetters("hotels", ["hotels", "hotelByIdFunc"]),
  }
})
export default class Booking extends Vue {
  hotelByIdFunc!: any
  hotel: any = null
  bookingData = {} as BookingData
  minChildenAge = MIN_CHILDREN_AGE
  maxChildenAge = MAX_CHILDREN_AGE

  async mounted() {
    await this.$store.dispatch("hotels/fetchHotels");
    this.hotel = this.hotelByIdFunc(this.$route.params.id)
    this.bookingData = {
      certificate: "",
      name: "",
      phone: "",
      bookingDate: "",
      email: "",
      bathSize: 1,
      childrenWithAge: [],
      allGuestsAreResidents: true,
      acceptUserCondition: true,
      acceptProtectionData: true,
    }
  }

  formatFields() {
    return Object.entries(this.bookingData).map(field => `${field[0]}: ${field[1]} `)
  }

  sendForm() {
    this.$q.notify(`Собранные данные: ${this.formatFields()}`)

    this.$q.notify(`        
        Отлично! Мы свяжемся с вами, чтобы подтвердить заявку на активацию.
        Отдел бронирования работает по будням с 10:00 до 19:00.`)

    this.$router.push({
      name: 'Final'
    })
    }

  addChild() {
    this.bookingData.childrenWithAge.push(0)
  }

  formatDate(date) {
    if (!date) {
      return "Дата заезда"
    }
    return moment(date).format("DD.MM.YYYY")
  }

  get showchildrenList() {
    return this.bookingData?.childrenWithAge?.length ?? null
  }

  get showAddChildrenButtonCondition() {
    if (!this.bookingData?.childrenWithAge) return false
    return this.bookingData.childrenWithAge.length <= MAX_CHILDREN_COUNT
  }
}
</script>

<style scoped lang="stylus">

.input-wrapper {
  margin-bottom: 8px;
}

.booking-form {
  width: 100%;
  max-width: 744px;
  padding-left: 24px;
  padding-right: 24px;
  margin-left: auto;
  margin-right: auto;
}

.text-subtitle2 {
  font-size: 11px;
  max-width: 420px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4px;
}
</style>

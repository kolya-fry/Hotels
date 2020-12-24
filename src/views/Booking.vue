<template>
  <div>
    <Hotel :hotel="hotel" />

    Для активации сертификата заполните поля
    <form @submit.prevent="sendForm">
      <div>
        В какой отель отправимся
        <input type="text" v-model="hotelName"/>
      </div>
      <div>
        Дата заезда Необходимо активировать не позднее, чем за 7 дней до визита.
        Выбрать можно любые даты, кроме праздничных.
      </div>
      <div>
        Номер сертификата
        <input type="text" v-model="certificate"/>
      </div>
      <div class="">
        Ваше имя и фамилия
        <input type="text" v-model="name"/>
      </div>
      <div class="">
        <input type="checkbox" v-model="residents">
        Все гости являются гражданами РФ
      </div>
      <div>
        Кровать Одна двуспальная кровать
      </div>
      <div class="">
        Дети Если планируете отдых с детьми, то укажите их количество и возраст
      </div>
      <div class="">
        <input type="text" v-model="email" placeholder="Электронная почта">
      </div>
      <div class="">
        Телефон
        <input type="+7 (999) 999-99-99">
      </div>
      <div class="">
        <input type="checkbox" v-model="residents">
        Я согласен с условиями публичной оферты
      </div>
      <div>
        <input type="checkbox" v-model="residents">
        Я согласен с положением о защите персональных данных
      </div>
      <button class="main-button" type="submit">
        Активировать сертификат
      </button>
      <div>
        Отлично! Мы свяжемся с вами, чтобы подтвердить заявку на активацию.
        Отдел бронирования работает по будням с 10:00 до 19:00.
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import Hotel from "@/components/Hotel.vue";

@Component({
  components: {
    Hotel,
  },
})
export default class Booking extends Vue {

  hotelName: string = ''
  certificate: string = ''
  name: string = ''
  residents: boolean = true


  get hotel() {
    return this.$route.params.hotel;
  }

  sendForm() {
    console.log(this.hotelName)
    console.log(this.certificate)
  }
}
</script>

<style scoped lang="stylus"></style>

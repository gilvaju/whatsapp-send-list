<template>
  <div class="q-pa-md">

    <div class="row">
      <q-btn @click="sendForall" outline style="width: 100%; color: goldenrod;" label="Enviar mensagem para todos" />
    </div>

    <div class="q-pa-md" style="max-width: 350px">
      <q-list bordered separator>
        <template v-for="person in persons">
          <q-item @click="onClick(person.url)" clickable v-ripple>
            <q-item-section>{{ person.name }}</q-item-section>
          </q-item>
        </template>
      </q-list>
    </div>

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Nome"
        hint="Nome e Sobrenome"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Ops, digite algo!']"
      />

      <q-input
        filled
        type="number"
        v-model="phone"
        label="Número"
        hint="Número sem o +55, porém com o DDD e o 9º Dígito"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ops, digite algo',
          val => val.length === 11 || 'Ops, digite um número com 11 dígitos'
        ]"
      />

<!--      <q-toggle v-model="accept" label="I accept the license and terms" />-->

      <div>
        <q-btn label="Salvar" type="submit" color="primary"/>
        <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
export default {
  name: 'DataForm',
  data () {
    return {
      name: null,
      phone: null,
      persons: [],
      accept: false
    }
  },

  methods: {
    onClick (url) {
      window.open(url)
    },
    sendForall () {
      function urlOpen (element, index, array) {
        window.open(element.url)
      }
      this.persons.forEach(urlOpen)
    },
    onSubmit () {
      this.persons.push({
        name: this.name,
        phone: this.phone,
        url: 'http://wa.me/55' + this.phone
      })
    },

    onReset () {
      this.name = null
      this.phone = null
      this.accept = false
    }
  }
}
</script>

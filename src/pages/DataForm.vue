<template>
  <div class="q-pa-md">

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
        v-model="age"
        label="Número"
        hint="Número sem o +55, 84 e o 9º Dígito"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ops, digite corretamente',
          val => val.length <= 9 || 'Ops, digite um número com 8 dígitos',
          val => val.length >= 7 || 'Ops, digite um número com 8 dígitos'
        ]"
      />

<!--      <q-toggle v-model="accept" label="I accept the license and terms" />-->

      <div>
        <q-btn label="Submit" type="Salvar" color="primary"/>
        <q-btn label="Reset" type="Limpar" color="primary" flat class="q-ml-sm" />
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
      age: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

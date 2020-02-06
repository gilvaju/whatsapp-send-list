<template>
  <div class="q-pa-md">

    <div class="row q-mb-xl">
      <div class="col-12">
        <q-input
          v-model="message"
          filled
          type="textarea"
          class="q-mb-sm"
        />

        <q-btn @click="sendForall" color="primary" style="width: 100%;" label="Enviar mensagem para todos" />
      </div>
    </div>

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <div class="row justify-between">
        <div class="col-6">
          <q-input
            dense
            filled
            v-model="name"
            label="Nome"
            hint="Nome e Sobrenome"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Ops, digite algo!']"
          />
        </div>
        <div class="col-5"><q-input
          dense
          filled
          type="number"
          v-model="phone"
          label="Número"
          hint="DDD e o 9º Dígito"
          lazy-rules
          :rules="[
          val => val !== null && val !== '' || 'Ops, digite algo',
          val => val.length === 11 || 'Ops, digite um número com 11 dígitos'
        ]"
        />
        </div>
      </div>

<!--      <q-toggle v-model="accept" label="I accept the license and terms" />-->

      <div class="row justify-between text-right">
        <q-btn size="md" label="Adicionar número a lista" type="submit" style="width: 100%" outline color="dark"/>
      </div>
    </q-form>

    <div class="q-pa-md">
<!--      <q-toggle v-model="expanded" label="Expanded" class="q-mb-md" />-->

      <q-expansion-item
        v-model="expanded"
        icon="perm_identity"
        label="Listagem de Contatos"
        caption="Clique para visualizar"
      >

        <q-list bordered separator>
          <template v-for="person in persons">
            <q-item @click="onClick(person.url)" clickable v-ripple>
              <q-item-section>{{ person.name }}</q-item-section>
            </q-item>
          </template>
        </q-list>

      </q-expansion-item>
    </div>

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
      accept: false,
      expanded: true
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

<template>
  <div class="q-pa-md">

    <div class="row q-mb-sm">
      <p class="q-ma-none text-caption text-weight-light" style="font-size: 0.6rem">
        * Não armazenamos nenhum contato em nossos servidores
      </p>
    </div>

    <div class="row q-mb-xl">
      <div class="col-12">
        <q-input
          v-model="message"
          filled
          type="textarea"
          class="q-mb-sm"
          placeholder="Utilize [nome] para ser subistituído pelo nome do contato"
        />

        <q-btn @click="sendForall" class="p-mb-xl" color="primary" style="width: 100%;" label="Enviar mensagem para todos" />
      </div>
      <div class="col-12 q-mt-sm">
        <q-btn @click="importCsv" color="secondary" style="width: 100%;" label="Importar CSV" />
      </div>
    </div>

    <q-form
      @submit="onSubmit"
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
      persons: [{
        name: 'Gilvan Jr',
        phone: '84998271900',
        url: 'http://api.whatsapp.com/send?phone=5584998271900'
      }],
      accept: false,
      expanded: true,
      message: ''
    }
  },

  methods: {
    onClick (url) {
      window.open(url)
    },
    sendForall () {
      let message = this.message
      this.persons.forEach((element, index, array) => {
        let messageTransform = message.replace('[nome]', element.name)
        let messageEmcoded = encodeURI(messageTransform)
        window.open(element.url + '&text=' + messageEmcoded)
      }, message)
    },
    importCsv () {
      const allText = this.message
      alert(allText)

      // const allTextLines = allText.split(/\r\n|\n/)

      // const headers = allTextLines[0].split(',')
      // const lines = []

      // for (let i = 1; i < allTextLines.length; i++) {
      //   const data = allTextLines[i].split(',')
      //   if (data.length === headers.length) {
      //     const tarr = []
      //     for (let j = 0; j < headers.length; j++) {
      //       tarr.push(headers[j] + ':' + data[j])
      //     }
      //     lines.push(tarr)
      //   }
      // }
      // alert(lines)
    },
    onSubmit () {
      this.persons.push({
        name: this.name,
        phone: this.phone,
        url: 'http://api.whatsapp.com/send?phone=55' + this.phone
      })
      this.$q.notify({
        message: 'Número adicionado a lista',
        color: 'green'
      })
    }
  }
}
</script>

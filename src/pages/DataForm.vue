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
          dense
          type="textarea"
          class="q-mb-sm"
          placeholder="Utilize [nome] para ser subistituído pelo nome do contato"
        />
        <q-btn @click="sendForall" class="q-mb-sm" color="primary" style="width: 100%;" label="Enviar mensagem para todos" />
        <div class="row justify-between">
          <q-btn color="secondary" style="width: 45%;" label="Csv com ," @click="prompt1 = true" />
          <q-btn color="info" style="width: 45%;" label="Csv com ;" @click="prompt2 = true" />
        </div>
      </div>
    </div>

    <q-dialog v-model="prompt1" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
<!--          <div class="text-h6">Your address</div>-->
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input
            v-model="csvContent"
            filled
            dense
            type="textarea"
            class="q-mb-sm"
            placeholder="Cole aqui o conteúdo do seu arquivo csv separado por vírgulas"
          />
        </q-card-section>
        <q-card-actions align="center" class="text-primary justify-between">
          <q-btn outline label="Fechar" color="red" v-close-popup />
          <q-btn outline color="primary" label="Importar" @click="importCsv1" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="prompt2" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <!--          <div class="text-h6">Your address</div>-->
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input
            v-model="csvContent"
            filled
            dense
            type="textarea"
            class="q-mb-sm"
            placeholder="Cole aqui o conteúdo do seu arquivo csv separado por ponto e vírgulas"
          />
        </q-card-section>
        <q-card-actions align="center" class="text-primary justify-between">
          <q-btn outline label="Fechar" color="red" v-close-popup />
          <q-btn outline color="primary" label="Importar" @click="importCsv2" />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
      <div class="row justify-between text-right">
        <q-btn size="md" label="Adicionar número a lista" type="submit" style="width: 100%" outline color="dark"/>
      </div>
    </q-form>

    <div class="q-pa-md">
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
      expanded: true,
      message: '',
      csvContent: '',
      alert: false,
      confirm: false,
      prompt1: false,
      prompt2: false,
      address: ''
    }
  },

  methods: {
    onClick (url) {
      window.open(url
        .replace('(', '')
        .replace(')', '')
        .replace(' ', ''))
    },
    sendForall () {
      let message = this.message
      this.persons.forEach((element, index, array) => {
        let messageTransform = message.replace('[nome]', element.name)
        let messageEmcoded = encodeURI(messageTransform)
        window.open(element.url + '&text=' + messageEmcoded)
      }, message)
    },
    importCsv1 () {
      const allText = this.csvContent
      const allTextLines = allText.split(/\r\n|\n/)

      allTextLines.forEach((element, index, array) => {
        if (element !== 'nome,telefone') {
          const data = element.split(',')
          let number = data[1]
            .replace('(', '')
            .replace(')', '')
            .replace(' ', '')
          this.persons.push({
            name: data[0],
            phone: data[1],
            url: 'http://api.whatsapp.com/send?phone=55' + number
          })
        }
      })

      this.prompt = !this.prompt

      this.$q.notify({
        message: 'Conteúdo importado',
        color: 'green'
      })
    },
    importCsv2 () {
      const allText = this.csvContent
      const allTextLines = allText.split(/\r\n|\n/)

      allTextLines.forEach((element, index, array) => {
        if (element !== 'nome,telefone') {
          const data = element.split(';')
          let number = data[1]
            .replace('(', '')
            .replace(')', '')
            .replace(' ', '')
          this.persons.push({
            name: data[0],
            phone: data[1],
            url: 'http://api.whatsapp.com/send?phone=55' + number
          })
        }
      })

      this.prompt = !this.prompt

      this.$q.notify({
        message: 'Conteúdo importado',
        color: 'green'
      })
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

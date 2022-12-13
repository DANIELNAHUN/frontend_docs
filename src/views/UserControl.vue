<template>
  <div>
    <Header/>
    <v-card width="100%">
      <v-card-title>Documentos </v-card-title>
      <v-data-table :headers="headers"> </v-data-table>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn>Agregar</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import Header from '@/components/HeaderUserControl.vue';
export default {
  name: "UserControl",
  components:{
    Header,
  },
  data() {
    return {
      headers: [
        {
          text: "ID doc",
          align: "start",
          sortable: true,
          value: "name",
        },
        { text: "Tipo de Documento", value: "type_doc" },
        { text: "Fecha Inicio", value: "fec_i" },
        { text: "Fecha Final", value: "fec_f" },
        { text: "Fecha Retorno", value: "fec_r" },
        { text: "Descripcion", value: "desc" },
        { text: "Estado Doc", value: "estate_doc" },
      ],
    };
  },
};
</script>
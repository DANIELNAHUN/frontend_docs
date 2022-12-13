<template>
  <v-toolbar color="primary" dark>
    <v-avatar size="45">
      <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
    </v-avatar>

    <v-divider class="mx-4" vertical></v-divider>

    <v-spacer></v-spacer>

    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="yellow" v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list class="accent text-secondary">
        <v-list-item>
          <v-list-item-title>Datos de Usuario</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Cambiar Contraseña</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Cerrar Sesion</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script>
export default {
  name: "HeaderUser",
};
</script>
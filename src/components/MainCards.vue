<template>
  <div>
    <v-card
    class="mx-auto my-12"
    max-width="380">
    <v-img
    height="250"
    src="https://www.lidercontab.com/wp-content/uploads/Vacaciones.jpg"></v-img>
      <v-card-title>Gestion de Permisos</v-card-title>
      <v-card-text>Vacaciones</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn to="/form">Ingresar</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default{
  name: "MainCards",
}
</script>
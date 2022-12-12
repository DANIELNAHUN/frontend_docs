<template>
  <div>
    <v-card class="mx-auto py-2" max-width="350">
      <v-img src="https://www.bopapier.ch/sources/img/login.png" height="250">
      </v-img>
      <v-card-title> Inicio de Sesion </v-card-title>
      <v-text-field
        label="Usuario"
        :rules="[rules.required]"
        class="input-group--focused px-3"
      >
      </v-text-field>
      <v-text-field
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show ? 'text' : 'password'"
        name="input-10-2"
        label="Contraseña"
        hint="At least 8 characters"
        value=""
        class="input-group--focused px-3"
        @click:append="show = !show"
      ></v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn to="/main" text color="deep-purple accent-4"> Ingresar </v-btn>
        <v-btn text color="blue darken-3"> Crear Usuario </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
};
</script>
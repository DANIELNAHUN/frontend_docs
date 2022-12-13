<template>
  <v-toolbar color="black" dark>
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

      <v-list>
        <v-list-item>
          <v-list-item-title>Click Me 1</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Click Me 2</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Click Me 3</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Click Me 4</v-list-item-title>
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
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
      themes:{
        light:{
          primary: '#0D0B0E',
          secondary: '#9897A7',
          accent: '#BFB39B',
          error: '#9D153B',
          info: '#A79B8D',
          success: '#313F59',
          warning: '#D9C9B9',
        },
      },
      options:{ customProperties: true}
    },
  });
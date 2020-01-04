import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#ffcc80',
        accent: '#FFE082',
        info: colors.lightBlue,
        success: '#00e676',
        error: '#ff5252'
      },
    }
  },
});

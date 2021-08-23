import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'

//Phải import cái fontawesome này vào nhá nhưng đầu tiên cần phải cài đặt
import '@fortawesome/fontawesome-free/css/all.css'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'

export default createVuetify({
  components,
  directives,
})

import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
import 'vuetify/styles'
import { mdiCheckBold, mdiLock, mdiRun } from '@mdi/js'

export default createVuetify({
    components: {
        ...components,
        VSkeletonLoader
    },
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases: {
            ...aliases,
            checkCircle: mdiCheckBold ,
            lock: mdiLock,
            active: mdiRun
        },
        sets: {
            mdi,
        },
    },
})

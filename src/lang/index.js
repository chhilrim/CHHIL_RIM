import { createI18n } from 'vue-i18n'

import en from './en/en.js'
import kh from './kh/kh.js'
const languages = createI18n({
    locale: 'kh',
    fallbackLocale: 'en',
    messages: {
        en,
        kh
    }
})

export default languages;

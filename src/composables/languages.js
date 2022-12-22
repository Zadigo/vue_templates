import { onBeforeMount, ref, watch } from "vue"
import i18n from "@/i18n"

export function useLanguage () {
  const selectedLanguage = ref('fr')
  const languages = ['fr', 'en']
  onBeforeMount (() => {
    const previousSelection = localStorage.getItem('language')
    selectedLanguage.value = previousSelection ? previousSelection : 'fr'
    i18n.global.locale = selectedLanguage.value
  })

  watch(selectedLanguage, (current) => {
    localStorage.setItem('language', current)
  })
  
  function changeLanguage (language) {
    selectedLanguage.value = language
    i18n.global.locale = selectedLanguage.value
  }
  
  return {
    selectedLanguage,
    languages,
    changeLanguage
  }
}

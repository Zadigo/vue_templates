import { defineStore } from 'pinia'
import logicalFallacies from '@/data/logical_fallacies.json'

const useLinkedin = defineStore('linkedin', {
  state: () => ({
    articles: logicalFallacies
  })
})

export {
  useLinkedin
}

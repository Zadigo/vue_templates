import { client } from '@/plugins/axios'
import { ref } from 'vue'

export default function useProducts () {
  const products = ref([])

  async function getProducts () {
    try {
      const response = await client.get('https://fakestoreapi.com/products')
      products.value = response.data
    } catch (error) {
      console.log(error)
    } 
  }

  async function getProduct () {

  }

  return {
    getProducts,
    getProduct,
    products
  }
}


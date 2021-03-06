import api from './apiConfig'

export const getProducts = async () => {
  try {
      const response = await api.get('/products')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getProduct = async id => {
  try {
      const response = await api.get(`/products/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createProduct = async product => {
  try {
      const response = await api.post('/add', product)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateProduct = async (id, product) => {
  try {
      const response = await api.put(`/products/edit/${id}`, product)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteProduct = async id => {
  try {
      const response = await api.delete(`/products/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}
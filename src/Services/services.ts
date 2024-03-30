import Api from './Api'

export const getAllContracts = async () => {
  const response = await Api.get('/contracts?_sort=perPayment&_order=asc')
  return response.data
}
export const newCashKick = async (data: any) => {
  try {
    const response = await Api.post('/cashkicks', data)
    return response
  } catch (error) {
    console.log(error)
  }
}
export const newPayments = async (data: any) => {
  try {
    const response = await Api.post('/payments', data)
    return response
  } catch (error) {
    console.log(error)
  }
}
export const getAllPayments = async () => {
  const res = await Api.get('/cashkicks')
  return res.data
}

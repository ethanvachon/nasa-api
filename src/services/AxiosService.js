import axios from 'axios'

export const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/'
})



// 483EbwwjFiW4JpZkFEDcrPhcL2g84f2rrs1oeljw
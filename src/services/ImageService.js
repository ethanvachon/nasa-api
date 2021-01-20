import {AppState} from "../AppState"
import {nasaApi} from "./AxiosService"

class ImageService {
  async findApodImage(date){
    try {
      const res = await nasaApi.get("planetary/apod?api_key=483EbwwjFiW4JpZkFEDcrPhcL2g84f2rrs1oeljw&date="+date)
      AppState.apod = res.data
    } catch (error) {
      console.error(error)
    }
  }
  async findMarsImage(date){
    try {
      const res = await nasaApi.get("mars-photos/api/v1/rovers/curiosity/photos?sol="+date+"&camera=fhaz&api_key=483EbwwjFiW4JpZkFEDcrPhcL2g84f2rrs1oeljw")
    AppState.mars = res.data.photos[0].img_src
    } catch (error) {
      console.error(error)
    }
    
  }
}

export const imageService = new ImageService()
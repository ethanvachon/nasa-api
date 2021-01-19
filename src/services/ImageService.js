import {AppState} from "../AppState"
import {nasaApi} from "./AxiosService"

class ImageService {
  async findApodImage(date){
    try {
      const res = await nasaApi.get("apod?api_key=483EbwwjFiW4JpZkFEDcrPhcL2g84f2rrs1oeljw&date="+date)
      AppState.apod = res.data.url
    } catch (error) {
      console.error(error)
    }
  }
}

export const imageService = new ImageService()
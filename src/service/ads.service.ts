import axios from "axios"
import { IAds } from "../types/ads.type"

export const adsService = {

  async getAll(startAds: number, limitAds: number) {
    const response = await axios.get<IAds[]>(`https://jsonplaceholder.typicode.com/todos?_start=${startAds}&_limit=${limitAds}`)

    return response
  },
}
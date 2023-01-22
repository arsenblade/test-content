import {Dispatch} from 'redux'
import { adsService } from "../../service/ads.service"
import { AdsAction, AdsActionTypes } from "../reducers/adsReducer.type"

export const fetchAds = (startAds: number, limitAds: number) => {
  return async (dispatch: Dispatch<AdsAction>) => {
    try {
      dispatch({type: AdsActionTypes.FETCH_ADS})
      const response = await adsService.getAll(startAds, limitAds)
      dispatch({type: AdsActionTypes.FETCH_ADS_SUCCESS, payload: response.data})
    } catch (e) {
      dispatch({type: AdsActionTypes.FETCH_ADS_ERROR, payload: 'Произошла ошибка при загрузке объявлений'})
    }
  }
}
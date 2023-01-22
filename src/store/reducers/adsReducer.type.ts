import { IAds } from "../../types/ads.type"

export enum AdsActionTypes {
  FETCH_ADS = 'FETCH_ADS',
  FETCH_ADS_SUCCESS = 'FETCH_ADS_SUCCESS',
  FETCH_ADS_ERROR = 'FETCH_ADS_ERROR',
}


export interface AdsState {
  ads: IAds[],
  loading: boolean,
  error: null | string,
}

interface FetchAdsAction {
  type: AdsActionTypes.FETCH_ADS
}

interface FetchAdsActionSuccess {
  type: AdsActionTypes.FETCH_ADS_SUCCESS,
  payload: IAds[]
}

interface FetchAdsActionError {
  type: AdsActionTypes.FETCH_ADS_ERROR,
  payload: string
}

export type AdsAction = FetchAdsAction | FetchAdsActionSuccess | FetchAdsActionError
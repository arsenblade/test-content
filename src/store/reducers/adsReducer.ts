import { AdsAction, AdsActionTypes, AdsState } from "./adsReducer.type"

const initialState: AdsState = {
  ads: [],
  loading: false,
  error: null
}



export const adsReducer = (state = initialState, action: AdsAction): AdsState => {
  switch(action.type) {
    case AdsActionTypes.FETCH_ADS:
      return {loading: true, error: null, ads: state.ads}
    case AdsActionTypes.FETCH_ADS_SUCCESS:
        return {loading: false, error: null, ads: [...state.ads, ...action.payload]}
    case AdsActionTypes.FETCH_ADS_ERROR:
      return {loading: false, error: action.payload, ads: state.ads}
    default:
      return state
  }
}
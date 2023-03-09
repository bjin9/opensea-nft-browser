import {createSlice} from '@reduxjs/toolkit'


export const SettingsSlice = createSlice({
  name: 'settings',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: {
    lang: 'EN',
  },
  reducers: {
    setLang: (state, {payload}) => {
      state.lang = payload
    }
  },
})

export const settingsSelector = (state) => state.settings
export const {setLang} = SettingsSlice.actions
export default SettingsSlice.reducer
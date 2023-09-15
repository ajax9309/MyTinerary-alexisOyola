import { configureStore } from '@reduxjs/toolkit'
import getCities from './reducers/cityReduce.js'

const store = configureStore({
  reducer: {
    getCities:getCities
  }
})

export default store
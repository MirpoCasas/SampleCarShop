import { configureStore } from '@reduxjs/toolkit'
import userDataSlice from './slices/userData.slice'

export default configureStore({
  reducer: {
    userData: userDataSlice
	}
})
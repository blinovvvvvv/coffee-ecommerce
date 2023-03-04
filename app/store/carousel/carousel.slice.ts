import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ICarouselInitialState } from '@/store/carousel/carousel.types'

const initialState: ICarouselInitialState = {
	selectedItemIndex: 0
}

export const carouselSlice = createSlice({
	name: 'carousel',
	initialState,
	reducers: {
		nextSlide: (state, action: PayloadAction<{ carouselLength: number }>) => {
			if (state.selectedItemIndex !== action.payload.carouselLength - 1)
				state.selectedItemIndex++
		},
		prevSlide: state => {
			if (state.selectedItemIndex > 0) state.selectedItemIndex--
		},
		selectSlide: (state, action: PayloadAction<number>) => {
			state.selectedItemIndex = action.payload
		}
	}
})

export const carouselReducer = carouselSlice.reducer

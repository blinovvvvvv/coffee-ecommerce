import { useTypedSelector } from '@/hooks/useTypedSelector'

export const useCarousel = () => {
	const index = useTypedSelector(state => state.carousel.selectedItemIndex)

	return { index }
}

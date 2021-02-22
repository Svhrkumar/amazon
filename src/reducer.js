export const initialState = {
	basket: [],
	user: null,
};
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'ADD_ITEM':
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case 'REMOVE_ITEM':
			//cloned basket
			let newBasket = [...state.basket];
			const index = state.basket.findIndex((bi) => bi.id === action.id);
			if (index >= 0) {
				//item exist remove it
				newBasket.splice(index, 1);
			} else {
				console.warn(`can't remove item ${action.id}`);
			}
			return { ...state, basket: newBasket };

		default:
			return state;
	}
};
export default reducer;

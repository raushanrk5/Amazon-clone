export const initialState = {
    basket: [],
    user:null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state,action){
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }

        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
             }
            break;
        
        case 'REMOVE_FROM_BASKET':

        //we cloned the basket
        let newBasket = [...state.basket];
        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
        
        if(index >= 0){
            //remove the item from the basket
            newBasket.splice(index,1);
        }
        else{
            console.warn(
                `Can't remove product (id: ${action.id}) as it's not in the basket.`
            );
        }
        return {
            ...state,
            basket:newBasket, 
         };
            break;

        default:
            return state;
    }
}

export default reducer;
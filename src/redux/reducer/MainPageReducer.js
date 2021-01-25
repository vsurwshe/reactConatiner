const initialState={
    price:[],
    featuers:[]
}

const MainPageState=(state=initialState, action)=>{
    switch (action && action.type) {
        case "SAVE_FEATUERS_LIST":
            return {...state, featuers:action.featuersList}
        case "SAVE_PRICE_LIST":
            return {...state, price:action.priceList}
        default:
            return state;
    }
}

export default MainPageState;
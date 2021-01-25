import { CreateInstance } from "../../assest/config/APIConfig"

// this method will get features list
const GetFeaturesList=()=>{
    return (dispatch)=>{
        return CreateInstance()
        .get("featuers/features.php")
        .then(response=> (response && response.data && response.data.length > 0) && dispatch(saveFeatuersList(response.data)))
        .catch(error=> console.error("Error ", error))
    }
}

// this method will helpt to get price list
const GetPriceList=()=>{
    return (dispatch)=>{
        return CreateInstance()
        .get("featuers/features.php?operation=PRICE")
        .then(response=> (response && response.data && response.data.length > 0) && dispatch(savePriceList(response.data)))
        .catch(error=> console.error("Error ", error))
    }
}

// ---------------------------------------

export function saveFeatuersList(featuersList) {
    return {
        type:"SAVE_FEATUERS_LIST",
        featuersList
    }
}

export function savePriceList(priceList) {
    return {
        type:"SAVE_PRICE_LIST",
        priceList
    }
}

export{
    GetFeaturesList,
    GetPriceList
}
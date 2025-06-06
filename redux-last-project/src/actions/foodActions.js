import {FETCH_FOOD_LIST,FETCH_FOOD_FIND,FETCH_FOOD_DETAIL} from './types'
import axios from "axios";

export const fetchFoodList = (page) => dispatch => {
    axios.get('http://localhost:3000/food/list',{
        params:{
            page: page
        }
    }).then(res => {
        const action={
            type:FETCH_FOOD_LIST,
            payload:res.data
        }
        dispatch(action)
    })
}
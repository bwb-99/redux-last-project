import {Fragment,useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFoodList} from "../../actions/foodActions";
import {Link} from "react-router-dom";

function FoodList(){
    //action 함수호출 => reducer => store
    const dispatch = useDispatch();
    const [curpage, setCurpage] = useState(1);
    useEffect(() => {
        //리렌더링
        dispatch(fetchFoodList(curpage));
    },[curpage]);
    FoodList = () => {}
    return(
        <Fragment>

        </Fragment>
    )
}
export default FoodList;
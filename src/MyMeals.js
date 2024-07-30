import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const MyMeals = ({text, updatingInInput, deleteMeal}) =>{
    return(
        <div>
            <p>{text}</p>
            <CiEdit onClick = {updatingInInput}/>
            <MdDeleteOutline onClick = {deleteMeal}/>
        </div>
    )
}
export default MyMeals;

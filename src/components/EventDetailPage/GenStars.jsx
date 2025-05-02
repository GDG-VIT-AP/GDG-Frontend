import StarIcon from "../../assets/star.svg";  // Adjust the path based on your folder structure

export const Stars = ({rating}) =>{

    if(rating > 5 ||rating < 0){
        console.log("Invalid Rating");
        return;
    }

    return<div className="flex items-center justify-center w-full">
    {(Array.from({ length: rating || 5 })).map((star) => (
        <div key={star} className="flex items-center justify-center ">
        <img src={StarIcon} alt="Star icon"/>
    </div>
    ))}
    </div>
}
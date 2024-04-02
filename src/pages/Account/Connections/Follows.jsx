import { useParams } from "react-router-dom";

export const Follows = ({followType}) => {
    let { userId } = useParams();

    return (
        <>
            <h1>{followType} for User {userId}</h1>
        </>
    )
}
import {Link} from "@tanstack/react-router";
import {IToy} from "@models/IToy.ts";

export const ToyListItem = (props: { item: IToy }) => {
    return (
        <>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <Link to={`/toys/${props.item.id}`}>View</Link>
        </>
    );
}

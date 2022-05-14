import { BodyContainer, CountdownContainer, IconContainer, SideBarContaner } from "./Body.style";
import { BsXCircle, BsJustify } from "react-icons/bs"
import { useState } from "react";

const Body = () => {
    const [isExpand, setIsExpand] = useState(true);

    return (<BodyContainer>

        <SideBarContaner isExpand={isExpand}>
            <IconContainer onClick={() => setIsExpand(!isExpand)}>
                {isExpand ? <BsXCircle /> : <BsJustify />}
            </IconContainer>
        </SideBarContaner>

        <CountdownContainer></CountdownContainer>
    </BodyContainer>);
}

export default Body;
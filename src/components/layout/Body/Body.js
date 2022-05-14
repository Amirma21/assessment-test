import { BodyContainer, Number,CountdownContainer, IconContainer, Indicator, SideBarContaner, Title, Span } from "./Body.style";
import { BsXCircle, BsJustify } from "react-icons/bs"
import { useState } from "react";
import {useCount} from "../../Context/CountProvider"


const Body = () => {
    const counter = useCount()


    const [isExpand, setIsExpand] = useState(true);

    return (<BodyContainer>

        <SideBarContaner isExpand={isExpand}>
            <IconContainer onClick={() => setIsExpand(!isExpand)}>
                {isExpand ? <BsXCircle /> : <BsJustify />}
            </IconContainer>
        </SideBarContaner>

        <CountdownContainer>
            <Title>
                Countdown
            </Title>
            <Number>
                {counter}
            </Number>
            <Indicator>
                <div  style={{ width: `${counter}%` }}><Span></Span></div>
            </Indicator>
        </CountdownContainer>
    </BodyContainer>);
}

export default Body;
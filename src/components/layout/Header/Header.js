import { TimeContainer, NavbarContainer, Text } from "./Header.style";
import { useCount } from "../../Context/CountProvider"

const Header = () => {
    const counter = useCount()

    return (
        <NavbarContainer>
            <TimeContainer>
                <Text> The time left : {counter}</Text>
            </TimeContainer>
        </NavbarContainer>
    );
}

export default Header;
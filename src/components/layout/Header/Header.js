import { TimeContainer, NavbarContainer, Text } from "./Header.style";

const Header = () => {
    return (
        <NavbarContainer>
            <TimeContainer>
               <Text> The time left :</Text>
            </TimeContainer>
        </NavbarContainer>
    );
}

export default Header;
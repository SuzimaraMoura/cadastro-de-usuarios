import { Background} from "./style";
import UsersImage from "../../assets/users.png";

function TopBackground() {
    return(
      <Background>
        <img src={UsersImage} alt="imagem-usúarios" />
      </Background>
    )
}
export default TopBackground
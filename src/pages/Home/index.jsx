import { useRef } from "react";
import api from '../../services/api'
import { useNavigate} from "react-router-dom";
import {
  Title,
  Container,
  Form,
  ContainerInputs,
  Input,
  InputLabel,
} from "./styles";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground/"


function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    await api.post('/usuarios', {
      name:inputName.current.value,
      age: parseInt(inputAge.current.value),
      email:inputEmail.current.value
    })

    navigate('/lista-de-usuarios')
    // console.log(inputName.current.value)
  }
  return (
    <Container>
      <TopBackground/>

      <Form>
        <Title>Cadastrar Usúario</Title>
        <ContainerInputs>
          <div>
            <InputLabel>
              Nome <span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usúario" ref={inputName }/>
          </div>

          <div>
            <InputLabel>
              Idade <span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do usúario" ref={inputAge}/>
          </div>
        </ContainerInputs>

        <div style={{width:'100%'}}>
          <InputLabel>
            E-mail <span> *</span>
          </InputLabel>
          <Input type="email" placeholder="Email do usúario" ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">Cadastrar Usúario</Button>
      </Form>

      <Button type="button" onClick={()=>navigate('/lista-de-usuarios')} >Ver Lista de Usuários</Button>
    </Container>
  );
}

export default Home;

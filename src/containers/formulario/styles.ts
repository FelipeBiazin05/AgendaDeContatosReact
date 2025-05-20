import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Campo = styled.input`
  background-color: transparent;
  border: 1px solid ${variaveis.corSecundaria};
  width: 50%;
  display: block;
  margin: 0 auto;
  padding: 16px;
  margin-bottom: 12px;
  color: ${variaveis.corSecundaria};

  &::placeholder {
    color: white;
    text-align: center;
  }
`

export const BotaoCadastrar = styled.button`
  background-color: ${variaveis.corBotaoSalvar};
  color: ${variaveis.corSecundaria};
  width: 50%;
  padding: 12px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  border: 1px solid ${variaveis.corSecundaria};
  font-weight: bold;

  &:hover {
    background-color: rgb(29, 150, 13);
  }
`

export const LinkVoltar = styled.a`
  border: 1px solid ${variaveis.corSecundaria};
  color: ${variaveis.corSecundaria};
  padding: 12px;
  text-decoration: none;
  font-size: 12px;
`

import { BotaoCadastrar, Campo, LinkVoltar } from "./styles"

const Form = () => {
  return (
    <>
      <form>
        <Campo type="text" placeholder="Seu nome completo"/>
        <Campo type="email" placeholder="Seu e-mail"/>
        <Campo type="tel" placeholder="Seu telefone"/>
        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
        <LinkVoltar href="#">Ir para agenda de contatos</LinkVoltar>
      </form>
    </>
  )
}

export default Form

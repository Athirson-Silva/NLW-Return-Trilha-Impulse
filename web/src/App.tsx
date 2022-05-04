//Interface para declarar os tipos que o props da função receberá, 
//e obriga que a função seja declarada fazendo uso de todas as props sem "?"
interface ButtonProps {
  text: string;
  azeite?: DoubleRange;
}

//Desestruturação do props, pegando somente o valor do objeto props
function Button({text}: ButtonProps) {
  console.log(text)

  return <button>text</button>
}


function App() {

  return (
    <div>
      <h1>Hello world!</h1>
  
      <Button text="Enviar" />
      <Button text="Ok" />
    </div>
  )
} //TSX

export default App

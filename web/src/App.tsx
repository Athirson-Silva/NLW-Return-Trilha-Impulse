//Interface para declarar os tipos que o props da função receberá, 
//e obriga que a função seja declarada fazendo uso de todas as props sem "?"
interface ButtonProps {
  text: string;
  azeite?: DoubleRange;
}

//Desestruturação do props, pegando somente o valor do objeto props
function Button({text}: ButtonProps) {
  console.log(text)

  return <button className="bg-violet-500 p-2 h-8 rounded text-violet-100 hover:bg-violet-800">{text}</button>
}


function App() {

  return (
    <div>
      <h1>Hello world!</h1>
      <div className="flex gap-2">
      <Button text="Enviar" />
      <Button text="Ok" />
      </div>
    </div>
  )
} //TSX

export default App

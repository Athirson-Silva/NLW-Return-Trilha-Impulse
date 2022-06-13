import { FeedbackType, feedbackTypes } from "../Index";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
    setFeedbackTypeHandler: (type: FeedbackType) => void;
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
    return (
        //Fragment
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu feedback!</span>

                <CloseButton />
            </header>

            <div className='flex py-8 gap-2 w-full'>
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    //console.log(value)
                    //Flex 1 - w se adaptara a largura do elemento caso o elemento por fora (div) for maior que 24
                    //Sempre que usamos .map precisamos passar uma key no retorno, pro react diferenciar os retornos em uma futura manipulação
                    //No on click usamos uma arrow function, pois chamar a função com setFeedbackType executaria ela na linha do OnClick, e não passaria a função em si, sim seu retorno.
                    return (
                        <button
                            key={key}
                            className='bg-zinc-800 rounded-xl py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
                            onClick={() => props.setFeedbackTypeHandler(key as FeedbackType)}
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title} </span>
                        </button>
                    )
                })}
            </div>
        </>
    );
}
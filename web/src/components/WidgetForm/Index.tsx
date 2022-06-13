import { CloseButton } from '../CloseButton'

import bugImageUrl from "../../assets/Bug.svg"
import ideaImageUrl from '../../assets/Idea.svg'
import thoughtImageUrl from '../../assets/Thought.svg'
import { useState } from 'react'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'
import { FeedbackSucessStep } from './Steps/FeedbackSucessStep'

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto (bug)'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    },

}
//type of seleciona o tipo de cada elemento dos tipos, e o keyof a key destes => "BUG" | "IDEA" | "OTHER"
export type FeedbackType = keyof typeof feedbackTypes;

//{ Object.entries(feedbackTypes) } => [ ['BUG', {conteúdo do objeto}], [...], [...]]
export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);

    function restartFeedbackHandle() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        //calc(100vw-2rem calculo para definir o tamanho do form, 100 viewport width - 2rem, md:w-auto tamanhos de tela médios+
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ?
                <FeedbackSucessStep onFeedbackRestartRequested={restartFeedbackHandle} /> :
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep setFeedbackTypeHandler={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestart={restartFeedbackHandle}
                            onFeedbackSent={() => setFeedbackSent(true)} />
                    )}
                </>
            }

            <footer className="text-xs text-neutral-400">
                <span>Feito com ♥ pela <a className="underline underline-offset-2" target="_blank" href="https://www.rocketseat.com.br">Rocketseat</a> e <a className="underline underline-offset-2" target="_blank" href="https://www.linkedin.com/in/athirson/" >Eu</a></span>
            </footer>
        </div>
    )
}
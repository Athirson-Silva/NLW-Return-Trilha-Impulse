import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from './WidgetForm/Index';

//React observa os estados, e quando o estados mudarem o React renderiza o componante novamente

export function WidgetButton() {
    /*Nome da variável do estado, função que altera o estado
const [isWidgetOpen, setIsWidgetOpen] = useState(false)

function toggleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen);
}
Mas usaremos a biblioteca headlessui para cuidar da acessibilidade e dessa função 
*/

    return (
        <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>

            <Popover.Button className='bg-brand-500 text-white rounded-full px-3 h-12 flex items-center group'>
                <ChatTeardropDots className='w-6 h-6 ' />

                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}
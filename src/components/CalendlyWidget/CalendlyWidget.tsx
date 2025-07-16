import {InlineWidget} from 'react-calendly';


export const CalendlyWidget = () => {
    return (
        <>
            <div className="w-full h-[630] rounded-xl shadow-md overflow-hidden">
                <InlineWidget url="https://calendly.com/mariano-andres1024/30min"></InlineWidget>
            </div>

        </>
    )
}
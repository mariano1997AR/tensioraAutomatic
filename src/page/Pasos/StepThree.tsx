
interface Props {
    onBack: () => void;
}




export const StepThree = ({onBack}:Props)=>{
    return(
        <>
            <div className="p-4 border rounded shadow">
                <h2 className="text-xl font-bold mb-2">Paso 2</h2>
                <p>Esta es la segunda ventana.</p>
                <button onClick={onBack} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
                    siguiente
                </button>
            </div>
        
        </>
    )
}
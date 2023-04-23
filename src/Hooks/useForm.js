import { useState } from "react";


export const useForm = ( defaultData = {} ) => {

    const [datos, setdatos] = useState( defaultData );

    const hundleReset = () => setdatos( defaultData );
    
    const hundleChange = e => {
        setdatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    return {
        ...datos,
        hundleChange,
        hundleReset 
    }
}

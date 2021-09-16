import { useState } from "react"
import SmokingService from "../services/SmokingService"

const SmokingComponent = () => {
    const [cigaretes, setCigarettes] = useState<number>(() => {
        return SmokingService.getCigaretes()
    })

    const addCigarette = () => {
        const newValue = SmokingService.addCigarette()
        setCigarettes(newValue)
    }

    return <>
        <p style={{ display: 'flex', justifyContent: 'space-evenly' }}> Cigarillos en el dia : {cigaretes || 0}  <button onClick={addCigarette}>Add</button> </p>
    </>
}

export default SmokingComponent
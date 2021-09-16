import { ID_PREFIX } from "./ItemsService";

class SmokingService {

    getCigaretes = () : number => {
        const value = localStorage.getItem(`${ID_PREFIX}_cigarettes`) 
        return value ? Number.parseInt(value, 10) : 0
    }

    addCigarette() : number{
        const newValue = this.getCigaretes() + 1
        localStorage.setItem(`${ID_PREFIX}_cigarettes`, newValue.toString() )
        return newValue
    }
}

export default new SmokingService()
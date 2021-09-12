import { FormEvent, useState } from "react"
import ItemsService from "../services/ItemsService"

const AddItemForm = ({ onFinish }: { onFinish: () => void }) => {
    const [name, setName] = useState('')


    const createItem = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        ItemsService.add({ id: name, value: 'false' })
        onFinish()
    }

    return <>
        <p>Agregar un item</p>
        <form className="add-item-form" onSubmit={createItem}>
            <input
                className="input-add-item"
                placeholder="Nombre"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
           
            <button type="submit">Agregar</button>
        </form>
    </>
}

export default AddItemForm
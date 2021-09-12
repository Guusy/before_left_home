import Toggle from 'react-toggle'
import "react-toggle/style.css"
import ItemsService, { Item, ID_PREFIX } from '../services/ItemsService'

const ItemComponent = ({ item, onDelete }: { item: Item, onDelete: () => void }) => {
    const [, label] = item.id.split(`${ID_PREFIX}_`)
    const onChange = ({ target: { checked } }: any) => {
        ItemsService.update({ id: item.id, value: `${checked}` })
    }
    const deleteItem = () => {
        ItemsService.delete(item.id)
        onDelete()
    }

    return <div className="item-container">
        {label}
        <Toggle
            defaultChecked={JSON.parse(item.value)}
            onChange={onChange} />

        <button onClick={deleteItem}> X </button>
    </div>
}

export default ItemComponent
import { Item } from "../services/ItemsService"
import ItemComponent from "./ItemComponent"


const ItemsList = ({ items, refreshList }: { items: Item[], refreshList: () => void }) => {

    return <div>
        {
            items?.map(item => <ItemComponent key={item.id} item={item} onDelete={refreshList} />)
        }
    </div>
}

export default ItemsList
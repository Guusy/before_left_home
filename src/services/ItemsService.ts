
export type Item = {
    id: string,
    value: string
}

export const ID_PREFIX = 'before_left'
class ItemsService {

    getAll() : Item[] {
        const items = { ...localStorage };
        console.log();
        const itemsArray = Object.keys(items).filter(key => key.includes('before_left')).map(key => ({
            id: key,
            value: items[key]
        }))
        console.log(itemsArray);
        
        return itemsArray
    }

    add({ id, value }: { id: string, value: string }) {
        localStorage.setItem(`${ID_PREFIX}_${id}`, value)
    }

    update({ id, value }: { id: string, value: string }) {
        localStorage.setItem(id, value)

    }

    delete(id: string) {
        localStorage.removeItem(id)
    }
}

export default new ItemsService()
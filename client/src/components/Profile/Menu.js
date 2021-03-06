import React, {useState} from 'react'
import MenuItem from './MenuItem'
import CreateMenuItem from './CreateMenuItem'


function Menu({ identification, username, menuItems, setMenuItems, itemsToBeDeleted, setItemsToBeDeleted, setTempMenuItems, tempMenuItems, setModified}) {
    const [count, setCount] = useState(0);

    const createMenuItem = (data) =>  {
        
        let tItems = [...tempMenuItems];
        let mItems = [...menuItems];
        tItems.push(data)
        mItems.push(data)
        setMenuItems(mItems)
        setTempMenuItems(tItems)
        setCount(count + 1);
        console.log('createItem', menuItems)
        setModified(true)
    }

    const deleteMenuItem = async (dbID,itemID ) =>{
        console.log(dbID,itemID)
        let deletedItems = itemsToBeDeleted;
        deletedItems.push(dbID)
        setItemsToBeDeleted(deletedItems)  
        console.log(itemID)
        let items = menuItems;
        console.log(items)
        items.splice(itemID,1);
        setMenuItems(items)
        setCount(count + 1)
        setModified(true)
    }

    return (
        <>
            <div className="profile-header">Menu Items</div>
            <div className ="menu-container">
                {menuItems.length > 0 ? menuItems.map((element,index) => <MenuItem key={index} title={element.title} description={element.description} price={element.price} picture={element.picture} username={element.username} itemNum={index} menuItems={menuItems} setMenuItems={setMenuItems} dbID={element._id} deleteMenuItem={deleteMenuItem}/>) : <>No Menu Items</>}
                <CreateMenuItem identification={identification} username={username} itemsToBeDeleted={itemsToBeDeleted} setItemsToBeDeleted = {setItemsToBeDeleted} createMenuItem={createMenuItem}/>
            </div>
        </>
    )
}

export default Menu

//Action que adciona um novo item
const addItemAction = (item)=>{
    return {type:"ADD_ITEM",payload:item}
}

module.exports = {addItemAction}
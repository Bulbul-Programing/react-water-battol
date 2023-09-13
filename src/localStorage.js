const getLocalStore = () => {
    const localStore = localStorage.getItem('cart');
    if(localStore){
        const localdata = JSON.parse(localStore)
        return localdata
    }
    else{
        return [];
    }
}

const addLocalStore = (data) => {
    const getData = getLocalStore()
    getData.push(data)
    const setData = JSON.stringify(getData)
    localStorage.setItem('cart', setData)
}

export {getLocalStore, addLocalStore}
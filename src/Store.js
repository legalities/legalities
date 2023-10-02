import { proxy } from "valtio";

const store = proxy({
    // all states components
    sampleState: "Type in above input",

    xp:300,

    // 1 english
    // 2 hindi
    currLanguage: 1,

    mascotDialog: "Hey there",
    userprogress: 1
})

export function updatesamplestate( val ) {
    store.sampleState = val
}

export function updateXp( val ) {
    store.xp = val
}

export function UserProgress( val ) {
    store.userprogress = val
}




export default store;
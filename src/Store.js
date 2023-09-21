import { proxy } from "valtio";

const store = proxy({
    // all states components
    sampleState: "Type in above input"
})

export function updatesamplestate( val ) {
    store.sampleState = val
}

export default store;
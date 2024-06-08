import {createStore} from "redux";

const INITIAL_VALUE = {
  value: 0,
  privacy: false
}
const counterReducer = (store=INITIAL_VALUE, action) => {
  let newStore = store;
  if(action.type === "INCREMENT"){
    newStore = {...store, value: newStore.value + 1}
  }
  else if(action.type === "DECREMENT"){
    newStore = {...store, value: newStore.value - 1}
  }  else if(action.type === "ADD"){
    newStore = {...store, value: newStore.value + Number(action.payload.num)}
  }else if(action.type === "SUBTRACT"){
    newStore = {...store, value: newStore.value - Number(action.payload.num)}
  }else if(action.type === "PRIVACY_TOGGLE"){
    newStore = {...store, privacy: !newStore.privacy}
  }
  return newStore;
}
const store = createStore(counterReducer);

export default store;
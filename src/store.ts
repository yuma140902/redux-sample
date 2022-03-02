import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import { filterReducer } from "./filter/reducer";
import { todoListReducer } from "./todolist/reducer";

const reducer = combineReducers({
  filter: filterReducer,
  tasks: todoListReducer,
});

const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// 型付きの`useDispatch`と`useSelector`
// see: [Usage With TypeScript | Redux](https://redux.js.org/usage/usage-with-typescript)
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export default store
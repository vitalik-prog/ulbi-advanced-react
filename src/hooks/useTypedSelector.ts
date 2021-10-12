import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../common/types/state";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

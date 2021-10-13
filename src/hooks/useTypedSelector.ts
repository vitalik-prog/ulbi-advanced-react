import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../common/types/state/auth";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

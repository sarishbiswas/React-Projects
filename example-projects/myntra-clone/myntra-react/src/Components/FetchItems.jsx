import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchSliceActions } from "../store/fetchSlice";

export const FetchItems = () => {
  const fetchingState = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchingState.fetchingDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchSliceActions.fetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(itemsActions.addInitialItems(data.items[0]));
        dispatch(fetchSliceActions.fetchingCompleted());
        dispatch(fetchSliceActions.markFetchingDone());
      });
    return () => controller.abort();
  }, [fetchingState]);
  return <></>;
};

import { useEffect } from "react";
import { FormOptionsActions } from "./../store/FormOptions";
import { useDispatch } from "react-redux";

function FetchDuration() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:9999/getduration")
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        // console.log(data.data[0].Duration);
        dispatch(FormOptionsActions.getduration(data.data[0].Duration));
      })
      .catch((error) => console.log("error", error));
  }, [dispatch]);
}
export { FetchDuration };
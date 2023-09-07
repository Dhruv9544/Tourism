import { useEffect } from "react";
import { FormOptionsActions } from "./../store/FormOptions";
import { useDispatch } from "react-redux";

function FetchSeason() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:9999/getseasons")
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        // console.log(data.data[0].Season);
        dispatch(FormOptionsActions.getseasons(data.data[0].Season));
      })
      .catch((error) => console.log("error", error));
  }, [dispatch]);
}
export { FetchSeason };

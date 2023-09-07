import { useEffect } from "react";
import { FormOptionsActions } from "./../store/FormOptions";
import { useDispatch } from "react-redux";

function FetchDistrict() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:9999/getdistricts")
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        //   console.log(data.data[0].district);
        dispatch(FormOptionsActions.getdistricts(data.data[0].district));
      })
      .catch((error) => console.log("error", error));
  }, [dispatch]);
}
export { FetchDistrict };

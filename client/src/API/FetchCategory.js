import { useEffect } from "react";
import { FormOptionsActions } from "./../store/FormOptions";
import { useDispatch } from "react-redux";
import { ip } from "../ip";

function FetchCategory() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`${ip}/getcategory`)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        // console.log(data.data[0].category);
        dispatch(FormOptionsActions.getcategory(data.data[0].category));
      })
      .catch((error) => console.log("error", error));
  }, [dispatch]);
}
export { FetchCategory };

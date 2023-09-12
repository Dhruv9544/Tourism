import { MaincategoryActions } from "../store/MainCategory";
import { useDispatch } from "react-redux";
function FetchMainCategory() {
  const dispatch = useDispatch();
  fetch("http://localhost:9999/getMainCategory")
    .then((response) => response.text())
    .then((result) => {
      const data = JSON.parse(result);
      console.log(data.data);
      dispatch(MaincategoryActions.getmaincategory(data.data));
      return data.data;
    })
    .catch((error) => console.log("error", error));
}
export { FetchMainCategory };

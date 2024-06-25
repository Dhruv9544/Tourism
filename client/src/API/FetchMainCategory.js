import { ip } from "../ip";
import { MaincategoryActions } from "../store/MainCategory";
import { useDispatch } from "react-redux";
function FetchMainCategory() {
  const dispatch = useDispatch();
  fetch(`${ip}/getMainCategory`)
    .then((response) => response.text())
    .then((result) => {
      const data = JSON.parse(result);
      console.log(data.data);
      const maindata = data.data;
      dispatch(MaincategoryActions.getmaincategory(data.data));
      maindata.map((item) =>
        dispatch(
          MaincategoryActions.getsubcategory({
            name: item.name,
            subcategory: item.subcategories,
            id: item._id,
            image: item.image,
          })
        )
      );
      return data.data;
    })
    .catch((error) => console.log("error", error));
}
export { FetchMainCategory };

import { useEffect } from "react";

function FetchCategory() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:9999/gettopdestination")
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

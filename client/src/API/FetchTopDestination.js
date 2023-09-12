import { TopDestinationActions } from "../store/TopDestination";
import { useDispatch } from "react-redux";
function FetchTopDestination() {
  const dispatch = useDispatch();
  fetch("http://localhost:9999/gettopdestination")
    .then((response) => response.text())
    .then((result) => {
      const data = JSON.parse(result);
      console.log(data.data);
      dispatch(TopDestinationActions.gettopdestination(data.data));
      return data.data;
    })
    .catch((error) => console.log("error", error));
}
export { FetchTopDestination };

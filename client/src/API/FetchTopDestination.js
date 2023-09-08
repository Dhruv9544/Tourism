import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TopDestinationActions } from "../store/TopDestination";

const FetchTopDestination = async () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:9999/gettopdestination")
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        console.log(data.data);
        dispatch(TopDestinationActions.gettopdestination(data.data));
        return data.data;
      })
      .catch((error) => console.log("error", error));
  }, [dispatch]);
};
export { FetchTopDestination };

import { useEffect } from "react";

function FetchMainCategory() {
  //   useEffect(() => {
  fetch("http://localhost:9999/getMainCategory")
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      const data = JSON.parse(result);
      console.log(data);
    })
    .catch((error) => console.log("error", error));
  //   }, []);
}
export { FetchMainCategory };

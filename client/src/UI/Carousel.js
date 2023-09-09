const Slider = (result) => {
  console.log(result);
  const slideRef = document.createElement("div");
  const loadingProgress = 0;
  const handleClickNext = () => {
    let items = slideRef.querySelectorAll(".item");
    slideRef.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.querySelectorAll(".item");
    slideRef.prepend(items[items.length - 1]);
  };

  const container = document.createElement("div");
  container.classList.add("container1");

  const loadbar = document.createElement("div");
  loadbar.classList.add("loadbar");
  loadbar.style.width = `${loadingProgress}%`;
  //Append Loadbar to container
  container.appendChild(loadbar);
  //Append slide div to container
  container.appendChild(slideRef);
  // Create and append items to slide div
  result.forEach((item) => {
    const slideItem = document.createElement("div");
    slideItem.classList.add("item");
    slideItem.style.backgroundImage = `url(${item.imgUrl})`;
    const content = document.createElement("div");
    content.classList.add("content");
    const name = document.createElement("div");
    name.classList.add("name");
    name.textContent = item.name;
    const des = document.createElement("div");
    des.classList.add("des");
    des.textContent = item.desc;

    const button = document.createElement("button");
    button.textContent = "See more";

    content.appendChild(name);
    content.appendChild(des);
    content.appendChild(button);
    slideItem.appendChild(content);
    slideRef.appendChild(slideItem);

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");
    const preButton = document.createElement("button");
    preButton.id = "prev";
    preButton.addEventListener("click", handleClickPrev);

    const preIcon = document.createElement("i");
    preIcon.className = "fa fa-angle-left";
    preButton.appendChild(preIcon);

    const nextButton = document.createElement("button");
    nextButton.id = "next";
    nextButton.addEventListener("click", handleClickNext);

    const nextIcon = document.createElement("i");
    nextIcon.className = "fa fa-angle-right";
    nextButton.appendChild(nextIcon);

    buttons.appendChild(preButton);
    buttons.appendChild(nextButton);
    container.appendChild(buttons);
  });

  document.getElementById("carousel").appendChild(container);
};

export default Slider;

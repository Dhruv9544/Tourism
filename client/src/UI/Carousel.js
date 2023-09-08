import { useEffect } from "react";

const Slider = () => {
  useEffect(() => {
    const slideRef = document.createElement("div");
    const loadingProgress = 0;
    const handleClickNext = () => {
      let items = slideRef.querySelectorAll(".item");
      // console.log(items[0]);
      slideRef.appendChild(items[0]);
    };
    // / Add the container to the DOM (assuming there is an element with id "root" where you want to mount
    // the sLider)

    const handleClickPrev = () => {
      let items = slideRef.querySelectorAll(".item");
      slideRef.prepend(items[items.length - 1]);
    };
    const data = [
      {
        id: 0,
        imgUrl:
          "https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg",
        desc: "Some beautiful moons cannot becreated without getting creativity.",
        name: "EXPLORE MOON ART",
      },
      {
        id: 1,
        imgUrl:
          "https://r4.wallpaperflare.com/wallpaper/699/818/498/digital-art-artwork-sun-3d-wallpaper-09a058ed313aad4b1687380f2001e6fd.jpg",
        desc: "Some beautiful moons cannot be created without getting creativity.",
        name: "EXPLORE MOON ART",
      },
      {
        id: 2,
        imgUrl:
          "https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg",
        desc: "Some beautiful moons cannot becreated without getting creativity.",
        name: "EXPLORE MOON ART",
      },
      {
        id: 4,
        imgUrl:
          "https://c4.wallpaperflare.com/wallpaper/742/746/486/demon-slayer-kimetsu-no-yaiba-zenitsu-agatsuma-anime-boys-tanjiro-kamado-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg",
        desc: "Some beautiful moons cannot becreated without getting creativity.",
        name: "EXPLORE MOON ART",
      },
    ];

    const container = document.createElement("div");
    container.classList.add("container");

    const loadbar = document.createElement("div");
    loadbar.classList.add("loadbar");
    loadbar.style.width = `${loadingProgress}%`;
    //Append Loadbar to container
    container.appendChild(loadbar);
    //Append slide div to container
    container.appendChild(slideRef);
    // Create and append items to slide div
    data.forEach((item) => {
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
  }, []);
};

export default Slider;

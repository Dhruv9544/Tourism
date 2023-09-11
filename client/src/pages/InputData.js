import React, { useState } from "react";
import { useFormik } from "formik";
import { formSchemas } from "../schemas/Index";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { FetchDistrict } from "../API/FetchDistrict";
import { FetchCategory } from "../API/FetchCategory";
import { FetchDuration } from "../API/FetchDuration";
import { FetchSeason } from "../API/FetchSeason";
const initialValues = {
  destination_name: "",
  about_place: "",
  brief_history: "",
  thing_to_do: "",
  time_open: "",
  time_close: "",
  holiday: "",
  bus: "",
  train: "",
  plane: "",
  Thumbnail: [],
  related_photos: [],
  km_surat: "",
  km_amd: "",
  km_jmg: "",
  km_rjt: "",
  visual_content: "",
  location: "",
  website_link: "",
  Category: [],
  season: [],
  day: "",
  distric: "",
  rating: "",
  mainCategory: [],
};

const InputData = () => {
  const [dropdownopen, setdropdownopen] = useState(false);
  const onClickHandler = () => {
    setdropdownopen(!dropdownopen);
    const dropdown = document.querySelector(".origin-top-right");
    dropdown.classList.toggle("hidden");
  };
  // const button = document.getElementById("but");

  // button.addEventListener("click", () => {
  // });

  //fetch from redux store
  FetchDistrict();
  FetchCategory();
  FetchDuration();
  FetchSeason();
  const category = useSelector((state) => state.formoptions.category);
  const district = useSelector((state) => state.formoptions.district);
  const season = useSelector((state) => state.formoptions.season);
  const duration = useSelector((state) => state.formoptions.duration);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFieldValue("related_photos", selectedFiles);
  };
  const handleOneFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFieldValue("Thumbnail", selectedFiles);
  };

  const submitHandler = (value) => {
    var fileInput = document.getElementById("fileInput");
    var relatedFileInput = document.getElementById("relatedFileInput");

    var formdata = new FormData();
    formdata.append("DestinationName", value.destination_name);
    formdata.append("AboutPlace", value.about_place);
    formdata.append("BriefHistory", value.brief_history);
    formdata.append("MainAttractions", value.thing_to_do);
    formdata.append("GetThereByBus", value.bus);
    formdata.append("GetThereByTrain", value.train);
    formdata.append("GetThereByPlane", value.plane);
    formdata.append("Thumbnail", fileInput.files[0], value.Thumbnail[0].name);
    for (var i = 0; i < relatedFileInput.files.length; i++) {
      var file = relatedFileInput.files[i];
      formdata.append("RelatedPhotos", file, value.related_photos[i].name);
    }
    formdata.append("OpenTime", value.time_open);
    formdata.append("CloseTime", value.time_close);
    formdata.append("Holiday", value.holiday);
    formdata.append("VisualContent", value.visual_content);
    formdata.append("OfficialWebsiteLink", value.website_link);
    formdata.append("Location", value.location);
    formdata.append("Category", value.Category);
    formdata.append("Season", value.season);
    formdata.append("District", value.distric);
    formdata.append("DurationOfVisit", value.day);
    formdata.append("Rating", value.rating);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:9999/formdata", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  const onChangeHandler = (e) => {
    // handleChange(e);
    console.log("Form data:", e);
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: formSchemas,
    onSubmit: (values, action) => {
      // console.log("Name");
      submitHandler(values);
      // console.log(values);
      // action.resetForm();
    },
    onChange: (values, action) => {
      console.log(values);
      onChangeHandler(values.Category);
    },
  });
  // console.log(errors);
  // console.log(values);
  return (
    <div className="flex items-center justify-center bg-cyan-50 min-h-screen">
      <div className="w-full max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-8"
        >
          <div class="relative inline-block m-5">
            <div>
              <button
                onClick={onClickHandler}
                type="button"
                class="flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-[15rem] py-2 bg-white text-[15px] font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500"
              >
                Select Items
              </button>
            </div>
            <div class="origin-top-right absolute right-0 mt-3 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 hidden">
              <div class="px-4 py-2">
                {category.map((item) => (
                  <label key={item} class="inline-flex items-center w-full">
                    <input
                      name="mainCategory"
                      type="checkbox"
                      class="form-checkbox text-indigo-600"
                      id={item}
                      value={item}
                      checked={values.mainCategory.includes(item)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>

              {/* <div class="px-4 py-2">
                <label class="inline-flex w-full items-center">
                  <input
                    type="checkbox"
                    class="form-checkbox text-indigo-600"
                    id="item2"
                  />{" "}
                  Item 2
                </label>
              </div> */}
            </div>
            {errors.mainCategory && touched.mainCategory ? (
              <small className="text-ligth text-red-600">
                {errors.mainCategory}
              </small>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="destination_name"
            >
              Destination Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="destination_name"
              type="text"
              placeholder="Destination Name"
              value={values.destination_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.destination_name && touched.destination_name ? (
              <small className="text-ligth text-red-600">
                {errors.destination_name}
              </small>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="about_place"
            >
              About place
            </label>
            <textarea
              name="about_place"
              value={values.about_place}
              onChange={handleChange}
              onBlur={handleBlur}
              cols="30"
              rows="3"
              placeholder="About place"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
            {errors.about_place && touched.about_place ? (
              <small className="text-ligth text-red-600">
                {errors.about_place}
              </small>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="about_place"
            >
              Brief History:
            </label>
            <textarea
              name="brief_history"
              value={values.brief_history}
              onChange={handleChange}
              onBlur={handleBlur}
              cols="30"
              rows="3"
              placeholder="Brief History:"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
            {errors.brief_history && touched.brief_history ? (
              <small className="text-ligth text-red-600">
                {errors.brief_history}
              </small>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="about_place"
            >
              Things to do
            </label>
            <textarea
              name="thing_to_do"
              value={values.thing_to_do}
              onChange={handleChange}
              onBlur={handleBlur}
              cols="30"
              rows="3"
              placeholder="Things to do"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
            {errors.thing_to_do && touched.thing_to_do ? (
              <small className="text-ligth text-red-600">
                {errors.thing_to_do}
              </small>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="about_place"
            >
              How to get there by bus
            </label>
            <textarea
              name="bus"
              value={values.bus}
              onChange={handleChange}
              onBlur={handleBlur}
              cols="30"
              rows="3"
              placeholder="How to get there by bus"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
            {errors.bus && touched.bus ? (
              <small className="text-ligth text-red-600">{errors.bus}</small>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="about_place"
            >
              How to get there by train
            </label>
            <textarea
              name="train"
              value={values.train}
              onChange={handleChange}
              onBlur={handleBlur}
              cols="30"
              rows="3"
              placeholder="How to get there by train"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
            {errors.train && touched.train ? (
              <small className="text-ligth text-red-600">{errors.train}</small>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="about_place"
            >
              How to get there by plane
            </label>
            <textarea
              name="plane"
              value={values.plane}
              onChange={handleChange}
              onBlur={handleBlur}
              cols="30"
              rows="3"
              placeholder="How to get there by plane"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
            {errors.plane && touched.plane ? (
              <small className="text-ligth text-red-600">{errors.plane}</small>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="Thumbnail"
            >
              Thumbnail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="Thumbnail"
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleOneFileChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.Thumbnail && touched.Thumbnail ? (
            <small className="text-ligth text-red-600">
              {errors.Thumbnail}
            </small>
          ) : null}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="related_photos"
            >
              Related photos
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="related_photos"
              type="file"
              accept="image/*"
              id="relatedFileInput"
              onChange={handleFileChange}
              onBlur={handleBlur}
              multiple
            />
          </div>
          {errors.related_photos && touched.related_photos ? (
            <small className="text-ligth text-red-600">
              {errors.related_photos}
            </small>
          ) : null}

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="destination_name"
            >
              Open Time
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="time_open"
              type="text"
              placeholder="Destination Name"
              value={values.time_open}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.time_open && touched.time_open ? (
              <small className="text-ligth text-red-600">
                {errors.time_open}
              </small>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="time_close"
            >
              Close Time
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="time_close"
              type="text"
              placeholder="Close Time"
              value={values.time_close}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.time_close && touched.time_close ? (
              <small className="text-ligth text-red-600">
                {errors.time_close}
              </small>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="holiday"
            >
              Holiday
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="holiday"
              type="text"
              placeholder="Holiday"
              value={values.holiday}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.holiday && touched.holiday ? (
              <small className="text-ligth text-red-600">
                {errors.holiday}
              </small>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="km_amd"
            >
              Center Point from Ahemdabad
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="km_amd"
              type="text"
              placeholder="Center Point from Ahemdabad"
              value={values.km_amd}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.km_amd && touched.km_amd ? (
              <small className="text-ligth text-red-600">{errors.km_amd}</small>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="km_surat"
            >
              Center Point from Surat
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="km_surat"
              type="text"
              placeholder="Center Point from Surat"
              value={values.km_surat}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.km_surat && touched.km_surat ? (
              <small className="text-ligth text-red-600">
                {errors.km_surat}
              </small>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="km_rjt"
            >
              Center Point from Rajkot
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="km_rjt"
              type="text"
              placeholder="Center Point from Rajkot"
              value={values.km_rjt}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.km_rjt && touched.km_rjt ? (
              <small className="text-ligth text-red-600">{errors.km_rjt}</small>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="km_jmg"
            >
              Center Point from Jamnagar
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="km_jmg"
              type="text"
              placeholder="Center Point from Jamanagar"
              value={values.km_jmg}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.km_jmg && touched.km_jmg ? (
              <small className="text-ligth text-red-600">{errors.km_jmg}</small>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="visual_content"
            >
              Visual Content
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="visual_content"
              type="text"
              placeholder="Visual Content"
              value={values.visual_content}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.visual_content && touched.visual_content ? (
              <small className="text-ligth text-red-600">
                {errors.visual_content}
              </small>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="location"
            >
              Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="location"
              type="text"
              placeholder="Location"
              value={values.location}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.location && touched.location ? (
              <small className="text-ligth text-red-600">
                {errors.location}
              </small>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="website_link"
            >
              Official Website Link
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="website_link"
              type="text"
              placeholder="Official Website Link"
              value={values.website_link}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.website_link && touched.website_link ? (
              <small className="text-ligth text-red-600">
                {errors.website_link}
              </small>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="distric"
            >
              District
            </label>
            <select
              name="distric"
              id="distric"
              value={values.distric}
              className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select any One</option>
              {district.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
              {/* <option value="Jamnagar">Jamnagar</option>
              <option value="Surat">Surat</option>
              <option value="Anand">Anand</option> */}
            </select>
            {errors.distric && touched.distric ? (
              <small className="text-ligth text-red-600">
                {errors.distric}
              </small>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              category
            </label>

            <div>
              {category.map((item) => (
                <label key={item}>
                  <input
                    type="checkbox"
                    name="Category"
                    value={item}
                    id={item}
                    checked={values.Category.includes(item)}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      // Log the updated values immediately upon clicking
                      const updatedValues = [...values.Category];
                      if (e.target.checked) {
                        updatedValues.push(e.target.value);
                      } else {
                        const index = updatedValues.indexOf(e.target.value);
                        if (index !== -1) {
                          updatedValues.splice(index, 1);
                        }
                      }
                      // console.log("Updated values:", updatedValues);
                      onChangeHandler(updatedValues);
                      // Update Formik's state
                      setFieldValue("Category", updatedValues);
                    }}
                  />
                  {item}
                </label>
              ))}
            </div>
            {errors.Category && touched.Category ? (
              <small className="text-ligth text-red-600">
                {errors.Category}
              </small>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="season"
            >
              Season
            </label>

            <div className="">
              {season.map((item) => (
                <label key={item} className="mr-4">
                  <input
                    type="checkbox"
                    name="season"
                    value={item}
                    id={item}
                    checked={values.season.includes(item)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {item}
                </label>
              ))}
            </div>
            {errors.season && touched.season ? (
              <small className="text-ligth text-red-600">{errors.season}</small>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="time"
            >
              Duration of Visit
            </label>

            {duration.map((item) => (
              <label key={item} htmlFor={item} className="">
                <input
                  className="ml-2"
                  name="day"
                  type="radio"
                  id={item}
                  value={item}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {item}
              </label>
            ))}
            {errors.day && touched.day ? (
              <small className="text-ligth text-red-600">{errors.day}</small>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="ratinf"
            >
              Rating
            </label>

            <label htmlFor="1" className="">
              <input
                className="ml-2"
                name="rating"
                type="radio"
                id="1"
                value="1"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              1
            </label>

            <label htmlFor="2" className="">
              <input
                className="ml-2"
                name="rating"
                type="radio"
                id="2"
                value="2"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              2
            </label>

            <label htmlFor="3" className="">
              <input
                className="ml-2"
                name="rating"
                type="radio"
                id="3"
                value="3"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              3
            </label>
            <label htmlFor="4" className="">
              <input
                className="ml-2"
                name="rating"
                type="radio"
                id="4"
                value="4"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              4
            </label>
            <label htmlFor="5" className="">
              <input
                className="ml-2"
                name="rating"
                type="radio"
                id="5"
                value="5"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              5
            </label>
            {errors.day && touched.day ? (
              <small className="text-ligth text-red-600">{errors.day}</small>
            ) : null}
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              // onClick={console.log("Hello")}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default InputData;

import React from "react";
import { useFormik } from "formik";
import { formSchemas } from "../schemas/Index";

const initialValues = {
  destination_name: "",
  about_place: "",
  brief_history: "",
  thing_to_do: "",
  time_open: "",
  time_close: "",
  bus: "",
  train: "",
  plane: "",
  holiday: "",
  Thumbnail: "",
  related_photos: "",
  km_surat: "",
  km_amd: "",
  km_jmg: "",
  km_rjt: "",
  visual_content: "",
  location: "",
  distric: "",
  website_link: "",
  // vehicle1: "",
  // season: "",
  // day: "",
};
const submitHandler = (values) => {
  // console.log(values);
  console.log("first");
};

const InputData = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: formSchemas,
      onSubmit: () => {
        console.log("Name");
        // submitHandler(values);
        // console.log(values);
        // action.resetForm();
      },
    });
  // console.log(values);
  return (
    <div className="flex items-center justify-center bg-cyan-50 min-h-screen">
      <div className="w-full max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-8"
        >
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
              placeholder="Thumbnail"
              // value={values.Thumbnail}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Thumbnail && touched.Thumbnail ? (
              <small className="text-ligth text-red-600">
                {errors.Thumbnail}
              </small>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="related_photos"
            >
              Related Photos
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="related_photos"
              type="file"
              placeholder="Related Photos"
              // value={values.related_photos}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.related_photos && touched.related_photos ? (
              <small className="text-ligth text-red-600">
                {errors.related_photos}
              </small>
            ) : null}
          </div>
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
              // for="distric"
            >
              District
            </label>
            <select
              name="distric"
              id="distric"
              className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={values.distric}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.distric && touched.distric ? (
                  <small className="text-ligth text-red-600">
                    {errors.distric}
                  </small>
                ) : null
              }
            >
              <option value="">Hello11</option>
              <option value="">Hello1</option>
              <option value="">Hello2</option>
              <option value="">Hello3</option>
            </select>
          </div>
          {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="time"
            >
              Category
            </label>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1" className="p-2">
              {" "}
              I have a bike
            </label>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label for="vehicle2" className="p-2">
              {" "}
              I have a car
            </label>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3" className="p-2">
              {" "}
              I have a boat
            </label>
          </div> */}
          {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="time"
            >
              Season
            </label>
            <input
              name="season"
              type="radio"
              id="season"
              // value={values.season}
              // onChange={handleChange}
              // onBlur={handleBlur}
              error={
                errors.season && touched.season ? (
                  <small className="text-ligth text-red-600">
                    {errors.season}
                  </small>
                ) : null
              }
            />
            <label for="season" className="p-2">
              Summer
            </label>
            <input
              name="season"
              type="radio"
              id="summer"
              // value={values.destination_name}
              // onChange={handleChange}
              // onBlur={handleBlur}
              error={
                errors.season && touched.season ? (
                  <small className="text-ligth text-red-600">
                    {errors.season}
                  </small>
                ) : null
              }
            />
            <label for="summer" className="p-2">
              Mosoon
            </label>
            <input
              name="season"
              type="radio"
              id="winter"
              // value={values.destination_name}
              // onChange={handleChange}
              // onBlur={handleBlur}
              error={
                errors.season && touched.season ? (
                  <small className="text-ligth text-red-600">
                    {errors.season}
                  </small>
                ) : null
              }
            />
            <label for="winter" className="p-2">
              Winter
            </label>
          </div> */}
          {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="time"
            >
              Duration of Visit
            </label>
            <input
              name="day"
              type="radio"
              id="1day"
              // value={values.day}
              // onChange={handleChange}
              // onBlur={handleBlur}
              error={
                errors.day && touched.day ? (
                  <small className="text-ligth text-red-600">
                    {errors.day}
                  </small>
                ) : null
              }
            />
            <label for="1day" className="p-2">
              1 day
            </label>
            <input
              name="day"
              type="radio"
              id="2day"
              // value={values.day}
              // onChange={handleChange}
              // onBlur={handleBlur}
              error={
                errors.day && touched.day ? (
                  <small className="text-ligth text-red-600">
                    {errors.day}
                  </small>
                ) : null
              }
            />
            <label for="2day" className="p-2">
              2 day
            </label>
            <input
              name="day"
              type="radio"
              id="3day"
              // value={values.day}
              // onChange={handleChange}
              // onBlur={handleBlur}
              error={
                errors.day && touched.day ? (
                  <small className="text-ligth text-red-600">
                    {errors.day}
                  </small>
                ) : null
              }
            />
            <label for="3day" className="p-2">
              3 day
            </label>
          </div> */}

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

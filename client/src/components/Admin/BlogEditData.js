import { useFormik } from "formik";
import { blogSchemas } from "../../schemas/Index";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useLocation } from "react-router-dom";
import { ip } from "../../ip";

const BlogEditData = () => {
  const dataLocation = useLocation();
  // console.log(dataLocation);
  const initialValues = {
    title: dataLocation.state.data.Title,
    author_name: dataLocation.state.data.Author_Name,
    about: dataLocation.state.data.About,
    mainCategory: dataLocation.state.data.Category,
    Thumbnail: dataLocation.state.data.Thumbnail,
  };

  const category = useSelector((state) => state.Maincategory.category);

  const handleOneFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFieldValue("Thumbnail", selectedFiles);
  };
  const submitHandler = (values) => {
    console.log(dataLocation.state.data._id);
    console.log("values");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Title: values.title,
      Author_Name: values.author_name,
      About: values.about,
      Category: values.mainCategory,
    });

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${ip}/updateblog/${dataLocation.state.data._id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
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
    // validationSchema: blogSchemas,
    onSubmit: (values, action) => {
      // console.log(values);
      submitHandler(values);

      // action.resetForm();
    },
  });
  return (
    <div className="flex items-center justify-center bg-cyan-50 min-h-screen">
      <div className="w-full max-w-2xl">
        <h2 className="text-center text-2xl uppercase font-semibold font-serif text-gray-800">
          Edit Blog
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-8"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="title"
              type="text"
              placeholder="Destination Name"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.title && touched.title ? (
              <small className="text-ligth text-red-600">{errors.title}</small>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="author_name"
            >
              Author Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="author_name"
              type="text"
              placeholder="Destination Name"
              value={values.author_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.author_name && touched.author_name ? (
              <small className="text-ligth text-red-600">
                {errors.author_name}
              </small>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="about"
            >
              How to get there by plane
            </label>
            <textarea
              name="about"
              value={values.about}
              onChange={handleChange}
              onBlur={handleBlur}
              cols="30"
              rows="3"
              placeholder="Description of Blog"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
            {errors.about && touched.about ? (
              <small className="text-ligth text-red-600">{errors.about}</small>
            ) : null}
          </div>

          {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Thumbnail"
            >
              Thumbnail (Add New Thumbnail or Exsiting Thumbnail )
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
          ) : null} */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              category
            </label>

            <div>
              {category.map((item) => (
                <label key={item._id}>
                  <input
                    type="checkbox"
                    name="mainCategory"
                    value={item.name}
                    id={item._id}
                    checked={values.mainCategory.includes(item.name)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {item.name}
                </label>
              ))}
            </div>
            {errors.mainCategory && touched.mainCategory ? (
              <small className="text-ligth text-red-600">
                {errors.mainCategory}
              </small>
            ) : null}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              // onClick={console.log("Hello")}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogEditData;

import * as Yup from "yup";

export const formSchemas = Yup.object({
  destination_name: Yup.string().required("Please Enter Destination"),
  about_place: Yup.string().required("Please Enter Destination"),
  brief_history: Yup.string().required("Please Enter Destination"),
  thing_to_do: Yup.string().required("Please Enter Destination"),
  time_open: Yup.string().required("Please Enter Destination"),
  time_close: Yup.string().required("Please Enter Destination"),
  holiday: Yup.string().required("Please Enter Destination"),
  bus: Yup.string().required("Please Enter Destination"),
  train: Yup.string().required("Please Enter Destination"),
  plane: Yup.string().required("Please Enter Destination"),

  // Thumbnail: Yup.object().required("Thubnail is require"),
  // related_photos: Yup.object.required("Thubnail is require"),
  km_surat: Yup.string().required("Please Enter Destination"),
  km_amd: Yup.string().required("Please Enter Destination"),
  km_jmg: Yup.string().required("Please Enter Destination"),
  km_rjt: Yup.string().required("Please Enter Destination"),
  visual_content: Yup.string().required("Please Enter Destination"),
  location: Yup.string().required("Please Enter Destination"),
  website_link: Yup.string().required("Please Enter Destination"),
  // distric: Yup.string().required("Please Enter Destination"),
  season: Yup.string().required("Please Enter Destination"),
  day: Yup.string().required("Please Enter Destination"),
});

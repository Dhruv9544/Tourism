import * as Yup from "yup";

export const formSchemas = Yup.object().shape({
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

  Thumbnail: Yup.array()
    .min(1, "Select at least one file")
    .max(1, "Select at least one file")
    .of(
      Yup.mixed()
        .test("fileFormat", "Only image files are allowed", (value) => {
          if (!value) return true; // If no file is selected, skip validation

          const acceptedFormats = ["image/jpeg", "image/png", "image/gif"];
          return acceptedFormats.includes(value.type);
        })
        .test("fileSize", "File size is too large", (value) => {
          if (!value) return true; // If no file is selected, skip validation

          const maxSizeInBytes = 10 * 1024 * 1024; // 50MB
          return value.size <= maxSizeInBytes;
        })
    ),
  related_photos: Yup.array()
    .min(1, "Select at least one file")
    .max(10, "You can select up to 10 files")
    .of(
      Yup.mixed()
        .test("fileFormat", "Only image files are allowed", (value) => {
          if (!value) return true; // If no file is selected, skip validation

          const acceptedFormats = ["image/jpeg", "image/png", "image/gif"];
          return acceptedFormats.includes(value.type);
        })
        .test("fileSize", "File size is too large", (value) => {
          if (!value) return true; // If no file is selected, skip validation

          const maxSizeInBytes = 50 * 1024 * 1024; // 50MB
          return value.size <= maxSizeInBytes;
        })
    ),
  km_surat: Yup.string().required("Please Enter Destination"),
  km_amd: Yup.string().required("Please Enter Destination"),
  km_jmg: Yup.string().required("Please Enter Destination"),
  km_rjt: Yup.string().required("Please Enter Destination"),
  visual_content: Yup.string().required("Please Enter Destination"),
  location: Yup.string().required("Please Enter Destination"),
  website_link: Yup.string().required("Please Enter Destination"),
  distric: Yup.string().required("Please Enter Destination"),
  season: Yup.string().required("Please Enter Destination"),
  rating: Yup.string().required("Please Enter Destination"),
  day: Yup.string().required("Please Enter Destination"),
  // Category: Yup.array().min(1, "Select at least one Category"),
});

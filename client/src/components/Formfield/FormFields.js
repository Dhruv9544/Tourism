import React from "react";

export const InputField = (props) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        for={props.for}
      >
        {props.title}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value || ""}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.error}
    </div>
  );
};
export const TextareaField = (props) => {
  return (
    <div className="mb-6">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        for={props.for}
      >
        {props.title}
      </label>
      <textarea
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        cols="30"
        rows="3"
        placeholder={props.placeholder}
        className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      ></textarea>
      {props.error}
    </div>
  );
};

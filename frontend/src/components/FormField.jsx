import { useField } from "formik"
import React from "react"

const FormField = ({ type, name, placeHolder, className }) => {
  const [field, meta] = useField(name)
  return (
    <div className="mb-4 w-full">
      {meta.touched && meta.error && (
        <div className="text-white fixed">
          <div className="absolute right-1 h-12 bg-red-400 w-48 rounded-lg flex items-center justify-center px-4">
            <h1>{meta.error}</h1>
          </div>
        </div>
      )}
      <input
        {...field}
        type={type}
        name={name}
        placeholder={placeHolder}
        className={
          meta.touched && meta.error
            ? `${className} !border-red-400`
            : className
        }
      />
    </div>
  )
}

export default FormField

import { Formik, Form } from "formik"
import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginValidation } from "../helpers/formValidation"
import { useLoginMutation } from "../redux/Api/userAuth"
import { addUserData } from "../redux/reducers/userReducer"
import { DotLoader } from "react-spinners"

const Formulary = ({ initialValues, children }) => {
  const [login, { isError }] = useLoginMutation()
  const [formError, setFormError] = useState(false)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidation}
      onSubmit={async (values) => {
        try {
          setLoading(true)
          const user = await login(values).unwrap()
          dispatch(addUserData(user))
          navigate("/")
        } catch (error) {
          setLoading(false)
          setFormError(error.data?.error)
        }
      }}
    >
      <Form className="w-full flex flex-col items-center">
        {children}
        <button
          type="submit"
          className="w-full mb-4 h-12 bg-blueColor text-white text-xl font-bold rounded-md"
        >
          Log In
        </button>
        {isError && <p className="text-red-400 text-sm">{formError}</p>}
        <DotLoader color="#1876f2" loading={loading} size={30} />
      </Form>
    </Formik>
  )
}

export default Formulary

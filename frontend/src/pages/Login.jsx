import { Formik, Form } from "formik"
import { Link } from "react-router-dom"
import { useLoginQuery } from "../redux/Api/userAuth"
import FacebookLogo from "../assets/icons/facebook.svg"
import Footer from "../layouts/Footer"
import Formulary from "../components/Form"
import FormField from "../components/FormField"

const Login = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-3/4 bg-bgSecondary flex justify-end items-center">
        <div className="w-4/5 flex justify-center items-center">
          <div className="w-2/5 mb-16 flex flex-col items-start  ml-12">
            <img
              className="block w-72"
              src={FacebookLogo}
              alt="Facebook logo img"
            />
            <p className="ml-8 text-3xl w-3/4">
              Connect with friends and the world around you on Facebook
            </p>
          </div>
          <div className="w-1/2">
            <div className="w-1/2 bg-white flex flex-col items-center shadow-xl rounded-lg">
              <div className="p-4 w-full flex flex-col items-center">
                <Formulary initialValues={{ email: "", password: "" }}>
                  <FormField
                    type="email"
                    name="email"
                    placeHolder="Email adress"
                    className="w-full px-4 h-12 border-solid border border-borderColor rounded-md placeholder:text-borderColor focus:border-blueColor"
                  />
                  <FormField
                    type="password"
                    name="password"
                    placeHolder="Password"
                    className="w-full px-4 h-12 border-solid border border-borderColor rounded-md placeholder:text-borderColor focus:border-blueColor"
                  />
                </Formulary>
                <Link
                  to="/forgottenPassword"
                  className="text-blueColor mb-4 mx-auto text-sm"
                >
                  Forgot password?
                </Link>
                <div className="w-full border-b border-solid border-divider mb-6"></div>
                <Link
                  to="/register"
                  className="mb-4 py-3 px-4 bg-greenColor text-white text-base font-bold rounded-md flex justify-center items-center hover:bg-secondGreenColor"
                >
                  Create new account
                </Link>
              </div>
            </div>
            <section className="flex text-sm pt-6">
              <Link to="/" className="ml-8 mr-1 font-bold hover:underline">
                Create a Page
              </Link>
              <p>for a celebrity, brand or business</p>
            </section>
          </div>
        </div>
      </div>
      <div className="w-full h-1/4 flex justify-center">
        <Footer />
      </div>
    </div>
  )
}

export default Login

import React from "react"
import { Link } from "react-router-dom"
import { PlusIcon } from "@heroicons/react/24/outline"

const Footer = () => {
  const languages = [
    "English(UK)",
    "Español (España)",
    "Français(FR)",
    "italiano",
    "Deutsch",
    "Português (Brasil)",
    "العربية",
    "ⵜⴰⵎⴰⵣⵉⵖⵜ",
    "हिन्दी",
    "中文(简体)",
    "日本語",
  ]
  const faceboookSections = [
    "Sign Up",
    "Log in",
    "Messenger",
    "Facebook Lite",
    "Watch",
    "Places",
    "Games",
    "Marketplace",
    "Facebook Pay",
    "Oculus",
    "Portal",
    "Instagram",
    "Bulletin",
    "Local",
    "Fundraisers",
    "Services",
    "Voting Information Centre",
    "Groups",
    "About",
    "Create ad",
    "Create Page",
    "Developers",
    "Careers",
    "Privacy",
    "Cookies",
    "AdChoices",
    "Terms",
    "Help",
  ]
  return (
    <footer className="w-1/2 h-full">
      <div className="w-full font-normal flex space-x-3 text-xs text-colorSecondary mt-8">
        {languages.map((language) => (
          <Link to="/" key={language}>
            {language}
          </Link>
        ))}
        <Link
          to="/"
          className="bg-bgSecondary w-8 h-4 border border-solid border-bgThird flex justify-center"
        >
          <PlusIcon className="w-6" />
        </Link>
      </div>
      <div className="w-full border-b border-solid border-divider my-4"></div>
      <div className="w-full font-normal text-xs flex flex-wrap text-darkColorSecondary mt-8">
        {faceboookSections.map((section) => (
          <Link to="/" key={section} className="mr-5">
            {section}
          </Link>
        ))}
      </div>
      <div className="w-full text-normal text-xs mt-4 text-darkColorSecondary">
        <Link to="/">Meta © 2022</Link>
      </div>
    </footer>
  )
}

export default Footer

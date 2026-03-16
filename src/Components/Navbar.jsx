import { useState } from "react"
import { Button } from "@/Components/ui/button"
import { GiDatabase } from "react-icons/gi"
import { useNavigate } from "react-router-dom"

export default function Navbar() {

  const [active, setActive] = useState("Home")
  const navigate = useNavigate()

  function onclickHandler(event) {
    const buttonname = event.target.name

    setActive(buttonname)

    if (buttonname === "Home") {
      navigate("/")
    } else {
      navigate("/Companies")
    }
  }

  return (
    <nav
      className="
      fixed top-0 left-0 z-50
      w-full h-14
      flex items-center px-6 gap-1
      border-b
      backdrop-blur-md
      bg-background/70
      "
    >
      <GiDatabase />

      <span className="font-semibold text-lg mr-6">
        Dataprep
      </span>

      <div className="w-px h-5 bg-slate-200 mr-4" />

      {["Home", "Companies"].map((item) => (
        <Button
          key={item}
          name={item}
          variant={active === item ? "secondary" : "ghost"}
          className="rounded-2xl"
          size="sm"
          onClick={onclickHandler}
        >
          {item}
        </Button>
      ))}
    </nav>
  )
}
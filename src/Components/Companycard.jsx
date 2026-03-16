import React from 'react'
import { Card, CardContent } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"
import { useNavigate } from 'react-router-dom'

function Companycard({ company }) {
  const navigate = useNavigate()

  function handleClick() {
    console.log("View Questions clicked for:", company.name)
    navigate(`/Companies/${encodeURIComponent(company.name)}`)

 }

  return (
    <div className="w-full flex justify-center">

      <Card className="w-[80%]  hover:shadow-md transition duration-200 cursor-pointer">


        <CardContent className="flex flex-col justify-between gap-10 md:gap-4 font-geist">

          {/* Company Name — fixed height, clamp to 2 lines */}
          <div className="sm:h-36 lg:h-32 overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight line-clamp-2">
              {company.name}
            </h2>
          </div>

          {/* Bottom section always at the same vertical position */}
          <div className="sm:flex-col  md:flex-row justify-between items-center gap-2">

              <div>
              <p className="text-lg text-muted-foreground font-medium">
                {company.package} LPA
              </p>
  
              <p className="sm:text-xs text-sm text-muted-foreground">
                Location: {company.location}
              </p>
              
            </div>
            <Button
              onClick={handleClick}
              className="w-full mt-4"
              variant="outline"
            >
              View Questions
            </Button>

          </div>

        </CardContent>

      </Card>

    </div>
  )
}

export default Companycard
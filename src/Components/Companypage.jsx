import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '@/context/Appcontext'
import { ArrowLeft } from "lucide-react"

export default function Companypage() {

  const { name } = useParams()
  const { Companies } = useContext(AppContext)
  const navigate = useNavigate()

  const company = Companies.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  )

  return (
    <div className="max-w-4xl mx-auto pt-20 px-6 font-geist pb-4">

      {/* Back Button */}
      <button
        onClick={() => navigate("/Companies")}
        className="
          flex items-center gap-2
          mb-8
          text-base font-medium
          text-muted-foreground
          hover:text-foreground
          transition-colors
        "
      >
        <ArrowLeft className="h-6 w-6" />
        Back
      </button>

      {
      
      !company ? 
      (
        <div className="flex justify-center items-center h-[300px] text-2xl text-muted-foreground">
          Company Not Found
        </div>
      ) : 
      (
        <>
          {/* Header */}
          <div className="mb-8 pb-8 border-b border-border">
            <h1 className="text-5xl font-bold tracking-tight mb-3">
              {company.name}
            </h1>

            <span className="inline-block bg-muted text-muted-foreground text-sm font-medium px-3 py-1 rounded-full border border-border">
              {company.package} LPA
            </span>
          </div>

          {/* Company Info */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">

            {[
              { label: "Location", value: company.location },
              { label: "Date", value: company.date },
              { label: "Students Placed", value: company.studentsplaced },
            ].map(({ label, value }) => (

              <div
                key={label}
                className="
                  bg-muted/40 border border-border rounded-xl px-5 py-4
                  hover:bg-muted/70 hover:border-foreground/20
                  transition-all duration-200
                "
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1 pb-2">
                  {label}
                </p>

                <p className="text-base font-medium">
                  {value}
                </p>

              </div>

            ))}

          </div>

          {/* Skills */}
          <div className="mb-10">

            <h2 className="text-xl font-semibold tracking-tight mb-4">
              Skills Required
            </h2>

            <div className="flex gap-2 flex-wrap">

              {company.skills.map((skill, index) => (

                <span
                  key={index}
                  className="
                    px-3 py-1 text-sm rounded-md
                    bg-background border border-border
                    text-foreground font-medium
                    hover:bg-muted
                    transition-all duration-150
                  "
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

          {/* Interview Rounds */}
          <div>

            <h2 className="text-xl font-semibold tracking-tight mb-5">
              Interview Rounds
            </h2>

            <div className="space-y-4">

              {company.rounds.map((round, index) => (

                <div
                  key={index}
                  className="
                    border border-border rounded-xl p-5
                    bg-muted/20
                    hover:bg-muted/50 hover:border-foreground/20
                    hover:shadow-sm
                    transition-all duration-200
                  "
                >

                  <div className="flex items-center gap-3 mb-3">

                    <span className="
                      text-xs font-bold text-muted-foreground
                      bg-background border border-border
                      rounded-full w-6 h-6 flex items-center justify-center
                    ">
                      {index + 1}
                    </span>

                    <p className="font-semibold text-base">
                      {round.name}
                    </p>

                  </div>

                  <ul className="space-y-2 ml-9">

                    {round.description.map((q, i) => (

                      <li
                        key={i}
                        className="
                          text-sm text-muted-foreground leading-relaxed
                          flex items-start gap-2
                        "
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground/50 shrink-0" />
                        {q}
                      </li>

                    ))}

                  </ul>

                </div>

              ))}

            </div>

          </div>
        </>
      )}

    </div>
  )
}
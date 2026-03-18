import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '@/context/Appcontext'
import { ArrowLeft, MapPin, Calendar, Users, TrendingUp } from "lucide-react"

export default function Companypage() {

  const { name } = useParams()
  const { Companies } = useContext(AppContext)
  const navigate = useNavigate()

  const company = Companies.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  )

  return (
    <div className="min-h-screen bg-background font-geist">

      {/* ── Hero Banner ── */}
      <div className="relative border-b border-border overflow-hidden">

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Hatched accent corner */}
        <div
          className="absolute right-0 top-0 h-full w-1/3 opacity-[0.025]"
          style={{
            background: 'repeating-linear-gradient(-45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 12px)',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 pt-10 pb-12">

          <button
            onClick={() => navigate("/Companies")}
            className="
              group flex items-center gap-2 mb-10
              text-[10px] font-bold uppercase tracking-[0.2em]
              text-muted-foreground hover:text-foreground
              transition-colors duration-200
            "
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Companies
          </button>

          {!company ? (
            <div className="flex justify-center items-center h-[200px] text-2xl text-muted-foreground">
              Company Not Found
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-px w-6 bg-foreground/25" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Placement Record
                  </span>
                </div>
                <h1 className="text-6xl sm:text-7xl font-bold tracking-tighter leading-none">
                  {company.name}
                </h1>
              </div>

              <div className="flex-shrink-0 flex flex-col items-start sm:items-end gap-0.5 pb-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Package
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-5xl font-bold tracking-tight tabular-nums leading-none">
                    {company.package}
                  </span>
                  <span className="text-base font-semibold text-muted-foreground">LPA</span>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>

      {company && (
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-14">

          {/* ── Stat Row ── */}
          <div className="grid grid-cols-3 divide-x divide-border border border-border rounded-2xl overflow-hidden">
            {[
              { label: "Location", value: company.location, icon: MapPin },
              { label: "Drive Date", value: company.date, icon: Calendar },
              { label: "Placed", value: `${company.studentsplaced} students`, icon: Users },
            ].map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center px-4 py-5 bg-muted/20 hover:bg-muted/50 transition-colors duration-150"
              >
                <Icon className="h-3.5 w-3.5 text-muted-foreground mb-2" />
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-1">
                  {label}
                </p>
                <p className="text-sm font-semibold text-foreground leading-snug">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* ── Skills ── */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <TrendingUp className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
                Skills Required
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="flex gap-2 flex-wrap">
              {company.skills.map((skill, index) => (
                <span
                  key={index}
                  className="
                    px-4 py-2 text-[11px] font-bold uppercase tracking-widest
                    rounded-full
                    bg-foreground text-background
                    hover:opacity-75
                    transition-opacity duration-150 cursor-default
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* ── Interview Rounds — Timeline ── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
                Interview Rounds
              </span>
              <div className="flex-1 h-px bg-border" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground tabular-nums whitespace-nowrap">
                {company.rounds.length} rounds
              </span>
            </div>

            <div className="relative">
              {/* Vertical timeline bar */}
              <div className="absolute left-[19px] top-3 bottom-3 w-px bg-border" />

              <div className="space-y-5">
                {company.rounds.map((round, index) => (
                  <div key={index} className="relative flex gap-5 group">

                    {/* Step circle */}
                    <div className="
                      relative z-10 flex-shrink-0
                      w-10 h-10 rounded-full
                      border border-border bg-background
                      flex items-center justify-center
                      text-[10px] font-bold tabular-nums text-muted-foreground
                      group-hover:border-foreground/40 group-hover:text-foreground
                      transition-all duration-200
                    ">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Round card */}
                    <div className="
                      flex-1 mb-1
                      border border-border rounded-2xl p-5
                      bg-background
                      hover:bg-muted/25 hover:border-foreground/15
                      transition-all duration-200
                    ">
                      <p className="font-bold text-[15px] tracking-tight mb-4 text-foreground">
                        {round.name}
                      </p>

                      <ul className="space-y-2.5">
                        {round.description.map((q, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground leading-relaxed flex items-start gap-3"
                          >
                            <span className="
                              mt-0.5 flex-shrink-0
                              w-[18px] h-[18px]
                              rounded-sm border border-border
                              text-[9px] font-bold text-muted-foreground/50
                              flex items-center justify-center tabular-nums
                            ">
                              {i + 1}
                            </span>
                            {q}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  )
}
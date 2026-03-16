import React, { useEffect, useState, useContext } from 'react'
import Loader from '../Components/Loader'
import Companycard from './Companycard'
import { Button } from "@/Components/ui/button"
import { AppContext } from '@/context/Appcontext'

export default function Companies() {

  const [loader, setLoader] = useState(false)

  const { Companies, fetchCompanies } = useContext(AppContext)

  async function loadData() {
    setLoader(true)
    await fetchCompanies()
    setLoader(false)
  }

  useEffect(() => {
    loadData()
  }, [])


  return (

    <div className="w-full py-8 ">

      {loader ? (

        <div className="flex justify-center items-center h-[250px]">
          <Loader />
        </div>

      ) : Companies.length === 0 ? (

        <div className="flex flex-col items-center justify-center h-[250px] gap-3">
          <p className="text-4xl font-bold">404</p>
          <p className="text-lg text-muted-foreground font-geist">
            No Companies Found
          </p>

          <Button variant="outline" onClick={loadData}>
            Retry
          </Button>
        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pt-6">
          {Companies.map((company) => (
            <Companycard
              key={company._id}
              company={company}
            />
          ))}
        </div>

      )}

    </div>
  )
}
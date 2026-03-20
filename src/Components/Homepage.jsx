import { Card, CardContent } from "@/Components/ui/card"
import Herosection from "./Herosection"
import { useEffect, useState } from "react"
import axios from "axios"
import Loader from "./Loader"
import { Button } from "@/Components/ui/button"
import Graphsection from "./Graphsection"


export default function Homepage() {

  const [stats, setStats] = useState([])
  const [loader, setloader] = useState(false)

async function fetchData() {

  setloader(true)

  try {
    const res = await axios.get("https://13.126.199.60:3000/api/v1/getStats")
    setStats(res.data.data || [])
  }
  catch (err) {
    setStats([])
    console.log("Error fetching Data")
  }
  finally {
    setloader(false)
  }
  
}

  useEffect(() => {
    fetchData()
  }, [])



  return (
    <div className="flex flex-col w-full overflow-hidden pt-8">


      {/* Loader */}
      {
      
      loader ? 
      (
        <div className="flex justify-center items-center h-[250px]">
          <Loader />
        </div>
      ) 

//    Error section 
      : stats.length === 0 ? 
      (

        <div className="flex flex-col items-center justify-center h-[250px] gap-2">
          <span className="text-4xl font-bold">404</span>
          <span className="text-black text-lg font-geist">Data Not Found</span>

          <Button
            onClick={fetchData}
            variant="outline"
          >
            Retry
          </Button>
        </div>


      ) 

//    Else correct show cards
      : 
      (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 w-full">
              {stats.map((stat) => 
              {
    
                     const statname = stat.statname
                     const value = stat.statvalue?.value
                     const description = stat.statvalue?.description
         
                     return (
                       <Card
                         key={stat._id}
                         className="hover:bg-slate-50 hover:shadow-sm duration-200 cursor-pointer"
                       >
                               <CardContent className="pt-6">
               
                                 <p className="text-xs text-muted-foreground tracking-wide">
                                   {statname?.toUpperCase()}
                                 </p>
               
                                 <p className="text-4xl font-bold mt-1">
                                   {value}
                                 </p>
               
                                 {description && (
                                   <p className="text-xs text-muted-foreground mt-1">
                                     {description}
                                   </p>
                                 )}
               
                               </CardContent>
                       </Card>
                     )}
              )}
            </div>

      )}

      <Herosection />
      {/* <Graphsection/> */}
    </div>
  )
}
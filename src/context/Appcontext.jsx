import { createContext, useState } from "react"
import axios from "axios"

// Creating context
export const AppContext = createContext()

export default function AppContextProvider({ children }) {

  const [Companies, SetCompanies] = useState([])

  // Fetch companies from API
  async function fetchCompanies() {
    try {
      const url = "https://someones-questions.duckdns.org/api/v1/getCompanies"
      const res = await axios.get(url)

      SetCompanies(res.data.data || [])
    }
    catch (err) {
      console.log("Error while Fetching Companies...")
      SetCompanies([])
    }
  }

  const value = {
    Companies,
    SetCompanies,
    fetchCompanies
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

export const AppRuoter = () => {
  return (
    <Routes>

        {/* Login and Register */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        {/* JournalApp */}
        <Route path="/*" element={ <JournalRoutes /> } />


    </Routes>
  )
}

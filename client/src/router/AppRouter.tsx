import { Route, Routes } from "react-router-dom"
import GamesPage from "../pages/GamesPage"
import GamePage from "../pages/GamePage"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<GamesPage />} />
            <Route path="/:id" element={<GamePage />} />
        </Routes>
    )
}

export default AppRouter
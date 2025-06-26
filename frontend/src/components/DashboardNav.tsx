import { useIsMobile } from "../hooks/use-mobile";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useAppContext } from "@/context/context";

const DashboardNav = () => {
    
    const { SetTeamOpen } = useAppContext()
    const isMobile = useIsMobile();

    return (
        <header className="bg-white md:border-b md:border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className={`text-2xl ${!isMobile ? "block" : "hidden"} font-bold text-gray-900`}>
                        Team Dashboard
                    </h1>
                    <p className={`text-sm ${!isMobile ? "block" : "hidden"} text-gray-600`}>
                        Manage teams and track progress
                    </p>
                </div>

                <div className="flex items-center space-x-2">
                    <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => {
                        console.log("Button clicked!")
                        SetTeamOpen(true)
                    }}>
                        <Plus className="mr-2 h-4 w-4" />
                        Create New Team
                    </Button>

                </div>
            </div>
        </header>
    )
}

export default DashboardNav
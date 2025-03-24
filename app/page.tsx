import { ModeToggle } from "@/components/ModeToggle";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div>
        <div className="flex justify-between p-5">
          <ModeToggle />
          <Navbar/>
        </div>
        
    </div>
   

  );
}

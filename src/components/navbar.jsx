import { Navbar } from "flowbite-react";
import { Laptop } from "lucide-react";

function MyNavbar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 py-2">
            <div className="container mx-auto px-4">
            <Navbar fluid rounded border className="bg-[#1a1e2e]">
            <Navbar.Brand href="/">
                <Laptop className="text-white mr-3 h-6 sm:h-9" alt="logo icon"/>
                <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Zak Goldberg</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="#Experience" className= "text-white">Experience</Navbar.Link>
                <Navbar.Link href="#Contact" className= "text-white">Contact</Navbar.Link>
                <Navbar.Link href="#Resume" className= "text-white">Resume</Navbar.Link>
            </Navbar.Collapse>
            </Navbar>
            </div>
        </div>
    );
};

export default MyNavbar;
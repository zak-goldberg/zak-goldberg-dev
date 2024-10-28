import { Navbar } from "flowbite-react";
import { Laptop } from "lucide-react";
import { Link } from "react-router-dom";

function MyNavbar() {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 py-2">
        <div className="container mx-auto px-4">
          <Navbar fluid rounded border className="bg-[#1a1e2e]">
            <Navbar.Brand as={Link} to="/">
              <Laptop className="text-white mr-3 h-6 sm:h-9" alt="logo icon" />
              <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                Zak Goldberg
              </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Navbar.Link as={Link} to="experience" className="text-white">
                Experience
              </Navbar.Link>
              <Navbar.Link
                href="mailto:zak.goldberg@gmail.com"
                className="text-white"
              >
                Contact
              </Navbar.Link>
              <Navbar.Link href="#Resume" className="text-white">
                Resume
              </Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
};

export default MyNavbar;
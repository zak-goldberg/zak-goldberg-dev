import { Footer } from "flowbite-react";

const MyFooter = () => {
    return (
        <section id="footer-container" className="container mx-auto px-4 py-2">
        <div className="bg-[#1a1e2e] py-2 border rounded justify-evenly">
          <Footer className="bg-[#1a1e2e] px-2">
            <span className="text-white">Copyright © 2024 Zak Goldberg. All Rights Reserved.</span>
          </Footer>
        </div>
      </section>
    );
}

export default MyFooter;
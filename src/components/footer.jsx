import { Footer } from "flowbite-react";

const MyFooter = () => {
  return (
    <section id="footer-container" className="container mx-auto px-4 py-2">
      <div className="bg-[#1a1e2e] py-2 border rounded justify-evenly">
        <Footer className="bg-[#1a1e2e] px-2 flex flex-row justify-between align-middle">
          <span className="text-white">
            Copyright © 2024 Zak Goldberg. All Rights Reserved.
          </span>
          <a
            href="https://github.com/zak-goldberg/zak-goldberg-dev/"
            target="_blank"
          >
            <span className="text-white">Repo For This Page</span>
          </a>
        </Footer>
      </div>
    </section>
  );
};

export default MyFooter;

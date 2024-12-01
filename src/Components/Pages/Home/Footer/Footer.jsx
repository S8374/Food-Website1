import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content p-10">
      <div className="footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
        <aside className="flex  flex-col  md:items-start">
       
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav className="flex flex-col items-center md:items-start">
          <h6 className="footer-title font-bold mb-2">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col items-center md:items-start">
          <h6 className="footer-title font-bold mb-2">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col items-center md:items-start">
          <h6 className="footer-title font-bold mb-2">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

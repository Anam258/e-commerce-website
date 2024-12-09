import * as React from "react";

interface FooterLinkProps {
  text: string;
  className?: string;
}

interface FooterSectionProps {
  title: string;
  links: string[];
}

const FooterLink: React.FC<FooterLinkProps> = ({ text, className = "" }) => (
  <a 
    href="#" 
    className={`mt-7 text-xs leading-3 text-white hover:text-white focus:text-white focus:outline-none ${className}`}
    role="menuitem"
    tabIndex={0}
  >
    {text}
  </a>
);

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <nav 
    className="flex flex-col"
    role="navigation"
    aria-label={title}
  >
    <h2 className="text-xs tracking-wide leading-loose text-white uppercase">
      {title}
    </h2>
    <div role="menu">
      {links.map((link, index) => (
        <FooterLink key={index} text={link} />
      ))}
    </div>
  </nav>
);

const Footer: React.FC = () => {
  const getHelpLinks = [
    "Order Status",
    "Delivery",
    "Returns",
    "Payment Options",
    "Contact Us On Nike.com Inquiries",
    "Contact Us On All Other Inquiries"
  ];

  const aboutLinks = [
    "News",
    "Careers",
    "Investors",
    "Sustainability"
  ];

  const mainLinks = [
    "Find A Store",
    "Become A Member",
    "Sign Up for Email",
    "Send Us Feedback",
    "Student Discounts"
  ];

  const footerLinks = [
    "Guides",
    "Terms of Sale", 
    "Terms of Use",
    "Nike Privacy Policy"
  ];

  return (
    <footer className="flex flex-col bg-neutral-900" role="contentinfo">
      <div className="flex flex-col px-10 pt-10 pb-4 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
          <div className="flex-auto mt-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
                <nav 
                  className="flex flex-col mt-1 text-xs leading-3 text-white max-md:mt-10"
                  role="navigation"
                  aria-label="Main links"
                >
                  {mainLinks.map((link, index) => (
                    <FooterLink 
                      key={index} 
                      text={link} 
                      className="uppercase mt-7"
                    />
                  ))}
                </nav>
              </div>
              <div className="flex flex-col ml-5 w-[51%] max-md:ml-0 max-md:w-full">
                <FooterSection title="Get Help" links={getHelpLinks} />
              </div>
              <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                <FooterSection title="About Nike" links={aboutLinks} />
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/afe336cc16b84f5e88f05eaaebfef4fd/1d0b71a686fb499c179bfabbeef6caf76f65825c0af860f567c8ef76773e206c?apiKey=afe336cc16b84f5e88f05eaaebfef4fd&"
            alt="Nike logo"
            className="object-contain shrink-0 max-w-full aspect-[9.09] w-[337px]"
          />
        </div>
        <div className="flex flex-wrap gap-5 justify-between items-start mt-14 w-full max-md:mt-10 max-md:mr-2 max-md:max-w-full">
          <div className="flex gap-4">
            <div className="flex gap-2 items-end pr-2 text-xs leading-none text-white whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/afe336cc16b84f5e88f05eaaebfef4fd/2c3cf51a60dcad8155a1c35df68f880049064af1bef7db01392ef898da56d0bb?apiKey=afe336cc16b84f5e88f05eaaebfef4fd&"
                alt="India location icon"
                className="object-contain shrink-0 aspect-[1.2] w-[18px]"
              />
              <span>India</span>
            </div>
            <div className="text-xs leading-none basis-auto text-zinc-500">
              © 2023 Nike, Inc. All Rights Reserved
            </div>
          </div>
          <nav 
            className="flex gap-7 mt-1.5 text-xs leading-loose text-right text-zinc-500"
            role="navigation"
            aria-label="Legal links"
          >
            {footerLinks.map((link, index) => (
              <a 
                key={index}
                href="#"
                className="hover:text-white focus:text-white focus:outline-none"
                tabIndex={0}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

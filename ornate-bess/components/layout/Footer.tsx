import Link from "next/link";
import Image from "next/image";

const footerSections = [
  {
    title: "Products",
    links: [
      { label: "UnityESS Model A", href: "/products/model-a" },
      { label: "UnityESS Model B", href: "/products/model-b" },
      { label: "UnityESS Model C", href: "/products/model-c" },
      { label: "All Products", href: "/products" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "C&I Storage", href: "/products#applications" },
      { label: "Solar Hybrid", href: "/products#applications" },
      { label: "Grid Scale", href: "/products#applications" },
      { label: "Microgrids", href: "/products#applications" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Ornate Solar", href: "https://ornatesolar.com" },
      { label: "Inverted Energy", href: "https://invertedenergy.in" },
      { label: "Certifications", href: "/products#certifications" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f5f5f7]">
      {/* Main footer content */}
      <div className="max-w-screen-xl mx-auto px-6 pt-12 pb-4">
        {/* Logo row */}
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#d2d2d7]">
          <Image
            src="/images/logos/ornate-png.png"
            alt="Ornate Solar"
            width={100}
            height={32}
            className="h-8 w-auto object-contain"
          />
          <div className="w-px h-8 bg-[#d2d2d7]" />
          <Image
            src="/images/logos/unityess-logo.svg"
            alt="UnityESS"
            width={100}
            height={32}
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pb-8 border-b border-[#d2d2d7]">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-[0.6875rem] font-semibold text-[#1d1d1f] uppercase tracking-widest mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.75rem] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <p className="text-[0.6875rem] text-[#6e6e73]">
            Copyright &copy; {year} Ornate Agencies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/sitemap" className="text-[0.6875rem] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
              Sitemap
            </Link>
            <span className="text-[#d2d2d7]">|</span>
            <Link href="/contact" className="text-[0.6875rem] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#d2d2d7]">|</span>
            <span className="text-[0.6875rem] text-[#6e6e73]">India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

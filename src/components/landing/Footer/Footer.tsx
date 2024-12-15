import { FooterNewsletter } from "./FooterNewsletter";
import { FooterLinks } from "./FooterLinks";
import { FooterSocial } from "./FooterSocial";
import { FooterBottom } from "./FooterBottom";
import { Crown } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#001B44] to-[#000B1E] border-t border-kingdom-primary/20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-kingdom-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-kingdom-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-8 pt-20 pb-8">
        {/* Logo & Newsletter Section */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Crown className="w-10 h-10 text-kingdom-accent" />
            <span className="text-3xl font-bold bg-gradient-to-r from-kingdom-primary via-kingdom-secondary to-kingdom-accent bg-clip-text text-transparent">
              MyKingdom
            </span>
          </div>
          <FooterNewsletter />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <FooterLinks />
        </div>

        {/* Social & Bottom */}
        <div className="pt-8 border-t border-white/10">
          <FooterSocial />
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};
'use client'

import React from "react";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";

export default function Header() {
  const logo = "/logo.png";
  const marca = "La Leyenda";

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { label: "Nosotros", href: "/#nosotros" },
    { label: "Productos", href: "/productos" },
    { label: "Franquicias", href: "/franquicias" },
    { label: "Contacto", href: "/#contacto" },
    { label: "Mayorista", href: "/mayorista" }
  ];

  return (
    <header className="mb-16">
      <Navbar className="bg-black"
        onMenuOpenChange={setIsMenuOpen}
        isBordered
        isBlurred={false} 
        style={{ position: "fixed", width: "100%", zIndex: 1000 }}
      >
        <NavbarContent>
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />

          <NavbarBrand>
            <Link href="/">
              <Image src={logo} alt={marca} width={64} height={64} />
              <p className="font-bold text-inherit">{marca}</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="start">
          {navItems.map((item, index) => (
            <NavbarItem key={`${item.label}-${index}`}>
              <Link href={item.href}>{item.label}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarMenu className="bg-black">
          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`} className=" flex flex-col gap-2">
              <Link href={item.href}>{item.label}</Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  );
}
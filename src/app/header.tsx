'use client'

import React from "react";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

export default function Header() {

  const logo = "/logo.png"
  const marca = "La Leyenda"

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    <>
      <Link href="#">Nosotros</Link>
      <Link href="#">Productos</Link>
      <Link href="#">Sucursales</Link>
      <Link href="#">Franquicias</Link>
      <Link href="#">Contacto</Link>
      <Link href="#">Mayorista</Link>
    </>
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />

        <NavbarBrand>
          <Image src={logo} alt={marca} width={64} height={64} />
          <p className="font-bold text-inherit">{marca}</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem><Link href="#">Nosotros</Link></NavbarItem>

        <NavbarItem><Link href="#">Productos</Link></NavbarItem>

        <NavbarItem><Link href="#">Sucursales</Link></NavbarItem>

        <NavbarItem><Link href="#">Franquicias</Link></NavbarItem>

        <NavbarItem><Link href="#">Contacto</Link></NavbarItem>

        <NavbarItem><Link href="#">Mayorista</Link></NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className=" flex flex-col gap-2">
            {item}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

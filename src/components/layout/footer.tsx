import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-8">
      <div>
        <ul className=" flex gap-2 justify-center">
          <li><Link href="/">Trabajá con nosotros</Link></li>
          <p>-</p>
          <li><Link href="/">Proveedores</Link></li>
        </ul>
      
        <div className=" flex flex-wrap gap-1 justify-center">
          <p>© Copyright 2024 <Link href="https://github.com/Rompe-Aire">Rompe-Aire</Link></p>
          <p>-</p>
          <p>Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}
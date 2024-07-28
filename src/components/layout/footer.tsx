'use client'

import { useState } from 'react';
import JobForm from '../forms/job-form';
import ProvidersForm from '../forms/providers-form'; 
import Link from 'next/link';

export default function Footer() {
  // Estados para controlar la visibilidad de los formularios
  const [showJobForm, setShowJobForm] = useState(false);
  const [showProvidersForm, setShowProvidersForm] = useState(false);

  const handleJobClick = () => {
    setShowJobForm(true); // Muestra el formulario de trabajo al hacer clic en "Trabajá con nosotros"
  };

  const handleProvidersClick = () => {
    setShowProvidersForm(true); // Muestra el formulario de proveedores al hacer clic en "Proveedores"
  };

  const handleCloseJobForm = () => {
    setShowJobForm(false); // Oculta el formulario de trabajo
  };

  const handleCloseProvidersForm = () => {
    setShowProvidersForm(false); // Oculta el formulario de proveedores
  };

  return (
    <footer className="flex flex-col items-center justify-center w-full py-8">
      <div>
        <ul className="flex gap-2 justify-center">
          <li>
            <span className="text-yellow-500 hover:text-yellow-600 hover:cursor-pointer" onClick={handleJobClick}>
              Trabajá con nosotros
            </span>
          </li>
          <span className="text-yellow-500">-</span>
          <li>
            <span className="text-yellow-500 hover:text-yellow-600 hover:cursor-pointer" onClick={handleProvidersClick}>
              Proveedores
            </span>
          </li>
        </ul>

        <div className="flex flex-wrap gap-1 justify-center">
          <span>© Copyright 2024 <Link href="https://github.com/Rompe-Aire" className="text-yellow-500 hover:text-yellow-600">Rompe-Aire</Link></span>
          <span>-</span>
          <span>Todos los derechos reservados</span>
        </div>
      </div>

      {/* Renderizar los formularios si sus estados respectivos son verdaderos */}
      {showJobForm && (
        <JobForm onClose={handleCloseJobForm} />
      )}
      {showProvidersForm && (
        <ProvidersForm onClose={handleCloseProvidersForm} />
      )}
    </footer>
  );
}
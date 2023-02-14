import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/not-found',
    href: '/not-found',
    iconComponent:  { name: 'cil-speedometer' }
  },
  {
    title: true,
    name: 'Generar facturación'
  },
  {
    name: 'Factura Electrónica',
    url: '/fe-bill',
    href: '/fe-bill',
    iconComponent: { name: 'cil-shield-alt' }
  },
  {
    name: 'Documento Soporte',
    url: '/not-found',
    href: '/not-found',
    iconComponent: { name: 'cil-briefcase' },
    badge: {
      text: 'SOON',
      color: 'warning'
    }
  },
  {
    name: 'Nómina Electrónica',
    url: '/not-found',
    href: '/not-found',
    iconComponent: { name: 'cil-newspaper' },
    badge: {
      text: 'SOON',
      color: 'warning'
    }
  },
  {
    title: true,
    name: 'Reportes'
  },
  {
    name: 'Emitidos por Sucursal',
    url: '/issued',
    href: '/issued',
    iconComponent: { name: 'cil-list' }
  },
  {
    title: true,
    name: 'Registrar'
  },
  {
    name: 'Contratos',
    url: '/no-contract',
    href: '/no-contract',
    iconComponent: { name: 'cil-library-add' }
  },
  {
    name: 'Planes de Pago',
    url: '/not-found',
    href: '/not-found',
    iconComponent: { name: 'cil-money' }
  },
  {
    title: true,
    name: 'Archivos planos'
  },
  {
    name: 'Factura Electrónica',
    url: '/file-download',
    href: '/file-download',
    iconComponent: { name: 'cib-docusign' }
  },
];

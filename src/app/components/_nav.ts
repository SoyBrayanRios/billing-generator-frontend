import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/not-found',
    href: '/not-found',
    iconComponent: { name: 'cibMacys' }
  },
  {
    title: true,
    name: 'Generar facturación'
  },
  {
    name: 'Factura Electrónica',
    url: '/fe-bill',
    href: '/fe-bill',
    iconComponent: { name: 'cib-eventbrite' }
  },
  {
    name: 'Documento Soporte',
    url: '/not-found',
    href: '/not-found',
    iconComponent: { name: 'cib-disqus' },
    badge: {
      text: 'SOON',
      color: 'warning'
    }
  },
  {
    name: 'Nómina Electrónica',
    url: '/not-found',
    href: '/not-found',
    iconComponent: { name: 'cib-nginx' },
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
    iconComponent: { name: 'cilListNumbered' }
  },
  {
    title: true,
    name: 'Registrar'
  },
  {
    name: 'Contratos',
    url: '/no-contract',
    href: '/no-contract',
    iconComponent: { name: 'cib-buffer' }
  },
  {
    name: 'Planes de Pago',
    url: '/not-found',
    href: '/not-found',
    iconComponent: { name: 'cib-hackhands' }
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

import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/not-found',
    href: '/not-found',
    iconComponent:  { name: 'cil-speedometer' },
    badge: {
      text: 'SOON',
      color: 'warning'
    }
  },
  {
    title: true,
    name: 'Generar facturación'
  },
  {
    name: 'Servicios Faceldi',
    url: '/fe-bill',
    href: '/fe-bill',
    iconComponent: { name: 'cil-wallet' }
  },
  {
    title: true,
    name: 'Reportes'
  },
  {
    name: 'Emitidos por Sucursal',
    url: '/issued',
    href: '/issued',
    iconComponent: { name: 'cil-chart-line' }
  },
  {
    title: true,
    name: 'Registrar'
  },
  {
    name: 'Contratos',
    url: '/no-contract',
    href: '/no-contract',
    iconComponent: { name: 'cil-warning' }
  },
  {
    name: 'Cancelaciones',
    url: '/not-found',
    href: '/not-found',
    iconComponent: { name: 'cil-ban' },
    badge: {
      text: 'SOON',
      color: 'warning'
    }
  },
  {
    name: 'Planes de Pago',
    url: '/not-found',
    href: '/not-found',
    iconComponent: { name: 'cil-credit-card' },
    badge: {
      text: 'SOON',
      color: 'warning'
    }
  },
  {
    title: true,
    name: 'Archivos planos'
  },
  {
    name: 'Factura Electrónica',
    url: '/file-download',
    href: '/file-download',
    iconComponent: { name: 'cil-at' }
  },
  {
    name: 'Nómina Electrónica',
    url: '/not-found',
    href: '/not-found',
    iconComponent: { name: 'cil-running' },
    badge: {
      text: 'SOON',
      color: 'warning'
    }
  },
  {
    name: 'Documento Soporte',
    url: '/not-found',
    href: '/not-found',
    iconComponent: { name: 'cil-qr-code' },
    badge: {
      text: 'SOON',
      color: 'warning'
    }
  },
];

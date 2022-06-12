import * as React from 'react'
import { SiWordpress, SiContentful } from 'react-icons/si'

export interface Link {
  label: string
  href?: string
  children?: Array<{
    label: string
    description?: string
    href: string
    icon?: React.ReactElement
  }>
}

export const links: Link[] = [
  { label: 'About', href: '/#about' },
  {
    label: 'Services',
    children: [
      {
        label: 'Headless Wordpress Development',
        description: 'Wordpress as a Headless cms & Nextjs for Frontend',
        href: '/services/headless-wordpress-development-services',
        icon: <SiWordpress />,
      },
      {
        label: 'Headless CMS & NextJs Frontend',
        description: ' Headless cms such as Contentful, Prismic, storyblok,sanity and GatsbyJs or Nexts for the frontend',
        href: '/#contact',
        icon: <SiContentful />,
      },
      // {
      //   label: 'Wordpress Development',
      //   description: 'Traditional Wordpress development with recommended page builder or custom theme',
      //   href: '#',
      //   icon: <IoGrid />,
      // },
      // {
      //   label: 'Site maintentance',
      //   description: 'Managing, updating and Optimizing your website to make you cool',
      //   href: '#',
      //   icon: <MdWeb />,
      // },
    ],
  },
  // { label: 'Blog', href: '#' }
]

import { NavItem } from '../types';

export function renderHeader(container: HTMLElement): void {
  const navItems: NavItem[] = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  const header = document.createElement('header');
  header.className = 'bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50';

  const nav = document.createElement('nav');
  nav.className = 'container mx-auto px-4 py-3 flex items-center justify-between';

  const logo = document.createElement('a');
  logo.href = '#';
  logo.className = 'text-2xl font-bold text-gray-800 dark:text-white';
  logo.textContent = 'Your SaaS';

  const navList = document.createElement('ul');
  navList.className = 'flex space-x-6';

  navItems.forEach(item => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.href;
    link.className = 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors';
    link.textContent = item.label;
    listItem.appendChild(link);
    navList.appendChild(listItem);
  });

  const button = document.createElement('button');
  button.className = 'bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors';
  button.textContent = 'Get Started';

  nav.appendChild(logo);
  nav.appendChild(navList);
  nav.appendChild(button);
  header.appendChild(nav);
  container.appendChild(header);
}
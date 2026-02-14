import { Feature } from '../types';

const featuresData: Feature[] = [
  {
    title: 'Feature 1',
    description: 'Description of feature 1. Explain its benefits and how it helps users.',
    icon: 'icon-feature-1', // Replace with actual icon class or SVG
  },
  {
    title: 'Feature 2',
    description: 'Description of feature 2. Explain its benefits and how it helps users.',
    icon: 'icon-feature-2', // Replace with actual icon class or SVG
  },
  {
    title: 'Feature 3',
    description: 'Description of feature 3. Explain its benefits and how it helps users.',
    icon: 'icon-feature-3', // Replace with actual icon class or SVG
  },
  {
    title: 'Feature 4',
    description: 'Description of feature 4. Explain its benefits and how it helps users.',
    icon: 'icon-feature-4', // Replace with actual icon class or SVG
  },
];

export function renderFeatures(container: HTMLElement): void {
  const featuresSection = document.createElement('section');
  featuresSection.className = 'bg-white py-12 dark:bg-gray-800';

  const featuresContainer = document.createElement('div');
  featuresContainer.className = 'container mx-auto px-4';

  const featuresGrid = document.createElement('div');
  featuresGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6';

  featuresData.forEach((feature) => {
    const featureCard = document.createElement('div');
    featureCard.className = 'bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-700';

    const iconElement = document.createElement('div');
    iconElement.className = `text-3xl text-primary mb-4 ${feature.icon}`; // Use the icon class
    // You might need to add specific icon library or SVG rendering here

    const titleElement = document.createElement('h3');
    titleElement.className = 'text-xl font-semibold mb-2 dark:text-white';
    titleElement.textContent = feature.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.className = 'text-gray-600 dark:text-gray-400';
    descriptionElement.textContent = feature.description;

    featureCard.appendChild(iconElement);
    featureCard.appendChild(titleElement);
    featureCard.appendChild(descriptionElement);
    featuresGrid.appendChild(featureCard);
  });

  featuresContainer.appendChild(featuresGrid);
  featuresSection.appendChild(featuresContainer);
  container.appendChild(featuresSection);
}
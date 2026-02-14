import { Plan } from '../types';

const plans: Plan[] = [
  {
    name: 'Basic',
    price: 9,
    features: ['Feature 1', 'Feature 2', 'Limited Support'],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: 29,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Priority Support'],
    cta: 'Upgrade Now',
  },
  {
    name: 'Enterprise',
    price: 99,
    features: ['All Features', 'Dedicated Support', 'Customization'],
    cta: 'Contact Us',
  },
];

export function renderPricing(container: HTMLElement): void {
  const pricingSection = document.createElement('section');
  pricingSection.className = 'bg-gray-100 dark:bg-gray-900 py-12';

  const pricingContainer = document.createElement('div');
  pricingContainer.className = 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8';

  const title = document.createElement('h2');
  title.className = 'text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl text-center mb-8';
  title.textContent = 'Choose Your Perfect Plan';
  pricingContainer.appendChild(title);

  const planGrid = document.createElement('div');
  planGrid.className = 'grid grid-cols-1 md:grid-cols-3 gap-8';

  plans.forEach((plan) => {
    const planCard = document.createElement('div');
    planCard.className = 'bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col h-full';

    const planName = document.createElement('h3');
    planName.className = 'text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center';
    planName.textContent = plan.name;
    planCard.appendChild(planName);

    const planPrice = document.createElement('div');
    planPrice.className = 'text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 text-center';
    planPrice.textContent = `$${plan.price}/month`;
    planCard.appendChild(planPrice);

    const featuresList = document.createElement('ul');
    featuresList.className = 'mb-6 flex-grow';
    plan.features.forEach((feature) => {
      const featureItem = document.createElement('li');
      featureItem.className = 'text-gray-700 dark:text-gray-300 py-1';
      featureItem.textContent = feature;
      featuresList.appendChild(featureItem);
    });
    planCard.appendChild(featuresList);

    const ctaButton = document.createElement('a');
    ctaButton.href = '#'; // Replace with actual link
    ctaButton.className = 'bg-indigo-600 dark:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition duration-200 block text-center';
    ctaButton.textContent = plan.cta;
    planCard.appendChild(ctaButton);

    planGrid.appendChild(planCard);
  });

  pricingContainer.appendChild(planGrid);
  pricingSection.appendChild(pricingContainer);
  container.appendChild(pricingSection);
}
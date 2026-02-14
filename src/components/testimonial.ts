import { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote: "This SaaS platform has revolutionized our workflow. The ease of use and powerful features have significantly boosted our team's productivity.",
    author: "Jane Doe",
    title: "CEO, Acme Corp",
    image: "https://placekitten.com/100/100", // Replace with actual image URL
  },
  {
    id: 2,
    quote: "I've tried several similar products, but this one stands out. The customer support is exceptional, and the platform is constantly improving.",
    author: "John Smith",
    title: "Marketing Manager, Beta Inc",
    image: "https://placekitten.com/101/101", // Replace with actual image URL
  },
  {
    id: 3,
    quote: "An incredible tool that has streamlined our operations. We've seen a noticeable improvement in efficiency and a reduction in errors.",
    author: "Alice Johnson",
    title: "Operations Director, Gamma Ltd",
    image: "https://placekitten.com/102/102", // Replace with actual image URL
  },
];

export function renderTestimonials(container: HTMLElement): void {
  const section = document.createElement('section');
  section.className = 'bg-gray-100 dark:bg-gray-800 py-12';

  const containerDiv = document.createElement('div');
  containerDiv.className = 'container mx-auto px-4';

  const title = document.createElement('h2');
  title.className = 'text-3xl font-bold text-center text-gray-800 dark:text-white mb-8';
  title.textContent = 'What Our Customers Say';
  containerDiv.appendChild(title);

  const testimonialsGrid = document.createElement('div');
  testimonialsGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';

  testimonialsData.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col justify-between';

    const quote = document.createElement('p');
    quote.className = 'text-gray-700 dark:text-gray-300 italic mb-4';
    quote.textContent = testimonial.quote;
    testimonialCard.appendChild(quote);

    const authorInfo = document.createElement('div');
    authorInfo.className = 'flex items-center';

    const image = document.createElement('img');
    image.className = 'w-12 h-12 rounded-full mr-4';
    image.src = testimonial.image;
    image.alt = testimonial.author;
    authorInfo.appendChild(image);

    const authorDetails = document.createElement('div');
    authorDetails.className = 'flex flex-col';

    const authorName = document.createElement('span');
    authorName.className = 'font-bold text-gray-800 dark:text-white';
    authorName.textContent = testimonial.author;
    authorDetails.appendChild(authorName);

    const authorTitle = document.createElement('span');
    authorTitle.className = 'text-gray-500 dark:text-gray-400';
    authorTitle.textContent = testimonial.title;
    authorDetails.appendChild(authorTitle);

    authorInfo.appendChild(authorDetails);
    testimonialCard.appendChild(authorInfo);

    testimonialsGrid.appendChild(testimonialCard);
  });

  containerDiv.appendChild(testimonialsGrid);
  section.appendChild(containerDiv);
  container.appendChild(section);
}
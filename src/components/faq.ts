import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: 'What is this SaaS product?',
    answer: 'This is a SaaS product that helps you manage your tasks more efficiently. It provides a user-friendly interface and powerful features to streamline your workflow.'
  },
  {
    question: 'How much does it cost?',
    answer: 'We offer different pricing plans to suit your needs. Please visit our pricing page for more details.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 14-day free trial. You can sign up on our website to start your trial today.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer email and chat support. Our support team is available 24/7 to assist you with any questions or issues you may have.'
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time. There are no cancellation fees.'
  }
];

export function renderFAQ(container: HTMLElement): void {
  const faqSection = document.createElement('section');
  faqSection.className = 'bg-gray-100 dark:bg-gray-800 py-12';

  const faqContainer = document.createElement('div');
  faqContainer.className = 'container mx-auto px-4';

  const faqTitle = document.createElement('h2');
  faqTitle.className = 'text-3xl font-semibold text-gray-800 dark:text-white mb-8 text-center';
  faqTitle.textContent = 'Frequently Asked Questions';

  faqContainer.appendChild(faqTitle);

  const faqList = document.createElement('div');
  faqList.className = 'space-y-4';

  faqData.forEach(item => {
    const faqItem = document.createElement('div');
    faqItem.className = 'bg-white dark:bg-gray-700 rounded-lg shadow-md p-4';

    const question = document.createElement('h3');
    question.className = 'text-lg font-medium text-gray-700 dark:text-gray-300 mb-2';
    question.textContent = item.question;

    const answer = document.createElement('p');
    answer.className = 'text-gray-600 dark:text-gray-400';
    answer.textContent = item.answer;

    faqItem.appendChild(question);
    faqItem.appendChild(answer);
    faqList.appendChild(faqItem);
  });

  faqContainer.appendChild(faqList);
  faqSection.appendChild(faqContainer);
  container.appendChild(faqSection);
}
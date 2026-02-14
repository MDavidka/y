import './style.css'
import { renderHeader } from './components/header';
import { renderHero } from './components/hero';
import { renderFeatures } from './components/features';
import { renderPricing } from './components/pricing';
import { renderTestimonial } from './components/testimonial';
import { renderFaq } from './components/faq';
import { renderFooter } from './components/footer';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector<HTMLDivElement>('#app');

  if (!app) {
    console.error('Root element with id "app" not found.');
    return;
  }

  // Render components
  renderHeader(app);
  renderHero(app);
  renderFeatures(app);
  renderPricing(app);
  renderTestimonial(app);
  renderFaq(app);
  renderFooter(app);
});
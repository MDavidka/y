import { SiteConfig } from '../types';

export function renderFooter(container: HTMLElement, config: SiteConfig): void {
  const footerHTML = `
    <footer class="bg-gray-100 dark:bg-gray-900 py-8 mt-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 class="font-bold text-gray-700 dark:text-gray-200 mb-4">${config.title}</h3>
            <p class="text-gray-500 dark:text-gray-400 text-sm">
              ${config.description}
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-2">Company</h4>
            <ul class="text-gray-500 dark:text-gray-400 text-sm">
              <li><a href="#" class="hover:text-blue-500">About Us</a></li>
              <li><a href="#" class="hover:text-blue-500">Careers</a></li>
              <li><a href="#" class="hover:text-blue-500">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-2">Resources</h4>
            <ul class="text-gray-500 dark:text-gray-400 text-sm">
              <li><a href="#" class="hover:text-blue-500">Blog</a></li>
              <li><a href="#" class="hover:text-blue-500">Help Center</a></li>
              <li><a href="#" class="hover:text-blue-500">Terms of Service</a></li>
              <li><a href="#" class="hover:text-blue-500">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-2">Connect</h4>
            <ul class="text-gray-500 dark:text-gray-400 text-sm">
              <li><a href="#" class="hover:text-blue-500">Facebook</a></li>
              <li><a href="#" class="hover:text-blue-500">Twitter</a></li>
              <li><a href="#" class="hover:text-blue-500">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div class="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4">
          <p class="text-center text-gray-500 dark:text-gray-400 text-xs">
            &copy; ${new Date().getFullYear()} ${config.title}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `;

  container.innerHTML = footerHTML;
}
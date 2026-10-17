const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.icon--burger_menu');
const menuClose = document.querySelector('.icon--close');
const navLinks = document.querySelectorAll('.nav__link, .footer__list__link');
const actionButtons = document.querySelectorAll('.action-button, .root-button');
const subscribeForm = document.querySelector('#form__subscribe');

const toast = document.createElement('div');
toast.className = 'site-toast';
toast.setAttribute('role', 'status');
toast.setAttribute('aria-live', 'polite');
toast.style.cssText = `
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 9999;
  padding: 12px 18px;
  border-radius: 999px;
  background: #173f46;
  color: #fff;
  font-size: 14px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.25s ease, transform 0.25s ease;
  pointer-events: none;
`;
document.body.appendChild(toast);

const showToast = (message) => {
  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';

  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
  }, 2200);
};

const setMenuState = (isOpen) => {
  if (!menu) {
    return;
  }

  menu.classList.toggle('is-open', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
};

menuToggle?.addEventListener('click', (event) => {
  event.preventDefault();
  const isOpen = !menu?.classList.contains('is-open');

  setMenuState(isOpen);
});

menuClose?.addEventListener('click', (event) => {
  event.preventDefault();
  setMenuState(false);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setMenuState(false);
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenuState(false);
  }
});

document.addEventListener('click', (event) => {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const clickedOnMenuToggle = target.closest('.icon--burger_menu');
  const clickedInsideMenu = menu?.contains(target);

  if (
    menu?.classList.contains('is-open') &&
    !clickedOnMenuToggle &&
    !clickedInsideMenu
  ) {
    setMenuState(false);
  }
});

actionButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const currentButton = event.currentTarget;

    if (currentButton.closest('.subscribe__action-button')) {
      return;
    }

    if (currentButton.closest('.root-button')) {
      event.preventDefault();

      const sectionId = currentButton.className.includes('exhibition')
        ? '#events'
        : currentButton.className.includes('events')
          ? '#visit'
          : currentButton.className.includes('news')
            ? '#subscribe'
            : '#home';

      const targetSection = document.querySelector(sectionId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      showToast('More information coming soon');
      return;
    }

    if (currentButton.closest('.action-button')) {
      if (currentButton.dataset.exhibitionsPage === 'true') {
        window.location.href = './exhibitions.html';
        return;
      }

      if (currentButton.dataset.ticketPage === 'true') {
        window.location.href = './buy-ticket.html';
        return;
      }

      event.preventDefault();
      showToast('Booking started');
    }
  });
});

subscribeForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const input = subscribeForm.querySelector('input[type="email"]');
  const email = input?.value.trim();

  if (!email) {
    showToast('Please enter your email');
    input?.focus();
    return;
  }

  showToast('Thanks! We will keep you informed.');
  subscribeForm.reset();
});

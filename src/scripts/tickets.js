const ticketTypeSelect = document.querySelector('#ticket-type');
const ticketCountInput = document.querySelector('#ticket-count');
const summaryTicket = document.querySelector('#summary-ticket');
const summaryCount = document.querySelector('#summary-count');
const summaryUnit = document.querySelector('#summary-unit');
const summaryTotal = document.querySelector('#summary-total');
const ticketForm = document.querySelector('#ticket-form');

const ticketPrices = {
  adult: 20,
  student: 12,
  family: 42,
  veteran: 10,
};

const ticketLabels = {
  adult: 'Adult',
  student: 'Student',
  family: 'Family',
  veteran: 'Veteran',
};

const updateSummary = () => {
  if (!ticketTypeSelect || !ticketCountInput) {
    return;
  }

  const type = ticketTypeSelect.value;
  const quantity = Number(ticketCountInput.value) || 1;
  const unitPrice = ticketPrices[type] ?? 0;
  const total = unitPrice * quantity;

  summaryTicket.textContent = ticketLabels[type] ?? 'Ticket';
  summaryCount.textContent = String(quantity);
  summaryUnit.textContent = `$${unitPrice}`;
  summaryTotal.textContent = `$${total}`;
};

ticketTypeSelect?.addEventListener('change', updateSummary);
ticketCountInput?.addEventListener('input', updateSummary);

if (ticketForm) {
  ticketForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const dateInput = document.querySelector('#visit-date');
    const visitorName = document.querySelector('#visitor-name');
    const visitorEmail = document.querySelector('#visitor-email');

    if (!dateInput.value || !visitorName.value.trim() || !visitorEmail.value.trim()) {
      window.alert('Please complete all required fields.');
      return;
    }

    window.alert('Your order has been created successfully.');
  });
}

updateSummary();

// --- Selecting elements ---
const totalCountEl = document.getElementById('total');
const applicationCountEl = document.getElementById('applicationCount');
const interviewCountEl = document.getElementById('interviewCount');
const rejectedCountEl = document.getElementById('rejectedCount');
const allCardsContainer = document.getElementById('allCards');
const allCards = document.querySelectorAll('.job-card');

// --- State tracking ---
let counts = {
    total: allCards.length,
    application: 0,
    interview: 0,
    rejected: 0
};

// --- Initialization ---
function init() {
    updateDisplay();
    setupEventListeners();
}

// --- Event Listeners ---
function setupEventListeners() {
    // Card status update & delete
    allCardsContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.job-card');
        if (!card) return;

        // Update status
        if (e.target.classList.contains('btn-dash')) {
            const status = e.target.innerText.toLowerCase();
            updateCardStatus(card, status);
        }

        // Delete card
        if (e.target.closest('.btn-delete')) {
            card.remove();
            recalculateTotals();
        }
    });

    // Filter buttons
    document.querySelectorAll('.btn-primary, .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filterType = e.target.id.replace('btn-filter-', '');
            filterCards(filterType);

            document.querySelectorAll('.btn').forEach(b => b.classList.remove('btn-primary'));
            e.target.classList.add('btn-primary');
        });
    });
}

// --- Core Logic ---
function updateCardStatus(card, status) {
    const badge = card.querySelector('.btn-soft');
    badge.innerText = status.charAt(0).toUpperCase() + status.slice(1);
    badge.className = 'btn btn-soft';
    if (status === 'application') badge.classList.add('btn-info');
    else if (status === 'interview') badge.classList.add('btn-success');
    else if (status === 'rejected') badge.classList.add('btn-error');

    card.setAttribute('data-status', status);
    recalculateTotals();
}

function recalculateTotals() {
    const cards = document.querySelectorAll('.job-card');
    counts.total = cards.length;
    counts.application = document.querySelectorAll('.job-card[data-status="application"]').length;
    counts.interview = document.querySelectorAll('.job-card[data-status="interview"]').length;
    counts.rejected = document.querySelectorAll('.job-card[data-status="rejected"]').length;
    updateDisplay();
}

function updateDisplay() {
    totalCountEl.innerText = counts.total;
    applicationCountEl.innerText = counts.application;
    interviewCountEl.innerText = counts.interview;
    rejectedCountEl.innerText = counts.rejected;
}

function filterCards(type) {
    const cards = document.querySelectorAll('.job-card');
    let visibleCardsCount = 0;

    cards.forEach(card => {
        const status = card.getAttribute('data-status');
        if (type === 'all' || status === type) {
            card.style.display = 'flex';
            visibleCardsCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Hide all empty sections
    document.getElementById('add-application').classList.add('hidden');
    document.getElementById('add-interview').classList.add('hidden');
    document.getElementById('add-rejected').classList.add('hidden');

    // Show empty section if no cards
    if (visibleCardsCount === 0 && type !== 'all') {
        const emptySection = document.getElementById(`add-${type}`);
        if (emptySection) {
            emptySection.classList.remove('hidden');
            allCardsContainer.classList.add('hidden');
        }
    } else {
        allCardsContainer.classList.remove('hidden');
    }
}

// --- Start ---
init();
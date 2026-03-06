// Data transaksi berdasarkan laporan pengeluaran
const transactionData = [
  // PEMASUKAN
  {
    id: 1,
    type: 'income',
    title: 'Sisa Final 2024',
    amount: 3559324,
    category: 'Uang Voting',
    date: new Date('2025-01-05'),
    time: '09:15',
    transactionId: '847293'
  },
  {
    id: 2,
    type: 'income',
    title: 'Uang Voting',
    amount: 31631400,
    category: 'Uang Voting',
    date: new Date('2025-08-10'),
    time: '14:30',
    transactionId: '523891'
  },

  // PENGELUARAN - Honorarium & Jasa
  {
    id: 3,
    type: 'outcome',
    title: 'Kostum Perlengkapan 3 Besar',
    amount: 1500000,
    category: 'Honorarium',
    date: new Date('2025-02-12'),
    time: '10:20',
    transactionId: '294756'
  },
  {
    id: 4,
    type: 'outcome',
    title: 'Koreo',
    amount: 1000000,
    category: 'Jasa Pelatih',
    date: new Date('2025-02-15'),
    time: '11:45',
    transactionId: '618245'
  },
  {
    id: 5,
    type: 'outcome',
    title: 'Mas Nurkholis',
    amount: 302500,
    category: 'Honorarium',
    date: new Date('2025-02-18'),
    time: '13:00',
    transactionId: '739182'
  },

  // PENGELUARAN - Perlengkapan & Atribut
  {
    id: 6,
    type: 'outcome',
    title: 'Ideas (Plakat)',
    amount: 1502000,
    category: 'Atribut',
    date: new Date('2025-03-05'),
    time: '09:30',
    transactionId: '456721'
  },
  {
    id: 7,
    type: 'outcome',
    title: 'Hadiah Atribut',
    amount: 2000000,
    category: 'Atribut',
    date: new Date('2025-03-08'),
    time: '15:20',
    transactionId: '892347'
  },
  {
    id: 8,
    type: 'outcome',
    title: 'Selempang',
    amount: 900000,
    category: 'Atribut',
    date: new Date('2025-03-10'),
    time: '10:45',
    transactionId: '165489'
  },
  {
    id: 9,
    type: 'outcome',
    title: 'Crown 3 Besar 2025',
    amount: 1310000,
    category: 'Atribut',
    date: new Date('2025-03-15'),
    time: '14:15',
    transactionId: '347682'
  },
  {
    id: 10,
    type: 'outcome',
    title: 'Crown Atribut Delegasi',
    amount: 181350,
    category: 'Atribut',
    date: new Date('2025-03-18'),
    time: '11:30',
    transactionId: '921573'
  },
  {
    id: 11,
    type: 'outcome',
    title: 'Atribut Mas',
    amount: 94099,
    category: 'Atribut',
    date: new Date('2025-03-20'),
    time: '16:00',
    transactionId: '584216'
  },
  {
    id: 12,
    type: 'outcome',
    title: 'Crown Mini 10 Besar',
    amount: 145742,
    category: 'Atribut',
    date: new Date('2025-03-22'),
    time: '09:45',
    transactionId: '673940'
  },
  {
    id: 13,
    type: 'outcome',
    title: 'Tongkat Bledeg',
    amount: 200000,
    category: 'Atribut',
    date: new Date('2025-03-25'),
    time: '13:20',
    transactionId: '208465'
  },

  // PENGELUARAN - MUA, Kostum & Photoshoot
  {
    id: 14,
    type: 'outcome',
    title: 'HD Studio',
    amount: 602500,
    category: 'Photoshoot',
    date: new Date('2025-04-05'),
    time: '10:00',
    transactionId: '751328'
  },
  {
    id: 15,
    type: 'outcome',
    title: 'Kostum 1',
    amount: 752500,
    category: 'Kostum',
    date: new Date('2025-04-08'),
    time: '14:30',
    transactionId: '419267'
  },
  {
    id: 16,
    type: 'outcome',
    title: 'Nombok Baju',
    amount: 500000,
    category: 'Kostum',
    date: new Date('2025-04-10'),
    time: '11:15',
    transactionId: '836572'
  },
  {
    id: 17,
    type: 'outcome',
    title: 'Make up Diva Store',
    amount: 350000,
    category: 'MUA',
    date: new Date('2025-04-12'),
    time: '09:00',
    transactionId: '192748'
  },
  {
    id: 18,
    type: 'outcome',
    title: 'Make up',
    amount: 350000,
    category: 'MUA',
    date: new Date('2025-04-15'),
    time: '15:45',
    transactionId: '574209'
  },
  {
    id: 19,
    type: 'outcome',
    title: 'Make up Cowok',
    amount: 100000,
    category: 'MUA',
    date: new Date('2025-04-18'),
    time: '12:30',
    transactionId: '685931'
  },

  // PENGELUARAN - Operasional & Logistik
  {
    id: 20,
    type: 'outcome',
    title: 'Desain Feed',
    amount: 2000000,
    category: 'Jasa/Promosi',
    date: new Date('2025-05-05'),
    time: '10:00',
    transactionId: '403896'
  },
  {
    id: 21,
    type: 'outcome',
    title: 'Volunteer',
    amount: 600000,
    category: 'SDM',
    date: new Date('2025-05-10'),
    time: '13:00',
    transactionId: '927145'
  },
  {
    id: 22,
    type: 'outcome',
    title: 'Mas Mbak Kendal',
    amount: 520000,
    category: 'Transport/Akomodasi',
    date: new Date('2025-05-15'),
    time: '09:30',
    transactionId: '258704'
  },
  {
    id: 23,
    type: 'outcome',
    title: 'URR Travel',
    amount: 500000,
    category: 'Transport/Akomodasi',
    date: new Date('2025-05-18'),
    time: '14:15',
    transactionId: '761483'
  },
  {
    id: 24,
    type: 'outcome',
    title: 'Hotel',
    amount: 375000,
    category: 'Akomodasi',
    date: new Date('2025-05-20'),
    time: '16:00',
    transactionId: '519827'
  },
  {
    id: 25,
    type: 'outcome',
    title: 'Demak Expo',
    amount: 200000,
    category: 'Operasional',
    date: new Date('2025-05-22'),
    time: '11:45',
    transactionId: '384651'
  },
  {
    id: 26,
    type: 'outcome',
    title: 'Sound System',
    amount: 270000,
    category: 'Beli Alat',
    date: new Date('2025-05-25'),
    time: '10:20',
    transactionId: '640297'
  },

  // PENGELUARAN - Konsumsi
  {
    id: 27,
    type: 'outcome',
    title: 'Konsumsi Anak',
    amount: 300000,
    category: 'Konsumsi',
    date: new Date('2025-06-05'),
    time: '12:00',
    transactionId: '872536'
  },
  {
    id: 28,
    type: 'outcome',
    title: 'Makan Kegiatan',
    amount: 200000,
    category: 'Konsumsi',
    date: new Date('2025-06-10'),
    time: '13:30',
    transactionId: '145902'
  },
  {
    id: 29,
    type: 'outcome',
    title: 'Konsumsi (Tambahan)',
    amount: 300000,
    category: 'Konsumsi',
    date: new Date('2025-06-15'),
    time: '14:45',
    transactionId: '493768'
  }
];

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount).replace('IDR', 'Rp');
}

// Format date
function formatDate(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

// Group transactions by date
function groupTransactionsByDate(transactions) {
  const grouped = {};

  transactions.forEach(transaction => {
    const dateKey = formatDate(transaction.date);
    if (!grouped[dateKey]) {
      grouped[dateKey] = [];
    }
    grouped[dateKey].push(transaction);
  });

  return grouped;
}

// Render transactions
function renderTransactions(filter = 'all') {
  const transactionList = document.getElementById('transactionList');

  // Filter transactions
  let filteredTransactions = transactionData;
  if (filter === 'income') {
    filteredTransactions = transactionData.filter(t => t.type === 'income');
  } else if (filter === 'outcome') {
    filteredTransactions = transactionData.filter(t => t.type === 'outcome');
  }

  // Sort by date (newest first)
  filteredTransactions.sort((a, b) => b.date - a.date);

  // Group by date
  const groupedTransactions = groupTransactionsByDate(filteredTransactions);

  // Clear existing content
  transactionList.innerHTML = '';

  // Render each date group
  if (Object.keys(groupedTransactions).length === 0) {
    transactionList.innerHTML = `
            <div class="empty-state">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                    <path d="M9 11L12 14L22 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Tidak ada transaksi</p>
            </div>
        `;
    return;
  }

  Object.keys(groupedTransactions).forEach(dateKey => {
    const dateGroup = document.createElement('div');
    dateGroup.className = 'date-group';

    const dateHeader = document.createElement('div');
    dateHeader.className = 'date-header';
    dateHeader.textContent = dateKey;
    dateGroup.appendChild(dateHeader);

    groupedTransactions[dateKey].forEach(transaction => {
      const transactionItem = document.createElement('div');
      transactionItem.className = `transaction-item ${transaction.type}`;

      const amountPrefix = transaction.type === 'income' ? '+ ' : '- ';

      const iconSvg = transaction.type === 'income'
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#0F8537" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 19V5M12 19L18 13M12 19L6 13" stroke="#D32F2F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

      transactionItem.innerHTML = `
                <div class="transaction-icon ${transaction.type}">
                    ${iconSvg}
                </div>
                <div class="transaction-content">
                    <div class="transaction-header">
                        <div class="transaction-title">${transaction.title}</div>
                        <div class="transaction-amount ${transaction.type}">${amountPrefix}${formatCurrency(transaction.amount)}</div>
                    </div>
                    <div class="transaction-details">
                        <div class="transaction-id">TRX-ID-${transaction.transactionId}</div>
                        <div class="transaction-time">${transaction.time}</div>
                    </div>
                </div>
            `;

      dateGroup.appendChild(transactionItem);
    });

    transactionList.appendChild(dateGroup);
  });
}

// Tab filter functionality
document.addEventListener('DOMContentLoaded', function () {
  const tabBtns = document.querySelectorAll('.tab-btn');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      // Remove active class from all buttons
      tabBtns.forEach(b => b.classList.remove('active'));

      // Add active class to clicked button
      this.classList.add('active');

      // Get filter type
      const filter = this.getAttribute('data-filter');

      // Render transactions with filter
      renderTransactions(filter);
    });
  });

  // Initial render
  renderTransactions('all');

  // Back button
  document.querySelector('.back-btn').addEventListener('click', function () {
    window.history.back();
  });

  // Filter button (placeholder)
  document.querySelector('.filter-btn').addEventListener('click', function () {
    // alert('Fitur filter akan ditambahkan');
  });
});

// Add transaction click handler for details (optional)
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('transactionList').addEventListener('click', function (e) {
    const transactionItem = e.target.closest('.transaction-item');
    if (transactionItem) {
      // You can add detail view functionality here
      console.log('Transaction clicked');
    }
  });
});
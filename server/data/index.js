//----- Sample Data -----//

// Users
[
  {
    name: 'John Smith',
    email: 'john.smith@gmail.com',
    password:
      '$2a$10$NOwnsKj.kNnTwix4NQHFOuF7phdJTKyvL8V/PWwCPuUJFAmU6ucvO',
    investments: [
      '6151e06e9dab22007c0fcd8e',
      '6151e06e9dab22007c0fcd8f',
      '6151e06e9dab22007c0fcd90',
    ],
  },
  {
    name: 'Jane Doe',
    email: 'jane.doe@yahoo.com',
    password:
      '$2a$10$eL1nUDnCLmnZKtBzFxnQiOay9XKmOp32HeCm5Y5SL5kJKQ5h5aKgG',
    investments: ['6151e06e9dab22007c0fcd91'],
  },
  {
    name: 'Bob Johnson',
    email: 'bob.johnson@hotmail.com',
    password:
      '$2a$10$weE30LLgDWjP.C5Hbd.b8ONu2lIVdV7GvVV6y/KV8UuLwyeIa7UvC',
    investments: [],
  },
]

// Investments
[
  {
    name: 'Apple Inc',
    type: 'Stock',
    value: 5000,
    owner: '6151e06e9dab22007c0fcd8e',
    transactions: [
      '6151e06e9dab22007c0fcd97',
      '6151e06e9dab22007c0fcd9a',
    ],
  },
  {
    name: 'Tesla Inc',
    type: 'Stock',
    value: 2500,
    owner: '6151e06e9dab22007c0fcd8e',
    transactions: [
      '6151e06e9dab22007c0fcd98',
      '6151e06e9dab22007c0fcd99',
    ],
  },
  {
    name: 'S&P 500 Index Fund',
    type: 'Mutual Fund',
    value: 10000,
    owner: '6151e06e9dab22007c0fcd8e',
    transactions: ['6151e06e9dab22007c0fcd9b'],
  },
  {
    name: 'Microsoft Corporation',
    type: 'Stock',
    value: 3000,
    owner: '6151e06e9dab22007c0fcd8f',
    transactions: ['6151e06e9dab22007c0fcda3'],
  },
  {
    name: 'Vanguard Total Bond Market Index Fund',
    type: 'Mutual Fund',
    value: 15000,
    owner: '6151e06e9dab22007c0fcd8f',
    transactions: [
      '6151e06e9dab22007c0fcda4',
      '6151e06e9dab22007c0fcda5',
    ],
  },
  {
    name: 'Google Alphabet Inc',
    type: 'Stock',
    value: 2000,
    owner: '6151e06e9dab22007c0fcd91',
    transactions: [
      '6151e06e9dab22007c0fcda6',
      '6151e06e9dab22007c0fcda7',
    ],
  }
]

// Transactions
[
  {
    type: 'buy',
    amount: 2000,
    date: '2022-01-01',
    investment: '6151e06e9dab22007c0fcd8e',
  },
  {
    type: 'buy',
    amount: 5000,
    date: '2022-01-05',
    investment: '6151e06e9dab22007c0fcd8e',
  },
  {
    type: 'sell',
    amount: 1000,
    date: '2022-01-10',
    investment: '6151e06e9dab22007c0fcd8e',
  },
  {
    type: 'buy',
    amount: 500,
    date: '2022-01-02',
    investment: '6151e06e9dab22007c0fcd8f',
  },
  {
    type: 'buy',
    amount: 15000,
    date: '2022-01-05',
    investment: '6151e06e9dab22007c0fcd8f',
  },
  {
    type: 'sell',
    amount: 1000,
    date: '2022-01-10',
    investment: '6151e06e9dab22007c0fcd8f',
  },
  {
    type: 'buy',
    amount: 10000,
    date: '2022-01-02',
    investment: '6151e06e9dab22007c0fcd90',
  },
  {
    type: 'buy',
    amount: 5000,
    date: '2022-01-07',
    investment: '6151e06e9dab22007c0fcd90',
  },
  {
    type: 'sell',
    amount: 2000,
    date: '2022-01-12',
    investment: '6151e06e9dab22007c0fcd90',
  },
  {
    type: 'buy',
    amount: 1000,
    date: '2022-01-03',
    investment: '6151e06e9dab22007c0fcd91',
  },
  {
    type: 'buy',
    amount: 500,
    date: '2022-01-06',
    investment: '6151e06e9dab22007c0fcd91',
  },
  {
    type: 'sell',
    amount: 500,
    date: '2022-01-11',
    investment: '6151e06e9dab22007c0fcd91',
  }
];



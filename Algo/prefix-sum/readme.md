## Prefix Sum

### What is Prefix Sum?

Prefix Sum means storing cumulative (running) sums so you can answer range sum queries instantly.

 Instead of recalculating sums again and again, you precompute once.

 Why Do We Need It?

### Problem:

Find sum of elements from index L to R many times.

 Without Prefix Sum (Brute Force)

Each query takes O(N)

If many queries → very slow 

### Real-Life Analogy

Imagine a bank account:

Instead of calculating total deposits every time,
you keep a running balance.

To know money added between two dates → subtract balances.
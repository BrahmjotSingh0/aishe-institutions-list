# aishe-institutions-list

https://www.npmjs.com/package/aishe-institutions-list

A searchable list of all higher education institutions in India from AISHE data — including Universities, Colleges, Standalone Institutions, R&D Institutes, and PM Vidyalakshmi Institutes.

Ideal for building autocomplete dropdowns, validation systems, or institutional directories.

---

## 📦 Installation

```bash
npm install aishe-institutions-list
````

or

```bash
yarn add aishe-institutions-list
```

---

## 🔧 Usage

```js
const institutions = require('aishe-institutions-list');

// Search example (case-insensitive, partial match)
const results = institutions.search("delhi technical c");

console.log(results);
/*
[
  {
    aisheCode: "U-0456",
    name: "Delhi Technical Campus",
    state: "Delhi",
    district: "New Delhi"
  }
]
*/
```

---

## 🔍 Features

* 🔎 Fuzzy/partial case-insensitive search
* 🏛️ Covers all institution types from AISHE (University, College, Standalone, R\&D, PM Vidyalakshmi)
* 📁 Data is pre-processed and compressed for fast access

---

## 📄 API

### `search(query: string, limit: number = 10): Institution[]`

Returns a list of institutions matching the query.

#### Institution Object:

```ts
{
  aisheCode: string;
  name: string;
  state: string;
  district?: string;
}
```

---

## 🧪 Example with React Autocomplete

```jsx
import { useState } from 'react';
import { search } from 'aishe-institutions-list';

function CollegeSearch() {
  const [query, setQuery] = useState('');
  const results = search(query);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search College or University"
      />
      <ul>
        {results.map(inst => (
          <li key={inst.aisheCode}>
            {inst.name} ({inst.state})
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 📚 Source

Data sourced from [AISHE Portal](https://dashboard.aishe.gov.in/hedirectory/)

---

## 📜 License

MIT © Brahmjot Singh


# SportsShed – Validation and Search Module

## 1. Project Overview

SportsShed is a sports equipment management system developed to manage sports kits and related information efficiently.

This module focuses on validating kit details, retrieving kit records, searching kits based on sports, and updating existing kit information.

## 2. My Role and Responsibilities

**Role: Validation & Search Developer**

My responsibilities in this project include:

- Implementing input validation for kit details.
- Developing APIs to retrieve all kit records.
- Implementing search functionality based on sport.
- Creating a summary API to count kits sport-wise.
- Developing an API to update existing kit details.
- Handling invalid inputs and missing kit records.
- Testing API endpoints using Postman.

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime environment |
| Express.js | Creating API routes |
| SQLite | Database management |
| Postman | API testing |
| Git | Version control |
| GitHub | Project hosting |

## 4. Key Features

- **Kit Validation:** Checks whether required kit details are provided.
- **View Kits:** Retrieves all kit records from the database.
- **Search by Sport:** Filters kits based on the sport name.
- **Kit Summary:** Displays the number of kits for each sport.
- **Update Kit:** Updates the name and sport of an existing kit.
- **Error Handling:** Returns appropriate error messages for invalid inputs and missing kit records.

## 5. Project Structure

```text
SportsShed-MyPart/
│
├── app.js
├── database.js
├── test.js
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
│
├── middleware/
│   └── validation.js
│
└── routes/
    └── kits.js
```

## 6. API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/kits` | Retrieve all kits |
| GET | `/kits?sport=Cricket` | Search kits by sport |
| GET | `/kits/summary` | Get sport-wise kit count |
| POST | `/kits` | Add a new kit |
| PUT | `/kits/:id` | Update an existing kit |

### Sample POST Request

**Endpoint:** `/kits`

```json
{
  "name": "Cricket Bat",
  "sport": "Cricket"
}
```

### Sample Successful Response

```json
{
  "message": "Kit added successfully",
  "id": 1
}
```

## 7. Validation Rules

- Kit name must not be empty.
- Sport name must not be empty.
- Kit name and sport must be valid text values.
- Invalid kit IDs are rejected.
- An appropriate error response is returned if the requested kit does not exist.

## 8. API Testing

The APIs were tested using Postman.

The following operations were tested:

- Adding a new kit.
- Retrieving all kits.
- Searching kits by sport.
- Viewing the kit summary.
- Updating an existing kit.
- Checking invalid input responses.
- Checking responses for non-existing kit IDs.

## 9. Installation and Setup

Follow these steps to run the project locally:

1. Clone the repository:

```bash
git clone https://github.com/rizwana-15-ux/SportsShed-Validation-Search.git
```

2. Open the project folder:

```bash
cd SportsShed-Validation-Search
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
node app.js
```

The server runs at:

`http://localhost:3000`

## 10. Developer Information

**Developed by:** Rizwana Lalammagari

# SportsShed - Validation and Search Module

## Project Overview
SportsShed is a sports equipment management system. This module handles kit validation, searching, retrieving, and updating kit details.

## Technologies Used
- Node.js
- Express.js
- SQLite
- Postman

## Features
- Add new kits
- Validate kit details
- View all kits
- Search kits by sport
- View kit summary
- Update existing kits
- Handle invalid inputs and missing kit IDs

## Installation
1. Clone the repository.
2. Run `npm install`.
3. Start the server using `node app.js`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /kits | Get all kits |
| GET | /kits?sport=Cricket | Search kits by sport |
| GET | /kits/summary | Get kit summary |
| POST | /kits | Add a new kit |
| PUT | /kits/:id | Update a kit |

## Sample POST Request

```json
{
  "name": "Cricket Bat",
  "sport": "Cricket"
}
```

## Developed By
Rizwana Lalammagari

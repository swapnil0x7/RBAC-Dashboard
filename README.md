# Role-Based Access Control (RBAC) Dashboard

A dashboard application implementing role-based access control to display sections specific to user roles (Admin, Editor, Viewer) and allow role switching. This project demonstrates how to dynamically adjust user experiences based on their assigned roles, using React and state management techniques.

---

## Objective

To create a role-based access control (RBAC) dashboard where users are assigned roles (Admin, Editor, Viewer) that determine which sections they can access. Users can dynamically switch roles, and the UI adjusts accordingly to display or hide content.

---

## Features

- **Dashboard Layout:** A user-friendly sidebar/top navigation bar to switch between different user roles.
- **Role-Specific Sections:**
  - Admin: User Management
  - Editor: Content Management
  - Viewer: Dashboard Overview
- **Role Switching:** Seamlessly switch between roles to display role-specific content.
- **Role-Based Route Guards:** Protect sensitive routes based on user roles.
- **Optimized Conditional Rendering:** Efficiently render content based on the user’s current role, improving performance.
- **State Management:** Implemented using Redux (or Context API), managing user roles and role-based access.

---

## Tech Stack

- **Frontend:** React.js, TypeScript
- **State Management:** Redux (or Context API)
- **Routing:** React Router
- **HTTP Client:** Axios or Fetch API
- **Styling:** CSS Modules / Styled-Components / SCSS

---

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/swapnil0x7/RBAC-Dashboard
   cd RBAC_Dashboard
   npm install
   npm run dev
   ```

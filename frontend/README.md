Sure! Here’s a README file for your Recipe Management Application that covers setup, features, and usage.

---

# Recipe Management Application

## Overview

This is a Recipe Management Application that allows users to create, view, edit, and delete recipes. The application includes a user-friendly interface built with React and Material-UI, and it uses a backend API to manage recipe data.

## Features

- **Create Recipe**: Add new recipes with details such as title, ingredients, steps, image URL, cooking time, and difficulty.
- **View Recipes**: Display a list of all recipes with options to view details, edit, or delete.
- **Edit Recipe**: Modify existing recipes.
- **Delete Recipe**: Remove recipes from the list.
- **Search Recipes**: Find recipes by keyword in the title.
- **Sort Recipes**: Sort recipes by title.
- **Responsive Design**: Ensure a clean and user-friendly experience across devices.

## Tech Stack

- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express
- **Database**: JSON file (using `fs` for file operations)

## Installation

### Backend Setup

1. **Navigate to the Backend Folder**

   ```bash
   cd backend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Server**

   ```bash
   npm start
   ```

   The backend server will start on `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the Frontend Folder**

   ```bash
   cd frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   ```bash
   npm start
   ```

   The frontend application will start on `http://localhost:3000`.

## API Endpoints

- **GET /recipes**: Fetch all recipes.
- **POST /recipes**: Create a new recipe.
- **PUT /recipes/:id**: Update an existing recipe.
- **DELETE /recipes/:id**: Delete a recipe.

## Directory Structure

- `backend/`
  - `src/`
    - `database/`
      - `db.json` - JSON file for storing recipes.
    - `routes/`
      - `recipes.ts` - API routes for managing recipes.
    - `index.ts` - Main server file.
- `frontend/`
  - `src/`
    - `components/`
      - `RecipeItem.tsx` - Component for displaying individual recipes.
      - `RecipeList.tsx` - Component for listing all recipes.
      - `RecipeForm.tsx` - Component for adding/editing recipes.
      - `NoRecipes.tsx` - Component displayed when no recipes are found.
    - `api/`
      - `recipes.ts` - Functions for making API requests.
    - `App.tsx` - Main application component.
    - `index.tsx` - Entry point for the React application.

## Usage

1. **Start the Backend Server**: Follow the backend setup instructions to start the server.

2. **Start the Frontend Application**: Follow the frontend setup instructions to start the application.

3. **Access the Application**: Open your browser and go to `http://localhost:3000` to interact with the Recipe Management Application.

4. **Use the Application**:
   - **Add Recipe**: Click the "Add Recipe" button to open the form in a drawer.
   - **Edit Recipe**: Click the "Edit" button on a recipe card to modify it.
   - **Delete Recipe**: Click the "Delete" button on a recipe card to remove it.
   - **Search Recipes**: Use the search field to filter recipes by title.
   - **Sort Recipes**: Recipes can be sorted by title.

## Contributing

If you’d like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.

---

Feel free to adjust any sections as needed based on specific details or additional features in your project.

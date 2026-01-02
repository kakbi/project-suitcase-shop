# BEST SHOP Website

This is a project for an **online shop website**, featuring a **product catalog** with detailed information such as **name**, **rating**, and **price**.  
On the **Product details page**, users can choose **size**, **color**, **category**, and add items to the **Cart**.

The website also includes:

-   a **Homepage** with a product carousel,
-   an **About Us page**,
-   a **Contact Us page**,
-   and a **Cart page**, where users can view all selected products, check details with tooltips, adjust quantity, and proceed to checkout.

If the total exceeds **$3000**, a **10% discount** is automatically applied.

---

## Getting Started

These instructions will help you get your project up and running locally.

---

## Prerequisites

Before you start, ensure you have the following installed:

-   **Node.js** (LTS version recommended)
-   **npm** (comes with Node.js)

To check if you already have them installed, run the following commands:

```bash
node -v
npm -v
```

If not, [download and install Node.js](https://nodejs.org/) from the official website.

---

## Installation

1. **Clone the repository**  
   Open a terminal and run:

    ```bash
    git clone <repository_url>
    ```

    Replace `<repository_url>` with the URL of the repository.

2. **Navigate to the project directory**

    ```bash
    cd <project_directory>
    ```

    Replace `<project_directory>` with the name of your project folder.

3. **Install dependencies**  
   Once inside the project folder, run:

    ```bash
    npm install
    ```

---

## Scripts

Make sure your `package.json` includes the following scripts:

```json
"scripts": {
  "scss": "sass --watch src/scss:dist",
  "lint:js": "eslint . --ext .js",
  "lint:scss": "stylelint \"**/*.scss\"",
  "lint": "npm run lint:js && npm run lint:scss"
}
```

---

## SASS Compilation

This project uses **SASS** for styling.

To compile `.scss` files into `.css`, run:

```bash
npm run scss
```

This will watch for changes in the `src/scss/` folder and generate corresponding CSS files in `dist/`.

---

## Linting

To ensure code quality, the project uses:

-   **ESLint** for JavaScript
-   **Stylelint** for SCSS

Run lint checks using:

```bash
npm run lint
```

---

## Running the Project

You can use **Live Server** to run this project locally.

### Steps:

1. Open **Visual Studio Code**
2. Go to the **Extensions** panel and search for **Live Server**
3. Install **Live Server**

Then:

-   Open the file `src/index.html`
-   In the **bottom-right corner** of VSCode, click **Go Live**
-   The project will open in your browser, typically at:

```
http://127.0.0.1:5500/src/index.html
```

---

## Features

### Homepage

-   **Header** with navigation
-   A **carousel** of product images (swipe-enabled)
-   **Mobile-friendly navigation** for smaller devices

### Catalog Page

-   **Product catalog** showing with concise info (name, price)
-   **Pagination** for multiple product pages
-   **Sorting** by:
    -   Price
    -   Popularity
    -   Rating
-   **Filtering** by:
    -   Size
    -   Color
    -   Category

### Product Details Page

-   **Detailed product view**:
    -   Select **size**, **color**, **category**
    -   Add product to the **Cart**

### About Us Page

-   **About Us Page** with:
    -   Company achievements and goals
    -   Team description

### Contact Us Page

-   **Contact Us Page** with:
    -   Shop working hours
    -   Feedback form

### Cart Page

-   **Cart Page** with:
    -   List of selected products with tooltips
    -   Quantity controls
    -   Subtotal, shipping, discount, and final total

### Responsive Design

-   The entire project is **responsive** and optimized for **various screen sizes**

---

## Plans for Improvement

In the future, I plan to:

-   **Refactor** the code to improve structure and readability
-   **Optimize image handling**, since image-heavy projects tend to consume a lot of space/resources. The images will be removed from the repository as they were only included for demo purposes.

    ### Possible solutions:

    -   **Image compression**: Reduce file sizes to speed up loading
    -   **Move images to a server**: Offload assets from the client to improve performance and scalability

-   **Restructure the project’s file system** for better organization and maintainability:

    ### Ideas for restructuring:

    -   Split JavaScript into **reusable modules**
    -   Use **SCSS partials** and **modular imports**

These changes will make the project more efficient, easier to maintain, and ready for future scaling.

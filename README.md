Sure, here is a README file based on the provided requirements:

---

# Books Online Library

A simple Angular application to help readers get all the necessary information about books, search for books based on different unique keys, and manage personal favorite books.

## Table of Contents

- [Introduction](#introduction)
- [Business Requirements](#business-requirements)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Features](#features)

## Introduction

The Books Online Library is an application designed to assist readers in accessing information about books and authors. Users can search for books, view book details, and manage their favorite books in a personal space.

1. **Home Page**:

   - Display a grid of 9 books from the "Finance" subject.
   - Each book item should show the book cover, publish date, and author names.
   - Handle cases where books have no covers with a default placeholder.

2. **Book Details Page**:

   - Display details of a book, including First Publish Year, Book Title, Author Names, Edition Count, and Number of Pages.

3. **Author Details Page**:

   - Display details of an author, including Author Photo, Author Name, Birth Date, Work Count, and top 5 subjects.

4. **Search (Not finalized)**:

   - Implement a search feature that allows searching by Title, Author Name, or Subject.
   - Display search results in a 3x3 grid format.

5. **Wishlist (Not finalized)**:
   - Allow users to add books to a Wishlist and manage their Wishlist from a dedicated page.

##

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/)
- [Angular CLI](https://angular.io/cli)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd books-online-library
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To run the application locally, use:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser.

### Building the Application

To build the application for production, use:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## API Documentation

The application utilizes the Open Library API for fetching book and author details. Refer to the official [Open Library API Documentation](https://openlibrary.org/developers/api) for more information.

### Fetching Author Details

To fetch author details by author ID:

- **Endpoint**: `https://openlibrary.org/authors/{author_id}.json`
- **Example**: `https://openlibrary.org/authors/OL23919A.json`

## Project Structure Note

I attempted to demonstrate the differences between two methods using a modular structure and new stand-alone component features, while also leveraging the new features of Angular.

## Features

- **Home Page**: Displays a grid of 9 books from the "Finance" subject.
- **Book Details Page**: Shows detailed information about a selected book.
- **Author Details Page**: Shows detailed information about a selected author.
- **Search Page** (Bonus): Allows users to search for books by title, author, or subject.
- **Wishlist Page** (Bonus): Allows users to add books to a Wishlist and manage their Wishlist.

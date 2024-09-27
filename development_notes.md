
# Development Notes

## 1. Initial Requirements

- Implement a search bar to find products.
- Add filtering options (category, price range, etc.).
- The search and filter options should render automatically based on the API response.
- Separate the API calls to a different file.

## 2. API and Types

### API Function (`api.ts`)

- Created `fetchProductsAndCategories` function to fetch products and categories from the API.
- The function returns:
  - `products`: List of products with properties `id`, `image`, `title`, `price`, `description`, and `category`.
  - `categories`: Unique list of categories derived from the products.

### TypeScript Interfaces

- **ProductProps**:

  ```typescript
  export interface ProductProps {
    id: number;
    image: string;
    price: number;
    title: string;
    category: string;
    description: string;
    onBuy: () => void;
  }
  ```

- **Category**:
  - Defined as `string` in the context of this implementation.

## 3. Components

### Hero Section Component (`HeroSection.tsx`)

- Renders the search bar and filter options.
- Props:
  - `onSearch`: Function to handle search and filter.
  - `categories`: List of categories for the filter dropdown.
- State:
  - `searchTerm`: Text input for search.
  - `selectedCategory`: Selected category for filtering.
  - `minPrice`, `maxPrice`: Numeric inputs for price range filtering.

### Products Page Component (`ProductsPage.tsx`)

- Fetches products and categories, manages state, and passes data to child components.
- State:
  - `products`: List of products.
  - `categories`: List of categories.
  - `loading`: Loading state for the API call.
  - `error`: Error message if the API call fails.
- Methods:
  - `handleSearch`: Filters products based on search term, category, and price range.
  - `loadProductsAndCategories`: Fetches products and categories using the API function.
- Error handling ensures type safety by checking if the caught error is an instance of `Error`.

## 4. Error Handling

- TypeScript’s `unknown` type for errors necessitates type guards to safely access properties like `message`.

## 5. Key Changes

- Consolidated product and category fetching into a single function.
- Ensured type safety throughout the application using TypeScript interfaces.
- Improved error handling in the ProductsPage component.

This setup ensures a clean, maintainable codebase with consistent data handling and type safety.

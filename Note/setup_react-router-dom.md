# Setup React-Router-Dom
[Home >](../README.md)

- [React Router Official Documentation](https://reactrouter.com/en/main/start/overview)

## Setting Up React Router

To set up routing in your React application, start by modifying the `main.jsx` file. You need to replace `<App>` with `<RouterProvider router={router} />`. The `RouterProvider` component requires a prop called `router`. You can create this `router` using the `createBrowserRouter` function in two ways: by using plain objects or by using `createRoutesFromElements`. Don't forget to import `RouterProvider` and `createBrowserRouter` from `react-router-dom`.

Here’s the full code:

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
```

## Setting Up Outlet
Open `App.jsx` import and use `<Outlet>` like this

```jsx
import React from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default App
```


---
## Creating Router

### Creating Routes with Plain Objects

You can define your routes as plain objects by passing an array of route configurations to `createBrowserRouter`. Here’s an example:

```jsx
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />, // Used when there's an error loading the route
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ]
  },
  {
    path: 'admin',
    element: <Admin />,
    errorElement: <Error404 />, // Displayed for errors under the /admin route
  }
]);

export default router;
```

### Creating Routes with JSX and `createRoutesFromElements`

Alternatively, you can use JSX to define your routes by combining `Route` components inside `createRoutesFromElements`. This approach is useful when you want more flexibility and better readability.

```jsx
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<Error404 />}>
        <Route index element={<Home />} /> {/* This is the default route */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="admin" element={<Admin />} errorElement={<Error404 />} />
    </>
  )
);

export default router;
```



## What is `errorElement`?

The `errorElement` prop is used to handle errors that occur when a route fails to load. For example, if a user tries to navigate to a path that doesn’t exist, the `errorElement` allows you to display a custom error component like `Error404` instead of breaking the application or showing a generic error message. This feature is particularly helpful for improving user experience by providing a user-friendly error page when something goes wrong.


## What is `Outlet`?

`<Outlet>` is a component provided by the `react-router-dom` library, and it's used to render child routes in your application.


### Key Concepts of `<Outlet>`:
1. **Parent and Child Routes**:
   - When you define routes, some routes can have child routes. For example, a route like `/dashboard` could have child routes such as `/dashboard/profile` or `/dashboard/settings`.
   - The parent route can render an `<Outlet>` where the child routes will be displayed.

2. **Placeholder for Child Components**:
   - The `<Outlet>` component acts as a placeholder where the matched child route's component will be rendered.
   - If no child route is matched, the `<Outlet>` will remain empty.

### Example of Routes with `<Outlet>`:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Settings from './Settings';

function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
```

In this example:
- When the user navigates to `/dashboard`, the `Dashboard` component will be rendered inside `App` at the `<Outlet>`.
- If they navigate to `/dashboard/profile`, the `Profile` component will be rendered inside the `Dashboard` component where its `<Outlet>` is placed.
  
### Benefits of `<Outlet>`:
- **Nested Routing**: Enables you to handle nested routes more cleanly.
- **Code Reusability**: You can define parent layouts that are shared between different child routes, rendering only the specific child content dynamically.


## NavLink : end props

In React Router (version 6), by default, a `NavLink` is considered **active** if the current URL **starts** with the `path` you provide. So, if you have a path like `'/admin'`, it will be considered active not only for `'/admin'` but also for any nested routes like `'/admin/profile'`, `'/admin/AddPost'`, etc. 

**Example:**

- If you're at `/admin/profile`, the link to `/admin` (Dashboard) would still be considered active because `/admin` is a prefix for `/admin/profile`.

To fix this issue, we need to make sure that the `NavLink` is only considered active when the path **exactly** matches `/admin`. In React Router v6, we use the `end` prop to achieve this behavior.

### What Does `end={item.path === '/admin'}` Mean?

This part of the code:
```jsx
end={item.path === '/admin'}
```

is saying:
- **If the current `item.path` is `/admin` (for the "Dashboard" item)**, set the `end` prop to `true`.
- **Otherwise**, set the `end` prop to `false` for the other paths like `/admin/profile`, `/admin/AddPost`, etc.

### What Does the `end` Prop Do?

The `end` prop tells React Router:
- **If `end` is `true`**, only mark the `NavLink` as active if the current URL **exactly matches** the path.
- **If `end` is `false`** (or not present), the `NavLink` will be marked as active if the current URL **starts with** the path.

### How It Works in Your Case:

- **For the "Dashboard" link (`'/admin'`)**:
  - We want the link to be active **only** when the URL is **exactly** `'/admin'`. This is why we set `end={true}` for this link.
- **For the other links like "Profile" (`'/admin/profile'`)**:
  - We don’t want to use `end`, because we still want these links to be active when the URL starts with `'/admin/profile'` or `'/admin/AddPost'`.

### Example with and without `end`:

Without `end`:
- If you're on `/admin/profile`, the "Dashboard" link (which is `/admin`) will also be considered active, which is not what you want.

With `end={true}`:
- If you're on `/admin/profile`, the "Dashboard" link will **not** be active because the path is not an **exact** match for `/admin`.

### Summary of the line `end={item.path === '/admin'}`:
- **`item.path === '/admin'`** checks if the current item's path is `'/admin'`.
- **`end={true}`** is applied **only** to the "Dashboard" link, so it is only active when the URL is exactly `/admin`.
- **Other links** do not get the `end` prop because their paths should still be considered active for nested routes.

---


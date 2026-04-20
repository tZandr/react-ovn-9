import { Outlet, Link } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/list">List</Link>
          <Link to="/add-item">Add Item</Link>
        </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

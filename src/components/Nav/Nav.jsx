
const Nav = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-bold">Trendify</h1>
      <nav>
        <ul className="list-none flex gap-6 cursor-pointer">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-around align-baseline gap-1 w-full py-3 border-b">
      <Link href="/">Home</Link>
      <Link href="/snippets/new">Create New</Link>
    </div>
  );
};

export default Header;

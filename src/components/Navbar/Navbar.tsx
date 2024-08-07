import { Button } from "antd";
import "./Navbar.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center h-16 text-lg navbar-shadow">
      <div className="ml-6 cursor-pointer text-3xl">
        <a href="/" className="text-inherit no-underline hover:text-inherit">
          BookMyShow
        </a>
      </div>
      <div className="flex flex-row">
        <div className="mr-4 cursor-pointer hover:font-bold">Movie</div>
        <div className="mr-4 cursor-pointer hover:font-bold">TV Shows</div>
        <div className="cursor-pointer hover:font-bold">Stream</div>
      </div>
      <div className="flex flex-row mr-6">
        <div className="mr-4">
          <Link href="/login">
            <Button type="primary" value="large">
              Login
            </Button>
          </Link>
        </div>
        <div>
          <Link href="/signup">
            <Button value="large">Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

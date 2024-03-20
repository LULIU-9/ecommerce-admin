import { UserButton } from "@clerk/nextjs";
import MainNav from "@/components/main-nav";

const Navbar = () => {
  return (
    <div className="boarder-b">
      <div className="flex h-16 items-center px-4">
        <div>swither</div>
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

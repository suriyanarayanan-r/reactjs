import { AiTwotoneThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavBar() {
  const DarkModeChange = () => {
    if (window.document.documentElement.classList.contains("dark")) {
      window.document.documentElement.classList.remove("dark");
      console.log("root contains dark class so, removed it");
    } else {
      window.document.documentElement.classList.add("dark");
      console.log("root does NOT contain dark class so, added it");
    }
  };
  return (
    <nav>
      <div className="h-20 w-full shadow-sm bg-zinc-100 flex justify-between p-7 text-center dark:bg-gray-800">
        <Link to="/reactjs" className="text-lg font-merienda dark:text-white">
          Suriyanarayanan
        </Link>
        <ul className="flex row-col gap-3">
          <li>
            <AiTwotoneThunderbolt
              onClick={DarkModeChange}
              className="text-2xl cursor-pointer hover:text-gray-600 dark:text-white"
            />
          </li>
          <li>
            <Link
              to="/reactjs/projects"
              className="bg-cyan-400 p-2 rounded-md shadow-sm hover:shadow-lg"
            >
              My Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;

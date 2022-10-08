import NavBar from "./NavBar";
import profile_img from "../assets/suriya water bg final.jpg";
import { AiFillLinkedin, AiFillMail, AiOutlineTwitter } from "react-icons/ai";
function HomePage() {
  return (
    <section>
      <NavBar />
      <div className="flex flex-col h-screen dark:bg-gray-700">
        <div className="mx-auto mt-20 mb-10">
          <img
            src={profile_img}
            alt="profile"
            className="w-72 h-72 rounded-full mx-auto object-cover md:w-52 md:h-52"
          />
        </div>
        <div className="text-center ">
          <h1 className="text-2xl font-bold text-cyan-600">
            Suriyanarayanan Ravi
          </h1>
          <p className="dark:text-white">
            Bachelor of Technology in Information Technology
          </p>
          <p className="mx-auto my-5 w-80 indent-10 text-justify italic text-gray-700 dark:text-gray-400">
            "A Technology enthusiastic person who is willing to learn emerging
            technologies and provide solution to problems."
          </p>
        </div>
        <div className="flex gap-10 text-4xl text-gray-700 m-auto mt-5 dark:text-gray-300 dark:md:mt-5">
          <a
            href="https://www.linkedin.com/in/suriyanarayanan-r-24b291159"
            target="blank_"
          >
            <AiFillLinkedin />
          </a>
          <a href="mailto:suriyanarayananit@gmail.com" target="blank_">
            <AiFillMail />
          </a>
          <a href="https://twitter.com/suriyaravi_" target="blank_">
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}
export default HomePage;

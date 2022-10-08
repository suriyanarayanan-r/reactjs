import { Link } from "react-router-dom";

function ErrorMsg() {
  return (
    <div className="flex justify-center mt-60">
      <div className="flex flex-col gap-10 text-base text-center">
        <p>"Sorry to say that no page is found on this URL"</p>
        <Link to={"/reactjs"} className="hover:underline">
          Click here to go to Home Page
        </Link>
      </div>
    </div>
  );
}

export default ErrorMsg;

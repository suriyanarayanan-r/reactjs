import NavBar from "./NavBar";

function Project() {
  const project = [
    {
      project_title: "Optical Management Solution",
      desc: [
        "This Windows Application created for storing and managing the patient's eye examination records in an easy way.",
        "The records are properly stored using sqlite database and it can also be stored as PDF with predefined design.",
        "Created using JavaFX and SQLite.",
      ],
    },
    {
      project_title: "Covid-19 Social Distancing Monitoring Tool",
      desc: [
        "This Python Tool created for the purpose to check social distancing among people in public places are followed.",
        " Faster R-CNN used in this tool is implemented using Facebook's Detectron2(ML algorithm to detect objects). This tool uses Transfer Learning Technique.",
        "Created using Python and Detectron.",
      ],
    },
  ];
  return (
    <div>
      <NavBar />
      <div className="h-screen dark:bg-gray-700">
        <div className="flex flex-row gap-5 justify-center pt-20 max-h-screen md:flex-col ">
          {project.map((value, id) => (
            <div className="w-80 mh-80 shadow-md shadow-stone-500 rounded-md p-10 md:mx-auto md:p-5 hover:bg-slate-100 dark:hover:bg-slate-300   dark:bg-slate-200">
              <h1 className="text-lg underline text-center pb-5">
                {value.project_title}
              </h1>
              <ul className="list-disc">
                {value.desc.map(function (desc) {
                  return <li className="text-justify">{desc}</li>;
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;

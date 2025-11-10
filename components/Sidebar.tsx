import { XMarkIcon } from "@heroicons/react/16/solid";

type Props = {
  setClick: (value: boolean) => void;
};

const Sidebar = ({ setClick }: Props) => {
  return (
    <aside className="flex flex-col w-64 fixed z-50 right-0 top-0 h-screen px-4 py-8 overflow-y-auto bg-[#0A31F5] border-r rtl:border-r-0 rtl:border-l">
      <div className="flex justify-end items-center h-8 w-full">
        <button type="button" onClick={() => setClick(false)} className="cursor-pointer">
          <XMarkIcon className="w-8 h-8 text-cyan-50" />
        </button>
      </div>

      <div className="flex flex-col justify-between font-obitron flex-1 mt-6">
        <nav>
          <a
            className="flex cursor-pointer items-center px-4 py-2 text-cyan-300 hover:bg-[#343454] rounded-md"
            href="#home"
          >
            <span className="mx-4 font-medium">Home</span>
          </a>

          <a
            className="flex cursor-pointer items-center px-4 py-2 mt-5 text-cyan-300 transition-colors duration-300 transform rounded-md hover:bg-[#343454] hover:text-gray-100"
            href="#about"
          >
            <span className="mx-4 font-medium">About Me</span>
          </a>

          <a
            className="flex cursor-pointer items-center px-4 py-2 mt-5 text-cyan-300 transition-colors duration-300 transform rounded-md  hover:bg-[#343454]  hover:text-gray-100"
            href="#projects"
          >
            <span className="mx-4 font-medium">Projects</span>
          </a>

          <a
            className="flex cursor-pointer items-center px-4 py-2 mt-5 text-cyan-300 transition-colors duration-300 transform rounded-md  hover:bg-[#343454]  hover:text-gray-100"
            href="#projects"
          >
            <span className="mx-4 font-medium">Skills</span>
          </a>

          <a
            className="flex cursor-pointer items-center px-4 py-2 mt-5 text-cyan-300 transition-colors duration-300 transform rounded-md  hover:bg-[#343454]  hover:text-gray-100"
            href="#contact"
          >
            <span className="mx-4 font-medium">Contact</span>
          </a>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

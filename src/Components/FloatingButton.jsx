import { FaComments } from "react-icons/fa";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button className="flex items-center bg-green-500 text-black px-6 py-3 rounded-full shadow-lg">
        <FaComments className="mr-2 " /> 
      </button>
    </div>
  );
}

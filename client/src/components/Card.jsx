import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { download } from "../assets";
import { downloadImage } from "../utils";
import ImageModal from "./ImageModal";

export default function Card({ _id, name, prompt, photo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="card group relative cursor-pointer rounded-xl shadow-card hover:shadow-cardhover" onClick={() => setIsModalOpen(true)}>
        <img className="h-auto w-full rounded-xl object-cover" src={photo} alt={prompt} />
        <div className="absolute bottom-0 left-0 right-0 m-2 hidden max-h-[94.5%] flex-col rounded-md bg-[#10131f] p-4 group-hover:flex">
          <p className="prompt overflow-y-auto text-sm text-light">{prompt}</p>

          <div className="mt-5 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-700 object-cover text-xs font-bold text-light">{name[0]}</div>
              <p className="text-sm text-light">{name}</p>
            </div>
            <button type="button" onClick={() => downloadImage(_id, photo)} className="border-none bg-transparent outline-none">
              <img src={download} alt="download" className="h-6 w-6 object-contain invert" />
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && <ImageModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} photo={photo} _id={_id} downloadImage={downloadImage} prompt={prompt} download={download} />}
      </AnimatePresence>
    </>
  );
}

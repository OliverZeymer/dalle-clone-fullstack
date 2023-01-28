import BackgroundBlur from "./BackgroundBlur";

export default function ImageModal(props) {
  const { isOpen, setIsOpen, photo, _id, downloadImage, prompt, download } = props;
  return (
    <div>
      <BackgroundBlur isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="mx-auto mb-6 w-fit max-w-[80%] flex-col rounded-md bg-[#10131f] p-4">
          <p className="prompt overflow-y-auto text-xl font-semibold text-light">{prompt}</p>
        </div>
        <img src={photo} alt="generated image" className="aspect-square max-h-[70vh] max-w-[70vw] rounded-lg object-cover" />
        <button type="button" onClick={() => downloadImage(_id, photo)} className="mt-4 inline-flex items-center rounded-full bg-dark py-2.5 px-5 font-bold text-light hover:bg-neutral-800">
          <img src={download} alt="download" className="mr-2 h-4 w-4 object-contain invert" />
          <span>Download</span>
        </button>
      </BackgroundBlur>
    </div>
  );
}

import BackgroundBlur from "./BackgroundBlur";

export default function ImageModal(props) {
  const { isOpen, setIsOpen, photo, _id, downloadImage, prompt, download } = props;
  console.log(photo);
  return (
    <BackgroundBlur isOpen={isOpen} setIsOpen={setIsOpen}>
      <img src={photo} alt="generated image" className="aspect-square max-h-[600px] max-w-[600px] rounded-lg object-cover" />
      <p className="absolute top-0 right-2 z-50 m-2 cursor-pointer rounded-full text-3xl font-semibold text-white" onClick={() => setIsOpen(false)}>
        X
      </p>
      <button type="button" onClick={() => downloadImage(_id, photo)} className="mt-4 inline-flex items-center rounded-full bg-dark py-2.5 px-5 font-bold text-light hover:bg-neutral-800">
        <img src={download} alt="download" className="mr-2 h-4 w-4 object-contain invert" />
        <span>Download</span>
      </button>
    </BackgroundBlur>
  );
}

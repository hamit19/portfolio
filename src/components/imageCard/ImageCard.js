import React, { useRef, useState, useEffect } from "react";

const ImageCard = ({ img }) => {
  const [spans, setSpans] = useState(null);

  const imagesRef = useRef();

  const setSpan = () => {
    const height = imagesRef.current.clientHeight;

    console.log(imagesRef.current.clientHeight);

    const span = Math.ceil(height / 10);

    setSpans(span);

    // console.log(span);
  };

  useEffect(() => {
    imagesRef.current.addEventListener("load", setSpan);
  }, []);

  return (
    <a
      style={{ gridRowEnd: `span ${spans}` }}
      href={img.link}
      rel="noreferrer"
      target="_blank"
    >
      <div
        className={`overflow-hidden rounded-lg relative z-10 after:bg-opacity-20 m-4 lg:m-1 hover:after:bg-opacity-90 text-indigo-300 text-shadow after:custom-transition cursor-pointer after:bg-slate-900 after:content-[""] hover:after:content-["Click_to_redirect!"]  font-bold after:flex after:items-center after:justify-center after:inset-0 after:absolute  after:z-20  shadow-xl grid `}
      >
        <img
          style={{ gridRowEnd: "span 2" }}
          className="max-width-full  h-auto  "
          src={img.imageSource}
          alt={img.alt}
          ref={imagesRef}
        />
      </div>
    </a>
  );
};

export default ImageCard;

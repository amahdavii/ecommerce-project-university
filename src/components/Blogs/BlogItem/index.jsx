import React from "react";

const BlogItem = ({ image, date, title }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden relative cursor-pointer">
      <img src={image} alt="blogphoto" />
      <div className="bg-[#377D71]/85 absolute bottom-0 w-full px-4 h-[30%] backdrop-blur-xl text-[#333] flex flex-col justify-center">
        <span className="bg-[#377D71] rounded-full text-white w-[12%] text-center text-[14px] py-1 mb-2">
          {date}
        </span>
        <h1 className="font-bold text-[#377D71]">{title}</h1>
      </div>
    </div>
  );
};

export default BlogItem;

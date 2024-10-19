import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const RightSidebar = () => {
  const hotQuestions = [
    {
      _id: 1,
      title: "What is use of reactjs and nodejs in full stack development?",
    },
    {
      _id: 2,
      title: "What is use of reactjs and nodejs in full stack development?",
    },
    {
      _id: 3,
      title: "What is use of reactjs and nodejs in full stack development?",
    },
    {
      _id: 4,
      title: "What is use of reactjs and nodejs in full stack development?",
    },
    {
      _id: 5,
      title: "What is use of reactjs and nodejs in full stack development?",
    },
  ];

  const populartags = [
    {
      _id: "1",
      name: "JavaScript",
      totalQuestions: 9,
    },
    {
      _id: "2",
      name: "React",
      totalQuestions: 7,
    },
    {
      _id: "3",
      name: "Nodejs",
      totalQuestions: 6,
    },
    {
      _id: "4",
      name: "PHP",
      totalQuestions: 3,
    },
    {
      _id: "5",
      name: "Go",
      totalQuestions: 9,
    },
  ];

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col  overflow-y-auto border-l p-6 pt-36  shadow-light-300 dark:shadow-none max-xl:hidden">
      <div className="">
        <h3 className="h3-bold text-dark200_light900">Trending Topics</h3>
        <div className="mt-7 flex flex-col gap-4">
          {populartags.map((item) => (
            <RenderTag
              key={item._id}
              _id={item._id}
              name={item.name}
              totalQuestions={item.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Hot Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((item) => (
            <Link
              className="flex cursor-pointer items-center justify-between gap-7"
              key={item._id}
              href={`/questions/${item._id}`}
            >
              <p className="body-medium text-dark500_light700">{item.title}</p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="right arrow"
                height={20}
                width={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;

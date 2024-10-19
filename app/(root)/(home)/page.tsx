import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSarchbar from "@/components/shared/search/LocalSarchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: "1",
    title: "How to improve React performance?",
    tags: [
      { _id: "101", name: "React" },
      { _id: "102", name: "Performance" },
      { _id: "103", name: "JavaScript" },
    ],
    author: {
      _id: "201",
      name: "John Doe",
      picture: "https://example.com/profile/john_doe.jpg",
    },
    upvotes: 45,
    views: 2345,
    answers: [
      {
        _id: "301",
        text: "You can use memoization and avoid unnecessary re-renders using React.memo.",
        author: {
          _id: "202",
          name: "Jane Smith",
          picture: "https://example.com/profile/jane_smith.jpg",
        },
        createdAt: new Date("2024-10-12T14:23:00Z"),
      },
      {
        _id: "302",
        text: "Another way is to use lazy loading for components that aren’t needed immediately.",
        author: {
          _id: "203",
          name: "Mike Brown",
          picture: "https://example.com/profile/mike_brown.jpg",
        },
        createdAt: new Date("2024-10-14T09:15:00Z"),
      },
    ],
    createdAt: new Date("2024-10-10T08:00:00Z"),
  },
  {
    _id: "2",
    title: "What are the best practices for using Docker in production?",
    tags: [
      { _id: "104", name: "Docker" },
      { _id: "105", name: "DevOps" },
      { _id: "106", name: "Containers" },
    ],
    author: {
      _id: "204",
      name: "Alex Johnson",
      picture: "https://example.com/profile/alex_johnson.jpg",
    },
    upvotes: 78,
    views: 5200,
    answers: [
      {
        _id: "303",
        text: "Ensure to keep your Docker images lightweight and only include what is necessary.",
        author: {
          _id: "205",
          name: "Rachel Green",
          picture: "https://example.com/profile/rachel_green.jpg",
        },
        createdAt: new Date("2024-09-30T11:45:00Z"),
      },
      {
        _id: "304",
        text: "Use multi-stage builds to optimize your image size and improve build time.",
        author: {
          _id: "206",
          name: "Chandler Bing",
          picture: "https://example.com/profile/chandler_bing.jpg",
        },
        createdAt: new Date("2024-10-02T13:50:00Z"),
      },
    ],
    createdAt: new Date("2024-09-28T10:00:00Z"),
  },
];

const Home = () => {
  return (
    <div>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href={`/ask-question`} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] rounded-xl px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSarchbar
          route="/"
          iconPosition="left"
          imageSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((item) => (
            <QuestionCard
              key={item._id}
              _id={item._id}
              title={item.title}
              tags={item.tags}
              author={item.author}
              upvotes={item.upvotes}
              views={item.views}
              answers={item.answers}
              createdAt={item.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="No questions to show"
            description="Be the first to ask questions on openquest platform!!!"
            link="/ask-question"
            linkTitle="Ask Question"
          />
        )}
      </div>
    </div>
  );
};

export default Home;

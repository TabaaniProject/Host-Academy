import React from "react";
import Card from "components/card";
import { Link } from "react-router-dom";

const ModuleCard = ({ extra, chapterTitle, lessons, id }) => {
  const totalDuration = lessons.reduce((accumulator, currentLesson) => {
    return accumulator + currentLesson.duration;
  }, 0);

  return (
    <div>
      {" "}
      <Card
        extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}  border-2 border-gray-200`}
      >
        <div className="h-full w-96">
          <div className="pb-4">
            <img className=" h-12 w-12 rounded-full bg-gray-300" alt="some nice good"/>
          </div>
          <div>
            <div className="p-![18px] flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
              <div>
                <p className="text-lg font-medium dark:text-white ">
                  {chapterTitle}
                </p>
              </div>
            </div>
            <div className="mt-1 mb-2 flex justify-between">
              <div className="flex  items-center justify-center gap-1">
                <p className="text-md dark:text-white">
                  {lessons.length} Lessons
                </p>

                <div>
                  <p className="text-md dark:text-white">
                    / {totalDuration} min
                  </p>
                </div>
              </div>
            </div>
            <hr className=" mb-4 w-60 border-[1px] bg-gray-500 " />
          </div>

          <div className="mt-1 mb-40 flex w-60 flex-col gap-4 truncate">
            <Link to={`/user/course/${id}`} className="">
              {
              
              lessons.map((lesson, index) => {
                return <div key={index}>{lesson.LessonTitle}</div>;
              })}
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ModuleCard;

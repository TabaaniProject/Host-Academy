import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "components/admincard/CourseCard.jsx";
import Card from "components/card";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
const CourseList = (props) => {
  const [coursesData, setCoursesData] = useState([]);
  const { transparent } = props;
  // const [open, setOpen] = React.useState(false);
  useEffect(() => {
    // Fetch course data from your Node.js backend API
    const fetchCourses = async () => {
      try {
        const response = await axios.get("https://api-academy.tabaani.co/api/courses");
        setCoursesData(response.data);
        console.log("hh"+coursesData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [coursesData]);
  const handleDeleteCourse = async (id) => {
    try {
      await axios.delete(`https://api-academy.tabaani.co/api/course/${id}`);
      // Supprimer le cours du tableau des cours locaux
      setCoursesData((prevCourses) =>
        prevCourses.filter((course) => course.id !== id)
      );
      console.log("Course deleted successfully");
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };


  return (
    <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
          <div class="relative flex items-center justify-between mb-8">
        <div class="text-xl font-bold  dark:text-white">Add category</div>
        <Link to={`formCategory`}>
          <button
            className={`flex items-center text-xl hover:cursor-pointer ${
              transparent
                ? "bg-none text-white hover:bg-none active:bg-none"
                : "bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
            } linear justify-center rounded-lg font-bold transition duration-200`}
          >
            <BsPlus style={{ color: "black" }} size={30} />
          </button>
        </Link>
      </div>
      <div class="relative flex items-center justify-between">
        <div class="text-xl font-bold  dark:text-white">Your courses</div>
        <Link to={`form`}>
          <button
            className={`flex items-center text-xl hover:cursor-pointer ${
              transparent
                ? "bg-none text-white hover:bg-none active:bg-none"
                : "bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
            } linear justify-center rounded-lg font-bold transition duration-200`}
          >
            <BsPlus style={{ color: "black" }} size={30} />
          </button>
        </Link>
      </div>
      <div class="mt-8 h-full overflow-x-scroll xl:overflow-hidden"></div>
      <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
        {coursesData.map((course, id) => (
          <React.Fragment key={id}>
            <CourseCard
              id={course.id}
              title={course.title}
              price={course.price}
              image={course.image}
              level={course.level}
              userpic={course.userpic}
              instructor={course.instructor}
              chaptersnumber={course.chapters.length}
              description={course.description}
              onDelete={() => handleDeleteCourse(course.id)}
            />
          </React.Fragment>
        ))}
      </div>
    </Card>
  );
};

export default CourseList;

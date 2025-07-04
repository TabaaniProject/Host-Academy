import React, { useEffect, useState } from "react";
import LessonCard from "./components/LessonCard";
import ChaptersCard from "components/admincard/ChaptersCard.jsx";
import { useParams } from "react-router-dom";
import NewQuiz from "../quiz";

const CourseOverviewad = () => {
  const [lessonData, setLessonData] = useState("");
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [selectedLessonId, setSelectedLessonId] = useState("")
  const [selectedchapterId, setSelectedchapterId] = useState("")

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api-academy.tabaani.co/api/course/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLessonData(data);
        console.log("lessondata",lessonData.instructor.userpic);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id,selectedLessonId,lessonData.instructor.userpic]);
  
console.log("lessondata",lessonData);
  const handleLessonClick = async (id,index) => {
    setSelectedLessonIndex(index);
    setSelectedLessonId(id);
  
  };


  const handleChapterClick = (id,chapterIndex) => {
    setSelectedChapterIndex(chapterIndex);
    setSelectedchapterId(id);
    setSelectedLessonIndex(0);
  };

  if (!lessonData) {
    return <div>Loading...</div>;
  }

  const selectedChapter = lessonData.chapters[selectedChapterIndex];
  const selectedLesson =
    selectedChapter && selectedChapter.lessons
      ? selectedChapter.lessons[selectedLessonIndex]
      : null;

  //  console.log("lessondata", selectedLesson)
  //console.log("lessonid :  ", selectedChapter.title)
  console.log("chapterid :  ", selectedchapterId)
  return (
    <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-12">
      <div className="md:col-span-12 lg:col-span-4">
        <ChaptersCard
          chapters={lessonData?.chapters}
          lessons={selectedLesson}
          onLessonClick={handleLessonClick}
          onChapterClick={handleChapterClick}
        />
      </div>

      <div className="md:col-span-12 lg:col-span-8">
        {selectedLesson ? (
           <>
          <LessonCard
            key={lessonData?.id}
            CourseTitle={lessonData.title}
             chapterTitle={selectedChapter.title}
            LessonTitle={selectedLesson.LessonTitle}
            userpic={lessonData.instructor.userpic}
            lessonVideo={selectedLesson.lessonVideo}
            LessonDescription={selectedLesson.LessonDescription}
          />
         
          <NewQuiz lessonId={selectedLessonId} id={id}/>
          </>
        ) : (
          <div>No lessons available</div>
        )}
      </div>
    </div>
  );
};

export default CourseOverviewad;

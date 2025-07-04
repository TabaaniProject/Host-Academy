import React, { useEffect, useState } from 'react';
import TOFComponent from './components/TOFComponent';
import QCMComponent from './components/QCMComponent';
import QCUComponent from './components/QCUComponent';
import QuizList from './components/QuizList';
import FinalExamAdd from '../FinalExam';

const NewQuiz = ({lessonId ,id}) => {
  const [selectedChoice, setSelectedChoice] = useState('');
  const [idlesson, setIdLesson] = useState('');
  // let idlesson;
  useEffect(() => {
    setIdLesson(lessonId);
    console.log(idlesson)
  }, [lessonId,idlesson]);
  const handleChoiceChange = (event) => {
    console.log("lesson from index "+lessonId)
    setSelectedChoice(event.target.value);
  };

  return (
    <div className="mt-4 p-4 border bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-2">Add New Quiz</h1>

<QuizList lessonId={lessonId} />
<div className="flex space-x-4 mb-10">
  
  <div className="w-full">
    <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
      <input
        id="bordered-radio-tof"
        type="radio"
        value="tof"
        name="bordered-radio"
        className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={handleChoiceChange}
      />
      <label
        htmlFor="bordered-radio-tof"
        className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        True or False
      </label>
    </div>
  </div>

  <div className="w-full">
    <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
      <input
        id="bordered-radio-qcm"
        type="radio"
        value="qcm"
        name="bordered-radio"
        className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={handleChoiceChange}
      />
      <label
        htmlFor="bordered-radio-qcm"
        className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Multiple Choice (QCM)
      </label>
    </div>
  </div>

  <div className="w-full">
    <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
      <input
        id="bordered-radio-qcu"
        type="radio"
        value="qcu"
        name="bordered-radio"
        className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={handleChoiceChange}
      />
      <label
        htmlFor="bordered-radio-qcu"
        className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Single Choice (QCU)
      </label>
    </div>
  </div>
</div>

<div className="">
      {selectedChoice === 'tof' && <TOFComponent lessonId={lessonId} />}
      {selectedChoice === 'qcm' && <QCMComponent lessonId={lessonId}/>}
      {selectedChoice === 'qcu' && <QCUComponent lessonId={lessonId}/>}
      <FinalExamAdd id={id}/>
      </div>
    </div>

  );
};

export default NewQuiz;

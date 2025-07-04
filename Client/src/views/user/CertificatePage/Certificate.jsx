import React, { useEffect, useState } from "react";
import CertificateCard from "components/card/CertificateCard";

const Certificate = () => {
  const [certificates, setCertificates] = useState([]);
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);
  const userId = user.uid;

  useEffect(() => {
    fetch(`https://api-academy.tabaani.co/api/certificates/user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCertificates(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userId]);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
      {certificates?.map((certificate) => (
        <CertificateCard
          key={certificate.certificateId}
          displayName={certificate.displayName}
          courseTitle={certificate.courseTitle}
          courseDescription={certificate.courseDescription}
          completionDate={certificate.completionDate}
        />
      ))}
    </div>
  );
};

export default Certificate;

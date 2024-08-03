import React from "react";

export default function CvDisplay({ cv }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold">General Info</div>
        <div>Name: {cv.name}</div>
        <div>Email: {cv.email}</div>
        <div>Phone No: {cv.phone}</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold">Education </div>
        <div>Institute: {cv.institute}</div>
        <div>Degree: {cv.degree}</div>
        <div>Date: {cv.date}</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold">Experience </div>
        <div>Company: {cv.company}</div>
        <div>Position: {cv.position}</div>
        <div>Responsibilities: {cv.responsibility}</div>
        <div>
          Date From: {cv.dateFrom} To: {cv.dateTo}
        </div>
      </div>
    </>
  );
}

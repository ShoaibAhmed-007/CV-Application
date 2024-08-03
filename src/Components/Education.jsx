import React from "react";

export default function Education({ form, setForm }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold">Education</div>
        <label className="flex gap-4">
          Institute:
          <input
            type="text"
            placeholder="Enter Institue"
            value={form.institute}
            onChange={(e) => setForm({ ...form, institute: e.target.value })}
          ></input>
        </label>
        <label className="flex gap-4">
          Degree:
          <input
            type="text"
            placeholder="Enter Degree"
            value={form.degree}
            onChange={(e) => setForm({ ...form, degree: e.target.value })}
          ></input>
        </label>
        <label className="flex gap-4">
          Date:
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          ></input>
        </label>
      </div>
    </>
  );
}

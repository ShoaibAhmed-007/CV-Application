import React from "react";

export default function Experience({ form, setForm }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold">Experience</div>
        <label className="flex gap-4">
          Company:
          <input
            type="text"
            placeholder="Enter Company Name"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          ></input>
        </label>
        <label className="flex gap-4">
          Position Title:
          <input
            type="text"
            placeholder="Enter Title"
            value={form.position}
            onChange={(e) => setForm({ ...form, position: e.target.value })}
          ></input>
        </label>
        <label className="flex gap-4">
          Responsibilities:
          <textarea
            placeholder="Enter Job Responsibiliteis"
            value={form.responsibility}
            onChange={(e) =>
              setForm({ ...form, responsibility: e.target.value })
            }
          ></textarea>
        </label>
        <label>
          Worked From:{" "}
          <input
            type="date"
            value={form.dateFrom}
            onChange={(e) => setForm({ ...form, dateFrom: e.target.value })}
          />{" "}
          To:{" "}
          <input
            type="date"
            value={form.dateTo}
            onChange={(e) => setForm({ ...form, dateTo: e.target.value })}
          />
        </label>
      </div>
    </>
  );
}

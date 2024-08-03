import React from "react";

export default function Info({ form, setForm }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold">General Info</div>
        <label className="flex gap-4">
          Name:
          <input
            type="text"
            placeholder=" Enter Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          ></input>
        </label>
        <label className="flex gap-4">
          Email:
          <input
            type="text"
            placeholder=" Enter Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          ></input>
        </label>
        <label className="flex gap-4">
          Phone No:
          <input
            type="text"
            placeholder=" Enter Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          ></input>
        </label>
      </div>
    </>
  );
}

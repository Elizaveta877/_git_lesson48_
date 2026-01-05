import React from "react";

const Form = () => {
  return (
    <form className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">Форма</h2>
      <div className="mb-4">
        <label className="block mb-2">Назва:</label>
        <input type="text" className="border p-2 rounded w-full" required/>
      </div>
      <div>
        <label className="block mb-2">Електронна пошта</label>
        <input type="email" className="border p-2 rounded w-full" required/>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Опис:</label>
        <textarea className="border p-2 rounded w-full" rows="4"></textarea>
      </div>
      <button className="bg-blue-500 text-white p-2 rounded">Додати</button>
    </form>
  );
};

export default Form;

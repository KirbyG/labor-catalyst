"use client";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import "./globals.css";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [desiredYearlySalary, setDesiredYearlySalary] = useState("");
  const [desiredHourlyWage, setDesiredHourlyWage] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("");
  const [skills, setSkills] = useState("");
  const [certifications, setCertifications] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  // Add additional state variables for the other form fields

  function handleResumeUpload(event: ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files?.[0] || null;
    setResume(file);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    // Create an object with the form data
    const formData = {
      name,
      age: parseInt(age),
      // Include other fields
    };

    // Send the data to your server
    // fetch('/api/submit-form', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Form submitted successfully:', data);
    //     // Clear the form or show a success message
    //   })
    //   .catch((error) => {
    //     console.error('Error submitting form:', error);
    //     // Show an error message to the user
    //   });
  }

  return (
    <div className="container mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <label className="block mb-4">
          <span className="text-gray-700 font-bold">Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="text-gray-700 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700 font-bold">Age:</span>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="text-gray-700 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700 font-bold">Sex:</span>
          <input
            type="text"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            required
            className="text-gray-700 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700 font-bold">
            Desired Yearly Salary:
          </span>
          <input
            type="number"
            value={desiredYearlySalary}
            onChange={(e) => setDesiredYearlySalary(e.target.value)}
            required
            className="text-gray-700 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700 font-bold">Desired Hourly Wage:</span>
          <input
            type="number"
            value={desiredHourlyWage}
            onChange={(e) => setDesiredHourlyWage(e.target.value)}
            required
            className="text-gray-700 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700 font-bold">Hours per Week:</span>
          <input
            type="number"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(e.target.value)}
            required
            className="text-gray-700 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700 font-bold">Skills:</span>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            required
            className="text-gray-700 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700 font-bold">
            Certifications/Education Credentials:
          </span>
          <input
            type="text"
            value={certifications}
            onChange={(e) => setCertifications(e.target.value)}
            required
            className="text-gray-700 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700 font-bold">
            PDF Resume Attachment:
          </span>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleResumeUpload}
            required
            className="text-gray-700 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
        {/* Add the rest of your form fields */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

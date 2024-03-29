"use client";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import "./globals.css";
import { Input } from "./input";
import { Upload } from "./upload";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [radius, setRadius] = useState("");
  const [desiredYearlySalary, setDesiredYearlySalary] = useState("");
  const [desiredHourlyWage, setDesiredHourlyWage] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("");
  const [skills, setSkills] = useState("");
  const [certifications, setCertifications] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  // Add additional state variables for the other form fields

  function handleResumeUpload(event: ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files?.[0] || null;
    setResume(file);
  }

  function handlePhotoUpload(event: ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files?.[0] || null;
    setPhoto(file);
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
        <Upload
          label="Profile Photo Upload"
          accept="image/jpeg"
          onChange={handlePhotoUpload}
        />
        <Input
          label="Name:"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Age:"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Input
          label="Sex:"
          type="text"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        />
        <Input
          label="Area Code:"
          type="number"
          value={areaCode}
          onChange={(e) => setAreaCode(e.target.value)}
        />
        <Input
          label="Work Radius:"
          type="number"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
        />
        <Input
          label="Desired Yearly Salary:"
          type="number"
          value={desiredYearlySalary}
          onChange={(e) => setDesiredYearlySalary(e.target.value)}
        />
        <Input
          label="Desired Hourly Wage:"
          type="number"
          value={desiredHourlyWage}
          onChange={(e) => setDesiredHourlyWage(e.target.value)}
        />
        <Input
          label="Hours per Week:"
          type="number"
          value={hoursPerWeek}
          onChange={(e) => setHoursPerWeek(e.target.value)}
        />
        <Input
          label="Skills:"
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <Input
          label="Certifications/Education Credentials:"
          type="text"
          value={certifications}
          onChange={(e) => setCertifications(e.target.value)}
        />

        <Upload
          label="Resume Upload"
          accept="application/pdf"
          onChange={handleResumeUpload}
        />
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

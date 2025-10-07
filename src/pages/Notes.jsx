import React, { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
const branches = [
  { code: "CSE", name: "Computer Science & Engineering" },
  { code: "ECE", name: "Electronics & Communication" },
  { code: "ME", name: "Mechanical Engineering" },
  { code: "CE", name: "Civil Engineering" },
  { code: "EEE", name: "Electrical & Electronics" },
];

const subjectsBySem = {
  1: ["Mathematics I", "Physics/Chemistry", "Engineering Graphics"],
  2: ["Mathematics II", "Basic Electronics", "Programming I"],
  3: ["Data Structures", "Digital Logic", "Circuits"],
  4: ["DBMS", "Algorithms", "Signals & Systems"],
  5: ["Operating Systems", "Microprocessors", "Machine Design"],
  6: ["Computer Networks", "Embedded Systems", "Heat Transfer"],
  7: ["AI/ML", "VLSI", "Renewable Energy"],
  8: ["Seminar", "Final Project", "Elective"],
};

function NotesPage() {
  const [branch, setBranch] = useState(null);
  const [sem, setSem] = useState(null);
  const [subject, setSubject] = useState(null);

  function reset() {
    setBranch(null);
    setSem(null);
    setSubject(null);
  }

  return (
    <div className="w-full min-h-[80vh]">
      {/* Hero */}
      <div
        className="w-full h-[28vh] max-lg:h-[20vh] bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&s=9b9b4f6d2bb2b3b6a6c7d8e9f0a1b2c3")',
        }}
      >
        <div className="w-full h-full bg-black/60 flex items-center">
          <div className="container mx-auto px-5 lg:px-20">
            <h1 className="text-3xl lg:text-4xl font-bold text-white">Access Campus Notes</h1>
            <p className="text-sm text-gray-200 mt-2">Get curated notes and study materials by and for students.</p>
          </div>
        </div>
      </div>

      <section className="py-10">
        <div className="container mx-auto px-5 lg:px-20">
          {!branch ? (
            <>
              <h2 className="text-2xl font-semibold mb-6">Select Branch</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {branches.map((b) => (
                  <button
                    key={b.code}
                    onClick={() => {
                      setBranch(b);
                      setSem(null);
                      setSubject(null);
                    }}
                    className="group bg-white border border-neutral-200 rounded-2xl p-5 text-left hover:shadow transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center font-bold text-black">
                        {b.code}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{b.name}</div>
                        <div className="text-sm text-neutral-500 mt-1">{b.code}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : !sem ? (
            <>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setBranch(null)}
                    className="inline-flex items-center gap-2 px-3 py-2 border border-neutral-200 rounded-lg text-sm text-neutral-700 bg-white hover:bg-neutral-50"
                  >
                    <IoChevronBackOutline/> Back to branches
                  </button>
                </div>

                <div className="mt-2 sm:mt-0">
                  <h2 className="text-2xl font-semibold">{branch.name}</h2>
                  <p className="text-sm text-neutral-500">Choose a semester</p>
                </div>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSem(i + 1)}
                    className="py-3 px-2 bg-white border border-neutral-200 rounded-lg hover:bg-indigo-50 text-center"
                  >
                    Semester {i + 1}
                  </button>
                ))}
              </div>
            </>
          ) : !subject ? (
            <>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setSem(null)}
                    className="inline-flex items-center gap-2 px-3 py-2 border border-neutral-200 rounded-lg text-sm text-neutral-700 bg-white hover:bg-neutral-50"
                  >
                    <IoChevronBackOutline/> Back to semesters
                  </button>

                  <button
                    onClick={() => reset()}
                    className="inline-flex items-center gap-2 px-3 py-2 border border-neutral-200 rounded-lg text-sm text-neutral-700 bg-white hover:bg-neutral-50"
                  >
                    <IoChevronBackOutline/> Back to branches
                  </button>
                </div>

                <div className="mt-2 sm:mt-0">
                  <h2 className="text-2xl font-semibold">{branch.name} — Semester {sem}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {(subjectsBySem[sem] || []).map((s) => (
                  <div key={s} className="bg-white border border-neutral-200 rounded-2xl p-5 flex flex-col justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{s}</div>
                      <div className="text-sm text-neutral-500 mt-1">Subject</div>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <button onClick={() => alert('Downloading sample note for ' + s)} className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-lg">
                        Download Notes
                      </button>
                      <button onClick={() => alert('Not implemented: view details for ' + s)} className="px-3 py-2 text-sm border rounded-lg">Details</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>
    </div>
  );
}

export default NotesPage;

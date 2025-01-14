import React, { useState } from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const DownloadFiles = () => {
  const handleDownload = (fileName) => {
    const link = document.createElement("a");
    // Correctly reference files located in the 'public' directory
    link.href = `/${fileName}`;
    link.download = fileName; // This sets the download attribute
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [viewPdf, setViewPdf] = useState(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const handleViewPdf = (fileName) => {
    setViewPdf(`/${fileName}`);
};
  return (
   <>
   <div className="">
   <div className="ml-20 mt-10">
     <section className="w-full">
     <span className="flex">
        <h3 className="bg-sky-400 py-4 p-4 text-white"> ডাউনলোড কর্নার </h3> 
    </span><br />
      <button onClick={() => handleDownload("slip-plan-2025.pdf")}>
      <p >1. SLIP-2025 PDF</p>
        </button> <br />
     </section>

      {/* 2 */}
      <section>
      <button onClick={() => handleDownload("APA-2024-25.docx")}>
      <p >2. APA 2024-2025</p></button>
      </section>

      {/* 3 */}
      <section>
      <button onClick={() => handleDownload("TC.docx")}>
      <p >3. TC</p></button>
      </section>
    </div>
<div className="ml-20 mt-10 font-noto-sans-bengali">
    <h4 className="text-sky-400 text-2xl">গুরুত্বপূর্ণ ওয়েব লিংক</h4>
    <ul>
  <li>
    <a href="https://www.dpe.gov.bd" target="_blank" rel="noopener noreferrer">
      প্রাথমিক শিক্ষা অধিদপ্তর (ডিপিই),
    </a>
  </li>
  <li>
    <a href="https://mopme.gov.bd" target="_blank" rel="noopener noreferrer">
    প্রাথমিক ও গণশিক্ষা মন্ত্রণালয়,
    </a>
  </li>
  <li>
    <a
      href="https://planipolis.iiep.unesco.org/sites/default/files/ressources/bangladesh_national_education_policy_2010.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
    জাতীয় শিক্ষানীতি ২০১০
    </a>
  </li>
  <li>
    <a href="https://ipemis.dpe.gov.bd" target="_blank" rel="noopener noreferrer">
      আইপিএমএস (IPEMIS)
    </a>
  </li>

  <li>
    <a href="http://www.nape.gov.bd" target="_blank" rel="noopener noreferrer">
    জাতীয় প্রাথমিক শিক্ষা একাডেমি (নেপ)
    </a>
  </li>
  <li>
    <a href="http://www.banbeis.gov.bd" target="_blank" rel="noopener noreferrer">
      ব্যানবেইস
    </a>
  </li>
  
  <li>
    <a href="https://www.teachers.gov.bd" target="_blank" rel="noopener noreferrer">
    শিক্ষক বাতায়ন
    </a>
  </li>
  
  <li>
    <a href="http://www.nctb.gov.bd" target="_blank" rel="noopener noreferrer">
    জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (এনসিটিবি)
    </a>
  </li>

  <li>
    <a href="http://digitalcontent.ictd.gov.bd/index.php/tutorial/digitalcontent" target="_blank" rel="noopener noreferrer">
    শিক্ষা উপকরণ
    </a>
  </li>
</ul>


</div>
   </div>
   </>


  );
};

export default DownloadFiles;

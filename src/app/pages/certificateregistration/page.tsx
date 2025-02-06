import React from "react";
import StudentInfo from "../../../../components/CertificateRegistration/StudentInfo";
import StudentChecklist from "../../../../components/CertificateRegistration/StudentChecklist";
import Footer from "../../../../components/CertificateRegistration/Footer";

const page = () => {
  return (
    <div className="flex flex-col gap-8 min-h-screen mx-4">
      <nav>
        <StudentInfo />
      </nav>

      <section>
        <StudentChecklist />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default page;

import React from "react";
import RegisterForm from "../../components/RegisterForm";
import UserTable from "../../components/UserTable";
import ButtonIncrement from "../../components/ButtonIncrement";
import StudentInfo from "../../components/Registration-Form/StudentInfo";
import StudentChecklist from "../../components/Registration-Form/StudentChecklist";
import Footer from "../../components/Registration-Form/Footer";

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

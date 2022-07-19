import React from "react";
import Landing from "../../components/Landing/Landing";
import Services from "../../components/Services/Services";
import Features from "../../components/Features/Features";
import OurTeam from "../../components/OurTeam/OurTeam";
import EmailForm from "../../components/email_form/EmailForm";

const LandingPage = () => {
  return (
    <div>
      <Landing />
      <Services />
      <Features />
      <OurTeam />
      <EmailForm />
    </div>
  );
};

export default LandingPage;

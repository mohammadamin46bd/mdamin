import React from "react";

import ResponsiveContainer from "../containers/ResponsiveContainer";
import Educations from "./Educations";
import Experiences from "./Experiences";
import HomepageFooter from "./HomepageFooter";
import LicensesAndCertification from "./LicensesAndCertification";

const homepageLayout = () => (
  <ResponsiveContainer>
    {/* Experience   */}
    <Experiences />
    {/* Education   */}
    <Educations />
    {/* Licenses & CertificationsData   */}
    <LicensesAndCertification />
    {/* Home page footer   */}
    <HomepageFooter />
  </ResponsiveContainer>
);

export default homepageLayout;

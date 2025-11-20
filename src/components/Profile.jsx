import ProfilePicture from "./ProfilePicture.jsx";
import AboutMe from "./AboutMe.jsx";
import Skills from "./Skills.jsx";
import Button from "./Button.jsx";
import Header from "./Header.jsx"; 

function Profile() {
  return (
    <div className="container">
      <div className="left-section">
        <ProfilePicture />
      </div>
      <div className="right-section">
        <Header />
        <AboutMe />
        <Skills />
        <Button />
      </div>
    </div>
  );
}

export default Profile;

import ProgressBar from "../../Components/ProgressBar";
import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import './SkillsPage.css'
import Footer from "../../Components/Footer";
// import icon from "../../images/c++.png";

function SkillsPage () {

    const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => (prev < 100 ? prev + 10 : 100));
    }, 1000)

    return () => clearInterval(interval);
  })

    return (
        <>
        <Header/>
        <div className="skills">
            <div className="img-Parent">
                <img src="https://ajitverma15.github.io/Interactive-Portfolio/Image/Skills.svg" alt="skillsImg"/>
            </div>
            <div className="progressBar-Parent">
                <h2>Proficiency</h2>
                <ProgressBar  percentage= {50}/>
                <ProgressBar
                    percentage={60}/>
                <ProgressBar
                    percentage={90}/>
                <ProgressBar
                    percentage={36}/>
                <ProgressBar
                    percentage={78}/>
                <ProgressBar
                    percentage={65}/>
                <ProgressBar
                    percentage={95}/>
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default SkillsPage;
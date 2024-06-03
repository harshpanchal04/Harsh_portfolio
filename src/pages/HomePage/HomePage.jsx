import Tile from "../../Components/Tile";
import Header from "../../Components/Header";
import { mdiLaptop } from '@mdi/js';
import { mdiFileCode } from '@mdi/js';
import { mdiLanguageHtml5 } from '@mdi/js';
import { mdiLanguageCss3 } from '@mdi/js';
import { mdiBootstrap } from '@mdi/js';
import { mdiLanguageJavascript } from '@mdi/js';
import { mdiReact } from '@mdi/js';
import { mdiNodejs } from '@mdi/js';
import Footer from "../../Components/Footer";


function HomePage() {
    return (
      <>
        <Header/>

        <Tile
      position={"right"}
      img={"https://ajitverma15.github.io/Interactive-Portfolio/Image/20200630_162659.gif"}
      header={"Hello All! I'm Harsh 👋"}
      text2={"A passionate Developer having an experience in Data Analytics, Machine Learning and Web Development and want to develop sustainable and scalable social and technical systems to create impact"}
      image={"gif"}
      />


      <Tile
        img={"https://ajitverma15.github.io/Interactive-Portfolio/Image/Data_Analysis.svg"}
        header={"Data Analytics & ML"}
        text1={"💥 Developing Models that clean, tranform and analyse raw data to discover useful information, in order to make conclusions about the data."}
        text2={"💥 Experience of working with different python Libraries like Numpy, Pandas, Matplotlib, Seaborn etc. and have knowledge of Data analysis algorithms and techniques."}
      />


      <Tile 
        position={"right"}
        img={"https://ajitverma15.github.io/Interactive-Portfolio/Image/website.svg"}
        header={"Web Development"}
        icon1={mdiLanguageHtml5}
        icon2={mdiLanguageCss3}
        icon3={mdiBootstrap}
        icon4={mdiLanguageJavascript}
        icon5={mdiReact}
        icon6={mdiNodejs}
        text1={"💥 Building Fully responsive website frontend using HTML, CSS, Bootstrap and Javascript."}
        text2={"💥 As of now I have knowledge only of frontend but in near future I will learn more skills and excited to explore React, NodeJS, Django, Flask and many more."}
        text3={"💥 I have also used Abode Photoshop, Illustrator and Figma to design User interface of websites and mobile applications and designed logo"}
        />

    <Tile
      img={"https://ajitverma15.github.io/Interactive-Portfolio/Image/Coding.svg"}
      header={"Data Structures and Algorithms"}
      icon1={mdiLaptop}
      icon2={mdiFileCode}
      text1={"💥 I have knowledge of Data Structures like Hash Tables, Trees, Tries, Graphs, and various algorithms for solving various problems efficiently."}
      text2={"💥 As I know Data Structures and Algorithms are the heart of programming, so I love to solve programming questions in different competitive websites like Codeforces, Codechef, Hackerrank and many more."}
      />

      <Footer/>
      </>
    )

}
export default HomePage;
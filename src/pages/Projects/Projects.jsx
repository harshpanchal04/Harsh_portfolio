import Tile from "../../Components/Tile";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Projects () {
    return (
        <>

        <Header/>

            <Tile
                img={"https://ajitverma15.github.io/Interactive-Portfolio/Image/Project.svg"}
                header={"Projects"}
                text1={"My Project uses various technologies to make the model more accurate and stable. As of now, I haven't done many projects but in near future I will make more projects."}
            />
        <Footer/>
        </>
    )
}

export default Projects;
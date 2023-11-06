
import { Container , Row , Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";

export const Banner =() =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting , setIsDeleting] =useState(false);
    const toRotate = ["Web Developer" , "Web Designer" , "UI/UX Designer"];
    const [text , setText] =useState('');
    const [delta , setDelta]= useState (300 - Math.random() * 100);
    const period =2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
    
        return () =>{ clearInterval(ticker)};
    }, [text]);
   

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0 , text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1 );
            setDelta(500)
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcom to my Portfolio</span>
                        <h1>{` Hi I'm webdecoded `} <span className="wrap">{text}</span></h1>
                        <p>Le Lorem Ipsum est simplement du faux texte
                             employé dans la composition et la mise en 
                             page avant impression. Le Lorem Ipsum est le 
                             faux texte standard de l'imprimerie depuis les 
                             années 1500, quand un imprimeur anonyme assembla
                              ensemble des morceaux de texte pour réaliser un
                               livre spécimen de polices de texte.</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src={headerImg} alt="Headder Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
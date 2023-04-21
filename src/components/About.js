import React from 'react'
import { Container, Row, Col} from 'reactstrap';

export default function About() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className='d-flex justify-content-center'>
          <img src="./images/profilepic.png" alt="About Us" fluid width={450}/>
        </Col>
        <Col md={6} className="d-flex py-5 px-5 justify-align-content-between bg-body-tertiary" style={{backgroundColor: ''}}>
          <div>
            <h2 className="mb-3">About Me</h2>
            <p>Fresh web developer with a passion for creating innovative and user-friendly websites.
            Quick learner and thrive in a fast-paced environment. I enjoy working with others and collaborating on projects to create the best possible outcome.
            </p>
            <p>During my internsip at Techoverflow, I worked on multiple projects and created responsive and innovative websites.</p>
            <p>I am confident that my technical skills and drive to continuously improve will make me a valuable asset to any team.
            If you're looking for a web developer who is dedicated, enthusiastic, and eager to tackle new challenges, I would love the opportunity to work with you. Please don't hesitate to get in touch with me.</p>
          </div>
        </Col>
      </Row>
    </Container>
    
    // <div
    //   style={{
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     height: '100vh',
        
    //   }}
    // >
    //   <div
    //     style={{
    //       display: 'flex',
    //       flexDirection: 'row',
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //       width: '100%',
    //       maxWidth: '1200px',
    //       padding: '0 40px'
    //     }}
    //   >
    //     <div
    //       style={{
    //         width: '40%',
    //         paddingRight: '50px'
    //       }}
    //     >
    //       <img
    //         src="./images/profilepic.png"
    //         alt="Your alt text"
    //         style={{
    //           maxWidth: '100%',
    //           height: 'auto'
    //         }}
    //       />
    //     </div>
    //     <div
    //       style={{
    //         width: '50%'

    //       }}
    //     >
    //       <h1>About Me</h1>
    //       <p>Hello! I'm Abdullah, and I am a fresh web developer with a passion for creating innovative and user-friendly websites. I have strong foundation in web development, which includes HTML, CSS, JavaScript, MERN Stack, and various web development frameworks.</p>
    //       <p>I am excited to bring my creativity, problem-solving abilities, and attention to detail to the table. I am a quick learner and thrive in a fast-paced environment. I enjoy working with others and collaborating on projects to create the best possible outcome. My ultimate goal as a web developer is to create websites that not only look great, but also provide a seamless user experience. I am confident that my technical skills and drive to continuously improve will make me a valuable asset to any team.
    //       </p>
    //       <p>If you're looking for a web developer who is dedicated, enthusiastic, and eager to tackle new challenges, I would love the opportunity to work with you. Please don't hesitate to get in touch with me.</p>
    //     </div>
    //   </div>
    // </div>

  )
}

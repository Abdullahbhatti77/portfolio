import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Progress } from 'reactstrap';

export default function Skills() {
  
  // const [hoveredIcon, setHoveredIcon] = useState('');
  // // const [isHovered, setIsHovered] = useState(false);

  // const handleIconHover = (iconName) => {
  //   setHoveredIcon(iconName);
  // };

  // const handleIconLeave = () => {
  //   setHoveredIcon('');
  // };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-5">My Skills</h2>
      <Row className='g-3 bg-body-tertiary'>
        <Col md={6} className=' d-flex justify-content-center'>
          {/* <h4 className="mb-4">Frontend Development</h4> */}
          <ul className="list-unstyled">
            <li className='mb-3' style={{fontSize: '30px', fontWeight: 'inherit'}}>Frontend Dev.</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
          </ul>
        </Col>
        <Col md={6} className=' d-flex justify-content-center'>
          {/* <h4 className="mb-4">Frameworks & others</h4> */}
          <ul className="list-unstyled">
            <li className='mb-4' style={{fontSize: '30px', fontWeight: 'inherit'}}>Frameworks</li>
            <li>React JS</li>
            <li>Next JS</li>
            <li>Vue JS</li>
            <li>MongoDB</li>
            <li>Redux</li>
            <li>AWS</li>
          </ul>
        </Col>
        <Col md={6} className=' d-flex justify-content-center'>
          {/* <h4 className="mb-4">Technical Skills</h4> */}
          <ul className="list-unstyled">
            <li className='mb-4' style={{fontSize: '30px', fontWeight: 'inherit'}}>Technical Skills</li>
            <li>Git</li>
            <li>npm</li>
            <li>VS Code</li>
            <li>Command Line</li>
            <li>Responsive Design</li>
          </ul>
        </Col>
      
        <Col md={6} className=' d-flex justify-content-center'>
          {/* <h4 className="mb-4">Soft Skills</h4> */}
          <ul className="list-unstyled">
            <li className='mb-4' style={{fontSize: '30px', fontWeight: 'inherit'}}>Soft Skills</li>
            <li>Teamwork</li>
            <li>Problem Solving</li>
            <li>Communication</li>
            <li>Time Management</li>
            <li>Adaptability</li>
          </ul>
        </Col>
      </Row>
    </Container>


    // <div>
    //   <div className='container mt-5'>
    //     <h1
    //       style={{ textAlign: 'center', position: 'relative' }}
    //     >
    //       Skills
          
    //       <div
    //         style={{
    //           position: 'absolute',
    //           bottom: '-5px',
    //           left: '50%',
    //           transform: 'translateX(-50%)',
    //           width: '50px',
    //           height: '2px',
    //           backgroundColor: 'orange',
    //         }}
    //       />
    //     </h1>
    //   </div>

    //   <div className='container mt-5'>
    //     <div className='row'>
    //       <div
    //         className='col-md-3 d-flex flex-column align-items-center'
    //         onMouseEnter={() => handleIconHover('HTML')}
    //         onMouseLeave={handleIconLeave}
    //       >
    //         <img src='./images/html-5.png' height='80px' alt='html' />
    //         {hoveredIcon === 'HTML' && (
    //           <span style={{ marginTop: '5px' }}>HTML</span>
    //         )}
    //       </div>
    //       <div
    //         className='col-md-3 d-flex flex-column align-items-center'
    //         onMouseEnter={() => handleIconHover('CSS')}
    //         onMouseLeave={handleIconLeave}
    //       >
    //         <img src='./images/css-3.png' height='80px' alt='css' />
    //         {hoveredIcon === 'CSS' && (
    //           <span style={{ marginTop: '5px' }}>CSS</span>
    //         )}
    //       </div>
    //       <div
    //         className='col-md-3 d-flex flex-column align-items-center'
    //         onMouseEnter={() => handleIconHover('JavaScript')}
    //         onMouseLeave={handleIconLeave}
    //       >
    //         <img src='./images/js.png' height='80px' alt='javascript' />
    //         {hoveredIcon === 'JavaScript' && (
    //           <span style={{ marginTop: '5px' }}>JavaScript</span>
    //         )}
    //       </div>
    //       <div
    //         className='col-md-3 d-flex flex-column align-items-center'
    //         onMouseEnter={() => handleIconHover('Bootstrap')}
    //         onMouseLeave={handleIconLeave}
    //       >
    //         <img src='./images/bootstrap.png' height='80px' alt='bootstrap' />
    //         {hoveredIcon === 'Bootstrap' && (
    //           <span style={{ marginTop: '5px' }}>Bootstrap</span>
    //         )}
    //       </div>
    //     </div>
    //   </div>

    //   <div className='container mt-5'>
    //     <div className='row'>
    //       <div
    //         className='col-md-3 d-flex flex-column align-items-center'
    //         onMouseEnter={() => handleIconHover('Node Js')}
    //         onMouseLeave={handleIconLeave}
    //       >
    //         <img src='./images/nodejs.png' height='80px' alt='nodejs' />
    //         {hoveredIcon === 'Node Js' && (
    //           <span style={{ marginTop: '5px' }}>Node Js</span>
    //         )}
    //       </div>
    //       <div
    //         className='col-md-3 d-flex flex-column align-items-center'
    //         onMouseEnter={() => handleIconHover('React Js')}
    //         onMouseLeave={handleIconLeave}
    //       >
    //         <img src='./images/react.png' height='80px' alt='React Js' />
    //         {hoveredIcon === 'React Js' && (
    //           <span style={{ marginTop: '5px' }}>React Js</span>
    //         )}
    //       </div>
    //       <div
    //         className='col-md-3 d-flex flex-column align-items-center'
    //         onMouseEnter={() => handleIconHover('Redux')}
    //         onMouseLeave={handleIconLeave}
    //       >
    //         <img src='./images/redux.png' height='80px' alt='Redux' />
    //         {hoveredIcon === 'Redux' && (
    //           <span style={{ marginTop: '5px' }}>Redux</span>
    //         )}
    //       </div>
    //       <div
    //         className='col-md-3 d-flex flex-column align-items-center'
    //         onMouseEnter={() => handleIconHover('Next Js')}
    //         onMouseLeave={handleIconLeave}
    //       >
    //         <img src='./images/nextjs.png' height='80px' alt='nextjs' />
    //         {hoveredIcon === 'Next Js' && (
    //           <span style={{ marginTop: '5px' }}>Next Js</span>
    //         )}
    //       </div>
    //     </div>
    //   </div>

    //   <div className='container mt-5'>
    //     <div className='row'>
    //       <div
    //         className='col-md-3 d-flex flex-column align-items-center'
    //         onMouseEnter={() => handleIconHover('Wordpress')}
    //         onMouseLeave={handleIconLeave}
    //       >
    //         <img src='./images/wordpress.png' height='80px' alt='wordpress' />
    //         {hoveredIcon === 'Wordpress' && (
    //           <span style={{ marginTop: '5px' }}>Wordpress</span>
    //         )}
    //       </div>
    //       <div
    //         className='col-md-3 d-flex flex-column align-items-center'
    //         onMouseEnter={() => handleIconHover('SEO')}
    //         onMouseLeave={handleIconLeave}
    //       >
    //         <img src='./images/seo.png' height='80px' alt='seo' />
    //         {hoveredIcon === 'SEO' && (
    //           <span style={{ marginTop: '5px' }}>SEO</span>
    //         )}
    //       </div>
    //       <div
    //         className='col-md-3 d-flex flex-column align-items-center'
    //         onMouseEnter={() => handleIconHover('AWS')}
    //         onMouseLeave={handleIconLeave}
    //       >
    //         <img src='./images/aws.png' height='80px' alt='AWS' />
    //         {hoveredIcon === 'AWS' && (
    //           <span style={{ marginTop: '5px' }}>AWS</span>
    //         )}
    //       </div>
    //       <div
    //         className='col-md-3 d-flex flex-column align-items-center'
    //         onMouseEnter={() => handleIconHover('Mongo DB')}
    //         onMouseLeave={handleIconLeave}
    //       >
    //         <img src='./images/mongo.png' height='80px' alt='mongodb' />
    //         {hoveredIcon === 'Mongo DB' && (
    //           <span style={{ marginTop: '5px' }}>Mongo DB</span>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>

  )
}

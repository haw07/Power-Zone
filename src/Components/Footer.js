import React from 'react'
import '../style.css'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (

    // <footer className="w-full bg-black text-white">
    //   <section className="flex justify-between m-5">
    //     <div className="mr-5 w-64">
    //       <img
    //         src="/logo-removebg-preview.png"
    //         alt="image"
    //         className="h-32 block m-auto mb-2"
    //       />
    //       <p className="ml-4">
    //         Power Zone is a gym for athletics. Through this website, you can
    //         register for classes, take advice from nutritionist and much more!
    //       </p>
    //     </div>

    //     <div className="mr-5">
    //       <h1 className="font-bold text-3xl">Useful Links</h1>
    //       <ul className="p-5 text-center">
    //         <li className="mb-3 hover:text-orange-500">
    //           <a href="#">About</a>
    //         </li>
    //         <li className="mb-3 hover:text-orange-500">
    //           <a href="#">Blog</a>
    //         </li>
    //         <li className="mb-3 hover:text-orange-500">
    //           <a href="#">Classes</a>
    //         </li>
    //       </ul>
    //     </div>

    //     <div>
    //       <h1 className="font-bold text-3xl">Support</h1>
    //       <ul className="p-5 text-center">
    //         <li className="mb-3 hover:text-orange-500">
    //           <a href="#">login</a>
    //         </li>
    //         <li className="mb-3 hover:text-orange-500">
    //           <a href="#">My Account</a>
    //         </li>
    //         <li className="mb-3 hover:text-orange-500">
    //           <a href="#">Contact</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </section>

    //   <hr />

    //   <section className="text-center p-5">
    //     <p>Copywrites &copy; | Power Zone | CMPS 271</p>
    //   </section>
    // </footer>    

    // <section className="footer-section bg-black text-white">
    //   <Container className="p-2 m-5">
    //     <Row>
    //       <Col lg={4}>
    //         <div className="fs-about">
    //           <div className="fa-logo">
    //             <a href="#">
    //               <img
    //                 height="150"
    //                 width="150"
    //                 src="/logo-removebg-preview.png"
    //                 alt="logo"
    //               />
    //             </a>
    //           </div>
    //           <p>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore dolore magna aliqua endisse
    //             ultrices gravida lorem.
    //           </p>
    //           <div className="fa-social">
    //             <a href="#">
    //               <i className="fa fa-facebook"></i>
    //             </a>
    //             <a href="#">
    //               <i className="fa fa-twitter"></i>
    //             </a>
    //             <a href="#">
    //               <i className="fa fa-youtube-play"></i>
    //             </a>
    //             <a href="#">
    //               <i className="fa fa-instagram"></i>
    //             </a>
    //             <a href="#">
    //               <i className="fa fa-envelope-o"></i>
    //             </a>
    //           </div>
    //         </div>
    //       </Col>
    //       <Col lg={2} md={3} sm={6}>
    //         <div className="fs-widget">
    //           <h4 class="text-white">Useful links</h4>
    //           <ul className='list-none'>
    //             <li>
    //               <a href="#" class="text-white no-underline">About</a>
    //             </li>
    //             <li>
    //               <a href="#" className='text-white'>Blog</a>
    //             </li>
    //             <li>
    //               <a href="#" className='text-white'>Classes</a>
    //             </li>
    //             <li>
    //               <a href="#" className='text-white'>Contact</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </Col>
    //       <Col lg={2} md={3} sm={6}>
    //         <div className="fs-widget">
    //           <h4 className='text-white'>Support</h4>
    //           <ul>
    //             <li>
    //               <a href="#" className='text-white'>Login</a>
    //             </li>
    //             <li>
    //               <a href="#" className='text-white'>My account</a>
    //             </li>
    //             <li>
    //               <a href="#" className='text-white'>Subscribe</a>
    //             </li>
    //             <li>
    //               <a href="#" className='text-white'>Contact</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </Col>
    //       <Col lg={4} md={6}>
    //         <div className="fs-widget">
    //           <h4 className='text-white'>Tips & Guides</h4>
    //           <div className="fw-recent">
    //             <h6>
    //               <a href="Header"  className='text-white no-underline'>
    //                 Physical fitness may help prevent depression, anxiety
    //               </a>
    //             </h6>
    //             <ul>
    //               <li>3 min read</li>
    //               <li>20 Comment</li>
    //             </ul>
    //           </div>
    //           <div className="fw-recent">
    //             <h6>
    //               <a href="#" className='text-white'>
    //                 Fitness: The best exercise to lose belly fat and tone up...
    //               </a>
    //             </h6>
    //             <ul>
    //               <li>3 min read</li>
    //               <li>20 Comment</li>
    //             </ul>
    //           </div>
    //         </div>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col lg={12} className="text-center">
    //         <div className="copyright"></div>
    //       </Col>
    //     </Row>
    //   </Container>
    // </section>


      <section class="footer-section" className='bg-black pt-5'>
        <div class="container" className='p-2 mx-5'>
            <div class="row pb-3">
                <div class="col-lg-4 col_">
                    <div class="fs-about" className="place-content-center">
                        <div class="fa-logo">
                            <a href="#">
                              <img 
                                height="140"
                                width="140"
                                src="/logo-removebg-preview.png"
                                alt="logo"
                              />
                              </a>
                        </div>
                        <p>Transforming Your Fitness Journey with Smart Management - Gym Management System<p class="p-element">Power Zone</p></p>
                        <div class="fa-social">
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-youtube"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-solid fa-envelope fa-envelope-f"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="fs-widgets">
                        <h4 class="h4-1">Useful links</h4>
                        <ul class="list">
                            <li><a href="#" class="items">About</a></li>
                            <li><a href="#" class="items">Blog</a></li>
                            <li><a href="#" class="items">Classes</a></li>
                            <li><a href="#" class="items">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="fs-widgets">
                        <h4 class="h4-1">Support</h4>
                        <ul class="list">
                            <li><a href="#" class="items">Login</a></li>
                            <li><a href="#" class="items">My account</a></li>
                            <li><a href="#" class="items">Subscribe</a></li>
                            <li><a href="#" class="items">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 column">
                    <div class="fs-widget">
                        <h4 class="h4-1">Tips & Guides</h4>
                        <div class="fw-recent1">
                            <h6><a href="#"  class="h6-1">Physical fitness may help prevent depression, anxiety</a></h6>
                            <ul class="list">
                                <li class="item">3 min read</li>
                                <li class="item">20 Comment</li>
                            </ul>
                        </div>
                        <div class="fw-recent">
                            <h6><a href="#"  class="h6-1">Fitness: The best exercise to lose belly fat and tone up...</a></h6>
                            <ul class="list">
                                <li class="item">3 min read</li>
                                <li class="item">20 Comment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row1">
                <div class="col-lg-12 text-center py-2 pt-4">
                    <div class="copyright-text">
                        <p>Copyright &copy;2023 All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
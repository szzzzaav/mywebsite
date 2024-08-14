import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h2>My Note</h2>
                  <form>
                    <Row>
                      <Col size={12} className="px-1">
                        <button
                          onClick={() =>
                            window.open(
                              "https://raspy-coffee-15a.notion.site/Webpack-680099b66ae94cb8afd11d2b19e88859?pvs=4"
                            )
                          }
                        >
                          <span>{"webpack"}</span>
                        </button>
                      </Col>
                    </Row>
                    <Row>
                      <Col size={12} className="px-1">
                        <button
                          onClick={() =>
                            window.open(
                              "https://jealous-koi-295.notion.site/EasyChat-aa0a8f507c2448d78ccfce6d768efbce"
                            )
                          }
                        >
                          <span>{"Easy-chat开发"}</span>
                        </button>
                      </Col>
                    </Row>
                    <Row>
                      <Col size={12} className="px-1">
                        <button
                          onClick={() =>
                            window.open(
                              "https://raspy-coffee-15a.notion.site/TypeScript-b75a6d9afa694e7482ad93762d395811?pvs=74"
                            )
                          }
                        >
                          <span>{"TypeScript"}</span>
                        </button>
                      </Col>
                    </Row>
                    <Row>
                      <Col size={12} className="px-1">
                        <button
                          onClick={() =>
                            window.open(
                              "https://jealous-koi-295.notion.site/Git-f32a5d99587348f1b9fda6d68fb01d6c?pvs=4"
                            )
                          }
                        >
                          <span>{"Git"}</span>
                        </button>
                      </Col>
                    </Row>
                    <Row>
                      <Col size={12} className="px-1">
                        <button
                          onClick={() =>
                            window.open(
                              "https://jealous-koi-295.notion.site/NEXT-JS-8c9627159ad74f32af88959e310a2598?pvs=4"
                            )
                          }
                        >
                          <span>{"Next.js"}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

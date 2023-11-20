import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import TeamTwoItem from "../Team/TeamTwoItem";
import { AiOutlineClose } from "react-icons/ai";
import ScrollAnimation from "react-animate-on-scroll";

const Profile = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ cursor: 'pointer' }}>
      <Button className="all-unset" onClick={handleShow}>
        <TeamTwoItem item={data} />
      </Button>
      <Modal className="custom-modal" show={show} onHide={handleClose} centered>
        <Modal.Header>
          <button
            className="all-unset close-button"
            onClick={() => setShow(false)}
          >
            <AiOutlineClose />
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="team-item team-item-two">
            <div className="profile-img">
              <img src={data.src} alt={data.name} />
            </div>
            <div className="team-content">
              <h2 className="title">{data.name}</h2>
              <span>{data.designation}</span>
              <p className="subtle-text px-3 profile-text">{data.desc}</p>
              {/* <ul className="team-social">
                <li>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Profile;

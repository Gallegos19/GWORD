'use client'
import React from "react";
import { UncontrolledAlert } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Alert() {
    return (
        <>
          
          <UncontrolledAlert color="danger">
            <span className="alert-icon">
              <i className="ni ni-like-2"></i>
            </span>
            <span className="alert-text">
              <strong>Danger!</strong>{" "}
              This is a danger alert—check it out!
            </span>
          </UncontrolledAlert>
          

          
        </>
      );
}

'use client'
import React from "react";
import { UncontrolledAlert } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AlertSuccess() {
    return (
        <>
          
          <UncontrolledAlert color="success">
            <span className="alert-icon">
              <i className="ni ni-like-2"></i>
            </span>
            <span className="alert-text">
              <strong>Success!</strong>{" "}
              This is a success alert—check it out!
            </span>
          </UncontrolledAlert>
        </>
      );
}

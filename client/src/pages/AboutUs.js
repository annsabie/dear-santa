import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import Auth from "../utils/auth";

const AboutUs = () => {
  return (
    <>
      <Jumbotron> Our Story </Jumbotron>

      <div>
        <div className="row flex-container mt-3 ml-3">
          <div className="col-sm-12 col-lg-5 shadow-lg rounded">
            <div className="card m-1">
              <div className="card-body justify-content-end">
                <h2 className="text-center">
                  {" "}
                  Dear Santa! {" "}
                </h2>
                <div className="welcome-text">
                  <p></p>
                  <p></p>
                  <p></p>
                  <p className="text-center">Who we are and what we do</p>
                  <p className="blog-text">
                    Thank you for showing interest in our website. Here a
                  </p>
                  <p className="blog-text">
                    Nemo, vero excepturi rerum iure iste aut praesentium? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                    consequatur quos. Non tenetur excepturi mollitia aliquid id
                    autem nulla impedit libero magnam eligendi! Possimus
                    corporis atque praesentium amet officia hic? Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Suscipit
                    aperiam, inventore sint doloribus ducimus quidem amet ipsum.
                    Illum distinctio consequatur odit. Corrupti consequatur a
                    ullam repudiandae reprehenderit adipisci modi autem? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Quasi
                    voluptatem, ad maxime eaque, ratione ipsum eum at quo et
                    deserunt quod non rerum sed. Ea vitae minima autem deleniti
                    corporis? Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit.
                  </p>
                  <p className="blog-text">
                    Asperiores voluptatibus nulla quisquam nesciunt ut dolor
                    explicabo esse earum, quos minus adipisci modi, doloremque
                    quasi eius, eveniet corrupti ab ipsa impedit. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Minima nobis
                    possimus, tempore reprehenderit explicabo totam est
                    molestias incidunt soluta in ea, nam magnam enim sint. Quod
                    maiores dignissimos natus sequi. Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Voluptatem sequi nam nisi
                    adipisci architecto eos eum quaerat. Ipsum temporibus,
                    libero doloribus maiores quos aliquid eos officia debitis
                    dolorem labore optio!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

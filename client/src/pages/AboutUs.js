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
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
// import Auth from "../utils/auth";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AboutUs = () => {
  return (
    <>
      <Jumbotron> Our Story </Jumbotron>

      <div>
      <div className="row flex-container mt-3 ml-3">
          <div className="col-sm-12 col-lg-5 shadow-lg rounded">
            <div className="card m-1">
              <div className="card-body justify-content-end">
                <h2 className="text-center"> Dear Santa! </h2>
                <div className="welcome-text">
                  <p></p>
                  <p></p>
                  <p></p>
                  <p className="text-center">Who we are and what we do</p>
                  <p className="blog-text">
                    We can agree there is so much time and money spent during
                    holiday season just trying to figure out which gift to buy,
                    or if someone had already bought the gift that you are still
                    waiting in line for.
                  </p>
                  <p className="blog-text">
                    Imagine waking up for Christmas knowing you will not receive
                    the same gift from your favorite aunties or going gift
                    shopping, knowing exactly what to add to your shopping cart.
                  </p>
                  <p className="blog-text">
                    Here at Dear Santa, we have made it our priority to equip
                    you with tool to be able to navigate your holiday season
                    shopping adventures.
                  </p>
                  <p className="blog-text">Why choose us?</p>
                  <p className="blog-text">
                    Dear Santa allows you to create a wish list that can be
                    posted publicly or privately amongst family and friends.
                    
                    <div>
                      <Stack direction="row" spacing={2}>
                        <Item>You can see what items have been purchased and what is
                    still available to be changed.</Item>
                        <Item>Effortless organization of
                    your gifts.</Item>
                        <Item>All you need is a link to your item to add it to
                    your wish list and have an ability to rank your items.</Item>
                      </Stack>
                  </div>
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

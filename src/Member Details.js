import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './footer';
import Header from './header';
import biku from './Images/BIKU.jpeg';
//import {QrReader} from 'react-qr-reader';

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(true);
  const [loading, setLoading] = useState(true);

  const fetchMemberData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/members/${id}`);
      setMember(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMemberData();
  }, []);

  const handleScan = async (url) => {
    if (url) {
      try {
        const response = await axios.get(`http://localhost:3001/members/${id}`);
        setMember(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
    <div>
      <Header />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4 py-2'>
            <div className='card' style={{ width: '480px',height:'320px' }}>
              <div className='row no-gutters'>
                <h3 className='card-title d-flex align-items-center justify-content-center'>
                  <u>Membership Details</u>
                </h3>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <ul className='list-unstyled'>
                      <li className='d-flex'>
                        Name: <h6 className='py-1 px-1'>{member.name}</h6>
                      </li>
                      <li className='d-flex'>
                        Phone Number:
                        <h6 className='py-1 px-1'>{member.contact}</h6>
                      </li>
                      <li className='d-flex'>
                        Email:<h6 className='py-1 px-1'>{member.email}</h6>
                      </li>
                      <li className='d-flex'>
                        Blood Group:
                        <h6 className='py-1 px-1'>{member.bloodgrp}</h6>
                      </li>
                      <li className='d-flex'>
                        Member Since:
                        <h6 className='py-1 px-1'>{member.since}</h6>
                      </li>
                      <li className='d-flex'>
                        Due:<h6 className='py-1 px-1'>{member.due}</h6>
                      </li>
                      <li className='d-flex'>
                        Membership Status:
                        <h6 className='py-1 px-1'>{member.status}</h6>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Display other member details here */}
              </div>
            </div>
            
          </div>
          <div className='col-md-4'></div>
        </div>
      </div>
      <div>
      <Footer />
    </div>
    </div>
  );
}

export default MemberDetails;

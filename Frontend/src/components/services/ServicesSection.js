import React from 'react';
import styled from 'styled-components';
import { FaUserFriends } from 'react-icons/fa';
import { RiImageEditLine } from 'react-icons/ri';
import { MdPhotoCamera } from 'react-icons/md';
import SectionTitle from '../titles/SectionTitle';
import ServiceItem from './ServiceItem';

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .services__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .services__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

function ServicesSection() {
  return (
    <ServicesSectionStyles id="services">
      <div className="container">
        <SectionTitle className="services__title">Features</SectionTitle>
        <div className="services__items">
          <ServiceItem
            icon={<RiImageEditLine />}
            title="Image Classification"
            desc="Label images for single-label and multi-label image classification models."
          />
          <ServiceItem
            icon={<MdPhotoCamera />}
            title="Image Segmentation"
            desc="Label your data for semantic or instance image segmentation models."
          />
          <ServiceItem
            icon={<FaUserFriends />}
            title="User Friendly"
            desc="Understands the user's demands and fulfill it accordingly. Easy to use."
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}

export default ServicesSection;

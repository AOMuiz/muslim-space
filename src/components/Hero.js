import { QUERIES, WEIGHTS } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import {styled} from 'twin.macro';

const Hero = () => {
  return (
    <HeroContainer>
      <div>
        <Headline>Welcome to the Muslim Space!</Headline>
        <SubHeadline>
          Buy your products and services from trustworthy Muslims around you
          anywhere in the world.
        </SubHeadline>
      </div>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.section`
  background: linear-gradient(180deg, rgba(182, 183, 185, 0.35) 0%, rgba(130, 78, 0, 0.5) 100%),
    url("/images/logo-image.jpg");
  text-align: center;
  padding: 3rem 8rem;
  background-size: cover, contain, cover;
  background-position: center;
  background-repeat: no-repeat;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 2rem 6rem;
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: 2rem 3rem;
  }
`;

const Headline = styled.h2`
  font-size: 5rem;
  margin-bottom: 1.5rem;
  color: #c89850;
  font-family: 'Playfair Display';
  font-weight: ${WEIGHTS.bold};

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 3.5rem;
  }
  @media ${QUERIES.phoneAndSmaller} {
    font-size: 2.3rem;
  }
`;

const SubHeadline = styled.h4`
  font-weight: ${WEIGHTS.normal};
  font-size: 2.8rem;
  text-align: center;
  @media ${QUERIES.tabletAndSmaller} {
    font-size: 1.5rem;
  }
  @media ${QUERIES.tabletAndSmaller} {
    font-size: 1.2rem;
  }
`;
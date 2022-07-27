import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

import {
  container,
  imagePrev,
  image,
  label as labelStyle,
  labelPrev as labelPrevStyle,
} from './style';

const SliderControl = ({ direction, label, ...props }) => {
  const {
    file: { childImageSharp },
  } = useStaticQuery(graphql`
    query {
      file(
        sourceInstanceName: { eq: "hands" }
        absolutePath: { regex: "/next.png$/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <button type="button" css={[container]} {...props}>
      <span css={[labelStyle, direction === 'prev' && labelPrevStyle]}>
        {label}
      </span>
      <Image
        {...childImageSharp}
        css={[image, direction === 'prev' && imagePrev]}
      />
    </button>
  );
};

export default SliderControl;

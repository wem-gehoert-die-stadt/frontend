import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

import fluid from '../../styles/fluid';
import { container } from './style';

const Hand = ({ type, width = 100, height = 100, ...props }) => {
  const {
    hands: { nodes: hands },
  } = useStaticQuery(graphql`
    query Hands {
      hands: allFile(filter: { sourceInstanceName: { eq: "hands" } }) {
        nodes {
          childImageSharp {
            fixed {
              originalName

              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `);

  const imageName = `${type}.png`;
  const scaleFactor = 1.2;

  const hand = hands.find(
    ({
      childImageSharp: {
        fixed: { originalName },
      },
    }) => originalName === imageName
  );

  if (!hand?.childImageSharp) {
    throw new Error(`Could not find image: ${imageName}`);
  }

  return (
    <div css={container} {...props}>
      <Image
        style={{
          width: fluid(width / 16, width / 16 + (width / 16) * scaleFactor),
          height: fluid(height / 16, height / 16 + (height / 16) * scaleFactor),
        }}
        {...hand.childImageSharp}
      />
    </div>
  );
};

export default Hand;

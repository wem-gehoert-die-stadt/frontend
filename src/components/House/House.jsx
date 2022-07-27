import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

import fluid from '../../styles/fluid';
import { container, imageContainer, flipHorizontally } from './style';

const House = ({
  type,
  attention = false,
  flipped = false,
  width = 100,
  height = 100,
  children,
  imageProps = {},
  ...props
}) => {
  const {
    houses: { nodes: houses },
  } = useStaticQuery(graphql`
    query Houses {
      houses: allFile(filter: { sourceInstanceName: { eq: "houses" } }) {
        nodes {
          childImageSharp {
            fixed(width: 600) {
              originalName

              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `);

  const imageName = `${type}${attention ? `-attention` : ''}.png`;
  const scaleFactor = 1.2;

  const house = houses.find(
    ({
      childImageSharp: {
        fixed: { originalName },
      },
    }) => originalName === imageName
  );

  if (!house?.childImageSharp) {
    throw new Error(`Could not find image: ${imageName}`);
  }

  return (
    <div css={container} {...props}>
      <Image
        css={[imageContainer, flipped && flipHorizontally]}
        style={{
          width: fluid(width / 16, width / 16 + (width / 16) * scaleFactor),
          height: fluid(height / 16, height / 16 + (height / 16) * scaleFactor),
        }}
        {...imageProps}
        {...house.childImageSharp}
      />

      {children}
    </div>
  );
};

export default House;

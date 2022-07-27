import { graphql, useStaticQuery } from 'gatsby';

import Image from 'gatsby-image';
import React from 'react';
import { container, imageContainer } from './style';
import fluid from '../../styles/fluid';

const Thumb = ({ type, width = 100, children, imageProps = {}, ...props }) => {
  const {
    thumbs: { nodes: thumbs },
  } = useStaticQuery(graphql`
    query Thumbs {
      thumbs: allFile(filter: { sourceInstanceName: { eq: "thumbs" } }) {
        nodes {
          childImageSharp {
            fixed(width: 600) {
              originalName
              height
              width
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `);

  const imageName = `${type}--yellow.png`;
  const scaleFactor = 1.2;

  const thumb = thumbs.find(
    ({
      childImageSharp: {
        fixed: { originalName },
      },
    }) => originalName === imageName
  );

  if (!thumb?.childImageSharp) {
    throw new Error(`Could not find image: ${imageName}`);
  }

  const {
    childImageSharp: {
      fixed: { height: originalHeight, width: originalWidth },
    },
  } = thumb;

  const ratio = originalHeight / originalWidth;
  return (
    <div css={container} {...props}>
      <Image
        css={[imageContainer]}
        style={{
          width: fluid(width / 16, width / 16 + (width / 16) * scaleFactor),
          height: fluid(
            (width * ratio) / 16,
            (width * ratio) / 16 + ((ratio * width) / 16) * scaleFactor
          ),
        }}
        {...imageProps}
        {...thumb.childImageSharp}
      />
      {children}
    </div>
  );
};

export default Thumb;

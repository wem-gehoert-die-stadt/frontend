import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

import { portrait, landscape } from './style';

const Icon = ({ rating, ...props }) => {
  const { up, down, side } = useStaticQuery(graphql`
    query {
      up: file(
        sourceInstanceName: { eq: "thumbs" }
        absolutePath: { regex: "/up.png$/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }

      down: file(
        sourceInstanceName: { eq: "thumbs" }
        absolutePath: { regex: "/down.png$/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }

      side: file(
        sourceInstanceName: { eq: "thumbs" }
        absolutePath: { regex: "/side.png$/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const ratingMap = {
    up,
    side,
    down,
  };

  if (rating === 'null') {
    return null;
  }

  return (
    <Image
      {...ratingMap[rating].childImageSharp}
      css={rating === 'side' ? landscape : portrait}
      {...props}
    />
  );
};

const RatingIcon = ({ rating = 0, ...props }) => {
  const intl = useIntl();

  let ratingKey = rating ? parseInt(rating, 10) : 0;

  if (ratingKey > 3) {
    ratingKey = 3;
  }

  const ratingMap = {
    1: {
      humanReadable: intl.formatMessage({ id: 'rating.1' }),
      imageComponent: <Icon rating="up" />,
    },

    2: {
      humanReadable: intl.formatMessage({ id: 'rating.2' }),
      imageComponent: <Icon rating="side" />,
    },

    3: {
      humanReadable: intl.formatMessage({ id: 'rating.3' }),
      imageComponent: <Icon rating="down" />,
    },

    0: {
      humanReadable: intl.formatMessage({ id: 'rating.unknown' }),
      imageComponent: <Icon rating="null" />,
    },
  };

  return (
    <span aria-label={ratingMap[ratingKey].humanReadable} {...props}>
      {ratingMap[ratingKey].imageComponent}
    </span>
  );
};

export default RatingIcon;

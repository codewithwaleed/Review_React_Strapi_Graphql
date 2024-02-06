import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const REVIEW = gql`
  query GetReview($id: ID!) {
    reviews(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          title
          body,
          rating
        }
      }
    }
  }
`;

export default function ReviewDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(REVIEW, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const review = data.reviews.data[0]
  console.log(review, 'review');

  return (
    <div className="review-card">
      <div className="rating">{review.attributes.rating}</div>
      <h2>{review.attributes.title}</h2>

      <small>console list</small>

      {/* <p>{data.review.body}</p> */}
    </div>
  );
}

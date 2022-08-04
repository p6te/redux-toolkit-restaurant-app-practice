import React from "react";

interface ReservationCardTypes {
  name: string;
}

function ReservationCard({ name }: ReservationCardTypes) {
  return <div className="reservation-card-container">{name}</div>;
}

export default ReservationCard;

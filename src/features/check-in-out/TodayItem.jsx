import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";
import { Link } from "react-router-dom";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}
      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
      <Guest>{guests.fullName}</Guest>
      <div>{numNights} nights</div>

      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check In
        </Button>
      )}

      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;

// cabinId: 58
// cabinPrice: 1750
// created_at: "2023-12-24T14:39:14.288+00:00"
// endDate: "2024-01-20T00:00:00"
// extrasPrice: 105
// guestId: 35
// guests: Object { fullName: "Jonathan Smith", nationality: "Great Britain", countryFlag: "https://flagcdn.com/gb.svg" }
// hasBreakfast: true
// id: 100
// isPaid: false
// numGuests: 1
// numNights: 7
// observations: "I have a gluten allergy and would like to request a gluten-free breakfast."
// startDate: "2024-01-13T00:00:00"
// status: "unconfirmed"
// totalPrice: 1855

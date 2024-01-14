import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckout } = useCheckout();
  return (
    <Button
      variation="primary"
      size="small"
      disabled={isCheckout}
      onClick={() => checkout(bookingId)}
    >
      Check Out
    </Button>
  );
}

export default CheckoutButton;

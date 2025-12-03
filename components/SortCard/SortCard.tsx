import { Modal } from "react-native";
import { Backdrop, ConfirmButton, ConfirmText, ModalCard, ModalTitle, OptionLabel, OptionRow, RadioOuter } from "./SortCard.styled";

export function SortCard() {

  return (
<Modal>
    <Backdrop>
        <ModalCard>
            <ModalTitle>Sort records by:</ModalTitle>
            <OptionRow>
                <RadioOuter />
                <OptionLabel>Upload date: latest</OptionLabel>
                <OptionLabel>Upload date: oldest</OptionLabel>
                <OptionLabel>Most popular</OptionLabel>
            </OptionRow>
            <ConfirmButton>
                <ConfirmText>Confirm</ConfirmText>
            </ConfirmButton>
        </ModalCard>
    </Backdrop>
</Modal>
  );
}
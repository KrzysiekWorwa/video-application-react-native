import { SortOption } from "@/services/api";
import React from "react";
import {
    Backdrop,
    ConfirmButton,
    ConfirmText,
    ModalCard,
    ModalTitle,
    OptionLabel,
    OptionRow,
    RadioInner,
    RadioOuter,
} from "./SortCard.styled";

type Props = {
    visible: boolean;
    selected: SortOption;
    onSelect: (value: SortOption) => void;
    onConfirm: () => void;
};

export function SortCard({ visible, selected, onSelect, onConfirm }: Props) {

    if (!visible) return null;

    const renderOption = (value: SortOption, label: string) => (
        <OptionRow onPress={() => onSelect(value)}>
            <RadioOuter>
                {selected === value && <RadioInner />}
            </RadioOuter>
            <OptionLabel>{label}</OptionLabel>
        </OptionRow>
    );

    return (
        <Backdrop>
            <ModalCard>
                <ModalTitle>Sort records by:</ModalTitle>

                {renderOption("latest", "Upload date: latest")}
                {renderOption("oldest", "Upload date: oldest")}
                {renderOption("popular", "Most popular")}

                <ConfirmButton onPress={onConfirm}>
                    <ConfirmText>Confirm</ConfirmText>
                </ConfirmButton>
            </ModalCard>
        </Backdrop>
    );
}

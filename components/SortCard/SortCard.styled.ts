import styled from "styled-components/native";

export const Backdrop = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalCard = styled.View`
  width: 80%;
  padding: 32px 24px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const ModalTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.lineHeight.s}px;
  margin-bottom: 24px;
`;

export const OptionRow = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const RadioOuter = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  margin-right: 24px;
`;

export const RadioInner = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const OptionLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  color: ${({ theme }) => theme.colors.textSecondary};
  letter-spacing: 0.14px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  margin-top: 128px;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const ConfirmText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  color: ${({ theme }) => theme.colors.textSecondary};
  letter-spacing: 0.14px;
`;

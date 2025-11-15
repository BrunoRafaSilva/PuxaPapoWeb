import type { TFunction } from "i18next";

export const SNACK_BAR_MESSAGES = (t: TFunction) => {
  return {
    PLEASE_SELECT_INTEREST: t("errorMessages.selectInterest"),
    PLEASE_SELECT_TONE: t("errorMessages.selectTone"),
    API_ERROR: t("errorMessages.apiError"),
    MESSAGE_SUCCESS: t("errorMessages.success"),
  };
};

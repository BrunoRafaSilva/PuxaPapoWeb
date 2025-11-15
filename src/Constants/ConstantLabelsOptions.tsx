import { type TFunction } from "i18next";

export const INTEREST_OPTIONS = (t: TFunction) => [
  { value: "1", label: t("form.interests.option1"), emoji: "⚽" },
  { value: "2", label: t("form.interests.option2"), emoji: "🍖" },
  { value: "3", label: t("form.interests.option3"), emoji: "🍺" },
  { value: "4", label: t("form.interests.option4"), emoji: "🏖️" },
  { value: "5", label: t("form.interests.option5"), emoji: "🎬" },
  { value: "6", label: t("form.interests.option6"), emoji: "🎵" },
  { value: "7", label: t("form.interests.option7"), emoji: "🎮" },
  { value: "8", label: t("form.interests.option8"), emoji: "☕" },
];

export const PERIOD_OPTIONS = (t: TFunction) => [
  { value: "1", label: t("form.period.option1") },
  { value: "2", label: t("form.period.option2") },
  { value: "3", label: t("form.period.option3") },
  { value: "4", label: t("form.period.option4") },
  { value: "5", label: t("form.period.option5") },
];

export const TONE_OPTIONS = (t: TFunction) => [
  { value: "1", label: t("form.tone.option1") },
  { value: "2", label: t("form.tone.option2") },
  { value: "3", label: t("form.tone.option3") },
  {
    value: "4",
    label: t("form.tone.option4"),
    tooltip: t("form.tone.option4Tooltip"),
  },
];

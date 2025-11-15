import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ChipSelect } from "../Components/ChipSelect";
import { Header } from "../Components/Header";
import { LabelOption } from "../Components/LabelOption";
import { ApiStatus } from "../Components/ApiStatus";
import Card from "@mui/material/Card";
import { Alert, Button, Modal, Snackbar, Typography } from "@mui/material";
import { ApiConnection } from "../Services/ApiConnectionService";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "flag-icons/css/flag-icons.min.css";
import { LANGUAGE_OPTIONS } from "../Constants/ConstantLanguageOptions";

function Index() {
  const { t, i18n } = useTranslation();

  const interestOptions = [
    { value: "1", label: t("form.interests.option1"), emoji: "⚽" },
    { value: "2", label: t("form.interests.option2"), emoji: "🍖" },
    { value: "3", label: t("form.interests.option3"), emoji: "🍺" },
    { value: "4", label: t("form.interests.option4"), emoji: "🏖️" },
    { value: "5", label: t("form.interests.option5"), emoji: "🎬" },
    { value: "6", label: t("form.interests.option6"), emoji: "🎵" },
    { value: "7", label: t("form.interests.option7"), emoji: "🎮" },
    { value: "8", label: t("form.interests.option8"), emoji: "☕" },
  ];
  const periodOptions = [
    { value: "1", label: t("form.period.option1") },
    { value: "2", label: t("form.period.option2") },
    { value: "3", label: t("form.period.option3") },
    { value: "4", label: t("form.period.option4") },
    { value: "5", label: t("form.period.option5") },
  ];
  const toneOptions = [
    { value: "1", label: t("form.tone.option1") },
    { value: "2", label: t("form.tone.option2") },
    { value: "3", label: t("form.tone.option3") },
    {
      value: "4",
      label: t("form.tone.option4"),
      tooltip: t("form.tone.option4ToolTip"),
    },
  ];
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState<string[]>([
    "qualquer dia da semana",
  ]);
  const [selectedTone, setSelectedTone] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [apiResult, setApiResult] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    "success" | "error" | "warning" | "info"
  >("success");
  const [apiStatus, setApiStatus] = useState<"online" | "offline" | "checking">(
    "checking"
  );
  const [selectedLanguage, setSelectedLanguage] = useState<string>("pt-BR");
  const healthCheckIntervalRef = useRef<number>(30000);

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);
  const timeoutIdRef = useRef<number | null>(null);

  const checkApiHealth = async () => {
    try {
      const isOnline = await ApiConnection.checkHealth();
      setApiStatus(isOnline ? "online" : "offline");
    } catch {
      setApiStatus("offline");
    }
  };

  useEffect(() => {
    const scheduleNextCheck = () => {
      checkApiHealth();

      timeoutIdRef.current = setTimeout(() => {
        healthCheckIntervalRef.current += 60000;
        scheduleNextCheck();
      }, healthCheckIntervalRef.current);
    };

    scheduleNextCheck();

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const handleInterestSelect = (value: string) => {
    setSelectedInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handlePeriodSelect = (value: string) => {
    setSelectedPeriod([value]);
  };

  const handleToneSelect = (value: string) => {
    setSelectedTone([value]);
  };

  const handleClose = () => {
    setSnackbarOpen(false);
  };

  const showSnackbar = (
    message: string,
    severity: "success" | "error" | "warning" | "info" = "info"
  ) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedInterests.length === 0) {
      showSnackbar(t("messages.selectInterest"), "warning");
      return;
    }

    if (selectedTone.length === 0) {
      showSnackbar(t("messages.selectTone"), "warning");
      return;
    }

    setLoading(true);

    try {
      const apiData = {
        interest: selectedInterests,
        period: selectedPeriod[0] || "",
        tone: selectedTone[0] || "",
      };

      const result = await ApiConnection.generatePrompt(apiData);

      setApiResult(result);
      setShowModal(true);
      setApiStatus("online");
      healthCheckIntervalRef.current = 30000;
      showSnackbar(t("messages.success"), "success");
    } catch (error) {
      setApiStatus("offline");
      showSnackbar(t("messages.apiError"), "error");
      console.error("Erro:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header
        headerTitle={t("header.title")}
        headerSubtitle1={t("header.subtitle1")}
        headerSubtitle2={t("header.subtitle2")}
      />
      <main className="flex-1 flex justify-center bg-gray-100">
        <div className="w-[90%] max-w-[80%]">
          <div>
            <Card className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="flex justify-end items-center gap-2 mb-2">
                  {LANGUAGE_OPTIONS.map((lang) => (
                    <img
                      key={lang.code}
                      src={lang.flag}
                      alt={lang.alt}
                      title={lang.alt}
                      onClick={() => setSelectedLanguage(lang.code)}
                      className={`w-8 h-6 object-cover cursor-pointer rounded transition-all ${
                        selectedLanguage === lang.code
                          ? "ring-2 ring-blue-500 opacity-100"
                          : "opacity-50 hover:opacity-100"
                      }`}
                    />
                  ))}
                </div>
                <div className="p-4 -mt-6">
                  <LabelOption title={t("form.interests.title")} />
                </div>
                <div className="p-2">
                  <ChipSelect
                    options={interestOptions}
                    selected={selectedInterests}
                    onSelect={handleInterestSelect}
                  />
                </div>
                <div className="p-4">
                  <LabelOption title={t("form.period.title")} />
                </div>
                <div className="p-2">
                  <ChipSelect
                    options={periodOptions}
                    selected={selectedPeriod}
                    onSelect={handlePeriodSelect}
                  />
                </div>
                <div className="p-4">
                  <LabelOption title={t("form.tone.title")} />
                </div>
                <div className="p-2">
                  <ChipSelect
                    options={toneOptions}
                    selected={selectedTone}
                    onSelect={handleToneSelect}
                  />
                </div>
                <div className="pt-6 p-2 flex justify-center">
                  <Button
                    variant="contained"
                    color="primary"
                    className="mt-4"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? t("form.generating.title") : t("form.generateButton.title")}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </main>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg max-w-2xl max-h-[80vh] overflow-y-auto">
          <Typography variant="h6" className="mb-4">
            {t("modal.title")}
          </Typography>
          <div className="mb-4 whitespace-pre-line bg-gray-50 p-4 rounded border">
            <Typography style={{ whiteSpace: "pre-line" }}>
              {/* {apiResult} */}
              <Markdown remarkPlugins={[remarkGfm]}>{apiResult}</Markdown>
            </Typography>
          </div>
          <Button onClick={() => setShowModal(false)} variant="contained">
            {t("modal.closeButton")}
          </Button>
        </div>
      </Modal>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <ApiStatus status={apiStatus} />
    </div>
  );
}

export { Index };

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ChipSelect } from "../Components/ChipSelect";
import { Header } from "../Components/Header";
import { LabelOption } from "../Components/LabelOption";
import { ApiStatus } from "../Components/ApiStatus";
import { Footer } from "../Components/Footer";
import Card from "@mui/material/Card";
import { Alert, Box, Button, Modal, Snackbar, Typography } from "@mui/material";
import { ApiConnection } from "../Services/ApiConnectionService";
import MarkdownPreview from "@uiw/react-markdown-preview";
import "flag-icons/css/flag-icons.min.css";
import { LANGUAGE_OPTIONS } from "../Constants/ConstantLanguageOptions";
import {
  INTEREST_OPTIONS,
  PERIOD_OPTIONS,
  TONE_OPTIONS,
} from "../Constants/ConstantLabelsOptions";
import { SNACK_BAR_MESSAGES } from "../Constants/ConstantValidationErrors";

function Index() {
  const { t, i18n } = useTranslation();

  const interestOptions = INTEREST_OPTIONS(t);
  const periodOptions = PERIOD_OPTIONS(t);
  const toneOptions = TONE_OPTIONS(t);
  const snackbarMessages = SNACK_BAR_MESSAGES(t);

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

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 800,
    maxHeight: "80vh",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    overflow: "auto",
  } as const;

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
      showSnackbar(snackbarMessages.PLEASE_SELECT_INTEREST, "warning");
      return;
    }

    if (selectedTone.length === 0) {
      showSnackbar(snackbarMessages.PLEASE_SELECT_TONE, "warning");
      return;
    }

    setLoading(true);

    try {
      const apiData = {
        interest: selectedInterests,
        period: selectedPeriod[0] || "",
        tone: selectedTone[0] || "",
        language: selectedLanguage,
      };

      const result = await ApiConnection.generatePrompt(apiData);

      setApiResult(result);
      setShowModal(true);
      setApiStatus("online");
      healthCheckIntervalRef.current = 30000;
      showSnackbar(snackbarMessages.MESSAGE_SUCCESS, "success");
    } catch (error) {
      setApiStatus("offline");
      showSnackbar(snackbarMessages.API_ERROR, "error");
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
                    fullWidth
                  >
                    {loading
                      ? t("form.generating.title")
                      : t("form.generateButton.title")}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </main>

      <Footer />

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 2 }}
          >
            {t("modal.title")}
          </Typography>
          <Box sx={{ mb: 3 }}>
            <MarkdownPreview
              source={apiResult}
              style={{
                padding: 0,
                backgroundColor: "white",
                color: "black",
              }}
            />
          </Box>
          <Button
            fullWidth
            onClick={() => setShowModal(false)}
            variant="contained"
          >
            {t("modal.closeButton")}
          </Button>
        </Box>
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

import { useState, useEffect, useRef } from "react";
import { ChipSelect } from "../Components/ChipSelect";
import { Header } from "../Components/Header";
import { LabelOption } from "../Components/LabelOption";
import { ApiStatus } from "../Components/ApiStatus";
import Card from "@mui/material/Card";
import { Alert, Button, Modal, Snackbar, Typography } from "@mui/material";
import { ApiConnection } from "../Services/ApiConnectionService";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const interestOptions = [
  { value: "futebol", label: "Futebol", emoji: "⚽" },
  { value: "churrasco", label: "Churrasco", emoji: "🍖" },
  { value: "cerveja", label: "Cerveja", emoji: "🍺" },
  { value: "praia", label: "Praia", emoji: "🏖️" },
  { value: "cinema", label: "Cinema", emoji: "🎬" },
  { value: "música", label: "Música", emoji: "🎵" },
  { value: "jogos", label: "Jogos", emoji: "🎮" },
  { value: "café", label: "Café", emoji: "☕" },
];

const periodOptions = [
  { value: "qualquer dia da semana", label: "Qualquer dia da semana" },
  { value: "segunda a sexta", label: "Segunda a Sexta" },
  { value: "fim de semana", label: "Fim de Semana" },
  { value: "a noite", label: "À Noite" },
  { value: "na folga dele", label: "Na Folga Dele" },
];

const toneOptions = [
  { value: "engraçado e descontraído", label: "Engraçado e Descontraído" },
  { value: "engraçado", label: "Engraçado" },
  { value: "formal", label: "Formal" },
  {
    value: "anuncio de radio",
    label: "Anúncio de Rádio",
    tooltip:
      "Dê um toque de humor e peça como se fosse a chamada de rádio para um evento",
  },
];

function Index() {
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
  const healthCheckIntervalRef = useRef<number>(30000);
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
      showSnackbar("Por favor, selecione pelo menos um interesse!", "warning");
      return;
    }

    if (selectedTone.length === 0) {
      showSnackbar("Por favor, selecione um tom para a mensagem!", "warning");
      return;
    }

    setLoading(true);

    try {
      const apiData = {
        interest: selectedInterests,
        period: selectedPeriod[0] || "",
        tone: selectedTone[0] || "",
      };

      console.log("Dados enviados para API:", apiData);

      const result = await ApiConnection.generatePrompt(apiData);

      console.log("Resposta da API:", result);
      setApiResult(result);
      setShowModal(true);
      setApiStatus("online");
      healthCheckIntervalRef.current = 30000;
      showSnackbar("Mensagem gerada com sucesso!", "success");
    } catch (error) {
      setApiStatus("offline");
      showSnackbar("Erro ao gerar mensagem. Tente novamente.", "error");
      console.error("Erro:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header headerTitle="PuxaPapo" headerSubtitle="Welcome to PuxaPapo" />
      <main className="flex-1 flex justify-center bg-gray-100">
        <div className="w-[90%] max-w-[80%]">
          <div>
            <Card className="p-4">
              <form onSubmit={handleSubmit}>
                <Typography className="p-4">
                  <LabelOption title="Interesses" />
                </Typography>
                <Typography className="p-2">
                  <ChipSelect
                    options={interestOptions}
                    selected={selectedInterests}
                    onSelect={handleInterestSelect}
                  />
                </Typography>
                <Typography className="p-4">
                  <LabelOption title="Horário" />
                </Typography>
                <Typography className="p-2">
                  <ChipSelect
                    options={periodOptions}
                    selected={selectedPeriod}
                    onSelect={handlePeriodSelect}
                  />
                </Typography>
                <Typography className="p-4">
                  <LabelOption title="Tom da mensagem" />
                </Typography>
                <Typography className="p-2">
                  <ChipSelect
                    options={toneOptions}
                    selected={selectedTone}
                    onSelect={handleToneSelect}
                  />
                </Typography>
                <Typography className="pt-6 p-2 flex justify-center">
                  <Button
                    variant="contained"
                    color="primary"
                    className="mt-4"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Gerando..." : "Gerar Mensagem"}
                  </Button>
                </Typography>
              </form>
            </Card>
          </div>
        </div>
      </main>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg max-w-2xl max-h-[80vh] overflow-y-auto">
          <Typography variant="h6" className="mb-4">
            Mensagem Gerada
          </Typography>
          <div className="mb-4 whitespace-pre-line bg-gray-50 p-4 rounded border">
            <Typography style={{ whiteSpace: "pre-line" }}>
              {/* {apiResult} */}
              <Markdown remarkPlugins={[remarkGfm]}>{apiResult}</Markdown>
            </Typography>
          </div>
          <Button onClick={() => setShowModal(false)} variant="contained">
            Fechar
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

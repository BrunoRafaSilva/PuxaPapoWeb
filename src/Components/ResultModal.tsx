import { Box, Button, Modal, Typography } from "@mui/material";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useTranslation } from "react-i18next";

interface ResultModalProps {
  open: boolean;
  onClose: () => void;
  content: string;
}

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

function ResultModal({ open, onClose, content }: ResultModalProps) {
  const { t } = useTranslation();

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
          {t("modal.title")}
        </Typography>
        <Box id="modal-description" sx={{ mb: 3 }}>
          <MarkdownPreview
            source={content}
            style={{
              padding: 0,
              backgroundColor: "white",
              color: "black",
            }}
          />
        </Box>
        <Button onClick={onClose} variant="contained">
          {t("modal.closeButton")}
        </Button>
      </Box>
    </Modal>
  );
}

export { ResultModal };

import { Avatar, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

interface SoundboardWidgetProps {
  sound: SoundboardData;
}

export default function SoundboardWidget({ sound }: SoundboardWidgetProps) {
  const [loading, setLoading] = useState(true);
  const [imageBase64, setImageBase64] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    window.electron.ipcRenderer
      .invoke("imageToBase64", sound.id, sound.imagePath)
      .then((response: string | null) => {
        setImageBase64(response);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Avatar src={imageBase64 || ""} alt={sound.id} />
    </div>
  );
}

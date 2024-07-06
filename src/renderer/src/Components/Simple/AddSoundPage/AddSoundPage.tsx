import { Button, Card, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import SoundAvatar from "./SoundAvatar";
import UploadIcon from "@mui/icons-material/Upload";

interface AddSoundPageProps {
  audioFile: File;
}

export default function AddSoundPage({ audioFile }: AddSoundPageProps) {
  const [image, setImage] = useState<NewSoundSample["image"]>(null);
  const [audioName, setAudioName] = useState<string>(audioFile.name);

  const saveAudioToSoundboard = async () => {
    const audioMetaData: NewSoundSample = {
      audioPath: audioFile.path,
      image,
      name: audioName,
      creationDate: new Date(),
    };

    window.electron.ipcRenderer.invoke("addAudioToSoundboard", audioMetaData);
  };

  return (
    <Card
      onClick={(e) => e.stopPropagation()}
      component={Paper}
      sx={{
        width: "50vw",
        height: "50vh",
        borderRadius: "10px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Typography textAlign="center" variant="h6" component="div">
        Adding New Sound
      </Typography>

      <SoundAvatar image={image} setImage={setImage} size="5rem" />

      <TextField
        label="Sound Name"
        value={audioName}
        onChange={(e) => setAudioName(e.target.value)}
      />

      <Button
        onClick={saveAudioToSoundboard}
        startIcon={<UploadIcon />}
        variant="contained"
      >
        Save To Soundboard
      </Button>
    </Card>
  );
}

import { Card, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import SoundAvatar from "./SoundAvatar";

interface AddSoundPageProps {
  audioFile: File;
}

export default function AddSoundPage({ audioFile }: AddSoundPageProps) {
  const [image, setImage] = useState<null | SoundboardImageData>(null);
  const [soundName, setSoundName] = useState<string>(audioFile.name);

  return (
    <Card
      onClick={(e) => e.stopPropagation()}
      component={Paper}
      sx={{ width: "50vw", height: "50vh", borderRadius: "10px" }}
    >
      <Typography textAlign="center" variant="h6" component="div">
        Adding New Sound
      </Typography>

      <SoundAvatar image={image} setImage={setImage} />

      <TextField
        label="Sound Name"
        value={soundName}
        onChange={(e) => setSoundName(e.target.value)}
      />
    </Card>
  );
}

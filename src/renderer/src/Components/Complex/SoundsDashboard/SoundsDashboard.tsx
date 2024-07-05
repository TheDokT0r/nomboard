import { Backdrop } from "@mui/material";
import AddSoundButton from "@renderer/Components/Simple/AddSoundButton/AddSoundButton";
import AddSoundPage from "@renderer/Components/Simple/AddSoundPage/AddSoundPage";
import { useState } from "react";

export default function SoundsDashboard() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const selectSoundCancel = () => {
    setSelectedFile(null);
  };

  return (
    <div>
      <AddSoundButton setSelectedFile={setSelectedFile} />

      <Backdrop onClick={selectSoundCancel} open={selectedFile !== null}>
        {selectedFile && <AddSoundPage audioFile={selectedFile} />}
      </Backdrop>
    </div>
  );
}

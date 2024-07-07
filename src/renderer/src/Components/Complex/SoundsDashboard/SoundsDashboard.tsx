import { Backdrop } from "@mui/material";
import AddSoundButton from "@renderer/Components/Simple/AddSoundButton/AddSoundButton";
import AddSoundPage from "@renderer/Components/Simple/AddSoundPage/AddSoundPage";
import SoundboardWidget from "@renderer/Components/Simple/SoundboardWidget/SoundboardWidget";
import { useEffect, useState } from "react";

export default function SoundsDashboard() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [soundboard, setSoundboard] = useState<SoundboardData[]>([]);

  const selectSoundCancel = () => {
    setSelectedFile(null);
  };

  useEffect(() => {
    window.electron.ipcRenderer
      .invoke("getSoundboard")
      .then((response: SoundboardData[]) => setSoundboard(response));
  }, []);

  return (
    <div>
      <AddSoundButton setSelectedFile={setSelectedFile} />

      {soundboard.map((sound) => (
        <SoundboardWidget key={sound.id} sound={sound} />
      ))}

      <Backdrop onClick={selectSoundCancel} open={selectedFile !== null}>
        {selectedFile && <AddSoundPage audioFile={selectedFile} />}
      </Backdrop>
    </div>
  );
}

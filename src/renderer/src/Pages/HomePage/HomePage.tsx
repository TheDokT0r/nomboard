import SoundsDashboard from "@renderer/Components/Complex/SoundsDashboard/SoundsDashboard";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.electron.ipcRenderer
      .invoke("getSoundboard")
      .then((response) => console.log(response));
  }, []);

  return (
    <div>
      <SoundsDashboard />
    </div>
  );
}

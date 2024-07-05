import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import { useEffect, useRef } from "react";

interface AddSoundButtonProps {
  setSelectedFile: (newState: File | null) => void;
}

export default function AddSoundButton({
  setSelectedFile,
}: AddSoundButtonProps) {
  const uploadRef = useRef<HTMLInputElement>(null);

  const onAddBtnClick = () => {
    if (uploadRef.current) {
      uploadRef.current.click();
    }
  };

  const onFileSelected = () => {
    if (!uploadRef.current) return;
    const { files } = uploadRef.current;

    if (files && files.length !== 0) {
      setSelectedFile(files[0]);
    }
  };

  useEffect(() => {
    if (!uploadRef.current) return;

    uploadRef.current.addEventListener("change", onFileSelected);

    return () => {
      if (!uploadRef.current) return;

      uploadRef.current.removeEventListener("change", onFileSelected);
    };
  }, []);

  return (
    <>
      <IconButton onClick={onAddBtnClick}>
        <AddIcon />
      </IconButton>

      <input
        hidden
        ref={uploadRef}
        type="file"
        accept="audio/mp3, audio/wave"
      />
    </>
  );
}

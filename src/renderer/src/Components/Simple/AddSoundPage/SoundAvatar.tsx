import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useRef } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { toast } from "react-toastify";

interface SoundAvatarProps {
  image: SoundboardImageData | null;
  setImage: (newState: SoundboardImageData | null) => void;
}

export default function SoundAvatar({ image, setImage }: SoundAvatarProps) {
  const imageUploadRef = useRef<HTMLInputElement>(null);

  const addImageBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();

    if (imageUploadRef.current) {
      imageUploadRef.current.click();
    }
  };

  const selectNewImage = async () => {
    if (!imageUploadRef.current) return;

    const { files } = imageUploadRef.current;

    if (files && files.length !== 0) {
      const imageData: SoundboardImageData | null =
        await window.electron.ipcRenderer.invoke("getImageData", files[0].path);

      if (!imageData) {
        toast.error(
          "Something went wrong while parsing image. Please try again.",
        );
        return;
      }

      setImage(imageData);
    }
  };

  useEffect(() => {
    if (!imageUploadRef.current) return;

    imageUploadRef.current.addEventListener("change", selectNewImage);

    return () => {
      if (!imageUploadRef.current) return;
      imageUploadRef.current.removeEventListener("change", selectNewImage);
    };
  }, []);

  return (
    <>
      <IconButton onClick={addImageBtnClick}>
        {image ? (
          <Avatar src={image.base64} />
        ) : (
          <Avatar>
            <CameraAltIcon />
          </Avatar>
        )}
      </IconButton>

      <input
        ref={imageUploadRef}
        type="file"
        accept="image/png, image/webp, image/jpeg"
        hidden
      />
    </>
  );
}

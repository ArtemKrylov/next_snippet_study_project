import Swal from "sweetalert2";

type SwalCustom = {
  confirm: (
    onConfirm: (() => void) | (() => Promise<void>),
    options?: { text?: string }
  ) => void;
  info: (
    text?: string,
    options?: {
      onInfoConfirm?: () => void;
      title?: string;
      noTitle?: boolean;
      confirmButtonText?: string;
      showCancelButton?: boolean;
    }
  ) => void;
  unsavedData: (
    confirmFunc: () => void,
    options?: {
      cancelFunc?: () => void;
      text?: string;
      title?: string;
    }
  ) => void;
};

export const swalCustom: SwalCustom = {
  confirm: (onConfirm, { text = "" } = {}) => {
    Swal.fire({
      title: "",
      text: text || `${"Are you sure?"}`,
      icon: "question",
      confirmButtonText: "Yes",
      showCancelButton: true,
      cancelButtonText: "No",
    }).then(async (answ) => {
      if (answ.isConfirmed) {
        await onConfirm();
      }
    });
  },

  info: (
    text = "",
    {
      onInfoConfirm = () => {},
      title = "",
      noTitle = true,
      confirmButtonText = "Yes",
      showCancelButton = true,
    } = {}
  ) => {
    Swal.fire({
      title: !noTitle ? title || "Information" : "",
      text: text,
      icon: "info",
      confirmButtonText: confirmButtonText,
      showCancelButton,
      cancelButtonText: "No",
      allowEscapeKey: true,
      allowOutsideClick: true,
    }).then((answ) => {
      if (answ.isConfirmed) {
        onInfoConfirm();
      }
    });
  },

  unsavedData: (
    confirmFunc = () => {},
    { text = "", title = "", cancelFunc = () => {} } = {}
  ) => {
    Swal.fire({
      title: title || "You have unsaved issues. Close anyway?",
      text: text,
      icon: "warning",
      confirmButtonText: "Yes",
      showCancelButton: true,
      cancelButtonText: "No",
    }).then((answ) => {
      if (answ.isConfirmed) {
        confirmFunc();
      } else cancelFunc();
    });
  },
};

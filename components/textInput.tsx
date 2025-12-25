"use client";

interface TextInputProps {
  label: string;
  disabled?: boolean;
  width?: string;
  className?: string;
  textArea?: boolean;
}

const TextInput = ({
  label,
  disabled = false,
  width,
  className = "",
  textArea = false,
}: TextInputProps) => {
  return (
    <label className={`flex gap-1 ${className}`}>
      <span>{label}:</span>
      {textArea ? (
        <textarea
          disabled={disabled}
          style={{ width }}
        />
      ) : (
        <input
          type="text"
          disabled={disabled}
          style={{ width }}
        />
      )}
    </label>
  );
};

export default TextInput;

"use client";

interface TextInputProps {
  name: string;
  label: string;
  disabled?: boolean;
  width?: string;
  className?: string;
  textArea?: boolean;
  grow?: boolean;
}

const TextInput = ({
  name,
  label,
  disabled = false,
  width = "10rem",
  className = "",
  textArea = false,
  grow = false,
}: TextInputProps) => {
  const inputClassName = `border border-blue-900 hover:border-blue-500 ${
    grow && "grow"
  }`;

  return (
    <label
      className={`flex gap-1 ${className} ${
        grow && "grow self-stretch w-full justify-between"
      }`}
    >
      <span>{label}:</span>
      {textArea ? (
        <textarea
          id={name}
          name={name}
          disabled={disabled}
          style={{ width }}
          className={inputClassName}
        />
      ) : (
        <input
          id={name}
          name={name}
          type="text"
          disabled={disabled}
          style={{ width }}
          className={inputClassName}
        />
      )}
    </label>
  );
};

export default TextInput;

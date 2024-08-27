interface ButtonProps {
  label: string;
  iconURL?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
}
export default function Button({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}: ButtonProps) {
  return (
    <button
      className={`flex justify-center items-center gap-2 
    px-7 py-4 border font-montserrat text-lg leading-none
     ${
       backgroundColor
         ? `${backgroundColor}  ${textColor} ${borderColor}`
         : 'bg-coral-red text-white border-coral-red'
     } rounded-full ${fullWidth && 'w-full'}"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
}

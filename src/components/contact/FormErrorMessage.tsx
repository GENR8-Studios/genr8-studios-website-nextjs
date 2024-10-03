const FormErrorMessage = ({ children }: any) => {
  return (
    <span className="mt-4">
      <p className="bg-white h-7 text-left max-lg:text-base text-xl px-1 pl-4 rounded-lg font-bold text-red-600 empty:invisible">
        {children}
      </p>
    </span>
  );
};

export default FormErrorMessage;

const IlustrasiGambar = ({ src, alt }) => {
  return (
    <img
      alt={alt}
      className="rounded-lg shadow-md mb-4 w-full max-w-md mx-auto"
      src={src}
    />
  );
};

export default IlustrasiGambar;

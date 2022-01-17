const Mensaje = function ({ children }) {
  return (
    <div className="bg-red-600 text-white text-center p-3 uppercase mb-3 rounded-xl font-bold">
      {children}
    </div>
  );
};

export default Mensaje;
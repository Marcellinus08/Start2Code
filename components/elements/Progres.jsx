const Progres = (props) => {
    const{children} = props;
    return(
        <div className="bg-gray-50 p-4 rounded-lg shadow">
                  <h5 className="font-semibold text-gray-700 mb-3">Progres Belajar</h5>
                  <div className="flex justify-center">
                      <div className="w-32 h-32 relative">
                          <svg className="w-full h-full" viewBox="0 0 36 36">
                              <path className="text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3.8"></path>
                              <path className="text-blue-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="70, 100" strokeLinecap="round" strokeWidth="3.8"></path>
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <span className="text-2xl font-bold text-blue-600">{children}</span>
                              <span className="text-xs text-gray-500">Selesai</span>
                          </div>
                      </div>
                  </div>
              </div>
    );
};

export default Progres;
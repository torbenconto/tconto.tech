import "../styles/Loading.css"

function Loading() {
  return (
      <div className="fixed inset-0 flex items-center justify-center bg-powdered-blue">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
      </div>
  );
}

export default Loading;
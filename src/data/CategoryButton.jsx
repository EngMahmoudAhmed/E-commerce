function CategoryButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition
        ${
          active
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-300"
        }
      `}
    >
      {label}
    </button>
  );
}

export default CategoryButton;
const Loader = () => {
  return (
    <div
      className="w-12 h-12 rounded-full animate-spin"
      style={{
        background:
          "radial-gradient(farthest-side,#ffa516 94%,transparent) top/8px 8px no-repeat, conic-gradient(transparent 30%,#ffa516)",
        WebkitMask:
          "radial-gradient(farthest-side,transparent calc(100% - 8px),#000 0)",
      }}
    />
  );
};

export default Loader;

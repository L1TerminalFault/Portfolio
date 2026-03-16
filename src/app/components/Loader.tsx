export default function Loader() {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className="absolute inset-0 rounded-full -translate-3.5 p-1 size-10 animate-spin bg-linear-to-r from-transparent via-transparent to-purple-400/50"
        style={{
          maskImage:
            "radial-gradient(circle 15px at center, transparent 100%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(circle 15px at center, transparent 100%, black 100%)",
        }}
      ></div>
    </div>
  );
}

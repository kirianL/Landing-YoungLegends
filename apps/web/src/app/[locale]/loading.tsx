export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[100]">
      <div className="h-full bg-white animate-progress origin-left" />
    </div>
  );
}

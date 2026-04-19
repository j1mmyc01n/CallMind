export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-[5px] border border-[#2a3a52] bg-[#161d2a] px-2 py-0.5 font-mono-data text-[10px] font-bold">
      {children}
    </span>
  )
}

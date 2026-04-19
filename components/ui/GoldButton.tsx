export function GoldButton({ children, type = 'button' }: { children: React.ReactNode; type?: 'button' | 'submit' }) {
  return <button type={type} className="rounded-lg border border-[#c9a84c44] bg-[#c9a84c18] px-3 py-1.5 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black">{children}</button>
}

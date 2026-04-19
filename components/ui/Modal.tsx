export function Modal({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#111520] border border-[#1c2535] rounded-[14px] p-5">
      <h3 className="font-heading mb-2">{title}</h3>
      {children}
    </div>
  )
}

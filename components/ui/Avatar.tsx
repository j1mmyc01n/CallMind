export function Avatar({ initials = 'CM' }: { initials?: string }) {
  return <div className="h-8 w-8 rounded-full bg-[#2a3a52] flex items-center justify-center text-xs">{initials}</div>
}

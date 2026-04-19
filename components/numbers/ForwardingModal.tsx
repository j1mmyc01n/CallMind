export function ForwardingModal() {
  return (
    <div className="space-y-2 font-mono-data text-xs">
      <p>iPhone: Settings → Phone → Call Forwarding → ON → [twilio_number]</p>
      <p>Android: Phone → ⋮ → Settings → Call Forwarding → [twilio_number]</p>
      <p>USSD: Dial *21*[twilio_number_digits]# (works on any carrier)</p>
    </div>
  )
}

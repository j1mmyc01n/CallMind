const voices = ['aria', 'alloy', 'verse', 'echo', 'nova', 'shimmer']

export function VoiceSelector() {
  return (
    <div className="bg-[#111520] border border-[#1c2535] rounded-[14px] p-5">
      <h3 className="font-heading">Voice Selector</h3>
      <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-3">
        {voices.map((voice) => (
          <button key={voice} className="rounded border border-[#1c2535] px-2 py-1 text-xs">
            {voice}
          </button>
        ))}
      </div>
    </div>
  )
}

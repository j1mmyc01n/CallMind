export function buildDialTwiml(targetNumber: string) {
  return `<?xml version="1.0" encoding="UTF-8"?><Response><Dial><Number>${targetNumber}</Number></Dial></Response>`
}

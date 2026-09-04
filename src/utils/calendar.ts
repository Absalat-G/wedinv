import { WEDDING_CONFIG } from '../data/weddingData';

export function createGoogleCalendarUrl(): string {
  const title = encodeURIComponent(`The Holy Crowning & Wedding of ${WEDDING_CONFIG.couple.bride} & ${WEDDING_CONFIG.couple.groom}`);
  const details = encodeURIComponent(
    `Join us in celebrating the holy matrimony and royal reception of ${WEDDING_CONFIG.couple.bride} & ${WEDDING_CONFIG.couple.groom}.\nChurch: ${WEDDING_CONFIG.churchVenue.name}\nReception: ${WEDDING_CONFIG.venue.name}\nDress Code: Habesha Traditional / Black Tie Formal.\nFor details visit the digital invitation.`
  );
  const location = encodeURIComponent(`${WEDDING_CONFIG.churchVenue.fullAddress} & ${WEDDING_CONFIG.venue.fullAddress}`);
  // 2026-09-13 14:30:00 to 2026-09-14 01:00:00 UTC (or local)
  const start = "20260913T143000";
  const end = "20260914T013000";

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
}

export function createMelseGoogleCalendarUrl(): string {
  const title = encodeURIComponent(`Traditional Melse of ${WEDDING_CONFIG.couple.bride} & ${WEDDING_CONFIG.couple.groom}`);
  const details = encodeURIComponent(
    `Traditional Ethiopian Melse celebration with royal Kaba attire, bread cutting (Dabo Qoresa), Tej, and dancing!\nVenue: ${WEDDING_CONFIG.melsVenue.name}\nDate: ${WEDDING_CONFIG.melsVenue.date}`
  );
  const location = encodeURIComponent(WEDDING_CONFIG.melsVenue.fullAddress);
  const start = "20260920T150000";
  const end = "20260921T000000";

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
}

export function downloadIcsFile(): void {
  const icsData = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:-//${WEDDING_CONFIG.couple.bride} & ${WEDDING_CONFIG.couple.groom} Wedding//EN`,
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:wedding-absalat-yehasab-20260913@weddinginvite.com",
    "DTSTAMP:20260826T000000Z",
    "DTSTART:20260913T143000",
    "DTEND:20260914T013000",
    `SUMMARY:The Holy Crowning & Wedding of ${WEDDING_CONFIG.couple.bride} & ${WEDDING_CONFIG.couple.groom}`,
    `DESCRIPTION:The Holy Crowning and Reception of ${WEDDING_CONFIG.couple.bride} & ${WEDDING_CONFIG.couple.groom} at ${WEDDING_CONFIG.churchVenue.name} followed by ${WEDDING_CONFIG.venue.name}.`,
    `LOCATION:${WEDDING_CONFIG.churchVenue.fullAddress}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", `${WEDDING_CONFIG.couple.bride}-and-${WEDDING_CONFIG.couple.groom}-Wedding-2026.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

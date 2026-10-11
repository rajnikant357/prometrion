// src/data/analytics.ts
// Standardized client conversion event tracker for Prometrion
// Dispatches structured custom events & pushes to window.dataLayer if present

export type ConversionEventName =
  | "estimator_started"
  | "service_selected"
  | "estimate_generated"
  | "quote_request_submitted"
  | "consultation_booking_confirmed"
  | "estimate_printed";

export interface ConversionEventPayload {
  eventName: ConversionEventName;
  timestamp: string;
  serviceId?: string;
  estimateReference?: string;
  quoteReference?: string;
  bookingReference?: string;
  value?: number;
  metadata?: Record<string, string | number | boolean>;
}

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

/**
 * Tracks a conversion event without collecting personal information
 */
export function trackConversionEvent(
  eventName: ConversionEventName,
  data: Partial<Omit<ConversionEventPayload, "eventName" | "timestamp">> = {}
): void {
  if (typeof window === "undefined") return;

  const payload: ConversionEventPayload = {
    eventName,
    timestamp: new Date().toISOString(),
    ...data,
  };

  // Push to GTM / GA4 dataLayer if available
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...payload,
    });
  }

  // Dispatch standard CustomEvent on window for modular listeners
  try {
    const customEvent = new CustomEvent("prometrion:conversion", {
      detail: payload,
    });
    window.dispatchEvent(customEvent);
  } catch (err) {
    // Graceful fallback for non-supporting environments
  }
}

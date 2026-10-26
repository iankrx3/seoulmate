export type PlanId = "free" | "plus" | "close";

export type SubscriptionStatus = "trialing" | "active" | "past_due" | "canceled";

export type SubscriptionRecord = {
  provider: "stripe";
  externalCustomerId: string;
  externalSubscriptionId: string;
  plan: PlanId;
  status: SubscriptionStatus;
  periodEnd: string;
};

/**
 * Stripe webhooks will write entitlements later.
 * The landing page does not call a billing provider.
 */
export interface BillingProvider {
  applySubscription(record: SubscriptionRecord): Promise<void>;
}

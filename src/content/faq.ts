/**
 * FAQ content — Agency questions first.
 *
 * Answers are grounded and do not overpromise. Where the answer depends on a
 * license or Gumroad config the seller has not confirmed, the answer is
 * conservative and points to the included license.
 */

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What does the Agency Edition let me do with clients?",
    answer:
      "Run the same structured evaluation across client engagements and produce client-facing deliverables: a client discovery workbook, project register, client readiness dashboard, production-readiness report, and a review presentation. The exact usage rights are defined in the included Agency license.",
  },
  {
    question: "What is included in Agency that is not in Standard?",
    answer:
      "Agency includes everything in Standard plus the client-engagement system: Client Discovery Workbook, Project Register, Client Readiness Dashboard, Client Production-Readiness Report, Client Review Presentation, Agency Workflow, and a Failure-Cost Calculator, with client-engagement usage rights per the included license.",
  },
  {
    question: "Can I use the Agency Edition across multiple client engagements?",
    answer:
      "Yes. The Agency Edition is designed to be reused across engagements. The Project Register and Agency Workflow exist specifically to keep runs, agent versions and release decisions organized across clients. The scope of reuse is governed by the included license.",
  },
  {
    question: "Can I give the reports and presentations to clients?",
    answer:
      "Yes. The client readiness dashboard, production-readiness report and review presentation are built to be delivered to clients. Review the included license for the exact terms around distribution and customization before delivering.",
  },
  {
    question: "Can I resell the underlying templates?",
    answer:
      "No. The templates and workbooks may not be redistributed or resold as standalone products. The license grants client-engagement usage rights, not resale rights. When uncertain, the license text in the product files is authoritative.",
  },
  {
    question: "Is this automated testing software?",
    answer:
      "No. The kit is a structured evaluation system of workbooks, test patterns, taxonomies, dashboards and a release gate that a human team uses to run, record and review agent tests. It does not run tests against a live agent on its own.",
  },
  {
    question: "Does it work with n8n, Make and custom agents?",
    answer:
      "Yes. The kit is tool-agnostic. If your n8n, Make or custom workflow behaves like an agent — taking actions, calling tools, escalating, or producing outputs — you can run the same test patterns against it and record the outcomes.",
  },
  {
    question: "Is it tied to OpenAI, Anthropic or another model provider?",
    answer:
      "No. The kit evaluates observed agent behavior rather than calling a specific API, so it works with OpenAI, Anthropic, Google, open-weight models, or any combination behind your own orchestration.",
  },
  {
    question: "Does it certify an AI agent as safe?",
    answer:
      "No, and it does not claim to. The kit produces evidence and a structured release decision. It supports a disciplined go / no-go review. It does not mathematically certify safety, and no number of passing tests can guarantee a system is risk-free.",
  },
  {
    question: "What does a completed evaluation look like?",
    answer:
      "A completed fictional demonstration — a customer-support agent evaluated across 50 representative tests — is included. It shows scope, evaluation results, test outcomes, tool reliability, grounding, recovery, escalation, regression and the release decision. It is clearly labeled as fictional demonstration data, not a real customer case study.",
  },
  {
    question: "Can I customize the files?",
    answer:
      "Yes. The workbooks are meant to be adapted to each engagement's agent, tools and domain. Add or adjust test cases, dimensions and thresholds as needed. Modification rights for personal, internal and client use are described in the included license.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "Refund terms are set on Gumroad at the seller's discretion and are stated on the checkout page. Please review the Gumroad listing before purchase. If a specific guarantee applies, it will be shown there.",
  },
];

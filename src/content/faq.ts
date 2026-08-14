/**
 * FAQ content.
 *
 * Answers real purchasing objections. Wording is grounded and does not
 * overpromise. Where the answer depends on a Gumroad config or license
 * the seller has not yet confirmed, the answer is conservative and
 * points the buyer to the included license.
 */

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is this automated testing software?",
    answer:
      "No. The kit is a structured evaluation system — workbooks, test patterns, taxonomies, dashboards and a release gate that a human team uses to run, record and review agent tests. It does not run tests against your live agent on its own.",
  },
  {
    question: "Do I need to code?",
    answer:
      "No coding is required to use the kit. The workbooks are spreadsheet-based. You fill in agent scope, select test cases, record outcomes and read the results. A technical reviewer can read and use everything directly.",
  },
  {
    question: "Can I use it with n8n or Make workflows?",
    answer:
      "Yes. The kit is tool-agnostic. If your n8n or Make workflow behaves like an agent — taking actions, calling tools, escalating, or producing outputs — you can run the same test patterns against it and record the outcomes.",
  },
  {
    question: "Is it tied to one model provider?",
    answer:
      "No. The kit does not depend on any specific model provider. It evaluates agent behavior, not the model behind it.",
  },
  {
    question: "Can it be used with OpenAI, Anthropic, Google or open models?",
    answer:
      "Yes. Because the kit evaluates observed agent behavior rather than calling a specific API, it works with OpenAI, Anthropic, Google, open-weight models, or any combination behind your own orchestration.",
  },
  {
    question: "Does this certify that my agent is safe?",
    answer:
      "No, and it does not claim to. The kit produces evidence and a structured release decision. It supports a disciplined go / no-go review. It does not mathematically certify safety, and no number of passing tests can guarantee a system is risk-free.",
  },
  {
    question: "What is the difference between Standard and Agency?",
    answer:
      "Standard is for teams evaluating their own agents. Agency includes everything in Standard plus client-engagement assets — discovery, project register, client dashboard, client report, review presentation, agency workflow and a failure-cost calculator — with client-engagement usage rights per the included license.",
  },
  {
    question: "Can Agency buyers use customized reports with clients?",
    answer:
      "Yes. The Agency Edition is designed to produce customized client-facing deliverables across engagements. The exact scope of usage rights is defined in the included license; review it before distributing any file externally.",
  },
  {
    question: "Can the templates themselves be redistributed or resold?",
    answer:
      "No. The templates may not be redistributed or resold as standalone products. The included license governs use; when uncertain, the license text in the product files is authoritative.",
  },
  {
    question: "What files do I receive after purchase?",
    answer:
      "You receive the full evaluation workbook set for your edition — scorecard, test library, tool/recovery tests, escalation tests, cost analysis, regression tracker, incident log, monitoring templates and the production release gate, plus the completed fictional demonstration. Agency adds the client-engagement workbook set.",
  },
  {
    question: "Is a completed example included?",
    answer:
      "Yes. A completed fictional demonstration — a customer-support agent evaluated across 50 representative tests — is included so you can see how a finished evaluation fits together. It is clearly labeled as fictional demonstration data, not a real customer case study.",
  },
  {
    question: "Can I customize the workbooks?",
    answer:
      "Yes. The workbooks are meant to be adapted to your agent, your tools and your domain. Add or adjust test cases, dimensions and thresholds as needed. Modification rights for personal, internal and client use are described in the included license.",
  },
  {
    question: "Is this useful before launch or after launch?",
    answer:
      "Both. Before launch, it surfaces failures before customers hit them. After launch, the regression tracker and incident log let you re-run the same tests after model, prompt or tooling changes and feed production incidents back into the test library.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "Refund terms are set on Gumroad at the seller's discretion and are stated on the checkout page. Please review the Gumroad listing before purchase. If a specific guarantee applies, it will be shown there.",
  },
];

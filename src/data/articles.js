export const articles = [
  {
    id: 1,
    title: "Stabilizing Startup Codebases Without Slowing Delivery",
    slug: "stabilizing-startup-codebases-without-slowing-delivery",
    description:
      "How I approach inherited, fragile systems and still deliver features quickly by standardizing architecture, workflows, and engineering ownership.",
    tags: ["Architecture", "Delivery", "Startup Engineering", "Leadership"],
    image: null,
    publishedDate: "2025-02-18",
    content: `
# Stabilizing Startup Codebases Without Slowing Delivery

When I joined SunCore Digital, delivery was slow, architecture was fragmented, and critical features were frequently delayed.

## What usually goes wrong

- Product teams ask for speed while the codebase needs surgery.
- Engineering standards are undocumented or inconsistent.
- Every urgent change creates more long-term fragility.

## My operating model

1. Protect ongoing delivery first.
2. Identify the top 20% of components causing 80% of incidents.
3. Refactor those components into reusable modules while features are shipping.
4. Add clear conventions for API design, testing, and component structure.

## Practical outcomes

- Fewer release blockers.
- Better collaboration between frontend, mobile, and backend.
- Faster onboarding for engineers joining mid-stream.

Stabilization is not a separate phase. It should run in parallel with product delivery.
    `.trim(),
  },
  {
    id: 2,
    title: "Designing a Multi-Tenant Marketplace Backend at FoodCourt",
    slug: "designing-multi-tenant-marketplace-backend-foodcourt",
    description:
      "Lessons from architecting APIs, order orchestration, vendor tooling, and settlement flows for a marketplace and payments platform.",
    tags: ["NestJS", "Ruby on Rails", "PostgreSQL", "Redis", "AWS"],
    image: null,
    publishedDate: "2024-10-07",
    content: `
# Designing a Multi-Tenant Marketplace Backend at FoodCourt

At FoodCourt, we had to scale ordering, logistics, and payment settlement across vendors and regions without sacrificing reliability.

## Core architecture principles

- Keep tenant boundaries explicit in every service.
- Use asynchronous workflows for high-latency operations.
- Separate write-heavy orchestration paths from read-heavy reporting paths.

## Key technical decisions

- NestJS + Rails services for domain-specific ownership.
- PostgreSQL + Redis for transactional integrity and speed.
- BullMQ queues for retries, backoff, and resilient background work.
- AWS deployment model with observability baked into pipelines.

## What made the biggest difference

Clear service boundaries and queue discipline had more impact than adding new tools. Reliability came from consistency in design decisions.
    `.trim(),
  },
  {
    id: 3,
    title: "Shipping AI Features in Existing Products with RAG",
    slug: "shipping-ai-features-existing-products-rag",
    description:
      "A practical approach to adding LLM-powered workflows, embeddings, and retrieval into production products without overcomplicating the stack.",
    tags: ["AI", "RAG", "OpenAI", "Embeddings", "Product Engineering"],
    image: null,
    publishedDate: "2024-08-14",
    content: `
# Shipping AI Features in Existing Products with RAG

Most teams do not need a large AI platform rewrite. They need targeted workflows that remove repetitive work and improve decision quality.

## Where AI delivered clear value

- Internal reporting summaries.
- Support ticket categorization.
- Workflow automation for operations teams.

## Implementation pattern

1. Start with one narrow workflow.
2. Build retrieval over trusted internal data.
3. Add strict prompt templates and response validation.
4. Measure accuracy and cost before expanding scope.

## Common mistakes

- Trying to solve too many business processes at once.
- Skipping evaluation and relying only on anecdotal quality.
- Ignoring data freshness and source trust.

RAG works best when the product problem is clear and the evaluation loop is tight.
    `.trim(),
  },
  {
    id: 4,
    title: "Practical Observability for Full-Stack Teams",
    slug: "practical-observability-for-full-stack-teams",
    description:
      "How to improve uptime and incident response with tracing, metrics, and logs in a way that is realistic for product-focused engineering teams.",
    tags: ["Observability", "OpenTelemetry", "Prometheus", "Reliability", "SRE"],
    image: null,
    publishedDate: "2022-03-21",
    content: `
# Practical Observability for Full-Stack Teams

At SevenRooms, reliability improvements came from disciplined observability, not from adding complexity.

## Observability baseline

- Distributed tracing for request flow visibility.
- Service-level metrics for saturation, errors, and latency.
- Structured logs with request and tenant context.

## Team-level practices

- Alert on symptoms, not noise.
- Keep runbooks simple and current.
- Run blameless postmortems with concrete follow-up owners.

## Results-oriented mindset

Observability should shorten the time from incident detection to verified recovery. If dashboards look good but incidents still take too long to resolve, the system is incomplete.
    `.trim(),
  },
];

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { WORKFLOW_STAGES, type WorkflowStage } from "@/content/product";

type WorkflowDiagramProps = {
  stages?: WorkflowStage[];
  className?: string;
};

/**
 * The 9-stage production-readiness flow.
 *
 * Desktop (md+): horizontal scrollable row of nodes connected by
 * short arrow segments.
 *
 * Mobile: vertical stack of nodes with a left rail connector.
 *
 * Each node carries a step number, title, one-line description and
 * an asset label (font-mono) so it reads like a real engineering diagram.
 */
export function WorkflowDiagram({
  stages = WORKFLOW_STAGES,
  className,
}: WorkflowDiagramProps) {
  return (
    <div className={cn("w-full", className)}>
      {/* Desktop / tablet — horizontal */}
      <div
        className="hidden md:block"
        role="figure"
        aria-label="Nine-stage production readiness workflow"
      >
        <div className="overflow-x-auto scroll-thin pb-3">
          <ol className="grid min-w-[920px] grid-cols-9 gap-0">
            {stages.map((stage, i) => {
              const isLast = i === stages.length - 1;
              return (
                <li
                  key={stage.step}
                  className="relative flex flex-col items-stretch"
                >
                  {/* Connector */}
                  {!isLast && (
                    <span
                      aria-hidden
                      className="absolute left-[58%] top-[22px] h-px w-[88%] bg-border"
                    />
                  )}

                  {/* Node */}
                  <div className="relative z-10 flex flex-col items-start rounded-lg border border-border bg-card p-3 shadow-sm">
                    <div className="mb-2 flex w-full items-center justify-between">
                      <span className="flex size-9 items-center justify-center rounded-md bg-brand-soft font-mono text-xs font-semibold text-brand">
                        {stage.step}
                      </span>
                      {!isLast && (
                        <ArrowRight
                          aria-hidden
                          className="size-3.5 text-muted-foreground"
                        />
                      )}
                    </div>
                    <p className="text-sm font-semibold leading-tight text-foreground">
                      {stage.title}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">
                      {stage.description}
                    </p>
                    <p className="mt-2 inline-flex items-center rounded border border-border bg-muted/50 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {stage.asset}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      {/* Mobile — vertical stack with left rail */}
      <ol
        className="relative md:hidden"
        aria-label="Nine-stage production readiness workflow (vertical)"
      >
        <span
          aria-hidden
          className="absolute left-[18px] top-2 bottom-2 w-px bg-border"
        />
        {stages.map((stage) => (
          <li
            key={stage.step}
            className="relative pl-12 pb-4 last:pb-0"
          >
            <span className="absolute left-0 top-0 flex size-9 items-center justify-center rounded-md border border-border bg-card font-mono text-xs font-semibold text-brand shadow-sm">
              {stage.step}
            </span>
            <div className="rounded-lg border border-border bg-card p-3 shadow-sm">
              <p className="text-sm font-semibold leading-tight text-foreground">
                {stage.title}
              </p>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">
                {stage.description}
              </p>
              <p className="mt-2 inline-flex items-center rounded border border-border bg-muted/50 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {stage.asset}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
